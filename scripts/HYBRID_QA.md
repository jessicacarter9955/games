# Hybrid gameplay QA (Windows)

This runner replaces browser-element-only gameplay certification with a **Chrome DevTools Protocol + native-input + computer-vision** workflow. It intentionally does **not** use Playwright or Selenium.

## Run on the Windows mirror machine

Keep the existing local mirror HTTP server running, then execute:

```powershell
py scripts/hybrid_gameplay_qa.py --base http://127.0.0.1:8001 --games cardsfouruno,carout,triviaguesstheiranswers,hexastack,iogamestileman
```

Use `--output C:\some\qa-folder` to choose the evidence directory; the default is `%USERPROFILE%\Downloads\_2night_hybrid_qa`. The runner launches a **separate Chrome profile** with DevTools debugging bound to localhost. It collects:
- browser and iframe navigation, HTTP failures, JavaScript exceptions;
- screenshot before Play and after each of three interactions;
- the actual target coordinates and type of each action;
- OpenCV image variance/edge statistics and changes **inside the game viewport only**;
- JSON per game and an overall `summary.json`.

`cv2` is preferred; when unavailable, Pillow provides a clearly identified fallback. CDP has a `websocket-client` backend with an RFC 6455 fallback. Run tests with `py scripts/test_hybrid_gameplay_qa.py`.

## Native Windows input

CDP sends mouse and keyboard actions by default. Optional `--native` enables a restricted PyAutoGUI path **only** when the foreground window title identifies the Reskinner and you explicitly provide `QA_NATIVE_VIEWPORT_X` and `QA_NATIVE_VIEWPORT_Y` screen offsets. This avoids unintended mouse input into unrelated Windows applications. Do not set native offsets on a locked/unattended desktop. A local CDP screenshot doesn't prove that the browser was visible on the physical monitor.

`--headless` is a diagnostic fallback, **not** equivalent to native GPU/rendering certification.

## Status interpretation

- `catalog-or-selection-blocked`: Reskinner did not select the requested game.
- `broken-navigation`: a game link redirected to an error page.
- `partial-or-blocked`: Play or subsequent input was not demonstrated as meaningful gameplay.
- `gameplay-candidate-needs-visual-review`: multiple input and visual changes occurred, but authentic play **still needs screenshot/scene review**.
- `qa-error`: automation itself failed.

All results start with `gameplayVerified: false`. Only after screenshot review confirms an original, nonblank gameplay scene and **at least two meaningful in-game actions** should an external certification process mark it green. A changing loading animation, a menu, SDK error, background effect, or a fake gameplay simulation is **not** a green result.

The runner does not edit or fabricate game assets, fix SDK restrictions, or stand in for a live multiplayer backend. Missing files and engine-specific failures must be repaired separately. Mirror and Reskinner remain the original game sources.

Source: `scripts/hybrid_gameplay_qa.py`; regression tests: `scripts/test_hybrid_gameplay_qa.py`.
