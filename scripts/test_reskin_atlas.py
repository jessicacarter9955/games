#!/usr/bin/env python3
"""Browser check for non-destructive 1:1 Sparrow frame editing.

Playwright is optional and required only to execute this test.
"""
from __future__ import annotations

import functools
import http.server
import json
import struct
import tempfile
import threading
import zlib
from pathlib import Path


def png(w: int, h: int, pixel) -> bytes:
    def block(name: bytes, data: bytes) -> bytes:
        return (struct.pack(">I", len(data)) + name + data +
                struct.pack(">I", zlib.crc32(name + data) & 0xFFFFFFFF))

    rows = b"".join(b"\x00" + b"".join(bytes(pixel(x, y)) for x in range(w))
                    for y in range(h))
    return (b"\x89PNG\r\n\x1a\n" +
            block(b"IHDR", struct.pack(">IIBBBBB", w, h, 8, 6, 0, 0, 0)) +
            block(b"IDAT", zlib.compress(rows)) + block(b"IEND", b""))


def main() -> int:
    try:
        from playwright.sync_api import sync_playwright
    except ImportError as exc:
        print("SKIP: Playwright unavailable:", exc)
        return 2

    repo = Path(__file__).resolve().parents[1]
    with tempfile.TemporaryDirectory(prefix="2night-atlas-") as temp:
        root = Path(temp)
        atlas = root / "extracted" / "test"
        atlas.mkdir(parents=True)
        (atlas / "hero.png").write_bytes(png(8, 4, lambda x, y:
            (255, 0, 0, 255) if x < 4 else (0, 255, 0, 255)))
        (atlas / "hero.xml").write_text(
            '<TextureAtlas imagePath="hero.png">'
            '<SubTexture name="idle000" x="0" y="0" width="4" height="4"/>'
            '<SubTexture name="walk000" x="4" y="0" width="4" height="4"/>'
            '<SubTexture name="idle001" x="0" y="0" width="4" height="4"/>'
            '</TextureAtlas>', encoding="utf-8")
        lib = root / "reskinner"
        lib.mkdir()
        (lib / "atlas.js").write_bytes(
            (repo / "reskinner" / "atlas.js").read_bytes())
        (root / "index.html").write_text("<title>Atlas 1:1 Test</title>",
                                         encoding="utf-8")

        class Handler(http.server.SimpleHTTPRequestHandler):
            extensions_map = {
                **http.server.SimpleHTTPRequestHandler.extensions_map,
                ".js": "text/javascript; charset=utf-8",
                ".xml": "application/xml; charset=utf-8",
            }

            def log_message(self, *_args):
                pass

        server = http.server.ThreadingHTTPServer(
            ("127.0.0.1", 0),
            functools.partial(Handler, directory=str(root)))
        thread = threading.Thread(target=server.serve_forever, daemon=True)
        thread.start()
        try:
            with sync_playwright() as playwright:
                browser = playwright.chromium.launch(headless=True)
                page = browser.new_page()
                page.goto("http://127.0.0.1:" +
                          str(server.server_port), wait_until="load")
                result = page.evaluate("""async () => {
                  const mod = await import('/reskinner/atlas.js');
                  const asset = {
                    name:'hero.png',
                    url:'/extracted/test/hero.png',
                  };
                  const metadata = {
                    url:'/extracted/test/hero.xml',
                    extension:'.xml',
                  };
                  const frames=await mod.loadAtlasFrames(asset,metadata);
                  if(frames.length!==3) throw Error('Expected 3 frames');
                  const first=frames[0];
                  if(!first.shared.includes('idle001'))
                    throw Error('Shared rectangle undetected');
                  const replacement=document.createElement('canvas');
                  replacement.width=replacement.height=4;
                  replacement.getContext('2d').fillStyle='#0000ff';
                  replacement.getContext('2d').fillRect(0,0,4,4);
                  const blue=await new Promise(resolve=>
                    replacement.toBlob(resolve,'image/png'));
                  const file=new File([blue],'idle.png',{type:'image/png'});
                  const combined=await mod.patchAtlasFrame(asset,first,file);
                  const u=URL.createObjectURL(combined);
                  try {
                    const img=new Image();img.src=u;await img.decode();
                    const canvas=document.createElement('canvas');
                    canvas.width=8;canvas.height=4;
                    const ctx=canvas.getContext('2d');
                    ctx.drawImage(img,0,0);
                    const left=Array.from(ctx.getImageData(1,1,1,1).data);
                    const right=Array.from(ctx.getImageData(6,1,1,1).data);
                    return {frames:frames.length,shared:first.shared,
                      left,right,width:img.width,height:img.height};
                  }finally{URL.revokeObjectURL(u)}
                }""")
                assert result["left"] == [0, 0, 255, 255], result
                assert result["right"] == [0, 255, 0, 255], result
                assert result["width"] == 8 and result["height"] == 4
                print(json.dumps({"result": "PASS", **result}))
                browser.close()
        finally:
            server.shutdown()
            thread.join(timeout=3)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
