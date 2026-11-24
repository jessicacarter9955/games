#!/usr/bin/env python3
"""Unpack captured *game* assets from CrazyGames ZIPs.

For the historical root ZIPs, preserve the existing explicit host allowlist.
For newer category ZIPs, derive the game host(s) from their embedded Next.js
game loader. Do not extract portal advertisements or unrelated trackers.
The ZIP is retained alongside a per-game provenance manifest.
"""
from __future__ import annotations

import hashlib
import json
import re
import shutil
import stat
import tempfile
import zipfile
from pathlib import Path, PurePosixPath
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parents[1]
DEST = ROOT / "extracted"
CATEGORIES = ("io games", "trivia", "Word games", "cards")
MAX_FILES = 20000
MAX_BYTES = 3 * 1024**3
MAX_MEMBER_BYTES = 95 * 1024**2

# Preserve the historical archive-host routing exactly.
GAME_HOSTS = {
    "block-puzzle-master": ("block-puzzle-master.game-files.crazygames.com",),
    "blocks-and-that'it": ("block-tour-kfz.game-files.crazygames.com",),
    "carout": (),
    "color-water-sort-3d": ("color-water-sort-3d.game-files.crazygames.com",),
    "complex-merge-3-park-town": (),
    "cuttherope": ("cut-the-rope-ebx.game-files.crazygames.com",),
    "drop-merge-numbers": ("drop-merge-the-numbers.game-files.crazygames.com",),
    "find-differences": ("find-it---find-the-differences.game-files.crazygames.com",),
    "find-the-cow(cat)": (),
    "goodstriplematch": ("goods-triple-match-3d.game-files.crazygames.com",),
    "hexasort": ("hexa-sort.game-files.crazygames.com",),
    "hexastack": ("hexa-stack.game-files.crazygames.com",),
    "home-design-decorate": (),
    "jewel academy": (),
    "jigpic-solitaire": (),
    "lavaoraqua": (),
    "mahjongg": (),
    "nuts-puzzle-sort-by-color": ("nuts-puzzle-sort-by-color.game-files.crazygames.com",),
    "PieceOfCakeMerge": ("cdn.mergecakegame.com", "storage.googleapis.com"),
    "pixelblast": ("pixel-blast.game-files.crazygames.com",),
    "sandtrix": ("sandtrix.game-files.crazygames.com",),
    "twistedtangle": ("twisted-tangle-nmt.game-files.crazygames.com",),
    "watersort": ("cups---water-sort-puzzle.game-files.crazygames.com",),
    "what-s-the-difference-online": (),
}

# These are the portal, ad and shared infrastructure, not a particular game's files.
EXCLUDED_HOSTS = {
    "www.crazygames.com",
    "games.crazygames.com",
    "builds.crazygames.com",
    "imgs.crazygames.com",
    "api.crazygames.com",
    "cdn.privacy-mgmt.com",
}


def archive_paths() -> list[Path]:
    root_archives = sorted(ROOT.glob("*.zip"), key=lambda p: p.name.lower())
    categorized = [
        p
        for category in CATEGORIES
        for p in sorted((ROOT / category).rglob("*.zip"))
        if p.is_file()
    ]
    return root_archives + categorized


def loader_metadata(archive: zipfile.ZipFile) -> dict:
    page = next((
        item for item in archive.infolist()
        if item.filename.startswith("www.crazygames.com/game/")
        and item.filename.endswith(".html")
        and item.file_size < 15 * 1024**2
    ), None)
    if page is None:
        return {"slug": None, "loader_type": None, "allowed_hosts": [], "loader_urls": []}
    text = archive.read(page).decode("utf-8", "replace")
    match = re.search(
        r'<script[^>]*id=["\']__NEXT_DATA__["\'][^>]*>(.*?)</script',
        text, flags=re.I | re.S,
    )
    if not match:
        return {"slug": None, "loader_type": None, "allowed_hosts": [], "loader_urls": []}
    try:
        game = json.loads(match.group(1))["props"]["pageProps"]["game"]
        config = game.get("loaderConfig") or {}
        if not isinstance(config, dict):
            config = {}
    except (ValueError, KeyError, TypeError):
        return {"slug": None, "loader_type": None, "allowed_hosts": [], "loader_urls": []}

    urls: list[str] = []
    def visit(value: object) -> None:
        if isinstance(value, str) and value.startswith(("https://", "http://")):
            urls.append(value)
        elif isinstance(value, dict):
            for key, item in value.items():
                if key.lower().endswith(("url", "urls")) or isinstance(item, (dict, list)):
                    visit(item)
        elif isinstance(value, list):
            for item in value:
                visit(item)
    visit(config)
    urls = list(dict.fromkeys(urls))
    hosts = {
        urlsplit(url).hostname
        for url in urls
        if urlsplit(url).hostname not in EXCLUDED_HOSTS
    }
    # In captured archives there can be game-specific CDN domains in addition
    # to the entrypoint. Accept CrazyGames game-file hosts, never portal hosts.
    archive_hosts = {
        item.filename.split("/", 1)[0]
        for item in archive.infolist()
        if "/" in item.filename
    }
    hosts |= {
        host for host in archive_hosts
        if host.endswith(".game-files.crazygames.com")
    }
    hosts = {host for host in hosts if host and "/" not in host and ":" not in host}
    return {
        "slug": game.get("slug"),
        "loader_type": game.get("loaderType"),
        "allowed_hosts": sorted(hosts),
        "loader_urls": urls[:25],
    }


def safe_member(item: zipfile.ZipInfo, path: PurePosixPath) -> None:
    mode = stat.S_IFMT(item.external_attr >> 16)
    if (
        path.is_absolute()
        or not path.parts
        or any(part in ("", ".", "..") for part in path.parts)
        or any(len(part.encode("utf-8")) > 200 for part in path.parts)
        or any(any(ch in part for ch in ':*?"<>|') for part in path.parts)
        or mode not in (0, stat.S_IFREG)
        or (item.flag_bits & 1)
        or item.file_size > MAX_MEMBER_BYTES
    ):
        raise ValueError(f"Unsafe ZIP entry: {item.filename!r}")


def unpack(source: Path) -> dict:
    relative = source.relative_to(ROOT)
    label = source.stem
    new_category = len(relative.parts) > 1
    if new_category and relative.parts[0] not in CATEGORIES:
        raise ValueError(f"Unexpected ZIP directory: {relative}")
    if not new_category and label not in GAME_HOSTS:
        raise ValueError(f"Unrecognized legacy ZIP: {label}")

    output = DEST / relative.with_suffix("")
    digest = hashlib.sha256(source.read_bytes()).hexdigest()
    manifest_name = "_game-capture-manifest.json"
    if output.exists() or output.is_symlink():
        if output.is_dir() and not output.is_symlink():
            manifest = output / manifest_name
            if manifest.is_file() and json.loads(manifest.read_text(encoding="utf-8")).get("zip_sha256") == digest:
                return {"zip":relative.as_posix(),"state":"unchanged"}
        raise RuntimeError(f"Refusing to replace output folder: {output}")

    with zipfile.ZipFile(source) as archive:
        metadata = loader_metadata(archive) if new_category else {
            "slug": label,
            "loader_type": "legacy_allowlist",
            "allowed_hosts": list(GAME_HOSTS[label]),
            "loader_urls": [],
        }
        allowed = tuple(metadata["allowed_hosts"])
        entries: list[tuple[zipfile.ZipInfo, PurePosixPath]] = []
        total = 0
        for item in archive.infolist():
            if item.is_dir():
                continue
            path = PurePosixPath(item.filename.replace("\\", "/"))
            if not path.parts or path.parts[0] not in allowed:
                continue
            safe_member(item, path)
            entries.append((item, path))
            total += item.file_size
        if len(entries) > MAX_FILES or total > MAX_BYTES:
            raise ValueError(f"Game assets exceed extraction limits: {relative}")

        with tempfile.TemporaryDirectory(prefix=".extract-",dir=DEST) as temp:
            stage = Path(temp) / "payload"
            stage.mkdir()
            used = set()
            for item, path in entries:
                if path in used:
                    raise ValueError(f"Duplicate asset path: {path}")
                used.add(path)
                dest = stage.joinpath(*path.parts)
                dest.parent.mkdir(parents=True,exist_ok=True)
                with archive.open(item) as src, dest.open("xb") as dst:
                    shutil.copyfileobj(src, dst, 1024*1024)
            summary = {
                "game": label,
                "category": relative.parts[0] if new_category else "Puzzles CrazyGames mirror",
                "source_zip": relative.as_posix(),
                "zip_sha256": digest,
                "official_slug": metadata["slug"],
                "loader_type": metadata["loader_type"],
                "game_hosts": allowed,
                "loader_urls": metadata["loader_urls"],
                "game_host_files": len(entries),
                "unpacked_game_bytes": total,
                "capture_status": "partial_or_unverified" if entries else "no_game_assets_captured",
                "warning": "Captured assets only; a valid ZIP does not prove the full game runs offline.",
            }
            (stage / manifest_name).write_text(
                json.dumps(summary,ensure_ascii=False,indent=2)+"\n",encoding="utf-8"
            )
            output.parent.mkdir(parents=True,exist_ok=True)
            stage.rename(output)
    return {"zip":relative.as_posix(),"state":"extracted","game_files":len(entries),"bytes":total}


def main() -> None:
    DEST.mkdir(exist_ok=True)
    archives=archive_paths()
    outcomes=[]
    for source in archives:
        result=unpack(source)
        print(json.dumps(result,ensure_ascii=False),flush=True)
        outcomes.append(result)
    print(json.dumps({
        "archives":len(archives),
        "newly_extracted":sum(x["state"]=="extracted" for x in outcomes),
        "existing":sum(x["state"]=="unchanged" for x in outcomes),
        "new_game_files":sum(x.get("game_files",0) for x in outcomes),
        "new_game_bytes":sum(x.get("bytes",0) for x in outcomes),
    },ensure_ascii=False),flush=True)


if __name__=="__main__":
    main()
