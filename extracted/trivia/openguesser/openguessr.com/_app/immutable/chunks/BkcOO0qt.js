import { o as e, s as t } from "./hxBKRHPW.js";
import "./xihTtKlq.js";
import { F as n } from "./DbFYFRnT.js";
var r = {
  name: `link`,
  size: 24,
  node: [
    [
      `path`,
      { d: `M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71` },
    ],
    [
      `path`,
      { d: `M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71` },
    ],
  ],
};
r.node;
var i = new Set([`$$slots`, `$$events`, `$$legacy`]);
function a(a, o) {
  let s = e(o, i);
  n(
    a,
    t(() => s, {
      get icon() {
        return r;
      },
    })
  );
}
var o = {
  name: `share-2`,
  size: 24,
  node: [
    [`circle`, { cx: `18`, cy: `5`, r: `3` }],
    [`circle`, { cx: `6`, cy: `12`, r: `3` }],
    [`circle`, { cx: `18`, cy: `19`, r: `3` }],
    [`line`, { x1: `8.59`, x2: `15.42`, y1: `13.51`, y2: `17.49` }],
    [`line`, { x1: `15.41`, x2: `8.59`, y1: `6.51`, y2: `10.49` }],
  ],
};
o.node;
var s = new Set([`$$slots`, `$$events`, `$$legacy`]);
function c(r, i) {
  let a = e(i, s);
  n(
    r,
    t(() => a, {
      get icon() {
        return o;
      },
    })
  );
}
export { a as n, c as t };
