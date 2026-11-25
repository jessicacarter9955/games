#!/usr/bin/env python3
"""Generate local-only Unity WebGL bootstraps from verified mirrored build files.

This never changes the original captured files and never uploads game assets.
Builds may still depend on SDK, backends or unavailable resources.
"""
from __future__ import annotations

import argparse
import html
import json
import re
from collections import defaultdict
from pathlib import Path
from urllib.parse import quote

from serve_local_mirrors import REPO, build_index


BOOTSTRAP = "_reskin_local_bootstrap/index.html"


def asset_url(game_id: str, root: Path, path: Path) -> str:
    relative = path.relative_to(root).as_posix()
    return "/local-mirror/" + quote(game_id + "/" + relative, safe="/-._~")


def select_build(root: Path) -> dict[str, Path] | None:
    """Match a loader and its three Unity WebGL core files in ONE Build directory."""
    groups: dict[Path, list[Path]] = defaultdict(list)
    for file in root.rglob("*"):
        if file.is_file() and not file.is_symlink():
            filename = file.name.lower()
            if (filename.endswith(".loader.js") or
                    filename.endswith((".data.br", ".framework.js.br",
                                       ".wasm.br", ".data.gz",
                                       ".framework.js.gz", ".wasm.gz"))):
                groups[file.parent].append(file)

    choices: list[tuple[int, dict[str, Path]]] = []
    def first(files: list[Path], suffix: str) -> Path | None:
        candidates = [p for p in files if p.name.lower().endswith(suffix)]
        # ASTC and reduced-memory variants are not the generic desktop build.
        candidates.sort(key=lambda p: (
            int(any(s in p.name.lower()
                    for s in ("astc", "max_512", "max_1024", "max512", "max1024"))),
            len(p.name), p.name.lower()))
        return candidates[0] if candidates else None

    for folder, files in groups.items():
        for compression in ("br", "gz"):
            selected = {
                "loader": first(files, ".loader.js"),
                "data": first(files, ".data." + compression),
                "framework": first(files, ".framework.js." + compression),
                "code": first(files, ".wasm." + compression),
            }
            if all(selected.values()):
                # Prefer a complete Brotli build; actual paths are preserved.
                choices.append((
                    (0 if compression == "br" else 1) * 10
                    + len(folder.parts),
                    selected))
    if not choices:
        return None
    choices.sort(key=lambda item: item[0])
    return choices[0][1]


def make_html(game_id: str, title: str, root: Path,
              files: dict[str, Path]) -> str:
    urls = {name: asset_url(game_id, root, path)
            for name, path in files.items()}
    # Relative external StreamingAssets can be absent; do not claim completeness.
    urls["streaming"] = asset_url(
        game_id, root, files["data"].parent / "StreamingAssets")
    cfg = json.dumps({
        "loaderUrl": urls["loader"],
        "dataUrl": urls["data"],
        "frameworkUrl": urls["framework"],
        "codeUrl": urls["code"],
        "streamingAssetsUrl": urls["streaming"],
        "companyName": "Local mirror",
        "productName": title,
        "productVersion": "captured",
    }, ensure_ascii=True).replace("</", "<\\/")
    title_html = html.escape(title, quote=True)
    return """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Local Unity preview - """ + title_html + """</title>
<style>
html,body{width:100%;height:100%;margin:0;background:#111;color:#fff;
 font:14px system-ui,sans-serif}
#unity-canvas{width:100%;height:100%;display:block}
#unity-status{position:fixed;top:12px;left:12px;right:12px;
 background:#181818dd;padding:9px 12px;border-radius:7px;
 pointer-events:none;max-height:30%;overflow:hidden}
#unity-status.error{background:#651b1bf2;pointer-events:auto}
</style>
</head>
<body>
<canvas id="unity-canvas" tabindex="0"></canvas>
<div id="unity-status" role="status">Initializing local Unity WebGL build...</div>
<script>
"use strict";
const source = """ + cfg + """;
const status = document.getElementById("unity-status");
const canvas = document.getElementById("unity-canvas");
let lastProgress = -1;
function report(message, error=false) {
 status.textContent=message;
 status.classList.toggle("error",error);
 console[error?"error":"info"]("[Local Unity bootstrap]",message);
}
const script=document.createElement("script");
script.src=source.loaderUrl;
script.onerror=()=>report("Unity loader missing or unreadable: "+script.src,true);
script.onload=()=>{
 if(typeof window.createUnityInstance!=="function"){
  report("Loader loaded but createUnityInstance is not exposed.",true);
  return;
 }
 const {loaderUrl, ...config}=source;
 report("Loading Unity build...");
 window.createUnityInstance(canvas,config,(progress)=>{
  const percent=Math.round(progress*100);
  if(percent!==lastProgress){
   report("Loading local Unity assets: "+percent+"%");
   lastProgress=percent;
  }
 }).then(instance=>{
  window.unityGameInstance=instance;
  status.style.display="none";
  console.info("[Local Unity bootstrap] Runtime initialized");
 }).catch(error=>report(
  "Unity failed: "+String(error?.message||error),true));
};
document.head.appendChild(script);
</script>
</body></html>
"""


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--downloads", type=Path,
                        default=Path.home() / "Downloads")
    parser.add_argument("--game", action="append", default=[])
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()
    catalog, roots = build_index(args.downloads, REPO)
    allowed = set(args.game)
    results = []
    for game in catalog["games"]:
        if allowed and game["id"] not in allowed:
            continue
        if game.get("engine") != "unity":
            continue
        root = roots.get(game["id"])
        if not root:
            results.append({"id": game["id"], "status": "no_mirror"})
            continue
        files = select_build(root)
        if not files:
            results.append({"id": game["id"], "status": "incomplete_build"})
            continue
        target = root / BOOTSTRAP
        content = make_html(game["id"], game["title"], root, files)
        previous = target.read_text(encoding="utf-8") if target.exists() else None
        if previous == content:
            status = "unchanged"
        elif args.dry_run:
            status = "would_generate"
        else:
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_text(content, encoding="utf-8")
            status = "generated"
        results.append({"id": game["id"], "status": status,
                        "loader": files["loader"].name,
                        "data": files["data"].name,
                        "wasm": files["code"].name})
    print(json.dumps({"games": len(results), "results": results},
                     indent=2, ensure_ascii=False), flush=True)


if __name__ == "__main__":
    main()
