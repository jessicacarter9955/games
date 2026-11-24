#!/usr/bin/env python3
"""Extract only game-related hosts from CrazyGames page-mirror ZIPs.

A browser capture can contain thousands of unrelated advertising and portal files.
Never extract those by default. Each archive retains its own provenance manifest.
"""
from __future__ import annotations

import hashlib
import json
import shutil
import stat
import tempfile
import zipfile
from pathlib import Path, PurePosixPath

ROOT = Path(__file__).resolve().parents[1]
DEST = ROOT / "extracted"
MAX_FILES = 20000
MAX_BYTES = 3 * 1024**3
MAX_MEMBER_BYTES = 95 * 1024**2

# Explicit aliases avoid accidental cross-game captures when visiting other tabs.
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


def unpack(source: Path) -> dict:
    label = source.stem
    if label not in GAME_HOSTS:
        raise ValueError(f"Unrecognized archive: {label}")
    allowed = GAME_HOSTS[label]
    output = DEST / label
    digest = hashlib.sha256(source.read_bytes()).hexdigest()
    manifest_name = "_game-capture-manifest.json"
    if output.exists() or output.is_symlink():
        if output.is_dir() and not output.is_symlink():
            manifest = output / manifest_name
            if manifest.is_file() and json.loads(manifest.read_text()).get("zip_sha256") == digest:
                return {"game": label, "state": "unchanged"}
        raise RuntimeError(f"Refusing to replace existing directory: {output}")
    entries = []
    total = 0
    with zipfile.ZipFile(source) as archive:
        for entry in archive.infolist():
            path = PurePosixPath(entry.filename.replace("\\", "/"))
            if not path.parts or path.parts[0] not in allowed:
                continue
            if entry.is_dir():
                continue
            mode = stat.S_IFMT(entry.external_attr >> 16)
            if (path.is_absolute() or any(p in ("", ".", "..") for p in path.parts)
                or any(len(p.encode("utf-8")) > 200 for p in path.parts)
                or any(any(c in p for c in ':*?"<>|') for p in path.parts)
                or mode not in (0, stat.S_IFREG) or entry.flag_bits & 1
                or entry.file_size > MAX_MEMBER_BYTES):
                raise ValueError(f"Unsafe asset path: {entry.filename!r}")
            entries.append((entry, path))
            total += entry.file_size
        if len(entries) > MAX_FILES or total > MAX_BYTES:
            raise ValueError(f"Too many game assets or too large: {label}")
        with tempfile.TemporaryDirectory(prefix=".extract-", dir=DEST) as temp:
            stage = Path(temp) / "payload"
            stage.mkdir()
            used = set()
            for entry, path in entries:
                if path in used:
                    raise ValueError(f"Duplicate asset: {entry.filename}")
                used.add(path)
                out = stage.joinpath(*path.parts)
                out.parent.mkdir(parents=True, exist_ok=True)
                with archive.open(entry) as src, out.open("xb") as dst:
                    shutil.copyfileobj(src, dst, 1024 * 1024)
            summary = {
                "game": label,
                "source_zip": source.name,
                "zip_sha256": digest,
                "selected_hosts": allowed,
                "game_host_files": len(entries),
                "unpacked_game_bytes": total,
                "capture_status": "partial_or_unverified" if entries else "no_game_assets_captured",
                "warning": "This is a partial browser capture, not a verified standalone build.",
            }
            (stage / manifest_name).write_text(json.dumps(summary, indent=2) + "\n", encoding="utf-8")
            stage.rename(output)
    return {"game": label, "state": "extracted", "files": len(entries), "bytes": total}


def main() -> None:
    DEST.mkdir(exist_ok=True)
    archives = sorted(ROOT.glob("*.zip"))
    for source in archives:
        print(json.dumps(unpack(source)), flush=True)
    print(f"Processed {len(archives)} ZIPs", flush=True)


if __name__ == "__main__":
    main()
