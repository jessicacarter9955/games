#!/usr/bin/env python3
"""Recover exact Unity build URLs recorded in imported game manifests.

Files stay in a local mirror outside Git. Existing originals are never replaced.
Run one game at a time to keep network and disk use bounded.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import os
import shutil
from pathlib import Path
from urllib.parse import urlsplit
from urllib.request import Request, urlopen

REPO = Path(__file__).resolve().parents[1]
MAX_FILE = 256 * 1024 * 1024
SUFFIXES = (".loader.js", ".js", ".wasm.br", ".wasm.gz",
            ".data.br", ".data.gz", ".framework.js.br",
            ".framework.js.gz", ".js.br", ".js.gz")


def recover(game: str, mirror: Path) -> list[dict]:
    source = REPO / "extracted" / "idle" / game / "_game-capture-manifest.json"
    metadata = json.loads(source.read_text(encoding="utf-8"))
    if metadata.get("game") != game or metadata.get("category") != "idle":
        raise ValueError("Manifest identity does not match requested game")
    game_root = mirror / "idle" / game
    hosts = game_root / "hosts"
    records = []
    urls = metadata.get("loader_urls", [])
    if not isinstance(urls, list):
        raise ValueError("Invalid loader URL list")
    for url in urls:
        parsed = urlsplit(url)
        if (parsed.scheme != "https" or parsed.hostname != "files.crazygames.com"
                or parsed.query or parsed.fragment or parsed.username or parsed.password
                or not parsed.path.startswith("/" + game + "/")
                or "/Build/" not in parsed.path
                or not parsed.path.lower().endswith(SUFFIXES)):
            continue
        relative = Path(parsed.hostname) / parsed.path.lstrip("/")
        destination = (hosts / relative).resolve()
        destination.relative_to(hosts.resolve())
        if destination.exists():
            if not destination.is_file() or not destination.stat().st_size:
                raise ValueError("Invalid existing file: " + str(destination))
            status = "already_present"
        else:
            archived = REPO / "extracted" / "idle" / game / relative
            destination.parent.mkdir(parents=True, exist_ok=True)
            temp = destination.with_name(destination.name + ".part")
            if temp.exists():
                raise FileExistsError("Previous partial transfer: " + str(temp))
            try:
                if archived.is_file() and archived.stat().st_size:
                    shutil.copyfile(archived, temp)
                    status = "copied_from_archive"
                else:
                    request = Request(url, headers={
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/142 Safari/537.36",
                        "Referer": "https://www.crazygames.com/",
                    })
                    with urlopen(request, timeout=45) as response, temp.open("xb") as out:
                        if response.status != 200:
                            raise ValueError(f"HTTP {response.status}: {url}")
                        count = 0
                        while chunk := response.read(1024 * 1024):
                            count += len(chunk)
                            if count > MAX_FILE:
                                raise ValueError("Asset exceeds local size limit: " + url)
                            out.write(chunk)
                    status = "downloaded"
                with temp.open("rb") as stream:
                    prefix = stream.read(128).lstrip().lower()
                if temp.stat().st_size < 1000 or prefix.startswith((b"<!doctype", b"<html")):
                    raise ValueError("Unexpected or incomplete response: " + url)
                os.replace(temp, destination)
            finally:
                if temp.exists():
                    temp.unlink()
        with destination.open("rb") as stream:
            digest = hashlib.file_digest(stream, "sha256").hexdigest()
        record = {"url": url, "file": str(destination), "status": status,
                  "bytes": destination.stat().st_size, "sha256": digest}
        records.append(record)
        print(json.dumps(record), flush=True)
    if len(records) < 4:
        raise ValueError("Unity build has fewer than four core URLs")
    game_root.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(source, game_root / source.name)
    index_path = mirror / "_mirror_index.json"
    index = json.loads(index_path.read_text(encoding="utf-8")) if index_path.exists() else []
    if not any(row.get("category") == "idle" and row.get("game") == game for row in index):
        index.append({"category": "idle", "game": game})
        index_path.write_text(json.dumps(index, indent=2) + "\n", encoding="utf-8")
    (game_root / "_recovery.json").write_text(
        json.dumps({"game": game, "assets": records}, indent=2) + "\n",
        encoding="utf-8")
    return records


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--game", required=True)
    parser.add_argument("--mirror", type=Path,
                        default=Path.home() / "Downloads" / "_chatgpt_import130_cdn_mirrors")
    args = parser.parse_args()
    recover(args.game, args.mirror)


if __name__ == "__main__":
    main()
