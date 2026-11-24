import {
  h as at,
  a as Hr,
  b as _r,
  A as p,
  d as q,
  c as Yt,
  p as Sr,
  O as Ji,
  M as Xr,
  e as Yi,
  B as Jr,
  f as Zi,
  I as Qi,
  g as ea,
  i as ta,
  j as ce,
  k as b,
  S as na,
  l as ra,
  m as oa,
  n as sa,
  o as ia,
  q as aa,
  r as la,
  s as ca,
  t as ua,
  u as da,
  v as ha,
  w as Yr,
  R as bn,
  x as It,
  H as fa,
  y as Zr,
  z as ks,
  C as pa,
  P as _n,
  D as ma,
  E as Qr,
  F as eo,
  G as ga,
  J as Bt,
  K as Ts,
  L as ya,
  N as Wn,
  Q as Zt,
  T as Ft,
  U as wa,
  V as ba,
  W as Ct,
  X as Kn,
  Y as Sn,
  Z as _a,
  _ as Qt,
  $ as en,
  a0 as Sa,
  a1 as Er,
  a2 as Hn,
  a3 as Ea,
  a4 as Pa,
  a5 as va,
  a6 as Os,
  a7 as Ia,
  a8 as to,
  a9 as Ca,
  aa as Aa,
  ab as ka,
  ac as Rs,
  ad as Ta,
  ae as Oa,
  af as Ra,
  ag as xa,
  ah as Da,
  ai as La,
  aj as Na,
  ak as $a,
  al as tn,
  am as Ua,
} from "./coreAppHandle.js";
import {
  _ as Xe,
  g as Ma,
  C as xs,
  S as Ba,
  R as Pr,
  E as Fa,
  T as no,
  a as vr,
  G as Ga,
} from "./pixi.js";
import { v as za, a as ja, b as st } from "./uuid.js";
import { l as ro } from "./index-BUwntghg.js";
import { m as un, A as M } from "./AdNetwork.js";
import { g as he } from "./getGameLogger.js";
function Te(e) {
  return Array.isArray(e);
}
function m(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    !Te(e) &&
    Object.getPrototypeOf(e) === Object.prototype &&
    Object.getOwnPropertySymbols(e).length === 0
  );
}
function qa(e) {
  return e === void 0;
}
function k(e) {
  return (t) => (qa(t) ? !0 : e(t));
}
function Ir(e, t) {
  return (n) => !(!Te(n) || n.some((r) => !e(r)));
}
function N(e) {
  return typeof e == "boolean";
}
function Va(e) {
  return Number.isNaN(e);
}
function V(e) {
  return typeof e == "number" && !Va(e);
}
function Cr(e, t) {
  return (n) => !(!m(n) || Object.values(n).some((o) => !e(o)));
}
function we(e) {
  return typeof e == "string";
}
const oo = 40;
function Ar(e) {
  return Xn(e, 1);
}
function Xn(e, t) {
  if (t > oo)
    throw new Error(`Could not validate JSON due to its depth > ${oo}`);
  return e === 1 / 0 || e === -1 / 0
    ? !1
    : we(e) ||
        V(e) ||
        N(e) ||
        e === null ||
        Cr((n) => Xn(n, t + 1))(e) ||
        Ir((n) => Xn(n, t + 1))(e);
}
function re(e) {
  return Cr(Ar)(e);
}
function f(e) {
  return we(e) && !!e.trim();
}
function Ds(e, t, n) {
  return t(e) && e >= n;
}
function Wa(e) {
  return V(e) && e % 1 === 0;
}
function Ls(e, t) {
  return Ds(e, Wa, t);
}
function dn(e) {
  return Ls(e, 1);
}
function S(e) {
  return typeof e == "function";
}
const Ka = [
  /\s/,
  /\/\/\d+$/,
  /\/\/\W/,
  /\/\/.+\.\//,
  /\/\/\d{1,3}(\.\d{1,3}){0,2}(\/|$)/,
  /-[.-].*($|\/)/,
];
function Ha(e) {
  if (!f(e)) return !1;
  try {
    return new URL(e), !Ka.some((t) => t.test(e));
  } catch {
    return !1;
  }
}
function Ze(e) {
  return (t) => e.includes(t);
}
function At(e) {
  return Ls(e, 0);
}
function ue(e) {
  return (t) => (t === null ? !0 : e(t));
}
function Xa(e) {
  return !e || S(e)
    ? !0
    : at(e, "length")
    ? !e.length
    : e instanceof Map || e instanceof Set
    ? !e.size
    : !Object.keys(e).length;
}
class Ja {}
var Ae;
(function (e) {
  (e.Interstitial = "interstitial"),
    (e.Rewarded = "rewarded"),
    (e.Banner = "banner");
})(Ae || (Ae = {}));
new Set(Object.values(Ae).map(String));
let B = class {
  #t;
  #e = new Set();
  constructor({ log: t } = {}) {
    this.#t = t ?? { error: () => {} };
  }
  on(t) {
    return (
      this.#e.add(t),
      () => {
        this.#e.delete(t);
      }
    );
  }
  emit(t) {
    this.#e.forEach((n) => {
      try {
        const r = n(t);
        r instanceof Promise &&
          r.catch((o) => {
            this.#t.error(
              "Uncaught promise rejection while executing event listener provided by the library user.",
              o
            );
          });
      } catch (r) {
        this.#t.error(
          "Error while executing event listener provided by the library user.",
          r
        );
      }
    });
  }
  once(t) {
    const n = this.on((r) => {
      t(r), n();
    });
    return n;
  }
  clear() {
    this.#e.clear();
  }
  get listeners() {
    return Array.from(this.#e);
  }
};
class Ns {
  promise;
  #t = () => {};
  #e = () => {};
  #n = !1;
  #r = !1;
  constructor() {
    (this.promise = new Promise((t, n) => {
      (this.#e = t), (this.#t = n);
    })),
      this.promise
        .then(() => {
          this.#n = !0;
        })
        .catch(() => {
          this.#r = !0;
        });
  }
  isResolved() {
    return this.#n;
  }
  isRejected() {
    return this.#r;
  }
  resolve(t) {
    this.#e(t);
  }
  reject(t) {
    this.#t(t);
  }
}
var Z;
(function (e) {
  (e.DbTimeoutError = "DbTimeoutError"),
    (e.EnvironmentError = "EnvironmentError"),
    (e.ForbiddenError = "ForbiddenError"),
    (e.HealthCheckError = "HealthCheckError"),
    (e.HttpError = "HttpError"),
    (e.InternalError = "InternalError"),
    (e.InternalParameterError = "InternalParameterError"),
    (e.InvalidConfigurationError = "InvalidConfigurationError"),
    (e.InvalidGraphQlError = "InvalidGraphQlError"),
    (e.InvalidOperationError = "InvalidOperationError"),
    (e.InvalidParameterError = "InvalidParameterError"),
    (e.NotAuthorizedError = "NotAuthorizedError"),
    (e.NotFoundError = "NotFoundError"),
    (e.NotSupportedError = "NotSupportedError"),
    (e.RequestTimeoutError = "RequestTimeoutError"),
    (e.ThirdPartyError = "ThirdPartyError"),
    (e.UnknownError = "UnknownError");
})(Z || (Z = {}));
function kr(e) {
  return typeof e == "string";
}
function so(e) {
  return kr(e) && !!e.trim();
}
function Ya(e) {
  return Number.isNaN(e);
}
function Za(e) {
  return typeof e == "number" && !Ya(e);
}
function Qa(e) {
  return !e || !kr(e) ? !1 : Object.values(Z).includes(e);
}
let mt = class extends Error {
  timestamp;
  code;
  id;
  additionalInformation;
  parentError;
  constructor(t, n, r, o, s) {
    super(r),
      (this.timestamp = Date.now()),
      (this.id = Za(n) ? n : 1647962470),
      (this.code = Qa(t) ? t : Z.UnknownError),
      (this.additionalInformation = o),
      (this.parentError = s);
  }
  toErrorResponse() {
    const t = Jn(this),
      {
        message: n,
        code: r,
        id: o,
        additionalInformation: s,
        timestamp: i,
      } = t;
    return {
      message: n,
      code: r || Z.UnknownError,
      id: o || 1663755346,
      ...(s?.public ? { additionalInformation: s.public } : {}),
      timestamp: i || Date.now(),
    };
  }
  toObject(t = !1) {
    const n = Jn(this);
    if (!t) return n;
    const { stack: r, parentError: o, ...s } = n;
    return s;
  }
  toString() {
    return JSON.stringify(this.toObject(), null, "  ");
  }
  valueOf() {
    return this.toObject();
  }
  get [Symbol.toStringTag]() {
    return this.toString();
  }
};
function el(e) {
  if (e)
    return String(e)
      .split(
        `
`
      )
      .map((t) => t.trim())
      .slice(1);
}
function tl(e) {
  const { message: t } = e || {};
  return so(t) ? t : so(e) ? e : nl(e);
}
const io = "BaseError handling issue: Error was not serializable";
function nl(e) {
  try {
    const t = JSON.stringify(e);
    return kr(t) ? t : io;
  } catch {
    return io;
  }
}
function Jn(e, t = 1) {
  const {
    code: n,
    id: r,
    stack: o,
    additionalInformation: s,
    parentError: i,
    timestamp: a,
  } = e;
  return {
    message: tl(e),
    ...(n ? { code: n } : {}),
    ...(r ? { id: r } : {}),
    ...(a ? { timestamp: a } : {}),
    ...(o ? { stack: el(o) } : {}),
    ...(s ? { additionalInformation: s } : {}),
    ...(i
      ? {
          parentError:
            t <= 10
              ? Jn(i, t + 1)
              : {
                  message:
                    "Truncated further parent errors due to reaching max depth",
                },
        }
      : {}),
  };
}
let Le = class extends mt {
  constructor(t, n, r, o) {
    super(Z.InternalError, t, n, r, o);
  }
};
class hn extends mt {
  constructor(t, n, r, o, s) {
    super(t, n, r, o, s), (this.stack = void 0);
  }
}
class $s extends hn {
  warn;
  constructor(t, n, r, o, s) {
    super(t, n, r, o, s), (this.warn = !0);
  }
}
let Tr = class extends hn {
    constructor(t, n, r, o, s, i) {
      super(Z.HttpError, t, n, {
        method: r,
        url: o,
        ...(s ? { status: s } : {}),
        ...(i ? { body: i } : {}),
      });
    }
  },
  v = class extends hn {
    constructor(t, n, r, o) {
      super(Z.InternalParameterError, t, n, r, o);
    }
  };
class ke extends $s {
  constructor(t, n, r, o) {
    super(Z.InvalidOperationError, t, n, r, o);
  }
}
let R = class extends $s {
    constructor(t, n, r, o) {
      super(Z.InvalidParameterError, t, n, r, o);
    }
  },
  Qe = class extends hn {
    constructor(t, n, r, o, s) {
      super(Z.ThirdPartyError, t, r, { ...(o || {}), apiName: n }, s);
    }
  };
class rl extends mt {
  constructor(t, n, r, o) {
    super(Z.UnknownError, t, n, r, o);
  }
}
function be(e, t, n, r) {
  return e instanceof mt ? e : new rl(t, n, r, e);
}
const Oe = Symbol("notDefined");
function Je(e, t) {
  if (!S(e))
    throw new v(1700571963, "Memoize construct function must be a function");
  const { resetAfterDone: n = !1 } = {};
  if (!N(n))
    throw new v(
      1700571969,
      'Option "resetAfterDone" must be a boolean if provided'
    );
  let r = at(t, "initResult") ? t.initResult : Oe,
    o = !1,
    s = !1;
  const i = (a) => {
    if (r !== Oe) return r;
    if (((o = !1), (s = !0), (r = e(a)), !(r instanceof Promise))) {
      if (((s = !1), (o = !0), n)) {
        const u = r;
        return (r = Oe), u;
      }
      return r;
    }
    return (
      r
        .then(() => {
          (s = !1), (o = !0), n && (r = Oe);
        })
        .catch(() => {
          (s = !1), (o = !1), (r = Oe);
        }),
      r
    );
  };
  return (
    (i.reset = () => {
      (s = !1), (o = !1), (r = Oe);
    }),
    (i.notExecuted = () => r !== Oe),
    (i.wasLastExecutionSuccessful = () => o),
    (i.inProgress = () => s),
    i
  );
}
function Us(e, t) {
  if (!Ds(e, V, 0)) {
    const o = Promise.reject(
      new R(1700561713, 'Provided "ms" value should be a positive number', {
        ms: e,
      })
    );
    return (o.cancel = () => {}), o;
  }
  let n;
  const r = new Promise((o, s) => {
    n = setTimeout(() => {
      t instanceof Error ? s(t) : o(t);
    }, e);
  });
  return (
    (r.cancel = () => {
      n && (clearTimeout(n), (n = void 0));
    }),
    r
  );
}
async function ol(e, t, n) {
  const r = Us(t, n || new Le(1718630881, "Timeout reached", { timeout: t })),
    o = await Promise.race([e, r]);
  return r.cancel(), o;
}
var sl = function (e, t, n, r, o) {
    if (r === "m") throw new TypeError("Private method is not writable");
    if (r === "a" && !o)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof t == "function" ? e !== t || !o : !t.has(e))
      throw new TypeError(
        "Cannot write private member to an object whose class did not declare it"
      );
    return r === "a" ? o.call(e, n) : o ? (o.value = n) : t.set(e, n), n;
  },
  En = function (e, t, n, r) {
    if (n === "a" && !r)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof t == "function" ? e !== t || !r : !t.has(e))
      throw new TypeError(
        "Cannot read private member from an object whose class did not declare it"
      );
    return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
  },
  qe;
class J {
  constructor(t) {
    qe.set(this, void 0), sl(this, qe, t, "f");
  }
  on(t) {
    return En(this, qe, "f").on(t);
  }
  once(t) {
    return En(this, qe, "f").once(t);
  }
  clear() {
    En(this, qe, "f").clear();
  }
}
qe = new WeakMap();
class il {
  constructor() {
    (this.internalEvents = { loggedIn: new B(), loggedOut: new B() }),
      (this.events = {
        loggedIn: new J(this.internalEvents.loggedIn),
        loggedOut: new J(this.internalEvents.loggedOut),
      });
  }
}
function al(e) {
  if (!m(e)) return !1;
  const {
    adFreeInitialLevels: t,
    interstitialCooldownLevel: n,
    longGameplayCooldownMS: r,
    enableLongGameplayAds: o,
    supportsAdPlayButton: s,
    freeRewardedCooldown: i,
    bannerAds: a,
  } = e;
  return !k(At)(t) ||
    !k(At)(n) ||
    !k(At)(r) ||
    !k(N)(o) ||
    !k(N)(s) ||
    !k(At)(i)
    ? !1
    : k(N)(a);
}
function ll(e) {
  if (!m(e)) return !1;
  const { limitSaveCalls: t } = e;
  return t === !1 ? !0 : k(dn)(t);
}
function Gt(e, ...t) {
  const n = t.filter((r) => r !== void 0);
  if (!n.length) return e;
  if (!m(e)) {
    const [r, ...o] = n;
    return Gt(r, ...o);
  }
  return n.reduce(
    (r, o, s) =>
      Object.entries(o).reduce((i, [a, u]) => {
        if (u === void 0) return i;
        if (m(u))
          throw new v(
            1755265614,
            `Value for key ${a} at source ${s} is a plain record`,
            { src: o }
          );
        return { ...i, [a]: i[a], value: u };
      }, r),
    { ...e }
  );
}
function cl(e) {
  if (!m(e)) return !1;
  const {
    disableInAppPurchase: t,
    disableLeaderboards: n,
    options: r,
    disableAds: o,
    adsConfig: s,
  } = e;
  return !k(N)(t) || !k(N)(n) || !k(ll)(r) || !k(N)(o) ? !1 : k(al)(s);
}
function Ms(e) {
  const {
    disableInAppPurchase: t,
    disableLeaderboards: n,
    options: r,
    disableAds: o,
    adsConfig: s,
  } = e;
  return t === void 0 &&
    n === void 0 &&
    r === void 0 &&
    o === void 0 &&
    s === void 0
    ? null
    : {
        disableInAppPurchase: t,
        disableLeaderboards: n,
        options: r,
        disableAds: o,
        adsConfig: s,
      };
}
function ul(e, t) {
  if (e === null) return t === null ? {} : { ...t };
  if (t === null) return { ...e };
  const { options: n, adsConfig: r, ...o } = e,
    { options: s, adsConfig: i, ...a } = t;
  return { ...Gt(o, a), options: Gt(n, s), adsConfig: Gt(r, i) };
}
function dl(e) {
  if (!m(e)) return !1;
  const { gameId: t, gameSlug: n, gameVersion: r, isDev: o } = e;
  return !f(t) || !f(n) || !f(r) ? !1 : k(N)(o);
}
function hl(e) {
  const { gameId: t, gameSlug: n, gameVersion: r, isDev: o } = e;
  return { gameId: t, gameSlug: n, gameVersion: r, isDev: o };
}
function Bs(e) {
  return dl(e) ? cl(e) : !1;
}
function fl(e) {
  return { rawGameConfig: hl(e), gameSharedOptions: Ms(e) };
}
function pl(e) {
  const { platform: t, bridgeVersion: n, sdkVersion: r } = e;
  return { platform: t, bridgeVersion: n, sdkVersion: r };
}
function ml(e) {
  return { rawPlatformConfig: pl(e), platformSharedOptions: Ms(e) };
}
class gl {
  constructor(t) {
    if (!Bs(t)) throw new R(1755010988, "Invalid bridge params provided");
    this.gameConfig = t;
  }
}
class yl {}
class wl extends yl {
  async init() {}
  async joinCommunity() {}
  async canJoinCommunity() {
    return !1;
  }
}
var ao = function (e, t, n, r, o) {
    if (r === "m") throw new TypeError("Private method is not writable");
    if (r === "a" && !o)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof t == "function" ? e !== t || !o : !t.has(e))
      throw new TypeError(
        "Cannot write private member to an object whose class did not declare it"
      );
    return r === "a" ? o.call(e, n) : o ? (o.value = n) : t.set(e, n), n;
  },
  lo = function (e, t, n, r) {
    if (n === "a" && !r)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof t == "function" ? e !== t || !r : !t.has(e))
      throw new TypeError(
        "Cannot read private member from an object whose class did not declare it"
      );
    return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
  },
  zt,
  jt;
class bl {
  constructor(t, n) {
    zt.set(this, void 0), jt.set(this, void 0);
    const { platformSharedOptions: r, rawPlatformConfig: o } = ml(n),
      { gameSharedOptions: s, rawGameConfig: i } = fl(t);
    ao(this, jt, n, "f"), ao(this, zt, { ...i, ...o, ...ul(r, s) }, "f");
  }
  getGamePlatformConfig() {
    return lo(this, zt, "f");
  }
  getPlatformConfig() {
    return lo(this, jt, "f");
  }
}
(zt = new WeakMap()), (jt = new WeakMap());
class _l {
  constructor() {
    (this.internalEvents = { saved: new B(), error: new B() }),
      (this.events = {
        saved: new J(this.internalEvents.saved),
        error: new J(this.internalEvents.error),
      });
  }
}
class Sl {}
class El extends Sl {
  async init() {}
  async vibrate() {}
  async canShowSettingsToggle() {
    return !1;
  }
}
class Pl {
  constructor() {
    (this.internalEvents = {
      purchaseApproved: new B(),
      purchaseConsumed: new B(),
      purchaseSucceeded: new B(),
      purchaseFailed: new B(),
    }),
      (this.events = {
        purchaseApproved: new J(this.internalEvents.purchaseApproved),
        purchaseConsumed: new J(this.internalEvents.purchaseConsumed),
        purchaseSucceeded: new J(this.internalEvents.purchaseSucceeded),
        purchaseFailed: new J(this.internalEvents.purchaseFailed),
      });
  }
  async isPurchaseAvailable() {
    return this.isIapSupported();
  }
}
class vl {}
class Il extends vl {
  async init() {}
  async getItems() {
    return [];
  }
  async getInventory() {
    return [];
  }
  async transaction() {
    return [];
  }
}
class Cl {}
class Al {}
class kl extends Al {
  async init() {}
  async scheduleNotification() {
    return !1;
  }
  async cancelAllNotifications() {
    return !0;
  }
  async canSubscribe() {
    return !1;
  }
}
class Tl {
  constructor() {
    (this.internalEvents = {
      windowFocusChange: new B(),
      pause: new B(),
      resume: new B(),
      muteSound: new B(),
      unmuteSound: new B(),
    }),
      (this.events = {
        windowFocusChange: new J(this.internalEvents.windowFocusChange),
        pause: new J(this.internalEvents.pause),
        resume: new J(this.internalEvents.resume),
        muteSound: new J(this.internalEvents.muteSound),
        unmuteSound: new J(this.internalEvents.unmuteSound),
      });
  }
}
function Ol(e) {
  if (!m(e)) return !1;
  const { eventType: t, data: n } = e;
  return f(t) ? k(Ar)(n) : !1;
}
function Rl(e) {
  if (!m(e)) return !1;
  const { url: t } = e;
  return Ha(t);
}
class xl {}
class Dl extends xl {
  shouldShowRatingPopup() {
    return !1;
  }
  async showRatingPopup() {}
}
class Ll {}
class Nl extends Ll {
  async init() {}
  async share() {}
  async inviteFriend() {}
}
const $l = /^[a-z]{2}$/;
function Fs(e) {
  return f(e) ? $l.test(e) : !1;
}
const Ul = /^[a-z]{2,3}-[A-Z]{2,3}$/;
function Yn(e) {
  return f(e) ? Ul.test(e) : !1;
}
class Ml {}
var z;
(function (e) {
  (e.Debug = "-1"),
    (e.Info = "0"),
    (e.Notice = "1"),
    (e.Warn = "2"),
    (e.Error = "3"),
    (e.Fatal = "4"),
    (e.Disable = "5");
})(z || (z = {}));
const Bl = new Set(Object.values(z));
function co(e) {
  return Bl.has(e);
}
function Re(e, t) {
  return Number(e) > Number(t);
}
function Gs(e) {
  return typeof e == "string";
}
function Fl(e) {
  return Gs(e) && !!e.trim();
}
function Gl() {
  return typeof console < "u" && typeof console.log == "function";
}
function zl(e) {
  return e == null;
}
function jl(e, t) {
  return zl(e) ? !1 : Object.prototype.hasOwnProperty.call(e, t);
}
function ql(e) {
  return typeof e == "function";
}
function Pe(e, ...t) {
  if (!Gl()) return () => {};
  const n = Vl(e);
  if (n) return n;
  const [r, ...o] = t;
  return Gs(r) ? Pe(r, ...o) : console.log.bind(console);
}
function Vl(e) {
  const t = console;
  if (!jl(t, e)) return null;
  const n = t[e];
  return ql(n) ? n.bind(console) : null;
}
function uo(e) {
  return {
    log: Re(e, z.Info) ? () => {} : Pe("info"),
    debug: Re(e, z.Debug) ? () => {} : Pe("debug"),
    info: Re(e, z.Info) ? () => {} : Pe("info"),
    notice: Re(e, z.Notice) ? () => {} : Pe("notice", "info"),
    warn: Re(e, z.Warn) ? () => {} : Pe("warn", "notice", "info"),
    error: Re(e, z.Error) ? () => {} : Pe("error"),
    fatal: Re(e, z.Fatal) ? () => {} : Pe("fatal", "error"),
  };
}
function Wl({ name: e, severity: t = z.Disable }) {
  if (!Fl(e)) throw new Error("Name must be non-empty string");
  if (!co(t))
    throw new Error(`Severity must be one of ${Object.values(z).join(", ")}`);
  let n = t,
    r = uo(n);
  const o =
    (s, i) =>
    (...a) => {
      try {
        r[s](`[${e}][${s}][${i}]`, ...a);
      } catch {}
    };
  return {
    setLogLevel(s) {
      if (!co(s))
        throw new Error(
          `Severity must be one of ${Object.values(z).join(", ")}`
        );
      (n = s), (r = uo(n));
    },
    getLogLevel() {
      return n;
    },
    getLog(s) {
      return Object.keys(r).reduce((i, a) => ({ ...i, [a]: o(a, s) }), {});
    },
  };
}
const { setLogLevel: Kl, getLog: x } = Wl({
    name: "CrazyGamesBridge",
    severity: z.Disable,
  }),
  Hl = x("CrazyGamesConfig");
class Xl extends bl {
  async init() {
    Hl.info("CrazyGames Config initialized");
  }
}
function Jl(e) {
  if (!m(e))
    throw new R(1765835506, "CrazyGamesBridgeOptions must be a plain record", {
      val: e,
    });
  const {
    storageKeys: t,
    xsollaProjectId: n,
    leaderboardEncryptionKey: r,
    crazyGamesGameId: o,
    leaderboardPortalUrl: s,
    weeklyLeaderboardUrl: i,
  } = e;
  if (!k(Ir(f))(t))
    throw new R(
      1766275557,
      "storageKeys must be an array of non-empty strings if provided",
      { val: e }
    );
  if (!k(f)(n))
    throw new R(
      1766334612,
      "xsollaProjectId must be a non-empty string if provided",
      { val: e }
    );
  if (!k(f)(r))
    throw new R(
      1781775474,
      "leaderboardEncryptionKey must be a non-empty string if provided",
      { val: e }
    );
  if (!k(f)(o))
    throw new R(
      1790068507,
      "crazyGamesGameId must be a non-empty string if provided",
      { val: e }
    );
  if (!k(f)(s))
    throw new R(
      1790068511,
      "leaderboardPortalUrl must be a non-empty string if provided",
      { val: e }
    );
  if (!k(f)(i))
    throw new R(
      1790160004,
      "weeklyLeaderboardUrl must be a non-empty string if provided",
      { val: e }
    );
  if (!Bs(e)) throw new R(1760472374, "Invalid game config", { val: e });
}
var We;
(function (e) {
  (e.GameplayStart = "gameplayStart"),
    (e.GameplayStop = "gameplayStop"),
    (e.HappyTime = "happytime");
})(We || (We = {}));
const Yl = new Set(Object.values(We).map(String));
function Zl(e) {
  if (!Ol(e)) return !1;
  const { eventType: t } = e;
  return f(t) ? Yl.has(t) : !1;
}
var Ne;
(function (e) {
  (e.Unfilled = "unfilled"),
    (e.Adblock = "adblock"),
    (e.AdCooldown = "adCooldown"),
    (e.AdsDisabledBasicLaunch = "adsDisabledBasicLaunch"),
    (e.Other = "other"),
    (e.UserNotAuthenticated = "userNotAuthenticated"),
    (e.UnexpectedError = "unexpectedError"),
    (e.ShowAuthPromptInProgress = "showAuthPromptInProgress"),
    (e.UserAlreadySignedIn = "userAlreadySignedIn"),
    (e.UserCancelled = "userCancelled"),
    (e.ShowAccountLinkPromptInProgress = "showAccountLinkPromptInProgress");
})(Ne || (Ne = {}));
new Set(Object.values(Ne).map(String));
class d extends Qe {
  constructor(t, n, r, o) {
    super(t, "crazyGamesSdk", n, r, o);
  }
}
function Or(e) {
  if (!at(e, "code") || !at(e, "message")) return !1;
  const { code: t, message: n } = e;
  return f(t) && f(n);
}
class lt extends d {
  errorResult;
  constructor(t, n, r) {
    super(t, `[SDK Error] ${n.message}`, { ...r, errorResult: n }),
      (this.errorResult = n);
  }
}
function Rr(e) {
  return e instanceof lt ? e.errorResult.code : null;
}
function Ee({
  call: e,
  functionName: t,
  responseErrorId: n,
  sdkErrorId: r,
  timeout: o,
}) {
  return async (...s) => {
    try {
      if (!o) return await e(...s);
      const { timeoutInMs: i, errorId: a } = o;
      return await Promise.race([
        e(...s),
        Us(i).then(() => {
          throw new d(
            a,
            `Timeout of ${i}ms exceeded when calling CrazyGames SDK function: ${t}.`,
            { params: s }
          );
        }),
      ]);
    } catch (i) {
      throw i instanceof lt
        ? i
        : Or(i)
        ? new lt(n, i, { functionName: t, params: s })
        : new d(
            r,
            `Error while trying to call CrazyGames SDK function: ${t}`,
            { params: s },
            i
          );
    }
  };
}
function W({ call: e, functionName: t, responseErrorId: n, sdkErrorId: r }) {
  return (...o) => {
    try {
      return e(...o);
    } catch (s) {
      throw Or(s)
        ? new lt(n, s, { functionName: t, params: o })
        : new d(
            r,
            `Error while trying to call sync CrazyGames SDK function: ${t}`,
            { params: o },
            s
          );
    }
  };
}
function y(e, t) {
  return (
    e !== null && (typeof e == "object" || typeof e == "function") && t in e
  );
}
function Ql(e) {
  if (!y(e, "requestAd"))
    throw new d(1765839711, "AdModule must have requestAd property", {
      val: e,
    });
  if (!y(e, "hasAdblock"))
    throw new d(1765887738, "AdModule must have hasAdblock property", {
      val: e,
    });
  const { requestAd: t, hasAdblock: n } = e;
  if (!S(t))
    throw new d(1765839733, "requestAd must be a function", { val: e });
  if (!S(n))
    throw new d(1765887778, "hasAdblock must be a function", { val: e });
}
const ho = ["midgame", "rewarded"];
function ec(e) {
  if (!Ze(ho)(e))
    throw new R(1765886822, `RequestAdType must be one of: ${ho.join(", ")}`, {
      val: e,
    });
}
function tc(e) {
  if (!y(e, "requestBanner"))
    throw new d(1765895858, "BannerModule must have requestBanner property", {
      val: e,
    });
  if (!y(e, "requestResponsiveBanner"))
    throw new d(
      1765895861,
      "BannerModule must have requestResponsiveBanner property",
      { val: e }
    );
  if (!y(e, "clearBanner"))
    throw new d(1765895864, "BannerModule must have clearBanner property", {
      val: e,
    });
  if (!y(e, "clearAllBanners"))
    throw new d(1765895866, "BannerModule must have clearAllBanners property", {
      val: e,
    });
  const {
    requestBanner: t,
    requestResponsiveBanner: n,
    clearBanner: r,
    clearAllBanners: o,
  } = e;
  if (!S(t))
    throw new d(1765895888, "requestBanner must be a function", { val: e });
  if (!S(n))
    throw new d(1765895891, "requestResponsiveBanner must be a function", {
      val: e,
    });
  if (!S(r))
    throw new d(1765895905, "clearBanner must be a function", { val: e });
  if (!S(o))
    throw new d(1765895907, "clearAllBanners must be a function", { val: e });
}
function nc(e) {
  if (!m(e))
    throw new d(1781775480, "CrazyGamesFriend must be a plain record", {
      val: e,
    });
  const { id: t, username: n, profilePictureUrl: r } = e;
  if (!f(t))
    throw new d(1781775481, "id must be a non-empty string", { val: e });
  if (!f(n))
    throw new d(1781775482, "username must be a non-empty string", { val: e });
  if (!k(f)(r))
    throw new d(
      1781775483,
      "profilePictureUrl must be a non-empty string when present",
      { val: e }
    );
}
const rc = x("SystemInfoDeviceType"),
  Zn = ["desktop", "tablet", "mobile"],
  fo = "desktop";
function oc(e) {
  return Ze(Zn)(e)
    ? e
    : (rc.warn(`Unexpected device type, falling back to '${fo}'.`, { val: e }),
      fo);
}
function sc(e) {
  if (!Ze(Zn)(e))
    throw new R(
      1766068927,
      `SystemInfoDeviceType must be one of: ${Zn.join(", ")}`,
      { val: e }
    );
}
function ic(e) {
  return m(e) ? { ...e, type: oc(e.type) } : e;
}
function ac(e) {
  if (!m(e))
    throw new d(1766068916, "SystemInfoDevice must be a plain record", {
      val: e,
    });
  const { type: t } = e;
  try {
    sc(t);
  } catch (n) {
    throw new d(
      1766068993,
      "type must be a valid SystemInfoDeviceType",
      { val: e },
      n
    );
  }
}
const lc = "unknown";
function xr(e, t, n, r = lc) {
  if (!m(e)) return e;
  const o = t
    .filter((s) => !f(e[s]))
    .map(
      (s) => (
        n.warn(`Unexpected ${s}, falling back to '${r}'.`, { val: e }), [s, r]
      )
    );
  return { ...e, ...Object.fromEntries(o) };
}
const cc = x("SystemInfoOs");
function uc(e) {
  return xr(e, ["name", "version"], cc);
}
function dc(e) {
  if (!m(e))
    throw new d(1766069494, "SystemInfoOs must be a plain record", { val: e });
  const { name: t, version: n } = e;
  if (!f(t))
    throw new d(1766069496, "name must be a non-empty string", { val: e });
  if (!f(n))
    throw new d(1766069499, "version must be a non-empty string", { val: e });
}
const hc = x("SystemInfoBrowser");
function fc(e) {
  return xr(e, ["name", "version"], hc);
}
function pc(e) {
  if (!m(e))
    throw new d(1766069506, "SystemInfoBrowser must be a plain record", {
      val: e,
    });
  const { name: t, version: n } = e;
  if (!f(t))
    throw new d(1766069508, "name must be a non-empty string", { val: e });
  if (!f(n))
    throw new d(1766069511, "version must be a non-empty string", { val: e });
}
const mc = x("SystemInfoApplicationType"),
  Qn = ["google_play_store", "apple_store", "pwa", "web"],
  po = "web";
function gc(e) {
  return Ze(Qn)(e)
    ? e
    : (mc.warn(`Unexpected application type, falling back to '${po}'.`, {
        val: e,
      }),
      po);
}
function yc(e) {
  if (!Ze(Qn)(e))
    throw new R(
      1766069613,
      `SystemInfoApplicationType must be one of: ${Qn.join(", ")}`,
      { val: e }
    );
}
const er = x("CrazyGamesSystemInfo"),
  zs = "ZZ",
  mo = "en-US";
function js(e) {
  const t = xr(e, ["countryCode"], er, zs);
  return m(t)
    ? {
        ...t,
        locale: wc(t.locale),
        device: ic(t.device),
        os: uc(t.os),
        browser: fc(t.browser),
        applicationType: gc(t.applicationType),
      }
    : t;
}
function wc(e) {
  if (Yn(e)) return e;
  const t = bc(e);
  return Yn(t)
    ? (er.debug(
        `Locale '${String(
          e
        )}' does not follow BCP 47 casing, reading it as '${t}'.`
      ),
      t)
    : (er.warn(`Unexpected locale, falling back to '${mo}'.`, { val: e }), mo);
}
function bc(e) {
  if (!f(e)) return e;
  const [t, n] = e.split(/[-_]/);
  return !f(t) || !f(n) ? e : `${t.toLowerCase()}-${n.toUpperCase()}`;
}
function qs(e) {
  if (!m(e))
    throw new d(1766069181, "CrazyGamesSystemInfo must be a plain record", {
      val: e,
    });
  const {
    countryCode: t,
    locale: n,
    device: r,
    os: o,
    browser: s,
    applicationType: i,
  } = e;
  if (!f(t))
    throw new d(1766069184, "countryCode must be a non-empty string", {
      val: e,
    });
  if (!Yn(n))
    throw new d(1766069193, "locale must be a valid Locale", { val: e });
  try {
    ac(r), dc(o), pc(s), yc(i);
  } catch (a) {
    throw new d(
      1766069196,
      "CrazyGamesSystemInfo contained invalid values. See parent error.",
      { val: e },
      a
    );
  }
}
const _c = x("CrazyGamesUser");
function Sc(e) {
  if (!m(e)) return e;
  const { profilePictureUrl: t, __dangerousUserId: n, ...r } = e,
    o = { ...r, ...(f(n) ? { userId: n } : {}) };
  return f(t) || t === null
    ? { ...o, profilePictureUrl: t }
    : (_c.warn("Unexpected profilePictureUrl, reading it as null.", { val: e }),
      { ...o, profilePictureUrl: null });
}
function Vs(e) {
  if (!m(e))
    throw new d(1766064553, "CrazyGamesUser must be a plain record", {
      val: e,
    });
  const { username: t, profilePictureUrl: n, userId: r } = e;
  if (r !== void 0 && !f(r))
    throw new d(1790068512, "userId must be a non-empty string if present", {
      val: e,
    });
  if (!f(t))
    throw new d(1766064556, "username must be a non-empty string", { val: e });
  if (n !== null && !f(n))
    throw new d(
      1766064560,
      "profilePictureUrl must be a non-empty string or null",
      { val: e }
    );
}
function Ec(e) {
  if (!m(e))
    throw new d(1781775484, "CrazyGamesFriendsPage must be a plain record", {
      val: e,
    });
  const { friends: t, hasMore: n } = e;
  if (!Te(t)) throw new d(1781775485, "friends must be an array", { val: e });
  if (
    (t.forEach((r) => {
      nc(r);
    }),
    !N(n))
  )
    throw new d(1781775486, "hasMore must be a boolean", { val: e });
}
function Pc(e) {
  if (!y(e, "isUserAccountAvailable"))
    throw new d(
      1766063307,
      "UserModule must have isUserAccountAvailable property",
      { val: e }
    );
  if (!y(e, "getUser"))
    throw new d(1766063450, "UserModule must have getUser property", {
      val: e,
    });
  if (!y(e, "systemInfo"))
    throw new d(1766063509, "UserModule must have systemInfo property", {
      val: e,
    });
  if (!y(e, "getUserToken"))
    throw new d(1766063531, "UserModule must have getUserToken property", {
      val: e,
    });
  if (!y(e, "showAuthPrompt"))
    throw new d(1766063614, "UserModule must have showAuthPrompt property", {
      val: e,
    });
  if (!y(e, "addAuthListener"))
    throw new d(1766063776, "UserModule must have addAuthListener property", {
      val: e,
    });
  if (!y(e, "removeAuthListener"))
    throw new d(
      1766063822,
      "UserModule must have removeAuthListener property",
      { val: e }
    );
  if (!y(e, "showAccountLinkPrompt"))
    throw new d(
      1766063890,
      "UserModule must have showAccountLinkPrompt property",
      { val: e }
    );
  if (!y(e, "getXsollaUserToken"))
    throw new d(
      1766333418,
      "UserModule must have getXsollaUserToken property",
      { val: e }
    );
  const {
    isUserAccountAvailable: t,
    getUser: n,
    systemInfo: r,
    getUserToken: o,
    getXsollaUserToken: s,
    showAuthPrompt: i,
    addAuthListener: a,
    removeAuthListener: u,
    showAccountLinkPrompt: c,
  } = e;
  if (!N(t))
    throw new d(1766063310, "isUserAccountAvailable must be a boolean", {
      val: e,
    });
  if (!S(n)) throw new d(1766063446, "getUser must be a function", { val: e });
  try {
    qs(js(r));
  } catch (l) {
    throw new d(
      1766069791,
      "systemInfo must be a valid CrazyGamesSystemInfo object",
      { val: e },
      l
    );
  }
  if (!S(o))
    throw new d(1766063567, "getUserToken must be a function", { val: e });
  if (!S(i))
    throw new d(1766063627, "showAuthPrompt must be a function", { val: e });
  if (!S(a))
    throw new d(1766063779, "addAuthListener must be a function", { val: e });
  if (!S(u))
    throw new d(1766063825, "removeAuthListener must be a function", {
      val: e,
    });
  if (!S(c))
    throw new d(1766063893, "showAccountLinkPrompt must be a function", {
      val: e,
    });
  if (!S(s))
    throw new d(1766333434, "getXsollaUserToken must be a function", {
      val: e,
    });
}
function vc(e) {
  if (!y(e, "clear"))
    throw new d(1766269102, "DataModule must have clear property", { val: e });
  if (!y(e, "getItem"))
    throw new d(1766269105, "DataModule must have getItem property", {
      val: e,
    });
  if (!y(e, "removeItem"))
    throw new d(1766269108, "DataModule must have removeItem property", {
      val: e,
    });
  if (!y(e, "setItem"))
    throw new d(1766269111, "DataModule must have setItem property", {
      val: e,
    });
  const { clear: t, getItem: n, removeItem: r, setItem: o } = e;
  if (!S(t)) throw new d(1766269113, "clear must be a function", { val: e });
  if (!S(n)) throw new d(1766269116, "getItem must be a function", { val: e });
  if (!S(r))
    throw new d(1766269119, "removeItem must be a function", { val: e });
  if (!S(o)) throw new d(1766269121, "setItem must be a function", { val: e });
}
function Ic(e) {
  if (!ue(we)(e))
    throw new d(1766269441, "GetItemResponse must be a string or null", {
      val: e,
    });
}
function Cc(e) {
  if (!Cr(f)(e))
    throw new v(1766271441, "SetItemParams must be a Record<string, string>", {
      val: e,
    });
}
function Ac(e) {
  if (!y(e, "trackOrder"))
    throw new d(1767110555, "AnalyticsModule must have trackOrder property", {
      val: e,
    });
  const { trackOrder: t } = e;
  if (!S(t))
    throw new d(1767110568, "trackOrder must be a function", { val: e });
}
function kc(e) {
  if (!m(e))
    throw new v(1767111212, "TrackOrderParams must be a plain record", {
      val: e,
    });
  const { source: t, order: n } = e;
  if (!f(t))
    throw new v(1767111201, "source must be a non-empty string", { val: e });
  if (!m(n))
    throw new v(1767111205, "order must be a plain record", { val: e });
}
function Tc(e) {
  if (!y(e, "gameplayStart"))
    throw new d(1770983836, "GameModule must have gameplayStart property", {
      val: e,
    });
  if (!y(e, "gameplayStop"))
    throw new d(1770983838, "GameModule must have gameplayStop property", {
      val: e,
    });
  if (!y(e, "happytime"))
    throw new d(1770983840, "GameModule must have happytime property", {
      val: e,
    });
  if (!y(e, "settings"))
    throw new d(1784721458, "GameModule must have settings property", {
      val: e,
    });
  if (!y(e, "addSettingsChangeListener"))
    throw new d(
      1784721459,
      "GameModule must have addSettingsChangeListener property",
      { val: e }
    );
  if (!y(e, "removeSettingsChangeListener"))
    throw new d(
      1784721460,
      "GameModule must have removeSettingsChangeListener property",
      { val: e }
    );
  const {
    gameplayStart: t,
    gameplayStop: n,
    happytime: r,
    addSettingsChangeListener: o,
    removeSettingsChangeListener: s,
  } = e;
  if (!S(t))
    throw new d(1770983841, "gameplayStart must be a function", { val: e });
  if (!S(n))
    throw new d(1770983844, "gameplayStop must be a function", { val: e });
  if (!S(r))
    throw new d(1770983845, "happytime must be a function", { val: e });
  if (!S(o))
    throw new d(1784721461, "addSettingsChangeListener must be a function", {
      val: e,
    });
  if (!S(s))
    throw new d(1784721462, "removeSettingsChangeListener must be a function", {
      val: e,
    });
}
function Ws(e) {
  if (!y(e, "ad"))
    throw new d(1765839777, "CrazyGamesSDK must have ad property", { val: e });
  if (!y(e, "banner"))
    throw new d(1765896729, "CrazyGamesSDK must have banner property", {
      val: e,
    });
  if (!y(e, "data"))
    throw new d(1766269255, "CrazyGamesSDK must have data property", {
      val: e,
    });
  if (!y(e, "init"))
    throw new d(1766268074, "CrazyGamesSDK must have init property", {
      val: e,
    });
  if (!y(e, "user"))
    throw new d(1766063207, "CrazyGamesSDK must have user property", {
      val: e,
    });
  if (!y(e, "analytics"))
    throw new d(1767111533, "CrazyGamesSDK must have analytics property", {
      val: e,
    });
  if (!y(e, "game"))
    throw new d(1767111533, "CrazyGamesSDK must have game property", {
      val: e,
    });
  const { init: t } = e;
  if (!S(t)) throw new d(1766268041, "init must be a function", { val: e });
}
function Oc(e) {
  Ws(e);
  const { ad: t, banner: n, data: r, user: o, analytics: s, game: i } = e;
  try {
    Ql(t), tc(n), vc(r), Pc(o), Ac(s), Tc(i);
  } catch (a) {
    throw new d(1765839764, "Invalid CrazyGames SDK object", { val: e }, a);
  }
}
function Rc(e) {
  if (!at(e, "SDK"))
    throw new d(1765839825, "CrazyGames must have SDK property", { val: e });
  const { SDK: t } = e;
  try {
    Ws(t);
  } catch (n) {
    throw new d(1765839414, "Invalid CrazyGames SDK object", { val: e }, n);
  }
}
const xc = 15e3;
function Ks({ src: e, errorId: t, scriptName: n, timeoutMs: r = xc }) {
  return async () => {
    const o = new Ns(),
      s = document.createElement("script");
    (s.src = e),
      (s.type = "text/javascript"),
      (s.async = !0),
      (s.onload = () => {
        o.resolve();
      }),
      (s.onerror = (i, a, u, c, l) => {
        const h = be(l, t, `Unknown error on loading ${n}`, { src: e });
        o.reject(h);
      }),
      document.head.appendChild(s);
    try {
      await ol(
        o.promise,
        r,
        new Qe(1789022538, n, `Timed out loading ${n}`, {
          src: e,
          timeoutMs: r,
        })
      );
    } catch (i) {
      throw (s.remove(), i);
    }
  };
}
const Dc = "https://sdk.crazygames.com/crazygames-sdk-v3.js",
  kt = x("getCrazyGamesSDK"),
  Lc = Je(Ks({ src: Dc, errorId: 1765838539, scriptName: "CrazyGames SDK" }));
async function go() {
  const { CrazyGames: e } = window;
  if (!e) return;
  Rc(e);
  const { SDK: t } = e;
  return (
    await Ee({
      call: async () => t.init(),
      functionName: "init",
      responseErrorId: 1766268214,
      sdkErrorId: 1766268217,
    })(),
    Oc(t),
    t
  );
}
const T = Je(async () => {
  const e = await go();
  if (e) return kt.info("CrazyGames SDK found, returning it."), e;
  kt.info("CrazyGames SDK not found, loading it now..."),
    await Lc(),
    kt.info("... CrazyGames SDK loaded ...");
  const t = await go();
  if (!t)
    throw new d(1765840268, "CrazyGames SDK not found after loading script");
  return kt.info("... returning loaded CrazyGames SDK."), t;
});
async function Nc(e) {
  ec(e);
  const t = await T();
  return Ee({
    call: (r) =>
      new Promise((o, s) => {
        const i = { started: !1 };
        t.ad.requestAd(r, {
          adStarted: () => {
            i.started = !0;
          },
          adFinished: () => {
            (i.finished = !0), o(i);
          },
          adError: (a) => {
            s(
              Or(a)
                ? new lt(1765922468, a, { adType: e })
                : new d(1765922468, "Error while showing ad", { adType: e }, a)
            );
          },
        });
      }),
    functionName: "ad.requestAd",
    responseErrorId: 1766139384,
    sdkErrorId: 1765922501,
  })(e);
}
const $c = x("trackOrder");
function Uc(e) {
  Mc(e).catch((t) => {
    const n = be(t, 1767111302, "Unknown error in trackOrder", { params: e });
    $c.error("Error while tracking order", n.toObject());
  });
}
async function Mc(e) {
  kc(e);
  const t = await T();
  W({
    call: ({ source: r, order: o }) => {
      t.analytics.trackOrder(r, o);
    },
    functionName: "analytics.trackOrder",
    responseErrorId: 1767111651,
    sdkErrorId: 1767111654,
  })(e);
}
async function Bc(e) {
  const t = await T();
  await Ee({
    call: async (r) => {
      await t.banner.requestResponsiveBanner(r);
    },
    functionName: "banner.requestResponsiveBanner",
    responseErrorId: 1770990001,
    sdkErrorId: 1770990002,
  })(e);
}
async function Fc(e) {
  const t = await T();
  W({
    call: (r) => {
      t.banner.clearBanner(r);
    },
    functionName: "banner.clearBanner",
    responseErrorId: 1770990003,
    sdkErrorId: 1770990004,
  })(e);
}
const Gc = x("cgAPI.getItems");
async function zc(e) {
  if (!Ir(f)(e))
    throw new v(1766270194, "keys must be an array of non-empty strings", {
      keys: e,
    });
  const t = await T(),
    n = W({
      call: (s) => t.data.getItem(s),
      functionName: "data.getItem",
      responseErrorId: 1766270252,
      sdkErrorId: 1766270255,
    }),
    r = e.map((s) => {
      const i = n(s);
      return Ic(i), [s, i];
    }),
    o = Object.fromEntries(r.filter((s) => !!s[1]));
  return Gc.debug("getItems result:", { rawData: r, result: o }), o;
}
async function jc(e) {
  Cc(e);
  const t = await T(),
    n = W({
      call: ({ key: r, value: o }) => {
        t.data.setItem(r, o);
      },
      functionName: "data.setItem",
      responseErrorId: 1766270527,
      sdkErrorId: 1766270529,
    });
  Object.entries(e).forEach(([r, o]) => {
    n({ key: r, value: o });
  });
}
async function qc(e) {
  if (!S(e))
    throw new v(1766151314, "listener must be a function", { listener: e });
  const t = await T(),
    n = W({
      call: (o) => {
        t.user.addAuthListener(o);
      },
      functionName: "user.isUserAccountAvailable",
      responseErrorId: 1766151413,
      sdkErrorId: 1766151416,
    }),
    r = W({
      call: (o) => {
        t.user.removeAuthListener(o);
      },
      functionName: "user.isUserAccountAvailable",
      responseErrorId: 1766151419,
      sdkErrorId: 1766151422,
    });
  return (
    n(e),
    () => {
      r(e);
    }
  );
}
async function qt() {
  const e = await T(),
    t = W({
      call: () => e.user.systemInfo,
      functionName: "user.systemInfo",
      responseErrorId: 1766154698,
      sdkErrorId: 1766154702,
    }),
    n = js(t());
  return qs(n), n;
}
async function Hs() {
  const e = await T(),
    n = await Ee({
      call: async () => e.user.getUser(),
      functionName: "user.getUser",
      responseErrorId: 1766139370,
      sdkErrorId: 1766137285,
    })();
  if (n === null) return null;
  const r = Sc(n);
  return Vs(r), r;
}
const Vc = 50,
  Wc = 40;
async function Kc() {
  const e = await T(),
    { user: t } = e,
    { listFriends: n } = t;
  if (!S(n)) return [];
  const r = n.bind(t),
    o = Ee({
      call: async (s) => r({ page: s, size: Vc }),
      functionName: "user.listFriends",
      responseErrorId: 1781775487,
      sdkErrorId: 1781775488,
    });
  try {
    return await Xs(o, 1, []);
  } catch (s) {
    if (Rr(s) === Ne.UserNotAuthenticated) return [];
    throw s;
  }
}
async function Xs(e, t, n) {
  const r = await e(t);
  Ec(r);
  const o = n.concat(r.friends);
  return !r.hasMore || t >= Wc ? o : Xs(e, t + 1, o);
}
async function tr() {
  try {
    const e = await T(),
      n = await Ee({
        call: async () => e.user.getUserToken(),
        functionName: "user.getUserToken",
        responseErrorId: 1766139348,
        sdkErrorId: 1766137285,
      })();
    if (!f(n))
      throw new d(1766140737, "SDK response must be a non-empty string", {
        response: n,
      });
    return n;
  } catch (e) {
    if (Rr(e) === Ne.UserNotAuthenticated) return null;
    throw e;
  }
}
async function yo() {
  const e = await T(),
    n = await Ee({
      call: async () => e.user.getXsollaUserToken(),
      functionName: "user.getXsollaUserToken",
      responseErrorId: 1766333540,
      sdkErrorId: 1766333542,
    })();
  if (!f(n))
    throw new d(1766333544, "SDK response must be a non-empty string", {
      response: n,
    });
  return n;
}
async function Hc() {
  const e = await T(),
    n = W({
      call: () => e.user.isUserAccountAvailable,
      functionName: "user.isUserAccountAvailable",
      responseErrorId: 1766139333,
      sdkErrorId: 1766072453,
    })();
  if (!N(n))
    throw new d(1766139672, "SDK Response must be a boolean", { response: n });
  return n;
}
async function Xc() {
  try {
    const e = await T(),
      n = await Ee({
        call: async () => e.user.showAuthPrompt(),
        functionName: "user.showAuthPrompt",
        responseErrorId: 1766139348,
        sdkErrorId: 1766137285,
      })();
    return Vs(n), n;
  } catch (e) {
    const t = Rr(e);
    if (t === Ne.UserCancelled) return null;
    if (t === Ne.UserAlreadySignedIn) return Hs();
    throw e;
  }
}
async function Jc(e, t) {
  const n = await T();
  await Ee({
    call: async () => {
      if (!S(n.user.submitScore))
        throw new d(1770984100, "SDK user.submitScore is not available", {
          user: n.user,
        });
      n.user.submitScore({ encryptedScore: e, score: t });
    },
    functionName: "user.submitScore",
    responseErrorId: 1770984101,
    sdkErrorId: 1770984102,
  })();
}
function Yc(e) {
  if (!m(e)) return !1;
  const { disableChat: t, muteAudio: n } = e;
  return N(t) ? N(n) : !1;
}
async function Zc(e) {
  if (!S(e))
    throw new v(1784721453, "listener must be a function", { listener: e });
  const t = await T(),
    n = W({
      call: (o) => {
        t.game.addSettingsChangeListener(o);
      },
      functionName: "game.addSettingsChangeListener",
      responseErrorId: 1784721454,
      sdkErrorId: 1784721455,
    }),
    r = W({
      call: (o) => {
        t.game.removeSettingsChangeListener(o);
      },
      functionName: "game.removeSettingsChangeListener",
      responseErrorId: 1784721456,
      sdkErrorId: 1784721457,
    });
  return (
    n(e),
    () => {
      r(e);
    }
  );
}
async function Qc() {
  const e = await T(),
    n = W({
      call: () => e.game.settings,
      functionName: "game.settings",
      responseErrorId: 1784721450,
      sdkErrorId: 1784721451,
    })();
  if (!Yc(n))
    throw new d(1784721452, "Invalid game settings received from SDK", {
      settings: n,
    });
  return n;
}
async function eu() {
  const e = await T();
  W({
    call: () => {
      e.game.gameplayStart();
    },
    functionName: "game.gameplayStart",
    responseErrorId: 1770983859,
    sdkErrorId: 1770983860,
  })();
}
async function tu() {
  const e = await T();
  W({
    call: () => {
      e.game.gameplayStop();
    },
    functionName: "game.gameplayStop",
    responseErrorId: 1770983864,
    sdkErrorId: 1770983866,
  })();
}
async function nu() {
  const e = await T();
  W({
    call: () => {
      e.game.happytime();
    },
    functionName: "game.happytime",
    responseErrorId: 1770983869,
    sdkErrorId: 1770983872,
  })();
}
class D extends Qe {
  constructor(t, n, r, o) {
    super(t, "xsollaApi", n, r, o);
  }
}
class Dr extends D {
  response;
  constructor(t, n, r, o) {
    super(t, n, { ...o, httpError: r.toObject() });
    const { body: s } = r.additionalInformation ?? {};
    (this.response = this.#t(s)),
      (this.additionalInformation = {
        ...this.additionalInformation,
        xsollaApiResponse: this.response,
      });
    const { errorMessage: i } = this.response ?? {};
    f(i) && (this.message += `: ${i}`);
  }
  #t(t) {
    try {
      if (!t) return;
      if (re(t)) return t;
      if (!f(t)) return;
      const n = JSON.parse(t);
      return re(n) ? n : void 0;
    } catch {
      return;
    }
  }
}
function ru(e) {
  if (!m(e))
    throw new v(1766526740, "CreateOrderParams must be a plain record", {
      val: e,
    });
  const { xsollaProjectId: t, xsollaUserToken: n, itemSku: r, sandbox: o } = e;
  if (!f(t))
    throw new v(1766527326, "xsollaProjectId must be a non-empty string", {
      val: e,
    });
  if (!f(n))
    throw new v(1766527323, "xsollaUserToken must be a non-empty string", {
      val: e,
    });
  if (!f(r))
    throw new v(1766527303, "itemSku must be a non-empty string", { val: e });
  if (!N(o)) throw new v(1766527320, "sandbox must be a boolean", { val: e });
}
function ou(e) {
  if (!m(e))
    throw new d(1766527017, "CreateOrderResponse must be a plain record", {
      val: e,
    });
  const { order_id: t, token: n } = e;
  if (!dn(t))
    throw new d(1766527020, "order_id must be a positive integer", { val: e });
  if (!f(n))
    throw new d(1766527023, "token must be a non-empty string", { val: e });
}
function su(e) {
  if (!m(e))
    throw new v(1767112436, "GetOrderParams must be a plain record", {
      val: e,
    });
  const { xsollaProjectId: t, xsollaUserToken: n, xsollaOrderId: r } = e;
  if (!f(t))
    throw new v(1767112439, "xsollaProjectId must be a non-empty string", {
      val: e,
    });
  if (!f(n))
    throw new v(1767112442, "xsollaUserToken must be a non-empty string", {
      val: e,
    });
  if (!f(r))
    throw new v(1767112446, "xsollaOrderId must be a non-empty string", {
      val: e,
    });
}
const wo = ["new", "paid", "done", "canceled"];
function iu(e) {
  if (!Ze(wo)(e))
    throw new D(1767113465, `OrderStatus must be one of: ${wo.join(", ")}`, {
      val: e,
    });
}
function au(e) {
  if (!m(e))
    throw new D(1767112788, "GetOrderResponse must be a plain record", {
      val: e,
    });
  const { order_id: t, status: n, content: r } = e;
  if (!dn(t))
    throw new D(1767112791, "order_id must be a positive integer", { val: e });
  if (!re(r))
    throw new D(1767112802, "content must be a JSON record", { val: e });
  try {
    iu(n);
  } catch (o) {
    throw new D(1767113557, "status is invalid", { val: e }, o);
  }
}
function lu(e) {
  if (!m(e))
    throw new v(1766336344, "GetVirtualItemsParams must be a plain record", {
      val: e,
    });
  const { xsollaProjectId: t, xsollaUserToken: n, locale: r } = e;
  if (!f(t))
    throw new v(1766336375, "xsollaProjectId must be a non-empty string", {
      val: e,
    });
  if (!ue(f)(n))
    throw new v(
      1766336380,
      "xsollaUserToken must be a non-empty string or null",
      { val: e }
    );
  if (!Fs(r))
    throw new v(1766401039, "locale must be a valid language code", { val: e });
}
function cu(e) {
  if (!m(e))
    throw new D(1766399963, "XsollaPrice must be a plain record", { val: e });
  const { amount: t, currency: n, amount_without_discount: r } = e;
  if (!f(t))
    throw new D(1766400220, "amount must be a non-empty string", { val: e });
  if (!f(n))
    throw new D(1766400222, "currency must be a non-empty string", { val: e });
  if (!f(r))
    throw new D(
      1766400225,
      "amount_without_discount must be a non-empty string",
      { val: e }
    );
}
function uu(e) {
  if (!m(e))
    throw new D(1766400333, "XsollaVirtualItem must be a plain record", {
      val: e,
    });
  const {
    item_id: t,
    sku: n,
    name: r,
    description: o,
    image_url: s,
    price: i,
    can_be_bought: a,
  } = e;
  if (!V(t)) throw new D(1767103686, "item_id must be a number", { val: e });
  if (!f(n))
    throw new D(1766400331, "sku must be a non-empty string", { val: e });
  if (!ue(we)(r))
    throw new D(1766400335, "name must be a string or null", { val: e });
  if (!ue(we)(o))
    throw new D(1766400337, "description must be a string or null", { val: e });
  if (!ue(we)(s))
    throw new D(1766400338, "image_url must be a string or null", { val: e });
  if (!N(a))
    throw new D(1766400339, "can_be_bought must be a boolean", { val: e });
  if (i !== null)
    try {
      cu(i);
    } catch (u) {
      throw new D(
        1766400341,
        "price is not a valid XsollaPrice nor null",
        { val: e },
        u
      );
    }
}
function du(e) {
  if (!m(e))
    throw new d(1766400565, "GetVirtualItemsResponse must be a plain record", {
      val: e,
    });
  const { has_more: t, items: n } = e;
  if (!N(t)) throw new d(1766400566, "has_more must be a boolean", { val: e });
  if (!Te(n)) throw new d(1766400568, "items must be an array", { val: e });
  n.forEach((r, o) => {
    try {
      uu(r);
    } catch (s) {
      throw new d(
        1766400569,
        `items[${o}] is not a valid XsollaVirtualItem`,
        { val: e },
        s
      );
    }
  });
}
class ge extends Qe {
  constructor(t, n, r, o) {
    super(t, "xPayStationWidget", n, r, o);
  }
}
const Js = new B(),
  Ys = new B();
var F;
(function (e) {
  (e.Init = "init"),
    (e.Open = "open"),
    (e.Load = "load"),
    (e.Close = "close"),
    (e.Status = "status"),
    (e.StatusInvoice = "status-invoice"),
    (e.StatusDelivering = "status-delivering"),
    (e.StatusDone = "status-done"),
    (e.StatusTroubled = "status-troubled"),
    (e.UserCountry = "user-country"),
    (e.Fcp = "fcp"),
    (e.Error = "error");
})(F || (F = {}));
const bo = new Set(Object.values(F));
function hu(e) {
  if (!f(e))
    throw new v(1767036113, "XPayStationEvent must be a non-empty string", {
      val: e,
    });
  if (!bo.has(e))
    throw new v(
      1767036130,
      `Invalid XPayStationEvent: ${e}. Should be one of ${Array.from(bo).join(
        ", "
      )}`,
      { val: e }
    );
}
function fu(e) {
  if (!m(e)) return !1;
  const { email: t, invoice: n, mode: r, status: o, userId: s } = e;
  return !ue(f)(t) || !ue(V)(n) || !ue(f)(r) || !ue(f)(o) ? !1 : ue(f)(s);
}
function pu(e) {
  if (!y(e, "init"))
    throw new ge(1766524071, "XPayStationWidget must have init property", {
      val: e,
    });
  if (!y(e, "open"))
    throw new ge(1767035852, "XPayStationWidget must have open property", {
      val: e,
    });
  if (!y(e, "on"))
    throw new ge(1767035854, "XPayStationWidget must have on property", {
      val: e,
    });
  if (!y(e, "off"))
    throw new ge(1767035857, "XPayStationWidget must have off property", {
      val: e,
    });
  const { init: t, open: n, on: r, off: o } = e;
  if (!S(t)) throw new ge(1766524108, "init must be a function", { val: e });
  if (!S(n)) throw new ge(1767035888, "open must be a function", { val: e });
  if (!S(r)) throw new ge(1767035893, "on must be a function", { val: e });
  if (!S(o)) throw new ge(1767035899, "off must be a function", { val: e });
}
const mu =
    "https://cdn.xsolla.net/payments-bucket-prod/embed/1.5.3/widget.min.js",
  Tt = x("getXPayStationWidget"),
  gu = Je(
    Ks({ src: mu, errorId: 1766524755, scriptName: "XPayStationWidget" })
  );
async function _o() {
  const { XPayStationWidget: e } = window;
  if (e) return pu(e), e;
}
const yu = Je(async () => {
  const e = await _o();
  if (e) return Tt.info("XPayStationWidget found, returning it."), e;
  Tt.info("XPayStationWidget not found, loading it now..."),
    await gu(),
    Tt.info("... XPayStationWidget loaded ...");
  const t = await _o();
  if (!t)
    throw new ge(
      1766524861,
      "XPayStationWidget not found after loading script"
    );
  return Tt.info("... returning loaded XPayStationWidget."), t;
});
function wu(e, t, n) {
  const r = new Map(
    Object.entries(t).map(([o, s]) => {
      if ((hu(o), !S(s)))
        throw new v(1767036280, `Handler for event ${o} is not a function`, {
          event: o,
          handler: s,
        });
      return [o, s];
    })
  );
  return (
    r.forEach((o, s) => {
      e.on(s, o);
    }),
    n.debug("Event handlers connected", { handlers: r.size }),
    () => {
      r.forEach((o, s) => {
        e.off(s, o);
      }),
        n.debug("Event handlers disconnected", { handlers: r.size });
    }
  );
}
let Pn = !1;
async function bu(e) {
  const { log: t } = e;
  try {
    if (Pn) throw new ke(1767039625, "Payment is already in progress");
    return (Pn = !0), await _u(e);
  } catch (n) {
    const r = be(n, 1767039517, "Unknown error on handling payment");
    throw (t.error("Payment handling failed", r.toObject()), r);
  } finally {
    Pn = !1;
  }
}
function _u({ widget: e, token: t, sandbox: n, log: r }) {
  const o = new Ns();
  try {
    const s = { success: !1 },
      i = Ys.on(() => {
        r.debug("Payment done event received"), o.resolve(s);
      }),
      a = Js.on((u) => {
        r.debug("Payment status change event received", { paymentInfo: u });
        const { email: c, invoice: l, mode: h, status: g, userId: w } = u;
        if (h !== "payment" || g !== "done") {
          r.info("Payment status change but not done yet", { paymentInfo: u });
          return;
        }
        (s.success = !0),
          (s.email = c || void 0),
          (s.invoice = l || void 0),
          (s.userId = w || void 0),
          r.info("Payment done.", { paymentInfo: u, response: s });
      });
    return (
      o.promise
        .catch(() => {})
        .finally(() => {
          r.debug("Cleaning up payment event handlers"), i(), a();
        }),
      e.init({
        access_token: t,
        sandbox: n,
        iframeOnly: !0,
        lightbox: { closeByClick: !1, closeByKeyboard: !1 },
      }),
      e.open(),
      o.promise
    );
  } catch (s) {
    const i = be(s, 1767040070, "Unknown error during payment execution");
    return o.reject(i), o.promise;
  }
}
function Su(e) {
  return e === void 0;
}
function G(e) {
  return (t) => (Su(t) ? !0 : e(t));
}
function gt(e) {
  return Array.isArray(e);
}
function yt(e, t) {
  return (n) => !(!gt(n) || n.some((r) => !e(r)));
}
function Lr(e) {
  return typeof e == "boolean";
}
function Eu(e) {
  return Number.isNaN(e);
}
function wt(e) {
  return typeof e == "number" && !Eu(e);
}
function Zs(e) {
  return e !== null && typeof e == "object";
}
function oe(e, t) {
  const n = Zs(e) && !gt(e) && Pu(e);
  return !n || !t
    ? n
    : Object.getPrototypeOf(e) === Object.prototype &&
        Object.getOwnPropertySymbols(e).length === 0;
}
function Pu(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function $e(e, t, n = !1) {
  return (r) => !(!oe(r, n) || Object.values(r).some((s) => !e(s)));
}
function $(e) {
  return typeof e == "string";
}
const So = 40;
function bt(e) {
  return nr(e, 1);
}
function nr(e, t) {
  if (t > So)
    throw new Error(`Could not validate JSON due to its depth > ${So}`);
  return e === 1 / 0 || e === -1 / 0
    ? !1
    : $(e) ||
        wt(e) ||
        Lr(e) ||
        e === null ||
        $e((n) => nr(n, t + 1), void 0, !0)(e) ||
        yt((n) => nr(n, t + 1))(e);
}
function vu(e) {
  return $e(bt, void 0, !0)(e);
}
function Iu(e) {
  if (!oe(e, !0)) return !1;
  const { public: t } = e;
  return G(vu)(t);
}
function Ue(e) {
  return $(e) && !!e.trim();
}
function Qs(e, t, n) {
  return t(e) && e >= n;
}
function Cu(e) {
  return wt(e) && e % 1 === 0;
}
function Au(e, t) {
  return Qs(e, Cu, t);
}
function _e(e) {
  return Au(e, 1);
}
const ku = [
  "constructor",
  "toString",
  "toLocaleString",
  "valueOf",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
];
function ei(e) {
  return ku.includes(e);
}
function fn(e) {
  return e == null;
}
function ti(e, t, ...n) {
  return fn(e)
    ? !1
    : (n.push(t),
      n.every((r) => !ei(r) && Object.prototype.hasOwnProperty.call(e, r)));
}
function ct(e) {
  return typeof e == "function";
}
function ni(e, t, ...n) {
  return fn(e) || !Zs(e) ? !1 : (n.push(t), n.every((r) => ei(r) || r in e));
}
function Tu(e) {
  return e instanceof Date;
}
const Ou = [
  /\s/,
  /\/\/\d+$/,
  /\/\/\W/,
  /\/\/.+\.\//,
  /\/\/\d{1,3}(\.\d{1,3}){0,2}(\/|$)/,
  /-[.-].*($|\/)/,
];
function Ru(e) {
  if (!Ue(e)) return !1;
  try {
    return new URL(e), !Ou.some((t) => t.test(e));
  } catch {
    return !1;
  }
}
function Vt(e) {
  return wt(e) || $(e) || Lr(e) || Tu(e);
}
function xu(e) {
  return (t) => e.includes(t);
}
function Du(e) {
  return $e(bt)(e) ? !0 : oe(e) ? ri(e) : !1;
}
function ri(e) {
  return oe(e) || gt(e)
    ? !Object.values(e).some((t) => !ri(t))
    : fn(e) || Vt(e);
}
const Lu = /^[/\w./]/,
  Nu = [/\s/, /\/\/+/];
function $u(e) {
  if (!Ue(e)) return !1;
  const t = e.startsWith("//"),
    n = t ? `http:${e}` : e;
  return Ru(n) ? !0 : !(t || !Lu.test(n) || Nu.some((r) => r.test(e)));
}
const Uu = [
    "DbTimeoutError",
    "EnvironmentError",
    "ForbiddenError",
    "HealthCheckError",
    "HttpError",
    "InternalError",
    "InternalParameterError",
    "InvalidConfigurationError",
    "InvalidGraphQlError",
    "InvalidOperationError",
    "InvalidParameterError",
    "NotAuthorizedError",
    "NotFoundError",
    "NotSupportedError",
    "RequestTimeoutError",
    "ThirdPartyError",
    "UnknownError",
  ],
  oi = xu(Uu);
function Mu(e) {
  if (
    !ni(
      e,
      "message",
      "code",
      "id",
      "timestamp",
      "stack",
      "additionalInformation",
      "parentError"
    )
  )
    return !1;
  const {
    message: t,
    code: n,
    id: r,
    timestamp: o,
    stack: s,
    additionalInformation: i,
  } = e;
  return !Ue(t) || !Ue(n) || !_e(r) || !_e(o) || !G($)(s) ? !1 : G(Iu)(i);
}
let ee = class extends Error {
  timestamp;
  code;
  id;
  additionalInformation;
  parentError;
  warn;
  constructor(t, n, r, o, s, i = !1, a = !1) {
    super(r),
      (this.timestamp = Date.now()),
      (this.id = wt(n) ? n : 1647962470),
      (this.code = oi(t) ? t : "UnknownError"),
      (this.additionalInformation = o),
      (this.parentError = s),
      i && (this.stack = void 0),
      (this.warn = a);
  }
  toErrorResponse() {
    const t = rr(this),
      {
        message: n,
        code: r,
        id: o,
        additionalInformation: s,
        timestamp: i,
      } = t;
    return {
      message: n,
      code: r,
      id: o,
      ...(s?.public ? { additionalInformation: s.public } : {}),
      timestamp: i,
    };
  }
  toObject() {
    return rr(this);
  }
  toString() {
    return JSON.stringify(this.toObject(), null, "  ");
  }
  valueOf() {
    return this.toObject();
  }
  [Symbol.toPrimitive](t) {
    return t === "number" ? NaN : this.toString();
  }
};
function Bu(e) {
  if (e)
    return String(e)
      .split(
        `
`
      )
      .map((t) => t.trim())
      .slice(1);
}
function Fu(e) {
  const { message: t } = e || {};
  return Ue(t) ? t : Ue(e) ? e : Gu(e);
}
const Eo = "BaseError handling issue: Error was not serializable";
function Gu(e) {
  try {
    const t = JSON.stringify(e);
    return $(t) ? t : Eo;
  } catch {
    return Eo;
  }
}
function rr(e, t = 1) {
  const n = { message: Fu(e) };
  return e instanceof Error
    ? (e.stack && (n.stack = Bu(e.stack)),
      Mu(e)
        ? ((n.code = e.code),
          (n.id = e.id),
          (n.timestamp = e.timestamp),
          e.additionalInformation &&
            (n.additionalInformation = e.additionalInformation),
          e.parentError &&
            (n.parentError =
              t <= 10
                ? rr(e.parentError, t + 1)
                : {
                    message:
                      "Truncated further parent errors due to reaching max depth",
                  }),
          n)
        : (ni(e, "code") &&
            (n.code = `ExternalCode: ${JSON.stringify(e.code)}`),
          n))
    : n;
}
class zu extends ee {
  constructor(t, n, r, o, s) {
    super(t, n, r, o, s, !0);
  }
  [Symbol.toStringTag] = "ApiResponseError";
}
class ju extends ee {
  constructor(t, n, r, o) {
    super("EnvironmentError", t, n, r, o, !0);
  }
  [Symbol.toStringTag] = "EnvironmentError";
}
class Po extends ee {
  constructor(t, n, r, o, s, i) {
    super(
      "HttpError",
      t,
      n,
      {
        method: r,
        url: o,
        ...(s ? { status: s } : {}),
        ...(i ? { body: i } : {}),
      },
      void 0,
      !0
    );
  }
  [Symbol.toStringTag] = "HttpError";
}
class ne extends ee {
  constructor(t, n, r, o) {
    super("InternalError", t, n, r, o);
  }
  [Symbol.toStringTag] = "InternalError";
}
let qu = class extends ee {
  constructor(t, n, r, o) {
    super("InternalParameterError", t, n, r, o, !0);
  }
  [Symbol.toStringTag] = "InternalParameterError";
};
class Vu extends ee {
  constructor(t, n, r, o) {
    super("InvalidConfigurationError", t, n, r, o);
  }
  [Symbol.toStringTag] = "InvalidConfigurationError";
}
let A = class extends ee {
  constructor(t, n, r, o) {
    super("InvalidParameterError", t, n, r, o, !0, !0);
  }
  [Symbol.toStringTag] = "InvalidParameterError";
};
class Wu extends ee {
  constructor(t, n, r, o) {
    super("NotSupportedError", t, n, r, o, !0, !0);
  }
  [Symbol.toStringTag] = "NotSupportedError";
}
class pn extends ee {
  constructor(t, n, r, o, s) {
    super("ThirdPartyError", t, r, { ...(o || {}), apiName: n }, s, !0);
  }
  [Symbol.toStringTag] = "ThirdPartyError";
}
function Ku(e, t) {
  if (!t) return e;
  const n = [];
  return (
    Object.entries(t).forEach(([r, o]) => {
      if (o === void 0) return;
      const s = vn(r);
      gt(o)
        ? o.forEach((i) => {
            n.push(`${s}[]=${vn(i)}`);
          })
        : n.push(`${s}=${vn(o)}`);
    }),
    n.length ? `${e}?${n.join("&")}` : e
  );
}
function vn(e) {
  return encodeURIComponent(String(e));
}
async function Hu(e, t) {
  let n;
  if (e.headers.has("Content-Length")) {
    if (((n = Number(e.headers.get("Content-Length"))), Number.isNaN(n)))
      throw new ne(1725882448, "Content-Length is NaN");
  } else
    try {
      n = (await e.clone().arrayBuffer()).byteLength;
    } catch (r) {
      throw new ne(1725882368, "Failed to calculate content length", void 0, r);
    }
  if (n > t) throw new Vu(1725276055, `maxContentLength size of ${t} exceeded`);
  return n;
}
function Xu(e) {
  if (!oe(e)) return !1;
  const { bearer: t } = e;
  return $(t);
}
function Ju(e) {
  if (!oe(e)) return !1;
  const { username: t, password: n } = e;
  return $(t) && $(n);
}
function Yu(e) {
  return $(e) || Xu(e) ? !0 : Ju(e);
}
function Zu(e) {
  return e === void 0 || bt(e);
}
function Qu(e) {
  return e instanceof URLSearchParams || e instanceof FormData ? !0 : Zu(e);
}
var se;
(function (e) {
  (e.Options = "OPTIONS"),
    (e.Get = "GET"),
    (e.Head = "HEAD"),
    (e.Post = "POST"),
    (e.Put = "PUT"),
    (e.Delete = "DELETE"),
    (e.Patch = "PATCH");
})(se || (se = {}));
const ed = new Set(Object.values(se));
function td(e) {
  return ed.has(e);
}
function nd(e) {
  return $e((t) => (G(Vt)(t) || yt(Vt)(t) ? !0 : $e(Vt)(t)))(e);
}
function rd(e) {
  return !(!$e($)(e) || !yt(od)(Object.keys(e)) || "content-type" in e);
}
function od(e) {
  return $(e) && e === e.toLowerCase();
}
var de;
(function (e) {
  (e.ArrayBuffer = "arraybuffer"),
    (e.Document = "document"),
    (e.Json = "json"),
    (e.Text = "text"),
    (e.Stream = "stream");
})(de || (de = {}));
const sd = new Set(Object.values(de));
function id(e) {
  return sd.has(e);
}
function ad(e) {
  if (!e) return;
  if (!oe(e))
    throw new A(1732800134, "Retry options must be a plain object if provided");
  const { maxAttempts: t, shouldRetry: n, delayInMs: r } = e;
  if (!_e(t)) throw new A(1732800201, "maxAttempts must be a positive integer");
  if (!ct(n)) throw new A(1732801020, "shouldRetry must be a function");
  if (!_e(r) && !ct(r))
    throw new A(
      1732801063,
      "delayInMs must be a positive integer or a function"
    );
}
function ld(e) {
  if (!e) throw new A(1673977448, "Parameters must be provided");
  if (!oe(e))
    throw new A(1673977504, "Parameters must be a record with strings as keys");
  const {
    method: t,
    uri: n,
    params: r,
    headers: o,
    timeout: s,
    withCredentials: i,
    auth: a,
    responseType: u,
    maxContentLength: c,
    maxBodyLength: l,
    responseTypeGuard: h,
    body: g,
    retry: w,
  } = e;
  if (!td(t))
    throw new A(
      1673977683,
      `Method must be in Method enumeration (${Object.values(se).join(", ")})`
    );
  if (!$u(n))
    throw new A(1673977774, "Uri must be a string of a valid uri", { uri: n });
  if (!G(nd)(r))
    throw new A(
      1673977781,
      "Params must be an object as defined by the Params type if provided"
    );
  if (!G(rd)(o))
    throw new A(
      1673977880,
      "Headers must be a object of string keys and string values if provided"
    );
  if (!G(_e)(s))
    throw new A(1673977922, "Timeout must be a positive integer if provided");
  if (!G(Lr)(i))
    throw new A(1673977970, "WithCredentials must be a boolean if provided");
  if (!G(Yu)(a))
    throw new A(1673977998, "Auth must be of Auth type if provided");
  if (!G(id)(u))
    throw new A(
      1673978039,
      `ResponseType must be in ResponseType enumeration (${Object.values(
        de
      ).join(", ")}) if provided`
    );
  if (!G(_e)(c))
    throw new A(
      1673978301,
      "maxContentLength must be a positive integer if provided"
    );
  if (!G(_e)(l))
    throw new A(
      1673978327,
      "maxBodyLength must be a positive integer if provided"
    );
  if (!G(ct)(h))
    throw new A(
      1673978352,
      "ResponseTypeGuard must be a TypeGuard function if provided"
    );
  if (!G(Qu)(g))
    throw new A(1673978391, "Body must be of RequestBody type if provided");
  ad(w);
}
function cd(e) {
  if (!oe(e)) return !1;
  const { "set-cookie": t, ...n } = e;
  return $e($)(n) ? (t === void 0 ? !0 : yt($)(t)) : !1;
}
const ud = de.Json,
  dd = 1 / 0,
  hd = 1 / 0,
  si = "utf8",
  fd = !1;
async function pd(e, t, n = si) {
  let r;
  switch (t) {
    case de.Json:
      r = await e.json();
      break;
    case de.Text:
      if (n.toLowerCase() !== "utf8") {
        const o = await e.arrayBuffer();
        r = new TextDecoder(n).decode(o);
      } else r = await e.text();
      break;
    case de.ArrayBuffer:
      r = await e.arrayBuffer();
      break;
    case de.Document: {
      if (typeof DOMParser > "u")
        throw new ju(
          1770742362,
          "DOMParser is not available in this environment"
        );
      const o = e.headers.get("content-type");
      if (!o)
        throw new ne(
          1770742262,
          "Missing content-type header for document response"
        );
      if (o.includes("text/html"))
        r = new DOMParser().parseFromString(await e.text(), "text/html");
      else if (o.includes("application/xml"))
        r = new DOMParser().parseFromString(await e.text(), "application/xml");
      else
        throw new ne(1725877373, "Unsupported document type", {
          responseType: t,
          responseEncoding: n,
        });
      break;
    }
    case de.Stream:
      r = e.body;
      break;
    default:
      throw new ne(1725877462, "Unsupported responseType", {
        responseType: t,
        responseEncoding: n,
      });
  }
  return r;
}
function md() {
  return async (e) => gd(e);
}
async function gd(e) {
  const {
      method: t,
      uri: n,
      withCredentials: r,
      data: o,
      headers: s,
      params: i,
      maxBodyLength: a,
      maxContentLength: u,
      auth: c,
      timeout: l,
      responseType: h,
      responseEncoding: g,
    } = e,
    w = a === 1 / 0 ? null : a,
    _ = { method: t, credentials: r ? "include" : "same-origin" },
    { "content-type": ie, ...pe } = s || {};
  if (ie !== void 0)
    throw new A(
      1736867445,
      "You can not set content-type header. It will be determined automatically by request body."
    );
  if (o) {
    let ae = 0;
    if (o instanceof FormData) {
      if (((_.body = o), w !== null))
        throw new Wu(
          1736935984,
          '"maxBodyLength" is not supported for FormData.'
        );
    } else if (o instanceof URLSearchParams)
      (pe["content-type"] = "application/x-www-form-urlencoded"),
        (_.body = o),
        (ae = new Blob([o.toString()]).size);
    else if (bt(o))
      (pe["content-type"] = "application/json"),
        (_.body = JSON.stringify(o)),
        (ae = new Blob([_.body]).size);
    else throw new A(1736936384, "Unsupported body type.");
    if (w !== null && ae > w)
      throw new A(
        1725274844,
        `Request body exceeds the maximum length of ${w} bytes.`,
        { size: ae }
      );
  }
  if (c) {
    if (ti(pe, "authorization"))
      throw new A(
        1736867910,
        "You can not set authorization header and auth option at the same time."
      );
    pe.authorization = yd(c);
  }
  _.headers = pe;
  const Pt = new AbortController(),
    vt = l
      ? setTimeout(() => {
          Pt.abort();
        }, l)
      : void 0,
    tt = Ku(n, i),
    Be = { method: t, responseURL: tt };
  let me;
  try {
    me = await fetch(tt, { ..._, signal: Pt.signal });
  } catch (ae) {
    throw new Ve(1732882329, String(ae), Be);
  } finally {
    vt && clearTimeout(vt);
  }
  const nt = { status: me.status, headers: new wd(me.headers), data: void 0 };
  let Wr;
  try {
    Wr = await Hu(me, u);
  } catch (ae) {
    throw new Ve(
      1725381336,
      "Wrong content length. See parent error.",
      Be,
      nt,
      {
        method: t,
        uri: n,
        status: me.status,
        responseType: h,
        responseEncoding: g,
      },
      ae
    );
  }
  let Kr;
  if (Wr > 0)
    try {
      (Kr = await pd(me, h, g)), (nt.data = Kr);
    } catch (ae) {
      throw new Ve(
        1724951571,
        "Failed to parse response body",
        Be,
        nt,
        {
          method: t,
          uri: n,
          status: me.status,
          responseType: h,
          responseEncoding: g,
        },
        ae
      );
    }
  if (!me.ok) throw new Ve(1732882343, me.statusText, Be, nt);
  return nt;
}
function yd(e) {
  return $(e)
    ? e
    : "bearer" in e
    ? `Bearer ${e.bearer}`
    : `Basic ${btoa(`${e.username}:${e.password}`)}`;
}
class Ve extends ee {
  request;
  response;
  constructor(t, n, r, o, s, i) {
    super("InternalError", t, n, s, i), (this.request = r), (this.response = o);
  }
  [Symbol.toStringTag] = "QueryError";
}
class wd {
  #t;
  constructor(t) {
    this.#t = t;
  }
  toJSON() {
    const t = {},
      n = [];
    return (
      this.#t.forEach((r, o) => {
        o === "set-cookie" ? n.push(r) : Ue(o) && (t[o] = r);
      }),
      n.length && (t["set-cookie"] = n),
      t
    );
  }
}
function bd(e) {
  if (!oe(e)) return !1;
  const { message: t, code: n, id: r, additionalInformation: o } = e;
  return !$(t) || !oi(n) || !_e(r) ? !1 : G(oe)(o);
}
function _d(e) {
  return !!(e === void 0 || $(e) || Du(e));
}
function Sd(e) {
  if (!e) throw new ne(1670289518, "No error provided to cast");
  if (e instanceof Ve) {
    const { response: t, request: n } = e;
    if (n && t) {
      const { data: r, status: o } = t;
      if (bd(r)) {
        const { message: s, code: i, id: a, additionalInformation: u } = r;
        return new zu(i, a, s, u);
      }
      return new Po(
        1673336622,
        "Unknown error response from server",
        n.method,
        n.responseURL,
        o,
        _d(r) ? r : void 0
      );
    }
    return n
      ? new Po(
          1673336612,
          ti(e, "message") ? String(e.message) : String(e),
          n.method,
          n.responseURL
        )
      : new ne(
          1673336605,
          "Error before request was send to server. See parent error.",
          void 0,
          e
        );
  }
  return e instanceof ee
    ? e
    : new ne(1732885670, "Unknown error received", void 0, e);
}
function Ed({ uri: e, typeGuard: t, body: n }) {
  if (!ct(t))
    throw new qu(
      1673336228,
      "Invalid typeGuard guard provided. Should have been found before."
    );
  if (!t(n))
    throw new pn(
      1671473513,
      e,
      '"responseTypeGuard" caught invalid response body.',
      { body: n }
    );
  return n;
}
function Pd(e) {
  const t = vd(e);
  if (!cd(t))
    throw new pn(1674082498, "query", "Headers did not fit ResponseHeaders", {
      rawHeaders: t,
    });
  return t;
}
function vd(e) {
  try {
    return Id(e.toJSON());
  } catch (t) {
    throw new pn(
      1674081173,
      "query",
      "Failed to cast headers",
      { headers: e },
      t
    );
  }
}
function Id(e) {
  return Object.entries(e).reduce((t, [n, r]) => {
    if (fn(r)) return t;
    if (gt(r)) {
      if (!yt($)(r))
        throw new ne(
          1674746579,
          "Received an array as header values consisting of something else but strings"
        );
      return { ...t, [n]: r };
    }
    return { ...t, [n]: String(r) };
  }, {});
}
function Cd(e, t) {
  if (!Qs(e, wt, 0)) {
    const o = Promise.reject(
      new A(1700561713, 'Provided "ms" value should be a positive number', {
        ms: e,
      })
    );
    return (o.cancel = () => {}), o;
  }
  let n;
  const r = new Promise((o, s) => {
    n = setTimeout(() => {
      t instanceof Error ? s(t) : o(t);
    }, e);
  });
  return (
    (r.cancel = () => {
      n && (clearTimeout(n), (n = void 0));
    }),
    r
  );
}
class rt extends ee {
  queryResponse;
  constructor(t, n, r) {
    super("InternalError", t, n), (this.queryResponse = r);
  }
  [Symbol.toStringTag] = "RetryError";
}
function Ad(e, t) {
  return async (n) => ii(e, n, t, 1);
}
async function ii(e, t, { maxAttempts: n, shouldRetry: r, delayInMs: o }, s) {
  try {
    const i = await e(t),
      { data: a, status: u, headers: c } = i;
    if (r(u, c, a)) throw new rt(1732887319, "Should be retried", i);
    return i;
  } catch (i) {
    const a = { method: t.method, uri: t.uri };
    if (n <= s) {
      i instanceof rt && (a.queryResponse = i.queryResponse);
      const l = i instanceof rt ? void 0 : i;
      throw new ne(1732887696, "Max retries reached", a, l);
    }
    if (!(i instanceof rt) && !(i instanceof Ve))
      throw new ne(
        1732888673,
        "Could not retry because received an unknown error",
        a,
        i
      );
    if (!(i instanceof rt ? !0 : kd({ error: i, shouldRetry: r }))) throw i;
    const c = ct(o) ? o(s) : o;
    return (
      await Cd(c),
      ii(e, t, { maxAttempts: n, shouldRetry: r, delayInMs: o }, s + 1)
    );
  }
}
function kd({ error: e, shouldRetry: t }) {
  const { response: n } = e;
  if (!n) return !1;
  const { status: r, headers: o, data: s } = n,
    i = bt(s) ? s : void 0;
  return t(r, o, i);
}
async function Td(e) {
  try {
    ld(e);
    const {
        method: t,
        uri: n,
        headers: r,
        params: o,
        body: s,
        auth: i,
        timeout: a,
        withCredentials: u = fd,
        responseType: c = ud,
        maxContentLength: l = dd,
        maxBodyLength: h = hd,
        responseTypeGuard: g,
        retry: w,
      } = e,
      _ = md(),
      ie = w ? Ad(_, w) : _,
      {
        status: pe,
        headers: Pt,
        data: vt,
      } = await ie({
        method: t,
        uri: n,
        headers: r,
        params: o,
        data: s,
        timeout: a,
        withCredentials: u,
        auth: i,
        maxContentLength: l,
        maxBodyLength: h,
        responseType: c,
        responseEncoding: si,
      });
    if (!_e(pe))
      throw new pn(
        1674086343,
        "query",
        "Response status was not a positive-integer"
      );
    const tt = { status: pe, headers: Pd(Pt) };
    if (!g) return tt;
    const Be = Ed({ uri: n, typeGuard: g, body: vt });
    return { ...tt, body: Be };
  } catch (t) {
    throw Sd(t);
  }
}
async function Me(e) {
  const { responseTypeGuard: t } = e,
    { body: n } = await Td(e);
  return t ? n : void 0;
}
async function Od(e) {
  try {
    ru(e);
    const {
        xsollaProjectId: t,
        xsollaUserToken: n,
        itemSku: r,
        sandbox: o,
      } = e,
      s = await Me({
        method: se.Post,
        uri: `https://store.xsolla.com/api/v2/project/${encodeURIComponent(
          t
        )}/payment/item/${encodeURIComponent(r)}`,
        auth: { bearer: n },
        body: { sandbox: o, quantity: 1 },
        responseTypeGuard: re,
      });
    return ou(s), s;
  } catch (t) {
    throw t instanceof Tr
      ? new Dr(1766579835, "Failed to create Xsolla order", t, { params: e })
      : t;
  }
}
async function Rd(e) {
  try {
    su(e);
    const { xsollaProjectId: t, xsollaUserToken: n, xsollaOrderId: r } = e,
      o = await Me({
        method: se.Get,
        uri: `https://store.xsolla.com/api/v2/project/${encodeURIComponent(
          t
        )}/order/${encodeURIComponent(r)}`,
        auth: { bearer: n },
        responseTypeGuard: re,
      });
    return au(o), o;
  } catch (t) {
    throw t instanceof Tr
      ? new Dr(1766579835, "Failed to get Xsolla order", t, { params: e })
      : t;
  }
}
const vo = 50;
async function xd(e) {
  return lu(e), ai(e, { offset: 0, accumulation: [] });
}
async function ai(e, { offset: t, accumulation: n }) {
  try {
    const { xsollaProjectId: r, xsollaUserToken: o, locale: s } = e,
      i = await Me({
        method: se.Get,
        uri: `https://store.xsolla.com/api/v2/project/${encodeURIComponent(
          r
        )}/items/virtual_items`,
        params: { limit: vo, offset: t, locale: s },
        responseTypeGuard: re,
        ...(o ? { auth: { bearer: o } } : {}),
      });
    du(i);
    const { has_more: a, items: u } = i,
      c = n.concat(u);
    return a ? ai(e, { offset: t + vo, accumulation: c }) : c;
  } catch (r) {
    throw r instanceof Tr
      ? new Dr(1766579990, "Failed to get Xsolla virtual items", r, {
          params: e,
        })
      : r;
  }
}
class Se extends Qe {
  constructor(t, n, r, o) {
    super(t, "crazyGamesPortal", n, r, o);
  }
}
const Dd = "https://userportal.crazygames.com/en_US/graph",
  Ld = "https://images.crazygames.com/";
async function Nr(e, t, n = Dd) {
  const r = await Me({
    method: se.Post,
    uri: n,
    body: { query: e, variables: t },
    responseTypeGuard: re,
  });
  if (Te(r.errors) && r.errors.length > 0) {
    const o = r.errors.map(Nd).filter(f);
    throw new Se(
      1790068502,
      `portal query failed${o.length ? `: ${o.join(", ")}` : ""}`,
      { variables: t, errors: r.errors, codes: o }
    );
  }
  if (!m(r.data))
    throw new Se(1790068503, "portal response has no data", {
      variables: t,
      response: r,
    });
  return r.data;
}
function Nd(e) {
  if (!m(e)) return null;
  const { extensions: t, message: n } = e;
  return m(t) && f(t.code) ? t.code : f(n) ? n : null;
}
function li(e) {
  return f(e) ? new URL(e, Ld).href : null;
}
function or(e) {
  return f(e) ? e : null;
}
function Ot(e) {
  return V(e) ? e : null;
}
function $d(e) {
  if (!Te(e))
    throw new Se(1790068504, "leaderboard must be an array", { val: e });
  return e.map(Ud);
}
function Ud(e) {
  if (!m(e) || !m(e.user))
    throw new Se(1790068505, "leaderboard row must be a record with a user", {
      val: e,
    });
  const { user: t, score: n, userRank: r } = e;
  if (!f(t.id) || !f(t.username))
    throw new Se(1790068506, "leaderboard row user must have id and username", {
      val: e,
    });
  const o = Number(n);
  if (!Number.isFinite(o) || !V(r))
    throw new Se(
      1790068507,
      "leaderboard row must have numeric score and userRank",
      { val: e }
    );
  return {
    user: {
      id: t.id,
      username: t.username,
      avatar: li(t.avatar),
      countryCode: or(t.countryCode),
    },
    score: o,
    userRank: r,
  };
}
const Md = `
  query GlobalLeaderboard($gameId: String!, $limit: Int!, $isPreview: Boolean) {
    globalLeaderboard(gameId: $gameId, limit: $limit, isPreview: $isPreview) {
      user { id username avatar countryCode }
      score
      userRank
    }
  }
`,
  Bd = 30;
async function Fd(e, t) {
  if (!f(e))
    throw new v(1790068501, "gameId must be a non-empty string", { gameId: e });
  const n = await Nr(Md, { gameId: e, limit: Bd, isPreview: !1 }, t);
  return $d(n.globalLeaderboard);
}
const Gd = `
  query PublicUserScore($id: String!, $gameIds: [String!]!) {
    user(id: $id) {
      id
      username
      profile { avatar countryCode }
      currentSeasonScoresForGames(gameIds: $gameIds) {
        gameId
        score
        seasonId
        overallRank
        countryRank
        friendsRank
        scoreForNextBadge
      }
    }
  }
`;
async function zd(e, t, n) {
  if (!f(e))
    throw new v(1790068508, "gameId must be a non-empty string", { gameId: e });
  if (!f(t))
    throw new v(1790068509, "userId must be a non-empty string", { userId: t });
  const r = await Nr(Gd, { id: t, gameIds: [e] }, n),
    { user: o } = r;
  if (!m(o) || !f(o.id) || !f(o.username))
    throw new Se(1790068510, "user must be a record with id and username", {
      userId: t,
      data: r,
    });
  const i = (
    Te(o.currentSeasonScoresForGames) ? o.currentSeasonScoresForGames : []
  ).find((c) => m(c) && c.gameId === e);
  if (!m(i)) return null;
  const a = Number(i.score ?? NaN);
  if (!Number.isFinite(a)) return null;
  const u = m(o.profile) ? o.profile : {};
  return {
    user: {
      id: o.id,
      username: o.username,
      avatar: li(u.avatar),
      countryCode: or(u.countryCode),
    },
    score: a,
    seasonId: or(i.seasonId),
    overallRank: Ot(i.overallRank),
    countryRank: Ot(i.countryRank),
    friendsRank: Ot(i.friendsRank),
    scoreForNextBadge: Ot(i.scoreForNextBadge),
  };
}
const jd = `
  query LeaderboardInfo($gameId: String!) {
    currentLeaderboardSeason(gameId: $gameId) {
      startDate
      endDate
    }
    totalPlayers(gameId: $gameId)
  }
`;
async function qd(e, t) {
  if (!f(e))
    throw new v(1790068513, "gameId must be a non-empty string", { gameId: e });
  const n = await Nr(jd, { gameId: e }, t),
    r = n.currentLeaderboardSeason;
  if (r === null) return null;
  if (!m(r) || !f(r.startDate) || !f(r.endDate))
    throw new Se(
      1790068514,
      "currentLeaderboardSeason must have startDate and endDate",
      { data: n }
    );
  const o = new Date(r.startDate),
    s = new Date(r.endDate);
  if (Number.isNaN(o.getTime()) || Number.isNaN(s.getTime()))
    throw new Se(1790068515, "season dates must be parseable", { data: n });
  return {
    startDate: o,
    endDate: s,
    totalPlayers: V(n.totalPlayers) ? n.totalPlayers : 0,
  };
}
class $r extends Qe {
  constructor(t, n, r, o) {
    super(t, "weeklyLeaderboard", n, r, o);
  }
}
const Vd = "https://sg-cg-leaderboards-293659511006.europe-west1.run.app/v1",
  Ur = { maxAttempts: 3, shouldRetry: (e) => e === 503, delayInMs: 2e3 };
async function Wd(e, t, n, r) {
  const o = await Me({
    method: se.Post,
    uri: `${Mr(e)}/scores`,
    params: { radius: "0" },
    headers: { authorization: `Bearer ${t}` },
    body: { score: Math.floor(n), countryCode: r },
    retry: Ur,
    responseTypeGuard: re,
  });
  if (!V(o.rank) || !V(o.score) || typeof o.improved != "boolean")
    throw new $r(
      1790160001,
      "submit response must have rank, score and improved",
      { response: o }
    );
  return { ...Br(o), rank: o.rank, score: o.score, improved: o.improved };
}
async function Kd(e, t, n, r, o) {
  const s = await Me({
      method: se.Get,
      uri: `${Mr(e)}/games/${encodeURIComponent(
        t
      )}/leaderboard/around/${encodeURIComponent(n)}`,
      params: { radius: String(r), ...(o ? { week: o } : {}) },
      retry: Ur,
      responseTypeGuard: re,
    }),
    i = Br(s);
  return V(s.rank) ? { ...i, rank: s.rank } : i;
}
async function Hd(e, t, n, r, o) {
  const s = await Me({
    method: se.Get,
    uri: `${Mr(e)}/games/${encodeURIComponent(t)}/leaderboard`,
    params: { from: String(n), to: String(r), ...(o ? { week: o } : {}) },
    retry: Ur,
    responseTypeGuard: re,
  });
  return Br(s);
}
function Mr(e) {
  return e.replace(/\/+$/, "");
}
function Br(e) {
  const { week: t, totalPlayers: n, entries: r } = e;
  if (!f(t) || !V(n) || !Te(r))
    throw new $r(1790160002, "board must have week, totalPlayers and entries", {
      response: e,
    });
  return { week: t, totalPlayers: n, entries: r.map(Xd) };
}
function Xd(e) {
  if (!m(e) || !V(e.rank) || !f(e.userId) || !we(e.username) || !V(e.score))
    throw new $r(
      1790160003,
      "board row must have rank, userId, username and score",
      { val: e }
    );
  return {
    rank: e.rank,
    userId: e.userId,
    username: e.username,
    avatarUrl: we(e.avatarUrl) ? e.avatarUrl : "",
    countryCode: we(e.countryCode) ? e.countryCode : "",
    score: e.score,
  };
}
const ci = 36e5,
  In = 24 * ci,
  Jd = 9 * ci;
function Io(e = 0, t = new Date()) {
  const n = new Date(t.getTime() - Jd),
    r = (n.getUTCDay() + 6) % 7,
    o =
      Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate() - r) -
      e * 7 * In,
    s = new Date(o + 3 * In),
    i = s.getUTCFullYear(),
    a = Math.floor((s.getTime() - Date.UTC(i, 0, 1)) / (7 * In)) + 1;
  return `${i}-W${String(a).padStart(2, "0")}`;
}
const Fe = x("CrazyGamesPlatform");
class Yd extends Tl {
  async init() {
    await this.#t(), Fe.info("CrazyGames Platform initialized");
  }
  async #t() {
    try {
      const t = (n) => {
        n.muteAudio
          ? this.internalEvents.muteSound.emit()
          : this.internalEvents.unmuteSound.emit();
      };
      await Zc(t), t(await Qc());
    } catch (t) {
      const n = be(
        t,
        1784721463,
        "Failed to set up audio mute sync from game settings."
      );
      Fe.error(
        "Failed to set up audio mute sync from game settings.",
        n.toObject()
      );
    }
  }
  async preLoadComplete() {}
  async loadingComplete() {}
  async getEntryPoint() {
    return {};
  }
  windowHasFocus() {
    return window.document.hasFocus();
  }
  async shouldUseLowQuality() {
    return !1;
  }
  getSafeAreaInset() {
    return { top: 0, right: 0, bottom: 0, left: 0 };
  }
  async tryGetPrivacyConsent() {
    return !0;
  }
  async openUrl(t) {
    if (!Rl(t)) throw new R(1756548628, "Invalid openURL parameters");
    const { url: n } = t;
    window.open(n, "_blank");
  }
  sendPlatformEvent(t) {
    if (!Zl(t))
      throw new R(1770983929, "Invalid platform event data", { eventData: t });
    const { eventType: n } = t;
    switch (n) {
      case We.GameplayStart:
        eu().catch((r) => {
          Fe.error("Error sending gameplayStart event:", r);
        });
        break;
      case We.GameplayStop:
        tu().catch((r) => {
          Fe.error("Error sending gameplayStop event:", r);
        });
        break;
      case We.HappyTime:
        nu().catch((r) => {
          Fe.error("Error sending happytime event:", r);
        });
        break;
      default:
        Fe.warn("Unknown platform event type received:", t);
    }
  }
}
const Zd = "1.8.4",
  Qd = {
    bridgeVersion: Zd,
    platform: "crazy-games",
    adsConfig: {
      adFreeInitialLevels: 0,
      interstitialCooldownLevel: 0,
      longGameplayCooldownMs: 15e4,
      enableLongGameplayAds: !0,
      supportsAdPlayButton: !0,
      freeRewardedCooldown: 0,
      bannerAds: !0,
    },
  };
class Co {
  type;
  #t;
  #e;
  constructor(t, n) {
    (this.type = t), (this.#t = this.#n()), (this.#e = !!n);
  }
  load = async () => {};
  show = async () => {
    if (this.#e) return { started: !1, finished: !1 };
    const { started: t, finished: n } = await Nc(this.#t);
    return { started: t, finished: n };
  };
  hide = async () => {};
  #n() {
    switch (this.type) {
      case Ae.Interstitial:
        return "midgame";
      case Ae.Rewarded:
        return "rewarded";
      default:
        throw new Le(1765923314, `Unsupported ad type: ${this.type}`);
    }
  }
}
const eh = x("CrazyGamesBannerAdInstance"),
  th = "sg-cg-banner",
  nh = [
    { width: 160, height: 600, fullHeight: !0 },
    { width: 300, height: 600, fullHeight: !1 },
    { width: 300, height: 250, fullHeight: !1 },
    { width: 250, height: 250, fullHeight: !1 },
  ],
  rh = 0.3,
  oh = [
    { width: 970, height: 250 },
    { width: 970, height: 90 },
    { width: 728, height: 90 },
    { width: 468, height: 60 },
    { width: 336, height: 280 },
    { width: 320, height: 50 },
    { width: 300, height: 600 },
    { width: 300, height: 250 },
    { width: 250, height: 250 },
    { width: 160, height: 600 },
    { width: 120, height: 600 },
  ],
  sh = [600, 280, 250, 90, 60, 50],
  ih = 970,
  ah = 0.1,
  lh = 150;
function ui(e) {
  if (typeof window > "u") return null;
  const { innerWidth: t, innerHeight: n } = window;
  if (t <= 0 || n <= 0) return null;
  if (t > n) {
    const s = t * rh,
      i = nh.find((a) => a.height <= n && a.width <= s);
    return i === void 0
      ? null
      : {
          box: {
            width: i.width,
            height: i.fullHeight ? n : i.height,
            edge: "left",
          },
          formatHeight: i.height,
        };
  }
  const r = n * ah,
    o = sh.find((s) => s <= r);
  return o === void 0
    ? null
    : { box: { width: Math.min(t, ih), height: o, edge: e }, formatHeight: o };
}
function di(e) {
  return ui(e)?.box ?? null;
}
class ch {
  type = Ae.Banner;
  #t;
  #e;
  #n;
  #r;
  #o = null;
  #a = 0;
  #s = null;
  #i = null;
  #l = null;
  #u = null;
  constructor(t, n, r) {
    (this.#t = t), (this.#e = !!n), (this.#r = r), (this.#n = `${th}-${t}`);
  }
  load = async () => {};
  show = async () => {
    if (this.#e) return { started: !1, finished: !1, noop: !0 };
    const t = ui(this.#t);
    if (t === null)
      return (
        eh.warn(
          "No responsive format fits the viewport, skipping the banner.",
          {
            width: typeof window > "u" ? null : window.innerWidth,
            height: typeof window > "u" ? null : window.innerHeight,
          }
        ),
        { started: !1, finished: !1, noop: !0 }
      );
    const { box: n } = t;
    this.#m(n);
    try {
      await Bc(this.#n);
    } catch (r) {
      throw (this.#d(), r);
    }
    return (
      this.#_(),
      (this.#o = n),
      (this.#a = t.formatHeight),
      this.#r?.(n),
      this.#g(n),
      this.#f(),
      { started: !0, finished: !0 }
    );
  };
  hide = async () => {
    this.#p();
    try {
      await Fc(this.#n);
    } finally {
      this.#d();
    }
  };
  getBox = () => this.#o;
  #c = () => {
    this.#s != null && clearTimeout(this.#s),
      (this.#s = setTimeout(() => {
        (this.#s = null), this.#h();
      }, lh));
  };
  #h() {
    const t = this.#o;
    if (t === null) return;
    const n = di(this.#t);
    (n !== null &&
      n.edge === t.edge &&
      t.width <= n.width &&
      this.#a <= n.height) ||
      this.hide().catch(() => {});
  }
  #f() {
    typeof window > "u" ||
      (window.addEventListener("resize", this.#c),
      window.addEventListener("orientationchange", this.#c));
  }
  #p() {
    this.#s != null && (clearTimeout(this.#s), (this.#s = null)),
      !(typeof window > "u") &&
        (window.removeEventListener("resize", this.#c),
        window.removeEventListener("orientationchange", this.#c));
  }
  #m(t) {
    const n = document.getElementById(this.#n) ?? document.createElement("div");
    return (
      n.id || ((n.id = this.#n), document.body.appendChild(n)),
      (n.style.position = "fixed"),
      (n.style.top = ""),
      (n.style.bottom = ""),
      (n.style.left = ""),
      (n.style.transform = ""),
      t.edge === "left"
        ? ((n.style.left = "0"),
          (n.style.top = "50%"),
          (n.style.transform = "translateY(-50%)"))
        : (n.style.setProperty(t.edge, "0"),
          (n.style.left = "50%"),
          (n.style.transform = "translateX(-50%)")),
      (n.style.width = `${t.width}px`),
      (n.style.height = `${t.height}px`),
      (n.style.overflow = "hidden"),
      (n.style.zIndex = "2147483646"),
      (n.style.pointerEvents = "none"),
      n
    );
  }
  #g(t) {
    const n = document.getElementById(this.#n);
    if (n === null || typeof MutationObserver > "u") return;
    const r = () => {
      this.#b(t), this.#y(r);
    };
    (this.#i = new MutationObserver(r)),
      this.#i.observe(n, { childList: !0, subtree: !0 }),
      r();
  }
  #y(t) {
    const n = document.getElementById(this.#n),
      r = n?.querySelector("iframe") ?? n?.firstElementChild ?? null;
    r === null ||
      typeof ResizeObserver > "u" ||
      (r !== this.#u &&
        (this.#l?.disconnect(),
        (this.#u = r),
        (this.#l = new ResizeObserver(() => {
          t();
        })),
        this.#l.observe(r)));
  }
  #w() {
    const t = document.getElementById(this.#n);
    if (t === null) return null;
    const n = (o, s) => oh.some((i) => i.width === o && i.height === s);
    return (
      Array.from(t.querySelectorAll("*"))
        .flatMap((o) => {
          const s = o.getBoundingClientRect();
          return [
            { width: Math.round(s.width), height: Math.round(s.height) },
            {
              width: Number(o.getAttribute("width")),
              height: Number(o.getAttribute("height")),
            },
          ];
        })
        .find((o) => n(o.width, o.height)) ?? null
    );
  }
  #b(t) {
    const n = document.getElementById(this.#n),
      r = this.#w();
    if (n === null || r === null) return;
    this.#a = r.height;
    const o =
        t.edge === "left"
          ? { ...t, width: Math.min(t.width, r.width) }
          : { ...t, height: Math.min(t.height, r.height) },
      s = this.#o;
    (s !== null && o.width === s.width && o.height === s.height) ||
      ((n.style.width = `${o.width}px`),
      (n.style.height = `${o.height}px`),
      (this.#o = o),
      this.#r?.(o));
  }
  #_() {
    const t = document.getElementById(this.#n);
    t && (t.style.pointerEvents = "auto");
  }
  #d() {
    this.#i?.disconnect(),
      (this.#i = null),
      this.#l?.disconnect(),
      (this.#l = null),
      (this.#u = null),
      document.getElementById(this.#n)?.remove(),
      (this.#a = 0),
      this.#o !== null && ((this.#o = null), this.#r?.(null));
  }
}
class uh extends Ja {
  #t;
  constructor(t) {
    super();
    const { disableAds: n } = t.getGamePlatformConfig();
    this.#t = !!n;
  }
  async init() {}
  async getInterstitial() {
    return new Co(Ae.Interstitial, this.#t);
  }
  async getRewarded() {
    return new Co(Ae.Rewarded, this.#t);
  }
  async getBanner(t) {
    return new ch(t.position, this.#t, t.onBoxChange);
  }
  getBannerBox(t) {
    return di(t?.position ?? "bottom");
  }
  async createAdProviderForAdFlow() {
    const { CrazyGamesAdProvider: t } = await Xe(
      async () => {
        const { CrazyGamesAdProvider: n } = await import(
          "./CrazyGamesAdProvider.js"
        );
        return { CrazyGamesAdProvider: n };
      },
      [],
      import.meta.url
    );
    return new t(this);
  }
}
const hi = new B(),
  Cn = x("CrazyGamesAuth");
class dh extends il {
  #t = null;
  #e = null;
  async init() {
    const t = await Hc();
    if (((this.#t = !t), !t)) {
      this.#e = !1;
      return;
    }
    await qc(() => {
      this.internalEvents.loggedIn.emit(), this.#r().catch(() => {});
    }),
      await this.#r();
  }
  async login() {
    this.#n() || (await Xc());
  }
  async logout() {
    Cn.notice("Logout is not supported by SDK.");
  }
  isAuthenticated() {
    if (this.#e === null)
      throw new ke(
        1766151712,
        "Auth module not initialized. Call init() before using this method."
      );
    return this.#e;
  }
  getAuthToken() {
    return (
      Cn.notice(
        "getAuthToken not supported by SDK. You might meant to use user.getUserSignature() instead."
      ),
      null
    );
  }
  #n() {
    if (this.#t === null)
      throw new ke(
        1766073484,
        "Auth module not initialized. Call init() before using this method."
      );
    return this.#t;
  }
  async #r() {
    try {
      await this.#o();
    } catch (t) {
      const n = be(t, 1766151975, "Unknown error while syncing user status.");
      Cn.error(
        "Failed to sync user status, treating the player as signed out.",
        n.toObject()
      ),
        (this.#e = !1);
    }
  }
  async #o() {
    const t = await Hs();
    hi.emit(t), (this.#e = !!t);
  }
}
const An = x("CrazyGamesUserModule");
class hh extends Ml {
  #t = null;
  #e = null;
  #n = [];
  constructor() {
    super(),
      hi.on((t) => {
        (this.#t = t),
          this.#r().catch((n) => {
            An.error("Failed to refresh friends after auth state change", n);
          });
      });
  }
  async init() {
    (this.#e = await qt()), await this.#r();
  }
  async #r() {
    if (!this.#t) {
      this.#n = [];
      return;
    }
    try {
      const t = await Kc();
      this.#n = t.map(ph);
    } catch (t) {
      An.error("Failed to fetch user friends", t), (this.#n = []);
    }
  }
  getAvatar() {
    return this.#t?.profilePictureUrl || null;
  }
  getUserId() {
    return (
      An.notice(
        "getUserId is not supported by CrazyGames SDK. Returning the username as workaround."
      ),
      this.getUsername()
    );
  }
  getUsername() {
    return this.#t?.username || null;
  }
  getLanguage() {
    if (!this.#e)
      throw new ke(
        1766154897,
        "User module not initialized. Call init() before using this method."
      );
    const [t] = this.#e.locale.split("-");
    if (!Fs(t))
      throw new d(
        1766155365,
        "Failed to transform locale to language code, which should have worked.",
        { locale: this.#e.locale }
      );
    return t;
  }
  getLocale() {
    if (!this.#e)
      throw new ke(
        1766337750,
        "User module not initialized. Call init() before using this method."
      );
    return this.#e.locale;
  }
  async getUserSignature() {
    return this.#t ? tr() : null;
  }
  getFriends() {
    return this.#n;
  }
  getCountryCode() {
    const t = this.#e?.countryCode;
    return t && t !== zs ? t : null;
  }
  async getCrazyGamesUserId() {
    if (!this.#t) return null;
    if (this.#t.userId) return this.#t.userId;
    const t = await tr();
    return t ? fh(t) : null;
  }
}
function fh(e) {
  try {
    const [, t = ""] = e.split("."),
      n = JSON.parse(atob(t.replace(/-/g, "+").replace(/_/g, "/")));
    return m(n) && f(n.userId) ? n.userId : null;
  } catch {
    return null;
  }
}
function ph(e) {
  return {
    id: e.username,
    name: e.username,
    ...(e.profilePictureUrl ? { avatar: e.profilePictureUrl } : {}),
  };
}
const Rt = x("DataStoreManager");
class mh extends _l {
  #t;
  #e = null;
  constructor(t, n) {
    super(), (this.#t = t), (this.#e = n || null);
  }
  async init() {}
  async load() {
    if (!this.#e)
      throw new ke(
        1766272699,
        "Can not load data yet. Keys have not been set. This can happen via using UDS or via Bridge Game Config."
      );
    const t = await zc(this.#e);
    if (Xa(t))
      return (
        Rt.debug("No data found for keys. Returning null.", {
          keys: this.#e,
          rawData: t,
        }),
        null
      );
    const n = Object.fromEntries(
      Object.entries(t).map(([r, o]) => {
        const s = this.#n(r, o);
        if (!Ar(s))
          throw new Le(1766273001, "Stored value is not a JSON object", {
            key: r,
            value: o,
          });
        return [r, s];
      })
    );
    return Rt.debug("Loaded data:", { rawData: t, response: n }), n;
  }
  #n(t, n) {
    try {
      return JSON.parse(n);
    } catch (r) {
      throw new Le(
        1769081610,
        "Stored value is not valid JSON",
        { key: t, value: n },
        r
      );
    }
  }
  async save(t) {
    if (!re(t))
      throw new R(1766271096, "Data to save must be a JSON record", {
        data: t,
      });
    const n = Object.fromEntries(
      Object.entries(t).map(([r, o]) => [r, JSON.stringify(o)])
    );
    Rt.debug("Saving data:", { inputData: t, preparedData: n }), await jc(n);
  }
  async createUdsAdapter(t) {
    const { CrazyGamesAdapter: n } = await Xe(
        async () => {
          const { CrazyGamesAdapter: s } = await import(
            "./CrazyGamesAdapter.js"
          );
          return { CrazyGamesAdapter: s };
        },
        [],
        import.meta.url
      ),
      { options: r } = this.#t.getGamePlatformConfig(),
      { limitSaveCalls: o = 1 } = r || {};
    return new n({
      options: {
        ...t,
        backendName: "crazyGames",
        logger: Rt,
        storageIntervalMs: dn(o) ? o * 1e3 : 1,
      },
      store: this,
      provideKeys: (s) => {
        this.#e = s;
      },
    });
  }
}
var xt = { exports: {} },
  kn,
  Ao;
function gh() {
  return (
    Ao ||
      ((Ao = 1),
      (kn = {
        AED: "د.إ",
        AFN: "؋",
        ALL: "L",
        AMD: "֏",
        ANG: "ƒ",
        AOA: "Kz",
        ARS: "$",
        AUD: "$",
        AWG: "ƒ",
        AZN: "₼",
        BAM: "KM",
        BBD: "$",
        BDT: "৳",
        BGN: "лв",
        BHD: ".د.ب",
        BIF: "FBu",
        BMD: "$",
        BND: "$",
        BOB: "$b",
        BOV: "BOV",
        BRL: "R$",
        BSD: "$",
        BTC: "₿",
        BTN: "Nu.",
        BWP: "P",
        BYN: "Br",
        BYR: "Br",
        BZD: "BZ$",
        CAD: "$",
        CDF: "FC",
        CHE: "CHE",
        CHF: "CHF",
        CHW: "CHW",
        CLF: "CLF",
        CLP: "$",
        CNH: "¥",
        CNY: "¥",
        COP: "$",
        COU: "COU",
        CRC: "₡",
        CUC: "$",
        CUP: "₱",
        CVE: "$",
        CZK: "Kč",
        DJF: "Fdj",
        DKK: "kr",
        DOP: "RD$",
        DZD: "دج",
        EEK: "kr",
        EGP: "£",
        ERN: "Nfk",
        ETB: "Br",
        ETH: "Ξ",
        EUR: "€",
        FJD: "$",
        FKP: "£",
        GBP: "£",
        GEL: "₾",
        GGP: "£",
        GHC: "₵",
        GHS: "GH₵",
        GIP: "£",
        GMD: "D",
        GNF: "FG",
        GTQ: "Q",
        GYD: "$",
        HKD: "$",
        HNL: "L",
        HRK: "kn",
        HTG: "G",
        HUF: "Ft",
        IDR: "Rp",
        ILS: "₪",
        IMP: "£",
        INR: "₹",
        IQD: "ع.د",
        IRR: "﷼",
        ISK: "kr",
        JEP: "£",
        JMD: "J$",
        JOD: "JD",
        JPY: "¥",
        KES: "KSh",
        KGS: "лв",
        KHR: "៛",
        KMF: "CF",
        KPW: "₩",
        KRW: "₩",
        KWD: "KD",
        KYD: "$",
        KZT: "₸",
        LAK: "₭",
        LBP: "£",
        LKR: "₨",
        LRD: "$",
        LSL: "M",
        LTC: "Ł",
        LTL: "Lt",
        LVL: "Ls",
        LYD: "LD",
        MAD: "MAD",
        MDL: "lei",
        MGA: "Ar",
        MKD: "ден",
        MMK: "K",
        MNT: "₮",
        MOP: "MOP$",
        MRO: "UM",
        MRU: "UM",
        MUR: "₨",
        MVR: "Rf",
        MWK: "MK",
        MXN: "$",
        MXV: "MXV",
        MYR: "RM",
        MZN: "MT",
        NAD: "$",
        NGN: "₦",
        NIO: "C$",
        NOK: "kr",
        NPR: "₨",
        NZD: "$",
        OMR: "﷼",
        PAB: "B/.",
        PEN: "S/.",
        PGK: "K",
        PHP: "₱",
        PKR: "₨",
        PLN: "zł",
        PYG: "Gs",
        QAR: "﷼",
        RMB: "￥",
        RON: "lei",
        RSD: "Дин.",
        RUB: "₽",
        RWF: "R₣",
        SAR: "﷼",
        SBD: "$",
        SCR: "₨",
        SDG: "ج.س.",
        SEK: "kr",
        SGD: "S$",
        SHP: "£",
        SLL: "Le",
        SOS: "S",
        SRD: "$",
        SSP: "£",
        STD: "Db",
        STN: "Db",
        SVC: "$",
        SYP: "£",
        SZL: "E",
        THB: "฿",
        TJS: "SM",
        TMT: "T",
        TND: "د.ت",
        TOP: "T$",
        TRL: "₤",
        TRY: "₺",
        TTD: "TT$",
        TVD: "$",
        TWD: "NT$",
        TZS: "TSh",
        UAH: "₴",
        UGX: "USh",
        USD: "$",
        UYI: "UYI",
        UYU: "$U",
        UYW: "UYW",
        UZS: "лв",
        VEF: "Bs",
        VES: "Bs.S",
        VND: "₫",
        VUV: "VT",
        WST: "WS$",
        XAF: "FCFA",
        XBT: "Ƀ",
        XCD: "$",
        XOF: "CFA",
        XPF: "₣",
        XSU: "Sucre",
        XUA: "XUA",
        YER: "﷼",
        ZAR: "R",
        ZMW: "ZK",
        ZWD: "Z$",
        ZWL: "$",
      })),
    kn
  );
}
var ko;
function yh() {
  if (ko) return xt.exports;
  ko = 1;
  const e = gh();
  return (
    (xt.exports = function (n) {
      if (typeof n != "string") return;
      const r = n.toUpperCase();
      if (Object.prototype.hasOwnProperty.call(e, r)) return e[r];
    }),
    (xt.exports.currencySymbolMap = e),
    xt.exports
  );
}
var wh = yh();
const bh = Ma(wh);
function _h(e) {
  return e.toLowerCase();
}
const O = x("CrazyGamesIap");
function Sh() {
  return {
    init: () => {
      O.info("Called noop XPayStationWidget.init");
    },
    open: () => {
      O.info("Called noop XPayStationWidget.open");
    },
    on: () => {
      O.info("Called noop XPayStationWidget.on");
    },
    off: () => {
      O.info("Called noop XPayStationWidget.off");
    },
  };
}
class Eh extends Pl {
  #t;
  #e;
  #n;
  #r;
  constructor({ config: t, auth: n, xsollaProjectId: r }) {
    super();
    const { disableInAppPurchase: o, isDev: s } = t.getGamePlatformConfig();
    (this.#t = !r || !!o),
      (this.#e = !!s),
      (this.#n = r),
      (this.#r = n),
      n.events.loggedIn.on(() => {
        this.getCatalog.reset();
      });
  }
  async init() {
    this.#t ||
      O.info(
        "CrazyGames IAP initialized. The PayStation widget is loaded on the first purchase."
      );
  }
  #o = Je(async () => {
    const t = await this.#s(),
      n = (r, o) => {
        const s = y(r, "type") ? r.type : "n/a";
        O.info(`Event "${String(s)}" received from XPayStationWidget`, {
          event: r,
          data: o,
        });
      };
    return (
      wu(
        t,
        {
          [F.Close]: (r, o) => {
            n(r, o), Ys.emit();
          },
          [F.Error]: n,
          [F.Fcp]: n,
          [F.Init]: n,
          [F.Load]: n,
          [F.Open]: n,
          [F.Status]: (r, o) => {
            if ((n(r, o), !y(o, "paymentInfo"))) return;
            const { paymentInfo: s } = o;
            fu(s) && Js.emit(s);
          },
          [F.StatusDelivering]: n,
          [F.StatusDone]: n,
          [F.StatusInvoice]: n,
          [F.StatusTroubled]: n,
          [F.UserCountry]: n,
        },
        O
      ),
      O.info("XPayStationWidget ready"),
      t
    );
  });
  isIapSupported() {
    return !this.#t;
  }
  async isPurchaseAvailable() {
    if (!this.isIapSupported()) return !1;
    const { applicationType: t } = await qt();
    return t === "web";
  }
  getCatalog = Je(async () => {
    if (this.#t)
      return (
        O.notice("IAP is disabled, returning empty catalog"), { products: [] }
      );
    const t = await this.#a(),
      { countryCode: n } = await qt(),
      r = _h(n);
    return {
      products: (
        await xd({ xsollaProjectId: this.#i(), xsollaUserToken: t, locale: r })
      )
        .filter((i) => i.can_be_bought && !!i.price)
        .map((i) => {
          const { price: a, sku: u, name: c, image_url: l, description: h } = i;
          if (!a)
            throw new Le(
              1767072221,
              "Unexpected null price for item. Should have been filtered out before",
              { item: i }
            );
          const { currency: g, amount: w } = a,
            _ = Number(w),
            ie = bh(g) || g;
          return {
            id: u,
            price: `${ie}${_.toLocaleString()}`,
            priceAmount: _,
            priceCurrencyCode: g,
            name: c || void 0,
            image: l || void 0,
            description: h || void 0,
            isConsumable: !0,
            isSubscription: !1,
          };
        }),
    };
  });
  async #a() {
    try {
      return this.#r.isAuthenticated() ? await yo() : null;
    } catch (t) {
      const n = be(t, 1768814075, "Unknown error on getting Xsolla user token");
      return (
        O.warn(
          "Failed to get Xsolla user token. Will return null",
          n.toObject()
        ),
        null
      );
    }
  }
  async getPendingPurchases() {
    return [];
  }
  async getUnconsumedPurchases() {
    return [];
  }
  async purchaseProduct(t) {
    const n = { productId: t, purchaseToken: t };
    try {
      O.info("Starting purchase ...", { productId: t });
      const r = await yo();
      if (!r)
        throw new ke(
          1766694949,
          "User not logged in. Cannot purchase product.",
          { productId: t }
        );
      O.info("... got user token. Creating order ...", { productId: t });
      const o = this.#i(),
        { token: s, order_id: i } = await Od({
          xsollaProjectId: o,
          xsollaUserToken: r,
          itemSku: t,
          sandbox: this.#e,
        }),
        a = String(i);
      this.#l({ xsollaProjectId: o, xsollaUserToken: r, xsollaOrderId: a }),
        O.info("... got order token. Fetching pay station ...", {
          productId: t,
        }),
        (n.transactionId = a),
        (n.purchaseToken = s),
        this.internalEvents.purchaseApproved.emit({ purchase: n });
      const u = await this.#o(),
        { success: c } = await bu({
          widget: u,
          token: s,
          sandbox: this.#e,
          log: O,
        });
      if (
        (this.#l({ xsollaProjectId: o, xsollaUserToken: r, xsollaOrderId: a }),
        !c)
      )
        throw new ke(1767041450, "Purchase was not completed by user", {
          productId: t,
        });
      return (
        O.info("Purchase succeeded", { productId: t }),
        this.internalEvents.purchaseSucceeded.emit({ purchase: n }),
        n
      );
    } catch (r) {
      const o = be(r, 1766694814, "Unknown error on purchaseProduct", {
        productId: t,
      });
      throw (
        (O.error("Purchase failed", o.toObject()),
        this.internalEvents.purchaseFailed.emit({ purchase: n, error: o }),
        o)
      );
    }
  }
  async consumePurchase(t) {}
  async #s() {
    const { applicationType: t } = await qt();
    return t !== "web"
      ? (O.info(`Application type is "${t}", using no-op XPayStationWidget.`),
        Sh())
      : yu();
  }
  #i() {
    if (!this.#n)
      throw new Le(
        1766334745,
        "Xsolla Project ID is not set. IAP should have been disabled."
      );
    return this.#n;
  }
  #l(t) {
    Rd(t)
      .then((n) => {
        Uc({ source: "xsolla", order: n }),
          O.info("Triggered order tracking", { order: n });
      })
      .catch((n) => {
        const r = be(n, 1767114131, "Unknown error on tracking order");
        O.warn("Failed to track order", r.toObject());
      });
  }
}
async function Ph(e, t) {
  const n = crypto.getRandomValues(new Uint8Array(12)),
    r = { name: "AES-GCM", iv: n },
    o = Uint8Array.from(atob(t), (c) => c.charCodeAt(0)),
    s = await crypto.subtle.importKey("raw", o, r, !1, ["encrypt"]),
    i = new TextEncoder().encode(e.toString()),
    a = await crypto.subtle.encrypt(r, s, i),
    u = new Uint8Array(n.length + a.byteLength);
  return (
    u.set(n),
    u.set(new Uint8Array(a), n.length),
    btoa(String.fromCharCode(...u))
  );
}
const j = x("CrazyGamesLeaderboard"),
  To = "global",
  Oo = "weekly",
  Ro = 100,
  xo = 25;
class vh extends Cl {
  #t;
  #e;
  #n;
  #r;
  #o;
  constructor({
    encryptionKey: t,
    gameId: n,
    portalUrl: r,
    weeklyApiUrl: o,
    user: s,
  }) {
    super(),
      (this.#t = t),
      (this.#e = n),
      (this.#n = r),
      (this.#r = o ?? Vd),
      (this.#o = s);
  }
  async init() {
    this.#t ||
      j.warn(
        "No leaderboardEncryptionKey configured — score reporting disabled."
      ),
      this.#e
        ? j.info("Leaderboard reads enabled.", {
            gameId: this.#e,
            portalUrl: this.#n ?? "<portal>",
          })
        : j.warn(
            "No crazyGamesGameId configured — leaderboard reads disabled."
          ),
      this.#e &&
        j.info("Weekly leaderboard enabled.", { weeklyApiUrl: this.#r });
  }
  async preload() {}
  async saveScore({ score: t }) {
    const [n, r] = await Promise.allSettled([this.#a(t), this.#s(t)]);
    if (r.status === "fulfilled" && r.value)
      return (
        n.status === "rejected" &&
          j.error(
            "CrazyGames submitScore failed; the weekly board has the score.",
            n.reason
          ),
        r.value
      );
    if (n.status === "rejected") throw n.reason;
    if (r.status === "rejected") {
      if (n.value)
        return (
          j.error("Weekly submit failed; CrazyGames has the score.", r.reason),
          null
        );
      throw r.reason;
    }
    return null;
  }
  async #a(t) {
    if (!this.#t)
      return (
        j.warn(
          "Skipping submitScore — no leaderboardEncryptionKey configured."
        ),
        !1
      );
    const n = await Ph(t, this.#t);
    return (
      await Jc(n, t),
      j.info("Submitted encrypted score to CrazyGames.", { score: t }),
      !0
    );
  }
  async #s(t) {
    if (!this.#e) return null;
    const n = await tr();
    if (!n) return j.info("Skipping weekly submit — guest."), null;
    const r = await Wd(this.#r, n, t, this.#o.getCountryCode() ?? "");
    j.info("Submitted score to the weekly board.", {
      score: t,
      rank: r.rank,
      week: r.week,
    });
    const o = r.entries.find((i) => i.rank === r.rank),
      s = o?.username || this.#o.getUsername() || "";
    return {
      user: {
        id: s,
        name: s,
        ...(o?.avatarUrl ? { avatar: o.avatarUrl } : {}),
      },
      score: r.score,
      rank: r.rank,
      totalPlayers: r.totalPlayers,
      week: r.week,
    };
  }
  async getLeaderboardInformation(t) {
    if (!this.#e) return [];
    const n = [
      { id: To, name: "Global" },
      { id: Oo, name: "Weekly" },
    ];
    return t ? n.filter((r) => t.includes(r.id)) : n;
  }
  async getGlobalLeaderboardEntries() {
    return this.#e ? (await Fd(this.#e, this.#n)).map(Ih) : [];
  }
  async getLeaderboardEntries(t, n = 30, r = 0) {
    return t === Oo
      ? (await this.#i(r + 1, r + n, 0))?.entries ?? []
      : t !== To
      ? (j.warn("Unknown leaderboard id, returning no entries.", {
          leaderboardId: t,
        }),
        [])
      : (await this.getGlobalLeaderboardEntries()).slice(r, r + n);
  }
  async getSeason() {
    return this.#e ? qd(this.#e, this.#n) : null;
  }
  async getOwnEntry() {
    if (!this.#e) return null;
    const t = await this.#o.getCrazyGamesUserId();
    if (!t) return j.info("own entry: signed out — no rank available."), null;
    const n = await zd(this.#e, t, this.#n);
    return n
      ? (j.info("own entry resolved.", {
          overallRank: n.overallRank,
          score: n.score,
        }),
        {
          user: {
            id: n.user.username,
            name: n.user.username,
            ...(n.user.avatar ? { avatar: n.user.avatar } : {}),
          },
          score: n.score,
          rank: n.overallRank ?? 0,
          countryRank: n.countryRank,
          friendsRank: n.friendsRank,
          scoreForNextBadge: n.scoreForNextBadge,
          seasonId: n.seasonId,
        })
      : (j.info("own entry: player has no score in the current season.", {
          userId: t,
        }),
        null);
  }
  async getWeeklyTop(t = 10, n = 0) {
    return this.#i(1, t, n);
  }
  async getWeeklyAround(t = 5, n = 0) {
    if (!Number.isInteger(t) || t < 0 || t > xo)
      throw new R(1790160005, `radius must be an integer 0..${xo}`, {
        radius: t,
      });
    if (!this.#e) return null;
    const r = await this.#o.getCrazyGamesUserId();
    if (!r) return null;
    const o = await Kd(this.#r, this.#e, r, t, Io(n));
    return {
      week: o.week,
      totalPlayers: o.totalPlayers,
      rank: o.rank ?? null,
      entries: o.entries.map(Do),
    };
  }
  async getWeeklyResult(t = 1) {
    const n = await this.getWeeklyAround(0, t),
      r = n?.entries[0];
    return !n || n.rank === null || !r
      ? null
      : {
          week: n.week,
          rank: n.rank,
          totalPlayers: n.totalPlayers,
          score: r.score,
        };
  }
  async #i(t, n, r) {
    const o = n - t + 1;
    if (
      !Number.isInteger(t) ||
      !Number.isInteger(n) ||
      t < 1 ||
      o < 1 ||
      o > Ro
    )
      throw new R(
        1790160006,
        `weekly reads take 1..${Ro} rows from rank 1 on`,
        { from: t, to: n }
      );
    if (!this.#e) return null;
    const s = await Hd(this.#r, this.#e, t, n, Io(r));
    return {
      week: s.week,
      totalPlayers: s.totalPlayers,
      entries: s.entries.map(Do),
    };
  }
}
function Ih(e) {
  return {
    user: {
      id: e.user.username,
      name: e.user.username,
      ...(e.user.avatar ? { avatar: e.user.avatar } : {}),
    },
    score: e.score,
    rank: e.userRank,
  };
}
function Do(e) {
  return {
    user: {
      id: e.username,
      name: e.username,
      ...(e.avatarUrl ? { avatar: e.avatarUrl } : {}),
    },
    score: e.score,
    rank: e.rank,
  };
}
const Lo = x("CrazyGamesBridge");
class Ch extends gl {
  config;
  ads;
  auth;
  dataStorage;
  iap;
  platform;
  user;
  leaderboard;
  constructor(t) {
    Jl(t), super(t);
    const {
      storageKeys: n,
      xsollaProjectId: r,
      leaderboardEncryptionKey: o,
      crazyGamesGameId: s,
      leaderboardPortalUrl: i,
      weeklyLeaderboardUrl: a,
    } = t;
    (this.platform = new Yd()),
      (this.config = new Xl(t, Qd)),
      (this.ads = new uh(this.config)),
      (this.auth = new dh()),
      (this.dataStorage = new mh(this.config, n)),
      (this.iap = new Eh({
        config: this.config,
        auth: this.auth,
        xsollaProjectId: r,
      })),
      (this.user = new hh()),
      (this.leaderboard = new vh({
        encryptionKey: o,
        gameId: s,
        portalUrl: i,
        weeklyApiUrl: a,
        user: this.user,
      })),
      Lo.info("CrazyGames Bridge initialized with config:", t);
  }
  async init() {
    await T(),
      await this.platform.init(),
      await this.config.init(),
      await this.ads.init(),
      await this.auth.init(),
      await this.dataStorage.init(),
      await this.iap.init(),
      await this.user.init(),
      await this.leaderboard.init(),
      Lo.info("CrazyGames Bridge initialized");
  }
  setLogSeverity(t) {
    Kl(t);
  }
  community = new wl();
  haptic = new El();
  inventory = new Il();
  notifications = new kl();
  rating = new Dl();
  social = new Nl();
}
const xe = {
  gameId: "hexa-stack",
  crazyGamesGameId: "90725",
  leaderboardPortalUrl:
    "https://sg-cg-leaderboards-293659511006.europe-west1.run.app/graph",
  gameSlug: "hexa-stack",
  xsollaProjectId: "309231",
  storageKeys: ["gameState"],
  leaderboardEncryptionKey: "2Fpc2zPm/C8Tz/NRdXgzxfClvGNpJVs0yAqSM97vUvc=",
};
function Ah() {
  let e;
  Object.defineProperty(window, "CrazyGames", {
    configurable: !0,
    get: () => e,
    set(t) {
      e = t;
      const n = t?.SDK;
      if (typeof n?.init != "function") return;
      const r = n.init.bind(n);
      n.init = async () => {
        const o = await r();
        return n.user && (n.user.listFriends = void 0), o;
      };
    },
  });
}
function kh() {
  return !1;
}
function Th() {
  Ah();
  const e = new Ch({
    gameId: xe.gameId,
    gameSlug: xe.gameSlug,
    gameVersion: "1.44.1.0-rc4",
    isDev: !1,
    storageKeys: xe.storageKeys,
    leaderboardEncryptionKey: xe.leaderboardEncryptionKey,
    crazyGamesGameId: xe.crazyGamesGameId,
    leaderboardPortalUrl: xe.leaderboardPortalUrl,
    xsollaProjectId: xe.xsollaProjectId,
  });
  return e.setLogSeverity(z.Info), e;
}
function fi() {
  return window.CrazyGames?.SDK?.game;
}
function Oh() {
  const e = fi();
  console.log("[CG-Wrapper] loadingStart", { sdkAvailable: !!e }),
    e?.loadingStart?.();
}
function Rh() {
  const e = fi();
  console.log("[CG-Wrapper] loadingStop (game ready)", { sdkAvailable: !!e }),
    e?.loadingStop?.();
}
const xh = "cg-loading",
  Dh = 400;
function Lh() {
  const e = document.getElementById(xh);
  e &&
    (e.classList.add("cg-loading--hidden"),
    window.setTimeout(() => e.remove(), Dh));
}
const Nh = {
    "Login to enable tournaments":
      "Melde dich an, um die Bestenliste zu aktivieren",
    "Login to crazy games": "Bei CrazyGames anmelden",
    "Leaderboards not currently available":
      "Bestenlisten derzeit nicht verfügbar",
    "Privacy Policy": "Datenschutzerklärung",
    "Terms of Use": "Nutzungsbedingungen",
    login_required_title: "Anmeldung erforderlich",
    login_required_message: "Bitte melde dich an, um den Shop zu nutzen.",
    login_required_button: "Anmelden",
    login_required_cancel: "Abbrechen",
    play_in_browser_title: "Im Browser spielen",
    play_in_browser_message:
      "Käufe sind in der App nicht verfügbar. Bitte öffne das Spiel angemeldet in einem Webbrowser, um Käufe zu tätigen.",
    play_in_browser_button: "OK",
    ID: "ID",
    Version: "Version",
    "Global Leaderboard": "Globale Bestenliste",
    "Copied!": "Kopiert!",
  },
  $h = {
    "Login to enable tournaments": "Login to enable the leaderboard",
    "Login to crazy games": "Login to CrazyGames",
    "Leaderboards not currently available":
      "Leaderboards not currently available",
    "Privacy Policy": "Privacy Policy",
    "Terms of Use": "Terms of Use",
    login_required_title: "Login required",
    login_required_message: "Please login to use the store.",
    login_required_button: "Login",
    login_required_cancel: "Cancel",
    play_in_browser_title: "Play in browser",
    play_in_browser_message:
      "Purchases aren't available in the app. Please open the game in a web browser while being logged in to make purchases.",
    play_in_browser_button: "OK",
    ID: "ID",
    Version: "Version",
    "Global Leaderboard": "Global Leaderboard",
    "Copied!": "Copied!",
  },
  Uh = {
    "Login to enable tournaments":
      "Inicia sesión para activar la clasificación",
    "Login to crazy games": "Iniciar sesión en CrazyGames",
    "Leaderboards not currently available":
      "Clasificaciones no disponibles por ahora",
    "Privacy Policy": "Política de privacidad",
    "Terms of Use": "Términos de uso",
    login_required_title: "Inicio de sesión requerido",
    login_required_message: "Inicia sesión para usar la tienda.",
    login_required_button: "Iniciar sesión",
    login_required_cancel: "Cancelar",
    play_in_browser_title: "Jugar en el navegador",
    play_in_browser_message:
      "Las compras no están disponibles en la app. Abre el juego en un navegador web con la sesión iniciada para realizar compras.",
    play_in_browser_button: "OK",
    ID: "ID",
    Version: "Versión",
    "Global Leaderboard": "Clasificación global",
    "Copied!": "¡Copiado!",
  },
  Mh = {
    "BEST VALUE": "TOP OFFRE",
    "Login to enable tournaments": "Connecte-toi pour activer le classement",
    "Login to crazy games": "Se connecter à CrazyGames",
    "Leaderboards not currently available":
      "Classements actuellement indisponibles",
    "Privacy Policy": "Politique de confidentialité",
    "Terms of Use": "Conditions d’utilisation",
    login_required_title: "Connexion requise",
    login_required_message: "Connecte-toi pour utiliser la boutique.",
    login_required_button: "Se connecter",
    login_required_cancel: "Annuler",
    play_in_browser_title: "Jouer dans le navigateur",
    play_in_browser_message:
      "Les achats ne sont pas disponibles dans l'application. Ouvre le jeu dans un navigateur web en étant connecté pour effectuer des achats.",
    play_in_browser_button: "OK",
    ID: "ID",
    Version: "Version",
    "Global Leaderboard": "Classement mondial",
    "Copied!": "Copié !",
    "Coming soon": "À venir",
    "An ad could not be shown. Try again later!":
      "Une annonce n'a pas pu être diffusée. Réessayez plus tard!",
  },
  Bh = {
    "Login to enable tournaments": "Accedi per attivare la classifica",
    "Login to crazy games": "Accedi a CrazyGames",
    "Leaderboards not currently available":
      "Classifiche non disponibili al momento",
    "Privacy Policy": "Informativa sulla privacy",
    "Terms of Use": "Termini di utilizzo",
    login_required_title: "Accesso richiesto",
    login_required_message: "Accedi per usare il negozio.",
    login_required_button: "Accedi",
    login_required_cancel: "Annulla",
    play_in_browser_title: "Gioca nel browser",
    play_in_browser_message:
      "Gli acquisti non sono disponibili nell'app. Apri il gioco in un browser web dopo aver effettuato l'accesso per effettuare acquisti.",
    play_in_browser_button: "OK",
    ID: "ID",
    Version: "Versione",
    "Global Leaderboard": "Classifica globale",
    "Copied!": "Copiato!",
    "Coming soon": "Prossimamente",
    "An ad could not be shown. Try again later!":
      "Non è stato possibile mostrare un annuncio. Riprovare più tardi!",
  },
  Fh = {
    "Login to enable tournaments":
      "ランキングを有効にするにはログインしてください",
    "Login to crazy games": "CrazyGamesにログイン",
    "Leaderboards not currently available":
      "リーダーボードは現在利用できません",
    "Privacy Policy": "プライバシーポリシー",
    "Terms of Use": "利用規約",
    login_required_title: "ログインが必要です",
    login_required_message: "ストアを利用するにはログインしてください。",
    login_required_button: "ログイン",
    login_required_cancel: "キャンセル",
    play_in_browser_title: "ブラウザでプレイ",
    play_in_browser_message:
      "アプリ内では購入できません。購入するにはログインした状態でウェブブラウザでゲームを開いてください。",
    play_in_browser_button: "OK",
    ID: "ID",
    Version: "バージョン",
    "Global Leaderboard": "グローバルランキング",
    "Copied!": "コピーしました！",
  },
  Gh = {
    "Login to enable tournaments": "리더보드를 활성화하려면 로그인하세요",
    "Login to crazy games": "CrazyGames에 로그인",
    "Leaderboards not currently available":
      "리더보드를 현재 사용할 수 없습니다",
    "Privacy Policy": "개인정보 처리방침",
    "Terms of Use": "이용약관",
    login_required_title: "로그인 필요",
    login_required_message: "상점을 이용하려면 로그인하세요.",
    login_required_button: "로그인",
    login_required_cancel: "취소",
    play_in_browser_title: "브라우저에서 플레이",
    play_in_browser_message:
      "앱에서는 구매할 수 없습니다. 구매하려면 로그인한 상태로 웹 브라우저에서 게임을 열어 주세요.",
    play_in_browser_button: "확인",
    ID: "ID",
    Version: "버전",
    "Global Leaderboard": "글로벌 리더보드",
    "Copied!": "복사됨!",
  },
  zh = {
    "Login to enable tournaments": "Log in om de ranglijst in te schakelen",
    "Login to crazy games": "Inloggen bij CrazyGames",
    "Leaderboards not currently available":
      "Ranglijsten momenteel niet beschikbaar",
    "Privacy Policy": "Privacybeleid",
    "Terms of Use": "Gebruiksvoorwaarden",
    login_required_title: "Inloggen vereist",
    login_required_message: "Log in om de winkel te gebruiken.",
    login_required_button: "Inloggen",
    login_required_cancel: "Annuleren",
    play_in_browser_title: "Speel in de browser",
    play_in_browser_message:
      "Aankopen zijn niet beschikbaar in de app. Open het spel ingelogd in een webbrowser om aankopen te doen.",
    play_in_browser_button: "OK",
    ID: "ID",
    Version: "Versie",
    "Global Leaderboard": "Wereldwijde ranglijst",
    "Copied!": "Gekopieerd!",
  },
  jh = {
    "Login to enable tournaments": "Zaloguj się, aby włączyć ranking",
    "Login to crazy games": "Zaloguj się w CrazyGames",
    "Leaderboards not currently available": "Rankingi obecnie niedostępne",
    "Privacy Policy": "Polityka prywatności",
    "Terms of Use": "Warunki korzystania",
    login_required_title: "Wymagane logowanie",
    login_required_message: "Zaloguj się, aby korzystać ze sklepu.",
    login_required_button: "Zaloguj",
    login_required_cancel: "Anuluj",
    play_in_browser_title: "Zagraj w przeglądarce",
    play_in_browser_message:
      "Zakupy nie są dostępne w aplikacji. Otwórz grę w przeglądarce internetowej po zalogowaniu, aby dokonywać zakupów.",
    play_in_browser_button: "OK",
    ID: "ID",
    Version: "Wersja",
    "Global Leaderboard": "Ranking globalny",
    "Copied!": "Skopiowano!",
  },
  qh = {
    "Login to enable tournaments": "Inicia sessão para ativar a classificação",
    "Login to crazy games": "Iniciar sessão no CrazyGames",
    "Leaderboards not currently available":
      "Classificações indisponíveis de momento",
    "Privacy Policy": "Política de Privacidade",
    "Terms of Use": "Termos de Utilização",
    login_required_title: "Login necessário",
    login_required_message: "Faça login para usar a loja.",
    login_required_button: "Entrar",
    login_required_cancel: "Cancelar",
    play_in_browser_title: "Jogar no navegador",
    play_in_browser_message:
      "As compras não estão disponíveis na aplicação. Abre o jogo num navegador web com sessão iniciada para fazer compras.",
    play_in_browser_button: "OK",
    ID: "ID",
    Version: "Versão",
    "Global Leaderboard": "Classificação global",
    "Copied!": "Copiado!",
  },
  Vh = {
    de_DE: Nh,
    en_US: $h,
    es_ES: Uh,
    fr_FR: Mh,
    it_IT: Bh,
    ja_JP: Fh,
    ko_KR: Gh,
    nl_NL: zh,
    pl_PL: jh,
    pt_PT: qh,
  },
  No = Vh;
function Wh() {
  Hr(No),
    _r(() => {
      Hr(No);
    });
}
function Wt() {
  return "window" in globalThis ? globalThis.window : void 0;
}
function Tn(e) {
  try {
    return e();
  } catch {
    return;
  }
}
function On() {
  try {
    return Wt()?.history;
  } catch {
    return;
  }
}
function pi() {
  if (typeof performance < "u") {
    if (Number.isFinite(performance.timeOrigin))
      return Math.round(performance.timeOrigin);
    if (typeof performance.now == "function")
      return Math.round(Date.now() - performance.now());
  }
  return Date.now();
}
function Kh(e) {
  const t = e.trim();
  return t.startsWith("<%") && t.endsWith("%>");
}
const $o = new Set();
function Dt(e) {
  if (typeof document > "u") return;
  const t = document
    .querySelector(`meta[name="sg:${e}"]`)
    ?.getAttribute("content");
  if (!t) return;
  const n = t.trim();
  if (n.length !== 0) {
    if (Kh(n)) {
      $o.has(e) ||
        ($o.add(e),
        console.error(
          `Unresolved template placeholder found in <meta name="sg:${e}"> content. Replace values like <%ENVIRONMENT%> with real values before deployment.`
        ));
      return;
    }
    return n;
  }
}
const Ke = "sg:persisted-session",
  ot = `${Ke}=`;
function Rn(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const Hh = {
  read: () => {
    try {
      const e = On()?.state;
      if (!Rn(e)) return null;
      const t = e[Ke];
      return typeof t == "string" ? t : null;
    } catch {
      return null;
    }
  },
  write: (e) => {
    const t = On();
    if (t)
      try {
        const { state: n } = t;
        if (n != null && !Rn(n)) return;
        t.replaceState({ ...n, [Ke]: e }, "");
      } catch {}
  },
  clear: () => {
    const e = On();
    if (e)
      try {
        const { state: t } = e;
        if (!Rn(t) || !("sg:persisted-session" in t)) return;
        const n = { ...t };
        delete n[Ke],
          e.replaceState(Object.keys(n).length === 0 ? null : n, "");
      } catch {}
  },
};
function Uo(e) {
  return {
    read: () => {
      try {
        return Tn(e)?.getItem("sg:persisted-session") ?? null;
      } catch {
        return null;
      }
    },
    write: (t) => {
      try {
        Tn(e)?.setItem(Ke, t);
      } catch {}
    },
    clear: () => {
      try {
        Tn(e)?.removeItem(Ke);
      } catch {}
    },
  };
}
const Mo = [
  {
    read: () => {
      try {
        const e = Wt()?.name ?? "";
        return e.startsWith(ot) ? e.slice(ot.length) : null;
      } catch {
        return null;
      }
    },
    write: (e) => {
      const t = Wt();
      if (t)
        try {
          const { name: n } = t;
          (n === "" || n.startsWith(ot)) && (t.name = `${ot}${e}`);
        } catch {}
    },
    clear: () => {
      const e = Wt();
      if (e)
        try {
          e.name.startsWith(ot) && (e.name = "");
        } catch {}
    },
  },
  Uo(() => sessionStorage),
  Hh,
  Uo(() => localStorage),
];
function Xh() {
  const e = Mo.map((t) => t.read());
  for (const t of Mo) t.clear();
  for (const t of e) {
    if (t === null) continue;
    const n = Jh(t);
    if (n) return n;
  }
}
function Jh(e) {
  try {
    const t = JSON.parse(e);
    if (typeof t.id == "string" && typeof t.ttl == "number" && t.ttl >= pi()) {
      const n = typeof t.retryAttempts == "number" ? t.retryAttempts + 1 : 1;
      return { sessionId: t.id, retryAttempts: n };
    }
  } catch {}
}
function Yh() {
  const e = globalThis.SESSION;
  if (e && typeof e == "object") return e;
  const t = { retryAttempts: 0 };
  return (globalThis.SESSION = t), t;
}
function mi(e) {
  if (typeof e.timestamp == "number" && Number.isFinite(e.timestamp))
    return e.timestamp;
  const t = pi();
  return (e.timestamp = t), t;
}
function Zh(e) {
  if (e.sessionId) return e.sessionId;
  const t = Xh();
  if (t)
    return (
      (e.sessionId = t.sessionId),
      (e.retryAttempts = t.retryAttempts),
      t.sessionId
    );
  const n = za({ msecs: mi(e) });
  return (e.sessionId = n), n;
}
function gi() {
  const e = Yh();
  return (
    mi(e),
    Zh(e),
    e.environment || (e.environment = Dt("environment") ?? ""),
    e.platform || (e.platform = Dt("platform") ?? ""),
    e.gameSlug || (e.gameSlug = Dt("game-slug") ?? ""),
    e.gameVersion || (e.gameVersion = Dt("game-version") ?? ""),
    e
  );
}
function yi() {
  return gi().sessionId;
}
function Qh() {
  const e = gi();
  return {
    gameSlug: e.gameSlug,
    gameVersion: e.gameVersion,
    environment: e.environment,
    platformName: e.platform,
  };
}
function sw(e) {
  return e;
}
class L extends mt {
  constructor(t, n, r, o, s) {
    super(Z.InternalError, t, r, void 0, s),
      (this.errorCode = n),
      (this.adInfo = o);
  }
}
const E = {
    DuplicatePlacementNames: "DUPLICATE_PLACEMENT_NAMES",
    DuplicatePlacementIdsInSameAdNetwork:
      "DUPLICATE_PLACEMENT_IDS_IN_SAME_ADNETWORK",
    NonExistentFallbackPlacement: "NONEXISTENT_FALLBACK_PLACEMENT",
    FallbackPlacementCycle: "FALLBACK_PLACEMENT_CYCLE",
    MissingAdProviderForAdNetwork: "MISSING_ADPROVIDER_FOR_ADNETWORK",
    NoMatchingPlacement: "NO_MATCHING_PLACEMENT",
    InvalidAdStateTransition: "INVALID_AD_STATE_TRANSITION",
    PreloaderAlreadyActive: "PRELOADER_ALREADY_ACTIVE",
    UnexpectedAdInstanceSuccessState: "UNEXPECTED_ADINSTANCE_SUCCESS_STATE",
    UnexpectedPreloadResultType: "UNEXPECTED_PRELOAD_RESULT_TYPE",
    UnknownExceptionType: "UNKNOWN_EXCEPTION_TYPE",
    PreloadingNotFinished: "PRELOADING_NOT_FINISHED",
    PreloaderObjectExpected: "PRELOADER_OBJECT_EXPECTED",
    UnreachableCode: "UNREACHABLE_CODE",
    LastPlacementInFallbackChainDisabled:
      "LAST_PLACEMENT_IN_FALLBACK_CHAIN_DISABLED",
    ClientUnsupportedOperation: "CLIENT_UNSUPPORTED_OPERATION",
    ValidateShowParamsFailed: "VALIDATE_SHOW_PARAMS_FAILED",
    Unknown: "UNKNOWN",
  },
  ef = {
    INVALID: [p.Invalid],
    INITIAL: [p.Requesting],
    REQUESTING: [p.Requested, p.RequestFailed],
    REQUESTED: [p.Loading],
    REQUEST_FAILED: [p.Requesting],
    LOADING: [p.Loaded, p.LoadFailed],
    LOADED: [p.Showing],
    LOAD_FAILED: [p.Loading],
    SHOWING: [p.Clicked, p.Closed, p.Finished, p.ShowFailed],
    CLICKED: [],
    CLOSED: [],
    FINISHED: [],
    SHOW_FAILED: [p.Showing],
  };
class et {
  constructor(t) {
    (this._state = p.Initial), (this._retryCount = 0), (this._placement = t);
  }
  get placement() {
    return this._placement;
  }
  get state() {
    return this._state;
  }
  get retryCount() {
    return this._retryCount;
  }
  bumpRetryCount() {
    this._retryCount += 1;
  }
  resetRetryCount() {
    this._retryCount = 0;
  }
  advanceState(t) {
    return ef[this.state].includes(t) ? ((this._state = t), !0) : !1;
  }
}
class wi {}
function tf(e) {
  return e === void 0;
}
function sr(e) {
  return (t) => (tf(t) ? !0 : e(t));
}
function bi(e) {
  return Array.isArray(e);
}
function nf(e, t) {
  return (n) => !(!bi(n) || n.some((r) => !e(r)));
}
function rf(e) {
  return typeof e == "boolean";
}
function of(e) {
  return Number.isNaN(e);
}
function mn(e) {
  return typeof e == "number" && !of(e);
}
function _i(e) {
  return e !== null && typeof e == "object";
}
function Si(e, t) {
  const n = _i(e) && !bi(e) && sf(e);
  return !n || !t
    ? n
    : Object.getPrototypeOf(e) === Object.prototype &&
        Object.getOwnPropertySymbols(e).length === 0;
}
function sf(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Ei(e, t, n = !1) {
  return (r) => !(!Si(r, n) || Object.values(r).some((s) => !e(s)));
}
function gn(e) {
  return typeof e == "string";
}
const Bo = 40;
function af(e) {
  return ir(e, 1);
}
function ir(e, t) {
  if (t > Bo)
    throw new Error(`Could not validate JSON due to its depth > ${Bo}`);
  return e === 1 / 0 || e === -1 / 0
    ? !1
    : gn(e) ||
        mn(e) ||
        rf(e) ||
        e === null ||
        Ei((n) => ir(n, t + 1), void 0, !0)(e) ||
        nf((n) => ir(n, t + 1))(e);
}
function lf(e) {
  return Ei(af, void 0, !0)(e);
}
function cf(e) {
  if (!Si(e, !0)) return !1;
  const { public: t } = e;
  return sr(lf)(t);
}
function nn(e) {
  return gn(e) && !!e.trim();
}
function Pi(e, t, n) {
  return t(e) && e >= n;
}
function uf(e) {
  return mn(e) && e % 1 === 0;
}
function df(e, t) {
  return Pi(e, uf, t);
}
function Fo(e) {
  return df(e, 1);
}
const hf = [
  "constructor",
  "toString",
  "toLocaleString",
  "valueOf",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
];
function ff(e) {
  return hf.includes(e);
}
function pf(e) {
  return e == null;
}
function vi(e, t, ...n) {
  return pf(e) || !_i(e) ? !1 : (n.push(t), n.every((r) => ff(r) || r in e));
}
function mf(e) {
  return (t) => e.includes(t);
}
const gf = [
    "DbTimeoutError",
    "EnvironmentError",
    "ForbiddenError",
    "HealthCheckError",
    "HttpError",
    "InternalError",
    "InternalParameterError",
    "InvalidConfigurationError",
    "InvalidGraphQlError",
    "InvalidOperationError",
    "InvalidParameterError",
    "NotAuthorizedError",
    "NotFoundError",
    "NotSupportedError",
    "RequestTimeoutError",
    "ThirdPartyError",
    "UnknownError",
  ],
  yf = mf(gf);
function wf(e) {
  if (
    !vi(
      e,
      "message",
      "code",
      "id",
      "timestamp",
      "stack",
      "additionalInformation",
      "parentError"
    )
  )
    return !1;
  const {
    message: t,
    code: n,
    id: r,
    timestamp: o,
    stack: s,
    additionalInformation: i,
  } = e;
  return !nn(t) || !nn(n) || !Fo(r) || !Fo(o) || !sr(gn)(s) ? !1 : sr(cf)(i);
}
let bf = class extends Error {
  timestamp;
  code;
  id;
  additionalInformation;
  parentError;
  warn;
  constructor(t, n, r, o, s, i = !1, a = !1) {
    super(r),
      (this.timestamp = Date.now()),
      (this.id = mn(n) ? n : 1647962470),
      (this.code = yf(t) ? t : "UnknownError"),
      (this.additionalInformation = o),
      (this.parentError = s),
      i && (this.stack = void 0),
      (this.warn = a);
  }
  toErrorResponse() {
    const t = ar(this),
      {
        message: n,
        code: r,
        id: o,
        additionalInformation: s,
        timestamp: i,
      } = t;
    return {
      message: n,
      code: r,
      id: o,
      ...(s?.public ? { additionalInformation: s.public } : {}),
      timestamp: i,
    };
  }
  toObject() {
    return ar(this);
  }
  toString() {
    return JSON.stringify(this.toObject(), null, "  ");
  }
  valueOf() {
    return this.toObject();
  }
  [Symbol.toPrimitive](t) {
    return t === "number" ? NaN : this.toString();
  }
};
function _f(e) {
  if (e)
    return String(e)
      .split(
        `
`
      )
      .map((t) => t.trim())
      .slice(1);
}
function Sf(e) {
  const { message: t } = e || {};
  return nn(t) ? t : nn(e) ? e : Ef(e);
}
const Go = "BaseError handling issue: Error was not serializable";
function Ef(e) {
  try {
    const t = JSON.stringify(e);
    return gn(t) ? t : Go;
  } catch {
    return Go;
  }
}
function ar(e, t = 1) {
  const n = { message: Sf(e) };
  return e instanceof Error
    ? (e.stack && (n.stack = _f(e.stack)),
      wf(e)
        ? ((n.code = e.code),
          (n.id = e.id),
          (n.timestamp = e.timestamp),
          e.additionalInformation &&
            (n.additionalInformation = e.additionalInformation),
          e.parentError &&
            (n.parentError =
              t <= 10
                ? ar(e.parentError, t + 1)
                : {
                    message:
                      "Truncated further parent errors due to reaching max depth",
                  }),
          n)
        : (vi(e, "code") &&
            (n.code = `ExternalCode: ${JSON.stringify(e.code)}`),
          n))
    : n;
}
class Pf extends bf {
  constructor(t, n, r, o) {
    super("InvalidParameterError", t, n, r, o, !0, !0);
  }
  [Symbol.toStringTag] = "InvalidParameterError";
}
function vf(e, t) {
  if (!Pi(e, mn, 0)) {
    const o = Promise.reject(
      new Pf(1700561713, 'Provided "ms" value should be a positive number', {
        ms: e,
      })
    );
    return (o.cancel = () => {}), o;
  }
  let n;
  const r = new Promise((o, s) => {
    n = setTimeout(() => {
      t instanceof Error ? s(t) : o(t);
    }, e);
  });
  return (
    (r.cancel = () => {
      n && (clearTimeout(n), (n = void 0));
    }),
    r
  );
}
var If = function (e, t, n, r) {
  function o(s) {
    return s instanceof n
      ? s
      : new n(function (i) {
          i(s);
        });
  }
  return new (n || (n = Promise))(function (s, i) {
    function a(l) {
      try {
        c(r.next(l));
      } catch (h) {
        i(h);
      }
    }
    function u(l) {
      try {
        c(r.throw(l));
      } catch (h) {
        i(h);
      }
    }
    function c(l) {
      l.done ? s(l.value) : o(l.value).then(a, u);
    }
    c((r = r.apply(e, t || [])).next());
  });
};
function ut(e) {
  return If(this, void 0, void 0, function* () {
    return vf(e);
  });
}
function Fr(e, t, n) {
  return e instanceof et
    ? {
        placementName: e.placement.name,
        slotName: t ?? "unknown",
        type: e.placement.type,
        network: e.placement.network,
        placementId: e.placement.placementId,
        state: e.state,
        id: "no-id",
        adShowDelayMs: n ?? 0,
        countRetries: e.retryCount,
      }
    : {
        placementName: e.name,
        slotName: t ?? "unknown",
        type: e.type,
        network: e.network,
        placementId: e.placementId,
        state: p.Invalid,
        id: "no-id",
        adShowDelayMs: 0,
        countRetries: 0,
      };
}
function P(e, t, n, r, o) {
  return new L(e, t, n, r ? Fr(r) : void 0, o);
}
function Cf({
  id: e,
  errorCode: t,
  message: n,
  instanceOrPlacement: r,
  slotName: o,
  parentError: s,
}) {
  return new L(e, t, n, r ? Fr(r, o) : void 0, s);
}
function Af() {
  return {
    debug(...e) {
      console.debug(...e);
    },
    info(...e) {
      console.info(...e);
    },
    warn(...e) {
      console.warn(...e);
    },
    error(...e) {
      console.error(...e);
    },
  };
}
var zo = function (e, t, n, r) {
  function o(s) {
    return s instanceof n
      ? s
      : new n(function (i) {
          i(s);
        });
  }
  return new (n || (n = Promise))(function (s, i) {
    function a(l) {
      try {
        c(r.next(l));
      } catch (h) {
        i(h);
      }
    }
    function u(l) {
      try {
        c(r.throw(l));
      } catch (h) {
        i(h);
      }
    }
    function c(l) {
      l.done ? s(l.value) : o(l.value).then(a, u);
    }
    c((r = r.apply(e, t || [])).next());
  });
};
class kf {
  constructor(t, n, r, o) {
    (this.logger = r),
      (this.placement = t),
      (this.provider = n),
      (this.tracker = o),
      (this.instance = null);
  }
  startPreload() {
    return zo(this, void 0, void 0, function* () {
      if (this.instance !== null)
        this.instance.resetRetryCount(),
          this.logger.debug(
            `AdPreloader.startPreload: reusing existing AdInstance for placement: ${this.placement.name} (state: ${this.instance.state})`
          );
      else {
        this.logger.debug(
          `AdPreloader.startPreload() requesting ad '${this.placement.name}' (placement id: ${this.placement.placementId})`
        ),
          (this.instance = this.provider.newInstance(
            this.placement,
            this.logger
          ));
        try {
          this.logger.debug(
            `AdPreloader.startPreload() before provider.requestAsync() for ad '${this.placement.name}'`
          ),
            yield this.provider.requestAsync(this.instance, this.logger),
            this.logger.debug(
              `AdPreloader.startPreload() after provider.requestAsync() for ad '${this.placement.name}' (success)`
            );
        } catch (t) {
          throw (
            ((this.instance = null),
            this.logError("startPreload", "requesting", t),
            t)
          );
        }
      }
      if (
        this.instance.state === p.Requested ||
        this.instance.state === p.LoadFailed
      ) {
        this.logger.debug(
          `AdPreloader.startPreload() loading ad '${this.placement.name}' (placement id: ${this.placement.placementId})`
        );
        try {
          yield this.preloadWithRetries(this.instance, 0);
        } catch (t) {
          throw (this.logError("startPreload", "loading with retries", t), t);
        }
      } else this.logger.debug(`AdPreloader.startPreload: skipping preload because AdInstance ${this.placement.name} is in state ${this.instance.state}`);
      return (
        this.logger.debug(
          `AdPreload.startPreload: returning AdInstance ${this.placement.name} in state ${this.instance.state}`
        ),
        this.instance
      );
    });
  }
  showSucceeded() {
    this.instance
      ? (this.logger.debug(
          `AdPreload.showSucceeded() called for AdInstance ${this.placement.name} in state ${this.instance.state}`
        ),
        (this.instance = null))
      : this.logger.debug(
          `AdPreload.showSucceeded(): instance is already null (for ${this.placement.name})`
        );
  }
  preloadWithRetries(t, n) {
    return zo(this, void 0, void 0, function* () {
      var r, o;
      try {
        this.logger.debug(
          `AdPreloader.startPreload() before provider.loadAsync() for ad '${this.placement.name}'`
        ),
          yield this.provider.loadAsync(t, this.logger),
          this.logger.debug(
            `AdPreloader.startPreload() after provider.loadAsync() for ad '${this.placement.name}' (success)`
          );
      } catch (s) {
        const i = n + 1;
        if (
          (t.bumpRetryCount(),
          this.logError("preloadWithRetries", "load attempt", s),
          (o = (r = this.tracker).onDebug) === null ||
            o === void 0 ||
            o.call(r, "AdPreloaderError", s),
          s instanceof L && this.shouldRetry(s, i))
        ) {
          const a = this.getRetryDelayMs(s, i);
          this.logger.debug(
            `AdPreloader.preloadWithRetries(): retrying ad '${this.placement.name}' after failed loading (delayMs: ${a}, nextRetryCount: ${i})`
          ),
            yield ut(a),
            yield this.preloadWithRetries(t, i);
        } else throw s;
      }
    });
  }
  shouldRetry(t, n) {
    return this.placement.shouldRetry !== void 0
      ? this.placement.shouldRetry(t.errorCode, n)
      : this.provider.shouldRetry(t.errorCode, n);
  }
  getRetryDelayMs(t, n) {
    return this.placement.retryDelayMs !== void 0
      ? this.placement.retryDelayMs(t.errorCode, n)
      : this.provider.retryDelayMs(t.errorCode, n);
  }
  logError(t, n, r) {
    r instanceof L
      ? this.logger.info(
          `AdPreloader.${t}(): failed ${n} for ad '${this.placement.name}' (placementId: ${this.placement.placementId}) with: `,
          r
        )
      : this.logger.warn(
          `AdPreloader.${t}(): unknown exception during ${n} for ad '${this.placement.name}' (placementId: ${this.placement.placementId}): `,
          r
        );
  }
}
var Lt = function (e, t, n, r) {
  function o(s) {
    return s instanceof n
      ? s
      : new n(function (i) {
          i(s);
        });
  }
  return new (n || (n = Promise))(function (s, i) {
    function a(l) {
      try {
        c(r.next(l));
      } catch (h) {
        i(h);
      }
    }
    function u(l) {
      try {
        c(r.throw(l));
      } catch (h) {
        i(h);
      }
    }
    function c(l) {
      l.done ? s(l.value) : o(l.value).then(a, u);
    }
    c((r = r.apply(e, t || [])).next());
  });
};
const xn = 8,
  Tf = 250;
class Ii {
  constructor(t) {
    this.waitPreloadTimeoutMs = 2e4;
    const {
      placements: n,
      providers: r,
      logger: o = Af(),
      tracker: s = {},
    } = t;
    (this.items = []),
      (this.logger = o),
      (this.tracker = s),
      t.waitPreloadTimeoutMs !== void 0 &&
        (this.waitPreloadTimeoutMs = t.waitPreloadTimeoutMs),
      n.map((c) => c.name).some((c, l, h) => l !== h.indexOf(c)) &&
        this.throwAdError({
          id: 1740755583,
          msg: "placement names must be unique",
          errorCode: E.DuplicatePlacementNames,
        });
    const a = (c, l) =>
      c.placementId === l.placementId && c.network === l.network;
    n.some((c, l, h) => l !== h.findIndex((g) => a(c, g))) &&
      this.throwAdError({
        id: 1740755595,
        msg: "placement ids must be unique within same AdNetwork",
        errorCode: E.DuplicatePlacementIdsInSameAdNetwork,
      }),
      (this.items = n.map((c) => {
        const l = r.find((h) => h.getAdNetwork() === c.network);
        return (
          l === void 0 &&
            this.throwAdError({
              id: 1740755605,
              msg: `no AdProvider for AdNetwork ${c.network}`,
              errorCode: E.MissingAdProviderForAdNetwork,
            }),
          {
            busy: !1,
            disabled: !1,
            placement: Object.assign({}, c),
            provider: l,
            preloader: new kf(Object.assign({}, c), l, o, s),
            preloadResult: null,
          }
        );
      })),
      this.items.forEach((c) => {
        let l = 0,
          h = c.placement;
        for (; l < xn && h.fallbackPlacementName; l += 1) {
          const g = this.findPlacement(h.fallbackPlacementName);
          g !== void 0
            ? (h = g)
            : this.throwAdError({
                id: 1740755621,
                msg: `non-existent fallback placement name: ${h.fallbackPlacementName}`,
                errorCode: E.NonExistentFallbackPlacement,
              });
        }
        l === xn &&
          this.throwAdError({
            id: 1740755630,
            msg: "fallback placement cycle detected",
            errorCode: E.FallbackPlacementCycle,
          });
      }),
      this.logger.info(
        "AdFlow.constructor(): AdFlow object successfully setup."
      );
  }
  hasPlacement(t) {
    return this.findItem(t) !== void 0;
  }
  isPlacementDisabled(t) {
    var n;
    return (n = this.findItem(t)) === null || n === void 0
      ? void 0
      : n.disabled;
  }
  isPlacementIdle(t) {
    const n = this.findItem(t);
    return n ? !n.busy : void 0;
  }
  findPlacement(t) {
    const n = this.findItem(t);
    return n !== void 0 ? Object.assign({}, n.placement) : void 0;
  }
  peekPreloadResult(t) {
    const n = this.findItem(t);
    return n ? n.preloadResult : null;
  }
  preload(t) {
    this.logger.info(`AdFlow.preload() called for placement: ${t}`);
    const n = this.findItem(t);
    n === void 0 &&
      this.throwAdError({
        id: 1740755654,
        msg: `AdFlow.show(): no matching placement for '${t}'`,
        errorCode: E.NoMatchingPlacement,
      }),
      n.busy
        ? this.logger.debug(
            `AdFlow.preload() skip redundant preload for: ${n.placement.name}`
          )
        : this.startPreloadItem(n).catch((r) => {
            this.logger.error(
              "AdFlow.preload(): startPreloadItem() failed with: ",
              r
            );
          });
  }
  show(t) {
    return Lt(
      this,
      arguments,
      void 0,
      function* ({
        placementName: n,
        slotName: r = n,
        userTrackingInfo: o,
        providerShowParams: s,
      }) {
        var i, a, u, c;
        this.logger.info(
          `AdFlow.show() called (placement: ${n}, slotName: ${r})`
        );
        let l = this.findItem(n);
        l === void 0 &&
          this.throwAdError({
            id: 1740755684,
            msg: `AdFlow.show(): no matching placement for '${n} (slotName: ${r})'`,
            errorCode: E.NoMatchingPlacement,
          });
        const h = ja();
        this.logger.debug(
          `AdFlow.show(): using placementId ${l.placement.placementId} and adId ${h}`
        );
        for (let g = 0; g < xn; g += 1) {
          if (l.disabled) {
            const _ = this.findItem(l.placement.fallbackPlacementName);
            _ === void 0 &&
              this.throwAdError({
                id: 1740755692,
                instanceOrPlacement: l.placement,
                slotName: r,
                msg: `AdFlow.show(): last placement in fallback chain disabled (placement: ${n}, slotName: ${r})`,
                errorCode: E.LastPlacementInFallbackChainDisabled,
              }),
              (l = _);
          }
          const w = s ? s[l.placement.network] : void 0;
          l.provider.validateShowParams(w) ||
            this.throwAdError({
              id: 1752674660,
              instanceOrPlacement: l.placement,
              slotName: r,
              msg: `provider.validateShowParams() failed (placement: ${l.placement.name}, slotName: ${r})`,
              errorCode: E.ValidateShowParamsFailed,
            });
          try {
            const _ = yield this.showInternal(l, r, w);
            return (
              (_.id = h),
              this.shouldTrackEvents(l) &&
                ((a = (i = this.tracker).onSucceeded) === null ||
                  a === void 0 ||
                  a.call(i, _, o)),
              _
            );
          } catch (_) {
            if (
              (_ instanceof L &&
                (_.errorCode === E.ClientUnsupportedOperation &&
                  (this.logger.warn(
                    `AdFlow.show(): got CLIENT_UNSUPPORTED_OPERATION for '${n}, disabling all placements of ad network '${l.placement.network}`
                  ),
                  this.disablePlacementsOfAdNetwork(l.placement.network)),
                _.adInfo !== void 0 && (_.adInfo.id = h),
                this.shouldTrackEvents(l) &&
                  ((c = (u = this.tracker).onFailed) === null ||
                    c === void 0 ||
                    c.call(u, _, o))),
              (l = this.findItem(l.placement.fallbackPlacementName)),
              l === void 0)
            )
              throw _;
          }
        }
        this.throwAdError({
          id: 1740755706,
          msg: `AdFlow.show(): unreachable code reached (placementName: ${n}, slotName: ${r}`,
          errorCode: E.UnreachableCode,
        });
      }
    );
  }
  showInternal(t, n, r) {
    return Lt(this, void 0, void 0, function* () {
      this.logger.debug(
        `AdFlow.showInternal() called (placement: ${t.placement.name}, slotName ${n}, params: `,
        r
      ),
        t.busy ||
          this.startPreloadItem(t).catch((i) => {
            this.logger.error(
              "AdFlow.showInternal(): startPreloadItem() failed with ",
              i
            );
          });
      let o = 0;
      t.preloadResult === null &&
        (o = yield this.waitForPreloadResultOrTimeout(t));
      let s;
      if (t.preloadResult === null)
        this.throwAdError({
          id: 1740755720,
          instanceOrPlacement: t.placement,
          slotName: n,
          msg: `AdFlow.showInternal(): preloading not finished yet (placement: ${t.placement.name}, slotName: ${n})`,
          errorCode: E.PreloadingNotFinished,
        });
      else if (t.preloadResult instanceof L) {
        const i = t.preloadResult;
        throw (
          (this.logger.warn(
            `AdFlow.showInternal(): preloading failed with '${i.message}' (placement: ${t.placement.name}, slotName: ${n})`
          ),
          this.concludePreload(t),
          i.adInfo !== void 0 && (i.adInfo.slotName = n),
          i)
        );
      } else
        t.preloadResult instanceof et
          ? (this.logger.debug(
              `AdFlow.showInternal(): ad is ready to show (placement: ${t.placement.name}, slotName: ${n})`
            ),
            (s = t.preloadResult),
            this.concludePreload(t))
          : (this.concludePreload(t),
            this.throwAdError({
              id: 1740755799,
              instanceOrPlacement: t.placement,
              slotName: n,
              msg: `AdFlow.showInternal(): Unexpected preload result (placement: ${t.placement.name}, slotName: ${n}) (can't happen)`,
              errorCode: E.UnexpectedPreloadResultType,
            }));
      try {
        yield t.provider.showAsync(s, this.logger, r);
      } catch (i) {
        if (
          (this.logger.warn(
            `AdFlow.showInternal() provider.showAsync() failed (placement: ${t.placement.name}, slotName: ${n}), error: `,
            i
          ),
          i instanceof L)
        )
          throw (i.adInfo !== void 0 && (i.adInfo.slotName = n), i);
        this.throwAdError({
          id: 1740755818,
          instanceOrPlacement: s,
          slotName: n,
          msg: "unknown exception thrown in showAsync()",
          errorCode: E.UnknownExceptionType,
          parentError: i,
        });
      }
      if (
        s.state === p.Clicked ||
        s.state === p.Closed ||
        s.state === p.Finished
      )
        return (
          this.logger.debug(
            `AdFlow.showInternal(): completed with ${s.state} (placement: ${t.placement.name}, slotName: ${n})`
          ),
          t.preloader.showSucceeded(),
          Fr(s, n, o)
        );
      this.throwAdError({
        id: 1740755831,
        instanceOrPlacement: s,
        slotName: n,
        msg: `AdFlow.showInternal(): provider.showAsync() resolved with unexpected AdState: ${s.state} (placement: ${t.placement.name}, slotName: ${n})`,
        errorCode: E.UnexpectedAdInstanceSuccessState,
      });
    });
  }
  findItem(t) {
    if (t !== void 0) return this.items.find((n) => n.placement.name === t);
  }
  startPreloadItem(t) {
    return Lt(this, void 0, void 0, function* () {
      if (t.busy) {
        this.logger.warn(
          `startPreloadItem() has been called on a busy item for placement '${t.placement.name}'`
        );
        return;
      }
      (t.busy = !0),
        this.logger.debug(
          `AdFlow.startPreload(): start preloading placement '${t.placement.name}'`
        );
      try {
        const n = yield t.preloader.startPreload();
        (t.preloadResult = n),
          this.logger.debug(
            `AdFlow.startPreload(): preloading successful for ${t.placement.name}`
          );
      } catch (n) {
        this.logger.warn(
          `AdFlow.startPreload(): preloading failed for ${t.placement.name} with: `,
          n
        ),
          n instanceof L
            ? (t.preloadResult = n)
            : (t.preloadResult = P(
                1740755365,
                E.UnknownExceptionType,
                "unknown error in startPreload",
                t.placement,
                n
              ));
      }
    });
  }
  waitForPreloadResultOrTimeout(t) {
    return Lt(this, void 0, void 0, function* () {
      this.logger.debug(
        `AdFlow.waitForPreloadResultOrTimeout() for '${t.placement.name}' entered`
      );
      const n = Tf;
      let r = 0;
      for (; r < this.waitPreloadTimeoutMs && t.preloadResult === null; )
        (r += n), yield ut(n);
      return (
        t.preloadResult === null
          ? this.logger.warn(
              `AdFlow.waitForPreloadResultOrTimeout() for '${t.placement.name}': timed out after ${r}ms`
            )
          : this.logger.debug(
              `AdFlow.waitForPreloadResultOrTimeout() for '${t.placement.name}': result available after ${r}ms`
            ),
        r
      );
    });
  }
  concludePreload(t) {
    (t.busy = !1), (t.preloadResult = null);
  }
  disablePlacementsOfAdNetwork(t) {
    this.items.forEach((n) => {
      n.placement.network === t && (n.disabled = !0);
    });
  }
  throwAdError({
    id: t,
    errorCode: n,
    instanceOrPlacement: r,
    slotName: o,
    msg: s,
    parentError: i,
  }) {
    throw (
      (this.logger.warn(s),
      Cf({
        id: t,
        errorCode: n,
        instanceOrPlacement: r,
        slotName: o,
        message: s,
        parentError: i,
      }))
    );
  }
  shouldTrackEvents(t) {
    return t.placement.shouldTrackEvents !== void 0
      ? t.placement.shouldTrackEvents()
      : t.provider.shouldTrackEvents();
  }
}
function Of(e) {
  return Array.isArray(e);
}
function Ci(e, t, n) {
  return !(!Of(e) || e.some((r) => !t(r)));
}
function Ge(e) {
  return typeof e == "function";
}
function Rf(e) {
  return typeof e == "string";
}
function Ye(e) {
  return Rf(e) && !!e.trim();
}
function xf(e) {
  return Number.isNaN(e);
}
function Dn(e) {
  return typeof e == "number" && !xf(e);
}
function dt(e) {
  return !e || !Df(e) ? !1 : Ci(Object.keys(e), Ye);
}
function Df(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Lf(e) {
  return e === void 0;
}
function X(e) {
  return (t) => (Lf(t) ? !0 : e(t));
}
var Ln = function (e, t, n, r) {
  function o(s) {
    return s instanceof n
      ? s
      : new n(function (i) {
          i(s);
        });
  }
  return new (n || (n = Promise))(function (s, i) {
    function a(l) {
      try {
        c(r.next(l));
      } catch (h) {
        i(h);
      }
    }
    function u(l) {
      try {
        c(r.throw(l));
      } catch (h) {
        i(h);
      }
    }
    function c(l) {
      l.done ? s(l.value) : o(l.value).then(a, u);
    }
    c((r = r.apply(e, t || [])).next());
  });
};
class ht extends wi {
  constructor(t) {
    super(), (this.onShowAsync = t.onShowAsync);
  }
  getAdNetwork() {
    return ht.adNetwork;
  }
  newInstance(t, n) {
    return new et(t);
  }
  requestAsync(t, n) {
    return Ln(this, void 0, void 0, function* () {
      if (!t.advanceState(p.Requesting))
        throw P(
          1740754670,
          E.InvalidAdStateTransition,
          "FallthroughAdProvider.requestAsync(): invalid ad state transition",
          t
        );
      t.advanceState(p.Requested);
    });
  }
  loadAsync(t, n) {
    return Ln(this, void 0, void 0, function* () {
      if (!t.advanceState(p.Loading))
        throw P(
          1740754683,
          E.InvalidAdStateTransition,
          "FallthroughAdProvider.loadAsync(): invalid ad state transition",
          t
        );
      t.advanceState(p.Loaded);
    });
  }
  showAsync(t, n, r) {
    return Ln(this, void 0, void 0, function* () {
      if (!t.advanceState(p.Showing))
        throw P(
          1740754629,
          E.InvalidAdStateTransition,
          "FallthroughAdProvider.showAsync(): invalid ad state transition",
          t
        );
      const o = yield this.onShowAsync(t, r);
      if (!t.advanceState(o))
        throw P(
          1740754653,
          E.InvalidAdStateTransition,
          "FallthroughAdProvider.showAsync(): invalid ad state transition",
          t
        );
    });
  }
  shouldRetry(t, n) {
    return !1;
  }
  retryDelayMs(t, n) {
    return 100;
  }
  shouldTrackEvents() {
    return !1;
  }
  validateShowParams(t) {
    return !0;
  }
}
ht.adNetwork = un("fallthrough");
var rn;
(function (e) {
  (e.NoRewardedAds = "no_rewarded_ads"),
    (e.NoLivesFlow = "no_lives_flow"),
    (e.SagaMapIcon = "saga_map_icon"),
    (e.IconPictureCombo = "icon_picture_combo"),
    (e.AtLoginImage = "at_login_image"),
    (e.AtLoginVideo = "at_login_video"),
    (e.HorizontalBanner = "horizontal_banner"),
    (e.VerticalBanner = "vertical_banner"),
    (e.InterstitialReplacement = "interstitial_replacement"),
    (e.NoInterstitialAd = "no_interstitial_ad"),
    (e.AfterGameLost = "after_game_lost"),
    (e.EndOfContent = "end_of_content");
})(rn || (rn = {}));
var Q;
(function (e) {
  (e.Icon = "icon"),
    (e.Video = "video"),
    (e.Portrait = "portrait"),
    (e.Landscape = "landscape"),
    (e.Image = "image");
})(Q || (Q = {}));
function Ai(e) {
  return e.type === Q.Video;
}
function ki(e) {
  return (
    e.type === Q.Icon ||
    e.type === Q.Landscape ||
    e.type === Q.Portrait ||
    e.type === Q.Image
  );
}
function Nf(e) {
  return dt(e) && X(Ye)(e.location) && X(Ye)(e.tocFileName);
}
function $f(e) {
  return dt(e) && Ci(e.assets, Ye);
}
var Nt = function (e, t, n, r) {
  function o(s) {
    return s instanceof n
      ? s
      : new n(function (i) {
          i(s);
        });
  }
  return new (n || (n = Promise))(function (s, i) {
    function a(l) {
      try {
        c(r.next(l));
      } catch (h) {
        i(h);
      }
    }
    function u(l) {
      try {
        c(r.throw(l));
      } catch (h) {
        i(h);
      }
    }
    function c(l) {
      l.done ? s(l.value) : o(l.value).then(a, u);
    }
    c((r = r.apply(e, t || [])).next());
  });
};
class ft {
  static loadCampaignAssets(t, n, r) {
    return Nt(this, void 0, void 0, function* () {
      this.bundledAssetsInfo === void 0 &&
        (this.bundledAssetsInfo = yield this.loadAssetBundlingTableOfContent(
          n,
          r
        ));
      const o = [];
      t.forEach((s) => {
        if (!this.assetsCache.has(s.src)) {
          if (Ai(s)) {
            o.push(this.preloadVideoAsset(s, r));
            return;
          }
          if (ki(s)) {
            o.push(this.preloadImageAsset(s, r));
            return;
          }
          r.warn(
            `XPromoAssetsLoader.loadCampaignAssets(): unknown asset type "${s.type}" for asset ${s.src}`
          );
        }
      }),
        yield Promise.all(o);
    });
  }
  static getAssetSrc(t) {
    const n = this.assetsCache.get(t);
    return n ? n.src : t;
  }
  static loadAssetBundlingTableOfContent(t, n) {
    return Nt(this, void 0, void 0, function* () {
      var r, o, s;
      if ((r = t?.disabled) !== null && r !== void 0 ? r : !1) return null;
      const a =
          (o = t?.location) !== null && o !== void 0 ? o : "cross-promo-assets",
        u =
          (s = t?.tocFileName) !== null && s !== void 0
            ? s
            : "cross-promo-toc.json",
        c = `${a}/${u}`;
      try {
        const l = yield fetch(c);
        if (!l.ok)
          return (
            n.warn(
              `XPromoAssetsLoader.loadAssetBundlingTableOfContent: fetch(${c}) returned with status ${l.status}`
            ),
            null
          );
        const h = yield l.json();
        return $f(h)
          ? { tableOfContent: h, location: a }
          : (n.warn(
              `XPromoAssetsLoader.loadAssetBundlingTableOfContent: fetch(${c}) response is not a valid XPromoBundledAssetsTOC`
            ),
            null);
      } catch (l) {
        return (
          n.warn(
            `XPromoAssetsLoader.loadAssetBundlingTableOfContent: fetch(${c}) failed with error: `,
            l
          ),
          null
        );
      }
    });
  }
  static preloadVideoAsset(t, n) {
    return Nt(this, void 0, void 0, function* () {
      const r = document.createElement("video"),
        o = new Promise((s, i) => {
          r.addEventListener("canplaythrough", () => {
            s(r);
          }),
            r.addEventListener("error", () => {
              this.assetsCache.delete(t.src), i();
            });
        });
      return (
        (r.src = this.getAssetUrl(t.src, n)),
        n.debug(
          `XPromoAssetsLoader.preloadVideoAsset: preloading video ${r.src}`
        ),
        this.assetsCache.set(t.src, r),
        o
      );
    });
  }
  static preloadImageAsset(t, n) {
    return Nt(this, void 0, void 0, function* () {
      const r = document.createElement("img"),
        o = new Promise((s, i) => {
          r.addEventListener("load", () => {
            s(r);
          }),
            r.addEventListener("error", () => {
              this.assetsCache.delete(t.src), i();
            });
        });
      return (
        (r.src = this.getAssetUrl(t.src, n)),
        n.debug(
          `XPromoAssetsLoader.preloadVideoAsset: preloading image ${r.src}`
        ),
        this.assetsCache.set(t.src, r),
        o
      );
    });
  }
  static getAssetUrl(t, n) {
    if (!this.bundledAssetsInfo)
      return (
        n.debug(
          `XPromoAssetsLoader: xpromo asset bundles not configured, using original url ${t}`
        ),
        t
      );
    const r = t.split("/").pop();
    if (r === void 0)
      throw new Le(
        1755087951,
        `Failed to extract filename from xpromo asset url ${t}`,
        { src: t }
      );
    if (this.bundledAssetsInfo.tableOfContent.assets.includes(r)) {
      const o = `${this.bundledAssetsInfo.location}/${r}`;
      return n.debug(`XPromoAssetsLoader: using bundled asset url: ${o}`), o;
    }
    return (
      n.debug(
        `XPromoAssetsLoader: asset file ${r} not bundled, using original url ${t}`
      ),
      t
    );
  }
}
ft.assetsCache = new Map();
ft.bundledAssetsInfo = void 0;
class Uf {
  get isValid() {
    return this._isValid;
  }
  get validationStatus() {
    return this._validationStatus;
  }
  constructor(t) {
    (this._isValid = !1), (this._validationStatus = {}), (this.campaign = t);
  }
  eval(t) {
    return (
      (this._validationStatus = {}),
      (this._isValid = !0),
      this.evaluatePlacementId(t.placementId),
      this.campaign.segmentFilter &&
        this.evaluateSegmentRules(
          t.playerStateData,
          this.campaign.segmentFilter
        ),
      this._isValid
    );
  }
  evaluateSegmentRules(t, n) {
    (this._validationStatus.segmentFilter = !0),
      this.evaluateSegmentRule(t.newPlayer, n.newPlayer),
      this.evaluateSegmentRule(t.payingPlayer, n.payingPlayer),
      this.evaluateSegmentRule(t.acquiredPlayer, n.acquiredPlayer);
  }
  evaluateSegmentRule(t, n) {
    n &&
      t &&
      ((this._isValid = !1), (this._validationStatus.segmentFilter = !1));
  }
  evaluatePlacementId(t) {
    const n = this.campaign.placeholder === t;
    (this._validationStatus.placementId = n),
      (this._isValid = this._isValid && n);
  }
}
const Y = {
  XPromoAdCampaignIsNull: "XPROMO_ADCAMPAIGN_IS_NULL",
  XPromoPlayerNotInitialized: "XPROMO_PLAYER_NOT_INITIALIZED",
  XPromoPlayerInitializationError: "XPROMO_PLAYER_INITIALIZATION_ERROR",
  XPromoCampaignsNotFound: "XPROMO_CAMPAIGNS_NOT_FOUND",
  XPromoCampaignAssetsEmpty: "XPROMO_CAMPAIGN_ASSETS_EMPTY",
  XPromoUnknownBackendError: "XPROMO_UNKNOWN_BACKEND_ERROR",
  XPromoNoValidCampaignsFound: "XPROMO_NO_VALID_CAMPAIGNS_FOUND",
  XPromoPlayerShowAsyncFailed: "XROMO_PLAYER_SHOW_ASYNC_FAILED",
};
var Mf = function (e, t, n, r) {
  function o(s) {
    return s instanceof n
      ? s
      : new n(function (i) {
          i(s);
        });
  }
  return new (n || (n = Promise))(function (s, i) {
    function a(l) {
      try {
        c(r.next(l));
      } catch (h) {
        i(h);
      }
    }
    function u(l) {
      try {
        c(r.throw(l));
      } catch (h) {
        i(h);
      }
    }
    function c(l) {
      l.done ? s(l.value) : o(l.value).then(a, u);
    }
    c((r = r.apply(e, t || [])).next());
  });
};
class _t {
  constructor(t, n) {
    (this.lastReturnedCampaignIndex = -1),
      (this.options = Object.assign(Object.assign({}, _t.defaultOptions), t)),
      (this.httpClient = n);
  }
  isValidCampaign(t, n, r) {
    const o = new Uf(t);
    return (
      o.eval({
        placementId: n,
        playerStateData: this.options.getPlayerState(),
      }),
      r &&
        (r.debug(
          `XPromoCampaignProvider.isValidCampaign(): Validity of campaign "${t.name}" is "${o.isValid}", because:`
        ),
        Object.entries(o.validationStatus).forEach(([s, i]) => {
          r.debug(`XPromoCampaignProvider.isValidCampaign(): ${s} -> ${i}`);
        })),
      o.isValid
    );
  }
  getNextCampaign(t, n) {
    return Mf(this, void 0, void 0, function* () {
      const o = (yield this.httpClient.getCampaigns()).filter((a) =>
        this.isValidCampaign(a, t, n)
      );
      if (o.length === 0)
        throw P(
          1740755875,
          Y.XPromoNoValidCampaignsFound,
          "XPromoHTTPClient.fetchCampaigns(): x-promo backend did not return any valid campaign"
        );
      const s = (this.lastReturnedCampaignIndex + 1) % o.length,
        i = o[s];
      return (this.lastReturnedCampaignIndex = s), i;
    });
  }
}
_t.defaultOptions = {
  getPlayerState: () => ({
    newPlayer: !1,
    payingPlayer: !1,
    acquiredPlayer: !1,
  }),
};
const Bf = "https://cross-promo.softgames.com";
var jo = function (e, t, n, r) {
  function o(s) {
    return s instanceof n
      ? s
      : new n(function (i) {
          i(s);
        });
  }
  return new (n || (n = Promise))(function (s, i) {
    function a(l) {
      try {
        c(r.next(l));
      } catch (h) {
        i(h);
      }
    }
    function u(l) {
      try {
        c(r.throw(l));
      } catch (h) {
        i(h);
      }
    }
    function c(l) {
      l.done ? s(l.value) : o(l.value).then(a, u);
    }
    c((r = r.apply(e, t || [])).next());
  });
};
class St {
  constructor(t) {
    (this.campaignsLastFetch = -1),
      (this.options = Object.assign(Object.assign({}, St.defaultOptions), t));
  }
  get isExpiredCampaignsCache() {
    return (
      this.campaignsLastFetch + this.options.campaignCacheExpiration <
      Date.now()
    );
  }
  fetchCampaigns() {
    return jo(this, void 0, void 0, function* () {
      if (this.campaignsCache && !this.isExpiredCampaignsCache)
        return this.campaignsCache;
      const t = this.options.endPointGetter(this.options),
        n = yield fetch(t);
      if (n.status === 404)
        throw P(
          1740755919,
          Y.XPromoCampaignsNotFound,
          `XPromoHTTPClient.fetchCampaigns(): x-promo backend returned 404 for url "${t}"`
        );
      if (!n.ok)
        throw P(
          1740755933,
          Y.XPromoUnknownBackendError,
          `XPromoHTTPClient.fetchCampaigns(): Unknown x-promo backend error "${n.body}"`
        );
      const r = yield n.json();
      return (
        (this.campaignsCache = r), (this.campaignsLastFetch = Date.now()), r
      );
    });
  }
  getCampaigns() {
    return jo(this, void 0, void 0, function* () {
      this.campaignsFetchLock && (yield this.campaignsFetchLock),
        (this.campaignsFetchLock = this.fetchCampaigns());
      let t;
      try {
        t = yield this.campaignsFetchLock;
      } finally {
        this.campaignsFetchLock = void 0;
      }
      if (t.length === 0)
        throw P(
          1740755958,
          Y.XPromoNoValidCampaignsFound,
          `XPromoHTTPClient.fetchCampaigns(): x-promo backend did not return any campaign for gameId "${this.options.gameId}"`
        );
      return t;
    });
  }
}
St.defaultOptions = {
  environment: "production",
  campaignCacheExpiration: 1 / 0,
  endPointGetter: (e) => {
    const t = Date.now(),
      n = e.environment === "production" ? "" : `${e.environment}-`;
    return `${Bf}/${n}gameConfigs/${e.gameId}.json?uid=${t}`;
  },
};
function Ff() {
  return ` 
    <div class="xpromo-player">
        <div class="xpromo-player__backdrop"></div>
        <div class="xpromo-player__content">
            <img class="xpromo-player__image"></img>
            <video class="xpromo-player__video"></video>
            <div class="xpromo-player__header"></div>
        </div>
        <div class="xpromo-player__cta-wrapper">
        </div>
    </div>`;
}
function Gf() {
  return `
        @keyframes xpromo-player-cta-pulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(0.9);
            }
            100% {
                transform: scale(1);
            }
        }

        .xpromo-player, .xpromo-player * {
            box-sizing: border-box;
        }

        .xpromo-player {
            display: flex;
            align-items: center;
            justify-content: center;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: fixed;
            z-index: 9999;
            flex-direction: column;
            font-family: Verdana, sans-serif;
        }

        .xpromo-player__backdrop {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 9993;
            background: rgba(0, 0, 0, 0.95);
        }

        .xpromo-player__header {
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            align-items: center;
            z-index: 1;
        }

        .xpromo-player__content {
            position: relative;
            z-index: 9996;
            max-width: 100%;
            max-height: 100%;
            flex: 0 1;
            cursor: pointer;
        }

        .xpromo-player__video,
        .xpromo-player__image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
        }

        .xpromo-player__cta-wrapper {
            z-index: 9995;
            width: 100%;
            max-width: 400px;
            margin: 0 auto;
            flex: 0 0;
            padding: 1.5em;
        }
    `;
}
var H;
(function (e) {
  (e.Uninitialized = "UNINITIALIZED"),
    (e.Progressing = "PROGRESSION"),
    (e.Skippable = "SKIPPABLE"),
    (e.Unskippable = "UNSKIPPABLE"),
    (e.Closable = "CLOSABLE");
})(H || (H = {}));
class zf {
  constructor() {
    (this.skipDuration = 0),
      (this.closeDuration = 0),
      (this.elapsedTime = 0),
      (this.paused = !0),
      (this.tickables = []),
      (this.lastTick = -1),
      (this.state = H.Uninitialized);
  }
  get isSkippable() {
    return this.skipDuration !== -1;
  }
  setTickables(t) {
    this.tickables = t;
  }
  start(t, n) {
    (this.skipDuration = t),
      (this.closeDuration = n),
      (this.elapsedTime = 0),
      (this.paused = !1),
      (this.state = H.Progressing),
      this.tick(0);
  }
  pause() {
    this.paused = !0;
  }
  stop() {
    (this.paused = !0),
      (this.skipDuration = 0),
      (this.closeDuration = 0),
      (this.elapsedTime = 0),
      (this.state = H.Uninitialized);
  }
  resume() {
    (this.paused = !1), this.tick(0);
  }
  tick(t) {
    if (this.paused) return;
    const n = Date.now(),
      r = t !== void 0 ? t : n - this.lastTick;
    (this.lastTick = n),
      (this.elapsedTime = Math.min(this.elapsedTime + r, this.closeDuration));
    const o = Math.min(1, this.elapsedTime / this.closeDuration),
      s = this.isSkippable
        ? Math.min(1, this.elapsedTime / this.skipDuration)
        : o;
    this.tickables.forEach((i) => {
      i.tick && i.tick(s, o);
    }),
      this.state === H.Progressing &&
        s >= 1 &&
        (this.isSkippable
          ? (this.callSkippablesHook("onCanSkip"), (this.state = H.Skippable))
          : (this.state = H.Unskippable)),
      (this.state === H.Skippable || this.state === H.Unskippable) &&
        o >= 1 &&
        (this.callSkippablesHook("onCanClose"), (this.state = H.Closable)),
      requestAnimationFrame(() => {
        this.tick();
      });
  }
  callSkippablesHook(t) {
    this.tickables.forEach((n) => {
      const r = n[t];
      r !== void 0 && r.call(n);
    });
  }
  getState() {
    return this.state;
  }
}
class Ti {
  addElement(t, n) {
    if (this.rootElement) return this.rootElement;
    const r = document.createElement("DIV");
    return (
      (r.innerHTML = t),
      (this.rootElement = r.children[0]),
      (n ?? document.body).appendChild(this.rootElement),
      this.rootElement
    );
  }
  addStyles(t, n) {
    return this.styleSheet
      ? this.styleSheet
      : ((this.styleSheet = document.createElement("style")),
        (this.styleSheet.innerHTML = t),
        (n ?? document.head).appendChild(this.styleSheet),
        this.styleSheet);
  }
  addClickHandlers(t) {
    if (!this.rootElement)
      throw P(
        1740755977,
        Y.XPromoPlayerInitializationError,
        "Failed when adding click handler in x-promo element. Root element has not been created yet."
      );
    (this.eventEntries = t),
      Object.entries(this.eventEntries).forEach(([n, r]) => {
        this.getElement(n).addEventListener("click", r);
      });
  }
  destroy() {
    var t, n;
    this.eventEntries &&
      Object.entries(this.eventEntries).forEach(([r, o]) => {
        this.getElement(r).removeEventListener("click", o);
      }),
      (t = this.rootElement) === null || t === void 0 || t.remove(),
      (n = this.styleSheet) === null || n === void 0 || n.remove();
  }
  getElement(t) {
    if (t === "") return this.rootElement;
    const n = this.rootElement.querySelector(t);
    if (!n)
      throw P(
        1740755986,
        Y.XPromoPlayerInitializationError,
        `Failed when adding click handler in x-promo element. Element with selector ${t} does not exist`
      );
    return n;
  }
}
class Et {
  constructor() {
    this.domHandler = new Ti();
  }
  destroy() {
    this.domHandler.destroy();
  }
}
const ze = 10,
  Kt = 12.5,
  jf = 1,
  Nn = "#ccc",
  qf = "#666",
  Vf = `
    <div class="xpromo-player__donut__wrapper">
      <svg class="xpromo-player__donut__spinner" viewBox="0 0 100 100" height="${
        ze * 2
      }" width="${ze * 2}">
        <circle class="xpromo-player__donut__spinner-bg" cx="50" cy="50" r="${
          50 - Kt / 2
        }" fill="none" stroke="${qf}" stroke-width="${Kt}"></circle>
        <path d="" class="xpromo-player__donut__spinner-fg" fill="none" stroke="${Nn}" stroke-width="${
    Kt + jf
  }"></path>
      </svg>
      <div class="xpromo-player__donut__skip-button" style="display: none">
        <svg
          style="display: block;"
          height="${ze * 2}"
          viewBox="0 0 23 23"
          width="${ze * 2}"
          fill="${Nn}">
          <polygon points="6.41,6 5,7.41 9.58,12 5,16.59 6.41,18 12.41,12" />
          <polygon points="13,6 11.59,7.41 16.17,12 11.59,16.59 13,18 19,12" />
        </svg>
      </div>
      <div class="xpromo-player__donut__close-button" style="display: none">
        <svg
          style="display: block;"
          height="${ze * 2}"
          viewBox="0 0 48 48"
          width="${ze * 2}"
          fill="${Nn}">
          <path d="m12.45 37.65-2.1-2.1 11.55-11.55-11.55-11.55 2.1-2.1 11.55 11.55 11.55-11.55 2.1 2.1-11.55 11.55 11.55 11.55-2.1 2.1-11.55-11.55z"/>
        </svg>
      </div>
    </div>
`,
  Wf = `
.xpromo-player__donut__wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
}

.xpromo-player__donut__spinner {
    margin: 5px;
}

.xpromo-player__donut__skip-button {
    color: #ddd;
    cursor: pointer;
    padding: 5px;
    border-radius: 9999px;
    background-color: rgba(0,0,0,0.3);
}

.xpromo-player__donut__close-button {
    color: #ddd;
    cursor: pointer;
    padding: 5px;
    border-radius: 9999px;
    background-color: rgba(0,0,0,0.3);
}
`;
function qo(e, t) {
  return {
    x: e * Math.cos((t * Math.PI) / 180),
    y: e * Math.sin((t * Math.PI) / 180),
  };
}
class Kf extends Et {
  constructor() {
    super(...arguments),
      (this.eventListener = new EventTarget()),
      (this.onSkipClickCallback = (t) => {
        t.stopPropagation(),
          this.eventListener.dispatchEvent(new Event("skip"));
      }),
      (this.onCloseClickCallback = (t) => {
        t.stopPropagation(),
          this.eventListener.dispatchEvent(new Event("close"));
      });
  }
  create(t) {
    this.domHandler.addStyles(Wf);
    const n = this.domHandler.addElement(Vf, t);
    this.domHandler.addClickHandlers({
      ".xpromo-player__donut__skip-button": this.onSkipClickCallback,
      ".xpromo-player__donut__close-button": this.onCloseClickCallback,
    }),
      (this.spinnerElement = n.querySelector(".xpromo-player__donut__spinner")),
      (this.spinnerPathElement = n.querySelector(
        ".xpromo-player__donut__spinner-fg"
      )),
      (this.skipButtonElement = n.querySelector(
        ".xpromo-player__donut__skip-button"
      )),
      (this.closeButtonElement = n.querySelector(
        ".xpromo-player__donut__close-button"
      )),
      (this.rootElement = n);
  }
  reset() {
    this.setProgress(0), this.revealSpinner();
  }
  tick(t) {
    this.setProgress(t);
  }
  onCanSkip() {
    this.revealSkipButton();
  }
  onCanClose() {
    this.revealCloseButton();
  }
  setProgress(t) {
    const o = 50 - Kt / 2;
    let i = 360 - (t * Math.PI * 2 * 180) / Math.PI;
    i >= 360 && (i = 359.999);
    const a = qo(o, 270),
      u = qo(o, i - 90),
      c = 50 + a.x,
      l = 50 + u.x,
      h = 50 + a.y,
      g = 50 + u.y,
      w = `M ${c} ${h} A ${o} ${o} 0 ${i > 180 ? 1 : 0} 1 ${l} ${g}`;
    this.spinnerPathElement.setAttribute("d", w);
  }
  revealSpinner() {
    (this.spinnerElement.style.display = "block"),
      (this.skipButtonElement.style.display = "none"),
      (this.closeButtonElement.style.display = "none");
  }
  revealSkipButton() {
    (this.spinnerElement.style.display = "none"),
      (this.skipButtonElement.style.display = "block"),
      (this.closeButtonElement.style.display = "none");
  }
  revealCloseButton() {
    (this.spinnerElement.style.display = "none"),
      (this.skipButtonElement.style.display = "none"),
      (this.closeButtonElement.style.display = "block");
  }
}
const Hf = 7,
  Xf = "rgba(0, 0, 0, 0)",
  Jf = "#367cef",
  Vo = 30,
  Yf = `
    <div class="xpromo-player__bar-timer">
        <div class="xpromo-player__bar-timer__fg"></div>
    </div>
`,
  Zf = `
.xpromo-player__bar-timer {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    height: ${Hf}px;
    width: 100%;
    background: ${Xf};
}

.xpromo-player__bar-timer__fg  {
    height: 100%;
    width: 0;
    background: ${Jf};
}
`;
class Qf extends Et {
  create(t) {
    this.domHandler.addStyles(Zf);
    const n = this.domHandler.addElement(Yf, t);
    (this.barForegroundElement = n.querySelector(
      ".xpromo-player__bar-timer__fg"
    )),
      (this.rootElement = n);
  }
  reset() {
    this.setProgress(0);
  }
  tick(t, n) {
    this.setProgress(n);
  }
  setProgress(t) {
    const n = (Math.floor(t * Vo) / Vo) * 100;
    this.barForegroundElement.style.width = `${n}%`;
  }
}
var Wo = function (e, t, n, r) {
  function o(s) {
    return s instanceof n
      ? s
      : new n(function (i) {
          i(s);
        });
  }
  return new (n || (n = Promise))(function (s, i) {
    function a(l) {
      try {
        c(r.next(l));
      } catch (h) {
        i(h);
      }
    }
    function u(l) {
      try {
        c(r.throw(l));
      } catch (h) {
        i(h);
      }
    }
    function c(l) {
      l.done ? s(l.value) : o(l.value).then(a, u);
    }
    c((r = r.apply(e, t || [])).next());
  });
};
const ep = `
<div class="xpromo-player__modal__wrapper">
    <div class="xpromo-player__modal__backdrop"></div>
    <div class="xpromo-player__modal">
        <p class="xpromo-player__modal__text"></p>
        <div class="xpromo-player__modal__skip"></div>
        <div class="xpromo-player__modal__dismiss"></div>
    </div>
</div>`,
  tp = `
.xpromo-player__modal__wrapper {
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    align-items: center;
    justify-content: center;
    opacity: 0;
    cursor: default;
    transition: 200ms ease opacity;
}

.xpromo-player__modal__backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.5);
}

.xpromo-player__modal__skip,
.xpromo-player__modal__dismiss {
    display: block;
    padding: 0.5rem;
    text-align: center;
    cursor: pointer;
    border-radius: 5px;
    transition: 200ms ease background-color;
}

.xpromo-player__modal__skip {
    color: #009dff;
    margin-bottom: 5px;
    background-color: rgba(0, 0, 0, 0);
}

.xpromo-player__modal__skip:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

.xpromo-player__modal__dismiss {
    color: #ffffff;
    background: #009dff;
}

.xpromo-player__modal__dismiss:hover {
    background: #007cc9;
}

.xpromo-player__modal {
    background: #ffffff;
    max-width: 30rem;
    min-width: min(100%, 25rem);
    padding: 2rem;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 8px 2px;
}

.xpromo-player__modal__text {
    color: #65676b;
    text-align: center;
    margin-bottom: 3rem;
    font-size: 16px;
}`;
var pt;
(function (e) {
  (e.Skip = "SKIP"), (e.Dismiss = "DISMISS");
})(pt || (pt = {}));
class np extends Et {
  constructor() {
    super(...arguments),
      (this.onSkipClickCallback = (t) => {
        t.stopPropagation(), this.hide(), this.modalResultResolve(pt.Skip);
      }),
      (this.onDismissClickCallback = (t) => {
        t.stopPropagation(), this.hide(), this.modalResultResolve(pt.Dismiss);
      }),
      (this.stopEventPropagation = (t) => {
        t.stopPropagation();
      });
  }
  create(t) {
    this.domHandler.addStyles(tp),
      (this.rootElement = this.domHandler.addElement(ep, t)),
      this.domHandler.addClickHandlers({
        ".xpromo-player__modal__backdrop": this.stopEventPropagation,
        ".xpromo-player__modal__skip": this.onSkipClickCallback,
        ".xpromo-player__modal__dismiss": this.onDismissClickCallback,
      });
  }
  showAsync() {
    return Wo(this, void 0, void 0, function* () {
      return (
        (this.rootElement.style.opacity = "0"),
        (this.rootElement.style.display = "flex"),
        yield ut(30),
        (this.rootElement.style.opacity = "1"),
        new Promise((t, n) => {
          this.modalResultResolve = t;
        })
      );
    });
  }
  reset() {
    this.hide();
  }
  hide() {
    return Wo(this, void 0, void 0, function* () {
      (this.rootElement.style.opacity = "0"),
        yield ut(200),
        (this.rootElement.style.display = "none");
    });
  }
}
const rp = `
<div class="xpromo-player__cta">
    <span class="xpromo-player__cta__play" style="display: inline"></span>
    <span class="xpromo-player__cta__claim" style="display: none"></span>
    <span class="xpromo-player__cta__continue" style="display: none"></span>
</div>
`,
  op = `
.xpromo-player__cta {
    display: block;
    padding: 10px;
    text-decoration: none;
    text-align: center;
    border-radius:28px;
    transition: background 300ms ease;
    width: 100%;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    user-select: none;
    animation: xpromo-player-cta-pulse 2s ease-in-out;
    animation-iteration-count: infinite;
    color: #ffffff;
    text-shadow:0px 0px 5px #0000009c;
    box-shadow: 0px 0px 10px 0px #0f5581;
    background:linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%);
    background-color:#2dabf9;
    border:1px solid #1e71a5;
}

.xpromo-player__cta:hover {
    background:linear-gradient(to bottom, #0688fa 5%, #2dabf9 100%);
    background-color:#0688fa;
}

.xpromo-player__cta:focus {
    outline: 0;
}
`;
class sp extends Et {
  constructor() {
    super(...arguments),
      (this.state = "play"),
      (this.eventListener = new EventTarget()),
      (this.onCtaClicked = () => {
        this.state === "play"
          ? this.eventListener.dispatchEvent(new Event("play"))
          : this.eventListener.dispatchEvent(new Event("continue"));
      });
  }
  create(t) {
    this.domHandler.addStyles(op);
    const n = this.domHandler.addElement(rp, t);
    this.domHandler.addClickHandlers({ "": this.onCtaClicked }),
      (this.playButton = n.querySelector(".xpromo-player__cta__play")),
      (this.claimButton = n.querySelector(".xpromo-player__cta__claim")),
      (this.continueButton = n.querySelector(".xpromo-player__cta__continue")),
      (this.rootElement = n);
  }
  reset() {
    this.setCtaState("play");
  }
  setCtaState(t) {
    switch (
      ((this.state = t),
      (this.playButton.style.display = "none"),
      (this.claimButton.style.display = "none"),
      (this.continueButton.style.display = "none"),
      t)
    ) {
      case "play":
        this.playButton.style.display = "inline";
        break;
      case "claim":
        this.claimButton.style.display = "inline";
        break;
      case "continue":
        this.continueButton.style.display = "inline";
        break;
    }
  }
}
var ip = function (e, t, n, r) {
  function o(s) {
    return s instanceof n
      ? s
      : new n(function (i) {
          i(s);
        });
  }
  return new (n || (n = Promise))(function (s, i) {
    function a(l) {
      try {
        c(r.next(l));
      } catch (h) {
        i(h);
      }
    }
    function u(l) {
      try {
        c(r.throw(l));
      } catch (h) {
        i(h);
      }
    }
    function c(l) {
      l.done ? s(l.value) : o(l.value).then(a, u);
    }
    c((r = r.apply(e, t || [])).next());
  });
};
const Ko = "15px",
  Ho = "40px",
  ap = "#fff",
  lp = `<svg
    style="display: block;"
    height="100%"
    viewBox="0 0 48 48"
    width="100%"
    class="xpromo-player__floating-close__svg"
    fill="${ap}">
    <path d="m12.45 37.65-2.1-2.1 11.55-11.55-11.55-11.55 2.1-2.1 11.55 11.55 11.55-11.55 2.1 2.1-11.55 11.55 11.55 11.55-2.1 2.1-11.55-11.55z"/>
</svg>`,
  cp = (e) => `<div class="xpromo-player__floating-close">
    ${e}
</div>`,
  up = `
.xpromo-player__floating-close {
    position: fixed;
    z-index: 9996;
    top: ${Ko};
    right: ${Ko};
    width: ${Ho};
    height: ${Ho};
    transition: 200ms ease opacity;
    cursor: pointer;
}
`;
class dp extends Et {
  constructor(t) {
    var n;
    super(),
      (this.eventListener = new EventTarget()),
      (this.closeProgress = 0),
      (this.onCloseClicked = (r) => {
        r.stopPropagation(),
          this.closeProgress < 1
            ? this.eventListener.dispatchEvent(new Event("skip"))
            : this.eventListener.dispatchEvent(new Event("close"));
      }),
      (this.onCanSkip = () =>
        ip(this, void 0, void 0, function* () {
          (this.rootElement.style.opacity = "0"),
            (this.rootElement.style.display = "block"),
            yield ut(30),
            (this.rootElement.style.opacity = "1");
        })),
      (this.view = (n = t.view) !== null && n !== void 0 ? n : lp);
  }
  create(t) {
    this.domHandler.addStyles(up);
    const n = this.domHandler.addElement(cp(this.view), t);
    this.domHandler.addClickHandlers({ "": this.onCloseClicked }),
      (this.rootElement = n);
  }
  reset() {
    (this.rootElement.style.display = "none"),
      (this.rootElement.style.opacity = "0");
  }
  tick(t, n) {
    this.closeProgress = n;
  }
}
var je = function (e, t, n, r) {
    function o(s) {
      return s instanceof n
        ? s
        : new n(function (i) {
            i(s);
          });
    }
    return new (n || (n = Promise))(function (s, i) {
      function a(l) {
        try {
          c(r.next(l));
        } catch (h) {
          i(h);
        }
      }
      function u(l) {
        try {
          c(r.throw(l));
        } catch (h) {
          i(h);
        }
      }
      function c(l) {
        l.done ? s(l.value) : o(l.value).then(a, u);
      }
      c((r = r.apply(e, t || [])).next());
    });
  },
  K;
(function (e) {
  (e.Uninitialized = "UNINITIALIZED"),
    (e.Closed = "CLOSED"),
    (e.Initializing = "INITIALIZING"),
    (e.Playing = "PLAYING"),
    (e.Paused = "PAUSED");
})(K || (K = {}));
var te;
(function (e) {
  (e.None = "NONE"), (e.Video = "VIDEO"), (e.Image = "IMAGE");
})(te || (te = {}));
var Ie;
(function (e) {
  (e.None = "NONE"),
    (e.Error = "ERROR"),
    (e.Skipped = "SKIPPED"),
    (e.Completed = "COMPLETED");
})(Ie || (Ie = {}));
const hp = {
  XPROMO_PLAY_BUTTON: "Play!",
  XPROMO_CLAIM_BUTTON: "Claim",
  XPROMO_CONTINUE_BUTTON: "Continue",
  XPROMO_LOSE_REWARD_MODAL_TEXT:
    "You are going to lose your reward if you close now",
  XPROMO_LOSE_REWARD_MODAL_CLOSE: "Return to game",
  XPROMO_LOSE_REWARD_MODAL_DISMISS: "Keep watching ad",
};
class Ce {
  get hasPlayer() {
    return this.playerState !== K.Uninitialized;
  }
  get isDOMEnvironment() {
    return typeof document < "u";
  }
  constructor(t) {
    var n, r, o, s, i;
    (this.contentDimensions = { height: 500, width: 500 }),
      (this.lastTranslation = ""),
      (this.playerState = K.Uninitialized),
      (this.currentMedia = te.None),
      (this.stopEventPropagation = (l) => {
        l.stopPropagation(),
          this.currentAdInstance &&
            this.options.playerCustomizations.onBgClick({
              event: l,
              adType: this.currentAdInstance.placement.type,
              state: this.ticker.getState(),
            });
      }),
      (this.onSkipRequest = () =>
        je(this, void 0, void 0, function* () {
          if (
            (this.ticker.pause(),
            this.currentMedia === te.Video && this.videoElement.pause(),
            (yield this.confirmationModal.showAsync()) === pt.Dismiss)
          ) {
            this.currentMedia === te.Video && this.videoElement.play(),
              this.ticker.resume();
            return;
          }
          if (!this.playerResultResolve)
            throw P(
              1740756067,
              E.UnreachableCode,
              "Failed when skipping x-promo ad. Unreachable code reached."
            );
          this.playerResultResolve(Ie.Skipped);
        })),
      (this.onCloseRequest = () =>
        je(this, void 0, void 0, function* () {
          if (!this.playerResultResolve)
            throw P(
              1740756074,
              E.UnreachableCode,
              "Failed when closing x-promo ad. Unreachable code reached."
            );
          this.playerResultResolve(Ie.Completed);
        })),
      (this.onCanClose = () => {
        var l;
        ((l = this.currentAdInstance) === null || l === void 0
          ? void 0
          : l.placement.type) === M.Rewarded
          ? this.ctaButton.setCtaState("claim")
          : this.ctaButton.setCtaState("continue");
      }),
      (this.onResize = () => {
        if (
          this.playerState === K.Closed ||
          this.playerState === K.Uninitialized
        )
          return;
        const l = this.contentDimensions.width / this.contentDimensions.height,
          h = this.contentElement.getBoundingClientRect(),
          w =
            this.rootElement.getBoundingClientRect().width /
            this.contentDimensions.width,
          _ = this.contentDimensions.height * (w < 1 ? w : 1),
          ie = h.height * l;
        (this.contentElement.style.flexBasis = `${_}px`),
          (this.contentElement.style.width = `${ie}px`);
      }),
      (this.onGameSwitchRequested = (l) =>
        je(this, void 0, void 0, function* () {
          var h;
          l.stopPropagation();
          const g = this.currentAdInstance.campaign;
          if (
            (this.ticker.pause(),
            this.currentMedia === te.Video && this.videoElement.pause(),
            yield this.options.onGameSwitch({
              originGameId: this.options.gameId,
              originPlayerId: this.options.getPlayerId(),
              targetGameId: g.targetedApp.id,
              placement: g.placeholder,
              promoReward: g.rewardable,
              extraPayload:
                (h = g.extraPayload) !== null && h !== void 0 ? h : {},
            }),
            this.ticker.resume(),
            this.currentMedia === te.Video)
          ) {
            const w = this.videoElement;
            if (
              w.currentTime === w.duration &&
              !this.options.playerCustomizations.loopVideo
            )
              return;
            w.play();
          }
        }));
    const a = Object.assign(
        Object.assign(
          {},
          Ce.defaultOptions.playerCustomizations.rewardedPlacements
        ),
        (r =
          (n = t.playerCustomizations) === null || n === void 0
            ? void 0
            : n.rewardedPlacements) !== null && r !== void 0
          ? r
          : {}
      ),
      u = Object.assign(
        Object.assign(
          {},
          Ce.defaultOptions.playerCustomizations.interstitialPlacements
        ),
        (s =
          (o = t.playerCustomizations) === null || o === void 0
            ? void 0
            : o.interstitialPlacements) !== null && s !== void 0
          ? s
          : {}
      ),
      c = Object.assign(
        Object.assign(
          Object.assign({}, Ce.defaultOptions.playerCustomizations),
          (i = t.playerCustomizations) !== null && i !== void 0 ? i : {}
        ),
        { rewardedPlacements: a, interstitialPlacements: u }
      );
    (this.options = Object.assign(
      Object.assign(Object.assign({}, Ce.defaultOptions), t),
      { playerCustomizations: c }
    )),
      (this.domHandler = new Ti()),
      (this.ticker = new zf()),
      (this.donutTimer = new Kf()),
      (this.barTimer = new Qf()),
      (this.confirmationModal = new np()),
      (this.ctaButton = new sp()),
      (this.floatingCloseButton = new dp({
        view: this.options.playerCustomizations.floatingCloseButtonView,
      }));
  }
  createPlayer(t) {
    return this.isDOMEnvironment
      ? (this.domHandler.addStyles(Gf()),
        (this.rootElement = this.domHandler.addElement(Ff())),
        this.domHandler.addClickHandlers({
          ".xpromo-player__backdrop": this.stopEventPropagation,
          ".xpromo-player__content": this.onGameSwitchRequested,
        }),
        this.preSelectElements(),
        this.donutTimer.create(this.headerElement),
        this.barTimer.create(this.contentElement),
        this.confirmationModal.create(this.contentElement),
        this.floatingCloseButton.create(this.contentElement),
        this.ctaButton.create(this.ctaWrapperElement),
        this.preSelectTranslationElements(),
        (this.playerState = K.Closed),
        this.ticker.setTickables([
          this,
          this.donutTimer,
          this.barTimer,
          this.floatingCloseButton,
        ]),
        this.donutTimer.eventListener.addEventListener(
          "skip",
          this.onSkipRequest
        ),
        this.donutTimer.eventListener.addEventListener(
          "close",
          this.onCloseRequest
        ),
        this.floatingCloseButton.eventListener.addEventListener(
          "skip",
          this.onSkipRequest
        ),
        this.floatingCloseButton.eventListener.addEventListener(
          "close",
          this.onCloseRequest
        ),
        this.ctaButton.eventListener.addEventListener(
          "play",
          this.onGameSwitchRequested
        ),
        this.ctaButton.eventListener.addEventListener(
          "continue",
          this.onCloseRequest
        ),
        window.addEventListener("resize", this.onResize),
        this)
      : (t.warn("Tried to create player in a non DOM environment"), this);
  }
  destroyPlayer() {
    var t;
    return this.playerState === K.Uninitialized
      ? this
      : (this.domHandler.destroy(),
        this.donutTimer.destroy(),
        this.confirmationModal.destroy(),
        (t = this.rootElement) === null || t === void 0 || t.remove(),
        window.removeEventListener("resize", this.onResize),
        (this.playerState = K.Uninitialized),
        this);
  }
  showAsync(t, n, r) {
    return je(this, void 0, void 0, function* () {
      var o, s;
      if (!this.isDOMEnvironment) return Ie.None;
      if (this.playerState === K.Uninitialized)
        throw P(
          1740756002,
          Y.XPromoPlayerNotInitialized,
          "XPromoPlayer.showAsync(): XPromo player has not been initialized",
          t
        );
      if (t.campaign === null)
        throw P(
          1740756012,
          Y.XPromoAdCampaignIsNull,
          "XPromoPlayer.showAsync(): XPromo ad instance campaign is null",
          t
        );
      if (t.campaign.assets.length === 0)
        throw P(
          1740756022,
          Y.XPromoCampaignAssetsEmpty,
          "XPromoPlayer.showAsync(): XPromo campaign does not contain any asset",
          t
        );
      (this.currentAdInstance = t),
        (this.playerState = K.Initializing),
        this.donutTimer.reset(),
        this.confirmationModal.reset(),
        this.ctaButton.reset(),
        this.floatingCloseButton.reset();
      const i = this.findBestCampaignAsset(t.campaign.assets, n);
      let a;
      try {
        yield this.assignCampaignAsset(i, r);
        const u = this.getTickerOptions(
          this.currentAdInstance.placement.type,
          i.type
        );
        "closeDuration" in u &&
          (u.closeDuration =
            (o = r.closeDuration) !== null && o !== void 0
              ? o
              : u.closeDuration),
          "skipDuration" in u &&
            (u.skipDuration =
              (s = r.skipDuration) !== null && s !== void 0
                ? s
                : u.skipDuration),
          this.ticker.start(u.skipDuration, u.closeDuration),
          this.revealPlayer(),
          (a = yield this.waitForPlayerResult());
      } catch {
        a = Ie.Error;
      } finally {
        this.hidePlayer();
      }
      return a;
    });
  }
  waitForPlayerResult() {
    return new Promise((t, n) => {
      this.playerResultResolve = t;
    });
  }
  preSelectElements() {
    var t, n, r, o, s;
    (this.videoElement =
      (t = this.rootElement) === null || t === void 0
        ? void 0
        : t.querySelector(".xpromo-player__video")),
      (this.imageElement =
        (n = this.rootElement) === null || n === void 0
          ? void 0
          : n.querySelector(".xpromo-player__image")),
      (this.contentElement =
        (r = this.rootElement) === null || r === void 0
          ? void 0
          : r.querySelector(".xpromo-player__content")),
      (this.headerElement =
        (o = this.rootElement) === null || o === void 0
          ? void 0
          : o.querySelector(".xpromo-player__header")),
      (this.ctaWrapperElement =
        (s = this.rootElement) === null || s === void 0
          ? void 0
          : s.querySelector(".xpromo-player__cta-wrapper"));
  }
  preSelectTranslationElements() {
    var t, n, r, o, s, i;
    (this.playButton =
      (t = this.rootElement) === null || t === void 0
        ? void 0
        : t.querySelector(".xpromo-player__cta__play")),
      (this.claimButton =
        (n = this.rootElement) === null || n === void 0
          ? void 0
          : n.querySelector(".xpromo-player__cta__claim")),
      (this.continueButton =
        (r = this.rootElement) === null || r === void 0
          ? void 0
          : r.querySelector(".xpromo-player__cta__continue")),
      (this.modalText =
        (o = this.rootElement) === null || o === void 0
          ? void 0
          : o.querySelector(".xpromo-player__modal__text")),
      (this.dismissButton =
        (s = this.rootElement) === null || s === void 0
          ? void 0
          : s.querySelector(".xpromo-player__modal__dismiss")),
      (this.skipButton =
        (i = this.rootElement) === null || i === void 0
          ? void 0
          : i.querySelector(".xpromo-player__modal__skip"));
  }
  findBestCampaignAsset(t, n) {
    const r = t.find((c) => c.type === Q.Video);
    if (r !== void 0) return r;
    const o = window.innerWidth / window.innerHeight,
      s = t.find((c) => c.type === Q.Portrait),
      i = t.find((c) => c.type === Q.Landscape),
      a = t.find((c) => c.type === Q.Image),
      u = this.options.playerCustomizations.portraitAspectRatio;
    return o < u && s
      ? s
      : o >= u && i
      ? i
      : s ||
        i ||
        a ||
        (n.warn("Unable to find a suitable asset for x-promo player"), t[0]);
  }
  getTickerOptions(t, n) {
    let r;
    switch (t) {
      case M.Interstitial:
        r = this.options.playerCustomizations.interstitialPlacements;
        break;
      case M.Rewarded:
        r = this.options.playerCustomizations.rewardedPlacements;
        break;
      default:
        throw P(1740756086, E.UnreachableCode, `Unknown placement type "${t}"`);
    }
    const o = r.skippable ? r.skipDuration : -1;
    let s;
    if (n === Q.Video)
      if (r.videoCloseDuration === "auto") {
        if (!this.videoElement)
          throw P(
            1740756099,
            E.UnreachableCode,
            "Could not find video element to extract duration from"
          );
        s = this.videoElement.duration * 1e3;
      } else s = r.videoCloseDuration;
    else s = r.imageCloseDuration;
    return { skipDuration: o, closeDuration: s };
  }
  assignCampaignAsset(t, n) {
    return je(this, void 0, void 0, function* () {
      var r;
      ki(t) &&
        ((this.currentMedia = te.Image),
        (this.imageElement.src = ft.getAssetSrc(t.src)),
        (this.imageElement.style.display = "block"),
        yield new Promise((o, s) => {
          var i, a;
          const u = () => {
              var l;
              (l = this.imageElement) === null ||
                l === void 0 ||
                l.removeEventListener("load", u),
                o();
            },
            c = () => {
              var l;
              (l = this.imageElement) === null ||
                l === void 0 ||
                l.removeEventListener("error", c),
                s();
            };
          (i = this.imageElement) === null ||
            i === void 0 ||
            i.addEventListener("load", u),
            (a = this.imageElement) === null ||
              a === void 0 ||
              a.addEventListener("error", c);
        }),
        (this.contentDimensions.width = this.imageElement.naturalWidth),
        (this.contentDimensions.height = this.imageElement.naturalHeight)),
        Ai(t) &&
          ((this.currentMedia = te.Video),
          (this.videoElement.src = ft.getAssetSrc(t.src)),
          (this.videoElement.style.display = "block"),
          (this.videoElement.volume =
            (r = n.volume) !== null && r !== void 0 ? r : 1),
          (this.videoElement.loop =
            this.options.playerCustomizations.loopVideo),
          yield this.videoElement.play(),
          (this.contentDimensions.width = this.videoElement.videoWidth),
          (this.contentDimensions.height = this.videoElement.videoHeight)),
        (this.contentElement.style.flexBasis = `${this.contentDimensions.height}px`);
    });
  }
  translatePlayer() {
    const t = this.options.getTranslations();
    t.XPROMO_PLAY_BUTTON !== this.lastTranslation &&
      ((this.playButton.innerText = t.XPROMO_PLAY_BUTTON),
      (this.claimButton.innerText = t.XPROMO_CLAIM_BUTTON),
      (this.continueButton.innerText = t.XPROMO_CONTINUE_BUTTON),
      (this.playButton.innerText = t.XPROMO_PLAY_BUTTON),
      (this.modalText.innerText = t.XPROMO_LOSE_REWARD_MODAL_TEXT),
      (this.skipButton.innerText = t.XPROMO_LOSE_REWARD_MODAL_CLOSE),
      (this.dismissButton.innerText = t.XPROMO_LOSE_REWARD_MODAL_DISMISS));
  }
  revealPlayer() {
    this.translatePlayer(),
      (this.rootElement.style.display = "flex"),
      this.onResize(),
      (this.playerState = K.Playing);
  }
  hidePlayer() {
    this.currentMedia === te.Video && this.videoElement.pause(),
      this.ticker.stop(),
      (this.rootElement.style.display = "none"),
      (this.imageElement.style.display = "none"),
      (this.videoElement.style.display = "none"),
      (this.imageElement.src = ""),
      (this.videoElement.src = ""),
      (this.currentAdInstance = void 0),
      (this.currentMedia = te.None),
      (this.playerState = K.Closed);
  }
  requestSkipOrClose() {
    return je(this, void 0, void 0, function* () {
      this.ticker.getState() === H.Skippable
        ? yield this.onSkipRequest()
        : this.ticker.getState() === H.Closable &&
          (yield this.onCloseRequest());
    });
  }
}
Ce.defaultOptions = {
  onGameSwitch: () => Promise.resolve(),
  getTranslations() {
    return hp;
  },
  playerCustomizations: {
    portraitAspectRatio: 1,
    loopVideo: !1,
    onBgClick: () => {},
    rewardedPlacements: {
      skippable: !0,
      skipDuration: 8e3,
      imageCloseDuration: 15e3,
      videoCloseDuration: "auto",
    },
    interstitialPlacements: {
      skippable: !1,
      imageCloseDuration: 8e3,
      videoCloseDuration: "auto",
    },
  },
};
class fp extends et {
  constructor() {
    super(...arguments), (this.campaign = null);
  }
}
function pp(e) {
  return !(
    !dt(e) ||
    !X(Dn)(e.closeDuration) ||
    !X(Dn)(e.skipDuration) ||
    !X(Dn)(e.volume)
  );
}
var $n = function (e, t, n, r) {
  function o(s) {
    return s instanceof n
      ? s
      : new n(function (i) {
          i(s);
        });
  }
  return new (n || (n = Promise))(function (s, i) {
    function a(l) {
      try {
        c(r.next(l));
      } catch (h) {
        i(h);
      }
    }
    function u(l) {
      try {
        c(r.throw(l));
      } catch (h) {
        i(h);
      }
    }
    function c(l) {
      l.done ? s(l.value) : o(l.value).then(a, u);
    }
    c((r = r.apply(e, t || [])).next());
  });
};
function mp(e) {
  var t, n;
  const r = (o) => new R(1755264808, `XPromoAdProvider constructor: ${o}`);
  if (!dt(e)) throw r("options not a PlainRecord");
  if (!Ye(e.gameId)) throw r("options.gameId must be a non-empty string");
  if (!X(Nf)(e.bundledAssetsConfig))
    throw r(
      "options.bundledAssetsConfig must be a valid XPromoBundledAssetsConfig"
    );
  if (
    !(
      (n =
        (t = e.bundledAssetsConfig) === null || t === void 0
          ? void 0
          : t.location) === null || n === void 0
    ) &&
    n.endsWith("/")
  )
    throw r(
      "options.bundledAssetsConfig.location must not end with a shash (/)"
    );
  if (!Ge(e.getPlayerId)) throw r("options.getPlayerId must be a function");
  if (!X(Ge)(e.getTranslations))
    throw r("options.getTranslations must be a function");
  if (!X(Ge)(e.onGameSwitch))
    throw r("options.onGameSwitch must be a function");
  if (!X(dt)(e.playerCustomizations))
    throw r("options.playerCustomizations must be a PlainRecord");
  if (!X(Ge)(e.getServerTime))
    throw r("options.getServerTime must be a function");
  if (!X(Ge)(e.getPlayerState))
    throw r("options.getPlayerState must be a function");
  if (!X(Ye)(e.environment))
    throw r("options.environment must be a non-empty string");
  if (!X(Ge)(e.endPointGetter))
    throw r("options.endPointGetter must be a function");
}
const gp = Object.assign(
  Object.assign(Object.assign({}, Ce.defaultOptions), _t.defaultOptions),
  St.defaultOptions
);
class yn extends wi {
  constructor(t) {
    super(),
      (this.maxRetries = 1),
      (this.retryDelayMillisecs = 1e3),
      mp(t),
      (this.options = Object.assign(Object.assign({}, gp), t));
    const n = new St({
      gameId: this.options.gameId,
      environment: this.options.environment,
      endPointGetter: this.options.endPointGetter,
      campaignCacheExpiration: 1 / 0,
    });
    (this.campaignProvider = new _t(
      { getPlayerState: this.options.getPlayerState },
      n
    )),
      (this.player = new Ce({
        gameId: this.options.gameId,
        getPlayerId: this.options.getPlayerId,
        getTranslations: this.options.getTranslations,
        onGameSwitch: this.options.onGameSwitch,
        playerCustomizations: this.options.playerCustomizations,
      }));
  }
  getAdNetwork() {
    return yn.adNetwork;
  }
  newInstance(t, n) {
    return new fp(t);
  }
  requestAsync(t, n) {
    return $n(this, void 0, void 0, function* () {
      if (!t.advanceState(p.Requesting))
        throw P(
          1740756118,
          E.InvalidAdStateTransition,
          "XPromoAdProvider.requestAsync(): invalid ad state transition",
          t
        );
      try {
        const r = yield this.campaignProvider.getNextCampaign(
          t.placement.placementId,
          n
        );
        if (!r)
          throw P(
            1740756127,
            Y.XPromoCampaignsNotFound,
            "XPromoAdProvider.requestAsync(): No x-promo campaigns found",
            t
          );
        t.campaign = r;
      } catch (r) {
        throw (
          (t.advanceState(p.RequestFailed),
          r instanceof L
            ? r
            : P(
                1740756134,
                E.Unknown,
                "XPromoAdProvider.requestAsync(): Unknown error while loading x-promo ads",
                t
              ))
        );
      }
      t.advanceState(p.Requested);
    });
  }
  loadAsync(t, n) {
    return $n(this, void 0, void 0, function* () {
      if (t.campaign === null)
        throw P(
          1740756142,
          Y.XPromoAdCampaignIsNull,
          "XPromoAdProvider.loadAsync(): x-promo campaign is null",
          t
        );
      if (!t.advanceState(p.Loading))
        throw P(
          1740756149,
          E.InvalidAdStateTransition,
          "XPromoAdProvider.loadAsync(): invalid ad state transition",
          t
        );
      try {
        yield ft.loadCampaignAssets(
          t.campaign.assets,
          this.options.bundledAssetsConfig,
          n
        );
      } catch (r) {
        throw (
          (t.advanceState(p.LoadFailed),
          r instanceof L
            ? r
            : P(
                1740756161,
                E.Unknown,
                "XPromoAdProvider.loadAsync(): Unknown error while preloading XPromo assets",
                t
              ))
        );
      }
      t.advanceState(p.Loaded);
    });
  }
  showAsync(t, n) {
    return $n(this, arguments, void 0, function* (r, o, s = {}) {
      if (
        (this.player.hasPlayer || this.player.createPlayer(o),
        r.campaign === null)
      )
        throw P(
          1740756168,
          Y.XPromoAdCampaignIsNull,
          "XPromoAdProvider.showAsync(): XPromo campaign is null",
          r
        );
      if (!r.advanceState(p.Showing))
        throw P(
          1740756177,
          E.InvalidAdStateTransition,
          "XPromoAdProvider.showAsync(): invalid ad state transition",
          r
        );
      try {
        const i = yield this.player.showAsync(r, o, s);
        if (i === Ie.Error)
          throw P(
            1761918504,
            Y.XPromoPlayerShowAsyncFailed,
            "XPromoPlayer.showAsync() failed",
            r
          );
        if (i === Ie.Skipped) {
          r.advanceState(p.Closed);
          return;
        }
      } catch (i) {
        throw (
          (r.advanceState(p.ShowFailed),
          i instanceof L
            ? i
            : P(
                1740756185,
                E.Unknown,
                "XPromoProvider.showAsync(): Failed to show xpromo ad. Unknown error",
                r
              ))
        );
      }
      r.advanceState(p.Finished);
    });
  }
  shouldRetry(t, n) {
    return n <= this.maxRetries;
  }
  retryDelayMs(t, n) {
    return this.retryDelayMillisecs;
  }
  shouldTrackEvents() {
    return !0;
  }
  validateShowParams(t) {
    return t === void 0 ? !0 : pp(t);
  }
}
yn.adNetwork = un("xpromo");
class Gr {
  constructor(t) {
    this.params = t;
  }
  params;
  static adNetwork = un("specialOfferFallback");
  getAdNetwork() {
    return Gr.adNetwork;
  }
  async loadAsync(t) {
    t.advanceState(p.Loading), t.advanceState(p.Loaded);
  }
  newInstance(t) {
    return new et(t);
  }
  async requestAsync(t) {
    t.advanceState(p.Requesting), t.advanceState(p.Requested);
  }
  retryDelayMs() {
    return 0;
  }
  shouldRetry() {
    return !1;
  }
  shouldTrackEvents() {
    return !0;
  }
  async showAsync(t) {
    const { displayOffer: n } = this.params;
    t.advanceState(p.Showing);
    const r = await n();
    t.advanceState(r ? p.Finished : p.Closed);
  }
  validateShowParams(t) {
    return !0;
  }
  getDebugOptions() {
    return this.params.getDebugOptions();
  }
}
class yp {
  constructor(t, n) {
    (this.offerLayout = t),
      (this.root = t.root),
      n.props({ parent: t.adCountdownSlot }),
      t.closeButton.on("pointerdown", () => {
        this.onCloseButtonClick.emit();
      }),
      t.buyButton.on("pointertap", () => {
        this.purchased || this.onBuyButtonClicked.emit();
      });
  }
  offerLayout;
  onBuyButtonClicked = new q.Signal();
  onCloseButtonClick = new q.Signal();
  purchased = !1;
  root;
  markPurchased() {
    Yt(this.offerLayout, "purchased"), (this.purchased = !0);
  }
  showCloseButton() {
    Sr({ layoutInstance: this.offerLayout, animationName: "showCloseButton" });
  }
}
class Xo extends xs {
  constructor(t) {
    super(), (this.layout = t), t.root.props({ parent: this });
  }
  layout;
  ready = !1;
  lastSecLeft = -1;
  updateTimer(t, n) {
    if (!this.ready) {
      if (n >= 1) {
        Yt(this.layout, "ready"), (this.ready = !0);
        return;
      }
      t !== this.lastSecLeft && Yt(this.layout, "notReady"),
        this.layout.circularProgressBar &&
          (this.layout.circularProgressBar.progress = n * 100),
        (this.lastSecLeft = t);
    }
  }
}
class Jo {
  constructor(t, n, r) {
    (this.view = t),
      (this.timing = n),
      (this.variableBank = r),
      r.setTextVariable("adFallbackCountdownSec", n.fulfillSeconds),
      this.refreshView(),
      this.view.pixi.ticker.add(this.updateCallback);
  }
  view;
  timing;
  variableBank;
  onShouldShowCloseButton = new q.Signal();
  elapsedMs = 0;
  lastCallback = Date.now();
  showedCloseButton = !1;
  paused = !1;
  updateCallback = () => {
    if (this.view.destroyed) {
      this.destroy();
      return;
    }
    if (this.paused) {
      this.lastCallback = Date.now();
      return;
    }
    (this.elapsedMs += Date.now() - this.lastCallback),
      (this.lastCallback = Date.now()),
      !this.showedCloseButton &&
        this.getPassedSeconds() >= this.timing.showCloseButtonSeconds &&
        (this.onShouldShowCloseButton.emit(), (this.showedCloseButton = !0)),
      this.variableBank.setTextVariable(
        "adFallbackCountdownSec",
        this.timing.fulfillSeconds - this.getPassedSeconds()
      ),
      this.refreshView(),
      this.getProgress() === 1 && this.destroy();
  };
  getPassedSeconds() {
    return Math.min(
      this.timing.fulfillSeconds,
      Math.floor(this.elapsedMs / 1e3)
    );
  }
  getProgress() {
    return Math.min(1, this.elapsedMs / 1e3 / this.timing.fulfillSeconds);
  }
  isFulfilled() {
    return this.getProgress() === 1;
  }
  refreshView() {
    this.view.destroyed ||
      this.view.updateTimer(
        Math.max(0, this.timing.fulfillSeconds - this.getPassedSeconds()),
        this.getProgress()
      );
  }
  fullfill() {
    (this.elapsedMs = this.timing.fulfillSeconds * 1e3),
      this.resume(),
      this.refreshView();
  }
  pause() {
    this.paused = !0;
  }
  resume() {
    this.paused = !1;
  }
  destroy() {
    this.view.pixi.ticker.remove(this.updateCallback);
  }
}
class wp {
  constructor(t, n) {
    (this.backstop = t),
      (this.root = t.root),
      n.props({ parent: t.adCountdownSlot }),
      t.closeButton.on("pointerdown", () => {
        this.onCloseButtonClick.emit();
      });
  }
  backstop;
  onCloseButtonClick = new q.Signal();
  root;
  showCloseButton() {
    Sr({ layoutInstance: this.backstop, animationName: "showCloseButton" });
  }
}
class bp {
  notReadyErrorCode = "FALLBACK_NOT_INITIALIZED";
  dependencies = null;
  debugForceBackstop = !1;
  createAdProvider() {
    return new Gr({
      displayOffer: () => this.displayFallbackOfferOrBackstop(),
      getDebugOptions: () => [
        {
          elements: [
            {
              type: "button",
              label: "Force backstop",
              borderColorGetter: () =>
                this.debugForceBackstop ? "#00ff00" : null,
              callback: () => {
                this.debugForceBackstop = !this.debugForceBackstop;
              },
            },
          ],
        },
      ],
    });
  }
  init(t) {
    this.dependencies = t;
  }
  async displayFallbackOfferOrBackstop() {
    if (!this.dependencies)
      throw new L(
        1769006970,
        this.notReadyErrorCode,
        "AdFallbackFeatureController not initialized"
      );
    const t = this.dependencies.shouldSkipPaidOffer(),
      n = await this.dependencies.getSpecialOffer();
    return n && !this.debugForceBackstop && !t
      ? this.openSpecialOfferFallbackPopup(this.dependencies, n)
      : this.openBackstopPopup(this.dependencies);
  }
  openSpecialOfferFallbackPopup(t, n) {
    const {
        popups: r,
        getAdCountdownCompatibleLayout: o,
        makePurchase: s,
        timing: i,
        variableBank: a,
      } = t,
      { promise: u, resolve: c } = Promise.withResolvers(),
      { layout: l, product: h } = n,
      g = new Xo(o()),
      w = new Jo(g, i, a),
      _ = new yp(l, g);
    w.onShouldShowCloseButton.connect(() => {
      _.showCloseButton();
    });
    let ie = !1;
    return (
      _.onCloseButtonClick.connect(async () => {
        this.handleOnCloseButtonClick(t, _.root, w, c);
      }),
      _.onBuyButtonClicked.connect(async () => {
        if (ie) return;
        (await s(h)) && ((ie = !0), w.fullfill(), _.markPurchased());
      }),
      r.addPopup(_),
      u
    );
  }
  async openBackstopPopup(t) {
    const {
        popups: n,
        getBackstopImage: r,
        getAdCountdownCompatibleLayout: o,
        timing: s,
        variableBank: i,
      } = t,
      { promise: a, resolve: u } = Promise.withResolvers(),
      c = new Xo(o()),
      l = new Jo(c, s, i),
      h = new wp(await r(), c);
    return (
      l.onShouldShowCloseButton.connect(() => {
        h.showCloseButton();
      }),
      h.onCloseButtonClick.connect(() => {
        this.handleOnCloseButtonClick(t, h.root, l, u);
      }),
      n.addPopup(h),
      a
    );
  }
  async handleOnCloseButtonClick(t, n, r, o) {
    const { popups: s } = t;
    r.pause(),
      r.isFulfilled() || (await this.confirmCancel(t, n))
        ? (await s.closeActivePopup(), o(r.isFulfilled()))
        : r.resume();
  }
  async confirmCancel(t, n) {
    const { promise: r, resolve: o } = Promise.withResolvers(),
      s = await t.getCancelCancelConfirmation();
    return (
      s.root.props({ parent: n }),
      s.keepWatchingButton.once("pointertap", () => {
        o(!1), s.root.destroy({ children: !0 });
      }),
      s.returnToGameButton.once("pointertap", () => {
        o(!0), s.root.destroy({ children: !0 });
      }),
      r
    );
  }
}
class _p {
  constructor(t) {
    this.fallbackOfferContext = t;
  }
  fallbackOfferContext;
  async getSpecialOffer() {
    if (!this.fallbackOfferContext) return null;
    const t = this.fallbackOfferContext.getCatalog(Ji.AdFallback, null);
    if (!t || t.length === 0) return null;
    const n = Xr.rnd.pick(t),
      r = await Yi(n);
    if (!r) return null;
    Sr({ layoutInstance: r, animationName: "Idle", loop: !0 });
    const { priceLabel: o } = r;
    return o && (o.text = n.priceLabel), { layout: r, product: n };
  }
  async getBackstopImage() {
    const t = new Jr(),
      n = Xr.rnd.pick([...Jr.raw.stateNames]);
    return Yt(t, n), Promise.resolve(t);
  }
  async getCancelConfirmation() {
    return new Zi();
  }
}
class Sp {
  popupWrapper = null;
  async addPopup(t) {
    this.popupWrapper && this.closeActivePopup();
    const n = new xs();
    (this.popupWrapper = n),
      n.props({
        parent: n.pixi.stage,
        x: this.popupWrapper.pixi.renderer.width * 0.5,
      });
    const r = new Ba().props({ parent: n });
    r.eventMode = "static";
    const o = 5e5;
    r.hitArea = new Pr(-o, -o, o * 2, o * 2);
    const s = () => {
      (n.x = Math.round(n.pixi.renderer.width * 0.5)),
        (n.y = Math.round(n.pixi.renderer.height * 0.5));
    };
    n.pixi.ticker.add(s),
      n.on("destroyed", () => {
        n.pixi.ticker.remove(s);
      }),
      this.popupWrapper.addChild(t.root);
  }
  async closeActivePopup() {
    this.popupWrapper &&
      (this.popupWrapper.destroy({ children: !0 }), (this.popupWrapper = null));
  }
}
function Ep(e) {
  const t = new _p(e?.fallbackOfferContext),
    n = new bp();
  return (
    n.init({
      getAdCountdownCompatibleLayout() {
        return new ea();
      },
      getBackstopImage() {
        return t.getBackstopImage();
      },
      getSpecialOffer() {
        return t.getSpecialOffer();
      },
      getCancelCancelConfirmation() {
        return t.getCancelConfirmation();
      },
      makePurchase(r) {
        return e.iap
          ? e.iap.makePurchase({
              product: r,
              placement: Qi.AdFallback,
              showResults: !0,
              offerImpressionId: st(),
            })
          : Promise.resolve(!1);
      },
      popups: new Sp(),
      timing: { fulfillSeconds: 10, showCloseButtonSeconds: 5 },
      variableBank: e.variableBank,
      shouldSkipPaidOffer: () => e.iap === null,
    }),
    n
  );
}
const Pp = "DEBUG_FAIL";
function Oi(e) {
  throw P(1769082972277, Pp, "Failed due to debug flag", e);
}
class lr extends yn {
  constructor(t) {
    super(t.providerOptions), (this.params = t);
  }
  params;
  skipErrorCode = "XPROMO_SKIP";
  fallbackErrorCode = "XPROMO_FALLBACK_TO_OFFER";
  shouldShow = !0;
  shouldFailDueToDebug = !1;
  async requestAsync(t, n) {
    if ((this.shouldFailDueToDebug && Oi(t), this.params.shouldSkip()))
      throw P(
        1769006190,
        this.skipErrorCode,
        "Don't show xpromo, should skip",
        t
      );
    if (t.placement.type === M.Rewarded && !this.shouldShow)
      throw (
        ((this.shouldShow = !0),
        P(
          1750947012,
          this.fallbackErrorCode,
          "Don't show xpromo, allow fallback for special offer",
          t
        ))
      );
    await super.requestAsync(t, n);
  }
  async showAsync(t, n, r) {
    await super.showAsync(t, n, r),
      t.placement.type === M.Rewarded && (this.shouldShow = !1);
  }
  getDebugOptions() {
    return [
      {
        elements: [
          {
            type: "button",
            borderColorGetter: () =>
              this.shouldFailDueToDebug ? "#00ff00" : null,
            label: "Force XPromo fail",
            callback: () => {
              this.shouldFailDueToDebug = !this.shouldFailDueToDebug;
            },
          },
        ],
      },
    ];
  }
}
function vp(e, t) {
  const n = ta();
  return new lr({
    providerOptions: {
      environment: "production",
      gameId: t,
      getPlayerId: () => e.getPlayerId(),
      getTranslations: () => ({
        XPROMO_PLAY_BUTTON: ce("XPROMO_PLAY_BUTTON"),
        XPROMO_CLAIM_BUTTON: ce("XPROMO_CLAIM_BUTTON"),
        XPROMO_CONTINUE_BUTTON: ce("XPROMO_CONTINUE_BUTTON"),
        XPROMO_LOSE_REWARD_MODAL_TEXT: ce("XPROMO_LOSE_REWARD_MODAL_TEXT"),
        XPROMO_LOSE_REWARD_MODAL_CLOSE: ce("XPROMO_LOSE_REWARD_MODAL_CLOSE"),
        XPROMO_LOSE_REWARD_MODAL_DISMISS: ce(
          "XPROMO_LOSE_REWARD_MODAL_DISMISS"
        ),
      }),
      onGameSwitch: (r) => e.onGameSwitch?.(r) ?? Promise.resolve(),
    },
    shouldSkip: () => {
      const r = !e.supportsSwitchGame(),
        o = e.isPayer(),
        {
          ads: { fallback: s },
        } = n,
        i = e.getPlatformType() === "IOS" && !s.xpromoAllowedIos,
        a = e.getPlatformType() === "ANDROID" && !s.xpromoAllowedAndroid;
      return r || o || i || a;
    },
  });
}
class Ip {
  constructor({
    enableDebugLogging: t,
    debugFn: n,
    infoFn: r,
    warnFn: o,
    errorFn: s,
  }) {
    (this.enableDebugLogging = t === void 0 ? !1 : t),
      (this.infoFn = r || console.log),
      (this.warnFn = o || console.warn),
      (this.errorFn = s || console.error),
      (this.debugFn = n || r || console.debug);
  }
  debug(...t) {
    this.enableDebugLogging && this.debugFn(...t);
  }
  info(...t) {
    this.infoFn(...t);
  }
  warn(...t) {
    this.warnFn(...t);
  }
  error(...t) {
    this.errorFn(...t);
  }
}
let Cp = class {
  constructor(t) {
    this.logger = new Ip({
      enableDebugLogging: t.debugLog,
      debugFn: t.logDebug,
      infoFn: t.logInfo,
      warnFn: t.logWarn,
      errorFn: t.logError,
    });
  }
};
const Ap = 3e3,
  kp = 20,
  Tp = 200,
  Op = !0;
var U;
(function (e) {
  (e.Success = "success"),
    (e.SendFailed = "failed"),
    (e.FailedDiscardEvents = "failed-discard-events");
})(U || (U = {}));
class Rp {
  constructor({
    flushIntervalMs: t = Ap,
    maxBatchSize: n = kp,
    discardThreshold: r = Tp,
    flushOnVisibilityChangeHidden: o = Op,
    callOnVisibilityChangeHidden: s,
    sendFunc: i,
    logger: a,
  }) {
    (this.started = !1),
      (this.eventListenerAttached = !1),
      (this.queue = []),
      (this.timerId = null),
      (this.flushInterval = t),
      (this.maxBatchSize = n),
      (this.discardThreshold = r),
      (this.flushOnVisibilityChangeHidden = o),
      (this.callOnVisibilityChangeHidden = s),
      (this.sendFunc = i),
      (this.logger = a);
  }
  start() {
    if (this.started) {
      this.logger.warn("EventBatcher.start(): EventBatcher already started!");
      return;
    }
    (this.started = !0),
      this.flushOnVisibilityChangeHidden &&
        !this.eventListenerAttached &&
        ((this.eventListenerAttached = !0),
        document.addEventListener("visibilitychange", () =>
          this.handleVisibilityChange()
        )),
      this.schedule();
  }
  running() {
    return this.started;
  }
  async stop(t = !0) {
    if (!this.started) {
      this.logger.warn("EventBatcher.stop(): EventBatcher not running.");
      return;
    }
    (this.started = !1),
      this.timerId !== null &&
        (clearTimeout(this.timerId), (this.timerId = null)),
      t && (await this.flushEvents());
  }
  addEvent(t) {
    if (this.queue.length >= this.discardThreshold) {
      this.logger.warn(
        "EventBatcher.addEvent(): discardThreshold reached, discarding new event!"
      );
      return;
    }
    this.queue.push(t),
      this.queue.length >= this.maxBatchSize &&
        this.flushEvents().catch((n) => {
          this.logger.warn(
            "EventBatcher.addEvent(): flushEvents failed with: ",
            n
          );
        });
  }
  numBatchedEvents() {
    return this.queue.length;
  }
  async flushEvents() {
    if (this.queue.length !== 0)
      try {
        const t = this.queue.splice(0, this.maxBatchSize),
          { result: n, failedEvents: r } = await this.sendFunc(t);
        n === U.SendFailed &&
          r.length !== 0 &&
          (this.queue.unshift(...r),
          this.logger.warn(
            `EventBatcher.flushEvents(): send events failed, putting ${r.length} events back into queue!`
          ));
      } catch (t) {
        this.logger.error("EventBatcher.flushEvents(): ", t);
      }
  }
  handleVisibilityChange() {
    if (this.started && document.visibilityState === "hidden") {
      if (this.callOnVisibilityChangeHidden !== void 0)
        try {
          this.callOnVisibilityChangeHidden();
        } catch (t) {
          this.logger.warn(
            "EventBatcher: exception in onVisibilityChangeHidden function: ",
            t
          );
        }
      this.flushEvents().catch((t) => {
        this.logger.warn(
          "EventBatcher.handleVisibilityChanged(): flushEvents failed with: ",
          t
        );
      });
    }
  }
  schedule() {
    this.timerId = setTimeout(() => {
      this.flushEvents()
        .then(() => this.schedule())
        .catch((t) => {
          throw t;
        });
    }, this.flushInterval);
  }
}
function le(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return;
  }
}
const xp =
  "https://ojx6tybe7d.execute-api.eu-central-1.amazonaws.com/production/trackEvents";
class Dp extends Cp {
  constructor(t) {
    super(t);
    const { apiKey: n, url: r = xp, sendWithBeacon: o, batching: s = {} } = t;
    (this.url = r), (this.apiKey = n), (this.sendWithBeacon = o);
    const { enabled: i = !0 } = s;
    i &&
      ((this.eventBatcher = new Rp(
        Object.assign(Object.assign({}, s), {
          logger: this.logger,
          sendFunc: (a) => this.sendEvents(a),
        })
      )),
      this.eventBatcher.start()),
      this.logger.debug("=> Softgames.Destination.constructor()");
  }
  async sendEvents(t) {
    if (window.fetch === void 0 && navigator.sendBeacon === void 0)
      return (
        this.logger.warn(
          "Softgames.Destination.sendEvents(): fetch API not supported!"
        ),
        { result: U.FailedDiscardEvents, failedEvents: [] }
      );
    this.logger.debug(
      `Softgames.Destination.sendEvents(): sending ${t.length} events`
    );
    const { fetchEvents: n, beaconEvents: r } = this.groupEvents(t);
    if (
      (r.length !== 0 &&
        this.sendEventsViaBeacon(r) === U.SendFailed &&
        n.push(...r),
      n.length === 0)
    )
      return { result: U.Success, failedEvents: n };
    const o = await this.sendEventsViaFetch(n);
    return { result: o, failedEvents: o === U.SendFailed ? n : [] };
  }
  sendEventsViaBeacon(t) {
    if (navigator.sendBeacon === void 0) return U.SendFailed;
    const n = le(t);
    if (!n)
      return (
        this.logger.warn(
          "Softgames.Destination.sendEventsViaBeacon(): failed to json-stringify event payload"
        ),
        U.FailedDiscardEvents
      );
    const r = new URL(this.url);
    return (
      r.searchParams.set("x-api-key", this.apiKey),
      navigator.sendBeacon(r.toString(), n) ? U.Success : U.SendFailed
    );
  }
  async sendEventsViaFetch(t) {
    if (window.fetch === void 0) return U.FailedDiscardEvents;
    const n = le(t);
    if (n === void 0)
      return (
        this.logger.warn(
          "Softgames.Destination.sendEventsViaFetch(): failed to json-stringify event payload"
        ),
        U.FailedDiscardEvents
      );
    const r = {
      method: "PUT",
      headers: { "x-api-key": this.apiKey, "Content-Type": "application/json" },
      body: n,
    };
    try {
      const o = await fetch(this.url, r);
      this.logger.debug(
        `Softgames.Destination.sendEvents(): response with status ${o.status}`
      );
      const s = await o.json();
      return this.logger.debug(s), o.status === 200 ? U.Success : U.SendFailed;
    } catch (o) {
      return (
        this.logger.error(
          "Softgames.Destination.sendEvents(): fetch call failed with ",
          o
        ),
        U.SendFailed
      );
    }
  }
  groupEvents(t) {
    const n = this.sendWithBeacon;
    return t.reduce(
      (r, o) => (
        n && (n === "all" || n.includes(o.eventName))
          ? r.beaconEvents.push(o)
          : r.fetchEvents.push(o),
        r
      ),
      { fetchEvents: [], beaconEvents: [] }
    );
  }
  make(t, n) {
    this.logger.debug(`=> Softgames.Destination.make(${t}, [apiKey])`);
  }
  logEvent(t, n) {
    const r = { payload: n, eventName: t };
    this.eventBatcher !== void 0
      ? this.eventBatcher.addEvent(r)
      : this.sendEvents([r]).catch((o) => {
          this.logger.warn("Softgames.Destination.logEvent() failed with: ", o);
        }),
      this.logger.debug(`=> Softgames.Destination.logEvent: ${le(r)}`);
  }
  identify(t) {
    this.logger.debug(`=> Softgames.Destination.identify(${t})`);
  }
  unidentify() {
    this.logger.debug("=> Softgames.Destination.unidentify()");
  }
  revenue(t, n) {
    this.logger.debug(`=> Softgames.Destination.revenue(${t}, ${le(n)})`);
  }
  logPage(t, n) {
    this.logger.debug(`=> Softgames.Destination.logPage(${t}, ${le(n)})`);
  }
  setUserProperties(t, n) {
    this.logger.debug(
      `=> Softgames.Destination.setUserProperties(${t}, ${le(n)})`
    );
  }
  setGroupProperties(t, n, r) {
    this.logger.debug(
      `=> Softgames.Destination.setGroupProperties(${t}, ${n}, ${le(r)})`
    );
  }
  addCurrentUserToGroup(t, n, r) {
    this.logger.debug(
      `=> Softgames.Destination.addCurrentUserToGroup(${t}, ${n}, ${le(r)})`
    );
  }
  logEventWithGroups(t, n, r) {
    this.logger.debug(
      `=> Softgames.Destination.addCurrentUserToGroup(${t}, ${le(n)}, ${le(r)})`
    );
  }
}
const Lp = 100,
  Np = {
    CLP: 1,
    COP: 1,
    CRC: 1,
    HUF: 1,
    ISK: 1,
    IDR: 1,
    JPY: 1,
    KRW: 1,
    PYG: 1,
    TWD: 1,
    VND: 1,
  };
function I() {
  return Math.round(new Date().getTime() / 1e3);
}
const $p = /(\d+)/g;
function Up(e, t) {
  var n;
  const r = e.match($p);
  if (!r || r.length === 0) return null;
  let o, s;
  r.length === 1
    ? ((o = r[0]), (s = "00"))
    : ((o = r.slice(0, -1).join("")), (s = r.slice(-1).join("")));
  const i = (n = Np[t]) !== null && n !== void 0 ? n : Lp,
    a = parseFloat(`${o}.${s}`) * i;
  if (Number.isNaN(a)) return null;
  const u = Math.round(a);
  return e.includes("-") ? -u : u;
}
function Mp(e, t) {
  let n;
  if (t === null) n = null;
  else if (t === void 0)
    n = JSON.stringify({ error: "fbEntryPointData was undefined" });
  else
    try {
      n = JSON.stringify(t);
    } catch (r) {
      n = JSON.stringify({
        error: `fbEntryPointData JSON.stringify failed ${String(r)}`,
      });
    }
  return { name: e ?? "undefined_or_null", data: n };
}
function Un(e) {
  return Object.entries(e).map(([t, n]) => ({ hexResourceType: t, amount: n }));
}
const Mn = he();
class Ri {
  constructor(t, n) {
    this.stateController = n;
    const {
      apiKey: r,
      gameSlug: o,
      environment: s,
      platformName: i,
      url: a,
      gameVersion: u,
      sessionId: c,
    } = t;
    (this.isDev = s === "dev"),
      b.initAvo(
        { env: this.isDev ? b.AvoEnv.Dev : b.AvoEnv.Prod, webDebugger: !0 },
        {
          sessionId: c,
          gameVersion: u,
          gameSlug: o,
          platformName: i,
          environment: s === "dev" ? "dev" : "prod",
          schemaVersion: Object.values(na)[0],
        },
        {},
        new Dp({
          apiKey: r,
          url: a,
          debugLog: !0,
          logInfo(l) {
            if (typeof l == "string") {
              if (l.includes("Softgames.Destination.logEvent: "))
                try {
                  Mn.log(
                    "Softgames.Destination.logEvent: ",
                    JSON.parse(l.slice(l.indexOf("{")))
                  );
                  return;
                } catch (h) {
                  Mn.warn(h);
                }
              Mn.log(l);
            }
          },
        })
      );
  }
  stateController;
  isDev;
  metaPropertiesGetter = [];
  addMetaPropertiesGetter(t) {
    this.metaPropertiesGetter.push(t);
  }
  getMetaProperties(t = {}) {
    const n = this.metaPropertiesGetter.reduce(
      (r, o) => ({ ...r, ...o.getMetaProperties() }),
      {}
    );
    return Object.entries({ ...n, ...t }).map(([r, o]) => ({
      metaPropertyName: r,
      metaPropertyValue: `${o}`,
    }));
  }
  getSystemInfo() {
    return {
      browserName: ha(),
      browserVersion: da(),
      systemLocale: ua(),
      osName: ca(),
      osVersion: la(),
      timeZoneName: aa(),
      timeZone: ia(),
      deviceType: sa(),
      deviceModel: oa(),
      deviceVendor: ra(),
    };
  }
  trackGameInitialized(t) {
    const { name: n, data: r } = Mp(t.entryPointName, t.entryPointData),
      o = {
        ...this.getSystemInfo(),
        contextProperty: void 0,
        assetQuality: null,
        clientTimestamp: I(),
        metaProperties: this.getMetaProperties(),
        newPlayer: t.sessionCount === 1,
        entryPointName: n,
        entryPointData: r,
        timeSinceStartup: Yr(),
        backendName: null,
        backendUserId: null,
        publisherUserId: null,
        profileId: t.trackingId,
        platformUserId: t.userId,
        sessionCounter: t.sessionCount,
        userFingerprint: null,
        maxTextureSize: null,
        affiliateId: null,
      };
    b.gameInitialized(o);
  }
  trackLevelStarted(t) {
    b.hexLevelStarted({
      ...t,
      contextProperty: null,
      metaProperties: this.getMetaProperties(),
      clientTimestamp: I(),
      hexTileRvAmount: t.tileRvAmount,
    });
  }
  trackLevelWon({
    levelNumber: t,
    levelId: n,
    levelAttemptId: r,
    levelType: o,
    lives: s,
    doubleRewardShown: i,
    inventory: a,
    metaProperties: u,
  }) {
    b.hexLevelWon({
      contextProperty: null,
      levelNumber: t,
      levelScore: 0,
      levelId: n,
      lives: s,
      levelAttemptId: r,
      levelType: o,
      hexResourceInventory: Un(a),
      hexResourceUpdates: null,
      hexDoubleRewardShown: i,
      metaProperties: this.getMetaProperties(u),
      clientTimestamp: I(),
    });
  }
  trackRvTileUnlock(t) {
    b.hexTileRvUsed({
      contextProperty: null,
      clientTimestamp: I(),
      hexTileRvTrigger: t.trigger,
      levelAttemptId: t.levelAttemptId,
      metaProperties: this.getMetaProperties(),
    });
  }
  trackLevelLost(t) {
    b.hexLevelLost({
      contextProperty: null,
      ...t,
      levelScore: 0,
      metaProperties: this.getMetaProperties(t.metaProperties),
      clientTimestamp: I(),
    });
  }
  trackReviveShown(t) {
    b.hexReviveShown({
      contextProperty: null,
      ...t,
      levelScore: 0,
      metaProperties: this.getMetaProperties(),
      clientTimestamp: I(),
    });
  }
  trackReviveUsed(t) {
    const n = {
      [It.Ad]: bn.AD,
      [It.Coins]: bn.COIN_PURCHASE,
      [It.SpecialOffer]: bn.PURCHASE,
    }[t.reason];
    b.hexReviveUsed({
      contextProperty: null,
      levelScore: 0,
      levelNumber: t.levelNumber,
      resourceActionType: n,
      hexResourceUpdates:
        t.reason === It.Coins
          ? [{ hexResourceType: fa.COIN, amount: t.resourceAmount }]
          : null,
      metaProperties: this.getMetaProperties(),
      clientTimestamp: I(),
    });
  }
  trackDioramaCompleted(t) {
    b.hexDioramaCompleted({
      contextProperty: null,
      metaProperties: this.getMetaProperties(t.metaProperties),
      hexDioramaCompleted: t.dioramaIndex + 1,
      clientTimestamp: I(),
    });
  }
  trackAdFinished({ adInfo: t, adError: n, metaProperties: r, adMediator: o }) {
    b.adFinished({
      contextProperty: null,
      adType: t.type === M.Rewarded ? Zr.REWARDED : Zr.INTERSTITIAL,
      adNetwork: pa(t.network),
      adMediator: o,
      adRevenue: null,
      adId: t.id ?? "",
      adPlacementId: t.placementId,
      adSlotName: t.slotName,
      adResponse: ks(t),
      clientTimestamp: I(),
      errorMessage: n?.errorCode ?? null,
      countRetries: t.countRetries,
      adShowDelay: t.adShowDelayMs,
      metaProperties: this.getMetaProperties(r),
    });
  }
  mapSplitTestDistribution(t) {
    return t === 1 ? "control" : `test_${t - 1}`;
  }
  splitTest(t) {
    b.splitTest({
      contextProperty: null,
      splitTestSlug: t.testSlug,
      clientTimestamp: I(),
      splitTestDistribution: this.mapSplitTestDistribution(t.distribution),
      metaProperties: this.getMetaProperties(t.metaProperties),
    });
  }
  trackResourceAction({
    levelId: t,
    levelNumber: n,
    levelAttemptId: r,
    actionTrigger: o,
    actionType: s,
    resourceUpdate: i,
    inventory: a,
    gameEventId: u,
    transactionId: c,
    metaProperties: l,
  }) {
    b.hexResourceAction({
      contextProperty: null,
      levelId: t,
      levelNumber: n,
      levelAttemptId: r,
      resourceActionTrigger: o,
      resourceActionType: s,
      hexResourceUpdates: Un(i),
      hexResourceInventory: Un(a),
      clientTimestamp: I(),
      metaProperties: this.getMetaProperties(l),
      transactionId: c ?? null,
      hexGameEventId: u ?? null,
    });
  }
  trackPurchase({
    data: t,
    product: n,
    placementData: r,
    purchase: o,
    offerImpressionId: s,
    paymentProvider: i,
    metaProperties: a,
  }) {
    const u = Up(n.priceLabel, n.currency),
      { gameArea: c, storeEntryPoint: l } = r,
      h =
        this.isDev ||
        t.cheatEnabled ||
        o.purchaseToken?.startsWith("111111111"),
      g = this.getMetaProperties(a);
    let w = o.error ? _n.ERROR : _n.SUCCESS;
    (o?.error?.code === "USER_INPUT" ||
      o?.error?.message?.toLowerCase()?.includes("cancelled")) &&
      (w = _n.CANCELLED),
      b.purchaseFinished({
        contextProperty: null,
        clientTimestamp: I(),
        currencyCode: n.currency,
        errorMessage: o.error?.message ?? null,
        gameArea: c,
        metaProperties: g,
        paymentProvider: i,
        productId: n.platformId,
        platformProductId: n.platformId,
        productPrice: n.priceLabel,
        productPriceAmount: u ?? 0,
        productType: ma.CONSUMABLE,
        purchaseReceipt: null,
        purchaseResponse: w,
        sandboxPurchase: h,
        storeEntryPoint: l,
        transactionId: o?.paymentID,
        purchaseToken: o?.purchaseToken,
        rollingOfferSteps: null,
        offerImpressionId: s,
      });
  }
  trackOfferShown(t) {
    const { product: n, location: r } = t;
    r === Qr.OfferPopup &&
      this.stateController.shouldTrackOfferShow(n) &&
      (this.trackOffer({
        product: n,
        offerAction: eo.SHOW,
        storeEntryPoint: r,
        impressionId: n.activationId,
      }),
      this.stateController.markOfferShowTracking(n));
  }
  trackOfferClick(t) {
    const { product: n, location: r } = t;
    r === Qr.OfferPopup &&
      this.trackOffer({
        product: n,
        offerAction: eo.CLICK,
        storeEntryPoint: r,
        impressionId: n.activationId,
      });
  }
  trackOffer(t) {
    const {
      product: { id: n, variantId: r, activationId: o },
      offerAction: s,
      impressionId: i,
      storeEntryPoint: a,
    } = t;
    b.offerAction({
      contextProperty: null,
      storeEntryPoint: a,
      clientTimestamp: I(),
      metaProperties: this.getMetaProperties(),
      offerAction: s,
      offerId: n,
      offerImpressionId: i ?? o,
      offerSegmentation: [{ name: "Variant", value: r }],
    });
  }
  trackEventStarted(t) {
    b.hexEventStarted({
      contextProperty: null,
      hexGameEventId: t.eventId,
      hexGameEventType: t.type,
      clientTimestamp: I(),
      metaProperties: this.getMetaProperties(t.metaProperties),
    });
  }
  trackEventFinished(t) {
    b.hexEventFinished({
      contextProperty: null,
      hexGameEventId: t.eventId ?? "unknown",
      hexGameEventType: t.type,
      hexGameEventProgress: Math.round(t.progress),
      hexGameEventPlayerPlacement: t.rank ?? null,
      clientTimestamp: I(),
      metaProperties: this.getMetaProperties(t.metaProperties),
    });
  }
  trackUIInteraction(t) {
    b.uiInteraction({
      contextProperty: null,
      clientTimestamp: I(),
      contextName: t.contextName,
      uiElementAction: t.action,
      uiElementId: t.elementId,
      metaProperties: this.getMetaProperties(t.metaProperties),
    });
  }
  trackSeasonPass(t) {
    b.hexaSeasonPass({
      contextProperty: null,
      clientTimestamp: I(),
      metaProperties: this.getMetaProperties(t.metaProperties),
      productId: t.productId,
      seasonPassId: t.seasonPassId,
      seasonPassPoints: t.points,
      seasonPassPointsReceived: t.pointsIncrease,
      seasonPassStatusContext: t.eventContext,
    });
  }
  trackPlayerAttribution(t) {
    b.playerAttribution({
      contextProperty: null,
      clientTimestamp: I(),
      metaProperties: this.getMetaProperties(t.metaProperties),
      attributionPayload: t.attributionPayload,
      attributionNetwork: t.attributionNetwork ?? null,
      attributionCampaign: t.attributionCampaign ?? null,
    });
  }
  trackNativeAppLaunched(t) {}
  trackCollectionEventEnd(t) {
    b.hexCollectionEventFinished({
      contextProperty: null,
      clientTimestamp: I(),
      gameEventId: t.gameEventId,
      gameEventTier: t.gameEventTier,
      metaProperties: this.getMetaProperties(t.metaProperties),
    });
  }
  trackCollectionEventTokenUpdate(t) {
    b.hexCollectionEventTokenUpdate({
      contextProperty: null,
      clientTimestamp: I(),
      gameEventId: t.gameEventId,
      hexCollectionEventTokenAmount: t.tokenAmount,
      levelAttemptId: t.levelAttemptId,
      metaProperties: this.getMetaProperties(t.metaProperties),
    });
  }
  trackCheatsEnabled(t) {
    b.cheatsEnabled({
      contextProperty: null,
      clientTimestamp: I(),
      metaProperties: this.getMetaProperties(t.metaProperties),
    });
  }
  trackWeeklyTask(t) {
    b.hexWeeklyTasks({
      ...t,
      hexGameEventId: t.gameEventId,
      contextProperty: null,
      clientTimestamp: I(),
      metaProperties: this.getMetaProperties(t.metaProperties),
    });
  }
  trackPiggyBank(t) {
    b.hexWeeklyTasks({
      taskName: "piggyBank",
      taskDifficulty: Math.max(0, ga.indexOf(t.piggyBankTier)),
      taskStatus: t.status,
      progressPercentage: t.progressPercentage,
      taskInstanceId: t.trackingId,
      hexGameEventId: null,
      contextProperty: null,
      clientTimestamp: I(),
      metaProperties: this.getMetaProperties(t.metaProperties),
    });
  }
  trackAvatarSelection(t) {
    b.hexAvatarSelection({
      avatarImageId: t.avatarImageId,
      charmId: t.charmId,
      frameId: t.frameId,
      contextProperty: void 0,
      clientTimestamp: I(),
      metaProperties: this.getMetaProperties(t.metaProperties),
    });
  }
  trackLoadingStageFinished(t) {
    b.loadingStageFinished({
      ...this.getSystemInfo(),
      name: t.name,
      stageTasks: t.stageTasks,
      clientTimestamp: I(),
      durationMs: t.durationMs,
      metaProperties: this.getMetaProperties(t.metaProperties),
      contextProperty: null,
    });
  }
  trackLoadingPhaseCompleted(t) {
    b.loadingPhaseCompleted({
      ...this.getSystemInfo(),
      clientTimestamp: I(),
      durationMs: t.durationMs,
      metaProperties: this.getMetaProperties(t.metaProperties),
      contextProperty: null,
    });
  }
  trackHandledError(t) {
    b.handledErrorLog({
      clientTimestamp: I(),
      metaProperties: this.getMetaProperties(t.metaProperties),
      contextName: t.contextName,
      contextProperty: void 0,
      errorMessage: t.errorMessage ?? null,
      errorType: t.errorType,
    });
  }
  trackFunnelStep(t) {
    b.funnelStep({
      clientTimestamp: I(),
      metaProperties: this.getMetaProperties(t.metaProperties),
      timeSinceStartup: Yr(),
      stepId: t.stepId,
      funnelScope: t.funnelScope,
      funnelStepOrder: t.funnelStepOrder,
      funnelVersion: t.funnelVersion,
      gameArea: null,
      contextProperty: null,
    });
  }
  trackWeeklyLeaderboardEnd(t) {
    b.hexLeaderboardTrophiesReceived({
      contextProperty: null,
      clientTimestamp: I(),
      metaProperties: this.getMetaProperties(t.metaProperties),
      leaderboardLeague: t.league,
      leaderboardId: t.instanceId,
      leaderboardPosition: t.playerRank,
      amount: t.score,
      gameMode: t.gameMode,
    });
  }
}
function Yo(e) {
  if (!e || typeof e != "string") return null;
  const t = e.match(/^(\d+)\.(\d+)\.(\d+)/);
  if (!t) return null;
  const n = parseInt(t[1], 10),
    r = parseInt(t[2], 10),
    o = parseInt(t[3], 10);
  return Number.isNaN(n) || Number.isNaN(r) || Number.isNaN(o)
    ? null
    : [n, r, o];
}
function Zo(e, t) {
  if (!t) return null;
  const n = Yo(e),
    r = Yo(t);
  return n === null || r === null
    ? null
    : n[0] !== r[0]
    ? n[0] < r[0]
    : n[1] !== r[1]
    ? n[1] < r[1]
    : n[2] <= r[2];
}
class Bp {
  constructor(t) {
    this.remoteConfig = t;
  }
  remoteConfig;
  optionalShown = !1;
  cancelUpdate() {}
  init() {
    return Promise.resolve();
  }
  isForceUpdate() {
    const t = this.remoteConfig.getRemoteConfig();
    return Zo("1.44.1.0-rc4", t.app.forceUpdateVersion) ?? !1;
  }
  hasOptionalUpdate() {
    if (this.optionalShown) return !1;
    const t = this.remoteConfig.getRemoteConfig();
    return Zo("1.44.1.0-rc4", t.app.optionalUpdateVersion) ?? !1;
  }
  isSupported() {
    return !0;
  }
  onPopupShown() {
    this.optionalShown = !0;
  }
  shouldShowUpdatePopup() {
    return this.isForceUpdate() || this.hasOptionalUpdate();
  }
  update() {}
}
class fe {
  root;
  constructor() {
    (this.root = this.createMainDiv()), document.body.appendChild(this.root);
  }
  createMainDiv() {
    const t = document.createElement("div");
    return (
      Object.assign(t.style, {
        zIndex: 999999999999,
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        fontSize: "2em",
        display: "flex",
        fontFamily: "Verdana",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        backgroundColor: "rgba(0,0,0,0.5)",
      }),
      t
    );
  }
  addButton(t, n) {
    const r = document.createElement("button");
    return (
      Object.assign(r.style, {
        fontSize: "1.5em",
        display: "block",
        margin: "1em",
        borderRadius: "0.2em",
      }),
      (r.innerText = t),
      r.addEventListener("click", () => {
        n();
      }),
      this.root.appendChild(r),
      this
    );
  }
  addImage(t) {
    const n = new Image();
    return (n.src = t), this.root.appendChild(n), this;
  }
  addText(t, n = "1em") {
    const r = document.createElement("div");
    return (
      Object.assign(r.style, { fontSize: n }),
      (r.innerText = t),
      this.root.appendChild(r),
      this
    );
  }
  addObject(t) {
    return this.addText(JSON.stringify(t, null, " "), "0.5em");
  }
  destroy() {
    document.body.removeChild(this.root);
  }
}
function Fp(e) {
  return new Promise((t) => {
    const n = new fe()
      .addText("PURCHASE")
      .addText(e)
      .addButton("YES", () => {
        t(!0), n.destroy();
      })
      .addButton("NO", () => {
        t(!1), n.destroy();
      });
  });
}
const Gp = he();
function zp(e) {
  return Object.entries(e).map(([t, n]) => ({
    productID: t,
    priceAmount: n / 100,
    priceCurrencyCode: "USD",
    price: `$${n / 100}`,
  }));
}
const jp = zp({
  coin_pack_1: 199,
  coin_pack_2: 899,
  coin_pack_3: 1799,
  coin_pack_4: 3499,
  coin_pack_5: 5999,
  coin_pack_6: 9999,
  basic_bundle_1: 999,
  basic_bundle_2: 1999,
  basic_bundle_3: 3999,
  basic_bundle_4: 6999,
  basic_bundle_5: 9999,
  upsell_bundle_1: 999,
  upsell_bundle_2: 1499,
  upsell_bundle_3: 2999,
  upsell_bundle_4: 4999,
  upsell_bundle_5: 6999,
  upsell_bundle_6: 9999,
  starter_offer_1: 499,
  starter_offer_2: 299,
  starter_offer_3: 999,
  piggy_bank: 499,
  piggy_bank_t2: 699,
  piggy_bank_t3: 1299,
  piggy_bank_t4: 2499,
  piggy_bank_t5: 4999,
  golden_offer: 299,
  season_pass: 299,
  upsell_offer_7: 9999,
  upsell_offer_6: 6999,
  upsell_offer_5: 4999,
  upsell_offer_4: 2999,
  upsell_offer_3: 1499,
  upsell_offer_2: 799,
  upsell_offer_1: 499,
  safety_net: 499,
  premium_pass_pp1: 799,
  premium_pass_pp2: 699,
  premium_pass_pp3: 499,
  premium_pass: 999,
  fallback_spin_ns: 99,
  fallback_lifeline_3: 799,
  fallback_lifeline_2: 499,
  fallback_lifeline_1: 299,
  fallback_hammer_3: 799,
  fallback_hammer_2: 499,
  fallback_hammer_1: 299,
  fallback_hammer_ns: 199,
  fallback_shuffle_3: 799,
  fallback_shuffle_2: 499,
  fallback_shuffle_1: 299,
  fallback_shuffle_ns: 99,
  conversion_offer_0: 49,
  conversion_offer_1: 99,
  conversion_offer_2: 299,
  conversion_offer_3: 499,
  conversion_offer_4: 699,
  conversion_offer_5: 899,
  no_ads_t1: 599,
  no_ads_row: 399,
  no_ads_bundle_t1: 799,
  no_ads_bundle_row: 599,
  journey_offer_1: 499,
  journey_offer_2: 999,
  journey_offer_3: 1499,
});
class qp {
  static debugSettings = null;
  onDelayedProductConsumed = new q.Signal();
  async init(t) {
    return await Bt(1e3), Gp.log("payments initialized"), !0;
  }
  getCatalog() {
    return Promise.resolve(jp);
  }
  async makePurchase(t, n) {
    await Bt(1e3);
    const o = await Fp(t);
    return {
      paymentID: o ? "123456789" : void 0,
      purchaseToken: o ? "123456789-token" : void 0,
      error: o ? null : { message: "Dev test fail" },
    };
  }
  async restorePurchases() {
    return await Bt(1e3), [];
  }
  getPaymentProvider() {
    return Ts.FACEBOOK;
  }
}
class it {
  static debugStateKey = "fakeLeaderboards";
  rnd = new ya([Math.random()]);
  static debugClearLeaderboards() {
    Wn(this.debugStateKey);
  }
  getLeaderboard(t) {
    const n = Zt(it.debugStateKey, {});
    return n?.[t] ? n[t] : this.generateLeaderboard(t);
  }
  saveLeaderboard(t, n) {
    const r = Zt(it.debugStateKey, {});
    (r[t] = n), Ft(it.debugStateKey, r);
  }
  generateLeaderboard(t) {
    const n = this.rnd.integerInRange(0, 7),
      r = this.rnd
        .shuffle(wa(100).slice())
        .slice(0, n)
        .map((o) => ({
          player: {
            name: o.name,
            avatarUrl: o.avatarUrl,
            currentUser: !1,
            id: o.id,
          },
          rank: 0,
          score: this.rnd.integerInRange(1, 300),
        }));
    return (
      r.sort((o, s) => s.score - o.score),
      r.forEach((o, s) => {
        o.rank = s + 1;
      }),
      this.saveLeaderboard(t, r),
      r
    );
  }
  async getPlayerEntry(t) {
    return this.getLeaderboard(t).find((n) => n.player.currentUser) ?? null;
  }
  async getFriendsEntries(t) {
    return this.getLeaderboard(t);
  }
  async getEntries(t, n = 10, r = 0) {
    return Math.random() > 0.5 ? this.getLeaderboard(t).slice(r, r + n) : null;
  }
  async setScore(t, n) {
    const r = this.getLeaderboard(t),
      o = r.find((s) => s.player.currentUser) ?? {
        player: { name: "You", currentUser: !0, avatarUrl: null, id: "" },
        score: n,
        rank: 0,
      };
    return (
      r.includes(o) || r.push(o),
      r.sort((s, i) => i.score - s.score),
      r.forEach((s, i) => {
        s.rank = i + 1;
      }),
      this.saveLeaderboard(t, r),
      !0
    );
  }
}
function Vp(e) {
  return new Promise((t) => {
    const n = new fe()
      .addText("TOURNAMENT CREATE")
      .addText(`score: ${e.initialScore}`)
      .addObject(e)
      .addButton("CREATE", () => {
        t(!0), n.destroy();
      })
      .addButton("CLOSE", () => {
        t(!1), n.destroy();
      });
  });
}
function Wp(e, t, n) {
  return new Promise((r) => {
    const o = new fe()
      .addText("SHARE TOURNAMENT")
      .addText(`score: ${e}`)
      .addObject(t)
      .addObject(n ?? {})
      .addButton("SHARE", () => {
        r(!0), o.destroy();
      })
      .addButton("CLOSE", () => {
        r(!0), o.destroy();
      });
  });
}
function Kp(e) {
  return new Promise((t) => {
    const n = new fe()
      .addText("JOIN TOURNAMENT")
      .addObject(e)
      .addButton("JOIN", () => {
        t(!0), n.destroy();
      })
      .addButton("CLOSE", () => {
        t(!0), n.destroy();
      });
  });
}
const Qo = he();
class ve {
  static tournamentsDebugStateKey = "fakeTournaments";
  static entryDebugStateKey = "fakeTournamentEntry";
  currentTournament = null;
  currentContext = null;
  tournaments = {};
  static debugClearTournaments() {
    Wn(this.tournamentsDebugStateKey);
  }
  static setEntryTournamentForNextSession() {
    Ft(ve.entryDebugStateKey, !0);
  }
  constructor(t) {
    (this.tournaments = Zt(ve.tournamentsDebugStateKey, {})),
      this.fetchGlobalTournament(),
      this.fetchEntryTournament(),
      t?.connect((n) => {
        this.changeContext(n);
      });
  }
  changeContext(t) {
    (this.currentContext = t),
      (this.currentTournament =
        Object.values(this.tournaments).find((n) => n.contextId === t) ?? null);
  }
  fetchEntryTournament() {
    Zt(ve.entryDebugStateKey, !1) &&
      ((this.currentTournament = this.createFakeTournamentData({
        initialScore: 0,
        config: { title: `FT ${st().slice(-3)}` },
        data: { creatorId: st() },
      })),
      (this.currentContext = this.currentTournament.contextId),
      Wn(ve.entryDebugStateKey));
  }
  async fetchGlobalTournament() {
    try {
      const n = await (
        await fetch(
          "https://firebasestorage.googleapis.com/v0/b/hexa-stack-facebook-prod.firebasestorage.app/o/global-tournament.json?alt=media"
        )
      ).json();
      (this.tournaments[n.tournamentId] = n),
        Ft(ve.tournamentsDebugStateKey, this.tournaments);
    } catch (t) {
      Qo.warn(t);
    }
  }
  createFakeTournamentData(t) {
    const n = {
      contextId: st(),
      creatorId: t.data?.tournamentCreatorId ?? null,
      endsAt: Date.now() + ba * 7,
      payload: t.data,
      title: t.config?.title ?? "Friendly tournament",
      tournamentId: st(),
    };
    return (
      (this.tournaments[n.tournamentId] = n),
      Ft(ve.tournamentsDebugStateKey, this.tournaments),
      n
    );
  }
  async createTournament(t) {
    return (await Vp(t))
      ? ((this.currentTournament = this.createFakeTournamentData(t)),
        (this.currentContext = this.currentTournament.contextId),
        this.currentTournament)
      : null;
  }
  async shareTournament(t, n) {
    return this.currentTournament
      ? (await Bt(3e3), Wp(t, this.currentTournament, n))
      : !1;
  }
  async getCurrentTournament() {
    return this.currentTournament;
  }
  async joinTournament(t) {
    const n = this.tournaments[t];
    return n && (await Kp(n))
      ? ((this.currentTournament = n), (this.currentContext = n.contextId), n)
      : null;
  }
  async postScore(t) {
    return Qo.log("postScore", t), !0;
  }
  getContextID() {
    return this.currentContext;
  }
}
function cr(e) {
  return new Promise((t) => {
    const n = new fe()
      .addText(`AD: ${e}`)
      .addButton("FINISH", () => {
        n.destroy(), t(Ct.SUCCESS);
      })
      .addButton("CLOSED", () => {
        n.destroy(), t(Ct.CLOSED);
      })
      .addButton("ERROR", () => {
        n.destroy(), t(Ct.ERROR);
      })
      .addButton("SKIP", () => {
        n.destroy(), t(Ct.SKIPPED);
      });
  });
}
function Hp() {
  return new Promise((e) => {
    const t = new fe()
      .addText("CREATE SHORTCUT")
      .addButton("YES", () => {
        e(!0), t.destroy();
      })
      .addButton("NO", () => {
        e(!1), t.destroy();
      });
  });
}
function Xp() {
  return new Promise((e) => {
    const t = new fe()
      .addText("Choose context")
      .addButton("context 1", () => {
        t.destroy(), e("1");
      })
      .addButton("context 2", () => {
        t.destroy(), e("2");
      })
      .addButton("context 3", () => {
        t.destroy(), e("3");
      })
      .addButton("CLOSE", () => {
        t.destroy(), e(null);
      });
  });
}
function Jp(e) {
  return new Promise((t) => {
    const n = new fe()
      .addText("CUSTOM MESSAGE")
      .addImage(e.image)
      .addObject(e.data)
      .addButton("SEND", () => {
        n.destroy(), t(!0);
      })
      .addButton("CLOSE", () => {
        n.destroy(), t(!1);
      });
  });
}
class Yp {
  onContextChanged = new q.Signal();
  contextId = null;
  async chooseSocialContext() {
    const t = await Xp();
    return t === null ? !1 : (this.setContext(t), !0);
  }
  setContext(t) {
    this.contextId !== t &&
      ((this.contextId = t), this.onContextChanged.emit(this.contextId));
  }
  async sendMessage(t) {
    return Jp(t);
  }
  getContextID() {
    return this.contextId;
  }
}
function Zp(e, t) {
  return new Promise((n) => {
    const r = new fe()
      .addImage(e)
      .addText(t ? JSON.stringify(t, null, "  ") : "")
      .addButton("CLOSE", () => {
        r.destroy(), n();
      });
  });
}
class Qp {
  share(t, n) {
    return Zp(t, n);
  }
}
class em {
  safeArea = { top: 0, right: 0, bottom: 0, left: 0 };
  async init() {
    return Promise.resolve();
  }
  getSafeAreaInset() {
    return this.safeArea;
  }
  debugSetSafeAreaInset(t) {
    this.safeArea = { ...this.safeArea, ...(t ?? {}) };
  }
}
class tm {
  cheatOptions() {
    return [{ label: "Web Cheats", elements: [] }];
  }
}
const nm =
  "Firebase is stubbed out in the CrazyGames build (see src/host/firebaseStub.ts). Nothing on this platform may call it — platformRemoteConfig is StubRemoteConfig.";
function xi(e) {
  throw new Error(`${e}: ${nm}`);
}
function rm() {
  return xi("initializeApp");
}
const om = { FetchAndActivate: "FetchAndActivate" };
class sm {
  constructor() {
    xi("FirebaseRemoteConfigClient");
  }
}
function im(e) {
  return typeof e == "boolean";
}
function am(e, t, ...n) {
  return !1;
}
function lm(e) {
  return typeof e == "function";
}
function cm(e) {
  return e === void 0;
}
function ur(e) {
  return (t) => (cm(t) ? !0 : e(t));
}
function Di(e) {
  return Array.isArray(e);
}
function um(e, t) {
  return (n) => !(!Di(n) || n.some((r) => !e(r)));
}
function dm(e) {
  return typeof e == "boolean";
}
function hm(e) {
  return Number.isNaN(e);
}
function zr(e) {
  return typeof e == "number" && !hm(e);
}
function Li(e) {
  return e !== null && typeof e == "object";
}
function Ni(e, t) {
  const n = Li(e) && !Di(e) && fm(e);
  return !n || !t
    ? n
    : Object.getPrototypeOf(e) === Object.prototype &&
        Object.getOwnPropertySymbols(e).length === 0;
}
function fm(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function $i(e, t, n = !1) {
  return (r) => !(!Ni(r, n) || Object.values(r).some((s) => !e(s)));
}
function wn(e) {
  return typeof e == "string";
}
const es = 40;
function pm(e) {
  return dr(e, 1);
}
function dr(e, t) {
  if (t > es)
    throw new Error(`Could not validate JSON due to its depth > ${es}`);
  return e === 1 / 0 || e === -1 / 0
    ? !1
    : wn(e) ||
        zr(e) ||
        dm(e) ||
        e === null ||
        $i((n) => dr(n, t + 1), void 0, !0)(e) ||
        um((n) => dr(n, t + 1))(e);
}
function mm(e) {
  return $i(pm, void 0, !0)(e);
}
function gm(e) {
  if (!Ni(e, !0)) return !1;
  const { public: t } = e;
  return ur(mm)(t);
}
function on(e) {
  return wn(e) && !!e.trim();
}
function ym(e, t, n) {
  return t(e) && e >= n;
}
function wm(e) {
  return zr(e) && e % 1 === 0;
}
function bm(e, t) {
  return ym(e, wm, t);
}
function ts(e) {
  return bm(e, 1);
}
const _m = [
  "constructor",
  "toString",
  "toLocaleString",
  "valueOf",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
];
function Sm(e) {
  return _m.includes(e);
}
function Em(e) {
  return e == null;
}
function Ui(e, t, ...n) {
  return Em(e) || !Li(e) ? !1 : (n.push(t), n.every((r) => Sm(r) || r in e));
}
function Pm(e) {
  return (t) => e.includes(t);
}
const vm = [
    "DbTimeoutError",
    "EnvironmentError",
    "ForbiddenError",
    "HealthCheckError",
    "HttpError",
    "InternalError",
    "InternalParameterError",
    "InvalidConfigurationError",
    "InvalidGraphQlError",
    "InvalidOperationError",
    "InvalidParameterError",
    "NotAuthorizedError",
    "NotFoundError",
    "NotSupportedError",
    "RequestTimeoutError",
    "ThirdPartyError",
    "UnknownError",
  ],
  Im = Pm(vm);
function Cm(e) {
  if (
    !Ui(
      e,
      "message",
      "code",
      "id",
      "timestamp",
      "stack",
      "additionalInformation",
      "parentError"
    )
  )
    return !1;
  const {
    message: t,
    code: n,
    id: r,
    timestamp: o,
    stack: s,
    additionalInformation: i,
  } = e;
  return !on(t) || !on(n) || !ts(r) || !ts(o) || !ur(wn)(s) ? !1 : ur(gm)(i);
}
class Am extends Error {
  timestamp;
  code;
  id;
  additionalInformation;
  parentError;
  warn;
  constructor(t, n, r, o, s, i = !1, a = !1) {
    super(r),
      (this.timestamp = Date.now()),
      (this.id = zr(n) ? n : 1647962470),
      (this.code = Im(t) ? t : "UnknownError"),
      (this.additionalInformation = o),
      (this.parentError = s),
      i && (this.stack = void 0),
      (this.warn = a);
  }
  toErrorResponse() {
    const t = hr(this),
      {
        message: n,
        code: r,
        id: o,
        additionalInformation: s,
        timestamp: i,
      } = t;
    return {
      message: n,
      code: r,
      id: o,
      ...(s?.public ? { additionalInformation: s.public } : {}),
      timestamp: i,
    };
  }
  toObject() {
    return hr(this);
  }
  toString() {
    return JSON.stringify(this.toObject(), null, "  ");
  }
  valueOf() {
    return this.toObject();
  }
  [Symbol.toPrimitive](t) {
    return t === "number" ? NaN : this.toString();
  }
}
function km(e) {
  if (e)
    return String(e)
      .split(
        `
`
      )
      .map((t) => t.trim())
      .slice(1);
}
function Tm(e) {
  const { message: t } = e || {};
  return on(t) ? t : on(e) ? e : Om(e);
}
const ns = "BaseError handling issue: Error was not serializable";
function Om(e) {
  try {
    const t = JSON.stringify(e);
    return wn(t) ? t : ns;
  } catch {
    return ns;
  }
}
function hr(e, t = 1) {
  const n = { message: Tm(e) };
  return e instanceof Error
    ? (e.stack && (n.stack = km(e.stack)),
      Cm(e)
        ? ((n.code = e.code),
          (n.id = e.id),
          (n.timestamp = e.timestamp),
          e.additionalInformation &&
            (n.additionalInformation = e.additionalInformation),
          e.parentError &&
            (n.parentError =
              t <= 10
                ? hr(e.parentError, t + 1)
                : {
                    message:
                      "Truncated further parent errors due to reaching max depth",
                  }),
          n)
        : (Ui(e, "code") &&
            (n.code = `ExternalCode: ${JSON.stringify(e.code)}`),
          n))
    : n;
}
class rs extends Am {
  constructor(t, n, r, o) {
    super("InternalParameterError", t, n, r, o, !0);
  }
  [Symbol.toStringTag] = "InternalParameterError";
}
const De = Symbol("notDefined");
function Mi(e, t) {
  if (!lm(e))
    throw new rs(1700571963, "Memoize construct function must be a function");
  const { resetAfterDone: n = !1 } = {};
  if (!im(n))
    throw new rs(
      1700571969,
      'Option "resetAfterDone" must be a boolean if provided'
    );
  let r = am() ? t.initResult : De,
    o = !1,
    s = !1;
  const i = (a) => {
    if (r !== De) return r;
    if (((o = !1), (s = !0), (r = e(a)), !(r instanceof Promise))) {
      if (((s = !1), (o = !0), n)) {
        const u = r;
        return (r = De), u;
      }
      return r;
    }
    return (
      r
        .then(() => {
          (s = !1), (o = !0), n && (r = De);
        })
        .catch(() => {
          (s = !1), (o = !1), (r = De);
        }),
      r
    );
  };
  return (
    (i.reset = () => {
      (s = !1), (o = !1), (r = De);
    }),
    (i.notExecuted = () => r !== De),
    (i.wasLastExecutionSuccessful = () => o),
    (i.inProgress = () => s),
    i
  );
}
let Bi = null;
const Rm = he(),
  xm = Mi(async () => {
    const e = {
      apiKey: "AIzaSyBS4b7IBH_8OLUxKPbIy0kB_coVYAgOWWE",
      authDomain: "hexa-stack-facebook-prod.firebaseapp.com",
      projectId: "hexa-stack-facebook-prod",
      storageBucket: "hexa-stack-facebook-prod.firebasestorage.app",
      messagingSenderId: "933898668582",
      appId: "1:933898668582:web:5a691f9146efb07a8574e7",
    };
    try {
      Bi = rm(e);
    } catch (t) {
      Rm.error("Failed to initialize Firebase:", t);
    }
  });
function Dm() {
  return Bi;
}
const os = he(),
  ss =
    "https://firebasestorage.googleapis.com/v0/b/hexa-stack-facebook-prod.firebasestorage.app/o/global-tournament.json?alt=media";
class Lm {
  cachedRemoteConfig = null;
  defaultRemoteConfig = Kn;
  constructor() {
    (Sn.feature_tournament_configUrl = ss),
      (Kn.feature.tournament.configUrl = ss);
  }
  init = Mi(async () => {
    if (this.cachedRemoteConfig) return;
    await xm();
    const t = Dm();
    if (!t) return;
    const n = new sm({
      getFirebaseApp: () => t,
      strategy: om.FetchAndActivate,
      defaultConfig: Nm(Sn),
      minFetchIntervalMS: 432e5,
    });
    await n.init(), this.parseRemoteConfig(n);
  });
  getRemoteConfig() {
    return this.cachedRemoteConfig ?? this.defaultRemoteConfig;
  }
  parseRemoteConfig(t) {
    this.cachedRemoteConfig = _a(Um(t, Sn), this.defaultRemoteConfig);
  }
}
function Nm(e) {
  return Object.fromEntries(
    Object.entries(e).map(([t, n]) => [
      t,
      typeof n == "object" ? JSON.stringify(n) : n,
    ])
  );
}
function $m(e, t, n) {
  if (!t) return n;
  let r;
  try {
    r = JSON.parse(t);
  } catch (o) {
    return (
      os.error(`Remote Config: ${e} is not valid JSON, using default`, o), n
    );
  }
  return r === null ||
    typeof r != "object" ||
    Array.isArray(r) !== Array.isArray(n)
    ? (os.error(
        `Remote Config: ${e} JSON is not a${
          Array.isArray(n) ? "n array" : " object"
        }, using default`,
        t
      ),
      n)
    : r;
}
function Um(e, t) {
  const n = { ...t };
  return (
    Object.keys(t).forEach((r) => {
      const o = t[r];
      let s;
      typeof o == "boolean"
        ? (s = e.getBoolean(r))
        : typeof o == "number"
        ? (s = e.getNumber(r))
        : typeof o == "string"
        ? (s = e.getString(r))
        : typeof o == "object" && o !== null
        ? (s = $m(r, e.getString(r), o))
        : (s = o),
        (n[r] = s);
    }),
    n
  );
}
class Mm {
  cachedRemoteConfig = new Lm();
  async init() {
    await this.cachedRemoteConfig.init();
  }
  getRemoteConfig() {
    return this.cachedRemoteConfig.getRemoteConfig();
  }
}
function Bm(e) {
  return new Promise((t) => {
    const n = new fe()
      .addText("SWITCH GAME")
      .addText(JSON.stringify(e, null, 2))
      .addButton("CLOSE", () => {
        t(), n.destroy();
      });
  });
}
function is(e) {
  return e ?? {};
}
function Fi(e) {
  const { adMediator: t, onAdFinished: n } = e,
    r = (o) => {
      try {
        n(o);
      } catch (s) {
        e.onTrackingError?.(s);
      }
    };
  return {
    onSucceeded: (o, s) => {
      r({
        adInfo: o,
        adError: null,
        adMediator: t,
        adRevenue: void 0,
        metaProperties: is(s).metaProperties,
      });
    },
    onFailed: (o, s) => {
      o.adInfo &&
        r({
          adInfo: o.adInfo,
          adError: o,
          adMediator: t,
          adRevenue: void 0,
          metaProperties: is(s).metaProperties,
        });
    },
  };
}
const Fm = he();
class He {
  static adNetwork = un("devWebAds");
  getAdNetwork() {
    return He.adNetwork;
  }
  async loadAsync(t) {
    t.advanceState(p.Loading), t.advanceState(p.Loaded);
  }
  newInstance(t) {
    return new et(t);
  }
  async requestAsync(t) {
    t.advanceState(p.Requesting), t.advanceState(p.Requested);
  }
  retryDelayMs() {
    return 0;
  }
  shouldRetry() {
    return !1;
  }
  shouldTrackEvents() {
    return !0;
  }
  async showAsync(t, n, r) {
    Fm.warn({ showParams: r, adInstance: t }), t.advanceState(p.Showing);
    const o = await cr(t.placement.placementId);
    o === "Error" && Oi(t),
      t.advanceState(o === "Success" ? p.Finished : p.Closed);
  }
  validateShowParams(t) {
    return !0;
  }
}
const as = he();
class Gm {
  constructor(t) {
    (this.params = t),
      (this.adFlow = new Ii({
        tracker: Fi({
          adMediator: this.adMediator,
          onAdFinished: (n) => {
            this.onAdFinished.emit(n);
          },
          onTrackingError: (n) => {
            as.error("Failed to track ad finished event:", n);
          },
        }),
        waitPreloadTimeoutMs: 5e3,
        placements: this.getPlacements(t),
        providers: this.getProviders(t),
      }));
  }
  params;
  onAdFinished = new q.Signal();
  adMediator = "Softgames";
  adFlow;
  getProviders(t) {
    return [new He(), t.fallbackProvider, t.xPromoAdProvider];
  }
  getPlacements(t) {
    return [
      {
        name: "rewarded",
        network: He.adNetwork,
        type: M.Rewarded,
        placementId: "rewarded",
        fallbackPlacementName: "xpromo_rewarded",
      },
      {
        name: "interstitial",
        network: He.adNetwork,
        type: M.Interstitial,
        placementId: "interstitial",
        fallbackPlacementName: "xpromo_interstitial",
      },
      {
        name: "xpromo_rewarded",
        network: lr.adNetwork,
        type: M.Rewarded,
        placementId: rn.NoRewardedAds,
        fallbackPlacementName: "specialOffer_rewarded",
      },
      {
        name: "xpromo_interstitial",
        network: lr.adNetwork,
        type: M.Interstitial,
        placementId: rn.NoInterstitialAd,
      },
      {
        name: "specialOffer_rewarded",
        network: t.fallbackProvider.getAdNetwork(),
        type: M.Rewarded,
        placementId: "specialOffer_rewarded",
      },
    ];
  }
  async showRewardedAd(t = "", n) {
    try {
      return {
        adInfo: await this.adFlow.show({
          placementName: "rewarded",
          slotName: t,
          userTrackingInfo: n,
        }),
        adError: null,
        adMediator: this.adMediator,
      };
    } catch (r) {
      return this.handleError(r);
    }
  }
  handleError(t) {
    return (
      as.error(t),
      t instanceof L
        ? { adInfo: t.adInfo ?? null, adError: t, adMediator: this.adMediator }
        : {
            adInfo: null,
            adError: new L(1783496329, E.Unknown, "Unknown error"),
            adMediator: this.adMediator,
          }
    );
  }
  async showInterstitialAd(t = "", n) {
    try {
      return {
        adInfo: await this.adFlow.show({
          placementName: "interstitial",
          slotName: t,
          userTrackingInfo: n,
        }),
        adError: null,
        adMediator: this.adMediator,
      };
    } catch (r) {
      return this.handleError(r);
    }
  }
  getDebugOptions() {
    return [
      {
        elements: [
          {
            type: "button",
            label: "Show rewarded ad",
            callback: () => {
              this.showRewardedAd("test");
            },
          },
          {
            type: "button",
            label: "Show interstitial ad",
            callback: () => {
              this.showInterstitialAd("test");
            },
          },
        ],
      },
      ...this.params.xPromoAdProvider.getDebugOptions(),
      ...this.params.fallbackProvider.getDebugOptions(),
    ];
  }
}
const Bn = 150,
  Fn = 150,
  Ht = document.createElement("canvas"),
  ls = Ht.getContext("2d"),
  zm = {
    extension: Fa.LoadParser,
    test(e) {
      return e.includes(
        "https://platform-lookaside.fbsbx.com/platform/profilepic/"
      );
    },
    async load(e) {
      let t = null;
      return (
        (t = await new Promise((n) => {
          const r = new Image();
          (r.crossOrigin = "anonymous"), (r.src = e);
          const o = () => {
            if (ls === null) {
              n(r);
              return;
            }
            let { width: s, height: i } = r;
            s > i
              ? s > Bn && ((i *= Bn / s), (s = Bn))
              : i > Fn && ((s *= Fn / i), (i = Fn)),
              (Ht.width = s),
              (Ht.height = i),
              ls.drawImage(r, 0, 0, s, i);
            const a = new Image();
            (a.src = Ht.toDataURL()),
              a.complete
                ? n(a)
                : (a.onload = () => {
                    n(a);
                  });
          };
          r.complete
            ? o()
            : (r.onload = () => {
                o();
              });
        })),
        t ? no.from(t) : new no()
      );
    },
    unload(e) {
      e.destroy(!0);
    },
  };
class jm {
  async init() {}
  isSupported() {
    return typeof navigator < "u" && typeof navigator.vibrate == "function";
  }
  impact(t) {
    switch (t) {
      case "HEAVY":
        this.vibrate(100);
        break;
      case "MEDIUM":
        this.vibrate(50);
        break;
      case "LIGHT":
        this.vibrate(10);
        break;
      default:
        this.vibrate(10);
        break;
    }
  }
  notification(t) {
    switch (t) {
      case "SUCCESS":
        this.vibrate([20, 30, 10]);
        break;
      case "ERROR":
        this.vibrate([10, 30, 70]);
        break;
      case "WARNING":
        this.vibrate(200);
        break;
      default:
        this.vibrate(20);
        break;
    }
  }
  vibrate(t) {
    this.isSupported() && navigator.vibrate(t);
  }
}
const qm = {
    distributions: 2,
    newUserTestSlug: "Match_Up_Club",
    returningUserTestSlug: "Match_Up_Club",
    onActive(e, t) {
      e.platform.platformRemoteConfig.getRemoteConfig().feature.pvp.active =
        t === 2;
    },
  },
  Vm = [qm],
  Wm = [...Vm],
  Km = 12,
  Hm = 40,
  Xm = 3,
  cs = 1440 * 60 * 1e3,
  Jm = he();
class Ym {
  stateController = null;
  isSupported() {
    return !0;
  }
  init(t) {
    return (this.stateController = t), Promise.resolve();
  }
  shouldShowRateUsPopup(t) {
    return t < Km ? !1 : Date.now() >= this.getCooldownUntilMs();
  }
  onRateClick() {
    this.setCooldownUntil(Date.now() + Hm * cs),
      Jm.log("[FakeRateUs] Would open platform rating / store UI.");
  }
  onLaterClick() {
    this.setCooldownUntil(Date.now() + Xm * cs);
  }
  getCooldownUntilMs() {
    return this.stateController?.getRateUsCooldownUntilMs() ?? 0;
  }
  setCooldownUntil(t) {
    this.stateController?.setRateUsCooldownUntilMs(t);
  }
}
const us = he();
class Zm {
  constructor(t) {
    (this.config = t),
      (this.social = t.areSocialFeaturesAvailable() ? new Yp() : null),
      (this.shareable = t.isShareEnabled() ? new Qp() : null),
      (this.tournaments = t.areTournamentsEnabled()
        ? new ve(this.social?.onContextChanged)
        : null),
      (this.payments = t.arePurchasesAvailable() ? new qp() : null),
      (this.privacyConsent = null);
  }
  config;
  name = "Web";
  adModule = null;
  leaderboards = new it();
  social;
  tournaments;
  shareable;
  payments;
  deviceSafeArea = new em();
  onAdFinished = new q.Signal();
  onCheatMenuOptionsChanged = new q.Signal();
  multiplatformPlayerId = null;
  privacyConsent;
  rateUs = new Ym();
  deepLinks = null;
  cheatOptions = new tm();
  notification = null;
  localNotifications = null;
  platformRemoteConfig = new Mm();
  forceUpdate = new Bp(this.platformRemoteConfig);
  haptics = new jm();
  getPlatformType() {
    return "WEB";
  }
  getSupportEmail() {
    return "support-samsung@softgames.de";
  }
  getVersionInfo() {
    return "1.44.1.0-rc4";
  }
  async init() {
    this.multiplatformPlayerId = await this.config.getUserId();
  }
  async createShortcut() {
    return Hp();
  }
  async startGame() {}
  setLoadingProgress() {}
  getCurrentPlayer() {
    const t = this.config.getPlayerOverride();
    return {
      id: this.multiplatformPlayerId ?? "local_user",
      avatarUrl: t?.avatar ?? "fakeMenAvatar_32",
      currentUser: !0,
      name: t?.name ?? "You",
    };
  }
  getFriends() {
    return Promise.resolve([]);
  }
  async getEntryPointName() {
    try {
      return await FBInstant.getEntryPointAsync();
    } catch {
      return null;
    }
  }
  getEntryPointData() {
    return null;
  }
  async showRewardedAd(t) {
    const n = await cr(t),
      r = n === "Error" ? new L(1768988599, E.Unknown, "DEV") : null;
    return (
      this.onAdFinished.emit({
        adInfo: {
          placementId: "DEV_TEST",
          placementName: "DEV_TEST",
          state: n === "Success" ? p.Finished : p.Closed,
          slotName: t,
          network: ht.adNetwork,
          type: M.Rewarded,
          id: "dev_test",
          adShowDelayMs: 0,
          countRetries: 0,
        },
        adError: r,
      }),
      n
    );
  }
  async showInterstitialAd(t) {
    const n = await cr(t),
      r = n === "Error" ? new L(1768988641, E.Unknown, "DEV") : null;
    return (
      this.onAdFinished.emit({
        adInfo: {
          placementId: "DEV_TEST",
          placementName: "DEV_TEST",
          state: n === "Success" ? p.Finished : p.Closed,
          slotName: t,
          network: ht.adNetwork,
          type: M.Interstitial,
          id: "dev_test",
          adShowDelayMs: 0,
          countRetries: 0,
        },
        adError: r,
      }),
      n
    );
  }
  async saveStateAsync(t) {
    ro.set("hexa-stack-crazy-gamesState", t);
  }
  async flushDataAsync() {
    await Promise.resolve();
  }
  async loadStateAsync() {
    return Promise.resolve(ro.get("hexa-stack-crazy-gamesState") ?? {});
  }
  logEvent(t, n, r) {
    try {
      us.log(
        `Platform eventName: "${t}", value: ${n}, parameters: "${JSON.stringify(
          r
        )}"`
      );
    } catch (o) {
      us.error(o);
    }
  }
  async checkBotSubscription() {
    await Promise.resolve();
  }
  getTrackingConfig() {
    return {
      apiKey: "hexa-stack_WCl1N40Srxa5",
      gameSlug: "hexa-stack",
      platformName: b.PlatformName.WEB,
      url: "https://d3ok7fu77sdimr.cloudfront.net/g/hexa-stack",
    };
  }
  getAvatarParser() {
    return zm;
  }
  isDev() {
    return !1;
  }
  setTrackingModule(t) {}
  addWindowFocusChangeCallback(t) {}
  removeWindowFocusChangeCallback(t) {}
  canUseCheats() {
    return !0;
  }
  tryEnableCheatMenu() {}
  cheatEnabled() {
    return !!this.isDev();
  }
  async setUserSegmentation(t) {}
  switchGame(t) {
    return Bm(t);
  }
  async showBannerAd() {}
  async hideBannerAd() {}
  createAdsModule(t, n) {
    if (this.adModule) return this.adModule;
    const r = this.getTrackingConfig()?.gameSlug ?? "hexa-stack",
      o = Ep(t),
      s = vp(n, r);
    return (
      (this.adModule = new Gm({
        fallbackProvider: o.createAdProvider(),
        xPromoAdProvider: s,
      })),
      this.adModule
    );
  }
  getTrackingModuleFactory() {
    const t = this.getTrackingConfig(),
      { gameSlug: n, gameVersion: r, platformName: o, environment: s } = Qh();
    return t
      ? ({ stateController: i }) =>
          new Ri(
            {
              ...t,
              gameSlug: n,
              gameVersion: r,
              platformName: o,
              environment: s,
              sessionId: yi(),
            },
            i
          )
      : null;
  }
  getBannerHeight() {
    return 0;
  }
  getSupportedSplitTests() {
    return Wm;
  }
  canDisplayOtherPlayersNames() {
    return !0;
  }
}
const $t = he(),
  Gn = "Crazy Games";
function Qm(e) {
  return { ...e, adShowDelayMs: e.adShowDelayMs / 1e3 };
}
class eg {
  onAdFinished = new q.Signal();
  onAdActivityChanged = new q.Signal();
  adInProgress = !1;
  get isAdInProgress() {
    return this.adInProgress;
  }
  setAdInProgress(t) {
    this.adInProgress !== t &&
      ((this.adInProgress = t), this.onAdActivityChanged.emit(t));
  }
  adFlow;
  primaryProvider;
  primaryNetwork;
  constructor(t) {
    (this.primaryProvider = t.primaryProvider ?? new He()),
      (this.primaryNetwork = this.primaryProvider.getAdNetwork()),
      t.primaryProvider ||
        $t.warn(
          "No bridge ad provider available; using FakeWebAdProvider for rewarded/interstitial."
        ),
      (this.adFlow = new Ii({
        tracker: Fi({
          adMediator: Gn,
          onAdFinished: (n) => {
            $t.warn(
              n.adError ? "onFailed" : "onSucceeded",
              n.adError ?? n.adInfo
            ),
              this.onAdFinished.emit({ ...n, adInfo: Qm(n.adInfo) });
          },
          onTrackingError: (n) => {
            $t.error("Failed to track ad finished event:", n);
          },
        }),
        waitPreloadTimeoutMs: 5e3,
        placements: this.getPlacements(this.primaryNetwork),
        providers: [this.primaryProvider],
      }));
  }
  getPlacements(t) {
    return [
      {
        name: "rewarded",
        network: t,
        type: M.Rewarded,
        placementId: "rewarded",
      },
      {
        name: "interstitial",
        network: t,
        type: M.Interstitial,
        placementId: "interstitial",
      },
    ];
  }
  async showRewardedAd(t = "", n) {
    return this.showAd("rewarded", t, n);
  }
  async showInterstitialAd(t = "", n) {
    return this.showAd("interstitial", t, n);
  }
  async showAd(t, n, r) {
    Qt.setMuteReason(en.AdPlaying, !0), this.setAdInProgress(!0);
    try {
      return {
        adInfo: await this.adFlow.show({
          placementName: t,
          slotName: n,
          userTrackingInfo: r,
        }),
        adError: null,
        adMediator: Gn,
      };
    } catch (o) {
      $t.warn(`${t} ad failed; continuing`, o);
      const s =
        o instanceof L ? o : new L(1784380221, E.Unknown, "Unknown error");
      return { adInfo: s.adInfo ?? null, adError: s, adMediator: Gn };
    } finally {
      Qt.setMuteReason(en.AdPlaying, !1), this.setAdInProgress(!1);
    }
  }
  getDebugOptions() {
    return [
      {
        elements: [
          {
            type: "button",
            label: "Show rewarded ad",
            callback: () => {
              this.showRewardedAd("test");
            },
          },
          {
            type: "button",
            label: "Show interstitial ad",
            callback: () => {
              this.showInterstitialAd("test");
            },
          },
        ],
      },
    ];
  }
}
const tg = "[Payments]";
class ng {
  constructor(t) {
    this.bridge = t;
  }
  bridge;
  onDelayedProductConsumed = new q.Signal();
  catalogPromise = null;
  purchaseAvailable = !0;
  async init(t) {
    try {
      return (
        await this.bridge.iap.init(),
        (this.purchaseAvailable = await this.bridge.iap.isPurchaseAvailable()),
        this.bridge.iap.isIapSupported()
      );
    } catch (n) {
      return this.warn("init", n), !1;
    }
  }
  async getCatalog() {
    this.catalogPromise ||
      (this.catalogPromise = this.fetchCatalog().catch((t) => {
        throw ((this.catalogPromise = null), t);
      }));
    try {
      return await this.catalogPromise;
    } catch (t) {
      return this.warn("getCatalog", t), null;
    }
  }
  async fetchCatalog() {
    const { products: t } = await this.bridge.iap.getCatalog();
    return t.map((n) => ({
      productID: n.id,
      price: n.price,
      priceAmount: n.priceAmount,
      priceCurrencyCode: n.priceCurrencyCode,
    }));
  }
  async makePurchase(t, n) {
    if (!this.bridge.auth.isAuthenticated())
      return {
        error: { message: "User must be logged in to make a purchase" },
      };
    try {
      const r = await this.bridge.iap.purchaseProduct(t);
      return r
        ? this.toPurchase(r)
        : { error: { message: "Purchase returned no data" } };
    } catch (r) {
      return (
        this.warn("makePurchase", r),
        {
          error: {
            message: r instanceof Error ? r.message : "Purchase failed",
          },
        }
      );
    }
  }
  toPurchase(t) {
    return {
      paymentID: t.transactionId ?? t.paymentId ?? void 0,
      purchaseToken: t.purchaseToken,
      error: null,
    };
  }
  async restorePurchases() {
    return [];
  }
  getPaymentProvider() {
    return Ts.XSOLLA;
  }
  isPurchaseSupported() {
    return this.purchaseAvailable;
  }
  isLoggedIn() {
    return this.bridge.auth.isAuthenticated();
  }
  async login() {
    try {
      return await this.bridge.auth.login(), this.bridge.auth.isAuthenticated();
    } catch (t) {
      return this.warn("login", t), !1;
    }
  }
  warn(t, n) {
    console.warn(`${tg} ${t} failed`, n);
  }
}
class rg {
  constructor(t, n, r) {
    (this.popupStack = t), (this.config = n), (this.resolve = r);
    const {
      title: o,
      txtMessage: s,
      okayButton: i,
      cancelButton: a,
    } = this.layout;
    (o.text = ce(n.titleKey)),
      (s.text = ce(n.messageKey)),
      ds(i, ce(n.okKey)),
      n.cancelKey
        ? (ds(a, ce(n.cancelKey)),
          a.on("pointertap", () => {
            this.finish(!1);
          }))
        : ((a.visible = !1), (a.interactive = !1), (i.y = (i.y + a.y) * 0.5)),
      i.on("pointertap", () => {
        this.handleOk();
      });
  }
  popupStack;
  config;
  resolve;
  layout = new Sa();
  root = this.layout.root;
  initialBounds = this.root.getLocalBounds();
  onEvent = new q.Signal();
  settled = !1;
  busy = !1;
  getAnimatedElements() {
    return [{ container: this.layout.popup }];
  }
  finish(t) {
    this.settled ||
      ((this.settled = !0),
      this.popupStack.closeActivePopup(),
      this.resolve(t));
  }
  async handleOk() {
    const { onOk: t } = this.config;
    if (!t) {
      this.finish(!0);
      return;
    }
    if (this.busy || this.settled) return;
    (this.busy = !0), this.setOkEnabled(!1);
    const n = await t().catch(() => !1);
    (this.busy = !1), n ? this.finish(!0) : this.setOkEnabled(!0);
  }
  setOkEnabled(t) {
    const { okayButton: n } = this.layout;
    (n.interactive = t), (n.alpha = t ? 1 : 0.6);
  }
}
function ds(e, t) {
  const n = e.children.find((r) => r instanceof vr);
  n && (n.text = t);
}
function Gi(e, t) {
  return new Promise((n) => {
    const r = new rg(e, t, n);
    e.addPopup({
      popupInstance: r,
      settings: { overlay: !0 },
      onClosed: () => {
        r.finish(!1);
      },
    });
  });
}
function og(e, t) {
  return Gi(e, {
    titleKey: "login_required_title",
    messageKey: "login_required_message",
    okKey: "login_required_button",
    cancelKey: "login_required_cancel",
    onOk: t,
  });
}
async function zi(e) {
  await Gi(e, {
    titleKey: "play_in_browser_title",
    messageKey: "play_in_browser_message",
    okKey: "play_in_browser_button",
  });
}
const zn = "[Payments]";
class sg {
  constructor(t) {
    this.bridge = t;
  }
  bridge;
  cheatOptions() {
    return [
      {
        label: "CrazyGames",
        elements: [
          {
            type: "button",
            label: "Show play-in-browser popup",
            callback: () => {
              Er().then((n) => zi(n.controller.popups));
            },
          },
          {
            type: "button",
            label: "Toggle LB console",
            isVisible: () => kh(),
            callback: () => {},
          },
        ],
      },
    ];
  }
  async testPurchase(t) {
    try {
      if (
        !this.bridge.auth.isAuthenticated() &&
        (await this.bridge.auth.login(), !this.bridge.auth.isAuthenticated())
      ) {
        console.warn(`${zn} sandbox purchase aborted — user not logged in`);
        return;
      }
      const n = await this.bridge.iap.purchaseProduct(t);
      console.log(`${zn} sandbox purchase result: ${t}`, n);
    } catch (n) {
      console.warn(`${zn} sandbox purchase failed: ${t}`, n);
    }
  }
}
class ig {
  async init() {}
  getRemoteConfig() {
    const t = Kn;
    return {
      ...t,
      ads: {
        ...t.ads,
        interstitials: {
          ...t.ads.interstitials,
          useFacebookFlow: !1,
          cooldownSeconds: 0,
          maxAdsPerSession: Number.POSITIVE_INFINITY,
        },
      },
      feature: {
        ...t.feature,
        weeklyLeaderboards: { ...t.feature.weeklyLeaderboards, active: !1 },
        journeyOffer: { ...t.feature.journeyOffer, active: !0 },
        weeklyTasks: { ...t.feature.weeklyTasks, active: !0 },
      },
    };
  }
}
const ag = [
  "TC1EkKEL9iPNHZKfCQ6honTReOJ3",
  "CuhdNtdRqfeXzxV3BWQMvM8wZRI2",
  "JxnfIpqPgWW7FWRduvEFSDh05q02",
];
let Xt = !1,
  lg = null;
function cg(e) {
  return (lg ??= dg(e));
}
function ug() {
  return !1;
}
async function dg(e) {
  try {
    if (ug()) return (Xt = !0);
    const t = await e.user.getUserSignature(),
      n = t ? hg(t) : null;
    return (Xt = n != null && ag.includes(n));
  } catch {
    return (Xt = !1);
  }
}
function hg(e) {
  const t = e.split(".")[1];
  if (!t) return null;
  const n = t
      .replace(/-/g, "+")
      .replace(/_/g, "/")
      .padEnd(Math.ceil(t.length / 4) * 4, "="),
    r = atob(n),
    s = JSON.parse(
      new TextDecoder().decode(Uint8Array.from(r, (i) => i.charCodeAt(0)))
    ).userId;
  return typeof s == "string" ? s : null;
}
function fg() {
  return Xt;
}
let fr = null;
function jn() {
  fr?.remove(), (fr = null);
}
function pg(e) {
  jn();
  const t = document.createElement("div");
  Object.assign(t.style, {
    position: "fixed",
    inset: "0",
    backgroundColor: "rgba(0,0,0,0.6)",
    zIndex: "100000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
    t.addEventListener("click", (s) => {
      s.target === t && jn();
    });
  const n = document.createElement("div");
  Object.assign(n.style, {
    position: "relative",
    width: "min(90vw, 900px)",
    height: "min(90vh, 1000px)",
    borderRadius: "12px",
    overflow: "hidden",
    background: "#fff",
    boxShadow: "0 12px 40px rgba(0,0,0,.45)",
  });
  const r = document.createElement("button");
  r.setAttribute("aria-label", "Close"),
    (r.textContent = "×"),
    Object.assign(r.style, {
      position: "absolute",
      top: "10px",
      right: "10px",
      width: "40px",
      height: "40px",
      border: "none",
      borderRadius: "50%",
      background: "rgba(0,0,0,0.55)",
      color: "#fff",
      fontSize: "26px",
      lineHeight: "40px",
      cursor: "pointer",
      zIndex: "1",
    }),
    r.addEventListener("click", jn);
  const o = document.createElement("iframe");
  (o.src = e),
    Object.assign(o.style, { width: "100%", height: "100%", border: "none" }),
    n.appendChild(o),
    n.appendChild(r),
    t.appendChild(n),
    document.body.appendChild(t),
    (fr = t);
}
const Ut = "[Leaderboards]";
class mg {
  constructor(t) {
    this.bridge = t;
  }
  bridge;
  async getEntries(t, n = 0) {
    try {
      const r = await this.bridge.leaderboard.getLeaderboardEntries(
          "global",
          t,
          n
        ),
        o = this.bridge.user.getUsername();
      return r.map((s) => this.toCoreEntry(s, s.user.id === o));
    } catch (r) {
      return console.warn(`${Ut} getEntries failed`, r), null;
    }
  }
  async getPlayerEntry() {
    const t = hs(this.bridge);
    if (!t) return null;
    try {
      const n = await t.getOwnEntry();
      return n ? this.toCoreEntry(n, !0) : null;
    } catch (n) {
      return console.warn(`${Ut} getPlayerEntry failed`, n), null;
    }
  }
  async getSeasonEndsAt() {
    const t = hs(this.bridge);
    if (!t) return null;
    try {
      return (await t.getSeason())?.endDate.getTime() ?? null;
    } catch (n) {
      return console.warn(`${Ut} getSeasonEndsAt failed`, n), null;
    }
  }
  isLoggedIn() {
    return this.bridge.auth.isAuthenticated();
  }
  async login() {
    try {
      return await this.bridge.auth.login(), this.bridge.auth.isAuthenticated();
    } catch (t) {
      return console.warn(`${Ut} login failed`, t), !1;
    }
  }
  currentUser() {
    const t = this.bridge.user.getUsername() ?? "You";
    return {
      id: t,
      name: t,
      avatarUrl: Hn(this.bridge.user.getAvatar()),
      currentUser: !0,
    };
  }
  toCoreEntry(t, n) {
    return {
      player: {
        id: t.user.id,
        name: t.user.name ?? t.user.id,
        avatarUrl: Hn(t.user.avatar),
        currentUser: n,
      },
      rank: t.rank,
      score: t.score,
    };
  }
}
function hs(e) {
  const { leaderboard: t } = e;
  return typeof t.getOwnEntry == "function" ? t : null;
}
var gg = { analytics: !0, ads: !0 },
  yg = "https://protonstream.softgames.com/v1/trap",
  wg = class {
    constructor() {
      this.state = { ...gg };
    }
    setInitial(e) {
      e && (this.state = { analytics: e.analytics, ads: e.ads });
    }
    set(e) {
      this.state = { analytics: e.analytics, ads: e.ads };
    }
    current() {
      return { analytics: this.state.analytics, ads: this.state.ads };
    }
  };
function ji() {
  const e = globalThis.crypto;
  if (e?.randomUUID) return e.randomUUID();
  if (e?.getRandomValues) {
    const t = new Uint8Array(16);
    e.getRandomValues(t), (t[6] = (t[6] & 15) | 64), (t[8] = (t[8] & 63) | 128);
    const n = [...t].map((r) => r.toString(16).padStart(2, "0"));
    return `${n.slice(0, 4).join("")}-${n.slice(4, 6).join("")}-${n
      .slice(6, 8)
      .join("")}-${n.slice(8, 10).join("")}-${n.slice(10, 16).join("")}`;
  }
  throw new Error("ProtonStream SDK: crypto API unavailable");
}
var fs = "sg.ps.id";
function bg() {
  try {
    const e = globalThis.localStorage;
    if (!e) return null;
    const t = "sg.ps.probe";
    return e.setItem(t, "1"), e.removeItem(t), e;
  } catch {
    return null;
  }
}
var _g = class {
    constructor() {
      (this.value = null), (this.storage = null);
    }
    load() {
      if (this.value) return this.value;
      if (((this.storage = bg()), this.storage)) {
        const t = this.storage.getItem(fs);
        if (t && t.length > 0 && t.length <= 128) return (this.value = t), t;
      }
      const e = ji();
      if (((this.value = e), this.storage))
        try {
          this.storage.setItem(fs, e);
        } catch {}
      return e;
    }
    __reset() {
      (this.value = null), (this.storage = null);
    }
  },
  Sg = {
    ad_clicked: "ad",
    ad_finished: "ad",
    ad_reward_claimed: "ad",
    ad_shown: "ad",
    game_started: "game",
    generic_event: "generic",
    level_completed: "level",
    level_failed: "level",
    level_started: "level",
    offer_canceled: "offer",
    offer_failed: "offer",
    offer_purchased: "offer",
    offer_selected: "offer",
    offer_shown: "offer",
    offer_viewed: "offer",
    resources_purchased: "resources",
    resources_received: "resources",
    resources_spent: "resources",
    sys_ad_preloaded: "ad",
    sys_ad_requested: "ad",
    sys_cheats_enabled: "sys",
    sys_client_closed: "sys",
    sys_client_disconnected: "sys",
    sys_client_initialized: "sys",
    sys_client_loaded: "sys",
    sys_client_resumed: "sys",
    sys_session_started: "sys",
    sys_testing_variant_assigned: "testing",
    testing_variant_viewed: "testing",
    tutorial_completed: "tutorial",
    tutorial_progressed: "tutorial",
    tutorial_started: "tutorial",
  },
  Eg = 1,
  Pg = /^[a-z]{2,3}(-[A-Z]{2})?$/,
  vg = /^[A-Za-z_]+\/[A-Za-z_/+-]+$/;
function Ig() {
  const e = typeof navigator < "u" ? navigator.language : void 0;
  if (!e) return "en";
  const t = e.split("-"),
    n = t[0]?.toLowerCase() ?? "en",
    r = t[1]?.length === 2 ? t[1].toUpperCase() : void 0,
    o = r ? `${n}-${r}` : n;
  return Pg.test(o) ? o : "en";
}
function Cg() {
  try {
    const e = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (e && vg.test(e)) return e;
  } catch {}
  return "Etc/UTC";
}
function Ag() {
  if (typeof navigator > "u") return;
  const e = navigator.userAgent;
  if (e) return e.length > 512 ? e.slice(0, 512) : e;
}
function kg(e, t, n) {
  const r = {
    event_id: ji(),
    event_name: e,
    bundle: Sg[e],
    schema_version: Eg,
    game_slug: n.config.game_slug,
    client_time: new Date().toISOString(),
    device_id: n.device_id,
    time_zone: Cg(),
    locale: Ig(),
    environment: n.config.environment,
    consent: { analytics: n.consent.analytics, ads: n.consent.ads },
    is_sandbox: n.config.is_sandbox ?? !1,
    properties: t,
  };
  n.user.platform_user_id !== void 0 &&
    (r.platform_user_id = n.user.platform_user_id),
    n.user.backend_user_id !== void 0 &&
      (r.backend_user_id = n.user.backend_user_id),
    n.config.app_version !== void 0 && (r.app_version = n.config.app_version);
  const o = Ag();
  return (
    o !== void 0 && (r.user_agent = o),
    n.ua !== null &&
      (r.ua = {
        ...(n.ua.network !== void 0 ? { network: n.ua.network } : {}),
        ...(n.ua.source !== void 0 ? { source: n.ua.source } : {}),
        ...(n.ua.medium !== void 0 ? { medium: n.ua.medium } : {}),
        ...(n.ua.campaign !== void 0 ? { campaign: n.ua.campaign } : {}),
        ...(n.ua.id !== void 0 ? { id: n.ua.id } : {}),
      }),
    r
  );
}
var Tg = 20,
  Og = 5e3,
  Rg = 5,
  xg = class {
    constructor(e) {
      (this.opts = e),
        (this.queue = []),
        (this.timer = null),
        (this.maxBatch = e.maxBatch ?? Tg),
        (this.flushIntervalMs = e.flushIntervalMs ?? Og),
        (this.maxAttempts = e.maxAttempts ?? Rg),
        (this.fetchImpl = e.fetchImpl ?? globalThis.fetch?.bind(globalThis));
    }
    enqueue(e) {
      this.queue.push({ env: e, attempts: 0 }), this.scheduleFlushIfNeeded();
    }
    async flush() {
      if (
        (this.timer !== null && (clearTimeout(this.timer), (this.timer = null)),
        this.queue.length === 0)
      )
        return;
      const e = this.queue;
      this.queue = [];
      const t = this.encode(e.map((n) => n.env));
      if (!this.fetchImpl) {
        this.requeue(e);
        return;
      }
      try {
        const n = await this.fetchImpl(this.opts.endpoint, {
          method: "POST",
          keepalive: !0,
          headers: {
            "content-type": "application/json",
            "x-sg-key": this.opts.api_key,
          },
          body: t,
        });
        n.ok || this.requeue(e, `HTTP ${n.status}`);
      } catch (n) {
        this.requeue(e, n instanceof Error ? n.message : String(n));
      }
    }
    requeue(e, t) {
      const n = [];
      let r = 0;
      for (const o of e) {
        const s = o.attempts + 1;
        s >= this.maxAttempts ? r++ : n.push({ env: o.env, attempts: s });
      }
      r > 0 &&
        console.warn(
          `ProtonStream SDK: dropped ${r} event(s) after ${
            this.maxAttempts
          } attempts${t ? ` (last: ${t})` : ""}`
        ),
        n.length > 0 &&
          (this.queue.unshift(...n), this.scheduleFlushIfNeeded());
    }
    scheduleFlushIfNeeded() {
      if (this.queue.length >= this.maxBatch) {
        this.flush();
        return;
      }
      this.timer === null &&
        this.queue.length > 0 &&
        (this.timer = setTimeout(() => {
          (this.timer = null), this.flush();
        }, this.flushIntervalMs));
    }
    encode(e) {
      return JSON.stringify({ api_key: this.opts.api_key, items: e });
    }
    flushBeacon(e) {
      if (
        (this.timer !== null && (clearTimeout(this.timer), (this.timer = null)),
        this.queue.length === 0)
      )
        return !0;
      const t =
        e ??
        (typeof navigator < "u" && navigator.sendBeacon
          ? navigator.sendBeacon.bind(navigator)
          : void 0);
      if (!t) return !1;
      const n = this.queue.map((i) => i.env),
        r = this.encode(n),
        o = new Blob([r], { type: "application/json" }),
        s = t(this.opts.endpoint, o);
      return s && (this.queue = []), s;
    }
    __sizeForTests() {
      return this.queue.length;
    }
    __attemptsForTests() {
      return this.queue.map((e) => e.attempts);
    }
    __shutdownForTests() {
      this.timer !== null && (clearTimeout(this.timer), (this.timer = null)),
        (this.queue = []);
    }
  },
  ye = null;
function Dg(e) {
  if (typeof window > "u") return null;
  const t = new AbortController(),
    n = () => {
      e.flushBeacon();
    };
  return (
    window.addEventListener("pagehide", n, { signal: t.signal }),
    document.addEventListener(
      "visibilitychange",
      () => {
        document.visibilityState === "hidden" && n();
      },
      { signal: t.signal }
    ),
    t
  );
}
function Lg(e) {
  if (ye !== null) throw new Error("ProtonStream SDK already initialized");
  const t = new wg();
  t.setInitial(e.consent);
  const n = new _g();
  n.load();
  const r = new xg({ endpoint: e.endpoint ?? yg, api_key: e.api_key }),
    o = Dg(r);
  ye = {
    config: e,
    consent: t,
    user: {},
    ua: null,
    device: n,
    transport: r,
    lifecycleAbort: o,
  };
}
function Ng(e, t) {
  if (ye === null)
    throw new Error("ProtonStream SDK: init() must be called before trap()");
  const n = kg(e, t, {
    config: ye.config,
    consent: ye.consent.current(),
    user: ye.user,
    ua: ye.ua,
    device_id: ye.device.load(),
  });
  ye.transport.enqueue(n);
}
const $g = "hexa-stack-crazy-games",
  qi = "protonstream:session",
  Ug = 1800 * 1e3;
let pr = !1,
  sn = null,
  Vi = 0,
  Mt = null;
function mr(e, t, ...n) {
  console[e](`[CG-ProtonStream] ${t}`, ...n);
}
function Wi() {
  return typeof JS_INIT_TIME == "number"
    ? Math.max(0, Date.now() - JS_INIT_TIME)
    : Math.round(performance.now());
}
function Mg() {
  try {
    const e = localStorage.getItem(qi);
    if (!e) return null;
    const t = JSON.parse(e);
    return typeof t.session_id != "string" ||
      typeof t.last_seen_ms != "number" ||
      typeof t.app_version != "string"
      ? null
      : t;
  } catch {
    return null;
  }
}
function gr() {
  if (!sn) return;
  const e = {
    session_id: sn,
    last_seen_ms: Date.now(),
    app_version: "1.44.1.0-rc4",
  };
  try {
    localStorage.setItem(qi, JSON.stringify(e));
  } catch {}
}
function C(e, t) {
  if (pr)
    try {
      Ng(e, t);
    } catch (n) {
      mr("warn", `failed to emit ${e}`, n);
    }
}
function Bg() {
  const e = Mg(),
    t = Date.now();
  let n = "cold_start";
  e &&
    (e.app_version !== "1.44.1.0-rc4"
      ? (n = "app_version_change")
      : t - e.last_seen_ms >= Ug && (n = "inactivity_timeout")),
    (sn = crypto.randomUUID()),
    (Vi = t),
    C("sys_session_started", {
      session_id: sn,
      trigger: n,
      previous_session_id: e?.session_id ?? null,
      previous_session_end_ts: e
        ? new Date(e.last_seen_ms).toISOString()
        : null,
    }),
    gr(),
    setInterval(gr, 60 * 1e3);
}
function Fg() {
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") Mt = Date.now();
    else if (Mt !== null) {
      const e = Math.round((Date.now() - Mt) / 1e3);
      (Mt = null), C("sys_client_resumed", { hidden_duration_s: e });
    }
  }),
    window.addEventListener("pagehide", () => {
      gr(),
        C("sys_client_closed", {
          session_duration_s: Math.round((Date.now() - Vi) / 1e3),
          reason: "user_unload",
        });
    });
}
function Gg() {
  if (pr) return;
  const e = "17fe9400e81991a88da10b03a3cfc19299dbab747500e025";
  try {
    Lg({
      api_key: e,
      game_slug: $g,
      environment: "prod",
      endpoint: "https://protonstream.softgames.com/v1/trap",
      app_version: "1.44.1.0-rc4",
      is_sandbox: !1,
    }),
      (pr = !0),
      Bg(),
      Fg(),
      C("sys_client_initialized", { load_time_ms: Wi() }),
      mr("log", "initialized (prod)");
  } catch (t) {
    mr("warn", "failed to init SDK", t);
  }
}
function zg(e) {
  const { state: t } = e;
  return Array.isArray(t?.steps) ? t.steps.length : 0;
}
function jg(e) {
  return e.totalSteps === 0
    ? 100
    : Math.round((e.completedSteps / e.totalSteps) * 100);
}
function qg(e) {
  const t = Ea.prototype,
    n = new WeakMap(),
    r = t.setNextStep;
  t.setNextStep = function () {
    let s = n.get(this);
    s ||
      ((s = { totalSteps: zg(this), completedSteps: 0 }),
      n.set(this, s),
      e.started(null));
    const i = this.getActiveStep(),
      a = r.call(this);
    return (
      i && ((s.completedSteps += 1), e.progressed(i.type, jg(s))),
      a || e.completed(i?.type ?? null, 100),
      a
    );
  };
}
const Vg = "hexa",
  Wg = "campaign",
  Kg = "pixijs",
  Hg = "crazygames";
function jr(e, t) {
  return e || String(t);
}
function qr(e) {
  return e.levelType === Pa.Level;
}
let yr = null;
function Ki() {
  return yr === null ? 0 : Math.max(0, Date.now() - yr);
}
function Xg(e) {
  return Object.keys(e ?? {}).some((t) => /^Task .+ goal$/.test(t))
    ? "no_moves"
    : "quit";
}
let ps = !1;
function Jg(e) {
  ps ||
    ((ps = !0),
    C("sys_client_loaded", { load_time_ms: Wi() }),
    C("game_started", {
      new_player: e.sessionCount === 1,
      genre: Vg,
      game_type: Wg,
      engine: Kg,
      entry_point: Hg,
    }));
}
function Yg(e) {
  qr(e) &&
    ((yr = Date.now()),
    C("level_started", {
      id: jr(e.levelId, e.levelNumber),
      attempt_id: e.levelAttemptId,
      type: "main",
      number: e.levelNumber,
    }));
}
function Zg(e) {
  qr(e) &&
    C("level_completed", {
      id: jr(e.levelId, e.levelNumber),
      attempt_id: e.levelAttemptId,
      type: "main",
      number: e.levelNumber,
      playtime: Math.round(Ki() / 1e3),
    });
}
function Qg(e) {
  qr(e) &&
    C("level_failed", {
      id: jr(e.levelId, e.levelNumber),
      attempt_id: e.levelAttemptId,
      type: "main",
      number: e.levelNumber,
      playtime: Math.round(Ki() / 1e3),
      reason: Xg(e.metaProperties),
    });
}
function ey({ adInfo: e, adMediator: t }) {
  const n = ks(e),
    r = e.type === M.Rewarded ? "rewarded" : "interstitial",
    o = {
      id: e.id,
      type: r,
      mediator: String(t),
      trigger: e.placementId,
      slot_name: e.slotName,
      retries: e.countRetries,
    };
  (n === "Success" || n === "Closed") && C("ad_shown", o),
    C("ad_finished", { ...o, was_completed: n === "Success" }),
    r === "rewarded" &&
      n === "Success" &&
      C("ad_reward_claimed", { ...o, reward_type: "unspecified" });
}
function ty(e) {
  const t = e.levelId || null,
    n = String(e.actionType),
    r = n.includes("Purchase");
  Object.entries(e.resourceUpdate).forEach(([o, s]) => {
    if (typeof s != "number" || s === 0) return;
    const i = {
      id: o.toLowerCase(),
      name: o,
      quantity: Math.abs(s),
      trigger: e.actionTrigger,
      reason: n,
      level_id: t,
    };
    s < 0
      ? C("resources_spent", i)
      : C(r ? "resources_purchased" : "resources_received", i);
  });
}
function ny({ data: e, product: t, purchase: n, placementData: r }) {
  const o = {
    id: t.platformId,
    currency_code: t.currency,
    price: t.price,
    price_string: t.priceLabel,
    type: "consumable",
    payment_provider: null,
    platform_product_id: t.platformId,
    sandbox: e.cheatEnabled,
    trigger: r.storeEntryPoint,
  };
  n.error
    ? C("offer_failed", {
        ...o,
        transaction_id: null,
        reason: n.error.message ?? null,
      })
    : C("offer_purchased", {
        ...o,
        transaction_id: n.paymentID ?? null,
        receipt: null,
      });
}
function Hi({ product: e, location: t }) {
  const n = e;
  return typeof n.price != "number" ||
    typeof n.currency != "string" ||
    typeof n.priceLabel != "string"
    ? null
    : {
        id: n.id,
        currency_code: n.currency,
        price: n.price,
        price_string: n.priceLabel,
        platform_product_id: n.platformId,
        trigger: t,
      };
}
function ry(e) {
  const t = Hi(e);
  t && C("offer_shown", t);
}
function oy(e) {
  const t = Hi(e);
  t && C("offer_selected", t);
}
function sy({ testSlug: e, distribution: t }) {
  C("sys_testing_variant_assigned", { slug: e, variant: String(t) });
}
function iy(e) {
  C("sys_cheats_enabled", { detector: "manual" });
}
const ms = {
  trackGameInitialized: Jg,
  trackLevelStarted: Yg,
  trackLevelWon: Zg,
  trackLevelLost: Qg,
  trackAdFinished: ey,
  trackResourceAction: ty,
  trackPurchase: ny,
  trackOfferShown: ry,
  trackOfferClick: oy,
  splitTest: sy,
  trackCheatsEnabled: iy,
};
function Jt(e, t, n) {
  try {
    t(...n);
  } catch (r) {
    console.warn(`[CG-ProtonStream] mapping ${e} failed`, r);
  }
}
function ay(e) {
  const t = new WeakMap();
  return new Proxy(e, {
    get(n, r) {
      const o = Reflect.get(n, r, n);
      if (typeof o != "function") return o;
      const s = o;
      let i = t.get(s);
      if (!i) {
        const a = typeof r == "string" && Object.hasOwn(ms, r) ? ms[r] : void 0;
        (i = a
          ? (...u) => {
              const c = s.apply(n, u);
              return Jt(String(r), a, u), c;
            }
          : (...u) => s.apply(n, u)),
          t.set(s, i);
      }
      return i;
    },
  });
}
function ly() {
  Gg(),
    qg({
      started: (e) => {
        Jt("tutorial_started", () => C("tutorial_started", { step: e }), []);
      },
      progressed: (e, t) => {
        Jt(
          "tutorial_progressed",
          () => C("tutorial_progressed", { step: e, completion_percent: t }),
          []
        );
      },
      completed: (e, t) => {
        Jt(
          "tutorial_completed",
          () => C("tutorial_completed", { step: e, completion_percent: t }),
          []
        );
      },
    });
}
const wr = "cgPhoto";
let an = !1;
function gs(e) {
  return e.image
    ? e.image === wr && !an
      ? { ...e, image: null }
      : e
    : an
    ? { ...e, image: wr }
    : e;
}
function cy() {
  const e = Ia.prototype,
    t = e.getCurrentPlayerAvatarData;
  e.getCurrentPlayerAvatarData = function () {
    return gs(t.call(this));
  };
  const n = e.writeSelfAvatarVariables;
  e.writeSelfAvatarVariables = function (o) {
    n.call(this, gs(o));
  };
}
async function uy(e) {
  const t = e.auth.isAuthenticated() ? e.user.getAvatar() : null;
  t &&
    ((an = await va(wr, t, !1, !0)),
    an && Os.avatarController?.refreshSelfNationality());
}
const dy = {
    privacyUrl: "https://softgames-external.b-cdn.net/privacy/",
    termsUrl: "https://softgames-external.b-cdn.net/termsofuse/",
  },
  ys = {
    apiKey: "hexa-stack_WCl1N40Srxa5",
    gameSlug: "hexa-stack-crazy-games",
    platformName: b.PlatformName.CRAZY_GAMES,
    url: "https://d3ok7fu77sdimr.cloudfront.net/g/hexa-stack",
  },
  ws = "gameState",
  bs = "cg.guestId";
function hy() {
  try {
    let e = localStorage.getItem(bs);
    return (
      e || ((e = `guest-${crypto.randomUUID()}`), localStorage.setItem(bs, e)),
      e
    );
  } catch {
    return `guest-${crypto.randomUUID()}`;
  }
}
const _s = "cg.profileId";
function fy(e) {
  try {
    const t = localStorage.getItem(_s),
      n = e ?? t ?? to.trackingId;
    return n !== t && localStorage.setItem(_s, n), n;
  } catch {
    return e ?? to.trackingId;
  }
}
class py extends Zm {
  constructor(t, n, r = {}) {
    super(n),
      (this.bridge = t),
      (this.loadingHooks = r),
      (this.cgLeaderboards = new mg(t)),
      (this.payments = new ng(t)),
      (this.cheatOptions = new sg(t));
  }
  bridge;
  loadingHooks;
  bridgePlayerId = null;
  bridgeAdProvider = null;
  platformRemoteConfig = new ig();
  rateUs = null;
  forceUpdate = null;
  cgLeaderboards;
  payments;
  cheatOptions;
  async init() {
    console.log("[CG-Wrapper] platform.init start — initializing bridge + SDK"),
      await this.bridge.init(),
      console.log("[CG-Wrapper] bridge.init done"),
      this.bridge.auth.events.loggedIn.on(() => {
        window.location.reload();
      }),
      this.loadingHooks.onStart?.(),
      (this.bridgePlayerId = this.bridge.user.getUserId() ?? hy()),
      (this.bridgeAdProvider =
        await this.bridge.ads.createAdProviderForAdFlow()),
      await this.bridge.platform.preLoadComplete(),
      cg(this.bridge);
  }
  async createShortcut() {
    return !1;
  }
  getTrackingConfig() {
    return ys;
  }
  getTrackingModuleFactory() {
    return ({ stateController: t }) =>
      ay(
        new Ri(
          {
            ...ys,
            gameVersion: "1.44.1.0-rc4",
            environment: "prod",
            sessionId: yi(),
          },
          t
        )
      );
  }
  getSupportEmail() {
    return "support-crazygames@softgames.de";
  }
  getLegalDocuments() {
    return dy;
  }
  openExternalLink(t) {
    pg(t);
  }
  canUseCheats() {
    return fg();
  }
  async startGame() {
    console.log(
      "[CG-Wrapper] platform.startGame — first scene set, game ready"
    ),
      await this.bridge.platform.loadingComplete(),
      this.loadingHooks.onReady?.(),
      uy(this.bridge);
  }
  async saveStateAsync(t) {
    await this.bridge.dataStorage.save({ [ws]: t });
  }
  async loadStateAsync() {
    const n = (await this.bridge.dataStorage.load())?.[ws] ?? {};
    return { ...n, trackingId: fy(n.trackingId) };
  }
  getCurrentPlayer() {
    return {
      id: this.bridgePlayerId ?? "host_user",
      name: this.bridge.user.getUsername() ?? "You",
      avatarUrl: Hn(this.bridge.user.getAvatar(), 256),
      currentUser: !0,
    };
  }
  createAdsModule(t, n) {
    return this.adModule
      ? this.adModule
      : ((this.adModule = new eg({ primaryProvider: this.bridgeAdProvider })),
        this.adModule);
  }
}
const my = "crazygames",
  qn = !1;
function gy(e) {
  let t = !1,
    n = null;
  Xe(
    async () => {
      const { LevelTasksTracker: o } = await import("./coreAppHandle.js").then(
        (s) => s.cs
      );
      return { LevelTasksTracker: o };
    },
    [],
    import.meta.url
  ).then(({ LevelTasksTracker: o }) => {
    const s = o.prototype.getCombinedTally;
    o.prototype.getCombinedTally = function () {
      return (
        (n = this),
        queueMicrotask(() => {
          n = null;
        }),
        s.call(this)
      );
    };
  }),
    Xe(
      async () => {
        const { GameSceneController: o } = await import(
          "./coreAppHandle.js"
        ).then((s) => s.cu);
        return { GameSceneController: o };
      },
      [],
      import.meta.url
    ).then(({ GameSceneController: o }) => {
      o.onLevelLost.connect(() => {
        (t = !0),
          queueMicrotask(() => {
            t = !1;
          });
      });
    });
  const r = {
    setStartGameCallback(o) {
      o();
    },
    setGiftCallback() {},
    gameStarted() {},
    gameFinished(o, s) {
      if (t) return;
      const i = Math.floor(n?.getDioramaFillAmount() ?? s);
      !Number.isFinite(i) ||
        i <= 0 ||
        (console.info("[CG-Wrapper] leaderboard submit", i),
        e.leaderboard
          .saveScore({
            leaderboardId: my,
            userId: e.user.getUserId() ?? "",
            score: i,
          })
          .catch((a) => console.warn("[CG-Wrapper] submitScore failed", a)));
    },
    async getUserID() {
      return e.user.getUserId() ?? "";
    },
    getConfig() {
      return {
        tracking: null,
        sentry: null,
        splitTest: null,
        share: qn,
        social: qn,
        tournaments: qn,
        purchases: !0,
        playerOverride: null,
        ads: { disabled: !1 },
      };
    },
    async getSupportEmail() {
      return "support@softgames.de";
    },
  };
  window.multiplatformWrapper = r;
}
const yy = "179";
function wy() {
  const e = b.initAvo;
  b.initAvo = (t, n, r, o) => {
    e(t, { ...n, schemaVersion: yy }, r, o);
  };
}
let ln = 0,
  Ss = !1;
const Vr = new q.Signal();
function by() {
  return ln > 0;
}
function _y() {
  (ln += 1), Vr.emit();
}
function Sy() {
  ln !== 0 && ((ln -= 1), Vr.emit());
}
function Ey() {
  Ss ||
    ((Ss = !0),
    Xe(
      async () => {
        const { TutorialTextBannerView: e } = await import(
          "./coreAppHandle.js"
        ).then((t) => t.ct);
        return { TutorialTextBannerView: e };
      },
      [],
      import.meta.url
    ).then(({ TutorialTextBannerView: e }) => {
      const t = e.show.bind(e);
      e.show = (n) => {
        const r = t(n);
        _y();
        const o = r.destroy.bind(r);
        let s = !1;
        return (
          (r.destroy = (i) => {
            s || ((s = !0), Sy()), o(i);
          }),
          r
        );
      };
    }));
}
const Es = "gameplayStart",
  Ps = "gameplayStop",
  Py = new Set(["Game", "PVP"]);
function vy(e) {
  let t = !1,
    n = !1;
  const r = (s) => {
      const { sceneManager: i, popups: a } = s.controller;
      let u = !1;
      const c = () => {
          n = !1;
          const h = s.platform.adModule;
          h && !u && ((u = !0), h.onAdActivityChanged.connect(l));
          const g =
            Py.has(i.activeScene?.id ?? "") &&
            a.stack.length === 0 &&
            !h?.isAdInProgress &&
            !by();
          g !== t &&
            ((t = g),
            console.log(`[CG-Wrapper] ${g ? Es : Ps}`),
            e.platform.sendPlatformEvent({ eventType: g ? Es : Ps }));
        },
        l = () => {
          n || ((n = !0), requestAnimationFrame(c));
        };
      Ey(),
        Vr.connect(l),
        i.onSceneActivated.connect(l),
        a.onPopupAdded.connect(l),
        a.onPopupRemoved.connect(l),
        l();
    },
    o = (s) => {
      try {
        return !!(s.controller?.sceneManager && s.controller.popups);
      } catch {
        return !1;
      }
    };
  Er().then((s) => {
    const i = () => {
      o(s) ? r(s) : requestAnimationFrame(i);
    };
    i();
  });
}
function Iy(e) {
  const t = (o) => {
      console.log(`[CG-Wrapper] happytime (${o})`),
        e.platform.sendPlatformEvent({ eventType: "happytime" });
    },
    n = (o) => {
      o.resources.onTransactionMade.connect((s, i) => {
        i === Ca.DioramaCompleteReward && t("diorama completed");
      }),
        Xe(
          async () => {
            const { WinStreakSharePopup: s } = await import(
              "./WinStreakSharePopup.js"
            );
            return { WinStreakSharePopup: s };
          },
          [],
          import.meta.url
        ).then(({ WinStreakSharePopup: s }) => {
          o.controller.popups.onPopupAdded.connect((i) => {
            i instanceof s && t("win streak finished");
          });
        });
    },
    r = (o) => {
      try {
        return !!(o.controller?.popups && o.resources);
      } catch {
        return !1;
      }
    };
  Er().then((o) => {
    const s = () => {
      r(o) ? n(o) : requestAnimationFrame(s);
    };
    s();
  });
}
function Cy(e) {
  e.platform.events.muteSound.on(() => {
    Qt.setMuteReason(en.Platform, !0);
  }),
    e.platform.events.unmuteSound.on(() => {
      Qt.setMuteReason(en.Platform, !1);
    });
}
const Vn = new WeakSet();
async function vs(e, t) {
  const n = e.controller.overlay.view.popups,
    r = n.zIndex;
  n.zIndex = 10;
  try {
    return await t();
  } finally {
    n.zIndex = r;
  }
}
function Ay() {
  const e = Aa.prototype,
    t = e.makePurchase;
  e.makePurchase = async function (...r) {
    if (Vn.has(this)) return !1;
    Vn.add(this);
    try {
      const { app: o, getPlatformPayments: s } = this.config,
        i = s(),
        { popups: a } = o.controller.overlay;
      return i.isPurchaseSupported?.() === !1
        ? (await vs(o, () => zi(a)), !1)
        : i.isLoggedIn?.() === !1 &&
          !(await vs(o, () => og(a, () => i.login())))
        ? !1
        : await t.apply(this, r);
    } finally {
      Vn.delete(this);
    }
  };
}
const ky = 1200,
  Ty = 9186601,
  cn = "cgPlayerIdShort",
  Oy = 16,
  Ry = "…";
function xy(e, t) {
  const n = t.getTextVariableValue("playerId", "unknown"),
    { playerId: r, version: o } = e,
    s = o.x - o.width - Oy;
  t.setTextVariable(cn, n);
  for (let i = n.length - 1; i > 0 && r.x + r.width > s; i -= 1)
    t.setTextVariable(cn, n.slice(0, i) + Ry);
}
function br(e, t) {
  Ta(e, { text: t });
}
function Dy(e) {
  let t = 0;
  return () => {
    if (t) return;
    const n = e.text;
    (e.text = Oa("Copied!")),
      (t = window.setTimeout(() => {
        (e.text = n), (t = 0);
      }, ky));
  };
}
function Is(e, t, n) {
  const r = new vr({ text: "", style: t });
  return (
    br(r, e),
    (r.eventMode = "static"),
    (r.cursor = "pointer"),
    r.on("pointertap", n),
    r
  );
}
function Cs(e, t) {
  const n = e.width,
    r = e.height,
    o = -e.anchor.x * n,
    s = -e.anchor.y * r;
  let i = t.get(e);
  i || ((i = new Ga()), e.addChild(i), t.set(e, i)),
    i
      .clear()
      .rect(o, s + r - 1, n, 2)
      .fill({ color: Ty }),
    (e.hitArea = new Pr(o - 16, s - 14, n + 32, r + 28));
}
function Ly(e, t) {
  const { privacyUrl: n, termsUrl: r } = t.getLegalDocuments(),
    o = e.supportEmail.style.clone();
  e.playerId.anchor.set(0, 0.5),
    e.playerId.position.set(-220, -50),
    (e.playerId.hitArea = new Pr(-8, -21, 480, 79)),
    (e.playerId.style.wordWrap = !1),
    (e.playerId.style.breakWords = !1),
    e.version.anchor.set(1, 0.5),
    e.version.position.set(220, -50),
    (e.supportEmailLabel.visible = !1),
    e.supportEmail.position.set(0, -20);
  const s = Is("Privacy Policy", o, () => t.openExternalLink(n));
  s.anchor.set(1, 0.5);
  const i = new vr({ text: "|", style: o });
  i.anchor.set(0.5), (i.alpha = 0.6);
  const a = Is("Terms of Use", o, () => t.openExternalLink(r));
  a.anchor.set(0, 0.5), e.bottomInfo.addChild(s, i, a);
  const u = new WeakMap(),
    c = () => {
      const g = i.width / 2,
        w = (s.width - a.width) / 2;
      s.position.set(w - g - 8, 12),
        i.position.set(w, 12),
        a.position.set(w + g + 8, 12),
        Cs(s, u),
        Cs(a, u);
    };
  c(), _r(c), s.once("destroyed", () => Rs(c));
}
function Ny() {
  const e = ka.prototype,
    t = e.initLayout;
  e.initLayout = function (...r) {
    t.apply(this, r);
    const { layout: o } = this,
      { variableBank: s } = this.config.app.utils;
    s.setTextVariable(cn, s.getTextVariableValue("playerId", "unknown")),
      br(o.playerId, `!{ID}: $${cn}$`),
      br(o.version, "!{Version}: $gameVersionToDisplay$"),
      (o.playerId.cursor = "pointer"),
      o.playerId.on("pointertap", Dy(o.playerId));
    const i = this.config.app.platform;
    if (i.getLegalDocuments && i.openExternalLink) {
      Ly(o, i);
      const a = () => xy(o, s);
      a(), _r(a), o.playerId.once("destroyed", () => Rs(a));
    }
  };
}
const As = new Set();
function $y(e) {
  const t = Number(e.slice(5)) % Ra;
  As.has(t) ||
    xa(e, Da(t), `cgBotAvatar_${t}`).then((n) => {
      n || As.add(t);
    });
}
function Uy() {
  const e = Os.prototype,
    t = e.setPlayer;
  e.setPlayer = function (r = null) {
    return r !== null && La(r) && $y(r), t.call(this, r);
  };
}
function My() {
  Na.prototype.getRocketHitsLeft = function (t, n) {
    return n.getOutstandingTally($a.Birds) - t;
  };
}
function By() {
  if (!Xi()) return;
  const e = tn.prototype.init;
  tn.prototype.init = function () {
    const n = this;
    return (
      Reflect.set(this, "options", {
        ...n.options,
        pixi: { ...n.options?.pixi, antialias: !1 },
      }),
      e.call(this)
    );
  };
}
function Xi() {
  const e = navigator.userAgent;
  return /iPhone|iPad|iPod/i.test(e)
    ? !0
    : /Macintosh/i.test(e) && navigator.maxTouchPoints > 1;
}
function Fy() {
  if (!Xi()) return;
  const e = tn.prototype.resize;
  tn.prototype.resize = function (n = !1) {
    const r = this.anrTestResolution;
    this.anrTestResolution = r * Gy();
    try {
      e.call(this, n);
    } finally {
      this.anrTestResolution = r;
    }
  };
}
function Gy() {
  const e = window.innerWidth,
    t = window.innerHeight;
  if (!(e > 0 && t > 0)) return 1;
  const { width: n, height: r } = Ua,
    o = Math.max(n / e, r / t),
    s = window.devicePixelRatio || 1;
  return Math.min(1, s / o);
}
function zy(e) {
  console.log("[CG-Wrapper] version 1.44.1.0-rc4"), wy(), By();
  const t = Th();
  return (
    Wh(),
    gy(t),
    vy(t),
    Iy(t),
    Cy(t),
    My(),
    Fy(),
    Ay(),
    Ny(),
    cy(),
    Uy(),
    ly(),
    new py(t, e, {
      onStart: () => {
        Oh();
      },
      onReady: () => {
        Rh(), Lh();
      },
    })
  );
}
const lw = Object.freeze(
  Object.defineProperty({ __proto__: null, default: zy }, Symbol.toStringTag, {
    value: "Module",
  })
);
export {
  wi as A,
  R as I,
  Qe as T,
  et as a,
  E as b,
  sw as c,
  Rr as e,
  P as m,
  be as n,
  lw as p,
};
