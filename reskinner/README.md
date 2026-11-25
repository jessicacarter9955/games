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
