#!/usr/bin/env python3
"""Incremental browser capture of gameplay assets from the 45 game pages.

This records resources *observed* during browser sessions; it does not
certify an offline-complete game, bypass access controls, or crawl hidden URLs.
Run locally on the Windows machine that holds the existing mirror directory.
"""
import argparse
import asyncio
import hashlib
import json
import re
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import unquote, urlsplit

from playwright.async_api import async_playwright

ROOT = Path(__file__).resolve().parents[1]
AUDIT = ROOT / "RESKIN_AUDIT_NEW45.md"
DEFAULT_OUT = Path.home() / "Downloads" / "_chatgpt_new45_cdn_mirrors"
GAME_LINK = re.compile(r"https://www\.crazygames\.com/game/([a-z0-9-]+)")
SKIP_HOSTS = (
    "google-analytics.com", "googletagmanager.com", "doubleclick.net",
    "googlesyndication.com", "googleadservices.com", "facebook.net",
    "sentry.io", "segment.io", "hotjar.com", "clarity.ms",
)
ALLOWED_TYPES = {
    "document", "script", "stylesheet", "image", "font", "media",
    "xhr", "fetch", "manifest", "other",
}


def game_pages():
    text = AUDIT.read_text(encoding="utf-8")
    return list(dict.fromkeys(GAME_LINK.findall(text)))


def is_game_resource(url, resource_type):
    if resource_type not in ALLOWED_TYPES:
        return False
    parsed = urlsplit(url)
    if parsed.scheme not in ("http", "https"):
        return False
    host = (parsed.hostname or "").lower()
    if not host or any(host == x or host.endswith("." + x) for x in SKIP_HOSTS):
        return False
    # The portal's own interface, ads and tracking assets are not game assets.
    if host in ("crazygames.com", "www.crazygames.com",
                "assets.crazygames.com", "images.crazygames.com"):
        return False
    return True


def destination(base, url):
    parsed = urlsplit(url)
    host = re.sub(r"[^a-zA-Z0-9._-]", "_", parsed.hostname or "unknown")
    parts = [re.sub(r"[^a-zA-Z0-9._-]", "_", unquote(p))[:140]
             for p in parsed.path.split("/") if p not in ("", ".", "..")]
    if not parts:
        parts = ["index.html"]
    # Distinguish signed/query URLs and avoid Windows unsafe path names.
    if parsed.query:
        suffix = hashlib.sha256(url.encode("utf-8")).hexdigest()[:12]
        parts[-1] += "__q_" + suffix
    return base / "hosts" / host / Path(*parts)


async def capture(slug, output, seconds, headed, max_mb):
    game_dir = output / slug
    game_dir.mkdir(parents=True, exist_ok=True)
    manifest_path = game_dir / "_incremental_browser_capture.json"
    previous = {}
    if manifest_path.exists():
        try:
            previous = json.loads(manifest_path.read_text(encoding="utf-8"))
        except (OSError, ValueError):
            pass
    entries = {x["url"]: x for x in previous.get("resources", [])
               if isinstance(x, dict) and x.get("url")}
    failures = []
    tasks = set()
    sem = asyncio.Semaphore(6)
    stats = {"new": 0, "existing": 0, "failed": 0, "bytes_new": 0}

    async with async_playwright() as playwright:
        browser = await playwright.chromium.launch(headless=not headed)
        context = await browser.new_context(accept_downloads=False)
        page = await context.new_page()

        async def store(response):
            url = response.url
            request = response.request
            if not is_game_resource(url, request.resource_type):
                return
            if response.status < 200 or response.status >= 300:
                failures.append({"url": url, "status": response.status})
                stats["failed"] += 1
                return
            target = destination(game_dir, url)
            if target.is_file() and target.stat().st_size > 0:
                stats["existing"] += 1
                return
            async with sem:
                try:
                    length = int(response.headers.get("content-length", "0") or "0")
                    if length > max_mb * 1024 * 1024:
                        failures.append({"url": url, "reason": "response_too_large"})
                        return
                    body = await response.body()
                    if not body or len(body) > max_mb * 1024 * 1024:
                        failures.append({"url": url, "reason": "empty_or_too_large"})
                        return
                    target.parent.mkdir(parents=True, exist_ok=True)
                    target.write_bytes(body)
                    entries[url] = {
                        "url": url,
                        "path": str(target.relative_to(game_dir)).replace("\\", "/"),
                        "size": len(body),
                        "sha256": hashlib.sha256(body).hexdigest(),
                        "content_type": response.headers.get("content-type", ""),
                        "http_status": response.status,
                    }
                    stats["new"] += 1
                    stats["bytes_new"] += len(body)
                except Exception as exc:
                    failures.append({"url": url, "reason": str(exc)[:400]})
                    stats["failed"] += 1

        def observe(response):
            task = asyncio.create_task(store(response))
            tasks.add(task)
            task.add_done_callback(tasks.discard)

        context.on("response", observe)
        url = "https://www.crazygames.com/game/" + slug
        try:
            await page.goto(url, wait_until="domcontentloaded", timeout=60000)
            await page.wait_for_timeout(seconds * 1000)
            # Headed mode permits manual play through additional screens/levels.
        except Exception as exc:
            failures.append({"url": url, "reason": "page: " + str(exc)[:400]})
        finally:
            if tasks:
                await asyncio.gather(*list(tasks), return_exceptions=True)
            await browser.close()

    report = {
        "game": slug, "source_page": url,
        "captured_at": datetime.now(timezone.utc).isoformat(),
        "session_seconds": seconds,
        "stats_this_run": stats, "resources": list(entries.values()),
        "failed_requests": failures,
        "complete_offline": False,
        "note": "Only resources observed in this session; later levels may need manual play.",
    }
    manifest_path.write_text(json.dumps(report, indent=2, ensure_ascii=False),
                             encoding="utf-8")
    print(f"{slug}: +{stats['new']} files / {stats['bytes_new']:,} bytes; "
          f"{stats['existing']} already present; {len(failures)} failures")
    return report


async def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, default=DEFAULT_OUT)
    parser.add_argument("--game", action="append", help="Game slug; repeat as needed")
    parser.add_argument("--seconds", type=int, default=35,
                        help="Seconds to leave the game open (default: 35)")
    parser.add_argument("--headed", action="store_true",
                        help="Visible browser: interact manually to reach more scenes")
    parser.add_argument("--max-file-mb", type=int, default=250)
    args = parser.parse_args()
    slugs = game_pages()
    if args.game:
        unknown = set(args.game) - set(slugs)
        if unknown:
            parser.error("Unrecognized game(s): " + ", ".join(sorted(unknown)))
        slugs = [s for s in slugs if s in args.game]
    print(f"Capturing {len(slugs)} games to {args.output}")
    args.output.mkdir(parents=True, exist_ok=True)
    reports = []
    for slug in slugs:
        try:
            reports.append(await capture(slug, args.output, args.seconds,
                                         args.headed, args.max_file_mb))
        except Exception as exc:
            print(f"{slug}: ERROR {exc}")
            reports.append({"game": slug, "error": str(exc)})
    summary = {
        "captured_at": datetime.now(timezone.utc).isoformat(),
        "games_attempted": len(slugs),
        "new_files": sum(r.get("stats_this_run", {}).get("new", 0) for r in reports),
        "bytes_new": sum(r.get("stats_this_run", {}).get("bytes_new", 0) for r in reports),
        "games_with_errors": [r["game"] for r in reports
                              if r.get("error") or r.get("failed_requests")],
        "results": [{"game": r["game"], **r.get("stats_this_run", {})}
                    for r in reports],
    }
    out = args.output / "_incremental_capture_summary.json"
    out.write_text(json.dumps(summary, indent=2, ensure_ascii=False),
                   encoding="utf-8")
    print("Summary:", out)


if __name__ == "__main__":
    asyncio.run(main())
