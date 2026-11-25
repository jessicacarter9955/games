#!/usr/bin/env python3
"""Original-game interaction probes through the real Windows Chrome CDP previewer.

These probes intentionally use screen-space interactions on *original* game
pixels. They don't synthesize game scenes or auto-certify a test as green.
"""
from __future__ import annotations

import argparse
import json
import subprocess
import sys
import tempfile
import time
from pathlib import Path

from hybrid_gameplay_qa import (
    CDP, chrome_path, debugger_target, free_port, game_url, image_metrics,
    launch_debugger, snapshot, STATE_SCRIPT,
)
from hybrid_qa_with_server import wait_for_catalog


RECIPES = {
    "carout": [
        ("close Daily Rewards popup", "click", (.571, .217)),
        ("select car on parking board", "click", (.515, .545)),
        ("drag a car upward", "drag", (.515, .545, .515, .350)),
    ],
    "hexastack": [
        ("drag tutorial green hex into board", "drag", (.563, .905, .560, .435)),
        ("drag another hex into board", "drag", (.506, .919, .455, .530)),
        ("tap a placed hex", "click", (.560, .440)),
    ],
    "triviaguesstheiranswers": [
        ("press original Play canvas button", "click", (.5, .887)),
        ("try start or answer interaction", "click", (.5, .665)),
        ("try next answer interaction", "click", (.5, .575)),
    ],
}


def drag(cdp: CDP, x1: float, y1: float, x2: float, y2: float) -> None:
    cdp.call("Input.dispatchMouseEvent", {
        "type":"mouseMoved", "x":x1, "y":y1})
    cdp.call("Input.dispatchMouseEvent", {
        "type":"mousePressed", "x":x1, "y":y1,
        "button":"left", "buttons":1, "clickCount":1})
    steps=18
    for i in range(1,steps+1):
        f=i/steps
        cdp.call("Input.dispatchMouseEvent",{
            "type":"mouseMoved","x":x1+(x2-x1)*f,"y":y1+(y2-y1)*f,
            "button":"left","buttons":1})
        time.sleep(.025)
    cdp.call("Input.dispatchMouseEvent",{
        "type":"mouseReleased","x":x2,"y":y2,
        "button":"left","buttons":0,"clickCount":1})


def locate(frame: dict, x: float, y: float) -> tuple[float,float]:
    if not frame or frame.get("width",0)<200 or frame.get("height",0)<150:
        raise ValueError("Game viewport is missing or too small")
    return frame["x"]+x*frame["width"],frame["y"]+y*frame["height"]


def probe(cdp:CDP,game:str,base:str,out:Path,initial_wait:float)->dict:
    out=out/game
    out.mkdir(parents=True,exist_ok=True)
    cdp.errors.clear()
    cdp.http_errors.clear()
    cdp.navigation.clear()
    entry={"id":game,"gameplayVerified":False,"status":"unverified",
           "actions":[],"screenshots":[]}
    try:
        cdp.call("Page.navigate",{"url":game_url(base,game)},timeout=16)
        time.sleep(initial_wait)
        before,img=snapshot(cdp,out,"start")
        entry["screenshots"].append(before)
        entry["selected"]=("/local-mirror/"+game+"/" in before.get("iframe",""))
        if not entry["selected"]:
            entry["status"]="wrong-game-selected"
            return entry
        prev,prev_image=before,img
        for idx,(name,kind,coords) in enumerate(RECIPES[game],start=1):
            frame=prev.get("frame") or {}
            if kind=="click":
                x,y=locate(frame,*coords)
                cdp.click(x,y)
                action={"name":name,"type":"click","x":round(x,1),"y":round(y,1)}
            else:
                x1,y1=locate(frame,coords[0],coords[1])
                x2,y2=locate(frame,coords[2],coords[3])
                drag(cdp,x1,y1,x2,y2)
                action={"name":name,"type":"drag","from":[round(x1),round(y1)],
                        "to":[round(x2),round(y2)]}
            entry["actions"].append(action)
            time.sleep(6.0 if idx==1 else 4.0)
            state,screenshot=snapshot(cdp,out,f"after_{idx}")
            state["visual_delta"]=image_metrics(prev_image,screenshot,prev.get("frame"))
            entry["screenshots"].append(state)
            prev,prev_image=state,screenshot
        entry["status"]="needs-visual-review"
    except Exception as exc:
        entry["status"]="probe-error"
        entry["probeError"]=repr(exc)[:650]
    finally:
        entry["javascriptErrors"]=cdp.errors[:]
        entry["httpErrors"]=cdp.http_errors[:]
        entry["navigations"]=cdp.navigation[:]
        (out/"result.json").write_text(
            json.dumps(entry,ensure_ascii=False,indent=2),encoding="utf-8")
    return entry


def main()->int:
    parser=argparse.ArgumentParser()
    parser.add_argument("--port",type=int,default=8005)
    parser.add_argument("--wait",type=float,default=10)
    parser.add_argument("--games",default="carout,hexastack,triviaguesstheiranswers")
    parser.add_argument("--output",default=None)
    args=parser.parse_args()
    games=[x.strip() for x in args.games.split(",") if x.strip()]
    if any(g not in RECIPES for g in games):
        raise ValueError("Unexpected game id")
    root=Path(__file__).resolve().parent
    out=Path(args.output or (Path.home()/"Downloads"/"_2night_targeted_qa"))
    out.mkdir(parents=True,exist_ok=True)
    with (out/"server.log").open("ab") as log:
        server=subprocess.Popen([sys.executable,"-u","-B",
                                 str(root/"serve_local_mirrors.py"),
                                 "--port",str(args.port)],stdout=log,
                                stderr=subprocess.STDOUT)
        try:
            catalog=wait_for_catalog(args.port)
            print("TARGETED_SERVER",json.dumps(catalog),flush=True)
            with tempfile.TemporaryDirectory(prefix="2night-targeted-cdp-",
                                             ignore_cleanup_errors=True) as profile:
                chrome=launch_debugger(chrome_path(),free_port(),Path(profile),False)
                # launch_debugger needs the chosen port to look up CDP.
                # For a deterministic port, read from DevToolsActivePort instead.
                try:
                    path=Path(profile)/"DevToolsActivePort"
                    deadline=time.monotonic()+15
                    while time.monotonic()<deadline and not path.is_file():
                        time.sleep(.2)
                    if not path.is_file():
                        raise RuntimeError("Chrome did not write DevToolsActivePort")
                    port=int(path.read_text(encoding="utf-8").splitlines()[0])
                    cdp=CDP(debugger_target(port))
                    try:
                        for method in ("Page.enable","Runtime.enable","Network.enable"):
                            cdp.call(method)
                        cdp.call("Emulation.setDeviceMetricsOverride",{
                            "width":1360,"height":850,"deviceScaleFactor":1,"mobile":False})
                        reports=[]
                        for game in games:
                            report=probe(cdp,game,f"http://127.0.0.1:{args.port}",out,args.wait)
                            print("TARGETED_RESULT",json.dumps({
                                "game":game,"status":report["status"],
                                "actions":[a["name"] for a in report["actions"]],
                                "deltas":[x.get("visual_delta",{}).get("mean_delta")
                                          for x in report["screenshots"][1:]],
                                "errors":report["javascriptErrors"][:3],
                                "http":len(report["httpErrors"]),
                                "verified":report["gameplayVerified"],
                            }),flush=True)
                            reports.append(report)
                        (out/"summary.json").write_text(json.dumps({
                            "results":[{"id":x["id"],"status":x["status"]}
                                       for x in reports],
                            "gameplayCertified":0,
                            "note":"A probe never certifies gameplay without visual evidence."
                        },indent=2),encoding="utf-8")
                    finally:cdp.close()
                finally:
                    chrome.terminate()
                    try:chrome.wait(timeout=8)
                    except subprocess.TimeoutExpired:chrome.kill()
        finally:
            server.terminate()
            try:server.wait(timeout=7)
            except subprocess.TimeoutExpired:server.kill()
    return 0


if __name__=="__main__":
    raise SystemExit(main())
