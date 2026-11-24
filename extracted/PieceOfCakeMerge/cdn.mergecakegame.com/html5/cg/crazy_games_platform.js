var SOCIAL_API_INITIALIZED_MSG = "social_api_initialized";
var SOCIAL_API_INITIALIZATION_FAILED_MSG = "social_api_initialization_failed";
var USER_PROFILE_LOADED_MSG = "social_user_profile_loaded";
var USER_PROFILE_LOADING_FAILED_MSG = "social_user_profile_loading_failed";
var USER_AUTHORIZED_MSG = "social_user_authorized";
var USER_AUTHORIZATION_FAILED_MSG = "social_authorization_failed";

var ADS_INITIALIZED_MSG = "ads_initialized";

var PRODUCT_PURCHASED_MSG = "social_product_purchased";
var PRODUCT_PURCHASE_FAILED_MSG = "social_product_purchase_failed";

var REWARDED_AD_LOADED_MSG = "rewarded_ad_loaded";
var REWARDED_AD_SHOWED_MSG = "rewarded_ad_showed";
var REWARDED_AD_SHOW_FAILED_MSG = "rewarded_ad_show_failed";

var INTERSTITIAL_AD_LOADED_MSG = "interstitial_ad_loaded";
var INTERSTITIAL_AD_SHOWED_MSG = "interstitial_ad_showed";
var INTERSTITIAL_AD_SHOW_FAILED_MSG = "interstitial_ad_show_failed";

var BANNER_AD_LOADED_MSG = "banner_ad_loaded";
var BANNER_AD_SHOWED_MSG = "banner_ad_showed";
var BANNER_AD_SHOW_FAILED_MSG = "banner_ad_show_failed";

var NEW_AUTH_DATA_RECIEVED = "new_auth_data_recieved";
var AUTH_DATA_EXPIRED = "auth_data_expired";

var DEVICE_DESKTOP = "desktop";
var DEVICE_MOBILE_WEB = "mobile_web";
var DEVICE_UNKNOWN = "unknown";

var PROMO_GIFT_NOT_FOUND_MSG = "promo_gift_not_found";

/* global JsToDef XPayStationWidget */

function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

var socialPlatform = {
  _cg: undefined,
  _player: undefined,
  _hasAdBlock: undefined,
  _bannerShown: false,
  _bannerTime: 0,

  _getNewToken: function (attempt) {
    console.log("Start getting token");
    attempt = (attempt || 0) + 1;
    socialPlatform._cg.SDK.user
      .getUserToken()
      .then((token) => {
        console.log("NEW token got");
        var data = parseJwt(token);
        socialPlatform._player = data;
        JsToDef.send(NEW_AUTH_DATA_RECIEVED, {
          session_key: token,
        });
        socialPlatform._restartTokenReceiving();
      })
      .catch((error) => {
        console.log("NEW token got error", error);
        if (attempt < 5) {
          socialPlatform._tokenGettingHandle = setTimeout(() => {
            socialPlatform._getNewToken(attempt);
          }, 2 * attempt * 1000);
        } else {
          JsToDef.send(AUTH_DATA_EXPIRED, {
            error: "Unable to get new token " + error.code,
          });
        }
      });
  },

  _restartTokenReceiving: function () {
    if (socialPlatform._restartTokenHandle) {
      clearTimeout(socialPlatform._restartTokenHandle);
      delete socialPlatform._restartTokenHandle;
    }
    if (socialPlatform._tokenGettingHandle) {
      clearTimeout(socialPlatform._tokenGettingHandle);
      delete socialPlatform._tokenGettingHandle;
    }
    socialPlatform._restartTokenHandle = setTimeout(
      socialPlatform._getNewToken,
      1800 * 1000
    );
  },

  _auth_listener: function (user) {
    console.log("User changed", user);
    socialPlatform._cg.SDK.user
      .getUserToken()
      .then((token) => {
        var data = parseJwt(token);
        socialPlatform._player = data;
        JsToDef.send(USER_AUTHORIZED_MSG, {
          social_side: true,
          auth_fields: {
            api_type: 32,
            api_uid: data.userId,
            session_key: token,
          },
        });
        socialPlatform._restartTokenReceiving();
      })
      .catch((error) => {
        JsToDef.send(USER_AUTHORIZATION_FAILED_MSG, {
          social_side: true,
          error: "Unable to authorize " + error.code,
        });
      });
  },

  progress: function (progress) {
    console.log("Loading progress:", progress);
  },

  preInitialize: function (callback) {
    if (typeof window.CrazyGames === "undefined") {
      throw new Error("Unable to resolve CrazyGames");
    }
    window.CrazyGames.SDK.init()
      .then(() => {
        socialPlatform._cg = window.CrazyGames;
        socialPlatform._cg.SDK.game.loadingStart();
        callback();
        socialPlatform._cg.SDK.ad
          .hasAdblock()
          .then((result) => {
            socialPlatform._hasAdBlock = result;
          })
          .catch((error) => {
            socialPlatform._hasAdBlock = false;
            console.log(error);
          });
        socialPlatform._cg.SDK.user.addAuthListener(
          socialPlatform._auth_listener
        );
        XPayStationWidget.on(
          XPayStationWidget.eventTypes.CLOSE,
          function (event, data) {
            console.log(event, data);

            if (!socialPlatform._succesfull_purchase) {
              JsToDef.send(PRODUCT_PURCHASE_FAILED_MSG, {
                error: "Purchase failed",
              });
            }
            socialPlatform._succesfull_purchase = undefined;
          }
        );
      })
      .catch((error) => {
        callback();
        console.log(error);
      });
  },

  initialize: function () {
    if (socialPlatform._cg.SDK.user.isUserAccountAvailable) {
      socialPlatform._cg.SDK.user
        .getUser()
        .then((playerInfo) => {
          if (playerInfo) {
            socialPlatform._cg.SDK.user
              .getUserToken()
              .then((token) => {
                var data = parseJwt(token);
                socialPlatform._player = data;
                JsToDef.send(SOCIAL_API_INITIALIZED_MSG, {
                  auth_fields: {
                    api_type: 32,
                    api_uid: data.userId,
                    session_key: token,
                  },
                });
                socialPlatform._restartTokenReceiving();
              })
              .catch((error) => {
                JsToDef.send(SOCIAL_API_INITIALIZATION_FAILED_MSG, {
                  error: "Unable to get user token " + error.code,
                });
              });
          } else {
            JsToDef.send(SOCIAL_API_INITIALIZED_MSG, {
              auth_fields: {
                api_type: 932,
              },
            });
          }
        })
        .catch((error) => {
          JsToDef.send(SOCIAL_API_INITIALIZATION_FAILED_MSG, {
            error: "Unable to authorize " + error.code,
          });
        });
    } else {
      JsToDef.send(SOCIAL_API_INITIALIZED_MSG, {
        auth_fields: {
          api_type: 932,
        },
      });
    }
  },

  handleAPICallback: function (event) {
    if (event && typeof event.data == "string") {
      var eventData;

      try {
        eventData = JSON.parse(event.data);
      } catch (error) {
        console.log("Unable to parse event data:", error);
        return;
      }

      if (eventData && eventData.command == "order-status" && eventData.data) {
        if (eventData.data.order_id && eventData.data.items) {
          JsToDef.send(PRODUCT_PURCHASED_MSG, {
            product_id: eventData.data.items[0].sku,
            transaction_id: String(eventData.data.order_id),
          });
          socialPlatform._succesfull_purchase = true;
        }
      }
    }
  },

  canLogin: function () {
    return true;
  },

  login: function () {
    if (
      socialPlatform._cg.SDK.user.authListeners &&
      !!socialPlatform._cg.SDK.user.authListeners.length
    ) {
      socialPlatform._cg.SDK.user.removeAuthListener(
        socialPlatform._auth_listener
      );
    }
    socialPlatform._cg.SDK.user
      .showAuthPrompt()
      .then(() => {
        socialPlatform._cg.SDK.user
          .getUserToken()
          .then((token) => {
            var data = parseJwt(token);
            socialPlatform._player = data;
            JsToDef.send(USER_AUTHORIZED_MSG, {
              auth_fields: {
                api_type: 32,
                api_uid: data.userId,
                session_key: token,
              },
            });
          })
          .catch((error) => {
            JsToDef.send(USER_AUTHORIZATION_FAILED_MSG, {
              error: "Unable to authorize " + error.code,
            });
          });
      })
      .catch((error) => {
        JsToDef.send(USER_AUTHORIZATION_FAILED_MSG, {
          error: "Unable to authorize " + error.code,
        });
        if (
          !socialPlatform._cg.SDK.user.authListeners ||
          !socialPlatform._cg.SDK.user.authListeners.length
        ) {
          socialPlatform._cg.SDK.user.addAuthListener(
            socialPlatform._auth_listener
          );
        }
      });
  },

  getDefaultLocale: function () {
    return;
  },

  getCountryCode: function () {
    return;
  },

  getInstallReferrer: function () {
    return;
  },

  loadUserProfile: function () {
    if (socialPlatform._player) {
      JsToDef.send(USER_PROFILE_LOADED_MSG, {
        profile: {
          first_name: socialPlatform._player.username || "",
        },
      });
    } else {
      JsToDef.send(USER_PROFILE_LOADING_FAILED_MSG, {
        error: "Not authorized user",
      });
    }
  },

  canCreateShortcut: function () {
    return false;
  },

  createShortcut: function () {
    throw new Error("Not implemented");
  },

  getStoreName: function () {
    return "web";
  },

  loadProducts: function () {
    throw new Error("Not implemented");
  },

  buyProduct: function (params) {
    params.childWindow = {
      target: "_self",
    };
    params.iframeOnly = true;
    XPayStationWidget.init(params);
    XPayStationWidget.open();
  },

  finishTransaction: function () {
    throw new Error("Not implemented");
  },

  initializeAds: function () {
    JsToDef.send(ADS_INITIALIZED_MSG);
    socialPlatform.preloadInterstitial();
    socialPlatform.preloadRewarded();
    if (socialPlatform.canShowBanner()) {
      socialPlatform.preloadBanner();
    }
  },

  preloadInterstitial: function () {
    JsToDef.send(INTERSTITIAL_AD_LOADED_MSG);
  },

  showInterstitial: function () {
    const callbacks = {
      adFinished: () => JsToDef.send(INTERSTITIAL_AD_SHOWED_MSG),
      adError: (error) => {
        console.log(error);
        JsToDef.send(INTERSTITIAL_AD_SHOW_FAILED_MSG);
      },
      adStarted: () => {
        console.log("Start interstitial ad");
        socialPlatform.hideBanner();
      },
    };
    socialPlatform._cg.SDK.ad.requestAd("midgame", callbacks);
  },

  preloadRewarded: function () {
    JsToDef.send(REWARDED_AD_LOADED_MSG);
  },

  showRewarded: function () {
    const callbacks = {
      adFinished: () => JsToDef.send(REWARDED_AD_SHOWED_MSG),
      adError: (error) => {
        console.log(error);
        JsToDef.send(REWARDED_AD_SHOW_FAILED_MSG);
      },
      adStarted: () => {
        console.log("Start rewarded ad");
        socialPlatform.hideBanner();
      },
    };
    socialPlatform._cg.SDK.ad.requestAd("rewarded", callbacks);
  },

  supportsPageReload: function () {
    return true;
  },

  logEvent: function () {},

  canShowBanner: function () {
    return window.BANNER_CONTAINER_ID ? true : false;
  },

  preloadBanner: function () {
    JsToDef.send(BANNER_AD_LOADED_MSG);
  },

  isBannerShown: function () {
    return socialPlatform._bannerShown;
  },

  getBannerTimeout: function () {
    return 60;
  },

  // Can be overwritten in the template (for dirty hacks)
  onCanvasResize: function () {},

  showBanner: function () {
    if (socialPlatform._bannerShown) {
      JsToDef.send(BANNER_AD_SHOWED_MSG);
      return;
    }
    var currentTime = new Date().getTime() / 1000;
    if (
      currentTime - socialPlatform._bannerTime <
      socialPlatform.getBannerTimeout()
    ) {
      return;
    }
    socialPlatform._bannerTime = currentTime;
    socialPlatform.setBannerContainerVisible &&
      socialPlatform.setBannerContainerVisible(true);
    socialPlatform._cg.SDK.banner
      .requestResponsiveBanner(window.BANNER_CONTAINER_ID)
      .then(() => {
        socialPlatform._bannerShown = true;
        socialPlatform._bannerOffsetted = true;
        socialPlatform.onCanvasResize();
        JsToDef.send(BANNER_AD_SHOWED_MSG);
      })
      .catch((e) => {
        socialPlatform.setBannerContainerVisible &&
          socialPlatform.setBannerContainerVisible(false);
        console.log("Error on request responsive banner", e);
        socialPlatform._bannerShown = false;
        socialPlatform._bannerOffsetted = false;
        socialPlatform.onCanvasResize();
        JsToDef.send(BANNER_AD_SHOW_FAILED_MSG);
      });
  },

  hideBanner: function () {
    socialPlatform.setBannerContainerVisible &&
      socialPlatform.setBannerContainerVisible(false);
    socialPlatform._cg.SDK.banner.clearBanner(window.BANNER_CONTAINER_ID);
    socialPlatform._bannerShown = false;
    socialPlatform._bannerOffsetted = false;
    socialPlatform.onCanvasResize();
  },

  getAdInstallData: function () {
    return;
  },

  canShare: function () {
    return false;
  },

  share: function () {
    throw new Error("Not implemented");
  },

  markGameReady: function () {
    socialPlatform._cg.SDK.game.loadingStop();
  },

  markGameplayStarted: function () {
    socialPlatform._cg.SDK.game.gameplayStart();
  },

  markGameplayStopped: function () {
    socialPlatform._cg.SDK.game.gameplayStop();
  },

  onUnpause: function () {},

  onPause: function () {},

  hasAdblocker: function () {
    return socialPlatform._hasAdBlock;
  },

  getPlatformType: function () {
    var platform = socialPlatform._cg.SDK.user.systemInfo.device.type;
    if (platform === "desktop") {
      return DEVICE_DESKTOP;
    } else if (platform === "mobile") {
      return DEVICE_MOBILE_WEB;
    } else if (platform === "tablet") {
      return DEVICE_MOBILE_WEB;
    } else {
      return DEVICE_UNKNOWN;
    }
  },

  checkPromoGiftExists: function () {
    JsToDef.send(PROMO_GIFT_NOT_FOUND_MSG);
  },
  markGiftAsAccrue: function () {},
  copyText: function (text, copyButtonText) {
    universalCopy(text, copyButtonText);
  },

  canUsePlayerData: function () {
    return false;
  },

  readPlayerData: function () {
    throw new Error("Not implemented");
  },

  writePlayerData: function () {
    throw new Error("Not implemented");
  },
};

window.addEventListener("message", socialPlatform.handleAPICallback);
