#!/usr/bin/env python3
"""Playwright QA: load, press Play, inspect screenshots and input for all games.

Every title gets local-only network audit, screenshots and a JSON checkpoint.
Never infer actual gameplay from index.html, one canvas or one animation.
"""
from __future__ import annotations
import argparse
import base64
import hashlib
import io
import json
import math
import os
import re
import urllib.request
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlsplit

from playwright.sync_api import sync_playwright
try:
    from PIL import Image, ImageChops, ImageStat
except ImportError:
    Image = None

PLAY = re.compile(
    r"^\s*(play|start|start game|play game|new game|continue|gioca|inizia|"
    r"begin|jugar|jouer|spielen|let.s play|next level)\s*[!›»>]*\s*$",
    re.I)
CONTROLS = "button,[role=button],input[type=button],input[type=submit],a,.play,.start"
OUT = Path(os.environ.get("RESKIN_QA_REPORT_DIR", str(Path.home() / "Downloads" / "_reskin_69_gameplay_qa_20261125")))

def now():
    return datetime.now(timezone.utc).isoformat()

def short(s, n=220):
    return str(s).replace("\r"," ").replace("\n"," ")[:n]

def picture_metrics(data):
    if Image is None:
        return {"analysisUnavailable":"Pillow not installed"}
    img=Image.open(io.BytesIO(data)).convert("RGB")
    img.thumbnail((192,120))
    quant=img.quantize(colors=32)
    hist=quant.histogram()
    total=max(1,img.width*img.height)
    vals=[h/total for h in hist if h]
    return {"entropy":round(-sum(p*math.log2(p) for p in vals),3),
            "dominantFraction":round(max(hist)/total,3),
            "nearUniform":bool(max(hist)/total>.95 and -sum(p*math.log2(p) for p in vals)<1.2),
            "paletteColors":len(vals)}

def visual_delta(before,after):
    if Image is None: return {}
    x=Image.open(io.BytesIO(before)).convert("RGB").resize((128,80))
    y=Image.open(io.BytesIO(after)).convert("RGB").resize((128,80))
    diff=ImageChops.difference(x,y)
    mean=sum(ImageStat.Stat(diff).mean)/3
    pixels=sum(max(p)>30 for p in diff.getdata())
    return {"meanRGBDelta":round(mean,2),"fractionChanged":round(pixels/(128*80),3)}

def document_state(page):
    js = """() => {
      const canvases=[...document.querySelectorAll('canvas')].map(c=>{
        let r=c.getBoundingClientRect();
        return {w:c.width,h:c.height,visible:r.width>100&&r.height>90}});
      return {title:document.title,
        body:(document.body?.innerText||'').replace(/\\s+/g,' ').slice(0,850),
        canvases,iframeCount:document.querySelectorAll('iframe').length,
        unity:!!window.unityGameInstance,
        unityStatus:document.querySelector('#unity-status')?.textContent?.slice(0,220)||null};
    }"""
    try: return page.evaluate(js)
    except Exception as e: return {"error":short(e)}

def capture(page,folder,step):
    name=step+".jpg"
    errors=[]
    data=None
    method="browser-screenshot"
    try:
        # Do not wait for animated canvases to settle.
        data=page.screenshot(type="jpeg",quality=72,timeout=4400,
                             animations="allow")
    except Exception as exc:
        errors.append(short(exc,200))
        # CDP page screenshots may stall on accelerated game canvases.
        # The real source canvas can sometimes be read directly instead.
        try:
            url=page.evaluate("""() => {
                const canvas=[...document.querySelectorAll('canvas')].find(
                    c => c.width>200 && c.height>150);
                return canvas ? canvas.toDataURL('image/jpeg',0.72) : null;
            }""")
            if url and url.startswith("data:image/jpeg;base64,"):
                data=base64.b64decode(url.split(",",1)[1])
                method="canvas-readback"
        except Exception as exc:
            errors.append(short(exc,200))
    if data is None:
        return None, {"file":None,"errors":errors,"metrics":{},
                      "status":"capture-failed"}
    (folder/name).write_bytes(data)
    return data, {"file":name,"sha256":hashlib.sha256(data).hexdigest(),
                  "metrics":picture_metrics(data),"method":method,
                  "screenshotErrors":errors}

def press_play(page,record):
    for frame in list(page.frames):
        try:
            nodes=frame.locator(CONTROLS)
            for i in range(min(nodes.count(),90)):
                node=nodes.nth(i)
                if not node.is_visible(timeout=450):continue
                label=(node.inner_text(timeout=500)
                       or node.get_attribute("aria-label")
                       or node.get_attribute("value") or "").strip()
                if not PLAY.match(label):continue
                href=node.get_attribute("href") or ""
                if href.startswith(("https:","http:")):continue
                node.click(timeout=1400,no_wait_after=True)
                record.append({"type":"DOM-Play","label":short(label,80),
                               "frame":short(frame.url,160)})
                return
        except Exception as e:
            record.append({"type":"DOM-probe-error","detail":short(e)})
    # Canvas/WebGL games draw Play within the canvas. Probe a trusted
    # pointer click without waiting for unstable element actionability.
    try:
        state=document_state(page)
        if any(c.get("visible") for c in state.get("canvases",[])):
            size=page.viewport_size or {"width":1080,"height":680}
            x=size["width"]*.5
            y=size["height"]*.57
            page.mouse.click(x,y,delay=80)
            record.append({"type":"canvas-probe","x":round(x),
                           "y":round(y),"trustedPointer":True})
    except Exception as exc:
        record.append({"type":"canvas-probe-error","detail":short(exc)})


def check(browser,base,game,seconds,allow_remote=False):
    gid=game["id"];folder=OUT/gid
    folder.mkdir(parents=True,exist_ok=True)
    result={"id":gid,"title":game["title"],"engine":game["engine"],
            "originalStatus":game["status"],"testedAt":now(),
            "entry":game.get("entry"),"entryKind":game.get("entryKind"),
            "playActions":[],"screenshots":[],"pageErrors":[],
            "requestErrors":[],"httpErrors":[],"remoteBlocked":[],
            "gameplayVerified":False,"status":"not-tested"}
    if not game.get("entry"):
        result.update(status="missing-entry",reason="No local entrypoint")
        return result
    context=browser.new_context(viewport={"width":1080,"height":680},
        service_workers="block")
    page=context.new_page();page.set_default_timeout(2000)
    host=urlsplit(base)
    if not allow_remote:
        def routing(route):
            u=urlsplit(route.request.url)
            if u.scheme in ("http","https") and (u.hostname!=host.hostname or u.port!=host.port):
                if len(result["remoteBlocked"])<25:
                    result["remoteBlocked"].append(short(route.request.url,200))
                route.abort("blockedbyclient")
            else:route.continue_()
        context.route("**/*",routing)
    page.on("pageerror",lambda exc:
        result["pageErrors"].append(short(exc,350))
        if len(result["pageErrors"])<18 else None)
    page.on("requestfailed",lambda req:
        result["requestErrors"].append({"url":short(req.url,150),
            "error":short(req.failure,130)})
        if len(result["requestErrors"])<22 else None)
    page.on("response",lambda response:
        result["httpErrors"].append({"url":short(response.url,150),
            "code":response.status})
        if response.status>=400 and len(result["httpErrors"])<20 else None)
    try:
        res=page.goto(base.rstrip("/") + game["entry"],
                      wait_until="domcontentloaded",timeout=19000)
        result["httpEntryStatus"]=res.status if res else None
        result["navigatedUrlOnEntry"]=page.url
        page.wait_for_timeout(1400)
        before,p0=capture(page,folder,"00-boot")
        result["screenshots"].append(p0)
        result["bootDocument"]=document_state(page)
        result["navigatedUrlAfterBoot"]=page.url
        press_play(page,result["playActions"])
        page.wait_for_timeout(int(max(900,seconds*1000)))
        after,p1=capture(page,folder,"01-after-play")
        result["screenshots"].append(p1)
        result["playDocument"]=document_state(page)
        result["navigatedUrlAfterPlay"]=page.url
        result["playDiff"]=visual_delta(before,after) if before and after else {}
        page.keyboard.press("ArrowLeft")
        page.keyboard.press("ArrowRight")
        page.keyboard.press("Space")
        page.wait_for_timeout(1100)
        action,p2=capture(page,folder,"02-after-input")
        result["screenshots"].append(p2)
        result["inputDocument"]=document_state(page)
        result["navigatedUrlAfterInput"]=page.url
        result["inputDiff"]=visual_delta(after,action) if after and action else {}
        visual=p2["metrics"]
        dom_play=any(a["type"]=="DOM-Play" for a in result["playActions"])
        result["playActionVerified"]=dom_play
        state=result["playDocument"]
        if not action and not after:
            result["status"]="screenshot-unavailable"
        elif visual.get("nearUniform"):
            result["status"]="blank-or-uniform"
        elif (state.get("unityStatus") and not state.get("unity")):
            result["status"]="unity-loading"
        elif (not state.get("body","").strip()
              and not any(c["visible"] for c in state.get("canvases",[]))):
            result["status"]="blank-or-empty"
        elif not dom_play:
            result["status"]="play-not-confirmed"
        elif (result["playDiff"].get("fractionChanged",0)>.12
              and result["inputDiff"].get("fractionChanged",0)>.015
              and visual.get("entropy",0)>2.5):
            result["status"]="gameplay-candidate-review-required"
        else:
            result["status"]="loaded-no-gameplay-proof"
        # Needs actual screenshot/game-state review; never certify automatically.
        result["gameplayVerified"]=False
    except Exception as e:
        result.update(status="qa-error",error=short(e,650))
    finally:
        context.close()
    return result

def save_json(path,value):
    path.parent.mkdir(parents=True,exist_ok=True)
    tmp=path.with_suffix(".tmp")
    tmp.write_text(json.dumps(value,indent=2,ensure_ascii=False)+"\n",encoding="utf-8")
    tmp.replace(path)

def main():
    p=argparse.ArgumentParser()
    p.add_argument("--base",default="http://127.0.0.1:8001")
    p.add_argument("--game",action="append",default=[])
    p.add_argument("--seconds",type=float,default=5)
    p.add_argument("--skip-existing",action="store_true")
    p.add_argument("--allow-remote",action="store_true")
    args=p.parse_args()
    with urllib.request.urlopen(args.base+"/reskinner/catalog.json",timeout=35) as r:
        games=json.load(r)["games"]
    if args.game:
        games=[g for g in games if g["id"] in args.game]
    OUT.mkdir(parents=True,exist_ok=True)
    counts=Counter()
    with sync_playwright() as playwright:
        browser=playwright.chromium.launch(headless=True,args=[
            "--enable-webgl","--use-gl=angle","--use-angle=swiftshader",
            "--disable-dev-shm-usage"])
        try:
            for index,game in enumerate(games,1):
                destination=OUT/game["id"]/"result.json"
                if args.skip_existing and destination.is_file():
                    old=json.loads(destination.read_text(encoding="utf-8"))
                    counts[old["status"]]+=1
                    print("SKIP",index,len(games),game["id"],old["status"],
                          flush=True)
                    continue
                try:
                    result=check(browser,args.base,game,args.seconds,
                                 args.allow_remote)
                except Exception as e:
                    result={"id":game["id"],"title":game["title"],
                            "status":"qa-error","gameplayVerified":False,
                            "error":short(e,600),"testedAt":now()}
                save_json(destination,result)
                counts[result["status"]]+=1
                print("CHECKPOINT",index,len(games),game["id"],
                      result["status"],
                      "playClicks="+str(result.get("playActions",[])),
                      "errors="+str(len(result.get("pageErrors",[]))),
                      flush=True)
        finally:
            browser.close()
    summary={"timestamp":now(),"evaluated":sum(counts.values()),
             "counts":dict(counts),
             "certifiedGameplay":0,
             "note":"Automatic screenshots and input probes need state review."}
    save_json(OUT/"summary.json",summary)
    print("SUMMARY",json.dumps(summary,ensure_ascii=False),flush=True)

if __name__=="__main__":main()
