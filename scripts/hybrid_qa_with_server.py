#!/usr/bin/env python3
"""Run an isolated, freshly synced mirror server and the hybrid gameplay QA.

One Windows-bridge job starts the server as a child process, validates its
catalog, invokes Chrome CDP/OpenCV QA, and shuts its server down at the end.
The user's primary 8001 previewer and any other QA workers are untouched.
"""
from __future__ import annotations

import argparse
import json
from pathlib import Path
import subprocess
import sys
import time
from urllib.request import urlopen


def wait_for_catalog(port: int, timeout: float = 40) -> dict:
    deadline = time.monotonic() + timeout
    while time.monotonic() < deadline:
        try:
            with urlopen(
                f"http://127.0.0.1:{port}/reskinner/catalog.json",
                timeout=2
            ) as response:
                data = json.load(response)
            if isinstance(data.get("games"), list) and data.get("total", 0) > 0:
                return {"total":data["total"], "games":len(data["games"])}
        except (OSError, ValueError):
            time.sleep(0.35)
    raise TimeoutError(f"Mirror server on port {port} did not start correctly")


def main() -> int:
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--port",type=int,default=8004)
    parser.add_argument("--games",default=(
        "cardsfouruno,carout,triviaguesstheiranswers,hexastack,iogamestileman"))
    parser.add_argument("--wait",type=float,default=9)
    parser.add_argument("--output",default=None)
    parser.add_argument("--headless",action="store_true")
    parser.add_argument("--native",action="store_true")
    args=parser.parse_args()
    if not 1024 <= args.port < 65536:
        parser.error("--port must be an unprivileged TCP port")
    directory=Path(__file__).resolve().parent
    server_script=directory/"serve_local_mirrors.py"
    runner_script=directory/"hybrid_gameplay_qa.py"
    for path in (server_script,runner_script):
        if not path.is_file():
            raise FileNotFoundError(path)
    output=Path(args.output or (Path.home()/"Downloads"/"_2night_hybrid_qa"))
    output.mkdir(parents=True,exist_ok=True)
    log=output/f"server-{args.port}.log"
    with log.open("ab") as stream:
        server=subprocess.Popen([sys.executable,"-u","-B",str(server_script),
                                 "--port",str(args.port)],
                                stdout=stream,stderr=subprocess.STDOUT)
        try:
            state=wait_for_catalog(args.port)
            print("HYBRID_SERVER_READY",json.dumps({
                "port":args.port, **state, "log":str(log)}),flush=True)
            cmd=[sys.executable,"-u","-B",str(runner_script),
                 "--base",f"http://127.0.0.1:{args.port}",
                 "--games",args.games,"--wait",str(args.wait),
                 "--output",str(output)]
            if args.headless: cmd.append("--headless")
            if args.native: cmd.append("--native")
            result=subprocess.run(cmd,timeout=900,check=False)
            print("HYBRID_RUN_FINISHED",json.dumps({
                "returncode":result.returncode,
                "summary":str(output/"summary.json")}),flush=True)
            return result.returncode
        finally:
            server.terminate()
            try:server.wait(timeout=8)
            except subprocess.TimeoutExpired:
                server.kill()
                server.wait(timeout=8)


if __name__=="__main__":
    raise SystemExit(main())
