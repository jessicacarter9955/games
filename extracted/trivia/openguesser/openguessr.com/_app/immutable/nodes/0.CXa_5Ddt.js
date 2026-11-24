import { n as e } from "../chunks/XKyaHtl9.js";
import "../chunks/xihTtKlq.js";
import {
  Bt as t,
  D as n,
  F as r,
  H as i,
  Nt as a,
  Pt as o,
  Q as s,
  St as c,
  Wt as l,
  X as u,
  bt as d,
  l as f,
  m as p,
  mt as m,
  r as h,
  tt as g,
  u as _,
  v,
} from "../chunks/hxBKRHPW.js";
import "../chunks/xySTN7WL.js";
import { t as y } from "../chunks/DfdCta3n.js";
import { i as b, r as x } from "../chunks/NtBOrSfa.js";
import {
  At as S,
  Cr as C,
  E as w,
  Er as T,
  Hr as E,
  Jr as D,
  S as O,
  Sr as k,
  Wr as A,
  Yr as j,
  ei as M,
  m as N,
  oi as P,
  t as F,
  w as I,
  z as L,
} from "../chunks/aEOu6wZT.js";
import { i as R } from "../chunks/CZXYIZ8O.js";
import { n as z } from "../chunks/D59G5ZZe.js";
import { _ as B } from "../chunks/DbFYFRnT.js";
var V = e({ prerender: () => !0 }),
  H = new URL(
    `../assets/barlow-condensed-medium.DmkPGkbM.woff2`,
    import.meta.url
  ).href;
function U(e, t) {
  o(t, !1);
  let n = `G-DXD64B7ZDX`;
  h(r);
  function r() {
    try {
      if (p(E)) return;
      (window.gtag_enable_tcf_support = !0),
        (window.dataLayer = window.dataLayer || []);
      function e() {
        window.dataLayer.push(arguments);
      }
      e(`js`, new Date()),
        p(D)
          ? (e(`consent`, `default`, {
              ad_storage: `denied`,
              ad_personalization: `denied`,
              ad_user_data: `denied`,
            }),
            e(`config`, n, { client_storage: `none` }))
          : e(`config`, n, {
              cookie_domain: y.url.hostname,
              cookie_flags: `SameSite=None; Secure`,
            });
      let t = document.createElement(`script`);
      (t.src = `https://www.googletagmanager.com/gtag/js?id=${n}`),
        (t.async = !0),
        document.head.appendChild(t);
    } catch (e) {
      console.error(`Error loading GA4 in analytics.js: ` + e);
    }
  }
  v(), a();
}
function W(e, t) {
  o(t, !1);
  let n = () => _(P, `$isAuthenticated`, i),
    r = () => _(z, `$apiUrl`, i),
    [i, s] = f();
  h(async () => {
    try {
      if (y.url.searchParams.get(`crazy-games`)) {
        A.set(!0),
          await new Promise((e, t) => {
            let n = document.createElement(`script`);
            (n.src = `https://sdk.crazygames.com/crazygames-sdk-v3.js`),
              (n.onload = () => {
                e();
              }),
              (n.onerror = t),
              document.head.appendChild(n);
          }),
          await window.CrazyGames.SDK.init(),
          window.CrazyGames.SDK.game.loadingStart(),
          setTimeout(() => {
            try {
              window.CrazyGames.SDK.game.loadingStop();
              let e = window.CrazyGames.SDK.game.getInviteParam(`join`);
              e && I(e),
                window.CrazyGames.SDK.game.isInstantMultiplayer &&
                  (x(`/multiplayer/host`), O());
            } catch (e) {
              console.error(`Error in CrazyGames after-load timeout:`, e);
            }
          }, 150);
        let e = !1;
        S.subscribe((t) => {
          try {
            t
              ? e && window.CrazyGames.SDK.game.gameplayStop()
              : (window.CrazyGames.SDK.game.gameplayStart(), (e = !0));
          } catch (e) {
            console.error(`Failed to emit CrazyGames gameplay events:`, e);
          }
        }),
          window.CrazyGames.SDK.game.addJoinRoomListener((e) => {
            let t = e?.join;
            t && t !== p(k) && (w(), N(!1), I(t));
          });
        let t = () => {
          try {
            let e = p(k);
            if (!e) return window.CrazyGames.SDK.game.leftRoom();
            let t =
              !p(C) &&
              !p(T)?.storage?.matchmakingRoom &&
              !p(T)?.storage?.tournamentRoom;
            window.CrazyGames.SDK.game.updateRoom({
              roomId: e,
              isJoinable: t,
              ...(t && { inviteParams: { join: e } }),
            });
          } catch (e) {
            console.error(`Failed to update CrazyGames room data:`, e);
          }
        };
        k.subscribe(t),
          C.subscribe(t),
          c(),
          window.CrazyGames.SDK.user.addAuthListener(c);
      }
    } catch (e) {
      console.error(`Error loading and starting CrazyGames SDK:`, e);
    }
  });
  async function c() {
    if (n()) return;
    let e;
    try {
      e = await window.CrazyGames.SDK.user.getUserToken();
    } catch (e) {
      return console.error(
        `Error obtaining CrazyGames Token (likely, user is not logged in):`,
        e
      );
    }
    try {
      let t = await fetch(r() + `/accounts/cg-authenticate`, {
        method: `POST`,
        headers: { "Content-Type": `application/json` },
        body: JSON.stringify({ crazyGamesToken: e }),
      });
      if (!t.ok) {
        let e = await t.json().catch(() => null);
        throw Error(
          e?.error || `Authentication failed with status ${t.status}`
        );
      }
      let n = await t.json();
      localStorage.setItem(`id`, n.id),
        localStorage.setItem(`bearer`, n.token),
        F();
    } catch (e) {
      console.error(`Error authenticating with CrazyGames:`, e),
        B(
          `Error authenticating`,
          `An error occurred trying to authenticate with CrazyGames.`,
          e.message
        );
    }
  }
  v(), a(), s();
}
function G(e, t) {
  o(t, !1);
  let n = () => _(P, `$isAuthenticated`, i),
    r = () => _(z, `$apiUrl`, i),
    [i, s] = f();
  h(async () => {
    try {
      y.url.searchParams.get(`y8-games`) &&
        (M.set(!0),
        await new Promise((e, t) => {
          let n = document.createElement(`script`);
          (n.src = `https://cdn.y8.com/minimal-sdk/2-0/y8.min.js`),
            (n.onload = () => {
              e();
            }),
            (n.onerror = t),
            document.head.appendChild(n);
        }),
        window.addEventListener(
          `y8sdk.ready`,
          function () {
            (window.Y8SDK = window.y8.sdk()),
              window.Y8SDK.init({
                appId: `6aa7ec357ddd233a7eae2e05`,
                autoLogin: !0,
              }).catch((e) =>
                console.error(`Error initializing Y8 Games SDK:`, e)
              ),
              window.Y8SDK.onAuth((e, t) => {
                if (t) console.error(`Y8 SDK auth error:`, t);
                else if (e) c();
                else return;
              });
          },
          { once: !0 }
        ),
        window.y8 && window.y8.emitReadyEvent && window.y8.emitReadyEvent());
    } catch (e) {
      console.error(`Error loading and starting Y8 Games SDK:`, e);
    }
  });
  async function c(e = !0) {
    if (n()) return;
    let t;
    try {
      if (((t = window.Y8SDK.getAccessToken()), !t))
        throw Error(`Failed to obtain access token.`);
    } catch (e) {
      return console.error(
        `Error obtaining Y8Games token (likely, the user isn't actually signed in):`,
        e
      );
    }
    try {
      let n = await fetch(r() + `/accounts/y8-authenticate`, {
        method: `POST`,
        headers: { "Content-Type": `application/json` },
        body: JSON.stringify({ y8GamesToken: t }),
      });
      if (n.status === 401 && e) {
        try {
          await window.Y8SDK.refreshToken();
        } catch (e) {
          return console.error(`Error refreshing the Y8Games token:`, e);
        }
        return c(!1);
      }
      if (!n.ok) {
        let e = await n.json().catch(() => null);
        throw Error(
          e?.error || `Authentication failed with status ${n.status}`
        );
      }
      let i = await n.json();
      localStorage.setItem(`id`, i.id),
        localStorage.setItem(`bearer`, i.token),
        F();
    } catch (e) {
      console.error(`Error occurred authenticating with Y8:`, e),
        B(
          `Error authenticating`,
          `An error occurred trying to authenticate with Y8.`,
          e.message
        );
    }
  }
  v(), a(), s();
}
function K(e, t) {
  o(t, !1),
    h(() => {
      try {
        (window.Capacitor = window.parent.Capacitor ?? window.Capacitor),
          (window.Desktop ??= window.parent.Desktop);
      } catch {}
      try {
        window.Capacitor?.isNativePlatform()
          ? (j.set(window.Capacitor.getPlatform()),
            setTimeout(
              () => window.Capacitor.Plugins.SplashScreen?.hide(),
              150
            ),
            document.addEventListener(`visibilitychange`, () =>
              R(document.hidden)
            ))
          : window.Desktop && j.set(window.Desktop.platform);
      } catch (e) {
        console.error(`Error initializing native app:`, e);
      }
    }),
    v(),
    a();
}
var q = g(
    s(
      `<link rel="preload" as="font" type="font/woff2" crossorigin="anonymous"/> <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" defer=""><\/script>`,
      1
    )
  ),
  J = s(`<!> <!> <!> <!> <!> <!>`, 1);
function Y(e, s) {
  o(s, !0),
    b((e) => {
      if (
        document.startViewTransition &&
        e.from?.url.pathname !== e.to?.url.pathname
      )
        return new Promise((t) => {
          document.startViewTransition(async () => {
            t(), await e.complete;
          });
        });
    });
  var f = J();
  r(`12qhfyh`, (e) => {
    var r = q(),
      i = d(r);
    t(2), m(() => n(i, `href`, H)), u(e, r);
  });
  var p = d(f);
  W(p, {});
  var h = c(p, 2);
  G(h, {});
  var g = c(h, 2);
  L(g, {});
  var _ = c(g, 2);
  K(_, {});
  var v = c(_, 2);
  i(v, () => s.children ?? l), U(c(v, 2), {}), u(e, f), a();
}
export { Y as component, V as universal };
