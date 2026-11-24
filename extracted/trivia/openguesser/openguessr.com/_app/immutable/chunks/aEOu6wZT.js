const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = ["./DDQqcI1E.js", "./XKyaHtl9.js", "../assets/leaflet.vh-t_kPv.css"])
) => i.map((i) => d[i]);
import { r as e } from "./XKyaHtl9.js";
import {
  At as t,
  Bt as n,
  D as r,
  Dt as i,
  J as a,
  K as o,
  M as s,
  N as c,
  Nt as l,
  Ot as u,
  Pt as d,
  Q as f,
  R as p,
  St as m,
  Tt as h,
  Vt as g,
  X as _,
  a as v,
  b as y,
  bt as ee,
  f as te,
  g as b,
  h as x,
  it as ne,
  l as re,
  m as S,
  mt as ie,
  nt as ae,
  p as C,
  q as oe,
  r as se,
  rt as ce,
  st as w,
  u as T,
  v as le,
  xt as ue,
  yt as E,
} from "./hxBKRHPW.js";
import { r as D } from "./NtBOrSfa.js";
import "./xihTtKlq.js";
import { t as de } from "./DclECHGd.js";
import "./xySTN7WL.js";
import { t as fe } from "./DfdCta3n.js";
import {
  D as pe,
  E as me,
  L as he,
  P as O,
  T as ge,
  _ as k,
  p as _e,
  y as ve,
} from "./DbFYFRnT.js";
import { a as ye, l as be, n as A, t as xe } from "./D59G5ZZe.js";
import { i as Se, n as j, o as Ce } from "./CZXYIZ8O.js";
var M = b(!1),
  we = b(0),
  Te = b(0),
  Ee = b(0),
  De = b(null),
  Oe = b(1e3),
  ke = b(!1),
  Ae = b(0),
  je = b(0),
  Me = b(null),
  Ne = b([]),
  Pe = b(),
  Fe = b(!1),
  Ie = b(0),
  Le = b(),
  Re = b(!1),
  ze = b(!1),
  N = b(!1),
  Be = b(),
  Ve = b(),
  He = C(Ve, (e) => [`ios`, `android`].includes(e)),
  Ue = C(Ve, (e) => !!e),
  We = C([Ee, Re, ze, N, Ue], ([e, t, n, r, i]) => e >= 2 || t || n || r || i),
  Ge = C([Re, ze, N], ([e, t, n]) => e || t || n),
  Ke = C([Ge, Ue], ([e, t]) => e || t),
  qe = C(
    [Re, ze, N, Ve],
    ([e, t, n, r]) => e || t || n || r == `ios` || r == `android`
  ),
  Je = C([Re, ze, N], ([e, t, n]) => e || t || n),
  Ye = C([N], ([e]) => e),
  Xe = C([ze, N], ([e, t]) => e || t),
  Ze = x({
    none: `None`,
    nmpz: `NMPZ`,
    grayscale: `Grayscale`,
    invert: `Inverted`,
    hue: `Hue shift`,
    fade: `Blink`,
  }),
  Qe = x(Object.keys(S(Ze))?.[0]),
  $e = b(S(Qe)),
  et = b(),
  tt = b(!1),
  nt = b(!1),
  P = x(`World`),
  rt = x(`Tutorial`),
  it = x([
    {
      map: `World`,
      imgUrl: `/img/map-covers/world_cover.jpg`,
      imgUrlTiny: `/img/map-covers/map-covers-tiny/world_cover.jpg`,
    },
    {
      map: `Capital Cities`,
      imgUrl: `/img/map-covers/capital_cities_cover.jpg`,
      imgUrlTiny: `/img/map-covers/map-covers-tiny/capital_cities_cover.jpg`,
    },
    {
      map: `Famous Places`,
      imgUrl: `/img/map-covers/famous_places_cover.jpg`,
      imgUrlTiny: `/img/map-covers/map-covers-tiny/famous_places_cover.jpg`,
    },
  ]),
  at = x([
    {
      map: `Country Guessr`,
      imgUrl: `/img/map-covers/country_guessr_cover.jpg`,
      imgUrlTiny: `/img/map-covers/map-covers-tiny/country_guessr_cover.jpg`,
    },
    {
      map: `Image Guessr`,
      imgUrl: `/img/map-covers/image_guessr_cover.jpg`,
      imgUrlTiny: `/img/map-covers/map-covers-tiny/image_guessr_cover.jpg`,
    },
    {
      map: `Meta Guessr`,
      imgUrl: `/img/map-covers/meta_guessr_cover.jpg`,
      imgUrlTiny: `/img/map-covers/map-covers-tiny/meta_guessr_cover.jpg`,
    },
  ]),
  ot = x([
    `Africa`,
    `South America`,
    `North America`,
    `Asia`,
    `Europe`,
    `Oceania`,
  ]),
  st = x(
    `Albania.Andorra.Argentina.Australia.Austria.Bangladesh.Belgium.Bhutan.Bolivia.Botswana.Brazil.Bulgaria.Canada.Cambodia.Chile.Colombia.Croatia.Czechia.Denmark.Dominican Republic.Ecuador.Eswatini.Estonia.Finland.France.Germany.Ghana.Greece.Guatemala.Hong Kong.Hungary.Iceland.India.Indonesia.Ireland.Israel.Italy.Japan.Jordan.Kazakhstan.Kenya.Latvia.Lebanon.Lesotho.Lithuania.Luxembourg.Malaysia.Malta.Mexico.Monaco.Mongolia.Montenegro.Namibia.Netherlands.New Zealand.Nigeria.North Macedonia.Norway.Oman.Peru.Philippines.Poland.Portugal.Puerto Rico.Romania.Rwanda.Russia.San Marino.Sao Tome and Principe.Senegal.Serbia.Singapore.Slovakia.Slovenia.South Africa.South Korea.Spain.Sri Lanka.Sweden.Switzerland.Taiwan.Thailand.Tunisia.Turkey.Ukraine.United Arab Emirates.United Kingdom.United States.Uruguay.Qatar`.split(
      `.`
    )
  ),
  F = b(),
  ct = b(),
  lt = b(3),
  ut = b(60),
  I = b(1),
  dt = b(S(Qe)),
  ft = b(`standard`),
  R = b(!1),
  pt = b(!1),
  mt = b(!1),
  ht = b(!1),
  gt = b(null),
  _t = b(!1);
R.subscribe((e) => {
  e || (pt.set(!1), mt.set(!1), gt.set(null));
});
var vt = b(`Guest (Default)`),
  yt = b(),
  bt = b(),
  xt = b(),
  St = b(0),
  Ct = b(S(P)),
  wt = b(0),
  z = b(null),
  Tt = b(!1),
  Et = b(!1),
  Dt = b(`Default Title`),
  Ot = b([]),
  kt = b([]),
  At = b(!1),
  jt = b({}),
  Mt = b(!1),
  Nt = b(!1),
  Pt = b(!1),
  Ft = b([]),
  It = b(0),
  Lt = b(!1),
  Rt = b([]),
  zt = b([]),
  Bt = b(!1),
  Vt = b(),
  B = b(!1),
  Ht = b(`Distance not loaded.`),
  Ut = b(`Default Motivation!`),
  Wt = b(`Continue`),
  Gt = b(0),
  Kt = b(`0`),
  qt = b(`Default`),
  Jt = b(),
  Yt = b(!1),
  Xt = b(),
  Zt = b(),
  Qt = b(!1),
  $t = b(0),
  en = b(),
  tn = b(!1),
  nn = b();
function rn(e) {
  let t;
  try {
    let n = e.split(`.`)[1].replace(/-/g, `+`).replace(/_/g, `/`),
      r = decodeURIComponent(
        atob(n)
          .split(``)
          .map(function (e) {
            return `%` + (`00` + e.charCodeAt(0).toString(16)).slice(-2);
          })
          .join(``)
      ),
      { exp: i } = JSON.parse(r);
    t = Date.now() >= i * 1e3;
  } catch {
    t = !0;
  }
  return t;
}
var an = b(!1),
  V = b(!1),
  on = b(!1),
  H = b(!1),
  U = b(!1),
  W = C([H, U], ([e, t]) => !(e || t)),
  sn = new he(`(orientation: portrait) and (max-width: 800px)`),
  G = b(),
  cn = b(!0),
  ln = b(!sn.current),
  un = b(!1),
  dn = b(!1),
  fn = b(0),
  pn = b(0),
  K = b(),
  mn = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=`,
  hn = `https://www.google.com/maps/embed/v1/streetview?location=`;
function gn(
  e,
  t,
  { heading: n = null, pitch: r = null, panoramaId: i = null } = {}
) {
  window.open(vn(e, t, n, r, i, !1), `_blank`);
}
function _n(
  e,
  t,
  { heading: n = null, pitch: r = null, panoramaId: i = null } = {}
) {
  return vn(e, t, n, r, i, !0);
}
function vn(e, t, n, r, i, a = !0) {
  return (
    (a ? hn : mn) +
    e +
    `,` +
    t +
    (a
      ? `&key=AIzaSyAHt3QJRBDISRaWaqblQl2VwjWiHvjpgIs&fov=90&language=en`
      : ``) +
    (n == null ? `` : `&heading=` + n) +
    (r == null ? `` : `&pitch=` + r) +
    (i ? `&pano=` + i : ``)
  );
}
function yn(e, t, n, r) {
  return `https://streetviewpixels-pa.googleapis.com/v1/tile?cb_client=apiv3&panoid=${encodeURIComponent(
    e
  )}&x=${t}&y=${n}&zoom=${r}`;
}
function bn(e, t) {
  let n = e?.[1]?.[1],
    r = e?.[2]?.[3]?.[0];
  if (!n || !r?.length) return null;
  let i = e[5]?.find((e) => e?.[1]?.[2]?.length === 3)?.[1][2],
    [a, o] = r[Math.min(t, r.length - 1)][0];
  return { id: n, width: o, height: a, heading: i?.[0] ?? 0 };
}
var xn = [`apiv3`, null, null, null, `US`, null, null, null, null, null, [[0]]],
  Sn = [[1, 2, 3, 4, 8, 6]];
async function Cn(e, t) {
  try {
    let n = await fetch(
      `https://maps.googleapis.com/$rpc/google.internal.maps.mapsjs.v1.MapsJsInternalService/${e}`,
      {
        method: `POST`,
        headers: { "Content-Type": `application/json+protobuf` },
        body: JSON.stringify(t),
      }
    );
    return n.ok ? await n.json() : null;
  } catch {
    return null;
  }
}
async function wn(e, t, n) {
  return bn(
    (
      await Cn(`SingleImageSearch`, [
        xn,
        [[null, null, e, t], 50],
        [
          null,
          [`en`, `GB`],
          null,
          null,
          null,
          null,
          null,
          null,
          [2],
          null,
          [[[2, !0, 2]]],
        ],
        Sn,
      ])
    )?.[1],
    n
  );
}
async function Tn(e, t) {
  return bn(
    (await Cn(`GetMetadata`, [xn, [`en`, `GB`], [[[2, e]]], Sn]))?.[1]?.[0],
    t
  );
}
var q = b(0),
  J = b(0),
  En = b(null),
  Dn = b(null),
  On = b(null),
  kn = x({ zoom: 2, lat: 0, lng: 0, diameter: 360 }),
  An = b(S(kn)),
  jn = b([]),
  Mn = b(),
  Nn = b(null),
  Pn = b(!0),
  Fn = C([q, J, En, Dn, On], ([e, t, n, r, i], a) => {
    Pn.set(!0), a(_n(e, t, { heading: n, pitch: r, panoramaId: i }));
  });
async function In(e) {
  try {
    let t = await fetch(
      S(A) +
        `/accounts/profile/${e}${
          S(M) && e !== localStorage.getItem(`id`)
            ? `?id=${localStorage.getItem(`id`)}`
            : ``
        }`,
      { method: `GET`, headers: { "Content-Type": `application/json` } }
    );
    if (t.ok) return await t.json();
    throw Error(t.status);
  } catch (e) {
    console.error(`Error loading profile:`, e),
      k(
        `Error loading profile`,
        `Couldn't load the user's profile.`,
        e.message
      );
  }
}
var Ln = b(),
  Rn = b(-1),
  zn = b(!1);
async function Bn(e, t) {
  try {
    let n = { id: localStorage.getItem(`id`), type: e, value: t },
      r = await fetch(S(A) + `/accounts/profile/update-replace`, {
        method: `PUT`,
        headers: {
          "Content-Type": `application/json`,
          Authorization: `Bearer ` + localStorage.getItem(`bearer`),
        },
        body: JSON.stringify(n),
      });
    return (
      r.ok ||
        (console.error(`Profile update failed: `, r.status),
        k(
          `Profile update failed`,
          `The server returned an error for the profile update.`,
          r.status
        )),
      !0
    );
  } catch (e) {
    console.error(`Error occurred during profile update: `, e),
      k(
        `Profile update failed`,
        `The profile update failed due to a network error.`,
        e
      );
  }
}
async function Vn(e) {
  S(zn) && (zn.set(!1), await Bn(`about`, e));
}
async function Hn(e) {
  e != S(je) &&
    (Ln.update((t) => {
      let n = t;
      return (n.pin = e), n;
    }),
    je.set(e),
    await Bn(`pin`, e));
}
async function Un(e) {
  e == S(Me) && (e = null),
    Ln.update((t) => {
      let n = t;
      return (n.badge = e), n;
    }),
    Me.set(e),
    await Bn(`badge`, e);
}
async function Wn(e) {
  await Bn(`flag`, e);
}
async function Gn(e) {
  try {
    let t = await In(localStorage.getItem(`id`));
    t &&
      e > (t?.highestCountryStreak || 0) &&
      (await Bn(`highest_country_streak`, e));
  } catch (e) {
    console.error(`Error checking/setting country streak:`, e);
  }
}
var Kn = b(null),
  qn = b(!1),
  Y = b(-1),
  Jn = b(!1),
  X = b(!0),
  Yn = b(!0),
  Xn = b(!1),
  Zn = C([X, Y, xe], ([e, t, n], r) => {
    e || t > 0 || !n.url || n.url.pathname !== `/` ? r(!0) : r(!1);
  }),
  Qn = b(!1),
  $n = b(!1),
  er = b(!1),
  tr = b(!1),
  nr = b(!1),
  rr = b(!1),
  ir = b(!1),
  ar = b(!1),
  or = b(!1),
  sr = b(!1),
  cr = b(!1),
  lr = b(!1),
  ur = b(!1),
  dr = b(!1),
  fr = b(!1),
  pr = b(!1),
  mr = b(!1),
  hr = b(!1),
  gr = b(!1),
  _r = b(!1),
  vr = b(!1),
  yr = b(!1),
  br = b(!1),
  xr = b(!1),
  Sr = null;
function Cr(e, t) {
  Sr && Sr.stopTimer();
  let n,
    r = !0,
    i = !1,
    a = Date.now() + e * 1e3,
    o,
    s = e < 1 ? 0.1 : 1;
  l(),
    (n = setInterval(function () {
      i || (c() <= 0 ? (d(), u()) : l());
    }, s * 1e3));
  function c() {
    return Math.round((a - Date.now()) / 1e3 / s) * s;
  }
  function l() {
    let e = c(),
      t = parseInt(e / 60, 10),
      n = parseInt(e % 60, 10),
      r = `${t < 10 ? `0` + t : t}:${n < 10 ? `0` + n : n}`;
    Kn.set(r),
      e < 10 && e % 1 == 0
        ? (qn.set(!0), j(`ticking_timer`, `timerSound`), Xn.set(!0))
        : (qn.set(!1), Xn.set(!1));
  }
  function u() {
    typeof t == `function` && t();
  }
  function d() {
    clearInterval(n),
      (r = !1),
      Sr === h &&
        (qn.set(!1), Xn.set(!1), Ce(`timerSound`), Kn.set(null), (Sr = null));
  }
  function f() {
    i ||
      Sr !== h ||
      ((i = !0), (o = a - Date.now()), Xn.set(!1), Ce(`timerSound`));
  }
  function p() {
    i && Sr === h && ((i = !1), (a = Date.now() + o), l());
  }
  function m() {
    return r;
  }
  let h = { stopTimer: d, pauseTimer: f, resumeTimer: p, isTimerActive: m };
  return (Sr = h), h;
}
var wr = b(0),
  Tr = b(0),
  Er = b([]),
  Dr = new Intl.DisplayNames([`en`], { type: `region` }),
  Or = {
    EsCt: `Catalonia`,
    EsGa: `Galicia`,
    EsPv: `Basque Country`,
    GbEng: `England`,
    GbNir: `Northern Ireland`,
    GbSct: `Scotland`,
    GbWls: `Wales`,
  };
function kr(e) {
  if (!e) return null;
  let t = e.toUpperCase(),
    n = Object.entries(Or).find(([e]) => e.toUpperCase() === t);
  if (n) return n[1];
  try {
    let e = Dr.of(t);
    return e === t ? null : e;
  } catch {
    return null;
  }
}
var Ar = {
  5: [
    `Rainbolt?`,
    `How?`,
    `Do you have an A in geography?`,
    `Wow.`,
    `Time for a screenshot.`,
    `Seriously impressive.`,
    `Astounding.`,
  ],
  100: [
    `Incredible guess.`,
    `It doesn't get much better than that.`,
    `Great accuracy.`,
    `The gut feeling was right!`,
    `It was that other street.`,
    `A short drive away!`,
    `Yeah, we'll take that.`,
  ],
  1e3: [
    `Nice, that's near the location!`,
    `You're good at this.`,
    `Quite close!`,
    `Almost there!`,
    `Yup, that was impressive.`,
    `That's how it's done.`,
  ],
  5e3: [
    `There's some room for improvement.`,
    `Not bad, but not great either.`,
    `Right area, wrong spot.`,
    `From far away it looks close.`,
    `It's a guess, not a 'know'.`,
    `It's something.`,
  ],
  default: [
    `Distance is relative. Here, relatively big.`,
    `You'll get it next time!`,
    `At least it was on the correct planet.`,
    `It could have been worse.`,
    `Just a quick teleportation away.`,
  ],
};
function jr(e) {
  let t = `default`,
    n = 1 / 0;
  Object.entries(Ar).forEach(([r, i]) => {
    if (r !== "default") {
      let i = Number(r);
      e <= i && i < n && ((n = i), (t = r));
    }
  });
  let r = Ar[t],
    i = r[Math.floor(Math.random() * r.length)];
  return S(V) && (i = `The country is ` + (kr(S(Tr)) || `Unknown`) + `.`), i;
}
function Mr(e = 0, t = 0) {
  let n = (S(q) * Math.PI) / 180,
    r = (S(J) * Math.PI) / 180,
    i = (e * Math.PI) / 180,
    a = (t * Math.PI) / 180,
    o = i - n,
    s = a - r,
    c =
      Math.sin(o / 2) * Math.sin(o / 2) +
      Math.cos(n) * Math.cos(i) * Math.sin(s / 2) * Math.sin(s / 2);
  return 6371 * (2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c)));
}
function Nr(e) {
  let t,
    n,
    r = localStorage.getItem(`distanceUnit`) || `kilometers`;
  return (
    (e = Number(e)),
    e < 5
      ? ((t = Math.round(e * 1e3)),
        r == `miles` && (t = Math.round(t * 1.09361)),
        (t = t.toLocaleString()),
        (n = r == `miles` ? t + ` yards` : t + ` m`))
      : ((t = Math.round(e * 10) / 10),
        r == `miles` && (t = Math.round(t * 0.621371 * 10) / 10),
        (t = t.toLocaleString()),
        (n = r == `miles` ? t + ` miles` : t + ` km`)),
    n
  );
}
var Pr = b(``),
  Fr = b(!0),
  Ir = Promise.resolve();
function Lr(e) {
  return (
    (Ir = Ir.then(
      async () =>
        new Promise((t) => {
          let n = new Image();
          (n.src = e),
            (n.onload = function () {
              Pr.set(e),
                setTimeout(() => {
                  Fr.set(!1), t();
                }, 250);
            }),
            (n.onerror = () => t());
        })
    )),
    Ir
  );
}
function Rr() {
  Fr.set(!0), Pr.set(``);
}
var Z = b(),
  zr = b(0),
  Br = b(null),
  Vr = b(!1),
  Hr = b([]);
function Ur() {
  if (localStorage.getItem(`tutorialCompleted`) !== null) return Y.set(0);
  X.set(!1),
    Y.set(1),
    (new Image().src = `/img/icon_3d.png`),
    (new Image().src = `/img/red_smoke.png`);
}
function Wr(e = 0) {
  Y.set(e), Jn.set(!1), localStorage.setItem(`tutorialCompleted`, !0);
}
function Gr() {
  clearTimeout(Kr),
    Wr(),
    localStorage.getItem(`selectedMap`) === S(rt) && ti(S(P), S(W)),
    X.set(!0);
}
W.subscribe((e) => {
  !e && (S(Y) > 0 || S(Jn)) && Gr();
});
var Kr,
  qr = !1;
function Jr() {
  qr
    ? (S(Jn) || console.warn(`Cannot finalize tutorial, not active.`),
      ti(S(P)),
      (Kr = setTimeout(() => Wr(3), 150)),
      (qr = !1))
    : (qr = !0);
}
var Yr = f(
    `<h1 class="title svelte-10t8jyq">Welcome, explorer!</h1> <div class="subtitle-container svelte-10t8jyq"><p class="subtitle svelte-10t8jyq">Fancy a quick introduction to OpenGuessr?</p></div> <div class="action-container svelte-10t8jyq"><div class="action-button-panel bar-menu svelte-10t8jyq"><button class="standard-button large">Start tutorial <!></button></div> <button class="subtle-button svelte-10t8jyq">No, skip to menu</button></div>`,
    1
  ),
  Xr = f(
    `<div class="how-to-image-container svelte-10t8jyq"><img class="how-to-image svelte-10t8jyq"/> <p class="how-to-subtitle svelte-10t8jyq"> </p></div>`
  ),
  Zr = f(
    `<h1 class="title svelte-10t8jyq">How to play</h1> <!> <div class="action-container svelte-10t8jyq"><div class="action-button-panel bar-menu svelte-10t8jyq"><button class="standard-button large"> <!></button></div></div>`,
    1
  ),
  Qr = f(
    `<h1 class="title svelte-10t8jyq">You're a natural!</h1> <div class="subtitle-container svelte-10t8jyq"><p class="subtitle svelte-10t8jyq">You've completed the tutorial.</p></div> <div class="action-container svelte-10t8jyq"><div class="action-button-panel bar-menu svelte-10t8jyq"><button class="standard-button large">To menu <!></button></div></div>`,
    1
  ),
  $r = f(
    `<div class="tutorial-scroll svelte-10t8jyq"><div class="content svelte-10t8jyq"><!></div></div>`
  );
function ei(e, t) {
  d(t, !0);
  let n = () => T(Y, `$tutorialStep`, c),
    s = () => T(rt, `$tutorialMap`, c),
    [c, f] = re(),
    h = i(0),
    v = [
      {
        image: `/img/tutorial/help_image_1.jpg`,
        alt: `Look at the panorama`,
        description: `Start by looking for clues in the panorama image.`,
      },
      {
        image: `/img/tutorial/help_image_2.jpg`,
        alt: `Guess where you are`,
        description: `When ready, pinpoint the location on the map — the closer, the better.`,
      },
    ];
  var y = $r(),
    b = E(y),
    x = E(b),
    ne = (e) => {
      var t = Yr(),
        n = ee(t),
        r = m(n, 2),
        i = ue(r),
        a = m(r, 2),
        o = E(a),
        s = E(o),
        c = m(E(s));
      O(c, {
        strokeWidth: 2.25,
        size: 22,
        style: `margin-bottom: -3px; margin-left: 3px;`,
      }),
        g(s),
        g(o);
      var l = m(o, 2);
      g(a),
        p(
          5,
          n,
          () => pe,
          () => ({ y: -20, duration: 1e3 })
        ),
        p(
          5,
          i,
          () => ge,
          () => ({ duration: 500 })
        ),
        ce(`click`, s, () => {
          j(`basic_button`), te(Jn, !0), te(Y, 2);
        }),
        p(
          5,
          o,
          () => pe,
          () => ({ y: 20, duration: 1e3 })
        ),
        ce(`click`, l, () => {
          j(`basic_button`), Gr();
        }),
        p(
          5,
          l,
          () => pe,
          () => ({ y: 20, duration: 1e3 })
        ),
        _(e, t);
    },
    S = (e) => {
      var t = Zr(),
        n = ee(t),
        i = m(n, 2);
      o(
        i,
        () => w(h),
        (e) => {
          var t = Xr(),
            n = E(t),
            i = m(n, 2),
            o = ue(i, !0);
          g(t),
            ie(() => {
              r(n, `src`, v[w(h)].image),
                r(n, `alt`, v[w(h)].alt),
                a(o, v[w(h)].description);
            }),
            p(
              5,
              t,
              () => ge,
              () => ({ duration: 500 })
            ),
            _(e, t);
        }
      );
      var c = m(i, 2),
        l = E(c),
        d = E(l),
        f = E(d),
        y = m(f);
      O(y, {
        strokeWidth: 2.25,
        size: 22,
        style: `margin-bottom: -3px; margin-left: 3px;`,
      }),
        g(d),
        g(l),
        g(c),
        ie(() => a(f, `${w(h) < v.length - 1 ? `Next` : `Let's play`} `)),
        p(
          5,
          n,
          () => pe,
          () => ({ y: -20, duration: 1e3 })
        ),
        ce(`click`, d, () => {
          j(`basic_button`),
            w(h) < v.length - 1 ? u(h) : (ti(s(), !0), te(Y, 0));
        }),
        p(
          5,
          l,
          () => pe,
          () => ({ y: 20, duration: 1e3 })
        ),
        _(e, t);
    },
    ae = (e) => {
      var t = Qr(),
        n = ee(t),
        r = m(n, 2),
        i = ue(r),
        a = m(r, 2),
        o = E(a),
        s = E(o),
        c = m(E(s));
      O(c, {
        strokeWidth: 2.25,
        size: 22,
        style: `margin-bottom: -3px; margin-left: 3px;`,
      }),
        g(s),
        g(o),
        g(a),
        p(
          5,
          n,
          () => pe,
          () => ({ y: -20, duration: 1e3 })
        ),
        p(
          5,
          i,
          () => ge,
          () => ({ duration: 500 })
        ),
        ce(`click`, s, () => {
          j(`basic_button`), Gr();
        }),
        p(
          5,
          o,
          () => pe,
          () => ({ y: 20, duration: 1e3 })
        ),
        _(e, t);
    };
  oe(x, (e) => {
    n() == 1 ? e(ne) : n() == 2 ? e(S, 1) : n() == 3 && e(ae, 2);
  }),
    g(b),
    g(y),
    _(e, y),
    l(),
    f();
}
ae([`click`]);
async function ti(e, t = !1) {
  localStorage.setItem(`selectedMap`, e), t && (await qi());
}
function ni(
  e,
  { community: t = !1, forMultiplayer: n = !1, neverRegenerate: r = !1 } = {}
) {
  let i = (t ? `community_` : ``) + e;
  if (n) {
    Ct.set(i), D(`/multiplayer/host`);
    return;
  }
  let a = localStorage.getItem(`selectedMap`) ?? S(P);
  ti(i, !r && a !== i), S(Y) > 0 && Wr(), X.set(!1), D(`/`);
}
function ri(e, t = !1, n = !1) {
  let r = n ? S(Ct) : localStorage.getItem(`selectedMap`);
  return t && (e = `community_` + e), r === e || (e === S(P) && !r);
}
async function ii(e) {
  if (e == `SINGLEPLAYER`) return await ci();
  if (e == `MULTIPLAYER`) return li();
  if (e == `COMPETITION`) return await ui();
  throw Error(
    `Incorrect location type passed to getLocationCoordinates() in getLocationCoordinates.js!`
  );
}
var ai,
  oi = [],
  si;
async function ci() {
  let e = localStorage.getItem(`selectedMap`) || S(P);
  if ((ai !== e && ((ai = e), (oi = [])), oi.length === 0)) {
    let e = await fetch(S(A) + `/locations`, {
      method: `PUT`,
      headers: { "Content-Type": `application/json` },
      body: JSON.stringify({ mapName: ai }),
    });
    if (e.ok) {
      let t = await e.json();
      (si = t.bounds), (oi = t.locations);
    } else {
      let t = e.status;
      try {
        let n = await e.json();
        n.error && (t = n.error);
      } catch {}
      throw (
        (ve(
          `Reset map?`,
          `Your selected map was potentially removed or renamed.`,
          () => {
            ti(S(P), !0);
          }
        ),
        Error(t))
      );
    }
  }
  if (oi.length > 0)
    return (
      si ||
        k(
          `Singleplayer bounds error`,
          `No singleplayer map bounds provided!`,
          `No map bounds.`
        ),
      An.set(si || S(kn)),
      oi.shift()
    );
  throw Error(`No locations available in cache!`);
}
function li() {
  return (
    S(F)?.storage?.mapBounds ||
      k(
        `Multiplayer bounds error`,
        `No multiplayer map bounds provided!`,
        `No map bounds.`
      ),
    An.set(S(F)?.storage?.mapBounds || S(kn)),
    S(F)?.storage?.location || [null, null, null]
  );
}
async function ui() {
  return An.set(S(kn)), S(Z)?.locations[S(zr)] ?? [];
}
var di = null;
function fi() {
  return di == S(wr);
}
async function pi(e) {
  mi || (await hi()), Tr.set(e), wr.set(0), Er.set([]);
  try {
    let e = [];
    for (let t = 1; t <= 6; t++) {
      let t = Math.floor(Math.random() * mi.length);
      for (; mi[t] == S(Tr) || e.includes(mi[t]); )
        t = Math.floor(Math.random() * mi.length);
      let n = mi[t];
      e.push(n);
      let r = kr(n) || `Unknown`;
      Er.update(
        (e) => (
          e.push({
            name: r.length > 17 ? r.slice(0, 14) + `...` : r,
            flag: n.charAt(0).toUpperCase() + n.slice(1).toLowerCase(),
          }),
          e
        )
      );
    }
    di = Math.floor(Math.random() * 6);
    let t = S(Tr),
      n = kr(t) || `Unknown`;
    Er.update(
      (e) => (
        (e[di] = {
          name: n.length > 17 ? n.slice(0, 14) + `...` : n,
          flag: t.charAt(0).toUpperCase() + t.slice(1).toLowerCase(),
        }),
        e
      )
    );
  } catch (e) {
    console.error(
      `Error generating random category options in countryGuesser.js: ` + e
    );
  }
}
var mi;
async function hi() {
  try {
    mi = await (await fetch(`/json/country-codes/country-codes.json`)).json();
  } catch (e) {
    console.error(`Error loading country codes:`, e);
  }
}
W.subscribe((e) => {
  e || V.set(!1);
});
var gi = b(!1),
  _i = b(`Default`),
  vi = b(`Default body text.`),
  yi = b(null),
  bi = b(`Default`),
  xi = b(null),
  Si = b(null),
  Ci = b(null),
  wi = b(null),
  Ti = b();
function Ei(
  e = ``,
  t = ``,
  n = `Default`,
  r = null,
  i = null,
  a = null,
  o = null,
  s = null
) {
  S(gi) ||
    (_i.set(e),
    vi.set(t),
    bi.set(n),
    yi.set(r),
    xi.set(i),
    Si.set(a),
    Ci.set(o),
    wi.set(s),
    gi.set(!0));
}
var Di = `No meta.`,
  Oi = null,
  ki = null;
function Ai(e = {}) {
  (Di = e.text || `No meta.`), (Oi = e.imageUrl ?? null), (ki = e.note ?? null);
}
B.subscribe((e) => {
  e && S(on) && Ei(`Meta`, Di, void 0, void 0, Oi, ki);
});
var ji = b(!1);
function Mi(e) {
  if (
    !e ||
    e.offsetParent === null ||
    getComputedStyle(e).visibility == `hidden` ||
    getComputedStyle(e).pointerEvents == `none`
  )
    return !1;
  let t = e.getBoundingClientRect(),
    n = t.left + t.width / 2,
    r = t.top + t.height / 2,
    i = document.elementFromPoint(n, r);
  if (!getComputedStyle(e).pointerEvents === `auto`) {
    let t = e.parentElement;
    for (; t; ) {
      let e = getComputedStyle(t).pointerEvents;
      if (e === `none`) return !1;
      if (e === `auto`) break;
      t = t.parentElement;
    }
  }
  return i === e || e.contains(i);
}
function Ni() {
  S(H)
    ? (j(`lock_guess_in`),
      S(F)?.updateStorage(
        `confirmedGuessClients`,
        `array-add-unique`,
        S(F)?.id
      ))
    : bs();
}
var Pi = f(
    `<div class="map-attribution-logo svelte-ygr3ex"><img style="width: 60px" alt="Google" src="data:image/svg+xml,%3Csvg%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2069%2029%22%3E%3Cg%20opacity%3D%22.6%22%20fill%3D%22%23fff%22%20stroke%3D%22%23fff%22%20stroke-width%3D%221.5%22%3E%3Cpath%20d%3D%22M17.4706%207.33616L18.0118%206.79504%2017.4599%206.26493C16.0963%204.95519%2014.2582%203.94522%2011.7008%203.94522c-4.613699999999999%200-8.50262%203.7551699999999997-8.50262%208.395779999999998C3.19818%2016.9817%207.0871%2020.7368%2011.7008%2020.7368%2014.1712%2020.7368%2016.0773%2019.918%2017.574%2018.3689%2019.1435%2016.796%2019.5956%2014.6326%2019.5956%2012.957%2019.5956%2012.4338%2019.5516%2011.9316%2019.4661%2011.5041L19.3455%2010.9012H10.9508V14.4954H15.7809C15.6085%2015.092%2015.3488%2015.524%2015.0318%2015.8415%2014.403%2016.4629%2013.4495%2017.1509%2011.7008%2017.1509%209.04835%2017.1509%206.96482%2015.0197%206.96482%2012.341%206.96482%209.66239%209.04835%207.53119%2011.7008%207.53119%2013.137%207.53119%2014.176%208.09189%2014.9578%208.82348L15.4876%209.31922%2016.0006%208.80619%2017.4706%207.33616z%22/%3E%3Cpath%20d%3D%22M24.8656%2020.7286C27.9546%2020.7286%2030.4692%2018.3094%2030.4692%2015.0594%2030.4692%2011.7913%2027.953%209.39011%2024.8656%209.39011%2021.7783%209.39011%2019.2621%2011.7913%2019.2621%2015.0594c0%203.25%202.514499999999998%205.6692%205.6035%205.6692zM24.8656%2012.8282C25.8796%2012.8282%2026.8422%2013.6652%2026.8422%2015.0594%2026.8422%2016.4399%2025.8769%2017.2905%2024.8656%2017.2905%2023.8557%2017.2905%2022.8891%2016.4331%2022.8891%2015.0594%2022.8891%2013.672%2023.853%2012.8282%2024.8656%2012.8282z%22/%3E%3Cpath%20d%3D%22M35.7511%2017.2905v0H35.7469C34.737%2017.2905%2033.7703%2016.4331%2033.7703%2015.0594%2033.7703%2013.672%2034.7343%2012.8282%2035.7469%2012.8282%2036.7608%2012.8282%2037.7234%2013.6652%2037.7234%2015.0594%2037.7234%2016.4439%2036.7554%2017.2962%2035.7511%2017.2905zM35.7387%2020.7286C38.8277%2020.7286%2041.3422%2018.3094%2041.3422%2015.0594%2041.3422%2011.7913%2038.826%209.39011%2035.7387%209.39011%2032.6513%209.39011%2030.1351%2011.7913%2030.1351%2015.0594%2030.1351%2018.3102%2032.6587%2020.7286%2035.7387%2020.7286z%22/%3E%3Cpath%20d%3D%22M51.953%2010.4357V9.68573H48.3999V9.80826C47.8499%209.54648%2047.1977%209.38187%2046.4808%209.38187%2043.5971%209.38187%2041.0168%2011.8998%2041.0168%2015.0758%2041.0168%2017.2027%2042.1808%2019.0237%2043.8201%2019.9895L43.7543%2020.0168%2041.8737%2020.797%2041.1808%2021.0844%2041.4684%2021.7772C42.0912%2023.2776%2043.746%2025.1469%2046.5219%2025.1469%2047.9324%2025.1469%2049.3089%2024.7324%2050.3359%2023.7376%2051.3691%2022.7367%2051.953%2021.2411%2051.953%2019.2723v-8.8366zm-7.2194%209.9844L44.7334%2020.4196C45.2886%2020.6201%2045.878%2020.7286%2046.4808%2020.7286%2047.1616%2020.7286%2047.7866%2020.5819%2048.3218%2020.3395%2048.2342%2020.7286%2048.0801%2021.0105%2047.8966%2021.2077%2047.6154%2021.5099%2047.1764%2021.7088%2046.5219%2021.7088%2045.61%2021.7088%2045.0018%2021.0612%2044.7336%2020.4201zM46.6697%2012.8282C47.6419%2012.8282%2048.5477%2013.6765%2048.5477%2015.084%2048.5477%2016.4636%2047.6521%2017.2987%2046.6697%2017.2987%2045.6269%2017.2987%2044.6767%2016.4249%2044.6767%2015.084%2044.6767%2013.7086%2045.6362%2012.8282%2046.6697%2012.8282zM55.7387%205.22083v-.75H52.0788V20.4412H55.7387V5.220829999999999z%22/%3E%3Cpath%20d%3D%22M63.9128%2016.0614L63.2945%2015.6492%2062.8766%2016.2637C62.4204%2016.9346%2061.8664%2017.3069%2061.0741%2017.3069%2060.6435%2017.3069%2060.3146%2017.2088%2060.0544%2017.0447%2059.9844%2017.0006%2059.9161%2016.9496%2059.8498%2016.8911L65.5497%2014.5286%2066.2322%2014.2456%2065.9596%2013.5589%2065.7406%2013.0075C65.2878%2011.8%2063.8507%209.39832%2060.8278%209.39832%2057.8445%209.39832%2055.5034%2011.7619%2055.5034%2015.0676%2055.5034%2018.2151%2057.8256%2020.7369%2061.0659%2020.7369%2063.6702%2020.7369%2065.177%2019.1378%2065.7942%2018.2213L66.2152%2017.5963%2065.5882%2017.1783%2063.9128%2016.0614zM61.3461%2012.8511L59.4108%2013.6526C59.7903%2013.0783%2060.4215%2012.7954%2060.9017%2012.7954%2061.067%2012.7954%2061.2153%2012.8161%2061.3461%2012.8511z%22/%3E%3C/g%3E%3Cpath%20d%3D%22M11.7008%2019.9868C7.48776%2019.9868%203.94818%2016.554%203.94818%2012.341%203.94818%208.12803%207.48776%204.69522%2011.7008%204.69522%2014.0331%204.69522%2015.692%205.60681%2016.9403%206.80583L15.4703%208.27586C14.5751%207.43819%2013.3597%206.78119%2011.7008%206.78119%208.62108%206.78119%206.21482%209.26135%206.21482%2012.341%206.21482%2015.4207%208.62108%2017.9009%2011.7008%2017.9009%2013.6964%2017.9009%2014.8297%2017.0961%2015.5606%2016.3734%2016.1601%2015.7738%2016.5461%2014.9197%2016.6939%2013.7454h-4.9931V11.6512h7.0298C18.8045%2012.0207%2018.8456%2012.4724%2018.8456%2012.957%2018.8456%2014.5255%2018.4186%2016.4637%2017.0389%2017.8434%2015.692%2019.2395%2013.9838%2019.9868%2011.7008%2019.9868z%22%20fill%3D%22%234285F4%22/%3E%3Cpath%20d%3D%22M29.7192%2015.0594C29.7192%2017.8927%2027.5429%2019.9786%2024.8656%2019.9786%2022.1884%2019.9786%2020.0121%2017.8927%2020.0121%2015.0594%2020.0121%2012.2096%2022.1884%2010.1401%2024.8656%2010.1401%2027.5429%2010.1401%2029.7192%2012.2096%2029.7192%2015.0594zM27.5922%2015.0594C27.5922%2013.2855%2026.3274%2012.0782%2024.8656%2012.0782S22.1391%2013.2937%2022.1391%2015.0594C22.1391%2016.8086%2023.4038%2018.0405%2024.8656%2018.0405S27.5922%2016.8168%2027.5922%2015.0594z%22%20fill%3D%22%23E94235%22/%3E%3Cpath%20d%3D%22M40.5922%2015.0594C40.5922%2017.8927%2038.4159%2019.9786%2035.7387%2019.9786%2033.0696%2019.9786%2030.8851%2017.8927%2030.8851%2015.0594%2030.8851%2012.2096%2033.0614%2010.1401%2035.7387%2010.1401%2038.4159%2010.1401%2040.5922%2012.2096%2040.5922%2015.0594zM38.4734%2015.0594C38.4734%2013.2855%2037.2087%2012.0782%2035.7469%2012.0782%2034.2851%2012.0782%2033.0203%2013.2937%2033.0203%2015.0594%2033.0203%2016.8086%2034.2851%2018.0405%2035.7469%2018.0405%2037.2087%2018.0487%2038.4734%2016.8168%2038.4734%2015.0594z%22%20fill%3D%22%23FABB05%22/%3E%3Cpath%20d%3D%22M51.203%2010.4357v8.8366C51.203%2022.9105%2049.0595%2024.3969%2046.5219%2024.3969%2044.132%2024.3969%2042.7031%2022.7955%2042.161%2021.4897L44.0417%2020.7095C44.3784%2021.5143%2045.1997%2022.4588%2046.5219%2022.4588%2048.1479%2022.4588%2049.1499%2021.4487%2049.1499%2019.568V18.8617H49.0759C48.5914%2019.4612%2047.6552%2019.9786%2046.4808%2019.9786%2044.0171%2019.9786%2041.7668%2017.8352%2041.7668%2015.0758%2041.7668%2012.3%2044.0253%2010.1319%2046.4808%2010.1319%2047.6552%2010.1319%2048.5914%2010.6575%2049.0759%2011.2323H49.1499V10.4357H51.203zM49.2977%2015.084C49.2977%2013.3512%2048.1397%2012.0782%2046.6697%2012.0782%2045.175%2012.0782%2043.9267%2013.3429%2043.9267%2015.084%2043.9267%2016.8004%2045.175%2018.0487%2046.6697%2018.0487%2048.1397%2018.0487%2049.2977%2016.8004%2049.2977%2015.084z%22%20fill%3D%22%234285F4%22/%3E%3Cpath%20d%3D%22M54.9887%205.22083V19.6912H52.8288V5.220829999999999H54.9887z%22%20fill%3D%22%2334A853%22/%3E%3Cpath%20d%3D%22M63.4968%2016.6854L65.1722%2017.8023C64.6301%2018.6072%2063.3244%2019.9869%2061.0659%2019.9869%2058.2655%2019.9869%2056.2534%2017.827%2056.2534%2015.0676%2056.2534%2012.1439%2058.2901%2010.1483%2060.8278%2010.1483%2063.3818%2010.1483%2064.6301%2012.1768%2065.0408%2013.2773L65.2625%2013.8357%2058.6843%2016.5623C59.1853%2017.5478%2059.9737%2018.0569%2061.0741%2018.0569%2062.1746%2018.0569%2062.9384%2017.5067%2063.4968%2016.6854zM58.3312%2014.9115L62.7331%2013.0884C62.4867%2012.4724%2061.764%2012.0454%2060.9017%2012.0454%2059.8012%2012.0454%2058.2737%2013.0145%2058.3312%2014.9115z%22%20fill%3D%22%23E94235%22/%3E%3C/svg%3E"/></div>`
  ),
  Fi = f(
    `<div><div class="map-attribution-data-box svelte-ygr3ex"><p class="svelte-ygr3ex"> </p> <p class="svelte-ygr3ex"><a style="text-decoration: none; pointer-events: auto; font-family: Roboto;" href="https://www.google.com/intl/en_US/help/terms_maps/" target="_blank" class="svelte-ygr3ex">Terms</a></p></div> <!></div>`
  );
function Ii(e, t) {
  d(t, !0);
  let r = () => T(dn, `$mapHoveredImmediate`, i),
    [i, o] = re(),
    u = v(t, `forPanorama`, 3, !1);
  var f = Fi();
  let p, h;
  var y = E(f),
    ee = E(y),
    te = ue(ee);
  n(2), g(y);
  var b = m(y, 2),
    x = (e) => {
      var t = Pi();
      _(e, t);
    };
  oe(b, (e) => {
    !u() && !sn.current && e(x);
  }),
    g(f),
    ie(
      (e) => {
        (p = c(f, 1, `map-attribution-container svelte-ygr3ex`, null, p, {
          "panorama-attribution": u(),
          "full-opacity": r() || u(),
        })),
          (h = s(f, ``, h, { bottom: u() || sn.current ? `0` : `56px` })),
          a(te, `${u() ? `© ` : `Map Data ©`}${e ?? ``} Google`);
      },
      [() => new Date().getFullYear()]
    ),
    _(e, f),
    l(),
    o();
}
var Li = f(`<div><!></div>`),
  Ri = f(`<div id="map" role="region" tabindex="0"></div> <!>`, 1);
function zi(n, r) {
  d(r, !0);
  let a = () => T(ln, `$mapExpanded`, b),
    o = () => T(V, `$countryGuessr`, b),
    u = () => T(B, `$resultScreenEnabled`, b),
    f = () => T(Zn, `$inMenu`, b),
    v = () => T(un, `$mapHovered`, b),
    te = () => T(dn, `$mapHoveredImmediate`, b),
    [b, x] = re(),
    ae = i(void 0),
    C,
    le,
    ue = i(`mouse`),
    D = t(() => a() && (!o() || u()) && !f());
  function fe() {
    w(ue) !== `touch` && (clearTimeout(le), un.set(!0), dn.set(!0));
  }
  function pe() {
    w(ue) !== `touch` &&
      (dn.set(!1),
      (le = setTimeout(() => {
        un.set(!1);
      }, 250)));
  }
  se(
    async () => (
      await Promise.all([
        de(
          () => import(`./DDQqcI1E.js`).then((t) => e(t.default)),
          __vite__mapDeps([0, 1]),
          import.meta.url
        ),
        de(() => Promise.resolve({}), __vite__mapDeps([2]), import.meta.url),
      ]),
      Zo(),
      (C = new ResizeObserver(() => S(G)?.invalidateSize())),
      C.observe(w(ae)),
      () => C?.disconnect()
    )
  );
  var he = Ri(),
    O = ee(he);
  let ge, k;
  y(
    O,
    (e) => h(ae, e),
    () => w(ae)
  );
  var _e = m(O, 2),
    ve = (e) => {
      var t = Li();
      Ii(E(t), {}),
        g(t),
        p(
          1,
          t,
          () => me,
          () => ({ duration: 150, delay: 150 })
        ),
        p(
          2,
          t,
          () => me,
          () => ({ duration: u() ? 0 : 50 })
        ),
        _(e, t);
    };
  oe(_e, (e) => {
    !u() && !o() && a() && !f() && e(ve);
  }),
    ie(
      (e) => {
        (ge = c(O, 1, `svelte-13da2aa`, null, ge, {
          "map-full-opacity-result": e,
        })),
          (k = s(O, ``, k, {
            "--size-transition-duration": `150ms`,
            height: w(D)
              ? sn.current || v()
                ? `55dvh`
                : `max(18dvh, 150px)`
              : `0`,
            opacity: te() ? `1` : ``,
          }));
      },
      [() => !!u()]
    ),
    ce(`keyup`, O, (e) => {
      e.key === ` ` && S(ji) && Mi(w(ae)) && (e.stopPropagation(), Ni());
    }),
    ce(`pointerover`, O, (e) => {
      h(ue, e.pointerType, !0);
    }),
    ne(`mouseenter`, O, fe),
    ne(`mouseleave`, O, pe),
    _(n, he),
    l(),
    x();
}
ae([`keyup`, `pointerover`]);
async function Bi(e) {
  try {
    let t = await ii(e);
    if (t?.[0] == null || t?.[1] == null)
      throw Error(`One or both coordinates are null or undefined!`);
    q.set(Number(t[0])),
      J.set(Number(t[1])),
      En.set(t[2]?.heading ?? null),
      Dn.set(t[2]?.pitch ?? null),
      On.set(t[2]?.panoramaId ?? null),
      S(V) && pi(t[2]?.country),
      S(an) && Lr(t[2]?.imageUrl),
      S(on) && Ai(t[2]?.meta);
  } catch (e) {
    console.error(
      `Failed to generate new location, the coordinates are not defined:`,
      e
    ),
      k(
        `Error loading locations`,
        `Failed to retrieve locations from the server.`,
        e.message
      );
  }
  setTimeout(() => {
    S(B) || ns();
  }, 150);
}
var Vi = !1;
function Hi() {
  Vi = !0;
  try {
    let e = fe.url.searchParams
      .get(`play-map`)
      .replaceAll(`-`, ` `)
      .replaceAll(`_`, ` `);
    e &&
      ([
        ...S(it).map((e) => e.map),
        ...S(at).map((e) => e.map),
        ...S(st),
        ...S(ot),
      ].includes(e)
        ? ni(e, { neverRegenerate: !0 })
        : k(
            `Map not available`,
            `Unfortunately, this map doesn't exist. Feel free to search for similar community maps.`,
            `Map not found!`
          ));
  } catch {}
}
var Ui = !1;
function Wi() {
  (Ui = !0), localStorage.getItem(`selectedMap`) == S(rt) && ti(S(P));
}
var Gi = Promise.resolve();
function Ki(e) {
  V.set(!1),
    an.set(!1),
    on.set(!1),
    (S(W) || S(H)) &&
      (e == `Country Guessr` && V.set(!0),
      e == `Meta Guessr` && on.set(!0),
      e == `Image Guessr` && (an.set(!0), Rr(!0)));
}
async function qi(e = !1) {
  return (
    Vi || Hi(),
    Ui || Wi(),
    e || ts(!0),
    (Gi = Gi.then(async () => {
      try {
        Yn.set(!0),
          Ki(S(H) ? S(Ct) : localStorage.getItem(`selectedMap`) || S(P)),
          S(W) && (await Bi(`SINGLEPLAYER`)),
          S(H) && (await Bi(`MULTIPLAYER`)),
          S(U) && Ns() && (await Bi(`COMPETITION`));
      } catch (e) {
        console.error(`Error in location generation queue:`, e);
      }
    })),
    Gi
  );
}
function Ji() {
  return [`playgama`, `qa_tool`].includes(window.bridge?.platform?.id);
}
async function Yi() {
  if (!S(M) && window.bridge?.player?.isAuthorized && Ji())
    try {
      let e = await fetch(S(A) + `/accounts/pg-authenticate`, {
        method: `POST`,
        headers: { "Content-Type": `application/json` },
        body: JSON.stringify({ playgamaData: window.bridge.player.extra }),
      });
      if (!e.ok) {
        let t = await e.json().catch(() => null);
        throw Error(
          t?.error || `Authentication failed with status ${e.status}`
        );
      }
      let t = await e.json();
      localStorage.setItem(`id`, t.id),
        localStorage.setItem(`bearer`, t.token),
        dc();
    } catch (e) {
      console.error(`Error occurred authenticating with Playgama:`, e),
        k(
          `Error authenticating`,
          `An error occurred trying to authenticate with Playgama.`,
          e.message
        );
    }
}
var Xi;
async function Zi() {
  if (Xi) return { granted: !1, error: `Already showing ad.` };
  if (!window.bridge?.advertisement?.isRewardedSupported)
    return { granted: !0, error: null };
  try {
    await new Promise((e, t) => {
      (Xi = { resolve: e, reject: t }),
        window.bridge.advertisement.showRewarded(`free_tokens`);
    });
  } catch (e) {
    return (
      console.error(`Error showing Playgama rewarded ad:`, e),
      { granted: !1, error: e.message }
    );
  } finally {
    Xi = null;
  }
  return window.bridge?.advertisement?.rewardedPlacement === `free_tokens`
    ? { granted: !0, error: null }
    : { granted: !1, error: null };
}
function Qi(e, t) {
  d(t, !1),
    se(async () => {
      try {
        if (fe.url.searchParams.get(`playgama`)) {
          N.set(!0),
            await new Promise((e, t) => {
              let n = document.createElement(`script`);
              (n.src = `https://bridge.playgama.com/v2/stable/playgama-bridge.js`),
                (n.onload = () => {
                  e();
                }),
                (n.onerror = t),
                document.head.appendChild(n);
            }),
            await window.bridge.initialize({
              configFilePath: `/playgama-bridge-config.json`,
            }),
            await window.bridge.platform
              .sendMessage(`game_ready`)
              .catch((e) =>
                console.error(`Error emitting Playgama game_ready:`, e)
              );
          function e() {
            let { _audioStateAggregator: e, _pauseStateAggregator: t } =
                window.bridge.platform._platformBridge ?? {},
              n = [`interstitial`, `rewarded`, `platform`, `rate`].some(
                (n) => e?.getState(n) || t?.getState(n)
              );
            Se(!document.hasFocus() || n);
          }
          window.bridge.platform.on(
            window.bridge.EVENT_NAME.PAUSE_STATE_CHANGED,
            e
          ),
            window.bridge.platform.on(
              window.bridge.EVENT_NAME.AUDIO_STATE_CHANGED,
              e
            ),
            setInterval(e, 500),
            e(),
            Yi(),
            window.bridge.advertisement.on(
              window.bridge.EVENT_NAME.REWARDED_STATE_CHANGED,
              (e) => {
                switch (e) {
                  case `closed`:
                    Xi?.reject(Error(`Dismissed.`));
                    break;
                  case `rewarded`:
                    Xi?.resolve();
                    break;
                  case `failed`:
                    Xi?.reject(Error(`An error occurred.`));
                }
              }
            );
        }
      } catch (e) {
        console.error(`Error loading and starting Playgama Bridge SDK:`, e);
      }
    }),
    le(),
    l();
}
async function $i(e = () => {}) {
  switch ((Le.set(e), !0)) {
    case S(Re):
      try {
        await window.CrazyGames.SDK.user.showAuthPrompt();
      } catch (e) {
        console.error(`Error showing CrazyGames login:`, e);
      }
      break;
    case S(ze):
      try {
        await window.Y8SDK.login();
      } catch (e) {
        console.error(`Error showing Y8 login:`, e);
      }
      break;
    case S(N) && Ji():
      try {
        await window.bridge.player.authorize(), await Yi();
      } catch (e) {
        console.error(`Error showing Playgama login:`, e);
      }
      break;
    default:
      $n.set(!0);
  }
}
var ea = {
  "division-duel": { teamAmount: 1, roundAmount: 5 },
  "team-duel": { teamAmount: 2, roundAmount: 5 },
};
async function ta() {
  let e = S(z);
  if (!e) return k(`Failed to cancel`, `The room hasn't been created yet.`);
  try {
    let t = await fetch(S(A) + `/matchmaking/delete-room/` + e, {
      method: `DELETE`,
      headers: { "Content-Type": `application/json` },
      body: JSON.stringify({ clientId: S(F)?.id, clientToken: S(ct) }),
    });
    if (!t.ok) throw Error(t.status);
    if (!(await t.json()).removed) {
      bt.set(`Room not in matchmaking, cannot cancel.`);
      return;
    }
  } catch (e) {
    console.warn(`Failed to remove room from matchmaking queue:`, e),
      bt.set(`Failed to cancel: ` + (e?.message || e));
    return;
  }
}
function na() {
  let e = async () => {
    if (S(H))
      return k(
        `Already in multiplayer`,
        `Finding a duel is only possible outside of multiplayer.`
      );
    D(`/multiplayer/duel`),
      R.set(!0),
      (await ca(ea[`division-duel`])) && (await la(`division-duel`));
  };
  S(M) ? e() : $i(e);
}
async function ra() {
  try {
    let e = await fetch(S(A) + `/matchmaking/abandon-division-duel`, {
      method: `POST`,
      headers: {
        "Content-Type": `application/json`,
        Authorization: `Bearer ` + localStorage.getItem(`bearer`),
      },
      body: JSON.stringify({ code: S(z), id: localStorage.getItem(`id`) }),
    });
    if (!e.ok) {
      let t = await e
        .json()
        .then((e) => e.error)
        .catch(() => {});
      throw Error(t ?? e.status);
    }
  } catch (e) {
    console.error(`Error abandoning division duel:`, e),
      k(
        `Failed to abandon duel`,
        `An error occurred trying to abandon the division duel.`,
        e.message
      );
  }
}
function ia() {
  return D(`/multiplayer/team-duel`), ca(ea[`team-duel`]);
}
async function aa() {
  S(R) || (R.set(!0), (await la(`team-duel`)) && ua());
}
async function oa() {
  try {
    let e = await fetch(S(A) + `/matchmaking/prepare-move-team-duel-teammate`, {
      method: `POST`,
      headers: { "Content-Type": `application/json` },
      body: JSON.stringify({
        currentCode: S(z),
        clientId: S(F)?.id,
        clientToken: S(ct),
      }),
    });
    if (e.ok) {
      let t = await e.json();
      return (
        t.create &&
          (Io(),
          _t.set(!0),
          (await ia()) && (await sa(t.moveKey, t.moveToken, S(z))),
          _t.set(!1)),
        !0
      );
    }
    {
      let t = await e
        .json()
        .then((e) => e.error)
        .catch(() => {});
      throw Error(t ?? e.status);
    }
  } catch (e) {
    return (
      console.error(
        `Error preparing team duel teammate move for play another:`,
        e
      ),
      _e(e.message),
      _t.set(!1),
      !1
    );
  }
}
async function sa(e, t, n) {
  try {
    let r = await fetch(S(A) + `/matchmaking/perform-move-team-duel-teammate`, {
      method: `POST`,
      headers: { "Content-Type": `application/json` },
      body: JSON.stringify({ moveKey: e, moveToken: t, newRoomCode: n }),
    });
    if (r.ok) aa();
    else {
      let e = await r
        .json()
        .then((e) => e.error)
        .catch(() => {});
      throw Error(e ?? r.status);
    }
  } catch (e) {
    console.error(
      `Error performing team duel teammate move for play another:`,
      e
    ),
      _e(e.message);
  }
}
function ca(e) {
  return !e || !e.roundAmount || e.teamAmount == null
    ? console.error(`Provided room options are lacking:`, JSON.stringify(e))
    : (ft.set(`duel`),
      ut.set(60),
      I.set(e.teamAmount),
      lt.set(e.roundAmount),
      pt.set(!0),
      Po(!0));
}
async function la(e) {
  bt.set(`Submitting code...`);
  let t = await da(e);
  return t
    ? (t.eloRange && gt.set({ ...t.eloRange, receivedAt: Date.now() }),
      mt.set(!0),
      bt.set(`Waiting for players...`),
      !0)
    : (R.set(!1), Io(), !1);
}
async function ua() {
  try {
    let e = await fetch(S(A) + `/matchmaking/find-team-duel`, {
      method: `POST`,
      headers: { "Content-Type": `application/json` },
      body: JSON.stringify({ code: S(z), clientToken: S(ct) }),
    });
    if (!e.ok) throw Error(e.status);
  } catch (e) {
    if (!S(R)) return;
    Io(),
      console.error(`Error finding match:`, e),
      k(
        `Failed to find a team duel`,
        `An error occurred finding a team duel.`,
        e.message
      );
  }
}
async function da(e) {
  if (!e)
    return (
      console.error(`Room type must be specified for submitting a code!`), !1
    );
  try {
    if (S(z) == null)
      return (
        console.warn(`Room code not loaded, not sending room code to server.`),
        !1
      );
    let t = { clientId: S(F)?.id, clientToken: S(ct), type: e };
    localStorage.getItem(`id`) != null && (t.id = localStorage.getItem(`id`));
    let n = { "Content-Type": `application/json` };
    localStorage.getItem(`bearer`) &&
      (n.Authorization = `Bearer ` + localStorage.getItem(`bearer`));
    let r = await fetch(S(A) + `/matchmaking/submit-room/` + S(z), {
      method: `POST`,
      headers: n,
      body: JSON.stringify(t),
    });
    if (!r.ok) throw Error(r.status);
    return await r.json();
  } catch (e) {
    return (
      console.error(`Failed sending room code to server: `, e),
      k(
        `Failed to submit code`,
        `Failed to submit the room code, which is needed for matchmaking.`,
        e.message
      ),
      !1
    );
  }
}
async function fa(e, t, n = !1) {
  try {
    let r = await fetch(S(A) + `/matchmaking/set-elo-range/` + S(z), {
      method: `POST`,
      headers: { "Content-Type": `application/json` },
      body: JSON.stringify({
        clientId: S(F)?.id,
        clientToken: S(ct),
        lower: e,
        upper: t,
        paused: n,
      }),
    });
    if (!r.ok) throw Error(r.status);
  } catch (e) {
    console.error(`Failed to set matchmaking range:`, e),
      k(
        `Failed to set range`,
        `An error occurred setting the elo matchmaking range.`,
        e.message
      );
  }
}
async function pa() {
  try {
    let e = await fetch(S(A) + `/matchmaking/all-rooms-of-type/open-room`);
    if (e.ok) return (await e.json()) || [];
    console.error(`Failed to load open rooms: ` + e.status);
  } catch (e) {
    console.error(`Failed to load open rooms (Network): `, e);
  }
}
var ma = [
    `anal`,
    `anus`,
    `ass`,
    `asshole`,
    `assholes`,
    `asshat`,
    `asshead`,
    `asswipe`,
    `bastard`,
    `bastards`,
    `bitch`,
    `bitches`,
    `bitchy`,
    `blowjob`,
    `blowjobs`,
    `bollocks`,
    `bong`,
    `boner`,
    `boob`,
    `boobs`,
    `booty`,
    `breast`,
    `breasts`,
    `bugger`,
    `bullshit`,
    `bunghole`,
    `butthole`,
    `buttfuck`,
    `cameltoe`,
    `camel toe`,
    `circlejerk`,
    `clit`,
    `clitoris`,
    `cock`,
    `cocksucker`,
    `cocksucking`,
    `cocks`,
    `condom`,
    `cornhole`,
    `crap`,
    `cum`,
    `cumming`,
    `cumshot`,
    `cunt`,
    `cunts`,
    `deepthroat`,
    `deep throat`,
    `dick`,
    `dickhead`,
    `dicks`,
    `dildo`,
    `dildos`,
    `dipshit`,
    `douche`,
    `douchebag`,
    `dumbass`,
    `dumbfuck`,
    `dumbshit`,
    `fag`,
    `faggot`,
    `fags`,
    `fatass`,
    `felch`,
    `felching`,
    `fellatio`,
    `fingering`,
    `fisting`,
    `fuck`,
    `fucked`,
    `fucker`,
    `fuckers`,
    `fucking`,
    `fucks`,
    `fuckface`,
    `fuckhead`,
    `fuckoff`,
    `fudgepacker`,
    `gangbang`,
    `gay`,
    `genitals`,
    `gook`,
    `handjob`,
    `hentai`,
    `hitler`,
    `homo`,
    `hooker`,
    `hump`,
    `humping`,
    `incest`,
    `intercourse`,
    `jackass`,
    `jackoff`,
    `jerk`,
    `jerkoff`,
    `jigaboo`,
    `jizz`,
    `kike`,
    `lesbian`,
    `lesbians`,
    `masturbate`,
    `masturbating`,
    `masturbation`,
    `milf`,
    `mofo`,
    `motherfucker`,
    `motherfucking`,
    `murder`,
    `naked`,
    `nazi`,
    `negro`,
    `nigga`,
    `nigger`,
    `niggers`,
    `nipple`,
    `nipples`,
    `nude`,
    `nudity`,
    `nutsack`,
    `nympho`,
    `oral`,
    `orgasm`,
    `orgasmic`,
    `orgasms`,
    `orgy`,
    `pecker`,
    `penis`,
    `piss`,
    `pissed`,
    `pisser`,
    `pissing`,
    `porn`,
    `porno`,
    `pornography`,
    `prostitute`,
    `pussy`,
    `queer`,
    `queers`,
    `rape`,
    `raped`,
    `raping`,
    `rapist`,
    `reefer`,
    `retard`,
    `retarded`,
    `rimjob`,
    `schlong`,
    `semen`,
    `sex`,
    `sexual`,
    `shit`,
    `shits`,
    `shithead`,
    `shitty`,
    `skank`,
    `slut`,
    `sluts`,
    `smegma`,
    `snatch`,
    `sodomy`,
    `sperm`,
    `spunk`,
    `testicle`,
    `testicles`,
    `threesome`,
    `tit`,
    `tits`,
    `titty`,
    `tosser`,
    `towelhead`,
    `tranny`,
    `turd`,
    `twat`,
    `vagina`,
    `viagra`,
    `vibrator`,
    `vulva`,
    `wang`,
    `wank`,
    `wanker`,
    `weed`,
    `wetback`,
    `wh0re`,
    `whore`,
    `whores`,
    `wigger`,
    `a_s_s`,
    `a55hole`,
    `ahole`,
    `ar5e`,
    `arsehole`,
    `assclown`,
    `asscock`,
    `asscracker`,
    `asses`,
    `assface`,
    `assh0le`,
    `assho1e`,
    `asslick`,
    `asslicker`,
    `assmonkey`,
    `assmunch`,
    `assmuncher`,
    `assnigger`,
    `asspirate`,
    `assshole`,
    `asssucker`,
    `asswad`,
    `asswhole`,
    `asswipes`,
    `b!tch`,
    `b00bs`,
    `b17ch`,
    `b1tch`,
    `ballsack`,
    `bastardo`,
    `beeyotch`,
    `bellend`,
    `beotch`,
    `bi+ch`,
    `biatch`,
    `bimbo`,
    `bitchass`,
    `bitchers`,
    `bitchin`,
    `bitching`,
    `bitchtits`,
    `boners`,
    `boobies`,
    `booby`,
    `booger`,
    `booob`,
    `booobs`,
    `boooobs`,
    `booooobs`,
    `booooooobs`,
    `bootee`,
    `bootie`,
    `bosom`,
    `bosomy`,
    `bukake`,
    `bukkake`,
    `bulldyke`,
    `bullshits`,
    `bullshitted`,
    `bullturds`,
    `bumblefuck`,
    `buttcheeks`,
    `buttfucka`,
    `buttfucker`,
    `buttmuch`,
    `buttplug`,
    `c.0.c.k`,
    `c.o.c.k.`,
    `c.u.n.t`,
    `c0ck`,
    `c-0-c-k`,
    `c0cksucker`,
    `camgirl`,
    `cervix`,
    `chesticle`,
    `cl1t`,
    `climax`,
    `clitface`,
    `clitfuck`,
    `clitorus`,
    `clits`,
    `clitty`,
    `clusterfuck`,
    `cocain`,
    `cocaine`,
    `c-o-c-k`,
    `cockass`,
    `cockburger`,
    `cockeye`,
    `cockface`,
    `cockfucker`,
    `cockjockey`,
    `cockknocker`,
    `cockknoker`,
    `cocklump`,
    `cockmaster`,
    `cockmongler`,
    `cockmongruel`,
    `cocknose`,
    `cockshit`,
    `cocksmith`,
    `cocksmoke`,
    `cocksmoker`,
    `cocksniffer`,
    `cocksuck`,
    `cocksucked`,
    `cock-sucker`,
    `cocksucks`,
    `cocksuka`,
    `cocksukka`,
    `cockwaffle`,
    `cokmuncher`,
    `coksucka`,
    `coochie`,
    `corksucker`,
    `crackwhore`,
    `creampie`,
    `cumbubble`,
    `cumdumpster`,
    `cumguzzler`,
    `cumjockey`,
    `cummer`,
    `cummin`,
    `cumshots`,
    `cumslut`,
    `cumstain`,
    `cumtart`,
    `cunilingus`,
    `cunillingus`,
    `cunnie`,
    `cunnilingus`,
    `cunny`,
    `c-u-n-t`,
    `cuntass`,
    `cuntface`,
    `cunthole`,
    `cunthunter`,
    `cuntlick`,
    `cuntlicker`,
    `cuntlicking`,
    `cuntrag`,
    `cuntslut`,
    `cyalis`,
    `cyberfuc`,
    `cyberfuck`,
    `cyberfucked`,
    `cyberfucker`,
    `cyberfuckers`,
    `cyberfucking`,
    `d0uche`,
    `d1ck`,
    `d1ld0`,
    `d1ldo`,
    `darkie`,
    `daterape`,
    `dickbag`,
    `dickbeaters`,
    `dickdipper`,
    `dickface`,
    `dickflipper`,
    `dickfuck`,
    `dickfucker`,
    `dickheads`,
    `dickhole`,
    `dickish`,
    `dickjuice`,
    `dickmilk`,
    `dickmonger`,
    `dickripper`,
    `dicksipper`,
    `dickslap`,
    `dick-sneeze`,
    `dicksuck`,
    `dicksucker`,
    `dicksucking`,
    `dicktickler`,
    `dickwad`,
    `dickweasel`,
    `dickweed`,
    `dickwhipper`,
    `dickwod`,
    `dickzipper`,
    `diddle`,
    `diligaf`,
    `dillweed`,
    `dimwit`,
    `dingle`,
    `dingleberries`,
    `dingleberry`,
    `dink`,
    `dinks`,
    `dipship`,
    `doochbag`,
    `doofus`,
    `dookie`,
    `dopey`,
    `douchebags`,
    `douche-fag`,
    `douchewaffle`,
    `douchey`,
    `drunk`,
    `dumass`,
    `dumbasses`,
    `dumbcunt`,
    `dummy`,
    `dumshit`,
    `ejaculate`,
    `ejaculated`,
    `ejaculates`,
    `ejaculating`,
    `ejaculatings`,
    `ejaculation`,
    `ejakulate`,
    `enlargement`,
    `erect`,
    `erection`,
    `erotic`,
    `erotism`,
    `escort`,
    `essohbee`,
    `eunuch`,
    `extacy`,
    `extasy`,
    `f u c k`,
    `f u c k e r`,
    `f.u.c.k`,
    `f_u_c_k`,
    `f4nny`,
    `fack`,
    `fagbag`,
    `fagfucker`,
    `fagg`,
    `fagged`,
    `fagging`,
    `faggit`,
    `faggitt`,
    `faggotcock`,
    `faggs`,
    `fagot`,
    `fagots`,
    `fagtard`,
    `fannybandit`,
    `fannyflaps`,
    `fannyfucker`,
    `fanyy`,
    `fartknocker`,
    `fcuk`,
    `fcuker`,
    `fcuking`,
    `fecal`,
    `feck`,
    `fecker`,
    `felcher`,
    `fellate`,
    `feltch`,
    `feltcher`,
    `fingerbang`,
    `fingerfuck`,
    `fingerfucked`,
    `fingerfucker`,
    `fingerfuckers`,
    `fingerfucking`,
    `fingerfucks`,
    `fisted`,
    `fistfuck`,
    `fistfucked`,
    `fistfucker`,
    `fistfuckers`,
    `fistfucking`,
    `fistfuckings`,
    `fistfucks`,
    `fisty`,
    `flamer`,
    `flange`,
    `floozy`,
    `foad`,
    `foah`,
    `fondle`,
    `foobar`,
    `fook`,
    `fooker`,
    `footjob`,
    `foreskin`,
    `freex`,
    `frigg`,
    `frigga`,
    `fubar`,
    `f-u-c-k`,
    `fucka`,
    `fuckass`,
    `fuckbag`,
    `fuckboy`,
    `fuckbrain`,
    `fuckbutt`,
    `fuckbutter`,
    `fuckersucker`,
    `fuckheads`,
    `fuckhole`,
    `fuckin`,
    `fuckings`,
    `fuckingshitmotherfucker`,
    `fuckme`,
    `fucknugget`,
    `fucknut`,
    `fucknutt`,
    `fuckstick`,
    `fucktard`,
    `fuck-tard`,
    `fucktards`,
    `fucktart`,
    `fucktwat`,
    `fuckup`,
    `fuckwad`,
    `fuckwhit`,
    `fuckwit`,
    `fuckwitt`,
    `fuker`,
    `fukker`,
    `fukkin`,
    `fuks`,
    `fukwhit`,
    `fukwit`,
    `fux0r`,
    `fvck`,
    `fxck`,
    `gangbanged`,
    `gangbangs`,
    `ganja`,
    `gayass`,
    `gaybob`,
    `gaydo`,
    `gayfuck`,
    `gayfuckist`,
    `gaylord`,
    `gaysex`,
    `gaytard`,
    `gaywad`,
    `goatcx`,
    `goatse`,
    `gonad`,
    `gonads`,
    `gooch`,
    `goodpoop`,
    `gooks`,
    `gringo`,
    `grope`,
    `gspot`,
    `g-spot`,
    `guido`,
    `h0m0`,
    `h0mo`,
    `handjob`,
    `hardcoresex`,
    `he11`,
    `hemp`,
    `heroin`,
    `hom0`,
    `homodumbshit`,
    `homoerotic`,
    `hookah`,
    `hootch`,
    `hore`,
    `hotsex`,
    `humped`,
    `hussy`,
    `hymen`,
    `inbred`,
    `jackhole`,
    `jack off`,
    `jaggi`,
    `jagoff`,
    `jailbait`,
    `jerk off`,
    `jerk0ff`,
    `jerkass`,
    `jerked`,
    `jerk-off`,
    `jiggaboo`,
    `jiggerboo`,
    `jizzed`,
    `juggs`,
    `junglebunny`,
    `junkie`,
    `junky`,
    `kawk`,
    `kikes`,
    `kinky`,
    `knobbing`,
    `knobead`,
    `knobed`,
    `knobend`,
    `knobhead`,
    `knobjocky`,
    `knobjokey`,
    `kock`,
    `kondum`,
    `kondums`,
    `kooch`,
    `kooches`,
    `kootch`,
    `l3i+ch`,
    `l3itch`,
    `labia`,
    `lameass`,
    `lardass`,
    `lech`,
    `leper`,
    `lesbo`,
    `lesbos`,
    `lezbo`,
    `lezbos`,
    `lezzie`,
    `lezzies`,
    `lezzy`,
    `loins`,
    `lolita`,
    `lovemaking`,
    `lust`,
    `lusting`,
    `lusty`,
    `m45terbate`,
    `ma5terb8`,
    `ma5terbate`,
    `masochist`,
    `masterb8`,
    `masterbat`,
    `masterbat3`,
    `masterbate`,
    `master-bate`,
    `masterbating`,
    `masterbation`,
    `masterbations`,
    `menstruate`,
    `menstruation`,
    `m-fucking`,
    `moolie`,
    `moron`,
    `mothafuck`,
    `mothafucka`,
    `mothafuckas`,
    `mothafuckaz`,
    `mothafucked`,
    `mothafucker`,
    `mothafuckers`,
    `mothafuckin`,
    `mothafucking`,
    `mothafuckings`,
    `mothafucks`,
    `motherfuck`,
    `motherfucka`,
    `motherfucked`,
    `motherfuckers`,
    `motherfuckin`,
    `motherfuckings`,
    `motherfuckka`,
    `motherfucks`,
    `mtherfucker`,
    `mthrfucker`,
    `mthrfucking`,
    `muffdiver`,
    `muffdiving`,
    `muthafecker`,
    `muthafuckaz`,
    `muthafucker`,
    `muthafuckker`,
    `muther`,
    `mutherfucker`,
    `mutherfucking`,
    `muthrfucking`,
    `n1gga`,
    `n1gger`,
    `nambla`,
    `nappy`,
    `nazism`,
    `neonazi`,
    `nigaboo`,
    `nigg3r`,
    `nigg4h`,
    `niggah`,
    `niggas`,
    `niggaz`,
    `niggle`,
    `niglet`,
    `nimrod`,
    `ninny`,
    `nobhead`,
    `nobjocky`,
    `nobjokey`,
    `numbnuts`,
    `nymphomania`,
    `opiate`,
    `opium`,
    `orally`,
    `organ`,
    `orgasim`,
    `orgasims`,
    `orgies`,
    `ovary`,
    `ovum`,
    `ovums`,
    `p0rn`,
    `paddy`,
    `paedophile`,
    `panooch`,
    `pantie`,
    `panties`,
    `panty`,
    `pastie`,
    `pasty`,
    `peckerhead`,
    `pedo`,
    `pedobear`,
    `pedophile`,
    `pedophilia`,
    `pedophiliac`,
    `pegging`,
    `penetrate`,
    `penetration`,
    `penile`,
    `penisbanger`,
    `penisfucker`,
    `penispuffer`,
    `perversion`,
    `peyote`,
    `phallic`,
    `phonesex`,
    `phuck`,
    `phuk`,
    `phuked`,
    `phuking`,
    `phukked`,
    `phukking`,
    `phuks`,
    `pigfucker`,
    `pillowbiter`,
    `pimp`,
    `pimpis`,
    `pinko`,
    `pissers`,
    `pisses`,
    `pissflaps`,
    `pissin`,
    `pissoff`,
    `piss-off`,
    `pisspig`,
    `playboy`,
    `polack`,
    `polesmoker`,
    `pollock`,
    `poof`,
    `poon`,
    `poopchute`,
    `poopuncher`,
    `porchmonkey`,
    `pornos`,
    `potty`,
    `pubic`,
    `pubis`,
    `punanny`,
    `punany`,
    `punkass`,
    `punky`,
    `punta`,
    `pusse`,
    `pussi`,
    `pussies`,
    `pussylicking`,
    `pussypounder`,
    `pussys`,
    `queaf`,
    `queef`,
    `queerbait`,
    `queerhole`,
    `queero`,
    `quicky`,
    `quim`,
    `raghead`,
    `raper`,
    `raunch`,
    `rectal`,
    `rectum`,
    `rectus`,
    `reetard`,
    `rimjaw`,
    `rimming`,
    `ritard`,
    `rtard`,
    `r-tard`,
    `rump`,
    `rumprammer`,
    `ruski`,
    `sadism`,
    `sadist`,
    `sandnigger`,
    `scantily`,
    `scat`,
    `scissoring`,
    `scroat`,
    `scrog`,
    `scrot`,
    `scrote`,
    `scrotum`,
    `scrud`,
    `scum`,
    `seamen`,
    `seduce`,
    `sexo`,
    `sh!+`,
    `sh!t`,
    `sh1t`,
    `shag`,
    `shagger`,
    `shaggin`,
    `shagging`,
    `shamedame`,
    `shemale`,
    `shitass`,
    `shitbag`,
    `shitbagger`,
    `shitblimp`,
    `shitbrains`,
    `shitbreath`,
    `shitcanned`,
    `shitcunt`,
    `shitdick`,
    `shite`,
    `shiteater`,
    `shited`,
    `shitey`,
    `shitface`,
    `shitfaced`,
    `shitfuck`,
    `shitfull`,
    `shithole`,
    `shithouse`,
    `shiting`,
    `shitings`,
    `shitspitter`,
    `shitstain`,
    `shitt`,
    `shitted`,
    `shitter`,
    `shitters`,
    `shittiest`,
    `shitting`,
    `shittings`,
    `shiz`,
    `shiznit`,
    `sissy`,
    `skag`,
    `skeet`,
    `skullfuck`,
    `slag`,
    `slanteye`,
    `slave`,
    `sleaze`,
    `sleazy`,
    `slutbag`,
    `slutdumper`,
    `slutkiss`,
    `snuff`,
    `sodom`,
    `sodomize`,
    `son-of-a-bitch`,
    `souse`,
    `soused`,
    `splooge`,
    `spooge`,
    `spook`,
    `steamy`,
    `stfu`,
    `stiffy`,
    `stoned`,
    `strapon`,
    `strip`,
    `stroke`,
    `stupid`,
    `suckass`,
    `sucked`,
    `sucking`,
    `suckmydick`,
    `sumofabiatch`,
    `swastika`,
    `swinger`,
    `t1tt1e5`,
    `t1tties`,
    `tawdry`,
    `teabagging`,
    `teets`,
    `testes`,
    `testical`,
    `testis`,
    `throating`,
    `thrust`,
    `thug`,
    `thundercunt`,
    `tinkle`,
    `titfuck`,
    `titt`,
    `tittie5`,
    `tittiefucker`,
    `titties`,
    `tittyfuck`,
    `tittyfucker`,
    `tittywank`,
    `titwank`,
    `toots`,
    `topless`,
    `tramp`,
    `transsexual`,
    `tush`,
    `tushy`,
    `tw4t`,
    `twathead`,
    `twatlips`,
    `twats`,
    `twatty`,
    `twatwaffle`,
    `twink`,
    `twinkie`,
    `unclefucker`,
    `undies`,
    `undressing`,
    `unwed`,
    `upskirt`,
    `urinal`,
    `urine`,
    `uterus`,
    `v14gra`,
    `v1gra`,
    `vajayjay`,
    `valium`,
    `vixen`,
    `vodka`,
    `voyeur`,
    `vulgar`,
    `w00se`,
    `wankjob`,
    `wanky`,
    `wazoo`,
    `wedgie`,
    `weenie`,
    `weewee`,
    `weiner`,
    `wench`,
    `wh0reface`,
    `whitey`,
    `whiz`,
    `whoralicious`,
    `whorealicious`,
    `whorebag`,
    `whored`,
    `whoreface`,
    `whorehopper`,
    `whorehouse`,
    `whoring`,
    `willies`,
    `willy`,
    `womb`,
    `woody`,
    `xrated`,
    `x-rated`,
    `yeasty`,
    `yobbo`,
    `(ock`,
    `[ock`,
    `@rse`,
    `@rsehol`,
    `<u*t`,
    `<unt`,
    `<unt's`,
    `<vnt`,
    `<vnts`,
    `a$$hole`,
    `a$$hole$`,
    `a$$holes`,
    `a.rse`,
    `a+*hole`,
    `ar$ehole`,
    `ar$hole`,
    `ar$holes`,
    `ar5h0le`,
    `ar5h0les`,
    `ars3`,
    `arse hole`,
    `arseh0le`,
    `arseh0les`,
    `arseho`,
    `arsehol`,
    `arseholes`,
    `arsewipe`,
    `arsh0le`,
    `arshole`,
    `arsholes`,
    `ashole`,
    `ass h0le`,
    `assh0les`,
    `b.astard`,
    `b.ollocks`,
    `b.ugger`,
    `b@st@rd`,
    `b@st@rds`,
    `b00tha`,
    `b00thas`,
    `b0ll0cks`,
    `b0llocks`,
    `b3llend`,
    `basterd`,
    `basyard`,
    `basyards`,
    `batty boy`,
    `batty&nbsp;boi`,
    `batty&nbsp;boy`,
    `beef curtains`,
    `bell end`,
    `bin dippers`,
    `bin-dippers`,
    `bo11ocks`,
    `boabie sooking`,
    `boaby sooking`,
    `boll0cks`,
    `bolocks`,
    `bolox`,
    `bootha`,
    `boothas`,
    `bum bandit`,
    `bum hole`,
    `bumbandit`,
    `bum-bandit`,
    `bumh0l3`,
    `bumh0le`,
    `bumhol3`,
    `bumhole`,
    `c#nt`,
    `c&nbsp;u&nbsp;n&nbsp;t`,
    `c* nt`,
    `c00n`,
    `c0cksucka`,
    `cahnt`,
    `cahnts`,
    `clunge`,
    `cnuts`,
    `co(k`,
    `coc&nbsp;k`,
    `cocksucka`,
    `cocksuckers`,
    `cripple`,
    `cunting`,
    `cunt's`,
    `d1ck!`,
    `d1ckh@ed`,
    `dick&nbsp;head`,
    `dumbfucker`,
    `dxxkhead`,
    `ethnics`,
    `f ck`,
    `fu ck`,
    `f###`,
    `f##k`,
    `f##king`,
    `f#cked`,
    `f$cks`,
    `f()()k`,
    `f()()ker`,
    `f()()king`,
    `f*#kin'`,
    `f*&k`,
    `f*&k!ng`,
    `f.o.a.d`,
    `f.o.a.d.`,
    `f.u.c.k.`,
    `f.uck`,
    `f@gs`,
    `f[_]cker`,
    `f[_]cking`,
    `f^^k`,
    `f^^ked`,
    `f^^ker`,
    `f^^king`,
    `f^ck`,
    `f^cker`,
    `f^cking`,
    `f__kin`,
    `f__king`,
    `f<uk`,
    `f>>k`,
    `f00k`,
    `fackin`,
    `facking`,
    `f4ggot`,
    `f4gg0t`,
    `fagg0t`,
    `f'ck`,
    `fck&nbsp;ing`,
    `fck1ng`,
    `fckeud`,
    `fckin`,
    `fcking`,
    `fcks`,
    `fckw1t`,
    `fckwit`,
    `fcuked`,
    `feckin`,
    `fecking`,
    `f---ed`,
    `fekking`,
    `felched`,
    `feltching`,
    `fkin`,
    `fking`,
    `flucknuts`,
    `fo0ked`,
    `f-o-a-d`,
    `fookd`,
    `fooked`,
    `fu(k`,
    `fu(ker`,
    `fu(kers`,
    `fu.ck`,
    `fu@k`,
    `fu@ker`,
    `f-uck`,
    `fúck`,
    `fúçk`,
    `fùck`,
    `fûck`,
    `fück`,
    `fúcking`,
    `fuckinghell`,
    `fuckk`,
    `fuckw1t`,
    `fuck-wit`,
    `fuckwits`,
    `fukced`,
    `fuked`,
    `fukin`,
    `fuking`,
    `fukk`,
    `fukked`,
    `fukking`,
    `fvck-up`,
    `fvckw1t`,
    `fvckwit`,
    `gang-bang`,
    `gash`,
    `gayhole`,
    `girlie-gardening`,
    `gas chamber`,
    `ities`,
    `kaf1r`,
    `kaff1r`,
    `kaffir`,
    `kaffirs`,
    `kafir`,
    `kafirs`,
    `kafr`,
    `kants`,
    `khunt`,
    `knobber`,
    `kuffar`,
    `m.inge`,
    `m.otherf.ucker`,
    `mofuccer`,
    `mofucker`,
    `mofuckers`,
    `mofucking`,
    `mofukcer`,
    `mohterfuccer`,
    `mohterfuccers`,
    `mohterfuck`,
    `mohterfucker`,
    `mohterfuckers`,
    `mohterfucking`,
    `mohterfucks`,
    `mohterfuk`,
    `mohterfukcer`,
    `mohterfukcers`,
    `mohterfuking`,
    `mohterfuks`,
    `moterfuccer`,
    `moterfuck`,
    `moterfucker`,
    `moterfuckers`,
    `moterfucking`,
    `moterfucks`,
    `mothafuccer`,
    `motha-fucka`,
    `mother f---ers`,
    `motherfuccer`,
    `motherfuccers`,
    `motherfukkker`,
    `mthafukcas`,
    `muff-diver`,
    `muff-diving`,
    `muffs`,
    `niga`,
    `nignog`,
    `nig-nog`,
    `p@ki`,
    `p@kis`,
    `p00f`,
    `p00fs`,
    `p00fter`,
    `p00fters`,
    `paedo`,
    `paedophiles`,
    `peado`,
    `peadofile`,
    `peadofiles`,
    `peedo`,
    `peedofile`,
    `peedofiles`,
    `peedophile`,
    `peedophiles`,
    `peedos`,
    `penchod`,
    `penchods`,
    `phanny`,
    `phucks`,
    `pillow biter`,
    `pillow-biter`,
    `piss off`,
    `ponce`,
    `poo stabber`,
    `poo stabbers`,
    `poofs`,
    `poofter`,
    `pr!ck`,
    `pr!ck.`,
    `pr1ck`,
    `pr1ck!`,
    `pr1cks`,
    `pr1cks!`,
    `pu$$y`,
    `ragheads`,
    `ret@rd`,
    `rim job`,
    `s.hit`,
    `s1ut`,
    `shirtlifter`,
    `shirtlifters`,
    `shitstabber`,
    `shitstabbers`,
    `spastic`,
    `spit roasting`,
    `spitroast`,
    `spit-roast`,
    `spit-roasting`,
    `spunking`,
    `t0$$er`,
    `t0sser`,
    `t0ssers`,
    `tea-bagging`,
    `towel head`,
    `tw at`,
    `tw@`,
    `tw@t`,
    `tw@ts`,
    `tw_t`,
    `twa t`,
    `twatt`,
    `twattish`,
    `twunts`,
    `up the gary`,
    `w anker`,
    `w ankers`,
    `w#nker`,
    `w#nkers`,
    `w*nkers, 0`,
    `w.ank`,
    `w@nk`,
    `w@nker`,
    `w@nkers`,
    `w@nks`,
    `wanka`,
    `wanked`,
    `wankers`,
    `wanking`,
    `whanker`,
    `whankers`,
    `xxxhole`,
    `boner:deboner`,
    `bonk:bonkers`,
    `dipstick`,
    `furbox`,
    `furburger`,
    `gayboy`,
    `hardon`,
    `honkers`,
    `lactoids`,
    `lesbyterian`,
    `nestlecock`,
    `onanism`,
    `queve`,
    `quimsteak`,
    `qveer`,
    `scumbag`,
    `scumber`,
    `sexpot`,
    `shagbucket`,
    `shagstress`,
    `sodomite`,
    `suckster`,
    `twank`,
    `wiseass`,
    `wizzer`,
    `abbo`,
    `abortionist`,
    `abuser`,
    `alabama hotpocket`,
    `alligatorbait`,
    `analannie`,
    `analsex`,
    `arsebagger`,
    `arsebandit`,
    `arseblaster`,
    `arsecowboy`,
    `arsefuck`,
    `arsefucker`,
    `arsehore`,
    `arsejockey`,
    `arsekiss`,
    `arsekisser`,
    `arselick`,
    `arselicker`,
    `arselover`,
    `arsepacker`,
    `arseranger`,
    `arses`,
    `arsewhore`,
    `asshore`,
    `assjockey`,
    `asskiss`,
    `asskisser`,
    `asslover`,
    `assman`,
    `ass monkey`,
    `asspacker`,
    `asspuppies`,
    `assranger`,
    `asswhore`,
    `azzhole`,
    `backdoorman`,
    `badfuck`,
    `banging`,
    `barelylegal`,
    `beatoff`,
    `bigass`,
    `bigbastard`,
    `bigbutt`,
    `bitchez`,
    `bitchslap`,
    `bollick`,
    `breastjob`,
    `breastlover`,
    `breastman`,
    `brothel`,
    `bukake`,
    `bullcrap`,
    `bulldike`,
    `bungabunga`,
    `butchbabes`,
    `buttbang`,
    `buttface`,
    `butt-fuck`,
    `buttfuckers`,
    `butthead`,
    `buttman`,
    `buttstain`,
    `cameljockey`,
    `cherrypopper`,
    `chickslick`,
    `clamdigger`,
    `clamdiver`,
    `cockblocker`,
    `cockcowboy`,
    `cockfight`,
    `cockknob`,
    `cocklicker`,
    `cocklover`,
    `cocknob`,
    `cockqueen`,
    `cockrider`,
    `coitus`,
    `coondog`,
    `copulate`,
    `cracker`,
    `crackpipe`,
    `crack-whore`,
    `crotchjockey`,
    `crotchmonkey`,
    `crotchrot`,
    `cumfest`,
    `cumquat`,
    `cumqueen`,
    `cuntt`,
    `cunteyed`,
    `cuntfuck`,
    `cuntfucker`,
    `cuntsucker`,
    `cuntz`,
    `cybersex`,
    `cyberslimer`,
    `damnation`,
    `datnigga`,
    `devilworshipper`,
    `dickforbrains`,
    `dickless`,
    `dicklick`,
    `dicklicker`,
    `dickmilk`,
    `dilldo`,
    `dilldos`,
    `dominatricks`,
    `dominatrics`,
    `douchbag`,
    `drag queen`,
    `dumbbitch`,
    `easyslut`,
    `eatballs`,
    `eatpussy`,
    `excrement`,
    `facefucker`,
    `facist`,
    `faeces`,
    `faget`,
    `faggots`,
    `fagit`,
    `faigs`,
    `fastfuck`,
    `fatfuck`,
    `fatfucker`,
    `fatso`,
    `feces`,
    `fister`,
    `flasher`,
    `flipping the bird`,
    `footaction`,
    `footfuck`,
    `footfucker`,
    `freefuck`,
    `fucck`,
    `fuckable`,
    `fuckbuddy`,
    `fuckedup`,
    `fuckfriend`,
    `fuckingbitch`,
    `fuckingcunt`,
    `fuckinnuts`,
    `fuckit`,
    `fuckknob`,
    `fuckmehard`,
    `fuckmonkey`,
    `fuckpig`,
    `fuckwhore`,
    `fuckyou`,
    `Fukkah`,
    `Fukken`,
    `funfuck`,
    `fuuck`,
    `gangbanger`,
    `gatorbait`,
    `gaygirl`,
    `gaymuthafuckinwhore`,
    `getiton`,
    `glazeddonut`,
    `goddamnmuthafucker`,
    `gonorrehea`,
    `gonzagas`,
    `gotohell`,
    `headfuck`,
    `hijacker`,
    `hijacking`,
    `holestuffer`,
    `honger`,
    `hookers`,
    `hoore`,
    `hotdamn`,
    `kill yourself`,
    `to hell`,
    `blow job`,
    `blowie`,
    `hotpussy`,
    `iblowu`,
    `idiot`,
    `inthebuff`,
    `kissass`,
    `kumbubble`,
    `kumbullbe`,
    `kunnilingus`,
    `kunts`,
    `kuntz`,
    `kill`,
    `lactate`,
    `lady boy`,
    `ladyboy`,
    `lapdance`,
    `lesbain`,
    `lesbin`,
    `lezbe`,
    `lezbefriends`,
    `lezzer`,
    `libido`,
    `lickme`,
    `limpdick`,
    `livesex`,
    `lovejuice`,
    `loverocket`,
    `low life`,
    `lowlife`,
    `lubejob`,
    `luckycameltoe`,
    `mastabate`,
    `mastabater`,
    `masterbaiter`,
    `master bates`,
    `masterbates`,
    `mastrabator`,
    `mattressprincess`,
    `meatbeater`,
    `meatrack`,
    `molestation`,
    `molester`,
    `molestor`,
    `moneyshot`,
    `mooncricket`,
    `motha fucker`,
    `motha fuker`,
    `motha fukkah`,
    `motha fukker`,
    `muncher`,
    `mutha fucker`,
    `mutha fukah`,
    `mutha fuker`,
    `mutha fukkah`,
    `mutha fukker`,
    `nastybitch`,
    `nastywhore`,
    `negroes`,
    `negroid`,
    `niggaracci`,
    `niggard`,
    `niggarded`,
    `niggarding`,
    `niggardliness`,
    `niggardliness's,`,
    `niggardly`,
    `niggard's,`,
    `niggards`,
    `niggerhead`,
    `niggerhole`,
    `nigger's,`,
    `niggur`,
    `nigr`,
    `nigre`,
    `nigur`,
    `niiger`,
    `niigr`,
    `nig ger`,
    `nipplering`,
    `nittit`,
    `nlgger`,
    `nlggor`,
    `nofuckingway`,
    `nookey`,
    `nookie`,
    `nutcase`,
    `nutfucker`,
    `orgasum`,
    `peckerwood`,
    `peeenus`,
    `peeenusss`,
    `peehole`,
    `peenus`,
    `peinus`,
    `penises`,
    `penus`,
    `penuus`,
    `pervert`,
    `phuc`,
    `phuker`,
    `phukker`,
    `phungky`,
    `pimper`,
    `pimpsimp`,
    `pindick`,
    `piss`,
    `pisshead`,
    `play boy`,
    `play bunny`,
    `playbunny`,
    `play girl`,
    `playgirl`,
    `pocketpool`,
    `pooperscooper`,
    `pooping`,
    `poorwhitetrash`,
    `popimp`,
    `pornflick`,
    `pornking`,
    `pornprincess`,
    `prickhead`,
    `pubiclice`,
    `puntang`,
    `purinaprincess`,
    `pussie`,
    `pussyeater`,
    `pussyfucker`,
    `pussylicker`,
    `pussylips`,
    `pussylover`,
    `puuke`,
    `puuker`,
    `rag head`,
    `redneck`,
    `sadom`,
    `saeema butt`,
    `sandm`,
    `scank`,
    `screwyou`,
    `seaman staines`,
    `sexfarm`,
    `sexhound`,
    `sexhouse`,
    `sexing`,
    `sexkitten`,
    `sexslave`,
    `sextoy`,
    `sextoys`,
    `sexwhore`,
    `shhit`,
    `shitcan`,
    `shiter`,
    `shitforbrains`,
    `shitfucker`,
    `shity`,
    `shitz`,
    `skinflute`,
    `skumbag`,
    `slantyeye`,
    `slapper`,
    `slavedriver`,
    `sleezebag`,
    `sleezeball`,
    `slideitin`,
    `slimeball`,
    `slimebucket`,
    `slopehead`,
    `slopey`,
    `slopy`,
    `slutt`,
    `slutting`,
    `slutty`,
    `slutwear`,
    `slutz`,
    `smackthemonkey`,
    `snatchpatch`,
    `snowback`,
    `snownigger`,
    `sodomise`,
    `sonofabitch`,
    `sonofbitch`,
    `spacca`,
    `spigotty`,
    `spitter`,
    `splittail`,
    `spreadeagle`,
    `stabber`,
    `stab`,
    `stripclub`,
    `stroking`,
    `stupidfuck`,
    `stupidfucker`,
    `suckdick`,
    `sucker`,
    `suckme`,
    `suckmyass`,
    `suckmytit`,
    `suckoff`,
    `tarbaby`,
    `testicles`,
    `thicklips`,
    `timbernigger`,
    `titbitnipply`,
    `titfucker`,
    `titfuckin`,
    `titjob`,
    `titlicker`,
    `titlover`,
    `tittie`,
    `tonguethrust`,
    `tonguethruster`,
    `tonguetramp`,
    `torture`,
    `tosspot`,
    `trailertrash`,
    `trannie`,
    `trots`,
    `trouser snake`,
    `tuckahoe`,
    `tunneloflove`,
    `twobitwhore`,
    `unfuckable`,
    `uptheass`,
    `upthebutt`,
    `vaginal`,
    `vajina`,
    `valjina`,
    `vibrater`,
    `violate`,
    `violation`,
    `virginbreaker`,
    `vullva`,
    `waysted`,
    `welcher`,
    `wetspot`,
    `whigger`,
    `whiskeydick`,
    `whiskydick`,
    `whitenigger`,
    `whitetrash`,
    `whorefucker`,
    `wife beater`,
    `williewanker`,
    `yellowman`,
    `zigabo`,
    `zipperhea`,
    `zipper head`,
    `suicide`,
    `kill yourself`,
    `hang yourself`,
    `unalive yourself`,
    `nigg`,
    `amcik`,
    `boobz`,
    `boody`,
    `fotze`,
    `ginzo`,
    `gippo`,
    `gipps`,
    `guizi`,
    `gyopo`,
    `gyped`,
    `harem`,
    `jigga`,
    `jiggs`,
    `jiggy`,
    `jizin`,
    `jizzd`,
    `jizzn`,
    `kacap`,
    `kurac`,
    `kurwa`,
    `kushi`,
    `kyrpa`,
    `nibba`,
    `nigar`,
    `nigas`,
    `niger`,
    `nigha`,
    `nigor`,
    `niqqa`,
    `pansy`,
    `pocha`,
    `pocho`,
    `pohms`,
    `quiff`,
    `seppo`,
    `smack`,
    `spank`,
    `spics`,
    `wigga`,
    `beaney`,
    `boches`,
    `bungas`,
    `chinga`,
    `crotch`,
    `darkey`,
    `doggie`,
    `dyefly`,
    `fetish`,
    `ficken`,
    `geezer`,
    `gypped`,
    `gypsys`,
    `humper`,
    `jigger`,
    `jizzin`,
    `kanake`,
    `kanker`,
    `katsap`,
    `kigger`,
    `mabuno`,
    `macaca`,
    `mierda`,
    `mockey`,
    `mockie`,
    `moskal`,
    `mtrfck`,
    `mulkku`,
    `muschi`,
    `negres`,
    `noonan`,
    `orospu`,
    `piefke`,
    `pimmel`,
    `pimped`,
    `pooper`,
    `pudboy`,
    `punani`,
    `pusies`,
    `redleg`,
    `rigger`,
    `slanty`,
    `sloper`,
    `slopes`,
    `tiedup`,
    `tittis`,
    `turnon`,
    `yarpie`,
    `arabush`,
    `asholes`,
    `ballgag`,
    `bangbro`,
    `bootlip`,
    `buffies`,
    `coonass`,
    `cowgirl`,
    `dothead`,
    `dryhump`,
    `flikker`,
    `genital`,
    `horndog`,
    `hotcarl`,
    `hugefat`,
    `hustler`,
    `jerries`,
    `jimfish`,
    `khokhol`,
    `lezzian`,
    `licking`,
    `maricon`,
    `mulatto`,
    `nigette`,
    `quashie`,
    `sanchez`,
    `scheiss`,
    `slopeys`,
    `spludge`,
    `squinty`,
    `urethra`,
    `vagiina`,
    `whities`,
    `wichser`,
    `bassterd`,
    `bigblack`,
    `blackman`,
    `burrhead`,
    `dogstyle`,
    `dunecoon`,
    `earotics`,
    `eatmyass`,
    `footstar`,
    `feet pics`,
    `feetpics`,
    `foursome`,
    `godsdamn`,
    `golliwog`,
    `homicide`,
    `horndawg`,
    `klansman`,
    `klansmen`,
    `klootzak`,
    `knockers`,
    `kuksuger`,
    `lingerie`,
    `mosshead`,
    `peepshow`,
    `peepshpw`,
    `pplicker`,
    `schlampe`,
    `sharmuta`,
    `sharmute`,
    `syphilis`,
    `tacohead`,
    `thicklip`,
    `threeway`,
    `wetdream`,
    `yourtits`,
    `zabourah`,
    `arschloch`,
    `babyjuice`,
    `ballgravy`,
    `futkretzn`,
    `girlontop`,
    `hairyback`,
    `hairynigger`,
    `hairy nigger`,
    `hairy niga`,
    `halfbreed`,
    `jigarooni`,
    `marijuana`,
    `masturbat`,
    `poundtown`,
    `premature`,
    `scallywag`,
    `squirting`,
    `stuinties`,
    `swallower`,
    `tarbabies`,
    `tongueina`,
    `babybatter`,
    `beastility`,
    `bigbreasts`,
    `buddhahead`,
    `bulletvibe`,
    `deepaction`,
    `ejackulate`,
    `jellydonut`,
    `makemecome`,
    `samckdaddy`,
    `shawtypimp`,
    `socksucker`,
    `spierdalaj`,
    `spreadlegs`,
    `squarehead`,
    `styledoggy`,
    `ballkicking`,
    `dawgiestyle`,
    `diaperdaddy`,
    `donkeypunch`,
    `meatbeatter`,
    `pancakeface`,
    `taintedlove`,
    `beefcurtains`,
    `blowyourload`,
    `brownshowers`,
    `currymuncher`,
    `dirtypillows`,
    `porchmonkies`,
    `spearchucker`,
    `tigolbitties`,
    `transvestite`,
    `junglebunnies`,
    `masterblaster`,
    `pleasurechest`,
    `yellowshowers`,
    `princealbertpiercing`,
    `niggardliness's`,
    `niggard's`,
    `nigger's`,
    `nicotine`,
    `damm`,
    `d@mn`,
    `btch`,
    `bast4rd`,
    `b@stard`,
    `bast@rd`,
    `@ss`,
    `a$$`,
    `@$$`,
    `cr@p`,
    `d!ck`,
    `p1ss`,
    `p!ss`,
    `p@ss`,
    `c*nt`,
    `wh*re`,
    `wh0r3`,
    `@sshole`,
    `@$$hole`,
    `m0therfucker`,
    `m0therf*cker`,
    `m0th3rfucker`,
    `motherf*cker`,
    `c*cksucker`,
    `c*cksuck3r`,
    `cocksuck3r`,
    `bllsht`,
    `b*llsh1t`,
    `bullsh1t`,
    `b@llsh1t`,
    `@rsehole`,
    `ars3hole`,
    `ars*hole`,
    `f*ggot`,
    `f@gg0t`,
    `b@st4rd`,
    `c*ck`,
    `c0k`,
    `p*rn`,
    `pr0n`,
    `porn0`,
    `d*kk`,
    `c*m`,
    `c*mm`,
    `s!ut`,
    `b00b`,
    `b*ob`,
    `b00bz`,
    `b0bz`,
    `b0obs`,
    `@ssh0le`,
    `@$$h0le`,
    `f!ck`,
    `f1ck`,
    `fkng`,
    `f*kin`,
    `f@king`,
    `buggering`,
    `twatface`,
    `twatfaced`,
    `wankr`,
    `titz`,
    `t!tt`,
    `t!tz`,
    `c_nt`,
    `c*ntz`,
    `c_ntz`,
    `pishead`,
    `p!sshead`,
    `p1sshead`,
    `f*cker`,
    `f_ckr`,
    `f@ckr`,
    `fcukr`,
    `f_ck3r`,
    `f*cked`,
    `fc*ked`,
    `f@cking`,
    `ballz`,
    `ballzy`,
    `ballsy`,
    `ballsz`,
    `b@llz`,
    `b@lls`,
    `b*llz`,
    `b*lls`,
    `b00bies`,
    `boobi`,
    `boobied`,
    `co*k`,
    `co**k`,
    `pr!k`,
    `prickr`,
    `pr1kr`,
    `pr!kr`,
    `pr!cker`,
    `w0gg`,
    `w0gger`,
    `wogger`,
    `w*gg`,
    `w0gg3r`,
    `wogging`,
    `fag0t`,
    `f@got`,
    `fagott`,
    `f4gott`,
    `faggets`,
    `faggy`,
    `fagzz`,
    `pissr`,
    `p!ssr`,
    `piss3r`,
    `p1ss3r`,
    `p1ssr`,
    `p!ssed`,
    `p1ssed`,
    `p1ssd`,
    `sl*tty`,
    `slttty`,
    `sltttty`,
    `sluttz`,
    `bitchz`,
    `biotch`,
    `bitchr`,
    `b*tchr`,
    `b1tchr`,
    `n!gger`,
    `nigg*r`,
    `nigg@r`,
    `n!gg3r`,
    `n1gg3r`,
    `n1gg@r`,
    `n!gg@r`,
    `n1gg*r`,
    `n!gg*r`,
    `n*gg`,
    `niggr`,
    `n!ggr`,
    `n1ggr`,
    `n*gger`,
    `n!gga`,
    `n!gg@`,
    `n1gg@`,
    `nigg@`,
    `n1ggah`,
    `n!ggah`,
    `n*ggah`,
    `nigg@h`,
    `n!gg@h`,
    `n1gg@h`,
    `n1g@h`,
    `n!g@h`,
    `nigguh`,
    `n1gguh`,
    `n!gguh`,
    `n*gguh`,
    `n1ggaz`,
    `n!ggaz`,
    `n*ggaz`,
    `nigg@s`,
    `n!gg@s`,
    `n1gg@s`,
    `n1gg@z`,
    `nigg@z`,
    `n!gg@z`,
    `n*gg@z`,
    `niggahz`,
    `n1ggahz`,
    `n!ggahz`,
    `n*ggahz`,
    `nigg@hz`,
    `n!gg@hz`,
    `n1gg@hz`,
    `niggar`,
    `n1ggar`,
    `n!ggar`,
    `n*ggar`,
    `nigg@rs`,
    `n1gg@rs`,
    `n!gg@rs`,
    `n!g@rs`,
    `n!g@r`,
    `n!g@rz`,
    `niggrz`,
    `n1ggrz`,
    `n!ggrz`,
    `n!gg@rz`,
    `nigg@rz`,
    `niggrs`,
    `n1ggrs`,
    `n!ggrs`,
    `loser`,
    `l0ser`,
    `looser`,
    `卐`,
    `卍`,
    `࿕`,
    `࿖`,
    `࿗`,
    `࿘`,
    `ꖦ`,
  ],
  ha = new (class {
    #e;
    #t;
    #n =
      /[\u00A0\u1680\u2001-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF\u200B-\u200D\u2060\u2800]/g;
    #r = /^[a-zA-Z0-9\s.,!?'\-_@#()[\]{}""''<>&+=*%/:;~^$\\|–—`]*$/;
    constructor() {
      let e = ma.map((e) => e.replace(/[-\/\\^$*+?.()|[\]{}]/g, `\\$&`));
      (this.#e = RegExp(`\\b(${e.join(`|`)})\\b`, `gi`)),
        (this.#t = RegExp(`(${e.join(`|`)})`, `gi`));
    }
    #i(e) {
      return (this.#t.lastIndex = 0), [...e.matchAll(this.#t)];
    }
    #a(e) {
      let t = e.split(/\s+/);
      for (let e = 0; e < t.length; e++) {
        if (t[e].length > 2 || t[e].length === 0) continue;
        let n = e;
        for (; e < t.length && t[e].length <= 2 && t[e].length > 0; ) e++;
        if (e - n < 3) continue;
        let r = t.slice(n, e),
          i = r.join(``).toLowerCase(),
          a = this.#i(i);
        if (a.length) {
          let o = [],
            s = 0;
          a.forEach((e) => {
            let t = s;
            r.forEach((n) => {
              t < e.index &&
                t + n.length <= e.index &&
                (o.push(n), (t += n.length));
            }),
              o.push(e[0]),
              (s = e.index + e[0].length);
          }),
            s < i.length && o.length && (o[o.length - 1] += i.substring(s)),
            t.splice(n, e - n, ...o),
            (e = n + o.length - 1);
        } else e--;
      }
      return (
        (e = t.join(` `)),
        e.replace(
          /\w+[_.*\u2013\u2014-]+(?:\w+[_.*\u2013\u2014-]+)*\w+/g,
          (e) => {
            let t = e.split(/([_.*\u2013\u2014-]+)/),
              n = t.filter((e, t) => t % 2 == 0),
              r = t.filter((e, t) => t % 2 == 1),
              i = n.map((e) => (this.#i(e).length ? `*`.repeat(e.length) : e));
            if (i.every((e, t) => e === n[t])) {
              for (let e = 0; e < n.length - 1; e++)
                if (this.#i(n[e] + n[e + 1]).length) {
                  (i[e] = `*`.repeat(n[e].length + n[e + 1].length)),
                    (i[e + 1] = ``);
                  break;
                }
              if (i.every((e, t) => e === n[t])) {
                let e = n.join(``).toLowerCase();
                this.#i(e).forEach((e) => {
                  let t = 0;
                  n.forEach((n, r) => {
                    e.index < t + n.length &&
                      e.index + e[0].length > t &&
                      (i[r] = `*`.repeat(n.length)),
                      (t += n.length);
                  });
                });
              }
            }
            return i.reduce(
              (e, t, n) => e + ((t && n > 0 && r[n - 1]) || ``) + t,
              ``
            );
          }
        )
      );
    }
    #o(e) {
      return e.replace(/\b\w*(?:[a-z][A-Z]|\w\d)\w*\b/g, (e) =>
        e
          .replace(/([a-z])([A-Z])/g, `$1 $2`)
          .replace(/([a-zA-Z])(\d)/g, `$1 $2`)
          .split(/\s+/)
          .map((e) => {
            let t = this.#i(e).find(
              (t) => t.index === 0 || !/\w/.test(e[t.index - 1])
            );
            return t ? e.replace(t[0], `*`.repeat(t[0].length)) : e;
          })
          .join(``)
      );
    }
    censor(e) {
      if (!e || typeof e != `string`) return e || ``;
      try {
        let t = this.#o(this.#a(e.replace(this.#n, ` `)));
        return (
          (this.#e.lastIndex = 0),
          t.replace(this.#e, (e) => `*`.repeat(e.length))
        );
      } catch (t) {
        return console.error(`Error censoring text:`, t), e;
      }
    }
    check(e) {
      if (!e || typeof e != `string`) return e === ``;
      try {
        let t = e.replace(this.#n, ` `).replace(/\s+/g, ` `);
        return t === this.censor(t);
      } catch (e) {
        return console.error(`Error checking text:`, e), !1;
      }
    }
    checkStrict(e) {
      return !e || typeof e != `string`
        ? e === ``
        : this.#r.test(e) && this.check(e);
    }
  })(),
  ga = (e) => ha.censor(e);
function _a(e, t = null) {
  e &&
    S(F)?.updateStorage(`chats`, `array-add`, {
      username: S(De) || S(vt),
      clientId: S(F)?.id,
      userId: localStorage.getItem(`id`)
        ? Number(localStorage.getItem(`id`))
        : null,
      text: e,
      teamIndex: t,
    });
}
function va(e) {
  let t = [];
  try {
    for (let n of e) (n.text = ga(n.text)), t.push(n);
    Ft.set(t);
  } catch (e) {
    console.error(`Error loading and censoring chats:`, e);
  }
}
W.subscribe((e) => {
  e && (localStorage.getItem(`singleplayerNMPZ`) ? ya(`nmpz`) : ya());
});
function ya(e = S(Qe)) {
  switch (($e.set(e), et.set(), tt.set(!1), nt.set(!1), e)) {
    case `nmpz`:
      tt.set(!0);
      break;
    case `grayscale`:
      et.set(`grayscale(100%)`);
      break;
    case `invert`:
      et.set(`invert(100%)`);
      break;
    case `hue`:
      et.set(`hue-rotate(90deg)`);
      break;
    case `fade`:
      nt.set(!0);
  }
}
function ba(e) {
  let t = e.length,
    n = 0,
    r = 0;
  for (; r < t; ) {
    let i = e.charCodeAt(r++);
    if (!(i & 4294967168)) n++;
    else if (!(i & 4294965248)) n += 2;
    else {
      if (i >= 55296 && i <= 56319 && r < t) {
        let t = e.charCodeAt(r);
        (t & 64512) == 56320 &&
          (++r, (i = ((i & 1023) << 10) + (t & 1023) + 65536));
      }
      i & 4294901760 ? (n += 4) : (n += 3);
    }
  }
  return n;
}
function xa(e, t, n) {
  let r = e.length,
    i = n,
    a = 0;
  for (; a < r; ) {
    let n = e.charCodeAt(a++);
    if (!(n & 4294967168)) t[i++] = n;
    else {
      if (!(n & 4294965248)) t[i++] = ((n >> 6) & 31) | 192;
      else {
        if (n >= 55296 && n <= 56319 && a < r) {
          let t = e.charCodeAt(a);
          (t & 64512) == 56320 &&
            (++a, (n = ((n & 1023) << 10) + (t & 1023) + 65536));
        }
        n & 4294901760
          ? ((t[i++] = ((n >> 18) & 7) | 240),
            (t[i++] = ((n >> 12) & 63) | 128),
            (t[i++] = ((n >> 6) & 63) | 128))
          : ((t[i++] = ((n >> 12) & 15) | 224),
            (t[i++] = ((n >> 6) & 63) | 128));
      }
      t[i++] = (n & 63) | 128;
    }
  }
}
var Sa = new TextEncoder(),
  Ca = 50;
function wa(e, t, n) {
  Sa.encodeInto(e, t.subarray(n));
}
function Ta(e, t, n) {
  e.length > Ca ? wa(e, t, n) : xa(e, t, n);
}
var Ea = 4096;
function Da(e, t, n) {
  let r = t,
    i = r + n,
    a = [],
    o = ``;
  for (; r < i; ) {
    let t = e[r++];
    if (!(t & 128)) a.push(t);
    else if ((t & 224) == 192) {
      let n = e[r++] & 63;
      a.push(((t & 31) << 6) | n);
    } else if ((t & 240) == 224) {
      let n = e[r++] & 63,
        i = e[r++] & 63;
      a.push(((t & 31) << 12) | (n << 6) | i);
    } else if ((t & 248) == 240) {
      let n = e[r++] & 63,
        i = e[r++] & 63,
        o = e[r++] & 63,
        s = ((t & 7) << 18) | (n << 12) | (i << 6) | o;
      s > 65535 &&
        ((s -= 65536),
        a.push(((s >>> 10) & 1023) | 55296),
        (s = 56320 | (s & 1023))),
        a.push(s);
    } else a.push(t);
    a.length >= Ea && ((o += String.fromCharCode(...a)), (a.length = 0));
  }
  return a.length > 0 && (o += String.fromCharCode(...a)), o;
}
var Oa = new TextDecoder(),
  ka = 200;
function Aa(e, t, n) {
  let r = e.subarray(t, t + n);
  return Oa.decode(r);
}
function ja(e, t, n) {
  return n > ka ? Aa(e, t, n) : Da(e, t, n);
}
var Ma = class {
    type;
    data;
    constructor(e, t) {
      (this.type = e), (this.data = t);
    }
  },
  Q = class e extends Error {
    constructor(t) {
      super(t);
      let n = Object.create(e.prototype);
      Object.setPrototypeOf(this, n),
        Object.defineProperty(this, "name", {
          configurable: !0,
          enumerable: !1,
          value: e.name,
        });
    }
  };
function Na(e, t, n) {
  let r = n / 4294967296,
    i = n;
  e.setUint32(t, r), e.setUint32(t + 4, i);
}
function Pa(e, t, n) {
  let r = Math.floor(n / 4294967296),
    i = n;
  e.setUint32(t, r), e.setUint32(t + 4, i);
}
function Fa(e, t) {
  let n = e.getInt32(t),
    r = e.getUint32(t + 4);
  return n * 4294967296 + r;
}
function Ia(e, t) {
  let n = e.getUint32(t),
    r = e.getUint32(t + 4);
  return n * 4294967296 + r;
}
var La = 4294967295,
  Ra = 17179869183;
function za({ sec: e, nsec: t }) {
  if (e >= 0 && t >= 0 && e <= Ra) {
    if (t === 0 && e <= La) {
      let t = new Uint8Array(4);
      return new DataView(t.buffer).setUint32(0, e), t;
    }
    {
      let n = e / 4294967296,
        r = e | 0,
        i = new Uint8Array(8),
        a = new DataView(i.buffer);
      return a.setUint32(0, (t << 2) | (n & 3)), a.setUint32(4, r), i;
    }
  }
  {
    let n = new Uint8Array(12),
      r = new DataView(n.buffer);
    return r.setUint32(0, t), Pa(r, 4, e), n;
  }
}
function Ba(e) {
  let t = e.getTime(),
    n = Math.floor(t / 1e3),
    r = (t - n * 1e3) * 1e6,
    i = Math.floor(r / 1e9);
  return { sec: n + i, nsec: r - i * 1e9 };
}
function Va(e) {
  return e instanceof Date ? za(Ba(e)) : null;
}
function Ha(e) {
  let t = new DataView(e.buffer, e.byteOffset, e.byteLength);
  switch (e.byteLength) {
    case 4:
      return { sec: t.getUint32(0), nsec: 0 };
    case 8: {
      let e = t.getUint32(0),
        n = t.getUint32(4);
      return { sec: (e & 3) * 4294967296 + n, nsec: e >>> 2 };
    }
    case 12:
      return { sec: Fa(t, 4), nsec: t.getUint32(0) };
    default:
      throw new Q(
        `Unrecognized data size for timestamp (expected 4, 8, or 12): ${e.length}`
      );
  }
}
function Ua(e) {
  let t = Ha(e);
  return new Date(t.sec * 1e3 + t.nsec / 1e6);
}
var Wa = { type: -1, encode: Va, decode: Ua },
  Ga = class e {
    static defaultCodec = new e();
    __brand;
    builtInEncoders = [];
    builtInDecoders = [];
    encoders = [];
    decoders = [];
    constructor() {
      this.register(Wa);
    }
    register({ type: e, encode: t, decode: n }) {
      if (e >= 0) (this.encoders[e] = t), (this.decoders[e] = n);
      else {
        let r = -1 - e;
        (this.builtInEncoders[r] = t), (this.builtInDecoders[r] = n);
      }
    }
    tryToEncode(e, t) {
      for (let n = 0; n < this.builtInEncoders.length; n++) {
        let r = this.builtInEncoders[n];
        if (r != null) {
          let i = r(e, t);
          if (i != null) return new Ma(-1 - n, i);
        }
      }
      for (let n = 0; n < this.encoders.length; n++) {
        let r = this.encoders[n];
        if (r != null) {
          let i = r(e, t);
          if (i != null) return new Ma(n, i);
        }
      }
      return e instanceof Ma ? e : null;
    }
    decode(e, t, n) {
      let r = t < 0 ? this.builtInDecoders[-1 - t] : this.decoders[t];
      return r ? r(e, t, n) : new Ma(t, e);
    }
  };
function Ka(e) {
  return (
    e instanceof ArrayBuffer ||
    (typeof SharedArrayBuffer < `u` && e instanceof SharedArrayBuffer)
  );
}
function qa(e) {
  return e instanceof Uint8Array
    ? e
    : ArrayBuffer.isView(e)
    ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
    : Ka(e)
    ? new Uint8Array(e)
    : Uint8Array.from(e);
}
var Ja = class e {
  extensionCodec;
  context;
  useBigInt64;
  maxDepth;
  initialBufferSize;
  sortKeys;
  forceFloat32;
  ignoreUndefined;
  forceIntegerToFloat;
  pos;
  view;
  bytes;
  entered = !1;
  constructor(e) {
    (this.extensionCodec = e?.extensionCodec ?? Ga.defaultCodec),
      (this.context = e?.context),
      (this.useBigInt64 = e?.useBigInt64 ?? !1),
      (this.maxDepth = e?.maxDepth ?? 100),
      (this.initialBufferSize = e?.initialBufferSize ?? 2048),
      (this.sortKeys = e?.sortKeys ?? !1),
      (this.forceFloat32 = e?.forceFloat32 ?? !1),
      (this.ignoreUndefined = e?.ignoreUndefined ?? !1),
      (this.forceIntegerToFloat = e?.forceIntegerToFloat ?? !1),
      (this.pos = 0),
      (this.view = new DataView(new ArrayBuffer(this.initialBufferSize))),
      (this.bytes = new Uint8Array(this.view.buffer));
  }
  clone() {
    return new e({
      extensionCodec: this.extensionCodec,
      context: this.context,
      useBigInt64: this.useBigInt64,
      maxDepth: this.maxDepth,
      initialBufferSize: this.initialBufferSize,
      sortKeys: this.sortKeys,
      forceFloat32: this.forceFloat32,
      ignoreUndefined: this.ignoreUndefined,
      forceIntegerToFloat: this.forceIntegerToFloat,
    });
  }
  reinitializeState() {
    this.pos = 0;
  }
  encodeSharedRef(e) {
    if (this.entered) return this.clone().encodeSharedRef(e);
    try {
      return (
        (this.entered = !0),
        this.reinitializeState(),
        this.doEncode(e, 1),
        this.bytes.subarray(0, this.pos)
      );
    } finally {
      this.entered = !1;
    }
  }
  encode(e) {
    if (this.entered) return this.clone().encode(e);
    try {
      return (
        (this.entered = !0),
        this.reinitializeState(),
        this.doEncode(e, 1),
        this.bytes.slice(0, this.pos)
      );
    } finally {
      this.entered = !1;
    }
  }
  doEncode(e, t) {
    if (t > this.maxDepth) throw Error(`Too deep objects in depth ${t}`);
    e == null
      ? this.encodeNil()
      : typeof e == `boolean`
      ? this.encodeBoolean(e)
      : typeof e == `number`
      ? this.forceIntegerToFloat
        ? this.encodeNumberAsFloat(e)
        : this.encodeNumber(e)
      : typeof e == `string`
      ? this.encodeString(e)
      : this.useBigInt64 && typeof e == `bigint`
      ? this.encodeBigInt64(e)
      : this.encodeObject(e, t);
  }
  ensureBufferSizeToWrite(e) {
    let t = this.pos + e;
    this.view.byteLength < t && this.resizeBuffer(t * 2);
  }
  resizeBuffer(e) {
    let t = new ArrayBuffer(e),
      n = new Uint8Array(t),
      r = new DataView(t);
    n.set(this.bytes), (this.view = r), (this.bytes = n);
  }
  encodeNil() {
    this.writeU8(192);
  }
  encodeBoolean(e) {
    e === !1 ? this.writeU8(194) : this.writeU8(195);
  }
  encodeNumber(e) {
    !this.forceIntegerToFloat && Number.isSafeInteger(e)
      ? e >= 0
        ? e < 128
          ? this.writeU8(e)
          : e < 256
          ? (this.writeU8(204), this.writeU8(e))
          : e < 65536
          ? (this.writeU8(205), this.writeU16(e))
          : e < 4294967296
          ? (this.writeU8(206), this.writeU32(e))
          : this.useBigInt64
          ? this.encodeNumberAsFloat(e)
          : (this.writeU8(207), this.writeU64(e))
        : e >= -32
        ? this.writeU8(224 | (e + 32))
        : e >= -128
        ? (this.writeU8(208), this.writeI8(e))
        : e >= -32768
        ? (this.writeU8(209), this.writeI16(e))
        : e >= -2147483648
        ? (this.writeU8(210), this.writeI32(e))
        : this.useBigInt64
        ? this.encodeNumberAsFloat(e)
        : (this.writeU8(211), this.writeI64(e))
      : this.encodeNumberAsFloat(e);
  }
  encodeNumberAsFloat(e) {
    this.forceFloat32
      ? (this.writeU8(202), this.writeF32(e))
      : (this.writeU8(203), this.writeF64(e));
  }
  encodeBigInt64(e) {
    e >= BigInt(0)
      ? (this.writeU8(207), this.writeBigUint64(e))
      : (this.writeU8(211), this.writeBigInt64(e));
  }
  writeStringHeader(e) {
    if (e < 32) this.writeU8(160 + e);
    else if (e < 256) this.writeU8(217), this.writeU8(e);
    else if (e < 65536) this.writeU8(218), this.writeU16(e);
    else if (e < 4294967296) this.writeU8(219), this.writeU32(e);
    else throw Error(`Too long string: ${e} bytes in UTF-8`);
  }
  encodeString(e) {
    let t = ba(e);
    this.ensureBufferSizeToWrite(5 + t),
      this.writeStringHeader(t),
      Ta(e, this.bytes, this.pos),
      (this.pos += t);
  }
  encodeObject(e, t) {
    let n = this.extensionCodec.tryToEncode(e, this.context);
    if (n != null) this.encodeExtension(n);
    else if (Array.isArray(e)) this.encodeArray(e, t);
    else if (ArrayBuffer.isView(e)) this.encodeBinary(e);
    else if (typeof e == `object`) this.encodeMap(e, t);
    else
      throw Error(`Unrecognized object: ${Object.prototype.toString.apply(e)}`);
  }
  encodeBinary(e) {
    let t = e.byteLength;
    if (t < 256) this.writeU8(196), this.writeU8(t);
    else if (t < 65536) this.writeU8(197), this.writeU16(t);
    else if (t < 4294967296) this.writeU8(198), this.writeU32(t);
    else throw Error(`Too large binary: ${t}`);
    let n = qa(e);
    this.writeU8a(n);
  }
  encodeArray(e, t) {
    let n = e.length;
    if (n < 16) this.writeU8(144 + n);
    else if (n < 65536) this.writeU8(220), this.writeU16(n);
    else if (n < 4294967296) this.writeU8(221), this.writeU32(n);
    else throw Error(`Too large array: ${n}`);
    for (let n of e) this.doEncode(n, t + 1);
  }
  countWithoutUndefined(e, t) {
    let n = 0;
    for (let r of t) e[r] !== void 0 && n++;
    return n;
  }
  encodeMap(e, t) {
    let n = Object.keys(e);
    this.sortKeys && n.sort();
    let r = this.ignoreUndefined ? this.countWithoutUndefined(e, n) : n.length;
    if (r < 16) this.writeU8(128 + r);
    else if (r < 65536) this.writeU8(222), this.writeU16(r);
    else if (r < 4294967296) this.writeU8(223), this.writeU32(r);
    else throw Error(`Too large map object: ${r}`);
    for (let r of n) {
      let n = e[r];
      (this.ignoreUndefined && n === void 0) ||
        (this.encodeString(r), this.doEncode(n, t + 1));
    }
  }
  encodeExtension(e) {
    if (typeof e.data == `function`) {
      let t = e.data(this.pos + 6),
        n = t.length;
      if (n >= 4294967296) throw Error(`Too large extension object: ${n}`);
      this.writeU8(201),
        this.writeU32(n),
        this.writeI8(e.type),
        this.writeU8a(t);
      return;
    }
    let t = e.data.length;
    if (t === 1) this.writeU8(212);
    else if (t === 2) this.writeU8(213);
    else if (t === 4) this.writeU8(214);
    else if (t === 8) this.writeU8(215);
    else if (t === 16) this.writeU8(216);
    else if (t < 256) this.writeU8(199), this.writeU8(t);
    else if (t < 65536) this.writeU8(200), this.writeU16(t);
    else if (t < 4294967296) this.writeU8(201), this.writeU32(t);
    else throw Error(`Too large extension object: ${t}`);
    this.writeI8(e.type), this.writeU8a(e.data);
  }
  writeU8(e) {
    this.ensureBufferSizeToWrite(1),
      this.view.setUint8(this.pos, e),
      this.pos++;
  }
  writeU8a(e) {
    let t = e.length;
    this.ensureBufferSizeToWrite(t),
      this.bytes.set(e, this.pos),
      (this.pos += t);
  }
  writeI8(e) {
    this.ensureBufferSizeToWrite(1), this.view.setInt8(this.pos, e), this.pos++;
  }
  writeU16(e) {
    this.ensureBufferSizeToWrite(2),
      this.view.setUint16(this.pos, e),
      (this.pos += 2);
  }
  writeI16(e) {
    this.ensureBufferSizeToWrite(2),
      this.view.setInt16(this.pos, e),
      (this.pos += 2);
  }
  writeU32(e) {
    this.ensureBufferSizeToWrite(4),
      this.view.setUint32(this.pos, e),
      (this.pos += 4);
  }
  writeI32(e) {
    this.ensureBufferSizeToWrite(4),
      this.view.setInt32(this.pos, e),
      (this.pos += 4);
  }
  writeF32(e) {
    this.ensureBufferSizeToWrite(4),
      this.view.setFloat32(this.pos, e),
      (this.pos += 4);
  }
  writeF64(e) {
    this.ensureBufferSizeToWrite(8),
      this.view.setFloat64(this.pos, e),
      (this.pos += 8);
  }
  writeU64(e) {
    this.ensureBufferSizeToWrite(8),
      Na(this.view, this.pos, e),
      (this.pos += 8);
  }
  writeI64(e) {
    this.ensureBufferSizeToWrite(8),
      Pa(this.view, this.pos, e),
      (this.pos += 8);
  }
  writeBigUint64(e) {
    this.ensureBufferSizeToWrite(8),
      this.view.setBigUint64(this.pos, e),
      (this.pos += 8);
  }
  writeBigInt64(e) {
    this.ensureBufferSizeToWrite(8),
      this.view.setBigInt64(this.pos, e),
      (this.pos += 8);
  }
};
function Ya(e, t) {
  return new Ja(t).encodeSharedRef(e);
}
function Xa(e) {
  return `${e < 0 ? `-` : ``}0x${Math.abs(e).toString(16).padStart(2, `0`)}`;
}
var Za = 16,
  Qa = 16,
  $a = class {
    hit = 0;
    miss = 0;
    caches;
    maxKeyLength;
    maxLengthPerKey;
    constructor(e = Za, t = Qa) {
      (this.maxKeyLength = e), (this.maxLengthPerKey = t), (this.caches = []);
      for (let e = 0; e < this.maxKeyLength; e++) this.caches.push([]);
    }
    canBeCached(e) {
      return e > 0 && e <= this.maxKeyLength;
    }
    find(e, t, n) {
      let r = this.caches[n - 1];
      FIND_CHUNK: for (let i of r) {
        let r = i.bytes;
        for (let i = 0; i < n; i++) if (r[i] !== e[t + i]) continue FIND_CHUNK;
        return i.str;
      }
      return null;
    }
    store(e, t) {
      let n = this.caches[e.length - 1],
        r = { bytes: e, str: t };
      n.length >= this.maxLengthPerKey
        ? (n[(Math.random() * n.length) | 0] = r)
        : n.push(r);
    }
    decode(e, t, n) {
      let r = this.find(e, t, n);
      if (r != null) return this.hit++, r;
      this.miss++;
      let i = Da(e, t, n),
        a = Uint8Array.prototype.slice.call(e, t, t + n);
      return this.store(a, i), i;
    }
  },
  eo = `array`,
  to = `map_key`,
  no = `map_value`,
  ro = (e) => {
    if (typeof e == `string` || typeof e == `number`) return e;
    throw new Q(`The type of key must be string or number but ` + typeof e);
  },
  io = class {
    stack = [];
    stackHeadPosition = -1;
    get length() {
      return this.stackHeadPosition + 1;
    }
    top() {
      return this.stack[this.stackHeadPosition];
    }
    pushArrayState(e) {
      let t = this.getUninitializedStateFromPool();
      (t.type = eo), (t.position = 0), (t.size = e), (t.array = Array(e));
    }
    pushMapState(e) {
      let t = this.getUninitializedStateFromPool();
      (t.type = to), (t.readCount = 0), (t.size = e), (t.map = {});
    }
    getUninitializedStateFromPool() {
      return (
        this.stackHeadPosition++,
        this.stackHeadPosition === this.stack.length &&
          this.stack.push({
            type: void 0,
            size: 0,
            array: void 0,
            position: 0,
            readCount: 0,
            map: void 0,
            key: null,
          }),
        this.stack[this.stackHeadPosition]
      );
    }
    release(e) {
      if (this.stack[this.stackHeadPosition] !== e)
        throw Error(
          `Invalid stack state. Released state is not on top of the stack.`
        );
      if (e.type === eo) {
        let t = e;
        (t.size = 0), (t.array = void 0), (t.position = 0), (t.type = void 0);
      }
      if (e.type === to || e.type === no) {
        let t = e;
        (t.size = 0), (t.map = void 0), (t.readCount = 0), (t.type = void 0);
      }
      this.stackHeadPosition--;
    }
    reset() {
      (this.stack.length = 0), (this.stackHeadPosition = -1);
    }
  },
  ao = -1,
  oo = new DataView(new ArrayBuffer(0)),
  so = new Uint8Array(oo.buffer);
try {
  oo.getInt8(0);
} catch (e) {
  if (!(e instanceof RangeError))
    throw Error(
      `This module is not supported in the current JavaScript engine because DataView does not throw RangeError on out-of-bounds access`
    );
}
var co = RangeError(`Insufficient data`),
  lo = new $a(),
  uo = class e {
    extensionCodec;
    context;
    useBigInt64;
    rawStrings;
    maxStrLength;
    maxBinLength;
    maxArrayLength;
    maxMapLength;
    maxExtLength;
    keyDecoder;
    mapKeyConverter;
    totalPos = 0;
    pos = 0;
    view = oo;
    bytes = so;
    headByte = ao;
    stack = new io();
    entered = !1;
    constructor(e) {
      (this.extensionCodec = e?.extensionCodec ?? Ga.defaultCodec),
        (this.context = e?.context),
        (this.useBigInt64 = e?.useBigInt64 ?? !1),
        (this.rawStrings = e?.rawStrings ?? !1),
        (this.maxStrLength = e?.maxStrLength ?? 4294967295),
        (this.maxBinLength = e?.maxBinLength ?? 4294967295),
        (this.maxArrayLength = e?.maxArrayLength ?? 4294967295),
        (this.maxMapLength = e?.maxMapLength ?? 4294967295),
        (this.maxExtLength = e?.maxExtLength ?? 4294967295),
        (this.keyDecoder = e?.keyDecoder === void 0 ? lo : e.keyDecoder),
        (this.mapKeyConverter = e?.mapKeyConverter ?? ro);
    }
    clone() {
      return new e({
        extensionCodec: this.extensionCodec,
        context: this.context,
        useBigInt64: this.useBigInt64,
        rawStrings: this.rawStrings,
        maxStrLength: this.maxStrLength,
        maxBinLength: this.maxBinLength,
        maxArrayLength: this.maxArrayLength,
        maxMapLength: this.maxMapLength,
        maxExtLength: this.maxExtLength,
        keyDecoder: this.keyDecoder,
      });
    }
    reinitializeState() {
      (this.totalPos = 0), (this.headByte = ao), this.stack.reset();
    }
    setBuffer(e) {
      let t = qa(e);
      (this.bytes = t),
        (this.view = new DataView(t.buffer, t.byteOffset, t.byteLength)),
        (this.pos = 0);
    }
    appendBuffer(e) {
      if (this.headByte === ao && !this.hasRemaining(1)) this.setBuffer(e);
      else {
        let t = this.bytes.subarray(this.pos),
          n = qa(e),
          r = new Uint8Array(t.length + n.length);
        r.set(t), r.set(n, t.length), this.setBuffer(r);
      }
    }
    hasRemaining(e) {
      return this.view.byteLength - this.pos >= e;
    }
    createExtraByteError(e) {
      let { view: t, pos: n } = this;
      return RangeError(
        `Extra ${t.byteLength - n} of ${
          t.byteLength
        } byte(s) found at buffer[${e}]`
      );
    }
    decode(e) {
      if (this.entered) return this.clone().decode(e);
      try {
        (this.entered = !0), this.reinitializeState(), this.setBuffer(e);
        let t = this.doDecodeSync();
        if (this.hasRemaining(1)) throw this.createExtraByteError(this.pos);
        return t;
      } finally {
        this.entered = !1;
      }
    }
    *decodeMulti(e) {
      if (this.entered) yield* this.clone().decodeMulti(e);
      else
        try {
          for (
            this.entered = !0, this.reinitializeState(), this.setBuffer(e);
            this.hasRemaining(1);

          )
            yield this.doDecodeSync();
        } finally {
          this.entered = !1;
        }
    }
    async decodeAsync(e) {
      if (this.entered) return this.clone().decodeAsync(e);
      try {
        this.entered = !0;
        let t = !1,
          n;
        for await (let r of e) {
          if (t)
            throw (
              ((this.entered = !1), this.createExtraByteError(this.totalPos))
            );
          this.appendBuffer(r);
          try {
            (n = this.doDecodeSync()), (t = !0);
          } catch (e) {
            if (!(e instanceof RangeError)) throw e;
          }
          this.totalPos += this.pos;
        }
        if (t) {
          if (this.hasRemaining(1))
            throw this.createExtraByteError(this.totalPos);
          return n;
        }
        let { headByte: r, pos: i, totalPos: a } = this;
        throw RangeError(
          `Insufficient data in parsing ${Xa(
            r
          )} at ${a} (${i} in the current buffer)`
        );
      } finally {
        this.entered = !1;
      }
    }
    decodeArrayStream(e) {
      return this.decodeMultiAsync(e, !0);
    }
    decodeStream(e) {
      return this.decodeMultiAsync(e, !1);
    }
    async *decodeMultiAsync(e, t) {
      if (this.entered) yield* this.clone().decodeMultiAsync(e, t);
      else
        try {
          this.entered = !0;
          let n = t,
            r = -1;
          for await (let i of e) {
            if (t && r === 0) throw this.createExtraByteError(this.totalPos);
            this.appendBuffer(i),
              n && ((r = this.readArraySize()), (n = !1), this.complete());
            try {
              for (; yield this.doDecodeSync(), --r !== 0; );
            } catch (e) {
              if (!(e instanceof RangeError)) throw e;
            }
            this.totalPos += this.pos;
          }
        } finally {
          this.entered = !1;
        }
    }
    doDecodeSync() {
      DECODE: for (;;) {
        let e = this.readHeadByte(),
          t;
        if (e >= 224) t = e - 256;
        else if (e < 192) {
          if (e < 128) t = e;
          else if (e < 144) {
            let n = e - 128;
            if (n !== 0) {
              this.pushMapState(n), this.complete();
              continue DECODE;
            }
            t = {};
          } else if (e < 160) {
            let n = e - 144;
            if (n !== 0) {
              this.pushArrayState(n), this.complete();
              continue DECODE;
            }
            t = [];
          } else {
            let n = e - 160;
            t = this.decodeString(n, 0);
          }
        } else if (e === 192) t = null;
        else if (e === 194) t = !1;
        else if (e === 195) t = !0;
        else if (e === 202) t = this.readF32();
        else if (e === 203) t = this.readF64();
        else if (e === 204) t = this.readU8();
        else if (e === 205) t = this.readU16();
        else if (e === 206) t = this.readU32();
        else if (e === 207)
          t = this.useBigInt64 ? this.readU64AsBigInt() : this.readU64();
        else if (e === 208) t = this.readI8();
        else if (e === 209) t = this.readI16();
        else if (e === 210) t = this.readI32();
        else if (e === 211)
          t = this.useBigInt64 ? this.readI64AsBigInt() : this.readI64();
        else if (e === 217) {
          let e = this.lookU8();
          t = this.decodeString(e, 1);
        } else if (e === 218) {
          let e = this.lookU16();
          t = this.decodeString(e, 2);
        } else if (e === 219) {
          let e = this.lookU32();
          t = this.decodeString(e, 4);
        } else if (e === 220) {
          let e = this.readU16();
          if (e !== 0) {
            this.pushArrayState(e), this.complete();
            continue DECODE;
          }
          t = [];
        } else if (e === 221) {
          let e = this.readU32();
          if (e !== 0) {
            this.pushArrayState(e), this.complete();
            continue DECODE;
          }
          t = [];
        } else if (e === 222) {
          let e = this.readU16();
          if (e !== 0) {
            this.pushMapState(e), this.complete();
            continue DECODE;
          }
          t = {};
        } else if (e === 223) {
          let e = this.readU32();
          if (e !== 0) {
            this.pushMapState(e), this.complete();
            continue DECODE;
          }
          t = {};
        } else if (e === 196) {
          let e = this.lookU8();
          t = this.decodeBinary(e, 1);
        } else if (e === 197) {
          let e = this.lookU16();
          t = this.decodeBinary(e, 2);
        } else if (e === 198) {
          let e = this.lookU32();
          t = this.decodeBinary(e, 4);
        } else if (e === 212) t = this.decodeExtension(1, 0);
        else if (e === 213) t = this.decodeExtension(2, 0);
        else if (e === 214) t = this.decodeExtension(4, 0);
        else if (e === 215) t = this.decodeExtension(8, 0);
        else if (e === 216) t = this.decodeExtension(16, 0);
        else if (e === 199) {
          let e = this.lookU8();
          t = this.decodeExtension(e, 1);
        } else if (e === 200) {
          let e = this.lookU16();
          t = this.decodeExtension(e, 2);
        } else if (e === 201) {
          let e = this.lookU32();
          t = this.decodeExtension(e, 4);
        } else throw new Q(`Unrecognized type byte: ${Xa(e)}`);
        this.complete();
        let n = this.stack;
        for (; n.length > 0; ) {
          let e = n.top();
          if (e.type === eo) {
            if (
              ((e.array[e.position] = t), e.position++, e.position === e.size)
            )
              (t = e.array), n.release(e);
            else continue DECODE;
          } else if (e.type === to) {
            if (t === `__proto__`)
              throw new Q(`The key __proto__ is not allowed`);
            (e.key = this.mapKeyConverter(t)), (e.type = no);
            continue DECODE;
          } else if (
            ((e.map[e.key] = t), e.readCount++, e.readCount === e.size)
          )
            (t = e.map), n.release(e);
          else {
            (e.key = null), (e.type = to);
            continue DECODE;
          }
        }
        return t;
      }
    }
    readHeadByte() {
      return (
        this.headByte === ao && (this.headByte = this.readU8()), this.headByte
      );
    }
    complete() {
      this.headByte = ao;
    }
    readArraySize() {
      let e = this.readHeadByte();
      switch (e) {
        case 220:
          return this.readU16();
        case 221:
          return this.readU32();
        default:
          if (e < 160) return e - 144;
          throw new Q(`Unrecognized array type byte: ${Xa(e)}`);
      }
    }
    pushMapState(e) {
      if (e > this.maxMapLength)
        throw new Q(
          `Max length exceeded: map length (${e}) > maxMapLengthLength (${this.maxMapLength})`
        );
      this.stack.pushMapState(e);
    }
    pushArrayState(e) {
      if (e > this.maxArrayLength)
        throw new Q(
          `Max length exceeded: array length (${e}) > maxArrayLength (${this.maxArrayLength})`
        );
      this.stack.pushArrayState(e);
    }
    decodeString(e, t) {
      return !this.rawStrings || this.stateIsMapKey()
        ? this.decodeUtf8String(e, t)
        : this.decodeBinary(e, t);
    }
    decodeUtf8String(e, t) {
      if (e > this.maxStrLength)
        throw new Q(
          `Max length exceeded: UTF-8 byte length (${e}) > maxStrLength (${this.maxStrLength})`
        );
      if (this.bytes.byteLength < this.pos + t + e) throw co;
      let n = this.pos + t,
        r;
      return (
        (r =
          this.stateIsMapKey() && this.keyDecoder?.canBeCached(e)
            ? this.keyDecoder.decode(this.bytes, n, e)
            : ja(this.bytes, n, e)),
        (this.pos += t + e),
        r
      );
    }
    stateIsMapKey() {
      return this.stack.length > 0 && this.stack.top().type === to;
    }
    decodeBinary(e, t) {
      if (e > this.maxBinLength)
        throw new Q(
          `Max length exceeded: bin length (${e}) > maxBinLength (${this.maxBinLength})`
        );
      if (!this.hasRemaining(e + t)) throw co;
      let n = this.pos + t,
        r = this.bytes.subarray(n, n + e);
      return (this.pos += t + e), r;
    }
    decodeExtension(e, t) {
      if (e > this.maxExtLength)
        throw new Q(
          `Max length exceeded: ext length (${e}) > maxExtLength (${this.maxExtLength})`
        );
      let n = this.view.getInt8(this.pos + t),
        r = this.decodeBinary(e, t + 1);
      return this.extensionCodec.decode(r, n, this.context);
    }
    lookU8() {
      return this.view.getUint8(this.pos);
    }
    lookU16() {
      return this.view.getUint16(this.pos);
    }
    lookU32() {
      return this.view.getUint32(this.pos);
    }
    readU8() {
      let e = this.view.getUint8(this.pos);
      return this.pos++, e;
    }
    readI8() {
      let e = this.view.getInt8(this.pos);
      return this.pos++, e;
    }
    readU16() {
      let e = this.view.getUint16(this.pos);
      return (this.pos += 2), e;
    }
    readI16() {
      let e = this.view.getInt16(this.pos);
      return (this.pos += 2), e;
    }
    readU32() {
      let e = this.view.getUint32(this.pos);
      return (this.pos += 4), e;
    }
    readI32() {
      let e = this.view.getInt32(this.pos);
      return (this.pos += 4), e;
    }
    readU64() {
      let e = Ia(this.view, this.pos);
      return (this.pos += 8), e;
    }
    readI64() {
      let e = Fa(this.view, this.pos);
      return (this.pos += 8), e;
    }
    readU64AsBigInt() {
      let e = this.view.getBigUint64(this.pos);
      return (this.pos += 8), e;
    }
    readI64AsBigInt() {
      let e = this.view.getBigInt64(this.pos);
      return (this.pos += 8), e;
    }
    readF32() {
      let e = this.view.getFloat32(this.pos);
      return (this.pos += 4), e;
    }
    readF64() {
      let e = this.view.getFloat64(this.pos);
      return (this.pos += 8), e;
    }
  };
function fo(e, t) {
  return new uo(t).decode(e);
}
var po = 5e3,
  mo = `6.2.1`,
  ho = `PlaySocket error: `,
  go = `PlaySocket warning: `,
  _o = `PlaySocket log: `,
  $ = `PlaySocket CRDT manager: `,
  vo = class {
    #e;
    #t = new Map();
    #n = new Map();
    #r = {};
    #i = {};
    #a = 0;
    #o = new Map();
    #s = !1;
    constructor(e) {
      e && (this.#s = !0),
        (this.#e = crypto.randomUUID()),
        this.#n.set(this.#e, 0);
    }
    importState(e) {
      try {
        let { keyOperations: t, vectorClock: n } = e;
        this.#s && console.log($ + `Importing state:`, e),
          this.#o.clear(),
          (this.#r = {}),
          (this.#i = {}),
          (this.#t = new Map(t)),
          (this.#n = new Map(n)),
          this.#n.has(this.#e) || this.#n.set(this.#e, 0),
          this.#t.forEach((e, t) => {
            e.forEach((e) => {
              this.#o.set(e.uuid, Date.now());
            });
          });
        for (let e of this.#t.keys()) this.#u(e);
      } catch (e) {
        console.error($ + `Failed to import state:`, e);
      }
    }
    importPropertyUpdate(e) {
      try {
        let { key: t, operation: n, vectorClock: r } = e,
          i = this.#p(n);
        if (
          (this.#s && console.log($ + `Importing update:`, e),
          this.#t.size >= 100 && !this.#t.has(t))
        )
          throw Error(`Key limit exceeded`);
        let a = [...(this.#t.get(t) || [])];
        for (let [e, t] of r)
          (!this.#n.has(e) || this.#n.get(e) < t) && this.#n.set(e, t);
        this.#n.size > 1e3 && (this.#n = new Map([...this.#n].slice(-100)));
        let o = new Set(a.map((e) => e.uuid));
        i.uuid &&
          !o.has(i.uuid) &&
          (a.push({ ...i }), this.#o.set(i.uuid, Date.now())),
          this.#t.set(t, this.#d(a)),
          this.#u(t),
          this.#c();
      } catch (e) {
        console.error($ + `Failed to import property update:`, e);
      }
    }
    revertPropertyUpdate(e) {
      try {
        let t = e.key,
          n = e.operation.uuid,
          r = this.#t.get(t);
        if (!r?.some((e) => e.uuid === n)) return;
        this.#s &&
          console.log(
            `PlaySocket CRDT manager: Removing operation ${n} for key ${t} as part of property update reversion`
          );
        let i = r.filter((e) => e.uuid !== n);
        this.#o.delete(n),
          i.length ? this.#t.set(t, i) : this.#t.delete(t),
          this.#u(t);
      } catch (e) {
        console.error($ + `Failed to revert property update:`, e);
      }
    }
    updateProperty(e, t, n, r) {
      try {
        (n = this.#p(n)),
          (r = this.#p(r)),
          this.#s &&
            console.log(
              `PlaySocket CRDT manager: Updating property with key ${e}, type ${t}, value ${n} and secondValue ${r}`
            );
        let i = this.#n.get(this.#e) || 0;
        this.#n.set(this.#e, i + 1);
        let a = [...(this.#t.get(e) || [])],
          o = this.#l(
            { type: t, value: n, secondValue: r },
            Array.from(this.#n.entries())
          );
        return (
          a.push(o),
          this.#t.set(e, a),
          this.#u(e),
          this.#c(),
          {
            key: e,
            operation: { ...o },
            vectorClock: Array.from(this.#n.entries()),
          }
        );
      } catch (t) {
        console.error(
          `PlaySocket CRDT manager: Failed to add operation for key ${e}:`,
          t
        );
      }
    }
    #c() {
      try {
        if (Date.now() - this.#a < 1e3) return;
        this.#a = Date.now();
        for (let [e, t] of this.#t.entries()) {
          if (t?.length < 5) continue;
          let n = t.length;
          if (
            (t.forEach((e, r) => {
              if (
                e.uuid &&
                this.#o.has(e.uuid) &&
                Date.now() - this.#o.get(e.uuid) > 5e3
              ) {
                let i = r + 1;
                (n = t.length - i), this.#o.delete(e.uuid);
              }
            }),
            n < t.length)
          ) {
            this.#s &&
              console.log(
                `PlaySocket CRDT manager: Running garbage collection for key ${e} with current operations:`,
                t
              );
            let r = t.slice(-n),
              i = t.slice(0, -n),
              a = i[i.length - 1]?.vectorClock || [],
              o = null;
            for (let e of i)
              e.data &&
                (o = this.#f(o, e.data.type, e.data.value, e.data.secondValue));
            let s = this.#l({ type: `set`, value: o }, a);
            this.#s &&
              console.log(
                $ + `Operations after garbage collection for this key:`,
                [s, ...r]
              ),
              this.#t.set(e, [s, ...r]);
          }
        }
      } catch (e) {
        console.error($ + `Error running garbage collection:`, e);
      }
    }
    #l(e, t) {
      let n = {
        data: e,
        vectorClock: t,
        source: this.#e,
        uuid: crypto.randomUUID(),
      };
      return this.#o.set(n.uuid, Date.now()), n;
    }
    #u(e) {
      try {
        let t = this.#t.get(e);
        if (!t?.length) {
          delete this.#r[e];
          return;
        }
        let n = null;
        for (let e of t)
          e.data &&
            (n = this.#f(n, e.data.type, e.data.value, e.data.secondValue));
        this.#r[e] = n;
      } catch (t) {
        console.error(
          `PlaySocket CRDT manager: Failed to process property for key ${e}:`,
          t
        );
      }
    }
    #d(e) {
      return [...e].sort((e, t) => {
        let n = new Map(e.vectorClock || []),
          r = new Map(t.vectorClock || []),
          i = !1,
          a = !1,
          o = new Set([...n.keys(), ...r.keys()]);
        for (let e of o) {
          let t = n.get(e) || 0,
            o = r.get(e) || 0;
          t > o && (i = !0), t < o && (a = !0);
        }
        if (i && !a) return 1;
        if (!i && a) return -1;
        let s = Math.max(...Array.from(n.values()), 0),
          c = Math.max(...Array.from(r.values()), 0);
        return s === c ? e.source.localeCompare(t.source) : s - c;
      });
    }
    #f(e, t, n, r) {
      try {
        if (t === `set`) return n;
        if (
          ((e = structuredClone(e)),
          t === `number-increment` &&
            (Number.isFinite(e) || (e = 0), Number.isFinite(n) && (e += n)),
          t.startsWith(`array`))
        ) {
          Array.isArray(e) || (e = []);
          let i = typeof n == `object` && !!n,
            a = (e) =>
              i && typeof e == `object` && e
                ? JSON.stringify(e) === JSON.stringify(n)
                : e === n;
          switch (t) {
            case `array-add`:
              e.push(n);
              break;
            case `array-add-unique`:
              e.some(a) || e.push(n);
              break;
            case `array-remove-matching`:
              e = e.filter((e) => !a(e));
              break;
            case `array-update-matching`: {
              let t = e.findIndex(a);
              t !== -1 && (e[t] = r);
              break;
            }
          }
        }
        if (t.startsWith(`object`))
          switch (
            ((typeof e != `object` || !e || Array.isArray(e)) && (e = {}), t)
          ) {
            case `object-set-key`:
              n !== `__proto__` && (e[n] = r);
              break;
            case `object-remove-key`:
              delete e[n];
          }
        return e;
      } catch (t) {
        return (
          console.error(
            `PlaySocket CRDT manager: Failed to handle operation with curValue ${e}:`,
            t
          ),
          e
        );
      }
    }
    #p(e) {
      if (e === void 0) return null;
      if (JSON.stringify(e)?.length > 5e4) throw Error(`Value too large`);
      return Array.isArray(e)
        ? Array.from(e, (e) => this.#p(e))
        : e && typeof e == `object`
        ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, this.#p(t)]))
        : e;
    }
    get propertyStore() {
      try {
        return structuredClone(this.#r);
      } catch {
        return console.error($ + `Failed to parse property store`), {};
      }
    }
    get rawPropertyStore() {
      return this.#r;
    }
    get didPropertiesChange() {
      try {
        if (JSON.stringify(this.#r) !== JSON.stringify(this.#i))
          return (this.#i = structuredClone(this.#r)), !0;
      } catch {
        console.error($ + `Failed to stringify and compare property stores`);
      }
      return !1;
    }
    get state() {
      return {
        keyOperations: [...this.#t.entries()],
        vectorClock: [...this.#n.entries()],
      };
    }
  },
  yo = 3e3,
  bo = class {
    #e;
    #t;
    #n;
    #r = null;
    #i = !1;
    #a;
    #o;
    #s = null;
    #c = 0;
    #l;
    #u = new Map();
    #d = null;
    #f = null;
    #p = null;
    #m = null;
    #h = null;
    #g = new Map();
    #_;
    #v;
    #y = 0;
    #b = !1;
    #x = !1;
    constructor(e, t = {}) {
      (this.#e = e ?? void 0),
        t.endpoint && (this.#n = t.endpoint),
        t.customData && (this.#a = { ...t.customData }),
        t.debug && (this.#x = !0),
        (this.#l = new vo(this.#x));
    }
    #S(e) {
      return new Promise((t, n) =>
        setTimeout(() => n(Error(`${e} timed out`)), yo)
      );
    }
    onEvent(e, t) {
      return [
        `status`,
        `moved`,
        `instanceDestroyed`,
        `storageUpdated`,
        `hostMigrated`,
        `clientJoined`,
        `clientLeft`,
      ].includes(e)
        ? (this.#u.has(e) || this.#u.set(e, []),
          this.#u.get(e).push(t),
          () => {
            let n = this.#u.get(e)?.indexOf(t) ?? -1;
            n !== -1 &&
              (this.#u.get(e).splice(n, 1),
              this.#u.get(e).length || this.#u.delete(e));
          })
        : (console.warn(go + `Invalid event type ${e}`), () => {});
    }
    #C(e, ...t) {
      let n = this.#u.get(e);
      n &&
        [...n].forEach((n) => {
          try {
            n(...t);
          } catch (t) {
            console.error(ho + `${e} callback error:`, t);
          }
        });
    }
    async init() {
      if (this.#i) throw Error(`Already initialized`);
      if (!this.#n) throw Error(`No websocket endpoint provided`);
      this.#C(`status`, `Initializing.`), await this.#w();
      let e = await Promise.race([
        new Promise((e, t) => {
          (this.#p = { resolve: e, reject: t }),
            this.#A({
              type: `register`,
              id: this.#e,
              version: mo,
              customData: this.#a || void 0,
            });
        }),
        this.#S(`Registration`),
      ]).finally(() => {
        this.#p = null;
      });
      return e && (this.#e = e), this.#e;
    }
    async #w() {
      return Promise.race([
        new Promise((e, t) => {
          (this.#m = { reject: t }),
            (this.#r = new WebSocket(this.#n)),
            (this.#r.binaryType = `arraybuffer`),
            this.#T(),
            (this.#r.onopen = e);
        }),
        this.#S(`Connection attempt`),
      ]).finally(() => {
        this.#m = null;
      });
    }
    #T() {
      (this.#r.onmessage = (e) => {
        this.#D();
        try {
          let t = fo(new Uint8Array(e.data));
          if (!t.type) return;
          switch (t.type) {
            case `registration_failed`:
              this.#p &&
                this.#p.reject(
                  Error(
                    `Failed to register: ` + (t.reason || `No reason provided`)
                  )
                );
              break;
            case `registered`:
              (this.#t = t.sessionToken),
                (this.#i = !0),
                this.#p && this.#p.resolve(t.id),
                this.#C(`status`, `Connected to server.`);
              break;
            case `join_accepted`:
              this.#x && console.log(_o + `State received for join:`, t.state),
                (this.#s = t.roomId),
                this.#l.importState(t.state),
                (this.#c = t.participantCount),
                (this.#o = t.host),
                this.#C(`storageUpdated`, this.storage),
                this.#d
                  ? (this.#C(`status`, `Connected to room.`), this.#d.resolve())
                  : (this.#C(`status`, `Moved to room.`),
                    this.#C(`moved`, t.roomId));
              break;
            case `join_rejected`:
              this.#C(
                `status`,
                `Failed to join room: ` + (t.reason || `No reason provided`)
              ),
                this.#d &&
                  this.#d.reject(
                    Error(
                      `Failed to join room: ` +
                        (t.reason || `No reason provided`)
                    )
                  );
              break;
            case `reconnected`:
              (this.#b = !1),
                (this.#y = 0),
                t.roomData &&
                  (this.#x &&
                    console.log(
                      _o + `State received for reconnect:`,
                      t.roomData.state
                    ),
                  this.#l.importState(t.roomData.state),
                  (this.#c = t.roomData.participantCount),
                  this.#k(t.roomData.host),
                  this.#C(`storageUpdated`, this.storage),
                  this.#s &&
                    t.roomData.roomId !== this.#s &&
                    (this.#C(`status`, `Moved to room.`),
                    this.#C(`moved`, t.roomData.roomId)),
                  (this.#s = t.roomData.roomId)),
                this.#C(`status`, `Reconnected.`),
                this.#h && this.#h.resolve();
              break;
            case `reconnection_failed`:
              this.#h &&
                this.#h.reject(
                  Error(`Server rejected reconnection: ` + t.reason)
                );
              break;
            case `room_created`:
              (this.#s = t.roomId),
                (this.#c = t.participantCount),
                this.#C(`status`, `Room created.`),
                this.#l.importState(t.state),
                this.#C(`storageUpdated`, this.storage),
                this.#f && this.#f.resolve(t.roomId);
              break;
            case `room_creation_failed`:
              this.#f &&
                this.#f.reject(
                  Error(
                    `Failed to create room: ` +
                      (t.reason || `No reason provided`)
                  )
                );
              break;
            case `property_updated`:
              this.#x &&
                console.log(_o + `Property update received:`, t.update),
                this.#l.importPropertyUpdate(t.update),
                this.#l.didPropertiesChange &&
                  this.#C(`storageUpdated`, this.storage);
              break;
            case `property_update_rejected`:
              console.warn(
                _o +
                  `Property update rejected: ` +
                  (t.reason || `No reason provided`)
              ),
                this.#l.revertPropertyUpdate(t.update),
                this.#l.didPropertiesChange &&
                  this.#C(`storageUpdated`, this.storage);
              break;
            case `kicked`:
              this.destroy(
                `Kicked out of room: ${t.reason || `No reason provided`}`
              );
              break;
            case `host_migrated`:
              this.#k(t.newHost);
              break;
            case `client_left`:
              (this.#c = t.participantCount),
                this.#C(`clientLeft`, t.client),
                this.#C(`status`, `Client ${t.client} disconnected.`);
              break;
            case `client_joined`:
              (this.#c = t.participantCount),
                this.#C(`clientJoined`, t.client),
                this.#C(`status`, `Client ${t.client} connected.`);
              break;
            case `request_succeeded`:
              this.#g.get(t.request.uuid)?.resolve();
              break;
            case `request_failed`:
              this.#g
                .get(t.request.uuid)
                ?.reject(Error(t.reason || `No reason provided`));
          }
        } catch (e) {
          console.error(ho + `Error handling message:`, e);
        }
      }),
        (this.#r.onerror = () => {
          this.#m && this.#m.reject(Error(`WebSocket error`));
        }),
        (this.#r.onclose = () => this.#E());
    }
    #E() {
      !this.#i ||
        this.#b ||
        ((this.#r.onclose = this.#r.onerror = this.#r.onmessage = null),
        this.#r.close(),
        this.#C(`status`, `Disconnected.`),
        (this.#y = 0),
        this.#O());
    }
    #D() {
      clearTimeout(this.#v), (this.#v = setTimeout(() => this.#E(), po * 1.5));
    }
    async #O() {
      if ((this.#y++, this.#y > 9))
        this.destroy(`Disconnected, reconnection failed.`);
      else {
        this.#C(`status`, `Trying to reconnect: Attempt ${this.#y}`),
          (this.#b = !0);
        try {
          await this.#w(),
            await Promise.race([
              new Promise((e, t) => {
                (this.#h = { resolve: e, reject: t }),
                  this.#A({
                    type: `reconnect`,
                    id: this.#e,
                    sessionToken: this.#t,
                  });
              }),
              this.#S(`Reconnection request`),
            ]).finally(() => {
              this.#h = null;
            });
        } catch (e) {
          if (!this.#i) return;
          this.#C(`status`, `Reconnection failed: ` + e.message),
            (this.#_ = setTimeout(() => this.#O(), 500));
        }
      }
    }
    #k(e) {
      this.#o != e && ((this.#o = e), this.#C(`hostMigrated`, e));
    }
    #A(e) {
      if (!this.#r || this.#r?.readyState !== WebSocket.OPEN)
        console.warn(go + `Failed to send message, not connected`);
      else
        try {
          this.#r.send(Ya(e));
        } catch (e) {
          console.error(ho + `Error sending message:`, e);
        }
    }
    async createRoom(e) {
      if (!this.#i) throw Error(`Not initialized`);
      return Promise.race([
        new Promise((t, n) => {
          (this.#o = this.#e),
            (this.#f = { resolve: t, reject: n }),
            this.#A({ type: `create_room`, initialStorage: e });
        }),
        this.#S(`Room creation`),
      ]).finally(() => {
        this.#f = null;
      });
    }
    async joinRoom(e) {
      if (!this.#i) throw Error(`Not initialized`);
      return Promise.race([
        new Promise((t, n) => {
          (this.#d = { resolve: t, reject: n }),
            this.#C(`status`, `Connecting to room ${e}.`),
            this.#A({ type: `join_room`, roomId: e });
        }),
        this.#S(`Room join`),
      ]).finally(() => {
        this.#d = null;
      });
    }
    updateStorage(e, t, n, r) {
      if (!this.#s) {
        console.error(ho + `Failed to update storage, not in a room`);
        return;
      }
      this.#x &&
        console.log(
          _o +
            `Property update for key ${e}, operation ${t}, value ${n} and secondValue ${r}`
        );
      let i = this.#l.updateProperty(e, t, n, r);
      this.#A({ type: `update_property`, update: i }),
        this.#l.didPropertiesChange && this.#C(`storageUpdated`, this.storage);
    }
    async sendRequest(e, t) {
      if (!this.#i) throw Error(`Not initialized`);
      this.#x && console.log(_o + `Server request with name ${e} and data:`, t);
      let n = crypto.randomUUID();
      return Promise.race([
        new Promise((r, i) => {
          this.#g.set(n, { resolve: r, reject: i }),
            this.#A({
              type: `request`,
              request: { name: e, data: t, uuid: n },
            });
        }),
        this.#S(`Request`),
      ]).finally(() => {
        this.#g.delete(n);
      });
    }
    destroy(e) {
      (this.#i = !1),
        this.#r &&
          (this.#r.readyState === WebSocket.OPEN &&
            this.#A({ type: `disconnect` }),
          this.#r.close(),
          (this.#r.onmessage = null),
          (this.#r.onerror = null),
          (this.#r.onclose = null),
          (this.#r = null),
          this.#C(`status`, `Destroyed.`),
          this.#C(`instanceDestroyed`, e)),
        clearTimeout(this.#_),
        clearTimeout(this.#v),
        (this.#o = null),
        (this.#s = null),
        (this.#c = 0),
        (this.#b = !1),
        (this.#y = 0),
        this.#d && this.#d.reject(Error(`Destroyed`)),
        this.#f && this.#f.reject(Error(`Destroyed`)),
        this.#p && this.#p.reject(Error(`Destroyed`)),
        this.#m && this.#m.reject(Error(`Destroyed`)),
        this.#h && this.#h.reject(Error(`Destroyed`)),
        this.#g.forEach((e) => {
          e.reject(Error(`Destroyed`));
        });
    }
    get participantCount() {
      return this.#c;
    }
    get storage() {
      return this.#l.propertyStore;
    }
    get isHost() {
      return this.#e == this.#o;
    }
    get id() {
      return this.#e;
    }
  },
  xo = 0,
  So = 0,
  Co = null;
async function wo() {
  let e = Date.now();
  return e - xo < 3e5
    ? So + Math.round(e - xo)
    : Co ||
        ((Co = (async () => {
          let t = new AbortController(),
            n = setTimeout(() => t.abort(), 1e3);
          try {
            let e = await fetch(S(A) + `/matchmaking/time/timestamp`, {
              signal: t.signal,
            });
            if (!e.ok) throw Error(`Server responded with non-200 status`);
            let n = await e.json();
            return (xo = Date.now()), (So = Math.round(n?.timestamp)), So;
          } catch (t) {
            return (
              console.error(`Error getting time from server:`, t),
              So ? So + Math.round(e - xo) : Math.round(e)
            );
          } finally {
            clearTimeout(n), (Co = null);
          }
        })()),
        Co);
}
var To = !0;
z.subscribe((e) => {
  if (To) return (To = !1);
  e && S(M) ? Eo() : localStorage.removeItem(`rejoinRoom`);
});
function Eo() {
  localStorage.setItem(`rejoinRoom`, JSON.stringify({ code: S(z) }));
}
async function Do(e = !0) {
  let t = localStorage.getItem(`rejoinRoom`);
  if (t) {
    let n;
    try {
      n = JSON.parse(t);
    } catch {
      return localStorage.removeItem(`rejoinRoom`);
    }
    let { code: r } = n;
    if ((localStorage.removeItem(`rejoinRoom`), e)) Vt.set(r), ar.set(!0);
    else {
      try {
        let e = await fetch(S(A) + `/matchmaking/can-rejoin`, {
          method: `POST`,
          headers: {
            "Content-Type": `application/json`,
            Authorization: `Bearer ` + localStorage.getItem(`bearer`),
          },
          body: JSON.stringify({ ...n, id: localStorage.getItem(`id`) }),
        });
        if (!e.ok) {
          let t = await e.json().catch(() => null);
          throw Error(t?.error || e.status);
        }
        if (!(await e.json()).rejoinable) return;
      } catch (e) {
        return (
          console.error(`Failed to check if room is rejoinable:`, e),
          k(
            `Error checking rejoin`,
            `An error occurred checking whether the previous multiplayer room can be rejoined.`,
            e.message
          )
        );
      }
      jo(r);
    }
  }
}
function Oo(e) {
  return S(F)?.storage?.players?.find((t) => t.clientId === e)?.teamIndex;
}
H.subscribe((e) => {
  e ? Lt.set(!0) : Lt.set(!1);
});
async function ko() {
  if (S(F))
    try {
      S(F)?.destroy();
    } catch (e) {
      console.error(
        `Error in createMultiplayerInstance() trying to destroy old instance:`,
        e
      );
    }
  if (!S(M) && !S(yt)) {
    let e = !1;
    S(ir) && (ir.set(!1), (e = !0)),
      fr.set(!0),
      await new Promise((e) => yt.set(e)),
      e && ir.set(!0);
  }
  try {
    let e = { clientToken: crypto.randomUUID() };
    S(M)
      ? (e.bearer = localStorage.getItem(`bearer`))
      : (e.guestName = S(vt) || null),
      ct.set(e.clientToken),
      F.set(new bo(null, { endpoint: S(be), customData: e }));
    let t = !1;
    return (
      S(F).onEvent(`status`, (e) => bt.set(e)),
      S(F).onEvent(`status`, (e) => console.log(e)),
      S(F).onEvent(`clientJoined`, (e) => {
        wt.set(S(F)?.participantCount);
      }),
      S(F).onEvent(`clientLeft`, (e) => {
        wt.set(S(F)?.participantCount),
          S(R) &&
            S(mt) &&
            (_e(`Teammate left, cancelling the matchmaking.`),
            ht.set(!0),
            ta().finally(() => ht.set(!1)));
      }),
      S(F).onEvent(`hostMigrated`, async () => {
        if (
          !S(F)?.storage?.gameStarted &&
          !S(F)?.storage?.matchmakingRoom &&
          S(F)?.isHost
        )
          try {
            await S(F)?.sendRequest(`startRoom`);
          } catch (e) {
            S(H) &&
              k(
                `Failed to start room`,
                `An error occurred trying to start the room upon host migration.`,
                e.message
              ),
              console.error(`Error starting room upon host migration:`, e);
          }
      }),
      S(F).onEvent(`moved`, (e) => {
        (t = !1), z.set(e), S(F)?.storage?.overlay && Uo();
      }),
      S(F).onEvent(`storageUpdated`, (e) => {
        H.set(!0),
          e.map && Ct.set(e.map),
          e.roundAmount && lt.set(e.roundAmount),
          e.roundLength && ut.set(e.roundLength),
          e.teamAmount && I.set(e.teamAmount),
          e.style && ft.set(e.style),
          e.restriction && dt.set(e.restriction),
          e.gameStarted &&
            fe.url.pathname !== `/` &&
            !t &&
            ((t = !0), X.set(!1), D(`/`)),
          e.gameStarted && S(R) && R.set(!1),
          e.players && Ho(),
          e.overlay != null &&
            e.overlay != S(Et) &&
            (e.overlay ? Uo() : Et.set(!1));
        let n = e.guesses?.find((e) => e.clientId === S(F)?.id);
        if (
          (S(B) ||
            ((n?.lat ?? 0) === S(fn) && (n?.lon ?? 0) === S(pn)) ||
            (fn.set(n?.lat ?? 0), pn.set(n?.lon ?? 0), os(n?.lat, n?.lon)),
          S(I) > 1 && e.guesses && !S(B) && cs(e?.guesses),
          e.confirmedGuessClients?.includes(S(F)?.id)
            ? (cn.set(!1), ji.set(!1))
            : (cn.set(!!e.timerStart), ji.set(!!n && !S(B))),
          e.chats && va(e.chats || []),
          e.locked != null && Bt.set(e.locked),
          e.restriction && ya(e.restriction),
          e.currentRound && St.set(e.currentRound),
          e.confirmedGuessClients && e.players)
        ) {
          let t = new Set(e.confirmedGuessClients),
            n = (e) => (e.length > 10 ? `${e.slice(0, 7)}...` : e),
            r = e.players
              .filter((e) => !e.disconnected && !t.has(e.clientId))
              .map((e) => n(e.username));
          zt.set(r);
        }
        if (e.showResult != null && e.showResult !== S(B)) {
          if (e.showResult) {
            let t =
              S(F)?.storage?.players?.filter((e) => !e.disconnected).length > 1
                ? S(F)?.storage?.tournamentRoom
                  ? 1e4
                  : 5e3
                : 0;
            Wt.set(`Wait ${t / 1e3}s...`),
              setTimeout(() => Wt.set(`Continue`), t),
              q.set(e?.location?.[0]),
              J.set(e?.location?.[1]),
              An.set(e?.mapBounds || S(kn)),
              bs();
          } else xs(), ts();
        }
        e.location &&
          (S(q) != e?.location[0] || S(J) != e?.location[1]) &&
          qi(!0),
          e.countdownActive && Ko(),
          e.timerStart &&
            e.timerStart.length != null &&
            e.timerStart.length !== 1 / 0 &&
            Yo(e.timerStart?.length, e.timerStart?.timestamp),
          !e.timerStart && qo?.isTimerActive() && qo?.stopTimer(),
          e.timeReducedOverlay != null &&
            e.timeReducedOverlay !== S(Tt) &&
            (e.timeReducedOverlay &&
            !e?.confirmedGuessClients?.includes(S(F)?.id)
              ? Mo()
              : Tt.set(!1)),
          e.teamMoveClients && jt.set(e.teamMoveClients);
      }),
      S(F).onEvent(`instanceDestroyed`, (e) => {
        if (S(H)) {
          if (e) {
            let t = S(ht) && e?.toLowerCase()?.includes?.(`kicked`),
              n = e?.toLowerCase()?.includes?.(`disconnected`) && S(M);
            !t && !n
              ? k(
                  `Disconnected`,
                  `You left multiplayer due to the reason below.`,
                  e
                )
              : n && Do(!0);
          }
          Io(!1);
        }
      }),
      await S(F).init(),
      S(F).id
    );
  } catch (e) {
    throw (console.error(`Error creating multiplayer instance:`, e), e);
  }
}
function Ao() {
  let e = fe.url.searchParams.get(`join`);
  if (e) return D(fe.url.pathname, { replaceState: !0 }), jo(e);
  S(M) && Do(!1);
}
async function jo(e, t) {
  ir.set(!0), (await Fo(e)) && (ir.set(!1), t?.());
}
async function Mo() {
  try {
    Tt.set(!0), j(`time_reduced`);
  } catch (e) {
    console.warn(`Error showing time reduce overlay:`, e);
  }
}
async function No() {
  S(B) ? (xs(), await ts()) : es();
}
async function Po(e = !1) {
  try {
    await No(), await ko();
    let t = await S(F)?.createRoom({
      roundAmount: S(lt),
      roundLength: S(ut),
      teamAmount: S(I),
      style: S(ft),
      restriction: S(dt),
      map: S(Ct),
      matchmakingRoom: e,
    });
    return z.set(t), wt.set(S(F)?.participantCount), !0;
  } catch (e) {
    return (
      R.set(!1),
      console.error(`Error setting up room:`, e),
      k(`Error creating room`, null, e.message),
      !1
    );
  }
}
async function Fo(e) {
  try {
    (e = e.replaceAll(` `, ``).replaceAll(`-`, ``).toUpperCase()), await No();
    try {
      await ko();
    } catch (e) {
      throw (R.set(!1), k(`Error joining room`, null, e.message), e);
    }
    return (
      await S(F).joinRoom(e),
      z.set(e),
      wt.set(S(F)?.participantCount),
      X.set(!1),
      D(`/`),
      !0
    );
  } catch (e) {
    return console.error(`Error joining room:`, e), !1;
  }
}
function Io(e = !0) {
  let t = S(H);
  H.set(!1),
    R.set(!1),
    pt.set(!1),
    mt.set(!1),
    e &&
      (S(F)?.storage?.divisionRoom &&
        S(F)?.storage?.gameStarted &&
        !S(F)?.storage?.divisionDuelProcessed &&
        ra(),
      S(F)?.destroy(),
      F.set(null)),
    qo?.stopTimer(),
    (Jo = null),
    clearInterval(Go),
    (Go = null),
    ut.set(60),
    lt.set(3),
    I.set(1),
    wt.set(0),
    ft.set(`standard`),
    z.set(null),
    bt.set(),
    Wt.set(`Continue`),
    dt.set(Object.keys(S(Ze))?.[0]),
    Rt.set([]),
    Bt.set(!1),
    St.set(0),
    Ct.set(S(P)),
    It.set(0),
    jt.set({}),
    ir.set(!1),
    t && (Et.set(!1), cn.set(!0), Ho(), qi()),
    X.set(!0);
}
function Lo(e) {
  e
    ? (S(F)?.storage?.tournamentRoom || Pt.set(!0),
      !S(F)?.storage?.matchmakingRoom &&
        !S(F)?.storage?.tournamentRoom &&
        S(F)?.isHost &&
        Mt.set(!0),
      S(F)?.storage?.matchmakingRoom &&
        S(F)?.storage?.teamAmount === 2 &&
        Nt.set(!0))
    : (Pt.set(!1), Mt.set(!1), Nt.set(!1));
}
function Ro(e) {
  let t = [200, 0, 120, 60, 300];
  return `hsla(${t[e % t.length]}, 87.9%, 64.3%, 0.3)`;
}
function zo(e) {
  let t = [`Blue`, `Red`, `Green`, `Yellow`, `Purple`];
  return t[e % t.length];
}
function Bo(e = []) {
  return [...e].sort((e, t) =>
    e.spectator === t.spectator
      ? t.score - e.score || e.disconnected - t.disconnected
      : e.spectator
      ? 1
      : -1
  );
}
function Vo(e) {
  return {
    color: Ro(e),
    colorName: zo(e),
    teamIndex: e,
    score: S(F)?.storage?.teamScores?.[e]?.score ?? 0,
    players: [],
  };
}
function Ho() {
  let e = (S(F)?.storage?.players || []).filter((e) => !e.hidden),
    t = Bo(e);
  if ((Ot.set(t), S(I) <= 1)) {
    kt.set(t);
    return;
  }
  let n = Array.from({ length: S(I) }, (e, t) => Vo(t));
  e.forEach((e) => {
    n[e.teamIndex].players.push(e);
  });
  let r = n
    .map((e) => ({ ...e, players: Bo(e.players) }))
    .sort((e, t) => t.score - e.score);
  kt.set(r);
}
function Uo() {
  Et.set(!0),
    S(F)?.storage?.firstRoundPlayed || Dt.set(`Waiting...`),
    S(F)?.storage?.gameEnded
      ? (Wo(S(kt)), Lo(!0))
      : (Lo(!1),
        S(F)?.storage?.firstRoundPlayed &&
          Dt.set(`Results from round ` + S(F)?.storage?.currentRound)),
    At.set(
      S(ft) == `duel` &&
        S(F)?.storage?.currentRound >= 3 &&
        S(F)?.storage?.currentRound < S(F)?.storage?.roundAmount
    );
}
function Wo(e) {
  if (S(I) > 1) {
    let t = e.filter((e) => e.players?.length),
      n = t[0],
      r = t[1] || null;
    if (r && n?.score == r?.score) Dt.set(`It's a draw!`);
    else {
      let e = n?.colorName;
      Dt.set(`Team ${e} won!`),
        S(F)?.storage?.players?.find((e) => e.clientId == S(F)?.id)
          ?.teamIndex == n?.teamIndex
          ? setTimeout(() => {
              j(`win_sound`);
            }, 1e3)
          : setTimeout(() => {
              j(`lose_sound`);
            }, 1e3);
    }
  } else {
    let t = e[0],
      n = e[1] || null;
    n && t?.score == n?.score && t?.disconnected == n?.disconnected
      ? Dt.set(`It's a draw!`)
      : (Dt.set(t?.username + ` won!`),
        S(F)?.id == t?.clientId
          ? setTimeout(() => {
              j(`win_sound`);
            }, 1e3)
          : setTimeout(() => {
              j(`lose_sound`);
            }, 1e3));
  }
}
var Go;
async function Ko() {
  if (Go) return;
  Lo(!1);
  let e = 3;
  Go = setInterval(async function () {
    e > 0
      ? (Dt.set(`Starting... ${e}`), j(`match_countdown`), e--)
      : (clearInterval(Go), (Go = null), j(`match_countdown_start`));
  }, 1e3);
}
var qo, Jo;
async function Yo(e, t) {
  if (t === Jo) return;
  Jo = t;
  let n = await wo();
  S(F)?.storage?.timerStart &&
    (qo = Cr(Math.round(Math.max(0, e - (n / 1e3 - t / 1e3)))));
}
function Xo(e) {
  return e - Math.round(e / 360) * 360;
}
function Zo() {
  let e = L.latLngBounds(L.latLng(-135, -315), L.latLng(135, 315)),
    t = Math.max(window.devicePixelRatio, 2),
    n = { maxZoom: 20, subdomains: [`mt0`, `mt1`, `mt2`, `mt3`], bounds: e },
    r = L.tileLayer(
      `https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&hl=en&scale=` + t,
      n
    ),
    i = L.tileLayer(
      `https://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}&hl=en&scale=` + t,
      n
    ),
    a = L.tileLayer(
      `https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}&hl=en&scale=` + t,
      n
    ),
    o = L.map(`map`, {
      zoom: 2,
      center: [0, 0],
      minZoom: 2,
      maxBounds: e,
      maxBoundsViscosity: 1,
      zoomControl: !1,
      cursor: `crosshair`,
    }),
    s = { Standard: r, Terrain: i, Satellite: a };
  r.addTo(o),
    L.control.layers(s, {}, { position: `topleft` }).addTo(o),
    o.on(`click`, (e) => {
      as(e.latlng);
    }),
    G.set(o),
    o.whenReady(() => {
      Qo && ((Qo = !1), es()), $o && (($o = !1), ns());
    });
}
var Qo = !1,
  $o = !1;
function es(e = !1) {
  if (!S(G)) return (Qo = !0);
  S(K)?.forEach((e) => {
    S(G).removeLayer(e);
  }),
    K.set([]),
    e || (fn.set(0), pn.set(0)),
    ji.set(!1),
    e || ns();
}
function ts(e = !1) {
  return new Promise((t) =>
    setTimeout(() => {
      if (S(B) || (e && S(H))) return t();
      es(), t();
    }, 150)
  );
}
function ns() {
  if (!S(G)) return ($o = !0);
  let e = S(An);
  S(G).setView(new L.LatLng(e.lat, e.lng), e.zoom);
}
var rs;
function is(e) {
  let t = e.style.transform;
  (e.style.transformOrigin = `50% 97%`),
    e.animate(
      [
        { transform: t + ` scale(1.04, 0.94)` },
        { transform: t + ` scale(0.97, 1.04)`, offset: 0.4 },
        { transform: t + ` scale(1, 1)` },
      ],
      { duration: 150, easing: `ease-out` }
    );
}
function as(e) {
  if (!S(B) && S(cn))
    try {
      if (
        (ji.set(!0),
        j(`pin_drop`, `pin`),
        fn.set(e.lat),
        pn.set(e.lng),
        os(e.lat, e.lng),
        S(H))
      ) {
        let t = S(F)?.storage?.players?.find((e) => e.clientId === S(F)?.id),
          n = {
            clientId: S(F)?.id,
            userId: t?.userId,
            lat: e.lat,
            lon: e.lng,
            username: t?.username,
            pin: t?.pin,
            teamIndex: t?.teamIndex,
            scoreAdded: !1,
          },
          r = S(F)?.storage?.guesses?.find((e) => e.clientId === S(F)?.id);
        r
          ? S(F)?.updateStorage(`guesses`, `array-update-matching`, r, n)
          : S(F)?.updateStorage(`guesses`, `array-add`, n);
      }
    } catch (e) {
      console.error(`Error in onMapClick function:`, e);
    }
}
function os(e, t) {
  if (
    S(G) &&
    (rs && S(G).removeLayer(rs),
    K.update((e) => (e || []).filter((e) => e !== rs)),
    (rs = null),
    e != null && t != null)
  ) {
    let n = new L.Icon({
      iconUrl: `/img/pins/player_pin` + S(je) + `.png`,
      iconSize: [35, 35],
      iconAnchor: [17.5, 34],
      popupAnchor: [1, -34],
    });
    (rs = new L.Marker(new L.LatLng(e, t), {
      icon: n,
      alt: ``,
      interactive: !1,
      keyboard: !1,
    })),
      rs.addTo(S(G)),
      is(rs.getElement()),
      K.update((e) => ((e ||= []), [...e, rs]));
  }
}
var ss = [];
function cs(e) {
  ss.forEach((e) => {
    S(G)?.removeLayer(e);
  }),
    K.update((e) => (e || []).filter((e) => !ss.includes(e))),
    (ss = []);
  try {
    e.forEach((e) => {
      let t = e.clientId,
        n = e.lat,
        r = e.lon,
        i = e.pin,
        a = e.teamIndex;
      if (t != S(F)?.id && a === Oo(S(F)?.id)) {
        let e = new L.LatLng(n, Xo(r)),
          t = new L.Icon({
            iconUrl: `/img/pins/player_pin` + (i ?? 0) + `.png`,
            iconSize: [35, 35],
            iconAnchor: [17.5, 34],
            popupAnchor: [1, -34],
          }),
          a = new L.marker(e, {
            icon: t,
            alt: ``,
            interactive: !1,
            keyboard: !1,
          });
        a.setOpacity(0.65),
          a.addTo(S(G)),
          K.update((e) => ((e ||= []), [...e, a])),
          ss.push(a);
      }
    });
  } catch (e) {
    console.error(`Error updating minimap with team markers: ` + e);
  }
}
async function ls(e, t, n, r) {
  if (!S(G)) {
    console.error(
      `Map not properly initialized - exiting result map load function.`
    );
    return;
  }
  let i = new L.Icon({
      iconUrl: `/img/pins/player_pin` + S(je) + `.png`,
      iconSize: [35, 35],
      iconAnchor: [17.5, 34],
      popupAnchor: [1, -34],
    }),
    a = new L.Icon({
      iconUrl: `/img/pins/result_pin.png`,
      iconSize: [35, 35],
      iconAnchor: [17.5, 34],
    }),
    o = new L.LatLng(n, r),
    s = null;
  if (!S(V)) {
    let n = new L.LatLng(e, Xo(t));
    s = new L.LatLngBounds([o, n]);
    let r = new L.Marker(n, {
      icon: i,
      alt: ``,
      interactive: !1,
      keyboard: !1,
    });
    S(H) && r.bindTooltip(`You`, { permanent: !0, direction: `right` }),
      r.addTo(S(G));
    let a = new L.Polyline([o, n], {
      color: `black`,
      weight: 1,
      opacity: 0.75,
    }).addTo(S(G));
    K.update((e) => ((e ||= []), [...e, r, a]));
  }
  S(H) &&
    S(F)?.storage?.guesses?.forEach((e) => {
      if (e.clientId === S(F)?.id) return;
      let t = e.lat,
        n = Xo(e.lon),
        r = new L.Icon({
          iconUrl: `/img/pins/player_pin` + (e.pin ?? 0) + `.png`,
          iconSize: [35, 35],
          iconAnchor: [17.5, 34],
          popupAnchor: [1, -34],
        }),
        i = new L.Marker([t, n], {
          icon: r,
          opacity: 0.75,
          alt: ``,
          interactive: !1,
          keyboard: !1,
        });
      i.bindTooltip(document.createTextNode(e.username), {
        permanent: !0,
        direction: `right`,
      }),
        i.addTo(S(G));
      let a = new L.Polyline([o, [t, n]], {
        color: `black`,
        weight: 1,
        opacity: 0.25,
      }).addTo(S(G));
      K.update((e) => ((e ||= []), [...e, i, a]));
    });
  let c = new L.Marker(o, { icon: a, alt: ``, interactive: !1, keyboard: !1 });
  if ((c.addTo(S(G)), K.update((e) => ((e ||= []), [...e, c])), S(V)))
    S(G).setView(o, 5, { animate: !1 }), setTimeout(() => us(null, n, r), 250);
  else {
    let i = S(G).getBoundsZoom(s, !1),
      a = Math.min(i + 1.5, 16);
    S(G).setView([e, Xo(t)], a, { animate: !1 }),
      setTimeout(() => us(s, n, r), 250);
  }
}
function us(e, t, n) {
  if (S(B)) {
    if ((S(G).invalidateSize(), e)) {
      let t = e.pad(0.35);
      S(G).flyToBounds(t, { duration: 0.5 });
    } else S(G).flyTo([t, n], 6, { duration: 0.5 });
  }
}
async function ds(e) {
  try {
    let t = { id: localStorage.getItem(`id`), experience: e },
      n = await fetch(`${S(A)}/accounts/update/add-experience`, {
        method: `PUT`,
        headers: {
          "Content-Type": `application/json`,
          Authorization: `Bearer ${localStorage.getItem(`bearer`)}`,
        },
        body: JSON.stringify(t),
      });
    if (n.ok) {
      let e = await n.json();
      Te.set(e?.user?.experience);
    } else {
      let e;
      try {
        e = await n.json();
      } catch {}
      throw Error(e?.error || n.status);
    }
  } catch (e) {
    console.error(`Error occurred updating user experience: `, e),
      k(
        `Experience update failed`,
        `Failed to update the user's experience.`,
        e.message
      );
  }
}
function fs() {
  Math.random() < 0.05 &&
    S(Ee) == 0 &&
    !S(Ke) &&
    localStorage.getItem(`supporterSlideup`) === null &&
    (ps(),
    Ei(
      `Enjoy playing?`,
      `Consider supporting to unlock awesome perks including ad-free!`,
      `Support`,
      () => {
        S(M)
          ? D(`/shop#supporter`)
          : ve(
              `Account required`,
              `A one-time payment requires an account so you can enjoy supporter perks on all your devices.`,
              () => {
                $i(() => D(`/shop#supporter`));
              },
              `Sign up`
            );
      },
      null,
      null,
      null,
      () => {
        localStorage.setItem(`supporterSlideup`, !0);
      }
    ));
}
async function ps() {
  if (S(Ti) != null) return S(Ti);
  try {
    let e = await fetch(S(A) + `/stripe/statistics/current-month`, {
      method: `GET`,
      headers: { "Content-Type": `application/json` },
    });
    if (!e.ok)
      console.error(
        `Error occurred while loading monthly supported amount: ` + e.status
      );
    else {
      let t = await e.json();
      Ti.set(t.supported_amount);
    }
  } catch (e) {
    console.error(
      `Network error occurred trying to load monthly supported amount: ` + e
    );
  }
}
var ms = 7500;
function hs() {
  Math.random() < 0.05 &&
    localStorage.getItem(`discordSlideup`) === null &&
    Ei(
      `Join our Discord`,
      null,
      `Join`,
      () => {
        window.open(S(ye), `_blank`),
          setTimeout(function () {
            localStorage.setItem(`discordSlideup`, `true`), gi.set(!1);
            let e = async () => {
              document.visibilityState === `visible` &&
                (document.removeEventListener(`visibilitychange`, e),
                await ds(ms),
                _e(`Thank you. Granted ${ms.toLocaleString()} XP.`));
            };
            document.addEventListener(`visibilitychange`, e);
          }, 250);
      },
      null,
      null,
      `<p>Join the OpenGuessr community on Discord and receive <span style="color: rgb(243, 233, 255); text-shadow: 0 0 10px #8e44f0">${ms.toLocaleString()} XP</span>.</p>`,
      () => {
        localStorage.setItem(`discordSlideup`, `true`);
      }
    );
}
function gs() {
  Math.random() < 0.05 &&
    localStorage.getItem(`appRatingSlideup`) === null &&
    Ei(
      `Like the app?`,
      `Please take a second to give us a rating.`,
      `Rate app`,
      () => {
        let e = window.Capacitor?.Plugins?.AppReview;
        e
          ? e.requestReview().catch((e) => {
              console.error(`Failed to bring up rating dialog:`, e);
            })
          : console.warn(`App review plugin not available`),
          localStorage.setItem(`appRatingSlideup`, !0),
          gi.set(!1);
      },
      null,
      null,
      null,
      () => {
        localStorage.setItem(`appRatingSlideup`, !0);
      }
    );
}
var _s;
function vs() {
  S(Gt) >= 5e3 &&
    ($t.set(Math.floor(S(Gt) / 1e3)),
    clearTimeout(_s),
    Qt.set(!0),
    (_s = setTimeout(() => Qt.set(!1), 1e3)));
}
function ys(e, t) {
  let n = S(W)
    ? `Singleplayer`
    : S(H)
    ? `Multiplayer`
    : S(U)
    ? `Competition`
    : `Unknown`;
  try {
    let e = localStorage.getItem(`roundLog`);
    (e = e ? JSON.parse(e) : []), jn.set(e);
  } catch (e) {
    console.error(`Error parsing round log:`, e), jn.set([]);
  }
  jn.update((r) => {
    let i = [[n, e, t], ...r];
    return (
      i.length > 20 && i.pop(),
      localStorage.setItem(`roundLog`, JSON.stringify(i)),
      i
    );
  });
}
async function bs() {
  if (S(B)) return;
  B.set(!0);
  let e = Mr(S(fn), S(pn));
  Jt.set(e),
    Ut.set(jr(e)),
    Ht.set(S(V) ? (fi() ? `Correct!` : `Wrong!`) : Nr(e)),
    es(!0),
    ys(e, [S(q), S(J), { heading: S(En), pitch: S(Dn), panoramaId: S(On) }]),
    ls(S(fn), S(pn), S(q), S(J)),
    j(`confirm`),
    !S(Jn) &&
      S(W) &&
      (S(M) && hs(),
      window.Capacitor?.isPluginAvailable?.(`AppReview`) && gs(),
      fs()),
    await ec(e),
    vs();
}
function xs() {
  S(B) &&
    (B.set(!1),
    gi.set(!1),
    Gt.set(0),
    sn.current && ln.set(!1),
    un.set(!1),
    dn.set(!1));
}
function Ss(e, t = !1) {
  Br.set(e), Vr.set(t), xr.set(!0);
}
var Cs = S(A) + `/competitions`;
async function ws({
  expired: e = !1,
  search: t = ``,
  daily: n = !1,
  filterEntered: r = !1,
  index: i = 0,
} = {}) {
  try {
    let a = null;
    e || (a = Cs + `/` + i),
      e && (a = Cs + `/expired/` + i),
      t && (a = Cs + `/search/` + i),
      n && (a = Cs + `/daily/daily-competition`),
      r && (a = Cs + `/not-entered/` + i);
    let o = new URLSearchParams(),
      s = localStorage.getItem(`id`);
    s && o.set(`id`, s),
      t && o.set(`search`, t),
      o.size > 0 && (a += `?` + o.toString());
    let c = {};
    r && (c.Authorization = `Bearer ` + localStorage.getItem(`bearer`));
    let l = await fetch(a, { method: `GET`, headers: c });
    if (l.ok)
      try {
        let e = await l.json();
        return {
          competitions: e.competitions,
          streakDays: e.streakDays,
          streak: e.streak,
        };
      } catch (e) {
        return (
          console.error(`Error parsing successful competition response:`, e),
          { error: `Failed to parse successful response.` }
        );
      }
    {
      let e = null;
      try {
        return (e = await l.json()), { error: e.error };
      } catch {
        return { error: `Request failed with status ` + l.status + `.` };
      }
    }
  } catch (e) {
    return (
      console.error(`Error occurred during competition load:`, e),
      { error: `A network error has occurred.` }
    );
  }
}
async function Ts() {
  try {
    let { error: e, streakDays: t } = await ws({ daily: !0 });
    if (e) throw Error(e);
    Hr.set(t ?? []);
  } catch (e) {
    console.error(`Error occurred during streak load: `, e);
  }
}
var Es = 0,
  Ds;
function Os() {
  if (!S(Z))
    return k(
      `Failed to start competition`,
      `No competition data was provided!`
    );
  U.set(!0),
    X.set(!1),
    zr.set(0),
    (Es = 0),
    ya(S(Z)?.restriction),
    setTimeout(() => {
      j(`match_start`);
    }, 400),
    xs(),
    qi();
}
function ks() {
  S(U) && (zr.set(S(zr) + 1), (Ds = Cr(S(Z)?.roundLength, Ni)));
}
function As(e) {
  Es += e;
}
async function js(e) {
  S(U) &&
    (U.set(!1),
    Ds?.stopTimer(),
    qi(),
    X.set(!0),
    await Ms(S(Z).id, Es),
    S(Z).isDaily && Ts(),
    e && Ss(S(Z).id, !0));
}
async function Ms(e, t) {
  try {
    let n = { id: localStorage.getItem(`id`), score: t },
      r = await fetch(S(A) + `/competitions/submit/` + e, {
        method: `POST`,
        headers: {
          "Content-Type": `application/json`,
          Authorization: `Bearer ${localStorage.getItem(`bearer`)}`,
        },
        body: JSON.stringify(n),
      });
    if (!r.ok) {
      let e = null;
      throw (
        ((e = await r.json()),
        e.error ? Error(e.error) : Error(`No error provided in response.`))
      );
    }
  } catch (e) {
    console.error(`Error submitting competition result: ` + e),
      k(
        `Competition submission failed`,
        `Failed to submit the competition result.`,
        e.message
      );
  }
}
function Ns() {
  return S(zr) != S(Z)?.roundAmount || (js(!0), !1);
}
B.subscribe((e) => {
  e && Ds?.stopTimer();
});
var Ps;
async function Fs(e) {
  S(Xt) &&
    S(Zt) &&
    ((S(Xt).style.opacity = `0`),
    S(Zt).classList.remove(`supporter-boost-text-move`),
    clearTimeout(Ps),
    await new Promise((e) => {
      Ps = setTimeout(e, 1500);
    }),
    S(Xt) &&
      S(Zt) &&
      (--e,
      (e = Math.round(e * 100)),
      (e += `%`),
      (S(Zt).textContent = e + ` Supporter boost`),
      (S(Xt).style.opacity = `1`),
      S(Zt).classList.add(`supporter-boost-text-move`),
      (Ps = setTimeout(() => {
        S(Xt) &&
          S(Zt) &&
          ((S(Xt).style.opacity = `0`),
          S(Zt).classList.remove(`supporter-boost-text-move`));
      }, 2e3))));
}
function Is(e) {
  return e;
}
function Ls(e) {
  if (e == null) return Is;
  var t,
    n,
    r = e.scale[0],
    i = e.scale[1],
    a = e.translate[0],
    o = e.translate[1];
  return function (e, s) {
    s || (t = n = 0);
    var c = 2,
      l = e.length,
      u = Array(l);
    for (u[0] = (t += e[0]) * r + a, u[1] = (n += e[1]) * i + o; c < l; )
      (u[c] = e[c]), ++c;
    return u;
  };
}
function Rs(e, t) {
  for (var n, r = e.length, i = r - t; i < --r; )
    (n = e[i]), (e[i++] = e[r]), (e[r] = n);
}
function zs(e, t) {
  return (
    typeof t == `string` && (t = e.objects[t]),
    t.type === `GeometryCollection`
      ? {
          type: `FeatureCollection`,
          features: t.geometries.map(function (t) {
            return Bs(e, t);
          }),
        }
      : Bs(e, t)
  );
}
function Bs(e, t) {
  var n = t.id,
    r = t.bbox,
    i = t.properties == null ? {} : t.properties,
    a = Vs(e, t);
  return n == null && r == null
    ? { type: `Feature`, properties: i, geometry: a }
    : r == null
    ? { type: `Feature`, id: n, properties: i, geometry: a }
    : { type: `Feature`, id: n, bbox: r, properties: i, geometry: a };
}
function Vs(e, t) {
  var n = Ls(e.transform),
    r = e.arcs;
  function i(e, t) {
    t.length && t.pop();
    for (var i = r[e < 0 ? ~e : e], a = 0, o = i.length; a < o; ++a)
      t.push(n(i[a], a));
    e < 0 && Rs(t, o);
  }
  function a(e) {
    return n(e);
  }
  function o(e) {
    for (var t = [], n = 0, r = e.length; n < r; ++n) i(e[n], t);
    return t.length < 2 && t.push(t[0]), t;
  }
  function s(e) {
    for (var t = o(e); t.length < 4; ) t.push(t[0]);
    return t;
  }
  function c(e) {
    return e.map(s);
  }
  function l(e) {
    var t = e.type,
      n;
    switch (t) {
      case `GeometryCollection`:
        return { type: t, geometries: e.geometries.map(l) };
      case `Point`:
        n = a(e.coordinates);
        break;
      case `MultiPoint`:
        n = e.coordinates.map(a);
        break;
      case `LineString`:
        n = o(e.arcs);
        break;
      case `MultiLineString`:
        n = e.arcs.map(o);
        break;
      case `Polygon`:
        n = c(e.arcs);
        break;
      case `MultiPolygon`:
        n = e.arcs.map(c);
        break;
      default:
        return null;
    }
    return { type: t, coordinates: n };
  }
  return l(t);
}
var Hs = null,
  Us = null;
async function Ws() {
  if (!Hs)
    try {
      (Hs = await (await fetch(`/json/topojson/countries-70m.json`)).json()),
        (Us = zs(Hs, Hs.objects.countries).features);
    } catch (e) {
      console.error(`Error loading topology:`, e);
    }
}
function Gs(e, t) {
  let [n, r] = e,
    i = !1;
  for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
    let [o, s] = t[e],
      [c, l] = t[a];
    s > r != l > r && n < ((c - o) * (r - s)) / (l - s) + o && (i = !i);
  }
  return i;
}
async function Ks(e, t) {
  Us || (await Ws()), (t = Xo(t));
  let n = [t, e];
  for (let e of Us) {
    if (!e.geometry) continue;
    let { type: t, coordinates: r } = e.geometry;
    if (t === `Polygon`) {
      if (Gs(n, r[0])) return e.properties.name;
    } else if (t === `MultiPolygon`) {
      for (let t of r) if (Gs(n, t[0])) return e.properties.name;
    }
  }
  let r = 1 / 0,
    i = `Unknown`;
  for (let e of Us) {
    if (!e.geometry) continue;
    let { type: t, coordinates: a } = e.geometry,
      o = 1 / 0;
    if (t === `Polygon`) o = qs(n, a[0]);
    else if (t === `MultiPolygon`)
      for (let e of a) {
        let t = qs(n, e[0]);
        t < o && (o = t);
      }
    o < r && ((r = o), (i = e.properties.name));
  }
  return r < 1 ? i : `Unknown`;
}
function qs(e, t) {
  let n = 1 / 0;
  for (let r = 0; r < t.length; r++) {
    let i = (r + 1) % t.length,
      a = Js(e, t[r], t[i]);
    a < n && (n = a);
  }
  return n;
}
function Js(e, t, n) {
  let [r, i] = e,
    [a, o] = t,
    [s, c] = n,
    l = r - a,
    u = i - o,
    d = s - a,
    f = c - o,
    p = l * d + u * f,
    m = d * d + f * f,
    h = -1;
  m !== 0 && (h = p / m);
  let g, _;
  h < 0
    ? ((g = a), (_ = o))
    : h > 1
    ? ((g = s), (_ = c))
    : ((g = a + h * d), (_ = o + h * f));
  let v = r - g,
    y = i - _;
  return Math.sqrt(v * v + y * y);
}
function Ys(e) {
  return e === 0
    ? 1
    : e >= 9
    ? 1.5
    : Math.round((1 + (e / 9) * 0.5) * 100) / 100;
}
async function Xs() {
  let e = Number(localStorage.getItem(`streak`) || 0);
  Kt.set(`-`),
    qt.set(`...`),
    (await Ks(S(fn), S(pn))) == (await Ks(S(q), S(J)))
      ? e++
      : (e >= 2 && Ei(`Streak lost`, `Your country streak of ${e} ended.`),
        e >= 1 && Gn(e),
        (e = 0));
  let t = Ys(e);
  return (
    localStorage.setItem(`streak`, e), Kt.set(String(e)), qt.set(t + `x`), t
  );
}
function Zs(e) {
  return 0.999 - 0.08 * Math.exp(-0.06 * e);
}
async function Qs(e, t, n) {
  let r;
  e < 0.025 && (e = 0);
  let i =
    S(An).diameter > 250 && S(W) && S(M) && t !== `Country Guessr`
      ? await Xs()
      : 1;
  r =
    t == `Country Guessr`
      ? fi()
        ? 1e3
        : 0
      : Math.round(5e3 * Zs(S(An).diameter) ** e * i);
  let a = 1;
  if (n)
    switch (n) {
      case 1:
        a = 1.1;
        break;
      case 2:
        a = 1.15;
        break;
      case 3:
        a = 1.25;
    }
  return {
    earnedXP: Math.round(r * a),
    earnedXPWithoutSupporterBoost: r,
    supporterMultiplier: a,
  };
}
var $s;
async function ec(e) {
  let t = 1;
  clearTimeout($s),
    Kt.set(null),
    qt.set(null),
    !S(M) && S(W) ? Yt.set(!0) : Yt.set(!1);
  let n,
    r,
    i = S(H) ? S(Ct) : localStorage.getItem(`selectedMap`) || S(P);
  if (S(W) || S(H)) {
    let a = await Qs(e, i, S(H) ? S(F)?.storage?.highestSupporterLevel : S(Ee));
    (n = a.earnedXP),
      (r = a.earnedXPWithoutSupporterBoost),
      (t = a.supporterMultiplier);
    let o = S(F)?.storage?.guesses?.find((e) => e.clientId === S(F)?.id);
    S(H) && !o
      ? k(
          `Points not added`,
          `Since you joined while the result was already shown, your points were not added for this round.`
        )
      : S(H) &&
        !o.scoreAdded &&
        S(F)
          ?.sendRequest(`addToScore`, n)
          .catch((e) => {
            S(H) &&
              k(
                `Failed to add to score`,
                `An error occurred trying to submit the score addition.`,
                e.message
              ),
              console.error(`Error adding to score:`, e);
          });
  } else if (S(U)) {
    let t = await Qs(e, S(P));
    (n = t.earnedXP), (r = t.earnedXPWithoutSupporterBoost), As(n);
  }
  Gt.set(r || 0),
    n > 0 && S(M) && ds(n),
    r > 50 && S(M) && setTimeout(tc, 150),
    t > 1 &&
      n > r &&
      (Fs(t),
      ($s = setTimeout(() => {
        Gt.set(n || 0);
      }, 3500)));
}
function tc() {
  for (let e = 0; e < 26; e++)
    setTimeout(() => {
      j(`score_increase`);
    }, 65 * e);
}
var nc = b(),
  rc = b(),
  ic = b(),
  ac = b(`Loading...`),
  oc = b(!1),
  sc = b(!1),
  cc = b([]),
  lc = b(),
  uc = new Set();
async function dc() {
  let e = localStorage.getItem(`bearer`);
  e
    ? rn(e)
      ? (M.set(!1), pc(), _e(`Your session has expired.`))
      : (M.set(!0), await hc())
    : M.set(!1),
    uc.forEach(async (e) => {
      try {
        await e(S(M));
      } catch (e) {
        console.error(`Error in checkAuthentication callback:`, e);
      }
    });
}
function fc() {
  if ((pc(), dc(), S(ze)))
    try {
      window.Y8SDK.logout();
    } catch (e) {
      console.error(`Failed to log out Y8 user:`, e);
    }
}
function pc() {
  localStorage.removeItem(`bearer`),
    localStorage.removeItem(`id`),
    De.set(null),
    je.set(0),
    Me.set(null),
    Te.set(0),
    we.set(0),
    Ee.set(0),
    Oe.set(1e3),
    Ae.set(0),
    Ne.set([]),
    oc.set(!1),
    Ie.set(0),
    tn.set(!1),
    ke.set(!1);
}
function mc(e) {
  return !e || typeof e != `function`
    ? (console.warn(
        `Called onAuthenticationUpdated without a valid callback function!`
      ),
      () => {})
    : (uc.has(e) && console.error(`Callback already registered.`),
      uc.add(e),
      () => uc.delete(e));
}
async function hc() {
  try {
    await gc().then((e) => {
      e &&
        (Te.set(e.experience),
        De.set(e.username),
        Ee.set(e.supporter_level),
        we.set(e.supported_amount),
        Oe.set(e.elo),
        Ae.set(e.tokens),
        e.pin != null && je.set(e.pin),
        e.badge != null && Me.set(e.badge),
        e.purchased_pins && Ne.set(e.purchased_pins),
        e.free_tokens_claimed != null && oc.set(e.free_tokens_claimed),
        e.current_duel_win_streak != null && Ie.set(e.current_duel_win_streak),
        e.new_request && tn.set(!0),
        S(B) && S(Yt) && ec(S(Jt)),
        ke.set(!0));
    });
  } catch (e) {
    console.error(`Error getting user data in loadUserInfo:`, e),
      e.message === `404`
        ? ve(
            `Unknown account`,
            `This account was seemingly removed. Delete locally saved account data?`,
            fc
          )
        : k(
            `Error getting user data`,
            `An error occurred trying to fetch user info.`,
            e.message
          );
  }
}
async function gc() {
  let e = await fetch(`${S(A)}/accounts/user/${localStorage.getItem(`id`)}`, {
    method: `GET`,
    headers: {
      "Content-Type": `application/json`,
      Authorization: `Bearer ${localStorage.getItem(`bearer`)}`,
    },
  });
  if (e.ok) return (await e.json()).user;
  {
    let t = e.status;
    if (e.status == 404) throw Error(`404`);
    try {
      let n = await e.json();
      n.error && (t = n.error);
    } catch {}
    throw Error(t);
  }
}
export {
  xi as $,
  yt as $n,
  Ke as $r,
  Vn as $t,
  ia as A,
  H as An,
  it as Ar,
  Zn as At,
  Zi as B,
  Ut as Bn,
  $e as Br,
  tr as Bt,
  Oo as C,
  ln as Cn,
  Bt as Cr,
  vr as Ct,
  ya as D,
  U as Dn,
  I as Dr,
  nr as Dt,
  Io as E,
  sn as En,
  F as Er,
  lr as Et,
  fa as F,
  Wt as Fn,
  Qe as Fr,
  X as Ft,
  Mi as G,
  Xt as Gn,
  Ge as Gr,
  Qn as Gt,
  zi as H,
  Qt as Hn,
  Ye as Hr,
  ar as Ht,
  aa as I,
  Ht as In,
  nt as Ir,
  yr as It,
  Ti as J,
  Ft as Jn,
  Ue as Jr,
  gr as Jt,
  ji as K,
  Zt as Kn,
  Xe as Kr,
  $n as Kt,
  da as L,
  Gt as Ln,
  tt as Lr,
  br as Lt,
  na as M,
  en as Mn,
  st as Mr,
  ir as Mt,
  oa as N,
  tn as Nn,
  P as Nr,
  Xn as Nt,
  _a as O,
  V as On,
  jt as Or,
  or as Ot,
  ta as P,
  nn as Pn,
  at as Pr,
  Yn as Pt,
  Ci as Q,
  vt as Qn,
  qe as Qr,
  Kn as Qt,
  $i as R,
  $t as Rn,
  et as Rr,
  _r as Rt,
  Po as S,
  gn as Sn,
  z as Sr,
  pr as St,
  Fo as T,
  cn as Tn,
  ut as Tr,
  dr as Tt,
  Ii as U,
  Kt as Un,
  Je as Ur,
  ur as Ut,
  qi as V,
  B as Vn,
  We as Vr,
  er as Vt,
  Ni as W,
  qt as Wn,
  Re as Wr,
  mr as Wt,
  bi as X,
  Lt as Xn,
  N as Xr,
  Y as Xt,
  gi as Y,
  Rt as Yn,
  Ve as Yr,
  Jn as Yt,
  yi as Z,
  St as Zn,
  Be as Zr,
  qn as Zt,
  Ts as _,
  jn as _n,
  wt as _r,
  kr as _t,
  cc as a,
  Te as ai,
  zn as an,
  mt as ar,
  ei as at,
  Xo as b,
  Tn as bn,
  zt as br,
  Cr as bt,
  ac as c,
  Ne as ci,
  q as cn,
  kt as cr,
  Gr as ct,
  ic as d,
  we as di,
  Dn as dn,
  Dt as dr,
  Vr as dt,
  ze as ei,
  Un as en,
  Pt as er,
  Si as et,
  zs as f,
  Ee as fi,
  Nn as fn,
  dt as fr,
  zr as ft,
  ws as g,
  Fn as gn,
  At as gr,
  Nr as gt,
  Os as h,
  Pe as hi,
  An as hn,
  ft as hr,
  Fr as ht,
  oc as i,
  Oe as ii,
  Rn as in,
  pt as ir,
  ni as it,
  pa as j,
  W as jn,
  ot as jr,
  sr as jt,
  ga as k,
  an as kn,
  Tt as kr,
  fr as kt,
  nc as l,
  Me as li,
  J as ln,
  Ct as lr,
  Z as lt,
  js as m,
  De as mi,
  Pn as mn,
  bt as mr,
  Pr as mt,
  mc as n,
  Fe as ni,
  Hn as nn,
  R as nr,
  _i as nt,
  sc as o,
  M as oi,
  In as on,
  It as or,
  Ur as ot,
  ks as p,
  Ae as pi,
  Mn as pn,
  Ot as pr,
  Hr as pt,
  wi as q,
  ht as qn,
  He as qr,
  hr as qt,
  fc as r,
  Ie as ri,
  Ln as rn,
  gt as rr,
  ri as rt,
  lc as s,
  Le as si,
  En as sn,
  _t as sr,
  Jr as st,
  dc as t,
  ke as ti,
  Wn as tn,
  xt as tr,
  vi as tt,
  rc as u,
  je as ui,
  On as un,
  Et as ur,
  Br as ut,
  Ss as v,
  _n as vn,
  Nt as vr,
  Er as vt,
  jo as w,
  un as wn,
  lt as wr,
  xr as wt,
  Ao as x,
  yn as xn,
  Mt as xr,
  rr as xt,
  xs as y,
  wn as yn,
  Vt as yr,
  wr as yt,
  Qi as z,
  Jt as zn,
  Ze as zr,
  cr as zt,
};
