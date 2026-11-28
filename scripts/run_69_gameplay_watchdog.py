#!/usr/bin/env python3
"""Independent, time-bounded Playwright QA processes for all 69 games.

One game may hang in WebGL, but cannot stop the other 68. Result files and
screenshots remain local Windows; separate JSON summaries may be committed.
"""
from __future__ import annotations
import argparse
import json
import os
import shutil
import subprocess
import sys
import urllib.request
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]
RESULTS=Path.home()/"Downloads"/"_reskin_69_gameplay_qa_20261125"
RUNNER=ROOT/"scripts"/"test_69_gameplay.py"

def stamp():
    return datetime.now(timezone.utc).isoformat()

def store(path,content):
    path.parent.mkdir(parents=True,exist_ok=True)
    tmp=path.with_suffix(".tmp")
    tmp.write_text(json.dumps(content,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    tmp.replace(path)

def main():
    p=argparse.ArgumentParser()
    p.add_argument("--base",default="http://127.0.0.1:8001")
    p.add_argument("--seconds",type=float,default=3.2)
    p.add_argument("--max-game-seconds",type=int,default=75)
    p.add_argument("--game",action="append",default=[])
    p.add_argument("--skip-existing",action="store_true")
    p.add_argument("--allow-remote",action="store_true")
    p.add_argument("--output-dir",type=Path,default=None)
    a=p.parse_args()
    with urllib.request.urlopen(a.base+"/reskinner/catalog.json",timeout=40) as r:
        catalog=json.load(r)
    targets=[g for g in catalog["games"] if not a.game or g["id"] in a.game]
    if len(targets)==0:raise SystemExit("No games selected")
    global RESULTS
    if a.output_dir:
        RESULTS=a.output_dir
    elif a.allow_remote:
        RESULTS=Path.home()/"Downloads"/"_reskin_69_gameplay_qa_online_20261125"
    RESULTS.mkdir(parents=True,exist_ok=True)
    counts=Counter()
    print("START",len(targets),"of",catalog["total"],flush=True)
    for i,game in enumerate(targets,1):
        gid=game["id"]
        path=RESULTS/gid/"result.json"
        if path.exists() and a.skip_existing:
            old=json.loads(path.read_text(encoding="utf-8"))
            counts[old["status"]]+=1
            print("SKIP",i,len(targets),gid,old["status"],flush=True)
            continue
        if path.exists():
            prev=path.with_name("result.pre-retest.json")
            if not prev.exists():shutil.copy2(path,prev)
        cmd=[sys.executable,"-u","-B",str(RUNNER),
             "--base",a.base,"--game",gid,"--seconds",str(a.seconds)]
        if a.allow_remote:
            cmd.append("--allow-remote")
        status="unknown"
        try:
            proc=subprocess.run(cmd,cwd=ROOT,
                                env={**os.environ,"RESKIN_QA_REPORT_DIR":str(RESULTS)},
                                capture_output=True,text=True,
                                timeout=a.max_game_seconds,
                                errors="replace")
            if proc.returncode!=0:
                status="qa-process-error"
            elif path.exists():
                outcome=json.loads(path.read_text(encoding="utf-8"))
                status=outcome.get("status","qa-unknown")
            else:
                status="qa-missing-result"
            output=(proc.stdout+"\n"+proc.stderr)[-1200:]
        except subprocess.TimeoutExpired:
            status="qa-timeout"
            output="Per-game watchdog stopped browser process after "+str(
                a.max_game_seconds)+" seconds"
        except Exception as exc:
            status="qa-watchdog-error"
            output=str(exc)[:700]
        if status.startswith("qa-") and status!="qa-error" and (
                not path.exists() or status in
                ("qa-timeout","qa-process-error","qa-missing-result")):
            store(path,{"schemaVersion":1,"id":gid,
                        "title":game["title"],"engine":game["engine"],
                        "entry":game.get("entry"),"status":status,
                        "gameplayVerified":False,"testedAt":stamp(),
                        "error":output})
        counts[status]+=1
        print("QA",i,len(targets),gid,status,
              "log="+output.replace("\n"," ")[:400],flush=True)
        store(RESULTS/"watchdog-summary.json",{
              "timestamp":stamp(),"total":catalog["total"],
              "tested":sum(counts.values()),"counts":dict(counts),
              "networkMode":"remote-enabled" if a.allow_remote else "strict-offline",
              "lastGame":gid,"resultsDirectory":str(RESULTS),
              "certifiedGameplay":0,
              "note":"No automatic visual heuristic may certify gameplay"})
    print("COMPLETE",sum(counts.values()),
          json.dumps(dict(counts),ensure_ascii=False),flush=True)

if __name__=="__main__":main()
