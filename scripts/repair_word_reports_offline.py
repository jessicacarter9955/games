#!/usr/bin/env python3
"""Repair observed Word Game asset failures without launching a browser.

Dry-run by default. Only pinned original game hosts and paths are allowed.
Use private local QA JSON reports; never publish the recovered assets.
"""
from __future__ import annotations

import argparse
from concurrent.futures import ThreadPoolExecutor
import hashlib
import json
import os
from pathlib import Path
import re
from tempfile import TemporaryDirectory
from urllib.parse import quote, unquote, urlsplit
from urllib.request import HTTPRedirectHandler, Request, build_opener

SPECS = {
    "wordgameswordsearchlyg": ("wordsearchlyg", "word-search-lyg.game-files.crazygames.com", "word-search-lyg/5"),
    "wordgameswordofwonders": ("wordofwonders", "words-of-wonders.game-files.crazygames.com", "words-of-wonders/119"),
    "wordgameswordwipe": ("word-wipe", "word-wipe.game-files.crazygames.com", "word-wipe/3"),
    "wordgameshangman": ("hangman", "hangman-cfc.game-files.crazygames.com", "hangman-cfc/2"),
    "wordgameswording": ("wording", "wording.game-files.crazygames.com", "wording/2"),
    "wordgameswordmeister": ("wordmeister", "wordmeister.game-files.crazygames.com", "wordmeister/6"),
}
EXT = {".png", ".jpg", ".jpeg", ".gif", ".webp", ".json", ".fnt", ".xml",
       ".atlas", ".css", ".js", ".mjs", ".mp3", ".ogg", ".wav", ".woff",
       ".woff2", ".ttf", ".otf", ".wasm", ".csv", ".txt", ".svg"}
MAX_BYTES = 24 * 1024 * 1024
VERSION = re.compile(r"v(?:ersion)?=[A-Za-z0-9._-]{1,64}\Z")


class NoRedirect(HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        raise ValueError("Redirect refused: original host must be exact")


def target_for(base, game, raw):
    folder, host, version = SPECS[game]
    u = urlsplit(raw)
    prefix = f"/local-mirror/{game}/{host}/{version}/"
    path = unquote(u.path)
    if (u.scheme != "http" or u.hostname not in {"127.0.0.1", "localhost"}
            or not path.startswith(prefix) or u.username or u.password):
        raise ValueError("Not an observed local game asset")
    rel = path[len(prefix):]
    parts = rel.split("/")
    if any(not re.fullmatch(r"[A-Za-z0-9_ ().@+-][A-Za-z0-9_ ().@+-]*", p)
           or p.startswith(".") or p.endswith((" ", ".")) for p in parts):
        raise ValueError("Unsafe or unsupported path")
    if Path(rel).suffix.lower() not in EXT:
        raise ValueError("Unsupported asset type")
    if u.query and not VERSION.fullmatch(u.query):
        raise ValueError("Unrecognized query; do not forward tokens or APIs")
    root = (base / folder / "hosts" / host / version).resolve()
    dest = root.joinpath(*parts).resolve()
    dest.relative_to(root)
    source = f"https://{host}/{version}/" + quote(rel, safe="/-_.()@+")
    if u.query:
        source += "?" + u.query
        dest = dest.with_name(dest.name + "__q_" +
                              hashlib.sha256(source.encode()).hexdigest()[:12])
    return dest, source, Path(rel).suffix.lower()


def validate(data, ext):
    if not data or len(data) > MAX_BYTES:
        raise ValueError("Empty or oversize response")
    if data[:512].lstrip().lower().startswith((b"<html", b"<!doctype html")):
        raise ValueError("HTML response instead of asset")
    signatures = {".png": b"\x89PNG\r\n\x1a\n", ".jpg": b"\xff\xd8",
                  ".jpeg": b"\xff\xd8", ".wasm": b"\0asm",
                  ".woff": b"wOFF", ".woff2": b"wOF2", ".ogg": b"OggS",
                  ".gif": b"GIF"}
    if ext in signatures and not data.startswith(signatures[ext]):
        raise ValueError("Invalid asset signature")
    if ext == ".webp" and not (data.startswith(b"RIFF") and data[8:12] == b"WEBP"):
        raise ValueError("Invalid WebP signature")
    if ext == ".json":
        json.loads(data)
    if ext == ".fnt" and not data.startswith(b"BMF"):
        if b"char" not in data or b"page" not in data:
            raise ValueError("Invalid bitmap font")


def recover(task, apply):
    game, dest, url, ext = task
    result = {"game": game, "url": url, "status": "missing"}
    try:
        if dest.is_file():
            data = dest.read_bytes()
            validate(data, ext)
            result["status"] = "existing"
        elif not apply:
            return result
        else:
            with build_opener(NoRedirect()).open(Request(
                    url, headers={"User-Agent": "Mozilla/5.0"}), timeout=15) as response:
                if response.status != 200:
                    raise ValueError("Expected HTTP 200")
                length = int(response.headers.get("Content-Length") or 0)
                if length > MAX_BYTES:
                    raise ValueError("Oversize response")
                data = response.read(MAX_BYTES + 1)
                if length and length != len(data):
                    raise ValueError("Truncated response")
            validate(data, ext)
            dest.parent.mkdir(parents=True, exist_ok=True)
            tmp = dest.with_name(dest.name + ".repair-" + str(os.getpid()))
            try:
                with tmp.open("xb") as stream:
                    stream.write(data)
                # Publish without replacing an existing original.
                try:
                    os.link(tmp, dest)
                    result["status"] = "recovered"
                except FileExistsError:
                    data = dest.read_bytes()
                    validate(data, ext)
                    result["status"] = "existing"
            finally:
                tmp.unlink(missing_ok=True)
        result.update(bytes=len(data), sha256=hashlib.sha256(data).hexdigest())
    except Exception as exc:
        result.update(status="blocked", reason=str(exc)[:220])
    return result


def plan(base, reports):
    tasks = {}
    skipped = 0
    for p in reports:
        doc = json.loads(p.read_text(encoding="utf-8"))
        game = doc.get("id")
        if game not in SPECS:
            skipped += 1
            continue
        for item in doc.get("httpErrors", []):
            if item.get("status") != 404:
                continue
            try:
                dest, url, ext = target_for(base, game, item["url"])
                tasks[dest] = (game, dest, url, ext)
            except (KeyError, ValueError):
                skipped += 1
    return list(tasks.values()), skipped


def self_test():
    with TemporaryDirectory() as tmp:
        base = Path(tmp)
        game = "wordgameswordsearchlyg"
        _, host, version = SPECS[game]
        url = f"http://127.0.0.1:8014/local-mirror/{game}/{host}/{version}/assets/sd/ui.json?v=2"
        dest, source, ext = target_for(base, game, url)
        assert dest.name == "ui.json__q_" + hashlib.sha256(source.encode()).hexdigest()[:12]
        for bad in [url.replace("ui.json", "../ui.json"), url + "&token=secret",
                    url.replace(host, "evil.example"), url.replace("127.0.0.1", "evil.example")]:
            try:
                target_for(base, game, bad)
            except ValueError:
                pass
            else:
                raise AssertionError("Unsafe URL accepted")
        report = base / "result.json"
        report.write_text(json.dumps({"id": game, "httpErrors": [
            {"status": 404, "url": url}, {"status": 404, "url": url},
            {"status": 404, "url": "http://127.0.0.1:8014/favicon.ico"}]}))
        tasks, skipped = plan(base, [report])
        assert len(tasks) == 1 and skipped == 1
        assert recover(tasks[0], False)["status"] == "missing"
        assert not dest.exists()
        dest.parent.mkdir(parents=True)
        dest.write_bytes(b'{"frames":{}}')
        assert recover(tasks[0], False)["status"] == "existing"
        print("PASS: exact version, traversal, host, query, deduplication, dry-run, cache")
    return 0


def main():
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--base", type=Path, default=Path.home() / "Downloads" /
                   "_chatgpt_new45_cdn_mirrors" / "Word games")
    p.add_argument("--report-dir", type=Path, action="append", default=[])
    p.add_argument("--workers", type=int, choices=range(1, 5), default=2)
    p.add_argument("--apply", action="store_true")
    p.add_argument("--self-test", action="store_true")
    args = p.parse_args()
    if args.self_test:
        return self_test()
    reports = sorted({f for d in args.report_dir for f in d.rglob("result.json")})
    if not reports:
        p.error("No existing result.json reports found")
    tasks, skipped = plan(args.base, reports)
    with ThreadPoolExecutor(max_workers=args.workers) as pool:
        results = list(pool.map(lambda t: recover(t, args.apply), tasks))
    print(json.dumps({"reports": len(reports), "tasks": len(tasks),
                      "ignored": skipped, "apply": args.apply,
                      "results": results, "gameplayCertified": False}, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
