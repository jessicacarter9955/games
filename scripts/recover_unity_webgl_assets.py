#!/usr/bin/env python3
"""Recover exactly observed missing Unity WebGL assets from their original CDN.

Dry-run by default. Never overwrite source files, skip unrelated domains,
preserve original compressed bytes, and never claim gameplay certification.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import os
from pathlib import Path
import re
import tempfile
from urllib.error import HTTPError, URLError
from urllib.parse import quote
from urllib.request import Request, urlopen

from serve_local_mirrors import REPO, build_index

# Names and original host come from the 2026-11-25 user diagnostic, not guesses.
MISSING = {
    "homedesigndecorate": {
        "host": "home-design---decorate-house.game-files.crazygames.com",
        "folder": "home-design---decorate-house/48",
        "files": [
            "Build/f41b23a1a54274499d2432b28f3c1028.data.br",
            "Build/73d836f317b1f3e03dac3fd4b73f3332.wasm.br",
        ],
    },
}
UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
      "AppleWebKit/537.36 Chrome/142.0 Safari/537.36")
EXT = (".wasm.br", ".data.br", ".framework.js.br",
       ".wasm.gz", ".data.gz", ".framework.js.gz", ".loader.js")


def recover(root: Path, spec: dict, name: str, apply: bool, max_bytes: int) -> dict:
    host, folder = spec["host"], spec["folder"]
    if not (re.fullmatch(r"[a-z0-9.-]+\.game-files\.crazygames\.com", host)
            and re.fullmatch(r"[a-z0-9-]+/[0-9]+", folder)
            and name.startswith("Build/") and name.endswith(EXT)
            and "\\" not in name and ".." not in Path(name).parts):
        raise ValueError("Unsafe or unexpected original Unity CDN path")
    dest = (root / host / folder / name).resolve()
    dest.relative_to(root.resolve())
    url = "https://" + host + "/" + quote(folder + "/" + name, safe="/-._~")
    result = {"asset": name, "url": url}
    if dest.is_symlink():
        return {**result, "status": "unsafe_symlink"}
    if dest.is_file():
        return {**result, "status": "already_present",
                "bytes": dest.stat().st_size}
    if dest.exists():
        return {**result, "status": "conflicting_path"}
    if not apply:
        return {**result, "status": "missing_dry_run"}

    tmp = None
    try:
        request = Request(url, headers={
            "User-Agent": UA,
            "Referer": "https://www.crazygames.com/",
            "Accept-Encoding": "identity",
        })
        with urlopen(request, timeout=75) as response:
            if response.status != 200:
                raise ValueError(f"Unexpected status {response.status}")
            length = response.headers.get("Content-Length")
            if length and int(length) > max_bytes:
                raise ValueError("File exceeds maximum size")
            content_type = response.headers.get("Content-Type", "").lower()
            if "text/html" in content_type or "application/json" in content_type:
                raise ValueError("Not a Unity build binary")
            dest.parent.mkdir(parents=True, exist_ok=True)
            fd, tmp_name = tempfile.mkstemp(
                prefix=".2night-unity-", suffix=".part", dir=dest.parent)
            tmp = Path(tmp_name)
            size, first, digest = 0, b"", hashlib.sha256()
            with os.fdopen(fd, "wb") as out:
                while True:
                    chunk = response.read(1024 * 1024)
                    if not chunk:
                        break
                    size += len(chunk)
                    if size > max_bytes:
                        raise ValueError("File exceeds maximum size")
                    if len(first) < 128:
                        first += chunk[:128 - len(first)]
                    out.write(chunk)
                    digest.update(chunk)
                out.flush()
                os.fsync(out.fileno())
            if size < 1024 or (length and size != int(length)):
                raise ValueError("Empty, too-small or incomplete build")
            if first.lstrip().lower().startswith(
                    (b"<!doctype", b"<html", b"<?xml", b"{")):
                raise ValueError("HTML/JSON error response, not a Unity asset")
            # An exclusive hard link never replaces a preexisting original.
            try:
                os.link(tmp, dest)
            except FileExistsError:
                return {**result, "status": "already_present_race"}
            return {**result, "status": "recovered", "bytes": size,
                    "sha256": digest.hexdigest(),
                    "encoding": response.headers.get("Content-Encoding", "")}
    except (HTTPError, URLError, ValueError, OSError) as exc:
        return {**result, "status": "failed",
                "error": f"{type(exc).__name__}: {str(exc)[:200]}"}
    finally:
        if tmp:
            tmp.unlink(missing_ok=True)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--game", choices=[*MISSING, "all"], default="all")
    parser.add_argument("--downloads", type=Path,
                        default=Path.home() / "Downloads")
    parser.add_argument("--max-mb", type=int, default=512)
    parser.add_argument("--apply", action="store_true")
    args = parser.parse_args()
    if not 1 <= args.max_mb <= 2048:
        parser.error("max-mb outside safe range")
    catalog, roots = build_index(args.downloads, REPO)
    games = MISSING if args.game == "all" else {
        args.game: MISSING[args.game]}
    results = []
    for game, spec in games.items():
        root = roots.get(game)
        if not root:
            results.append({"game": game, "status": "no_local_mirror"})
            continue
        for name in spec["files"]:
            row = recover(root, spec, name, args.apply, args.max_mb * 1024**2)
            row["game"] = game
            results.append(row)
            print("UNITY_ASSET", json.dumps(row), flush=True)
    print("UNITY_RECOVERY_SUMMARY", json.dumps({
        "apply": args.apply, "results": results,
        "note": "Recovered asset != verified interactive gameplay."
    }), flush=True)
    return 1 if any(x["status"] == "failed" for x in results) else 0


if __name__ == "__main__":
    raise SystemExit(main())
