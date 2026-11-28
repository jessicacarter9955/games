#!/usr/bin/env python3
"""Export small, non-proprietary QA observations from local Playwright files.

Original game binaries, screenshots and request tokens never enter this output.
"""
from __future__ import annotations
import argparse
import json
import re
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlsplit

DEFAULT=Path.home()/"Downloads"/"_reskin_69_gameplay_qa_20261125"

def clean_url(value):
    if not value:return ""
    try:
        x=urlsplit(str(value))
        return x.scheme+"://"+str(x.hostname)+x.path
    except ValueError:
        return str(value).split("?")[0][:180]

def clean_error(value):
    text=str(value).split("?")[0]
    return re.sub(r"(?i)(token|api[_-]?key|authorization|password)=\S+",
                  "[REDACTED]",text)[:260]

def convert(x,network):
    steps=x.get("screenshots",[]) or []
    return {
        "schemaVersion":1,
        "id":x["id"],
        "title":x.get("title",x["id"]),
        "engine":x.get("engine"),
        "source":"Windows local Playwright",
        "networkMode":network,
        "testedAt":x.get("testedAt"),
        "stage":"post-Play gameplay evidence check",
        "result":x.get("status","qa-unknown"),
        "playActionVerified":bool(x.get("playActionVerified",False)),
        "playActions":[{"type":z.get("type"),"label":z.get("label"),
                        "x":z.get("x"),"y":z.get("y")} for z in
                       (x.get("playActions") or [])][:5],
        "gameplayVerified":False,
        "inspectorValidated":False,
        "entryKind":x.get("entryKind"),
        "evidence":{
           "screenshots":[{
               "file":z.get("file"),
               "sha256":z.get("sha256"),
               "metrics":z.get("metrics"),
               "method":z.get("method"),
               "status":z.get("status")} for z in steps],
           "playDiff":x.get("playDiff"),
           "inputDiff":x.get("inputDiff"),
           "visibleCanvasBefore":bool(any(
              c.get("visible") for c in
              x.get("bootDocument",{}).get("canvases",[]))),
           "visibleCanvasAfter":bool(any(
              c.get("visible") for c in
              x.get("playDocument",{}).get("canvases",[])))
        },
        "diagnostics":{
            "pageErrors":[clean_error(z) for z in
                          (x.get("pageErrors") or [])[:8]],
            "httpErrors":[{"code":z.get("code"),
                           "url":clean_url(z.get("url"))}
                          for z in (x.get("httpErrors") or [])[:8]],
            "externalRequestFailures":len(x.get("remoteBlocked",[]) or []),
            "qaError":clean_error(x["error"]) if x.get("error") else None,
            "urlAfterPlay":clean_url(x.get("navigatedUrlAfterPlay"))
        },
        "note":"This is a browser observation, not proof of true gameplay; screenshots remain private on Windows."
    }

def main():
    p=argparse.ArgumentParser()
    p.add_argument("--input",type=Path,default=DEFAULT)
    p.add_argument("--network-mode",default="strict-offline")
    p.add_argument("--output",type=Path,default=None)
    args=p.parse_args()
    records=[]
    for path in sorted(args.input.glob("*/result.json")):
        try:
            x=json.loads(path.read_text(encoding="utf-8"))
            records.append(convert(x,args.network_mode))
        except (OSError,ValueError,KeyError) as exc:
            print("SKIP",path.name,str(exc)[:130],flush=True)
    counts=Counter(x["result"] for x in records)
    payload={"schemaVersion":1,
             "generated":datetime.now(timezone.utc).isoformat(),
             "networkMode":args.network_mode,"total":len(records),
             "counts":dict(counts),"games":records}
    dest=args.output or args.input/"compact-results.json"
    dest.parent.mkdir(parents=True,exist_ok=True)
    dest.write_text(json.dumps(payload,ensure_ascii=False,
                               separators=(",",":"))+"\n",encoding="utf-8")
    print("EXPORTED",len(records),"bytes",dest.stat().st_size,
          "to",str(dest),flush=True)
    print("STATUS",json.dumps(dict(counts),ensure_ascii=False),flush=True)

if __name__=="__main__":main()
