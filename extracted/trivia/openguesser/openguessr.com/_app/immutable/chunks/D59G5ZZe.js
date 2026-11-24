import { h as e } from "./hxBKRHPW.js";
import { o as t } from "./NtBOrSfa.js";
var n = e(`https://accounts.openguessr.com`),
  r = e(`wss://accounts.openguessr.com/socket`),
  i = e(`https://education.openguessr.com`),
  a = e(`https://discord.gg/CSc3MbDrZ8`),
  o = e(`https://github.com/therealPaulPlay/OpenGuessr`),
  s = e(`https://discord.com/oauth2/authorize?client_id=1540490382255726722`),
  c = e(
    `173042266770-kumghsvt3aaparhacqv9b3g9hr2uvt4h.apps.googleusercontent.com`
  ),
  l = e(`com.paulplay.openguessr.signin`),
  u = () => {
    let e = t;
    return {
      page: { subscribe: e.page.subscribe },
      navigating: { subscribe: e.navigating.subscribe },
      updated: e.updated,
    };
  },
  d = {
    subscribe(e) {
      return u().page.subscribe(e);
    },
  };
export { a, c, s as i, r as l, n, i as o, l as r, o as s, d as t };
