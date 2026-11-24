import { g as a } from "./getGameLogger.js";
import "./index-BUwntghg.js";
import "./pixi.js";
class p {
  static setStartGameCallback(t) {
    const r = window?.multiplatformWrapper;
    r ? r.setStartGameCallback(t) : t();
  }
  static gameStart() {
    window?.multiplatformWrapper?.gameStarted();
  }
  static gameOver(t, r) {
    window?.multiplatformWrapper?.gameFinished(t, r);
  }
  static setGiftCallback(t) {
    window?.multiplatformWrapper?.setGiftCallback((r) => {
      try {
        const e = r.content.productID;
        typeof e == "string" && t(e);
      } catch (e) {
        a().warn(e);
      }
    });
  }
  getPlayerOverride() {
    return window?.multiplatformWrapper?.getConfig()?.playerOverride ?? null;
  }
  getTrackingConfig() {
    return window?.multiplatformWrapper?.getConfig()?.tracking ?? null;
  }
  getPlatformTrackingConfig(t) {
    const r = t.getTrackingConfig();
    return r || this.getTrackingConfig();
  }
  getSentryConfig() {
    const t = window?.multiplatformWrapper?.getConfig();
    return t
      ? t.sentry
      : {
          dns: "https://3176d5f1f89cce39e15687b4652185b2@o4510912561479680.ingest.de.sentry.io/4511568875618384",
        };
  }
  isShareEnabled() {
    return window?.multiplatformWrapper?.getConfig()?.share ?? !0;
  }
  getSplitTestConfig() {
    const t = window?.multiplatformWrapper?.getConfig();
    return t ? t.splitTest : { gameSlug: "hexa-stack" };
  }
  areTournamentsEnabled() {
    return window?.multiplatformWrapper?.getConfig()?.tournaments ?? !0;
  }
  arePurchasesAvailable() {
    return window?.multiplatformWrapper?.getConfig()?.purchases ?? !0;
  }
  areSocialFeaturesAvailable() {
    return window?.multiplatformWrapper?.getConfig()?.social ?? !0;
  }
  async getUserId() {
    return window?.multiplatformWrapper?.getUserID() ?? null;
  }
  async getSupportEmail() {
    return window?.multiplatformWrapper?.getSupportEmail() ?? null;
  }
  areAdsAvailable() {
    return !window?.multiplatformWrapper?.getConfig()?.ads?.disabled;
  }
  getFacebookGameId() {
    return window?.multiplatformWrapper?.getConfig()?.facebookGameId ?? null;
  }
  getSupportedSplitTests() {
    return [];
  }
}
export { p as MultiplatformHandler };
