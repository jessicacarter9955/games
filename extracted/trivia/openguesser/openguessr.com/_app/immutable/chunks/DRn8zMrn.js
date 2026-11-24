import {
  At as e,
  G as t,
  J as n,
  M as r,
  N as i,
  Nt as a,
  Pt as o,
  Q as s,
  St as c,
  Vt as l,
  W as u,
  X as d,
  a as f,
  mt as p,
  o as m,
  q as h,
  s as g,
  st as _,
  xt as v,
  yt as y,
} from "./hxBKRHPW.js";
import "./xihTtKlq.js";
import { A as b, F as x, N as S } from "./DbFYFRnT.js";
import { t as C } from "./bopAomMj.js";
var w = {
  name: `timer`,
  size: 24,
  node: [
    [`line`, { x1: `10`, x2: `14`, y1: `2`, y2: `2` }],
    [`line`, { x1: `12`, x2: `15`, y1: `14`, y2: `11` }],
    [`circle`, { cx: `12`, cy: `14`, r: `8` }],
  ],
};
w.node;
var T = new Set([`$$slots`, `$$events`, `$$legacy`]);
function E(e, t) {
  let n = m(t, T);
  x(
    e,
    g(() => n, {
      get icon() {
        return w;
      },
    })
  );
}
var D = s(
    `<div class="streak-day-item svelte-bkqr2z"><div class="svelte-bkqr2z"><!></div> <p class="streak-day-name svelte-bkqr2z"> </p></div>`
  ),
  O = s(
    `<div><div class="days-scroll of-left of-right svelte-bkqr2z"></div></div>`
  );
function k(s, m) {
  o(m, !0);
  let g = f(m, `streakDays`, 19, () => []),
    x = f(m, `compact`, 3, !1),
    w = [`Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, `Sun`],
    T = e(() => {
      let e = new Set(g()),
        t = [];
      for (let n = 4; n >= 0; n--) {
        let r = new Date();
        r.setUTCDate(r.getUTCDate() - n);
        let i = r.toISOString().slice(0, 10);
        t.push({
          name: w[(r.getUTCDay() + 6) % 7],
          played: e.has(i),
          isToday: n === 0,
        });
      }
      return t;
    });
  var E = O();
  let k;
  var A = y(E);
  u(
    A,
    21,
    () => _(T),
    t,
    (e, t) => {
      var i = D();
      let a;
      var o = y(i);
      let s;
      var u = y(o),
        f = (e) => {
          S(e, { size: 20, strokeWidth: 2.25 });
        },
        m = (e) => {
          C(e, { size: 18, strokeWidth: 2.5 });
        },
        g = (e) => {
          b(e, { size: 20, strokeWidth: 2.25 });
        };
      h(u, (e) => {
        _(t).played ? e(f) : _(t).isToday ? e(m, 1) : e(g, -1);
      }),
        l(o);
      var w = c(o, 2),
        T = v(w, !0);
      l(i),
        p(() => {
          (a = r(i, ``, a, { opacity: _(t).played ? `` : 0.5 })),
            (s = r(o, ``, s, {
              height: x()
                ? `calc(var(--layout-margin) + var(--content-margin))`
                : ``,
            })),
            n(T, _(t).name);
        }),
        d(e, i);
    }
  ),
    l(A),
    l(E),
    p(
      () =>
        (k = i(
          E,
          1,
          `daily-competition-days-container svelte-bkqr2z`,
          null,
          k,
          { "compact-container": x() }
        ))
    ),
    d(s, E),
    a();
}
export { E as n, k as t };
