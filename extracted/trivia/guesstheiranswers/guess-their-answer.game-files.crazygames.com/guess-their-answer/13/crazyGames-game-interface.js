var __defProp = Object.defineProperty,
  __defNormalProp = (e, t, n) =>
    t in e
      ? __defProp(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: n,
        })
      : (e[t] = n),
  __publicField = (e, t, n) =>
    __defNormalProp(e, "symbol" != typeof t ? t + "" : t, n);
!(function () {
  "use strict";
  const e = "//sdk.crazygames.com/crazygames-sdk-v3.js",
    t = "GameInterface",
    n = {
      "[ads]": { name: "ADS", color: "#3b88c3" },
      "[track]": { name: "TRACK", color: "#9b59b6" },
      "[storage]": { name: "STORAGE", color: "#03fc2c" },
      "[gameStates]": { name: "GAMESTATES", color: "#f1c40f" },
      "[intern]": { name: "INTERN", color: "#253342" },
      "[listener]": { name: "LISTENER", color: "#F07857" },
      "[mock]": { name: "MOCK", color: "#32a0a8" },
      "[leaderboard]": { name: "LDRBRD", color: "#544680" },
      "[game]": { name: "GAME", color: "#2ecc71" },
      "[start]": { name: "START", color: "#581845" },
      "[iap]": { name: "IAP", color: "#2B1858" },
      "[portal]": { name: "PORTAL", color: "#e7a996" },
      "[bridge]": { name: "BRIDGE", color: "#76aeb2" },
      "[events]": { name: "EVENTS", color: "#fdb2c8" },
    };
  let r;
  function a(e, a, ...o) {
    if (
      !a &&
      (void 0 === r &&
        (r = ["1", "true"].includes(
          new URLSearchParams(window.location.search || "").get(
            "isVerboseLoggingEnabled"
          ) || ""
        )),
      !0 !== (null == window ? void 0 : window.isVerboseLoggingEnabled) &&
        !1 === r)
    )
      return;
    if (
      ((e, ...t) => {
        const n = Array.isArray(e) ? e : [e];
        return t.some(
          (e) => "string" == typeof e && n.some((t) => e.includes(t))
        );
      })(["isRewardedAdAvailable", "isInterstitialAdAvailable"], ...o)
    )
      return;
    if ("string" != typeof o[0]) return void console[e](...o);
    const i = [...o];
    let s = i[0].split(" ")[0];
    const l = i[0].match(/^(\[[^\]]+\])/);
    if (((s = l ? l[1] : i[0].split(" ")[0]), s in n)) {
      const e = s;
      let r = i[0];
      r.startsWith(s + " ")
        ? (r = r.substring(s.length + 1))
        : r.startsWith(s) && (r = r.substring(s.length));
      const a = r.length > 0 && !r.startsWith(" ") ? " " : "";
      (i[0] = `%c${t}%c %c${n[e].name}%c` + a + r),
        i.splice(
          1,
          0,
          "display: inline-block; color: #fff; background: #e74c3c; padding: 1px 4px; border-radius: 3px;"
        ),
        i.splice(2, 0, ""),
        i.splice(
          3,
          0,
          "display: inline-block; color: #fff; background: " +
            n[e].color +
            "; padding: 1px 4px; border-radius: 3px;"
        ),
        i.splice(4, 0, "");
    } else
      (i[0] = `%c${t}%c ` + i[0]),
        i.splice(
          1,
          0,
          "display: inline-block; color: #fff; background: #e74c3c; padding: 1px 4px; border-radius: 3px;"
        ),
        i.splice(2, 0, "");
    console[e](...i);
  }
  const o = {
      log(...e) {
        a("log", !1, ...e);
      },
      warn(...e) {
        a("warn", !1, ...e);
      },
      force(...e) {
        a("log", !0, ...e);
      },
      scopes: n,
    },
    i = (e, t) => {
      if ("object" != typeof t || null === t) return t;
      const n = t;
      let r;
      r = "object" != typeof e || null === e ? (Array.isArray(t) ? [] : {}) : e;
      for (const a of Object.keys(n)) r[a] = i(r[a], n[a]);
      return r;
    },
    s = "[safeClone]",
    l = (e, t) => {
      throw new TypeError(
        `${s} Unsupported value at "${t}": ${((e) =>
          Object.prototype.toString.call(e))(
          e
        )}. State values must be plain objects, arrays, Date instances, primitives, or functions.`
      );
    },
    c = (e, t, n) => {
      if (null == e) return e;
      if ("function" == typeof e || "object" != typeof e) return e;
      if (e instanceof Date) return new Date(e.getTime());
      if (
        ("undefined" != typeof Node && e instanceof Node && l(e, n),
        Array.isArray(e))
      ) {
        const r = t.get(e);
        if (r) return r;
        const a = [];
        return (
          t.set(e, a),
          e.forEach((e, r) => {
            a[r] = c(e, t, `${n}[${r}]`);
          }),
          a
        );
      }
      ((e) => {
        const t = Object.getPrototypeOf(e);
        return t === Object.prototype || null === t;
      })(e) || l(e, n);
      const r = t.get(e);
      if (r) return r;
      if (Reflect.ownKeys(e).some((e) => "symbol" == typeof e))
        throw new TypeError(`${s} Symbol keys are not supported at "${n}".`);
      const a = Object.getOwnPropertyDescriptors(e);
      for (const [i, l] of Object.entries(a))
        if (!l.enumerable)
          throw new TypeError(
            `${s} Non-enumerable property "${n}.${i}" is not supported.`
          );
      const o = {};
      t.set(e, o);
      for (const i of Object.keys(e)) {
        const r = e[i];
        void 0 !== r && (o[i] = c(r, t, `${n}.${i}`));
      }
      return o;
    },
    d = (e) => c(e, new WeakMap(), "$");
  function u(e, t, n = !1) {
    const r = t.split(".");
    let a = e;
    for (let o = 0; o < r.length - 1; o++) {
      const e = r[o];
      if (null == a[e]) {
        if (!n) return;
        a[e] = {};
      }
      a = a[e];
    }
    return { parent: a, key: r[r.length - 1] };
  }
  function h(e) {
    let t = d(e);
    return {
      get: () => d(t),
      set(e, n) {
        const r = (null == n ? void 0 : n.mode) ?? "merge",
          a = d(t);
        "override" === r
          ? (Object.keys(e).forEach((t) => {
              a[t] = d(e[t]);
            }),
            (t = a))
          : (t = i(a, e));
      },
      increment(e) {
        const n = d(t);
        Object.entries(e).forEach(([e, t]) => {
          const r = u(n, e, !0);
          if (!r) return;
          const a = Number(r.parent[r.key] ?? 0);
          r.parent[r.key] = a + t;
        }),
          (t = n);
      },
      push(e) {
        const n = d(t);
        Object.entries(e).forEach(([e, t]) => {
          const r = u(n, e, !0);
          if (!r) return;
          const a = r.parent[r.key],
            o = Array.isArray(a) ? [...a, t] : [t];
          r.parent[r.key] = o;
        }),
          (t = n);
      },
      reset() {
        t = d(e);
      },
    };
  }
  const p = h({ loggingEnabled: !1 }),
    m = h({ name: "missing_sdk_name" }),
    g = h({
      dev: !1,
      analyticsDebug: !1,
      gameId: void 0,
      gameIdOnPortal: void 0,
      name: void 0,
      locale: "en",
      files: [],
      features: {
        audio: !0,
        pause: !0,
        score: !0,
        progress: !0,
        copyright: !0,
        credits: !0,
        version: !0,
        tutorial: !0,
        visibilitychange: !0,
        iap: !0,
        home: !0,
        privacy: !0,
        standalone: !1,
      },
      ads: {
        interstitial: {
          enabled: !0,
          preload: 0,
          retry: 0,
          timeout: 0,
          cooldown: 0,
          eventIds: [],
          passiveCooldown: 10,
          initialCooldown: 10,
        },
        rewarded: {
          enabled: !0,
          preload: 0,
          retry: 0,
          timeout: 0,
          eventIds: [],
        },
        forcePreloadOnOrientationChange: !1,
        isAutoMuting: !0,
        isAutoPausing: !0,
      },
      shouldMock: !1,
      userId: void 0,
      userid: void 0,
      maxLevels: void 0,
      version: void 0,
      exportedAt: void 0,
      scoreTypes: [],
      iap: {
        products: [],
        xsolla: { projectId: void 0, isSandbox: !1, endpoint: void 0 },
      },
      analytics: { enabled: !1 },
      auth: { enabled: !1 },
      famobiTracking: { enabled: !1, debug: !1, version: "0" },
      console: { enabled: !0, enforce: !0 },
      isVerboseLoggingEnabled: !1,
    });
  function w(e = Date.now()) {
    const t = new Date(e),
      n = (e) => e.toString().padStart(2, "0");
    return `[${n(t.getHours())}:${n(t.getMinutes())}:${n(t.getSeconds())}]`;
  }
  const f = (e) => {
      switch (e) {
        case "log":
          return "Log";
        case "game":
          return "Game";
        case "dev":
          return "GameInterface";
        case "sdk":
          return `SDK:${m.get().name}`;
        case "mock":
          return `MOCK:${g.get().currentMock}`;
        case "devError":
          return "Error";
        case "postMessage":
          return ">> Post >>";
        case "receiveMessage":
          return "<< Receive <<";
      }
    },
    v = (e) => {
      switch (e) {
        case "log":
        case "game":
          return "color: #fff; background: #e74c3c;";
        case "dev":
          return "color: #000000; background: #ffffff;";
        case "sdk":
          return "color: #ffffff; background: #8f0866;";
        case "mock":
          return "color: #000000; background: #f2ff00;";
        case "devError":
          return "color: #ffffff; background: #ff0000;";
        case "postMessage":
          return "color: #ffffff; background: #343ce4;";
        case "receiveMessage":
          return "color: #ffffff; background: #00931b;";
      }
    },
    b = (e, ...t) => {
      const n = [
        `%c${w()} %c${f(e)}`,
        "color: #aaa;",
        `display: inline-block; ${v(e)} padding: 1px 4px; border-radius: 3px;`,
        ...t,
      ];
      console.log(...n);
    },
    y = (...e) => {
      g.get().dev && b("dev", ...e), o.log("[dev]", ...e);
    },
    E = (...e) => {
      g.get().dev && b("devError", ...e), o.log("[devError]", ...e);
    },
    _ = (...e) => {
      g.get().dev && p.get().sdkLoggingEnabled && b("sdk", ...e),
        o.log("[sdk]", ...e);
    },
    k = (...e) => {
      g.get().dev && b("mock", ...e), o.log("[mock]", ...e);
    },
    I = (...e) => {
      p.get().loggingEnabled && b("game", ...e), o.log("[game]", ...e);
    };
  function S(e, t, n) {
    if ("function" == typeof e ? e === t : e.has(t))
      return arguments.length < 3 ? t : n;
    throw new TypeError("Private element is not present on this object");
  }
  function A(e, t) {
    return e.get(S(e, t));
  }
  function C(e, t, n) {
    (function (e, t) {
      if (t.has(e))
        throw new TypeError(
          "Cannot initialize the same private elements twice on an object"
        );
    })(e, t),
      t.set(e, n);
  }
  const T = {},
    P = (e) =>
      new Promise((t) => {
        if (!e) return t();
        const n = window.scrollX,
          r = window.scrollY;
        (T.restoreFocusTimeout = setTimeout(() => {
          T.previousActiveElement instanceof HTMLElement
            ? (T.previousActiveElement.focus(),
              (T.previousActiveElement = null))
            : document.body && document.body.focus(),
            t();
        }, 100)),
          window.scrollTo(n, r);
      }),
    O = "swal2-",
    L = [
      "container",
      "shown",
      "height-auto",
      "iosfix",
      "popup",
      "modal",
      "no-backdrop",
      "no-transition",
      "toast",
      "toast-shown",
      "show",
      "hide",
      "close",
      "title",
      "html-container",
      "actions",
      "confirm",
      "deny",
      "cancel",
      "footer",
      "icon",
      "icon-content",
      "image",
      "input",
      "file",
      "range",
      "select",
      "radio",
      "checkbox",
      "label",
      "textarea",
      "inputerror",
      "input-label",
      "validation-message",
      "progress-steps",
      "active-progress-step",
      "progress-step",
      "progress-step-line",
      "loader",
      "loading",
      "styled",
      "top",
      "top-start",
      "top-end",
      "top-left",
      "top-right",
      "center",
      "center-start",
      "center-end",
      "center-left",
      "center-right",
      "bottom",
      "bottom-start",
      "bottom-end",
      "bottom-left",
      "bottom-right",
      "grow-row",
      "grow-column",
      "grow-fullscreen",
      "rtl",
      "timer-progress-bar",
      "timer-progress-bar-container",
      "scrollbar-measure",
      "icon-success",
      "icon-warning",
      "icon-info",
      "icon-question",
      "icon-error",
      "draggable",
      "dragging",
    ].reduce((e, t) => ((e[t] = O + t), e), {}),
    R = ["success", "warning", "info", "question", "error"].reduce(
      (e, t) => ((e[t] = O + t), e),
      {}
    ),
    x = "SweetAlert2:",
    N = (e) => e.charAt(0).toUpperCase() + e.slice(1),
    D = (e) => {
      console.warn(`${x} ${"object" == typeof e ? e.join(" ") : e}`);
    },
    M = (e) => {
      console.error(`${x} ${e}`);
    },
    $ = [],
    V = (e, t = null) => {
      var n;
      (n = `"${e}" is deprecated and will be removed in the next major release.${
        t ? ` Use "${t}" instead.` : ""
      }`),
        $.includes(n) || ($.push(n), D(n));
    },
    U = (e) => ("function" == typeof e ? e() : e),
    B = (e) => e && "function" == typeof e.toPromise,
    j = (e) => (B(e) ? e.toPromise() : Promise.resolve(e)),
    G = (e) => e && Promise.resolve(e) === e,
    H = () => document.body.querySelector(`.${L.container}`),
    F = (e) => {
      const t = H();
      return t ? t.querySelector(e) : null;
    },
    z = (e) => F(`.${e}`),
    W = () => z(L.popup),
    K = () => z(L.icon),
    q = () => z(L.title),
    J = () => z(L["html-container"]),
    X = () => z(L.image),
    Y = () => z(L["progress-steps"]),
    Z = () => z(L["validation-message"]),
    Q = () => F(`.${L.actions} .${L.confirm}`),
    ee = () => F(`.${L.actions} .${L.cancel}`),
    te = () => F(`.${L.actions} .${L.deny}`),
    ne = () => F(`.${L.loader}`),
    re = () => z(L.actions),
    ae = () => z(L.footer),
    oe = () => z(L["timer-progress-bar"]),
    ie = () => z(L.close),
    se = () => {
      const e = W();
      if (!e) return [];
      const t = e.querySelectorAll(
          '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
        ),
        n = Array.from(t).sort((e, t) => {
          const n = parseInt(e.getAttribute("tabindex") || "0"),
            r = parseInt(t.getAttribute("tabindex") || "0");
          return n > r ? 1 : n < r ? -1 : 0;
        }),
        r = e.querySelectorAll(
          '\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n'
        ),
        a = Array.from(r).filter((e) => "-1" !== e.getAttribute("tabindex"));
      return [...new Set(n.concat(a))].filter((e) => Se(e));
    },
    le = () =>
      ue(document.body, L.shown) &&
      !ue(document.body, L["toast-shown"]) &&
      !ue(document.body, L["no-backdrop"]),
    ce = () => {
      const e = W();
      return !!e && ue(e, L.toast);
    },
    de = (e, t) => {
      if (((e.textContent = ""), t)) {
        const n = new DOMParser().parseFromString(t, "text/html"),
          r = n.querySelector("head");
        r &&
          Array.from(r.childNodes).forEach((t) => {
            e.appendChild(t);
          });
        const a = n.querySelector("body");
        a &&
          Array.from(a.childNodes).forEach((t) => {
            t instanceof HTMLVideoElement || t instanceof HTMLAudioElement
              ? e.appendChild(t.cloneNode(!0))
              : e.appendChild(t);
          });
      }
    },
    ue = (e, t) => {
      if (!t) return !1;
      const n = t.split(/\s+/);
      for (let r = 0; r < n.length; r++)
        if (!e.classList.contains(n[r])) return !1;
      return !0;
    },
    he = (e, t, n) => {
      if (
        (((e, t) => {
          Array.from(e.classList).forEach((n) => {
            Object.values(L).includes(n) ||
              Object.values(R).includes(n) ||
              Object.values(t.showClass || {}).includes(n) ||
              e.classList.remove(n);
          });
        })(e, t),
        !t.customClass)
      )
        return;
      const r = t.customClass[n];
      r &&
        ("string" == typeof r || r.forEach
          ? we(e, r)
          : D(
              `Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof r}"`
            ));
    },
    pe = (e, t) => {
      if (!t) return null;
      switch (t) {
        case "select":
        case "textarea":
        case "file":
          return e.querySelector(`.${L.popup} > .${L[t]}`);
        case "checkbox":
          return e.querySelector(`.${L.popup} > .${L.checkbox} input`);
        case "radio":
          return (
            e.querySelector(`.${L.popup} > .${L.radio} input:checked`) ||
            e.querySelector(`.${L.popup} > .${L.radio} input:first-child`)
          );
        case "range":
          return e.querySelector(`.${L.popup} > .${L.range} input`);
        default:
          return e.querySelector(`.${L.popup} > .${L.input}`);
      }
    },
    me = (e) => {
      if ((e.focus(), "file" !== e.type)) {
        const t = e.value;
        (e.value = ""), (e.value = t);
      }
    },
    ge = (e, t, n) => {
      e &&
        t &&
        ("string" == typeof t && (t = t.split(/\s+/).filter(Boolean)),
        t.forEach((t) => {
          Array.isArray(e)
            ? e.forEach((e) => {
                n ? e.classList.add(t) : e.classList.remove(t);
              })
            : n
            ? e.classList.add(t)
            : e.classList.remove(t);
        }));
    },
    we = (e, t) => {
      ge(e, t, !0);
    },
    fe = (e, t) => {
      ge(e, t, !1);
    },
    ve = (e, t) => {
      const n = Array.from(e.children);
      for (let r = 0; r < n.length; r++) {
        const e = n[r];
        if (e instanceof HTMLElement && ue(e, t)) return e;
      }
    },
    be = (e, t, n) => {
      n === `${parseInt(`${n}`)}` && (n = parseInt(n)),
        n || 0 === parseInt(`${n}`)
          ? e.style.setProperty(t, "number" == typeof n ? `${n}px` : n)
          : e.style.removeProperty(t);
    },
    ye = (e, t = "flex") => {
      e && (e.style.display = t);
    },
    Ee = (e) => {
      e && (e.style.display = "none");
    },
    _e = (e, t = "block") => {
      e &&
        new MutationObserver(() => {
          Ie(e, e.innerHTML, t);
        }).observe(e, { childList: !0, subtree: !0 });
    },
    ke = (e, t, n, r) => {
      const a = e.querySelector(t);
      a && a.style.setProperty(n, r);
    },
    Ie = (e, t, n = "flex") => {
      t ? ye(e, n) : Ee(e);
    },
    Se = (e) =>
      Boolean(
        e && (e.offsetWidth || e.offsetHeight || e.getClientRects().length)
      ),
    Ae = (e) => Boolean(e.scrollHeight > e.clientHeight),
    Ce = (e) => {
      const t = window.getComputedStyle(e),
        n = parseFloat(t.getPropertyValue("animation-duration") || "0"),
        r = parseFloat(t.getPropertyValue("transition-duration") || "0");
      return n > 0 || r > 0;
    },
    Te = (e, t = !1) => {
      const n = oe();
      n &&
        Se(n) &&
        (t && ((n.style.transition = "none"), (n.style.width = "100%")),
        setTimeout(() => {
          (n.style.transition = `width ${e / 1e3}s linear`),
            (n.style.width = "0%");
        }, 10));
    },
    Pe =
      `\n <div aria-labelledby="${L.title}" aria-describedby="${L["html-container"]}" class="${L.popup}" tabindex="-1">\n   <button type="button" class="${L.close}"></button>\n   <ul class="${L["progress-steps"]}"></ul>\n   <div class="${L.icon}"></div>\n   <img class="${L.image}" />\n   <h2 class="${L.title}" id="${L.title}"></h2>\n   <div class="${L["html-container"]}" id="${L["html-container"]}"></div>\n   <input class="${L.input}" id="${L.input}" />\n   <input type="file" class="${L.file}" />\n   <div class="${L.range}">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="${L.select}" id="${L.select}"></select>\n   <div class="${L.radio}"></div>\n   <label class="${L.checkbox}">\n     <input type="checkbox" id="${L.checkbox}" />\n     <span class="${L.label}"></span>\n   </label>\n   <textarea class="${L.textarea}" id="${L.textarea}"></textarea>\n   <div class="${L["validation-message"]}" id="${L["validation-message"]}"></div>\n   <div class="${L.actions}">\n     <div class="${L.loader}"></div>\n     <button type="button" class="${L.confirm}"></button>\n     <button type="button" class="${L.deny}"></button>\n     <button type="button" class="${L.cancel}"></button>\n   </div>\n   <div class="${L.footer}"></div>\n   <div class="${L["timer-progress-bar-container"]}">\n     <div class="${L["timer-progress-bar"]}"></div>\n   </div>\n </div>\n`.replace(
        /(^|\n)\s*/g,
        ""
      ),
    Oe = () => {
      T.currentInstance && T.currentInstance.resetValidationMessage();
    },
    Le = (e) => {
      const t = (() => {
        const e = H();
        return (
          !!e &&
          (e.remove(),
          fe(
            [document.documentElement, document.body],
            [L["no-backdrop"], L["toast-shown"], L["has-column"]]
          ),
          !0)
        );
      })();
      if ("undefined" == typeof window || "undefined" == typeof document)
        return void M("SweetAlert2 requires document to initialize");
      const n = document.createElement("div");
      (n.className = L.container),
        t && we(n, L["no-transition"]),
        de(n, Pe),
        (n.dataset.swal2Theme = e.theme);
      const r = ((e) => {
        if ("string" == typeof e) {
          const t = document.querySelector(e);
          if (!t) throw new Error(`Target element "${e}" not found`);
          return t;
        }
        return e;
      })(e.target || "body");
      r.appendChild(n),
        e.topLayer && (n.setAttribute("popover", ""), n.showPopover()),
        ((e) => {
          const t = W();
          t &&
            (t.setAttribute("role", e.toast ? "alert" : "dialog"),
            t.setAttribute("aria-live", e.toast ? "polite" : "assertive"),
            e.toast || t.setAttribute("aria-modal", "true"));
        })(e),
        ((e) => {
          "rtl" === window.getComputedStyle(e).direction &&
            (we(H(), L.rtl), (T.isRTL = !0));
        })(r),
        (() => {
          const e = W();
          if (!e) return;
          const t = ve(e, L.input),
            n = ve(e, L.file),
            r = e.querySelector(`.${L.range} input`),
            a = e.querySelector(`.${L.range} output`),
            o = ve(e, L.select),
            i = e.querySelector(`.${L.checkbox} input`),
            s = ve(e, L.textarea);
          t && (t.oninput = Oe),
            n && (n.onchange = Oe),
            o && (o.onchange = Oe),
            i && (i.onchange = Oe),
            s && (s.oninput = Oe),
            r &&
              a &&
              ((r.oninput = () => {
                Oe(), (a.value = r.value);
              }),
              (r.onchange = () => {
                Oe(), (a.value = r.value);
              }));
        })();
    },
    Re = (e, t) => {
      e instanceof HTMLElement
        ? t.appendChild(e)
        : "object" == typeof e
        ? xe(e, t)
        : e && de(t, e);
    },
    xe = (e, t) => {
      "jquery" in e ? Ne(t, e) : de(t, e.toString());
    },
    Ne = (e, t) => {
      if (((e.textContent = ""), 0 in t))
        for (let n = 0; n in t; n++) e.appendChild(t[n].cloneNode(!0));
      else e.appendChild(t.cloneNode(!0));
    },
    De = (e, t) => {
      const n = re(),
        r = ne();
      n &&
        r &&
        (t.showConfirmButton || t.showDenyButton || t.showCancelButton
          ? ye(n)
          : Ee(n),
        he(n, t, "actions"),
        (function (e, t, n) {
          const r = Q(),
            a = te(),
            o = ee();
          if (!r || !a || !o) return;
          $e(r, "confirm", n),
            $e(a, "deny", n),
            $e(o, "cancel", n),
            (function (e, t, n, r) {
              if (!r.buttonsStyling) return void fe([e, t, n], L.styled);
              we([e, t, n], L.styled),
                r.confirmButtonColor &&
                  e.style.setProperty(
                    "--swal2-confirm-button-background-color",
                    r.confirmButtonColor
                  );
              r.denyButtonColor &&
                t.style.setProperty(
                  "--swal2-deny-button-background-color",
                  r.denyButtonColor
                );
              r.cancelButtonColor &&
                n.style.setProperty(
                  "--swal2-cancel-button-background-color",
                  r.cancelButtonColor
                );
              Me(e), Me(t), Me(n);
            })(r, a, o, n),
            n.reverseButtons &&
              (n.toast
                ? (e.insertBefore(o, r), e.insertBefore(a, r))
                : (e.insertBefore(o, t),
                  e.insertBefore(a, t),
                  e.insertBefore(r, t)));
        })(n, r, t),
        de(r, t.loaderHtml || ""),
        he(r, t, "loader"));
    };
  function Me(e) {
    const t = window.getComputedStyle(e);
    if (t.getPropertyValue("--swal2-action-button-focus-box-shadow")) return;
    const n = t.backgroundColor.replace(
      /rgba?\((\d+), (\d+), (\d+).*/,
      "rgba($1, $2, $3, 0.5)"
    );
    e.style.setProperty(
      "--swal2-action-button-focus-box-shadow",
      t.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/, ` ${n}`)
    );
  }
  function $e(e, t, n) {
    const r = N(t);
    Ie(e, n[`show${r}Button`], "inline-block"),
      de(e, n[`${t}ButtonText`] || ""),
      e.setAttribute("aria-label", n[`${t}ButtonAriaLabel`] || ""),
      (e.className = L[t]),
      he(e, n, `${t}Button`);
  }
  const Ve = (e, t) => {
    const n = H();
    n &&
      (!(function (e, t) {
        "string" == typeof t
          ? (e.style.background = t)
          : t ||
            we([document.documentElement, document.body], L["no-backdrop"]);
      })(n, t.backdrop),
      (function (e, t) {
        if (!t) return;
        t in L
          ? we(e, L[t])
          : (D('The "position" parameter is not valid, defaulting to "center"'),
            we(e, L.center));
      })(n, t.position),
      (function (e, t) {
        if (!t) return;
        we(e, L[`grow-${t}`]);
      })(n, t.grow),
      he(n, t, "container"));
  };
  var Ue = {
    innerParams: new WeakMap(),
    domCache: new WeakMap(),
    focusedElement: new WeakMap(),
  };
  const Be = [
      "input",
      "file",
      "range",
      "select",
      "radio",
      "checkbox",
      "textarea",
    ],
    je = (e) => {
      if (!e.input) return;
      if (!qe[e.input])
        return void M(
          `Unexpected type of input! Expected ${Object.keys(qe).join(
            " | "
          )}, got "${e.input}"`
        );
      const t = We(e.input);
      if (!t) return;
      const n = qe[e.input](t, e);
      ye(t),
        e.inputAutoFocus &&
          setTimeout(() => {
            me(n);
          });
    },
    Ge = (e, t) => {
      const n = W();
      if (!n) return;
      const r = pe(n, e);
      if (r) {
        ((e) => {
          for (let t = 0; t < e.attributes.length; t++) {
            const n = e.attributes[t].name;
            ["id", "type", "value", "style"].includes(n) ||
              e.removeAttribute(n);
          }
        })(r);
        for (const e in t) r.setAttribute(e, t[e]);
      }
    },
    He = (e) => {
      if (!e.input) return;
      const t = We(e.input);
      t && he(t, e, "input");
    },
    Fe = (e, t) => {
      !e.placeholder &&
        t.inputPlaceholder &&
        (e.placeholder = t.inputPlaceholder);
    },
    ze = (e, t, n) => {
      if (n.inputLabel) {
        const r = document.createElement("label"),
          a = L["input-label"];
        r.setAttribute("for", e.id),
          (r.className = a),
          "object" == typeof n.customClass && we(r, n.customClass.inputLabel),
          (r.innerText = n.inputLabel),
          t.insertAdjacentElement("beforebegin", r);
      }
    },
    We = (e) => {
      const t = W();
      if (t) return ve(t, L[e] || L.input);
    },
    Ke = (e, t) => {
      ["string", "number"].includes(typeof t)
        ? (e.value = `${t}`)
        : G(t) ||
          D(
            `Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t}"`
          );
    },
    qe = {};
  (qe.text =
    qe.email =
    qe.password =
    qe.number =
    qe.tel =
    qe.url =
    qe.search =
    qe.date =
    qe["datetime-local"] =
    qe.time =
    qe.week =
    qe.month =
      (e, t) => {
        const n = e;
        return (
          Ke(n, t.inputValue), ze(n, n, t), Fe(n, t), (n.type = t.input), n
        );
      }),
    (qe.file = (e, t) => {
      const n = e;
      return ze(n, n, t), Fe(n, t), n;
    }),
    (qe.range = (e, t) => {
      const n = e,
        r = n.querySelector("input"),
        a = n.querySelector("output");
      return (
        r && (Ke(r, t.inputValue), (r.type = t.input), ze(r, e, t)),
        a && Ke(a, t.inputValue),
        e
      );
    }),
    (qe.select = (e, t) => {
      const n = e;
      if (((n.textContent = ""), t.inputPlaceholder)) {
        const e = document.createElement("option");
        de(e, t.inputPlaceholder),
          (e.value = ""),
          (e.disabled = !0),
          (e.selected = !0),
          n.appendChild(e);
      }
      return ze(n, n, t), n;
    }),
    (qe.radio = (e) => ((e.textContent = ""), e)),
    (qe.checkbox = (e, t) => {
      const n = W();
      if (!n) throw new Error("Popup not found");
      const r = pe(n, "checkbox");
      if (!r) throw new Error("Checkbox input not found");
      (r.value = "1"), (r.checked = Boolean(t.inputValue));
      const a = e.querySelector("span");
      if (a) {
        const e = t.inputPlaceholder || t.inputLabel;
        e && de(a, e);
      }
      return r;
    }),
    (qe.textarea = (e, t) => {
      const n = e;
      Ke(n, t.inputValue), Fe(n, t), ze(n, n, t);
      return (
        setTimeout(() => {
          if ("MutationObserver" in window) {
            const e = W();
            if (!e) return;
            const r = parseInt(window.getComputedStyle(e).width);
            new MutationObserver(() => {
              if (!document.body.contains(n)) return;
              const e =
                n.offsetWidth +
                ((a = n),
                parseInt(window.getComputedStyle(a).marginLeft) +
                  parseInt(window.getComputedStyle(a).marginRight));
              var a;
              const o = W();
              o &&
                (e > r ? (o.style.width = `${e}px`) : be(o, "width", t.width));
            }).observe(n, { attributes: !0, attributeFilter: ["style"] });
          }
        }),
        n
      );
    });
  const Je = (e, t) => {
      const n = J();
      n &&
        (_e(n),
        he(n, t, "htmlContainer"),
        t.html
          ? (Re(t.html, n), ye(n, "block"))
          : t.text
          ? ((n.textContent = t.text), ye(n, "block"))
          : Ee(n),
        ((e, t) => {
          const n = W();
          if (!n) return;
          const r = Ue.innerParams.get(e),
            a = !r || t.input !== r.input;
          Be.forEach((e) => {
            const r = ve(n, L[e]);
            r && (Ge(e, t.inputAttributes), (r.className = L[e]), a && Ee(r));
          }),
            t.input && (a && je(t), He(t));
        })(e, t));
    },
    Xe = (e, t) => {
      for (const [n, r] of Object.entries(R)) t.icon !== n && fe(e, r);
      we(e, t.icon && R[t.icon]), Qe(e, t), Ye(), he(e, t, "icon");
    },
    Ye = () => {
      const e = W();
      if (!e) return;
      const t = window.getComputedStyle(e).getPropertyValue("background-color"),
        n = e.querySelectorAll(
          "[class^=swal2-success-circular-line], .swal2-success-fix"
        );
      for (let r = 0; r < n.length; r++) n[r].style.backgroundColor = t;
    },
    Ze = (e, t) => {
      if (!t.icon && !t.iconHtml) return;
      let n = e.innerHTML,
        r = "";
      if (t.iconHtml) r = et(t.iconHtml);
      else if ("success" === t.icon)
        (r = ((e) =>
          `\n  ${
            e.animation
              ? '<div class="swal2-success-circular-line-left"></div>'
              : ""
          }\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div>\n  ${
            e.animation ? '<div class="swal2-success-fix"></div>' : ""
          }\n  ${
            e.animation
              ? '<div class="swal2-success-circular-line-right"></div>'
              : ""
          }\n`)(t)),
          (n = n.replace(/ style=".*?"/g, ""));
      else if ("error" === t.icon)
        r =
          '\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n';
      else if (t.icon) {
        r = et({ question: "?", warning: "!", info: "i" }[t.icon]);
      }
      n.trim() !== r.trim() && de(e, r);
    },
    Qe = (e, t) => {
      if (t.iconColor) {
        (e.style.color = t.iconColor), (e.style.borderColor = t.iconColor);
        for (const n of [
          ".swal2-success-line-tip",
          ".swal2-success-line-long",
          ".swal2-x-mark-line-left",
          ".swal2-x-mark-line-right",
        ])
          ke(e, n, "background-color", t.iconColor);
        ke(e, ".swal2-success-ring", "border-color", t.iconColor);
      }
    },
    et = (e) => `<div class="${L["icon-content"]}">${e}</div>`;
  let tt = !1,
    nt = 0,
    rt = 0,
    at = 0,
    ot = 0;
  const it = (e) => {
      const t = W();
      if (!t) return;
      const n = K();
      if (e.target === t || (n && n.contains(e.target))) {
        tt = !0;
        const n = ct(e);
        (nt = n.clientX),
          (rt = n.clientY),
          (at = parseInt(t.style.insetInlineStart) || 0),
          (ot = parseInt(t.style.insetBlockStart) || 0),
          we(t, "swal2-dragging");
      }
    },
    st = (e) => {
      const t = W();
      if (t && tt) {
        let { clientX: n, clientY: r } = ct(e);
        const a = n - nt;
        (t.style.insetInlineStart = `${at + (T.isRTL ? -a : a)}px`),
          (t.style.insetBlockStart = `${ot + (r - rt)}px`);
      }
    },
    lt = () => {
      const e = W();
      (tt = !1), fe(e, "swal2-dragging");
    },
    ct = (e) => {
      let t = 0,
        n = 0;
      return (
        e.type.startsWith("mouse")
          ? ((t = e.clientX), (n = e.clientY))
          : e.type.startsWith("touch") &&
            ((t = e.touches[0].clientX), (n = e.touches[0].clientY)),
        { clientX: t, clientY: n }
      );
    },
    dt = (e, t) => {
      const n = H(),
        r = W();
      if (n && r) {
        if (t.toast) {
          be(n, "width", t.width), (r.style.width = "100%");
          const e = ne();
          e && r.insertBefore(e, K());
        } else be(r, "width", t.width);
        be(r, "padding", t.padding),
          t.color && (r.style.color = t.color),
          t.background && (r.style.background = t.background),
          Ee(Z()),
          ut(r, t),
          t.draggable && !t.toast
            ? (we(r, L.draggable),
              ((e) => {
                e.addEventListener("mousedown", it),
                  document.body.addEventListener("mousemove", st),
                  e.addEventListener("mouseup", lt),
                  e.addEventListener("touchstart", it),
                  document.body.addEventListener("touchmove", st),
                  e.addEventListener("touchend", lt);
              })(r))
            : (fe(r, L.draggable),
              ((e) => {
                e.removeEventListener("mousedown", it),
                  document.body.removeEventListener("mousemove", st),
                  e.removeEventListener("mouseup", lt),
                  e.removeEventListener("touchstart", it),
                  document.body.removeEventListener("touchmove", st),
                  e.removeEventListener("touchend", lt);
              })(r));
      }
    },
    ut = (e, t) => {
      const n = t.showClass || {};
      (e.className = `${L.popup} ${Se(e) ? n.popup : ""}`),
        t.toast
          ? (we([document.documentElement, document.body], L["toast-shown"]),
            we(e, L.toast))
          : we(e, L.modal),
        he(e, t, "popup"),
        "string" == typeof t.customClass && we(e, t.customClass),
        t.icon && we(e, L[`icon-${t.icon}`]);
    },
    ht = (e) => {
      const t = document.createElement("li");
      return we(t, L["progress-step"]), de(t, e), t;
    },
    pt = (e) => {
      const t = document.createElement("li");
      return (
        we(t, L["progress-step-line"]),
        e.progressStepsDistance && be(t, "width", e.progressStepsDistance),
        t
      );
    },
    mt = (e, t) => {
      var n;
      dt(0, t),
        Ve(0, t),
        ((e, t) => {
          const n = Y();
          if (!n) return;
          const { progressSteps: r, currentProgressStep: a } = t;
          r && 0 !== r.length && void 0 !== a
            ? (ye(n),
              (n.textContent = ""),
              a >= r.length &&
                D(
                  "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"
                ),
              r.forEach((e, o) => {
                const i = ht(e);
                if (
                  (n.appendChild(i),
                  o === a && we(i, L["active-progress-step"]),
                  o !== r.length - 1)
                ) {
                  const e = pt(t);
                  n.appendChild(e);
                }
              }))
            : Ee(n);
        })(0, t),
        ((e, t) => {
          const n = Ue.innerParams.get(e),
            r = K();
          if (!r) return;
          if (n && t.icon === n.icon) return Ze(r, t), void Xe(r, t);
          if (!t.icon && !t.iconHtml) return void Ee(r);
          if (t.icon && -1 === Object.keys(R).indexOf(t.icon))
            return (
              M(
                `Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${t.icon}"`
              ),
              void Ee(r)
            );
          ye(r),
            Ze(r, t),
            Xe(r, t),
            we(r, t.showClass && t.showClass.icon),
            window
              .matchMedia("(prefers-color-scheme: dark)")
              .addEventListener("change", Ye);
        })(e, t),
        ((e, t) => {
          const n = X();
          n &&
            (t.imageUrl
              ? (ye(n, ""),
                n.setAttribute("src", t.imageUrl),
                n.setAttribute("alt", t.imageAlt || ""),
                be(n, "width", t.imageWidth),
                be(n, "height", t.imageHeight),
                (n.className = L.image),
                he(n, t, "image"))
              : Ee(n));
        })(0, t),
        ((e, t) => {
          const n = q();
          n &&
            (_e(n),
            Ie(n, Boolean(t.title || t.titleText), "block"),
            t.title && Re(t.title, n),
            t.titleText && (n.innerText = t.titleText),
            he(n, t, "title"));
        })(0, t),
        ((e, t) => {
          const n = ie();
          n &&
            (de(n, t.closeButtonHtml || ""),
            he(n, t, "closeButton"),
            Ie(n, t.showCloseButton),
            n.setAttribute("aria-label", t.closeButtonAriaLabel || ""));
        })(0, t),
        Je(e, t),
        De(0, t),
        ((e, t) => {
          const n = ae();
          n &&
            (_e(n),
            Ie(n, Boolean(t.footer), "block"),
            t.footer && Re(t.footer, n),
            he(n, t, "footer"));
        })(0, t);
      const r = W();
      "function" == typeof t.didRender && r && t.didRender(r),
        null === (n = T.eventEmitter) || void 0 === n || n.emit("didRender", r);
    },
    gt = () => {
      var e;
      return null === (e = Q()) || void 0 === e ? void 0 : e.click();
    },
    wt = Object.freeze({
      cancel: "cancel",
      backdrop: "backdrop",
      close: "close",
      esc: "esc",
      timer: "timer",
    }),
    ft = (e) => {
      if (e.keydownTarget && e.keydownHandlerAdded && e.keydownHandler) {
        const t = e.keydownHandler;
        e.keydownTarget.removeEventListener("keydown", t, {
          capture: e.keydownListenerCapture,
        }),
          (e.keydownHandlerAdded = !1);
      }
    },
    vt = (e, t) => {
      var n;
      const r = se();
      if (r.length)
        return (
          -2 === (e += t) && (e = r.length - 1),
          e === r.length ? (e = 0) : -1 === e && (e = r.length - 1),
          void r[e].focus()
        );
      null === (n = W()) || void 0 === n || n.focus();
    },
    bt = ["ArrowRight", "ArrowDown"],
    yt = ["ArrowLeft", "ArrowUp"],
    Et = (e, t, n) => {
      e &&
        (t.isComposing ||
          229 === t.keyCode ||
          (e.stopKeydownPropagation && t.stopPropagation(),
          "Enter" === t.key
            ? _t(t, e)
            : "Tab" === t.key
            ? kt(t)
            : [...bt, ...yt].includes(t.key)
            ? It(t.key)
            : "Escape" === t.key && St(t, e, n)));
    },
    _t = (e, t) => {
      if (!U(t.allowEnterKey)) return;
      const n = W();
      if (!n || !t.input) return;
      const r = pe(n, t.input);
      if (
        e.target &&
        r &&
        e.target instanceof HTMLElement &&
        e.target.outerHTML === r.outerHTML
      ) {
        if (["textarea", "file"].includes(t.input)) return;
        gt(), e.preventDefault();
      }
    },
    kt = (e) => {
      const t = e.target,
        n = se();
      let r = -1;
      for (let a = 0; a < n.length; a++)
        if (t === n[a]) {
          r = a;
          break;
        }
      e.shiftKey ? vt(r, -1) : vt(r, 1),
        e.stopPropagation(),
        e.preventDefault();
    },
    It = (e) => {
      const t = re(),
        n = Q(),
        r = te(),
        a = ee();
      if (!(t && n && r && a)) return;
      const o = [n, r, a];
      if (
        document.activeElement instanceof HTMLElement &&
        !o.includes(document.activeElement)
      )
        return;
      const i = bt.includes(e)
        ? "nextElementSibling"
        : "previousElementSibling";
      let s = document.activeElement;
      if (s) {
        for (let e = 0; e < t.children.length; e++) {
          if (((s = s[i]), !s)) return;
          if (s instanceof HTMLButtonElement && Se(s)) break;
        }
        s instanceof HTMLButtonElement && s.focus();
      }
    },
    St = (e, t, n) => {
      e.preventDefault(), U(t.allowEscapeKey) && n(wt.esc);
    };
  var At = {
    swalPromiseResolve: new WeakMap(),
    swalPromiseReject: new WeakMap(),
  };
  const Ct = () => {
      Array.from(document.body.children).forEach((e) => {
        e.hasAttribute("data-previous-aria-hidden")
          ? (e.setAttribute(
              "aria-hidden",
              e.getAttribute("data-previous-aria-hidden") || ""
            ),
            e.removeAttribute("data-previous-aria-hidden"))
          : e.removeAttribute("aria-hidden");
      });
    },
    Tt = "undefined" != typeof window && Boolean(window.GestureEvent),
    Pt = () => {
      const e = H();
      if (!e) return;
      let t;
      (e.ontouchstart = (e) => {
        t = Ot(e);
      }),
        (e.ontouchmove = (e) => {
          t && (e.preventDefault(), e.stopPropagation());
        });
    },
    Ot = (e) => {
      const t = e.target,
        n = H(),
        r = J();
      return (
        !(!n || !r) &&
        !Lt(e) &&
        !Rt(e) &&
        (t === n ||
          !(
            Ae(n) ||
            !(t instanceof HTMLElement) ||
            ((e, t) => {
              let n = e;
              for (; n && n !== t; ) {
                if (Ae(n)) return !0;
                n = n.parentElement;
              }
              return !1;
            })(t, r) ||
            "INPUT" === t.tagName ||
            "TEXTAREA" === t.tagName ||
            (Ae(r) && r.contains(t))
          ))
      );
    },
    Lt = (e) =>
      Boolean(
        e.touches && e.touches.length && "stylus" === e.touches[0].touchType
      ),
    Rt = (e) => e.touches && e.touches.length > 1;
  let xt = null;
  const Nt = (e) => {
    null === xt &&
      (document.body.scrollHeight > window.innerHeight || "scroll" === e) &&
      ((xt = parseInt(
        window.getComputedStyle(document.body).getPropertyValue("padding-right")
      )),
      (document.body.style.paddingRight = `${
        xt +
        (() => {
          const e = document.createElement("div");
          (e.className = L["scrollbar-measure"]), document.body.appendChild(e);
          const t = e.getBoundingClientRect().width - e.clientWidth;
          return document.body.removeChild(e), t;
        })()
      }px`));
  };
  function Dt(e, t, n, r) {
    ce() ? Ht(e, r) : (P(n).then(() => Ht(e, r)), ft(T)),
      Tt
        ? (t.setAttribute("style", "display:none !important"),
          t.removeAttribute("class"),
          (t.innerHTML = ""))
        : t.remove(),
      le() &&
        (null !== xt &&
          ((document.body.style.paddingRight = `${xt}px`), (xt = null)),
        (() => {
          if (ue(document.body, L.iosfix)) {
            const e = parseInt(document.body.style.top, 10);
            fe(document.body, L.iosfix),
              (document.body.style.top = ""),
              (document.body.scrollTop = -1 * e);
          }
        })(),
        Ct()),
      fe(
        [document.documentElement, document.body],
        [L.shown, L["height-auto"], L["no-backdrop"], L["toast-shown"]]
      );
  }
  function Mt(e) {
    e = Bt(e);
    const t = At.swalPromiseResolve.get(this),
      n = $t(this);
    this.isAwaitingPromise ? e.isDismissed || (Ut(this), t(e)) : n && t(e);
  }
  const $t = (e) => {
    const t = W();
    if (!t) return !1;
    const n = Ue.innerParams.get(e);
    if (!n || ue(t, n.hideClass.popup)) return !1;
    fe(t, n.showClass.popup), we(t, n.hideClass.popup);
    const r = H();
    return (
      fe(r, n.showClass.backdrop), we(r, n.hideClass.backdrop), jt(e, t, n), !0
    );
  };
  function Vt(e) {
    const t = At.swalPromiseReject.get(this);
    Ut(this), t && t(e);
  }
  const Ut = (e) => {
      e.isAwaitingPromise &&
        (delete e.isAwaitingPromise, Ue.innerParams.get(e) || e._destroy());
    },
    Bt = (e) =>
      void 0 === e
        ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
        : Object.assign({ isConfirmed: !1, isDenied: !1, isDismissed: !1 }, e),
    jt = (e, t, n) => {
      var r;
      const a = H(),
        o = Ce(t);
      "function" == typeof n.willClose && n.willClose(t),
        null === (r = T.eventEmitter) || void 0 === r || r.emit("willClose", t),
        o && a
          ? Gt(e, t, a, Boolean(n.returnFocus), n.didClose)
          : a && Dt(e, a, Boolean(n.returnFocus), n.didClose);
    },
    Gt = (e, t, n, r, a) => {
      T.swalCloseEventFinishedCallback = Dt.bind(null, e, n, r, a);
      const o = function (e) {
        var n;
        e.target === t &&
          (null === (n = T.swalCloseEventFinishedCallback) ||
            void 0 === n ||
            n.call(T),
          delete T.swalCloseEventFinishedCallback,
          t.removeEventListener("animationend", o),
          t.removeEventListener("transitionend", o));
      };
      t.addEventListener("animationend", o),
        t.addEventListener("transitionend", o);
    },
    Ht = (e, t) => {
      setTimeout(() => {
        var n;
        "function" == typeof t && t.bind(e.params)(),
          null === (n = T.eventEmitter) || void 0 === n || n.emit("didClose"),
          e._destroy && e._destroy();
      });
    },
    Ft = (e) => {
      let t = W();
      if ((t || new kr(), (t = W()), !t)) return;
      const n = ne();
      ce() ? Ee(K()) : zt(t, e),
        ye(n),
        t.setAttribute("data-loading", "true"),
        t.setAttribute("aria-busy", "true"),
        t.focus();
    },
    zt = (e, t) => {
      const n = re(),
        r = ne();
      n &&
        r &&
        (!t && Se(Q()) && (t = Q()),
        ye(n),
        t &&
          (Ee(t),
          r.setAttribute("data-button-to-replace", t.className),
          n.insertBefore(r, t)),
        we([e, n], L.loading));
    },
    Wt = (e) => (e.checked ? 1 : 0),
    Kt = (e) => (e.checked ? e.value : null),
    qt = (e) =>
      e.files && e.files.length
        ? null !== e.getAttribute("multiple")
          ? e.files
          : e.files[0]
        : null,
    Jt = (e, t) => {
      const n = W();
      if (!n) return;
      const r = (e) => {
        "select" === t.input
          ? (function (e, t, n) {
              const r = ve(e, L.select);
              if (!r) return;
              const a = (e, t, r) => {
                const a = document.createElement("option");
                (a.value = r),
                  de(a, t),
                  (a.selected = Zt(r, n.inputValue)),
                  e.appendChild(a);
              };
              t.forEach((e) => {
                const t = e[0],
                  n = e[1];
                if (Array.isArray(n)) {
                  const e = document.createElement("optgroup");
                  (e.label = t),
                    (e.disabled = !1),
                    r.appendChild(e),
                    n.forEach((t) => a(e, t[1], t[0]));
                } else a(r, n, t);
              }),
                r.focus();
            })(n, Yt(e), t)
          : "radio" === t.input &&
            (function (e, t, n) {
              const r = ve(e, L.radio);
              if (!r) return;
              t.forEach((e) => {
                const t = e[0],
                  a = e[1],
                  o = document.createElement("input"),
                  i = document.createElement("label");
                (o.type = "radio"),
                  (o.name = L.radio),
                  (o.value = t),
                  Zt(t, n.inputValue) && (o.checked = !0);
                const s = document.createElement("span");
                de(s, a),
                  (s.className = L.label),
                  i.appendChild(o),
                  i.appendChild(s),
                  r.appendChild(i);
              });
              const a = r.querySelectorAll("input");
              a.length && a[0].focus();
            })(n, Yt(e), t);
      };
      B(t.inputOptions) || G(t.inputOptions)
        ? (Ft(Q()),
          j(t.inputOptions).then((t) => {
            e.hideLoading(), r(t);
          }))
        : "object" == typeof t.inputOptions
        ? r(t.inputOptions)
        : M(
            "Unexpected type of inputOptions! Expected object, Map or Promise, got " +
              typeof t.inputOptions
          );
    },
    Xt = (e, t) => {
      const n = e.getInput();
      n &&
        (Ee(n),
        j(t.inputValue)
          .then((r) => {
            (n.value = "number" === t.input ? `${parseFloat(r) || 0}` : `${r}`),
              ye(n),
              n.focus(),
              e.hideLoading();
          })
          .catch((t) => {
            M(`Error in inputValue promise: ${t}`),
              (n.value = ""),
              ye(n),
              n.focus(),
              e.hideLoading();
          }));
    };
  const Yt = (e) => {
      const t = [];
      return (
        e instanceof Map
          ? e.forEach((e, n) => {
              let r = e;
              "object" == typeof r && (r = Yt(r)), t.push([n, r]);
            })
          : Object.keys(e).forEach((n) => {
              let r = e[n];
              "object" == typeof r && (r = Yt(r)), t.push([n, r]);
            }),
        t
      );
    },
    Zt = (e, t) => Boolean(t) && null != t && t.toString() === e.toString(),
    Qt = (e, t) => {
      const n = Ue.innerParams.get(e);
      if (!n.input)
        return void M(
          `The "input" parameter is needed to be set when using returnInputValueOn${N(
            t
          )}`
        );
      const r = e.getInput(),
        a = ((e, t) => {
          const n = e.getInput();
          if (!n) return null;
          switch (t.input) {
            case "checkbox":
              return Wt(n);
            case "radio":
              return Kt(n);
            case "file":
              return qt(n);
            default:
              return t.inputAutoTrim ? n.value.trim() : n.value;
          }
        })(e, n);
      n.inputValidator
        ? en(e, a, t)
        : r && !r.checkValidity()
        ? (e.enableButtons(),
          e.showValidationMessage(n.validationMessage || r.validationMessage))
        : "deny" === t
        ? tn(e, a)
        : an(e, a);
    },
    en = (e, t, n) => {
      const r = Ue.innerParams.get(e);
      e.disableInput();
      Promise.resolve()
        .then(() => j(r.inputValidator(t, r.validationMessage)))
        .then((r) => {
          e.enableButtons(),
            e.enableInput(),
            r ? e.showValidationMessage(r) : "deny" === n ? tn(e, t) : an(e, t);
        });
    },
    tn = (e, t) => {
      const n = Ue.innerParams.get(e);
      if ((n.showLoaderOnDeny && Ft(te()), n.preDeny)) {
        e.isAwaitingPromise = !0;
        Promise.resolve()
          .then(() => j(n.preDeny(t, n.validationMessage)))
          .then((n) => {
            !1 === n
              ? (e.hideLoading(), Ut(e))
              : e.close({ isDenied: !0, value: void 0 === n ? t : n });
          })
          .catch((t) => rn(e, t));
      } else e.close({ isDenied: !0, value: t });
    },
    nn = (e, t) => {
      e.close({ isConfirmed: !0, value: t });
    },
    rn = (e, t) => {
      e.rejectPromise(t);
    },
    an = (e, t) => {
      const n = Ue.innerParams.get(e);
      if ((n.showLoaderOnConfirm && Ft(), n.preConfirm)) {
        e.resetValidationMessage(), (e.isAwaitingPromise = !0);
        Promise.resolve()
          .then(() => j(n.preConfirm(t, n.validationMessage)))
          .then((n) => {
            Se(Z()) || !1 === n
              ? (e.hideLoading(), Ut(e))
              : nn(e, void 0 === n ? t : n);
          })
          .catch((t) => rn(e, t));
      } else nn(e, t);
    };
  function on() {
    const e = Ue.innerParams.get(this);
    if (!e) return;
    const t = Ue.domCache.get(this);
    Ee(t.loader),
      ce() ? e.icon && ye(K()) : sn(t),
      fe([t.popup, t.actions], L.loading),
      t.popup.removeAttribute("aria-busy"),
      t.popup.removeAttribute("data-loading"),
      (t.confirmButton.disabled = !1),
      (t.denyButton.disabled = !1),
      (t.cancelButton.disabled = !1);
    const n = Ue.focusedElement.get(this);
    n instanceof HTMLElement && (n.focus(), Ue.focusedElement.delete(this));
  }
  const sn = (e) => {
    const t = e.loader.getAttribute("data-button-to-replace"),
      n = t ? e.popup.getElementsByClassName(t) : [];
    n.length
      ? ye(n[0], "inline-block")
      : Se(Q()) || Se(te()) || Se(ee()) || Ee(e.actions);
  };
  function ln() {
    const e = Ue.innerParams.get(this),
      t = Ue.domCache.get(this);
    return t ? pe(t.popup, e.input) : null;
  }
  function cn(e, t, n) {
    const r = Ue.domCache.get(e);
    t.forEach((e) => {
      r[e].disabled = n;
    });
  }
  function dn(e, t) {
    const n = W();
    if (n && e)
      if ("radio" === e.type) {
        const e = n.querySelectorAll(`[name="${L.radio}"]`);
        for (let n = 0; n < e.length; n++) e[n].disabled = t;
      } else e.disabled = t;
  }
  function un() {
    cn(this, ["confirmButton", "denyButton", "cancelButton"], !1);
    const e = Ue.focusedElement.get(this);
    e instanceof HTMLElement && (e.focus(), Ue.focusedElement.delete(this));
  }
  function hn() {
    Ue.focusedElement.set(this, document.activeElement),
      cn(this, ["confirmButton", "denyButton", "cancelButton"], !0);
  }
  function pn() {
    dn(this.getInput(), !1);
  }
  function mn() {
    dn(this.getInput(), !0);
  }
  function gn(e) {
    const t = Ue.domCache.get(this),
      n = Ue.innerParams.get(this);
    de(t.validationMessage, e),
      (t.validationMessage.className = L["validation-message"]),
      n.customClass &&
        n.customClass.validationMessage &&
        we(t.validationMessage, n.customClass.validationMessage),
      ye(t.validationMessage);
    const r = this.getInput();
    r &&
      (r.setAttribute("aria-invalid", "true"),
      r.setAttribute("aria-describedby", L["validation-message"]),
      me(r),
      we(r, L.inputerror));
  }
  function wn() {
    const e = Ue.domCache.get(this);
    e.validationMessage && Ee(e.validationMessage);
    const t = this.getInput();
    t &&
      (t.removeAttribute("aria-invalid"),
      t.removeAttribute("aria-describedby"),
      fe(t, L.inputerror));
  }
  const fn = {
      title: "",
      titleText: "",
      text: "",
      html: "",
      footer: "",
      icon: void 0,
      iconColor: void 0,
      iconHtml: void 0,
      template: void 0,
      toast: !1,
      draggable: !1,
      animation: !0,
      theme: "light",
      showClass: {
        popup: "swal2-show",
        backdrop: "swal2-backdrop-show",
        icon: "swal2-icon-show",
      },
      hideClass: {
        popup: "swal2-hide",
        backdrop: "swal2-backdrop-hide",
        icon: "swal2-icon-hide",
      },
      customClass: {},
      target: "body",
      color: void 0,
      backdrop: !0,
      heightAuto: !0,
      allowOutsideClick: !0,
      allowEscapeKey: !0,
      allowEnterKey: !0,
      stopKeydownPropagation: !0,
      keydownListenerCapture: !1,
      showConfirmButton: !0,
      showDenyButton: !1,
      showCancelButton: !1,
      preConfirm: void 0,
      preDeny: void 0,
      confirmButtonText: "OK",
      confirmButtonAriaLabel: "",
      confirmButtonColor: void 0,
      denyButtonText: "No",
      denyButtonAriaLabel: "",
      denyButtonColor: void 0,
      cancelButtonText: "Cancel",
      cancelButtonAriaLabel: "",
      cancelButtonColor: void 0,
      buttonsStyling: !0,
      reverseButtons: !1,
      focusConfirm: !0,
      focusDeny: !1,
      focusCancel: !1,
      returnFocus: !0,
      showCloseButton: !1,
      closeButtonHtml: "&times;",
      closeButtonAriaLabel: "Close this dialog",
      loaderHtml: "",
      showLoaderOnConfirm: !1,
      showLoaderOnDeny: !1,
      imageUrl: void 0,
      imageWidth: void 0,
      imageHeight: void 0,
      imageAlt: "",
      timer: void 0,
      timerProgressBar: !1,
      width: void 0,
      padding: void 0,
      background: void 0,
      input: void 0,
      inputPlaceholder: "",
      inputLabel: "",
      inputValue: "",
      inputOptions: {},
      inputAutoFocus: !0,
      inputAutoTrim: !0,
      inputAttributes: {},
      inputValidator: void 0,
      returnInputValueOnDeny: !1,
      validationMessage: void 0,
      grow: !1,
      position: "center",
      progressSteps: [],
      currentProgressStep: void 0,
      progressStepsDistance: void 0,
      willOpen: void 0,
      didOpen: void 0,
      didRender: void 0,
      willClose: void 0,
      didClose: void 0,
      didDestroy: void 0,
      scrollbarPadding: !0,
      topLayer: !1,
    },
    vn = [
      "allowEscapeKey",
      "allowOutsideClick",
      "background",
      "buttonsStyling",
      "cancelButtonAriaLabel",
      "cancelButtonColor",
      "cancelButtonText",
      "closeButtonAriaLabel",
      "closeButtonHtml",
      "color",
      "confirmButtonAriaLabel",
      "confirmButtonColor",
      "confirmButtonText",
      "currentProgressStep",
      "customClass",
      "denyButtonAriaLabel",
      "denyButtonColor",
      "denyButtonText",
      "didClose",
      "didDestroy",
      "draggable",
      "footer",
      "hideClass",
      "html",
      "icon",
      "iconColor",
      "iconHtml",
      "imageAlt",
      "imageHeight",
      "imageUrl",
      "imageWidth",
      "preConfirm",
      "preDeny",
      "progressSteps",
      "returnFocus",
      "reverseButtons",
      "showCancelButton",
      "showCloseButton",
      "showConfirmButton",
      "showDenyButton",
      "text",
      "title",
      "titleText",
      "theme",
      "willClose",
    ],
    bn = { allowEnterKey: void 0 },
    yn = [
      "allowOutsideClick",
      "allowEnterKey",
      "backdrop",
      "draggable",
      "focusConfirm",
      "focusDeny",
      "focusCancel",
      "returnFocus",
      "heightAuto",
      "keydownListenerCapture",
    ],
    En = (e) => Object.prototype.hasOwnProperty.call(fn, e),
    _n = (e) => -1 !== vn.indexOf(e),
    kn = (e) => bn[e],
    In = (e) => {
      En(e) || D(`Unknown parameter "${e}"`);
    },
    Sn = (e) => {
      yn.includes(e) && D(`The parameter "${e}" is incompatible with toasts`);
    },
    An = (e) => {
      const t = kn(e);
      t && V(e, t);
    },
    Cn = (e) => {
      !1 === e.backdrop &&
        e.allowOutsideClick &&
        D(
          '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'
        ),
        e.theme &&
          ![
            "light",
            "dark",
            "auto",
            "minimal",
            "borderless",
            "bootstrap-4",
            "bootstrap-4-light",
            "bootstrap-4-dark",
            "bootstrap-5",
            "bootstrap-5-light",
            "bootstrap-5-dark",
            "material-ui",
            "material-ui-light",
            "material-ui-dark",
            "embed-iframe",
            "bulma",
            "bulma-light",
            "bulma-dark",
          ].includes(e.theme) &&
          D(`Invalid theme "${e.theme}"`);
      for (const t in e) In(t), e.toast && Sn(t), An(t);
    };
  function Tn(e) {
    const t = H(),
      n = W(),
      r = Ue.innerParams.get(this);
    if (!n || ue(n, r.hideClass.popup))
      return void D(
        "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
      );
    const a = Pn(e),
      o = Object.assign({}, r, a);
    Cn(o),
      t && (t.dataset.swal2Theme = o.theme),
      mt(this, o),
      Ue.innerParams.set(this, o),
      Object.defineProperties(this, {
        params: {
          value: Object.assign({}, this.params, e),
          writable: !1,
          enumerable: !0,
        },
      });
  }
  const Pn = (e) => {
    const t = {};
    return (
      Object.keys(e).forEach((n) => {
        if (_n(n)) {
          const r = e;
          t[n] = r[n];
        } else D(`Invalid parameter to update: ${n}`);
      }),
      t
    );
  };
  function On() {
    var e;
    const t = Ue.domCache.get(this),
      n = Ue.innerParams.get(this);
    n
      ? (t.popup &&
          T.swalCloseEventFinishedCallback &&
          (T.swalCloseEventFinishedCallback(),
          delete T.swalCloseEventFinishedCallback),
        "function" == typeof n.didDestroy && n.didDestroy(),
        null === (e = T.eventEmitter) || void 0 === e || e.emit("didDestroy"),
        Ln(this))
      : Rn(this);
  }
  const Ln = (e) => {
      Rn(e),
        delete e.params,
        delete T.keydownHandler,
        delete T.keydownTarget,
        delete T.currentInstance;
    },
    Rn = (e) => {
      e.isAwaitingPromise
        ? (xn(Ue, e), (e.isAwaitingPromise = !0))
        : (xn(At, e),
          xn(Ue, e),
          delete e.isAwaitingPromise,
          delete e.disableButtons,
          delete e.enableButtons,
          delete e.getInput,
          delete e.disableInput,
          delete e.enableInput,
          delete e.hideLoading,
          delete e.disableLoading,
          delete e.showValidationMessage,
          delete e.resetValidationMessage,
          delete e.close,
          delete e.closePopup,
          delete e.closeModal,
          delete e.closeToast,
          delete e.rejectPromise,
          delete e.update,
          delete e._destroy);
    },
    xn = (e, t) => {
      for (const n in e) e[n].delete(t);
    };
  var Nn = Object.freeze({
    __proto__: null,
    _destroy: On,
    close: Mt,
    closeModal: Mt,
    closePopup: Mt,
    closeToast: Mt,
    disableButtons: hn,
    disableInput: mn,
    disableLoading: on,
    enableButtons: un,
    enableInput: pn,
    getInput: ln,
    handleAwaitingPromise: Ut,
    hideLoading: on,
    rejectPromise: Vt,
    resetValidationMessage: wn,
    showValidationMessage: gn,
    update: Tn,
  });
  const Dn = (e, t, n) => {
      t.popup.onclick = () => {
        (e && (Mn(e) || e.timer || e.input)) || n(wt.close);
      };
    },
    Mn = (e) =>
      Boolean(
        e.showConfirmButton ||
          e.showDenyButton ||
          e.showCancelButton ||
          e.showCloseButton
      );
  let $n = !1;
  const Vn = (e) => {
      e.popup.onmousedown = () => {
        e.container.onmouseup = function (t) {
          (e.container.onmouseup = () => {}),
            t.target === e.container && ($n = !0);
        };
      };
    },
    Un = (e) => {
      e.container.onmousedown = (t) => {
        t.target === e.container && t.preventDefault(),
          (e.popup.onmouseup = function (t) {
            (e.popup.onmouseup = () => {}),
              (t.target === e.popup ||
                (t.target instanceof HTMLElement &&
                  e.popup.contains(t.target))) &&
                ($n = !0);
          });
      };
    },
    Bn = (e, t, n) => {
      t.container.onclick = (r) => {
        $n
          ? ($n = !1)
          : r.target === t.container &&
            U(e.allowOutsideClick) &&
            n(wt.backdrop);
      };
    },
    jn = (e) =>
      e instanceof Element ||
      ((e) => "object" == typeof e && null !== e && "jquery" in e)(e);
  const Gn = () => {
      if (T.timeout)
        return (
          (() => {
            const e = oe();
            if (!e) return;
            const t = parseInt(window.getComputedStyle(e).width);
            e.style.removeProperty("transition"), (e.style.width = "100%");
            const n = (t / parseInt(window.getComputedStyle(e).width)) * 100;
            e.style.width = `${n}%`;
          })(),
          T.timeout.stop()
        );
    },
    Hn = () => {
      if (T.timeout) {
        const e = T.timeout.start();
        return Te(e), e;
      }
    };
  let Fn = !1;
  const zn = {};
  const Wn = (e) => {
    for (let t = e.target; t && t !== document; t = t.parentNode)
      for (const e in zn) {
        const n = t.getAttribute && t.getAttribute(e);
        if (n) return void zn[e].fire({ template: n });
      }
  };
  T.eventEmitter = new (class {
    constructor() {
      this.events = {};
    }
    _getHandlersByEventName(e) {
      return void 0 === this.events[e] && (this.events[e] = []), this.events[e];
    }
    on(e, t) {
      const n = this._getHandlersByEventName(e);
      n.includes(t) || n.push(t);
    }
    once(e, t) {
      const n = (...r) => {
        this.removeListener(e, n), t.apply(this, r);
      };
      this.on(e, n);
    }
    emit(e, ...t) {
      this._getHandlersByEventName(e).forEach((e) => {
        try {
          e.apply(this, t);
        } catch (n) {
          console.error(n);
        }
      });
    }
    removeListener(e, t) {
      const n = this._getHandlersByEventName(e),
        r = n.indexOf(t);
      r > -1 && n.splice(r, 1);
    }
    removeAllListeners(e) {
      void 0 !== this.events[e] && (this.events[e].length = 0);
    }
    reset() {
      this.events = {};
    }
  })();
  var Kn = Object.freeze({
    __proto__: null,
    argsToParams: (e) => {
      const t = {};
      return (
        "object" != typeof e[0] || jn(e[0])
          ? ["title", "html", "icon"].forEach((n, r) => {
              const a = e[r];
              "string" == typeof a || jn(a)
                ? (t[n] = a)
                : void 0 !== a &&
                  M(
                    `Unexpected type of ${n}! Expected "string" or "Element", got ${typeof a}`
                  );
            })
          : Object.assign(t, e[0]),
        t
      );
    },
    bindClickHandler: function (e = "data-swal-template") {
      (zn[e] = this),
        Fn || (document.body.addEventListener("click", Wn), (Fn = !0));
    },
    clickCancel: () => {
      var e;
      return null === (e = ee()) || void 0 === e ? void 0 : e.click();
    },
    clickConfirm: gt,
    clickDeny: () => {
      var e;
      return null === (e = te()) || void 0 === e ? void 0 : e.click();
    },
    enableLoading: Ft,
    fire: function (...e) {
      return new this(...e);
    },
    getActions: re,
    getCancelButton: ee,
    getCloseButton: ie,
    getConfirmButton: Q,
    getContainer: H,
    getDenyButton: te,
    getFocusableElements: se,
    getFooter: ae,
    getHtmlContainer: J,
    getIcon: K,
    getIconContent: () => z(L["icon-content"]),
    getImage: X,
    getInputLabel: () => z(L["input-label"]),
    getLoader: ne,
    getPopup: W,
    getProgressSteps: Y,
    getTimerLeft: () => T.timeout && T.timeout.getTimerLeft(),
    getTimerProgressBar: oe,
    getTitle: q,
    getValidationMessage: Z,
    increaseTimer: (e) => {
      if (T.timeout) {
        const t = T.timeout.increase(e);
        return Te(t, !0), t;
      }
    },
    isDeprecatedParameter: kn,
    isLoading: () => {
      const e = W();
      return !!e && e.hasAttribute("data-loading");
    },
    isTimerRunning: () => Boolean(T.timeout && T.timeout.isRunning()),
    isUpdatableParameter: _n,
    isValidParameter: En,
    isVisible: () => Se(W()),
    mixin: function (e) {
      return class extends this {
        _main(t, n) {
          return super._main(t, Object.assign({}, e, n));
        }
      };
    },
    off: (e, t) => {
      T.eventEmitter &&
        (e
          ? t
            ? T.eventEmitter.removeListener(e, t)
            : T.eventEmitter.removeAllListeners(e)
          : T.eventEmitter.reset());
    },
    on: (e, t) => {
      T.eventEmitter && T.eventEmitter.on(e, t);
    },
    once: (e, t) => {
      T.eventEmitter && T.eventEmitter.once(e, t);
    },
    resumeTimer: Hn,
    showLoading: Ft,
    stopTimer: Gn,
    toggleTimer: () => {
      const e = T.timeout;
      return e && (e.running ? Gn() : Hn());
    },
  });
  class qn {
    constructor(e, t) {
      (this.callback = e),
        (this.remaining = t),
        (this.running = !1),
        this.start();
    }
    start() {
      return (
        this.running ||
          ((this.running = !0),
          (this.started = new Date()),
          (this.id = setTimeout(this.callback, this.remaining))),
        this.remaining
      );
    }
    stop() {
      return (
        this.started &&
          this.running &&
          ((this.running = !1),
          clearTimeout(this.id),
          (this.remaining -= new Date().getTime() - this.started.getTime())),
        this.remaining
      );
    }
    increase(e) {
      const t = this.running;
      return (
        t && this.stop(),
        (this.remaining += e),
        t && this.start(),
        this.remaining
      );
    }
    getTimerLeft() {
      return this.running && (this.stop(), this.start()), this.remaining;
    }
    isRunning() {
      return this.running;
    }
  }
  const Jn = ["swal-title", "swal-html", "swal-footer"],
    Xn = (e) => {
      const t = {};
      return (
        Array.from(e.querySelectorAll("swal-param")).forEach((e) => {
          ar(e, ["name", "value"]);
          const n = e.getAttribute("name"),
            r = e.getAttribute("value");
          n &&
            r &&
            (t[n] =
              n in fn && "boolean" == typeof fn[n]
                ? "false" !== r
                : n in fn && "object" == typeof fn[n]
                ? JSON.parse(r)
                : r);
        }),
        t
      );
    },
    Yn = (e) => {
      const t = {};
      return (
        Array.from(e.querySelectorAll("swal-function-param")).forEach((e) => {
          const n = e.getAttribute("name"),
            r = e.getAttribute("value");
          n && r && (t[n] = new Function(`return ${r}`)());
        }),
        t
      );
    },
    Zn = (e) => {
      const t = {};
      return (
        Array.from(e.querySelectorAll("swal-button")).forEach((e) => {
          ar(e, ["type", "color", "aria-label"]);
          const n = e.getAttribute("type");
          if (n && ["confirm", "cancel", "deny"].includes(n)) {
            if (
              ((t[`${n}ButtonText`] = e.innerHTML),
              (t[`show${N(n)}Button`] = !0),
              e.hasAttribute("color"))
            ) {
              const r = e.getAttribute("color");
              null !== r && (t[`${n}ButtonColor`] = r);
            }
            if (e.hasAttribute("aria-label")) {
              const r = e.getAttribute("aria-label");
              null !== r && (t[`${n}ButtonAriaLabel`] = r);
            }
          }
        }),
        t
      );
    },
    Qn = (e) => {
      const t = {},
        n = e.querySelector("swal-image");
      return (
        n &&
          (ar(n, ["src", "width", "height", "alt"]),
          n.hasAttribute("src") &&
            (t.imageUrl = n.getAttribute("src") || void 0),
          n.hasAttribute("width") &&
            (t.imageWidth = n.getAttribute("width") || void 0),
          n.hasAttribute("height") &&
            (t.imageHeight = n.getAttribute("height") || void 0),
          n.hasAttribute("alt") &&
            (t.imageAlt = n.getAttribute("alt") || void 0)),
        t
      );
    },
    er = (e) => {
      const t = {},
        n = e.querySelector("swal-icon");
      return (
        n &&
          (ar(n, ["type", "color"]),
          n.hasAttribute("type") && (t.icon = n.getAttribute("type")),
          n.hasAttribute("color") && (t.iconColor = n.getAttribute("color")),
          (t.iconHtml = n.innerHTML)),
        t
      );
    },
    tr = (e) => {
      const t = {},
        n = e.querySelector("swal-input");
      n &&
        (ar(n, ["type", "label", "placeholder", "value"]),
        (t.input = n.getAttribute("type") || "text"),
        n.hasAttribute("label") && (t.inputLabel = n.getAttribute("label")),
        n.hasAttribute("placeholder") &&
          (t.inputPlaceholder = n.getAttribute("placeholder")),
        n.hasAttribute("value") && (t.inputValue = n.getAttribute("value")));
      const r = Array.from(e.querySelectorAll("swal-input-option"));
      return (
        r.length &&
          ((t.inputOptions = {}),
          r.forEach((e) => {
            ar(e, ["value"]);
            const n = e.getAttribute("value");
            if (!n) return;
            const r = e.innerHTML;
            t.inputOptions[n] = r;
          })),
        t
      );
    },
    nr = (e, t) => {
      const n = {};
      for (const r in t) {
        const a = t[r],
          o = e.querySelector(a);
        o && (ar(o, []), (n[a.replace(/^swal-/, "")] = o.innerHTML.trim()));
      }
      return n;
    },
    rr = (e) => {
      const t = Jn.concat([
        "swal-param",
        "swal-function-param",
        "swal-button",
        "swal-image",
        "swal-icon",
        "swal-input",
        "swal-input-option",
      ]);
      Array.from(e.children).forEach((e) => {
        const n = e.tagName.toLowerCase();
        t.includes(n) || D(`Unrecognized element <${n}>`);
      });
    },
    ar = (e, t) => {
      Array.from(e.attributes).forEach((n) => {
        -1 === t.indexOf(n.name) &&
          D([
            `Unrecognized attribute "${
              n.name
            }" on <${e.tagName.toLowerCase()}>.`,
            "" +
              (t.length
                ? `Allowed attributes are: ${t.join(", ")}`
                : "To set the value, use HTML within the element."),
          ]);
      });
    },
    or = (e) => {
      var t, n;
      const r = H(),
        a = W();
      if (!r || !a) return;
      "function" == typeof e.willOpen && e.willOpen(a),
        null === (t = T.eventEmitter) || void 0 === t || t.emit("willOpen", a);
      const o = window.getComputedStyle(document.body).overflowY;
      if (
        (cr(r, a, e),
        setTimeout(() => {
          sr(r, a);
        }, 10),
        le() &&
          (lr(r, void 0 !== e.scrollbarPadding && e.scrollbarPadding, o),
          (() => {
            const e = H();
            Array.from(document.body.children).forEach((t) => {
              t.contains(e) ||
                (t.hasAttribute("aria-hidden") &&
                  t.setAttribute(
                    "data-previous-aria-hidden",
                    t.getAttribute("aria-hidden") || ""
                  ),
                t.setAttribute("aria-hidden", "true"));
            });
          })()),
        ce() ||
          T.previousActiveElement ||
          (T.previousActiveElement = document.activeElement),
        "function" == typeof e.didOpen)
      ) {
        const t = e.didOpen;
        setTimeout(() => t(a));
      }
      null === (n = T.eventEmitter) || void 0 === n || n.emit("didOpen", a);
    },
    ir = (e) => {
      const t = W();
      if (!t || e.target !== t) return;
      const n = H();
      n &&
        (t.removeEventListener("animationend", ir),
        t.removeEventListener("transitionend", ir),
        (n.style.overflowY = "auto"),
        fe(n, L["no-transition"]));
    },
    sr = (e, t) => {
      Ce(t)
        ? ((e.style.overflowY = "hidden"),
          t.addEventListener("animationend", ir),
          t.addEventListener("transitionend", ir))
        : (e.style.overflowY = "auto");
    },
    lr = (e, t, n) => {
      (() => {
        if (Tt && !ue(document.body, L.iosfix)) {
          const e = document.body.scrollTop;
          (document.body.style.top = -1 * e + "px"),
            we(document.body, L.iosfix),
            Pt();
        }
      })(),
        t && "hidden" !== n && Nt(n),
        setTimeout(() => {
          e.scrollTop = 0;
        });
    },
    cr = (e, t, n) => {
      var r;
      null !== (r = n.showClass) &&
        void 0 !== r &&
        r.backdrop &&
        we(e, n.showClass.backdrop),
        n.animation
          ? (t.style.setProperty("opacity", "0", "important"),
            ye(t, "grid"),
            setTimeout(() => {
              var e;
              null !== (e = n.showClass) &&
                void 0 !== e &&
                e.popup &&
                we(t, n.showClass.popup),
                t.style.removeProperty("opacity");
            }, 10))
          : ye(t, "grid"),
        we([document.documentElement, document.body], L.shown),
        n.heightAuto &&
          n.backdrop &&
          !n.toast &&
          we([document.documentElement, document.body], L["height-auto"]);
    };
  var dr = (e, t) =>
      /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(e)
        ? Promise.resolve()
        : Promise.resolve(t || "Invalid email address"),
    ur = (e, t) =>
      /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
        e
      )
        ? Promise.resolve()
        : Promise.resolve(t || "Invalid URL");
  function hr(e) {
    !(function (e) {
      e.inputValidator ||
        ("email" === e.input && (e.inputValidator = dr),
        "url" === e.input && (e.inputValidator = ur));
    })(e),
      e.showLoaderOnConfirm &&
        !e.preConfirm &&
        D(
          "showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"
        ),
      (function (e) {
        (!e.target ||
          ("string" == typeof e.target && !document.querySelector(e.target)) ||
          ("string" != typeof e.target && !e.target.appendChild)) &&
          (D('Target parameter is not valid, defaulting to "body"'),
          (e.target = "body"));
      })(e),
      "string" == typeof e.title &&
        (e.title = e.title.split("\n").join("<br />")),
      Le(e);
  }
  let pr;
  var mr = new WeakMap();
  class gr {
    constructor(...e) {
      if (
        (C(
          this,
          mr,
          Promise.resolve({ isConfirmed: !1, isDenied: !1, isDismissed: !0 })
        ),
        "undefined" == typeof window)
      )
        return;
      pr = this;
      const t = Object.freeze(this.constructor.argsToParams(e));
      var n, r, a;
      (this.params = t),
        (this.isAwaitingPromise = !1),
        (n = mr),
        (r = this),
        (a = this._main(pr.params)),
        n.set(S(n, r), a);
    }
    _main(e, t = {}) {
      if ((Cn(Object.assign({}, t, e)), T.currentInstance)) {
        const e = At.swalPromiseResolve.get(T.currentInstance),
          { isAwaitingPromise: t } = T.currentInstance;
        T.currentInstance._destroy(), t || e({ isDismissed: !0 }), le() && Ct();
      }
      T.currentInstance = pr;
      const n = fr(e, t);
      hr(n),
        Object.freeze(n),
        T.timeout && (T.timeout.stop(), delete T.timeout),
        clearTimeout(T.restoreFocusTimeout);
      const r = vr(pr);
      return mt(pr, n), Ue.innerParams.set(pr, n), wr(pr, r, n);
    }
    then(e) {
      return A(mr, this).then(e);
    }
    finally(e) {
      return A(mr, this).finally(e);
    }
  }
  const wr = (e, t, n) =>
      new Promise((r, a) => {
        const o = (t) => {
          e.close({
            isDismissed: !0,
            dismiss: t,
            isConfirmed: !1,
            isDenied: !1,
          });
        };
        At.swalPromiseResolve.set(e, r),
          At.swalPromiseReject.set(e, a),
          (t.confirmButton.onclick = () => {
            ((e) => {
              const t = Ue.innerParams.get(e);
              e.disableButtons(), t.input ? Qt(e, "confirm") : an(e, !0);
            })(e);
          }),
          (t.denyButton.onclick = () => {
            ((e) => {
              const t = Ue.innerParams.get(e);
              e.disableButtons(),
                t.returnInputValueOnDeny ? Qt(e, "deny") : tn(e, !1);
            })(e);
          }),
          (t.cancelButton.onclick = () => {
            ((e, t) => {
              e.disableButtons(), t(wt.cancel);
            })(e, o);
          }),
          (t.closeButton.onclick = () => {
            o(wt.close);
          }),
          ((e, t, n) => {
            e.toast ? Dn(e, t, n) : (Vn(t), Un(t), Bn(e, t, n));
          })(n, t, o),
          ((e, t, n) => {
            if ((ft(e), !t.toast)) {
              const r = (e) => Et(t, e, n);
              e.keydownHandler = r;
              const a = t.keydownListenerCapture ? window : W();
              if (a) {
                (e.keydownTarget = a),
                  (e.keydownListenerCapture = t.keydownListenerCapture);
                const n = r;
                e.keydownTarget.addEventListener("keydown", n, {
                  capture: e.keydownListenerCapture,
                }),
                  (e.keydownHandlerAdded = !0);
              }
            }
          })(T, n, o),
          ((e, t) => {
            "select" === t.input || "radio" === t.input
              ? Jt(e, t)
              : ["text", "email", "number", "tel", "textarea"].some(
                  (e) => e === t.input
                ) &&
                (B(t.inputValue) || G(t.inputValue)) &&
                (Ft(Q()), Xt(e, t));
          })(e, n),
          or(n),
          br(T, n, o),
          yr(t, n),
          setTimeout(() => {
            t.container.scrollTop = 0;
          });
      }),
    fr = (e, t) => {
      const n = ((e) => {
          const t =
            "string" == typeof e.template
              ? document.querySelector(e.template)
              : e.template;
          if (!t) return {};
          const n = t.content;
          return (
            rr(n),
            Object.assign(Xn(n), Yn(n), Zn(n), Qn(n), er(n), tr(n), nr(n, Jn))
          );
        })(e),
        r = Object.assign({}, fn, t, n, e);
      return (
        (r.showClass = Object.assign({}, fn.showClass, r.showClass)),
        (r.hideClass = Object.assign({}, fn.hideClass, r.hideClass)),
        !1 === r.animation &&
          ((r.showClass = { backdrop: "swal2-noanimation" }),
          (r.hideClass = {})),
        r
      );
    },
    vr = (e) => {
      const t = {
        popup: W(),
        container: H(),
        actions: re(),
        confirmButton: Q(),
        denyButton: te(),
        cancelButton: ee(),
        loader: ne(),
        closeButton: ie(),
        validationMessage: Z(),
        progressSteps: Y(),
      };
      return Ue.domCache.set(e, t), t;
    },
    br = (e, t, n) => {
      const r = oe();
      Ee(r),
        t.timer &&
          ((e.timeout = new qn(() => {
            n("timer"), delete e.timeout;
          }, t.timer)),
          t.timerProgressBar &&
            r &&
            (ye(r),
            he(r, t, "timerProgressBar"),
            setTimeout(() => {
              e.timeout && e.timeout.running && Te(t.timer);
            })));
    },
    yr = (e, t) => {
      if (!t.toast)
        return U(t.allowEnterKey)
          ? void (Er(e) || _r(e, t) || vt(-1, 1))
          : (V("allowEnterKey", "preConfirm: () => false"),
            void e.popup.focus());
    },
    Er = (e) => {
      const t = Array.from(e.popup.querySelectorAll("[autofocus]"));
      for (const n of t)
        if (n instanceof HTMLElement && Se(n)) return n.focus(), !0;
      return !1;
    },
    _r = (e, t) =>
      t.focusDeny && Se(e.denyButton)
        ? (e.denyButton.focus(), !0)
        : t.focusCancel && Se(e.cancelButton)
        ? (e.cancelButton.focus(), !0)
        : !(!t.focusConfirm || !Se(e.confirmButton)) &&
          (e.confirmButton.focus(), !0);
  (gr.prototype.disableButtons = hn),
    (gr.prototype.enableButtons = un),
    (gr.prototype.getInput = ln),
    (gr.prototype.disableInput = mn),
    (gr.prototype.enableInput = pn),
    (gr.prototype.hideLoading = on),
    (gr.prototype.disableLoading = on),
    (gr.prototype.showValidationMessage = gn),
    (gr.prototype.resetValidationMessage = wn),
    (gr.prototype.close = Mt),
    (gr.prototype.closePopup = Mt),
    (gr.prototype.closeModal = Mt),
    (gr.prototype.closeToast = Mt),
    (gr.prototype.rejectPromise = Vt),
    (gr.prototype.update = Tn),
    (gr.prototype._destroy = On),
    Object.assign(gr, Kn),
    Object.keys(Nn).forEach((e) => {
      gr[e] = function (...t) {
        if (pr && pr[e]) return pr[e](...t);
      };
    }),
    (gr.DismissReason = wt),
    (gr.version = "11.26.20");
  const kr = gr;
  (kr.default = kr),
    "undefined" != typeof document &&
      (function (e, t) {
        var n = e.createElement("style");
        if ((e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet))
          n.styleSheet.disabled || (n.styleSheet.cssText = t);
        else
          try {
            n.innerHTML = t;
          } catch (r) {
            n.innerText = t;
          }
      })(
        document,
        ':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.15s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;overflow-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;overflow-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes swal2-hide{0%{transform:translate3d(0, 0, 0) scale(1);opacity:1}100%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}'
      );
  const Ir = (e) =>
      new Promise((t) => {
        setTimeout(t, e);
      }),
    Sr = (e) => {
      var t;
      const n =
        JSON.stringify({
          isMockEventMessage: !0,
          eventName: `mock:${e.eventName}`,
          ...(e.eventData && { eventData: e.eventData }),
        }) || void 0;
      n &&
        (null == (t = window.top) || t.postMessage(n, "*"),
        ((e, t) => {
          g.get().dev &&
            p.get().messageLoggingEnabled &&
            b("postMessage", e, t);
        })(`mock:${e.eventName}`, e.eventData));
    },
    Ar = () => {
      if (window.CrazyGames) return;
      const e = {};
      (window.CrazyGames = {
        SDK: {
          async init() {
            k("CrazyGames.SDK.init"), Sr({ eventName: "init" });
          },
          environment: "local",
          isQaTool: !1,
          game: {
            loadingStart: () => {
              k("loadingStart"), Sr({ eventName: "loadingStart" });
            },
            loadingStop: () => {
              k("loadingStop"), Sr({ eventName: "loadingStop" });
            },
            gameplayStart: () => {
              k("gameplayStart"), Sr({ eventName: "gameplayStart" });
            },
            gameplayStop: () => {
              k("gameplayStop"), Sr({ eventName: "gameplayStop" });
            },
            happytime: () => {
              k("happytime"), Sr({ eventName: "happytime" });
            },
            inviteLink: () => (
              k("inviteLink"),
              Sr({ eventName: "inviteLink" }),
              "https://mock.invite/"
            ),
            showInviteButton: () => (
              k("showInviteButton"),
              Sr({ eventName: "showInviteButton" }),
              "mock-button-id"
            ),
            hideInviteButton: () => {
              k("hideInviteButton"), Sr({ eventName: "hideInviteButton" });
            },
            getInviteParam: () => (
              k("getInviteParam"),
              Sr({ eventName: "getInviteParam" }),
              "mock-invite-param"
            ),
            addSettingsChangeListener: (e) => {
              console.log(e);
            },
            settings: { disableChat: !0, muteAudio: !1 },
          },
          ad: {
            async requestAd(e, t) {
              var n, r;
              return (
                k(`requestAd(${e})`),
                null == (n = null == t ? void 0 : t.adStarted) || n.call(t),
                k("adStarted"),
                Sr({ eventName: "adStarted" }),
                await Ir(600),
                null == (r = null == t ? void 0 : t.adFinished) ||
                  r.call(t, !0),
                k("adFinished"),
                Sr({ eventName: "adFinished" }),
                "completed"
              );
            },
          },
          data: {
            getItem: async (t) => (
              k("getItem", t), Sr({ eventName: "getItem" }), e[t] ?? null
            ),
            async setItem(t, n) {
              k("setItem", t), Sr({ eventName: "setItem" }), (e[t] = n);
            },
            async removeItem(t) {
              k("removeItem", t), Sr({ eventName: "removeItem" });
              const n = e[t];
              return delete e[t], n;
            },
            async clear() {
              k("clear"), Sr({ eventName: "clear" });
              for (const t in e) delete e[t];
              return null;
            },
          },
        },
      }),
        k("CrazyGames SDK injected");
    };
  var Cr = ((e) => (
    (e.LEVEL_START = "event/level/start"),
    (e.LEVEL_END = "event/level/end"),
    (e.LEVEL_UPDATE = "event/level/update"),
    (e.PING = "event/ping"),
    (e.AD = "event/ad"),
    (e.INFO_PAID = "event/info/paid"),
    e
  ))(Cr || {});
  const Tr = new Set(Object.values(Cr));
  var Pr = function () {
    return (
      (Pr =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var a in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
          return e;
        }),
      Pr.apply(this, arguments)
    );
  };
  function Or(e, t, n) {
    for (var r, a = 0, o = t.length; a < o; a++)
      (!r && a in t) ||
        (r || (r = Array.prototype.slice.call(t, 0, a)), (r[a] = t[a]));
    return e.concat(r || Array.prototype.slice.call(t));
  }
  function Lr(e, t, n) {
    var r = (function (e) {
      var t = {
          current: 0,
          next: function () {
            return ++this.current;
          },
        },
        n = {};
      return {
        add: function (r, a) {
          var o = null != a ? a : "".concat(t.next(), "_").concat(e);
          return (n[o] = r), o;
        },
        resolve: function (e, t, r) {
          var a = n[e];
          a && (r(t) ? a.resolve(t) : a.reject(t), (n[e] = null));
        },
      };
    })(n);
    return (
      t(function (e) {
        if (
          e.detail &&
          e.detail.data &&
          "object" == typeof e.detail.data &&
          "request_id" in e.detail.data
        ) {
          var t = e.detail.data,
            n = t.request_id,
            a = (function (e, t) {
              var n = {};
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) &&
                  t.indexOf(r) < 0 &&
                  (n[r] = e[r]);
              if (
                null != e &&
                "function" == typeof Object.getOwnPropertySymbols
              ) {
                var a = 0;
                for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
                  t.indexOf(r[a]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                    (n[r[a]] = e[r[a]]);
              }
              return n;
            })(t, ["request_id"]);
          n &&
            r.resolve(n, a, function (e) {
              return !("error_type" in e);
            });
        }
      }),
      function (t, n) {
        return (
          void 0 === n && (n = {}),
          new Promise(function (a, o) {
            var i = r.add({ resolve: a, reject: o }, n.request_id);
            e(t, Pr(Pr({}, n), { request_id: i }));
          })
        );
      }
    );
  }
  var Rr = "undefined" != typeof window,
    xr = Boolean(Rr && window.AndroidBridge),
    Nr = Boolean(
      Rr &&
        window.webkit &&
        window.webkit.messageHandlers &&
        window.webkit.messageHandlers.VKWebAppClose
    ),
    Dr = Boolean(
      Rr &&
        window.ReactNativeWebView &&
        "function" == typeof window.ReactNativeWebView.postMessage
    ),
    Mr = Rr && !xr && !Nr,
    $r = Mr && /(^\?|&)vk_platform=mobile_web(&|$)/.test(location.search),
    Vr = Mr ? "message" : "VKWebAppEvent",
    Ur =
      (Or(
        [
          "VKWebAppInit",
          "VKWebAppGetCommunityAuthToken",
          "VKWebAppAddToCommunity",
          "VKWebAppAddToHomeScreenInfo",
          "VKWebAppClose",
          "VKWebAppCopyText",
          "VKWebAppCreateHash",
          "VKWebAppGetUserInfo",
          "VKWebAppSetLocation",
          "VKWebAppSendToClient",
          "VKWebAppGetClientVersion",
          "VKWebAppGetPhoneNumber",
          "VKWebAppGetEmail",
          "VKWebAppGetGroupInfo",
          "VKWebAppGetGeodata",
          "VKWebAppGetCommunityToken",
          "VKWebAppGetConfig",
          "VKWebAppGetLaunchParams",
          "VKWebAppSetTitle",
          "VKWebAppGetAuthToken",
          "VKWebAppCallAPIMethod",
          "VKWebAppJoinGroup",
          "VKWebAppLeaveGroup",
          "VKWebAppAllowMessagesFromGroup",
          "VKWebAppDenyNotifications",
          "VKWebAppAllowNotifications",
          "VKWebAppOpenPayForm",
          "VKWebAppOpenApp",
          "VKWebAppShare",
          "VKWebAppShowWallPostBox",
          "VKWebAppScroll",
          "VKWebAppShowOrderBox",
          "VKWebAppShowLeaderBoardBox",
          "VKWebAppShowInviteBox",
          "VKWebAppShowRequestBox",
          "VKWebAppAddToFavorites",
          "VKWebAppShowStoryBox",
          "VKWebAppStorageGet",
          "VKWebAppStorageGetKeys",
          "VKWebAppStorageSet",
          "VKWebAppFlashGetInfo",
          "VKWebAppSubscribeStoryApp",
          "VKWebAppOpenWallPost",
          "VKWebAppCheckAllowedScopes",
          "VKWebAppCheckBannerAd",
          "VKWebAppHideBannerAd",
          "VKWebAppShowBannerAd",
          "VKWebAppCheckNativeAds",
          "VKWebAppShowNativeAds",
          "VKWebAppRetargetingPixel",
          "VKWebAppConversionHit",
          "VKWebAppShowSubscriptionBox",
          "VKWebAppCheckSurvey",
          "VKWebAppShowSurvey",
          "VKWebAppScrollTop",
          "VKWebAppScrollTopStart",
          "VKWebAppScrollTopStop",
          "VKWebAppShowSlidesSheet",
          "VKWebAppTranslate",
          "VKWebAppRecommend",
          "VKWebAppAddToProfile",
          "VKWebAppGetFriends",
        ],
        Mr && !$r
          ? [
              "VKWebAppResizeWindow",
              "VKWebAppAddToMenu",
              "VKWebAppShowInstallPushBox",
              "VKWebAppShowCommunityWidgetPreviewBox",
              "VKWebAppCallStart",
              "VKWebAppCallJoin",
              "VKWebAppCallGetStatus",
            ]
          : ["VKWebAppShowImages"]
      ),
      Rr ? window.AndroidBridge : void 0),
    Br = Nr ? window.webkit.messageHandlers : void 0,
    jr = Mr ? parent : void 0;
  var Gr,
    Hr,
    Fr,
    zr,
    Wr,
    Kr,
    qr,
    Jr,
    Xr,
    Yr,
    Zr,
    Qr,
    ea,
    ta,
    na,
    ra,
    aa,
    oa,
    ia,
    sa;
  ((Hr = Gr || (Gr = {})).REWARD = "reward"),
    (Hr.INTERSTITIAL = "interstitial"),
    ((zr = Fr || (Fr = {})).RESIZE = "resize"),
    (zr.OVERLAY = "overlay"),
    ((Kr = Wr || (Wr = {})).TOP = "top"),
    (Kr.BOTTOM = "bottom"),
    ((Jr = qr || (qr = {})).LEFT = "left"),
    (Jr.RIGHT = "right"),
    (Jr.CENTER = "center"),
    ((Yr = Xr || (Xr = {})).COMPACT = "compact"),
    (Yr.REGULAR = "regular"),
    ((Qr = Zr || (Zr = {})).HORIZONTAL = "horizontal"),
    (Qr.VERTICAL = "vertical"),
    ((ta = ea || (ea = {})).CAMERA = "camera"),
    (ta.LOCATION = "location"),
    (ta.PHOTO = "photo"),
    ((ra = na || (na = {})).RU = "ru"),
    (ra.UK = "uk"),
    (ra.UA = "ua"),
    (ra.EN = "en"),
    (ra.BE = "be"),
    (ra.KZ = "kz"),
    (ra.PT = "pt"),
    (ra.ES = "es"),
    ((oa = aa || (aa = {})).ADMIN = "admin"),
    (oa.EDITOR = "editor"),
    (oa.MEMBER = "member"),
    (oa.MODER = "moder"),
    (oa.NONE = "none"),
    ((sa = ia || (ia = {})).DESKTOP_WEB = "desktop_web"),
    (sa.DESKTOP_WEB_MESSENGER = "desktop_web_messenger"),
    (sa.DESKTOP_APP_MESSENGER = "desktop_app_messenger"),
    (sa.MOBILE_WEB = "mobile_web"),
    (sa.MOBILE_ANDROID = "mobile_android"),
    (sa.MOBILE_ANDROID_MESSENGER = "mobile_android_messenger"),
    (sa.MOBILE_IPHONE = "mobile_iphone"),
    (sa.MOBILE_IPHONE_MESSENGER = "mobile_iphone_messenger"),
    (sa.MOBILE_IPAD = "mobile_ipad"),
    (function (e) {
      var t = void 0,
        n = [],
        r = Math.random().toString(36).substring(2, 5);
      function a(e) {
        n.push(e);
      }
      function o(e) {
        return xr
          ? !(!Ur || "function" != typeof Ur[e])
          : Nr
          ? !(!Br || !Br[e] || "function" != typeof Br[e].postMessage)
          : !!Mr && DESKTOP_METHODS.includes(e);
      }
      function i() {
        return Nr || xr;
      }
      function s() {
        return Mr && window.parent !== window;
      }
      function l() {
        return i() || s();
      }
      function c(e) {
        if (Nr || xr)
          return Or([], n).map(function (t) {
            return t.call(null, e);
          });
        var r = null == e ? void 0 : e.data;
        if (Mr && r) {
          if (Dr && "string" == typeof r)
            try {
              r = JSON.parse(r);
            } catch (s) {}
          var a = r.type,
            o = r.data,
            i = r.frameId;
          a &&
            ("VKWebAppSettings" !== a
              ? Or([], n).map(function (e) {
                  return e({ detail: { type: a, data: o } });
                })
              : (t = i));
        }
      }
      Dr && /(android)/i.test(navigator.userAgent)
        ? document.addEventListener(Vr, c)
        : "undefined" != typeof window &&
          "addEventListener" in window &&
          window.addEventListener(Vr, c);
      var d = Lr(
        function (n, r) {
          Ur && Ur[n]
            ? Ur[n](JSON.stringify(r))
            : Br && Br[n] && "function" == typeof Br[n].postMessage
            ? Br[n].postMessage(r)
            : Dr
            ? window.ReactNativeWebView.postMessage(
                JSON.stringify({ handler: n, params: r })
              )
            : jr &&
              "function" == typeof jr.postMessage &&
              jr.postMessage(
                {
                  handler: n,
                  params: r,
                  type: "vk-connect",
                  webFrameId: t,
                  connectVersion: e,
                },
                "*"
              );
        },
        a,
        r
      );
      a(function (e) {
        if (e.detail && "SetSupportedHandlers" === e.detail.type)
          new Set(e.detail.data.supportedHandlers);
      });
    })("2.15.11");
  var la = ((e) => (
    (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
    (e[(e.ACTIVE = 1)] = "ACTIVE"),
    (e[(e.PAUSED = 2)] = "PAUSED"),
    (e[(e.INTERRUPTED = 3)] = "INTERRUPTED"),
    (e[(e.TERMINATED = 4)] = "TERMINATED"),
    e
  ))(la || {});
  const ca = h({
    isMuted: !1,
    isPaused: !1,
    userMutePref: !1,
    userPausePref: !1,
    gameplayState: la.UNKNOWN,
    callbacks: {},
    gameReadyAt: null,
    offsets: {},
  });
  Error;
  const da = (e, t, n) => {
      e[t] = n;
    },
    ua = (() => {
      const e = {};
      return da(e, "crazyGames", Ar), e;
    })();
  var ha = {};
  const pa = function (e) {
      const t = [];
      let n = 0;
      for (let r = 0; r < e.length; r++) {
        let a = e.charCodeAt(r);
        a < 128
          ? (t[n++] = a)
          : a < 2048
          ? ((t[n++] = (a >> 6) | 192), (t[n++] = (63 & a) | 128))
          : 55296 == (64512 & a) &&
            r + 1 < e.length &&
            56320 == (64512 & e.charCodeAt(r + 1))
          ? ((a = 65536 + ((1023 & a) << 10) + (1023 & e.charCodeAt(++r))),
            (t[n++] = (a >> 18) | 240),
            (t[n++] = ((a >> 12) & 63) | 128),
            (t[n++] = ((a >> 6) & 63) | 128),
            (t[n++] = (63 & a) | 128))
          : ((t[n++] = (a >> 12) | 224),
            (t[n++] = ((a >> 6) & 63) | 128),
            (t[n++] = (63 & a) | 128));
      }
      return t;
    },
    ma = {
      byteToCharMap_: null,
      charToByteMap_: null,
      byteToCharMapWebSafe_: null,
      charToByteMapWebSafe_: null,
      ENCODED_VALS_BASE:
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + "+/=";
      },
      get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + "-_.";
      },
      HAS_NATIVE_SUPPORT: "function" == typeof atob,
      encodeByteArray(e, t) {
        if (!Array.isArray(e))
          throw Error("encodeByteArray takes an array as a parameter");
        this.init_();
        const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
          r = [];
        for (let a = 0; a < e.length; a += 3) {
          const t = e[a],
            o = a + 1 < e.length,
            i = o ? e[a + 1] : 0,
            s = a + 2 < e.length,
            l = s ? e[a + 2] : 0,
            c = t >> 2,
            d = ((3 & t) << 4) | (i >> 4);
          let u = ((15 & i) << 2) | (l >> 6),
            h = 63 & l;
          s || ((h = 64), o || (u = 64)), r.push(n[c], n[d], n[u], n[h]);
        }
        return r.join("");
      },
      encodeString(e, t) {
        return this.HAS_NATIVE_SUPPORT && !t
          ? btoa(e)
          : this.encodeByteArray(pa(e), t);
      },
      decodeString(e, t) {
        return this.HAS_NATIVE_SUPPORT && !t
          ? atob(e)
          : (function (e) {
              const t = [];
              let n = 0,
                r = 0;
              for (; n < e.length; ) {
                const a = e[n++];
                if (a < 128) t[r++] = String.fromCharCode(a);
                else if (a > 191 && a < 224) {
                  const o = e[n++];
                  t[r++] = String.fromCharCode(((31 & a) << 6) | (63 & o));
                } else if (a > 239 && a < 365) {
                  const o =
                    (((7 & a) << 18) |
                      ((63 & e[n++]) << 12) |
                      ((63 & e[n++]) << 6) |
                      (63 & e[n++])) -
                    65536;
                  (t[r++] = String.fromCharCode(55296 + (o >> 10))),
                    (t[r++] = String.fromCharCode(56320 + (1023 & o)));
                } else {
                  const o = e[n++],
                    i = e[n++];
                  t[r++] = String.fromCharCode(
                    ((15 & a) << 12) | ((63 & o) << 6) | (63 & i)
                  );
                }
              }
              return t.join("");
            })(this.decodeStringToByteArray(e, t));
      },
      decodeStringToByteArray(e, t) {
        this.init_();
        const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
          r = [];
        for (let a = 0; a < e.length; ) {
          const t = n[e.charAt(a++)],
            o = a < e.length ? n[e.charAt(a)] : 0;
          ++a;
          const i = a < e.length ? n[e.charAt(a)] : 64;
          ++a;
          const s = a < e.length ? n[e.charAt(a)] : 64;
          if ((++a, null == t || null == o || null == i || null == s))
            throw new ga();
          const l = (t << 2) | (o >> 4);
          if ((r.push(l), 64 !== i)) {
            const e = ((o << 4) & 240) | (i >> 2);
            if ((r.push(e), 64 !== s)) {
              const e = ((i << 6) & 192) | s;
              r.push(e);
            }
          }
        }
        return r;
      },
      init_() {
        if (!this.byteToCharMap_) {
          (this.byteToCharMap_ = {}),
            (this.charToByteMap_ = {}),
            (this.byteToCharMapWebSafe_ = {}),
            (this.charToByteMapWebSafe_ = {});
          for (let e = 0; e < this.ENCODED_VALS.length; e++)
            (this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
              (this.charToByteMap_[this.byteToCharMap_[e]] = e),
              (this.byteToCharMapWebSafe_[e] =
                this.ENCODED_VALS_WEBSAFE.charAt(e)),
              (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e),
              e >= this.ENCODED_VALS_BASE.length &&
                ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e),
                (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e));
        }
      },
    };
  class ga extends Error {
    constructor() {
      super(...arguments), (this.name = "DecodeBase64StringError");
    }
  }
  const wa = function (e) {
      return (function (e) {
        const t = pa(e);
        return ma.encodeByteArray(t, !0);
      })(e).replace(/\./g, "");
    },
    fa = function (e) {
      try {
        return ma.decodeString(e, !0);
      } catch (t) {
        console.error("base64Decode failed: ", t);
      }
      return null;
    };
  const va = () =>
      (function () {
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if ("undefined" != typeof global) return global;
        throw new Error("Unable to locate global object.");
      })().__FIREBASE_DEFAULTS__,
    ba = () => {
      try {
        return (
          va() ||
          (() => {
            if ("undefined" == typeof process) return;
            const e = ha.__FIREBASE_DEFAULTS__;
            return e ? JSON.parse(e) : void 0;
          })() ||
          (() => {
            if ("undefined" == typeof document) return;
            let e;
            try {
              e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
            } catch (n) {
              return;
            }
            const t = e && fa(e[1]);
            return t && JSON.parse(t);
          })()
        );
      } catch (e) {
        return void console.info(
          `Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`
        );
      }
    },
    ya = () => {
      var e;
      return null === (e = ba()) || void 0 === e ? void 0 : e.config;
    },
    Ea = (e) => {
      var t;
      return null === (t = ba()) || void 0 === t ? void 0 : t[`_${e}`];
    };
  class _a {
    constructor() {
      (this.reject = () => {}),
        (this.resolve = () => {}),
        (this.promise = new Promise((e, t) => {
          (this.resolve = e), (this.reject = t);
        }));
    }
    wrapCallback(e) {
      return (t, n) => {
        t ? this.reject(t) : this.resolve(n),
          "function" == typeof e &&
            (this.promise.catch(() => {}), 1 === e.length ? e(t) : e(t, n));
      };
    }
  }
  function ka() {
    return "undefined" != typeof navigator &&
      "string" == typeof navigator.userAgent
      ? navigator.userAgent
      : "";
  }
  class Ia extends Error {
    constructor(e, t, n) {
      super(t),
        (this.code = e),
        (this.customData = n),
        (this.name = "FirebaseError"),
        Object.setPrototypeOf(this, Ia.prototype),
        Error.captureStackTrace &&
          Error.captureStackTrace(this, Sa.prototype.create);
    }
  }
  class Sa {
    constructor(e, t, n) {
      (this.service = e), (this.serviceName = t), (this.errors = n);
    }
    create(e, ...t) {
      const n = t[0] || {},
        r = `${this.service}/${e}`,
        a = this.errors[e],
        o = a
          ? (function (e, t) {
              return e.replace(Aa, (e, n) => {
                const r = t[n];
                return null != r ? String(r) : `<${n}?>`;
              });
            })(a, n)
          : "Error",
        i = `${this.serviceName}: ${o} (${r}).`;
      return new Ia(r, i, n);
    }
  }
  const Aa = /\{\$([^}]+)}/g;
  function Ca(e, t) {
    if (e === t) return !0;
    const n = Object.keys(e),
      r = Object.keys(t);
    for (const a of n) {
      if (!r.includes(a)) return !1;
      const n = e[a],
        o = t[a];
      if (Ta(n) && Ta(o)) {
        if (!Ca(n, o)) return !1;
      } else if (n !== o) return !1;
    }
    for (const a of r) if (!n.includes(a)) return !1;
    return !0;
  }
  function Ta(e) {
    return null !== e && "object" == typeof e;
  }
  function Pa(e) {
    const t = [];
    for (const [n, r] of Object.entries(e))
      Array.isArray(r)
        ? r.forEach((e) => {
            t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e));
          })
        : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
    return t.length ? "&" + t.join("&") : "";
  }
  class Oa {
    constructor(e, t) {
      (this.observers = []),
        (this.unsubscribes = []),
        (this.observerCount = 0),
        (this.task = Promise.resolve()),
        (this.finalized = !1),
        (this.onNoObservers = t),
        this.task
          .then(() => {
            e(this);
          })
          .catch((e) => {
            this.error(e);
          });
    }
    next(e) {
      this.forEachObserver((t) => {
        t.next(e);
      });
    }
    error(e) {
      this.forEachObserver((t) => {
        t.error(e);
      }),
        this.close(e);
    }
    complete() {
      this.forEachObserver((e) => {
        e.complete();
      }),
        this.close();
    }
    subscribe(e, t, n) {
      let r;
      if (void 0 === e && void 0 === t && void 0 === n)
        throw new Error("Missing Observer.");
      (r = (function (e, t) {
        if ("object" != typeof e || null === e) return !1;
        for (const n of t) if (n in e && "function" == typeof e[n]) return !0;
        return !1;
      })(e, ["next", "error", "complete"])
        ? e
        : { next: e, error: t, complete: n }),
        void 0 === r.next && (r.next = La),
        void 0 === r.error && (r.error = La),
        void 0 === r.complete && (r.complete = La);
      const a = this.unsubscribeOne.bind(this, this.observers.length);
      return (
        this.finalized &&
          this.task.then(() => {
            try {
              this.finalError ? r.error(this.finalError) : r.complete();
            } catch (e) {}
          }),
        this.observers.push(r),
        a
      );
    }
    unsubscribeOne(e) {
      void 0 !== this.observers &&
        void 0 !== this.observers[e] &&
        (delete this.observers[e],
        (this.observerCount -= 1),
        0 === this.observerCount &&
          void 0 !== this.onNoObservers &&
          this.onNoObservers(this));
    }
    forEachObserver(e) {
      if (!this.finalized)
        for (let t = 0; t < this.observers.length; t++) this.sendOne(t, e);
    }
    sendOne(e, t) {
      this.task.then(() => {
        if (void 0 !== this.observers && void 0 !== this.observers[e])
          try {
            t(this.observers[e]);
          } catch (n) {
            "undefined" != typeof console && console.error && console.error(n);
          }
      });
    }
    close(e) {
      this.finalized ||
        ((this.finalized = !0),
        void 0 !== e && (this.finalError = e),
        this.task.then(() => {
          (this.observers = void 0), (this.onNoObservers = void 0);
        }));
    }
  }
  function La() {}
  function Ra(e) {
    return e && e._delegate ? e._delegate : e;
  }
  class xa {
    constructor(e, t, n) {
      (this.name = e),
        (this.instanceFactory = t),
        (this.type = n),
        (this.multipleInstances = !1),
        (this.serviceProps = {}),
        (this.instantiationMode = "LAZY"),
        (this.onInstanceCreated = null);
    }
    setInstantiationMode(e) {
      return (this.instantiationMode = e), this;
    }
    setMultipleInstances(e) {
      return (this.multipleInstances = e), this;
    }
    setServiceProps(e) {
      return (this.serviceProps = e), this;
    }
    setInstanceCreatedCallback(e) {
      return (this.onInstanceCreated = e), this;
    }
  }
  const Na = "[DEFAULT]";
  class Da {
    constructor(e, t) {
      (this.name = e),
        (this.container = t),
        (this.component = null),
        (this.instances = new Map()),
        (this.instancesDeferred = new Map()),
        (this.instancesOptions = new Map()),
        (this.onInitCallbacks = new Map());
    }
    get(e) {
      const t = this.normalizeInstanceIdentifier(e);
      if (!this.instancesDeferred.has(t)) {
        const e = new _a();
        if (
          (this.instancesDeferred.set(t, e),
          this.isInitialized(t) || this.shouldAutoInitialize())
        )
          try {
            const n = this.getOrInitializeService({ instanceIdentifier: t });
            n && e.resolve(n);
          } catch (n) {}
      }
      return this.instancesDeferred.get(t).promise;
    }
    getImmediate(e) {
      var t;
      const n = this.normalizeInstanceIdentifier(
          null == e ? void 0 : e.identifier
        ),
        r = null !== (t = null == e ? void 0 : e.optional) && void 0 !== t && t;
      if (!this.isInitialized(n) && !this.shouldAutoInitialize()) {
        if (r) return null;
        throw Error(`Service ${this.name} is not available`);
      }
      try {
        return this.getOrInitializeService({ instanceIdentifier: n });
      } catch (a) {
        if (r) return null;
        throw a;
      }
    }
    getComponent() {
      return this.component;
    }
    setComponent(e) {
      if (e.name !== this.name)
        throw Error(
          `Mismatching Component ${e.name} for Provider ${this.name}.`
        );
      if (this.component)
        throw Error(`Component for ${this.name} has already been provided`);
      if (((this.component = e), this.shouldAutoInitialize())) {
        if (
          (function (e) {
            return "EAGER" === e.instantiationMode;
          })(e)
        )
          try {
            this.getOrInitializeService({ instanceIdentifier: Na });
          } catch (t) {}
        for (const [e, n] of this.instancesDeferred.entries()) {
          const r = this.normalizeInstanceIdentifier(e);
          try {
            const e = this.getOrInitializeService({ instanceIdentifier: r });
            n.resolve(e);
          } catch (t) {}
        }
      }
    }
    clearInstance(e = Na) {
      this.instancesDeferred.delete(e),
        this.instancesOptions.delete(e),
        this.instances.delete(e);
    }
    async delete() {
      const e = Array.from(this.instances.values());
      await Promise.all([
        ...e.filter((e) => "INTERNAL" in e).map((e) => e.INTERNAL.delete()),
        ...e.filter((e) => "_delete" in e).map((e) => e._delete()),
      ]);
    }
    isComponentSet() {
      return null != this.component;
    }
    isInitialized(e = Na) {
      return this.instances.has(e);
    }
    getOptions(e = Na) {
      return this.instancesOptions.get(e) || {};
    }
    initialize(e = {}) {
      const { options: t = {} } = e,
        n = this.normalizeInstanceIdentifier(e.instanceIdentifier);
      if (this.isInitialized(n))
        throw Error(`${this.name}(${n}) has already been initialized`);
      if (!this.isComponentSet())
        throw Error(`Component ${this.name} has not been registered yet`);
      const r = this.getOrInitializeService({
        instanceIdentifier: n,
        options: t,
      });
      for (const [a, o] of this.instancesDeferred.entries()) {
        n === this.normalizeInstanceIdentifier(a) && o.resolve(r);
      }
      return r;
    }
    onInit(e, t) {
      var n;
      const r = this.normalizeInstanceIdentifier(t),
        a =
          null !== (n = this.onInitCallbacks.get(r)) && void 0 !== n
            ? n
            : new Set();
      a.add(e), this.onInitCallbacks.set(r, a);
      const o = this.instances.get(r);
      return (
        o && e(o, r),
        () => {
          a.delete(e);
        }
      );
    }
    invokeOnInitCallbacks(e, t) {
      const n = this.onInitCallbacks.get(t);
      if (n)
        for (const a of n)
          try {
            a(e, t);
          } catch (r) {}
    }
    getOrInitializeService({ instanceIdentifier: e, options: t = {} }) {
      let n = this.instances.get(e);
      if (
        !n &&
        this.component &&
        ((n = this.component.instanceFactory(this.container, {
          instanceIdentifier: ((r = e), r === Na ? void 0 : r),
          options: t,
        })),
        this.instances.set(e, n),
        this.instancesOptions.set(e, t),
        this.invokeOnInitCallbacks(n, e),
        this.component.onInstanceCreated)
      )
        try {
          this.component.onInstanceCreated(this.container, e, n);
        } catch (a) {}
      var r;
      return n || null;
    }
    normalizeInstanceIdentifier(e = Na) {
      return this.component ? (this.component.multipleInstances ? e : Na) : e;
    }
    shouldAutoInitialize() {
      return (
        !!this.component && "EXPLICIT" !== this.component.instantiationMode
      );
    }
  }
  class Ma {
    constructor(e) {
      (this.name = e), (this.providers = new Map());
    }
    addComponent(e) {
      const t = this.getProvider(e.name);
      if (t.isComponentSet())
        throw new Error(
          `Component ${e.name} has already been registered with ${this.name}`
        );
      t.setComponent(e);
    }
    addOrOverwriteComponent(e) {
      this.getProvider(e.name).isComponentSet() &&
        this.providers.delete(e.name),
        this.addComponent(e);
    }
    getProvider(e) {
      if (this.providers.has(e)) return this.providers.get(e);
      const t = new Da(e, this);
      return this.providers.set(e, t), t;
    }
    getProviders() {
      return Array.from(this.providers.values());
    }
  }
  var $a, Va;
  ((Va = $a || ($a = {}))[(Va.DEBUG = 0)] = "DEBUG"),
    (Va[(Va.VERBOSE = 1)] = "VERBOSE"),
    (Va[(Va.INFO = 2)] = "INFO"),
    (Va[(Va.WARN = 3)] = "WARN"),
    (Va[(Va.ERROR = 4)] = "ERROR"),
    (Va[(Va.SILENT = 5)] = "SILENT");
  const Ua = {
      debug: $a.DEBUG,
      verbose: $a.VERBOSE,
      info: $a.INFO,
      warn: $a.WARN,
      error: $a.ERROR,
      silent: $a.SILENT,
    },
    Ba = $a.INFO,
    ja = {
      [$a.DEBUG]: "log",
      [$a.VERBOSE]: "log",
      [$a.INFO]: "info",
      [$a.WARN]: "warn",
      [$a.ERROR]: "error",
    },
    Ga = (e, t, ...n) => {
      if (t < e.logLevel) return;
      const r = new Date().toISOString(),
        a = ja[t];
      if (!a)
        throw new Error(
          `Attempted to log a message with an invalid logType (value: ${t})`
        );
      console[a](`[${r}]  ${e.name}:`, ...n);
    };
  class Ha {
    constructor(e) {
      (this.name = e),
        (this._logLevel = Ba),
        (this._logHandler = Ga),
        (this._userLogHandler = null);
    }
    get logLevel() {
      return this._logLevel;
    }
    set logLevel(e) {
      if (!(e in $a))
        throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
      this._logLevel = e;
    }
    setLogLevel(e) {
      this._logLevel = "string" == typeof e ? Ua[e] : e;
    }
    get logHandler() {
      return this._logHandler;
    }
    set logHandler(e) {
      if ("function" != typeof e)
        throw new TypeError(
          "Value assigned to `logHandler` must be a function"
        );
      this._logHandler = e;
    }
    get userLogHandler() {
      return this._userLogHandler;
    }
    set userLogHandler(e) {
      this._userLogHandler = e;
    }
    debug(...e) {
      this._userLogHandler && this._userLogHandler(this, $a.DEBUG, ...e),
        this._logHandler(this, $a.DEBUG, ...e);
    }
    log(...e) {
      this._userLogHandler && this._userLogHandler(this, $a.VERBOSE, ...e),
        this._logHandler(this, $a.VERBOSE, ...e);
    }
    info(...e) {
      this._userLogHandler && this._userLogHandler(this, $a.INFO, ...e),
        this._logHandler(this, $a.INFO, ...e);
    }
    warn(...e) {
      this._userLogHandler && this._userLogHandler(this, $a.WARN, ...e),
        this._logHandler(this, $a.WARN, ...e);
    }
    error(...e) {
      this._userLogHandler && this._userLogHandler(this, $a.ERROR, ...e),
        this._logHandler(this, $a.ERROR, ...e);
    }
  }
  let Fa, za;
  const Wa = new WeakMap(),
    Ka = new WeakMap(),
    qa = new WeakMap(),
    Ja = new WeakMap(),
    Xa = new WeakMap();
  let Ya = {
    get(e, t, n) {
      if (e instanceof IDBTransaction) {
        if ("done" === t) return Ka.get(e);
        if ("objectStoreNames" === t) return e.objectStoreNames || qa.get(e);
        if ("store" === t)
          return n.objectStoreNames[1]
            ? void 0
            : n.objectStore(n.objectStoreNames[0]);
      }
      return eo(e[t]);
    },
    set: (e, t, n) => ((e[t] = n), !0),
    has: (e, t) =>
      (e instanceof IDBTransaction && ("done" === t || "store" === t)) ||
      t in e,
  };
  function Za(e) {
    return e !== IDBDatabase.prototype.transaction ||
      "objectStoreNames" in IDBTransaction.prototype
      ? (
          za ||
          (za = [
            IDBCursor.prototype.advance,
            IDBCursor.prototype.continue,
            IDBCursor.prototype.continuePrimaryKey,
          ])
        ).includes(e)
        ? function (...t) {
            return e.apply(to(this), t), eo(Wa.get(this));
          }
        : function (...t) {
            return eo(e.apply(to(this), t));
          }
      : function (t, ...n) {
          const r = e.call(to(this), t, ...n);
          return qa.set(r, t.sort ? t.sort() : [t]), eo(r);
        };
  }
  function Qa(e) {
    return "function" == typeof e
      ? Za(e)
      : (e instanceof IDBTransaction &&
          (function (e) {
            if (Ka.has(e)) return;
            const t = new Promise((t, n) => {
              const r = () => {
                  e.removeEventListener("complete", a),
                    e.removeEventListener("error", o),
                    e.removeEventListener("abort", o);
                },
                a = () => {
                  t(), r();
                },
                o = () => {
                  n(e.error || new DOMException("AbortError", "AbortError")),
                    r();
                };
              e.addEventListener("complete", a),
                e.addEventListener("error", o),
                e.addEventListener("abort", o);
            });
            Ka.set(e, t);
          })(e),
        (t = e),
        (
          Fa ||
          (Fa = [
            IDBDatabase,
            IDBObjectStore,
            IDBIndex,
            IDBCursor,
            IDBTransaction,
          ])
        ).some((e) => t instanceof e)
          ? new Proxy(e, Ya)
          : e);
    var t;
  }
  function eo(e) {
    if (e instanceof IDBRequest)
      return (function (e) {
        const t = new Promise((t, n) => {
          const r = () => {
              e.removeEventListener("success", a),
                e.removeEventListener("error", o);
            },
            a = () => {
              t(eo(e.result)), r();
            },
            o = () => {
              n(e.error), r();
            };
          e.addEventListener("success", a), e.addEventListener("error", o);
        });
        return (
          t
            .then((t) => {
              t instanceof IDBCursor && Wa.set(t, e);
            })
            .catch(() => {}),
          Xa.set(t, e),
          t
        );
      })(e);
    if (Ja.has(e)) return Ja.get(e);
    const t = Qa(e);
    return t !== e && (Ja.set(e, t), Xa.set(t, e)), t;
  }
  const to = (e) => Xa.get(e);
  const no = ["get", "getKey", "getAll", "getAllKeys", "count"],
    ro = ["put", "add", "delete", "clear"],
    ao = new Map();
  function oo(e, t) {
    if (!(e instanceof IDBDatabase) || t in e || "string" != typeof t) return;
    if (ao.get(t)) return ao.get(t);
    const n = t.replace(/FromIndex$/, ""),
      r = t !== n,
      a = ro.includes(n);
    if (
      !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
      (!a && !no.includes(n))
    )
      return;
    const o = async function (e, ...t) {
      const o = this.transaction(e, a ? "readwrite" : "readonly");
      let i = o.store;
      return (
        r && (i = i.index(t.shift())),
        (await Promise.all([i[n](...t), a && o.done]))[0]
      );
    };
    return ao.set(t, o), o;
  }
  Ya = ((e) => ({
    ...e,
    get: (t, n, r) => oo(t, n) || e.get(t, n, r),
    has: (t, n) => !!oo(t, n) || e.has(t, n),
  }))(Ya);
  class io {
    constructor(e) {
      this.container = e;
    }
    getPlatformInfoString() {
      return this.container
        .getProviders()
        .map((e) => {
          if (
            (function (e) {
              const t = e.getComponent();
              return "VERSION" === (null == t ? void 0 : t.type);
            })(e)
          ) {
            const t = e.getImmediate();
            return `${t.library}/${t.version}`;
          }
          return null;
        })
        .filter((e) => e)
        .join(" ");
    }
  }
  const so = "@firebase/app",
    lo = "0.10.13",
    co = new Ha("@firebase/app"),
    uo = "@firebase/app-compat",
    ho = "@firebase/analytics-compat",
    po = "@firebase/analytics",
    mo = "@firebase/app-check-compat",
    go = "@firebase/app-check",
    wo = "@firebase/auth",
    fo = "@firebase/auth-compat",
    vo = "@firebase/database",
    bo = "@firebase/data-connect",
    yo = "@firebase/database-compat",
    Eo = "@firebase/functions",
    _o = "@firebase/functions-compat",
    ko = "@firebase/installations",
    Io = "@firebase/installations-compat",
    So = "@firebase/messaging",
    Ao = "@firebase/messaging-compat",
    Co = "@firebase/performance",
    To = "@firebase/performance-compat",
    Po = "@firebase/remote-config",
    Oo = "@firebase/remote-config-compat",
    Lo = "@firebase/storage",
    Ro = "@firebase/storage-compat",
    xo = "@firebase/firestore",
    No = "@firebase/vertexai-preview",
    Do = "@firebase/firestore-compat",
    Mo = "firebase",
    $o = "[DEFAULT]",
    Vo = {
      [so]: "fire-core",
      [uo]: "fire-core-compat",
      [po]: "fire-analytics",
      [ho]: "fire-analytics-compat",
      [go]: "fire-app-check",
      [mo]: "fire-app-check-compat",
      [wo]: "fire-auth",
      [fo]: "fire-auth-compat",
      [vo]: "fire-rtdb",
      [bo]: "fire-data-connect",
      [yo]: "fire-rtdb-compat",
      [Eo]: "fire-fn",
      [_o]: "fire-fn-compat",
      [ko]: "fire-iid",
      [Io]: "fire-iid-compat",
      [So]: "fire-fcm",
      [Ao]: "fire-fcm-compat",
      [Co]: "fire-perf",
      [To]: "fire-perf-compat",
      [Po]: "fire-rc",
      [Oo]: "fire-rc-compat",
      [Lo]: "fire-gcs",
      [Ro]: "fire-gcs-compat",
      [xo]: "fire-fst",
      [Do]: "fire-fst-compat",
      [No]: "fire-vertex",
      "fire-js": "fire-js",
      [Mo]: "fire-js-all",
    },
    Uo = new Map(),
    Bo = new Map(),
    jo = new Map();
  function Go(e, t) {
    try {
      e.container.addComponent(t);
    } catch (n) {
      co.debug(
        `Component ${t.name} failed to register with FirebaseApp ${e.name}`,
        n
      );
    }
  }
  function Ho(e) {
    const t = e.name;
    if (jo.has(t))
      return (
        co.debug(`There were multiple attempts to register component ${t}.`), !1
      );
    jo.set(t, e);
    for (const n of Uo.values()) Go(n, e);
    for (const n of Bo.values()) Go(n, e);
    return !0;
  }
  function Fo(e, t) {
    const n = e.container
      .getProvider("heartbeat")
      .getImmediate({ optional: !0 });
    return n && n.triggerHeartbeat(), e.container.getProvider(t);
  }
  function zo(e) {
    return void 0 !== e.settings;
  }
  const Wo = new Sa("app", "Firebase", {
    "no-app":
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}'",
    "duplicate-app":
      "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "server-app-deleted": "Firebase Server App has been deleted",
    "no-options":
      "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument":
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument":
      "First argument to `onLog` must be null or a function.",
    "idb-open":
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get":
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set":
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete":
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
    "finalization-registry-not-supported":
      "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
    "invalid-server-app-environment":
      "FirebaseServerApp is not for use in browser environments.",
  });
  class Ko {
    constructor(e, t, n) {
      (this._isDeleted = !1),
        (this._options = Object.assign({}, e)),
        (this._config = Object.assign({}, t)),
        (this._name = t.name),
        (this._automaticDataCollectionEnabled =
          t.automaticDataCollectionEnabled),
        (this._container = n),
        this.container.addComponent(new xa("app", () => this, "PUBLIC"));
    }
    get automaticDataCollectionEnabled() {
      return this.checkDestroyed(), this._automaticDataCollectionEnabled;
    }
    set automaticDataCollectionEnabled(e) {
      this.checkDestroyed(), (this._automaticDataCollectionEnabled = e);
    }
    get name() {
      return this.checkDestroyed(), this._name;
    }
    get options() {
      return this.checkDestroyed(), this._options;
    }
    get config() {
      return this.checkDestroyed(), this._config;
    }
    get container() {
      return this._container;
    }
    get isDeleted() {
      return this._isDeleted;
    }
    set isDeleted(e) {
      this._isDeleted = e;
    }
    checkDestroyed() {
      if (this.isDeleted)
        throw Wo.create("app-deleted", { appName: this._name });
    }
  }
  const qo = "10.14.1";
  function Jo(e, t = {}) {
    let n = e;
    if ("object" != typeof t) {
      t = { name: t };
    }
    const r = Object.assign(
        { name: $o, automaticDataCollectionEnabled: !1 },
        t
      ),
      a = r.name;
    if ("string" != typeof a || !a)
      throw Wo.create("bad-app-name", { appName: String(a) });
    if ((n || (n = ya()), !n)) throw Wo.create("no-options");
    const o = Uo.get(a);
    if (o) {
      if (Ca(n, o.options) && Ca(r, o.config)) return o;
      throw Wo.create("duplicate-app", { appName: a });
    }
    const i = new Ma(a);
    for (const l of jo.values()) i.addComponent(l);
    const s = new Ko(n, r, i);
    return Uo.set(a, s), s;
  }
  function Xo(e, t, n) {
    var r;
    let a = null !== (r = Vo[e]) && void 0 !== r ? r : e;
    n && (a += `-${n}`);
    const o = a.match(/\s|\//),
      i = t.match(/\s|\//);
    if (o || i) {
      const e = [`Unable to register library "${a}" with version "${t}":`];
      return (
        o &&
          e.push(
            `library name "${a}" contains illegal characters (whitespace or "/")`
          ),
        o && i && e.push("and"),
        i &&
          e.push(
            `version name "${t}" contains illegal characters (whitespace or "/")`
          ),
        void co.warn(e.join(" "))
      );
    }
    Ho(new xa(`${a}-version`, () => ({ library: a, version: t }), "VERSION"));
  }
  const Yo = "firebase-heartbeat-store";
  let Zo = null;
  function Qo() {
    return (
      Zo ||
        (Zo = (function (
          e,
          t,
          { blocked: n, upgrade: r, blocking: a, terminated: o } = {}
        ) {
          const i = indexedDB.open(e, t),
            s = eo(i);
          return (
            r &&
              i.addEventListener("upgradeneeded", (e) => {
                r(
                  eo(i.result),
                  e.oldVersion,
                  e.newVersion,
                  eo(i.transaction),
                  e
                );
              }),
            n &&
              i.addEventListener("blocked", (e) =>
                n(e.oldVersion, e.newVersion, e)
              ),
            s
              .then((e) => {
                o && e.addEventListener("close", () => o()),
                  a &&
                    e.addEventListener("versionchange", (e) =>
                      a(e.oldVersion, e.newVersion, e)
                    );
              })
              .catch(() => {}),
            s
          );
        })("firebase-heartbeat-database", 1, {
          upgrade: (e, t) => {
            if (0 === t)
              try {
                e.createObjectStore(Yo);
              } catch (n) {
                console.warn(n);
              }
          },
        }).catch((e) => {
          throw Wo.create("idb-open", { originalErrorMessage: e.message });
        })),
      Zo
    );
  }
  async function ei(e, t) {
    try {
      const n = (await Qo()).transaction(Yo, "readwrite"),
        r = n.objectStore(Yo);
      await r.put(t, ti(e)), await n.done;
    } catch (n) {
      if (n instanceof Ia) co.warn(n.message);
      else {
        const e = Wo.create("idb-set", {
          originalErrorMessage: null == n ? void 0 : n.message,
        });
        co.warn(e.message);
      }
    }
  }
  function ti(e) {
    return `${e.name}!${e.options.appId}`;
  }
  class ni {
    constructor(e) {
      (this.container = e), (this._heartbeatsCache = null);
      const t = this.container.getProvider("app").getImmediate();
      (this._storage = new ai(t)),
        (this._heartbeatsCachePromise = this._storage
          .read()
          .then((e) => ((this._heartbeatsCache = e), e)));
    }
    async triggerHeartbeat() {
      var e, t;
      try {
        const n = this.container
            .getProvider("platform-logger")
            .getImmediate()
            .getPlatformInfoString(),
          r = ri();
        if (
          null ==
            (null === (e = this._heartbeatsCache) || void 0 === e
              ? void 0
              : e.heartbeats) &&
          ((this._heartbeatsCache = await this._heartbeatsCachePromise),
          null ==
            (null === (t = this._heartbeatsCache) || void 0 === t
              ? void 0
              : t.heartbeats))
        )
          return;
        if (
          this._heartbeatsCache.lastSentHeartbeatDate === r ||
          this._heartbeatsCache.heartbeats.some((e) => e.date === r)
        )
          return;
        return (
          this._heartbeatsCache.heartbeats.push({ date: r, agent: n }),
          (this._heartbeatsCache.heartbeats =
            this._heartbeatsCache.heartbeats.filter((e) => {
              const t = new Date(e.date).valueOf();
              return Date.now() - t <= 2592e6;
            })),
          this._storage.overwrite(this._heartbeatsCache)
        );
      } catch (n) {
        co.warn(n);
      }
    }
    async getHeartbeatsHeader() {
      var e;
      try {
        if (
          (null === this._heartbeatsCache &&
            (await this._heartbeatsCachePromise),
          null ==
            (null === (e = this._heartbeatsCache) || void 0 === e
              ? void 0
              : e.heartbeats) || 0 === this._heartbeatsCache.heartbeats.length)
        )
          return "";
        const t = ri(),
          { heartbeatsToSend: n, unsentEntries: r } = (function (e, t = 1024) {
            const n = [];
            let r = e.slice();
            for (const a of e) {
              const e = n.find((e) => e.agent === a.agent);
              if (e) {
                if ((e.dates.push(a.date), oi(n) > t)) {
                  e.dates.pop();
                  break;
                }
              } else if (
                (n.push({ agent: a.agent, dates: [a.date] }), oi(n) > t)
              ) {
                n.pop();
                break;
              }
              r = r.slice(1);
            }
            return { heartbeatsToSend: n, unsentEntries: r };
          })(this._heartbeatsCache.heartbeats),
          a = wa(JSON.stringify({ version: 2, heartbeats: n }));
        return (
          (this._heartbeatsCache.lastSentHeartbeatDate = t),
          r.length > 0
            ? ((this._heartbeatsCache.heartbeats = r),
              await this._storage.overwrite(this._heartbeatsCache))
            : ((this._heartbeatsCache.heartbeats = []),
              this._storage.overwrite(this._heartbeatsCache)),
          a
        );
      } catch (t) {
        return co.warn(t), "";
      }
    }
  }
  function ri() {
    return new Date().toISOString().substring(0, 10);
  }
  class ai {
    constructor(e) {
      (this.app = e),
        (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
    }
    async runIndexedDBEnvironmentCheck() {
      return (
        !!(function () {
          try {
            return "object" == typeof indexedDB;
          } catch (e) {
            return !1;
          }
        })() &&
        new Promise((e, t) => {
          try {
            let n = !0;
            const r = "validate-browser-context-for-indexeddb-analytics-module",
              a = self.indexedDB.open(r);
            (a.onsuccess = () => {
              a.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0);
            }),
              (a.onupgradeneeded = () => {
                n = !1;
              }),
              (a.onerror = () => {
                var e;
                t(
                  (null === (e = a.error) || void 0 === e
                    ? void 0
                    : e.message) || ""
                );
              });
          } catch (n) {
            t(n);
          }
        })
          .then(() => !0)
          .catch(() => !1)
      );
    }
    async read() {
      if (await this._canUseIndexedDBPromise) {
        const e = await (async function (e) {
          try {
            const t = (await Qo()).transaction(Yo),
              n = await t.objectStore(Yo).get(ti(e));
            return await t.done, n;
          } catch (t) {
            if (t instanceof Ia) co.warn(t.message);
            else {
              const e = Wo.create("idb-get", {
                originalErrorMessage: null == t ? void 0 : t.message,
              });
              co.warn(e.message);
            }
          }
        })(this.app);
        return (null == e ? void 0 : e.heartbeats) ? e : { heartbeats: [] };
      }
      return { heartbeats: [] };
    }
    async overwrite(e) {
      var t;
      if (await this._canUseIndexedDBPromise) {
        const n = await this.read();
        return ei(this.app, {
          lastSentHeartbeatDate:
            null !== (t = e.lastSentHeartbeatDate) && void 0 !== t
              ? t
              : n.lastSentHeartbeatDate,
          heartbeats: e.heartbeats,
        });
      }
    }
    async add(e) {
      var t;
      if (await this._canUseIndexedDBPromise) {
        const n = await this.read();
        return ei(this.app, {
          lastSentHeartbeatDate:
            null !== (t = e.lastSentHeartbeatDate) && void 0 !== t
              ? t
              : n.lastSentHeartbeatDate,
          heartbeats: [...n.heartbeats, ...e.heartbeats],
        });
      }
    }
  }
  function oi(e) {
    return wa(JSON.stringify({ version: 2, heartbeats: e })).length;
  }
  var ii;
  (ii = ""),
    Ho(new xa("platform-logger", (e) => new io(e), "PRIVATE")),
    Ho(new xa("heartbeat", (e) => new ni(e), "PRIVATE")),
    Xo(so, lo, ii),
    Xo(so, lo, "esm2017"),
    Xo("fire-js", "");
  function si(e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
      var a = 0;
      for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
        t.indexOf(r[a]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
          (n[r[a]] = e[r[a]]);
    }
    return n;
  }
  function li() {
    return {
      "dependent-sdk-initialized-before-auth":
        "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
    };
  }
  Xo("firebase", "10.14.1", "app"),
    "function" == typeof SuppressedError && SuppressedError;
  const ci = li,
    di = new Sa("auth", "Firebase", {
      "dependent-sdk-initialized-before-auth":
        "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
    }),
    ui = new Ha("@firebase/auth");
  function hi(e, ...t) {
    ui.logLevel <= $a.ERROR && ui.error(`Auth (${qo}): ${e}`, ...t);
  }
  function pi(e, ...t) {
    throw fi(e, ...t);
  }
  function mi(e, ...t) {
    return fi(e, ...t);
  }
  function gi(e, t, n) {
    const r = Object.assign(Object.assign({}, ci()), { [t]: n });
    return new Sa("auth", "Firebase", r).create(t, { appName: e.name });
  }
  function wi(e) {
    return gi(
      e,
      "operation-not-supported-in-this-environment",
      "Operations that alter the current user are not supported in conjunction with FirebaseServerApp"
    );
  }
  function fi(e, ...t) {
    if ("string" != typeof e) {
      const n = t[0],
        r = [...t.slice(1)];
      return r[0] && (r[0].appName = e.name), e._errorFactory.create(n, ...r);
    }
    return di.create(e, ...t);
  }
  function vi(e, t, ...n) {
    if (!e) throw fi(t, ...n);
  }
  function bi(e) {
    const t = "INTERNAL ASSERTION FAILED: " + e;
    throw (hi(t), new Error(t));
  }
  function yi(e, t) {
    e || bi(t);
  }
  function Ei() {
    var e;
    return (
      ("undefined" != typeof self &&
        (null === (e = self.location) || void 0 === e ? void 0 : e.href)) ||
      ""
    );
  }
  function _i() {
    var e;
    return (
      ("undefined" != typeof self &&
        (null === (e = self.location) || void 0 === e ? void 0 : e.protocol)) ||
      null
    );
  }
  function ki() {
    return (
      "undefined" == typeof navigator ||
      !navigator ||
      !("onLine" in navigator) ||
      "boolean" != typeof navigator.onLine ||
      ("http:" !== _i() &&
        "https:" !== _i() &&
        !(function () {
          const e =
            "object" == typeof chrome
              ? chrome.runtime
              : "object" == typeof browser
              ? browser.runtime
              : void 0;
          return "object" == typeof e && void 0 !== e.id;
        })() &&
        !("connection" in navigator)) ||
      navigator.onLine
    );
  }
  class Ii {
    constructor(e, t) {
      (this.shortDelay = e),
        (this.longDelay = t),
        yi(t > e, "Short delay should be less than long delay!"),
        (this.isMobile =
          ("undefined" != typeof window &&
            !!(window.cordova || window.phonegap || window.PhoneGap) &&
            /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ka())) ||
          ("object" == typeof navigator &&
            "ReactNative" === navigator.product));
    }
    get() {
      return ki()
        ? this.isMobile
          ? this.longDelay
          : this.shortDelay
        : Math.min(5e3, this.shortDelay);
    }
  }
  function Si(e, t) {
    yi(e.emulator, "Emulator should always be set here");
    const { url: n } = e.emulator;
    return t ? `${n}${t.startsWith("/") ? t.slice(1) : t}` : n;
  }
  class Ai {
    static initialize(e, t, n) {
      (this.fetchImpl = e),
        t && (this.headersImpl = t),
        n && (this.responseImpl = n);
    }
    static fetch() {
      return this.fetchImpl
        ? this.fetchImpl
        : "undefined" != typeof self && "fetch" in self
        ? self.fetch
        : "undefined" != typeof globalThis && globalThis.fetch
        ? globalThis.fetch
        : "undefined" != typeof fetch
        ? fetch
        : void bi(
            "Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
          );
    }
    static headers() {
      return this.headersImpl
        ? this.headersImpl
        : "undefined" != typeof self && "Headers" in self
        ? self.Headers
        : "undefined" != typeof globalThis && globalThis.Headers
        ? globalThis.Headers
        : "undefined" != typeof Headers
        ? Headers
        : void bi(
            "Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
          );
    }
    static response() {
      return this.responseImpl
        ? this.responseImpl
        : "undefined" != typeof self && "Response" in self
        ? self.Response
        : "undefined" != typeof globalThis && globalThis.Response
        ? globalThis.Response
        : "undefined" != typeof Response
        ? Response
        : void bi(
            "Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
          );
    }
  }
  const Ci = {
      CREDENTIAL_MISMATCH: "custom-token-mismatch",
      MISSING_CUSTOM_TOKEN: "internal-error",
      INVALID_IDENTIFIER: "invalid-email",
      MISSING_CONTINUE_URI: "internal-error",
      INVALID_PASSWORD: "wrong-password",
      MISSING_PASSWORD: "missing-password",
      INVALID_LOGIN_CREDENTIALS: "invalid-credential",
      EMAIL_EXISTS: "email-already-in-use",
      PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
      INVALID_IDP_RESPONSE: "invalid-credential",
      INVALID_PENDING_TOKEN: "invalid-credential",
      FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
      MISSING_REQ_TYPE: "internal-error",
      EMAIL_NOT_FOUND: "user-not-found",
      RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
      EXPIRED_OOB_CODE: "expired-action-code",
      INVALID_OOB_CODE: "invalid-action-code",
      MISSING_OOB_CODE: "internal-error",
      CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
      INVALID_ID_TOKEN: "invalid-user-token",
      TOKEN_EXPIRED: "user-token-expired",
      USER_NOT_FOUND: "user-token-expired",
      TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
      PASSWORD_DOES_NOT_MEET_REQUIREMENTS:
        "password-does-not-meet-requirements",
      INVALID_CODE: "invalid-verification-code",
      INVALID_SESSION_INFO: "invalid-verification-id",
      INVALID_TEMPORARY_PROOF: "invalid-credential",
      MISSING_SESSION_INFO: "missing-verification-id",
      SESSION_EXPIRED: "code-expired",
      MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
      UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
      INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
      ADMIN_ONLY_OPERATION: "admin-restricted-operation",
      INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
      MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
      MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
      MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
      SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
      SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
      BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
      RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
      MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
      INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
      INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
      MISSING_CLIENT_TYPE: "missing-client-type",
      MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
      INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
      INVALID_REQ_TYPE: "invalid-req-type",
    },
    Ti = new Ii(3e4, 6e4);
  function Pi(e, t) {
    return e.tenantId && !t.tenantId
      ? Object.assign(Object.assign({}, t), { tenantId: e.tenantId })
      : t;
  }
  async function Oi(e, t, n, r, a = {}) {
    return Li(e, a, async () => {
      let a = {},
        o = {};
      r && ("GET" === t ? (o = r) : (a = { body: JSON.stringify(r) }));
      const i = Pa(Object.assign({ key: e.config.apiKey }, o)).slice(1),
        s = await e._getAdditionalHeaders();
      (s["Content-Type"] = "application/json"),
        e.languageCode && (s["X-Firebase-Locale"] = e.languageCode);
      const l = Object.assign({ method: t, headers: s }, a);
      return (
        ("undefined" != typeof navigator &&
          "Cloudflare-Workers" === navigator.userAgent) ||
          (l.referrerPolicy = "no-referrer"),
        Ai.fetch()(xi(e, e.config.apiHost, n, i), l)
      );
    });
  }
  async function Li(e, t, n) {
    e._canInitEmulator = !1;
    const r = Object.assign(Object.assign({}, Ci), t);
    try {
      const t = new Ni(e),
        a = await Promise.race([n(), t.promise]);
      t.clearNetworkTimeout();
      const o = await a.json();
      if ("needConfirmation" in o)
        throw Di(e, "account-exists-with-different-credential", o);
      if (a.ok && !("errorMessage" in o)) return o;
      {
        const t = a.ok ? o.errorMessage : o.error.message,
          [n, i] = t.split(" : ");
        if ("FEDERATED_USER_ID_ALREADY_LINKED" === n)
          throw Di(e, "credential-already-in-use", o);
        if ("EMAIL_EXISTS" === n) throw Di(e, "email-already-in-use", o);
        if ("USER_DISABLED" === n) throw Di(e, "user-disabled", o);
        const s = r[n] || n.toLowerCase().replace(/[_\s]+/g, "-");
        if (i) throw gi(e, s, i);
        pi(e, s);
      }
    } catch (a) {
      if (a instanceof Ia) throw a;
      pi(e, "network-request-failed", { message: String(a) });
    }
  }
  async function Ri(e, t, n, r, a = {}) {
    const o = await Oi(e, t, n, r, a);
    return (
      "mfaPendingCredential" in o &&
        pi(e, "multi-factor-auth-required", { _serverResponse: o }),
      o
    );
  }
  function xi(e, t, n, r) {
    const a = `${t}${n}?${r}`;
    return e.config.emulator ? Si(e.config, a) : `${e.config.apiScheme}://${a}`;
  }
  class Ni {
    constructor(e) {
      (this.auth = e),
        (this.timer = null),
        (this.promise = new Promise((e, t) => {
          this.timer = setTimeout(
            () => t(mi(this.auth, "network-request-failed")),
            Ti.get()
          );
        }));
    }
    clearNetworkTimeout() {
      clearTimeout(this.timer);
    }
  }
  function Di(e, t, n) {
    const r = { appName: e.name };
    n.email && (r.email = n.email),
      n.phoneNumber && (r.phoneNumber = n.phoneNumber);
    const a = mi(e, t, r);
    return (a.customData._tokenResponse = n), a;
  }
  async function Mi(e, t) {
    return Oi(e, "POST", "/v1/accounts:lookup", t);
  }
  function $i(e) {
    if (e)
      try {
        const t = new Date(Number(e));
        if (!isNaN(t.getTime())) return t.toUTCString();
      } catch (t) {}
  }
  function Vi(e) {
    return 1e3 * Number(e);
  }
  function Ui(e) {
    const [t, n, r] = e.split(".");
    if (void 0 === t || void 0 === n || void 0 === r)
      return hi("JWT malformed, contained fewer than 3 sections"), null;
    try {
      const e = fa(n);
      return e
        ? JSON.parse(e)
        : (hi("Failed to decode base64 JWT payload"), null);
    } catch (a) {
      return (
        hi(
          "Caught error parsing JWT payload as JSON",
          null == a ? void 0 : a.toString()
        ),
        null
      );
    }
  }
  function Bi(e) {
    const t = Ui(e);
    return (
      vi(t, "internal-error"),
      vi(void 0 !== t.exp, "internal-error"),
      vi(void 0 !== t.iat, "internal-error"),
      Number(t.exp) - Number(t.iat)
    );
  }
  async function ji(e, t, n = !1) {
    if (n) return t;
    try {
      return await t;
    } catch (r) {
      throw (
        (r instanceof Ia &&
          (function ({ code: e }) {
            return (
              "auth/user-disabled" === e || "auth/user-token-expired" === e
            );
          })(r) &&
          e.auth.currentUser === e &&
          (await e.auth.signOut()),
        r)
      );
    }
  }
  class Gi {
    constructor(e) {
      (this.user = e),
        (this.isRunning = !1),
        (this.timerId = null),
        (this.errorBackoff = 3e4);
    }
    _start() {
      this.isRunning || ((this.isRunning = !0), this.schedule());
    }
    _stop() {
      this.isRunning &&
        ((this.isRunning = !1),
        null !== this.timerId && clearTimeout(this.timerId));
    }
    getInterval(e) {
      var t;
      if (e) {
        const e = this.errorBackoff;
        return (this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4)), e;
      }
      {
        this.errorBackoff = 3e4;
        const e =
          (null !== (t = this.user.stsTokenManager.expirationTime) &&
          void 0 !== t
            ? t
            : 0) -
          Date.now() -
          3e5;
        return Math.max(0, e);
      }
    }
    schedule(e = !1) {
      if (!this.isRunning) return;
      const t = this.getInterval(e);
      this.timerId = setTimeout(async () => {
        await this.iteration();
      }, t);
    }
    async iteration() {
      try {
        await this.user.getIdToken(!0);
      } catch (e) {
        return void (
          "auth/network-request-failed" === (null == e ? void 0 : e.code) &&
          this.schedule(!0)
        );
      }
      this.schedule();
    }
  }
  class Hi {
    constructor(e, t) {
      (this.createdAt = e), (this.lastLoginAt = t), this._initializeTime();
    }
    _initializeTime() {
      (this.lastSignInTime = $i(this.lastLoginAt)),
        (this.creationTime = $i(this.createdAt));
    }
    _copy(e) {
      (this.createdAt = e.createdAt),
        (this.lastLoginAt = e.lastLoginAt),
        this._initializeTime();
    }
    toJSON() {
      return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
    }
  }
  async function Fi(e) {
    var t;
    const n = e.auth,
      r = await e.getIdToken(),
      a = await ji(e, Mi(n, { idToken: r }));
    vi(null == a ? void 0 : a.users.length, n, "internal-error");
    const o = a.users[0];
    e._notifyReloadListener(o);
    const i = (
        null === (t = o.providerUserInfo) || void 0 === t ? void 0 : t.length
      )
        ? zi(o.providerUserInfo)
        : [],
      s =
        ((l = e.providerData),
        (c = i),
        [
          ...l.filter((e) => !c.some((t) => t.providerId === e.providerId)),
          ...c,
        ]);
    var l, c;
    const d = e.isAnonymous,
      u = !((e.email && o.passwordHash) || (null == s ? void 0 : s.length)),
      h = !!d && u,
      p = {
        uid: o.localId,
        displayName: o.displayName || null,
        photoURL: o.photoUrl || null,
        email: o.email || null,
        emailVerified: o.emailVerified || !1,
        phoneNumber: o.phoneNumber || null,
        tenantId: o.tenantId || null,
        providerData: s,
        metadata: new Hi(o.createdAt, o.lastLoginAt),
        isAnonymous: h,
      };
    Object.assign(e, p);
  }
  function zi(e) {
    return e.map((e) => {
      var { providerId: t } = e,
        n = si(e, ["providerId"]);
      return {
        providerId: t,
        uid: n.rawId || "",
        displayName: n.displayName || null,
        email: n.email || null,
        phoneNumber: n.phoneNumber || null,
        photoURL: n.photoUrl || null,
      };
    });
  }
  class Wi {
    constructor() {
      (this.refreshToken = null),
        (this.accessToken = null),
        (this.expirationTime = null);
    }
    get isExpired() {
      return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
    }
    updateFromServerResponse(e) {
      vi(e.idToken, "internal-error"),
        vi(void 0 !== e.idToken, "internal-error"),
        vi(void 0 !== e.refreshToken, "internal-error");
      const t =
        "expiresIn" in e && void 0 !== e.expiresIn
          ? Number(e.expiresIn)
          : Bi(e.idToken);
      this.updateTokensAndExpiration(e.idToken, e.refreshToken, t);
    }
    updateFromIdToken(e) {
      vi(0 !== e.length, "internal-error");
      const t = Bi(e);
      this.updateTokensAndExpiration(e, null, t);
    }
    async getToken(e, t = !1) {
      return t || !this.accessToken || this.isExpired
        ? (vi(this.refreshToken, e, "user-token-expired"),
          this.refreshToken
            ? (await this.refresh(e, this.refreshToken), this.accessToken)
            : null)
        : this.accessToken;
    }
    clearRefreshToken() {
      this.refreshToken = null;
    }
    async refresh(e, t) {
      const {
        accessToken: n,
        refreshToken: r,
        expiresIn: a,
      } = await (async function (e, t) {
        const n = await Li(e, {}, async () => {
          const n = Pa({ grant_type: "refresh_token", refresh_token: t }).slice(
              1
            ),
            { tokenApiHost: r, apiKey: a } = e.config,
            o = xi(e, r, "/v1/token", `key=${a}`),
            i = await e._getAdditionalHeaders();
          return (
            (i["Content-Type"] = "application/x-www-form-urlencoded"),
            Ai.fetch()(o, { method: "POST", headers: i, body: n })
          );
        });
        return {
          accessToken: n.access_token,
          expiresIn: n.expires_in,
          refreshToken: n.refresh_token,
        };
      })(e, t);
      this.updateTokensAndExpiration(n, r, Number(a));
    }
    updateTokensAndExpiration(e, t, n) {
      (this.refreshToken = t || null),
        (this.accessToken = e || null),
        (this.expirationTime = Date.now() + 1e3 * n);
    }
    static fromJSON(e, t) {
      const { refreshToken: n, accessToken: r, expirationTime: a } = t,
        o = new Wi();
      return (
        n &&
          (vi("string" == typeof n, "internal-error", { appName: e }),
          (o.refreshToken = n)),
        r &&
          (vi("string" == typeof r, "internal-error", { appName: e }),
          (o.accessToken = r)),
        a &&
          (vi("number" == typeof a, "internal-error", { appName: e }),
          (o.expirationTime = a)),
        o
      );
    }
    toJSON() {
      return {
        refreshToken: this.refreshToken,
        accessToken: this.accessToken,
        expirationTime: this.expirationTime,
      };
    }
    _assign(e) {
      (this.accessToken = e.accessToken),
        (this.refreshToken = e.refreshToken),
        (this.expirationTime = e.expirationTime);
    }
    _clone() {
      return Object.assign(new Wi(), this.toJSON());
    }
    _performRefresh() {
      return bi("not implemented");
    }
  }
  function Ki(e, t) {
    vi("string" == typeof e || void 0 === e, "internal-error", { appName: t });
  }
  class qi {
    constructor(e) {
      var { uid: t, auth: n, stsTokenManager: r } = e,
        a = si(e, ["uid", "auth", "stsTokenManager"]);
      (this.providerId = "firebase"),
        (this.proactiveRefresh = new Gi(this)),
        (this.reloadUserInfo = null),
        (this.reloadListener = null),
        (this.uid = t),
        (this.auth = n),
        (this.stsTokenManager = r),
        (this.accessToken = r.accessToken),
        (this.displayName = a.displayName || null),
        (this.email = a.email || null),
        (this.emailVerified = a.emailVerified || !1),
        (this.phoneNumber = a.phoneNumber || null),
        (this.photoURL = a.photoURL || null),
        (this.isAnonymous = a.isAnonymous || !1),
        (this.tenantId = a.tenantId || null),
        (this.providerData = a.providerData ? [...a.providerData] : []),
        (this.metadata = new Hi(
          a.createdAt || void 0,
          a.lastLoginAt || void 0
        ));
    }
    async getIdToken(e) {
      const t = await ji(this, this.stsTokenManager.getToken(this.auth, e));
      return (
        vi(t, this.auth, "internal-error"),
        this.accessToken !== t &&
          ((this.accessToken = t),
          await this.auth._persistUserIfCurrent(this),
          this.auth._notifyListenersIfCurrent(this)),
        t
      );
    }
    getIdTokenResult(e) {
      return (async function (e, t = !1) {
        const n = Ra(e),
          r = await n.getIdToken(t),
          a = Ui(r);
        vi(a && a.exp && a.auth_time && a.iat, n.auth, "internal-error");
        const o = "object" == typeof a.firebase ? a.firebase : void 0,
          i = null == o ? void 0 : o.sign_in_provider;
        return {
          claims: a,
          token: r,
          authTime: $i(Vi(a.auth_time)),
          issuedAtTime: $i(Vi(a.iat)),
          expirationTime: $i(Vi(a.exp)),
          signInProvider: i || null,
          signInSecondFactor:
            (null == o ? void 0 : o.sign_in_second_factor) || null,
        };
      })(this, e);
    }
    reload() {
      return (async function (e) {
        const t = Ra(e);
        await Fi(t),
          await t.auth._persistUserIfCurrent(t),
          t.auth._notifyListenersIfCurrent(t);
      })(this);
    }
    _assign(e) {
      this !== e &&
        (vi(this.uid === e.uid, this.auth, "internal-error"),
        (this.displayName = e.displayName),
        (this.photoURL = e.photoURL),
        (this.email = e.email),
        (this.emailVerified = e.emailVerified),
        (this.phoneNumber = e.phoneNumber),
        (this.isAnonymous = e.isAnonymous),
        (this.tenantId = e.tenantId),
        (this.providerData = e.providerData.map((e) => Object.assign({}, e))),
        this.metadata._copy(e.metadata),
        this.stsTokenManager._assign(e.stsTokenManager));
    }
    _clone(e) {
      const t = new qi(
        Object.assign(Object.assign({}, this), {
          auth: e,
          stsTokenManager: this.stsTokenManager._clone(),
        })
      );
      return t.metadata._copy(this.metadata), t;
    }
    _onReload(e) {
      vi(!this.reloadListener, this.auth, "internal-error"),
        (this.reloadListener = e),
        this.reloadUserInfo &&
          (this._notifyReloadListener(this.reloadUserInfo),
          (this.reloadUserInfo = null));
    }
    _notifyReloadListener(e) {
      this.reloadListener ? this.reloadListener(e) : (this.reloadUserInfo = e);
    }
    _startProactiveRefresh() {
      this.proactiveRefresh._start();
    }
    _stopProactiveRefresh() {
      this.proactiveRefresh._stop();
    }
    async _updateTokensIfNecessary(e, t = !1) {
      let n = !1;
      e.idToken &&
        e.idToken !== this.stsTokenManager.accessToken &&
        (this.stsTokenManager.updateFromServerResponse(e), (n = !0)),
        t && (await Fi(this)),
        await this.auth._persistUserIfCurrent(this),
        n && this.auth._notifyListenersIfCurrent(this);
    }
    async delete() {
      if (zo(this.auth.app)) return Promise.reject(wi(this.auth));
      const e = await this.getIdToken();
      return (
        await ji(
          this,
          (async function (e, t) {
            return Oi(e, "POST", "/v1/accounts:delete", t);
          })(this.auth, { idToken: e })
        ),
        this.stsTokenManager.clearRefreshToken(),
        this.auth.signOut()
      );
    }
    toJSON() {
      return Object.assign(
        Object.assign(
          {
            uid: this.uid,
            email: this.email || void 0,
            emailVerified: this.emailVerified,
            displayName: this.displayName || void 0,
            isAnonymous: this.isAnonymous,
            photoURL: this.photoURL || void 0,
            phoneNumber: this.phoneNumber || void 0,
            tenantId: this.tenantId || void 0,
            providerData: this.providerData.map((e) => Object.assign({}, e)),
            stsTokenManager: this.stsTokenManager.toJSON(),
            _redirectEventId: this._redirectEventId,
          },
          this.metadata.toJSON()
        ),
        { apiKey: this.auth.config.apiKey, appName: this.auth.name }
      );
    }
    get refreshToken() {
      return this.stsTokenManager.refreshToken || "";
    }
    static _fromJSON(e, t) {
      var n, r, a, o, i, s, l, c;
      const d = null !== (n = t.displayName) && void 0 !== n ? n : void 0,
        u = null !== (r = t.email) && void 0 !== r ? r : void 0,
        h = null !== (a = t.phoneNumber) && void 0 !== a ? a : void 0,
        p = null !== (o = t.photoURL) && void 0 !== o ? o : void 0,
        m = null !== (i = t.tenantId) && void 0 !== i ? i : void 0,
        g = null !== (s = t._redirectEventId) && void 0 !== s ? s : void 0,
        w = null !== (l = t.createdAt) && void 0 !== l ? l : void 0,
        f = null !== (c = t.lastLoginAt) && void 0 !== c ? c : void 0,
        {
          uid: v,
          emailVerified: b,
          isAnonymous: y,
          providerData: E,
          stsTokenManager: _,
        } = t;
      vi(v && _, e, "internal-error");
      const k = Wi.fromJSON(this.name, _);
      vi("string" == typeof v, e, "internal-error"),
        Ki(d, e.name),
        Ki(u, e.name),
        vi("boolean" == typeof b, e, "internal-error"),
        vi("boolean" == typeof y, e, "internal-error"),
        Ki(h, e.name),
        Ki(p, e.name),
        Ki(m, e.name),
        Ki(g, e.name),
        Ki(w, e.name),
        Ki(f, e.name);
      const I = new qi({
        uid: v,
        auth: e,
        email: u,
        emailVerified: b,
        displayName: d,
        isAnonymous: y,
        photoURL: p,
        phoneNumber: h,
        tenantId: m,
        stsTokenManager: k,
        createdAt: w,
        lastLoginAt: f,
      });
      return (
        E &&
          Array.isArray(E) &&
          (I.providerData = E.map((e) => Object.assign({}, e))),
        g && (I._redirectEventId = g),
        I
      );
    }
    static async _fromIdTokenResponse(e, t, n = !1) {
      const r = new Wi();
      r.updateFromServerResponse(t);
      const a = new qi({
        uid: t.localId,
        auth: e,
        stsTokenManager: r,
        isAnonymous: n,
      });
      return await Fi(a), a;
    }
    static async _fromGetAccountInfoResponse(e, t, n) {
      const r = t.users[0];
      vi(void 0 !== r.localId, "internal-error");
      const a = void 0 !== r.providerUserInfo ? zi(r.providerUserInfo) : [],
        o = !((r.email && r.passwordHash) || (null == a ? void 0 : a.length)),
        i = new Wi();
      i.updateFromIdToken(n);
      const s = new qi({
          uid: r.localId,
          auth: e,
          stsTokenManager: i,
          isAnonymous: o,
        }),
        l = {
          uid: r.localId,
          displayName: r.displayName || null,
          photoURL: r.photoUrl || null,
          email: r.email || null,
          emailVerified: r.emailVerified || !1,
          phoneNumber: r.phoneNumber || null,
          tenantId: r.tenantId || null,
          providerData: a,
          metadata: new Hi(r.createdAt, r.lastLoginAt),
          isAnonymous: !(
            (r.email && r.passwordHash) ||
            (null == a ? void 0 : a.length)
          ),
        };
      return Object.assign(s, l), s;
    }
  }
  const Ji = new Map();
  function Xi(e) {
    yi(e instanceof Function, "Expected a class definition");
    let t = Ji.get(e);
    return t
      ? (yi(t instanceof e, "Instance stored in cache mismatched with class"),
        t)
      : ((t = new e()), Ji.set(e, t), t);
  }
  class Yi {
    constructor() {
      (this.type = "NONE"), (this.storage = {});
    }
    async _isAvailable() {
      return !0;
    }
    async _set(e, t) {
      this.storage[e] = t;
    }
    async _get(e) {
      const t = this.storage[e];
      return void 0 === t ? null : t;
    }
    async _remove(e) {
      delete this.storage[e];
    }
    _addListener(e, t) {}
    _removeListener(e, t) {}
  }
  Yi.type = "NONE";
  const Zi = Yi;
  function Qi(e, t, n) {
    return `firebase:${e}:${t}:${n}`;
  }
  class es {
    constructor(e, t, n) {
      (this.persistence = e), (this.auth = t), (this.userKey = n);
      const { config: r, name: a } = this.auth;
      (this.fullUserKey = Qi(this.userKey, r.apiKey, a)),
        (this.fullPersistenceKey = Qi("persistence", r.apiKey, a)),
        (this.boundEventHandler = t._onStorageEvent.bind(t)),
        this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
    }
    setCurrentUser(e) {
      return this.persistence._set(this.fullUserKey, e.toJSON());
    }
    async getCurrentUser() {
      const e = await this.persistence._get(this.fullUserKey);
      return e ? qi._fromJSON(this.auth, e) : null;
    }
    removeCurrentUser() {
      return this.persistence._remove(this.fullUserKey);
    }
    savePersistenceForRedirect() {
      return this.persistence._set(
        this.fullPersistenceKey,
        this.persistence.type
      );
    }
    async setPersistence(e) {
      if (this.persistence === e) return;
      const t = await this.getCurrentUser();
      return (
        await this.removeCurrentUser(),
        (this.persistence = e),
        t ? this.setCurrentUser(t) : void 0
      );
    }
    delete() {
      this.persistence._removeListener(
        this.fullUserKey,
        this.boundEventHandler
      );
    }
    static async create(e, t, n = "authUser") {
      if (!t.length) return new es(Xi(Zi), e, n);
      const r = (
        await Promise.all(
          t.map(async (e) => {
            if (await e._isAvailable()) return e;
          })
        )
      ).filter((e) => e);
      let a = r[0] || Xi(Zi);
      const o = Qi(n, e.config.apiKey, e.name);
      let i = null;
      for (const c of t)
        try {
          const t = await c._get(o);
          if (t) {
            const n = qi._fromJSON(e, t);
            c !== a && (i = n), (a = c);
            break;
          }
        } catch (l) {}
      const s = r.filter((e) => e._shouldAllowMigration);
      return a._shouldAllowMigration && s.length
        ? ((a = s[0]),
          i && (await a._set(o, i.toJSON())),
          await Promise.all(
            t.map(async (e) => {
              if (e !== a)
                try {
                  await e._remove(o);
                } catch (l) {}
            })
          ),
          new es(a, e, n))
        : new es(a, e, n);
    }
  }
  function ts(e) {
    const t = e.toLowerCase();
    if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/"))
      return "Opera";
    if (os(t)) return "IEMobile";
    if (t.includes("msie") || t.includes("trident/")) return "IE";
    if (t.includes("edge/")) return "Edge";
    if (ns(t)) return "Firefox";
    if (t.includes("silk/")) return "Silk";
    if (ss(t)) return "Blackberry";
    if (ls(t)) return "Webos";
    if (rs(t)) return "Safari";
    if ((t.includes("chrome/") || as(t)) && !t.includes("edge/"))
      return "Chrome";
    if (is(t)) return "Android";
    {
      const t = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
        n = e.match(t);
      if (2 === (null == n ? void 0 : n.length)) return n[1];
    }
    return "Other";
  }
  function ns(e = ka()) {
    return /firefox\//i.test(e);
  }
  function rs(e = ka()) {
    const t = e.toLowerCase();
    return (
      t.includes("safari/") &&
      !t.includes("chrome/") &&
      !t.includes("crios/") &&
      !t.includes("android")
    );
  }
  function as(e = ka()) {
    return /crios\//i.test(e);
  }
  function os(e = ka()) {
    return /iemobile/i.test(e);
  }
  function is(e = ka()) {
    return /android/i.test(e);
  }
  function ss(e = ka()) {
    return /blackberry/i.test(e);
  }
  function ls(e = ka()) {
    return /webos/i.test(e);
  }
  function cs(e = ka()) {
    return (
      /iphone|ipad|ipod/i.test(e) || (/macintosh/i.test(e) && /mobile/i.test(e))
    );
  }
  function ds() {
    return (
      (function () {
        const e = ka();
        return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0;
      })() && 10 === document.documentMode
    );
  }
  function us(e = ka()) {
    return (
      cs(e) || is(e) || ls(e) || ss(e) || /windows phone/i.test(e) || os(e)
    );
  }
  function hs(e, t = []) {
    let n;
    switch (e) {
      case "Browser":
        n = ts(ka());
        break;
      case "Worker":
        n = `${ts(ka())}-${e}`;
        break;
      default:
        n = e;
    }
    const r = t.length ? t.join(",") : "FirebaseCore-web";
    return `${n}/JsCore/${qo}/${r}`;
  }
  class ps {
    constructor(e) {
      (this.auth = e), (this.queue = []);
    }
    pushCallback(e, t) {
      const n = (t) =>
        new Promise((n, r) => {
          try {
            n(e(t));
          } catch (a) {
            r(a);
          }
        });
      (n.onAbort = t), this.queue.push(n);
      const r = this.queue.length - 1;
      return () => {
        this.queue[r] = () => Promise.resolve();
      };
    }
    async runMiddleware(e) {
      if (this.auth.currentUser === e) return;
      const t = [];
      try {
        for (const n of this.queue) await n(e), n.onAbort && t.push(n.onAbort);
      } catch (n) {
        t.reverse();
        for (const e of t)
          try {
            e();
          } catch (r) {}
        throw this.auth._errorFactory.create("login-blocked", {
          originalMessage: null == n ? void 0 : n.message,
        });
      }
    }
  }
  class ms {
    constructor(e) {
      var t, n, r, a;
      const o = e.customStrengthOptions;
      (this.customStrengthOptions = {}),
        (this.customStrengthOptions.minPasswordLength =
          null !== (t = o.minPasswordLength) && void 0 !== t ? t : 6),
        o.maxPasswordLength &&
          (this.customStrengthOptions.maxPasswordLength = o.maxPasswordLength),
        void 0 !== o.containsLowercaseCharacter &&
          (this.customStrengthOptions.containsLowercaseLetter =
            o.containsLowercaseCharacter),
        void 0 !== o.containsUppercaseCharacter &&
          (this.customStrengthOptions.containsUppercaseLetter =
            o.containsUppercaseCharacter),
        void 0 !== o.containsNumericCharacter &&
          (this.customStrengthOptions.containsNumericCharacter =
            o.containsNumericCharacter),
        void 0 !== o.containsNonAlphanumericCharacter &&
          (this.customStrengthOptions.containsNonAlphanumericCharacter =
            o.containsNonAlphanumericCharacter),
        (this.enforcementState = e.enforcementState),
        "ENFORCEMENT_STATE_UNSPECIFIED" === this.enforcementState &&
          (this.enforcementState = "OFF"),
        (this.allowedNonAlphanumericCharacters =
          null !==
            (r =
              null === (n = e.allowedNonAlphanumericCharacters) || void 0 === n
                ? void 0
                : n.join("")) && void 0 !== r
            ? r
            : ""),
        (this.forceUpgradeOnSignin =
          null !== (a = e.forceUpgradeOnSignin) && void 0 !== a && a),
        (this.schemaVersion = e.schemaVersion);
    }
    validatePassword(e) {
      var t, n, r, a, o, i;
      const s = { isValid: !0, passwordPolicy: this };
      return (
        this.validatePasswordLengthOptions(e, s),
        this.validatePasswordCharacterOptions(e, s),
        s.isValid &&
          (s.isValid =
            null === (t = s.meetsMinPasswordLength) || void 0 === t || t),
        s.isValid &&
          (s.isValid =
            null === (n = s.meetsMaxPasswordLength) || void 0 === n || n),
        s.isValid &&
          (s.isValid =
            null === (r = s.containsLowercaseLetter) || void 0 === r || r),
        s.isValid &&
          (s.isValid =
            null === (a = s.containsUppercaseLetter) || void 0 === a || a),
        s.isValid &&
          (s.isValid =
            null === (o = s.containsNumericCharacter) || void 0 === o || o),
        s.isValid &&
          (s.isValid =
            null === (i = s.containsNonAlphanumericCharacter) ||
            void 0 === i ||
            i),
        s
      );
    }
    validatePasswordLengthOptions(e, t) {
      const n = this.customStrengthOptions.minPasswordLength,
        r = this.customStrengthOptions.maxPasswordLength;
      n && (t.meetsMinPasswordLength = e.length >= n),
        r && (t.meetsMaxPasswordLength = e.length <= r);
    }
    validatePasswordCharacterOptions(e, t) {
      let n;
      this.updatePasswordCharacterOptionsStatuses(t, !1, !1, !1, !1);
      for (let r = 0; r < e.length; r++)
        (n = e.charAt(r)),
          this.updatePasswordCharacterOptionsStatuses(
            t,
            n >= "a" && n <= "z",
            n >= "A" && n <= "Z",
            n >= "0" && n <= "9",
            this.allowedNonAlphanumericCharacters.includes(n)
          );
    }
    updatePasswordCharacterOptionsStatuses(e, t, n, r, a) {
      this.customStrengthOptions.containsLowercaseLetter &&
        (e.containsLowercaseLetter || (e.containsLowercaseLetter = t)),
        this.customStrengthOptions.containsUppercaseLetter &&
          (e.containsUppercaseLetter || (e.containsUppercaseLetter = n)),
        this.customStrengthOptions.containsNumericCharacter &&
          (e.containsNumericCharacter || (e.containsNumericCharacter = r)),
        this.customStrengthOptions.containsNonAlphanumericCharacter &&
          (e.containsNonAlphanumericCharacter ||
            (e.containsNonAlphanumericCharacter = a));
    }
  }
  class gs {
    constructor(e, t, n, r) {
      (this.app = e),
        (this.heartbeatServiceProvider = t),
        (this.appCheckServiceProvider = n),
        (this.config = r),
        (this.currentUser = null),
        (this.emulatorConfig = null),
        (this.operations = Promise.resolve()),
        (this.authStateSubscription = new fs(this)),
        (this.idTokenSubscription = new fs(this)),
        (this.beforeStateQueue = new ps(this)),
        (this.redirectUser = null),
        (this.isProactiveRefreshEnabled = !1),
        (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
        (this._canInitEmulator = !0),
        (this._isInitialized = !1),
        (this._deleted = !1),
        (this._initializationPromise = null),
        (this._popupRedirectResolver = null),
        (this._errorFactory = di),
        (this._agentRecaptchaConfig = null),
        (this._tenantRecaptchaConfigs = {}),
        (this._projectPasswordPolicy = null),
        (this._tenantPasswordPolicies = {}),
        (this.lastNotifiedUid = void 0),
        (this.languageCode = null),
        (this.tenantId = null),
        (this.settings = { appVerificationDisabledForTesting: !1 }),
        (this.frameworks = []),
        (this.name = e.name),
        (this.clientVersion = r.sdkClientVersion);
    }
    _initializeWithPersistence(e, t) {
      return (
        t && (this._popupRedirectResolver = Xi(t)),
        (this._initializationPromise = this.queue(async () => {
          var n, r;
          if (
            !this._deleted &&
            ((this.persistenceManager = await es.create(this, e)),
            !this._deleted)
          ) {
            if (
              null === (n = this._popupRedirectResolver) || void 0 === n
                ? void 0
                : n._shouldInitProactively
            )
              try {
                await this._popupRedirectResolver._initialize(this);
              } catch (a) {}
            await this.initializeCurrentUser(t),
              (this.lastNotifiedUid =
                (null === (r = this.currentUser) || void 0 === r
                  ? void 0
                  : r.uid) || null),
              this._deleted || (this._isInitialized = !0);
          }
        })),
        this._initializationPromise
      );
    }
    async _onStorageEvent() {
      if (this._deleted) return;
      const e = await this.assertedPersistence.getCurrentUser();
      return this.currentUser || e
        ? this.currentUser && e && this.currentUser.uid === e.uid
          ? (this._currentUser._assign(e),
            void (await this.currentUser.getIdToken()))
          : void (await this._updateCurrentUser(e, !0))
        : void 0;
    }
    async initializeCurrentUserFromIdToken(e) {
      try {
        const t = await Mi(this, { idToken: e }),
          n = await qi._fromGetAccountInfoResponse(this, t, e);
        await this.directlySetCurrentUser(n);
      } catch (t) {
        console.warn(
          "FirebaseServerApp could not login user with provided authIdToken: ",
          t
        ),
          await this.directlySetCurrentUser(null);
      }
    }
    async initializeCurrentUser(e) {
      var t;
      if (zo(this.app)) {
        const e = this.app.settings.authIdToken;
        return e
          ? new Promise((t) => {
              setTimeout(() =>
                this.initializeCurrentUserFromIdToken(e).then(t, t)
              );
            })
          : this.directlySetCurrentUser(null);
      }
      const n = await this.assertedPersistence.getCurrentUser();
      let r = n,
        a = !1;
      if (e && this.config.authDomain) {
        await this.getOrInitRedirectPersistenceManager();
        const n =
            null === (t = this.redirectUser) || void 0 === t
              ? void 0
              : t._redirectEventId,
          o = null == r ? void 0 : r._redirectEventId,
          i = await this.tryRedirectSignIn(e);
        (n && n !== o) ||
          !(null == i ? void 0 : i.user) ||
          ((r = i.user), (a = !0));
      }
      if (!r) return this.directlySetCurrentUser(null);
      if (!r._redirectEventId) {
        if (a)
          try {
            await this.beforeStateQueue.runMiddleware(r);
          } catch (o) {
            (r = n),
              this._popupRedirectResolver._overrideRedirectResult(this, () =>
                Promise.reject(o)
              );
          }
        return r
          ? this.reloadAndSetCurrentUserOrClear(r)
          : this.directlySetCurrentUser(null);
      }
      return (
        vi(this._popupRedirectResolver, this, "argument-error"),
        await this.getOrInitRedirectPersistenceManager(),
        this.redirectUser &&
        this.redirectUser._redirectEventId === r._redirectEventId
          ? this.directlySetCurrentUser(r)
          : this.reloadAndSetCurrentUserOrClear(r)
      );
    }
    async tryRedirectSignIn(e) {
      let t = null;
      try {
        t = await this._popupRedirectResolver._completeRedirectFn(this, e, !0);
      } catch (n) {
        await this._setRedirectUser(null);
      }
      return t;
    }
    async reloadAndSetCurrentUserOrClear(e) {
      try {
        await Fi(e);
      } catch (t) {
        if ("auth/network-request-failed" !== (null == t ? void 0 : t.code))
          return this.directlySetCurrentUser(null);
      }
      return this.directlySetCurrentUser(e);
    }
    useDeviceLanguage() {
      this.languageCode = (function () {
        if ("undefined" == typeof navigator) return null;
        const e = navigator;
        return (e.languages && e.languages[0]) || e.language || null;
      })();
    }
    async _delete() {
      this._deleted = !0;
    }
    async updateCurrentUser(e) {
      if (zo(this.app)) return Promise.reject(wi(this));
      const t = e ? Ra(e) : null;
      return (
        t &&
          vi(
            t.auth.config.apiKey === this.config.apiKey,
            this,
            "invalid-user-token"
          ),
        this._updateCurrentUser(t && t._clone(this))
      );
    }
    async _updateCurrentUser(e, t = !1) {
      if (!this._deleted)
        return (
          e && vi(this.tenantId === e.tenantId, this, "tenant-id-mismatch"),
          t || (await this.beforeStateQueue.runMiddleware(e)),
          this.queue(async () => {
            await this.directlySetCurrentUser(e), this.notifyAuthListeners();
          })
        );
    }
    async signOut() {
      return zo(this.app)
        ? Promise.reject(wi(this))
        : (await this.beforeStateQueue.runMiddleware(null),
          (this.redirectPersistenceManager || this._popupRedirectResolver) &&
            (await this._setRedirectUser(null)),
          this._updateCurrentUser(null, !0));
    }
    setPersistence(e) {
      return zo(this.app)
        ? Promise.reject(wi(this))
        : this.queue(async () => {
            await this.assertedPersistence.setPersistence(Xi(e));
          });
    }
    _getRecaptchaConfig() {
      return null == this.tenantId
        ? this._agentRecaptchaConfig
        : this._tenantRecaptchaConfigs[this.tenantId];
    }
    async validatePassword(e) {
      this._getPasswordPolicyInternal() || (await this._updatePasswordPolicy());
      const t = this._getPasswordPolicyInternal();
      return t.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
        ? Promise.reject(
            this._errorFactory.create(
              "unsupported-password-policy-schema-version",
              {}
            )
          )
        : t.validatePassword(e);
    }
    _getPasswordPolicyInternal() {
      return null === this.tenantId
        ? this._projectPasswordPolicy
        : this._tenantPasswordPolicies[this.tenantId];
    }
    async _updatePasswordPolicy() {
      const e = await (async function (e, t = {}) {
          return Oi(e, "GET", "/v2/passwordPolicy", Pi(e, t));
        })(this),
        t = new ms(e);
      null === this.tenantId
        ? (this._projectPasswordPolicy = t)
        : (this._tenantPasswordPolicies[this.tenantId] = t);
    }
    _getPersistence() {
      return this.assertedPersistence.persistence.type;
    }
    _updateErrorMap(e) {
      this._errorFactory = new Sa("auth", "Firebase", e());
    }
    onAuthStateChanged(e, t, n) {
      return this.registerStateListener(this.authStateSubscription, e, t, n);
    }
    beforeAuthStateChanged(e, t) {
      return this.beforeStateQueue.pushCallback(e, t);
    }
    onIdTokenChanged(e, t, n) {
      return this.registerStateListener(this.idTokenSubscription, e, t, n);
    }
    authStateReady() {
      return new Promise((e, t) => {
        if (this.currentUser) e();
        else {
          const n = this.onAuthStateChanged(() => {
            n(), e();
          }, t);
        }
      });
    }
    async revokeAccessToken(e) {
      if (this.currentUser) {
        const t = {
          providerId: "apple.com",
          tokenType: "ACCESS_TOKEN",
          token: e,
          idToken: await this.currentUser.getIdToken(),
        };
        null != this.tenantId && (t.tenantId = this.tenantId),
          await (async function (e, t) {
            return Oi(e, "POST", "/v2/accounts:revokeToken", Pi(e, t));
          })(this, t);
      }
    }
    toJSON() {
      var e;
      return {
        apiKey: this.config.apiKey,
        authDomain: this.config.authDomain,
        appName: this.name,
        currentUser:
          null === (e = this._currentUser) || void 0 === e
            ? void 0
            : e.toJSON(),
      };
    }
    async _setRedirectUser(e, t) {
      const n = await this.getOrInitRedirectPersistenceManager(t);
      return null === e ? n.removeCurrentUser() : n.setCurrentUser(e);
    }
    async getOrInitRedirectPersistenceManager(e) {
      if (!this.redirectPersistenceManager) {
        const t = (e && Xi(e)) || this._popupRedirectResolver;
        vi(t, this, "argument-error"),
          (this.redirectPersistenceManager = await es.create(
            this,
            [Xi(t._redirectPersistence)],
            "redirectUser"
          )),
          (this.redirectUser =
            await this.redirectPersistenceManager.getCurrentUser());
      }
      return this.redirectPersistenceManager;
    }
    async _redirectUserForId(e) {
      var t, n;
      return (
        this._isInitialized && (await this.queue(async () => {})),
        (null === (t = this._currentUser) || void 0 === t
          ? void 0
          : t._redirectEventId) === e
          ? this._currentUser
          : (null === (n = this.redirectUser) || void 0 === n
              ? void 0
              : n._redirectEventId) === e
          ? this.redirectUser
          : null
      );
    }
    async _persistUserIfCurrent(e) {
      if (e === this.currentUser)
        return this.queue(async () => this.directlySetCurrentUser(e));
    }
    _notifyListenersIfCurrent(e) {
      e === this.currentUser && this.notifyAuthListeners();
    }
    _key() {
      return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
    }
    _startProactiveRefresh() {
      (this.isProactiveRefreshEnabled = !0),
        this.currentUser && this._currentUser._startProactiveRefresh();
    }
    _stopProactiveRefresh() {
      (this.isProactiveRefreshEnabled = !1),
        this.currentUser && this._currentUser._stopProactiveRefresh();
    }
    get _currentUser() {
      return this.currentUser;
    }
    notifyAuthListeners() {
      var e, t;
      if (!this._isInitialized) return;
      this.idTokenSubscription.next(this.currentUser);
      const n =
        null !==
          (t =
            null === (e = this.currentUser) || void 0 === e ? void 0 : e.uid) &&
        void 0 !== t
          ? t
          : null;
      this.lastNotifiedUid !== n &&
        ((this.lastNotifiedUid = n),
        this.authStateSubscription.next(this.currentUser));
    }
    registerStateListener(e, t, n, r) {
      if (this._deleted) return () => {};
      const a = "function" == typeof t ? t : t.next.bind(t);
      let o = !1;
      const i = this._isInitialized
        ? Promise.resolve()
        : this._initializationPromise;
      if (
        (vi(i, this, "internal-error"),
        i.then(() => {
          o || a(this.currentUser);
        }),
        "function" == typeof t)
      ) {
        const a = e.addObserver(t, n, r);
        return () => {
          (o = !0), a();
        };
      }
      {
        const n = e.addObserver(t);
        return () => {
          (o = !0), n();
        };
      }
    }
    async directlySetCurrentUser(e) {
      this.currentUser &&
        this.currentUser !== e &&
        this._currentUser._stopProactiveRefresh(),
        e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(),
        (this.currentUser = e),
        e
          ? await this.assertedPersistence.setCurrentUser(e)
          : await this.assertedPersistence.removeCurrentUser();
    }
    queue(e) {
      return (this.operations = this.operations.then(e, e)), this.operations;
    }
    get assertedPersistence() {
      return (
        vi(this.persistenceManager, this, "internal-error"),
        this.persistenceManager
      );
    }
    _logFramework(e) {
      e &&
        !this.frameworks.includes(e) &&
        (this.frameworks.push(e),
        this.frameworks.sort(),
        (this.clientVersion = hs(
          this.config.clientPlatform,
          this._getFrameworks()
        )));
    }
    _getFrameworks() {
      return this.frameworks;
    }
    async _getAdditionalHeaders() {
      var e;
      const t = { "X-Client-Version": this.clientVersion };
      this.app.options.appId &&
        (t["X-Firebase-gmpid"] = this.app.options.appId);
      const n = await (null ===
        (e = this.heartbeatServiceProvider.getImmediate({ optional: !0 })) ||
      void 0 === e
        ? void 0
        : e.getHeartbeatsHeader());
      n && (t["X-Firebase-Client"] = n);
      const r = await this._getAppCheckToken();
      return r && (t["X-Firebase-AppCheck"] = r), t;
    }
    async _getAppCheckToken() {
      var e;
      const t = await (null ===
        (e = this.appCheckServiceProvider.getImmediate({ optional: !0 })) ||
      void 0 === e
        ? void 0
        : e.getToken());
      return (
        (null == t ? void 0 : t.error) &&
          (function (e, ...t) {
            ui.logLevel <= $a.WARN && ui.warn(`Auth (${qo}): ${e}`, ...t);
          })(`Error while retrieving App Check token: ${t.error}`),
        null == t ? void 0 : t.token
      );
    }
  }
  function ws(e) {
    return Ra(e);
  }
  class fs {
    constructor(e) {
      (this.auth = e),
        (this.observer = null),
        (this.addObserver = (function (e, t) {
          const n = new Oa(e, t);
          return n.subscribe.bind(n);
        })((e) => (this.observer = e)));
    }
    get next() {
      return (
        vi(this.observer, this.auth, "internal-error"),
        this.observer.next.bind(this.observer)
      );
    }
  }
  let vs = {
    async loadJS() {
      throw new Error("Unable to load external scripts");
    },
    recaptchaV2Script: "",
    recaptchaEnterpriseScript: "",
    gapiScript: "",
  };
  function bs(e, t, n) {
    const r = ws(e);
    vi(r._canInitEmulator, r, "emulator-config-failed"),
      vi(/^https?:\/\//.test(t), r, "invalid-emulator-scheme");
    const a = ys(t),
      { host: o, port: i } = (function (e) {
        const t = ys(e),
          n = /(\/\/)?([^?#/]+)/.exec(e.substr(t.length));
        if (!n) return { host: "", port: null };
        const r = n[2].split("@").pop() || "",
          a = /^(\[[^\]]+\])(:|$)/.exec(r);
        if (a) {
          const e = a[1];
          return { host: e, port: Es(r.substr(e.length + 1)) };
        }
        {
          const [e, t] = r.split(":");
          return { host: e, port: Es(t) };
        }
      })(t),
      s = null === i ? "" : `:${i}`;
    (r.config.emulator = { url: `${a}//${o}${s}/` }),
      (r.settings.appVerificationDisabledForTesting = !0),
      (r.emulatorConfig = Object.freeze({
        host: o,
        port: i,
        protocol: a.replace(":", ""),
        options: Object.freeze({ disableWarnings: !1 }),
      })),
      (function () {
        function e() {
          const e = document.createElement("p"),
            t = e.style;
          (e.innerText =
            "Running in emulator mode. Do not use with production credentials."),
            (t.position = "fixed"),
            (t.width = "100%"),
            (t.backgroundColor = "#ffffff"),
            (t.border = ".1em solid #000000"),
            (t.color = "#b50000"),
            (t.bottom = "0px"),
            (t.left = "0px"),
            (t.margin = "0px"),
            (t.zIndex = "10000"),
            (t.textAlign = "center"),
            e.classList.add("firebase-emulator-warning"),
            document.body.appendChild(e);
        }
        "undefined" != typeof console &&
          "function" == typeof console.info &&
          console.info(
            "WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."
          );
        "undefined" != typeof window &&
          "undefined" != typeof document &&
          ("loading" === document.readyState
            ? window.addEventListener("DOMContentLoaded", e)
            : e());
      })();
  }
  function ys(e) {
    const t = e.indexOf(":");
    return t < 0 ? "" : e.substr(0, t + 1);
  }
  function Es(e) {
    if (!e) return null;
    const t = Number(e);
    return isNaN(t) ? null : t;
  }
  class _s {
    constructor(e, t) {
      (this.providerId = e), (this.signInMethod = t);
    }
    toJSON() {
      return bi("not implemented");
    }
    _getIdTokenResponse(e) {
      return bi("not implemented");
    }
    _linkToIdToken(e, t) {
      return bi("not implemented");
    }
    _getReauthenticationResolver(e) {
      return bi("not implemented");
    }
  }
  async function ks(e, t) {
    return Ri(e, "POST", "/v1/accounts:signInWithIdp", Pi(e, t));
  }
  class Is extends _s {
    constructor() {
      super(...arguments), (this.pendingToken = null);
    }
    static _fromParams(e) {
      const t = new Is(e.providerId, e.signInMethod);
      return (
        e.idToken || e.accessToken
          ? (e.idToken && (t.idToken = e.idToken),
            e.accessToken && (t.accessToken = e.accessToken),
            e.nonce && !e.pendingToken && (t.nonce = e.nonce),
            e.pendingToken && (t.pendingToken = e.pendingToken))
          : e.oauthToken && e.oauthTokenSecret
          ? ((t.accessToken = e.oauthToken), (t.secret = e.oauthTokenSecret))
          : pi("argument-error"),
        t
      );
    }
    toJSON() {
      return {
        idToken: this.idToken,
        accessToken: this.accessToken,
        secret: this.secret,
        nonce: this.nonce,
        pendingToken: this.pendingToken,
        providerId: this.providerId,
        signInMethod: this.signInMethod,
      };
    }
    static fromJSON(e) {
      const t = "string" == typeof e ? JSON.parse(e) : e,
        { providerId: n, signInMethod: r } = t,
        a = si(t, ["providerId", "signInMethod"]);
      if (!n || !r) return null;
      const o = new Is(n, r);
      return (
        (o.idToken = a.idToken || void 0),
        (o.accessToken = a.accessToken || void 0),
        (o.secret = a.secret),
        (o.nonce = a.nonce),
        (o.pendingToken = a.pendingToken || null),
        o
      );
    }
    _getIdTokenResponse(e) {
      return ks(e, this.buildRequest());
    }
    _linkToIdToken(e, t) {
      const n = this.buildRequest();
      return (n.idToken = t), ks(e, n);
    }
    _getReauthenticationResolver(e) {
      const t = this.buildRequest();
      return (t.autoCreate = !1), ks(e, t);
    }
    buildRequest() {
      const e = { requestUri: "http://localhost", returnSecureToken: !0 };
      if (this.pendingToken) e.pendingToken = this.pendingToken;
      else {
        const t = {};
        this.idToken && (t.id_token = this.idToken),
          this.accessToken && (t.access_token = this.accessToken),
          this.secret && (t.oauth_token_secret = this.secret),
          (t.providerId = this.providerId),
          this.nonce && !this.pendingToken && (t.nonce = this.nonce),
          (e.postBody = Pa(t));
      }
      return e;
    }
  }
  class Ss {
    constructor(e) {
      (this.providerId = e),
        (this.defaultLanguageCode = null),
        (this.customParameters = {});
    }
    setDefaultLanguage(e) {
      this.defaultLanguageCode = e;
    }
    setCustomParameters(e) {
      return (this.customParameters = e), this;
    }
    getCustomParameters() {
      return this.customParameters;
    }
  }
  class As extends Ss {
    constructor() {
      super(...arguments), (this.scopes = []);
    }
    addScope(e) {
      return this.scopes.includes(e) || this.scopes.push(e), this;
    }
    getScopes() {
      return [...this.scopes];
    }
  }
  class Cs extends As {
    constructor() {
      super("facebook.com");
    }
    static credential(e) {
      return Is._fromParams({
        providerId: Cs.PROVIDER_ID,
        signInMethod: Cs.FACEBOOK_SIGN_IN_METHOD,
        accessToken: e,
      });
    }
    static credentialFromResult(e) {
      return Cs.credentialFromTaggedObject(e);
    }
    static credentialFromError(e) {
      return Cs.credentialFromTaggedObject(e.customData || {});
    }
    static credentialFromTaggedObject({ _tokenResponse: e }) {
      if (!e || !("oauthAccessToken" in e)) return null;
      if (!e.oauthAccessToken) return null;
      try {
        return Cs.credential(e.oauthAccessToken);
      } catch (t) {
        return null;
      }
    }
  }
  (Cs.FACEBOOK_SIGN_IN_METHOD = "facebook.com"),
    (Cs.PROVIDER_ID = "facebook.com");
  class Ts extends As {
    constructor() {
      super("google.com"), this.addScope("profile");
    }
    static credential(e, t) {
      return Is._fromParams({
        providerId: Ts.PROVIDER_ID,
        signInMethod: Ts.GOOGLE_SIGN_IN_METHOD,
        idToken: e,
        accessToken: t,
      });
    }
    static credentialFromResult(e) {
      return Ts.credentialFromTaggedObject(e);
    }
    static credentialFromError(e) {
      return Ts.credentialFromTaggedObject(e.customData || {});
    }
    static credentialFromTaggedObject({ _tokenResponse: e }) {
      if (!e) return null;
      const { oauthIdToken: t, oauthAccessToken: n } = e;
      if (!t && !n) return null;
      try {
        return Ts.credential(t, n);
      } catch (r) {
        return null;
      }
    }
  }
  (Ts.GOOGLE_SIGN_IN_METHOD = "google.com"), (Ts.PROVIDER_ID = "google.com");
  class Ps extends As {
    constructor() {
      super("github.com");
    }
    static credential(e) {
      return Is._fromParams({
        providerId: Ps.PROVIDER_ID,
        signInMethod: Ps.GITHUB_SIGN_IN_METHOD,
        accessToken: e,
      });
    }
    static credentialFromResult(e) {
      return Ps.credentialFromTaggedObject(e);
    }
    static credentialFromError(e) {
      return Ps.credentialFromTaggedObject(e.customData || {});
    }
    static credentialFromTaggedObject({ _tokenResponse: e }) {
      if (!e || !("oauthAccessToken" in e)) return null;
      if (!e.oauthAccessToken) return null;
      try {
        return Ps.credential(e.oauthAccessToken);
      } catch (t) {
        return null;
      }
    }
  }
  (Ps.GITHUB_SIGN_IN_METHOD = "github.com"), (Ps.PROVIDER_ID = "github.com");
  class Os extends As {
    constructor() {
      super("twitter.com");
    }
    static credential(e, t) {
      return Is._fromParams({
        providerId: Os.PROVIDER_ID,
        signInMethod: Os.TWITTER_SIGN_IN_METHOD,
        oauthToken: e,
        oauthTokenSecret: t,
      });
    }
    static credentialFromResult(e) {
      return Os.credentialFromTaggedObject(e);
    }
    static credentialFromError(e) {
      return Os.credentialFromTaggedObject(e.customData || {});
    }
    static credentialFromTaggedObject({ _tokenResponse: e }) {
      if (!e) return null;
      const { oauthAccessToken: t, oauthTokenSecret: n } = e;
      if (!t || !n) return null;
      try {
        return Os.credential(t, n);
      } catch (r) {
        return null;
      }
    }
  }
  (Os.TWITTER_SIGN_IN_METHOD = "twitter.com"), (Os.PROVIDER_ID = "twitter.com");
  class Ls {
    constructor(e) {
      (this.user = e.user),
        (this.providerId = e.providerId),
        (this._tokenResponse = e._tokenResponse),
        (this.operationType = e.operationType);
    }
    static async _fromIdTokenResponse(e, t, n, r = !1) {
      const a = await qi._fromIdTokenResponse(e, n, r),
        o = Rs(n);
      return new Ls({
        user: a,
        providerId: o,
        _tokenResponse: n,
        operationType: t,
      });
    }
    static async _forOperation(e, t, n) {
      await e._updateTokensIfNecessary(n, !0);
      const r = Rs(n);
      return new Ls({
        user: e,
        providerId: r,
        _tokenResponse: n,
        operationType: t,
      });
    }
  }
  function Rs(e) {
    return e.providerId ? e.providerId : "phoneNumber" in e ? "phone" : null;
  }
  async function xs(e) {
    var t;
    if (zo(e.app)) return Promise.reject(wi(e));
    const n = ws(e);
    if (
      (await n._initializationPromise,
      null === (t = n.currentUser) || void 0 === t ? void 0 : t.isAnonymous)
    )
      return new Ls({
        user: n.currentUser,
        providerId: null,
        operationType: "signIn",
      });
    const r = await (async function (e, t) {
        return Ri(e, "POST", "/v1/accounts:signUp", Pi(e, t));
      })(n, { returnSecureToken: !0 }),
      a = await Ls._fromIdTokenResponse(n, "signIn", r, !0);
    return await n._updateCurrentUser(a.user), a;
  }
  class Ns extends Ia {
    constructor(e, t, n, r) {
      var a;
      super(t.code, t.message),
        (this.operationType = n),
        (this.user = r),
        Object.setPrototypeOf(this, Ns.prototype),
        (this.customData = {
          appName: e.name,
          tenantId: null !== (a = e.tenantId) && void 0 !== a ? a : void 0,
          _serverResponse: t.customData._serverResponse,
          operationType: n,
        });
    }
    static _fromErrorAndOperation(e, t, n, r) {
      return new Ns(e, t, n, r);
    }
  }
  function Ds(e, t, n, r) {
    return (
      "reauthenticate" === t
        ? n._getReauthenticationResolver(e)
        : n._getIdTokenResponse(e)
    ).catch((n) => {
      if ("auth/multi-factor-auth-required" === n.code)
        throw Ns._fromErrorAndOperation(e, n, t, r);
      throw n;
    });
  }
  const Ms = "__sak";
  class $s {
    constructor(e, t) {
      (this.storageRetriever = e), (this.type = t);
    }
    _isAvailable() {
      try {
        return this.storage
          ? (this.storage.setItem(Ms, "1"),
            this.storage.removeItem(Ms),
            Promise.resolve(!0))
          : Promise.resolve(!1);
      } catch (e) {
        return Promise.resolve(!1);
      }
    }
    _set(e, t) {
      return this.storage.setItem(e, JSON.stringify(t)), Promise.resolve();
    }
    _get(e) {
      const t = this.storage.getItem(e);
      return Promise.resolve(t ? JSON.parse(t) : null);
    }
    _remove(e) {
      return this.storage.removeItem(e), Promise.resolve();
    }
    get storage() {
      return this.storageRetriever();
    }
  }
  class Vs extends $s {
    constructor() {
      super(() => window.localStorage, "LOCAL"),
        (this.boundEventHandler = (e, t) => this.onStorageEvent(e, t)),
        (this.listeners = {}),
        (this.localCache = {}),
        (this.pollTimer = null),
        (this.fallbackToPolling = us()),
        (this._shouldAllowMigration = !0);
    }
    forAllChangedKeys(e) {
      for (const t of Object.keys(this.listeners)) {
        const n = this.storage.getItem(t),
          r = this.localCache[t];
        n !== r && e(t, r, n);
      }
    }
    onStorageEvent(e, t = !1) {
      if (!e.key)
        return void this.forAllChangedKeys((e, t, n) => {
          this.notifyListeners(e, n);
        });
      const n = e.key;
      t ? this.detachListener() : this.stopPolling();
      const r = () => {
          const e = this.storage.getItem(n);
          (t || this.localCache[n] !== e) && this.notifyListeners(n, e);
        },
        a = this.storage.getItem(n);
      ds() && a !== e.newValue && e.newValue !== e.oldValue
        ? setTimeout(r, 10)
        : r();
    }
    notifyListeners(e, t) {
      this.localCache[e] = t;
      const n = this.listeners[e];
      if (n) for (const r of Array.from(n)) r(t ? JSON.parse(t) : t);
    }
    startPolling() {
      this.stopPolling(),
        (this.pollTimer = setInterval(() => {
          this.forAllChangedKeys((e, t, n) => {
            this.onStorageEvent(
              new StorageEvent("storage", { key: e, oldValue: t, newValue: n }),
              !0
            );
          });
        }, 1e3));
    }
    stopPolling() {
      this.pollTimer &&
        (clearInterval(this.pollTimer), (this.pollTimer = null));
    }
    attachListener() {
      window.addEventListener("storage", this.boundEventHandler);
    }
    detachListener() {
      window.removeEventListener("storage", this.boundEventHandler);
    }
    _addListener(e, t) {
      0 === Object.keys(this.listeners).length &&
        (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
        this.listeners[e] ||
          ((this.listeners[e] = new Set()),
          (this.localCache[e] = this.storage.getItem(e))),
        this.listeners[e].add(t);
    }
    _removeListener(e, t) {
      this.listeners[e] &&
        (this.listeners[e].delete(t),
        0 === this.listeners[e].size && delete this.listeners[e]),
        0 === Object.keys(this.listeners).length &&
          (this.detachListener(), this.stopPolling());
    }
    async _set(e, t) {
      await super._set(e, t), (this.localCache[e] = JSON.stringify(t));
    }
    async _get(e) {
      const t = await super._get(e);
      return (this.localCache[e] = JSON.stringify(t)), t;
    }
    async _remove(e) {
      await super._remove(e), delete this.localCache[e];
    }
  }
  Vs.type = "LOCAL";
  const Us = Vs;
  class Bs extends $s {
    constructor() {
      super(() => window.sessionStorage, "SESSION");
    }
    _addListener(e, t) {}
    _removeListener(e, t) {}
  }
  Bs.type = "SESSION";
  const js = Bs;
  class Gs {
    constructor(e) {
      (this.eventTarget = e),
        (this.handlersMap = {}),
        (this.boundEventHandler = this.handleEvent.bind(this));
    }
    static _getInstance(e) {
      const t = this.receivers.find((t) => t.isListeningto(e));
      if (t) return t;
      const n = new Gs(e);
      return this.receivers.push(n), n;
    }
    isListeningto(e) {
      return this.eventTarget === e;
    }
    async handleEvent(e) {
      const t = e,
        { eventId: n, eventType: r, data: a } = t.data,
        o = this.handlersMap[r];
      if (!(null == o ? void 0 : o.size)) return;
      t.ports[0].postMessage({ status: "ack", eventId: n, eventType: r });
      const i = Array.from(o).map(async (e) => e(t.origin, a)),
        s = await (function (e) {
          return Promise.all(
            e.map(async (e) => {
              try {
                return { fulfilled: !0, value: await e };
              } catch (t) {
                return { fulfilled: !1, reason: t };
              }
            })
          );
        })(i);
      t.ports[0].postMessage({
        status: "done",
        eventId: n,
        eventType: r,
        response: s,
      });
    }
    _subscribe(e, t) {
      0 === Object.keys(this.handlersMap).length &&
        this.eventTarget.addEventListener("message", this.boundEventHandler),
        this.handlersMap[e] || (this.handlersMap[e] = new Set()),
        this.handlersMap[e].add(t);
    }
    _unsubscribe(e, t) {
      this.handlersMap[e] && t && this.handlersMap[e].delete(t),
        (t && 0 !== this.handlersMap[e].size) || delete this.handlersMap[e],
        0 === Object.keys(this.handlersMap).length &&
          this.eventTarget.removeEventListener(
            "message",
            this.boundEventHandler
          );
    }
  }
  function Hs(e = "", t = 10) {
    let n = "";
    for (let r = 0; r < t; r++) n += Math.floor(10 * Math.random());
    return e + n;
  }
  Gs.receivers = [];
  class Fs {
    constructor(e) {
      (this.target = e), (this.handlers = new Set());
    }
    removeMessageHandler(e) {
      e.messageChannel &&
        (e.messageChannel.port1.removeEventListener("message", e.onMessage),
        e.messageChannel.port1.close()),
        this.handlers.delete(e);
    }
    async _send(e, t, n = 50) {
      const r =
        "undefined" != typeof MessageChannel ? new MessageChannel() : null;
      if (!r) throw new Error("connection_unavailable");
      let a, o;
      return new Promise((i, s) => {
        const l = Hs("", 20);
        r.port1.start();
        const c = setTimeout(() => {
          s(new Error("unsupported_event"));
        }, n);
        (o = {
          messageChannel: r,
          onMessage(e) {
            const t = e;
            if (t.data.eventId === l)
              switch (t.data.status) {
                case "ack":
                  clearTimeout(c),
                    (a = setTimeout(() => {
                      s(new Error("timeout"));
                    }, 3e3));
                  break;
                case "done":
                  clearTimeout(a), i(t.data.response);
                  break;
                default:
                  clearTimeout(c),
                    clearTimeout(a),
                    s(new Error("invalid_response"));
              }
          },
        }),
          this.handlers.add(o),
          r.port1.addEventListener("message", o.onMessage),
          this.target.postMessage({ eventType: e, eventId: l, data: t }, [
            r.port2,
          ]);
      }).finally(() => {
        o && this.removeMessageHandler(o);
      });
    }
  }
  function zs() {
    return window;
  }
  function Ws() {
    return (
      void 0 !== zs().WorkerGlobalScope &&
      "function" == typeof zs().importScripts
    );
  }
  const Ks = "firebaseLocalStorageDb",
    qs = "firebaseLocalStorage",
    Js = "fbase_key";
  class Xs {
    constructor(e) {
      this.request = e;
    }
    toPromise() {
      return new Promise((e, t) => {
        this.request.addEventListener("success", () => {
          e(this.request.result);
        }),
          this.request.addEventListener("error", () => {
            t(this.request.error);
          });
      });
    }
  }
  function Ys(e, t) {
    return e.transaction([qs], t ? "readwrite" : "readonly").objectStore(qs);
  }
  function Zs() {
    const e = indexedDB.open(Ks, 1);
    return new Promise((t, n) => {
      e.addEventListener("error", () => {
        n(e.error);
      }),
        e.addEventListener("upgradeneeded", () => {
          const t = e.result;
          try {
            t.createObjectStore(qs, { keyPath: Js });
          } catch (r) {
            n(r);
          }
        }),
        e.addEventListener("success", async () => {
          const n = e.result;
          n.objectStoreNames.contains(qs)
            ? t(n)
            : (n.close(),
              await (function () {
                const e = indexedDB.deleteDatabase(Ks);
                return new Xs(e).toPromise();
              })(),
              t(await Zs()));
        });
    });
  }
  async function Qs(e, t, n) {
    const r = Ys(e, !0).put({ [Js]: t, value: n });
    return new Xs(r).toPromise();
  }
  function el(e, t) {
    const n = Ys(e, !0).delete(t);
    return new Xs(n).toPromise();
  }
  class tl {
    constructor() {
      (this.type = "LOCAL"),
        (this._shouldAllowMigration = !0),
        (this.listeners = {}),
        (this.localCache = {}),
        (this.pollTimer = null),
        (this.pendingWrites = 0),
        (this.receiver = null),
        (this.sender = null),
        (this.serviceWorkerReceiverAvailable = !1),
        (this.activeServiceWorker = null),
        (this._workerInitializationPromise =
          this.initializeServiceWorkerMessaging().then(
            () => {},
            () => {}
          ));
    }
    async _openDb() {
      return this.db || (this.db = await Zs()), this.db;
    }
    async _withRetries(e) {
      let t = 0;
      for (;;)
        try {
          const t = await this._openDb();
          return await e(t);
        } catch (n) {
          if (t++ > 3) throw n;
          this.db && (this.db.close(), (this.db = void 0));
        }
    }
    async initializeServiceWorkerMessaging() {
      return Ws() ? this.initializeReceiver() : this.initializeSender();
    }
    async initializeReceiver() {
      (this.receiver = Gs._getInstance(Ws() ? self : null)),
        this.receiver._subscribe("keyChanged", async (e, t) => ({
          keyProcessed: (await this._poll()).includes(t.key),
        })),
        this.receiver._subscribe("ping", async (e, t) => ["keyChanged"]);
    }
    async initializeSender() {
      var e, t;
      if (
        ((this.activeServiceWorker = await (async function () {
          if (
            !(null === navigator || void 0 === navigator
              ? void 0
              : navigator.serviceWorker)
          )
            return null;
          try {
            return (await navigator.serviceWorker.ready).active;
          } catch (e) {
            return null;
          }
        })()),
        !this.activeServiceWorker)
      )
        return;
      this.sender = new Fs(this.activeServiceWorker);
      const n = await this.sender._send("ping", {}, 800);
      n &&
        (null === (e = n[0]) || void 0 === e ? void 0 : e.fulfilled) &&
        (null === (t = n[0]) || void 0 === t
          ? void 0
          : t.value.includes("keyChanged")) &&
        (this.serviceWorkerReceiverAvailable = !0);
    }
    async notifyServiceWorker(e) {
      var t;
      if (
        this.sender &&
        this.activeServiceWorker &&
        ((null ===
          (t =
            null === navigator || void 0 === navigator
              ? void 0
              : navigator.serviceWorker) || void 0 === t
          ? void 0
          : t.controller) || null) === this.activeServiceWorker
      )
        try {
          await this.sender._send(
            "keyChanged",
            { key: e },
            this.serviceWorkerReceiverAvailable ? 800 : 50
          );
        } catch (t) {}
    }
    async _isAvailable() {
      try {
        if (!indexedDB) return !1;
        const e = await Zs();
        return await Qs(e, Ms, "1"), await el(e, Ms), !0;
      } catch (e) {}
      return !1;
    }
    async _withPendingWrite(e) {
      this.pendingWrites++;
      try {
        await e();
      } finally {
        this.pendingWrites--;
      }
    }
    async _set(e, t) {
      return this._withPendingWrite(
        async () => (
          await this._withRetries((n) => Qs(n, e, t)),
          (this.localCache[e] = t),
          this.notifyServiceWorker(e)
        )
      );
    }
    async _get(e) {
      const t = await this._withRetries((t) =>
        (async function (e, t) {
          const n = Ys(e, !1).get(t),
            r = await new Xs(n).toPromise();
          return void 0 === r ? null : r.value;
        })(t, e)
      );
      return (this.localCache[e] = t), t;
    }
    async _remove(e) {
      return this._withPendingWrite(
        async () => (
          await this._withRetries((t) => el(t, e)),
          delete this.localCache[e],
          this.notifyServiceWorker(e)
        )
      );
    }
    async _poll() {
      const e = await this._withRetries((e) => {
        const t = Ys(e, !1).getAll();
        return new Xs(t).toPromise();
      });
      if (!e) return [];
      if (0 !== this.pendingWrites) return [];
      const t = [],
        n = new Set();
      if (0 !== e.length)
        for (const { fbase_key: r, value: a } of e)
          n.add(r),
            JSON.stringify(this.localCache[r]) !== JSON.stringify(a) &&
              (this.notifyListeners(r, a), t.push(r));
      for (const r of Object.keys(this.localCache))
        this.localCache[r] &&
          !n.has(r) &&
          (this.notifyListeners(r, null), t.push(r));
      return t;
    }
    notifyListeners(e, t) {
      this.localCache[e] = t;
      const n = this.listeners[e];
      if (n) for (const r of Array.from(n)) r(t);
    }
    startPolling() {
      this.stopPolling(),
        (this.pollTimer = setInterval(async () => this._poll(), 800));
    }
    stopPolling() {
      this.pollTimer &&
        (clearInterval(this.pollTimer), (this.pollTimer = null));
    }
    _addListener(e, t) {
      0 === Object.keys(this.listeners).length && this.startPolling(),
        this.listeners[e] || ((this.listeners[e] = new Set()), this._get(e)),
        this.listeners[e].add(t);
    }
    _removeListener(e, t) {
      this.listeners[e] &&
        (this.listeners[e].delete(t),
        0 === this.listeners[e].size && delete this.listeners[e]),
        0 === Object.keys(this.listeners).length && this.stopPolling();
    }
  }
  tl.type = "LOCAL";
  const nl = tl;
  new Ii(3e4, 6e4);
  class rl extends _s {
    constructor(e) {
      super("custom", "custom"), (this.params = e);
    }
    _getIdTokenResponse(e) {
      return ks(e, this._buildIdpRequest());
    }
    _linkToIdToken(e, t) {
      return ks(e, this._buildIdpRequest(t));
    }
    _getReauthenticationResolver(e) {
      return ks(e, this._buildIdpRequest());
    }
    _buildIdpRequest(e) {
      const t = {
        requestUri: this.params.requestUri,
        sessionId: this.params.sessionId,
        postBody: this.params.postBody,
        tenantId: this.params.tenantId,
        pendingToken: this.params.pendingToken,
        returnSecureToken: !0,
        returnIdpCredential: !0,
      };
      return e && (t.idToken = e), t;
    }
  }
  function al(e) {
    return (async function (e, t, n = !1) {
      if (zo(e.app)) return Promise.reject(wi(e));
      const r = "signIn",
        a = await Ds(e, r, t),
        o = await Ls._fromIdTokenResponse(e, r, a);
      return n || (await e._updateCurrentUser(o.user)), o;
    })(e.auth, new rl(e), e.bypassAuthState);
  }
  function ol(e) {
    const { auth: t, user: n } = e;
    return (
      vi(n, t, "internal-error"),
      (async function (e, t, n = !1) {
        const { auth: r } = e;
        if (zo(r.app)) return Promise.reject(wi(r));
        const a = "reauthenticate";
        try {
          const o = await ji(e, Ds(r, a, t, e), n);
          vi(o.idToken, r, "internal-error");
          const i = Ui(o.idToken);
          vi(i, r, "internal-error");
          const { sub: s } = i;
          return vi(e.uid === s, r, "user-mismatch"), Ls._forOperation(e, a, o);
        } catch (o) {
          throw (
            ("auth/user-not-found" === (null == o ? void 0 : o.code) &&
              pi(r, "user-mismatch"),
            o)
          );
        }
      })(n, new rl(e), e.bypassAuthState)
    );
  }
  async function il(e) {
    const { auth: t, user: n } = e;
    return (
      vi(n, t, "internal-error"),
      (async function (e, t, n = !1) {
        const r = await ji(
          e,
          t._linkToIdToken(e.auth, await e.getIdToken()),
          n
        );
        return Ls._forOperation(e, "link", r);
      })(n, new rl(e), e.bypassAuthState)
    );
  }
  class sl {
    constructor(e, t, n, r, a = !1) {
      (this.auth = e),
        (this.resolver = n),
        (this.user = r),
        (this.bypassAuthState = a),
        (this.pendingPromise = null),
        (this.eventManager = null),
        (this.filter = Array.isArray(t) ? t : [t]);
    }
    execute() {
      return new Promise(async (e, t) => {
        this.pendingPromise = { resolve: e, reject: t };
        try {
          (this.eventManager = await this.resolver._initialize(this.auth)),
            await this.onExecution(),
            this.eventManager.registerConsumer(this);
        } catch (n) {
          this.reject(n);
        }
      });
    }
    async onAuthEvent(e) {
      const {
        urlResponse: t,
        sessionId: n,
        postBody: r,
        tenantId: a,
        error: o,
        type: i,
      } = e;
      if (o) return void this.reject(o);
      const s = {
        auth: this.auth,
        requestUri: t,
        sessionId: n,
        tenantId: a || void 0,
        postBody: r || void 0,
        user: this.user,
        bypassAuthState: this.bypassAuthState,
      };
      try {
        this.resolve(await this.getIdpTask(i)(s));
      } catch (l) {
        this.reject(l);
      }
    }
    onError(e) {
      this.reject(e);
    }
    getIdpTask(e) {
      switch (e) {
        case "signInViaPopup":
        case "signInViaRedirect":
          return al;
        case "linkViaPopup":
        case "linkViaRedirect":
          return il;
        case "reauthViaPopup":
        case "reauthViaRedirect":
          return ol;
        default:
          pi(this.auth, "internal-error");
      }
    }
    resolve(e) {
      yi(this.pendingPromise, "Pending promise was never set"),
        this.pendingPromise.resolve(e),
        this.unregisterAndCleanUp();
    }
    reject(e) {
      yi(this.pendingPromise, "Pending promise was never set"),
        this.pendingPromise.reject(e),
        this.unregisterAndCleanUp();
    }
    unregisterAndCleanUp() {
      this.eventManager && this.eventManager.unregisterConsumer(this),
        (this.pendingPromise = null),
        this.cleanUp();
    }
  }
  const ll = new Ii(2e3, 1e4);
  class cl extends sl {
    constructor(e, t, n, r, a) {
      super(e, t, r, a),
        (this.provider = n),
        (this.authWindow = null),
        (this.pollId = null),
        cl.currentPopupAction && cl.currentPopupAction.cancel(),
        (cl.currentPopupAction = this);
    }
    async executeNotNull() {
      const e = await this.execute();
      return vi(e, this.auth, "internal-error"), e;
    }
    async onExecution() {
      yi(1 === this.filter.length, "Popup operations only handle one event");
      const e = Hs();
      (this.authWindow = await this.resolver._openPopup(
        this.auth,
        this.provider,
        this.filter[0],
        e
      )),
        (this.authWindow.associatedEvent = e),
        this.resolver._originValidation(this.auth).catch((e) => {
          this.reject(e);
        }),
        this.resolver._isIframeWebStorageSupported(this.auth, (e) => {
          e || this.reject(mi(this.auth, "web-storage-unsupported"));
        }),
        this.pollUserCancellation();
    }
    get eventId() {
      var e;
      return (
        (null === (e = this.authWindow) || void 0 === e
          ? void 0
          : e.associatedEvent) || null
      );
    }
    cancel() {
      this.reject(mi(this.auth, "cancelled-popup-request"));
    }
    cleanUp() {
      this.authWindow && this.authWindow.close(),
        this.pollId && window.clearTimeout(this.pollId),
        (this.authWindow = null),
        (this.pollId = null),
        (cl.currentPopupAction = null);
    }
    pollUserCancellation() {
      const e = () => {
        var t, n;
        (
          null ===
            (n =
              null === (t = this.authWindow) || void 0 === t
                ? void 0
                : t.window) || void 0 === n
            ? void 0
            : n.closed
        )
          ? (this.pollId = window.setTimeout(() => {
              (this.pollId = null),
                this.reject(mi(this.auth, "popup-closed-by-user"));
            }, 8e3))
          : (this.pollId = window.setTimeout(e, ll.get()));
      };
      e();
    }
  }
  cl.currentPopupAction = null;
  const dl = "pendingRedirect",
    ul = new Map();
  class hl extends sl {
    constructor(e, t, n = !1) {
      super(
        e,
        [
          "signInViaRedirect",
          "linkViaRedirect",
          "reauthViaRedirect",
          "unknown",
        ],
        t,
        void 0,
        n
      ),
        (this.eventId = null);
    }
    async execute() {
      let e = ul.get(this.auth._key());
      if (!e) {
        try {
          const t = (await (async function (e, t) {
            const n = (function (e) {
                return Qi(dl, e.config.apiKey, e.name);
              })(t),
              r = (function (e) {
                return Xi(e._redirectPersistence);
              })(e);
            if (!(await r._isAvailable())) return !1;
            const a = "true" === (await r._get(n));
            return await r._remove(n), a;
          })(this.resolver, this.auth))
            ? await super.execute()
            : null;
          e = () => Promise.resolve(t);
        } catch (t) {
          e = () => Promise.reject(t);
        }
        ul.set(this.auth._key(), e);
      }
      return (
        this.bypassAuthState ||
          ul.set(this.auth._key(), () => Promise.resolve(null)),
        e()
      );
    }
    async onAuthEvent(e) {
      if ("signInViaRedirect" === e.type) return super.onAuthEvent(e);
      if ("unknown" !== e.type) {
        if (e.eventId) {
          const t = await this.auth._redirectUserForId(e.eventId);
          if (t) return (this.user = t), super.onAuthEvent(e);
          this.resolve(null);
        }
      } else this.resolve(null);
    }
    async onExecution() {}
    cleanUp() {}
  }
  function pl(e, t) {
    ul.set(e._key(), t);
  }
  async function ml(e, t, n = !1) {
    if (zo(e.app)) return Promise.reject(wi(e));
    const r = ws(e),
      a = (function (e, t) {
        return t
          ? Xi(t)
          : (vi(e._popupRedirectResolver, e, "argument-error"),
            e._popupRedirectResolver);
      })(r, t),
      o = new hl(r, a, n),
      i = await o.execute();
    return (
      i &&
        !n &&
        (delete i.user._redirectEventId,
        await r._persistUserIfCurrent(i.user),
        await r._setRedirectUser(null, t)),
      i
    );
  }
  class gl {
    constructor(e) {
      (this.auth = e),
        (this.cachedEventUids = new Set()),
        (this.consumers = new Set()),
        (this.queuedRedirectEvent = null),
        (this.hasHandledPotentialRedirect = !1),
        (this.lastProcessedEventTime = Date.now());
    }
    registerConsumer(e) {
      this.consumers.add(e),
        this.queuedRedirectEvent &&
          this.isEventForConsumer(this.queuedRedirectEvent, e) &&
          (this.sendToConsumer(this.queuedRedirectEvent, e),
          this.saveEventToCache(this.queuedRedirectEvent),
          (this.queuedRedirectEvent = null));
    }
    unregisterConsumer(e) {
      this.consumers.delete(e);
    }
    onEvent(e) {
      if (this.hasEventBeenHandled(e)) return !1;
      let t = !1;
      return (
        this.consumers.forEach((n) => {
          this.isEventForConsumer(e, n) &&
            ((t = !0), this.sendToConsumer(e, n), this.saveEventToCache(e));
        }),
        this.hasHandledPotentialRedirect ||
          !(function (e) {
            switch (e.type) {
              case "signInViaRedirect":
              case "linkViaRedirect":
              case "reauthViaRedirect":
                return !0;
              case "unknown":
                return fl(e);
              default:
                return !1;
            }
          })(e) ||
          ((this.hasHandledPotentialRedirect = !0),
          t || ((this.queuedRedirectEvent = e), (t = !0))),
        t
      );
    }
    sendToConsumer(e, t) {
      var n;
      if (e.error && !fl(e)) {
        const r =
          (null === (n = e.error.code) || void 0 === n
            ? void 0
            : n.split("auth/")[1]) || "internal-error";
        t.onError(mi(this.auth, r));
      } else t.onAuthEvent(e);
    }
    isEventForConsumer(e, t) {
      const n = null === t.eventId || (!!e.eventId && e.eventId === t.eventId);
      return t.filter.includes(e.type) && n;
    }
    hasEventBeenHandled(e) {
      return (
        Date.now() - this.lastProcessedEventTime >= 6e5 &&
          this.cachedEventUids.clear(),
        this.cachedEventUids.has(wl(e))
      );
    }
    saveEventToCache(e) {
      this.cachedEventUids.add(wl(e)),
        (this.lastProcessedEventTime = Date.now());
    }
  }
  function wl(e) {
    return [e.type, e.eventId, e.sessionId, e.tenantId]
      .filter((e) => e)
      .join("-");
  }
  function fl({ type: e, error: t }) {
    return (
      "unknown" === e && "auth/no-auth-event" === (null == t ? void 0 : t.code)
    );
  }
  const vl = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
    bl = /^https?/;
  async function yl(e) {
    if (e.config.emulator) return;
    const { authorizedDomains: t } = await (async function (e, t = {}) {
      return Oi(e, "GET", "/v1/projects", t);
    })(e);
    for (const r of t)
      try {
        if (El(r)) return;
      } catch (n) {}
    pi(e, "unauthorized-domain");
  }
  function El(e) {
    const t = Ei(),
      { protocol: n, hostname: r } = new URL(t);
    if (e.startsWith("chrome-extension://")) {
      const a = new URL(e);
      return "" === a.hostname && "" === r
        ? "chrome-extension:" === n &&
            e.replace("chrome-extension://", "") ===
              t.replace("chrome-extension://", "")
        : "chrome-extension:" === n && a.hostname === r;
    }
    if (!bl.test(n)) return !1;
    if (vl.test(e)) return r === e;
    const a = e.replace(/\./g, "\\.");
    return new RegExp("^(.+\\." + a + "|" + a + ")$", "i").test(r);
  }
  const _l = new Ii(3e4, 6e4);
  function kl() {
    const e = zs().___jsl;
    if (null == e ? void 0 : e.H)
      for (const t of Object.keys(e.H))
        if (
          ((e.H[t].r = e.H[t].r || []),
          (e.H[t].L = e.H[t].L || []),
          (e.H[t].r = [...e.H[t].L]),
          e.CP)
        )
          for (let n = 0; n < e.CP.length; n++) e.CP[n] = null;
  }
  function Il(e) {
    return new Promise((t, n) => {
      var r, a, o, i;
      function s() {
        kl(),
          gapi.load("gapi.iframes", {
            callback: () => {
              t(gapi.iframes.getContext());
            },
            ontimeout: () => {
              kl(), n(mi(e, "network-request-failed"));
            },
            timeout: _l.get(),
          });
      }
      if (
        null ===
          (a = null === (r = zs().gapi) || void 0 === r ? void 0 : r.iframes) ||
        void 0 === a
          ? void 0
          : a.Iframe
      )
        t(gapi.iframes.getContext());
      else {
        if (!(null === (o = zs().gapi) || void 0 === o ? void 0 : o.load)) {
          const t = `__${"iframefcb"}${Math.floor(1e6 * Math.random())}`;
          return (
            (zs()[t] = () => {
              gapi.load ? s() : n(mi(e, "network-request-failed"));
            }),
            ((i = `${vs.gapiScript}?onload=${t}`), vs.loadJS(i)).catch((e) =>
              n(e)
            )
          );
        }
        s();
      }
    }).catch((e) => {
      throw ((Sl = null), e);
    });
  }
  let Sl = null;
  const Al = new Ii(5e3, 15e3),
    Cl = {
      style: {
        position: "absolute",
        top: "-100px",
        width: "1px",
        height: "1px",
      },
      "aria-hidden": "true",
      tabindex: "-1",
    },
    Tl = new Map([
      ["identitytoolkit.googleapis.com", "p"],
      ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
      ["test-identitytoolkit.sandbox.googleapis.com", "t"],
    ]);
  function Pl(e) {
    const t = e.config;
    vi(t.authDomain, e, "auth-domain-config-required");
    const n = t.emulator
        ? Si(t, "emulator/auth/iframe")
        : `https://${e.config.authDomain}/__/auth/iframe`,
      r = { apiKey: t.apiKey, appName: e.name, v: qo },
      a = Tl.get(e.config.apiHost);
    a && (r.eid = a);
    const o = e._getFrameworks();
    return o.length && (r.fw = o.join(",")), `${n}?${Pa(r).slice(1)}`;
  }
  async function Ol(e) {
    const t = await (function (e) {
        return (Sl = Sl || Il(e)), Sl;
      })(e),
      n = zs().gapi;
    return (
      vi(n, e, "internal-error"),
      t.open(
        {
          where: document.body,
          url: Pl(e),
          messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
          attributes: Cl,
          dontclear: !0,
        },
        (t) =>
          new Promise(async (n, r) => {
            await t.restyle({ setHideOnLeave: !1 });
            const a = mi(e, "network-request-failed"),
              o = zs().setTimeout(() => {
                r(a);
              }, Al.get());
            function i() {
              zs().clearTimeout(o), n(t);
            }
            t.ping(i).then(i, () => {
              r(a);
            });
          })
      )
    );
  }
  const Ll = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no",
  };
  class Rl {
    constructor(e) {
      (this.window = e), (this.associatedEvent = null);
    }
    close() {
      if (this.window)
        try {
          this.window.close();
        } catch (e) {}
    }
  }
  function xl(e, t, n, r = 500, a = 600) {
    const o = Math.max((window.screen.availHeight - a) / 2, 0).toString(),
      i = Math.max((window.screen.availWidth - r) / 2, 0).toString();
    let s = "";
    const l = Object.assign(Object.assign({}, Ll), {
        width: r.toString(),
        height: a.toString(),
        top: o,
        left: i,
      }),
      c = ka().toLowerCase();
    n && (s = as(c) ? "_blank" : n),
      ns(c) && ((t = t || "http://localhost"), (l.scrollbars = "yes"));
    const d = Object.entries(l).reduce((e, [t, n]) => `${e}${t}=${n},`, "");
    if (
      (function (e = ka()) {
        var t;
        return (
          cs(e) &&
          !!(null === (t = window.navigator) || void 0 === t
            ? void 0
            : t.standalone)
        );
      })(c) &&
      "_self" !== s
    )
      return (
        (function (e, t) {
          const n = document.createElement("a");
          (n.href = e), (n.target = t);
          const r = document.createEvent("MouseEvent");
          r.initMouseEvent(
            "click",
            !0,
            !0,
            window,
            1,
            0,
            0,
            0,
            0,
            !1,
            !1,
            !1,
            !1,
            1,
            null
          ),
            n.dispatchEvent(r);
        })(t || "", s),
        new Rl(null)
      );
    const u = window.open(t || "", s, d);
    vi(u, e, "popup-blocked");
    try {
      u.focus();
    } catch (h) {}
    return new Rl(u);
  }
  const Nl = "__/auth/handler",
    Dl = "emulator/auth/handler",
    Ml = encodeURIComponent("fac");
  async function $l(e, t, n, r, a, o) {
    vi(e.config.authDomain, e, "auth-domain-config-required"),
      vi(e.config.apiKey, e, "invalid-api-key");
    const i = {
      apiKey: e.config.apiKey,
      appName: e.name,
      authType: n,
      redirectUrl: r,
      v: qo,
      eventId: a,
    };
    if (t instanceof Ss) {
      t.setDefaultLanguage(e.languageCode),
        (i.providerId = t.providerId || ""),
        (function (e) {
          for (const t in e)
            if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
          return !0;
        })(t.getCustomParameters()) ||
          (i.customParameters = JSON.stringify(t.getCustomParameters()));
      for (const [e, t] of Object.entries({})) i[e] = t;
    }
    if (t instanceof As) {
      const e = t.getScopes().filter((e) => "" !== e);
      e.length > 0 && (i.scopes = e.join(","));
    }
    e.tenantId && (i.tid = e.tenantId);
    const s = i;
    for (const d of Object.keys(s)) void 0 === s[d] && delete s[d];
    const l = await e._getAppCheckToken(),
      c = l ? `#${Ml}=${encodeURIComponent(l)}` : "";
    return `${(function ({ config: e }) {
      if (!e.emulator) return `https://${e.authDomain}/${Nl}`;
      return Si(e, Dl);
    })(e)}?${Pa(s).slice(1)}${c}`;
  }
  const Vl = "webStorageSupport";
  const Ul = class {
    constructor() {
      (this.eventManagers = {}),
        (this.iframes = {}),
        (this.originValidationPromises = {}),
        (this._redirectPersistence = js),
        (this._completeRedirectFn = ml),
        (this._overrideRedirectResult = pl);
    }
    async _openPopup(e, t, n, r) {
      var a;
      yi(
        null === (a = this.eventManagers[e._key()]) || void 0 === a
          ? void 0
          : a.manager,
        "_initialize() not called before _openPopup()"
      );
      return xl(e, await $l(e, t, n, Ei(), r), Hs());
    }
    async _openRedirect(e, t, n, r) {
      await this._originValidation(e);
      return (
        (function (e) {
          zs().location.href = e;
        })(await $l(e, t, n, Ei(), r)),
        new Promise(() => {})
      );
    }
    _initialize(e) {
      const t = e._key();
      if (this.eventManagers[t]) {
        const { manager: e, promise: n } = this.eventManagers[t];
        return e
          ? Promise.resolve(e)
          : (yi(n, "If manager is not set, promise should be"), n);
      }
      const n = this.initAndGetManager(e);
      return (
        (this.eventManagers[t] = { promise: n }),
        n.catch(() => {
          delete this.eventManagers[t];
        }),
        n
      );
    }
    async initAndGetManager(e) {
      const t = await Ol(e),
        n = new gl(e);
      return (
        t.register(
          "authEvent",
          (t) => {
            vi(null == t ? void 0 : t.authEvent, e, "invalid-auth-event");
            return { status: n.onEvent(t.authEvent) ? "ACK" : "ERROR" };
          },
          gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
        ),
        (this.eventManagers[e._key()] = { manager: n }),
        (this.iframes[e._key()] = t),
        n
      );
    }
    _isIframeWebStorageSupported(e, t) {
      this.iframes[e._key()].send(
        Vl,
        { type: Vl },
        (n) => {
          var r;
          const a =
            null === (r = null == n ? void 0 : n[0]) || void 0 === r
              ? void 0
              : r[Vl];
          void 0 !== a && t(!!a), pi(e, "internal-error");
        },
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
      );
    }
    _originValidation(e) {
      const t = e._key();
      return (
        this.originValidationPromises[t] ||
          (this.originValidationPromises[t] = yl(e)),
        this.originValidationPromises[t]
      );
    }
    get _shouldInitProactively() {
      return us() || rs() || cs();
    }
  };
  var Bl = "@firebase/auth",
    jl = "1.7.9";
  class Gl {
    constructor(e) {
      (this.auth = e), (this.internalListeners = new Map());
    }
    getUid() {
      var e;
      return (
        this.assertAuthConfigured(),
        (null === (e = this.auth.currentUser) || void 0 === e
          ? void 0
          : e.uid) || null
      );
    }
    async getToken(e) {
      if (
        (this.assertAuthConfigured(),
        await this.auth._initializationPromise,
        !this.auth.currentUser)
      )
        return null;
      return { accessToken: await this.auth.currentUser.getIdToken(e) };
    }
    addAuthTokenListener(e) {
      if ((this.assertAuthConfigured(), this.internalListeners.has(e))) return;
      const t = this.auth.onIdTokenChanged((t) => {
        e((null == t ? void 0 : t.stsTokenManager.accessToken) || null);
      });
      this.internalListeners.set(e, t), this.updateProactiveRefresh();
    }
    removeAuthTokenListener(e) {
      this.assertAuthConfigured();
      const t = this.internalListeners.get(e);
      t &&
        (this.internalListeners.delete(e), t(), this.updateProactiveRefresh());
    }
    assertAuthConfigured() {
      vi(
        this.auth._initializationPromise,
        "dependent-sdk-initialized-before-auth"
      );
    }
    updateProactiveRefresh() {
      this.internalListeners.size > 0
        ? this.auth._startProactiveRefresh()
        : this.auth._stopProactiveRefresh();
    }
  }
  const Hl = Ea("authIdTokenMaxAge") || 300;
  let Fl = null;
  function zl(
    e = (function (e = $o) {
      const t = Uo.get(e);
      if (!t && e === $o && ya()) return Jo();
      if (!t) throw Wo.create("no-app", { appName: e });
      return t;
    })()
  ) {
    const t = Fo(e, "auth");
    if (t.isInitialized()) return t.getImmediate();
    const n = (function (e, t) {
        const n = Fo(e, "auth");
        if (n.isInitialized()) {
          const e = n.getImmediate();
          if (Ca(n.getOptions(), null != t ? t : {})) return e;
          pi(e, "already-initialized");
        }
        return n.initialize({ options: t });
      })(e, { popupRedirectResolver: Ul, persistence: [nl, Us, js] }),
      r = Ea("authTokenSyncURL");
    if (r && "boolean" == typeof isSecureContext && isSecureContext) {
      const e = new URL(r, location.origin);
      if (location.origin === e.origin) {
        const t =
          ((a = e.toString()),
          async (e) => {
            const t = e && (await e.getIdTokenResult()),
              n =
                t && (new Date().getTime() - Date.parse(t.issuedAtTime)) / 1e3;
            if (n && n > Hl) return;
            const r = null == t ? void 0 : t.token;
            Fl !== r &&
              ((Fl = r),
              await fetch(a, {
                method: r ? "POST" : "DELETE",
                headers: r ? { Authorization: `Bearer ${r}` } : {},
              }));
          });
        !(function (e, t, n) {
          Ra(e).beforeAuthStateChanged(t, n);
        })(n, t, () => t(n.currentUser)),
          (function (e, t, n, r) {
            Ra(e).onIdTokenChanged(t, n, r);
          })(n, (e) => t(e));
      }
    }
    var a;
    const o =
      ((i = "auth"),
      null ===
        (l = null === (s = ba()) || void 0 === s ? void 0 : s.emulatorHosts) ||
      void 0 === l
        ? void 0
        : l[i]);
    var i, s, l;
    return o && bs(n, `http://${o}`), n;
  }
  var Wl;
  (vs = {
    loadJS: (e) =>
      new Promise((t, n) => {
        const r = document.createElement("script");
        var a, o;
        r.setAttribute("src", e),
          (r.onload = t),
          (r.onerror = (e) => {
            const t = mi("internal-error");
            (t.customData = e), n(t);
          }),
          (r.type = "text/javascript"),
          (r.charset = "UTF-8"),
          (null !==
            (o =
              null === (a = document.getElementsByTagName("head")) ||
              void 0 === a
                ? void 0
                : a[0]) && void 0 !== o
            ? o
            : document
          ).appendChild(r);
      }),
    gapiScript: "https://apis.google.com/js/api.js",
    recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
    recaptchaEnterpriseScript:
      "https://www.google.com/recaptcha/enterprise.js?render=",
  }),
    (Wl = "Browser"),
    Ho(
      new xa(
        "auth",
        (e, { options: t }) => {
          const n = e.getProvider("app").getImmediate(),
            r = e.getProvider("heartbeat"),
            a = e.getProvider("app-check-internal"),
            { apiKey: o, authDomain: i } = n.options;
          vi(o && !o.includes(":"), "invalid-api-key", { appName: n.name });
          const s = {
              apiKey: o,
              authDomain: i,
              clientPlatform: Wl,
              apiHost: "identitytoolkit.googleapis.com",
              tokenApiHost: "securetoken.googleapis.com",
              apiScheme: "https",
              sdkClientVersion: hs(Wl),
            },
            l = new gs(n, r, a, s);
          return (
            (function (e, t) {
              const n = (null == t ? void 0 : t.persistence) || [],
                r = (Array.isArray(n) ? n : [n]).map(Xi);
              (null == t ? void 0 : t.errorMap) &&
                e._updateErrorMap(t.errorMap),
                e._initializeWithPersistence(
                  r,
                  null == t ? void 0 : t.popupRedirectResolver
                );
            })(l, t),
            l
          );
        },
        "PUBLIC"
      )
        .setInstantiationMode("EXPLICIT")
        .setInstanceCreatedCallback((e, t, n) => {
          e.getProvider("auth-internal").initialize();
        })
    ),
    Ho(
      new xa(
        "auth-internal",
        (e) => {
          const t = ws(e.getProvider("auth").getImmediate());
          return new Gl(t);
        },
        "PRIVATE"
      ).setInstantiationMode("EXPLICIT")
    ),
    Xo(
      Bl,
      jl,
      (function (e) {
        switch (e) {
          case "Node":
            return "node";
          case "ReactNative":
            return "rn";
          case "Worker":
            return "webworker";
          case "Cordova":
            return "cordova";
          case "WebExtension":
            return "web-extension";
          default:
            return;
        }
      })(Wl)
    ),
    Xo(Bl, jl, "esm2017");
  const Kl = h({
      status: "idle",
      isAnonymous: null,
      userId: null,
      error: null,
    }),
    ql = {
      apiKey: "AIzaSyBW0ZUtnhcyX8yBxwVMdfGr-hBLp9xJpBA",
      authDomain: "famobi-games.firebaseapp.com",
      projectId: "famobi-games",
      storageBucket: "famobi-games.firebasestorage.app",
      messagingSenderId: "792529222731",
      appId: "1:792529222731:web:9e863a89c229ecf156a1ce",
    };
  let Jl = null,
    Xl = null;
  const Yl = () => {
      var e;
      return !1 !== (null == (e = g.get().auth) ? void 0 : e.enabled);
    },
    Zl = () => {
      var e;
      const t = null == (e = g.get().auth) ? void 0 : e.timeoutMs;
      return "number" == typeof t && Number.isFinite(t) && t > 0 ? t : 5e3;
    },
    Ql = (e) => {
      Array.from(Uo.values()).length > 0 || Jo(e);
    },
    ec = () =>
      Jl ||
      ((Jl = new Promise((e) => {
        const t = "undefined" != typeof window ? window.setTimeout : setTimeout;
        if (!Yl())
          return (
            Kl.set({
              status: "skipped",
              isAnonymous: null,
              userId: null,
              error: null,
            }),
            void e("skipped")
          );
        const n = g.get().auth,
          r = (null == n ? void 0 : n.firebase) ?? ql,
          a = Boolean(null == n ? void 0 : n.firebase);
        if (
          !((e) =>
            Boolean(
              (null == e ? void 0 : e.apiKey) &&
                (null == e ? void 0 : e.authDomain) &&
                (null == e ? void 0 : e.projectId) &&
                (null == e ? void 0 : e.appId)
            ))(r)
        )
          return (
            E("Auth enabled, but Firebase config is missing or incomplete."),
            Kl.set({
              status: "failed",
              isAnonymous: !0,
              userId: null,
              error: "missing_config",
            }),
            void t(() => {
              e("failed");
            }, Zl())
          );
        const o = g.get().userId || g.get().userid;
        if (o)
          return (
            Kl.set({
              status: "ready",
              isAnonymous: !1,
              userId: o,
              error: null,
            }),
            void e("ready")
          );
        Kl.set({
          status: "pending",
          isAnonymous: !0,
          userId: null,
          error: null,
        }),
          y("init auth..."),
          a && y("Auth: using firebase config from famobi.json."),
          Ql(r),
          (Xl = zl());
        let i = !1;
        const s = (t) => {
          i || ((i = !0), e(t));
        };
        let l = !1;
        const c = t(() => {
          const e = l ? "failed" : "timeout";
          "pending" === Kl.get().status &&
            Kl.set({ status: e, isAnonymous: !0, userId: null, error: e }),
            s(e);
        }, Zl());
        var d, u, h;
        (d = (e) => {
          if (!e) return;
          clearTimeout(c);
          const t = e.isAnonymous ?? !0,
            n = e.uid;
          g.get().userId || g.get().userid || g.set({ userId: n }),
            Kl.set({ status: "ready", isAnonymous: t, userId: n, error: null }),
            s("ready");
        }),
          (u = (e) => {
            E("Auth state observer error:", e);
          }),
          Ra(Xl).onAuthStateChanged(d, u, h),
          xs(Xl).catch((e) => {
            E("Anonymous auth failed:", e),
              (l = !0),
              Kl.set({
                status: "failed",
                isAnonymous: !0,
                userId: null,
                error: String((null == e ? void 0 : e.code) || e),
              });
          });
      })),
      Jl);
  let tc = 0,
    nc = Date.now(),
    rc = null,
    ac = !1;
  const oc = () => tc,
    ic = "https://game-collector.famobi.com/collect";
  let sc = !1,
    lc = null,
    cc = "",
    dc = "",
    uc = 0,
    hc = null,
    pc = null,
    mc = null,
    gc = null,
    wc = null,
    fc = 1e3,
    vc = !1,
    bc = !1;
  const yc = [],
    Ec = () => {
      var e;
      return !1 !== (null == (e = g.get().analytics) ? void 0 : e.enabled);
    },
    _c = () => {
      if (
        "undefined" != typeof crypto &&
        "function" == typeof crypto.randomUUID
      )
        return crypto.randomUUID();
      return `${Date.now().toString(16)}-${Math.random()
        .toString(16)
        .slice(2)}-${Math.random().toString(16).slice(2)}`;
    },
    kc = (e, t) => {
      const n = ((e, t) => {
        try {
          return (null == e ? void 0 : e.getItem(t)) ?? null;
        } catch {
          return null;
        }
      })(e, t);
      if (n) return n;
      const r = _c();
      return (
        ((e, t, n) => {
          try {
            null == e || e.setItem(t, n);
          } catch {}
        })(e, t, r),
        r
      );
    },
    Ic = (e) =>
      e
        .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
        .replace(/[\s-]+/g, "_")
        .toLowerCase(),
    Sc = (e) => {
      const t = ((e) => {
        if ("number" == typeof e && Number.isFinite(e)) return e;
        if ("string" == typeof e && e.trim().length) {
          const t = Number(e);
          if (Number.isFinite(t)) return t;
        }
        return null;
      })(e);
      return null === t ? null : Math.round(t);
    },
    Ac = () => {
      if ("undefined" == typeof navigator) return "web";
      const e = navigator.userAgent || "";
      return /android/i.test(e)
        ? "android"
        : /iphone|ipad|ipod/i.test(e)
        ? "ios"
        : "web";
    },
    Cc = () => {
      if ("undefined" == typeof navigator) return null;
      const e = navigator.userAgent || "";
      return /ipad/i.test(e) || /tablet/i.test(e)
        ? "tablet"
        : /mobi|android|iphone|ipod/i.test(e)
        ? "mobile"
        : "desktop";
    },
    Tc = () => {
      if ("undefined" == typeof navigator) return null;
      const e = navigator.userAgent || "";
      return /windows/i.test(e)
        ? "windows"
        : /android/i.test(e)
        ? "android"
        : /iphone|ipad|ipod/i.test(e)
        ? "ios"
        : /mac os x/i.test(e)
        ? "macos"
        : /linux/i.test(e)
        ? "linux"
        : null;
    },
    Pc = () => {
      if ("undefined" == typeof navigator) return null;
      const e = navigator.userAgent || "";
      return /edg/i.test(e)
        ? "edge"
        : /firefox/i.test(e)
        ? "firefox"
        : /chrome/i.test(e) && !/edg|opr/i.test(e)
        ? "chrome"
        : /safari/i.test(e) && !/chrome|crios|edg/i.test(e)
        ? "safari"
        : null;
    },
    Oc = () => {
      var e;
      if ("undefined" == typeof window || "undefined" == typeof navigator)
        return null;
      const t = navigator.userAgent || "",
        n = /iphone|ipad|ipod/i.test(t),
        r = /android/i.test(t);
      return void 0 !== window.ReactNativeWebView ||
        void 0 !== window.NativeBridge ||
        void 0 !== window.WindowsGameBridge ||
        void 0 !== window.cordova ||
        void 0 !== window.Capacitor ||
        void 0 !== (null == (e = window.webkit) ? void 0 : e.messageHandlers) ||
        (r && (/\bwv\b/i.test(t) || /Version\/\d+\.\d+/i.test(t))) ||
        (n && /applewebkit/i.test(t) && !/safari/i.test(t))
        ? "webview"
        : "browser";
    },
    Lc = () => {
      const e = g.get(),
        t = Kl.get(),
        n = m.get().name,
        r = n && "missing_sdk_name" !== n ? n : "crazyGames",
        a = "undefined" != typeof window ? window.location.href : null,
        o = "undefined" != typeof window ? window.location.host : null,
        i = ((e) => {
          if (!e) return null;
          try {
            return new URL(e).host;
          } catch {
            return null;
          }
        })("undefined" != typeof document ? document.referrer : ""),
        s =
          e.locale ||
          ("undefined" != typeof navigator ? navigator.language : null),
        l = e.userId || e.userid || t.userId || null,
        c = "boolean" == typeof t.isAnonymous ? t.isAnonymous : !l,
        d = e.gameId || e.gameIdOnPortal || "unknown";
      "unknown" === d &&
        y("Analytics: missing game_id, using fallback 'unknown'.");
      const u = Boolean(e.dev) || Boolean(e.currentMock);
      return {
        game_id: d,
        platform: Ac(),
        session_id: cc,
        app_session_id: cc,
        portal: r,
        sdk_name: "eos-sdk",
        sdk_version: null,
        game_version: e.version || null,
        build_env: u ? "dev" : "prod",
        is_dev: u,
        is_mocked: Boolean(e.currentMock),
        portal_game_id: e.gameIdOnPortal || null,
        page_url: a,
        page_host: o,
        host_domain: i,
        referrer_domain: i,
        language: s || null,
        user_id: l,
        anon_id: dc || null,
        is_anonymous: c,
        os: Tc(),
        browser: Pc(),
        client_runtime: Oc(),
        device_type: Cc(),
        country: null,
      };
    },
    Rc = () => {
      if (sc) return;
      (sc = !0), (lc = Date.now());
      const e = "undefined" != typeof window ? window.sessionStorage : void 0,
        t = "undefined" != typeof window ? window.localStorage : void 0;
      (cc = kc(e, "eos_sdk_session_id")),
        (dc = kc(t, "eos_sdk_anon_id")),
        (uc = 0),
        null === gc &&
          "undefined" != typeof window &&
          ((gc = window.setInterval(() => {
            Vc(!1);
          }, 5e3)),
          window.addEventListener("visibilitychange", () => {
            "hidden" === document.visibilityState && (Bc("visibility"), Vc(!0));
          }),
          window.addEventListener("pagehide", () => {
            Bc("pagehide"), Vc(!0);
          }),
          window.addEventListener("beforeunload", () => {
            Bc("unload"), Vc(!0);
          })),
        y("init analytics collector...");
    },
    xc = (e, t = {}) => {
      yc.length >= 100 &&
        (yc.shift(), y("Analytics: queue full, dropping oldest event.")),
        yc.push(e),
        (t.flushNow ?? 1) &&
          (yc.length >= 25 || "game_end" === e.event_name) &&
          Vc(!1);
    },
    Nc = () => {
      null === wc &&
        "undefined" != typeof window &&
        ((wc = window.setTimeout(() => {
          (wc = null), Vc(!1);
        }, fc)),
        (fc = Math.min(2 * fc, 3e4)));
    },
    Dc = () => {
      fc = 1e3;
    },
    Mc = (e) => {
      yc.unshift(...e), yc.length > 100 && (yc.length = 100);
    },
    $c = async () => {
      if (Yl())
        try {
          await (async () => ec())();
        } catch {}
    },
    Vc = async (e) => {
      if (vc || 0 === yc.length) return;
      (vc = !0), await $c();
      const t = yc.splice(0, e ? yc.length : 25),
        n = { ...Lc(), events: t },
        r = JSON.stringify(n);
      try {
        if (g.get().analyticsDebug)
          return (
            console.log("[analytics][debug] batch", n), Mc(t), void (vc = !1)
          );
        if (
          ((e) =>
            !!e &&
            "undefined" != typeof navigator &&
            "function" == typeof navigator.sendBeacon)(e)
        ) {
          const e = new Blob([r], { type: "application/json" });
          if (navigator.sendBeacon(ic, e)) return Dc(), void (vc = !1);
        }
        const o = await fetch(ic, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: r,
          credentials: "omit",
          keepalive: e,
        });
        o.ok
          ? Dc()
          : (a = o.status) >= 500 || 408 === a || 429 === a
          ? (Mc(t), Nc())
          : Dc();
      } catch {
        Mc(t), Nc();
      } finally {
        vc = !1;
      }
      var a;
    },
    Uc = (e, t, n) => {
      const r = Date.now(),
        a = Ic(e),
        o = Ic(n);
      let i = a;
      const s = new Set([
        "sdk_init",
        "game_ready",
        "game_start",
        "game_end",
        "game_pause",
        "game_resume",
        "audio_mute_changed",
        "progress_updated",
        "score_updated",
        "ad_request",
        "ad_impression",
        "ad_result",
        "iap_purchase_result",
        "ui_action",
        "custom_event",
        "stage_start",
        "stage_end",
      ]);
      i =
        "game_over" === o || "game_complete" === o || "game_quit" === o
          ? "game_end"
          : s.has(a)
          ? a
          : s.has(o)
          ? o
          : "custom_event";
      const l = {
        event_id: _c(),
        event_name: i,
        event_ts: r,
        event_seq: ++uc,
        run_session_id: hc,
      };
      if (
        ("sdk_init" === i && (l.time_since_init_ms = 0),
        "game_ready" === i &&
          (l.time_since_init_ms = lc ? Math.max(0, r - lc) : null),
        "game_start" === i)
      ) {
        ((e) => {
          (hc = _c()), (pc = e), (mc = oc());
        })(r),
          (l.run_session_id = hc);
        const e = Sc(t.level ?? ca.get().level);
        l.level = e;
        const n = ca.get().gameReadyAt;
        l.time_since_ready_ms = n ? Math.max(0, r - n) : null;
      }
      if ("game_end" === i) {
        l.run_session_id = hc;
        const e = Sc(t.level ?? ca.get().level);
        l.level = e;
        const n = Sc(t.score_total ?? ca.get().score);
        (l.score_total = n),
          (l.duration_wall_ms = pc ? Math.max(0, r - pc) : null),
          (l.playtime_active_ms =
            null !== mc ? Math.max(0, Math.round(oc() - mc)) : null),
          "string" == typeof t.end_reason
            ? (l.end_reason = t.end_reason)
            : "game_over" === o
            ? (l.end_reason = "over")
            : "game_complete" === o
            ? (l.end_reason = "complete")
            : "game_quit" === o && (l.end_reason = "quit"),
          (hc = null),
          (pc = null),
          (mc = null);
      }
      let c = null;
      if (
        "custom_event" === i &&
        ((c =
          "string" == typeof t.name ? t.name : "custom_event" !== o ? o : null),
        c && (l.custom_name = c),
        "string" == typeof t.category && (l.custom_category = t.category),
        void 0 !== t.value)
      ) {
        const e = t.value;
        if (
          "string" == typeof e ||
          "number" == typeof e ||
          "boolean" == typeof e ||
          "bigint" == typeof e
        )
          l.custom_value = String(e);
        else
          try {
            l.custom_value =
              JSON.stringify(e) ?? Object.prototype.toString.call(e);
          } catch {
            l.custom_value = Object.prototype.toString.call(e);
          }
      }
      const d = { ...t };
      return (
        "custom_event" === i && c && "string" != typeof d.name && (d.name = c),
        Object.keys(d).length > 0 && (l.params_json = d),
        l
      );
    },
    Bc = (e) => {
      if (!hc) return;
      const t = Uc(
        "game_end",
        { end_reason: "quit", quit_reason: e, synthetic_end: !0 },
        "game_end"
      );
      t && xc(t, { flushNow: !1 });
    },
    jc = (e, t = {}, n) => {
      if (!Ec()) return;
      Rc();
      let r = e,
        a = t,
        o = e || "";
      if (!r) {
        const e = (() => {
          var e, t;
          const n = null == (e = ca.get().history) ? void 0 : e.gameEvents;
          if (!(null == n ? void 0 : n.length)) return null;
          const r = n[n.length - 1],
            a = {};
          return (
            null == (t = r.params) ||
              t.forEach((e) => {
                a[e.name] = e.value;
              }),
            { name: r.name, params: a }
          );
        })();
        if (!e) return;
        (r = e.name), (a = e.params), (o = e.name);
      }
      n &&
        (a = ((e, t = {}) => {
          const n = { ...e },
            r = ca.get(),
            a =
              "number" == typeof n.level
                ? n.level
                : "number" == typeof t.level
                ? t.level
                : r.level,
            o =
              "number" == typeof n.stage
                ? n.stage
                : "number" == typeof t.stage
                ? t.stage
                : r.stage;
          if (
            (t.includeLevel && "number" == typeof a && (n.level = a),
            t.includeStage && "number" == typeof o && (n.stage = o),
            "number" == typeof n.stage && (n.stage = n.stage / 1e3 + (a || 0)),
            t.includeScore)
          ) {
            const e = t.scoreKey ?? "score_total";
            if ("number" != typeof n[e]) {
              const a = "number" == typeof t.score ? t.score : r.score;
              "number" == typeof a && (n[e] = a);
            }
          }
          return n;
        })(a, n));
      const i = Uc(r, a, o);
      i && xc(i);
    },
    Gc = h({
      rewardedAdAvailable: !1,
      interstitialAdAvailable: !1,
      types: {
        preroll: { state: "off" },
        interstitial: { state: "off" },
        rewarded: { state: "off" },
        banner: { state: "off" },
      },
      callbacks: {
        onRewardedAdAvailabilityChange: void 0,
        onInterstitialAdAvailabilityChange: void 0,
        onOffsetChange: void 0,
      },
      offsets: { top: 0, bottom: 0, left: 0, right: 0 },
      skipValidation: {
        rewarded: !1,
        interstitial: !1,
        banner: !1,
        preroll: !1,
      },
    }),
    Hc = "off",
    Fc = "idle",
    zc = "preloading",
    Wc = "ready",
    Kc = "playing",
    qc = "closed",
    Jc = (e = "", t = "") => {
      const n = [
          "preroll",
          "start",
          "pause",
          "resume",
          "quit",
          "browse",
          "next",
          "break",
        ],
        r = "string" == typeof t ? t.toLowerCase() : "";
      if (n.includes(r)) return r;
      const a = "string" == typeof e ? e.toLowerCase() : "";
      if (!a) return "browse";
      const o = a.split(":");
      if ("break" === o[0]) return "break";
      const i = o[o.length - 1];
      return n.includes(i) ? i : "browse";
    },
    Xc = {
      isStarted: !1,
      isPaused: !1,
      isExternalPaused: { ad: !1, browser: !1, external: !1 },
    };
  let Yc = null;
  const Zc = (e, t) => {
      "function" == typeof t && ca.set({ callbacks: { [e]: t } });
    },
    Qc = (e = !0, t = !1, n = "unknown", r = !1) => {
      var a, o;
      const { isMuted: i, userMutePref: s, callbacks: l } = ca.get();
      let c = e;
      t
        ? ((c = e || s), ca.set({ isMuted: c }))
        : ca.set({ isMuted: c, userMutePref: c }),
        (i !== c || r) &&
          (jc("audio_mute_changed", { is_muted: c, mute_trigger: n }),
          null == (a = l.onAudioStateChange) || a.call(l, c, t),
          null == (o = l.onMuteStateChange) || o.call(l, c, t));
    },
    ed = (e = !0, t = !1) => {
      var n;
      const { isPaused: r, userPausePref: a, callbacks: o } = ca.get();
      let i = r;
      if (
        (t
          ? ((i = e || a), i !== r && ca.set({ isPaused: i }))
          : ((i = e), ca.set({ isPaused: i, userPausePref: i })),
        nd("setPause", [
          { name: "isAdTriggered", value: t },
          { name: "isPaused", value: i },
        ]),
        i !== r)
      ) {
        const e = { pause_reason: t ? "ad" : "user" };
        if (i) (Yc = Date.now()), jc("game_pause", e, { includeLevel: !0 });
        else {
          const t = Yc ? Date.now() - Yc : null;
          Yc = null;
          const n = { ...e };
          null !== t && (n.pause_duration_ms = t),
            jc("game_resume", n, { includeLevel: !0 });
        }
        null == (n = o.onPauseStateChange) || n.call(o, i, t);
      }
    };
  function td(e, t) {
    var n;
    const r = (null == (n = ca.get().history) ? void 0 : n.gameEvents) || [];
    r.push({ name: e, params: t }),
      ca.set({ history: { gameEvents: r } }),
      nd(e, t),
      document.dispatchEvent(
        new CustomEvent("gameevent ", { detail: { eventName: e, data: t } })
      );
  }
  const nd = (e, t) => {
      const n = ca.get().gameplayState,
        r = ((e, t) => {
          var n, r, a;
          const o = ca.get().gameplayState;
          switch (e) {
            case "gameStart":
            case "stageStart":
              return (Xc.isStarted = !0), la.ACTIVE;
            case "gameQuit":
            case "gameComplete":
            case "gameOver":
            case "stageQuit":
            case "stageOver":
            case "stageComplete":
              return (Xc.isStarted = !1), la.TERMINATED;
            case "gamePause":
              return (Xc.isPaused = !0), la.PAUSED;
            case "gameResume":
              return (Xc.isPaused = !1), la.ACTIVE;
            case "visibilitychange":
              if (
                ((Xc.isExternalPaused.browser =
                  null ==
                  (n = null == t ? void 0 : t.find((e) => "hidden" === e.name))
                    ? void 0
                    : n.value),
                Xc.isStarted && Xc.isExternalPaused.browser)
              )
                return la.INTERRUPTED;
              break;
            case "setPause": {
              const e =
                null ==
                (r =
                  null == t
                    ? void 0
                    : t.find((e) => "isAdTriggered" === e.name))
                  ? void 0
                  : r.value;
              if (
                ((Xc.isExternalPaused[e ? "ad" : "external"] =
                  (null ==
                  (a =
                    null == t ? void 0 : t.find((e) => "isPaused" === e.name))
                    ? void 0
                    : a.value) || !1),
                Xc.isStarted && Xc.isExternalPaused[e ? "ad" : "external"])
              )
                return la.INTERRUPTED;
              break;
            }
          }
          return Xc.isStarted &&
            Object.values(Xc.isExternalPaused).every((e) => !1 === e)
            ? Xc.isPaused
              ? la.PAUSED
              : la.ACTIVE
            : o;
        })(e, t);
      n !== r &&
        (ca.set({ gameplayState: r }),
        o.log(`[game] gameplay state changed: ${r}`),
        document.dispatchEvent(
          new CustomEvent("gameplaystatechange", { detail: { state: r } })
        ));
    },
    rd = (e) => {
      var t, n;
      const r = pd("interstitial", e),
        a =
          (null == (n = (t = m.get()).isInterstitialAdAvailable)
            ? void 0
            : n.call(t, e)) ?? !0,
        o = r && a;
      return _(`isInterstitialAdAvailable('${e}') -> ${o}`), o;
    },
    ad = async (e, t) => {
      var n, r;
      I(`track(${e}, ${JSON.stringify(t || {})})`),
        jc("custom_event", { name: e, data: t }),
        await (null == (r = (n = m.get()).track) ? void 0 : r.call(n, e, t));
    },
    od = async (e, t) => {
      I("showInterstitialAd", e, t),
        await ad("showInterstitialAd", {
          eventId: e,
          placementType: t,
          isInternal: !0,
        }),
        await ud("interstitial", e, t);
    },
    id = "break:gameplay:internal",
    sd = (e, t = !1) => {
      var n;
      const r = Gc.get(),
        a = r.types[e],
        o = a.state === Wc;
      if ((a.wasReady || !1) !== o || t) {
        (a.wasReady = o), Gc.set(r), o && y(`[${e}] Ad is available.`);
        const t = g.get(),
          i = null == (n = null == t ? void 0 : t.ads) ? void 0 : n[e];
        if (!i) return;
        const { eventIds: s = [] } = i;
        "interstitial" === e
          ? s.forEach((e) => {
              setTimeout(() => {
                var t, n;
                null ==
                  (n = (t = r.callbacks).onInterstitialAdAvailabilityChange) ||
                  n.call(t, e, o);
              }, 50);
            })
          : "rewarded" === e &&
            s.forEach((e) => {
              setTimeout(() => {
                var t, n;
                null ==
                  (n = (t = r.callbacks).onRewardedAdAvailabilityChange) ||
                  n.call(t, e, o);
              }, 50);
            });
      }
    },
    ld = async (e, t, n) => {
      var r;
      const a = g.get(),
        o = Gc.get();
      switch (
        ((o.types[e].state = t),
        Gc.set(o),
        y(`[${e}] state changed to '${t}'`),
        t)
      ) {
        case Kc:
          a.ads.isAutoMuting &&
            (o.types[e].timeoutAutoMuting = setTimeout(() => {
              y("auto-mute the game..."), Qc(!0, !0);
            }, 500)),
            a.ads.isAutoPausing &&
              (o.types[e].timeoutAutoPausing = setTimeout(() => {
                y("auto-pause the game..."), ed(!0, !0);
              }, 500)),
            Gc.set(o);
          break;
        case qc:
          void 0 !== n && (o.types[e].lastCalled = n),
            Gc.set(o),
            await Ir((null == (r = a.ads[e]) ? void 0 : r.timeout) ?? 0),
            a.ads.isAutoPausing &&
              (y("auto-resume the game..."),
              clearTimeout(o.types[e].timeoutAutoPausing),
              ed(!1, !0)),
            a.ads.isAutoMuting &&
              (y("auto-unmute the game..."),
              clearTimeout(o.types[e].timeoutAutoMuting),
              Qc(!1, !0));
          break;
        case Fc:
          cd(e);
          break;
        case Wc:
          (o.types[e].isLandscape = window.innerWidth > window.innerHeight),
            Gc.set(o);
      }
    },
    cd = async (e) => {
      const t = g.get().ads[e];
      if (!(null == t ? void 0 : t.enabled)) return;
      await Ir(t.preload ?? 0);
      Gc.get().types[e].state === Fc &&
        (await dd(e, async () => {
          var t, n;
          return (
            (await (null == (n = (t = m.get()).preloadAd)
              ? void 0
              : n.call(t, e))) ?? !0
          );
        }));
    },
    dd = async (e, t) => {
      var n;
      const r = g.get(),
        a = Gc.get().types[e];
      if (a && a.state === Fc) {
        ld(e, zc);
        try {
          const n = await t(e);
          if (!1 === n) throw new Error("Not preloaded by portal");
          if (void 0 === n) return void ld(e, Fc);
          ld(e, Wc);
        } catch {
          y(`[${e}] preloading... FAILED`);
          const t = (null == (n = r.ads[e]) ? void 0 : n.retry) ?? 0,
            a = t > 0 ? t : 2e3;
          await Ir(a), ld(e, Fc);
        }
      }
    },
    ud = async (e, t, n) => {
      var r;
      const {
          skipAdValidation: a = !1,
          showInterstitialAd: o,
          showRewardedAd: i,
        } = m.get(),
        s = Gc.get(),
        l = s.types[e];
      if (Object.values(s.types).some((e) => e.state === Kc))
        return (
          y(`[${e}] skipped [Another ad already playing]`),
          { isRewardGranted: !1 }
        );
      if (!a) {
        if (!wd(t, e))
          return (
            y(`[${e}] event '${t}' is blocked or not allowed.`),
            { isRewardGranted: !1 }
          );
        if (l.isLocked)
          return y(`[${e}] Ad is locked.`), { isRewardGranted: !1 };
        if (l.state !== Wc)
          return (
            y(`[${e}] skipped (state: ${l.state})`), { isRewardGranted: !1 }
          );
        if (!md(e))
          return y(`[${e}] skipped (cooldown)`), { isRewardGranted: !1 };
        if (!gd(e))
          return (
            y(`[${e}] skipped (passive cooldown)`), { isRewardGranted: !1 }
          );
      }
      const c = Jc(t, n),
        d = Date.now();
      jc("ad_request", { ad_type: e, ad_event_key: t, ad_placement_type: c });
      try {
        ld(e, Kc), y(`[${e}] showing ad (event: '${t}', placement: '${c}')`);
        let a = !1;
        return (
          "interstitial" === e && (await (null == o ? void 0 : o(t, n))),
          "rewarded" === e &&
            (a = !!(null == (r = await (null == i ? void 0 : i(t)))
              ? void 0
              : r.isRewardGranted)),
          await hd(e, t, c, a, !0, Date.now() - d)
        );
      } catch {
        return await hd(e, t, c, !1, !1);
      }
    };
  async function hd(e, t, n, r, a, o) {
    if (a) {
      const r = { ad_type: e, ad_event_key: t, ad_placement_type: n };
      "number" == typeof o &&
        Number.isFinite(o) &&
        o >= 0 &&
        (r.ad_duration_ms = Math.round(o)),
        jc("ad_impression", r);
    }
    const i = {
      ad_type: e,
      ad_event_key: t,
      ad_placement_type: n,
      ad_result: a
        ? "rewarded" === e && r
          ? "completed"
          : "closed"
        : "failed",
    };
    return (
      "rewarded" === e && (i.reward_granted = r),
      a || (i.error_code = "show_failed"),
      jc("ad_result", i),
      a ? await ld(e, qc, Date.now()) : await ld(e, qc),
      setTimeout(() => {
        ld(e, Fc);
      }, 250),
      { isRewardGranted: r }
    );
  }
  const pd = (e, t = "") => {
      if (m.get().skipAdValidation) return !0;
      const n = Gc.get();
      return (
        !Object.values(n.types).some((e) => e.state === Kc) &&
        !!wd(t, e) &&
        n.types[e].state === Wc &&
        !0 !== n.types[e].isLocked &&
        !!md(e, !0) &&
        !!gd(e, !0)
      );
    },
    md = (e, t = !1) => {
      const n = Gc.get();
      if ("interstitial" !== e) return !0;
      const r = n.types[e],
        { lastCalled: a } = r;
      if (!a) return !0;
      const o = fd(e);
      if (!o || o <= 0) return !0;
      const i = o < 1e3 ? 1e3 * o : o,
        s = Date.now() - a;
      return (
        !(s < i) ||
        (t || y(`[${e}] not cooled down yet. Needs ${i - s}ms more.`), !1)
      );
    },
    gd = (e, t = !1) => {
      var n, r;
      const a = Gc.get(),
        o = g.get();
      if ("interstitial" !== e) return !0;
      const i =
        (null == (r = null == (n = o.ads) ? void 0 : n.interstitial)
          ? void 0
          : r.passiveCooldown) || 0;
      if (i <= 0) return !0;
      const { lastCalled: s } = a.types.rewarded;
      if (!s) return !0;
      const l = i < 1e3 ? 1e3 * i : i,
        c = Date.now() - s;
      return (
        !(c < l) ||
        (t || y(`[${e}] not passive cooled down yet. Needs ${l - c}ms more.`),
        !1)
      );
    },
    wd = (e, t) => {
      var n;
      if (Gc.get().skipValidation[t]) return !0;
      const r = g.get(),
        a = null == (n = null == r ? void 0 : r.ads) ? void 0 : n[t];
      if (!a) return !1;
      const { eventIds: o = [] } = a;
      return o.includes(e);
    },
    fd = (e) => {
      var t;
      if ("interstitial" !== e) return 0;
      const n = g.get(),
        r = null == (t = null == n ? void 0 : n.ads) ? void 0 : t[e];
      if (!r) return 0;
      const a = n.ads[e],
        o = r.cooldown ?? (null == a ? void 0 : a.cooldown) ?? 0;
      return o < 1e3 ? 1e3 * o : o;
    },
    vd = (e) => {
      const t = Gc.get();
      return Object.values(t.types).some((e) => e.state === Kc);
    },
    bd = () => {
      let e = window.innerWidth > window.innerHeight,
        t = 0;
      window.addEventListener("resize", (n) => {
        const r = window.innerWidth > window.innerHeight;
        clearTimeout(t),
          (t = setTimeout(() => {
            if (e !== r) {
              (e = r),
                _(
                  "orientation change detected " +
                    (e ? "landscape" : "portrait")
                );
              const t = Gc.get();
              Object.entries(t.types).forEach(([t, n]) => {
                n.isLandscape === e ||
                  (n.state !== Wc && n.state !== zc) ||
                  ld(t, Fc);
              });
            }
          }, 500));
      });
    },
    yd = () => {
      var e, t, n;
      if (
        !(
          (null ==
          (n =
            null == (t = null == (e = g.get()) ? void 0 : e.ads)
              ? void 0
              : t.interstitial)
            ? void 0
            : n.eventIds) || []
        ).includes(id)
      )
        return;
      ((e) => {
        const t = document.createElement("style");
        (t.textContent = e), document.head.appendChild(t);
      })(
        ".swal2-popup.adbreak-overlay-rounded{border-radius:20px!important;overflow:hidden;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.swal2-popup.adbreak-overlay-rounded{box-shadow:0 10px 25px #0000002e}.swal2-popup,.swal2-title,.swal2-html-container{font-family:Arial,Helvetica,sans-serif!important}"
      );
      let r = !1,
        a = null,
        o = null;
      document.addEventListener("gameplaystatechange", (e) => {
        const t = e.detail;
        (null == t ? void 0 : t.state) === la.ACTIVE
          ? (o = setInterval(() => {
              a = setTimeout(async () => {
                if (!r) {
                  if (
                    ((r = !0), ca.get().gameplayState === la.ACTIVE && rd(id))
                  ) {
                    let e = null;
                    await kr.fire({
                      html: "An ad will start in <b></b> seconds...",
                      timer: 5e3,
                      toast: !0,
                      timerProgressBar: !0,
                      position: "top",
                      showConfirmButton: !1,
                      background: "rgb(255, 255, 255, 0.9)",
                      color: "#00000",
                      didOpen: () => {
                        kr.showLoading();
                        const t = kr.getPopup();
                        if (t) {
                          const n = t.querySelector("b");
                          n &&
                            (e = setInterval(() => {
                              const e = kr.getTimerLeft();
                              e && (n.textContent = `${Math.ceil(e / 1e3)}`);
                            }, 100));
                        }
                      },
                      willClose(t) {
                        e && clearInterval(e);
                      },
                      customClass: { popup: "adbreak-overlay-rounded" },
                    }),
                      await Ir(500),
                      ca.get().gameplayState === la.ACTIVE &&
                        (await od(id, "break"));
                  }
                  r = !1;
                }
              }, 2e3);
            }, 1e3))
          : (ca.get().gameplayState !== la.TERMINATED &&
              ca.get().gameplayState !== la.UNKNOWN) ||
            (o && clearInterval(o), a && clearTimeout(a));
      });
    },
    Ed = h({}),
    _d = h({}),
    kd = h({ savegame: {} }),
    Id = async (e) => {
      try {
        const t = await fetch(e, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        if (!t.ok) return;
        return await t.json();
      } catch {
        return;
      }
    },
    Sd = h({
      currentScores: {},
      bestScores: {},
      isAutoSaving: !1,
      key: "scoring",
    }),
    Ad = (e) => {
      const t = {
        audio: !0,
        copyright: !0,
        credits: !0,
        pause: !0,
        progress: !0,
        score: !0,
        tutorial: !0,
        version: !0,
        visibilitychange: !0,
        iap: !0,
        home: !0,
        privacy: !0,
        standalone: !1,
      };
      return e.features
        ? (Object.keys(t).forEach((n) => {
            void 0 !== e.features[n] && (t[n] = !!e.features[n]);
          }),
          t)
        : t;
    },
    Cd = (e) => !!["", "true", "1"].includes(e.toLowerCase()),
    Td = (e, t) => {
      const n = e.get(t);
      return null !== n && Cd(n);
    },
    Pd = (e) => {
      const t = {};
      return (
        [
          "audio",
          "copyright",
          "credits",
          "pause",
          "progress",
          "score",
          "tutorial",
          "version",
          "visibilitychange",
          "iap",
          "home",
          "privacy",
          "standalone",
        ].forEach((n) => {
          const r = e.get(n);
          null !== r && (t[n] = Cd(r));
        }),
        t
      );
    },
    Od = (e, t, n, r) => {
      const a = e.get(n);
      if (null !== a)
        switch (r) {
          case "string":
            t.set({ [n]: a });
            break;
          case "boolean":
            "mock" === n ? t.set({ shouldMock: Cd(a) }) : t.set({ [n]: Cd(a) });
            break;
          case "number":
            t.set({ [n]: parseInt(a) });
        }
    };
  var Ld,
    Rd = { exports: {} };
  var xd,
    Nd,
    Dd =
      (Ld ||
        ((Ld = 1),
        (xd = Rd),
        (Nd = (function () {
          var e = String.fromCharCode,
            t =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            n =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
            r = {};
          function a(e, t) {
            if (!r[e]) {
              r[e] = {};
              for (var n = 0; n < e.length; n++) r[e][e.charAt(n)] = n;
            }
            return r[e][t];
          }
          var o = {
            compressToBase64: function (e) {
              if (null == e) return "";
              var n = o._compress(e, 6, function (e) {
                return t.charAt(e);
              });
              switch (n.length % 4) {
                default:
                case 0:
                  return n;
                case 1:
                  return n + "===";
                case 2:
                  return n + "==";
                case 3:
                  return n + "=";
              }
            },
            decompressFromBase64: function (e) {
              return null == e
                ? ""
                : "" == e
                ? null
                : o._decompress(e.length, 32, function (n) {
                    return a(t, e.charAt(n));
                  });
            },
            compressToUTF16: function (t) {
              return null == t
                ? ""
                : o._compress(t, 15, function (t) {
                    return e(t + 32);
                  }) + " ";
            },
            decompressFromUTF16: function (e) {
              return null == e
                ? ""
                : "" == e
                ? null
                : o._decompress(e.length, 16384, function (t) {
                    return e.charCodeAt(t) - 32;
                  });
            },
            compressToUint8Array: function (e) {
              for (
                var t = o.compress(e),
                  n = new Uint8Array(2 * t.length),
                  r = 0,
                  a = t.length;
                r < a;
                r++
              ) {
                var i = t.charCodeAt(r);
                (n[2 * r] = i >>> 8), (n[2 * r + 1] = i % 256);
              }
              return n;
            },
            decompressFromUint8Array: function (t) {
              if (null == t) return o.decompress(t);
              for (
                var n = new Array(t.length / 2), r = 0, a = n.length;
                r < a;
                r++
              )
                n[r] = 256 * t[2 * r] + t[2 * r + 1];
              var i = [];
              return (
                n.forEach(function (t) {
                  i.push(e(t));
                }),
                o.decompress(i.join(""))
              );
            },
            compressToEncodedURIComponent: function (e) {
              return null == e
                ? ""
                : o._compress(e, 6, function (e) {
                    return n.charAt(e);
                  });
            },
            decompressFromEncodedURIComponent: function (e) {
              return null == e
                ? ""
                : "" == e
                ? null
                : ((e = e.replace(/ /g, "+")),
                  o._decompress(e.length, 32, function (t) {
                    return a(n, e.charAt(t));
                  }));
            },
            compress: function (t) {
              return o._compress(t, 16, function (t) {
                return e(t);
              });
            },
            _compress: function (e, t, n) {
              if (null == e) return "";
              var r,
                a,
                o,
                i = {},
                s = {},
                l = "",
                c = "",
                d = "",
                u = 2,
                h = 3,
                p = 2,
                m = [],
                g = 0,
                w = 0;
              for (o = 0; o < e.length; o += 1)
                if (
                  ((l = e.charAt(o)),
                  Object.prototype.hasOwnProperty.call(i, l) ||
                    ((i[l] = h++), (s[l] = !0)),
                  (c = d + l),
                  Object.prototype.hasOwnProperty.call(i, c))
                )
                  d = c;
                else {
                  if (Object.prototype.hasOwnProperty.call(s, d)) {
                    if (d.charCodeAt(0) < 256) {
                      for (r = 0; r < p; r++)
                        (g <<= 1),
                          w == t - 1 ? ((w = 0), m.push(n(g)), (g = 0)) : w++;
                      for (a = d.charCodeAt(0), r = 0; r < 8; r++)
                        (g = (g << 1) | (1 & a)),
                          w == t - 1 ? ((w = 0), m.push(n(g)), (g = 0)) : w++,
                          (a >>= 1);
                    } else {
                      for (a = 1, r = 0; r < p; r++)
                        (g = (g << 1) | a),
                          w == t - 1 ? ((w = 0), m.push(n(g)), (g = 0)) : w++,
                          (a = 0);
                      for (a = d.charCodeAt(0), r = 0; r < 16; r++)
                        (g = (g << 1) | (1 & a)),
                          w == t - 1 ? ((w = 0), m.push(n(g)), (g = 0)) : w++,
                          (a >>= 1);
                    }
                    0 == --u && ((u = Math.pow(2, p)), p++), delete s[d];
                  } else
                    for (a = i[d], r = 0; r < p; r++)
                      (g = (g << 1) | (1 & a)),
                        w == t - 1 ? ((w = 0), m.push(n(g)), (g = 0)) : w++,
                        (a >>= 1);
                  0 == --u && ((u = Math.pow(2, p)), p++),
                    (i[c] = h++),
                    (d = String(l));
                }
              if ("" !== d) {
                if (Object.prototype.hasOwnProperty.call(s, d)) {
                  if (d.charCodeAt(0) < 256) {
                    for (r = 0; r < p; r++)
                      (g <<= 1),
                        w == t - 1 ? ((w = 0), m.push(n(g)), (g = 0)) : w++;
                    for (a = d.charCodeAt(0), r = 0; r < 8; r++)
                      (g = (g << 1) | (1 & a)),
                        w == t - 1 ? ((w = 0), m.push(n(g)), (g = 0)) : w++,
                        (a >>= 1);
                  } else {
                    for (a = 1, r = 0; r < p; r++)
                      (g = (g << 1) | a),
                        w == t - 1 ? ((w = 0), m.push(n(g)), (g = 0)) : w++,
                        (a = 0);
                    for (a = d.charCodeAt(0), r = 0; r < 16; r++)
                      (g = (g << 1) | (1 & a)),
                        w == t - 1 ? ((w = 0), m.push(n(g)), (g = 0)) : w++,
                        (a >>= 1);
                  }
                  0 == --u && ((u = Math.pow(2, p)), p++), delete s[d];
                } else
                  for (a = i[d], r = 0; r < p; r++)
                    (g = (g << 1) | (1 & a)),
                      w == t - 1 ? ((w = 0), m.push(n(g)), (g = 0)) : w++,
                      (a >>= 1);
                0 == --u && ((u = Math.pow(2, p)), p++);
              }
              for (a = 2, r = 0; r < p; r++)
                (g = (g << 1) | (1 & a)),
                  w == t - 1 ? ((w = 0), m.push(n(g)), (g = 0)) : w++,
                  (a >>= 1);
              for (;;) {
                if (((g <<= 1), w == t - 1)) {
                  m.push(n(g));
                  break;
                }
                w++;
              }
              return m.join("");
            },
            decompress: function (e) {
              return null == e
                ? ""
                : "" == e
                ? null
                : o._decompress(e.length, 32768, function (t) {
                    return e.charCodeAt(t);
                  });
            },
            _decompress: function (t, n, r) {
              var a,
                o,
                i,
                s,
                l,
                c,
                d,
                u = [],
                h = 4,
                p = 4,
                m = 3,
                g = "",
                w = [],
                f = { val: r(0), position: n, index: 1 };
              for (a = 0; a < 3; a += 1) u[a] = a;
              for (i = 0, l = Math.pow(2, 2), c = 1; c != l; )
                (s = f.val & f.position),
                  (f.position >>= 1),
                  0 == f.position && ((f.position = n), (f.val = r(f.index++))),
                  (i |= (s > 0 ? 1 : 0) * c),
                  (c <<= 1);
              switch (i) {
                case 0:
                  for (i = 0, l = Math.pow(2, 8), c = 1; c != l; )
                    (s = f.val & f.position),
                      (f.position >>= 1),
                      0 == f.position &&
                        ((f.position = n), (f.val = r(f.index++))),
                      (i |= (s > 0 ? 1 : 0) * c),
                      (c <<= 1);
                  d = e(i);
                  break;
                case 1:
                  for (i = 0, l = Math.pow(2, 16), c = 1; c != l; )
                    (s = f.val & f.position),
                      (f.position >>= 1),
                      0 == f.position &&
                        ((f.position = n), (f.val = r(f.index++))),
                      (i |= (s > 0 ? 1 : 0) * c),
                      (c <<= 1);
                  d = e(i);
                  break;
                case 2:
                  return "";
              }
              for (u[3] = d, o = d, w.push(d); ; ) {
                if (f.index > t) return "";
                for (i = 0, l = Math.pow(2, m), c = 1; c != l; )
                  (s = f.val & f.position),
                    (f.position >>= 1),
                    0 == f.position &&
                      ((f.position = n), (f.val = r(f.index++))),
                    (i |= (s > 0 ? 1 : 0) * c),
                    (c <<= 1);
                switch ((d = i)) {
                  case 0:
                    for (i = 0, l = Math.pow(2, 8), c = 1; c != l; )
                      (s = f.val & f.position),
                        (f.position >>= 1),
                        0 == f.position &&
                          ((f.position = n), (f.val = r(f.index++))),
                        (i |= (s > 0 ? 1 : 0) * c),
                        (c <<= 1);
                    (u[p++] = e(i)), (d = p - 1), h--;
                    break;
                  case 1:
                    for (i = 0, l = Math.pow(2, 16), c = 1; c != l; )
                      (s = f.val & f.position),
                        (f.position >>= 1),
                        0 == f.position &&
                          ((f.position = n), (f.val = r(f.index++))),
                        (i |= (s > 0 ? 1 : 0) * c),
                        (c <<= 1);
                    (u[p++] = e(i)), (d = p - 1), h--;
                    break;
                  case 2:
                    return w.join("");
                }
                if ((0 == h && ((h = Math.pow(2, m)), m++), u[d])) g = u[d];
                else {
                  if (d !== p) return null;
                  g = o + o.charAt(0);
                }
                w.push(g),
                  (u[p++] = o + g.charAt(0)),
                  (o = g),
                  0 == --h && ((h = Math.pow(2, m)), m++);
              }
            },
          };
          return o;
        })()),
        null != xd
          ? (xd.exports = Nd)
          : "undefined" != typeof angular &&
            null != angular &&
            angular.module("LZString", []).factory("LZString", function () {
              return Nd;
            })),
      Rd.exports);
  const Md = async (e, t, n = !1) => {
    if (
      (y("[decompress] Decompressing..."), "string" == typeof e && e.length)
    ) {
      let t = null;
      try {
        if (((t = Dd.decompressFromUTF16(e)), n))
          try {
            JSON.parse(t);
          } catch {
            return (
              console.warn(
                "Failed to parse the decompressed savegame. Returning the original string instead!"
              ),
              e
            );
          }
        return t;
      } catch (r) {
        console.warn(
          "[decompress] Failed to decompress string with LZString",
          r
        );
      }
    }
    return y("[decompress] ... skipped!"), e;
  };
  let $d = !1,
    Vd = null;
  function Ud() {
    let e = kd.get().flushDelay || 0;
    (e = e < 1e3 ? 1e3 * e : e), ($d = !0), Vd || (Vd = setTimeout(Bd, e));
  }
  async function Bd() {
    if (!$d) return;
    Vd && (clearTimeout(Vd), (Vd = null)), ($d = !1);
    const {
        storagePrefix: e = "famobi",
        storageKey: t = "savegame",
        savegame: n,
        shouldCompress: r,
      } = kd.get(),
      a = `${e}:${t}`,
      { storage: o } = m.get();
    try {
      const e = r
        ? await (async (e) => {
            if (
              (y("[compress] Compressing..."), "string" == typeof e && e.length)
            )
              try {
                return Dd.compressToUTF16(e);
              } catch (t) {
                console.warn(
                  "[compress] Failed to compress string with LZString",
                  t
                );
              }
            return y("[compress] ... skipped!"), e;
          })(JSON.stringify(n))
        : JSON.stringify(n);
      e &&
        ((null == o ? void 0 : o.setItem)
          ? (y(`Flushing savegame to Portal: ${a}`), await o.setItem(a, e))
          : (y(`Flushing savegame to localStorage: ${a}`),
            window.localStorage.setItem(a, e)));
    } catch (i) {
      E("Error saving savegame:", i);
    }
  }
  const jd = async () => {
    var e, t, n;
    y("init storage...");
    const { gameId: r = "{FAMOBI_GAMEID}" } = g.get();
    kd.set({ storagePrefix: r });
    const {
        storagePrefix: a = "famobi",
        storageKey: o = "savegame",
        shouldCompress: i,
        indexedDBName: s,
      } = kd.get(),
      l = `${a}:${o}`;
    let c = {};
    if (null == (e = m.get().storage) ? void 0 : e.getItem)
      try {
        let e = await (null ==
        (n = null == (t = m.get().storage) ? void 0 : t.getItem)
          ? void 0
          : n.call(t, l));
        i && (e = await Md(e, 0, !0)),
          (c = (e && JSON.parse(e)) || {}),
          y(`Loaded from Portal: ${l}`);
      } catch (d) {
        E("Error loading Portal data:", d);
      }
    else {
      const e = window.localStorage.getItem(l),
        t = i ? await Md(e, 0, !0) : e;
      if (t)
        try {
          c = JSON.parse(t);
        } catch {
          E("Error loading data:", t);
        }
    }
    if (!Object.keys(c).length && (null == s ? void 0 : s.length)) {
      const e = await (async function (e, t = "keyvaluepairs") {
        const n = (await indexedDB.databases()).find((t) => t.name === e);
        if (!n || !n.name || !n.version) return null;
        return new Promise((e) => {
          const r = indexedDB.open(n.name, n.version);
          (r.onerror = () => {
            e(null);
          }),
            (r.onsuccess = (n) => {
              const r = n.target.result;
              if (!Array.from(r.objectStoreNames).includes(t))
                return r.close(), void e(null);
              const a = r.transaction(t, "readonly").objectStore(t).getAll();
              (a.onsuccess = () => {
                r.close(),
                  e("string" == typeof a.result[0] ? a.result[0] : null);
              }),
                (a.onerror = () => {
                  r.close(), e(null);
                });
            });
        });
      })(s);
      null !== e && (c = { savegame: e });
    }
    kd.set({ savegame: c }),
      window.addEventListener("visibilitychange", () => {
        "hidden" === document.visibilityState && Bd();
      }),
      window.addEventListener("beforeunload", Bd);
  };
  const Gd = async (e = [], t = !1) => {
      if (!Array.isArray(e)) return E("'files' is not of type 'array'");
      const n = (e || []).length;
      if (n <= 0) return;
      y(`Trying to load ${n} files`);
      const r = Date.now(),
        a = await Hd(e.filter((e) => "function" != typeof e));
      await Fd(a),
        e.filter((e) => "function" == typeof e).forEach((e) => e()),
        y(n, "Files loaded (", Date.now() - r, "ms )");
    },
    Hd = async (e = []) =>
      (
        await Promise.all(
          e.map(async (e) => {
            if ((y(`Download file: ${e}`), !e)) return null;
            const t = qd(e);
            if ("js" === t || "css" === t) {
              const n = await fetch(e, {});
              if (!n.ok) throw new Error(`Failed to fetch: ${e}`);
              return { file: e, ext: t, content: await n.text() };
            }
            return null;
          })
        )
      ).filter((e) => null !== e),
    Fd = async (e) => {
      for (const t of e)
        t && t.content
          ? (y(`Load file: ${t.file}`),
            "js" === t.ext
              ? await Wd(t.content, t.file)
              : "css" === t.ext && (await Kd(t.content, t.file)))
          : E("Could not load file");
    },
    zd = (e) => {
      var t;
      const n =
        null == (t = document.querySelector("script[nonce]"))
          ? void 0
          : t.getAttribute("nonce");
      return n && e.setAttribute("nonce", n), e;
    },
    Wd = (e, t) =>
      new Promise((n, r) => {
        const a = new Blob([e], { type: "text/javascript" }),
          o = URL.createObjectURL(a),
          i = zd(document.createElement("script"));
        (i.src = o),
          (i.async = !1),
          (i.charset = "utf-8"),
          (i.onload = () => {
            URL.revokeObjectURL(o), n();
          }),
          (i.onerror = (e) => {
            URL.revokeObjectURL(o),
              r(new Error(`Failed to load ${t || "blob script"}`));
          }),
          document.head.appendChild(i);
      }),
    Kd = (e, t) =>
      new Promise((n, r) => {
        const a = new Blob([e], { type: "text/css" }),
          o = URL.createObjectURL(a),
          i = zd(document.createElement("link"));
        (i.rel = "stylesheet"),
          (i.href = o),
          (i.onload = () => {
            URL.revokeObjectURL(o), n();
          }),
          (i.onerror = () => {
            URL.revokeObjectURL(o),
              r(new Error(`Failed to load CSS ${t || ""}`));
          }),
          document.head.appendChild(i);
      }),
    qd = (e) => {
      var t;
      return (
        (null == (t = e.split("?")[0].split("#")[0].split(".").pop())
          ? void 0
          : t.toLowerCase()) || null
      );
    },
    Jd = "trackingUid";
  let Xd = null;
  const Yd = async () => {
      if ("string" == typeof Xd && Xd.length) return Xd;
      let e;
      o.log(`${cu()} retrieve userId...`);
      try {
        if (((e = await tu()), void 0 !== e)) return e;
      } catch {}
      return (
        o.log(`${cu()} no local userId found, requesting new user...`),
        (e = await Zd()),
        await nu(e).catch((e) => {
          o.warn(`${cu()} saving userId failed.`);
        }),
        (Xd = e),
        e
      );
    },
    Zd = async (e) => {
      var t;
      o.log(`${cu()} create new user...`);
      const n = du() + "event/user",
        r = eu(),
        a = Qd();
      if ((o.log(`${cu()} fetch('${n}'`, r, a), hu())) return ru();
      const i = await fetch(n, {
        method: "POST",
        headers: r,
        body: JSON.stringify(a),
        signal: AbortSignal.timeout(1e4),
      });
      if (!i.ok) throw new Error(`http error! status: ${i.status}`);
      const s = await i.json();
      if (
        "string" ==
        typeof (null == (t = null == s ? void 0 : s.data) ? void 0 : t.uid)
      )
        return s.data.uid;
      throw new Error("retrieving valid uid failed!");
    },
    Qd = () => {
      var e, t, n;
      const r = {
          locale:
            (null == (e = navigator.languages) ? void 0 : e[0]) ??
            navigator.language ??
            "en",
          host: window.location ? window.location.host : "unknown",
          domain: window.location ? window.location.hostname : "unknown",
          path: window.location ? window.location.pathname : "unknown",
          url: window.location ? window.location.href : "unknown",
        },
        a = new URLSearchParams(window.location.search);
      return (
        a.get("campaign") && (r.tag = String(a.get("campaign"))),
        (null == (n = null == (t = window.famobi) ? void 0 : t.config)
          ? void 0
          : n.aid) && (r.aid = window.famobi.config.aid),
        r
      );
    },
    eu = (e) => {
      var t, n;
      const r = g.get().gameId || "unknown",
        a = {
          "Content-Type": "application/json",
          "X-Version": uu(),
          "X-Game": r,
          "X-Platform": pu(),
        };
      "string" ==
        typeof (null == (n = null == (t = window.famobi) ? void 0 : t.config)
          ? void 0
          : n.aid) && (a["X-AID"] = window.famobi.config.aid),
        (a["X-User"] = ru());
      const o = new URLSearchParams(window.location.search);
      return (
        o.get("original_ref") &&
          (a["X-Referrer"] = String(o.get("original_ref"))),
        a
      );
    },
    tu = async (e) => {
      const t = `${g.get().gameId || "unknown"}:${Jd}`;
      o.log(`${cu()} loading uid ('${t}')...`);
      const n = window.localStorage.getItem(t);
      if (
        null === n ||
        "string" != typeof n ||
        !n.length ||
        "undefined" === n ||
        "null" === n
      )
        throw new Error("no valid userId found");
      return n;
    },
    nu = async (e, t) => {
      const n = g.get().gameId || "unknown";
      if ("string" != typeof e || !e.length) throw new Error("no valid userId");
      const r = `${n}:${Jd}`;
      o.log(`${cu()} saving userId '${e}' ('${r}')...`),
        window.localStorage.setItem(r, e);
    },
    ru = () => {
      let e = new Date().getTime();
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t) => {
        const n = (e + 16 * Math.random()) % 16 | 0;
        return (
          (e = Math.floor(e / 16)), ("x" == t ? n : (3 & n) | 8).toString(16)
        );
      });
    },
    au = "[track] [famobi_tracking]",
    ou = { enabled: !1, debug: !0, version: "0", isMocked: !1 };
  let iu = !1;
  const su = async () => {
      if (iu) return void o.warn(`${au} init cancelled - already initialized`);
      const e = await Yd();
      (iu = !0),
        o.log(`${au} user initialized! (uid: '${e}')`),
        await wu().catch((e) => {
          o.warn(`${au} processQueue() failed`, e);
        });
    },
    lu = () => {},
    cu = () => au,
    du = () =>
      ou.debug
        ? "https://tracking.plutoniumbytes.de/"
        : "https://master.tracking.html5games.com/",
    uu = () => ou.version,
    hu = () => (ou.isMocked && o.warn(`${au} --- MOCKED ---`), ou.isMocked),
    pu = () => {
      if (void 0 !== window.cordova && window.cordova.platformId)
        switch (window.cordova.platformId) {
          case "android":
            return "playstore";
          case "ios":
            return "appstore";
        }
      switch (m.get().name) {
        case "googlePlayStore":
          return "playstore";
        case "appleAppStore":
          return "appstore";
      }
      return "web";
    },
    mu = [],
    gu = async (e, t) => {
      o.log(`${cu()} trackEvent('${e}', ${JSON.stringify(t || {})})`),
        ((e) => Tr.has(e))(e) &&
          "[object Object]" === Object.prototype.toString.call(t) &&
          (mu.push({ event: e, data: t || {} }),
          iu
            ? await wu().catch((e) => {
                o.warn(`${cu()} processQueue() failed`, e);
              })
            : o.warn(`${cu()} isUserInitialized: false`));
    },
    wu = async () => {
      for (; mu.length > 0; ) {
        const e = mu.shift();
        e &&
          (await fu(e.event, e.data).catch((e) => {
            o.warn(`${cu()} sendRequest failed:`, e);
          }));
      }
    },
    fu = async (e, t) => {
      o.log(`${cu()} sendRequest('${e}')`);
      const n = await Yd().catch((e) => {}),
        r = du() + e,
        a = vu(n);
      if ((o.log(`${cu()} fetch(${r}`, a, t || {}), hu())) return;
      const i = await fetch(r, {
        method: "POST",
        headers: a,
        body: JSON.stringify(t),
        signal: AbortSignal.timeout(1e4),
      });
      if (!i.ok) throw new Error(`http error! status: ${i.status}`);
    },
    vu = (e) => {
      var t, n;
      const r = {
        "Content-Type": "application/json",
        "X-Game": g.get().gameId || "unknown",
        "X-Version": uu(),
        "X-Platform": pu(),
      };
      return (
        "string" == typeof e && e.length && (r["X-User"] = e),
        (r["X-AID"] =
          (null == (n = null == (t = window.famobi) ? void 0 : t.config)
            ? void 0
            : n.aid) ||
          m.get().name ||
          "unknown"),
        r
      );
    },
    bu = async () => {
      var e, t;
      I("gameComplete"),
        td("gameComplete"),
        jc(
          "game_end",
          { end_reason: "complete" },
          { includeLevel: !0, includeScore: !0, scoreKey: "score_total" }
        );
      const n = ca.get().level,
        r = "number" == typeof n && Number.isInteger(n) ? n : void 0;
      gu(Cr.LEVEL_END, { success: !0, level: r }),
        await (null == (t = (e = m.get()).gameComplete) ? void 0 : t.call(e));
    },
    yu = async () => {
      var e, t;
      I("gameOver"),
        td("gameOver"),
        jc(
          "game_end",
          { end_reason: "over" },
          { includeLevel: !0, includeScore: !0, scoreKey: "score_total" }
        );
      const n = ca.get().level,
        r = "number" == typeof n && Number.isInteger(n) ? n : void 0;
      gu(Cr.LEVEL_END, { success: !1, level: r }),
        await (null == (t = (e = m.get()).gameOver) ? void 0 : t.call(e));
    },
    Eu = (e, t = "_assets_") => {
      try {
        const n = t.replace(/\/+$/, ""),
          r = e.replace(/^\/+/, "");
        return n ? (r ? n + "/" + r : n) : r;
      } catch {
        return "";
      }
    },
    _u = async () => Promise.resolve(),
    ku = {
      pauseGameplay: () => {},
      resumeGameplay: () => {},
      disableAudio: () => {},
      enableAudio: () => {},
      disableMusic: () => {},
      enableMusic: () => {},
      changeVolume: () => {},
      onOffsetChange: () => {},
      restartGame: () => {},
    },
    Iu = {};
  let Su = 1,
    Au = 0;
  const Cu = async () => {
      var e;
      (null == (e = window.famobi_gameID) ? void 0 : e.length) &&
        "{FAMOBI_GAMEID}" !== window.famobi_gameID &&
        g.set({ gameId: window.famobi_gameID });
      const t = Eu("branding-button.png"),
        n = await Id("famobi.json");
      (window.famobi_tracking = {
        init: (e) => {
          y(`[bridge] famobi_tracking.init('${e}')`);
        },
        trackEvent: (e, t) => {
          o.log(
            `[bridge] famobi_tracking.trackEvent('${e}')`,
            JSON.stringify(t)
          );
        },
        EVENTS: Cr,
      }),
        (window.famobi_analytics = {
          trackEvent: async (e, t) => {
            var n;
            y(`[bridge] ${e} (${JSON.stringify(t)})`);
            let r = 0;
            "string" == typeof (null == t ? void 0 : t.levelName) &&
              (r = parseInt(
                null == (n = null == t ? void 0 : t.levelName)
                  ? void 0
                  : n.replace(/\D/g, "")
              )),
              (r = isNaN(r) ? 0 : r);
            let a = !1;
            switch (e) {
              case "EVENT_CUSTOM":
                "LEVELEND" === (null == t ? void 0 : t.eventName) ||
                "LEVELEND" === (null == t ? void 0 : t.event)
                  ? "success" === t.result
                    ? await bu()
                    : await yu()
                  : await window.GameInterface.track(e, t || {}).catch(
                      () => {}
                    );
                break;
              case "EVENT_LEVELSTART":
              case "EVENT_LEVELRESTART":
                await window.GameInterface.gameStart(r);
                break;
              case "EVENT_TOTALSCORE":
                "number" == typeof (null == t ? void 0 : t.totalScore) &&
                  Number.isInteger(t.totalScore) &&
                  window.GameInterface.sendScore(t.totalScore, {
                    type: "total",
                  });
                break;
              case "EVENT_LEVELSCORE":
                "number" == typeof (null == t ? void 0 : t.levelScore) &&
                  Number.isInteger(t.levelScore) &&
                  window.GameInterface.sendScore(
                    null == t ? void 0 : t.levelScore,
                    { type: "level" }
                  );
                break;
              case "EVENT_LIVESCORE":
                "number" == typeof (null == t ? void 0 : t.liveScore) &&
                  Number.isInteger(t.liveScore) &&
                  window.GameInterface.sendScore(
                    null == t ? void 0 : t.liveScore,
                    { type: "live" }
                  );
                break;
              case "EVENT_LEVELSUCCESS":
                a = !0;
                break;
              case "EVENT_LEVELFAIL":
                "quit" === (null == t ? void 0 : t.reason)
                  ? await window.GameInterface.gameQuit()
                  : (a = !0);
                break;
              case "EVENT_VOLUMECHANGE":
                window.GameInterface.gameMuted(
                  0 === (null == t ? void 0 : t.bgmVolume) &&
                    0 === (null == t ? void 0 : t.sfxVolume),
                  "system"
                );
                break;
              case "EVENT_PAUSE":
                await window.GameInterface.gamePause();
                break;
              case "EVENT_RESUME":
                await window.GameInterface.gameResume();
            }
            if (a)
              return new Promise((e) => {
                var t;
                null == (t = window.famobi) ||
                  t.showAd(() => {
                    e();
                  });
              });
          },
          getEvents: async () => (await _u(), []),
          EVENT_CUSTOM: "EVENT_CUSTOM",
          EVENT_LEVELFAIL: "EVENT_LEVELFAIL",
          EVENT_LEVELRESTART: "EVENT_LEVELRESTART",
          EVENT_LEVELSTART: "EVENT_LEVELSTART",
          EVENT_LEVELSUCCESS: "EVENT_LEVELSUCCESS",
          EVENT_LIVESCORE: "EVENT_LIVESCORE",
          EVENT_LEVELSCORE: "EVENT_LEVELSCORE",
          EVENT_TOTALSCORE: "EVENT_TOTALSCORE",
          EVENT_TUTORIALCOMPLETED: "EVENT_TUTORIALCOMPLETED",
          EVENT_TUTORIALSKIPPED: "EVENT_TUTORIALSKIPPED",
          EVENT_VOLUMECHANGE: "EVENT_VOLUMECHANGE",
          EVENT_PAUSE: "EVENT_PAUSE",
          EVENT_RESUME: "EVENT_RESUME",
          trackScreen: async (e, t) => {
            o.log(
              `[bridge] famobi_tracking.trackScreen('${e}', '${t || "-"}')`
            ),
              await _u();
          },
          trackStats: async (e, t, n) => {
            o.log("[bridge] famobi_tracking.trackStats", e, t, n), await _u();
          },
          getScreen: () => "",
          getPageTitle: () => "",
          SCREEN_OTHER: "SCREEN_OTHER",
          SCREEN_BONUS: "SCREEN_BONUS",
          SCREEN_CHARACTER: "SCREEN_CHARACTER",
          SCREEN_CREDITS: "SCREEN_CREDITS",
          SCREEN_GAMERESULT: "SCREEN_GAMERESULT",
          SCREEN_HELP: "SCREEN_HELP",
          SCREEN_HOME: "SCREEN_HOME",
          SCREEN_LEVEL: "SCREEN_LEVEL",
          SCREEN_LEVELINTRO: "SCREEN_LEVELINTRO",
          SCREEN_LEVELLOADING: "SCREEN_LEVELLOADING",
          SCREEN_LEVELRESULT: "SCREEN_LEVELRESULT",
          SCREEN_LEVELSELECT: "SCREEN_LEVELSELECT",
          SCREEN_PAUSE: "SCREEN_PAUSE",
          SCREEN_SETTINGS: "SCREEN_SETTINGS",
          SCREEN_SHOP: "SCREEN_SHOP",
          SCREEN_SPLASH: "SCREEN_SPLASH",
          SCREEN_TUTORIAL: "SCREEN_TUTORIAL",
        }),
        (window.famobi = {
          setPreloadProgress: (e) => {
            if ("number" == typeof e) {
              const t = (e = Math.floor(e)) !== Au;
              (Au = e), t && window.GameInterface.sendPreloadProgress(Au);
            }
          },
          log: (...e) => {
            window.GameInterface.log(...e);
          },
          gameReady: () => {
            window.GameInterface.gameReady();
          },
          playerReady: () => {},
          setVolume: (e) => {
            var t;
            const n = e !== Su;
            (Su = e), n && (null == (t = ku.changeVolume) || t.call(ku, Su));
          },
          getVolume: () => Su,
          hasFeature: (e) => {
            let t = e;
            switch (e) {
              case "standalone":
              case "multiplayer_local":
                return !0;
              case "external_mute":
                t = "audio";
                break;
              case "external_pause":
                t = "pause";
                break;
              case "external_focus":
                t = "visibilitychange";
            }
            switch (
              (e in Iu || (Iu[e] = window.GameInterface.hasFeature(t)), e)
            ) {
              case "external_mute":
              case "external_pause":
              case "external_focus":
                return !Iu[e];
              default:
                return Iu[e];
            }
          },
          getOrientation: () =>
            window.innerHeight > window.innerWidth
              ? "portrait"
              : window.innerHeight < window.innerWidth
              ? "landscape"
              : "",
          onOrientationChange: (e) => {
            window.addEventListener("orientationchange", e);
          },
          getCurrentLanguage: () => window.GameInterface.getCurrentLanguage(),
          showInterstitialAd: async (e, t) => {
            const n = (e) => "string" == typeof e,
              r = (e) => "function" == typeof e;
            "object" == typeof e && ((t = e.callback), (e = e.eventId));
            const a = n(e) ? e : n(t) ? t : "",
              o = r(t) ? t : r(e) ? e : () => {};
            await window.GameInterface.showInterstitialAd(a, Jc(a)),
              "function" == typeof o && o();
          },
          hasRewardedAd: (e) =>
            window.GameInterface.isRewardedAdAvailable(
              e || "rewarded:multipass"
            ),
          rewardedAd: async (e, t) => {
            const n = await window.GameInterface.showRewardedAd(
              t || "rewarded:multipass"
            );
            "function" == typeof e && e({ rewardGranted: n.isRewardGranted });
          },
          getOffsets: () => window.GameInterface.getOffsets(),
          onOffsetChange: (e) => {
            (ku.onOffsetChange = e),
              ku.onOffsetChange(window.GameInterface.getOffsets());
          },
          showAd: async (e) => {
            await window.GameInterface.showInterstitialAd(
              "interstitial:multipass",
              "browse"
            ).then(() => {
              "function" == typeof e && e();
            });
          },
          forceAd: (e) => {
            var t;
            null == (t = window.famobi) || t.showAd(e, !0);
          },
          __: (e) =>
            (null == n ? void 0 : n.game_i18n)
              ? ((e, t, n, r) => {
                  var a, o;
                  if ("more_games_image" === e)
                    return (
                      (null == (a = window.famobi)
                        ? void 0
                        : a.getBrandingButtonImage()) || null
                    );
                  if (
                    ((n =
                      n ||
                      (null == (o = window.famobi)
                        ? void 0
                        : o.getCurrentLanguage()) ||
                      "en"),
                    (r = r || "A-12345"),
                    t)
                  ) {
                    if (
                      (t[n] && (t[n] = Object.assign(t[n], t[r + "." + n])),
                      t[n] && t[n][e])
                    ) {
                      let r = t[n][e];
                      return "string" == typeof r
                        ? ((r = r.replace("{lang}", n)), r)
                        : t[n][e];
                    }
                    if (
                      (t.default &&
                        (t.default = Object.assign(
                          t.default,
                          t[r + ".default"]
                        )),
                      t.default && t.default[e])
                    )
                      return "string" == typeof t.default[e]
                        ? t.default[e].replace("{lang}", n)
                        : t.default[e];
                  }
                  return null;
                })(e, n.game_i18n)
              : null,
          getFeatureProperties: () => ({}),
          ads: {
            hasCooledDown: () => md("interstitial"),
            isEnabled() {
              var e;
              return (
                (null == (e = g.get().ads.interstitial) ? void 0 : e.enabled) ||
                !1
              );
            },
          },
          adapters: {
            add: (e, t, n) => {
              o.log(
                `[bridge] famobi.adapters.add('${e}', '${t}', ${typeof n})`
              );
            },
            run: (e, t) => {
              o.log(`[bridge] famobi.adapters.run('${e}', '${t}')`);
            },
          },
          onRequest: (e, t) => {
            switch (e) {
              case "enableAudio":
              case "disableAudio":
              case "enableMusic":
              case "disableMusic":
              case "pauseGameplay":
              case "resumeGameplay":
              case "restartGame":
              case "changeVolume":
                o.log(`[bridge] onRequest('${e}')`), (ku[e] = t);
                break;
              default:
                o.warn(`[bridge] onRequest: unknown event '${e}'`);
            }
          },
          localStorage: {
            setItem: (e, t) => {
              window.GameInterface.storage.setItem(e, t);
            },
            getItem: (e) => window.GameInterface.storage.getItem(e),
            removeItem: (e) => {
              window.GameInterface.storage.removeItem(e);
            },
            clear: () => {
              window.GameInterface.storage.clear();
            },
          },
          iap: {
            getProducts: async () => window.GameInterface.iap.getProducts(),
            buyProduct: (e) => {
              window.GameInterface.iap.buyProduct(e);
            },
            onEvent: (e) => {
              window.GameInterface.iap.onEvent(e);
            },
            consumeProduct: async (e) => {
              var t, n, r;
              try {
                null ==
                  (r =
                    null ==
                    (n = null == (t = window.GameInterface) ? void 0 : t.iap)
                      ? void 0
                      : n.consumeProduct) || r.call(n, e);
              } catch (a) {
                o.warn("[bridge] iap.consumeProduct()", a);
              }
              await _u();
            },
          },
          game: { isWaiting: () => window.GameInterface.isPaused() },
          config: { aid: "A-GAMEINTERFACE" },
          getBrandingButtonImage: () => t,
          openBrandingLink: () => {},
          submitHighscore: (e, t) => {
            o.log(`[bridge] submitHighscore('${e}', ${t})`);
          },
          levelUp: () => {},
          gameOver: () => {},
          moreGamesLink: () => {},
          getMoreGamesButtonImage: () => t,
        }),
        (window.fenster = {
          offsets: { top: 0, right: 0, bottom: 0, left: 0 },
          fnResize: null,
          get innerHeight() {
            return window.innerHeight - this.offsets.top - this.offsets.bottom;
          },
          get innerWidth() {
            return window.innerWidth - this.offsets.left - this.offsets.right;
          },
          update() {
            var e, t;
            null == (e = this.fnResize) || e.call(this),
              (null == (t = _d.get().famobi) ? void 0 : t.applyCanvasOffset) &&
                setTimeout(() => {
                  const e = document.getElementsByTagName("canvas")[0];
                  e &&
                    ((e.style.marginLeft = this.offsets.left + "px"),
                    (e.style.marginTop = this.offsets.top + "px"));
                }, 50);
          },
          subscribeToOffsetUpdates(e) {
            this.fnResize = e;
          },
          set(e, t = 0, n = 0, r = 0) {
            (this.offsets.top = ("object" == typeof e ? e.top : e) || 0),
              (this.offsets.right = ("object" == typeof e ? e.right : t) || 0),
              (this.offsets.bottom =
                ("object" == typeof e ? e.bottom : n) || 0),
              (this.offsets.left = ("object" == typeof e ? e.left : r) || 0),
              this.update();
          },
          get() {
            return this.offsets;
          },
        }),
        window.GameInterface.onMuteStateChange((e, t) => {
          var n, r, a, i, s, l;
          o.log(
            `[bridge] onMuteStateChange(isMuted: ${e}, isAdTriggered: ${t})`
          ),
            t ||
              (e
                ? (null == (n = window.famobi) || n.setVolume(0),
                  null == (r = ku.disableAudio) || r.call(ku),
                  null == (a = ku.disableMusic) || a.call(ku))
                : (null == (i = window.famobi) || i.setVolume(1),
                  null == (s = ku.enableAudio) || s.call(ku),
                  null == (l = ku.enableMusic) || l.call(ku)));
        }),
        window.GameInterface.onPauseStateChange((e, t) => {
          var n, r, a, i;
          o.log(
            `[bridge] onPauseStateChange(isPaused: ${e}, isAdTriggered: ${t})`
          ),
            e
              ? t
                ? (o.log(
                    "[bridge] onPauseStateChange -> window.famobi_onPauseRequested?.()"
                  ),
                  null == (n = window.famobi_onPauseRequested) ||
                    n.call(window))
                : null == (r = ku.pauseGameplay) || r.call(ku)
              : t
              ? (o.log(
                  "[bridge] onPauseStateChange -> window.famobi_onResumeRequested?.()"
                ),
                null == (a = window.famobi_onResumeRequested) || a.call(window))
              : null == (i = ku.resumeGameplay) || i.call(ku);
        }),
        window.GameInterface.onRestartGame(() => {
          var e;
          o.log(
            "[bridge] onRestartGame -> requestAdapterCallbacks.restartGame?.()"
          ),
            null == (e = ku.restartGame) || e.call(ku);
        }),
        window.GameInterface.onOffsetChange((e) => {
          var t, n;
          null == (t = ku.onOffsetChange) || t.call(ku, e),
            null == (n = window.fenster) || n.set(e);
        });
    },
    Tu = h({ config: {} });
  let Pu = !0,
    Ou = !0,
    Lu = null;
  const Ru = ["log", "info", "warn", "table", "debug"],
    xu = Object.fromEntries(Ru.map((e) => [e, console[e].bind(console)])),
    Nu = Object.fromEntries(
      Ru.map((e) => [
        e,
        (...t) => {
          Pu && xu[e](...t);
        },
      ])
    ),
    Du = (e = !1) => {
      if (!Ou && !e) return;
      const t = console;
      for (const n of Ru) t[n] !== Nu[n] && (t[n] = Nu[n]);
    },
    Mu = () => m.get().name,
    $u = async (e) => {
      if ((await _u(), "youtubePlayables" === Mu())) {
        const t = e.indexOf("playcanvas-stable.min.js");
        -1 !== t &&
          e.splice(t + 1, 0, () => {
            (() => {
              var e, t, n, r, a, i;
              try {
                if (
                  void 0 !==
                  (null ==
                  (n =
                    null ==
                    (t =
                      null == (e = null == window ? void 0 : window.pc)
                        ? void 0
                        : e.Asset)
                      ? void 0
                      : t.prototype)
                    ? void 0
                    : n.getFileUrl)
                ) {
                  const e =
                    null ==
                    (i =
                      null ==
                      (a =
                        null == (r = null == window ? void 0 : window.pc)
                          ? void 0
                          : r.Asset)
                        ? void 0
                        : a.prototype)
                      ? void 0
                      : i.getFileUrl;
                  e &&
                    (window.pc.Asset.prototype.getFileUrl = function (t) {
                      const n = e.call(this, t);
                      if ("string" == typeof n)
                        return n.replace(/([?&])t=[^&]+(&|$)/, "$2");
                    });
                }
              } catch (s) {
                o.warn(s);
              }
            })();
          });
      }
      return e;
    },
    Vu = {},
    Uu = (e) => {
      var t, n, r;
      if (e in Vu) return Vu[e];
      I("hasFeature", e);
      const { ads: a, features: o } = g.get();
      return m.get().hasFeature
        ? (Vu[e] =
            (null == (n = (t = m.get()).hasFeature) ? void 0 : n.call(t, e)) ||
            !1)
        : (Vu[e] =
            "rewarded" === e
              ? !!(null == (r = a.rewarded) ? void 0 : r.enabled)
              : !!o[e]);
    },
    Bu = (e) => {
      if (null === e || "object" != typeof e) return e;
      if (Array.isArray(e)) return e.map(Bu);
      const t = e,
        n = {};
      return (
        Object.keys(t).forEach((e) => {
          const r = t[e];
          "function" != typeof r && (n[e] = Bu(r));
        }),
        n
      );
    };
  let ju = {};
  const Gu = (e, t) => {
      if ((o.log(`[events] removeEventListener('${e}')`), !ju[e])) return;
      const n = ju[e].length;
      ju[e] = ju[e].filter((e) => e !== t);
      const r = n - ju[e].length;
      o.log(`[events] Removed ${r} listener(s) for '${e}'`),
        0 === ju[e].length && delete ju[e];
    },
    Hu = async (e, t) => {
      if (
        (o.log(`[events] sendEvent('${e}')`, t),
        (t = t || {}),
        "disableAds" === e)
      )
        return (
          (n = (n = t.adType) || "interstitial"),
          o.log(`[ads] disableAds('${n}')`),
          void ld(n, Hc).catch((e) => {
            o.warn("[ads] disableAds error", e);
          })
        );
      throw new Error(`Unknown event '${e}'`);
      var n;
    },
    Fu = {
      init: async (e = [], t = {}, n = !1) => {
        var r, a;
        const i = Date.now();
        I("init"),
          td("init"),
          await (async (e) => {
            var t, n, r, a, o, i, s;
            y("init params..."),
              g.set({
                gameId: e.gameId || void 0,
                locale: e.locale || void 0,
                eventDelay: e.eventDelay || 0,
                features: Ad(e),
                shouldMock: e.mock || !1,
                analyticsDebug: e.analyticsDebug || !1,
                userId: void 0,
                maxLevels: e.maxLevels || void 0,
                scoreTypes: e.scoreTypes || void 0,
                version: e.version || void 0,
              }),
              ca.set({ isMuted: e.isMuted || !1 });
            const l = e.loggingEnabled ?? !1;
            p.set({ loggingEnabled: l }),
              kd.set({
                storageKey:
                  (null == (t = e.storage) ? void 0 : t.storageKey) || void 0,
                storagePrefix:
                  (null == (n = e.storage) ? void 0 : n.storagePrefix) ||
                  void 0,
                flushDelay:
                  (null == (r = e.storage) ? void 0 : r.flushDelay) ?? 0,
                isLegacyMode:
                  (null == (a = e.storage) ? void 0 : a.isLegacyMode) ?? !1,
                chunkSize:
                  (null == (o = e.storage) ? void 0 : o.chunkSize) ?? 0,
                shouldCompress:
                  (null == (i = e.storage) ? void 0 : i.shouldCompress) ?? !1,
                indexedDBName:
                  (null == (s = e.storage) ? void 0 : s.indexedDBName) ||
                  void 0,
              }),
              Sd.set({ isAutoSaving: e.isAutoSaving ?? !1 });
          })(t),
          await (async () => {
            var e,
              t,
              n,
              r,
              a,
              o,
              i,
              s,
              l,
              c,
              d,
              u,
              h,
              p,
              m,
              w,
              f,
              v,
              b,
              E,
              _,
              k,
              I,
              S,
              A,
              C,
              T,
              P;
            y("Load famobi.json...");
            const O = await Id("famobi.json");
            if (O && "object" == typeof O) {
              const {
                  gameId: y,
                  gameIdOnPortal: L,
                  name: R,
                  ads: x,
                  features: N,
                  maxLevels: D,
                  scoreTypes: M,
                  analytics: $,
                  auth: V,
                } = g.get(),
                U = Ed.get();
              Ed.set({
                features: { ...U.features, ...O.features },
                maxLevels: O.maxLevels,
                scoreTypes: O.scoreTypes,
                ads: {
                  interstitial: {
                    eventIds:
                      (null ==
                      (t = null == (e = O.ads) ? void 0 : e.interstitial)
                        ? void 0
                        : t.eventIds) || [],
                  },
                  rewarded: {
                    eventIds:
                      (null == (r = null == (n = O.ads) ? void 0 : n.rewarded)
                        ? void 0
                        : r.eventIds) || [],
                  },
                },
                iap: {
                  products: (null == (a = O.iap) ? void 0 : a.products) || [],
                },
                analytics: { ...$, ...O.analytics },
                auth: { ...V, ...O.auth },
              }),
                g.set({
                  gameId: !y && O.gameId ? O.gameId.toString() : void 0,
                  gameIdOnPortal:
                    !L && O.gameIdOnPortal
                      ? O.gameIdOnPortal.toString()
                      : void 0,
                  name: !R && O.name ? O.name.toString() : void 0,
                  version: O.version || void 0,
                  exportedAt: O.exportedAt,
                  ads: {
                    interstitial: {
                      ...x.interstitial,
                      ...(null == (o = O.ads) ? void 0 : o.interstitial),
                    },
                    rewarded: {
                      ...x.rewarded,
                      ...(null == (i = O.ads) ? void 0 : i.rewarded),
                    },
                    forcePreloadOnOrientationChange:
                      (null == (s = O.ads)
                        ? void 0
                        : s.forcePreloadOnOrientationChange) ?? !0,
                    isAutoMuting:
                      (null == (l = O.ads) ? void 0 : l.isAutoMuting) ?? !0,
                    isAutoPausing:
                      (null == (c = O.ads) ? void 0 : c.isAutoPausing) ?? !0,
                    hasBackfillAds:
                      (null == (d = O.ads) ? void 0 : d.hasBackfillAds) ?? !1,
                  },
                  features: { ...N, ...O.features },
                  maxLevels: D ?? O.maxLevels ?? void 0,
                  scoreTypes: M ?? O.scoreTypes ?? void 0,
                  iap: {
                    products: (null == (u = O.iap) ? void 0 : u.products) || [],
                    xsolla: {
                      projectId:
                        (null == (p = null == (h = O.iap) ? void 0 : h.xsolla)
                          ? void 0
                          : p.projectId) || void 0,
                      isSandbox:
                        (null == (w = null == (m = O.iap) ? void 0 : m.xsolla)
                          ? void 0
                          : w.isSandbox) || !1,
                      endpoint:
                        (null == (v = null == (f = O.iap) ? void 0 : f.xsolla)
                          ? void 0
                          : v.endpoint) || void 0,
                    },
                  },
                  auth: { ...V, ...O.auth },
                  analytics: { ...$, ...O.analytics },
                  famobiTracking: {
                    enabled:
                      (null == (b = O.famobiTracking) ? void 0 : b.enabled) ||
                      !1,
                    debug:
                      (null == (E = O.famobiTracking) ? void 0 : E.debug) || !1,
                    version:
                      (null == (_ = O.famobiTracking) ? void 0 : _.version) ||
                      "0",
                  },
                  console: {
                    enabled:
                      (null == (k = O.console) ? void 0 : k.enabled) ?? !0,
                    enforce:
                      (null == (I = O.console) ? void 0 : I.enforce) ?? !0,
                  },
                }),
                _d.set({
                  microsoftStart: O.microsoftStart,
                  glance: O.glance,
                  arkadium: O.arkadium,
                  gameSnacks: O.gameSnacks,
                  upify: O.upify,
                  microsite: O.microsite,
                  famobi: O.famobi,
                }),
                kd.set({
                  flushDelay: null == (S = O.storage) ? void 0 : S.flushDelay,
                  isLegacyMode:
                    null == (A = O.storage) ? void 0 : A.isLegacyMode,
                  chunkSize: null == (C = O.storage) ? void 0 : C.chunkSize,
                  shouldCompress:
                    null == (T = O.storage) ? void 0 : T.shouldCompress,
                  indexedDBName:
                    null == (P = O.storage) ? void 0 : P.indexedDBName,
                });
            } else
              y(
                "A file is missing from the project. This issue might result in unexpected behaviour."
              );
          })(),
          await (async () => {
            var e, t;
            const n = m.get().name;
            if (!["microsoftStart"].includes(n)) return;
            const r = await Id(
                `https://remote-config.famobi.com/${n}/latest.json`
              ),
              a = (null == r ? void 0 : r.config) || {};
            Tu.set({ config: a }),
              "microsoftStart" === n && _d.set({ microsoftStart: a });
            const o = g.get().gameId || "";
            if (!(o in a)) return;
            const i =
              null == (t = null == (e = a[o]) ? void 0 : e.ads)
                ? void 0
                : t.hasBackfillAds;
            "boolean" == typeof i && g.set({ ads: { hasBackfillAds: i } });
          })(),
          (() => {
            y("init url params...");
            const e = new URLSearchParams(window.location.search),
              t = Td(e, "dev");
            g.set({ dev: t });
            const n = Td(e, "sdkLoggingEnabled"),
              r = Td(e, "messageLoggingEnabled");
            p.set({ sdkLoggingEnabled: n, messageLoggingEnabled: r }),
              g.set({ features: { ...g.get().features, ...Pd(e) } }),
              Od(e, g, "gameId", "string"),
              Od(e, g, "locale", "string"),
              Od(e, g, "eventDelay", "number"),
              Od(e, g, "mock", "boolean"),
              Od(e, g, "userId", "string"),
              Od(e, g, "analyticsDebug", "boolean"),
              Od(e, g, "isVerboseLoggingEnabled", "boolean"),
              Od(e, ca, "isMuted", "boolean"),
              Od(e, kd, "storageKey", "string"),
              Od(e, kd, "storagePrefix", "string"),
              Od(e, Sd, "isAutoSaving", "boolean");
          })(),
          ((e = 500) => {
            var t, n;
            g.get().dev || g.get().isVerboseLoggingEnabled
              ? (Pu = Ou = !0)
              : ((Pu = !!(null == (t = g.get().console) ? void 0 : t.enabled)),
                (Ou = !!(null == (n = g.get().console) ? void 0 : n.enforce))),
              Du(),
              null === Lu &&
                ((Lu = setInterval(Du, e)),
                window.addEventListener("beforeunload", () => {
                  Lu && clearInterval(Lu);
                }));
          })(),
          ec();
        const s = (() => {
          var e;
          if (!g.get().shouldMock) return !1;
          const t = m.get().name;
          return (
            g.set({ currentMock: t }), null == (e = ua[t]) || e.call(ua), !0
          );
        })();
        await (async (e = !1) => {
          var t, n, r;
          if (
            ((ou.enabled =
              (null == (t = g.get().famobiTracking) ? void 0 : t.enabled) ??
              ou.enabled),
            (ou.isMocked = e),
            (ou.version =
              (null == (n = g.get().famobiTracking) ? void 0 : n.version) ||
              ou.version),
            (ou.debug =
              (null == (r = g.get().famobiTracking) ? void 0 : r.debug) ??
              ou.debug),
            o.log(`${au} initFamobiTracking() - options:`, JSON.stringify(ou)),
            ou.enabled)
          )
            try {
              await su(), lu();
            } catch (a) {
              o.warn(`${au} Error init:`, a);
            }
          else o.warn(`${au} famobiTracking is disabled! init() was skipped.`);
        })(s),
          n ? await Cu() : await Gd(g.get().files),
          await (null == (a = (r = m.get()).init)
            ? void 0
            : a.call(r, e, t, s)),
          await (async () => {
            const e = Gc.get(),
              t = g.get();
            Object.entries(e.types).forEach(([n]) => {
              var r, a, o;
              const i = n;
              if (null == (r = t.ads[i]) ? void 0 : r.enabled) {
                if ("interstitial" === i) {
                  let n =
                    (null == (a = t.ads[i]) ? void 0 : a.initialCooldown) ||
                    (null == (o = t.ads[i]) ? void 0 : o.cooldown) ||
                    0;
                  (n = n < 1e3 ? 1e3 * n : n),
                    n > 0 &&
                      ((e.types[i].lastCalled = Date.now() - fd(i) + n),
                      Gc.set(e));
                }
                setInterval(() => {
                  sd(i);
                }, 250),
                  ld(i, Fc);
              }
            }),
              t.ads.forcePreloadOnOrientationChange && bd(),
              yd();
          })(),
          await jd(),
          await (async () => {
            if (Ec()) {
              if ((Rc(), !bc)) {
                bc = !0;
                const e = g.get().files.length;
                jc("sdk_init", { files_count: e });
              }
            } else y("Analytics disabled via famobi.json.");
          })(),
          await (async () => {
            y("init gameState..."),
              ca.set({ userMutePref: ca.get().isMuted }),
              document.addEventListener("visibilitychange", () => {
                nd("visibilitychange", [
                  { name: "hidden", value: document.hidden },
                ]);
              });
          })(),
          (e = await $u(e)),
          await Gd(e),
          y("Init completed (", Date.now() - i, "ms )");
      },
      sendPreloadProgress: (e) => {
        var t, n;
        I("sendPreloadProgress", e),
          jc("progress_updated", { progress: e, progress_kind: "preload" }),
          null == (n = (t = m.get()).sendPreloadProgress) || n.call(t, e);
      },
      gameReady: () => {
        var e, t;
        I("gameReady"),
          td("gameReady"),
          null === rc
            ? (ac ||
                (["mousemove", "keydown", "click", "touchstart"].forEach(
                  (e) => {
                    window.addEventListener(e, () => {
                      nc = Date.now();
                    });
                  }
                ),
                (ac = !0)),
              o.log("[intern] Start playtime tracking..."),
              (rc = setInterval(() => {
                const e = "visible" === document.visibilityState,
                  t = Date.now() - nc < 1e4;
                !vd() && e && t && (tc += 500);
              }, 500)))
            : o.log("[intern] Playtime tracking already started!"),
          jc("game_ready"),
          ca.set({ gameReadyAt: Date.now() }),
          null == (t = (e = m.get()).gameReady) || t.call(e);
      },
      gameStart: async (e) => {
        var t, n;
        I("gameStart", e || "endless"),
          td("gameStart", [{ name: "level", value: e }]),
          ca.set({ level: e });
        const r = {};
        "number" == typeof e && (r.level = e),
          jc("game_start", r),
          gu(Cr.LEVEL_START, {
            level:
              "number" == typeof (null == r ? void 0 : r.level) &&
              Number.isInteger(r.level)
                ? r.level
                : void 0,
          }),
          await (null == (n = (t = m.get()).gameStart) ? void 0 : n.call(t, e));
      },
      sendProgress: (e) => {
        var t, n;
        I("sendProgress", e),
          jc(
            "progress_updated",
            { progress: e, progress_kind: "gameplay" },
            { includeLevel: !0 }
          ),
          null == (n = (t = m.get()).sendProgress) || n.call(t, e);
      },
      sendScore: (e, t) => {
        var n, r;
        if ((I("sendScore", e, t || {}), !Number.isInteger(e))) return;
        ca.set({ score: e }), ((t = t || {}).type = t.type || "live");
        const a = { score: e };
        (null == t ? void 0 : t.type) && (a.score_type = t.type),
          jc("score_updated", a, {
            includeLevel: !0,
            level: (null == t ? void 0 : t.level) ?? null,
          }),
          null == (r = (n = m.get()).sendScore) || r.call(n, e, t);
      },
      gameComplete: bu,
      gameOver: yu,
      gameQuit: async () => {
        var e, t;
        I("gameQuit"),
          td("gameQuit"),
          jc(
            "game_end",
            { end_reason: "quit" },
            { includeLevel: !0, includeScore: !0, scoreKey: "score_total" }
          );
        const n = ca.get().level,
          r = "number" == typeof n && Number.isInteger(n) ? n : void 0;
        gu(Cr.LEVEL_END, { level: r }),
          await (null == (t = (e = m.get()).gameQuit) ? void 0 : t.call(e));
      },
      gamePause: async () => {
        var e, t;
        I("gamePause"),
          td("gamePause"),
          jc("game_pause", { pause_reason: "user" }, { includeLevel: !0 }),
          await (null == (t = (e = m.get()).gamePause) ? void 0 : t.call(e));
      },
      gameResume: async () => {
        var e, t;
        I("gameResume"),
          td("gameResume"),
          jc("game_resume", { pause_reason: "user" }, { includeLevel: !0 }),
          await (null == (t = (e = m.get()).gameResume) ? void 0 : t.call(e));
      },
      gameMuted: (e = !0, t = "user") => {
        var n, r;
        I("gameMuted", e),
          jc("audio_mute_changed", { is_muted: e, mute_trigger: t }),
          null == (r = (n = m.get()).gameMuted) || r.call(n, e);
      },
      showInterstitialAd: od,
      showRewardedAd: async (e) => {
        I("showRewardedAd", e);
        return {
          isRewardGranted: !!(await ud("rewarded", e, "reward"))
            .isRewardGranted,
        };
      },
      onGoToHome: (e) => {
        var t, n;
        I("onGoToHome"),
          null == (n = (t = m.get()).onGoToHome) || n.call(t, e),
          Zc("onGoToHome", e);
      },
      onGoToNextLevel: (e) => {
        var t, n;
        I("onGoToNextLevel"),
          null == (n = (t = m.get()).onGoToNextLevel) || n.call(t, e),
          Zc("onGoToNextLevel", e);
      },
      onGoToLevel: (e) => {
        var t, n;
        I("onGoToLevel"),
          null == (n = (t = m.get()).onGoToLevel) || n.call(t, e),
          Zc("onGoToLevel", e);
      },
      onRestartGame: (e) => {
        var t, n;
        I("onRestartGame"),
          null == (n = (t = m.get()).onRestartGame) || n.call(t, e),
          Zc("onRestartGame", e);
      },
      onQuitGame: (e) => {
        var t, n;
        I("onQuitGame"),
          null == (n = (t = m.get()).onQuitGame) || n.call(t, e),
          Zc("onQuitGame", e);
      },
      onGameOver: (e) => {
        var t, n;
        I("onGameOver"),
          null == (n = (t = m.get()).onGameOver) || n.call(t, e),
          Zc("onGameOver", e);
      },
      onAudioStateChange: (e) => {
        var t, n;
        I("onAudioStateChange"),
          null == (n = (t = m.get()).onAudioStateChange) || n.call(t, e),
          Zc("onAudioStateChange", e);
      },
      onMuteStateChange: (e) => {
        var t, n;
        I("onMuteStateChange"),
          null == (n = (t = m.get()).onMuteStateChange) || n.call(t, e),
          Zc("onMuteStateChange", e);
      },
      onPauseStateChange: (e) => {
        var t, n;
        I("onPauseStateChange"),
          null == (n = (t = m.get()).onPauseStateChange) || n.call(t, e),
          Zc("onPauseStateChange", e);
      },
      onRewardedAdAvailabilityChange: async (e) => {
        var t, n;
        I("onRewardedAdAvailabilityChange"),
          null == (n = (t = m.get()).onRewardedAdAvailabilityChange) ||
            n.call(t, e),
          ((e) => {
            Gc.set({ callbacks: { onRewardedAdAvailabilityChange: e } }),
              sd("rewarded", !0);
          })(e);
      },
      onInterstitialAdAvailabilityChange: async (e) => {
        var t, n;
        I("onInterstitialAdAvailabilityChange"),
          null == (n = (t = m.get()).onInterstitialAdAvailabilityChange) ||
            n.call(t, e),
          ((e) => {
            Gc.set({ callbacks: { onInterstitialAdAvailabilityChange: e } }),
              sd("interstitial", !0);
          })(e);
      },
      onOffsetChange: async (e) => {
        var t, n;
        I("onOffsetChange"),
          null == (n = (t = m.get()).onOffsetChange) || n.call(t, e),
          Gc.set({ callbacks: { onOffsetChange: e } }),
          null == e || e(Gc.get().offsets);
      },
      isMuted: () => {
        var e, t;
        return (
          I("isMuted"),
          (null == (t = (e = m.get()).isMuted) ? void 0 : t.call(e)) ??
            ca.get().isMuted
        );
      },
      isPaused: () => {
        var e, t;
        return (
          I("isPaused"),
          (null == (t = (e = m.get()).isPaused) ? void 0 : t.call(e)) ||
            ca.get().isPaused
        );
      },
      hasFeature: Uu,
      hasRewardedAd: async (e) => {
        var t, n;
        const r = pd("rewarded", e),
          a =
            (await (null == (n = (t = m.get()).hasRewardedAd)
              ? void 0
              : n.call(t, e))) ?? !0,
          o = r && a;
        return I(`hasRewardedAd('${e}') -> ${o}`), o;
      },
      isInterstitialAdAvailable: rd,
      isRewardedAdAvailable: (e) => {
        var t, n;
        const r = pd("rewarded", e),
          a =
            (null == (n = (t = m.get()).isRewardedAdAvailable)
              ? void 0
              : n.call(t, e)) ?? !0,
          o = r && a;
        return _(`isRewardedAdAvailable('${e}') -> ${o}`), o;
      },
      getOffsets: () => {
        var e, t;
        return (
          (null == (t = (e = m.get()).getOffsets) ? void 0 : t.call(e)) ||
          Gc.get().offsets
        );
      },
      getCurrentLanguage: () => {
        var e, t, n;
        return (
          I("getCurrentLanguage"),
          (null == (t = (e = m.get()).getCurrentLanguage)
            ? void 0
            : t.call(e)) ||
            g.get().locale ||
            (null == (n = navigator.language) ? void 0 : n.slice(0, 2)) ||
            "en"
        );
      },
      getCopyrightLogoURL: (e = "xlarge", t = "dark") => {
        I("getCopyrightLogoURL", e, t);
        const n = t + "_" + e,
          r = {
            dark_small: Eu("copyright-dark-64.png"),
            dark_medium: Eu("copyright-dark-128.png"),
            dark_large: Eu("copyright-dark-256.png"),
            dark_xlarge: Eu("copyright-dark-512.png"),
            light_small: Eu("copyright-light-64.png"),
            light_medium: Eu("copyright-light-128.png"),
            light_large: Eu("copyright-light-256.png"),
            light_xlarge: Eu("copyright-light-512.png"),
            default: Eu("copyright-light-1024.png"),
          };
        return r[n] ?? r.default;
      },
      storage: {
        getItem: (e) => (
          I("getItem", e),
          ((e) => {
            const {
              storagePrefix: t = "famobi",
              isLegacyMode: n,
              savegame: r,
            } = kd.get();
            if ((y(`${n ? "[legacy]" : ""} storage.getItem: ${e}`), n)) {
              const n = `${t}:${e}`;
              try {
                return window.localStorage.getItem(n);
              } catch {
                return null;
              }
            }
            if (!e) return r;
            const a = r[e];
            return void 0 === a ? null : a;
          })(e)
        ),
        setItem: (e, t) => {
          I("setItem", e, t),
            ((e, t) => {
              const {
                storagePrefix: n = "famobi",
                isLegacyMode: r,
                savegame: a,
              } = kd.get();
              if ((y(`${r ? "[legacy]" : ""} storage.setItem: ${e}`), r)) {
                const r = `${n}:${e}`;
                try {
                  window.localStorage.setItem(r, String(t));
                } catch {}
                return;
              }
              a[e] !== t &&
                ((a[e] = t),
                kd.set({ savegame: a }),
                y(`make dirty and setItem: ${e}`, a),
                Ud());
            })(e, t);
        },
        removeItem: (e) => {
          I("removeItem", e),
            ((e) => {
              const {
                storagePrefix: t = "famobi",
                isLegacyMode: n,
                savegame: r,
              } = kd.get();
              if ((y(`${n ? "[legacy]" : ""} storage.removeItem: ${e}`), n)) {
                const n = `${t}:${e}`;
                try {
                  window.localStorage.removeItem(n);
                } catch {}
                return;
              }
              Object.prototype.hasOwnProperty.call(r, e) &&
                (delete r[e],
                kd.set({ savegame: r }, { mode: "override" }),
                y(`make dirty and removeItem: ${e}`),
                Ud());
            })(e);
        },
        clear: () => {
          I("clear"),
            (() => {
              const { storagePrefix: e = "famobi", isLegacyMode: t } = kd.get();
              if ((y((t ? "[legacy]" : "") + " storage.clear"), t)) {
                const t = `${e}:`;
                for (const e in window.localStorage)
                  if (e.startsWith(t))
                    try {
                      window.localStorage.removeItem(e);
                    } catch {}
                return;
              }
              kd.set({ savegame: {} }, { mode: "override" }),
                y("make dirty and clear"),
                Ud();
            })();
        },
        redeemCode: async (e, t) => {
          var n, r;
          I("storage.redeemCode", e, JSON.stringify(t || {})),
            await (null ==
            (r = null == (n = m.get().storage) ? void 0 : n.redeemCode)
              ? void 0
              : r.call(n, e, t));
        },
      },
      iap: {
        getProducts: async () => {
          var e, t;
          I("iap.getProducts");
          let n = [];
          return (null == Uu ? void 0 : Uu("iap"))
            ? ((n =
                (await (null ==
                (t = null == (e = m.get().iap) ? void 0 : e.getProducts)
                  ? void 0
                  : t.call(e))) || n),
              n)
            : n;
        },
        buyProduct: async (e, t) => {
          var n, r;
          (null == Uu ? void 0 : Uu("iap")) &&
            (await (null ==
            (r = null == (n = m.get().iap) ? void 0 : n.buyProduct)
              ? void 0
              : r.call(n, e, t)));
        },
        consumeProduct: async (e) => {
          var t, n;
          (null == Uu ? void 0 : Uu("iap")) &&
            (await (null ==
            (n = null == (t = m.get().iap) ? void 0 : t.consumeProduct)
              ? void 0
              : n.call(t, e)));
        },
        onEvent: (e) => {
          var t, n;
          if (!(null == Uu ? void 0 : Uu("iap"))) return;
          const r = (t) => {
            var n, r, a;
            const o = "PURCHASE_SUCCESS_EVENT" === t.type ? "success" : "fail",
              i =
                (null == (n = t.detail) ? void 0 : n.sku) ||
                (null == (a = null == (r = t.detail) ? void 0 : r.purchase)
                  ? void 0
                  : a.sku),
              s = { iap_result: o };
            i && (s.sku = i), jc("iap_purchase_result", s), e(t);
          };
          ca.set({ callbacks: { ...ca.get().callbacks, onIAPEvent: r } }),
            null == (n = null == (t = m.get().iap) ? void 0 : t.onEvent) ||
              n.call(t, r);
        },
      },
      track: ad,
      log: (...e) =>
        ((...e) => {
          p.get().loggingEnabled && b("log", ...e);
        })(...e),
      enableLogging: (e = { loggingEnabled: !p.get().loggingEnabled }) => {
        ((e = !0, t = !0) => {
          (Pu = !!e), (Ou = !!t), Du(!0);
        })(!0),
          p.set({ ...e });
      },
      getInfo: (e = "all") => {
        const t = Date.now(),
          n = Gc.get(),
          r = g.get(),
          a = Object.fromEntries(
            Object.keys(n.types).map((e) => {
              var a, o;
              if ("banner" === e || "preroll" === e) return [];
              const i = n.types[e],
                s =
                  (null == (o = null == (a = r.ads) ? void 0 : a[e])
                    ? void 0
                    : o.cooldown) ?? 0,
                l = i.lastCalled ?? 0;
              return [
                e,
                {
                  ...i,
                  isReady: pd(e, ""),
                  cooledDown: md(e, !0),
                  passiveCooledDown: gd(e, !0),
                  cooldownRemaining: Math.max(
                    0,
                    (s < 1e3 ? 1e3 * s : s) - (t - l)
                  ),
                },
              ];
            })
          ),
          o = Object.fromEntries(
            Object.keys(r.features).map((e) => [e, Uu(e)])
          ),
          i = {
            settings: Bu(g.get()),
            sdk: Bu(m.get()),
            ads: Bu({ ...n, types: a }),
            game: Bu(ca.get()),
            console: Bu(p.get()),
            scoring: Bu(Sd.get()),
            storage: Bu(kd.get()),
            portal: Bu(_d.get()),
            features: o,
          };
        return "all" !== e && e ? i[e] : i;
      },
      getConfig: (e) => {
        var t, n;
        return (
          I("getConfig", e),
          null == (n = (t = m.get()).getConfig) ? void 0 : n.call(t, e)
        );
      },
      getVersionInfo: () => {
        const {
          version: e = "Version missing in famobi.json",
          exportedAt: t = "Export Timestamp missing in famobi.json",
        } = g.get();
        return { version: e, exportedAt: t };
      },
      getSDKName: Mu,
      addEventListener: (e, t) => (
        I(`addEventListener('${e}')`),
        ((e, t) => (
          o.log(`[events] addEventListener('${e}')`),
          ju[e] || (ju[e] = []),
          ju[e].push(t),
          () => Gu(e, t)
        ))(e, t)
      ),
      removeEventListener: (e, t) => {
        I(`removeEventListener('${e}')`), Gu(e, t);
      },
      clearEventListener: (e) => {
        I(`clearEventListener('${e}')`),
          ((e) => {
            o.log(`[events] clearEventListener(${e ? `'${e}'` : ""})`),
              void 0 !== e ? delete ju[e] : (ju = {});
          })(e);
      },
      sendEvent: async (e, t) => {
        var n, r;
        return (
          I("sendEvent"),
          (await (null == (r = (n = m.get()).sendEvent)
            ? void 0
            : r.call(n, e, t))) ?? (await Hu(e, t))
        );
      },
      stageStart: async (e) => {
        var t, n;
        I(`stageStart(${e})`),
          td("stageStart", [{ name: "stage", value: e }]),
          ca.set({ stage: e });
        const r = {};
        "number" == typeof e && (r.stage = e),
          jc("stage_start", r, {}),
          await (null == (n = (t = m.get()).stageStart)
            ? void 0
            : n.call(t, e));
      },
      stageComplete: async () => {
        var e, t;
        I("stageComplete"),
          td("stageComplete"),
          jc("stage_end", { end_reason: "complete" }, { includeStage: !0 }),
          await (null == (t = (e = m.get()).stageComplete)
            ? void 0
            : t.call(e));
      },
      stageOver: async () => {
        var e, t;
        I("stageOver"),
          td("stageOver"),
          jc("stage_end", { end_reason: "over" }, { includeStage: !0 }),
          await (null == (t = (e = m.get()).stageOver) ? void 0 : t.call(e));
      },
      stageQuit: async () => {
        var e, t;
        I("stageQuit"),
          td("stageQuit"),
          jc("stage_end", { end_reason: "quit" }, { includeStage: !0 }),
          await (null == (t = (e = m.get()).stageQuit) ? void 0 : t.call(e));
      },
    },
    zu = async (e) => {
      var t, n;
      let r = !1;
      return (
        null == (n = null == (t = window.CrazyGames) ? void 0 : t.SDK)
          ? void 0
          : n.ad
      )
        ? new Promise((t) => {
            var n, a, i, s;
            const l = {
              adFinished: () => {
                o.log(`[portal] requestAd('${e}') -> adFinished`),
                  Qc(!1, !0),
                  ed(!1, !0),
                  "rewarded" === e && (r = !0),
                  t({ isRewardGranted: r });
              },
              adError: (n) => {
                o.log(`[portal] requestAd('${e}') -> adError`, n),
                  Qc(!1, !0),
                  ed(!1, !0),
                  t({ isRewardGranted: r });
              },
              adStarted: () => {
                o.log(`[portal] requestAd('${e}') -> adStarted`),
                  Qc(!0, !0),
                  ed(!0, !0);
              },
            };
            null ==
              (s =
                null ==
                (i =
                  null == (a = null == (n = window.CrazyGames) ? void 0 : n.SDK)
                    ? void 0
                    : a.ad)
                  ? void 0
                  : i.requestAd) || s.call(i, e, l);
          })
        : { isRewardGranted: r };
    };
  var Wu;
  (Wu = {
    name: "crazyGames",
    init: async (t, n, r) => {
      var a, o;
      if ((r || (await Gd([e])), void 0 !== window.CrazyGames)) {
        window.addEventListener("wheel", (e) => e.preventDefault(), {
          passive: !1,
        }),
          window.addEventListener("keydown", (e) => {
            ["ArrowUp", "ArrowDown", " "].includes(e.key) && e.preventDefault();
          });
        try {
          await window.CrazyGames.SDK.init(),
            _("Crazygames SDK init complete"),
            window.CrazyGames.SDK.game.loadingStart();
        } catch (i) {
          _("CrazyGames SDK init error:", i);
        }
        null == (o = null == (a = window.CrazyGames) ? void 0 : a.SDK) ||
          o.game.addSettingsChangeListener((e) => {
            Qc(e.muteAudio, !1);
          });
      } else _("CrazyGames SDK not found");
    },
    storage: {
      async getItem(e) {
        var t, n, r, a;
        return e
          ? await (null ==
            (a =
              null ==
              (r =
                null == (n = null == (t = window.CrazyGames) ? void 0 : t.SDK)
                  ? void 0
                  : n.data)
                ? void 0
                : r.getItem)
              ? void 0
              : a.call(r, e))
          : null;
      },
      async setItem(e, t) {
        var n, r, a, o;
        await (null ==
        (o =
          null ==
          (a =
            null == (r = null == (n = window.CrazyGames) ? void 0 : n.SDK)
              ? void 0
              : r.data)
            ? void 0
            : a.setItem)
          ? void 0
          : o.call(a, e, t));
      },
      async removeItem(e) {
        var t, n, r, a;
        null ==
          (a =
            null ==
            (r =
              null == (n = null == (t = window.CrazyGames) ? void 0 : t.SDK)
                ? void 0
                : n.data)
              ? void 0
              : r.removeItem) || a.call(r, e);
      },
      async clear() {
        var e, t, n, r;
        null ==
          (r =
            null ==
            (n =
              null == (t = null == (e = window.CrazyGames) ? void 0 : e.SDK)
                ? void 0
                : t.data)
              ? void 0
              : n.clear) || r.call(n);
      },
    },
    async gameStart() {
      var e, t, n, r;
      null ==
        (r =
          null ==
          (n =
            null == (t = null == (e = window.CrazyGames) ? void 0 : e.SDK)
              ? void 0
              : t.game)
            ? void 0
            : n.gameplayStart) || r.call(n);
    },
    gameReady() {
      var e, t, n, r, a, o, i;
      Qc(
        !!(null ==
        (n =
          null == (t = null == (e = window.CrazyGames) ? void 0 : e.SDK)
            ? void 0
            : t.game)
          ? void 0
          : n.settings.muteAudio),
        !1
      ),
        null ==
          (i =
            null ==
            (o =
              null == (a = null == (r = window.CrazyGames) ? void 0 : r.SDK)
                ? void 0
                : a.game)
              ? void 0
              : o.loadingStop) || i.call(o);
    },
    async gameOver() {
      var e, t, n, r;
      null ==
        (r =
          null ==
          (n =
            null == (t = null == (e = window.CrazyGames) ? void 0 : e.SDK)
              ? void 0
              : t.game)
            ? void 0
            : n.gameplayStop) || r.call(n);
    },
    async gameComplete() {
      var e, t, n, r, a, o, i, s;
      null ==
        (r =
          null ==
          (n =
            null == (t = null == (e = window.CrazyGames) ? void 0 : e.SDK)
              ? void 0
              : t.game)
            ? void 0
            : n.happytime) || r.call(n),
        null ==
          (s =
            null ==
            (i =
              null == (o = null == (a = window.CrazyGames) ? void 0 : a.SDK)
                ? void 0
                : o.game)
              ? void 0
              : i.gameplayStop) || s.call(i);
    },
    async gameQuit() {
      var e, t, n, r;
      null ==
        (r =
          null ==
          (n =
            null == (t = null == (e = window.CrazyGames) ? void 0 : e.SDK)
              ? void 0
              : t.game)
            ? void 0
            : n.gameplayStop) || r.call(n);
    },
    async gamePause() {
      var e, t, n, r;
      null ==
        (r =
          null ==
          (n =
            null == (t = null == (e = window.CrazyGames) ? void 0 : e.SDK)
              ? void 0
              : t.game)
            ? void 0
            : n.gameplayStop) || r.call(n);
    },
    async gameResume() {
      var e, t, n, r;
      null ==
        (r =
          null ==
          (n =
            null == (t = null == (e = window.CrazyGames) ? void 0 : e.SDK)
              ? void 0
              : t.game)
            ? void 0
            : n.gameplayStart) || r.call(n);
    },
    async showInterstitialAd() {
      await zu("midgame");
    },
    async showRewardedAd() {
      const { isRewardGranted: e } = await zu("rewarded");
      return { isRewardGranted: e };
    },
    async hasRewardedAd() {
      var e, t;
      const n =
        null == (t = null == (e = window.CrazyGames) ? void 0 : e.SDK)
          ? void 0
          : t.environment;
      return !(!n || !["crazygames", "local"].includes(n));
    },
    isRewardedAdAvailable() {
      var e, t;
      const n =
        null == (t = null == (e = window.CrazyGames) ? void 0 : e.SDK)
          ? void 0
          : t.environment;
      return !(!n || !["crazygames", "local"].includes(n));
    },
  }),
    m.set({ ...Wu }),
    (window.gameInterface = { ...Wu, ...Fu }),
    window.gameInterface && (window.GameInterface = window.gameInterface);
})();
