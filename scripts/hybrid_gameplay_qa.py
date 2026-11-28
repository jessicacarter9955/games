#!/usr/bin/env python3
"""Hybrid Windows gameplay QA: raw Chrome CDP + optional native input + OpenCV.

This is intentionally independent of Playwright and Selenium. It drives a real
Chromium instance via the Chrome DevTools Protocol; never certifies a game merely
because its loading screen appeared. Run from the Windows mirror checkout:

    python scripts/hybrid_gameplay_qa.py --base http://127.0.0.1:8001 \
        --games cardsfouruno,carout,triviaguesstheiranswers,hexastack,iogamestileman

Optional: --native (send PyAutoGUI clicks ONLY if the correct window is focused),
          --headless (browser fallback, NOT equivalent to visible GPU validation).
Screenshot and JSON evidence stay local on the bridge machine.
"""
from __future__ import annotations

import argparse
import base64
import hashlib
import json
import os
from pathlib import Path
import shutil
import socket
import struct
import subprocess
import sys
import tempfile
import time
from urllib.request import Request, urlopen
from urllib.parse import quote, urlsplit


DEFAULT_GAMES = (
    "cardsfouruno",
    "carout",
    "triviaguesstheiranswers",
    "hexastack",
    "iogamestileman",
)
GAME_LABELS = {
    "cardsfouruno": "Foono",
    "carout": "Car Out",
    "triviaguesstheiranswers": "Guess Their Answer",
    "hexastack": "Hexastack",
    "iogamestileman": "TileMan.io",
}


class LocalWebSocket:
    """Tiny RFC 6455 client for localhost Chrome CDP; no pip dependency."""

    def __init__(self, uri: str):
        address = urlsplit(uri)
        if address.scheme != "ws" or address.hostname not in ("127.0.0.1", "localhost"):
            raise ValueError("Only local non-TLS CDP WebSocket endpoints allowed")
        self.client = None
        try:
            import websocket  # websocket-client: available on the Windows bridge
            self.client = websocket.create_connection(
                uri, timeout=9, suppress_origin=True)
            return
        except ImportError:
            pass
        self.socket = socket.create_connection((address.hostname, address.port), 9)
        self.socket.settimeout(9)
        self.buffer = b""
        key = base64.b64encode(os.urandom(16)).decode("ascii")
        request = (
            f"GET {address.path + ('?' + address.query if address.query else '')} HTTP/1.1\r\n"
            f"Host: {address.netloc}\r\n"
            "Upgrade: websocket\r\nConnection: Upgrade\r\n"
            f"Sec-WebSocket-Key: {key}\r\n"
            "Sec-WebSocket-Version: 13\r\n"
            "\r\n"
        )
        self.socket.sendall(request.encode("ascii"))
        data = b""
        while b"\r\n\r\n" not in data and len(data) < 16384:
            data += self.socket.recv(4096)
        header, separator, extra = data.partition(b"\r\n\r\n")
        if not separator or b" 101 " not in header.split(b"\r\n", 1)[0]:
            raise RuntimeError(f"Chrome rejected CDP handshake: {header[:350]!r}")
        self.buffer = extra
        expected = base64.b64encode(
            hashlib.sha1((key + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11").encode()).digest()
        )
        if b"sec-websocket-accept: " + expected.lower() not in header.lower():
            raise RuntimeError("Invalid WebSocket handshake")

    def _read(self, n: int) -> bytes:
        while len(self.buffer) < n:
            chunk = self.socket.recv(max(4096, n - len(self.buffer)))
            if not chunk:
                raise ConnectionError("Chrome CDP socket disconnected")
            self.buffer += chunk
        result, self.buffer = self.buffer[:n], self.buffer[n:]
        return result

    def send_frame(self, payload: bytes, opcode: int = 1) -> None:
        key = os.urandom(4)
        n = len(payload)
        header = bytearray([0x80 | opcode])
        if n < 126:
            header += bytes([0x80 | n])
        elif n < 65536:
            header += bytes([0x80 | 126]) + struct.pack("!H", n)
        else:
            header += bytes([0x80 | 127]) + struct.pack("!Q", n)
        masked = bytes(b ^ key[i % 4] for i, b in enumerate(payload))
        self.socket.sendall(bytes(header) + key + masked)

    def send_json(self, obj: dict) -> None:
        if self.client is not None:
            self.client.send(json.dumps(obj, separators=(",", ":")))
            return
        self.send_frame(json.dumps(obj, separators=(",", ":")).encode("utf-8"))

    def receive_json(self, timeout: float) -> dict:
        if self.client is not None:
            self.client.settimeout(max(0.05, timeout))
            return json.loads(self.client.recv())
        self.socket.settimeout(max(0.05, timeout))
        parts: list[bytes] = []
        while True:
            header = self._read(2)
            opcode = header[0] & 0x0F
            fin = bool(header[0] & 0x80)
            size = header[1] & 0x7F
            masked = bool(header[1] & 0x80)
            if size == 126:
                size = struct.unpack("!H", self._read(2))[0]
            elif size == 127:
                size = struct.unpack("!Q", self._read(8))[0]
            mask = self._read(4) if masked else b""
            payload = self._read(size)
            if masked:
                payload = bytes(b ^ mask[i % 4] for i, b in enumerate(payload))
            if opcode == 8:
                raise ConnectionError("Chrome closed CDP WebSocket")
            if opcode == 9:
                self.send_frame(payload, opcode=10)
                continue
            if opcode == 10:
                continue
            if opcode not in (0, 1, 2):
                continue
            parts.append(payload)
            if fin:
                return json.loads(b"".join(parts).decode("utf-8"))

    def close(self):
        if self.client is not None:
            self.client.close()
            return
        try:
            self.socket.close()
        except OSError:
            pass


class CDP:
    def __init__(self, websocket_url: str):
        self.ws = LocalWebSocket(websocket_url)
        self.serial = 0
        self.errors: list[str] = []
        self.http_errors: list[dict] = []
        self.navigation: list[str] = []

    def _event(self, msg: dict) -> None:
        method = msg.get("method", "")
        p = msg.get("params") or {}
        if method == "Runtime.exceptionThrown":
            detail = p.get("exceptionDetails") or {}
            message = (detail.get("exception") or {}).get("description") or detail.get("text", "")
            if len(self.errors) < 30:
                self.errors.append(str(message)[:350])
        elif method == "Network.responseReceived":
            response = p.get("response") or {}
            if response.get("status", 0) >= 400 and len(self.http_errors) < 70:
                self.http_errors.append({
                    "status": int(response["status"]),
                    "url": str(response.get("url", ""))[:280],
                    "type": str(p.get("type", "")),
                })
        elif method == "Page.frameNavigated":
            frame = p.get("frame") or {}
            url = str(frame.get("url", ""))
            if url and len(self.navigation) < 40:
                self.navigation.append(url[:300])

    def call(self, method: str, params: dict | None = None, timeout: float = 15) -> dict:
        self.serial += 1
        command_id = self.serial
        self.ws.send_json({"id": command_id, "method": method, "params": params or {}})
        deadline = time.monotonic() + timeout
        while time.monotonic() < deadline:
            message = self.ws.receive_json(deadline - time.monotonic())
            if message.get("id") == command_id:
                if "error" in message:
                    raise RuntimeError(f"CDP {method}: {message['error']}")
                return message.get("result") or {}
            if "method" in message:
                self._event(message)
        raise TimeoutError(f"CDP {method} timed out")

    def evaluate(self, expression: str, timeout: float = 12):
        data = self.call("Runtime.evaluate", {
            "expression": expression, "returnByValue": True, "awaitPromise": False,
        }, timeout=timeout)
        return (data.get("result") or {}).get("value")

    def screenshot(self, path: Path) -> bytes:
        result = self.call("Page.captureScreenshot", {
            "format": "jpeg", "quality": 78, "fromSurface": True,
            "captureBeyondViewport": False,
        }, timeout=20)
        data = base64.b64decode(result["data"])
        path.write_bytes(data)
        return data

    def click(self, x: float, y: float) -> None:
        params = {"x": round(x, 2), "y": round(y, 2), "button": "left", "clickCount": 1}
        self.call("Input.dispatchMouseEvent", {"type": "mouseMoved", "x": params["x"], "y": params["y"]})
        self.call("Input.dispatchMouseEvent", {**params, "type": "mousePressed"})
        self.call("Input.dispatchMouseEvent", {**params, "type": "mouseReleased"})

    def key(self, key: str) -> None:
        values = {
            "ArrowRight": ("ArrowRight", 39),
            "ArrowLeft": ("ArrowLeft", 37),
            "ArrowUp": ("ArrowUp", 38),
            "Space": ("Space", 32),
        }
        code, vk = values[key]
        params = {"key": " " if key == "Space" else key, "code": code,
                  "windowsVirtualKeyCode": vk, "nativeVirtualKeyCode": vk}
        self.call("Input.dispatchKeyEvent", {**params, "type": "rawKeyDown"})
        self.call("Input.dispatchKeyEvent", {**params, "type": "keyUp"})

    def close(self):
        self.ws.close()


STATE_SCRIPT = r"""(() => {
 const f = document.querySelector('#gameFrame');
 const r = f ? f.getBoundingClientRect() : null;
 const data = {topTitle: document.title, iframe: f?.src || '',
               frame: r ? {x:r.x, y:r.y, width:r.width, height:r.height}:null,
               buttons:[], canvases:[], text:'', gameVisible:false,
               frameTitle:'', frameURL:''};
 try {
   const w=f?.contentWindow, d=w?.document;
   data.frameURL=w?.location?.href || '';
   data.frameTitle=d?.title || '';
   data.text=(d?.body?.innerText || '').slice(0,900);
   if(d) {
     data.canvases=[...d.querySelectorAll('canvas')].map(c=>({
       width:c.width, height:c.height,
       visible:c.getBoundingClientRect().width>0,
     })).slice(0,8);
     const game=d.querySelector('#game');
     data.gameVisible=!!game && getComputedStyle(game).display!=='none';
     data.buttons=[...d.querySelectorAll('button,input[type=button],input[type=submit]')]
       .filter(b=>{const q=b.getBoundingClientRect();return q.width>1&&q.height>1})
       .map(b=>{const q=b.getBoundingClientRect();return {
         text:(b.innerText||b.value||b.id||'').trim().slice(0,90),
         x:r.x+q.x,y:r.y+q.y,width:q.width,height:q.height,
       }}).slice(0,50);
   }
 } catch(err) { data.domError=String(err).slice(0,180); }
 return data;
})()"""


def chrome_path() -> str:
    candidates = [
        os.environ.get("CHROME_PATH", ""),
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
        r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
        r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
    ]
    for candidate in candidates:
        if candidate and Path(candidate).is_file():
            return candidate
    for command in ("chrome", "msedge", "chromium", "chromium-browser", "google-chrome"):
        path = shutil.which(command)
        if path:
            return path
    raise FileNotFoundError("Chrome/Edge not found; set CHROME_PATH")


def free_port() -> int:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
        sock.bind(("127.0.0.1", 0))
        return sock.getsockname()[1]


def launch_debugger(browser: str, port: int, profile: Path, headless: bool) -> subprocess.Popen:
    args = [
        browser, f"--remote-debugging-port={port}", "--remote-debugging-address=127.0.0.1",
        "--remote-allow-origins=*", f"--user-data-dir={profile}", "--no-first-run",
        "--no-default-browser-check", "--window-size=1360,880",
        "--window-position=0,0", "--disable-extensions",
        "--enable-webgl", "--use-gl=angle", "--use-angle=default",
    ]
    if headless:
        args.append("--headless=new")
    args.append("about:blank")
    return subprocess.Popen(args, stdout=subprocess.DEVNULL,
                            stderr=subprocess.DEVNULL)


def debugger_target(port: int, timeout: float = 17) -> str:
    end = time.monotonic() + timeout
    while time.monotonic() < end:
        try:
            with urlopen(f"http://127.0.0.1:{port}/json/list", timeout=2) as r:
                pages = json.load(r)
            target = next((p for p in pages if p.get("type") == "page"
                           and p.get("webSocketDebuggerUrl")), None)
            if target:
                return target["webSocketDebuggerUrl"]
            request = Request(f"http://127.0.0.1:{port}/json/new?about:blank",
                              method="PUT")
            with urlopen(request, timeout=2) as r:
                return json.load(r)["webSocketDebuggerUrl"]
        except (OSError, ValueError, KeyError):
            time.sleep(0.3)
    raise TimeoutError(f"CDP did not become available on port {port}")


def native_click_if_safe(x: float, y: float, enabled: bool) -> bool:
    """Never move the user's cursor unless the Reskinner window has focus."""
    if not enabled or os.name != "nt":
        return False
    try:
        import ctypes
        import pyautogui
        h = ctypes.windll.user32.GetForegroundWindow()
        buf = ctypes.create_unicode_buffer(512)
        ctypes.windll.user32.GetWindowTextW(h, buf, 512)
        title = buf.value.lower()
        if not ("2night" in title or "reskinner" in title):
            return False
        # CDP coordinates are viewport-relative. Only use native input if the
        # browser viewport is aligned with the screen (explicit opt-in).
        if not os.getenv("QA_NATIVE_VIEWPORT_X") or not os.getenv("QA_NATIVE_VIEWPORT_Y"):
            return False
        sx = int(os.environ["QA_NATIVE_VIEWPORT_X"]) + round(x)
        sy = int(os.environ["QA_NATIVE_VIEWPORT_Y"]) + round(y)
        screen = pyautogui.size()
        if not (0 <= sx < screen.width and 0 <= sy < screen.height):
            return False
        pyautogui.click(sx, sy)
        return True
    except (ImportError, OSError, ValueError, RuntimeError):
        return False


def find_action(state: dict, game: str, phase: int) -> dict:
    labels = {
        "cardsfouruno": ["Play Bots", "Play Online", "Draw", "Skip", "Continue"],
        "iogamestileman": ["Play!", "Play", "Continue"],
        "hexastack": ["Play", "Start", "Continue", "Next"],
        "carout": ["Play", "Start", "Continue", "Next"],
        "triviaguesstheiranswers": ["Play", "Start", "Continue", "Next"],
    }
    if phase == 0:
        for wanted in labels.get(game, []):
            for button in state.get("buttons") or []:
                if button["text"].lower() == wanted.lower():
                    return {"kind": "click", "x": button["x"] + button["width"]/2,
                            "y": button["y"] + button["height"]/2, "target": wanted}
    # Later phases use real gameplay input on the game viewport.
    # Do not call this proof of gameplay unless images and game state confirm it.
    frame = state.get("frame") or {}
    if frame.get("width", 0) > 120 and frame.get("height", 0) > 120:
        offsets = [(0.50, 0.55), (0.42, 0.65), (0.60, 0.54)]
        px, py = offsets[min(phase, len(offsets)-1)]
        return {"kind": "click", "x": frame["x"]+frame["width"]*px,
                "y": frame["y"]+frame["height"]*py, "target": "viewport probe"}
    return {"kind": "none", "target": "No usable visible target"}


def image_metrics(before: Path, after: Path, rect: dict | None) -> dict:
    """Compare *only* game pixels, not the Reskinner sidebar/UI."""
    try:
        import cv2
        import numpy as np
        a = cv2.imread(str(before), cv2.IMREAD_COLOR)
        b = cv2.imread(str(after), cv2.IMREAD_COLOR)
        if a is None or b is None or a.shape != b.shape:
            raise ValueError("Screenshots missing or different sizes")
        if rect:
            x = max(0, int(rect.get("x", 0)))
            y = max(0, int(rect.get("y", 0)))
            x2 = min(a.shape[1], x+int(rect.get("width", 0)))
            y2 = min(a.shape[0], y+int(rect.get("height", 0)))
            if x2>x+30 and y2>y+30:
                a,b=a[y:y2,x:x2],b[y:y2,x:x2]
        diff=cv2.absdiff(a,b)
        gray=cv2.cvtColor(b,cv2.COLOR_BGR2GRAY)
        edge=cv2.Canny(gray,70,150)
        return {
            "engine":"opencv", "mean_delta":round(float(diff.mean()),3),
            "changed_fraction":round(float(np.mean(np.max(diff,axis=2)>25)),5),
            "variance":round(float(gray.var()),2),
            "edge_fraction":round(float(np.count_nonzero(edge)/edge.size),5),
            "blank_likely":bool(gray.var()<90 and np.mean(edge>0)<0.003),
        }
    except (ImportError, ValueError, OSError):
        try:
            from PIL import Image,ImageChops,ImageStat
            a=Image.open(before).convert("RGB")
            b=Image.open(after).convert("RGB")
            if a.size != b.size:
                raise ValueError("Image dimensions changed")
            if rect:
                x=max(0,int(rect.get("x",0)))
                y=max(0,int(rect.get("y",0)))
                w=int(rect.get("width",0));h=int(rect.get("height",0))
                if w>40 and h>40:
                    crop=(x,y,min(a.width,x+w),min(a.height,y+h))
                    a,b=a.crop(crop),b.crop(crop)
            d=ImageChops.difference(a,b)
            means=ImageStat.Stat(d).mean
            variance=sum(ImageStat.Stat(b).var)/3
            return {"engine":"pillow-fallback","mean_delta":round(sum(means)/3,3),
                    "variance":round(variance,2),"blank_likely":variance<90}
        except (ImportError, OSError, ValueError) as ex:
            return {"engine":"unavailable","error":str(ex)[:200]}


def snapshot(cdp: CDP, out: Path, stage: str) -> tuple[dict, Path]:
    state=cdp.evaluate(STATE_SCRIPT)
    if not isinstance(state,dict):
        state={"stateError":"CDP returned no DOM state"}
    path=out/(stage+".jpg")
    screenshot=cdp.screenshot(path)
    return {**state,"screenshot":path.name,
            "sha256":hashlib.sha256(screenshot).hexdigest(),
            "bytes":len(screenshot)},path


def game_url(base: str, game: str) -> str:
    """Each title must load a fresh document, not only change a #game hash."""
    return (base.rstrip("/")+"/reskinner/?night_qa="+quote(game)+
            "#game="+quote(game))


def game_test(cdp: CDP, base: str, game: str, output: Path,
              native: bool, initial_wait: float) -> dict:
    out=output/game
    out.mkdir(parents=True,exist_ok=True)
    cdp.errors.clear()
    cdp.http_errors.clear()
    cdp.navigation.clear()
    result={"id":game,"title":GAME_LABELS.get(game,game),
            "gameplayVerified":False,"status":"unverified",
            "inputs":[],"images":[]}
    # The Reskinner reads #game only during boot. A hash-only navigation
    # would leave the previous title selected; vary the query to force a
    # complete document load for each distinct game.
    address=game_url(base,game)
    try:
        cdp.call("Page.navigate",{"url":address},timeout=16)
        time.sleep(initial_wait)
        initial,img=snapshot(cdp,out,"before")
        result["images"].append(initial)
        result["selection_ok"] = (
            "/local-mirror/"+game+"/" in initial.get("iframe","")
            or (initial.get("iframe","").endswith("/"+game))
        )
        if not result["selection_ok"]:
            result["status"]="catalog-or-selection-blocked"
            return result
        prior=initial
        prior_image=img
        for phase in range(3):
            target=find_action(prior,game,phase)
            if game=="iogamestileman" and phase>=1:
                cdp.key("ArrowRight" if phase==1 else "ArrowUp")
                target={"kind":"key","target":"ArrowRight" if phase==1 else "ArrowUp"}
            elif target["kind"]=="click":
                target["native"]=native_click_if_safe(
                    target["x"],target["y"],native)
                if not target["native"]:
                    cdp.click(target["x"],target["y"])
            result["inputs"].append(target)
            time.sleep(7 if phase==0 else 3.5)
            state,frame=snapshot(cdp,out,f"after_input_{phase+1}")
            state["visual_delta"]=image_metrics(prior_image,frame,prior.get("frame"))
            result["images"].append(state)
            prior,prior_image=state,frame
        all_text=" ".join(x.get("text","") for x in result["images"]).lower()
        bad_page = ("error code: 404" in all_text or
                    "file not found" in all_text or
                    "error response" in all_text)
        changes=[s.get("visual_delta",{}) for s in result["images"][1:]]
        changed=sum(d.get("mean_delta",0)>2 and not d.get("blank_likely",True)
                    for d in changes)
        result["status"]=(
            "broken-navigation" if bad_page else
            "gameplay-candidate-needs-visual-review"
            if changed>=2 and len(result["inputs"])>=3 else
            "partial-or-blocked"
        )
        result["visual_changes"]=changed
    except Exception as exc:
        result["status"]="qa-error"
        result["qaError"]=repr(exc)[:700]
    finally:
        result["errors"]=cdp.errors[:]
        result["httpErrors"]=cdp.http_errors[:]
        result["navigations"]=cdp.navigation[:]
        (out/"result.json").write_text(
            json.dumps(result,ensure_ascii=False,indent=2),encoding="utf-8")
    return result


def main() -> int:
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--base",default="http://127.0.0.1:8001")
    parser.add_argument("--games",default=",".join(DEFAULT_GAMES))
    parser.add_argument("--output",default=None)
    parser.add_argument("--headless",action="store_true")
    parser.add_argument("--native",action="store_true")
    parser.add_argument("--wait",type=float,default=8)
    parser.add_argument("--port",type=int,default=0)
    parser.add_argument("--browser",default=None)
    args=parser.parse_args()
    games=[g.strip() for g in args.games.split(",") if g.strip()]
    out=Path(args.output or (Path.home()/"Downloads"/"_2night_hybrid_qa"))
    out.mkdir(parents=True,exist_ok=True)
    browser=args.browser or chrome_path()
    port=args.port or free_port()
    process=None
    try:
        with tempfile.TemporaryDirectory(
                prefix="2night-cdp-", ignore_cleanup_errors=True) as profile:
            process=launch_debugger(browser,port,Path(profile),args.headless)
            endpoint=debugger_target(port)
            cdp=CDP(endpoint)
            try:
                cdp.call("Page.enable")
                cdp.call("Runtime.enable")
                cdp.call("Network.enable")
                cdp.call("Emulation.setDeviceMetricsOverride",{
                    "width":1360,"height":850,"deviceScaleFactor":1,"mobile":False,
                })
                results=[]
                for game in games:
                    t=time.monotonic()
                    entry=game_test(cdp,args.base,game,out,args.native,args.wait)
                    entry["seconds"]=round(time.monotonic()-t,1)
                    entry["browserMode"]="headless" if args.headless else "visible-windows"
                    print("HYBRID_GAME",json.dumps(entry,ensure_ascii=True),flush=True)
                    results.append(entry)
                summary={"runner":"raw-cdp-pyautogui-opencv",
                         "browserMode":"headless" if args.headless else "visible-windows",
                         "results":[{"id":r["id"],"status":r["status"],
                                     "visualChanges":r.get("visual_changes",0)}
                                    for r in results],
                         "certifiedGreen":sum(bool(r.get("gameplayVerified")) for r in results),
                         "note":"Candidates require visual gameplay review; never auto-green menus."}
                (out/"summary.json").write_text(json.dumps(
                    summary,ensure_ascii=False,indent=2),encoding="utf-8")
                print("HYBRID_SUMMARY",json.dumps(summary,ensure_ascii=True),flush=True)
            finally:
                cdp.close()
    finally:
        if process:
            process.terminate()
            try:process.wait(timeout=8)
            except subprocess.TimeoutExpired:process.kill()
    return 0


if __name__=="__main__":
    raise SystemExit(main())
