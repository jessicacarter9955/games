"""Read-only global asset inventory for the local Reskinner server."""
from collections import defaultdict
from hashlib import sha256
from pathlib import Path
from urllib.parse import quote
import os

TYPES = {
    "image": ".png .jpg .jpeg .gif .webp .svg .avif .bmp .ico .apng",
    "audio": ".mp3 .ogg .wav .m4a .aac .flac .opus .weba",
    "video": ".mp4 .webm .mov .ogv .m4v",
    "font": ".ttf .otf .woff .woff2 .fnt",
    "atlas": ".atlas .plist",
    "model": ".glb .gltf .fbx .obj .dds .ktx .ktx2 .basis",
    "code": ".js .mjs .cjs .ts .css .html .htm .wasm .lua .shader .glsl .vert .frag",
    "data": ".json .xml .csv .bin .dat .data .unityweb .bytes .bundle .assets .res .swf .pak",
}
EXTENSIONS = {ext: kind for kind, exts in TYPES.items() for ext in exts.split()}


def kind_for(path):
    suffixes = Path(path).suffixes
    if not suffixes:
        return None
    ext = suffixes[-1].lower()
    if ext in {".br", ".gz"} and len(suffixes) > 1:
        ext = suffixes[-2].lower()
    return EXTENSIONS.get(ext)


def digest(path):
    hash_ = sha256()
    with path.open("rb") as stream:
        for block in iter(lambda: stream.read(1024 * 1024), b""):
            hash_.update(block)
    return hash_.hexdigest()


def build_library(catalog, repo, roots, dedup=False):
    rows, files, errors = [], {}, []
    repo = Path(repo).resolve()
    for game in catalog["games"]:
        game_id = game["id"]
        existing = {a["path"]: a for a in game.get("assets", [])}
        sources = []
        base = game.get("base")
        if base and base.startswith("extracted/"):
            candidate = (repo / base).resolve()
            if candidate.is_relative_to(repo) and candidate.is_dir():
                sources.append((candidate, base, False))
        if game_id in roots:
            sources.append((Path(roots[game_id]).resolve(),
                            "local-mirror/" + game_id, True))
        seen = set()
        for root, prefix, local in sources:
            for directory, dirs, names in os.walk(root, followlinks=False):
                dirs[:] = sorted(d for d in dirs if not d.startswith(".")
                                 and not (Path(directory) / d).is_symlink())
                for name in sorted(names):
                    file = Path(directory) / name
                    if name.startswith(".") or file.is_symlink():
                        continue
                    relative = file.relative_to(root)
                    if local and len(relative.parts) < 2:
                        continue
                    path = prefix + "/" + relative.as_posix()
                    if path in seen or ".." in relative.parts:
                        continue
                    meta = existing.get(path, {})
                    kind = meta.get("kind") or kind_for(path)
                    if not kind or name == "_game-capture-manifest.json":
                        continue
                    try:
                        if not file.resolve().is_relative_to(root) or not file.is_file():
                            continue
                        size = file.stat().st_size
                    except OSError:
                        errors.append(path)
                        continue
                    seen.add(path)
                    row = dict(meta, path=path, url="/" + quote(path, safe="/-._~"),
                               name=name, kind=kind, bytes=size,
                               extension=file.suffix.lower(), gameId=game_id,
                               gameTitle=game["title"], gameCategory=game.get("category", ""),
                               license=meta.get("license") or "unknown",
                               localMirror=local)
                    rows.append(row)
                    files[(game_id, path)] = file
    if dedup:
        by_size = defaultdict(list)
        for row in rows:
            by_size[row["bytes"]].append(row)
        for group in by_size.values():
            if len(group) < 2:
                continue
            hashes = defaultdict(list)
            for row in group:
                try:
                    file = files[(row["gameId"], row["path"])]
                    before = file.stat()
                    value = digest(file)
                    after = file.stat()
                    if (before.st_size, before.st_mtime_ns) != (after.st_size, after.st_mtime_ns) or after.st_size != row["bytes"]:
                        raise OSError("File changed during scan")
                    hashes[value].append(row)
                except OSError:
                    errors.append(row["path"])
            for value, duplicates in hashes.items():
                if len(duplicates) > 1:
                    for row in duplicates:
                        row.update(duplicateHash=value, duplicateCount=len(duplicates))
    return {"schemaVersion": 1, "totalGames": len(catalog["games"]),
            "assets": rows, "dedupScanned": dedup, "errors": errors}
