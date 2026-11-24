import {
  A as w,
  a as m,
  m as e,
  b as s,
  e as l,
  c as r,
} from "./platformInit.js";
import { m as y, A as S } from "./AdNetwork.js";
import { A as a } from "./coreAppHandle.js";
import "./pixi.js";
import "./uuid.js";
import "./index-BUwntghg.js";
import "./getGameLogger.js";
import "./MultiplatformHandler.js";
const v = {
    unfilled: r("UNFILLED"),
    adblock: r("ADBLOCK"),
    adCooldown: r("AD_COOLDOWN"),
    adsDisabledBasicLaunch: r("ADS_DISABLED_BASIC_LAUNCH"),
    other: r("OTHER"),
  },
  u = r("AD_NOT_STARTED");
function C(i) {
  return v[i] ?? r(i.toUpperCase());
}
class n extends w {
  static adNetwork = y("crazyGames");
  #t;
  constructor(t) {
    super(), (this.#t = t);
  }
  getAdNetwork() {
    return n.adNetwork;
  }
  newInstance(t) {
    return new m(t);
  }
  async requestAsync(t) {
    if (!t.advanceState(a.Requesting))
      throw e(
        1766047984,
        s.InvalidAdStateTransition,
        "CrazyGamesAdProvider.requestAsync(): invalid ad state transition",
        t
      );
    t.advanceState(a.Requested);
  }
  async loadAsync(t) {
    if (!t.advanceState(a.Loading))
      throw e(
        1766048015,
        s.InvalidAdStateTransition,
        "CrazyGamesAdProvider.loadAsync(): invalid ad state transition",
        t
      );
    t.advanceState(a.Loaded);
  }
  async showAsync(t) {
    if (!t.advanceState(a.Showing))
      throw e(
        1766048037,
        s.InvalidAdStateTransition,
        "CrazyGamesAdProvider.showAsync(): invalid ad state transition",
        t
      );
    const A =
      t.placement.type === S.Rewarded
        ? this.#t.getRewarded.bind(this.#t)
        : this.#t.getInterstitial.bind(this.#t);
    try {
      const d = await A({ placementId: t.placement.name }),
        { started: o, finished: c } = await d.show();
      if (!o)
        throw e(
          17916e5,
          u,
          "CrazyGamesAdProvider.showAsync(): CrazyGames SDK finished without starting an ad",
          t
        );
      const h = c ? a.Finished : a.Closed;
      if (!t.advanceState(h))
        throw e(
          1766049114,
          s.InvalidAdStateTransition,
          "CrazyGamesAdProvider.showAsync(): invalid ad state transition",
          t
        );
    } catch (d) {
      t.advanceState(a.ShowFailed);
      const o = l(d);
      throw o
        ? e(
            1791302400,
            C(o),
            `CrazyGamesAdProvider.showAsync(): CrazyGames SDK reported '${o}'`,
            t,
            d
          )
        : d;
    }
  }
  shouldRetry() {
    return !1;
  }
  retryDelayMs() {
    return 100;
  }
  shouldTrackEvents() {
    return !0;
  }
  validateShowParams() {
    return !0;
  }
}
export {
  u as AD_NOT_STARTED,
  v as CRAZY_GAMES_AD_ERROR_CODES,
  n as CrazyGamesAdProvider,
};
