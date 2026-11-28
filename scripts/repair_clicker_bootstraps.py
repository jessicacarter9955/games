#!/usr/bin/env python3
"""Repair generated local Unity clicker launchers without editing captured builds.

The rendering budget is conservative for local QA. This does not bypass
publisher site locks, fake SDK callbacks, or certify gameplay.
"""
import argparse
from pathlib import Path

GAMES = {
    "candy-clicker-2", "capybara-clicker", "capybara-clicker-2",
    "italian-brainrot-clicker-usp", "planet-clicker-2",
}
MARKER = "// 2night clicker local preview v2"


def patch(source):
    if MARKER in source:
        return source
    required = ['const {loaderUrl, ...config}=source;',
                'percent>=90?"Unity runtime initialization (90%)"',
                'window.unityGameInstance=instance;']
    if not all(x in source for x in required):
        raise ValueError("Unrecognized bootstrap; refusing to overwrite")
    source = source.replace(
        'const {loaderUrl, ...config}=source;',
        '''const {loaderUrl, ...config}=source;
 ''' + MARKER + '''
 // The local preview should not allocate a high-DPI back buffer.
 // Unity still owns its resolution and renderer; normal game code is untouched.
 config.devicePixelRatio=1;
 canvas.width=640; canvas.height=360;
 config.webglContextAttributes={...config.webglContextAttributes,
   powerPreference:"default"};
 window.__nightUnityStartup={phase:"loading",progress:0,startedAt:Date.now()};
 canvas.addEventListener("webglcontextlost",()=>report("WebGL context lost",true));
''', 1)
    source = source.replace(
        'const percent=Math.round(progress*100);',
        '''const percent=Math.round(progress*100);
  window.__nightUnityStartup.progress=percent;
  window.__nightUnityStartup.phase=percent>=90?"initializing":"downloading";''', 1)
    source = source.replace(
        'percent>=90?"Unity runtime initialization (90%)"',
        'percent>=90?"Unity runtime initialization ("+percent+"%)"', 1)
    source = source.replace(
        'window.unityGameInstance=instance;',
        '''window.unityGameInstance=instance;
  window.__nightUnityStartup.phase="engine-ready";
  window.__nightUnityStartup.progress=100;''', 1)
    source = source.replace(
        'startButton.disabled=true;startButton.hidden=true;',
        'startButton.disabled=true;startButton.style.display="none";', 1)
    return source


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--downloads", type=Path, default=Path.home() / "Downloads")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()
    root = args.downloads / "_chatgpt_import130_cdn_mirrors"
    found = set()
    for game in sorted(GAMES):
        target = root / "idle" / game / "hosts" / "_reskin_local_bootstrap" / "index.html"
        if not target.is_file():
            print("MISSING", game)
            continue
        original = target.read_text(encoding="utf-8")
        changed = patch(original)
        found.add(game)
        if changed == original:
            print("UNCHANGED", game)
            continue
        if not args.dry_run:
            backup = target.with_name("index.before-clicker-local-v2.html")
            if not backup.exists():
                backup.write_bytes(target.read_bytes())
            target.write_text(changed, encoding="utf-8")
        print("WOULD PATCH" if args.dry_run else "PATCHED", game)
    if found != GAMES:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
