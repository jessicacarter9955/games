import { n as e } from "./XKyaHtl9.js";
var t = Array.isArray,
  n = Array.prototype.indexOf,
  r = Array.prototype.includes,
  i = Array.from,
  a = Object.defineProperty,
  o = Object.getOwnPropertyDescriptor,
  s = Object.getOwnPropertyDescriptors,
  c = Object.prototype,
  l = Array.prototype,
  u = Object.getPrototypeOf,
  d = Object.isExtensible;
function f(e) {
  return typeof e == `function`;
}
var p = () => {};
function m(e) {
  return e();
}
function h(e) {
  for (var t = 0; t < e.length; t++) e[t]();
}
function g() {
  var e, t;
  return {
    promise: new Promise((n, r) => {
      (e = n), (t = r);
    }),
    resolve: e,
    reject: t,
  };
}
function _(e, t, n = !1) {
  return e === void 0 ? (n ? t() : t) : e;
}
function v(e, t) {
  if (Array.isArray(e)) return e;
  if (t === void 0 || !(Symbol.iterator in e)) return Array.from(e);
  let n = [];
  for (let r of e) if ((n.push(r), n.length === t)) break;
  return n;
}
var y = 1 << 24,
  b = 1024,
  x = 2048,
  S = 4096,
  ee = 8192,
  te = 16384,
  ne = 32768,
  re = 1 << 25,
  ie = 65536,
  ae = 1 << 18,
  oe = 1 << 19,
  se = 1 << 20,
  ce = 1 << 25,
  le = 1 << 21,
  ue = 1 << 22,
  de = 1 << 23,
  fe = Symbol(`$state`),
  pe = Symbol(`component`),
  me = Symbol(`legacy props`),
  he = Symbol(``),
  ge = Symbol(`proxy path`),
  _e = Symbol(`attributes`),
  ve = Symbol(`class`),
  ye = Symbol(`style`),
  be = Symbol(`text`),
  xe = Symbol(`form reset`),
  Se = new (class extends Error {
    name = `StaleReactionError`;
    message =
      "The reaction that called `getAbortSignal()` was re-run or destroyed";
  })(),
  Ce =
    !!globalThis.document?.contentType &&
    globalThis.document.contentType.includes(`xml`),
  we = {},
  C = Symbol(`uninitialized`),
  Te = `http://www.w3.org/1999/xhtml`,
  Ee = `http://www.w3.org/2000/svg`,
  De = `http://www.w3.org/1998/Math/MathML`;
function Oe() {
  console.warn(`https://svelte.dev/e/derived_inert`);
}
function ke(e) {
  console.warn(`https://svelte.dev/e/hydratable_missing_but_expected`);
}
function Ae(e) {
  console.warn(`https://svelte.dev/e/hydration_mismatch`);
}
function je() {
  console.warn(`https://svelte.dev/e/select_multiple_invalid_value`);
}
function Me() {
  console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`);
}
function Ne(e) {
  console.warn(`https://svelte.dev/e/transition_slide_display`);
}
var w = !1;
function T(e) {
  w = e;
}
var E;
function D(e) {
  if (e === null) throw (Ae(), we);
  return (E = e);
}
function O() {
  return D(R(E));
}
function Pe(e) {
  if (w) {
    if (R(E) !== null) throw (Ae(), we);
    E = e;
  }
}
function Fe(e = 1) {
  if (w) {
    for (var t = e, n = E; t--; ) n = R(n);
    E = n;
  }
}
function Ie(e = !0) {
  for (var t = 0, n = E; ; ) {
    if (n.nodeType === 8) {
      var r = n.data;
      if (r === `]`) {
        if (t === 0) return n;
        --t;
      } else
        (r === `[` ||
          r === `[!` ||
          (r[0] === `[` && !isNaN(Number(r.slice(1))))) &&
          (t += 1);
    }
    var i = R(n);
    e && n.remove(), (n = i);
  }
}
function Le(e) {
  if (!e || e.nodeType !== 8) throw (Ae(), we);
  return e.data;
}
function Re(e) {
  return e === this.v;
}
function ze(e, t) {
  return e == e
    ? e !== t || (typeof e == `object` && !!e) || typeof e == `function`
    : t == t;
}
function Be(e) {
  return !ze(e, this.v);
}
function Ve(e) {
  throw Error(`https://svelte.dev/e/experimental_async_required`);
}
function He(e) {
  throw Error(`https://svelte.dev/e/lifecycle_outside_component`);
}
function Ue() {
  throw Error(`https://svelte.dev/e/missing_context`);
}
function We() {
  throw Error(`https://svelte.dev/e/async_derived_orphan`);
}
function Ge(e, t, n) {
  throw Error(`https://svelte.dev/e/each_key_duplicate`);
}
function Ke(e) {
  throw Error(`https://svelte.dev/e/effect_in_teardown`);
}
function qe() {
  throw Error(`https://svelte.dev/e/effect_in_unowned_derived`);
}
function Je(e) {
  throw Error(`https://svelte.dev/e/effect_orphan`);
}
function Ye() {
  throw Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
}
function Xe() {
  throw Error(`https://svelte.dev/e/fork_discarded`);
}
function Ze() {
  throw Error(`https://svelte.dev/e/fork_timing`);
}
function Qe() {
  throw Error(`https://svelte.dev/e/get_abort_signal_outside_reaction`);
}
function $e() {
  throw Error(`https://svelte.dev/e/hydration_failed`);
}
function et(e) {
  throw Error(`https://svelte.dev/e/lifecycle_legacy_only`);
}
function tt(e) {
  throw Error(`https://svelte.dev/e/props_invalid_value`);
}
function nt() {
  throw Error(`https://svelte.dev/e/state_descriptors_fixed`);
}
function rt() {
  throw Error(`https://svelte.dev/e/state_prototype_fixed`);
}
function it() {
  throw Error(`https://svelte.dev/e/state_unsafe_mutation`);
}
function at() {
  throw Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`);
}
var ot = !1;
function st() {
  ot = !0;
}
var ct = [];
function lt(e, t = !1, n = !1) {
  return ut(e, new Map(), ``, ct, null, n);
}
function ut(e, n, r, i, a = null, o = !1) {
  if (typeof e == `object` && e) {
    var s = n.get(e);
    if (s !== void 0) return s;
    if (e instanceof Map) return new Map(e);
    if (e instanceof Set) return new Set(e);
    if (t(e)) {
      var l = Array(e.length);
      n.set(e, l), a !== null && n.set(a, l);
      for (var d = 0; d < e.length; d += 1) {
        var f = e[d];
        d in e && (l[d] = ut(f, n, r, i, null, o));
      }
      return l;
    }
    if (u(e) === c) {
      (l = {}), n.set(e, l), a !== null && n.set(a, l);
      for (var p of Object.keys(e)) l[p] = ut(e[p], n, r, i, null, o);
      return l;
    }
    if (e instanceof Date) return e.getTime(), structuredClone(e);
    if (typeof e.toJSON == `function` && !o) return ut(e.toJSON(), n, r, i, e);
  }
  if (e instanceof EventTarget) return e;
  try {
    return structuredClone(e);
  } catch {
    return e;
  }
}
function dt(e, t) {
  return (e.label = t), ft(e.v, t), e;
}
function ft(e, t) {
  return e?.[ge]?.(t), e;
}
function pt(e) {
  return typeof e == `symbol`
    ? `Symbol(${e.description})`
    : typeof e == `function`
    ? `<function>`
    : typeof e == `object` && e
    ? `<object>`
    : String(e);
}
function mt(e, t, n) {
  let r = {};
  return [() => (n(r) || Ue(), e(r)), (e) => t(r, e), () => n(r)];
}
function ht(e) {
  let t = e.p;
  for (; t !== null && t.c === null; ) t = t.p;
  return t?.c ?? null;
}
function gt(e, t) {
  return e === null && He(t), (e.c ??= new Map(ht(e) || void 0));
}
var k = null;
function _t(e) {
  k = e;
}
function vt() {
  return mt(yt, bt, xt);
}
function yt(e) {
  return gt(k, `getContext`).get(e);
}
function bt(e, t) {
  return gt(k, `setContext`).set(e, t), t;
}
function xt(e) {
  return gt(k, `hasContext`).has(e);
}
function St() {
  return gt(k, `getAllContexts`);
}
function Ct(e, t = !1, n) {
  k = {
    p: k,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: G,
    l: ot && !t ? { s: null, u: null, $: [] } : null,
  };
}
function wt(e) {
  var t = k,
    n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n) nr(r);
  }
  return e !== void 0 && (t.x = e), (t.i = !0), (k = t.p), Tt(e);
}
function Tt(e = {}) {
  return a(e, pe, { value: !0 }), e;
}
function Et() {
  return !ot || (k !== null && k.l === null);
}
var Dt = [];
function Ot() {
  var e = Dt;
  (Dt = []), h(e);
}
function A(e) {
  if (Dt.length === 0 && !nn) {
    var t = Dt;
    queueMicrotask(() => {
      t === Dt && Ot();
    });
  }
  Dt.push(e);
}
function kt() {
  for (; Dt.length > 0; ) Ot();
}
var At = ~(x | S | b);
function j(e, t) {
  e.f = (e.f & At) | t;
}
function jt(e) {
  e.f & 512 || e.deps === null ? j(e, b) : j(e, S);
}
function Mt(e, t) {
  e.f & 2048 ? t.set(e, x) : e.f & 4096 && t.get(e) !== 2048 && t.set(e, S),
    j(e, b);
}
function Nt(e, t) {
  if (t) {
    let t = document.body;
    (e.autofocus = !0),
      A(() => {
        document.activeElement === t && e.focus();
      });
  }
}
function Pt(e) {
  w && L(e) !== null && Gn(e);
}
var Ft = !1;
function It() {
  Ft ||
    ((Ft = !0),
    document.addEventListener(
      `reset`,
      (e) => {
        Promise.resolve().then(() => {
          if (!e.defaultPrevented) for (let t of e.target.elements) t[xe]?.();
        });
      },
      { capture: !0 }
    ));
}
function Lt(e) {
  var t = H,
    n = G;
  W(null), K(null);
  try {
    return e();
  } finally {
    W(t), K(n);
  }
}
function Rt(e, t, n, r = n) {
  e.addEventListener(t, () => Lt(n));
  let i = e[xe];
  (e[xe] = i
    ? () => {
        i(), r(!0);
      }
    : () => r(!0)),
    It();
}
function zt(e, t, n, r) {
  let i = Et() ? Ut : qt;
  var a = e.filter((e) => !e.settled),
    o = t.map(i);
  if (n.length === 0 && a.length === 0) {
    r(o);
    return;
  }
  var s = G,
    c = Bt(),
    l =
      a.length === 1
        ? a[0].promise
        : a.length > 1
        ? Promise.all(a.map((e) => e.promise))
        : null;
  function u(e) {
    if (!(s.f & 16384)) {
      c();
      try {
        r([...o, ...e]);
      } catch (e) {
        Xn(e, s);
      }
      Vt();
    }
  }
  var d = Ht();
  if (n.length === 0) {
    l.then(() => u([])).finally(d);
    return;
  }
  function f() {
    Promise.all(n.map((e) => Gt(e)))
      .then(u)
      .catch((e) => Xn(e, s))
      .finally(d);
  }
  l
    ? l.then(() => {
        s.f & 16384 ? d() : (c(), f(), Vt());
      })
    : f();
}
function Bt() {
  var e = G,
    t = H,
    n = k,
    r = M;
  return function (i = !0) {
    K(e), W(t), _t(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
  };
}
function Vt(e = !0) {
  K(null), W(null), _t(null), e && M?.deactivate();
}
function Ht() {
  var e = G,
    t = e.b,
    n = M,
    r = !!t?.is_rendered();
  return (
    t?.update_pending_count(1, n),
    n.increment(r, e),
    () => {
      t?.update_pending_count(-1, n), n.decrement(r, e);
    }
  );
}
function Ut(e) {
  var t = 2 | x;
  return (
    G !== null && (G.f |= oe),
    {
      ctx: k,
      deps: null,
      effects: null,
      equals: Re,
      f: t,
      fn: e,
      reactions: null,
      rv: 0,
      v: C,
      wv: 0,
      parent: G,
      ac: null,
    }
  );
}
var Wt = Symbol(`obsolete`);
function Gt(e, t, n) {
  let r = G;
  r === null && We();
  var i = void 0,
    a = Sn(C),
    o = !H,
    s = new Set();
  return (
    or(() => {
      var t = G,
        n = g();
      i = n.promise;
      try {
        Promise.resolve(e())
          .then(n.resolve, (e) => {
            e !== Se && n.reject(e);
          })
          .finally(Vt);
      } catch (e) {
        n.reject(e), Vt();
      }
      var c = M;
      if (o) {
        if (t.f & 32768) var l = Ht();
        if (r.b?.is_rendered()) c.async_deriveds.get(t)?.reject(Wt);
        else for (let e of s.values()) e.reject(Wt);
        s.add(n), c.async_deriveds.set(t, n);
      }
      let u = (e, t = void 0) => {
        l?.(),
          s.delete(n),
          t !== Wt &&
            (c.activate(),
            t
              ? ((a.f |= de), Dn(a, t))
              : (a.f & 8388608 && (a.f ^= de), Dn(a, e)),
            c.deactivate());
      };
      n.promise.then(u, (e) => u(null, e || `unknown`));
    }),
    er(() => {
      for (let e of s) e.reject(Wt);
    }),
    new Promise((e) => {
      function t(n) {
        function r() {
          n === i ? e(a) : t(i);
        }
        n.then(r, r);
      }
      t(i);
    })
  );
}
function Kt(e) {
  let t = Ut(e);
  return Tr(t), t;
}
function qt(e) {
  let t = Ut(e);
  return (t.equals = Be), t;
}
function Jt(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1) V(t[n]);
  }
}
function Yt(e) {
  var t,
    n = G,
    r = e.parent;
  if (!Cr && r !== null && e.v !== C && r.f & 24576) return Oe(), e.v;
  K(r);
  try {
    Jt(e), (t = Pr(e));
  } finally {
    K(n);
  }
  return t;
}
function Xt(e) {
  var t = Yt(e);
  !e.equals(t) &&
  ((e.wv = jr()),
  (!M?.is_fork || e.deps === null) &&
    (M === null ? (e.v = t) : (M.capture(e, t, !0), en?.capture(e, t, !0)),
    e.deps === null))
    ? j(e, b)
    : Cr || (N === null ? jt(e) : ($n() || M?.is_fork) && N.set(e, t));
}
function Zt(e) {
  if (e.effects !== null)
    for (let t of e.effects)
      (t.teardown || t.ac) &&
        (t.teardown?.(),
        t.ac !== null &&
          Lt(() => {
            t.ac.abort(Se), (t.ac = null);
          }),
        t.fn !== null && (t.teardown = p),
        Lr(t, 0),
        pr(t));
}
function Qt(e) {
  if (e.effects !== null)
    for (let t of e.effects) t.teardown && t.fn !== null && Rr(t);
}
var $t = null,
  M = null,
  en = null,
  N = null,
  tn = null,
  nn = !1,
  rn = !1,
  an = null,
  on = null,
  sn = 0,
  cn = 1,
  ln = class e {
    id = cn++;
    started = !1;
    linked = !0;
    prev = null;
    next = null;
    async_deriveds = new Map();
    current = new Map();
    previous = new Map();
    #e = new Set();
    #t = new Set();
    #n = 0;
    #r = new Map();
    #i = null;
    #a = [];
    #o = [];
    #s = new Map();
    #c = new Map();
    #l = new Set();
    is_fork = !1;
    #u = !1;
    constructor() {
      $t === null ? ($t = this) : (($t.next = this), (this.prev = $t)),
        ($t = this);
    }
    #d() {
      if (this.is_fork) return !0;
      for (let e of this.#r.keys()) if (!this.#f(e)) return !0;
      return !1;
    }
    #f(e) {
      for (var t = e; t !== null; t = t.parent) if (this.#c.has(t)) return !0;
      return !1;
    }
    skip_effect(e) {
      this.#c.has(e) || this.#c.set(e, { d: [], m: [] }), this.#l.delete(e);
    }
    unskip_effect(e, t = (e) => this.schedule(e)) {
      var n = this.#c.get(e);
      if (n) {
        this.#c.delete(e);
        for (var r of n.d) j(r, x), t(r);
        for (r of n.m) j(r, S), t(r);
      }
      this.#l.add(e);
    }
    #p() {
      var e = [];
      for (let i of this.#a)
        if (!(i.f & 16384 || !(i.f & 6144))) {
          for (var t = i, n = !1; t.parent !== null; ) {
            t = t.parent;
            var r = t.f;
            if (r & 96) {
              if (!(r & 1024)) {
                n = !0;
                break;
              }
              t.f ^= b;
            }
          }
          n || e.push(t);
        }
      return (this.#a = []), e;
    }
    #m() {
      this.started = !0;
      for (let [e, t] of this.#s) j(e, t), this.schedule(e);
      this.apply();
      for (var t = (an = []), n = [], r = (on = []); this.#a.length > 0; ) {
        sn++ > 1e3 && (this.#b(), dn());
        for (let e of this.#p())
          try {
            this.#h(e, t, n);
          } catch (t) {
            throw (_n(e), this.#d() || this.discard(), t);
          }
      }
      if (((M = null), r.length > 0)) {
        var i = e.ensure();
        for (let e of r) i.schedule(e);
      }
      if (((an = null), (on = null), this.#d())) {
        this.#y(n), this.#y(t);
        for (let [e, t] of this.#c) gn(e, t);
        r.length > 0 && M.#m();
        return;
      }
      let a = this.#g();
      if (a) this.#y(n), this.#y(t), a.#v(this);
      else {
        this.#s.clear();
        for (let e of this.#e) e(this);
        this.#e.clear(),
          (en = this),
          pn(n),
          pn(t),
          (en = null),
          this.#i?.resolve();
        var o = M;
        this.#n === 0 && (this.#a.length === 0 || o !== null) && this.#b(),
          o !== null && (P.clear(), o.#m());
      }
    }
    #h(e, t, n) {
      e.f ^= b;
      for (var r = e.first; r !== null; ) {
        var i = r.f,
          a = !!(i & 96);
        if (!((a && i & 1024) || i & 8192 || this.#c.has(r)) && r.fn !== null) {
          a
            ? (r.f ^= b)
            : i & 4
            ? t.push(r)
            : Mr(r) && (i & 16 && this.add_dirty_reaction(r, S), Rr(r));
          var o = r.first;
          if (o !== null) {
            r = o;
            continue;
          }
        }
        for (; r !== null; ) {
          var s = r.next;
          if (s !== null) {
            r = s;
            break;
          }
          r = r.parent;
        }
      }
    }
    #g() {
      for (var e = this.prev; e !== null; e = e.prev)
        if (!e.is_fork && this.#_(e)) return e;
      return null;
    }
    #_(e) {
      for (let [t, [, n]] of this.current)
        if (!n && e.current.has(t)) return !0;
      return !1;
    }
    #v(e) {
      for (let [t, n] of e.current)
        !this.previous.has(t) &&
          e.previous.has(t) &&
          this.previous.set(t, e.previous.get(t)),
          this.current.set(t, n);
      for (let [t, n] of e.async_deriveds) {
        let e = this.async_deriveds.get(t);
        e && n.promise.then(e.resolve).catch(e.reject);
      }
      e.async_deriveds.clear(), this.transfer_reactions(e.#s);
      let t = (e) => {
        var n = e.reactions;
        if (n !== null && !(e.f & 2 && !(e.f & 6144)))
          for (let e of n) {
            var r = e.f;
            if (r & 2) t(e);
            else {
              var i = e;
              r & 4194320 &&
                !this.async_deriveds.has(i) &&
                (this.#s.delete(i), j(i, x), this.schedule(i));
            }
          }
      };
      for (let e of this.current.keys()) t(e);
      this.oncommit(() => e.discard()), e.#b(), (M = this), this.#m();
    }
    #y(e) {
      for (var t = 0; t < e.length; t += 1) Mt(e[t], this.#s);
    }
    capture(e, t, n = !1) {
      e.v !== C && !this.previous.has(e) && this.previous.set(e, e.v),
        e.f & 8388608 || (this.current.set(e, [t, n]), N?.set(e, t)),
        this.is_fork || (e.v = t);
    }
    activate() {
      M = this;
    }
    deactivate() {
      (M = null), (N = null);
    }
    flush() {
      try {
        (rn = !0), (M = this), this.#m();
      } finally {
        (sn = 0),
          (tn = null),
          (an = null),
          (on = null),
          (rn = !1),
          (M = null),
          (N = null),
          P.clear();
      }
    }
    discard() {
      for (let e of this.#t) e(this);
      this.#t.clear();
      for (let e of this.async_deriveds.values()) e.reject(Wt);
      this.#b(), this.#i?.resolve();
    }
    register_created_effect(e) {
      this.#o.push(e);
    }
    increment(e, t) {
      if (((this.#n += 1), e)) {
        let e = this.#r.get(t) ?? 0;
        this.#r.set(t, e + 1);
      }
    }
    decrement(e, t) {
      if ((--this.#n, e)) {
        let e = this.#r.get(t) ?? 0;
        e === 1 ? this.#r.delete(t) : this.#r.set(t, e - 1);
      }
      this.#u ||
        ((this.#u = !0),
        A(() => {
          (this.#u = !1), this.linked && this.flush();
        }));
    }
    transfer_reactions(e) {
      for (let [t, n] of e) this.add_dirty_reaction(t, n);
      e.clear();
    }
    add_dirty_reaction(e, t) {
      (t === 2048 || this.#s.get(e) !== 2048) && this.#s.set(e, t);
    }
    oncommit(e) {
      this.#e.add(e);
    }
    ondiscard(e) {
      this.#t.add(e);
    }
    settled() {
      return (this.#i ??= g()).promise;
    }
    static ensure() {
      if (M === null) {
        let t = (M = new e());
        !rn &&
          !nn &&
          A(() => {
            t.started || t.flush();
          });
      }
      return M;
    }
    apply() {
      N = null;
    }
    schedule(e) {
      (tn = e),
        e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)
          ? e.b.defer_effect(e)
          : this.#a.push(e);
    }
    #b() {
      if (this.linked) {
        var e = this.prev,
          t = this.next;
        e === null || (e.next = t),
          t === null ? ($t = e) : (t.prev = e),
          (this.linked = !1);
      }
    }
  };
function un(e) {
  var t = nn,
    n = en;
  (en = null), (nn = !0);
  try {
    var r;
    for (e && (un(), (r = e())); ; ) {
      if ((kt(), M === null)) return r;
      M.flush();
    }
  } finally {
    (nn = t), (en = n);
  }
}
function dn() {
  try {
    Ye();
  } catch (e) {
    Xn(e, tn);
  }
}
var fn = null;
function pn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if (
        !(r.f & 24576) &&
        Mr(r) &&
        ((fn = new Set()),
        Rr(r),
        r.deps === null &&
          r.first === null &&
          r.nodes === null &&
          r.teardown === null &&
          r.ac === null &&
          gr(r),
        fn?.size > 0)
      ) {
        P.clear();
        for (let e of fn) {
          if (e.f & 24576) continue;
          let t = [e],
            n = e.parent;
          for (; n !== null; )
            fn.has(n) && (fn.delete(n), t.push(n)), (n = n.parent);
          for (let e = t.length - 1; e >= 0; e--) {
            let n = t[e];
            n.f & 24576 || Rr(n);
          }
        }
        fn.clear();
      }
    }
    fn = null;
  }
}
function mn(e, t) {
  if (e.reactions !== null)
    for (let n of e.reactions) {
      let e = n.f;
      e & 2 ? mn(n, t) : e & 131072 && (j(n, x), t.add(n));
    }
}
function hn(e) {
  M.schedule(e);
}
function gn(e, t) {
  if (!(e.f & 32 && e.f & 1024)) {
    e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), j(e, b);
    for (var n = e.first; n !== null; ) gn(n, t), (n = n.next);
  }
}
function _n(e) {
  j(e, b);
  for (var t = e.first; t !== null; ) _n(t), (t = t.next);
}
function vn(e) {
  Ve(`fork`), M !== null && Ze(), un();
  var t = ln.ensure();
  (t.is_fork = !0), (N = new Map());
  var n = !1,
    r = t.settled();
  return (
    e(),
    un(),
    {
      commit: async () => {
        if (n) await r;
        else {
          t.linked || Xe(), (n = !0), (t.is_fork = !1);
          for (var [e, [i]] of t.current) (e.v = i), (e.wv = jr());
          un(() => {
            var e = new Set();
            for (var n of t.current.keys()) mn(n, e);
            bn(e), On();
          }),
            t.flush(),
            await r;
        }
      },
      discard: () => {
        for (var e of t.current.keys()) e.wv = jr();
        !n && t.linked && t.discard();
      },
    }
  );
}
var yn = new Set(),
  P = new Map();
function bn(e) {
  yn = e;
}
var xn = !1;
function Sn(e, t) {
  return { f: 0, v: e, reactions: null, equals: Re, rv: 0, wv: 0 };
}
function Cn(e, t) {
  let n = Sn(e, t);
  return Tr(n), n;
}
function wn(e, t = !1, n = !0) {
  let r = Sn(e);
  return (
    t || (r.equals = Be),
    ot && n && k !== null && k.l !== null && (k.l.s ??= []).push(r),
    r
  );
}
function F(e, t, n = !1) {
  return (
    H !== null &&
      (!U || H.f & 131072) &&
      Et() &&
      H.f & 4325394 &&
      (q === null || !q.has(e)) &&
      it(),
    Dn(e, n ? Mn(t) : t, on)
  );
}
var Tn = null,
  En = 0;
function Dn(e, t, n = null) {
  if (!e.equals(t)) {
    Cr ? P.set(e, t) : P.has(e) || P.set(e, e.v);
    var r = ln.ensure();
    if ((r.capture(e, t), e.f & 2)) {
      let t = e;
      e.f & 2048 && Yt(t), N === null && jt(t);
    }
    (e.wv = jr()),
      (Tn = null),
      (En = 0),
      jn(e, x, n),
      (Tn = null),
      Et() &&
        G !== null &&
        G.f & 1024 &&
        !(G.f & 96) &&
        (X === null ? Er([e]) : X.push(e)),
      !r.is_fork && yn.size > 0 && !xn && On();
  }
  return t;
}
function On() {
  xn = !1;
  for (let e of yn) {
    e.f & 1024 && j(e, S);
    let t;
    try {
      t = Mr(e);
    } catch {
      t = !0;
    }
    t && Rr(e);
  }
  yn.clear();
}
function kn(e, t = 1) {
  var n = Z(e),
    r = t === 1 ? n++ : n--;
  return F(e, n), r;
}
function An(e) {
  F(e, e.v + 1);
}
function jn(e, t, n) {
  var r = e.reactions;
  if (r !== null) {
    var i = Et(),
      a = r.length;
    if (((En += a), En > 1e5 && Tn === null && (Tn = new Set()), Tn !== null)) {
      if (Tn.has(e)) return;
      Tn.add(e);
    }
    for (var o = 0; o < a; o++) {
      var s = r[o],
        c = s.f;
      if (i || s !== G) {
        var l = (c & x) === 0;
        if ((l && j(s, t), c & 131072)) yn.add(s);
        else if (c & 2) {
          var u = s;
          N?.delete(u), jn(u, S, n);
        } else if (l) {
          var d = s;
          c & 16 && fn !== null && fn.add(d), n === null ? hn(d) : n.push(d);
        }
      }
    }
  }
}
function Mn(e) {
  if (typeof e != `object` || !e || fe in e || pe in e) return e;
  let n = u(e);
  if (n !== c && n !== l) return e;
  var r = new Map(),
    i = t(e),
    a = Cn(0),
    s = null,
    d = kr,
    f = (e) => {
      if (kr === d) return e();
      var t = H,
        n = kr;
      W(null), Ar(d);
      var r = e();
      return W(t), Ar(n), r;
    };
  return (
    i && r.set(`length`, Cn(e.length, s)),
    new Proxy(e, {
      defineProperty(e, t, n) {
        (`value` in n &&
          n.configurable !== !1 &&
          n.enumerable !== !1 &&
          n.writable !== !1) ||
          nt();
        var i = r.get(t);
        return (
          i === void 0
            ? f(() => {
                var e = Cn(n.value, s);
                return r.set(t, e), e;
              })
            : F(i, n.value, !0),
          !0
        );
      },
      deleteProperty(e, t) {
        var n = r.get(t);
        if (n === void 0) {
          if (t in e) {
            let e = f(() => Cn(C, s));
            r.set(t, e), An(a);
          }
        } else F(n, C), An(a);
        return !0;
      },
      get(t, n, i) {
        if (n === fe) return e;
        var a = r.get(n),
          c = n in t;
        if (
          (a === void 0 &&
            (!c || o(t, n)?.writable) &&
            ((a = f(() => Cn(Mn(c ? t[n] : C), s))), r.set(n, a)),
          a !== void 0)
        ) {
          var l = Z(a);
          return l === C ? void 0 : l;
        }
        return Reflect.get(t, n, i);
      },
      getOwnPropertyDescriptor(e, t) {
        this.has?.(e, t);
        var n = Reflect.getOwnPropertyDescriptor(e, t),
          i = r.get(t);
        if (i !== void 0) {
          var a = Z(i);
          if (a === C) return;
          if (n && `value` in n) n.value = a;
          else
            return { enumerable: !0, configurable: !0, value: a, writable: !0 };
        }
        return n;
      },
      has(e, t) {
        if (t === fe) return !0;
        var n = r.get(t),
          i = (n !== void 0 && n.v !== C) || Reflect.has(e, t);
        return (n !== void 0 ||
          ((G !== null || H !== null) && (!i || o(e, t)?.writable))) &&
          (n === void 0 &&
            ((n = f(() => Cn(i ? Mn(e[t]) : C, s))), r.set(t, n)),
          Z(n) === C)
          ? !1
          : i;
      },
      set(e, t, n, c) {
        var l = r.get(t),
          u = t in e;
        if (i && t === `length`)
          for (var d = n; d < l.v; d += 1) {
            var p = r.get(d + ``);
            p === void 0
              ? d in e && ((p = f(() => Cn(C, s))), r.set(d + ``, p))
              : F(p, C);
          }
        if (l === void 0)
          (!u || o(e, t)?.writable) &&
            ((l = f(() => Cn(void 0, s))), F(l, Mn(n)), r.set(t, l));
        else {
          u = l.v !== C;
          var m = f(() => Mn(n));
          F(l, m);
        }
        var h = Reflect.getOwnPropertyDescriptor(e, t);
        if ((h?.set && h.set.call(c, n), !u)) {
          if (i && typeof t == `string`) {
            var g = r.get(`length`),
              _ = Number(t);
            Number.isInteger(_) && _ >= g.v && F(g, _ + 1);
          }
          An(a);
        }
        return !0;
      },
      ownKeys(e) {
        Z(a);
        var t = Reflect.ownKeys(e).filter((e) => {
          var t = r.get(e);
          return t === void 0 || t.v !== C;
        });
        for (var [n, i] of r) i.v !== C && !(n in e) && t.push(n);
        return t;
      },
      setPrototypeOf() {
        rt();
      },
    })
  );
}
function Nn(e) {
  try {
    if (typeof e == `object` && e && fe in e) return e[fe];
  } catch {}
  return e;
}
function Pn(e, t) {
  return Object.is(Nn(e), Nn(t));
}
var Fn, In, Ln, Rn, zn;
function Bn() {
  if (Fn === void 0) {
    (Fn = window), (In = document), (Ln = /Firefox/.test(navigator.userAgent));
    var e = Element.prototype,
      t = Node.prototype,
      n = Text.prototype;
    (Rn = o(t, `firstChild`).get),
      (zn = o(t, `nextSibling`).get),
      d(e) &&
        ((e[ve] = void 0), (e[_e] = null), (e[ye] = void 0), (e.__e = void 0)),
      d(n) && (n[be] = void 0);
  }
}
function I(e = ``) {
  return document.createTextNode(e);
}
function L(e) {
  return Rn.call(e);
}
function R(e) {
  return zn.call(e);
}
function Vn(e, t) {
  if (!w) return L(e);
  var n = L(E);
  if (n === null) n = E.appendChild(I());
  else if (t && n.nodeType !== 3) {
    var r = I();
    return n?.before(r), D(r), r;
  }
  return t && Jn(n), D(n), n;
}
function Hn(e, t = !1) {
  if (!w) {
    var n = L(e);
    return n instanceof Comment && n.data === `` ? R(n) : n;
  }
  if (t) {
    if (E?.nodeType !== 3) {
      var r = I();
      return E?.before(r), D(r), r;
    }
    Jn(E);
  }
  return E;
}
function Un(e, t = !1) {
  if (!w) return L(e);
  var n = Vn(e, t);
  return Pe(e), n;
}
function Wn(e, t = 1, n = !1) {
  let r = w ? E : e;
  for (var i; t--; ) (i = r), (r = R(r));
  if (!w) return r;
  if (n) {
    if (r?.nodeType !== 3) {
      var a = I();
      return r === null ? i?.after(a) : r.before(a), D(a), a;
    }
    Jn(r);
  }
  return D(r), r;
}
function Gn(e) {
  e.textContent = ``;
}
function Kn() {
  return !1;
}
function qn(e, t, n) {
  return t == null || t === `http://www.w3.org/1999/xhtml`
    ? n
      ? document.createElement(e, { is: n })
      : document.createElement(e)
    : n
    ? document.createElementNS(t, e, { is: n })
    : document.createElementNS(t, e);
}
function Jn(e) {
  if (e.nodeValue.length < 65536) return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === 3; )
    t.remove(), (e.nodeValue += t.nodeValue), (t = e.nextSibling);
}
function Yn(e) {
  var t = G;
  if (t === null) return (H.f |= de), e;
  if (!(t.f & 32768) && !(t.f & 4)) throw e;
  Xn(e, t);
}
function Xn(e, t) {
  if (e === we) throw e;
  if (!(t !== null && t.f & 16384)) {
    for (; t !== null; ) {
      if (t.f & 128 && !(t.f & 33570816)) {
        if (!(t.f & 32768)) throw e;
        try {
          t.b.error(e);
          return;
        } catch (t) {
          e = t;
        }
      }
      t = t.parent;
    }
    throw e;
  }
}
function Zn(e) {
  G === null && (H === null && Je(e), qe()), Cr && Ke(e);
}
function Qn(e, t) {
  var n = t.last;
  n === null
    ? (t.last = t.first = e)
    : ((n.next = e), (e.prev = n), (t.last = e));
}
function z(e, t) {
  var n = G;
  n !== null && n.f & 8192 && (e |= ee);
  var r = {
    ctx: k,
    deps: null,
    nodes: null,
    f: e | x | 512,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: n,
    b: n && n.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null,
  };
  M?.register_created_effect(r);
  var i = r;
  if (e & 4) an === null ? ln.ensure().schedule(r) : an.push(r);
  else if (t !== null) {
    try {
      Rr(r);
    } catch (e) {
      throw (V(r), e);
    }
    i.deps === null &&
      i.teardown === null &&
      i.nodes === null &&
      i.first === i.last &&
      !(i.f & 524288) &&
      ((i = i.first), e & 16 && e & 65536 && i !== null && (i.f |= ie));
  }
  if (
    i !== null &&
    ((i.parent = n), n !== null && Qn(i, n), H !== null && H.f & 2 && !(e & 64))
  ) {
    var a = H;
    (a.effects ??= []).push(i);
  }
  return r;
}
function $n() {
  return H !== null && !U;
}
function er(e) {
  let t = z(8, null);
  return j(t, b), (t.teardown = e), t;
}
function tr(e) {
  Zn(`$effect`);
  var t = G.f;
  if (!H && t & 32 && k !== null && !k.i) {
    var n = k;
    (n.e ??= []).push(e);
  } else return nr(e);
}
function nr(e) {
  return z(4 | se, e);
}
function rr(e) {
  return Zn(`$effect.pre`), z(8 | se, e);
}
function ir(e) {
  ln.ensure();
  let t = z(64 | oe, e);
  return (e = {}) =>
    new Promise((n) => {
      e.outro
        ? _r(t, () => {
            V(t), n(void 0);
          })
        : (V(t), n(void 0));
    });
}
function ar(e) {
  return z(4, e);
}
function or(e) {
  return z(ue | oe, e);
}
function sr(e, t = 0) {
  return z(8 | t, e);
}
function cr(e, t = [], n = [], r = []) {
  zt(r, t, n, (t) => {
    z(8, () => {
      e(...t.map(Z));
    });
  });
}
function lr(e, t = [], n = [], r = []) {
  zt(r, t, n, (t) => {
    z(4, () => e(...t.map(Z)));
  });
}
function ur(e, t = 0) {
  return z(16 | t, e);
}
function dr(e, t = 0) {
  return z(y | t, e);
}
function B(e) {
  return z(32 | oe, e);
}
function fr(e) {
  var t = e.teardown;
  if (t !== null) {
    let n = Cr,
      r = H;
    wr(!0), W(null);
    try {
      t.call(null);
    } catch (t) {
      Xn(t, e.parent);
    } finally {
      wr(n), W(r);
    }
  }
}
function pr(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    let e = n.ac;
    e !== null &&
      Lt(() => {
        e.abort(Se);
      });
    var r = n.next;
    n.f & 64 ? (n.parent = null) : V(n, t), (n = r);
  }
}
function mr(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & 32 || V(t), (t = n);
  }
}
function V(e, t = !0) {
  var n = !1;
  (t || e.f & 262144) &&
    e.nodes !== null &&
    e.nodes.end !== null &&
    (hr(e.nodes.start, e.nodes.end), (n = !0)),
    (e.f |= re),
    pr(e, t && !n),
    Lr(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null) for (let e of r) e.stop();
  fr(e), (e.f ^= re), (e.f |= te);
  var i = e.parent;
  i !== null && i.first !== null && gr(e),
    (e.next =
      e.prev =
      e.teardown =
      e.ctx =
      e.deps =
      e.fn =
      e.nodes =
      e.ac =
      e.b =
        null);
}
function hr(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : R(e);
    e.remove(), (e = n);
  }
}
function gr(e) {
  var t = e.parent,
    n = e.prev,
    r = e.next;
  n !== null && (n.next = r),
    r !== null && (r.prev = n),
    t !== null &&
      (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function _r(e, t, n = !0) {
  var r = [];
  (e.f |= 256), vr(e, r, !0);
  var i = () => {
      n && V(e), t && t();
    },
    a = r.length;
  if (a > 0) {
    var o = () => --a || i();
    for (var s of r) s.out(o);
  } else i();
}
function vr(e, t, n) {
  if (!(e.f & 8192)) {
    e.f ^= ee;
    var r = e.nodes && e.nodes.t;
    if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
    for (var i = e.first; i !== null; ) {
      var a = i.next;
      if (!(i.f & 64)) {
        var o = !!(i.f & 65536) || (!!(i.f & 32) && !!(e.f & 16));
        vr(i, t, o ? n : !1);
      }
      i = a;
    }
  }
}
function yr(e) {
  (e.f &= -257), br(e, !0);
}
function br(e, t) {
  if (!(e.f & 256) && e.f & 8192) {
    (e.f ^= ee), e.f & 1024 || (j(e, x), ln.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next,
        i = !!(n.f & 65536) || !!(n.f & 32);
      br(n, i ? t : !1), (n = r);
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null) for (let e of a) (e.is_global || t) && e.in();
  }
}
function xr(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : R(n);
      t.append(n), (n = i);
    }
}
var Sr = null,
  Cr = !1;
function wr(e) {
  Cr = e;
}
var H = null,
  U = !1;
function W(e) {
  H = e;
}
var G = null;
function K(e) {
  G = e;
}
var q = null;
function Tr(e) {
  H !== null && (H.f & 2097152 || H.f & 2) && (q ??= new Set()).add(e);
}
var J = null,
  Y = 0,
  X = null;
function Er(e) {
  X = e;
}
var Dr = 1,
  Or = 0,
  kr = Or;
function Ar(e) {
  kr = e;
}
function jr() {
  return ++Dr;
}
function Mr(e) {
  var t = e.f;
  if (t & 2048) return !0;
  if (t & 4096) {
    for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
      var a = n[i];
      if ((Mr(a) && Xt(a), a.wv > e.wv)) return !0;
    }
    t & 512 && N === null && j(e, b);
  }
  return !1;
}
function Nr(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(q !== null && q.has(e)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & 2
        ? Nr(a, t, !1)
        : t === a && (n ? j(a, x) : a.f & 1024 && j(a, S), hn(a));
    }
}
function Pr(e) {
  var t = J,
    n = Y,
    r = X,
    i = H,
    a = q,
    o = k,
    s = U,
    c = kr,
    l = e.f;
  (J = null),
    (Y = 0),
    (X = null),
    (H = l & 96 ? null : e),
    (q = null),
    _t(e.ctx),
    (U = !1),
    (kr = ++Or),
    e.ac !== null &&
      (Lt(() => {
        e.ac.abort(Se);
      }),
      (e.ac = null));
  try {
    e.f |= le;
    var u = e.fn,
      d = u();
    e.f |= ne;
    var f = Fr(e);
    if (Et() && X !== null && !U && f !== null && !(e.f & 6146))
      for (var p = 0; p < X.length; p++) Nr(X[p], e);
    if (i !== null && i !== e) {
      if ((Or++, i.deps !== null))
        for (let e = 0; e < n; e += 1) i.deps[e].rv = Or;
      if (t !== null) for (let e of t) e.rv = Or;
      X !== null && (r === null ? (r = X) : r.push(...X));
    }
    return e.f & 8388608 && (e.f ^= de), d;
  } catch (t) {
    return Fr(e), Yn(t);
  } finally {
    (e.f ^= le),
      (J = t),
      (Y = n),
      (X = r),
      (H = i),
      (q = a),
      _t(o),
      (U = s),
      (kr = c);
  }
}
function Fr(e) {
  var t = e.deps,
    n = M?.is_fork;
  if (J !== null) {
    var r;
    if ((n || Lr(e, Y), t !== null && Y > 0))
      for (t.length = Y + J.length, r = 0; r < J.length; r++) t[Y + r] = J[r];
    else e.deps = t = J;
    if ($n() && e.f & 512)
      for (r = Y; r < t.length; r++) (t[r].reactions ??= []).push(e);
  } else !n && t !== null && Y < t.length && (Lr(e, Y), (t.length = Y));
  return t;
}
function Ir(e, t) {
  let i = t.reactions;
  if (i !== null) {
    var a = n.call(i, e);
    if (a !== -1) {
      var o = i.length - 1;
      o === 0 ? (i = t.reactions = null) : ((i[a] = i[o]), i.pop());
    }
  }
  if (i === null && t.f & 2 && (J === null || !r.call(J, t))) {
    var s = t;
    s.f & 512 && (s.f ^= 512),
      s.v !== C && jt(s),
      s.ac !== null &&
        Lt(() => {
          s.ac.abort(Se), (s.ac = null), j(s, x);
        }),
      Zt(s),
      Lr(s, 0);
  }
}
function Lr(e, t) {
  var n = e.deps;
  if (n !== null) for (var r = t; r < n.length; r++) Ir(e, n[r]);
}
function Rr(e) {
  var t = e.f;
  if (!(t & 16384)) {
    j(e, b);
    var n = G;
    G = e;
    try {
      t & 16777232 ? mr(e) : pr(e), fr(e);
      var r = Pr(e);
      (e.teardown = typeof r == `function` ? r : null), (e.wv = Dr);
    } finally {
      G = n;
    }
  }
}
async function zr() {
  await Promise.resolve(), un();
}
function Br() {
  return ln.ensure().settled();
}
function Z(e) {
  var t = !!(e.f & 2);
  if (
    (Sr?.add(e),
    H !== null &&
      !U &&
      !(G !== null && G.f & 16384) &&
      (q === null || !q.has(e)))
  ) {
    var n = H.deps;
    if (H.f & 2097152)
      e.rv < Or &&
        ((e.rv = Or),
        J === null && n !== null && n[Y] === e
          ? Y++
          : J === null
          ? (J = [e])
          : J.push(e));
    else {
      (H.deps ??= []), r.call(H.deps, e) || H.deps.push(e);
      var i = e.reactions;
      i === null ? (e.reactions = [H]) : r.call(i, H) || i.push(H);
    }
  }
  if (Cr && P.has(e)) return P.get(e);
  if (t) {
    var a = e;
    if (Cr) {
      var o = a.v;
      return (
        ((!(a.f & 1024) && a.reactions !== null) || Hr(a)) && (o = Yt(a)),
        P.set(a, o),
        o
      );
    }
    var s = !(a.f & 512) && !U && H !== null && !!(H.f & 512),
      c = (a.f & ne) === 0;
    Mr(a) && (s && (a.f |= 512), Xt(a)), s && !c && (Qt(a), Vr(a));
  }
  if (N?.has(e)) return N.get(e);
  if (e.f & 8388608) throw e.v;
  return e.v;
}
function Vr(e) {
  if (((e.f |= 512), e.deps !== null))
    for (let n of e.deps) {
      var t = n.reactions;
      t === null ? (n.reactions = [e]) : r.call(t, e) || t.push(e),
        n.f & 2 && !(n.f & 512) && (Qt(n), Vr(n));
    }
}
function Hr(e) {
  if (e.v === C) return !0;
  if (e.deps === null) return !1;
  for (let t of e.deps) if (P.has(t) || (t.f & 2 && Hr(t))) return !0;
  return !1;
}
function Q(e) {
  var t = U;
  try {
    return (U = !0), e();
  } finally {
    U = t;
  }
}
function Ur(e) {
  if (!(typeof e != `object` || !e || e instanceof EventTarget)) {
    if (fe in e) Wr(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        let n = e[t];
        typeof n == `object` && n && fe in n && Wr(n);
      }
  }
}
function Wr(e, t = new Set()) {
  if (typeof e == `object` && e && !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let n in e)
      try {
        Wr(e[n], t);
      } catch {}
    let n = u(e);
    if (
      n !== Object.prototype &&
      n !== Array.prototype &&
      n !== Map.prototype &&
      n !== Set.prototype &&
      n !== Date.prototype
    ) {
      let t = s(n);
      for (let n in t) {
        let r = t[n].get;
        if (r)
          try {
            r.call(e);
          } catch {}
      }
    }
  }
}
function Gr(e) {
  return (
    e.endsWith(`capture`) &&
    e !== `gotpointercapture` &&
    e !== `lostpointercapture`
  );
}
var Kr = [
  `beforeinput`,
  `click`,
  `change`,
  `dblclick`,
  `contextmenu`,
  `focusin`,
  `focusout`,
  `input`,
  `keydown`,
  `keyup`,
  `mousedown`,
  `mousemove`,
  `mouseout`,
  `mouseover`,
  `mouseup`,
  `pointerdown`,
  `pointermove`,
  `pointerout`,
  `pointerover`,
  `pointerup`,
  `touchend`,
  `touchmove`,
  `touchstart`,
];
function qr(e) {
  return Kr.includes(e);
}
var Jr =
    `allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback`.split(
      `.`
    ),
  Yr = {
    formnovalidate: `formNoValidate`,
    ismap: `isMap`,
    nomodule: `noModule`,
    playsinline: `playsInline`,
    readonly: `readOnly`,
    defaultvalue: `defaultValue`,
    defaultchecked: `defaultChecked`,
    srcobject: `srcObject`,
    novalidate: `noValidate`,
    allowfullscreen: `allowFullscreen`,
    disablepictureinpicture: `disablePictureInPicture`,
    disableremoteplayback: `disableRemotePlayback`,
  };
function Xr(e) {
  return (e = e.toLowerCase()), Yr[e] ?? e;
}
[...Jr];
var Zr = [`touchstart`, `touchmove`];
function Qr(e) {
  return Zr.includes(e);
}
var $r = [`textarea`, `script`, `style`, `title`];
function ei(e) {
  return $r.includes(e);
}
var ti = Symbol(`events`),
  ni = new Set(),
  ri = new Set();
function ii(e) {
  if (!w) return;
  e.removeAttribute(`onload`), e.removeAttribute(`onerror`);
  let t = e.__e;
  t !== void 0 &&
    ((e.__e = void 0),
    queueMicrotask(() => {
      e.isConnected && e.dispatchEvent(t);
    }));
}
function ai(e, t, n, r = {}) {
  function i(e) {
    if ((r.capture || fi.call(t, e), !e.cancelBubble))
      return Lt(() => n?.call(this, e));
  }
  return (
    e.startsWith(`pointer`) || e.startsWith(`touch`) || e === `wheel`
      ? ((i.__removed = !1),
        A(() => {
          i.__removed || t.addEventListener(e, i, r);
        }))
      : t.addEventListener(e, i, r),
    i
  );
}
function oi(e, t, n, r = {}) {
  var i = ai(t, e, n, r);
  return () => {
    (i.__removed = !0), e.removeEventListener(t, i, r);
  };
}
function si(e, t, n, r, i) {
  var a = { capture: r, passive: i },
    o = ai(e, t, n, a);
  (t === document.body ||
    t === window ||
    t === document ||
    t instanceof HTMLMediaElement) &&
    er(() => {
      (o.__removed = !0), t.removeEventListener(e, o, a);
    });
}
function ci(e, t, n) {
  (t[ti] ??= {})[e] = n;
}
function li(e) {
  for (var t = 0; t < e.length; t++) ni.add(e[t]);
  for (var n of ri) n(e);
}
var ui = null,
  di = !1;
function fi(e) {
  var t = this,
    n = t.ownerDocument,
    r = e.type,
    i = e.composedPath?.() || [],
    o = i[0] || e.target;
  (ui = e),
    di ||
      ((di = !0),
      setTimeout(() => {
        (di = !1), (ui = null);
      }));
  var s = 0,
    c = ui === e && e[ti];
  if (c) {
    var l = i.indexOf(c);
    if (l !== -1 && (t === document || t === window)) {
      e[ti] = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1) return;
    l <= u && (s = l);
  }
  if (((o = i[s] || e.target), o !== t)) {
    a(e, `currentTarget`, {
      configurable: !0,
      get() {
        return o || n;
      },
    });
    var d = H,
      f = G;
    W(null), K(null);
    try {
      for (var p, m = []; o !== null && o !== t; ) {
        try {
          var h = o[ti]?.[r];
          h == null || (o.disabled && e.target !== o) || h.call(o, e);
        } catch (e) {
          p ? m.push(e) : (p = e);
        }
        if (e.cancelBubble) break;
        s++, (o = s < i.length ? i[s] : null);
      }
      if (p) {
        for (let e of m)
          queueMicrotask(() => {
            throw e;
          });
        throw p;
      }
    } finally {
      (e[ti] = t), delete e.currentTarget, W(d), K(f);
    }
  }
}
var pi =
  globalThis?.window?.trustedTypes &&
  globalThis.window.trustedTypes.createPolicy(`svelte-trusted-html`, {
    createHTML: (e) => e,
  });
function mi(e) {
  return pi?.createHTML(e) ?? e;
}
function hi(e) {
  var t = qn(`template`);
  return (t.innerHTML = mi(e.replaceAll(`<!>`, `<!---->`))), t.content;
}
var gi = Ce ? `script` : `SCRIPT`;
function $(e, t) {
  var n = G;
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
function _i(e, t) {
  var n = !!(t & 1),
    r = !!(t & 2),
    i,
    a = !e.startsWith(`<!>`);
  return () => {
    if (w) return $(E, null), E;
    i === void 0 && ((i = hi(a ? e : `<!>` + e)), n || (i = L(i)));
    var t = r || Ln ? document.importNode(i, !0) : i.cloneNode(!0);
    if (n) {
      var o = L(t),
        s = t.lastChild;
      $(o, s);
    } else $(t, t);
    return t;
  };
}
function vi(e, t, n = `svg`) {
  var r = !e.startsWith(`<!>`),
    i = !!(t & 1),
    a = `<${n}>${r ? e : `<!>` + e}</${n}>`,
    o;
  return () => {
    if (w) return $(E, null), E;
    if (!o) {
      var e = L(hi(a));
      if (i)
        for (o = document.createDocumentFragment(); L(e); ) o.appendChild(L(e));
      else o = L(e);
    }
    var t = o.cloneNode(!0);
    if (i) {
      var n = L(t),
        r = t.lastChild;
      $(n, r);
    } else $(t, t);
    return t;
  };
}
function yi(e, t) {
  return vi(e, t, `svg`);
}
function bi(e) {
  return () => xi(e());
}
function xi(e) {
  if (w) return e;
  let t = e.nodeType === 11,
    n = e.nodeName === gi ? [e] : e.querySelectorAll(`script`),
    r = G;
  for (let a of n) {
    let n = qn(`script`);
    for (var i of a.attributes) n.setAttribute(i.name, i.value);
    (n.textContent = a.textContent),
      (t ? e.firstChild === a : e === a) && (r.nodes.start = n),
      (t ? e.lastChild === a : e === a) && (r.nodes.end = n),
      a.replaceWith(n);
  }
  return e;
}
function Si(e = ``) {
  if (!w) {
    var t = I(e + ``);
    return $(t, t), t;
  }
  var n = E;
  return n.nodeType === 3 ? Jn(n) : (n.before((n = I())), D(n)), $(n, n), n;
}
function Ci() {
  if (w) return $(E, null), E;
  var e = document.createDocumentFragment(),
    t = document.createComment(``),
    n = I();
  return e.append(t, n), $(t, n), e;
}
function wi(e, t) {
  if (w) {
    var n = G;
    (n.f & 32768 && n.nodes.end !== null) || (n.nodes.end = E), O();
  } else e !== null && e.before(t);
}
function Ti(e) {
  let t = 0,
    n = Sn(0),
    r;
  return () => {
    $n() &&
      (Z(n),
      sr(
        () => (
          t === 0 && (r = Q(() => e(() => An(n)))),
          (t += 1),
          () => {
            A(() => {
              --t, t === 0 && (r?.(), (r = void 0), An(n));
            });
          }
        )
      ));
  };
}
var Ei = ie | oe;
function Di(e, t, n, r) {
  new Oi(e, t, n, r);
}
var Oi = class {
    parent;
    is_pending = !1;
    transform_error;
    #e;
    #t = w ? E : null;
    #n;
    #r;
    #i;
    #a = null;
    #o = null;
    #s = null;
    #c = null;
    #l = 0;
    #u = 0;
    #d = !1;
    #f = new Map();
    #p = null;
    #m = Ti(
      () => (
        (this.#p = Sn(this.#l)),
        () => {
          this.#p = null;
        }
      )
    );
    constructor(e, t, n, r) {
      (this.#e = e),
        (this.#n = t),
        (this.#r = (e) => {
          var t = G;
          (t.b = this), (t.f |= 128), n(e);
        }),
        (this.parent = G.b),
        (this.transform_error =
          r ?? this.parent?.transform_error ?? ((e) => e)),
        (this.#i = ur(() => {
          if (w) {
            let e = Le(this.#t);
            O();
            let t = e === `[!`;
            if (e.startsWith(`[?`)) {
              let t = JSON.parse(e.slice(2));
              this.#g(t);
            } else t ? this.#y() : this.#h();
          } else this.#b();
        }, Ei)),
        w && (this.#e = E);
    }
    #h() {
      try {
        this.#a = B(() => this.#r(this.#e));
      } catch (e) {
        this.error(e);
      }
    }
    #g(e) {
      let t = this.#n.failed,
        { reset: n, invoke_onerror: r } = this.#_(e);
      A(r),
        t &&
          (this.#s = B(() => {
            t(
              this.#e,
              () => e,
              () => n
            );
          }));
    }
    #_(e) {
      var t = !1,
        n = !1;
      let r = () => {
        this.#v() ||
          (t
            ? Me()
            : ((t = !0),
              n && at(),
              this.#s !== null &&
                _r(this.#s, () => {
                  this.#s = null;
                }),
              this.#S(() => {
                this.#b();
              })));
      };
      return {
        reset: r,
        invoke_onerror: () => {
          if (!this.#v())
            try {
              (n = !0), this.#n.onerror?.(e, r), (n = !1);
            } catch (e) {
              Xn(e, this.#i && this.#i.parent);
            }
        },
      };
    }
    #v() {
      return (this.#i.f & (te | re)) !== 0;
    }
    #y() {
      let e = this.#n.pending;
      e &&
        ((this.is_pending = !0),
        (this.#o = B(() => e(this.#e))),
        A(() => {
          if (!this.#v()) {
            var e = (this.#c = document.createDocumentFragment()),
              t = I(),
              n = !1;
            e.append(t),
              (this.#a = this.#S(() => {
                try {
                  return B(() => this.#r(t));
                } catch (e) {
                  try {
                    this.error(e), (n = !0);
                  } catch (e) {
                    Xn(e, this.#i.parent);
                  }
                  return null;
                }
              })),
              this.#a === null
                ? ((this.#c = null), n && this.#x(M))
                : this.#u === 0 &&
                  (this.#e.before(e),
                  (this.#c = null),
                  _r(this.#o, () => {
                    this.#o = null;
                  }),
                  this.#x(M));
          }
        }));
    }
    #b() {
      try {
        if (
          ((this.is_pending = this.has_pending_snippet()),
          (this.#u = 0),
          (this.#l = 0),
          (this.#a = B(() => {
            this.#r(this.#e);
          })),
          this.#u > 0)
        ) {
          var e = (this.#c = document.createDocumentFragment());
          xr(this.#a, e);
          let t = this.#n.pending;
          this.#o = B(() => t(this.#e));
        } else this.#x(M);
      } catch (e) {
        this.error(e);
      }
    }
    #x(e) {
      (this.is_pending = !1), e.transfer_reactions(this.#f);
    }
    defer_effect(e) {
      Mt(e, this.#f);
    }
    is_rendered() {
      return !this.is_pending && (!this.parent || this.parent.is_rendered());
    }
    has_pending_snippet() {
      return !!this.#n.pending;
    }
    #S(e) {
      var t = G,
        n = H,
        r = k;
      K(this.#i), W(this.#i), _t(this.#i.ctx);
      try {
        return ln.ensure(), e();
      } finally {
        K(t), W(n), _t(r);
      }
    }
    #C(e, t) {
      this.has_pending_snippet()
        ? ((this.#u += e),
          this.#u === 0 &&
            (this.#x(t),
            this.#o &&
              _r(this.#o, () => {
                this.#o = null;
              }),
            (this.#c &&= (this.#e.before(this.#c), null))))
        : this.parent && this.parent.#C(e, t);
    }
    update_pending_count(e, t) {
      this.#C(e, t),
        (this.#l += e),
        !this.#p ||
          this.#d ||
          ((this.#d = !0),
          A(() => {
            (this.#d = !1), this.#p && Dn(this.#p, this.#l);
          }));
    }
    get_effect_pending() {
      return this.#m(), Z(this.#p);
    }
    error(e) {
      if (e === we || (!this.#n.onerror && !this.#n.failed)) throw e;
      M?.is_fork
        ? (this.#a && M.skip_effect(this.#a),
          this.#o && M.skip_effect(this.#o),
          this.#s && M.skip_effect(this.#s),
          M.oncommit(() => {
            this.#v() || this.#w(e);
          }))
        : this.#w(e);
    }
    #w(e) {
      (this.#a &&= (V(this.#a), null)),
        (this.#o &&= (V(this.#o), null)),
        (this.#s &&= (V(this.#s), null)),
        w && (D(this.#t), Fe(), D(Ie()));
      let t = this.#n.failed,
        n = (e) => {
          if (this.#v()) return;
          let { reset: n, invoke_onerror: r } = this.#_(e);
          r(),
            t &&
              !this.#v() &&
              (this.#s = this.#S(() => {
                try {
                  return B(() => {
                    var r = G;
                    (r.b = this),
                      (r.f |= 128),
                      t(
                        this.#e,
                        () => e,
                        () => n
                      );
                  });
                } catch (e) {
                  return Xn(e, this.#i.parent), null;
                }
              }));
        };
      A(() => {
        if (!this.#v()) {
          var t;
          try {
            t = this.transform_error(e);
          } catch (e) {
            Xn(e, this.#i && this.#i.parent);
            return;
          }
          typeof t == `object` && t && typeof t.then == `function`
            ? t.then(n, (e) => Xn(e, this.#i && this.#i.parent))
            : n(t);
        }
      });
    }
  },
  ki = !0;
function Ai(e) {
  ki = e;
}
function ji(e, t) {
  var n = t == null ? `` : typeof t == `object` ? `${t}` : t;
  n !== (e[be] ??= e.nodeValue) && ((e[be] = n), (e.nodeValue = `${n}`));
}
function Mi(e, t) {
  return Fi(e, t);
}
function Ni(e, t) {
  Bn(), (t.intro = t.intro ?? !1);
  let n = t.target,
    r = w,
    i = E;
  try {
    for (var a = L(n); a && (a.nodeType !== 8 || a.data !== `[`); ) a = R(a);
    if (!a) throw we;
    T(!0), D(a);
    let r = Fi(e, { ...t, anchor: a });
    return T(!1), r;
  } catch (r) {
    if (
      r instanceof Error &&
      r.message
        .split(
          `
`
        )
        .some((e) => e.startsWith(`https://svelte.dev/e/`))
    )
      throw r;
    return (
      r !== we && console.warn(`Failed to hydrate: `, r),
      t.recover === !1 && $e(),
      Bn(),
      Gn(n),
      T(!1),
      Mi(e, t)
    );
  } finally {
    T(r), D(i);
  }
}
var Pi = new Map();
function Fi(
  e,
  {
    target: t,
    anchor: n,
    props: r = {},
    events: a,
    context: o,
    intro: s = !0,
    transformError: c,
  }
) {
  Bn();
  var l = void 0,
    u = ir(() => {
      var u = n ?? t.appendChild(I());
      Di(
        u,
        { pending: () => {} },
        (t) => {
          Ct({});
          var n = k;
          if (
            (o && (n.c = o),
            a && (r.$$events = a),
            w && $(t, null),
            (ki = s),
            (l = e(t, r) || Tt()),
            (ki = !0),
            w &&
              ((G.nodes.end = E),
              E === null || E.nodeType !== 8 || E.data !== `]`))
          )
            throw (Ae(), we);
          wt();
        },
        c
      );
      var d = new Set(),
        f = (e) => {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            if (!d.has(r)) {
              d.add(r);
              var i = Qr(r);
              for (let e of [t, document]) {
                var a = Pi.get(e);
                a === void 0 && ((a = new Map()), Pi.set(e, a));
                var o = a.get(r);
                o === void 0
                  ? (e.addEventListener(r, fi, { passive: i }), a.set(r, 1))
                  : a.set(r, o + 1);
              }
            }
          }
        };
      return (
        f(i(ni)),
        ri.add(f),
        () => {
          for (var e of d)
            for (let n of [t, document]) {
              var r = Pi.get(n),
                i = r.get(e);
              --i == 0
                ? (n.removeEventListener(e, fi),
                  r.delete(e),
                  r.size === 0 && Pi.delete(n))
                : r.set(e, i);
            }
          ri.delete(f), u !== n && u.parentNode?.removeChild(u);
        }
      );
    });
  return Ii.set(l, u), l;
}
var Ii = new WeakMap();
function Li(e, t) {
  let n = Ii.get(e);
  return n ? (Ii.delete(e), n(t)) : Promise.resolve();
}
var Ri = class {
  anchor;
  #e = new Map();
  #t = new Map();
  #n = new Map();
  #r = new Set();
  #i = !0;
  constructor(e, t = !0) {
    (this.anchor = e), (this.#i = t);
  }
  #a = (e) => {
    if (this.#e.has(e)) {
      var t = this.#e.get(e),
        n = this.#t.get(t);
      if (n) yr(n), this.#r.delete(t);
      else {
        var r = this.#n.get(t);
        r &&
          (yr(r.effect),
          this.#t.set(t, r.effect),
          this.#n.delete(t),
          r.fragment.lastChild.remove(),
          this.anchor.before(r.fragment),
          (n = r.effect));
      }
      for (let [t, n] of this.#e) {
        if ((this.#e.delete(t), t === e)) break;
        let r = this.#n.get(n);
        r && (V(r.effect), this.#n.delete(n));
      }
      for (let [e, r] of this.#t) {
        if (e === t || this.#r.has(e)) continue;
        let i = () => {
          if (Array.from(this.#e.values()).includes(e)) {
            var t = document.createDocumentFragment();
            xr(r, t), t.append(I()), this.#n.set(e, { effect: r, fragment: t });
          } else V(r);
          this.#r.delete(e), this.#t.delete(e);
        };
        this.#i || !n ? (this.#r.add(e), _r(r, i, !1)) : i();
      }
    }
  };
  #o = (e) => {
    this.#e.delete(e);
    let t = Array.from(this.#e.values());
    for (let [e, n] of this.#n)
      t.includes(e) || (V(n.effect), this.#n.delete(e));
  };
  ensure(e, t) {
    var n = M,
      r = Kn();
    if (t && !this.#t.has(e) && !this.#n.has(e)) {
      if (r) {
        var i = document.createDocumentFragment(),
          a = I();
        i.append(a), this.#n.set(e, { effect: B(() => t(a)), fragment: i });
      } else
        this.#t.set(
          e,
          B(() => t(this.anchor))
        );
    }
    if ((this.#e.set(n, e), r)) {
      for (let [t, r] of this.#t)
        t === e ? n.unskip_effect(r) : n.skip_effect(r);
      for (let [t, r] of this.#n)
        t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
      n.oncommit(this.#a), n.ondiscard(this.#o);
    } else w && (this.anchor = E), this.#a(n);
  }
};
function zi(e, t, n = !1) {
  var r;
  w && ((r = E), O());
  var i = new Ri(e),
    a = n ? ie : 0;
  function o(e, t) {
    if (w) {
      var n = Le(r);
      if (e !== parseInt(n.substring(1))) {
        var a = Ie();
        D(a), (i.anchor = a), T(!1), i.ensure(e, t), T(!0);
        return;
      }
    }
    i.ensure(e, t);
  }
  ur(() => {
    var e = !1;
    t((t, n = 0) => {
      (e = !0), o(n, t);
    }),
      e || o(-1, null);
  }, a);
}
var Bi = Symbol(`NaN`);
function Vi(e, t, n) {
  w && O();
  var r = new Ri(e),
    i = !Et();
  ur(() => {
    var e = t();
    e !== e && (e = Bi),
      i && typeof e == `object` && e && (e = {}),
      r.ensure(e, n);
  });
}
function Hi(e, t) {
  return t;
}
function Ui(e, t, n) {
  for (var r = [], a = t.length, o, s = t.length, c = 0; c < a; c++) {
    let n = t[c];
    _r(
      n,
      () => {
        if (o) {
          if ((o.pending.delete(n), o.done.add(n), o.pending.size === 0)) {
            var t = e.outrogroups;
            Wi(e, i(o.done)),
              t.delete(o),
              t.size === 0 && (e.outrogroups = null);
          }
        } else --s;
      },
      !1
    );
  }
  if (s === 0) {
    var l = r.length === 0 && n !== null && e.pending.size === 0;
    if (l) {
      var u = n,
        d = u.parentNode;
      Gn(d), d.append(u), e.items.clear();
    }
    Wi(e, t, !l);
  } else
    (o = { pending: new Set(t), done: new Set() }),
      (e.outrogroups ??= new Set()).add(o);
}
function Wi(e, t, n = !0) {
  var r;
  if (e.pending.size > 0) {
    r = new Set();
    for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
  }
  for (var i = 0; i < t.length; i++) {
    var a = t[i];
    r?.has(a)
      ? ((a.f |= ce), xr(a, document.createDocumentFragment()))
      : V(t[i], n);
  }
}
var Gi;
function Ki(e, n, r, a, o, s = null) {
  var c = e,
    l = new Map();
  if (n & 4) {
    var u = e;
    c = w ? D(L(u)) : u.appendChild(I());
  }
  w && O();
  var d = null,
    f = qt(() => {
      var e = r();
      return t(e) ? e : e == null ? [] : i(e);
    }),
    p = new Map(),
    m = !0;
  function h(e) {
    if (!(_.effect.f & 16384)) {
      _.pending.delete(e);
      var t = Z(f);
      (_.fallback = d),
        Ji(_, t, c, n, a),
        d !== null &&
          (t.length === 0
            ? d.f & 33554432
              ? ((d.f ^= ce), Xi(d, null, c))
              : yr(d)
            : _r(d, () => {
                d = null;
              }));
    }
  }
  function g(e) {
    _.pending.delete(e);
  }
  var _ = {
    effect: ur(() => {
      var e = Z(f),
        t = e.length;
      let i = !1;
      w && (Le(c) === `[!`) != (t === 0) && ((c = Ie()), D(c), T(!1), (i = !0));
      for (var u = new Set(), _ = M, v = Kn(), y = 0; y < t; y += 1) {
        w && E.nodeType === 8 && E.data === `]` && ((c = E), (i = !0), T(!1));
        var b = e[y],
          x = a(b, y),
          S = m ? null : l.get(x);
        S
          ? (S.v && Dn(S.v, b), S.i && Dn(S.i, y), v && _.unskip_effect(S.e))
          : ((S = Yi(l, m ? c : (Gi ??= I()), b, x, y, o, n, r)),
            m || (S.e.f |= ce),
            l.set(x, S)),
          u.add(x);
      }
      if (
        (t === 0 &&
          s &&
          !d &&
          (m
            ? (d = B(() => s(c)))
            : ((d = B(() => s((Gi ??= I())))), (d.f |= ce))),
        t > u.size && Ge(``, ``, ``),
        w && t > 0 && D(Ie()),
        !m)
      ) {
        if ((p.set(_, u), v)) {
          for (let [e, t] of l) u.has(e) || _.skip_effect(t.e);
          _.oncommit(h), _.ondiscard(g);
        } else h(_);
      }
      i && T(!0), Z(f);
    }),
    flags: n,
    items: l,
    pending: p,
    outrogroups: null,
    fallback: d,
  };
  (m = !1), w && (c = E);
}
function qi(e) {
  for (; e !== null && !(e.f & 32); ) e = e.next;
  return e;
}
function Ji(e, t, n, r, a) {
  var o = !!(r & 8),
    s = t.length,
    c = e.items,
    l = qi(e.effect.first),
    u,
    d = null,
    f,
    p = [],
    m = [],
    h,
    g,
    _,
    v;
  if (o)
    for (v = 0; v < s; v += 1)
      (h = t[v]),
        (g = a(h, v)),
        (_ = c.get(g).e),
        _.f & 33554432 || (_.nodes?.a?.measure(), (f ??= new Set()).add(_));
  for (v = 0; v < s; v += 1) {
    if (((h = t[v]), (g = a(h, v)), (_ = c.get(g).e), e.outrogroups !== null))
      for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
    if (
      (_.f & 8192 &&
        (yr(_), o && (_.nodes?.a?.unfix(), (f ??= new Set()).delete(_))),
      _.f & 33554432)
    ) {
      if (((_.f ^= ce), _ === l)) Xi(_, null, n);
      else {
        var y = d ? d.next : l;
        _ === e.effect.last && (e.effect.last = _.prev),
          _.prev && (_.prev.next = _.next),
          _.next && (_.next.prev = _.prev),
          Zi(e, d, _),
          Zi(e, _, y),
          Xi(_, y, n),
          (d = _),
          (p = []),
          (m = []),
          (l = qi(d.next));
        continue;
      }
    }
    if (_ !== l) {
      if (u !== void 0 && u.has(_)) {
        if (p.length < m.length) {
          var b = m[0],
            x;
          d = b.prev;
          var S = p[0],
            ee = p[p.length - 1];
          for (x = 0; x < p.length; x += 1) Xi(p[x], b, n);
          for (x = 0; x < m.length; x += 1) u.delete(m[x]);
          Zi(e, S.prev, ee.next),
            Zi(e, d, S),
            Zi(e, ee, b),
            (l = b),
            (d = ee),
            --v,
            (p = []),
            (m = []);
        } else
          u.delete(_),
            Xi(_, l, n),
            Zi(e, _.prev, _.next),
            Zi(e, _, d === null ? e.effect.first : d.next),
            Zi(e, d, _),
            (d = _);
        continue;
      }
      for (p = [], m = []; l !== null && l !== _; )
        (u ??= new Set()).add(l), m.push(l), (l = qi(l.next));
      if (l === null) continue;
    }
    _.f & 33554432 || p.push(_), (d = _), (l = qi(_.next));
  }
  if (e.outrogroups !== null) {
    for (let t of e.outrogroups)
      t.pending.size === 0 && (Wi(e, i(t.done)), e.outrogroups?.delete(t));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || u !== void 0) {
    var te = [];
    if (u !== void 0) for (_ of u) _.f & 8192 || te.push(_);
    for (; l !== null; )
      !(l.f & 8192) && l !== e.fallback && te.push(l), (l = qi(l.next));
    var ne = te.length;
    if (ne > 0) {
      var re = r & 4 && s === 0 ? n : null;
      if (o) {
        for (v = 0; v < ne; v += 1) te[v].nodes?.a?.measure();
        for (v = 0; v < ne; v += 1) te[v].nodes?.a?.fix();
      }
      Ui(e, te, re);
    }
  }
  o &&
    A(() => {
      if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
    });
}
function Yi(e, t, n, r, i, a, o, s) {
  var c = o & 1 ? (o & 16 ? Sn(n) : wn(n, !1, !1)) : null,
    l = o & 2 ? Sn(i) : null;
  return {
    v: c,
    i: l,
    e: B(
      () => (
        a(t, c ?? n, l ?? i, s),
        () => {
          e.delete(r);
        }
      )
    ),
  };
}
function Xi(e, t, n) {
  if (e.nodes)
    for (
      var r = e.nodes.start,
        i = e.nodes.end,
        a = t && !(t.f & 33554432) ? t.nodes.start : n;
      r !== null;

    ) {
      var o = R(r);
      if ((a.before(r), r === i)) return;
      r = o;
    }
}
function Zi(e, t, n) {
  t === null ? (e.effect.first = n) : (t.next = n),
    n === null ? (e.effect.last = t) : (n.prev = t);
}
function Qi(e, t, n = !1, r = !1, i = !1, a = !1) {
  var o = e,
    s = ``;
  if (n) {
    var c = e;
    w && (o = D(L(c)));
  }
  cr(() => {
    var e = G;
    if (s === (s = t() ?? ``)) w && O();
    else if (n && !w)
      (e.nodes = null), (c.innerHTML = s), s !== `` && $(L(c), c.lastChild);
    else if (
      (e.nodes !== null && (hr(e.nodes.start, e.nodes.end), (e.nodes = null)),
      s !== ``)
    ) {
      if (w) {
        for (
          var a = E.data, l = O(), u = l;
          l !== null && (l.nodeType !== 8 || l.data !== ``);

        )
          (u = l), (l = R(l));
        if (l === null) throw (Ae(), we);
        $(E, u), (o = D(l));
      } else {
        var d = qn(
          r ? `svg` : i ? `math` : `template`,
          r ? Ee : i ? De : void 0
        );
        d.innerHTML = s;
        var f = r || i ? d : d.content;
        if (($(L(f), f.lastChild), r || i)) for (; L(f); ) o.before(L(f));
        else o.before(f);
      }
    }
  });
}
function $i(e, t, ...n) {
  var r = new Ri(e);
  ur(() => {
    let e = t() ?? null;
    r.ensure(e, e && ((t) => e(t, ...n)));
  }, ie);
}
function ea(e) {
  return (t, ...n) => {
    var r = e(...n),
      i;
    w ? ((i = E), O()) : ((i = L(hi(r.render().trim()))), t.before(i));
    let a = r.setup?.(i);
    $(i, i), typeof a == `function` && er(a);
  };
}
function ta(e, t, n) {
  var r;
  w && ((r = E), O());
  var i = new Ri(e);
  ur(() => {
    var e = t() ?? null;
    if (w && (Le(r) === `[`) != (e !== null)) {
      var a = Ie();
      D(a), (i.anchor = a), T(!1), i.ensure(e, e && ((t) => n(t, e))), T(!0);
    } else i.ensure(e, e && ((t) => n(t, e)));
  }, ie);
}
var na = () => performance.now(),
  ra = {
    tick: (e) => requestAnimationFrame(e),
    now: () => na(),
    tasks: new Set(),
  };
function ia() {
  let e = ra.now();
  ra.tasks.forEach((t) => {
    t.c(e) || (ra.tasks.delete(t), t.f());
  }),
    ra.tasks.size !== 0 && ra.tick(ia);
}
function aa(e) {
  let t;
  return (
    ra.tasks.size === 0 && ra.tick(ia),
    {
      promise: new Promise((n) => {
        ra.tasks.add((t = { c: e, f: n }));
      }),
      abort() {
        ra.tasks.delete(t);
      },
    }
  );
}
function oa(e, t) {
  Lt(() => {
    e.dispatchEvent(new CustomEvent(t));
  });
}
function sa(e) {
  if (e === `float`) return `cssFloat`;
  if (e === `offset`) return `cssOffset`;
  if (e.startsWith(`--`)) return e;
  let t = e.split(`-`);
  return t.length === 1
    ? t[0]
    : t[0] +
        t
          .slice(1)
          .map((e) => e[0].toUpperCase() + e.slice(1))
          .join(``);
}
function ca(e) {
  let t = {},
    n = e.split(`;`);
  for (let e of n) {
    let [n, r] = e.split(`:`);
    if (!n || r === void 0) break;
    let i = sa(n.trim());
    t[i] = r.trim();
  }
  return t;
}
var la = (e) => e,
  ua = null;
function da(e) {
  ua = e;
}
function fa(e, t, n) {
  var r = (ua ?? G).nodes,
    i,
    a,
    o,
    s = null;
  (r.a ??= {
    element: e,
    measure() {
      i = this.element.getBoundingClientRect();
    },
    apply() {
      if (
        (o?.abort(),
        (a = this.element.getBoundingClientRect()),
        i.left !== a.left ||
          i.right !== a.right ||
          i.top !== a.top ||
          i.bottom !== a.bottom)
      ) {
        let e = t()(this.element, { from: i, to: a }, n?.());
        o = ma(
          this.element,
          e,
          void 0,
          1,
          () => {},
          () => {
            o?.abort(), (o = void 0);
          }
        );
      }
    },
    fix() {
      if (!e.getAnimations().length) {
        var { position: t, width: n, height: r } = getComputedStyle(e);
        if (t !== `absolute` && t !== `fixed`) {
          var a = e.style;
          (s = {
            position: a.position,
            width: a.width,
            height: a.height,
            transform: a.transform,
          }),
            (a.position = `absolute`),
            (a.width = n),
            (a.height = r);
          var o = e.getBoundingClientRect();
          if (i.left !== o.left || i.top !== o.top) {
            var c = `translate(${i.left - o.left}px, ${i.top - o.top}px)`;
            a.transform = a.transform ? `${a.transform} ${c}` : c;
          }
        }
      }
    },
    unfix() {
      if (s) {
        var t = e.style;
        (t.position = s.position),
          (t.width = s.width),
          (t.height = s.height),
          (t.transform = s.transform);
      }
    },
  }),
    (r.a.element = e);
}
function pa(e, t, n, r) {
  var i = !!(e & 1),
    a = !!(e & 2),
    o = i && a,
    s = !!(e & 4),
    c = o ? `both` : i ? `in` : `out`,
    l,
    u = t.inert,
    d = t.style.overflow,
    f,
    p;
  function m() {
    return Lt(() => (l ??= n()(t, r?.() ?? {}, { direction: c })));
  }
  var h = {
      is_global: s,
      in() {
        (t.inert = u),
          i
            ? (a || f?.abort(),
              (f = ma(
                t,
                m(),
                p,
                1,
                () => {
                  oa(t, `introstart`);
                },
                () => {
                  oa(t, `introend`),
                    f?.abort(),
                    (f = l = void 0),
                    (t.style.overflow = d);
                }
              )))
            : (p?.abort(), p?.reset?.());
      },
      out(e) {
        a
          ? ((t.inert = !0),
            (p = ma(
              t,
              m(),
              f,
              0,
              () => {
                oa(t, `outrostart`);
              },
              () => {
                oa(t, `outroend`), e?.();
              }
            )))
          : (e?.(), (l = void 0));
      },
      stop: () => {
        f?.abort(), p?.abort();
      },
    },
    g = G;
  if (((g.nodes.t ??= []).push(h), i && ki)) {
    var _ = s;
    if (!_) {
      for (var v = g.parent; v && v.f & 65536; )
        for (; (v = v.parent) && !(v.f & 16); );
      _ = !v || !!(v.f & 32768);
    }
    _ &&
      ar(() => {
        Q(() => h.in());
      });
  }
}
function ma(e, t, n, r, i, a) {
  var o = r === 1,
    s = !1;
  if (f(t)) {
    var c;
    return (
      A(() => {
        s || (c = ma(e, t({ direction: o ? `in` : `out` }), n, r, i, a));
      }),
      {
        abort: () => {
          (s = !0), c?.abort();
        },
        deactivate: () => c?.deactivate(),
        reset: () => c?.reset(),
        t: () => c?.t() ?? 1 - r,
      }
    );
  }
  if ((n?.deactivate(), !t?.duration && !t?.delay))
    return i(), a(), { abort: p, deactivate: p, reset: p, t: () => r };
  let { delay: l = 0, css: u, tick: d, easing: m = la } = t;
  var h,
    g = () => 1 - r;
  return (
    A(() => {
      if (!s) {
        var c = [];
        if (o && n === void 0 && (d && d(0, 1), u)) {
          var f = ca(u(0, 1));
          c.push(f, f);
        }
        (h = e.animate(c, { duration: l, fill: `forwards` })),
          (h.onfinish = () => {
            h.cancel(), i();
            var o = n?.t() ?? 1 - r;
            n?.abort();
            var s = r - o,
              c = t.duration * Math.abs(s),
              l = [];
            if (c > 0) {
              var f = !1;
              if (u)
                for (var p = Math.ceil(c / (1e3 / 60)), _ = 0; _ <= p; _ += 1) {
                  var v = o + s * m(_ / p),
                    y = ca(u(v, 1 - v));
                  l.push(y), (f ||= y.overflow === `hidden`);
                }
              f && (e.style.overflow = `hidden`),
                (g = () => {
                  var e = h.currentTime;
                  return o + s * m(e / c);
                }),
                d &&
                  aa(() => {
                    if (h.playState !== `running`) return !1;
                    var e = g();
                    return d(e, 1 - e), !0;
                  });
            }
            (h = e.animate(l, { duration: c, fill: `forwards` })),
              (h.onfinish = () => {
                (g = () => r), d?.(r, 1 - r), a();
              });
          });
      }
    }),
    {
      abort: () => {
        (s = !0), h && (h.cancel(), (h.effect = null), (h.onfinish = p));
      },
      deactivate: () => {
        a = p;
      },
      reset: () => {
        r === 0 && d?.(1, 0);
      },
      t: () => g(),
    }
  );
}
function ha(e, t, n, r, i, a) {
  let o = w;
  w && O();
  var s = null;
  w && E.nodeType === 1 && ((s = E), O());
  var c = w ? E : e,
    l = G,
    u = new Ri(c, !1);
  ur(() => {
    let e = t() || null;
    var a = i ? i() : n || e === `svg` ? Ee : void 0;
    if (e === null) u.ensure(null, null), Ai(!0);
    else
      return (
        u.ensure(e, (t) => {
          if (e) {
            var n = w;
            if (((s = w ? s : qn(e, a)), $(s, s), r)) {
              var i = null;
              w && ei(e) && s.append((i = document.createComment(``)));
              var o = w ? L(s) : s.appendChild(I());
              w && (o === null ? T(!1) : D(o)),
                da(l),
                r(s, o),
                i?.remove(),
                da(null);
            }
            (G.nodes.end = s), n || t.before(s);
          }
          w && D(t);
        }),
        Ai(!0),
        () => {
          e && Ai(!1);
        }
      );
  }, ie),
    er(() => {
      Ai(!0);
    }),
    o && (T(!0), D(c));
}
function ga(e, t) {
  let n = null,
    r = w;
  var i;
  if (w) {
    n = E;
    for (
      var a = L(document.head);
      a !== null && (a.nodeType !== 8 || a.data !== e);

    )
      a = R(a);
    if (a === null) T(!1);
    else {
      var o = R(a);
      a.remove(), D(o);
    }
  }
  w || (i = document.head.appendChild(I()));
  try {
    ur(() => {
      var e = B(() => t(i));
      (e.f |= ae),
        w ||
          (e.nodes === null
            ? (e.nodes = { start: i, end: i, a: null, t: null })
            : (e.nodes.end = i));
    });
  } finally {
    r && (T(!0), D(n));
  }
}
function _a(e, t) {
  var n = void 0,
    r;
  dr(() => {
    n !== (n = t()) &&
      ((r &&= (V(r), null)),
      n &&
        (r = B(() => {
          ar(() => n(e));
        })));
  });
}
function va(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`) {
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = va(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  }
  return r;
}
function ya() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = va(e)) && (r && (r += ` `), (r += t));
  return r;
}
function ba(e) {
  return typeof e == `object` ? ya(e) : e ?? ``;
}
var xa = [
  ...` 	
\r\f\xA0\v﻿`,
];
function Sa(e, t, n) {
  var r = e == null ? `` : `` + e;
  if ((t && (r = r ? r + ` ` + t : t), n)) {
    for (var i of Object.keys(n))
      if (n[i]) r = r ? r + ` ` + i : i;
      else if (r.length)
        for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0; ) {
          var s = o + a;
          (o === 0 || xa.includes(r[o - 1])) &&
          (s === r.length || xa.includes(r[s]))
            ? (r = (o === 0 ? `` : r.substring(0, o)) + r.substring(s + 1))
            : (o = s);
        }
  }
  return r === `` ? null : r;
}
function Ca(e, t = !1) {
  var n = t ? ` !important;` : `;`,
    r = ``;
  for (var i of Object.keys(e)) {
    var a = e[i];
    a != null && a !== `` && (r += ` ` + i + `: ` + a + n);
  }
  return r;
}
function wa(e) {
  return e[0] !== `-` || e[1] !== `-` ? e.toLowerCase() : e;
}
function Ta(e, t) {
  if (t) {
    var n = ``,
      r,
      i;
    if ((Array.isArray(t) ? ((r = t[0]), (i = t[1])) : (r = t), e)) {
      e = String(e)
        .replaceAll(/\/\*.*?\*\//g, ``)
        .trim();
      var a = !1,
        o = 0,
        s = !1,
        c = [];
      r && c.push(...Object.keys(r).map(wa)),
        i && c.push(...Object.keys(i).map(wa));
      var l = 0,
        u = -1;
      let t = e.length;
      for (var d = 0; d < t; d++) {
        var f = e[d];
        if (
          (s
            ? f === `/` && e[d - 1] === `*` && (s = !1)
            : a
            ? a === f && (a = !1)
            : f === `/` && e[d + 1] === `*`
            ? (s = !0)
            : f === `"` || f === `'`
            ? (a = f)
            : f === `(`
            ? o++
            : f === `)` && o--,
          !s && a === !1 && o === 0)
        ) {
          if (f === `:` && u === -1) u = d;
          else if (f === `;` || d === t - 1) {
            if (u !== -1) {
              var p = wa(e.substring(l, u).trim());
              if (!c.includes(p)) {
                f !== `;` && d++;
                var m = e.substring(l, d).trim();
                n += ` ` + m + `;`;
              }
            }
            (l = d + 1), (u = -1);
          }
        }
      }
    }
    return (
      r && (n += Ca(r)),
      i && (n += Ca(i, !0)),
      (n = n.trim()),
      n === `` ? null : n
    );
  }
  return e == null ? null : String(e);
}
function Ea(e, t, n, r, i, a) {
  var o = e[ve];
  if (w || o !== n || o === void 0) {
    var s = Sa(n, r, a);
    (w && s === e.getAttribute(`class`)) ||
      (s == null
        ? e.removeAttribute(`class`)
        : t
        ? (e.className = s)
        : e.setAttribute(`class`, s)),
      (e[ve] = n);
  } else if (a && i !== a)
    for (var c in a) {
      var l = !!a[c];
      (i == null || l !== !!i[c]) && e.classList.toggle(c, l);
    }
  return a;
}
function Da(e, t = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    t[i] !== a &&
      (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
  }
}
function Oa(e, t, n, r) {
  var i = e[ye];
  if (w || i !== t) {
    var a = Ta(t, r);
    (w && a === e.getAttribute(`style`)) ||
      (a == null ? e.removeAttribute(`style`) : (e.style.cssText = a)),
      (e[ye] = t);
  } else
    r &&
      (Array.isArray(r)
        ? (Da(e, n?.[0], r[0]), Da(e, n?.[1], r[1], `important`))
        : Da(e, n, r));
  return r;
}
function ka(e, t) {
  t
    ? e.hasAttribute(`selected`) || e.setAttribute(`selected`, ``)
    : e.removeAttribute(`selected`);
}
function Aa(e, t) {
  var n = !(`__defaultValue` in e);
  (n || e.__defaultValue !== t) &&
    ((e.__defaultValue = t), ja(e, !n || `__value` in e));
}
function ja(e, n) {
  var r = e.__defaultValue,
    i = e.multiple,
    a = i ? r ?? [] : null;
  if (!i || t(a)) {
    var o = e.selectedIndex,
      s = n && i ? new Set(e.selectedOptions) : null;
    for (var c of e.options) {
      var l = Fa(c);
      ka(c, i ? a.includes(l) : Pn(l, r));
    }
    if (n) {
      if (s !== null)
        for (c of e.options) {
          var u = s.has(c);
          c.selected !== u && (c.selected = u);
        }
      else e.selectedIndex !== o && (e.selectedIndex = o);
    }
  }
}
function Ma(e, n, r = !1) {
  if (e.multiple) {
    if (n == null) return;
    if (!t(n)) return je();
    for (var i of e.options) i.selected = n.includes(Fa(i));
  } else {
    for (i of e.options)
      if (Pn(Fa(i), n)) {
        i.selected = !0;
        return;
      }
    (r && n === void 0) || (e.selectedIndex = -1);
  }
}
function Na(e) {
  var t = new MutationObserver((t) => {
    t.every(Ia) ||
      (`__defaultValue` in e && ja(e, !1), `__value` in e && Ma(e, e.__value));
  });
  t.observe(e, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: [`value`],
  }),
    er(() => {
      t.disconnect();
    });
}
function Pa(e, t, n = t) {
  var r = new WeakSet(),
    i = !0;
  Rt(e, `change`, (t) => {
    var i = t ? `[selected]` : `:checked`,
      a;
    if (e.multiple) a = [].map.call(e.querySelectorAll(i), Fa);
    else {
      var o = e.querySelector(i) ?? e.querySelector(`option:not([disabled])`);
      a = o && Fa(o);
    }
    n(a), (e.__value = a), M !== null && r.add(M);
  }),
    ar(() => {
      var a = t();
      if (e === document.activeElement) {
        var o = M;
        if (r.has(o)) return;
      }
      if ((Ma(e, a, i), i && a === void 0)) {
        var s = e.querySelector(`:checked`);
        s !== null && ((a = Fa(s)), n(a));
      }
      (e.__value = a), (i = !1);
    });
}
function Fa(e) {
  return `__value` in e ? e.__value : e.value;
}
function Ia(e) {
  if (e.target.closest(`selectedcontent`) !== null) return !0;
  if (e.type === `childList`) {
    var t = [...e.addedNodes, ...e.removedNodes];
    return t.length > 0 && t.every((e) => e.nodeName === `SELECTEDCONTENT`);
  }
  return !1;
}
var La = Symbol(`class`),
  Ra = Symbol(`style`),
  za = Symbol(`is custom element`),
  Ba = Symbol(`is html`),
  Va = Ce ? `link` : `LINK`,
  Ha = Ce ? `input` : `INPUT`,
  Ua = Ce ? `option` : `OPTION`,
  Wa = Ce ? `select` : `SELECT`,
  Ga = Ce ? `progress` : `PROGRESS`;
function Ka(e) {
  if (w) {
    var t = !1,
      n = () => {
        if (!t) {
          if (((t = !0), e.hasAttribute(`value`))) {
            var n = e.value;
            Ja(e, `value`, null), (e.value = n);
          }
          if (e.hasAttribute(`checked`)) {
            var r = e.checked;
            Ja(e, `checked`, null), (e.checked = r);
          }
        }
      };
    (e[xe] = n), A(n), It();
  }
}
function qa(e, t) {
  var n = Za(e);
  n.value !== (n.value = t ?? void 0) &&
    (e.value !== t || (t === 0 && e.nodeName === Ga)) &&
    (e.value = t ?? ``);
}
function Ja(e, t, n, r) {
  var i = Za(e);
  if (
    !(
      w &&
      ((i[t] = e.getAttribute(t)),
      t === `src` || t === `srcset` || (t === `href` && e.nodeName === Va))
    )
  ) {
    var a = i[t];
    a !== (i[t] = n) &&
      (t === `loading` && (e[he] = n),
      n == null
        ? e.removeAttribute(t)
        : typeof n != `string` && $a(e).has(t)
        ? (e[t] = n)
        : (!w ||
            (typeof n != `number` && typeof n != `boolean`) ||
            a !== String(n)) &&
          e.setAttribute(t, n));
  }
}
function Ya(e, t, n, r, i = !1, a = !1) {
  w &&
    i &&
    e.nodeName === Ha &&
    (`defaultValue` in n || `defaultChecked` in n || Ka(e));
  var o = Za(e),
    s = o[za],
    c = !o[Ba];
  let l = w && s;
  l && T(!1);
  var u = t || {},
    d = e.nodeName === Ua,
    f = e.nodeName === Wa;
  try {
    for (var p in t) !(p in n) && p[0] + p[1] !== `$$` && (n[p] = null);
    n.class ? (n.class = ba(n.class)) : (r || n[La]) && (n.class = null),
      n[Ra] && (n.style ??= null);
    var m = $a(e);
    if (e.nodeName === Ha && `type` in n && (`value` in n || `__value` in n)) {
      var h = n.type;
      (h !== u.type || (h === void 0 && e.hasAttribute(`type`))) &&
        ((u.type = h), Ja(e, `type`, h, a));
    }
    for (let i in n) {
      let l = n[i];
      if (d && i === `value` && l == null)
        (e.value = e.__value = ``), (u[i] = l);
      else if (i === `class`)
        Ea(
          e,
          e.namespaceURI === `http://www.w3.org/1999/xhtml`,
          l,
          r,
          t?.[La],
          n[La]
        ),
          (u[i] = l),
          (u[La] = n[La]);
      else if (i === `style`)
        Oa(e, l, t?.[Ra], n[Ra]), (u[i] = l), (u[Ra] = n[Ra]);
      else {
        var g = u[i];
        if (l !== g || (l === void 0 && e.hasAttribute(i))) {
          u[i] = l;
          var _ = i[0] + i[1];
          if (_ !== `$$`) {
            if (_ === `on`) {
              let t = {},
                n = `$$` + i,
                r = i.slice(2);
              var v = qr(r);
              if (
                (Gr(r) && ((r = r.slice(0, -7)), (t.capture = !0)), !v && g)
              ) {
                if (l != null) continue;
                e.removeEventListener(r, u[n], t), (u[n] = null);
              }
              if (v) ci(r, e, l), li([r]);
              else if (l != null) {
                function a(e) {
                  u[i].call(this, e);
                }
                u[n] = ai(r, e, a, t);
              }
            } else if (i === `style`) Ja(e, i, l);
            else if (i === `autofocus`) Nt(e, !!l);
            else if (!s && (i === `__value` || (i === `value` && l != null)))
              (e.__value = l),
                (g == null ||
                  e.value !== l ||
                  (l === 0 && e.nodeName === Ga)) &&
                  (e.value = l);
            else if (i === `selected` && d) ka(e, l);
            else {
              var y = i;
              c || (y = Xr(y));
              var b = y === `defaultValue` || y === `defaultChecked`;
              if (f && y === `defaultValue`) continue;
              if (l == null && !s && !b) {
                if (((o[i] = null), y === `value` || y === `checked`)) {
                  let n = e,
                    r = t === void 0;
                  if (y === `value`) {
                    let e = n.defaultValue;
                    n.removeAttribute(y),
                      (n.defaultValue = e),
                      (n.value = n.__value = r ? e : null);
                  } else {
                    let e = n.defaultChecked;
                    n.removeAttribute(y),
                      (n.defaultChecked = e),
                      (n.checked = r ? e : !1);
                  }
                } else e.removeAttribute(i);
              } else
                b || ((s || typeof l != `string`) && m.has(y))
                  ? ((e[y] = l), y in o && (o[y] = C))
                  : typeof l != `function` && Ja(e, y, l, a);
            }
          }
        }
      }
    }
  } finally {
    l && T(!0);
  }
  return u;
}
function Xa(e, t, n = [], r = [], i = [], a, o = !1, s = !1) {
  zt(i, n, r, (n) => {
    var r = void 0,
      i = {},
      c = e.nodeName === Wa,
      l = !1;
    if (
      (dr(() => {
        var u = t(...n.map(Z)),
          d = Ya(e, r, u, a, o, s);
        if (l && c) {
          var f = e;
          `defaultValue` in u && Aa(f, u.defaultValue),
            `value` in u && Ma(f, u.value);
        }
        for (let e of Object.getOwnPropertySymbols(i)) u[e] || V(i[e]);
        for (let t of Object.getOwnPropertySymbols(u)) {
          var p = u[t];
          t.description !== `@attach` ||
            (r && p === r[t]) ||
            (i[t] && V(i[t]), (i[t] = B(() => _a(e, () => p)))),
            (d[t] = p);
        }
        r = d;
      }),
      c)
    ) {
      var u = e;
      ar(() => {
        var e = r;
        `defaultValue` in e && Aa(u, e.defaultValue), Ma(u, e.value, !0), Na(u);
      });
    }
    l = !0;
  });
}
function Za(e) {
  return (e[_e] ??= {
    [za]: e.nodeName.includes(`-`),
    [Ba]: e.namespaceURI === Te,
  });
}
var Qa = new Map();
function $a(e) {
  var t = e.getAttribute(`is`) || e.nodeName,
    n = Qa.get(t);
  if (n) return n;
  Qa.set(t, (n = new Set()));
  for (var r, i = e, a = Element.prototype; a !== i; ) {
    for (var o in ((r = s(i)), r))
      r[o].set &&
        o !== `innerHTML` &&
        o !== `textContent` &&
        o !== `innerText` &&
        n.add(o);
    i = u(i);
  }
  return n;
}
function eo(e, t, n = t) {
  var r = new WeakSet();
  Rt(e, `input`, async (i) => {
    var a = i ? e.defaultValue : e.value;
    if (
      ((a = no(e) ? ro(a) : a),
      n(a),
      M !== null && r.add(M),
      await zr(),
      a !== (a = t()))
    ) {
      var o = e.selectionStart,
        s = e.selectionEnd,
        c = e.value.length;
      if (((e.value = a ?? ``), s !== null)) {
        var l = e.value.length;
        o === s && s === c && l > c
          ? ((e.selectionStart = l), (e.selectionEnd = l))
          : ((e.selectionStart = o), (e.selectionEnd = Math.min(s, l)));
      }
    }
  }),
    ((w && e.defaultValue !== e.value) || (Q(t) == null && e.value)) &&
      (n(no(e) ? ro(e.value) : e.value), M !== null && r.add(M)),
    sr(() => {
      var n = t();
      if (e === document.activeElement) {
        var i = M;
        if (r.has(i)) return;
      }
      (no(e) && n === ro(e.value)) ||
        ((e.type !== `date` || n || e.value) &&
          n !== e.value &&
          (e.value = n ?? ``));
    });
}
function to(e, t, n = t) {
  Rt(e, `change`, (t) => {
    n(t ? e.defaultChecked : e.checked);
  }),
    ((w && e.defaultChecked !== e.checked) || Q(t) == null) && n(e.checked),
    sr(() => {
      e.checked = !!t();
    });
}
function no(e) {
  var t = e.type;
  return t === `number` || t === `range`;
}
function ro(e) {
  return e === `` ? null : +e;
}
var io = new (class e {
  #e = new WeakMap();
  #t;
  #n;
  static entries = new WeakMap();
  constructor(e) {
    this.#n = e;
  }
  observe(e, t) {
    var n = this.#e.get(e) || new Set();
    return (
      n.add(t),
      this.#e.set(e, n),
      this.#r().observe(e, this.#n),
      () => {
        var n = this.#e.get(e);
        n.delete(t), n.size === 0 && (this.#e.delete(e), this.#t.unobserve(e));
      }
    );
  }
  #r() {
    return (this.#t ??= new ResizeObserver((t) => {
      for (var n of t) {
        e.entries.set(n.target, n);
        for (var r of this.#e.get(n.target) || []) r(n);
      }
    }));
  }
})({ box: `border-box` });
function ao(e, t, n) {
  var r = io.observe(e, () => n(e[t]));
  ar(() => (Q(() => n(e[t])), r));
}
function oo(e, t) {
  return e === t || e?.[fe] === t;
}
function so(e = Tt(), t, n, r) {
  var i = k.r,
    a = G;
  return (
    ar(() => {
      var o, s;
      return (
        sr(() => {
          (o = s),
            (s = r?.() || []),
            Q(() => {
              oo(n(...s), e) ||
                (t(e, ...s), o && oo(n(...o), e) && t(null, ...o));
            });
        }),
        () => {
          let r = a;
          for (; r !== i && r.parent !== null && r.parent.f & 33554432; )
            r = r.parent;
          let o = () => {
              s && oo(n(...s), e) && t(null, ...s);
            },
            c = r.teardown;
          r.teardown = () => {
            o(), c?.();
          };
        }
      );
    }),
    e
  );
}
function co(e, t, n, r = n) {
  t.addEventListener(`input`, () => {
    r(t[e]);
  }),
    sr(() => {
      var i = n();
      if (t[e] !== i) {
        if (i == null) {
          var a = t[e];
          r(a);
        } else t[e] = i + ``;
      }
    });
}
function lo(e = !1) {
  let t = k,
    n = t.l.u;
  if (!n) return;
  let r = () => Ur(t.s);
  if (e) {
    let e = 0,
      n = {},
      i = Ut(() => {
        let r = !1,
          i = t.s;
        for (let e in i) i[e] !== n[e] && ((n[e] = i[e]), (r = !0));
        return r && e++, e;
      });
    r = () => Z(i);
  }
  n.b.length &&
    rr(() => {
      uo(t, r), h(n.b);
    }),
    tr(() => {
      let e = Q(() => n.m.map(m));
      return () => {
        for (let t of e) typeof t == `function` && t();
      };
    }),
    n.a.length &&
      tr(() => {
        uo(t, r), h(n.a);
      });
}
function uo(e, t) {
  if (e.l.s) for (let t of e.l.s) Z(t);
  t();
}
function fo(e) {
  var t = Sn(0);
  return function () {
    return arguments.length === 1
      ? (F(t, Z(t) + 1), arguments[0])
      : (Z(t), e());
  };
}
function po(e, t, n) {
  if (e == null) return t(void 0), n && n(void 0), p;
  let r = Q(() => e.subscribe(t, n));
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
var mo = [];
function ho(e, t) {
  return { subscribe: go(e, t).subscribe };
}
function go(e, t = p) {
  let n = null,
    r = new Set();
  function i(t) {
    if (ze(e, t) && ((e = t), n)) {
      let t = !mo.length;
      for (let t of r) t[1](), mo.push(t, e);
      if (t) {
        for (let e = 0; e < mo.length; e += 2) mo[e][0](mo[e + 1]);
        mo.length = 0;
      }
    }
  }
  function a(t) {
    i(t(e));
  }
  function o(o, s = p) {
    let c = [o, s];
    return (
      r.add(c),
      r.size === 1 && (n = t(i, a) || p),
      o(e),
      () => {
        r.delete(c), r.size === 0 && n && (n(), (n = null));
      }
    );
  }
  return { set: i, update: a, subscribe: o };
}
function _o(e, t, n) {
  let r = !Array.isArray(e),
    i = r ? [e] : e;
  if (!i.every(Boolean))
    throw Error(`derived() expects stores as input, got a falsy value`);
  let a = t.length < 2;
  return ho(n, (e, n) => {
    let o = !1,
      s = [],
      c = 0,
      l = p,
      u = () => {
        if (c) return;
        l();
        let i = t(r ? s[0] : s, e, n);
        a ? e(i) : (l = typeof i == `function` ? i : p);
      },
      d = i.map((e, t) =>
        po(
          e,
          (e) => {
            (s[t] = e), (c &= ~(1 << t)), o && u();
          },
          () => {
            c |= 1 << t;
          }
        )
      );
    return (
      (o = !0),
      u(),
      function () {
        h(d), l(), (o = !1);
      }
    );
  });
}
function vo(e) {
  let t;
  return po(e, (e) => (t = e))(), t;
}
var yo = !1,
  bo = Symbol(`unmounted`);
function xo(e, t, n) {
  let r = (n[t] ??= { store: null, source: wn(void 0), unsubscribe: p });
  if (r.store !== e && !(bo in n)) {
    if ((r.unsubscribe(), (r.store = e ?? null), e == null))
      (r.source.v = void 0), (r.unsubscribe = p);
    else {
      var i = !0;
      (r.unsubscribe = po(e, (e) => {
        i ? (r.source.v = e) : F(r.source, e);
      })),
        (i = !1);
    }
  }
  return e && bo in n ? vo(e) : Z(r.source);
}
function So(e, t) {
  return wo(e, t), t;
}
function Co() {
  let e = {};
  function t() {
    er(() => {
      for (var t in e) e[t].unsubscribe();
      a(e, bo, { enumerable: !1, value: !0 });
    });
  }
  return [e, t];
}
function wo(e, t) {
  try {
    e.set(t);
  } finally {
  }
}
function To(e, t, n) {
  return wo(e, n), t;
}
function Eo() {
  yo = !0;
}
function Do(e) {
  var t = yo;
  try {
    return (yo = !1), [e(), yo];
  } finally {
    yo = t;
  }
}
var Oo = {
  get(e, t) {
    if (!e.exclude.has(t)) return e.props[t];
  },
  set(e, t) {
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    if (!e.exclude.has(t) && t in e.props)
      return { enumerable: !0, configurable: !0, value: e.props[t] };
  },
  has(e, t) {
    return !e.exclude.has(t) && t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.has(t));
  },
};
function ko(e, t, n) {
  return new Proxy({ props: e, exclude: t }, Oo);
}
var Ao = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if ((f(r) && (r = r()), typeof r == `object` && r && t in r)) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let i = e.props[r];
      f(i) && (i = i());
      let a = o(i, t);
      if (a && a.set) return a.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if ((f(r) && (r = r()), typeof r == `object` && r && t in r)) {
        let e = o(r, t);
        return e && !e.configurable && (e.configurable = !0), e;
      }
    }
  },
  has(e, t) {
    if (t === fe || t === me) return !1;
    for (let n of e.props)
      if ((f(n) && (n = n()), n != null && t in n)) return !0;
    return !1;
  },
  ownKeys(e) {
    let t = [];
    for (let n of e.props)
      if ((f(n) && (n = n()), n)) {
        for (let e in n) t.includes(e) || t.push(e);
        for (let e of Object.getOwnPropertySymbols(n))
          t.includes(e) || t.push(e);
      }
    return t;
  },
};
function jo(...e) {
  return new Proxy({ props: e }, Ao);
}
function Mo(e, t, n, r) {
  var i = !ot || !!(n & 2),
    a = !!(n & 8),
    s = !!(n & 16),
    c = r,
    l = !0,
    u = void 0,
    d = () =>
      s && i ? ((u ??= Ut(r)), Z(u)) : (l && ((l = !1), (c = s ? Q(r) : r)), c);
  let f;
  if (a) {
    var p = fe in e || me in e;
    f = o(e, t)?.set ?? (p && t in e ? (n) => (e[t] = n) : void 0);
  }
  var m,
    h = !1;
  a ? ([m, h] = Do(() => e[t])) : (m = e[t]),
    m === void 0 && r !== void 0 && ((m = d()), f && (i && tt(t), f(m)));
  var g = i
    ? () => {
        var n = e[t];
        return n === void 0 ? d() : ((l = !0), n);
      }
    : () => {
        var n = e[t];
        return n !== void 0 && (c = void 0), n === void 0 ? c : n;
      };
  if (i && !(n & 4)) return g;
  if (f) {
    var _ = e.$$legacy;
    return function (e, t) {
      return arguments.length > 0
        ? ((!i || !t || _ || h) && f(t ? g() : e), e)
        : g();
    };
  }
  var v = !1,
    y = (n & 1 ? Ut : qt)(() => ((v = !1), g()));
  a && Z(y);
  var b = G;
  return function (e, t) {
    if (arguments.length > 0) {
      let n = t ? Z(y) : i && a ? Mn(e) : e;
      return F(y, n), (v = !0), c !== void 0 && (c = n), e;
    }
    return (Cr && v) || b.f & 16384 ? y.v : Z(y);
  };
}
function No(e) {
  return class extends Po {
    constructor(t) {
      super({ component: e, ...t });
    }
  };
}
var Po = class {
  #e;
  #t;
  constructor(e) {
    var t = new Map(),
      n = (e, n) => {
        var r = wn(n, !1, !1);
        return t.set(e, r), r;
      };
    let r = new Proxy(
      { ...(e.props || {}), $$events: {} },
      {
        get(e, r) {
          return Z(t.get(r) ?? n(r, Reflect.get(e, r)));
        },
        has(e, r) {
          return (
            r === me ||
            (Z(t.get(r) ?? n(r, Reflect.get(e, r))), Reflect.has(e, r))
          );
        },
        set(e, r, i) {
          return F(t.get(r) ?? n(r, i), i), Reflect.set(e, r, i);
        },
      }
    );
    (this.#t = (e.hydrate ? Ni : Mi)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: r,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover,
      transformError: e.transformError,
    })),
      (e?.props?.$$host && e.sync !== !1) || un(),
      (this.#e = r.$$events);
    for (let e of Object.keys(this.#t))
      e !== `$set` &&
        e !== `$destroy` &&
        e !== `$on` &&
        a(this, e, {
          get() {
            return this.#t[e];
          },
          set(t) {
            this.#t[e] = t;
          },
          enumerable: !0,
        });
    (this.#t.$set = (e) => {
      Object.assign(r, e);
    }),
      (this.#t.$destroy = () => {
        Li(this.#t);
      });
  }
  $set(e) {
    this.#t.$set(e);
  }
  $on(e, t) {
    this.#e[e] = this.#e[e] || [];
    let n = (...e) => t.call(this, ...e);
    return (
      this.#e[e].push(n),
      () => {
        this.#e[e] = this.#e[e].filter((e) => e !== n);
      }
    );
  }
  $destroy() {
    this.#t.$destroy();
  }
};
function Fo(e, t) {
  if ((Ve(`hydratable`), w)) {
    let t = window.__svelte?.h;
    if (t?.has(e)) return t.get(e);
    ke(e);
  }
  return t();
}
var Io = e({
  afterUpdate: () => Uo,
  beforeUpdate: () => Ho,
  createContext: () => vt,
  createEventDispatcher: () => Vo,
  createRawSnippet: () => ea,
  flushSync: () => un,
  fork: () => vn,
  getAbortSignal: () => Lo,
  getAllContexts: () => St,
  getContext: () => yt,
  hasContext: () => xt,
  hydratable: () => Fo,
  hydrate: () => Ni,
  mount: () => Mi,
  onDestroy: () => zo,
  onMount: () => Ro,
  setContext: () => bt,
  settled: () => Br,
  tick: () => zr,
  unmount: () => Li,
  untrack: () => Q,
});
function Lo() {
  return H === null && Qe(), (H.ac ??= new AbortController()).signal;
}
function Ro(e) {
  k === null && He(`onMount`),
    ot && k.l !== null
      ? Wo(k).m.push(e)
      : tr(() => {
          let t = Q(e);
          if (typeof t == `function`) return t;
        });
}
function zo(e) {
  k === null && He(`onDestroy`), Ro(() => () => Q(e));
}
function Bo(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function Vo() {
  let e = k;
  return (
    e === null && He(`createEventDispatcher`),
    (n, r, i) => {
      let a = e.s.$$events?.[n];
      if (a) {
        let o = t(a) ? a.slice() : [a],
          s = Bo(n, r, i);
        for (let t of o) t.call(e.x, s);
        return !s.defaultPrevented;
      }
      return !0;
    }
  );
}
function Ho(e) {
  k === null && He(`beforeUpdate`),
    k.l === null && et(`beforeUpdate`),
    Wo(k).b.push(e);
}
function Uo(e) {
  k === null && He(`afterUpdate`),
    k.l === null && et(`afterUpdate`),
    Wo(k).a.push(e);
}
function Wo(e) {
  var t = e.l;
  return (t.u ??= { a: [], b: [], m: [] });
}
export {
  yi as $,
  Na as A,
  Kt as At,
  ra as B,
  Fe as Bt,
  eo as C,
  Mn as Ct,
  Ja as D,
  Cn as Dt,
  Ka as E,
  Sn as Et,
  ga as F,
  bt as Ft,
  Hi as G,
  v as Gt,
  $i as H,
  Ne as Ht,
  ha as I,
  pt as It,
  ji as J,
  Vi as K,
  fa as L,
  dt as Lt,
  Oa as M,
  yt as Mt,
  Ea as N,
  wt as Nt,
  qa as O,
  kn as Ot,
  _a as P,
  Ct as Pt,
  _i as Q,
  pa as R,
  lt as Rt,
  to as S,
  Wn as St,
  Xa as T,
  F as Tt,
  Qi as U,
  _ as Ut,
  ta as V,
  Pe as Vt,
  Ki as W,
  p as Wt,
  wi as X,
  Ti as Y,
  Ci as Z,
  fo as _,
  In as _t,
  Mo as a,
  oi as at,
  so as b,
  Hn as bt,
  Eo as c,
  Br as ct,
  To as d,
  kr as dt,
  Si as et,
  So as f,
  lr as ft,
  go as g,
  rr as gt,
  ho as h,
  tr as ht,
  No as i,
  si as it,
  ka as j,
  Pt as jt,
  Pa as k,
  qt as kt,
  Co as l,
  zr as lt,
  vo as m,
  cr as mt,
  zo as n,
  li as nt,
  ko as o,
  ii as ot,
  _o as p,
  ar as pt,
  zi as q,
  Ro as r,
  ci as rt,
  jo as s,
  Z as st,
  Io as t,
  bi as tt,
  xo as u,
  Q as ut,
  lo as v,
  Fn as vt,
  La as w,
  An as wt,
  ao as x,
  Un as xt,
  co as y,
  Vn as yt,
  aa as z,
  st as zt,
};
