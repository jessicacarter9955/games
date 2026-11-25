#!/usr/bin/env python3
"""Incremental browser recapture of 69 known CrazyGames game pages.

Use ONLY on the Windows machine holding the local mirrors, not on a public
repository checkout. This records actually observed responses, not a full
offline playable copy. It never tries to bypass authentication or DRM.
"""
from __future__ import annotations

import argparse
import asyncio
import hashlib
import json
import re
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import unquote, urlsplit

from playwright.async_api import async_playwright
from serve_local_mirrors import build_index

ROOT = Path(__file__).resolve().parents[1]
SOURCES = ROOT / "reskinner" / "original-urls.json"
SKIP = (
    "google-analytics.com", "googletagmanager.com", "doubleclick.net",
    "googlesyndication.com", "googleadservices.com", "sentry.io",
    "facebook.net", "hotjar.com", "segment.io",
)
SKIP_EXACT = {
    "crazygames.com", "www.crazygames.com", "assets.crazygames.com",
    "images.crazygames.com",
}
RESOURCE_TYPES = {
    "document", "script", "stylesheet", "image", "font", "media",
    "xhr", "fetch", "manifest", "other",
}


def safe_response(url: str, resource_type: str) -> bool:
    parsed = urlsplit(url)
    host = (parsed.hostname or "").lower()
    if parsed.scheme not in {"http", "https"}:
        return False
    if not host or host in SKIP_EXACT:
        return False
    if any(host == domain or host.endswith("." + domain) for domain in SKIP):
        return False
    return resource_type in RESOURCE_TYPES


def target_for(root: Path, url: str) -> Path:
    parsed = urlsplit(url)
    host = re.sub(r"[^a-zA-Z0-9._-]", "_", parsed.hostname or "unknown")
    parts = [
        re.sub(r"[^a-zA-Z0-9._-]", "_", unquote(part))[:140]
        for part in parsed.path.split("/")
        if part not in {"", ".", ".."}
    ]
    if not parts:
        parts = ["index.html"]
    if parsed.query:
        parts[-1] += "__q_" + hashlib.sha256(url.encode()).hexdigest()[:12]
    return root / host / Path(*parts)


async def capture(row: dict, root: Path, browser, seconds: int,
                  click_play: bool, max_file_mb: int) -> dict:
    root.mkdir(parents=True, exist_ok=True)
    manifest_path = root.parent / "_reskin_69_incremental.json"
    try:
        old = json.loads(manifest_path.read_text(encoding="utf-8"))
    except (OSError, ValueError):
        old = {}
    entries = {
        e["url"]: e for e in old.get("resources", [])
        if isinstance(e, dict) and isinstance(e.get("url"), str)
    }
    failures: list[dict] = []
    errors: list[str] = []
    stats = {"new": 0, "existing": 0, "failed": 0, "bytes_new": 0}
    tasks: set = set()
    sem = asyncio.Semaphore(6)
    context = await browser.new_context(accept_downloads=False)
    page = await context.new_page()
    page.on("pageerror", lambda e: errors.append(str(e)[:400]))

    async def save(response):
        url = response.url
        if not safe_response(url, response.request.resource_type):
            return
        if response.status < 200 or response.status >= 300:
            if len(failures) < 100:
                failures.append({"url": url, "status": response.status})
            stats["failed"] += 1
            return
        dest = target_for(root, url)
        if dest.is_file() and dest.stat().st_size > 0:
            stats["existing"] += 1
            return
        async with sem:
            try:
                length = int(response.headers.get("content-length", 0) or 0)
                if length > max_file_mb * 1048576:
                    return
                body = await response.body()
                if not body or len(body) > max_file_mb * 1048576:
                    return
                dest.parent.mkdir(parents=True, exist_ok=True)
                dest.write_bytes(body)
                entries[url] = {
                    "url": url, "path": str(dest.relative_to(root)),
                    "bytes": len(body), "sha256": hashlib.sha256(body).hexdigest(),
                    "content_type": response.headers.get("content-type", ""),
                }
                stats["new"] += 1
                stats["bytes_new"] += len(body)
            except Exception as exc:
                stats["failed"] += 1
                if len(failures) < 100:
                    failures.append({"url": url, "reason": str(exc)[:250]})

    def on_response(response):
        t = asyncio.create_task(save(response))
        tasks.add(t)
        t.add_done_callback(tasks.discard)

    context.on("response", on_response)
    started = datetime.now(timezone.utc).isoformat()
    try:
        await page.goto(row["url"], wait_until="domcontentloaded", timeout=60000)
        await page.wait_for_timeout(min(4500, seconds * 350))
        if click_play:
            for frame in list(page.frames)[1:]:
                try:
                    button = frame.get_by_role(
                        "button", name=re.compile(
                            r"^(play|start|continue|begin|gioca|inizia)$", re.I
                        )
                    ).first
                    await button.click(timeout=1500)
                    break
                except Exception:
                    continue
        await page.wait_for_timeout(max(0, seconds * 1000 - min(4500, seconds * 350)))
    except Exception as exc:
        errors.append("navigation: " + str(exc)[:350])
    finally:
        if tasks:
            await asyncio.gather(*list(tasks), return_exceptions=True)
        await context.close()
    report = {
        "id": row["id"], "source_url": row["url"], "started": started,
        "captured_at": datetime.now(timezone.utc).isoformat(),
        "stats": stats, "resources": list(entries.values()),
        "failed_requests": failures, "page_errors": errors[:30],
        "complete_offline": False,
        "note": "Only responses seen in this browser session; no bypass or gameplay guarantee",
    }
    manifest_path.write_text(json.dumps(report, indent=2, ensure_ascii=False),
                             encoding="utf-8")
    print(f"{row['id']}: +{stats['new']} files, "
          f"{stats['existing']} existing, {stats['failed']} failed", flush=True)
    return report


async def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--downloads", type=Path,
                        default=Path.home() / "Downloads")
    parser.add_argument("--game", action="append", default=[],
                        help="Game ID or URL slug, repeat for multiple games")
    parser.add_argument("--seconds", type=int, default=12)
    parser.add_argument("--click-play", action="store_true")
    parser.add_argument("--max-file-mb", type=int, default=250)
    parser.add_argument("--headed", action="store_true")
    parser.add_argument("--report", type=Path,
                        default=Path.home() / "Downloads" /
                        "_reskin_69_capture_summary.json")
    args = parser.parse_args()
    links = json.loads(SOURCES.read_text(encoding="utf-8"))["games"]
    catalog, roots = build_index(args.downloads, ROOT)
    if len(links) != catalog["total"] or len(links) != 69:
        parser.error("Sources/catalog must both contain 69 games")
    root_ids = {g["id"] for g in catalog["games"]}
    if set(row["id"] for row in links) != root_ids:
        parser.error("Source URLs do not match catalog IDs")
    if args.game:
        requested = set(args.game)
        links = [
            row for row in links
            if row["id"] in requested or row["slug"] in requested
        ]
        if not links:
            parser.error("No matching game ids or slugs")
    results = []
    async with async_playwright() as play:
        browser = await play.chromium.launch(headless=not args.headed)
        try:
            for row in links:
                root = roots.get(row["id"])
                if not root:
                    print(row["id"] + ": missing local mirror root", flush=True)
                    results.append({"id": row["id"], "error": "missing_root"})
                    continue
                try:
                    results.append(await capture(
                        row, root, browser, args.seconds, args.click_play,
                        args.max_file_mb
                    ))
                except Exception as exc:
                    results.append({"id": row["id"], "error": str(exc)[:300]})
        finally:
            await browser.close()
    summary = {
        "captured_at": datetime.now(timezone.utc).isoformat(),
        "games_attempted": len(results),
        "new_files": sum(r.get("stats", {}).get("new", 0) for r in results),
        "bytes_new": sum(r.get("stats", {}).get("bytes_new", 0) for r in results),
        "errors": [r["id"] for r in results
                   if r.get("error") or r.get("page_errors")],
        "results": [
            {"id": r["id"], **r.get("stats", {}),
             "error": r.get("error"), "page_errors": r.get("page_errors", [])[:3]}
            for r in results
        ],
    }
    args.report.write_text(json.dumps(summary, indent=2, ensure_ascii=False),
                           encoding="utf-8")
    print("SUMMARY " + json.dumps(
        {key: summary[key] for key in ("games_attempted", "new_files", "bytes_new")},
        ensure_ascii=False), flush=True)


if __name__ == "__main__":
    asyncio.run(main())
