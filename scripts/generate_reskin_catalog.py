#!/usr/bin/env python3
"""Build the 2Night multi-game catalog from ACTUAL tracked files, not guesses.

Usage (repository root):
    python3 scripts/generate_reskin_catalog.py

The source ZIPs and audit reports remain untouched. Unsupported/missing states
are conservative: an HTML entrypoint is not evidence that a game plays offline.
"""
from __future__ import annotations

import json
import re
import subprocess
from collections import Counter
from datetime import date
from pathlib import Path
from urllib.parse import quote

ROOT = Path(__file__).resolve().parents[1]
EXTRACTED = "extracted/"
OUT = ROOT / "reskinner" / "catalog.json"

IMAGE_EXTS = {".png", ".jpg", ".jpeg", ".webp", ".gif", ".avif", ".svg"}
# Only explicit atlas metadata, not arbitrary JSON settings/SDK manifests.
ATLAS_EXTS = {".xml", ".atlas", ".plist"}
MODEL_EXTS = {".glb", ".gltf", ".fbx", ".obj", ".dds", ".ktx", ".basis"}
VIDEO_EXTS = {".mp4", ".webm"}
SKIP_ENTRIES = ("gameframe", "crazygames.com", "cdn-cgi", "portal")


def slug(value: str) -> str:
    return re.sub(r"[^a-z0-9]+", "", value.lower())


def display_from_slug(value: str) -> str:
    # Fallback only: actual titles come from audit rows where available.
    value = value.replace("-", " ").replace("_", " ").strip()
    result = " ".join(w.capitalize() if not w.isupper() else w for w in value.split())
    return re.sub(r"\\b3d\\b", "3D", result, flags=re.I)


def audit_rows(filename: str, old: bool) -> dict[str, dict]:
    source = ROOT / filename
    if not source.is_file():
        return {}
    results: dict[str, dict] = {}
    for line in source.read_text(encoding="utf-8").splitlines():
        if not line.startswith("|") or not re.match(r"^\|\s*\d+\s*\|", line):
            continue
        cols = [c.strip() for c in line.strip().strip("|").split("|")]
        try:
            if old:
                name = cols[1].strip("`")
                key = slug(name)
                title = display_from_slug(name)
                engine, graphics = cols[2], cols[3]
                screens, score = cols[4], int(re.sub(r"\D", "", cols[8]))
            else:
                raw_name = cols[2]
                match = re.search(r"\[([^]]+)\]\([^)]*\)", raw_name)
                title = match.group(1) if match else raw_name
                key = slug(title)
                engine, graphics = cols[3], cols[4]
                screens, score = cols[5], int(re.sub(r"\D", "", cols[11]))
            results[key] = {
                "title": title,
                "engine": engine,
                "graphics": graphics,
                "screensEstimate": screens,
                "score": score,
                "scoreSource": filename,
            }
        except (IndexError, ValueError):
            continue
    return results


def best_entry(paths: list[str]) -> str | None:
    options = [p for p in paths if p.lower().endswith("/index.html")]
    if not options:
        options = [p for p in paths if p.lower().endswith("/game.html")]
    if not options:
        return None

    def rank(p: str) -> tuple:
        low = p.lower()
        bad = sum(k in low for k in SKIP_ENTRIES)
        return (bad, -p.count("/"), len(p))
    return min(options, key=rank)


def technology(meta: dict, audit: dict, paths: list[str]) -> str:
    engine = str(audit.get("engine") or meta.get("loader_type") or "").lower()
    suffixes = {Path(p).suffix.lower() for p in paths}
    if "unity" in engine or ".unityweb" in suffixes:
        return "unity"
    if "ruffle" in engine or ".swf" in suffixes:
        return "flash"
    if "defold" in engine or ".arcd" in suffixes or ".arci" in suffixes:
        return "defold"
    if "playcanvas" in engine:
        return "playcanvas"
    if "pixi" in engine:
        return "pixi"
    if "cocos" in engine:
        return "cocos"
    if "iframe" in engine or meta.get("loader_type") == "iframe":
        return "iframe"
    if "phaser" in engine:
        return "phaser"
    if any(p.endswith("/cocos-js/cc.js") for p in paths):
        return "cocos"
    if engine:
        return engine.split("/")[0].strip() or "unknown"
    return "unknown"


def availability(entry: str | None, engine: str, graphics: str, image_count: int) -> dict:
    if engine in {"unity", "flash", "defold", "iframe"}:
        return {
            "status": "blocked",
            "label": "Motore non supportato",
            "reason": (
                "Runtime compilato o servizio esterno: nessun adapter 1:1. " +
                ("Manca anche l'entrypoint HTML locale." if not entry else
                 "Puoi tentare l'HTML per analisi visiva, non il reskin runtime.")
            ),
            "capabilities": ["file-inventory", "attempt-launch"] if entry
                            else ["file-inventory"],
        }
    if "3d" in graphics.lower() or engine == "playcanvas":
        return {
            "status": "limited",
            "label": "3D · adapter richiesto",
            "reason": (
                "Mesh, materiali e scene 3D non sono mappati dall'inspector 2D. " +
                ("Manca anche l'entrypoint locale." if not entry
                 else "Avvio HTML tentabile senza promessa di compatibilità.")
            ),
            "capabilities": ["attempt-launch", "file-inventory", "dom"] if entry
                            else ["file-inventory"],
        }
    if not entry:
        return {
            "status": "missing",
            "label": "File di avvio assenti",
            "reason": "Gli ZIP/manifest non includono un entrypoint locale avviabile.",
            "capabilities": ["asset-inventory"] if image_count else [],
        }
    return {
        "status": "experimental",
        "label": "2D · ispezione sperimentale",
        "reason": "Entrypoint e asset presenti. L'avvio e il reskin runtime "
                  "vanno verificati in browser; nessuna certificazione offline.",
        "capabilities": [
            "attempt-launch", "dom", "canvas-2d", "asset-preview", "local-reskin",
        ],
    }


def main() -> None:
    paths = subprocess.check_output(
        ["git", "ls-files", "-z"], cwd=ROOT,
    ).decode("utf-8", errors="replace").split("\0")
    files = [p.replace("\\", "/") for p in paths if p and p.startswith(EXTRACTED)]
    files.sort()
    audit = {
        **audit_rows("RESKIN_AUDIT_V4.md", old=True),
        **audit_rows("RESKIN_AUDIT_NEW45.md", old=False),
    }
    manifests = [p for p in files if p.endswith("/_game-capture-manifest.json")]
    games = []
    for manifest in manifests:
        base = manifest.removesuffix("/_game-capture-manifest.json")
        game_files = [p for p in files if p.startswith(base + "/") and p != manifest]
        local_entries = [
            p for p in game_files if p.endswith("/index.html") or p.endswith("/game.html")
        ]
        meta = json.loads((ROOT / manifest).read_text(encoding="utf-8"))
        game_name = str(meta.get("game") or base.rsplit("/", 1)[-1])
        game_key = slug(game_name)
        official = slug(str(meta.get("official_slug") or game_name))
        aliases = {
            "fouruno": "foonoonlinemultiplayer",
            "wordsearchlyg": "wordsearch",
        }
        record = (audit.get(official) or audit.get(game_key) or
                  audit.get(aliases.get(game_key, "")) or {})
        # Names from older reports that use distinct ZIP filenames.
        if not record and game_name == "find-the-cow(cat)":
            record = {"title": "Nut Sort: Build the City", "engine": "Defold",
                      "graphics": "2D/2.5D", "screensEstimate": "Medie",
                      "score": 59, "scoreSource": "RESKIN_AUDIT_V4.md"}
        entry = best_entry(local_entries)
        category = meta.get("category") or (
            base[len(EXTRACTED):].split("/")[0] if
            "/" in base[len(EXTRACTED):] else "Puzzles"
        )
        engine = technology(meta, record, game_files)
        graphics = str(record.get("graphics") or "Da verificare")
        assets = []
        for p in game_files:
            ext = Path(p).suffix.lower()
            kind = ("image" if ext in IMAGE_EXTS else
                    "model" if ext in MODEL_EXTS else
                    "atlas" if ext in ATLAS_EXTS else None)
            if not kind:
                continue
            assets.append({
                "path": p,
                "url": "/" + quote(p, safe="/-._~"),
                "kind": kind,
                "extension": ext,
                "name": p.rsplit("/", 1)[-1],
                "bytes": (ROOT / p).stat().st_size,
            })
        images = sum(a["kind"] == "image" for a in assets)
        status = availability(entry, engine, graphics, images)
        games.append({
            "id": slug(base[len(EXTRACTED):]),
            "title": record.get("title") or display_from_slug(game_name),
            "category": category,
            "engine": engine,
            "reportedEngine": record.get("engine") or meta.get("loader_type") or "unknown",
            "graphics": graphics,
            "screensEstimate": record.get("screensEstimate") or "Non rilevate",
            "score": record.get("score"),
            "scoreSource": record.get("scoreSource"),
            "sourceZip": meta.get("source_zip") or game_name + ".zip",
            "base": base,
            "entry": "/" + quote(entry, safe="/-._~") if entry else None,
            "entryCount": len(local_entries),
            "fileCount": len(game_files),
            "imageCount": images,
            "modelCount": sum(a["kind"] == "model" for a in assets),
            "assetCount": len(assets),
            "assets": assets,
            "captureStatus": meta.get("capture_status", "unverified"),
            "verifiedOffline": False,
            **status,
        })

    games.sort(key=lambda g: (-int(g["score"] or 0), g["title"].lower()))
    ids = [g["id"] for g in games]
    if len(ids) != len(set(ids)):
        raise ValueError("Duplicate game ids, review normalization.")
    counts = dict(Counter(g["status"] for g in games))
    OUT.parent.mkdir(exist_ok=True)
    OUT.write_text(json.dumps({
        "schemaVersion": 1,
        "generated": date.today().isoformat(),
        "repository": "jessicacarter9955/games",
        "source": "tracked extracted tree + historical engineering audits",
        "disclaimer": (
            "Punteggi e screenshot sono storici. Entry HTML presente non prova "
            "avvio completo o diritti di ridistribuzione degli asset."
        ),
        "counts": counts,
        "total": len(games),
        "games": games,
    }, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    print("Generated catalog:", len(games), "games,", counts)
    print("Manifest:", OUT.relative_to(ROOT))


if __name__ == "__main__":
    main()
