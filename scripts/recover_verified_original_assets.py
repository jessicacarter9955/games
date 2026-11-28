#!/usr/bin/env python3
"""Recover verified original CrazyGames CDN files missing from Windows mirrors.

Sources are pinned to their original captured game hosts/paths. All downloads
are verified and fail closed on HTML masquerading as game data. Does not spoof
gameplay or alter licensed network APIs. Existing files are never overwritten.
"""
from __future__ import annotations

import argparse
from datetime import datetime, timezone
import hashlib
import json
import os
from pathlib import Path
from urllib.request import urlopen, Request
import shutil

DOWNLOADS = Path.home()/"Downloads"
BASE = DOWNLOADS/"_chatgpt_new45_cdn_mirrors"
SPECS = {
    "triviaguesstheiranswers": {
        "root": BASE/"trivia"/"guesstheiranswers"/"hosts"/
            "guess-their-answer.game-files.crazygames.com"/"guess-their-answer"/"13",
        "host": "guess-their-answer.game-files.crazygames.com",
        "base": "/guess-their-answer/13/",
        "files": [
            "files/assets/193571846/1/BasicCharacter_7.json",
            "files/assets/193571834/1/BasicCharacter_7.glb",
            "files/assets/193572414/1/ShopCharacter_BasicCharacter_7.json",
        ],
    },
    "iogamespaperio": {
        "root": BASE/"io games"/"paperio"/"hosts"/
            "paper-io-2.game-files.crazygames.com"/"paper-io-2"/"10",
        "host": "paper-io-2.game-files.crazygames.com",
        "base": "/paper-io-2/10/",
        "files": ["config.json", "packs/Scene.pack"],
    },
}
MAX_BYTES=45*1024*1024


def valid_bytes(rel: str, data: bytes) -> None:
    if not data or len(data)>MAX_BYTES:
        raise ValueError(f"Wrong asset size {len(data)} for {rel}")
    if data.lstrip().startswith((b"<!doctype",b"<html",b"CTYPE HTML")):
        raise ValueError(f"HTML error page instead of original asset: {rel}")
    if rel.endswith(".json"):
        doc=json.loads(data)
        if not isinstance(doc,(dict,list)):
            raise ValueError(f"Unexpected JSON root: {rel}")
    elif rel.endswith(".glb") and not data.startswith(b"glTF"):
        raise ValueError("Invalid glTF binary header")
    elif rel.endswith(".pack") and len(data)<128:
        raise ValueError("Archive pack too small")
    elif not rel.endswith((".glb",".pack")):
        raise ValueError("Unknown file type")


def process(game_id: str, spec: dict, apply: bool) -> list[dict]:
    root: Path=spec["root"]
    base_url="https://"+spec["host"]+spec["base"]
    result=[]
    for rel in spec["files"]:
        dest=(root/rel).resolve()
        dest.relative_to(root.resolve())
        record={"game":game_id,"asset":rel,"url":base_url+rel,
                "local":str(dest)}
        if dest.exists():
            if not dest.is_file():raise ValueError("Not a file: "+str(dest))
            existing=dest.read_bytes()
            valid_bytes(rel,existing)
            record.update(status="already_present",
                          bytes=len(existing),sha256=hashlib.sha256(existing).hexdigest())
        elif not apply:
            record.update(status="not_downloaded_dry_run")
        else:
            request=Request(base_url+rel,headers={
                "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                             "AppleWebKit/537.36 Chrome/142 Safari/537.36",
                "Referer":"https://www.crazygames.com/"})
            with urlopen(request,timeout=35) as response:
                if response.status!=200:
                    raise ValueError(f"Expected full HTTP 200 for {rel}, got {response.status}")
                size_header=response.headers.get("Content-Length")
                if size_header and int(size_header)>MAX_BYTES:
                    raise ValueError("Asset too large: "+rel)
                chunks=[]
                received=0
                while True:
                    chunk=response.read(65536)
                    if not chunk:break
                    received+=len(chunk)
                    if received>MAX_BYTES:raise ValueError("File exceeded cap: "+rel)
                    chunks.append(chunk)
            data=b"".join(chunks)
            if size_header and len(data)!=int(size_header):
                raise ValueError("Incomplete CDN transfer: "+rel)
            valid_bytes(rel,data)
            dest.parent.mkdir(parents=True,exist_ok=True)
            tmp=dest.with_name(dest.name+".2night-part")
            try:
                with tmp.open("xb") as handle:
                    handle.write(data)
                # No concurrent overwrite: another mirror worker may have
                # just recovered the same legitimate asset.
                if dest.exists():
                    tmp.unlink()
                    record.update(status="concurrently_present")
                else:
                    os.replace(tmp,dest)
                    record.update(status="recovered",
                                  bytes=len(data),sha256=hashlib.sha256(data).hexdigest())
            finally:
                if tmp.exists():tmp.unlink()
        result.append(record)
        print("ORIGINAL_CDN",json.dumps(record),flush=True)
    return result


def main() -> int:
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--apply",action="store_true")
    parser.add_argument("--games",default=",".join(SPECS))
    args=parser.parse_args()
    games=[g.strip() for g in args.games.split(",") if g.strip()]
    if not games or any(g not in SPECS for g in games):
        parser.error("Unknown game")
    assets=[]
    for gid in games:
        assets.extend(process(gid,SPECS[gid],args.apply))
    if args.apply:
        folder=DOWNLOADS/"_2night_reskin_qa"/"recovery-reports"
        folder.mkdir(parents=True,exist_ok=True)
        report={"at":datetime.now(timezone.utc).isoformat(),
                "source":"original game-files.crazygames.com CDN",
                "total":len(assets),"assets":assets,
                "note":"Verified original assets only. Gameplay not certified."}
        (folder/"manual-six-assets-2026-11-25.json").write_text(
            json.dumps(report,indent=2),encoding="utf-8")
    return 0


if __name__=="__main__":
    raise SystemExit(main())
