const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["./DO96YHHf.js", "./XKyaHtl9.js"])
) => i.map((i) => d[i]);
import { r as e } from "./XKyaHtl9.js";
import "./NtBOrSfa.js";
import { t } from "./DclECHGd.js";
import { t as n } from "./DbFYFRnT.js";
var r, i;
t(
  () =>
    import(`./DO96YHHf.js`)
      .then((t) => e(t.default, 1))
      .then((e) => ({ Howl: r, Howler: i } = e)),
  __vite__mapDeps([0, 1]),
  import.meta.url
);
var a = {},
  o = null,
  s = 1,
  c = 1;
function l(n) {
  t(
    () =>
      import(`./DO96YHHf.js`)
        .then((t) => e(t.default, 1))
        .then((e) => e.Howler.mute(n)),
    __vite__mapDeps([0, 1]),
    import.meta.url
  ).catch((e) => console.error(`Couldn't set global mute: ` + e));
}
var u = {
  basic_button: [`impact`, { style: `LIGHT` }],
  toggle_button: [`impact`, { style: `LIGHT` }],
  item_select: [`impact`, { style: `LIGHT` }],
  juicy_button: [`impact`, { style: `LIGHT` }],
  change_value: [`impact`, { style: `LIGHT` }],
  start_button: [`impact`, { style: `LIGHT` }],
  leave_round: [`impact`, { style: `LIGHT` }],
  reload: [`impact`, { style: `LIGHT` }],
};
function d(e) {
  (s = Math.max(0, Math.min(e, 1))), localStorage.setItem(`soundVolume`, s);
  try {
    for (let e in a) Object.hasOwn(a, e) && a[e].volume(s);
  } catch (e) {
    console.error(`Couldn't set global volume for sounds: ` + e);
  }
}
function f(e, t) {
  if (!r) return;
  let o = u[e];
  o && window.Capacitor?.Plugins?.Haptics?.[o[0]](o[1]).catch(() => {}),
    i.ctx && i.ctx.state !== `running` && i.ctx.resume();
  try {
    let i = new r({ src: [n[e] ?? `/sounds/${e}.ogg`], volume: s });
    s > 0 && i.play(), (a[t] = i);
  } catch (e) {
    console.error(`Error playing sound: ` + e);
  }
}
function p(e) {
  try {
    a[e] && (a[e].stop(), delete a[e]);
  } catch (e) {
    console.error(`Couldn't stop sound: ` + e);
  }
}
var m = null,
  h = 1,
  g = 1500;
function _(e) {
  (c = Math.max(0, Math.min(e, 1))),
    localStorage.setItem(`musicVolume`, c),
    m && (m.volume(c * h), c === 0 ? m.pause() : m.playing() || m.play());
}
function v(e, t = 1) {
  if (r)
    try {
      if (((h = t), e === o)) {
        m && m.fade(m.volume(), c * t, g);
        return;
      }
      let n = new r({
          src: [`/music/music1_${e}.ogg`],
          loop: !0,
          volume: 0,
          onload: function () {
            c > 0 && (this.play(), this.fade(0, c * t, g));
          },
        }),
        i = m;
      i && (i.fade(i.volume(), 0, g), setTimeout(() => i.stop(), 1550)),
        (o = e),
        (m = n);
    } catch (e) {
      console.error(`Error playing music:`, e);
    }
}
export { d as a, l as i, f as n, p as o, _ as r, v as t };
