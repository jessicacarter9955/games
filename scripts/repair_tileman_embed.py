#!/usr/bin/env python3
"""Make TileMan's original local HTML embeddable in 2Night.

The real browser refuses Keyboard.lock() inside an iframe. This patch
explicitly disables that optional capture feature ONLY when embedded;
regular WASD/arrow event handling remains native. It does not bypass
authentication, inject players or claim gameplay was tested.

Also changes exactly three original-root image URLs to relative local URLs
if present in this exact HTML. Maintains a SHA-named original backup.
"""
from __future__ import annotations
import argparse
import hashlib
from pathlib import Path
import re
import os
import json

DL=Path.home()/"Downloads"
PATH=DL/"_chatgpt_new45_cdn_mirrors"/"io games"/"tileman"/"hosts"/"eu1.tileman.io"/"index.html"
BACKUPS=DL/"_2night_reskin_qa"/"repair-backups"
TAG='data-2night-embedded-keyboard-fallback="true"'
SCRIPT='''<script data-2night-embedded-keyboard-fallback="true">
(function () {
  if (window.top === window) return;
  var keyboard = navigator.keyboard;
  if (!keyboard || typeof keyboard.lock !== 'function') return;
  try {
    Object.defineProperty(keyboard, 'lock', {
      configurable: true,
      value: function () {
        // Browser security blocks key capture inside iframes. Do not
        // attempt to capture keys or make a fake keyboard lock.
        return Promise.resolve();
      }
    });
    console.info('[2Night] Keyboard capture disabled for embedded TileMan; normal key events remain');
  } catch (err) {
    console.warn('[2Night] Optional keyboard fallback unavailable', err);
  }
}());
</script>
'''

def run(apply:bool):
    raw=PATH.read_bytes()
    before=hashlib.sha256(raw).hexdigest()
    html=raw.decode("utf-8")
    if TAG in html:
        print(json.dumps({"status":"already_applied","sha256":before}))
        return
    html,count=re.subn(r'(<head\b[^>]*>)',lambda m:m.group(1)+"\n"+SCRIPT,
                       html,count=1,flags=re.I)
    if count!=1:raise RuntimeError("Missing unique <head> anchor")
    rewrites={}
    for filename in ("discord.png","re.png","loading.gif"):
        replacements=0
        for old,new in ((f'"/{filename}"',f'"./{filename}"'),
                        (f"'/"+filename+"'",f"'./{filename}'"),
                        (f"url(/{filename})",f"url(./{filename})")):
            replacements+=html.count(old)
            html=html.replace(old,new)
        rewrites[filename]=replacements
    data=html.encode("utf-8")
    report={"status":"dry_run","bytesBefore":len(raw),"bytesAfter":len(data),
            "shaBefore":before,"shaAfter":hashlib.sha256(data).hexdigest(),
            "relativeResourceRewrites":rewrites}
    if apply:
        BACKUPS.mkdir(parents=True,exist_ok=True)
        backup=BACKUPS/("tileman.index."+before[:16]+".original.html")
        if not backup.exists():backup.write_bytes(raw)
        elif hashlib.sha256(backup.read_bytes()).hexdigest()!=before:
            raise ValueError("Backup mismatch")
        tmp=PATH.with_name(PATH.name+".2night-part")
        try:
            tmp.write_bytes(data)
            os.replace(tmp,PATH)
        finally:
            if tmp.exists():tmp.unlink()
        report.update(status="patched",backup=str(backup))
    print(json.dumps(report),flush=True)

if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("--apply",action="store_true")
    args=p.parse_args()
    run(args.apply)
