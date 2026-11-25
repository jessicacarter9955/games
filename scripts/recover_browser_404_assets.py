#!/usr/bin/env python3
"""Recover 404 assets requested by real locally mirrored game runtimes.

Only the known original CDN for each game is queried. Paths are derived from
observed 404s on the same exact game's local-mirror origin, never guessed from
filenames. No user credentials, cookies or backend API requests are forwarded.
Re-running safely skips files already recovered.
"""
from __future__ import annotations

import argparse
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime, timezone
import hashlib
import json
import os
from pathlib import Path
import sys
from urllib.parse import quote, unquote, urlsplit
from urllib.request import Request, urlopen

from playwright.sync_api import sync_playwright


DL=Path.home()/"Downloads"
BASE=DL/"_chatgpt_new45_cdn_mirrors"
MAP={
    "iogamespaperio":(
        BASE/"io games"/"paperio"/"hosts",
        "paper-io-2.game-files.crazygames.com","paper-io-2/10"),
    "triviaguesstheiranswers":(
        BASE/"trivia"/"guesstheiranswers"/"hosts",
        "guess-their-answer.game-files.crazygames.com","guess-their-answer/13"),
    "hexastack":(
        DL/"_chatgpt_games_full_mirrors"/"hexastack"/"hosts",
        "hexa-stack.game-files.crazygames.com","hexa-stack/59"),
    "wordgameswordwipe":(
        BASE/"Word games"/"word-wipe"/"hosts",
        "word-wipe.game-files.crazygames.com","word-wipe/3"),
    "iogamesevowarsio":(
        BASE/"io games"/"evowarsio"/"hosts",
        "evowars.io",""),
    "cardsdominoduel":(
        BASE/"cards"/"dominoduel"/"hosts",
        "domino-duel-uit.game-files.crazygames.com","domino-duel-uit/239"),
}
ALLOWED={".png",".jpg",".jpeg",".webp",".avif",".gif",".svg",".json",
         ".glb",".gltf",".bin",".pack",".woff",".woff2",".ttf",".otf",
         ".mp3",".ogg",".wav",".css",".js",".mjs",".wasm",".atlas",".xml",".txt"}
MAX_FILE=32*1024*1024


def collect_missing(game: str, port: int, seconds: float, click: str = '') -> tuple[list[str], dict]:
    _,host,version=MAP[game]
    prefix=f"/local-mirror/{game}/{host}/"+(version.strip("/")+"/" if version else "")
    failures=set()
    ignored=0
    with sync_playwright() as pw:
        browser=pw.chromium.launch(headless=True,args=[
            "--enable-webgl","--use-gl=angle","--use-angle=swiftshader",
            "--disable-dev-shm-usage"])
        context=browser.new_context(viewport={"width":1320,"height":810})
        page=context.new_page()
        def on_response(response):
            nonlocal ignored
            if response.status!=404:return
            url=urlsplit(response.url)
            path=unquote(url.path)
            if url.hostname not in ("127.0.0.1","localhost") or (
                    url.port!=port) or not path.startswith(prefix):
                ignored+=1
                return
            name=path[len(prefix):]
            if not name or name.endswith("/"):
                ignored+=1
                return
            failures.add(name)
        page.on("response",on_response)
        try:
            page.goto(f"http://127.0.0.1:{port}/reskinner/#game={game}",
                      wait_until="domcontentloaded",timeout=25000)
            page.wait_for_timeout(int(seconds*1000))
            if click:
                try:
                    if click == "WORDWIPE_CANVAS_PLAY":
                        # The original Word Wipe Play button is drawn on
                        # canvas, not represented by a DOM button.
                        if game != "wordgameswordwipe":
                            raise ValueError("Canvas click profile is game-specific")
                        target=page.frame_locator("#gameFrame").locator("canvas").first
                        bounds=target.bounding_box()
                        if not bounds or bounds["width"]<100:
                            raise ValueError("Canvas unavailable")
                        page.mouse.click(bounds["x"]+bounds["width"]*.50,
                                         bounds["y"]+bounds["height"]*.79)
                        page.wait_for_timeout(5500)
                    else:
                        item=page.frame_locator("#gameFrame").get_by_text(click,exact=True)
                        if item.count() and item.first.is_visible():
                            item.first.click(timeout=4500)
                            page.wait_for_timeout(5000)
                except Exception as e:
                    print("BROWSER_CLICK_NOT_CONFIRMED",game,repr(e)[:200],flush=True)
        finally:
            context.close()
            browser.close()
    return sorted(failures),{"ignoredOtherGameOrReskinner404":ignored,
                             "gamePrefix":prefix}


def valid_asset(relative: str, data: bytes):
    if len(data)==0 or len(data)>MAX_FILE:
        raise ValueError("Invalid file size")
    snippet=data[:80].lstrip().lower()
    if snippet.startswith((b"<!doctype",b"<html",b"ctype html")):
        raise ValueError("HTML response instead of original asset")
    ext=Path(relative).suffix.lower()
    if ext==".json":
        result=json.loads(data)
        if not isinstance(result,(dict,list)):raise ValueError("Unexpected JSON")
    elif ext==".glb" and not data.startswith(b"glTF"):
        raise ValueError("Invalid glTF data")
    elif ext==".png" and not data.startswith(b"\x89PNG\r\n\x1a\n"):
        raise ValueError("Invalid PNG data")
    elif ext in (".jpg",".jpeg") and not data.startswith(b"\xff\xd8"):
        raise ValueError("Invalid JPEG data")
    elif ext==".wasm" and not data.startswith(b"\0asm"):
        raise ValueError("Invalid WebAssembly data")
    elif ext==".pack" and len(data)<128:
        raise ValueError("Incomplete pack")


def recover_one(game:str, name:str, apply:bool)->dict:
    root,host,version=MAP[game]
    try:
        name=unquote(name)
        filename=(root/host/version/name).resolve()
        filename.relative_to((root/host/version).resolve())
        if any(x.startswith(".") or x in ("..","") for x in Path(name).parts):
            raise ValueError("Invalid path component")
        if filename.suffix.lower() not in ALLOWED:
            raise ValueError("File extension not allowlisted")
        source=f"https://{host}/"+(version.strip("/")+"/" if version else "")+quote(name,safe="/-_.()")
        result={"relative":name,"source":source,"destination":str(filename)}
        if filename.exists():
            result.update(status="already_present",bytes=filename.stat().st_size)
            return result
        if not apply:
            result["status"]="dry_run_missing"
            return result
        request=Request(source,headers={
            "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                         "AppleWebKit/537.36 Chrome/142 Safari/537.36",
            "Referer":"https://www.crazygames.com/"})
        with urlopen(request,timeout=22) as r:
            if r.status!=200:raise ValueError("Not full 200 response")
            size=int(r.headers.get("Content-Length") or 0)
            if size>MAX_FILE:raise ValueError("Too large")
            content=r.read(MAX_FILE+1)
        if size and size!=len(content):
            raise ValueError("Truncated response")
        valid_asset(name,content)
        filename.parent.mkdir(parents=True,exist_ok=True)
        tmp=filename.with_name(filename.name+".2night-part")
        try:
            with tmp.open("xb") as f:f.write(content)
            if not filename.exists():
                os.replace(tmp,filename)
            result.update(status="recovered",bytes=len(content),
                          sha256=hashlib.sha256(content).hexdigest())
        finally:
            if tmp.exists():tmp.unlink()
        return result
    except Exception as e:
        return {"relative":name,"status":"failed","error":repr(e)[:210]}


def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--game",choices=MAP.keys(),default="iogamespaperio")
    parser.add_argument("--port",type=int,default=8001)
    parser.add_argument("--seconds",type=float,default=9)
    parser.add_argument("--click",default="")
    parser.add_argument("--limit",type=int,default=100)
    parser.add_argument("--workers",type=int,default=7)
    parser.add_argument("--apply",action="store_true")
    a=parser.parse_args()
    names,metadata=collect_missing(a.game,a.port,a.seconds,a.click)
    selected=names[:a.limit]
    print("BROWSER_404_AUDIT",json.dumps({
        "game":a.game,"captured":len(names),"selected":len(selected),
        "examples":selected[:22],**metadata}),flush=True)
    results=[]
    with ThreadPoolExecutor(max_workers=min(10,max(1,a.workers))) as pool:
        jobs={pool.submit(recover_one,a.game,name,a.apply):name for name in selected}
        for future in as_completed(jobs):
            info=future.result()
            results.append(info)
            print("CDN_ASSET",json.dumps(info),flush=True)
    summary={
        "at":datetime.now(timezone.utc).isoformat(),"game":a.game,
        "source":"Browser-observed local game 404 -> pinned original CDN",
        "apply":a.apply,"count404":len(names),"processed":len(results),
        "recovered":sum(r["status"]=="recovered" for r in results),
        "failed":sum(r["status"]=="failed" for r in results),
        "remainingUnprocessed":max(0,len(names)-len(selected)),
        "results":sorted(results,key=lambda x:x["relative"]),
        "caveat":"No gameplay is certified by downloading static assets.",
    }
    reports=DL/"_2night_reskin_qa"/"recovery-reports"
    reports.mkdir(parents=True,exist_ok=True)
    path=reports/f"incremental-{a.game}-{datetime.now(timezone.utc).strftime('%Y%m%dT%H%M%SZ')}.json"
    path.write_text(json.dumps(summary,indent=2),encoding="utf-8")
    print("RECOVERY_SUMMARY",json.dumps({
        k:v for k,v in summary.items() if k!="results"}),flush=True)
    return 0


if __name__=="__main__":
    raise SystemExit(main())
