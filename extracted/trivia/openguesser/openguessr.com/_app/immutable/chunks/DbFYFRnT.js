import "./xihTtKlq.js";
import {
  $ as e,
  At as t,
  Bt as n,
  C as r,
  Ct as i,
  D as a,
  Dt as o,
  E as s,
  Et as c,
  G as l,
  Gt as u,
  H as d,
  I as f,
  J as p,
  M as m,
  Mt as h,
  N as g,
  Nt as _,
  P as v,
  Pt as y,
  Q as b,
  R as x,
  S,
  St as C,
  T as w,
  Tt as T,
  Ut as E,
  V as D,
  Vt as O,
  W as k,
  Wt as A,
  X as j,
  Y as M,
  Z as N,
  _ as P,
  a as F,
  at as ee,
  b as te,
  bt as ne,
  dt as re,
  et as ie,
  ht as ae,
  it as oe,
  mt as I,
  nt as L,
  o as R,
  q as z,
  rt as B,
  s as V,
  st as H,
  ut as se,
  v as ce,
  vt as le,
  wt as ue,
  x as de,
  xt as U,
  yt as W,
} from "./hxBKRHPW.js";
import "./xySTN7WL.js";
var fe = class extends Map {
    #e = new Map();
    #t = o(0);
    #n = o(0);
    #r = re || -1;
    constructor(e) {
      if ((super(), e)) {
        for (var [t, n] of e) super.set(t, n);
        this.#n.v = super.size;
      }
    }
    #i(e) {
      return re === this.#r ? o(e) : c(e);
    }
    has(e) {
      var t = this.#e,
        n = t.get(e);
      if (n === void 0) {
        if (super.has(e)) (n = this.#i(0)), t.set(e, n);
        else return H(this.#t), !1;
      }
      return H(n), !0;
    }
    forEach(e, t) {
      this.#a(), super.forEach(e, t);
    }
    get(e) {
      var t = this.#e,
        n = t.get(e);
      if (n === void 0) {
        if (super.has(e)) (n = this.#i(0)), t.set(e, n);
        else {
          H(this.#t);
          return;
        }
      }
      return H(n), super.get(e);
    }
    getOrInsert(e, t) {
      return super.has(e) || this.set(e, t), this.get(e);
    }
    getOrInsertComputed(e, t) {
      return super.has(e) || this.set(e, t(e)), this.get(e);
    }
    set(e, t) {
      var n = this.#e,
        r = n.get(e),
        i = super.get(e),
        a = super.set(e, t),
        o = this.#t;
      if (r === void 0)
        (r = this.#i(0)), n.set(e, r), T(this.#n, super.size), ue(o);
      else if (i !== t) {
        ue(r);
        var s = o.reactions === null ? null : new Set(o.reactions);
        (s !== null && r.reactions?.every((e) => s.has(e))) || ue(o);
      }
      return a;
    }
    delete(e) {
      var t = this.#e,
        n = t.get(e),
        r = super.delete(e);
      return (
        n !== void 0 && (t.delete(e), T(n, -1)),
        r && (T(this.#n, super.size), ue(this.#t)),
        r
      );
    }
    clear() {
      if (super.size !== 0) {
        super.clear();
        var e = this.#e;
        T(this.#n, 0);
        for (var t of e.values()) T(t, -1);
        ue(this.#t), e.clear();
      }
    }
    #a() {
      H(this.#t);
      var e = this.#e;
      if (this.#n.v !== e.size) {
        for (var t of super.keys())
          if (!e.has(t)) {
            var n = this.#i(0);
            e.set(t, n);
          }
      }
      for ([, n] of this.#e) H(n);
    }
    keys() {
      return H(this.#t), super.keys();
    }
    values() {
      return this.#a(), super.values();
    }
    entries() {
      return this.#a(), super.entries();
    }
    [Symbol.iterator]() {
      return this.entries();
    }
    get size() {
      return H(this.#n), super.size;
    }
  },
  pe = class {
    #e;
    #t;
    constructor(e, t) {
      (this.#e = e), (this.#t = M(t));
    }
    get current() {
      return this.#t(), this.#e();
    }
  },
  me = /\(.+\)/,
  he = new Set([`all`, `print`, `screen`, `and`, `or`, `not`, `only`]),
  ge = class extends pe {
    constructor(e, t) {
      let n =
          me.test(e) || e.split(/[\s,]+/).some((e) => he.has(e.trim()))
            ? e
            : `(${e})`,
        r = window.matchMedia(n);
      super(
        () => r.matches,
        (e) => ee(r, `change`, e)
      );
    }
  },
  _e = b(`<span><span class="svelte-1lrbsrr"><!></span></span>`);
function ve(e, t) {
  let n = F(t, `red`, 3, !1),
    r = F(t, `italic`, 3, !1),
    i = F(t, `mutedOpacity`, 3, !0);
  var o = _e();
  let s;
  var c = W(o),
    l = W(c),
    u = (e) => {
      var n = ie();
      I(() => p(n, t.text)), j(e, n);
    },
    f = (e) => {
      var n = N(),
        r = ne(n);
      d(r, () => t.children), j(e, n);
    };
  z(l, (e) => {
    !t.children || typeof t.children != `function` ? e(u) : e(f, -1);
  }),
    O(c),
    O(o),
    I(() => {
      (s = g(o, 1, `chip ${t.class ?? ``}`, `svelte-1lrbsrr`, s, {
        clickable: t.onclick,
        "chip-red": n(),
        "content-shadow": n(),
        "chip-italic": r(),
        "muted-opacity": i(),
      })),
        a(o, `role`, t.onclick ? `button` : ``),
        m(o, t.style);
    }),
    B(`click`, o, function (...e) {
      t.onclick?.apply(this, e);
    }),
    j(e, o);
}
L([`click`]);
var ye = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    "stroke-width": 2,
    "stroke-linecap": `round`,
    "stroke-linejoin": `round`,
  },
  be = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim();
function xe(e) {
  return e != null;
}
function Se(e, t = {}) {
  let n = t.attributeNames ?? {},
    r = (e) => n[e] ?? e,
    i = e.size ?? e.width ?? ye.width,
    a = e.size ?? e.height ?? ye.height,
    o =
      e.aliases
        ?.filter((e) => typeof e == `string` && e.trim() !== ``)
        .map((e) => `lucide-${e}`) ?? [],
    s = [...(e.name ? [`lucide-${e.name}`] : []), ...o],
    c = t.className?.split(` `).filter(Boolean) ?? [],
    l = t.includeDefaultClasses === !1 ? be(...c) : be(`lucide`, ...s, ...c),
    u = t.absoluteStrokeWidth
      ? (Number(t.strokeWidth ?? ye[`stroke-width`]) *
          Number(e.size ?? e.width ?? ye.width)) /
        Number(t.size ?? t.width ?? ye.width)
      : t.strokeWidth ?? ye[`stroke-width`];
  return [
    `svg`,
    {
      ...Object.entries(ye).reduce((e, [t, n]) => ((e[r(t)] = n), e), {}),
      ...(`color` in t && t.color && { [r(`stroke`)]: t.color }),
      ...(`size` in t &&
        xe(t.size) && { [r(`width`)]: t.size, [r(`height`)]: t.size }),
      ...(`width` in t && xe(t.width) && { [r(`width`)]: t.width }),
      ...(`height` in t && xe(t.height) && { [r(`height`)]: t.height }),
      [r(`stroke-width`)]: u,
      ...(l && { [r(`class`)]: l }),
      [r(`viewBox`)]: `0 0 ${i} ${a}`,
      ...(t.hasA11yProp === !1 ? { [r(`aria-hidden`)]: `true` } : {}),
      ...(`attributes` in t && t.attributes),
    },
    e.node.map((e) => {
      let [n, i, a] = e,
        o = t.nonScalingStroke
          ? { [r(`vector-effect`)]: `non-scaling-stroke`, ...i }
          : i;
      return a ? [n, o, a] : [n, o];
    }),
  ];
}
var Ce = (e) => {
    for (let t in e)
      if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
    return !1;
  },
  we = Symbol(`lucide-context`),
  Te = () => h(we),
  Ee = new Set([
    `$$slots`,
    `$$events`,
    `$$legacy`,
    `color`,
    `size`,
    `width`,
    `height`,
    `strokeWidth`,
    `absoluteStrokeWidth`,
    `nonScalingStroke`,
    `iconNode`,
    `icon`,
    `class`,
    `children`,
  ]),
  De = e(`<svg><!><!></svg>`);
function G(e, n) {
  y(n, !0);
  let r = Te() ?? {},
    i = F(n, `color`, 19, () => r.color ?? `currentColor`),
    a = F(n, `size`, 19, () => r.size ?? 24),
    o = F(n, `width`, 19, a),
    s = F(n, `height`, 19, a),
    c = F(n, `strokeWidth`, 19, () => r.strokeWidth ?? 2),
    p = F(n, `absoluteStrokeWidth`, 19, () => r.absoluteStrokeWidth ?? !1),
    m = F(n, `nonScalingStroke`, 19, () => r.nonScalingStroke ?? !1),
    h = F(n, `iconNode`, 19, () => []),
    g = F(n, `icon`, 19, () => ({ node: h(), aliases: [], size: 24 })),
    v = R(n, Ee),
    b = t(() => !!n.children || Ce(v)),
    x = t(() =>
      Se(g(), {
        color: i(),
        width: o(),
        height: s(),
        strokeWidth: c(),
        absoluteStrokeWidth: p(),
        nonScalingStroke: m(),
        className: be(`lucide-icon`, r.class),
        hasA11yProp: H(b),
        attributes: v,
      })
    ),
    S = t(() => u(H(x), 3)),
    T = t(() => H(S)[1]),
    D = t(() => E(H(S)[2], () => [], !0)),
    M = t(() => ({ ...H(T), class: [...H(T).class.split(` `), n.class] }));
  var P = De();
  w(P, () => ({ ...H(M) }));
  var ee = W(P);
  k(
    ee,
    17,
    () => H(D),
    l,
    (e, n) => {
      var r = t(() => u(H(n), 2));
      let i = () => H(r)[0],
        a = () => H(r)[1];
      var o = N(),
        s = ne(o);
      f(s, i, !0, (e, t) => {
        w(e, () => ({ ...a() }));
      }),
        j(e, o);
    }
  );
  var te = C(ee);
  d(te, () => n.children ?? A), O(P), j(e, P), _();
}
var Oe = {
  name: `arrow-right`,
  size: 24,
  node: [
    [`path`, { d: `M5 12h14` }],
    [`path`, { d: `m12 5 7 7-7 7` }],
  ],
};
Oe.node;
var ke = new Set([`$$slots`, `$$events`, `$$legacy`]);
function Ae(e, t) {
  let n = R(t, ke);
  G(
    e,
    V(() => n, {
      get icon() {
        return Oe;
      },
    })
  );
}
var je = {
  name: `check`,
  size: 24,
  node: [[`path`, { d: `M20 6 9 17l-5-5` }]],
};
je.node;
var Me = new Set([`$$slots`, `$$events`, `$$legacy`]);
function Ne(e, t) {
  let n = R(t, Me);
  G(
    e,
    V(() => n, {
      get icon() {
        return je;
      },
    })
  );
}
var Pe = {
  name: `chevron-down`,
  size: 24,
  node: [[`path`, { d: `m6 9 6 6 6-6` }]],
};
Pe.node;
var Fe = new Set([`$$slots`, `$$events`, `$$legacy`]);
function Ie(e, t) {
  let n = R(t, Fe);
  G(
    e,
    V(() => n, {
      get icon() {
        return Pe;
      },
    })
  );
}
var Le = {
  name: `info`,
  size: 24,
  node: [
    [`circle`, { cx: `12`, cy: `12`, r: `10` }],
    [`path`, { d: `M12 16v-4` }],
    [`path`, { d: `M12 8h.01` }],
  ],
};
Le.node;
var Re = new Set([`$$slots`, `$$events`, `$$legacy`]);
function ze(e, t) {
  let n = R(t, Re);
  G(
    e,
    V(() => n, {
      get icon() {
        return Le;
      },
    })
  );
}
var Be = { name: `minus`, size: 24, node: [[`path`, { d: `M5 12h14` }]] };
Be.node;
var Ve = new Set([`$$slots`, `$$events`, `$$legacy`]);
function He(e, t) {
  let n = R(t, Ve);
  G(
    e,
    V(() => n, {
      get icon() {
        return Be;
      },
    })
  );
}
var Ue = {
  name: `plus`,
  size: 24,
  node: [
    [`path`, { d: `M5 12h14` }],
    [`path`, { d: `M12 5v14` }],
  ],
};
Ue.node;
var We = new Set([`$$slots`, `$$events`, `$$legacy`]);
function Ge(e, t) {
  let n = R(t, We);
  G(
    e,
    V(() => n, {
      get icon() {
        return Ue;
      },
    })
  );
}
var Ke = {
  name: `square-arrow-up-right-exit`,
  size: 24,
  node: [
    [`path`, { d: `M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6` }],
    [`path`, { d: `m21 3-9 9` }],
    [`path`, { d: `M15 3h6v6` }],
  ],
  aliases: [`arrow-up-right-from-square`, `square-arrow-out-up-right`],
};
Ke.node;
var qe = new Set([`$$slots`, `$$events`, `$$legacy`]);
function Je(e, t) {
  let n = R(t, qe);
  G(
    e,
    V(() => n, {
      get icon() {
        return Ke;
      },
    })
  );
}
var Ye = {
  name: `x`,
  size: 24,
  node: [
    [`path`, { d: `M18 6 6 18` }],
    [`path`, { d: `m6 6 12 12` }],
  ],
};
Ye.node;
var Xe = new Set([`$$slots`, `$$events`, `$$legacy`]);
function Ze(e, t) {
  let n = R(t, Xe);
  G(
    e,
    V(() => n, {
      get icon() {
        return Ye;
      },
    })
  );
}
var Qe = (e) => e;
function $e(e) {
  let t = e - 1;
  return t * t * t + 1;
}
function et(e) {
  return e < 0.5 ? 4 * e * e * e : 0.5 * (2 * e - 2) ** 3 + 1;
}
function tt(e) {
  let t = typeof e == `string` && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return t ? [parseFloat(t[1]), t[2] || `px`] : [e, `px`];
}
function nt(e, t, n) {
  return Number.isNaN(t) ? `` : `${e}: ${n * t}px;`;
}
function rt(
  e,
  {
    delay: t = 0,
    duration: n = 400,
    easing: r = et,
    amount: i = 5,
    opacity: a = 0,
  } = {}
) {
  let o = getComputedStyle(e),
    s = +o.opacity,
    c = o.filter === `none` ? `` : o.filter,
    l = s * (1 - a),
    [u, d] = tt(i);
  return {
    delay: t,
    duration: n,
    easing: r,
    css: (e, t) => `opacity: ${s - l * t}; filter: ${c} blur(${t * u}${d});`,
  };
}
function it(e, { delay: t = 0, duration: n = 400, easing: r = Qe } = {}) {
  let i = +getComputedStyle(e).opacity;
  return { delay: t, duration: n, easing: r, css: (e) => `opacity: ${e * i}` };
}
function at(
  e,
  {
    delay: t = 0,
    duration: n = 400,
    easing: r = $e,
    x: i = 0,
    y: a = 0,
    opacity: o = 0,
  } = {}
) {
  let s = getComputedStyle(e),
    c = +s.opacity,
    l = s.transform === `none` ? `` : s.transform,
    u = c * (1 - o),
    [d, f] = tt(i),
    [p, m] = tt(a);
  return {
    delay: t,
    duration: n,
    easing: r,
    css: (e, t) => `
			transform: ${l} translate(${(1 - e) * d}${f}, ${(1 - e) * p}${m});
			opacity: ${c - u * t}`,
  };
}
function ot(
  e,
  { delay: t = 0, duration: n = 400, easing: r = $e, axis: i = `y` } = {}
) {
  let a = getComputedStyle(e),
    o = +a.opacity,
    s = i === `y` ? `height` : `width`,
    c = parseFloat(a[s]),
    l = i === `y` ? [`top`, `bottom`] : [`left`, `right`],
    u = l.map((e) => `${e[0].toUpperCase()}${e.slice(1)}`),
    d = parseFloat(a[`padding${u[0]}`]),
    f = parseFloat(a[`padding${u[1]}`]),
    p = parseFloat(a[`margin${u[0]}`]),
    m = parseFloat(a[`margin${u[1]}`]),
    h = parseFloat(a[`border${u[0]}Width`]),
    g = parseFloat(a[`border${u[1]}Width`]);
  return {
    delay: t,
    duration: n,
    easing: r,
    css: (e) =>
      `overflow: hidden;opacity: ${Math.min(e * 20, 1) * o};` +
      nt(s, c, e) +
      nt(`padding-${l[0]}`, d, e) +
      nt(`padding-${l[1]}`, f, e) +
      nt(`margin-${l[0]}`, p, e) +
      nt(`margin-${l[1]}`, m, e) +
      nt(`border-${l[0]}-width`, h, e) +
      nt(`border-${l[1]}-width`, g, e) +
      `min-${s}: 0`,
  };
}
function st(
  e,
  {
    delay: t = 0,
    duration: n = 400,
    easing: r = $e,
    start: i = 0,
    opacity: a = 0,
  } = {}
) {
  let o = getComputedStyle(e),
    s = +o.opacity,
    c = o.transform === `none` ? `` : o.transform,
    l = 1 - i,
    u = s * (1 - a);
  return {
    delay: t,
    duration: n,
    easing: r,
    css: (e, t) => `
			transform: ${c} scale(${1 - l * t});
			opacity: ${s - u * t}
		`,
  };
}
var ct = b(
    `<div><div class="collapsible-content svelte-1b4h38t"><!></div></div>`
  ),
  lt = b(
    `<div><div class="collapsible-toggle svelte-1b4h38t" role="button"><p class="collapsible-title svelte-1b4h38t"> </p> <div class="collapsible-icon svelte-1b4h38t"><!></div></div> <!></div>`
  );
function ut(e, n) {
  y(n, !0);
  let r = F(n, `isOpen`, 15, !1),
    i = F(n, `class`, 3, ``),
    o = F(n, `inPage`, 3, !0);
  var s = lt();
  let c;
  var l = W(s);
  a(l, `tabindex`, 0);
  var u = W(l),
    f = U(u, !0),
    h = C(u, 2),
    v = W(h);
  {
    let e = t(() => (r() ? `transform: rotate(180deg)` : ``));
    Ie(v, {
      get style() {
        return `margin-bottom: -4px; transition: transform 250ms ease; ${
          H(e) ?? ``
        }`;
      },
    });
  }
  O(h), O(l);
  var b = C(l, 2),
    S = (e) => {
      var t = ct();
      m(t, ``, {}, { width: `100%`, "margin-top": `var(--box-margin)` });
      var r = W(t),
        i = W(r);
      d(i, () => n.children ?? A),
        O(r),
        O(t),
        x(
          3,
          r,
          () => it,
          () => ({ duration: 250 })
        ),
        x(
          3,
          t,
          () => ot,
          () => ({ duration: 250 })
        ),
        j(e, t);
    };
  z(b, (e) => {
    r() && e(S);
  }),
    O(s),
    I(() => {
      g(s, 1, `collapsible-container ${i() ?? ``}`, `svelte-1b4h38t`),
        (c = m(s, ``, c, {
          "border-radius": o() ? `var(--layout-margin)` : `var(--box-margin)`,
          "box-shadow": o() ? `var(--panel-shadow)` : `var(--box-shadow)`,
        })),
        p(f, n.title);
    }),
    B(`click`, l, () => {
      r(!r()), n.ontoggle?.(r());
    }),
    j(e, s),
    _();
}
L([`click`]);
function dt(e, t, n, r) {
  let i = (e, t, n) =>
    (1 - 3 * n + 3 * t) * e ** 3 + (3 * n - 6 * t) * e ** 2 + 3 * t * e;
  return (a) => {
    let o = a;
    for (let t = 0; t < 5; t++) {
      let t =
        3 * (1 - 3 * n + 3 * e) * o ** 2 + 2 * (3 * n - 6 * e) * o + 3 * e;
      if (Math.abs(t) < 1e-6) break;
      o -= (i(o, e, n) - a) / t;
    }
    return i(o, t, r);
  };
}
var ft = (e, t, n) => Math.min(Math.max(e, t), n);
function pt(e, t) {
  for (; e; ) {
    if (e.scrollTop > 0) return !0;
    if (e === t) return !1;
    e = e.parentElement;
  }
  return !1;
}
function mt(e, t) {
  for (; e; ) {
    if (e.scrollHeight - e.scrollTop - e.clientHeight > 1) return !0;
    if (e === t) return !1;
    e = e.parentElement;
  }
  return !1;
}
function ht(e) {
  return e;
}
function gt(e) {
  return --e * e * (2.70158 * e + 1.70158) + 1;
}
function _t(e) {
  let t = e - 1;
  return t * t * t + 1;
}
function vt(e) {
  return -e * (e - 2);
}
var yt = [],
  bt = b(`<div class="drawer-handle svelte-1vaagyb"></div>`),
  xt = b(
    `<div role="dialog"><div class="drawer-overlay svelte-1vaagyb"></div> <div role="menu" tabindex="0"><!> <button class="close-popup-button standard-button svelte-1vaagyb" aria-label="close"><!></button> <div><!></div></div></div>`
  );
function St(e, n) {
  y(n, !0);
  let r = F(n, `open`, 15, !1),
    s = o(0),
    c = { duration: 500, easing: dt(0.32, 0.72, 0, 1) },
    l = new ge(`(orientation: portrait) and (max-width: 500px)`),
    u = (e) => (l.current ? { duration: 0 } : it(e, { duration: 100 })),
    f = c;
  function p(e, t, { direction: n }) {
    if (!l.current) return st(e, { easing: gt, duration: 250, start: 0.9 });
    if (n == `in`)
      return (f = c), T(M, e.offsetHeight + 50), L(), { duration: 0 };
    {
      cancelAnimationFrame(te);
      let e = H(M);
      return {
        ...f,
        css: (t) =>
          `transform: translate3d(0, ${H(re) + (e - H(re)) * t}px, 0)`,
      };
    }
  }
  function h() {
    if (!l.current) return { duration: 0 };
    let e = H(ie);
    return {
      ...f,
      css: (t) =>
        `background-color: color-mix(in srgb, var(--overlay-color) ${
          e * t * 100
        }%, transparent); backdrop-filter: blur(calc(var(--weak-blur) * ${
          e * t
        }));`,
    };
  }
  let b = o(void 0),
    S,
    w = o(void 0),
    E,
    D,
    k = o(!1),
    M = o(0),
    P = o(i([])),
    te,
    re = t(() => H(b) + 50),
    ie = t(() => Math.min(1, 1 - H(M) / H(re))),
    L = () => {
      if (H(M) == 0) return;
      let e = H(M),
        t = performance.now(),
        n = (r) => {
          let i = Math.min(1, (r - t) / c.duration);
          T(M, e * (1 - c.easing(i))), i < 1 && (te = requestAnimationFrame(n));
        };
      te = requestAnimationFrame(n);
    },
    R = (e) => [...e].find((e) => e.identifier === S),
    V = (e) => {
      if (!l.current || H(w) != null || pt(e.target, e.currentTarget)) return;
      cancelAnimationFrame(te);
      let t = e.changedTouches[0];
      (S = t.identifier),
        (D = H(M)),
        T(w, t.clientY, !0),
        (E = t.clientX),
        T(P, [{ y: H(w), time: performance.now() }], !0);
    },
    ce = (e) => {
      let t = R(e.touches);
      if (H(w) == null || !t) return;
      let n = t.clientY;
      if (!H(k)) {
        let r = Math.abs(t.clientX - E) > Math.abs(n - H(w)),
          i = n <= H(w) && mt(e.target, e.currentTarget);
        if (r || i) return T(w, null), L();
      }
      e.preventDefault(), T(k, !0);
      let r = performance.now();
      for (
        H(P).push({ y: n, time: r });
        H(P).length > 2 && r - H(P)[0].time > 80;

      )
        H(P).shift();
      let i = n - H(w) + D;
      T(M, i > 0 ? i : i * 0.05, !0);
    },
    ue = (e) => {
      if (H(w) == null || !R(e.changedTouches)) return;
      if ((T(w, null), !H(k))) return L();
      T(k, !1);
      let t = H(P)[0],
        n = H(P).at(-1),
        r = n.time > t.time ? (n.y - t.y) / (n.time - t.time) : 0;
      r > 0.4 || H(M) > H(b) * 0.35
        ? ((f = {
            duration: ft((H(re) - H(M)) / Math.max(r, 1.5), 180, 420),
            easing: dt(0.45, 0.55, 0.4, 0.92),
          }),
          fe())
        : L();
    },
    U = () => {
      let e = yt.indexOf(H(s));
      e !== -1 && yt.splice(e, 1);
    };
  ae(() => {
    if (r())
      return (
        se(() => {
          let e = Math.max(Math.max(...yt), 100);
          T(s, e + 1), yt.push(H(s));
        }),
        U
      );
  });
  function fe() {
    n.onuserclose?.(), r(!1);
  }
  var pe = N();
  oe(`keydown`, le, (e) => {
    e.key == `Escape` &&
      r() &&
      H(s) >= Math.max(...yt) &&
      !e.defaultPrevented &&
      (e.preventDefault(), fe());
  });
  var me = ne(pe),
    he = (e) => {
      var t = xt();
      let r;
      a(t, `tabindex`, 0);
      let i;
      var o = W(t);
      let c;
      var f = C(o, 2);
      let _, y;
      var S = W(f),
        w = (e) => {
          var t = bt();
          j(e, t);
        };
      z(S, (e) => {
        l.current && !n.frameless && e(w);
      });
      var E = C(S, 2);
      Ze(W(E), { strokeWidth: 2.25 }), O(E);
      var D = C(E, 2);
      let k;
      var N = W(D);
      d(N, () => n.children ?? A),
        O(D),
        O(f),
        v(f, () => (e) => ee(e, `touchmove`, ce, { passive: !1 })),
        O(t),
        I(() => {
          (r = g(t, 1, `popup-holder svelte-1vaagyb`, null, r, {
            "drawer-holder": l.current,
          })),
            (i = m(t, ``, i, { "z-index": H(s) })),
            (c = m(o, ``, c, {
              "background-color": `color-mix(in srgb, var(--overlay-color) ${
                H(ie) * 100
              }%, transparent)`,
              "backdrop-filter": `blur(calc(var(--weak-blur) * ${
                H(ie) ?? ``
              }))`,
            })),
            (_ = g(f, 1, `ui-window svelte-1vaagyb`, null, _, {
              drawer: l.current,
              "frame-less": n.frameless,
            })),
            (y = m(f, ``, y, {
              "max-width": l.current
                ? `none`
                : n.ultraSlim
                ? `450px`
                : n.verySlim
                ? `600px`
                : n.slim
                ? `750px`
                : `850px`,
              transform:
                l.current && H(M) ? `translate3d(0, ${H(M)}px, 0)` : ``,
            })),
            (k = g(D, 1, `content of-top of-bottom svelte-1vaagyb`, null, k, {
              "content-frameless": n.frameless,
            }));
        }),
        B(`click`, t, (e) => {
          e.target == e.currentTarget && fe();
        }),
        B(`click`, o, fe),
        x(2, o, () => h),
        B(`touchstart`, f, V, void 0, !0),
        B(`touchend`, f, ue),
        oe(`touchcancel`, f, ue),
        B(`click`, E, fe),
        x(1, f, () => p),
        x(2, f, () => p),
        de(f, `offsetHeight`, (e) => T(b, e)),
        x(1, t, () => u),
        x(2, t, () => u),
        j(e, t);
    };
  z(me, (e) => {
    r() && e(he);
  }),
    j(e, pe),
    _();
}
L([`click`, `touchstart`, `touchend`]);
var K = i({
  visible: !1,
  title: ``,
  description: ``,
  confirmText: ``,
  executeFunction: null,
});
function Ct(e, t, n, r) {
  (K.title = e),
    (K.description = t),
    (K.confirmText = r || `Confirm`),
    (K.executeFunction = n),
    (K.visible = !0);
}
var wt = b(
    `<button class="standard-button popup-bottom-button large"> </button>`
  ),
  Tt = b(
    `<div class="popup-title"><h1> </h1></div> <p> </p> <div><!></div>`,
    1
  );
function Et(e, t) {
  y(t, !0);
  function n() {
    t.onconfirm?.(), (K.visible = !1);
    try {
      K.executeFunction?.();
    } catch (e) {
      console.error(`Error executing confirm callback:`, e);
    }
  }
  St(e, {
    verySlim: !0,
    get open() {
      return K.visible;
    },
    set open(e) {
      K.visible = e;
    },
    children: (e, t) => {
      var r = Tt(),
        i = ne(r),
        a = W(i),
        o = U(a, !0);
      O(i);
      var s = C(i, 2),
        c = U(s, !0),
        l = C(s, 2);
      m(l, ``, {}, { "margin-top": `var(--layout-margin)` });
      var u = W(l),
        d = (e) => {
          var t = wt(),
            r = U(t, !0);
          I(() => p(r, K.confirmText)), B(`click`, t, n), j(e, t);
        };
      z(u, (e) => {
        K.executeFunction && e(d);
      }),
        O(l),
        I(() => {
          p(o, K.title), p(c, K.description);
        }),
        j(e, r);
    },
    $$slots: { default: !0 },
  }),
    _();
}
L([`click`]);
var Dt = i({
  popupOpen: !1,
  hideDisableOption: !0,
  hideErrors: !1,
  title: ``,
  description: ``,
  errorCode: ``,
  reload: !1,
});
function Ot(e, t, n, r, i) {
  (Dt.hideDisableOption = i),
    (!Dt.hideErrors || r) &&
      ((Dt.title = e),
      (Dt.description = t),
      (Dt.errorCode = n),
      (Dt.reload = r),
      (Dt.popupOpen = !0));
}
var q = P(() => Dt),
  kt = b(`<p class="error-code bright-soft svelte-1cidjnt"> </p>`),
  At = b(
    `<div id="error-popup-disable" class="svelte-1cidjnt"><p>Never show again</p> <input type="checkbox"/></div>`
  ),
  jt = b(
    `<div class="popup-title"><h1> </h1></div> <div><p class="slight-bottom-margin svelte-1cidjnt"> </p> <!></div> <!>`,
    1
  );
function Mt(e, t) {
  y(t, !1),
    ce(),
    St(e, {
      verySlim: !0,
      onuserclose: () => {
        q().reload && window.location.reload();
      },
      get open() {
        return q().popupOpen;
      },
      set open(e) {
        q((q().popupOpen = e));
      },
      children: (e, t) => {
        var n = jt(),
          r = ne(n),
          i = W(r),
          a = U(i, !0);
        O(r);
        var o = C(r, 2),
          c = W(o),
          l = U(c, !0),
          u = C(c, 2),
          d = (e) => {
            var t = kt(),
              n = U(t, !0);
            I(() => p(n, q().errorCode)), j(e, t);
          };
        z(u, (e) => {
          q().errorCode && e(d);
        }),
          O(o);
        var f = C(o, 2),
          m = (e) => {
            var t = At(),
              n = C(W(t), 2);
            s(n),
              O(t),
              S(
                n,
                () => q().hideErrors,
                (e) => q((q().hideErrors = e))
              ),
              j(e, t);
          };
        z(f, (e) => {
          q().hideDisableOption || e(m);
        }),
          I(() => {
            p(a, q().title), p(l, q().description);
          }),
          j(e, n);
      },
      $$slots: { default: !0 },
      $$legacy: !0,
    }),
    _();
}
var Nt = b(`<p> </p>`),
  Pt = b(`<p><!></p>`),
  Ft = b(
    `<div><!> <div class="text-container of-left of-right svelte-1gc09zb"><!></div></div>`
  );
function It(e, t) {
  let n = F(t, `inPage`, 3, !1),
    r = F(t, `class`, 3, ``),
    i = F(t, `style`, 3, ``),
    a = F(t, `nowrap`, 3, !1),
    o = F(t, `center`, 3, !1),
    s = F(t, `transition`, 3, !1);
  var c = Ft();
  let l;
  var u = W(c);
  ze(u, {
    strokeWidth: 2.25,
    size: 22,
    color: `white`,
    style: `opacity: 50%; flex-shrink: 0;`,
  });
  var f = C(u, 2),
    h = W(f),
    _ = (e) => {
      var n = Nt();
      let r;
      var i = U(n, !0);
      I(() => {
        (r = g(n, 1, `svelte-1gc09zb`, null, r, { "p-nowrap": a() })),
          p(i, t.text);
      }),
        j(e, n);
    },
    v = (e) => {
      var n = Pt();
      let r;
      var i = W(n);
      d(i, () => t.children),
        O(n),
        I(() => (r = g(n, 1, `svelte-1gc09zb`, null, r, { "p-nowrap": a() }))),
        j(e, n);
    };
  z(h, (e) => {
    t.text || !t.children ? e(_) : t.children && e(v, 1);
  }),
    O(f),
    O(c),
    I(() => {
      (l = g(c, 1, `info-container ${r() ?? ``}`, `svelte-1gc09zb`, l, {
        "info-container-in-page": n(),
        "info-container-center": o(),
      })),
        m(c, i());
    }),
    x(
      3,
      c,
      () => ot,
      () => ({ duration: s() ? 400 : 0 })
    ),
    j(e, c);
}
var Lt = `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='250'%20height='250'%20viewBox='-125%20-125%20250%20250'%20fill='none'%20stroke='%23fff'%3e%3ccircle%20r='109'%20stroke-width='6.5'%20/%3e%3ccircle%20r='92'%20stroke-width='6.5'%20/%3e%3cpath%20stroke-width='5'%20stroke-linejoin='round'%20d='M0-73C7-33%2016-22%2016%200S7%2033%200%2073C-7%2033-16%2022-16%200S-7-33%200-73Z'%20/%3e%3ccircle%20r='13.5'%20stroke-width='5.5'%20/%3e%3c/svg%3e`,
  Rt = b(`<img fetchpriority="high" alt="Loading"/>`);
function zt(e, t) {
  let n = F(t, `class`, 3, ``);
  var r = Rt();
  I(() => {
    a(r, `src`, Lt),
      g(r, 1, `spinner ${n() ?? ``}`, `svelte-c7jgw0`),
      m(r, t.style);
  }),
    j(e, r);
}
var J = i({
    visible: !1,
    text: ``,
    viewOnly: !1,
    clickableText: null,
    textClickFunction: null,
    acceptFunction: null,
    dismissFunction: null,
  }),
  Bt;
async function Vt(e, t, n, r, i, a) {
  clearTimeout(Bt),
    J.visible && (Ht(), await new Promise((e) => setTimeout(e, 250))),
    (J.visible = !0),
    (J.text = e),
    (J.viewOnly = r),
    (J.clickableText = i),
    (J.textClickFunction = a),
    (Bt = r
      ? setTimeout(() => {
          Ht();
        }, 5e3)
      : t
      ? setTimeout(() => {
          Ht();
        }, 15e3)
      : setTimeout(() => {
          Ht();
        }, 3e3)),
    (J.acceptFunction = t),
    (J.dismissFunction = n);
}
function Ht() {
  J.visible = !1;
}
var Ut = b(
    `<span class="clickable-text svelte-j1bkvy" role="button" tabindex="0"> </span>`
  ),
  Wt = b(` <!>`, 1),
  Gt = b(
    `<button id="notification-accept" class="standard-button bright svelte-j1bkvy"><!></button>`
  ),
  Kt = b(
    `<div id="notification-bar" class="svelte-j1bkvy"><p id="notification-text" class="svelte-j1bkvy"></p> <div class="notification-button-box svelte-j1bkvy"><!> <button id="notification-dismiss" class="standard-button bright svelte-j1bkvy" aria-label="Dismiss"><!></button></div></div>`
  ),
  qt = b(`<div class="notification-holder svelte-j1bkvy"><!></div>`);
function Jt(e, r) {
  y(r, !0);
  let i = F(r, `top`, 3, `var(--box-margin)`),
    o = F(r, `offsetSafeArea`, 3, !0);
  function s() {
    if (J.acceptFunction)
      try {
        J.acceptFunction();
      } catch (e) {
        console.error(`Error executing notification function:`, e);
      }
    r.onaccept?.(), Ht();
  }
  function c() {
    if (J.dismissFunction)
      try {
        J.dismissFunction();
      } catch (e) {
        console.error(`Error executing notification function:`, e);
      }
    r.ondismiss?.(), Ht();
  }
  let u = t(() => (J.clickableText ? J.text?.split(`%s`) : [J.text]));
  var d = qt();
  let f;
  var h = W(d),
    g = (e) => {
      var t = Kt(),
        r = W(t);
      k(
        r,
        21,
        () => H(u),
        l,
        (e, t, r) => {
          n();
          var i = Wt(),
            a = ne(i),
            o = C(a),
            s = (e) => {
              var t = Ut(),
                n = U(t, !0);
              I(() => p(n, J.clickableText)),
                B(`click`, t, function (...e) {
                  J.textClickFunction?.apply(this, e);
                }),
                j(e, t);
            };
          z(o, (e) => {
            H(u).length > r + 1 && e(s);
          }),
            I(() => p(a, `${H(u)[r] ?? ``} `)),
            j(e, i);
        }
      ),
        O(r);
      var i = C(r, 2),
        o = W(i),
        d = (e) => {
          var t = Gt(),
            n = W(t),
            r = (e) => {
              Je(e, {
                size: 20,
                strokeWidth: 2.25,
                style: `vertical-align: -1px;`,
              });
            },
            i = (e) => {
              Ne(e, {
                size: 20,
                strokeWidth: 2.25,
                style: `vertical-align: -1px;`,
              });
            };
          z(n, (e) => {
            J.viewOnly ? e(r) : e(i, -1);
          }),
            O(t),
            I(() => a(t, `aria-label`, J.viewOnly ? `View` : `Accept`)),
            B(`click`, t, s),
            j(e, t);
        };
      z(o, (e) => {
        J.acceptFunction && e(d);
      });
      var f = C(o, 2);
      Ze(W(f), { size: 20, strokeWidth: 2.25, style: `vertical-align: -1px;` }),
        O(f),
        O(i),
        O(t),
        B(`click`, f, c),
        x(
          3,
          t,
          () => at,
          () => ({ y: -20, duration: 250 })
        ),
        j(e, t);
    };
  z(h, (e) => {
    J.visible && e(g);
  }),
    O(d),
    I(
      () =>
        (f = m(d, ``, f, {
          top: i(),
          "margin-top": o() ? `env(safe-area-inset-top)` : ``,
        }))
    ),
    j(e, d),
    _();
}
L([`click`]);
var Yt = Math.min,
  Xt = Math.max,
  Zt = Math.round,
  Qt = Math.floor,
  Y = (e) => ({ x: e, y: e }),
  $t = { left: `right`, right: `left`, bottom: `top`, top: `bottom` };
function en(e, t, n) {
  return Xt(e, Yt(t, n));
}
function tn(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function nn(e) {
  return e.split(`-`)[0];
}
function rn(e) {
  return e.split(`-`)[1];
}
function an(e) {
  return e === `x` ? `y` : `x`;
}
function on(e) {
  return e === `y` ? `height` : `width`;
}
function sn(e) {
  let t = e[0];
  return t === `t` || t === `b` ? `y` : `x`;
}
function cn(e) {
  return an(sn(e));
}
function ln(e, t, n) {
  n === void 0 && (n = !1);
  let r = rn(e),
    i = cn(e),
    a = on(i),
    o =
      i === `x`
        ? r === (n ? `end` : `start`)
          ? `right`
          : `left`
        : r === `start`
        ? `bottom`
        : `top`;
  return t.reference[a] > t.floating[a] && (o = vn(o)), [o, vn(o)];
}
function un(e) {
  let t = vn(e);
  return [dn(e), t, dn(t)];
}
function dn(e) {
  return e.includes(`start`)
    ? e.replace(`start`, `end`)
    : e.replace(`end`, `start`);
}
var fn = [`left`, `right`],
  pn = [`right`, `left`],
  mn = [`top`, `bottom`],
  hn = [`bottom`, `top`];
function gn(e, t, n) {
  switch (e) {
    case `top`:
    case `bottom`:
      return n ? (t ? pn : fn) : t ? fn : pn;
    case `left`:
    case `right`:
      return t ? mn : hn;
    default:
      return [];
  }
}
function _n(e, t, n, r) {
  let i = rn(e),
    a = gn(nn(e), n === `start`, r);
  return (
    i && ((a = a.map((e) => e + `-` + i)), t && (a = a.concat(a.map(dn)))), a
  );
}
function vn(e) {
  let t = nn(e);
  return $t[t] + e.slice(t.length);
}
function yn(e) {
  return {
    top: e.top ?? 0,
    right: e.right ?? 0,
    bottom: e.bottom ?? 0,
    left: e.left ?? 0,
  };
}
function bn(e) {
  return typeof e == `number`
    ? { top: e, right: e, bottom: e, left: e }
    : yn(e);
}
function xn(e) {
  let { x: t, y: n, width: r, height: i } = e;
  return {
    width: r,
    height: i,
    top: n,
    left: t,
    right: t + r,
    bottom: n + i,
    x: t,
    y: n,
  };
}
function Sn(e, t, n) {
  let { reference: r, floating: i } = e,
    a = sn(t),
    o = cn(t),
    s = on(o),
    c = nn(t),
    l = a === `y`,
    u = r.x + r.width / 2 - i.width / 2,
    d = r.y + r.height / 2 - i.height / 2,
    f = r[s] / 2 - i[s] / 2,
    p;
  switch (c) {
    case `top`:
      p = { x: u, y: r.y - i.height };
      break;
    case `bottom`:
      p = { x: u, y: r.y + r.height };
      break;
    case `right`:
      p = { x: r.x + r.width, y: d };
      break;
    case `left`:
      p = { x: r.x - i.width, y: d };
      break;
    default:
      p = { x: r.x, y: r.y };
  }
  let m = rn(t);
  return m && (p[o] += f * (m === `end` ? 1 : -1) * (n && l ? -1 : 1)), p;
}
async function Cn(e, t) {
  t === void 0 && (t = {});
  let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e,
    {
      boundary: c = `clippingAncestors`,
      rootBoundary: l = `viewport`,
      elementContext: u = `floating`,
      altBoundary: d = !1,
      padding: f = 0,
    } = tn(t, e),
    p = bn(f),
    m = o[d ? (u === `floating` ? `reference` : `floating`) : u],
    h = xn(
      await i.getClippingRect({
        element:
          (await (i.isElement == null ? void 0 : i.isElement(m))) ?? !0
            ? m
            : m.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(o.floating))),
        boundary: c,
        rootBoundary: l,
        strategy: s,
      })
    ),
    g =
      u === `floating`
        ? { x: n, y: r, width: a.floating.width, height: a.floating.height }
        : a.reference,
    _ = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(o.floating)),
    v = ((await (i.isElement == null ? void 0 : i.isElement(_))) &&
      (await (i.getScale == null ? void 0 : i.getScale(_)))) || { x: 1, y: 1 },
    y = xn(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: o,
            rect: g,
            offsetParent: _,
            strategy: s,
          })
        : g
    );
  return {
    top: (h.top - y.top + p.top) / v.y,
    bottom: (y.bottom - h.bottom + p.bottom) / v.y,
    left: (h.left - y.left + p.left) / v.x,
    right: (y.right - h.right + p.right) / v.x,
  };
}
var wn = 50,
  Tn = async (e, t, n) => {
    let {
        placement: r = `bottom`,
        strategy: i = `absolute`,
        middleware: a = [],
        platform: o,
      } = n,
      s = o.detectOverflow ? o : { ...o, detectOverflow: Cn },
      c = await (o.isRTL == null ? void 0 : o.isRTL(t)),
      l = await o.getElementRects({ reference: e, floating: t, strategy: i }),
      { x: u, y: d } = Sn(l, r, c),
      f = r,
      p = 0,
      m = {};
    for (let n = 0; n < a.length; n++) {
      let h = a[n];
      if (!h) continue;
      let { name: g, fn: _ } = h,
        {
          x: v,
          y,
          data: b,
          reset: x,
        } = await _({
          x: u,
          y: d,
          initialPlacement: r,
          placement: f,
          strategy: i,
          middlewareData: m,
          rects: l,
          platform: s,
          elements: { reference: e, floating: t },
        });
      (u = v ?? u),
        (d = y ?? d),
        (m[g] = { ...m[g], ...b }),
        x &&
          p < wn &&
          (p++,
          typeof x == `object` &&
            (x.placement && (f = x.placement),
            x.rects &&
              (l =
                x.rects === !0
                  ? await o.getElementRects({
                      reference: e,
                      floating: t,
                      strategy: i,
                    })
                  : x.rects),
            ({ x: u, y: d } = Sn(l, f, c))),
          (n = -1));
    }
    return { x: u, y: d, placement: f, strategy: i, middlewareData: m };
  },
  En = (e) => ({
    name: `arrow`,
    options: e,
    async fn(t) {
      let {
          x: n,
          y: r,
          placement: i,
          rects: a,
          platform: o,
          elements: s,
          middlewareData: c,
        } = t,
        { element: l, padding: u = 0 } = tn(e, t) || {};
      if (l == null) return {};
      let d = bn(u),
        f = { x: n, y: r },
        p = cn(i),
        m = on(p),
        h = await o.getDimensions(l),
        g = p === `y`,
        _ = g ? `top` : `left`,
        v = g ? `bottom` : `right`,
        y = g ? `clientHeight` : `clientWidth`,
        b = a.reference[m] + a.reference[p] - f[p] - a.floating[m],
        x = f[p] - a.reference[p],
        S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)),
        C = S ? S[y] : 0;
      (C && (await (o.isElement == null ? void 0 : o.isElement(S)))) ||
        (C = s.floating[y] || a.floating[m]);
      let w = b / 2 - x / 2,
        T = C / 2 - h[m] / 2 - 1,
        E = Yt(d[_], T),
        D = Yt(d[v], T),
        O = C - h[m] - D,
        k = C / 2 - h[m] / 2 + w,
        A = en(E, k, O),
        j =
          !c.arrow &&
          rn(i) != null &&
          k !== A &&
          a.reference[m] / 2 - (k < E ? E : D) - h[m] / 2 < 0,
        M = j ? (k < E ? k - E : k - O) : 0;
      return {
        [p]: f[p] + M,
        data: {
          [p]: A,
          centerOffset: k - A - M,
          ...(j && { alignmentOffset: M }),
        },
        reset: j,
      };
    },
  }),
  Dn = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `flip`,
        options: e,
        async fn(t) {
          var n;
          let {
              placement: r,
              middlewareData: i,
              rects: a,
              initialPlacement: o,
              platform: s,
              elements: c,
            } = t,
            {
              mainAxis: l = !0,
              crossAxis: u = !0,
              fallbackPlacements: d,
              fallbackStrategy: f = `bestFit`,
              fallbackAxisSideDirection: p = `none`,
              flipAlignment: m = !0,
              ...h
            } = tn(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          let g = nn(r),
            _ = sn(o),
            v = nn(o) === o,
            y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)),
            b = d || (v || !m ? [vn(o)] : un(o)),
            x = p !== `none`;
          !d && x && b.push(..._n(o, m, p, y));
          let S = [o, ...b],
            C = await s.detectOverflow(t, h),
            w = [],
            T = i.flip?.overflows || [];
          if ((l && w.push(C[g]), u)) {
            let e = ln(r, a, y);
            w.push(C[e[0]], C[e[1]]);
          }
          if (
            ((T = [...T, { placement: r, overflows: w }]),
            !w.every((e) => e <= 0))
          ) {
            let e = (i.flip?.index || 0) + 1,
              t = S[e];
            if (
              t &&
              (u !== `alignment` ||
                _ === sn(t) ||
                T.every((e) => sn(e.placement) !== _ || e.overflows[0] > 0))
            )
              return {
                data: { index: e, overflows: T },
                reset: { placement: t },
              };
            let n = T.filter((e) => e.overflows[0] <= 0).sort(
              (e, t) => e.overflows[1] - t.overflows[1]
            )[0]?.placement;
            if (!n)
              switch (f) {
                case `bestFit`: {
                  let e = T.filter((e) => {
                    if (x) {
                      let t = sn(e.placement);
                      return t === _ || t === `y`;
                    }
                    return !0;
                  })
                    .map((e) => [
                      e.placement,
                      e.overflows
                        .filter((e) => e > 0)
                        .reduce((e, t) => e + t, 0),
                    ])
                    .sort((e, t) => e[1] - t[1])[0]?.[0];
                  e && (n = e);
                  break;
                }
                case `initialPlacement`:
                  n = o;
              }
            if (r !== n) return { reset: { placement: n } };
          }
          return {};
        },
      }
    );
  },
  On = new Set([`left`, `top`]);
async function kn(e, t) {
  let { placement: n, platform: r, elements: i } = e,
    a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)),
    o = nn(n),
    s = rn(n),
    c = sn(n) === `y`,
    l = On.has(o) ? -1 : 1,
    u = a && c ? -1 : 1,
    d = tn(t, e),
    {
      mainAxis: f,
      crossAxis: p,
      alignmentAxis: m,
    } = typeof d == `number`
      ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
      : {
          mainAxis: d.mainAxis || 0,
          crossAxis: d.crossAxis || 0,
          alignmentAxis: d.alignmentAxis,
        };
  return (
    s && typeof m == `number` && (p = s === `end` ? m * -1 : m),
    c ? { x: p * u, y: f * l } : { x: f * l, y: p * u }
  );
}
var An = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: `offset`,
        options: e,
        async fn(t) {
          var n;
          let { x: r, y: i, placement: a, middlewareData: o } = t,
            s = await kn(t, e);
          return a === o.offset?.placement &&
            (n = o.arrow) != null &&
            n.alignmentOffset
            ? {}
            : { x: r + s.x, y: i + s.y, data: { ...s, placement: a } };
        },
      }
    );
  },
  jn = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `shift`,
        options: e,
        async fn(t) {
          let { x: n, y: r, placement: i, platform: a } = t,
            {
              mainAxis: o = !0,
              crossAxis: s = !1,
              limiter: c = {
                fn: (e) => {
                  let { x: t, y: n } = e;
                  return { x: t, y: n };
                },
              },
              ...l
            } = tn(e, t),
            u = { x: n, y: r },
            d = await a.detectOverflow(t, l),
            f = sn(i),
            p = an(f),
            m = u[p],
            h = u[f],
            g = (e, t) =>
              en(
                t + d[e === `y` ? `top` : `left`],
                t,
                t - d[e === `y` ? `bottom` : `right`]
              );
          o && (m = g(p, m)), s && (h = g(f, h));
          let _ = c.fn({ ...t, [p]: m, [f]: h });
          return {
            ..._,
            data: { x: _.x - n, y: _.y - r, enabled: { [p]: o, [f]: s } },
          };
        },
      }
    );
  };
function Mn() {
  return typeof window < `u`;
}
function Nn(e) {
  return Pn(e) ? (e.nodeName || ``).toLowerCase() : `#document`;
}
function X(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Z(e) {
  return ((Pn(e) ? e.ownerDocument : e.document) || window.document)
    ?.documentElement;
}
function Pn(e) {
  return Mn() ? e instanceof Node || e instanceof X(e).Node : !1;
}
function Q(e) {
  return Mn() ? e instanceof Element || e instanceof X(e).Element : !1;
}
function Fn(e) {
  return Mn() ? e instanceof HTMLElement || e instanceof X(e).HTMLElement : !1;
}
function In(e) {
  return !Mn() || typeof ShadowRoot > `u`
    ? !1
    : e instanceof ShadowRoot || e instanceof X(e).ShadowRoot;
}
function Ln(e) {
  let { overflow: t, overflowX: n, overflowY: r, display: i } = $(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    i !== `inline` &&
    i !== `contents`
  );
}
function Rn(e) {
  return /^(table|td|th)$/.test(Nn(e));
}
function zn(e) {
  try {
    if (e.matches(`:popover-open`)) return !0;
  } catch {}
  try {
    return e.matches(`:modal`);
  } catch {
    return !1;
  }
}
var Bn = /transform|translate|scale|rotate|perspective|filter/,
  Vn = /paint|layout|strict|content/,
  Hn = (e) => !!e && e !== `none`,
  Un;
function Wn(e) {
  let t = Q(e) ? $(e) : e;
  return (
    Hn(t.transform) ||
    Hn(t.translate) ||
    Hn(t.scale) ||
    Hn(t.rotate) ||
    Hn(t.perspective) ||
    (!Kn() && (Hn(t.backdropFilter) || Hn(t.filter))) ||
    Bn.test(t.willChange || ``) ||
    Vn.test(t.contain || ``)
  );
}
function Gn(e) {
  let t = Yn(e);
  for (; Fn(t) && !qn(t); ) {
    if (Wn(t)) return t;
    if (zn(t)) return null;
    t = Yn(t);
  }
  return null;
}
function Kn() {
  return (
    (Un ??=
      typeof CSS < `u` &&
      CSS.supports &&
      CSS.supports(`-webkit-backdrop-filter`, `none`)),
    Un
  );
}
function qn(e) {
  return /^(html|body|#document)$/.test(Nn(e));
}
function $(e) {
  return X(e).getComputedStyle(e);
}
function Jn(e) {
  return Q(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Yn(e) {
  if (Nn(e) === `html`) return e;
  let t = e.assignedSlot || e.parentNode || (In(e) && e.host) || Z(e);
  return In(t) ? t.host : t;
}
function Xn(e) {
  let t = Yn(e);
  return qn(t) ? (e.ownerDocument || e).body : Fn(t) && Ln(t) ? t : Xn(t);
}
function Zn(e, t, n) {
  t === void 0 && (t = []), n === void 0 && (n = !0);
  let r = Xn(e),
    i = r === e.ownerDocument?.body,
    a = X(r);
  if (i) {
    let e = Qn(a);
    return t.concat(
      a,
      a.visualViewport || [],
      Ln(r) ? r : [],
      e && n ? Zn(e) : []
    );
  }
  return t.concat(r, Zn(r, [], n));
}
function Qn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function $n(e) {
  let t = $(e),
    n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0,
    i = Fn(e),
    a = i ? e.offsetWidth : n,
    o = i ? e.offsetHeight : r,
    s = Zt(n) !== a || Zt(r) !== o;
  return s && ((n = a), (r = o)), { width: n, height: r, $: s };
}
function er(e) {
  return Q(e) ? e : e.contextElement;
}
function tr(e) {
  let t = er(e);
  if (!Fn(t)) return Y(1);
  let n = t.getBoundingClientRect(),
    { width: r, height: i, $: a } = $n(t),
    o = (a ? Zt(n.width) : n.width) / r,
    s = (a ? Zt(n.height) : n.height) / i;
  return (
    (o && Number.isFinite(o)) || (o = 1),
    (s && Number.isFinite(s)) || (s = 1),
    { x: o, y: s }
  );
}
var nr = Y(0);
function rr(e) {
  let t = X(e);
  return !Kn() || !t.visualViewport
    ? nr
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function ir(e, t, n) {
  return t === void 0 && (t = !1), !!n && t && n === X(e);
}
function ar(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  let i = e.getBoundingClientRect(),
    a = er(e),
    o = Y(1);
  t && (r ? Q(r) && (o = tr(r)) : (o = tr(e)));
  let s = ir(a, n, r) ? rr(a) : Y(0),
    c = (i.left + s.x) / o.x,
    l = (i.top + s.y) / o.y,
    u = i.width / o.x,
    d = i.height / o.y;
  if (a && r) {
    let e = X(a),
      t = Q(r) ? X(r) : r,
      n = e,
      i = Qn(n);
    for (; i && t !== n; ) {
      let e = tr(i),
        t = i.getBoundingClientRect(),
        r = $(i),
        a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x,
        o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
      (c *= e.x),
        (l *= e.y),
        (u *= e.x),
        (d *= e.y),
        (c += a),
        (l += o),
        (n = X(i)),
        (i = Qn(n));
    }
  }
  return xn({ width: u, height: d, x: c, y: l });
}
function or(e, t) {
  let n = Jn(e).scrollLeft;
  return t ? t.left + n : ar(Z(e)).left + n;
}
function sr(e, t) {
  let n = e.getBoundingClientRect();
  return { x: n.left + t.scrollLeft - or(e, n), y: n.top + t.scrollTop };
}
function cr(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: i } = e,
    a = i === `fixed`,
    o = Z(r),
    s = t ? zn(t.floating) : !1;
  if (r === o || (s && a)) return n;
  let c = { scrollLeft: 0, scrollTop: 0 },
    l = Y(1),
    u = Y(0),
    d = Fn(r);
  if ((d || !a) && ((Nn(r) !== `body` || Ln(o)) && (c = Jn(r)), d)) {
    let e = ar(r);
    (l = tr(r)), (u.x = e.x + r.clientLeft), (u.y = e.y + r.clientTop);
  }
  let f = o && !d && !a ? sr(o, c) : Y(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y + f.y,
  };
}
function lr(e) {
  return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function ur(e) {
  let t = Jn(e),
    n = e.ownerDocument.body,
    r = Xt(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth),
    i = Xt(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight),
    a = -t.scrollLeft + or(e),
    o = -t.scrollTop;
  return (
    $(n).direction === `rtl` && (a += Xt(e.clientWidth, n.clientWidth) - r),
    { width: r, height: i, x: a, y: o }
  );
}
var dr = 25;
function fr(e, t, n) {
  n === void 0 && (n = `viewport`);
  let r = n === `layoutViewport`,
    i = X(e),
    a = Z(e),
    o = i.visualViewport,
    s = a.clientWidth,
    c = a.clientHeight,
    l = 0,
    u = 0;
  if (o) {
    let e = !Kn() || t === `fixed`;
    r
      ? e || ((l = -o.offsetLeft), (u = -o.offsetTop))
      : ((s = o.width),
        (c = o.height),
        e && ((l = o.offsetLeft), (u = o.offsetTop)));
  }
  if (or(a) <= 0) {
    let e = a.ownerDocument,
      t = e.body,
      n = getComputedStyle(t),
      r =
        (e.compatMode === `CSS1Compat` &&
          parseFloat(n.marginLeft) + parseFloat(n.marginRight)) ||
        0,
      i = Math.abs(a.clientWidth - t.clientWidth - r),
      o =
        getComputedStyle(a).scrollbarGutter === `stable both-edges` ? i / 2 : i;
    o <= dr && (s -= o);
  }
  return { width: s, height: c, x: l, y: u };
}
function pr(e, t) {
  let n = ar(e, !0, t === `fixed`),
    r = n.top + e.clientTop,
    i = n.left + e.clientLeft,
    a = tr(e);
  return {
    width: e.clientWidth * a.x,
    height: e.clientHeight * a.y,
    x: i * a.x,
    y: r * a.y,
  };
}
function mr(e, t, n) {
  let r;
  if (t === `viewport` || t === `layoutViewport`) r = fr(e, n, t);
  else if (t === `document`) r = ur(Z(e));
  else if (Q(t)) r = pr(t, n);
  else {
    let n = rr(e);
    r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
  }
  return xn(r);
}
function hr(e, t) {
  let n = t.get(e);
  if (n) return n;
  let r = Zn(e, [], !1).filter((e) => Q(e) && Nn(e) !== `body`),
    i = null,
    a = $(e).position === `fixed`,
    o = a ? Yn(e) : e;
  for (; Q(o) && !qn(o); ) {
    let e = $(o),
      t = Wn(o),
      n = i ? i.position : a ? `fixed` : ``;
    !t && (n === `fixed` || (n === `absolute` && e.position === `static`))
      ? (r = r.filter((e) => e !== o))
      : (i = e),
      (o = Yn(o));
  }
  return t.set(e, r), r;
}
function gr(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: i } = e,
    a = [
      ...(n === `clippingAncestors`
        ? zn(t)
          ? []
          : hr(t, this._c)
        : [].concat(n)),
      r,
    ],
    o = mr(t, a[0], i),
    s = o.top,
    c = o.right,
    l = o.bottom,
    u = o.left;
  for (let e = 1; e < a.length; e++) {
    let n = mr(t, a[e], i);
    (s = Xt(n.top, s)),
      (c = Yt(n.right, c)),
      (l = Yt(n.bottom, l)),
      (u = Xt(n.left, u));
  }
  return { width: c - u, height: l - s, x: u, y: s };
}
function _r(e) {
  let { width: t, height: n } = $n(e);
  return { width: t, height: n };
}
function vr(e, t, n) {
  let r = Fn(t),
    i = Z(t),
    a = n === `fixed`,
    o = ar(e, !0, a, t),
    s = { scrollLeft: 0, scrollTop: 0 },
    c = Y(0);
  if ((r || !a) && ((Nn(t) !== `body` || Ln(i)) && (s = Jn(t)), r)) {
    let e = ar(t, !0, a, t);
    (c.x = e.x + t.clientLeft), (c.y = e.y + t.clientTop);
  }
  !r && i && (c.x = or(i));
  let l = i && !r && !a ? sr(i, s) : Y(0);
  return {
    x: o.left + s.scrollLeft - c.x - l.x,
    y: o.top + s.scrollTop - c.y - l.y,
    width: o.width,
    height: o.height,
  };
}
function yr(e) {
  return $(e).position === `static`;
}
function br(e, t) {
  if (!Fn(e) || $(e).position === `fixed`) return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return Z(e) === n && (n = n.ownerDocument.body), n;
}
function xr(e, t) {
  let n = X(e);
  if (zn(e)) return n;
  if (!Fn(e)) {
    let t = Yn(e);
    for (; t && !qn(t); ) {
      if (Q(t) && !yr(t)) return t;
      t = Yn(t);
    }
    return n;
  }
  let r = br(e, t);
  for (; r && Rn(r) && yr(r); ) r = br(r, t);
  return r && qn(r) && yr(r) && !Wn(r) ? n : r || Gn(e) || n;
}
var Sr = async function (e) {
  let t = this.getOffsetParent || xr,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: vr(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function Cr(e) {
  return $(e).direction === `rtl`;
}
var wr = {
  convertOffsetParentRelativeRectToViewportRelativeRect: cr,
  getDocumentElement: Z,
  getClippingRect: gr,
  getOffsetParent: xr,
  getElementRects: Sr,
  getClientRects: lr,
  getDimensions: _r,
  getScale: tr,
  isElement: Q,
  isRTL: Cr,
};
function Tr(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function Er(e, t, n) {
  let r = null,
    i,
    a = Z(e);
  function o() {
    var e;
    clearTimeout(i), (e = r) == null || e.disconnect(), (r = null);
  }
  function s(n, c) {
    n === void 0 && (n = !1), c === void 0 && (c = 1), o();
    let l = e.getBoundingClientRect(),
      { left: u, top: d, width: f, height: p } = l;
    if ((n || t(), !f || !p)) return;
    let m = Qt(d),
      h = Qt(a.clientWidth - (u + f)),
      g = Qt(a.clientHeight - (d + p)),
      _ = Qt(u),
      v = {
        rootMargin: -m + `px ` + -h + `px ` + -g + `px ` + -_ + `px`,
        threshold: Xt(0, Yt(1, c)) || 1,
      },
      y = !0;
    function b(t) {
      let n = t[0].intersectionRatio;
      if (!Tr(l, e.getBoundingClientRect())) return s();
      if (n !== c) {
        if (!y) return s();
        n
          ? s(!1, n)
          : (i = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      y = !1;
    }
    try {
      r = new IntersectionObserver(b, { ...v, root: a.ownerDocument });
    } catch {
      r = new IntersectionObserver(b, v);
    }
    r.observe(e);
  }
  let c = X(e),
    l = () => s(n);
  return (
    c.addEventListener(`resize`, l),
    s(!0),
    () => {
      c.removeEventListener(`resize`, l), o();
    }
  );
}
function Dr(e, t, n, r) {
  r === void 0 && (r = {});
  let {
      ancestorScroll: i = !0,
      ancestorResize: a = !0,
      elementResize: o = typeof ResizeObserver == `function`,
      layoutShift: s = typeof IntersectionObserver == `function`,
      animationFrame: c = !1,
    } = r,
    l = er(e),
    u = i || a ? [...(l ? Zn(l) : []), ...(t ? Zn(t) : [])] : [];
  u.forEach((e) => {
    i && e.addEventListener(`scroll`, n), a && e.addEventListener(`resize`, n);
  });
  let d = l && s ? Er(l, n, a) : null,
    f = -1,
    p = null;
  o &&
    ((p = new ResizeObserver((e) => {
      let [r] = e;
      r &&
        r.target === l &&
        p &&
        t &&
        (p.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var e;
          (e = p) == null || e.observe(t);
        }))),
        n();
    })),
    l && !c && p.observe(l),
    t && p.observe(t));
  let m,
    h = c ? ar(e) : null;
  c && g();
  function g() {
    let t = ar(e);
    h && !Tr(h, t) && n(), (h = t), (m = requestAnimationFrame(g));
  }
  return (
    n(),
    () => {
      var e;
      u.forEach((e) => {
        i && e.removeEventListener(`scroll`, n),
          a && e.removeEventListener(`resize`, n);
      }),
        d?.(),
        (e = p) == null || e.disconnect(),
        (p = null),
        c && cancelAnimationFrame(m);
    }
  );
}
var Or = An,
  kr = jn,
  Ar = Dn,
  jr = En,
  Mr = (e, t, n) => {
    let r = new Map(),
      i = n ?? {},
      a = { ...wr, ...i.platform, _c: r };
    return Tn(e, t, { ...i, platform: a });
  };
function Nr({
  text: e,
  imageSrc: t,
  imageAspectRatio: n = `1 / 1`,
  state: r,
  onclose: i,
  maxWidth: a = t ? 150 : 300,
  zIndex: o,
  showDelay: s = 0,
  mobile: c = !0,
}) {
  return (l) => {
    let u,
      d,
      f,
      p,
      m,
      h = !1,
      g,
      _ = null,
      v = null,
      y = !1,
      b = !!r,
      x = t ? 0.85 : 0,
      S = t ? 250 : 150;
    function C() {
      (u = document.createElement(`div`)),
        b || u.setAttribute(`popover`, `manual`),
        u.setAttribute(`role`, `tooltip`),
        (u.className = t ? `tooltip tooltip-with-image` : `tooltip`),
        b && (u.style.position = `absolute`),
        (d = document.createElement(`div`)),
        (d.className = `tooltip-arrow`),
        u.appendChild(d),
        b && t && T(),
        t && w(),
        (f = document.createElement(`p`)),
        (f.textContent = e),
        (f.className = `tooltip-text`),
        u.appendChild(f),
        Object.assign(u.style, {
          transform: `scale(${x})`,
          opacity: `0%`,
          filter: `blur(var(--elevated-blur))`,
          transition: `transform ${S}ms ease, opacity ${S}ms ease, filter ${S}ms ease`,
          maxWidth: `${a}px`,
        }),
        o !== void 0 && (u.style.zIndex = o),
        document.body.appendChild(u);
    }
    function w() {
      (p = document.createElement(`img`)),
        (p.src = t),
        (p.alt = `Info graphic`),
        (p.className = `tooltip-image`),
        (p.style.aspectRatio = n),
        u.appendChild(p);
    }
    function T() {
      (m = document.createElement(`button`)),
        (m.className = `tooltip-close`),
        m.setAttribute(`aria-label`, `Close`),
        (m.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`),
        m.addEventListener(`click`, () => {
          r.visible = !1;
          try {
            i?.();
          } catch (e) {
            console.error(`Error occured in tooltip close callback:`, e);
          }
        }),
        u.appendChild(m);
    }
    async function E() {
      let e = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          `--box-margin`
        )
      );
      return Mr(l, u, {
        placement: `top`,
        middleware: [
          Or(18),
          Ar(),
          kr({ padding: e }),
          jr({ element: d, padding: 4 }),
        ],
      }).then(({ x: e, y: t, placement: n, middlewareData: r }) => {
        Object.assign(u.style, { left: `${e}px`, top: `${t}px` });
        let { x: i, y: a } = r.arrow,
          o = n.split(`-`)[0];
        Object.assign(d.style, { left: ``, top: ``, right: ``, bottom: `` }),
          o === `top`
            ? Object.assign(d.style, { left: `${i}px`, bottom: `-6px` })
            : o === `bottom`
            ? Object.assign(d.style, { left: `${i}px`, top: `-6px` })
            : o === `left`
            ? Object.assign(d.style, { top: `${a}px`, right: `-6px` })
            : o === `right` &&
              Object.assign(d.style, { top: `${a}px`, left: `-6px` }),
          d.setAttribute(`data-placement`, o);
      });
    }
    function D() {
      h ||
        _ ||
        (s > 0
          ? (_ = setTimeout(() => {
              (_ = null), O();
            }, s))
          : O());
    }
    function O() {
      (c || !window.matchMedia(`(max-width: 800px)`).matches) &&
        (u || C(),
        (h = !0),
        b ? (u.style.display = ``) : u.showPopover(),
        E().then(() => {
          requestAnimationFrame(() => {
            Object.assign(u.style, {
              transform: `scale(1)`,
              opacity: `100%`,
              filter: `blur(0)`,
            });
          });
        }),
        (g = Dr(l, u, E)));
    }
    function k() {
      (_ &&= (clearTimeout(_), null)),
        u &&
          h &&
          ((h = !1),
          Object.assign(u.style, {
            transform: `scale(${x})`,
            opacity: `0%`,
            filter: `blur(var(--elevated-blur))`,
          }),
          g?.(),
          (g = null),
          setTimeout(() => {
            !h && u && (b ? (u.style.display = `none`) : u.hidePopover());
          }, S));
    }
    function A(e) {
      e.pointerType != `touch` && D();
    }
    function j(e) {
      e.pointerType != `touch` && k();
    }
    function M(e) {
      if (((y = !1), e.pointerType != `touch` || !e.isPrimary)) return;
      let t = () => {
        (y = !1), k();
      };
      clearTimeout(v),
        (v = setTimeout(() => {
          h || O(),
            h &&
              ((y = !0),
              document.addEventListener(`pointerdown`, t, {
                capture: !0,
                once: !0,
              }));
        }, 500));
    }
    function N() {
      clearTimeout(v), (v = null);
    }
    function P(e) {
      if ((N(), !y)) return k();
      (y = !1), e.preventDefault(), e.stopImmediatePropagation();
    }
    return (
      b
        ? ae(() => {
            r.visible ? D() : k();
          })
        : (l.addEventListener(`pointerenter`, A),
          l.addEventListener(`pointerleave`, j),
          l.addEventListener(`pointerdown`, M),
          l.addEventListener(`pointerup`, N),
          l.addEventListener(`pointercancel`, N),
          l.addEventListener(`click`, P, !0)),
      () => {
        b ||
          (l.removeEventListener(`pointerenter`, A),
          l.removeEventListener(`pointerleave`, j),
          l.removeEventListener(`pointerdown`, M),
          l.removeEventListener(`pointerup`, N),
          l.removeEventListener(`pointercancel`, N),
          l.removeEventListener(`click`, P, !0)),
          v && clearTimeout(v),
          _ && clearTimeout(_),
          g?.(),
          u?.remove();
      }
    );
  };
}
var Pr = b(`<span class="dash svelte-1hze8g7">-</span>`),
  Fr = b(`<input type="text" class="segment-input svelte-1hze8g7"/> <!>`, 1),
  Ir = b(
    `<button class="standard-button bright join-submit-button svelte-1hze8g7" aria-label="Join room"><!></button>`
  ),
  Lr = b(`<div><!> <!></div>`);
function Rr(e, n) {
  y(n, !0);
  let o = F(n, `segments`, 31, () => i([``, ``, ``, ``, ``, ``])),
    c = F(n, `inPage`, 3, !0),
    u = i([]),
    d = t(() => o().join(``));
  function f(e, t) {
    let n = t.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ``);
    o((o()[e] = n.slice(-1)), !0), n && e < 5 && u[e + 1]?.focus();
  }
  function p(e, t) {
    t.key === `Backspace` && !o()[e] && e > 0 && u[e - 1]?.focus(),
      t.key === `Enter` && H(d).length === 6 && n.onsubmit?.(H(d));
  }
  function m(e) {
    e.preventDefault();
    let t = e.clipboardData
      .getData(`text`)
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, ``);
    if (t.length <= 6) for (let e = 0; e < 6; e++) o((o()[e] = t[e] || ``), !0);
  }
  var h = Lr();
  let b;
  var x = W(h);
  k(x, 17, o, l, (e, t, n) => {
    let i = [`A`, `B`, `C`, `1`, `2`, `3`];
    var l = Fr(),
      d = ne(l);
    s(d),
      a(d, `maxlength`, 1),
      te(
        d,
        (e, t) => (u[t] = e),
        (e) => u?.[e],
        () => [n]
      );
    var m = C(d, 2),
      h = (e) => {
        var t = Pr();
        j(e, t);
      };
    z(m, (e) => {
      n === 2 && c() && e(h);
    }),
      I(() => a(d, `placeholder`, i[n])),
      B(`input`, d, (e) => f(n, e)),
      B(`keydown`, d, (e) => p(n, e)),
      r(
        d,
        () => o()[n],
        (e) => o((o()[n] = e), !0)
      ),
      j(e, l);
  });
  var S = C(x, 2),
    w = (e) => {
      var t = Ir();
      Ae(W(t), { size: 18, strokeWidth: 2.25 }),
        O(t),
        v(t, () => Nr({ text: `Join` })),
        I(() => (t.disabled = H(d).length !== 6)),
        B(`click`, t, () => n.onsubmit?.(H(d))),
        j(e, t);
    };
  z(S, (e) => {
    c() || e(w);
  }),
    O(h),
    I(
      () =>
        (b = g(h, 1, `segmented-input-box svelte-1hze8g7`, null, b, {
          "segmented-input-box-compact": !c(),
        }))
    ),
    oe(`paste`, h, m),
    j(e, h),
    _();
}
L([`input`, `keydown`, `click`]);
var zr = b(`<button><!> <!></button>`),
  Br = b(`<div></div>`);
function Vr(e, t) {
  y(t, !0);
  let n = F(t, `tabs`, 19, () => []),
    r = F(t, `selectedIndex`, 15, 0),
    a = F(t, `selected`, 31, () => i(n()[r()])),
    o = F(t, `disabled`, 3, !1),
    s = F(t, `class`, 3, ``);
  function c(e) {
    a(e), r(n().findIndex((t) => t === e)), t.onchange?.(a(), r());
  }
  var u = Br();
  let f;
  k(u, 21, n, l, (e, n) => {
    var r = zr(),
      i = W(r),
      s = (e) => {
        var t = N(),
          r = ne(t);
        D(
          r,
          () => H(n),
          (e, t) => {
            t(e, {
              size: 20,
              strokeWidth: 2.25,
              style: `margin-bottom: -2px;`,
            });
          }
        ),
          j(e, t);
      },
      l = (e) => {
        var t = ie();
        I(() => p(t, H(n))), j(e, t);
      };
    z(i, (e) => {
      typeof H(n) == `function` ? e(s) : e(l, -1);
    });
    var u = C(i, 2);
    d(
      u,
      () => t.children ?? A,
      () => H(n)
    ),
      O(r),
      I(() => {
        g(
          r,
          1,
          `tab-button standard-button ${a() === H(n) ? `active` : ``}`,
          `svelte-c5kzwx`
        ),
          (r.disabled = o());
      }),
      B(`click`, r, () => c(H(n))),
      j(e, r);
  }),
    O(u),
    I(
      () =>
        (f = g(
          u,
          1,
          `tabs-group standard-button ${s() ?? ``}`,
          `svelte-c5kzwx`,
          f,
          { disabled: o() }
        ))
    ),
    j(e, u),
    _();
}
L([`click`]);
var Hr = b(`<p class="ticker-note svelte-yfsksb"> </p>`),
  Ur = b(
    `<div class="ticker bright-soft svelte-yfsksb"><button class="standard-button bright"><!></button> <p class="ticker-text bright-soft svelte-yfsksb"> </p> <!> <button class="standard-button bright"><!></button></div>`
  );
function Wr(e, n) {
  y(n, !0);
  let r = F(n, `step`, 3, 1),
    a = F(n, `minimum`, 3, 1),
    s = F(n, `maximum`, 3, 5),
    c = F(n, `initialValue`, 3, 1),
    l = F(n, `value`, 15),
    u = F(n, `minValueWidth`, 3, `35px`),
    d = o(i(c()));
  ae(() => {
    if (H(d) === a() && n.minimumValue != null) return l(n.minimumValue);
    if (H(d) === s() && n.maximumValue != null) return l(n.maximumValue);
    l(H(d));
  });
  let f = t(() =>
    H(d) === a() && n.minimumText != null
      ? n.minimumText
      : H(d) === s() && n.maximumText != null
      ? n.maximumText
      : H(d)
  );
  var h = Ur(),
    g = W(h);
  He(W(g), { size: 18, strokeWidth: 2.5 }), O(g);
  var v = C(g, 2);
  let b;
  var x = U(v, !0),
    S = C(v, 2),
    w = (e) => {
      var t = Hr(),
        r = U(t, !0);
      I(() => p(r, n.note)), j(e, t);
    };
  z(S, (e) => {
    n.note && e(w);
  });
  var E = C(S, 2);
  Ge(W(E), { size: 18, strokeWidth: 2.5 }),
    O(E),
    O(h),
    I(() => {
      (g.disabled = H(d) === a()),
        (b = m(v, ``, b, { "min-width": u() })),
        p(x, H(f) ?? `...`),
        (E.disabled = H(d) === s());
    }),
    B(`click`, g, () => {
      T(d, H(d) - r()), H(d) < a() && T(d, a()), n.onchange?.(H(d));
    }),
    B(`click`, E, () => {
      T(d, H(d) + r()), H(d) > s() && T(d, s()), n.onchange?.(H(d));
    }),
    j(e, h),
    _();
}
L([`click`]);
var Gr = b(
  `<div><p class="svelte-1k0sk4o"> </p> <div class="line svelte-1k0sk4o"></div></div>`
);
function Kr(e, t) {
  let r = F(t, `noMargin`, 3, !1);
  var i = Gr();
  let a;
  var o = W(i),
    s = U(o, !0);
  n(2),
    O(i),
    I(() => {
      (a = g(i, 1, `flex-container ${t.class ?? ``}`, `svelte-1k0sk4o`, a, {
        "no-margin": r(),
      })),
        p(s, t.text);
    }),
    j(e, i);
}
L([`click`]);
var qr = {
  basic_button: new URL(`../assets/basic_button.DqlsrCFq.ogg`, import.meta.url)
    .href,
  juicy_button: new URL(`../assets/juicy_button.Dvlm0zv0.ogg`, import.meta.url)
    .href,
  start_button: new URL(`../assets/start_button.-3f9KeYm.ogg`, import.meta.url)
    .href,
  toggle_button: new URL(
    `../assets/toggle_button.DarC-Gda.ogg`,
    import.meta.url
  ).href,
  change_value: new URL(`../assets/change_value.CTVgRF5s.ogg`, import.meta.url)
    .href,
  item_select: new URL(`../assets/item_select.DYjwhzwy.ogg`, import.meta.url)
    .href,
  item_locked: new URL(`../assets/item_locked.Cd0P0t4M.ogg`, import.meta.url)
    .href,
};
export {
  Ze as A,
  vt as C,
  at as D,
  it as E,
  G as F,
  ve as I,
  ge as L,
  ze as M,
  Ne as N,
  st as O,
  Ae as P,
  pe as R,
  ht as S,
  rt as T,
  Ot as _,
  Rr as a,
  St as b,
  Mr as c,
  kr as d,
  Jt as f,
  Mt as g,
  It as h,
  Vr as i,
  Ge as j,
  ot as k,
  Ar as l,
  zt as m,
  Kr as n,
  Nr as o,
  Vt as p,
  Wr as r,
  Dr as s,
  qr as t,
  Or as u,
  Et as v,
  ut as w,
  _t as x,
  Ct as y,
  fe as z,
};
