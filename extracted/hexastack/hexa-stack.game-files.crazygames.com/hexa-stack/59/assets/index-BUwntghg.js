import { g as I, _ as x } from "./pixi.js";
const _ = "measureInit";
class T {
  activeStepIndexes = new Map();
  pendingPreStartSteps = [];
  steps = [];
  label = "Measurements";
  startedAtMs = null;
  finishedAtMs = null;
  overlayElement = null;
  timelineOverlayElement = null;
  start(e) {
    (this.label = e),
      (this.startedAtMs = this.getInitialStartTime()),
      (this.finishedAtMs = null),
      (this.steps.length = 0),
      this.steps.push(...this.pendingPreStartSteps),
      (this.pendingPreStartSteps.length = 0),
      this.activeStepIndexes.clear(),
      this.renderOverlay();
  }
  finish() {
    this.ensureStarted(),
      this.finishedAtMs === null &&
        ((this.finishedAtMs = performance.now()), this.renderOverlay());
  }
  measureSync(e, t) {
    const n = this.startStep(e);
    try {
      return t();
    } finally {
      this.finishStep(n);
    }
  }
  async measureAsync(e, t) {
    const n = this.startStep(e);
    try {
      return await t();
    } finally {
      this.finishStep(n);
    }
  }
  addEntry(e, t, n) {
    const a = w(t),
      p = w(n),
      m = { label: e, startedAtMs: a, finishedAtMs: p };
    if (this.startedAtMs === null) {
      this.pendingPreStartSteps.push(m);
      return;
    }
    this.steps.push(m),
      (this.startedAtMs = Math.min(this.startedAtMs, a)),
      this.renderOverlay();
  }
  getSnapshot() {
    const e = this.steps.map((t) => ({
      label: t.label,
      startedAtMs: t.startedAtMs,
      finishedAtMs: t.finishedAtMs,
      durationMs:
        t.finishedAtMs === null ? null : t.finishedAtMs - t.startedAtMs,
    }));
    return {
      label: this.label,
      startedAtMs: this.startedAtMs,
      finishedAtMs: this.finishedAtMs,
      totalDurationMs:
        this.startedAtMs === null || this.finishedAtMs === null
          ? null
          : this.finishedAtMs - this.startedAtMs,
      steps: e,
    };
  }
  showResultsOnScreen() {
    this.overlayElement ||
      ((this.overlayElement = document.createElement("div")),
      (this.overlayElement.id = "app-init-measure-overlay"),
      Object.assign(this.overlayElement.style, {
        position: "fixed",
        top: "8px",
        right: "8px",
        width: "520px",
        maxWidth: "calc(100vw - 16px)",
        maxHeight: "70vh",
        overflow: "auto",
        padding: "10px 12px",
        borderRadius: "8px",
        backgroundColor: "rgba(0, 0, 0, 0.82)",
        color: "#d8f7d2",
        fontFamily: "monospace",
        fontSize: "12px",
        lineHeight: "1.5",
        zIndex: "999999",
        pointerEvents: "auto",
        boxShadow: "0 6px 24px rgba(0, 0, 0, 0.35)",
      }),
      document.body.appendChild(this.overlayElement)),
      this.renderOverlay();
  }
  hideResultsOnScreen() {
    this.overlayElement?.remove(), (this.overlayElement = null);
  }
  showTimelineOnScreen() {
    this.timelineOverlayElement ||
      ((this.timelineOverlayElement = document.createElement("div")),
      (this.timelineOverlayElement.id = "app-init-measure-timeline-overlay"),
      Object.assign(this.timelineOverlayElement.style, {
        position: "fixed",
        inset: "0",
        zIndex: "1000000",
        backgroundColor: "rgba(0, 0, 0, 0.92)",
        color: "#d8f7d2",
        fontFamily: "monospace",
      }),
      document.body.appendChild(this.timelineOverlayElement)),
      this.renderTimelineOverlay();
  }
  hideTimelineOnScreen() {
    this.timelineOverlayElement?.remove(), (this.timelineOverlayElement = null);
  }
  ensureStarted() {
    this.startedAtMs === null && this.start(this.label);
  }
  getInitialStartTime() {
    return (
      this.pendingPreStartSteps.reduce(
        (t, n) => (t === null ? n.startedAtMs : Math.min(t, n.startedAtMs)),
        null
      ) ?? performance.now()
    );
  }
  startStep(e) {
    this.ensureStarted();
    const t =
      this.steps.push({
        label: e,
        startedAtMs: performance.now(),
        finishedAtMs: null,
      }) - 1;
    return this.activeStepIndexes.set(e, t), this.renderOverlay(), t;
  }
  finishStep(e) {
    const t = this.steps[e];
    !t ||
      t.finishedAtMs !== null ||
      ((t.finishedAtMs = performance.now()),
      this.activeStepIndexes.delete(t.label),
      this.renderOverlay());
  }
  renderOverlay() {
    if (!this.overlayElement) return;
    const e = this.getSnapshot(),
      t = document.createElement("div"),
      n = document.createElement("div");
    Object.assign(n.style, {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "12px",
      marginBottom: "8px",
    });
    const a = document.createElement("div");
    (a.textContent = `${e.label}${
      e.totalDurationMs === null ? " (running)" : ""
    }`),
      Object.assign(a.style, { fontWeight: "bold", fontSize: "13px" });
    const p = document.createElement("div");
    Object.assign(p.style, {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      flexShrink: "0",
    });
    const m = document.createElement("button");
    (m.type = "button"),
      (m.textContent = "Open timeline"),
      Object.assign(m.style, O()),
      (m.onclick = () => {
        this.showTimelineOnScreen();
      }),
      p.appendChild(m),
      n.append(a, p);
    const r = document.createElement("div");
    (r.textContent = `total: ${S(e.totalDurationMs)}`),
      Object.assign(r.style, { marginBottom: "10px", color: "#b5e8ac" }),
      t.append(n, r, this.renderStepsList(e)),
      this.overlayElement.replaceChildren(t),
      this.timelineOverlayElement && this.renderTimelineOverlay();
  }
  renderStepsList(e) {
    const t = document.createElement("div");
    return (
      Object.assign(t.style, { display: "grid", gap: "4px" }),
      e.steps.forEach((n) => {
        const a = document.createElement("div"),
          p = n.finishedAtMs === null ? " (running)" : "";
        (a.textContent = `${S(n.durationMs).padStart(8, " ")}  ${n.label}${p}`),
          Object.assign(a.style, { whiteSpace: "pre-wrap" }),
          t.appendChild(a);
      }),
      t
    );
  }
  renderTimelineView(e) {
    const t = document.createElement("div");
    Object.assign(t.style, { display: "grid", gap: "12px", minWidth: "900px" });
    const n = e.startedAtMs;
    if (n === null) return t;
    const a = j(e),
      p = Math.max(a - n, 1),
      m = [...e.steps].sort((d, u) => d.startedAtMs - u.startedAtMs),
      r = document.createElement("div");
    return (
      Object.assign(r.style, {
        position: "relative",
        height: "26px",
        borderBottom: "1px solid rgba(216, 247, 210, 0.25)",
        marginBottom: "4px",
      }),
      P(p).forEach((d) => {
        const u = document.createElement("div");
        Object.assign(u.style, {
          position: "absolute",
          left: `${d.percent}%`,
          top: "0",
          bottom: "0",
          borderLeft: "1px solid rgba(216, 247, 210, 0.18)",
          paddingLeft: "4px",
          fontSize: "11px",
          color: "#9bc99a",
        }),
          (u.textContent = S(d.timeMs)),
          r.appendChild(u);
      }),
      t.appendChild(r),
      m.forEach((d, u) => {
        const g = document.createElement("div");
        Object.assign(g.style, { display: "grid", gap: "4px" });
        const f = document.createElement("div");
        (f.textContent = `${d.label} (${S(d.durationMs)})`),
          Object.assign(f.style, {
            color: d.finishedAtMs === null ? "#ffe28a" : "#d8f7d2",
          });
        const v = document.createElement("div");
        Object.assign(v.style, {
          position: "relative",
          height: "22px",
          borderRadius: "999px",
          overflow: "hidden",
          backgroundColor: "rgba(255, 255, 255, 0.08)",
        });
        const A = document.createElement("div"),
          o = d.finishedAtMs ?? a,
          s = E(((d.startedAtMs - n) / p) * 100),
          c = E(((o - d.startedAtMs || 1) / p) * 100);
        Object.assign(A.style, {
          position: "absolute",
          top: "0",
          left: `${s}%`,
          width: `${Math.max(c, 0.8)}%`,
          height: "100%",
          borderRadius: "999px",
          background: R(u),
          opacity: d.finishedAtMs === null ? "0.7" : "1",
        }),
          v.appendChild(A),
          g.append(f, v),
          t.appendChild(g);
      }),
      t
    );
  }
  renderTimelineOverlay() {
    if (!this.timelineOverlayElement) return;
    const e = this.getSnapshot(),
      t = document.createElement("div");
    Object.assign(t.style, {
      height: "100%",
      display: "grid",
      gridTemplateRows: "auto 1fr",
    });
    const n = document.createElement("div");
    Object.assign(n.style, {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "16px",
      padding: "18px 24px",
      borderBottom: "1px solid rgba(216, 247, 210, 0.2)",
      backgroundColor: "rgba(15, 15, 15, 0.94)",
    });
    const a = document.createElement("div");
    (a.textContent = `${e.label} timeline`),
      Object.assign(a.style, { fontWeight: "bold", fontSize: "18px" });
    const p = document.createElement("div");
    Object.assign(p.style, {
      display: "grid",
      gridAutoFlow: "column",
      gap: "10px",
      alignItems: "center",
    });
    const m = document.createElement("div");
    (m.textContent = `total: ${S(e.totalDurationMs)}`),
      Object.assign(m.style, { color: "#b5e8ac", fontSize: "13px" });
    const r = document.createElement("button");
    (r.type = "button"),
      (r.textContent = "Close"),
      Object.assign(r.style, O()),
      (r.onclick = () => {
        this.hideTimelineOnScreen();
      }),
      p.append(m, r),
      n.append(a, p);
    const d = document.createElement("div");
    Object.assign(d.style, { overflow: "auto", padding: "24px" }),
      d.appendChild(this.renderTimelineView(e)),
      t.append(n, d),
      this.timelineOverlayElement.replaceChildren(t);
  }
}
function S(i) {
  return i === null
    ? "--"
    : i >= 1e3
    ? `${(i / 1e3).toFixed(2)}s`
    : i >= 100
    ? `${i.toFixed(0)}ms`
    : `${i.toFixed(1)}ms`;
}
function O() {
  return {
    border: "1px solid rgba(216, 247, 210, 0.35)",
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    color: "#d8f7d2",
    borderRadius: "6px",
    padding: "4px 8px",
    cursor: "pointer",
    fontFamily: "monospace",
    fontSize: "12px",
  };
}
function j(i) {
  if (i.finishedAtMs !== null) return i.finishedAtMs;
  const e = i.steps.reduce((t, n) => {
    const a = n.finishedAtMs ?? performance.now();
    return Math.max(t, a);
  }, i.startedAtMs ?? performance.now());
  return Math.max(e, performance.now());
}
function R(i) {
  const e = (i * 47) % 360;
  return `linear-gradient(90deg, hsla(${e}, 70%, 45%, 0.95), hsla(${
    (e + 35) % 360
  }, 78%, 60%, 0.95))`;
}
function P(i) {
  return Array.from({ length: 7 }, (t, n) => {
    const a = (n / 6) * 100;
    return { timeMs: (n / 6) * i, percent: a };
  });
}
function E(i) {
  return Math.min(Math.max(i, 0), 100);
}
const b = new T();
function L() {
  b.start("App initialization");
}
function J() {
  b.finish(), k() && b.showResultsOnScreen();
}
function U(i, e) {
  return b.measureSync(i, e);
}
async function D(i, e) {
  return b.measureAsync(i, e);
}
function $(i, e, t) {
  b.addEntry(i, e, t);
}
function k() {
  return new URLSearchParams(window.location.search).has(_);
}
function w(i) {
  const e = i instanceof Date ? i.getTime() : i;
  return z(e) ? e - performance.timeOrigin : e;
}
function z(i) {
  return i > 1e12;
}
var M = { exports: {} },
  N = M.exports,
  C;
function B() {
  return (
    C ||
      ((C = 1),
      (function (i, e) {
        (function (t, n) {
          i.exports = n();
        })(N, () =>
          (() => {
            var t = {
                d: (o, s) => {
                  for (var c in s)
                    t.o(s, c) &&
                      !t.o(o, c) &&
                      Object.defineProperty(o, c, {
                        enumerable: !0,
                        get: s[c],
                      });
                },
                o: (o, s) => Object.prototype.hasOwnProperty.call(o, s),
              },
              n = {};
            t.d(n, { default: () => A });
            const a = (...o) => {},
              p = (o) => o !== null && o?.constructor.name === "Object";
            let m, r;
            const d = () => {
                if (!m) {
                  m = !0;
                  try {
                    (r = f.storage || localStorage), r.getItem("");
                  } catch {
                    r = (() => {
                      const o = {
                        getItem: (c) => s[c] || null,
                        setItem: (c, l) => {
                          s[c] = l;
                        },
                        removeItem: (c) => {
                          s[c] = void 0;
                        },
                        clear: () => {
                          s = { __proto__: o };
                        },
                      };
                      let s = { __proto__: o };
                      return s;
                    })();
                  }
                  v();
                }
              },
              u = "\0",
              g = (o, s, c = !0) =>
                c
                  ? [...JSON.stringify(o)]
                      .map((l) => String.fromCharCode(l.charCodeAt(0) + s))
                      .join("")
                  : JSON.parse(
                      [...o]
                        .map((l) => String.fromCharCode(l.charCodeAt(0) - s))
                        .join("")
                    ),
              f = {
                ttl: null,
                encrypt: !1,
                encrypter: g,
                decrypter: (o, s) => g(o, s, !1),
                secret: 75,
                storage: void 0,
              };
            Object.seal(f);
            const v = (o = !1) => {
                d();
                for (const s of Object.keys(r)) {
                  const c = r.getItem(s);
                  let l;
                  try {
                    l = JSON.parse(c || "");
                  } catch {
                    continue;
                  }
                  p(l) &&
                    u in l &&
                    (Date.now() > l.ttl || o) &&
                    r.removeItem(s);
                }
              },
              A = {
                config: f,
                set: (o, s, c = {}) => {
                  d();
                  const l = {
                    ...f,
                    ...c,
                    encrypt: c.encrypt !== !1 && (c.encrypt || f.encrypt),
                    ttl: c.ttl === null ? null : c.ttl || f.ttl,
                  };
                  try {
                    const h = l.ttl && !isNaN(l.ttl) && l.ttl > 0;
                    let y = h ? { [u]: s, ttl: Date.now() + 1e3 * l.ttl } : s;
                    l.encrypt &&
                      (h
                        ? (y[u] = (l.encrypter || a)(y[u], l.secret))
                        : (y = (l.encrypter || a)(y, l.secret))),
                      r.setItem(o, JSON.stringify(y));
                  } catch {
                    return !1;
                  }
                },
                get: (o, s = {}) => {
                  d();
                  const c = r.getItem(o),
                    l = {
                      ...f,
                      ...s,
                      encrypt: s.encrypt !== !1 && (s.encrypt || f.encrypt),
                      ttl: s.ttl === null ? null : s.ttl || f.ttl,
                    };
                  let h, y;
                  try {
                    (h = JSON.parse(c || "")),
                      (y = p(h) && u in h),
                      (l.decrypt || l.encrypt) &&
                        (y
                          ? (h[u] = (l.decrypter || a)(h[u], l.secret))
                          : (h = (l.decrypter || a)(h, l.secret)));
                  } catch {}
                  return y
                    ? Date.now() > h.ttl
                      ? (r.removeItem(o), null)
                      : h[u]
                    : h !== void 0
                    ? h
                    : c;
                },
                flush: v,
                clear: () => {
                  d(), r.clear();
                },
                remove: (o) => {
                  d(), r.removeItem(o);
                },
              };
            return n.default;
          })()
        );
      })(M)),
    M.exports
  );
}
var F = B();
const W = I(F),
  H = (() => {
    const i = Reflect.get(window, "JS_INIT_TIME");
    return typeof i == "number" ? i : Date.now();
  })();
$("ENTRY TO MAIN", H, Date.now());
(async () => {
  const { MultiplatformHandler: i } = await x(
      async () => {
        const { MultiplatformHandler: n } = await import(
          "./MultiplatformHandler.js"
        );
        return { MultiplatformHandler: n };
      },
      [],
      import.meta.url
    ),
    e = new i(),
    t = async () => {
      L();
      const [{ loadTextures: n }, { default: a }, { default: p }, { App: m }] =
        await D("load startup modules", () =>
          Promise.all([
            x(() => import("./pixi.js").then((r) => r.ac), [], import.meta.url),
            x(
              () => import("./platformInit.js").then((r) => r.p),
              [],
              import.meta.url
            ),
            x(() => import("./Sentry.js"), [], import.meta.url),
            x(
              () => import("./coreAppHandle.js").then((r) => r.cv),
              [],
              import.meta.url
            ),
          ])
        );
      p(e.getSentryConfig()),
        n.config &&
          Object.assign(n.config, {
            preferWorkers: !1,
            preferCreateImageBitmap: !1,
          }),
        new m({ platform: a(e), isDev: !1, multiplatformConfig: e });
    };
  i.setStartGameCallback(() => {
    t();
  });
})();
export { U as a, J as f, W as l, D as m };
