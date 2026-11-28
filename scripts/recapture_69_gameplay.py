#!/usr/bin/env python3
"""Incremental browser recapture of 69 known CrazyGames game pages.

Use ONLY on the Windows machine holding the local mirrors, not on a public
repository checkout. This records actually observed responses, not a full
offline playable copy. It never tries to bypass authentication or DRM.
"""
from __future__ import annotations

import argparse
from collections import defaultdict
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


def trusted_hosts(row: dict, catalog_game: dict, audit_games: list) -> set[str]:
    """Only the game-specific hosts identified before recapture are eligible."""
    def norm(value):
        return re.sub(r"[^a-z0-9]", "", str(value).lower())

    zip_name = Path(catalog_game["sourceZip"]).stem
    source = "old" if catalog_game["category"] == "Puzzles" else "new"
    matches = [
        g for g in audit_games if g.get("source") == source and
        norm(g.get("game", "")) in {
            norm(zip_name), norm(catalog_game["id"]),
            norm(catalog_game["title"]),
            *(["nutsortbuildthecity"] if catalog_game["id"] == "findthecowcat" else [])
        }
    ]
    if len(matches) != 1:
        raise ValueError("Cannot verify mirror host ownership: " + row["id"])
    hosts = {str(host).lower() for host in matches[0].get("hosts", [])}
    for url in matches[0].get("loader_urls", []):
        host = urlsplit(url).hostname
        if host:
            hosts.add(host.lower())
    hosts.add(row["slug"] + ".game-files.crazygames.com")
    return {h for h in hosts if h not in SKIP_EXACT and
            not any(h == x or h.endswith("." + x) for x in SKIP) and
            h not in {"imgs.crazygames.com", "builds.crazygames.com",
                      "api.crazygames.com", "model.crazygames.com"}}


async def capture(row: dict, root: Path, browser, seconds: int,
                  click_play: bool, max_file_mb: int,
                  approved_hosts: set[str], download_slots: asyncio.Semaphore,
                  host_slots: dict[str, asyncio.Semaphore]) -> dict:
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
    in_flight: set[Path] = set()
    context = await asyncio.wait_for(
        browser.new_context(accept_downloads=False), timeout=20)
    try:
        page = await asyncio.wait_for(context.new_page(), timeout=20)
    except BaseException:
        await context.close()
        raise
    page.on("pageerror", lambda e: errors.append(str(e)[:400]))

    async def save(response):
        url = response.url
        if not safe_response(url, response.request.resource_type):
            return
        if (urlsplit(url).hostname or "").lower() not in approved_hosts:
            return  # Portal, ads, embeds of unrelated games: never save.
        if response.status != 200:
            if len(failures) < 100:
                failures.append({"url": url, "status": response.status})
            stats["failed"] += 1
            return
        dest = target_for(root, url)
        if dest.is_file() and dest.stat().st_size > 0:
            stats["existing"] += 1
            return
        if dest in in_flight:
            return
        in_flight.add(dest)
        host = (urlsplit(url).hostname or '').lower()
        async with sem, host_slots[host], download_slots:
            try:
                length = int(response.headers.get("content-length", 0) or 0)
                if length > max_file_mb * 1048576:
                    return
                # Some third-party/streaming responses never finish. Bound
                # each body read so one response cannot stall the whole batch.
                body = await asyncio.wait_for(response.body(), timeout=20)
                if not body or len(body) > max_file_mb * 1048576:
                    return
                dest.parent.mkdir(parents=True, exist_ok=True)
                tmp = dest.with_name(dest.name + '.capture-tmp')
                tmp.write_bytes(body)
                tmp.replace(dest)
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
            finally:
                in_flight.discard(dest)

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
        context.remove_listener("response", on_response)
        if tasks:
            done, pending = await asyncio.wait(list(tasks), timeout=25)
            if pending:
                errors.append(f"{len(pending)} asset response tasks timed out")
                stats["failed"] += len(pending)
                for task in pending:
                    task.cancel()
                # Do not wait indefinitely for third-party streams.
                await asyncio.gather(*pending, return_exceptions=True)
        try:
            await asyncio.wait_for(context.close(), timeout=15)
        except (asyncio.TimeoutError, Exception) as exc:
            errors.append("context close: " + str(exc)[:180])
    report = {
        "id": row["id"], "source_url": row["url"], "started": started,
        "captured_at": datetime.now(timezone.utc).isoformat(),
        "stats": stats, "resources": list(entries.values()),
        "failed_requests": failures, "page_errors": errors[:30],
        "complete_offline": False,
        "note": "Only responses seen in this browser session; no bypass or gameplay guarantee",
    }
    tmp = manifest_path.with_suffix('.tmp')
    tmp.write_text(json.dumps(report, indent=2, ensure_ascii=False),
                   encoding="utf-8")
    tmp.replace(manifest_path)
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
    parser.add_argument("--workers", type=int, choices=range(1, 5), default=1,
                        help="Concurrent browser contexts; use 2 on low-RAM PCs")
    parser.add_argument("--download-limit", type=int, choices=range(1, 13),
                        default=6, help="Global concurrent response body reads")
    parser.add_argument("--per-host-limit", type=int, choices=range(1, 7),
                        default=3)
    parser.add_argument("--click-play", action="store_true")
    parser.add_argument("--start-after", default="",
                        help="Resume from the game following this ID or URL slug")
    parser.add_argument("--max-file-mb", type=int, default=250)
    parser.add_argument("--headed", action="store_true")
    parser.add_argument("--report", type=Path,
                        default=Path.home() / "Downloads" /
                        "_reskin_69_capture_summary.json")
    args = parser.parse_args()
    links = json.loads(SOURCES.read_text(encoding="utf-8"))["games"]
    catalog, roots = build_index(args.downloads, ROOT)
    audit_path = args.downloads / "_mirror_69_deep_audit_20261125.json"
    if not audit_path.is_file():
        parser.error("Trusted host audit missing: " + str(audit_path))
    audit_games = json.loads(audit_path.read_text(encoding="utf-8"))["games"]
    catalog_by_id = {g["id"]: g for g in catalog["games"]}
    if len(links) != catalog["total"] or len(links) != 69:
        parser.error("Sources/catalog must both contain 69 games")
    root_ids = {g["id"] for g in catalog["games"]}
    if set(row["id"] for row in links) != root_ids:
        parser.error("Source URLs do not match catalog IDs")
    if args.start_after:
        matches = [
            i for i, row in enumerate(links)
            if row["id"] == args.start_after or row["slug"] == args.start_after
        ]
        if len(matches) != 1:
            parser.error("Unknown --start-after game ID or slug")
        links = links[matches[0] + 1:]
    if args.game:
        requested = set(args.game)
        links = [
            row for row in links
            if row["id"] in requested or row["slug"] in requested
        ]
        if not links:
            parser.error("No matching game ids or slugs")
    selected_roots = [roots[row['id']].resolve() for row in links
                      if row['id'] in roots]
    if len(set(selected_roots)) != len(selected_roots):
        parser.error('Selected games share a mirror root; refuse concurrent writes')
    if len({p.parent for p in selected_roots}) != len(selected_roots):
        parser.error('Selected games share a manifest directory')
    results = []
    download_slots = asyncio.Semaphore(args.download_limit)
    host_slots = defaultdict(lambda: asyncio.Semaphore(args.per_host_limit))

    def checkpoint(complete: bool = False) -> None:
        summary = {
            "captured_at": datetime.now(timezone.utc).isoformat(),
            "complete": complete,
            "workers": args.workers,
            "download_limit": args.download_limit,
            "per_host_limit": args.per_host_limit,
            "games_attempted": len(results),
            "new_files": sum(r.get("stats", {}).get("new", 0) for r in results),
            "bytes_new": sum(
                r.get("stats", {}).get("bytes_new", 0) for r in results),
            "errors": [r["id"] for r in results
                       if r.get("error") or r.get("page_errors")],
            "results": [
                {"id": r["id"], **r.get("stats", {}),
                 "error": r.get("error"),
                 "page_errors": r.get("page_errors", [])[:3]}
                for r in results
            ],
        }
        args.report.parent.mkdir(parents=True, exist_ok=True)
        tmp = args.report.with_name(args.report.name + ".tmp")
        tmp.write_text(json.dumps(summary, indent=2, ensure_ascii=False),
                       encoding="utf-8")
        tmp.replace(args.report)
    async with async_playwright() as play:
        browser = await play.chromium.launch(headless=not args.headed)
        queue = asyncio.Queue()
        for row in links:
            queue.put_nowait(row)

        async def worker():
            while not queue.empty():
                row = queue.get_nowait()
                try:
                    root = roots.get(row["id"])
                    if not root:
                        result = {"id": row["id"], "error": "missing_root"}
                    else:
                        print(f"START {row['id']}", flush=True)
                        try:
                            allowed = trusted_hosts(
                                row, catalog_by_id[row["id"]], audit_games)
                            result = await asyncio.wait_for(
                                capture(row, root, browser, args.seconds,
                                        args.click_play, args.max_file_mb, allowed,
                                        download_slots, host_slots),
                                timeout=max(100, args.seconds + 80))
                        except Exception as exc:
                            print(f"FAILED {row['id']}: {str(exc)[:150]}",
                                  flush=True)
                            result = {"id": row["id"],
                                      "error": str(exc)[:300]}
                    results.append(result)
                    # Synchronous atomic checkpoint: exactly one event-loop
                    # writer at a time, no await between append and replace.
                    checkpoint()
                finally:
                    queue.task_done()

        jobs = [asyncio.create_task(worker())
                for _ in range(min(args.workers, len(links)))]
        try:
            await asyncio.gather(*jobs)
        finally:
            for job in jobs:
                if not job.done():
                    job.cancel()
            await asyncio.gather(*jobs, return_exceptions=True)
            await browser.close()
    checkpoint(complete=True)
    print("SUMMARY " + json.dumps({
        "games_attempted": len(results),
        "new_files": sum(r.get("stats", {}).get("new", 0)
                         for r in results),
        "bytes_new": sum(r.get("stats", {}).get("bytes_new", 0)
                         for r in results),
    }, ensure_ascii=False), flush=True)


if __name__ == "__main__":
    asyncio.run(main())
