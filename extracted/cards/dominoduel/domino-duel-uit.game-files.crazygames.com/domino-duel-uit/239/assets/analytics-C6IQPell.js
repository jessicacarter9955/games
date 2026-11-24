var nB = Object.defineProperty;
var sB = (A, e, t) =>
  e in A
    ? nB(A, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (A[e] = t);
var lA = (A, e, t) => sB(A, typeof e != "symbol" ? e + "" : e, t);
function oB(A, e) {
  for (var t = 0; t < e.length; t++) {
    const r = e[t];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const n in r)
        if (n !== "default" && !(n in A)) {
          const s = Object.getOwnPropertyDescriptor(r, n);
          s &&
            Object.defineProperty(
              A,
              n,
              s.get ? s : { enumerable: !0, get: () => r[n] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(A, Symbol.toStringTag, { value: "Module" })
  );
}
let is = !1;
const as = new Map(),
  me = () => {
    if (typeof window < "u")
      for (const [A, e] of new URLSearchParams(window.location.search))
        A.startsWith("AB_") &&
          e !== "" &&
          ((is = !0), as.has(A) || as.set(A, e));
    return is;
  };
me();
const pr = {
  BASE_URL: "./",
  DEV: !1,
  MODE: "production",
  PROD: !0,
  REACT_APP_ARENA_MODE_ENABLED: "true",
  REACT_APP_BUILD_FOR_PLAYGAMA: "false",
  REACT_APP_BUILD_TIME: "20.11.26 15:30",
  REACT_APP_GAME: "domino",
  REACT_APP_GAME_VERSION: "20.11.26",
  REACT_APP_STRICT_RELEASE_IDENTITY: "true",
  SSR: !1,
};
var ce;
(function (A) {
  (A.GAME = "REACT_APP_GAME"),
    (A.BUILD_FOR_POKI = "REACT_APP_BUILD_FOR_POKI"),
    (A.BUILD_FOR_PLAYGAMA = "REACT_APP_BUILD_FOR_PLAYGAMA"),
    (A.BUILD_WITH_LOGS = "REACT_APP_BUILD_WITH_LOGS"),
    (A.PLATFORM_TYPE = "REACT_APP_PLATFORM_TYPE"),
    (A.CLIENT_ONLY = "REACT_APP_CLIENT_ONLY"),
    (A.FOREIGN_HOSTS = "REACT_APP_FOREIGN_HOSTS");
})(ce || (ce = {}));
const an = () => "domino",
  rt = (A) => {
    const e = (pr == null ? void 0 : pr[A]) ?? "";
    return [!0, 1, "true", "TRUE", "True"].includes(e);
  },
  Pd = () => !1,
  iB = () => !1,
  le = () => rt(ce.BUILD_FOR_POKI),
  Ie = () => rt(ce.BUILD_FOR_PLAYGAMA),
  zo = () => rt(ce.BUILD_WITH_LOGS),
  nt = () => rt(ce.CLIENT_ONLY),
  $o = () => rt(ce.FOREIGN_HOSTS),
  aB = 93916599;
let Bs = !1;
const Er = window,
  BB = () => {
    if (!(Bs || iB() || me() || Ie() || le() || nt() || $o())) {
      Bs = !0;
      try {
        if (!Er.ym) {
          const A = function (...e) {
            A.a.push(e);
          };
          (A.a = []), (A.l = Date.now()), (Er.ym = A);
        }
        if (
          (Er.ym(aB, "init", {
            clickmap: !0,
            trackLinks: !0,
            accurateTrackBounce: !0,
            webvisor: !0,
            ecommerce: "ecommerceLayer",
          }),
          !document.querySelector("script[data-board-metrika]"))
        ) {
          const A = document.createElement("script");
          (A.async = !0),
            (A.dataset.boardMetrika = "true"),
            (A.src = "https://mc.yandex.ru/metrika/tag.js"),
            document.head.append(A);
        }
      } catch {}
    }
  },
  cB = (A) => !1,
  mr = () => ({}),
  cs = (A, e) => {
    if (!me()) return e(A);
  };
var _A;
(function (A) {
  (A.IOS = "ios"),
    (A.Android = "android"),
    (A.WinPhone = "win-phone"),
    (A.MacOs = "mac"),
    (A.Windows = "windows"),
    (A.Linux = "linux"),
    (A.Unknown = "unknown");
})(_A || (_A = {}));
var KA;
(function (A) {
  (A.tablet = "Tablet(Yandex)"),
    (A.tv = "TV"),
    (A.mobile = "Mobile"),
    (A.android = "Android"),
    (A.Ios = "IOS"),
    (A.desktop = "Desktop");
})(KA || (KA = {}));
var v;
(function (A) {
  (A.POKI = "POKI"),
    (A.NONE = "NONE"),
    (A.CRAZY_GAMES = "CRAZY_GAMES"),
    (A.GAME_DISTRIBUTION = "GAME_DISTRIBUTION"),
    (A.GAME_MONETIZE = "GAME_MONETIZE"),
    (A.OK = "OK"),
    (A.SMART_MARKET = "SMARTMARKET"),
    (A.VK = "VK"),
    (A.YANDEX = "YANDEX"),
    (A.GAME_PIX = "GAMEPIX"),
    (A.Y8 = "Y8"),
    (A.COOLMATH = "COOLMATH"),
    (A.WEB = "CUSTOM"),
    (A.PARTNER = "PARTNER"),
    (A.VK_PLAY = "VK_PLAY"),
    (A.PLAY_DECK = "PLAYDECK"),
    (A.TELEGRAM = "TELEGRAM"),
    (A.WG_PLAYGROUND = "WG_PLAYGROUND"),
    (A.KONGREGATE = "KONGREGATE"),
    (A.BEELINE = "BEELINE"),
    (A.FOTOSTRANA = "FOTOSTRANA"),
    (A.CUSTOM = "CUSTOM"),
    (A.PLAYGAMA = "PLAYGAMA"),
    (A.ANDROID = "ANDROID"),
    (A.GOOGLE_PLAY = "GOOGLE_PLAY"),
    (A.APP_GALLERY = "APP_GALLERY"),
    (A.GALAXY_STORE = "GALAXY_STORE"),
    (A.ONE_STORE = "ONE_STORE"),
    (A.AMAZON_APPSTORE = "AMAZON_APPSTORE"),
    (A.XIAOMI_GET_APPS = "XIAOMI_GETAPPS"),
    (A.AP_TO_IDE = "APTOIDE"),
    (A.RU_STORE = "RUSTORE"),
    (A.CUSTOM_MINIPLAY = "CUSTOM/MINIPLAY"),
    (A.CUSTOM_JOGOS = "CUSTOM/JOGOS"),
    (A.UNKNOWN = "UNKNOWN");
})(v || (v = {}));
var TA;
(function (A) {
  (A.MINIPLAY = "MINIPLAY"), (A.JOGOS = "JOGOS"), (A.UNKNOWN = "UNKNOWN");
})(TA || (TA = {}));
const uB = (A) => {
  const e = new URLSearchParams(A),
    t = e.get("_platform") ?? e.get("platform"),
    r = t == null ? void 0 : t.trim().toUpperCase();
  return Object.values(v).find((n) => n === r);
};
class Vt {
  constructor() {
    lA(this, "length", 0);
    lA(this, "store", {});
  }
  clear() {
    this.store = {};
  }
  getItem(e) {
    return this.store[e] || null;
  }
  key(e) {
    return this.store[Object.keys(this.store)[e]] || null;
  }
  setItem(e, t) {
    this.store[e] = String(t);
  }
  removeItem(e) {
    delete this.store[e];
  }
}
let Tt, Ot;
try {
  if (typeof window < "u" && window.localStorage) {
    const A = "__test_storage__";
    window.localStorage.setItem(A, "1"),
      window.localStorage.removeItem(A),
      (Tt = window.localStorage);
  } else Tt = new Vt();
} catch {
  Tt = new Vt();
}
try {
  if (typeof window < "u" && window.sessionStorage) {
    const A = "__test_storage__";
    window.sessionStorage.setItem(A, "1"),
      window.sessionStorage.removeItem(A),
      (Ot = window.sessionStorage);
  } else Ot = new Vt();
} catch {
  Ot = new Vt();
}
const oA = Tt,
  Vd = Ot,
  lB = (A, e) => {
    oA.getItem(A) !== e && oA.setItem(A, e);
  };
var Xd =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function fB(A) {
  return A && A.__esModule && Object.prototype.hasOwnProperty.call(A, "default")
    ? A.default
    : A;
}
var vr = { exports: {} },
  T = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var us;
function gB() {
  if (us) return T;
  us = 1;
  var A = Symbol.for("react.transitional.element"),
    e = Symbol.for("react.portal"),
    t = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    n = Symbol.for("react.profiler"),
    s = Symbol.for("react.consumer"),
    o = Symbol.for("react.context"),
    i = Symbol.for("react.forward_ref"),
    a = Symbol.for("react.suspense"),
    B = Symbol.for("react.memo"),
    c = Symbol.for("react.lazy"),
    u = Symbol.for("react.activity"),
    f = Symbol.iterator;
  function C(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (f && l[f]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var g = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Q = Object.assign,
    w = {};
  function U(l, p, b) {
    (this.props = l),
      (this.context = p),
      (this.refs = w),
      (this.updater = b || g);
  }
  (U.prototype.isReactComponent = {}),
    (U.prototype.setState = function (l, p) {
      if (typeof l != "object" && typeof l != "function" && l != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, l, p, "setState");
    }),
    (U.prototype.forceUpdate = function (l) {
      this.updater.enqueueForceUpdate(this, l, "forceUpdate");
    });
  function h() {}
  h.prototype = U.prototype;
  function m(l, p, b) {
    (this.props = l),
      (this.context = p),
      (this.refs = w),
      (this.updater = b || g);
  }
  var L = (m.prototype = new h());
  (L.constructor = m), Q(L, U.prototype), (L.isPureReactComponent = !0);
  var y = Array.isArray;
  function F() {}
  var E = { H: null, A: null, T: null, S: null },
    K = Object.prototype.hasOwnProperty;
  function S(l, p, b) {
    var _ = b.ref;
    return {
      $$typeof: A,
      type: l,
      key: p,
      ref: _ !== void 0 ? _ : null,
      props: b,
    };
  }
  function N(l, p) {
    return S(l.type, p, l.props);
  }
  function W(l) {
    return typeof l == "object" && l !== null && l.$$typeof === A;
  }
  function Z(l) {
    var p = { "=": "=0", ":": "=2" };
    return (
      "$" +
      l.replace(/[=:]/g, function (b) {
        return p[b];
      })
    );
  }
  var x = /\/+/g;
  function X(l, p) {
    return typeof l == "object" && l !== null && l.key != null
      ? Z("" + l.key)
      : p.toString(36);
  }
  function yA(l) {
    switch (l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw l.reason;
      default:
        switch (
          (typeof l.status == "string"
            ? l.then(F, F)
            : ((l.status = "pending"),
              l.then(
                function (p) {
                  l.status === "pending" &&
                    ((l.status = "fulfilled"), (l.value = p));
                },
                function (p) {
                  l.status === "pending" &&
                    ((l.status = "rejected"), (l.reason = p));
                }
              )),
          l.status)
        ) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw l.reason;
        }
    }
    throw l;
  }
  function j(l, p, b, _, D) {
    var M = typeof l;
    (M === "undefined" || M === "boolean") && (l = null);
    var G = !1;
    if (l === null) G = !0;
    else
      switch (M) {
        case "bigint":
        case "string":
        case "number":
          G = !0;
          break;
        case "object":
          switch (l.$$typeof) {
            case A:
            case e:
              G = !0;
              break;
            case c:
              return (G = l._init), j(G(l._payload), p, b, _, D);
          }
      }
    if (G)
      return (
        (D = D(l)),
        (G = _ === "" ? "." + X(l, 0) : _),
        y(D)
          ? ((b = ""),
            G != null && (b = G.replace(x, "$&/") + "/"),
            j(D, p, b, "", function (rB) {
              return rB;
            }))
          : D != null &&
            (W(D) &&
              (D = N(
                D,
                b +
                  (D.key == null || (l && l.key === D.key)
                    ? ""
                    : ("" + D.key).replace(x, "$&/") + "/") +
                  G
              )),
            p.push(D)),
        1
      );
    G = 0;
    var SA = _ === "" ? "." : _ + ":";
    if (y(l))
      for (var uA = 0; uA < l.length; uA++)
        (_ = l[uA]), (M = SA + X(_, uA)), (G += j(_, p, b, M, D));
    else if (((uA = C(l)), typeof uA == "function"))
      for (l = uA.call(l), uA = 0; !(_ = l.next()).done; )
        (_ = _.value), (M = SA + X(_, uA++)), (G += j(_, p, b, M, D));
    else if (M === "object") {
      if (typeof l.then == "function") return j(yA(l), p, b, _, D);
      throw (
        ((p = String(l)),
        Error(
          "Objects are not valid as a React child (found: " +
            (p === "[object Object]"
              ? "object with keys {" + Object.keys(l).join(", ") + "}"
              : p) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return G;
  }
  function eA(l, p, b) {
    if (l == null) return l;
    var _ = [],
      D = 0;
    return (
      j(l, _, "", "", function (M) {
        return p.call(b, M, D++);
      }),
      _
    );
  }
  function RA(l) {
    if (l._status === -1) {
      var p = l._result;
      (p = p()),
        p.then(
          function (b) {
            (l._status === 0 || l._status === -1) &&
              ((l._status = 1), (l._result = b));
          },
          function (b) {
            (l._status === 0 || l._status === -1) &&
              ((l._status = 2), (l._result = b));
          }
        ),
        l._status === -1 && ((l._status = 0), (l._result = p));
    }
    if (l._status === 1) return l._result.default;
    throw l._result;
  }
  var QA =
      typeof reportError == "function"
        ? reportError
        : function (l) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var p = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof l == "object" &&
                  l !== null &&
                  typeof l.message == "string"
                    ? String(l.message)
                    : String(l),
                error: l,
              });
              if (!window.dispatchEvent(p)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", l);
              return;
            }
            console.error(l);
          },
    LA = {
      map: eA,
      forEach: function (l, p, b) {
        eA(
          l,
          function () {
            p.apply(this, arguments);
          },
          b
        );
      },
      count: function (l) {
        var p = 0;
        return (
          eA(l, function () {
            p++;
          }),
          p
        );
      },
      toArray: function (l) {
        return (
          eA(l, function (p) {
            return p;
          }) || []
        );
      },
      only: function (l) {
        if (!W(l))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return l;
      },
    };
  return (
    (T.Activity = u),
    (T.Children = LA),
    (T.Component = U),
    (T.Fragment = t),
    (T.Profiler = n),
    (T.PureComponent = m),
    (T.StrictMode = r),
    (T.Suspense = a),
    (T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = E),
    (T.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (l) {
        return E.H.useMemoCache(l);
      },
    }),
    (T.cache = function (l) {
      return function () {
        return l.apply(null, arguments);
      };
    }),
    (T.cacheSignal = function () {
      return null;
    }),
    (T.cloneElement = function (l, p, b) {
      if (l == null)
        throw Error(
          "The argument must be a React element, but you passed " + l + "."
        );
      var _ = Q({}, l.props),
        D = l.key;
      if (p != null)
        for (M in (p.key !== void 0 && (D = "" + p.key), p))
          !K.call(p, M) ||
            M === "key" ||
            M === "__self" ||
            M === "__source" ||
            (M === "ref" && p.ref === void 0) ||
            (_[M] = p[M]);
      var M = arguments.length - 2;
      if (M === 1) _.children = b;
      else if (1 < M) {
        for (var G = Array(M), SA = 0; SA < M; SA++) G[SA] = arguments[SA + 2];
        _.children = G;
      }
      return S(l.type, D, _);
    }),
    (T.createContext = function (l) {
      return (
        (l = {
          $$typeof: o,
          _currentValue: l,
          _currentValue2: l,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (l.Provider = l),
        (l.Consumer = { $$typeof: s, _context: l }),
        l
      );
    }),
    (T.createElement = function (l, p, b) {
      var _,
        D = {},
        M = null;
      if (p != null)
        for (_ in (p.key !== void 0 && (M = "" + p.key), p))
          K.call(p, _) &&
            _ !== "key" &&
            _ !== "__self" &&
            _ !== "__source" &&
            (D[_] = p[_]);
      var G = arguments.length - 2;
      if (G === 1) D.children = b;
      else if (1 < G) {
        for (var SA = Array(G), uA = 0; uA < G; uA++)
          SA[uA] = arguments[uA + 2];
        D.children = SA;
      }
      if (l && l.defaultProps)
        for (_ in ((G = l.defaultProps), G)) D[_] === void 0 && (D[_] = G[_]);
      return S(l, M, D);
    }),
    (T.createRef = function () {
      return { current: null };
    }),
    (T.forwardRef = function (l) {
      return { $$typeof: i, render: l };
    }),
    (T.isValidElement = W),
    (T.lazy = function (l) {
      return { $$typeof: c, _payload: { _status: -1, _result: l }, _init: RA };
    }),
    (T.memo = function (l, p) {
      return { $$typeof: B, type: l, compare: p === void 0 ? null : p };
    }),
    (T.startTransition = function (l) {
      var p = E.T,
        b = {};
      E.T = b;
      try {
        var _ = l(),
          D = E.S;
        D !== null && D(b, _),
          typeof _ == "object" &&
            _ !== null &&
            typeof _.then == "function" &&
            _.then(F, QA);
      } catch (M) {
        QA(M);
      } finally {
        p !== null && b.types !== null && (p.types = b.types), (E.T = p);
      }
    }),
    (T.unstable_useCacheRefresh = function () {
      return E.H.useCacheRefresh();
    }),
    (T.use = function (l) {
      return E.H.use(l);
    }),
    (T.useActionState = function (l, p, b) {
      return E.H.useActionState(l, p, b);
    }),
    (T.useCallback = function (l, p) {
      return E.H.useCallback(l, p);
    }),
    (T.useContext = function (l) {
      return E.H.useContext(l);
    }),
    (T.useDebugValue = function () {}),
    (T.useDeferredValue = function (l, p) {
      return E.H.useDeferredValue(l, p);
    }),
    (T.useEffect = function (l, p) {
      return E.H.useEffect(l, p);
    }),
    (T.useEffectEvent = function (l) {
      return E.H.useEffectEvent(l);
    }),
    (T.useId = function () {
      return E.H.useId();
    }),
    (T.useImperativeHandle = function (l, p, b) {
      return E.H.useImperativeHandle(l, p, b);
    }),
    (T.useInsertionEffect = function (l, p) {
      return E.H.useInsertionEffect(l, p);
    }),
    (T.useLayoutEffect = function (l, p) {
      return E.H.useLayoutEffect(l, p);
    }),
    (T.useMemo = function (l, p) {
      return E.H.useMemo(l, p);
    }),
    (T.useOptimistic = function (l, p) {
      return E.H.useOptimistic(l, p);
    }),
    (T.useReducer = function (l, p, b) {
      return E.H.useReducer(l, p, b);
    }),
    (T.useRef = function (l) {
      return E.H.useRef(l);
    }),
    (T.useState = function (l) {
      return E.H.useState(l);
    }),
    (T.useSyncExternalStore = function (l, p, b) {
      return E.H.useSyncExternalStore(l, p, b);
    }),
    (T.useTransition = function () {
      return E.H.useTransition();
    }),
    (T.version = "19.2.5"),
    T
  );
}
var ls;
function wB() {
  return ls || ((ls = 1), (vr.exports = gB())), vr.exports;
}
var qo = wB();
const QB = fB(qo),
  Jd = oB({ __proto__: null, default: QB }, [qo]),
  Hr = {},
  fs = () => {
    const A = window.navigator ?? {};
    return A.language ?? A.userLanguage;
  },
  Ai = () => {
    const A = window.location ?? {},
      e = A.ancestorOrigins;
    return e != null && e.length ? (e || [])[e.length - 1] : A.host;
  },
  Xt = (A, e = Date.now()) => Math.round(((e - A) / 1e3) * 100) / 100,
  dB = () =>
    window.timestampBeforeInit
      ? Xt(window.timestampBeforeInit, window.timestampSdkLoaded)
      : null,
  ei = () =>
    window.timestampBeforeInit
      ? Xt(window.timestampBeforeInit, window.timestampGameReady)
      : null,
  Jn = () => {
    const A = window,
      e = navigator.userAgent || navigator.vendor || A.opera;
    return /windows phone/i.test(e)
      ? _A.WinPhone
      : /android/i.test(e)
      ? _A.Android
      : (/iPad|iPhone|iPod/.test(e) && !A.MSStream) ||
        (/Macintosh/.test(e) &&
          navigator.maxTouchPoints > 1 &&
          navigator.platform === "MacIntel")
      ? _A.IOS
      : /Macintosh|Mac OS X/i.test(e)
      ? _A.MacOs
      : /Win/i.test(e)
      ? _A.Windows
      : /Linux/i.test(e)
      ? _A.Linux
      : _A.Unknown;
  },
  CB = () => {
    const A = (e) => e.test(navigator.userAgent);
    return A(/opr\//i) || window.opr
      ? "Opera"
      : A(/edg/i)
      ? "Microsoft Edge"
      : A(/chrome|chromium|crios/i)
      ? "Google Chrome"
      : A(/firefox|fxios/i)
      ? "Mozilla Firefox"
      : A(/safari/i)
      ? "Apple Safari"
      : A(/trident/i)
      ? "Microsoft Internet Explorer"
      : A(/ucbrowser/i)
      ? "UC Browser"
      : A(/samsungbrowser/i)
      ? "Samsung Browser"
      : "Unknown browser";
  },
  ti = "domino_saved_platform",
  hB = () => {
    const A = (Ai() ?? "").toLowerCase(),
      e = Hr == null ? void 0 : Hr.REACT_APP_PLATFORM_TYPE;
    if (e) return e;
    const t = new URL(window.location.href),
      r = uB(t.search);
    if (r) return r;
    const n = (a) => t.searchParams.has(a),
      s =
        (n("app_id") && n("player_id") && n("game_sid") && n("auth_key")) ||
        n("vk_app_id"),
      o = ["vk.", "gameroom.games.mail.ru"].some((a) => A.includes(a));
    if (s || o) return v.VK;
    if (["ok.", "m.bnnapp.com"].some((a) => A.includes(a))) return v.OK;
    if (["yandex.", "playhop.", "allwebgames."].some((a) => A.includes(a)))
      return v.YANDEX;
    const i = oA.getItem(ti);
    return i || v.NONE;
  },
  UB = (A) => {
    lB(ti, A);
  },
  ri = () => !nt(),
  Yn = () => !nt(),
  FB = (A) => {
    if (A instanceof Error) return `${A.name} ${A.message}`;
    if (typeof A == "string") return A;
    try {
      return JSON.stringify(A);
    } catch {
      return String(A);
    }
  },
  pB = [
    /"?code"?\s*:\s*"usernotauthenticated"/i,
    /initialization failed:\s*hsm creative manager not available/i,
    /gameplay(?:start|stop)\(\) call throttled/i,
    /this action can not be performed in the background/i,
    /"?error_reason"?\s*:\s*"user denied"/i,
    /gamepush\s+user denied/i,
  ],
  EB = (A) => {
    const e = A.map(FB).join(" ");
    return pB.some((t) => t.test(e));
  };
function ni(A, e) {
  return function () {
    return A.apply(e, arguments);
  };
}
const { toString: mB } = Object.prototype,
  { getPrototypeOf: Wn } = Object,
  ir = ((A) => (e) => {
    const t = mB.call(e);
    return A[t] || (A[t] = t.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  HA = (A) => ((A = A.toLowerCase()), (e) => ir(e) === A),
  ar = (A) => (e) => typeof e === A,
  { isArray: ye } = Array,
  $e = ar("undefined");
function vB(A) {
  return (
    A !== null &&
    !$e(A) &&
    A.constructor !== null &&
    !$e(A.constructor) &&
    CA(A.constructor.isBuffer) &&
    A.constructor.isBuffer(A)
  );
}
const si = HA("ArrayBuffer");
function HB(A) {
  let e;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (e = ArrayBuffer.isView(A))
      : (e = A && A.buffer && si(A.buffer)),
    e
  );
}
const IB = ar("string"),
  CA = ar("function"),
  oi = ar("number"),
  Br = (A) => A !== null && typeof A == "object",
  yB = (A) => A === !0 || A === !1,
  Dt = (A) => {
    if (ir(A) !== "object") return !1;
    const e = Wn(A);
    return (
      (e === null ||
        e === Object.prototype ||
        Object.getPrototypeOf(e) === null) &&
      !(Symbol.toStringTag in A) &&
      !(Symbol.iterator in A)
    );
  },
  LB = HA("Date"),
  SB = HA("File"),
  bB = HA("Blob"),
  _B = HA("FileList"),
  KB = (A) => Br(A) && CA(A.pipe),
  TB = (A) => {
    let e;
    return (
      A &&
      ((typeof FormData == "function" && A instanceof FormData) ||
        (CA(A.append) &&
          ((e = ir(A)) === "formdata" ||
            (e === "object" &&
              CA(A.toString) &&
              A.toString() === "[object FormData]"))))
    );
  },
  OB = HA("URLSearchParams"),
  [DB, RB, xB, MB] = ["ReadableStream", "Request", "Response", "Headers"].map(
    HA
  ),
  NB = (A) =>
    A.trim ? A.trim() : A.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function st(A, e, { allOwnKeys: t = !1 } = {}) {
  if (A === null || typeof A > "u") return;
  let r, n;
  if ((typeof A != "object" && (A = [A]), ye(A)))
    for (r = 0, n = A.length; r < n; r++) e.call(null, A[r], r, A);
  else {
    const s = t ? Object.getOwnPropertyNames(A) : Object.keys(A),
      o = s.length;
    let i;
    for (r = 0; r < o; r++) (i = s[r]), e.call(null, A[i], i, A);
  }
}
function ii(A, e) {
  e = e.toLowerCase();
  const t = Object.keys(A);
  let r = t.length,
    n;
  for (; r-- > 0; ) if (((n = t[r]), e === n.toLowerCase())) return n;
  return null;
}
const ne =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  ai = (A) => !$e(A) && A !== ne;
function Bn() {
  const { caseless: A } = (ai(this) && this) || {},
    e = {},
    t = (r, n) => {
      const s = (A && ii(e, n)) || n;
      Dt(e[s]) && Dt(r)
        ? (e[s] = Bn(e[s], r))
        : Dt(r)
        ? (e[s] = Bn({}, r))
        : ye(r)
        ? (e[s] = r.slice())
        : (e[s] = r);
    };
  for (let r = 0, n = arguments.length; r < n; r++)
    arguments[r] && st(arguments[r], t);
  return e;
}
const GB = (A, e, t, { allOwnKeys: r } = {}) => (
    st(
      e,
      (n, s) => {
        t && CA(n) ? (A[s] = ni(n, t)) : (A[s] = n);
      },
      { allOwnKeys: r }
    ),
    A
  ),
  kB = (A) => (A.charCodeAt(0) === 65279 && (A = A.slice(1)), A),
  PB = (A, e, t, r) => {
    (A.prototype = Object.create(e.prototype, r)),
      (A.prototype.constructor = A),
      Object.defineProperty(A, "super", { value: e.prototype }),
      t && Object.assign(A.prototype, t);
  },
  VB = (A, e, t, r) => {
    let n, s, o;
    const i = {};
    if (((e = e || {}), A == null)) return e;
    do {
      for (n = Object.getOwnPropertyNames(A), s = n.length; s-- > 0; )
        (o = n[s]), (!r || r(o, A, e)) && !i[o] && ((e[o] = A[o]), (i[o] = !0));
      A = t !== !1 && Wn(A);
    } while (A && (!t || t(A, e)) && A !== Object.prototype);
    return e;
  },
  XB = (A, e, t) => {
    (A = String(A)),
      (t === void 0 || t > A.length) && (t = A.length),
      (t -= e.length);
    const r = A.indexOf(e, t);
    return r !== -1 && r === t;
  },
  JB = (A) => {
    if (!A) return null;
    if (ye(A)) return A;
    let e = A.length;
    if (!oi(e)) return null;
    const t = new Array(e);
    for (; e-- > 0; ) t[e] = A[e];
    return t;
  },
  YB = (
    (A) => (e) =>
      A && e instanceof A
  )(typeof Uint8Array < "u" && Wn(Uint8Array)),
  WB = (A, e) => {
    const r = (A && A[Symbol.iterator]).call(A);
    let n;
    for (; (n = r.next()) && !n.done; ) {
      const s = n.value;
      e.call(A, s[0], s[1]);
    }
  },
  ZB = (A, e) => {
    let t;
    const r = [];
    for (; (t = A.exec(e)) !== null; ) r.push(t);
    return r;
  },
  jB = HA("HTMLFormElement"),
  zB = (A) =>
    A.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (t, r, n) {
      return r.toUpperCase() + n;
    }),
  gs = (
    ({ hasOwnProperty: A }) =>
    (e, t) =>
      A.call(e, t)
  )(Object.prototype),
  $B = HA("RegExp"),
  Bi = (A, e) => {
    const t = Object.getOwnPropertyDescriptors(A),
      r = {};
    st(t, (n, s) => {
      let o;
      (o = e(n, s, A)) !== !1 && (r[s] = o || n);
    }),
      Object.defineProperties(A, r);
  },
  qB = (A) => {
    Bi(A, (e, t) => {
      if (CA(A) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
        return !1;
      const r = A[t];
      if (CA(r)) {
        if (((e.enumerable = !1), "writable" in e)) {
          e.writable = !1;
          return;
        }
        e.set ||
          (e.set = () => {
            throw Error("Can not rewrite read-only method '" + t + "'");
          });
      }
    });
  },
  Ac = (A, e) => {
    const t = {},
      r = (n) => {
        n.forEach((s) => {
          t[s] = !0;
        });
      };
    return ye(A) ? r(A) : r(String(A).split(e)), t;
  },
  ec = () => {},
  tc = (A, e) => (A != null && Number.isFinite((A = +A)) ? A : e),
  Ir = "abcdefghijklmnopqrstuvwxyz",
  ws = "0123456789",
  ci = { DIGIT: ws, ALPHA: Ir, ALPHA_DIGIT: Ir + Ir.toUpperCase() + ws },
  rc = (A = 16, e = ci.ALPHA_DIGIT) => {
    let t = "";
    const { length: r } = e;
    for (; A--; ) t += e[(Math.random() * r) | 0];
    return t;
  };
function nc(A) {
  return !!(
    A &&
    CA(A.append) &&
    A[Symbol.toStringTag] === "FormData" &&
    A[Symbol.iterator]
  );
}
const sc = (A) => {
    const e = new Array(10),
      t = (r, n) => {
        if (Br(r)) {
          if (e.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            e[n] = r;
            const s = ye(r) ? [] : {};
            return (
              st(r, (o, i) => {
                const a = t(o, n + 1);
                !$e(a) && (s[i] = a);
              }),
              (e[n] = void 0),
              s
            );
          }
        }
        return r;
      };
    return t(A, 0);
  },
  oc = HA("AsyncFunction"),
  ic = (A) => A && (Br(A) || CA(A)) && CA(A.then) && CA(A.catch),
  ui = ((A, e) =>
    A
      ? setImmediate
      : e
      ? ((t, r) => (
          ne.addEventListener(
            "message",
            ({ source: n, data: s }) => {
              n === ne && s === t && r.length && r.shift()();
            },
            !1
          ),
          (n) => {
            r.push(n), ne.postMessage(t, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (t) => setTimeout(t))(
    typeof setImmediate == "function",
    CA(ne.postMessage)
  ),
  ac =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(ne)
      : (typeof process < "u" && process.nextTick) || ui,
  d = {
    isArray: ye,
    isArrayBuffer: si,
    isBuffer: vB,
    isFormData: TB,
    isArrayBufferView: HB,
    isString: IB,
    isNumber: oi,
    isBoolean: yB,
    isObject: Br,
    isPlainObject: Dt,
    isReadableStream: DB,
    isRequest: RB,
    isResponse: xB,
    isHeaders: MB,
    isUndefined: $e,
    isDate: LB,
    isFile: SB,
    isBlob: bB,
    isRegExp: $B,
    isFunction: CA,
    isStream: KB,
    isURLSearchParams: OB,
    isTypedArray: YB,
    isFileList: _B,
    forEach: st,
    merge: Bn,
    extend: GB,
    trim: NB,
    stripBOM: kB,
    inherits: PB,
    toFlatObject: VB,
    kindOf: ir,
    kindOfTest: HA,
    endsWith: XB,
    toArray: JB,
    forEachEntry: WB,
    matchAll: ZB,
    isHTMLForm: jB,
    hasOwnProperty: gs,
    hasOwnProp: gs,
    reduceDescriptors: Bi,
    freezeMethods: qB,
    toObjectSet: Ac,
    toCamelCase: zB,
    noop: ec,
    toFiniteNumber: tc,
    findKey: ii,
    global: ne,
    isContextDefined: ai,
    ALPHABET: ci,
    generateString: rc,
    isSpecCompliantForm: nc,
    toJSONObject: sc,
    isAsyncFn: oc,
    isThenable: ic,
    setImmediate: ui,
    asap: ac,
  };
function O(A, e, t, r, n) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = A),
    (this.name = "AxiosError"),
    e && (this.code = e),
    t && (this.config = t),
    r && (this.request = r),
    n && (this.response = n);
}
d.inherits(O, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: d.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const li = O.prototype,
  fi = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((A) => {
  fi[A] = { value: A };
});
Object.defineProperties(O, fi);
Object.defineProperty(li, "isAxiosError", { value: !0 });
O.from = (A, e, t, r, n, s) => {
  const o = Object.create(li);
  return (
    d.toFlatObject(
      A,
      o,
      function (a) {
        return a !== Error.prototype;
      },
      (i) => i !== "isAxiosError"
    ),
    O.call(o, A.message, e, t, r, n),
    (o.cause = A),
    (o.name = A.name),
    s && Object.assign(o, s),
    o
  );
};
const Bc = null;
function cn(A) {
  return d.isPlainObject(A) || d.isArray(A);
}
function gi(A) {
  return d.endsWith(A, "[]") ? A.slice(0, -2) : A;
}
function Qs(A, e, t) {
  return A
    ? A.concat(e)
        .map(function (n, s) {
          return (n = gi(n)), !t && s ? "[" + n + "]" : n;
        })
        .join(t ? "." : "")
    : e;
}
function cc(A) {
  return d.isArray(A) && !A.some(cn);
}
const uc = d.toFlatObject(d, {}, null, function (e) {
  return /^is[A-Z]/.test(e);
});
function cr(A, e, t) {
  if (!d.isObject(A)) throw new TypeError("target must be an object");
  (e = e || new FormData()),
    (t = d.toFlatObject(
      t,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (Q, w) {
        return !d.isUndefined(w[Q]);
      }
    ));
  const r = t.metaTokens,
    n = t.visitor || c,
    s = t.dots,
    o = t.indexes,
    a = (t.Blob || (typeof Blob < "u" && Blob)) && d.isSpecCompliantForm(e);
  if (!d.isFunction(n)) throw new TypeError("visitor must be a function");
  function B(g) {
    if (g === null) return "";
    if (d.isDate(g)) return g.toISOString();
    if (!a && d.isBlob(g))
      throw new O("Blob is not supported. Use a Buffer instead.");
    return d.isArrayBuffer(g) || d.isTypedArray(g)
      ? a && typeof Blob == "function"
        ? new Blob([g])
        : Buffer.from(g)
      : g;
  }
  function c(g, Q, w) {
    let U = g;
    if (g && !w && typeof g == "object") {
      if (d.endsWith(Q, "{}"))
        (Q = r ? Q : Q.slice(0, -2)), (g = JSON.stringify(g));
      else if (
        (d.isArray(g) && cc(g)) ||
        ((d.isFileList(g) || d.endsWith(Q, "[]")) && (U = d.toArray(g)))
      )
        return (
          (Q = gi(Q)),
          U.forEach(function (m, L) {
            !(d.isUndefined(m) || m === null) &&
              e.append(
                o === !0 ? Qs([Q], L, s) : o === null ? Q : Q + "[]",
                B(m)
              );
          }),
          !1
        );
    }
    return cn(g) ? !0 : (e.append(Qs(w, Q, s), B(g)), !1);
  }
  const u = [],
    f = Object.assign(uc, {
      defaultVisitor: c,
      convertValue: B,
      isVisitable: cn,
    });
  function C(g, Q) {
    if (!d.isUndefined(g)) {
      if (u.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + Q.join("."));
      u.push(g),
        d.forEach(g, function (U, h) {
          (!(d.isUndefined(U) || U === null) &&
            n.call(e, U, d.isString(h) ? h.trim() : h, Q, f)) === !0 &&
            C(U, Q ? Q.concat(h) : [h]);
        }),
        u.pop();
    }
  }
  if (!d.isObject(A)) throw new TypeError("data must be an object");
  return C(A), e;
}
function ds(A) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(A).replace(/[!'()~]|%20|%00/g, function (r) {
    return e[r];
  });
}
function Zn(A, e) {
  (this._pairs = []), A && cr(A, this, e);
}
const wi = Zn.prototype;
wi.append = function (e, t) {
  this._pairs.push([e, t]);
};
wi.toString = function (e) {
  const t = e
    ? function (r) {
        return e.call(this, r, ds);
      }
    : ds;
  return this._pairs
    .map(function (n) {
      return t(n[0]) + "=" + t(n[1]);
    }, "")
    .join("&");
};
function lc(A) {
  return encodeURIComponent(A)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Qi(A, e, t) {
  if (!e) return A;
  const r = (t && t.encode) || lc,
    n = t && t.serialize;
  let s;
  if (
    (n
      ? (s = n(e, t))
      : (s = d.isURLSearchParams(e) ? e.toString() : new Zn(e, t).toString(r)),
    s)
  ) {
    const o = A.indexOf("#");
    o !== -1 && (A = A.slice(0, o)),
      (A += (A.indexOf("?") === -1 ? "?" : "&") + s);
  }
  return A;
}
class Cs {
  constructor() {
    this.handlers = [];
  }
  use(e, t, r) {
    return (
      this.handlers.push({
        fulfilled: e,
        rejected: t,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(e) {
    d.forEach(this.handlers, function (r) {
      r !== null && e(r);
    });
  }
}
const di = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  fc = typeof URLSearchParams < "u" ? URLSearchParams : Zn,
  gc = typeof FormData < "u" ? FormData : null,
  wc = typeof Blob < "u" ? Blob : null,
  Qc = {
    isBrowser: !0,
    classes: { URLSearchParams: fc, FormData: gc, Blob: wc },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  jn = typeof window < "u" && typeof document < "u",
  dc = ((A) => jn && ["ReactNative", "NativeScript", "NS"].indexOf(A) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  Cc =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  hc = (jn && window.location.href) || "http://localhost",
  Uc = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: jn,
        hasStandardBrowserEnv: dc,
        hasStandardBrowserWebWorkerEnv: Cc,
        origin: hc,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  vA = { ...Uc, ...Qc };
function Fc(A, e) {
  return cr(
    A,
    new vA.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (t, r, n, s) {
          return vA.isNode && d.isBuffer(t)
            ? (this.append(r, t.toString("base64")), !1)
            : s.defaultVisitor.apply(this, arguments);
        },
      },
      e
    )
  );
}
function pc(A) {
  return d
    .matchAll(/\w+|\[(\w*)]/g, A)
    .map((e) => (e[0] === "[]" ? "" : e[1] || e[0]));
}
function Ec(A) {
  const e = {},
    t = Object.keys(A);
  let r;
  const n = t.length;
  let s;
  for (r = 0; r < n; r++) (s = t[r]), (e[s] = A[s]);
  return e;
}
function Ci(A) {
  function e(t, r, n, s) {
    let o = t[s++];
    if (o === "__proto__") return !0;
    const i = Number.isFinite(+o),
      a = s >= t.length;
    return (
      (o = !o && d.isArray(n) ? n.length : o),
      a
        ? (d.hasOwnProp(n, o) ? (n[o] = [n[o], r]) : (n[o] = r), !i)
        : ((!n[o] || !d.isObject(n[o])) && (n[o] = []),
          e(t, r, n[o], s) && d.isArray(n[o]) && (n[o] = Ec(n[o])),
          !i)
    );
  }
  if (d.isFormData(A) && d.isFunction(A.entries)) {
    const t = {};
    return (
      d.forEachEntry(A, (r, n) => {
        e(pc(r), n, t, 0);
      }),
      t
    );
  }
  return null;
}
function mc(A, e, t) {
  if (d.isString(A))
    try {
      return (e || JSON.parse)(A), d.trim(A);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (t || JSON.stringify)(A);
}
const ot = {
  transitional: di,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (e, t) {
      const r = t.getContentType() || "",
        n = r.indexOf("application/json") > -1,
        s = d.isObject(e);
      if ((s && d.isHTMLForm(e) && (e = new FormData(e)), d.isFormData(e)))
        return n ? JSON.stringify(Ci(e)) : e;
      if (
        d.isArrayBuffer(e) ||
        d.isBuffer(e) ||
        d.isStream(e) ||
        d.isFile(e) ||
        d.isBlob(e) ||
        d.isReadableStream(e)
      )
        return e;
      if (d.isArrayBufferView(e)) return e.buffer;
      if (d.isURLSearchParams(e))
        return (
          t.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          e.toString()
        );
      let i;
      if (s) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return Fc(e, this.formSerializer).toString();
        if ((i = d.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
          const a = this.env && this.env.FormData;
          return cr(
            i ? { "files[]": e } : e,
            a && new a(),
            this.formSerializer
          );
        }
      }
      return s || n ? (t.setContentType("application/json", !1), mc(e)) : e;
    },
  ],
  transformResponse: [
    function (e) {
      const t = this.transitional || ot.transitional,
        r = t && t.forcedJSONParsing,
        n = this.responseType === "json";
      if (d.isResponse(e) || d.isReadableStream(e)) return e;
      if (e && d.isString(e) && ((r && !this.responseType) || n)) {
        const o = !(t && t.silentJSONParsing) && n;
        try {
          return JSON.parse(e);
        } catch (i) {
          if (o)
            throw i.name === "SyntaxError"
              ? O.from(i, O.ERR_BAD_RESPONSE, this, null, this.response)
              : i;
        }
      }
      return e;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: vA.classes.FormData, Blob: vA.classes.Blob },
  validateStatus: function (e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
d.forEach(["delete", "get", "head", "post", "put", "patch"], (A) => {
  ot.headers[A] = {};
});
const vc = d.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  Hc = (A) => {
    const e = {};
    let t, r, n;
    return (
      A &&
        A.split(
          `
`
        ).forEach(function (o) {
          (n = o.indexOf(":")),
            (t = o.substring(0, n).trim().toLowerCase()),
            (r = o.substring(n + 1).trim()),
            !(!t || (e[t] && vc[t])) &&
              (t === "set-cookie"
                ? e[t]
                  ? e[t].push(r)
                  : (e[t] = [r])
                : (e[t] = e[t] ? e[t] + ", " + r : r));
        }),
      e
    );
  },
  hs = Symbol("internals");
function be(A) {
  return A && String(A).trim().toLowerCase();
}
function Rt(A) {
  return A === !1 || A == null ? A : d.isArray(A) ? A.map(Rt) : String(A);
}
function Ic(A) {
  const e = Object.create(null),
    t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = t.exec(A)); ) e[r[1]] = r[2];
  return e;
}
const yc = (A) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(A.trim());
function yr(A, e, t, r, n) {
  if (d.isFunction(r)) return r.call(this, e, t);
  if ((n && (e = t), !!d.isString(e))) {
    if (d.isString(r)) return e.indexOf(r) !== -1;
    if (d.isRegExp(r)) return r.test(e);
  }
}
function Lc(A) {
  return A.trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (e, t, r) => t.toUpperCase() + r);
}
function Sc(A, e) {
  const t = d.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(A, r + t, {
      value: function (n, s, o) {
        return this[r].call(this, e, n, s, o);
      },
      configurable: !0,
    });
  });
}
let wA = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, t, r) {
    const n = this;
    function s(i, a, B) {
      const c = be(a);
      if (!c) throw new Error("header name must be a non-empty string");
      const u = d.findKey(n, c);
      (!u || n[u] === void 0 || B === !0 || (B === void 0 && n[u] !== !1)) &&
        (n[u || a] = Rt(i));
    }
    const o = (i, a) => d.forEach(i, (B, c) => s(B, c, a));
    if (d.isPlainObject(e) || e instanceof this.constructor) o(e, t);
    else if (d.isString(e) && (e = e.trim()) && !yc(e)) o(Hc(e), t);
    else if (d.isHeaders(e)) for (const [i, a] of e.entries()) s(a, i, r);
    else e != null && s(t, e, r);
    return this;
  }
  get(e, t) {
    if (((e = be(e)), e)) {
      const r = d.findKey(this, e);
      if (r) {
        const n = this[r];
        if (!t) return n;
        if (t === !0) return Ic(n);
        if (d.isFunction(t)) return t.call(this, n, r);
        if (d.isRegExp(t)) return t.exec(n);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, t) {
    if (((e = be(e)), e)) {
      const r = d.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!t || yr(this, this[r], r, t)));
    }
    return !1;
  }
  delete(e, t) {
    const r = this;
    let n = !1;
    function s(o) {
      if (((o = be(o)), o)) {
        const i = d.findKey(r, o);
        i && (!t || yr(r, r[i], i, t)) && (delete r[i], (n = !0));
      }
    }
    return d.isArray(e) ? e.forEach(s) : s(e), n;
  }
  clear(e) {
    const t = Object.keys(this);
    let r = t.length,
      n = !1;
    for (; r--; ) {
      const s = t[r];
      (!e || yr(this, this[s], s, e, !0)) && (delete this[s], (n = !0));
    }
    return n;
  }
  normalize(e) {
    const t = this,
      r = {};
    return (
      d.forEach(this, (n, s) => {
        const o = d.findKey(r, s);
        if (o) {
          (t[o] = Rt(n)), delete t[s];
          return;
        }
        const i = e ? Lc(s) : String(s).trim();
        i !== s && delete t[s], (t[i] = Rt(n)), (r[i] = !0);
      }),
      this
    );
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const t = Object.create(null);
    return (
      d.forEach(this, (r, n) => {
        r != null && r !== !1 && (t[n] = e && d.isArray(r) ? r.join(", ") : r);
      }),
      t
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...t) {
    const r = new this(e);
    return t.forEach((n) => r.set(n)), r;
  }
  static accessor(e) {
    const r = (this[hs] = this[hs] = { accessors: {} }).accessors,
      n = this.prototype;
    function s(o) {
      const i = be(o);
      r[i] || (Sc(n, o), (r[i] = !0));
    }
    return d.isArray(e) ? e.forEach(s) : s(e), this;
  }
};
wA.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
d.reduceDescriptors(wA.prototype, ({ value: A }, e) => {
  let t = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => A,
    set(r) {
      this[t] = r;
    },
  };
});
d.freezeMethods(wA);
function Lr(A, e) {
  const t = this || ot,
    r = e || t,
    n = wA.from(r.headers);
  let s = r.data;
  return (
    d.forEach(A, function (i) {
      s = i.call(t, s, n.normalize(), e ? e.status : void 0);
    }),
    n.normalize(),
    s
  );
}
function hi(A) {
  return !!(A && A.__CANCEL__);
}
function Le(A, e, t) {
  O.call(this, A ?? "canceled", O.ERR_CANCELED, e, t),
    (this.name = "CanceledError");
}
d.inherits(Le, O, { __CANCEL__: !0 });
function Ui(A, e, t) {
  const r = t.config.validateStatus;
  !t.status || !r || r(t.status)
    ? A(t)
    : e(
        new O(
          "Request failed with status code " + t.status,
          [O.ERR_BAD_REQUEST, O.ERR_BAD_RESPONSE][
            Math.floor(t.status / 100) - 4
          ],
          t.config,
          t.request,
          t
        )
      );
}
function bc(A) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(A);
  return (e && e[1]) || "";
}
function _c(A, e) {
  A = A || 10;
  const t = new Array(A),
    r = new Array(A);
  let n = 0,
    s = 0,
    o;
  return (
    (e = e !== void 0 ? e : 1e3),
    function (a) {
      const B = Date.now(),
        c = r[s];
      o || (o = B), (t[n] = a), (r[n] = B);
      let u = s,
        f = 0;
      for (; u !== n; ) (f += t[u++]), (u = u % A);
      if (((n = (n + 1) % A), n === s && (s = (s + 1) % A), B - o < e)) return;
      const C = c && B - c;
      return C ? Math.round((f * 1e3) / C) : void 0;
    }
  );
}
function Kc(A, e) {
  let t = 0,
    r = 1e3 / e,
    n,
    s;
  const o = (B, c = Date.now()) => {
    (t = c), (n = null), s && (clearTimeout(s), (s = null)), A.apply(null, B);
  };
  return [
    (...B) => {
      const c = Date.now(),
        u = c - t;
      u >= r
        ? o(B, c)
        : ((n = B),
          s ||
            (s = setTimeout(() => {
              (s = null), o(n);
            }, r - u)));
    },
    () => n && o(n),
  ];
}
const Jt = (A, e, t = 3) => {
    let r = 0;
    const n = _c(50, 250);
    return Kc((s) => {
      const o = s.loaded,
        i = s.lengthComputable ? s.total : void 0,
        a = o - r,
        B = n(a),
        c = o <= i;
      r = o;
      const u = {
        loaded: o,
        total: i,
        progress: i ? o / i : void 0,
        bytes: a,
        rate: B || void 0,
        estimated: B && i && c ? (i - o) / B : void 0,
        event: s,
        lengthComputable: i != null,
        [e ? "download" : "upload"]: !0,
      };
      A(u);
    }, t);
  },
  Us = (A, e) => {
    const t = A != null;
    return [(r) => e[0]({ lengthComputable: t, total: A, loaded: r }), e[1]];
  },
  Fs =
    (A) =>
    (...e) =>
      d.asap(() => A(...e)),
  Tc = vA.hasStandardBrowserEnv
    ? (function () {
        const e = /(msie|trident)/i.test(navigator.userAgent),
          t = document.createElement("a");
        let r;
        function n(s) {
          let o = s;
          return (
            e && (t.setAttribute("href", o), (o = t.href)),
            t.setAttribute("href", o),
            {
              href: t.href,
              protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
              host: t.host,
              search: t.search ? t.search.replace(/^\?/, "") : "",
              hash: t.hash ? t.hash.replace(/^#/, "") : "",
              hostname: t.hostname,
              port: t.port,
              pathname:
                t.pathname.charAt(0) === "/" ? t.pathname : "/" + t.pathname,
            }
          );
        }
        return (
          (r = n(window.location.href)),
          function (o) {
            const i = d.isString(o) ? n(o) : o;
            return i.protocol === r.protocol && i.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  Oc = vA.hasStandardBrowserEnv
    ? {
        write(A, e, t, r, n, s) {
          const o = [A + "=" + encodeURIComponent(e)];
          d.isNumber(t) && o.push("expires=" + new Date(t).toGMTString()),
            d.isString(r) && o.push("path=" + r),
            d.isString(n) && o.push("domain=" + n),
            s === !0 && o.push("secure"),
            (document.cookie = o.join("; "));
        },
        read(A) {
          const e = document.cookie.match(
            new RegExp("(^|;\\s*)(" + A + ")=([^;]*)")
          );
          return e ? decodeURIComponent(e[3]) : null;
        },
        remove(A) {
          this.write(A, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function Dc(A) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(A);
}
function Rc(A, e) {
  return e ? A.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : A;
}
function Fi(A, e) {
  return A && !Dc(e) ? Rc(A, e) : e;
}
const ps = (A) => (A instanceof wA ? { ...A } : A);
function ue(A, e) {
  e = e || {};
  const t = {};
  function r(B, c, u) {
    return d.isPlainObject(B) && d.isPlainObject(c)
      ? d.merge.call({ caseless: u }, B, c)
      : d.isPlainObject(c)
      ? d.merge({}, c)
      : d.isArray(c)
      ? c.slice()
      : c;
  }
  function n(B, c, u) {
    if (d.isUndefined(c)) {
      if (!d.isUndefined(B)) return r(void 0, B, u);
    } else return r(B, c, u);
  }
  function s(B, c) {
    if (!d.isUndefined(c)) return r(void 0, c);
  }
  function o(B, c) {
    if (d.isUndefined(c)) {
      if (!d.isUndefined(B)) return r(void 0, B);
    } else return r(void 0, c);
  }
  function i(B, c, u) {
    if (u in e) return r(B, c);
    if (u in A) return r(void 0, B);
  }
  const a = {
    url: s,
    method: s,
    data: s,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: i,
    headers: (B, c) => n(ps(B), ps(c), !0),
  };
  return (
    d.forEach(Object.keys(Object.assign({}, A, e)), function (c) {
      const u = a[c] || n,
        f = u(A[c], e[c], c);
      (d.isUndefined(f) && u !== i) || (t[c] = f);
    }),
    t
  );
}
const pi = (A) => {
    const e = ue({}, A);
    let {
      data: t,
      withXSRFToken: r,
      xsrfHeaderName: n,
      xsrfCookieName: s,
      headers: o,
      auth: i,
    } = e;
    (e.headers = o = wA.from(o)),
      (e.url = Qi(Fi(e.baseURL, e.url), A.params, A.paramsSerializer)),
      i &&
        o.set(
          "Authorization",
          "Basic " +
            btoa(
              (i.username || "") +
                ":" +
                (i.password ? unescape(encodeURIComponent(i.password)) : "")
            )
        );
    let a;
    if (d.isFormData(t)) {
      if (vA.hasStandardBrowserEnv || vA.hasStandardBrowserWebWorkerEnv)
        o.setContentType(void 0);
      else if ((a = o.getContentType()) !== !1) {
        const [B, ...c] = a
          ? a
              .split(";")
              .map((u) => u.trim())
              .filter(Boolean)
          : [];
        o.setContentType([B || "multipart/form-data", ...c].join("; "));
      }
    }
    if (
      vA.hasStandardBrowserEnv &&
      (r && d.isFunction(r) && (r = r(e)), r || (r !== !1 && Tc(e.url)))
    ) {
      const B = n && s && Oc.read(s);
      B && o.set(n, B);
    }
    return e;
  },
  xc = typeof XMLHttpRequest < "u",
  Mc =
    xc &&
    function (A) {
      return new Promise(function (t, r) {
        const n = pi(A);
        let s = n.data;
        const o = wA.from(n.headers).normalize();
        let { responseType: i, onUploadProgress: a, onDownloadProgress: B } = n,
          c,
          u,
          f,
          C,
          g;
        function Q() {
          C && C(),
            g && g(),
            n.cancelToken && n.cancelToken.unsubscribe(c),
            n.signal && n.signal.removeEventListener("abort", c);
        }
        let w = new XMLHttpRequest();
        w.open(n.method.toUpperCase(), n.url, !0), (w.timeout = n.timeout);
        function U() {
          if (!w) return;
          const m = wA.from(
              "getAllResponseHeaders" in w && w.getAllResponseHeaders()
            ),
            y = {
              data:
                !i || i === "text" || i === "json"
                  ? w.responseText
                  : w.response,
              status: w.status,
              statusText: w.statusText,
              headers: m,
              config: A,
              request: w,
            };
          Ui(
            function (E) {
              t(E), Q();
            },
            function (E) {
              r(E), Q();
            },
            y
          ),
            (w = null);
        }
        "onloadend" in w
          ? (w.onloadend = U)
          : (w.onreadystatechange = function () {
              !w ||
                w.readyState !== 4 ||
                (w.status === 0 &&
                  !(w.responseURL && w.responseURL.indexOf("file:") === 0)) ||
                setTimeout(U);
            }),
          (w.onabort = function () {
            w &&
              (r(new O("Request aborted", O.ECONNABORTED, A, w)), (w = null));
          }),
          (w.onerror = function () {
            r(new O("Network Error", O.ERR_NETWORK, A, w)), (w = null);
          }),
          (w.ontimeout = function () {
            let L = n.timeout
              ? "timeout of " + n.timeout + "ms exceeded"
              : "timeout exceeded";
            const y = n.transitional || di;
            n.timeoutErrorMessage && (L = n.timeoutErrorMessage),
              r(
                new O(
                  L,
                  y.clarifyTimeoutError ? O.ETIMEDOUT : O.ECONNABORTED,
                  A,
                  w
                )
              ),
              (w = null);
          }),
          s === void 0 && o.setContentType(null),
          "setRequestHeader" in w &&
            d.forEach(o.toJSON(), function (L, y) {
              w.setRequestHeader(y, L);
            }),
          d.isUndefined(n.withCredentials) ||
            (w.withCredentials = !!n.withCredentials),
          i && i !== "json" && (w.responseType = n.responseType),
          B && (([f, g] = Jt(B, !0)), w.addEventListener("progress", f)),
          a &&
            w.upload &&
            (([u, C] = Jt(a)),
            w.upload.addEventListener("progress", u),
            w.upload.addEventListener("loadend", C)),
          (n.cancelToken || n.signal) &&
            ((c = (m) => {
              w &&
                (r(!m || m.type ? new Le(null, A, w) : m),
                w.abort(),
                (w = null));
            }),
            n.cancelToken && n.cancelToken.subscribe(c),
            n.signal &&
              (n.signal.aborted ? c() : n.signal.addEventListener("abort", c)));
        const h = bc(n.url);
        if (h && vA.protocols.indexOf(h) === -1) {
          r(new O("Unsupported protocol " + h + ":", O.ERR_BAD_REQUEST, A));
          return;
        }
        w.send(s || null);
      });
    },
  Nc = (A, e) => {
    let t = new AbortController(),
      r;
    const n = function (a) {
      if (!r) {
        (r = !0), o();
        const B = a instanceof Error ? a : this.reason;
        t.abort(
          B instanceof O ? B : new Le(B instanceof Error ? B.message : B)
        );
      }
    };
    let s =
      e &&
      setTimeout(() => {
        n(new O(`timeout ${e} of ms exceeded`, O.ETIMEDOUT));
      }, e);
    const o = () => {
      A &&
        (s && clearTimeout(s),
        (s = null),
        A.forEach((a) => {
          a &&
            (a.removeEventListener
              ? a.removeEventListener("abort", n)
              : a.unsubscribe(n));
        }),
        (A = null));
    };
    A.forEach((a) => a && a.addEventListener && a.addEventListener("abort", n));
    const { signal: i } = t;
    return (
      (i.unsubscribe = o),
      [
        i,
        () => {
          s && clearTimeout(s), (s = null);
        },
      ]
    );
  },
  Gc = function* (A, e) {
    let t = A.byteLength;
    if (t < e) {
      yield A;
      return;
    }
    let r = 0,
      n;
    for (; r < t; ) (n = r + e), yield A.slice(r, n), (r = n);
  },
  kc = async function* (A, e, t) {
    for await (const r of A)
      yield* Gc(ArrayBuffer.isView(r) ? r : await t(String(r)), e);
  },
  Es = (A, e, t, r, n) => {
    const s = kc(A, e, n);
    let o = 0,
      i,
      a = (B) => {
        i || ((i = !0), r && r(B));
      };
    return new ReadableStream(
      {
        async pull(B) {
          try {
            const { done: c, value: u } = await s.next();
            if (c) {
              a(), B.close();
              return;
            }
            let f = u.byteLength;
            if (t) {
              let C = (o += f);
              t(C);
            }
            B.enqueue(new Uint8Array(u));
          } catch (c) {
            throw (a(c), c);
          }
        },
        cancel(B) {
          return a(B), s.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  ur =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Ei = ur && typeof ReadableStream == "function",
  un =
    ur &&
    (typeof TextEncoder == "function"
      ? (
          (A) => (e) =>
            A.encode(e)
        )(new TextEncoder())
      : async (A) => new Uint8Array(await new Response(A).arrayBuffer())),
  mi = (A, ...e) => {
    try {
      return !!A(...e);
    } catch {
      return !1;
    }
  },
  Pc =
    Ei &&
    mi(() => {
      let A = !1;
      const e = new Request(vA.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (A = !0), "half";
        },
      }).headers.has("Content-Type");
      return A && !e;
    }),
  ms = 64 * 1024,
  ln = Ei && mi(() => d.isReadableStream(new Response("").body)),
  Yt = { stream: ln && ((A) => A.body) };
ur &&
  ((A) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
      !Yt[e] &&
        (Yt[e] = d.isFunction(A[e])
          ? (t) => t[e]()
          : (t, r) => {
              throw new O(
                `Response type '${e}' is not supported`,
                O.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const Vc = async (A) => {
    if (A == null) return 0;
    if (d.isBlob(A)) return A.size;
    if (d.isSpecCompliantForm(A))
      return (await new Request(A).arrayBuffer()).byteLength;
    if (d.isArrayBufferView(A) || d.isArrayBuffer(A)) return A.byteLength;
    if ((d.isURLSearchParams(A) && (A = A + ""), d.isString(A)))
      return (await un(A)).byteLength;
  },
  Xc = async (A, e) => {
    const t = d.toFiniteNumber(A.getContentLength());
    return t ?? Vc(e);
  },
  Jc =
    ur &&
    (async (A) => {
      let {
        url: e,
        method: t,
        data: r,
        signal: n,
        cancelToken: s,
        timeout: o,
        onDownloadProgress: i,
        onUploadProgress: a,
        responseType: B,
        headers: c,
        withCredentials: u = "same-origin",
        fetchOptions: f,
      } = pi(A);
      B = B ? (B + "").toLowerCase() : "text";
      let [C, g] = n || s || o ? Nc([n, s], o) : [],
        Q,
        w;
      const U = () => {
        !Q &&
          setTimeout(() => {
            C && C.unsubscribe();
          }),
          (Q = !0);
      };
      let h;
      try {
        if (
          a &&
          Pc &&
          t !== "get" &&
          t !== "head" &&
          (h = await Xc(c, r)) !== 0
        ) {
          let F = new Request(e, { method: "POST", body: r, duplex: "half" }),
            E;
          if (
            (d.isFormData(r) &&
              (E = F.headers.get("content-type")) &&
              c.setContentType(E),
            F.body)
          ) {
            const [K, S] = Us(h, Jt(Fs(a)));
            r = Es(F.body, ms, K, S, un);
          }
        }
        d.isString(u) || (u = u ? "include" : "omit"),
          (w = new Request(e, {
            ...f,
            signal: C,
            method: t.toUpperCase(),
            headers: c.normalize().toJSON(),
            body: r,
            duplex: "half",
            credentials: u,
          }));
        let m = await fetch(w);
        const L = ln && (B === "stream" || B === "response");
        if (ln && (i || L)) {
          const F = {};
          ["status", "statusText", "headers"].forEach((N) => {
            F[N] = m[N];
          });
          const E = d.toFiniteNumber(m.headers.get("content-length")),
            [K, S] = (i && Us(E, Jt(Fs(i), !0))) || [];
          m = new Response(
            Es(
              m.body,
              ms,
              K,
              () => {
                S && S(), L && U();
              },
              un
            ),
            F
          );
        }
        B = B || "text";
        let y = await Yt[d.findKey(Yt, B) || "text"](m, A);
        return (
          !L && U(),
          g && g(),
          await new Promise((F, E) => {
            Ui(F, E, {
              data: y,
              headers: wA.from(m.headers),
              status: m.status,
              statusText: m.statusText,
              config: A,
              request: w,
            });
          })
        );
      } catch (m) {
        throw (
          (U(),
          m && m.name === "TypeError" && /fetch/i.test(m.message)
            ? Object.assign(new O("Network Error", O.ERR_NETWORK, A, w), {
                cause: m.cause || m,
              })
            : O.from(m, m && m.code, A, w))
        );
      }
    }),
  fn = { http: Bc, xhr: Mc, fetch: Jc };
d.forEach(fn, (A, e) => {
  if (A) {
    try {
      Object.defineProperty(A, "name", { value: e });
    } catch {}
    Object.defineProperty(A, "adapterName", { value: e });
  }
});
const vs = (A) => `- ${A}`,
  Yc = (A) => d.isFunction(A) || A === null || A === !1,
  vi = {
    getAdapter: (A) => {
      A = d.isArray(A) ? A : [A];
      const { length: e } = A;
      let t, r;
      const n = {};
      for (let s = 0; s < e; s++) {
        t = A[s];
        let o;
        if (
          ((r = t),
          !Yc(t) && ((r = fn[(o = String(t)).toLowerCase()]), r === void 0))
        )
          throw new O(`Unknown adapter '${o}'`);
        if (r) break;
        n[o || "#" + s] = r;
      }
      if (!r) {
        const s = Object.entries(n).map(
          ([i, a]) =>
            `adapter ${i} ` +
            (a === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let o = e
          ? s.length > 1
            ? `since :
` +
              s.map(vs).join(`
`)
            : " " + vs(s[0])
          : "as no adapter specified";
        throw new O(
          "There is no suitable adapter to dispatch the request " + o,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: fn,
  };
function Sr(A) {
  if (
    (A.cancelToken && A.cancelToken.throwIfRequested(),
    A.signal && A.signal.aborted)
  )
    throw new Le(null, A);
}
function Hs(A) {
  return (
    Sr(A),
    (A.headers = wA.from(A.headers)),
    (A.data = Lr.call(A, A.transformRequest)),
    ["post", "put", "patch"].indexOf(A.method) !== -1 &&
      A.headers.setContentType("application/x-www-form-urlencoded", !1),
    vi
      .getAdapter(A.adapter || ot.adapter)(A)
      .then(
        function (r) {
          return (
            Sr(A),
            (r.data = Lr.call(A, A.transformResponse, r)),
            (r.headers = wA.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            hi(r) ||
              (Sr(A),
              r &&
                r.response &&
                ((r.response.data = Lr.call(
                  A,
                  A.transformResponse,
                  r.response
                )),
                (r.response.headers = wA.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const Hi = "1.7.4",
  zn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (A, e) => {
    zn[A] = function (r) {
      return typeof r === A || "a" + (e < 1 ? "n " : " ") + A;
    };
  }
);
const Is = {};
zn.transitional = function (e, t, r) {
  function n(s, o) {
    return (
      "[Axios v" +
      Hi +
      "] Transitional option '" +
      s +
      "'" +
      o +
      (r ? ". " + r : "")
    );
  }
  return (s, o, i) => {
    if (e === !1)
      throw new O(
        n(o, " has been removed" + (t ? " in " + t : "")),
        O.ERR_DEPRECATED
      );
    return (
      t &&
        !Is[o] &&
        ((Is[o] = !0),
        console.warn(
          n(
            o,
            " has been deprecated since v" +
              t +
              " and will be removed in the near future"
          )
        )),
      e ? e(s, o, i) : !0
    );
  };
};
function Wc(A, e, t) {
  if (typeof A != "object")
    throw new O("options must be an object", O.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(A);
  let n = r.length;
  for (; n-- > 0; ) {
    const s = r[n],
      o = e[s];
    if (o) {
      const i = A[s],
        a = i === void 0 || o(i, s, A);
      if (a !== !0)
        throw new O("option " + s + " must be " + a, O.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0) throw new O("Unknown option " + s, O.ERR_BAD_OPTION);
  }
}
const gn = { assertOptions: Wc, validators: zn },
  XA = gn.validators;
let oe = class {
  constructor(e) {
    (this.defaults = e),
      (this.interceptors = { request: new Cs(), response: new Cs() });
  }
  async request(e, t) {
    try {
      return await this._request(e, t);
    } catch (r) {
      if (r instanceof Error) {
        let n;
        Error.captureStackTrace
          ? Error.captureStackTrace((n = {}))
          : (n = new Error());
        const s = n.stack ? n.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? s &&
              !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + s)
            : (r.stack = s);
        } catch {}
      }
      throw r;
    }
  }
  _request(e, t) {
    typeof e == "string" ? ((t = t || {}), (t.url = e)) : (t = e || {}),
      (t = ue(this.defaults, t));
    const { transitional: r, paramsSerializer: n, headers: s } = t;
    r !== void 0 &&
      gn.assertOptions(
        r,
        {
          silentJSONParsing: XA.transitional(XA.boolean),
          forcedJSONParsing: XA.transitional(XA.boolean),
          clarifyTimeoutError: XA.transitional(XA.boolean),
        },
        !1
      ),
      n != null &&
        (d.isFunction(n)
          ? (t.paramsSerializer = { serialize: n })
          : gn.assertOptions(
              n,
              { encode: XA.function, serialize: XA.function },
              !0
            )),
      (t.method = (t.method || this.defaults.method || "get").toLowerCase());
    let o = s && d.merge(s.common, s[t.method]);
    s &&
      d.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (g) => {
          delete s[g];
        }
      ),
      (t.headers = wA.concat(o, s));
    const i = [];
    let a = !0;
    this.interceptors.request.forEach(function (Q) {
      (typeof Q.runWhen == "function" && Q.runWhen(t) === !1) ||
        ((a = a && Q.synchronous), i.unshift(Q.fulfilled, Q.rejected));
    });
    const B = [];
    this.interceptors.response.forEach(function (Q) {
      B.push(Q.fulfilled, Q.rejected);
    });
    let c,
      u = 0,
      f;
    if (!a) {
      const g = [Hs.bind(this), void 0];
      for (
        g.unshift.apply(g, i),
          g.push.apply(g, B),
          f = g.length,
          c = Promise.resolve(t);
        u < f;

      )
        c = c.then(g[u++], g[u++]);
      return c;
    }
    f = i.length;
    let C = t;
    for (u = 0; u < f; ) {
      const g = i[u++],
        Q = i[u++];
      try {
        C = g(C);
      } catch (w) {
        Q.call(this, w);
        break;
      }
    }
    try {
      c = Hs.call(this, C);
    } catch (g) {
      return Promise.reject(g);
    }
    for (u = 0, f = B.length; u < f; ) c = c.then(B[u++], B[u++]);
    return c;
  }
  getUri(e) {
    e = ue(this.defaults, e);
    const t = Fi(e.baseURL, e.url);
    return Qi(t, e.params, e.paramsSerializer);
  }
};
d.forEach(["delete", "get", "head", "options"], function (e) {
  oe.prototype[e] = function (t, r) {
    return this.request(
      ue(r || {}, { method: e, url: t, data: (r || {}).data })
    );
  };
});
d.forEach(["post", "put", "patch"], function (e) {
  function t(r) {
    return function (s, o, i) {
      return this.request(
        ue(i || {}, {
          method: e,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: s,
          data: o,
        })
      );
    };
  }
  (oe.prototype[e] = t()), (oe.prototype[e + "Form"] = t(!0));
});
let Zc = class Ii {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let t;
    this.promise = new Promise(function (s) {
      t = s;
    });
    const r = this;
    this.promise.then((n) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; ) r._listeners[s](n);
      r._listeners = null;
    }),
      (this.promise.then = (n) => {
        let s;
        const o = new Promise((i) => {
          r.subscribe(i), (s = i);
        }).then(n);
        return (
          (o.cancel = function () {
            r.unsubscribe(s);
          }),
          o
        );
      }),
      e(function (s, o, i) {
        r.reason || ((r.reason = new Le(s, o, i)), t(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
  }
  unsubscribe(e) {
    if (!this._listeners) return;
    const t = this._listeners.indexOf(e);
    t !== -1 && this._listeners.splice(t, 1);
  }
  static source() {
    let e;
    return {
      token: new Ii(function (n) {
        e = n;
      }),
      cancel: e,
    };
  }
};
function jc(A) {
  return function (t) {
    return A.apply(null, t);
  };
}
function zc(A) {
  return d.isObject(A) && A.isAxiosError === !0;
}
const wn = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(wn).forEach(([A, e]) => {
  wn[e] = A;
});
function yi(A) {
  const e = new oe(A),
    t = ni(oe.prototype.request, e);
  return (
    d.extend(t, oe.prototype, e, { allOwnKeys: !0 }),
    d.extend(t, e, null, { allOwnKeys: !0 }),
    (t.create = function (n) {
      return yi(ue(A, n));
    }),
    t
  );
}
const AA = yi(ot);
AA.Axios = oe;
AA.CanceledError = Le;
AA.CancelToken = Zc;
AA.isCancel = hi;
AA.VERSION = Hi;
AA.toFormData = cr;
AA.AxiosError = O;
AA.Cancel = AA.CanceledError;
AA.all = function (e) {
  return Promise.all(e);
};
AA.spread = jc;
AA.isAxiosError = zc;
AA.mergeConfig = ue;
AA.AxiosHeaders = wA;
AA.formToJSON = (A) => Ci(d.isHTMLForm(A) ? new FormData(A) : A);
AA.getAdapter = vi.getAdapter;
AA.HttpStatusCode = wn;
AA.default = AA;
const {
    Axios: Zd,
    AxiosError: Li,
    CanceledError: jd,
    isCancel: zd,
    CancelToken: $d,
    VERSION: qd,
    all: AC,
    Cancel: eC,
    isAxiosError: $c,
    spread: tC,
    toFormData: rC,
    AxiosHeaders: nC,
    HttpStatusCode: sC,
    formToJSON: oC,
    getAdapter: iC,
    mergeConfig: aC,
  } = AA,
  Si = (A, e = 0) => {
    if (e > 8) return String(A);
    const t = {};
    try {
      return A instanceof Object
        ? (Object.entries(A).forEach(([r, n]) => {
            n instanceof Object ? (t[r] = Si(n, e + 1)) : (t[r] = n);
          }),
          t)
        : String(A);
    } catch {
      return String(A);
    }
  },
  qc = (A) =>
    $c(A) || A instanceof Li
      ? { message: A.message, status: A.status, code: A.code }
      : A instanceof Error
      ? { message: A.message, stack: A.stack, name: A.name }
      : A,
  br = (A) =>
    A.replace(/\b[A-Za-z0-9+/]{200,}={0,2}\b/g, "base64:STR")
      .replace(/\s+/g, " ")
      .replace("%c", "")
      .trim(),
  ys = (A) => {
    if (typeof A == "string") return br(A);
    if (typeof A == "number" || typeof A == "boolean") return A.toString();
    if (A == null) return String(A);
    try {
      const e = qc(A),
        t = Si(e);
      return br(JSON.stringify(t));
    } catch {
      return br(String(A));
    }
  },
  bi = (A, e = {}) => {
    var r, n;
    const t = {};
    if (A instanceof Li && A.response)
      (t.message = (r = A.response.data) == null ? void 0 : r.message),
        (t.code = (n = A.response.data) == null ? void 0 : n.code),
        (t.status = A.response.status);
    else if (A instanceof Error) (t.message = A.message), (t.name = A.name);
    else
      try {
        const s = JSON.parse(JSON.stringify(A));
        Object.keys(s).forEach((o) => {
          t[o] = s[o];
        });
      } catch {
        t.message = String(A);
      }
    return {
      [(t == null ? void 0 : t.message) || "unknown_error_message"]: {
        ...e,
        ...(t != null && t.code ? { code: t == null ? void 0 : t.code } : {}),
        ...(t != null && t.status
          ? { status: t == null ? void 0 : t.status }
          : {}),
        ...(t != null && t.name ? { name: t == null ? void 0 : t.name } : {}),
      },
    };
  },
  ie = {
    error: (A, e, t) => {
      Au(A, e, t);
    },
    warn: (A, e, t) => {
      console.warn(A, e, t);
    },
    info: (...A) => {
      console.info(...A);
    },
  },
  mA = class mA {
    constructor() {
      lA(this, "options", {
        logSplitter: " -|- ",
        maxLogs: 1e3,
        logFilter: (e) => !0,
      });
      lA(this, "logs", []);
      if (mA.instance) return mA.instance;
      mA.instance = this;
    }
    setOptions(e) {
      this.options = { ...this.options, ...e };
    }
    getTime() {
      const e = new Date();
      return `${`${e.getMonth()}-${e.getDate()}`} ${e.getHours()}:${e.getMinutes()}:${e.getSeconds()}.${e.getMilliseconds()}`;
    }
    baseFilter(e) {
      const t = ["%c%s", "gamepush dev"];
      return !e.some(
        (r) =>
          typeof r == "string" && t.some((n) => r.toLowerCase().includes(n))
      );
    }
    addLog(...e) {
      if (!ri() || !this.baseFilter(e) || !this.options.logFilter(e)) return;
      const t = e.filter((r) =>
        typeof r != "string"
          ? r
          : [
              "backgroud:",
              "color: ",
              "padding: ",
              "font-weight: ",
              "border-radius: ",
            ].every((n) => !r.includes(n))
      );
      this.logs.push({ parts: t, datetime: this.getTime() }),
        this.logs.length > this.options.maxLogs && this.logs.shift();
    }
    getLogs() {
      return this.logs;
    }
    getLogsFormatted() {
      return this.logs.map((e) => {
        const t = e.parts.map(ys).join(this.options.logSplitter);
        return `${e.datetime}${this.options.logSplitter}${t}`;
      });
    }
    clearLogs() {
      this.logs = [];
    }
    static getErrorTrackingPayload(e) {
      const [t, r, ...n] = e,
        s = t instanceof Error ? t.message : ys(t),
        o = r ?? (t instanceof Error ? t : new Error(s)),
        i =
          n.length === 1 &&
          typeof n[0] == "object" &&
          n[0] !== null &&
          !(n[0] instanceof Error)
            ? n[0]
            : n.length > 0
            ? { details: n }
            : {};
      return { message: s, error: o, details: i };
    }
    static captureErrorParts(e, t) {
      if (EB(e)) return;
      const r = new mA();
      t && this.originalConsoleActions.error(...e), r.addLog("ERROR", ...e);
      const {
        message: n,
        error: s,
        details: o,
      } = this.getErrorTrackingPayload(e);
      try {
        window.errorLogTrackingFn(n, s, o);
      } catch (i) {
        this.originalConsoleActions.error(
          "[sm-games-sdk] Failed to track console.error:",
          i
        );
      }
    }
    static captureError(e, t, r = {}, n = {}) {
      const s = [e];
      t !== void 0 && s.push(t),
        Object.keys(r).length > 0 && s.push(r),
        this.captureErrorParts(s, n.writeToConsole ?? !0);
    }
    static writeOriginalError(...e) {
      this.originalConsoleActions.error(...e);
    }
    static disableMinorLogs() {
      const e = new mA();
      (console.log = (...t) => e.addLog("LOG", ...t)),
        (console.warn = (...t) => e.addLog("WARN", ...t)),
        (console.info = (...t) => e.addLog("INFO", ...t));
    }
    static enableMinorLogs() {
      const e = new mA();
      (console.log = (...t) => {
        this.originalConsoleActions.log(...t), e.addLog("LOG", ...t);
      }),
        (console.warn = (...t) => {
          this.originalConsoleActions.warn(...t), e.addLog("WARN", ...t);
        }),
        (console.info = (...t) => {
          this.originalConsoleActions.info(...t), e.addLog("INFO", ...t);
        });
    }
    static enableErrorLogs() {
      console.error = (...e) => {
        this.captureErrorParts(e, !0);
      };
    }
    static disableAllLogs() {
      new mA().clearLogs(),
        (console.log = () => {}),
        (console.warn = () => {}),
        (console.info = () => {}),
        (console.error = () => {});
    }
  };
lA(mA, "instance", null),
  lA(mA, "originalConsoleActions", {
    log: console.log,
    warn: console.warn,
    info: console.info,
    error: console.error,
  });
let GA = mA;
const Au = (A, e, t = {}, r = {}) => GA.captureError(A, e, t, r),
  eu = (...A) => GA.writeOriginalError(...A);
ri()
  ? (GA.enableErrorLogs(), zo() ? GA.enableMinorLogs() : GA.disableMinorLogs())
  : GA.disableAllLogs();
typeof window < "u" && (window.logStorage = new GA());
const _e = {},
  tu = async (A, e) => {
    if (_e[A]) return _e[A];
    const t = document.createElement("script");
    let r;
    return (
      (r = new Promise((n) => {
        let s = !1;
        const o = () => {
            t.parentNode && t.parentNode.removeChild(t);
          },
          i = (a) => {
            s ||
              ((s = !0),
              a ||
                (o(),
                Promise.resolve().then(() => {
                  _e[A] === r && delete _e[A];
                })),
              n(a));
          };
        try {
          t.addEventListener("load", () => {
            if (!e) {
              i(!0);
              return;
            }
            e()
              .then(i)
              .catch((a) => {
                ie.error("insertScript onSuccess", A, a), i(!1);
              });
          }),
            t.addEventListener("error", (a) => {
              ie.error("insertScript", A, a), i(!1);
            }),
            (t.src = A),
            document.head.appendChild(t);
        } catch (a) {
          ie.error("insertScript", a), i(!1);
        }
      })),
      (_e[A] = r),
      r
    );
  },
  ru = async ({ src: A, onSuccess: e, retries: t = 3, delayMs: r = 1e3 }) => {
    for (let n = 0; n < t; n++) {
      const s = await tu(A, e);
      if (s) return s;
      n < t - 1 && (await new Promise((o) => setTimeout(o, r * 2 ** n)));
    }
    return !1;
  },
  _i = 75e3,
  Ki = (A, e) =>
    new Promise((t, r) => {
      let n = !1,
        s = !1,
        o;
      const i = () => {
          o !== void 0 && clearTimeout(o),
            A.removeEventListener("ready", u),
            A.removeEventListener("rewarded", f),
            A.removeEventListener("closed", C),
            A.removeEventListener("empty", g),
            A.removeEventListener("destroyed", Q);
        },
        a = (w) => {
          n || ((n = !0), i(), t(w));
        },
        B = (w) => {
          n || ((n = !0), i(), r(w));
        },
        c = () => {
          if (!(s || n)) {
            s = !0;
            try {
              const w = A.show();
              w && typeof w.then == "function" && w.catch(B);
            } catch (w) {
              B(w);
            }
          }
        };
      function u() {
        c();
      }
      function f() {
        var w;
        (w = e.onRewarded) == null || w.call(e);
      }
      function C() {
        a(e.closedResult());
      }
      function g() {
        a(e.emptyResult);
      }
      function Q() {
        a(e.terminalResult);
      }
      try {
        [
          ["ready", u],
          ["rewarded", f],
          ["closed", C],
          ["empty", g],
          ["destroyed", Q],
        ].forEach(([U, h]) => A.addEventListener(U, h)),
          A.state === "ready"
            ? c()
            : A.state === "empty"
            ? a(e.emptyResult)
            : A.state === "closed" && a(e.terminalResult),
          n ||
            (o = setTimeout(
              () => a(e.terminalResult),
              Math.max(0, e.timeoutMs)
            ));
      } catch (w) {
        B(w);
      }
    }),
  nu = async (A, e = _i) => {
    const t = await A.requestOutOfPageAd("rewarded");
    let r = !1;
    return Ki(t, {
      onRewarded: () => {
        r = !0;
      },
      closedResult: () => r,
      emptyResult: { error: { notAvailable: !0 } },
      terminalResult: !1,
      timeoutMs: e,
    });
  },
  su = async (A, e = _i) => {
    const t = await A.requestOutOfPageAd("interstitial");
    return Ki(t, {
      closedResult: () => !0,
      emptyResult: !1,
      terminalResult: null,
      timeoutMs: e,
    });
  };
var Ls;
(function (A) {
  (A.PLAYGAMA = "playgama"),
    (A.PLAYGAMA_SANDBOX = "playgama_sandbox"),
    (A.STANDALONE = "standalone"),
    (A.GAMEPUSH = "gamepush"),
    (A.YANDEX = "yandex"),
    (A.VK = "vk"),
    (A.OK = "ok"),
    (A.CRAZY_GAMES = "crazy_games"),
    (A.GAME_DISTRIBUTION = "game_distribution"),
    (A.FACEBOOK = "facebook"),
    (A.PLAYDECK = "playdeck"),
    (A.LAGGED = "lagged"),
    (A.MSN = "msn"),
    (A.MICROSOFT_STORE = "microsoft_store"),
    (A.QA_TOOL = "qa_tool"),
    (A.DISCORD = "discord"),
    (A.BITQUEST = "bitquest"),
    (A.HUAWEI = "huawei"),
    (A.JIO_GAMES = "jio_games"),
    (A.YOUTUBE = "youtube"),
    (A.GAMESNACKS = "gamesnacks"),
    (A.POKI = "poki"),
    (A.TELEGRAM = "telegram"),
    (A.Y8 = "y8"),
    (A.PORTAL = "portal"),
    (A.REDDIT = "reddit"),
    (A.XIAOMI = "xiaomi"),
    (A.TIKTOK = "tiktok"),
    (A.DLIGHTEK = "dlightek"),
    (A.SAMSUNG = "samsung"),
    (A.MOCK = "mock");
})(Ls || (Ls = {}));
var Ss;
(function (A) {
  (A.game_ready = "game_ready"),
    (A.in_game_loading_started = "in_game_loading_started"),
    (A.in_game_loading_stopped = "in_game_loading_stopped"),
    (A.gameplay_started = "gameplay_started"),
    (A.gameplay_stopped = "gameplay_stopped"),
    (A.player_got_achievement = "player_got_achievement");
})(Ss || (Ss = {}));
var bs;
(function (A) {
  (A.LOCAL_STORAGE = "local_storage"),
    (A.PLATFORM_INTERNAL = "platform_internal");
})(bs || (bs = {}));
var _s;
(function (A) {
  (A.LOADING = "loading"),
    (A.OPENED = "opened"),
    (A.REWARDED = "rewarded"),
    (A.CLOSED = "closed"),
    (A.FAILED = "failed"),
    (A.SHOWN = "shown"),
    (A.HIDDEN = "hidden");
})(_s || (_s = {}));
const Ti = "domino",
  Oi = Ti + "_saved_playgama_platform",
  Di = (A) => {
    const e = oA.getItem(Oi);
    return A && e ? `${v.PLAYGAMA}/${e}` : v.PLAYGAMA;
  },
  ou = (A) => {
    A && oA.setItem(Oi, A);
  },
  iu = (A) => {
    const e = Wt() ?? window.bridge;
    if (!e) return v.PLAYGAMA;
    const t = e.platform.id;
    return ou(t), Di(A);
  },
  au = "https://playgama.com/ads/partners.v0.2.js",
  Ri = async () =>
    gu()
      ? ru({
          src: au,
          retries: 3,
          delayMs: 500,
          onSuccess: async () => {
            var A;
            try {
              return typeof ((A = window.pgAds) == null ? void 0 : A.init) !=
                "function"
                ? (console.error("playgamaAdsInit pgAds.init not defined"), !1)
                : (await window.pgAds.init({
                    clid: "p_eb33da7c-c1cd-468e-82dc-79cf886d282a",
                    gameId: Ti ?? "unknown",
                  }),
                  !0);
            } catch (e) {
              return console.error("insertPlaygamaAdsScript", e), !1;
            }
          },
        })
      : !1;
let _r = !1;
const BC = async () => {
  if (_r) return !1;
  _r = !0;
  try {
    return (await Ri())
      ? await nu(window.pgAds)
      : { error: { notAvailable: !0 } };
  } catch (A) {
    return ie.error("playgamaShowRewarded error", A), null;
  } finally {
    _r = !1;
  }
};
let Kr = !1;
const cC = async () => {
    if (Kr) return !1;
    Kr = !0;
    try {
      return (await Ri()) ? await su(window.pgAds) : !1;
    } catch (A) {
      return ie.error("playgamaShowFullscreen error", A), null;
    } finally {
      Kr = !1;
    }
  },
  Ks = (A) => {
    const e = A == null ? void 0 : A.trim().toUpperCase();
    if (e === TA.MINIPLAY) return TA.MINIPLAY;
    if (e === TA.JOGOS) return TA.JOGOS;
  },
  Bu = (A, e) => {
    const t = Ks(A);
    if (t) return t;
    const r = new URLSearchParams(e);
    return Ks(r.get("_platform-key") ?? r.get("platform-key"));
  },
  xi = "domino_saved_custom_platform",
  cu = (A) => {
    const e = oA.getItem(xi);
    return A && e ? `${v.CUSTOM}/${e}` : v.CUSTOM;
  },
  uu = (A) => {
    A && oA.setItem(xi, A);
  },
  Ts = (A) => {
    var t, r;
    const e = Bu(
      (r = (t = window.gp) == null ? void 0 : t.platform) == null
        ? void 0
        : r.tag,
      window.location.search
    );
    return e && uu(e), cu(A);
  },
  qe = (A) => {
    var t, r, n, s;
    if (
      !(
        (r =
          (t = window == null ? void 0 : window.gp) == null
            ? void 0
            : t.platform) != null && r.type
      )
    ) {
      const o = hB();
      switch (o) {
        case v.NONE:
          break;
        case v.PLAYGAMA:
          return Di(A);
        case v.CUSTOM:
          return Ts(A);
        default:
          return o;
      }
    }
    const e =
      (s =
        (n = window == null ? void 0 : window.gp) == null
          ? void 0
          : n.platform) == null
        ? void 0
        : s.type;
    return (
      e && UB(e),
      e === v.PLAYGAMA
        ? iu(A)
        : e === v.CUSTOM
        ? Ts(A)
        : e ?? "unknown_platform"
    );
  },
  lu = () =>
    qe() !== v.CUSTOM ? TA.UNKNOWN : qe(!0).split("/")[1] ?? TA.UNKNOWN,
  Os = (A) => {
    var s, o;
    const e =
        ((o = (s = window.gp) == null ? void 0 : s.variables) == null
          ? void 0
          : o.state) || A,
      t = {},
      r = (i) => (Number.isNaN(Number(i)) ? i : Number(i)),
      n = new URLSearchParams(window.location.search);
    return (
      Object.keys(e).forEach((i) => {
        t[i] = r(e[i]);
      }),
      Object.keys(A).forEach((i) => {
        t[i] = e[i] ? r(e[i]) : r(A[i]);
      }),
      Object.keys(t).forEach((i) => {
        const a = n.get(`FLAG_${i}`);
        t[i] = a ? r(a) : t[i];
      }),
      t
    );
  },
  V = (A) => qe() === A,
  Mi = (A) => lu() === A,
  uC = () => V(v.CRAZY_GAMES),
  lC = () => V(v.OK),
  fC = () => V(v.SMART_MARKET),
  fu = () => V(v.VK),
  Ni = () => V(v.YANDEX),
  gC = () => V(v.VK_PLAY),
  wC = () => V(v.PLAY_DECK),
  QC = () => V(v.PLAYGAMA) || Ie(),
  dC = () => V(v.GAME_DISTRIBUTION),
  CC = () => V(v.GAME_MONETIZE),
  hC = () => V(v.GAME_PIX),
  UC = () => V(v.Y8),
  FC = () => V(v.COOLMATH),
  pC = () => V(v.BEELINE),
  EC = () => V(v.FOTOSTRANA),
  mC = () => V(v.WG_PLAYGROUND),
  vC = () => V(v.KONGREGATE),
  HC = () => V(v.PARTNER),
  IC = () => V(v.ANDROID),
  yC = () => V(v.GOOGLE_PLAY),
  LC = () => V(v.APP_GALLERY),
  SC = () => V(v.GALAXY_STORE),
  bC = () => V(v.ONE_STORE),
  _C = () => V(v.AMAZON_APPSTORE),
  KC = () => V(v.XIAOMI_GET_APPS),
  TC = () => V(v.AP_TO_IDE),
  OC = () => V(v.RU_STORE),
  DC = () => V(v.CUSTOM),
  gu = () => Mi(TA.MINIPLAY),
  RC = () => Mi(TA.JOGOS),
  Qn = () => {
    if (le()) return !1;
    const A = qe();
    return [
      v.ANDROID,
      v.GOOGLE_PLAY,
      v.APP_GALLERY,
      v.GALAXY_STORE,
      v.ONE_STORE,
      v.AMAZON_APPSTORE,
      v.XIAOMI_GET_APPS,
      v.AP_TO_IDE,
      v.RU_STORE,
    ].includes(A);
  },
  xC = () => {
    var A;
    if (!((A = window.location) != null && A.href)) return !1;
    try {
      return new URL(window.location.href).hostname.includes("discordsays.com");
    } catch {
      return !1;
    }
  },
  Wt = () => {
    var A, e;
    return le()
      ? window.PokiSDK
      : (e = (A = window.gp) == null ? void 0 : A.platform) == null
      ? void 0
      : e.getNativeSDK();
  },
  wu = () =>
    (() => {
      var e, t, r, n, s;
      if (Ni()) {
        const o = Wt();
        if (!o)
          return (t = (e = window.gp) == null ? void 0 : e.device) == null
            ? void 0
            : t.type;
        if (o.deviceInfo.isTV()) return KA.tv;
        if (o.deviceInfo.isTablet()) return KA.tablet;
        if (o.deviceInfo.isDesktop()) return KA.desktop;
        if (o.deviceInfo.isMobile()) return KA.mobile;
      }
      return (r = window.gp) != null && r.isMobile
        ? KA.mobile
        : (s = (n = window.gp) == null ? void 0 : n.device) == null
        ? void 0
        : s.type;
    })() ?? "unknown_device",
  Qu = () => {
    var A, e;
    return (e = (A = window.pgBridge) == null ? void 0 : A.platform) == null
      ? void 0
      : e.id;
  },
  MC = () => {
    var A, e;
    return (e = (A = window.pgBridge) == null ? void 0 : A.platform) == null
      ? void 0
      : e.language;
  },
  du = () => {
    var A, e;
    return (e = (A = window.pgBridge) == null ? void 0 : A.device) == null
      ? void 0
      : e.type;
  },
  NC = () => {
    var A, e;
    return (
      ((e = (A = window.pgBridge) == null ? void 0 : A.player) == null
        ? void 0
        : e.isAuthorized) || !1
    );
  },
  GC = () => {
    var A, e, t;
    return (t =
      (e = (A = window.pgBridge) == null ? void 0 : A.player) == null
        ? void 0
        : e.photos) == null
      ? void 0
      : t[0];
  },
  Cu = async (A) => {
    var r;
    const e = (r = window.pgBridge) == null ? void 0 : r.remoteConfig;
    if (!(e != null && e.isSupported) || typeof e.get != "function") return A;
    const t = await e.get();
    return t ? { ...A, ...t } : A;
  },
  Gi = async (A) => (le() ? Os(A) : Ie() ? Cu(A) : Os(A)),
  fA = (A) =>
    le() ? v.POKI : Ie() ? (A ? `${v.PLAYGAMA}/${Qu()}` : v.PLAYGAMA) : qe(A),
  te = () => (le() ? KA.desktop : Ie() ? du() : wu()),
  kC = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        _getDeviceType: te,
        _getPlatformFlags: Gi,
        _getPlatformType: fA,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
var dn;
(function (A) {
  (A.VKWebAppCheckNativeAds = "VKWebAppCheckNativeAds"),
    (A.VKWebAppShowNativeAds = "VKWebAppShowNativeAds"),
    (A.VKWebAppGetUserInfo = "VKWebAppGetUserInfo"),
    (A.VKWebAppTrackEvent = "VKWebAppTrackEvent"),
    (A.VKWebAppInit = "VKWebAppInit"),
    (A.VKWebAppGetAuthToken = "VKWebAppGetAuthToken"),
    (A.VKWebAppShowBannerAd = "VKWebAppShowBannerAd"),
    (A.VKWebAppCheckBannerAd = "VKWebAppCheckBannerAd");
})(dn || (dn = {}));
let xt,
  ki = !0,
  Pi = !1;
const hu = (A = {}) => {
    (xt =
      A.prefixedConversionEvents === void 0
        ? void 0
        : new Set(A.prefixedConversionEvents)),
      (ki = A.metrikaAbConfig !== "exposure_only"),
      (Pi = A.errorPayload === "category_v1");
  },
  Uu = (A) => (xt == null ? void 0 : xt.has(A)) ?? !0,
  Fu = () => ki,
  pu = () => Pi,
  Ds = (A, e) => {
    try {
      const t = A != null && typeof A == "object" ? A[e] : void 0;
      return typeof t == "string" ? t.slice(0, 1024) : "";
    } catch {
      return "";
    }
  },
  Eu = [
    [
      /QuotaExceededError|storage.*(?:quota|full)|(?:quota|full).*storage/i,
      "storage_quota",
      "storage",
      "write",
    ],
    [
      /error setting .*storage|storage.*(?:write|setItem)/i,
      "storage_write",
      "storage",
      "write",
    ],
    [/storage.*(?:read|getItem|parse)/i, "storage_read", "storage", "read"],
    [
      /savePlayer|loadPlayer|syncWithResult|player.*(?:save|sync)|progress/i,
      "progress_sync",
      "progress",
      "sync",
    ],
    [/purchase|payment|billing|\bbuy\b/i, "purchase", "payments", "purchase"],
    [
      /rewarded|interstitial|fullscreen|advert|banner|show.*\bad\b/i,
      "advertising",
      "ads",
      "delivery",
    ],
    [
      /\bpeer(?:js)?\b|peer.?connection|peer.?manager|webrtc|data.?channel|signall?ing|\brtc\b|\bp2p\b/i,
      "connection",
      "multiplayer",
      "connection",
    ],
    [/webgl|gltf|three\.|render|canvas/i, "rendering", "rendering", "render"],
    [
      /stockfish|worker|calcMove|multipv|\bengine\b/i,
      "engine",
      "engine",
      "runtime",
    ],
    [
      /network|failed to fetch|net::|xmlhttprequest|axios|request.*(?:fail|error|timeout)/i,
      "network",
      "network",
      "request",
    ],
    [/sdk.*init|init.*sdk/i, "sdk_init", "sdk", "init"],
    [/gamepush|smadapter|gamearena|\bsdk\b/i, "sdk", "sdk", "runtime"],
  ],
  mu = new Set([
    "Error",
    "TypeError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "URIError",
    "EvalError",
    "AggregateError",
    "QuotaExceededError",
    "AbortError",
    "TimeoutError",
  ]),
  vu = (A, e) => {
    const t = Ds(e, "name"),
      r = A.slice(0, 1024) + " " + Ds(e, "message") + " " + t,
      n = Eu.find(([s]) => s.test(r));
    return {
      error_schema: "category_v1",
      error_code: (n == null ? void 0 : n[1]) ?? "unexpected",
      subsystem: (n == null ? void 0 : n[2]) ?? "unknown",
      phase: (n == null ? void 0 : n[3]) ?? "unknown",
      error_kind: mu.has(t) ? t : "unknown",
    };
  };
/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */ /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var Cn =
  function (A, e) {
    return (
      (Cn =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, r) {
            t.__proto__ = r;
          }) ||
        function (t, r) {
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
        }),
      Cn(A, e)
    );
  };
function IA(A, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Class extends value " + String(e) + " is not a constructor or null"
    );
  Cn(A, e);
  function t() {
    this.constructor = A;
  }
  A.prototype =
    e === null ? Object.create(e) : ((t.prototype = e.prototype), new t());
}
var hn = function () {
  return (
    (hn =
      Object.assign ||
      function (e) {
        for (var t, r = 1, n = arguments.length; r < n; r++) {
          t = arguments[r];
          for (var s in t)
            Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
        }
        return e;
      }),
    hn.apply(this, arguments)
  );
};
function cA(A, e, t, r) {
  function n(s) {
    return s instanceof t
      ? s
      : new t(function (o) {
          o(s);
        });
  }
  return new (t || (t = Promise))(function (s, o) {
    function i(c) {
      try {
        B(r.next(c));
      } catch (u) {
        o(u);
      }
    }
    function a(c) {
      try {
        B(r.throw(c));
      } catch (u) {
        o(u);
      }
    }
    function B(c) {
      c.done ? s(c.value) : n(c.value).then(i, a);
    }
    B((r = r.apply(A, [])).next());
  });
}
function aA(A, e) {
  var t = {
      label: 0,
      sent: function () {
        if (s[0] & 1) throw s[1];
        return s[1];
      },
      trys: [],
      ops: [],
    },
    r,
    n,
    s,
    o;
  return (
    (o = { next: i(0), throw: i(1), return: i(2) }),
    typeof Symbol == "function" &&
      (o[Symbol.iterator] = function () {
        return this;
      }),
    o
  );
  function i(B) {
    return function (c) {
      return a([B, c]);
    };
  }
  function a(B) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (
          ((r = 1),
          n &&
            (s =
              B[0] & 2
                ? n.return
                : B[0]
                ? n.throw || ((s = n.return) && s.call(n), 0)
                : n.next) &&
            !(s = s.call(n, B[1])).done)
        )
          return s;
        switch (((n = 0), s && (B = [B[0] & 2, s.value]), B[0])) {
          case 0:
          case 1:
            s = B;
            break;
          case 4:
            return t.label++, { value: B[1], done: !1 };
          case 5:
            t.label++, (n = B[1]), (B = [0]);
            continue;
          case 7:
            (B = t.ops.pop()), t.trys.pop();
            continue;
          default:
            if (
              ((s = t.trys),
              !(s = s.length > 0 && s[s.length - 1]) &&
                (B[0] === 6 || B[0] === 2))
            ) {
              t = 0;
              continue;
            }
            if (B[0] === 3 && (!s || (B[1] > s[0] && B[1] < s[3]))) {
              t.label = B[1];
              break;
            }
            if (B[0] === 6 && t.label < s[1]) {
              (t.label = s[1]), (s = B);
              break;
            }
            if (s && t.label < s[2]) {
              (t.label = s[2]), t.ops.push(B);
              break;
            }
            s[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        B = e.call(A, t);
      } catch (c) {
        (B = [6, c]), (n = 0);
      } finally {
        r = s = 0;
      }
    if (B[0] & 5) throw B[1];
    return { value: B[0] ? B[1] : void 0, done: !0 };
  }
}
function Bt(A, e, t) {
  if (arguments.length === 2)
    for (var r = 0, n = e.length, s; r < n; r++)
      (s || !(r in e)) &&
        (s || (s = Array.prototype.slice.call(e, 0, r)), (s[r] = e[r]));
  return A.concat(s || e);
}
var PA = (function () {
    function A(e, t, r, n) {
      (this.left = e), (this.top = t), (this.width = r), (this.height = n);
    }
    return (
      (A.prototype.add = function (e, t, r, n) {
        return new A(
          this.left + e,
          this.top + t,
          this.width + r,
          this.height + n
        );
      }),
      (A.fromClientRect = function (e, t) {
        return new A(
          t.left + e.windowBounds.left,
          t.top + e.windowBounds.top,
          t.width,
          t.height
        );
      }),
      (A.fromDOMRectList = function (e, t) {
        var r = Array.from(t).find(function (n) {
          return n.width !== 0;
        });
        return r
          ? new A(
              r.left + e.windowBounds.left,
              r.top + e.windowBounds.top,
              r.width,
              r.height
            )
          : A.EMPTY;
      }),
      (A.EMPTY = new A(0, 0, 0, 0)),
      A
    );
  })(),
  lr = function (A, e) {
    return PA.fromClientRect(A, e.getBoundingClientRect());
  },
  Hu = function (A) {
    var e = A.body,
      t = A.documentElement;
    if (!e || !t) throw new Error("Unable to get document size");
    var r = Math.max(
        Math.max(e.scrollWidth, t.scrollWidth),
        Math.max(e.offsetWidth, t.offsetWidth),
        Math.max(e.clientWidth, t.clientWidth)
      ),
      n = Math.max(
        Math.max(e.scrollHeight, t.scrollHeight),
        Math.max(e.offsetHeight, t.offsetHeight),
        Math.max(e.clientHeight, t.clientHeight)
      );
    return new PA(0, 0, r, n);
  },
  fr = function (A) {
    for (var e = [], t = 0, r = A.length; t < r; ) {
      var n = A.charCodeAt(t++);
      if (n >= 55296 && n <= 56319 && t < r) {
        var s = A.charCodeAt(t++);
        (s & 64512) === 56320
          ? e.push(((n & 1023) << 10) + (s & 1023) + 65536)
          : (e.push(n), t--);
      } else e.push(n);
    }
    return e;
  },
  $ = function () {
    for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
    var t = A.length;
    if (!t) return "";
    for (var r = [], n = -1, s = ""; ++n < t; ) {
      var o = A[n];
      o <= 65535
        ? r.push(o)
        : ((o -= 65536), r.push((o >> 10) + 55296, (o % 1024) + 56320)),
        (n + 1 === t || r.length > 16384) &&
          ((s += String.fromCharCode.apply(String, r)), (r.length = 0));
    }
    return s;
  },
  Rs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  Iu = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var ct = 0; ct < Rs.length; ct++) Iu[Rs.charCodeAt(ct)] = ct;
var xs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  xe = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var ut = 0; ut < xs.length; ut++) xe[xs.charCodeAt(ut)] = ut;
var yu = function (A) {
    var e = A.length * 0.75,
      t = A.length,
      r,
      n = 0,
      s,
      o,
      i,
      a;
    A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
    var B =
        typeof ArrayBuffer < "u" &&
        typeof Uint8Array < "u" &&
        typeof Uint8Array.prototype.slice < "u"
          ? new ArrayBuffer(e)
          : new Array(e),
      c = Array.isArray(B) ? B : new Uint8Array(B);
    for (r = 0; r < t; r += 4)
      (s = xe[A.charCodeAt(r)]),
        (o = xe[A.charCodeAt(r + 1)]),
        (i = xe[A.charCodeAt(r + 2)]),
        (a = xe[A.charCodeAt(r + 3)]),
        (c[n++] = (s << 2) | (o >> 4)),
        (c[n++] = ((o & 15) << 4) | (i >> 2)),
        (c[n++] = ((i & 3) << 6) | (a & 63));
    return B;
  },
  Lu = function (A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 2)
      t.push((A[r + 1] << 8) | A[r]);
    return t;
  },
  Su = function (A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 4)
      t.push((A[r + 3] << 24) | (A[r + 2] << 16) | (A[r + 1] << 8) | A[r]);
    return t;
  },
  ae = 5,
  $n = 11,
  Tr = 2,
  bu = $n - ae,
  Vi = 65536 >> ae,
  _u = 1 << ae,
  Or = _u - 1,
  Ku = 1024 >> ae,
  Tu = Vi + Ku,
  Ou = Tu,
  Du = 32,
  Ru = Ou + Du,
  xu = 65536 >> $n,
  Mu = 1 << bu,
  Nu = Mu - 1,
  Ms = function (A, e, t) {
    return A.slice
      ? A.slice(e, t)
      : new Uint16Array(Array.prototype.slice.call(A, e, t));
  },
  Gu = function (A, e, t) {
    return A.slice
      ? A.slice(e, t)
      : new Uint32Array(Array.prototype.slice.call(A, e, t));
  },
  ku = function (A, e) {
    var t = yu(A),
      r = Array.isArray(t) ? Su(t) : new Uint32Array(t),
      n = Array.isArray(t) ? Lu(t) : new Uint16Array(t),
      s = 24,
      o = Ms(n, s / 2, r[4] / 2),
      i = r[5] === 2 ? Ms(n, (s + r[4]) / 2) : Gu(r, Math.ceil((s + r[4]) / 4));
    return new Pu(r[0], r[1], r[2], r[3], o, i);
  },
  Pu = (function () {
    function A(e, t, r, n, s, o) {
      (this.initialValue = e),
        (this.errorValue = t),
        (this.highStart = r),
        (this.highValueIndex = n),
        (this.index = s),
        (this.data = o);
    }
    return (
      (A.prototype.get = function (e) {
        var t;
        if (e >= 0) {
          if (e < 55296 || (e > 56319 && e <= 65535))
            return (
              (t = this.index[e >> ae]),
              (t = (t << Tr) + (e & Or)),
              this.data[t]
            );
          if (e <= 65535)
            return (
              (t = this.index[Vi + ((e - 55296) >> ae)]),
              (t = (t << Tr) + (e & Or)),
              this.data[t]
            );
          if (e < this.highStart)
            return (
              (t = Ru - xu + (e >> $n)),
              (t = this.index[t]),
              (t += (e >> ae) & Nu),
              (t = this.index[t]),
              (t = (t << Tr) + (e & Or)),
              this.data[t]
            );
          if (e <= 1114111) return this.data[this.highValueIndex];
        }
        return this.errorValue;
      }),
      A
    );
  })(),
  Ns = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  Vu = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var lt = 0; lt < Ns.length; lt++) Vu[Ns.charCodeAt(lt)] = lt;
var Xu =
    "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",
  Gs = 50,
  Ju = 1,
  Xi = 2,
  Ji = 3,
  Yu = 4,
  Wu = 5,
  ks = 7,
  Yi = 8,
  Ps = 9,
  ZA = 10,
  Un = 11,
  Vs = 12,
  Fn = 13,
  Zu = 14,
  Me = 15,
  pn = 16,
  ft = 17,
  Ke = 18,
  ju = 19,
  Xs = 20,
  En = 21,
  Te = 22,
  Dr = 23,
  fe = 24,
  dA = 25,
  Ne = 26,
  Ge = 27,
  ge = 28,
  zu = 29,
  re = 30,
  $u = 31,
  gt = 32,
  wt = 33,
  mn = 34,
  vn = 35,
  Hn = 36,
  At = 37,
  In = 38,
  Mt = 39,
  Nt = 40,
  Rr = 41,
  Wi = 42,
  qu = 43,
  Al = [9001, 65288],
  Zi = "!",
  R = "×",
  Qt = "÷",
  yn = ku(Xu),
  xA = [re, Hn],
  Ln = [Ju, Xi, Ji, Wu],
  ji = [ZA, Yi],
  Js = [Ge, Ne],
  el = Ln.concat(ji),
  Ys = [In, Mt, Nt, mn, vn],
  tl = [Me, Fn],
  rl = function (A, e) {
    e === void 0 && (e = "strict");
    var t = [],
      r = [],
      n = [];
    return (
      A.forEach(function (s, o) {
        var i = yn.get(s);
        if (
          (i > Gs ? (n.push(!0), (i -= Gs)) : n.push(!1),
          ["normal", "auto", "loose"].indexOf(e) !== -1 &&
            [8208, 8211, 12316, 12448].indexOf(s) !== -1)
        )
          return r.push(o), t.push(pn);
        if (i === Yu || i === Un) {
          if (o === 0) return r.push(o), t.push(re);
          var a = t[o - 1];
          return el.indexOf(a) === -1
            ? (r.push(r[o - 1]), t.push(a))
            : (r.push(o), t.push(re));
        }
        if ((r.push(o), i === $u)) return t.push(e === "strict" ? En : At);
        if (i === Wi || i === zu) return t.push(re);
        if (i === qu)
          return (s >= 131072 && s <= 196605) || (s >= 196608 && s <= 262141)
            ? t.push(At)
            : t.push(re);
        t.push(i);
      }),
      [r, t, n]
    );
  },
  xr = function (A, e, t, r) {
    var n = r[t];
    if (Array.isArray(A) ? A.indexOf(n) !== -1 : A === n)
      for (var s = t; s <= r.length; ) {
        s++;
        var o = r[s];
        if (o === e) return !0;
        if (o !== ZA) break;
      }
    if (n === ZA)
      for (var s = t; s > 0; ) {
        s--;
        var i = r[s];
        if (Array.isArray(A) ? A.indexOf(i) !== -1 : A === i)
          for (var a = t; a <= r.length; ) {
            a++;
            var o = r[a];
            if (o === e) return !0;
            if (o !== ZA) break;
          }
        if (i !== ZA) break;
      }
    return !1;
  },
  Ws = function (A, e) {
    for (var t = A; t >= 0; ) {
      var r = e[t];
      if (r === ZA) t--;
      else return r;
    }
    return 0;
  },
  nl = function (A, e, t, r, n) {
    if (t[r] === 0) return R;
    var s = r - 1;
    if (Array.isArray(n) && n[s] === !0) return R;
    var o = s - 1,
      i = s + 1,
      a = e[s],
      B = o >= 0 ? e[o] : 0,
      c = e[i];
    if (a === Xi && c === Ji) return R;
    if (Ln.indexOf(a) !== -1) return Zi;
    if (Ln.indexOf(c) !== -1 || ji.indexOf(c) !== -1) return R;
    if (Ws(s, e) === Yi) return Qt;
    if (
      yn.get(A[s]) === Un ||
      ((a === gt || a === wt) && yn.get(A[i]) === Un) ||
      a === ks ||
      c === ks ||
      a === Ps ||
      ([ZA, Fn, Me].indexOf(a) === -1 && c === Ps) ||
      [ft, Ke, ju, fe, ge].indexOf(c) !== -1 ||
      Ws(s, e) === Te ||
      xr(Dr, Te, s, e) ||
      xr([ft, Ke], En, s, e) ||
      xr(Vs, Vs, s, e)
    )
      return R;
    if (a === ZA) return Qt;
    if (a === Dr || c === Dr) return R;
    if (c === pn || a === pn) return Qt;
    if (
      [Fn, Me, En].indexOf(c) !== -1 ||
      a === Zu ||
      (B === Hn && tl.indexOf(a) !== -1) ||
      (a === ge && c === Hn) ||
      c === Xs ||
      (xA.indexOf(c) !== -1 && a === dA) ||
      (xA.indexOf(a) !== -1 && c === dA) ||
      (a === Ge && [At, gt, wt].indexOf(c) !== -1) ||
      ([At, gt, wt].indexOf(a) !== -1 && c === Ne) ||
      (xA.indexOf(a) !== -1 && Js.indexOf(c) !== -1) ||
      (Js.indexOf(a) !== -1 && xA.indexOf(c) !== -1) ||
      ([Ge, Ne].indexOf(a) !== -1 &&
        (c === dA || ([Te, Me].indexOf(c) !== -1 && e[i + 1] === dA))) ||
      ([Te, Me].indexOf(a) !== -1 && c === dA) ||
      (a === dA && [dA, ge, fe].indexOf(c) !== -1)
    )
      return R;
    if ([dA, ge, fe, ft, Ke].indexOf(c) !== -1)
      for (var u = s; u >= 0; ) {
        var f = e[u];
        if (f === dA) return R;
        if ([ge, fe].indexOf(f) !== -1) u--;
        else break;
      }
    if ([Ge, Ne].indexOf(c) !== -1)
      for (var u = [ft, Ke].indexOf(a) !== -1 ? o : s; u >= 0; ) {
        var f = e[u];
        if (f === dA) return R;
        if ([ge, fe].indexOf(f) !== -1) u--;
        else break;
      }
    if (
      (In === a && [In, Mt, mn, vn].indexOf(c) !== -1) ||
      ([Mt, mn].indexOf(a) !== -1 && [Mt, Nt].indexOf(c) !== -1) ||
      ([Nt, vn].indexOf(a) !== -1 && c === Nt) ||
      (Ys.indexOf(a) !== -1 && [Xs, Ne].indexOf(c) !== -1) ||
      (Ys.indexOf(c) !== -1 && a === Ge) ||
      (xA.indexOf(a) !== -1 && xA.indexOf(c) !== -1) ||
      (a === fe && xA.indexOf(c) !== -1) ||
      (xA.concat(dA).indexOf(a) !== -1 &&
        c === Te &&
        Al.indexOf(A[i]) === -1) ||
      (xA.concat(dA).indexOf(c) !== -1 && a === Ke)
    )
      return R;
    if (a === Rr && c === Rr) {
      for (var C = t[s], g = 1; C > 0 && (C--, e[C] === Rr); ) g++;
      if (g % 2 !== 0) return R;
    }
    return a === gt && c === wt ? R : Qt;
  },
  sl = function (A, e) {
    e || (e = { lineBreak: "normal", wordBreak: "normal" });
    var t = rl(A, e.lineBreak),
      r = t[0],
      n = t[1],
      s = t[2];
    (e.wordBreak === "break-all" || e.wordBreak === "break-word") &&
      (n = n.map(function (i) {
        return [dA, re, Wi].indexOf(i) !== -1 ? At : i;
      }));
    var o =
      e.wordBreak === "keep-all"
        ? s.map(function (i, a) {
            return i && A[a] >= 19968 && A[a] <= 40959;
          })
        : void 0;
    return [r, n, o];
  },
  ol = (function () {
    function A(e, t, r, n) {
      (this.codePoints = e),
        (this.required = t === Zi),
        (this.start = r),
        (this.end = n);
    }
    return (
      (A.prototype.slice = function () {
        return $.apply(void 0, this.codePoints.slice(this.start, this.end));
      }),
      A
    );
  })(),
  il = function (A, e) {
    var t = fr(A),
      r = sl(t, e),
      n = r[0],
      s = r[1],
      o = r[2],
      i = t.length,
      a = 0,
      B = 0;
    return {
      next: function () {
        if (B >= i) return { done: !0, value: null };
        for (var c = R; B < i && (c = nl(t, s, n, ++B, o)) === R; );
        if (c !== R || B === i) {
          var u = new ol(t, c, a, B);
          return (a = B), { value: u, done: !1 };
        }
        return { done: !0, value: null };
      },
    };
  },
  al = 1,
  Bl = 2,
  it = 4,
  Zs = 8,
  Zt = 10,
  js = 47,
  Xe = 92,
  cl = 9,
  ul = 32,
  dt = 34,
  Oe = 61,
  ll = 35,
  fl = 36,
  gl = 37,
  Ct = 39,
  ht = 40,
  De = 41,
  wl = 95,
  gA = 45,
  Ql = 33,
  dl = 60,
  Cl = 62,
  hl = 64,
  Ul = 91,
  Fl = 93,
  pl = 61,
  El = 123,
  Ut = 63,
  ml = 125,
  zs = 124,
  vl = 126,
  Hl = 128,
  $s = 65533,
  Mr = 42,
  se = 43,
  Il = 44,
  yl = 58,
  Ll = 59,
  et = 46,
  Sl = 0,
  bl = 8,
  _l = 11,
  Kl = 14,
  Tl = 31,
  Ol = 127,
  bA = -1,
  zi = 48,
  $i = 97,
  qi = 101,
  Dl = 102,
  Rl = 117,
  xl = 122,
  Aa = 65,
  ea = 69,
  ta = 70,
  Ml = 85,
  Nl = 90,
  BA = function (A) {
    return A >= zi && A <= 57;
  },
  Gl = function (A) {
    return A >= 55296 && A <= 57343;
  },
  we = function (A) {
    return BA(A) || (A >= Aa && A <= ta) || (A >= $i && A <= Dl);
  },
  kl = function (A) {
    return A >= $i && A <= xl;
  },
  Pl = function (A) {
    return A >= Aa && A <= Nl;
  },
  Vl = function (A) {
    return kl(A) || Pl(A);
  },
  Xl = function (A) {
    return A >= Hl;
  },
  Ft = function (A) {
    return A === Zt || A === cl || A === ul;
  },
  jt = function (A) {
    return Vl(A) || Xl(A) || A === wl;
  },
  qs = function (A) {
    return jt(A) || BA(A) || A === gA;
  },
  Jl = function (A) {
    return (A >= Sl && A <= bl) || A === _l || (A >= Kl && A <= Tl) || A === Ol;
  },
  WA = function (A, e) {
    return A !== Xe ? !1 : e !== Zt;
  },
  pt = function (A, e, t) {
    return A === gA ? jt(e) || WA(e, t) : jt(A) ? !0 : !!(A === Xe && WA(A, e));
  },
  Nr = function (A, e, t) {
    return A === se || A === gA
      ? BA(e)
        ? !0
        : e === et && BA(t)
      : BA(A === et ? e : A);
  },
  Yl = function (A) {
    var e = 0,
      t = 1;
    (A[e] === se || A[e] === gA) && (A[e] === gA && (t = -1), e++);
    for (var r = []; BA(A[e]); ) r.push(A[e++]);
    var n = r.length ? parseInt($.apply(void 0, r), 10) : 0;
    A[e] === et && e++;
    for (var s = []; BA(A[e]); ) s.push(A[e++]);
    var o = s.length,
      i = o ? parseInt($.apply(void 0, s), 10) : 0;
    (A[e] === ea || A[e] === qi) && e++;
    var a = 1;
    (A[e] === se || A[e] === gA) && (A[e] === gA && (a = -1), e++);
    for (var B = []; BA(A[e]); ) B.push(A[e++]);
    var c = B.length ? parseInt($.apply(void 0, B), 10) : 0;
    return t * (n + i * Math.pow(10, -o)) * Math.pow(10, a * c);
  },
  Wl = { type: 2 },
  Zl = { type: 3 },
  jl = { type: 4 },
  zl = { type: 13 },
  $l = { type: 8 },
  ql = { type: 21 },
  Af = { type: 9 },
  ef = { type: 10 },
  tf = { type: 11 },
  rf = { type: 12 },
  nf = { type: 14 },
  Et = { type: 23 },
  sf = { type: 1 },
  of = { type: 25 },
  af = { type: 24 },
  Bf = { type: 26 },
  cf = { type: 27 },
  uf = { type: 28 },
  lf = { type: 29 },
  ff = { type: 31 },
  Sn = { type: 32 },
  ra = (function () {
    function A() {
      this._value = [];
    }
    return (
      (A.prototype.write = function (e) {
        this._value = this._value.concat(fr(e));
      }),
      (A.prototype.read = function () {
        for (var e = [], t = this.consumeToken(); t !== Sn; )
          e.push(t), (t = this.consumeToken());
        return e;
      }),
      (A.prototype.consumeToken = function () {
        var e = this.consumeCodePoint();
        switch (e) {
          case dt:
            return this.consumeStringToken(dt);
          case ll:
            var t = this.peekCodePoint(0),
              r = this.peekCodePoint(1),
              n = this.peekCodePoint(2);
            if (qs(t) || WA(r, n)) {
              var s = pt(t, r, n) ? Bl : al,
                o = this.consumeName();
              return { type: 5, value: o, flags: s };
            }
            break;
          case fl:
            if (this.peekCodePoint(0) === Oe)
              return this.consumeCodePoint(), zl;
            break;
          case Ct:
            return this.consumeStringToken(Ct);
          case ht:
            return Wl;
          case De:
            return Zl;
          case Mr:
            if (this.peekCodePoint(0) === Oe)
              return this.consumeCodePoint(), nf;
            break;
          case se:
            if (Nr(e, this.peekCodePoint(0), this.peekCodePoint(1)))
              return this.reconsumeCodePoint(e), this.consumeNumericToken();
            break;
          case Il:
            return jl;
          case gA:
            var i = e,
              a = this.peekCodePoint(0),
              B = this.peekCodePoint(1);
            if (Nr(i, a, B))
              return this.reconsumeCodePoint(e), this.consumeNumericToken();
            if (pt(i, a, B))
              return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
            if (a === gA && B === Cl)
              return this.consumeCodePoint(), this.consumeCodePoint(), af;
            break;
          case et:
            if (Nr(e, this.peekCodePoint(0), this.peekCodePoint(1)))
              return this.reconsumeCodePoint(e), this.consumeNumericToken();
            break;
          case js:
            if (this.peekCodePoint(0) === Mr)
              for (this.consumeCodePoint(); ; ) {
                var c = this.consumeCodePoint();
                if (c === Mr && ((c = this.consumeCodePoint()), c === js))
                  return this.consumeToken();
                if (c === bA) return this.consumeToken();
              }
            break;
          case yl:
            return Bf;
          case Ll:
            return cf;
          case dl:
            if (
              this.peekCodePoint(0) === Ql &&
              this.peekCodePoint(1) === gA &&
              this.peekCodePoint(2) === gA
            )
              return this.consumeCodePoint(), this.consumeCodePoint(), of;
            break;
          case hl:
            var u = this.peekCodePoint(0),
              f = this.peekCodePoint(1),
              C = this.peekCodePoint(2);
            if (pt(u, f, C)) {
              var o = this.consumeName();
              return { type: 7, value: o };
            }
            break;
          case Ul:
            return uf;
          case Xe:
            if (WA(e, this.peekCodePoint(0)))
              return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
            break;
          case Fl:
            return lf;
          case pl:
            if (this.peekCodePoint(0) === Oe)
              return this.consumeCodePoint(), $l;
            break;
          case El:
            return tf;
          case ml:
            return rf;
          case Rl:
          case Ml:
            var g = this.peekCodePoint(0),
              Q = this.peekCodePoint(1);
            return (
              g === se &&
                (we(Q) || Q === Ut) &&
                (this.consumeCodePoint(), this.consumeUnicodeRangeToken()),
              this.reconsumeCodePoint(e),
              this.consumeIdentLikeToken()
            );
          case zs:
            if (this.peekCodePoint(0) === Oe)
              return this.consumeCodePoint(), Af;
            if (this.peekCodePoint(0) === zs)
              return this.consumeCodePoint(), ql;
            break;
          case vl:
            if (this.peekCodePoint(0) === Oe)
              return this.consumeCodePoint(), ef;
            break;
          case bA:
            return Sn;
        }
        return Ft(e)
          ? (this.consumeWhiteSpace(), ff)
          : BA(e)
          ? (this.reconsumeCodePoint(e), this.consumeNumericToken())
          : jt(e)
          ? (this.reconsumeCodePoint(e), this.consumeIdentLikeToken())
          : { type: 6, value: $(e) };
      }),
      (A.prototype.consumeCodePoint = function () {
        var e = this._value.shift();
        return typeof e > "u" ? -1 : e;
      }),
      (A.prototype.reconsumeCodePoint = function (e) {
        this._value.unshift(e);
      }),
      (A.prototype.peekCodePoint = function (e) {
        return e >= this._value.length ? -1 : this._value[e];
      }),
      (A.prototype.consumeUnicodeRangeToken = function () {
        for (var e = [], t = this.consumeCodePoint(); we(t) && e.length < 6; )
          e.push(t), (t = this.consumeCodePoint());
        for (var r = !1; t === Ut && e.length < 6; )
          e.push(t), (t = this.consumeCodePoint()), (r = !0);
        if (r) {
          var n = parseInt(
              $.apply(
                void 0,
                e.map(function (a) {
                  return a === Ut ? zi : a;
                })
              ),
              16
            ),
            s = parseInt(
              $.apply(
                void 0,
                e.map(function (a) {
                  return a === Ut ? ta : a;
                })
              ),
              16
            );
          return { type: 30, start: n, end: s };
        }
        var o = parseInt($.apply(void 0, e), 16);
        if (this.peekCodePoint(0) === gA && we(this.peekCodePoint(1))) {
          this.consumeCodePoint(), (t = this.consumeCodePoint());
          for (var i = []; we(t) && i.length < 6; )
            i.push(t), (t = this.consumeCodePoint());
          var s = parseInt($.apply(void 0, i), 16);
          return { type: 30, start: o, end: s };
        } else return { type: 30, start: o, end: o };
      }),
      (A.prototype.consumeIdentLikeToken = function () {
        var e = this.consumeName();
        return e.toLowerCase() === "url" && this.peekCodePoint(0) === ht
          ? (this.consumeCodePoint(), this.consumeUrlToken())
          : this.peekCodePoint(0) === ht
          ? (this.consumeCodePoint(), { type: 19, value: e })
          : { type: 20, value: e };
      }),
      (A.prototype.consumeUrlToken = function () {
        var e = [];
        if ((this.consumeWhiteSpace(), this.peekCodePoint(0) === bA))
          return { type: 22, value: "" };
        var t = this.peekCodePoint(0);
        if (t === Ct || t === dt) {
          var r = this.consumeStringToken(this.consumeCodePoint());
          return r.type === 0 &&
            (this.consumeWhiteSpace(),
            this.peekCodePoint(0) === bA || this.peekCodePoint(0) === De)
            ? (this.consumeCodePoint(), { type: 22, value: r.value })
            : (this.consumeBadUrlRemnants(), Et);
        }
        for (;;) {
          var n = this.consumeCodePoint();
          if (n === bA || n === De)
            return { type: 22, value: $.apply(void 0, e) };
          if (Ft(n))
            return (
              this.consumeWhiteSpace(),
              this.peekCodePoint(0) === bA || this.peekCodePoint(0) === De
                ? (this.consumeCodePoint(),
                  { type: 22, value: $.apply(void 0, e) })
                : (this.consumeBadUrlRemnants(), Et)
            );
          if (n === dt || n === Ct || n === ht || Jl(n))
            return this.consumeBadUrlRemnants(), Et;
          if (n === Xe)
            if (WA(n, this.peekCodePoint(0)))
              e.push(this.consumeEscapedCodePoint());
            else return this.consumeBadUrlRemnants(), Et;
          else e.push(n);
        }
      }),
      (A.prototype.consumeWhiteSpace = function () {
        for (; Ft(this.peekCodePoint(0)); ) this.consumeCodePoint();
      }),
      (A.prototype.consumeBadUrlRemnants = function () {
        for (;;) {
          var e = this.consumeCodePoint();
          if (e === De || e === bA) return;
          WA(e, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
        }
      }),
      (A.prototype.consumeStringSlice = function (e) {
        for (var t = 5e4, r = ""; e > 0; ) {
          var n = Math.min(t, e);
          (r += $.apply(void 0, this._value.splice(0, n))), (e -= n);
        }
        return this._value.shift(), r;
      }),
      (A.prototype.consumeStringToken = function (e) {
        var t = "",
          r = 0;
        do {
          var n = this._value[r];
          if (n === bA || n === void 0 || n === e)
            return (t += this.consumeStringSlice(r)), { type: 0, value: t };
          if (n === Zt) return this._value.splice(0, r), sf;
          if (n === Xe) {
            var s = this._value[r + 1];
            s !== bA &&
              s !== void 0 &&
              (s === Zt
                ? ((t += this.consumeStringSlice(r)),
                  (r = -1),
                  this._value.shift())
                : WA(n, s) &&
                  ((t += this.consumeStringSlice(r)),
                  (t += $(this.consumeEscapedCodePoint())),
                  (r = -1)));
          }
          r++;
        } while (!0);
      }),
      (A.prototype.consumeNumber = function () {
        var e = [],
          t = it,
          r = this.peekCodePoint(0);
        for (
          (r === se || r === gA) && e.push(this.consumeCodePoint());
          BA(this.peekCodePoint(0));

        )
          e.push(this.consumeCodePoint());
        r = this.peekCodePoint(0);
        var n = this.peekCodePoint(1);
        if (r === et && BA(n))
          for (
            e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Zs;
            BA(this.peekCodePoint(0));

          )
            e.push(this.consumeCodePoint());
        (r = this.peekCodePoint(0)), (n = this.peekCodePoint(1));
        var s = this.peekCodePoint(2);
        if (
          (r === ea || r === qi) &&
          (((n === se || n === gA) && BA(s)) || BA(n))
        )
          for (
            e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Zs;
            BA(this.peekCodePoint(0));

          )
            e.push(this.consumeCodePoint());
        return [Yl(e), t];
      }),
      (A.prototype.consumeNumericToken = function () {
        var e = this.consumeNumber(),
          t = e[0],
          r = e[1],
          n = this.peekCodePoint(0),
          s = this.peekCodePoint(1),
          o = this.peekCodePoint(2);
        if (pt(n, s, o)) {
          var i = this.consumeName();
          return { type: 15, number: t, flags: r, unit: i };
        }
        return n === gl
          ? (this.consumeCodePoint(), { type: 16, number: t, flags: r })
          : { type: 17, number: t, flags: r };
      }),
      (A.prototype.consumeEscapedCodePoint = function () {
        var e = this.consumeCodePoint();
        if (we(e)) {
          for (var t = $(e); we(this.peekCodePoint(0)) && t.length < 6; )
            t += $(this.consumeCodePoint());
          Ft(this.peekCodePoint(0)) && this.consumeCodePoint();
          var r = parseInt(t, 16);
          return r === 0 || Gl(r) || r > 1114111 ? $s : r;
        }
        return e === bA ? $s : e;
      }),
      (A.prototype.consumeName = function () {
        for (var e = ""; ; ) {
          var t = this.consumeCodePoint();
          if (qs(t)) e += $(t);
          else if (WA(t, this.peekCodePoint(0)))
            e += $(this.consumeEscapedCodePoint());
          else return this.reconsumeCodePoint(t), e;
        }
      }),
      A
    );
  })(),
  na = (function () {
    function A(e) {
      this._tokens = e;
    }
    return (
      (A.create = function (e) {
        var t = new ra();
        return t.write(e), new A(t.read());
      }),
      (A.parseValue = function (e) {
        return A.create(e).parseComponentValue();
      }),
      (A.parseValues = function (e) {
        return A.create(e).parseComponentValues();
      }),
      (A.prototype.parseComponentValue = function () {
        for (var e = this.consumeToken(); e.type === 31; )
          e = this.consumeToken();
        if (e.type === 32)
          throw new SyntaxError(
            "Error parsing CSS component value, unexpected EOF"
          );
        this.reconsumeToken(e);
        var t = this.consumeComponentValue();
        do e = this.consumeToken();
        while (e.type === 31);
        if (e.type === 32) return t;
        throw new SyntaxError(
          "Error parsing CSS component value, multiple values found when expecting only one"
        );
      }),
      (A.prototype.parseComponentValues = function () {
        for (var e = []; ; ) {
          var t = this.consumeComponentValue();
          if (t.type === 32) return e;
          e.push(t), e.push();
        }
      }),
      (A.prototype.consumeComponentValue = function () {
        var e = this.consumeToken();
        switch (e.type) {
          case 11:
          case 28:
          case 2:
            return this.consumeSimpleBlock(e.type);
          case 19:
            return this.consumeFunction(e);
        }
        return e;
      }),
      (A.prototype.consumeSimpleBlock = function (e) {
        for (var t = { type: e, values: [] }, r = this.consumeToken(); ; ) {
          if (r.type === 32 || wf(r, e)) return t;
          this.reconsumeToken(r),
            t.values.push(this.consumeComponentValue()),
            (r = this.consumeToken());
        }
      }),
      (A.prototype.consumeFunction = function (e) {
        for (var t = { name: e.value, values: [], type: 18 }; ; ) {
          var r = this.consumeToken();
          if (r.type === 32 || r.type === 3) return t;
          this.reconsumeToken(r), t.values.push(this.consumeComponentValue());
        }
      }),
      (A.prototype.consumeToken = function () {
        var e = this._tokens.shift();
        return typeof e > "u" ? Sn : e;
      }),
      (A.prototype.reconsumeToken = function (e) {
        this._tokens.unshift(e);
      }),
      A
    );
  })(),
  at = function (A) {
    return A.type === 15;
  },
  Se = function (A) {
    return A.type === 17;
  },
  P = function (A) {
    return A.type === 20;
  },
  gf = function (A) {
    return A.type === 0;
  },
  bn = function (A, e) {
    return P(A) && A.value === e;
  },
  sa = function (A) {
    return A.type !== 31;
  },
  ve = function (A) {
    return A.type !== 31 && A.type !== 4;
  },
  OA = function (A) {
    var e = [],
      t = [];
    return (
      A.forEach(function (r) {
        if (r.type === 4) {
          if (t.length === 0)
            throw new Error("Error parsing function args, zero tokens for arg");
          e.push(t), (t = []);
          return;
        }
        r.type !== 31 && t.push(r);
      }),
      t.length && e.push(t),
      e
    );
  },
  wf = function (A, e) {
    return (e === 11 && A.type === 12) || (e === 28 && A.type === 29)
      ? !0
      : e === 2 && A.type === 3;
  },
  Ae = function (A) {
    return A.type === 17 || A.type === 15;
  },
  q = function (A) {
    return A.type === 16 || Ae(A);
  },
  oa = function (A) {
    return A.length > 1 ? [A[0], A[1]] : [A[0]];
  },
  iA = { type: 17, number: 0, flags: it },
  qn = { type: 16, number: 50, flags: it },
  jA = { type: 16, number: 100, flags: it },
  ke = function (A, e, t) {
    var r = A[0],
      n = A[1];
    return [J(r, e), J(typeof n < "u" ? n : r, t)];
  },
  J = function (A, e) {
    if (A.type === 16) return (A.number / 100) * e;
    if (at(A))
      switch (A.unit) {
        case "rem":
        case "em":
          return 16 * A.number;
        case "px":
        default:
          return A.number;
      }
    return A.number;
  },
  ia = "deg",
  aa = "grad",
  Ba = "rad",
  ca = "turn",
  gr = {
    name: "angle",
    parse: function (A, e) {
      if (e.type === 15)
        switch (e.unit) {
          case ia:
            return (Math.PI * e.number) / 180;
          case aa:
            return (Math.PI / 200) * e.number;
          case Ba:
            return e.number;
          case ca:
            return Math.PI * 2 * e.number;
        }
      throw new Error("Unsupported angle type");
    },
  },
  ua = function (A) {
    return (
      A.type === 15 &&
      (A.unit === ia || A.unit === aa || A.unit === Ba || A.unit === ca)
    );
  },
  la = function (A) {
    var e = A.filter(P)
      .map(function (t) {
        return t.value;
      })
      .join(" ");
    switch (e) {
      case "to bottom right":
      case "to right bottom":
      case "left top":
      case "top left":
        return [iA, iA];
      case "to top":
      case "bottom":
        return FA(0);
      case "to bottom left":
      case "to left bottom":
      case "right top":
      case "top right":
        return [iA, jA];
      case "to right":
      case "left":
        return FA(90);
      case "to top left":
      case "to left top":
      case "right bottom":
      case "bottom right":
        return [jA, jA];
      case "to bottom":
      case "top":
        return FA(180);
      case "to top right":
      case "to right top":
      case "left bottom":
      case "bottom left":
        return [jA, iA];
      case "to left":
      case "right":
        return FA(270);
    }
    return 0;
  },
  FA = function (A) {
    return (Math.PI * A) / 180;
  },
  $A = {
    name: "color",
    parse: function (A, e) {
      if (e.type === 18) {
        var t = Qf[e.name];
        if (typeof t > "u")
          throw new Error(
            'Attempting to parse an unsupported color function "' + e.name + '"'
          );
        return t(A, e.values);
      }
      if (e.type === 5) {
        if (e.value.length === 3) {
          var r = e.value.substring(0, 1),
            n = e.value.substring(1, 2),
            s = e.value.substring(2, 3);
          return zA(
            parseInt(r + r, 16),
            parseInt(n + n, 16),
            parseInt(s + s, 16),
            1
          );
        }
        if (e.value.length === 4) {
          var r = e.value.substring(0, 1),
            n = e.value.substring(1, 2),
            s = e.value.substring(2, 3),
            o = e.value.substring(3, 4);
          return zA(
            parseInt(r + r, 16),
            parseInt(n + n, 16),
            parseInt(s + s, 16),
            parseInt(o + o, 16) / 255
          );
        }
        if (e.value.length === 6) {
          var r = e.value.substring(0, 2),
            n = e.value.substring(2, 4),
            s = e.value.substring(4, 6);
          return zA(parseInt(r, 16), parseInt(n, 16), parseInt(s, 16), 1);
        }
        if (e.value.length === 8) {
          var r = e.value.substring(0, 2),
            n = e.value.substring(2, 4),
            s = e.value.substring(4, 6),
            o = e.value.substring(6, 8);
          return zA(
            parseInt(r, 16),
            parseInt(n, 16),
            parseInt(s, 16),
            parseInt(o, 16) / 255
          );
        }
      }
      if (e.type === 20) {
        var i = kA[e.value.toUpperCase()];
        if (typeof i < "u") return i;
      }
      return kA.TRANSPARENT;
    },
  },
  qA = function (A) {
    return (255 & A) === 0;
  },
  rA = function (A) {
    var e = 255 & A,
      t = 255 & (A >> 8),
      r = 255 & (A >> 16),
      n = 255 & (A >> 24);
    return e < 255
      ? "rgba(" + n + "," + r + "," + t + "," + e / 255 + ")"
      : "rgb(" + n + "," + r + "," + t + ")";
  },
  zA = function (A, e, t, r) {
    return (
      ((A << 24) | (e << 16) | (t << 8) | (Math.round(r * 255) << 0)) >>> 0
    );
  },
  Ao = function (A, e) {
    if (A.type === 17) return A.number;
    if (A.type === 16) {
      var t = e === 3 ? 1 : 255;
      return e === 3 ? (A.number / 100) * t : Math.round((A.number / 100) * t);
    }
    return 0;
  },
  eo = function (A, e) {
    var t = e.filter(ve);
    if (t.length === 3) {
      var r = t.map(Ao),
        n = r[0],
        s = r[1],
        o = r[2];
      return zA(n, s, o, 1);
    }
    if (t.length === 4) {
      var i = t.map(Ao),
        n = i[0],
        s = i[1],
        o = i[2],
        a = i[3];
      return zA(n, s, o, a);
    }
    return 0;
  };
function Gr(A, e, t) {
  return (
    t < 0 && (t += 1),
    t >= 1 && (t -= 1),
    t < 1 / 6
      ? (e - A) * t * 6 + A
      : t < 1 / 2
      ? e
      : t < 2 / 3
      ? (e - A) * 6 * (2 / 3 - t) + A
      : A
  );
}
var to = function (A, e) {
    var t = e.filter(ve),
      r = t[0],
      n = t[1],
      s = t[2],
      o = t[3],
      i = (r.type === 17 ? FA(r.number) : gr.parse(A, r)) / (Math.PI * 2),
      a = q(n) ? n.number / 100 : 0,
      B = q(s) ? s.number / 100 : 0,
      c = typeof o < "u" && q(o) ? J(o, 1) : 1;
    if (a === 0) return zA(B * 255, B * 255, B * 255, 1);
    var u = B <= 0.5 ? B * (a + 1) : B + a - B * a,
      f = B * 2 - u,
      C = Gr(f, u, i + 1 / 3),
      g = Gr(f, u, i),
      Q = Gr(f, u, i - 1 / 3);
    return zA(C * 255, g * 255, Q * 255, c);
  },
  Qf = { hsl: to, hsla: to, rgb: eo, rgba: eo },
  Je = function (A, e) {
    return $A.parse(A, na.create(e).parseComponentValue());
  },
  kA = {
    ALICEBLUE: 4042850303,
    ANTIQUEWHITE: 4209760255,
    AQUA: 16777215,
    AQUAMARINE: 2147472639,
    AZURE: 4043309055,
    BEIGE: 4126530815,
    BISQUE: 4293182719,
    BLACK: 255,
    BLANCHEDALMOND: 4293643775,
    BLUE: 65535,
    BLUEVIOLET: 2318131967,
    BROWN: 2771004159,
    BURLYWOOD: 3736635391,
    CADETBLUE: 1604231423,
    CHARTREUSE: 2147418367,
    CHOCOLATE: 3530104575,
    CORAL: 4286533887,
    CORNFLOWERBLUE: 1687547391,
    CORNSILK: 4294499583,
    CRIMSON: 3692313855,
    CYAN: 16777215,
    DARKBLUE: 35839,
    DARKCYAN: 9145343,
    DARKGOLDENROD: 3095837695,
    DARKGRAY: 2846468607,
    DARKGREEN: 6553855,
    DARKGREY: 2846468607,
    DARKKHAKI: 3182914559,
    DARKMAGENTA: 2332068863,
    DARKOLIVEGREEN: 1433087999,
    DARKORANGE: 4287365375,
    DARKORCHID: 2570243327,
    DARKRED: 2332033279,
    DARKSALMON: 3918953215,
    DARKSEAGREEN: 2411499519,
    DARKSLATEBLUE: 1211993087,
    DARKSLATEGRAY: 793726975,
    DARKSLATEGREY: 793726975,
    DARKTURQUOISE: 13554175,
    DARKVIOLET: 2483082239,
    DEEPPINK: 4279538687,
    DEEPSKYBLUE: 12582911,
    DIMGRAY: 1768516095,
    DIMGREY: 1768516095,
    DODGERBLUE: 512819199,
    FIREBRICK: 2988581631,
    FLORALWHITE: 4294635775,
    FORESTGREEN: 579543807,
    FUCHSIA: 4278255615,
    GAINSBORO: 3705462015,
    GHOSTWHITE: 4177068031,
    GOLD: 4292280575,
    GOLDENROD: 3668254975,
    GRAY: 2155905279,
    GREEN: 8388863,
    GREENYELLOW: 2919182335,
    GREY: 2155905279,
    HONEYDEW: 4043305215,
    HOTPINK: 4285117695,
    INDIANRED: 3445382399,
    INDIGO: 1258324735,
    IVORY: 4294963455,
    KHAKI: 4041641215,
    LAVENDER: 3873897215,
    LAVENDERBLUSH: 4293981695,
    LAWNGREEN: 2096890111,
    LEMONCHIFFON: 4294626815,
    LIGHTBLUE: 2916673279,
    LIGHTCORAL: 4034953471,
    LIGHTCYAN: 3774873599,
    LIGHTGOLDENRODYELLOW: 4210742015,
    LIGHTGRAY: 3553874943,
    LIGHTGREEN: 2431553791,
    LIGHTGREY: 3553874943,
    LIGHTPINK: 4290167295,
    LIGHTSALMON: 4288707327,
    LIGHTSEAGREEN: 548580095,
    LIGHTSKYBLUE: 2278488831,
    LIGHTSLATEGRAY: 2005441023,
    LIGHTSLATEGREY: 2005441023,
    LIGHTSTEELBLUE: 2965692159,
    LIGHTYELLOW: 4294959359,
    LIME: 16711935,
    LIMEGREEN: 852308735,
    LINEN: 4210091775,
    MAGENTA: 4278255615,
    MAROON: 2147483903,
    MEDIUMAQUAMARINE: 1724754687,
    MEDIUMBLUE: 52735,
    MEDIUMORCHID: 3126187007,
    MEDIUMPURPLE: 2473647103,
    MEDIUMSEAGREEN: 1018393087,
    MEDIUMSLATEBLUE: 2070474495,
    MEDIUMSPRINGGREEN: 16423679,
    MEDIUMTURQUOISE: 1221709055,
    MEDIUMVIOLETRED: 3340076543,
    MIDNIGHTBLUE: 421097727,
    MINTCREAM: 4127193855,
    MISTYROSE: 4293190143,
    MOCCASIN: 4293178879,
    NAVAJOWHITE: 4292783615,
    NAVY: 33023,
    OLDLACE: 4260751103,
    OLIVE: 2155872511,
    OLIVEDRAB: 1804477439,
    ORANGE: 4289003775,
    ORANGERED: 4282712319,
    ORCHID: 3664828159,
    PALEGOLDENROD: 4008225535,
    PALEGREEN: 2566625535,
    PALETURQUOISE: 2951671551,
    PALEVIOLETRED: 3681588223,
    PAPAYAWHIP: 4293907967,
    PEACHPUFF: 4292524543,
    PERU: 3448061951,
    PINK: 4290825215,
    PLUM: 3718307327,
    POWDERBLUE: 2967529215,
    PURPLE: 2147516671,
    REBECCAPURPLE: 1714657791,
    RED: 4278190335,
    ROSYBROWN: 3163525119,
    ROYALBLUE: 1097458175,
    SADDLEBROWN: 2336560127,
    SALMON: 4202722047,
    SANDYBROWN: 4104413439,
    SEAGREEN: 780883967,
    SEASHELL: 4294307583,
    SIENNA: 2689740287,
    SILVER: 3233857791,
    SKYBLUE: 2278484991,
    SLATEBLUE: 1784335871,
    SLATEGRAY: 1887473919,
    SLATEGREY: 1887473919,
    SNOW: 4294638335,
    SPRINGGREEN: 16744447,
    STEELBLUE: 1182971135,
    TAN: 3535047935,
    TEAL: 8421631,
    THISTLE: 3636451583,
    TOMATO: 4284696575,
    TRANSPARENT: 0,
    TURQUOISE: 1088475391,
    VIOLET: 4001558271,
    WHEAT: 4125012991,
    WHITE: 4294967295,
    WHITESMOKE: 4126537215,
    YELLOW: 4294902015,
    YELLOWGREEN: 2597139199,
  },
  df = {
    name: "background-clip",
    initialValue: "border-box",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return e.map(function (t) {
        if (P(t))
          switch (t.value) {
            case "padding-box":
              return 1;
            case "content-box":
              return 2;
          }
        return 0;
      });
    },
  },
  Cf = {
    name: "background-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color",
  },
  wr = function (A, e) {
    var t = $A.parse(A, e[0]),
      r = e[1];
    return r && q(r) ? { color: t, stop: r } : { color: t, stop: null };
  },
  ro = function (A, e) {
    var t = A[0],
      r = A[A.length - 1];
    t.stop === null && (t.stop = iA), r.stop === null && (r.stop = jA);
    for (var n = [], s = 0, o = 0; o < A.length; o++) {
      var i = A[o].stop;
      if (i !== null) {
        var a = J(i, e);
        a > s ? n.push(a) : n.push(s), (s = a);
      } else n.push(null);
    }
    for (var B = null, o = 0; o < n.length; o++) {
      var c = n[o];
      if (c === null) B === null && (B = o);
      else if (B !== null) {
        for (
          var u = o - B, f = n[B - 1], C = (c - f) / (u + 1), g = 1;
          g <= u;
          g++
        )
          n[B + g - 1] = C * g;
        B = null;
      }
    }
    return A.map(function (Q, w) {
      var U = Q.color;
      return { color: U, stop: Math.max(Math.min(1, n[w] / e), 0) };
    });
  },
  hf = function (A, e, t) {
    var r = e / 2,
      n = t / 2,
      s = J(A[0], e) - r,
      o = n - J(A[1], t);
    return (Math.atan2(o, s) + Math.PI * 2) % (Math.PI * 2);
  },
  Uf = function (A, e, t) {
    var r = typeof A == "number" ? A : hf(A, e, t),
      n = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)),
      s = e / 2,
      o = t / 2,
      i = n / 2,
      a = Math.sin(r - Math.PI / 2) * i,
      B = Math.cos(r - Math.PI / 2) * i;
    return [n, s - B, s + B, o - a, o + a];
  },
  EA = function (A, e) {
    return Math.sqrt(A * A + e * e);
  },
  no = function (A, e, t, r, n) {
    var s = [
      [0, 0],
      [0, e],
      [A, 0],
      [A, e],
    ];
    return s.reduce(
      function (o, i) {
        var a = i[0],
          B = i[1],
          c = EA(t - a, r - B);
        return (n ? c < o.optimumDistance : c > o.optimumDistance)
          ? { optimumCorner: i, optimumDistance: c }
          : o;
      },
      { optimumDistance: n ? 1 / 0 : -1 / 0, optimumCorner: null }
    ).optimumCorner;
  },
  Ff = function (A, e, t, r, n) {
    var s = 0,
      o = 0;
    switch (A.size) {
      case 0:
        A.shape === 0
          ? (s = o =
              Math.min(
                Math.abs(e),
                Math.abs(e - r),
                Math.abs(t),
                Math.abs(t - n)
              ))
          : A.shape === 1 &&
            ((s = Math.min(Math.abs(e), Math.abs(e - r))),
            (o = Math.min(Math.abs(t), Math.abs(t - n))));
        break;
      case 2:
        if (A.shape === 0)
          s = o = Math.min(
            EA(e, t),
            EA(e, t - n),
            EA(e - r, t),
            EA(e - r, t - n)
          );
        else if (A.shape === 1) {
          var i =
              Math.min(Math.abs(t), Math.abs(t - n)) /
              Math.min(Math.abs(e), Math.abs(e - r)),
            a = no(r, n, e, t, !0),
            B = a[0],
            c = a[1];
          (s = EA(B - e, (c - t) / i)), (o = i * s);
        }
        break;
      case 1:
        A.shape === 0
          ? (s = o =
              Math.max(
                Math.abs(e),
                Math.abs(e - r),
                Math.abs(t),
                Math.abs(t - n)
              ))
          : A.shape === 1 &&
            ((s = Math.max(Math.abs(e), Math.abs(e - r))),
            (o = Math.max(Math.abs(t), Math.abs(t - n))));
        break;
      case 3:
        if (A.shape === 0)
          s = o = Math.max(
            EA(e, t),
            EA(e, t - n),
            EA(e - r, t),
            EA(e - r, t - n)
          );
        else if (A.shape === 1) {
          var i =
              Math.max(Math.abs(t), Math.abs(t - n)) /
              Math.max(Math.abs(e), Math.abs(e - r)),
            u = no(r, n, e, t, !1),
            B = u[0],
            c = u[1];
          (s = EA(B - e, (c - t) / i)), (o = i * s);
        }
        break;
    }
    return (
      Array.isArray(A.size) &&
        ((s = J(A.size[0], r)),
        (o = A.size.length === 2 ? J(A.size[1], n) : s)),
      [s, o]
    );
  },
  pf = function (A, e) {
    var t = FA(180),
      r = [];
    return (
      OA(e).forEach(function (n, s) {
        if (s === 0) {
          var o = n[0];
          if (o.type === 20 && o.value === "to") {
            t = la(n);
            return;
          } else if (ua(o)) {
            t = gr.parse(A, o);
            return;
          }
        }
        var i = wr(A, n);
        r.push(i);
      }),
      { angle: t, stops: r, type: 1 }
    );
  },
  mt = function (A, e) {
    var t = FA(180),
      r = [];
    return (
      OA(e).forEach(function (n, s) {
        if (s === 0) {
          var o = n[0];
          if (
            o.type === 20 &&
            ["top", "left", "right", "bottom"].indexOf(o.value) !== -1
          ) {
            t = la(n);
            return;
          } else if (ua(o)) {
            t = (gr.parse(A, o) + FA(270)) % FA(360);
            return;
          }
        }
        var i = wr(A, n);
        r.push(i);
      }),
      { angle: t, stops: r, type: 1 }
    );
  },
  Ef = function (A, e) {
    var t = FA(180),
      r = [],
      n = 1,
      s = 0,
      o = 3,
      i = [];
    return (
      OA(e).forEach(function (a, B) {
        var c = a[0];
        if (B === 0) {
          if (P(c) && c.value === "linear") {
            n = 1;
            return;
          } else if (P(c) && c.value === "radial") {
            n = 2;
            return;
          }
        }
        if (c.type === 18) {
          if (c.name === "from") {
            var u = $A.parse(A, c.values[0]);
            r.push({ stop: iA, color: u });
          } else if (c.name === "to") {
            var u = $A.parse(A, c.values[0]);
            r.push({ stop: jA, color: u });
          } else if (c.name === "color-stop") {
            var f = c.values.filter(ve);
            if (f.length === 2) {
              var u = $A.parse(A, f[1]),
                C = f[0];
              Se(C) &&
                r.push({
                  stop: { type: 16, number: C.number * 100, flags: C.flags },
                  color: u,
                });
            }
          }
        }
      }),
      n === 1
        ? { angle: (t + FA(180)) % FA(360), stops: r, type: n }
        : { size: o, shape: s, stops: r, position: i, type: n }
    );
  },
  fa = "closest-side",
  ga = "farthest-side",
  wa = "closest-corner",
  Qa = "farthest-corner",
  da = "circle",
  Ca = "ellipse",
  ha = "cover",
  Ua = "contain",
  mf = function (A, e) {
    var t = 0,
      r = 3,
      n = [],
      s = [];
    return (
      OA(e).forEach(function (o, i) {
        var a = !0;
        if (i === 0) {
          var B = !1;
          a = o.reduce(function (u, f) {
            if (B)
              if (P(f))
                switch (f.value) {
                  case "center":
                    return s.push(qn), u;
                  case "top":
                  case "left":
                    return s.push(iA), u;
                  case "right":
                  case "bottom":
                    return s.push(jA), u;
                }
              else (q(f) || Ae(f)) && s.push(f);
            else if (P(f))
              switch (f.value) {
                case da:
                  return (t = 0), !1;
                case Ca:
                  return (t = 1), !1;
                case "at":
                  return (B = !0), !1;
                case fa:
                  return (r = 0), !1;
                case ha:
                case ga:
                  return (r = 1), !1;
                case Ua:
                case wa:
                  return (r = 2), !1;
                case Qa:
                  return (r = 3), !1;
              }
            else if (Ae(f) || q(f))
              return Array.isArray(r) || (r = []), r.push(f), !1;
            return u;
          }, a);
        }
        if (a) {
          var c = wr(A, o);
          n.push(c);
        }
      }),
      { size: r, shape: t, stops: n, position: s, type: 2 }
    );
  },
  vt = function (A, e) {
    var t = 0,
      r = 3,
      n = [],
      s = [];
    return (
      OA(e).forEach(function (o, i) {
        var a = !0;
        if (
          (i === 0
            ? (a = o.reduce(function (c, u) {
                if (P(u))
                  switch (u.value) {
                    case "center":
                      return s.push(qn), !1;
                    case "top":
                    case "left":
                      return s.push(iA), !1;
                    case "right":
                    case "bottom":
                      return s.push(jA), !1;
                  }
                else if (q(u) || Ae(u)) return s.push(u), !1;
                return c;
              }, a))
            : i === 1 &&
              (a = o.reduce(function (c, u) {
                if (P(u))
                  switch (u.value) {
                    case da:
                      return (t = 0), !1;
                    case Ca:
                      return (t = 1), !1;
                    case Ua:
                    case fa:
                      return (r = 0), !1;
                    case ga:
                      return (r = 1), !1;
                    case wa:
                      return (r = 2), !1;
                    case ha:
                    case Qa:
                      return (r = 3), !1;
                  }
                else if (Ae(u) || q(u))
                  return Array.isArray(r) || (r = []), r.push(u), !1;
                return c;
              }, a)),
          a)
        ) {
          var B = wr(A, o);
          n.push(B);
        }
      }),
      { size: r, shape: t, stops: n, position: s, type: 2 }
    );
  },
  vf = function (A) {
    return A.type === 1;
  },
  Hf = function (A) {
    return A.type === 2;
  },
  As = {
    name: "image",
    parse: function (A, e) {
      if (e.type === 22) {
        var t = { url: e.value, type: 0 };
        return A.cache.addImage(e.value), t;
      }
      if (e.type === 18) {
        var r = Fa[e.name];
        if (typeof r > "u")
          throw new Error(
            'Attempting to parse an unsupported image function "' + e.name + '"'
          );
        return r(A, e.values);
      }
      throw new Error("Unsupported image type " + e.type);
    },
  };
function If(A) {
  return (
    !(A.type === 20 && A.value === "none") && (A.type !== 18 || !!Fa[A.name])
  );
}
var Fa = {
    "linear-gradient": pf,
    "-moz-linear-gradient": mt,
    "-ms-linear-gradient": mt,
    "-o-linear-gradient": mt,
    "-webkit-linear-gradient": mt,
    "radial-gradient": mf,
    "-moz-radial-gradient": vt,
    "-ms-radial-gradient": vt,
    "-o-radial-gradient": vt,
    "-webkit-radial-gradient": vt,
    "-webkit-gradient": Ef,
  },
  yf = {
    name: "background-image",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function (A, e) {
      if (e.length === 0) return [];
      var t = e[0];
      return t.type === 20 && t.value === "none"
        ? []
        : e
            .filter(function (r) {
              return ve(r) && If(r);
            })
            .map(function (r) {
              return As.parse(A, r);
            });
    },
  },
  Lf = {
    name: "background-origin",
    initialValue: "border-box",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return e.map(function (t) {
        if (P(t))
          switch (t.value) {
            case "padding-box":
              return 1;
            case "content-box":
              return 2;
          }
        return 0;
      });
    },
  },
  Sf = {
    name: "background-position",
    initialValue: "0% 0%",
    type: 1,
    prefix: !1,
    parse: function (A, e) {
      return OA(e)
        .map(function (t) {
          return t.filter(q);
        })
        .map(oa);
    },
  },
  bf = {
    name: "background-repeat",
    initialValue: "repeat",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return OA(e)
        .map(function (t) {
          return t
            .filter(P)
            .map(function (r) {
              return r.value;
            })
            .join(" ");
        })
        .map(_f);
    },
  },
  _f = function (A) {
    switch (A) {
      case "no-repeat":
        return 1;
      case "repeat-x":
      case "repeat no-repeat":
        return 2;
      case "repeat-y":
      case "no-repeat repeat":
        return 3;
      case "repeat":
      default:
        return 0;
    }
  },
  Ee;
(function (A) {
  (A.AUTO = "auto"), (A.CONTAIN = "contain"), (A.COVER = "cover");
})(Ee || (Ee = {}));
var Kf = {
    name: "background-size",
    initialValue: "0",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return OA(e).map(function (t) {
        return t.filter(Tf);
      });
    },
  },
  Tf = function (A) {
    return P(A) || q(A);
  },
  Qr = function (A) {
    return {
      name: "border-" + A + "-color",
      initialValue: "transparent",
      prefix: !1,
      type: 3,
      format: "color",
    };
  },
  Of = Qr("top"),
  Df = Qr("right"),
  Rf = Qr("bottom"),
  xf = Qr("left"),
  dr = function (A) {
    return {
      name: "border-radius-" + A,
      initialValue: "0 0",
      prefix: !1,
      type: 1,
      parse: function (e, t) {
        return oa(t.filter(q));
      },
    };
  },
  Mf = dr("top-left"),
  Nf = dr("top-right"),
  Gf = dr("bottom-right"),
  kf = dr("bottom-left"),
  Cr = function (A) {
    return {
      name: "border-" + A + "-style",
      initialValue: "solid",
      prefix: !1,
      type: 2,
      parse: function (e, t) {
        switch (t) {
          case "none":
            return 0;
          case "dashed":
            return 2;
          case "dotted":
            return 3;
          case "double":
            return 4;
        }
        return 1;
      },
    };
  },
  Pf = Cr("top"),
  Vf = Cr("right"),
  Xf = Cr("bottom"),
  Jf = Cr("left"),
  hr = function (A) {
    return {
      name: "border-" + A + "-width",
      initialValue: "0",
      type: 0,
      prefix: !1,
      parse: function (e, t) {
        return at(t) ? t.number : 0;
      },
    };
  },
  Yf = hr("top"),
  Wf = hr("right"),
  Zf = hr("bottom"),
  jf = hr("left"),
  zf = {
    name: "color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color",
  },
  $f = {
    name: "direction",
    initialValue: "ltr",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "rtl":
          return 1;
        case "ltr":
        default:
          return 0;
      }
    },
  },
  qf = {
    name: "display",
    initialValue: "inline-block",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return e.filter(P).reduce(function (t, r) {
        return t | Ag(r.value);
      }, 0);
    },
  },
  Ag = function (A) {
    switch (A) {
      case "block":
      case "-webkit-box":
        return 2;
      case "inline":
        return 4;
      case "run-in":
        return 8;
      case "flow":
        return 16;
      case "flow-root":
        return 32;
      case "table":
        return 64;
      case "flex":
      case "-webkit-flex":
        return 128;
      case "grid":
      case "-ms-grid":
        return 256;
      case "ruby":
        return 512;
      case "subgrid":
        return 1024;
      case "list-item":
        return 2048;
      case "table-row-group":
        return 4096;
      case "table-header-group":
        return 8192;
      case "table-footer-group":
        return 16384;
      case "table-row":
        return 32768;
      case "table-cell":
        return 65536;
      case "table-column-group":
        return 131072;
      case "table-column":
        return 262144;
      case "table-caption":
        return 524288;
      case "ruby-base":
        return 1048576;
      case "ruby-text":
        return 2097152;
      case "ruby-base-container":
        return 4194304;
      case "ruby-text-container":
        return 8388608;
      case "contents":
        return 16777216;
      case "inline-block":
        return 33554432;
      case "inline-list-item":
        return 67108864;
      case "inline-table":
        return 134217728;
      case "inline-flex":
        return 268435456;
      case "inline-grid":
        return 536870912;
    }
    return 0;
  },
  eg = {
    name: "float",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "left":
          return 1;
        case "right":
          return 2;
        case "inline-start":
          return 3;
        case "inline-end":
          return 4;
      }
      return 0;
    },
  },
  tg = {
    name: "letter-spacing",
    initialValue: "0",
    prefix: !1,
    type: 0,
    parse: function (A, e) {
      return e.type === 20 && e.value === "normal"
        ? 0
        : e.type === 17 || e.type === 15
        ? e.number
        : 0;
    },
  },
  zt;
(function (A) {
  (A.NORMAL = "normal"), (A.STRICT = "strict");
})(zt || (zt = {}));
var rg = {
    name: "line-break",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "strict":
          return zt.STRICT;
        case "normal":
        default:
          return zt.NORMAL;
      }
    },
  },
  ng = { name: "line-height", initialValue: "normal", prefix: !1, type: 4 },
  so = function (A, e) {
    return P(A) && A.value === "normal"
      ? 1.2 * e
      : A.type === 17
      ? e * A.number
      : q(A)
      ? J(A, e)
      : e;
  },
  sg = {
    name: "list-style-image",
    initialValue: "none",
    type: 0,
    prefix: !1,
    parse: function (A, e) {
      return e.type === 20 && e.value === "none" ? null : As.parse(A, e);
    },
  },
  og = {
    name: "list-style-position",
    initialValue: "outside",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "inside":
          return 0;
        case "outside":
        default:
          return 1;
      }
    },
  },
  _n = {
    name: "list-style-type",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "disc":
          return 0;
        case "circle":
          return 1;
        case "square":
          return 2;
        case "decimal":
          return 3;
        case "cjk-decimal":
          return 4;
        case "decimal-leading-zero":
          return 5;
        case "lower-roman":
          return 6;
        case "upper-roman":
          return 7;
        case "lower-greek":
          return 8;
        case "lower-alpha":
          return 9;
        case "upper-alpha":
          return 10;
        case "arabic-indic":
          return 11;
        case "armenian":
          return 12;
        case "bengali":
          return 13;
        case "cambodian":
          return 14;
        case "cjk-earthly-branch":
          return 15;
        case "cjk-heavenly-stem":
          return 16;
        case "cjk-ideographic":
          return 17;
        case "devanagari":
          return 18;
        case "ethiopic-numeric":
          return 19;
        case "georgian":
          return 20;
        case "gujarati":
          return 21;
        case "gurmukhi":
          return 22;
        case "hebrew":
          return 22;
        case "hiragana":
          return 23;
        case "hiragana-iroha":
          return 24;
        case "japanese-formal":
          return 25;
        case "japanese-informal":
          return 26;
        case "kannada":
          return 27;
        case "katakana":
          return 28;
        case "katakana-iroha":
          return 29;
        case "khmer":
          return 30;
        case "korean-hangul-formal":
          return 31;
        case "korean-hanja-formal":
          return 32;
        case "korean-hanja-informal":
          return 33;
        case "lao":
          return 34;
        case "lower-armenian":
          return 35;
        case "malayalam":
          return 36;
        case "mongolian":
          return 37;
        case "myanmar":
          return 38;
        case "oriya":
          return 39;
        case "persian":
          return 40;
        case "simp-chinese-formal":
          return 41;
        case "simp-chinese-informal":
          return 42;
        case "tamil":
          return 43;
        case "telugu":
          return 44;
        case "thai":
          return 45;
        case "tibetan":
          return 46;
        case "trad-chinese-formal":
          return 47;
        case "trad-chinese-informal":
          return 48;
        case "upper-armenian":
          return 49;
        case "disclosure-open":
          return 50;
        case "disclosure-closed":
          return 51;
        case "none":
        default:
          return -1;
      }
    },
  },
  Ur = function (A) {
    return { name: "margin-" + A, initialValue: "0", prefix: !1, type: 4 };
  },
  ig = Ur("top"),
  ag = Ur("right"),
  Bg = Ur("bottom"),
  cg = Ur("left"),
  ug = {
    name: "overflow",
    initialValue: "visible",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return e.filter(P).map(function (t) {
        switch (t.value) {
          case "hidden":
            return 1;
          case "scroll":
            return 2;
          case "clip":
            return 3;
          case "auto":
            return 4;
          case "visible":
          default:
            return 0;
        }
      });
    },
  },
  lg = {
    name: "overflow-wrap",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "break-word":
          return "break-word";
        case "normal":
        default:
          return "normal";
      }
    },
  },
  Fr = function (A) {
    return {
      name: "padding-" + A,
      initialValue: "0",
      prefix: !1,
      type: 3,
      format: "length-percentage",
    };
  },
  fg = Fr("top"),
  gg = Fr("right"),
  wg = Fr("bottom"),
  Qg = Fr("left"),
  dg = {
    name: "text-align",
    initialValue: "left",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "right":
          return 2;
        case "center":
        case "justify":
          return 1;
        case "left":
        default:
          return 0;
      }
    },
  },
  Cg = {
    name: "position",
    initialValue: "static",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "relative":
          return 1;
        case "absolute":
          return 2;
        case "fixed":
          return 3;
        case "sticky":
          return 4;
      }
      return 0;
    },
  },
  hg = {
    name: "text-shadow",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function (A, e) {
      return e.length === 1 && bn(e[0], "none")
        ? []
        : OA(e).map(function (t) {
            for (
              var r = {
                  color: kA.TRANSPARENT,
                  offsetX: iA,
                  offsetY: iA,
                  blur: iA,
                },
                n = 0,
                s = 0;
              s < t.length;
              s++
            ) {
              var o = t[s];
              Ae(o)
                ? (n === 0
                    ? (r.offsetX = o)
                    : n === 1
                    ? (r.offsetY = o)
                    : (r.blur = o),
                  n++)
                : (r.color = $A.parse(A, o));
            }
            return r;
          });
    },
  },
  Ug = {
    name: "text-transform",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "uppercase":
          return 2;
        case "lowercase":
          return 1;
        case "capitalize":
          return 3;
      }
      return 0;
    },
  },
  Fg = {
    name: "transform",
    initialValue: "none",
    prefix: !0,
    type: 0,
    parse: function (A, e) {
      if (e.type === 20 && e.value === "none") return null;
      if (e.type === 18) {
        var t = mg[e.name];
        if (typeof t > "u")
          throw new Error(
            'Attempting to parse an unsupported transform function "' +
              e.name +
              '"'
          );
        return t(e.values);
      }
      return null;
    },
  },
  pg = function (A) {
    var e = A.filter(function (t) {
      return t.type === 17;
    }).map(function (t) {
      return t.number;
    });
    return e.length === 6 ? e : null;
  },
  Eg = function (A) {
    var e = A.filter(function (a) {
        return a.type === 17;
      }).map(function (a) {
        return a.number;
      }),
      t = e[0],
      r = e[1];
    e[2], e[3];
    var n = e[4],
      s = e[5];
    e[6], e[7], e[8], e[9], e[10], e[11];
    var o = e[12],
      i = e[13];
    return e[14], e[15], e.length === 16 ? [t, r, n, s, o, i] : null;
  },
  mg = { matrix: pg, matrix3d: Eg },
  oo = { type: 16, number: 50, flags: it },
  vg = [oo, oo],
  Hg = {
    name: "transform-origin",
    initialValue: "50% 50%",
    prefix: !0,
    type: 1,
    parse: function (A, e) {
      var t = e.filter(q);
      return t.length !== 2 ? vg : [t[0], t[1]];
    },
  },
  Ig = {
    name: "visible",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "hidden":
          return 1;
        case "collapse":
          return 2;
        case "visible":
        default:
          return 0;
      }
    },
  },
  Ye;
(function (A) {
  (A.NORMAL = "normal"), (A.BREAK_ALL = "break-all"), (A.KEEP_ALL = "keep-all");
})(Ye || (Ye = {}));
var yg = {
    name: "word-break",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "break-all":
          return Ye.BREAK_ALL;
        case "keep-all":
          return Ye.KEEP_ALL;
        case "normal":
        default:
          return Ye.NORMAL;
      }
    },
  },
  Lg = {
    name: "z-index",
    initialValue: "auto",
    prefix: !1,
    type: 0,
    parse: function (A, e) {
      if (e.type === 20) return { auto: !0, order: 0 };
      if (Se(e)) return { auto: !1, order: e.number };
      throw new Error("Invalid z-index number parsed");
    },
  },
  pa = {
    name: "time",
    parse: function (A, e) {
      if (e.type === 15)
        switch (e.unit.toLowerCase()) {
          case "s":
            return 1e3 * e.number;
          case "ms":
            return e.number;
        }
      throw new Error("Unsupported time type");
    },
  },
  Sg = {
    name: "opacity",
    initialValue: "1",
    type: 0,
    prefix: !1,
    parse: function (A, e) {
      return Se(e) ? e.number : 1;
    },
  },
  bg = {
    name: "text-decoration-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color",
  },
  _g = {
    name: "text-decoration-line",
    initialValue: "none",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return e
        .filter(P)
        .map(function (t) {
          switch (t.value) {
            case "underline":
              return 1;
            case "overline":
              return 2;
            case "line-through":
              return 3;
            case "none":
              return 4;
          }
          return 0;
        })
        .filter(function (t) {
          return t !== 0;
        });
    },
  },
  Kg = {
    name: "font-family",
    initialValue: "",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      var t = [],
        r = [];
      return (
        e.forEach(function (n) {
          switch (n.type) {
            case 20:
            case 0:
              t.push(n.value);
              break;
            case 17:
              t.push(n.number.toString());
              break;
            case 4:
              r.push(t.join(" ")), (t.length = 0);
              break;
          }
        }),
        t.length && r.push(t.join(" ")),
        r.map(function (n) {
          return n.indexOf(" ") === -1 ? n : "'" + n + "'";
        })
      );
    },
  },
  Tg = {
    name: "font-size",
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length",
  },
  Og = {
    name: "font-weight",
    initialValue: "normal",
    type: 0,
    prefix: !1,
    parse: function (A, e) {
      if (Se(e)) return e.number;
      if (P(e))
        switch (e.value) {
          case "bold":
            return 700;
          case "normal":
          default:
            return 400;
        }
      return 400;
    },
  },
  Dg = {
    name: "font-variant",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function (A, e) {
      return e.filter(P).map(function (t) {
        return t.value;
      });
    },
  },
  Rg = {
    name: "font-style",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "oblique":
          return "oblique";
        case "italic":
          return "italic";
        case "normal":
        default:
          return "normal";
      }
    },
  },
  tA = function (A, e) {
    return (A & e) !== 0;
  },
  xg = {
    name: "content",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function (A, e) {
      if (e.length === 0) return [];
      var t = e[0];
      return t.type === 20 && t.value === "none" ? [] : e;
    },
  },
  Mg = {
    name: "counter-increment",
    initialValue: "none",
    prefix: !0,
    type: 1,
    parse: function (A, e) {
      if (e.length === 0) return null;
      var t = e[0];
      if (t.type === 20 && t.value === "none") return null;
      for (var r = [], n = e.filter(sa), s = 0; s < n.length; s++) {
        var o = n[s],
          i = n[s + 1];
        if (o.type === 20) {
          var a = i && Se(i) ? i.number : 1;
          r.push({ counter: o.value, increment: a });
        }
      }
      return r;
    },
  },
  Ng = {
    name: "counter-reset",
    initialValue: "none",
    prefix: !0,
    type: 1,
    parse: function (A, e) {
      if (e.length === 0) return [];
      for (var t = [], r = e.filter(sa), n = 0; n < r.length; n++) {
        var s = r[n],
          o = r[n + 1];
        if (P(s) && s.value !== "none") {
          var i = o && Se(o) ? o.number : 0;
          t.push({ counter: s.value, reset: i });
        }
      }
      return t;
    },
  },
  Gg = {
    name: "duration",
    initialValue: "0s",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return e.filter(at).map(function (t) {
        return pa.parse(A, t);
      });
    },
  },
  kg = {
    name: "quotes",
    initialValue: "none",
    prefix: !0,
    type: 1,
    parse: function (A, e) {
      if (e.length === 0) return null;
      var t = e[0];
      if (t.type === 20 && t.value === "none") return null;
      var r = [],
        n = e.filter(gf);
      if (n.length % 2 !== 0) return null;
      for (var s = 0; s < n.length; s += 2) {
        var o = n[s].value,
          i = n[s + 1].value;
        r.push({ open: o, close: i });
      }
      return r;
    },
  },
  io = function (A, e, t) {
    if (!A) return "";
    var r = A[Math.min(e, A.length - 1)];
    return r ? (t ? r.open : r.close) : "";
  },
  Pg = {
    name: "box-shadow",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function (A, e) {
      return e.length === 1 && bn(e[0], "none")
        ? []
        : OA(e).map(function (t) {
            for (
              var r = {
                  color: 255,
                  offsetX: iA,
                  offsetY: iA,
                  blur: iA,
                  spread: iA,
                  inset: !1,
                },
                n = 0,
                s = 0;
              s < t.length;
              s++
            ) {
              var o = t[s];
              bn(o, "inset")
                ? (r.inset = !0)
                : Ae(o)
                ? (n === 0
                    ? (r.offsetX = o)
                    : n === 1
                    ? (r.offsetY = o)
                    : n === 2
                    ? (r.blur = o)
                    : (r.spread = o),
                  n++)
                : (r.color = $A.parse(A, o));
            }
            return r;
          });
    },
  },
  Vg = {
    name: "paint-order",
    initialValue: "normal",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      var t = [0, 1, 2],
        r = [];
      return (
        e.filter(P).forEach(function (n) {
          switch (n.value) {
            case "stroke":
              r.push(1);
              break;
            case "fill":
              r.push(0);
              break;
            case "markers":
              r.push(2);
              break;
          }
        }),
        t.forEach(function (n) {
          r.indexOf(n) === -1 && r.push(n);
        }),
        r
      );
    },
  },
  Xg = {
    name: "-webkit-text-stroke-color",
    initialValue: "currentcolor",
    prefix: !1,
    type: 3,
    format: "color",
  },
  Jg = {
    name: "-webkit-text-stroke-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function (A, e) {
      return at(e) ? e.number : 0;
    },
  },
  Yg = (function () {
    function A(e, t) {
      var r, n;
      (this.animationDuration = I(e, Gg, t.animationDuration)),
        (this.backgroundClip = I(e, df, t.backgroundClip)),
        (this.backgroundColor = I(e, Cf, t.backgroundColor)),
        (this.backgroundImage = I(e, yf, t.backgroundImage)),
        (this.backgroundOrigin = I(e, Lf, t.backgroundOrigin)),
        (this.backgroundPosition = I(e, Sf, t.backgroundPosition)),
        (this.backgroundRepeat = I(e, bf, t.backgroundRepeat)),
        (this.backgroundSize = I(e, Kf, t.backgroundSize)),
        (this.borderTopColor = I(e, Of, t.borderTopColor)),
        (this.borderRightColor = I(e, Df, t.borderRightColor)),
        (this.borderBottomColor = I(e, Rf, t.borderBottomColor)),
        (this.borderLeftColor = I(e, xf, t.borderLeftColor)),
        (this.borderTopLeftRadius = I(e, Mf, t.borderTopLeftRadius)),
        (this.borderTopRightRadius = I(e, Nf, t.borderTopRightRadius)),
        (this.borderBottomRightRadius = I(e, Gf, t.borderBottomRightRadius)),
        (this.borderBottomLeftRadius = I(e, kf, t.borderBottomLeftRadius)),
        (this.borderTopStyle = I(e, Pf, t.borderTopStyle)),
        (this.borderRightStyle = I(e, Vf, t.borderRightStyle)),
        (this.borderBottomStyle = I(e, Xf, t.borderBottomStyle)),
        (this.borderLeftStyle = I(e, Jf, t.borderLeftStyle)),
        (this.borderTopWidth = I(e, Yf, t.borderTopWidth)),
        (this.borderRightWidth = I(e, Wf, t.borderRightWidth)),
        (this.borderBottomWidth = I(e, Zf, t.borderBottomWidth)),
        (this.borderLeftWidth = I(e, jf, t.borderLeftWidth)),
        (this.boxShadow = I(e, Pg, t.boxShadow)),
        (this.color = I(e, zf, t.color)),
        (this.direction = I(e, $f, t.direction)),
        (this.display = I(e, qf, t.display)),
        (this.float = I(e, eg, t.cssFloat)),
        (this.fontFamily = I(e, Kg, t.fontFamily)),
        (this.fontSize = I(e, Tg, t.fontSize)),
        (this.fontStyle = I(e, Rg, t.fontStyle)),
        (this.fontVariant = I(e, Dg, t.fontVariant)),
        (this.fontWeight = I(e, Og, t.fontWeight)),
        (this.letterSpacing = I(e, tg, t.letterSpacing)),
        (this.lineBreak = I(e, rg, t.lineBreak)),
        (this.lineHeight = I(e, ng, t.lineHeight)),
        (this.listStyleImage = I(e, sg, t.listStyleImage)),
        (this.listStylePosition = I(e, og, t.listStylePosition)),
        (this.listStyleType = I(e, _n, t.listStyleType)),
        (this.marginTop = I(e, ig, t.marginTop)),
        (this.marginRight = I(e, ag, t.marginRight)),
        (this.marginBottom = I(e, Bg, t.marginBottom)),
        (this.marginLeft = I(e, cg, t.marginLeft)),
        (this.opacity = I(e, Sg, t.opacity));
      var s = I(e, ug, t.overflow);
      (this.overflowX = s[0]),
        (this.overflowY = s[s.length > 1 ? 1 : 0]),
        (this.overflowWrap = I(e, lg, t.overflowWrap)),
        (this.paddingTop = I(e, fg, t.paddingTop)),
        (this.paddingRight = I(e, gg, t.paddingRight)),
        (this.paddingBottom = I(e, wg, t.paddingBottom)),
        (this.paddingLeft = I(e, Qg, t.paddingLeft)),
        (this.paintOrder = I(e, Vg, t.paintOrder)),
        (this.position = I(e, Cg, t.position)),
        (this.textAlign = I(e, dg, t.textAlign)),
        (this.textDecorationColor = I(
          e,
          bg,
          (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color
        )),
        (this.textDecorationLine = I(
          e,
          _g,
          (n = t.textDecorationLine) !== null && n !== void 0
            ? n
            : t.textDecoration
        )),
        (this.textShadow = I(e, hg, t.textShadow)),
        (this.textTransform = I(e, Ug, t.textTransform)),
        (this.transform = I(e, Fg, t.transform)),
        (this.transformOrigin = I(e, Hg, t.transformOrigin)),
        (this.visibility = I(e, Ig, t.visibility)),
        (this.webkitTextStrokeColor = I(e, Xg, t.webkitTextStrokeColor)),
        (this.webkitTextStrokeWidth = I(e, Jg, t.webkitTextStrokeWidth)),
        (this.wordBreak = I(e, yg, t.wordBreak)),
        (this.zIndex = I(e, Lg, t.zIndex));
    }
    return (
      (A.prototype.isVisible = function () {
        return this.display > 0 && this.opacity > 0 && this.visibility === 0;
      }),
      (A.prototype.isTransparent = function () {
        return qA(this.backgroundColor);
      }),
      (A.prototype.isTransformed = function () {
        return this.transform !== null;
      }),
      (A.prototype.isPositioned = function () {
        return this.position !== 0;
      }),
      (A.prototype.isPositionedWithZIndex = function () {
        return this.isPositioned() && !this.zIndex.auto;
      }),
      (A.prototype.isFloating = function () {
        return this.float !== 0;
      }),
      (A.prototype.isInlineLevel = function () {
        return (
          tA(this.display, 4) ||
          tA(this.display, 33554432) ||
          tA(this.display, 268435456) ||
          tA(this.display, 536870912) ||
          tA(this.display, 67108864) ||
          tA(this.display, 134217728)
        );
      }),
      A
    );
  })(),
  Wg = (function () {
    function A(e, t) {
      (this.content = I(e, xg, t.content)), (this.quotes = I(e, kg, t.quotes));
    }
    return A;
  })(),
  ao = (function () {
    function A(e, t) {
      (this.counterIncrement = I(e, Mg, t.counterIncrement)),
        (this.counterReset = I(e, Ng, t.counterReset));
    }
    return A;
  })(),
  I = function (A, e, t) {
    var r = new ra(),
      n = t !== null && typeof t < "u" ? t.toString() : e.initialValue;
    r.write(n);
    var s = new na(r.read());
    switch (e.type) {
      case 2:
        var o = s.parseComponentValue();
        return e.parse(A, P(o) ? o.value : e.initialValue);
      case 0:
        return e.parse(A, s.parseComponentValue());
      case 1:
        return e.parse(A, s.parseComponentValues());
      case 4:
        return s.parseComponentValue();
      case 3:
        switch (e.format) {
          case "angle":
            return gr.parse(A, s.parseComponentValue());
          case "color":
            return $A.parse(A, s.parseComponentValue());
          case "image":
            return As.parse(A, s.parseComponentValue());
          case "length":
            var i = s.parseComponentValue();
            return Ae(i) ? i : iA;
          case "length-percentage":
            var a = s.parseComponentValue();
            return q(a) ? a : iA;
          case "time":
            return pa.parse(A, s.parseComponentValue());
        }
        break;
    }
  },
  Zg = "data-html2canvas-debug",
  jg = function (A) {
    var e = A.getAttribute(Zg);
    switch (e) {
      case "all":
        return 1;
      case "clone":
        return 2;
      case "parse":
        return 3;
      case "render":
        return 4;
      default:
        return 0;
    }
  },
  Kn = function (A, e) {
    var t = jg(A);
    return t === 1 || e === t;
  },
  DA = (function () {
    function A(e, t) {
      if (
        ((this.context = e),
        (this.textNodes = []),
        (this.elements = []),
        (this.flags = 0),
        Kn(t, 3))
      )
        debugger;
      (this.styles = new Yg(e, window.getComputedStyle(t, null))),
        Dn(t) &&
          (this.styles.animationDuration.some(function (r) {
            return r > 0;
          }) && (t.style.animationDuration = "0s"),
          this.styles.transform !== null && (t.style.transform = "none")),
        (this.bounds = lr(this.context, t)),
        Kn(t, 4) && (this.flags |= 16);
    }
    return A;
  })(),
  zg =
    "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",
  Bo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  Pe = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ht = 0; Ht < Bo.length; Ht++) Pe[Bo.charCodeAt(Ht)] = Ht;
var $g = function (A) {
    var e = A.length * 0.75,
      t = A.length,
      r,
      n = 0,
      s,
      o,
      i,
      a;
    A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
    var B =
        typeof ArrayBuffer < "u" &&
        typeof Uint8Array < "u" &&
        typeof Uint8Array.prototype.slice < "u"
          ? new ArrayBuffer(e)
          : new Array(e),
      c = Array.isArray(B) ? B : new Uint8Array(B);
    for (r = 0; r < t; r += 4)
      (s = Pe[A.charCodeAt(r)]),
        (o = Pe[A.charCodeAt(r + 1)]),
        (i = Pe[A.charCodeAt(r + 2)]),
        (a = Pe[A.charCodeAt(r + 3)]),
        (c[n++] = (s << 2) | (o >> 4)),
        (c[n++] = ((o & 15) << 4) | (i >> 2)),
        (c[n++] = ((i & 3) << 6) | (a & 63));
    return B;
  },
  qg = function (A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 2)
      t.push((A[r + 1] << 8) | A[r]);
    return t;
  },
  Aw = function (A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 4)
      t.push((A[r + 3] << 24) | (A[r + 2] << 16) | (A[r + 1] << 8) | A[r]);
    return t;
  },
  Be = 5,
  es = 11,
  kr = 2,
  ew = es - Be,
  Ea = 65536 >> Be,
  tw = 1 << Be,
  Pr = tw - 1,
  rw = 1024 >> Be,
  nw = Ea + rw,
  sw = nw,
  ow = 32,
  iw = sw + ow,
  aw = 65536 >> es,
  Bw = 1 << ew,
  cw = Bw - 1,
  co = function (A, e, t) {
    return A.slice
      ? A.slice(e, t)
      : new Uint16Array(Array.prototype.slice.call(A, e, t));
  },
  uw = function (A, e, t) {
    return A.slice
      ? A.slice(e, t)
      : new Uint32Array(Array.prototype.slice.call(A, e, t));
  },
  lw = function (A, e) {
    var t = $g(A),
      r = Array.isArray(t) ? Aw(t) : new Uint32Array(t),
      n = Array.isArray(t) ? qg(t) : new Uint16Array(t),
      s = 24,
      o = co(n, s / 2, r[4] / 2),
      i = r[5] === 2 ? co(n, (s + r[4]) / 2) : uw(r, Math.ceil((s + r[4]) / 4));
    return new fw(r[0], r[1], r[2], r[3], o, i);
  },
  fw = (function () {
    function A(e, t, r, n, s, o) {
      (this.initialValue = e),
        (this.errorValue = t),
        (this.highStart = r),
        (this.highValueIndex = n),
        (this.index = s),
        (this.data = o);
    }
    return (
      (A.prototype.get = function (e) {
        var t;
        if (e >= 0) {
          if (e < 55296 || (e > 56319 && e <= 65535))
            return (
              (t = this.index[e >> Be]),
              (t = (t << kr) + (e & Pr)),
              this.data[t]
            );
          if (e <= 65535)
            return (
              (t = this.index[Ea + ((e - 55296) >> Be)]),
              (t = (t << kr) + (e & Pr)),
              this.data[t]
            );
          if (e < this.highStart)
            return (
              (t = iw - aw + (e >> es)),
              (t = this.index[t]),
              (t += (e >> Be) & cw),
              (t = this.index[t]),
              (t = (t << kr) + (e & Pr)),
              this.data[t]
            );
          if (e <= 1114111) return this.data[this.highValueIndex];
        }
        return this.errorValue;
      }),
      A
    );
  })(),
  uo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  gw = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var It = 0; It < uo.length; It++) gw[uo.charCodeAt(It)] = It;
var ww = 1,
  Vr = 2,
  Xr = 3,
  lo = 4,
  fo = 5,
  Qw = 7,
  go = 8,
  Jr = 9,
  Yr = 10,
  wo = 11,
  Qo = 12,
  Co = 13,
  ho = 14,
  Wr = 15,
  dw = function (A) {
    for (var e = [], t = 0, r = A.length; t < r; ) {
      var n = A.charCodeAt(t++);
      if (n >= 55296 && n <= 56319 && t < r) {
        var s = A.charCodeAt(t++);
        (s & 64512) === 56320
          ? e.push(((n & 1023) << 10) + (s & 1023) + 65536)
          : (e.push(n), t--);
      } else e.push(n);
    }
    return e;
  },
  Cw = function () {
    for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
    var t = A.length;
    if (!t) return "";
    for (var r = [], n = -1, s = ""; ++n < t; ) {
      var o = A[n];
      o <= 65535
        ? r.push(o)
        : ((o -= 65536), r.push((o >> 10) + 55296, (o % 1024) + 56320)),
        (n + 1 === t || r.length > 16384) &&
          ((s += String.fromCharCode.apply(String, r)), (r.length = 0));
    }
    return s;
  },
  hw = lw(zg),
  hA = "×",
  Zr = "÷",
  Uw = function (A) {
    return hw.get(A);
  },
  Fw = function (A, e, t) {
    var r = t - 2,
      n = e[r],
      s = e[t - 1],
      o = e[t];
    if (s === Vr && o === Xr) return hA;
    if (s === Vr || s === Xr || s === lo || o === Vr || o === Xr || o === lo)
      return Zr;
    if (
      (s === go && [go, Jr, wo, Qo].indexOf(o) !== -1) ||
      ((s === wo || s === Jr) && (o === Jr || o === Yr)) ||
      ((s === Qo || s === Yr) && o === Yr) ||
      o === Co ||
      o === fo ||
      o === Qw ||
      s === ww
    )
      return hA;
    if (s === Co && o === ho) {
      for (; n === fo; ) n = e[--r];
      if (n === ho) return hA;
    }
    if (s === Wr && o === Wr) {
      for (var i = 0; n === Wr; ) i++, (n = e[--r]);
      if (i % 2 === 0) return hA;
    }
    return Zr;
  },
  pw = function (A) {
    var e = dw(A),
      t = e.length,
      r = 0,
      n = 0,
      s = e.map(Uw);
    return {
      next: function () {
        if (r >= t) return { done: !0, value: null };
        for (var o = hA; r < t && (o = Fw(e, s, ++r)) === hA; );
        if (o !== hA || r === t) {
          var i = Cw.apply(null, e.slice(n, r));
          return (n = r), { value: i, done: !1 };
        }
        return { done: !0, value: null };
      },
    };
  },
  Ew = function (A) {
    for (var e = pw(A), t = [], r; !(r = e.next()).done; )
      r.value && t.push(r.value.slice());
    return t;
  },
  mw = function (A) {
    var e = 123;
    if (A.createRange) {
      var t = A.createRange();
      if (t.getBoundingClientRect) {
        var r = A.createElement("boundtest");
        (r.style.height = e + "px"),
          (r.style.display = "block"),
          A.body.appendChild(r),
          t.selectNode(r);
        var n = t.getBoundingClientRect(),
          s = Math.round(n.height);
        if ((A.body.removeChild(r), s === e)) return !0;
      }
    }
    return !1;
  },
  vw = function (A) {
    var e = A.createElement("boundtest");
    (e.style.width = "50px"),
      (e.style.display = "block"),
      (e.style.fontSize = "12px"),
      (e.style.letterSpacing = "0px"),
      (e.style.wordSpacing = "0px"),
      A.body.appendChild(e);
    var t = A.createRange();
    e.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
    var r = e.firstChild,
      n = fr(r.data).map(function (a) {
        return $(a);
      }),
      s = 0,
      o = {},
      i = n.every(function (a, B) {
        t.setStart(r, s), t.setEnd(r, s + a.length);
        var c = t.getBoundingClientRect();
        s += a.length;
        var u = c.x > o.x || c.y > o.y;
        return (o = c), B === 0 ? !0 : u;
      });
    return A.body.removeChild(e), i;
  },
  Hw = function () {
    return typeof new Image().crossOrigin < "u";
  },
  Iw = function () {
    return typeof new XMLHttpRequest().responseType == "string";
  },
  yw = function (A) {
    var e = new Image(),
      t = A.createElement("canvas"),
      r = t.getContext("2d");
    if (!r) return !1;
    e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
    try {
      r.drawImage(e, 0, 0), t.toDataURL();
    } catch {
      return !1;
    }
    return !0;
  },
  Uo = function (A) {
    return A[0] === 0 && A[1] === 255 && A[2] === 0 && A[3] === 255;
  },
  Lw = function (A) {
    var e = A.createElement("canvas"),
      t = 100;
    (e.width = t), (e.height = t);
    var r = e.getContext("2d");
    if (!r) return Promise.reject(!1);
    (r.fillStyle = "rgb(0, 255, 0)"), r.fillRect(0, 0, t, t);
    var n = new Image(),
      s = e.toDataURL();
    n.src = s;
    var o = Tn(t, t, 0, 0, n);
    return (
      (r.fillStyle = "red"),
      r.fillRect(0, 0, t, t),
      Fo(o)
        .then(function (i) {
          r.drawImage(i, 0, 0);
          var a = r.getImageData(0, 0, t, t).data;
          (r.fillStyle = "red"), r.fillRect(0, 0, t, t);
          var B = A.createElement("div");
          return (
            (B.style.backgroundImage = "url(" + s + ")"),
            (B.style.height = t + "px"),
            Uo(a) ? Fo(Tn(t, t, 0, 0, B)) : Promise.reject(!1)
          );
        })
        .then(function (i) {
          return r.drawImage(i, 0, 0), Uo(r.getImageData(0, 0, t, t).data);
        })
        .catch(function () {
          return !1;
        })
    );
  },
  Tn = function (A, e, t, r, n) {
    var s = "http://www.w3.org/2000/svg",
      o = document.createElementNS(s, "svg"),
      i = document.createElementNS(s, "foreignObject");
    return (
      o.setAttributeNS(null, "width", A.toString()),
      o.setAttributeNS(null, "height", e.toString()),
      i.setAttributeNS(null, "width", "100%"),
      i.setAttributeNS(null, "height", "100%"),
      i.setAttributeNS(null, "x", t.toString()),
      i.setAttributeNS(null, "y", r.toString()),
      i.setAttributeNS(null, "externalResourcesRequired", "true"),
      o.appendChild(i),
      i.appendChild(n),
      o
    );
  },
  Fo = function (A) {
    return new Promise(function (e, t) {
      var r = new Image();
      (r.onload = function () {
        return e(r);
      }),
        (r.onerror = t),
        (r.src =
          "data:image/svg+xml;charset=utf-8," +
          encodeURIComponent(new XMLSerializer().serializeToString(A)));
    });
  },
  sA = {
    get SUPPORT_RANGE_BOUNDS() {
      var A = mw(document);
      return Object.defineProperty(sA, "SUPPORT_RANGE_BOUNDS", { value: A }), A;
    },
    get SUPPORT_WORD_BREAKING() {
      var A = sA.SUPPORT_RANGE_BOUNDS && vw(document);
      return (
        Object.defineProperty(sA, "SUPPORT_WORD_BREAKING", { value: A }), A
      );
    },
    get SUPPORT_SVG_DRAWING() {
      var A = yw(document);
      return Object.defineProperty(sA, "SUPPORT_SVG_DRAWING", { value: A }), A;
    },
    get SUPPORT_FOREIGNOBJECT_DRAWING() {
      var A =
        typeof Array.from == "function" && typeof window.fetch == "function"
          ? Lw(document)
          : Promise.resolve(!1);
      return (
        Object.defineProperty(sA, "SUPPORT_FOREIGNOBJECT_DRAWING", {
          value: A,
        }),
        A
      );
    },
    get SUPPORT_CORS_IMAGES() {
      var A = Hw();
      return Object.defineProperty(sA, "SUPPORT_CORS_IMAGES", { value: A }), A;
    },
    get SUPPORT_RESPONSE_TYPE() {
      var A = Iw();
      return (
        Object.defineProperty(sA, "SUPPORT_RESPONSE_TYPE", { value: A }), A
      );
    },
    get SUPPORT_CORS_XHR() {
      var A = "withCredentials" in new XMLHttpRequest();
      return Object.defineProperty(sA, "SUPPORT_CORS_XHR", { value: A }), A;
    },
    get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
      var A = !!(typeof Intl < "u" && Intl.Segmenter);
      return (
        Object.defineProperty(sA, "SUPPORT_NATIVE_TEXT_SEGMENTATION", {
          value: A,
        }),
        A
      );
    },
  },
  We = (function () {
    function A(e, t) {
      (this.text = e), (this.bounds = t);
    }
    return A;
  })(),
  Sw = function (A, e, t, r) {
    var n = Kw(e, t),
      s = [],
      o = 0;
    return (
      n.forEach(function (i) {
        if (t.textDecorationLine.length || i.trim().length > 0)
          if (sA.SUPPORT_RANGE_BOUNDS) {
            var a = po(r, o, i.length).getClientRects();
            if (a.length > 1) {
              var B = ts(i),
                c = 0;
              B.forEach(function (f) {
                s.push(
                  new We(
                    f,
                    PA.fromDOMRectList(
                      A,
                      po(r, c + o, f.length).getClientRects()
                    )
                  )
                ),
                  (c += f.length);
              });
            } else s.push(new We(i, PA.fromDOMRectList(A, a)));
          } else {
            var u = r.splitText(i.length);
            s.push(new We(i, bw(A, r))), (r = u);
          }
        else sA.SUPPORT_RANGE_BOUNDS || (r = r.splitText(i.length));
        o += i.length;
      }),
      s
    );
  },
  bw = function (A, e) {
    var t = e.ownerDocument;
    if (t) {
      var r = t.createElement("html2canvaswrapper");
      r.appendChild(e.cloneNode(!0));
      var n = e.parentNode;
      if (n) {
        n.replaceChild(r, e);
        var s = lr(A, r);
        return r.firstChild && n.replaceChild(r.firstChild, r), s;
      }
    }
    return PA.EMPTY;
  },
  po = function (A, e, t) {
    var r = A.ownerDocument;
    if (!r) throw new Error("Node has no owner document");
    var n = r.createRange();
    return n.setStart(A, e), n.setEnd(A, e + t), n;
  },
  ts = function (A) {
    if (sA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var e = new Intl.Segmenter(void 0, { granularity: "grapheme" });
      return Array.from(e.segment(A)).map(function (t) {
        return t.segment;
      });
    }
    return Ew(A);
  },
  _w = function (A, e) {
    if (sA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var t = new Intl.Segmenter(void 0, { granularity: "word" });
      return Array.from(t.segment(A)).map(function (r) {
        return r.segment;
      });
    }
    return Ow(A, e);
  },
  Kw = function (A, e) {
    return e.letterSpacing !== 0 ? ts(A) : _w(A, e);
  },
  Tw = [32, 160, 4961, 65792, 65793, 4153, 4241],
  Ow = function (A, e) {
    for (
      var t = il(A, {
          lineBreak: e.lineBreak,
          wordBreak:
            e.overflowWrap === "break-word" ? "break-word" : e.wordBreak,
        }),
        r = [],
        n,
        s = function () {
          if (n.value) {
            var o = n.value.slice(),
              i = fr(o),
              a = "";
            i.forEach(function (B) {
              Tw.indexOf(B) === -1
                ? (a += $(B))
                : (a.length && r.push(a), r.push($(B)), (a = ""));
            }),
              a.length && r.push(a);
          }
        };
      !(n = t.next()).done;

    )
      s();
    return r;
  },
  Dw = (function () {
    function A(e, t, r) {
      (this.text = Rw(t.data, r.textTransform)),
        (this.textBounds = Sw(e, this.text, r, t));
    }
    return A;
  })(),
  Rw = function (A, e) {
    switch (e) {
      case 1:
        return A.toLowerCase();
      case 3:
        return A.replace(xw, Mw);
      case 2:
        return A.toUpperCase();
      default:
        return A;
    }
  },
  xw = /(^|\s|:|-|\(|\))([a-z])/g,
  Mw = function (A, e, t) {
    return A.length > 0 ? e + t.toUpperCase() : A;
  },
  ma = (function (A) {
    IA(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return (
        (n.src = r.currentSrc || r.src),
        (n.intrinsicWidth = r.naturalWidth),
        (n.intrinsicHeight = r.naturalHeight),
        n.context.cache.addImage(n.src),
        n
      );
    }
    return e;
  })(DA),
  va = (function (A) {
    IA(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return (
        (n.canvas = r),
        (n.intrinsicWidth = r.width),
        (n.intrinsicHeight = r.height),
        n
      );
    }
    return e;
  })(DA),
  Ha = (function (A) {
    IA(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this,
        s = new XMLSerializer(),
        o = lr(t, r);
      return (
        r.setAttribute("width", o.width + "px"),
        r.setAttribute("height", o.height + "px"),
        (n.svg =
          "data:image/svg+xml," + encodeURIComponent(s.serializeToString(r))),
        (n.intrinsicWidth = r.width.baseVal.value),
        (n.intrinsicHeight = r.height.baseVal.value),
        n.context.cache.addImage(n.svg),
        n
      );
    }
    return e;
  })(DA),
  Ia = (function (A) {
    IA(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return (n.value = r.value), n;
    }
    return e;
  })(DA),
  On = (function (A) {
    IA(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return (
        (n.start = r.start),
        (n.reversed = typeof r.reversed == "boolean" && r.reversed === !0),
        n
      );
    }
    return e;
  })(DA),
  Nw = [{ type: 15, flags: 0, unit: "px", number: 3 }],
  Gw = [{ type: 16, flags: 0, number: 50 }],
  kw = function (A) {
    return A.width > A.height
      ? new PA(A.left + (A.width - A.height) / 2, A.top, A.height, A.height)
      : A.width < A.height
      ? new PA(A.left, A.top + (A.height - A.width) / 2, A.width, A.width)
      : A;
  },
  Pw = function (A) {
    var e = A.type === Vw ? new Array(A.value.length + 1).join("•") : A.value;
    return e.length === 0 ? A.placeholder || "" : e;
  },
  $t = "checkbox",
  qt = "radio",
  Vw = "password",
  Eo = 707406591,
  rs = (function (A) {
    IA(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      switch (
        ((n.type = r.type.toLowerCase()),
        (n.checked = r.checked),
        (n.value = Pw(r)),
        (n.type === $t || n.type === qt) &&
          ((n.styles.backgroundColor = 3739148031),
          (n.styles.borderTopColor =
            n.styles.borderRightColor =
            n.styles.borderBottomColor =
            n.styles.borderLeftColor =
              2779096575),
          (n.styles.borderTopWidth =
            n.styles.borderRightWidth =
            n.styles.borderBottomWidth =
            n.styles.borderLeftWidth =
              1),
          (n.styles.borderTopStyle =
            n.styles.borderRightStyle =
            n.styles.borderBottomStyle =
            n.styles.borderLeftStyle =
              1),
          (n.styles.backgroundClip = [0]),
          (n.styles.backgroundOrigin = [0]),
          (n.bounds = kw(n.bounds))),
        n.type)
      ) {
        case $t:
          n.styles.borderTopRightRadius =
            n.styles.borderTopLeftRadius =
            n.styles.borderBottomRightRadius =
            n.styles.borderBottomLeftRadius =
              Nw;
          break;
        case qt:
          n.styles.borderTopRightRadius =
            n.styles.borderTopLeftRadius =
            n.styles.borderBottomRightRadius =
            n.styles.borderBottomLeftRadius =
              Gw;
          break;
      }
      return n;
    }
    return e;
  })(DA),
  ya = (function (A) {
    IA(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this,
        s = r.options[r.selectedIndex || 0];
      return (n.value = (s && s.text) || ""), n;
    }
    return e;
  })(DA),
  La = (function (A) {
    IA(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return (n.value = r.value), n;
    }
    return e;
  })(DA),
  Sa = (function (A) {
    IA(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      (n.src = r.src),
        (n.width = parseInt(r.width, 10) || 0),
        (n.height = parseInt(r.height, 10) || 0),
        (n.backgroundColor = n.styles.backgroundColor);
      try {
        if (
          r.contentWindow &&
          r.contentWindow.document &&
          r.contentWindow.document.documentElement
        ) {
          n.tree = _a(t, r.contentWindow.document.documentElement);
          var s = r.contentWindow.document.documentElement
              ? Je(
                  t,
                  getComputedStyle(r.contentWindow.document.documentElement)
                    .backgroundColor
                )
              : kA.TRANSPARENT,
            o = r.contentWindow.document.body
              ? Je(
                  t,
                  getComputedStyle(r.contentWindow.document.body)
                    .backgroundColor
                )
              : kA.TRANSPARENT;
          n.backgroundColor = qA(s)
            ? qA(o)
              ? n.styles.backgroundColor
              : o
            : s;
        }
      } catch {}
      return n;
    }
    return e;
  })(DA),
  Xw = ["OL", "UL", "MENU"],
  Gt = function (A, e, t, r) {
    for (var n = e.firstChild, s = void 0; n; n = s)
      if (((s = n.nextSibling), Ka(n) && n.data.trim().length > 0))
        t.textNodes.push(new Dw(A, n, t.styles));
      else if (Fe(n))
        if (Ra(n) && n.assignedNodes)
          n.assignedNodes().forEach(function (i) {
            return Gt(A, i, t, r);
          });
        else {
          var o = ba(A, n);
          o.styles.isVisible() &&
            (Jw(n, o, r) ? (o.flags |= 4) : Yw(o.styles) && (o.flags |= 2),
            Xw.indexOf(n.tagName) !== -1 && (o.flags |= 8),
            t.elements.push(o),
            n.slot,
            n.shadowRoot
              ? Gt(A, n.shadowRoot, o, r)
              : !Ar(n) && !Ta(n) && !er(n) && Gt(A, n, o, r));
        }
  },
  ba = function (A, e) {
    return Rn(e)
      ? new ma(A, e)
      : Oa(e)
      ? new va(A, e)
      : Ta(e)
      ? new Ha(A, e)
      : Ww(e)
      ? new Ia(A, e)
      : Zw(e)
      ? new On(A, e)
      : jw(e)
      ? new rs(A, e)
      : er(e)
      ? new ya(A, e)
      : Ar(e)
      ? new La(A, e)
      : Da(e)
      ? new Sa(A, e)
      : new DA(A, e);
  },
  _a = function (A, e) {
    var t = ba(A, e);
    return (t.flags |= 4), Gt(A, e, t, t), t;
  },
  Jw = function (A, e, t) {
    return (
      e.styles.isPositionedWithZIndex() ||
      e.styles.opacity < 1 ||
      e.styles.isTransformed() ||
      (ns(A) && t.styles.isTransparent())
    );
  },
  Yw = function (A) {
    return A.isPositioned() || A.isFloating();
  },
  Ka = function (A) {
    return A.nodeType === Node.TEXT_NODE;
  },
  Fe = function (A) {
    return A.nodeType === Node.ELEMENT_NODE;
  },
  Dn = function (A) {
    return Fe(A) && typeof A.style < "u" && !kt(A);
  },
  kt = function (A) {
    return typeof A.className == "object";
  },
  Ww = function (A) {
    return A.tagName === "LI";
  },
  Zw = function (A) {
    return A.tagName === "OL";
  },
  jw = function (A) {
    return A.tagName === "INPUT";
  },
  zw = function (A) {
    return A.tagName === "HTML";
  },
  Ta = function (A) {
    return A.tagName === "svg";
  },
  ns = function (A) {
    return A.tagName === "BODY";
  },
  Oa = function (A) {
    return A.tagName === "CANVAS";
  },
  mo = function (A) {
    return A.tagName === "VIDEO";
  },
  Rn = function (A) {
    return A.tagName === "IMG";
  },
  Da = function (A) {
    return A.tagName === "IFRAME";
  },
  vo = function (A) {
    return A.tagName === "STYLE";
  },
  $w = function (A) {
    return A.tagName === "SCRIPT";
  },
  Ar = function (A) {
    return A.tagName === "TEXTAREA";
  },
  er = function (A) {
    return A.tagName === "SELECT";
  },
  Ra = function (A) {
    return A.tagName === "SLOT";
  },
  Ho = function (A) {
    return A.tagName.indexOf("-") > 0;
  },
  qw = (function () {
    function A() {
      this.counters = {};
    }
    return (
      (A.prototype.getCounterValue = function (e) {
        var t = this.counters[e];
        return t && t.length ? t[t.length - 1] : 1;
      }),
      (A.prototype.getCounterValues = function (e) {
        var t = this.counters[e];
        return t || [];
      }),
      (A.prototype.pop = function (e) {
        var t = this;
        e.forEach(function (r) {
          return t.counters[r].pop();
        });
      }),
      (A.prototype.parse = function (e) {
        var t = this,
          r = e.counterIncrement,
          n = e.counterReset,
          s = !0;
        r !== null &&
          r.forEach(function (i) {
            var a = t.counters[i.counter];
            a &&
              i.increment !== 0 &&
              ((s = !1),
              a.length || a.push(1),
              (a[Math.max(0, a.length - 1)] += i.increment));
          });
        var o = [];
        return (
          s &&
            n.forEach(function (i) {
              var a = t.counters[i.counter];
              o.push(i.counter),
                a || (a = t.counters[i.counter] = []),
                a.push(i.reset);
            }),
          o
        );
      }),
      A
    );
  })(),
  Io = {
    integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    values: [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ],
  },
  yo = {
    integers: [
      9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400,
      300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2,
      1,
    ],
    values: [
      "Ք",
      "Փ",
      "Ւ",
      "Ց",
      "Ր",
      "Տ",
      "Վ",
      "Ս",
      "Ռ",
      "Ջ",
      "Պ",
      "Չ",
      "Ո",
      "Շ",
      "Ն",
      "Յ",
      "Մ",
      "Ճ",
      "Ղ",
      "Ձ",
      "Հ",
      "Կ",
      "Ծ",
      "Խ",
      "Լ",
      "Ի",
      "Ժ",
      "Թ",
      "Ը",
      "Է",
      "Զ",
      "Ե",
      "Դ",
      "Գ",
      "Բ",
      "Ա",
    ],
  },
  AQ = {
    integers: [
      1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90,
      80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3,
      2, 1,
    ],
    values: [
      "י׳",
      "ט׳",
      "ח׳",
      "ז׳",
      "ו׳",
      "ה׳",
      "ד׳",
      "ג׳",
      "ב׳",
      "א׳",
      "ת",
      "ש",
      "ר",
      "ק",
      "צ",
      "פ",
      "ע",
      "ס",
      "נ",
      "מ",
      "ל",
      "כ",
      "יט",
      "יח",
      "יז",
      "טז",
      "טו",
      "י",
      "ט",
      "ח",
      "ז",
      "ו",
      "ה",
      "ד",
      "ג",
      "ב",
      "א",
    ],
  },
  eQ = {
    integers: [
      1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500,
      400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4,
      3, 2, 1,
    ],
    values: [
      "ჵ",
      "ჰ",
      "ჯ",
      "ჴ",
      "ხ",
      "ჭ",
      "წ",
      "ძ",
      "ც",
      "ჩ",
      "შ",
      "ყ",
      "ღ",
      "ქ",
      "ფ",
      "ჳ",
      "ტ",
      "ს",
      "რ",
      "ჟ",
      "პ",
      "ო",
      "ჲ",
      "ნ",
      "მ",
      "ლ",
      "კ",
      "ი",
      "თ",
      "ჱ",
      "ზ",
      "ვ",
      "ე",
      "დ",
      "გ",
      "ბ",
      "ა",
    ],
  },
  Qe = function (A, e, t, r, n, s) {
    return A < e || A > t
      ? tt(A, n, s.length > 0)
      : r.integers.reduce(function (o, i, a) {
          for (; A >= i; ) (A -= i), (o += r.values[a]);
          return o;
        }, "") + s;
  },
  xa = function (A, e, t, r) {
    var n = "";
    do t || A--, (n = r(A) + n), (A /= e);
    while (A * e >= e);
    return n;
  },
  z = function (A, e, t, r, n) {
    var s = t - e + 1;
    return (
      (A < 0 ? "-" : "") +
      (xa(Math.abs(A), s, r, function (o) {
        return $(Math.floor(o % s) + e);
      }) +
        n)
    );
  },
  ee = function (A, e, t) {
    t === void 0 && (t = ". ");
    var r = e.length;
    return (
      xa(Math.abs(A), r, !1, function (n) {
        return e[Math.floor(n % r)];
      }) + t
    );
  },
  he = 1,
  JA = 2,
  YA = 4,
  Ve = 8,
  MA = function (A, e, t, r, n, s) {
    if (A < -9999 || A > 9999) return tt(A, 4, n.length > 0);
    var o = Math.abs(A),
      i = n;
    if (o === 0) return e[0] + i;
    for (var a = 0; o > 0 && a <= 4; a++) {
      var B = o % 10;
      B === 0 && tA(s, he) && i !== ""
        ? (i = e[B] + i)
        : B > 1 ||
          (B === 1 && a === 0) ||
          (B === 1 && a === 1 && tA(s, JA)) ||
          (B === 1 && a === 1 && tA(s, YA) && A > 100) ||
          (B === 1 && a > 1 && tA(s, Ve))
        ? (i = e[B] + (a > 0 ? t[a - 1] : "") + i)
        : B === 1 && a > 0 && (i = t[a - 1] + i),
        (o = Math.floor(o / 10));
    }
    return (A < 0 ? r : "") + i;
  },
  Lo = "十百千萬",
  So = "拾佰仟萬",
  bo = "マイナス",
  jr = "마이너스",
  tt = function (A, e, t) {
    var r = t ? ". " : "",
      n = t ? "、" : "",
      s = t ? ", " : "",
      o = t ? " " : "";
    switch (e) {
      case 0:
        return "•" + o;
      case 1:
        return "◦" + o;
      case 2:
        return "◾" + o;
      case 5:
        var i = z(A, 48, 57, !0, r);
        return i.length < 4 ? "0" + i : i;
      case 4:
        return ee(A, "〇一二三四五六七八九", n);
      case 6:
        return Qe(A, 1, 3999, Io, 3, r).toLowerCase();
      case 7:
        return Qe(A, 1, 3999, Io, 3, r);
      case 8:
        return z(A, 945, 969, !1, r);
      case 9:
        return z(A, 97, 122, !1, r);
      case 10:
        return z(A, 65, 90, !1, r);
      case 11:
        return z(A, 1632, 1641, !0, r);
      case 12:
      case 49:
        return Qe(A, 1, 9999, yo, 3, r);
      case 35:
        return Qe(A, 1, 9999, yo, 3, r).toLowerCase();
      case 13:
        return z(A, 2534, 2543, !0, r);
      case 14:
      case 30:
        return z(A, 6112, 6121, !0, r);
      case 15:
        return ee(A, "子丑寅卯辰巳午未申酉戌亥", n);
      case 16:
        return ee(A, "甲乙丙丁戊己庚辛壬癸", n);
      case 17:
      case 48:
        return MA(A, "零一二三四五六七八九", Lo, "負", n, JA | YA | Ve);
      case 47:
        return MA(A, "零壹貳參肆伍陸柒捌玖", So, "負", n, he | JA | YA | Ve);
      case 42:
        return MA(A, "零一二三四五六七八九", Lo, "负", n, JA | YA | Ve);
      case 41:
        return MA(A, "零壹贰叁肆伍陆柒捌玖", So, "负", n, he | JA | YA | Ve);
      case 26:
        return MA(A, "〇一二三四五六七八九", "十百千万", bo, n, 0);
      case 25:
        return MA(A, "零壱弐参四伍六七八九", "拾百千万", bo, n, he | JA | YA);
      case 31:
        return MA(A, "영일이삼사오육칠팔구", "십백천만", jr, s, he | JA | YA);
      case 33:
        return MA(A, "零一二三四五六七八九", "十百千萬", jr, s, 0);
      case 32:
        return MA(A, "零壹貳參四五六七八九", "拾百千", jr, s, he | JA | YA);
      case 18:
        return z(A, 2406, 2415, !0, r);
      case 20:
        return Qe(A, 1, 19999, eQ, 3, r);
      case 21:
        return z(A, 2790, 2799, !0, r);
      case 22:
        return z(A, 2662, 2671, !0, r);
      case 22:
        return Qe(A, 1, 10999, AQ, 3, r);
      case 23:
        return ee(
          A,
          "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん"
        );
      case 24:
        return ee(
          A,
          "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす"
        );
      case 27:
        return z(A, 3302, 3311, !0, r);
      case 28:
        return ee(
          A,
          "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",
          n
        );
      case 29:
        return ee(
          A,
          "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",
          n
        );
      case 34:
        return z(A, 3792, 3801, !0, r);
      case 37:
        return z(A, 6160, 6169, !0, r);
      case 38:
        return z(A, 4160, 4169, !0, r);
      case 39:
        return z(A, 2918, 2927, !0, r);
      case 40:
        return z(A, 1776, 1785, !0, r);
      case 43:
        return z(A, 3046, 3055, !0, r);
      case 44:
        return z(A, 3174, 3183, !0, r);
      case 45:
        return z(A, 3664, 3673, !0, r);
      case 46:
        return z(A, 3872, 3881, !0, r);
      case 3:
      default:
        return z(A, 48, 57, !0, r);
    }
  },
  Ma = "data-html2canvas-ignore",
  _o = (function () {
    function A(e, t, r) {
      if (
        ((this.context = e),
        (this.options = r),
        (this.scrolledElements = []),
        (this.referenceElement = t),
        (this.counters = new qw()),
        (this.quoteDepth = 0),
        !t.ownerDocument)
      )
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(
        t.ownerDocument.documentElement,
        !1
      );
    }
    return (
      (A.prototype.toIFrame = function (e, t) {
        var r = this,
          n = tQ(e, t);
        if (!n.contentWindow)
          return Promise.reject("Unable to find iframe window");
        var s = e.defaultView.pageXOffset,
          o = e.defaultView.pageYOffset,
          i = n.contentWindow,
          a = i.document,
          B = sQ(n).then(function () {
            return cA(r, void 0, void 0, function () {
              var c, u;
              return aA(this, function (f) {
                switch (f.label) {
                  case 0:
                    return (
                      this.scrolledElements.forEach(BQ),
                      i &&
                        (i.scrollTo(t.left, t.top),
                        /(iPad|iPhone|iPod)/g.test(navigator.userAgent) &&
                          (i.scrollY !== t.top || i.scrollX !== t.left) &&
                          (this.context.logger.warn(
                            "Unable to restore scroll position for cloned document"
                          ),
                          (this.context.windowBounds =
                            this.context.windowBounds.add(
                              i.scrollX - t.left,
                              i.scrollY - t.top,
                              0,
                              0
                            )))),
                      (c = this.options.onclone),
                      (u = this.clonedReferenceElement),
                      typeof u > "u"
                        ? [
                            2,
                            Promise.reject(
                              "Error finding the " +
                                this.referenceElement.nodeName +
                                " in the cloned document"
                            ),
                          ]
                        : a.fonts && a.fonts.ready
                        ? [4, a.fonts.ready]
                        : [3, 2]
                    );
                  case 1:
                    f.sent(), (f.label = 2);
                  case 2:
                    return /(AppleWebKit)/g.test(navigator.userAgent)
                      ? [4, nQ(a)]
                      : [3, 4];
                  case 3:
                    f.sent(), (f.label = 4);
                  case 4:
                    return typeof c == "function"
                      ? [
                          2,
                          Promise.resolve()
                            .then(function () {
                              return c(a, u);
                            })
                            .then(function () {
                              return n;
                            }),
                        ]
                      : [2, n];
                }
              });
            });
          });
        return (
          a.open(),
          a.write(iQ(document.doctype) + "<html></html>"),
          aQ(this.referenceElement.ownerDocument, s, o),
          a.replaceChild(a.adoptNode(this.documentElement), a.documentElement),
          a.close(),
          B
        );
      }),
      (A.prototype.createElementClone = function (e) {
        if (Kn(e, 2)) debugger;
        if (Oa(e)) return this.createCanvasClone(e);
        if (mo(e)) return this.createVideoClone(e);
        if (vo(e)) return this.createStyleClone(e);
        var t = e.cloneNode(!1);
        return (
          Rn(t) &&
            (Rn(e) &&
              e.currentSrc &&
              e.currentSrc !== e.src &&
              ((t.src = e.currentSrc), (t.srcset = "")),
            t.loading === "lazy" && (t.loading = "eager")),
          Ho(t) ? this.createCustomElementClone(t) : t
        );
      }),
      (A.prototype.createCustomElementClone = function (e) {
        var t = document.createElement("html2canvascustomelement");
        return zr(e.style, t), t;
      }),
      (A.prototype.createStyleClone = function (e) {
        try {
          var t = e.sheet;
          if (t && t.cssRules) {
            var r = [].slice.call(t.cssRules, 0).reduce(function (s, o) {
                return o && typeof o.cssText == "string" ? s + o.cssText : s;
              }, ""),
              n = e.cloneNode(!1);
            return (n.textContent = r), n;
          }
        } catch (s) {
          if (
            (this.context.logger.error("Unable to access cssRules property", s),
            s.name !== "SecurityError")
          )
            throw s;
        }
        return e.cloneNode(!1);
      }),
      (A.prototype.createCanvasClone = function (e) {
        var t;
        if (this.options.inlineImages && e.ownerDocument) {
          var r = e.ownerDocument.createElement("img");
          try {
            return (r.src = e.toDataURL()), r;
          } catch {
            this.context.logger.info(
              "Unable to inline canvas contents, canvas is tainted",
              e
            );
          }
        }
        var n = e.cloneNode(!1);
        try {
          (n.width = e.width), (n.height = e.height);
          var s = e.getContext("2d"),
            o = n.getContext("2d");
          if (o)
            if (!this.options.allowTaint && s)
              o.putImageData(s.getImageData(0, 0, e.width, e.height), 0, 0);
            else {
              var i =
                (t = e.getContext("webgl2")) !== null && t !== void 0
                  ? t
                  : e.getContext("webgl");
              if (i) {
                var a = i.getContextAttributes();
                (a == null ? void 0 : a.preserveDrawingBuffer) === !1 &&
                  this.context.logger.warn(
                    "Unable to clone WebGL context as it has preserveDrawingBuffer=false",
                    e
                  );
              }
              o.drawImage(e, 0, 0);
            }
          return n;
        } catch {
          this.context.logger.info(
            "Unable to clone canvas as it is tainted",
            e
          );
        }
        return n;
      }),
      (A.prototype.createVideoClone = function (e) {
        var t = e.ownerDocument.createElement("canvas");
        (t.width = e.offsetWidth), (t.height = e.offsetHeight);
        var r = t.getContext("2d");
        try {
          return (
            r &&
              (r.drawImage(e, 0, 0, t.width, t.height),
              this.options.allowTaint ||
                r.getImageData(0, 0, t.width, t.height)),
            t
          );
        } catch {
          this.context.logger.info("Unable to clone video as it is tainted", e);
        }
        var n = e.ownerDocument.createElement("canvas");
        return (n.width = e.offsetWidth), (n.height = e.offsetHeight), n;
      }),
      (A.prototype.appendChildNode = function (e, t, r) {
        (!Fe(t) ||
          (!$w(t) &&
            !t.hasAttribute(Ma) &&
            (typeof this.options.ignoreElements != "function" ||
              !this.options.ignoreElements(t)))) &&
          (!this.options.copyStyles || !Fe(t) || !vo(t)) &&
          e.appendChild(this.cloneNode(t, r));
      }),
      (A.prototype.cloneChildNodes = function (e, t, r) {
        for (
          var n = this,
            s = e.shadowRoot ? e.shadowRoot.firstChild : e.firstChild;
          s;
          s = s.nextSibling
        )
          if (Fe(s) && Ra(s) && typeof s.assignedNodes == "function") {
            var o = s.assignedNodes();
            o.length &&
              o.forEach(function (i) {
                return n.appendChildNode(t, i, r);
              });
          } else this.appendChildNode(t, s, r);
      }),
      (A.prototype.cloneNode = function (e, t) {
        if (Ka(e)) return document.createTextNode(e.data);
        if (!e.ownerDocument) return e.cloneNode(!1);
        var r = e.ownerDocument.defaultView;
        if (r && Fe(e) && (Dn(e) || kt(e))) {
          var n = this.createElementClone(e);
          n.style.transitionProperty = "none";
          var s = r.getComputedStyle(e),
            o = r.getComputedStyle(e, ":before"),
            i = r.getComputedStyle(e, ":after");
          this.referenceElement === e &&
            Dn(n) &&
            (this.clonedReferenceElement = n),
            ns(n) && lQ(n);
          var a = this.counters.parse(new ao(this.context, s)),
            B = this.resolvePseudoContent(e, n, o, Ze.BEFORE);
          Ho(e) && (t = !0),
            mo(e) || this.cloneChildNodes(e, n, t),
            B && n.insertBefore(B, n.firstChild);
          var c = this.resolvePseudoContent(e, n, i, Ze.AFTER);
          return (
            c && n.appendChild(c),
            this.counters.pop(a),
            ((s && (this.options.copyStyles || kt(e)) && !Da(e)) || t) &&
              zr(s, n),
            (e.scrollTop !== 0 || e.scrollLeft !== 0) &&
              this.scrolledElements.push([n, e.scrollLeft, e.scrollTop]),
            (Ar(e) || er(e)) && (Ar(n) || er(n)) && (n.value = e.value),
            n
          );
        }
        return e.cloneNode(!1);
      }),
      (A.prototype.resolvePseudoContent = function (e, t, r, n) {
        var s = this;
        if (r) {
          var o = r.content,
            i = t.ownerDocument;
          if (
            !(
              !i ||
              !o ||
              o === "none" ||
              o === "-moz-alt-content" ||
              r.display === "none"
            )
          ) {
            this.counters.parse(new ao(this.context, r));
            var a = new Wg(this.context, r),
              B = i.createElement("html2canvaspseudoelement");
            zr(r, B),
              a.content.forEach(function (u) {
                if (u.type === 0) B.appendChild(i.createTextNode(u.value));
                else if (u.type === 22) {
                  var f = i.createElement("img");
                  (f.src = u.value), (f.style.opacity = "1"), B.appendChild(f);
                } else if (u.type === 18) {
                  if (u.name === "attr") {
                    var C = u.values.filter(P);
                    C.length &&
                      B.appendChild(
                        i.createTextNode(e.getAttribute(C[0].value) || "")
                      );
                  } else if (u.name === "counter") {
                    var g = u.values.filter(ve),
                      Q = g[0],
                      w = g[1];
                    if (Q && P(Q)) {
                      var U = s.counters.getCounterValue(Q.value),
                        h = w && P(w) ? _n.parse(s.context, w.value) : 3;
                      B.appendChild(i.createTextNode(tt(U, h, !1)));
                    }
                  } else if (u.name === "counters") {
                    var m = u.values.filter(ve),
                      Q = m[0],
                      L = m[1],
                      w = m[2];
                    if (Q && P(Q)) {
                      var y = s.counters.getCounterValues(Q.value),
                        F = w && P(w) ? _n.parse(s.context, w.value) : 3,
                        E = L && L.type === 0 ? L.value : "",
                        K = y
                          .map(function (W) {
                            return tt(W, F, !1);
                          })
                          .join(E);
                      B.appendChild(i.createTextNode(K));
                    }
                  }
                } else if (u.type === 20)
                  switch (u.value) {
                    case "open-quote":
                      B.appendChild(
                        i.createTextNode(io(a.quotes, s.quoteDepth++, !0))
                      );
                      break;
                    case "close-quote":
                      B.appendChild(
                        i.createTextNode(io(a.quotes, --s.quoteDepth, !1))
                      );
                      break;
                    default:
                      B.appendChild(i.createTextNode(u.value));
                  }
              }),
              (B.className = xn + " " + Mn);
            var c = n === Ze.BEFORE ? " " + xn : " " + Mn;
            return kt(t) ? (t.className.baseValue += c) : (t.className += c), B;
          }
        }
      }),
      (A.destroy = function (e) {
        return e.parentNode ? (e.parentNode.removeChild(e), !0) : !1;
      }),
      A
    );
  })(),
  Ze;
(function (A) {
  (A[(A.BEFORE = 0)] = "BEFORE"), (A[(A.AFTER = 1)] = "AFTER");
})(Ze || (Ze = {}));
var tQ = function (A, e) {
    var t = A.createElement("iframe");
    return (
      (t.className = "html2canvas-container"),
      (t.style.visibility = "hidden"),
      (t.style.position = "fixed"),
      (t.style.left = "-10000px"),
      (t.style.top = "0px"),
      (t.style.border = "0"),
      (t.width = e.width.toString()),
      (t.height = e.height.toString()),
      (t.scrolling = "no"),
      t.setAttribute(Ma, "true"),
      A.body.appendChild(t),
      t
    );
  },
  rQ = function (A) {
    return new Promise(function (e) {
      if (A.complete) {
        e();
        return;
      }
      if (!A.src) {
        e();
        return;
      }
      (A.onload = e), (A.onerror = e);
    });
  },
  nQ = function (A) {
    return Promise.all([].slice.call(A.images, 0).map(rQ));
  },
  sQ = function (A) {
    return new Promise(function (e, t) {
      var r = A.contentWindow;
      if (!r) return t("No window assigned for iframe");
      var n = r.document;
      r.onload = A.onload = function () {
        r.onload = A.onload = null;
        var s = setInterval(function () {
          n.body.childNodes.length > 0 &&
            n.readyState === "complete" &&
            (clearInterval(s), e(A));
        }, 50);
      };
    });
  },
  oQ = ["all", "d", "content"],
  zr = function (A, e) {
    for (var t = A.length - 1; t >= 0; t--) {
      var r = A.item(t);
      oQ.indexOf(r) === -1 && e.style.setProperty(r, A.getPropertyValue(r));
    }
    return e;
  },
  iQ = function (A) {
    var e = "";
    return (
      A &&
        ((e += "<!DOCTYPE "),
        A.name && (e += A.name),
        A.internalSubset && (e += A.internalSubset),
        A.publicId && (e += '"' + A.publicId + '"'),
        A.systemId && (e += '"' + A.systemId + '"'),
        (e += ">")),
      e
    );
  },
  aQ = function (A, e, t) {
    A &&
      A.defaultView &&
      (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) &&
      A.defaultView.scrollTo(e, t);
  },
  BQ = function (A) {
    var e = A[0],
      t = A[1],
      r = A[2];
    (e.scrollLeft = t), (e.scrollTop = r);
  },
  cQ = ":before",
  uQ = ":after",
  xn = "___html2canvas___pseudoelement_before",
  Mn = "___html2canvas___pseudoelement_after",
  Ko = `{
    content: "" !important;
    display: none !important;
}`,
  lQ = function (A) {
    fQ(
      A,
      "." +
        xn +
        cQ +
        Ko +
        `
         .` +
        Mn +
        uQ +
        Ko
    );
  },
  fQ = function (A, e) {
    var t = A.ownerDocument;
    if (t) {
      var r = t.createElement("style");
      (r.textContent = e), A.appendChild(r);
    }
  },
  Na = (function () {
    function A() {}
    return (
      (A.getOrigin = function (e) {
        var t = A._link;
        return t
          ? ((t.href = e), (t.href = t.href), t.protocol + t.hostname + t.port)
          : "about:blank";
      }),
      (A.isSameOrigin = function (e) {
        return A.getOrigin(e) === A._origin;
      }),
      (A.setContext = function (e) {
        (A._link = e.document.createElement("a")),
          (A._origin = A.getOrigin(e.location.href));
      }),
      (A._origin = "about:blank"),
      A
    );
  })(),
  gQ = (function () {
    function A(e, t) {
      (this.context = e), (this._options = t), (this._cache = {});
    }
    return (
      (A.prototype.addImage = function (e) {
        var t = Promise.resolve();
        return (
          this.has(e) ||
            ((qr(e) || CQ(e)) &&
              (this._cache[e] = this.loadImage(e)).catch(function () {})),
          t
        );
      }),
      (A.prototype.match = function (e) {
        return this._cache[e];
      }),
      (A.prototype.loadImage = function (e) {
        return cA(this, void 0, void 0, function () {
          var t,
            r,
            n,
            s,
            o = this;
          return aA(this, function (i) {
            switch (i.label) {
              case 0:
                return (
                  (t = Na.isSameOrigin(e)),
                  (r =
                    !$r(e) &&
                    this._options.useCORS === !0 &&
                    sA.SUPPORT_CORS_IMAGES &&
                    !t),
                  (n =
                    !$r(e) &&
                    !t &&
                    !qr(e) &&
                    typeof this._options.proxy == "string" &&
                    sA.SUPPORT_CORS_XHR &&
                    !r),
                  !t &&
                  this._options.allowTaint === !1 &&
                  !$r(e) &&
                  !qr(e) &&
                  !n &&
                  !r
                    ? [2]
                    : ((s = e), n ? [4, this.proxy(s)] : [3, 2])
                );
              case 1:
                (s = i.sent()), (i.label = 2);
              case 2:
                return (
                  this.context.logger.debug(
                    "Added image " + e.substring(0, 256)
                  ),
                  [
                    4,
                    new Promise(function (a, B) {
                      var c = new Image();
                      (c.onload = function () {
                        return a(c);
                      }),
                        (c.onerror = B),
                        (hQ(s) || r) && (c.crossOrigin = "anonymous"),
                        (c.src = s),
                        c.complete === !0 &&
                          setTimeout(function () {
                            return a(c);
                          }, 500),
                        o._options.imageTimeout > 0 &&
                          setTimeout(function () {
                            return B(
                              "Timed out (" +
                                o._options.imageTimeout +
                                "ms) loading image"
                            );
                          }, o._options.imageTimeout);
                    }),
                  ]
                );
              case 3:
                return [2, i.sent()];
            }
          });
        });
      }),
      (A.prototype.has = function (e) {
        return typeof this._cache[e] < "u";
      }),
      (A.prototype.keys = function () {
        return Promise.resolve(Object.keys(this._cache));
      }),
      (A.prototype.proxy = function (e) {
        var t = this,
          r = this._options.proxy;
        if (!r) throw new Error("No proxy defined");
        var n = e.substring(0, 256);
        return new Promise(function (s, o) {
          var i = sA.SUPPORT_RESPONSE_TYPE ? "blob" : "text",
            a = new XMLHttpRequest();
          (a.onload = function () {
            if (a.status === 200)
              if (i === "text") s(a.response);
              else {
                var u = new FileReader();
                u.addEventListener(
                  "load",
                  function () {
                    return s(u.result);
                  },
                  !1
                ),
                  u.addEventListener(
                    "error",
                    function (f) {
                      return o(f);
                    },
                    !1
                  ),
                  u.readAsDataURL(a.response);
              }
            else
              o(
                "Failed to proxy resource " +
                  n +
                  " with status code " +
                  a.status
              );
          }),
            (a.onerror = o);
          var B = r.indexOf("?") > -1 ? "&" : "?";
          if (
            (a.open(
              "GET",
              "" + r + B + "url=" + encodeURIComponent(e) + "&responseType=" + i
            ),
            i !== "text" && a instanceof XMLHttpRequest && (a.responseType = i),
            t._options.imageTimeout)
          ) {
            var c = t._options.imageTimeout;
            (a.timeout = c),
              (a.ontimeout = function () {
                return o("Timed out (" + c + "ms) proxying " + n);
              });
          }
          a.send();
        });
      }),
      A
    );
  })(),
  wQ = /^data:image\/svg\+xml/i,
  QQ = /^data:image\/.*;base64,/i,
  dQ = /^data:image\/.*/i,
  CQ = function (A) {
    return sA.SUPPORT_SVG_DRAWING || !UQ(A);
  },
  $r = function (A) {
    return dQ.test(A);
  },
  hQ = function (A) {
    return QQ.test(A);
  },
  qr = function (A) {
    return A.substr(0, 4) === "blob";
  },
  UQ = function (A) {
    return A.substr(-3).toLowerCase() === "svg" || wQ.test(A);
  },
  H = (function () {
    function A(e, t) {
      (this.type = 0), (this.x = e), (this.y = t);
    }
    return (
      (A.prototype.add = function (e, t) {
        return new A(this.x + e, this.y + t);
      }),
      A
    );
  })(),
  de = function (A, e, t) {
    return new H(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
  },
  yt = (function () {
    function A(e, t, r, n) {
      (this.type = 1),
        (this.start = e),
        (this.startControl = t),
        (this.endControl = r),
        (this.end = n);
    }
    return (
      (A.prototype.subdivide = function (e, t) {
        var r = de(this.start, this.startControl, e),
          n = de(this.startControl, this.endControl, e),
          s = de(this.endControl, this.end, e),
          o = de(r, n, e),
          i = de(n, s, e),
          a = de(o, i, e);
        return t ? new A(this.start, r, o, a) : new A(a, i, s, this.end);
      }),
      (A.prototype.add = function (e, t) {
        return new A(
          this.start.add(e, t),
          this.startControl.add(e, t),
          this.endControl.add(e, t),
          this.end.add(e, t)
        );
      }),
      (A.prototype.reverse = function () {
        return new A(this.end, this.endControl, this.startControl, this.start);
      }),
      A
    );
  })(),
  UA = function (A) {
    return A.type === 1;
  },
  FQ = (function () {
    function A(e) {
      var t = e.styles,
        r = e.bounds,
        n = ke(t.borderTopLeftRadius, r.width, r.height),
        s = n[0],
        o = n[1],
        i = ke(t.borderTopRightRadius, r.width, r.height),
        a = i[0],
        B = i[1],
        c = ke(t.borderBottomRightRadius, r.width, r.height),
        u = c[0],
        f = c[1],
        C = ke(t.borderBottomLeftRadius, r.width, r.height),
        g = C[0],
        Q = C[1],
        w = [];
      w.push((s + a) / r.width),
        w.push((g + u) / r.width),
        w.push((o + Q) / r.height),
        w.push((B + f) / r.height);
      var U = Math.max.apply(Math, w);
      U > 1 &&
        ((s /= U),
        (o /= U),
        (a /= U),
        (B /= U),
        (u /= U),
        (f /= U),
        (g /= U),
        (Q /= U));
      var h = r.width - a,
        m = r.height - f,
        L = r.width - u,
        y = r.height - Q,
        F = t.borderTopWidth,
        E = t.borderRightWidth,
        K = t.borderBottomWidth,
        S = t.borderLeftWidth,
        N = J(t.paddingTop, e.bounds.width),
        W = J(t.paddingRight, e.bounds.width),
        Z = J(t.paddingBottom, e.bounds.width),
        x = J(t.paddingLeft, e.bounds.width);
      (this.topLeftBorderDoubleOuterBox =
        s > 0 || o > 0
          ? Y(r.left + S / 3, r.top + F / 3, s - S / 3, o - F / 3, k.TOP_LEFT)
          : new H(r.left + S / 3, r.top + F / 3)),
        (this.topRightBorderDoubleOuterBox =
          s > 0 || o > 0
            ? Y(r.left + h, r.top + F / 3, a - E / 3, B - F / 3, k.TOP_RIGHT)
            : new H(r.left + r.width - E / 3, r.top + F / 3)),
        (this.bottomRightBorderDoubleOuterBox =
          u > 0 || f > 0
            ? Y(r.left + L, r.top + m, u - E / 3, f - K / 3, k.BOTTOM_RIGHT)
            : new H(r.left + r.width - E / 3, r.top + r.height - K / 3)),
        (this.bottomLeftBorderDoubleOuterBox =
          g > 0 || Q > 0
            ? Y(r.left + S / 3, r.top + y, g - S / 3, Q - K / 3, k.BOTTOM_LEFT)
            : new H(r.left + S / 3, r.top + r.height - K / 3)),
        (this.topLeftBorderDoubleInnerBox =
          s > 0 || o > 0
            ? Y(
                r.left + (S * 2) / 3,
                r.top + (F * 2) / 3,
                s - (S * 2) / 3,
                o - (F * 2) / 3,
                k.TOP_LEFT
              )
            : new H(r.left + (S * 2) / 3, r.top + (F * 2) / 3)),
        (this.topRightBorderDoubleInnerBox =
          s > 0 || o > 0
            ? Y(
                r.left + h,
                r.top + (F * 2) / 3,
                a - (E * 2) / 3,
                B - (F * 2) / 3,
                k.TOP_RIGHT
              )
            : new H(r.left + r.width - (E * 2) / 3, r.top + (F * 2) / 3)),
        (this.bottomRightBorderDoubleInnerBox =
          u > 0 || f > 0
            ? Y(
                r.left + L,
                r.top + m,
                u - (E * 2) / 3,
                f - (K * 2) / 3,
                k.BOTTOM_RIGHT
              )
            : new H(
                r.left + r.width - (E * 2) / 3,
                r.top + r.height - (K * 2) / 3
              )),
        (this.bottomLeftBorderDoubleInnerBox =
          g > 0 || Q > 0
            ? Y(
                r.left + (S * 2) / 3,
                r.top + y,
                g - (S * 2) / 3,
                Q - (K * 2) / 3,
                k.BOTTOM_LEFT
              )
            : new H(r.left + (S * 2) / 3, r.top + r.height - (K * 2) / 3)),
        (this.topLeftBorderStroke =
          s > 0 || o > 0
            ? Y(r.left + S / 2, r.top + F / 2, s - S / 2, o - F / 2, k.TOP_LEFT)
            : new H(r.left + S / 2, r.top + F / 2)),
        (this.topRightBorderStroke =
          s > 0 || o > 0
            ? Y(r.left + h, r.top + F / 2, a - E / 2, B - F / 2, k.TOP_RIGHT)
            : new H(r.left + r.width - E / 2, r.top + F / 2)),
        (this.bottomRightBorderStroke =
          u > 0 || f > 0
            ? Y(r.left + L, r.top + m, u - E / 2, f - K / 2, k.BOTTOM_RIGHT)
            : new H(r.left + r.width - E / 2, r.top + r.height - K / 2)),
        (this.bottomLeftBorderStroke =
          g > 0 || Q > 0
            ? Y(r.left + S / 2, r.top + y, g - S / 2, Q - K / 2, k.BOTTOM_LEFT)
            : new H(r.left + S / 2, r.top + r.height - K / 2)),
        (this.topLeftBorderBox =
          s > 0 || o > 0
            ? Y(r.left, r.top, s, o, k.TOP_LEFT)
            : new H(r.left, r.top)),
        (this.topRightBorderBox =
          a > 0 || B > 0
            ? Y(r.left + h, r.top, a, B, k.TOP_RIGHT)
            : new H(r.left + r.width, r.top)),
        (this.bottomRightBorderBox =
          u > 0 || f > 0
            ? Y(r.left + L, r.top + m, u, f, k.BOTTOM_RIGHT)
            : new H(r.left + r.width, r.top + r.height)),
        (this.bottomLeftBorderBox =
          g > 0 || Q > 0
            ? Y(r.left, r.top + y, g, Q, k.BOTTOM_LEFT)
            : new H(r.left, r.top + r.height)),
        (this.topLeftPaddingBox =
          s > 0 || o > 0
            ? Y(
                r.left + S,
                r.top + F,
                Math.max(0, s - S),
                Math.max(0, o - F),
                k.TOP_LEFT
              )
            : new H(r.left + S, r.top + F)),
        (this.topRightPaddingBox =
          a > 0 || B > 0
            ? Y(
                r.left + Math.min(h, r.width - E),
                r.top + F,
                h > r.width + E ? 0 : Math.max(0, a - E),
                Math.max(0, B - F),
                k.TOP_RIGHT
              )
            : new H(r.left + r.width - E, r.top + F)),
        (this.bottomRightPaddingBox =
          u > 0 || f > 0
            ? Y(
                r.left + Math.min(L, r.width - S),
                r.top + Math.min(m, r.height - K),
                Math.max(0, u - E),
                Math.max(0, f - K),
                k.BOTTOM_RIGHT
              )
            : new H(r.left + r.width - E, r.top + r.height - K)),
        (this.bottomLeftPaddingBox =
          g > 0 || Q > 0
            ? Y(
                r.left + S,
                r.top + Math.min(y, r.height - K),
                Math.max(0, g - S),
                Math.max(0, Q - K),
                k.BOTTOM_LEFT
              )
            : new H(r.left + S, r.top + r.height - K)),
        (this.topLeftContentBox =
          s > 0 || o > 0
            ? Y(
                r.left + S + x,
                r.top + F + N,
                Math.max(0, s - (S + x)),
                Math.max(0, o - (F + N)),
                k.TOP_LEFT
              )
            : new H(r.left + S + x, r.top + F + N)),
        (this.topRightContentBox =
          a > 0 || B > 0
            ? Y(
                r.left + Math.min(h, r.width + S + x),
                r.top + F + N,
                h > r.width + S + x ? 0 : a - S + x,
                B - (F + N),
                k.TOP_RIGHT
              )
            : new H(r.left + r.width - (E + W), r.top + F + N)),
        (this.bottomRightContentBox =
          u > 0 || f > 0
            ? Y(
                r.left + Math.min(L, r.width - (S + x)),
                r.top + Math.min(m, r.height + F + N),
                Math.max(0, u - (E + W)),
                f - (K + Z),
                k.BOTTOM_RIGHT
              )
            : new H(r.left + r.width - (E + W), r.top + r.height - (K + Z))),
        (this.bottomLeftContentBox =
          g > 0 || Q > 0
            ? Y(
                r.left + S + x,
                r.top + y,
                Math.max(0, g - (S + x)),
                Q - (K + Z),
                k.BOTTOM_LEFT
              )
            : new H(r.left + S + x, r.top + r.height - (K + Z)));
    }
    return A;
  })(),
  k;
(function (A) {
  (A[(A.TOP_LEFT = 0)] = "TOP_LEFT"),
    (A[(A.TOP_RIGHT = 1)] = "TOP_RIGHT"),
    (A[(A.BOTTOM_RIGHT = 2)] = "BOTTOM_RIGHT"),
    (A[(A.BOTTOM_LEFT = 3)] = "BOTTOM_LEFT");
})(k || (k = {}));
var Y = function (A, e, t, r, n) {
    var s = 4 * ((Math.sqrt(2) - 1) / 3),
      o = t * s,
      i = r * s,
      a = A + t,
      B = e + r;
    switch (n) {
      case k.TOP_LEFT:
        return new yt(
          new H(A, B),
          new H(A, B - i),
          new H(a - o, e),
          new H(a, e)
        );
      case k.TOP_RIGHT:
        return new yt(
          new H(A, e),
          new H(A + o, e),
          new H(a, B - i),
          new H(a, B)
        );
      case k.BOTTOM_RIGHT:
        return new yt(
          new H(a, e),
          new H(a, e + i),
          new H(A + o, B),
          new H(A, B)
        );
      case k.BOTTOM_LEFT:
      default:
        return new yt(
          new H(a, B),
          new H(a - o, B),
          new H(A, e + i),
          new H(A, e)
        );
    }
  },
  tr = function (A) {
    return [
      A.topLeftBorderBox,
      A.topRightBorderBox,
      A.bottomRightBorderBox,
      A.bottomLeftBorderBox,
    ];
  },
  pQ = function (A) {
    return [
      A.topLeftContentBox,
      A.topRightContentBox,
      A.bottomRightContentBox,
      A.bottomLeftContentBox,
    ];
  },
  rr = function (A) {
    return [
      A.topLeftPaddingBox,
      A.topRightPaddingBox,
      A.bottomRightPaddingBox,
      A.bottomLeftPaddingBox,
    ];
  },
  EQ = (function () {
    function A(e, t, r) {
      (this.offsetX = e),
        (this.offsetY = t),
        (this.matrix = r),
        (this.type = 0),
        (this.target = 6);
    }
    return A;
  })(),
  Lt = (function () {
    function A(e, t) {
      (this.path = e), (this.target = t), (this.type = 1);
    }
    return A;
  })(),
  mQ = (function () {
    function A(e) {
      (this.opacity = e), (this.type = 2), (this.target = 6);
    }
    return A;
  })(),
  vQ = function (A) {
    return A.type === 0;
  },
  Ga = function (A) {
    return A.type === 1;
  },
  HQ = function (A) {
    return A.type === 2;
  },
  To = function (A, e) {
    return A.length === e.length
      ? A.some(function (t, r) {
          return t === e[r];
        })
      : !1;
  },
  IQ = function (A, e, t, r, n) {
    return A.map(function (s, o) {
      switch (o) {
        case 0:
          return s.add(e, t);
        case 1:
          return s.add(e + r, t);
        case 2:
          return s.add(e + r, t + n);
        case 3:
          return s.add(e, t + n);
      }
      return s;
    });
  },
  ka = (function () {
    function A(e) {
      (this.element = e),
        (this.inlineLevel = []),
        (this.nonInlineLevel = []),
        (this.negativeZIndex = []),
        (this.zeroOrAutoZIndexOrTransformedOrOpacity = []),
        (this.positiveZIndex = []),
        (this.nonPositionedFloats = []),
        (this.nonPositionedInlineLevel = []);
    }
    return A;
  })(),
  Pa = (function () {
    function A(e, t) {
      if (
        ((this.container = e),
        (this.parent = t),
        (this.effects = []),
        (this.curves = new FQ(this.container)),
        this.container.styles.opacity < 1 &&
          this.effects.push(new mQ(this.container.styles.opacity)),
        this.container.styles.transform !== null)
      ) {
        var r =
            this.container.bounds.left +
            this.container.styles.transformOrigin[0].number,
          n =
            this.container.bounds.top +
            this.container.styles.transformOrigin[1].number,
          s = this.container.styles.transform;
        this.effects.push(new EQ(r, n, s));
      }
      if (this.container.styles.overflowX !== 0) {
        var o = tr(this.curves),
          i = rr(this.curves);
        To(o, i)
          ? this.effects.push(new Lt(o, 6))
          : (this.effects.push(new Lt(o, 2)), this.effects.push(new Lt(i, 4)));
      }
    }
    return (
      (A.prototype.getEffects = function (e) {
        for (
          var t = [2, 3].indexOf(this.container.styles.position) === -1,
            r = this.parent,
            n = this.effects.slice(0);
          r;

        ) {
          var s = r.effects.filter(function (a) {
            return !Ga(a);
          });
          if (t || r.container.styles.position !== 0 || !r.parent) {
            if (
              (n.unshift.apply(n, s),
              (t = [2, 3].indexOf(r.container.styles.position) === -1),
              r.container.styles.overflowX !== 0)
            ) {
              var o = tr(r.curves),
                i = rr(r.curves);
              To(o, i) || n.unshift(new Lt(i, 6));
            }
          } else n.unshift.apply(n, s);
          r = r.parent;
        }
        return n.filter(function (a) {
          return tA(a.target, e);
        });
      }),
      A
    );
  })(),
  Nn = function (A, e, t, r) {
    A.container.elements.forEach(function (n) {
      var s = tA(n.flags, 4),
        o = tA(n.flags, 2),
        i = new Pa(n, A);
      tA(n.styles.display, 2048) && r.push(i);
      var a = tA(n.flags, 8) ? [] : r;
      if (s || o) {
        var B = s || n.styles.isPositioned() ? t : e,
          c = new ka(i);
        if (
          n.styles.isPositioned() ||
          n.styles.opacity < 1 ||
          n.styles.isTransformed()
        ) {
          var u = n.styles.zIndex.order;
          if (u < 0) {
            var f = 0;
            B.negativeZIndex.some(function (g, Q) {
              return u > g.element.container.styles.zIndex.order
                ? ((f = Q), !1)
                : f > 0;
            }),
              B.negativeZIndex.splice(f, 0, c);
          } else if (u > 0) {
            var C = 0;
            B.positiveZIndex.some(function (g, Q) {
              return u >= g.element.container.styles.zIndex.order
                ? ((C = Q + 1), !1)
                : C > 0;
            }),
              B.positiveZIndex.splice(C, 0, c);
          } else B.zeroOrAutoZIndexOrTransformedOrOpacity.push(c);
        } else
          n.styles.isFloating()
            ? B.nonPositionedFloats.push(c)
            : B.nonPositionedInlineLevel.push(c);
        Nn(i, c, s ? c : t, a);
      } else n.styles.isInlineLevel() ? e.inlineLevel.push(i) : e.nonInlineLevel.push(i), Nn(i, e, t, a);
      tA(n.flags, 8) && Va(n, a);
    });
  },
  Va = function (A, e) {
    for (
      var t = A instanceof On ? A.start : 1,
        r = A instanceof On ? A.reversed : !1,
        n = 0;
      n < e.length;
      n++
    ) {
      var s = e[n];
      s.container instanceof Ia &&
        typeof s.container.value == "number" &&
        s.container.value !== 0 &&
        (t = s.container.value),
        (s.listValue = tt(t, s.container.styles.listStyleType, !0)),
        (t += r ? -1 : 1);
    }
  },
  yQ = function (A) {
    var e = new Pa(A, null),
      t = new ka(e),
      r = [];
    return Nn(e, t, t, r), Va(e.container, r), t;
  },
  Oo = function (A, e) {
    switch (e) {
      case 0:
        return pA(
          A.topLeftBorderBox,
          A.topLeftPaddingBox,
          A.topRightBorderBox,
          A.topRightPaddingBox
        );
      case 1:
        return pA(
          A.topRightBorderBox,
          A.topRightPaddingBox,
          A.bottomRightBorderBox,
          A.bottomRightPaddingBox
        );
      case 2:
        return pA(
          A.bottomRightBorderBox,
          A.bottomRightPaddingBox,
          A.bottomLeftBorderBox,
          A.bottomLeftPaddingBox
        );
      case 3:
      default:
        return pA(
          A.bottomLeftBorderBox,
          A.bottomLeftPaddingBox,
          A.topLeftBorderBox,
          A.topLeftPaddingBox
        );
    }
  },
  LQ = function (A, e) {
    switch (e) {
      case 0:
        return pA(
          A.topLeftBorderBox,
          A.topLeftBorderDoubleOuterBox,
          A.topRightBorderBox,
          A.topRightBorderDoubleOuterBox
        );
      case 1:
        return pA(
          A.topRightBorderBox,
          A.topRightBorderDoubleOuterBox,
          A.bottomRightBorderBox,
          A.bottomRightBorderDoubleOuterBox
        );
      case 2:
        return pA(
          A.bottomRightBorderBox,
          A.bottomRightBorderDoubleOuterBox,
          A.bottomLeftBorderBox,
          A.bottomLeftBorderDoubleOuterBox
        );
      case 3:
      default:
        return pA(
          A.bottomLeftBorderBox,
          A.bottomLeftBorderDoubleOuterBox,
          A.topLeftBorderBox,
          A.topLeftBorderDoubleOuterBox
        );
    }
  },
  SQ = function (A, e) {
    switch (e) {
      case 0:
        return pA(
          A.topLeftBorderDoubleInnerBox,
          A.topLeftPaddingBox,
          A.topRightBorderDoubleInnerBox,
          A.topRightPaddingBox
        );
      case 1:
        return pA(
          A.topRightBorderDoubleInnerBox,
          A.topRightPaddingBox,
          A.bottomRightBorderDoubleInnerBox,
          A.bottomRightPaddingBox
        );
      case 2:
        return pA(
          A.bottomRightBorderDoubleInnerBox,
          A.bottomRightPaddingBox,
          A.bottomLeftBorderDoubleInnerBox,
          A.bottomLeftPaddingBox
        );
      case 3:
      default:
        return pA(
          A.bottomLeftBorderDoubleInnerBox,
          A.bottomLeftPaddingBox,
          A.topLeftBorderDoubleInnerBox,
          A.topLeftPaddingBox
        );
    }
  },
  bQ = function (A, e) {
    switch (e) {
      case 0:
        return St(A.topLeftBorderStroke, A.topRightBorderStroke);
      case 1:
        return St(A.topRightBorderStroke, A.bottomRightBorderStroke);
      case 2:
        return St(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
      case 3:
      default:
        return St(A.bottomLeftBorderStroke, A.topLeftBorderStroke);
    }
  },
  St = function (A, e) {
    var t = [];
    return (
      UA(A) ? t.push(A.subdivide(0.5, !1)) : t.push(A),
      UA(e) ? t.push(e.subdivide(0.5, !0)) : t.push(e),
      t
    );
  },
  pA = function (A, e, t, r) {
    var n = [];
    return (
      UA(A) ? n.push(A.subdivide(0.5, !1)) : n.push(A),
      UA(t) ? n.push(t.subdivide(0.5, !0)) : n.push(t),
      UA(r) ? n.push(r.subdivide(0.5, !0).reverse()) : n.push(r),
      UA(e) ? n.push(e.subdivide(0.5, !1).reverse()) : n.push(e),
      n
    );
  },
  Xa = function (A) {
    var e = A.bounds,
      t = A.styles;
    return e.add(
      t.borderLeftWidth,
      t.borderTopWidth,
      -(t.borderRightWidth + t.borderLeftWidth),
      -(t.borderTopWidth + t.borderBottomWidth)
    );
  },
  nr = function (A) {
    var e = A.styles,
      t = A.bounds,
      r = J(e.paddingLeft, t.width),
      n = J(e.paddingRight, t.width),
      s = J(e.paddingTop, t.width),
      o = J(e.paddingBottom, t.width);
    return t.add(
      r + e.borderLeftWidth,
      s + e.borderTopWidth,
      -(e.borderRightWidth + e.borderLeftWidth + r + n),
      -(e.borderTopWidth + e.borderBottomWidth + s + o)
    );
  },
  _Q = function (A, e) {
    return A === 0 ? e.bounds : A === 2 ? nr(e) : Xa(e);
  },
  KQ = function (A, e) {
    return A === 0 ? e.bounds : A === 2 ? nr(e) : Xa(e);
  },
  An = function (A, e, t) {
    var r = _Q(Ue(A.styles.backgroundOrigin, e), A),
      n = KQ(Ue(A.styles.backgroundClip, e), A),
      s = TQ(Ue(A.styles.backgroundSize, e), t, r),
      o = s[0],
      i = s[1],
      a = ke(Ue(A.styles.backgroundPosition, e), r.width - o, r.height - i),
      B = OQ(Ue(A.styles.backgroundRepeat, e), a, s, r, n),
      c = Math.round(r.left + a[0]),
      u = Math.round(r.top + a[1]);
    return [B, c, u, o, i];
  },
  Ce = function (A) {
    return P(A) && A.value === Ee.AUTO;
  },
  bt = function (A) {
    return typeof A == "number";
  },
  TQ = function (A, e, t) {
    var r = e[0],
      n = e[1],
      s = e[2],
      o = A[0],
      i = A[1];
    if (!o) return [0, 0];
    if (q(o) && i && q(i)) return [J(o, t.width), J(i, t.height)];
    var a = bt(s);
    if (P(o) && (o.value === Ee.CONTAIN || o.value === Ee.COVER)) {
      if (bt(s)) {
        var B = t.width / t.height;
        return B < s != (o.value === Ee.COVER)
          ? [t.width, t.width / s]
          : [t.height * s, t.height];
      }
      return [t.width, t.height];
    }
    var c = bt(r),
      u = bt(n),
      f = c || u;
    if (Ce(o) && (!i || Ce(i))) {
      if (c && u) return [r, n];
      if (!a && !f) return [t.width, t.height];
      if (f && a) {
        var C = c ? r : n * s,
          g = u ? n : r / s;
        return [C, g];
      }
      var Q = c ? r : t.width,
        w = u ? n : t.height;
      return [Q, w];
    }
    if (a) {
      var U = 0,
        h = 0;
      return (
        q(o) ? (U = J(o, t.width)) : q(i) && (h = J(i, t.height)),
        Ce(o) ? (U = h * s) : (!i || Ce(i)) && (h = U / s),
        [U, h]
      );
    }
    var m = null,
      L = null;
    if (
      (q(o) ? (m = J(o, t.width)) : i && q(i) && (L = J(i, t.height)),
      m !== null && (!i || Ce(i)) && (L = c && u ? (m / r) * n : t.height),
      L !== null && Ce(o) && (m = c && u ? (L / n) * r : t.width),
      m !== null && L !== null)
    )
      return [m, L];
    throw new Error("Unable to calculate background-size for element");
  },
  Ue = function (A, e) {
    var t = A[e];
    return typeof t > "u" ? A[0] : t;
  },
  OQ = function (A, e, t, r, n) {
    var s = e[0],
      o = e[1],
      i = t[0],
      a = t[1];
    switch (A) {
      case 2:
        return [
          new H(Math.round(r.left), Math.round(r.top + o)),
          new H(Math.round(r.left + r.width), Math.round(r.top + o)),
          new H(Math.round(r.left + r.width), Math.round(a + r.top + o)),
          new H(Math.round(r.left), Math.round(a + r.top + o)),
        ];
      case 3:
        return [
          new H(Math.round(r.left + s), Math.round(r.top)),
          new H(Math.round(r.left + s + i), Math.round(r.top)),
          new H(Math.round(r.left + s + i), Math.round(r.height + r.top)),
          new H(Math.round(r.left + s), Math.round(r.height + r.top)),
        ];
      case 1:
        return [
          new H(Math.round(r.left + s), Math.round(r.top + o)),
          new H(Math.round(r.left + s + i), Math.round(r.top + o)),
          new H(Math.round(r.left + s + i), Math.round(r.top + o + a)),
          new H(Math.round(r.left + s), Math.round(r.top + o + a)),
        ];
      default:
        return [
          new H(Math.round(n.left), Math.round(n.top)),
          new H(Math.round(n.left + n.width), Math.round(n.top)),
          new H(Math.round(n.left + n.width), Math.round(n.height + n.top)),
          new H(Math.round(n.left), Math.round(n.height + n.top)),
        ];
    }
  },
  DQ =
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  Do = "Hidden Text",
  RQ = (function () {
    function A(e) {
      (this._data = {}), (this._document = e);
    }
    return (
      (A.prototype.parseMetrics = function (e, t) {
        var r = this._document.createElement("div"),
          n = this._document.createElement("img"),
          s = this._document.createElement("span"),
          o = this._document.body;
        (r.style.visibility = "hidden"),
          (r.style.fontFamily = e),
          (r.style.fontSize = t),
          (r.style.margin = "0"),
          (r.style.padding = "0"),
          (r.style.whiteSpace = "nowrap"),
          o.appendChild(r),
          (n.src = DQ),
          (n.width = 1),
          (n.height = 1),
          (n.style.margin = "0"),
          (n.style.padding = "0"),
          (n.style.verticalAlign = "baseline"),
          (s.style.fontFamily = e),
          (s.style.fontSize = t),
          (s.style.margin = "0"),
          (s.style.padding = "0"),
          s.appendChild(this._document.createTextNode(Do)),
          r.appendChild(s),
          r.appendChild(n);
        var i = n.offsetTop - s.offsetTop + 2;
        r.removeChild(s),
          r.appendChild(this._document.createTextNode(Do)),
          (r.style.lineHeight = "normal"),
          (n.style.verticalAlign = "super");
        var a = n.offsetTop - r.offsetTop + 2;
        return o.removeChild(r), { baseline: i, middle: a };
      }),
      (A.prototype.getMetrics = function (e, t) {
        var r = e + " " + t;
        return (
          typeof this._data[r] > "u" &&
            (this._data[r] = this.parseMetrics(e, t)),
          this._data[r]
        );
      }),
      A
    );
  })(),
  Ja = (function () {
    function A(e, t) {
      (this.context = e), (this.options = t);
    }
    return A;
  })(),
  xQ = 1e4,
  MQ = (function (A) {
    IA(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return (
        (n._activeEffects = []),
        (n.canvas = r.canvas ? r.canvas : document.createElement("canvas")),
        (n.ctx = n.canvas.getContext("2d")),
        r.canvas ||
          ((n.canvas.width = Math.floor(r.width * r.scale)),
          (n.canvas.height = Math.floor(r.height * r.scale)),
          (n.canvas.style.width = r.width + "px"),
          (n.canvas.style.height = r.height + "px")),
        (n.fontMetrics = new RQ(document)),
        n.ctx.scale(n.options.scale, n.options.scale),
        n.ctx.translate(-r.x, -r.y),
        (n.ctx.textBaseline = "bottom"),
        (n._activeEffects = []),
        n.context.logger.debug(
          "Canvas renderer initialized (" +
            r.width +
            "x" +
            r.height +
            ") with scale " +
            r.scale
        ),
        n
      );
    }
    return (
      (e.prototype.applyEffects = function (t) {
        for (var r = this; this._activeEffects.length; ) this.popEffect();
        t.forEach(function (n) {
          return r.applyEffect(n);
        });
      }),
      (e.prototype.applyEffect = function (t) {
        this.ctx.save(),
          HQ(t) && (this.ctx.globalAlpha = t.opacity),
          vQ(t) &&
            (this.ctx.translate(t.offsetX, t.offsetY),
            this.ctx.transform(
              t.matrix[0],
              t.matrix[1],
              t.matrix[2],
              t.matrix[3],
              t.matrix[4],
              t.matrix[5]
            ),
            this.ctx.translate(-t.offsetX, -t.offsetY)),
          Ga(t) && (this.path(t.path), this.ctx.clip()),
          this._activeEffects.push(t);
      }),
      (e.prototype.popEffect = function () {
        this._activeEffects.pop(), this.ctx.restore();
      }),
      (e.prototype.renderStack = function (t) {
        return cA(this, void 0, void 0, function () {
          var r;
          return aA(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  (r = t.element.container.styles),
                  r.isVisible() ? [4, this.renderStackContent(t)] : [3, 2]
                );
              case 1:
                n.sent(), (n.label = 2);
              case 2:
                return [2];
            }
          });
        });
      }),
      (e.prototype.renderNode = function (t) {
        return cA(this, void 0, void 0, function () {
          return aA(this, function (r) {
            switch (r.label) {
              case 0:
                if (tA(t.container.flags, 16)) debugger;
                return t.container.styles.isVisible()
                  ? [4, this.renderNodeBackgroundAndBorders(t)]
                  : [3, 3];
              case 1:
                return r.sent(), [4, this.renderNodeContent(t)];
              case 2:
                r.sent(), (r.label = 3);
              case 3:
                return [2];
            }
          });
        });
      }),
      (e.prototype.renderTextWithLetterSpacing = function (t, r, n) {
        var s = this;
        if (r === 0) this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + n);
        else {
          var o = ts(t.text);
          o.reduce(function (i, a) {
            return (
              s.ctx.fillText(a, i, t.bounds.top + n),
              i + s.ctx.measureText(a).width
            );
          }, t.bounds.left);
        }
      }),
      (e.prototype.createFontStyle = function (t) {
        var r = t.fontVariant
            .filter(function (o) {
              return o === "normal" || o === "small-caps";
            })
            .join(""),
          n = VQ(t.fontFamily).join(", "),
          s = at(t.fontSize)
            ? "" + t.fontSize.number + t.fontSize.unit
            : t.fontSize.number + "px";
        return [[t.fontStyle, r, t.fontWeight, s, n].join(" "), n, s];
      }),
      (e.prototype.renderTextNode = function (t, r) {
        return cA(this, void 0, void 0, function () {
          var n,
            s,
            o,
            i,
            a,
            B,
            c,
            u,
            f = this;
          return aA(this, function (C) {
            return (
              (n = this.createFontStyle(r)),
              (s = n[0]),
              (o = n[1]),
              (i = n[2]),
              (this.ctx.font = s),
              (this.ctx.direction = r.direction === 1 ? "rtl" : "ltr"),
              (this.ctx.textAlign = "left"),
              (this.ctx.textBaseline = "alphabetic"),
              (a = this.fontMetrics.getMetrics(o, i)),
              (B = a.baseline),
              (c = a.middle),
              (u = r.paintOrder),
              t.textBounds.forEach(function (g) {
                u.forEach(function (Q) {
                  switch (Q) {
                    case 0:
                      (f.ctx.fillStyle = rA(r.color)),
                        f.renderTextWithLetterSpacing(g, r.letterSpacing, B);
                      var w = r.textShadow;
                      w.length &&
                        g.text.trim().length &&
                        (w
                          .slice(0)
                          .reverse()
                          .forEach(function (U) {
                            (f.ctx.shadowColor = rA(U.color)),
                              (f.ctx.shadowOffsetX =
                                U.offsetX.number * f.options.scale),
                              (f.ctx.shadowOffsetY =
                                U.offsetY.number * f.options.scale),
                              (f.ctx.shadowBlur = U.blur.number),
                              f.renderTextWithLetterSpacing(
                                g,
                                r.letterSpacing,
                                B
                              );
                          }),
                        (f.ctx.shadowColor = ""),
                        (f.ctx.shadowOffsetX = 0),
                        (f.ctx.shadowOffsetY = 0),
                        (f.ctx.shadowBlur = 0)),
                        r.textDecorationLine.length &&
                          ((f.ctx.fillStyle = rA(
                            r.textDecorationColor || r.color
                          )),
                          r.textDecorationLine.forEach(function (U) {
                            switch (U) {
                              case 1:
                                f.ctx.fillRect(
                                  g.bounds.left,
                                  Math.round(g.bounds.top + B),
                                  g.bounds.width,
                                  1
                                );
                                break;
                              case 2:
                                f.ctx.fillRect(
                                  g.bounds.left,
                                  Math.round(g.bounds.top),
                                  g.bounds.width,
                                  1
                                );
                                break;
                              case 3:
                                f.ctx.fillRect(
                                  g.bounds.left,
                                  Math.ceil(g.bounds.top + c),
                                  g.bounds.width,
                                  1
                                );
                                break;
                            }
                          }));
                      break;
                    case 1:
                      r.webkitTextStrokeWidth &&
                        g.text.trim().length &&
                        ((f.ctx.strokeStyle = rA(r.webkitTextStrokeColor)),
                        (f.ctx.lineWidth = r.webkitTextStrokeWidth),
                        (f.ctx.lineJoin = window.chrome ? "miter" : "round"),
                        f.ctx.strokeText(
                          g.text,
                          g.bounds.left,
                          g.bounds.top + B
                        )),
                        (f.ctx.strokeStyle = ""),
                        (f.ctx.lineWidth = 0),
                        (f.ctx.lineJoin = "miter");
                      break;
                  }
                });
              }),
              [2]
            );
          });
        });
      }),
      (e.prototype.renderReplacedElement = function (t, r, n) {
        if (n && t.intrinsicWidth > 0 && t.intrinsicHeight > 0) {
          var s = nr(t),
            o = rr(r);
          this.path(o),
            this.ctx.save(),
            this.ctx.clip(),
            this.ctx.drawImage(
              n,
              0,
              0,
              t.intrinsicWidth,
              t.intrinsicHeight,
              s.left,
              s.top,
              s.width,
              s.height
            ),
            this.ctx.restore();
        }
      }),
      (e.prototype.renderNodeContent = function (t) {
        return cA(this, void 0, void 0, function () {
          var r,
            n,
            s,
            o,
            i,
            a,
            h,
            h,
            B,
            c,
            u,
            f,
            L,
            C,
            g,
            y,
            Q,
            w,
            U,
            h,
            m,
            L,
            y;
          return aA(this, function (F) {
            switch (F.label) {
              case 0:
                this.applyEffects(t.getEffects(4)),
                  (r = t.container),
                  (n = t.curves),
                  (s = r.styles),
                  (o = 0),
                  (i = r.textNodes),
                  (F.label = 1);
              case 1:
                return o < i.length
                  ? ((a = i[o]), [4, this.renderTextNode(a, s)])
                  : [3, 4];
              case 2:
                F.sent(), (F.label = 3);
              case 3:
                return o++, [3, 1];
              case 4:
                if (!(r instanceof ma)) return [3, 8];
                F.label = 5;
              case 5:
                return (
                  F.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)]
                );
              case 6:
                return (
                  (h = F.sent()), this.renderReplacedElement(r, n, h), [3, 8]
                );
              case 7:
                return (
                  F.sent(),
                  this.context.logger.error("Error loading image " + r.src),
                  [3, 8]
                );
              case 8:
                if (
                  (r instanceof va &&
                    this.renderReplacedElement(r, n, r.canvas),
                  !(r instanceof Ha))
                )
                  return [3, 12];
                F.label = 9;
              case 9:
                return (
                  F.trys.push([9, 11, , 12]),
                  [4, this.context.cache.match(r.svg)]
                );
              case 10:
                return (
                  (h = F.sent()), this.renderReplacedElement(r, n, h), [3, 12]
                );
              case 11:
                return (
                  F.sent(),
                  this.context.logger.error(
                    "Error loading svg " + r.svg.substring(0, 255)
                  ),
                  [3, 12]
                );
              case 12:
                return r instanceof Sa && r.tree
                  ? ((B = new e(this.context, {
                      scale: this.options.scale,
                      backgroundColor: r.backgroundColor,
                      x: 0,
                      y: 0,
                      width: r.width,
                      height: r.height,
                    })),
                    [4, B.render(r.tree)])
                  : [3, 14];
              case 13:
                (c = F.sent()),
                  r.width &&
                    r.height &&
                    this.ctx.drawImage(
                      c,
                      0,
                      0,
                      r.width,
                      r.height,
                      r.bounds.left,
                      r.bounds.top,
                      r.bounds.width,
                      r.bounds.height
                    ),
                  (F.label = 14);
              case 14:
                if (
                  (r instanceof rs &&
                    ((u = Math.min(r.bounds.width, r.bounds.height)),
                    r.type === $t
                      ? r.checked &&
                        (this.ctx.save(),
                        this.path([
                          new H(
                            r.bounds.left + u * 0.39363,
                            r.bounds.top + u * 0.79
                          ),
                          new H(
                            r.bounds.left + u * 0.16,
                            r.bounds.top + u * 0.5549
                          ),
                          new H(
                            r.bounds.left + u * 0.27347,
                            r.bounds.top + u * 0.44071
                          ),
                          new H(
                            r.bounds.left + u * 0.39694,
                            r.bounds.top + u * 0.5649
                          ),
                          new H(
                            r.bounds.left + u * 0.72983,
                            r.bounds.top + u * 0.23
                          ),
                          new H(
                            r.bounds.left + u * 0.84,
                            r.bounds.top + u * 0.34085
                          ),
                          new H(
                            r.bounds.left + u * 0.39363,
                            r.bounds.top + u * 0.79
                          ),
                        ]),
                        (this.ctx.fillStyle = rA(Eo)),
                        this.ctx.fill(),
                        this.ctx.restore())
                      : r.type === qt &&
                        r.checked &&
                        (this.ctx.save(),
                        this.ctx.beginPath(),
                        this.ctx.arc(
                          r.bounds.left + u / 2,
                          r.bounds.top + u / 2,
                          u / 4,
                          0,
                          Math.PI * 2,
                          !0
                        ),
                        (this.ctx.fillStyle = rA(Eo)),
                        this.ctx.fill(),
                        this.ctx.restore())),
                  NQ(r) && r.value.length)
                ) {
                  switch (
                    ((f = this.createFontStyle(s)),
                    (L = f[0]),
                    (C = f[1]),
                    (g = this.fontMetrics.getMetrics(L, C).baseline),
                    (this.ctx.font = L),
                    (this.ctx.fillStyle = rA(s.color)),
                    (this.ctx.textBaseline = "alphabetic"),
                    (this.ctx.textAlign = kQ(r.styles.textAlign)),
                    (y = nr(r)),
                    (Q = 0),
                    r.styles.textAlign)
                  ) {
                    case 1:
                      Q += y.width / 2;
                      break;
                    case 2:
                      Q += y.width;
                      break;
                  }
                  (w = y.add(Q, 0, 0, -y.height / 2 + 1)),
                    this.ctx.save(),
                    this.path([
                      new H(y.left, y.top),
                      new H(y.left + y.width, y.top),
                      new H(y.left + y.width, y.top + y.height),
                      new H(y.left, y.top + y.height),
                    ]),
                    this.ctx.clip(),
                    this.renderTextWithLetterSpacing(
                      new We(r.value, w),
                      s.letterSpacing,
                      g
                    ),
                    this.ctx.restore(),
                    (this.ctx.textBaseline = "alphabetic"),
                    (this.ctx.textAlign = "left");
                }
                if (!tA(r.styles.display, 2048)) return [3, 20];
                if (r.styles.listStyleImage === null) return [3, 19];
                if (((U = r.styles.listStyleImage), U.type !== 0))
                  return [3, 18];
                (h = void 0), (m = U.url), (F.label = 15);
              case 15:
                return (
                  F.trys.push([15, 17, , 18]), [4, this.context.cache.match(m)]
                );
              case 16:
                return (
                  (h = F.sent()),
                  this.ctx.drawImage(
                    h,
                    r.bounds.left - (h.width + 10),
                    r.bounds.top
                  ),
                  [3, 18]
                );
              case 17:
                return (
                  F.sent(),
                  this.context.logger.error(
                    "Error loading list-style-image " + m
                  ),
                  [3, 18]
                );
              case 18:
                return [3, 20];
              case 19:
                t.listValue &&
                  r.styles.listStyleType !== -1 &&
                  ((L = this.createFontStyle(s)[0]),
                  (this.ctx.font = L),
                  (this.ctx.fillStyle = rA(s.color)),
                  (this.ctx.textBaseline = "middle"),
                  (this.ctx.textAlign = "right"),
                  (y = new PA(
                    r.bounds.left,
                    r.bounds.top + J(r.styles.paddingTop, r.bounds.width),
                    r.bounds.width,
                    so(s.lineHeight, s.fontSize.number) / 2 + 1
                  )),
                  this.renderTextWithLetterSpacing(
                    new We(t.listValue, y),
                    s.letterSpacing,
                    so(s.lineHeight, s.fontSize.number) / 2 + 2
                  ),
                  (this.ctx.textBaseline = "bottom"),
                  (this.ctx.textAlign = "left")),
                  (F.label = 20);
              case 20:
                return [2];
            }
          });
        });
      }),
      (e.prototype.renderStackContent = function (t) {
        return cA(this, void 0, void 0, function () {
          var r, n, U, s, o, U, i, a, U, B, c, U, u, f, U, C, g, U, Q, w, U;
          return aA(this, function (h) {
            switch (h.label) {
              case 0:
                if (tA(t.element.container.flags, 16)) debugger;
                return [4, this.renderNodeBackgroundAndBorders(t.element)];
              case 1:
                h.sent(), (r = 0), (n = t.negativeZIndex), (h.label = 2);
              case 2:
                return r < n.length
                  ? ((U = n[r]), [4, this.renderStack(U)])
                  : [3, 5];
              case 3:
                h.sent(), (h.label = 4);
              case 4:
                return r++, [3, 2];
              case 5:
                return [4, this.renderNodeContent(t.element)];
              case 6:
                h.sent(), (s = 0), (o = t.nonInlineLevel), (h.label = 7);
              case 7:
                return s < o.length
                  ? ((U = o[s]), [4, this.renderNode(U)])
                  : [3, 10];
              case 8:
                h.sent(), (h.label = 9);
              case 9:
                return s++, [3, 7];
              case 10:
                (i = 0), (a = t.nonPositionedFloats), (h.label = 11);
              case 11:
                return i < a.length
                  ? ((U = a[i]), [4, this.renderStack(U)])
                  : [3, 14];
              case 12:
                h.sent(), (h.label = 13);
              case 13:
                return i++, [3, 11];
              case 14:
                (B = 0), (c = t.nonPositionedInlineLevel), (h.label = 15);
              case 15:
                return B < c.length
                  ? ((U = c[B]), [4, this.renderStack(U)])
                  : [3, 18];
              case 16:
                h.sent(), (h.label = 17);
              case 17:
                return B++, [3, 15];
              case 18:
                (u = 0), (f = t.inlineLevel), (h.label = 19);
              case 19:
                return u < f.length
                  ? ((U = f[u]), [4, this.renderNode(U)])
                  : [3, 22];
              case 20:
                h.sent(), (h.label = 21);
              case 21:
                return u++, [3, 19];
              case 22:
                (C = 0),
                  (g = t.zeroOrAutoZIndexOrTransformedOrOpacity),
                  (h.label = 23);
              case 23:
                return C < g.length
                  ? ((U = g[C]), [4, this.renderStack(U)])
                  : [3, 26];
              case 24:
                h.sent(), (h.label = 25);
              case 25:
                return C++, [3, 23];
              case 26:
                (Q = 0), (w = t.positiveZIndex), (h.label = 27);
              case 27:
                return Q < w.length
                  ? ((U = w[Q]), [4, this.renderStack(U)])
                  : [3, 30];
              case 28:
                h.sent(), (h.label = 29);
              case 29:
                return Q++, [3, 27];
              case 30:
                return [2];
            }
          });
        });
      }),
      (e.prototype.mask = function (t) {
        this.ctx.beginPath(),
          this.ctx.moveTo(0, 0),
          this.ctx.lineTo(this.canvas.width, 0),
          this.ctx.lineTo(this.canvas.width, this.canvas.height),
          this.ctx.lineTo(0, this.canvas.height),
          this.ctx.lineTo(0, 0),
          this.formatPath(t.slice(0).reverse()),
          this.ctx.closePath();
      }),
      (e.prototype.path = function (t) {
        this.ctx.beginPath(), this.formatPath(t), this.ctx.closePath();
      }),
      (e.prototype.formatPath = function (t) {
        var r = this;
        t.forEach(function (n, s) {
          var o = UA(n) ? n.start : n;
          s === 0 ? r.ctx.moveTo(o.x, o.y) : r.ctx.lineTo(o.x, o.y),
            UA(n) &&
              r.ctx.bezierCurveTo(
                n.startControl.x,
                n.startControl.y,
                n.endControl.x,
                n.endControl.y,
                n.end.x,
                n.end.y
              );
        });
      }),
      (e.prototype.renderRepeat = function (t, r, n, s) {
        this.path(t),
          (this.ctx.fillStyle = r),
          this.ctx.translate(n, s),
          this.ctx.fill(),
          this.ctx.translate(-n, -s);
      }),
      (e.prototype.resizeImage = function (t, r, n) {
        var s;
        if (t.width === r && t.height === n) return t;
        var o =
            (s = this.canvas.ownerDocument) !== null && s !== void 0
              ? s
              : document,
          i = o.createElement("canvas");
        (i.width = Math.max(1, r)), (i.height = Math.max(1, n));
        var a = i.getContext("2d");
        return a.drawImage(t, 0, 0, t.width, t.height, 0, 0, r, n), i;
      }),
      (e.prototype.renderBackgroundImage = function (t) {
        return cA(this, void 0, void 0, function () {
          var r, n, s, o, i, a;
          return aA(this, function (B) {
            switch (B.label) {
              case 0:
                (r = t.styles.backgroundImage.length - 1),
                  (n = function (c) {
                    var u,
                      f,
                      C,
                      N,
                      j,
                      eA,
                      x,
                      X,
                      K,
                      g,
                      N,
                      j,
                      eA,
                      x,
                      X,
                      Q,
                      w,
                      U,
                      h,
                      m,
                      L,
                      y,
                      F,
                      E,
                      K,
                      S,
                      N,
                      W,
                      Z,
                      x,
                      X,
                      yA,
                      j,
                      eA,
                      RA,
                      QA,
                      LA,
                      l,
                      p,
                      b,
                      _,
                      D;
                    return aA(this, function (M) {
                      switch (M.label) {
                        case 0:
                          if (c.type !== 0) return [3, 5];
                          (u = void 0), (f = c.url), (M.label = 1);
                        case 1:
                          return (
                            M.trys.push([1, 3, , 4]),
                            [4, s.context.cache.match(f)]
                          );
                        case 2:
                          return (u = M.sent()), [3, 4];
                        case 3:
                          return (
                            M.sent(),
                            s.context.logger.error(
                              "Error loading background-image " + f
                            ),
                            [3, 4]
                          );
                        case 4:
                          return (
                            u &&
                              ((C = An(t, r, [
                                u.width,
                                u.height,
                                u.width / u.height,
                              ])),
                              (N = C[0]),
                              (j = C[1]),
                              (eA = C[2]),
                              (x = C[3]),
                              (X = C[4]),
                              (K = s.ctx.createPattern(
                                s.resizeImage(u, x, X),
                                "repeat"
                              )),
                              s.renderRepeat(N, K, j, eA)),
                            [3, 6]
                          );
                        case 5:
                          vf(c)
                            ? ((g = An(t, r, [null, null, null])),
                              (N = g[0]),
                              (j = g[1]),
                              (eA = g[2]),
                              (x = g[3]),
                              (X = g[4]),
                              (Q = Uf(c.angle, x, X)),
                              (w = Q[0]),
                              (U = Q[1]),
                              (h = Q[2]),
                              (m = Q[3]),
                              (L = Q[4]),
                              (y = document.createElement("canvas")),
                              (y.width = x),
                              (y.height = X),
                              (F = y.getContext("2d")),
                              (E = F.createLinearGradient(U, m, h, L)),
                              ro(c.stops, w).forEach(function (G) {
                                return E.addColorStop(G.stop, rA(G.color));
                              }),
                              (F.fillStyle = E),
                              F.fillRect(0, 0, x, X),
                              x > 0 &&
                                X > 0 &&
                                ((K = s.ctx.createPattern(y, "repeat")),
                                s.renderRepeat(N, K, j, eA)))
                            : Hf(c) &&
                              ((S = An(t, r, [null, null, null])),
                              (N = S[0]),
                              (W = S[1]),
                              (Z = S[2]),
                              (x = S[3]),
                              (X = S[4]),
                              (yA =
                                c.position.length === 0 ? [qn] : c.position),
                              (j = J(yA[0], x)),
                              (eA = J(yA[yA.length - 1], X)),
                              (RA = Ff(c, j, eA, x, X)),
                              (QA = RA[0]),
                              (LA = RA[1]),
                              QA > 0 &&
                                LA > 0 &&
                                ((l = s.ctx.createRadialGradient(
                                  W + j,
                                  Z + eA,
                                  0,
                                  W + j,
                                  Z + eA,
                                  QA
                                )),
                                ro(c.stops, QA * 2).forEach(function (G) {
                                  return l.addColorStop(G.stop, rA(G.color));
                                }),
                                s.path(N),
                                (s.ctx.fillStyle = l),
                                QA !== LA
                                  ? ((p = t.bounds.left + 0.5 * t.bounds.width),
                                    (b = t.bounds.top + 0.5 * t.bounds.height),
                                    (_ = LA / QA),
                                    (D = 1 / _),
                                    s.ctx.save(),
                                    s.ctx.translate(p, b),
                                    s.ctx.transform(1, 0, 0, _, 0, 0),
                                    s.ctx.translate(-p, -b),
                                    s.ctx.fillRect(
                                      W,
                                      D * (Z - b) + b,
                                      x,
                                      X * D
                                    ),
                                    s.ctx.restore())
                                  : s.ctx.fill())),
                            (M.label = 6);
                        case 6:
                          return r--, [2];
                      }
                    });
                  }),
                  (s = this),
                  (o = 0),
                  (i = t.styles.backgroundImage.slice(0).reverse()),
                  (B.label = 1);
              case 1:
                return o < i.length ? ((a = i[o]), [5, n(a)]) : [3, 4];
              case 2:
                B.sent(), (B.label = 3);
              case 3:
                return o++, [3, 1];
              case 4:
                return [2];
            }
          });
        });
      }),
      (e.prototype.renderSolidBorder = function (t, r, n) {
        return cA(this, void 0, void 0, function () {
          return aA(this, function (s) {
            return (
              this.path(Oo(n, r)),
              (this.ctx.fillStyle = rA(t)),
              this.ctx.fill(),
              [2]
            );
          });
        });
      }),
      (e.prototype.renderDoubleBorder = function (t, r, n, s) {
        return cA(this, void 0, void 0, function () {
          var o, i;
          return aA(this, function (a) {
            switch (a.label) {
              case 0:
                return r < 3 ? [4, this.renderSolidBorder(t, n, s)] : [3, 2];
              case 1:
                return a.sent(), [2];
              case 2:
                return (
                  (o = LQ(s, n)),
                  this.path(o),
                  (this.ctx.fillStyle = rA(t)),
                  this.ctx.fill(),
                  (i = SQ(s, n)),
                  this.path(i),
                  this.ctx.fill(),
                  [2]
                );
            }
          });
        });
      }),
      (e.prototype.renderNodeBackgroundAndBorders = function (t) {
        return cA(this, void 0, void 0, function () {
          var r,
            n,
            s,
            o,
            i,
            a,
            B,
            c,
            u = this;
          return aA(this, function (f) {
            switch (f.label) {
              case 0:
                return (
                  this.applyEffects(t.getEffects(2)),
                  (r = t.container.styles),
                  (n = !qA(r.backgroundColor) || r.backgroundImage.length),
                  (s = [
                    {
                      style: r.borderTopStyle,
                      color: r.borderTopColor,
                      width: r.borderTopWidth,
                    },
                    {
                      style: r.borderRightStyle,
                      color: r.borderRightColor,
                      width: r.borderRightWidth,
                    },
                    {
                      style: r.borderBottomStyle,
                      color: r.borderBottomColor,
                      width: r.borderBottomWidth,
                    },
                    {
                      style: r.borderLeftStyle,
                      color: r.borderLeftColor,
                      width: r.borderLeftWidth,
                    },
                  ]),
                  (o = GQ(Ue(r.backgroundClip, 0), t.curves)),
                  n || r.boxShadow.length
                    ? (this.ctx.save(),
                      this.path(o),
                      this.ctx.clip(),
                      qA(r.backgroundColor) ||
                        ((this.ctx.fillStyle = rA(r.backgroundColor)),
                        this.ctx.fill()),
                      [4, this.renderBackgroundImage(t.container)])
                    : [3, 2]
                );
              case 1:
                f.sent(),
                  this.ctx.restore(),
                  r.boxShadow
                    .slice(0)
                    .reverse()
                    .forEach(function (C) {
                      u.ctx.save();
                      var g = tr(t.curves),
                        Q = C.inset ? 0 : xQ,
                        w = IQ(
                          g,
                          -Q + (C.inset ? 1 : -1) * C.spread.number,
                          (C.inset ? 1 : -1) * C.spread.number,
                          C.spread.number * (C.inset ? -2 : 2),
                          C.spread.number * (C.inset ? -2 : 2)
                        );
                      C.inset
                        ? (u.path(g), u.ctx.clip(), u.mask(w))
                        : (u.mask(g), u.ctx.clip(), u.path(w)),
                        (u.ctx.shadowOffsetX = C.offsetX.number + Q),
                        (u.ctx.shadowOffsetY = C.offsetY.number),
                        (u.ctx.shadowColor = rA(C.color)),
                        (u.ctx.shadowBlur = C.blur.number),
                        (u.ctx.fillStyle = C.inset
                          ? rA(C.color)
                          : "rgba(0,0,0,1)"),
                        u.ctx.fill(),
                        u.ctx.restore();
                    }),
                  (f.label = 2);
              case 2:
                (i = 0), (a = 0), (B = s), (f.label = 3);
              case 3:
                return a < B.length
                  ? ((c = B[a]),
                    c.style !== 0 && !qA(c.color) && c.width > 0
                      ? c.style !== 2
                        ? [3, 5]
                        : [
                            4,
                            this.renderDashedDottedBorder(
                              c.color,
                              c.width,
                              i,
                              t.curves,
                              2
                            ),
                          ]
                      : [3, 11])
                  : [3, 13];
              case 4:
                return f.sent(), [3, 11];
              case 5:
                return c.style !== 3
                  ? [3, 7]
                  : [
                      4,
                      this.renderDashedDottedBorder(
                        c.color,
                        c.width,
                        i,
                        t.curves,
                        3
                      ),
                    ];
              case 6:
                return f.sent(), [3, 11];
              case 7:
                return c.style !== 4
                  ? [3, 9]
                  : [4, this.renderDoubleBorder(c.color, c.width, i, t.curves)];
              case 8:
                return f.sent(), [3, 11];
              case 9:
                return [4, this.renderSolidBorder(c.color, i, t.curves)];
              case 10:
                f.sent(), (f.label = 11);
              case 11:
                i++, (f.label = 12);
              case 12:
                return a++, [3, 3];
              case 13:
                return [2];
            }
          });
        });
      }),
      (e.prototype.renderDashedDottedBorder = function (t, r, n, s, o) {
        return cA(this, void 0, void 0, function () {
          var i, a, B, c, u, f, C, g, Q, w, U, h, m, L, y, F, y, F;
          return aA(this, function (E) {
            return (
              this.ctx.save(),
              (i = bQ(s, n)),
              (a = Oo(s, n)),
              o === 2 && (this.path(a), this.ctx.clip()),
              UA(a[0])
                ? ((B = a[0].start.x), (c = a[0].start.y))
                : ((B = a[0].x), (c = a[0].y)),
              UA(a[1])
                ? ((u = a[1].end.x), (f = a[1].end.y))
                : ((u = a[1].x), (f = a[1].y)),
              n === 0 || n === 2
                ? (C = Math.abs(B - u))
                : (C = Math.abs(c - f)),
              this.ctx.beginPath(),
              o === 3 ? this.formatPath(i) : this.formatPath(a.slice(0, 2)),
              (g = r < 3 ? r * 3 : r * 2),
              (Q = r < 3 ? r * 2 : r),
              o === 3 && ((g = r), (Q = r)),
              (w = !0),
              C <= g * 2
                ? (w = !1)
                : C <= g * 2 + Q
                ? ((U = C / (2 * g + Q)), (g *= U), (Q *= U))
                : ((h = Math.floor((C + Q) / (g + Q))),
                  (m = (C - h * g) / (h - 1)),
                  (L = (C - (h + 1) * g) / h),
                  (Q = L <= 0 || Math.abs(Q - m) < Math.abs(Q - L) ? m : L)),
              w &&
                (o === 3
                  ? this.ctx.setLineDash([0, g + Q])
                  : this.ctx.setLineDash([g, Q])),
              o === 3
                ? ((this.ctx.lineCap = "round"), (this.ctx.lineWidth = r))
                : (this.ctx.lineWidth = r * 2 + 1.1),
              (this.ctx.strokeStyle = rA(t)),
              this.ctx.stroke(),
              this.ctx.setLineDash([]),
              o === 2 &&
                (UA(a[0]) &&
                  ((y = a[3]),
                  (F = a[0]),
                  this.ctx.beginPath(),
                  this.formatPath([
                    new H(y.end.x, y.end.y),
                    new H(F.start.x, F.start.y),
                  ]),
                  this.ctx.stroke()),
                UA(a[1]) &&
                  ((y = a[1]),
                  (F = a[2]),
                  this.ctx.beginPath(),
                  this.formatPath([
                    new H(y.end.x, y.end.y),
                    new H(F.start.x, F.start.y),
                  ]),
                  this.ctx.stroke())),
              this.ctx.restore(),
              [2]
            );
          });
        });
      }),
      (e.prototype.render = function (t) {
        return cA(this, void 0, void 0, function () {
          var r;
          return aA(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  this.options.backgroundColor &&
                    ((this.ctx.fillStyle = rA(this.options.backgroundColor)),
                    this.ctx.fillRect(
                      this.options.x,
                      this.options.y,
                      this.options.width,
                      this.options.height
                    )),
                  (r = yQ(t)),
                  [4, this.renderStack(r)]
                );
              case 1:
                return n.sent(), this.applyEffects([]), [2, this.canvas];
            }
          });
        });
      }),
      e
    );
  })(Ja),
  NQ = function (A) {
    return A instanceof La || A instanceof ya
      ? !0
      : A instanceof rs && A.type !== qt && A.type !== $t;
  },
  GQ = function (A, e) {
    switch (A) {
      case 0:
        return tr(e);
      case 2:
        return pQ(e);
      case 1:
      default:
        return rr(e);
    }
  },
  kQ = function (A) {
    switch (A) {
      case 1:
        return "center";
      case 2:
        return "right";
      case 0:
      default:
        return "left";
    }
  },
  PQ = ["-apple-system", "system-ui"],
  VQ = function (A) {
    return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent)
      ? A.filter(function (e) {
          return PQ.indexOf(e) === -1;
        })
      : A;
  },
  XQ = (function (A) {
    IA(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return (
        (n.canvas = r.canvas ? r.canvas : document.createElement("canvas")),
        (n.ctx = n.canvas.getContext("2d")),
        (n.options = r),
        (n.canvas.width = Math.floor(r.width * r.scale)),
        (n.canvas.height = Math.floor(r.height * r.scale)),
        (n.canvas.style.width = r.width + "px"),
        (n.canvas.style.height = r.height + "px"),
        n.ctx.scale(n.options.scale, n.options.scale),
        n.ctx.translate(-r.x, -r.y),
        n.context.logger.debug(
          "EXPERIMENTAL ForeignObject renderer initialized (" +
            r.width +
            "x" +
            r.height +
            " at " +
            r.x +
            "," +
            r.y +
            ") with scale " +
            r.scale
        ),
        n
      );
    }
    return (
      (e.prototype.render = function (t) {
        return cA(this, void 0, void 0, function () {
          var r, n;
          return aA(this, function (s) {
            switch (s.label) {
              case 0:
                return (
                  (r = Tn(
                    this.options.width * this.options.scale,
                    this.options.height * this.options.scale,
                    this.options.scale,
                    this.options.scale,
                    t
                  )),
                  [4, JQ(r)]
                );
              case 1:
                return (
                  (n = s.sent()),
                  this.options.backgroundColor &&
                    ((this.ctx.fillStyle = rA(this.options.backgroundColor)),
                    this.ctx.fillRect(
                      0,
                      0,
                      this.options.width * this.options.scale,
                      this.options.height * this.options.scale
                    )),
                  this.ctx.drawImage(
                    n,
                    -this.options.x * this.options.scale,
                    -this.options.y * this.options.scale
                  ),
                  [2, this.canvas]
                );
            }
          });
        });
      }),
      e
    );
  })(Ja),
  JQ = function (A) {
    return new Promise(function (e, t) {
      var r = new Image();
      (r.onload = function () {
        e(r);
      }),
        (r.onerror = t),
        (r.src =
          "data:image/svg+xml;charset=utf-8," +
          encodeURIComponent(new XMLSerializer().serializeToString(A)));
    });
  },
  YQ = (function () {
    function A(e) {
      var t = e.id,
        r = e.enabled;
      (this.id = t), (this.enabled = r), (this.start = Date.now());
    }
    return (
      (A.prototype.debug = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.enabled &&
          (typeof window < "u" &&
          window.console &&
          typeof console.debug == "function"
            ? console.debug.apply(
                console,
                Bt([this.id, this.getTime() + "ms"], e)
              )
            : this.info.apply(this, e));
      }),
      (A.prototype.getTime = function () {
        return Date.now() - this.start;
      }),
      (A.prototype.info = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.enabled &&
          typeof window < "u" &&
          window.console &&
          typeof console.info == "function" &&
          console.info.apply(console, Bt([this.id, this.getTime() + "ms"], e));
      }),
      (A.prototype.warn = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.enabled &&
          (typeof window < "u" &&
          window.console &&
          typeof console.warn == "function"
            ? console.warn.apply(
                console,
                Bt([this.id, this.getTime() + "ms"], e)
              )
            : this.info.apply(this, e));
      }),
      (A.prototype.error = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.enabled &&
          (typeof window < "u" &&
          window.console &&
          typeof console.error == "function"
            ? console.error.apply(
                console,
                Bt([this.id, this.getTime() + "ms"], e)
              )
            : this.info.apply(this, e));
      }),
      (A.instances = {}),
      A
    );
  })(),
  WQ = (function () {
    function A(e, t) {
      var r;
      (this.windowBounds = t),
        (this.instanceName = "#" + A.instanceCount++),
        (this.logger = new YQ({ id: this.instanceName, enabled: e.logging })),
        (this.cache =
          (r = e.cache) !== null && r !== void 0 ? r : new gQ(this, e));
    }
    return (A.instanceCount = 1), A;
  })(),
  Ya = function (A, e) {
    return e === void 0 && (e = {}), ZQ(A, e);
  };
typeof window < "u" && Na.setContext(window);
var ZQ = function (A, e) {
    return cA(void 0, void 0, void 0, function () {
      var t,
        r,
        n,
        s,
        o,
        i,
        a,
        B,
        c,
        u,
        f,
        C,
        g,
        Q,
        w,
        U,
        h,
        m,
        L,
        y,
        E,
        F,
        E,
        K,
        S,
        N,
        W,
        Z,
        x,
        X,
        yA,
        j,
        eA,
        RA,
        QA,
        LA,
        l,
        p,
        b,
        _;
      return aA(this, function (D) {
        switch (D.label) {
          case 0:
            if (!A || typeof A != "object")
              return [
                2,
                Promise.reject("Invalid element provided as first argument"),
              ];
            if (((t = A.ownerDocument), !t))
              throw new Error("Element is not attached to a Document");
            if (((r = t.defaultView), !r))
              throw new Error("Document is not attached to a Window");
            return (
              (n = {
                allowTaint:
                  (K = e.allowTaint) !== null && K !== void 0 ? K : !1,
                imageTimeout:
                  (S = e.imageTimeout) !== null && S !== void 0 ? S : 15e3,
                proxy: e.proxy,
                useCORS: (N = e.useCORS) !== null && N !== void 0 ? N : !1,
              }),
              (s = hn(
                {
                  logging: (W = e.logging) !== null && W !== void 0 ? W : !0,
                  cache: e.cache,
                },
                n
              )),
              (o = {
                windowWidth:
                  (Z = e.windowWidth) !== null && Z !== void 0
                    ? Z
                    : r.innerWidth,
                windowHeight:
                  (x = e.windowHeight) !== null && x !== void 0
                    ? x
                    : r.innerHeight,
                scrollX:
                  (X = e.scrollX) !== null && X !== void 0 ? X : r.pageXOffset,
                scrollY:
                  (yA = e.scrollY) !== null && yA !== void 0
                    ? yA
                    : r.pageYOffset,
              }),
              (i = new PA(o.scrollX, o.scrollY, o.windowWidth, o.windowHeight)),
              (a = new WQ(s, i)),
              (B =
                (j = e.foreignObjectRendering) !== null && j !== void 0
                  ? j
                  : !1),
              (c = {
                allowTaint:
                  (eA = e.allowTaint) !== null && eA !== void 0 ? eA : !1,
                onclone: e.onclone,
                ignoreElements: e.ignoreElements,
                inlineImages: B,
                copyStyles: B,
              }),
              a.logger.debug(
                "Starting document clone with size " +
                  i.width +
                  "x" +
                  i.height +
                  " scrolled to " +
                  -i.left +
                  "," +
                  -i.top
              ),
              (u = new _o(a, A, c)),
              (f = u.clonedReferenceElement),
              f
                ? [4, u.toIFrame(t, i)]
                : [2, Promise.reject("Unable to find element in cloned iframe")]
            );
          case 1:
            return (
              (C = D.sent()),
              (g = ns(f) || zw(f) ? Hu(f.ownerDocument) : lr(a, f)),
              (Q = g.width),
              (w = g.height),
              (U = g.left),
              (h = g.top),
              (m = jQ(a, f, e.backgroundColor)),
              (L = {
                canvas: e.canvas,
                backgroundColor: m,
                scale:
                  (QA =
                    (RA = e.scale) !== null && RA !== void 0
                      ? RA
                      : r.devicePixelRatio) !== null && QA !== void 0
                    ? QA
                    : 1,
                x: ((LA = e.x) !== null && LA !== void 0 ? LA : 0) + U,
                y: ((l = e.y) !== null && l !== void 0 ? l : 0) + h,
                width:
                  (p = e.width) !== null && p !== void 0 ? p : Math.ceil(Q),
                height:
                  (b = e.height) !== null && b !== void 0 ? b : Math.ceil(w),
              }),
              B
                ? (a.logger.debug(
                    "Document cloned, using foreign object rendering"
                  ),
                  (E = new XQ(a, L)),
                  [4, E.render(f)])
                : [3, 3]
            );
          case 2:
            return (y = D.sent()), [3, 5];
          case 3:
            return (
              a.logger.debug(
                "Document cloned, element located at " +
                  U +
                  "," +
                  h +
                  " with size " +
                  Q +
                  "x" +
                  w +
                  " using computed rendering"
              ),
              a.logger.debug("Starting DOM parsing"),
              (F = _a(a, f)),
              m === F.styles.backgroundColor &&
                (F.styles.backgroundColor = kA.TRANSPARENT),
              a.logger.debug(
                "Starting renderer for element at " +
                  L.x +
                  "," +
                  L.y +
                  " with size " +
                  L.width +
                  "x" +
                  L.height
              ),
              (E = new MQ(a, L)),
              [4, E.render(F)]
            );
          case 4:
            (y = D.sent()), (D.label = 5);
          case 5:
            return (
              (!((_ = e.removeContainer) !== null && _ !== void 0) || _) &&
                (_o.destroy(C) ||
                  a.logger.error(
                    "Cannot detach cloned iframe as it is not in the DOM anymore"
                  )),
              a.logger.debug("Finished rendering"),
              [2, y]
            );
        }
      });
    });
  },
  jQ = function (A, e, t) {
    var r = e.ownerDocument,
      n = r.documentElement
        ? Je(A, getComputedStyle(r.documentElement).backgroundColor)
        : kA.TRANSPARENT,
      s = r.body
        ? Je(A, getComputedStyle(r.body).backgroundColor)
        : kA.TRANSPARENT,
      o =
        typeof t == "string"
          ? Je(A, t)
          : t === null
          ? kA.TRANSPARENT
          : 4294967295;
    return e === r.documentElement ? (qA(n) ? (qA(s) ? o : s) : n) : o;
  };
const PC = (A) => {
    try {
      return A == null ? void 0 : A.operationPermit;
    } catch {
      return;
    }
  },
  zQ = [
    "unspecified",
    "reward",
    "rating",
    "wager",
    "refund",
    "payout",
    "profile",
    "settings",
    "startup_replay",
  ],
  $Q = [
    "queued",
    "sent",
    "response",
    "ack",
    "mismatch",
    "error",
    "cancel",
    "retry",
    "load",
  ],
  qQ = ["confirmed", "unconfirmed", "uncertain", "skipped"],
  Ro = new Set(["cash", "rating", "updatedAt"]),
  Ad = 64,
  ed = 32 * 1024,
  td = 512,
  rd =
    /^(?:[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}|stake-[0-9]{13}-[a-z0-9]{8,32})$/;
let Gn = 0,
  Wa = 0,
  sr = !1;
const pe = [],
  en = (A) =>
    typeof A == "number" && Number.isFinite(A) && Math.abs(A) <= 1e15
      ? A
      : void 0,
  nd = (A) => {
    try {
      const e = A == null ? void 0 : A.reason,
        t = A == null ? void 0 : A.settlementCorrelation;
      return {
        reason: zQ.includes(e) ? e : "unspecified",
        settlementCorrelation:
          typeof t == "string" && t.length <= 64 && rd.test(t) ? t : void 0,
      };
    } catch {
      return { reason: "unspecified" };
    }
  },
  VC = () => ((Gn += 1), (Wa = 0), (sr = !1), (pe.length = 0), Gn),
  XC = (A) => {
    try {
      if (!$Q.includes(A.kind)) return;
      const e = nd(A),
        t = [...new Set(A.keys ?? [])].filter((a) => Ro.has(a)),
        r = new Set((A.keys ?? []).filter((a) => !Ro.has(a))).size,
        n = {
          sequence: ++Wa,
          epoch: Gn,
          timestamp: Date.now(),
          kind: A.kind,
          reason: e.reason,
        };
      Number.isSafeInteger(A.request) &&
        A.request >= 0 &&
        (n.request = A.request),
        Number.isSafeInteger(A.attempt) &&
          A.attempt >= 0 &&
          (n.attempt = A.attempt),
        e.settlementCorrelation &&
          (n.settlementCorrelation = e.settlementCorrelation),
        t.length && (n.keys = t),
        r && (n.otherKeyCount = r);
      const s = en(A.cashBefore),
        o = en(A.cashTarget),
        i = en(A.cashReturned);
      if (
        (s !== void 0 && (n.cashBefore = s),
        o !== void 0 && (n.cashTarget = o),
        i !== void 0 && (n.cashReturned = i),
        Number.isFinite(A.durationMs) &&
          A.durationMs >= 0 &&
          (n.durationMs = Math.min(Math.round(A.durationMs), 864e5)),
        qQ.includes(A.outcome) && (n.outcome = A.outcome),
        JSON.stringify(n).length > td)
      ) {
        sr = !0;
        return;
      }
      for (pe.push(n); pe.length > Ad || JSON.stringify(pe).length > ed - 256; )
        pe.shift(), (sr = !0);
    } catch {}
  },
  sd = () => {
    try {
      return JSON.stringify({
        version: 1,
        coverage: sr ? "truncated_current_runtime" : "current_runtime_only",
        previousRuntimeEvents: "unavailable",
        events: pe,
      });
    } catch {
      return '{"version":1,"coverage":"unavailable","events":[]}';
    }
  },
  od = (A, e) =>
    A +
    `

--------------------------------

` +
    e +
    `

--- Player save trace ---
` +
    sd();
let NA,
  tn = !1,
  Re = !1,
  _t = !1;
const xo = (A) => {
    A.listeners.forEach((e) => e()), A.listeners.clear();
  },
  id = (A) => {
    NA && xo(NA);
    const e = { provider: A, listeners: new Set() };
    return (
      (NA = e),
      () => {
        NA === e && ((NA = void 0), xo(e));
      }
    );
  },
  ad = (A) =>
    !A || A === (NA == null ? void 0 : NA.provider)
      ? NA
      : { provider: A, listeners: new Set() },
  Bd = [
    "prepared",
    "renderer_absent",
    "zero_size",
    "canvas_detached",
    "context_lost",
    "preparation_failed",
    "preparation_timeout",
    "capture_failed",
    "capture_timeout",
    "capture_busy",
    "screenshot_skipped",
  ],
  cd = (A) => {
    const e = {
      status: Bd.includes(A.status) ? A.status : "preparation_failed",
      imageScope: ["full-page", "board-only", "none"].includes(A.imageScope)
        ? A.imageScope
        : "none",
    };
    for (const t of ["width", "height", "preparedAt"]) {
      const r = A[t];
      typeof r == "number" && Number.isFinite(r) && r >= 0 && (e[t] = r);
    }
    return (
      typeof A.contextLost == "boolean" && (e.contextLost = A.contextLost),
      ["capture_failed", "capture_timeout", "capture_busy"].includes(
        A.fallbackReason || ""
      ) && (e.fallbackReason = A.fallbackReason),
      `
Report capture: ${JSON.stringify(e)}`.slice(0, 512)
    );
  };
class nA extends Error {
  constructor(t) {
    super(t);
    lA(this, "status");
    this.status = t;
  }
}
const rn = (A, e) => (A instanceof nA ? A.status : e),
  Mo = (A) => {
    try {
      typeof A == "function" ? A() : A == null || A.cleanup();
    } catch {}
  },
  ud = async (A) => {
    var g;
    const e = { status: "capture_busy", imageScope: "none" };
    if (tn) return { facts: e };
    tn = !0;
    const t = new AbortController();
    let r = !0,
      n,
      s = !1,
      o;
    const i = new Promise((Q, w) => (o = w));
    i.catch(() => {});
    const a = () => {
        s || !n || ((s = !0), Mo(n));
      },
      B = () => {
        (r = !1), t.abort(), a(), o == null || o(new nA("capture_failed"));
      };
    A.listeners.add(B);
    const c = async (Q, w, U) => {
        let h;
        try {
          return await Promise.race([
            Q,
            i,
            new Promise((m, L) => {
              h = setTimeout(() => L(new nA(U)), w);
            }),
          ]);
        } finally {
          h !== void 0 && clearTimeout(h);
        }
      },
      u = () => {
        if (!r || !n || typeof n == "function" || !n.frame) return !1;
        const { sourceCanvas: Q, snapshotCanvas: w, isCurrent: U } = n.frame;
        try {
          return (
            n.metadata.status === "prepared" &&
            n.metadata.contextLost !== !0 &&
            Q.isConnected &&
            Q.width > 0 &&
            Q.height > 0 &&
            w.width === Q.width &&
            w.height === Q.height &&
            (!U || U())
          );
        } catch {
          return !1;
        }
      },
      f = (Q) =>
        _t
          ? Promise.reject(new nA("capture_busy"))
          : ((_t = !0),
            new Promise((w, U) => {
              try {
                Q.toBlob((h) => {
                  (_t = !1), h ? w(h) : U(new nA("capture_failed"));
                }, "image/png");
              } catch (h) {
                (_t = !1), U(h);
              }
            })),
      C = async () => {
        if (Re) throw new nA("capture_busy");
        const Q = Array.from(document.body.querySelectorAll("canvas")),
          w = typeof n == "function" || n == null ? void 0 : n.frame;
        if (
          w &&
          (document.body.querySelector("video, slot") ||
            document.body.shadowRoot ||
            Array.from(document.body.querySelectorAll("*")).some(
              (E) => E.shadowRoot
            ) ||
            Q.some((E) => E.closest("script, [data-html2canvas-ignore]")))
        )
          throw new nA("capture_failed");
        const U = new Set(
          document.querySelectorAll("iframe.html2canvas-container")
        );
        let h = !0;
        const m = new Set(),
          L = () => m.forEach((E) => E.remove());
        Re = !0;
        let y;
        try {
          y = Ya(document.body, {
            logging: !1,
            onclone: (E, K) => {
              if (!r || !h) throw new nA("capture_failed");
              const S = Array.from(K.querySelectorAll("canvas"));
              if (w && !u()) throw new nA("capture_failed");
              const N = w ? Q.indexOf(w.sourceCanvas) : -1;
              if (w && (N < 0 || S.length !== Q.length || !S[N]))
                throw new nA("capture_failed");
              Q.forEach((W, Z) => {
                const x = S[Z],
                  X = x == null ? void 0 : x.getContext("2d");
                if (Z === N && !X) throw new nA("capture_failed");
                X == null || X.drawImage(Z === N ? w.snapshotCanvas : W, 0, 0);
              });
            },
          });
        } catch (E) {
          (Re = !1), (y = Promise.reject(E));
        } finally {
          document
            .querySelectorAll("iframe.html2canvas-container")
            .forEach((E) => {
              U.has(E) || m.add(E);
            });
        }
        const F = y.then(
          (E) => {
            if (((Re = !1), !r || !h)) throw new nA("capture_failed");
            if (typeof n != "function" && n != null && n.frame && !u())
              throw new nA("capture_failed");
            return E;
          },
          (E) => {
            throw ((Re = !1), E);
          }
        );
        try {
          return await c(
            F.then((E) => f(E)),
            5e3,
            "capture_timeout"
          );
        } finally {
          (h = !1), L();
        }
      };
    try {
      try {
        const Q = Promise.resolve()
          .then(() => A.provider(t.signal))
          .then((w) => (r ? (n = w) : Mo(w), w));
        if ((await c(Q, 1e3, "preparation_timeout"), !r))
          throw new nA("capture_failed");
        if (typeof n != "function") {
          e.status =
            ((g = n == null ? void 0 : n.metadata) == null
              ? void 0
              : g.status) || "preparation_failed";
          for (const w of ["width", "height", "contextLost", "preparedAt"])
            n != null &&
              n.metadata &&
              w in n.metadata &&
              Object.assign(e, { [w]: n.metadata[w] });
          if (e.status !== "prepared") return { facts: e };
          if (n != null && n.frame && !u())
            return (e.status = "capture_failed"), { facts: e };
        }
      } catch (Q) {
        return (e.status = rn(Q, "preparation_failed")), { facts: e };
      }
      try {
        const Q = await C();
        if (!r) throw new nA("capture_failed");
        if (typeof n != "function" && n != null && n.frame && !u())
          throw new nA("capture_failed");
        return (
          (e.status = "prepared"),
          (e.imageScope = "full-page"),
          { blob: Q, facts: e }
        );
      } catch (Q) {
        const w = rn(Q, "capture_failed");
        (e.status = w),
          (e.fallbackReason =
            w === "capture_timeout" || w === "capture_busy"
              ? w
              : "capture_failed");
      }
      if (!u()) return { facts: e };
      try {
        const Q = n.frame,
          w = await c(f(Q.snapshotCanvas), 1e3, "capture_timeout");
        if (!u()) throw new nA("capture_failed");
        return (
          (e.status = "prepared"),
          (e.imageScope = "board-only"),
          { blob: w, facts: e }
        );
      } catch (Q) {
        return (e.status = rn(Q, "capture_failed")), { facts: e };
      }
    } finally {
      B(), A.listeners.delete(B), (tn = !1);
    }
  },
  No = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "yo",
    ж: "zh",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "kh",
    ц: "ts",
    ч: "ch",
    ш: "sh",
    щ: "shch",
    ъ: "",
    ы: "y",
    ь: "",
    э: "e",
    ю: "yu",
    я: "ya",
    А: "A",
    Б: "B",
    В: "V",
    Г: "G",
    Д: "D",
    Е: "E",
    Ё: "YO",
    Ж: "Zh",
    З: "Z",
    И: "I",
    Й: "Y",
    К: "K",
    Л: "L",
    М: "M",
    Н: "N",
    О: "O",
    П: "P",
    Р: "R",
    С: "S",
    Т: "T",
    У: "U",
    Ф: "F",
    Х: "Kh",
    Ц: "Ts",
    Ч: "Ch",
    Ш: "Sh",
    Щ: "Shch",
    Ъ: "",
    Ы: "Y",
    Ь: "",
    Э: "E",
    Ю: "Yu",
    Я: "Ya",
  },
  Za = (A) =>
    A.split("")
      .map((e) => (No[e] === void 0 ? e : No[e]))
      .join(""),
  ss = (A, e) => {
    const t = fA() || "unknown",
      r = Jn() || "unknown";
    let n = Za(A)
      .replace(/\s+/g, "_")
      .replace(/[^a-zA-Z0-9_\-]/g, "");
    return e
      ? `${t}_${r}_${n}`
      : (/[a-zA-Z0-9]/.test(n) || (n = `user-report_${t}_${r}`),
        n.slice(0, 100));
  },
  Go = (A, e, t) => {
    const n = window.logStorage.getLogsFormatted().join(`
`),
      s = od(e, n),
      i = new TextEncoder().encode(s),
      a = new Blob([i], { type: "text/plain;charset=utf-8" });
    return new File([a], `${ss(A, t)}.txt`, {
      type: "text/plain;charset=utf-8",
    });
  },
  ld = async (A, e) => {
    const t = await Ya(document.body, {
        onclone: (n, s) => {
          const o = document.body.querySelectorAll("canvas"),
            i = s.querySelectorAll("canvas");
          o.forEach((a, B) => {
            var u;
            const c = i[B];
            c && ((u = c.getContext("2d")) == null || u.drawImage(a, 0, 0));
          });
        },
      }),
      r = await new Promise((n, s) => {
        t.toBlob((o) => {
          o ? n(o) : s(new Error("Failed to create screenshot"));
        }, "image/png");
      });
    return new File([r], `${ss(A, e)}.png`, { type: "image/png" });
  },
  fd = (A, e) => {
    if (e) return `${window.gp.player.id}-${A}`;
    const t = A.replace(/[\n\r\s]+/g, " ")
      .replace(/\s+/g, " ")
      .split(" ")
      .slice(0, 8)
      .join(" ")
      .slice(0, 60);
    return `${window.gp.player.name}-${t}`;
  },
  ja = async (A, e = {}) => {
    var g, Q, w, U, h, m, L, y;
    if (!Yn() || !window.gp) return null;
    if (
      (
        (
          ((w =
            (Q = (g = window.gp) == null ? void 0 : g.variables) == null
              ? void 0
              : Q.state) == null
            ? void 0
            : w.REPORT_BLACK_LIST) || ""
        )
          .split(",")
          .map((F) => Number(F)) || []
      ).includes(
        (h = (U = window.gp) == null ? void 0 : U.player) == null
          ? void 0
          : h.id
      )
    )
      return { imageUrl: "", fileUrl: "" };
    const n = `${e.additionalTechInfo || ""}
Platform: ${fA()}
Host: ${window.location.host}
Player ID: ${
        (L = (m = window.gp) == null ? void 0 : m.player) == null
          ? void 0
          : L.id
      }
OS: ${Jn()}
Browser: ${CB()}
GameName: ${an()}
Version: 20.11.26 15:30
UTC Time: ${new Date().toISOString()}
windowSize: ${window.innerHeight}x${window.innerWidth}`,
      s = A.replace(/\s+/g, " ").trim().slice(0, 1e3),
      o = fd(s, e.isAutoReport),
      i = ad(e.prepareCapture);
    if (i) {
      const F = e.skipScreenshot
          ? { facts: { status: "screenshot_skipped", imageScope: "none" } }
          : await ud(i),
        E = Go(
          o,
          `${s}

${n}${cd(F.facts)}`,
          e.isAutoReport
        ),
        K = [
          "error-report",
          ...(e.isAutoReport ? ["auto-error-report"] : ["user-error-report"]),
        ];
      (y = e.reportPrepared) == null || y.call(e);
      const S = window.gp.files.upload({ file: E, tags: K }),
        N = F.blob
          ? window.gp.files.upload({
              file: new File([F.blob], `${ss(o, e.isAutoReport)}.png`, {
                type: "image/png",
              }),
              tags: K,
            })
          : Promise.resolve({ src: "" }),
        [W, Z] = await Promise.all([N, S]);
      return { imageUrl: W.src, fileUrl: Z.src };
    }
    const a = Go(
        o,
        `${s}

${n}`,
        e.isAutoReport
      ),
      B = window.gp.files.upload({
        file: a,
        tags: [
          "error-report",
          ...(e.isAutoReport ? ["auto-error-report"] : ["user-error-report"]),
        ],
      }),
      c = (async () => {
        var E, K;
        if (e.skipScreenshot)
          return (E = e.reportPrepared) == null || E.call(e), { src: "" };
        const F = await ld(o, e.isAutoReport);
        return (
          (K = e.reportPrepared) == null || K.call(e),
          window.gp.files.upload({
            file: F,
            tags: [
              "error-report",
              ...(e.isAutoReport
                ? ["auto-error-report"]
                : ["user-error-report"]),
            ],
          })
        );
      })(),
      [u, f] = await Promise.all([c, B]);
    return { imageUrl: u.src, fileUrl: f.src };
  },
  JC = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        registerReportCaptureProvider: id,
        sendAppErrorReport: ja,
        transliterate: Za,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
window.AUTO_REPORT_MIN_INTERVAL ?? (window.AUTO_REPORT_MIN_INTERVAL = 30 * 1e3);
window.AUTO_REPORT_CHANCE ?? (window.AUTO_REPORT_CHANCE = 0.01);
let os = () => {};
const gd = (A) => {
  os = A;
};
let ko = 0,
  nn = !1;
const wd = async (A) => {
    if (
      !(window.AUTO_REPORT_CHANCE <= Math.random()) &&
      !nn &&
      !(Date.now() - ko < window.AUTO_REPORT_MIN_INTERVAL)
    ) {
      (nn = !0), (ko = Date.now());
      try {
        await ja(A, { isAutoReport: !0 });
      } catch (e) {
        eu("[sm-games-sdk] Failed to send auto error report:", e);
      } finally {
        nn = !1;
      }
    }
  },
  Qd = (A, e, t = {}) => {
    Yn() &&
      (wd(A),
      os(
        "console.error",
        pu() ? vu(A, e) : { [A.substring(0, 450)]: bi(e, t) }
      ));
  },
  dd = (A, e, t = {}) => {
    if (!Yn()) return;
    const r = bi(e, t);
    os("console.warn", { [A.substring(0, 450)]: r });
  };
window.errorLogTrackingFn = (A, e, t = {}) => {
  Qd(A, e, t);
};
window.warnLogTrackingFn = (A, e, t = {}) => {
  dd(A, e, t);
};
const Cd = 25,
  hd = 100,
  Po =
    /(^|_)(token|secret|password|email|phone|player_id|user_id|client_id|request_id|match_id|invite|chat|message|stack)(_|$)/i,
  Ud = (A) => {
    let e = 2166136261;
    for (const t of JSON.stringify([A.algorithm, A.scope, A.weights]))
      e = Math.imul(e ^ t.charCodeAt(0), 16777619);
    return `v1_${(e >>> 0).toString(16).padStart(8, "0")}`;
  },
  za = (A, e = 40) => {
    let t = A.replace(/[^a-zA-Z0-9_]/g, "_");
    if (
      (/^[a-zA-Z]/.test(t) || (t = `sm_${t}`),
      /^(google_|ga_|firebase_)/i.test(t) && (t = `sm_${t}`),
      t.length <= e)
    )
      return t;
    let r = 2166136261;
    for (const s of A) r = Math.imul(r ^ s.charCodeAt(0), 16777619);
    const n = (r >>> 0).toString(16).padStart(8, "0");
    return `${t.slice(0, e - 9)}_${n}`;
  },
  sn = () => `${location.origin}${location.pathname}`,
  Vo = (A, e, t) => {
    var i;
    const r = {},
      n = (a, B) => {
        if (
          B == null ||
          Po.test(a) ||
          (typeof B == "number" && !Number.isFinite(B)) ||
          !["string", "number", "boolean"].includes(typeof B)
        )
          return;
        const c = za(a === "session_id" ? "app_session_id" : a);
        c in r ||
          Object.keys(r).length >= Cd ||
          (r[c] = typeof B == "number" ? B : String(B).slice(0, hd));
      };
    n("game_name", t.gameName),
      n("game_version", t.gameVersion),
      n("platform", t.platform),
      n("device", t.device),
      n("analytics_schema", "ga4_1");
    for (const [a, B] of Object.entries(
      (e == null ? void 0 : e.AB_shared_v2_receipt) ?? {}
    )) {
      for (const [u, f] of Object.entries(B)) n(`ab_receipt_${a}_${u}`, f);
      const c =
        (i = e == null ? void 0 : e.AB_shared_v2_config) == null
          ? void 0
          : i[a];
      c &&
        (n("ab_scope", c.scope),
        n("ab_algorithm", c.algorithm),
        n(`ab_config_${a}`, Ud(c)));
    }
    const s = (e == null ? void 0 : e[A]) ?? e ?? {},
      o = (a, B = "", c = 0) => {
        if (!(!a || typeof a != "object" || c > 5)) {
          for (const [u, f] of Object.entries(a))
            (f === null || typeof f != "object") && n(B ? `${B}_${u}` : u, f);
          for (const [u, f] of Object.entries(a)) {
            if (
              !f ||
              typeof f != "object" ||
              Po.test(u) ||
              u === "platform" ||
              u === "device"
            )
              continue;
            if (Array.isArray(f)) {
              f.every((g) =>
                ["string", "number", "boolean"].includes(typeof g)
              ) && n(B ? `${B}_${u}` : u, f.join("|"));
              continue;
            }
            const C = Object.keys(f);
            ["game_type", "reward_type", "bet_size"].includes(u) &&
            C.length === 1
              ? (n(u, C[0]), o(f[C[0]], B, c + 1))
              : o(f, B ? `${B}_${u}` : u, c + 1);
          }
        }
      };
    return o(s), r;
  },
  Fd = (A, e, t) => {
    if (!(me() || !/^G-[A-Z0-9]+$/.test(t.measurementId)))
      try {
        const r = window;
        r.smGoogleDataLayer ?? (r.smGoogleDataLayer = []),
          r.smGoogleGtag ??
            (r.smGoogleGtag = function () {
              r.smGoogleDataLayer.push(arguments);
            }),
          r.__smGoogleAnalytics ?? (r.__smGoogleAnalytics = new Set());
        const n = Vo(A, e, t);
        if (!r.__smGoogleAnalytics.has(t.measurementId)) {
          if (
            (r.__smGoogleAnalytics.add(t.measurementId),
            !document.querySelector("script[data-sm-google-analytics]"))
          ) {
            const s = document.createElement("script");
            (s.async = !0),
              (s.dataset.smGoogleAnalytics = "true"),
              (s.src = `https://www.googletagmanager.com/gtag/js?id=${t.measurementId}&l=smGoogleDataLayer`),
              document.head.append(s);
          }
          r.smGoogleGtag("js", new Date()),
            r.smGoogleGtag("config", t.measurementId, {
              send_page_view: !1,
              allow_google_signals: !1,
              allow_ad_personalization_signals: !1,
              cookie_flags: "SameSite=None;Secure",
              page_location: sn(),
            }),
            r.smGoogleGtag("event", "page_view", {
              ...Vo(
                "",
                {
                  AB_shared_v2_receipt:
                    e == null ? void 0 : e.AB_shared_v2_receipt,
                  AB_shared_v2_config:
                    e == null ? void 0 : e.AB_shared_v2_config,
                },
                t
              ),
              send_to: t.measurementId,
              page_location: sn(),
            });
        }
        r.smGoogleGtag("event", za(A), {
          ...n,
          send_to: t.measurementId,
          page_location: sn(),
        });
      } catch {}
  };
var Xo;
(function (A) {
  (A.PlayerLoad = "player_load"),
    (A.PlayerSync = "player_sync"),
    (A.PlayerLogin = "player_login"),
    (A.PlayerLogout = "player_logout"),
    (A.PlayerFetchFields = "player_fetch_fields"),
    (A.PlayersFetch = "players_fetch"),
    (A.PaymentPurchase = "payment_purchase"),
    (A.PaymentConsume = "payment_consume"),
    (A.PaymentSubscribe = "payment_subscribe"),
    (A.PaymentUnsubscribe = "payment_unsubscribe"),
    (A.LeaderboardOpen = "leaderboard_open"),
    (A.LeaderboardFetch = "leaderboard_fetch"),
    (A.LeaderboardFetchPlayerRating = "leaderboard_fetch_player_rating"),
    (A.ChannelOpenChat = "channel_open_chat"),
    (A.RewardGive = "reward_give"),
    (A.RewardAccept = "reward_accept"),
    (A.SchedulersRegister = "schedulers_register"),
    (A.SchedulersClaimDay = "schedulers_claim_day"),
    (A.SchedulersClaimDayAdditional = "schedulers_claim_day_additional"),
    (A.SchedulersClaimAllDay = "schedulers_claim_all_day"),
    (A.SchedulersClaimAllDays = "schedulers_claim_all_days"),
    (A.TriggersClaim = "triggers_claim"),
    (A.UniquesRegister = "uniques_register"),
    (A.UniquesCheck = "uniques_check"),
    (A.UniquesDelete = "uniques_delete"),
    (A.UniqiesDelete = "uniques_delete"),
    (A.GameCollectionsOpen = "game_collections_open"),
    (A.GameCollectionsFetch = "game_collections_fetch"),
    (A.ReviewRequest = "review_request"),
    (A.ImagesUpload = "images_upload"),
    (A.ImagesFetch = "images_fetch"),
    (A.ImagesFetchMore = "images_fetch_more"),
    (A.FilesUpload = "files_upload"),
    (A.filesUpload = "files_upload"),
    (A.FilesFetch = "files_fetch"),
    (A.filesFetch = "files_fetch"),
    (A.FilesFetchMore = "files_fetch_more"),
    (A.filesFetchMore = "files_fetch_more"),
    (A.SocialsShare = "socials_share"),
    (A.SocialsPost = "socials_post"),
    (A.SocialsInvite = "socials_invite"),
    (A.ChannelFetch = "channel_fetch"),
    (A.ChannelJoin = "channel_join"),
    (A.ChannelFetchMessages = "channel_fetch_messages"),
    (A.ChannelFetchMoreMessages = "channel_fetch_more_messages"),
    (A.ChannelSendMessage = "channel_send_message"),
    (A.ChannelEditMessage = "channel_edit_message"),
    (A.ChannelDeleteMessage = "channel_delete_message"),
    (A.ChannelFetchMembers = "channel_fetch_members"),
    (A.ChannelFetchMoreMembers = "channel_fetch_more_members");
})(Xo || (Xo = {}));
window.smAnalytics = window.smAnalytics ?? {
  androidMetricEnabled: !1,
  androidMetricId: -1,
  metricId: -1,
  debug: !1,
};
let kn, je;
const pd = (A) => {
    je = (A == null ? void 0 : A.trim()) || void 0;
  },
  Ed = (A) => {
    if (!je) return A();
    try {
      A();
    } catch {}
  },
  md = (A) => {
    kn = (A == null ? void 0 : A.trim()) || void 0;
  },
  vd = {
    [v.YANDEX]: { priceCurrency: "YAN", rubPerUnit: 1, developerShare: 0.42 },
    [v.OK]: { priceCurrency: "OK", rubPerUnit: 1.1, developerShare: 0.42 },
    [v.VK]: { priceCurrency: "VOTE", rubPerUnit: 7, developerShare: 3 / 7 },
    [v.VK_PLAY]: { priceCurrency: "RUB", rubPerUnit: 1, developerShare: 0.85 },
    [v.FOTOSTRANA]: {
      priceCurrency: "FM",
      rubPerUnit: 20,
      developerShare: 0.5,
    },
    [v.PLAY_DECK]: {
      priceCurrency: "STAR",
      rubPerUnit: 2.09,
      developerShare: 0.95,
    },
    [v.PLAYGAMA]: { priceCurrency: "GAM", rubPerUnit: 10, developerShare: 0.5 },
  },
  Hd = (A) =>
    String(A) === `${v.PLAYGAMA}/playdeck`
      ? v.PLAY_DECK
      : String(A) === `${v.PLAYGAMA}/playgama`
      ? v.PLAYGAMA
      : A,
  $a = (A) => vd[Hd(A)],
  Id = (A) => Math.round((A + Number.EPSILON) * 100) / 100,
  yd = (A, e) => {
    if (!Number.isFinite(A)) return;
    const t = $a(e);
    if (t) return Id(A * t.rubPerUnit * t.developerShare);
  },
  Jo = (...A) => {
    window.smAnalytics.debug && ie.info("[ANALYTICS]", ...A);
  };
class or {
  static trackGoal(e, t, r) {
    return Ed(() => cs(t, (n) => this.deliverGoal(e, n, r)));
  }
  static deliverGoal(e, t, r) {
    if (me()) return;
    je &&
      (t = { ...t, [e]: { ...(t == null ? void 0 : t[e]), game_name: je } }),
      t !== void 0 ? Jo(e, t) : Jo(e);
    const n = !!window.smAnalytics.googleMeasurementId,
      s = le() || Ie() || nt();
    if (
      (n &&
        !s &&
        Fd(e, t, {
          measurementId: window.smAnalytics.googleMeasurementId,
          gameName: je || window.smAnalytics.googleGameName || an(),
          gameVersion: window.smAnalytics.googleGameVersion || "20.11.26",
          platform: fA(!0),
          device: te(),
        }),
      n)
    ) {
      try {
        this.deliverMetrikaGoal(e, t, r, s);
      } catch {}
      return;
    }
    this.deliverMetrikaGoal(e, t, r, s);
  }
  static deliverMetrikaGoal(e, t, r, n) {
    if (window.smAnalytics.metricId === -1)
      throw "Необходимо указать metricId для проекта!";
    if (
      window.smAnalytics.androidMetricId === -1 &&
      window.smAnalytics.androidMetricEnabled
    )
      throw "Необходимо указать androidMetricId для проекта!";
    if (!n) {
      if (!Fu() && t) {
        const { AB_shared_v2_config: s, ...o } = t;
        t = o;
      }
      Ni() && r
        ? Wt().analytics.yaMetrikaCounter.reachGoal(
            window.smAnalytics.metricId,
            e,
            t
          )
        : ym(window.smAnalytics.metricId, "reachGoal", e, t),
        Qn() &&
          window.smAnalytics.androidMetricEnabled &&
          ym(window.smAnalytics.androidMetricId, "reachGoal", e, t);
    }
  }
  static trackPlatformEvent(e) {
    var t, r;
    me() ||
      (fu() &&
        Wt().send(dn.VKWebAppTrackEvent, {
          event_name: e,
          custom_user_id:
            (r = (t = window.gp) == null ? void 0 : t.player) == null
              ? void 0
              : r.id,
          ...(mr().AB_shared_v2_receipt && {
            event_params: {
              AB_shared_v2_receipt: JSON.stringify(mr().AB_shared_v2_receipt),
              AB_shared_v2_config: JSON.stringify(mr().AB_shared_v2_config),
            },
          }),
        }));
  }
  static trackEvent(e, t = {}, r) {
    const n = fA(!0),
      s = te();
    this.trackGoal(
      e,
      {
        [e]: {
          platform: { [n]: { device: s, host: Ai() } },
          device: {
            [s]: {
              platform: n,
              ...([KA.tablet, KA.mobile].includes(s) && { OS: Jn() }),
            },
          },
          ...t,
        },
      },
      r
    );
  }
  static trackConversionEvent(e, t = {}) {
    cs(void 0, () => this.trackPlatformEvent(e)),
      this.trackEvent(e, t),
      kn && Uu(e) && this.trackEvent(`${kn}_${e}`, t);
  }
  static trackSdkInitialized(e) {
    var n, s;
    const t =
        (s = (n = window.gp) == null ? void 0 : n.ads) == null
          ? void 0
          : s.isAdblockEnabled,
      r = fA(!0);
    Qn()
      ? this.trackEvent("sdk_initialized_android")
      : this.trackEvent(`sdk_initialized_${r.toLowerCase()}`),
      [v.VK_PLAY, v.FOTOSTRANA].includes(fA()) &&
        this.trackEvent("sdk_initialized_purchasing"),
      this.trackEvent("sdk_initialized", {
        language: e,
        languageBrowser: fs(),
        time: dB(),
        ...(t && { "gp.ads.isAdblockEnabled": t }),
      });
  }
  static trackWhatGameIsRunning() {}
  static trackSdkGpLoaded(e) {
    this.trackEvent("bundle_loaded", {
      loadTime: Xt(e),
      game_name: an(),
      game_version: "20.11.26",
    });
  }
  static trackGameReady() {
    this.trackEvent("game_ready", { time: ei() });
  }
  static trackYaReachGoalUTM() {
    this.trackEvent("ya_reach_goal_utm", {}, !0);
  }
  static trackFailedRetriesToBackend(e) {
    this.trackEvent("failed_retries_to_backend", { name: e });
  }
  static gpSdkIsNotInitialized(e, t) {
    let r = "";
    e === 0 ? (r = "default") : e === 1 ? (r = "s3") : e === 2 && (r = "local"),
      r &&
        this.trackEvent(`gp_sdk_is_not_initialized_${r}`, {
          message: t,
          languageBrowser: fs(),
          time: Xt(window.timestampBeforeInit),
        });
  }
  static trackFullscreen({ trigger: e, ...t }) {
    const { gameType: r, ...n } = t;
    this.trackConversionEvent("fullscreen", {
      fullscreen_type: {
        ...(r && { game_type: r }),
        [e]: {
          ...n,
          ...(r && { game_type: r }),
          platform: fA(!0),
          device: te(),
        },
      },
    });
    const s = e
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .toLowerCase()
      .split(" ")
      .join("_");
    s && this.trackEvent(`fullscreen_${s}`);
  }
  static trackFullscreen10() {
    this.trackConversionEvent("fullscreen_10");
  }
  static trackFullscreen30() {
    this.trackConversionEvent("fullscreen_30");
  }
  static trackSticky10() {
    this.trackConversionEvent("sticky_10");
  }
  static trackSticky200() {
    this.trackConversionEvent("sticky_200");
  }
  static trackRewarded(e) {
    this.trackConversionEvent("rewarded", {
      reward_type: {
        [e.rewardType]: {
          platform: fA(!0),
          device: te(),
          ...(e.gameType && { game_type: e.gameType }),
          ...(e.unlockedFiguresDesignNumber !== void 0 && {
            unlocked_figures_design_number: e.unlockedFiguresDesignNumber,
          }),
          ...(e.unlockedBoardDesignNumber !== void 0 && {
            unlocked_board_design_number: e.unlockedBoardDesignNumber,
          }),
          ...(e.source && { source: e.source }),
        },
      },
      ...(e.gameType && { game_type: e.gameType }),
    });
    const t = e.rewardType
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .toLowerCase()
      .split(" ")
      .join("_");
    t && this.trackEvent(`rewarded_${e.prefix ? e.prefix + "_" : ""}${t}`);
  }
  static trackSpendGem(e) {
    this.trackConversionEvent("spent_gem", {
      reward_type: {
        [e.rewardType]: {
          platform: fA(!0),
          device: te(),
          ...(e.gameType && { game_type: e.gameType }),
          ...(e.unlockedFiguresDesignNumber !== void 0 && {
            unlocked_figures_design_number: e.unlockedFiguresDesignNumber,
          }),
          ...(e.unlockedBoardDesignNumber !== void 0 && {
            unlocked_board_design_number: e.unlockedBoardDesignNumber,
          }),
          ...(e.source && { source: e.source }),
        },
      },
      ...(e.gameType && { game_type: e.gameType }),
    });
    const t = e.rewardType
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .toLowerCase()
      .split(" ")
      .join("_");
    t && this.trackEvent(`spent_gem_for_${e.prefix ? e.prefix + "_" : ""}${t}`);
  }
  static trackSpendGold(e) {
    this.trackConversionEvent("spent_gold", {
      game_type: e.gameType,
      amount: e.betSize,
      bet_size: {
        [e.betSize]: { platform: fA(!0), device: te(), game_type: e.gameType },
      },
    }),
      this.trackEvent(`spent_gold_for_${e.betSize}`);
  }
  static trackRewarded10() {
    this.trackConversionEvent("rewarded_10");
  }
  static trackRewarded30() {
    this.trackConversionEvent("rewarded_30");
  }
  static trackRewarded100() {
    this.trackConversionEvent("rewarded_100");
  }
  static trackBuyShopItem(e, t, r) {
    if (r) {
      if (!Number.isFinite(r.price) || r.price <= 0 || !r.currency.trim())
        return;
      this.trackBuyShopItemRevenue(e, r.price, t, r.currency);
      return;
    }
    const n = e.split("_"),
      s = Number(n[n.length - 1] || 1),
      o = e.includes("PREMIUM")
        ? "PREMIUM"
        : e.includes("GOLD")
        ? "GOLD"
        : "CRYSTAL",
      i = {
        CRYSTAL_1: 49,
        CRYSTAL_2: 139,
        CRYSTAL_3: 400,
        CRYSTAL_4: 1e3,
        GOLD_1: 49,
        GOLD_2: 249,
        GOLD_3: 1e3,
        PREMIUM_1: 29,
        PREMIUM_2: 199,
        PREMIUM_3: 1599,
      }[`${o}_${s}`];
    this.trackBuyShopItemRevenue(e, i, t);
  }
  static trackBuyShopItemRevenue(e, t, r, n) {
    const s = fA(!0),
      o = n ? void 0 : yd(t, s),
      i = $a(s),
      a = {
        source: r,
        gross_price: t,
        price_currency:
          n ?? (i == null ? void 0 : i.priceCurrency) ?? "platform_unit",
        ...(o !== void 0 && { revenue: o, revenue_currency: "RUB" }),
      };
    this.trackConversionEvent("buy", { tag: e, ...a }),
      this.trackConversionEvent(`buy_${e}`, a);
  }
  static trackShare() {
    this.trackEvent("click_share");
  }
  static trackClickOtherGames() {
    this.trackEvent("click_other_games");
  }
  static trackGPRequest(e) {
    this.trackEvent("request_gp", { type: e });
  }
  static trackPlayerRejectRetry(e) {
    this.trackEvent("player_reject_retry", e);
  }
}
gd((A, e) => or.trackEvent(A, e));
const Ld = (A) => {
    const e = Object.keys(A),
      t = Math.random() * 100;
    let r = 0;
    for (let n = A[e[0]]; n <= t; n += A[e[r]]) r++;
    return e[r];
  },
  on = (A) => Math.floor(Math.random() * A).toFixed(),
  Pn = (A) => {
    oA.removeItem(`${A}_bucket20`),
      oA.removeItem(`${A}_bucket50`),
      oA.removeItem(`${A}_bucket100`);
  },
  Sd = (A) => {
    const e = oA.getItem(A);
    if (!e) return null;
    try {
      const t = JSON.parse(e);
      return typeof t != "object" ||
        typeof t.c != "string" ||
        typeof t.b20 != "string" ||
        typeof t.b50 != "string" ||
        typeof t.b100 != "string"
        ? null
        : { cohort: t.c, bucket: { 20: t.b20, 50: t.b50, 100: t.b100 } };
    } catch (t) {
      return (
        ie.error("Error loading experiment state from safeStorage", t), null
      );
    }
  },
  Yo = (A, e) => {
    const t = oA.getItem(A),
      r = t !== null && typeof t == "string" && t[0] !== "{" ? t : null,
      n = oA.getItem(`${A}_bucket20`),
      s = oA.getItem(`${A}_bucket50`),
      o = oA.getItem(`${A}_bucket100`),
      i = Sd(A);
    if (i) return Pn(A), i;
    const a = {
      cohort: r || e,
      bucket: { 20: n || on(20), 50: s || on(50), 100: o || on(100) },
    };
    Pn(A);
    const B = {
      c: a.cohort,
      b20: a.bucket[20],
      b50: a.bucket[50],
      b100: a.bucket[100],
    };
    return oA.setItem(A, JSON.stringify(B)), a;
  },
  bd = (A) => {
    Pn(A), oA.removeItem(A);
  },
  Wo = "AA";
var Vn;
(function (A) {
  A.exampleExperiment = "example_experiment";
})(Vn || (Vn = {}));
const _d = "ALL",
  Kd = { [Vn.exampleExperiment]: { platforms: [], cohorts: { 1: 50, 0: 50 } } };
window.smGamesSdkAB = {
  AA_COHORT: "",
  AA_BUCKET: { 20: "", 50: "", 100: "" },
  trackOnSessionByType: {},
  currentState: {},
  currentBucketState: {},
  experiments: {},
};
const Zo = (A) => {
    const e = [20, 50, 100],
      t = ei();
    return t
      ? e
          .map((r) => ({ [r]: { [A[r]]: { game_ready_time: t } } }))
          .reduce((r, n) => ({ ...r, ...n }), {})
      : A;
  },
  ze = class ze {
    constructor(e) {
      lA(this, "_trackCodeExp", (e, t) => {
        const r = window.smGamesSdkAB.currentState[e],
          n = window.smGamesSdkAB.currentBucketState[e] || {},
          s = `AB_${e}`;
        if (r) {
          const o = Zo(n);
          or.trackGoal(s, {
            [s]: { [r]: { ...o, ...(t ? { target_section: o } : {}) } },
          });
        }
      });
      lA(this, "init", () => {
        Object.keys(window.smGamesSdkAB.experiments).forEach((e) => {
          const t = window.smGamesSdkAB.experiments[e];
          if (window.smGamesSdkAB.currentState[e]) return;
          if (!t.platforms.includes(fA()) && !t.platforms.includes(_d)) {
            (window.smGamesSdkAB.currentState[e] = null),
              (window.smGamesSdkAB.currentBucketState[e] = null);
            return;
          }
          const r = Ld(t.cohorts),
            n = Yo(e, r);
          (window.smGamesSdkAB.currentState[e] = n.cohort),
            (window.smGamesSdkAB.currentBucketState[e] = n.bucket),
            this._trackCodeExp(e);
        });
      });
      lA(this, "trackWithGameReady", () => {
        ze._trackAA(),
          Object.keys(window.smGamesSdkAB.experiments).forEach((e) => {
            this._trackCodeExp(e);
          });
      });
      lA(this, "getExternalCohort", (e) => {
        const t = `AB_${e}`,
          r = Gi({}),
          n = new URLSearchParams(window.location.search).get(t),
          s = r[t],
          o = (i) => (i != null && i !== "" ? `${i}` : void 0);
        return o(n) || o(s);
      });
      lA(this, "getCohort", (e) => {
        const t = cB(),
          n = this.getExternalCohort(e) || window.smGamesSdkAB.currentState[e];
        return (
          n &&
            !window.smGamesSdkAB.trackOnSessionByType[e] &&
            (this._trackCodeExp(e, !0),
            (window.smGamesSdkAB.trackOnSessionByType[e] = !0)),
          n || (t ? "0" : n)
        );
      });
      if (window.smGamesSdkABInstance)
        return (
          (window.smGamesSdkAB.experiments = {
            ...window.smGamesSdkAB.experiments,
            ...e,
          }),
          window.smGamesSdkABInstance
        );
      (window.smGamesSdkAB.experiments = e),
        (window.smGamesSdkABInstance = this);
    }
    static initAAExp() {
      const e = Yo(Wo, Math.round(Math.random()).toString());
      (window.smGamesSdkAB.AA_COHORT = e.cohort),
        (window.smGamesSdkAB.AA_BUCKET = e.bucket),
        ze._trackAA();
    }
    static initExpForAllPlatform() {
      window.smGamesSdkABInstance.init();
    }
  };
lA(ze, "_trackAA", () => {
  const e = window.smGamesSdkAB.AA_COHORT,
    t = Wo;
  or.trackGoal(t, { [t]: { [e]: Zo(window.smGamesSdkAB.AA_BUCKET) } });
});
let He = ze;
window.smGamesSdkABInstance = new He(Kd);
const Pt = {
  BASE_URL: "./",
  DEV: !1,
  MODE: "production",
  PROD: !0,
  REACT_APP_ARENA_MODE_ENABLED: "true",
  REACT_APP_BUILD_FOR_PLAYGAMA: "false",
  REACT_APP_BUILD_TIME: "20.11.26 15:30",
  REACT_APP_GAME: "domino",
  REACT_APP_GAME_VERSION: "20.11.26",
  REACT_APP_STRICT_RELEASE_IDENTITY: "true",
  SSR: !1,
};
var Td = ((A) => (
  (A.Chess = "chess"),
  (A.CheckersEn = "checkers_en"),
  (A.CheckersRu = "checkers_ru"),
  (A.CheckersPoddavki = "checkers_poddavki"),
  (A.Saper = "saper"),
  (A.Nards = "nards"),
  (A.Domino = "domino"),
  (A.Durak = "durak"),
  A
))(Td || {});
const Od = (A) => {
    const e = Pt[A];
    return ["true", "1", "TRUE", "True"].includes(e.toString());
  },
  Dd = () => (Pt == null ? void 0 : Pt.REACT_APP_PLATFORM_TYPE),
  VA = "domino",
  YC = Od("REACT_APP_ARENA_MODE_ENABLED"),
  WC = () => VA === "saper",
  ZC = () => VA === "domino",
  jC = () => VA === "nards",
  zC = () => VA === "durak",
  $C = () => VA === "checkers_en",
  qC = () => VA === "checkers_ru",
  Ah = () => VA === "chess",
  qa = () => nt(),
  eh = () => $o() || qa(),
  th = () => "v20.11.26 15:30",
  rh = ["checkers_en", "checkers_ru", "checkers_poddavki"].includes(VA),
  jo = (A) => Dd() === A || (typeof window < "u" && fA() === A),
  nh = () => !1,
  sh = () => jo(v.CUSTOM) || jo(v.CUSTOM_MINIPLAY),
  oh = () => {
    var A, e;
    return (
      typeof window < "u" &&
      ((e = (A = window.location) == null ? void 0 : A.search) == null
        ? void 0
        : e.includes("debug=13"))
    );
  },
  Rd = () => {
    var e, t;
    return typeof window > "u"
      ? !1
      : String(
          ((t = (e = window.pgBridge) == null ? void 0 : e.platform) == null
            ? void 0
            : t.id) ?? ""
        ).toLowerCase() === "youtube" || typeof window.ytgame < "u";
  },
  ih = () => {
    var e, t;
    if (typeof window > "u") return !1;
    const A = String(
      ((t = (e = window.pgBridge) == null ? void 0 : e.platform) == null
        ? void 0
        : t.id) ?? ""
    ).toLowerCase();
    return Rd() || A === "gamesnacks";
  },
  xd = { ExampleExp: "example_exp" };
var AB = ((A) => (
  (A.ExtenalAPIFroGPEnabledExp = "extenal_api_for_gp_enabled_exp"),
  (A.DesignUnlockProgressCrazyGamesExp =
    "design_unlock_progress_exp_crazy_games"),
  (A.MainAudioThemeExp = "main_audio_theme_exp"),
  (A.DesignUnlockProgressExp2 = "design_unlock_progress_exp_2"),
  (A.DesignUnlockProgressExp = "design_unlock_progress_exp"),
  (A.CashTax10percentSizeExp = "cash_tax_10percent_size_exp"),
  (A.WithOutAdvInGameExp = "with_out_adv_in_game_exp"),
  (A.DesignUnlockProgressOneRewardedExp =
    "design_unlock_progress_one_rewarded_exp"),
  (A.Rewarded10LimitPerDay = "rewarded_10_limit_per_Day"),
  (A.RealNicknamesForFakeOnlineExp = "real_nicknames_for_fake_online_exp"),
  (A.GameResultModalCloseExp = "game_result_modal_close_exp"),
  (A.VkNativeAuthExp = "vk_native_auth_exp"),
  (A.VkNativeAuthExp2 = "vk_native_auth_exp_2"),
  (A.ConnectionStatusInfoExp = "connection_status_info_exp"),
  (A.FakeOnlineLessDelay = "fake_online_less_delay"),
  (A.AvatarPickerEnabledExp = "avatar_picker_enabled_exp"),
  (A.CustomOpponentAvatarsExp = "custom_opponent_avatars_exp"),
  (A.PremoveExp = "premove_exp"),
  (A.WithoutFakeReplaceOnOpponentLeave =
    "without_fake_replace_on_opponent_leave"),
  (A.DisableAdvOverlayExp = "disable_adv_overlay_exp"),
  (A.ReviewPromptExp = "review_prompt_exp"),
  (A.NardsBoardScaleExp = "nards_board_scale"),
  (A.OwnSchedulerExp = "own_scheduler_exp"),
  A
))(AB || {});
const Md = { [xd.ExampleExp]: { platforms: [], cohorts: { 0: 50, 1: 50 } } },
  Nd = Object.values(AB);
qa() ||
  Nd.forEach((A) => {
    bd(A);
  });
new He(Md);
let Kt, Xn;
const eB = (A) => {
    const e = A.trim();
    if (!e) throw new Error("Canonical game name is required");
    if (Kt !== e) {
      if (Kt)
        throw new Error(`Board-game analytics is already configured for ${Kt}`);
      return (
        (window.smAnalytics.googleMeasurementId = "G-V0GLCE7KMQ"),
        pd(e),
        hu({
          prefixedConversionEvents:
            e === "chess"
              ? ["fullscreen_30", "sticky_200"]
              : e === "checkers_ru"
              ? ["fullscreen_30", "sticky_200", "buy"]
              : [],
          metrikaAbConfig: "exposure_only",
          errorPayload: "category_v1",
        }),
        md(e),
        (Kt = e),
        e
      );
    }
  },
  tB = (A) => {
    try {
      or.trackEvent(`game_name_${A}`);
    } catch {}
  },
  ah = (A) => {
    const e = eB(A);
    e && tB(e);
  },
  Gd = (A) => {
    const e = eB(A),
      t = () => {
        e && tB(e), He.initAAExp(), He.initExpForAllPlatform();
      };
    window.smAnalytics.androidMetricEnabled && Qn() ? (Xn = t) : t();
  },
  Bh = () => {
    const A = Xn;
    Xn = void 0;
    try {
      A == null || A();
    } catch {}
  };
window.smAnalytics.debug = zo();
window.smAnalytics.metricId = 93916599;
window.smAnalytics.androidMetricEnabled = !0;
window.smAnalytics.androidMetricId = 97620763;
BB();
Gd(VA);
export {
  HC as $,
  oA as A,
  ie as B,
  TA as C,
  KA as D,
  RC as E,
  nt as F,
  Xo as G,
  $o as H,
  Ri as I,
  Ss as J,
  le as K,
  lC as L,
  fC as M,
  dC as N,
  _A as O,
  _s as P,
  CC as Q,
  hC as R,
  or as S,
  UC as T,
  FC as U,
  dn as V,
  pC as W,
  EC as X,
  mC as Y,
  vC as Z,
  uC as _,
  wB as a,
  gC as a0,
  wC as a1,
  IC as a2,
  yC as a3,
  LC as a4,
  SC as a5,
  bC as a6,
  _C as a7,
  KC as a8,
  TC as a9,
  th as aA,
  Jd as aB,
  ZC as aC,
  zC as aD,
  Pd as aE,
  nh as aF,
  oh as aG,
  Bu as aH,
  Yo as aI,
  Ld as aJ,
  WC as aK,
  JC as aL,
  ja as aM,
  ih as aN,
  $C as aO,
  qC as aP,
  Bh as aQ,
  Rd as aR,
  Dd as aS,
  ah as aT,
  kC as aU,
  OC as aa,
  DC as ab,
  BC as ac,
  cC as ad,
  fA as ae,
  te as af,
  fs as ag,
  MC as ah,
  Gi as ai,
  NC as aj,
  GC as ak,
  Vd as al,
  Ed as am,
  GA as an,
  zo as ao,
  Au as ap,
  qa as aq,
  Td as ar,
  VA as as,
  QB as at,
  jC as au,
  YC as av,
  rh as aw,
  Ah as ax,
  eh as ay,
  sh as az,
  Wt as b,
  iB as c,
  Qn as d,
  Ie as e,
  Jn as f,
  fB as g,
  gu as h,
  me as i,
  tu as j,
  v as k,
  Xd as l,
  xC as m,
  an as n,
  ru as o,
  AA as p,
  VC as q,
  qo as r,
  fu as s,
  XC as t,
  PC as u,
  nd as v,
  Ni as w,
  QC as x,
  Ls as y,
  lu as z,
};
