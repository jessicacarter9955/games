(() => {
  "use strict";
  var e,
    t = {
      748: (e, t, n) => {
        function i(e) {
          return (
            (i =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            i(e)
          );
        }
        function o(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, a(i.key), i);
          }
        }
        function a(e) {
          var t = (function (e) {
            if ("object" != i(e) || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(e, "string");
              if ("object" != i(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" == i(t) ? t : t + "";
        }
        n.d(t, { m: () => F });
        var r = (function () {
          return (
            (e = function e(t) {
              var n,
                i,
                o =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.parent = t),
                (this.params = o),
                (this.isAutoPausing = !0),
                (this.types = o.types ||
                  (null === (n = this.parent.settings) ||
                  void 0 === n ||
                  null === (i = n.ads) ||
                  void 0 === i
                    ? void 0
                    : i.types) || {
                    initial: {
                      enabled: !1,
                      preload: 250,
                      retry: 2e3,
                      timeout: 250,
                      state: 0,
                    },
                    interstitial: {
                      enabled: !0,
                      cooldown: 60,
                      preload: 250,
                      retry: 2e3,
                      timeout: 250,
                      state: 0,
                      ready: !1,
                    },
                    rewarded: {
                      enabled: !0,
                      preload: 500,
                      retry: 2e3,
                      timeout: 250,
                      state: 0,
                      reward: !0,
                      ready: !1,
                    },
                    banner: {
                      enabled: !1,
                      preload: 250,
                      retry: 2e3,
                      timeout: 250,
                      state: 0,
                    },
                  }),
                (this.callbacks = {
                  onRewardedAdAvailabilityChange: null,
                  onInterstitialAdAvailabilityChange: null,
                  onOffsetChange: null,
                }),
                (this.states = {
                  OFF: 0,
                  IDLE: 1,
                  PRELOADING: 2,
                  READY: 3,
                  PLAYING: 4,
                  CLOSED: 5,
                  0: "OFF",
                  1: "IDLE",
                  2: "PRELOADING",
                  3: "READY",
                  4: "PLAYING",
                  5: "CLOSED",
                }),
                (this.offsets = { top: 0, right: 0, bottom: 0, left: 0 }),
                (this.cooldownPassive = 10),
                (this.skipValidation = { rewarded: !1, interstitial: !1 }),
                this.isInterstitialAdReadyResult,
                this.isRewardedAdReadyResult,
                (this.info = {
                  interstitial: { checked: [], called: [] },
                  rewarded: { checked: [], called: [] },
                });
            }),
            (t = [
              {
                key: "init",
                value: function () {
                  var e,
                    t,
                    n,
                    i,
                    o,
                    a,
                    r = this;
                  this.parent.console.log("[ads] init..."),
                    (this.isAutoPausing =
                      void 0 !==
                      (null === (e = this.params) || void 0 === e
                        ? void 0
                        : e.isAutoPausing)
                        ? null === (t = this.params) || void 0 === t
                          ? void 0
                          : t.isAutoPausing
                        : void 0 !==
                          (null === (n = this.parent.settings) ||
                          void 0 === n ||
                          null === (i = n.ads) ||
                          void 0 === i
                            ? void 0
                            : i.isAutoPausing)
                        ? null === (o = this.parent.settings) ||
                          void 0 === o ||
                          null === (a = o.ads) ||
                          void 0 === a
                          ? void 0
                          : a.isAutoPausing
                        : this.isAutoPausing),
                    ["interstitial", "rewarded"].forEach(function (e) {
                      var t;
                      (r.types[e].eventIds =
                        (null === (t = r.parent.settings[e]) || void 0 === t
                          ? void 0
                          : t.eventIds) || []),
                        r.parent.console.log(
                          "[ads] %s eventIds",
                          e,
                          r.types[e].eventIds
                        );
                    }),
                    ["interstitial", "rewarded"].forEach(function (e) {
                      var t, n, i;
                      (r.types[e].allowlist =
                        (null === (t = r.parent.settings[e]) || void 0 === t
                          ? void 0
                          : t.allowlist) || []),
                        (r.types[e].blocklist =
                          (null === (n = r.parent.settings[e]) || void 0 === n
                            ? void 0
                            : n.blocklist) || []),
                        (r.types[e].allowEmpty =
                          !0 ===
                          (null === (i = r.parent.settings[e]) || void 0 === i
                            ? void 0
                            : i.allowEmpty)),
                        r.parent.console.log(
                          "[ads] %s allowlist",
                          e,
                          r.types[e].allowlist
                        ),
                        r.parent.console.log(
                          "[ads] %s blocklist",
                          e,
                          r.types[e].blocklist
                        ),
                        r.parent.console.log(
                          "[ads] %s allowEmpty: %s",
                          e,
                          !0 === r.types[e].allowEmpty ? "true" : "false"
                        );
                    });
                  var s = { interstitial: [], rewarded: [] };
                  return (
                    ["interstitial", "rewarded"].forEach(function (e) {
                      var t;
                      (r.types[e].eventIds =
                        (null === (t = r.parent.settings[e]) || void 0 === t
                          ? void 0
                          : t.eventIds) || []),
                        r.types[e].eventIds.forEach(function (t) {
                          r.isValid(t, e) && s[e].push(t);
                        });
                    }),
                    ["interstitial", "rewarded"].forEach(function (e) {
                      (r.types[e].eventIds = s[e]),
                        r.parent.console.log(
                          "[ads] %s valid eventIds",
                          e,
                          r.types[e].eventIds
                        );
                    }),
                    new Promise(function (e) {
                      Object.keys(r.types).forEach(function (e) {
                        r.types[e].enabled &&
                          (setInterval(function () {
                            r.types[e].ready !==
                              (r.types[e].state === r.states.READY) &&
                              ((r.types[e].ready =
                                r.types[e].state === r.states.READY),
                              "interstitial" === e
                                ? "function" ==
                                    typeof r.callbacks
                                      .onInterstitialAdAvailabilityChange &&
                                  r.types[e].eventIds.forEach(function (t) {
                                    r.callbacks.onInterstitialAdAvailabilityChange(
                                      t,
                                      r.types[e].ready
                                    );
                                  })
                                : "rewarded" === e &&
                                  "function" ==
                                    typeof r.callbacks
                                      .onRewardedAdAvailabilityChange &&
                                  r.types[e].eventIds.forEach(function (t) {
                                    r.callbacks.onRewardedAdAvailabilityChange(
                                      t,
                                      r.types[e].ready
                                    );
                                  }));
                          }, 250),
                          r.setState(e, r.states.IDLE),
                          r.types[e].preload > 0 &&
                            setInterval(function () {
                              r.types[e].enabled &&
                                !0 !== r.types[e].skip &&
                                r.preload(e);
                            }, r.types[e].preload));
                      }),
                        e();
                    })
                  );
                },
              },
              {
                key: "setState",
                value: function (e, t) {
                  this.parent.console.log("[ads] setState", e, this.states[t]),
                    (this.types[e].state = t),
                    (this.types[e].isLandscape =
                      window.innerWidth > window.innerHeight);
                },
              },
              {
                key: "preload",
                value: function (e) {
                  var t = this;
                  Object.keys(this.types).includes(e) &&
                    this.types[e].state === this.states.IDLE &&
                    ((this.types[e].fails = this.types[e].fails || 0),
                    (this.types[e].attempts = this.types[e].attempts || 0),
                    (this.types[e].attempts > 0 &&
                      this.types[e].fails >= this.types[e].attempts) ||
                      (this.setState(e, this.states.PRELOADING),
                      this.parent
                        ._preloadAd(e)
                        .then(
                          function () {
                            (t.types[e].fails = 0),
                              t.parent.console.log(
                                "[ads] [%s] preloading... OK",
                                e
                              ),
                              t.setState(e, t.states.READY);
                          },
                          function () {
                            t.types[e].fails++,
                              t.parent.console.log(
                                "[ads] [%s] preloading... FAILED (attempt: %s)",
                                e,
                                t.types[e].fails
                              ),
                              t.setState(e, t.states.CLOSED),
                              setTimeout(function () {
                                t.setState(e, t.states.IDLE);
                              }, t.types[e].retry);
                          }
                        )
                        .catch(function (e) {
                          t.parent.console.error("[ads] _preloadAd", e);
                        })));
                },
              },
              {
                key: "hasCooledDown",
                value: function (e) {
                  var t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    n = this.types[e];
                  if (void 0 === n) return !0;
                  if (!(n.last && n.cooldown >= 0)) return !0;
                  var i = n.cooldown,
                    o = Math.round((Date.now() - n.last) / 1e3);
                  return o < i
                    ? (!0 !== t &&
                        this.parent.console.log(
                          "[ads] [%s/cooldown]: %s seconds left",
                          e,
                          i - o
                        ),
                      !1)
                    : !(
                        "interstitial" === e &&
                        this.cooldownPassive > 0 &&
                        (o = Math.round(
                          (Date.now() - this.types.rewarded.last) / 1e3
                        )) < this.cooldownPassive &&
                        (!0 !== t &&
                          this.parent.console.log(
                            "[ads] [%s/(passive) cooldown]: %s seconds left",
                            e,
                            this.cooldownPassive - o
                          ),
                        1)
                      );
                },
              },
              {
                key: "hasRewardedAd",
                value: function (e) {
                  return (
                    this.info.rewarded.checked.includes(e) ||
                      this.info.rewarded.checked.push(e),
                    Promise.resolve(this.isRewardedAdReady(e))
                  );
                },
              },
              {
                key: "hasInterstitialAd",
                value: function (e) {
                  return (
                    this.info.interstitial.checked.includes(e) ||
                      this.info.interstitial.checked.push(e),
                    Promise.resolve(this.isInterstitialAdReady(e))
                  );
                },
              },
              {
                key: "onRewardedAdAvailabilityChange",
                value: function (e) {
                  var t = this;
                  this.parent.console.log(
                    "[ads] listener 'onRewardedAdAvailabilityChange' added"
                  ),
                    (this.callbacks.onRewardedAdAvailabilityChange = e),
                    "function" ==
                      typeof this.callbacks.onRewardedAdAvailabilityChange &&
                      this.types.rewarded.eventIds.forEach(function (e) {
                        t.callbacks.onRewardedAdAvailabilityChange(
                          e,
                          t.types.rewarded.ready
                        );
                      });
                },
              },
              {
                key: "onInterstitialAdAvailabilityChange",
                value: function (e) {
                  var t = this;
                  this.parent.console.log(
                    "[ads] listener 'onInterstitialAdAvailabilityChange' added"
                  ),
                    (this.callbacks.onInterstitialAdAvailabilityChange = e),
                    "function" ==
                      typeof this.callbacks
                        .onInterstitialAdAvailabilityChange &&
                      this.types.interstitial.eventIds.forEach(function (e) {
                        t.callbacks.onInterstitialAdAvailabilityChange(
                          e,
                          t.types.interstitial.ready
                        );
                      });
                },
              },
              {
                key: "isRewardedAdAvailable",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "";
                  return (
                    this.info.rewarded.checked.includes(e) ||
                      this.info.rewarded.checked.push(e),
                    this.isRewardedAdReady(e)
                  );
                },
              },
              {
                key: "isInterstitialAdAvailable",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "";
                  return (
                    this.info.interstitial.checked.includes(e) ||
                      this.info.interstitial.checked.push(e),
                    this.isInterstitialAdReady(e)
                  );
                },
              },
              {
                key: "isAdReady",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "interstitial",
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "";
                  return "interstitial" === e
                    ? this.isInterstitialAdReady(t)
                    : "rewarded" === e && this.isRewardedAdReady(t);
                },
              },
              {
                key: "isRewardedAdReady",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "",
                    t = this.isValid(e, "rewarded"),
                    n = this.parent._hasRewardedAd(e),
                    i = this.types.rewarded.state === this.states.READY,
                    o = this.hasCooledDown("rewarded", !0),
                    a = t && n && i && o,
                    r = {
                      eventId: e,
                      isValid: t,
                      _hasRewardedAd: n,
                      isReady: i,
                      hasCooledDown: o,
                      result: a,
                    };
                  return (
                    a ||
                      this.isRewardedAdReadyResult === JSON.stringify(r) ||
                      ((this.isRewardedAdReadyResult = JSON.stringify(r)),
                      this.parent.console.log(
                        "[ads] isRewardedAdReady has changed",
                        r
                      )),
                    a
                  );
                },
              },
              {
                key: "isInterstitialAdReady",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "",
                    t = this.isValid(e),
                    n = this.parent._hasInterstitialAd(e),
                    i = this.types.interstitial.state === this.states.READY,
                    o = this.hasCooledDown("interstitial", !0),
                    a = t && n && i && o,
                    r = {
                      eventId: e,
                      isValid: t,
                      _hasInterstitialAd: n,
                      isReady: i,
                      hasCooledDown: o,
                      result: a,
                    };
                  return (
                    a ||
                      this.isInterstitialAdReadyResult === JSON.stringify(r) ||
                      ((this.isInterstitialAdReadyResult = JSON.stringify(r)),
                      this.parent.console.log(
                        "[ads] isInterstitialAdReady has changed",
                        r
                      )),
                    a
                  );
                },
              },
              {
                key: "setOffsets",
                value: function (e, t, n, o) {
                  "object" === i(e)
                    ? ((this.offsets.top =
                        void 0 !== e.top ? e.top : this.offsets.top),
                      (this.offsets.right =
                        void 0 !== e.right ? e.right : this.offsets.right),
                      (this.offsets.bottom =
                        void 0 !== e.bottom ? e.bottom : this.offsets.bottom),
                      (this.offsets.left =
                        void 0 !== e.left ? e.left : this.offsets.left))
                    : ((this.offsets.top = void 0 !== e ? e : this.offsets.top),
                      (this.offsets.right =
                        void 0 !== t ? t : this.offsets.right),
                      (this.offsets.bottom =
                        void 0 !== n ? n : this.offsets.bottom),
                      (this.offsets.left =
                        void 0 !== o ? o : this.offsets.left)),
                    "function" == typeof this.callbacks.onOffsetChange &&
                      this.callbacks.onOffsetChange(this.offsets);
                },
              },
              {
                key: "onOffsetChange",
                value: function (e) {
                  this.callbacks.onOffsetChange = e;
                },
              },
              {
                key: "getOffsets",
                value: function () {
                  return this.offsets;
                },
              },
              {
                key: "show",
                value: function () {
                  var e = this,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "interstitial",
                    n = !1;
                  return new Promise(function (i) {
                    if (void 0 === e.types[t])
                      return (
                        e.parent.console.log(
                          "[ads] type '%s' is undefined!",
                          t
                        ),
                        i()
                      );
                    if (e.types[t].state !== e.states.READY)
                      return (
                        e.parent.console.log(
                          "[ads] [%s] skipped (state: %s)",
                          t,
                          e.states[e.types[t].state]
                        ),
                        "rewarded" === t ? i({ isRewardGranted: n }) : i()
                      );
                    if (!e.hasCooledDown(t))
                      return (
                        e.parent.console.log(
                          "[ads] [%s] skipped (cooldown)",
                          t
                        ),
                        "rewarded" === t ? i({ isRewardGranted: n }) : i()
                      );
                    e.setState(t, e.states.PLAYING),
                      e.isAutoPausing &&
                        (e.parent.gameStates.mute(!0, !0),
                        e.parent.gameStates.pause(!0, !0)),
                      e.parent.gameStates.stopGameplay();
                    var o = function (t) {
                      (e.types[t].last = Date.now()),
                        setTimeout(function () {
                          i("rewarded" === t ? { isRewardGranted: n } : {}),
                            e.isAutoPausing &&
                              (e.parent.gameStates.pause(!1, !0),
                              e.parent.gameStates.mute(!1, !0)),
                            e.parent.gameStates.startGameplay();
                        }, e.types[t].timeout),
                        e.setState(t, e.states.CLOSED),
                        setTimeout(function () {
                          e.setState(t, e.states.IDLE);
                        }, 250);
                    };
                    switch (t) {
                      case "interstitial":
                        return e.parent
                          ._showAd(t)
                          .then(function () {
                            o(t);
                          })
                          .catch(function (e) {
                            o(t);
                          });
                      case "rewarded":
                        return e.parent
                          ._showAd(t)
                          .then(function (e) {
                            (n = e), o(t);
                          })
                          .catch(function (e) {
                            o(t);
                          });
                      default:
                        return;
                    }
                  });
                },
              },
              {
                key: "testAd",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "interstitial";
                  return new Promise(function (t, n) {
                    var i = !1,
                      o = function () {
                        t({ type: e, args: { success: i } });
                      };
                    return "interstitial" === e
                      ? "undefined" != typeof Swal
                        ? Swal.fire({
                            title: "<strong>[INTERSTITIAL AD]</strong>",
                            html: "<i>This dialog represents an interstitial ad.</i><br /><br /><b>Important:</b> In any case, the game should now be muted!",
                            confirmButtonText: "Close",
                            didDestroy: function () {
                              o();
                            },
                          })
                        : (alert(
                            "[INTERSTITIAL AD]\nThis dialog represents an interstitial ad.\nIMPORTANT: In any case, the game should now be muted!"
                          ),
                          o())
                      : "rewarded" === e
                      ? "undefined" != typeof Swal
                        ? Swal.fire({
                            title: "<strong>[REWARDED AD]</strong>",
                            html: "<i>This dialog represents a rewarded ad.</i><br /><br /><b>Important:</b> In any case, the game should now be muted!",
                            showDenyButton: !0,
                            confirmButtonText: "Grant reward",
                            denyButtonText: "Deny reward",
                            didDestroy: function () {
                              o();
                            },
                          }).then(function (e) {
                            i = e.isConfirmed;
                          })
                        : (confirm(
                            "[REWARDED AD]\nThis dialog represents a rewarded ad.\nIMPORTANT: In any case, the game should now be muted!\n\nShould a reward be granted?"
                          ) && (i = !0),
                          o())
                      : void o();
                  });
                },
              },
              {
                key: "getPlacementType",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "",
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "",
                    n = (function (e, t) {
                      var n = [
                        "preroll",
                        "start",
                        "pause",
                        "resume",
                        "quit",
                        "browse",
                        "next",
                        "break",
                      ];
                      if (
                        ((e = "string" == typeof e ? e.toLowerCase() : ""),
                        (t = "string" == typeof t ? t.toLowerCase() : ""),
                        n.includes(t))
                      )
                        return t;
                      var i = e.toLowerCase().split(":");
                      if (i.length) {
                        if ("break" === i[0]) return "break";
                        if (n.includes(i[i.length - 1])) return i[i.length - 1];
                      }
                      return "browse";
                    })(e, t);
                  return (
                    this.parent.console.log(
                      "[ads] placementType: %s ('%s', '%s')",
                      n,
                      e || "n/a",
                      t || "n/a"
                    ),
                    n
                  );
                },
              },
              {
                key: "isValid",
                value: function () {
                  var e,
                    t,
                    n,
                    i,
                    o,
                    a =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "",
                    r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "interstitial";
                  if (!0 === this.skipValidation[r]) return !0;
                  if (
                    !0 !==
                      (null === (e = this.types[r]) || void 0 === e
                        ? void 0
                        : e.allowEmpty) &&
                    ("string" != typeof a || !a.length)
                  )
                    return !1;
                  if (
                    0 ===
                      (null === (t = this.types[r]) || void 0 === t
                        ? void 0
                        : t.allowlist.length) &&
                    0 ===
                      (null === (n = this.types[r]) || void 0 === n
                        ? void 0
                        : n.blocklist.length)
                  )
                    return !0;
                  var s = function (e, t) {
                      var n = t.filter(function (t) {
                        return (function (e, t) {
                          var n = t.replace(/[-\/\\^$+?.()|[\]{}]/g, "\\$&");
                          return new RegExp(
                            "^".concat(n.replace(/\*/g, ".*"), "$")
                          ).test(e);
                        })(e, t);
                      });
                      return (
                        n.length,
                        n.sort(function (e, t) {
                          return t.length - e.length;
                        })[0]
                      );
                    },
                    l = s(
                      a,
                      null === (i = this.types[r]) || void 0 === i
                        ? void 0
                        : i.allowlist
                    ),
                    u = s(
                      a,
                      null === (o = this.types[r]) || void 0 === o
                        ? void 0
                        : o.blocklist
                    );
                  return !(!l && !u) && (l && u ? l.length > u.length : !!l);
                },
              },
              {
                key: "innerWidth",
                get: function () {
                  return window.innerWidth;
                },
              },
              {
                key: "innerHeight",
                get: function () {
                  return window.innerHeight;
                },
              },
            ]),
            t && o(e.prototype, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t;
        })();
        function s(e) {
          return (
            (s =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            s(e)
          );
        }
        function l(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, u(i.key), i);
          }
        }
        function u(e) {
          var t = (function (e) {
            if ("object" != s(e) || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(e, "string");
              if ("object" != s(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" == s(t) ? t : t + "";
        }
        var c = (function () {
          function e(t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.parent = t),
              (this.params = n),
              (this.url =
                "//download.gameanalytics.com/js/GameAnalytics-4.4.5.min.js"),
              (this.build = ""),
              (this.game_key = ""),
              (this.secret_key = ""),
              (this.isEnabled = !1),
              (this.setEnabledInfoLog = !1),
              (this.setEnabledEventSubmission = !1),
              (this.parent.settings = this.parent.settings || {}),
              (this.parent.settings.gameanalytics =
                this.parent.settings.gameanalytics || {});
          }
          return (
            (t = e),
            (n = [
              {
                key: "init",
                value: function () {
                  var t,
                    n,
                    i,
                    o,
                    a,
                    r,
                    s,
                    l,
                    u = this;
                  return (
                    (this.url =
                      this.params.url ||
                      (null === (t = this.parent.settings) ||
                      void 0 === t ||
                      null === (n = t.gameanalytics) ||
                      void 0 === n
                        ? void 0
                        : n.url) ||
                      this.url),
                    (this.build =
                      this.params.build ||
                      (null === (i = this.parent.settings) ||
                      void 0 === i ||
                      null === (o = i.gameanalytics) ||
                      void 0 === o
                        ? void 0
                        : o.build) ||
                      this.build),
                    (this.game_key =
                      this.params.game_key ||
                      (null === (a = this.parent.settings) ||
                      void 0 === a ||
                      null === (r = a.gameanalytics) ||
                      void 0 === r
                        ? void 0
                        : r.game_key) ||
                      this.game_key),
                    (this.secret_key =
                      this.params.secret_key ||
                      (null === (s = this.parent.settings) ||
                      void 0 === s ||
                      null === (l = s.gameanalytics) ||
                      void 0 === l
                        ? void 0
                        : l.secret_key) ||
                      this.secret_key),
                    (this.parent.settings = this.parent.settings || {}),
                    (this.parent.settings.gameanalytics =
                      this.parent.settings.gameanalytics || {}),
                    [
                      "isEnabled",
                      "setEnabledInfoLog",
                      "setEnabledEventSubmission",
                    ].forEach(function (e) {
                      u[e] =
                        void 0 !== u.params[e]
                          ? u.params[e]
                          : void 0 !== u.parent.settings.gameanalytics[e]
                          ? u.parent.settings.gameanalytics[e]
                          : u[e];
                    }),
                    this.parent.console.log("[analytics] init..."),
                    this.isEnabled
                      ? this.build.length &&
                        this.game_key.length &&
                        this.secret_key.length
                        ? new Promise(function (t) {
                            return u.parent.helpers
                              .loadFiles(u.url)
                              .then(function () {
                                void 0 !== e &&
                                  (e("setEnabledInfoLog", u.setEnabledInfoLog),
                                  e(
                                    "setEnabledEventSubmission",
                                    u.setEnabledEventSubmission
                                  ),
                                  e("configureBuild", u.build),
                                  e("initialize", u.game_key, u.secret_key),
                                  t()),
                                  t();
                              })
                              .catch(function (e) {
                                u.parent.console.error(e);
                              });
                          })
                        : (this.parent.console.warn(
                            "[analytics] One or more parameter values were invalid: Build: '%s', Game key: '%s' & Secret key: '%s' -> Initialization aborted!",
                            this.build,
                            this.game_key,
                            this.secret_key
                          ),
                          Promise.resolve())
                      : (this.parent.console.info(
                          "[analytics] isEnabled: false -> Initialization aborted!"
                        ),
                        Promise.resolve())
                  );
                },
              },
              {
                key: "track",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "",
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  if (
                    ((window.gameanalytics = window.gameanalytics || {}),
                    void 0 !== window.gameanalytics.GameAnalytics)
                  )
                    switch (
                      ("string" == typeof e
                        ? (e = e.toLowerCase())
                        : ((t.eventType = t.eventType || ""),
                          (e = t.eventType.toLowerCase())),
                      e)
                    ) {
                      case "ga:business":
                        gameanalytics.GameAnalytics.addBusinessEvent(
                          t.cartType,
                          t.itemType,
                          t.itemId,
                          t.amount,
                          t.currency
                        );
                        break;
                      case "ga:resource":
                        gameanalytics.GameAnalytics.addResourceEvent(
                          t.flowType,
                          t.itemType,
                          t.itemId,
                          t.amount,
                          t.resourceCurrency
                        );
                        break;
                      case "ga:progression":
                        gameanalytics.GameAnalytics.addProgressionEvent(
                          t.progressionStatus,
                          t.progression01,
                          t.progression02,
                          t.progression03,
                          t.value
                        );
                        break;
                      case "ga:error":
                        gameanalytics.GameAnalytics.addErrorEvent(
                          t.severity,
                          t.message
                        );
                        break;
                      case "ga:design":
                        gameanalytics.GameAnalytics.addDesignEvent(
                          t.eventId,
                          t.value
                        );
                    }
                },
              },
            ]),
            n && l(t.prototype, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, n;
        })();
        function d(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t &&
              (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, i);
          }
          return n;
        }
        function f(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? d(Object(n), !0).forEach(function (t) {
                  h(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : d(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function h(e, t, n) {
          return (
            (t = g(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function p(e) {
          return (
            (p =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            p(e)
          );
        }
        function y(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, g(i.key), i);
          }
        }
        function g(e) {
          var t = (function (e) {
            if ("object" != p(e) || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(e, "string");
              if ("object" != p(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" == p(t) ? t : t + "";
        }
        var v = (function () {
          return (
            (e = function e(t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.parent = t),
                (this.params = n),
                (this.urlSearchParams = []);
              try {
                (this.urlSearchParams = new URLSearchParams(
                  window.location.search || ""
                )),
                  this.parent.console.debug(
                    "urlSearchParams",
                    this.urlSearchParams
                  );
              } catch (e) {
                this.parent.console.error(e);
              }
              (this.imagesBaseURL = "images/"),
                (this.imagesSizes = {
                  small: "64x64",
                  medium: "128x128",
                  large: "256x256",
                  xlarge: "512x512",
                }),
                (this.icons = {
                  flame: 128293,
                  robot: 129302,
                  handshake: 129309,
                  rocket: 128640,
                  muted: 128263,
                  unmuted: 128265,
                  finish: 127937,
                  coffee: 9749,
                  noentry: 9940,
                  party: 127881,
                  trophy: 127942,
                  skull: 128128,
                  biceps: 128170,
                  clapper: 127916,
                  satellite: 128225,
                  scream: 128561,
                  warning: 9888,
                  error: 128683,
                  pause: 9208,
                  resume: 9199,
                  stop: 9209,
                  menu: 9776,
                  flag: 128681,
                  gear: 9881,
                  joystick: 128377,
                  hourglass: 9203,
                  bellhop: 128718,
                  sleep: 128164,
                  ladder: 129692,
                  tornado: 127786,
                  pill: 128138,
                  toy: 129528,
                  restart: 8634,
                  door: 55357,
                  house: 8962,
                  next: 9197,
                  level: 9167,
                });
            }),
            (t = [
              {
                key: "getLocale",
                value: function () {
                  var e = this;
                  return (
                    ["locale", "lang"].forEach(function (t) {
                      if (null === e.parent.settings[t])
                        try {
                          e.parent.settings[t] = new URL(
                            window.location.href
                          ).searchParams.get(t);
                        } catch (e) {}
                    }),
                    this.parent.settings.lang ||
                      this.parent.settings.locale ||
                      (navigator.language || navigator.userLanguage).substr(
                        0,
                        2
                      )
                  );
                },
              },
              {
                key: "getIcon",
                value: function (e) {
                  return e in this.icons
                    ? String.fromCodePoint(this.icons[e])
                    : null;
                },
              },
              {
                key: "getImageURL",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "",
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "",
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : "logo.png";
                  return (
                    (e = "string" == typeof e && e.length ? e + "/" : ""),
                    (t =
                      "string" == typeof t && t in this.imagesSizes
                        ? this.imagesSizes[t] + "/"
                        : ""),
                    (n = "string" == typeof n && n.length ? n : "logo.png"),
                    this.imagesBaseURL + e + t + n
                  );
                },
              },
              {
                key: "loadFiles",
                value: function (e) {
                  var t,
                    n = this,
                    i = document.getElementsByTagName("head")[0];
                  return (
                    "string" == typeof e && (e = [e]),
                    new Promise(function (o, a) {
                      Array.isArray(e)
                        ? (e.push(function () {
                            o();
                          }),
                          e.reduce(function (e, o) {
                            return e.then(function () {
                              return new Promise(function (e, a) {
                                var r = document.createElement("script");
                                if ("function" == typeof o) return o(), e();
                                switch (o.split(".").pop()) {
                                  case "js":
                                  default:
                                    (r.src = o),
                                      n.parent.console.log(
                                        "[intern] Loading %s...",
                                        o
                                      ),
                                      i.appendChild(r),
                                      (r.onload = function () {
                                        e();
                                      }),
                                      (r.onerror = function () {
                                        e();
                                      });
                                    break;
                                  case "css":
                                    ((t = document.createElement("link")).rel =
                                      "stylesheet"),
                                      (t.type = "text/css"),
                                      (t.href = o),
                                      i.appendChild(t),
                                      e();
                                }
                              });
                            });
                          }, Promise.resolve()))
                        : o({ info: "no files" });
                    })
                  );
                },
              },
              {
                key: "getArray",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [];
                  return Array.isArray(e) ? e : "string" == typeof e ? [e] : [];
                },
              },
              {
                key: "getURLSearchParam",
                value: function (e) {
                  return "object" === p(this.urlSearchParams) &&
                    "function" == typeof this.urlSearchParams.get
                    ? this.urlSearchParams.get(e)
                    : null;
                },
              },
              {
                key: "updateSettings",
                value: function () {
                  var e = this,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                  return new Promise(function (n) {
                    return e.readTextFile("famobi.json", function (i) {
                      (t = e.mergeObjects(t, i)),
                        (t = e.mergeObjects(t, e.parent.params)),
                        [
                          "locale",
                          "lang",
                          "mock",
                          "isVerboseLoggingEnabled",
                          "delay",
                          "isMuted",
                        ].forEach(function (n) {
                          null !== p(e.getURLSearchParam(n)) &&
                            (t[n] = e.getURLSearchParam(n));
                        }),
                        (t.GAME_ID =
                          t.GAME_ID ||
                          t.gameId ||
                          t.gameID ||
                          t.GAMEID ||
                          e.retrieveGameId() ||
                          null),
                        ["1", "true"].includes(t.isVerboseLoggingEnabled) &&
                          ((t.console = t.console || {}),
                          (t.console.isVerboseLoggingEnabled = !0)),
                        delete t.gameId,
                        delete t.gameID,
                        delete t.GAMEID,
                        n(t);
                    });
                  });
                },
              },
              {
                key: "mergeObjects",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  for (var n in t)
                    "string" == typeof t[n]
                      ? (e[n] = t[n])
                      : "object" !== p(t[n]) ||
                        Array.isArray(t[n]) ||
                        (e.hasOwnProperty(n)
                          ? (e[n] = f(f({}, e[n]), t[n]))
                          : (e[n] = t[n]));
                  return e;
                },
              },
              {
                key: "readTextFile",
                value: function (e, t) {
                  var n = new XMLHttpRequest();
                  n.overrideMimeType("application/json"),
                    n.open("GET", e, !0),
                    (n.onload = function () {
                      if (4 === n.readyState && "200" == n.status)
                        try {
                          var e = JSON.parse(n.responseText);
                          t(e);
                        } catch (e) {
                          t({});
                        }
                      else t({});
                    }),
                    (n.onerror = function () {
                      t({});
                    }),
                    n.send(null);
                },
              },
              {
                key: "loadTemplate",
                value: function (e) {
                  return fetch(e).then(function (t) {
                    return (
                      t.ok || console.error("Failed to load template: %s", e),
                      t.text()
                    );
                  });
                },
              },
              {
                key: "retrieveGameId",
                value: function () {
                  for (
                    var e = null,
                      t = document.getElementsByTagName("script"),
                      n = null,
                      i = 0;
                    i < t.length;
                    i++
                  ) {
                    var o = t[i].getAttribute("src");
                    if (o && o.includes("game-interface.js")) {
                      n = t[i];
                      break;
                    }
                  }
                  if (n) {
                    var a = n.getAttribute("src");
                    "string" == typeof a &&
                      (a.startsWith("http") || (a = "http:" + a));
                    try {
                      e = new URL(a).searchParams.get("gameId");
                    } catch (e) {}
                  }
                  return e;
                },
              },
              {
                key: "showPauseOverlay",
                value: function () {
                  var e =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0],
                    t = document.getElementById("GameInterfacePauseOverlay");
                  if (null === t) {
                    (t = document.createElement("div")).setAttribute(
                      "id",
                      "GameInterfacePauseOverlay"
                    ),
                      (t.style.position = "absolute"),
                      (t.style.top = "0"),
                      (t.style.left = "0"),
                      (t.style.width = "100%"),
                      (t.style.height = "100%"),
                      (t.style.background = "rgba(0, 0, 0, 0.8)"),
                      (t.style.pointerEvents = "none"),
                      (t.style.display = "none"),
                      [
                        "pointerdown",
                        "MSPointerDown",
                        "touchstart",
                        "mousedown",
                      ].forEach(function (e) {
                        t.addEventListener(e, function (e) {
                          e.stopPropagation();
                        });
                      });
                    var n = document.querySelector("canvas");
                    n && n.parentNode.insertBefore(t, n.nextSibling);
                  }
                  t &&
                    ((t.style.display = e ? "block" : "none"),
                    (t.style.pointerEvents = e ? "auto" : "none"));
                },
              },
              {
                key: "getLevel",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    t =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 0;
                  if (!Number.isInteger(e))
                    try {
                      e = parseInt(
                        "string" == typeof e ? e.replace(/\D/g, "") : e
                      );
                    } catch (e) {}
                  return Number.isInteger(e) ? e : t;
                },
              },
              {
                key: "disablePause",
                value: function () {
                  var e = this,
                    t = setInterval(function () {
                      if ("undefined" != typeof pc) {
                        var e = pc.AppBase || pc.Application;
                        e && e.getApplication() && n();
                      }
                    }, 100),
                    n = function () {
                      clearInterval(t),
                        e.parent.console.log("Injecting do-not-pause hack...");
                      var n = pc.AppBase || pc.Application,
                        i = n.getApplication(),
                        o = pc.platform.browser,
                        a = "hidden",
                        r = void 0,
                        s = function () {
                          document[a]
                            ? ((pc.platform.browser = !1),
                              (i.autoRender = !1),
                              (function () {
                                if (r)
                                  e.parent.console.warn(
                                    "manual render is already active!"
                                  );
                                else {
                                  var t =
                                    (i.stats &&
                                      i.stats.frame &&
                                      i.stats.frame.fps) ||
                                    60;
                                  r = setInterval(function () {
                                    return i.tick();
                                  }, 1e3 / Math.max(t, 60));
                                }
                              })())
                            : (r &&
                                ((pc.platform.browser = o),
                                (i.autoRender = !0),
                                i.tick()),
                              r && clearInterval(r),
                              (r = void 0));
                        };
                      i.on("destroy", function () {
                        "undefined" != typeof document &&
                          (document.removeEventListener(
                            "visibilitychange",
                            s,
                            !1
                          ),
                          document.removeEventListener(
                            "mozvisibilitychange",
                            s,
                            !1
                          ),
                          document.removeEventListener(
                            "msvisibilitychange",
                            s,
                            !1
                          ),
                          document.removeEventListener(
                            "webkitvisibilitychange",
                            s,
                            !1
                          ));
                      }),
                        (n.prototype.isHidden = function () {
                          return !1;
                        }),
                        (n.prototype.onVisibilityChange = function () {}),
                        "undefined" != typeof document &&
                          (void 0 !== document.hidden
                            ? ((a = "hidden"),
                              document.addEventListener(
                                "visibilitychange",
                                s,
                                !1
                              ))
                            : void 0 !== document.mozHidden
                            ? ((a = "mozHidden"),
                              document.addEventListener(
                                "mozvisibilitychange",
                                s,
                                !1
                              ))
                            : void 0 !== document.msHidden
                            ? ((a = "msHidden"),
                              document.addEventListener(
                                "msvisibilitychange",
                                s,
                                !1
                              ))
                            : void 0 !== document.webkitHidden &&
                              (console.warn("webkitHidden"),
                              (a = "webkitHidden"),
                              document.addEventListener(
                                "webkitvisibilitychange",
                                s,
                                !1
                              )));
                    };
                },
              },
            ]),
            t && y(e.prototype, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t;
        })();
        function m(e) {
          return (
            (m =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            m(e)
          );
        }
        function b(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, w(i.key), i);
          }
        }
        function w(e) {
          var t = (function (e) {
            if ("object" != m(e) || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(e, "string");
              if ("object" != m(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" == m(t) ? t : t + "";
        }
        var k = (function () {
          return (
            (e = function e(t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.parent = t),
                (this.params = n),
                (this.type = "log"),
                (this.isVerboseLoggingEnabled = !1),
                (this.isForced = !1),
                (this.prefix = "GameInterface"),
                (this.scopes = {
                  "[ads]": { name: "ADS", color: "#3b88c3" },
                  "[analytics]": { name: "ANALYTICS", color: "#9b59b6" },
                  "[storage]": { name: "STORAGE", color: "#03fc2c" },
                  "[gameStates]": { name: "GAMESTATES", color: "#f1c40f" },
                  "[intern]": { name: "INTERN", color: "#253342" },
                  "[console]": { name: "CONSOLE", color: "#F07857" },
                  "[mock]": { name: "MOCK", color: "#32a0a8" },
                  "[leaderboard]": { name: "LDRBRD", color: "#544680" },
                  "[game]": { name: "GAME", color: "#2ecc71" },
                  "[scoring]": { name: "SCORING", color: "#581845" },
                });
            }),
            (t = [
              {
                key: "init",
                value: function () {
                  var e, t, n, i, o, a, r, s, l;
                  return (
                    (this.isVerboseLoggingEnabled =
                      void 0 !==
                      (null === (e = this.params) || void 0 === e
                        ? void 0
                        : e.isVerboseLoggingEnabled)
                        ? null === (t = this.params) || void 0 === t
                          ? void 0
                          : t.isVerboseLoggingEnabled
                        : void 0 !==
                          (null === (n = this.parent.settings) ||
                          void 0 === n ||
                          null === (i = n.console) ||
                          void 0 === i
                            ? void 0
                            : i.isVerboseLoggingEnabled)
                        ? null === (o = this.parent.settings) ||
                          void 0 === o ||
                          null === (a = o.console) ||
                          void 0 === a
                          ? void 0
                          : a.isVerboseLoggingEnabled
                        : this.isVerboseLoggingEnabled),
                    (this.prefix =
                      (null === (r = this.params) || void 0 === r
                        ? void 0
                        : r.prefix) ||
                      (null === (s = this.parent.settings) ||
                      void 0 === s ||
                      null === (l = s.console) ||
                      void 0 === l
                        ? void 0
                        : l.prefix) ||
                      this.prefix),
                    this.parent.console.log("[console] init..."),
                    new Promise(function (e) {
                      e();
                    })
                  );
                },
              },
              {
                key: "log",
                value: function () {
                  return (
                    (this.type = "log"),
                    (this.isForced = !1),
                    this.print.apply(this, arguments)
                  );
                },
              },
              {
                key: "debug",
                value: function () {
                  return (
                    (this.type = "debug"),
                    (this.isForced = !1),
                    this.print.apply(this, arguments)
                  );
                },
              },
              {
                key: "warn",
                value: function () {
                  return (
                    (this.type = "warn"),
                    (this.isForced = !1),
                    this.print.apply(this, arguments)
                  );
                },
              },
              {
                key: "info",
                value: function () {
                  return (
                    (this.type = "info"),
                    (this.isForced = !1),
                    this.print.apply(this, arguments)
                  );
                },
              },
              {
                key: "error",
                value: function () {
                  return (
                    (this.type = "error"),
                    (this.isForced = !1),
                    this.print.apply(this, arguments)
                  );
                },
              },
              {
                key: "table",
                value: function () {
                  return (
                    (this.type = "table"),
                    (this.isForced = !1),
                    this.print.apply(this, arguments)
                  );
                },
              },
              {
                key: "force",
                value: function () {
                  return (
                    (this.type = "log"),
                    (this.isForced = !0),
                    this.print.apply(this, arguments)
                  );
                },
              },
              {
                key: "print",
                value: function () {
                  var e;
                  if (
                    this.isForced ||
                    this.isVerboseLoggingEnabled ||
                    !0 === window.isVerboseLoggingEnabled
                  ) {
                    for (
                      var t = arguments.length, n = new Array(t), i = 0;
                      i < t;
                      i++
                    )
                      n[i] = arguments[i];
                    var o = n[0].split(" ")[0];
                    o in this.scopes
                      ? ((n[0] = n[0].replace(o + " ", "")),
                        (n[0] = n[0].replace(o, "")),
                        (n[0] =
                          "%c"
                            .concat(this.prefix, "%c %c")
                            .concat(this.scopes[o].name, "%c ") + n[0]),
                        n.splice(
                          1,
                          0,
                          "display: inline-block; color: #fff; background: #e74c3c; padding: 1px 4px; border-radius: 3px;"
                        ),
                        n.splice(2, 0, ""),
                        n.splice(
                          3,
                          0,
                          "display: inline-block; color: #fff; background: " +
                            this.scopes[o].color +
                            "; padding: 1px 4px; border-radius: 3px;"
                        ),
                        n.splice(4, 0, ""))
                      : ((n[0] = "%c".concat(this.prefix, "%c ") + n[0]),
                        n.splice(
                          1,
                          0,
                          "display: inline-block; color: #fff; background: #e74c3c; padding: 1px 4px; border-radius: 3px;"
                        ),
                        n.splice(2, 0, "")),
                      (e = console)[this.type].apply(e, n);
                  }
                },
              },
            ]),
            t && b(e.prototype, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t;
        })();
        function S(e) {
          return (
            (S =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            S(e)
          );
        }
        function A(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, P(i.key), i);
          }
        }
        function P(e) {
          var t = (function (e) {
            if ("object" != S(e) || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(e, "string");
              if ("object" != S(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" == S(t) ? t : t + "";
        }
        var I = (function () {
          return (
            (e = function e(t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.parent = t),
                (this.params = n),
                (this.savegame = {}),
                (this.key = "savegame"),
                (this.prefix = "");
            }),
            (t = [
              {
                key: "init",
                value: function () {
                  var e,
                    t,
                    n,
                    i,
                    o,
                    a,
                    r,
                    s = this;
                  return (
                    (this.key =
                      (null === (e = this.params) || void 0 === e
                        ? void 0
                        : e.key) ||
                      (null === (t = this.parent.settings) ||
                      void 0 === t ||
                      null === (n = t.storage) ||
                      void 0 === n
                        ? void 0
                        : n.key) ||
                      this.key),
                    (this.prefix =
                      (null === (i = this.params) || void 0 === i
                        ? void 0
                        : i.prefix) ||
                      (null === (o = this.parent.settings) ||
                      void 0 === o ||
                      null === (a = o.storage) ||
                      void 0 === a
                        ? void 0
                        : a.prefix) ||
                      (null === (r = this.parent.settings) || void 0 === r
                        ? void 0
                        : r.GAME_ID) ||
                      this.prefix),
                    this.prefix.length &&
                      !this.prefix.endsWith(":") &&
                      (this.prefix += ":"),
                    this.parent.console.log(
                      "[storage] init... (prefix: '%s', key: '%s')",
                      this.prefix,
                      this.key
                    ),
                    new Promise(function (e) {
                      s.parent._storage
                        .getItem(s.prefix + s.key)
                        .then(function (t) {
                          try {
                            s.parent.console.debug(
                              "[storage] retrieving data...",
                              t
                            ),
                              (s.savegame = JSON.parse(t) || {}),
                              s.parent.console.debug(
                                "[storage] data parsed!",
                                s.savegame
                              );
                          } catch (e) {
                            s.parent.console.error(
                              "[storage] retrieving/parsing data failed...",
                              e
                            ),
                              (s.savegame = {});
                          }
                          e();
                        });
                    })
                  );
                },
              },
              {
                key: "setItem",
                value: function (e, t) {
                  (this.savegame[e] = t), this.save();
                },
              },
              {
                key: "getItem",
                value: function (e) {
                  return void 0 !== this.savegame[e] ? this.savegame[e] : null;
                },
              },
              {
                key: "removeItem",
                value: function (e) {
                  delete this.savegame[e], this.save();
                },
              },
              {
                key: "clear",
                value: function () {
                  (this.savegame = {}), this.save();
                },
              },
              {
                key: "save",
                value: function () {
                  var e = JSON.stringify(this.savegame);
                  this.parent.console.debug(
                    "[storage] saving data to '%s'...",
                    this.prefix + this.key,
                    e
                  ),
                    this.parent._storage.setItem(this.prefix + this.key, e);
                },
              },
            ]),
            t && A(e.prototype, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t;
        })();
        function E(e) {
          return (
            (E =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            E(e)
          );
        }
        function G(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, R(i.key), i);
          }
        }
        function R(e) {
          var t = (function (e) {
            if ("object" != E(e) || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(e, "string");
              if ("object" != E(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" == E(t) ? t : t + "";
        }
        var C = (function () {
          return (
            (e = function e(t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.parent = t),
                (this.params = n),
                (this.muted = !1),
                (this.paused = !1),
                (this._muted = !1),
                (this._paused = !1),
                (this.isGameplay = !1),
                (this.isGameplayStarted = !1),
                (this.isGameplayStopped = !1),
                (this.callbacks = {
                  onAudioStateChange: null,
                  onPauseStateChange: null,
                  onMuteStateChange: null,
                  onGoToHome: null,
                  onGoToNextLevel: null,
                  onGoToLevel: null,
                  onRestartGame: null,
                  onQuitGame: null,
                  onGameplayStart: null,
                  onGameplayStop: null,
                });
            }),
            (t = [
              {
                key: "init",
                value: function () {
                  var e = this;
                  return new Promise(function (t) {
                    e.parent.console.log("[gameStates] init..."),
                      (!0 === e.parent.settings.isMuted ||
                        ["1", "true"].includes(e.parent.settings.isMuted)) &&
                        (e.parent.console.log(
                          "[gameStates] forcing initial muting..."
                        ),
                        (e.muted = e._muted = !0)),
                      t();
                  });
                },
              },
              {
                key: "startGameplay",
                value: function () {
                  arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0] &&
                    (this.isGameplay = !0),
                    this.isGameplay &&
                      !this.isGameplayStarted &&
                      ((this.isGameplayStarted = !0),
                      (this.isGameplayStopped = !1),
                      this.parent.console.log("[gameStates] startGameplay"),
                      "function" == typeof this.callbacks.onGameplayStart &&
                        this.callbacks.onGameplayStart());
                },
              },
              {
                key: "stopGameplay",
                value: function () {
                  var e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                  this.isGameplay &&
                    !this.isGameplayStopped &&
                    ((this.isGameplayStopped = !0),
                    (this.isGameplayStarted = !1),
                    this.parent.console.log("[gameStates] stopGameplay"),
                    "function" == typeof this.callbacks.onGameplayStop &&
                      this.callbacks.onGameplayStop()),
                    e && (this.isGameplay = !1);
                },
              },
              {
                key: "mute",
                value: function () {
                  var e =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0],
                    t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                  this.parent.console.log(
                    "[gameStates] %s%s...",
                    e ? "muting" : "unmuting",
                    t ? " (triggered by ad)" : ""
                  ),
                    this.parent.console.debug(
                      "[gameStates] mute()",
                      e,
                      this.muted,
                      this._muted
                    );
                  var n = this.muted;
                  t
                    ? (e = this.muted = e || this._muted)
                    : (this._muted = this.muted = e),
                    this.muted !== n &&
                      "function" == typeof this.callbacks.onAudioStateChange &&
                      this.callbacks.onAudioStateChange(e),
                    this.muted !== n &&
                      "function" == typeof this.callbacks.onMuteStateChange &&
                      this.callbacks.onMuteStateChange(e);
                },
              },
              {
                key: "pause",
                value: function () {
                  var e =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0],
                    t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                  this.parent.console.log(
                    "[gameStates] %s%s...",
                    e ? "pausing" : "resuming",
                    t ? " (triggered by ad)" : ""
                  );
                  var n = this.paused;
                  t
                    ? (e = this.paused = e || this._paused)
                    : (this._paused = this.paused = e),
                    this.paused !== n &&
                      "function" == typeof this.callbacks.onPauseStateChange &&
                      this.callbacks.onPauseStateChange(e);
                },
              },
              {
                key: "onPauseStateChange",
                value: function (e) {
                  this.callbacks.onPauseStateChange = e;
                },
              },
              {
                key: "onAudioStateChange",
                value: function (e) {
                  this.callbacks.onAudioStateChange = e;
                },
              },
              {
                key: "onMuteStateChange",
                value: function (e) {
                  this.callbacks.onMuteStateChange = e;
                },
              },
              {
                key: "onGoToHome",
                value: function (e) {
                  this.callbacks.onGoToHome = e;
                },
              },
              {
                key: "onGoToNextLevel",
                value: function (e) {
                  this.callbacks.onGoToNextLevel = e;
                },
              },
              {
                key: "onGoToLevel",
                value: function (e) {
                  this.callbacks.onGoToLevel = e;
                },
              },
              {
                key: "onRestartGame",
                value: function (e) {
                  this.callbacks.onRestartGame = e;
                },
              },
              {
                key: "onQuitGame",
                value: function (e) {
                  this.callbacks.onQuitGame = e;
                },
              },
              {
                key: "goToHome",
                value: function () {
                  "function" == typeof this.callbacks.onGoToHome &&
                    this.callbacks.onGoToHome();
                },
              },
              {
                key: "goToNextLevel",
                value: function () {
                  "function" == typeof this.callbacks.onGoToNextLevel &&
                    this.callbacks.onGoToNextLevel();
                },
              },
              {
                key: "goToLevel",
                value: function (e) {
                  "function" == typeof this.callbacks.onGoToLevel &&
                    this.callbacks.onGoToLevel(e);
                },
              },
              {
                key: "restartGame",
                value: function () {
                  "function" == typeof this.callbacks.onRestartGame &&
                    this.callbacks.onRestartGame();
                },
              },
              {
                key: "quitGame",
                value: function () {
                  "function" == typeof this.callbacks.onQuitGame &&
                    this.callbacks.onQuitGame();
                },
              },
              {
                key: "isMuted",
                value: function () {
                  return this.muted;
                },
              },
              {
                key: "isPaused",
                value: function () {
                  return this.paused;
                },
              },
              {
                key: "onGameplayStart",
                value: function (e) {
                  this.callbacks.onGameplayStart = e;
                },
              },
              {
                key: "onGameplayStop",
                value: function (e) {
                  this.callbacks.onGameplayStop = e;
                },
              },
            ]),
            t && G(e.prototype, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t;
        })();
        function O(e) {
          return (
            (O =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            O(e)
          );
        }
        function L(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, j(i.key), i);
          }
        }
        function j(e) {
          var t = (function (e) {
            if ("object" != O(e) || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(e, "string");
              if ("object" != O(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" == O(t) ? t : t + "";
        }
        var D = (function () {
          return (
            (e = function e(t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.parent = t),
                (this.params = n),
                (this.scores = { current: {}, best: {} }),
                (this.isAutoSaving = !1),
                (this.key = "scoring");
            }),
            (t = [
              {
                key: "init",
                value: function () {
                  var e = this;
                  return new Promise(function (t) {
                    var n, i, o, a, r, s, l, u, c;
                    (e.key =
                      (null === (n = e.params) || void 0 === n
                        ? void 0
                        : n.key) ||
                      (null === (i = e.parent.settings) ||
                      void 0 === i ||
                      null === (o = i.scoring) ||
                      void 0 === o
                        ? void 0
                        : o.key) ||
                      e.key),
                      (e.isAutoSaving =
                        void 0 !==
                        (null === (a = e.params) || void 0 === a
                          ? void 0
                          : a.isAutoSaving)
                          ? null === (r = e.params) || void 0 === r
                            ? void 0
                            : r.isAutoSaving
                          : void 0 !==
                            (null === (s = e.parent.settings) ||
                            void 0 === s ||
                            null === (l = s.scoring) ||
                            void 0 === l
                              ? void 0
                              : l.isAutoSaving)
                          ? null === (u = e.parent.settings) ||
                            void 0 === u ||
                            null === (c = u.scoring) ||
                            void 0 === c
                            ? void 0
                            : c.isAutoSaving
                          : e.isAutoSaving),
                      e.parent.console.log(
                        "[scoring] init... (key: '%s', isAutoSaving: %s)",
                        e.key,
                        e.isAutoSaving ? "true" : "false"
                      );
                    try {
                      e.parent.console.debug("[scoring] retrieving scores...");
                      var d = e.parent.storage.getItem(e.key) || "{}";
                      (e.scores.best = JSON.parse(d)),
                        e.parent.console.debug(
                          "[scoring] scores parsed!",
                          e.scores
                        );
                    } catch (t) {
                      e.parent.console.error(
                        "[scoring] retrieving/parsing scores failed...",
                        t
                      ),
                        (e.scores.best = {});
                    }
                    t();
                  });
                },
              },
              {
                key: "set",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2];
                  Number.isInteger(t) || (t = "endless"),
                    (this.scores.current = this.scores.current || {}),
                    (this.scores.best = this.scores.best || {}),
                    (this.scores.current[t] = e),
                    (this.scores.best[t] = this.scores.best[t] || 0),
                    e > this.scores.best[t] &&
                      ((this.scores.best[t] = e),
                      (!0 === n || this.isAutoSaving) && this.save());
                },
              },
              {
                key: "get",
                value: function (e) {
                  return (
                    Number.isInteger(e) || (e = "endless"),
                    (this.scores.current = this.scores.current || {}),
                    (this.scores.best = this.scores.best || {}),
                    e in this.scores.current || (this.scores.current[e] = 0),
                    e in this.scores.best || (this.scores.best[e] = 0),
                    {
                      current: this.scores.current[e],
                      best: this.scores.best[e],
                    }
                  );
                },
              },
              {
                key: "save",
                value: function () {
                  var e = JSON.stringify(this.scores.best);
                  this.parent.console.log(
                    "[scoring] saving '%s'...",
                    this.key,
                    e
                  ),
                    this.parent.storage.setItem(this.key, e);
                },
              },
              {
                key: "reset",
                value: function () {
                  (this.scores.current = {}),
                    (this.scores.best = {}),
                    this.save();
                },
              },
            ]),
            t && L(e.prototype, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t;
        })();
        function T(e) {
          return (
            (T =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            T(e)
          );
        }
        function _(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, N(i.key), i);
          }
        }
        function x(e, t, n) {
          return (
            (t = N(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function N(e) {
          var t = (function (e) {
            if ("object" != T(e) || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(e, "string");
              if ("object" != T(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" == T(t) ? t : t + "";
        }
        var F = (function () {
          function e() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              x(this, "_storage", {
                setItem: function (e, t) {
                  return Promise.resolve(window.localStorage.setItem(e, t));
                },
                getItem: function (e) {
                  return Promise.resolve(window.localStorage.getItem(e));
                },
              }),
              (this.gameFiles = t),
              (this.params = n),
              (this.settings = {
                gameID: null,
                locale: "en",
                files: [],
                features: {
                  audio: !0,
                  pause: !0,
                  score: !0,
                  progress: !0,
                  copyright: !0,
                  credits: !0,
                  version: !0,
                  rewarded: !0,
                  tutorial: !0,
                  visibilitychange: !0,
                },
                ads: {
                  types: {
                    initial: {
                      enabled: !1,
                      preload: 250,
                      retry: 2e3,
                      timeout: 250,
                      state: 0,
                    },
                    interstitial: {
                      enabled: !0,
                      cooldown: 60,
                      preload: 250,
                      retry: 2e3,
                      timeout: 250,
                      state: 0,
                    },
                    rewarded: {
                      enabled: !0,
                      preload: 500,
                      retry: 2e3,
                      timeout: 250,
                      state: 0,
                      reward: !0,
                    },
                    banner: {
                      enabled: !1,
                      preload: 250,
                      retry: 2e3,
                      timeout: 250,
                      state: 0,
                    },
                  },
                },
                gameanalytics: {
                  isEnabled: !1,
                  url: "//download.gameanalytics.com/js/GameAnalytics-4.4.5.min.js",
                  build: "",
                  game_key: "",
                  secret_key: "",
                  setEnabledInfoLog: !0,
                  setEnabledEventSubmission: !0,
                },
                console: { isVerboseLoggingEnabled: !1 },
                storage: { key: "savegame", prefix: "" },
              });
          }
          return (
            (t = e),
            (n = [
              {
                key: "init",
                value: function () {
                  var t = this;
                  return (
                    (this.console = new k(this)),
                    (this.ads = new r(this)),
                    (this.gameAnalytics = new c(this)),
                    (this.helpers = new v(this)),
                    (this.storage = new I(this)),
                    (this.gameStates = new C(this)),
                    (this.scoring = new D(this)),
                    this.console.log("[intern] init..."),
                    new Promise(function (n) {
                      t.helpers.updateSettings(t.settings).then(function (i) {
                        (t.settings = i),
                          t.console.init().then(function () {
                            t.helpers
                              .loadFiles(t.settings.files || [])
                              .then(function () {
                                t._initSDK()
                                  .then(function () {
                                    t.ads.init().then(function () {
                                      t.storage.init().then(function () {
                                        t.scoring.init().then(function () {
                                          t.gameAnalytics
                                            .init()
                                            .then(function () {
                                              t.gameStates
                                                .init()
                                                .then(function () {
                                                  t.helpers
                                                    .loadFiles(t.gameFiles)
                                                    .then(function () {
                                                      console.log(
                                                        "%cPortalIF: %c"
                                                          .concat(
                                                            t.constructor
                                                              .version,
                                                            " %c| MainGameIF: %c"
                                                          )
                                                          .concat(
                                                            e.version,
                                                            " %c| Game: %c"
                                                          )
                                                          .concat(
                                                            t.settings
                                                              .version || "n/a"
                                                          ),
                                                        "color: #3498db; font-weight: bold;",
                                                        "color: #2ecc71;",
                                                        "color: #95a5a6;",
                                                        "color: #e74c3c; font-weight: bold;",
                                                        "color: #f1c40f;",
                                                        "color: #9b59b6; font-weight: bold;"
                                                      ),
                                                        n();
                                                    });
                                                });
                                            });
                                        });
                                      });
                                    });
                                  })
                                  .catch(function (e) {
                                    t.console.error("[intern]", e);
                                  });
                              });
                          });
                      });
                    })
                  );
                },
              },
              {
                key: "hasFeature",
                value: function (e) {
                  return !!this.settings.features[e];
                },
              },
              { key: "sendPreloadProgress", value: function (e) {} },
              {
                key: "gameReady",
                value: function () {
                  this.console.log("[game] gameReady()");
                },
              },
              {
                key: "gameStart",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  return (
                    (this.gameStates.level = e),
                    this.console.log("[game] gameStart(%s)", e),
                    this.track("ga:progression", {
                      progressionStatus: "Start",
                      progression01: e,
                    }),
                    Promise.resolve()
                  );
                },
              },
              { key: "sendProgress", value: function (e) {} },
              {
                key: "sendScore",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  this.gameStates.score = e;
                },
              },
              {
                key: "gameComplete",
                value: function () {
                  return (
                    this.console.log("[game] gameComplete()"),
                    this.track("ga:progression", {
                      progressionStatus: "Complete",
                      progression01: this.gameStates.level,
                    }),
                    Promise.resolve()
                  );
                },
              },
              {
                key: "gameOver",
                value: function () {
                  return (
                    this.console.log("[game] gameOver()"),
                    this.track("ga:progression", {
                      progressionStatus: "Fail",
                      progression01: this.gameStates.level,
                      progression02: "gameover",
                    }),
                    Promise.resolve()
                  );
                },
              },
              {
                key: "gameQuit",
                value: function () {
                  return (
                    this.console.log("[game] gameQuit()"),
                    this.track("ga:progression", {
                      progressionStatus: "Fail",
                      progression01: this.gameStates.level,
                      progression02: "quit",
                    }),
                    Promise.resolve()
                  );
                },
              },
              {
                key: "gamePause",
                value: function () {
                  return (
                    this.console.log("[game] gamePause()"), Promise.resolve()
                  );
                },
              },
              {
                key: "gameResume",
                value: function () {
                  return (
                    this.console.log("[game] gameResume()"), Promise.resolve()
                  );
                },
              },
              {
                key: "onGoToHome",
                value: function (e) {
                  return this.gameStates.onGoToHome(e);
                },
              },
              {
                key: "onGoToNextLevel",
                value: function (e) {
                  return this.gameStates.onGoToNextLevel(e);
                },
              },
              {
                key: "onGoToLevel",
                value: function (e) {
                  return this.gameStates.onGoToLevel(e);
                },
              },
              {
                key: "onRestartGame",
                value: function (e) {
                  return this.gameStates.onRestartGame(e);
                },
              },
              {
                key: "onQuitGame",
                value: function (e) {
                  return this.gameStates.onQuitGame(e);
                },
              },
              {
                key: "onAudioStateChange",
                value: function (e) {
                  return this.gameStates.onAudioStateChange(e);
                },
              },
              {
                key: "onMuteStateChange",
                value: function (e) {
                  return this.gameStates.onMuteStateChange(e);
                },
              },
              {
                key: "isMuted",
                value: function () {
                  return this.gameStates.isMuted();
                },
              },
              {
                key: "onPauseStateChange",
                value: function (e) {
                  return this.gameStates.onPauseStateChange(e);
                },
              },
              {
                key: "isPaused",
                value: function () {
                  return this.gameStates.isPaused();
                },
              },
              {
                key: "isInterstitialAdAvailable",
                value: function (e) {
                  return this.ads.isInterstitialAdAvailable(e);
                },
              },
              {
                key: "showInterstitialAd",
                value: function (e, t) {
                  var n = this;
                  return new Promise(function (i) {
                    n._showInterstitialAd(e, t)
                      .then(function () {
                        n.console.debug(
                          "[ads] _showInterstitialAd('%s', '%s') %cresolved",
                          e,
                          t,
                          "color: green"
                        ),
                          n.ads.show("interstitial").then(function () {
                            i();
                          });
                      })
                      .catch(function (o) {
                        n.console.debug(
                          "[ads] _showInterstitialAd('%s', '%s') %crejected",
                          e,
                          t,
                          "color: red"
                        ),
                          i();
                      });
                  });
                },
              },
              {
                key: "hasRewardedAd",
                value: function (e) {
                  return this.ads.hasRewardedAd(e);
                },
              },
              {
                key: "hasInterstitialAd",
                value: function (e) {
                  return this.ads.hasInterstitialAd(e);
                },
              },
              {
                key: "isRewardedAdAvailable",
                value: function (e) {
                  return this.ads.isRewardedAdAvailable(e);
                },
              },
              {
                key: "showRewardedAd",
                value: function (e) {
                  var t = this;
                  return new Promise(function (n) {
                    t._showRewardedAd(e)
                      .then(function () {
                        t.console.debug(
                          "[ads] _showRewardedAd('%s') %cresolved",
                          e,
                          "color: green"
                        ),
                          t.ads.show("rewarded").then(function (e) {
                            n(e);
                          });
                      })
                      .catch(function (i) {
                        t.console.debug(
                          "[ads] _showRewardedAd('%s') %crejected",
                          e,
                          "color: red"
                        ),
                          n();
                      });
                  });
                },
              },
              {
                key: "onRewardedAdAvailabilityChange",
                value: function (e) {
                  return this.ads.onRewardedAdAvailabilityChange(e);
                },
              },
              {
                key: "onInterstitialAdAvailabilityChange",
                value: function (e) {
                  return this.ads.onInterstitialAdAvailabilityChange(e);
                },
              },
              {
                key: "onOffsetChange",
                value: function (e) {
                  return this.ads.onOffsetChange(e);
                },
              },
              {
                key: "getOffsets",
                value: function () {
                  return this.ads.getOffsets();
                },
              },
              {
                key: "getCurrentLanguage",
                value: function () {
                  return this.helpers.getLocale();
                },
              },
              {
                key: "innerWidth",
                get: function () {
                  return this.ads.innerWidth;
                },
              },
              {
                key: "innerHeight",
                get: function () {
                  return this.ads.innerHeight;
                },
              },
              {
                key: "track",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "",
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  this.gameAnalytics.track(e, t);
                },
              },
              { key: "log", value: function () {} },
              {
                key: "_initSDK",
                value: function () {
                  return Promise.resolve();
                },
              },
              {
                key: "_preloadAd",
                value: function () {
                  return Promise.resolve();
                },
              },
              {
                key: "_hasRewardedAd",
                value: function (e) {
                  return !0;
                },
              },
              {
                key: "_hasInterstitialAd",
                value: function (e) {
                  return !0;
                },
              },
              {
                key: "_showInterstitialAd",
                value: function () {
                  return Promise.resolve();
                },
              },
              {
                key: "_showRewardedAd",
                value: function () {
                  return Promise.resolve();
                },
              },
              {
                key: "_showAd",
                value: function (e) {
                  return "rewarded" === e
                    ? Promise.resolve(!0)
                    : Promise.resolve();
                },
              },
              {
                key: "getCopyrightLogoURL",
                value: function (e, t) {
                  var n =
                    "copyright" +
                    ("light" ===
                    (t = ["dark", "light"].includes(t) ? t : "dark")
                      ? "/light"
                      : "");
                  return this.helpers.getImageURL(n, e, "logo.png");
                },
              },
              {
                key: "info",
                value: function () {
                  return { ads: this.ads.info };
                },
              },
            ]),
            n && _(t.prototype, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, n;
        })();
        x(F, "version", "1.8.1");
      },
      935: (e, t, n) => {
        n.d(t, { C: () => v });
        var i = n(748);
        function o(e) {
          return (
            (o =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            o(e)
          );
        }
        function a(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, s(i.key), i);
          }
        }
        function r(e, t, n) {
          return (
            t && a(e.prototype, t),
            n && a(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
        }
        function s(e) {
          var t = (function (e) {
            if ("object" != o(e) || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(e, "string");
              if ("object" != o(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" == o(t) ? t : t + "";
        }
        var l = r(function e(t) {
          var n,
            i,
            o,
            a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (n = this),
            (o = {
              parent: null,
              init: function () {
                return (
                  this.parent.console.force("[mock] CrazyGames.SDK.init()"),
                  Promise.resolve()
                );
              },
              game: {
                parent: null,
                loadingStart: function () {
                  this.parent.console.force(
                    "[mock] CrazyGames.SDK.game.loadingStart()"
                  );
                },
                loadingStop: function () {
                  this.parent.console.force(
                    "[mock] CrazyGames.SDK.game.loadingStop()"
                  );
                },
                gameplayStart: function () {
                  this.parent.console.force(
                    "[mock] CrazyGames.SDK.game.gameplayStart()"
                  );
                },
                gameplayStop: function () {
                  this.parent.console.force(
                    "[mock] CrazyGames.SDK.game.gameplayStop()"
                  );
                },
              },
              data: {
                parent: null,
                getItem: function (e) {
                  var t = window.localStorage.getItem(e) || null;
                  return (
                    this.parent.console.log(
                      "[mock] CrazyGames.data.getItem(%s)",
                      e,
                      t
                    ),
                    t
                  );
                },
                setItem: function (e, t) {
                  return (
                    this.parent.console.log(
                      "[mock] CrazyGames.data.setItem('%s', '%s')",
                      e,
                      t
                    ),
                    window.localStorage.setItem(e, t)
                  );
                },
              },
              ad: {
                parent: null,
                requestAd: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "midgame",
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  this.parent.console.force(
                    "[mock] CrazyGames.SDK.ad.requestAd('%s')",
                    e
                  );
                  var n = !1;
                  "function" == typeof t.adStarted && t.adStarted(),
                    this.parent.ads
                      .testAd("midgame" === e ? "interstitial" : "rewarded")
                      .then(function (i) {
                        var o;
                        !0 ===
                          (null == i || null === (o = i.args) || void 0 === o
                            ? void 0
                            : o.success) && (n = !0),
                          "rewarded" === e
                            ? n
                              ? "function" == typeof t.adFinished &&
                                t.adFinished()
                              : "function" == typeof t.adError && t.adError()
                            : "function" == typeof t.adFinished &&
                              t.adFinished();
                      });
                },
              },
            }),
            (i = s((i = "SDK"))) in n
              ? Object.defineProperty(n, i, {
                  value: o,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (n[i] = o),
            (this.parent = t),
            (this.params = a),
            this.parent.helpers
              .loadFiles("//cdn.jsdelivr.net/npm/sweetalert2@11")
              .then(function () {}),
            (this.SDK.parent = this.parent),
            (this.SDK.game.parent = this.parent),
            (this.SDK.data.parent = this.parent),
            (this.SDK.ad.parent = this.parent),
            this.parent.console.info("[mock] CrazyGames mocked!");
        });
        function u(e) {
          return (
            (u =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            u(e)
          );
        }
        function c(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, g(i.key), i);
          }
        }
        function d(e, t, n) {
          return (
            (t = h(t)),
            (function (e, t) {
              if (t && ("object" == u(t) || "function" == typeof t)) return t;
              if (void 0 !== t)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              })(e);
            })(
              e,
              f()
                ? Reflect.construct(t, n || [], h(e).constructor)
                : t.apply(e, n)
            )
          );
        }
        function f() {
          try {
            var e = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            );
          } catch (e) {}
          return (f = function () {
            return !!e;
          })();
        }
        function h(e) {
          return (
            (h = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            h(e)
          );
        }
        function p(e, t) {
          return (
            (p = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
            p(e, t)
          );
        }
        function y(e, t, n) {
          return (
            (t = g(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function g(e) {
          var t = (function (e) {
            if ("object" != u(e) || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(e, "string");
              if ("object" != u(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" == u(t) ? t : t + "";
        }
        var v = (function (e) {
          function t() {
            var e,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              y((e = d(this, t, [n, i])), "_storage", {
                getItem: function (e) {
                  return new Promise(function (t) {
                    t(window.CrazyGames.SDK.data.getItem(e));
                  });
                },
                setItem: function (e, t) {
                  return new Promise(function (n) {
                    n(window.CrazyGames.SDK.data.setItem(e, t));
                  });
                },
              }),
              (e.settings.console = e.settings.console || {}),
              (e.settings.console.isVerboseLoggingEnabled = !0),
              (e.settings.ads = e.settings.ads || {}),
              (e.settings.ads.types = e.settings.ads.types || {}),
              (e.settings.ads.types.interstitial =
                e.settings.ads.types.interstitial || {}),
              (e.settings.ads.types.interstitial.cooldown = 0),
              (e.settings.ads.isAutoPausing = !1),
              e
            );
          }
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                t && p(e, t);
            })(t, e),
            (n = t),
            (i = [
              {
                key: "_initSDK",
                value: function () {
                  var e = this;
                  return new Promise(function (t, n) {
                    e.helpers
                      .loadFiles("//sdk.crazygames.com/crazygames-sdk-v3.js")
                      .then(function () {
                        if (
                          (["1", "true"].includes(e.settings.mock) &&
                            (window.CrazyGames = new l(e)),
                          void 0 === window.CrazyGames)
                        )
                          return (
                            console.error("window.CrazyGames is undefined!"),
                            n()
                          );
                        window.addEventListener(
                          "wheel",
                          function (e) {
                            return e.preventDefault();
                          },
                          { passive: !1 }
                        ),
                          window.addEventListener("keydown", function (e) {
                            ["ArrowUp", "ArrowDown", " "].includes(e.key) &&
                              e.preventDefault();
                          }),
                          window.CrazyGames.SDK.init().then(function () {
                            e.gameStates.onGameplayStart(function () {
                              window.CrazyGames.SDK.game.gameplayStart();
                            }),
                              e.gameStates.onGameplayStop(function () {
                                window.CrazyGames.SDK.game.gameplayStop();
                              }),
                              window.CrazyGames.SDK.game.loadingStart(),
                              t();
                          });
                      });
                  });
                },
              },
              {
                key: "_hasRewardedAd",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "";
                  return (
                    "string" != typeof e || !e.toLowerCase().includes("revive")
                  );
                },
              },
              {
                key: "_preloadAd",
                value: function (e) {
                  return Promise.resolve();
                },
              },
              {
                key: "_showInterstitialAd",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "";
                  return this.ads.isValid(e)
                    ? Promise.resolve()
                    : (this.console.warn(
                        "[intern] rejecting showInterstitialAd('%s')... (eventId is not valid)",
                        e
                      ),
                      Promise.reject());
                },
              },
              {
                key: "_showRewardedAd",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "";
                  return this.ads.isValid(e, "rewarded")
                    ? Promise.resolve()
                    : (this.console.warn(
                        "[intern] rejecting showRewardedAd('%s')... (eventId is not valid)",
                        e
                      ),
                      Promise.reject());
                },
              },
              {
                key: "_showAd",
                value: function (e) {
                  var t = this;
                  return new Promise(function (n) {
                    var i = {},
                      o = !0;
                    function a() {
                      (a = function () {}),
                        window.GameInterface.gameStates.mute(!1, !0),
                        window.GameInterface.gameStates.pause(!1, !0),
                        n(o);
                    }
                    return "interstitial" === e
                      ? ((i = {
                          adFinished: function () {
                            t.console.info("Ad finished"), a();
                          },
                          adError: function (e) {
                            t.console.error("Error midgame ad", e), a();
                          },
                          adStarted: function () {
                            t.console.info("Start midgame ad"),
                              window.GameInterface.gameStates.mute(!0, !0),
                              window.GameInterface.gameStates.pause(!0, !0);
                          },
                        }),
                        window.CrazyGames.SDK.ad.requestAd("midgame", i))
                      : ((i = {
                          adFinished: function () {
                            t.console.info("Ad finished", {
                              isRewardGranted: o,
                            }),
                              a();
                          },
                          adError: function (e) {
                            t.console.error("Error rewarded ad", e),
                              (o = !1),
                              a();
                          },
                          adStarted: function () {
                            t.console.info("Start rewarded ad"),
                              window.GameInterface.gameStates.mute(!0, !0),
                              window.GameInterface.gameStates.pause(!0, !0);
                          },
                        }),
                        window.CrazyGames.SDK.ad.requestAd("rewarded", i));
                  });
                },
              },
              {
                key: "gameReady",
                value: function () {
                  this.console.log("gameReady()"),
                    this.gameStates.ready ||
                      ((this.gameStates.ready = !0),
                      window.CrazyGames.SDK.game.loadingStop());
                },
              },
              {
                key: "gameStart",
                value: function (e) {
                  var t = this;
                  return new Promise(function (n) {
                    t.console.log("gameStart(%s)", e || ""),
                      (t.gameStates.level = e),
                      t.gameStates.startGameplay(!0),
                      n();
                  });
                },
              },
              {
                key: "gameQuit",
                value: function () {
                  var e = this;
                  return new Promise(function (t) {
                    e.console.log("gameQuit()"),
                      e.gameStates.stopGameplay(!0),
                      t();
                  });
                },
              },
              {
                key: "gameComplete",
                value: function () {
                  var e = this;
                  return new Promise(function (t) {
                    e.console.log("gameComplete()"),
                      e.gameStates.stopGameplay(!0),
                      t();
                  });
                },
              },
              {
                key: "gameOver",
                value: function () {
                  var e = this;
                  return new Promise(function (t) {
                    e.console.log("gameOver()"),
                      e.gameStates.stopGameplay(!0),
                      t();
                  });
                },
              },
              {
                key: "gamePause",
                value: function () {
                  var e = this;
                  return new Promise(function (t) {
                    e.console.log("gamePause()"),
                      e.gameStates.stopGameplay(),
                      t();
                  });
                },
              },
              {
                key: "gameResume",
                value: function () {
                  var e = this;
                  return new Promise(function (t) {
                    e.console.log("gameResume()"),
                      e.gameStates.startGameplay(),
                      t();
                  });
                },
              },
            ]),
            i && c(n.prototype, i),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            n
          );
          var n, i;
        })(i.m);
        y(v, "version", "1.0.6");
      },
    },
    n = {};
  function i(e) {
    var o = n[e];
    if (void 0 !== o) return o.exports;
    var a = (n[e] = { exports: {} });
    return t[e](a, a.exports, i), a.exports;
  }
  (i.d = (e, t) => {
    for (var n in t)
      i.o(t, n) &&
        !i.o(e, n) &&
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
  }),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    i(748),
    (e = i(935).C),
    (window.GameInterface = {
      init: function (t, n) {
        return new Promise(function (i) {
          (window.GameInterface = new e(t, n)),
            window.GameInterface.init().then(function () {
              i();
            });
        });
      },
    });
})();
