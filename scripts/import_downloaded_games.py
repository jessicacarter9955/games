#!/usr/bin/env python3
"""Import captured games from local Downloads without touching original ZIPs.

Dedup by verified portal identity and archive bytes across categories; canonical
filenames use the embedded official slug. Existing IDs and catalog rows are
preserved. Large archives remain local; never stage a GitHub-oversize blob.
Run in a clean dedicated worktree; inspect report before committing.
"""
from __future__ import annotations
import argparse
import hashlib
import json
import re
import shutil
import subprocess
import zipfile
from collections import Counter, defaultdict
from pathlib import Path
import extract_archives as ex
import generate_reskin_catalog as catalog

CATEGORIES = ("action", "Arcade", "idle", "BOARDGAMES", "cards",
              "io games", "trivia", "Word games", "Puzzles Crazygames mirror")
LIMIT = 95 * 1024**2

def key(value):
    return re.sub(r"[^a-z0-9]", "", str(value or "").lower())

def digest(path):
    with path.open("rb") as stream:
        return hashlib.file_digest(stream, "sha256").hexdigest()

def inspect(path):
    with zipfile.ZipFile(path) as z:
        meta = ex.loader_metadata(z)
        slug = meta.get("slug")
        pages = [p.filename for p in z.infolist()
                 if p.filename.startswith("www.crazygames.com/game/")
                 and p.filename.endswith(".html")]
        page_slugs = {p.rsplit("/", 1)[-1].removesuffix(".html") for p in pages}
        if not slug or not re.fullmatch(r"[a-z0-9][a-z0-9-]*", slug):
            raise ValueError("missing reliable official slug")
        if page_slugs and slug not in page_slugs:
            raise ValueError("portal page and loader slug disagree")
        allowed = set(meta["allowed_hosts"])
        entries = [i for i in z.infolist() if not i.is_dir()
                   and i.filename.split("/", 1)[0] in allowed]
        return meta, len(entries), sum(i.file_size for i in entries)

def git(*args):
    subprocess.run(["git", *map(str, args)], cwd=ex.ROOT, check=True)

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--downloads", type=Path, required=True)
    args = parser.parse_args()
    root = ex.ROOT
    previous = json.loads(catalog.OUT.read_text(encoding="utf8"))
    existing = {}
    hashes = set()
    for manifest in ex.DEST.rglob("_game-capture-manifest.json"):
        m = json.loads(manifest.read_text(encoding="utf8"))
        for name in (m.get("official_slug"), m.get("game"), m.get("official_title")):
            if name: existing[key(name)] = m.get("source_zip")
        if m.get("zip_sha256"): hashes.add(m["zip_sha256"])
    for game in previous.get("games", []):
        existing[key(game["title"])] = game.get("sourceZip")
    for p in ex.archive_paths():
        hashes.add(digest(p))
        try:
            meta, _, _ = inspect(p)
            existing[key(meta["slug"])] = p.relative_to(root).as_posix()
        except Exception:
            pass
    rows = []
    pending = defaultdict(list)
    for category in CATEGORIES:
        for p in sorted((args.downloads / category).rglob("*.zip")):
            row = {"category": category, "original_zip": p.name,
                   "bytes": p.stat().st_size}
            rows.append(row)
            try:
                sha = digest(p)
                row["sha256"] = sha
                if sha in hashes:
                    row["state"] = "duplicate_bytes"
                    continue
                meta, files, size = inspect(p)
                slug, title = meta["slug"], meta.get("title")
                row.update(slug=slug, title=title, captured_files=files,
                           captured_bytes=size)
                match = existing.get(key(slug)) or existing.get(key(title))
                if match:
                    row.update(state="duplicate_game", existing=match)
                    continue
                pending[key(slug)].append((p, row, files, size))
            except Exception as exc:
                row.update(state="needs_review", reason=str(exc))
    added = 0
    for candidates in pending.values():
        candidates.sort(key=lambda v: (v[2] > 0, v[2], v[3], v[0].stat().st_size),
                        reverse=True)
        p, row, files, size = candidates[0]
        for _, duplicate, _, _ in candidates[1:]:
            duplicate.update(state="duplicate_in_batch", existing=p.name)
        target = root / row["category"] / (row["slug"] + ".zip")
        if target.exists():
            row.update(state="needs_review", reason="target already exists")
            continue
        target.parent.mkdir(parents=True, exist_ok=True)
        try:
            shutil.copy2(p, target)
            result = ex.unpack(target)
            if result["state"] != "extracted":
                raise RuntimeError("Unexpected pre-existing extraction")
            output = ex.DEST / target.relative_to(root).with_suffix("")
            manifest = output / "_game-capture-manifest.json"
            m = json.loads(manifest.read_text(encoding="utf8"))
            m.update(original_zip=p.name, official_title=row["title"],
                     source_zip_retained_in_git=target.stat().st_size <= LIMIT)
            manifest.write_text(json.dumps(m, ensure_ascii=False, indent=2)+"\n",
                                encoding="utf8")
            git("add", "--", output.relative_to(root))
            if target.stat().st_size <= LIMIT:
                git("add", "--", target.relative_to(root))
                row["state"] = "imported"
            else:
                # The original is still in Downloads; don't attempt to push >100 MB.
                target.unlink()
                row["state"] = "imported_assets_original_local"
            row.update(canonical_zip=target.relative_to(root).as_posix(),
                       extracted_files=result.get("game_files", 0))
            added += 1
        except Exception as exc:
            row.update(state="needs_review", reason=str(exc))
            # Leave original untouched. Do not stage a failed archive.
            if target.exists():
                target.unlink()
        print(json.dumps(row, ensure_ascii=True), flush=True)
    if added:
        catalog.main()
        generated = json.loads(catalog.OUT.read_text(encoding="utf8"))
        old = {g["id"]: g for g in previous.get("games", [])}
        generated["games"] = [old.get(g["id"], g) for g in generated["games"]]
        present = {g["id"] for g in generated["games"]}
        generated["games"].extend(g for k, g in old.items() if k not in present)
        generated["total"] = len(generated["games"])
        generated["counts"] = dict(Counter(g["status"] for g in generated["games"]))
        catalog.OUT.write_text(json.dumps(generated, ensure_ascii=False,
                                           separators=(",", ":")), encoding="utf8")
        git("add", "--", catalog.OUT.relative_to(root))
    report = root / "GAME_IMPORT_2026-11-25.json"
    summary = dict(Counter(row["state"] for row in rows))
    report.write_text(json.dumps({"summary": summary, "rows": rows},
                                 ensure_ascii=False, indent=2)+"\n", encoding="utf8")
    git("add", "--", report.relative_to(root))
    print("SUMMARY", json.dumps(summary), "ADDED", added, flush=True)

if __name__ == "__main__":
    main()
