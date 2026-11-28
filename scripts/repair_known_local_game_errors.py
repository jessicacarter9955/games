#!/usr/bin/env python3
"""Two narrowly scoped repairs for verified local-mirror JS exceptions.

Original user-owned mirror files are backed up outside the mirror directory.
Only changes exact, pre-reviewed snippets. Refuses unexpected variants.
Use --apply to write. This does not bypass game origin/licensing/SDK checks,
and does not assert that a live game is playable.
"""
from __future__ import annotations

import argparse
from datetime import datetime, timezone
import hashlib
import json
from pathlib import Path
import os
import shutil

DL = Path.home() / "Downloads"
MIRRORS = DL / "_chatgpt_new45_cdn_mirrors"
BACKUPS = DL / "_2night_reskin_qa" / "repair-backups"

REPAIRS = {
    "triviaguesstheiranswers": {
        "path": MIRRORS / "trivia" / "guesstheiranswers" / "hosts" /
            "guess-their-answer.game-files.crazygames.com" /
            "guess-their-answer" / "13" / "__game-scripts.js",
        "old": '" (" +\n          assetName +\n          ") loading"',
        "new": '" (" +\n          asset.name +\n          ") loading"',
        "reason": "Use the existing asset.name in the rejected asset error message.",
    },
    "iogamespaperio": {
        "path": MIRRORS / "io games" / "paperio" / "hosts" /
            "paper-io-2.game-files.crazygames.com" /
            "paper-io-2" / "10" / "index.js",
        "old": 'this.progress=this.position.x/this.scrollWidth;const{ButtonSelect:V,Slider:g}=q.DOMElements,{map:I,hoveredSkin:e}=q.user.skinList,',
        "new": 'this.progress=this.position.x/this.scrollWidth;if(!q.user?.skinList)return;const{ButtonSelect:V,Slider:g}=q.DOMElements,{map:I,hoveredSkin:e}=q.user.skinList,',
        "reason": "Skin selector update must wait for q.user to be initialized.",
    },
}


def checksum(value: bytes) -> str:
    return hashlib.sha256(value).hexdigest()


def apply_one(game_id: str, apply: bool) -> dict:
    spec = REPAIRS[game_id]
    path: Path = spec["path"]
    path.resolve().relative_to(DL.resolve())
    original = path.read_bytes()
    old = spec["old"].encode("utf-8")
    new = spec["new"].encode("utf-8")
    before = checksum(original)
    if original.count(new) == 1 and original.count(old) == 0:
        return {"game": game_id, "status": "already_applied",
                "sha256": before, "path": str(path)}
    if original.count(old) != 1 or original.count(new) != 0:
        raise ValueError(f"Refuse unrecognized source in {game_id}: "
                         f"old={original.count(old)} new={original.count(new)}")
    fixed = original.replace(old, new, 1)
    result = {
        "game": game_id, "status": "dry_run",
        "old_sha256": before, "new_sha256": checksum(fixed),
        "path": str(path), "reason": spec["reason"],
        "difference_bytes": len(fixed)-len(original),
    }
    if not apply:
        return result
    BACKUPS.mkdir(parents=True, exist_ok=True)
    backup = BACKUPS / f"{game_id}.{before[:16]}.original.js"
    if not backup.exists():
        backup.write_bytes(original)
    elif checksum(backup.read_bytes()) != before:
        raise RuntimeError("Backup checksum mismatch. Refusing to overwrite")
    tmp = path.with_name(path.name + ".2night-tmp")
    try:
        tmp.write_bytes(fixed)
        os.replace(tmp, path)
    finally:
        if tmp.exists():
            tmp.unlink()
    if checksum(path.read_bytes()) != checksum(fixed):
        raise RuntimeError("Post-write verification failed")
    result.update(status="patched", backup=str(backup))
    return result


def main() -> int:
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--apply", action="store_true")
    p.add_argument("--games", default=",".join(REPAIRS))
    args = p.parse_args()
    games = [g.strip() for g in args.games.split(",") if g.strip()]
    if not games or any(g not in REPAIRS for g in games):
        p.error("Unknown or empty game selection")
    results = [apply_one(g, args.apply) for g in games]
    output = {
        "time": datetime.now(timezone.utc).isoformat(),
        "applied": args.apply, "repairs": results,
        "note": "Error-guard repair only. Does not prove a playable match.",
    }
    print(json.dumps(output, indent=2), flush=True)
    if args.apply:
        BACKUPS.mkdir(parents=True, exist_ok=True)
        (BACKUPS / "last-repair-report.json").write_text(
            json.dumps(output, indent=2), encoding="utf-8")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
