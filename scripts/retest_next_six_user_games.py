#!/usr/bin/env python3
"""Focused real-browser retest of six user-reported 2Night mirrors.

Runs clicks only on named original game controls. Screenshots, frame
navigations, real game asset 404s and exceptions are saved on Windows.
NEVER auto-certifies gameplay from a menu, animation or screenshot change.
"""
from __future__ import annotations
import json
from pathlib import Path
from datetime import datetime,timezone
from urllib.parse import urlsplit
from playwright.sync_api import sync_playwright

GAMES=[
    ("cardsdominoduel","Play with computer"),
    ("iogamestileman","Play!"),
    ("wordgameswordwipe",None),
    ("iogamesagario",None),
    ("cardsfouruno","Play Bots"),
    ("iogamesevowarsio","PLAY"),
]
DL=Path.home()/"Downloads"
OUTPUT=DL/"_2night_reskin_qa"/"manual-next6-qa-20261125"
OUTPUT.mkdir(parents=True,exist_ok=True)

def snapshot(page):
    try:
        return page.evaluate("""() => {
          const f=document.querySelector('#gameFrame');
          if(!f)return {error:'missing iframe'};
          const result={src:f.src};
          try {
            const d=f.contentDocument;
            result.url=d?.URL;
            result.title=d?.title;
            result.body=(d?.body?.innerText||'').slice(0,900);
            result.canvas=[...(d?.querySelectorAll('canvas')||[])].slice(0,6).map(
              c=>({width:c.width,height:c.height,
              rectWidth:c.getBoundingClientRect().width,
              rectHeight:c.getBoundingClientRect().height}));
          } catch(e) {result.error='cross-origin: '+String(e);}
          return result;
        }""")
    except Exception as e:
        return {"error":str(e)[:400]}

def safe_screenshot(page,path):
    try:
        page.screenshot(path=str(path),timeout=6500,animations="disabled")
        return True
    except Exception as e:
        return str(e)[:200]

def click_control(page,label):
    if not label:return "not requested"
    try:
        frame=page.frame_locator("#gameFrame")
        locator=frame.get_by_text(label,exact=True)
        if locator.count()<1:return "not found"
        if not locator.first.is_visible():return "hidden"
        locator.first.click(timeout=4500)
        return "clicked"
    except Exception as e:
        return "error: "+str(e)[:200]

def qa(game,label,chromium):
    ctx=chromium.new_context(viewport={"width":1365,"height":850},
      ignore_https_errors=False)
    page=ctx.new_page()
    errors=[];console=[];requests=[];failed=[];navigations=[]
    page.on("pageerror",lambda e: errors.append(str(e)[:250]) if len(errors)<20 else None)
    page.on("console",lambda m: console.append(m.text[:280]) if m.type=="error" and len(console)<30 else None)
    page.on("response",lambda r: requests.append([r.status,r.url[:250]]) if r.status>=400 and len(requests)<100 else None)
    page.on("requestfailed",lambda r: failed.append(r.url[:250]) if len(failed)<30 else None)
    page.on("framenavigated",lambda f: navigations.append(f.url[:260]) if len(navigations)<30 else None)
    result={"id":game,"clickLabel":label,"startedAt":datetime.now(timezone.utc).isoformat(),
      "gameplayVerified":False,"inspectorValidated":False}
    try:
        page.goto("http://127.0.0.1:8001/reskinner/#game="+game,
          wait_until="domcontentloaded",timeout=26000)
        page.wait_for_timeout(8000)
        result["before"]=snapshot(page)
        result["beforeShot"]=safe_screenshot(page,OUTPUT/(game+"-before.png"))
        if game=="iogamestileman":
            result["selectLocal"]=click_control(page,"Local")
        result["clickResult"]=click_control(page,label)
        if result["clickResult"]=="clicked":
            page.wait_for_timeout(5500)
            if game=="iogamestileman":
                for key in ["ArrowUp","ArrowRight"]:
                    page.keyboard.press(key)
                    page.wait_for_timeout(800)
                result["inputActions"]=["ArrowUp","ArrowRight"]
        result["after"]=snapshot(page)
        result["afterShot"]=safe_screenshot(page,OUTPUT/(game+"-after.png"))
    except Exception as e:
        result["exception"]=str(e)[:420]
    finally:
        result["pageErrors"]=list(dict.fromkeys(errors))
        result["consoleErrors"]=list(dict.fromkeys(console))
        result["httpErrors"]=requests
        result["failedRequests"]=failed
        result["navigations"]=navigations
        result["endedAt"]=datetime.now(timezone.utc).isoformat()
        path=OUTPUT/(game+".json")
        path.write_text(json.dumps(result,indent=2,ensure_ascii=False),encoding="utf-8")
        print("RETEST_6",json.dumps({
          "game":game,"click":result.get("clickResult"),
          "before":result.get("before"),
          "after":result.get("after"),
          "pageErrors":result["pageErrors"][:6],
          "consoleErrors":result["consoleErrors"][:6],
          "httpErrors":result["httpErrors"][:17],
          "navigations":result["navigations"][:8],
          "exception":result.get("exception"),
        },ensure_ascii=True),flush=True)
        ctx.close()

def main():
    with sync_playwright() as pw:
        browser=pw.chromium.launch(headless=True,args=[
          "--enable-webgl","--use-gl=angle","--use-angle=swiftshader",
          "--disable-dev-shm-usage"])
        try:
            for gid,label in GAMES:
                qa(gid,label,browser)
        finally:
            browser.close()

if __name__=="__main__":
    main()
