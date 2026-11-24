import { m as e } from "./hxBKRHPW.js";
import {
  R as t,
  Vt as n,
  in as r,
  on as i,
  r as a,
  rn as o,
} from "./aEOu6wZT.js";
import { y as s } from "./DbFYFRnT.js";
import "./NtBOrSfa.js";
async function c(c) {
  e(n) && n.set(!1), o.set(), r.set(-1);
  let l = await i(c);
  l
    ? (o.set(l), r.set(c))
    : c == localStorage.getItem(`id`) &&
      s(
        `Sign out?`,
        `Loading your profile failed. If this was due to an authentication issue, signing out and back in might help.`,
        () => {
          a(), t();
        }
      ),
    l && n.set(!0);
}
export { c as t };
