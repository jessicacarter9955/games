# 2Night Multi-Game Reskinner — ZIP collection

This is an **independent prototype on the \`feat/multigame-reskinner\` branch of
\`jessicacarter9955/games\`**, not a change to the deployed
\`jessicacarter9955/2night\` application.

It catalogs all games represented by \`extracted/**/_game-capture-manifest.json\`,
loads the actual local HTML (when available), and provides a conservative
browser inspector and non-destructive image reskin drafts.

## Run locally

From the **root of the games repository** (not inside \`reskinner/\`):

\`\`\`bash
python3 scripts/generate_reskin_catalog.py
python3 -m http.server 8000
\`\`\`

Open **http://localhost:8000/reskinner/**.

No Node build, Python packages or cloud secrets are required. Run the catalog
generator whenever you add/recapture/unzip a title. The original ZIPs and game
files are never changed by the generator or the inspector.

### Supported in the current prototype

- Search, group, sort and switch all **69** entries; original estimated
  reskinning scores remain separate from technical compatibility.
- Open local \`index.html\` entrypoints; show reason and warning when absent or
  when the engine needs a dedicated adapter. Unsupported games are NOT silently
  excluded, and launchable does not imply fully playable.
- Live pointer/tap inspection of DOM elements, CSS boxes and **actual**
  Canvas2D \`drawImage\`/\`fillText\` calls. When Phaser/PixiJS/Cocos make their
  scene graph globally available, the generic adapter can inspect real
  \`getBounds()\` objects. No names are inferred from arbitrary WebGL pixels.
- Gallery for images, atlas metadata and 3D resources stored in the repository.
- Upload a replacement PNG **only with identical dimensions**, preview the
  replacement in DOM and Canvas2D draw calls when the source image is known.
- Store drafts in **browser IndexedDB** and restore originals, download
  modified PNG files and export a JSON manifest.
- Responsive layout for desktop, tablet and mobile. Logical canvas coordinates
  are converted to displayed CSS pixel coordinates.

### Current compatibility inventory

| State | Count | Meaning |
|---|---:|---|
| 🟡 2D experimental | 8 | Local entrypoint; runtime/complete scenes not certified |
| ⚪ 3D limited | 6 | Needs a mesh/material/scene adapter; may also lack files |
| 🔴 Runtime unsupported | 38 | Unity, Defold, Flash/Ruffle, cross-origin/iframe or compiled |
| ⚫ Entrypoint missing | 17 | No local playable \`index.html\` |

The **69** statuses describe the currently committed files, not the results of
69 full-playthrough tests. Historical scoring and CDN completeness do not
automatically turn a game green. Many resources recovered during previous
Windows/CDN passes have never been committed to this repository.

The current branch deliberately does **not** copy the HaxeFlixel FNF/GameMaker
code or the full animation timeline from \`2night\`. They are engine-specific
and cannot meaningfully control arbitrary compiled game binaries. The
\`reskinner/adapters.js\` plugin interface is the integration point for new
engines or individual titles: \`attach\`, \`scan\`, \`pick\`, \`swap\`, \`dispose\`.
Add a game-specific adapter only after measuring real runtime objects.

## Things that are NOT implemented

- No claim that Unity, Defold, Flash, iframe multiplayer or 3D shader-driven
  titles support 1:1 live reskinning yet.
- No server-side GitHub commits for reskins. These are local drafts and exported
  PNGs; uploaded game ZIPs remain untouched.
- No automatic atlas repacking, texture compression, UV/bone/skin-weight
  remapping, 3D material replacement or generic per-animation seeking.
- No automatic jump to an arbitrary state/scene; scene navigation requires a
  game-specific adapter and deterministic checkpoint logic.
- No promise that all 69 games run offline. Some contain only portal snapshots
  or loaders requiring unavailable services.

## Security and distribution

**Use this prototype locally in an isolated browser profile** for game files
you trust. Generic inspection requires same-origin iframe access, while an
iframe running third-party scripts can access the same origin if incorrectly
hosted. Do **not** host this unmodified prototype alongside credentials,
tokens, sensitive browser storage or privileged backend routes.

Mirroring a game does not give distribution rights. Review licenses and
permissions before sharing any archived game content publicly.

## Development checks

\`\`\`bash
python3 scripts/generate_reskin_catalog.py
python3 scripts/test_reskin_catalog.py
node --check reskinner/app.js
node --check reskinner/runtime.js
node --check reskinner/storage.js
node --check reskinner/adapters.js
\`\`\`

The app and ZIP files are served together from the **same repository root**.
Serving only the \`reskinner/\` directory breaks URLs like
\`/extracted/Word%20games/wordmeister/.../index.html\`.

## Adapter strategy for future games

1. **Generic**: DOM/Canvas2D + asset inventory, no assumption about engine.
2. **Engine adapter**: Phaser, PixiJS, Cocos 2D, Three.js/PlayCanvas mesh and
   materials, Godot, Unity, Defold, etc. only after runtime inspection.
3. **Game adapter**: custom renderers, sprite metadata, scene checkpoints,
   animation timelines, texture remapping, special camera/layout behavior.
4. **Verification**: test menu/gameplay/game-over and different viewport
   sizes, then mark the specific capabilities as verified.

Avoid equating the audit's *reskin difficulty score* with an actual technical
verification. A game can score high while having no usable local build.


## 2026-11-25 · Windows bridge, 69 games and 1:1 reskin transport

Everything remains in the feature branch of jessicacarter9955/games.
The production Next.js application jessicacarter9955/2night is unchanged.

### Run against the complete local mirrors on the Windows PC

From the Windows checkout of this repository:

    git fetch origin
    git switch feat/multigame-reskinner
    py scripts/serve_local_mirrors.py --port 8000

Open http://127.0.0.1:8000/reskinner/ on that PC. The server is bound to
127.0.0.1 and overlays the existing game mirrors from the user's Downloads.
Nothing is copied or uploaded from the approximately 1.8 GB mirrored tree.
The generic Github catalog is retained as the fallback elsewhere.

Windows mirror index verification: 69/69 roots mapped, 52 local HTML entrypoints,
2,123 additional image assets, 44 games with both images and a local HTML entry.
These are actual file counts, not 52 successful full-game boot tests.
24 currently classify as 2D experimental, 6 as 3D limited, 38 blocked and
1 still missing an HTML entry. No games have a certified full offline playthrough.

### Reskin workflow

1. Choose a game, inspect its source images, and select an asset.
2. Upload an identically sized replacement PNG. Save it in IndexedDB.
3. The root Service Worker returns that replacement to same-origin image GETs
   at the original path, before the engine decodes textures and uploads to GPU.
4. Click Reload with reskin to restart any engine with preloaded graphics.
5. If metadata are present, the atlas panel can parse Sparrow XML, Cocos
   plist or libGDX .atlas files: choose a frame and replace its exact cropped
   rectangle without changing UV coordinates. Shared rectangles affect all
   logical frames pointing to those pixels; rotated rectangles are disabled.
6. Export the PNG and draft manifest. The feature branch does not yet commit
   the user's individual reskin to a permanent GitHub backend.

The transport works for individually downloaded local textures in generic
HTML5 / Canvas2D / Pixi / Phaser / Cocos / WebGL. It cannot edit Unity packed
archives, Defold binary data, remote cross-origin images, 3D mesh UVs, or
procedural shaders without dedicated game/engine adapters. Red/grey states
remain visible even if the game's HTML can load.

### Browser verification via Windows bridge

- Service Worker test: original red PNG changed to blue using the same URL;
  no game source modification required.
- Wordmeister: 69-game UI, local HTML path, 166x61 source PNG intercepted
  and served with X-2Night-Reskin=local-draft, zero browser page errors.
- The Sparrow atlas automated browser check lives at
  scripts/test_reskin_atlas.py and checks pixel-perfect frame composition.

Browser opening or image interception alone is not evidence of complete
gameplay, correct animation sequences or full-engine reskinnability.


## 2026-11-25 · Verified URL mapping, isolated sprite preview and safe 69-game capture

- `reskinner/original-urls.json` maps the **69 existing game IDs to 69 CrazyGames original pages**. This mapping was checked against the archived Windows deep-audit: 69 matching slugs, 0 mismatches. It does **not** prove successful gameplay or that all files are present. `python scripts/test_original_url_mapping.py` checks one-to-one catalog integrity.
- The Canvas2D inspector now retains the **source crop rectangle** of each `drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)` operation and displays a **standalone source image/frame preview** in the inspector panel. It does not present the complete game canvas as a sprite. A Playwright test on local Wordmeister validated image selection and isolated cropping with no JS page errors. Pixi, Unity, WebGL shader, server-side multiplayer and unexposed runtime objects still need suitable adapters.
- The original capture of these pages accidentally included **portal catalog tiles and advertising** under `imgs.crazygames.com`, `builds.crazygames.com`, etc. Do **not** count these as new gameplay assets. The reversible cleanup `scripts/quarantine_portal_reskin_captures.py` moved **2,289 files / 92,098,767 bytes** from *new incremental capture manifests only* into a local private quarantine folder, retaining SHA checks and original paths. No copyright assets were pushed to this repository.
- For new captures run from the Windows checkout containing the **69-game deep audit** at `%USERPROFILE%\\Downloads\\_mirror_69_deep_audit_20261125.json`:

  ```powershell
  py scripts/recapture_69_gameplay.py --game mahjongg --seconds 8 --click-play
  py scripts/recapture_69_gameplay.py --seconds 8 --click-play
  ```

  The new script permits saves from **game-specific, audit-verified hosts only**, writes `_reskin_69_incremental.json` next to each mirror's hosts folder and a cumulative `_reskin_69_capture_summary.json` under Downloads. Repeated runs are incremental; query variants have SHA-based suffixes. Headless Play-button detection covers only accessible HTML buttons in nested game frames; canvas-based Play screens and later levels often require guided interaction. Console, WebGL, 3D, iframe, login and backend dependencies still require per-game verification.

- The measured full local baseline before this recapture was **4,710 files / ~1.78 GB**, **20 games with missing HTML asset references**, **26 needing follow-up**; these are prior static-audit figures, not revised run-time completion metrics. A filtered 3-game smoke capture (Mahjongg, Hexastack, Color Water Sort 3D) succeeded with **3 new game-host files / 233,130 bytes** and zero reported failed response downloads. Later full-game and multi-screen verification is still outstanding.

Do not call any game 'playable, complete, or fully reskinnable' based solely on matching URL, HTML 200, a successful URL mirror or Canvas2D isolated-preview test. Confirm boot, Play, gameplay, additional screens, object/asset mapping, live preview and export for each game.
