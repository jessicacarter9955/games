import { c9 as i, d as a, am as h } from "./coreAppHandle.js";
import "./pixi.js";
import "./getGameLogger.js";
import "./index-BUwntghg.js";
import "./uuid.js";
import "./MultiplatformHandler.js";
class y {
  static requiredLayouts = [i];
  onShare = new a.Signal();
  onClose = new a.Signal();
  layout = new i();
  root = this.layout.root;
  get interactive() {
    return this.root.interactiveChildren ?? !1;
  }
  constructor(e, o = !0) {
    const {
      layout: { progressText: r, shareButton: t, closeButton: s, root: n },
    } = this;
    (r.text = e),
      (n.alpha = 0),
      s.on("pointertap", () => {
        this.onClose.emit();
      }),
      (t.visible = o),
      o &&
        t.on("pointertap", () => {
          this.onShare.emit(
            this.root.pixi.renderer.extract.base64(this.layout.shareContainer)
          );
        });
  }
  resize() {
    const {
      layout: { gradient: e, contentWrapper: o, root: r },
      root: {
        pixi: { renderer: t },
      },
    } = this;
    (r.y = t.height * -0.5),
      e.props({ width: t.width * 1.1, height: t.height * 1.1 }),
      o.props({ y: Math.floor((t.height - h.height) * 0.5) });
  }
}
export { y as WinStreakSharePopup };
