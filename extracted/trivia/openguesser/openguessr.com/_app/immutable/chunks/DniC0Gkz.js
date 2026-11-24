import { R as e } from "./DbFYFRnT.js";
import { at as t } from "./hxBKRHPW.js";
new e(
  () => window.scrollX,
  (e) => t(window, `scroll`, e)
),
  new e(
    () => window.scrollY,
    (e) => t(window, `scroll`, e)
  );
var n = new e(
    () => window.innerWidth,
    (e) => t(window, `resize`, e)
  ),
  r = new e(
    () => window.innerHeight,
    (e) => t(window, `resize`, e)
  );
new e(
  () => window.outerWidth,
  (e) => t(window, `resize`, e)
),
  new e(
    () => window.outerHeight,
    (e) => t(window, `resize`, e)
  ),
  new e(
    () => window.screenLeft,
    (e) => {
      let t = window.screenLeft,
        n = requestAnimationFrame(function r() {
          (n = requestAnimationFrame(r)), t !== (t = window.screenLeft) && e();
        });
      return () => {
        cancelAnimationFrame(n);
      };
    }
  ),
  new e(
    () => window.screenTop,
    (e) => {
      let t = window.screenTop,
        n = requestAnimationFrame(function r() {
          (n = requestAnimationFrame(r)), t !== (t = window.screenTop) && e();
        });
      return () => {
        cancelAnimationFrame(n);
      };
    }
  ),
  new e(
    () => navigator.onLine,
    (e) => {
      let n = t(window, `online`, e),
        r = t(window, `offline`, e);
      return () => {
        n(), r();
      };
    }
  );
export { n, r as t };
