#!/usr/bin/env python3
"""Browser integration test: offline image replacement without changing game code.

Run from the repository root:
  python scripts/test_reskin_service_worker.py

Requires 'playwright' Python and installed Chromium. The fixture is synthetic;
it validates the same-origin interception layer, not 69 game playthroughs.
"""
import functools
import http.server
import json
import struct
import tempfile
import threading
import zlib
from pathlib import Path
from urllib.request import Request, urlopen


def png(rgb: tuple[int, int, int]) -> bytes:
    def part(name: bytes, data: bytes) -> bytes:
        return (struct.pack(">I", len(data)) + name + data +
                struct.pack(">I", zlib.crc32(name + data) & 0xFFFFFFFF))
    pixel = bytes([0, *rgb, 255])
    rows = b"".join(b"\0" + pixel * 4 for _ in range(4))
    return (b"\x89PNG\r\n\x1a\n" +
            part(b"IHDR", struct.pack(">IIBBBBB", 4, 4, 8, 6, 0, 0, 0)) +
            part(b"IDAT", zlib.compress(rows)) + part(b"IEND", b""))


def main() -> int:
    try:
        from playwright.sync_api import sync_playwright
    except ImportError as exc:
        print("SKIP: Playwright Python not installed:", exc)
        return 2

    root = Path(__file__).resolve().parents[1]
    worker = root / "2night-reskin-sw.js"
    if not worker.is_file():
        raise AssertionError("Missing root Service Worker " + str(worker))

    with tempfile.TemporaryDirectory(prefix="2night-sw-test-") as d:
        base = Path(d)
        (base / "2night-reskin-sw.js").write_bytes(worker.read_bytes())
        source = base / "extracted" / "test"
        source.mkdir(parents=True)
        (source / "marker.png").write_bytes(png((255, 0, 0)))
        (base / "index.html").write_text(
            "<!doctype html><title>2Night SW Test</title>"
            '<img id="sprite" src="/extracted/test/marker.png" width="4" height="4"/>',
            encoding="utf-8",
        )

        class Handler(http.server.SimpleHTTPRequestHandler):
            def log_message(self, *_args):
                pass

        handler = functools.partial(Handler, directory=str(base))
        server = http.server.ThreadingHTTPServer(("127.0.0.1", 0), handler)
        thread = threading.Thread(target=server.serve_forever, daemon=True)
        thread.start()

        try:
            url = f"http://127.0.0.1:{server.server_port}"
            with sync_playwright() as playwright:
                browser = playwright.chromium.launch(headless=True)
                page = browser.new_page()
                page.goto(url, wait_until="load")
                pixel = """async (suffix) => {
                  const img = new Image();
                  img.src = '/extracted/test/marker.png?' + suffix;
                  await img.decode();
                  const c = document.createElement('canvas');
                  c.width = c.height = 4;
                  c.getContext('2d').drawImage(img, 0, 0);
                  return Array.from(c.getContext('2d').getImageData(1,1,1,1).data);
                }"""
                initial = page.evaluate(pixel, "before")
                assert initial == [255, 0, 0, 255], f"Unexpected original: {initial}"
                page.evaluate("""async () => {
                    await navigator.serviceWorker.register('/2night-reskin-sw.js',
                      {scope:'/'});
                    await navigator.serviceWorker.ready;
                    if (!navigator.serviceWorker.controller) {
                      await new Promise((resolve,reject) => {
                        const timer=setTimeout(()=>reject(Error('SW not controlling')),7000);
                        navigator.serviceWorker.addEventListener('controllerchange',
                          () => {clearTimeout(timer);resolve()}, {once:true});
                      });
                    }
                  }""")
                # The exact record format used by reskinner/storage.js.
                page.evaluate("""async (buffer) => {
                  const db = await new Promise((resolve,reject) => {
                    const request=indexedDB.open('2night-multigame-drafts-v1',1);
                    request.onupgradeneeded=() => {
                      if(!request.result.objectStoreNames.contains('patches'))
                        request.result.createObjectStore('patches',{keyPath:'key'});
                    };
                    request.onsuccess=()=>resolve(request.result);
                    request.onerror=()=>reject(request.error);
                  });
                  const blob=new Blob([new Uint8Array(buffer)],{type:'image/png'});
                  await new Promise((resolve,reject)=>{
                    const tx=db.transaction('patches','readwrite');
                    tx.objectStore('patches').put({
                      key:'test:extracted/test/marker.png',gameId:'test',
                      assetPath:'extracted/test/marker.png',blob,
                    });
                    tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);
                  });
                  db.close();
                  const worker=navigator.serviceWorker.controller;
                  await new Promise((resolve,reject)=>{
                    const channel=new MessageChannel();
                    const timer=setTimeout(()=>reject(Error('SW invalidation timeout')),4000);
                    channel.port1.onmessage=()=>{clearTimeout(timer);resolve()};
                    worker.postMessage({type:'2NIGHT_PATCHES_CHANGED'},[channel.port2]);
                  });
                }""", list(png((0, 0, 255))))
                changed = page.evaluate(pixel, "patched")
                assert changed == [0, 0, 255, 255], f"Patch not intercepted: {changed}"
                response = page.request.get(url + "/extracted/test/marker.png")
                # Playwright request API is separate from the controlled client,
                # so the browser page is the source of truth for interception.
                assert response.ok
                print(json.dumps({
                    "result": "PASS",
                    "original": initial,
                    "patched": changed,
                    "scope": "/",
                    "crossEngine": "Any engine using same-origin image GET",
                }))
                browser.close()
        finally:
            server.shutdown()
            thread.join(timeout=2)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
