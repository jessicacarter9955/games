import {
  B as e,
  D as t,
  Dt as n,
  J as r,
  M as i,
  N as a,
  Nt as o,
  Pt as s,
  Q as c,
  R as l,
  St as u,
  Tt as d,
  Vt as f,
  X as p,
  _t as m,
  a as h,
  b as ee,
  bt as g,
  g as te,
  it as _,
  l as ne,
  m as v,
  mt as y,
  nt as b,
  q as x,
  rt as S,
  st as C,
  u as re,
  xt as w,
  yt as T,
  z as E,
} from "./hxBKRHPW.js";
import "./NtBOrSfa.js";
import "./xihTtKlq.js";
import {
  B as D,
  R as O,
  Xr as k,
  a as A,
  c as j,
  ci as M,
  d as N,
  i as P,
  l as F,
  nn as ie,
  o as I,
  oi as L,
  pi as R,
  s as z,
  u as B,
  ui as ae,
} from "./aEOu6wZT.js";
import { N as oe, S as V, _ as H, k as U, p as W, y as G } from "./DbFYFRnT.js";
import { n as K } from "./D59G5ZZe.js";
import { n as q } from "./CZXYIZ8O.js";
function J(e) {
  return Object.prototype.toString.call(e) === `[object Date]`;
}
function Y(e, t) {
  if (e === t || e !== e) return () => e;
  let n = typeof e;
  if (n !== typeof t || Array.isArray(e) !== Array.isArray(t))
    throw Error(`Cannot interpolate values of different type`);
  if (Array.isArray(e)) {
    let n = t.map((t, n) => Y(e[n], t));
    return (e) => n.map((t) => t(e));
  }
  if (n === `object`) {
    if (!e || !t) throw Error(`Object cannot be null`);
    if (J(e) && J(t)) {
      let n = e.getTime(),
        r = t.getTime() - n;
      return (e) => new Date(n + e * r);
    }
    let n = Object.keys(t),
      r = {};
    return (
      n.forEach((n) => {
        r[n] = Y(e[n], t[n]);
      }),
      (e) => {
        let t = {};
        return (
          n.forEach((n) => {
            t[n] = r[n](e);
          }),
          t
        );
      }
    );
  }
  if (n === `number`) {
    let n = t - e;
    return (t) => e + t * n;
  }
  return () => t;
}
function se(t, n = {}) {
  let r = te(t),
    i,
    a = t;
  function o(o, s) {
    if (((a = o), t == null)) return r.set((t = o)), Promise.resolve();
    let c = i,
      l = !1,
      {
        delay: u = 0,
        duration: d = 400,
        easing: f = V,
        interpolate: p = Y,
      } = { ...n, ...s };
    if (d === 0)
      return (c &&= (c.abort(), null)), r.set((t = a)), Promise.resolve();
    let m = e.now() + u,
      h;
    return (
      (i = E((e) => {
        if (e < m) return !0;
        (l ||= ((h = p(t, o)), typeof d == `function` && (d = d(t, o)), !0)),
          (c &&= (c.abort(), null));
        let n = e - m;
        return n > d ? (r.set((t = o)), !1) : (r.set((t = h(f(n / d)))), !0);
      })),
      i.promise
    );
  }
  return { set: o, update: (e, n) => o(e(a, t), n), subscribe: r.subscribe };
}
function X(e = `pin`, t, n, r) {
  let i = () => {
    t > v(R)
      ? W(`Not enough tokens!`)
      : G(
          `Purchase?`,
          `Do you want to purchase this item for ${t?.toLocaleString()} tokens?`,
          () => fe(e, t, n, r)
        );
  };
  if (v(L)) i();
  else return O(i);
}
async function ce() {
  if (v(k)) {
    let e = await D();
    if (!e.granted) return e.error ? W(e.error) : W(`Ad dismissed.`);
  }
  try {
    let e = await fetch(v(K) + `/shop/claim-free-tokens`, {
      method: `POST`,
      headers: {
        "Content-Type": `application/json`,
        Authorization: `Bearer ${localStorage.getItem(`bearer`)}`,
      },
      body: JSON.stringify({ id: localStorage.getItem(`id`) }),
    });
    if (!e.ok) throw Error(e.status);
    let t = await e.json();
    R.set(v(R) + t.count),
      P.set(!0),
      A.set([`/img/token_stack_free_icon.png`]),
      z.set(`Cool!`),
      I.set(!0);
  } catch (e) {
    console.error(`Error claiming tokens:`, e),
      H(`Error claiming tokens`, `An error occurred claiming tokens.`, e);
  }
}
async function le() {
  try {
    let e = await fetch(v(K) + `/shop/claim-youtube-pin`, {
      method: `POST`,
      headers: {
        "Content-Type": `application/json`,
        Authorization: `Bearer ${localStorage.getItem(`bearer`)}`,
      },
      body: JSON.stringify({ id: localStorage.getItem(`id`) }),
    });
    if (!e.ok) throw Error(e.status);
    let t = await e.json();
    M.set([...v(M), t.pinId]), Q([t.pinId], `Thank you!`);
  } catch (e) {
    console.error(`Error claiming pin:`, e),
      H(`Error claiming pin`, `An error occurred claiming a pin.`, e);
  }
}
function ue(e) {
  return Z(`token_tier_` + e);
}
function de(e) {
  return Z(`supporter_tier_` + e);
}
async function Z(e) {
  try {
    let t = localStorage.getItem(`id`),
      n = await fetch(v(K) + `/stripe/create-checkout-session`, {
        method: `POST`,
        headers: {
          "Content-Type": `application/json`,
          Authorization: `Bearer ` + localStorage.getItem(`bearer`),
        },
        body: JSON.stringify({ productId: e, id: t }),
      });
    if (n.ok) {
      let { checkoutUrl: e } = await n.json();
      window.location = e;
    } else throw Error(n.status);
  } catch (e) {
    console.error(`Error occurred during checkout:`, e),
      H(
        `Checkout error`,
        `An error occurred trying to create a checkout session.`,
        e
      );
  }
}
async function fe(e, t, n, r) {
  if (e == `pin`) {
    if (!n) return console.error(`No pinId provided!`);
    try {
      let e = await fetch(v(K) + `/shop/purchase-pin`, {
        method: `POST`,
        headers: {
          "Content-Type": `application/json`,
          Authorization: `Bearer ${localStorage.getItem(`bearer`)}`,
        },
        body: JSON.stringify({ id: localStorage.getItem(`id`), pinId: n }),
      });
      if (!e.ok) {
        let t = e.status;
        try {
          let n = await e.json();
          n.error && (t = n.error);
        } catch {}
        throw Error(t);
      }
      R.set(v(R) - t), M.set([...v(M), n]), Q([n]), $();
    } catch (e) {
      console.error(`Error purchasing pin:`, e),
        H(`Error purchasing pin`, `An error occurred purchasing a pin.`, e);
    }
  } else if (e == `bundle`)
    try {
      let e = await fetch(v(K) + `/shop/purchase-bundle`, {
        method: `POST`,
        headers: {
          "Content-Type": `application/json`,
          Authorization: `Bearer ${localStorage.getItem(`bearer`)}`,
        },
        body: JSON.stringify({
          id: localStorage.getItem(`id`),
          bundleItems: r,
        }),
      });
      if (!e.ok) {
        let t = e.status;
        try {
          let n = await e.json();
          n.error && (t = n.error);
        } catch {}
        throw Error(t);
      }
      let n = await e.json();
      R.set(v(R) - t),
        M.set([...v(M), ...(n.pinsAdded || [])]),
        Q(n.pinsAdded),
        $();
    } catch (e) {
      console.error(`Error purchasing bundle:`, e),
        H(
          `Error purchasing bundle`,
          `An error occurred purchasing a bundle.`,
          e
        );
    }
}
function Q(e, t = `Great choice!`) {
  let n = [];
  e?.forEach((e) => {
    n.push(`/img/pins/player_pin${e}.png`);
  }),
    A.set(n),
    z.set(t),
    I.set(!0);
}
async function $() {
  j.set(`Loading...`);
  try {
    let e = await fetch(
      v(K) +
        `/shop/bundle${v(L) ? `?user-id=` + localStorage.getItem(`id`) : ``}`,
      { method: `GET`, headers: { "Content-Type": `application/json` } }
    );
    if (e.ok) {
      let t = await e.json();
      F.set(t.pins), N.set(t.rarity), B.set(t.price);
    } else throw Error(e.status);
  } catch (e) {
    console.error(`Error loading special offer:`, e),
      j.set(`Error: ` + e.message);
  }
}
var pe = c(
    `<div id="pin-lock-0" class="pin-lock svelte-jdv9yt"><p class="pin-lock-text svelte-jdv9yt"> </p></div>`
  ),
  me = c(`<div><p class="svelte-jdv9yt"> </p></div>`),
  he = c(
    `<img class="token-icon svelte-jdv9yt" alt="token" src="/img/token_icon_white.png"/> `,
    1
  ),
  ge = c(`Owned <!>`, 1),
  _e = c(
    `<div class="shop-button-box svelte-jdv9yt"><button class="standard-button bright center-button svelte-jdv9yt"><!></button></div>`
  ),
  ve = c(
    `<div role="button"><!> <!> <div class="pin-flex svelte-jdv9yt"><img alt="pin icon"/> <!></div></div>`
  );
function ye(e, c) {
  s(c, !0);
  let te = () => re(ae, `$selectedPinIndex`, v),
    [v, b] = ne(),
    E = h(c, `pinLockText`, 3, `Default`),
    D = h(c, `unlocked`, 3, !1),
    O = h(c, `shop`, 3, !1),
    k = h(c, `price`, 3, 100),
    A = h(c, `disabled`, 3, !1),
    j = n(!1),
    M = n(void 0);
  var N = ve();
  _(`pointerdown`, m, (e) => {
    C(M).contains(e.target) || d(j, !1);
  });
  let P;
  t(N, `tabindex`, 0);
  let F;
  var I = T(N),
    L = (e) => {
      var t = pe(),
        n = T(t),
        i = w(n, !0);
      f(t), y(() => r(i, E())), p(e, t);
    };
  x(I, (e) => {
    !D() && !O() && e(L);
  });
  var R = u(I, 2),
    z = (e) => {
      var t = me();
      let n;
      var i = T(t),
        o = w(i, !0);
      f(t),
        y(
          (e) => {
            (n = a(t, 1, `rarity-display svelte-jdv9yt`, null, n, {
              "common-color": c.rarity == `common`,
              "rare-color": c.rarity == `rare`,
              "epic-color": c.rarity == `epic`,
              "legendary-color": c.rarity == `legendary`,
            })),
              r(o, e);
          },
          [() => c.rarity?.[0]?.toUpperCase() + c.rarity.slice(1)]
        ),
        l(
          3,
          t,
          () => U,
          () => ({ duration: 250 })
        ),
        p(e, t);
    };
  x(R, (e) => {
    c.rarity && !C(j) && e(z);
  });
  var B = u(R, 2),
    V = T(B);
  let H;
  var W = u(V, 2),
    G = (e) => {
      var t = _e(),
        n = T(t),
        i = T(n),
        a = (e) => {
          var t = he(),
            n = u(g(t));
          y((e) => r(n, ` ${e ?? ``}`), [() => k()?.toLocaleString()]), p(e, t);
        },
        o = (e) => {
          var t = ge(),
            n = u(g(t));
          oe(n, {
            size: 18,
            strokeWidth: 3.25,
            style: `min-width: 18px; margin-bottom: -3px; margin-left: var(--content-margin);`,
          }),
            p(e, t);
        };
      x(i, (e) => {
        D() ? e(o, -1) : e(a);
      }),
        f(n),
        f(t),
        y(() => (n.disabled = D())),
        S(`click`, n, () => {
          q(`basic_button`), X(`pin`, k(), c.pinId);
        }),
        l(
          3,
          t,
          () => U,
          () => ({ axis: `y`, duration: 250 })
        ),
        p(e, t);
    };
  x(W, (e) => {
    O() && C(j) && e(G);
  }),
    f(B),
    f(N),
    ee(
      N,
      (e) => d(M, e),
      () => C(M)
    ),
    y(() => {
      (P = a(N, 1, `pin-holder bright-soft svelte-jdv9yt`, null, P, {
        "shop-size": O(),
        "selected-pin": te() == c.pinId && !O(),
        disabled: A(),
      })),
        (F = i(N, ``, F, {
          scale: O() ? `1` : ``,
          "border-radius": O() ? `var(--box-margin)` : ``,
        })),
        (H = a(V, 1, `pin-select-icon svelte-jdv9yt`, null, H, {
          "small-select-icon": O() && C(j),
        })),
        t(V, `src`, `/img/pins/player_pin` + c.pinId + `.png`);
    }),
    _(`pointerenter`, N, (e) => {
      e.pointerType !== `touch` && d(j, !0);
    }),
    _(`pointerleave`, N, (e) => {
      e.pointerType !== `touch` && d(j, !1);
    }),
    S(`click`, N, () => {
      if (O()) return d(j, !0);
      D() ? (q(`item_select`), ie(c.pinId)) : q(`item_locked`);
    }),
    p(e, N),
    o(),
    b();
}
b([`click`]);
export { le as a, se as c, X as i, $ as n, de as o, ce as r, ue as s, ye as t };
