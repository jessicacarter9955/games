import { p as e } from "./DbFYFRnT.js";
function t(t) {
  let n = window.Capacitor?.Plugins?.Share;
  if (n) return n.share({ url: t }).catch(() => {});
  navigator.clipboard
    .writeText(t)
    .then(() => e(`Copied!`))
    .catch((t) => e(`Error: ` + t));
}
export { t };
