#!/usr/bin/env python3
"""Zero-dependency structural regression test for the multi-game catalog.

Checks actual files and explicit compatibility rules. It intentionally does
not claim that loading an HTML page means a playable or complete game.
"""
from __future__ import annotations

import json
import sys
from collections import Counter
from pathlib import Path
from urllib.parse import unquote

ROOT = Path(__file__).resolve().parents[1]
CATALOG = ROOT / "reskinner" / "catalog.json"
STATES = {"experimental", "limited", "blocked", "missing"}
ENGINES_REQUIRING_ADAPTER = {"unity", "flash", "defold", "iframe"}
COMPATIBLE_IMAGES = {".png", ".webp", ".jpg", ".jpeg", ".svg", ".avif", ".gif"}


def check(condition: bool, message: str) -> None:
    if not condition:
        raise AssertionError(message)


def valid_url(url: str, root: str = "extracted/") -> bool:
    if not url.startswith("/" + root):
        return False
    decoded = unquote(url)
    if "\\" in decoded or ".." in decoded or decoded.startswith("//"):
        return False
    return (ROOT / decoded.removeprefix("/")).is_file()


def main() -> None:
    data = json.loads(CATALOG.read_text(encoding="utf-8"))
    games = data["games"]
    expected = list((ROOT / "extracted").rglob("_game-capture-manifest.json"))
    check(data["total"] == len(games), "Total does not match games array")
    check(len(games) == len(expected), "Some ZIP manifests are not cataloged")
    check(len({g["id"] for g in games}) == len(games), "Duplicate game ID")
    check(len({g["base"] for g in games}) == len(games), "Duplicate game directory")

    all_assets = 0
    for game in games:
        name = game["title"]
        check(game["status"] in STATES, f"Unknown status: {name}")
        check(game["score"] is None or 0 <= game["score"] <= 100,
              f"Invalid score: {name}")
        check(game["base"].startswith("extracted/"), f"Unsafe base: {name}")
        check((ROOT / game["base"] / "_game-capture-manifest.json").is_file(),
              f"Missing source manifest: {name}")
        check(game["assetCount"] == len(game["assets"]),
              f"Asset count mismatch: {name}")
        check(game["imageCount"] == sum(
            item["kind"] == "image" for item in game["assets"]
        ), f"Image count mismatch: {name}")

        if game["entry"]:
            check(valid_url(game["entry"]), f"Entry does not exist: {name}")
        else:
            check(game["status"] != "experimental",
                  f"Cannot inspect a game without HTML: {name}")

        if game["engine"] in ENGINES_REQUIRING_ADAPTER:
            check(game["status"] == "blocked",
                  f"Unsafe engine marked as supported: {name}")
        if "3d" in str(game["graphics"]).lower() and game["status"] == "experimental":
            raise AssertionError(f"3D incorrectly marked generic-compatible: {name}")

        for asset in game["assets"]:
            check(valid_url(asset["url"]), f"Asset missing from repo: {asset['path']}")
            check(asset["path"].startswith(game["base"] + "/"),
                  f"Asset from another game: {name}")
            if asset["kind"] == "image":
                check(Path(asset["path"]).suffix.lower() in COMPATIBLE_IMAGES,
                      f"Invalid image extension: {asset['path']}")
            all_assets += 1

    counts = dict(Counter(game["status"] for game in games))
    check(counts == data["counts"], "Status totals differ from catalog summary")
    check(any(g["status"] == "experimental" for g in games),
          "No generic HTML5 candidates discovered")
    check(all(g["verifiedOffline"] is False for g in games),
          "Unverified games must not claim full playability")
    print(
        f"OK: {len(games)} games / {all_assets} media assets / "
        f"{counts['experimental']} 2D candidates / "
        f"{counts['limited']} 3D limited / "
        f"{counts['blocked']} unsupported / "
        f"{counts['missing']} missing entrypoints."
    )
    print("Catalog states validated against actual tracked files.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
