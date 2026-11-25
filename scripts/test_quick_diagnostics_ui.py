#!/usr/bin/env python3
"""Browser integration check for the Reskinner's no-F12 diagnostic controls.

Uses Playwright only to TEST the UI (not for gameplay certification). A virtual
screen stream is injected for the screenshot test because unattended Windows
agents cannot interact with Chrome's real display-sharing chooser.
"""
from __future__ import annotations

import argparse
import json
from pathlib import Path
import tempfile
from playwright.sync_api import sync_playwright


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--base", default="http://127.0.0.1:8001")
    parser.add_argument("--game", default="cardsfouruno")
    args = parser.parse_args()
    url=args.base.rstrip("/")+"/reskinner/#game="+args.game
    with sync_playwright() as pw, tempfile.TemporaryDirectory(prefix="2night-ui-diag-") as tmp:
        browser=pw.chromium.launch(headless=True,
            args=["--enable-webgl","--use-gl=angle","--use-angle=swiftshader"])
        context=browser.new_context(accept_downloads=True)
        context.grant_permissions(["clipboard-read", "clipboard-write"],origin=args.base)
        context.add_init_script("""
        if(navigator.mediaDevices) {
          navigator.mediaDevices.getDisplayMedia=async () => {
            const canvas=document.createElement('canvas');
            canvas.width=640;canvas.height=360;
            const ctx=canvas.getContext('2d');
            const render=()=>{
              ctx.fillStyle='#0f2941';ctx.fillRect(0,0,640,360);
              ctx.fillStyle='#9fd3ff';ctx.fillRect(100,60,300,220);
              ctx.fillStyle='#060f19';ctx.font='28px sans-serif';
              ctx.fillText('2Night screenshot QA',112,180);
            };
            render();
            const timer=setInterval(render,75);
            const stream=canvas.captureStream(12);
            stream.getTracks()[0].addEventListener('ended',()=>clearInterval(timer));
            return stream;
          };
        }
        """)
        page=context.new_page()
        print("UI_DIAG_OPEN",url,flush=True)
        page.goto(url,wait_until="domcontentloaded",timeout=30000)
        page.locator("#copyDiagnostics").wait_for(state="visible",timeout=20000)
        page.locator("#captureScreenshot").wait_for(state="visible",timeout=20000)
        page.wait_for_function("!!document.querySelector('#gameFrame')?.src",timeout=25000)
        page.wait_for_timeout(1500)
        # These error events are emitted inside the real, same-origin game
        # iframe (including a 404 iframe if the game has broken navigation).
        emitted=page.evaluate("""() => {
          const frame=document.querySelector('#gameFrame');
          try {
            frame.contentWindow.console.error('DIAG_SENTINEL_COPY_BUTTON_1234');
            frame.contentWindow.console.error('DIAG_SENTINEL_COPY_BUTTON_1234');
            const img=frame.contentDocument.createElement('img');
            img.src='/missing_qa_diagnostic_image_1234.png';
            frame.contentDocument.body.appendChild(img);
            return {success:true,title:frame.contentDocument.title,src:frame.src};
          }catch(e){return {success:false,error:String(e)};}
        }""")
        page.wait_for_timeout(800)
        page.locator("#copyDiagnostics").click()
        page.wait_for_timeout(250)
        copied=page.evaluate("navigator.clipboard.readText()")
        data=json.loads(copied)
        assert data["game"]["id"]==args.game,data["game"]
        assert data["type"]=="2Night Reskinner diagnostic report"
        assert any("DIAG_SENTINEL_COPY_BUTTON_1234" in e.get("message","")
                   for e in data["capturedErrors"]),data["capturedErrors"]
        assert any("missing_qa_diagnostic_image_1234" in e.get("message","")
                   for e in data["capturedErrors"]),data["capturedErrors"]
        sentinel=[e for e in data["capturedErrors"]
                  if "DIAG_SENTINEL_COPY_BUTTON_1234" in e.get("message","")]
        assert len(sentinel)==1 and sentinel[0].get("occurrences",0)>=2,sentinel
        # Compact diagnostic controls must live below gameplay, never
        # over an interactive WebGL/Canvas scene.
        stage=page.locator("#gameStage").bounding_box()
        panel=page.locator("#quickDiagnostics").bounding_box()
        assert stage and panel and panel["y"] >= stage["y"]+stage["height"]-3,(stage,panel)
        print("DIAGNOSTIC_REPORT_OK",json.dumps({
            "game":data["game"],"errorCount":len(data["capturedErrors"]),
            "iframe":emitted,"copy":True},ensure_ascii=True),flush=True)
        with page.expect_download(timeout=22000) as dl:
            page.locator("#captureScreenshot").click()
        download=dl.value
        target=Path(tmp)/download.suggested_filename
        download.save_as(target)
        raw=target.read_bytes()
        assert raw.startswith(b"\x89PNG\r\n\x1a\n"),"Not a PNG"
        assert len(raw)>1500,"PNG looks empty"
        status=page.locator("#diagFeedback").inner_text()
        assert "screenshot" in status.lower() or "png" in status.lower(),status
        print("SCREENSHOT_BUTTON_OK",json.dumps({
            "file":download.suggested_filename,"bytes":len(raw),
            "status":status}),flush=True)
        page.set_viewport_size({"width":390,"height":780})
        panel=page.locator("#quickDiagnostics").bounding_box()
        assert panel and panel["x"]>=-1 and panel["x"]+panel["width"]<=391,panel
        print("DIAGNOSTIC_LAYOUT_MOBILE_OK",json.dumps(panel),flush=True)
        browser.close()
    print("QUICK_DIAGNOSTICS_PASS",flush=True)
    return 0


if __name__=="__main__":
    raise SystemExit(main())
