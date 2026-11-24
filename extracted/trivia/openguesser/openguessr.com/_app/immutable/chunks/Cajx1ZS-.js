import "./xihTtKlq.js";
import {
  D as e,
  H as t,
  I as n,
  J as r,
  N as i,
  Nt as a,
  Pt as o,
  Q as s,
  St as c,
  T as l,
  Vt as u,
  Wt as d,
  X as f,
  Z as p,
  a as m,
  bt as h,
  mt as g,
  q as _,
  w as v,
  xt as y,
  yt as b,
} from "./hxBKRHPW.js";
import { t as x } from "./DaFrAiHN.js";
import { t as S } from "./C8bwKZxC.js";
var C = s(
    `<div class="image-container svelte-153l2ol"><div class="play-map-cover svelte-153l2ol"><!></div> <img class="map-cover-image svelte-153l2ol" alt="map cover"/></div>`
  ),
  w = s(`<div class="map-cover-placeholder svelte-153l2ol"><!></div>`),
  T = s(`<p class="map-author svelte-153l2ol"> </p>`),
  E = s(
    `<!> <div><p class="map-name svelte-153l2ol"> </p> <!> <!></div> <!>`,
    1
  );
function D(s, D) {
  o(D, !0);
  let O = m(D, `imgUrl`, 3, null),
    k = m(D, `author`, 3, null),
    A = m(D, `selected`, 3, !1),
    j = m(D, `compact`, 3, !1),
    M = m(D, `slim`, 3, !1),
    N = m(D, `animate`, 3, !1),
    P = m(D, `loadMore`, 3, !1),
    F = m(D, `link`, 3, !1),
    I = m(D, `disabled`, 3, !1);
  var L = p(),
    R = h(L);
  n(
    R,
    () => (D.href ? `a` : `div`),
    !1,
    (n, a) => {
      var o = (e) => {
        D.href && e.preventDefault(), D.onclick?.(e);
      };
      l(
        n,
        () => ({
          href: D.href,
          class: `map-item standard-button bright-soft`,
          id: D.id,
          role: D.href ? `` : `button`,
          tabindex: D.href ? void 0 : 0,
          onclick: o,
          [v]: {
            "map-item-slim": M(),
            "map-item-animate": N(),
            "map-item-compact": j(),
            "map-item-load-more": P(),
            "selected-map-item": A(),
            disabled: I(),
          },
        }),
        void 0,
        void 0,
        void 0,
        `svelte-153l2ol`
      );
      var s = E(),
        p = h(s),
        m = (t) => {
          var n = C(),
            r = b(n),
            i = b(r),
            a = (e) => {
              S(e, {
                size: 28,
                strokeWidth: 1.75,
                style: `filter: drop-shadow(0 0 5px rgba(0, 0, 0, 1))`,
              });
            },
            o = (e) => {
              x(e, {
                size: 28,
                strokeWidth: 1.75,
                style: `filter: drop-shadow(0 0 5px rgba(0, 0, 0, 1))`,
              });
            };
          _(i, (e) => {
            F() ? e(o, -1) : e(a);
          }),
            u(r);
          var s = c(r, 2);
          u(n), g(() => e(s, `src`, O())), f(t, n);
        },
        L = (e) => {
          var n = w(),
            r = b(n);
          t(r, () => D.cover), u(n), f(e, n);
        };
      _(p, (e) => {
        O() ? e(m) : D.cover && e(L, 1);
      });
      var R = c(p, 2);
      let z;
      var B = b(R),
        V = y(B, !0),
        H = c(B, 2),
        U = (e) => {
          var t = T(),
            n = y(t);
          g(() => r(n, `by ${k() ?? ``}`)), f(e, t);
        };
      _(H, (e) => {
        k() && e(U);
      });
      var W = c(H, 2);
      t(W, () => D.chip ?? d), u(R);
      var G = c(R, 2);
      t(G, () => D.children ?? d),
        g(() => {
          (z = i(R, 1, `map-info svelte-153l2ol`, null, z, {
            "map-info-flex": D.chip,
          })),
            r(V, D.name);
        }),
        f(a, s);
    }
  ),
    f(s, L),
    a();
}
export { D as t };
