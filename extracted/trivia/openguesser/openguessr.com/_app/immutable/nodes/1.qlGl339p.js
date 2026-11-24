import "../chunks/xihTtKlq.js";
import { r as e } from "../chunks/NtBOrSfa.js";
import "../chunks/xySTN7WL.js";
import {
  Bt as t,
  F as n,
  J as r,
  Nt as i,
  Pt as a,
  Q as o,
  St as s,
  Vt as c,
  X as l,
  _t as u,
  mt as d,
  nt as f,
  pt as p,
  rt as m,
  v as h,
  xt as g,
  yt as _,
} from "../chunks/hxBKRHPW.js";
import { t as v } from "../chunks/BEao7Sd7.js";
import { t as y } from "../chunks/DfdCta3n.js";
import { n as b } from "../chunks/CZXYIZ8O.js";
var x = o(
  `<div class="page-content svelte-1j96wlh"><h1 class="svelte-1j96wlh"> </h1> <p class="svelte-1j96wlh">The page you requested does not exist or experienced an error.</p> <button class="return-button standard-button svelte-1j96wlh"><!> Return to OpenGuessr</button></div>`
);
function S(o, f) {
  a(f, !1), h();
  var S = x();
  n(`1j96wlh`, (e) => {
    p(() => {
      u.title = `OpenGuessr - Error`;
    });
  });
  var C = _(S),
    w = g(C),
    T = s(C, 4),
    E = _(T);
  v(E, {
    style: `min-width: 22px; margin-bottom: -3px; margin-right: var(--content-margin);`,
    strokeWidth: 2.5,
  }),
    t(),
    c(T),
    c(S),
    d(() => r(w, `${y.status ?? ``} - ${y.error.message ?? ``}`)),
    m(`click`, T, () => {
      b(`basic_button`), e(`/`);
    }),
    l(o, S),
    i();
}
f([`click`]);
export { S as component };
