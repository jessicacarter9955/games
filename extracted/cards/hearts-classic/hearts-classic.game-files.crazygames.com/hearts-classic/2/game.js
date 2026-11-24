var _STRINGS = {
    Ad: {
      Mobile: {
        Preroll: {
          ReadyIn: "The\x20game\x20is\x20ready\x20in\x20",
          Loading: "Your\x20game\x20is\x20loading...",
          Close: "Close",
        },
        Header: {
          ReadyIn: "The\x20game\x20is\x20ready\x20in\x20",
          Loading: "Your\x20game\x20is\x20loading...",
          Close: "Close",
        },
        End: {
          ReadyIn: "Advertisement\x20ends\x20in\x20",
          Loading: "Please\x20wait\x20...",
          Close: "Close",
        },
      },
    },
    Splash: {
      Loading: "Loading\x20...",
      LogoLine1: "Some\x20text\x20here",
      LogoLine2: "powered\x20by\x20MarketJS",
      LogoLine3: "none",
      TapToStart: "TAP\x20TO\x20START",
    },
    Game: {
      SelectPlayer: "Select\x20Player",
      Win: "You\x20win!",
      Lose: "You\x20lose!",
      Score: "Score",
      Time: "Time",
      win: "win",
      ThisHand: "This\x20Hand",
      TotalScore: "Total\x20Score",
      TrickTaken: "Trick\x20Taken\x20:\x20",
      ChooseBid: "What\x20is\x20your\x20bid?",
      RoundScore: "Scores\x20this\x20round\x20:\x20",
      TeamA: "You\x20&\x20Bill",
      TeamB: "John\x20&\x20Lisa",
      Bid: "Bid",
      CombinedBid: "Combined\x20Bid",
      Tricks: "Tricks",
      TricksTaken: "Tricks\x20Taken",
      BidScore: "Bid\x20Score",
      Bags: "Bags",
      TotalBags: "Total\x20Bags",
      ScoreTaken: "Score\x20Taken",
      NilScore: "Nil\x20Score",
      Play: "Play",
      MoreGames: "More\x20Games",
      BlindNil: "Blind\x20Nil",
      John: "John",
      Bill: "Bill",
      Lisa: "Lisa",
      You: "You",
      NextHand: "Next\x20Round",
      ResetScore: "Reset\x20Score",
      NewGame: "New\x20Game",
      BackToMenu: "Back\x20To\x20Menu",
      CurrentScore: "Current\x20Score",
      bag: "bag",
      bags: "bags",
      YourTurn: "Your\x20turn!\x20Click\x20a\x20card\x20to\x20play.",
      InvalidCard1:
        "You\x20must\x20follow\x20the\x20leading\x20suit\x20if\x20you\x20can!",
      InvalidCard2:
        "You\x20cannot\x20lead\x20with\x20a\x20Heart\x20until\x20a\x20Heart\x20is\x20played!",
      InvalidCard3: "You\x20can\x20only\x20choose\x203\x20cards!",
      InvalidCard4:
        "You\x20can\x20only\x20lead\x20with\x202\x20of\x20Clubs\x20in\x20the\x20first\x20round!",
      InvalidCard5:
        "You\x20cannot\x20play\x20Hearts\x20in\x20the\x20first\x20round!",
      InvalidCard6:
        "You\x20cannot\x20play\x20Queen\x20of\x20Spades\x20in\x20the\x20first\x20round!",
      InvalidPass: "You\x20have\x20to\x20choose\x203\x20cards\x20to\x20pass!",
      PassGuide: "Click\x20the\x20arrow\x20to\x20pass",
      Resume: "Resume",
      ScoreToWin: "Score\x20to\x20win",
      Rules: "Rules",
      Ok: "OK",
      Pass: "Select\x203\x20cards\x20and\x20pass\x20to\x20",
      RulesDetail1:
        "1.\x20Game\x20ends\x20when\x20someone\x20reaches\x20a\x20total\x20of\x20100\x20points.\x20Player\x20with\x20the\x20lowest\x20score\x20wins.",
      RulesDetail2:
        "2.\x20Each\x20Heart\x20gives\x20one\x20point.\x20Queen\x20of\x20Spades\x20gives\x2013\x20points.",
      RulesDetail3:
        "3.\x20The\x20trick\x20is\x20taken\x20by\x20the\x20player\x20who\x20played\x20the\x20highest\x20value\x20of\x20the\x20leading\x20suit.",
      RulesDetail4:
        "4.\x20Player\x20must\x20follow\x20suit\x20of\x20leader,\x20unless\x20unable.",
      RulesDetail5:
        "5.\x20Lead\x20player\x20can\x20not\x20play\x20a\x20Heart,\x20unless\x20Hearts\x20\x22have\x20been\x20broken\x22\x20(were\x20played\x20before).",
      RulesDetail6:
        "6.\x20In\x20the\x20first\x20round,\x202\x20of\x20Clubs\x20always\x20leads\x20and\x20other\x20players\x20cannot\x20play\x20a\x20Heart\x20or\x20Queen\x20of\x20Spades.",
      RulesDetail7:
        "7.\x20If\x20someone\x20gets\x2026\x20points\x20by\x20getting\x20all\x2013\x20Hearts\x20and\x20Queen\x20of\x20Spades\x20(called\x20\x22shooting\x20the\x20moon\x22),\x20",
      RulesDetail8:
        "\x20\x20\x20that\x20player\x20scores\x200\x20points\x20and\x20other\x20players\x20each\x20get\x2026\x20points.",
    },
    Results: { Title: "High\x20score" },
  },
  _SETTINGS = {
    API: {
      Enabled: !0x0,
      Log: {
        Events: {
          InitializeGame: !0x0,
          EndGame: !0x0,
          Level: { Begin: !0x0, End: !0x0, Win: !0x0, Lose: !0x0, Draw: !0x0 },
        },
      },
    },
    Ad: {
      Mobile: {
        Preroll: {
          Enabled: !0x1,
          Duration: 0x5,
          Width: 0x12c,
          Height: 0xfa,
          Rotation: {
            Enabled: !0x1,
            Weight: {
              MobileAdInGamePreroll: 0x28,
              MobileAdInGamePreroll2: 0x28,
              MobileAdInGamePreroll3: 0x14,
            },
          },
        },
        Header: {
          Enabled: !0x1,
          Duration: 0x5,
          Width: 0x140,
          Height: 0x32,
          Rotation: {
            Enabled: !0x1,
            Weight: {
              MobileAdInGameHeader: 0x28,
              MobileAdInGameHeader2: 0x28,
              MobileAdInGameHeader3: 0x14,
            },
          },
        },
        Footer: {
          Enabled: !0x1,
          Duration: 0x5,
          Width: 0x140,
          Height: 0x32,
          Rotation: {
            Enabled: !0x1,
            Weight: {
              MobileAdInGameFooter: 0x28,
              MobileAdInGameFooter2: 0x28,
              MobileAdInGameFooter3: 0x14,
            },
          },
        },
        End: {
          Enabled: !0x1,
          Duration: 0x1,
          Width: 0x12c,
          Height: 0xfa,
          Rotation: {
            Enabled: !0x1,
            Weight: {
              MobileAdInGameEnd: 0x28,
              MobileAdInGameEnd2: 0x28,
              MobileAdInGameEnd3: 0x14,
            },
          },
        },
      },
    },
    Language: { Default: "en" },
    DeveloperBranding: {
      Splash: { Enabled: !0x0 },
      Logo: {
        Enabled: !0x1,
        Link: "http://google.com",
        LinkEnabled: !0x1,
        NewWindow: !0x0,
        Width: 0xa6,
        Height: 0x3d,
      },
    },
    Branding: {
      Splash: { Enabled: !0x1 },
      Logo: {
        Enabled: !0x0,
        Link: "http://google.com",
        LinkEnabled: !0x1,
        NewWindow: !0x0,
        Width: 0xa6,
        Height: 0x3d,
      },
    },
    MoreGames: {
      Enabled: !0x0,
      Link: "http://www.marketjs.com/game/links/mobile",
      NewWindow: !0x0,
    },
    Gamecenter: { Enabled: !0x0 },
    TapToStartAudioUnlock: { Enabled: !0x1 },
  },
  MobileAdInGamePreroll = {
    ad_duration: _SETTINGS["Ad"]["Mobile"]["Preroll"]["Duration"],
    ad_width: _SETTINGS["Ad"]["Mobile"]["Preroll"]["Width"],
    ad_height: _SETTINGS["Ad"]["Mobile"]["Preroll"]["Height"],
    ready_in: _STRINGS["Ad"]["Mobile"]["Preroll"]["ReadyIn"],
    loading: _STRINGS["Ad"]["Mobile"]["Preroll"]["Loading"],
    close:
      _STRINGS["Ad"]["Mobile"]["Preroll"]["Close"] +
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    Initialize: function () {
      if (_SETTINGS["Ad"]["Mobile"]["Preroll"]["Rotation"]["Enabled"]) {
        var _0x21d116 =
            _SETTINGS["Ad"]["Mobile"]["Preroll"]["Rotation"]["Weight"],
          _0x4f7164 = _0x21d116["MobileAdInGamePreroll"],
          _0xecf1dc = _0x4f7164 + _0x21d116["MobileAdInGamePreroll2"],
          _0x21d116 = _0xecf1dc + _0x21d116["MobileAdInGamePreroll3"],
          _0x2d88d3 = Math["floor"](0x64 * Math["random"]());
        console["log"]("seed:\x20", _0x2d88d3),
          _0x2d88d3 <= _0x4f7164
            ? (this["selectedOverlayName"] = "MobileAdInGamePreroll")
            : _0x2d88d3 <= _0xecf1dc
            ? (this["selectedOverlayName"] = "MobileAdInGamePreroll2")
            : _0x2d88d3 <= _0x21d116 &&
              (this["selectedOverlayName"] = "MobileAdInGamePreroll3"),
          console["log"]("Ad\x20rotating\x20preroll\x20enabled");
      } else
        (this["selectedOverlayName"] = "MobileAdInGamePreroll"),
          console["log"]("Ad\x20rotating\x20preroll\x20disabled");
      console["log"]("selected:", this["selectedOverlayName"]),
        (this["overlay"] = $("#" + this["selectedOverlayName"])),
        (this["box"] = $("#" + this["selectedOverlayName"] + "-Box")),
        (this["game"] = $("#game")),
        (this["boxContents"] = {
          footer: $("#" + this["selectedOverlayName"] + "-Box-Footer"),
          header: $("#" + this["selectedOverlayName"] + "-Box-Header"),
          close: $("#" + this["selectedOverlayName"] + "-Box-Close"),
          body: $("#" + this["selectedOverlayName"] + "-Box-Body"),
        }),
        this["box"]["width"](this["ad_width"]),
        this["box"]["height"](this["ad_height"]),
        this["box"]["css"](
          "left",
          (this["overlay"]["width"]() - this["box"]["width"]()) / 0x2
        ),
        this["box"]["css"](
          "top",
          (this["overlay"]["height"]() -
            this["box"]["height"]() -
            this["boxContents"]["header"]["height"]() -
            this["boxContents"]["footer"]["height"]()) /
            0x2
        ),
        this["overlay"]["show"](this["Timer"](this["ad_duration"]));
    },
    Timer: function (_0x5a0327) {
      var _0x4612d6 = _0x5a0327,
        _0x4a7c61 = setInterval(function () {
          MobileAdInGamePreroll["boxContents"]["header"]["text"](
            MobileAdInGamePreroll["ready_in"] + _0x4612d6 + "..."
          ),
            MobileAdInGamePreroll["boxContents"]["footer"]["text"](
              MobileAdInGamePreroll["loading"]
            ),
            _0x4612d6--,
            0x0 > _0x4612d6 &&
              (clearInterval(_0x4a7c61),
              MobileAdInGamePreroll["boxContents"]["close"]["css"](
                "left",
                MobileAdInGamePreroll["boxContents"]["body"]["width"]() - 0x17
              ),
              MobileAdInGamePreroll["boxContents"]["close"]["show"](),
              MobileAdInGamePreroll["boxContents"]["header"]["html"](
                MobileAdInGamePreroll["close"]
              ),
              MobileAdInGamePreroll["boxContents"]["footer"]["text"](""));
        }, 0x3e8);
    },
    Close: function () {
      this["boxContents"]["close"]["hide"](), this["overlay"]["hide"]();
    },
  },
  MobileAdInGameHeader = {
    ad_duration: _SETTINGS["Ad"]["Mobile"]["Header"]["Duration"],
    ad_width: _SETTINGS["Ad"]["Mobile"]["Header"]["Width"],
    ad_height: _SETTINGS["Ad"]["Mobile"]["Header"]["Height"],
    Initialize: function () {
      if (_SETTINGS["Ad"]["Mobile"]["Header"]["Rotation"]["Enabled"]) {
        var _0x5b4291 =
            _SETTINGS["Ad"]["Mobile"]["Header"]["Rotation"]["Weight"],
          _0x3d3c82 = _0x5b4291["MobileAdInGameHeader"],
          _0x59da5a = _0x3d3c82 + _0x5b4291["MobileAdInGameHeader2"],
          _0x5b4291 = _0x59da5a + _0x5b4291["MobileAdInGameHeader3"],
          _0x55d9eb = Math["floor"](0x64 * Math["random"]());
        console["log"]("seed:\x20", _0x55d9eb),
          _0x55d9eb <= _0x3d3c82
            ? (this["selectedOverlayName"] = "MobileAdInGameHeader")
            : _0x55d9eb <= _0x59da5a
            ? (this["selectedOverlayName"] = "MobileAdInGameHeader2")
            : _0x55d9eb <= _0x5b4291 &&
              (this["selectedOverlayName"] = "MobileAdInGameHeader3"),
          console["log"]("Ad\x20rotating\x20header\x20enabled");
      } else
        (this["selectedOverlayName"] = "MobileAdInGameHeader"),
          console["log"]("Ad\x20rotating\x20header\x20disabled");
      (this["div"] = $("#" + this["selectedOverlayName"])),
        (this["game"] = $("#game")),
        this["div"]["width"](this["ad_width"]),
        this["div"]["height"](this["ad_height"]),
        this["div"]["css"](
          "left",
          this["game"]["position"]()["left"] +
            (this["game"]["width"]() - this["div"]["width"]()) / 0x2
        ),
        this["div"]["css"]("top", 0x0),
        this["div"]["show"](this["Timer"](this["ad_duration"]));
    },
    Timer: function (_0x47975e) {
      var _0x1a4da4 = setInterval(function () {
        _0x47975e--,
          0x0 > _0x47975e &&
            (MobileAdInGameHeader["div"]["hide"](), clearInterval(_0x1a4da4));
      }, 0x3e8);
    },
  },
  MobileAdInGameFooter = {
    ad_duration: _SETTINGS["Ad"]["Mobile"]["Footer"]["Duration"],
    ad_width: _SETTINGS["Ad"]["Mobile"]["Footer"]["Width"],
    ad_height: _SETTINGS["Ad"]["Mobile"]["Footer"]["Height"],
    Initialize: function () {
      if (_SETTINGS["Ad"]["Mobile"]["Footer"]["Rotation"]["Enabled"]) {
        var _0x545249 =
            _SETTINGS["Ad"]["Mobile"]["Footer"]["Rotation"]["Weight"],
          _0x415cc6 = _0x545249["MobileAdInGameFooter"],
          _0x3801cd = _0x415cc6 + _0x545249["MobileAdInGameFooter2"],
          _0x545249 = _0x3801cd + _0x545249["MobileAdInGameFooter3"],
          _0xab9f31 = Math["floor"](0x64 * Math["random"]());
        console["log"]("seed:\x20", _0xab9f31),
          _0xab9f31 <= _0x415cc6
            ? (this["selectedOverlayName"] = "MobileAdInGameFooter")
            : _0xab9f31 <= _0x3801cd
            ? (this["selectedOverlayName"] = "MobileAdInGameFooter2")
            : _0xab9f31 <= _0x545249 &&
              (this["selectedOverlayName"] = "MobileAdInGameFooter3"),
          console["log"]("Ad\x20rotating\x20footer\x20enabled");
      } else
        (this["selectedOverlayName"] = "MobileAdInGameFooter"),
          console["log"]("Ad\x20rotating\x20footer\x20disabled");
      (this["div"] = $("#" + this["selectedOverlayName"])),
        (this["game"] = $("#game")),
        this["div"]["width"](this["ad_width"]),
        this["div"]["height"](this["ad_height"]),
        this["div"]["css"](
          "left",
          this["game"]["position"]()["left"] +
            (this["game"]["width"]() - this["div"]["width"]()) / 0x2
        ),
        this["div"]["css"](
          "top",
          this["game"]["height"]() - this["div"]["height"]() - 0x5
        ),
        this["div"]["show"](this["Timer"](this["ad_duration"]));
    },
    Timer: function (_0x31be48) {
      var _0x11cf8f = setInterval(function () {
        _0x31be48--,
          0x0 > _0x31be48 &&
            (MobileAdInGameFooter["div"]["hide"](), clearInterval(_0x11cf8f));
      }, 0x3e8);
    },
  },
  MobileAdInGameEnd = {
    ad_duration: _SETTINGS["Ad"]["Mobile"]["End"]["Duration"],
    ad_width: _SETTINGS["Ad"]["Mobile"]["End"]["Width"],
    ad_height: _SETTINGS["Ad"]["Mobile"]["End"]["Height"],
    ready_in: _STRINGS["Ad"]["Mobile"]["End"]["ReadyIn"],
    loading: _STRINGS["Ad"]["Mobile"]["End"]["Loading"],
    close:
      _STRINGS["Ad"]["Mobile"]["End"]["Close"] +
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    Initialize: function () {
      if (_SETTINGS["Ad"]["Mobile"]["End"]["Rotation"]["Enabled"]) {
        var _0x1c224c = _SETTINGS["Ad"]["Mobile"]["End"]["Rotation"]["Weight"],
          _0x233a9e = _0x1c224c["MobileAdInGameEnd"],
          _0xbda65 = _0x233a9e + _0x1c224c["MobileAdInGameEnd2"],
          _0x1c224c = _0xbda65 + _0x1c224c["MobileAdInGameEnd3"],
          _0x139f38 = Math["floor"](0x64 * Math["random"]());
        console["log"]("seed:\x20", _0x139f38),
          _0x139f38 <= _0x233a9e
            ? (this["selectedOverlayName"] = "MobileAdInGameEnd")
            : _0x139f38 <= _0xbda65
            ? (this["selectedOverlayName"] = "MobileAdInGameEnd2")
            : _0x139f38 <= _0x1c224c &&
              (this["selectedOverlayName"] = "MobileAdInGameEnd3"),
          console["log"]("Ad\x20rotating\x20end\x20enabled");
      } else
        (this["selectedOverlayName"] = "MobileAdInGameEnd"),
          console["log"]("Ad\x20rotating\x20end\x20disabled");
      console["log"]("selected:", this["selectedOverlayName"]),
        (this["overlay"] = $("#" + this["selectedOverlayName"])),
        (this["box"] = $("#" + this["selectedOverlayName"] + "-Box")),
        (this["game"] = $("#game")),
        (this["boxContents"] = {
          footer: $("#" + this["selectedOverlayName"] + "-Box-Footer"),
          header: $("#" + this["selectedOverlayName"] + "-Box-Header"),
          close: $("#" + this["selectedOverlayName"] + "-Box-Close"),
          body: $("#" + this["selectedOverlayName"] + "-Box-Body"),
        }),
        this["box"]["width"](this["ad_width"]),
        this["box"]["height"](this["ad_height"]),
        this["box"]["css"](
          "left",
          (this["overlay"]["width"]() - this["box"]["width"]()) / 0x2
        ),
        this["box"]["css"](
          "top",
          (this["overlay"]["height"]() -
            this["box"]["height"]() -
            this["boxContents"]["header"]["height"]() -
            this["boxContents"]["footer"]["height"]()) /
            0x2
        ),
        this["overlay"]["show"](this["Timer"](this["ad_duration"]));
    },
    Timer: function (_0x20f396) {
      var _0x162a94 = _0x20f396,
        _0x32ae1b = setInterval(function () {
          MobileAdInGameEnd["boxContents"]["header"]["text"](
            MobileAdInGameEnd["ready_in"] + _0x162a94 + "..."
          ),
            MobileAdInGameEnd["boxContents"]["footer"]["text"](
              MobileAdInGameEnd["loading"]
            ),
            _0x162a94--,
            0x0 > _0x162a94 &&
              (clearInterval(_0x32ae1b),
              MobileAdInGameEnd["boxContents"]["close"]["css"](
                "left",
                MobileAdInGameEnd["boxContents"]["body"]["width"]() - 0x17
              ),
              MobileAdInGameEnd["boxContents"]["close"]["show"](),
              MobileAdInGameEnd["boxContents"]["header"]["html"](
                MobileAdInGameEnd["close"]
              ),
              MobileAdInGameEnd["boxContents"]["footer"]["text"](""));
        }, 0x3e8);
    },
    Close: function () {
      this["boxContents"]["close"]["hide"](), this["overlay"]["hide"]();
    },
  };
(function (_0x42e8aa, _0x549388) {
  function _0x4e0979(_0x577d0f, _0x1f7edb, _0x4dbd5a) {
    if (_0x4dbd5a === _0x549388 && 0x1 === _0x577d0f["nodeType"]) {
      if (
        ((_0x4dbd5a =
          "data-" + _0x1f7edb["replace"](_0x185587, "-$1")["toLowerCase"]()),
        (_0x4dbd5a = _0x577d0f["getAttribute"](_0x4dbd5a)),
        "string" == typeof _0x4dbd5a)
      ) {
        try {
          _0x4dbd5a =
            "true" === _0x4dbd5a
              ? !0x0
              : "false" === _0x4dbd5a
              ? !0x1
              : "null" === _0x4dbd5a
              ? null
              : +_0x4dbd5a + "" === _0x4dbd5a
              ? +_0x4dbd5a
              : _0x591f06["test"](_0x4dbd5a)
              ? _0x117884["parseJSON"](_0x4dbd5a)
              : _0x4dbd5a;
        } catch (_0x51a5f9) {}
        _0x117884["data"](_0x577d0f, _0x1f7edb, _0x4dbd5a);
      } else _0x4dbd5a = _0x549388;
    }
    return _0x4dbd5a;
  }
  function _0x4677f4(_0xef0c89) {
    for (var _0x5482a2 in _0xef0c89)
      if (
        !(
          "data" === _0x5482a2 &&
          _0x117884["isEmptyObject"](_0xef0c89[_0x5482a2])
        ) &&
        "toJSON" !== _0x5482a2
      )
        return !0x1;
    return !0x0;
  }
  function _0x3521c2() {
    return !0x1;
  }
  function _0xc1a5fe() {
    return !0x0;
  }
  function _0x170581(_0x4faaa9) {
    return (
      !_0x4faaa9 ||
      !_0x4faaa9["parentNode"] ||
      0xb === _0x4faaa9["parentNode"]["nodeType"]
    );
  }
  function _0x58b656(_0x50c86b, _0x55a756) {
    do _0x50c86b = _0x50c86b[_0x55a756];
    while (_0x50c86b && 0x1 !== _0x50c86b["nodeType"]);
    return _0x50c86b;
  }
  function _0x49d5b4(_0x37f718, _0x17af67, _0x5530bb) {
    _0x17af67 = _0x17af67 || 0x0;
    if (_0x117884["isFunction"](_0x17af67))
      return _0x117884["grep"](_0x37f718, function (_0x43661a, _0x4f5bf4) {
        return (
          !!_0x17af67["call"](_0x43661a, _0x4f5bf4, _0x43661a) === _0x5530bb
        );
      });
    if (_0x17af67["nodeType"])
      return _0x117884["grep"](_0x37f718, function (_0x1b61fc) {
        return (_0x1b61fc === _0x17af67) === _0x5530bb;
      });
    if ("string" == typeof _0x17af67) {
      var _0x2cc77c = _0x117884["grep"](_0x37f718, function (_0x423fca) {
        return 0x1 === _0x423fca["nodeType"];
      });
      if (_0x2ae1d4["test"](_0x17af67))
        return _0x117884["filter"](_0x17af67, _0x2cc77c, !_0x5530bb);
      _0x17af67 = _0x117884["filter"](_0x17af67, _0x2cc77c);
    }
    return _0x117884["grep"](_0x37f718, function (_0x39f690) {
      return 0x0 <= _0x117884["inArray"](_0x39f690, _0x17af67) === _0x5530bb;
    });
  }
  function _0x54427c(_0x1a1421) {
    var _0x5d0a23 = _0x453c9e["split"]("|");
    _0x1a1421 = _0x1a1421["createDocumentFragment"]();
    if (_0x1a1421["createElement"]) {
      for (; _0x5d0a23["length"]; )
        _0x1a1421["createElement"](_0x5d0a23["pop"]());
    }
    return _0x1a1421;
  }
  function _0x46964d(_0x2e01cb, _0x5d6601) {
    if (0x1 === _0x5d6601["nodeType"] && _0x117884["hasData"](_0x2e01cb)) {
      var _0x2ca7d5, _0x179e16, _0x3642ba;
      _0x179e16 = _0x117884["_data"](_0x2e01cb);
      var _0x5c96e2 = _0x117884["_data"](_0x5d6601, _0x179e16),
        _0x471d6b = _0x179e16["events"];
      if (_0x471d6b)
        for (_0x2ca7d5 in (delete _0x5c96e2["handle"],
        (_0x5c96e2["events"] = {}),
        _0x471d6b)) {
          _0x179e16 = 0x0;
          for (
            _0x3642ba = _0x471d6b[_0x2ca7d5]["length"];
            _0x179e16 < _0x3642ba;
            _0x179e16++
          )
            _0x117884["event"]["add"](
              _0x5d6601,
              _0x2ca7d5,
              _0x471d6b[_0x2ca7d5][_0x179e16]
            );
        }
      _0x5c96e2["data"] &&
        (_0x5c96e2["data"] = _0x117884["extend"]({}, _0x5c96e2["data"]));
    }
  }
  function _0x46f151(_0x3f091f, _0x461b45) {
    var _0x5093be;
    0x1 === _0x461b45["nodeType"] &&
      (_0x461b45["clearAttributes"] && _0x461b45["clearAttributes"](),
      _0x461b45["mergeAttributes"] && _0x461b45["mergeAttributes"](_0x3f091f),
      (_0x5093be = _0x461b45["nodeName"]["toLowerCase"]()),
      "object" === _0x5093be
        ? (_0x461b45["parentNode"] &&
            (_0x461b45["outerHTML"] = _0x3f091f["outerHTML"]),
          _0x117884["support"]["html5Clone"] &&
            _0x3f091f["innerHTML"] &&
            !_0x117884["trim"](_0x461b45["innerHTML"]) &&
            (_0x461b45["innerHTML"] = _0x3f091f["innerHTML"]))
        : "input" === _0x5093be && _0x225f51["test"](_0x3f091f["type"])
        ? ((_0x461b45["defaultChecked"] = _0x461b45["checked"] =
            _0x3f091f["checked"]),
          _0x461b45["value"] !== _0x3f091f["value"] &&
            (_0x461b45["value"] = _0x3f091f["value"]))
        : "option" === _0x5093be
        ? (_0x461b45["selected"] = _0x3f091f["defaultSelected"])
        : "input" === _0x5093be || "textarea" === _0x5093be
        ? (_0x461b45["defaultValue"] = _0x3f091f["defaultValue"])
        : "script" === _0x5093be &&
          _0x461b45["text"] !== _0x3f091f["text"] &&
          (_0x461b45["text"] = _0x3f091f["text"]),
      _0x461b45["removeAttribute"](_0x117884["expando"]));
  }
  function _0x4b31a4(_0x18bb07) {
    return "undefined" != typeof _0x18bb07["getElementsByTagName"]
      ? _0x18bb07["getElementsByTagName"]("*")
      : "undefined" != typeof _0x18bb07["querySelectorAll"]
      ? _0x18bb07["querySelectorAll"]("*")
      : [];
  }
  function _0x249434(_0x26009c) {
    _0x225f51["test"](_0x26009c["type"]) &&
      (_0x26009c["defaultChecked"] = _0x26009c["checked"]);
  }
  function _0x775991(_0x1eed95, _0x254b85) {
    if (_0x254b85 in _0x1eed95) return _0x254b85;
    for (
      var _0x5ca61a =
          _0x254b85["charAt"](0x0)["toUpperCase"]() + _0x254b85["slice"](0x1),
        _0xc313f3 = _0x254b85,
        _0x26fbaa = _0x57c5e5["length"];
      _0x26fbaa--;

    )
      if (
        ((_0x254b85 = _0x57c5e5[_0x26fbaa] + _0x5ca61a), _0x254b85 in _0x1eed95)
      )
        return _0x254b85;
    return _0xc313f3;
  }
  function _0xb9663e(_0x141953, _0x1436a8) {
    return (
      (_0x141953 = _0x1436a8 || _0x141953),
      "none" === _0x117884["css"](_0x141953, "display") ||
        !_0x117884["contains"](_0x141953["ownerDocument"], _0x141953)
    );
  }
  function _0x5bb9b2(_0x15e3aa, _0x123180) {
    for (
      var _0x151ae1,
        _0x4f3ca0,
        _0x2eacbd = [],
        _0x43c294 = 0x0,
        _0x4e36fe = _0x15e3aa["length"];
      _0x43c294 < _0x4e36fe;
      _0x43c294++
    )
      (_0x151ae1 = _0x15e3aa[_0x43c294]),
        _0x151ae1["style"] &&
          ((_0x2eacbd[_0x43c294] = _0x117884["_data"](_0x151ae1, "olddisplay")),
          _0x123180
            ? (!_0x2eacbd[_0x43c294] &&
                "none" === _0x151ae1["style"]["display"] &&
                (_0x151ae1["style"]["display"] = ""),
              "" === _0x151ae1["style"]["display"] &&
                _0xb9663e(_0x151ae1) &&
                (_0x2eacbd[_0x43c294] = _0x117884["_data"](
                  _0x151ae1,
                  "olddisplay",
                  _0x133b83(_0x151ae1["nodeName"])
                )))
            : ((_0x4f3ca0 = _0x3402d5(_0x151ae1, "display")),
              !_0x2eacbd[_0x43c294] &&
                "none" !== _0x4f3ca0 &&
                _0x117884["_data"](_0x151ae1, "olddisplay", _0x4f3ca0)));
    for (_0x43c294 = 0x0; _0x43c294 < _0x4e36fe; _0x43c294++)
      if (
        ((_0x151ae1 = _0x15e3aa[_0x43c294]),
        _0x151ae1["style"] &&
          (!_0x123180 ||
            "none" === _0x151ae1["style"]["display"] ||
            "" === _0x151ae1["style"]["display"]))
      )
        _0x151ae1["style"]["display"] = _0x123180
          ? _0x2eacbd[_0x43c294] || ""
          : "none";
    return _0x15e3aa;
  }
  function _0x33571a(_0x55d5c7, _0x467618, _0x4a088d) {
    return (_0x55d5c7 = _0x128d9c["exec"](_0x467618))
      ? Math["max"](0x0, _0x55d5c7[0x1] - (_0x4a088d || 0x0)) +
          (_0x55d5c7[0x2] || "px")
      : _0x467618;
  }
  function _0x3ea946(_0xd46787, _0x5c9c4c, _0x3797ea, _0x2f79eb) {
    _0x5c9c4c =
      _0x3797ea === (_0x2f79eb ? "border" : "content")
        ? 0x4
        : "width" === _0x5c9c4c
        ? 0x1
        : 0x0;
    for (var _0x1060dc = 0x0; 0x4 > _0x5c9c4c; _0x5c9c4c += 0x2)
      "margin" === _0x3797ea &&
        (_0x1060dc += _0x117884["css"](
          _0xd46787,
          _0x3797ea + _0x36e152[_0x5c9c4c],
          !0x0
        )),
        _0x2f79eb
          ? ("content" === _0x3797ea &&
              (_0x1060dc -=
                parseFloat(
                  _0x3402d5(_0xd46787, "padding" + _0x36e152[_0x5c9c4c])
                ) || 0x0),
            "margin" !== _0x3797ea &&
              (_0x1060dc -=
                parseFloat(
                  _0x3402d5(
                    _0xd46787,
                    "border" + _0x36e152[_0x5c9c4c] + "Width"
                  )
                ) || 0x0))
          : ((_0x1060dc +=
              parseFloat(
                _0x3402d5(_0xd46787, "padding" + _0x36e152[_0x5c9c4c])
              ) || 0x0),
            "padding" !== _0x3797ea &&
              (_0x1060dc +=
                parseFloat(
                  _0x3402d5(
                    _0xd46787,
                    "border" + _0x36e152[_0x5c9c4c] + "Width"
                  )
                ) || 0x0));
    return _0x1060dc;
  }
  function _0x2fd8ea(_0x102139, _0x46176d, _0x14e34c) {
    var _0xc33a27 =
        "width" === _0x46176d
          ? _0x102139["offsetWidth"]
          : _0x102139["offsetHeight"],
      _0x305ec1 = !0x0,
      _0x24769b =
        _0x117884["support"]["boxSizing"] &&
        "border-box" === _0x117884["css"](_0x102139, "boxSizing");
    if (0x0 >= _0xc33a27 || null == _0xc33a27) {
      _0xc33a27 = _0x3402d5(_0x102139, _0x46176d);
      if (0x0 > _0xc33a27 || null == _0xc33a27)
        _0xc33a27 = _0x102139["style"][_0x46176d];
      if (_0x3ba40b["test"](_0xc33a27)) return _0xc33a27;
      (_0x305ec1 =
        _0x24769b &&
        (_0x117884["support"]["boxSizingReliable"] ||
          _0xc33a27 === _0x102139["style"][_0x46176d])),
        (_0xc33a27 = parseFloat(_0xc33a27) || 0x0);
    }
    return (
      _0xc33a27 +
      _0x3ea946(
        _0x102139,
        _0x46176d,
        _0x14e34c || (_0x24769b ? "border" : "content"),
        _0x305ec1
      ) +
      "px"
    );
  }
  function _0x133b83(_0x547d47) {
    if (_0x56e8c1[_0x547d47]) return _0x56e8c1[_0x547d47];
    var _0x187b57 = _0x117884("<" + _0x547d47 + ">")["appendTo"](
        _0x190c5d["body"]
      ),
      _0x380a73 = _0x187b57["css"]("display");
    _0x187b57["remove"]();
    if ("none" === _0x380a73 || "" === _0x380a73) {
      _0x31691d = _0x190c5d["body"]["appendChild"](
        _0x31691d ||
          _0x117884["extend"](_0x190c5d["createElement"]("iframe"), {
            frameBorder: 0x0,
            width: 0x0,
            height: 0x0,
          })
      );
      if (!_0x16a48f || !_0x31691d["createElement"])
        (_0x16a48f = (_0x31691d["contentWindow"] ||
          _0x31691d["contentDocument"])["document"]),
          _0x16a48f["write"]("<!doctype\x20html><html><body>"),
          _0x16a48f["close"]();
      (_0x187b57 = _0x16a48f["body"]["appendChild"](
        _0x16a48f["createElement"](_0x547d47)
      )),
        (_0x380a73 = _0x3402d5(_0x187b57, "display")),
        _0x190c5d["body"]["removeChild"](_0x31691d);
    }
    return (_0x56e8c1[_0x547d47] = _0x380a73), _0x380a73;
  }
  function _0x5b80b2(_0x5391a2, _0x514646, _0x4d7d29, _0x2445f1) {
    var _0x3c96e4;
    if (_0x117884["isArray"](_0x514646))
      _0x117884["each"](_0x514646, function (_0x39e61f, _0x1099f2) {
        _0x4d7d29 || _0x1607d["test"](_0x5391a2)
          ? _0x2445f1(_0x5391a2, _0x1099f2)
          : _0x5b80b2(
              _0x5391a2 +
                "[" +
                ("object" == typeof _0x1099f2 ? _0x39e61f : "") +
                "]",
              _0x1099f2,
              _0x4d7d29,
              _0x2445f1
            );
      });
    else {
      if (!_0x4d7d29 && "object" === _0x117884["type"](_0x514646)) {
        for (_0x3c96e4 in _0x514646)
          _0x5b80b2(
            _0x5391a2 + "[" + _0x3c96e4 + "]",
            _0x514646[_0x3c96e4],
            _0x4d7d29,
            _0x2445f1
          );
      } else _0x2445f1(_0x5391a2, _0x514646);
    }
  }
  function _0x31c3d0(_0xe24f5d) {
    return function (_0x17d1a0, _0x4bcc21) {
      "string" != typeof _0x17d1a0 &&
        ((_0x4bcc21 = _0x17d1a0), (_0x17d1a0 = "*"));
      var _0x506628,
        _0x5375c1,
        _0x1c7711 = _0x17d1a0["toLowerCase"]()["split"](_0x142aaf),
        _0x4ba955 = 0x0,
        _0x1365e2 = _0x1c7711["length"];
      if (_0x117884["isFunction"](_0x4bcc21)) {
        for (; _0x4ba955 < _0x1365e2; _0x4ba955++)
          (_0x506628 = _0x1c7711[_0x4ba955]),
            (_0x5375c1 = /^\+/["test"](_0x506628)) &&
              (_0x506628 = _0x506628["substr"](0x1) || "*"),
            (_0x506628 = _0xe24f5d[_0x506628] = _0xe24f5d[_0x506628] || []),
            _0x506628[_0x5375c1 ? "unshift" : "push"](_0x4bcc21);
      }
    };
  }
  function _0x2171c8(
    _0x5315dc,
    _0x2e0198,
    _0x2897b1,
    _0x4107f4,
    _0x67f891,
    _0x71ca05
  ) {
    (_0x67f891 = _0x67f891 || _0x2e0198["dataTypes"][0x0]),
      (_0x71ca05 = _0x71ca05 || {}),
      (_0x71ca05[_0x67f891] = !0x0);
    var _0x4ad6f4;
    _0x67f891 = _0x5315dc[_0x67f891];
    for (
      var _0x3e7584 = 0x0,
        _0x38bcff = _0x67f891 ? _0x67f891["length"] : 0x0,
        _0x56a212 = _0x5315dc === _0x206b41;
      _0x3e7584 < _0x38bcff && (_0x56a212 || !_0x4ad6f4);
      _0x3e7584++
    )
      (_0x4ad6f4 = _0x67f891[_0x3e7584](_0x2e0198, _0x2897b1, _0x4107f4)),
        "string" == typeof _0x4ad6f4 &&
          (!_0x56a212 || _0x71ca05[_0x4ad6f4]
            ? (_0x4ad6f4 = _0x549388)
            : (_0x2e0198["dataTypes"]["unshift"](_0x4ad6f4),
              (_0x4ad6f4 = _0x2171c8(
                _0x5315dc,
                _0x2e0198,
                _0x2897b1,
                _0x4107f4,
                _0x4ad6f4,
                _0x71ca05
              ))));
    return (
      (_0x56a212 || !_0x4ad6f4) &&
        !_0x71ca05["*"] &&
        (_0x4ad6f4 = _0x2171c8(
          _0x5315dc,
          _0x2e0198,
          _0x2897b1,
          _0x4107f4,
          "*",
          _0x71ca05
        )),
      _0x4ad6f4
    );
  }
  function _0x4cfedb(_0x229e2e, _0x3eadad) {
    var _0x3e766e,
      _0x19510a,
      _0x5a2128 = _0x117884["ajaxSettings"]["flatOptions"] || {};
    for (_0x3e766e in _0x3eadad)
      _0x3eadad[_0x3e766e] !== _0x549388 &&
        ((_0x5a2128[_0x3e766e] ? _0x229e2e : _0x19510a || (_0x19510a = {}))[
          _0x3e766e
        ] = _0x3eadad[_0x3e766e]);
    _0x19510a && _0x117884["extend"](!0x0, _0x229e2e, _0x19510a);
  }
  function _0xd05a7e() {
    try {
      return new _0x42e8aa["XMLHttpRequest"]();
    } catch (_0x48fad4) {}
  }
  function _0x4cd510() {
    return (
      setTimeout(function () {
        _0x7b4cfe = _0x549388;
      }, 0x0),
      (_0x7b4cfe = _0x117884["now"]())
    );
  }
  function _0x327125(_0x4ab4a9, _0xe2d085, _0x3352df) {
    var _0x25e88e,
      _0x44fdcf = 0x0,
      _0x4e763b = _0x212d2c["length"],
      _0x464b6f = _0x117884["Deferred"]()["always"](function () {
        delete _0x339dd5["elem"];
      }),
      _0x339dd5 = function () {
        for (
          var _0xaa027 = _0x7b4cfe || _0x4cd510(),
            _0xaa027 = Math["max"](
              0x0,
              _0x3f05a9["startTime"] + _0x3f05a9["duration"] - _0xaa027
            ),
            _0x32f7d3 = 0x1 - (_0xaa027 / _0x3f05a9["duration"] || 0x0),
            _0x36b5b7 = 0x0,
            _0x40a24c = _0x3f05a9["tweens"]["length"];
          _0x36b5b7 < _0x40a24c;
          _0x36b5b7++
        )
          _0x3f05a9["tweens"][_0x36b5b7]["run"](_0x32f7d3);
        return (
          _0x464b6f["notifyWith"](_0x4ab4a9, [_0x3f05a9, _0x32f7d3, _0xaa027]),
          0x1 > _0x32f7d3 && _0x40a24c
            ? _0xaa027
            : (_0x464b6f["resolveWith"](_0x4ab4a9, [_0x3f05a9]), !0x1)
        );
      },
      _0x3f05a9 = _0x464b6f["promise"]({
        elem: _0x4ab4a9,
        props: _0x117884["extend"]({}, _0xe2d085),
        opts: _0x117884["extend"](!0x0, { specialEasing: {} }, _0x3352df),
        originalProperties: _0xe2d085,
        originalOptions: _0x3352df,
        startTime: _0x7b4cfe || _0x4cd510(),
        duration: _0x3352df["duration"],
        tweens: [],
        createTween: function (_0x274b3c, _0x414b52) {
          var _0x4e4058 = _0x117884["Tween"](
            _0x4ab4a9,
            _0x3f05a9["opts"],
            _0x274b3c,
            _0x414b52,
            _0x3f05a9["opts"]["specialEasing"][_0x274b3c] ||
              _0x3f05a9["opts"]["easing"]
          );
          return _0x3f05a9["tweens"]["push"](_0x4e4058), _0x4e4058;
        },
        stop: function (_0x55a7ed) {
          for (
            var _0x55c62c = 0x0,
              _0x365e0d = _0x55a7ed ? _0x3f05a9["tweens"]["length"] : 0x0;
            _0x55c62c < _0x365e0d;
            _0x55c62c++
          )
            _0x3f05a9["tweens"][_0x55c62c]["run"](0x1);
          return (
            _0x55a7ed
              ? _0x464b6f["resolveWith"](_0x4ab4a9, [_0x3f05a9, _0x55a7ed])
              : _0x464b6f["rejectWith"](_0x4ab4a9, [_0x3f05a9, _0x55a7ed]),
            this
          );
        },
      });
    (_0xe2d085 = _0x3f05a9["props"]),
      (_0x3352df = _0x3f05a9["opts"]["specialEasing"]);
    var _0x24111c, _0x113eda, _0x221ecb, _0x3fd885;
    for (_0x25e88e in _0xe2d085)
      if (
        ((_0x24111c = _0x117884["camelCase"](_0x25e88e)),
        (_0x113eda = _0x3352df[_0x24111c]),
        (_0x221ecb = _0xe2d085[_0x25e88e]),
        _0x117884["isArray"](_0x221ecb) &&
          ((_0x113eda = _0x221ecb[0x1]),
          (_0x221ecb = _0xe2d085[_0x25e88e] = _0x221ecb[0x0])),
        _0x25e88e !== _0x24111c &&
          ((_0xe2d085[_0x24111c] = _0x221ecb), delete _0xe2d085[_0x25e88e]),
        (_0x3fd885 = _0x117884["cssHooks"][_0x24111c]) && "expand" in _0x3fd885)
      ) {
        for (_0x25e88e in ((_0x221ecb = _0x3fd885["expand"](_0x221ecb)),
        delete _0xe2d085[_0x24111c],
        _0x221ecb))
          _0x25e88e in _0xe2d085 ||
            ((_0xe2d085[_0x25e88e] = _0x221ecb[_0x25e88e]),
            (_0x3352df[_0x25e88e] = _0x113eda));
      } else _0x3352df[_0x24111c] = _0x113eda;
    for (; _0x44fdcf < _0x4e763b; _0x44fdcf++)
      if (
        (_0x25e88e = _0x212d2c[_0x44fdcf]["call"](
          _0x3f05a9,
          _0x4ab4a9,
          _0xe2d085,
          _0x3f05a9["opts"]
        ))
      )
        return _0x25e88e;
    var _0x3dec1e = _0x3f05a9;
    return (
      _0x117884["each"](_0xe2d085, function (_0x2d858c, _0x37c2eb) {
        for (
          var _0x110ba5 = (_0x64ebd9[_0x2d858c] || [])["concat"](
              _0x64ebd9["*"]
            ),
            _0x227142 = 0x0,
            _0x9b7258 = _0x110ba5["length"];
          _0x227142 < _0x9b7258 &&
          !_0x110ba5[_0x227142]["call"](_0x3dec1e, _0x2d858c, _0x37c2eb);
          _0x227142++
        );
      }),
      (_0x117884["isFunction"](_0x3f05a9["opts"]["start"]) &&
        _0x3f05a9["opts"]["start"]["call"](_0x4ab4a9, _0x3f05a9),
      _0x117884["fx"]["timer"](
        _0x117884["extend"](_0x339dd5, {
          anim: _0x3f05a9,
          queue: _0x3f05a9["opts"]["queue"],
          elem: _0x4ab4a9,
        })
      ),
      _0x3f05a9["progress"](_0x3f05a9["opts"]["progress"])
        ["done"](_0x3f05a9["opts"]["done"], _0x3f05a9["opts"]["complete"])
        ["fail"](_0x3f05a9["opts"]["fail"])
        ["always"](_0x3f05a9["opts"]["always"]))
    );
  }
  function _0x5a0242(_0x32357f, _0x132bfa, _0x3bb003, _0x18cbf4, _0x608d16) {
    return new _0x5a0242["prototype"]["init"](
      _0x32357f,
      _0x132bfa,
      _0x3bb003,
      _0x18cbf4,
      _0x608d16
    );
  }
  function _0x368e76(_0xa690e, _0x347f97) {
    var _0x18f48a,
      _0xa79ccb = { height: _0xa690e },
      _0xe85153 = 0x0;
    for (
      _0x347f97 = _0x347f97 ? 0x1 : 0x0;
      0x4 > _0xe85153;
      _0xe85153 += 0x2 - _0x347f97
    )
      (_0x18f48a = _0x36e152[_0xe85153]),
        (_0xa79ccb["margin" + _0x18f48a] = _0xa79ccb["padding" + _0x18f48a] =
          _0xa690e);
    return (
      _0x347f97 && (_0xa79ccb["opacity"] = _0xa79ccb["width"] = _0xa690e),
      _0xa79ccb
    );
  }
  function _0x19a0bd(_0x4defb0) {
    return _0x117884["isWindow"](_0x4defb0)
      ? _0x4defb0
      : 0x9 === _0x4defb0["nodeType"]
      ? _0x4defb0["defaultView"] || _0x4defb0["parentWindow"]
      : !0x1;
  }
  var _0x264fdd,
    _0xcaf51b,
    _0x190c5d = _0x42e8aa["document"],
    _0x366c94 = _0x42e8aa["location"],
    _0x2b773d = _0x42e8aa["navigator"],
    _0x44b603 = _0x42e8aa["jQuery"],
    _0x234ced = _0x42e8aa["$"],
    _0x135cbd = Array["prototype"]["push"],
    _0x23c826 = Array["prototype"]["slice"],
    _0x5fd19a = Array["prototype"]["indexOf"],
    _0x1be930 = Object["prototype"]["toString"],
    _0x16194b = Object["prototype"]["hasOwnProperty"],
    _0x58ea90 = String["prototype"]["trim"],
    _0x117884 = function (_0x214ea8, _0x48be51) {
      return new _0x117884["fn"]["init"](_0x214ea8, _0x48be51, _0x264fdd);
    },
    _0x384d07 = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/["source"],
    _0x415838 = /\S/,
    _0x142aaf = /\s+/,
    _0x5f5da2 = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    _0x3e42f5 = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
    _0x37c6fe = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    _0x47a31b = /^[\],:{}\s]*$/,
    _0x5e6f80 = /(?:^|:|,)(?:\s*\[)+/g,
    _0x52ccde = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    _0x556352 =
      /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
    _0x538d60 = /^-ms-/,
    _0x142a4d = /-([\da-z])/gi,
    _0x4edfe4 = function (_0xa40223, _0x404db3) {
      return (_0x404db3 + "")["toUpperCase"]();
    },
    _0x33ff1c = function () {
      _0x190c5d["addEventListener"]
        ? (_0x190c5d["removeEventListener"](
            "DOMContentLoaded",
            _0x33ff1c,
            !0x1
          ),
          _0x117884["ready"]())
        : "complete" === _0x190c5d["readyState"] &&
          (_0x190c5d["detachEvent"]("onreadystatechange", _0x33ff1c),
          _0x117884["ready"]());
    },
    _0x2629c1 = {};
  (_0x117884["fn"] = _0x117884["prototype"] =
    {
      constructor: _0x117884,
      init: function (_0x5f16c2, _0x1b3c1c, _0x3ec3a8) {
        var _0x23ea8f, _0x408598;
        if (!_0x5f16c2) return this;
        if (_0x5f16c2["nodeType"])
          return (
            (this["context"] = this[0x0] = _0x5f16c2),
            (this["length"] = 0x1),
            this
          );
        if ("string" == typeof _0x5f16c2) {
          "<" === _0x5f16c2["charAt"](0x0) &&
          ">" === _0x5f16c2["charAt"](_0x5f16c2["length"] - 0x1) &&
          0x3 <= _0x5f16c2["length"]
            ? (_0x23ea8f = [null, _0x5f16c2, null])
            : (_0x23ea8f = _0x3e42f5["exec"](_0x5f16c2));
          if (_0x23ea8f && (_0x23ea8f[0x1] || !_0x1b3c1c)) {
            if (_0x23ea8f[0x1])
              return (
                (_0x1b3c1c =
                  _0x1b3c1c instanceof _0x117884 ? _0x1b3c1c[0x0] : _0x1b3c1c),
                (_0x408598 =
                  _0x1b3c1c && _0x1b3c1c["nodeType"]
                    ? _0x1b3c1c["ownerDocument"] || _0x1b3c1c
                    : _0x190c5d),
                (_0x5f16c2 = _0x117884["parseHTML"](
                  _0x23ea8f[0x1],
                  _0x408598,
                  !0x0
                )),
                _0x37c6fe["test"](_0x23ea8f[0x1]) &&
                  _0x117884["isPlainObject"](_0x1b3c1c) &&
                  this["attr"]["call"](_0x5f16c2, _0x1b3c1c, !0x0),
                _0x117884["merge"](this, _0x5f16c2)
              );
            if (
              (_0x1b3c1c = _0x190c5d["getElementById"](_0x23ea8f[0x2])) &&
              _0x1b3c1c["parentNode"]
            ) {
              if (_0x1b3c1c["id"] !== _0x23ea8f[0x2])
                return _0x3ec3a8["find"](_0x5f16c2);
              (this["length"] = 0x1), (this[0x0] = _0x1b3c1c);
            }
            return (
              (this["context"] = _0x190c5d),
              (this["selector"] = _0x5f16c2),
              this
            );
          }
          return !_0x1b3c1c || _0x1b3c1c["jquery"]
            ? (_0x1b3c1c || _0x3ec3a8)["find"](_0x5f16c2)
            : this["constructor"](_0x1b3c1c)["find"](_0x5f16c2);
        }
        return _0x117884["isFunction"](_0x5f16c2)
          ? _0x3ec3a8["ready"](_0x5f16c2)
          : (_0x5f16c2["selector"] !== _0x549388 &&
              ((this["selector"] = _0x5f16c2["selector"]),
              (this["context"] = _0x5f16c2["context"])),
            _0x117884["makeArray"](_0x5f16c2, this));
      },
      selector: "",
      jquery: "1.8.2",
      length: 0x0,
      size: function () {
        return this["length"];
      },
      toArray: function () {
        return _0x23c826["call"](this);
      },
      get: function (_0x1e5f72) {
        return null == _0x1e5f72
          ? this["toArray"]()
          : 0x0 > _0x1e5f72
          ? this[this["length"] + _0x1e5f72]
          : this[_0x1e5f72];
      },
      pushStack: function (_0x1ea913, _0x5295c0, _0x4fa458) {
        return (
          (_0x1ea913 = _0x117884["merge"](this["constructor"](), _0x1ea913)),
          ((_0x1ea913["prevObject"] = this),
          (_0x1ea913["context"] = this["context"]),
          "find" === _0x5295c0
            ? (_0x1ea913["selector"] =
                this["selector"] + (this["selector"] ? "\x20" : "") + _0x4fa458)
            : _0x5295c0 &&
              (_0x1ea913["selector"] =
                this["selector"] + "." + _0x5295c0 + "(" + _0x4fa458 + ")"),
          _0x1ea913)
        );
      },
      each: function (_0x2428dd, _0x5e5173) {
        return _0x117884["each"](this, _0x2428dd, _0x5e5173);
      },
      ready: function (_0x4768f7) {
        return _0x117884["ready"]["promise"]()["done"](_0x4768f7), this;
      },
      eq: function (_0x2fdcb9) {
        return (
          (_0x2fdcb9 = +_0x2fdcb9),
          -0x1 === _0x2fdcb9
            ? this["slice"](_0x2fdcb9)
            : this["slice"](_0x2fdcb9, _0x2fdcb9 + 0x1)
        );
      },
      first: function () {
        return this["eq"](0x0);
      },
      last: function () {
        return this["eq"](-0x1);
      },
      slice: function () {
        return this["pushStack"](
          _0x23c826["apply"](this, arguments),
          "slice",
          _0x23c826["call"](arguments)["join"](",")
        );
      },
      map: function (_0x1f1204) {
        return this["pushStack"](
          _0x117884["map"](this, function (_0x37dc84, _0xa9b0b5) {
            return _0x1f1204["call"](_0x37dc84, _0xa9b0b5, _0x37dc84);
          })
        );
      },
      end: function () {
        return this["prevObject"] || this["constructor"](null);
      },
      push: _0x135cbd,
      sort: []["sort"],
      splice: []["splice"],
    }),
    (_0x117884["fn"]["init"]["prototype"] = _0x117884["fn"]),
    (_0x117884["extend"] = _0x117884["fn"]["extend"] =
      function () {
        var _0x3183bd,
          _0x216ce2,
          _0x5e5c71,
          _0x4cb8f2,
          _0x2e0a8b,
          _0x51b03e,
          _0x2c273e = arguments[0x0] || {},
          _0x40f546 = 0x1,
          _0x40f56e = arguments["length"],
          _0x48d2d8 = !0x1;
        "boolean" == typeof _0x2c273e &&
          ((_0x48d2d8 = _0x2c273e),
          (_0x2c273e = arguments[0x1] || {}),
          (_0x40f546 = 0x2)),
          "object" != typeof _0x2c273e &&
            !_0x117884["isFunction"](_0x2c273e) &&
            (_0x2c273e = {});
        for (
          _0x40f56e === _0x40f546 && ((_0x2c273e = this), --_0x40f546);
          _0x40f546 < _0x40f56e;
          _0x40f546++
        )
          if (null != (_0x3183bd = arguments[_0x40f546])) {
            for (_0x216ce2 in _0x3183bd)
              (_0x5e5c71 = _0x2c273e[_0x216ce2]),
                (_0x4cb8f2 = _0x3183bd[_0x216ce2]),
                _0x2c273e !== _0x4cb8f2 &&
                  (_0x48d2d8 &&
                  _0x4cb8f2 &&
                  (_0x117884["isPlainObject"](_0x4cb8f2) ||
                    (_0x2e0a8b = _0x117884["isArray"](_0x4cb8f2)))
                    ? (_0x2e0a8b
                        ? ((_0x2e0a8b = !0x1),
                          (_0x51b03e =
                            _0x5e5c71 && _0x117884["isArray"](_0x5e5c71)
                              ? _0x5e5c71
                              : []))
                        : (_0x51b03e =
                            _0x5e5c71 && _0x117884["isPlainObject"](_0x5e5c71)
                              ? _0x5e5c71
                              : {}),
                      (_0x2c273e[_0x216ce2] = _0x117884["extend"](
                        _0x48d2d8,
                        _0x51b03e,
                        _0x4cb8f2
                      )))
                    : _0x4cb8f2 !== _0x549388 &&
                      (_0x2c273e[_0x216ce2] = _0x4cb8f2));
          }
        return _0x2c273e;
      }),
    _0x117884["extend"]({
      noConflict: function (_0x4d8a2d) {
        return (
          _0x42e8aa["$"] === _0x117884 && (_0x42e8aa["$"] = _0x234ced),
          _0x4d8a2d &&
            _0x42e8aa["jQuery"] === _0x117884 &&
            (_0x42e8aa["jQuery"] = _0x44b603),
          _0x117884
        );
      },
      isReady: !0x1,
      readyWait: 0x1,
      holdReady: function (_0x3a7537) {
        _0x3a7537 ? _0x117884["readyWait"]++ : _0x117884["ready"](!0x0);
      },
      ready: function (_0x2cf218) {
        if (
          !(!0x0 === _0x2cf218
            ? --_0x117884["readyWait"]
            : _0x117884["isReady"])
        ) {
          if (!_0x190c5d["body"]) return setTimeout(_0x117884["ready"], 0x1);
          (_0x117884["isReady"] = !0x0),
            (!0x0 !== _0x2cf218 && 0x0 < --_0x117884["readyWait"]) ||
              (_0xcaf51b["resolveWith"](_0x190c5d, [_0x117884]),
              _0x117884["fn"]["trigger"] &&
                _0x117884(_0x190c5d)["trigger"]("ready")["off"]("ready"));
        }
      },
      isFunction: function (_0xb5fe5c) {
        return "function" === _0x117884["type"](_0xb5fe5c);
      },
      isArray:
        Array["isArray"] ||
        function (_0x5bdd14) {
          return "array" === _0x117884["type"](_0x5bdd14);
        },
      isWindow: function (_0x4afde4) {
        return null != _0x4afde4 && _0x4afde4 == _0x4afde4["window"];
      },
      isNumeric: function (_0x4513fb) {
        return !isNaN(parseFloat(_0x4513fb)) && isFinite(_0x4513fb);
      },
      type: function (_0x2ab9d7) {
        return null == _0x2ab9d7
          ? String(_0x2ab9d7)
          : _0x2629c1[_0x1be930["call"](_0x2ab9d7)] || "object";
      },
      isPlainObject: function (_0x334a14) {
        if (
          !_0x334a14 ||
          "object" !== _0x117884["type"](_0x334a14) ||
          _0x334a14["nodeType"] ||
          _0x117884["isWindow"](_0x334a14)
        )
          return !0x1;
        try {
          if (
            _0x334a14["constructor"] &&
            !_0x16194b["call"](_0x334a14, "constructor") &&
            !_0x16194b["call"](
              _0x334a14["constructor"]["prototype"],
              "isPrototypeOf"
            )
          )
            return !0x1;
        } catch (_0x45a610) {
          return !0x1;
        }
        for (var _0x193fd6 in _0x334a14);
        return (
          _0x193fd6 === _0x549388 || _0x16194b["call"](_0x334a14, _0x193fd6)
        );
      },
      isEmptyObject: function (_0x43a26a) {
        for (var _0x3cd49d in _0x43a26a) return !0x1;
        return !0x0;
      },
      error: function (_0x5c2970) {
        throw Error(_0x5c2970);
      },
      parseHTML: function (_0x34714d, _0x346b93, _0x542696) {
        var _0x2958a8;
        return !_0x34714d || "string" != typeof _0x34714d
          ? null
          : ("boolean" == typeof _0x346b93 &&
              ((_0x542696 = _0x346b93), (_0x346b93 = 0x0)),
            (_0x346b93 = _0x346b93 || _0x190c5d),
            (_0x2958a8 = _0x37c6fe["exec"](_0x34714d))
              ? [_0x346b93["createElement"](_0x2958a8[0x1])]
              : ((_0x2958a8 = _0x117884["buildFragment"](
                  [_0x34714d],
                  _0x346b93,
                  _0x542696 ? null : []
                )),
                _0x117884["merge"](
                  [],
                  (_0x2958a8["cacheable"]
                    ? _0x117884["clone"](_0x2958a8["fragment"])
                    : _0x2958a8["fragment"])["childNodes"]
                )));
      },
      parseJSON: function (_0x368f11) {
        if (!_0x368f11 || "string" != typeof _0x368f11) return null;
        _0x368f11 = _0x117884["trim"](_0x368f11);
        if (_0x42e8aa["JSON"] && _0x42e8aa["JSON"]["parse"])
          return _0x42e8aa["JSON"]["parse"](_0x368f11);
        if (
          _0x47a31b["test"](
            _0x368f11["replace"](_0x52ccde, "@")
              ["replace"](_0x556352, "]")
              ["replace"](_0x5e6f80, "")
          )
        )
          return new Function("return\x20" + _0x368f11)();
        _0x117884["error"]("Invalid\x20JSON:\x20" + _0x368f11);
      },
      parseXML: function (_0x29fab3) {
        var _0xf81f46, _0x39aaf3;
        if (!_0x29fab3 || "string" != typeof _0x29fab3) return null;
        try {
          _0x42e8aa["DOMParser"]
            ? ((_0x39aaf3 = new DOMParser()),
              (_0xf81f46 = _0x39aaf3["parseFromString"](_0x29fab3, "text/xml")))
            : ((_0xf81f46 = new ActiveXObject("Microsoft.XMLDOM")),
              (_0xf81f46["async"] = "false"),
              _0xf81f46["loadXML"](_0x29fab3));
        } catch (_0x3fe4ba) {
          _0xf81f46 = _0x549388;
        }
        return (
          (!_0xf81f46 ||
            !_0xf81f46["documentElement"] ||
            _0xf81f46["getElementsByTagName"]("parsererror")["length"]) &&
            _0x117884["error"]("Invalid\x20XML:\x20" + _0x29fab3),
          _0xf81f46
        );
      },
      noop: function () {},
      globalEval: function (_0x14fde1) {
        _0x14fde1 &&
          _0x415838["test"](_0x14fde1) &&
          (
            _0x42e8aa["execScript"] ||
            function (_0x1b18a9) {
              _0x42e8aa["eval"]["call"](_0x42e8aa, _0x1b18a9);
            }
          )(_0x14fde1);
      },
      camelCase: function (_0x2e133e) {
        return _0x2e133e["replace"](_0x538d60, "ms-")["replace"](
          _0x142a4d,
          _0x4edfe4
        );
      },
      nodeName: function (_0x10de53, _0x4fd680) {
        return (
          _0x10de53["nodeName"] &&
          _0x10de53["nodeName"]["toLowerCase"]() === _0x4fd680["toLowerCase"]()
        );
      },
      each: function (_0x1c6aff, _0x52db29, _0x4c50e3) {
        var _0x264d0c,
          _0x27fa46 = 0x0,
          _0x335666 = _0x1c6aff["length"],
          _0x192454 =
            _0x335666 === _0x549388 || _0x117884["isFunction"](_0x1c6aff);
        if (_0x4c50e3) {
          if (_0x192454)
            for (_0x264d0c in _0x1c6aff) {
              if (!0x1 === _0x52db29["apply"](_0x1c6aff[_0x264d0c], _0x4c50e3))
                break;
            }
          else {
            for (
              ;
              _0x27fa46 < _0x335666 &&
              !0x1 !== _0x52db29["apply"](_0x1c6aff[_0x27fa46++], _0x4c50e3);

            );
          }
        } else {
          if (_0x192454)
            for (_0x264d0c in _0x1c6aff) {
              if (
                !0x1 ===
                _0x52db29["call"](
                  _0x1c6aff[_0x264d0c],
                  _0x264d0c,
                  _0x1c6aff[_0x264d0c]
                )
              )
                break;
            }
          else {
            for (
              ;
              _0x27fa46 < _0x335666 &&
              !0x1 !==
                _0x52db29["call"](
                  _0x1c6aff[_0x27fa46],
                  _0x27fa46,
                  _0x1c6aff[_0x27fa46++]
                );

            );
          }
        }
        return _0x1c6aff;
      },
      trim:
        _0x58ea90 && !_0x58ea90["call"]("\ufeff\u00a0")
          ? function (_0x48ce14) {
              return null == _0x48ce14 ? "" : _0x58ea90["call"](_0x48ce14);
            }
          : function (_0x31bac7) {
              return null == _0x31bac7
                ? ""
                : (_0x31bac7 + "")["replace"](_0x5f5da2, "");
            },
      makeArray: function (_0x337a51, _0x2c24ef) {
        var _0x4d7c9e,
          _0x53b220 = _0x2c24ef || [];
        return (
          null != _0x337a51 &&
            ((_0x4d7c9e = _0x117884["type"](_0x337a51)),
            null == _0x337a51["length"] ||
            "string" === _0x4d7c9e ||
            "function" === _0x4d7c9e ||
            "regexp" === _0x4d7c9e ||
            _0x117884["isWindow"](_0x337a51)
              ? _0x135cbd["call"](_0x53b220, _0x337a51)
              : _0x117884["merge"](_0x53b220, _0x337a51)),
          _0x53b220
        );
      },
      inArray: function (_0x65be9, _0x441034, _0x74ea9e) {
        var _0x280fe7;
        if (_0x441034) {
          if (_0x5fd19a)
            return _0x5fd19a["call"](_0x441034, _0x65be9, _0x74ea9e);
          _0x280fe7 = _0x441034["length"];
          for (
            _0x74ea9e = _0x74ea9e
              ? 0x0 > _0x74ea9e
                ? Math["max"](0x0, _0x280fe7 + _0x74ea9e)
                : _0x74ea9e
              : 0x0;
            _0x74ea9e < _0x280fe7;
            _0x74ea9e++
          )
            if (_0x74ea9e in _0x441034 && _0x441034[_0x74ea9e] === _0x65be9)
              return _0x74ea9e;
        }
        return -0x1;
      },
      merge: function (_0x494b52, _0x4a7c4b) {
        var _0x5b4688 = _0x4a7c4b["length"],
          _0x33378d = _0x494b52["length"],
          _0x2a4a8a = 0x0;
        if ("number" == typeof _0x5b4688) {
          for (; _0x2a4a8a < _0x5b4688; _0x2a4a8a++)
            _0x494b52[_0x33378d++] = _0x4a7c4b[_0x2a4a8a];
        } else {
          for (; _0x4a7c4b[_0x2a4a8a] !== _0x549388; )
            _0x494b52[_0x33378d++] = _0x4a7c4b[_0x2a4a8a++];
        }
        return (_0x494b52["length"] = _0x33378d), _0x494b52;
      },
      grep: function (_0xd95026, _0x3b5f5d, _0x44caa5) {
        var _0x401d1d,
          _0x18e95d = [],
          _0x3227c9 = 0x0,
          _0x6826ef = _0xd95026["length"];
        for (_0x44caa5 = !!_0x44caa5; _0x3227c9 < _0x6826ef; _0x3227c9++)
          (_0x401d1d = !!_0x3b5f5d(_0xd95026[_0x3227c9], _0x3227c9)),
            _0x44caa5 !== _0x401d1d && _0x18e95d["push"](_0xd95026[_0x3227c9]);
        return _0x18e95d;
      },
      map: function (_0x381eaa, _0x5e47b5, _0x1d9ac) {
        var _0x3b12fc,
          _0x4bc5d9,
          _0x5489d6 = [],
          _0x5caec2 = 0x0,
          _0x4a66ed = _0x381eaa["length"];
        if (
          _0x381eaa instanceof _0x117884 ||
          (_0x4a66ed !== _0x549388 &&
            "number" == typeof _0x4a66ed &&
            ((0x0 < _0x4a66ed &&
              _0x381eaa[0x0] &&
              _0x381eaa[_0x4a66ed - 0x1]) ||
              0x0 === _0x4a66ed ||
              _0x117884["isArray"](_0x381eaa)))
        ) {
          for (; _0x5caec2 < _0x4a66ed; _0x5caec2++)
            (_0x3b12fc = _0x5e47b5(_0x381eaa[_0x5caec2], _0x5caec2, _0x1d9ac)),
              null != _0x3b12fc && (_0x5489d6[_0x5489d6["length"]] = _0x3b12fc);
        } else {
          for (_0x4bc5d9 in _0x381eaa)
            (_0x3b12fc = _0x5e47b5(_0x381eaa[_0x4bc5d9], _0x4bc5d9, _0x1d9ac)),
              null != _0x3b12fc && (_0x5489d6[_0x5489d6["length"]] = _0x3b12fc);
        }
        return _0x5489d6["concat"]["apply"]([], _0x5489d6);
      },
      guid: 0x1,
      proxy: function (_0x149068, _0x33f9da) {
        var _0x25b32a, _0x5f01b5, _0x2ff495;
        return (
          "string" == typeof _0x33f9da &&
            ((_0x25b32a = _0x149068[_0x33f9da]),
            (_0x33f9da = _0x149068),
            (_0x149068 = _0x25b32a)),
          _0x117884["isFunction"](_0x149068)
            ? ((_0x5f01b5 = _0x23c826["call"](arguments, 0x2)),
              (_0x2ff495 = function () {
                return _0x149068["apply"](
                  _0x33f9da,
                  _0x5f01b5["concat"](_0x23c826["call"](arguments))
                );
              }),
              (_0x2ff495["guid"] = _0x149068["guid"] =
                _0x149068["guid"] || _0x117884["guid"]++),
              _0x2ff495)
            : _0x549388
        );
      },
      access: function (
        _0x2711d1,
        _0x871a95,
        _0x285f65,
        _0x4da387,
        _0x2c291b,
        _0x2e4f79,
        _0x372682
      ) {
        var _0x17cf88,
          _0x41ebc6 = null == _0x285f65,
          _0xbf0e4a = 0x0,
          _0x33947d = _0x2711d1["length"];
        if (_0x285f65 && "object" == typeof _0x285f65) {
          for (_0xbf0e4a in _0x285f65)
            _0x117884["access"](
              _0x2711d1,
              _0x871a95,
              _0xbf0e4a,
              _0x285f65[_0xbf0e4a],
              0x1,
              _0x2e4f79,
              _0x4da387
            );
          _0x2c291b = 0x1;
        } else {
          if (_0x4da387 !== _0x549388) {
            (_0x17cf88 =
              _0x372682 === _0x549388 && _0x117884["isFunction"](_0x4da387)),
              _0x41ebc6 &&
                (_0x17cf88
                  ? ((_0x17cf88 = _0x871a95),
                    (_0x871a95 = function (_0x172058, _0x3eb6db, _0xa82028) {
                      return _0x17cf88["call"](_0x117884(_0x172058), _0xa82028);
                    }))
                  : (_0x871a95["call"](_0x2711d1, _0x4da387),
                    (_0x871a95 = null)));
            if (_0x871a95) {
              for (; _0xbf0e4a < _0x33947d; _0xbf0e4a++)
                _0x871a95(
                  _0x2711d1[_0xbf0e4a],
                  _0x285f65,
                  _0x17cf88
                    ? _0x4da387["call"](
                        _0x2711d1[_0xbf0e4a],
                        _0xbf0e4a,
                        _0x871a95(_0x2711d1[_0xbf0e4a], _0x285f65)
                      )
                    : _0x4da387,
                  _0x372682
                );
            }
            _0x2c291b = 0x1;
          }
        }
        return _0x2c291b
          ? _0x2711d1
          : _0x41ebc6
          ? _0x871a95["call"](_0x2711d1)
          : _0x33947d
          ? _0x871a95(_0x2711d1[0x0], _0x285f65)
          : _0x2e4f79;
      },
      now: function () {
        return new Date()["getTime"]();
      },
    }),
    (_0x117884["ready"]["promise"] = function (_0xb8db05) {
      if (!_0xcaf51b) {
        if (
          ((_0xcaf51b = _0x117884["Deferred"]()),
          "complete" === _0x190c5d["readyState"])
        )
          setTimeout(_0x117884["ready"], 0x1);
        else {
          if (_0x190c5d["addEventListener"])
            _0x190c5d["addEventListener"]("DOMContentLoaded", _0x33ff1c, !0x1),
              _0x42e8aa["addEventListener"]("load", _0x117884["ready"], !0x1);
          else {
            _0x190c5d["attachEvent"]("onreadystatechange", _0x33ff1c),
              _0x42e8aa["attachEvent"]("onload", _0x117884["ready"]);
            var _0x223cd4 = !0x1;
            try {
              _0x223cd4 =
                null == _0x42e8aa["frameElement"] &&
                _0x190c5d["documentElement"];
            } catch (_0x1eb461) {}
            _0x223cd4 &&
              _0x223cd4["doScroll"] &&
              (function _0x15872c() {
                if (!_0x117884["isReady"]) {
                  try {
                    _0x223cd4["doScroll"]("left");
                  } catch (_0x1c6c12) {
                    return setTimeout(_0x15872c, 0x32);
                  }
                  _0x117884["ready"]();
                }
              })();
          }
        }
      }
      return _0xcaf51b["promise"](_0xb8db05);
    }),
    _0x117884["each"](
      "Boolean\x20Number\x20String\x20Function\x20Array\x20Date\x20RegExp\x20Object"[
        "split"
      ]("\x20"),
      function (_0x54389a, _0x3332e5) {
        _0x2629c1["[object\x20" + _0x3332e5 + "]"] = _0x3332e5["toLowerCase"]();
      }
    ),
    (_0x264fdd = _0x117884(_0x190c5d));
  var _0x8a736 = {};
  (_0x117884["Callbacks"] = function (_0x182eef) {
    var _0xb84a3d;
    if ("string" == typeof _0x182eef) {
      if (!(_0xb84a3d = _0x8a736[_0x182eef])) {
        _0xb84a3d = _0x182eef;
        var _0x215175 = (_0x8a736[_0xb84a3d] = {});
        _0xb84a3d =
          (_0x117884["each"](
            _0xb84a3d["split"](_0x142aaf),
            function (_0xfd0656, _0x34c429) {
              _0x215175[_0x34c429] = !0x0;
            }
          ),
          _0x215175);
      }
    } else _0xb84a3d = _0x117884["extend"]({}, _0x182eef);
    _0x182eef = _0xb84a3d;
    var _0x420b7f,
      _0x4f8428,
      _0x275fa3,
      _0x59fc66,
      _0x9b016d,
      _0xd5f50f,
      _0x32558d = [],
      _0x76067d = !_0x182eef["once"] && [],
      _0x50d9af = function (_0x5ad0ce) {
        (_0x420b7f = _0x182eef["memory"] && _0x5ad0ce),
          (_0x4f8428 = !0x0),
          (_0xd5f50f = _0x59fc66 || 0x0),
          (_0x59fc66 = 0x0),
          (_0x9b016d = _0x32558d["length"]);
        for (_0x275fa3 = !0x0; _0x32558d && _0xd5f50f < _0x9b016d; _0xd5f50f++)
          if (
            !0x1 ===
              _0x32558d[_0xd5f50f]["apply"](_0x5ad0ce[0x0], _0x5ad0ce[0x1]) &&
            _0x182eef["stopOnFalse"]
          ) {
            _0x420b7f = !0x1;
            break;
          }
        (_0x275fa3 = !0x1),
          _0x32558d &&
            (_0x76067d
              ? _0x76067d["length"] && _0x50d9af(_0x76067d["shift"]())
              : _0x420b7f
              ? (_0x32558d = [])
              : _0x52c168["disable"]());
      },
      _0x52c168 = {
        add: function () {
          if (_0x32558d) {
            var _0x32f34a = _0x32558d["length"];
            (function _0x5abd7e(_0x4e5197) {
              _0x117884["each"](_0x4e5197, function (_0x449b84, _0x1d4787) {
                var _0x388383 = _0x117884["type"](_0x1d4787);
                "function" === _0x388383 &&
                (!_0x182eef["unique"] || !_0x52c168["has"](_0x1d4787))
                  ? _0x32558d["push"](_0x1d4787)
                  : _0x1d4787 &&
                    _0x1d4787["length"] &&
                    "string" !== _0x388383 &&
                    _0x5abd7e(_0x1d4787);
              });
            })(arguments),
              _0x275fa3
                ? (_0x9b016d = _0x32558d["length"])
                : _0x420b7f && ((_0x59fc66 = _0x32f34a), _0x50d9af(_0x420b7f));
          }
          return this;
        },
        remove: function () {
          return (
            _0x32558d &&
              _0x117884["each"](arguments, function (_0x4553e3, _0x13af90) {
                for (
                  var _0xe451e4;
                  -0x1 <
                  (_0xe451e4 = _0x117884["inArray"](
                    _0x13af90,
                    _0x32558d,
                    _0xe451e4
                  ));

                )
                  _0x32558d["splice"](_0xe451e4, 0x1),
                    _0x275fa3 &&
                      (_0xe451e4 <= _0x9b016d && _0x9b016d--,
                      _0xe451e4 <= _0xd5f50f && _0xd5f50f--);
              }),
            this
          );
        },
        has: function (_0x41d945) {
          return -0x1 < _0x117884["inArray"](_0x41d945, _0x32558d);
        },
        empty: function () {
          return (_0x32558d = []), this;
        },
        disable: function () {
          return (_0x32558d = _0x76067d = _0x420b7f = _0x549388), this;
        },
        disabled: function () {
          return !_0x32558d;
        },
        lock: function () {
          return (
            (_0x76067d = _0x549388), _0x420b7f || _0x52c168["disable"](), this
          );
        },
        locked: function () {
          return !_0x76067d;
        },
        fireWith: function (_0x42aad5, _0x293033) {
          return (
            (_0x293033 = _0x293033 || []),
            (_0x293033 = [
              _0x42aad5,
              _0x293033["slice"] ? _0x293033["slice"]() : _0x293033,
            ]),
            _0x32558d &&
              (!_0x4f8428 || _0x76067d) &&
              (_0x275fa3 ? _0x76067d["push"](_0x293033) : _0x50d9af(_0x293033)),
            this
          );
        },
        fire: function () {
          return _0x52c168["fireWith"](this, arguments), this;
        },
        fired: function () {
          return !!_0x4f8428;
        },
      };
    return _0x52c168;
  }),
    _0x117884["extend"]({
      Deferred: function (_0xbaaecd) {
        var _0x1b6cff = [
            [
              "resolve",
              "done",
              _0x117884["Callbacks"]("once\x20memory"),
              "resolved",
            ],
            [
              "reject",
              "fail",
              _0x117884["Callbacks"]("once\x20memory"),
              "rejected",
            ],
            ["notify", "progress", _0x117884["Callbacks"]("memory")],
          ],
          _0x204e51 = "pending",
          _0x34f7d2 = {
            state: function () {
              return _0x204e51;
            },
            always: function () {
              return _0x4c50d2["done"](arguments)["fail"](arguments), this;
            },
            then: function () {
              var _0xeae211 = arguments;
              return _0x117884["Deferred"](function (_0x3702b9) {
                _0x117884["each"](_0x1b6cff, function (_0x43c29b, _0x16b6e3) {
                  var _0x313039 = _0x16b6e3[0x0],
                    _0x2a1d9b = _0xeae211[_0x43c29b];
                  _0x4c50d2[_0x16b6e3[0x1]](
                    _0x117884["isFunction"](_0x2a1d9b)
                      ? function () {
                          var _0x2c9cb4 = _0x2a1d9b["apply"](this, arguments);
                          _0x2c9cb4 &&
                          _0x117884["isFunction"](_0x2c9cb4["promise"])
                            ? _0x2c9cb4["promise"]()
                                ["done"](_0x3702b9["resolve"])
                                ["fail"](_0x3702b9["reject"])
                                ["progress"](_0x3702b9["notify"])
                            : _0x3702b9[_0x313039 + "With"](
                                this === _0x4c50d2 ? _0x3702b9 : this,
                                [_0x2c9cb4]
                              );
                        }
                      : _0x3702b9[_0x313039]
                  );
                }),
                  (_0xeae211 = null);
              })["promise"]();
            },
            promise: function (_0x1fd642) {
              return null != _0x1fd642
                ? _0x117884["extend"](_0x1fd642, _0x34f7d2)
                : _0x34f7d2;
            },
          },
          _0x4c50d2 = {};
        return (
          (_0x34f7d2["pipe"] = _0x34f7d2["then"]),
          _0x117884["each"](_0x1b6cff, function (_0x14754f, _0x17967a) {
            var _0x140e56 = _0x17967a[0x2],
              _0x4d860d = _0x17967a[0x3];
            (_0x34f7d2[_0x17967a[0x1]] = _0x140e56["add"]),
              _0x4d860d &&
                _0x140e56["add"](
                  function () {
                    _0x204e51 = _0x4d860d;
                  },
                  _0x1b6cff[_0x14754f ^ 0x1][0x2]["disable"],
                  _0x1b6cff[0x2][0x2]["lock"]
                ),
              (_0x4c50d2[_0x17967a[0x0]] = _0x140e56["fire"]),
              (_0x4c50d2[_0x17967a[0x0] + "With"] = _0x140e56["fireWith"]);
          }),
          _0x34f7d2["promise"](_0x4c50d2),
          _0xbaaecd && _0xbaaecd["call"](_0x4c50d2, _0x4c50d2),
          _0x4c50d2
        );
      },
      when: function (_0x152783) {
        var _0x296245 = 0x0,
          _0x3ac6bf = _0x23c826["call"](arguments),
          _0x7798d3 = _0x3ac6bf["length"],
          _0x1cd928 =
            0x1 !== _0x7798d3 ||
            (_0x152783 && _0x117884["isFunction"](_0x152783["promise"]))
              ? _0x7798d3
              : 0x0,
          _0x1a1300 = 0x1 === _0x1cd928 ? _0x152783 : _0x117884["Deferred"](),
          _0x364e50 = function (_0xb1aa74, _0x410cf2, _0x1ddf15) {
            return function (_0x447f49) {
              (_0x410cf2[_0xb1aa74] = this),
                (_0x1ddf15[_0xb1aa74] =
                  0x1 < arguments["length"]
                    ? _0x23c826["call"](arguments)
                    : _0x447f49),
                _0x1ddf15 === _0x54942c
                  ? _0x1a1300["notifyWith"](_0x410cf2, _0x1ddf15)
                  : --_0x1cd928 ||
                    _0x1a1300["resolveWith"](_0x410cf2, _0x1ddf15);
            };
          },
          _0x54942c,
          _0x38e379,
          _0x4ac674;
        if (0x1 < _0x7798d3) {
          (_0x54942c = Array(_0x7798d3)), (_0x38e379 = Array(_0x7798d3));
          for (_0x4ac674 = Array(_0x7798d3); _0x296245 < _0x7798d3; _0x296245++)
            _0x3ac6bf[_0x296245] &&
            _0x117884["isFunction"](_0x3ac6bf[_0x296245]["promise"])
              ? _0x3ac6bf[_0x296245]["promise"]()
                  ["done"](_0x364e50(_0x296245, _0x4ac674, _0x3ac6bf))
                  ["fail"](_0x1a1300["reject"])
                  ["progress"](_0x364e50(_0x296245, _0x38e379, _0x54942c))
              : --_0x1cd928;
        }
        return (
          _0x1cd928 || _0x1a1300["resolveWith"](_0x4ac674, _0x3ac6bf),
          _0x1a1300["promise"]()
        );
      },
    });
  var _0x289286 = _0x117884,
    _0x52b021,
    _0x45750b,
    _0x3ae6d9,
    _0x36c3aa,
    _0x51eb91,
    _0x105e48,
    _0x586064,
    _0x1b9d2b,
    _0x2384d3,
    _0x4f518a,
    _0x18e343,
    _0x287e0c,
    _0x414aa7 = _0x190c5d["createElement"]("div");
  _0x414aa7["setAttribute"]("className", "t"),
    (_0x414aa7["innerHTML"] =
      "\x20\x20<link/><table></table><a\x20href=\x27/a\x27>a</a><input\x20type=\x27checkbox\x27/>"),
    (_0x3ae6d9 = _0x414aa7["getElementsByTagName"]("*")),
    (_0x36c3aa = _0x414aa7["getElementsByTagName"]("a")[0x0]),
    (_0x36c3aa["style"]["cssText"] = "top:1px;float:left;opacity:.5");
  if (!_0x3ae6d9 || !_0x3ae6d9["length"]) _0x52b021 = {};
  else {
    (_0x51eb91 = _0x190c5d["createElement"]("select")),
      (_0x105e48 = _0x51eb91["appendChild"](
        _0x190c5d["createElement"]("option")
      )),
      (_0x586064 = _0x414aa7["getElementsByTagName"]("input")[0x0]),
      (_0x45750b = {
        leadingWhitespace: 0x3 === _0x414aa7["firstChild"]["nodeType"],
        tbody: !_0x414aa7["getElementsByTagName"]("tbody")["length"],
        htmlSerialize: !!_0x414aa7["getElementsByTagName"]("link")["length"],
        style: /top/["test"](_0x36c3aa["getAttribute"]("style")),
        hrefNormalized: "/a" === _0x36c3aa["getAttribute"]("href"),
        opacity: /^0.5/["test"](_0x36c3aa["style"]["opacity"]),
        cssFloat: !!_0x36c3aa["style"]["cssFloat"],
        checkOn: "on" === _0x586064["value"],
        optSelected: _0x105e48["selected"],
        getSetAttribute: "t" !== _0x414aa7["className"],
        enctype: !!_0x190c5d["createElement"]("form")["enctype"],
        html5Clone:
          "<:nav></:nav>" !==
          _0x190c5d["createElement"]("nav")["cloneNode"](!0x0)["outerHTML"],
        boxModel: "CSS1Compat" === _0x190c5d["compatMode"],
        submitBubbles: !0x0,
        changeBubbles: !0x0,
        focusinBubbles: !0x1,
        deleteExpando: !0x0,
        noCloneEvent: !0x0,
        inlineBlockNeedsLayout: !0x1,
        shrinkWrapBlocks: !0x1,
        reliableMarginRight: !0x0,
        boxSizingReliable: !0x0,
        pixelPosition: !0x1,
      }),
      (_0x586064["checked"] = !0x0),
      (_0x45750b["noCloneChecked"] = _0x586064["cloneNode"](!0x0)["checked"]),
      (_0x51eb91["disabled"] = !0x0),
      (_0x45750b["optDisabled"] = !_0x105e48["disabled"]);
    try {
      delete _0x414aa7["test"];
    } catch (_0x2fc94b) {
      _0x45750b["deleteExpando"] = !0x1;
    }
    !_0x414aa7["addEventListener"] &&
      _0x414aa7["attachEvent"] &&
      _0x414aa7["fireEvent"] &&
      (_0x414aa7["attachEvent"](
        "onclick",
        (_0x287e0c = function () {
          _0x45750b["noCloneEvent"] = !0x1;
        })
      ),
      _0x414aa7["cloneNode"](!0x0)["fireEvent"]("onclick"),
      _0x414aa7["detachEvent"]("onclick", _0x287e0c)),
      (_0x586064 = _0x190c5d["createElement"]("input")),
      (_0x586064["value"] = "t"),
      _0x586064["setAttribute"]("type", "radio"),
      (_0x45750b["radioValue"] = "t" === _0x586064["value"]),
      _0x586064["setAttribute"]("checked", "checked"),
      _0x586064["setAttribute"]("name", "t"),
      _0x414aa7["appendChild"](_0x586064),
      (_0x1b9d2b = _0x190c5d["createDocumentFragment"]()),
      _0x1b9d2b["appendChild"](_0x414aa7["lastChild"]),
      (_0x45750b["checkClone"] = _0x1b9d2b["cloneNode"](!0x0)["cloneNode"](
        !0x0
      )["lastChild"]["checked"]),
      (_0x45750b["appendChecked"] = _0x586064["checked"]),
      _0x1b9d2b["removeChild"](_0x586064),
      _0x1b9d2b["appendChild"](_0x414aa7);
    if (_0x414aa7["attachEvent"]) {
      for (_0x4f518a in { submit: !0x0, change: !0x0, focusin: !0x0 })
        (_0x2384d3 = "on" + _0x4f518a),
          (_0x18e343 = _0x2384d3 in _0x414aa7) ||
            (_0x414aa7["setAttribute"](_0x2384d3, "return;"),
            (_0x18e343 = "function" == typeof _0x414aa7[_0x2384d3])),
          (_0x45750b[_0x4f518a + "Bubbles"] = _0x18e343);
    }
    _0x52b021 =
      (_0x117884(function () {
        var _0x338479,
          _0x34b0bb,
          _0x7484e9,
          _0x2237aa,
          _0x567564 = _0x190c5d["getElementsByTagName"]("body")[0x0];
        _0x567564 &&
          ((_0x338479 = _0x190c5d["createElement"]("div")),
          (_0x338479["style"]["cssText"] =
            "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px"),
          _0x567564["insertBefore"](_0x338479, _0x567564["firstChild"]),
          (_0x34b0bb = _0x190c5d["createElement"]("div")),
          _0x338479["appendChild"](_0x34b0bb),
          (_0x34b0bb["innerHTML"] =
            "<table><tr><td></td><td>t</td></tr></table>"),
          (_0x7484e9 = _0x34b0bb["getElementsByTagName"]("td")),
          (_0x7484e9[0x0]["style"]["cssText"] =
            "padding:0;margin:0;border:0;display:none"),
          (_0x18e343 = 0x0 === _0x7484e9[0x0]["offsetHeight"]),
          (_0x7484e9[0x0]["style"]["display"] = ""),
          (_0x7484e9[0x1]["style"]["display"] = "none"),
          (_0x45750b["reliableHiddenOffsets"] =
            _0x18e343 && 0x0 === _0x7484e9[0x0]["offsetHeight"]),
          (_0x34b0bb["innerHTML"] = ""),
          (_0x34b0bb["style"]["cssText"] =
            "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;"),
          (_0x45750b["boxSizing"] = 0x4 === _0x34b0bb["offsetWidth"]),
          (_0x45750b["doesNotIncludeMarginInBodyOffset"] =
            0x1 !== _0x567564["offsetTop"]),
          _0x42e8aa["getComputedStyle"] &&
            ((_0x45750b["pixelPosition"] =
              "1%" !==
              (_0x42e8aa["getComputedStyle"](_0x34b0bb, null) || {})["top"]),
            (_0x45750b["boxSizingReliable"] =
              "4px" ===
              (_0x42e8aa["getComputedStyle"](_0x34b0bb, null) || {
                width: "4px",
              })["width"]),
            (_0x2237aa = _0x190c5d["createElement"]("div")),
            (_0x2237aa["style"]["cssText"] = _0x34b0bb["style"]["cssText"] =
              "padding:0;margin:0;border:0;display:block;overflow:hidden;"),
            (_0x2237aa["style"]["marginRight"] = _0x2237aa["style"]["width"] =
              "0"),
            (_0x34b0bb["style"]["width"] = "1px"),
            _0x34b0bb["appendChild"](_0x2237aa),
            (_0x45750b["reliableMarginRight"] = !parseFloat(
              (_0x42e8aa["getComputedStyle"](_0x2237aa, null) || {})[
                "marginRight"
              ]
            ))),
          "undefined" != typeof _0x34b0bb["style"]["zoom"] &&
            ((_0x34b0bb["innerHTML"] = ""),
            (_0x34b0bb["style"]["cssText"] =
              "padding:0;margin:0;border:0;display:block;overflow:hidden;width:1px;padding:1px;display:inline;zoom:1"),
            (_0x45750b["inlineBlockNeedsLayout"] =
              0x3 === _0x34b0bb["offsetWidth"]),
            (_0x34b0bb["style"]["display"] = "block"),
            (_0x34b0bb["style"]["overflow"] = "visible"),
            (_0x34b0bb["innerHTML"] = "<div></div>"),
            (_0x34b0bb["firstChild"]["style"]["width"] = "5px"),
            (_0x45750b["shrinkWrapBlocks"] = 0x3 !== _0x34b0bb["offsetWidth"]),
            (_0x338479["style"]["zoom"] = 0x1)),
          _0x567564["removeChild"](_0x338479));
      }),
      _0x1b9d2b["removeChild"](_0x414aa7),
      (_0x3ae6d9 =
        _0x36c3aa =
        _0x51eb91 =
        _0x105e48 =
        _0x586064 =
        _0x1b9d2b =
        _0x414aa7 =
          null),
      _0x45750b);
  }
  _0x289286["support"] = _0x52b021;
  var _0x591f06 = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    _0x185587 = /([A-Z])/g;
  _0x117884["extend"]({
    cache: {},
    deletedIds: [],
    uuid: 0x0,
    expando:
      "jQuery" +
      (_0x117884["fn"]["jquery"] + Math["random"]())["replace"](/\D/g, ""),
    noData: {
      embed: !0x0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      applet: !0x0,
    },
    hasData: function (_0xca8048) {
      return (
        (_0xca8048 = _0xca8048["nodeType"]
          ? _0x117884["cache"][_0xca8048[_0x117884["expando"]]]
          : _0xca8048[_0x117884["expando"]]),
        !!_0xca8048 && !_0x4677f4(_0xca8048)
      );
    },
    data: function (_0x1b6e8a, _0xa14122, _0xb96ade, _0x20253b) {
      if (_0x117884["acceptData"](_0x1b6e8a)) {
        var _0x227234,
          _0x804a0d,
          _0x5cc457 = _0x117884["expando"],
          _0xf8ea7e = "string" == typeof _0xa14122,
          _0x571f75 = _0x1b6e8a["nodeType"],
          _0x813512 = _0x571f75 ? _0x117884["cache"] : _0x1b6e8a,
          _0x4a760e = _0x571f75
            ? _0x1b6e8a[_0x5cc457]
            : _0x1b6e8a[_0x5cc457] && _0x5cc457;
        if (
          (_0x4a760e &&
            _0x813512[_0x4a760e] &&
            (_0x20253b || _0x813512[_0x4a760e]["data"])) ||
          !(_0xf8ea7e && _0xb96ade === _0x549388)
        ) {
          _0x4a760e ||
            (_0x571f75
              ? (_0x1b6e8a[_0x5cc457] = _0x4a760e =
                  _0x117884["deletedIds"]["pop"]() || _0x117884["guid"]++)
              : (_0x4a760e = _0x5cc457)),
            _0x813512[_0x4a760e] ||
              ((_0x813512[_0x4a760e] = {}),
              _0x571f75 ||
                (_0x813512[_0x4a760e]["toJSON"] = _0x117884["noop"]));
          if ("object" == typeof _0xa14122 || "function" == typeof _0xa14122)
            _0x20253b
              ? (_0x813512[_0x4a760e] = _0x117884["extend"](
                  _0x813512[_0x4a760e],
                  _0xa14122
                ))
              : (_0x813512[_0x4a760e]["data"] = _0x117884["extend"](
                  _0x813512[_0x4a760e]["data"],
                  _0xa14122
                ));
          return (
            (_0x227234 = _0x813512[_0x4a760e]),
            _0x20253b ||
              (_0x227234["data"] || (_0x227234["data"] = {}),
              (_0x227234 = _0x227234["data"])),
            _0xb96ade !== _0x549388 &&
              (_0x227234[_0x117884["camelCase"](_0xa14122)] = _0xb96ade),
            _0xf8ea7e
              ? ((_0x804a0d = _0x227234[_0xa14122]),
                null == _0x804a0d &&
                  (_0x804a0d = _0x227234[_0x117884["camelCase"](_0xa14122)]))
              : (_0x804a0d = _0x227234),
            _0x804a0d
          );
        }
      }
    },
    removeData: function (_0x534058, _0x3592df, _0x1a00e3) {
      if (_0x117884["acceptData"](_0x534058)) {
        var _0x42ca4e,
          _0x57ab7e,
          _0x2f966f,
          _0x1d1e01 = _0x534058["nodeType"],
          _0x5e2737 = _0x1d1e01 ? _0x117884["cache"] : _0x534058,
          _0x113c06 = _0x1d1e01
            ? _0x534058[_0x117884["expando"]]
            : _0x117884["expando"];
        if (_0x5e2737[_0x113c06]) {
          if (
            _0x3592df &&
            (_0x42ca4e = _0x1a00e3
              ? _0x5e2737[_0x113c06]
              : _0x5e2737[_0x113c06]["data"])
          ) {
            _0x117884["isArray"](_0x3592df) ||
              (_0x3592df in _0x42ca4e
                ? (_0x3592df = [_0x3592df])
                : ((_0x3592df = _0x117884["camelCase"](_0x3592df)),
                  _0x3592df in _0x42ca4e
                    ? (_0x3592df = [_0x3592df])
                    : (_0x3592df = _0x3592df["split"]("\x20")))),
              (_0x57ab7e = 0x0);
            for (
              _0x2f966f = _0x3592df["length"];
              _0x57ab7e < _0x2f966f;
              _0x57ab7e++
            )
              delete _0x42ca4e[_0x3592df[_0x57ab7e]];
            if (
              !(_0x1a00e3 ? _0x4677f4 : _0x117884["isEmptyObject"])(_0x42ca4e)
            )
              return;
          }
          if (
            _0x1a00e3 ||
            !(delete _0x5e2737[_0x113c06]["data"],
            !_0x4677f4(_0x5e2737[_0x113c06]))
          )
            _0x1d1e01
              ? _0x117884["cleanData"]([_0x534058], !0x0)
              : _0x117884["support"]["deleteExpando"] ||
                _0x5e2737 != _0x5e2737["window"]
              ? delete _0x5e2737[_0x113c06]
              : (_0x5e2737[_0x113c06] = null);
        }
      }
    },
    _data: function (_0x38196b, _0x231fcf, _0x536380) {
      return _0x117884["data"](_0x38196b, _0x231fcf, _0x536380, !0x0);
    },
    acceptData: function (_0x5dcd2e) {
      var _0x2cb9d1 =
        _0x5dcd2e["nodeName"] &&
        _0x117884["noData"][_0x5dcd2e["nodeName"]["toLowerCase"]()];
      return (
        !_0x2cb9d1 ||
        (!0x0 !== _0x2cb9d1 &&
          _0x5dcd2e["getAttribute"]("classid") === _0x2cb9d1)
      );
    },
  }),
    _0x117884["fn"]["extend"]({
      data: function (_0x2848af, _0x269bf7) {
        var _0x4de572,
          _0x262014,
          _0x45a3fd,
          _0x4aed31,
          _0x2ae37a,
          _0xb3041d = this[0x0],
          _0x197ad5 = 0x0,
          _0x568eb2 = null;
        if (_0x2848af === _0x549388) {
          if (
            this["length"] &&
            ((_0x568eb2 = _0x117884["data"](_0xb3041d)),
            0x1 === _0xb3041d["nodeType"] &&
              !_0x117884["_data"](_0xb3041d, "parsedAttrs"))
          ) {
            _0x45a3fd = _0xb3041d["attributes"];
            for (
              _0x2ae37a = _0x45a3fd["length"];
              _0x197ad5 < _0x2ae37a;
              _0x197ad5++
            )
              (_0x4aed31 = _0x45a3fd[_0x197ad5]["name"]),
                _0x4aed31["indexOf"]("data-") ||
                  ((_0x4aed31 = _0x117884["camelCase"](
                    _0x4aed31["substring"](0x5)
                  )),
                  _0x4e0979(_0xb3041d, _0x4aed31, _0x568eb2[_0x4aed31]));
            _0x117884["_data"](_0xb3041d, "parsedAttrs", !0x0);
          }
          return _0x568eb2;
        }
        return "object" == typeof _0x2848af
          ? this["each"](function () {
              _0x117884["data"](this, _0x2848af);
            })
          : ((_0x4de572 = _0x2848af["split"](".", 0x2)),
            (_0x4de572[0x1] = _0x4de572[0x1] ? "." + _0x4de572[0x1] : ""),
            (_0x262014 = _0x4de572[0x1] + "!"),
            _0x117884["access"](
              this,
              function (_0x27353f) {
                if (_0x27353f === _0x549388)
                  return (
                    (_0x568eb2 = this["triggerHandler"]("getData" + _0x262014, [
                      _0x4de572[0x0],
                    ])),
                    _0x568eb2 === _0x549388 &&
                      _0xb3041d &&
                      ((_0x568eb2 = _0x117884["data"](_0xb3041d, _0x2848af)),
                      (_0x568eb2 = _0x4e0979(_0xb3041d, _0x2848af, _0x568eb2))),
                    _0x568eb2 === _0x549388 && _0x4de572[0x1]
                      ? this["data"](_0x4de572[0x0])
                      : _0x568eb2
                  );
                (_0x4de572[0x1] = _0x27353f),
                  this["each"](function () {
                    var _0x3bf9c7 = _0x117884(this);
                    _0x3bf9c7["triggerHandler"](
                      "setData" + _0x262014,
                      _0x4de572
                    ),
                      _0x117884["data"](this, _0x2848af, _0x27353f),
                      _0x3bf9c7["triggerHandler"](
                        "changeData" + _0x262014,
                        _0x4de572
                      );
                  });
              },
              null,
              _0x269bf7,
              0x1 < arguments["length"],
              null,
              !0x1
            ));
      },
      removeData: function (_0x22f69d) {
        return this["each"](function () {
          _0x117884["removeData"](this, _0x22f69d);
        });
      },
    }),
    _0x117884["extend"]({
      queue: function (_0x378ba4, _0xc41f8a, _0x5edd7f) {
        var _0x1f99ab;
        if (_0x378ba4)
          return (
            (_0xc41f8a = (_0xc41f8a || "fx") + "queue"),
            (_0x1f99ab = _0x117884["_data"](_0x378ba4, _0xc41f8a)),
            _0x5edd7f &&
              (!_0x1f99ab || _0x117884["isArray"](_0x5edd7f)
                ? (_0x1f99ab = _0x117884["_data"](
                    _0x378ba4,
                    _0xc41f8a,
                    _0x117884["makeArray"](_0x5edd7f)
                  ))
                : _0x1f99ab["push"](_0x5edd7f)),
            _0x1f99ab || []
          );
      },
      dequeue: function (_0x3a7cad, _0x1bae02) {
        _0x1bae02 = _0x1bae02 || "fx";
        var _0x11fbd8 = _0x117884["queue"](_0x3a7cad, _0x1bae02),
          _0x5bf0b0 = _0x11fbd8["length"],
          _0x26254d = _0x11fbd8["shift"](),
          _0x84ee57 = _0x117884["_queueHooks"](_0x3a7cad, _0x1bae02),
          _0x5ace7d = function () {
            _0x117884["dequeue"](_0x3a7cad, _0x1bae02);
          };
        "inprogress" === _0x26254d &&
          ((_0x26254d = _0x11fbd8["shift"]()), _0x5bf0b0--),
          _0x26254d &&
            ("fx" === _0x1bae02 && _0x11fbd8["unshift"]("inprogress"),
            delete _0x84ee57["stop"],
            _0x26254d["call"](_0x3a7cad, _0x5ace7d, _0x84ee57)),
          !_0x5bf0b0 && _0x84ee57 && _0x84ee57["empty"]["fire"]();
      },
      _queueHooks: function (_0x597750, _0x23132d) {
        var _0x5aa896 = _0x23132d + "queueHooks";
        return (
          _0x117884["_data"](_0x597750, _0x5aa896) ||
          _0x117884["_data"](_0x597750, _0x5aa896, {
            empty: _0x117884["Callbacks"]("once\x20memory")["add"](function () {
              _0x117884["removeData"](_0x597750, _0x23132d + "queue", !0x0),
                _0x117884["removeData"](_0x597750, _0x5aa896, !0x0);
            }),
          })
        );
      },
    }),
    _0x117884["fn"]["extend"]({
      queue: function (_0x1b8bac, _0x5362f6) {
        var _0x5842d0 = 0x2;
        return (
          "string" != typeof _0x1b8bac &&
            ((_0x5362f6 = _0x1b8bac), (_0x1b8bac = "fx"), _0x5842d0--),
          arguments["length"] < _0x5842d0
            ? _0x117884["queue"](this[0x0], _0x1b8bac)
            : _0x5362f6 === _0x549388
            ? this
            : this["each"](function () {
                var _0x5bab37 = _0x117884["queue"](this, _0x1b8bac, _0x5362f6);
                _0x117884["_queueHooks"](this, _0x1b8bac),
                  "fx" === _0x1b8bac &&
                    "inprogress" !== _0x5bab37[0x0] &&
                    _0x117884["dequeue"](this, _0x1b8bac);
              })
        );
      },
      dequeue: function (_0x6fd13e) {
        return this["each"](function () {
          _0x117884["dequeue"](this, _0x6fd13e);
        });
      },
      delay: function (_0xb75ece, _0x4cffda) {
        return (
          (_0xb75ece = _0x117884["fx"]
            ? _0x117884["fx"]["speeds"][_0xb75ece] || _0xb75ece
            : _0xb75ece),
          (_0x4cffda = _0x4cffda || "fx"),
          this["queue"](_0x4cffda, function (_0x20c0a6, _0x53ad65) {
            var _0x10980a = setTimeout(_0x20c0a6, _0xb75ece);
            _0x53ad65["stop"] = function () {
              clearTimeout(_0x10980a);
            };
          })
        );
      },
      clearQueue: function (_0x4c1881) {
        return this["queue"](_0x4c1881 || "fx", []);
      },
      promise: function (_0x5744ba, _0x4f1407) {
        var _0x116fb3,
          _0x3d16b1 = 0x1,
          _0x3ee9c5 = _0x117884["Deferred"](),
          _0x9547d8 = this,
          _0xdf5a4d = this["length"],
          _0x42ec7d = function () {
            --_0x3d16b1 || _0x3ee9c5["resolveWith"](_0x9547d8, [_0x9547d8]);
          };
        "string" != typeof _0x5744ba &&
          ((_0x4f1407 = _0x5744ba), (_0x5744ba = _0x549388));
        for (_0x5744ba = _0x5744ba || "fx"; _0xdf5a4d--; )
          (_0x116fb3 = _0x117884["_data"](
            _0x9547d8[_0xdf5a4d],
            _0x5744ba + "queueHooks"
          )) &&
            _0x116fb3["empty"] &&
            (_0x3d16b1++, _0x116fb3["empty"]["add"](_0x42ec7d));
        return _0x42ec7d(), _0x3ee9c5["promise"](_0x4f1407);
      },
    });
  var _0x48871a,
    _0x45e12c,
    _0x68f7cb,
    _0x2df9b7 = /[\t\r\n]/g,
    _0x17f626 = /\r/g,
    _0x5bb226 = /^(?:button|input)$/i,
    _0x43ec7b = /^(?:button|input|object|select|textarea)$/i,
    _0x5da187 = /^a(?:rea|)$/i,
    _0x1578e7 =
      /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    _0x42fb98 = _0x117884["support"]["getSetAttribute"];
  _0x117884["fn"]["extend"]({
    attr: function (_0x230fe6, _0x50c59c) {
      return _0x117884["access"](
        this,
        _0x117884["attr"],
        _0x230fe6,
        _0x50c59c,
        0x1 < arguments["length"]
      );
    },
    removeAttr: function (_0x4724af) {
      return this["each"](function () {
        _0x117884["removeAttr"](this, _0x4724af);
      });
    },
    prop: function (_0xb06522, _0x5d77c7) {
      return _0x117884["access"](
        this,
        _0x117884["prop"],
        _0xb06522,
        _0x5d77c7,
        0x1 < arguments["length"]
      );
    },
    removeProp: function (_0x4d36ce) {
      return (
        (_0x4d36ce = _0x117884["propFix"][_0x4d36ce] || _0x4d36ce),
        this["each"](function () {
          try {
            (this[_0x4d36ce] = _0x549388), delete this[_0x4d36ce];
          } catch (_0x1842dc) {}
        })
      );
    },
    addClass: function (_0x22b3a3) {
      var _0x50e962,
        _0x5d5867,
        _0x5919a5,
        _0x4d96bd,
        _0x14e878,
        _0x252c04,
        _0x51d13c;
      if (_0x117884["isFunction"](_0x22b3a3))
        return this["each"](function (_0x1f6303) {
          _0x117884(this)["addClass"](
            _0x22b3a3["call"](this, _0x1f6303, this["className"])
          );
        });
      if (_0x22b3a3 && "string" == typeof _0x22b3a3) {
        (_0x50e962 = _0x22b3a3["split"](_0x142aaf)), (_0x5d5867 = 0x0);
        for (_0x5919a5 = this["length"]; _0x5d5867 < _0x5919a5; _0x5d5867++)
          if (((_0x4d96bd = this[_0x5d5867]), 0x1 === _0x4d96bd["nodeType"])) {
            if (!_0x4d96bd["className"] && 0x1 === _0x50e962["length"])
              _0x4d96bd["className"] = _0x22b3a3;
            else {
              (_0x14e878 = "\x20" + _0x4d96bd["className"] + "\x20"),
                (_0x252c04 = 0x0);
              for (
                _0x51d13c = _0x50e962["length"];
                _0x252c04 < _0x51d13c;
                _0x252c04++
              )
                0x0 >
                  _0x14e878["indexOf"](
                    "\x20" + _0x50e962[_0x252c04] + "\x20"
                  ) && (_0x14e878 += _0x50e962[_0x252c04] + "\x20");
              _0x4d96bd["className"] = _0x117884["trim"](_0x14e878);
            }
          }
      }
      return this;
    },
    removeClass: function (_0x192f1c) {
      var _0x14d452,
        _0x337d9f,
        _0x285c57,
        _0x3297b0,
        _0x48d6e7,
        _0x547350,
        _0x27f8be;
      if (_0x117884["isFunction"](_0x192f1c))
        return this["each"](function (_0x3ba406) {
          _0x117884(this)["removeClass"](
            _0x192f1c["call"](this, _0x3ba406, this["className"])
          );
        });
      if (
        (_0x192f1c && "string" == typeof _0x192f1c) ||
        _0x192f1c === _0x549388
      ) {
        (_0x14d452 = (_0x192f1c || "")["split"](_0x142aaf)), (_0x547350 = 0x0);
        for (_0x27f8be = this["length"]; _0x547350 < _0x27f8be; _0x547350++)
          if (
            ((_0x285c57 = this[_0x547350]),
            0x1 === _0x285c57["nodeType"] && _0x285c57["className"])
          ) {
            (_0x337d9f = ("\x20" + _0x285c57["className"] + "\x20")["replace"](
              _0x2df9b7,
              "\x20"
            )),
              (_0x3297b0 = 0x0);
            for (
              _0x48d6e7 = _0x14d452["length"];
              _0x3297b0 < _0x48d6e7;
              _0x3297b0++
            )
              for (
                ;
                0x0 <=
                _0x337d9f["indexOf"]("\x20" + _0x14d452[_0x3297b0] + "\x20");

              )
                _0x337d9f = _0x337d9f["replace"](
                  "\x20" + _0x14d452[_0x3297b0] + "\x20",
                  "\x20"
                );
            _0x285c57["className"] = _0x192f1c
              ? _0x117884["trim"](_0x337d9f)
              : "";
          }
      }
      return this;
    },
    toggleClass: function (_0xbf35b7, _0xa5bef5) {
      var _0x55c950 = typeof _0xbf35b7,
        _0x1c9ded = "boolean" == typeof _0xa5bef5;
      return _0x117884["isFunction"](_0xbf35b7)
        ? this["each"](function (_0x5b9843) {
            _0x117884(this)["toggleClass"](
              _0xbf35b7["call"](this, _0x5b9843, this["className"], _0xa5bef5),
              _0xa5bef5
            );
          })
        : this["each"](function () {
            if ("string" === _0x55c950) {
              for (
                var _0x5f5b5e,
                  _0x4c51b0 = 0x0,
                  _0x550832 = _0x117884(this),
                  _0x29af8d = _0xa5bef5,
                  _0x769832 = _0xbf35b7["split"](_0x142aaf);
                (_0x5f5b5e = _0x769832[_0x4c51b0++]);

              )
                (_0x29af8d = _0x1c9ded
                  ? _0x29af8d
                  : !_0x550832["hasClass"](_0x5f5b5e)),
                  _0x550832[_0x29af8d ? "addClass" : "removeClass"](_0x5f5b5e);
            } else {
              if ("undefined" === _0x55c950 || "boolean" === _0x55c950)
                this["className"] &&
                  _0x117884["_data"](this, "__className__", this["className"]),
                  (this["className"] =
                    this["className"] || !0x1 === _0xbf35b7
                      ? ""
                      : _0x117884["_data"](this, "__className__") || "");
            }
          });
    },
    hasClass: function (_0x36ae30) {
      _0x36ae30 = "\x20" + _0x36ae30 + "\x20";
      for (
        var _0x13e33e = 0x0, _0x195e65 = this["length"];
        _0x13e33e < _0x195e65;
        _0x13e33e++
      )
        if (
          0x1 === this[_0x13e33e]["nodeType"] &&
          0x0 <=
            ("\x20" + this[_0x13e33e]["className"] + "\x20")
              ["replace"](_0x2df9b7, "\x20")
              ["indexOf"](_0x36ae30)
        )
          return !0x0;
      return !0x1;
    },
    val: function (_0x478e29) {
      var _0x292de6,
        _0x336857,
        _0x59e5f4,
        _0x25f810 = this[0x0];
      if (arguments["length"])
        return (
          (_0x59e5f4 = _0x117884["isFunction"](_0x478e29)),
          this["each"](function (_0x5d3be0) {
            var _0x5759c1,
              _0x524e84 = _0x117884(this);
            if (
              0x1 === this["nodeType"] &&
              (_0x59e5f4
                ? (_0x5759c1 = _0x478e29["call"](
                    this,
                    _0x5d3be0,
                    _0x524e84["val"]()
                  ))
                : (_0x5759c1 = _0x478e29),
              null == _0x5759c1
                ? (_0x5759c1 = "")
                : "number" == typeof _0x5759c1
                ? (_0x5759c1 += "")
                : _0x117884["isArray"](_0x5759c1) &&
                  (_0x5759c1 = _0x117884["map"](
                    _0x5759c1,
                    function (_0x82a82b) {
                      return null == _0x82a82b ? "" : _0x82a82b + "";
                    }
                  )),
              (_0x292de6 =
                _0x117884["valHooks"][this["type"]] ||
                _0x117884["valHooks"][this["nodeName"]["toLowerCase"]()]),
              !_0x292de6 ||
                !("set" in _0x292de6) ||
                _0x292de6["set"](this, _0x5759c1, "value") === _0x549388)
            )
              this["value"] = _0x5759c1;
          })
        );
      if (_0x25f810)
        return (
          (_0x292de6 =
            _0x117884["valHooks"][_0x25f810["type"]] ||
            _0x117884["valHooks"][_0x25f810["nodeName"]["toLowerCase"]()]),
          _0x292de6 &&
          "get" in _0x292de6 &&
          (_0x336857 = _0x292de6["get"](_0x25f810, "value")) !== _0x549388
            ? _0x336857
            : ((_0x336857 = _0x25f810["value"]),
              "string" == typeof _0x336857
                ? _0x336857["replace"](_0x17f626, "")
                : null == _0x336857
                ? ""
                : _0x336857)
        );
    },
  }),
    _0x117884["extend"]({
      valHooks: {
        option: {
          get: function (_0x5e8ece) {
            var _0x51bc78 = _0x5e8ece["attributes"]["value"];
            return !_0x51bc78 || _0x51bc78["specified"]
              ? _0x5e8ece["value"]
              : _0x5e8ece["text"];
          },
        },
        select: {
          get: function (_0xc76f26) {
            var _0x3ebac6,
              _0x2dcd4e,
              _0x231331 = _0xc76f26["selectedIndex"],
              _0x36993a = [],
              _0x2f01b8 = _0xc76f26["options"],
              _0x3a31e0 = "select-one" === _0xc76f26["type"];
            if (0x0 > _0x231331) return null;
            _0xc76f26 = _0x3a31e0 ? _0x231331 : 0x0;
            for (
              _0x2dcd4e = _0x3a31e0 ? _0x231331 + 0x1 : _0x2f01b8["length"];
              _0xc76f26 < _0x2dcd4e;
              _0xc76f26++
            )
              if (
                ((_0x3ebac6 = _0x2f01b8[_0xc76f26]),
                _0x3ebac6["selected"] &&
                  (_0x117884["support"]["optDisabled"]
                    ? !_0x3ebac6["disabled"]
                    : null === _0x3ebac6["getAttribute"]("disabled")) &&
                  (!_0x3ebac6["parentNode"]["disabled"] ||
                    !_0x117884["nodeName"](
                      _0x3ebac6["parentNode"],
                      "optgroup"
                    )))
              ) {
                _0x3ebac6 = _0x117884(_0x3ebac6)["val"]();
                if (_0x3a31e0) return _0x3ebac6;
                _0x36993a["push"](_0x3ebac6);
              }
            return _0x3a31e0 && !_0x36993a["length"] && _0x2f01b8["length"]
              ? _0x117884(_0x2f01b8[_0x231331])["val"]()
              : _0x36993a;
          },
          set: function (_0x2ec648, _0x5ccdcf) {
            var _0xb27268 = _0x117884["makeArray"](_0x5ccdcf);
            return (
              _0x117884(_0x2ec648)
                ["find"]("option")
                ["each"](function () {
                  this["selected"] =
                    0x0 <=
                    _0x117884["inArray"](_0x117884(this)["val"](), _0xb27268);
                }),
              _0xb27268["length"] || (_0x2ec648["selectedIndex"] = -0x1),
              _0xb27268
            );
          },
        },
      },
      attrFn: {},
      attr: function (_0x42cf35, _0x2123cf, _0x5239c9, _0x5ed3be) {
        var _0x373611,
          _0x4fe2bb,
          _0x500e88 = _0x42cf35["nodeType"];
        if (
          _0x42cf35 &&
          !(0x3 === _0x500e88 || 0x8 === _0x500e88 || 0x2 === _0x500e88)
        ) {
          if (_0x5ed3be && _0x117884["isFunction"](_0x117884["fn"][_0x2123cf]))
            return _0x117884(_0x42cf35)[_0x2123cf](_0x5239c9);
          if ("undefined" == typeof _0x42cf35["getAttribute"])
            return _0x117884["prop"](_0x42cf35, _0x2123cf, _0x5239c9);
          (_0x5ed3be =
            0x1 !== _0x500e88 || !_0x117884["isXMLDoc"](_0x42cf35)) &&
            ((_0x2123cf = _0x2123cf["toLowerCase"]()),
            (_0x4fe2bb =
              _0x117884["attrHooks"][_0x2123cf] ||
              (_0x1578e7["test"](_0x2123cf) ? _0x45e12c : _0x48871a)));
          if (_0x5239c9 !== _0x549388) {
            if (null === _0x5239c9) {
              _0x117884["removeAttr"](_0x42cf35, _0x2123cf);
              return;
            }
            return _0x4fe2bb &&
              "set" in _0x4fe2bb &&
              _0x5ed3be &&
              (_0x373611 = _0x4fe2bb["set"](
                _0x42cf35,
                _0x5239c9,
                _0x2123cf
              )) !== _0x549388
              ? _0x373611
              : (_0x42cf35["setAttribute"](_0x2123cf, _0x5239c9 + ""),
                _0x5239c9);
          }
          return _0x4fe2bb &&
            "get" in _0x4fe2bb &&
            _0x5ed3be &&
            null !== (_0x373611 = _0x4fe2bb["get"](_0x42cf35, _0x2123cf))
            ? _0x373611
            : ((_0x373611 = _0x42cf35["getAttribute"](_0x2123cf)),
              null === _0x373611 ? _0x549388 : _0x373611);
        }
      },
      removeAttr: function (_0x65d54d, _0x3edbf9) {
        var _0x12d951,
          _0x17de0b,
          _0xd0398,
          _0x501577,
          _0xf49267 = 0x0;
        if (_0x3edbf9 && 0x1 === _0x65d54d["nodeType"]) {
          for (
            _0x17de0b = _0x3edbf9["split"](_0x142aaf);
            _0xf49267 < _0x17de0b["length"];
            _0xf49267++
          )
            (_0xd0398 = _0x17de0b[_0xf49267]) &&
              ((_0x12d951 = _0x117884["propFix"][_0xd0398] || _0xd0398),
              (_0x501577 = _0x1578e7["test"](_0xd0398)),
              _0x501577 || _0x117884["attr"](_0x65d54d, _0xd0398, ""),
              _0x65d54d["removeAttribute"](_0x42fb98 ? _0xd0398 : _0x12d951),
              _0x501577 &&
                _0x12d951 in _0x65d54d &&
                (_0x65d54d[_0x12d951] = !0x1));
        }
      },
      attrHooks: {
        type: {
          set: function (_0xd340e7, _0x5b1f0b) {
            if (
              _0x5bb226["test"](_0xd340e7["nodeName"]) &&
              _0xd340e7["parentNode"]
            )
              _0x117884["error"](
                "type\x20property\x20can\x27t\x20be\x20changed"
              );
            else {
              if (
                !_0x117884["support"]["radioValue"] &&
                "radio" === _0x5b1f0b &&
                _0x117884["nodeName"](_0xd340e7, "input")
              ) {
                var _0x201329 = _0xd340e7["value"];
                return (
                  _0xd340e7["setAttribute"]("type", _0x5b1f0b),
                  _0x201329 && (_0xd340e7["value"] = _0x201329),
                  _0x5b1f0b
                );
              }
            }
          },
        },
        value: {
          get: function (_0x141ee6, _0x5301c3) {
            return _0x48871a && _0x117884["nodeName"](_0x141ee6, "button")
              ? _0x48871a["get"](_0x141ee6, _0x5301c3)
              : _0x5301c3 in _0x141ee6
              ? _0x141ee6["value"]
              : null;
          },
          set: function (_0x437d86, _0x4b5258, _0x570392) {
            if (_0x48871a && _0x117884["nodeName"](_0x437d86, "button"))
              return _0x48871a["set"](_0x437d86, _0x4b5258, _0x570392);
            _0x437d86["value"] = _0x4b5258;
          },
        },
      },
      propFix: {
        tabindex: "tabIndex",
        readonly: "readOnly",
        for: "htmlFor",
        class: "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable",
      },
      prop: function (_0x359c02, _0x50f885, _0x580484) {
        var _0x182e2f,
          _0x48cbbd,
          _0x41ea39,
          _0x5c5e97 = _0x359c02["nodeType"];
        if (
          _0x359c02 &&
          !(0x3 === _0x5c5e97 || 0x8 === _0x5c5e97 || 0x2 === _0x5c5e97)
        )
          return (
            (_0x41ea39 =
              0x1 !== _0x5c5e97 || !_0x117884["isXMLDoc"](_0x359c02)),
            _0x41ea39 &&
              ((_0x50f885 = _0x117884["propFix"][_0x50f885] || _0x50f885),
              (_0x48cbbd = _0x117884["propHooks"][_0x50f885])),
            _0x580484 !== _0x549388
              ? _0x48cbbd &&
                "set" in _0x48cbbd &&
                (_0x182e2f = _0x48cbbd["set"](
                  _0x359c02,
                  _0x580484,
                  _0x50f885
                )) !== _0x549388
                ? _0x182e2f
                : (_0x359c02[_0x50f885] = _0x580484)
              : _0x48cbbd &&
                "get" in _0x48cbbd &&
                null !== (_0x182e2f = _0x48cbbd["get"](_0x359c02, _0x50f885))
              ? _0x182e2f
              : _0x359c02[_0x50f885]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (_0x22941c) {
            var _0x4c9543 = _0x22941c["getAttributeNode"]("tabindex");
            return _0x4c9543 && _0x4c9543["specified"]
              ? parseInt(_0x4c9543["value"], 0xa)
              : _0x43ec7b["test"](_0x22941c["nodeName"]) ||
                (_0x5da187["test"](_0x22941c["nodeName"]) && _0x22941c["href"])
              ? 0x0
              : _0x549388;
          },
        },
      },
    }),
    (_0x45e12c = {
      get: function (_0x59c623, _0x495565) {
        var _0xdbb53a,
          _0x4cafc3 = _0x117884["prop"](_0x59c623, _0x495565);
        return !0x0 === _0x4cafc3 ||
          ("boolean" != typeof _0x4cafc3 &&
            (_0xdbb53a = _0x59c623["getAttributeNode"](_0x495565)) &&
            !0x1 !== _0xdbb53a["nodeValue"])
          ? _0x495565["toLowerCase"]()
          : _0x549388;
      },
      set: function (_0x4e9225, _0x2e81a4, _0x2c7c86) {
        var _0x3f8560;
        return (
          !0x1 === _0x2e81a4
            ? _0x117884["removeAttr"](_0x4e9225, _0x2c7c86)
            : ((_0x3f8560 = _0x117884["propFix"][_0x2c7c86] || _0x2c7c86),
              _0x3f8560 in _0x4e9225 && (_0x4e9225[_0x3f8560] = !0x0),
              _0x4e9225["setAttribute"](_0x2c7c86, _0x2c7c86["toLowerCase"]())),
          _0x2c7c86
        );
      },
    }),
    _0x42fb98 ||
      ((_0x68f7cb = { name: !0x0, id: !0x0, coords: !0x0 }),
      (_0x48871a = _0x117884["valHooks"]["button"] =
        {
          get: function (_0x3f300e, _0x481116) {
            var _0x2edef8;
            return (
              (_0x2edef8 = _0x3f300e["getAttributeNode"](_0x481116)),
              _0x2edef8 &&
              (_0x68f7cb[_0x481116]
                ? "" !== _0x2edef8["value"]
                : _0x2edef8["specified"])
                ? _0x2edef8["value"]
                : _0x549388
            );
          },
          set: function (_0x416776, _0x4f968f, _0x1b9418) {
            var _0x5c0646 = _0x416776["getAttributeNode"](_0x1b9418);
            return (
              _0x5c0646 ||
                ((_0x5c0646 = _0x190c5d["createAttribute"](_0x1b9418)),
                _0x416776["setAttributeNode"](_0x5c0646)),
              (_0x5c0646["value"] = _0x4f968f + "")
            );
          },
        }),
      _0x117884["each"](["width", "height"], function (_0x39aa06, _0x3f8a79) {
        _0x117884["attrHooks"][_0x3f8a79] = _0x117884["extend"](
          _0x117884["attrHooks"][_0x3f8a79],
          {
            set: function (_0x1c4b65, _0x359689) {
              if ("" === _0x359689)
                return _0x1c4b65["setAttribute"](_0x3f8a79, "auto"), _0x359689;
            },
          }
        );
      }),
      (_0x117884["attrHooks"]["contenteditable"] = {
        get: _0x48871a["get"],
        set: function (_0x4ee145, _0x412ff3, _0x5b277f) {
          "" === _0x412ff3 && (_0x412ff3 = "false"),
            _0x48871a["set"](_0x4ee145, _0x412ff3, _0x5b277f);
        },
      })),
    _0x117884["support"]["hrefNormalized"] ||
      _0x117884["each"](
        ["href", "src", "width", "height"],
        function (_0x44fa1e, _0x1d7484) {
          _0x117884["attrHooks"][_0x1d7484] = _0x117884["extend"](
            _0x117884["attrHooks"][_0x1d7484],
            {
              get: function (_0x4ff51a) {
                return (
                  (_0x4ff51a = _0x4ff51a["getAttribute"](_0x1d7484, 0x2)),
                  null === _0x4ff51a ? _0x549388 : _0x4ff51a
                );
              },
            }
          );
        }
      ),
    _0x117884["support"]["style"] ||
      (_0x117884["attrHooks"]["style"] = {
        get: function (_0x1b240c) {
          return _0x1b240c["style"]["cssText"]["toLowerCase"]() || _0x549388;
        },
        set: function (_0x3fdcf5, _0x431bae) {
          return (_0x3fdcf5["style"]["cssText"] = _0x431bae + "");
        },
      }),
    _0x117884["support"]["optSelected"] ||
      (_0x117884["propHooks"]["selected"] = _0x117884["extend"](
        _0x117884["propHooks"]["selected"],
        {
          get: function (_0x48a197) {
            return (
              (_0x48a197 = _0x48a197["parentNode"]),
              (_0x48a197 &&
                (_0x48a197["selectedIndex"],
                _0x48a197["parentNode"] &&
                  _0x48a197["parentNode"]["selectedIndex"]),
              null)
            );
          },
        }
      )),
    _0x117884["support"]["enctype"] ||
      (_0x117884["propFix"]["enctype"] = "encoding"),
    _0x117884["support"]["checkOn"] ||
      _0x117884["each"](["radio", "checkbox"], function () {
        _0x117884["valHooks"][this] = {
          get: function (_0xb61185) {
            return null === _0xb61185["getAttribute"]("value")
              ? "on"
              : _0xb61185["value"];
          },
        };
      }),
    _0x117884["each"](["radio", "checkbox"], function () {
      _0x117884["valHooks"][this] = _0x117884["extend"](
        _0x117884["valHooks"][this],
        {
          set: function (_0x1bc960, _0x4bc98b) {
            if (_0x117884["isArray"](_0x4bc98b))
              return (_0x1bc960["checked"] =
                0x0 <=
                _0x117884["inArray"](_0x117884(_0x1bc960)["val"](), _0x4bc98b));
          },
        }
      );
    });
  var _0x263bcc = /^(?:textarea|input|select)$/i,
    _0x59421e = /^([^\.]*|)(?:\.(.+)|)$/,
    _0x3b299a = /(?:^|\s)hover(\.\S+|)\b/,
    _0x267e0b = /^key/,
    _0x1a5f9d = /^(?:mouse|contextmenu)|click/,
    _0x391ba8 = /^(?:focusinfocus|focusoutblur)$/,
    _0x4c7eba = function (_0x4a63c4) {
      return _0x117884["event"]["special"]["hover"]
        ? _0x4a63c4
        : _0x4a63c4["replace"](_0x3b299a, "mouseenter$1\x20mouseleave$1");
    };
  (_0x117884["event"] = {
    add: function (_0x4c39cc, _0x124c3a, _0x220d89, _0x37e9e7, _0x18b13d) {
      var _0xa12aba,
        _0x36efd3,
        _0x3296a9,
        _0x23f735,
        _0x4cbecb,
        _0x3b2d4d,
        _0x15f52a,
        _0x12c877,
        _0x3b4999;
      if (
        !(
          0x3 === _0x4c39cc["nodeType"] ||
          0x8 === _0x4c39cc["nodeType"] ||
          !_0x124c3a ||
          !_0x220d89 ||
          !(_0xa12aba = _0x117884["_data"](_0x4c39cc))
        )
      ) {
        _0x220d89["handler"] &&
          ((_0x15f52a = _0x220d89),
          (_0x220d89 = _0x15f52a["handler"]),
          (_0x18b13d = _0x15f52a["selector"])),
          _0x220d89["guid"] || (_0x220d89["guid"] = _0x117884["guid"]++),
          (_0x3296a9 = _0xa12aba["events"]) ||
            (_0xa12aba["events"] = _0x3296a9 = {}),
          (_0x36efd3 = _0xa12aba["handle"]) ||
            ((_0xa12aba["handle"] = _0x36efd3 =
              function (_0x13f656) {
                return "undefined" != typeof _0x117884 &&
                  (!_0x13f656 ||
                    _0x117884["event"]["triggered"] !== _0x13f656["type"])
                  ? _0x117884["event"]["dispatch"]["apply"](
                      _0x36efd3["elem"],
                      arguments
                    )
                  : _0x549388;
              }),
            (_0x36efd3["elem"] = _0x4c39cc)),
          (_0x124c3a = _0x117884["trim"](_0x4c7eba(_0x124c3a))["split"](
            "\x20"
          ));
        for (_0xa12aba = 0x0; _0xa12aba < _0x124c3a["length"]; _0xa12aba++) {
          (_0x23f735 = _0x59421e["exec"](_0x124c3a[_0xa12aba]) || []),
            (_0x4cbecb = _0x23f735[0x1]),
            (_0x3b2d4d = (_0x23f735[0x2] || "")["split"](".")["sort"]()),
            (_0x3b4999 = _0x117884["event"]["special"][_0x4cbecb] || {}),
            (_0x4cbecb =
              (_0x18b13d ? _0x3b4999["delegateType"] : _0x3b4999["bindType"]) ||
              _0x4cbecb),
            (_0x3b4999 = _0x117884["event"]["special"][_0x4cbecb] || {}),
            (_0x23f735 = _0x117884["extend"](
              {
                type: _0x4cbecb,
                origType: _0x23f735[0x1],
                data: _0x37e9e7,
                handler: _0x220d89,
                guid: _0x220d89["guid"],
                selector: _0x18b13d,
                needsContext:
                  _0x18b13d &&
                  _0x117884["expr"]["match"]["needsContext"]["test"](_0x18b13d),
                namespace: _0x3b2d4d["join"]("."),
              },
              _0x15f52a
            )),
            (_0x12c877 = _0x3296a9[_0x4cbecb]);
          if (
            !_0x12c877 &&
            ((_0x12c877 = _0x3296a9[_0x4cbecb] = []),
            (_0x12c877["delegateCount"] = 0x0),
            !_0x3b4999["setup"] ||
              !0x1 ===
                _0x3b4999["setup"]["call"](
                  _0x4c39cc,
                  _0x37e9e7,
                  _0x3b2d4d,
                  _0x36efd3
                ))
          )
            _0x4c39cc["addEventListener"]
              ? _0x4c39cc["addEventListener"](_0x4cbecb, _0x36efd3, !0x1)
              : _0x4c39cc["attachEvent"] &&
                _0x4c39cc["attachEvent"]("on" + _0x4cbecb, _0x36efd3);
          _0x3b4999["add"] &&
            (_0x3b4999["add"]["call"](_0x4c39cc, _0x23f735),
            _0x23f735["handler"]["guid"] ||
              (_0x23f735["handler"]["guid"] = _0x220d89["guid"])),
            _0x18b13d
              ? _0x12c877["splice"](
                  _0x12c877["delegateCount"]++,
                  0x0,
                  _0x23f735
                )
              : _0x12c877["push"](_0x23f735),
            (_0x117884["event"]["global"][_0x4cbecb] = !0x0);
        }
        _0x4c39cc = null;
      }
    },
    global: {},
    remove: function (_0x1d3af9, _0x1e1bbd, _0x33fbe1, _0x16a693, _0x4f2664) {
      var _0x34a56d,
        _0x14bb2e,
        _0x14372b,
        _0x1441ab,
        _0x19add8,
        _0xc5653e,
        _0x9ded9c,
        _0x44bed9,
        _0x35578d,
        _0x13fc85,
        _0x214b9c =
          _0x117884["hasData"](_0x1d3af9) && _0x117884["_data"](_0x1d3af9);
      if (_0x214b9c && (_0x9ded9c = _0x214b9c["events"])) {
        _0x1e1bbd = _0x117884["trim"](_0x4c7eba(_0x1e1bbd || ""))["split"](
          "\x20"
        );
        for (_0x34a56d = 0x0; _0x34a56d < _0x1e1bbd["length"]; _0x34a56d++)
          if (
            ((_0x14bb2e = _0x59421e["exec"](_0x1e1bbd[_0x34a56d]) || []),
            (_0x14372b = _0x1441ab = _0x14bb2e[0x1]),
            (_0x14bb2e = _0x14bb2e[0x2]),
            _0x14372b)
          ) {
            (_0x44bed9 = _0x117884["event"]["special"][_0x14372b] || {}),
              (_0x14372b =
                (_0x16a693
                  ? _0x44bed9["delegateType"]
                  : _0x44bed9["bindType"]) || _0x14372b),
              (_0x35578d = _0x9ded9c[_0x14372b] || []),
              (_0x19add8 = _0x35578d["length"]),
              (_0x14bb2e = _0x14bb2e
                ? RegExp(
                    "(^|\x5c.)" +
                      _0x14bb2e["split"](".")
                        ["sort"]()
                        ["join"]("\x5c.(?:.*\x5c.|)") +
                      "(\x5c.|$)"
                  )
                : null);
            for (_0xc5653e = 0x0; _0xc5653e < _0x35578d["length"]; _0xc5653e++)
              (_0x13fc85 = _0x35578d[_0xc5653e]),
                (_0x4f2664 || _0x1441ab === _0x13fc85["origType"]) &&
                  (!_0x33fbe1 || _0x33fbe1["guid"] === _0x13fc85["guid"]) &&
                  (!_0x14bb2e || _0x14bb2e["test"](_0x13fc85["namespace"])) &&
                  (!_0x16a693 ||
                    _0x16a693 === _0x13fc85["selector"] ||
                    ("**" === _0x16a693 && _0x13fc85["selector"])) &&
                  (_0x35578d["splice"](_0xc5653e--, 0x1),
                  _0x13fc85["selector"] && _0x35578d["delegateCount"]--,
                  _0x44bed9["remove"] &&
                    _0x44bed9["remove"]["call"](_0x1d3af9, _0x13fc85));
            0x0 === _0x35578d["length"] &&
              _0x19add8 !== _0x35578d["length"] &&
              ((!_0x44bed9["teardown"] ||
                !0x1 ===
                  _0x44bed9["teardown"]["call"](
                    _0x1d3af9,
                    _0x14bb2e,
                    _0x214b9c["handle"]
                  )) &&
                _0x117884["removeEvent"](
                  _0x1d3af9,
                  _0x14372b,
                  _0x214b9c["handle"]
                ),
              delete _0x9ded9c[_0x14372b]);
          } else {
            for (_0x14372b in _0x9ded9c)
              _0x117884["event"]["remove"](
                _0x1d3af9,
                _0x14372b + _0x1e1bbd[_0x34a56d],
                _0x33fbe1,
                _0x16a693,
                !0x0
              );
          }
        _0x117884["isEmptyObject"](_0x9ded9c) &&
          (delete _0x214b9c["handle"],
          _0x117884["removeData"](_0x1d3af9, "events", !0x0));
      }
    },
    customEvent: { getData: !0x0, setData: !0x0, changeData: !0x0 },
    trigger: function (_0x45a2fd, _0x344898, _0x11ba6f, _0x5dc556) {
      if (
        !_0x11ba6f ||
        (0x3 !== _0x11ba6f["nodeType"] && 0x8 !== _0x11ba6f["nodeType"])
      ) {
        var _0xe658c3,
          _0x2fe90d,
          _0x4b62ae,
          _0x342848,
          _0x2f946f,
          _0x316fef,
          _0x135216,
          _0x4eb72b = _0x45a2fd["type"] || _0x45a2fd;
        _0x342848 = [];
        if (
          !_0x391ba8["test"](_0x4eb72b + _0x117884["event"]["triggered"]) &&
          (0x0 <= _0x4eb72b["indexOf"]("!") &&
            ((_0x4eb72b = _0x4eb72b["slice"](0x0, -0x1)), (_0xe658c3 = !0x0)),
          0x0 <= _0x4eb72b["indexOf"](".") &&
            ((_0x342848 = _0x4eb72b["split"](".")),
            (_0x4eb72b = _0x342848["shift"]()),
            _0x342848["sort"]()),
          (_0x11ba6f && !_0x117884["event"]["customEvent"][_0x4eb72b]) ||
            _0x117884["event"]["global"][_0x4eb72b])
        ) {
          if (
            ((_0x45a2fd =
              "object" == typeof _0x45a2fd
                ? _0x45a2fd[_0x117884["expando"]]
                  ? _0x45a2fd
                  : new _0x117884["Event"](_0x4eb72b, _0x45a2fd)
                : new _0x117884["Event"](_0x4eb72b)),
            (_0x45a2fd["type"] = _0x4eb72b),
            (_0x45a2fd["isTrigger"] = !0x0),
            (_0x45a2fd["exclusive"] = _0xe658c3),
            (_0x45a2fd["namespace"] = _0x342848["join"](".")),
            (_0x45a2fd["namespace_re"] = _0x45a2fd["namespace"]
              ? RegExp(
                  "(^|\x5c.)" +
                    _0x342848["join"]("\x5c.(?:.*\x5c.|)") +
                    "(\x5c.|$)"
                )
              : null),
            (_0x342848 =
              0x0 > _0x4eb72b["indexOf"](":") ? "on" + _0x4eb72b : ""),
            _0x11ba6f)
          ) {
            if (
              ((_0x45a2fd["result"] = _0x549388),
              _0x45a2fd["target"] || (_0x45a2fd["target"] = _0x11ba6f),
              (_0x344898 =
                null != _0x344898 ? _0x117884["makeArray"](_0x344898) : []),
              _0x344898["unshift"](_0x45a2fd),
              (_0x2f946f = _0x117884["event"]["special"][_0x4eb72b] || {}),
              !(
                _0x2f946f["trigger"] &&
                !0x1 === _0x2f946f["trigger"]["apply"](_0x11ba6f, _0x344898)
              ))
            ) {
              _0x135216 = [[_0x11ba6f, _0x2f946f["bindType"] || _0x4eb72b]];
              if (
                !_0x5dc556 &&
                !_0x2f946f["noBubble"] &&
                !_0x117884["isWindow"](_0x11ba6f)
              ) {
                (_0x2fe90d = _0x2f946f["delegateType"] || _0x4eb72b),
                  (_0xe658c3 = _0x391ba8["test"](_0x2fe90d + _0x4eb72b)
                    ? _0x11ba6f
                    : _0x11ba6f["parentNode"]);
                for (
                  _0x4b62ae = _0x11ba6f;
                  _0xe658c3;
                  _0xe658c3 = _0xe658c3["parentNode"]
                )
                  _0x135216["push"]([_0xe658c3, _0x2fe90d]),
                    (_0x4b62ae = _0xe658c3);
                _0x4b62ae === (_0x11ba6f["ownerDocument"] || _0x190c5d) &&
                  _0x135216["push"]([
                    _0x4b62ae["defaultView"] ||
                      _0x4b62ae["parentWindow"] ||
                      _0x42e8aa,
                    _0x2fe90d,
                  ]);
              }
              for (
                _0x2fe90d = 0x0;
                _0x2fe90d < _0x135216["length"] &&
                !_0x45a2fd["isPropagationStopped"]();
                _0x2fe90d++
              )
                (_0xe658c3 = _0x135216[_0x2fe90d][0x0]),
                  (_0x45a2fd["type"] = _0x135216[_0x2fe90d][0x1]),
                  (_0x316fef =
                    (_0x117884["_data"](_0xe658c3, "events") || {})[
                      _0x45a2fd["type"]
                    ] && _0x117884["_data"](_0xe658c3, "handle")) &&
                    _0x316fef["apply"](_0xe658c3, _0x344898),
                  (_0x316fef = _0x342848 && _0xe658c3[_0x342848]) &&
                    _0x117884["acceptData"](_0xe658c3) &&
                    _0x316fef["apply"] &&
                    !0x1 === _0x316fef["apply"](_0xe658c3, _0x344898) &&
                    _0x45a2fd["preventDefault"]();
              return (
                (_0x45a2fd["type"] = _0x4eb72b),
                !_0x5dc556 &&
                  !_0x45a2fd["isDefaultPrevented"]() &&
                  (!_0x2f946f["_default"] ||
                    !0x1 ===
                      _0x2f946f["_default"]["apply"](
                        _0x11ba6f["ownerDocument"],
                        _0x344898
                      )) &&
                  ("click" !== _0x4eb72b ||
                    !_0x117884["nodeName"](_0x11ba6f, "a")) &&
                  _0x117884["acceptData"](_0x11ba6f) &&
                  _0x342848 &&
                  _0x11ba6f[_0x4eb72b] &&
                  (("focus" !== _0x4eb72b && "blur" !== _0x4eb72b) ||
                    0x0 !== _0x45a2fd["target"]["offsetWidth"]) &&
                  !_0x117884["isWindow"](_0x11ba6f) &&
                  ((_0x4b62ae = _0x11ba6f[_0x342848]),
                  _0x4b62ae && (_0x11ba6f[_0x342848] = null),
                  (_0x117884["event"]["triggered"] = _0x4eb72b),
                  _0x11ba6f[_0x4eb72b](),
                  (_0x117884["event"]["triggered"] = _0x549388),
                  _0x4b62ae && (_0x11ba6f[_0x342848] = _0x4b62ae)),
                _0x45a2fd["result"]
              );
            }
          } else {
            for (_0x2fe90d in ((_0x11ba6f = _0x117884["cache"]), _0x11ba6f))
              _0x11ba6f[_0x2fe90d]["events"] &&
                _0x11ba6f[_0x2fe90d]["events"][_0x4eb72b] &&
                _0x117884["event"]["trigger"](
                  _0x45a2fd,
                  _0x344898,
                  _0x11ba6f[_0x2fe90d]["handle"]["elem"],
                  !0x0
                );
          }
        }
      }
    },
    dispatch: function (_0x9a3bbd) {
      _0x9a3bbd = _0x117884["event"]["fix"](_0x9a3bbd || _0x42e8aa["event"]);
      var _0x5ea643,
        _0x19adc6,
        _0x36d0d3,
        _0x25c41f,
        _0x38b985,
        _0x2f311a,
        _0x4bfa34 =
          (_0x117884["_data"](this, "events") || {})[_0x9a3bbd["type"]] || [],
        _0x2c78f2 = _0x4bfa34["delegateCount"],
        _0x4bf8eb = _0x23c826["call"](arguments),
        _0x1282b = !_0x9a3bbd["exclusive"] && !_0x9a3bbd["namespace"],
        _0x3ea4df = _0x117884["event"]["special"][_0x9a3bbd["type"]] || {},
        _0x541c80 = [];
      (_0x4bf8eb[0x0] = _0x9a3bbd), (_0x9a3bbd["delegateTarget"] = this);
      if (
        !(
          _0x3ea4df["preDispatch"] &&
          !0x1 === _0x3ea4df["preDispatch"]["call"](this, _0x9a3bbd)
        )
      ) {
        if (
          _0x2c78f2 &&
          (!_0x9a3bbd["button"] || "click" !== _0x9a3bbd["type"])
        ) {
          for (
            _0x19adc6 = _0x9a3bbd["target"];
            _0x19adc6 != this;
            _0x19adc6 = _0x19adc6["parentNode"] || this
          )
            if (
              !0x0 !== _0x19adc6["disabled"] ||
              "click" !== _0x9a3bbd["type"]
            ) {
              (_0x25c41f = {}), (_0x38b985 = []);
              for (_0x5ea643 = 0x0; _0x5ea643 < _0x2c78f2; _0x5ea643++)
                (_0x36d0d3 = _0x4bfa34[_0x5ea643]),
                  (_0x2f311a = _0x36d0d3["selector"]),
                  _0x25c41f[_0x2f311a] === _0x549388 &&
                    (_0x25c41f[_0x2f311a] = _0x36d0d3["needsContext"]
                      ? 0x0 <= _0x117884(_0x2f311a, this)["index"](_0x19adc6)
                      : _0x117884["find"](_0x2f311a, this, null, [_0x19adc6])[
                          "length"
                        ]),
                  _0x25c41f[_0x2f311a] && _0x38b985["push"](_0x36d0d3);
              _0x38b985["length"] &&
                _0x541c80["push"]({ elem: _0x19adc6, matches: _0x38b985 });
            }
        }
        _0x4bfa34["length"] > _0x2c78f2 &&
          _0x541c80["push"]({
            elem: this,
            matches: _0x4bfa34["slice"](_0x2c78f2),
          });
        for (
          _0x5ea643 = 0x0;
          _0x5ea643 < _0x541c80["length"] &&
          !_0x9a3bbd["isPropagationStopped"]();
          _0x5ea643++
        ) {
          (_0x25c41f = _0x541c80[_0x5ea643]),
            (_0x9a3bbd["currentTarget"] = _0x25c41f["elem"]);
          for (
            _0x19adc6 = 0x0;
            _0x19adc6 < _0x25c41f["matches"]["length"] &&
            !_0x9a3bbd["isImmediatePropagationStopped"]();
            _0x19adc6++
          )
            if (
              ((_0x36d0d3 = _0x25c41f["matches"][_0x19adc6]),
              _0x1282b ||
                (!_0x9a3bbd["namespace"] && !_0x36d0d3["namespace"]) ||
                (_0x9a3bbd["namespace_re"] &&
                  _0x9a3bbd["namespace_re"]["test"](_0x36d0d3["namespace"])))
            )
              (_0x9a3bbd["data"] = _0x36d0d3["data"]),
                (_0x9a3bbd["handleObj"] = _0x36d0d3),
                (_0x36d0d3 = ((_0x117884["event"]["special"][
                  _0x36d0d3["origType"]
                ] || {})["handle"] || _0x36d0d3["handler"])["apply"](
                  _0x25c41f["elem"],
                  _0x4bf8eb
                )),
                _0x36d0d3 !== _0x549388 &&
                  ((_0x9a3bbd["result"] = _0x36d0d3),
                  !0x1 === _0x36d0d3 &&
                    (_0x9a3bbd["preventDefault"](),
                    _0x9a3bbd["stopPropagation"]()));
        }
        return (
          _0x3ea4df["postDispatch"] &&
            _0x3ea4df["postDispatch"]["call"](this, _0x9a3bbd),
          _0x9a3bbd["result"]
        );
      }
    },
    props:
      "attrChange\x20attrName\x20relatedNode\x20srcElement\x20altKey\x20bubbles\x20cancelable\x20ctrlKey\x20currentTarget\x20eventPhase\x20metaKey\x20relatedTarget\x20shiftKey\x20target\x20timeStamp\x20view\x20which"[
        "split"
      ]("\x20"),
    fixHooks: {},
    keyHooks: {
      props: ["char", "charCode", "key", "keyCode"],
      filter: function (_0x5d1400, _0x1c802d) {
        return (
          null == _0x5d1400["which"] &&
            (_0x5d1400["which"] =
              null != _0x1c802d["charCode"]
                ? _0x1c802d["charCode"]
                : _0x1c802d["keyCode"]),
          _0x5d1400
        );
      },
    },
    mouseHooks: {
      props:
        "button\x20buttons\x20clientX\x20clientY\x20fromElement\x20offsetX\x20offsetY\x20pageX\x20pageY\x20screenX\x20screenY\x20toElement"[
          "split"
        ]("\x20"),
      filter: function (_0x4404f5, _0x3619eb) {
        var _0x1f215e,
          _0x440d34,
          _0x4f5a99,
          _0x58dcdd = _0x3619eb["button"],
          _0x3f3706 = _0x3619eb["fromElement"];
        return (
          null == _0x4404f5["pageX"] &&
            null != _0x3619eb["clientX"] &&
            ((_0x1f215e = _0x4404f5["target"]["ownerDocument"] || _0x190c5d),
            (_0x440d34 = _0x1f215e["documentElement"]),
            (_0x4f5a99 = _0x1f215e["body"]),
            (_0x4404f5["pageX"] =
              _0x3619eb["clientX"] +
              ((_0x440d34 && _0x440d34["scrollLeft"]) ||
                (_0x4f5a99 && _0x4f5a99["scrollLeft"]) ||
                0x0) -
              ((_0x440d34 && _0x440d34["clientLeft"]) ||
                (_0x4f5a99 && _0x4f5a99["clientLeft"]) ||
                0x0)),
            (_0x4404f5["pageY"] =
              _0x3619eb["clientY"] +
              ((_0x440d34 && _0x440d34["scrollTop"]) ||
                (_0x4f5a99 && _0x4f5a99["scrollTop"]) ||
                0x0) -
              ((_0x440d34 && _0x440d34["clientTop"]) ||
                (_0x4f5a99 && _0x4f5a99["clientTop"]) ||
                0x0))),
          !_0x4404f5["relatedTarget"] &&
            _0x3f3706 &&
            (_0x4404f5["relatedTarget"] =
              _0x3f3706 === _0x4404f5["target"]
                ? _0x3619eb["toElement"]
                : _0x3f3706),
          !_0x4404f5["which"] &&
            _0x58dcdd !== _0x549388 &&
            (_0x4404f5["which"] =
              _0x58dcdd & 0x1
                ? 0x1
                : _0x58dcdd & 0x2
                ? 0x3
                : _0x58dcdd & 0x4
                ? 0x2
                : 0x0),
          _0x4404f5
        );
      },
    },
    fix: function (_0x1ad458) {
      if (_0x1ad458[_0x117884["expando"]]) return _0x1ad458;
      var _0x30eba2,
        _0x442b4b,
        _0x2d07f9 = _0x1ad458,
        _0x322339 = _0x117884["event"]["fixHooks"][_0x1ad458["type"]] || {},
        _0x4a32e4 = _0x322339["props"]
          ? this["props"]["concat"](_0x322339["props"])
          : this["props"];
      _0x1ad458 = _0x117884["Event"](_0x2d07f9);
      for (_0x30eba2 = _0x4a32e4["length"]; _0x30eba2; )
        (_0x442b4b = _0x4a32e4[--_0x30eba2]),
          (_0x1ad458[_0x442b4b] = _0x2d07f9[_0x442b4b]);
      return (
        _0x1ad458["target"] ||
          (_0x1ad458["target"] = _0x2d07f9["srcElement"] || _0x190c5d),
        0x3 === _0x1ad458["target"]["nodeType"] &&
          (_0x1ad458["target"] = _0x1ad458["target"]["parentNode"]),
        (_0x1ad458["metaKey"] = !!_0x1ad458["metaKey"]),
        _0x322339["filter"]
          ? _0x322339["filter"](_0x1ad458, _0x2d07f9)
          : _0x1ad458
      );
    },
    special: {
      load: { noBubble: !0x0 },
      focus: { delegateType: "focusin" },
      blur: { delegateType: "focusout" },
      beforeunload: {
        setup: function (_0x148f96, _0x2b5617, _0x4b7932) {
          _0x117884["isWindow"](this) && (this["onbeforeunload"] = _0x4b7932);
        },
        teardown: function (_0x1b82b8, _0x25623a) {
          this["onbeforeunload"] === _0x25623a &&
            (this["onbeforeunload"] = null);
        },
      },
    },
    simulate: function (_0x20e8cb, _0x3a85f2, _0x4229a0, _0xf63050) {
      (_0x20e8cb = _0x117884["extend"](new _0x117884["Event"](), _0x4229a0, {
        type: _0x20e8cb,
        isSimulated: !0x0,
        originalEvent: {},
      })),
        _0xf63050
          ? _0x117884["event"]["trigger"](_0x20e8cb, null, _0x3a85f2)
          : _0x117884["event"]["dispatch"]["call"](_0x3a85f2, _0x20e8cb),
        _0x20e8cb["isDefaultPrevented"]() && _0x4229a0["preventDefault"]();
    },
  }),
    (_0x117884["event"]["handle"] = _0x117884["event"]["dispatch"]),
    (_0x117884["removeEvent"] = _0x190c5d["removeEventListener"]
      ? function (_0x1453fa, _0x387cad, _0x403e45) {
          _0x1453fa["removeEventListener"] &&
            _0x1453fa["removeEventListener"](_0x387cad, _0x403e45, !0x1);
        }
      : function (_0x4aef23, _0x590109, _0x1dcc07) {
          (_0x590109 = "on" + _0x590109),
            _0x4aef23["detachEvent"] &&
              ("undefined" == typeof _0x4aef23[_0x590109] &&
                (_0x4aef23[_0x590109] = null),
              _0x4aef23["detachEvent"](_0x590109, _0x1dcc07));
        }),
    (_0x117884["Event"] = function (_0x89025a, _0x42fd2c) {
      if (this instanceof _0x117884["Event"])
        _0x89025a && _0x89025a["type"]
          ? ((this["originalEvent"] = _0x89025a),
            (this["type"] = _0x89025a["type"]),
            (this["isDefaultPrevented"] =
              _0x89025a["defaultPrevented"] ||
              !0x1 === _0x89025a["returnValue"] ||
              (_0x89025a["getPreventDefault"] &&
                _0x89025a["getPreventDefault"]())
                ? _0xc1a5fe
                : _0x3521c2))
          : (this["type"] = _0x89025a),
          _0x42fd2c && _0x117884["extend"](this, _0x42fd2c),
          (this["timeStamp"] =
            (_0x89025a && _0x89025a["timeStamp"]) || _0x117884["now"]()),
          (this[_0x117884["expando"]] = !0x0);
      else return new _0x117884["Event"](_0x89025a, _0x42fd2c);
    }),
    (_0x117884["Event"]["prototype"] = {
      preventDefault: function () {
        this["isDefaultPrevented"] = _0xc1a5fe;
        var _0x37d67c = this["originalEvent"];
        _0x37d67c &&
          (_0x37d67c["preventDefault"]
            ? _0x37d67c["preventDefault"]()
            : (_0x37d67c["returnValue"] = !0x1));
      },
      stopPropagation: function () {
        this["isPropagationStopped"] = _0xc1a5fe;
        var _0x232a21 = this["originalEvent"];
        _0x232a21 &&
          (_0x232a21["stopPropagation"] && _0x232a21["stopPropagation"](),
          (_0x232a21["cancelBubble"] = !0x0));
      },
      stopImmediatePropagation: function () {
        (this["isImmediatePropagationStopped"] = _0xc1a5fe),
          this["stopPropagation"]();
      },
      isDefaultPrevented: _0x3521c2,
      isPropagationStopped: _0x3521c2,
      isImmediatePropagationStopped: _0x3521c2,
    }),
    _0x117884["each"](
      { mouseenter: "mouseover", mouseleave: "mouseout" },
      function (_0x58e52a, _0x194c5b) {
        _0x117884["event"]["special"][_0x58e52a] = {
          delegateType: _0x194c5b,
          bindType: _0x194c5b,
          handle: function (_0x1bcf0a) {
            var _0x2da5e7,
              _0x27f5ff = _0x1bcf0a["relatedTarget"],
              _0x3ee0cb = _0x1bcf0a["handleObj"];
            if (
              !_0x27f5ff ||
              (_0x27f5ff !== this && !_0x117884["contains"](this, _0x27f5ff))
            )
              (_0x1bcf0a["type"] = _0x3ee0cb["origType"]),
                (_0x2da5e7 = _0x3ee0cb["handler"]["apply"](this, arguments)),
                (_0x1bcf0a["type"] = _0x194c5b);
            return _0x2da5e7;
          },
        };
      }
    ),
    _0x117884["support"]["submitBubbles"] ||
      (_0x117884["event"]["special"]["submit"] = {
        setup: function () {
          if (_0x117884["nodeName"](this, "form")) return !0x1;
          _0x117884["event"]["add"](
            this,
            "click._submit\x20keypress._submit",
            function (_0x1b5bd0) {
              (_0x1b5bd0 = _0x1b5bd0["target"]),
                (_0x1b5bd0 =
                  _0x117884["nodeName"](_0x1b5bd0, "input") ||
                  _0x117884["nodeName"](_0x1b5bd0, "button")
                    ? _0x1b5bd0["form"]
                    : _0x549388) &&
                  !_0x117884["_data"](_0x1b5bd0, "_submit_attached") &&
                  (_0x117884["event"]["add"](
                    _0x1b5bd0,
                    "submit._submit",
                    function (_0x1135f9) {
                      _0x1135f9["_submit_bubble"] = !0x0;
                    }
                  ),
                  _0x117884["_data"](_0x1b5bd0, "_submit_attached", !0x0));
            }
          );
        },
        postDispatch: function (_0x215ce2) {
          _0x215ce2["_submit_bubble"] &&
            (delete _0x215ce2["_submit_bubble"],
            this["parentNode"] &&
              !_0x215ce2["isTrigger"] &&
              _0x117884["event"]["simulate"](
                "submit",
                this["parentNode"],
                _0x215ce2,
                !0x0
              ));
        },
        teardown: function () {
          if (_0x117884["nodeName"](this, "form")) return !0x1;
          _0x117884["event"]["remove"](this, "._submit");
        },
      }),
    _0x117884["support"]["changeBubbles"] ||
      (_0x117884["event"]["special"]["change"] = {
        setup: function () {
          if (_0x263bcc["test"](this["nodeName"])) {
            if ("checkbox" === this["type"] || "radio" === this["type"])
              _0x117884["event"]["add"](
                this,
                "propertychange._change",
                function (_0x36261b) {
                  "checked" === _0x36261b["originalEvent"]["propertyName"] &&
                    (this["_just_changed"] = !0x0);
                }
              ),
                _0x117884["event"]["add"](
                  this,
                  "click._change",
                  function (_0x1b4be7) {
                    this["_just_changed"] &&
                      !_0x1b4be7["isTrigger"] &&
                      (this["_just_changed"] = !0x1),
                      _0x117884["event"]["simulate"](
                        "change",
                        this,
                        _0x1b4be7,
                        !0x0
                      );
                  }
                );
            return !0x1;
          }
          _0x117884["event"]["add"](
            this,
            "beforeactivate._change",
            function (_0x3a87c2) {
              (_0x3a87c2 = _0x3a87c2["target"]),
                _0x263bcc["test"](_0x3a87c2["nodeName"]) &&
                  !_0x117884["_data"](_0x3a87c2, "_change_attached") &&
                  (_0x117884["event"]["add"](
                    _0x3a87c2,
                    "change._change",
                    function (_0x570606) {
                      this["parentNode"] &&
                        !_0x570606["isSimulated"] &&
                        !_0x570606["isTrigger"] &&
                        _0x117884["event"]["simulate"](
                          "change",
                          this["parentNode"],
                          _0x570606,
                          !0x0
                        );
                    }
                  ),
                  _0x117884["_data"](_0x3a87c2, "_change_attached", !0x0));
            }
          );
        },
        handle: function (_0x3152b7) {
          var _0xb19bea = _0x3152b7["target"];
          if (
            this !== _0xb19bea ||
            _0x3152b7["isSimulated"] ||
            _0x3152b7["isTrigger"] ||
            ("radio" !== _0xb19bea["type"] && "checkbox" !== _0xb19bea["type"])
          )
            return _0x3152b7["handleObj"]["handler"]["apply"](this, arguments);
        },
        teardown: function () {
          return (
            _0x117884["event"]["remove"](this, "._change"),
            !_0x263bcc["test"](this["nodeName"])
          );
        },
      }),
    _0x117884["support"]["focusinBubbles"] ||
      _0x117884["each"](
        { focus: "focusin", blur: "focusout" },
        function (_0x770ebe, _0x2dee82) {
          var _0x21b513 = 0x0,
            _0x4ec6c4 = function (_0x1523e4) {
              _0x117884["event"]["simulate"](
                _0x2dee82,
                _0x1523e4["target"],
                _0x117884["event"]["fix"](_0x1523e4),
                !0x0
              );
            };
          _0x117884["event"]["special"][_0x2dee82] = {
            setup: function () {
              0x0 === _0x21b513++ &&
                _0x190c5d["addEventListener"](_0x770ebe, _0x4ec6c4, !0x0);
            },
            teardown: function () {
              0x0 === --_0x21b513 &&
                _0x190c5d["removeEventListener"](_0x770ebe, _0x4ec6c4, !0x0);
            },
          };
        }
      ),
    _0x117884["fn"]["extend"]({
      on: function (_0x1183c2, _0x5447ad, _0x490e90, _0x23461c, _0x3dbd97) {
        var _0x528b9e, _0x8b0803;
        if ("object" == typeof _0x1183c2) {
          "string" != typeof _0x5447ad &&
            ((_0x490e90 = _0x490e90 || _0x5447ad), (_0x5447ad = _0x549388));
          for (_0x8b0803 in _0x1183c2)
            this["on"](
              _0x8b0803,
              _0x5447ad,
              _0x490e90,
              _0x1183c2[_0x8b0803],
              _0x3dbd97
            );
          return this;
        }
        null == _0x490e90 && null == _0x23461c
          ? ((_0x23461c = _0x5447ad), (_0x490e90 = _0x5447ad = _0x549388))
          : null == _0x23461c &&
            ("string" == typeof _0x5447ad
              ? ((_0x23461c = _0x490e90), (_0x490e90 = _0x549388))
              : ((_0x23461c = _0x490e90),
                (_0x490e90 = _0x5447ad),
                (_0x5447ad = _0x549388)));
        if (!0x1 === _0x23461c) _0x23461c = _0x3521c2;
        else {
          if (!_0x23461c) return this;
        }
        return (
          0x1 === _0x3dbd97 &&
            ((_0x528b9e = _0x23461c),
            (_0x23461c = function (_0xad66ac) {
              return (
                _0x117884()["off"](_0xad66ac),
                _0x528b9e["apply"](this, arguments)
              );
            }),
            (_0x23461c["guid"] =
              _0x528b9e["guid"] || (_0x528b9e["guid"] = _0x117884["guid"]++))),
          this["each"](function () {
            _0x117884["event"]["add"](
              this,
              _0x1183c2,
              _0x23461c,
              _0x490e90,
              _0x5447ad
            );
          })
        );
      },
      one: function (_0x3030a9, _0x4c0c94, _0x444c61, _0x115f0c) {
        return this["on"](_0x3030a9, _0x4c0c94, _0x444c61, _0x115f0c, 0x1);
      },
      off: function (_0x49520d, _0x41e624, _0x3039a8) {
        var _0x2510e5, _0xd6c8f5;
        if (_0x49520d && _0x49520d["preventDefault"] && _0x49520d["handleObj"])
          return (
            (_0x2510e5 = _0x49520d["handleObj"]),
            _0x117884(_0x49520d["delegateTarget"])["off"](
              _0x2510e5["namespace"]
                ? _0x2510e5["origType"] + "." + _0x2510e5["namespace"]
                : _0x2510e5["origType"],
              _0x2510e5["selector"],
              _0x2510e5["handler"]
            ),
            this
          );
        if ("object" == typeof _0x49520d) {
          for (_0xd6c8f5 in _0x49520d)
            this["off"](_0xd6c8f5, _0x41e624, _0x49520d[_0xd6c8f5]);
          return this;
        }
        if (!0x1 === _0x41e624 || "function" == typeof _0x41e624)
          (_0x3039a8 = _0x41e624), (_0x41e624 = _0x549388);
        return (
          !0x1 === _0x3039a8 && (_0x3039a8 = _0x3521c2),
          this["each"](function () {
            _0x117884["event"]["remove"](this, _0x49520d, _0x3039a8, _0x41e624);
          })
        );
      },
      bind: function (_0x332a93, _0x2f35b7, _0x4fe90a) {
        return this["on"](_0x332a93, null, _0x2f35b7, _0x4fe90a);
      },
      unbind: function (_0x1db636, _0x3a0f23) {
        return this["off"](_0x1db636, null, _0x3a0f23);
      },
      live: function (_0x465462, _0xa24f16, _0x195965) {
        return (
          _0x117884(this["context"])["on"](
            _0x465462,
            this["selector"],
            _0xa24f16,
            _0x195965
          ),
          this
        );
      },
      die: function (_0x2d17a6, _0x34edd5) {
        return (
          _0x117884(this["context"])["off"](
            _0x2d17a6,
            this["selector"] || "**",
            _0x34edd5
          ),
          this
        );
      },
      delegate: function (_0x5dda3a, _0x1a76f0, _0x1fc3c8, _0x11848c) {
        return this["on"](_0x1a76f0, _0x5dda3a, _0x1fc3c8, _0x11848c);
      },
      undelegate: function (_0x4870d7, _0x2ffbfb, _0x2f9c07) {
        return 0x1 === arguments["length"]
          ? this["off"](_0x4870d7, "**")
          : this["off"](_0x2ffbfb, _0x4870d7 || "**", _0x2f9c07);
      },
      trigger: function (_0x420efe, _0x270cc3) {
        return this["each"](function () {
          _0x117884["event"]["trigger"](_0x420efe, _0x270cc3, this);
        });
      },
      triggerHandler: function (_0x241e74, _0x3cc500) {
        if (this[0x0])
          return _0x117884["event"]["trigger"](
            _0x241e74,
            _0x3cc500,
            this[0x0],
            !0x0
          );
      },
      toggle: function (_0x5ab1ef) {
        var _0x20beee = arguments,
          _0x1a3879 = _0x5ab1ef["guid"] || _0x117884["guid"]++,
          _0x12f2f3 = 0x0,
          _0xe95364 = function (_0x13f072) {
            var _0x4f2d53 =
              (_0x117884["_data"](this, "lastToggle" + _0x5ab1ef["guid"]) ||
                0x0) % _0x12f2f3;
            return (
              _0x117884["_data"](
                this,
                "lastToggle" + _0x5ab1ef["guid"],
                _0x4f2d53 + 0x1
              ),
              _0x13f072["preventDefault"](),
              _0x20beee[_0x4f2d53]["apply"](this, arguments) || !0x1
            );
          };
        for (_0xe95364["guid"] = _0x1a3879; _0x12f2f3 < _0x20beee["length"]; )
          _0x20beee[_0x12f2f3++]["guid"] = _0x1a3879;
        return this["click"](_0xe95364);
      },
      hover: function (_0x512510, _0x5ce8e6) {
        return this["mouseenter"](_0x512510)["mouseleave"](
          _0x5ce8e6 || _0x512510
        );
      },
    }),
    _0x117884["each"](
      "blur\x20focus\x20focusin\x20focusout\x20load\x20resize\x20scroll\x20unload\x20click\x20dblclick\x20mousedown\x20mouseup\x20mousemove\x20mouseover\x20mouseout\x20mouseenter\x20mouseleave\x20change\x20select\x20submit\x20keydown\x20keypress\x20keyup\x20error\x20contextmenu"[
        "split"
      ]("\x20"),
      function (_0x457b3d, _0x5dd0a0) {
        (_0x117884["fn"][_0x5dd0a0] = function (_0x18290d, _0x5a44e6) {
          return (
            null == _0x5a44e6 && ((_0x5a44e6 = _0x18290d), (_0x18290d = null)),
            0x0 < arguments["length"]
              ? this["on"](_0x5dd0a0, null, _0x18290d, _0x5a44e6)
              : this["trigger"](_0x5dd0a0)
          );
        }),
          _0x267e0b["test"](_0x5dd0a0) &&
            (_0x117884["event"]["fixHooks"][_0x5dd0a0] =
              _0x117884["event"]["keyHooks"]),
          _0x1a5f9d["test"](_0x5dd0a0) &&
            (_0x117884["event"]["fixHooks"][_0x5dd0a0] =
              _0x117884["event"]["mouseHooks"]);
      }
    );
  var _0x990363 = _0x42e8aa,
    _0x1c48e8 = function (_0x506088, _0x2ad7b6, _0x10e067, _0x34c73c) {
      (_0x10e067 = _0x10e067 || []), (_0x2ad7b6 = _0x2ad7b6 || _0x58a422);
      var _0x1a24f7,
        _0x433a43,
        _0x430a9f,
        _0x226d55,
        _0x2866a0 = _0x2ad7b6["nodeType"];
      if (!_0x506088 || "string" != typeof _0x506088) return _0x10e067;
      if (0x1 !== _0x2866a0 && 0x9 !== _0x2866a0) return [];
      _0x430a9f = _0x349c31(_0x2ad7b6);
      if (
        !_0x430a9f &&
        !_0x34c73c &&
        (_0x1a24f7 = _0x446265["exec"](_0x506088))
      ) {
        if ((_0x226d55 = _0x1a24f7[0x1])) {
          if (0x9 === _0x2866a0) {
            _0x433a43 = _0x2ad7b6["getElementById"](_0x226d55);
            if (!_0x433a43 || !_0x433a43["parentNode"]) return _0x10e067;
            if (_0x433a43["id"] === _0x226d55)
              return _0x10e067["push"](_0x433a43), _0x10e067;
          } else {
            if (
              _0x2ad7b6["ownerDocument"] &&
              (_0x433a43 =
                _0x2ad7b6["ownerDocument"]["getElementById"](_0x226d55)) &&
              _0x3d86c8(_0x2ad7b6, _0x433a43) &&
              _0x433a43["id"] === _0x226d55
            )
              return _0x10e067["push"](_0x433a43), _0x10e067;
          }
        } else {
          if (_0x1a24f7[0x2])
            return (
              _0x25d5a8["apply"](
                _0x10e067,
                _0x68171f["call"](
                  _0x2ad7b6["getElementsByTagName"](_0x506088),
                  0x0
                )
              ),
              _0x10e067
            );
          if (
            (_0x226d55 = _0x1a24f7[0x3]) &&
            _0x19c3a9 &&
            _0x2ad7b6["getElementsByClassName"]
          )
            return (
              _0x25d5a8["apply"](
                _0x10e067,
                _0x68171f["call"](
                  _0x2ad7b6["getElementsByClassName"](_0x226d55),
                  0x0
                )
              ),
              _0x10e067
            );
        }
      }
      return _0x58ff90(
        _0x506088["replace"](_0x54c04d, "$1"),
        _0x2ad7b6,
        _0x10e067,
        _0x34c73c,
        _0x430a9f
      );
    },
    _0x5a6b04 = function (_0x320a71) {
      return function (_0x305eb8) {
        return (
          "input" === _0x305eb8["nodeName"]["toLowerCase"]() &&
          _0x305eb8["type"] === _0x320a71
        );
      };
    },
    _0x3a6b7c = function (_0x1a1c76) {
      return function (_0x1d02fc) {
        var _0x45ebda = _0x1d02fc["nodeName"]["toLowerCase"]();
        return (
          ("input" === _0x45ebda || "button" === _0x45ebda) &&
          _0x1d02fc["type"] === _0x1a1c76
        );
      };
    },
    _0x531d6d = function (_0x5727b2) {
      return _0x2b582b(function (_0x4daa2f) {
        return (
          (_0x4daa2f = +_0x4daa2f),
          _0x2b582b(function (_0x29481d, _0x2b0d16) {
            for (
              var _0x3ad908,
                _0x1b071e = _0x5727b2([], _0x29481d["length"], _0x4daa2f),
                _0x2e9baa = _0x1b071e["length"];
              _0x2e9baa--;

            )
              _0x29481d[(_0x3ad908 = _0x1b071e[_0x2e9baa])] &&
                (_0x29481d[_0x3ad908] = !(_0x2b0d16[_0x3ad908] =
                  _0x29481d[_0x3ad908]));
          })
        );
      });
    },
    _0x359884 = function (_0x370c35, _0x2efe4e, _0x119889) {
      if (_0x370c35 === _0x2efe4e) return _0x119889;
      for (_0x370c35 = _0x370c35["nextSibling"]; _0x370c35; ) {
        if (_0x370c35 === _0x2efe4e) return -0x1;
        _0x370c35 = _0x370c35["nextSibling"];
      }
      return 0x1;
    },
    _0x3cda95 = function (_0x734baf, _0x2b1be8) {
      var _0x276f6a,
        _0x122ecd,
        _0x58228a,
        _0x4e704f,
        _0x285f03,
        _0x21d3a9,
        _0x1c9a82;
      if ((_0x285f03 = _0x24d801[_0x1ad2c2][_0x734baf]))
        return _0x2b1be8 ? 0x0 : _0x285f03["slice"](0x0);
      (_0x285f03 = _0x734baf), (_0x21d3a9 = []);
      for (_0x1c9a82 = _0x480f4c["preFilter"]; _0x285f03; ) {
        if (!_0x276f6a || (_0x122ecd = _0x953d95["exec"](_0x285f03)))
          _0x122ecd &&
            (_0x285f03 = _0x285f03["slice"](_0x122ecd[0x0]["length"])),
            _0x21d3a9["push"]((_0x58228a = []));
        _0x276f6a = !0x1;
        if ((_0x122ecd = _0x52fcf5["exec"](_0x285f03)))
          _0x58228a["push"]((_0x276f6a = new _0x45305f(_0x122ecd["shift"]()))),
            (_0x285f03 = _0x285f03["slice"](_0x276f6a["length"])),
            (_0x276f6a["type"] = _0x122ecd[0x0]["replace"](_0x54c04d, "\x20"));
        for (_0x4e704f in _0x480f4c["filter"])
          (_0x122ecd = _0x475f3c[_0x4e704f]["exec"](_0x285f03)) &&
            (!_0x1c9a82[_0x4e704f] ||
              (_0x122ecd = _0x1c9a82[_0x4e704f](_0x122ecd, _0x58a422, !0x0))) &&
            (_0x58228a["push"](
              (_0x276f6a = new _0x45305f(_0x122ecd["shift"]()))
            ),
            (_0x285f03 = _0x285f03["slice"](_0x276f6a["length"])),
            (_0x276f6a["type"] = _0x4e704f),
            (_0x276f6a["matches"] = _0x122ecd));
        if (!_0x276f6a) break;
      }
      return _0x2b1be8
        ? _0x285f03["length"]
        : _0x285f03
        ? _0x1c48e8["error"](_0x734baf)
        : _0x24d801(_0x734baf, _0x21d3a9)["slice"](0x0);
    },
    _0x365144 = function (_0x54c0ef, _0x3592aa, _0x54baa8) {
      var _0x411b3f = _0x3592aa["dir"],
        _0x104dba = _0x54baa8 && "parentNode" === _0x3592aa["dir"],
        _0x162202 = _0x6c156e++;
      return _0x3592aa["first"]
        ? function (_0x1386e7, _0x2d5b33, _0x57a938) {
            for (; (_0x1386e7 = _0x1386e7[_0x411b3f]); )
              if (_0x104dba || 0x1 === _0x1386e7["nodeType"])
                return _0x54c0ef(_0x1386e7, _0x2d5b33, _0x57a938);
          }
        : function (_0x3e8b9a, _0x19edc1, _0x1dec05) {
            if (_0x1dec05)
              for (; (_0x3e8b9a = _0x3e8b9a[_0x411b3f]); ) {
                if (
                  (_0x104dba || 0x1 === _0x3e8b9a["nodeType"]) &&
                  _0x54c0ef(_0x3e8b9a, _0x19edc1, _0x1dec05)
                )
                  return _0x3e8b9a;
              }
            else {
              for (
                var _0x1c37c6,
                  _0x123bf1 = _0x200474 + "\x20" + _0x162202 + "\x20",
                  _0x4040eb = _0x123bf1 + _0x279a21;
                (_0x3e8b9a = _0x3e8b9a[_0x411b3f]);

              )
                if (_0x104dba || 0x1 === _0x3e8b9a["nodeType"]) {
                  if ((_0x1c37c6 = _0x3e8b9a[_0x1ad2c2]) === _0x4040eb)
                    return _0x3e8b9a["sizset"];
                  if (
                    "string" == typeof _0x1c37c6 &&
                    0x0 === _0x1c37c6["indexOf"](_0x123bf1)
                  ) {
                    if (_0x3e8b9a["sizset"]) return _0x3e8b9a;
                  } else {
                    _0x3e8b9a[_0x1ad2c2] = _0x4040eb;
                    if (_0x54c0ef(_0x3e8b9a, _0x19edc1, _0x1dec05))
                      return (_0x3e8b9a["sizset"] = !0x0), _0x3e8b9a;
                    _0x3e8b9a["sizset"] = !0x1;
                  }
                }
            }
          };
    },
    _0x19fbdf = function (_0x528cab) {
      return 0x1 < _0x528cab["length"]
        ? function (_0x190fa5, _0x86880, _0x22056c) {
            for (var _0x5ca838 = _0x528cab["length"]; _0x5ca838--; )
              if (!_0x528cab[_0x5ca838](_0x190fa5, _0x86880, _0x22056c))
                return !0x1;
            return !0x0;
          }
        : _0x528cab[0x0];
    },
    _0x22f9a6 = function (
      _0x589929,
      _0x1c703c,
      _0x53a046,
      _0x325159,
      _0x33f775
    ) {
      for (
        var _0x5886b0,
          _0x760f21 = [],
          _0x292d06 = 0x0,
          _0x420c55 = _0x589929["length"],
          _0x24cd5c = null != _0x1c703c;
        _0x292d06 < _0x420c55;
        _0x292d06++
      )
        if ((_0x5886b0 = _0x589929[_0x292d06])) {
          if (!_0x53a046 || _0x53a046(_0x5886b0, _0x325159, _0x33f775))
            _0x760f21["push"](_0x5886b0),
              _0x24cd5c && _0x1c703c["push"](_0x292d06);
        }
      return _0x760f21;
    },
    _0x2d900c = function (
      _0x4894ae,
      _0x2f930a,
      _0x233262,
      _0x7403b5,
      _0xedbb74,
      _0x389f21
    ) {
      return (
        _0x7403b5 &&
          !_0x7403b5[_0x1ad2c2] &&
          (_0x7403b5 = _0x2d900c(_0x7403b5)),
        _0xedbb74 &&
          !_0xedbb74[_0x1ad2c2] &&
          (_0xedbb74 = _0x2d900c(_0xedbb74, _0x389f21)),
        _0x2b582b(function (_0x4329e5, _0x495b0d, _0x4c5e63, _0x170255) {
          if (!_0x4329e5 || !_0xedbb74) {
            var _0x1c4184,
              _0x172d7f,
              _0x3b84ec = [],
              _0x29f80f = [],
              _0x30b0f0 = _0x495b0d["length"];
            if (!(_0x172d7f = _0x4329e5)) {
              _0x172d7f = _0x2f930a || "*";
              var _0x5f2801 = _0x4c5e63["nodeType"] ? [_0x4c5e63] : _0x4c5e63,
                _0x315029 = [];
              _0x1c4184 = 0x0;
              for (
                var _0x3415a9 = _0x5f2801["length"];
                _0x1c4184 < _0x3415a9;
                _0x1c4184++
              )
                _0x1c48e8(
                  _0x172d7f,
                  _0x5f2801[_0x1c4184],
                  _0x315029,
                  _0x4329e5
                );
              _0x172d7f = _0x315029;
            }
            (_0x5f2801 =
              _0x4894ae && (_0x4329e5 || !_0x2f930a)
                ? _0x22f9a6(
                    _0x172d7f,
                    _0x3b84ec,
                    _0x4894ae,
                    _0x4c5e63,
                    _0x170255
                  )
                : _0x172d7f),
              (_0x315029 = _0x233262
                ? _0xedbb74 || (_0x4329e5 ? _0x4894ae : _0x30b0f0 || _0x7403b5)
                  ? []
                  : _0x495b0d
                : _0x5f2801),
              _0x233262 &&
                _0x233262(_0x5f2801, _0x315029, _0x4c5e63, _0x170255);
            if (_0x7403b5) {
              (_0x172d7f = _0x22f9a6(_0x315029, _0x29f80f)),
                _0x7403b5(_0x172d7f, [], _0x4c5e63, _0x170255);
              for (_0x4c5e63 = _0x172d7f["length"]; _0x4c5e63--; )
                if ((_0x1c4184 = _0x172d7f[_0x4c5e63]))
                  _0x315029[_0x29f80f[_0x4c5e63]] = !(_0x5f2801[
                    _0x29f80f[_0x4c5e63]
                  ] = _0x1c4184);
            }
            if (_0x4329e5)
              for (
                _0x4c5e63 = _0x4894ae && _0x315029["length"];
                _0x4c5e63--;

              ) {
                if ((_0x1c4184 = _0x315029[_0x4c5e63]))
                  _0x4329e5[_0x3b84ec[_0x4c5e63]] = !(_0x495b0d[
                    _0x3b84ec[_0x4c5e63]
                  ] = _0x1c4184);
              }
            else
              (_0x315029 = _0x22f9a6(
                _0x315029 === _0x495b0d
                  ? _0x315029["splice"](_0x30b0f0, _0x315029["length"])
                  : _0x315029
              )),
                _0xedbb74
                  ? _0xedbb74(null, _0x495b0d, _0x315029, _0x170255)
                  : _0x25d5a8["apply"](_0x495b0d, _0x315029);
          }
        })
      );
    },
    _0x236494 = function (_0xa6cbf8) {
      var _0x4484b3,
        _0x43c39a,
        _0x417969,
        _0x4e5741 = _0xa6cbf8["length"],
        _0x49a6ec = _0x480f4c["relative"][_0xa6cbf8[0x0]["type"]];
      _0x43c39a = _0x49a6ec || _0x480f4c["relative"]["\x20"];
      for (
        var _0x316db2 = _0x49a6ec ? 0x1 : 0x0,
          _0xe15f9 = _0x365144(
            function (_0x11b2ad) {
              return _0x11b2ad === _0x4484b3;
            },
            _0x43c39a,
            !0x0
          ),
          _0x192722 = _0x365144(
            function (_0x243025) {
              return -0x1 < _0x1c5973["call"](_0x4484b3, _0x243025);
            },
            _0x43c39a,
            !0x0
          ),
          _0x2c3742 = [
            function (_0x3b5a28, _0x475d78, _0x145a0f) {
              return (
                (!_0x49a6ec && (_0x145a0f || _0x475d78 !== _0x3dbb64)) ||
                ((_0x4484b3 = _0x475d78)["nodeType"]
                  ? _0xe15f9(_0x3b5a28, _0x475d78, _0x145a0f)
                  : _0x192722(_0x3b5a28, _0x475d78, _0x145a0f))
              );
            },
          ];
        _0x316db2 < _0x4e5741;
        _0x316db2++
      )
        if ((_0x43c39a = _0x480f4c["relative"][_0xa6cbf8[_0x316db2]["type"]]))
          _0x2c3742 = [_0x365144(_0x19fbdf(_0x2c3742), _0x43c39a)];
        else {
          _0x43c39a = _0x480f4c["filter"][_0xa6cbf8[_0x316db2]["type"]][
            "apply"
          ](null, _0xa6cbf8[_0x316db2]["matches"]);
          if (_0x43c39a[_0x1ad2c2]) {
            for (
              _0x417969 = ++_0x316db2;
              _0x417969 < _0x4e5741 &&
              !_0x480f4c["relative"][_0xa6cbf8[_0x417969]["type"]];
              _0x417969++
            );
            return _0x2d900c(
              0x1 < _0x316db2 && _0x19fbdf(_0x2c3742),
              0x1 < _0x316db2 &&
                _0xa6cbf8["slice"](0x0, _0x316db2 - 0x1)
                  ["join"]("")
                  ["replace"](_0x54c04d, "$1"),
              _0x43c39a,
              _0x316db2 < _0x417969 &&
                _0x236494(_0xa6cbf8["slice"](_0x316db2, _0x417969)),
              _0x417969 < _0x4e5741 &&
                _0x236494((_0xa6cbf8 = _0xa6cbf8["slice"](_0x417969))),
              _0x417969 < _0x4e5741 && _0xa6cbf8["join"]("")
            );
          }
          _0x2c3742["push"](_0x43c39a);
        }
      return _0x19fbdf(_0x2c3742);
    },
    _0x58ff90 = function (
      _0x21bcbf,
      _0x2992b9,
      _0x2aa790,
      _0x590ada,
      _0x4a93dc
    ) {
      var _0x4a9f24,
        _0x2ad73c,
        _0x2ba738,
        _0x56beb6,
        _0x33665c = _0x3cda95(_0x21bcbf);
      if (!_0x590ada && 0x1 === _0x33665c["length"]) {
        _0x2ad73c = _0x33665c[0x0] = _0x33665c[0x0]["slice"](0x0);
        if (
          0x2 < _0x2ad73c["length"] &&
          "ID" === (_0x2ba738 = _0x2ad73c[0x0])["type"] &&
          0x9 === _0x2992b9["nodeType"] &&
          !_0x4a93dc &&
          _0x480f4c["relative"][_0x2ad73c[0x1]["type"]]
        ) {
          _0x2992b9 = _0x480f4c["find"]["ID"](
            _0x2ba738["matches"][0x0]["replace"](_0x4041e1, ""),
            _0x2992b9,
            _0x4a93dc
          )[0x0];
          if (!_0x2992b9) return _0x2aa790;
          _0x21bcbf = _0x21bcbf["slice"](_0x2ad73c["shift"]()["length"]);
        }
        for (
          _0x4a9f24 = _0x475f3c["POS"]["test"](_0x21bcbf)
            ? -0x1
            : _0x2ad73c["length"] - 0x1;
          0x0 <= _0x4a9f24;
          _0x4a9f24--
        ) {
          _0x2ba738 = _0x2ad73c[_0x4a9f24];
          if (_0x480f4c["relative"][(_0x56beb6 = _0x2ba738["type"])]) break;
          if ((_0x56beb6 = _0x480f4c["find"][_0x56beb6])) {
            if (
              (_0x590ada = _0x56beb6(
                _0x2ba738["matches"][0x0]["replace"](_0x4041e1, ""),
                (_0x2ca348["test"](_0x2ad73c[0x0]["type"]) &&
                  _0x2992b9["parentNode"]) ||
                  _0x2992b9,
                _0x4a93dc
              ))
            ) {
              _0x2ad73c["splice"](_0x4a9f24, 0x1),
                (_0x21bcbf = _0x590ada["length"] && _0x2ad73c["join"](""));
              if (!_0x21bcbf)
                return (
                  _0x25d5a8["apply"](
                    _0x2aa790,
                    _0x68171f["call"](_0x590ada, 0x0)
                  ),
                  _0x2aa790
                );
              break;
            }
          }
        }
      }
      return (
        _0x3ca624(_0x21bcbf, _0x33665c)(
          _0x590ada,
          _0x2992b9,
          _0x4a93dc,
          _0x2aa790,
          _0x2ca348["test"](_0x21bcbf)
        ),
        _0x2aa790
      );
    },
    _0x31e1c5 = function () {},
    _0x279a21,
    _0x37c65b,
    _0x480f4c,
    _0x198185,
    _0x349c31,
    _0x3d86c8,
    _0x3ca624,
    _0x4bc499,
    _0x10f745,
    _0x3dbb64,
    _0x5563e0 = !0x0,
    _0x1ad2c2 = ("sizcache" + Math["random"]())["replace"](".", ""),
    _0x45305f = String,
    _0x58a422 = _0x990363["document"],
    _0x3147c3 = _0x58a422["documentElement"],
    _0x200474 = 0x0,
    _0x6c156e = 0x0,
    _0x2714d2 = []["pop"],
    _0x25d5a8 = []["push"],
    _0x68171f = []["slice"],
    _0x1c5973 =
      []["indexOf"] ||
      function (_0x5a4d14) {
        for (
          var _0x5ef9dd = 0x0, _0x2e6cf1 = this["length"];
          _0x5ef9dd < _0x2e6cf1;
          _0x5ef9dd++
        )
          if (this[_0x5ef9dd] === _0x5a4d14) return _0x5ef9dd;
        return -0x1;
      },
    _0x2b582b = function (_0x9c7997, _0x221994) {
      return (_0x9c7997[_0x1ad2c2] = null == _0x221994 || _0x221994), _0x9c7997;
    },
    _0x268936 = function () {
      var _0x4a1f88 = {},
        _0x39c41b = [];
      return _0x2b582b(function (_0x41ab86, _0x401517) {
        return (
          _0x39c41b["push"](_0x41ab86) > _0x480f4c["cacheLength"] &&
            delete _0x4a1f88[_0x39c41b["shift"]()],
          (_0x4a1f88[_0x41ab86] = _0x401517)
        );
      }, _0x4a1f88);
    },
    _0x5313bb = _0x268936(),
    _0x24d801 = _0x268936(),
    _0x479dfb = _0x268936(),
    _0x41ba18 =
      "\x5c[[\x5cx20\x5ct\x5cr\x5cn\x5cf]*((?:\x5c\x5c.|[-\x5cw]|[^\x5cx00-\x5cxa0])+)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:([*^$|!~]?=)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:([\x27\x22])((?:\x5c\x5c.|[^\x5c\x5c])*?)\x5c3|(" +
      "(?:\x5c\x5c.|[-\x5cw]|[^\x5cx00-\x5cxa0])+"["replace"]("w", "w#") +
      ")|)|)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*\x5c]",
    _0xdb3e25 =
      ":((?:\x5c\x5c.|[-\x5cw]|[^\x5cx00-\x5cxa0])+)(?:\x5c((?:([\x27\x22])((?:\x5c\x5c.|[^\x5c\x5c])*?)\x5c2|([^()[\x5c]]*|(?:(?:" +
      _0x41ba18 +
      ")|[^:]|\x5c\x5c.)*|.*))\x5c)|)",
    _0x54c04d = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
    _0x953d95 = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
    _0x52fcf5 = /^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/,
    _0x31a81b = RegExp(_0xdb3e25),
    _0x446265 = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
    _0x2ca348 = /[\x20\t\r\n\f]*[+~]/,
    _0x1fea99 = /h\d/i,
    _0x3c6835 = /input|select|textarea|button/i,
    _0x4041e1 = /\\(?!\\)/g,
    _0x475f3c = {
      ID: /^#((?:\\.|[-\w]|[^\x00-\xa0])+)/,
      CLASS: /^\.((?:\\.|[-\w]|[^\x00-\xa0])+)/,
      NAME: /^\[name=['"]?((?:\\.|[-\w]|[^\x00-\xa0])+)['"]?\]/,
      TAG: RegExp(
        "^(" +
          "(?:\x5c\x5c.|[-\x5cw]|[^\x5cx00-\x5cxa0])+"["replace"]("w", "w*") +
          ")"
      ),
      ATTR: RegExp("^" + _0x41ba18),
      PSEUDO: RegExp("^" + _0xdb3e25),
      POS: /:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i,
      CHILD: RegExp(
        "^:(only|nth|first|last)-child(?:\x5c([\x5cx20\x5ct\x5cr\x5cn\x5cf]*(even|odd|(([+-]|)(\x5cd*)n|)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:([+-]|)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(\x5cd+)|))[\x5cx20\x5ct\x5cr\x5cn\x5cf]*\x5c)|)",
        "i"
      ),
      needsContext: RegExp(
        "^[\x5cx20\x5ct\x5cr\x5cn\x5cf]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\x5c([\x5cx20\x5ct\x5cr\x5cn\x5cf]*((?:-\x5cd)?\x5cd*)[\x5cx20\x5ct\x5cr\x5cn\x5cf]*\x5c)|)(?=[^-]|$)",
        "i"
      ),
    },
    _0x4b0ee8 = function (_0x4aa881) {
      var _0x2957e1 = _0x58a422["createElement"]("div");
      try {
        return _0x4aa881(_0x2957e1);
      } catch (_0x30780c) {
        return !0x1;
      } finally {
      }
    },
    _0x113ab9 = _0x4b0ee8(function (_0x2e7f24) {
      return (
        _0x2e7f24["appendChild"](_0x58a422["createComment"]("")),
        !_0x2e7f24["getElementsByTagName"]("*")["length"]
      );
    }),
    _0xa04f4b = _0x4b0ee8(function (_0x46e413) {
      return (
        (_0x46e413["innerHTML"] = "<a\x20href=\x27#\x27></a>"),
        _0x46e413["firstChild"] &&
          "undefined" !== typeof _0x46e413["firstChild"]["getAttribute"] &&
          "#" === _0x46e413["firstChild"]["getAttribute"]("href")
      );
    }),
    _0x348e10 = _0x4b0ee8(function (_0x1cd372) {
      return (
        (_0x1cd372["innerHTML"] = "<select></select>"),
        (_0x1cd372 = typeof _0x1cd372["lastChild"]["getAttribute"]("multiple")),
        "boolean" !== _0x1cd372 && "string" !== _0x1cd372
      );
    }),
    _0x19c3a9 = _0x4b0ee8(function (_0x486f21) {
      return (
        (_0x486f21["innerHTML"] =
          "<div\x20class=\x27hidden\x20e\x27></div><div\x20class=\x27hidden\x27></div>"),
        !_0x486f21["getElementsByClassName"] ||
        !_0x486f21["getElementsByClassName"]("e")["length"]
          ? !0x1
          : ((_0x486f21["lastChild"]["className"] = "e"),
            0x2 === _0x486f21["getElementsByClassName"]("e")["length"])
      );
    }),
    _0x3159c = _0x4b0ee8(function (_0xe1e28f) {
      (_0xe1e28f["id"] = _0x1ad2c2 + 0x0),
        (_0xe1e28f["innerHTML"] =
          "<a\x20name=\x27" +
          _0x1ad2c2 +
          "\x27></a><div\x20name=\x27" +
          _0x1ad2c2 +
          "\x27></div>"),
        _0x3147c3["insertBefore"](_0xe1e28f, _0x3147c3["firstChild"]);
      var _0x51fa82 =
        _0x58a422["getElementsByName"] &&
        _0x58a422["getElementsByName"](_0x1ad2c2)["length"] ===
          0x2 + _0x58a422["getElementsByName"](_0x1ad2c2 + 0x0)["length"];
      return (
        (_0x37c65b = !_0x58a422["getElementById"](_0x1ad2c2)),
        _0x3147c3["removeChild"](_0xe1e28f),
        _0x51fa82
      );
    });
  try {
    _0x68171f["call"](_0x3147c3["childNodes"], 0x0)[0x0]["nodeType"];
  } catch (_0x2dbd31) {
    _0x68171f = function (_0x3c194c) {
      for (
        var _0x2114b6, _0x2cc30c = [];
        (_0x2114b6 = this[_0x3c194c]);
        _0x3c194c++
      )
        _0x2cc30c["push"](_0x2114b6);
      return _0x2cc30c;
    };
  }
  (_0x1c48e8["matches"] = function (_0x2635fa, _0x38fd9f) {
    return _0x1c48e8(_0x2635fa, null, null, _0x38fd9f);
  }),
    (_0x1c48e8["matchesSelector"] = function (_0x46b13e, _0x5569b7) {
      return 0x0 < _0x1c48e8(_0x5569b7, null, null, [_0x46b13e])["length"];
    }),
    (_0x198185 = _0x1c48e8["getText"] =
      function (_0x2ae922) {
        var _0x1e35a9,
          _0x504f75 = "",
          _0x43603d = 0x0;
        if ((_0x1e35a9 = _0x2ae922["nodeType"])) {
          if (0x1 === _0x1e35a9 || 0x9 === _0x1e35a9 || 0xb === _0x1e35a9) {
            if ("string" == typeof _0x2ae922["textContent"])
              return _0x2ae922["textContent"];
            for (
              _0x2ae922 = _0x2ae922["firstChild"];
              _0x2ae922;
              _0x2ae922 = _0x2ae922["nextSibling"]
            )
              _0x504f75 += _0x198185(_0x2ae922);
          } else {
            if (0x3 === _0x1e35a9 || 0x4 === _0x1e35a9)
              return _0x2ae922["nodeValue"];
          }
        } else {
          for (; (_0x1e35a9 = _0x2ae922[_0x43603d]); _0x43603d++)
            _0x504f75 += _0x198185(_0x1e35a9);
        }
        return _0x504f75;
      }),
    (_0x349c31 = _0x1c48e8["isXML"] =
      function (_0x588f70) {
        return (_0x588f70 =
          _0x588f70 &&
          (_0x588f70["ownerDocument"] || _0x588f70)["documentElement"])
          ? "HTML" !== _0x588f70["nodeName"]
          : !0x1;
      }),
    (_0x3d86c8 = _0x1c48e8["contains"] =
      _0x3147c3["contains"]
        ? function (_0x5204d8, _0x5f55e6) {
            var _0x50f1ad =
                0x9 === _0x5204d8["nodeType"]
                  ? _0x5204d8["documentElement"]
                  : _0x5204d8,
              _0x444248 = _0x5f55e6 && _0x5f55e6["parentNode"];
            return (
              _0x5204d8 === _0x444248 ||
              !(
                !_0x444248 ||
                !(
                  0x1 === _0x444248["nodeType"] &&
                  _0x50f1ad["contains"] &&
                  _0x50f1ad["contains"](_0x444248)
                )
              )
            );
          }
        : _0x3147c3["compareDocumentPosition"]
        ? function (_0x50bf88, _0x2349f7) {
            return (
              _0x2349f7 &&
              !!(_0x50bf88["compareDocumentPosition"](_0x2349f7) & 0x10)
            );
          }
        : function (_0x2337bb, _0x152c1b) {
            for (; (_0x152c1b = _0x152c1b["parentNode"]); )
              if (_0x152c1b === _0x2337bb) return !0x0;
            return !0x1;
          }),
    (_0x1c48e8["attr"] = function (_0x5f36f7, _0x22f866) {
      var _0x1086b9,
        _0xd2b07e = _0x349c31(_0x5f36f7);
      return (
        _0xd2b07e || (_0x22f866 = _0x22f866["toLowerCase"]()),
        (_0x1086b9 = _0x480f4c["attrHandle"][_0x22f866])
          ? _0x1086b9(_0x5f36f7)
          : _0xd2b07e || _0x348e10
          ? _0x5f36f7["getAttribute"](_0x22f866)
          : ((_0x1086b9 = _0x5f36f7["getAttributeNode"](_0x22f866)),
            _0x1086b9
              ? "boolean" == typeof _0x5f36f7[_0x22f866]
                ? _0x5f36f7[_0x22f866]
                  ? _0x22f866
                  : null
                : _0x1086b9["specified"]
                ? _0x1086b9["value"]
                : null
              : null)
      );
    }),
    (_0x480f4c = _0x1c48e8["selectors"] =
      {
        cacheLength: 0x32,
        createPseudo: _0x2b582b,
        match: _0x475f3c,
        attrHandle: _0xa04f4b
          ? {}
          : {
              href: function (_0x554ec5) {
                return _0x554ec5["getAttribute"]("href", 0x2);
              },
              type: function (_0x25b248) {
                return _0x25b248["getAttribute"]("type");
              },
            },
        find: {
          ID: _0x37c65b
            ? function (_0x147a4e, _0x5a24b1, _0x3a353c) {
                if (
                  "undefined" !== typeof _0x5a24b1["getElementById"] &&
                  !_0x3a353c
                )
                  return (_0x147a4e = _0x5a24b1["getElementById"](_0x147a4e)) &&
                    _0x147a4e["parentNode"]
                    ? [_0x147a4e]
                    : [];
              }
            : function (_0x310d09, _0x1b4f6d, _0x5b65d5) {
                if (
                  "undefined" !== typeof _0x1b4f6d["getElementById"] &&
                  !_0x5b65d5
                )
                  return (_0x1b4f6d = _0x1b4f6d["getElementById"](_0x310d09))
                    ? _0x1b4f6d["id"] === _0x310d09 ||
                      ("undefined" !== typeof _0x1b4f6d["getAttributeNode"] &&
                        _0x1b4f6d["getAttributeNode"]("id")["value"] ===
                          _0x310d09)
                      ? [_0x1b4f6d]
                      : void 0x0
                    : [];
              },
          TAG: _0x113ab9
            ? function (_0x2f5ed7, _0xe39584) {
                if ("undefined" !== typeof _0xe39584["getElementsByTagName"])
                  return _0xe39584["getElementsByTagName"](_0x2f5ed7);
              }
            : function (_0x206c2e, _0x469871) {
                var _0x212262 = _0x469871["getElementsByTagName"](_0x206c2e);
                if ("*" === _0x206c2e) {
                  for (
                    var _0x5e0af9, _0xb7fa3c = [], _0x5c91fb = 0x0;
                    (_0x5e0af9 = _0x212262[_0x5c91fb]);
                    _0x5c91fb++
                  )
                    0x1 === _0x5e0af9["nodeType"] &&
                      _0xb7fa3c["push"](_0x5e0af9);
                  return _0xb7fa3c;
                }
                return _0x212262;
              },
          NAME:
            _0x3159c &&
            function (_0x2fea40, _0x11c84b) {
              if ("undefined" !== typeof _0x11c84b["getElementsByName"])
                return _0x11c84b["getElementsByName"](name);
            },
          CLASS:
            _0x19c3a9 &&
            function (_0x536cbc, _0x5211b4, _0x1b6ace) {
              if (
                "undefined" !== typeof _0x5211b4["getElementsByClassName"] &&
                !_0x1b6ace
              )
                return _0x5211b4["getElementsByClassName"](_0x536cbc);
            },
        },
        relative: {
          ">": { dir: "parentNode", first: !0x0 },
          "\x20": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0x0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (_0x822d20) {
            return (
              (_0x822d20[0x1] = _0x822d20[0x1]["replace"](_0x4041e1, "")),
              (_0x822d20[0x3] = (_0x822d20[0x4] || _0x822d20[0x5] || "")[
                "replace"
              ](_0x4041e1, "")),
              "~=" === _0x822d20[0x2] &&
                (_0x822d20[0x3] = "\x20" + _0x822d20[0x3] + "\x20"),
              _0x822d20["slice"](0x0, 0x4)
            );
          },
          CHILD: function (_0x20c048) {
            return (
              (_0x20c048[0x1] = _0x20c048[0x1]["toLowerCase"]()),
              "nth" === _0x20c048[0x1]
                ? (_0x20c048[0x2] || _0x1c48e8["error"](_0x20c048[0x0]),
                  (_0x20c048[0x3] = +(_0x20c048[0x3]
                    ? _0x20c048[0x4] + (_0x20c048[0x5] || 0x1)
                    : 0x2 *
                      ("even" === _0x20c048[0x2] || "odd" === _0x20c048[0x2]))),
                  (_0x20c048[0x4] = +(
                    _0x20c048[0x6] + _0x20c048[0x7] || "odd" === _0x20c048[0x2]
                  )))
                : _0x20c048[0x2] && _0x1c48e8["error"](_0x20c048[0x0]),
              _0x20c048
            );
          },
          PSEUDO: function (_0x145bec) {
            var _0x344b21, _0x6ce637;
            if (_0x475f3c["CHILD"]["test"](_0x145bec[0x0])) return null;
            if (_0x145bec[0x3]) _0x145bec[0x2] = _0x145bec[0x3];
            else {
              if ((_0x344b21 = _0x145bec[0x4]))
                _0x31a81b["test"](_0x344b21) &&
                  (_0x6ce637 = _0x3cda95(_0x344b21, !0x0)) &&
                  (_0x6ce637 =
                    _0x344b21["indexOf"](")", _0x344b21["length"] - _0x6ce637) -
                    _0x344b21["length"]) &&
                  ((_0x344b21 = _0x344b21["slice"](0x0, _0x6ce637)),
                  (_0x145bec[0x0] = _0x145bec[0x0]["slice"](0x0, _0x6ce637))),
                  (_0x145bec[0x2] = _0x344b21);
            }
            return _0x145bec["slice"](0x0, 0x3);
          },
        },
        filter: {
          ID: _0x37c65b
            ? function (_0x2b7090) {
                return (
                  (_0x2b7090 = _0x2b7090["replace"](_0x4041e1, "")),
                  function (_0x820e7a) {
                    return _0x820e7a["getAttribute"]("id") === _0x2b7090;
                  }
                );
              }
            : function (_0x303b3b) {
                return (
                  (_0x303b3b = _0x303b3b["replace"](_0x4041e1, "")),
                  function (_0x3e9d7e) {
                    return (
                      (_0x3e9d7e =
                        "undefined" !== typeof _0x3e9d7e["getAttributeNode"] &&
                        _0x3e9d7e["getAttributeNode"]("id")) &&
                      _0x3e9d7e["value"] === _0x303b3b
                    );
                  }
                );
              },
          TAG: function (_0x493afb) {
            return "*" === _0x493afb
              ? function () {
                  return !0x0;
                }
              : ((_0x493afb = _0x493afb["replace"](_0x4041e1, "")[
                  "toLowerCase"
                ]()),
                function (_0x2468f3) {
                  return (
                    _0x2468f3["nodeName"] &&
                    _0x2468f3["nodeName"]["toLowerCase"]() === _0x493afb
                  );
                });
          },
          CLASS: function (_0x4a766a) {
            var _0x471ab9 = _0x5313bb[_0x1ad2c2][_0x4a766a];
            return (
              _0x471ab9 ||
                (_0x471ab9 = _0x5313bb(
                  _0x4a766a,
                  RegExp(
                    "(^|[\x5cx20\x5ct\x5cr\x5cn\x5cf])" +
                      _0x4a766a +
                      "([\x5cx20\x5ct\x5cr\x5cn\x5cf]|$)"
                  )
                )),
              function (_0x114770) {
                return _0x471ab9["test"](
                  _0x114770["className"] ||
                    ("undefined" !== typeof _0x114770["getAttribute"] &&
                      _0x114770["getAttribute"]("class")) ||
                    ""
                );
              }
            );
          },
          ATTR: function (_0x372575, _0x174ba4, _0xb090ec) {
            return function (_0x42d5c7) {
              return (
                (_0x42d5c7 = _0x1c48e8["attr"](_0x42d5c7, _0x372575)),
                null == _0x42d5c7
                  ? "!=" === _0x174ba4
                  : _0x174ba4
                  ? ((_0x42d5c7 += ""),
                    "=" === _0x174ba4
                      ? _0x42d5c7 === _0xb090ec
                      : "!=" === _0x174ba4
                      ? _0x42d5c7 !== _0xb090ec
                      : "^=" === _0x174ba4
                      ? _0xb090ec && 0x0 === _0x42d5c7["indexOf"](_0xb090ec)
                      : "*=" === _0x174ba4
                      ? _0xb090ec && -0x1 < _0x42d5c7["indexOf"](_0xb090ec)
                      : "$=" === _0x174ba4
                      ? _0xb090ec &&
                        _0x42d5c7["substr"](
                          _0x42d5c7["length"] - _0xb090ec["length"]
                        ) === _0xb090ec
                      : "~=" === _0x174ba4
                      ? -0x1 <
                        ("\x20" + _0x42d5c7 + "\x20")["indexOf"](_0xb090ec)
                      : "|=" === _0x174ba4
                      ? _0x42d5c7 === _0xb090ec ||
                        _0x42d5c7["substr"](0x0, _0xb090ec["length"] + 0x1) ===
                          _0xb090ec + "-"
                      : !0x1)
                  : !0x0
              );
            };
          },
          CHILD: function (_0x2447a3, _0xb6b4cb, _0x2a3073, _0x2a185a) {
            return "nth" === _0x2447a3
              ? function (_0x48f11d) {
                  var _0xa2b761, _0xf07895;
                  _0xa2b761 = _0x48f11d["parentNode"];
                  if (0x1 === _0x2a3073 && 0x0 === _0x2a185a) return !0x0;
                  if (_0xa2b761) {
                    _0xf07895 = 0x0;
                    for (
                      _0xa2b761 = _0xa2b761["firstChild"];
                      _0xa2b761 &&
                      !(
                        0x1 === _0xa2b761["nodeType"] &&
                        (_0xf07895++, _0x48f11d === _0xa2b761)
                      );
                      _0xa2b761 = _0xa2b761["nextSibling"]
                    );
                  }
                  return (
                    (_0xf07895 -= _0x2a185a),
                    _0xf07895 === _0x2a3073 ||
                      (0x0 === _0xf07895 % _0x2a3073 &&
                        0x0 <= _0xf07895 / _0x2a3073)
                  );
                }
              : function (_0x3282ee) {
                  var _0x2df207 = _0x3282ee;
                  switch (_0x2447a3) {
                    case "only":
                    case "first":
                      for (; (_0x2df207 = _0x2df207["previousSibling"]); )
                        if (0x1 === _0x2df207["nodeType"]) return !0x1;
                      if ("first" === _0x2447a3) return !0x0;
                      _0x2df207 = _0x3282ee;
                    case "last":
                      for (; (_0x2df207 = _0x2df207["nextSibling"]); )
                        if (0x1 === _0x2df207["nodeType"]) return !0x1;
                      return !0x0;
                  }
                };
          },
          PSEUDO: function (_0x2c67c5, _0x532be8) {
            var _0x2cc81a,
              _0x4269f8 =
                _0x480f4c["pseudos"][_0x2c67c5] ||
                _0x480f4c["setFilters"][_0x2c67c5["toLowerCase"]()] ||
                _0x1c48e8["error"]("unsupported\x20pseudo:\x20" + _0x2c67c5);
            return _0x4269f8[_0x1ad2c2]
              ? _0x4269f8(_0x532be8)
              : 0x1 < _0x4269f8["length"]
              ? ((_0x2cc81a = [_0x2c67c5, _0x2c67c5, "", _0x532be8]),
                _0x480f4c["setFilters"]["hasOwnProperty"](
                  _0x2c67c5["toLowerCase"]()
                )
                  ? _0x2b582b(function (_0x14bc75, _0x4d8b17) {
                      for (
                        var _0x24fb12,
                          _0x2b0f53 = _0x4269f8(_0x14bc75, _0x532be8),
                          _0x25d208 = _0x2b0f53["length"];
                        _0x25d208--;

                      )
                        (_0x24fb12 = _0x1c5973["call"](
                          _0x14bc75,
                          _0x2b0f53[_0x25d208]
                        )),
                          (_0x14bc75[_0x24fb12] = !(_0x4d8b17[_0x24fb12] =
                            _0x2b0f53[_0x25d208]));
                    })
                  : function (_0xeac9a4) {
                      return _0x4269f8(_0xeac9a4, 0x0, _0x2cc81a);
                    })
              : _0x4269f8;
          },
        },
        pseudos: {
          not: _0x2b582b(function (_0x5c5506) {
            var _0x4c4525 = [],
              _0x359038 = [],
              _0x5aaef7 = _0x3ca624(_0x5c5506["replace"](_0x54c04d, "$1"));
            return _0x5aaef7[_0x1ad2c2]
              ? _0x2b582b(function (
                  _0x281e8b,
                  _0xf8cb59,
                  _0x1d91bb,
                  _0x23bba0
                ) {
                  _0x23bba0 = _0x5aaef7(_0x281e8b, null, _0x23bba0, []);
                  for (var _0x2b6707 = _0x281e8b["length"]; _0x2b6707--; )
                    if ((_0x1d91bb = _0x23bba0[_0x2b6707]))
                      _0x281e8b[_0x2b6707] = !(_0xf8cb59[_0x2b6707] =
                        _0x1d91bb);
                })
              : function (_0x1828b3, _0x4770c7, _0x33063e) {
                  return (
                    (_0x4c4525[0x0] = _0x1828b3),
                    _0x5aaef7(_0x4c4525, null, _0x33063e, _0x359038),
                    !_0x359038["pop"]()
                  );
                };
          }),
          has: _0x2b582b(function (_0x518f81) {
            return function (_0x16d8d9) {
              return 0x0 < _0x1c48e8(_0x518f81, _0x16d8d9)["length"];
            };
          }),
          contains: _0x2b582b(function (_0x3f5049) {
            return function (_0xb05f0c) {
              return (
                -0x1 <
                (_0xb05f0c["textContent"] ||
                  _0xb05f0c["innerText"] ||
                  _0x198185(_0xb05f0c))["indexOf"](_0x3f5049)
              );
            };
          }),
          enabled: function (_0x5a6f74) {
            return !0x1 === _0x5a6f74["disabled"];
          },
          disabled: function (_0x4ce0a5) {
            return !0x0 === _0x4ce0a5["disabled"];
          },
          checked: function (_0x440950) {
            var _0x4dd856 = _0x440950["nodeName"]["toLowerCase"]();
            return (
              ("input" === _0x4dd856 && !!_0x440950["checked"]) ||
              ("option" === _0x4dd856 && !!_0x440950["selected"])
            );
          },
          selected: function (_0x27535d) {
            return (
              _0x27535d["parentNode"] &&
                _0x27535d["parentNode"]["selectedIndex"],
              !0x0 === _0x27535d["selected"]
            );
          },
          parent: function (_0x18b3ab) {
            return !_0x480f4c["pseudos"]["empty"](_0x18b3ab);
          },
          empty: function (_0x3308f9) {
            var _0x545c59;
            for (_0x3308f9 = _0x3308f9["firstChild"]; _0x3308f9; ) {
              if (
                "@" < _0x3308f9["nodeName"] ||
                0x3 === (_0x545c59 = _0x3308f9["nodeType"]) ||
                0x4 === _0x545c59
              )
                return !0x1;
              _0x3308f9 = _0x3308f9["nextSibling"];
            }
            return !0x0;
          },
          header: function (_0x38d391) {
            return _0x1fea99["test"](_0x38d391["nodeName"]);
          },
          text: function (_0x11e1f6) {
            var _0x5e4fc7, _0x431011;
            return (
              "input" === _0x11e1f6["nodeName"]["toLowerCase"]() &&
              "text" === (_0x5e4fc7 = _0x11e1f6["type"]) &&
              (null == (_0x431011 = _0x11e1f6["getAttribute"]("type")) ||
                _0x431011["toLowerCase"]() === _0x5e4fc7)
            );
          },
          radio: _0x5a6b04("radio"),
          checkbox: _0x5a6b04("checkbox"),
          file: _0x5a6b04("file"),
          password: _0x5a6b04("password"),
          image: _0x5a6b04("image"),
          submit: _0x3a6b7c("submit"),
          reset: _0x3a6b7c("reset"),
          button: function (_0x3febae) {
            var _0x6f8861 = _0x3febae["nodeName"]["toLowerCase"]();
            return (
              ("input" === _0x6f8861 && "button" === _0x3febae["type"]) ||
              "button" === _0x6f8861
            );
          },
          input: function (_0x8b50c9) {
            return _0x3c6835["test"](_0x8b50c9["nodeName"]);
          },
          focus: function (_0xfe7bb2) {
            var _0x3d2dc5 = _0xfe7bb2["ownerDocument"];
            return (
              _0xfe7bb2 === _0x3d2dc5["activeElement"] &&
              (!_0x3d2dc5["hasFocus"] || _0x3d2dc5["hasFocus"]()) &&
              (!!_0xfe7bb2["type"] || !!_0xfe7bb2["href"])
            );
          },
          active: function (_0x17114e) {
            return _0x17114e === _0x17114e["ownerDocument"]["activeElement"];
          },
          first: _0x531d6d(function () {
            return [0x0];
          }),
          last: _0x531d6d(function (_0x3274fe, _0x5b0901) {
            return [_0x5b0901 - 0x1];
          }),
          eq: _0x531d6d(function (_0x390426, _0x32e43a, _0x5208f3) {
            return [0x0 > _0x5208f3 ? _0x5208f3 + _0x32e43a : _0x5208f3];
          }),
          even: _0x531d6d(function (_0x1efeb0, _0x54ca0e) {
            for (var _0x44b65c = 0x0; _0x44b65c < _0x54ca0e; _0x44b65c += 0x2)
              _0x1efeb0["push"](_0x44b65c);
            return _0x1efeb0;
          }),
          odd: _0x531d6d(function (_0x1b1ed1, _0x436d61) {
            for (var _0x5cc712 = 0x1; _0x5cc712 < _0x436d61; _0x5cc712 += 0x2)
              _0x1b1ed1["push"](_0x5cc712);
            return _0x1b1ed1;
          }),
          lt: _0x531d6d(function (_0x615852, _0x42aa8f, _0x302b14) {
            for (
              _0x42aa8f = 0x0 > _0x302b14 ? _0x302b14 + _0x42aa8f : _0x302b14;
              0x0 <= --_0x42aa8f;

            )
              _0x615852["push"](_0x42aa8f);
            return _0x615852;
          }),
          gt: _0x531d6d(function (_0x5b418d, _0x15bd30, _0xa80c98) {
            for (
              _0xa80c98 = 0x0 > _0xa80c98 ? _0xa80c98 + _0x15bd30 : _0xa80c98;
              ++_0xa80c98 < _0x15bd30;

            )
              _0x5b418d["push"](_0xa80c98);
            return _0x5b418d;
          }),
        },
      }),
    (_0x4bc499 = _0x3147c3["compareDocumentPosition"]
      ? function (_0x5498dc, _0xbd006b) {
          return _0x5498dc === _0xbd006b
            ? ((_0x10f745 = !0x0), 0x0)
            : (
                !_0x5498dc["compareDocumentPosition"] ||
                !_0xbd006b["compareDocumentPosition"]
                  ? _0x5498dc["compareDocumentPosition"]
                  : _0x5498dc["compareDocumentPosition"](_0xbd006b) & 0x4
              )
            ? -0x1
            : 0x1;
        }
      : function (_0x31cba6, _0x27ed55) {
          if (_0x31cba6 === _0x27ed55) return (_0x10f745 = !0x0), 0x0;
          if (_0x31cba6["sourceIndex"] && _0x27ed55["sourceIndex"])
            return _0x31cba6["sourceIndex"] - _0x27ed55["sourceIndex"];
          var _0x3d1612,
            _0x1dd6c4,
            _0x35c6bb = [],
            _0x4feca1 = [];
          (_0x3d1612 = _0x31cba6["parentNode"]),
            (_0x1dd6c4 = _0x27ed55["parentNode"]);
          var _0x1b7935 = _0x3d1612;
          if (_0x3d1612 === _0x1dd6c4) return _0x359884(_0x31cba6, _0x27ed55);
          if (!_0x3d1612) return -0x1;
          if (!_0x1dd6c4) return 0x1;
          for (; _0x1b7935; )
            _0x35c6bb["unshift"](_0x1b7935),
              (_0x1b7935 = _0x1b7935["parentNode"]);
          for (_0x1b7935 = _0x1dd6c4; _0x1b7935; )
            _0x4feca1["unshift"](_0x1b7935),
              (_0x1b7935 = _0x1b7935["parentNode"]);
          (_0x3d1612 = _0x35c6bb["length"]), (_0x1dd6c4 = _0x4feca1["length"]);
          for (
            _0x1b7935 = 0x0;
            _0x1b7935 < _0x3d1612 && _0x1b7935 < _0x1dd6c4;
            _0x1b7935++
          )
            if (_0x35c6bb[_0x1b7935] !== _0x4feca1[_0x1b7935])
              return _0x359884(_0x35c6bb[_0x1b7935], _0x4feca1[_0x1b7935]);
          return _0x1b7935 === _0x3d1612
            ? _0x359884(_0x31cba6, _0x4feca1[_0x1b7935], -0x1)
            : _0x359884(_0x35c6bb[_0x1b7935], _0x27ed55, 0x1);
        }),
    [0x0, 0x0]["sort"](_0x4bc499),
    (_0x5563e0 = !_0x10f745),
    (_0x1c48e8["uniqueSort"] = function (_0x7f778a) {
      var _0x961a,
        _0x330724 = 0x1;
      (_0x10f745 = _0x5563e0), _0x7f778a["sort"](_0x4bc499);
      if (_0x10f745) {
        for (; (_0x961a = _0x7f778a[_0x330724]); _0x330724++)
          _0x961a === _0x7f778a[_0x330724 - 0x1] &&
            _0x7f778a["splice"](_0x330724--, 0x1);
      }
      return _0x7f778a;
    }),
    (_0x1c48e8["error"] = function (_0x14fa32) {
      throw Error(
        "Syntax\x20error,\x20unrecognized\x20expression:\x20" + _0x14fa32
      );
    }),
    (_0x3ca624 = _0x1c48e8["compile"] =
      function (_0x1ac47c, _0x4195af) {
        var _0x4efc47,
          _0x54d9fa = [],
          _0x4f294e = [],
          _0x5b9761 = _0x479dfb[_0x1ad2c2][_0x1ac47c];
        if (!_0x5b9761) {
          _0x4195af || (_0x4195af = _0x3cda95(_0x1ac47c));
          for (_0x4efc47 = _0x4195af["length"]; _0x4efc47--; )
            (_0x5b9761 = _0x236494(_0x4195af[_0x4efc47])),
              _0x5b9761[_0x1ad2c2]
                ? _0x54d9fa["push"](_0x5b9761)
                : _0x4f294e["push"](_0x5b9761);
          var _0x44e237 = 0x0 < _0x54d9fa["length"],
            _0x550a50 = 0x0 < _0x4f294e["length"],
            _0x5030f0 = function (
              _0x3619af,
              _0x57a62c,
              _0x1e7d3f,
              _0x270728,
              _0x370009
            ) {
              var _0xa14e4,
                _0x185e75,
                _0x16f581 = [],
                _0x24fa01 = 0x0,
                _0xafa92c = "0",
                _0x580b21 = _0x3619af && [],
                _0x3efebd = null != _0x370009,
                _0x4a05b3 = _0x3dbb64,
                _0xccb332 =
                  _0x3619af ||
                  (_0x550a50 &&
                    _0x480f4c["find"]["TAG"](
                      "*",
                      (_0x370009 && _0x57a62c["parentNode"]) || _0x57a62c
                    )),
                _0x345dc7 = (_0x200474 += null == _0x4a05b3 ? 0x1 : Math["E"]);
              for (
                _0x3efebd &&
                ((_0x3dbb64 = _0x57a62c !== _0x58a422 && _0x57a62c),
                (_0x279a21 = _0x5030f0["el"]));
                null != (_0x370009 = _0xccb332[_0xafa92c]);
                _0xafa92c++
              ) {
                if (_0x550a50 && _0x370009) {
                  for (
                    _0xa14e4 = 0x0;
                    (_0x185e75 = _0x4f294e[_0xa14e4]);
                    _0xa14e4++
                  )
                    if (_0x185e75(_0x370009, _0x57a62c, _0x1e7d3f)) {
                      _0x270728["push"](_0x370009);
                      break;
                    }
                  _0x3efebd &&
                    ((_0x200474 = _0x345dc7), (_0x279a21 = ++_0x5030f0["el"]));
                }
                _0x44e237 &&
                  ((_0x370009 = !_0x185e75 && _0x370009) && _0x24fa01--,
                  _0x3619af && _0x580b21["push"](_0x370009));
              }
              _0x24fa01 += _0xafa92c;
              if (_0x44e237 && _0xafa92c !== _0x24fa01) {
                for (
                  _0xa14e4 = 0x0;
                  (_0x185e75 = _0x54d9fa[_0xa14e4]);
                  _0xa14e4++
                )
                  _0x185e75(_0x580b21, _0x16f581, _0x57a62c, _0x1e7d3f);
                if (_0x3619af) {
                  if (0x0 < _0x24fa01) {
                    for (; _0xafa92c--; )
                      !_0x580b21[_0xafa92c] &&
                        !_0x16f581[_0xafa92c] &&
                        (_0x16f581[_0xafa92c] = _0x2714d2["call"](_0x270728));
                  }
                  _0x16f581 = _0x22f9a6(_0x16f581);
                }
                _0x25d5a8["apply"](_0x270728, _0x16f581),
                  _0x3efebd &&
                    !_0x3619af &&
                    0x0 < _0x16f581["length"] &&
                    0x1 < _0x24fa01 + _0x54d9fa["length"] &&
                    _0x1c48e8["uniqueSort"](_0x270728);
              }
              return (
                _0x3efebd && ((_0x200474 = _0x345dc7), (_0x3dbb64 = _0x4a05b3)),
                _0x580b21
              );
            };
          (_0x4efc47 =
            ((_0x5030f0["el"] = 0x0),
            _0x44e237 ? _0x2b582b(_0x5030f0) : _0x5030f0)),
            (_0x5b9761 = _0x479dfb(_0x1ac47c, _0x4efc47));
        }
        return _0x5b9761;
      });
  if (_0x58a422["querySelectorAll"]) {
    var _0x4c9714,
      _0x50ad48 = _0x58ff90,
      _0x2e5949 = /'|\\/g,
      _0x1bd908 = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
      _0x48f214 = [":focus"],
      _0x2e24ac = [":active", ":focus"],
      _0x25f0ae =
        _0x3147c3["matchesSelector"] ||
        _0x3147c3["mozMatchesSelector"] ||
        _0x3147c3["webkitMatchesSelector"] ||
        _0x3147c3["oMatchesSelector"] ||
        _0x3147c3["msMatchesSelector"];
    _0x4b0ee8(function (_0x39ecdf) {
      (_0x39ecdf["innerHTML"] =
        "<select><option\x20selected=\x27\x27></option></select>"),
        _0x39ecdf["querySelectorAll"]("[selected]")["length"] ||
          _0x48f214["push"](
            "\x5c[[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:checked|disabled|ismap|multiple|readonly|selected|value)"
          ),
        _0x39ecdf["querySelectorAll"](":checked")["length"] ||
          _0x48f214["push"](":checked");
    }),
      _0x4b0ee8(function (_0x324d6c) {
        (_0x324d6c["innerHTML"] = "<p\x20test=\x27\x27></p>"),
          _0x324d6c["querySelectorAll"]("[test^=\x27\x27]")["length"] &&
            _0x48f214["push"](
              "[*^$]=[\x5cx20\x5ct\x5cr\x5cn\x5cf]*(?:\x22\x22|\x27\x27)"
            ),
          (_0x324d6c["innerHTML"] = "<input\x20type=\x27hidden\x27/>"),
          _0x324d6c["querySelectorAll"](":enabled")["length"] ||
            _0x48f214["push"](":enabled", ":disabled");
      }),
      (_0x48f214 = RegExp(_0x48f214["join"]("|"))),
      (_0x58ff90 = function (
        _0x39a198,
        _0x5cb600,
        _0x227040,
        _0x4a08b0,
        _0x9f0c7b
      ) {
        if (
          !_0x4a08b0 &&
          !_0x9f0c7b &&
          (!_0x48f214 || !_0x48f214["test"](_0x39a198))
        ) {
          var _0x253519,
            _0x2563a1,
            _0x32d3b0 = !0x0,
            _0x58406f = _0x1ad2c2;
          (_0x2563a1 = _0x5cb600),
            (_0x253519 = 0x9 === _0x5cb600["nodeType"] && _0x39a198);
          if (
            0x1 === _0x5cb600["nodeType"] &&
            "object" !== _0x5cb600["nodeName"]["toLowerCase"]()
          ) {
            (_0x253519 = _0x3cda95(_0x39a198)),
              (_0x32d3b0 = _0x5cb600["getAttribute"]("id"))
                ? (_0x58406f = _0x32d3b0["replace"](_0x2e5949, "\x5c$&"))
                : _0x5cb600["setAttribute"]("id", _0x58406f),
              (_0x58406f = "[id=\x27" + _0x58406f + "\x27]\x20");
            for (_0x2563a1 = _0x253519["length"]; _0x2563a1--; )
              _0x253519[_0x2563a1] =
                _0x58406f + _0x253519[_0x2563a1]["join"]("");
            (_0x2563a1 =
              (_0x2ca348["test"](_0x39a198) && _0x5cb600["parentNode"]) ||
              _0x5cb600),
              (_0x253519 = _0x253519["join"](","));
          }
          if (_0x253519)
            try {
              return (
                _0x25d5a8["apply"](
                  _0x227040,
                  _0x68171f["call"](
                    _0x2563a1["querySelectorAll"](_0x253519),
                    0x0
                  )
                ),
                _0x227040
              );
            } catch (_0x368412) {
            } finally {
              _0x32d3b0 || _0x5cb600["removeAttribute"]("id");
            }
        }
        return _0x50ad48(_0x39a198, _0x5cb600, _0x227040, _0x4a08b0, _0x9f0c7b);
      }),
      _0x25f0ae &&
        (_0x4b0ee8(function (_0x519431) {
          _0x4c9714 = _0x25f0ae["call"](_0x519431, "div");
          try {
            _0x25f0ae["call"](_0x519431, "[test!=\x27\x27]:sizzle"),
              _0x2e24ac["push"]("!=", _0xdb3e25);
          } catch (_0x512641) {}
        }),
        (_0x2e24ac = RegExp(_0x2e24ac["join"]("|"))),
        (_0x1c48e8["matchesSelector"] = function (_0x14f3cc, _0x260fe9) {
          _0x260fe9 = _0x260fe9["replace"](_0x1bd908, "=\x27$1\x27]");
          if (
            !_0x349c31(_0x14f3cc) &&
            !_0x2e24ac["test"](_0x260fe9) &&
            (!_0x48f214 || !_0x48f214["test"](_0x260fe9))
          )
            try {
              var _0x9a15f7 = _0x25f0ae["call"](_0x14f3cc, _0x260fe9);
              if (
                _0x9a15f7 ||
                _0x4c9714 ||
                (_0x14f3cc["document"] &&
                  0xb !== _0x14f3cc["document"]["nodeType"])
              )
                return _0x9a15f7;
            } catch (_0xfb0d0a) {}
          return 0x0 < _0x1c48e8(_0x260fe9, null, null, [_0x14f3cc])["length"];
        }));
  }
  (_0x480f4c["pseudos"]["nth"] = _0x480f4c["pseudos"]["eq"]),
    (_0x480f4c["filters"] = _0x31e1c5["prototype"] = _0x480f4c["pseudos"]),
    (_0x480f4c["setFilters"] = new _0x31e1c5()),
    (_0x1c48e8["attr"] = _0x117884["attr"]),
    (_0x117884["find"] = _0x1c48e8),
    (_0x117884["expr"] = _0x1c48e8["selectors"]),
    (_0x117884["expr"][":"] = _0x117884["expr"]["pseudos"]),
    (_0x117884["unique"] = _0x1c48e8["uniqueSort"]),
    (_0x117884["text"] = _0x1c48e8["getText"]),
    (_0x117884["isXMLDoc"] = _0x1c48e8["isXML"]),
    (_0x117884["contains"] = _0x1c48e8["contains"]);
  var _0x1e7f6e = /Until$/,
    _0x3d9b80 = /^(?:parents|prev(?:Until|All))/,
    _0x2ae1d4 = /^.[^:#\[\.,]*$/,
    _0xcbda26 = _0x117884["expr"]["match"]["needsContext"],
    _0x46391c = { children: !0x0, contents: !0x0, next: !0x0, prev: !0x0 };
  _0x117884["fn"]["extend"]({
    find: function (_0x361d92) {
      var _0x300d4c,
        _0x29c8f8,
        _0x1c2fc4,
        _0x56662c,
        _0x3742d0,
        _0x557e3f,
        _0x577656 = this;
      if ("string" != typeof _0x361d92)
        return _0x117884(_0x361d92)["filter"](function () {
          _0x300d4c = 0x0;
          for (
            _0x29c8f8 = _0x577656["length"];
            _0x300d4c < _0x29c8f8;
            _0x300d4c++
          )
            if (_0x117884["contains"](_0x577656[_0x300d4c], this)) return !0x0;
        });
      (_0x557e3f = this["pushStack"]("", "find", _0x361d92)), (_0x300d4c = 0x0);
      for (_0x29c8f8 = this["length"]; _0x300d4c < _0x29c8f8; _0x300d4c++)
        if (
          ((_0x1c2fc4 = _0x557e3f["length"]),
          _0x117884["find"](_0x361d92, this[_0x300d4c], _0x557e3f),
          0x0 < _0x300d4c)
        ) {
          for (
            _0x56662c = _0x1c2fc4;
            _0x56662c < _0x557e3f["length"];
            _0x56662c++
          )
            for (_0x3742d0 = 0x0; _0x3742d0 < _0x1c2fc4; _0x3742d0++)
              if (_0x557e3f[_0x3742d0] === _0x557e3f[_0x56662c]) {
                _0x557e3f["splice"](_0x56662c--, 0x1);
                break;
              }
        }
      return _0x557e3f;
    },
    has: function (_0x1154a5) {
      var _0x43a819,
        _0x1f2581 = _0x117884(_0x1154a5, this),
        _0x1e047b = _0x1f2581["length"];
      return this["filter"](function () {
        for (_0x43a819 = 0x0; _0x43a819 < _0x1e047b; _0x43a819++)
          if (_0x117884["contains"](this, _0x1f2581[_0x43a819])) return !0x0;
      });
    },
    not: function (_0x7cd01c) {
      return this["pushStack"](
        _0x49d5b4(this, _0x7cd01c, !0x1),
        "not",
        _0x7cd01c
      );
    },
    filter: function (_0x23817d) {
      return this["pushStack"](
        _0x49d5b4(this, _0x23817d, !0x0),
        "filter",
        _0x23817d
      );
    },
    is: function (_0x5ef5de) {
      return (
        !!_0x5ef5de &&
        ("string" == typeof _0x5ef5de
          ? _0xcbda26["test"](_0x5ef5de)
            ? 0x0 <= _0x117884(_0x5ef5de, this["context"])["index"](this[0x0])
            : 0x0 < _0x117884["filter"](_0x5ef5de, this)["length"]
          : 0x0 < this["filter"](_0x5ef5de)["length"])
      );
    },
    closest: function (_0x1398bd, _0x209b17) {
      for (
        var _0x583efd,
          _0x413b93 = 0x0,
          _0x64ec7e = this["length"],
          _0x260bf9 = [],
          _0x1eb17f =
            _0xcbda26["test"](_0x1398bd) || "string" != typeof _0x1398bd
              ? _0x117884(_0x1398bd, _0x209b17 || this["context"])
              : 0x0;
        _0x413b93 < _0x64ec7e;
        _0x413b93++
      )
        for (
          _0x583efd = this[_0x413b93];
          _0x583efd &&
          _0x583efd["ownerDocument"] &&
          _0x583efd !== _0x209b17 &&
          0xb !== _0x583efd["nodeType"];

        ) {
          if (
            _0x1eb17f
              ? -0x1 < _0x1eb17f["index"](_0x583efd)
              : _0x117884["find"]["matchesSelector"](_0x583efd, _0x1398bd)
          ) {
            _0x260bf9["push"](_0x583efd);
            break;
          }
          _0x583efd = _0x583efd["parentNode"];
        }
      return (
        (_0x260bf9 =
          0x1 < _0x260bf9["length"]
            ? _0x117884["unique"](_0x260bf9)
            : _0x260bf9),
        this["pushStack"](_0x260bf9, "closest", _0x1398bd)
      );
    },
    index: function (_0x266a34) {
      return _0x266a34
        ? "string" == typeof _0x266a34
          ? _0x117884["inArray"](this[0x0], _0x117884(_0x266a34))
          : _0x117884["inArray"](
              _0x266a34["jquery"] ? _0x266a34[0x0] : _0x266a34,
              this
            )
        : this[0x0] && this[0x0]["parentNode"]
        ? this["prevAll"]()["length"]
        : -0x1;
    },
    add: function (_0x15d200, _0x1b748b) {
      var _0x498c96 =
          "string" == typeof _0x15d200
            ? _0x117884(_0x15d200, _0x1b748b)
            : _0x117884["makeArray"](
                _0x15d200 && _0x15d200["nodeType"] ? [_0x15d200] : _0x15d200
              ),
        _0x3bab48 = _0x117884["merge"](this["get"](), _0x498c96);
      return this["pushStack"](
        _0x170581(_0x498c96[0x0]) || _0x170581(_0x3bab48[0x0])
          ? _0x3bab48
          : _0x117884["unique"](_0x3bab48)
      );
    },
    addBack: function (_0x10285a) {
      return this["add"](
        null == _0x10285a
          ? this["prevObject"]
          : this["prevObject"]["filter"](_0x10285a)
      );
    },
  }),
    (_0x117884["fn"]["andSelf"] = _0x117884["fn"]["addBack"]),
    _0x117884["each"](
      {
        parent: function (_0x4b9be8) {
          return (_0x4b9be8 = _0x4b9be8["parentNode"]) &&
            0xb !== _0x4b9be8["nodeType"]
            ? _0x4b9be8
            : null;
        },
        parents: function (_0x3d60ee) {
          return _0x117884["dir"](_0x3d60ee, "parentNode");
        },
        parentsUntil: function (_0x2c89dd, _0x4560b3, _0x2ce608) {
          return _0x117884["dir"](_0x2c89dd, "parentNode", _0x2ce608);
        },
        next: function (_0x513bba) {
          return _0x58b656(_0x513bba, "nextSibling");
        },
        prev: function (_0x490419) {
          return _0x58b656(_0x490419, "previousSibling");
        },
        nextAll: function (_0x3761a5) {
          return _0x117884["dir"](_0x3761a5, "nextSibling");
        },
        prevAll: function (_0x3ef36c) {
          return _0x117884["dir"](_0x3ef36c, "previousSibling");
        },
        nextUntil: function (_0x130ee2, _0xe02a8a, _0xd1134e) {
          return _0x117884["dir"](_0x130ee2, "nextSibling", _0xd1134e);
        },
        prevUntil: function (_0x32d6e7, _0x1cd84c, _0x3f018a) {
          return _0x117884["dir"](_0x32d6e7, "previousSibling", _0x3f018a);
        },
        siblings: function (_0x490c5b) {
          return _0x117884["sibling"](
            (_0x490c5b["parentNode"] || {})["firstChild"],
            _0x490c5b
          );
        },
        children: function (_0x42a221) {
          return _0x117884["sibling"](_0x42a221["firstChild"]);
        },
        contents: function (_0x40b963) {
          return _0x117884["nodeName"](_0x40b963, "iframe")
            ? _0x40b963["contentDocument"] ||
                _0x40b963["contentWindow"]["document"]
            : _0x117884["merge"]([], _0x40b963["childNodes"]);
        },
      },
      function (_0x35378e, _0xa1c89a) {
        _0x117884["fn"][_0x35378e] = function (_0x196a28, _0x22b1d5) {
          var _0x4f3a7e = _0x117884["map"](this, _0xa1c89a, _0x196a28);
          return (
            _0x1e7f6e["test"](_0x35378e) || (_0x22b1d5 = _0x196a28),
            _0x22b1d5 &&
              "string" == typeof _0x22b1d5 &&
              (_0x4f3a7e = _0x117884["filter"](_0x22b1d5, _0x4f3a7e)),
            (_0x4f3a7e =
              0x1 < this["length"] && !_0x46391c[_0x35378e]
                ? _0x117884["unique"](_0x4f3a7e)
                : _0x4f3a7e),
            0x1 < this["length"] &&
              _0x3d9b80["test"](_0x35378e) &&
              (_0x4f3a7e = _0x4f3a7e["reverse"]()),
            this["pushStack"](
              _0x4f3a7e,
              _0x35378e,
              _0x23c826["call"](arguments)["join"](",")
            )
          );
        };
      }
    ),
    _0x117884["extend"]({
      filter: function (_0x229095, _0x3771fc, _0x287e9d) {
        return (
          _0x287e9d && (_0x229095 = ":not(" + _0x229095 + ")"),
          0x1 === _0x3771fc["length"]
            ? _0x117884["find"]["matchesSelector"](_0x3771fc[0x0], _0x229095)
              ? [_0x3771fc[0x0]]
              : []
            : _0x117884["find"]["matches"](_0x229095, _0x3771fc)
        );
      },
      dir: function (_0x5dfe41, _0x58777e, _0x16eeb6) {
        var _0x4de50f = [];
        for (
          _0x5dfe41 = _0x5dfe41[_0x58777e];
          _0x5dfe41 &&
          0x9 !== _0x5dfe41["nodeType"] &&
          (_0x16eeb6 === _0x549388 ||
            0x1 !== _0x5dfe41["nodeType"] ||
            !_0x117884(_0x5dfe41)["is"](_0x16eeb6));

        )
          0x1 === _0x5dfe41["nodeType"] && _0x4de50f["push"](_0x5dfe41),
            (_0x5dfe41 = _0x5dfe41[_0x58777e]);
        return _0x4de50f;
      },
      sibling: function (_0x5043ea, _0x31594f) {
        for (
          var _0x3da224 = [];
          _0x5043ea;
          _0x5043ea = _0x5043ea["nextSibling"]
        )
          0x1 === _0x5043ea["nodeType"] &&
            _0x5043ea !== _0x31594f &&
            _0x3da224["push"](_0x5043ea);
        return _0x3da224;
      },
    });
  var _0x453c9e =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    _0x4928b8 = / jQuery\d+="(?:null|\d+)"/g,
    _0x2a57eb = /^\s+/,
    _0x4ccf65 =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    _0x106eed = /<([\w:]+)/,
    _0x3ef0ad = /<tbody/i,
    _0x481978 = /<|&#?\w+;/,
    _0x41d57b = /<(?:script|style|link)/i,
    _0xb666fd = /<(?:script|object|embed|option|style)/i,
    _0x3af38b = RegExp("<(?:" + _0x453c9e + ")[\x5cs/>]", "i"),
    _0x225f51 = /^(?:checkbox|radio)$/,
    _0x2c6a96 = /checked\s*(?:[^=]|=\s*.checked.)/i,
    _0x45e062 = /\/(java|ecma)script/i,
    _0xbf7f3 = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
    _0x138db5 = {
      option: [0x1, "<select\x20multiple=\x27multiple\x27>", "</select>"],
      legend: [0x1, "<fieldset>", "</fieldset>"],
      thead: [0x1, "<table>", "</table>"],
      tr: [0x2, "<table><tbody>", "</tbody></table>"],
      td: [0x3, "<table><tbody><tr>", "</tr></tbody></table>"],
      col: [0x2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      area: [0x1, "<map>", "</map>"],
      _default: [0x0, "", ""],
    },
    _0x37d7bb = _0x54427c(_0x190c5d),
    _0x93e993 = _0x37d7bb["appendChild"](_0x190c5d["createElement"]("div"));
  (_0x138db5["optgroup"] = _0x138db5["option"]),
    (_0x138db5["tbody"] =
      _0x138db5["tfoot"] =
      _0x138db5["colgroup"] =
      _0x138db5["caption"] =
        _0x138db5["thead"]),
    (_0x138db5["th"] = _0x138db5["td"]),
    _0x117884["support"]["htmlSerialize"] ||
      (_0x138db5["_default"] = [0x1, "X<div>", "</div>"]),
    _0x117884["fn"]["extend"]({
      text: function (_0x2971eb) {
        return _0x117884["access"](
          this,
          function (_0x1c03c1) {
            return _0x1c03c1 === _0x549388
              ? _0x117884["text"](this)
              : this["empty"]()["append"](
                  ((this[0x0] && this[0x0]["ownerDocument"]) || _0x190c5d)[
                    "createTextNode"
                  ](_0x1c03c1)
                );
          },
          null,
          _0x2971eb,
          arguments["length"]
        );
      },
      wrapAll: function (_0x1468b1) {
        if (_0x117884["isFunction"](_0x1468b1))
          return this["each"](function (_0x40c3e0) {
            _0x117884(this)["wrapAll"](_0x1468b1["call"](this, _0x40c3e0));
          });
        if (this[0x0]) {
          var _0x4adb4e = _0x117884(_0x1468b1, this[0x0]["ownerDocument"])
            ["eq"](0x0)
            ["clone"](!0x0);
          this[0x0]["parentNode"] && _0x4adb4e["insertBefore"](this[0x0]),
            _0x4adb4e["map"](function () {
              for (
                var _0x1d8b90 = this;
                _0x1d8b90["firstChild"] &&
                0x1 === _0x1d8b90["firstChild"]["nodeType"];

              )
                _0x1d8b90 = _0x1d8b90["firstChild"];
              return _0x1d8b90;
            })["append"](this);
        }
        return this;
      },
      wrapInner: function (_0x5e8a10) {
        return _0x117884["isFunction"](_0x5e8a10)
          ? this["each"](function (_0x3b9ce7) {
              _0x117884(this)["wrapInner"](_0x5e8a10["call"](this, _0x3b9ce7));
            })
          : this["each"](function () {
              var _0x34cea2 = _0x117884(this),
                _0x398284 = _0x34cea2["contents"]();
              _0x398284["length"]
                ? _0x398284["wrapAll"](_0x5e8a10)
                : _0x34cea2["append"](_0x5e8a10);
            });
      },
      wrap: function (_0x35c48a) {
        var _0xd22f00 = _0x117884["isFunction"](_0x35c48a);
        return this["each"](function (_0x6ddea0) {
          _0x117884(this)["wrapAll"](
            _0xd22f00 ? _0x35c48a["call"](this, _0x6ddea0) : _0x35c48a
          );
        });
      },
      unwrap: function () {
        return this["parent"]()
          ["each"](function () {
            _0x117884["nodeName"](this, "body") ||
              _0x117884(this)["replaceWith"](this["childNodes"]);
          })
          ["end"]();
      },
      append: function () {
        return this["domManip"](arguments, !0x0, function (_0x3ca1df) {
          (0x1 === this["nodeType"] || 0xb === this["nodeType"]) &&
            this["appendChild"](_0x3ca1df);
        });
      },
      prepend: function () {
        return this["domManip"](arguments, !0x0, function (_0x1eee64) {
          (0x1 === this["nodeType"] || 0xb === this["nodeType"]) &&
            this["insertBefore"](_0x1eee64, this["firstChild"]);
        });
      },
      before: function () {
        if (!_0x170581(this[0x0]))
          return this["domManip"](arguments, !0x1, function (_0x1413fd) {
            this["parentNode"]["insertBefore"](_0x1413fd, this);
          });
        if (arguments["length"]) {
          var _0x4f3967 = _0x117884["clean"](arguments);
          return this["pushStack"](
            _0x117884["merge"](_0x4f3967, this),
            "before",
            this["selector"]
          );
        }
      },
      after: function () {
        if (!_0x170581(this[0x0]))
          return this["domManip"](arguments, !0x1, function (_0x8f7968) {
            this["parentNode"]["insertBefore"](_0x8f7968, this["nextSibling"]);
          });
        if (arguments["length"]) {
          var _0x10ee15 = _0x117884["clean"](arguments);
          return this["pushStack"](
            _0x117884["merge"](this, _0x10ee15),
            "after",
            this["selector"]
          );
        }
      },
      remove: function (_0x4c196f, _0x312ecf) {
        for (
          var _0x9c0190, _0xa15152 = 0x0;
          null != (_0x9c0190 = this[_0xa15152]);
          _0xa15152++
        )
          if (
            !_0x4c196f ||
            _0x117884["filter"](_0x4c196f, [_0x9c0190])["length"]
          )
            !_0x312ecf &&
              0x1 === _0x9c0190["nodeType"] &&
              (_0x117884["cleanData"](_0x9c0190["getElementsByTagName"]("*")),
              _0x117884["cleanData"]([_0x9c0190])),
              _0x9c0190["parentNode"] &&
                _0x9c0190["parentNode"]["removeChild"](_0x9c0190);
        return this;
      },
      empty: function () {
        for (
          var _0x3d2891, _0x2562ae = 0x0;
          null != (_0x3d2891 = this[_0x2562ae]);
          _0x2562ae++
        )
          for (
            0x1 === _0x3d2891["nodeType"] &&
            _0x117884["cleanData"](_0x3d2891["getElementsByTagName"]("*"));
            _0x3d2891["firstChild"];

          )
            _0x3d2891["removeChild"](_0x3d2891["firstChild"]);
        return this;
      },
      clone: function (_0x431e72, _0xc32046) {
        return (
          (_0x431e72 = null == _0x431e72 ? !0x1 : _0x431e72),
          (_0xc32046 = null == _0xc32046 ? _0x431e72 : _0xc32046),
          this["map"](function () {
            return _0x117884["clone"](this, _0x431e72, _0xc32046);
          })
        );
      },
      html: function (_0x2d7711) {
        return _0x117884["access"](
          this,
          function (_0x2c1664) {
            var _0x524c66 = this[0x0] || {},
              _0x2b28c2 = 0x0,
              _0x5c729a = this["length"];
            if (_0x2c1664 === _0x549388)
              return 0x1 === _0x524c66["nodeType"]
                ? _0x524c66["innerHTML"]["replace"](_0x4928b8, "")
                : _0x549388;
            if (
              "string" == typeof _0x2c1664 &&
              !_0x41d57b["test"](_0x2c1664) &&
              (_0x117884["support"]["htmlSerialize"] ||
                !_0x3af38b["test"](_0x2c1664)) &&
              (_0x117884["support"]["leadingWhitespace"] ||
                !_0x2a57eb["test"](_0x2c1664)) &&
              !_0x138db5[
                (_0x106eed["exec"](_0x2c1664) || ["", ""])[0x1]["toLowerCase"]()
              ]
            ) {
              _0x2c1664 = _0x2c1664["replace"](_0x4ccf65, "<$1></$2>");
              try {
                for (; _0x2b28c2 < _0x5c729a; _0x2b28c2++)
                  (_0x524c66 = this[_0x2b28c2] || {}),
                    0x1 === _0x524c66["nodeType"] &&
                      (_0x117884["cleanData"](
                        _0x524c66["getElementsByTagName"]("*")
                      ),
                      (_0x524c66["innerHTML"] = _0x2c1664));
                _0x524c66 = 0x0;
              } catch (_0x364c5e) {}
            }
            _0x524c66 && this["empty"]()["append"](_0x2c1664);
          },
          null,
          _0x2d7711,
          arguments["length"]
        );
      },
      replaceWith: function (_0x4ee03c) {
        return _0x170581(this[0x0])
          ? this["length"]
            ? this["pushStack"](
                _0x117884(
                  _0x117884["isFunction"](_0x4ee03c) ? _0x4ee03c() : _0x4ee03c
                ),
                "replaceWith",
                _0x4ee03c
              )
            : this
          : _0x117884["isFunction"](_0x4ee03c)
          ? this["each"](function (_0xde1ea4) {
              var _0x548e8c = _0x117884(this),
                _0x335e18 = _0x548e8c["html"]();
              _0x548e8c["replaceWith"](
                _0x4ee03c["call"](this, _0xde1ea4, _0x335e18)
              );
            })
          : ("string" != typeof _0x4ee03c &&
              (_0x4ee03c = _0x117884(_0x4ee03c)["detach"]()),
            this["each"](function () {
              var _0x572e05 = this["nextSibling"],
                _0x5d400a = this["parentNode"];
              _0x117884(this)["remove"](),
                _0x572e05
                  ? _0x117884(_0x572e05)["before"](_0x4ee03c)
                  : _0x117884(_0x5d400a)["append"](_0x4ee03c);
            }));
      },
      detach: function (_0x394442) {
        return this["remove"](_0x394442, !0x0);
      },
      domManip: function (_0x204ea2, _0x403b4b, _0x2e6dc4) {
        _0x204ea2 = []["concat"]["apply"]([], _0x204ea2);
        var _0x51dce9,
          _0x237584,
          _0xc106e9,
          _0x9fd1bb = 0x0,
          _0x5e2cba = _0x204ea2[0x0],
          _0x529f07 = [],
          _0x5ebb62 = this["length"];
        if (
          !_0x117884["support"]["checkClone"] &&
          0x1 < _0x5ebb62 &&
          "string" == typeof _0x5e2cba &&
          _0x2c6a96["test"](_0x5e2cba)
        )
          return this["each"](function () {
            _0x117884(this)["domManip"](_0x204ea2, _0x403b4b, _0x2e6dc4);
          });
        if (_0x117884["isFunction"](_0x5e2cba))
          return this["each"](function (_0x1b371a) {
            var _0x125d1b = _0x117884(this);
            (_0x204ea2[0x0] = _0x5e2cba["call"](
              this,
              _0x1b371a,
              _0x403b4b ? _0x125d1b["html"]() : _0x549388
            )),
              _0x125d1b["domManip"](_0x204ea2, _0x403b4b, _0x2e6dc4);
          });
        if (this[0x0]) {
          (_0x51dce9 = _0x117884["buildFragment"](_0x204ea2, this, _0x529f07)),
            (_0xc106e9 = _0x51dce9["fragment"]),
            (_0x237584 = _0xc106e9["firstChild"]),
            0x1 === _0xc106e9["childNodes"]["length"] &&
              (_0xc106e9 = _0x237584);
          if (_0x237584) {
            _0x403b4b = _0x403b4b && _0x117884["nodeName"](_0x237584, "tr");
            for (
              _0x51dce9 = _0x51dce9["cacheable"] || _0x5ebb62 - 0x1;
              _0x9fd1bb < _0x5ebb62;
              _0x9fd1bb++
            )
              _0x2e6dc4["call"](
                _0x403b4b && _0x117884["nodeName"](this[_0x9fd1bb], "table")
                  ? this[_0x9fd1bb]["getElementsByTagName"]("tbody")[0x0] ||
                      this[_0x9fd1bb]["appendChild"](
                        this[_0x9fd1bb]["ownerDocument"]["createElement"](
                          "tbody"
                        )
                      )
                  : this[_0x9fd1bb],
                _0x9fd1bb === _0x51dce9
                  ? _0xc106e9
                  : _0x117884["clone"](_0xc106e9, !0x0, !0x0)
              );
          }
          (_0xc106e9 = _0x237584 = null),
            _0x529f07["length"] &&
              _0x117884["each"](_0x529f07, function (_0x3f5d54, _0x571505) {
                _0x571505["src"]
                  ? _0x117884["ajax"]
                    ? _0x117884["ajax"]({
                        url: _0x571505["src"],
                        type: "GET",
                        dataType: "script",
                        async: !0x1,
                        global: !0x1,
                        throws: !0x0,
                      })
                    : _0x117884["error"]("no\x20ajax")
                  : _0x117884["globalEval"](
                      (_0x571505["text"] ||
                        _0x571505["textContent"] ||
                        _0x571505["innerHTML"] ||
                        "")["replace"](_0xbf7f3, "")
                    ),
                  _0x571505["parentNode"] &&
                    _0x571505["parentNode"]["removeChild"](_0x571505);
              });
        }
        return this;
      },
    }),
    (_0x117884["buildFragment"] = function (_0xe22ef4, _0x7443ec, _0x456fbf) {
      var _0x5c59e5,
        _0x1886f2,
        _0x5e812b,
        _0x3e41a7 = _0xe22ef4[0x0];
      return (
        (_0x7443ec = _0x7443ec || _0x190c5d),
        (_0x7443ec = (!_0x7443ec["nodeType"] && _0x7443ec[0x0]) || _0x7443ec),
        (_0x7443ec = _0x7443ec["ownerDocument"] || _0x7443ec),
        0x1 === _0xe22ef4["length"] &&
          "string" == typeof _0x3e41a7 &&
          0x200 > _0x3e41a7["length"] &&
          _0x7443ec === _0x190c5d &&
          "<" === _0x3e41a7["charAt"](0x0) &&
          !_0xb666fd["test"](_0x3e41a7) &&
          (_0x117884["support"]["checkClone"] ||
            !_0x2c6a96["test"](_0x3e41a7)) &&
          (_0x117884["support"]["html5Clone"] ||
            !_0x3af38b["test"](_0x3e41a7)) &&
          ((_0x1886f2 = !0x0),
          (_0x5c59e5 = _0x117884["fragments"][_0x3e41a7]),
          (_0x5e812b = _0x5c59e5 !== _0x549388)),
        _0x5c59e5 ||
          ((_0x5c59e5 = _0x7443ec["createDocumentFragment"]()),
          _0x117884["clean"](_0xe22ef4, _0x7443ec, _0x5c59e5, _0x456fbf),
          _0x1886f2 &&
            (_0x117884["fragments"][_0x3e41a7] = _0x5e812b && _0x5c59e5)),
        { fragment: _0x5c59e5, cacheable: _0x1886f2 }
      );
    }),
    (_0x117884["fragments"] = {}),
    _0x117884["each"](
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (_0x4a8482, _0x26bd64) {
        _0x117884["fn"][_0x4a8482] = function (_0x581e95) {
          var _0x1e2f11,
            _0x25e690 = 0x0,
            _0x41ffd7 = [];
          _0x581e95 = _0x117884(_0x581e95);
          var _0x236e86 = _0x581e95["length"];
          _0x1e2f11 = 0x1 === this["length"] && this[0x0]["parentNode"];
          if (
            (null == _0x1e2f11 ||
              (_0x1e2f11 &&
                0xb === _0x1e2f11["nodeType"] &&
                0x1 === _0x1e2f11["childNodes"]["length"])) &&
            0x1 === _0x236e86
          )
            return _0x581e95[_0x26bd64](this[0x0]), this;
          for (; _0x25e690 < _0x236e86; _0x25e690++)
            (_0x1e2f11 = (0x0 < _0x25e690 ? this["clone"](!0x0) : this)[
              "get"
            ]()),
              _0x117884(_0x581e95[_0x25e690])[_0x26bd64](_0x1e2f11),
              (_0x41ffd7 = _0x41ffd7["concat"](_0x1e2f11));
          return this["pushStack"](_0x41ffd7, _0x4a8482, _0x581e95["selector"]);
        };
      }
    ),
    _0x117884["extend"]({
      clone: function (_0x404d88, _0x1f2033, _0x2ea3f6) {
        var _0x9587b4, _0x381702, _0x39002, _0x2085e2;
        _0x117884["support"]["html5Clone"] ||
        _0x117884["isXMLDoc"](_0x404d88) ||
        !_0x3af38b["test"]("<" + _0x404d88["nodeName"] + ">")
          ? (_0x2085e2 = _0x404d88["cloneNode"](!0x0))
          : ((_0x93e993["innerHTML"] = _0x404d88["outerHTML"]),
            _0x93e993["removeChild"]((_0x2085e2 = _0x93e993["firstChild"])));
        if (
          (!_0x117884["support"]["noCloneEvent"] ||
            !_0x117884["support"]["noCloneChecked"]) &&
          (0x1 === _0x404d88["nodeType"] || 0xb === _0x404d88["nodeType"]) &&
          !_0x117884["isXMLDoc"](_0x404d88)
        ) {
          _0x46f151(_0x404d88, _0x2085e2),
            (_0x9587b4 = _0x4b31a4(_0x404d88)),
            (_0x381702 = _0x4b31a4(_0x2085e2));
          for (_0x39002 = 0x0; _0x9587b4[_0x39002]; ++_0x39002)
            _0x381702[_0x39002] &&
              _0x46f151(_0x9587b4[_0x39002], _0x381702[_0x39002]);
        }
        if (_0x1f2033 && (_0x46964d(_0x404d88, _0x2085e2), _0x2ea3f6)) {
          (_0x9587b4 = _0x4b31a4(_0x404d88)),
            (_0x381702 = _0x4b31a4(_0x2085e2));
          for (_0x39002 = 0x0; _0x9587b4[_0x39002]; ++_0x39002)
            _0x46964d(_0x9587b4[_0x39002], _0x381702[_0x39002]);
        }
        return _0x2085e2;
      },
      clean: function (_0x4ff056, _0x167466, _0x5df4eb, _0x1cd040) {
        var _0xfab6,
          _0x1c1f06,
          _0x529abe,
          _0x5eb0ad,
          _0x51e3f5,
          _0x3bc92e,
          _0x2a5a70,
          _0x3fbbe2 = _0x167466 === _0x190c5d && _0x37d7bb,
          _0x1bf268 = [];
        if (
          !_0x167466 ||
          "undefined" == typeof _0x167466["createDocumentFragment"]
        )
          _0x167466 = _0x190c5d;
        for (_0xfab6 = 0x0; null != (_0x529abe = _0x4ff056[_0xfab6]); _0xfab6++)
          if (("number" == typeof _0x529abe && (_0x529abe += ""), _0x529abe)) {
            if ("string" == typeof _0x529abe) {
              if (_0x481978["test"](_0x529abe)) {
                (_0x3fbbe2 = _0x3fbbe2 || _0x54427c(_0x167466)),
                  (_0x3bc92e = _0x167466["createElement"]("div")),
                  _0x3fbbe2["appendChild"](_0x3bc92e),
                  (_0x529abe = _0x529abe["replace"](_0x4ccf65, "<$1></$2>")),
                  (_0x1c1f06 = (_0x106eed["exec"](_0x529abe) || ["", ""])[0x1][
                    "toLowerCase"
                  ]()),
                  (_0x5eb0ad = _0x138db5[_0x1c1f06] || _0x138db5["_default"]),
                  (_0x51e3f5 = _0x5eb0ad[0x0]);
                for (
                  _0x3bc92e["innerHTML"] =
                    _0x5eb0ad[0x1] + _0x529abe + _0x5eb0ad[0x2];
                  _0x51e3f5--;

                )
                  _0x3bc92e = _0x3bc92e["lastChild"];
                if (!_0x117884["support"]["tbody"]) {
                  (_0x51e3f5 = _0x3ef0ad["test"](_0x529abe)),
                    (_0x5eb0ad =
                      "table" === _0x1c1f06 && !_0x51e3f5
                        ? _0x3bc92e["firstChild"] &&
                          _0x3bc92e["firstChild"]["childNodes"]
                        : "<table>" === _0x5eb0ad[0x1] && !_0x51e3f5
                        ? _0x3bc92e["childNodes"]
                        : []);
                  for (
                    _0x1c1f06 = _0x5eb0ad["length"] - 0x1;
                    0x0 <= _0x1c1f06;
                    --_0x1c1f06
                  )
                    _0x117884["nodeName"](_0x5eb0ad[_0x1c1f06], "tbody") &&
                      !_0x5eb0ad[_0x1c1f06]["childNodes"]["length"] &&
                      _0x5eb0ad[_0x1c1f06]["parentNode"]["removeChild"](
                        _0x5eb0ad[_0x1c1f06]
                      );
                }
                !_0x117884["support"]["leadingWhitespace"] &&
                  _0x2a57eb["test"](_0x529abe) &&
                  _0x3bc92e["insertBefore"](
                    _0x167466["createTextNode"](
                      _0x2a57eb["exec"](_0x529abe)[0x0]
                    ),
                    _0x3bc92e["firstChild"]
                  ),
                  (_0x529abe = _0x3bc92e["childNodes"]),
                  _0x3bc92e["parentNode"]["removeChild"](_0x3bc92e);
              } else _0x529abe = _0x167466["createTextNode"](_0x529abe);
            }
            _0x529abe["nodeType"]
              ? _0x1bf268["push"](_0x529abe)
              : _0x117884["merge"](_0x1bf268, _0x529abe);
          }
        _0x3bc92e && (_0x529abe = _0x3bc92e = _0x3fbbe2 = null);
        if (!_0x117884["support"]["appendChecked"]) {
          for (
            _0xfab6 = 0x0;
            null != (_0x529abe = _0x1bf268[_0xfab6]);
            _0xfab6++
          )
            _0x117884["nodeName"](_0x529abe, "input")
              ? _0x249434(_0x529abe)
              : "undefined" != typeof _0x529abe["getElementsByTagName"] &&
                _0x117884["grep"](
                  _0x529abe["getElementsByTagName"]("input"),
                  _0x249434
                );
        }
        if (_0x5df4eb) {
          _0x4ff056 = function (_0x36e285) {
            if (!_0x36e285["type"] || _0x45e062["test"](_0x36e285["type"]))
              return _0x1cd040
                ? _0x1cd040["push"](
                    _0x36e285["parentNode"]
                      ? _0x36e285["parentNode"]["removeChild"](_0x36e285)
                      : _0x36e285
                  )
                : _0x5df4eb["appendChild"](_0x36e285);
          };
          for (
            _0xfab6 = 0x0;
            null != (_0x529abe = _0x1bf268[_0xfab6]);
            _0xfab6++
          )
            if (
              !_0x117884["nodeName"](_0x529abe, "script") ||
              !_0x4ff056(_0x529abe)
            )
              _0x5df4eb["appendChild"](_0x529abe),
                "undefined" != typeof _0x529abe["getElementsByTagName"] &&
                  ((_0x2a5a70 = _0x117884["grep"](
                    _0x117884["merge"](
                      [],
                      _0x529abe["getElementsByTagName"]("script")
                    ),
                    _0x4ff056
                  )),
                  _0x1bf268["splice"]["apply"](
                    _0x1bf268,
                    [_0xfab6 + 0x1, 0x0]["concat"](_0x2a5a70)
                  ),
                  (_0xfab6 += _0x2a5a70["length"]));
        }
        return _0x1bf268;
      },
      cleanData: function (_0xaf1c5, _0x35fe08) {
        for (
          var _0x1854bf,
            _0x176b90,
            _0x1f6651,
            _0x322068,
            _0x3f532d = 0x0,
            _0x59de36 = _0x117884["expando"],
            _0x1ae6bb = _0x117884["cache"],
            _0x2c3b94 = _0x117884["support"]["deleteExpando"],
            _0x3f43eb = _0x117884["event"]["special"];
          null != (_0x1f6651 = _0xaf1c5[_0x3f532d]);
          _0x3f532d++
        )
          if (_0x35fe08 || _0x117884["acceptData"](_0x1f6651)) {
            if (
              (_0x1854bf =
                (_0x176b90 = _0x1f6651[_0x59de36]) && _0x1ae6bb[_0x176b90])
            ) {
              if (_0x1854bf["events"]) {
                for (_0x322068 in _0x1854bf["events"])
                  _0x3f43eb[_0x322068]
                    ? _0x117884["event"]["remove"](_0x1f6651, _0x322068)
                    : _0x117884["removeEvent"](
                        _0x1f6651,
                        _0x322068,
                        _0x1854bf["handle"]
                      );
              }
              _0x1ae6bb[_0x176b90] &&
                (delete _0x1ae6bb[_0x176b90],
                _0x2c3b94
                  ? delete _0x1f6651[_0x59de36]
                  : _0x1f6651["removeAttribute"]
                  ? _0x1f6651["removeAttribute"](_0x59de36)
                  : (_0x1f6651[_0x59de36] = null),
                _0x117884["deletedIds"]["push"](_0x176b90));
            }
          }
      },
    });
  var _0x1c16a8, _0x11e6ac;
  (_0x117884["uaMatch"] = function (_0x4597b3) {
    return (
      (_0x4597b3 = _0x4597b3["toLowerCase"]()),
      (_0x4597b3 =
        /(chrome)[ \/]([\w.]+)/["exec"](_0x4597b3) ||
        /(webkit)[ \/]([\w.]+)/["exec"](_0x4597b3) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/["exec"](_0x4597b3) ||
        /(msie) ([\w.]+)/["exec"](_0x4597b3) ||
        (0x0 > _0x4597b3["indexOf"]("compatible") &&
          /(mozilla)(?:.*? rv:([\w.]+)|)/["exec"](_0x4597b3)) ||
        []),
      { browser: _0x4597b3[0x1] || "", version: _0x4597b3[0x2] || "0" }
    );
  }),
    (_0x1c16a8 = _0x117884["uaMatch"](_0x2b773d["userAgent"])),
    (_0x11e6ac = {}),
    _0x1c16a8["browser"] &&
      ((_0x11e6ac[_0x1c16a8["browser"]] = !0x0),
      (_0x11e6ac["version"] = _0x1c16a8["version"])),
    _0x11e6ac["chrome"]
      ? (_0x11e6ac["webkit"] = !0x0)
      : _0x11e6ac["webkit"] && (_0x11e6ac["safari"] = !0x0),
    (_0x117884["browser"] = _0x11e6ac),
    (_0x117884["sub"] = function () {
      function _0x3f5055(_0x16b676, _0x5958ce) {
        return new _0x3f5055["fn"]["init"](_0x16b676, _0x5958ce);
      }
      _0x117884["extend"](!0x0, _0x3f5055, this),
        (_0x3f5055["superclass"] = this),
        (_0x3f5055["fn"] = _0x3f5055["prototype"] = this()),
        (_0x3f5055["fn"]["constructor"] = _0x3f5055),
        (_0x3f5055["sub"] = this["sub"]),
        (_0x3f5055["fn"]["init"] = function (_0x1c9c51, _0x2a94bc) {
          return (
            _0x2a94bc &&
              _0x2a94bc instanceof _0x117884 &&
              !(_0x2a94bc instanceof _0x3f5055) &&
              (_0x2a94bc = _0x3f5055(_0x2a94bc)),
            _0x117884["fn"]["init"]["call"](
              this,
              _0x1c9c51,
              _0x2a94bc,
              _0x2c7579
            )
          );
        }),
        (_0x3f5055["fn"]["init"]["prototype"] = _0x3f5055["fn"]);
      var _0x2c7579 = _0x3f5055(_0x190c5d);
      return _0x3f5055;
    });
  var _0x3402d5,
    _0x31691d,
    _0x16a48f,
    _0x22cec4 = /alpha\([^)]*\)/i,
    _0x198ad7 = /opacity=([^)]*)/,
    _0x299c66 = /^(top|right|bottom|left)$/,
    _0x97a3e6 = /^(none|table(?!-c[ea]).+)/,
    _0x1c75e4 = /^margin/,
    _0x128d9c = RegExp("^(" + _0x384d07 + ")(.*)$", "i"),
    _0x3ba40b = RegExp("^(" + _0x384d07 + ")(?!px)[a-z%]+$", "i"),
    _0x370946 = RegExp("^([-+])=(" + _0x384d07 + ")", "i"),
    _0x56e8c1 = {},
    _0x366481 = {
      position: "absolute",
      visibility: "hidden",
      display: "block",
    },
    _0x45007a = { letterSpacing: 0x0, fontWeight: 0x190 },
    _0x36e152 = ["Top", "Right", "Bottom", "Left"],
    _0x57c5e5 = ["Webkit", "O", "Moz", "ms"],
    _0x3f9ad6 = _0x117884["fn"]["toggle"];
  _0x117884["fn"]["extend"]({
    css: function (_0x224b1f, _0x7b49bc) {
      return _0x117884["access"](
        this,
        function (_0x4e77e4, _0x457016, _0x2ed2f4) {
          return _0x2ed2f4 !== _0x549388
            ? _0x117884["style"](_0x4e77e4, _0x457016, _0x2ed2f4)
            : _0x117884["css"](_0x4e77e4, _0x457016);
        },
        _0x224b1f,
        _0x7b49bc,
        0x1 < arguments["length"]
      );
    },
    show: function () {
      return _0x5bb9b2(this, !0x0);
    },
    hide: function () {
      return _0x5bb9b2(this);
    },
    toggle: function (_0x467f49, _0x5e0718) {
      var _0x1b77c1 = "boolean" == typeof _0x467f49;
      return _0x117884["isFunction"](_0x467f49) &&
        _0x117884["isFunction"](_0x5e0718)
        ? _0x3f9ad6["apply"](this, arguments)
        : this["each"](function () {
            (_0x1b77c1 ? _0x467f49 : _0xb9663e(this))
              ? _0x117884(this)["show"]()
              : _0x117884(this)["hide"]();
          });
    },
  }),
    _0x117884["extend"]({
      cssHooks: {
        opacity: {
          get: function (_0x4850bf, _0xd0e209) {
            if (_0xd0e209) {
              var _0x5bc922 = _0x3402d5(_0x4850bf, "opacity");
              return "" === _0x5bc922 ? "1" : _0x5bc922;
            }
          },
        },
      },
      cssNumber: {
        fillOpacity: !0x0,
        fontWeight: !0x0,
        lineHeight: !0x0,
        opacity: !0x0,
        orphans: !0x0,
        widows: !0x0,
        zIndex: !0x0,
        zoom: !0x0,
      },
      cssProps: {
        float: _0x117884["support"]["cssFloat"] ? "cssFloat" : "styleFloat",
      },
      style: function (_0x14d967, _0x28e3c1, _0x27e1cd, _0x406d2c) {
        if (
          _0x14d967 &&
          !(
            0x3 === _0x14d967["nodeType"] ||
            0x8 === _0x14d967["nodeType"] ||
            !_0x14d967["style"]
          )
        ) {
          var _0x112f36,
            _0x2138a7,
            _0x2e2c70,
            _0x26799f = _0x117884["camelCase"](_0x28e3c1),
            _0x433cd6 = _0x14d967["style"];
          (_0x28e3c1 =
            _0x117884["cssProps"][_0x26799f] ||
            (_0x117884["cssProps"][_0x26799f] = _0x775991(
              _0x433cd6,
              _0x26799f
            ))),
            (_0x2e2c70 =
              _0x117884["cssHooks"][_0x28e3c1] ||
              _0x117884["cssHooks"][_0x26799f]);
          if (_0x27e1cd === _0x549388)
            return _0x2e2c70 &&
              "get" in _0x2e2c70 &&
              (_0x112f36 = _0x2e2c70["get"](_0x14d967, !0x1, _0x406d2c)) !==
                _0x549388
              ? _0x112f36
              : _0x433cd6[_0x28e3c1];
          (_0x2138a7 = typeof _0x27e1cd),
            "string" === _0x2138a7 &&
              (_0x112f36 = _0x370946["exec"](_0x27e1cd)) &&
              ((_0x27e1cd =
                (_0x112f36[0x1] + 0x1) * _0x112f36[0x2] +
                parseFloat(_0x117884["css"](_0x14d967, _0x28e3c1))),
              (_0x2138a7 = "number"));
          if (
            !(null == _0x27e1cd || ("number" === _0x2138a7 && isNaN(_0x27e1cd)))
          ) {
            if (
              ("number" === _0x2138a7 &&
                !_0x117884["cssNumber"][_0x26799f] &&
                (_0x27e1cd += "px"),
              !_0x2e2c70 ||
                !("set" in _0x2e2c70) ||
                (_0x27e1cd = _0x2e2c70["set"](
                  _0x14d967,
                  _0x27e1cd,
                  _0x406d2c
                )) !== _0x549388)
            )
              try {
                _0x433cd6[_0x28e3c1] = _0x27e1cd;
              } catch (_0xb374aa) {}
          }
        }
      },
      css: function (_0x39b627, _0x40c685, _0xb19e21, _0x2ad636) {
        var _0x3ffadb,
          _0x12bdd8,
          _0x16bd7b,
          _0xd4db0f = _0x117884["camelCase"](_0x40c685);
        return (
          (_0x40c685 =
            _0x117884["cssProps"][_0xd4db0f] ||
            (_0x117884["cssProps"][_0xd4db0f] = _0x775991(
              _0x39b627["style"],
              _0xd4db0f
            ))),
          (_0x16bd7b =
            _0x117884["cssHooks"][_0x40c685] ||
            _0x117884["cssHooks"][_0xd4db0f]),
          _0x16bd7b &&
            "get" in _0x16bd7b &&
            (_0x3ffadb = _0x16bd7b["get"](_0x39b627, !0x0, _0x2ad636)),
          _0x3ffadb === _0x549388 &&
            (_0x3ffadb = _0x3402d5(_0x39b627, _0x40c685)),
          "normal" === _0x3ffadb &&
            _0x40c685 in _0x45007a &&
            (_0x3ffadb = _0x45007a[_0x40c685]),
          _0xb19e21 || _0x2ad636 !== _0x549388
            ? ((_0x12bdd8 = parseFloat(_0x3ffadb)),
              _0xb19e21 || _0x117884["isNumeric"](_0x12bdd8)
                ? _0x12bdd8 || 0x0
                : _0x3ffadb)
            : _0x3ffadb
        );
      },
      swap: function (_0x2c5e5, _0x1f019b, _0x715a3d) {
        var _0x42418b,
          _0x5c43a9 = {};
        for (_0x42418b in _0x1f019b)
          (_0x5c43a9[_0x42418b] = _0x2c5e5["style"][_0x42418b]),
            (_0x2c5e5["style"][_0x42418b] = _0x1f019b[_0x42418b]);
        _0x715a3d = _0x715a3d["call"](_0x2c5e5);
        for (_0x42418b in _0x1f019b)
          _0x2c5e5["style"][_0x42418b] = _0x5c43a9[_0x42418b];
        return _0x715a3d;
      },
    }),
    _0x42e8aa["getComputedStyle"]
      ? (_0x3402d5 = function (_0x433747, _0xc2f0f1) {
          var _0x2843b4,
            _0x98a006,
            _0x3436cc,
            _0x49f9db,
            _0x17666b = _0x42e8aa["getComputedStyle"](_0x433747, null),
            _0x8ca7ed = _0x433747["style"];
          return (
            _0x17666b &&
              ((_0x2843b4 = _0x17666b[_0xc2f0f1]),
              "" === _0x2843b4 &&
                !_0x117884["contains"](_0x433747["ownerDocument"], _0x433747) &&
                (_0x2843b4 = _0x117884["style"](_0x433747, _0xc2f0f1)),
              _0x3ba40b["test"](_0x2843b4) &&
                _0x1c75e4["test"](_0xc2f0f1) &&
                ((_0x98a006 = _0x8ca7ed["width"]),
                (_0x3436cc = _0x8ca7ed["minWidth"]),
                (_0x49f9db = _0x8ca7ed["maxWidth"]),
                (_0x8ca7ed["minWidth"] =
                  _0x8ca7ed["maxWidth"] =
                  _0x8ca7ed["width"] =
                    _0x2843b4),
                (_0x2843b4 = _0x17666b["width"]),
                (_0x8ca7ed["width"] = _0x98a006),
                (_0x8ca7ed["minWidth"] = _0x3436cc),
                (_0x8ca7ed["maxWidth"] = _0x49f9db))),
            _0x2843b4
          );
        })
      : _0x190c5d["documentElement"]["currentStyle"] &&
        (_0x3402d5 = function (_0x36687b, _0x2b54b4) {
          var _0x1fc87a,
            _0x5e1e69,
            _0x1afe88 =
              _0x36687b["currentStyle"] && _0x36687b["currentStyle"][_0x2b54b4],
            _0x29cb7c = _0x36687b["style"];
          return (
            null == _0x1afe88 &&
              _0x29cb7c &&
              _0x29cb7c[_0x2b54b4] &&
              (_0x1afe88 = _0x29cb7c[_0x2b54b4]),
            _0x3ba40b["test"](_0x1afe88) &&
              !_0x299c66["test"](_0x2b54b4) &&
              ((_0x1fc87a = _0x29cb7c["left"]),
              (_0x5e1e69 =
                _0x36687b["runtimeStyle"] && _0x36687b["runtimeStyle"]["left"]),
              _0x5e1e69 &&
                (_0x36687b["runtimeStyle"]["left"] =
                  _0x36687b["currentStyle"]["left"]),
              (_0x29cb7c["left"] =
                "fontSize" === _0x2b54b4 ? "1em" : _0x1afe88),
              (_0x1afe88 = _0x29cb7c["pixelLeft"] + "px"),
              (_0x29cb7c["left"] = _0x1fc87a),
              _0x5e1e69 && (_0x36687b["runtimeStyle"]["left"] = _0x5e1e69)),
            "" === _0x1afe88 ? "auto" : _0x1afe88
          );
        }),
    _0x117884["each"](["height", "width"], function (_0x45a648, _0x3fc95e) {
      _0x117884["cssHooks"][_0x3fc95e] = {
        get: function (_0x542fa8, _0x5c29bc, _0x3e16c2) {
          if (_0x5c29bc)
            return 0x0 === _0x542fa8["offsetWidth"] &&
              _0x97a3e6["test"](_0x3402d5(_0x542fa8, "display"))
              ? _0x117884["swap"](_0x542fa8, _0x366481, function () {
                  return _0x2fd8ea(_0x542fa8, _0x3fc95e, _0x3e16c2);
                })
              : _0x2fd8ea(_0x542fa8, _0x3fc95e, _0x3e16c2);
        },
        set: function (_0x4ef84b, _0x4de88b, _0xdfe22e) {
          return _0x33571a(
            _0x4ef84b,
            _0x4de88b,
            _0xdfe22e
              ? _0x3ea946(
                  _0x4ef84b,
                  _0x3fc95e,
                  _0xdfe22e,
                  _0x117884["support"]["boxSizing"] &&
                    "border-box" === _0x117884["css"](_0x4ef84b, "boxSizing")
                )
              : 0x0
          );
        },
      };
    }),
    _0x117884["support"]["opacity"] ||
      (_0x117884["cssHooks"]["opacity"] = {
        get: function (_0x10229e, _0x3cca3e) {
          return _0x198ad7["test"](
            (_0x3cca3e && _0x10229e["currentStyle"]
              ? _0x10229e["currentStyle"]["filter"]
              : _0x10229e["style"]["filter"]) || ""
          )
            ? 0.01 * parseFloat(RegExp["$1"]) + ""
            : _0x3cca3e
            ? "1"
            : "";
        },
        set: function (_0x214634, _0x30b0e5) {
          var _0x344d28 = _0x214634["style"],
            _0x538d52 = _0x214634["currentStyle"],
            _0x5052c0 = _0x117884["isNumeric"](_0x30b0e5)
              ? "alpha(opacity=" + 0x64 * _0x30b0e5 + ")"
              : "",
            _0x355644 =
              (_0x538d52 && _0x538d52["filter"]) || _0x344d28["filter"] || "";
          _0x344d28["zoom"] = 0x1;
          if (
            !(
              0x1 <= _0x30b0e5 &&
              "" === _0x117884["trim"](_0x355644["replace"](_0x22cec4, "")) &&
              _0x344d28["removeAttribute"] &&
              (_0x344d28["removeAttribute"]("filter"),
              _0x538d52 && !_0x538d52["filter"])
            )
          )
            _0x344d28["filter"] = _0x22cec4["test"](_0x355644)
              ? _0x355644["replace"](_0x22cec4, _0x5052c0)
              : _0x355644 + "\x20" + _0x5052c0;
        },
      }),
    _0x117884(function () {
      _0x117884["support"]["reliableMarginRight"] ||
        (_0x117884["cssHooks"]["marginRight"] = {
          get: function (_0x246917, _0x3a8160) {
            return _0x117884["swap"](
              _0x246917,
              { display: "inline-block" },
              function () {
                if (_0x3a8160) return _0x3402d5(_0x246917, "marginRight");
              }
            );
          },
        }),
        !_0x117884["support"]["pixelPosition"] &&
          _0x117884["fn"]["position"] &&
          _0x117884["each"](["top", "left"], function (_0x397ffd, _0x54721f) {
            _0x117884["cssHooks"][_0x54721f] = {
              get: function (_0x404428, _0x14ca5f) {
                if (_0x14ca5f) {
                  var _0x33731e = _0x3402d5(_0x404428, _0x54721f);
                  return _0x3ba40b["test"](_0x33731e)
                    ? _0x117884(_0x404428)["position"]()[_0x54721f] + "px"
                    : _0x33731e;
                }
              },
            };
          });
    }),
    _0x117884["expr"] &&
      _0x117884["expr"]["filters"] &&
      ((_0x117884["expr"]["filters"]["hidden"] = function (_0x4014a2) {
        return (
          (0x0 === _0x4014a2["offsetWidth"] &&
            0x0 === _0x4014a2["offsetHeight"]) ||
          (!_0x117884["support"]["reliableHiddenOffsets"] &&
            "none" ===
              ((_0x4014a2["style"] && _0x4014a2["style"]["display"]) ||
                _0x3402d5(_0x4014a2, "display")))
        );
      }),
      (_0x117884["expr"]["filters"]["visible"] = function (_0x2db0b6) {
        return !_0x117884["expr"]["filters"]["hidden"](_0x2db0b6);
      })),
    _0x117884["each"](
      { margin: "", padding: "", border: "Width" },
      function (_0x5d1f4c, _0x254912) {
        (_0x117884["cssHooks"][_0x5d1f4c + _0x254912] = {
          expand: function (_0x7bc11b) {
            var _0x327739 =
                "string" == typeof _0x7bc11b
                  ? _0x7bc11b["split"]("\x20")
                  : [_0x7bc11b],
              _0x3495b1 = {};
            for (_0x7bc11b = 0x0; 0x4 > _0x7bc11b; _0x7bc11b++)
              _0x3495b1[_0x5d1f4c + _0x36e152[_0x7bc11b] + _0x254912] =
                _0x327739[_0x7bc11b] ||
                _0x327739[_0x7bc11b - 0x2] ||
                _0x327739[0x0];
            return _0x3495b1;
          },
        }),
          _0x1c75e4["test"](_0x5d1f4c) ||
            (_0x117884["cssHooks"][_0x5d1f4c + _0x254912]["set"] = _0x33571a);
      }
    );
  var _0x244a58 = /%20/g,
    _0x1607d = /\[\]$/,
    _0x389a16 = /\r?\n/g,
    _0xebea42 =
      /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    _0x40da58 = /^(?:select|textarea)/i;
  _0x117884["fn"]["extend"]({
    serialize: function () {
      return _0x117884["param"](this["serializeArray"]());
    },
    serializeArray: function () {
      return this["map"](function () {
        return this["elements"]
          ? _0x117884["makeArray"](this["elements"])
          : this;
      })
        ["filter"](function () {
          return (
            this["name"] &&
            !this["disabled"] &&
            (this["checked"] ||
              _0x40da58["test"](this["nodeName"]) ||
              _0xebea42["test"](this["type"]))
          );
        })
        ["map"](function (_0x33a6e2, _0x24046a) {
          var _0x33dba8 = _0x117884(this)["val"]();
          return null == _0x33dba8
            ? null
            : _0x117884["isArray"](_0x33dba8)
            ? _0x117884["map"](_0x33dba8, function (_0x3193ec) {
                return {
                  name: _0x24046a["name"],
                  value: _0x3193ec["replace"](_0x389a16, "\x0d\x0a"),
                };
              })
            : {
                name: _0x24046a["name"],
                value: _0x33dba8["replace"](_0x389a16, "\x0d\x0a"),
              };
        })
        ["get"]();
    },
  }),
    (_0x117884["param"] = function (_0x5d3aa3, _0x2a66aa) {
      var _0x21f93b,
        _0x39d2b2 = [],
        _0x4000f6 = function (_0x1565da, _0x75a5dd) {
          (_0x75a5dd = _0x117884["isFunction"](_0x75a5dd)
            ? _0x75a5dd()
            : null == _0x75a5dd
            ? ""
            : _0x75a5dd),
            (_0x39d2b2[_0x39d2b2["length"]] =
              encodeURIComponent(_0x1565da) +
              "=" +
              encodeURIComponent(_0x75a5dd));
        };
      _0x2a66aa === _0x549388 &&
        (_0x2a66aa =
          _0x117884["ajaxSettings"] &&
          _0x117884["ajaxSettings"]["traditional"]);
      if (
        _0x117884["isArray"](_0x5d3aa3) ||
        (_0x5d3aa3["jquery"] && !_0x117884["isPlainObject"](_0x5d3aa3))
      )
        _0x117884["each"](_0x5d3aa3, function () {
          _0x4000f6(this["name"], this["value"]);
        });
      else {
        for (_0x21f93b in _0x5d3aa3)
          _0x5b80b2(_0x21f93b, _0x5d3aa3[_0x21f93b], _0x2a66aa, _0x4000f6);
      }
      return _0x39d2b2["join"]("&")["replace"](_0x244a58, "+");
    });
  var _0x51c398,
    _0x5938a3,
    _0xb2189b = /#.*$/,
    _0x3a4646 = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    _0x11235e = /^(?:GET|HEAD)$/,
    _0x15e3ea = /^\/\//,
    _0x2f5102 = /\?/,
    _0x2c4eb7 = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    _0x518292 = /([?&])_=[^&]*/,
    _0x23e6a1 = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    _0x1b53f1 = _0x117884["fn"]["load"],
    _0x206b41 = {},
    _0x5955d2 = {},
    _0x183309 = ["*/"] + ["*"];
  try {
    _0x5938a3 = _0x366c94["href"];
  } catch (_0x2207d5) {
    (_0x5938a3 = _0x190c5d["createElement"]("a")),
      (_0x5938a3["href"] = ""),
      (_0x5938a3 = _0x5938a3["href"]);
  }
  (_0x51c398 = _0x23e6a1["exec"](_0x5938a3["toLowerCase"]()) || []),
    (_0x117884["fn"]["load"] = function (_0x5136a9, _0x4a927d, _0x379840) {
      if ("string" != typeof _0x5136a9 && _0x1b53f1)
        return _0x1b53f1["apply"](this, arguments);
      if (!this["length"]) return this;
      var _0x437986,
        _0x85b5e6,
        _0x2337d4,
        _0x194b1b = this,
        _0x4391e0 = _0x5136a9["indexOf"]("\x20");
      return (
        0x0 <= _0x4391e0 &&
          ((_0x437986 = _0x5136a9["slice"](_0x4391e0, _0x5136a9["length"])),
          (_0x5136a9 = _0x5136a9["slice"](0x0, _0x4391e0))),
        _0x117884["isFunction"](_0x4a927d)
          ? ((_0x379840 = _0x4a927d), (_0x4a927d = _0x549388))
          : _0x4a927d && "object" == typeof _0x4a927d && (_0x85b5e6 = "POST"),
        _0x117884["ajax"]({
          url: _0x5136a9,
          type: _0x85b5e6,
          dataType: "html",
          data: _0x4a927d,
          complete: function (_0x28fcec, _0x24e281) {
            _0x379840 &&
              _0x194b1b["each"](
                _0x379840,
                _0x2337d4 || [_0x28fcec["responseText"], _0x24e281, _0x28fcec]
              );
          },
        })["done"](function (_0x5802dd) {
          (_0x2337d4 = arguments),
            _0x194b1b["html"](
              _0x437986
                ? _0x117884("<div>")
                    ["append"](_0x5802dd["replace"](_0x2c4eb7, ""))
                    ["find"](_0x437986)
                : _0x5802dd
            );
        }),
        this
      );
    }),
    _0x117884["each"](
      "ajaxStart\x20ajaxStop\x20ajaxComplete\x20ajaxError\x20ajaxSuccess\x20ajaxSend"[
        "split"
      ]("\x20"),
      function (_0x5c80a6, _0x17f002) {
        _0x117884["fn"][_0x17f002] = function (_0x20e969) {
          return this["on"](_0x17f002, _0x20e969);
        };
      }
    ),
    _0x117884["each"](["get", "post"], function (_0x15fe95, _0x3c864f) {
      _0x117884[_0x3c864f] = function (
        _0x1353ca,
        _0x4309ef,
        _0x4ab579,
        _0x28d277
      ) {
        return (
          _0x117884["isFunction"](_0x4309ef) &&
            ((_0x28d277 = _0x28d277 || _0x4ab579),
            (_0x4ab579 = _0x4309ef),
            (_0x4309ef = _0x549388)),
          _0x117884["ajax"]({
            type: _0x3c864f,
            url: _0x1353ca,
            data: _0x4309ef,
            success: _0x4ab579,
            dataType: _0x28d277,
          })
        );
      };
    }),
    _0x117884["extend"]({
      getScript: function (_0x64355e, _0x517b71) {
        return _0x117884["get"](_0x64355e, _0x549388, _0x517b71, "script");
      },
      getJSON: function (_0x3b00cc, _0x2c7462, _0x5bd138) {
        return _0x117884["get"](_0x3b00cc, _0x2c7462, _0x5bd138, "json");
      },
      ajaxSetup: function (_0x1d46bd, _0x3819f3) {
        return (
          _0x3819f3
            ? _0x4cfedb(_0x1d46bd, _0x117884["ajaxSettings"])
            : ((_0x3819f3 = _0x1d46bd),
              (_0x1d46bd = _0x117884["ajaxSettings"])),
          _0x4cfedb(_0x1d46bd, _0x3819f3),
          _0x1d46bd
        );
      },
      ajaxSettings: {
        url: _0x5938a3,
        isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/[
          "test"
        ](_0x51c398[0x1]),
        global: !0x0,
        type: "GET",
        contentType: "application/x-www-form-urlencoded;\x20charset=UTF-8",
        processData: !0x0,
        async: !0x0,
        accepts: {
          xml: "application/xml,\x20text/xml",
          html: "text/html",
          text: "text/plain",
          json: "application/json,\x20text/javascript",
          "*": _0x183309,
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: { xml: "responseXML", text: "responseText" },
        converters: {
          "*\x20text": _0x42e8aa["String"],
          "text\x20html": !0x0,
          "text\x20json": _0x117884["parseJSON"],
          "text\x20xml": _0x117884["parseXML"],
        },
        flatOptions: { context: !0x0, url: !0x0 },
      },
      ajaxPrefilter: _0x31c3d0(_0x206b41),
      ajaxTransport: _0x31c3d0(_0x5955d2),
      ajax: function (_0x34c160, _0x6d16c3) {
        function _0x31292c(_0x321226, _0x20d8b2, _0xa15fa1, _0x3e6ed0) {
          var _0x39e3f8,
            _0x50a61a,
            _0x3189ab,
            _0x2fc953,
            _0xd9a159,
            _0x3a48ba = _0x20d8b2;
          if (0x2 !== _0xd498d5) {
            (_0xd498d5 = 0x2),
              _0x1116c1 && clearTimeout(_0x1116c1),
              (_0x4a9bac = _0x549388),
              (_0x9359e = _0x3e6ed0 || ""),
              (_0x378db3["readyState"] = 0x0 < _0x321226 ? 0x4 : 0x0);
            if (_0xa15fa1) {
              (_0x2fc953 = _0x376ce4), (_0x3e6ed0 = _0x378db3);
              var _0x414868,
                _0x2520dc,
                _0x2ad624,
                _0x27fbd4,
                _0x28a306 = _0x2fc953["contents"],
                _0x2a8076 = _0x2fc953["dataTypes"],
                _0x39c4f8 = _0x2fc953["responseFields"];
              for (_0x2520dc in _0x39c4f8)
                _0x2520dc in _0xa15fa1 &&
                  (_0x3e6ed0[_0x39c4f8[_0x2520dc]] = _0xa15fa1[_0x2520dc]);
              for (; "*" === _0x2a8076[0x0]; )
                _0x2a8076["shift"](),
                  _0x414868 === _0x549388 &&
                    (_0x414868 =
                      _0x2fc953["mimeType"] ||
                      _0x3e6ed0["getResponseHeader"]("content-type"));
              if (_0x414868) {
                for (_0x2520dc in _0x28a306)
                  if (
                    _0x28a306[_0x2520dc] &&
                    _0x28a306[_0x2520dc]["test"](_0x414868)
                  ) {
                    _0x2a8076["unshift"](_0x2520dc);
                    break;
                  }
              }
              if (_0x2a8076[0x0] in _0xa15fa1) _0x2ad624 = _0x2a8076[0x0];
              else {
                for (_0x2520dc in _0xa15fa1) {
                  if (
                    !_0x2a8076[0x0] ||
                    _0x2fc953["converters"][_0x2520dc + "\x20" + _0x2a8076[0x0]]
                  ) {
                    _0x2ad624 = _0x2520dc;
                    break;
                  }
                  _0x27fbd4 || (_0x27fbd4 = _0x2520dc);
                }
                _0x2ad624 = _0x2ad624 || _0x27fbd4;
              }
              _0x2fc953 = _0xa15fa1 = _0x2ad624
                ? (_0x2ad624 !== _0x2a8076[0x0] &&
                    _0x2a8076["unshift"](_0x2ad624),
                  _0xa15fa1[_0x2ad624])
                : void 0x0;
            }
            if (
              (0xc8 <= _0x321226 && 0x12c > _0x321226) ||
              0x130 === _0x321226
            ) {
              if (
                (_0x376ce4["ifModified"] &&
                  ((_0xd9a159 =
                    _0x378db3["getResponseHeader"]("Last-Modified")),
                  _0xd9a159 &&
                    (_0x117884["lastModified"][_0x380381] = _0xd9a159),
                  (_0xd9a159 = _0x378db3["getResponseHeader"]("Etag")),
                  _0xd9a159 && (_0x117884["etag"][_0x380381] = _0xd9a159)),
                0x130 === _0x321226)
              )
                (_0x3a48ba = "notmodified"), (_0x39e3f8 = !0x0);
              else {
                var _0x141878;
                _0x1ae18a: {
                  (_0x39e3f8 = _0x376ce4), (_0x50a61a = _0x2fc953);
                  var _0x990d7f,
                    _0x3a48ba = _0x39e3f8["dataTypes"]["slice"]();
                  (_0xa15fa1 = _0x3a48ba[0x0]),
                    (_0x414868 = {}),
                    (_0x2520dc = 0x0),
                    _0x39e3f8["dataFilter"] &&
                      (_0x50a61a = _0x39e3f8["dataFilter"](
                        _0x50a61a,
                        _0x39e3f8["dataType"]
                      ));
                  if (_0x3a48ba[0x1]) {
                    for (_0x141878 in _0x39e3f8["converters"])
                      _0x414868[_0x141878["toLowerCase"]()] =
                        _0x39e3f8["converters"][_0x141878];
                  }
                  for (; (_0x3189ab = _0x3a48ba[++_0x2520dc]); )
                    if ("*" !== _0x3189ab) {
                      if ("*" !== _0xa15fa1 && _0xa15fa1 !== _0x3189ab) {
                        _0x141878 =
                          _0x414868[_0xa15fa1 + "\x20" + _0x3189ab] ||
                          _0x414868["*\x20" + _0x3189ab];
                        if (!_0x141878) {
                          for (_0x990d7f in _0x414868)
                            if (
                              ((_0xd9a159 = _0x990d7f["split"]("\x20")),
                              _0xd9a159[0x1] === _0x3189ab &&
                                (_0x141878 =
                                  _0x414868[
                                    _0xa15fa1 + "\x20" + _0xd9a159[0x0]
                                  ] || _0x414868["*\x20" + _0xd9a159[0x0]]))
                            ) {
                              !0x0 === _0x141878
                                ? (_0x141878 = _0x414868[_0x990d7f])
                                : !0x0 !== _0x414868[_0x990d7f] &&
                                  ((_0x3189ab = _0xd9a159[0x0]),
                                  _0x3a48ba["splice"](
                                    _0x2520dc--,
                                    0x0,
                                    _0x3189ab
                                  ));
                              break;
                            }
                        }
                        if (!0x0 !== _0x141878) {
                          if (_0x141878 && _0x39e3f8["throws"])
                            _0x50a61a = _0x141878(_0x50a61a);
                          else
                            try {
                              _0x50a61a = _0x141878(_0x50a61a);
                            } catch (_0x1c0139) {
                              _0x141878 = {
                                state: "parsererror",
                                error: _0x141878
                                  ? _0x1c0139
                                  : "No\x20conversion\x20from\x20" +
                                    _0xa15fa1 +
                                    "\x20to\x20" +
                                    _0x3189ab,
                              };
                              break _0x1ae18a;
                            }
                        }
                      }
                      _0xa15fa1 = _0x3189ab;
                    }
                  _0x141878 = { state: "success", data: _0x50a61a };
                }
                (_0x39e3f8 = _0x141878),
                  (_0x3a48ba = _0x39e3f8["state"]),
                  (_0x50a61a = _0x39e3f8["data"]),
                  (_0x3189ab = _0x39e3f8["error"]),
                  (_0x39e3f8 = !_0x3189ab);
              }
            } else {
              if (((_0x3189ab = _0x3a48ba), !_0x3a48ba || _0x321226))
                (_0x3a48ba = "error"), 0x0 > _0x321226 && (_0x321226 = 0x0);
            }
            (_0x378db3["status"] = _0x321226),
              (_0x378db3["statusText"] = (_0x20d8b2 || _0x3a48ba) + ""),
              _0x39e3f8
                ? _0x49f9d7["resolveWith"](_0x376f57, [
                    _0x50a61a,
                    _0x3a48ba,
                    _0x378db3,
                  ])
                : _0x49f9d7["rejectWith"](_0x376f57, [
                    _0x378db3,
                    _0x3a48ba,
                    _0x3189ab,
                  ]),
              _0x378db3["statusCode"](_0x4e2c81),
              (_0x4e2c81 = _0x549388),
              _0x74f7fd &&
                _0x3e490f["trigger"](
                  "ajax" + (_0x39e3f8 ? "Success" : "Error"),
                  [_0x378db3, _0x376ce4, _0x39e3f8 ? _0x50a61a : _0x3189ab]
                ),
              _0x1a5983["fireWith"](_0x376f57, [_0x378db3, _0x3a48ba]),
              _0x74f7fd &&
                (_0x3e490f["trigger"]("ajaxComplete", [_0x378db3, _0x376ce4]),
                --_0x117884["active"] ||
                  _0x117884["event"]["trigger"]("ajaxStop"));
          }
        }
        "object" == typeof _0x34c160 &&
          ((_0x6d16c3 = _0x34c160), (_0x34c160 = _0x549388)),
          (_0x6d16c3 = _0x6d16c3 || {});
        var _0x380381,
          _0x9359e,
          _0x1fd143,
          _0x4a9bac,
          _0x1116c1,
          _0x3626c9,
          _0x74f7fd,
          _0x1d46ad,
          _0x376ce4 = _0x117884["ajaxSetup"]({}, _0x6d16c3),
          _0x376f57 = _0x376ce4["context"] || _0x376ce4,
          _0x3e490f =
            _0x376f57 !== _0x376ce4 &&
            (_0x376f57["nodeType"] || _0x376f57 instanceof _0x117884)
              ? _0x117884(_0x376f57)
              : _0x117884["event"],
          _0x49f9d7 = _0x117884["Deferred"](),
          _0x1a5983 = _0x117884["Callbacks"]("once\x20memory"),
          _0x4e2c81 = _0x376ce4["statusCode"] || {},
          _0x49192e = {},
          _0x1f92f5 = {},
          _0xd498d5 = 0x0,
          _0x45a8d5 = "canceled",
          _0x378db3 = {
            readyState: 0x0,
            setRequestHeader: function (_0x2e7ea2, _0x223216) {
              if (!_0xd498d5) {
                var _0x29cc5a = _0x2e7ea2["toLowerCase"]();
                (_0x2e7ea2 = _0x1f92f5[_0x29cc5a] =
                  _0x1f92f5[_0x29cc5a] || _0x2e7ea2),
                  (_0x49192e[_0x2e7ea2] = _0x223216);
              }
              return this;
            },
            getAllResponseHeaders: function () {
              return 0x2 === _0xd498d5 ? _0x9359e : null;
            },
            getResponseHeader: function (_0x24ca1a) {
              var _0x3c726b;
              if (0x2 === _0xd498d5) {
                if (!_0x1fd143) {
                  for (
                    _0x1fd143 = {};
                    (_0x3c726b = _0x3a4646["exec"](_0x9359e));

                  )
                    _0x1fd143[_0x3c726b[0x1]["toLowerCase"]()] = _0x3c726b[0x2];
                }
                _0x3c726b = _0x1fd143[_0x24ca1a["toLowerCase"]()];
              }
              return _0x3c726b === _0x549388 ? null : _0x3c726b;
            },
            overrideMimeType: function (_0x4268a9) {
              return _0xd498d5 || (_0x376ce4["mimeType"] = _0x4268a9), this;
            },
            abort: function (_0x267bea) {
              return (
                (_0x267bea = _0x267bea || _0x45a8d5),
                _0x4a9bac && _0x4a9bac["abort"](_0x267bea),
                _0x31292c(0x0, _0x267bea),
                this
              );
            },
          };
        _0x49f9d7["promise"](_0x378db3),
          (_0x378db3["success"] = _0x378db3["done"]),
          (_0x378db3["error"] = _0x378db3["fail"]),
          (_0x378db3["complete"] = _0x1a5983["add"]),
          (_0x378db3["statusCode"] = function (_0x20d0b3) {
            if (_0x20d0b3) {
              var _0x1f6cc4;
              if (0x2 > _0xd498d5) {
                for (_0x1f6cc4 in _0x20d0b3)
                  _0x4e2c81[_0x1f6cc4] = [
                    _0x4e2c81[_0x1f6cc4],
                    _0x20d0b3[_0x1f6cc4],
                  ];
              } else
                (_0x1f6cc4 = _0x20d0b3[_0x378db3["status"]]),
                  _0x378db3["always"](_0x1f6cc4);
            }
            return this;
          }),
          (_0x376ce4["url"] = ((_0x34c160 || _0x376ce4["url"]) + "")
            ["replace"](_0xb2189b, "")
            ["replace"](_0x15e3ea, _0x51c398[0x1] + "//")),
          (_0x376ce4["dataTypes"] = _0x117884["trim"](
            _0x376ce4["dataType"] || "*"
          )
            ["toLowerCase"]()
            ["split"](_0x142aaf)),
          null == _0x376ce4["crossDomain"] &&
            ((_0x3626c9 =
              _0x23e6a1["exec"](_0x376ce4["url"]["toLowerCase"]()) || !0x1),
            (_0x376ce4["crossDomain"] =
              _0x3626c9 &&
              _0x3626c9["join"](":") +
                (_0x3626c9[0x3]
                  ? ""
                  : "http:" === _0x3626c9[0x1]
                  ? 0x50
                  : 0x1bb) !==
                _0x51c398["join"](":") +
                  (_0x51c398[0x3]
                    ? ""
                    : "http:" === _0x51c398[0x1]
                    ? 0x50
                    : 0x1bb))),
          _0x376ce4["data"] &&
            _0x376ce4["processData"] &&
            "string" != typeof _0x376ce4["data"] &&
            (_0x376ce4["data"] = _0x117884["param"](
              _0x376ce4["data"],
              _0x376ce4["traditional"]
            )),
          _0x2171c8(_0x206b41, _0x376ce4, _0x6d16c3, _0x378db3);
        if (0x2 === _0xd498d5) return _0x378db3;
        (_0x74f7fd = _0x376ce4["global"]),
          (_0x376ce4["type"] = _0x376ce4["type"]["toUpperCase"]()),
          (_0x376ce4["hasContent"] = !_0x11235e["test"](_0x376ce4["type"])),
          _0x74f7fd &&
            0x0 === _0x117884["active"]++ &&
            _0x117884["event"]["trigger"]("ajaxStart");
        if (
          !_0x376ce4["hasContent"] &&
          (_0x376ce4["data"] &&
            ((_0x376ce4["url"] +=
              (_0x2f5102["test"](_0x376ce4["url"]) ? "&" : "?") +
              _0x376ce4["data"]),
            delete _0x376ce4["data"]),
          (_0x380381 = _0x376ce4["url"]),
          !0x1 === _0x376ce4["cache"])
        ) {
          _0x3626c9 = _0x117884["now"]();
          var _0x1b8f88 = _0x376ce4["url"]["replace"](
            _0x518292,
            "$1_=" + _0x3626c9
          );
          _0x376ce4["url"] =
            _0x1b8f88 +
            (_0x1b8f88 === _0x376ce4["url"]
              ? (_0x2f5102["test"](_0x376ce4["url"]) ? "&" : "?") +
                "_=" +
                _0x3626c9
              : "");
        }
        ((_0x376ce4["data"] &&
          _0x376ce4["hasContent"] &&
          !0x1 !== _0x376ce4["contentType"]) ||
          _0x6d16c3["contentType"]) &&
          _0x378db3["setRequestHeader"](
            "Content-Type",
            _0x376ce4["contentType"]
          ),
          _0x376ce4["ifModified"] &&
            ((_0x380381 = _0x380381 || _0x376ce4["url"]),
            _0x117884["lastModified"][_0x380381] &&
              _0x378db3["setRequestHeader"](
                "If-Modified-Since",
                _0x117884["lastModified"][_0x380381]
              ),
            _0x117884["etag"][_0x380381] &&
              _0x378db3["setRequestHeader"](
                "If-None-Match",
                _0x117884["etag"][_0x380381]
              )),
          _0x378db3["setRequestHeader"](
            "Accept",
            _0x376ce4["dataTypes"][0x0] &&
              _0x376ce4["accepts"][_0x376ce4["dataTypes"][0x0]]
              ? _0x376ce4["accepts"][_0x376ce4["dataTypes"][0x0]] +
                  ("*" !== _0x376ce4["dataTypes"][0x0]
                    ? ",\x20" + _0x183309 + ";\x20q=0.01"
                    : "")
              : _0x376ce4["accepts"]["*"]
          );
        for (_0x1d46ad in _0x376ce4["headers"])
          _0x378db3["setRequestHeader"](
            _0x1d46ad,
            _0x376ce4["headers"][_0x1d46ad]
          );
        if (
          !_0x376ce4["beforeSend"] ||
          (!0x1 !==
            _0x376ce4["beforeSend"]["call"](_0x376f57, _0x378db3, _0x376ce4) &&
            0x2 !== _0xd498d5)
        ) {
          _0x45a8d5 = "abort";
          for (_0x1d46ad in { success: 0x1, error: 0x1, complete: 0x1 })
            _0x378db3[_0x1d46ad](_0x376ce4[_0x1d46ad]);
          if (
            (_0x4a9bac = _0x2171c8(_0x5955d2, _0x376ce4, _0x6d16c3, _0x378db3))
          ) {
            (_0x378db3["readyState"] = 0x1),
              _0x74f7fd &&
                _0x3e490f["trigger"]("ajaxSend", [_0x378db3, _0x376ce4]),
              _0x376ce4["async"] &&
                0x0 < _0x376ce4["timeout"] &&
                (_0x1116c1 = setTimeout(function () {
                  _0x378db3["abort"]("timeout");
                }, _0x376ce4["timeout"]));
            try {
              (_0xd498d5 = 0x1), _0x4a9bac["send"](_0x49192e, _0x31292c);
            } catch (_0xf56d5c) {
              if (0x2 > _0xd498d5) _0x31292c(-0x1, _0xf56d5c);
              else throw _0xf56d5c;
            }
          } else _0x31292c(-0x1, "No\x20Transport");
          return _0x378db3;
        }
        return _0x378db3["abort"]();
      },
      active: 0x0,
      lastModified: {},
      etag: {},
    });
  var _0x3d00f0 = [],
    _0x2f16d7 = /\?/,
    _0x1c32ca = /(=)\?(?=&|$)|\?\?/,
    _0x5c7bf1 = _0x117884["now"]();
  _0x117884["ajaxSetup"]({
    jsonp: "callback",
    jsonpCallback: function () {
      var _0x4114d3 =
        _0x3d00f0["pop"]() || _0x117884["expando"] + "_" + _0x5c7bf1++;
      return (this[_0x4114d3] = !0x0), _0x4114d3;
    },
  }),
    _0x117884["ajaxPrefilter"](
      "json\x20jsonp",
      function (_0x2ae218, _0xa1b958, _0x573bf1) {
        var _0x4e9afc,
          _0x4a4a3b,
          _0x44ca52,
          _0x36f016 = _0x2ae218["data"],
          _0x5440e5 = _0x2ae218["url"],
          _0x3503e4 = !0x1 !== _0x2ae218["jsonp"],
          _0x24dd72 = _0x3503e4 && _0x1c32ca["test"](_0x5440e5),
          _0x93d4f6 =
            _0x3503e4 &&
            !_0x24dd72 &&
            "string" == typeof _0x36f016 &&
            !(_0x2ae218["contentType"] || "")["indexOf"](
              "application/x-www-form-urlencoded"
            ) &&
            _0x1c32ca["test"](_0x36f016);
        if ("jsonp" === _0x2ae218["dataTypes"][0x0] || _0x24dd72 || _0x93d4f6)
          return (
            (_0x4e9afc = _0x2ae218["jsonpCallback"] =
              _0x117884["isFunction"](_0x2ae218["jsonpCallback"])
                ? _0x2ae218["jsonpCallback"]()
                : _0x2ae218["jsonpCallback"]),
            (_0x4a4a3b = _0x42e8aa[_0x4e9afc]),
            _0x24dd72
              ? (_0x2ae218["url"] = _0x5440e5["replace"](
                  _0x1c32ca,
                  "$1" + _0x4e9afc
                ))
              : _0x93d4f6
              ? (_0x2ae218["data"] = _0x36f016["replace"](
                  _0x1c32ca,
                  "$1" + _0x4e9afc
                ))
              : _0x3503e4 &&
                (_0x2ae218["url"] +=
                  (_0x2f16d7["test"](_0x5440e5) ? "&" : "?") +
                  _0x2ae218["jsonp"] +
                  "=" +
                  _0x4e9afc),
            (_0x2ae218["converters"]["script\x20json"] = function () {
              return (
                _0x44ca52 ||
                  _0x117884["error"](_0x4e9afc + "\x20was\x20not\x20called"),
                _0x44ca52[0x0]
              );
            }),
            (_0x2ae218["dataTypes"][0x0] = "json"),
            (_0x42e8aa[_0x4e9afc] = function () {
              _0x44ca52 = arguments;
            }),
            _0x573bf1["always"](function () {
              (_0x42e8aa[_0x4e9afc] = _0x4a4a3b),
                _0x2ae218[_0x4e9afc] &&
                  ((_0x2ae218["jsonpCallback"] = _0xa1b958["jsonpCallback"]),
                  _0x3d00f0["push"](_0x4e9afc)),
                _0x44ca52 &&
                  _0x117884["isFunction"](_0x4a4a3b) &&
                  _0x4a4a3b(_0x44ca52[0x0]),
                (_0x44ca52 = _0x4a4a3b = _0x549388);
            }),
            "script"
          );
      }
    ),
    _0x117884["ajaxSetup"]({
      accepts: {
        script:
          "text/javascript,\x20application/javascript,\x20application/ecmascript,\x20application/x-ecmascript",
      },
      contents: { script: /javascript|ecmascript/ },
      converters: {
        "text\x20script": function (_0x4a27b4) {
          return _0x117884["globalEval"](_0x4a27b4), _0x4a27b4;
        },
      },
    }),
    _0x117884["ajaxPrefilter"]("script", function (_0xad991e) {
      _0xad991e["cache"] === _0x549388 && (_0xad991e["cache"] = !0x1),
        _0xad991e["crossDomain"] &&
          ((_0xad991e["type"] = "GET"), (_0xad991e["global"] = !0x1));
    }),
    _0x117884["ajaxTransport"]("script", function (_0x33db5f) {
      if (_0x33db5f["crossDomain"]) {
        var _0x758253,
          _0x397b28 =
            _0x190c5d["head"] ||
            _0x190c5d["getElementsByTagName"]("head")[0x0] ||
            _0x190c5d["documentElement"];
        return {
          send: function (_0x599369, _0x12388e) {
            (_0x758253 = _0x190c5d["createElement"]("script")),
              (_0x758253["async"] = "async"),
              _0x33db5f["scriptCharset"] &&
                (_0x758253["charset"] = _0x33db5f["scriptCharset"]),
              (_0x758253["src"] = _0x33db5f["url"]),
              (_0x758253["onload"] = _0x758253["onreadystatechange"] =
                function (_0x478d36, _0x2553aa) {
                  if (
                    _0x2553aa ||
                    !_0x758253["readyState"] ||
                    /loaded|complete/["test"](_0x758253["readyState"])
                  )
                    (_0x758253["onload"] = _0x758253["onreadystatechange"] =
                      null),
                      _0x397b28 &&
                        _0x758253["parentNode"] &&
                        _0x397b28["removeChild"](_0x758253),
                      (_0x758253 = _0x549388),
                      _0x2553aa || _0x12388e(0xc8, "success");
                }),
              _0x397b28["insertBefore"](_0x758253, _0x397b28["firstChild"]);
          },
          abort: function () {
            _0x758253 && _0x758253["onload"](0x0, 0x1);
          },
        };
      }
    });
  var _0x542d14,
    _0x5b8c88 = _0x42e8aa["ActiveXObject"]
      ? function () {
          for (var _0x606b30 in _0x542d14) _0x542d14[_0x606b30](0x0, 0x1);
        }
      : !0x1,
    _0xf78102 = 0x0;
  _0x117884["ajaxSettings"]["xhr"] = _0x42e8aa["ActiveXObject"]
    ? function () {
        var _0x3004c7;
        if (!(_0x3004c7 = !this["isLocal"] && _0xd05a7e()))
          _0x1f0a93: {
            try {
              _0x3004c7 = new _0x42e8aa["ActiveXObject"]("Microsoft.XMLHTTP");
              break _0x1f0a93;
            } catch (_0x32d7da) {}
            _0x3004c7 = void 0x0;
          }
        return _0x3004c7;
      }
    : _0xd05a7e;
  var _0x657e6 = _0x117884["ajaxSettings"]["xhr"]();
  _0x117884["extend"](_0x117884["support"], {
    ajax: !!_0x657e6,
    cors: !!_0x657e6 && "withCredentials" in _0x657e6,
  }),
    _0x117884["support"]["ajax"] &&
      _0x117884["ajaxTransport"](function (_0x13f96d) {
        if (!_0x13f96d["crossDomain"] || _0x117884["support"]["cors"]) {
          var _0x5dd5ca;
          return {
            send: function (_0x504b69, _0x980c47) {
              var _0x31b8b1,
                _0x2273f9,
                _0x153908 = _0x13f96d["xhr"]();
              _0x13f96d["username"]
                ? _0x153908["open"](
                    _0x13f96d["type"],
                    _0x13f96d["url"],
                    _0x13f96d["async"],
                    _0x13f96d["username"],
                    _0x13f96d["password"]
                  )
                : _0x153908["open"](
                    _0x13f96d["type"],
                    _0x13f96d["url"],
                    _0x13f96d["async"]
                  );
              if (_0x13f96d["xhrFields"]) {
                for (_0x2273f9 in _0x13f96d["xhrFields"])
                  _0x153908[_0x2273f9] = _0x13f96d["xhrFields"][_0x2273f9];
              }
              _0x13f96d["mimeType"] &&
                _0x153908["overrideMimeType"] &&
                _0x153908["overrideMimeType"](_0x13f96d["mimeType"]),
                !_0x13f96d["crossDomain"] &&
                  !_0x504b69["X-Requested-With"] &&
                  (_0x504b69["X-Requested-With"] = "XMLHttpRequest");
              try {
                for (_0x2273f9 in _0x504b69)
                  _0x153908["setRequestHeader"](
                    _0x2273f9,
                    _0x504b69[_0x2273f9]
                  );
              } catch (_0x2ce837) {}
              _0x153908["send"](
                (_0x13f96d["hasContent"] && _0x13f96d["data"]) || null
              ),
                (_0x5dd5ca = function (_0x5009e9, _0x3de41e) {
                  var _0x551729, _0x30501e, _0x410da9, _0x3bb4e7, _0x383fcf;
                  try {
                    if (
                      _0x5dd5ca &&
                      (_0x3de41e || 0x4 === _0x153908["readyState"])
                    ) {
                      if (
                        ((_0x5dd5ca = _0x549388),
                        _0x31b8b1 &&
                          ((_0x153908["onreadystatechange"] =
                            _0x117884["noop"]),
                          _0x5b8c88 && delete _0x542d14[_0x31b8b1]),
                        _0x3de41e)
                      )
                        0x4 !== _0x153908["readyState"] && _0x153908["abort"]();
                      else {
                        (_0x551729 = _0x153908["status"]),
                          (_0x410da9 = _0x153908["getAllResponseHeaders"]()),
                          (_0x3bb4e7 = {}),
                          (_0x383fcf = _0x153908["responseXML"]) &&
                            _0x383fcf["documentElement"] &&
                            (_0x3bb4e7["xml"] = _0x383fcf);
                        try {
                          _0x3bb4e7["text"] = _0x153908["responseText"];
                        } catch (_0x3a68ca) {}
                        try {
                          _0x30501e = _0x153908["statusText"];
                        } catch (_0x56858c) {
                          _0x30501e = "";
                        }
                        !_0x551729 &&
                        _0x13f96d["isLocal"] &&
                        !_0x13f96d["crossDomain"]
                          ? (_0x551729 = _0x3bb4e7["text"] ? 0xc8 : 0x194)
                          : 0x4c7 === _0x551729 && (_0x551729 = 0xcc);
                      }
                    }
                  } catch (_0xea8d3b) {
                    _0x3de41e || _0x980c47(-0x1, _0xea8d3b);
                  }
                  _0x3bb4e7 &&
                    _0x980c47(_0x551729, _0x30501e, _0x3bb4e7, _0x410da9);
                }),
                _0x13f96d["async"]
                  ? 0x4 === _0x153908["readyState"]
                    ? setTimeout(_0x5dd5ca, 0x0)
                    : ((_0x31b8b1 = ++_0xf78102),
                      _0x5b8c88 &&
                        (_0x542d14 ||
                          ((_0x542d14 = {}),
                          _0x117884(_0x42e8aa)["unload"](_0x5b8c88)),
                        (_0x542d14[_0x31b8b1] = _0x5dd5ca)),
                      (_0x153908["onreadystatechange"] = _0x5dd5ca))
                  : _0x5dd5ca();
            },
            abort: function () {
              _0x5dd5ca && _0x5dd5ca(0x0, 0x1);
            },
          };
        }
      });
  var _0x7b4cfe,
    _0x2c29ec,
    _0xaeeb70 = /^(?:toggle|show|hide)$/,
    _0x4283fc = RegExp("^(?:([-+])=|)(" + _0x384d07 + ")([a-z%]*)$", "i"),
    _0x201235 = /queueHooks$/,
    _0x212d2c = [
      function (_0x52d397, _0x3d12cb, _0x173d33) {
        var _0x3729e9,
          _0x56ac51,
          _0x15af7c,
          _0xb50373,
          _0x3f01d4,
          _0x37d73b,
          _0x306660 = this,
          _0x3fc410 = _0x52d397["style"],
          _0x8f09d5 = {},
          _0x47fbfe = [],
          _0x56dc9b = _0x52d397["nodeType"] && _0xb9663e(_0x52d397);
        _0x173d33["queue"] ||
          ((_0x3f01d4 = _0x117884["_queueHooks"](_0x52d397, "fx")),
          null == _0x3f01d4["unqueued"] &&
            ((_0x3f01d4["unqueued"] = 0x0),
            (_0x37d73b = _0x3f01d4["empty"]["fire"]),
            (_0x3f01d4["empty"]["fire"] = function () {
              _0x3f01d4["unqueued"] || _0x37d73b();
            })),
          _0x3f01d4["unqueued"]++,
          _0x306660["always"](function () {
            _0x306660["always"](function () {
              _0x3f01d4["unqueued"]--,
                _0x117884["queue"](_0x52d397, "fx")["length"] ||
                  _0x3f01d4["empty"]["fire"]();
            });
          })),
          0x1 === _0x52d397["nodeType"] &&
            ("height" in _0x3d12cb || "width" in _0x3d12cb) &&
            ((_0x173d33["overflow"] = [
              _0x3fc410["overflow"],
              _0x3fc410["overflowX"],
              _0x3fc410["overflowY"],
            ]),
            "inline" === _0x117884["css"](_0x52d397, "display") &&
              "none" === _0x117884["css"](_0x52d397, "float") &&
              (!_0x117884["support"]["inlineBlockNeedsLayout"] ||
              "inline" === _0x133b83(_0x52d397["nodeName"])
                ? (_0x3fc410["display"] = "inline-block")
                : (_0x3fc410["zoom"] = 0x1))),
          _0x173d33["overflow"] &&
            ((_0x3fc410["overflow"] = "hidden"),
            _0x117884["support"]["shrinkWrapBlocks"] ||
              _0x306660["done"](function () {
                (_0x3fc410["overflow"] = _0x173d33["overflow"][0x0]),
                  (_0x3fc410["overflowX"] = _0x173d33["overflow"][0x1]),
                  (_0x3fc410["overflowY"] = _0x173d33["overflow"][0x2]);
              }));
        for (_0x3729e9 in _0x3d12cb)
          (_0x56ac51 = _0x3d12cb[_0x3729e9]),
            _0xaeeb70["exec"](_0x56ac51) &&
              (delete _0x3d12cb[_0x3729e9],
              _0x56ac51 !== (_0x56dc9b ? "hide" : "show") &&
                _0x47fbfe["push"](_0x3729e9));
        if ((_0x56ac51 = _0x47fbfe["length"])) {
          (_0x15af7c =
            _0x117884["_data"](_0x52d397, "fxshow") ||
            _0x117884["_data"](_0x52d397, "fxshow", {})),
            _0x56dc9b
              ? _0x117884(_0x52d397)["show"]()
              : _0x306660["done"](function () {
                  _0x117884(_0x52d397)["hide"]();
                }),
            _0x306660["done"](function () {
              var _0x47359a;
              _0x117884["removeData"](_0x52d397, "fxshow", !0x0);
              for (_0x47359a in _0x8f09d5)
                _0x117884["style"](_0x52d397, _0x47359a, _0x8f09d5[_0x47359a]);
            });
          for (_0x3729e9 = 0x0; _0x3729e9 < _0x56ac51; _0x3729e9++)
            (_0x3d12cb = _0x47fbfe[_0x3729e9]),
              (_0xb50373 = _0x306660["createTween"](
                _0x3d12cb,
                _0x56dc9b ? _0x15af7c[_0x3d12cb] : 0x0
              )),
              (_0x8f09d5[_0x3d12cb] =
                _0x15af7c[_0x3d12cb] ||
                _0x117884["style"](_0x52d397, _0x3d12cb)),
              _0x3d12cb in _0x15af7c ||
                ((_0x15af7c[_0x3d12cb] = _0xb50373["start"]),
                _0x56dc9b &&
                  ((_0xb50373["end"] = _0xb50373["start"]),
                  (_0xb50373["start"] =
                    "width" === _0x3d12cb || "height" === _0x3d12cb
                      ? 0x1
                      : 0x0)));
        }
      },
    ],
    _0x64ebd9 = {
      "*": [
        function (_0xb7369f, _0x441f93) {
          var _0x1e2c5d,
            _0x3ceae6,
            _0x5019d = this["createTween"](_0xb7369f, _0x441f93),
            _0x75af9b = _0x4283fc["exec"](_0x441f93),
            _0x541a12 = _0x5019d["cur"](),
            _0x303c5b = +_0x541a12 || 0x0,
            _0x421667 = 0x1,
            _0x358b96 = 0x14;
          if (_0x75af9b) {
            (_0x1e2c5d = +_0x75af9b[0x2]),
              (_0x3ceae6 =
                _0x75af9b[0x3] ||
                (_0x117884["cssNumber"][_0xb7369f] ? "" : "px"));
            if ("px" !== _0x3ceae6 && _0x303c5b) {
              _0x303c5b =
                _0x117884["css"](_0x5019d["elem"], _0xb7369f, !0x0) ||
                _0x1e2c5d ||
                0x1;
              do
                (_0x421667 = _0x421667 || ".5"),
                  (_0x303c5b /= _0x421667),
                  _0x117884["style"](
                    _0x5019d["elem"],
                    _0xb7369f,
                    _0x303c5b + _0x3ceae6
                  );
              while (
                _0x421667 !== (_0x421667 = _0x5019d["cur"]() / _0x541a12) &&
                0x1 !== _0x421667 &&
                --_0x358b96
              );
            }
            (_0x5019d["unit"] = _0x3ceae6),
              (_0x5019d["start"] = _0x303c5b),
              (_0x5019d["end"] = _0x75af9b[0x1]
                ? _0x303c5b + (_0x75af9b[0x1] + 0x1) * _0x1e2c5d
                : _0x1e2c5d);
          }
          return _0x5019d;
        },
      ],
    };
  (_0x117884["Animation"] = _0x117884["extend"](_0x327125, {
    tweener: function (_0x268975, _0x1476cb) {
      _0x117884["isFunction"](_0x268975)
        ? ((_0x1476cb = _0x268975), (_0x268975 = ["*"]))
        : (_0x268975 = _0x268975["split"]("\x20"));
      for (
        var _0x176295, _0x45b74b = 0x0, _0x33f19b = _0x268975["length"];
        _0x45b74b < _0x33f19b;
        _0x45b74b++
      )
        (_0x176295 = _0x268975[_0x45b74b]),
          (_0x64ebd9[_0x176295] = _0x64ebd9[_0x176295] || []),
          _0x64ebd9[_0x176295]["unshift"](_0x1476cb);
    },
    prefilter: function (_0x5885cf, _0x2f830a) {
      _0x2f830a
        ? _0x212d2c["unshift"](_0x5885cf)
        : _0x212d2c["push"](_0x5885cf);
    },
  })),
    (_0x117884["Tween"] = _0x5a0242),
    (_0x5a0242["prototype"] = {
      constructor: _0x5a0242,
      init: function (
        _0x1f681a,
        _0x40d8b3,
        _0x181485,
        _0x547b12,
        _0x58d5ee,
        _0x455f64
      ) {
        (this["elem"] = _0x1f681a),
          (this["prop"] = _0x181485),
          (this["easing"] = _0x58d5ee || "swing"),
          (this["options"] = _0x40d8b3),
          (this["start"] = this["now"] = this["cur"]()),
          (this["end"] = _0x547b12),
          (this["unit"] =
            _0x455f64 || (_0x117884["cssNumber"][_0x181485] ? "" : "px"));
      },
      cur: function () {
        var _0x21504e = _0x5a0242["propHooks"][this["prop"]];
        return _0x21504e && _0x21504e["get"]
          ? _0x21504e["get"](this)
          : _0x5a0242["propHooks"]["_default"]["get"](this);
      },
      run: function (_0x50c9eb) {
        var _0x479f77,
          _0x40f958 = _0x5a0242["propHooks"][this["prop"]];
        return (
          this["options"]["duration"]
            ? (this["pos"] = _0x479f77 =
                _0x117884["easing"][this["easing"]](
                  _0x50c9eb,
                  this["options"]["duration"] * _0x50c9eb,
                  0x0,
                  0x1,
                  this["options"]["duration"]
                ))
            : (this["pos"] = _0x479f77 = _0x50c9eb),
          (this["now"] =
            (this["end"] - this["start"]) * _0x479f77 + this["start"]),
          this["options"]["step"] &&
            this["options"]["step"]["call"](this["elem"], this["now"], this),
          _0x40f958 && _0x40f958["set"]
            ? _0x40f958["set"](this)
            : _0x5a0242["propHooks"]["_default"]["set"](this),
          this
        );
      },
    }),
    (_0x5a0242["prototype"]["init"]["prototype"] = _0x5a0242["prototype"]),
    (_0x5a0242["propHooks"] = {
      _default: {
        get: function (_0x7b87a1) {
          var _0x197876;
          return null == _0x7b87a1["elem"][_0x7b87a1["prop"]] ||
            (_0x7b87a1["elem"]["style"] &&
              null != _0x7b87a1["elem"]["style"][_0x7b87a1["prop"]])
            ? ((_0x197876 = _0x117884["css"](
                _0x7b87a1["elem"],
                _0x7b87a1["prop"],
                !0x1,
                ""
              )),
              !_0x197876 || "auto" === _0x197876 ? 0x0 : _0x197876)
            : _0x7b87a1["elem"][_0x7b87a1["prop"]];
        },
        set: function (_0x2dc9c8) {
          _0x117884["fx"]["step"][_0x2dc9c8["prop"]]
            ? _0x117884["fx"]["step"][_0x2dc9c8["prop"]](_0x2dc9c8)
            : _0x2dc9c8["elem"]["style"] &&
              (null !=
                _0x2dc9c8["elem"]["style"][
                  _0x117884["cssProps"][_0x2dc9c8["prop"]]
                ] ||
                _0x117884["cssHooks"][_0x2dc9c8["prop"]])
            ? _0x117884["style"](
                _0x2dc9c8["elem"],
                _0x2dc9c8["prop"],
                _0x2dc9c8["now"] + _0x2dc9c8["unit"]
              )
            : (_0x2dc9c8["elem"][_0x2dc9c8["prop"]] = _0x2dc9c8["now"]);
        },
      },
    }),
    (_0x5a0242["propHooks"]["scrollTop"] = _0x5a0242["propHooks"][
      "scrollLeft"
    ] =
      {
        set: function (_0x1b8e7d) {
          _0x1b8e7d["elem"]["nodeType"] &&
            _0x1b8e7d["elem"]["parentNode"] &&
            (_0x1b8e7d["elem"][_0x1b8e7d["prop"]] = _0x1b8e7d["now"]);
        },
      }),
    _0x117884["each"](
      ["toggle", "show", "hide"],
      function (_0x29a5b8, _0x518a2a) {
        var _0x37254c = _0x117884["fn"][_0x518a2a];
        _0x117884["fn"][_0x518a2a] = function (
          _0x6a88ff,
          _0x5c01c0,
          _0x5a3cab
        ) {
          return null == _0x6a88ff ||
            "boolean" == typeof _0x6a88ff ||
            (!_0x29a5b8 &&
              _0x117884["isFunction"](_0x6a88ff) &&
              _0x117884["isFunction"](_0x5c01c0))
            ? _0x37254c["apply"](this, arguments)
            : this["animate"](
                _0x368e76(_0x518a2a, !0x0),
                _0x6a88ff,
                _0x5c01c0,
                _0x5a3cab
              );
        };
      }
    ),
    _0x117884["fn"]["extend"]({
      fadeTo: function (_0x3df8cb, _0x2d355f, _0x212251, _0x4de800) {
        return this["filter"](_0xb9663e)
          ["css"]("opacity", 0x0)
          ["show"]()
          ["end"]()
          ["animate"]({ opacity: _0x2d355f }, _0x3df8cb, _0x212251, _0x4de800);
      },
      animate: function (_0x3e9c7d, _0x3d2194, _0xcdbb4, _0x2ab0e5) {
        var _0x33a521 = _0x117884["isEmptyObject"](_0x3e9c7d),
          _0x213917 = _0x117884["speed"](_0x3d2194, _0xcdbb4, _0x2ab0e5);
        return (
          (_0x3d2194 = function () {
            var _0xe71e7f = _0x327125(
              this,
              _0x117884["extend"]({}, _0x3e9c7d),
              _0x213917
            );
            _0x33a521 && _0xe71e7f["stop"](!0x0);
          }),
          _0x33a521 || !0x1 === _0x213917["queue"]
            ? this["each"](_0x3d2194)
            : this["queue"](_0x213917["queue"], _0x3d2194)
        );
      },
      stop: function (_0x5efd0b, _0x47d1b2, _0x3737e2) {
        var _0x3f8e3f = function (_0x6bd040) {
          var _0x4f94f6 = _0x6bd040["stop"];
          delete _0x6bd040["stop"], _0x4f94f6(_0x3737e2);
        };
        return (
          "string" != typeof _0x5efd0b &&
            ((_0x3737e2 = _0x47d1b2),
            (_0x47d1b2 = _0x5efd0b),
            (_0x5efd0b = _0x549388)),
          _0x47d1b2 &&
            !0x1 !== _0x5efd0b &&
            this["queue"](_0x5efd0b || "fx", []),
          this["each"](function () {
            var _0x4e7775 = !0x0,
              _0x1f9fc1 = null != _0x5efd0b && _0x5efd0b + "queueHooks",
              _0x993d36 = _0x117884["timers"],
              _0x117c4f = _0x117884["_data"](this);
            if (_0x1f9fc1)
              _0x117c4f[_0x1f9fc1] &&
                _0x117c4f[_0x1f9fc1]["stop"] &&
                _0x3f8e3f(_0x117c4f[_0x1f9fc1]);
            else {
              for (_0x1f9fc1 in _0x117c4f)
                _0x117c4f[_0x1f9fc1] &&
                  _0x117c4f[_0x1f9fc1]["stop"] &&
                  _0x201235["test"](_0x1f9fc1) &&
                  _0x3f8e3f(_0x117c4f[_0x1f9fc1]);
            }
            for (_0x1f9fc1 = _0x993d36["length"]; _0x1f9fc1--; )
              _0x993d36[_0x1f9fc1]["elem"] === this &&
                (null == _0x5efd0b ||
                  _0x993d36[_0x1f9fc1]["queue"] === _0x5efd0b) &&
                (_0x993d36[_0x1f9fc1]["anim"]["stop"](_0x3737e2),
                (_0x4e7775 = !0x1),
                _0x993d36["splice"](_0x1f9fc1, 0x1));
            (_0x4e7775 || !_0x3737e2) && _0x117884["dequeue"](this, _0x5efd0b);
          })
        );
      },
    }),
    _0x117884["each"](
      {
        slideDown: _0x368e76("show"),
        slideUp: _0x368e76("hide"),
        slideToggle: _0x368e76("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (_0x5da4f4, _0x5aca5f) {
        _0x117884["fn"][_0x5da4f4] = function (
          _0x116100,
          _0x576297,
          _0x5ead1c
        ) {
          return this["animate"](_0x5aca5f, _0x116100, _0x576297, _0x5ead1c);
        };
      }
    ),
    (_0x117884["speed"] = function (_0x1d072e, _0x3405d9, _0x5da2ef) {
      var _0x4d0a06 =
        _0x1d072e && "object" == typeof _0x1d072e
          ? _0x117884["extend"]({}, _0x1d072e)
          : {
              complete:
                _0x5da2ef ||
                (!_0x5da2ef && _0x3405d9) ||
                (_0x117884["isFunction"](_0x1d072e) && _0x1d072e),
              duration: _0x1d072e,
              easing:
                (_0x5da2ef && _0x3405d9) ||
                (_0x3405d9 && !_0x117884["isFunction"](_0x3405d9) && _0x3405d9),
            };
      _0x4d0a06["duration"] = _0x117884["fx"]["off"]
        ? 0x0
        : "number" == typeof _0x4d0a06["duration"]
        ? _0x4d0a06["duration"]
        : _0x4d0a06["duration"] in _0x117884["fx"]["speeds"]
        ? _0x117884["fx"]["speeds"][_0x4d0a06["duration"]]
        : _0x117884["fx"]["speeds"]["_default"];
      if (null == _0x4d0a06["queue"] || !0x0 === _0x4d0a06["queue"])
        _0x4d0a06["queue"] = "fx";
      return (
        (_0x4d0a06["old"] = _0x4d0a06["complete"]),
        (_0x4d0a06["complete"] = function () {
          _0x117884["isFunction"](_0x4d0a06["old"]) &&
            _0x4d0a06["old"]["call"](this),
            _0x4d0a06["queue"] &&
              _0x117884["dequeue"](this, _0x4d0a06["queue"]);
        }),
        _0x4d0a06
      );
    }),
    (_0x117884["easing"] = {
      linear: function (_0x58f84c) {
        return _0x58f84c;
      },
      swing: function (_0x2f0032) {
        return 0.5 - Math["cos"](_0x2f0032 * Math["PI"]) / 0x2;
      },
    }),
    (_0x117884["timers"] = []),
    (_0x117884["fx"] = _0x5a0242["prototype"]["init"]),
    (_0x117884["fx"]["tick"] = function () {
      for (
        var _0x52a27c, _0x2792de = _0x117884["timers"], _0x40059d = 0x0;
        _0x40059d < _0x2792de["length"];
        _0x40059d++
      )
        (_0x52a27c = _0x2792de[_0x40059d]),
          !_0x52a27c() &&
            _0x2792de[_0x40059d] === _0x52a27c &&
            _0x2792de["splice"](_0x40059d--, 0x1);
      _0x2792de["length"] || _0x117884["fx"]["stop"]();
    }),
    (_0x117884["fx"]["timer"] = function (_0x35e5e1) {
      _0x35e5e1() &&
        _0x117884["timers"]["push"](_0x35e5e1) &&
        !_0x2c29ec &&
        (_0x2c29ec = setInterval(
          _0x117884["fx"]["tick"],
          _0x117884["fx"]["interval"]
        ));
    }),
    (_0x117884["fx"]["interval"] = 0xd),
    (_0x117884["fx"]["stop"] = function () {
      clearInterval(_0x2c29ec), (_0x2c29ec = null);
    }),
    (_0x117884["fx"]["speeds"] = { slow: 0x258, fast: 0xc8, _default: 0x190 }),
    (_0x117884["fx"]["step"] = {}),
    _0x117884["expr"] &&
      _0x117884["expr"]["filters"] &&
      (_0x117884["expr"]["filters"]["animated"] = function (_0x6b6486) {
        return _0x117884["grep"](_0x117884["timers"], function (_0x193efd) {
          return _0x6b6486 === _0x193efd["elem"];
        })["length"];
      });
  var _0x695c6 = /^(?:body|html)$/i;
  (_0x117884["fn"]["offset"] = function (_0x578ef9) {
    if (arguments["length"])
      return _0x578ef9 === _0x549388
        ? this
        : this["each"](function (_0x5598e8) {
            _0x117884["offset"]["setOffset"](this, _0x578ef9, _0x5598e8);
          });
    var _0x5bc3e5,
      _0x88eb40,
      _0x1e696a,
      _0x58abf0,
      _0x4a3841,
      _0xb0d53f,
      _0x4751af,
      _0x20d9a6 = { top: 0x0, left: 0x0 },
      _0x30dc88 = this[0x0],
      _0x580e00 = _0x30dc88 && _0x30dc88["ownerDocument"];
    if (_0x580e00)
      return (_0x88eb40 = _0x580e00["body"]) === _0x30dc88
        ? _0x117884["offset"]["bodyOffset"](_0x30dc88)
        : ((_0x5bc3e5 = _0x580e00["documentElement"]),
          _0x117884["contains"](_0x5bc3e5, _0x30dc88)
            ? ("undefined" != typeof _0x30dc88["getBoundingClientRect"] &&
                (_0x20d9a6 = _0x30dc88["getBoundingClientRect"]()),
              (_0x1e696a = _0x19a0bd(_0x580e00)),
              (_0x58abf0 =
                _0x5bc3e5["clientTop"] || _0x88eb40["clientTop"] || 0x0),
              (_0x4a3841 =
                _0x5bc3e5["clientLeft"] || _0x88eb40["clientLeft"] || 0x0),
              (_0xb0d53f = _0x1e696a["pageYOffset"] || _0x5bc3e5["scrollTop"]),
              (_0x4751af = _0x1e696a["pageXOffset"] || _0x5bc3e5["scrollLeft"]),
              {
                top: _0x20d9a6["top"] + _0xb0d53f - _0x58abf0,
                left: _0x20d9a6["left"] + _0x4751af - _0x4a3841,
              })
            : _0x20d9a6);
  }),
    (_0x117884["offset"] = {
      bodyOffset: function (_0xe94f9a) {
        var _0x14ce5c = _0xe94f9a["offsetTop"],
          _0x2e31f9 = _0xe94f9a["offsetLeft"];
        return (
          _0x117884["support"]["doesNotIncludeMarginInBodyOffset"] &&
            ((_0x14ce5c +=
              parseFloat(_0x117884["css"](_0xe94f9a, "marginTop")) || 0x0),
            (_0x2e31f9 +=
              parseFloat(_0x117884["css"](_0xe94f9a, "marginLeft")) || 0x0)),
          { top: _0x14ce5c, left: _0x2e31f9 }
        );
      },
      setOffset: function (_0x4bd25f, _0x1fb2d0, _0x172322) {
        var _0x592be6 = _0x117884["css"](_0x4bd25f, "position");
        "static" === _0x592be6 && (_0x4bd25f["style"]["position"] = "relative");
        var _0x12f6c7 = _0x117884(_0x4bd25f),
          _0x2e10aa = _0x12f6c7["offset"](),
          _0x51932c = _0x117884["css"](_0x4bd25f, "top"),
          _0x44b001 = _0x117884["css"](_0x4bd25f, "left"),
          _0x78f76c = {},
          _0x1cd7f8 = {},
          _0xb45b18,
          _0x1fac44;
        ("absolute" === _0x592be6 || "fixed" === _0x592be6) &&
        -0x1 < _0x117884["inArray"]("auto", [_0x51932c, _0x44b001])
          ? ((_0x1cd7f8 = _0x12f6c7["position"]()),
            (_0xb45b18 = _0x1cd7f8["top"]),
            (_0x1fac44 = _0x1cd7f8["left"]))
          : ((_0xb45b18 = parseFloat(_0x51932c) || 0x0),
            (_0x1fac44 = parseFloat(_0x44b001) || 0x0)),
          _0x117884["isFunction"](_0x1fb2d0) &&
            (_0x1fb2d0 = _0x1fb2d0["call"](_0x4bd25f, _0x172322, _0x2e10aa)),
          null != _0x1fb2d0["top"] &&
            (_0x78f76c["top"] =
              _0x1fb2d0["top"] - _0x2e10aa["top"] + _0xb45b18),
          null != _0x1fb2d0["left"] &&
            (_0x78f76c["left"] =
              _0x1fb2d0["left"] - _0x2e10aa["left"] + _0x1fac44),
          "using" in _0x1fb2d0
            ? _0x1fb2d0["using"]["call"](_0x4bd25f, _0x78f76c)
            : _0x12f6c7["css"](_0x78f76c);
      },
    }),
    _0x117884["fn"]["extend"]({
      position: function () {
        if (this[0x0]) {
          var _0x76a9eb = this[0x0],
            _0x20dc7b = this["offsetParent"](),
            _0x27e22b = this["offset"](),
            _0x583dc1 = _0x695c6["test"](_0x20dc7b[0x0]["nodeName"])
              ? { top: 0x0, left: 0x0 }
              : _0x20dc7b["offset"]();
          return (
            (_0x27e22b["top"] -=
              parseFloat(_0x117884["css"](_0x76a9eb, "marginTop")) || 0x0),
            (_0x27e22b["left"] -=
              parseFloat(_0x117884["css"](_0x76a9eb, "marginLeft")) || 0x0),
            (_0x583dc1["top"] +=
              parseFloat(_0x117884["css"](_0x20dc7b[0x0], "borderTopWidth")) ||
              0x0),
            (_0x583dc1["left"] +=
              parseFloat(_0x117884["css"](_0x20dc7b[0x0], "borderLeftWidth")) ||
              0x0),
            {
              top: _0x27e22b["top"] - _0x583dc1["top"],
              left: _0x27e22b["left"] - _0x583dc1["left"],
            }
          );
        }
      },
      offsetParent: function () {
        return this["map"](function () {
          for (
            var _0x31c815 = this["offsetParent"] || _0x190c5d["body"];
            _0x31c815 &&
            !_0x695c6["test"](_0x31c815["nodeName"]) &&
            "static" === _0x117884["css"](_0x31c815, "position");

          )
            _0x31c815 = _0x31c815["offsetParent"];
          return _0x31c815 || _0x190c5d["body"];
        });
      },
    }),
    _0x117884["each"](
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (_0x39a2ed, _0x2c1f50) {
        var _0x22b974 = /Y/["test"](_0x2c1f50);
        _0x117884["fn"][_0x39a2ed] = function (_0x3b58ac) {
          return _0x117884["access"](
            this,
            function (_0x448881, _0x30e000, _0x3f32fa) {
              var _0x17c2b1 = _0x19a0bd(_0x448881);
              if (_0x3f32fa === _0x549388)
                return _0x17c2b1
                  ? _0x2c1f50 in _0x17c2b1
                    ? _0x17c2b1[_0x2c1f50]
                    : _0x17c2b1["document"]["documentElement"][_0x30e000]
                  : _0x448881[_0x30e000];
              _0x17c2b1
                ? _0x17c2b1["scrollTo"](
                    _0x22b974
                      ? _0x117884(_0x17c2b1)["scrollLeft"]()
                      : _0x3f32fa,
                    _0x22b974 ? _0x3f32fa : _0x117884(_0x17c2b1)["scrollTop"]()
                  )
                : (_0x448881[_0x30e000] = _0x3f32fa);
            },
            _0x39a2ed,
            _0x3b58ac,
            arguments["length"],
            null
          );
        };
      }
    ),
    _0x117884["each"](
      { Height: "height", Width: "width" },
      function (_0x59a232, _0x29251c) {
        _0x117884["each"](
          {
            padding: "inner" + _0x59a232,
            content: _0x29251c,
            "": "outer" + _0x59a232,
          },
          function (_0x52ac03, _0x539331) {
            _0x117884["fn"][_0x539331] = function (_0x4f9c3c, _0xf9b342) {
              var _0x28684b =
                  arguments["length"] &&
                  (_0x52ac03 || "boolean" != typeof _0x4f9c3c),
                _0x134433 =
                  _0x52ac03 ||
                  (!0x0 === _0x4f9c3c || !0x0 === _0xf9b342
                    ? "margin"
                    : "border");
              return _0x117884["access"](
                this,
                function (_0x56f637, _0x47d4f4, _0x23b21a) {
                  var _0x446315;
                  return _0x117884["isWindow"](_0x56f637)
                    ? _0x56f637["document"]["documentElement"][
                        "client" + _0x59a232
                      ]
                    : 0x9 === _0x56f637["nodeType"]
                    ? ((_0x446315 = _0x56f637["documentElement"]),
                      Math["max"](
                        _0x56f637["body"]["scroll" + _0x59a232],
                        _0x446315["scroll" + _0x59a232],
                        _0x56f637["body"]["offset" + _0x59a232],
                        _0x446315["offset" + _0x59a232],
                        _0x446315["client" + _0x59a232]
                      ))
                    : _0x23b21a === _0x549388
                    ? _0x117884["css"](
                        _0x56f637,
                        _0x47d4f4,
                        _0x23b21a,
                        _0x134433
                      )
                    : _0x117884["style"](
                        _0x56f637,
                        _0x47d4f4,
                        _0x23b21a,
                        _0x134433
                      );
                },
                _0x29251c,
                _0x28684b ? _0x4f9c3c : _0x549388,
                _0x28684b,
                null
              );
            };
          }
        );
      }
    ),
    (_0x42e8aa["jQuery"] = _0x42e8aa["$"] = _0x117884),
    "function" == typeof define &&
      define["amd"] &&
      define["amd"]["jQuery"] &&
      define("jquery", [], function () {
        return _0x117884;
      });
})(window);
function getInternetExplorerVersion() {
  var _0x4d24d3 = -0x1;
  return (
    "Microsoft\x20Internet\x20Explorer" == navigator["appName"] &&
      null != /MSIE ([0-9]{1,}[.0-9]{0,})/["exec"](navigator["userAgent"]) &&
      (_0x4d24d3 = parseFloat(RegExp["$1"])),
    _0x4d24d3
  );
}
var ie = getInternetExplorerVersion();
function getQueryVariable(_0x41e53d) {
  for (
    var _0x304965 = window["location"]["search"]
        ["substring"](0x1)
        ["split"]("&"),
      _0x21ea59 = 0x0;
    _0x21ea59 < _0x304965["length"];
    _0x21ea59++
  ) {
    var _0x393b4f = _0x304965[_0x21ea59]["split"]("=");
    if (decodeURIComponent(_0x393b4f[0x0]) == _0x41e53d)
      return decodeURIComponent(_0x393b4f[0x1]);
  }
}
(this["jukebox"] = {}),
  (jukebox["Player"] = function (_0x3f6ddd, _0x561b1c) {
    (this["id"] = ++jukebox["__jukeboxId"]),
      (this["origin"] = _0x561b1c || null),
      (this["settings"] = {});
    for (var _0x3037cb in this["defaults"])
      this["settings"][_0x3037cb] = this["defaults"][_0x3037cb];
    if (
      "[object\x20Object]" ===
      Object["prototype"]["toString"]["call"](_0x3f6ddd)
    ) {
      for (var _0x1aa6ed in _0x3f6ddd)
        this["settings"][_0x1aa6ed] = _0x3f6ddd[_0x1aa6ed];
    }
    "[object\x20Function]" ===
      Object["prototype"]["toString"]["call"](jukebox["Manager"]) &&
      (jukebox["Manager"] = new jukebox["Manager"]()),
      (this["resource"] = this["isPlaying"] = null),
      (this["resource"] =
        "[object\x20Object]" ===
        Object["prototype"]["toString"]["call"](jukebox["Manager"])
          ? jukebox["Manager"]["getPlayableResource"](
              this["settings"]["resources"]
            )
          : this["settings"]["resources"][0x0] || null);
    if (null === this["resource"])
      throw "Your\x20browser\x20can\x27t\x20playback\x20the\x20given\x20resources\x20-\x20or\x20you\x20have\x20missed\x20to\x20include\x20jukebox.Manager";
    return this["__init"](), this;
  }),
  (jukebox["__jukeboxId"] = 0x0),
  (jukebox["Player"]["prototype"] = {
    defaults: {
      resources: [],
      autoplay: !0x1,
      spritemap: {},
      flashMediaElement: "./swf/FlashMediaElement.swf",
      timeout: 0x3e8,
    },
    __addToManager: function () {
      !0x0 !== this["__wasAddedToManager"] &&
        (jukebox["Manager"]["add"](this), (this["__wasAddedToManager"] = !0x0));
    },
    __init: function () {
      var _0x5c3880 = this,
        _0xffea9e = this["settings"],
        _0x18b11f = {},
        _0x2e6b46;
      jukebox["Manager"] &&
        void 0x0 !== jukebox["Manager"]["features"] &&
        (_0x18b11f = jukebox["Manager"]["features"]);
      if (!0x0 === _0x18b11f["html5audio"]) {
        (this["context"] = new Audio()),
          (this["context"]["src"] = this["resource"]);
        if (null === this["origin"]) {
          var _0x469137 = function (_0x11b29e) {
            _0x5c3880["__addToManager"](_0x11b29e);
          };
          this["context"]["addEventListener"](
            "canplaythrough",
            _0x469137,
            !0x0
          ),
            window["setTimeout"](function () {
              _0x5c3880["context"]["removeEventListener"](
                "canplaythrough",
                _0x469137,
                !0x0
              ),
                _0x469137("timeout");
            }, _0xffea9e["timeout"]);
        }
        (this["context"]["autobuffer"] = !0x0),
          (this["context"]["preload"] = !0x0);
        for (_0x2e6b46 in this["HTML5API"])
          this[_0x2e6b46] = this["HTML5API"][_0x2e6b46];
        0x1 < _0x18b11f["channels"]
          ? !0x0 === _0xffea9e["autoplay"]
            ? (this["context"]["autoplay"] = !0x0)
            : void 0x0 !== _0xffea9e["spritemap"][_0xffea9e["autoplay"]] &&
              this["play"](_0xffea9e["autoplay"])
          : 0x1 === _0x18b11f["channels"] &&
            void 0x0 !== _0xffea9e["spritemap"][_0xffea9e["autoplay"]] &&
            ((this["backgroundMusic"] =
              _0xffea9e["spritemap"][_0xffea9e["autoplay"]]),
            (this["backgroundMusic"]["started"] = Date["now"]
              ? Date["now"]()
              : +new Date()),
            this["play"](_0xffea9e["autoplay"])),
          0x1 == _0x18b11f["channels"] &&
            !0x0 !== _0xffea9e["canPlayBackground"] &&
            (window["addEventListener"]("pagehide", function () {
              null !== _0x5c3880["isPlaying"] &&
                (_0x5c3880["pause"](), (_0x5c3880["__wasAutoPaused"] = !0x0));
            }),
            window["addEventListener"]("pageshow", function () {
              _0x5c3880["__wasAutoPaused"] &&
                (_0x5c3880["resume"](), delete _0x5c3880["_wasAutoPaused"]);
            }));
      } else {
        if (!0x0 === _0x18b11f["flashaudio"]) {
          for (_0x2e6b46 in this["FLASHAPI"])
            this[_0x2e6b46] = this["FLASHAPI"][_0x2e6b46];
          (_0x18b11f = [
            "id=jukebox-flashstream-" + this["id"],
            "autoplay=" + _0xffea9e["autoplay"],
            "file=" + window["encodeURIComponent"](this["resource"]),
          ]),
            this["__initFlashContext"](_0x18b11f),
            !0x0 === _0xffea9e["autoplay"]
              ? this["play"](0x0)
              : _0xffea9e["spritemap"][_0xffea9e["autoplay"]] &&
                this["play"](_0xffea9e["autoplay"]);
        } else
          throw "Your\x20Browser\x20does\x20not\x20support\x20Flash\x20Audio\x20or\x20HTML5\x20Audio.";
      }
    },
    __initFlashContext: function (_0x146c14) {
      var _0x436132,
        _0x555a7a = this["settings"]["flashMediaElement"],
        _0x102705,
        _0x254c5c = {
          flashvars: _0x146c14["join"]("&"),
          quality: "high",
          bgcolor: "#000000",
          wmode: "transparent",
          allowscriptaccess: "always",
          allowfullscreen: "true",
        };
      if (navigator["userAgent"]["match"](/MSIE/)) {
        (_0x436132 = document["createElement"]("div")),
          document["getElementsByTagName"]("body")[0x0]["appendChild"](
            _0x436132
          );
        var _0x5e8917 = document["createElement"]("object");
        (_0x5e8917["id"] = "jukebox-flashstream-" + this["id"]),
          _0x5e8917["setAttribute"]("type", "application/x-shockwave-flash"),
          _0x5e8917["setAttribute"](
            "classid",
            "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
          ),
          _0x5e8917["setAttribute"]("width", "0"),
          _0x5e8917["setAttribute"]("height", "0"),
          (_0x254c5c["movie"] =
            _0x555a7a + "?x=" + (Date["now"] ? Date["now"]() : +new Date())),
          (_0x254c5c["flashvars"] = _0x146c14["join"]("&amp;"));
        for (_0x102705 in _0x254c5c)
          (_0x146c14 = document["createElement"]("param")),
            _0x146c14["setAttribute"]("name", _0x102705),
            _0x146c14["setAttribute"]("value", _0x254c5c[_0x102705]),
            _0x5e8917["appendChild"](_0x146c14);
        (_0x436132["outerHTML"] = _0x5e8917["outerHTML"]),
          (this["context"] = document["getElementById"](
            "jukebox-flashstream-" + this["id"]
          ));
      } else {
        (_0x436132 = document["createElement"]("embed")),
          (_0x436132["id"] = "jukebox-flashstream-" + this["id"]),
          _0x436132["setAttribute"]("type", "application/x-shockwave-flash"),
          _0x436132["setAttribute"]("width", "100"),
          _0x436132["setAttribute"]("height", "100"),
          (_0x254c5c["play"] = !0x1),
          (_0x254c5c["loop"] = !0x1),
          (_0x254c5c["src"] =
            _0x555a7a + "?x=" + (Date["now"] ? Date["now"]() : +new Date()));
        for (_0x102705 in _0x254c5c)
          _0x436132["setAttribute"](_0x102705, _0x254c5c[_0x102705]);
        document["getElementsByTagName"]("body")[0x0]["appendChild"](_0x436132),
          (this["context"] = _0x436132);
      }
    },
    backgroundHackForiOS: function () {
      if (void 0x0 !== this["backgroundMusic"]) {
        var _0x511438 = Date["now"] ? Date["now"]() : +new Date();
        void 0x0 === this["backgroundMusic"]["started"]
          ? ((this["backgroundMusic"]["started"] = _0x511438),
            this["setCurrentTime"](this["backgroundMusic"]["start"]))
          : ((this["backgroundMusic"]["lastPointer"] =
              (((_0x511438 - this["backgroundMusic"]["started"]) / 0x3e8) %
                (this["backgroundMusic"]["end"] -
                  this["backgroundMusic"]["start"])) +
              this["backgroundMusic"]["start"]),
            this["play"](this["backgroundMusic"]["lastPointer"]));
      }
    },
    play: function (_0x231d89, _0x147195) {
      if (null !== this["isPlaying"] && !0x0 !== _0x147195)
        void 0x0 !== jukebox["Manager"] &&
          jukebox["Manager"]["addToQueue"](_0x231d89, this["id"]);
      else {
        var _0x2a03a7 = this["settings"]["spritemap"],
          _0x270d84;
        if (void 0x0 !== _0x2a03a7[_0x231d89])
          _0x270d84 = _0x2a03a7[_0x231d89]["start"];
        else {
          if ("number" === typeof _0x231d89) {
            _0x270d84 = _0x231d89;
            for (var _0x260c03 in _0x2a03a7)
              if (
                _0x270d84 >= _0x2a03a7[_0x260c03]["start"] &&
                _0x270d84 <= _0x2a03a7[_0x260c03]["end"]
              ) {
                _0x231d89 = _0x260c03;
                break;
              }
          }
        }
        void 0x0 !== _0x270d84 &&
          "[object\x20Object]" ===
            Object["prototype"]["toString"]["call"](_0x2a03a7[_0x231d89]) &&
          ((this["isPlaying"] = this["settings"]["spritemap"][_0x231d89]),
          this["context"]["play"] && this["context"]["play"](),
          (this["wasReady"] = this["setCurrentTime"](_0x270d84)));
      }
    },
    stop: function () {
      return (
        (this["__lastPosition"] = 0x0),
        (this["isPlaying"] = null),
        this["backgroundMusic"]
          ? this["backgroundHackForiOS"]()
          : this["context"]["pause"](),
        !0x0
      );
    },
    pause: function () {
      return (
        (this["isPlaying"] = null),
        (this["__lastPosition"] = this["getCurrentTime"]()),
        this["context"]["pause"](),
        this["__lastPosition"]
      );
    },
    resume: function (_0x4dd250) {
      _0x4dd250 =
        "number" === typeof _0x4dd250 ? _0x4dd250 : this["__lastPosition"];
      if (null !== _0x4dd250)
        return this["play"](_0x4dd250), (this["__lastPosition"] = null), !0x0;
      return this["context"]["play"](), !0x1;
    },
    HTML5API: {
      getVolume: function () {
        return this["context"]["volume"] || 0x1;
      },
      setVolume: function (_0x297b93) {
        return (
          (this["context"]["volume"] = _0x297b93),
          0.0001 > Math["abs"](this["context"]["volume"] - _0x297b93)
            ? !0x0
            : !0x1
        );
      },
      getCurrentTime: function () {
        return this["context"]["currentTime"] || 0x0;
      },
      setCurrentTime: function (_0x31296e) {
        try {
          return (this["context"]["currentTime"] = _0x31296e), !0x0;
        } catch (_0x3b73ab) {
          return !0x1;
        }
      },
    },
    FLASHAPI: {
      getVolume: function () {
        return this["context"] &&
          "function" === typeof this["context"]["getVolume"]
          ? this["context"]["getVolume"]()
          : 0x1;
      },
      setVolume: function (_0x3dbda7) {
        return this["context"] &&
          "function" === typeof this["context"]["setVolume"]
          ? (this["context"]["setVolume"](_0x3dbda7), !0x0)
          : !0x1;
      },
      getCurrentTime: function () {
        return this["context"] &&
          "function" === typeof this["context"]["getCurrentTime"]
          ? this["context"]["getCurrentTime"]()
          : 0x0;
      },
      setCurrentTime: function (_0x25fc35) {
        return this["context"] &&
          "function" === typeof this["context"]["setCurrentTime"]
          ? this["context"]["setCurrentTime"](_0x25fc35)
          : !0x1;
      },
    },
  });
if (void 0x0 === this["jukebox"])
  throw "jukebox.Manager\x20requires\x20jukebox.Player\x20(Player.js)\x20to\x20run\x20properly.";
(jukebox["Manager"] = function (_0x1e2168) {
  (this["features"] = {}),
    (this["codecs"] = {}),
    (this["__players"] = {}),
    (this["__playersLength"] = 0x0),
    (this["__clones"] = {}),
    (this["__queue"] = []),
    (this["settings"] = {});
  for (var _0x67cf86 in this["defaults"])
    this["settings"][_0x67cf86] = this["defaults"][_0x67cf86];
  if (
    "[object\x20Object]" === Object["prototype"]["toString"]["call"](_0x1e2168)
  ) {
    for (var _0xde1a73 in _0x1e2168)
      this["settings"][_0xde1a73] = _0x1e2168[_0xde1a73];
  }
  this["__detectFeatures"](),
    (jukebox["Manager"]["__initialized"] =
      !0x1 === this["settings"]["useGameLoop"]
        ? window["setInterval"](function () {
            jukebox["Manager"]["loop"]();
          }, 0x14)
        : !0x0);
}),
  (jukebox["Manager"]["prototype"] = {
    defaults: { useFlash: !0x1, useGameLoop: !0x1 },
    __detectFeatures: function () {
      var _0x323707 = window["Audio"] && new Audio();
      if (
        _0x323707 &&
        _0x323707["canPlayType"] &&
        !0x1 === this["settings"]["useFlash"]
      ) {
        for (
          var _0x23fb07 = [
              { e: "3gp", m: ["audio/3gpp", "audio/amr"] },
              { e: "aac", m: ["audio/aac", "audio/aacp"] },
              { e: "amr", m: ["audio/amr", "audio/3gpp"] },
              {
                e: "caf",
                m: [
                  "audio/IMA-ADPCM",
                  "audio/x-adpcm",
                  "audio/x-aiff;\x20codecs=\x22IMA-ADPCM,\x20ADPCM\x22",
                ],
              },
              {
                e: "m4a",
                m: "audio/mp4{audio/mp4;\x20codecs=\x22mp4a.40.2,avc1.42E01E\x22{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a"[
                  "split"
                ]("{"),
              },
              {
                e: "mp3",
                m: [
                  "audio/mp3",
                  "audio/mpeg",
                  "audio/mpeg;\x20codecs=\x22mp3\x22",
                  "audio/MPA",
                  "audio/mpa-robust",
                ],
              },
              {
                e: "mpga",
                m: [
                  "audio/MPA",
                  "audio/mpa-robust",
                  "audio/mpeg",
                  "video/mpeg",
                ],
              },
              { e: "mp4", m: ["audio/mp4", "video/mp4"] },
              {
                e: "ogg",
                m: [
                  "application/ogg",
                  "audio/ogg",
                  "audio/ogg;\x20codecs=\x22theora,\x20vorbis\x22",
                  "video/ogg",
                  "video/ogg;\x20codecs=\x22theora,\x20vorbis\x22",
                ],
              },
              {
                e: "wav",
                m: [
                  "audio/wave",
                  "audio/wav",
                  "audio/wav;\x20codecs=\x221\x22",
                  "audio/x-wav",
                  "audio/x-pn-wav",
                ],
              },
              {
                e: "webm",
                m: [
                  "audio/webm",
                  "audio/webm;\x20codecs=\x22vorbis\x22",
                  "video/webm",
                ],
              },
            ],
            _0x5858dc,
            _0x555a59,
            _0x33c007 = 0x0,
            _0x4c2245 = _0x23fb07["length"];
          _0x33c007 < _0x4c2245;
          _0x33c007++
        )
          if (
            ((_0x555a59 = _0x23fb07[_0x33c007]["e"]),
            _0x23fb07[_0x33c007]["m"]["length"] &&
              "object" === typeof _0x23fb07[_0x33c007]["m"])
          ) {
            for (
              var _0x145b7d = 0x0,
                _0x5936be = _0x23fb07[_0x33c007]["m"]["length"];
              _0x145b7d < _0x5936be;
              _0x145b7d++
            )
              if (
                ((_0x5858dc = _0x23fb07[_0x33c007]["m"][_0x145b7d]),
                "" !== _0x323707["canPlayType"](_0x5858dc))
              ) {
                this["codecs"][_0x555a59] = _0x5858dc;
                break;
              } else
                this["codecs"][_0x555a59] || (this["codecs"][_0x555a59] = !0x1);
          }
        (this["features"]["html5audio"] = !(
          !this["codecs"]["mp3"] &&
          !this["codecs"]["ogg"] &&
          !this["codecs"]["webm"] &&
          !this["codecs"]["wav"]
        )),
          (this["features"]["channels"] = 0x8),
          (_0x323707["volume"] = 0.1337),
          (this["features"]["volume"] = !!(
            0.0001 > Math["abs"](_0x323707["volume"] - 0.1337)
          )),
          navigator["userAgent"]["match"](/iPhone|iPod|iPad/i) &&
            (this["features"]["channels"] = 0x1);
      }
      this["features"]["flashaudio"] =
        !!navigator["mimeTypes"]["application/x-shockwave-flash"] ||
        !!navigator["plugins"]["Shockwave\x20Flash"] ||
        !0x1;
      if (window["ActiveXObject"])
        try {
          new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10"),
            (this["features"]["flashaudio"] = !0x0);
        } catch (_0x5af1eb) {}
      !0x0 === this["settings"]["useFlash"] &&
        (this["features"]["flashaudio"] = !0x0),
        !0x0 === this["features"]["flashaudio"] &&
          !this["features"]["html5audio"] &&
          ((this["codecs"]["mp3"] = "audio/mp3"),
          (this["codecs"]["mpga"] = "audio/mpeg"),
          (this["codecs"]["mp4"] = "audio/mp4"),
          (this["codecs"]["m4a"] = "audio/mp4"),
          (this["codecs"]["3gp"] = "audio/3gpp"),
          (this["codecs"]["amr"] = "audio/amr"),
          (this["features"]["volume"] = !0x0),
          (this["features"]["channels"] = 0x1));
    },
    __getPlayerById: function (_0x4325fa) {
      return this["__players"] && void 0x0 !== this["__players"][_0x4325fa]
        ? this["__players"][_0x4325fa]
        : null;
    },
    __getClone: function (_0x51af97, _0x26f2c7) {
      for (var _0x41e02a in this["__clones"]) {
        var _0x1d43c0 = this["__clones"][_0x41e02a];
        if (
          null === _0x1d43c0["isPlaying"] &&
          _0x1d43c0["origin"] === _0x51af97
        )
          return _0x1d43c0;
      }
      if (
        "[object\x20Object]" ===
        Object["prototype"]["toString"]["call"](_0x26f2c7)
      ) {
        _0x41e02a = {};
        for (var _0x33664b in _0x26f2c7)
          _0x41e02a[_0x33664b] = _0x26f2c7[_0x33664b];
        return (
          (_0x41e02a["autoplay"] = !0x1),
          (_0x33664b = new jukebox["Player"](_0x41e02a, _0x51af97)),
          (_0x33664b["isClone"] = !0x0),
          (_0x33664b["wasReady"] = !0x1),
          (this["__clones"][_0x33664b["id"]] = _0x33664b)
        );
      }
      return null;
    },
    loop: function () {
      if (0x0 !== this["__playersLength"]) {
        if (
          this["__queue"]["length"] &&
          this["__playersLength"] < this["features"]["channels"]
        ) {
          var _0x510738 = this["__queue"][0x0],
            _0x30e2aa = this["__getPlayerById"](_0x510738["origin"]);
          if (null !== _0x30e2aa) {
            var _0x20f3b5 = this["__getClone"](
              _0x510738["origin"],
              _0x30e2aa["settings"]
            );
            null !== _0x20f3b5 &&
              (!0x0 === this["features"]["volume"] &&
                (_0x30e2aa = this["__players"][_0x510738["origin"]]) &&
                _0x20f3b5["setVolume"](_0x30e2aa["getVolume"]()),
              this["add"](_0x20f3b5),
              _0x20f3b5["play"](_0x510738["pointer"], !0x0));
          }
          this["__queue"]["splice"](0x0, 0x1);
        } else {
          for (_0x20f3b5 in (this["__queue"]["length"] &&
            0x1 === this["features"]["channels"] &&
            ((_0x510738 = this["__queue"][0x0]),
            (_0x30e2aa = this["__getPlayerById"](_0x510738["origin"])),
            null !== _0x30e2aa && _0x30e2aa["play"](_0x510738["pointer"], !0x0),
            this["__queue"]["splice"](0x0, 0x1)),
          this["__players"]))
            (_0x510738 = this["__players"][_0x20f3b5]),
              (_0x30e2aa = _0x510738["getCurrentTime"]() || 0x0),
              _0x510738["isPlaying"] && !0x1 === _0x510738["wasReady"]
                ? (_0x510738["wasReady"] = _0x510738["setCurrentTime"](
                    _0x510738["isPlaying"]["start"]
                  ))
                : _0x510738["isPlaying"] && !0x0 === _0x510738["wasReady"]
                ? _0x30e2aa > _0x510738["isPlaying"]["end"] &&
                  (!0x0 === _0x510738["isPlaying"]["loop"]
                    ? _0x510738["play"](_0x510738["isPlaying"]["start"], !0x0)
                    : _0x510738["stop"]())
                : _0x510738["isClone"] && null === _0x510738["isPlaying"]
                ? this["remove"](_0x510738)
                : void 0x0 !== _0x510738["backgroundMusic"] &&
                  null === _0x510738["isPlaying"] &&
                  _0x30e2aa > _0x510738["backgroundMusic"]["end"] &&
                  _0x510738["backgroundHackForiOS"]();
        }
      }
    },
    getPlayableResource: function (_0x4c2aaf) {
      "[object\x20Array]" !==
        Object["prototype"]["toString"]["call"](_0x4c2aaf) &&
        (_0x4c2aaf = [_0x4c2aaf]);
      for (
        var _0x5cade5 = 0x0, _0xc40adc = _0x4c2aaf["length"];
        _0x5cade5 < _0xc40adc;
        _0x5cade5++
      ) {
        var _0x61ff1e = _0x4c2aaf[_0x5cade5],
          _0x28b543 = _0x61ff1e["match"](/\.([^\.]*)$/)[0x1];
        if (_0x28b543 && this["codecs"][_0x28b543]) return _0x61ff1e;
      }
      return null;
    },
    add: function (_0x4cb992) {
      return _0x4cb992 instanceof jukebox["Player"] &&
        void 0x0 === this["__players"][_0x4cb992["id"]]
        ? (this["__playersLength"]++,
          (this["__players"][_0x4cb992["id"]] = _0x4cb992),
          !0x0)
        : !0x1;
    },
    remove: function (_0x55d5c6) {
      return _0x55d5c6 instanceof jukebox["Player"] &&
        void 0x0 !== this["__players"][_0x55d5c6["id"]]
        ? (this["__playersLength"]--,
          delete this["__players"][_0x55d5c6["id"]],
          !0x0)
        : !0x1;
    },
    addToQueue: function (_0x42e80f, _0x3087e0) {
      return ("string" === typeof _0x42e80f || "number" === typeof _0x42e80f) &&
        void 0x0 !== this["__players"][_0x3087e0]
        ? (this["__queue"]["push"]({ pointer: _0x42e80f, origin: _0x3087e0 }),
          !0x0)
        : !0x1;
    },
  }),
  (function () {
    var _0x45e282 = function () {
      this["init"]();
    };
    _0x45e282["prototype"] = {
      init: function () {
        var _0x2e732b = this || _0x162690;
        return (
          (_0x2e732b["_counter"] = 0x3e8),
          (_0x2e732b["_codecs"] = {}),
          (_0x2e732b["_howls"] = []),
          (_0x2e732b["_muted"] = !0x1),
          (_0x2e732b["_volume"] = 0x1),
          (_0x2e732b["_canPlayEvent"] = "canplaythrough"),
          (_0x2e732b["_navigator"] =
            "undefined" !== typeof window && window["navigator"]
              ? window["navigator"]
              : null),
          (_0x2e732b["masterGain"] = null),
          (_0x2e732b["noAudio"] = !0x1),
          (_0x2e732b["usingWebAudio"] = !0x0),
          (_0x2e732b["autoSuspend"] = !0x0),
          (_0x2e732b["ctx"] = null),
          (_0x2e732b["mobileAutoEnable"] = !0x0),
          _0x2e732b["_setup"](),
          _0x2e732b
        );
      },
      volume: function (_0x306874) {
        var _0xa5bbbe = this || _0x162690;
        (_0x306874 = parseFloat(_0x306874)), _0xa5bbbe["ctx"] || _0x4b0702();
        if (
          "undefined" !== typeof _0x306874 &&
          0x0 <= _0x306874 &&
          0x1 >= _0x306874
        ) {
          _0xa5bbbe["_volume"] = _0x306874;
          if (_0xa5bbbe["_muted"]) return _0xa5bbbe;
          _0xa5bbbe["usingWebAudio"] &&
            _0xa5bbbe["masterGain"]["gain"]["setValueAtTime"](
              _0x306874,
              _0x162690["ctx"]["currentTime"]
            );
          for (
            var _0x4f23ab = 0x0;
            _0x4f23ab < _0xa5bbbe["_howls"]["length"];
            _0x4f23ab++
          )
            if (!_0xa5bbbe["_howls"][_0x4f23ab]["_webAudio"])
              for (
                var _0x4a1695 =
                    _0xa5bbbe["_howls"][_0x4f23ab]["_getSoundIds"](),
                  _0x530652 = 0x0;
                _0x530652 < _0x4a1695["length"];
                _0x530652++
              ) {
                var _0x2089f2 = _0xa5bbbe["_howls"][_0x4f23ab]["_soundById"](
                  _0x4a1695[_0x530652]
                );
                _0x2089f2 &&
                  _0x2089f2["_node"] &&
                  (_0x2089f2["_node"]["volume"] =
                    _0x2089f2["_volume"] * _0x306874);
              }
          return _0xa5bbbe;
        }
        return _0xa5bbbe["_volume"];
      },
      mute: function (_0x298bef) {
        var _0x13be0f = this || _0x162690;
        _0x13be0f["ctx"] || _0x4b0702(),
          (_0x13be0f["_muted"] = _0x298bef),
          _0x13be0f["usingWebAudio"] &&
            _0x13be0f["masterGain"]["gain"]["setValueAtTime"](
              _0x298bef ? 0x0 : _0x13be0f["_volume"],
              _0x162690["ctx"]["currentTime"]
            );
        for (
          var _0x5cfb6d = 0x0;
          _0x5cfb6d < _0x13be0f["_howls"]["length"];
          _0x5cfb6d++
        )
          if (!_0x13be0f["_howls"][_0x5cfb6d]["_webAudio"])
            for (
              var _0x3f1e24 = _0x13be0f["_howls"][_0x5cfb6d]["_getSoundIds"](),
                _0x2688f9 = 0x0;
              _0x2688f9 < _0x3f1e24["length"];
              _0x2688f9++
            ) {
              var _0x38263d = _0x13be0f["_howls"][_0x5cfb6d]["_soundById"](
                _0x3f1e24[_0x2688f9]
              );
              _0x38263d &&
                _0x38263d["_node"] &&
                (_0x38263d["_node"]["muted"] = _0x298bef
                  ? !0x0
                  : _0x38263d["_muted"]);
            }
        return _0x13be0f;
      },
      unload: function () {
        for (
          var _0x4f8752 = this || _0x162690,
            _0x49e0f4 = _0x4f8752["_howls"]["length"] - 0x1;
          0x0 <= _0x49e0f4;
          _0x49e0f4--
        )
          _0x4f8752["_howls"][_0x49e0f4]["unload"]();
        return (
          _0x4f8752["usingWebAudio"] &&
            _0x4f8752["ctx"] &&
            "undefined" !== typeof _0x4f8752["ctx"]["close"] &&
            (_0x4f8752["ctx"]["close"](),
            (_0x4f8752["ctx"] = null),
            _0x4b0702()),
          _0x4f8752
        );
      },
      codecs: function (_0x264dc4) {
        return (this || _0x162690)["_codecs"][_0x264dc4["replace"](/^x-/, "")];
      },
      _setup: function () {
        var _0x2bb4e0 = this || _0x162690;
        (_0x2bb4e0["state"] = _0x2bb4e0["ctx"]
          ? _0x2bb4e0["ctx"]["state"] || "running"
          : "running"),
          _0x2bb4e0["_autoSuspend"]();
        if (!_0x2bb4e0["usingWebAudio"]) {
          if ("undefined" !== typeof Audio)
            try {
              var _0x292698 = new Audio();
              "undefined" === typeof _0x292698["oncanplaythrough"] &&
                (_0x2bb4e0["_canPlayEvent"] = "canplay");
            } catch (_0x1f70f4) {
              _0x2bb4e0["noAudio"] = !0x0;
            }
          else _0x2bb4e0["noAudio"] = !0x0;
        }
        try {
          (_0x292698 = new Audio()),
            _0x292698["muted"] && (_0x2bb4e0["noAudio"] = !0x0);
        } catch (_0x1c01d7) {}
        return _0x2bb4e0["noAudio"] || _0x2bb4e0["_setupCodecs"](), _0x2bb4e0;
      },
      _setupCodecs: function () {
        var _0x2ab5da = this || _0x162690,
          _0x582f81 = null;
        try {
          _0x582f81 = "undefined" !== typeof Audio ? new Audio() : null;
        } catch (_0x591aa4) {
          return _0x2ab5da;
        }
        if (!_0x582f81 || "function" !== typeof _0x582f81["canPlayType"])
          return _0x2ab5da;
        var _0x50b3df = _0x582f81["canPlayType"]("audio/mpeg;")["replace"](
            /^no$/,
            ""
          ),
          _0x154a8f =
            _0x2ab5da["_navigator"] &&
            _0x2ab5da["_navigator"]["userAgent"]["match"](/OPR\/([0-6].)/g),
          _0x154a8f =
            _0x154a8f &&
            0x21 > parseInt(_0x154a8f[0x0]["split"]("/")[0x1], 0xa);
        return (
          (_0x2ab5da["_codecs"] = {
            mp3: !(
              _0x154a8f ||
              (!_0x50b3df &&
                !_0x582f81["canPlayType"]("audio/mp3;")["replace"](/^no$/, ""))
            ),
            mpeg: !!_0x50b3df,
            opus: !!_0x582f81["canPlayType"](
              "audio/ogg;\x20codecs=\x22opus\x22"
            )["replace"](/^no$/, ""),
            ogg: !!_0x582f81["canPlayType"](
              "audio/ogg;\x20codecs=\x22vorbis\x22"
            )["replace"](/^no$/, ""),
            oga: !!_0x582f81["canPlayType"](
              "audio/ogg;\x20codecs=\x22vorbis\x22"
            )["replace"](/^no$/, ""),
            wav: !!_0x582f81["canPlayType"]("audio/wav;\x20codecs=\x221\x22")[
              "replace"
            ](/^no$/, ""),
            aac: !!_0x582f81["canPlayType"]("audio/aac;")["replace"](
              /^no$/,
              ""
            ),
            caf: !!_0x582f81["canPlayType"]("audio/x-caf;")["replace"](
              /^no$/,
              ""
            ),
            m4a: !!(_0x582f81["canPlayType"]("audio/x-m4a;") ||
              _0x582f81["canPlayType"]("audio/m4a;") ||
              _0x582f81["canPlayType"]("audio/aac;"))["replace"](/^no$/, ""),
            mp4: !!(_0x582f81["canPlayType"]("audio/x-mp4;") ||
              _0x582f81["canPlayType"]("audio/mp4;") ||
              _0x582f81["canPlayType"]("audio/aac;"))["replace"](/^no$/, ""),
            weba: !!_0x582f81["canPlayType"](
              "audio/webm;\x20codecs=\x22vorbis\x22"
            )["replace"](/^no$/, ""),
            webm: !!_0x582f81["canPlayType"](
              "audio/webm;\x20codecs=\x22vorbis\x22"
            )["replace"](/^no$/, ""),
            dolby: !!_0x582f81["canPlayType"](
              "audio/mp4;\x20codecs=\x22ec-3\x22"
            )["replace"](/^no$/, ""),
            flac: !!(_0x582f81["canPlayType"]("audio/x-flac;") ||
              _0x582f81["canPlayType"]("audio/flac;"))["replace"](/^no$/, ""),
          }),
          _0x2ab5da
        );
      },
      _enableMobileAudio: function () {
        var _0x1885e9 = this || _0x162690,
          _0x13acfe = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i[
            "test"
          ](_0x1885e9["_navigator"] && _0x1885e9["_navigator"]["userAgent"]),
          _0x55f269 = !!(
            "ontouchend" in window ||
            (_0x1885e9["_navigator"] &&
              0x0 < _0x1885e9["_navigator"]["maxTouchPoints"]) ||
            (_0x1885e9["_navigator"] &&
              0x0 < _0x1885e9["_navigator"]["msMaxTouchPoints"])
          );
        if (
          !_0x1885e9["_mobileEnabled"] &&
          _0x1885e9["ctx"] &&
          (_0x13acfe || _0x55f269)
        ) {
          (_0x1885e9["_mobileEnabled"] = !0x1),
            !_0x1885e9["_mobileUnloaded"] &&
              0xac44 !== _0x1885e9["ctx"]["sampleRate"] &&
              ((_0x1885e9["_mobileUnloaded"] = !0x0), _0x1885e9["unload"]()),
            (_0x1885e9["_scratchBuffer"] = _0x1885e9["ctx"]["createBuffer"](
              0x1,
              0x1,
              0x5622
            ));
          var _0x4420e5 = function () {
            _0x162690["_autoResume"]();
            var _0x11f255 = _0x1885e9["ctx"]["createBufferSource"]();
            (_0x11f255["buffer"] = _0x1885e9["_scratchBuffer"]),
              _0x11f255["connect"](_0x1885e9["ctx"]["destination"]),
              "undefined" === typeof _0x11f255["start"]
                ? _0x11f255["noteOn"](0x0)
                : _0x11f255["start"](0x0),
              "function" === typeof _0x1885e9["ctx"]["resume"] &&
                _0x1885e9["ctx"]["resume"](),
              (_0x11f255["onended"] = function () {
                _0x11f255["disconnect"](0x0),
                  (_0x1885e9["_mobileEnabled"] = !0x0),
                  (_0x1885e9["mobileAutoEnable"] = !0x1),
                  document["removeEventListener"](
                    "touchstart",
                    _0x4420e5,
                    !0x0
                  ),
                  document["removeEventListener"]("touchend", _0x4420e5, !0x0);
              });
          };
          return (
            document["addEventListener"]("touchstart", _0x4420e5, !0x0),
            document["addEventListener"]("touchend", _0x4420e5, !0x0),
            _0x1885e9
          );
        }
      },
      _autoSuspend: function () {
        var _0x3deee8 = this;
        if (
          _0x3deee8["autoSuspend"] &&
          _0x3deee8["ctx"] &&
          "undefined" !== typeof _0x3deee8["ctx"]["suspend"] &&
          _0x162690["usingWebAudio"]
        ) {
          for (
            var _0x18b4ea = 0x0;
            _0x18b4ea < _0x3deee8["_howls"]["length"];
            _0x18b4ea++
          )
            if (_0x3deee8["_howls"][_0x18b4ea]["_webAudio"]) {
              for (
                var _0x1a85d6 = 0x0;
                _0x1a85d6 < _0x3deee8["_howls"][_0x18b4ea]["_sounds"]["length"];
                _0x1a85d6++
              )
                if (
                  !_0x3deee8["_howls"][_0x18b4ea]["_sounds"][_0x1a85d6][
                    "_paused"
                  ]
                )
                  return _0x3deee8;
            }
          return (
            _0x3deee8["_suspendTimer"] &&
              clearTimeout(_0x3deee8["_suspendTimer"]),
            (_0x3deee8["_suspendTimer"] = setTimeout(function () {
              _0x3deee8["autoSuspend"] &&
                ((_0x3deee8["_suspendTimer"] = null),
                (_0x3deee8["state"] = "suspending"),
                _0x3deee8["ctx"]["suspend"]()["then"](function () {
                  (_0x3deee8["state"] = "suspended"),
                    _0x3deee8["_resumeAfterSuspend"] &&
                      (delete _0x3deee8["_resumeAfterSuspend"],
                      _0x3deee8["_autoResume"]());
                }));
            }, 0x7530)),
            _0x3deee8
          );
        }
      },
      _autoResume: function () {
        var _0x2e9f91 = this;
        if (
          _0x2e9f91["ctx"] &&
          "undefined" !== typeof _0x2e9f91["ctx"]["resume"] &&
          _0x162690["usingWebAudio"]
        )
          return (
            "running" === _0x2e9f91["state"] && _0x2e9f91["_suspendTimer"]
              ? (clearTimeout(_0x2e9f91["_suspendTimer"]),
                (_0x2e9f91["_suspendTimer"] = null))
              : "suspended" === _0x2e9f91["state"]
              ? (_0x2e9f91["ctx"]["resume"]()["then"](function () {
                  _0x2e9f91["state"] = "running";
                  for (
                    var _0x172cc6 = 0x0;
                    _0x172cc6 < _0x2e9f91["_howls"]["length"];
                    _0x172cc6++
                  )
                    _0x2e9f91["_howls"][_0x172cc6]["_emit"]("resume");
                }),
                _0x2e9f91["_suspendTimer"] &&
                  (clearTimeout(_0x2e9f91["_suspendTimer"]),
                  (_0x2e9f91["_suspendTimer"] = null)))
              : "suspending" === _0x2e9f91["state"] &&
                (_0x2e9f91["_resumeAfterSuspend"] = !0x0),
            _0x2e9f91
          );
      },
    };
    var _0x162690 = new _0x45e282(),
      _0x29d433 = function (_0x117ffd) {
        !_0x117ffd["src"] || 0x0 === _0x117ffd["src"]["length"]
          ? console["error"](
              "An\x20array\x20of\x20source\x20files\x20must\x20be\x20passed\x20with\x20any\x20new\x20Howl."
            )
          : this["init"](_0x117ffd);
      };
    _0x29d433["prototype"] = {
      init: function (_0x455c2e) {
        var _0x2d8285 = this;
        return (
          _0x162690["ctx"] || _0x4b0702(),
          (_0x2d8285["_autoplay"] = _0x455c2e["autoplay"] || !0x1),
          (_0x2d8285["_format"] =
            "string" !== typeof _0x455c2e["format"]
              ? _0x455c2e["format"]
              : [_0x455c2e["format"]]),
          (_0x2d8285["_html5"] = _0x455c2e["html5"] || !0x1),
          (_0x2d8285["_muted"] = _0x455c2e["mute"] || !0x1),
          (_0x2d8285["_loop"] = _0x455c2e["loop"] || !0x1),
          (_0x2d8285["_pool"] = _0x455c2e["pool"] || 0x5),
          (_0x2d8285["_preload"] =
            "boolean" === typeof _0x455c2e["preload"]
              ? _0x455c2e["preload"]
              : !0x0),
          (_0x2d8285["_rate"] = _0x455c2e["rate"] || 0x1),
          (_0x2d8285["_sprite"] = _0x455c2e["sprite"] || {}),
          (_0x2d8285["_src"] =
            "string" !== typeof _0x455c2e["src"]
              ? _0x455c2e["src"]
              : [_0x455c2e["src"]]),
          (_0x2d8285["_volume"] =
            void 0x0 !== _0x455c2e["volume"] ? _0x455c2e["volume"] : 0x1),
          (_0x2d8285["_xhrWithCredentials"] =
            _0x455c2e["xhrWithCredentials"] || !0x1),
          (_0x2d8285["_duration"] = 0x0),
          (_0x2d8285["_state"] = "unloaded"),
          (_0x2d8285["_sounds"] = []),
          (_0x2d8285["_endTimers"] = {}),
          (_0x2d8285["_queue"] = []),
          (_0x2d8285["_playLock"] = !0x1),
          (_0x2d8285["_onend"] = _0x455c2e["onend"]
            ? [{ fn: _0x455c2e["onend"] }]
            : []),
          (_0x2d8285["_onfade"] = _0x455c2e["onfade"]
            ? [{ fn: _0x455c2e["onfade"] }]
            : []),
          (_0x2d8285["_onload"] = _0x455c2e["onload"]
            ? [{ fn: _0x455c2e["onload"] }]
            : []),
          (_0x2d8285["_onloaderror"] = _0x455c2e["onloaderror"]
            ? [{ fn: _0x455c2e["onloaderror"] }]
            : []),
          (_0x2d8285["_onplayerror"] = _0x455c2e["onplayerror"]
            ? [{ fn: _0x455c2e["onplayerror"] }]
            : []),
          (_0x2d8285["_onpause"] = _0x455c2e["onpause"]
            ? [{ fn: _0x455c2e["onpause"] }]
            : []),
          (_0x2d8285["_onplay"] = _0x455c2e["onplay"]
            ? [{ fn: _0x455c2e["onplay"] }]
            : []),
          (_0x2d8285["_onstop"] = _0x455c2e["onstop"]
            ? [{ fn: _0x455c2e["onstop"] }]
            : []),
          (_0x2d8285["_onmute"] = _0x455c2e["onmute"]
            ? [{ fn: _0x455c2e["onmute"] }]
            : []),
          (_0x2d8285["_onvolume"] = _0x455c2e["onvolume"]
            ? [{ fn: _0x455c2e["onvolume"] }]
            : []),
          (_0x2d8285["_onrate"] = _0x455c2e["onrate"]
            ? [{ fn: _0x455c2e["onrate"] }]
            : []),
          (_0x2d8285["_onseek"] = _0x455c2e["onseek"]
            ? [{ fn: _0x455c2e["onseek"] }]
            : []),
          (_0x2d8285["_onresume"] = []),
          (_0x2d8285["_webAudio"] =
            _0x162690["usingWebAudio"] && !_0x2d8285["_html5"]),
          "undefined" !== typeof _0x162690["ctx"] &&
            _0x162690["ctx"] &&
            _0x162690["mobileAutoEnable"] &&
            _0x162690["_enableMobileAudio"](),
          _0x162690["_howls"]["push"](_0x2d8285),
          _0x2d8285["_autoplay"] &&
            _0x2d8285["_queue"]["push"]({
              event: "play",
              action: function () {
                _0x2d8285["play"]();
              },
            }),
          _0x2d8285["_preload"] && _0x2d8285["load"](),
          _0x2d8285
        );
      },
      load: function () {
        var _0xe5fce7 = null;
        if (_0x162690["noAudio"])
          this["_emit"]("loaderror", null, "No\x20audio\x20support.");
        else {
          "string" === typeof this["_src"] && (this["_src"] = [this["_src"]]);
          for (
            var _0x2ee6db = 0x0;
            _0x2ee6db < this["_src"]["length"];
            _0x2ee6db++
          ) {
            var _0x457333, _0x409421;
            if (this["_format"] && this["_format"][_0x2ee6db])
              _0x457333 = this["_format"][_0x2ee6db];
            else {
              _0x409421 = this["_src"][_0x2ee6db];
              if ("string" !== typeof _0x409421) {
                this["_emit"](
                  "loaderror",
                  null,
                  "Non-string\x20found\x20in\x20selected\x20audio\x20sources\x20-\x20ignoring."
                );
                continue;
              }
              (_0x457333 = /^data:audio\/([^;,]+);/i["exec"](_0x409421)) ||
                (_0x457333 = /\.([^.]+)$/["exec"](
                  _0x409421["split"]("?", 0x1)[0x0]
                )),
                _0x457333 && (_0x457333 = _0x457333[0x1]["toLowerCase"]());
            }
            _0x457333 ||
              console["warn"](
                "No\x20file\x20extension\x20was\x20found.\x20Consider\x20using\x20the\x20\x22format\x22\x20property\x20or\x20specify\x20an\x20extension."
              );
            if (_0x457333 && _0x162690["codecs"](_0x457333)) {
              _0xe5fce7 = this["_src"][_0x2ee6db];
              break;
            }
          }
          if (_0xe5fce7) {
            (this["_src"] = _0xe5fce7),
              (this["_state"] = "loading"),
              "https:" === window["location"]["protocol"] &&
                "http:" === _0xe5fce7["slice"](0x0, 0x5) &&
                ((this["_html5"] = !0x0), (this["_webAudio"] = !0x1)),
              new _0x10c649(this);
            if (this["_webAudio"]) {
              var _0x5ab456 = this,
                _0x5a9c78 = _0x5ab456["_src"];
              if (_0x130608[_0x5a9c78])
                (_0x5ab456["_duration"] = _0x130608[_0x5a9c78]["duration"]),
                  _0x3dd030(_0x5ab456);
              else {
                if (/^data:[^;]+;base64,/["test"](_0x5a9c78)) {
                  (_0xe5fce7 = atob(_0x5a9c78["split"](",")[0x1])),
                    (_0x2ee6db = new Uint8Array(_0xe5fce7["length"]));
                  for (
                    _0x457333 = 0x0;
                    _0x457333 < _0xe5fce7["length"];
                    ++_0x457333
                  )
                    _0x2ee6db[_0x457333] = _0xe5fce7["charCodeAt"](_0x457333);
                  _0x19161e(_0x2ee6db["buffer"], _0x5ab456);
                } else {
                  var _0x493a94 = new XMLHttpRequest();
                  _0x493a94["open"]("GET", _0x5a9c78, !0x0),
                    (_0x493a94["withCredentials"] =
                      _0x5ab456["_xhrWithCredentials"]),
                    (_0x493a94["responseType"] = "arraybuffer"),
                    (_0x493a94["onload"] = function () {
                      var _0x3306cf = (_0x493a94["status"] + "")[0x0];
                      "0" !== _0x3306cf &&
                      "2" !== _0x3306cf &&
                      "3" !== _0x3306cf
                        ? _0x5ab456["_emit"](
                            "loaderror",
                            null,
                            "Failed\x20loading\x20audio\x20file\x20with\x20status:\x20" +
                              _0x493a94["status"] +
                              "."
                          )
                        : _0x19161e(_0x493a94["response"], _0x5ab456);
                    }),
                    (_0x493a94["onerror"] = function () {
                      _0x5ab456["_webAudio"] &&
                        ((_0x5ab456["_html5"] = !0x0),
                        (_0x5ab456["_webAudio"] = !0x1),
                        (_0x5ab456["_sounds"] = []),
                        delete _0x130608[_0x5a9c78],
                        _0x5ab456["load"]());
                    });
                  try {
                    _0x493a94["send"]();
                  } catch (_0x5542f9) {
                    _0x493a94["onerror"]();
                  }
                }
              }
            }
            return this;
          }
          this["_emit"](
            "loaderror",
            null,
            "No\x20codec\x20support\x20for\x20selected\x20audio\x20sources."
          );
        }
      },
      play: function (_0x48ad6c, _0x522a4f) {
        var _0x5cf74c = this,
          _0x4c1642 = null;
        if ("number" === typeof _0x48ad6c)
          (_0x4c1642 = _0x48ad6c), (_0x48ad6c = null);
        else {
          if (
            "string" === typeof _0x48ad6c &&
            "loaded" === _0x5cf74c["_state"] &&
            !_0x5cf74c["_sprite"][_0x48ad6c]
          )
            return null;
          if ("undefined" === typeof _0x48ad6c) {
            _0x48ad6c = "__default";
            for (
              var _0xb6ea56 = 0x0, _0x59fdd0 = 0x0;
              _0x59fdd0 < _0x5cf74c["_sounds"]["length"];
              _0x59fdd0++
            )
              _0x5cf74c["_sounds"][_0x59fdd0]["_paused"] &&
                !_0x5cf74c["_sounds"][_0x59fdd0]["_ended"] &&
                (_0xb6ea56++,
                (_0x4c1642 = _0x5cf74c["_sounds"][_0x59fdd0]["_id"]));
            0x1 === _0xb6ea56 ? (_0x48ad6c = null) : (_0x4c1642 = null);
          }
        }
        var _0x1f6a0a = _0x4c1642
          ? _0x5cf74c["_soundById"](_0x4c1642)
          : _0x5cf74c["_inactiveSound"]();
        if (!_0x1f6a0a) return null;
        _0x4c1642 &&
          !_0x48ad6c &&
          (_0x48ad6c = _0x1f6a0a["_sprite"] || "__default");
        if ("loaded" !== _0x5cf74c["_state"]) {
          (_0x1f6a0a["_sprite"] = _0x48ad6c), (_0x1f6a0a["_ended"] = !0x1);
          var _0x2967f4 = _0x1f6a0a["_id"];
          return (
            _0x5cf74c["_queue"]["push"]({
              event: "play",
              action: function () {
                _0x5cf74c["play"](_0x2967f4);
              },
            }),
            _0x2967f4
          );
        }
        if (_0x4c1642 && !_0x1f6a0a["_paused"])
          return _0x522a4f || _0x5cf74c["_loadQueue"]("play"), _0x1f6a0a["_id"];
        _0x5cf74c["_webAudio"] && _0x162690["_autoResume"]();
        var _0x410025 = Math["max"](
            0x0,
            0x0 < _0x1f6a0a["_seek"]
              ? _0x1f6a0a["_seek"]
              : _0x5cf74c["_sprite"][_0x48ad6c][0x0] / 0x3e8
          ),
          _0x52dd2a = Math["max"](
            0x0,
            (_0x5cf74c["_sprite"][_0x48ad6c][0x0] +
              _0x5cf74c["_sprite"][_0x48ad6c][0x1]) /
              0x3e8 -
              _0x410025
          ),
          _0x53ba0e = (0x3e8 * _0x52dd2a) / Math["abs"](_0x1f6a0a["_rate"]);
        (_0x1f6a0a["_paused"] = !0x1),
          (_0x1f6a0a["_ended"] = !0x1),
          (_0x1f6a0a["_sprite"] = _0x48ad6c),
          (_0x1f6a0a["_seek"] = _0x410025),
          (_0x1f6a0a["_start"] = _0x5cf74c["_sprite"][_0x48ad6c][0x0] / 0x3e8),
          (_0x1f6a0a["_stop"] =
            (_0x5cf74c["_sprite"][_0x48ad6c][0x0] +
              _0x5cf74c["_sprite"][_0x48ad6c][0x1]) /
            0x3e8),
          (_0x1f6a0a["_loop"] = !(
            !_0x1f6a0a["_loop"] && !_0x5cf74c["_sprite"][_0x48ad6c][0x2]
          ));
        var _0xc9f96e = _0x1f6a0a["_node"];
        if (_0x5cf74c["_webAudio"])
          (_0x4c1642 = function () {
            _0x5cf74c["_refreshBuffer"](_0x1f6a0a),
              _0xc9f96e["gain"]["setValueAtTime"](
                _0x1f6a0a["_muted"] || _0x5cf74c["_muted"]
                  ? 0x0
                  : _0x1f6a0a["_volume"],
                _0x162690["ctx"]["currentTime"]
              ),
              (_0x1f6a0a["_playStart"] = _0x162690["ctx"]["currentTime"]),
              "undefined" === typeof _0xc9f96e["bufferSource"]["start"]
                ? _0x1f6a0a["_loop"]
                  ? _0xc9f96e["bufferSource"]["noteGrainOn"](
                      0x0,
                      _0x410025,
                      0x15180
                    )
                  : _0xc9f96e["bufferSource"]["noteGrainOn"](
                      0x0,
                      _0x410025,
                      _0x52dd2a
                    )
                : _0x1f6a0a["_loop"]
                ? _0xc9f96e["bufferSource"]["start"](0x0, _0x410025, 0x15180)
                : _0xc9f96e["bufferSource"]["start"](0x0, _0x410025, _0x52dd2a),
              Infinity !== _0x53ba0e &&
                (_0x5cf74c["_endTimers"][_0x1f6a0a["_id"]] = setTimeout(
                  _0x5cf74c["_ended"]["bind"](_0x5cf74c, _0x1f6a0a),
                  _0x53ba0e
                )),
              _0x522a4f ||
                setTimeout(function () {
                  _0x5cf74c["_emit"]("play", _0x1f6a0a["_id"]);
                }, 0x0);
          }),
            "running" === _0x162690["state"]
              ? _0x4c1642()
              : (_0x5cf74c["once"]("resume", _0x4c1642),
                _0x5cf74c["_clearTimer"](_0x1f6a0a["_id"]));
        else {
          var _0x6dd921 = function () {
              (_0xc9f96e["currentTime"] = _0x410025),
                (_0xc9f96e["muted"] =
                  _0x1f6a0a["_muted"] ||
                  _0x5cf74c["_muted"] ||
                  _0x162690["_muted"] ||
                  _0xc9f96e["muted"]),
                (_0xc9f96e["volume"] =
                  _0x1f6a0a["_volume"] * _0x162690["volume"]()),
                (_0xc9f96e["playbackRate"] = _0x1f6a0a["_rate"]);
              try {
                var _0x49300e = _0xc9f96e["play"]();
                if (
                  "undefined" !== typeof Promise &&
                  _0x49300e instanceof Promise
                ) {
                  _0x5cf74c["_playLock"] = !0x0;
                  var _0x2e8123 = function () {
                    (_0x5cf74c["_playLock"] = !0x1),
                      _0x522a4f || _0x5cf74c["_emit"]("play", _0x1f6a0a["_id"]);
                  };
                  _0x49300e["then"](_0x2e8123, _0x2e8123);
                } else
                  _0x522a4f || _0x5cf74c["_emit"]("play", _0x1f6a0a["_id"]);
                (_0xc9f96e["playbackRate"] = _0x1f6a0a["_rate"]),
                  _0xc9f96e["paused"]
                    ? _0x5cf74c["_emit"](
                        "playerror",
                        _0x1f6a0a["_id"],
                        "Playback\x20was\x20unable\x20to\x20start.\x20This\x20is\x20most\x20commonly\x20an\x20issue\x20on\x20mobile\x20devices\x20where\x20playback\x20was\x20not\x20within\x20a\x20user\x20interaction."
                      )
                    : "__default" !== _0x48ad6c || _0x1f6a0a["_loop"]
                    ? (_0x5cf74c["_endTimers"][_0x1f6a0a["_id"]] = setTimeout(
                        _0x5cf74c["_ended"]["bind"](_0x5cf74c, _0x1f6a0a),
                        _0x53ba0e
                      ))
                    : ((_0x5cf74c["_endTimers"][_0x1f6a0a["_id"]] =
                        function () {
                          _0x5cf74c["_ended"](_0x1f6a0a),
                            _0xc9f96e["removeEventListener"](
                              "ended",
                              _0x5cf74c["_endTimers"][_0x1f6a0a["_id"]],
                              !0x1
                            );
                        }),
                      _0xc9f96e["addEventListener"](
                        "ended",
                        _0x5cf74c["_endTimers"][_0x1f6a0a["_id"]],
                        !0x1
                      ));
              } catch (_0x3b2381) {
                _0x5cf74c["_emit"]("playerror", _0x1f6a0a["_id"], _0x3b2381);
              }
            },
            _0x4c1642 =
              (window && window["ejecta"]) ||
              (!_0xc9f96e["readyState"] &&
                _0x162690["_navigator"]["isCocoonJS"]);
          if (0x3 <= _0xc9f96e["readyState"] || _0x4c1642) _0x6dd921();
          else {
            var _0x4ae410 = function () {
              _0x6dd921(),
                _0xc9f96e["removeEventListener"](
                  _0x162690["_canPlayEvent"],
                  _0x4ae410,
                  !0x1
                );
            };
            _0xc9f96e["addEventListener"](
              _0x162690["_canPlayEvent"],
              _0x4ae410,
              !0x1
            ),
              _0x5cf74c["_clearTimer"](_0x1f6a0a["_id"]);
          }
        }
        return _0x1f6a0a["_id"];
      },
      pause: function (_0x30b26a, _0x732491) {
        var _0x5b0b61 = this;
        if ("loaded" !== _0x5b0b61["_state"] || _0x5b0b61["_playLock"])
          return (
            _0x5b0b61["_queue"]["push"]({
              event: "pause",
              action: function () {
                _0x5b0b61["pause"](_0x30b26a);
              },
            }),
            _0x5b0b61
          );
        for (
          var _0x653ba9 = _0x5b0b61["_getSoundIds"](_0x30b26a), _0x186881 = 0x0;
          _0x186881 < _0x653ba9["length"];
          _0x186881++
        ) {
          _0x5b0b61["_clearTimer"](_0x653ba9[_0x186881]);
          var _0x4ae559 = _0x5b0b61["_soundById"](_0x653ba9[_0x186881]);
          if (
            _0x4ae559 &&
            !_0x4ae559["_paused"] &&
            ((_0x4ae559["_seek"] = _0x5b0b61["seek"](_0x653ba9[_0x186881])),
            (_0x4ae559["_rateSeek"] = 0x0),
            (_0x4ae559["_paused"] = !0x0),
            _0x5b0b61["_stopFade"](_0x653ba9[_0x186881]),
            _0x4ae559["_node"])
          ) {
            if (_0x5b0b61["_webAudio"]) {
              if (!_0x4ae559["_node"]["bufferSource"]) continue;
              "undefined" === typeof _0x4ae559["_node"]["bufferSource"]["stop"]
                ? _0x4ae559["_node"]["bufferSource"]["noteOff"](0x0)
                : _0x4ae559["_node"]["bufferSource"]["stop"](0x0),
                _0x5b0b61["_cleanBuffer"](_0x4ae559["_node"]);
            } else
              (!isNaN(_0x4ae559["_node"]["duration"]) ||
                Infinity === _0x4ae559["_node"]["duration"]) &&
                _0x4ae559["_node"]["pause"]();
          }
          _0x732491 ||
            _0x5b0b61["_emit"]("pause", _0x4ae559 ? _0x4ae559["_id"] : null);
        }
        return _0x5b0b61;
      },
      stop: function (_0xb0016, _0x17b3cd) {
        var _0x57ec13 = this;
        if ("loaded" !== _0x57ec13["_state"])
          return (
            _0x57ec13["_queue"]["push"]({
              event: "stop",
              action: function () {
                _0x57ec13["stop"](_0xb0016);
              },
            }),
            _0x57ec13
          );
        for (
          var _0x5734bc = _0x57ec13["_getSoundIds"](_0xb0016), _0xc09c5e = 0x0;
          _0xc09c5e < _0x5734bc["length"];
          _0xc09c5e++
        ) {
          _0x57ec13["_clearTimer"](_0x5734bc[_0xc09c5e]);
          var _0x4f086b = _0x57ec13["_soundById"](_0x5734bc[_0xc09c5e]);
          if (_0x4f086b) {
            (_0x4f086b["_seek"] = _0x4f086b["_start"] || 0x0),
              (_0x4f086b["_rateSeek"] = 0x0),
              (_0x4f086b["_paused"] = !0x0),
              (_0x4f086b["_ended"] = !0x0),
              _0x57ec13["_stopFade"](_0x5734bc[_0xc09c5e]);
            if (_0x4f086b["_node"]) {
              if (_0x57ec13["_webAudio"])
                _0x4f086b["_node"]["bufferSource"] &&
                  ("undefined" ===
                  typeof _0x4f086b["_node"]["bufferSource"]["stop"]
                    ? _0x4f086b["_node"]["bufferSource"]["noteOff"](0x0)
                    : _0x4f086b["_node"]["bufferSource"]["stop"](0x0),
                  _0x57ec13["_cleanBuffer"](_0x4f086b["_node"]));
              else {
                if (
                  !isNaN(_0x4f086b["_node"]["duration"]) ||
                  Infinity === _0x4f086b["_node"]["duration"]
                )
                  (_0x4f086b["_node"]["currentTime"] =
                    _0x4f086b["_start"] || 0x0),
                    _0x4f086b["_node"]["pause"]();
              }
            }
            _0x17b3cd || _0x57ec13["_emit"]("stop", _0x4f086b["_id"]);
          }
        }
        return _0x57ec13;
      },
      mute: function (_0x305a14, _0x4e1570) {
        var _0x55acd3 = this;
        if ("loaded" !== _0x55acd3["_state"])
          return (
            _0x55acd3["_queue"]["push"]({
              event: "mute",
              action: function () {
                _0x55acd3["mute"](_0x305a14, _0x4e1570);
              },
            }),
            _0x55acd3
          );
        if ("undefined" === typeof _0x4e1570) {
          if ("boolean" === typeof _0x305a14) _0x55acd3["_muted"] = _0x305a14;
          else return _0x55acd3["_muted"];
        }
        for (
          var _0x5bf054 = _0x55acd3["_getSoundIds"](_0x4e1570), _0xaf5fef = 0x0;
          _0xaf5fef < _0x5bf054["length"];
          _0xaf5fef++
        ) {
          var _0x2da0d9 = _0x55acd3["_soundById"](_0x5bf054[_0xaf5fef]);
          _0x2da0d9 &&
            ((_0x2da0d9["_muted"] = _0x305a14),
            _0x2da0d9["_interval"] && _0x55acd3["_stopFade"](_0x2da0d9["_id"]),
            _0x55acd3["_webAudio"] && _0x2da0d9["_node"]
              ? _0x2da0d9["_node"]["gain"]["setValueAtTime"](
                  _0x305a14 ? 0x0 : _0x2da0d9["_volume"],
                  _0x162690["ctx"]["currentTime"]
                )
              : _0x2da0d9["_node"] &&
                (_0x2da0d9["_node"]["muted"] = _0x162690["_muted"]
                  ? !0x0
                  : _0x305a14),
            _0x55acd3["_emit"]("mute", _0x2da0d9["_id"]));
        }
        return _0x55acd3;
      },
      volume: function () {
        var _0x3faee1 = this,
          _0x34fc95 = arguments,
          _0xb31656,
          _0xb5e444;
        if (0x0 === _0x34fc95["length"]) return _0x3faee1["_volume"];
        0x1 === _0x34fc95["length"] ||
        (0x2 === _0x34fc95["length"] && "undefined" === typeof _0x34fc95[0x1])
          ? 0x0 <= _0x3faee1["_getSoundIds"]()["indexOf"](_0x34fc95[0x0])
            ? (_0xb5e444 = parseInt(_0x34fc95[0x0], 0xa))
            : (_0xb31656 = parseFloat(_0x34fc95[0x0]))
          : 0x2 <= _0x34fc95["length"] &&
            ((_0xb31656 = parseFloat(_0x34fc95[0x0])),
            (_0xb5e444 = parseInt(_0x34fc95[0x1], 0xa)));
        var _0x3f42e3;
        if (
          "undefined" !== typeof _0xb31656 &&
          0x0 <= _0xb31656 &&
          0x1 >= _0xb31656
        ) {
          if ("loaded" !== _0x3faee1["_state"])
            return (
              _0x3faee1["_queue"]["push"]({
                event: "volume",
                action: function () {
                  _0x3faee1["volume"]["apply"](_0x3faee1, _0x34fc95);
                },
              }),
              _0x3faee1
            );
          "undefined" === typeof _0xb5e444 &&
            (_0x3faee1["_volume"] = _0xb31656),
            (_0xb5e444 = _0x3faee1["_getSoundIds"](_0xb5e444));
          for (
            var _0x2b0b96 = 0x0;
            _0x2b0b96 < _0xb5e444["length"];
            _0x2b0b96++
          )
            if ((_0x3f42e3 = _0x3faee1["_soundById"](_0xb5e444[_0x2b0b96])))
              (_0x3f42e3["_volume"] = _0xb31656),
                _0x34fc95[0x2] || _0x3faee1["_stopFade"](_0xb5e444[_0x2b0b96]),
                _0x3faee1["_webAudio"] &&
                _0x3f42e3["_node"] &&
                !_0x3f42e3["_muted"]
                  ? _0x3f42e3["_node"]["gain"]["setValueAtTime"](
                      _0xb31656,
                      _0x162690["ctx"]["currentTime"]
                    )
                  : _0x3f42e3["_node"] &&
                    !_0x3f42e3["_muted"] &&
                    (_0x3f42e3["_node"]["volume"] =
                      _0xb31656 * _0x162690["volume"]()),
                _0x3faee1["_emit"]("volume", _0x3f42e3["_id"]);
        } else
          return (_0x3f42e3 = _0xb5e444
            ? _0x3faee1["_soundById"](_0xb5e444)
            : _0x3faee1["_sounds"][0x0])
            ? _0x3f42e3["_volume"]
            : 0x0;
        return _0x3faee1;
      },
      fade: function (_0x348e9c, _0xc34384, _0xac240b, _0x296ab1) {
        var _0x42641d = this;
        if ("loaded" !== _0x42641d["_state"])
          return (
            _0x42641d["_queue"]["push"]({
              event: "fade",
              action: function () {
                _0x42641d["fade"](_0x348e9c, _0xc34384, _0xac240b, _0x296ab1);
              },
            }),
            _0x42641d
          );
        _0x42641d["volume"](_0x348e9c, _0x296ab1);
        for (
          var _0x1edc3f = _0x42641d["_getSoundIds"](_0x296ab1), _0x22ed5f = 0x0;
          _0x22ed5f < _0x1edc3f["length"];
          _0x22ed5f++
        ) {
          var _0x2792a4 = _0x42641d["_soundById"](_0x1edc3f[_0x22ed5f]);
          if (_0x2792a4) {
            _0x296ab1 || _0x42641d["_stopFade"](_0x1edc3f[_0x22ed5f]);
            if (_0x42641d["_webAudio"] && !_0x2792a4["_muted"]) {
              var _0x37ca15 = _0x162690["ctx"]["currentTime"],
                _0x2de713 = _0x37ca15 + _0xac240b / 0x3e8;
              (_0x2792a4["_volume"] = _0x348e9c),
                _0x2792a4["_node"]["gain"]["setValueAtTime"](
                  _0x348e9c,
                  _0x37ca15
                ),
                _0x2792a4["_node"]["gain"]["linearRampToValueAtTime"](
                  _0xc34384,
                  _0x2de713
                );
            }
            _0x42641d["_startFadeInterval"](
              _0x2792a4,
              _0x348e9c,
              _0xc34384,
              _0xac240b,
              _0x1edc3f[_0x22ed5f],
              "undefined" === typeof _0x296ab1
            );
          }
        }
        return _0x42641d;
      },
      _startFadeInterval: function (
        _0x1c2e67,
        _0x47ed4a,
        _0x46fd2a,
        _0x55b268,
        _0x9d7a4f,
        _0x1194e8
      ) {
        var _0x4d78ad = this,
          _0x4bfca2 = _0x47ed4a,
          _0x122fb2 = _0x46fd2a - _0x47ed4a;
        (_0x9d7a4f = Math["abs"](_0x122fb2 / 0.01)),
          (_0x9d7a4f = Math["max"](
            0x4,
            0x0 < _0x9d7a4f ? _0x55b268 / _0x9d7a4f : _0x55b268
          ));
        var _0x4e9611 = Date["now"]();
        (_0x1c2e67["_fadeTo"] = _0x46fd2a),
          (_0x1c2e67["_interval"] = setInterval(function () {
            var _0x49de5e = (Date["now"]() - _0x4e9611) / _0x55b268;
            (_0x4e9611 = Date["now"]()),
              (_0x4bfca2 += _0x122fb2 * _0x49de5e),
              (_0x4bfca2 = Math["max"](0x0, _0x4bfca2)),
              (_0x4bfca2 = Math["min"](0x1, _0x4bfca2)),
              (_0x4bfca2 = Math["round"](0x64 * _0x4bfca2) / 0x64),
              _0x4d78ad["_webAudio"]
                ? (_0x1c2e67["_volume"] = _0x4bfca2)
                : _0x4d78ad["volume"](_0x4bfca2, _0x1c2e67["_id"], !0x0),
              _0x1194e8 && (_0x4d78ad["_volume"] = _0x4bfca2);
            if (
              (_0x46fd2a < _0x47ed4a && _0x4bfca2 <= _0x46fd2a) ||
              (_0x46fd2a > _0x47ed4a && _0x4bfca2 >= _0x46fd2a)
            )
              clearInterval(_0x1c2e67["_interval"]),
                (_0x1c2e67["_interval"] = null),
                (_0x1c2e67["_fadeTo"] = null),
                _0x4d78ad["volume"](_0x46fd2a, _0x1c2e67["_id"]),
                _0x4d78ad["_emit"]("fade", _0x1c2e67["_id"]);
          }, _0x9d7a4f));
      },
      _stopFade: function (_0x2e944c) {
        var _0x17955b = this["_soundById"](_0x2e944c);
        return (
          _0x17955b &&
            _0x17955b["_interval"] &&
            (this["_webAudio"] &&
              _0x17955b["_node"]["gain"]["cancelScheduledValues"](
                _0x162690["ctx"]["currentTime"]
              ),
            clearInterval(_0x17955b["_interval"]),
            (_0x17955b["_interval"] = null),
            this["volume"](_0x17955b["_fadeTo"], _0x2e944c),
            (_0x17955b["_fadeTo"] = null),
            this["_emit"]("fade", _0x2e944c)),
          this
        );
      },
      loop: function () {
        var _0x2eeed6 = arguments,
          _0x55349f,
          _0xd14fad;
        if (0x0 === _0x2eeed6["length"]) return this["_loop"];
        if (0x1 === _0x2eeed6["length"]) {
          if ("boolean" === typeof _0x2eeed6[0x0])
            this["_loop"] = _0x55349f = _0x2eeed6[0x0];
          else
            return (_0x2eeed6 = this["_soundById"](
              parseInt(_0x2eeed6[0x0], 0xa)
            ))
              ? _0x2eeed6["_loop"]
              : !0x1;
        } else
          0x2 === _0x2eeed6["length"] &&
            ((_0x55349f = _0x2eeed6[0x0]),
            (_0xd14fad = parseInt(_0x2eeed6[0x1], 0xa)));
        _0xd14fad = this["_getSoundIds"](_0xd14fad);
        for (var _0x9655a7 = 0x0; _0x9655a7 < _0xd14fad["length"]; _0x9655a7++)
          if ((_0x2eeed6 = this["_soundById"](_0xd14fad[_0x9655a7]))) {
            if (
              ((_0x2eeed6["_loop"] = _0x55349f),
              this["_webAudio"] &&
                _0x2eeed6["_node"] &&
                _0x2eeed6["_node"]["bufferSource"] &&
                (_0x2eeed6["_node"]["bufferSource"]["loop"] = _0x55349f))
            )
              (_0x2eeed6["_node"]["bufferSource"]["loopStart"] =
                _0x2eeed6["_start"] || 0x0),
                (_0x2eeed6["_node"]["bufferSource"]["loopEnd"] =
                  _0x2eeed6["_stop"]);
          }
        return this;
      },
      rate: function () {
        var _0x18c62e = this,
          _0x4cf30f = arguments,
          _0x1ff5a2,
          _0x3a3c90;
        0x0 === _0x4cf30f["length"]
          ? (_0x3a3c90 = _0x18c62e["_sounds"][0x0]["_id"])
          : 0x1 === _0x4cf30f["length"]
          ? 0x0 <= _0x18c62e["_getSoundIds"]()["indexOf"](_0x4cf30f[0x0])
            ? (_0x3a3c90 = parseInt(_0x4cf30f[0x0], 0xa))
            : (_0x1ff5a2 = parseFloat(_0x4cf30f[0x0]))
          : 0x2 === _0x4cf30f["length"] &&
            ((_0x1ff5a2 = parseFloat(_0x4cf30f[0x0])),
            (_0x3a3c90 = parseInt(_0x4cf30f[0x1], 0xa)));
        var _0x334bbd;
        if ("number" === typeof _0x1ff5a2) {
          if ("loaded" !== _0x18c62e["_state"])
            return (
              _0x18c62e["_queue"]["push"]({
                event: "rate",
                action: function () {
                  _0x18c62e["rate"]["apply"](_0x18c62e, _0x4cf30f);
                },
              }),
              _0x18c62e
            );
          "undefined" === typeof _0x3a3c90 && (_0x18c62e["_rate"] = _0x1ff5a2),
            (_0x3a3c90 = _0x18c62e["_getSoundIds"](_0x3a3c90));
          for (
            var _0x4a4273 = 0x0;
            _0x4a4273 < _0x3a3c90["length"];
            _0x4a4273++
          )
            if ((_0x334bbd = _0x18c62e["_soundById"](_0x3a3c90[_0x4a4273]))) {
              (_0x334bbd["_rateSeek"] = _0x18c62e["seek"](
                _0x3a3c90[_0x4a4273]
              )),
                (_0x334bbd["_playStart"] = _0x18c62e["_webAudio"]
                  ? _0x162690["ctx"]["currentTime"]
                  : _0x334bbd["_playStart"]),
                (_0x334bbd["_rate"] = _0x1ff5a2),
                _0x18c62e["_webAudio"] &&
                _0x334bbd["_node"] &&
                _0x334bbd["_node"]["bufferSource"]
                  ? _0x334bbd["_node"]["bufferSource"]["playbackRate"][
                      "setValueAtTime"
                    ](_0x1ff5a2, _0x162690["ctx"]["currentTime"])
                  : _0x334bbd["_node"] &&
                    (_0x334bbd["_node"]["playbackRate"] = _0x1ff5a2);
              var _0x55aadd = _0x18c62e["seek"](_0x3a3c90[_0x4a4273]),
                _0x55aadd =
                  (0x3e8 *
                    ((_0x18c62e["_sprite"][_0x334bbd["_sprite"]][0x0] +
                      _0x18c62e["_sprite"][_0x334bbd["_sprite"]][0x1]) /
                      0x3e8 -
                      _0x55aadd)) /
                  Math["abs"](_0x334bbd["_rate"]);
              if (
                _0x18c62e["_endTimers"][_0x3a3c90[_0x4a4273]] ||
                !_0x334bbd["_paused"]
              )
                _0x18c62e["_clearTimer"](_0x3a3c90[_0x4a4273]),
                  (_0x18c62e["_endTimers"][_0x3a3c90[_0x4a4273]] = setTimeout(
                    _0x18c62e["_ended"]["bind"](_0x18c62e, _0x334bbd),
                    _0x55aadd
                  ));
              _0x18c62e["_emit"]("rate", _0x334bbd["_id"]);
            }
        } else
          return (_0x334bbd = _0x18c62e["_soundById"](_0x3a3c90))
            ? _0x334bbd["_rate"]
            : _0x18c62e["_rate"];
        return _0x18c62e;
      },
      seek: function () {
        var _0x279fac = this,
          _0x3655fd = arguments,
          _0x253fc5,
          _0x5efd08;
        0x0 === _0x3655fd["length"]
          ? (_0x5efd08 = _0x279fac["_sounds"][0x0]["_id"])
          : 0x1 === _0x3655fd["length"]
          ? 0x0 <= _0x279fac["_getSoundIds"]()["indexOf"](_0x3655fd[0x0])
            ? (_0x5efd08 = parseInt(_0x3655fd[0x0], 0xa))
            : _0x279fac["_sounds"]["length"] &&
              ((_0x5efd08 = _0x279fac["_sounds"][0x0]["_id"]),
              (_0x253fc5 = parseFloat(_0x3655fd[0x0])))
          : 0x2 === _0x3655fd["length"] &&
            ((_0x253fc5 = parseFloat(_0x3655fd[0x0])),
            (_0x5efd08 = parseInt(_0x3655fd[0x1], 0xa)));
        if ("undefined" === typeof _0x5efd08) return _0x279fac;
        if ("loaded" !== _0x279fac["_state"])
          return (
            _0x279fac["_queue"]["push"]({
              event: "seek",
              action: function () {
                _0x279fac["seek"]["apply"](_0x279fac, _0x3655fd);
              },
            }),
            _0x279fac
          );
        var _0x25971 = _0x279fac["_soundById"](_0x5efd08);
        if (_0x25971) {
          if ("number" === typeof _0x253fc5 && 0x0 <= _0x253fc5) {
            var _0x245914 = _0x279fac["playing"](_0x5efd08);
            _0x245914 && _0x279fac["pause"](_0x5efd08, !0x0),
              (_0x25971["_seek"] = _0x253fc5),
              (_0x25971["_ended"] = !0x1),
              _0x279fac["_clearTimer"](_0x5efd08),
              _0x245914 && _0x279fac["play"](_0x5efd08, !0x0),
              !_0x279fac["_webAudio"] &&
                _0x25971["_node"] &&
                (_0x25971["_node"]["currentTime"] = _0x253fc5);
            if (_0x245914 && !_0x279fac["_webAudio"]) {
              var _0x38f154 = function () {
                _0x279fac["_playLock"]
                  ? setTimeout(_0x38f154, 0x0)
                  : _0x279fac["_emit"]("seek", _0x5efd08);
              };
              setTimeout(_0x38f154, 0x0);
            } else _0x279fac["_emit"]("seek", _0x5efd08);
          } else
            return _0x279fac["_webAudio"]
              ? ((_0x253fc5 = _0x279fac["playing"](_0x5efd08)
                  ? _0x162690["ctx"]["currentTime"] - _0x25971["_playStart"]
                  : 0x0),
                _0x25971["_seek"] +
                  ((_0x25971["_rateSeek"]
                    ? _0x25971["_rateSeek"] - _0x25971["_seek"]
                    : 0x0) +
                    _0x253fc5 * Math["abs"](_0x25971["_rate"])))
              : _0x25971["_node"]["currentTime"];
        }
        return _0x279fac;
      },
      playing: function (_0x37292e) {
        if ("number" === typeof _0x37292e)
          return (_0x37292e = this["_soundById"](_0x37292e))
            ? !_0x37292e["_paused"]
            : !0x1;
        for (
          _0x37292e = 0x0;
          _0x37292e < this["_sounds"]["length"];
          _0x37292e++
        )
          if (!this["_sounds"][_0x37292e]["_paused"]) return !0x0;
        return !0x1;
      },
      duration: function (_0x55a8ff) {
        var _0x52bd3f = this["_duration"];
        return (
          (_0x55a8ff = this["_soundById"](_0x55a8ff)) &&
            (_0x52bd3f = this["_sprite"][_0x55a8ff["_sprite"]][0x1] / 0x3e8),
          _0x52bd3f
        );
      },
      state: function () {
        return this["_state"];
      },
      unload: function () {
        for (
          var _0x4475c4 = this["_sounds"], _0xca151c = 0x0;
          _0xca151c < _0x4475c4["length"];
          _0xca151c++
        ) {
          _0x4475c4[_0xca151c]["_paused"] ||
            this["stop"](_0x4475c4[_0xca151c]["_id"]),
            this["_webAudio"] ||
              (/MSIE |Trident\//["test"](
                _0x162690["_navigator"] && _0x162690["_navigator"]["userAgent"]
              ) ||
                (_0x4475c4[_0xca151c]["_node"]["src"] =
                  "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"),
              _0x4475c4[_0xca151c]["_node"]["removeEventListener"](
                "error",
                _0x4475c4[_0xca151c]["_errorFn"],
                !0x1
              ),
              _0x4475c4[_0xca151c]["_node"]["removeEventListener"](
                _0x162690["_canPlayEvent"],
                _0x4475c4[_0xca151c]["_loadFn"],
                !0x1
              )),
            delete _0x4475c4[_0xca151c]["_node"],
            this["_clearTimer"](_0x4475c4[_0xca151c]["_id"]);
          var _0x15a25f = _0x162690["_howls"]["indexOf"](this);
          0x0 <= _0x15a25f && _0x162690["_howls"]["splice"](_0x15a25f, 0x1);
        }
        _0x4475c4 = !0x0;
        for (
          _0xca151c = 0x0;
          _0xca151c < _0x162690["_howls"]["length"];
          _0xca151c++
        )
          if (_0x162690["_howls"][_0xca151c]["_src"] === this["_src"]) {
            _0x4475c4 = !0x1;
            break;
          }
        return (
          _0x130608 && _0x4475c4 && delete _0x130608[this["_src"]],
          (_0x162690["noAudio"] = !0x1),
          (this["_state"] = "unloaded"),
          (this["_sounds"] = []),
          null
        );
      },
      on: function (_0x2992b5, _0x10e78a, _0x2f7787, _0x1399aa) {
        return (
          (_0x2992b5 = this["_on" + _0x2992b5]),
          "function" === typeof _0x10e78a &&
            _0x2992b5["push"](
              _0x1399aa
                ? { id: _0x2f7787, fn: _0x10e78a, once: _0x1399aa }
                : { id: _0x2f7787, fn: _0x10e78a }
            ),
          this
        );
      },
      off: function (_0x275769, _0x1c5877, _0xb36ebf) {
        var _0x5e2228 = this["_on" + _0x275769],
          _0x117d26 = 0x0;
        "number" === typeof _0x1c5877 &&
          ((_0xb36ebf = _0x1c5877), (_0x1c5877 = null));
        if (_0x1c5877 || _0xb36ebf)
          for (_0x117d26 = 0x0; _0x117d26 < _0x5e2228["length"]; _0x117d26++) {
            if (
              ((_0x275769 = _0xb36ebf === _0x5e2228[_0x117d26]["id"]),
              (_0x1c5877 === _0x5e2228[_0x117d26]["fn"] && _0x275769) ||
                (!_0x1c5877 && _0x275769))
            ) {
              _0x5e2228["splice"](_0x117d26, 0x1);
              break;
            }
          }
        else {
          if (_0x275769) this["_on" + _0x275769] = [];
          else {
            _0x1c5877 = Object["keys"](this);
            for (_0x117d26 = 0x0; _0x117d26 < _0x1c5877["length"]; _0x117d26++)
              0x0 === _0x1c5877[_0x117d26]["indexOf"]("_on") &&
                Array["isArray"](this[_0x1c5877[_0x117d26]]) &&
                (this[_0x1c5877[_0x117d26]] = []);
          }
        }
        return this;
      },
      once: function (_0x401dfc, _0x51a182, _0xb9592) {
        return this["on"](_0x401dfc, _0x51a182, _0xb9592, 0x1), this;
      },
      _emit: function (_0x9a5f15, _0x29978c, _0x5460ea) {
        for (
          var _0x26bf73 = this["_on" + _0x9a5f15],
            _0x5ddb6b = _0x26bf73["length"] - 0x1;
          0x0 <= _0x5ddb6b;
          _0x5ddb6b--
        )
          if (
            !_0x26bf73[_0x5ddb6b]["id"] ||
            _0x26bf73[_0x5ddb6b]["id"] === _0x29978c ||
            "load" === _0x9a5f15
          )
            setTimeout(
              function (_0x252b39) {
                _0x252b39["call"](this, _0x29978c, _0x5460ea);
              }["bind"](this, _0x26bf73[_0x5ddb6b]["fn"]),
              0x0
            ),
              _0x26bf73[_0x5ddb6b]["once"] &&
                this["off"](
                  _0x9a5f15,
                  _0x26bf73[_0x5ddb6b]["fn"],
                  _0x26bf73[_0x5ddb6b]["id"]
                );
        return this["_loadQueue"](_0x9a5f15), this;
      },
      _loadQueue: function (_0x25690d) {
        if (0x0 < this["_queue"]["length"]) {
          var _0x38df2d = this["_queue"][0x0];
          _0x38df2d["event"] === _0x25690d &&
            (this["_queue"]["shift"](), this["_loadQueue"]()),
            _0x25690d || _0x38df2d["action"]();
        }
        return this;
      },
      _ended: function (_0x473d5b) {
        var _0x3a4735 = _0x473d5b["_sprite"];
        if (
          !this["_webAudio"] &&
          _0x473d5b["_node"] &&
          !_0x473d5b["_node"]["paused"] &&
          !_0x473d5b["_node"]["ended"] &&
          _0x473d5b["_node"]["currentTime"] < _0x473d5b["_stop"]
        )
          return (
            setTimeout(this["_ended"]["bind"](this, _0x473d5b), 0x64), this
          );
        (_0x3a4735 = !(
          !_0x473d5b["_loop"] && !this["_sprite"][_0x3a4735][0x2]
        )),
          this["_emit"]("end", _0x473d5b["_id"]),
          !this["_webAudio"] &&
            _0x3a4735 &&
            this["stop"](_0x473d5b["_id"], !0x0)["play"](_0x473d5b["_id"]);
        if (this["_webAudio"] && _0x3a4735) {
          this["_emit"]("play", _0x473d5b["_id"]),
            (_0x473d5b["_seek"] = _0x473d5b["_start"] || 0x0),
            (_0x473d5b["_rateSeek"] = 0x0),
            (_0x473d5b["_playStart"] = _0x162690["ctx"]["currentTime"]);
          var _0x19972c =
            (0x3e8 * (_0x473d5b["_stop"] - _0x473d5b["_start"])) /
            Math["abs"](_0x473d5b["_rate"]);
          this["_endTimers"][_0x473d5b["_id"]] = setTimeout(
            this["_ended"]["bind"](this, _0x473d5b),
            _0x19972c
          );
        }
        return (
          this["_webAudio"] &&
            !_0x3a4735 &&
            ((_0x473d5b["_paused"] = !0x0),
            (_0x473d5b["_ended"] = !0x0),
            (_0x473d5b["_seek"] = _0x473d5b["_start"] || 0x0),
            (_0x473d5b["_rateSeek"] = 0x0),
            this["_clearTimer"](_0x473d5b["_id"]),
            this["_cleanBuffer"](_0x473d5b["_node"]),
            _0x162690["_autoSuspend"]()),
          !this["_webAudio"] && !_0x3a4735 && this["stop"](_0x473d5b["_id"]),
          this
        );
      },
      _clearTimer: function (_0x3c1ff8) {
        if (this["_endTimers"][_0x3c1ff8]) {
          if ("function" !== typeof this["_endTimers"][_0x3c1ff8])
            clearTimeout(this["_endTimers"][_0x3c1ff8]);
          else {
            var _0x2e9f73 = this["_soundById"](_0x3c1ff8);
            _0x2e9f73 &&
              _0x2e9f73["_node"] &&
              _0x2e9f73["_node"]["removeEventListener"](
                "ended",
                this["_endTimers"][_0x3c1ff8],
                !0x1
              );
          }
          delete this["_endTimers"][_0x3c1ff8];
        }
        return this;
      },
      _soundById: function (_0x58ce39) {
        for (
          var _0x3659a4 = 0x0;
          _0x3659a4 < this["_sounds"]["length"];
          _0x3659a4++
        )
          if (_0x58ce39 === this["_sounds"][_0x3659a4]["_id"])
            return this["_sounds"][_0x3659a4];
        return null;
      },
      _inactiveSound: function () {
        this["_drain"]();
        for (
          var _0xbe52e3 = 0x0;
          _0xbe52e3 < this["_sounds"]["length"];
          _0xbe52e3++
        )
          if (this["_sounds"][_0xbe52e3]["_ended"])
            return this["_sounds"][_0xbe52e3]["reset"]();
        return new _0x10c649(this);
      },
      _drain: function () {
        var _0x10eea2 = this["_pool"],
          _0x5897a3 = 0x0,
          _0xdd379e = 0x0;
        if (!(this["_sounds"]["length"] < _0x10eea2)) {
          for (
            _0xdd379e = 0x0;
            _0xdd379e < this["_sounds"]["length"];
            _0xdd379e++
          )
            this["_sounds"][_0xdd379e]["_ended"] && _0x5897a3++;
          for (
            _0xdd379e = this["_sounds"]["length"] - 0x1;
            0x0 <= _0xdd379e && !(_0x5897a3 <= _0x10eea2);
            _0xdd379e--
          )
            this["_sounds"][_0xdd379e]["_ended"] &&
              (this["_webAudio"] &&
                this["_sounds"][_0xdd379e]["_node"] &&
                this["_sounds"][_0xdd379e]["_node"]["disconnect"](0x0),
              this["_sounds"]["splice"](_0xdd379e, 0x1),
              _0x5897a3--);
        }
      },
      _getSoundIds: function (_0x1bdcb7) {
        if ("undefined" === typeof _0x1bdcb7) {
          _0x1bdcb7 = [];
          for (
            var _0x32ecbf = 0x0;
            _0x32ecbf < this["_sounds"]["length"];
            _0x32ecbf++
          )
            _0x1bdcb7["push"](this["_sounds"][_0x32ecbf]["_id"]);
          return _0x1bdcb7;
        }
        return [_0x1bdcb7];
      },
      _refreshBuffer: function (_0x200e0f) {
        (_0x200e0f["_node"]["bufferSource"] =
          _0x162690["ctx"]["createBufferSource"]()),
          (_0x200e0f["_node"]["bufferSource"]["buffer"] =
            _0x130608[this["_src"]]),
          _0x200e0f["_panner"]
            ? _0x200e0f["_node"]["bufferSource"]["connect"](
                _0x200e0f["_panner"]
              )
            : _0x200e0f["_node"]["bufferSource"]["connect"](_0x200e0f["_node"]);
        if ((_0x200e0f["_node"]["bufferSource"]["loop"] = _0x200e0f["_loop"]))
          (_0x200e0f["_node"]["bufferSource"]["loopStart"] =
            _0x200e0f["_start"] || 0x0),
            (_0x200e0f["_node"]["bufferSource"]["loopEnd"] =
              _0x200e0f["_stop"]);
        return (
          _0x200e0f["_node"]["bufferSource"]["playbackRate"]["setValueAtTime"](
            _0x200e0f["_rate"],
            _0x162690["ctx"]["currentTime"]
          ),
          this
        );
      },
      _cleanBuffer: function (_0x2a0728) {
        if (_0x162690["_scratchBuffer"]) {
          (_0x2a0728["bufferSource"]["onended"] = null),
            _0x2a0728["bufferSource"]["disconnect"](0x0);
          try {
            _0x2a0728["bufferSource"]["buffer"] = _0x162690["_scratchBuffer"];
          } catch (_0x34145c) {}
        }
        return (_0x2a0728["bufferSource"] = null), this;
      },
    };
    var _0x10c649 = function (_0x199a2d) {
      (this["_parent"] = _0x199a2d), this["init"]();
    };
    _0x10c649["prototype"] = {
      init: function () {
        var _0x31a7e3 = this["_parent"];
        return (
          (this["_muted"] = _0x31a7e3["_muted"]),
          (this["_loop"] = _0x31a7e3["_loop"]),
          (this["_volume"] = _0x31a7e3["_volume"]),
          (this["_rate"] = _0x31a7e3["_rate"]),
          (this["_seek"] = 0x0),
          (this["_ended"] = this["_paused"] = !0x0),
          (this["_sprite"] = "__default"),
          (this["_id"] = ++_0x162690["_counter"]),
          _0x31a7e3["_sounds"]["push"](this),
          this["create"](),
          this
        );
      },
      create: function () {
        var _0x4f79dc = this["_parent"],
          _0xce5322 =
            _0x162690["_muted"] || this["_muted"] || this["_parent"]["_muted"]
              ? 0x0
              : this["_volume"];
        return (
          _0x4f79dc["_webAudio"]
            ? ((this["_node"] =
                "undefined" === typeof _0x162690["ctx"]["createGain"]
                  ? _0x162690["ctx"]["createGainNode"]()
                  : _0x162690["ctx"]["createGain"]()),
              this["_node"]["gain"]["setValueAtTime"](
                _0xce5322,
                _0x162690["ctx"]["currentTime"]
              ),
              (this["_node"]["paused"] = !0x0),
              this["_node"]["connect"](_0x162690["masterGain"]))
            : ((this["_node"] = new Audio()),
              (this["_errorFn"] = this["_errorListener"]["bind"](this)),
              this["_node"]["addEventListener"](
                "error",
                this["_errorFn"],
                !0x1
              ),
              (this["_loadFn"] = this["_loadListener"]["bind"](this)),
              this["_node"]["addEventListener"](
                _0x162690["_canPlayEvent"],
                this["_loadFn"],
                !0x1
              ),
              (this["_node"]["src"] = _0x4f79dc["_src"]),
              (this["_node"]["preload"] = "auto"),
              (this["_node"]["volume"] = _0xce5322 * _0x162690["volume"]()),
              this["_node"]["load"]()),
          this
        );
      },
      reset: function () {
        var _0x515ea6 = this["_parent"];
        return (
          (this["_muted"] = _0x515ea6["_muted"]),
          (this["_loop"] = _0x515ea6["_loop"]),
          (this["_volume"] = _0x515ea6["_volume"]),
          (this["_rate"] = _0x515ea6["_rate"]),
          (this["_rateSeek"] = this["_seek"] = 0x0),
          (this["_ended"] = this["_paused"] = !0x0),
          (this["_sprite"] = "__default"),
          (this["_id"] = ++_0x162690["_counter"]),
          this
        );
      },
      _errorListener: function () {
        this["_parent"]["_emit"](
          "loaderror",
          this["_id"],
          this["_node"]["error"] ? this["_node"]["error"]["code"] : 0x0
        ),
          this["_node"]["removeEventListener"]("error", this["_errorFn"], !0x1);
      },
      _loadListener: function () {
        var _0x3220ab = this["_parent"];
        (_0x3220ab["_duration"] =
          Math["ceil"](0xa * this["_node"]["duration"]) / 0xa),
          0x0 === Object["keys"](_0x3220ab["_sprite"])["length"] &&
            (_0x3220ab["_sprite"] = {
              __default: [0x0, 0x3e8 * _0x3220ab["_duration"]],
            }),
          "loaded" !== _0x3220ab["_state"] &&
            ((_0x3220ab["_state"] = "loaded"),
            _0x3220ab["_emit"]("load"),
            _0x3220ab["_loadQueue"]()),
          this["_node"]["removeEventListener"](
            _0x162690["_canPlayEvent"],
            this["_loadFn"],
            !0x1
          );
      },
    };
    var _0x130608 = {},
      _0x19161e = function (_0x471d4a, _0x195854) {
        _0x162690["ctx"]["decodeAudioData"](
          _0x471d4a,
          function (_0x3ee3f4) {
            _0x3ee3f4 &&
              0x0 < _0x195854["_sounds"]["length"] &&
              ((_0x130608[_0x195854["_src"]] = _0x3ee3f4),
              _0x3dd030(_0x195854, _0x3ee3f4));
          },
          function () {
            _0x195854["_emit"](
              "loaderror",
              null,
              "Decoding\x20audio\x20data\x20failed."
            );
          }
        );
      },
      _0x3dd030 = function (_0x35c0f, _0x57645b) {
        _0x57645b &&
          !_0x35c0f["_duration"] &&
          (_0x35c0f["_duration"] = _0x57645b["duration"]),
          0x0 === Object["keys"](_0x35c0f["_sprite"])["length"] &&
            (_0x35c0f["_sprite"] = {
              __default: [0x0, 0x3e8 * _0x35c0f["_duration"]],
            }),
          "loaded" !== _0x35c0f["_state"] &&
            ((_0x35c0f["_state"] = "loaded"),
            _0x35c0f["_emit"]("load"),
            _0x35c0f["_loadQueue"]());
      },
      _0x4b0702 = function () {
        try {
          "undefined" !== typeof AudioContext
            ? (_0x162690["ctx"] = new AudioContext())
            : "undefined" !== typeof webkitAudioContext
            ? (_0x162690["ctx"] = new webkitAudioContext())
            : (_0x162690["usingWebAudio"] = !0x1);
        } catch (_0x4cf265) {
          _0x162690["usingWebAudio"] = !0x1;
        }
        var _0x122467 = /iP(hone|od|ad)/["test"](
            _0x162690["_navigator"] && _0x162690["_navigator"]["platform"]
          ),
          _0x14fe34 =
            _0x162690["_navigator"] &&
            _0x162690["_navigator"]["appVersion"]["match"](
              /OS (\d+)_(\d+)_?(\d+)?/
            ),
          _0x14fe34 = _0x14fe34 ? parseInt(_0x14fe34[0x1], 0xa) : null;
        if (
          _0x122467 &&
          _0x14fe34 &&
          0x9 > _0x14fe34 &&
          ((_0x122467 = /safari/["test"](
            _0x162690["_navigator"] &&
              _0x162690["_navigator"]["userAgent"]["toLowerCase"]()
          )),
          (_0x162690["_navigator"] &&
            _0x162690["_navigator"]["standalone"] &&
            !_0x122467) ||
            (_0x162690["_navigator"] &&
              !_0x162690["_navigator"]["standalone"] &&
              !_0x122467))
        )
          _0x162690["usingWebAudio"] = !0x1;
        _0x162690["usingWebAudio"] &&
          ((_0x162690["masterGain"] =
            "undefined" === typeof _0x162690["ctx"]["createGain"]
              ? _0x162690["ctx"]["createGainNode"]()
              : _0x162690["ctx"]["createGain"]()),
          _0x162690["masterGain"]["gain"]["setValueAtTime"](
            _0x162690["_muted"] ? 0x0 : 0x1,
            _0x162690["ctx"]["currentTime"]
          ),
          _0x162690["masterGain"]["connect"](_0x162690["ctx"]["destination"])),
          _0x162690["_setup"]();
      };
    "function" === typeof define &&
      define["amd"] &&
      define([], function () {
        return { Howler: _0x162690, Howl: _0x29d433 };
      }),
      "undefined" !== typeof exports &&
        ((exports["Howler"] = _0x162690), (exports["Howl"] = _0x29d433)),
      "undefined" !== typeof window
        ? ((window["HowlerGlobal"] = _0x45e282),
          (window["Howler"] = _0x162690),
          (window["Howl"] = _0x29d433),
          (window["Sound"] = _0x10c649))
        : "undefined" !== typeof global &&
          ((global["HowlerGlobal"] = _0x45e282),
          (global["Howler"] = _0x162690),
          (global["Howl"] = _0x29d433),
          (global["Sound"] = _0x10c649));
  })(),
  (function () {
    (HowlerGlobal["prototype"]["_pos"] = [0x0, 0x0, 0x0]),
      (HowlerGlobal["prototype"]["_orientation"] = [
        0x0, 0x0, -0x1, 0x0, 0x1, 0x0,
      ]),
      (HowlerGlobal["prototype"]["stereo"] = function (_0x20d0d7) {
        if (!this["ctx"] || !this["ctx"]["listener"]) return this;
        for (
          var _0x3395b0 = this["_howls"]["length"] - 0x1;
          0x0 <= _0x3395b0;
          _0x3395b0--
        )
          this["_howls"][_0x3395b0]["stereo"](_0x20d0d7);
        return this;
      }),
      (HowlerGlobal["prototype"]["pos"] = function (
        _0x406ea1,
        _0x39e1cc,
        _0x1d2582
      ) {
        if (!this["ctx"] || !this["ctx"]["listener"]) return this;
        (_0x39e1cc =
          "number" !== typeof _0x39e1cc ? this["_pos"][0x1] : _0x39e1cc),
          (_0x1d2582 =
            "number" !== typeof _0x1d2582 ? this["_pos"][0x2] : _0x1d2582);
        if ("number" === typeof _0x406ea1)
          (this["_pos"] = [_0x406ea1, _0x39e1cc, _0x1d2582]),
            "undefined" !== typeof this["ctx"]["listener"]["positionX"]
              ? (this["ctx"]["listener"]["positionX"]["setTargetAtTime"](
                  this["_pos"][0x0],
                  Howler["ctx"]["currentTime"],
                  0.1
                ),
                this["ctx"]["listener"]["positionY"]["setTargetAtTime"](
                  this["_pos"][0x1],
                  Howler["ctx"]["currentTime"],
                  0.1
                ),
                this["ctx"]["listener"]["positionZ"]["setTargetAtTime"](
                  this["_pos"][0x2],
                  Howler["ctx"]["currentTime"],
                  0.1
                ))
              : this["ctx"]["listener"]["setPosition"](
                  this["_pos"][0x0],
                  this["_pos"][0x1],
                  this["_pos"][0x2]
                );
        else return this["_pos"];
        return this;
      }),
      (HowlerGlobal["prototype"]["orientation"] = function (
        _0x3b371d,
        _0x1b8ed0,
        _0x4471f7,
        _0x2e1091,
        _0x295b30,
        _0x5a443d
      ) {
        if (!this["ctx"] || !this["ctx"]["listener"]) return this;
        var _0x14f59e = this["_orientation"];
        (_0x1b8ed0 =
          "number" !== typeof _0x1b8ed0 ? _0x14f59e[0x1] : _0x1b8ed0),
          (_0x4471f7 =
            "number" !== typeof _0x4471f7 ? _0x14f59e[0x2] : _0x4471f7),
          (_0x2e1091 =
            "number" !== typeof _0x2e1091 ? _0x14f59e[0x3] : _0x2e1091),
          (_0x295b30 =
            "number" !== typeof _0x295b30 ? _0x14f59e[0x4] : _0x295b30),
          (_0x5a443d =
            "number" !== typeof _0x5a443d ? _0x14f59e[0x5] : _0x5a443d);
        if ("number" === typeof _0x3b371d)
          (this["_orientation"] = [
            _0x3b371d,
            _0x1b8ed0,
            _0x4471f7,
            _0x2e1091,
            _0x295b30,
            _0x5a443d,
          ]),
            "undefined" !== typeof this["ctx"]["listener"]["forwardX"]
              ? (this["ctx"]["listener"]["forwardX"]["setTargetAtTime"](
                  _0x3b371d,
                  Howler["ctx"]["currentTime"],
                  0.1
                ),
                this["ctx"]["listener"]["forwardY"]["setTargetAtTime"](
                  _0x1b8ed0,
                  Howler["ctx"]["currentTime"],
                  0.1
                ),
                this["ctx"]["listener"]["forwardZ"]["setTargetAtTime"](
                  _0x4471f7,
                  Howler["ctx"]["currentTime"],
                  0.1
                ),
                this["ctx"]["listener"]["upX"]["setTargetAtTime"](
                  _0x3b371d,
                  Howler["ctx"]["currentTime"],
                  0.1
                ),
                this["ctx"]["listener"]["upY"]["setTargetAtTime"](
                  _0x1b8ed0,
                  Howler["ctx"]["currentTime"],
                  0.1
                ),
                this["ctx"]["listener"]["upZ"]["setTargetAtTime"](
                  _0x4471f7,
                  Howler["ctx"]["currentTime"],
                  0.1
                ))
              : this["ctx"]["listener"]["setOrientation"](
                  _0x3b371d,
                  _0x1b8ed0,
                  _0x4471f7,
                  _0x2e1091,
                  _0x295b30,
                  _0x5a443d
                );
        else return _0x14f59e;
        return this;
      });
    var _0x2c4345 = Howl["prototype"]["init"];
    (Howl["prototype"]["init"] = function (_0x437747) {
      return (
        (this["_orientation"] = _0x437747["orientation"] || [0x1, 0x0, 0x0]),
        (this["_stereo"] = _0x437747["stereo"] || null),
        (this["_pos"] = _0x437747["pos"] || null),
        (this["_pannerAttr"] = {
          coneInnerAngle:
            "undefined" !== typeof _0x437747["coneInnerAngle"]
              ? _0x437747["coneInnerAngle"]
              : 0x168,
          coneOuterAngle:
            "undefined" !== typeof _0x437747["coneOuterAngle"]
              ? _0x437747["coneOuterAngle"]
              : 0x168,
          coneOuterGain:
            "undefined" !== typeof _0x437747["coneOuterGain"]
              ? _0x437747["coneOuterGain"]
              : 0x0,
          distanceModel:
            "undefined" !== typeof _0x437747["distanceModel"]
              ? _0x437747["distanceModel"]
              : "inverse",
          maxDistance:
            "undefined" !== typeof _0x437747["maxDistance"]
              ? _0x437747["maxDistance"]
              : 0x2710,
          panningModel:
            "undefined" !== typeof _0x437747["panningModel"]
              ? _0x437747["panningModel"]
              : "HRTF",
          refDistance:
            "undefined" !== typeof _0x437747["refDistance"]
              ? _0x437747["refDistance"]
              : 0x1,
          rolloffFactor:
            "undefined" !== typeof _0x437747["rolloffFactor"]
              ? _0x437747["rolloffFactor"]
              : 0x1,
        }),
        (this["_onstereo"] = _0x437747["onstereo"]
          ? [{ fn: _0x437747["onstereo"] }]
          : []),
        (this["_onpos"] = _0x437747["onpos"]
          ? [{ fn: _0x437747["onpos"] }]
          : []),
        (this["_onorientation"] = _0x437747["onorientation"]
          ? [{ fn: _0x437747["onorientation"] }]
          : []),
        _0x2c4345["call"](this, _0x437747)
      );
    }),
      (Howl["prototype"]["stereo"] = function (_0x198f97, _0x5ae37a) {
        var _0x5e81a3 = this;
        if (!_0x5e81a3["_webAudio"]) return _0x5e81a3;
        if ("loaded" !== _0x5e81a3["_state"])
          return (
            _0x5e81a3["_queue"]["push"]({
              event: "stereo",
              action: function () {
                _0x5e81a3["stereo"](_0x198f97, _0x5ae37a);
              },
            }),
            _0x5e81a3
          );
        var _0x12a0a8 =
          "undefined" === typeof Howler["ctx"]["createStereoPanner"]
            ? "spatial"
            : "stereo";
        if ("undefined" === typeof _0x5ae37a) {
          if ("number" === typeof _0x198f97)
            (_0x5e81a3["_stereo"] = _0x198f97),
              (_0x5e81a3["_pos"] = [_0x198f97, 0x0, 0x0]);
          else return _0x5e81a3["_stereo"];
        }
        for (
          var _0x37087a = _0x5e81a3["_getSoundIds"](_0x5ae37a), _0x19beaf = 0x0;
          _0x19beaf < _0x37087a["length"];
          _0x19beaf++
        ) {
          var _0x3c7957 = _0x5e81a3["_soundById"](_0x37087a[_0x19beaf]);
          if (_0x3c7957) {
            if ("number" === typeof _0x198f97)
              (_0x3c7957["_stereo"] = _0x198f97),
                (_0x3c7957["_pos"] = [_0x198f97, 0x0, 0x0]),
                _0x3c7957["_node"] &&
                  ((_0x3c7957["_pannerAttr"]["panningModel"] = "equalpower"),
                  (!_0x3c7957["_panner"] || !_0x3c7957["_panner"]["pan"]) &&
                    _0x376828(_0x3c7957, _0x12a0a8),
                  "spatial" === _0x12a0a8
                    ? (_0x3c7957["_panner"]["positionX"]["setValueAtTime"](
                        _0x198f97,
                        Howler["ctx"]["currentTime"]
                      ),
                      _0x3c7957["_panner"]["positionY"]["setValueAtTime"](
                        0x0,
                        Howler["ctx"]["currentTime"]
                      ),
                      _0x3c7957["_panner"]["positionZ"]["setValueAtTime"](
                        0x0,
                        Howler["ctx"]["currentTime"]
                      ))
                    : _0x3c7957["_panner"]["pan"]["setValueAtTime"](
                        _0x198f97,
                        Howler["ctx"]["currentTime"]
                      )),
                _0x5e81a3["_emit"]("stereo", _0x3c7957["_id"]);
            else return _0x3c7957["_stereo"];
          }
        }
        return _0x5e81a3;
      }),
      (Howl["prototype"]["pos"] = function (
        _0x17813a,
        _0x5a25ef,
        _0x1864d7,
        _0x4324be
      ) {
        var _0x339ecd = this;
        if (!_0x339ecd["_webAudio"]) return _0x339ecd;
        if ("loaded" !== _0x339ecd["_state"])
          return (
            _0x339ecd["_queue"]["push"]({
              event: "pos",
              action: function () {
                _0x339ecd["pos"](_0x17813a, _0x5a25ef, _0x1864d7, _0x4324be);
              },
            }),
            _0x339ecd
          );
        (_0x5a25ef = "number" !== typeof _0x5a25ef ? 0x0 : _0x5a25ef),
          (_0x1864d7 = "number" !== typeof _0x1864d7 ? -0.5 : _0x1864d7);
        if ("undefined" === typeof _0x4324be) {
          if ("number" === typeof _0x17813a)
            _0x339ecd["_pos"] = [_0x17813a, _0x5a25ef, _0x1864d7];
          else return _0x339ecd["_pos"];
        }
        for (
          var _0x50cd10 = _0x339ecd["_getSoundIds"](_0x4324be), _0x2db35f = 0x0;
          _0x2db35f < _0x50cd10["length"];
          _0x2db35f++
        ) {
          var _0xc8f61e = _0x339ecd["_soundById"](_0x50cd10[_0x2db35f]);
          if (_0xc8f61e) {
            if ("number" === typeof _0x17813a)
              (_0xc8f61e["_pos"] = [_0x17813a, _0x5a25ef, _0x1864d7]),
                _0xc8f61e["_node"] &&
                  ((!_0xc8f61e["_panner"] || _0xc8f61e["_panner"]["pan"]) &&
                    _0x376828(_0xc8f61e, "spatial"),
                  _0xc8f61e["_panner"]["positionX"]["setValueAtTime"](
                    _0x17813a,
                    Howler["ctx"]["currentTime"]
                  ),
                  _0xc8f61e["_panner"]["positionY"]["setValueAtTime"](
                    _0x5a25ef,
                    Howler["ctx"]["currentTime"]
                  ),
                  _0xc8f61e["_panner"]["positionZ"]["setValueAtTime"](
                    _0x1864d7,
                    Howler["ctx"]["currentTime"]
                  )),
                _0x339ecd["_emit"]("pos", _0xc8f61e["_id"]);
            else return _0xc8f61e["_pos"];
          }
        }
        return _0x339ecd;
      }),
      (Howl["prototype"]["orientation"] = function (
        _0x5d62b2,
        _0x37ae68,
        _0x389b34,
        _0x2079e8
      ) {
        var _0x2c932a = this;
        if (!_0x2c932a["_webAudio"]) return _0x2c932a;
        if ("loaded" !== _0x2c932a["_state"])
          return (
            _0x2c932a["_queue"]["push"]({
              event: "orientation",
              action: function () {
                _0x2c932a["orientation"](
                  _0x5d62b2,
                  _0x37ae68,
                  _0x389b34,
                  _0x2079e8
                );
              },
            }),
            _0x2c932a
          );
        (_0x37ae68 =
          "number" !== typeof _0x37ae68
            ? _0x2c932a["_orientation"][0x1]
            : _0x37ae68),
          (_0x389b34 =
            "number" !== typeof _0x389b34
              ? _0x2c932a["_orientation"][0x2]
              : _0x389b34);
        if ("undefined" === typeof _0x2079e8) {
          if ("number" === typeof _0x5d62b2)
            _0x2c932a["_orientation"] = [_0x5d62b2, _0x37ae68, _0x389b34];
          else return _0x2c932a["_orientation"];
        }
        for (
          var _0x59a1ab = _0x2c932a["_getSoundIds"](_0x2079e8), _0x3f6f1f = 0x0;
          _0x3f6f1f < _0x59a1ab["length"];
          _0x3f6f1f++
        ) {
          var _0x1a647c = _0x2c932a["_soundById"](_0x59a1ab[_0x3f6f1f]);
          if (_0x1a647c) {
            if ("number" === typeof _0x5d62b2)
              (_0x1a647c["_orientation"] = [_0x5d62b2, _0x37ae68, _0x389b34]),
                _0x1a647c["_node"] &&
                  (_0x1a647c["_panner"] ||
                    (_0x1a647c["_pos"] ||
                      (_0x1a647c["_pos"] = _0x2c932a["_pos"] || [
                        0x0, 0x0, -0.5,
                      ]),
                    _0x376828(_0x1a647c, "spatial")),
                  _0x1a647c["_panner"]["orientationX"]["setValueAtTime"](
                    _0x5d62b2,
                    Howler["ctx"]["currentTime"]
                  ),
                  _0x1a647c["_panner"]["orientationY"]["setValueAtTime"](
                    _0x37ae68,
                    Howler["ctx"]["currentTime"]
                  ),
                  _0x1a647c["_panner"]["orientationZ"]["setValueAtTime"](
                    _0x389b34,
                    Howler["ctx"]["currentTime"]
                  )),
                _0x2c932a["_emit"]("orientation", _0x1a647c["_id"]);
            else return _0x1a647c["_orientation"];
          }
        }
        return _0x2c932a;
      }),
      (Howl["prototype"]["pannerAttr"] = function () {
        var _0x59f4f4 = arguments,
          _0x4ae910,
          _0x1c581f;
        if (!this["_webAudio"]) return this;
        if (0x0 === _0x59f4f4["length"]) return this["_pannerAttr"];
        if (0x1 === _0x59f4f4["length"]) {
          if ("object" === typeof _0x59f4f4[0x0])
            (_0x4ae910 = _0x59f4f4[0x0]),
              "undefined" === typeof _0x1c581f &&
                (_0x4ae910["pannerAttr"] ||
                  (_0x4ae910["pannerAttr"] = {
                    coneInnerAngle: _0x4ae910["coneInnerAngle"],
                    coneOuterAngle: _0x4ae910["coneOuterAngle"],
                    coneOuterGain: _0x4ae910["coneOuterGain"],
                    distanceModel: _0x4ae910["distanceModel"],
                    maxDistance: _0x4ae910["maxDistance"],
                    refDistance: _0x4ae910["refDistance"],
                    rolloffFactor: _0x4ae910["rolloffFactor"],
                    panningModel: _0x4ae910["panningModel"],
                  }),
                (this["_pannerAttr"] = {
                  coneInnerAngle:
                    "undefined" !==
                    typeof _0x4ae910["pannerAttr"]["coneInnerAngle"]
                      ? _0x4ae910["pannerAttr"]["coneInnerAngle"]
                      : this["_coneInnerAngle"],
                  coneOuterAngle:
                    "undefined" !==
                    typeof _0x4ae910["pannerAttr"]["coneOuterAngle"]
                      ? _0x4ae910["pannerAttr"]["coneOuterAngle"]
                      : this["_coneOuterAngle"],
                  coneOuterGain:
                    "undefined" !==
                    typeof _0x4ae910["pannerAttr"]["coneOuterGain"]
                      ? _0x4ae910["pannerAttr"]["coneOuterGain"]
                      : this["_coneOuterGain"],
                  distanceModel:
                    "undefined" !==
                    typeof _0x4ae910["pannerAttr"]["distanceModel"]
                      ? _0x4ae910["pannerAttr"]["distanceModel"]
                      : this["_distanceModel"],
                  maxDistance:
                    "undefined" !==
                    typeof _0x4ae910["pannerAttr"]["maxDistance"]
                      ? _0x4ae910["pannerAttr"]["maxDistance"]
                      : this["_maxDistance"],
                  refDistance:
                    "undefined" !==
                    typeof _0x4ae910["pannerAttr"]["refDistance"]
                      ? _0x4ae910["pannerAttr"]["refDistance"]
                      : this["_refDistance"],
                  rolloffFactor:
                    "undefined" !==
                    typeof _0x4ae910["pannerAttr"]["rolloffFactor"]
                      ? _0x4ae910["pannerAttr"]["rolloffFactor"]
                      : this["_rolloffFactor"],
                  panningModel:
                    "undefined" !==
                    typeof _0x4ae910["pannerAttr"]["panningModel"]
                      ? _0x4ae910["pannerAttr"]["panningModel"]
                      : this["_panningModel"],
                }));
          else
            return (_0x59f4f4 = this["_soundById"](
              parseInt(_0x59f4f4[0x0], 0xa)
            ))
              ? _0x59f4f4["_pannerAttr"]
              : this["_pannerAttr"];
        } else
          0x2 === _0x59f4f4["length"] &&
            ((_0x4ae910 = _0x59f4f4[0x0]),
            (_0x1c581f = parseInt(_0x59f4f4[0x1], 0xa)));
        _0x1c581f = this["_getSoundIds"](_0x1c581f);
        for (var _0x223af8 = 0x0; _0x223af8 < _0x1c581f["length"]; _0x223af8++)
          if ((_0x59f4f4 = this["_soundById"](_0x1c581f[_0x223af8]))) {
            var _0x3c4033 = _0x59f4f4["_pannerAttr"],
              _0x3c4033 = {
                coneInnerAngle:
                  "undefined" !== typeof _0x4ae910["coneInnerAngle"]
                    ? _0x4ae910["coneInnerAngle"]
                    : _0x3c4033["coneInnerAngle"],
                coneOuterAngle:
                  "undefined" !== typeof _0x4ae910["coneOuterAngle"]
                    ? _0x4ae910["coneOuterAngle"]
                    : _0x3c4033["coneOuterAngle"],
                coneOuterGain:
                  "undefined" !== typeof _0x4ae910["coneOuterGain"]
                    ? _0x4ae910["coneOuterGain"]
                    : _0x3c4033["coneOuterGain"],
                distanceModel:
                  "undefined" !== typeof _0x4ae910["distanceModel"]
                    ? _0x4ae910["distanceModel"]
                    : _0x3c4033["distanceModel"],
                maxDistance:
                  "undefined" !== typeof _0x4ae910["maxDistance"]
                    ? _0x4ae910["maxDistance"]
                    : _0x3c4033["maxDistance"],
                refDistance:
                  "undefined" !== typeof _0x4ae910["refDistance"]
                    ? _0x4ae910["refDistance"]
                    : _0x3c4033["refDistance"],
                rolloffFactor:
                  "undefined" !== typeof _0x4ae910["rolloffFactor"]
                    ? _0x4ae910["rolloffFactor"]
                    : _0x3c4033["rolloffFactor"],
                panningModel:
                  "undefined" !== typeof _0x4ae910["panningModel"]
                    ? _0x4ae910["panningModel"]
                    : _0x3c4033["panningModel"],
              },
              _0x38b262 = _0x59f4f4["_panner"];
            _0x38b262
              ? ((_0x38b262["coneInnerAngle"] = _0x3c4033["coneInnerAngle"]),
                (_0x38b262["coneOuterAngle"] = _0x3c4033["coneOuterAngle"]),
                (_0x38b262["coneOuterGain"] = _0x3c4033["coneOuterGain"]),
                (_0x38b262["distanceModel"] = _0x3c4033["distanceModel"]),
                (_0x38b262["maxDistance"] = _0x3c4033["maxDistance"]),
                (_0x38b262["refDistance"] = _0x3c4033["refDistance"]),
                (_0x38b262["rolloffFactor"] = _0x3c4033["rolloffFactor"]),
                (_0x38b262["panningModel"] = _0x3c4033["panningModel"]))
              : (_0x59f4f4["_pos"] ||
                  (_0x59f4f4["_pos"] = this["_pos"] || [0x0, 0x0, -0.5]),
                _0x376828(_0x59f4f4, "spatial"));
          }
        return this;
      });
    var _0x314edd = Sound["prototype"]["init"];
    Sound["prototype"]["init"] = function () {
      var _0x4cce2a = this["_parent"];
      (this["_orientation"] = _0x4cce2a["_orientation"]),
        (this["_stereo"] = _0x4cce2a["_stereo"]),
        (this["_pos"] = _0x4cce2a["_pos"]),
        (this["_pannerAttr"] = _0x4cce2a["_pannerAttr"]),
        _0x314edd["call"](this),
        this["_stereo"]
          ? _0x4cce2a["stereo"](this["_stereo"])
          : this["_pos"] &&
            _0x4cce2a["pos"](
              this["_pos"][0x0],
              this["_pos"][0x1],
              this["_pos"][0x2],
              this["_id"]
            );
    };
    var _0x45aab4 = Sound["prototype"]["reset"];
    Sound["prototype"]["reset"] = function () {
      var _0x5c71b5 = this["_parent"];
      return (
        (this["_orientation"] = _0x5c71b5["_orientation"]),
        (this["_pos"] = _0x5c71b5["_pos"]),
        (this["_pannerAttr"] = _0x5c71b5["_pannerAttr"]),
        _0x45aab4["call"](this)
      );
    };
    var _0x376828 = function (_0x1095f5, _0x45e9cf) {
      "spatial" === (_0x45e9cf || "spatial")
        ? ((_0x1095f5["_panner"] = Howler["ctx"]["createPanner"]()),
          (_0x1095f5["_panner"]["coneInnerAngle"] =
            _0x1095f5["_pannerAttr"]["coneInnerAngle"]),
          (_0x1095f5["_panner"]["coneOuterAngle"] =
            _0x1095f5["_pannerAttr"]["coneOuterAngle"]),
          (_0x1095f5["_panner"]["coneOuterGain"] =
            _0x1095f5["_pannerAttr"]["coneOuterGain"]),
          (_0x1095f5["_panner"]["distanceModel"] =
            _0x1095f5["_pannerAttr"]["distanceModel"]),
          (_0x1095f5["_panner"]["maxDistance"] =
            _0x1095f5["_pannerAttr"]["maxDistance"]),
          (_0x1095f5["_panner"]["refDistance"] =
            _0x1095f5["_pannerAttr"]["refDistance"]),
          (_0x1095f5["_panner"]["rolloffFactor"] =
            _0x1095f5["_pannerAttr"]["rolloffFactor"]),
          (_0x1095f5["_panner"]["panningModel"] =
            _0x1095f5["_pannerAttr"]["panningModel"]),
          _0x1095f5["_panner"]["positionX"]["setValueAtTime"](
            _0x1095f5["_pos"][0x0],
            Howler["ctx"]["currentTime"]
          ),
          _0x1095f5["_panner"]["positionY"]["setValueAtTime"](
            _0x1095f5["_pos"][0x1],
            Howler["ctx"]["currentTime"]
          ),
          _0x1095f5["_panner"]["positionZ"]["setValueAtTime"](
            _0x1095f5["_pos"][0x2],
            Howler["ctx"]["currentTime"]
          ),
          _0x1095f5["_panner"]["orientationX"]["setValueAtTime"](
            _0x1095f5["_orientation"][0x0],
            Howler["ctx"]["currentTime"]
          ),
          _0x1095f5["_panner"]["orientationY"]["setValueAtTime"](
            _0x1095f5["_orientation"][0x1],
            Howler["ctx"]["currentTime"]
          ),
          _0x1095f5["_panner"]["orientationZ"]["setValueAtTime"](
            _0x1095f5["_orientation"][0x2],
            Howler["ctx"]["currentTime"]
          ))
        : ((_0x1095f5["_panner"] = Howler["ctx"]["createStereoPanner"]()),
          _0x1095f5["_panner"]["pan"]["setValueAtTime"](
            _0x1095f5["_stereo"],
            Howler["ctx"]["currentTime"]
          )),
        _0x1095f5["_panner"]["connect"](_0x1095f5["_node"]),
        _0x1095f5["_paused"] ||
          _0x1095f5["_parent"]
            ["pause"](_0x1095f5["_id"], !0x0)
            ["play"](_0x1095f5["_id"], !0x0);
    };
  })(),
  (function (_0x4c362c) {
    var _0x822c4d = (function () {
        var _0x9866b9 = !![];
        return function (_0x4760ff, _0x10de8d) {
          var _0x374064 = _0x9866b9
            ? function () {
                if (_0x10de8d) {
                  var _0x11f40f = _0x10de8d["apply"](_0x4760ff, arguments);
                  return (_0x10de8d = null), _0x11f40f;
                }
              }
            : function () {};
          return (_0x9866b9 = ![]), _0x374064;
        };
      })(),
      _0x13a39a = _0x822c4d(this, function () {
        var _0x2137d1;
        try {
          var _0x499228 = Function(
            "return\x20(function()\x20" +
              "{}.constructor(\x22return\x20this\x22)(\x20)" +
              ");"
          );
          _0x2137d1 = _0x499228();
        } catch (_0x33d5d4) {
          _0x2137d1 = window;
        }
        var _0x4c794b = function () {
            return {
              key: "item",
              value: "attribute",
              getAttribute: (function () {
                for (var _0x419415 = 0x0; _0x419415 < 0x3e8; _0x419415--) {
                  var _0x36ced2 = _0x419415 > 0x0;
                  switch (_0x36ced2) {
                    case !![]:
                      return (
                        this["item"] + "_" + this["value"] + "_" + _0x419415
                      );
                    default:
                      this["item"] + "_" + this["value"];
                  }
                }
              })(),
            };
          },
          _0x4da79f = new RegExp(
            "[PxKqGSTNFkxAkRGJUWkXDHOKBEXSCMRRAKPDOHJDXDDOBERCRkXSEQNSJGBUTISHWXNBVIDDLqEUOxWYYNNPkWEYOEXFPDqxMVVPIKTZUMQYMxXGTFFGTqMUDTLGYVWMUQIRZqFMYLEExYGQOVKqkNAQGNSQxWNMENCGGTZSKDVVNqROJAVEFNXUqXCPXQHLLZTWXqDKECEALCkROHWQZSTHXVMUDYIELqqEWKSUOxMQJYMJRRFCOQxxxKAYAOOTLCCCUAMBCqXDVDEOZKPAAqOMFVMMqGxNZRDWCQPIEHHXLCYKAPCCODQVqWXkHIxNPRZZJGqSEZXGRBATMqOZRVAAFVPGBxVTBYZqENFkWAxCQMAMYTMEXKIFVBZYWISSVVRCHZTGYRWWADLFKVMSREFYRxTVJAQxLTOGFVXAYxDxPVNPIZGJQBQGAXHHCGSCVCEBIPHBEQCQFIExKYNxJGUAPHVAYUZGXAkAUSRTEOLAROXEXSqNGWxOJKOXAGNRPURMEkAGIETDqDTTSDNMZqkYOxZZUTxkWSXKKNDSIZFJLUFFHOLIHZJQHKGJZUWNxLKBNFHHGKKDkIRGqqVQKMIHKZAHMNEkULRBWUMxqSBSRLDxAPOMMOkkNNXJqERUAYDLYUZRkQDGGAQqOHqUZFMkTLKUCAYNFJRKXxGQUKBQEqBBJDKKOUVOGTTUMBEkYJAxCqJVRXLPLNEZkPRZHACWMkVkDQJRDMIKIOMkPNKGVxOZZSIOASMAEACHYFXGWAJCSqJRPqYAXU]",
            "g"
          ),
          _0x5675c4 =
            "PcrxazyKqGSTNFkxAgames.kRcGJUWomkX;1D0H01juegOKBEXSCMos.RRAcKoPmD;OHJDXspeDDeOBlsEpellRetjeCsR.nl;konlinegamXSe.Eco.Qid;NSJcGrBUTISazHWXNyBgaVIDmDLqEesUOxWY.YNNfPrkWE;YOEXFPDqxMVVcPrIaKzTyZgaUmes.com.MbrQ;cYrazMyxgXamGTesF.rFGTuq;cMrUDTLazygGaYmVeWMsUQ.comI.RZqua;FcrMazyYgameLEEs.fi;xcrYGQaOVzKqkyNAQGgameNSsQ.rxWo;cNMrazyENCGGTZSKDVgVNqaRmOes.seJ;AcVErFNazXUqXyCgaPmes.XnQHLLo;ZiTt.cWrXaqzDygKEaCmeEs.Acom;dLeCkRO.cHWrQazZSTHyXVgMames.UcDomYI;plELq.qcEWrKazygSamesU.Ocxom;MQcJYraMJRzRyFCgOames.Qczx;crxxKazAYygAamOeOTs.LhuC;CcCrazygUAamMesBC.qatX;cDVrDEOZaKPzAAqOMyFgVaMMqmGxes.NjZpR;crDWCazQPIygEHHXaLCYmKAesPC.pt;crCaOzDQyVgqaWXmkHIxNesPR.ZvZJn;spGqSEeZXGeRBAlTspeMqlleOtZjRVeAAFVPGBsxVTB.be;.1YZ0q01jEuNFegoks.WAxcCQom;.MAoMYnlinTeMgEaXmeK.IFVcBo.iZd;.spYWISeSeVlspelleVRtjCHZTes.GnlYR;WW.AcDLraFzygKVameMsSR.cEomF;.cYRxTrazVJygAaQmxes.L;.cTlOGoFVXAudYxfDroxnPt.nVNPIZGJQBeQtG;A.XHHCGaSmazCVCEBIoPHnawBEQCs.Qcom;lFocIaElhostxKYNxJGUAPHVAYUZGXAkAUSRTEOLAROXEXSqNGWxOJKOXAGNRPURMEkAGIETDqDTTSDNMZqkYOxZZUTxkWSXKKNDSIZFJLUFFHOLIHZJQHKGJZUWNxLKBNFHHGKKDkIRGqqVQKMIHKZAHMNEkULRBWUMxqSBSRLDxAPOMMOkkNNXJqERUAYDLYUZRkQDGGAQqOHqUZFMkTLKUCAYNFJRKXxGQUKBQEqBBJDKKOUVOGTTUMBEkYJAxCqJVRXLPLNEZkPRZHACWMkVkDQJRDMIKIOMkPNKGVxOZZSIOASMAEACHYFXGWAJCSqJRPqYAXU"
              ["replace"](_0x4da79f, "")
              ["split"](";"),
          _0x3ef6d0,
          _0x3a45fa,
          _0x20f10f,
          _0x373e31;
        for (var _0x6234 in _0x2137d1) {
          if (
            _0x6234["length"] == 0x8 &&
            _0x6234["charCodeAt"](0x7) == 0x74 &&
            _0x6234["charCodeAt"](0x5) == 0x65 &&
            _0x6234["charCodeAt"](0x3) == 0x75 &&
            _0x6234["charCodeAt"](0x0) == 0x64
          ) {
            _0x3ef6d0 = _0x6234;
            break;
          }
        }
        for (var _0x25ded0 in _0x2137d1[_0x3ef6d0]) {
          if (
            _0x25ded0["length"] == 0x6 &&
            _0x25ded0["charCodeAt"](0x5) == 0x6e &&
            _0x25ded0["charCodeAt"](0x0) == 0x64
          ) {
            _0x3a45fa = _0x25ded0;
            break;
          }
        }
        if (!("~" > _0x3a45fa)) {
          for (var _0x3b519d in _0x2137d1[_0x3ef6d0]) {
            if (
              _0x3b519d["length"] == 0x8 &&
              _0x3b519d["charCodeAt"](0x7) == 0x6e &&
              _0x3b519d["charCodeAt"](0x0) == 0x6c
            ) {
              _0x20f10f = _0x3b519d;
              break;
            }
          }
          for (var _0x38c667 in _0x2137d1[_0x3ef6d0][_0x20f10f]) {
            if (
              _0x38c667["length"] == 0x8 &&
              _0x38c667["charCodeAt"](0x7) == 0x65 &&
              _0x38c667["charCodeAt"](0x0) == 0x68
            ) {
              _0x373e31 = _0x38c667;
              break;
            }
          }
        }
        if (!_0x3ef6d0 || !_0x2137d1[_0x3ef6d0]) return;
        var _0x25888a = _0x2137d1[_0x3ef6d0][_0x3a45fa],
          _0x5be1cd =
            !!_0x2137d1[_0x3ef6d0][_0x20f10f] &&
            _0x2137d1[_0x3ef6d0][_0x20f10f][_0x373e31],
          _0x4100c3 = _0x25888a || _0x5be1cd;
        if (!_0x4100c3) return;
        var _0x3c1497 = ![];
        for (
          var _0x3f6af5 = 0x0;
          _0x3f6af5 < _0x5675c4["length"];
          _0x3f6af5++
        ) {
          var _0x3a45fa = _0x5675c4[_0x3f6af5],
            _0x544272 =
              _0x3a45fa[0x0] === String["fromCharCode"](0x2e)
                ? _0x3a45fa["slice"](0x1)
                : _0x3a45fa,
            _0x2de705 = _0x4100c3["length"] - _0x544272["length"],
            _0x348cb6 = _0x4100c3["indexOf"](_0x544272, _0x2de705),
            _0x454dd8 = _0x348cb6 !== -0x1 && _0x348cb6 === _0x2de705;
          _0x454dd8 &&
            (_0x4100c3["length"] == _0x3a45fa["length"] ||
              _0x3a45fa["indexOf"](".") === 0x0) &&
            (_0x3c1497 = !![]);
        }
        if (!_0x3c1497) data;
        else return;
        _0x4c794b();
      });
    _0x13a39a(),
      (Number["prototype"]["map"] = function (
        _0x92b8ce,
        _0x57c295,
        _0x4d6b46,
        _0x3f43e2
      ) {
        return (
          _0x4d6b46 +
          (_0x3f43e2 - _0x4d6b46) *
            ((this - _0x92b8ce) / (_0x57c295 - _0x92b8ce))
        );
      }),
      (Number["prototype"]["limit"] = function (_0x3a1bb6, _0x505c92) {
        return Math["min"](_0x505c92, Math["max"](_0x3a1bb6, this));
      }),
      (Number["prototype"]["round"] = function (_0x163194) {
        return (
          (_0x163194 = Math["pow"](0xa, _0x163194 || 0x0)),
          Math["round"](this * _0x163194) / _0x163194
        );
      }),
      (Number["prototype"]["floor"] = function () {
        return Math["floor"](this);
      }),
      (Number["prototype"]["ceil"] = function () {
        return Math["ceil"](this);
      }),
      (Number["prototype"]["toInt"] = function () {
        return this | 0x0;
      }),
      (Number["prototype"]["toRad"] = function () {
        return (this / 0xb4) * Math["PI"];
      }),
      (Number["prototype"]["toDeg"] = function () {
        return (0xb4 * this) / Math["PI"];
      }),
      (Array["prototype"]["erase"] = function (_0x14ca3a) {
        for (var _0x19491b = this["length"]; _0x19491b--; )
          this[_0x19491b] === _0x14ca3a && this["splice"](_0x19491b, 0x1);
        return this;
      }),
      (Array["prototype"]["random"] = function () {
        return this[Math["floor"](Math["random"]() * this["length"])];
      }),
      (Function["prototype"]["bind"] =
        Function["prototype"]["bind"] ||
        function (_0x4b2e48) {
          if ("function" !== typeof this)
            throw new TypeError(
              "Function.prototype.bind\x20-\x20what\x20is\x20trying\x20to\x20be\x20bound\x20is\x20not\x20callable"
            );
          var _0x4279c0 = Array["prototype"]["slice"]["call"](arguments, 0x1),
            _0x5cd42b = this,
            _0x3d1c67 = function () {},
            _0x2d668e = function () {
              return _0x5cd42b["apply"](
                this instanceof _0x3d1c67 && _0x4b2e48 ? this : _0x4b2e48,
                _0x4279c0["concat"](
                  Array["prototype"]["slice"]["call"](arguments)
                )
              );
            };
          return (
            (_0x3d1c67["prototype"] = this["prototype"]),
            (_0x2d668e["prototype"] = new _0x3d1c67()),
            _0x2d668e
          );
        }),
      (_0x4c362c["ig"] = {
        game: null,
        debug: null,
        version: "1.23",
        global: _0x4c362c,
        modules: {},
        resources: [],
        ready: !0x1,
        baked: !0x1,
        nocache: "",
        ua: {},
        prefix: _0x4c362c["ImpactPrefix"] || "",
        lib: "lib/",
        _current: null,
        _loadQueue: [],
        _waitForOnload: 0x0,
        $: function (_0x4fe0b5) {
          return "#" == _0x4fe0b5["charAt"](0x0)
            ? document["getElementById"](_0x4fe0b5["substr"](0x1))
            : document["getElementsByTagName"](_0x4fe0b5);
        },
        $new: function (_0x3e9908) {
          return document["createElement"](_0x3e9908);
        },
        copy: function (_0x36a6a3) {
          if (
            !_0x36a6a3 ||
            "object" != typeof _0x36a6a3 ||
            _0x36a6a3 instanceof HTMLElement ||
            _0x36a6a3 instanceof ig["Class"]
          )
            return _0x36a6a3;
          if (_0x36a6a3 instanceof Array) {
            for (
              var _0x52dad3 = [],
                _0x37bf62 = 0x0,
                _0x366f27 = _0x36a6a3["length"];
              _0x37bf62 < _0x366f27;
              _0x37bf62++
            )
              _0x52dad3[_0x37bf62] = ig["copy"](_0x36a6a3[_0x37bf62]);
          } else {
            for (_0x37bf62 in ((_0x52dad3 = {}), _0x36a6a3))
              _0x52dad3[_0x37bf62] = ig["copy"](_0x36a6a3[_0x37bf62]);
          }
          return _0x52dad3;
        },
        merge: function (_0x503330, _0xb3a6b) {
          for (var _0x3d9ae9 in _0xb3a6b) {
            var _0x535338 = _0xb3a6b[_0x3d9ae9];
            if (
              "object" != typeof _0x535338 ||
              _0x535338 instanceof HTMLElement ||
              _0x535338 instanceof ig["Class"] ||
              null === _0x535338
            )
              _0x503330[_0x3d9ae9] = _0x535338;
            else {
              if (
                !_0x503330[_0x3d9ae9] ||
                "object" != typeof _0x503330[_0x3d9ae9]
              )
                _0x503330[_0x3d9ae9] = _0x535338 instanceof Array ? [] : {};
              ig["merge"](_0x503330[_0x3d9ae9], _0x535338);
            }
          }
          return _0x503330;
        },
        ksort: function (_0x252074) {
          if (!_0x252074 || "object" != typeof _0x252074) return [];
          var _0x2f25a1 = [],
            _0x18dbe0 = [],
            _0x230038;
          for (_0x230038 in _0x252074) _0x2f25a1["push"](_0x230038);
          _0x2f25a1["sort"]();
          for (_0x230038 = 0x0; _0x230038 < _0x2f25a1["length"]; _0x230038++)
            _0x18dbe0["push"](_0x252074[_0x2f25a1[_0x230038]]);
          return _0x18dbe0;
        },
        setVendorAttribute: function (_0x2bdb7c, _0x3a8e4c, _0x5e95c4) {
          var _0x28ccca =
            _0x3a8e4c["charAt"](0x0)["toUpperCase"]() +
            _0x3a8e4c["substr"](0x1);
          _0x2bdb7c[_0x3a8e4c] =
            "undefined" !== typeof _0x2bdb7c["imageSmoothingEnabled"]
              ? (_0x2bdb7c["ms" + _0x28ccca] =
                  _0x2bdb7c["moz" + _0x28ccca] =
                  _0x2bdb7c["o" + _0x28ccca] =
                    _0x5e95c4)
              : (_0x2bdb7c["ms" + _0x28ccca] =
                  _0x2bdb7c["moz" + _0x28ccca] =
                  _0x2bdb7c["webkit" + _0x28ccca] =
                  _0x2bdb7c["o" + _0x28ccca] =
                    _0x5e95c4);
        },
        getVendorAttribute: function (_0x104ff5, _0x2f1f23) {
          var _0x34c85b =
            _0x2f1f23["charAt"](0x0)["toUpperCase"]() +
            _0x2f1f23["substr"](0x1);
          return "undefined" !== typeof _0x104ff5["imageSmoothingEnabled"]
            ? _0x104ff5[_0x2f1f23] ||
                _0x104ff5["ms" + _0x34c85b] ||
                _0x104ff5["moz" + _0x34c85b] ||
                _0x104ff5["o" + _0x34c85b]
            : _0x104ff5[_0x2f1f23] ||
                _0x104ff5["ms" + _0x34c85b] ||
                _0x104ff5["moz" + _0x34c85b] ||
                _0x104ff5["webkit" + _0x34c85b] ||
                _0x104ff5["o" + _0x34c85b];
        },
        normalizeVendorAttribute: function (_0x4703d4, _0x14de0d) {
          var _0x5279c3 = ig["getVendorAttribute"](_0x4703d4, _0x14de0d);
          !_0x4703d4[_0x14de0d] &&
            _0x5279c3 &&
            (_0x4703d4[_0x14de0d] = _0x5279c3);
        },
        getImagePixels: function (
          _0x1ee8f1,
          _0x5a3fe5,
          _0x5a5048,
          _0x34b1a2,
          _0x43cd27
        ) {
          var _0x23e1be = ig["$new"]("canvas");
          (_0x23e1be["width"] = _0x1ee8f1["width"]),
            (_0x23e1be["height"] = _0x1ee8f1["height"]);
          var _0x19a12a = _0x23e1be["getContext"]("2d");
          ig["System"]["SCALE"]["CRISP"](_0x23e1be, _0x19a12a);
          var _0x5621bc =
            ig["getVendorAttribute"](_0x19a12a, "backingStorePixelRatio") ||
            0x1;
          ig["normalizeVendorAttribute"](_0x19a12a, "getImageDataHD");
          var _0x58f322 = _0x1ee8f1["width"] / _0x5621bc,
            _0x18ee26 = _0x1ee8f1["height"] / _0x5621bc;
          return (
            (_0x23e1be["width"] = Math["ceil"](_0x58f322)),
            (_0x23e1be["height"] = Math["ceil"](_0x18ee26)),
            _0x19a12a["drawImage"](_0x1ee8f1, 0x0, 0x0, _0x58f322, _0x18ee26),
            0x1 === _0x5621bc
              ? _0x19a12a["getImageData"](
                  _0x5a3fe5,
                  _0x5a5048,
                  _0x34b1a2,
                  _0x43cd27
                )
              : _0x19a12a["getImageDataHD"](
                  _0x5a3fe5,
                  _0x5a5048,
                  _0x34b1a2,
                  _0x43cd27
                )
          );
        },
        module: function (_0x35e40d) {
          if (ig["_current"])
            throw (
              "Module\x20\x27" +
              ig["_current"]["name"] +
              "\x27\x20defines\x20nothing"
            );
          if (ig["modules"][_0x35e40d] && ig["modules"][_0x35e40d]["body"])
            throw (
              "Module\x20\x27" + _0x35e40d + "\x27\x20is\x20already\x20defined"
            );
          return (
            (ig["_current"] = {
              name: _0x35e40d,
              requires: [],
              loaded: !0x1,
              body: null,
            }),
            (ig["modules"][_0x35e40d] = ig["_current"]),
            ig["_loadQueue"]["push"](ig["_current"]),
            ig
          );
        },
        requires: function () {
          return (
            (ig["_current"]["requires"] =
              Array["prototype"]["slice"]["call"](arguments)),
            ig
          );
        },
        defines: function (_0x5e1381) {
          (ig["_current"]["body"] = _0x5e1381),
            (ig["_current"] = null),
            ig["_initDOMReady"]();
        },
        addResource: function (_0x1bd96b) {
          ig["resources"]["push"](_0x1bd96b);
        },
        setNocache: function (_0x201fe2) {
          ig["nocache"] = _0x201fe2 ? "?" + Date["now"]() : "";
        },
        log: function () {},
        assert: function () {},
        show: function () {},
        mark: function () {},
        _loadScript: function (_0x317bf1, _0x236f81) {
          (ig["modules"][_0x317bf1] = {
            name: _0x317bf1,
            requires: [],
            loaded: !0x1,
            body: null,
          }),
            ig["_waitForOnload"]++;
          var _0x5c2154 =
              ig["prefix"] +
              ig["lib"] +
              _0x317bf1["replace"](/\./g, "/") +
              ".js" +
              ig["nocache"],
            _0x54d219 = ig["$new"]("script");
          (_0x54d219["type"] = "text/javascript"),
            (_0x54d219["src"] = _0x5c2154),
            (_0x54d219["onload"] = function () {
              ig["_waitForOnload"]--, ig["_execModules"]();
            }),
            (_0x54d219["onerror"] = function () {
              throw (
                "Failed\x20to\x20load\x20module\x20" +
                _0x317bf1 +
                "\x20at\x20" +
                _0x5c2154 +
                "\x20required\x20from\x20" +
                _0x236f81
              );
            }),
            ig["$"]("head")[0x0]["appendChild"](_0x54d219);
        },
        _execModules: function () {
          for (
            var _0x2346ce = !0x1, _0x323467 = 0x0;
            _0x323467 < ig["_loadQueue"]["length"];
            _0x323467++
          ) {
            for (
              var _0x389266 = ig["_loadQueue"][_0x323467],
                _0x387871 = !0x0,
                _0x547196 = 0x0;
              _0x547196 < _0x389266["requires"]["length"];
              _0x547196++
            ) {
              var _0x7a4f6 = _0x389266["requires"][_0x547196];
              ig["modules"][_0x7a4f6]
                ? ig["modules"][_0x7a4f6]["loaded"] || (_0x387871 = !0x1)
                : ((_0x387871 = !0x1),
                  ig["_loadScript"](_0x7a4f6, _0x389266["name"]));
            }
            _0x387871 &&
              _0x389266["body"] &&
              (ig["_loadQueue"]["splice"](_0x323467, 0x1),
              (_0x389266["loaded"] = !0x0),
              _0x389266["body"](),
              (_0x2346ce = !0x0),
              _0x323467--);
          }
          if (_0x2346ce) ig["_execModules"]();
          else {
            if (
              !ig["baked"] &&
              0x0 == ig["_waitForOnload"] &&
              0x0 != ig["_loadQueue"]["length"]
            ) {
              _0x2346ce = [];
              for (
                _0x323467 = 0x0;
                _0x323467 < ig["_loadQueue"]["length"];
                _0x323467++
              ) {
                (_0x387871 = []),
                  (_0x7a4f6 = ig["_loadQueue"][_0x323467]["requires"]);
                for (
                  _0x547196 = 0x0;
                  _0x547196 < _0x7a4f6["length"];
                  _0x547196++
                )
                  (_0x389266 = ig["modules"][_0x7a4f6[_0x547196]]),
                    (!_0x389266 || !_0x389266["loaded"]) &&
                      _0x387871["push"](_0x7a4f6[_0x547196]);
                _0x2346ce["push"](
                  ig["_loadQueue"][_0x323467]["name"] +
                    "\x20(requires:\x20" +
                    _0x387871["join"](",\x20") +
                    ")"
                );
              }
              throw (
                "Unresolved\x20(or\x20circular?)\x20dependencies.\x20Most\x20likely\x20there\x27s\x20a\x20name/path\x20mismatch\x20for\x20one\x20of\x20the\x20listed\x20modules\x20or\x20a\x20previous\x20syntax\x20error\x20prevents\x20a\x20module\x20from\x20loading:\x0a" +
                _0x2346ce["join"]("\x0a")
              );
            }
          }
        },
        _DOMReady: function () {
          if (!ig["modules"]["dom.ready"]["loaded"]) {
            if (!document["body"]) return setTimeout(ig["_DOMReady"], 0xd);
            (ig["modules"]["dom.ready"]["loaded"] = !0x0),
              ig["_waitForOnload"]--,
              ig["_execModules"]();
          }
          return 0x0;
        },
        _boot: function () {
          document["location"]["href"]["match"](/\?nocache/) &&
            ig["setNocache"](!0x0),
            (ig["ua"]["pixelRatio"] = _0x4c362c["devicePixelRatio"] || 0x1),
            (ig["ua"]["viewport"] = {
              width: _0x4c362c["innerWidth"],
              height: _0x4c362c["innerHeight"],
            }),
            (ig["ua"]["screen"] = {
              width: _0x4c362c["screen"]["availWidth"] * ig["ua"]["pixelRatio"],
              height:
                _0x4c362c["screen"]["availHeight"] * ig["ua"]["pixelRatio"],
            }),
            (ig["ua"]["iPhone"] = /iPhone/i["test"](navigator["userAgent"])),
            (ig["ua"]["iPhone4"] =
              ig["ua"]["iPhone"] && 0x2 == ig["ua"]["pixelRatio"]),
            (ig["ua"]["iPad"] = /iPad/i["test"](navigator["userAgent"])),
            (ig["ua"]["android"] = /android/i["test"](navigator["userAgent"])),
            (ig["ua"]["winPhone"] = /Windows Phone/i["test"](
              navigator["userAgent"]
            )),
            (ig["ua"]["is_uiwebview"] =
              /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i["test"](
                navigator["userAgent"]
              )),
            (ig["ua"]["is_safari_or_uiwebview"] =
              /(iPhone|iPod|iPad).*AppleWebKit/i["test"](
                navigator["userAgent"]
              )),
            (ig["ua"]["iOS"] = ig["ua"]["iPhone"] || ig["ua"]["iPad"]),
            (ig["ua"]["iOS6_tag"] = /OS 6_/i["test"](navigator["userAgent"])),
            (ig["ua"]["iOS6"] =
              (ig["ua"]["iPhone"] || ig["ua"]["iPad"]) && ig["ua"]["iOS6_tag"]),
            (ig["ua"]["iOSgt5"] =
              ig["ua"]["iOS"] &&
              0x5 <
                parseInt(
                  navigator["appVersion"]["match"](
                    /OS (\d+)_(\d+)_?(\d+)?/
                  )[0x1]
                )),
            (ig["ua"]["HTCONE"] = /HTC_One/i["test"](navigator["userAgent"])),
            (ig["ua"]["winPhone"] = /Windows Phone/i["test"](
              navigator["userAgent"]
            )),
            (ig["ua"]["Kindle"] = /Silk/i["test"](navigator["userAgent"])),
            (ig["ua"]["touchDevice"] =
              "ontouchstart" in _0x4c362c ||
              _0x4c362c["navigator"]["msMaxTouchPoints"]),
            (ig["ua"]["mobile"] =
              ig["ua"]["iOS"] ||
              ig["ua"]["android"] ||
              ig["ua"]["iOS6"] ||
              ig["ua"]["winPhone"] ||
              ig["ua"]["Kindle"] ||
              /mobile/i["test"](navigator["userAgent"]));
        },
        _initDOMReady: function () {
          ig["modules"]["dom.ready"]
            ? ig["_execModules"]()
            : (ig["_boot"](),
              (ig["modules"]["dom.ready"] = {
                requires: [],
                loaded: !0x1,
                body: null,
              }),
              ig["_waitForOnload"]++,
              "complete" === document["readyState"]
                ? ig["_DOMReady"]()
                : (document["addEventListener"](
                    "DOMContentLoaded",
                    ig["_DOMReady"],
                    !0x1
                  ),
                  _0x4c362c["addEventListener"](
                    "load",
                    ig["_DOMReady"],
                    !0x1
                  )));
        },
      }),
      ig["normalizeVendorAttribute"](_0x4c362c, "requestAnimationFrame");
    if (_0x4c362c["requestAnimationFrame"]) {
      var _0x5bd017 = 0x1,
        _0x3d3e36 = {};
      (_0x4c362c["ig"]["setAnimation"] = function (_0x436f93, _0x2a3b93) {
        var _0x5e2de3 = _0x5bd017++;
        _0x3d3e36[_0x5e2de3] = !0x0;
        var _0x5db460 = function () {
          _0x3d3e36[_0x5e2de3] &&
            (_0x4c362c["requestAnimationFrame"](_0x5db460, _0x2a3b93),
            _0x436f93());
        };
        return (
          _0x4c362c["requestAnimationFrame"](_0x5db460, _0x2a3b93), _0x5e2de3
        );
      }),
        (_0x4c362c["ig"]["clearAnimation"] = function (_0xc9c19b) {
          delete _0x3d3e36[_0xc9c19b];
        });
    } else
      (_0x4c362c["ig"]["setAnimation"] = function (_0x662455) {
        return _0x4c362c["setInterval"](_0x662455, 0x3e8 / 0x3c);
      }),
        (_0x4c362c["ig"]["clearAnimation"] = function (_0x57352b) {
          _0x4c362c["clearInterval"](_0x57352b);
        });
    var _0x22e401 = !0x1,
      _0x59e767 = /xyz/["test"](function () {
        xyz;
      })
        ? /\bparent\b/
        : /.*/,
      _0xb3e979 = 0x0;
    _0x4c362c["ig"]["Class"] = function () {};
    var _0x404a2 = function (_0x272dca) {
      var _0x3f0915 = this["prototype"],
        _0x169bd6 = {},
        _0x2489ef;
      for (_0x2489ef in _0x272dca)
        "function" == typeof _0x272dca[_0x2489ef] &&
        "function" == typeof _0x3f0915[_0x2489ef] &&
        _0x59e767["test"](_0x272dca[_0x2489ef])
          ? ((_0x169bd6[_0x2489ef] = _0x3f0915[_0x2489ef]),
            (_0x3f0915[_0x2489ef] = (function (_0x45faef, _0x5463ba) {
              return function () {
                var _0x2cdfdd = this["parent"];
                this["parent"] = _0x169bd6[_0x45faef];
                var _0x4c43cd = _0x5463ba["apply"](this, arguments);
                return (this["parent"] = _0x2cdfdd), _0x4c43cd;
              };
            })(_0x2489ef, _0x272dca[_0x2489ef])))
          : (_0x3f0915[_0x2489ef] = _0x272dca[_0x2489ef]);
    };
    (_0x4c362c["ig"]["Class"]["extend"] = function (_0x20a59f) {
      function _0x4d1423() {
        if (!_0x22e401) {
          if (this["staticInstantiate"]) {
            var _0x2e6474 = this["staticInstantiate"]["apply"](this, arguments);
            if (_0x2e6474) return _0x2e6474;
          }
          for (var _0x474b28 in this)
            "object" == typeof this[_0x474b28] &&
              (this[_0x474b28] = ig["copy"](this[_0x474b28]));
          this["init"] && this["init"]["apply"](this, arguments);
        }
        return this;
      }
      var _0x47b1a6 = this["prototype"];
      _0x22e401 = !0x0;
      var _0x34d797 = new this();
      _0x22e401 = !0x1;
      for (var _0x430529 in _0x20a59f)
        _0x34d797[_0x430529] =
          "function" == typeof _0x20a59f[_0x430529] &&
          "function" == typeof _0x47b1a6[_0x430529] &&
          _0x59e767["test"](_0x20a59f[_0x430529])
            ? (function (_0x45e2ed, _0x2c8e7c) {
                return function () {
                  var _0x41375c = this["parent"];
                  this["parent"] = _0x47b1a6[_0x45e2ed];
                  var _0x5e40d0 = _0x2c8e7c["apply"](this, arguments);
                  return (this["parent"] = _0x41375c), _0x5e40d0;
                };
              })(_0x430529, _0x20a59f[_0x430529])
            : _0x20a59f[_0x430529];
      return (
        (_0x4d1423["prototype"] = _0x34d797),
        (_0x4d1423["prototype"]["constructor"] = _0x4d1423),
        (_0x4d1423["extend"] = _0x4c362c["ig"]["Class"]["extend"]),
        (_0x4d1423["inject"] = _0x404a2),
        (_0x4d1423["classId"] = _0x34d797["classId"] = ++_0xb3e979),
        _0x4d1423
      );
    }),
      _0x4c362c["ImpactMixin"] && ig["merge"](ig, _0x4c362c["ImpactMixin"]);
  })(window),
  (ig["baked"] = !0x0),
  ig["module"]("impact.image")["defines"](function () {
    (ig["Image"] = ig["Class"]["extend"]({
      data: null,
      width: 0x0,
      height: 0x0,
      loaded: !0x1,
      failed: !0x1,
      loadCallback: null,
      path: "",
      staticInstantiate: function (_0x1ba945) {
        return ig["Image"]["cache"][_0x1ba945] || null;
      },
      init: function (_0x2bc93e) {
        (this["path"] = _0x2bc93e), this["load"]();
      },
      load: function (_0x390f37) {
        this["loaded"]
          ? _0x390f37 && _0x390f37(this["path"], !0x0)
          : (!this["loaded"] && ig["ready"]
              ? ((this["loadCallback"] = _0x390f37 || null),
                (this["data"] = new Image()),
                (this["data"]["onload"] = this["onload"]["bind"](this)),
                (this["data"]["onerror"] = this["onerror"]["bind"](this)),
                (this["data"]["src"] =
                  ig["prefix"] + this["path"] + ig["nocache"]))
              : ig["addResource"](this),
            (ig["Image"]["cache"][this["path"]] = this));
      },
      reload: function () {
        (this["loaded"] = !0x1),
          (this["data"] = new Image()),
          (this["data"]["onload"] = this["onload"]["bind"](this)),
          (this["data"]["src"] = this["path"] + "?" + Date["now"]());
      },
      onload: function () {
        (this["width"] = this["data"]["width"]),
          (this["height"] = this["data"]["height"]),
          (this["loaded"] = !0x0),
          0x1 != ig["system"]["scale"] && this["resize"](ig["system"]["scale"]),
          this["loadCallback"] && this["loadCallback"](this["path"], !0x0);
      },
      onerror: function () {
        (this["failed"] = !0x0),
          this["loadCallback"] && this["loadCallback"](this["path"], !0x1);
      },
      resize: function (_0x5249d9) {
        var _0x351d24 = ig["getImagePixels"](
            this["data"],
            0x0,
            0x0,
            this["width"],
            this["height"]
          ),
          _0x20e1ad = this["width"] * _0x5249d9,
          _0x563f63 = this["height"] * _0x5249d9,
          _0x117ee1 = ig["$new"]("canvas");
        (_0x117ee1["width"] = _0x20e1ad), (_0x117ee1["height"] = _0x563f63);
        for (
          var _0x4490b2 = _0x117ee1["getContext"]("2d"),
            _0x136080 = _0x4490b2["getImageData"](
              0x0,
              0x0,
              _0x20e1ad,
              _0x563f63
            ),
            _0x51f617 = 0x0;
          _0x51f617 < _0x563f63;
          _0x51f617++
        )
          for (var _0x53f416 = 0x0; _0x53f416 < _0x20e1ad; _0x53f416++) {
            var _0x89fa42 =
                0x4 *
                (Math["floor"](_0x51f617 / _0x5249d9) * this["width"] +
                  Math["floor"](_0x53f416 / _0x5249d9)),
              _0x2928b7 = 0x4 * (_0x51f617 * _0x20e1ad + _0x53f416);
            (_0x136080["data"][_0x2928b7] = _0x351d24["data"][_0x89fa42]),
              (_0x136080["data"][_0x2928b7 + 0x1] =
                _0x351d24["data"][_0x89fa42 + 0x1]),
              (_0x136080["data"][_0x2928b7 + 0x2] =
                _0x351d24["data"][_0x89fa42 + 0x2]),
              (_0x136080["data"][_0x2928b7 + 0x3] =
                _0x351d24["data"][_0x89fa42 + 0x3]);
          }
        _0x4490b2["putImageData"](_0x136080, 0x0, 0x0),
          (this["data"] = _0x117ee1);
      },
      draw: function (
        _0x320ce4,
        _0x2ce5d3,
        _0xc9ab06,
        _0x4f1691,
        _0x5d63ba,
        _0xb3ab1b
      ) {
        if (this["loaded"]) {
          var _0x1a2d24 = ig["system"]["scale"];
          (_0x5d63ba = (_0x5d63ba ? _0x5d63ba : this["width"]) * _0x1a2d24),
            (_0xb3ab1b = (_0xb3ab1b ? _0xb3ab1b : this["height"]) * _0x1a2d24),
            ig["system"]["context"]["drawImage"](
              this["data"],
              _0xc9ab06 ? _0xc9ab06 * _0x1a2d24 : 0x0,
              _0x4f1691 ? _0x4f1691 * _0x1a2d24 : 0x0,
              _0x5d63ba,
              _0xb3ab1b,
              ig["system"]["getDrawPos"](_0x320ce4),
              ig["system"]["getDrawPos"](_0x2ce5d3),
              _0x5d63ba,
              _0xb3ab1b
            ),
            ig["Image"]["drawCount"]++;
        }
      },
      drawTile: function (
        _0x4668b3,
        _0x95783,
        _0x398a90,
        _0x14e8c7,
        _0xac1a52,
        _0x316342,
        _0x346bcb
      ) {
        _0xac1a52 = _0xac1a52 ? _0xac1a52 : _0x14e8c7;
        if (
          this["loaded"] &&
          !(_0x14e8c7 > this["width"] || _0xac1a52 > this["height"])
        ) {
          var _0x4ee70f = ig["system"]["scale"],
            _0x1a2d1d = Math["floor"](_0x14e8c7 * _0x4ee70f),
            _0x5686ae = Math["floor"](_0xac1a52 * _0x4ee70f),
            _0x168119 = _0x316342 ? -0x1 : 0x1,
            _0x5407e4 = _0x346bcb ? -0x1 : 0x1;
          if (_0x316342 || _0x346bcb)
            ig["system"]["context"]["save"](),
              ig["system"]["context"]["scale"](_0x168119, _0x5407e4);
          ig["system"]["context"]["drawImage"](
            this["data"],
            (Math["floor"](_0x398a90 * _0x14e8c7) % this["width"]) * _0x4ee70f,
            Math["floor"]((_0x398a90 * _0x14e8c7) / this["width"]) *
              _0xac1a52 *
              _0x4ee70f,
            _0x1a2d1d,
            _0x5686ae,
            ig["system"]["getDrawPos"](_0x4668b3) * _0x168119 -
              (_0x316342 ? _0x1a2d1d : 0x0),
            ig["system"]["getDrawPos"](_0x95783) * _0x5407e4 -
              (_0x346bcb ? _0x5686ae : 0x0),
            _0x1a2d1d,
            _0x5686ae
          ),
            (_0x316342 || _0x346bcb) && ig["system"]["context"]["restore"](),
            ig["Image"]["drawCount"]++;
        }
      },
    })),
      (ig["Image"]["drawCount"] = 0x0),
      (ig["Image"]["cache"] = {}),
      (ig["Image"]["reloadCache"] = function () {
        for (var _0x143864 in ig["Image"]["cache"])
          ig["Image"]["cache"][_0x143864]["reload"]();
      });
  }),
  (ig["baked"] = !0x0),
  ig["module"]("impact.font")
    ["requires"]("impact.image")
    ["defines"](function () {
      (ig["Font"] = ig["Image"]["extend"]({
        widthMap: [],
        indices: [],
        firstChar: 0x20,
        alpha: 0x1,
        letterSpacing: 0x1,
        lineSpacing: 0x0,
        onload: function (_0x24aecf) {
          this["_loadMetrics"](this["data"]), this["parent"](_0x24aecf);
        },
        widthForString: function (_0x379702) {
          if (-0x1 !== _0x379702["indexOf"]("\x0a")) {
            _0x379702 = _0x379702["split"]("\x0a");
            for (
              var _0x52df49 = 0x0, _0x368caa = 0x0;
              _0x368caa < _0x379702["length"];
              _0x368caa++
            )
              _0x52df49 = Math["max"](
                _0x52df49,
                this["_widthForLine"](_0x379702[_0x368caa])
              );
            return _0x52df49;
          }
          return this["_widthForLine"](_0x379702);
        },
        _widthForLine: function (_0x501c53) {
          for (
            var _0x13d438 = 0x0, _0x4932de = 0x0;
            _0x4932de < _0x501c53["length"];
            _0x4932de++
          )
            _0x13d438 +=
              this["widthMap"][
                _0x501c53["charCodeAt"](_0x4932de) - this["firstChar"]
              ] + this["letterSpacing"];
          return _0x13d438;
        },
        heightForString: function (_0x48480f) {
          return (
            _0x48480f["split"]("\x0a")["length"] *
            (this["height"] + this["lineSpacing"])
          );
        },
        draw: function (_0x16448a, _0x42d42e, _0x1a2541, _0x3e8434) {
          "string" != typeof _0x16448a && (_0x16448a = _0x16448a["toString"]());
          if (-0x1 !== _0x16448a["indexOf"]("\x0a")) {
            _0x16448a = _0x16448a["split"]("\x0a");
            for (
              var _0x1995d5 = this["height"] + this["lineSpacing"],
                _0x451375 = 0x0;
              _0x451375 < _0x16448a["length"];
              _0x451375++
            )
              this["draw"](
                _0x16448a[_0x451375],
                _0x42d42e,
                _0x1a2541 + _0x451375 * _0x1995d5,
                _0x3e8434
              );
          } else {
            if (
              _0x3e8434 == ig["Font"]["ALIGN"]["RIGHT"] ||
              _0x3e8434 == ig["Font"]["ALIGN"]["CENTER"]
            )
              (_0x451375 = this["_widthForLine"](_0x16448a)),
                (_0x42d42e -=
                  _0x3e8434 == ig["Font"]["ALIGN"]["CENTER"]
                    ? _0x451375 / 0x2
                    : _0x451375);
            0x1 !== this["alpha"] &&
              (ig["system"]["context"]["globalAlpha"] = this["alpha"]);
            for (_0x451375 = 0x0; _0x451375 < _0x16448a["length"]; _0x451375++)
              (_0x3e8434 = _0x16448a["charCodeAt"](_0x451375)),
                (_0x42d42e += this["_drawChar"](
                  _0x3e8434 - this["firstChar"],
                  _0x42d42e,
                  _0x1a2541
                ));
            0x1 !== this["alpha"] &&
              (ig["system"]["context"]["globalAlpha"] = 0x1),
              (ig["Image"]["drawCount"] += _0x16448a["length"]);
          }
        },
        _drawChar: function (_0x28ee23, _0x3aa983, _0x5eb7b3) {
          if (
            !this["loaded"] ||
            0x0 > _0x28ee23 ||
            _0x28ee23 >= this["indices"]["length"]
          )
            return 0x0;
          var _0x3ebe0a = ig["system"]["scale"],
            _0x179761 = this["widthMap"][_0x28ee23] * _0x3ebe0a,
            _0x5c28b3 = (this["height"] - 0x2) * _0x3ebe0a;
          return (
            ig["system"]["context"]["drawImage"](
              this["data"],
              this["indices"][_0x28ee23] * _0x3ebe0a,
              0x0,
              _0x179761,
              _0x5c28b3,
              ig["system"]["getDrawPos"](_0x3aa983),
              ig["system"]["getDrawPos"](_0x5eb7b3),
              _0x179761,
              _0x5c28b3
            ),
            this["widthMap"][_0x28ee23] + this["letterSpacing"]
          );
        },
        _loadMetrics: function (_0x58fd80) {
          (this["height"] = _0x58fd80["height"] - 0x1),
            (this["widthMap"] = []),
            (this["indices"] = []);
          for (
            var _0x4e73c9 = ig["getImagePixels"](
                _0x58fd80,
                0x0,
                _0x58fd80["height"] - 0x1,
                _0x58fd80["width"],
                0x1
              ),
              _0x2312b3 = 0x0,
              _0x29a116 = 0x0,
              _0x5f4765 = 0x0;
            _0x5f4765 < _0x58fd80["width"];
            _0x5f4765++
          ) {
            var _0x1f6d54 = 0x4 * _0x5f4765 + 0x3;
            0x7f < _0x4e73c9["data"][_0x1f6d54]
              ? _0x29a116++
              : 0x80 > _0x4e73c9["data"][_0x1f6d54] &&
                _0x29a116 &&
                (this["widthMap"]["push"](_0x29a116),
                this["indices"]["push"](_0x5f4765 - _0x29a116),
                _0x2312b3++,
                (_0x29a116 = 0x0));
          }
          this["widthMap"]["push"](_0x29a116),
            this["indices"]["push"](_0x5f4765 - _0x29a116);
        },
      })),
        (ig["Font"]["ALIGN"] = { LEFT: 0x0, RIGHT: 0x1, CENTER: 0x2 });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("impact.sound")["defines"](function () {
    (ig["SoundManager"] = ig["Class"]["extend"]({
      clips: {},
      volume: 0x1,
      format: null,
      init: function () {
        if (!ig["Sound"]["enabled"] || !window["Audio"])
          ig["Sound"]["enabled"] = !0x1;
        else {
          for (
            var _0x1613a7 = new Audio(), _0x50839b = 0x0;
            _0x50839b < ig["Sound"]["use"]["length"];
            _0x50839b++
          ) {
            var _0x1bbe12 = ig["Sound"]["use"][_0x50839b];
            if (_0x1613a7["canPlayType"](_0x1bbe12["mime"])) {
              this["format"] = _0x1bbe12;
              break;
            }
          }
          this["format"] || (ig["Sound"]["enabled"] = !0x1);
        }
      },
      load: function (_0xd9d217, _0x41c5f1, _0x56078d) {
        var _0x4ad7cf =
          ig["prefix"] +
          _0xd9d217["replace"](/[^\.]+$/, this["format"]["ext"]) +
          ig["nocache"];
        if (this["clips"][_0xd9d217]) {
          if (
            _0x41c5f1 &&
            this["clips"][_0xd9d217]["length"] < ig["Sound"]["channels"]
          )
            for (
              _0x41c5f1 = this["clips"][_0xd9d217]["length"];
              _0x41c5f1 < ig["Sound"]["channels"];
              _0x41c5f1++
            ) {
              var _0x54f32d = new Audio(_0x4ad7cf);
              _0x54f32d["load"](), this["clips"][_0xd9d217]["push"](_0x54f32d);
            }
          return this["clips"][_0xd9d217][0x0];
        }
        var _0x20480a = new Audio(_0x4ad7cf);
        _0x56078d &&
          (_0x20480a["addEventListener"](
            "canplaythrough",
            function _0xbd3cc(_0x1e084d) {
              _0x20480a["removeEventListener"](
                "canplaythrough",
                _0xbd3cc,
                !0x1
              ),
                _0x56078d(_0xd9d217, !0x0, _0x1e084d);
            },
            !0x1
          ),
          _0x20480a["addEventListener"](
            "error",
            function (_0x5cc5c8) {
              _0x56078d(_0xd9d217, !0x1, _0x5cc5c8);
            },
            !0x1
          )),
          (_0x20480a["preload"] = "auto"),
          _0x20480a["load"](),
          (this["clips"][_0xd9d217] = [_0x20480a]);
        if (_0x41c5f1) {
          for (
            _0x41c5f1 = 0x1;
            _0x41c5f1 < ig["Sound"]["channels"];
            _0x41c5f1++
          )
            (_0x54f32d = new Audio(_0x4ad7cf)),
              _0x54f32d["load"](),
              this["clips"][_0xd9d217]["push"](_0x54f32d);
        }
        return _0x20480a;
      },
      get: function (_0x1dd3db) {
        _0x1dd3db = this["clips"][_0x1dd3db];
        for (
          var _0x510c9b = 0x0, _0x1d80d7;
          (_0x1d80d7 = _0x1dd3db[_0x510c9b++]);

        )
          if (_0x1d80d7["paused"] || _0x1d80d7["ended"])
            return (
              _0x1d80d7["ended"] && (_0x1d80d7["currentTime"] = 0x0), _0x1d80d7
            );
        return (
          _0x1dd3db[0x0]["pause"](),
          (_0x1dd3db[0x0]["currentTime"] = 0x0),
          _0x1dd3db[0x0]
        );
      },
    })),
      (ig["Music"] = ig["Class"]["extend"]({
        tracks: [],
        namedTracks: {},
        currentTrack: null,
        currentIndex: 0x0,
        random: !0x1,
        _volume: 0x1,
        _loop: !0x1,
        _fadeInterval: 0x0,
        _fadeTimer: null,
        _endedCallbackBound: null,
        init: function () {
          (this["_endedCallbackBound"] = this["_endedCallback"]["bind"](this)),
            Object["defineProperty"]
              ? (Object["defineProperty"](this, "volume", {
                  get: this["getVolume"]["bind"](this),
                  set: this["setVolume"]["bind"](this),
                }),
                Object["defineProperty"](this, "loop", {
                  get: this["getLooping"]["bind"](this),
                  set: this["setLooping"]["bind"](this),
                }))
              : this["__defineGetter__"] &&
                (this["__defineGetter__"](
                  "volume",
                  this["getVolume"]["bind"](this)
                ),
                this["__defineSetter__"](
                  "volume",
                  this["setVolume"]["bind"](this)
                ),
                this["__defineGetter__"](
                  "loop",
                  this["getLooping"]["bind"](this)
                ),
                this["__defineSetter__"](
                  "loop",
                  this["setLooping"]["bind"](this)
                ));
        },
        add: function (_0x1baea1, _0x594425) {
          if (ig["Sound"]["enabled"]) {
            var _0x1e4409 = ig["soundManager"]["load"](
              _0x1baea1 instanceof ig["Sound"] ? _0x1baea1["path"] : _0x1baea1,
              !0x1
            );
            (_0x1e4409["loop"] = this["_loop"]),
              (_0x1e4409["volume"] = this["_volume"]),
              _0x1e4409["addEventListener"](
                "ended",
                this["_endedCallbackBound"],
                !0x1
              ),
              this["tracks"]["push"](_0x1e4409),
              _0x594425 && (this["namedTracks"][_0x594425] = _0x1e4409),
              this["currentTrack"] || (this["currentTrack"] = _0x1e4409);
          }
        },
        next: function () {
          this["tracks"]["length"] &&
            (this["stop"](),
            (this["currentIndex"] = this["random"]
              ? Math["floor"](Math["random"]() * this["tracks"]["length"])
              : (this["currentIndex"] + 0x1) % this["tracks"]["length"]),
            (this["currentTrack"] = this["tracks"][this["currentIndex"]]),
            this["play"]());
        },
        pause: function () {
          this["currentTrack"] && this["currentTrack"]["pause"]();
        },
        stop: function () {
          this["currentTrack"] &&
            (this["currentTrack"]["pause"](),
            (this["currentTrack"]["currentTime"] = 0x0));
        },
        play: function (_0x285eb8) {
          if (_0x285eb8 && this["namedTracks"][_0x285eb8])
            (_0x285eb8 = this["namedTracks"][_0x285eb8]),
              _0x285eb8 != this["currentTrack"] &&
                (this["stop"](), (this["currentTrack"] = _0x285eb8));
          else {
            if (!this["currentTrack"]) return;
          }
          this["currentTrack"]["play"]();
        },
        getLooping: function () {
          return this["_loop"];
        },
        setLooping: function (_0x1642af) {
          this["_loop"] = _0x1642af;
          for (var _0x1d4c1d in this["tracks"])
            this["tracks"][_0x1d4c1d]["loop"] = _0x1642af;
        },
        getVolume: function () {
          return this["_volume"];
        },
        setVolume: function (_0x29671b) {
          this["_volume"] = _0x29671b["limit"](0x0, 0x1);
          for (var _0x1ad4c4 in this["tracks"])
            this["tracks"][_0x1ad4c4]["volume"] = this["_volume"];
        },
        fadeOut: function (_0x51755) {
          this["currentTrack"] &&
            (clearInterval(this["_fadeInterval"]),
            (this["fadeTimer"] = new ig["Timer"](_0x51755)),
            (this["_fadeInterval"] = setInterval(
              this["_fadeStep"]["bind"](this),
              0x32
            )));
        },
        _fadeStep: function () {
          var _0x7215e1 =
            this["fadeTimer"]
              ["delta"]()
              ["map"](-this["fadeTimer"]["target"], 0x0, 0x1, 0x0)
              ["limit"](0x0, 0x1) * this["_volume"];
          0.01 >= _0x7215e1
            ? (this["stop"](),
              (this["currentTrack"]["volume"] = this["_volume"]),
              clearInterval(this["_fadeInterval"]))
            : (this["currentTrack"]["volume"] = _0x7215e1);
        },
        _endedCallback: function () {
          this["_loop"] ? this["play"]() : this["next"]();
        },
      })),
      (ig["Sound"] = ig["Class"]["extend"]({
        path: "",
        volume: 0x1,
        currentClip: null,
        multiChannel: !0x0,
        init: function (_0x2f8c81, _0x51552f) {
          (this["path"] = _0x2f8c81),
            (this["multiChannel"] = !0x1 !== _0x51552f),
            this["load"]();
        },
        load: function (_0x1e94f2) {
          ig["Sound"]["enabled"]
            ? ig["ready"]
              ? ig["soundManager"]["load"](
                  this["path"],
                  this["multiChannel"],
                  _0x1e94f2
                )
              : ig["addResource"](this)
            : _0x1e94f2 && _0x1e94f2(this["path"], !0x0);
        },
        play: function () {
          ig["Sound"]["enabled"] &&
            ((this["currentClip"] = ig["soundManager"]["get"](this["path"])),
            (this["currentClip"]["volume"] =
              ig["soundManager"]["volume"] * this["volume"]),
            this["currentClip"]["play"]());
        },
        stop: function () {
          this["currentClip"] &&
            (this["currentClip"]["pause"](),
            (this["currentClip"]["currentTime"] = 0x0));
        },
      })),
      (ig["Sound"]["FORMAT"] = {
        MP3: { ext: "mp3", mime: "audio/mpeg" },
        M4A: { ext: "m4a", mime: "audio/mp4;\x20codecs=mp4a" },
        OGG: { ext: "ogg", mime: "audio/ogg;\x20codecs=vorbis" },
        WEBM: { ext: "webm", mime: "audio/webm;\x20codecs=vorbis" },
        CAF: { ext: "caf", mime: "audio/x-caf" },
      }),
      (ig["Sound"]["use"] = [
        ig["Sound"]["FORMAT"]["OGG"],
        ig["Sound"]["FORMAT"]["MP3"],
      ]),
      (ig["Sound"]["channels"] = 0x4),
      (ig["Sound"]["enabled"] = !0x0);
  }),
  (ig["baked"] = !0x0),
  ig["module"]("impact.loader")
    ["requires"]("impact.image", "impact.font", "impact.sound")
    ["defines"](function () {
      ig["Loader"] = ig["Class"]["extend"]({
        resources: [],
        gameClass: null,
        status: 0x0,
        done: !0x1,
        _unloaded: [],
        _drawStatus: 0x0,
        _intervalId: 0x0,
        _loadCallbackBound: null,
        init: function (_0x305b5e, _0x21d02f) {
          (this["gameClass"] = _0x305b5e),
            (this["resources"] = _0x21d02f),
            (this["_loadCallbackBound"] = this["_loadCallback"]["bind"](this));
          for (
            var _0x377629 = 0x0;
            _0x377629 < this["resources"]["length"];
            _0x377629++
          )
            this["_unloaded"]["push"](this["resources"][_0x377629]["path"]);
        },
        load: function () {
          ig["system"]["clear"]("#000");
          if (this["resources"]["length"]) {
            for (
              var _0x249ce2 = 0x0;
              _0x249ce2 < this["resources"]["length"];
              _0x249ce2++
            )
              this["loadResource"](this["resources"][_0x249ce2]);
            this["_intervalId"] = setInterval(this["draw"]["bind"](this), 0x10);
          } else this["end"]();
        },
        loadResource: function (_0x1bf4bc) {
          _0x1bf4bc["load"](this["_loadCallbackBound"]);
        },
        end: function () {
          this["done"] ||
            ((this["done"] = !0x0), clearInterval(this["_intervalId"]));
        },
        draw: function () {},
        _loadCallback: function (_0x4622de, _0x14d130) {
          if (_0x14d130) this["_unloaded"]["erase"](_0x4622de);
          else throw "Failed\x20to\x20load\x20resource:\x20" + _0x4622de;
          (this["status"] =
            0x1 - this["_unloaded"]["length"] / this["resources"]["length"]),
            0x0 == this["_unloaded"]["length"] &&
              setTimeout(this["end"]["bind"](this), 0xfa);
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("impact.timer")["defines"](function () {
    (ig["Timer"] = ig["Class"]["extend"]({
      target: 0x0,
      base: 0x0,
      last: 0x0,
      pausedAt: 0x0,
      init: function (_0x1f442c) {
        (this["last"] = this["base"] = ig["Timer"]["time"]),
          (this["target"] = _0x1f442c || 0x0);
      },
      set: function (_0x5a1f73) {
        (this["target"] = _0x5a1f73 || 0x0),
          (this["base"] = ig["Timer"]["time"]),
          (this["pausedAt"] = 0x0);
      },
      reset: function () {
        (this["base"] = ig["Timer"]["time"]), (this["pausedAt"] = 0x0);
      },
      tick: function () {
        var _0x3cd709 = ig["Timer"]["time"] - this["last"];
        return (
          (this["last"] = ig["Timer"]["time"]),
          this["pausedAt"] ? 0x0 : _0x3cd709
        );
      },
      delta: function () {
        return (
          (this["pausedAt"] || ig["Timer"]["time"]) -
          this["base"] -
          this["target"]
        );
      },
      pause: function () {
        this["pausedAt"] || (this["pausedAt"] = ig["Timer"]["time"]);
      },
      unpause: function () {
        this["pausedAt"] &&
          ((this["base"] += ig["Timer"]["time"] - this["pausedAt"]),
          (this["pausedAt"] = 0x0));
      },
    })),
      (ig["Timer"]["_last"] = 0x0),
      (ig["Timer"]["time"] = Number["MIN_VALUE"]),
      (ig["Timer"]["timeScale"] = 0x1),
      (ig["Timer"]["maxStep"] = 0.05),
      (ig["Timer"]["step"] = function () {
        var _0x5da8ef = Date["now"]();
        (ig["Timer"]["time"] +=
          Math["min"](
            (_0x5da8ef - ig["Timer"]["_last"]) / 0x3e8,
            ig["Timer"]["maxStep"]
          ) * ig["Timer"]["timeScale"]),
          (ig["Timer"]["_last"] = _0x5da8ef);
      });
  }),
  (ig["baked"] = !0x0),
  ig["module"]("impact.system")
    ["requires"]("impact.timer", "impact.image")
    ["defines"](function () {
      (ig["System"] = ig["Class"]["extend"]({
        fps: 0x1e,
        width: 0x140,
        height: 0xf0,
        realWidth: 0x140,
        realHeight: 0xf0,
        scale: 0x1,
        tick: 0x0,
        animationId: 0x0,
        newGameClass: null,
        running: !0x1,
        delegate: null,
        clock: null,
        canvas: null,
        context: null,
        init: function (_0x279172, _0x3ccd29, _0x1fd996, _0x47a059, _0x56e12b) {
          (this["fps"] = _0x3ccd29),
            (this["clock"] = new ig["Timer"]()),
            (this["canvas"] = ig["$"](_0x279172)),
            this["resize"](_0x1fd996, _0x47a059, _0x56e12b),
            (this["context"] = this["canvas"]["getContext"]("2d")),
            (this["getDrawPos"] = ig["System"]["drawMode"]),
            0x1 != this["scale"] &&
              (ig["System"]["scaleMode"] = ig["System"]["SCALE"]["CRISP"]),
            ig["System"]["scaleMode"](this["canvas"], this["context"]);
        },
        resize: function (_0x47f434, _0x5bede9, _0x3ead2e) {
          (this["width"] = _0x47f434),
            (this["height"] = _0x5bede9),
            (this["scale"] = _0x3ead2e || this["scale"]),
            (this["realWidth"] = this["width"] * this["scale"]),
            (this["realHeight"] = this["height"] * this["scale"]),
            (this["canvas"]["width"] = this["realWidth"]),
            (this["canvas"]["height"] = this["realHeight"]);
        },
        setGame: function (_0x687063) {
          this["running"]
            ? (this["newGameClass"] = _0x687063)
            : this["setGameNow"](_0x687063);
        },
        setGameNow: function (_0x21e1b9) {
          (ig["game"] = new _0x21e1b9()),
            ig["system"]["setDelegate"](ig["game"]);
        },
        setDelegate: function (_0x386387) {
          if ("function" == typeof _0x386387["run"])
            (this["delegate"] = _0x386387), this["startRunLoop"]();
          else
            throw "System.setDelegate:\x20No\x20run()\x20function\x20in\x20object";
        },
        stopRunLoop: function () {
          ig["clearAnimation"](this["animationId"]), (this["running"] = !0x1);
        },
        startRunLoop: function () {
          this["stopRunLoop"](),
            (this["animationId"] = ig["setAnimation"](
              this["run"]["bind"](this),
              this["canvas"]
            )),
            (this["running"] = !0x0);
        },
        clear: function (_0x280b4c) {
          (this["context"]["fillStyle"] = _0x280b4c),
            this["context"]["fillRect"](
              0x0,
              0x0,
              this["realWidth"],
              this["realHeight"]
            );
        },
        run: function () {
          ig["Timer"]["step"](),
            (this["tick"] = this["clock"]["tick"]()),
            this["delegate"]["run"](),
            ig["input"]["clearPressed"](),
            this["newGameClass"] &&
              (this["setGameNow"](this["newGameClass"]),
              (this["newGameClass"] = null));
        },
        getDrawPos: null,
      })),
        (ig["System"]["DRAW"] = {
          AUTHENTIC: function (_0x2debb9) {
            return Math["round"](_0x2debb9) * this["scale"];
          },
          SMOOTH: function (_0x5bf4ff) {
            return Math["round"](_0x5bf4ff * this["scale"]);
          },
          SUBPIXEL: function (_0x566c96) {
            return _0x566c96 * this["scale"];
          },
        }),
        (ig["System"]["drawMode"] = ig["System"]["DRAW"]["SMOOTH"]),
        (ig["System"]["SCALE"] = {
          CRISP: function (_0x739786, _0x5b9289) {
            ig["setVendorAttribute"](_0x5b9289, "imageSmoothingEnabled", !0x1),
              (_0x739786["style"]["imageRendering"] = "-moz-crisp-edges"),
              (_0x739786["style"]["imageRendering"] = "-o-crisp-edges"),
              (_0x739786["style"]["imageRendering"] =
                "-webkit-optimize-contrast"),
              (_0x739786["style"]["imageRendering"] = "crisp-edges"),
              (_0x739786["style"]["msInterpolationMode"] = "nearest-neighbor");
          },
          SMOOTH: function (_0x4deff0, _0x1d994b) {
            ig["setVendorAttribute"](_0x1d994b, "imageSmoothingEnabled", !0x0),
              (_0x4deff0["style"]["imageRendering"] = ""),
              (_0x4deff0["style"]["msInterpolationMode"] = "");
          },
        }),
        (ig["System"]["scaleMode"] = ig["System"]["SCALE"]["SMOOTH"]);
    }),
  (ig["baked"] = !0x0),
  ig["module"]("impact.input")["defines"](function () {
    (ig["KEY"] = {
      MOUSE1: -0x1,
      MOUSE2: -0x3,
      MWHEEL_UP: -0x4,
      MWHEEL_DOWN: -0x5,
      BACKSPACE: 0x8,
      TAB: 0x9,
      ENTER: 0xd,
      PAUSE: 0x13,
      CAPS: 0x14,
      ESC: 0x1b,
      SPACE: 0x20,
      PAGE_UP: 0x21,
      PAGE_DOWN: 0x22,
      END: 0x23,
      HOME: 0x24,
      LEFT_ARROW: 0x25,
      UP_ARROW: 0x26,
      RIGHT_ARROW: 0x27,
      DOWN_ARROW: 0x28,
      INSERT: 0x2d,
      DELETE: 0x2e,
      _0: 0x30,
      _1: 0x31,
      _2: 0x32,
      _3: 0x33,
      _4: 0x34,
      _5: 0x35,
      _6: 0x36,
      _7: 0x37,
      _8: 0x38,
      _9: 0x39,
      A: 0x41,
      B: 0x42,
      C: 0x43,
      D: 0x44,
      E: 0x45,
      F: 0x46,
      G: 0x47,
      H: 0x48,
      I: 0x49,
      J: 0x4a,
      K: 0x4b,
      L: 0x4c,
      M: 0x4d,
      N: 0x4e,
      O: 0x4f,
      P: 0x50,
      Q: 0x51,
      R: 0x52,
      S: 0x53,
      T: 0x54,
      U: 0x55,
      V: 0x56,
      W: 0x57,
      X: 0x58,
      Y: 0x59,
      Z: 0x5a,
      NUMPAD_0: 0x60,
      NUMPAD_1: 0x61,
      NUMPAD_2: 0x62,
      NUMPAD_3: 0x63,
      NUMPAD_4: 0x64,
      NUMPAD_5: 0x65,
      NUMPAD_6: 0x66,
      NUMPAD_7: 0x67,
      NUMPAD_8: 0x68,
      NUMPAD_9: 0x69,
      MULTIPLY: 0x6a,
      ADD: 0x6b,
      SUBSTRACT: 0x6d,
      DECIMAL: 0x6e,
      DIVIDE: 0x6f,
      F1: 0x70,
      F2: 0x71,
      F3: 0x72,
      F4: 0x73,
      F5: 0x74,
      F6: 0x75,
      F7: 0x76,
      F8: 0x77,
      F9: 0x78,
      F10: 0x79,
      F11: 0x7a,
      F12: 0x7b,
      SHIFT: 0x10,
      CTRL: 0x11,
      ALT: 0x12,
      PLUS: 0xbb,
      COMMA: 0xbc,
      MINUS: 0xbd,
      PERIOD: 0xbe,
    }),
      (ig["Input"] = ig["Class"]["extend"]({
        bindings: {},
        actions: {},
        presses: {},
        locks: {},
        delayedKeyup: {},
        isUsingMouse: !0x1,
        isUsingKeyboard: !0x1,
        isUsingAccelerometer: !0x1,
        mouse: { x: 0x0, y: 0x0 },
        accel: { x: 0x0, y: 0x0, z: 0x0 },
        initMouse: function () {
          if (!this["isUsingMouse"]) {
            this["isUsingMouse"] = !0x0;
            var _0x5dc69e = this["mousewheel"]["bind"](this);
            ig["system"]["canvas"]["addEventListener"](
              "mousewheel",
              _0x5dc69e,
              !0x1
            ),
              ig["system"]["canvas"]["addEventListener"](
                "DOMMouseScroll",
                _0x5dc69e,
                !0x1
              ),
              ig["system"]["canvas"]["addEventListener"](
                "contextmenu",
                this["contextmenu"]["bind"](this),
                !0x1
              ),
              ig["system"]["canvas"]["addEventListener"](
                "mousedown",
                this["keydown"]["bind"](this),
                !0x1
              ),
              ig["system"]["canvas"]["addEventListener"](
                "mouseup",
                this["keyup"]["bind"](this),
                !0x1
              ),
              ig["system"]["canvas"]["addEventListener"](
                "mousemove",
                this["mousemove"]["bind"](this),
                !0x1
              ),
              ig["ua"]["touchDevice"] &&
                (ig["system"]["canvas"]["addEventListener"](
                  "touchstart",
                  this["keydown"]["bind"](this),
                  !0x1
                ),
                ig["system"]["canvas"]["addEventListener"](
                  "touchend",
                  this["keyup"]["bind"](this),
                  !0x1
                ),
                ig["system"]["canvas"]["addEventListener"](
                  "touchmove",
                  this["mousemove"]["bind"](this),
                  !0x1
                ),
                ig["system"]["canvas"]["addEventListener"](
                  "MSPointerDown",
                  this["keydown"]["bind"](this),
                  !0x1
                ),
                ig["system"]["canvas"]["addEventListener"](
                  "MSPointerUp",
                  this["keyup"]["bind"](this),
                  !0x1
                ),
                ig["system"]["canvas"]["addEventListener"](
                  "MSPointerMove",
                  this["mousemove"]["bind"](this),
                  !0x1
                ),
                (ig["system"]["canvas"]["style"]["msTouchAction"] = "none"));
          }
        },
        initKeyboard: function () {
          this["isUsingKeyboard"] ||
            ((this["isUsingKeyboard"] = !0x0),
            window["addEventListener"](
              "keydown",
              this["keydown"]["bind"](this),
              !0x1
            ),
            window["addEventListener"](
              "keyup",
              this["keyup"]["bind"](this),
              !0x1
            ));
        },
        initAccelerometer: function () {
          this["isUsingAccelerometer"] ||
            window["addEventListener"](
              "devicemotion",
              this["devicemotion"]["bind"](this),
              !0x1
            );
        },
        mousewheel: function (_0x4b8866) {
          var _0x54bcb7 =
            this["bindings"][
              0x0 <
              (_0x4b8866["wheelDelta"]
                ? _0x4b8866["wheelDelta"]
                : -0x1 * _0x4b8866["detail"])
                ? ig["KEY"]["MWHEEL_UP"]
                : ig["KEY"]["MWHEEL_DOWN"]
            ];
          _0x54bcb7 &&
            ((this["actions"][_0x54bcb7] = !0x0),
            (this["presses"][_0x54bcb7] = !0x0),
            (this["delayedKeyup"][_0x54bcb7] = !0x0),
            _0x4b8866["stopPropagation"](),
            _0x4b8866["preventDefault"]());
        },
        mousemove: function (_0x2e71f1) {
          var _0x567749 =
            parseInt(ig["system"]["canvas"]["offsetWidth"]) ||
            ig["system"]["realWidth"];
          ig["ua"]["mobile"] && (_0x567749 = ig["system"]["realWidth"]);
          var _0x567749 =
              ig["system"]["scale"] * (_0x567749 / ig["system"]["realWidth"]),
            _0x1af7c1 = { left: 0x0, top: 0x0 };
          ig["system"]["canvas"]["getBoundingClientRect"] &&
            (_0x1af7c1 = ig["system"]["canvas"]["getBoundingClientRect"]()),
            (_0x2e71f1 = _0x2e71f1["touches"]
              ? _0x2e71f1["touches"][0x0]
              : _0x2e71f1),
            (this["mouse"]["x"] =
              (_0x2e71f1["clientX"] - _0x1af7c1["left"]) / _0x567749),
            (this["mouse"]["y"] =
              (_0x2e71f1["clientY"] - _0x1af7c1["top"]) / _0x567749);
        },
        contextmenu: function (_0x4bb9f4) {
          this["bindings"][ig["KEY"]["MOUSE2"]] &&
            (_0x4bb9f4["stopPropagation"](), _0x4bb9f4["preventDefault"]());
        },
        keydown: function (_0x3d9cbe) {
          var _0x5dd79c = _0x3d9cbe["target"]["tagName"];
          if (!("INPUT" == _0x5dd79c || "TEXTAREA" == _0x5dd79c)) {
            if (
              ((_0x5dd79c =
                "keydown" == _0x3d9cbe["type"]
                  ? _0x3d9cbe["keyCode"]
                  : 0x2 == _0x3d9cbe["button"]
                  ? ig["KEY"]["MOUSE2"]
                  : ig["KEY"]["MOUSE1"]),
              ("touchstart" == _0x3d9cbe["type"] ||
                "mousedown" == _0x3d9cbe["type"]) &&
                this["mousemove"](_0x3d9cbe),
              (_0x5dd79c = this["bindings"][_0x5dd79c]))
            )
              (this["actions"][_0x5dd79c] = !0x0),
                this["locks"][_0x5dd79c] ||
                  ((this["presses"][_0x5dd79c] = !0x0),
                  (this["locks"][_0x5dd79c] = !0x0)),
                _0x3d9cbe["stopPropagation"](),
                _0x3d9cbe["preventDefault"]();
          }
        },
        keyup: function (_0x2f18b9) {
          var _0x1e13f8 = _0x2f18b9["target"]["tagName"];
          if (!("INPUT" == _0x1e13f8 || "TEXTAREA" == _0x1e13f8)) {
            if (
              (_0x1e13f8 =
                this["bindings"][
                  "keyup" == _0x2f18b9["type"]
                    ? _0x2f18b9["keyCode"]
                    : 0x2 == _0x2f18b9["button"]
                    ? ig["KEY"]["MOUSE2"]
                    : ig["KEY"]["MOUSE1"]
                ])
            )
              (this["delayedKeyup"][_0x1e13f8] = !0x0),
                _0x2f18b9["stopPropagation"](),
                _0x2f18b9["preventDefault"]();
          }
        },
        devicemotion: function (_0x45c745) {
          this["accel"] = _0x45c745["accelerationIncludingGravity"];
        },
        bind: function (_0x58896c, _0x4a73a5) {
          0x0 > _0x58896c
            ? this["initMouse"]()
            : 0x0 < _0x58896c && this["initKeyboard"](),
            (this["bindings"][_0x58896c] = _0x4a73a5);
        },
        bindTouch: function (_0x57b043, _0x26bbba) {
          var _0x50bc0c = ig["$"](_0x57b043),
            _0x2589dd = this;
          _0x50bc0c["addEventListener"](
            "touchstart",
            function (_0x5392e9) {
              _0x2589dd["touchStart"](_0x5392e9, _0x26bbba);
            },
            !0x1
          ),
            _0x50bc0c["addEventListener"](
              "touchend",
              function (_0x181d24) {
                _0x2589dd["touchEnd"](_0x181d24, _0x26bbba);
              },
              !0x1
            ),
            _0x50bc0c["addEventListener"](
              "MSPointerDown",
              function (_0x9ce487) {
                _0x2589dd["touchStart"](_0x9ce487, _0x26bbba);
              },
              !0x1
            ),
            _0x50bc0c["addEventListener"](
              "MSPointerUp",
              function (_0x5af20f) {
                _0x2589dd["touchEnd"](_0x5af20f, _0x26bbba);
              },
              !0x1
            );
        },
        unbind: function (_0x45433d) {
          (this["delayedKeyup"][this["bindings"][_0x45433d]] = !0x0),
            (this["bindings"][_0x45433d] = null);
        },
        unbindAll: function () {
          (this["bindings"] = {}),
            (this["actions"] = {}),
            (this["presses"] = {}),
            (this["locks"] = {}),
            (this["delayedKeyup"] = {});
        },
        state: function (_0x3a1196) {
          return this["actions"][_0x3a1196];
        },
        pressed: function (_0x1d2802) {
          return this["presses"][_0x1d2802];
        },
        released: function (_0x497e44) {
          return !!this["delayedKeyup"][_0x497e44];
        },
        clearPressed: function () {
          for (var _0x5ac107 in this["delayedKeyup"])
            (this["actions"][_0x5ac107] = !0x1),
              (this["locks"][_0x5ac107] = !0x1);
          (this["delayedKeyup"] = {}), (this["presses"] = {});
        },
        touchStart: function (_0x1a3c49, _0x55fd7f) {
          return (
            (this["actions"][_0x55fd7f] = !0x0),
            (this["presses"][_0x55fd7f] = !0x0),
            _0x1a3c49["stopPropagation"](),
            _0x1a3c49["preventDefault"](),
            !0x1
          );
        },
        touchEnd: function (_0x2c967e, _0x33570a) {
          return (
            (this["delayedKeyup"][_0x33570a] = !0x0),
            _0x2c967e["stopPropagation"](),
            _0x2c967e["preventDefault"](),
            !0x1
          );
        },
      }));
  }),
  (ig["baked"] = !0x0),
  ig["module"]("impact.impact")
    ["requires"](
      "dom.ready",
      "impact.loader",
      "impact.system",
      "impact.input",
      "impact.sound"
    )
    ["defines"](function () {
      ig["main"] = function (
        _0x454762,
        _0x7c8185,
        _0xb2d99c,
        _0x56a70c,
        _0x5e4e77,
        _0x280c25,
        _0x329095
      ) {
        (ig["system"] = new ig["System"](
          _0x454762,
          _0xb2d99c,
          _0x56a70c,
          _0x5e4e77,
          _0x280c25 || 0x1
        )),
          (ig["input"] = new ig["Input"]()),
          (ig["soundManager"] = new ig["SoundManager"]()),
          (ig["music"] = new ig["Music"]()),
          (ig["ready"] = !0x0),
          new (_0x329095 || ig["Loader"])(_0x7c8185, ig["resources"])["load"]();
      };
    }),
  (ig["baked"] = !0x0),
  ig["module"]("impact.animation")
    ["requires"]("impact.timer", "impact.image")
    ["defines"](function () {
      (ig["AnimationSheet"] = ig["Class"]["extend"]({
        width: 0x8,
        height: 0x8,
        image: null,
        init: function (_0x303c80, _0x1820a9, _0x297daf) {
          (this["width"] = _0x1820a9),
            (this["height"] = _0x297daf),
            (this["image"] = new ig["Image"](_0x303c80));
        },
      })),
        (ig["Animation"] = ig["Class"]["extend"]({
          sheet: null,
          timer: null,
          sequence: [],
          flip: { x: !0x1, y: !0x1 },
          pivot: { x: 0x0, y: 0x0 },
          frame: 0x0,
          tile: 0x0,
          loopCount: 0x0,
          alpha: 0x1,
          angle: 0x0,
          init: function (_0x3537d5, _0x3fe665, _0x2f6c73, _0x5c3ff8) {
            (this["sheet"] = _0x3537d5),
              (this["pivot"] = {
                x: _0x3537d5["width"] / 0x2,
                y: _0x3537d5["height"] / 0x2,
              }),
              (this["timer"] = new ig["Timer"]()),
              (this["frameTime"] = _0x3fe665),
              (this["sequence"] = _0x2f6c73),
              (this["stop"] = !!_0x5c3ff8),
              (this["tile"] = this["sequence"][0x0]);
          },
          rewind: function () {
            return (
              this["timer"]["set"](),
              (this["frame"] = this["loopCount"] = 0x0),
              (this["tile"] = this["sequence"][0x0]),
              this
            );
          },
          gotoFrame: function (_0x180227) {
            this["timer"]["set"](this["frameTime"] * -_0x180227 - 0.0001),
              this["update"]();
          },
          gotoRandomFrame: function () {
            this["gotoFrame"](
              Math["floor"](Math["random"]() * this["sequence"]["length"])
            );
          },
          update: function () {
            var _0x4eeeb5 = Math["floor"](
              this["timer"]["delta"]() / this["frameTime"]
            );
            (this["loopCount"] = Math["floor"](
              _0x4eeeb5 / this["sequence"]["length"]
            )),
              (this["frame"] =
                this["stop"] && 0x0 < this["loopCount"]
                  ? this["sequence"]["length"] - 0x1
                  : _0x4eeeb5 % this["sequence"]["length"]),
              (this["tile"] = this["sequence"][this["frame"]]);
          },
          draw: function (_0x5987e6, _0x53a7be) {
            var _0x5a7941 = Math["max"](
              this["sheet"]["width"],
              this["sheet"]["height"]
            );
            _0x5987e6 > ig["system"]["width"] ||
              _0x53a7be > ig["system"]["height"] ||
              0x0 > _0x5987e6 + _0x5a7941 ||
              0x0 > _0x53a7be + _0x5a7941 ||
              (0x1 != this["alpha"] &&
                (ig["system"]["context"]["globalAlpha"] = this["alpha"]),
              0x0 == this["angle"]
                ? this["sheet"]["image"]["drawTile"](
                    _0x5987e6,
                    _0x53a7be,
                    this["tile"],
                    this["sheet"]["width"],
                    this["sheet"]["height"],
                    this["flip"]["x"],
                    this["flip"]["y"]
                  )
                : (ig["system"]["context"]["save"](),
                  ig["system"]["context"]["translate"](
                    ig["system"]["getDrawPos"](_0x5987e6 + this["pivot"]["x"]),
                    ig["system"]["getDrawPos"](_0x53a7be + this["pivot"]["y"])
                  ),
                  ig["system"]["context"]["rotate"](this["angle"]),
                  this["sheet"]["image"]["drawTile"](
                    -this["pivot"]["x"],
                    -this["pivot"]["y"],
                    this["tile"],
                    this["sheet"]["width"],
                    this["sheet"]["height"],
                    this["flip"]["x"],
                    this["flip"]["y"]
                  ),
                  ig["system"]["context"]["restore"]()),
              0x1 != this["alpha"] &&
                (ig["system"]["context"]["globalAlpha"] = 0x1));
          },
        }));
    }),
  (ig["baked"] = !0x0),
  ig["module"]("impact.entity")
    ["requires"]("impact.animation", "impact.impact")
    ["defines"](function () {
      (ig["Entity"] = ig["Class"]["extend"]({
        id: 0x0,
        settings: {},
        size: { x: 0x10, y: 0x10 },
        offset: { x: 0x0, y: 0x0 },
        pos: { x: 0x0, y: 0x0 },
        last: { x: 0x0, y: 0x0 },
        vel: { x: 0x0, y: 0x0 },
        accel: { x: 0x0, y: 0x0 },
        friction: { x: 0x0, y: 0x0 },
        maxVel: { x: 0x64, y: 0x64 },
        zIndex: 0x0,
        gravityFactor: 0x1,
        standing: !0x1,
        bounciness: 0x0,
        minBounceVelocity: 0x28,
        anims: {},
        animSheet: null,
        currentAnim: null,
        health: 0xa,
        type: 0x0,
        checkAgainst: 0x0,
        collides: 0x0,
        _killed: !0x1,
        slopeStanding: { min: (0x2c)["toRad"](), max: (0x88)["toRad"]() },
        init: function (_0x545e92, _0x568ac2, _0x2b9607) {
          (this["id"] = ++ig["Entity"]["_lastId"]),
            (this["pos"]["x"] = this["last"]["x"] = _0x545e92),
            (this["pos"]["y"] = this["last"]["y"] = _0x568ac2),
            ig["merge"](this, _0x2b9607);
        },
        reset: function (_0x2371de, _0x5bfe73, _0x5cdefa) {
          var _0x363d04 = this["constructor"]["prototype"];
          (this["pos"]["x"] = _0x2371de),
            (this["pos"]["y"] = _0x5bfe73),
            (this["last"]["x"] = _0x2371de),
            (this["last"]["y"] = _0x5bfe73),
            (this["vel"]["x"] = _0x363d04["vel"]["x"]),
            (this["vel"]["y"] = _0x363d04["vel"]["y"]),
            (this["accel"]["x"] = _0x363d04["accel"]["x"]),
            (this["accel"]["y"] = _0x363d04["accel"]["y"]),
            (this["health"] = _0x363d04["health"]),
            (this["_killed"] = _0x363d04["_killed"]),
            (this["standing"] = _0x363d04["standing"]),
            (this["type"] = _0x363d04["type"]),
            (this["checkAgainst"] = _0x363d04["checkAgainst"]),
            (this["collides"] = _0x363d04["collides"]),
            ig["merge"](this, _0x5cdefa);
        },
        addAnim: function (_0x3589b0, _0x281c21, _0x2901bf, _0x12d6fe) {
          if (!this["animSheet"])
            throw (
              "No\x20animSheet\x20to\x20add\x20the\x20animation\x20" +
              _0x3589b0 +
              "\x20to."
            );
          return (
            (_0x281c21 = new ig["Animation"](
              this["animSheet"],
              _0x281c21,
              _0x2901bf,
              _0x12d6fe
            )),
            (this["anims"][_0x3589b0] = _0x281c21),
            this["currentAnim"] || (this["currentAnim"] = _0x281c21),
            _0x281c21
          );
        },
        update: function () {
          (this["last"]["x"] = this["pos"]["x"]),
            (this["last"]["y"] = this["pos"]["y"]),
            (this["vel"]["y"] +=
              ig["game"]["gravity"] *
              ig["system"]["tick"] *
              this["gravityFactor"]),
            (this["vel"]["x"] = this["getNewVelocity"](
              this["vel"]["x"],
              this["accel"]["x"],
              this["friction"]["x"],
              this["maxVel"]["x"]
            )),
            (this["vel"]["y"] = this["getNewVelocity"](
              this["vel"]["y"],
              this["accel"]["y"],
              this["friction"]["y"],
              this["maxVel"]["y"]
            ));
          var _0x43bb83 = ig["game"]["collisionMap"]["trace"](
            this["pos"]["x"],
            this["pos"]["y"],
            this["vel"]["x"] * ig["system"]["tick"],
            this["vel"]["y"] * ig["system"]["tick"],
            this["size"]["x"],
            this["size"]["y"]
          );
          this["handleMovementTrace"](_0x43bb83),
            this["currentAnim"] && this["currentAnim"]["update"]();
        },
        getNewVelocity: function (_0x8c441, _0x32c907, _0x49b726, _0x43a75b) {
          return _0x32c907
            ? (_0x8c441 + _0x32c907 * ig["system"]["tick"])["limit"](
                -_0x43a75b,
                _0x43a75b
              )
            : _0x49b726
            ? ((_0x32c907 = _0x49b726 * ig["system"]["tick"]),
              0x0 < _0x8c441 - _0x32c907
                ? _0x8c441 - _0x32c907
                : 0x0 > _0x8c441 + _0x32c907
                ? _0x8c441 + _0x32c907
                : 0x0)
            : _0x8c441["limit"](-_0x43a75b, _0x43a75b);
        },
        handleMovementTrace: function (_0x448371) {
          (this["standing"] = !0x1),
            _0x448371["collision"]["y"] &&
              (0x0 < this["bounciness"] &&
              Math["abs"](this["vel"]["y"]) > this["minBounceVelocity"]
                ? (this["vel"]["y"] *= -this["bounciness"])
                : (0x0 < this["vel"]["y"] && (this["standing"] = !0x0),
                  (this["vel"]["y"] = 0x0))),
            _0x448371["collision"]["x"] &&
              (this["vel"]["x"] =
                0x0 < this["bounciness"] &&
                Math["abs"](this["vel"]["x"]) > this["minBounceVelocity"]
                  ? this["vel"]["x"] * -this["bounciness"]
                  : 0x0);
          if (_0x448371["collision"]["slope"]) {
            var _0xc40437 = _0x448371["collision"]["slope"];
            if (0x0 < this["bounciness"]) {
              var _0x42556a =
                this["vel"]["x"] * _0xc40437["nx"] +
                this["vel"]["y"] * _0xc40437["ny"];
              (this["vel"]["x"] =
                (this["vel"]["x"] - 0x2 * _0xc40437["nx"] * _0x42556a) *
                this["bounciness"]),
                (this["vel"]["y"] =
                  (this["vel"]["y"] - 0x2 * _0xc40437["ny"] * _0x42556a) *
                  this["bounciness"]);
            } else
              (_0x42556a =
                (this["vel"]["x"] * _0xc40437["x"] +
                  this["vel"]["y"] * _0xc40437["y"]) /
                (_0xc40437["x"] * _0xc40437["x"] +
                  _0xc40437["y"] * _0xc40437["y"])),
                (this["vel"]["x"] = _0xc40437["x"] * _0x42556a),
                (this["vel"]["y"] = _0xc40437["y"] * _0x42556a),
                (_0xc40437 = Math["atan2"](_0xc40437["x"], _0xc40437["y"])),
                _0xc40437 > this["slopeStanding"]["min"] &&
                  _0xc40437 < this["slopeStanding"]["max"] &&
                  (this["standing"] = !0x0);
          }
          this["pos"] = _0x448371["pos"];
        },
        draw: function () {
          this["currentAnim"] &&
            this["currentAnim"]["draw"](
              this["pos"]["x"] -
                this["offset"]["x"] -
                ig["game"]["_rscreen"]["x"],
              this["pos"]["y"] -
                this["offset"]["y"] -
                ig["game"]["_rscreen"]["y"]
            );
        },
        kill: function () {
          ig["game"]["removeEntity"](this);
        },
        receiveDamage: function (_0x372c07) {
          (this["health"] -= _0x372c07),
            0x0 >= this["health"] && this["kill"]();
        },
        touches: function (_0x3ee9d8) {
          return !(
            this["pos"]["x"] >=
              _0x3ee9d8["pos"]["x"] + _0x3ee9d8["size"]["x"] ||
            this["pos"]["x"] + this["size"]["x"] <= _0x3ee9d8["pos"]["x"] ||
            this["pos"]["y"] >=
              _0x3ee9d8["pos"]["y"] + _0x3ee9d8["size"]["y"] ||
            this["pos"]["y"] + this["size"]["y"] <= _0x3ee9d8["pos"]["y"]
          );
        },
        distanceTo: function (_0x94bc4b) {
          var _0x17d2bc =
            this["pos"]["x"] +
            this["size"]["x"] / 0x2 -
            (_0x94bc4b["pos"]["x"] + _0x94bc4b["size"]["x"] / 0x2);
          return (
            (_0x94bc4b =
              this["pos"]["y"] +
              this["size"]["y"] / 0x2 -
              (_0x94bc4b["pos"]["y"] + _0x94bc4b["size"]["y"] / 0x2)),
            Math["sqrt"](_0x17d2bc * _0x17d2bc + _0x94bc4b * _0x94bc4b)
          );
        },
        angleTo: function (_0x1bf2f0) {
          return Math["atan2"](
            _0x1bf2f0["pos"]["y"] +
              _0x1bf2f0["size"]["y"] / 0x2 -
              (this["pos"]["y"] + this["size"]["y"] / 0x2),
            _0x1bf2f0["pos"]["x"] +
              _0x1bf2f0["size"]["x"] / 0x2 -
              (this["pos"]["x"] + this["size"]["x"] / 0x2)
          );
        },
        check: function () {},
        collideWith: function () {},
        ready: function () {},
        erase: function () {},
      })),
        (ig["Entity"]["_lastId"] = 0x0),
        (ig["Entity"]["COLLIDES"] = {
          NEVER: 0x0,
          LITE: 0x1,
          PASSIVE: 0x2,
          ACTIVE: 0x4,
          FIXED: 0x8,
        }),
        (ig["Entity"]["TYPE"] = { NONE: 0x0, A: 0x1, B: 0x2, BOTH: 0x3 }),
        (ig["Entity"]["checkPair"] = function (_0x52f6f6, _0x26ddfc) {
          _0x52f6f6["checkAgainst"] & _0x26ddfc["type"] &&
            _0x52f6f6["check"](_0x26ddfc),
            _0x26ddfc["checkAgainst"] & _0x52f6f6["type"] &&
              _0x26ddfc["check"](_0x52f6f6),
            _0x52f6f6["collides"] &&
              _0x26ddfc["collides"] &&
              _0x52f6f6["collides"] + _0x26ddfc["collides"] >
                ig["Entity"]["COLLIDES"]["ACTIVE"] &&
              ig["Entity"]["solveCollision"](_0x52f6f6, _0x26ddfc);
        }),
        (ig["Entity"]["solveCollision"] = function (_0x543e23, _0x1db73f) {
          var _0x51ac82 = null;
          if (
            _0x543e23["collides"] == ig["Entity"]["COLLIDES"]["LITE"] ||
            _0x1db73f["collides"] == ig["Entity"]["COLLIDES"]["FIXED"]
          )
            _0x51ac82 = _0x543e23;
          else {
            if (
              _0x1db73f["collides"] == ig["Entity"]["COLLIDES"]["LITE"] ||
              _0x543e23["collides"] == ig["Entity"]["COLLIDES"]["FIXED"]
            )
              _0x51ac82 = _0x1db73f;
          }
          _0x543e23["last"]["x"] + _0x543e23["size"]["x"] >
            _0x1db73f["last"]["x"] &&
          _0x543e23["last"]["x"] <
            _0x1db73f["last"]["x"] + _0x1db73f["size"]["x"]
            ? (_0x543e23["last"]["y"] < _0x1db73f["last"]["y"]
                ? ig["Entity"]["seperateOnYAxis"](
                    _0x543e23,
                    _0x1db73f,
                    _0x51ac82
                  )
                : ig["Entity"]["seperateOnYAxis"](
                    _0x1db73f,
                    _0x543e23,
                    _0x51ac82
                  ),
              _0x543e23["collideWith"](_0x1db73f, "y"),
              _0x1db73f["collideWith"](_0x543e23, "y"))
            : _0x543e23["last"]["y"] + _0x543e23["size"]["y"] >
                _0x1db73f["last"]["y"] &&
              _0x543e23["last"]["y"] <
                _0x1db73f["last"]["y"] + _0x1db73f["size"]["y"] &&
              (_0x543e23["last"]["x"] < _0x1db73f["last"]["x"]
                ? ig["Entity"]["seperateOnXAxis"](
                    _0x543e23,
                    _0x1db73f,
                    _0x51ac82
                  )
                : ig["Entity"]["seperateOnXAxis"](
                    _0x1db73f,
                    _0x543e23,
                    _0x51ac82
                  ),
              _0x543e23["collideWith"](_0x1db73f, "x"),
              _0x1db73f["collideWith"](_0x543e23, "x"));
        }),
        (ig["Entity"]["seperateOnXAxis"] = function (
          _0x174d7b,
          _0xec799,
          _0x75ee3
        ) {
          var _0x41c86b =
            _0x174d7b["pos"]["x"] +
            _0x174d7b["size"]["x"] -
            _0xec799["pos"]["x"];
          _0x75ee3
            ? ((_0x75ee3["vel"]["x"] =
                -_0x75ee3["vel"]["x"] * _0x75ee3["bounciness"] +
                (_0x174d7b === _0x75ee3 ? _0xec799 : _0x174d7b)["vel"]["x"]),
              (_0xec799 = ig["game"]["collisionMap"]["trace"](
                _0x75ee3["pos"]["x"],
                _0x75ee3["pos"]["y"],
                _0x75ee3 == _0x174d7b ? -_0x41c86b : _0x41c86b,
                0x0,
                _0x75ee3["size"]["x"],
                _0x75ee3["size"]["y"]
              )),
              (_0x75ee3["pos"]["x"] = _0xec799["pos"]["x"]))
            : ((_0x75ee3 =
                (_0x174d7b["vel"]["x"] - _0xec799["vel"]["x"]) / 0x2),
              (_0x174d7b["vel"]["x"] = -_0x75ee3),
              (_0xec799["vel"]["x"] = _0x75ee3),
              (_0x75ee3 = ig["game"]["collisionMap"]["trace"](
                _0x174d7b["pos"]["x"],
                _0x174d7b["pos"]["y"],
                -_0x41c86b / 0x2,
                0x0,
                _0x174d7b["size"]["x"],
                _0x174d7b["size"]["y"]
              )),
              (_0x174d7b["pos"]["x"] = Math["floor"](_0x75ee3["pos"]["x"])),
              (_0x174d7b = ig["game"]["collisionMap"]["trace"](
                _0xec799["pos"]["x"],
                _0xec799["pos"]["y"],
                _0x41c86b / 0x2,
                0x0,
                _0xec799["size"]["x"],
                _0xec799["size"]["y"]
              )),
              (_0xec799["pos"]["x"] = Math["ceil"](_0x174d7b["pos"]["x"])));
        }),
        (ig["Entity"]["seperateOnYAxis"] = function (
          _0x21c7fb,
          _0x2fb1c8,
          _0x560383
        ) {
          var _0xebe81a =
            _0x21c7fb["pos"]["y"] +
            _0x21c7fb["size"]["y"] -
            _0x2fb1c8["pos"]["y"];
          if (_0x560383) {
            (_0x2fb1c8 = _0x21c7fb === _0x560383 ? _0x2fb1c8 : _0x21c7fb),
              (_0x560383["vel"]["y"] =
                -_0x560383["vel"]["y"] * _0x560383["bounciness"] +
                _0x2fb1c8["vel"]["y"]);
            var _0x453615 = 0x0;
            _0x560383 == _0x21c7fb &&
              Math["abs"](_0x560383["vel"]["y"] - _0x2fb1c8["vel"]["y"]) <
                _0x560383["minBounceVelocity"] &&
              ((_0x560383["standing"] = !0x0),
              (_0x453615 = _0x2fb1c8["vel"]["x"] * ig["system"]["tick"])),
              (_0x21c7fb = ig["game"]["collisionMap"]["trace"](
                _0x560383["pos"]["x"],
                _0x560383["pos"]["y"],
                _0x453615,
                _0x560383 == _0x21c7fb ? -_0xebe81a : _0xebe81a,
                _0x560383["size"]["x"],
                _0x560383["size"]["y"]
              )),
              (_0x560383["pos"]["y"] = _0x21c7fb["pos"]["y"]),
              (_0x560383["pos"]["x"] = _0x21c7fb["pos"]["x"]);
          } else
            ig["game"]["gravity"] &&
            (_0x2fb1c8["standing"] || 0x0 < _0x21c7fb["vel"]["y"])
              ? ((_0x560383 = ig["game"]["collisionMap"]["trace"](
                  _0x21c7fb["pos"]["x"],
                  _0x21c7fb["pos"]["y"],
                  0x0,
                  -(
                    _0x21c7fb["pos"]["y"] +
                    _0x21c7fb["size"]["y"] -
                    _0x2fb1c8["pos"]["y"]
                  ),
                  _0x21c7fb["size"]["x"],
                  _0x21c7fb["size"]["y"]
                )),
                (_0x21c7fb["pos"]["y"] = _0x560383["pos"]["y"]),
                0x0 < _0x21c7fb["bounciness"] &&
                _0x21c7fb["vel"]["y"] > _0x21c7fb["minBounceVelocity"]
                  ? (_0x21c7fb["vel"]["y"] *= -_0x21c7fb["bounciness"])
                  : ((_0x21c7fb["standing"] = !0x0),
                    (_0x21c7fb["vel"]["y"] = 0x0)))
              : ((_0x560383 =
                  (_0x21c7fb["vel"]["y"] - _0x2fb1c8["vel"]["y"]) / 0x2),
                (_0x21c7fb["vel"]["y"] = -_0x560383),
                (_0x2fb1c8["vel"]["y"] = _0x560383),
                (_0x453615 = _0x2fb1c8["vel"]["x"] * ig["system"]["tick"]),
                (_0x560383 = ig["game"]["collisionMap"]["trace"](
                  _0x21c7fb["pos"]["x"],
                  _0x21c7fb["pos"]["y"],
                  _0x453615,
                  -_0xebe81a / 0x2,
                  _0x21c7fb["size"]["x"],
                  _0x21c7fb["size"]["y"]
                )),
                (_0x21c7fb["pos"]["y"] = _0x560383["pos"]["y"]),
                (_0x21c7fb = ig["game"]["collisionMap"]["trace"](
                  _0x2fb1c8["pos"]["x"],
                  _0x2fb1c8["pos"]["y"],
                  0x0,
                  _0xebe81a / 0x2,
                  _0x2fb1c8["size"]["x"],
                  _0x2fb1c8["size"]["y"]
                )),
                (_0x2fb1c8["pos"]["y"] = _0x21c7fb["pos"]["y"]));
        });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("impact.map")["defines"](function () {
    ig["Map"] = ig["Class"]["extend"]({
      tilesize: 0x8,
      width: 0x1,
      height: 0x1,
      data: [[]],
      name: null,
      init: function (_0x494207, _0x2fff26) {
        (this["tilesize"] = _0x494207),
          (this["data"] = _0x2fff26),
          (this["height"] = _0x2fff26["length"]),
          (this["width"] = _0x2fff26[0x0]["length"]),
          (this["pxWidth"] = this["width"] * this["tilesize"]),
          (this["pxHeight"] = this["height"] * this["tilesize"]);
      },
      getTile: function (_0x135a5b, _0x2a9352) {
        var _0x312ca6 = Math["floor"](_0x135a5b / this["tilesize"]),
          _0x30dddd = Math["floor"](_0x2a9352 / this["tilesize"]);
        return 0x0 <= _0x312ca6 &&
          _0x312ca6 < this["width"] &&
          0x0 <= _0x30dddd &&
          _0x30dddd < this["height"]
          ? this["data"][_0x30dddd][_0x312ca6]
          : 0x0;
      },
      setTile: function (_0x2f95c4, _0x25229b, _0x138917) {
        (_0x2f95c4 = Math["floor"](_0x2f95c4 / this["tilesize"])),
          (_0x25229b = Math["floor"](_0x25229b / this["tilesize"])),
          0x0 <= _0x2f95c4 &&
            _0x2f95c4 < this["width"] &&
            0x0 <= _0x25229b &&
            _0x25229b < this["height"] &&
            (this["data"][_0x25229b][_0x2f95c4] = _0x138917);
      },
    });
  }),
  (ig["baked"] = !0x0),
  ig["module"]("impact.collision-map")
    ["requires"]("impact.map")
    ["defines"](function () {
      ig["CollisionMap"] = ig["Map"]["extend"]({
        lastSlope: 0x1,
        tiledef: null,
        init: function (_0x1c75ad, _0x225bd0, _0x46e924) {
          this["parent"](_0x1c75ad, _0x225bd0),
            (this["tiledef"] =
              _0x46e924 || ig["CollisionMap"]["defaultTileDef"]);
          for (var _0x38b9c7 in this["tiledef"])
            _0x38b9c7 | (0x0 > this["lastSlope"]) &&
              (this["lastSlope"] = _0x38b9c7 | 0x0);
        },
        trace: function (
          _0x2dcead,
          _0x4cee27,
          _0xfed321,
          _0xfb2a31,
          _0x3d2ed8,
          _0x3b8991
        ) {
          var _0x4e53f8 = {
              collision: { x: !0x1, y: !0x1, slope: !0x1 },
              pos: { x: _0x2dcead, y: _0x4cee27 },
              tile: { x: 0x0, y: 0x0 },
            },
            _0x1b8092 = Math["ceil"](
              Math["max"](Math["abs"](_0xfed321), Math["abs"](_0xfb2a31)) /
                this["tilesize"]
            );
          if (0x1 < _0x1b8092) {
            for (
              var _0x409862 = _0xfed321 / _0x1b8092,
                _0x46e14c = _0xfb2a31 / _0x1b8092,
                _0x17a38a = 0x0;
              _0x17a38a < _0x1b8092 &&
              (_0x409862 || _0x46e14c) &&
              !(this["_traceStep"](
                _0x4e53f8,
                _0x2dcead,
                _0x4cee27,
                _0x409862,
                _0x46e14c,
                _0x3d2ed8,
                _0x3b8991,
                _0xfed321,
                _0xfb2a31,
                _0x17a38a
              ),
              (_0x2dcead = _0x4e53f8["pos"]["x"]),
              (_0x4cee27 = _0x4e53f8["pos"]["y"]),
              _0x4e53f8["collision"]["x"] && (_0xfed321 = _0x409862 = 0x0),
              _0x4e53f8["collision"]["y"] && (_0xfb2a31 = _0x46e14c = 0x0),
              _0x4e53f8["collision"]["slope"]);
              _0x17a38a++
            );
          } else
            this["_traceStep"](
              _0x4e53f8,
              _0x2dcead,
              _0x4cee27,
              _0xfed321,
              _0xfb2a31,
              _0x3d2ed8,
              _0x3b8991,
              _0xfed321,
              _0xfb2a31,
              0x0
            );
          return _0x4e53f8;
        },
        _traceStep: function (
          _0x4d8ddc,
          _0x60fdd1,
          _0x2dc58c,
          _0x55db3e,
          _0x1314d4,
          _0x355bf7,
          _0x2cae55,
          _0x48c27f,
          _0x337c94,
          _0x57523b
        ) {
          (_0x4d8ddc["pos"]["x"] += _0x55db3e),
            (_0x4d8ddc["pos"]["y"] += _0x1314d4);
          var _0x220187 = 0x0;
          if (_0x55db3e) {
            var _0x1aaa67 = 0x0 < _0x55db3e ? _0x355bf7 : 0x0,
              _0x33ef12 = 0x0 > _0x55db3e ? this["tilesize"] : 0x0,
              _0x220187 = Math["max"](
                Math["floor"](_0x2dc58c / this["tilesize"]),
                0x0
              ),
              _0x13d905 = Math["min"](
                Math["ceil"]((_0x2dc58c + _0x2cae55) / this["tilesize"]),
                this["height"]
              );
            _0x55db3e = Math["floor"](
              (_0x4d8ddc["pos"]["x"] + _0x1aaa67) / this["tilesize"]
            );
            var _0x1b6569 = Math["floor"](
              (_0x60fdd1 + _0x1aaa67) / this["tilesize"]
            );
            if (
              0x0 < _0x57523b ||
              _0x55db3e == _0x1b6569 ||
              0x0 > _0x1b6569 ||
              _0x1b6569 >= this["width"]
            )
              _0x1b6569 = -0x1;
            if (0x0 <= _0x55db3e && _0x55db3e < this["width"]) {
              for (
                var _0x39d21a = _0x220187;
                _0x39d21a < _0x13d905 &&
                !(
                  -0x1 != _0x1b6569 &&
                  ((_0x220187 = this["data"][_0x39d21a][_0x1b6569]),
                  0x1 < _0x220187 &&
                    _0x220187 <= this["lastSlope"] &&
                    this["_checkTileDef"](
                      _0x4d8ddc,
                      _0x220187,
                      _0x60fdd1,
                      _0x2dc58c,
                      _0x48c27f,
                      _0x337c94,
                      _0x355bf7,
                      _0x2cae55,
                      _0x1b6569,
                      _0x39d21a
                    ))
                );
                _0x39d21a++
              )
                if (
                  ((_0x220187 = this["data"][_0x39d21a][_0x55db3e]),
                  0x1 == _0x220187 ||
                    _0x220187 > this["lastSlope"] ||
                    (0x1 < _0x220187 &&
                      this["_checkTileDef"](
                        _0x4d8ddc,
                        _0x220187,
                        _0x60fdd1,
                        _0x2dc58c,
                        _0x48c27f,
                        _0x337c94,
                        _0x355bf7,
                        _0x2cae55,
                        _0x55db3e,
                        _0x39d21a
                      )))
                ) {
                  if (
                    0x1 < _0x220187 &&
                    _0x220187 <= this["lastSlope"] &&
                    _0x4d8ddc["collision"]["slope"]
                  )
                    break;
                  (_0x4d8ddc["collision"]["x"] = !0x0),
                    (_0x4d8ddc["tile"]["x"] = _0x220187),
                    (_0x60fdd1 = _0x4d8ddc["pos"]["x"] =
                      _0x55db3e * this["tilesize"] - _0x1aaa67 + _0x33ef12),
                    (_0x48c27f = 0x0);
                  break;
                }
            }
          }
          if (_0x1314d4) {
            (_0x1aaa67 = 0x0 < _0x1314d4 ? _0x2cae55 : 0x0),
              (_0x1314d4 = 0x0 > _0x1314d4 ? this["tilesize"] : 0x0),
              (_0x220187 = Math["max"](
                Math["floor"](_0x4d8ddc["pos"]["x"] / this["tilesize"]),
                0x0
              )),
              (_0x33ef12 = Math["min"](
                Math["ceil"](
                  (_0x4d8ddc["pos"]["x"] + _0x355bf7) / this["tilesize"]
                ),
                this["width"]
              )),
              (_0x39d21a = Math["floor"](
                (_0x4d8ddc["pos"]["y"] + _0x1aaa67) / this["tilesize"]
              )),
              (_0x13d905 = Math["floor"](
                (_0x2dc58c + _0x1aaa67) / this["tilesize"]
              ));
            if (
              0x0 < _0x57523b ||
              _0x39d21a == _0x13d905 ||
              0x0 > _0x13d905 ||
              _0x13d905 >= this["height"]
            )
              _0x13d905 = -0x1;
            if (0x0 <= _0x39d21a && _0x39d21a < this["height"]) {
              for (
                _0x55db3e = _0x220187;
                _0x55db3e < _0x33ef12 &&
                !(
                  -0x1 != _0x13d905 &&
                  ((_0x220187 = this["data"][_0x13d905][_0x55db3e]),
                  0x1 < _0x220187 &&
                    _0x220187 <= this["lastSlope"] &&
                    this["_checkTileDef"](
                      _0x4d8ddc,
                      _0x220187,
                      _0x60fdd1,
                      _0x2dc58c,
                      _0x48c27f,
                      _0x337c94,
                      _0x355bf7,
                      _0x2cae55,
                      _0x55db3e,
                      _0x13d905
                    ))
                );
                _0x55db3e++
              )
                if (
                  ((_0x220187 = this["data"][_0x39d21a][_0x55db3e]),
                  0x1 == _0x220187 ||
                    _0x220187 > this["lastSlope"] ||
                    (0x1 < _0x220187 &&
                      this["_checkTileDef"](
                        _0x4d8ddc,
                        _0x220187,
                        _0x60fdd1,
                        _0x2dc58c,
                        _0x48c27f,
                        _0x337c94,
                        _0x355bf7,
                        _0x2cae55,
                        _0x55db3e,
                        _0x39d21a
                      )))
                ) {
                  if (
                    0x1 < _0x220187 &&
                    _0x220187 <= this["lastSlope"] &&
                    _0x4d8ddc["collision"]["slope"]
                  )
                    break;
                  (_0x4d8ddc["collision"]["y"] = !0x0),
                    (_0x4d8ddc["tile"]["y"] = _0x220187),
                    (_0x4d8ddc["pos"]["y"] =
                      _0x39d21a * this["tilesize"] - _0x1aaa67 + _0x1314d4);
                  break;
                }
            }
          }
        },
        _checkTileDef: function (
          _0x4387b1,
          _0x392b49,
          _0x3c6301,
          _0x29e9a4,
          _0xd7a23f,
          _0xe14078,
          _0x229978,
          _0x5bfbaf,
          _0x4194ea,
          _0xe3ded
        ) {
          var _0xcc1b94 = this["tiledef"][_0x392b49];
          if (!_0xcc1b94) return !0x1;
          _0x392b49 = (_0xcc1b94[0x2] - _0xcc1b94[0x0]) * this["tilesize"];
          var _0x46ce5e = (_0xcc1b94[0x3] - _0xcc1b94[0x1]) * this["tilesize"],
            _0x55ec22 = _0xcc1b94[0x4];
          (_0x229978 =
            _0x3c6301 +
            _0xd7a23f +
            (0x0 > _0x46ce5e ? _0x229978 : 0x0) -
            (_0x4194ea + _0xcc1b94[0x0]) * this["tilesize"]),
            (_0x5bfbaf =
              _0x29e9a4 +
              _0xe14078 +
              (0x0 < _0x392b49 ? _0x5bfbaf : 0x0) -
              (_0xe3ded + _0xcc1b94[0x1]) * this["tilesize"]);
          if (0x0 < _0x392b49 * _0x5bfbaf - _0x46ce5e * _0x229978) {
            if (0x0 > _0xd7a23f * -_0x46ce5e + _0xe14078 * _0x392b49)
              return _0x55ec22;
            (_0x4194ea = Math["sqrt"](
              _0x392b49 * _0x392b49 + _0x46ce5e * _0x46ce5e
            )),
              (_0xe3ded = _0x46ce5e / _0x4194ea),
              (_0x4194ea = -_0x392b49 / _0x4194ea);
            var _0x221a9f = _0x229978 * _0xe3ded + _0x5bfbaf * _0x4194ea,
              _0xcc1b94 = _0xe3ded * _0x221a9f,
              _0x221a9f = _0x4194ea * _0x221a9f;
            if (
              _0xcc1b94 * _0xcc1b94 + _0x221a9f * _0x221a9f >=
              _0xd7a23f * _0xd7a23f + _0xe14078 * _0xe14078
            )
              return (
                _0x55ec22 ||
                0.5 >
                  _0x392b49 * (_0x5bfbaf - _0xe14078) -
                    _0x46ce5e * (_0x229978 - _0xd7a23f)
              );
            return (
              (_0x4387b1["pos"]["x"] = _0x3c6301 + _0xd7a23f - _0xcc1b94),
              (_0x4387b1["pos"]["y"] = _0x29e9a4 + _0xe14078 - _0x221a9f),
              (_0x4387b1["collision"]["slope"] = {
                x: _0x392b49,
                y: _0x46ce5e,
                nx: _0xe3ded,
                ny: _0x4194ea,
              }),
              !0x0
            );
          }
          return !0x1;
        },
      });
      var _0x14c3f8 = 0x1 / 0x3,
        _0x49678d = 0x2 / 0x3;
      (ig["CollisionMap"]["defaultTileDef"] = {
        0x5: [0x0, 0x1, 0x1, _0x49678d, !0x0],
        0x6: [0x0, _0x49678d, 0x1, _0x14c3f8, !0x0],
        0x7: [0x0, _0x14c3f8, 0x1, 0x0, !0x0],
        0x3: [0x0, 0x1, 0x1, 0.5, !0x0],
        0x4: [0x0, 0.5, 0x1, 0x0, !0x0],
        0x2: [0x0, 0x1, 0x1, 0x0, !0x0],
        0xa: [0.5, 0x1, 0x1, 0x0, !0x0],
        0x15: [0x0, 0x1, 0.5, 0x0, !0x0],
        0x20: [_0x49678d, 0x1, 0x1, 0x0, !0x0],
        0x2b: [_0x14c3f8, 0x1, _0x49678d, 0x0, !0x0],
        0x36: [0x0, 0x1, _0x14c3f8, 0x0, !0x0],
        0x1b: [0x0, 0x0, 0x1, _0x14c3f8, !0x0],
        0x1c: [0x0, _0x14c3f8, 0x1, _0x49678d, !0x0],
        0x1d: [0x0, _0x49678d, 0x1, 0x1, !0x0],
        0x19: [0x0, 0x0, 0x1, 0.5, !0x0],
        0x1a: [0x0, 0.5, 0x1, 0x1, !0x0],
        0x18: [0x0, 0x0, 0x1, 0x1, !0x0],
        0xb: [0x0, 0x0, 0.5, 0x1, !0x0],
        0x16: [0.5, 0x0, 0x1, 0x1, !0x0],
        0x21: [0x0, 0x0, _0x14c3f8, 0x1, !0x0],
        0x2c: [_0x14c3f8, 0x0, _0x49678d, 0x1, !0x0],
        0x37: [_0x49678d, 0x0, 0x1, 0x1, !0x0],
        0x10: [0x1, _0x14c3f8, 0x0, 0x0, !0x0],
        0x11: [0x1, _0x49678d, 0x0, _0x14c3f8, !0x0],
        0x12: [0x1, 0x1, 0x0, _0x49678d, !0x0],
        0xe: [0x1, 0.5, 0x0, 0x0, !0x0],
        0xf: [0x1, 0x1, 0x0, 0.5, !0x0],
        0xd: [0x1, 0x1, 0x0, 0x0, !0x0],
        0x8: [0.5, 0x1, 0x0, 0x0, !0x0],
        0x13: [0x1, 0x1, 0.5, 0x0, !0x0],
        0x1e: [_0x14c3f8, 0x1, 0x0, 0x0, !0x0],
        0x29: [_0x49678d, 0x1, _0x14c3f8, 0x0, !0x0],
        0x34: [0x1, 0x1, _0x49678d, 0x0, !0x0],
        0x26: [0x1, _0x49678d, 0x0, 0x1, !0x0],
        0x27: [0x1, _0x14c3f8, 0x0, _0x49678d, !0x0],
        0x28: [0x1, 0x0, 0x0, _0x14c3f8, !0x0],
        0x24: [0x1, 0.5, 0x0, 0x1, !0x0],
        0x25: [0x1, 0x0, 0x0, 0.5, !0x0],
        0x23: [0x1, 0x0, 0x0, 0x1, !0x0],
        0x9: [0x1, 0x0, 0.5, 0x1, !0x0],
        0x14: [0.5, 0x0, 0x0, 0x1, !0x0],
        0x1f: [0x1, 0x0, _0x49678d, 0x1, !0x0],
        0x2a: [_0x49678d, 0x0, _0x14c3f8, 0x1, !0x0],
        0x35: [_0x14c3f8, 0x0, 0x0, 0x1, !0x0],
        0xc: [0x0, 0x0, 0x1, 0x0, !0x1],
        0x17: [0x1, 0x1, 0x0, 0x1, !0x1],
        0x22: [0x1, 0x0, 0x1, 0x1, !0x1],
        0x2d: [0x0, 0x1, 0x0, 0x0, !0x1],
      }),
        (ig["CollisionMap"]["staticNoCollision"] = {
          trace: function (_0x268bfe, _0x1ceddf, _0x27f0b4, _0x50b9ba) {
            return {
              collision: { x: !0x1, y: !0x1, slope: !0x1 },
              pos: { x: _0x268bfe + _0x27f0b4, y: _0x1ceddf + _0x50b9ba },
              tile: { x: 0x0, y: 0x0 },
            };
          },
        });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("impact.background-map")
    ["requires"]("impact.map", "impact.image")
    ["defines"](function () {
      ig["BackgroundMap"] = ig["Map"]["extend"]({
        tiles: null,
        scroll: { x: 0x0, y: 0x0 },
        distance: 0x1,
        repeat: !0x1,
        tilesetName: "",
        foreground: !0x1,
        enabled: !0x0,
        preRender: !0x1,
        preRenderedChunks: null,
        chunkSize: 0x200,
        debugChunks: !0x1,
        anims: {},
        init: function (_0xd9dc67, _0x21d411, _0x1d2afc) {
          this["parent"](_0xd9dc67, _0x21d411), this["setTileset"](_0x1d2afc);
        },
        setTileset: function (_0x22f9b5) {
          (this["tilesetName"] =
            _0x22f9b5 instanceof ig["Image"] ? _0x22f9b5["path"] : _0x22f9b5),
            (this["tiles"] = new ig["Image"](this["tilesetName"])),
            (this["preRenderedChunks"] = null);
        },
        setScreenPos: function (_0xd7c6b4, _0x2c1ca6) {
          (this["scroll"]["x"] = _0xd7c6b4 / this["distance"]),
            (this["scroll"]["y"] = _0x2c1ca6 / this["distance"]);
        },
        preRenderMapToChunks: function () {
          var _0x4eb746 =
              this["width"] * this["tilesize"] * ig["system"]["scale"],
            _0x309c1a =
              this["height"] * this["tilesize"] * ig["system"]["scale"];
          this["chunkSize"] = Math["min"](
            Math["max"](_0x4eb746, _0x309c1a),
            this["chunkSize"]
          );
          var _0x521394 = Math["ceil"](_0x4eb746 / this["chunkSize"]),
            _0x288ab7 = Math["ceil"](_0x309c1a / this["chunkSize"]);
          this["preRenderedChunks"] = [];
          for (var _0x42266b = 0x0; _0x42266b < _0x288ab7; _0x42266b++) {
            this["preRenderedChunks"][_0x42266b] = [];
            for (var _0x6bcc90 = 0x0; _0x6bcc90 < _0x521394; _0x6bcc90++)
              this["preRenderedChunks"][_0x42266b][_0x6bcc90] = this[
                "preRenderChunk"
              ](
                _0x6bcc90,
                _0x42266b,
                _0x6bcc90 == _0x521394 - 0x1
                  ? _0x4eb746 - _0x6bcc90 * this["chunkSize"]
                  : this["chunkSize"],
                _0x42266b == _0x288ab7 - 0x1
                  ? _0x309c1a - _0x42266b * this["chunkSize"]
                  : this["chunkSize"]
              );
          }
        },
        preRenderChunk: function (_0xd7e1cd, _0x4037ee, _0x503259, _0x3cf2fe) {
          var _0x382322 =
              _0x503259 / this["tilesize"] / ig["system"]["scale"] + 0x1,
            _0x4de364 =
              _0x3cf2fe / this["tilesize"] / ig["system"]["scale"] + 0x1,
            _0x1719b9 =
              ((_0xd7e1cd * this["chunkSize"]) / ig["system"]["scale"]) %
              this["tilesize"],
            _0x1452c3 =
              ((_0x4037ee * this["chunkSize"]) / ig["system"]["scale"]) %
              this["tilesize"];
          (_0xd7e1cd = Math["floor"](
            (_0xd7e1cd * this["chunkSize"]) /
              this["tilesize"] /
              ig["system"]["scale"]
          )),
            (_0x4037ee = Math["floor"](
              (_0x4037ee * this["chunkSize"]) /
                this["tilesize"] /
                ig["system"]["scale"]
            ));
          var _0x3a32c9 = ig["$new"]("canvas");
          (_0x3a32c9["width"] = _0x503259),
            (_0x3a32c9["height"] = _0x3cf2fe),
            (_0x3a32c9["retinaResolutionEnabled"] = !0x1),
            (_0x3cf2fe = _0x3a32c9["getContext"]("2d")),
            ig["System"]["scaleMode"](_0x3a32c9, _0x3cf2fe),
            (_0x503259 = ig["system"]["context"]),
            (ig["system"]["context"] = _0x3cf2fe);
          for (_0x3cf2fe = 0x0; _0x3cf2fe < _0x382322; _0x3cf2fe++)
            for (var _0x347c32 = 0x0; _0x347c32 < _0x4de364; _0x347c32++)
              if (
                _0x3cf2fe + _0xd7e1cd < this["width"] &&
                _0x347c32 + _0x4037ee < this["height"]
              ) {
                var _0x4124d9 =
                  this["data"][_0x347c32 + _0x4037ee][_0x3cf2fe + _0xd7e1cd];
                _0x4124d9 &&
                  this["tiles"]["drawTile"](
                    _0x3cf2fe * this["tilesize"] - _0x1719b9,
                    _0x347c32 * this["tilesize"] - _0x1452c3,
                    _0x4124d9 - 0x1,
                    this["tilesize"]
                  );
              }
          return (ig["system"]["context"] = _0x503259), _0x3a32c9;
        },
        draw: function () {
          this["tiles"]["loaded"] &&
            this["enabled"] &&
            (this["preRender"]
              ? this["drawPreRendered"]()
              : this["drawTiled"]());
        },
        drawPreRendered: function () {
          this["preRenderedChunks"] || this["preRenderMapToChunks"]();
          var _0x102f87 = ig["system"]["getDrawPos"](this["scroll"]["x"]),
            _0x3072d8 = ig["system"]["getDrawPos"](this["scroll"]["y"]);
          if (this["repeat"])
            var _0xbe86b3 =
                this["width"] * this["tilesize"] * ig["system"]["scale"],
              _0x102f87 = ((_0x102f87 % _0xbe86b3) + _0xbe86b3) % _0xbe86b3,
              _0xbe86b3 =
                this["height"] * this["tilesize"] * ig["system"]["scale"],
              _0x3072d8 = ((_0x3072d8 % _0xbe86b3) + _0xbe86b3) % _0xbe86b3;
          var _0xbe86b3 = Math["max"](
              Math["floor"](_0x102f87 / this["chunkSize"]),
              0x0
            ),
            _0x1a60a5 = Math["max"](
              Math["floor"](_0x3072d8 / this["chunkSize"]),
              0x0
            ),
            _0x30736f = Math["ceil"](
              (_0x102f87 + ig["system"]["realWidth"]) / this["chunkSize"]
            ),
            _0x4d85b6 = Math["ceil"](
              (_0x3072d8 + ig["system"]["realHeight"]) / this["chunkSize"]
            ),
            _0xdfa85d = this["preRenderedChunks"][0x0]["length"],
            _0x277949 = this["preRenderedChunks"]["length"];
          this["repeat"] ||
            ((_0x30736f = Math["min"](_0x30736f, _0xdfa85d)),
            (_0x4d85b6 = Math["min"](_0x4d85b6, _0x277949)));
          for (var _0x4d8aa3 = 0x0; _0x1a60a5 < _0x4d85b6; _0x1a60a5++) {
            for (
              var _0x48a7fd = 0x0, _0x1a61a9 = _0xbe86b3;
              _0x1a61a9 < _0x30736f;
              _0x1a61a9++
            ) {
              var _0x42f8ee =
                  this["preRenderedChunks"][_0x1a60a5 % _0x277949][
                    _0x1a61a9 % _0xdfa85d
                  ],
                _0xd330d4 =
                  -_0x102f87 + _0x1a61a9 * this["chunkSize"] - _0x48a7fd,
                _0x2201f2 =
                  -_0x3072d8 + _0x1a60a5 * this["chunkSize"] - _0x4d8aa3;
              ig["system"]["context"]["drawImage"](
                _0x42f8ee,
                _0xd330d4,
                _0x2201f2
              ),
                ig["Image"]["drawCount"]++,
                this["debugChunks"] &&
                  ((ig["system"]["context"]["strokeStyle"] = "#f0f"),
                  ig["system"]["context"]["strokeRect"](
                    _0xd330d4,
                    _0x2201f2,
                    this["chunkSize"],
                    this["chunkSize"]
                  )),
                this["repeat"] &&
                  _0x42f8ee["width"] < this["chunkSize"] &&
                  _0xd330d4 + _0x42f8ee["width"] < ig["system"]["realWidth"] &&
                  ((_0x48a7fd += this["chunkSize"] - _0x42f8ee["width"]),
                  _0x30736f++);
            }
            this["repeat"] &&
              _0x42f8ee["height"] < this["chunkSize"] &&
              _0x2201f2 + _0x42f8ee["height"] < ig["system"]["realHeight"] &&
              ((_0x4d8aa3 += this["chunkSize"] - _0x42f8ee["height"]),
              _0x4d85b6++);
          }
        },
        drawTiled: function () {
          for (
            var _0x44f0c0 = 0x0,
              _0x212a53 = null,
              _0x247964 = (this["scroll"]["x"] / this["tilesize"])["toInt"](),
              _0x2679bc = (this["scroll"]["y"] / this["tilesize"])["toInt"](),
              _0x1bded4 = this["scroll"]["x"] % this["tilesize"],
              _0x8b8536 = this["scroll"]["y"] % this["tilesize"],
              _0x1ed22 = -_0x1bded4 - this["tilesize"],
              _0x1bded4 = ig["system"]["width"] + this["tilesize"] - _0x1bded4,
              _0x2e7cc1 = ig["system"]["height"] + this["tilesize"] - _0x8b8536,
              _0x3feb5b = -0x1,
              _0x8b8536 = -_0x8b8536 - this["tilesize"];
            _0x8b8536 < _0x2e7cc1;
            _0x3feb5b++, _0x8b8536 += this["tilesize"]
          ) {
            var _0x328161 = _0x3feb5b + _0x2679bc;
            if (_0x328161 >= this["height"] || 0x0 > _0x328161) {
              if (!this["repeat"]) continue;
              _0x328161 =
                ((_0x328161 % this["height"]) + this["height"]) %
                this["height"];
            }
            for (
              var _0x1103ba = -0x1, _0x4a92e6 = _0x1ed22;
              _0x4a92e6 < _0x1bded4;
              _0x1103ba++, _0x4a92e6 += this["tilesize"]
            ) {
              _0x44f0c0 = _0x1103ba + _0x247964;
              if (_0x44f0c0 >= this["width"] || 0x0 > _0x44f0c0) {
                if (!this["repeat"]) continue;
                _0x44f0c0 =
                  ((_0x44f0c0 % this["width"]) + this["width"]) % this["width"];
              }
              if ((_0x44f0c0 = this["data"][_0x328161][_0x44f0c0]))
                (_0x212a53 = this["anims"][_0x44f0c0 - 0x1])
                  ? _0x212a53["draw"](_0x4a92e6, _0x8b8536)
                  : this["tiles"]["drawTile"](
                      _0x4a92e6,
                      _0x8b8536,
                      _0x44f0c0 - 0x1,
                      this["tilesize"]
                    );
            }
          }
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("impact.game")
    ["requires"](
      "impact.impact",
      "impact.entity",
      "impact.collision-map",
      "impact.background-map"
    )
    ["defines"](function () {
      (ig["Game"] = ig["Class"]["extend"]({
        clearColor: "#000000",
        gravity: 0x0,
        screen: { x: 0x0, y: 0x0 },
        _rscreen: { x: 0x0, y: 0x0 },
        entities: [],
        namedEntities: {},
        collisionMap: ig["CollisionMap"]["staticNoCollision"],
        backgroundMaps: [],
        backgroundAnims: {},
        autoSort: !0x1,
        sortBy: null,
        cellSize: 0x40,
        _deferredKill: [],
        _levelToLoad: null,
        _doSortEntities: !0x1,
        staticInstantiate: function () {
          return (
            (this["sortBy"] = this["sortBy"] || ig["Game"]["SORT"]["Z_INDEX"]),
            (ig["game"] = this),
            null
          );
        },
        loadLevel: function (_0x8c849) {
          (this["screen"] = { x: 0x0, y: 0x0 }),
            (this["entities"] = []),
            (this["namedEntities"] = {});
          for (
            var _0x581212 = 0x0;
            _0x581212 < _0x8c849["entities"]["length"];
            _0x581212++
          ) {
            var _0x57c368 = _0x8c849["entities"][_0x581212];
            this["spawnEntity"](
              _0x57c368["type"],
              _0x57c368["x"],
              _0x57c368["y"],
              _0x57c368["settings"]
            );
          }
          this["sortEntities"](),
            (this["collisionMap"] = ig["CollisionMap"]["staticNoCollision"]),
            (this["backgroundMaps"] = []);
          for (
            _0x581212 = 0x0;
            _0x581212 < _0x8c849["layer"]["length"];
            _0x581212++
          )
            if (
              ((_0x57c368 = _0x8c849["layer"][_0x581212]),
              "collision" == _0x57c368["name"])
            )
              this["collisionMap"] = new ig["CollisionMap"](
                _0x57c368["tilesize"],
                _0x57c368["data"]
              );
            else {
              var _0x3b7012 = new ig["BackgroundMap"](
                _0x57c368["tilesize"],
                _0x57c368["data"],
                _0x57c368["tilesetName"]
              );
              (_0x3b7012["anims"] =
                this["backgroundAnims"][_0x57c368["tilesetName"]] || {}),
                (_0x3b7012["repeat"] = _0x57c368["repeat"]),
                (_0x3b7012["distance"] = _0x57c368["distance"]),
                (_0x3b7012["foreground"] = !!_0x57c368["foreground"]),
                (_0x3b7012["preRender"] = !!_0x57c368["preRender"]),
                (_0x3b7012["name"] = _0x57c368["name"]),
                this["backgroundMaps"]["push"](_0x3b7012);
            }
          for (
            _0x581212 = 0x0;
            _0x581212 < this["entities"]["length"];
            _0x581212++
          )
            this["entities"][_0x581212]["ready"]();
        },
        loadLevelDeferred: function (_0x32cebf) {
          this["_levelToLoad"] = _0x32cebf;
        },
        getMapByName: function (_0x3f94c8) {
          if ("collision" == _0x3f94c8) return this["collisionMap"];
          for (
            var _0x166fb7 = 0x0;
            _0x166fb7 < this["backgroundMaps"]["length"];
            _0x166fb7++
          )
            if (this["backgroundMaps"][_0x166fb7]["name"] == _0x3f94c8)
              return this["backgroundMaps"][_0x166fb7];
          return null;
        },
        getEntityByName: function (_0x597757) {
          return this["namedEntities"][_0x597757];
        },
        getEntitiesByType: function (_0x453e73) {
          _0x453e73 =
            "string" === typeof _0x453e73 ? ig["global"][_0x453e73] : _0x453e73;
          for (
            var _0x55e503 = [], _0x367734 = 0x0;
            _0x367734 < this["entities"]["length"];
            _0x367734++
          ) {
            var _0x16a61d = this["entities"][_0x367734];
            _0x16a61d instanceof _0x453e73 &&
              !_0x16a61d["_killed"] &&
              _0x55e503["push"](_0x16a61d);
          }
          return _0x55e503;
        },
        spawnEntity: function (_0xaa1eb0, _0x1bfd83, _0x228116, _0x182e0f) {
          var _0x1acce2 =
            "string" === typeof _0xaa1eb0 ? ig["global"][_0xaa1eb0] : _0xaa1eb0;
          if (!_0x1acce2)
            throw "Can\x27t\x20spawn\x20entity\x20of\x20type\x20" + _0xaa1eb0;
          return (
            (_0xaa1eb0 = new _0x1acce2(_0x1bfd83, _0x228116, _0x182e0f || {})),
            this["entities"]["push"](_0xaa1eb0),
            _0xaa1eb0["name"] &&
              (this["namedEntities"][_0xaa1eb0["name"]] = _0xaa1eb0),
            _0xaa1eb0
          );
        },
        sortEntities: function () {
          this["entities"]["sort"](this["sortBy"]);
        },
        sortEntitiesDeferred: function () {
          this["_doSortEntities"] = !0x0;
        },
        removeEntity: function (_0x18aa76) {
          _0x18aa76["name"] && delete this["namedEntities"][_0x18aa76["name"]],
            (_0x18aa76["_killed"] = !0x0),
            (_0x18aa76["type"] = ig["Entity"]["TYPE"]["NONE"]),
            (_0x18aa76["checkAgainst"] = ig["Entity"]["TYPE"]["NONE"]),
            (_0x18aa76["collides"] = ig["Entity"]["COLLIDES"]["NEVER"]),
            this["_deferredKill"]["push"](_0x18aa76);
        },
        run: function () {
          this["update"](), this["draw"]();
        },
        update: function () {
          this["_levelToLoad"] &&
            (this["loadLevel"](this["_levelToLoad"]),
            (this["_levelToLoad"] = null)),
            this["updateEntities"](),
            this["checkEntities"]();
          for (
            var _0x53a376 = 0x0;
            _0x53a376 < this["_deferredKill"]["length"];
            _0x53a376++
          )
            this["_deferredKill"][_0x53a376]["erase"](),
              this["entities"]["erase"](this["_deferredKill"][_0x53a376]);
          this["_deferredKill"] = [];
          if (this["_doSortEntities"] || this["autoSort"])
            this["sortEntities"](), (this["_doSortEntities"] = !0x1);
          for (var _0x2a6ce4 in this["backgroundAnims"]) {
            var _0x53a376 = this["backgroundAnims"][_0x2a6ce4],
              _0x471f1d;
            for (_0x471f1d in _0x53a376) _0x53a376[_0x471f1d]["update"]();
          }
        },
        updateEntities: function () {
          for (
            var _0x41d1e7 = 0x0;
            _0x41d1e7 < this["entities"]["length"];
            _0x41d1e7++
          ) {
            var _0x4481f4 = this["entities"][_0x41d1e7];
            _0x4481f4["_killed"] || _0x4481f4["update"]();
          }
        },
        draw: function () {
          this["clearColor"] && ig["system"]["clear"](this["clearColor"]),
            (this["_rscreen"]["x"] =
              ig["system"]["getDrawPos"](this["screen"]["x"]) /
              ig["system"]["scale"]),
            (this["_rscreen"]["y"] =
              ig["system"]["getDrawPos"](this["screen"]["y"]) /
              ig["system"]["scale"]);
          var _0x382941;
          for (
            _0x382941 = 0x0;
            _0x382941 < this["backgroundMaps"]["length"];
            _0x382941++
          ) {
            var _0x538a7c = this["backgroundMaps"][_0x382941];
            if (_0x538a7c["foreground"]) break;
            _0x538a7c["setScreenPos"](this["screen"]["x"], this["screen"]["y"]),
              _0x538a7c["draw"]();
          }
          this["drawEntities"]();
          for (
            _0x382941;
            _0x382941 < this["backgroundMaps"]["length"];
            _0x382941++
          )
            (_0x538a7c = this["backgroundMaps"][_0x382941]),
              _0x538a7c["setScreenPos"](
                this["screen"]["x"],
                this["screen"]["y"]
              ),
              _0x538a7c["draw"]();
        },
        drawEntities: function () {
          for (
            var _0x2a3219 = 0x0;
            _0x2a3219 < this["entities"]["length"];
            _0x2a3219++
          )
            this["entities"][_0x2a3219]["draw"]();
        },
        checkEntities: function () {
          for (
            var _0x23ced8 = {}, _0x143e57 = 0x0;
            _0x143e57 < this["entities"]["length"];
            _0x143e57++
          ) {
            var _0x326a24 = this["entities"][_0x143e57];
            if (
              !(
                _0x326a24["type"] == ig["Entity"]["TYPE"]["NONE"] &&
                _0x326a24["checkAgainst"] == ig["Entity"]["TYPE"]["NONE"] &&
                _0x326a24["collides"] == ig["Entity"]["COLLIDES"]["NEVER"]
              )
            ) {
              for (
                var _0x5a28a6 = {},
                  _0x403d7d = Math["floor"](
                    _0x326a24["pos"]["y"] / this["cellSize"]
                  ),
                  _0x211d78 =
                    Math["floor"](
                      (_0x326a24["pos"]["x"] + _0x326a24["size"]["x"]) /
                        this["cellSize"]
                    ) + 0x1,
                  _0x2b9bf7 =
                    Math["floor"](
                      (_0x326a24["pos"]["y"] + _0x326a24["size"]["y"]) /
                        this["cellSize"]
                    ) + 0x1,
                  _0x274886 = Math["floor"](
                    _0x326a24["pos"]["x"] / this["cellSize"]
                  );
                _0x274886 < _0x211d78;
                _0x274886++
              )
                for (
                  var _0x109dd6 = _0x403d7d;
                  _0x109dd6 < _0x2b9bf7;
                  _0x109dd6++
                )
                  if (_0x23ced8[_0x274886]) {
                    if (_0x23ced8[_0x274886][_0x109dd6]) {
                      for (
                        var _0x1538fd = _0x23ced8[_0x274886][_0x109dd6],
                          _0x3055dc = 0x0;
                        _0x3055dc < _0x1538fd["length"];
                        _0x3055dc++
                      )
                        _0x326a24["touches"](_0x1538fd[_0x3055dc]) &&
                          !_0x5a28a6[_0x1538fd[_0x3055dc]["id"]] &&
                          ((_0x5a28a6[_0x1538fd[_0x3055dc]["id"]] = !0x0),
                          ig["Entity"]["checkPair"](
                            _0x326a24,
                            _0x1538fd[_0x3055dc]
                          ));
                      _0x1538fd["push"](_0x326a24);
                    } else _0x23ced8[_0x274886][_0x109dd6] = [_0x326a24];
                  } else
                    (_0x23ced8[_0x274886] = {}),
                      (_0x23ced8[_0x274886][_0x109dd6] = [_0x326a24]);
            }
          }
        },
      })),
        (ig["Game"]["SORT"] = {
          Z_INDEX: function (_0xea81d3, _0x3e4ef3) {
            return _0xea81d3["zIndex"] - _0x3e4ef3["zIndex"];
          },
          POS_X: function (_0xae32d6, _0x267292) {
            return (
              _0xae32d6["pos"]["x"] +
              _0xae32d6["size"]["x"] -
              (_0x267292["pos"]["x"] + _0x267292["size"]["x"])
            );
          },
          POS_Y: function (_0x4524f5, _0x3f4142) {
            return (
              _0x4524f5["pos"]["y"] +
              _0x4524f5["size"]["y"] -
              (_0x3f4142["pos"]["y"] + _0x3f4142["size"]["y"])
            );
          },
        });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("plugins.patches.webkit-image-smoothing-patch")["defines"](
    function () {
      ig["System"] &&
        ((ig["System"]["SCALE"] = {
          CRISP: function (_0x8318d, _0x142849) {
            (_0x142849["imageSmoothingEnabled"] =
              _0x142849["msImageSmoothingEnabled"] =
              _0x142849["mozImageSmoothingEnabled"] =
              _0x142849["oImageSmoothingEnabled"] =
                !0x1),
              (_0x8318d["style"]["imageRendering"] = "-moz-crisp-edges"),
              (_0x8318d["style"]["imageRendering"] = "-o-crisp-edges"),
              (_0x8318d["style"]["imageRendering"] =
                "-webkit-optimize-contrast"),
              (_0x8318d["style"]["imageRendering"] = "crisp-edges"),
              (_0x8318d["style"]["msInterpolationMode"] = "nearest-neighbor");
          },
          SMOOTH: function (_0x52e9a1, _0x49b380) {
            (_0x49b380["imageSmoothingEnabled"] =
              _0x49b380["msImageSmoothingEnabled"] =
              _0x49b380["mozImageSmoothingEnabled"] =
              _0x49b380["oImageSmoothingEnabled"] =
                !0x0),
              (_0x52e9a1["style"]["imageRendering"] = ""),
              (_0x52e9a1["style"]["msInterpolationMode"] = "");
          },
        }),
        (ig["System"]["scaleMode"] = ig["System"]["SCALE"]["SMOOTH"]));
    }
  ),
  (ig["baked"] = !0x0),
  ig["module"]("plugins.patches.windowfocus-onMouseDown-patch")["defines"](
    function () {
      var _0x3bddf0 = !0x1;
      try {
        (_0x3bddf0 = window["self"] !== window["top"]),
          !0x1 === _0x3bddf0 && (_0x3bddf0 = 0x0 < window["frames"]["length"]);
      } catch (_0xce11f6) {
        _0x3bddf0 = !0x0;
      }
      ig["Input"]["inject"]({
        keydown: function (_0x5d66b6) {
          var _0x20c37d = _0x5d66b6["target"]["tagName"];
          if (!("INPUT" == _0x20c37d || "TEXTAREA" == _0x20c37d)) {
            if (
              ((_0x20c37d =
                "keydown" == _0x5d66b6["type"]
                  ? _0x5d66b6["keyCode"]
                  : 0x2 == _0x5d66b6["button"]
                  ? ig["KEY"]["MOUSE2"]
                  : ig["KEY"]["MOUSE1"]),
              _0x3bddf0 && 0x0 > _0x20c37d && window["focus"](),
              ("touchstart" == _0x5d66b6["type"] ||
                "mousedown" == _0x5d66b6["type"]) &&
                this["mousemove"](_0x5d66b6),
              (_0x20c37d = this["bindings"][_0x20c37d]))
            )
              (this["actions"][_0x20c37d] = !0x0),
                this["locks"][_0x20c37d] ||
                  ((this["presses"][_0x20c37d] = !0x0),
                  (this["locks"][_0x20c37d] = !0x0)),
                _0x5d66b6["stopPropagation"](),
                _0x5d66b6["preventDefault"]();
          }
        },
      });
    }
  ),
  (ig["baked"] = !0x0),
  ig["module"]("plugins.handlers.dom-handler")["defines"](function () {
    ig["DomHandler"] = ig["Class"]["extend"]({
      JQUERYAVAILABLE: !0x1,
      init: function () {
        this["JQUERYAVAILABLE"] = this["_jqueryAvailable"]();
      },
      _jqueryAvailable: function () {
        return "undefined" !== typeof jQuery;
      },
      addEvent: function (_0x1c4c20, _0x2cec94, _0x296a47, _0x5eac15) {
        if (this["JQUERYAVAILABLE"]) _0x1c4c20["on"](_0x2cec94, _0x296a47);
        else _0x1c4c20["addEventListener"](_0x2cec94, _0x296a47, _0x5eac15);
      },
      create: function (_0x161c27) {
        return this["JQUERYAVAILABLE"]
          ? $("<" + _0x161c27 + ">")
          : ig["$new"](_0x161c27);
      },
      getElementByClass: function (_0x245aa2) {
        return this["JQUERYAVAILABLE"]
          ? $("." + _0x245aa2)
          : document["getElementsByClassName"](_0x245aa2);
      },
      getElementById: function (_0x5d5e66) {
        return this["JQUERYAVAILABLE"]
          ? 0x0 < $(_0x5d5e66)["length"]
            ? $(_0x5d5e66)
            : null
          : ig["$"](_0x5d5e66);
      },
      appendChild: function (_0x26b65a, _0x184e75) {
        this["JQUERYAVAILABLE"]
          ? _0x26b65a["append"](_0x184e75)
          : _0x26b65a["appendChild"](_0x184e75);
      },
      appendToBody: function (_0x20e834) {
        this["JQUERYAVAILABLE"]
          ? $("body")["append"](_0x20e834)
          : document["body"]["appendChild"](_0x20e834);
      },
      resize: function (_0x5eea63, _0x238591, _0x1a50f2) {
        if (this["JQUERYAVAILABLE"])
          _0x5eea63["width"](_0x238591["toFixed"](0x2)),
            _0x5eea63["height"](_0x1a50f2["toFixed"](0x2));
        else {
          var _0x380e08 = _0x5eea63["style"]["visibility"];
          (_0x238591 =
            "width:" +
            _0x238591["toFixed"](0x2) +
            "px;\x20height:" +
            _0x1a50f2["toFixed"](0x2) +
            "px;"),
            this["attr"](_0x5eea63, "style", _0x238591),
            (_0x5eea63["style"]["visibility"] = _0x380e08);
        }
      },
      resizeOffsetLeft: function (_0x4be062, _0x678930, _0x573586, _0x650cb8) {
        if (this["JQUERYAVAILABLE"])
          _0x4be062["width"](_0x678930["toFixed"](0x2)),
            _0x4be062["height"](_0x573586["toFixed"](0x2)),
            _0x4be062["css"]("left", _0x650cb8);
        else {
          var _0xd053e0 = _0x4be062["style"]["visibility"];
          (_0x678930 =
            "width:" +
            _0x678930["toFixed"](0x2) +
            "px;\x20height:" +
            _0x573586["toFixed"](0x2) +
            "px;\x20left:\x20" +
            _0x650cb8["toFixed"](0x2) +
            "px;"),
            this["attr"](_0x4be062, "style", _0x678930),
            (_0x4be062["style"]["visibility"] = _0xd053e0);
        }
      },
      css: function (_0x4292f7, _0x277456) {
        if (this["JQUERYAVAILABLE"]) _0x4292f7["css"](_0x277456);
        else {
          var _0x234a69 = "",
            _0x30f155;
          for (_0x30f155 in _0x277456)
            _0x234a69 += _0x30f155 + ":" + _0x277456[_0x30f155] + ";";
          this["attr"](_0x4292f7, "style", _0x234a69);
        }
      },
      getOffsets: function (_0x340236) {
        return this["JQUERYAVAILABLE"]
          ? ((_0x340236 = _0x340236["offset"]()),
            { left: _0x340236["left"], top: _0x340236["top"] })
          : { left: _0x340236["offsetLeft"], top: _0x340236["offsetTop"] };
      },
      attr: function (_0x5d9e9c, _0x457cf5, _0x33edb5) {
        if ("undefined" === typeof _0x33edb5)
          return this["JQUERYAVAILABLE"]
            ? _0x5d9e9c["attr"](_0x457cf5)
            : _0x5d9e9c["getAttribute"](_0x457cf5);
        this["JQUERYAVAILABLE"]
          ? _0x5d9e9c["attr"](_0x457cf5, _0x33edb5)
          : _0x5d9e9c["setAttribute"](_0x457cf5, _0x33edb5);
      },
      show: function (_0x16519b) {
        this["JQUERYAVAILABLE"]
          ? (_0x16519b["show"](), _0x16519b["css"]("visibility", "visible"))
          : _0x16519b &&
            (_0x16519b["style"]
              ? (_0x16519b["style"]["visibility"] = "visible")
              : _0x16519b[0x0] &&
                (_0x16519b[0x0]["style"]["visibility"] = "visible"));
      },
      hide: function (_0xc5d66c) {
        this["JQUERYAVAILABLE"]
          ? (_0xc5d66c["hide"](), _0xc5d66c["css"]("visibility", "hidden"))
          : _0xc5d66c &&
            (_0xc5d66c["style"]
              ? (_0xc5d66c["style"]["visibility"] = "hidden")
              : _0xc5d66c[0x0] &&
                (_0xc5d66c[0x0]["style"]["visibility"] = "hidden"));
      },
      getQueryVariable: function (_0x396d8a) {
        for (
          var _0x57a646 = window["location"]["search"]
              ["substring"](0x1)
              ["split"]("&"),
            _0x288d2d = 0x0;
          _0x288d2d < _0x57a646["length"];
          _0x288d2d++
        ) {
          var _0x10bb88 = _0x57a646[_0x288d2d]["split"]("=");
          if (decodeURIComponent(_0x10bb88[0x0]) == _0x396d8a)
            return decodeURIComponent(_0x10bb88[0x1]);
        }
      },
      forcedDeviceDetection: function () {
        var _0x275088 = this["getQueryVariable"]("device");
        if (_0x275088)
          switch (_0x275088) {
            case "mobile":
              console["log"]("serving\x20mobile\x20version\x20..."),
                (ig["ua"]["mobile"] = !0x0);
              break;
            case "desktop":
              console["log"]("serving\x20desktop\x20version\x20..."),
                (ig["ua"]["mobile"] = !0x1);
              break;
            default:
              console["log"]("serving\x20universal\x20version\x20...");
          }
        else console["log"]("serving\x20universal\x20version\x20...");
      },
      forcedDeviceRotation: function () {
        var _0x5ca177 = this["getQueryVariable"]("force-rotate");
        if (_0x5ca177)
          switch (_0x5ca177) {
            case "portrait":
              console["log"]("force\x20rotate\x20to\x20portrait"),
                (window["orientation"] = 0x0);
              break;
            case "landscape":
              console["log"]("force\x20rotate\x20to\x20horizontal"),
                (window["orientation"] = 0x5a);
              break;
            default:
              alert(
                "wrong\x20command/type\x20in\x20param\x20force-rotate.\x20Defaulting\x20value\x20to\x20portrait"
              ),
                (window["orientation"] = 0x0);
          }
      },
    });
  }),
  (ig["baked"] = !0x0),
  ig["module"]("plugins.data.vector")["defines"](function () {
    Vector2 = ig["Class"]["extend"]({
      x: null,
      y: null,
      valType: "number",
      init: function (_0x55515e, _0x242cef) {
        typeof _0x55515e === this["valType"] &&
          typeof _0x242cef === this["valType"] &&
          ((this["x"] = _0x55515e), (this["y"] = _0x242cef));
      },
      row: function (_0x174fb9) {
        return (
          typeof _0x174fb9 === this["valType"] && (this["y"] = _0x174fb9),
          this["y"]
        );
      },
      col: function (_0x2a1caf) {
        return (
          typeof _0x2a1caf === this["valType"] && (this["x"] = _0x2a1caf),
          this["x"]
        );
      },
      magnitude: function () {
        return Math["sqrt"](this["x"] * this["x"] + this["y"] * this["y"]);
      },
      unitVector: function () {
        var _0x27d276 = this["magnitude"]();
        if (0x0 < _0x27d276)
          return new Vector2(this["x"] / _0x27d276, this["y"] / _0x27d276);
        throw (
          "Divide\x20by\x200\x20error\x20in\x20unitVector\x20function\x20of\x20vector:" +
          this
        );
      },
      add: function (_0x47b3af) {
        return new Vector2(
          this["x"] + _0x47b3af["x"],
          this["y"] + _0x47b3af["y"]
        );
      },
      subtract: function (_0x43e61f) {
        return new Vector2(
          this["x"] - _0x43e61f["x"],
          this["y"] - _0x43e61f["y"]
        );
      },
      dotProduct: function (_0x5d585d) {
        return this["x"] * _0x5d585d["x"] + this["y"] * _0x5d585d["y"];
      },
      multiplyByScalar: function (_0x56cd27) {
        return new Vector2(_0x56cd27 * this["x"], _0x56cd27 * this["y"]);
      },
    });
  }),
  (ig["baked"] = !0x0),
  ig["module"]("plugins.handlers.size-handler")
    ["requires"]("plugins.data.vector")
    ["defines"](function () {
      ig["SizeHandler"] = ig["Class"]["extend"]({
        portraitMode: !0x1,
        desktop: {
          actualSize: new Vector2(window["innerWidth"], window["innerHeight"]),
          actualResolution: new Vector2(0x3c0, 0x21c),
        },
        mobile: {
          actualSize: new Vector2(window["innerWidth"], window["innerHeight"]),
          actualResolution: new Vector2(0x3c0, 0x21c),
        },
        windowSize: new Vector2(window["innerWidth"], window["innerHeight"]),
        scaleRatioMultiplier: new Vector2(0x1, 0x1),
        sizeRatio: new Vector2(0x1, 0x1),
        scale: 0x1,
        domHandler: null,
        dynamicClickableEntityDivs: {},
        coreDivsToResize: ["#canvas", "#play", "#orientate"],
        adsToResize: {
          MobileAdInGamePreroll: {
            "box-width": _SETTINGS["Ad"]["Mobile"]["Preroll"]["Width"] + 0x2,
            "box-height": _SETTINGS["Ad"]["Mobile"]["Preroll"]["Height"] + 0x14,
          },
          MobileAdInGameEnd: {
            "box-width": _SETTINGS["Ad"]["Mobile"]["End"]["Width"] + 0x2,
            "box-height": _SETTINGS["Ad"]["Mobile"]["End"]["Height"] + 0x14,
          },
          MobileAdInGamePreroll2: {
            "box-width": _SETTINGS["Ad"]["Mobile"]["Preroll"]["Width"] + 0x2,
            "box-height": _SETTINGS["Ad"]["Mobile"]["Preroll"]["Height"] + 0x14,
          },
          MobileAdInGameEnd2: {
            "box-width": _SETTINGS["Ad"]["Mobile"]["End"]["Width"] + 0x2,
            "box-height": _SETTINGS["Ad"]["Mobile"]["End"]["Height"] + 0x14,
          },
          MobileAdInGamePreroll3: {
            "box-width": _SETTINGS["Ad"]["Mobile"]["Preroll"]["Width"] + 0x2,
            "box-height": _SETTINGS["Ad"]["Mobile"]["Preroll"]["Height"] + 0x14,
          },
          MobileAdInGameEnd3: {
            "box-width": _SETTINGS["Ad"]["Mobile"]["End"]["Width"] + 0x2,
            "box-height": _SETTINGS["Ad"]["Mobile"]["End"]["Height"] + 0x14,
          },
        },
        init: function (_0x2903f5) {
          this["domHandler"] = _0x2903f5;
          if ("undefined" === typeof _0x2903f5)
            throw "undefined\x20Dom\x20Handler\x20for\x20Size\x20Handler";
          this["sizeCalcs"](),
            this["eventListenerSetup"](),
            this["samsungFix"]();
        },
        sizeCalcs: function () {
          this["windowSize"] = new Vector2(
            window["innerWidth"],
            window["innerHeight"]
          );
          if (ig["ua"]["mobile"]) {
            this["mobile"]["actualSize"] = new Vector2(
              window["innerWidth"],
              window["innerHeight"]
            );
            var _0x13b654 = new Vector2(
              this["mobile"]["actualResolution"]["x"],
              this["mobile"]["actualResolution"]["y"]
            );
            this["scaleRatioMultiplier"] = new Vector2(
              this["mobile"]["actualSize"]["x"] / _0x13b654["x"],
              this["mobile"]["actualSize"]["y"] / _0x13b654["y"]
            );
            var _0x139503 = Math["min"](
              this["scaleRatioMultiplier"]["x"],
              this["scaleRatioMultiplier"]["y"]
            );
            (this["mobile"]["actualSize"]["x"] =
              _0x13b654["x"] * this["scaleRatioMultiplier"]["x"]),
              (this["mobile"]["actualSize"]["y"] =
                _0x13b654["y"] * this["scaleRatioMultiplier"]["y"]);
          } else
            (this["desktop"]["actualSize"] = new Vector2(
              window["innerWidth"],
              window["innerHeight"]
            )),
              (_0x13b654 = new Vector2(
                this["desktop"]["actualResolution"]["x"],
                this["desktop"]["actualResolution"]["y"]
              )),
              (this["scaleRatioMultiplier"] = new Vector2(
                this["desktop"]["actualSize"]["x"] / _0x13b654["x"],
                this["desktop"]["actualSize"]["y"] / _0x13b654["y"]
              )),
              (_0x139503 = Math["min"](
                this["scaleRatioMultiplier"]["x"],
                this["scaleRatioMultiplier"]["y"]
              )),
              (this["desktop"]["actualSize"]["x"] = _0x13b654["x"] * _0x139503),
              (this["desktop"]["actualSize"]["y"] = _0x13b654["y"] * _0x139503);
          (this["sizeRatio"]["x"] =
            window["innerWidth"] / this["mobile"]["actualResolution"]["x"]),
            (this["sizeRatio"]["y"] =
              window["innerHeight"] / this["mobile"]["actualResolution"]["y"]);
        },
        resizeLayers: function () {
          for (
            var _0x16b8d9 = 0x0;
            _0x16b8d9 < this["coreDivsToResize"]["length"];
            _0x16b8d9++
          ) {
            var _0x138d0f = ig["domHandler"]["getElementById"](
              this["coreDivsToResize"][_0x16b8d9]
            );
            ig["ua"]["mobile"]
              ? ig["domHandler"]["resize"](
                  _0x138d0f,
                  Math["floor"](ig["sizeHandler"]["mobile"]["actualSize"]["x"]),
                  Math["floor"](ig["sizeHandler"]["mobile"]["actualSize"]["y"])
                )
              : ig["domHandler"]["resizeOffsetLeft"](
                  _0x138d0f,
                  Math["floor"](
                    ig["sizeHandler"]["desktop"]["actualSize"]["x"]
                  ),
                  Math["floor"](
                    ig["sizeHandler"]["desktop"]["actualSize"]["y"]
                  ),
                  Math["floor"](
                    ig["sizeHandler"]["windowSize"]["x"] / 0x2 -
                      ig["sizeHandler"]["desktop"]["actualSize"]["x"] / 0x2
                  )
                );
          }
          for (var _0x49f7ca in this["adsToResize"]) {
            var _0x16b8d9 = ig["domHandler"]["getElementById"]("#" + _0x49f7ca),
              _0x138d0f = ig["domHandler"]["getElementById"](
                "#" + _0x49f7ca + "-Box"
              ),
              _0x47ad7a =
                (window["innerWidth"] -
                  this["adsToResize"][_0x49f7ca]["box-width"]) /
                  0x2 +
                "px",
              _0x11d68b =
                (window["innerHeight"] -
                  this["adsToResize"][_0x49f7ca]["box-height"]) /
                  0x2 +
                "px";
            _0x16b8d9 &&
              ig["domHandler"]["css"](_0x16b8d9, {
                width: window["innerWidth"],
                height: window["innerHeight"],
              }),
              _0x138d0f &&
                ig["domHandler"]["css"](_0x138d0f, {
                  left: _0x47ad7a,
                  top: _0x11d68b,
                });
          }
          for (_0x49f7ca in this["dynamicClickableEntityDivs"]) {
            (_0x138d0f = Math["min"](
              ig["sizeHandler"]["scaleRatioMultiplier"]["x"],
              ig["sizeHandler"]["scaleRatioMultiplier"]["y"]
            )),
              (_0x16b8d9 = ig["domHandler"]["getElementById"]("#" + _0x49f7ca));
            if (ig["ua"]["mobile"])
              var _0x4f3831 =
                  this["dynamicClickableEntityDivs"][_0x49f7ca]["entity_pos_x"],
                _0x1a9134 =
                  this["dynamicClickableEntityDivs"][_0x49f7ca]["entity_pos_y"],
                _0x11d68b =
                  this["dynamicClickableEntityDivs"][_0x49f7ca]["width"],
                _0x47ad7a =
                  this["dynamicClickableEntityDivs"][_0x49f7ca]["height"],
                _0x249fc8 =
                  Math["floor"](_0x4f3831 * this["scaleRatioMultiplier"]["x"]) +
                  "px",
                _0x1a9134 =
                  Math["floor"](_0x1a9134 * this["scaleRatioMultiplier"]["y"]) +
                  "px",
                _0x11d68b =
                  Math["floor"](_0x11d68b * this["scaleRatioMultiplier"]["x"]) +
                  "px",
                _0x138d0f =
                  Math["floor"](_0x47ad7a * this["scaleRatioMultiplier"]["y"]) +
                  "px";
            else
              var _0x47ad7a = ig["domHandler"]["getElementById"]("#canvas"),
                _0x47ad7a = ig["domHandler"]["getOffsets"](_0x47ad7a),
                _0x249fc8 = _0x47ad7a["left"],
                _0x5c4e5c = _0x47ad7a["top"],
                _0x4f3831 =
                  this["dynamicClickableEntityDivs"][_0x49f7ca]["entity_pos_x"],
                _0x1a9134 =
                  this["dynamicClickableEntityDivs"][_0x49f7ca]["entity_pos_y"],
                _0x11d68b =
                  this["dynamicClickableEntityDivs"][_0x49f7ca]["width"],
                _0x47ad7a =
                  this["dynamicClickableEntityDivs"][_0x49f7ca]["height"],
                _0x249fc8 =
                  Math["floor"](_0x249fc8 + _0x4f3831 * _0x138d0f) + "px",
                _0x1a9134 =
                  Math["floor"](_0x5c4e5c + _0x1a9134 * _0x138d0f) + "px",
                _0x11d68b = Math["floor"](_0x11d68b * _0x138d0f) + "px",
                _0x138d0f = Math["floor"](_0x47ad7a * _0x138d0f) + "px";
            ig["domHandler"]["css"](_0x16b8d9, {
              float: "left",
              position: "absolute",
              left: _0x249fc8,
              top: _0x1a9134,
              width: _0x11d68b,
              height: _0x138d0f,
              "z-index": 0x3,
            });
          }
          $("#ajaxbar")["width"](this["windowSize"]["x"]),
            $("#ajaxbar")["height"](this["windowSize"]["y"]);
        },
        resize: function () {
          this["sizeCalcs"](), this["resizeLayers"]();
        },
        reorient: function () {
          if (ig["ua"]["mobile"]) {
            var _0x473e10 = this["portraitMode"]
                ? window["innerHeight"] < window["innerWidth"]
                : window["innerHeight"] > window["innerWidth"],
              _0x12aecc = this["domHandler"]["getElementById"]("#orientate"),
              _0x78b047 = this["domHandler"]["getElementById"]("#game");
            _0x473e10
              ? (this["domHandler"]["show"](_0x12aecc),
                this["domHandler"]["hide"](_0x78b047))
              : (this["domHandler"]["show"](_0x78b047),
                this["domHandler"]["hide"](_0x12aecc));
          }
          ig["ua"]["mobile"]
            ? (this["resize"](), this["resizeAds"]())
            : this["resize"]();
        },
        resizeAds: function () {
          for (var _0x4740f8 in this["adsToResize"]) {
            var _0x22a1a9 = ig["domHandler"]["getElementById"]("#" + _0x4740f8),
              _0x415e62 = ig["domHandler"]["getElementById"](
                "#" + _0x4740f8 + "-Box"
              ),
              _0xc18503 =
                (window["innerWidth"] -
                  this["adsToResize"][_0x4740f8]["box-width"]) /
                  0x2 +
                "px",
              _0x31eeb8 =
                (window["innerHeight"] -
                  this["adsToResize"][_0x4740f8]["box-height"]) /
                  0x2 +
                "px";
            _0x22a1a9 &&
              ig["domHandler"]["css"](_0x22a1a9, {
                width: window["innerWidth"],
                height: window["innerHeight"],
              }),
              _0x415e62 &&
                ig["domHandler"]["css"](_0x415e62, {
                  left: _0xc18503,
                  top: _0x31eeb8,
                });
          }
        },
        samsungFix: function () {
          ig["ua"]["android"] &&
            !(
              4.2 >
              parseFloat(
                navigator["userAgent"]["slice"](
                  navigator["userAgent"]["indexOf"]("Android") + 0x8,
                  navigator["userAgent"]["indexOf"]("Android") + 0xb
                )
              )
            ) &&
            !(0x0 > navigator["userAgent"]["indexOf"]("GT")) &&
            !(0x0 < navigator["userAgent"]["indexOf"]("Chrome")) &&
            !(0x0 < navigator["userAgent"]["indexOf"]("Firefox")) &&
            (document["addEventListener"](
              "touchstart",
              function (_0x31f7de) {
                return _0x31f7de["preventDefault"](), !0x1;
              },
              !0x1
            ),
            document["addEventListener"](
              "touchmove",
              function (_0x2352b6) {
                return _0x2352b6["preventDefault"](), !0x1;
              },
              !0x1
            ),
            document["addEventListener"](
              "touchend",
              function (_0x2315c9) {
                return _0x2315c9["preventDefault"](), !0x1;
              },
              !0x1
            ));
        },
        eventListenerSetup: function () {
          window["addEventListener"](
            "resize",
            function () {
              this["reorient"](), window["scrollTo"](0x0, 0x1);
            }["bind"](this),
            !0x1
          ),
            window["addEventListener"](
              "orientationchange",
              function () {
                this["reorient"](), window["scrollTo"](0x0, 0x1);
              }["bind"](this),
              !0x1
            ),
            (document["ontouchmove"] = function (_0x2b7c26) {
              window["scrollTo"](0x0, 0x1), _0x2b7c26["preventDefault"]();
            });
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("plugins.handlers.api-handler")["defines"](function () {
    ig["ApiHandler"] = ig["Class"]["extend"]({
      apiAvailable: {
        MJSPreroll: function () {
          ig["ua"]["mobile"] &&
            ig["domHandler"]["JQUERYAVAILABLE"] &&
            _SETTINGS &&
            _SETTINGS["Ad"]["Mobile"]["Preroll"]["Enabled"] &&
            MobileAdInGamePreroll["Initialize"]();
        },
        MJSHeader: function () {
          ig["ua"]["mobile"] &&
            ig["domHandler"]["JQUERYAVAILABLE"] &&
            _SETTINGS["Ad"]["Mobile"]["Header"]["Enabled"] &&
            MobileAdInGameHeader["Initialize"]();
        },
        MJSFooter: function () {
          ig["ua"]["mobile"] &&
            ig["domHandler"]["JQUERYAVAILABLE"] &&
            _SETTINGS["Ad"]["Mobile"]["Footer"]["Enabled"] &&
            MobileAdInGameFooter["Initialize"]();
        },
        MJSEnd: function () {
          ig["ua"]["mobile"] &&
            ig["domHandler"]["JQUERYAVAILABLE"] &&
            _SETTINGS["Ad"]["Mobile"]["End"]["Enabled"] &&
            MobileAdInGameEnd["Initialize"]();
        },
      },
      run: function (_0x44d66a, _0x25db73) {
        if (this["apiAvailable"][_0x44d66a])
          this["apiAvailable"][_0x44d66a](_0x25db73);
      },
    });
  }),
  (ig["baked"] = !0x0),
  ig["module"]("plugins.audio.sound-player")["defines"](function () {
    SoundPlayer = ig["Class"]["extend"]({
      tagName: "SoundPlayer",
      stayMuteFlag: !0x1,
      debug: !0x1,
      init: function () {
        this["debug"] && console["log"](this["tagName"]);
      },
      play: function (_0x1e0a9a) {
        this["debug"] && console["log"]("play\x20sound\x20", _0x1e0a9a);
      },
      stop: function () {
        this["debug"] && console["log"]("stop\x20sound\x20");
      },
      volume: function () {
        this["debug"] && console["log"]("set\x20volume");
      },
      mute: function (_0x25ca7a) {
        this["debug"] && console["log"]("mute"),
          "undefined" === typeof _0x25ca7a
            ? (this["stayMuteFlag"] = !0x0)
            : _0x25ca7a && (this["stayMuteFlag"] = !0x0);
      },
      unmute: function (_0x5f0a75) {
        this["debug"] && console["log"]("unmute"),
          "undefined" === typeof _0x5f0a75
            ? (this["stayMuteFlag"] = !0x1)
            : _0x5f0a75 && (this["stayMuteFlag"] = !0x1);
      },
    });
  }),
  (ig["baked"] = !0x0),
  ig["module"]("plugins.audio.impact-music-player")
    ["requires"]("plugins.audio.sound-player")
    ["defines"](function () {
      ImpactMusicPlayer = SoundPlayer["extend"]({
        tagName: "ImpactMusicPlayer",
        bgmPlaying: !0x1,
        soundList: {},
        init: function (_0xc5cf39, _0x1123ec) {
          this["parent"](_0xc5cf39, _0x1123ec);
          for (var _0x15ef96 in _0xc5cf39)
            (this["soundList"][_0x15ef96] = _0x15ef96),
              ig["music"]["add"](
                _0xc5cf39[_0x15ef96]["path"] + ".*",
                _0x15ef96
              );
          _0x1123ec &&
            _0x1123ec["loop"] &&
            (ig["music"]["loop"] = _0x1123ec["loop"]);
        },
        play: function (_0xbd5848) {
          this["stayMuteFlag"] ||
            ((this["bgmPlaying"] = !0x0),
            "undefined" === typeof _0xbd5848
              ? ig["music"]["play"](_0xbd5848)
              : ig["music"]["play"]());
        },
        stop: function () {
          (this["bgmPlaying"] = !0x1), ig["music"]["pause"]();
        },
        volume: function (_0x1d5d04) {
          console["log"]("impactmusic:", _0x1d5d04),
            (ig["music"]["volume"] =
              0x0 > _0x1d5d04
                ? 0x0
                : isNaN(_0x1d5d04)
                ? 0x1
                : 0x1 < _0x1d5d04
                ? 0x1
                : _0x1d5d04);
        },
        getVolume: function () {
          return ig["music"]["volume"];
        },
        mute: function (_0x471936) {
          this["parent"](_0x471936), this["bgmPlaying"] && this["stop"]();
        },
        unmute: function (_0x242ef0) {
          this["parent"](_0x242ef0), this["play"]();
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("plugins.audio.impact-sound-player")
    ["requires"]("plugins.audio.sound-player")
    ["defines"](function () {
      ImpactSoundPlayer = SoundPlayer["extend"]({
        tagName: "ImpactSoundPlayer",
        soundList: {},
        init: function (_0x4efc85, _0x1a03ee) {
          this["parent"](_0x4efc85, _0x1a03ee);
          for (var _0x5f4338 in _0x4efc85) {
            var _0x1108f1 = new ig["Sound"](
              _0x4efc85[_0x5f4338]["path"] + ".*"
            );
            this["soundList"][_0x5f4338] = _0x1108f1;
          }
        },
        play: function (_0x4a9d5e) {
          this["stayMuteFlag"] ||
            ("object" === typeof _0x4a9d5e
              ? (console["log"](_0x4a9d5e + "\x20exists"), _0x4a9d5e["play"]())
              : "string" === typeof _0x4a9d5e &&
                this["soundList"][_0x4a9d5e]["play"]());
        },
        stop: function (_0x3dada1) {
          this["parent"](_0x3dada1), _0x3dada1["stop"]();
        },
        volume: function (_0x2b65f0) {
          ig["soundManager"]["volume"] =
            0x0 > _0x2b65f0
              ? 0x0
              : isNaN(_0x2b65f0)
              ? 0x1
              : 0x1 < _0x2b65f0
              ? 0x1
              : _0x2b65f0;
        },
        getVolume: function () {
          return ig["soundManager"]["volume"];
        },
        mute: function (_0x84226f) {
          this["parent"](_0x84226f), (ig["Sound"]["enabled"] = !0x1);
        },
        unmute: function (_0x464e75) {
          this["parent"](_0x464e75), (ig["Sound"]["enabled"] = !0x0);
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("plugins.audio.howler-player")
    ["requires"]("plugins.audio.sound-player")
    ["defines"](function () {
      HowlerPlayer = SoundPlayer["extend"]({
        tagName: "HowlerPlayer",
        muteFlag: !0x1,
        soundList: {},
        init: function (_0x48b777, _0x4c0adb) {
          this["parent"](_0x48b777, _0x4c0adb);
          for (var _0x24464e in _0x48b777) {
            var _0x5ab15e = _0x48b777[_0x24464e]["path"],
              _0x5ab15e = new Howl({
                src: [
                  _0x5ab15e + "." + ig["Sound"]["FORMAT"]["OGG"]["ext"],
                  _0x5ab15e + "." + ig["Sound"]["FORMAT"]["MP3"]["ext"],
                ],
              });
            this["soundList"][_0x24464e] = _0x5ab15e;
          }
        },
        play: function (_0x12d240) {
          this["stayMuteFlag"] ||
            ("object" === typeof _0x12d240
              ? _0x12d240["play"]()
              : "string" === typeof _0x12d240 &&
                this["soundList"][_0x12d240]["play"]());
        },
        stop: function (_0x2311c5) {
          this["parent"](_0x2311c5),
            "object" === typeof _0x2311c5
              ? _0x2311c5["stop"]()
              : "string" === typeof _0x2311c5 &&
                this["soundList"][_0x2311c5]["stop"]();
        },
        volume: function (_0x3266e5) {
          for (var _0x28de7a in this["soundList"]) {
            if (0x0 > _0x3266e5) {
              this["soundList"][_0x28de7a]["volume"](0x0);
              break;
            }
            isNaN(_0x3266e5)
              ? this["soundList"][_0x28de7a]["volume"](0x1)
              : 0x1 < _0x3266e5
              ? this["soundList"][_0x28de7a]["volume"](0x1)
              : this["soundList"][_0x28de7a]["volume"](_0x3266e5);
          }
        },
        getVolume: function () {
          for (var _0x27d0b1 in this["soundList"])
            return this["soundList"][_0x27d0b1]["volume"]();
        },
        mute: function (_0x1c3a23) {
          this["parent"](_0x1c3a23),
            !0x1 == this["muteFlag"] &&
              ((this["muteFlag"] = !0x0), Howler["mute"](!0x0));
        },
        unmute: function (_0x582312) {
          this["parent"](_0x582312),
            !0x0 == this["muteFlag"] &&
              ((this["muteFlag"] = !0x1), Howler["mute"](!0x1));
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("plugins.audio.howler-music-player")
    ["requires"]("plugins.audio.sound-player")
    ["defines"](function () {
      HowlerMusicPlayer = SoundPlayer["extend"]({
        tagName: "HowlerMusicPlayer",
        bgmPlaying: !0x1,
        soundList: {},
        init: function (_0x2dfff7, _0x1eb1c8) {
          this["parent"](_0x2dfff7, _0x1eb1c8);
          for (var _0x3886b8 in _0x2dfff7) {
            var _0x18e358 = _0x2dfff7[_0x3886b8]["path"],
              _0x18e358 = new Howl({
                src: [
                  _0x18e358 + "." + ig["Sound"]["FORMAT"]["OGG"]["ext"],
                  _0x18e358 + "." + ig["Sound"]["FORMAT"]["MP3"]["ext"],
                ],
                loop: !0x0,
                autoplay: !0x1,
                onend: function () {}["bind"](this),
              });
            this["soundList"][_0x3886b8] = _0x18e358;
          }
        },
        play: function (_0x1decd9) {
          if (!this["stayMuteFlag"] && !this["bgmPlaying"]) {
            if ("object" === typeof _0x1decd9)
              (this["bgmPlaying"] = !0x0), _0x1decd9["play"]();
            else {
              if ("string" === typeof _0x1decd9)
                (this["bgmPlaying"] = !0x0),
                  this["soundList"][_0x1decd9]["play"]();
              else
                for (var _0x368689 in this["soundList"]) {
                  this["soundList"][_0x368689]["play"](),
                    (this["bgmPlaying"] = !0x0);
                  break;
                }
            }
          }
        },
        stop: function (_0x52db69) {
          this["parent"](_0x52db69);
          if (this["bgmPlaying"]) {
            for (var _0x14b902 in this["soundList"])
              this["soundList"][_0x14b902]["stop"]();
            this["bgmPlaying"] = !0x1;
          }
        },
        volume: function (_0x2ddd47) {
          console["log"]("howler", _0x2ddd47);
          for (var _0x9129ed in this["soundList"]) {
            if (0x0 > _0x2ddd47) {
              this["soundList"][_0x9129ed]["volume"](0x0);
              break;
            }
            isNaN(_0x2ddd47)
              ? this["soundList"][_0x9129ed]["volume"](0x1)
              : 0x1 < _0x2ddd47
              ? this["soundList"][_0x9129ed]["volume"](0x1)
              : this["soundList"][_0x9129ed]["volume"](_0x2ddd47);
          }
        },
        getVolume: function () {
          for (var _0x147975 in this["soundList"])
            return this["soundList"][_0x147975]["volume"]();
        },
        mute: function (_0x23bb5a) {
          this["parent"](_0x23bb5a), Howler["mute"](!0x0);
        },
        unmute: function (_0x7bc71e) {
          this["parent"](_0x7bc71e), Howler["mute"](!0x1);
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("plugins.audio.jukebox-player")
    ["requires"]("plugins.audio.sound-player")
    ["defines"](function () {
      JukeboxPlayer = SoundPlayer["extend"]({
        tagName: "JukeboxPlayer",
        bgmPlaying: !0x1,
        soundList: {},
        jukeboxPlayer: null,
        pausePosition: 0x0,
        premuteVolume: 0x0,
        minVolume: 0.001,
        init: function (_0x4e4880, _0x1f7cb4) {
          this["parent"](_0x4e4880, _0x1f7cb4);
          for (var _0x171b57 in _0x4e4880) {
            this["soundList"][_0x171b57] = _0x171b57;
            var _0x459280 = _0x4e4880[_0x171b57]["path"];
            this["jukeboxPlayer"] = new jukebox["Player"]({
              resources: [
                _0x459280 + "." + ig["Sound"]["FORMAT"]["OGG"]["ext"],
                _0x459280 + "." + ig["Sound"]["FORMAT"]["MP3"]["ext"],
              ],
              autoplay: !0x1,
              spritemap: {
                music: {
                  start: _0x4e4880[_0x171b57]["startMp3"],
                  end: _0x4e4880[_0x171b57]["endMp3"],
                  loop: !0x0,
                },
              },
            });
          }
        },
        play: function () {
          this["stayMuteFlag"] ||
            ((this["bgmPlaying"] = !0x0),
            this["pausePosition"]
              ? (console["log"]("resume"),
                this["jukeboxPlayer"]["resume"](this["pausePosition"]))
              : (console["log"]("play"),
                this["jukeboxPlayer"]["play"](
                  this["jukeboxPlayer"]["settings"]["spritemap"]["music"][
                    "start"
                  ],
                  !0x0
                )),
            (this["premuteVolume"] = this["getVolume"]()));
        },
        stop: function () {
          (this["bgmPlaying"] = !0x1),
            (this["pausePosition"] = this["jukeboxPlayer"]["pause"]());
        },
        volume: function (_0x27e8d7) {
          console["log"]("jukebox:", _0x27e8d7),
            0x0 >= _0x27e8d7
              ? this["jukeboxPlayer"]["setVolume"](this["minVolume"])
              : isNaN(_0x27e8d7)
              ? this["jukeboxPlayer"]["setVolume"](0x1)
              : 0x1 < _0x27e8d7
              ? this["jukeboxPlayer"]["setVolume"](0x1)
              : this["jukeboxPlayer"]["setVolume"](_0x27e8d7);
        },
        getVolume: function () {
          return this["jukeboxPlayer"]["getVolume"]();
        },
        mute: function (_0x38b3a7) {
          this["parent"](_0x38b3a7),
            this["bgmPlaying"] &&
              (console["log"]("jukebox", this["premuteVolume"]),
              this["stayMuteFlag"] ||
                (this["premuteVolume"] = this["getVolume"]()),
              this["jukeboxPlayer"]["pause"](),
              this["jukeboxPlayer"]["setVolume"](this["minVolume"]));
        },
        unmute: function (_0x10d91a) {
          this["parent"](_0x10d91a),
            this["stayMuteFlag"] ||
              (console["log"]("jukebox", this["premuteVolume"]),
              this["jukeboxPlayer"]["setVolume"](this["premuteVolume"]),
              this["jukeboxPlayer"]["resume"]());
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("plugins.audio.webaudio-music-player")
    ["requires"]("plugins.audio.sound-player")
    ["defines"](function () {
      WebaudioMusicPlayer = SoundPlayer["extend"]({
        tagName: "WebaudioMusicPlayer",
        bgmPlaying: !0x1,
        isSupported: !0x1,
        muteFlag: !0x1,
        pausedTime: 0x0,
        webaudio: null,
        useHTML5Audio: !0x1,
        audio: null,
        inactiveAudio: null,
        codecs: null,
        _volume: 0x1,
        soundList: {},
        init: function (_0x1b30f7) {
          this["webaudio"] = {
            compatibility: {},
            gainNode: null,
            buffer: null,
            source_loop: {},
            source_once: {},
          };
          try {
            (this["AudioContext"] =
              window["AudioContext"] || window["webkitAudioContext"]),
              (this["webaudio"]["context"] = new this["AudioContext"]()),
              (this["isSupported"] = !0x0);
          } catch (_0x117bcd) {
            console["log"](
              "Web\x20Audio\x20API\x20not\x20supported\x20in\x20this\x20browser."
            ),
              (this["webaudio"] = null),
              (this["useHTML5Audio"] = !0x0);
          }
          if (this["useHTML5Audio"]) {
            if ("undefined" !== typeof Audio)
              try {
                new Audio();
              } catch (_0x5b4d48) {
                this["useHTML5Audio"] = !0x1;
              }
            else this["useHTML5Audio"] = !0x1;
          }
          this["useHTML5Audio"] &&
            ((this["audio"] = new Audio()),
            (this["isSupported"] = !0x0),
            this["initHTML5Audio"](_0x1b30f7));
          if (!this["isSupported"]) return null;
          this["webaudio"] && this["initWebAudio"](_0x1b30f7);
        },
        initWebAudio: function (_0x19171b) {
          ig["ua"]["iOS"] && this["initIOSWebAudioUnlock"](),
            (this["webaudio"]["gainNode"] =
              this["webaudio"]["context"]["createGain"]()),
            this["webaudio"]["gainNode"]["connect"](
              this["webaudio"]["context"]["destination"]
            ),
            (this["webaudio"]["gainNode"]["gain"]["value"] = this["_volume"]);
          var _0x222e6c = "start",
            _0x402d48 = "stop",
            _0x1ea2b8 = this["webaudio"]["context"]["createBufferSource"]();
          "function" !== typeof _0x1ea2b8["start"] && (_0x222e6c = "noteOn"),
            (this["webaudio"]["compatibility"]["start"] = _0x222e6c),
            "function" !== typeof _0x1ea2b8["stop"] && (_0x402d48 = "noteOff"),
            (this["webaudio"]["compatibility"]["stop"] = _0x402d48);
          for (var _0x3aa5a0 in _0x19171b) {
            (this["soundList"][_0x3aa5a0] = _0x3aa5a0),
              (_0x222e6c = _0x19171b[_0x3aa5a0]["path"]),
              (_0x19171b =
                _0x222e6c + "." + ig["Sound"]["FORMAT"]["MP3"]["ext"]);
            var _0x7cd4ea =
              _0x222e6c + "." + ig["Sound"]["FORMAT"]["OGG"]["ext"];
            ig["ua"]["mobile"]
              ? ig["ua"]["iOS"] && (_0x7cd4ea = _0x19171b)
              : ((_0x222e6c = navigator["userAgent"]["toLowerCase"]()),
                -0x1 != _0x222e6c["indexOf"]("safari") &&
                  -0x1 >= _0x222e6c["indexOf"]("chrome") &&
                  (_0x7cd4ea = _0x19171b));
            var _0x5f0181 = new XMLHttpRequest();
            _0x5f0181["open"]("GET", _0x7cd4ea, !0x0),
              (_0x5f0181["responseType"] = "arraybuffer"),
              (_0x5f0181["onload"] = function () {
                this["webaudio"]["context"]["decodeAudioData"](
                  _0x5f0181["response"],
                  function (_0x1aa05f) {
                    (this["webaudio"]["buffer"] = _0x1aa05f),
                      (this["webaudio"]["source_loop"] = {}),
                      this["bgmPlaying"] ? this["play"]() : this["stop"]();
                  }["bind"](this),
                  function () {
                    console["log"](
                      "Error\x20decoding\x20audio\x20\x22" + _0x7cd4ea + "\x22."
                    );
                  }
                );
              }["bind"](this)),
              _0x5f0181["send"]();
            break;
          }
        },
        initIOSWebAudioUnlock: function () {
          if (this["webaudio"]) {
            webaudio = this["webaudio"];
            var _0x4e603f = function () {
              var _0x57baf1 = webaudio["context"],
                _0x5ad92c = _0x57baf1["createBuffer"](0x1, 0x1, 0x5622),
                _0x106ced = _0x57baf1["createBufferSource"]();
              (_0x106ced["buffer"] = _0x5ad92c),
                _0x106ced["connect"](_0x57baf1["destination"]),
                "undefined" === typeof _0x106ced["start"]
                  ? _0x106ced["noteOn"](0x0)
                  : _0x106ced["start"](0x0),
                setTimeout(function () {
                  (_0x106ced["playbackState"] === _0x106ced["PLAYING_STATE"] ||
                    _0x106ced["playbackState"] ===
                      _0x106ced["FINISHED_STATE"]) &&
                    window["removeEventListener"]("touchend", _0x4e603f, !0x1);
                }, 0x0);
            };
            window["addEventListener"]("touchend", _0x4e603f, !0x1);
          }
        },
        initHTML5Audio: function (_0x512bda) {
          if (this["useHTML5Audio"] && this["audio"]) {
            var _0x5ba24d = this["audio"];
            (this["codecs"] = {}),
              (this["codecs"] = {
                mp3: !!_0x5ba24d["canPlayType"]("audio/mpeg;")["replace"](
                  /^no$/,
                  ""
                ),
                opus: !!_0x5ba24d["canPlayType"](
                  "audio/ogg;\x20codecs=\x22opus\x22"
                )["replace"](/^no$/, ""),
                ogg: !!_0x5ba24d["canPlayType"](
                  "audio/ogg;\x20codecs=\x22vorbis\x22"
                )["replace"](/^no$/, ""),
                wav: !!_0x5ba24d["canPlayType"](
                  "audio/wav;\x20codecs=\x221\x22"
                )["replace"](/^no$/, ""),
                aac: !!_0x5ba24d["canPlayType"]("audio/aac;")["replace"](
                  /^no$/,
                  ""
                ),
                m4a: !!(_0x5ba24d["canPlayType"]("audio/x-m4a;") ||
                  _0x5ba24d["canPlayType"]("audio/m4a;") ||
                  _0x5ba24d["canPlayType"]("audio/aac;"))["replace"](
                  /^no$/,
                  ""
                ),
                mp4: !!(_0x5ba24d["canPlayType"]("audio/x-mp4;") ||
                  _0x5ba24d["canPlayType"]("audio/mp4;") ||
                  _0x5ba24d["canPlayType"]("audio/aac;"))["replace"](
                  /^no$/,
                  ""
                ),
                weba: !!_0x5ba24d["canPlayType"](
                  "audio/webm;\x20codecs=\x22vorbis\x22"
                )["replace"](/^no$/, ""),
              }),
              (this["is"] = {
                ff: Boolean(
                  null != window["mozInnerScreenX"] &&
                    /firefox/["test"](navigator["userAgent"]["toLowerCase"]())
                ),
                ie: Boolean(document["all"] && !window["opera"]),
                opera: Boolean(window["opera"]),
                chrome: Boolean(window["chrome"]),
                safari: Boolean(
                  !window["chrome"] &&
                    /safari/["test"](navigator["userAgent"]["toLowerCase"]()) &&
                    window["getComputedStyle"] &&
                    !window["globalStorage"] &&
                    !window["opera"]
                ),
              }),
              (this["playDelay"] = -0x3c),
              (this["stopDelay"] = 0x1e),
              this["is"]["chrome"] && (this["playDelay"] = -0x19),
              this["is"]["chrome"] && (this["stopDelay"] = 0x19),
              this["is"]["ff"] && (this["playDelay"] = -0x19),
              this["is"]["ff"] && (this["stopDelay"] = 0x55),
              this["is"]["opera"] && (this["playDelay"] = 0x5),
              this["is"]["opera"] && (this["stopDelay"] = 0x0);
            for (var _0x2628dc in _0x512bda) {
              this["soundList"][_0x2628dc] = _0x2628dc;
              var _0x5920e8 = _0x512bda[_0x2628dc]["path"],
                _0x5ba24d =
                  _0x5920e8 + "." + ig["Sound"]["FORMAT"]["OGG"]["ext"],
                _0x5920e8 =
                  _0x5920e8 + "." + ig["Sound"]["FORMAT"]["MP3"]["ext"],
                _0x5c9408 = null;
              this["codecs"][
                ig["Sound"]["FORMAT"]["OGG"]["ext"]["toLowerCase"]()
              ]
                ? (_0x5c9408 = _0x5ba24d)
                : this["codecs"][
                    ig["Sound"]["FORMAT"]["MP3"]["ext"]["toLowerCase"]()
                  ] && (_0x5c9408 = _0x5920e8);
              if (_0x5c9408) {
                ig["ua"]["mobile"]
                  ? ig["ua"]["iOS"] && (_0x5c9408 = _0x5920e8)
                  : ((_0x512bda = navigator["userAgent"]["toLowerCase"]()),
                    -0x1 != _0x512bda["indexOf"]("safari") &&
                      -0x1 >= _0x512bda["indexOf"]("chrome") &&
                      (_0x5c9408 = _0x5920e8)),
                  this["audio"]["addEventListener"](
                    "error",
                    function () {
                      this["audio"]["error"] &&
                        0x4 === this["audio"]["error"]["code"] &&
                        (this["isSupported"] = !0x1);
                    },
                    !0x1
                  ),
                  (this["audio"]["src"] = _0x5c9408),
                  (this["audio"]["_pos"] = 0x0),
                  (this["audio"]["preload"] = "auto"),
                  (this["audio"]["volume"] = this["_volume"]),
                  (this["inactiveAudio"] = new Audio()),
                  (this["inactiveAudio"]["src"] = _0x5c9408),
                  (this["inactiveAudio"]["_pos"] = 0x0),
                  (this["inactiveAudio"]["preload"] = "auto"),
                  (this["inactiveAudio"]["volume"] = this["_volume"]),
                  this["inactiveAudio"]["load"]();
                var _0x1a6c34 = function () {
                  (this["_duration"] = this["audio"]["duration"]),
                    this["_loaded"] || (this["_loaded"] = !0x0),
                    this["bgmPlaying"] ? this["play"]() : this["stop"](),
                    this["audio"]["removeEventListener"](
                      "canplaythrough",
                      _0x1a6c34,
                      !0x1
                    );
                }["bind"](this);
                this["audio"]["addEventListener"](
                  "canplaythrough",
                  _0x1a6c34,
                  !0x1
                ),
                  this["audio"]["load"]();
                break;
              }
            }
          }
        },
        play: function (_0x1ccb13) {
          if (this["isSupported"]) {
            if (((this["bgmPlaying"] = !0x0), this["webaudio"])) {
              if (this["webaudio"]["buffer"]) {
                if (
                  !this["muteFlag"] &&
                  ((this["bgmPlaying"] = !0x0),
                  !this["webaudio"]["source_loop"]["_playing"])
                ) {
                  (this["webaudio"]["source_loop"] =
                    this["webaudio"]["context"]["createBufferSource"]()),
                    (this["webaudio"]["source_loop"]["buffer"] =
                      this["webaudio"]["buffer"]),
                    (this["webaudio"]["source_loop"]["loop"] = !0x0),
                    this["webaudio"]["source_loop"]["connect"](
                      this["webaudio"]["gainNode"]
                    ),
                    isNaN(_0x1ccb13) &&
                      ((_0x1ccb13 = 0x0),
                      this["pausedTime"] && (_0x1ccb13 = this["pausedTime"])),
                    (this["webaudio"]["source_loop"]["_startTime"] =
                      this["webaudio"]["context"]["currentTime"]);
                  if ("noteOn" === this["webaudio"]["compatibility"]["start"])
                    (this["webaudio"]["source_once"] =
                      this["webaudio"]["context"]["createBufferSource"]()),
                      (this["webaudio"]["source_once"]["buffer"] =
                        this["webaudio"]["buffer"]),
                      this["webaudio"]["source_once"]["connect"](
                        this["webaudio"]["gainNode"]
                      ),
                      this["webaudio"]["source_once"]["noteGrainOn"](
                        0x0,
                        _0x1ccb13,
                        this["webaudio"]["buffer"]["duration"] - _0x1ccb13
                      ),
                      this["webaudio"]["source_loop"][
                        this["webaudio"]["compatibility"]["start"]
                      ](
                        this["webaudio"]["context"]["currentTime"] +
                          (this["webaudio"]["buffer"]["duration"] - _0x1ccb13)
                      );
                  else
                    this["webaudio"]["source_loop"][
                      this["webaudio"]["compatibility"]["start"]
                    ](0x0, _0x1ccb13);
                  this["webaudio"]["source_loop"]["_playing"] = !0x0;
                }
              } else this["bgmPlaying"] = !0x0;
            } else {
              if (this["audio"]) {
                var _0x37fe44 = this["audio"];
                if (!this["muteFlag"]) {
                  (this["bgmPlaying"] = !0x0),
                    isNaN(_0x1ccb13) &&
                      ((_0x1ccb13 = 0x0),
                      this["pausedTime"] && (_0x1ccb13 = this["pausedTime"]));
                  var _0x554965 = this["_duration"] - _0x1ccb13;
                  this["_onEndTimer"] &&
                    (clearTimeout(this["_onEndTimer"]),
                    (this["_onEndTimer"] = null)),
                    (this["_onEndTimer"] = setTimeout(
                      function () {
                        (this["audio"]["currentTime"] = 0x0),
                          this["audio"]["pause"](),
                          (this["pausedTime"] = 0x0);
                        if (this["inactiveAudio"]) {
                          var _0x122110 = this["audio"];
                          (this["audio"] = this["inactiveAudio"]),
                            (this["inactiveAudio"] = _0x122110);
                        }
                        this["play"]();
                      }["bind"](this),
                      0x3e8 * _0x554965 + this["playDelay"]
                    )),
                    0x4 === _0x37fe44["readyState"] ||
                    (!_0x37fe44["readyState"] && navigator["isCocoonJS"])
                      ? ((_0x37fe44["readyState"] = 0x4),
                        (_0x37fe44["currentTime"] = _0x1ccb13),
                        (_0x37fe44["muted"] =
                          this["muteFlag"] || _0x37fe44["muted"]),
                        (_0x37fe44["volume"] = this["_volume"]),
                        setTimeout(function () {
                          _0x37fe44["play"]();
                        }, 0x0))
                      : (clearTimeout(this["_onEndTimer"]),
                        (this["_onEndTimer"] = null),
                        (function () {
                          var _0x2eff3a = function () {
                            this["play"](),
                              _0x37fe44["removeEventListener"](
                                "canplaythrough",
                                _0x2eff3a,
                                !0x1
                              );
                          }["bind"](this);
                          _0x37fe44["addEventListener"](
                            "canplaythrough",
                            _0x2eff3a,
                            !0x1
                          );
                        })());
                }
              }
            }
          }
        },
        stop: function () {
          this["bgmPlaying"] = !0x1;
          if (this["isSupported"]) {
            if (this["webaudio"]) {
              if (
                this["webaudio"]["source_loop"]["_playing"] &&
                (this["webaudio"]["source_loop"][
                  this["webaudio"]["compatibility"]["stop"]
                ](0x0),
                (this["webaudio"]["source_loop"]["_playing"] = !0x1),
                (this["pausedTime"] +=
                  this["webaudio"]["context"]["currentTime"] -
                  this["webaudio"]["source_loop"]["_startTime"]),
                (this["pausedTime"] %=
                  this["webaudio"]["source_loop"]["buffer"]["duration"]),
                (this["webaudio"]["source_loop"]["_startTime"] = 0x0),
                "noteOn" === this["webaudio"]["compatibility"]["start"])
              )
                this["webaudio"]["source_once"][
                  this["webaudio"]["compatibility"]["stop"]
                ](0x0);
            } else {
              if (this["audio"]) {
                var _0x287bbc = this["audio"];
                (this["pausedTime"] = _0x287bbc["currentTime"]),
                  (_0x287bbc["currentTime"] = 0x0),
                  _0x287bbc["pause"](),
                  clearTimeout(this["_onEndTimer"]),
                  (this["_onEndTimer"] = null);
              }
            }
          }
        },
        volume: function (_0xb19920) {
          this["isSupported"] &&
            ((this["_volume"] = _0xb19920),
            0x0 > this["_volume"]
              ? (this["_volume"] = 0x0)
              : 0x1 < this["_volume"] && (this["_volume"] = 0x1),
            this["webaudio"]
              ? this["webaudio"]["gainNode"] &&
                (this["webaudio"]["gainNode"]["gain"]["value"] =
                  this["_volume"])
              : this["audio"] &&
                ((this["audio"]["volume"] = this["_volume"]),
                this["inactiveAudio"] &&
                  (this["inactiveAudio"]["volume"] = this["_volume"])));
        },
        getVolume: function () {
          return !this["isSupported"] ? 0x0 : this["_volume"];
        },
        mute: function (_0x5a246d) {
          this["parent"](_0x5a246d),
            !0x1 == this["muteFlag"] &&
              ((this["muteFlag"] = !0x0),
              this["bgmPlaying"] &&
                (this["stop"](), (this["bgmPlaying"] = !0x0)));
        },
        unmute: function (_0x4fbf24) {
          this["parent"](_0x4fbf24),
            !this["stayMuteFlag"] &&
              !0x0 == this["muteFlag"] &&
              ((this["muteFlag"] = !0x1), this["bgmPlaying"] && this["play"]());
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("plugins.audio.sound-info")["defines"](function () {
    SoundInfo = ig["Class"]["extend"]({
      FORMATS: { OGG: ".ogg", MP3: ".mp3" },
      sfx: {
        kittyopeningSound: { path: "media/audio/opening/kittyopening" },
        staticSound: { path: "media/audio/play/static" },
        openingSound: { path: "media/audio/opening/opening" },
        click: { path: "media/audio/click" },
        click2: { path: "media/audio/click2" },
        cardplay1: { path: "media/audio/cardplay1" },
        cardplay2: { path: "media/audio/cardplay2" },
        cardplay3: { path: "media/audio/cardplay3" },
        cardplay4: { path: "media/audio/cardplay4" },
        cardshove: { path: "media/audio/cardshove" },
        breaking: { path: "media/audio/breaking" },
        win: { path: "media/audio/win" },
        lose: { path: "media/audio/lose" },
        queen: { path: "media/audio/queen" },
      },
      bgm: {},
    });
  }),
  (ig["baked"] = !0x0),
  ig["module"]("plugins.audio.sound-handler")
    ["requires"](
      "plugins.audio.impact-music-player",
      "plugins.audio.impact-sound-player",
      "plugins.audio.howler-player",
      "plugins.audio.howler-music-player",
      "plugins.audio.jukebox-player",
      "plugins.audio.webaudio-music-player",
      "plugins.audio.sound-info"
    )
    ["defines"](function () {
      ig["SoundHandler"] = ig["Class"]["extend"]({
        bgmPlayer: null,
        sfxPlayer: null,
        focusBlurMute: !0x1,
        soundInfo: new SoundInfo(),
        init: function () {
          console["log"]("Initiating\x20sound\x20handler"),
            this["initWindowHandler"](),
            ig["ua"]["mobile"]
              ? (this["initPowerButtonFix"](),
                (this["bgmPlayer"] = new WebaudioMusicPlayer(
                  this["soundInfo"]["bgm"],
                  { loop: !0x0 }
                )),
                this["bgmPlayer"]["isSupported"] ||
                  (this["bgmPlayer"] = new JukeboxPlayer(
                    this["soundInfo"]["bgm"],
                    { loop: !0x0 }
                  )))
              : ((this["bgmPlayer"] = new WebaudioMusicPlayer(
                  this["soundInfo"]["bgm"],
                  { loop: !0x0 }
                )),
                this["bgmPlayer"]["isSupported"] ||
                  (this["bgmPlayer"] = new ImpactMusicPlayer(
                    this["soundInfo"]["bgm"],
                    { loop: !0x0 }
                  ))),
            (this["sfxPlayer"] = new HowlerPlayer(this["soundInfo"]["sfx"]));
        },
        checkBGM: function () {
          return this["bgmPlayer"]["stayMuteFlag"];
        },
        checkSFX: function () {
          return this["sfxPlayer"]["stayMuteFlag"];
        },
        muteSFX: function (_0x2b7404) {
          this["sfxPlayer"] && this["sfxPlayer"]["mute"](_0x2b7404);
        },
        muteBGM: function (_0x15c8b3) {
          this["bgmPlayer"] && this["bgmPlayer"]["mute"](_0x15c8b3);
        },
        unmuteSFX: function (_0x44c688) {
          this["sfxPlayer"] && this["sfxPlayer"]["unmute"](_0x44c688);
        },
        unmuteBGM: function (_0x4dd181) {
          this["bgmPlayer"] && this["bgmPlayer"]["unmute"](_0x4dd181);
        },
        muteAll: function (_0x6bb012) {
          this["muteSFX"](_0x6bb012), this["muteBGM"](_0x6bb012);
        },
        unmuteAll: function (_0x27daed) {
          this["unmuteSFX"](_0x27daed), this["unmuteBGM"](_0x27daed);
        },
        forceMuteAll: function () {
          this["focusBlurMute"] || this["muteAll"](!0x1),
            (this["focusBlurMute"] = !0x0);
        },
        forceUnMuteAll: function () {
          this["focusBlurMute"] &&
            (this["unmuteAll"](!0x1), (this["focusBlurMute"] = !0x1));
        },
        initWindowHandler: function () {
          "true" === ig["domHandler"]["getQueryVariable"]("webview")
            ? ($(window)["focus"](function () {
                ig["soundHandler"] && ig["soundHandler"]["forceUnMuteAll"]();
              }),
              $(window)["blur"](function () {
                ig["soundHandler"] && ig["soundHandler"]["forceMuteAll"]();
              }))
            : ((window["onfocus"] = function () {
                ig["soundHandler"] && ig["soundHandler"]["forceUnMuteAll"]();
              }),
              (window["onblur"] = function () {
                ig["soundHandler"] && ig["soundHandler"]["forceMuteAll"]();
              }));
        },
        initPowerButtonFix: function () {
          var _0x5d9fb3 = this["getHiddenProp"]();
          _0x5d9fb3 &&
            ((_0x5d9fb3 =
              _0x5d9fb3["replace"](/[H|h]idden/, "") + "visibilitychange"),
            document["addEventListener"](_0x5d9fb3, this["visChange"])),
            window["addEventListener"](
              "pagehide",
              function () {
                ig["soundHandler"] && ig["soundHandler"]["forceMuteAll"]();
              },
              !0x1
            ),
            window["addEventListener"](
              "pageshow",
              function () {
                ig["soundHandler"] && ig["soundHandler"]["forceUnMuteAll"]();
              },
              !0x1
            );
        },
        getHiddenProp: function () {
          var _0x4efddb = ["webkit", "moz", "ms", "o"];
          if ("hidden" in document) return "hidden";
          for (
            var _0x411b2f = 0x0;
            _0x411b2f < _0x4efddb["length"];
            _0x411b2f++
          )
            if (_0x4efddb[_0x411b2f] + "Hidden" in document)
              return _0x4efddb[_0x411b2f] + "Hidden";
          return null;
        },
        isHidden: function () {
          var _0x1c76eb = this["getHiddenProp"]();
          return !_0x1c76eb ? !0x1 : document[_0x1c76eb];
        },
        visChange: function () {
          ig["soundHandler"]["isHidden"]()
            ? ig["soundHandler"] && ig["soundHandler"]["forceMuteAll"]()
            : ig["soundHandler"] && ig["soundHandler"]["forceUnMuteAll"]();
        },
        saveVolume: function () {
          this["sfxPlayer"] &&
            ig["game"]["io"]["storageSet"](
              "soundVolume",
              this["sfxPlayer"]["getVolume"]()
            ),
            this["bgmPlayer"] &&
              ig["game"]["io"]["storageSet"](
                "musicVolume",
                this["bgmPlayer"]["getVolume"]()
              );
        },
        forceLoopBGM: function () {
          var _0x278289;
          if (
            !this["focusBlurMute"] &&
            this["bgmPlayer"]["bgmPlaying"] &&
            this["bgmPlayer"]
          ) {
            var _0x1916db = this["bgmPlayer"]["jukeboxPlayer"];
            if (_0x1916db) {
              null != window["mozInnerScreenX"] &&
                /firefox/["test"](navigator["userAgent"]["toLowerCase"]()),
                (_0x278289 = Boolean(window["chrome"])),
                !window["chrome"] &&
                  /safari/["test"](navigator["userAgent"]["toLowerCase"]());
              var _0x568bbe = 0.1;
              ig["ua"]["mobile"] &&
                ((_0x568bbe = 0.115),
                ig["ua"]["android"] &&
                  ((_0x568bbe = 0.45), _0x278289 && (_0x568bbe = 0.3))),
                _0x1916db["settings"]["spritemap"]["music"] &&
                  ((_0x278289 =
                    _0x1916db["settings"]["spritemap"]["music"]["end"] -
                    _0x568bbe),
                  _0x1916db["getCurrentTime"]() >= _0x278289 &&
                    ((_0x278289 =
                      _0x1916db["settings"]["spritemap"]["music"]["start"]),
                    ig["ua"]["android"]
                      ? this["forcelooped"] ||
                        (_0x1916db["play"](_0x278289, !0x0),
                        (this["forcelooped"] = !0x0),
                        setTimeout(function () {
                          ig["soundHandler"]["forcelooped"] = !0x1;
                        }, _0x568bbe))
                      : _0x1916db["setCurrentTime"](_0x278289)));
            } else
              "ImpactMusicPlayer" == this["bgmPlayer"]["tagName"] &&
                (null != window["mozInnerScreenX"] &&
                  /firefox/["test"](navigator["userAgent"]["toLowerCase"]()),
                (_0x278289 = Boolean(window["chrome"])),
                !window["chrome"] &&
                  /safari/["test"](navigator["userAgent"]["toLowerCase"]()),
                (_0x568bbe = 0.1),
                ig["ua"]["mobile"] &&
                  ((_0x568bbe = 0.115),
                  ig["ua"]["android"] &&
                    ((_0x568bbe = 0.45), _0x278289 && (_0x568bbe = 0.3))),
                (_0x1916db = 0x0),
                "mp3" == ig["soundManager"]["format"]["ext"] &&
                  (_0x1916db = 0.05),
                ig["music"]["currentTrack"] &&
                  ((_0x278289 =
                    ig["music"]["currentTrack"]["duration"] - _0x568bbe),
                  ig["music"]["currentTrack"]["currentTime"] >= _0x278289 &&
                    (ig["ua"]["android"]
                      ? this["forcelooped"] ||
                        (ig["music"]["currentTrack"]["pause"](),
                        (ig["music"]["currentTrack"]["currentTime"] =
                          _0x1916db),
                        ig["music"]["currentTrack"]["play"](),
                        (this["forcelooped"] = !0x0),
                        setTimeout(function () {
                          ig["soundHandler"]["forcelooped"] = !0x1;
                        }, _0x568bbe))
                      : (ig["music"]["currentTrack"]["currentTime"] =
                          _0x1916db))));
          }
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("plugins.handlers.visibility-handler")
    ["requires"]("plugins.audio.sound-handler")
    ["defines"](function () {
      ig["VisibilityHandler"] = ig["Class"]["extend"]({
        version: "1.0.2",
        config: {
          allowResumeWithoutFocus: {
            desktop: !0x0,
            mobile: { kaios: !0x1, default: !0x0 },
          },
          handlerDelay: { desktop: 0x0, mobile: { kaios: 0x0, default: 0x0 } },
          autoFocusOnResume: {
            desktop: !0x0,
            mobile: { kaios: !0x1, default: !0x0 },
          },
          autoFocusAfterResume: {
            desktop: !0x0,
            mobile: { kaios: !0x1, default: !0x0 },
          },
        },
        browserPrefixes: ["o", "ms", "moz", "webkit"],
        browserPrefix: null,
        hiddenPropertyName: null,
        visibilityEventName: null,
        visibilityStateName: null,
        isShowingOverlay: !0x1,
        isFocused: !0x1,
        isPaused: !0x1,
        init: function () {
          this["initVisibilityHandler"](),
            this["initFocusHandler"](),
            this["initPageTransitionHandler"](),
            (ig["visibilityHandler"] = this);
        },
        pauseHandler: function () {
          ig["game"] && ig["game"]["pauseGame"](),
            ig["soundHandler"] && ig["soundHandler"]["forceMuteAll"]();
        },
        resumeHandler: function () {
          ig["game"] && ig["game"]["resumeGame"](),
            ig["soundHandler"] && ig["soundHandler"]["forceUnMuteAll"]();
        },
        initVisibilityHandler: function () {
          (this["browserPrefix"] = this["getBrowserPrefix"]()),
            (this["hiddenPropertyName"] = this["getHiddenPropertyName"](
              this["browserPrefix"]
            )),
            (this["visibilityEventName"] = this["getVisibilityEventName"](
              this["browserPrefix"]
            )),
            (this["visibilityStateName"] = this["getVisibilityStateName"](
              this["browserPrefix"]
            )),
            this["visibilityEventName"] &&
              document["addEventListener"](
                this["visibilityEventName"],
                this["onChange"]["bind"](this),
                !0x0
              );
        },
        initFocusHandler: function () {
          window["addEventListener"](
            "blur",
            this["onChange"]["bind"](this),
            !0x0
          ),
            document["addEventListener"](
              "blur",
              this["onChange"]["bind"](this),
              !0x0
            ),
            document["addEventListener"](
              "focusout",
              this["onChange"]["bind"](this),
              !0x0
            ),
            window["addEventListener"](
              "focus",
              this["onChange"]["bind"](this),
              !0x0
            ),
            document["addEventListener"](
              "focus",
              this["onChange"]["bind"](this),
              !0x0
            ),
            document["addEventListener"](
              "focusin",
              this["onChange"]["bind"](this),
              !0x0
            );
        },
        initPageTransitionHandler: function () {
          window["addEventListener"](
            "pagehide",
            this["onChange"]["bind"](this),
            !0x0
          ),
            window["addEventListener"](
              "pageshow",
              this["onChange"]["bind"](this),
              !0x0
            );
        },
        getBrowserPrefix: function () {
          var _0xa45d16 = null;
          return (
            this["browserPrefixes"]["forEach"](
              function (_0x5dcc7d) {
                if (this["getHiddenPropertyName"](_0x5dcc7d) in document)
                  return (_0xa45d16 = _0x5dcc7d);
              }["bind"](this)
            ),
            _0xa45d16
          );
        },
        getHiddenPropertyName: function (_0x2172b6) {
          return _0x2172b6 ? _0x2172b6 + "Hidden" : "hidden";
        },
        getVisibilityEventName: function (_0x49b697) {
          return (_0x49b697 ? _0x49b697 : "") + "visibilitychange";
        },
        getVisibilityStateName: function (_0x27171b) {
          return _0x27171b ? _0x27171b + "VisibilityState" : "visibilityState";
        },
        hasView: function () {
          return !(
            document[this["hiddenPropertyName"]] ||
            "visible" !== document[this["visibilityStateName"]]
          );
        },
        hasFocus: function () {
          return document["hasFocus"]() || this["isFocused"];
        },
        onOverlayShow: function () {
          this["systemPaused"](), (this["isShowingOverlay"] = !0x0);
        },
        onOverlayHide: function () {
          (this["isShowingOverlay"] = !0x1), this["systemResumed"]();
        },
        systemPaused: function () {
          if (this["isPaused"]) return !0x1;
          return this["pauseHandler"](), (this["isPaused"] = !0x0);
        },
        systemResumed: function () {
          if (
            !this["isPaused"] ||
            !this["hasView"]() ||
            this["isShowingOverlay"]
          )
            return !0x1;
          if (!this["hasFocus"]()) {
            if (ig["ua"]["mobile"]) {
              if (this["isKaiOS"]()) {
                if (
                  !this["config"]["allowResumeWithoutFocus"]["mobile"]["kaios"]
                )
                  return !0x1;
              } else {
                if (
                  !this["config"]["allowResumeWithoutFocus"]["mobile"][
                    "default"
                  ]
                )
                  return !0x1;
              }
            } else {
              if (!this["config"]["allowResumeWithoutFocus"]["desktop"])
                return !0x1;
            }
          }
          return (
            this["focusOnResume"](),
            this["resumeHandler"](),
            this["focusAfterResume"](),
            (this["isPaused"] = !0x1),
            !0x0
          );
        },
        isKaiOS: function () {
          return /KAIOS/["test"](navigator["userAgent"]) || !0x1;
        },
        focusOnResume: function () {
          return ig["ua"]["mobile"]
            ? this["isKaiOS"]()
              ? this["config"]["autoFocusOnResume"]["mobile"]["kaios"]
              : this["config"]["autoFocusOnResume"]["mobile"]["default"]
            : this["config"]["autoFocusOnResume"]["desktop"];
        },
        focusAfterResume: function () {
          return ig["ua"]["mobile"]
            ? this["isKaiOS"]()
              ? this["config"]["autoFocusAfterResume"]["mobile"]["kaios"]
              : this["config"]["autoFocusAfterResume"]["mobile"]["default"]
            : this["config"]["autoFocusAfterResume"]["desktop"];
        },
        focus: function (_0x5227e0) {
          window["focus"] && _0x5227e0 && window["focus"]();
        },
        handleDelayedEvent: function (_0x35d137) {
          if (
            !this["hasView"]() ||
            "pause" === _0x35d137["type"] ||
            "pageHide" === _0x35d137["type"] ||
            "blur" === _0x35d137["type"] ||
            "focusout" === _0x35d137["type"]
          ) {
            if (
              "blur" === _0x35d137["type"] ||
              "focusout" === _0x35d137["type"]
            )
              this["isFocused"] = !0x1;
            return this["systemPaused"](_0x35d137);
          }
          if ("focus" === _0x35d137["type"] || "focusin" === _0x35d137["type"])
            this["isFocused"] = !0x0;
          return this["systemResumed"](_0x35d137);
        },
        startDelayedEventHandler: function (_0x56c7ca) {
          ig["ua"]["mobile"]
            ? this["isKaiOS"]()
              ? 0x0 < this["config"]["handlerDelay"]["mobile"]["kaios"]
                ? window["setTimeout"](
                    function (_0x416ebf) {
                      this["handleDelayedEvent"](_0x416ebf);
                    }["bind"](this, _0x56c7ca),
                    this["config"]["handlerDelay"]["mobile"]
                  )
                : this["handleDelayedEvent"](_0x56c7ca)
              : 0x0 < this["config"]["handlerDelay"]["mobile"]["default"]
              ? window["setTimeout"](
                  function (_0x4d624a) {
                    this["handleDelayedEvent"](_0x4d624a);
                  }["bind"](this, _0x56c7ca),
                  this["config"]["handlerDelay"]["mobile"]
                )
              : this["handleDelayedEvent"](_0x56c7ca)
            : 0x0 < this["config"]["handlerDelay"]["desktop"]
            ? window["setTimeout"](
                function (_0x1cb4df) {
                  this["handleDelayedEvent"](_0x1cb4df);
                }["bind"](this, _0x56c7ca),
                this["config"]["handlerDelay"]["desktop"]
              )
            : this["handleDelayedEvent"](_0x56c7ca);
        },
        onChange: function (_0x1bf533) {
          this["startDelayedEventHandler"](_0x1bf533);
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("plugins.io.storage")["defines"](function () {
    ig["Storage"] = ig["Class"]["extend"]({
      staticInstantiate: function () {
        return !ig["Storage"]["instance"] ? null : ig["Storage"]["instance"];
      },
      init: function () {
        ig["Storage"]["instance"] = this;
      },
      isCapable: function () {
        return "undefined" !== typeof window["localStorage"];
      },
      isSet: function (_0x3ee624) {
        return null !== this["get"](_0x3ee624);
      },
      initUnset: function (_0x17fb28, _0x43a460) {
        null === this["get"](_0x17fb28) && this["set"](_0x17fb28, _0x43a460);
      },
      get: function (_0xe6fed6) {
        if (!this["isCapable"]()) return null;
        try {
          return JSON["parse"](localStorage["getItem"](_0xe6fed6));
        } catch (_0x24374f) {
          return window["localStorage"]["getItem"](_0xe6fed6);
        }
      },
      getInt: function (_0x4cf9c1) {
        return ~~this["get"](_0x4cf9c1);
      },
      getFloat: function (_0x1dbbce) {
        return parseFloat(this["get"](_0x1dbbce));
      },
      getBool: function (_0x3e1cd2) {
        return !!this["get"](_0x3e1cd2);
      },
      key: function (_0x382e8b) {
        return this["isCapable"]()
          ? window["localStorage"]["key"](_0x382e8b)
          : null;
      },
      set: function (_0x468744, _0x5682f1) {
        if (!this["isCapable"]()) return null;
        try {
          window["localStorage"]["setItem"](
            _0x468744,
            JSON["stringify"](_0x5682f1)
          );
        } catch (_0x39bb42) {
          console["log"](_0x39bb42);
        }
      },
      setHighest: function (_0x13b61e, _0x41124e) {
        _0x41124e > this["getFloat"](_0x13b61e) &&
          this["set"](_0x13b61e, _0x41124e);
      },
      remove: function (_0x1e4090) {
        if (!this["isCapable"]()) return null;
        window["localStorage"]["removeItem"](_0x1e4090);
      },
      clear: function () {
        if (!this["isCapable"]()) return null;
        window["localStorage"]["clear"]();
      },
    });
  }),
  (ig["baked"] = !0x0),
  ig["module"]("plugins.io.mouse")["defines"](function () {
    Mouse = ig["Class"]["extend"]({
      bindings: { click: [ig["KEY"]["MOUSE1"]] },
      init: function () {
        ig["input"]["initMouse"]();
        for (var _0x147b34 in this["bindings"]) {
          this[_0x147b34] = _0x147b34;
          for (
            var _0x3022c7 = 0x0;
            _0x3022c7 < this["bindings"][_0x147b34]["length"];
            _0x3022c7++
          )
            ig["input"]["bind"](
              this["bindings"][_0x147b34][_0x3022c7],
              _0x147b34
            );
        }
      },
      getPos: function () {
        if (ig["ua"]["mobile"])
          var _0x5079c6 =
              ig["input"]["mouse"]["x"] / ig["sizeHandler"]["sizeRatio"]["x"],
            _0x27d6a4 =
              ig["input"]["mouse"]["y"] / ig["sizeHandler"]["sizeRatio"]["y"];
        else
          (_0x5079c6 = ig["input"]["mouse"]["x"]),
            (_0x27d6a4 = ig["input"]["mouse"]["y"]);
        return new Vector2(_0x5079c6, _0x27d6a4);
      },
    });
  }),
  (ig["baked"] = !0x0),
  ig["module"]("plugins.io.keyboard")["defines"](function () {
    Keyboard = ig["Class"]["extend"]({
      bindings: {
        jump: [ig["KEY"]["W"], ig["KEY"]["UP_ARROW"]],
        moveright: [ig["KEY"]["D"], ig["KEY"]["RIGHT_ARROW"]],
        moveleft: [ig["KEY"]["A"], ig["KEY"]["LEFT_ARROW"]],
        shoot: [ig["KEY"]["S"], ig["KEY"]["DOWN_ARROW"], ig["KEY"]["SPACE"]],
      },
      init: function () {
        for (var _0x303f37 in this["bindings"]) {
          this[_0x303f37] = _0x303f37;
          for (
            var _0xcd8cd0 = 0x0;
            _0xcd8cd0 < this["bindings"][_0x303f37]["length"];
            _0xcd8cd0++
          )
            ig["input"]["bind"](
              this["bindings"][_0x303f37][_0xcd8cd0],
              _0x303f37
            );
        }
      },
    });
  }),
  (ig["baked"] = !0x0),
  ig["module"]("plugins.io.gamepad-input")["defines"](function () {
    (ig["PADKEY"] = {
      BUTTON_0: 0x0,
      PADBUTTON_1: 0x1,
      BUTTON_2: 0x2,
      BUTTON_3: 0x3,
      BUTTON_LEFT_BUMPER: 0x4,
      BUTTON_RIGHT_BUMPER: 0x5,
      BUTTON_LEFT_TRIGGER: 0x6,
      BUTTON_RIGHT_TRIGGER: 0x7,
      BUTTON_LEFT_JOYSTICK: 0xa,
      BUTTON_RIGHT_JOYSTICK: 0xb,
      BUTTON_DPAD_UP: 0xc,
      BUTTON_DPAD_DOWN: 0xd,
      BUTTON_DPAD_LEFT: 0xe,
      BUTTON_DPAD_RIGHT: 0xf,
      BUTTON_MENU: 0x10,
      AXIS_LEFT_JOYSTICK_X: 0x0,
      AXIS_LEFT_JOYSTICK_Y: 0x1,
      AXIS_RIGHT_JOYSTICK_X: 0x2,
      AXIS_RIGHT_JOYSTICK_Y: 0x3,
    }),
      (ig["GamepadInput"] = ig["Class"]["extend"]({
        isInit: !0x1,
        isSupported: !0x1,
        list: [],
        bindings: {},
        states: {},
        presses: {},
        releases: {},
        downLocks: {},
        upLocks: {},
        leftStick: { x: 0x0, y: 0x0 },
        rightStick: { x: 0x0, y: 0x0 },
        start: function () {
          if (!this["isInit"]) {
            this["isInit"] = !0x0;
            var _0x442839 =
              navigator["getGamepads"] || navigator["webkitGetGamepads"];
            _0x442839 &&
              (!navigator["getGamepads"] &&
                navigator["webkitGetGamepads"] &&
                (navigator["getGamepads"] = navigator["webkitGetGamepads"]),
              (this["list"] = navigator["getGamepads"]())),
              (this["isSupported"] = _0x442839);
          }
        },
        isAvailable: function () {
          return this["isInit"] && this["isSupported"];
        },
        buttonPressed: function (_0x14b094) {
          return "object" == typeof _0x14b094
            ? _0x14b094["pressed"]
            : 0x1 == _0x14b094;
        },
        buttonDown: function (_0x21e9f1) {
          if ((_0x21e9f1 = this["bindings"][_0x21e9f1]))
            (this["states"][_0x21e9f1] = !0x0),
              this["downLocks"][_0x21e9f1] ||
                ((this["presses"][_0x21e9f1] = !0x0),
                (this["downLocks"][_0x21e9f1] = !0x0));
        },
        buttonUp: function (_0x7335d7) {
          if (
            (_0x7335d7 = this["bindings"][_0x7335d7]) &&
            this["downLocks"][_0x7335d7] &&
            !this["upLocks"][_0x7335d7]
          )
            (this["states"][_0x7335d7] = !0x1),
              (this["releases"][_0x7335d7] = !0x0),
              (this["upLocks"][_0x7335d7] = !0x0);
        },
        clearPressed: function () {
          for (var _0x1c6b11 in this["releases"])
            (this["states"][_0x1c6b11] = !0x1),
              (this["downLocks"][_0x1c6b11] = !0x1);
          (this["releases"] = {}),
            (this["presses"] = {}),
            (this["upLocks"] = {});
        },
        bind: function (_0x48288e, _0x659853) {
          this["bindings"][_0x48288e] = _0x659853;
        },
        unbind: function (_0x5e53d0) {
          (this["releases"][this["bindings"][_0x5e53d0]] = !0x0),
            (this["bindings"][_0x5e53d0] = null);
        },
        unbindAll: function () {
          (this["bindings"] = {}),
            (this["states"] = {}),
            (this["presses"] = {}),
            (this["releases"] = {}),
            (this["downLocks"] = {}),
            (this["upLocks"] = {});
        },
        state: function (_0x8b3e4e) {
          return this["states"][_0x8b3e4e];
        },
        pressed: function (_0xf49a5c) {
          return this["presses"][_0xf49a5c];
        },
        released: function (_0x4e4bcf) {
          return this["releases"][_0x4e4bcf];
        },
        clamp: function (_0x79a34f, _0x3a0c08, _0x2b4a7e) {
          return _0x79a34f < _0x3a0c08
            ? _0x3a0c08
            : _0x79a34f > _0x2b4a7e
            ? _0x2b4a7e
            : _0x79a34f;
        },
        pollGamepads: function () {
          if (this["isSupported"]) {
            (this["leftStick"]["x"] = 0x0),
              (this["leftStick"]["y"] = 0x0),
              (this["rightStick"]["x"] = 0x0),
              (this["rightStick"]["y"] = 0x0),
              (this["list"] = navigator["getGamepads"]());
            for (var _0x2c2881 in this["bindings"]) {
              for (
                var _0x3e3059 = !0x1, _0x1c1e29 = 0x0;
                _0x1c1e29 < this["list"]["length"];
                _0x1c1e29++
              ) {
                var _0x42e287 = this["list"][_0x1c1e29];
                if (
                  _0x42e287 &&
                  _0x42e287["buttons"] &&
                  this["buttonPressed"](_0x42e287["buttons"][_0x2c2881])
                ) {
                  _0x3e3059 = !0x0;
                  break;
                }
              }
              _0x3e3059
                ? this["buttonDown"](_0x2c2881)
                : this["buttonUp"](_0x2c2881);
            }
            for (
              _0x1c1e29 = 0x0;
              _0x1c1e29 < this["list"]["length"];
              _0x1c1e29++
            )
              if ((_0x42e287 = this["list"][_0x1c1e29]) && _0x42e287["axes"]) {
                _0x2c2881 =
                  _0x42e287["axes"][ig["GAMEPADINPUT"]["AXIS_LEFT_JOYSTICK_X"]];
                var _0x3e3059 =
                    _0x42e287["axes"][
                      ig["GAMEPADINPUT"]["AXIS_LEFT_JOYSTICK_Y"]
                    ],
                  _0x39e563 =
                    _0x42e287["axes"][
                      ig["GAMEPADINPUT"]["AXIS_RIGHT_JOYSTICK_X"]
                    ],
                  _0x42e287 =
                    _0x42e287["axes"][
                      ig["GAMEPADINPUT"]["AXIS_RIGHT_JOYSTICK_Y"]
                    ];
                (this["leftStick"]["x"] += isNaN(_0x2c2881) ? 0x0 : _0x2c2881),
                  (this["leftStick"]["y"] += isNaN(_0x3e3059)
                    ? 0x0
                    : _0x3e3059),
                  (this["rightStick"]["x"] += isNaN(_0x39e563)
                    ? 0x0
                    : _0x39e563),
                  (this["rightStick"]["y"] += isNaN(_0x42e287)
                    ? 0x0
                    : _0x42e287);
              }
            0x0 < this["list"]["length"] &&
              ((this["leftStick"]["x"] = this["clamp"](
                this["leftStick"]["x"],
                -0x1,
                0x1
              )),
              (this["leftStick"]["y"] = this["clamp"](
                this["leftStick"]["y"],
                -0x1,
                0x1
              )),
              (this["rightStick"]["x"] = this["clamp"](
                this["rightStick"]["x"],
                -0x1,
                0x1
              )),
              (this["rightStick"]["y"] = this["clamp"](
                this["rightStick"]["y"],
                -0x1,
                0x1
              )));
          }
        },
      }));
  }),
  (ig["baked"] = !0x0),
  ig["module"]("plugins.io.gamepad")
    ["requires"]("plugins.io.gamepad-input")
    ["defines"](function () {
      Gamepad = ig["Class"]["extend"]({
        bindings: { padJump: [ig["PADKEY"]["BUTTON_0"]] },
        init: function () {
          ig["gamepadInput"]["start"]();
          for (var _0x3c7a2e in this["bindings"])
            for (
              var _0x2f01bb = 0x0;
              _0x2f01bb < this["bindings"][_0x3c7a2e]["length"];
              _0x2f01bb++
            )
              ig["gamepadInput"]["bind"](
                this["bindings"][_0x3c7a2e][_0x2f01bb],
                _0x3c7a2e
              );
        },
        press: function () {},
        held: function () {},
        release: function () {},
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("plugins.io.multitouch")["defines"](function () {
    Multitouch = ig["Class"]["extend"]({
      init: function () {
        ig["multitouchInput"]["start"]();
      },
      getTouchesPos: function () {
        if (ig["ua"]["mobile"]) {
          if (0x0 < ig["multitouchInput"]["touches"]["length"]) {
            for (
              var _0x214fa8 = [], _0x75af22 = 0x0;
              _0x75af22 < ig["multitouchInput"]["touches"]["length"];
              _0x75af22++
            ) {
              var _0x549012 = ig["multitouchInput"]["touches"][_0x75af22];
              _0x214fa8["push"]({ x: _0x549012["x"], y: _0x549012["y"] });
            }
            return _0x214fa8;
          }
          return null;
        }
      },
    });
  }),
  (ig["baked"] = !0x0),
  ig["module"]("plugins.io.multitouch-input")["defines"](function () {
    ig["MultitouchInput"] = ig["Class"]["extend"]({
      isStart: !0x1,
      touches: [],
      multitouchCapable: !0x1,
      lastEventUp: null,
      start: function () {
        this["isStart"] ||
          ((this["isStart"] = !0x0),
          navigator["maxTouchPoints"] &&
            0x1 < navigator["maxTouchPoints"] &&
            (this["multitouchCapable"] = !0x0),
          ig["ua"]["touchDevice"] &&
            (window["navigator"]["msPointerEnabled"] &&
              (ig["system"]["canvas"]["addEventListener"](
                "MSPointerDown",
                this["touchdown"]["bind"](this),
                !0x1
              ),
              ig["system"]["canvas"]["addEventListener"](
                "MSPointerUp",
                this["touchup"]["bind"](this),
                !0x1
              ),
              ig["system"]["canvas"]["addEventListener"](
                "MSPointerMove",
                this["touchmove"]["bind"](this),
                !0x1
              ),
              (ig["system"]["canvas"]["style"]["msContentZooming"] = "none"),
              (ig["system"]["canvas"]["style"]["msTouchAction"] = "none")),
            ig["system"]["canvas"]["addEventListener"](
              "touchstart",
              this["touchdown"]["bind"](this),
              !0x1
            ),
            ig["system"]["canvas"]["addEventListener"](
              "touchend",
              this["touchup"]["bind"](this),
              !0x1
            ),
            ig["system"]["canvas"]["addEventListener"](
              "touchmove",
              this["touchmove"]["bind"](this),
              !0x1
            )));
      },
      touchmove: function (_0x110f58) {
        if (ig["ua"]["touchDevice"]) {
          var _0xcda798 =
              parseInt(ig["system"]["canvas"]["offsetWidth"]) ||
              ig["system"]["realWidth"],
            _0x21f3de =
              parseInt(ig["system"]["canvas"]["offsetHeight"]) ||
              ig["system"]["realHeight"],
            _0xcda798 =
              ig["system"]["scale"] * (_0xcda798 / ig["system"]["realWidth"]),
            _0x21f3de =
              ig["system"]["scale"] * (_0x21f3de / ig["system"]["realHeight"]);
          if (_0x110f58["touches"]) {
            for (; 0x0 < this["touches"]["length"]; ) this["touches"]["pop"]();
            !this["multitouchCapable"] &&
              0x1 < _0x110f58["touches"]["length"] &&
              (this["multitouchCapable"] = !0x0);
            var _0x3fc5a0 = { left: 0x0, top: 0x0 };
            ig["system"]["canvas"]["getBoundingClientRect"] &&
              (_0x3fc5a0 = ig["system"]["canvas"]["getBoundingClientRect"]());
            for (
              var _0x250cdf = 0x0;
              _0x250cdf < _0x110f58["touches"]["length"];
              _0x250cdf++
            ) {
              var _0x25f4bf = _0x110f58["touches"][_0x250cdf];
              _0x25f4bf &&
                this["touches"]["push"]({
                  x: (_0x25f4bf["clientX"] - _0x3fc5a0["left"]) / _0xcda798,
                  y: (_0x25f4bf["clientY"] - _0x3fc5a0["top"]) / _0x21f3de,
                });
            }
          } else this["windowMove"](_0x110f58);
        }
      },
      touchdown: function (_0x49c0c9) {
        var _0x1034a1 =
            parseInt(ig["system"]["canvas"]["offsetWidth"]) ||
            ig["system"]["realWidth"],
          _0x3b1e0b =
            parseInt(ig["system"]["canvas"]["offsetHeight"]) ||
            ig["system"]["realHeight"],
          _0x1034a1 =
            ig["system"]["scale"] * (_0x1034a1 / ig["system"]["realWidth"]),
          _0x3b1e0b =
            ig["system"]["scale"] * (_0x3b1e0b / ig["system"]["realHeight"]);
        if (window["navigator"]["msPointerEnabled"])
          this["windowKeyDown"](_0x49c0c9);
        else {
          if (ig["ua"]["touchDevice"] && _0x49c0c9["touches"]) {
            for (; 0x0 < this["touches"]["length"]; ) this["touches"]["pop"]();
            !this["multitouchCapable"] &&
              0x1 < _0x49c0c9["touches"]["length"] &&
              (this["multitouchCapable"] = !0x0);
            var _0x2e70ad = { left: 0x0, top: 0x0 };
            ig["system"]["canvas"]["getBoundingClientRect"] &&
              (_0x2e70ad = ig["system"]["canvas"]["getBoundingClientRect"]());
            for (
              var _0x3c290e = 0x0;
              _0x3c290e < _0x49c0c9["touches"]["length"];
              _0x3c290e++
            ) {
              var _0x36a401 = _0x49c0c9["touches"][_0x3c290e];
              _0x36a401 &&
                this["touches"]["push"]({
                  x: (_0x36a401["clientX"] - _0x2e70ad["left"]) / _0x1034a1,
                  y: (_0x36a401["clientY"] - _0x2e70ad["top"]) / _0x3b1e0b,
                });
            }
          }
        }
      },
      touchup: function (_0x2dd93c) {
        var _0x337251 =
          parseInt(ig["system"]["canvas"]["offsetWidth"]) ||
          ig["system"]["realWidth"];
        parseInt(ig["system"]["canvas"]["offsetHeight"]),
          (_0x337251 =
            ig["system"]["scale"] * (_0x337251 / ig["system"]["realWidth"]));
        if (window["navigator"]["msPointerEnabled"])
          this["windowKeyUp"](_0x2dd93c);
        else {
          this["lastEventUp"] = _0x2dd93c;
          var _0xd74f95 = { left: 0x0, top: 0x0 };
          ig["system"]["canvas"]["getBoundingClientRect"] &&
            (_0xd74f95 = ig["system"]["canvas"]["getBoundingClientRect"]());
          if (ig["ua"]["touchDevice"]) {
            _0x2dd93c =
              (_0x2dd93c["changedTouches"][0x0]["clientX"] -
                _0xd74f95["left"]) /
              _0x337251;
            for (
              _0x337251 = 0x0;
              _0x337251 < this["touches"]["length"];
              _0x337251++
            )
              this["touches"][_0x337251]["x"] >= _0x2dd93c - 0x28 &&
                this["touches"][_0x337251]["x"] <= _0x2dd93c + 0x28 &&
                this["touches"]["splice"](_0x337251, 0x1);
          }
        }
      },
      windowKeyDown: function (_0x5ae6d9) {
        var _0x413c6a =
            parseInt(ig["system"]["canvas"]["offsetWidth"]) ||
            ig["system"]["realWidth"],
          _0x30f385 =
            parseInt(ig["system"]["canvas"]["offsetHeight"]) ||
            ig["system"]["realHeight"],
          _0x413c6a =
            ig["system"]["scale"] * (_0x413c6a / ig["system"]["realWidth"]),
          _0x30f385 =
            ig["system"]["scale"] * (_0x30f385 / ig["system"]["realHeight"]);
        if (window["navigator"]["msPointerEnabled"]) {
          var _0x3ad6b6 = { left: 0x0, top: 0x0 };
          ig["system"]["canvas"]["getBoundingClientRect"] &&
            (_0x3ad6b6 = ig["system"]["canvas"]["getBoundingClientRect"]()),
            (_0x5ae6d9 = _0x5ae6d9["changedTouches"]
              ? _0x5ae6d9["changedTouches"]
              : [_0x5ae6d9]);
          for (
            var _0x3f0b81 = 0x0;
            _0x3f0b81 < _0x5ae6d9["length"];
            ++_0x3f0b81
          ) {
            for (
              var _0x11e639 = _0x5ae6d9[_0x3f0b81],
                _0x55c020 =
                  "undefined" != typeof _0x11e639["identifier"]
                    ? _0x11e639["identifier"]
                    : "undefined" != typeof _0x11e639["pointerId"]
                    ? _0x11e639["pointerId"]
                    : 0x1,
                _0x110a6f =
                  (_0x11e639["clientX"] - _0x3ad6b6["left"]) / _0x413c6a,
                _0x11e639 =
                  (_0x11e639["clientY"] - _0x3ad6b6["top"]) / _0x30f385,
                _0xfd9afd = 0x0;
              _0xfd9afd < this["touches"]["length"];
              ++_0xfd9afd
            )
              this["touches"][_0xfd9afd]["identifier"] == _0x55c020 &&
                this["touches"]["splice"](_0xfd9afd, 0x1);
            this["touches"]["push"]({
              x: _0x110a6f,
              y: _0x11e639,
              identifier: _0x55c020,
            });
          }
          for (
            _0x413c6a = 0x0;
            _0x413c6a < this["touches"]["length"];
            _0x413c6a++
          );
        }
      },
      windowKeyUp: function (_0x4fafbc) {
        _0x4fafbc =
          "undefined" != typeof _0x4fafbc["identifier"]
            ? _0x4fafbc["identifier"]
            : "undefined" != typeof _0x4fafbc["pointerId"]
            ? _0x4fafbc["pointerId"]
            : 0x1;
        for (
          var _0x1c711d = 0x0;
          _0x1c711d < this["touches"]["length"];
          ++_0x1c711d
        )
          this["touches"][_0x1c711d]["identifier"] == _0x4fafbc &&
            this["touches"]["splice"](_0x1c711d, 0x1);
        for (; 0x0 < this["touches"]["length"]; ) this["touches"]["pop"]();
      },
      windowMove: function (_0x441fb1) {
        var _0xb840e1 =
            parseInt(ig["system"]["canvas"]["offsetWidth"]) ||
            ig["system"]["realWidth"],
          _0x5e19e7 =
            parseInt(ig["system"]["canvas"]["offsetHeight"]) ||
            ig["system"]["realHeight"],
          _0xb840e1 =
            ig["system"]["scale"] * (_0xb840e1 / ig["system"]["realWidth"]),
          _0x5e19e7 =
            ig["system"]["scale"] * (_0x5e19e7 / ig["system"]["realHeight"]),
          _0x223d62 = { left: 0x0, top: 0x0 };
        ig["system"]["canvas"]["getBoundingClientRect"] &&
          (_0x223d62 = ig["system"]["canvas"]["getBoundingClientRect"]());
        if (window["navigator"]["msPointerEnabled"]) {
          for (
            var _0x18aa98 =
                "undefined" != typeof _0x441fb1["identifier"]
                  ? _0x441fb1["identifier"]
                  : "undefined" != typeof _0x441fb1["pointerId"]
                  ? _0x441fb1["pointerId"]
                  : 0x1,
              _0x596def = 0x0;
            _0x596def < this["touches"]["length"];
            ++_0x596def
          )
            if (this["touches"][_0x596def]["identifier"] == _0x18aa98) {
              var _0x54c075 =
                (_0x441fb1["clientY"] - _0x223d62["top"]) / _0x5e19e7;
              (this["touches"][_0x596def]["x"] =
                (_0x441fb1["clientX"] - _0x223d62["left"]) / _0xb840e1),
                (this["touches"][_0x596def]["y"] = _0x54c075);
            }
        }
      },
    });
  }),
  (ig["baked"] = !0x0),
  ig["module"]("plugins.io.io-manager")
    ["requires"](
      "plugins.io.storage",
      "plugins.io.mouse",
      "plugins.io.keyboard",
      "plugins.io.gamepad",
      "plugins.io.multitouch",
      "plugins.io.multitouch-input",
      "plugins.io.gamepad-input"
    )
    ["defines"](function () {
      IoManager = ig["Class"]["extend"]({
        storage: null,
        localStorageSupport: !0x1,
        gamekey: "TeamKaboom",
        mouse: null,
        keyboard: null,
        multitouch: null,
        gamepad: null,
        init: function () {
          (ig["multitouchInput"] = new ig["MultitouchInput"]()),
            (ig["gamepadInput"] = new ig["GamepadInput"]()),
            this["unbindAll"](),
            this["initStorage"](),
            this["initMouse"](),
            this["initKeyboard"]();
        },
        unbindAll: function () {
          ig["input"]["unbindAll"](), ig["gamepadInput"]["unbindAll"]();
        },
        initStorage: function () {
          this["_supportsLocalStorage"]() &&
            (this["storage"] = new ig["Storage"]());
        },
        initMouse: function () {
          this["mouse"] = new Mouse();
        },
        initKeyboard: function () {
          this["keyboard"] = new Keyboard();
        },
        initMultitouch: function () {
          this["multitouch"] = new Multitouch();
        },
        initGamepad: function () {
          this["gamepad"] = new Gamepad();
        },
        press: function (_0x5628c8) {
          return ig["input"]["pressed"](_0x5628c8) ||
            this["gamepad"]["press"](_0x5628c8)
            ? !0x0
            : !0x1;
        },
        held: function (_0x3621b0) {
          return ig["input"]["state"](_0x3621b0) ||
            this["gamepad"]["state"](_0x3621b0)
            ? !0x0
            : !0x1;
        },
        release: function (_0x112bc3) {
          return ig["input"]["released"](_0x112bc3) ||
            this["gamepad"]["released"](_0x112bc3)
            ? !0x0
            : !0x1;
        },
        getClickPos: function () {
          return this["mouse"]["getPos"]();
        },
        getTouchesPos: function () {
          return this["multitouch"]["getTouchesPos"]();
        },
        checkOverlap: function (
          _0x58a189,
          _0x56fc7b,
          _0x116718,
          _0x492644,
          _0xa67dc9
        ) {
          return _0x58a189["x"] > _0x56fc7b + _0x492644 ||
            _0x58a189["x"] < _0x56fc7b ||
            _0x58a189["y"] > _0x116718 + _0xa67dc9 ||
            _0x58a189["y"] < _0x116718
            ? !0x1
            : !0x0;
        },
        _supportsLocalStorage: function () {
          try {
            return (
              localStorage["setItem"]("test", "test"),
              localStorage["removeItem"]("test"),
              (this["localStorageSupport"] =
                "localStorage" in window && null !== window["localStorage"])
            );
          } catch (_0x3aafff) {
            return this["localStorageSupport"];
          }
        },
        storageIsSet: function (_0x1ddbd1) {
          return !this["localStorageSupport"]
            ? null
            : this["storage"]["isSet"](_0x1ddbd1);
        },
        storageGet: function (_0x535a45) {
          return !this["localStorageSupport"]
            ? null
            : this["storage"]["get"](_0x535a45);
        },
        storageSet: function (_0x4395af, _0x460b29) {
          if (!this["localStorageSupport"]) return null;
          this["storage"]["set"](_0x4395af, _0x460b29);
        },
        assert: function (_0x373678, _0x3c8298, _0x505e50) {
          if (_0x3c8298 !== _0x505e50)
            throw (
              "actualValue:" +
              _0x3c8298 +
              "\x20not\x20equal\x20to\x20testValue:" +
              _0x505e50 +
              "\x20at\x20" +
              _0x373678
            );
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("plugins.splash-loader")
    ["requires"]("impact.loader", "impact.animation")
    ["defines"](function () {
      ig["SplashLoader"] = ig["Loader"]["extend"]({
        tapToStartDivId: "tap-to-start",
        splashDesktop: new ig["Image"](
          "media/graphics/splash/desktop/cover.jpg"
        ),
        splashMobile: new ig["Image"]("media/graphics/splash/mobile/cover.jpg"),
        barEmpty: new ig["Image"](
          "media/graphics/splash/loading-bar-empty.png"
        ),
        barFull: new ig["Image"]("media/graphics/splash/loading-bar-full.png"),
        init: function (_0x58cfb4, _0x371ed2) {
          this["parent"](_0x58cfb4, _0x371ed2),
            ig["apiHandler"]["run"]("MJSPreroll");
        },
        end: function () {
          this["parent"](),
            _SETTINGS["TapToStartAudioUnlock"]["Enabled"]
              ? this["tapToStartDiv"](
                  function () {
                    (this["loaderStatus"] = 0x2),
                      ig["system"]["setGame"](MyGame);
                  }["bind"](this)
                )
              : ((this["loaderStatus"] = 0x2), ig["system"]["setGame"](MyGame));
        },
        tapToStartDiv: function (_0x38e26e) {
          this["desktopCoverDIV"] = document["getElementById"](
            this["tapToStartDivId"]
          );
          if (!this["desktopCoverDIV"]) {
            (this["desktopCoverDIV"] = document["createElement"]("div")),
              (this["desktopCoverDIV"]["id"] = this["tapToStartDivId"]),
              this["desktopCoverDIV"]["setAttribute"]("class", "play"),
              this["desktopCoverDIV"]["setAttribute"](
                "style",
                "position:\x20absolute;\x20display:\x20block;\x20z-index:\x20999999;\x20background-color:\x20rgba(23,\x2032,\x2053,\x200.7);\x20visibility:\x20visible;\x20font-size:\x2010vmin;\x20text-align:\x20center;\x20vertical-align:\x20middle;\x20-webkit-touch-callout:\x20none;\x20-webkit-user-select:\x20none;\x20-khtml-user-select:\x20none;\x20-moz-user-select:\x20none;\x20-ms-user-select:\x20none;\x20user-select:\x20none;"
              ),
              (this["desktopCoverDIV"]["innerHTML"] =
                "<div\x20style=\x27color:white;background-color:\x20rgba(255,\x20255,\x20255,\x200.3);\x20border:\x202px\x20solid\x20#fff;\x20font-size:20px;\x20border-radius:\x205px;\x20position:\x20relative;\x20float:\x20left;\x20top:\x2050%;\x20left:\x2050%;\x20transform:\x20translate(-50%,\x20-50%);\x27><div\x20style=\x27padding:20px\x2050px;\x20font-family:\x20montserrat;\x27>" +
                _STRINGS["Splash"]["TapToStart"] +
                "</div></div>"),
              (document["getElementById"]("play")["parentNode"] ||
                document["getElementById"]("ajaxbar"))["appendChild"](
                this["desktopCoverDIV"]
              );
            try {
              "undefined" !== typeof ig["sizeHandler"]
                ? "undefined" !==
                    typeof ig["sizeHandler"]["coreDivsToResize"] &&
                  (ig["sizeHandler"]["coreDivsToResize"]["push"](
                    "#" + this["tapToStartDivId"]
                  ),
                  "function" === typeof ig["sizeHandler"]["reorient"] &&
                    ig["sizeHandler"]["reorient"]())
                : "undefined" !== typeof coreDivsToResize &&
                  (coreDivsToResize["push"](this["tapToStartDivId"]),
                  "function" === typeof sizeHandler && sizeHandler());
            } catch (_0x4797df) {
              console["log"](_0x4797df);
            }
            this["desktopCoverDIV"]["addEventListener"]("click", function () {
              ig["soundHandler"]["unlockWebAudio"](),
                this["setAttribute"]("style", "visibility:\x20hidden;"),
                "function" === typeof _0x38e26e && _0x38e26e();
            });
          }
        },
        setupCustomAnimation: function () {
          (this["customAnim"] = new ig["Animation"](
            this["customAnim"],
            0.05,
            [0x0, 0x1, 0x2, 0x3, 0x4, 0x5]
          )),
            (this["customAnim"]["currentFrame"] = 0x0),
            (ig["loadingScreen"] = this),
            (ig["loadingScreen"]["animationTimer"] = window["setInterval"](
              "ig.loadingScreen.animate()",
              0x64
            ));
        },
        animate: function () {
          this["customAnim"]["currentFrame"] <
          this["customAnim"]["sequence"]["length"]
            ? this["customAnim"]["currentFrame"]++
            : (this["customAnim"]["currentFrame"] = 0x0),
            this["customAnim"]["gotoFrame"](this["customAnim"]["currentFrame"]);
        },
        draw: function () {
          this["_drawStatus"] += (this["status"] - this["_drawStatus"]) / 0x5;
          var _0xf5a6d0 = ig["system"]["context"],
            _0x2665cf = ig["system"]["scale"],
            _0x4c1ca2,
            _0x4dc82b;
          ig["ua"]["mobile"]
            ? ((_0x4c1ca2 = 0.5 * ig["system"]["width"] - 147.5),
              (_0x4dc82b = 0x1a4),
              this["splashMobile"]["draw"](0x0, 0x0))
            : ((_0x4c1ca2 = 0.5 * ig["system"]["width"] - 147.5),
              (_0x4dc82b = 0x1a4),
              this["splashDesktop"]["draw"](0x0, 0x0)),
            _0xf5a6d0["drawImage"](
              this["barEmpty"]["data"],
              _0x4c1ca2 * _0x2665cf,
              _0x4dc82b * _0x2665cf
            );
          var _0x1873f2 = this["barFull"]["width"] * this["_drawStatus"];
          0x0 >= _0x1873f2 && (_0x1873f2 = 0.1),
            _0x1873f2 > this["barFull"]["width"] &&
              (_0x1873f2 = this["barFull"]["width"]),
            _0xf5a6d0["drawImage"](
              this["barFull"]["data"],
              0x0,
              0x0,
              _0x1873f2,
              0x2a,
              _0x4c1ca2 * _0x2665cf,
              _0x4dc82b * _0x2665cf,
              _0x1873f2,
              0x2a
            ),
            (_0xf5a6d0["font"] = "1px\x20bpreplay"),
            (_0xf5a6d0["textAlign"] = "center"),
            (_0xf5a6d0["textBaseline"] = "middle"),
            (_0xf5a6d0["fillStyle"] = "white"),
            _0xf5a6d0["fillText"]("marketjs", -0x3e8, -0x3e8),
            0.1 > this["_drawStatus"] ||
              ((_0x4c1ca2 = _STRINGS["Splash"]["Loading"]),
              (_0x1873f2 =
                ig["system"]["width"] / 0x2 -
                ig["system"]["context"]["measureText"](_0x4c1ca2)["width"] /
                  0x2),
              (_0xf5a6d0["font"] = "15px\x20bpreplay"),
              _0xf5a6d0["fillText"](
                _0x4c1ca2,
                _0x1873f2,
                _0x4dc82b * _0x2665cf - 0xa
              ));
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("plugins.tween")
    ["requires"]("impact.entity")
    ["defines"](function () {
      Array["prototype"]["indexOf"] ||
        (Array["prototype"]["indexOf"] = function (_0x5f552b) {
          for (var _0x4ae395 = 0x0; _0x4ae395 < this["length"]; ++_0x4ae395)
            if (this[_0x4ae395] === _0x5f552b) return _0x4ae395;
          return -0x1;
        }),
        (ig["Entity"]["prototype"]["tweens"] = []),
        (ig["Entity"]["prototype"]["_preTweenUpdate"] =
          ig["Entity"]["prototype"]["update"]),
        (ig["Entity"]["prototype"]["update"] = function () {
          this["_preTweenUpdate"]();
          if (0x0 < this["tweens"]["length"]) {
            for (
              var _0x86d85f = [], _0x948219 = 0x0;
              _0x948219 < this["tweens"]["length"];
              _0x948219++
            )
              this["tweens"][_0x948219]["update"](),
                this["tweens"][_0x948219]["complete"] ||
                  _0x86d85f["push"](this["tweens"][_0x948219]);
            this["tweens"] = _0x86d85f;
          }
        }),
        (ig["Entity"]["prototype"]["tween"] = function (
          _0x1eb254,
          _0x18a510,
          _0x2b3cd1
        ) {
          return (
            (_0x1eb254 = new ig["Tween"](
              this,
              _0x1eb254,
              _0x18a510,
              _0x2b3cd1
            )),
            this["tweens"]["push"](_0x1eb254),
            _0x1eb254
          );
        }),
        (ig["Entity"]["prototype"]["pauseTweens"] = function () {
          for (
            var _0x2783ec = 0x0;
            _0x2783ec < this["tweens"]["length"];
            _0x2783ec++
          )
            this["tweens"][_0x2783ec]["pause"]();
        }),
        (ig["Entity"]["prototype"]["resumeTweens"] = function () {
          for (
            var _0x1e4fd0 = 0x0;
            _0x1e4fd0 < this["tweens"]["length"];
            _0x1e4fd0++
          )
            this["tweens"][_0x1e4fd0]["resume"]();
        }),
        (ig["Entity"]["prototype"]["stopTweens"] = function (_0x138a9a) {
          for (
            var _0xa54acd = 0x0;
            _0xa54acd < this["tweens"]["length"];
            _0xa54acd++
          )
            this["tweens"][_0xa54acd]["stop"](_0x138a9a);
        }),
        (ig["Tween"] = function (_0x2590d0, _0x55ecbe, _0x571d06, _0x40c301) {
          var _0xe174ce = {},
            _0x448788 = {},
            _0x1b57c6 = {},
            _0xa07d8e = 0x0,
            _0x2e05aa = !0x1,
            _0x5a8127 = !0x1,
            _0x5cf5ad = !0x1;
          (this["duration"] = _0x571d06),
            (this["paused"] = this["complete"] = !0x1),
            (this["easing"] = ig["Tween"]["Easing"]["Linear"]["EaseNone"]),
            (this["onComplete"] = !0x1),
            (this["loop"] = this["delay"] = 0x0),
            (this["loopCount"] = -0x1),
            ig["merge"](this, _0x40c301),
            (this["loopNum"] = this["loopCount"]),
            (this["chain"] = function (_0x76fa11) {
              _0x5cf5ad = _0x76fa11;
            }),
            (this["initEnd"] = function (_0x4cdc73, _0x3a1a3a, _0xdd0284) {
              if ("object" !== typeof _0x3a1a3a[_0x4cdc73])
                _0xdd0284[_0x4cdc73] = _0x3a1a3a[_0x4cdc73];
              else {
                for (subprop in _0x3a1a3a[_0x4cdc73])
                  _0xdd0284[_0x4cdc73] || (_0xdd0284[_0x4cdc73] = {}),
                    this["initEnd"](
                      subprop,
                      _0x3a1a3a[_0x4cdc73],
                      _0xdd0284[_0x4cdc73]
                    );
              }
            }),
            (this["initStart"] = function (
              _0x5a00a3,
              _0xd060e5,
              _0x481cae,
              _0x5f1a28
            ) {
              if ("object" !== typeof _0x481cae[_0x5a00a3])
                "undefined" !== typeof _0xd060e5[_0x5a00a3] &&
                  (_0x5f1a28[_0x5a00a3] = _0x481cae[_0x5a00a3]);
              else {
                for (subprop in _0x481cae[_0x5a00a3])
                  _0x5f1a28[_0x5a00a3] || (_0x5f1a28[_0x5a00a3] = {}),
                    "undefined" !== typeof _0xd060e5[_0x5a00a3] &&
                      this["initStart"](
                        subprop,
                        _0xd060e5[_0x5a00a3],
                        _0x481cae[_0x5a00a3],
                        _0x5f1a28[_0x5a00a3]
                      );
              }
            }),
            (this["start"] = function () {
              (this["paused"] = this["complete"] = !0x1),
                (this["loopNum"] = this["loopCount"]),
                (_0xa07d8e = 0x0),
                -0x1 == _0x2590d0["tweens"]["indexOf"](this) &&
                  _0x2590d0["tweens"]["push"](this),
                (_0x5a8127 = !0x0),
                (_0x2e05aa = new ig["Timer"]());
              for (var _0x48c644 in _0x55ecbe)
                this["initEnd"](_0x48c644, _0x55ecbe, _0x448788);
              for (_0x48c644 in _0x448788)
                this["initStart"](_0x48c644, _0x448788, _0x2590d0, _0xe174ce),
                  this["initDelta"](_0x48c644, _0x1b57c6, _0x2590d0, _0x448788);
            }),
            (this["initDelta"] = function (
              _0x29cbc6,
              _0x166501,
              _0x173b5c,
              _0x213824
            ) {
              if ("object" !== typeof _0x213824[_0x29cbc6])
                _0x166501[_0x29cbc6] =
                  _0x213824[_0x29cbc6] - _0x173b5c[_0x29cbc6];
              else {
                for (subprop in _0x213824[_0x29cbc6])
                  _0x166501[_0x29cbc6] || (_0x166501[_0x29cbc6] = {}),
                    this["initDelta"](
                      subprop,
                      _0x166501[_0x29cbc6],
                      _0x173b5c[_0x29cbc6],
                      _0x213824[_0x29cbc6]
                    );
              }
            }),
            (this["propUpdate"] = function (
              _0x57248b,
              _0xd4992a,
              _0x3c1e08,
              _0x417ada,
              _0xe64af5
            ) {
              if ("object" !== typeof _0x3c1e08[_0x57248b])
                _0xd4992a[_0x57248b] =
                  "undefined" != typeof _0x3c1e08[_0x57248b]
                    ? _0x3c1e08[_0x57248b] + _0x417ada[_0x57248b] * _0xe64af5
                    : _0xd4992a[_0x57248b];
              else {
                for (subprop in _0x3c1e08[_0x57248b])
                  this["propUpdate"](
                    subprop,
                    _0xd4992a[_0x57248b],
                    _0x3c1e08[_0x57248b],
                    _0x417ada[_0x57248b],
                    _0xe64af5
                  );
              }
            }),
            (this["propSet"] = function (_0x14e7a6, _0x303845, _0x52e00d) {
              if ("object" !== typeof _0x303845[_0x14e7a6])
                _0x52e00d[_0x14e7a6] = _0x303845[_0x14e7a6];
              else {
                for (subprop in _0x303845[_0x14e7a6])
                  _0x52e00d[_0x14e7a6] || (_0x52e00d[_0x14e7a6] = {}),
                    this["propSet"](
                      subprop,
                      _0x303845[_0x14e7a6],
                      _0x52e00d[_0x14e7a6]
                    );
              }
            }),
            (this["update"] = function () {
              if (!_0x5a8127) return !0x1;
              if (this["delay"]) {
                if (_0x2e05aa["delta"]() < this["delay"]) return;
                (this["delay"] = 0x0), _0x2e05aa["reset"]();
              }
              if (this["paused"] || this["complete"]) return !0x1;
              var _0x23c7e3 =
                  (_0x2e05aa["delta"]() + _0xa07d8e) / this["duration"],
                _0x23c7e3 = 0x1 < _0x23c7e3 ? 0x1 : _0x23c7e3,
                _0x5aa273 = this["easing"](_0x23c7e3);
              for (property in _0x1b57c6)
                this["propUpdate"](
                  property,
                  _0x2590d0,
                  _0xe174ce,
                  _0x1b57c6,
                  _0x5aa273
                );
              if (0x1 <= _0x23c7e3) {
                if (0x0 == this["loopNum"] || !this["loop"]) {
                  this["complete"] = !0x0;
                  if (this["onComplete"]) this["onComplete"]();
                  return _0x5cf5ad && _0x5cf5ad["start"](), !0x1;
                }
                if (this["loop"] == ig["Tween"]["Loop"]["Revert"]) {
                  for (property in _0xe174ce)
                    this["propSet"](property, _0xe174ce, _0x2590d0);
                  (_0xa07d8e = 0x0),
                    _0x2e05aa["reset"](),
                    -0x1 != this["loopNum"] && this["loopNum"]--;
                } else {
                  if (this["loop"] == ig["Tween"]["Loop"]["Reverse"]) {
                    (_0x23c7e3 = {}),
                      (_0x5aa273 = {}),
                      ig["merge"](_0x23c7e3, _0x448788),
                      ig["merge"](_0x5aa273, _0xe174ce),
                      ig["merge"](_0xe174ce, _0x23c7e3),
                      ig["merge"](_0x448788, _0x5aa273);
                    for (property in _0x448788)
                      this["initDelta"](
                        property,
                        _0x1b57c6,
                        _0x2590d0,
                        _0x448788
                      );
                    (_0xa07d8e = 0x0),
                      _0x2e05aa["reset"](),
                      -0x1 != this["loopNum"] && this["loopNum"]--;
                  }
                }
              }
            }),
            (this["pause"] = function () {
              (this["paused"] = !0x0), (_0xa07d8e += _0x2e05aa["delta"]());
            }),
            (this["resume"] = function () {
              (this["paused"] = !0x1), _0x2e05aa["reset"]();
            }),
            (this["stop"] = function (_0x13f232) {
              _0x13f232 &&
                ((this["loop"] = this["complete"] = this["paused"] = !0x1),
                (_0xa07d8e += _0x571d06),
                this["update"]()),
                (this["complete"] = !0x0);
            });
        }),
        (ig["Tween"]["Loop"] = { Revert: 0x1, Reverse: 0x2 }),
        (ig["Tween"]["Easing"] = {
          Linear: {},
          Quadratic: {},
          Cubic: {},
          Quartic: {},
          Quintic: {},
          Sinusoidal: {},
          Exponential: {},
          Circular: {},
          Elastic: {},
          Back: {},
          Bounce: {},
        }),
        (ig["Tween"]["Easing"]["Linear"]["EaseNone"] = function (_0x3b7ba2) {
          return _0x3b7ba2;
        }),
        (ig["Tween"]["Easing"]["Quadratic"]["EaseIn"] = function (_0x55186e) {
          return _0x55186e * _0x55186e;
        }),
        (ig["Tween"]["Easing"]["Quadratic"]["EaseOut"] = function (_0x5012a5) {
          return -_0x5012a5 * (_0x5012a5 - 0x2);
        }),
        (ig["Tween"]["Easing"]["Quadratic"]["EaseInOut"] = function (
          _0x107da2
        ) {
          return 0x1 > (_0x107da2 *= 0x2)
            ? 0.5 * _0x107da2 * _0x107da2
            : -0.5 * (--_0x107da2 * (_0x107da2 - 0x2) - 0x1);
        }),
        (ig["Tween"]["Easing"]["Cubic"]["EaseIn"] = function (_0x22a956) {
          return _0x22a956 * _0x22a956 * _0x22a956;
        }),
        (ig["Tween"]["Easing"]["Cubic"]["EaseOut"] = function (_0x7bb300) {
          return --_0x7bb300 * _0x7bb300 * _0x7bb300 + 0x1;
        }),
        (ig["Tween"]["Easing"]["Cubic"]["EaseInOut"] = function (_0x6e8a3c) {
          return 0x1 > (_0x6e8a3c *= 0x2)
            ? 0.5 * _0x6e8a3c * _0x6e8a3c * _0x6e8a3c
            : 0.5 * ((_0x6e8a3c -= 0x2) * _0x6e8a3c * _0x6e8a3c + 0x2);
        }),
        (ig["Tween"]["Easing"]["Quartic"]["EaseIn"] = function (_0x553738) {
          return _0x553738 * _0x553738 * _0x553738 * _0x553738;
        }),
        (ig["Tween"]["Easing"]["Quartic"]["EaseOut"] = function (_0x2d1ad7) {
          return -(--_0x2d1ad7 * _0x2d1ad7 * _0x2d1ad7 * _0x2d1ad7 - 0x1);
        }),
        (ig["Tween"]["Easing"]["Quartic"]["EaseInOut"] = function (_0x364838) {
          return 0x1 > (_0x364838 *= 0x2)
            ? 0.5 * _0x364838 * _0x364838 * _0x364838 * _0x364838
            : -0.5 *
                ((_0x364838 -= 0x2) * _0x364838 * _0x364838 * _0x364838 - 0x2);
        }),
        (ig["Tween"]["Easing"]["Quintic"]["EaseIn"] = function (_0x4c5422) {
          return _0x4c5422 * _0x4c5422 * _0x4c5422 * _0x4c5422 * _0x4c5422;
        }),
        (ig["Tween"]["Easing"]["Quintic"]["EaseOut"] = function (_0x5d4b29) {
          return (
            (_0x5d4b29 -= 0x1) * _0x5d4b29 * _0x5d4b29 * _0x5d4b29 * _0x5d4b29 +
            0x1
          );
        }),
        (ig["Tween"]["Easing"]["Quintic"]["EaseInOut"] = function (_0x226f5e) {
          return 0x1 > (_0x226f5e *= 0x2)
            ? 0.5 * _0x226f5e * _0x226f5e * _0x226f5e * _0x226f5e * _0x226f5e
            : 0.5 *
                ((_0x226f5e -= 0x2) *
                  _0x226f5e *
                  _0x226f5e *
                  _0x226f5e *
                  _0x226f5e +
                  0x2);
        }),
        (ig["Tween"]["Easing"]["Sinusoidal"]["EaseIn"] = function (_0x3cf83d) {
          return -Math["cos"]((_0x3cf83d * Math["PI"]) / 0x2) + 0x1;
        }),
        (ig["Tween"]["Easing"]["Sinusoidal"]["EaseOut"] = function (_0x39e11e) {
          return Math["sin"]((_0x39e11e * Math["PI"]) / 0x2);
        }),
        (ig["Tween"]["Easing"]["Sinusoidal"]["EaseInOut"] = function (
          _0x25c698
        ) {
          return -0.5 * (Math["cos"](Math["PI"] * _0x25c698) - 0x1);
        }),
        (ig["Tween"]["Easing"]["Exponential"]["EaseIn"] = function (_0xccb253) {
          return 0x0 == _0xccb253
            ? 0x0
            : Math["pow"](0x2, 0xa * (_0xccb253 - 0x1));
        }),
        (ig["Tween"]["Easing"]["Exponential"]["EaseOut"] = function (
          _0x45288d
        ) {
          return 0x1 == _0x45288d
            ? 0x1
            : -Math["pow"](0x2, -0xa * _0x45288d) + 0x1;
        }),
        (ig["Tween"]["Easing"]["Exponential"]["EaseInOut"] = function (
          _0x55c175
        ) {
          return 0x0 == _0x55c175
            ? 0x0
            : 0x1 == _0x55c175
            ? 0x1
            : 0x1 > (_0x55c175 *= 0x2)
            ? 0.5 * Math["pow"](0x2, 0xa * (_0x55c175 - 0x1))
            : 0.5 * (-Math["pow"](0x2, -0xa * (_0x55c175 - 0x1)) + 0x2);
        }),
        (ig["Tween"]["Easing"]["Circular"]["EaseIn"] = function (_0x5b240b) {
          return -(Math["sqrt"](0x1 - _0x5b240b * _0x5b240b) - 0x1);
        }),
        (ig["Tween"]["Easing"]["Circular"]["EaseOut"] = function (_0x1a85e6) {
          return Math["sqrt"](0x1 - --_0x1a85e6 * _0x1a85e6);
        }),
        (ig["Tween"]["Easing"]["Circular"]["EaseInOut"] = function (_0x250f5c) {
          return 0x1 > (_0x250f5c /= 0.5)
            ? -0.5 * (Math["sqrt"](0x1 - _0x250f5c * _0x250f5c) - 0x1)
            : 0.5 * (Math["sqrt"](0x1 - (_0x250f5c -= 0x2) * _0x250f5c) + 0x1);
        }),
        (ig["Tween"]["Easing"]["Elastic"]["EaseIn"] = function (_0x33fe2f) {
          var _0x383cdc,
            _0x470c9b = 0.1,
            _0x3507e8 = 0.4;
          if (0x0 == _0x33fe2f) return 0x0;
          if (0x1 == _0x33fe2f) return 0x1;
          return (
            _0x3507e8 || (_0x3507e8 = 0.3),
            !_0x470c9b || 0x1 > _0x470c9b
              ? ((_0x470c9b = 0x1), (_0x383cdc = _0x3507e8 / 0x4))
              : (_0x383cdc =
                  (_0x3507e8 / (0x2 * Math["PI"])) *
                  Math["asin"](0x1 / _0x470c9b)),
            -(
              _0x470c9b *
              Math["pow"](0x2, 0xa * (_0x33fe2f -= 0x1)) *
              Math["sin"](
                (0x2 * (_0x33fe2f - _0x383cdc) * Math["PI"]) / _0x3507e8
              )
            )
          );
        }),
        (ig["Tween"]["Easing"]["Elastic"]["EaseOut"] = function (_0x18e691) {
          var _0x5af345,
            _0x35b284 = 0.1,
            _0x22d57f = 0.4;
          if (0x0 == _0x18e691) return 0x0;
          if (0x1 == _0x18e691) return 0x1;
          return (
            _0x22d57f || (_0x22d57f = 0.3),
            !_0x35b284 || 0x1 > _0x35b284
              ? ((_0x35b284 = 0x1), (_0x5af345 = _0x22d57f / 0x4))
              : (_0x5af345 =
                  (_0x22d57f / (0x2 * Math["PI"])) *
                  Math["asin"](0x1 / _0x35b284)),
            _0x35b284 *
              Math["pow"](0x2, -0xa * _0x18e691) *
              Math["sin"](
                (0x2 * (_0x18e691 - _0x5af345) * Math["PI"]) / _0x22d57f
              ) +
              0x1
          );
        }),
        (ig["Tween"]["Easing"]["Elastic"]["EaseInOut"] = function (_0x50353d) {
          var _0x32fc59,
            _0x693843 = 0.1,
            _0x235deb = 0.4;
          if (0x0 == _0x50353d) return 0x0;
          if (0x1 == _0x50353d) return 0x1;
          return (
            _0x235deb || (_0x235deb = 0.3),
            !_0x693843 || 0x1 > _0x693843
              ? ((_0x693843 = 0x1), (_0x32fc59 = _0x235deb / 0x4))
              : (_0x32fc59 =
                  (_0x235deb / (0x2 * Math["PI"])) *
                  Math["asin"](0x1 / _0x693843)),
            0x1 > (_0x50353d *= 0x2)
              ? -0.5 *
                _0x693843 *
                Math["pow"](0x2, 0xa * (_0x50353d -= 0x1)) *
                Math["sin"](
                  (0x2 * (_0x50353d - _0x32fc59) * Math["PI"]) / _0x235deb
                )
              : 0.5 *
                  _0x693843 *
                  Math["pow"](0x2, -0xa * (_0x50353d -= 0x1)) *
                  Math["sin"](
                    (0x2 * (_0x50353d - _0x32fc59) * Math["PI"]) / _0x235deb
                  ) +
                0x1
          );
        }),
        (ig["Tween"]["Easing"]["Back"]["EaseIn"] = function (_0x369129) {
          return _0x369129 * _0x369129 * (2.70158 * _0x369129 - 1.70158);
        }),
        (ig["Tween"]["Easing"]["Back"]["EaseOut"] = function (_0x37028f) {
          return (
            (_0x37028f -= 0x1) * _0x37028f * (2.70158 * _0x37028f + 1.70158) +
            0x1
          );
        }),
        (ig["Tween"]["Easing"]["Back"]["EaseInOut"] = function (_0x36adda) {
          return 0x1 > (_0x36adda *= 0x2)
            ? 0.5 * _0x36adda * _0x36adda * (3.5949095 * _0x36adda - 2.5949095)
            : 0.5 *
                ((_0x36adda -= 0x2) *
                  _0x36adda *
                  (3.5949095 * _0x36adda + 2.5949095) +
                  0x2);
        }),
        (ig["Tween"]["Easing"]["Bounce"]["EaseIn"] = function (_0x411808) {
          return (
            0x1 - ig["Tween"]["Easing"]["Bounce"]["EaseOut"](0x1 - _0x411808)
          );
        }),
        (ig["Tween"]["Easing"]["Bounce"]["EaseOut"] = function (_0x2527cc) {
          return (_0x2527cc /= 0x1) < 0x1 / 2.75
            ? 7.5625 * _0x2527cc * _0x2527cc
            : _0x2527cc < 0x2 / 2.75
            ? 7.5625 * (_0x2527cc -= 1.5 / 2.75) * _0x2527cc + 0.75
            : _0x2527cc < 2.5 / 2.75
            ? 7.5625 * (_0x2527cc -= 2.25 / 2.75) * _0x2527cc + 0.9375
            : 7.5625 * (_0x2527cc -= 2.625 / 2.75) * _0x2527cc + 0.984375;
        }),
        (ig["Tween"]["Easing"]["Bounce"]["EaseInOut"] = function (_0x32c9b9) {
          return 0.5 > _0x32c9b9
            ? 0.5 * ig["Tween"]["Easing"]["Bounce"]["EaseIn"](0x2 * _0x32c9b9)
            : 0.5 *
                ig["Tween"]["Easing"]["Bounce"]["EaseOut"](
                  0x2 * _0x32c9b9 - 0x1
                ) +
                0.5;
        });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("plugins.url-parameters")["defines"](function () {
    ig["UrlParameters"] = ig["Class"]["extend"]({
      init: function () {
        switch (getQueryVariable("iphone")) {
          case "true":
            (ig["ua"]["iPhone"] = !0x0), console["log"]("iPhone\x20mode");
        }
        var _0x3f9478 = getQueryVariable("webview");
        if (_0x3f9478)
          switch (_0x3f9478) {
            case "true":
              (ig["ua"]["is_uiwebview"] = !0x0),
                console["log"]("webview\x20mode");
          }
        if ((_0x3f9478 = getQueryVariable("debug")))
          switch (_0x3f9478) {
            case "true":
              ig["game"]["showDebugMenu"](), console["log"]("debug\x20mode");
          }
        switch (getQueryVariable("view")) {
          case "stats":
            ig["game"]["resetPlayerStats"](), ig["game"]["endGame"]();
        }
        getQueryVariable("ad");
      },
    });
  }),
  (ig["baked"] = !0x0),
  ig["module"]("plugins.director")
    ["requires"]("impact.impact")
    ["defines"](function () {
      ig["Director"] = ig["Class"]["extend"]({
        init: function (_0x1f085f, _0x40bd56) {
          (this["game"] = _0x1f085f),
            (this["levels"] = []),
            (this["currentLevel"] = 0x0),
            this["append"](_0x40bd56);
        },
        loadLevel: function (_0x37b7e2) {
          for (var _0x2eb842 in ig["sizeHandler"][
            "dynamicClickableEntityDivs"
          ]) {
            var _0x5e10f6 = ig["domHandler"]["getElementById"]("#" + _0x2eb842);
            ig["domHandler"]["hide"](_0x5e10f6);
          }
          return (
            (this["currentLevel"] = _0x37b7e2),
            this["game"]["loadLevel"](this["levels"][_0x37b7e2]),
            !0x0
          );
        },
        loadLevelWithoutEntities: function (_0x36c76f) {
          return (
            (this["currentLevel"] = _0x36c76f),
            this["game"]["loadLevelWithoutEntities"](this["levels"][_0x36c76f]),
            !0x0
          );
        },
        append: function (_0x2cc754) {
          return (
            (newLevels = []),
            "object" === typeof _0x2cc754
              ? (_0x2cc754["constructor"] === []["constructor"]
                  ? (newLevels = _0x2cc754)
                  : (newLevels[0x0] = _0x2cc754),
                (this["levels"] = this["levels"]["concat"](newLevels)),
                !0x0)
              : !0x1
          );
        },
        nextLevel: function () {
          return this["currentLevel"] + 0x1 < this["levels"]["length"]
            ? this["loadLevel"](this["currentLevel"] + 0x1)
            : !0x1;
        },
        previousLevel: function () {
          return 0x0 <= this["currentLevel"] - 0x1
            ? this["loadLevel"](this["currentLevel"] - 0x1)
            : !0x1;
        },
        jumpTo: function (_0x334594) {
          var _0x30dca7 = null;
          for (i = 0x0; i < this["levels"]["length"]; i++)
            this["levels"][i] == _0x334594 && (_0x30dca7 = i);
          return 0x0 <= _0x30dca7 ? this["loadLevel"](_0x30dca7) : !0x1;
        },
        firstLevel: function () {
          return this["loadLevel"](0x0);
        },
        lastLevel: function () {
          return this["loadLevel"](this["levels"]["length"] - 0x1);
        },
        reloadLevel: function () {
          return this["loadLevel"](this["currentLevel"]);
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("plugins.impact-storage")
    ["requires"]("impact.game")
    ["defines"](function () {
      ig["Storage"] = ig["Class"]["extend"]({
        staticInstantiate: function () {
          return !ig["Storage"]["instance"] ? null : ig["Storage"]["instance"];
        },
        init: function () {
          ig["Storage"]["instance"] = this;
        },
        isCapable: function () {
          return "undefined" !== typeof window["localStorage"];
        },
        isSet: function (_0x45a5ee) {
          return null !== this["get"](_0x45a5ee);
        },
        initUnset: function (_0x105c51, _0x473ea9) {
          null === this["get"](_0x105c51) && this["set"](_0x105c51, _0x473ea9);
        },
        get: function (_0x4adfe7) {
          if (!this["isCapable"]()) return null;
          try {
            return JSON["parse"](localStorage["getItem"](_0x4adfe7));
          } catch (_0x335e99) {
            return window["localStorage"]["getItem"](_0x4adfe7);
          }
        },
        getInt: function (_0x367749) {
          return ~~this["get"](_0x367749);
        },
        getFloat: function (_0xcfa7f3) {
          return parseFloat(this["get"](_0xcfa7f3));
        },
        getBool: function (_0x49f025) {
          return !!this["get"](_0x49f025);
        },
        key: function (_0x3f3085) {
          return this["isCapable"]()
            ? window["localStorage"]["key"](_0x3f3085)
            : null;
        },
        set: function (_0x2c2996, _0x499d5b) {
          if (!this["isCapable"]()) return null;
          try {
            window["localStorage"]["setItem"](
              _0x2c2996,
              JSON["stringify"](_0x499d5b)
            );
          } catch (_0xf36176) {
            console["log"](_0xf36176);
          }
        },
        setHighest: function (_0x577387, _0xa733f1) {
          _0xa733f1 > this["getFloat"](_0x577387) &&
            this["set"](_0x577387, _0xa733f1);
        },
        remove: function (_0x32639e) {
          if (!this["isCapable"]()) return null;
          window["localStorage"]["removeItem"](_0x32639e);
        },
        clear: function () {
          if (!this["isCapable"]()) return null;
          window["localStorage"]["clear"]();
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("plugins.fake-storage")
    ["requires"]("impact.game")
    ["defines"](function () {
      ig["FakeStorage"] = ig["Class"]["extend"]({
        tempData: {},
        init: function () {
          ig["FakeStorage"]["instance"] = this;
        },
        initUnset: function (_0x48c0d3, _0x206aba) {
          null === this["get"](_0x48c0d3) && this["set"](_0x48c0d3, _0x206aba);
        },
        set: function (_0x5676dd, _0x4d3b46) {
          this["tempData"][_0x5676dd] = JSON["stringify"](_0x4d3b46);
        },
        setHighest: function (_0x1065da, _0x3fdf00) {
          _0x3fdf00 > this["getFloat"](_0x1065da) &&
            this["set"](_0x1065da, _0x3fdf00);
        },
        get: function (_0x4de054) {
          return "undefined" == typeof this["tempData"][_0x4de054]
            ? null
            : JSON["parse"](this["tempData"][_0x4de054]);
        },
        getInt: function (_0x2a765a) {
          return ~~this["get"](_0x2a765a);
        },
        getFloat: function (_0x3f5547) {
          return parseFloat(this["get"](_0x3f5547));
        },
        getBool: function (_0x58f68d) {
          return !!this["get"](_0x58f68d);
        },
        isSet: function (_0x3930f6) {
          return null !== this["get"](_0x3930f6);
        },
        remove: function (_0x1f4ee8) {
          delete this["tempData"][_0x1f4ee8];
        },
        clear: function () {
          this["tempData"] = {};
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("plugins.crazygames")
    ["requires"]("plugins.handlers.api-handler")
    ["defines"](function () {
      ig["CrazyGamesAPI"] = ig["ApiHandler"]["inject"]({
        verbose: !0x1,
        version: "1.0.6",
        API_ID: "CrazyGamesAPI",
        API_KEY: "",
        parameters: {},
        sdk: {
          enabled: !0x0,
          hasInit: !0x1,
          crazysdk: {
            id: "crazysdk",
            url: "https://sdk.crazygames.com/crazygames-sdk-v1.js",
            instance: null,
          },
        },
        ad: {
          cooldownTime: 0x0,
          cooldownTimeoutId: null,
          cachedBgmMutedFlag: null,
          cachedSfxMutedFlag: null,
          cachedSfxVolume: null,
          cachedBgmVolume: null,
          isRequested: !0x1,
          isShown: !0x1,
          isCoolingDown: !0x1,
        },
        googleAnalytics: {
          enabled: !0x0,
          hasInit: !0x1,
          gtag: {
            id: "G-K1KTQ90QQJ",
            url: "https://www.googletagmanager.com/gtag/js",
          },
        },
        init: function () {
          return (
            this["setAlias"](),
            this["getUrlParameters"](),
            this["initSDK"](),
            this["initGA"](),
            this["whitelabel"](),
            this["reorientGame"](),
            this["verbose"] && this["log"]("API\x20initialized\x20..."),
            this
          );
        },
        setAlias: function () {
          (ig["crazygames"] = this),
            (ig["global"]["crazygames"] = window["crazygames"] = this);
        },
        getQueryVariable: function (_0x12c3d3) {
          for (
            var _0x44ae52 = window["location"]["href"]
                ["slice"](window["location"]["href"]["indexOf"]("?") + 0x1)
                ["split"]("&"),
              _0x1c9c98 = 0x0;
            _0x1c9c98 < _0x44ae52["length"];
            _0x1c9c98++
          ) {
            var _0x295f7a = _0x44ae52[_0x1c9c98]["match"](/([^=]+?)=(.+)/);
            if (_0x295f7a) {
              var _0x740bb3 = decodeURIComponent(_0x295f7a[0x1]),
                _0x295f7a = decodeURIComponent(_0x295f7a[0x2]);
              if (_0x12c3d3 === _0x740bb3) return _0x295f7a;
            }
          }
        },
        getUrlParameters: function () {
          this["verbose"] = !(
            !this["getQueryVariable"]("sdk_debug") &&
            !this["getQueryVariable"]("debug") &&
            !this["getQueryVariable"]("verbose") &&
            !this["getQueryVariable"]("dev")
          );
        },
        initSDK: function () {
          if (this["sdk"] && this["sdk"]["enabled"]) {
            if (this["sdk"]["hasInit"]) return !0x1;
            var _0x5ca50c = this["sdk"]["crazysdk"]["id"],
              _0x3a46df,
              _0x119bde = document["getElementsByTagName"]("script")[0x0];
            document["getElementById"](_0x5ca50c) ||
              ((_0x3a46df = document["createElement"]("script")),
              (_0x3a46df["id"] = _0x5ca50c),
              (_0x3a46df["src"] = this["sdk"]["crazysdk"]["url"]),
              (_0x3a46df["async"] = !0x0),
              (_0x3a46df["onload"] = function () {
                (_0x3a46df["onload"] = null), this["onSdkReady"]();
              }["bind"](this)),
              _0x119bde["parentNode"]["insertBefore"](_0x3a46df, _0x119bde));
          }
        },
        initGA: function () {
          if (this["googleAnalytics"] && this["googleAnalytics"]["enabled"]) {
            if (this["googleAnalytics"]["hasInit"]) return !0x1;
            var _0x1ce56f,
              _0x4df4b1 = document["getElementsByTagName"]("script")[0x0];
            document["getElementById"]("gtag") ||
              ((_0x1ce56f = document["createElement"]("script")),
              (_0x1ce56f["id"] = "gtag"),
              (_0x1ce56f["src"] =
                this["googleAnalytics"]["gtag"]["url"] +
                "?id=" +
                this["googleAnalytics"]["gtag"]["id"]),
              (_0x1ce56f["async"] = !0x0),
              (_0x1ce56f["onload"] = function () {
                function _0x40346c() {
                  dataLayer["push"](arguments);
                }
                (_0x1ce56f["onload"] = null),
                  (window["dataLayer"] = window["dataLayer"] || []),
                  _0x40346c("js", new Date()),
                  _0x40346c("config", this["googleAnalytics"]["gtag"]["id"]);
              }["bind"](this)),
              _0x4df4b1["parentNode"]["insertBefore"](_0x1ce56f, _0x4df4b1));
          }
        },
        onSdkReady: function () {
          this["verbose"] &&
            this["log"]("SDK\x20is\x20loaded\x20and\x20ready\x20..."),
            (this["sdk"]["crazysdk"]["instance"] =
              window["CrazyGames"]["CrazySDK"]["getInstance"]()),
            this["sdk"]["crazysdk"]["instance"]["init"](),
            this["initAdEventListeners"](),
            (this["sdk"]["hasInit"] = !0x0);
        },
        initAdEventListeners: function () {
          this["sdk"]["crazysdk"]["instance"]["addEventListener"](
            "adStarted",
            this["onAdShow"]["bind"](this)
          ),
            this["sdk"]["crazysdk"]["instance"]["addEventListener"](
              "adFinished",
              this["onAdHide"]["bind"](this)
            ),
            this["sdk"]["crazysdk"]["instance"]["addEventListener"](
              "adError",
              this["onAdError"]["bind"](this)
            );
        },
        removeAdEventListeners: function () {
          this["sdk"]["crazysdk"]["instance"]["removeEventListener"](
            "adStarted",
            this["onAdShow"]["bind"](this)
          ),
            this["sdk"]["crazysdk"]["instance"]["removeEventListener"](
              "adFinished",
              this["onAdHide"]["bind"](this)
            ),
            this["sdk"]["crazysdk"]["instance"]["removeEventListener"](
              "adError",
              this["onAdError"]["bind"](this)
            );
        },
        muteAudio: function () {
          this["cacheVolume"](),
            this["cacheMutedFlag"](),
            "undefined" !== typeof ig &&
              ("undefined" !== typeof ig["soundHandler"] &&
                ("function" === typeof ig["soundHandler"]["mute"] &&
                  ig["soundHandler"]["mute"](),
                "function" === typeof ig["soundHandler"]["muteAll"] &&
                  ig["soundHandler"]["muteAll"](),
                "function" === typeof ig["soundHandler"]["muteBGM"] &&
                  ig["soundHandler"]["muteBGM"](),
                "function" === typeof ig["soundHandler"]["muteSFX"] &&
                  ig["soundHandler"]["muteSFX"](),
                "undefined" !== typeof ig["soundHandler"]["sfxPlayer"] &&
                  "function" ===
                    typeof ig["soundHandler"]["sfxPlayer"]["volume"] &&
                  ig["soundHandler"]["sfxPlayer"]["volume"](0x0),
                "undefined" !== typeof ig["soundHandler"]["bgmPlayer"] &&
                  "function" ===
                    typeof ig["soundHandler"]["bgmPlayer"]["volume"] &&
                  ig["soundHandler"]["bgmPlayer"]["volume"](0x0)),
              ig["music"] &&
                "function" === typeof ig["music"]["setVolume"] &&
                ig["music"]["setVolume"](0x0));
        },
        unmuteAudio: function () {
          !0x0 !== this["ad"]["cachedSfxMutedFlag"] &&
          !0x0 !== this["ad"]["cachedBgmMutedFlag"]
            ? "undefined" !== typeof ig &&
              "undefined" !== typeof ig["soundHandler"] &&
              ("function" === typeof ig["soundHandler"]["unmute"] &&
                ig["soundHandler"]["unmute"](),
              "function" === typeof ig["soundHandler"]["unmuteAll"] &&
                ig["soundHandler"]["unmuteAll"]())
            : (!0x0 !== this["ad"]["cachedSfxMutedFlag"] &&
                "undefined" !== typeof ig &&
                "undefined" !== typeof ig["soundHandler"] &&
                "function" === typeof ig["soundHandler"]["unmuteSFX"] &&
                ig["soundHandler"]["unmuteSFX"](),
              !0x0 !== this["ad"]["cachedBgmMutedFlag"] &&
                "undefined" !== typeof ig &&
                "undefined" !== typeof ig["soundHandler"] &&
                "function" === typeof ig["soundHandler"]["unmuteBGM"] &&
                ig["soundHandler"]["unmuteBGM"]()),
            this["setVolumeFromCache"]();
        },
        cacheVolume: function () {
          (this["ad"]["cachedSfxVolume"] = null),
            (this["ad"]["cachedBgmVolume"] = null),
            this["cacheSfxVolume"](),
            this["cacheBgmVolume"]();
        },
        cacheMutedFlag: function () {
          (this["ad"]["cachedSfxMutedFlag"] = null),
            (this["ad"]["cachedBgmMutedFlag"] = null),
            this["cacheSfxMutedFlag"](),
            this["cacheBgmMutedFlag"]();
        },
        cacheSfxVolume: function () {
          "undefined" !== typeof ig &&
            "undefined" !== typeof ig["soundHandler"] &&
            "undefined" !== typeof ig["soundHandler"]["sfxPlayer"] &&
            "function" ===
              typeof ig["soundHandler"]["sfxPlayer"]["getVolume"] &&
            null === this["ad"]["cachedSfxVolume"] &&
            (this["ad"]["cachedSfxVolume"] =
              ig["soundHandler"]["sfxPlayer"]["getVolume"]());
        },
        cacheBgmVolume: function () {
          "undefined" !== typeof ig &&
            ("undefined" !== typeof ig["soundHandler"] &&
              "undefined" !== typeof ig["soundHandler"]["bgmPlayer"] &&
              "function" ===
                typeof ig["soundHandler"]["bgmPlayer"]["getVolume"] &&
              null === this["ad"]["cachedBgmVolume"] &&
              (this["ad"]["cachedBgmVolume"] =
                ig["soundHandler"]["bgmPlayer"]["getVolume"]()),
            ig["music"] &&
              "function" === typeof ig["music"]["getVolume"] &&
              null === this["ad"]["cachedBgmVolume"] &&
              (this["ad"]["cachedBgmVolume"] = ig["music"]["getVolume"]()));
        },
        cacheSfxMutedFlag: function () {
          "undefined" !== typeof ig &&
            "undefined" !== typeof ig["soundHandler"] &&
            ("undefined" !== typeof ig["soundHandler"]["muted"] &&
              null === this["ad"]["cachedSfxMutedFlag"] &&
              (this["ad"]["cachedSfxMutedFlag"] = ig["soundHandler"]["muted"]),
            "undefined" !== typeof ig["soundHandler"]["sfxPlayer"] &&
              "undefined" !==
                typeof ig["soundHandler"]["sfxPlayer"]["muteFlag"] &&
              null === this["ad"]["cachedSfxMutedFlag"] &&
              (this["ad"]["cachedSfxMutedFlag"] =
                ig["soundHandler"]["sfxPlayer"]["muteFlag"]));
        },
        cacheBgmMutedFlag: function () {
          "undefined" !== typeof ig &&
            "undefined" !== typeof ig["soundHandler"] &&
            ("undefined" !== typeof ig["soundHandler"]["muted"] &&
              null === this["ad"]["cachedBgmMutedFlag"] &&
              ((this["ad"]["cachedBgmMutedFlag"] = ig["soundHandler"]["muted"]),
              console["log"](this["ad"]["cachedBgmMutedFlag"])),
            "undefined" !== typeof ig["soundHandler"]["bgmPlayer"] &&
              "undefined" !==
                typeof ig["soundHandler"]["bgmPlayer"]["muteFlag"] &&
              null === this["ad"]["cachedBgmMutedFlag"] &&
              ((this["ad"]["cachedBgmMutedFlag"] =
                ig["soundHandler"]["bgmPlayer"]["muteFlag"]),
              console["log"](this["ad"]["cachedBgmMutedFlag"])));
        },
        setVolumeFromCache: function () {
          this["setSfxVolumeFromCache"](), this["setBgmVolumeFromCache"]();
        },
        setSfxVolumeFromCache: function () {
          0x0 < this["ad"]["cachedSfxVolume"] &&
            "undefined" !== typeof ig &&
            "undefined" !== typeof ig["soundHandler"] &&
            "undefined" !== typeof ig["soundHandler"]["sfxPlayer"] &&
            "function" === typeof ig["soundHandler"]["sfxPlayer"]["volume"] &&
            ig["soundHandler"]["sfxPlayer"]["volume"](
              this["ad"]["cachedSfxVolume"]
            );
        },
        setBgmVolumeFromCache: function () {
          0x0 < this["ad"]["cachedBgmVolume"] &&
            "undefined" !== typeof ig &&
            ("undefined" !== typeof ig["soundHandler"] &&
              "undefined" !== typeof ig["soundHandler"]["bgmPlayer"] &&
              "function" === typeof ig["soundHandler"]["bgmPlayer"]["volume"] &&
              ig["soundHandler"]["bgmPlayer"]["volume"](
                this["ad"]["cachedBgmVolume"]
              ),
            ig["music"] &&
              "function" === typeof ig["music"]["setVolume"] &&
              ig["music"]["setVolume"](this["ad"]["cachedBgmVolume"]));
        },
        gameplayStart: function () {
          this["sdk"]["hasInit"]
            ? (this["sdk"]["crazysdk"]["instance"]["gameplayStart"](),
              this["verbose"] && this["log"]("Tracked\x20gameplayStart"))
            : this["verbose"] && this["log"]("SDK\x20is\x20not\x20ready");
        },
        gameplayStop: function () {
          this["sdk"]["hasInit"]
            ? (this["sdk"]["crazysdk"]["instance"]["gameplayStop"](),
              this["verbose"] && this["log"]("Tracked\x20gameplayStop"))
            : this["verbose"] && this["log"]("SDK\x20is\x20not\x20ready");
        },
        happyTime: function () {
          this["sdk"]["hasInit"]
            ? (this["sdk"]["crazysdk"]["instance"]["happyTime"](),
              this["verbose"] && (this["log"]("happyTime"), a))
            : this["verbose"] && this["log"]("SDK\x20is\x20not\x20ready");
        },
        startAdCooldown: function () {
          this["ad"]["isCoolingDown"] ||
            ((this["ad"]["isCoolingDown"] = !0x0),
            (this["ad"]["cooldownTimeoutId"] = window["setTimeout"](
              this["stopAdCooldown"]["bind"](this),
              0x3e8 * this["ad"]["cooldownTime"]
            )),
            this["verbose"] &&
              this["log"]("Started\x20cooling\x20down\x20ads"));
        },
        stopAdCooldown: function () {
          this["ad"]["isCoolingDown"] &&
            ((this["ad"]["isCoolingDown"] = !0x1),
            window["clearTimeout"](this["ad"]["cooldownTimeoutId"]),
            this["verbose"] && this["log"]("Ended\x20cooling\x20down\x20ads"));
        },
        showAd: function (_0x5a56f4) {
          this["sdk"]["hasInit"]
            ? this["ad"]["isShown"]
              ? (this["verbose"] &&
                  this["log"]("It\x27s\x20already\x20showing\x20an\x20ad"),
                "function" === typeof _0x5a56f4 && _0x5a56f4())
              : this["ad"]["isCoolingDown"]
              ? (this["verbose"] && this["log"]("Ad\x20is\x20cooling\x20down"),
                "function" === typeof _0x5a56f4 && _0x5a56f4())
              : (this["startAdCooldown"](),
                this["cacheVolume"](),
                this["cacheMutedFlag"](),
                this["sdk"]["crazysdk"]["instance"]["requestAd"]("midgame"),
                this["onAdRequest"]())
            : (this["verbose"] && this["log"]("SDK\x20is\x20not\x20ready"),
              "function" === typeof _0x5a56f4 && _0x5a56f4());
        },
        pauseGame: function () {
          "undefined" !== typeof ig &&
            ig["game"] &&
            ("function" === typeof ig["game"]["pauseGame"] &&
              ig["game"]["pauseGame"](!0x0),
            "function" === typeof ig["game"]["pause"] &&
              ig["game"]["pause"](!0x0));
          if (
            ig["visibilityHandler"] &&
            "function" === typeof ig["visibilityHandler"]["onOverlayShow"]
          )
            ig["visibilityHandler"]["onOverlayShow"]();
        },
        reorientGame: function () {
          "undefined" !== typeof ig &&
            "undefined" !== typeof ig["sizeHandler"] &&
            "function" === typeof ig["sizeHandler"]["reorient"] &&
            ig["sizeHandler"]["reorient"](),
            "function" === typeof orientationHandler && orientationHandler();
        },
        resumeGame: function () {
          if (
            "undefined" !== typeof ig["visibilityHandler"] &&
            "function" === typeof ig["visibilityHandler"]["onOverlayHide"]
          )
            ig["visibilityHandler"]["onOverlayHide"]();
          this["reorientGame"](),
            (document["getElementById"]("game")["style"]["visibility"] =
              "visible"),
            "undefined" !== typeof ig &&
              ig["game"] &&
              ("function" === typeof ig["game"]["resumeGame"] &&
                ig["game"]["resumeGame"](!0x0),
              "function" === typeof ig["game"]["resume"] &&
                ig["game"]["resume"](!0x0)),
            this["unmuteAudio"](),
            document["activeElement"] && document["activeElement"]["blur"](),
            window["focus"]();
        },
        onAdRequest: function () {
          this["sdk"]["hasInit"]
            ? this["ad"]["isRequested"]
              ? this["verbose"] &&
                this["log"]("It\x27s\x20already\x20requested\x20an\x20ad")
              : (this["verbose"] && this["log"]("Requesting\x20ad"),
                this["muteAudio"](),
                this["pauseGame"](),
                (this["ad"]["isRequested"] = !0x0))
            : this["verbose"] && this["log"]("SDK\x20is\x20not\x20ready");
        },
        onAdShow: function () {
          this["sdk"]["hasInit"]
            ? this["ad"]["isShown"]
              ? this["verbose"] &&
                this["log"]("It\x27s\x20already\x20showing\x20an\x20ad")
              : (this["verbose"] && this["log"]("Showing\x20ad"),
                (this["ad"]["isRequested"] = !0x1),
                this["pauseGame"](),
                (this["ad"]["isShown"] = !0x0))
            : this["verbose"] && this["log"]("SDK\x20is\x20not\x20ready");
        },
        onAdHide: function () {
          (this["ad"]["isRequested"] = !0x1),
            (this["ad"]["isShown"] = !0x1),
            this["resumeGame"]();
        },
        onAdError: function (_0x4c2be2) {
          this["verbose"] &&
            this["log"]("Ad\x20error:\x20" + JSON["stringify"](_0x4c2be2)),
            (this["ad"]["isRequested"] = !0x1),
            (this["ad"]["isShown"] = !0x1),
            this["resumeGame"]();
        },
        whitelabel: function () {
          _SETTINGS &&
            "undefined" !== typeof _SETTINGS &&
            (_SETTINGS["Branding"] &&
              "undefined" !== typeof _SETTINGS["Branding"] &&
              (_SETTINGS["Branding"]["Splash"]["Enabled"] = !0x1),
            _SETTINGS["DeveloperBranding"] &&
              "undefined" !== typeof _SETTINGS["DeveloperBranding"] &&
              (_SETTINGS["DeveloperBranding"]["Splash"]["Enabled"] = !0x1),
            _SETTINGS["MoreGames"] &&
              "undefined" !== typeof _SETTINGS["MoreGames"] &&
              (_SETTINGS["MoreGames"]["Enabled"] = !0x1),
            _SETTINGS["TapToStartAudioUnlock"] &&
              "undefined" !== typeof _SETTINGS["TapToStartAudioUnlock"] &&
              (_SETTINGS["TapToStartAudioUnlock"]["Enabled"] = !0x1)),
            MyGame &&
              "undefined" !== typeof MyGame &&
              (MyGame["prototype"]["dctf"] = function () {}),
            ig &&
              "undefined" !== typeof ig["Fullscreen"] &&
              (ig["Fullscreen"]["enableFullscreenButton"] = !0x1);
        },
        log: function (_0x2c937e) {
          this["verbose"] &&
            window["console"] &&
            "function" === typeof window["console"]["log"] &&
            console["log"](
              "%c[CrazyGames\x20API" +
                ("\x20v" + this["version"] + "]%c\x20")["toString"]() +
                JSON["stringify"](_0x2c937e),
              "color:\x20#FFFFFF;\x20background-color:\x20#3C1E6E;",
              ""
            );
        },
      });
    }),
  this["START_BRANDING_SPLASH"],
  (ig["baked"] = !0x0),
  ig["module"]("plugins.branding.splash")
    ["requires"]("impact.impact", "impact.entity")
    ["defines"](function () {
      (ig["BrandingSplash"] = ig["Class"]["extend"]({
        init: function () {
          ig["game"]["spawnEntity"](EntityBranding, 0x0, 0x0),
            console["log"]("spawn\x20branding");
        },
      })),
        (EntityBranding = ig["Entity"]["extend"]({
          gravityFactor: 0x0,
          size: { x: 0x20, y: 0x20 },
          splash: new ig["Image"]("branding/splash1.png"),
          init: function (_0x94ecca, _0x5aa2ad, _0x342ac0) {
            this["parent"](_0x94ecca, _0x5aa2ad, _0x342ac0),
              0x140 >= ig["system"]["width"]
                ? ((this["size"]["x"] = 0x140), (this["size"]["y"] = 0xc8))
                : ((this["size"]["x"] = 0x1e0), (this["size"]["y"] = 0xf0)),
              (this["pos"]["x"] =
                (ig["system"]["width"] - this["size"]["x"]) / 0x2),
              (this["pos"]["y"] = -this["size"]["y"] - 0xc8),
              (this["endPosY"] =
                (ig["system"]["height"] - this["size"]["y"]) / 0x2),
              (_0x94ecca = this["tween"]({ pos: { y: this["endPosY"] } }, 0.5, {
                easing: ig["Tween"]["Easing"]["Bounce"]["EaseIn"],
              })),
              (_0x5aa2ad = this["tween"]({}, 2.5, {
                onComplete: function () {
                  ig["game"]["director"]["loadLevel"](
                    ig["game"]["director"]["currentLevel"]
                  );
                },
              })),
              _0x94ecca["chain"](_0x5aa2ad),
              _0x94ecca["start"](),
              (this["currentAnim"] = this["anims"]["idle"]);
          },
          createClickableLayer: function () {
            console["log"]("Build\x20clickable\x20layer"),
              this["checkClickableLayer"](
                "branding-splash",
                _SETTINGS["Branding"]["Logo"]["Link"],
                _SETTINGS["Branding"]["Logo"]["NewWindow"]
              );
          },
          doesClickableLayerExist: function (_0x9badc0) {
            for (k in dynamicClickableEntityDivs)
              if (k == _0x9badc0) return !0x0;
            return !0x1;
          },
          checkClickableLayer: function (_0x32890b, _0x3e0d9e, _0x571204) {
            "undefined" == typeof wm &&
              (this["doesClickableLayerExist"](_0x32890b)
                ? (ig["game"]["showOverlay"]([_0x32890b]),
                  $("#" + _0x32890b)
                    ["find"]("[href]")
                    ["attr"]("href", _0x3e0d9e))
                : this["createClickableOutboundLayer"](
                    _0x32890b,
                    _0x3e0d9e,
                    "media/graphics/misc/invisible.png",
                    _0x571204
                  ));
          },
          createClickableOutboundLayer: function (
            _0x1da529,
            _0x2f9d9c,
            _0x361bc4,
            _0x2efdbd
          ) {
            var _0x4593c6 = ig["$new"]("div");
            (_0x4593c6["id"] = _0x1da529),
              document["body"]["appendChild"](_0x4593c6),
              (_0x4593c6 = $("#" + _0x4593c6["id"])),
              _0x4593c6["css"]("float", "left"),
              _0x4593c6["css"]("position", "absolute");
            if (ig["ua"]["mobile"]) {
              var _0x558cbb = window["innerHeight"] / mobileHeight,
                _0x4b80da = window["innerWidth"] / mobileWidth;
              _0x4593c6["css"]("left", this["pos"]["x"] * _0x4b80da),
                _0x4593c6["css"]("top", this["pos"]["y"] * _0x558cbb),
                _0x4593c6["css"]("width", this["size"]["x"] * _0x4b80da),
                _0x4593c6["css"]("height", this["size"]["y"] * _0x558cbb);
            } else
              (_0x558cbb = w / 0x2 - destW / 0x2),
                (_0x4b80da = h / 0x2 - destH / 0x2),
                console["log"](_0x558cbb, _0x4b80da),
                _0x4593c6["css"](
                  "left",
                  _0x558cbb + this["pos"]["x"] * multiplier
                ),
                _0x4593c6["css"](
                  "top",
                  _0x4b80da + this["pos"]["y"] * multiplier
                ),
                _0x4593c6["css"]("width", this["size"]["x"] * multiplier),
                _0x4593c6["css"]("height", this["size"]["y"] * multiplier);
            _0x2efdbd
              ? _0x4593c6["html"](
                  "<a\x20target=\x27_blank\x27\x20href=\x27" +
                    _0x2f9d9c +
                    "\x27><img\x20style=\x27width:100%;height:100%\x27\x20src=\x27" +
                    _0x361bc4 +
                    "\x27></a>"
                )
              : _0x4593c6["html"](
                  "<a\x20href=\x27" +
                    _0x2f9d9c +
                    "\x27><img\x20style=\x27width:100%;height:100%\x27\x20src=\x27" +
                    _0x361bc4 +
                    "\x27></a>"
                ),
              (dynamicClickableEntityDivs[_0x1da529] = {}),
              (dynamicClickableEntityDivs[_0x1da529]["width"] =
                this["size"]["x"] * multiplier),
              (dynamicClickableEntityDivs[_0x1da529]["height"] =
                this["size"]["y"] * multiplier),
              (dynamicClickableEntityDivs[_0x1da529]["entity_pos_x"] =
                this["pos"]["x"]),
              (dynamicClickableEntityDivs[_0x1da529]["entity_pos_y"] =
                this["pos"]["y"]);
          },
          draw: function () {
            (ig["system"]["context"]["fillStyle"] = "#ffffff"),
              ig["system"]["context"]["fillRect"](
                0x0,
                0x0,
                ig["system"]["width"],
                ig["system"]["height"]
              ),
              (ig["system"]["context"]["fillStyle"] = "#000"),
              (ig["system"]["context"]["font"] = "12px\x20Arial"),
              (ig["system"]["context"]["textAlign"] = "left"),
              0x140 >= ig["system"]["width"]
                ? ig["system"]["context"]["fillText"](
                    "powered\x20by\x20MarketJS.com",
                    ig["system"]["width"] - 0x96,
                    ig["system"]["height"] - 0xf
                  )
                : ig["system"]["context"]["fillText"](
                    "powered\x20by\x20MarketJS.com",
                    ig["system"]["width"] - 0xa0,
                    ig["system"]["height"] - 0xf
                  ),
              this["parent"](),
              this["splash"] &&
                ig["system"]["context"]["drawImage"](
                  this["splash"]["data"],
                  0x0,
                  0x0,
                  this["splash"]["data"]["width"],
                  this["splash"]["data"]["height"],
                  this["pos"]["x"],
                  this["pos"]["y"],
                  this["size"]["x"],
                  this["size"]["y"]
                );
          },
        }));
    }),
  this["END_BRANDING_SPLASH"],
  (ig["baked"] = !0x0),
  ig["module"]("game.entities.buttons.button")
    ["requires"](
      "impact.entity",
      "impact.timer",
      "plugins.data.vector",
      "plugins.handlers.size-handler"
    )
    ["defines"](function () {
      EntityButton = ig["Entity"]["extend"]({
        collides: ig["Entity"]["COLLIDES"]["NEVER"],
        type: ig["Entity"]["TYPE"]["A"],
        size: new Vector2(0x30, 0x30),
        fillColor: null,
        zIndex: 0x17318,
        clickCheck: !0x1,
        init: function (_0x5a0e24, _0x2c53ec, _0x517db0) {
          this["parent"](_0x5a0e24, _0x2c53ec, _0x517db0),
            !ig["global"]["wm"] &&
              !isNaN(_0x517db0["zIndex"]) &&
              (this["zIndex"] = _0x517db0["zIndex"]);
        },
        update: function () {
          this["parent"]();
        },
        draw: function () {
          this["parent"]();
        },
        clicked: function () {
          this["anims"]["idle"] &&
            (this["currentAnim"] = this["anims"]["idle"]),
            (this["clickCheck"] = !0x0);
        },
        released: function () {
          this["anims"]["hover"] &&
            (this["currentAnim"] = this["anims"]["hover"]),
            this["clickCheck"] &&
              ((this["clickCheck"] = !0x1), this["redirect"]());
        },
        over: function () {
          this["anims"]["hover"] &&
            (this["currentAnim"] = this["anims"]["hover"]);
        },
        leave: function () {
          this["anims"]["idle"] &&
            (this["currentAnim"] = this["anims"]["idle"]),
            (this["clickCheck"] = !0x1);
        },
        redirect: function () {},
        movePos: function (_0x3e809a, _0x20b435) {
          (this["pos"]["x"] = _0x3e809a), (this["pos"]["y"] = _0x20b435);
        },
        checkClickOnPause: function () {
          if (ig["game"]["paused"] && this["ignorePause"]) {
            if (this["checkOverlapWithPointer"]()) {
              if (
                (this["anims"]["hover"] &&
                  (this["currentAnim"] = this["anims"]["hover"]),
                ig["input"]["pressed"]("click") && (this["clickCheck"] = !0x0),
                ig["input"]["state"]("click") &&
                  this["anims"]["idle"] &&
                  (this["currentAnim"] = this["anims"]["idle"]),
                ig["input"]["released"]("click"))
              ) {
                this["released"]();
                for (
                  var _0x3ed32b = ig["game"]["getEntitiesByType"](EntityButton),
                    _0x13eb63 = 0x0;
                  _0x13eb63 < _0x3ed32b["length"];
                  _0x13eb63++
                )
                  _0x3ed32b["clickCheck"] = !0x1;
              }
            } else
              this["anims"]["idle"] &&
                ((this["currentAnim"] = this["anims"]["idle"]),
                (this["clickCheck"] = !0x1));
          }
        },
        checkOverlapWithPointer: function () {
          if (ig["ua"]["mobile"])
            var _0x1b3b20 =
                ig["input"]["mouse"]["x"] /
                  ig["sizeHandler"]["sizeRatio"]["x"] +
                ig["game"]["screen"]["x"],
              _0xe461d8 =
                ig["input"]["mouse"]["y"] /
                  ig["sizeHandler"]["sizeRatio"]["y"] +
                ig["game"]["screen"]["y"];
          else
            (_0x1b3b20 = ig["input"]["mouse"]["x"] + ig["game"]["screen"]["x"]),
              (_0xe461d8 =
                ig["input"]["mouse"]["y"] + ig["game"]["screen"]["y"]);
          return _0x1b3b20 > this["pos"]["x"] + this["size"]["x"] ||
            _0x1b3b20 < this["pos"]["x"] ||
            _0xe461d8 > this["pos"]["y"] + this["size"]["y"] ||
            _0xe461d8 < this["pos"]["y"]
            ? !0x1
            : !0x0;
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("plugins.clickable-div-layer")
    ["requires"]("plugins.data.vector")
    ["defines"](function () {
      ClickableDivLayer = ig["Class"]["extend"]({
        pos: new Vector2(0x0, 0x0),
        size: new Vector2(0x0, 0x0),
        identifier: null,
        invisImagePath: "media/graphics/misc/invisible.png",
        init: function (_0x4f7910) {
          (this["pos"] = new Vector2(
            _0x4f7910["pos"]["x"],
            _0x4f7910["pos"]["y"]
          )),
            (this["size"] = new Vector2(
              _0x4f7910["size"]["x"],
              _0x4f7910["size"]["y"]
            ));
          var _0x29da34 = "more-games",
            _0x815474 = "www.google.com",
            _0x130e39 = !0x1;
          _0x4f7910["div_layer_name"] &&
            (_0x29da34 = _0x4f7910["div_layer_name"]),
            _0x4f7910["link"] && (_0x815474 = _0x4f7910["link"]),
            _0x4f7910["newWindow"] && (_0x130e39 = _0x4f7910["newWindow"]),
            this["createClickableLayer"](_0x29da34, _0x815474, _0x130e39);
        },
        createClickableLayer: function (_0x55a2a5, _0x5ed93c, _0x2bb1fe) {
          this["identifier"] = _0x55a2a5;
          var _0x6e25ef = ig["domHandler"]["getElementById"]("#" + _0x55a2a5);
          _0x6e25ef
            ? (ig["domHandler"]["show"](_0x6e25ef),
              ig["domHandler"]["attr"](_0x6e25ef, "href", _0x5ed93c))
            : this["createClickableOutboundLayer"](
                _0x55a2a5,
                _0x5ed93c,
                this["invisImagePath"],
                _0x2bb1fe
              );
        },
        update: function (_0x29d343, _0x11c4c4) {
          (this["pos"]["x"] === _0x29d343 && this["pos"]["y"] === _0x11c4c4) ||
            ((ig["sizeHandler"]["dynamicClickableEntityDivs"][
              this["identifier"]
            ] = {}),
            (ig["sizeHandler"]["dynamicClickableEntityDivs"][
              this["identifier"]
            ]["width"] = this["size"]["x"]),
            (ig["sizeHandler"]["dynamicClickableEntityDivs"][
              this["identifier"]
            ]["height"] = this["size"]["y"]),
            (ig["sizeHandler"]["dynamicClickableEntityDivs"][
              this["identifier"]
            ]["entity_pos_x"] = this["pos"]["x"]),
            (ig["sizeHandler"]["dynamicClickableEntityDivs"][
              this["identifier"]
            ]["entity_pos_y"] = this["pos"]["y"]));
        },
        createClickableOutboundLayer: function (
          _0x29502f,
          _0x7f6bb5,
          _0x16d7c0,
          _0x3bdd26
        ) {
          var _0x21b3ea = ig["domHandler"]["create"]("div");
          ig["domHandler"]["attr"](_0x21b3ea, "id", _0x29502f);
          var _0x3b561d = ig["domHandler"]["create"]("a");
          _0x3bdd26
            ? (ig["domHandler"]["attr"](_0x3b561d, "href", _0x7f6bb5),
              ig["domHandler"]["attr"](_0x3b561d, "target", "_blank"))
            : ig["domHandler"]["attr"](_0x3b561d, "href", _0x7f6bb5),
            (_0x7f6bb5 = ig["domHandler"]["create"]("img")),
            ig["domHandler"]["css"](_0x7f6bb5, {
              width: "100%",
              height: "100%",
            }),
            ig["domHandler"]["attr"](_0x7f6bb5, "src", _0x16d7c0),
            (_0x16d7c0 = Math["min"](
              ig["sizeHandler"]["scaleRatioMultiplier"]["x"],
              ig["sizeHandler"]["scaleRatioMultiplier"]["y"]
            ));
          if (ig["ua"]["mobile"]) {
            _0x3bdd26 =
              Math["floor"](
                this["pos"]["x"] *
                  ig["sizeHandler"]["scaleRatioMultiplier"]["x"]
              ) + "px";
            var _0x2624e8 =
                Math["floor"](
                  this["pos"]["y"] *
                    ig["sizeHandler"]["scaleRatioMultiplier"]["y"]
                ) + "px",
              _0x37546c =
                Math["floor"](
                  this["size"]["x"] *
                    ig["sizeHandler"]["scaleRatioMultiplier"]["x"]
                ) + "px";
            _0x16d7c0 =
              Math["floor"](
                this["size"]["y"] *
                  ig["sizeHandler"]["scaleRatioMultiplier"]["y"]
              ) + "px";
          } else
            (_0x3bdd26 = ig["domHandler"]["getElementById"]("#canvas")),
              (_0x3bdd26 = ig["domHandler"]["getOffsets"](_0x3bdd26)),
              (_0x2624e8 = _0x3bdd26["top"]),
              (_0x3bdd26 =
                Math["floor"](
                  _0x3bdd26["left"] + this["pos"]["x"] * _0x16d7c0
                ) + "px"),
              (_0x2624e8 =
                Math["floor"](_0x2624e8 + this["pos"]["y"] * _0x16d7c0) + "px"),
              (_0x37546c = Math["floor"](this["size"]["x"] * _0x16d7c0) + "px"),
              (_0x16d7c0 = Math["floor"](this["size"]["y"] * _0x16d7c0) + "px");
          ig["domHandler"]["css"](_0x21b3ea, {
            float: "left",
            position: "absolute",
            left: _0x3bdd26,
            top: _0x2624e8,
            width: _0x37546c,
            height: _0x16d7c0,
            "z-index": 0x3,
          }),
            ig["domHandler"]["addEvent"](
              _0x21b3ea,
              "mousemove",
              ig["input"]["mousemove"]["bind"](ig["input"]),
              !0x1
            ),
            ig["domHandler"]["appendChild"](_0x3b561d, _0x7f6bb5),
            ig["domHandler"]["appendChild"](_0x21b3ea, _0x3b561d),
            ig["domHandler"]["appendToBody"](_0x21b3ea),
            (ig["sizeHandler"]["dynamicClickableEntityDivs"][_0x29502f] = {}),
            (ig["sizeHandler"]["dynamicClickableEntityDivs"][_0x29502f][
              "width"
            ] = this["size"]["x"]),
            (ig["sizeHandler"]["dynamicClickableEntityDivs"][_0x29502f][
              "height"
            ] = this["size"]["y"]),
            (ig["sizeHandler"]["dynamicClickableEntityDivs"][_0x29502f][
              "entity_pos_x"
            ] = this["pos"]["x"]),
            (ig["sizeHandler"]["dynamicClickableEntityDivs"][_0x29502f][
              "entity_pos_y"
            ] = this["pos"]["y"]);
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.entities.buttons.button-branding-logo")
    ["requires"]("game.entities.buttons.button", "plugins.clickable-div-layer")
    ["defines"](function () {
      EntityButtonBrandingLogo = EntityButton["extend"]({
        type: ig["Entity"]["TYPE"]["A"],
        gravityFactor: 0x0,
        logo: new ig["AnimationSheet"](
          "branding/logo.png",
          _SETTINGS["Branding"]["Logo"]["Width"],
          _SETTINGS["Branding"]["Logo"]["Height"]
        ),
        zIndex: 0x2711,
        size: { x: 0x40, y: 0x42 },
        clickableLayer: null,
        link: null,
        newWindow: !0x1,
        div_layer_name: "branding-logo",
        name: "brandinglogo",
        init: function (_0xd31712, _0x4f6afe, _0xae3c9b) {
          this["parent"](_0xd31712, _0x4f6afe, _0xae3c9b);
          if (!ig["global"]["wm"]) {
            if ("undefined" == typeof wm) {
              if (_SETTINGS["Branding"]["Logo"]["Enabled"])
                (this["size"]["x"] = _SETTINGS["Branding"]["Logo"]["Width"]),
                  (this["size"]["y"] = _SETTINGS["Branding"]["Logo"]["Height"]),
                  (this["anims"]["idle"] = new ig["Animation"](
                    this["logo"],
                    0x0,
                    [0x0],
                    !0x0
                  )),
                  (this["currentAnim"] = this["anims"]["idle"]),
                  _0xae3c9b &&
                    _0xae3c9b["centralize"] &&
                    ((this["pos"]["x"] =
                      ig["system"]["width"] / 0x2 - this["size"]["x"] / 0x2),
                    console["log"](
                      "centralize\x20true\x20...\x20centering\x20branded\x20logo\x20..."
                    )),
                  _SETTINGS["Branding"]["Logo"]["LinkEnabled"] &&
                    ((this["link"] = _SETTINGS["Branding"]["Logo"]["Link"]),
                    (this["newWindow"] =
                      _SETTINGS["Branding"]["Logo"]["NewWindow"]),
                    (this["clickableLayer"] = new ClickableDivLayer(this)));
              else {
                this["kill"]();
                return;
              }
            }
            this["div_layer_name"] = _0xae3c9b["div_layer_name"]
              ? _0xae3c9b["div_layer_name"]
              : "branding-logo";
          }
        },
        show: function () {
          var _0x45b1ab = ig["domHandler"]["getElementById"](
            "#" + this["div_layer_name"]
          );
          ig["domHandler"]["show"](_0x45b1ab);
        },
        hide: function () {
          var _0x5331bd = ig["domHandler"]["getElementById"](
            "#" + this["div_layer_name"]
          );
          ig["domHandler"]["hide"](_0x5331bd);
        },
        clicked: function () {},
        clicking: function () {},
        released: function () {},
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.entities.branding-logo-placeholder")
    ["requires"]("impact.entity", "game.entities.buttons.button-branding-logo")
    ["defines"](function () {
      EntityBrandingLogoPlaceholder = ig["Entity"]["extend"]({
        gravityFactor: 0x0,
        size: { x: 0x20, y: 0x20 },
        _wmDrawBox: !0x0,
        _wmBoxColor: "rgba(0,\x200,\x20255,\x200.7)",
        init: function (_0x398707, _0x1a7230, _0xd8aeee) {
          this["parent"](_0x398707, _0x1a7230, _0xd8aeee);
          if (_0xd8aeee)
            switch (
              (console["log"](
                "settings\x20found\x20...\x20using\x20that\x20div\x20layer\x20name"
              ),
              (_0x398707 = _0xd8aeee["div_layer_name"]),
              console["log"]("settings.centralize:", _0xd8aeee["centralize"]),
              _0xd8aeee["centralize"])
            ) {
              case "true":
                console["log"]("centralize\x20true"), (centralize = !0x0);
                break;
              case "false":
                console["log"]("centralize\x20false"), (centralize = !0x1);
                break;
              default:
                console["log"]("default\x20...\x20centralize\x20false"),
                  (centralize = !0x1);
            }
          else (_0x398707 = "branding-logo"), (centralize = !0x1);
          if ("undefined" == typeof wm) {
            if (_SETTINGS["Branding"]["Logo"]["Enabled"])
              try {
                ig["game"]["spawnEntity"](
                  EntityButtonBrandingLogo,
                  this["pos"]["x"],
                  this["pos"]["y"],
                  { div_layer_name: _0x398707, centralize: centralize }
                );
              } catch (_0x292dc5) {
                console["log"](_0x292dc5);
              }
            this["kill"]();
          }
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.entities.buttons.button-more-games")
    ["requires"]("game.entities.buttons.button", "plugins.clickable-div-layer")
    ["defines"](function () {
      EntityButtonMoreGames = EntityButton["extend"]({
        type: ig["Entity"]["TYPE"]["A"],
        gravityFactor: 0x0,
        logo: new ig["AnimationSheet"](
          "media/graphics/sprites/buttons/button-empty.png",
          0xa4,
          0x39
        ),
        size: { x: 0xa4, y: 0x39 },
        zIndex: 0x2ee,
        clickableLayer: null,
        link: null,
        newWindow: !0x1,
        div_layer_name: "more-games",
        name: "moregames",
        init: function (_0x3cd958, _0x34187e, _0x26cac8) {
          this["parent"](_0x3cd958, _0x34187e, _0x26cac8),
            ig["global"]["wm"] ||
              ((this["div_layer_name"] = _0x26cac8["div_layer_name"]
                ? _0x26cac8["div_layer_name"]
                : "more-games"),
              _SETTINGS["MoreGames"]["Enabled"]
                ? ((this["anims"]["idle"] = new ig["Animation"](
                    this["logo"],
                    0x0,
                    [0x0],
                    !0x0
                  )),
                  (this["currentAnim"] = this["anims"]["idle"]),
                  (this["anims"]["hover"] = new ig["Animation"](
                    this["logo"],
                    0x0,
                    [0x1],
                    !0x0
                  )),
                  _SETTINGS["MoreGames"]["Link"] &&
                    (this["link"] = _SETTINGS["MoreGames"]["Link"]),
                  _SETTINGS["MoreGames"]["NewWindow"] &&
                    (this["newWindow"] = _SETTINGS["MoreGames"]["NewWindow"]),
                  (this["clickableLayer"] = new ClickableDivLayer(this)))
                : this["kill"]());
        },
        show: function () {
          var _0x37a3c7 = ig["domHandler"]["getElementById"](
            "#" + this["div_layer_name"]
          );
          ig["domHandler"]["show"](_0x37a3c7);
        },
        hide: function () {
          var _0x4722e6 = ig["domHandler"]["getElementById"](
            "#" + this["div_layer_name"]
          );
          ig["domHandler"]["hide"](_0x4722e6);
        },
        clicked: function () {},
        clicking: function () {},
        released: function () {},
        draw: function () {
          this["parent"]();
          if (!ig["global"]["wm"]) {
            var _0x43a62c = ig["system"]["context"];
            (_0x43a62c["textAlign"] = "center"),
              (_0x43a62c["textBaseline"] = "middle"),
              (_0x43a62c["fillStyle"] = "brown"),
              (_0x43a62c["font"] =
                this["currentAnim"] == this["anims"]["idle"]
                  ? "20px\x20bpreplay"
                  : "23px\x20bpreplay"),
              _0x43a62c["fillText"](
                _STRINGS["Game"]["MoreGames"],
                this["pos"]["x"] + 0x52,
                this["pos"]["y"] + 0x18
              );
          }
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.entities.opening-shield")
    ["requires"]("impact.entity")
    ["defines"](function () {
      EntityOpeningShield = ig["Entity"]["extend"]({
        size: { x: 0x30, y: 0x30 },
        move: 0x0,
        mIconAnim: 0x0,
        shieldAnim: 0x0,
        titleAnim: 0x0,
        shieldImage: new ig["Image"]("media/graphics/opening/shield.png"),
        mIconImage: new ig["Image"]("media/graphics/opening/m_icon.png"),
        titleImage: new ig["Image"]("media/graphics/opening/title.png"),
        init: function (_0x201f9a, _0x281eb3, _0x5b6bc6) {
          this["parent"](_0x201f9a, _0x281eb3, _0x5b6bc6);
        },
        ready: function () {
          if (!ig["wm"]) {
            if (_SETTINGS["DeveloperBranding"]["Splash"]["Enabled"]) {
              this["initTimer"] = new ig["Timer"](0.1);
              try {
                ig["soundHandler"]["playSound"](
                  ig["soundHandler"]["SOUNDID"]["openingSound"]
                );
              } catch (_0x4e89cd) {
                console["log"](_0x4e89cd);
              }
            } else
              ig["game"]["director"]["nextLevel"](),
                (ig["system"]["context"]["globalAlpha"] = 0x1),
                this["kill"]();
          }
        },
        update: function () {
          this["parent"](), this["updateOriginalShieldOpening"]();
        },
        draw: function () {
          this["parent"](),
            ig["global"]["wm"] ||
              (this["nextLevelTimer"] &&
                0x0 > this["nextLevelTimer"]["delta"]() &&
                (ig["system"]["context"]["globalAlpha"] =
                  -this["nextLevelTimer"]["delta"]()),
              this["drawOriginalShieldOpening"]());
        },
        updateOriginalShieldOpening: function () {
          this["initTimer"] &&
            0x0 < this["initTimer"]["delta"]() &&
            ((this["initTimer"] = null),
            (this["sheildTimer"] = new ig["Timer"](0.05))),
            this["sheildTimer"] &&
              0x0 < this["sheildTimer"]["delta"]() &&
              (0x3 > this["shieldAnim"]
                ? (this["shieldAnim"]++, this["sheildTimer"]["reset"]())
                : ((this["sheildTimer"] = null),
                  (this["moveTimer"] = new ig["Timer"](0.001)),
                  (this["mIconTimer"] = new ig["Timer"](0.05)),
                  (this["titleTimer"] = new ig["Timer"](0.15)))),
            this["moveTimer"] &&
              0x0 < this["moveTimer"]["delta"]() &&
              ((this["move"] += 0.3), this["moveTimer"]["reset"]()),
            this["mIconTimer"] &&
              0x0 < this["mIconTimer"]["delta"]() &&
              (0xc > this["mIconAnim"]
                ? (this["mIconAnim"]++, this["moveTimer"]["reset"]())
                : (this["mIconTimer"] = null)),
            this["titleTimer"] &&
              0x0 < this["titleTimer"]["delta"]() &&
              (0xb > this["titleAnim"]
                ? (this["titleAnim"]++, this["titleTimer"]["reset"]())
                : ((this["titleTimer"] = null),
                  (this["nextLevelTimer"] = new ig["Timer"](0x1)))),
            this["nextLevelTimer"] &&
              0x0 < this["nextLevelTimer"]["delta"]() &&
              ((this["nextLevelTimer"] = null),
              ig["game"]["director"]["nextLevel"](),
              (ig["system"]["context"]["globalAlpha"] = 0x1));
        },
        drawOriginalShieldOpening: function () {
          if (this["moveTimer"]) {
            var _0x42aca4 = ig["system"]["context"];
            _0x42aca4["save"]();
            var _0xad2c70 = ig["system"]["width"] / 0x2,
              _0x51d08c = ig["system"]["height"] / 0x2;
            _0x42aca4["translate"](_0xad2c70, _0x51d08c),
              _0x42aca4["rotate"]((this["move"] * Math["PI"]) / 0xb4),
              _0x42aca4["beginPath"](),
              _0x42aca4["moveTo"](0x0, 0x0);
            for (
              var _0x47b837 = 0x0, _0x397eab = 0x1;
              0x30 >= _0x397eab;
              _0x397eab += 0x1
            )
              _0x42aca4["lineTo"](
                0x0 +
                  0x320 * Math["cos"]((0x2 * _0x397eab * Math["PI"]) / 0x30),
                0x0 + 0x320 * Math["sin"]((0x2 * _0x397eab * Math["PI"]) / 0x30)
              ),
                _0x47b837++,
                0x2 == _0x47b837 &&
                  ((_0x47b837 = 0x0), _0x42aca4["lineTo"](0x0, 0x0));
            _0x42aca4["translate"](-_0xad2c70, -_0x51d08c),
              (_0xad2c70 = _0x42aca4["createRadialGradient"](
                _0xad2c70,
                _0x51d08c,
                0x64,
                _0xad2c70,
                _0x51d08c,
                0xfa
              )),
              _0xad2c70["addColorStop"](0x0, "rgba(255,255,255,0.1)"),
              _0xad2c70["addColorStop"](0x1, "rgba(0,0,0,0)"),
              (_0x42aca4["fillStyle"] = _0xad2c70),
              _0x42aca4["fill"](),
              _0x42aca4["restore"]();
          }
          this["shieldImage"]["drawTile"](
            ig["system"]["width"] / 0x2 - 0x5b,
            0x0 - (0x300 - ig["system"]["height"]) / 0x2,
            this["shieldAnim"],
            0xb6,
            0x300
          ),
            this["moveTimer"] &&
              (this["mIconImage"]["drawTile"](
                ig["system"]["width"] / 0x2 - 0x60,
                ig["system"]["height"] / 0x2 - 0x46,
                this["mIconAnim"],
                0xa6,
                0xa0
              ),
              this["titleImage"]["drawTile"](
                ig["system"]["width"] / 0x2 - 0xcc,
                ig["system"]["height"] / 0x2 + 0x64,
                this["titleAnim"],
                0x199,
                0x4c
              )),
            (ig["system"]["context"]["globalAlpha"] = 0x1);
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.entities.opening-kitty")
    ["requires"]("impact.entity")
    ["defines"](function () {
      EntityOpeningKitty = ig["Entity"]["extend"]({
        size: { x: 0x30, y: 0x30 },
        kittyAnim: -0x1,
        kittyImage: new ig["Image"]("media/graphics/opening/kitty.png"),
        kittyTitleImage: new ig["Image"](
          "media/graphics/opening/kittytitle.png"
        ),
        soundKey: "kittyopeningSound",
        init: function (_0x4e2f70, _0x3e7c26, _0x29d8ab) {
          this["parent"](_0x4e2f70, _0x3e7c26, _0x29d8ab);
        },
        ready: function () {
          if (!ig["wm"]) {
            if (_SETTINGS["DeveloperBranding"]["Splash"]["Enabled"]) {
              this["initTimer"] = new ig["Timer"](0.1);
              try {
                ig["soundHandler"]["sfxPlayer"]["play"](this["soundKey"]);
              } catch (_0x190dab) {
                console["log"](_0x190dab);
              }
            } else
              ig["game"]["director"]["nextLevel"](),
                (ig["system"]["context"]["globalAlpha"] = 0x1),
                this["kill"]();
          }
        },
        update: function () {
          this["parent"](), this["updateKittyOpening"]();
        },
        draw: function () {
          this["parent"](),
            ig["global"]["wm"] ||
              (this["nextLevelTimer"] &&
                0x0 > this["nextLevelTimer"]["delta"]() &&
                (ig["system"]["context"]["globalAlpha"] =
                  -this["nextLevelTimer"]["delta"]()),
              this["drawKittyOpening"]());
        },
        updateKittyOpening: function () {
          this["initTimer"] &&
            0x0 < this["initTimer"]["delta"]() &&
            ((this["initTimer"] = null),
            (this["kittyTimer"] = new ig["Timer"](0.15))),
            this["kittyTimer"] &&
              0x0 < this["kittyTimer"]["delta"]() &&
              (0x7 > this["kittyAnim"]
                ? (this["kittyAnim"]++, this["kittyTimer"]["reset"]())
                : ((this["kittyTimer"] = null),
                  (this["nextLevelTimer"] = new ig["Timer"](0x2)))),
            this["nextLevelTimer"] &&
              0x0 < this["nextLevelTimer"]["delta"]() &&
              ((this["nextLevelTimer"] = null),
              ig["game"]["director"]["nextLevel"](),
              (ig["system"]["context"]["globalAlpha"] = 0x1));
        },
        drawKittyOpening: function () {
          var _0xe226e0 = ig["system"]["context"]["createLinearGradient"](
            0x0,
            0x0,
            0x0,
            ig["system"]["height"]
          );
          _0xe226e0["addColorStop"](0x0, "#ffed94"),
            _0xe226e0["addColorStop"](0x1, "#ffcd85"),
            (ig["system"]["context"]["fillStyle"] = _0xe226e0),
            ig["system"]["context"]["fillRect"](
              0x0,
              0x0,
              ig["system"]["width"],
              ig["system"]["height"]
            ),
            0x0 <= this["kittyAnim"] &&
              (this["kittyImage"]["drawTile"](
                ig["system"]["width"] / 0x2 - this["kittyImage"]["width"] / 0x8,
                ig["system"]["height"] / 0x2 -
                  this["kittyImage"]["height"] / 0x4,
                this["kittyAnim"],
                0xda,
                0x145
              ),
              this["kittyTitleImage"]["drawTile"](
                ig["system"]["width"] / 0x2 -
                  this["kittyTitleImage"]["width"] / 0x2,
                ig["system"]["height"] / 0x2 +
                  this["kittyImage"]["height"] / 0x4 +
                  0xa,
                this["kittyAnim"],
                0x17c,
                0x25
              )),
            (ig["system"]["context"]["globalAlpha"] = 0x1);
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.entities.pointer")
    ["requires"]("impact.entity")
    ["defines"](function () {
      EntityPointer = ig["Entity"]["extend"]({
        checkAgainst: ig["Entity"]["TYPE"]["BOTH"],
        isFirstPressed: !0x1,
        isPressed: !0x1,
        isReleased: !0x1,
        isHovering: !0x1,
        hoveringItem: null,
        objectArray: [],
        clickedObjectList: [],
        ignorePause: !0x0,
        zIndex: 0x1388,
        check: function (_0x5c4a18) {
          this["objectArray"]["push"](_0x5c4a18);
        },
        clickObject: function (_0x55c793) {
          this["isFirstPressed"] &&
            "function" == typeof _0x55c793["clicked"] &&
            (_0x55c793["clicked"](), this["addToClickedObjectList"](_0x55c793)),
            this["isPressed"] &&
              !this["isReleased"] &&
              "function" == typeof _0x55c793["clicking"] &&
              _0x55c793["clicking"](),
            this["isReleased"] &&
              "function" == typeof _0x55c793["released"] &&
              (_0x55c793["released"](),
              this["removeFromClickedObjectList"](_0x55c793));
        },
        refreshPos: function () {
          this["pos"] = ig["game"]["io"]["getClickPos"]();
        },
        update: function () {
          this["parent"](), this["refreshPos"]();
          var _0x5668c3 = null,
            _0x592320 = -0x1;
          for (a = this["objectArray"]["length"] - 0x1; -0x1 < a; a--)
            this["objectArray"][a]["zIndex"] > _0x592320 &&
              ((_0x592320 = this["objectArray"][a]["zIndex"]),
              (_0x5668c3 = this["objectArray"][a]));
          if (null != _0x5668c3)
            null != this["hoveringItem"]
              ? this["hoveringItem"] != _0x5668c3 &&
                ("function" == typeof this["hoveringItem"]["leave"] &&
                  this["hoveringItem"]["leave"](),
                "function" == typeof _0x5668c3["over"] && _0x5668c3["over"]())
              : "function" == typeof _0x5668c3["over"] && _0x5668c3["over"](),
              (this["hoveringItem"] = _0x5668c3),
              this["clickObject"](_0x5668c3),
              (this["objectArray"] = []);
          else {
            if (
              (null != this["hoveringItem"] &&
                "function" == typeof this["hoveringItem"]["leave"] &&
                (this["hoveringItem"]["leave"](),
                (this["hoveringItem"] = null)),
              this["isReleased"])
            ) {
              for (
                _0x5668c3 = 0x0;
                _0x5668c3 < this["clickedObjectList"]["length"];
                _0x5668c3++
              )
                (_0x592320 = this["clickedObjectList"][_0x5668c3]),
                  "function" == typeof _0x592320["releasedOutside"] &&
                    _0x592320["releasedOutside"]();
              this["clickedObjectList"] = [];
            }
          }
          (this["isFirstPressed"] = ig["input"]["pressed"]("click")),
            (this["isReleased"] = ig["input"]["released"]("click")),
            (this["isPressed"] = ig["input"]["state"]("click"));
        },
        addToClickedObjectList: function (_0x18aa8d) {
          this["clickedObjectList"]["push"](_0x18aa8d);
        },
        removeFromClickedObjectList: function (_0x4672c6) {
          for (
            var _0x3e5e0e = [], _0x18a38d = 0x0;
            _0x18a38d < this["clickedObjectList"]["length"];
            _0x18a38d++
          ) {
            var _0x14ad4e = this["clickedObjectList"][_0x18a38d];
            _0x14ad4e != _0x4672c6 && _0x3e5e0e["push"](_0x14ad4e);
          }
          this["clickedObjectList"] = _0x3e5e0e;
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.entities.pointer-selector")
    ["requires"]("game.entities.pointer")
    ["defines"](function () {
      EntityPointerSelector = EntityPointer["extend"]({
        zIndex: 0x3e8,
        _wmDrawBox: !0x0,
        _wmBoxColor: "rgba(0,\x200,\x20255,\x200.7)",
        size: { x: 0x2, y: 0x2 },
        init: function (_0x11ba0b, _0x1a0800, _0x5e53c3) {
          this["parent"](_0x11ba0b, _0x1a0800, _0x5e53c3);
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.entities.select")
    ["requires"]("impact.entity")
    ["defines"](function () {
      EntitySelect = ig["Entity"]["extend"]({
        type: ig["Entity"]["TYPE"]["B"],
        checkAgainst: ig["Entity"]["TYPE"]["A"],
        collides: ig["Entity"]["COLLIDES"]["NEVER"],
        canSelect: !0x1,
        canSelectTimerDuration: 0.35,
        zIndex: 0x1869f,
        isHovering: !0x1,
        isSelected: !0x1,
        init: function (_0x2c170a, _0x2b3b05, _0x1da6ca) {
          this["parent"](_0x2c170a, _0x2b3b05, _0x1da6ca),
            (this["canSelectTimer"] = new ig["Timer"](
              this["canSelectTimerDuration"]
            ));
        },
        doesClickableLayerExist: function (_0x53a5a6) {
          for (k in dynamicClickableEntityDivs) if (k == _0x53a5a6) return !0x0;
          return !0x1;
        },
        checkClickableLayer: function (_0x41d8fb, _0x4e312a, _0x3ce551) {
          "undefined" == typeof wm &&
            (this["doesClickableLayerExist"](_0x41d8fb)
              ? (ig["game"]["showOverlay"]([_0x41d8fb]),
                $("#" + _0x41d8fb)
                  ["find"]("[href]")
                  ["attr"]("href", _0x4e312a))
              : this["createClickableOutboundLayer"](
                  _0x41d8fb,
                  _0x4e312a,
                  "media/graphics/misc/invisible.png",
                  _0x3ce551
                ));
        },
        createClickableOutboundLayer: function (
          _0x427742,
          _0x181d6d,
          _0xb96bd3,
          _0x1f9d36
        ) {
          var _0x5855f2 = ig["$new"]("div");
          (_0x5855f2["id"] = _0x427742),
            document["body"]["appendChild"](_0x5855f2),
            $("#" + _0x5855f2["id"])["css"]("float", "left"),
            $("#" + _0x5855f2["id"])["css"](
              "width",
              this["size"]["x"] * multiplier
            ),
            $("#" + _0x5855f2["id"])["css"](
              "height",
              this["size"]["y"] * multiplier
            ),
            $("#" + _0x5855f2["id"])["css"]("position", "absolute");
          var _0x348608 = w / 0x2 - destW / 0x2,
            _0x4bb032 = h / 0x2 - destH / 0x2;
          w == mobileWidth
            ? ($("#" + _0x5855f2["id"])["css"]("left", this["pos"]["x"]),
              $("#" + _0x5855f2["id"])["css"]("top", this["pos"]["y"]))
            : ($("#" + _0x5855f2["id"])["css"](
                "left",
                _0x348608 + this["pos"]["x"] * multiplier
              ),
              $("#" + _0x5855f2["id"])["css"](
                "top",
                _0x4bb032 + this["pos"]["y"] * multiplier
              )),
            _0x1f9d36
              ? $("#" + _0x5855f2["id"])["html"](
                  "<a\x20target=\x27_blank\x27\x20href=\x27" +
                    _0x181d6d +
                    "\x27><img\x20style=\x27width:100%;height:100%\x27\x20src=\x27" +
                    _0xb96bd3 +
                    "\x27></a>"
                )
              : $("#" + _0x5855f2["id"])["html"](
                  "<a\x20href=\x27" +
                    _0x181d6d +
                    "\x27><img\x20style=\x27width:100%;height:100%\x27\x20src=\x27" +
                    _0xb96bd3 +
                    "\x27></a>"
                ),
            (dynamicClickableEntityDivs[_0x427742] = {}),
            (dynamicClickableEntityDivs[_0x427742]["width"] = $(
              "#" + _0x5855f2["id"]
            )["width"]()),
            (dynamicClickableEntityDivs[_0x427742]["height"] = $(
              "#" + _0x5855f2["id"]
            )["height"]()),
            (dynamicClickableEntityDivs[_0x427742]["entity_pos_x"] =
              this["pos"]["x"]),
            (dynamicClickableEntityDivs[_0x427742]["entity_pos_y"] =
              this["pos"]["y"]);
        },
        hovered: function () {
          (this["isHovering"] = !0x0), this["dehoverOthers"]();
        },
        dehoverOthers: function () {
          var _0x24223f = ig["game"]["getEntitiesByType"](EntitySelect);
          for (i = 0x0; i < _0x24223f["length"]; i++)
            _0x24223f[i] != this && (_0x24223f[i]["isHovering"] = !0x1);
        },
        deselectOthers: function () {
          var _0x328a50 = ig["game"]["getEntitiesByType"](EntitySelect);
          for (i = 0x0; i < _0x328a50["length"]; i++)
            _0x328a50[i] != this && (_0x328a50[i]["isSelected"] = !0x1);
        },
        update: function () {
          this["parent"](),
            this["canSelectTimer"] &&
              0x0 < this["canSelectTimer"]["delta"]() &&
              ((this["canSelect"] = !0x0), (this["canSelectTimer"] = null));
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.entities.card")
    ["requires"]("impact.entity", "impact.timer")
    ["defines"](function () {
      EntityCard = ig["Entity"]["extend"]({
        size: { x: 0x3c, y: 0x56 },
        type: ig["Entity"]["TYPE"]["A"],
        played: !0x1,
        zIndex: 0x320,
        ignorePause: !0x0,
        animSheet: new ig["AnimationSheet"](
          "media/graphics/sprites/cards/spades.png",
          0x3c,
          0x56
        ),
        angled: null,
        passed: 0x0,
        init: function (_0xc7dfc3, _0x264674, _0x444760) {
          this["parent"](_0xc7dfc3, _0x264674, _0x444760),
            this["addAnim"]("back", 0x1, [0xd]),
            this["addAnim"]("A", 0x1, [0x0]),
            this["addAnim"]("n2", 0x1, [0x1]),
            this["addAnim"]("n3", 0x1, [0x2]),
            this["addAnim"]("n4", 0x1, [0x3]),
            this["addAnim"]("n5", 0x1, [0x4]),
            this["addAnim"]("n6", 0x1, [0x5]),
            this["addAnim"]("n7", 0x1, [0x6]),
            this["addAnim"]("n8", 0x1, [0x7]),
            this["addAnim"]("n9", 0x1, [0x8]),
            this["addAnim"]("n10", 0x1, [0x9]),
            this["addAnim"]("J", 0x1, [0xa]),
            this["addAnim"]("Q", 0x1, [0xb]),
            this["addAnim"]("K", 0x1, [0xc]),
            (this["clickTimer"] = new ig["Timer"]());
        },
        update: function () {
          this["parent"](),
            this["displayTimer"] &&
              0x0 < this["displayTimer"]["delta"]() &&
              (this["displayCard"](), (this["displayTimer"] = void 0x0)),
            this["rotateTimer"] &&
              0x0 < this["rotateTimer"]["delta"]() &&
              ((this["currentAnim"]["angle"] += this["angled"]),
              (this["rotateTimer"] = void 0x0));
        },
        displayCard: function () {
          if (this["number"])
            switch (this["number"]) {
              case 0x1:
                this["currentAnim"] = this["anims"]["A"];
                break;
              case 0x2:
                this["currentAnim"] = this["anims"]["n2"];
                break;
              case 0x3:
                this["currentAnim"] = this["anims"]["n3"];
                break;
              case 0x4:
                this["currentAnim"] = this["anims"]["n4"];
                break;
              case 0x5:
                this["currentAnim"] = this["anims"]["n5"];
                break;
              case 0x6:
                this["currentAnim"] = this["anims"]["n6"];
                break;
              case 0x7:
                this["currentAnim"] = this["anims"]["n7"];
                break;
              case 0x8:
                this["currentAnim"] = this["anims"]["n8"];
                break;
              case 0x9:
                this["currentAnim"] = this["anims"]["n9"];
                break;
              case 0xa:
                this["currentAnim"] = this["anims"]["n10"];
                break;
              case 0xb:
                this["currentAnim"] = this["anims"]["J"];
                break;
              case 0xc:
                this["currentAnim"] = this["anims"]["Q"];
                break;
              case 0xd:
                this["currentAnim"] = this["anims"]["K"];
            }
        },
        notDisplayCard: function () {
          this["currentAnim"] = this["anims"]["back"];
        },
        clicked: function () {
          !this["played"] &&
            0x1 == this["owner"] &&
            0x0 < this["clickTimer"]["delta"]() &&
            ig["game"]["playerTurn"] &&
            "playing" == ig["game"]["gameState"] &&
            (ig["game"]["players"][0x0]["playCard"](this),
            this["clickTimer"]["set"](0.3)),
            0x1 == this["owner"] &&
              0x0 < this["clickTimer"]["delta"]() &&
              "passing" == ig["game"]["gameState"] &&
              (this["selected"]
                ? ((this["selected"] = !0x1),
                  ig["game"]["players"][0x0]["passDeselect"](this))
                : ((this["selected"] = !0x0),
                  ig["game"]["players"][0x0]["passSelect"](this)),
              this["clickTimer"]["set"](0.3));
        },
        tweenPlay: function (_0x8ecad8, _0xadadb4) {
          ig["global"]["wm"] ||
            this["tween"]({ pos: { x: _0x8ecad8, y: _0xadadb4 } }, 0.5, {
              onComplete: function () {}["bind"](this),
              easing: ig["Tween"]["Easing"]["Linear"]["EaseNone"],
              delay: 0x0,
            })["start"]();
        },
        tweenIn: function (_0x4aad4e, _0x4537eb) {
          ig["global"]["wm"] ||
            this["tween"]({ pos: { x: _0x4aad4e, y: _0x4537eb } }, 0.3, {
              onComplete: function () {}["bind"](this),
              easing: ig["Tween"]["Easing"]["Linear"]["EaseNone"],
              delay: 0.05 * this["sequence"],
            })["start"]();
        },
        tweenOut: function (_0x4ff2c6, _0x1e64f6) {
          ig["global"]["wm"] ||
            this["tween"]({ pos: { x: _0x4ff2c6, y: _0x1e64f6 } }, 0.5, {
              onComplete: function () {
                this["kill"]();
              }["bind"](this),
              easing: ig["Tween"]["Easing"]["Linear"]["EaseNone"],
              delay: 0x0,
            })["start"]();
        },
        tweenPass: function (_0x255937, _0x4c9d78) {
          ig["global"]["wm"] ||
            this["tween"]({ pos: { x: _0x255937, y: _0x4c9d78 } }, 0.3, {
              onComplete: function () {}["bind"](this),
              easing: ig["Tween"]["Easing"]["Linear"]["EaseNone"],
              delay: 0x0,
            })["start"]();
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.entities.spade")
    ["requires"]("game.entities.card")
    ["defines"](function () {
      EntitySpade = EntityCard["extend"]({
        init: function (_0x46ed2e, _0x42ae82, _0x4ad9b6) {
          this["parent"](_0x46ed2e, _0x42ae82, _0x4ad9b6);
        },
        update: function () {
          this["parent"]();
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.entities.heart")
    ["requires"]("game.entities.card")
    ["defines"](function () {
      EntityHeart = EntityCard["extend"]({
        animSheet: new ig["AnimationSheet"](
          "media/graphics/sprites/cards/hearts.png",
          0x3c,
          0x56
        ),
        init: function (_0x5b5a54, _0x200a9e, _0x50b403) {
          this["parent"](_0x5b5a54, _0x200a9e, _0x50b403);
        },
        update: function () {
          this["parent"]();
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.entities.club")
    ["requires"]("game.entities.card")
    ["defines"](function () {
      EntityClub = EntityCard["extend"]({
        animSheet: new ig["AnimationSheet"](
          "media/graphics/sprites/cards/clubs.png",
          0x3c,
          0x56
        ),
        init: function (_0x2785e8, _0x2a9943, _0x2aad26) {
          this["parent"](_0x2785e8, _0x2a9943, _0x2aad26);
        },
        update: function () {
          this["parent"]();
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.entities.diamond")
    ["requires"]("game.entities.card")
    ["defines"](function () {
      EntityDiamond = EntityCard["extend"]({
        animSheet: new ig["AnimationSheet"](
          "media/graphics/sprites/cards/diamonds.png",
          0x3c,
          0x56
        ),
        init: function (_0xa03da, _0x4cda4f, _0x517d0d) {
          this["parent"](_0xa03da, _0x4cda4f, _0x517d0d);
        },
        update: function () {
          this["parent"]();
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.entities.buttons.button-bid-number")
    ["requires"]("game.entities.buttons.button")
    ["defines"](function () {
      EntityButtonBidNumber = EntityButton["extend"]({
        size: { x: 0x4c, y: 0x4c },
        animSheet: new ig["AnimationSheet"](
          "media/graphics/sprites/buttons/button-bid-number.png",
          0x4c,
          0x4c
        ),
        number: 0x0,
        init: function (_0x358abc, _0x3c2f2e, _0x80e6c3) {
          this["parent"](_0x358abc, _0x3c2f2e, _0x80e6c3),
            this["addAnim"]("idle", 0x1, [0x0]),
            this["addAnim"]("hover", 0x1, [0x1]);
        },
        update: function () {
          this["parent"]();
        },
        redirect: function () {
          this["parent"](),
            ig["soundHandler"]["sfxPlayer"]["play"]("click"),
            (ig["game"]["players"][0x0]["bid"] = this["number"]),
            ig["game"]["players"][0x0]["bidding"]();
          for (
            var _0x1e6747 = ig["game"]["getEntitiesByType"](
                EntityButtonBidNumber
              ),
              _0x4b58ae = 0x0;
            _0x4b58ae < _0x1e6747["length"];
            _0x4b58ae++
          )
            _0x1e6747[_0x4b58ae] != this && _0x1e6747[_0x4b58ae]["kill"]();
          this["kill"]();
        },
        draw: function () {
          this["parent"]();
          var _0x192476 = ig["system"]["context"];
          (_0x192476["textAlign"] = "center"),
            (_0x192476["textBaseline"] = "middle"),
            (_0x192476["fillStyle"] = "white"),
            (_0x192476["font"] =
              this["currentAnim"] == this["anims"]["idle"]
                ? "22px\x20bpreplay"
                : "25px\x20bpreplay"),
            _0x192476["fillText"](
              "" + this["number"],
              this["pos"]["x"] + 0x26,
              this["pos"]["y"] + 0x26
            ),
            (_0x192476["font"] = "25px\x20bpreplay"),
            0x0 === this["number"] &&
              _0x192476["fillText"](_STRINGS["Game"]["ChooseBid"], 0x1e5, 0xb9);
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.entities.buttons.button-blind-nil")
    ["requires"]("game.entities.buttons.button")
    ["defines"](function () {
      EntityButtonBlindNil = EntityButton["extend"]({
        size: { x: 0xbc, y: 0x3a },
        animSheet: new ig["AnimationSheet"](
          "media/graphics/sprites/buttons/button-empty-black.png",
          0xbc,
          0x3a
        ),
        init: function (_0x32b7b2, _0x2ba02a, _0x4a6463) {
          this["parent"](_0x32b7b2, _0x2ba02a, _0x4a6463),
            this["addAnim"]("idle", 0x1, [0x0]),
            this["addAnim"]("hover", 0x1, [0x1]);
        },
        update: function () {
          this["parent"]();
        },
        redirect: function () {
          this["parent"](),
            ig["soundHandler"]["sfxPlayer"]["play"]("click"),
            (ig["game"]["players"][0x0]["bid"] = -0x1),
            (ig["game"]["players"][0x0]["blind"] = !0x0),
            ig["game"]["players"][0x0]["bidding"](),
            ig["game"]["getEntitiesByType"](EntityButtonBid)[0x0]["kill"](),
            ig["game"]["displayPlayerCards"](0x1),
            this["kill"]();
        },
        draw: function () {
          this["parent"]();
          var _0x51fb63 = ig["system"]["context"];
          (_0x51fb63["font"] = "20px\x20bpreplay"),
            (_0x51fb63["textAlign"] = "center"),
            (_0x51fb63["textBaseline"] = "middle"),
            (_0x51fb63["fillStyle"] = "white"),
            (_0x51fb63["font"] =
              this["currentAnim"] == this["anims"]["idle"]
                ? "20px\x20bpreplay"
                : "23px\x20bpreplay"),
            _0x51fb63["fillText"](
              _STRINGS["Game"]["BlindNil"],
              this["pos"]["x"] + 0x5e,
              this["pos"]["y"] + 0x1d
            );
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.entities.buttons.button-bid")
    ["requires"](
      "game.entities.buttons.button",
      "game.entities.buttons.button-bid-number",
      "game.entities.buttons.button-blind-nil"
    )
    ["defines"](function () {
      EntityButtonBid = EntityButton["extend"]({
        size: { x: 0xbc, y: 0x3a },
        animSheet: new ig["AnimationSheet"](
          "media/graphics/sprites/buttons/button-empty-black.png",
          0xbc,
          0x3a
        ),
        init: function (_0xa7f089, _0x43c0d7, _0x4bb7fc) {
          this["parent"](_0xa7f089, _0x43c0d7, _0x4bb7fc),
            this["addAnim"]("idle", 0x1, [0x0]),
            this["addAnim"]("hover", 0x1, [0x1]);
        },
        update: function () {
          this["parent"]();
        },
        redirect: function () {
          this["parent"](),
            ig["soundHandler"]["sfxPlayer"]["play"]("click"),
            ig["game"]["displayPlayerCards"](0x1);
          for (var _0x319ce5 = 0x0; 0x7 > _0x319ce5; _0x319ce5++) {
            var _0x18a9a9 = ig["game"]["spawnEntity"](
              EntityButtonBidNumber,
              0xdc + 0x4b * _0x319ce5,
              0xc8
            );
            _0x18a9a9["number"] = _0x319ce5;
          }
          for (_0x319ce5 = 0x0; 0x7 > _0x319ce5; _0x319ce5++)
            (_0x18a9a9 = ig["game"]["spawnEntity"](
              EntityButtonBidNumber,
              0xdc + 0x4b * _0x319ce5,
              0x122
            )),
              (_0x18a9a9["number"] = _0x319ce5 + 0x7);
          ig["game"]["getEntitiesByType"](EntityButtonBlindNil)[0x0]["kill"](),
            this["kill"]();
        },
        draw: function () {
          this["parent"]();
          var _0xf0d49c = ig["system"]["context"];
          (_0xf0d49c["textAlign"] = "center"),
            (_0xf0d49c["textBaseline"] = "middle"),
            (_0xf0d49c["fillStyle"] = "white"),
            (_0xf0d49c["font"] =
              this["currentAnim"] == this["anims"]["idle"]
                ? "20px\x20bpreplay"
                : "23px\x20bpreplay"),
            _0xf0d49c["fillText"](
              _STRINGS["Game"]["Bid"],
              this["pos"]["x"] + 0x5e,
              this["pos"]["y"] + 0x1d
            );
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.entities.buttons.button-play-next")
    ["requires"]("game.entities.buttons.button")
    ["defines"](function () {
      EntityButtonPlayNext = EntityButton["extend"]({
        size: { x: 0xa4, y: 0x39 },
        animSheet: new ig["AnimationSheet"](
          "media/graphics/sprites/buttons/button-empty.png",
          0xa4,
          0x39
        ),
        ignorePause: !0x0,
        init: function (_0x5df6fa, _0x24d4f2, _0x482ff7) {
          this["parent"](_0x5df6fa, _0x24d4f2, _0x482ff7),
            this["addAnim"]("idle", 0x1, [0x0]),
            this["addAnim"]("hover", 0x1, [0x1]);
        },
        update: function () {
          this["parent"](), this["checkClickOnPause"]();
        },
        redirect: function () {
          this["parent"]();
          try {
            ig["crazygames"]["gameplayStart"]();
          } catch (_0x3c41e7) {}
          ig["soundHandler"]["sfxPlayer"]["play"]("click"),
            (ig["game"]["paused"] = !0x1),
            ig["game"]["newRound"](0x1);
        },
        draw: function () {
          this["parent"]();
          var _0x38edc5 = ig["system"]["context"];
          (_0x38edc5["font"] = "20px\x20bpreplay"),
            (_0x38edc5["textAlign"] = "center"),
            (_0x38edc5["textBaseline"] = "middle"),
            (_0x38edc5["fillStyle"] = "brown"),
            (_0x38edc5["font"] =
              this["currentAnim"] == this["anims"]["idle"]
                ? "20px\x20bpreplay"
                : "23px\x20bpreplay"),
            _0x38edc5["fillText"](
              _STRINGS["Game"]["NextHand"],
              this["pos"]["x"] + 0x52,
              this["pos"]["y"] + 0x18
            );
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.entities.buttons.button-reset-score")
    ["requires"]("game.entities.buttons.button")
    ["defines"](function () {
      EntityButtonResetScore = EntityButton["extend"]({
        size: { x: 0xa4, y: 0x39 },
        animSheet: new ig["AnimationSheet"](
          "media/graphics/sprites/buttons/button-empty.png",
          0xa4,
          0x39
        ),
        ignorePause: !0x0,
        init: function (_0x5051a8, _0x2ce6d8, _0x3dfc20) {
          this["parent"](_0x5051a8, _0x2ce6d8, _0x3dfc20),
            this["addAnim"]("idle", 0x1, [0x0]),
            this["addAnim"]("hover", 0x1, [0x1]);
        },
        update: function () {
          this["parent"](), this["checkClickOnPause"]();
        },
        redirect: function () {
          this["parent"]();
          try {
            ig["crazygames"]["gameplayStart"]();
          } catch (_0x3dcc24) {}
          ig["soundHandler"]["sfxPlayer"]["play"]("click"),
            (ig["game"]["paused"] = !0x1),
            ig["game"]["newRound"](0x0);
        },
        draw: function () {
          this["parent"]();
          var _0x3f76a7 = ig["system"]["context"];
          (_0x3f76a7["textAlign"] = "center"),
            (_0x3f76a7["textBaseline"] = "middle"),
            (_0x3f76a7["fillStyle"] = "brown"),
            (_0x3f76a7["font"] =
              this["currentAnim"] == this["anims"]["idle"]
                ? "20px\x20bpreplay"
                : "23px\x20bpreplay"),
            _0x3f76a7["fillText"](
              _STRINGS["Game"]["NewGame"],
              this["pos"]["x"] + 0x52,
              this["pos"]["y"] + 0x18
            );
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.entities.buttons.button-home")
    ["requires"]("game.entities.buttons.button")
    ["defines"](function () {
      EntityButtonHome = EntityButton["extend"]({
        size: { x: 0xa4, y: 0x39 },
        animSheet: new ig["AnimationSheet"](
          "media/graphics/sprites/buttons/button-empty.png",
          0xa4,
          0x39
        ),
        ignorePause: !0x0,
        init: function (_0x14b32b, _0x15f952, _0x6f2d20) {
          this["parent"](_0x14b32b, _0x15f952, _0x6f2d20),
            this["addAnim"]("idle", 0x1, [0x0]),
            this["addAnim"]("hover", 0x1, [0x1]);
        },
        update: function () {
          this["parent"](), this["checkClickOnPause"]();
        },
        redirect: function () {
          this["parent"]();
          if (ig["game"]["paused"])
            try {
              ig["crazygames"]["showAd"]();
            } catch (_0x23989a) {}
          try {
            ig["crazygames"]["gameplayStop"]();
          } catch (_0x4187b4) {}
          (ig["game"]["paused"] = !0x1),
            ig["soundHandler"]["sfxPlayer"]["play"]("click"),
            ig["game"]["backToHome"]();
        },
        draw: function () {
          this["parent"]();
          var _0x141e28 = ig["system"]["context"];
          (_0x141e28["textAlign"] = "center"),
            (_0x141e28["textBaseline"] = "middle"),
            (_0x141e28["fillStyle"] = "brown"),
            (_0x141e28["font"] =
              this["currentAnim"] == this["anims"]["idle"]
                ? "20px\x20bpreplay"
                : "23px\x20bpreplay"),
            _0x141e28["fillText"](
              _STRINGS["Game"]["BackToMenu"],
              this["pos"]["x"] + 0x52,
              this["pos"]["y"] + 0x18
            );
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.entities.buttons.button-pause")
    ["requires"]("game.entities.buttons.button")
    ["defines"](function () {
      EntityButtonPause = EntityButton["extend"]({
        size: { x: 0x27, y: 0x2e },
        animSheet: new ig["AnimationSheet"](
          "media/graphics/sprites/buttons/button-pause.png",
          0x27,
          0x2e
        ),
        init: function (_0x2a4024, _0x5f16d7, _0x312a64) {
          this["parent"](_0x2a4024, _0x5f16d7, _0x312a64),
            this["addAnim"]("idle", 0x1, [0x0]),
            this["addAnim"]("hover", 0x1, [0x1]);
        },
        update: function () {
          this["parent"]();
        },
        clicked: function () {
          this["parent"](),
            ig["log"]("pause\x20click"),
            (ig["game"]["pausing"] = !0x0);
        },
        redirect: function () {
          this["parent"]();
          if ("" !== ig["game"]["gameState"]) {
            try {
              ig["crazygames"]["gameplayStop"]();
            } catch (_0x5bd77a) {}
            ig["soundHandler"]["sfxPlayer"]["play"]("click"),
              ig["game"]["pauseClick"]();
          }
        },
        draw: function () {
          this["parent"]();
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.entities.buttons.button-resume")
    ["requires"]("game.entities.buttons.button")
    ["defines"](function () {
      EntityButtonResume = EntityButton["extend"]({
        size: { x: 0xa4, y: 0x39 },
        animSheet: new ig["AnimationSheet"](
          "media/graphics/sprites/buttons/button-empty.png",
          0xa4,
          0x39
        ),
        ignorePause: !0x0,
        init: function (_0x118451, _0x17e30c, _0x3eae24) {
          this["parent"](_0x118451, _0x17e30c, _0x3eae24),
            this["addAnim"]("idle", 0x1, [0x0]),
            this["addAnim"]("hover", 0x1, [0x1]);
        },
        update: function () {
          this["parent"](), this["checkClickOnPause"]();
        },
        redirect: function () {
          this["parent"]();
          try {
            ig["crazygames"]["gameplayStart"]();
          } catch (_0x52530e) {}
          ig["game"]["resumeClick"](),
            ig["soundHandler"]["sfxPlayer"]["play"]("click");
        },
        draw: function () {
          this["parent"]();
          var _0x3b1562 = ig["system"]["context"];
          (_0x3b1562["textAlign"] = "center"),
            (_0x3b1562["textBaseline"] = "middle"),
            (_0x3b1562["fillStyle"] = "brown"),
            (_0x3b1562["font"] =
              this["currentAnim"] == this["anims"]["idle"]
                ? "20px\x20bpreplay"
                : "23px\x20bpreplay"),
            _0x3b1562["fillText"](
              _STRINGS["Game"]["Resume"],
              this["pos"]["x"] + 0x52,
              this["pos"]["y"] + 0x18
            );
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.entities.buttons.button-rules")
    ["requires"]("game.entities.buttons.button")
    ["defines"](function () {
      EntityButtonRules = EntityButton["extend"]({
        size: { x: 0xa4, y: 0x39 },
        animSheet: new ig["AnimationSheet"](
          "media/graphics/sprites/buttons/button-empty.png",
          0xa4,
          0x39
        ),
        ignorePause: !0x0,
        init: function (_0x4eaddd, _0x2f958b, _0x4c609b) {
          this["parent"](_0x4eaddd, _0x2f958b, _0x4c609b),
            this["addAnim"]("idle", 0x1, [0x0]),
            this["addAnim"]("hover", 0x1, [0x1]);
        },
        update: function () {
          this["parent"](), this["checkClickOnPause"]();
        },
        redirect: function () {
          this["parent"](),
            ig["soundHandler"]["sfxPlayer"]["play"]("click"),
            ig["game"]["rulesClick"]();
        },
        draw: function () {
          this["parent"]();
          var _0x10bfc2 = ig["system"]["context"];
          (_0x10bfc2["textAlign"] = "center"),
            (_0x10bfc2["textBaseline"] = "middle"),
            (_0x10bfc2["fillStyle"] = "brown"),
            (_0x10bfc2["font"] =
              this["currentAnim"] == this["anims"]["idle"]
                ? "20px\x20bpreplay"
                : "23px\x20bpreplay"),
            _0x10bfc2["fillText"](
              _STRINGS["Game"]["Rules"],
              this["pos"]["x"] + 0x52,
              this["pos"]["y"] + 0x18
            );
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.entities.buttons.button-confirm")
    ["requires"]("game.entities.buttons.button")
    ["defines"](function () {
      EntityButtonConfirm = EntityButton["extend"]({
        size: { x: 0xa4, y: 0x39 },
        animSheet: new ig["AnimationSheet"](
          "media/graphics/sprites/buttons/button-empty.png",
          0xa4,
          0x39
        ),
        ignorePause: !0x0,
        init: function (_0x5a2751, _0x868750, _0xb240cd) {
          this["parent"](_0x5a2751, _0x868750, _0xb240cd),
            this["addAnim"]("idle", 0x1, [0x0]),
            this["addAnim"]("hover", 0x1, [0x1]);
        },
        update: function () {
          this["parent"](), this["checkClickOnPause"]();
        },
        redirect: function () {
          this["parent"](),
            ig["soundHandler"]["sfxPlayer"]["play"]("click"),
            ig["game"]["closeRules"]();
        },
        draw: function () {
          this["parent"]();
          var _0x47239c = ig["system"]["context"];
          (_0x47239c["textAlign"] = "center"),
            (_0x47239c["textBaseline"] = "middle"),
            (_0x47239c["fillStyle"] = "brown"),
            (_0x47239c["font"] =
              this["currentAnim"] == this["anims"]["idle"]
                ? "20px\x20bpreplay"
                : "23px\x20bpreplay"),
            _0x47239c["fillText"](
              _STRINGS["Game"]["Ok"],
              this["pos"]["x"] + 0x52,
              this["pos"]["y"] + 0x18
            );
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.entities.buttons.button-arrow")
    ["requires"]("game.entities.buttons.button")
    ["defines"](function () {
      EntityButtonArrow = EntityButton["extend"]({
        size: { x: 0x73, y: 0x68 },
        animSheet: new ig["AnimationSheet"](
          "media/graphics/sprites/buttons/arrow.png",
          0x73,
          0x68
        ),
        angled: null,
        zIndex: 0x320,
        init: function (_0x4d79b8, _0x45d874, _0x379f97) {
          this["parent"](_0x4d79b8, _0x45d874, _0x379f97),
            this["addAnim"]("idle", 0x1, [0x0]),
            this["addAnim"]("hover", 0x1, [0x1]);
          switch (ig["game"]["passType"]) {
            case 0x1:
              this["angled"] = 0x0;
              break;
            case 0x2:
              this["angled"] = Math["PI"];
              break;
            case 0x3:
              this["angled"] = 0.5 * Math["PI"];
          }
          this["currentAnim"]["angle"] = this["angled"];
        },
        update: function () {
          this["parent"](),
            (this["currentAnim"]["angle"] = this["angled"]),
            (this["currentAnim"]["alpha"] = 0x1);
        },
        redirect: function () {
          this["parent"](),
            ig["soundHandler"]["sfxPlayer"]["play"]("click"),
            ig["game"]["passClick"]();
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.entities.spade-break")
    ["requires"]("impact.entity", "impact.timer")
    ["defines"](function () {
      EntitySpadeBreak = ig["Entity"]["extend"]({
        size: { x: 0x134, y: 0x162 },
        animSheet: new ig["AnimationSheet"](
          "media/graphics/sprites/heart-icon.png",
          0x134,
          0xfb
        ),
        zIndex: 0x4e20,
        init: function (_0x55cb32, _0x1b0bfa, _0x13ab99) {
          this["parent"](_0x55cb32, _0x1b0bfa, _0x13ab99),
            this["addAnim"]("idle", 0x1, [0x0]),
            this["alphas"] || (this["waitTimer"] = new ig["Timer"](0.5));
        },
        update: function () {
          this["parent"]();
          if (
            (this["waitTimer"] && 0x0 < this["waitTimer"]["delta"]()) ||
            this["alphas"]
          )
            this["currentAnim"]["alpha"] -= 0.1;
          0x0 >= this["currentAnim"]["alpha"] &&
            ((ig["game"]["gameState"] = "playing"), this["kill"]());
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.entities.card-black")
    ["requires"]("impact.entity", "impact.timer")
    ["defines"](function () {
      EntityCardBlack = ig["Entity"]["extend"]({
        size: { x: 0x3c, y: 0x56 },
        animSheet: new ig["AnimationSheet"](
          "media/graphics/sprites/card-black.png",
          0x3c,
          0x56
        ),
        zIndex: 0x4e20,
        init: function (_0x290827, _0xbd0d09, _0x10a469) {
          this["parent"](_0x290827, _0xbd0d09, _0x10a469),
            this["addAnim"]("idle", 0x1, [0x0]),
            this["addAnim"]("big", 0x1, [0x1]),
            (this["currentAnim"]["alpha"] = 0.3);
        },
        update: function () {
          this["parent"](),
            this["killTimer"] &&
              0x0 < this["killTimer"]["delta"]() &&
              this["kill"](),
            (this["currentAnim"]["alpha"] = ig["game"]["players"][0x0][
              "checkFinishedTween"
            ]()
              ? 0.3
              : 0x0);
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.entities.player")
    ["requires"](
      "impact.entity",
      "plugins.audio.sound-handler",
      "game.entities.spade-break",
      "game.entities.card-black"
    )
    ["defines"](function () {
      EntityPlayer = ig["Entity"]["extend"]({
        size: { x: 0x34, y: 0x34 },
        animSheet: new ig["AnimationSheet"](
          "media/graphics/sprites/player.png",
          0x34,
          0x32
        ),
        bid: null,
        blind: !0x1,
        cardIds: [],
        cards: [],
        playCardPos: { x: 0x0, y: 0x0 },
        trickPos: { x: 0x0, y: 0x0 },
        namePos: { x: 0x0, y: 0x0 },
        trickTaken: 0x0,
        roundSequence: 0x0,
        bidSequence: 0x0,
        spades: [],
        hearts: [],
        clubs: [],
        diamonds: [],
        enemyTrumped: [],
        heads: [],
        passCards: [],
        receivedCards: [],
        passPosX: [],
        passPosY: [],
        scoreTaken: 0x0,
        init: function (_0x25df9a, _0x2defba, _0x389b95) {
          this["parent"](_0x25df9a, _0x2defba, _0x389b95),
            this["addAnim"]("head1", 0x1, [0x0]),
            this["addAnim"]("head2", 0x1, [0x1]),
            this["addAnim"]("head3", 0x1, [0x2]),
            this["addAnim"]("head4", 0x1, [0x3]),
            this["addAnim"]("head5", 0x1, [0x4]),
            this["addAnim"]("head6", 0x1, [0x5]),
            this["addAnim"]("head7", 0x1, [0x6]),
            this["addAnim"]("head8", 0x1, [0x7]),
            (this["heads"] = [
              this["anims"]["head1"],
              this["anims"]["head2"],
              this["anims"]["head3"],
              this["anims"]["head4"],
              this["anims"]["head5"],
              this["anims"]["head6"],
              this["anims"]["head7"],
              this["anims"]["head8"],
            ]);
          if (!ig["global"]["wm"])
            switch (this["num"]) {
              case 0x1:
                (this["trickPos"]["x"] = 0x1cc),
                  (this["trickPos"]["y"] = 0x1d8),
                  (this["playCardPos"]["x"] = 0x1c8),
                  (this["playCardPos"]["y"] = 0xfc),
                  (this["namePos"]["x"] = this["pos"]["x"] + 0x5f),
                  (this["namePos"]["y"] = this["pos"]["y"] + 0x14),
                  (this["named"] = _STRINGS["Game"]["You"]),
                  (void 0x0 === ig["game"]["storage"]["get"]("p1Head") ||
                    null === ig["game"]["storage"]["get"]("p1Head")) &&
                    ig["game"]["storage"]["set"]("p1Head", 0x0),
                  (ig["game"]["p1Head"] =
                    ig["game"]["storage"]["get"]("p1Head")),
                  (this["currentAnim"] = this["heads"][ig["game"]["p1Head"]]);
                break;
              case 0x2:
                (this["trickPos"]["x"] = 0x2c),
                  (this["trickPos"]["y"] = 0xe8),
                  (this["playCardPos"]["x"] = 0x19c),
                  (this["playCardPos"]["y"] = 0xd4),
                  (this["namePos"]["x"] = this["pos"]["x"] + 0x1a),
                  (this["namePos"]["y"] = this["pos"]["y"] + 0x43);
                if (ig["game"]["p2Name"])
                  (this["currentAnim"] =
                    this["heads"][ig["game"]["headUsed"][0x0]]),
                    (this["named"] =
                      ig["game"]["names"][ig["game"]["headUsed"][0x0]]);
                else {
                  for (
                    _0x25df9a = Math["floor"](0x8 * Math["random"]());
                    -0x1 != ig["game"]["headUsed"]["indexOf"](_0x25df9a);

                  )
                    _0x25df9a = Math["floor"](0x8 * Math["random"]());
                  (this["named"] = ig["game"]["names"][_0x25df9a]),
                    (ig["game"]["p2Name"] = this["named"]),
                    (ig["game"]["headUsed"][0x0] = _0x25df9a),
                    (this["currentAnim"] = this["heads"][_0x25df9a]);
                }
                break;
              case 0x3:
                (this["trickPos"]["x"] = 0x1cc),
                  (this["trickPos"]["y"] = 0x1e),
                  (this["playCardPos"]["x"] = 0x1c8),
                  (this["playCardPos"]["y"] = 0xb0),
                  (this["namePos"]["x"] = this["pos"]["x"] + 0x5f),
                  (this["namePos"]["y"] = this["pos"]["y"] + 0x14);
                if (ig["game"]["p3Name"])
                  (this["currentAnim"] =
                    this["heads"][ig["game"]["headUsed"][0x1]]),
                    (this["named"] =
                      ig["game"]["names"][ig["game"]["headUsed"][0x1]]);
                else {
                  for (
                    _0x25df9a = Math["floor"](0x8 * Math["random"]());
                    -0x1 != ig["game"]["headUsed"]["indexOf"](_0x25df9a);

                  )
                    _0x25df9a = Math["floor"](0x8 * Math["random"]());
                  (this["named"] = ig["game"]["names"][_0x25df9a]),
                    (ig["game"]["p3Name"] = this["named"]),
                    (ig["game"]["headUsed"][0x1] = _0x25df9a),
                    (this["currentAnim"] = this["heads"][_0x25df9a]);
                }
                break;
              case 0x4:
                if (
                  ((this["trickPos"]["x"] = 0x370),
                  (this["trickPos"]["y"] = 0xdc),
                  (this["playCardPos"]["x"] = 0x1f8),
                  (this["playCardPos"]["y"] = 0xd4),
                  (this["namePos"]["x"] = this["pos"]["x"] + 0x1a),
                  (this["namePos"]["y"] = this["pos"]["y"] + 0x43),
                  ig["game"]["p4Name"])
                )
                  (this["currentAnim"] =
                    this["heads"][ig["game"]["headUsed"][0x2]]),
                    (this["named"] =
                      ig["game"]["names"][ig["game"]["headUsed"][0x2]]);
                else {
                  for (
                    _0x25df9a = Math["floor"](0x8 * Math["random"]());
                    -0x1 != ig["game"]["headUsed"]["indexOf"](_0x25df9a);

                  )
                    _0x25df9a = Math["floor"](0x8 * Math["random"]());
                  (this["named"] = ig["game"]["names"][_0x25df9a]),
                    (ig["game"]["p4Name"] = this["named"]),
                    (ig["game"]["headUsed"][0x2] = _0x25df9a),
                    (this["currentAnim"] = this["heads"][_0x25df9a]);
                }
            }
        },
        update: function () {
          this["parent"](),
            this["playTimer"] &&
              0x0 < this["playTimer"]["delta"]() &&
              (this["botPlayCard"](), (this["playTimer"] = void 0x0)),
            this["arrangePassTimer"] &&
              0x0 < this["arrangePassTimer"]["delta"]() &&
              (this["arrangePass"](), (this["arrangePassTimer"] = void 0x0)),
            this["arrangePassTimer2"] &&
              0x0 < this["arrangePassTimer2"]["delta"]() &&
              (this["arrangePass2"](), (this["arrangePassTimer2"] = void 0x0)),
            this["arrangeTimer"] &&
              0x0 < this["arrangeTimer"]["delta"]() &&
              ((this["arrangeTimer"] = void 0x0), this["arrangeZIndex"]());
        },
        draw: function () {
          this["parent"]();
          if (!ig["global"]["wm"]) {
            var _0x589731 = ig["system"]["context"];
            (_0x589731["font"] = "13px\x20bpreplay"),
              (_0x589731["textAlign"] = "center"),
              (_0x589731["textBaseline"] = "middle"),
              (_0x589731["fillStyle"] = "white"),
              _0x589731["fillText"](
                this["named"],
                this["namePos"]["x"],
                this["namePos"]["y"]
              ),
              (_0x589731["font"] = "11px\x20bpreplay"),
              _0x589731["fillText"](
                _STRINGS["Game"]["ScoreTaken"] +
                  "\x20:\x20" +
                  this["scoreTaken"],
                this["namePos"]["x"],
                this["namePos"]["y"] + 0x12
              );
          }
        },
        playCard: function (_0x5e31d8) {
          ig["game"]["msgBoard"]["msg"] = "";
          if (
            "playing" == ig["game"]["gameState"] &&
            this["checkPlayable"](_0x5e31d8)
          ) {
            if (ig["game"]["getEntitiesByType"](EntityCardBlack)) {
              for (
                var _0x2cd672 = 0x0;
                _0x2cd672 <
                ig["game"]["getEntitiesByType"](EntityCardBlack)["length"];
                _0x2cd672++
              )
                ig["game"]["getEntitiesByType"](EntityCardBlack)[_0x2cd672][
                  "killTimer"
                ] = new ig["Timer"](0.05);
            }
            var _0x161eeb = _0x5e31d8["id"],
              _0x2cd672 = _0x5e31d8["sequence"];
            this["cards"]["splice"](this["cards"]["indexOf"](_0x5e31d8), 0x1),
              (_0x161eeb = ig["game"]["spawnSpecificCard"](
                this["num"],
                _0x161eeb,
                _0x5e31d8["pos"]["x"],
                _0x5e31d8["pos"]["y"]
              )),
              _0x5e31d8["kill"](),
              _0x161eeb["tweenPlay"](
                this["playCardPos"]["x"],
                this["playCardPos"]["y"]
              ),
              0x1 != this["num"]
                ? (_0x161eeb["displayTimer"] = new ig["Timer"](0.25))
                : _0x161eeb["displayCard"](),
              (_0x161eeb["played"] = !0x0);
            var _0x39c397 = Math["floor"](0x4 * Math["random"]()) + 0x1;
            ig["soundHandler"]["sfxPlayer"]["play"]("cardplay" + _0x39c397),
              ig["game"]["playingCards"]["push"](_0x161eeb),
              ig["game"]["playedCards"]["push"](_0x161eeb),
              0x1 == ig["game"]["currentTurn"]
                ? (ig["game"]["leadSuit"] = _0x161eeb["suit"])
                : 0x2 == _0x161eeb["suit"] &&
                  0x2 != ig["game"]["leadSuit"] &&
                  ig["game"]["trumpedSuit"]["push"](ig["game"]["leadSuit"]),
              this["arrangeCards"](_0x2cd672),
              0x2 == _0x5e31d8["suit"] &&
                !ig["game"]["breakedHeart"] &&
                (ig["soundHandler"]["sfxPlayer"]["play"]("breaking"),
                ig["game"]["spawnEntity"](EntitySpadeBreak, 0x154, 0x54),
                (ig["game"]["breakedHeart"] = !0x0),
                (ig["game"]["gameState"] = "breakingSpade")),
              0x3 == _0x5e31d8["suit"] &&
                0xc == _0x5e31d8["rank"] &&
                ig["soundHandler"]["sfxPlayer"]["play"]("queen"),
              ig["game"]["currentTurn"]++,
              (ig["game"]["playerTurn"] = !0x1),
              (ig["game"]["nextPlayer"] = !0x0),
              0x1 == this["num"] &&
                ig["game"]["getEntitiesByType"](EntityButtonHeadLeft)[0x0] &&
                !ig["game"]["getEntitiesByType"](EntityButtonHeadLeft)[0x0][
                  "killTimer"
                ] &&
                (ig["game"]["getEntitiesByType"](EntityButtonHeadLeft)[0x0][
                  "killTimer"
                ] = new ig["Timer"](0x5));
          }
        },
        winTrick: function () {
          ig["soundHandler"]["sfxPlayer"]["play"]("cardshove");
          for (
            var _0xa149c1 = 0x0, _0x2502bc = 0x0;
            _0x2502bc < ig["game"]["playingCards"]["length"];
            _0x2502bc++
          )
            0x2 == ig["game"]["playingCards"][_0x2502bc]["suit"] && _0xa149c1++,
              0x3 == ig["game"]["playingCards"][_0x2502bc]["suit"] &&
                0xc == ig["game"]["playingCards"][_0x2502bc]["rank"] &&
                (_0xa149c1 += 0xd),
              ig["game"]["playingCards"][_0x2502bc]["tweenOut"](
                this["trickPos"]["x"],
                this["trickPos"]["y"]
              );
          (this["scoreTaken"] += _0xa149c1),
            (ig["game"]["playingCards"] = []),
            0xd < ig["game"]["currentRound"] &&
              (ig["game"]["gameState"] = "ending");
        },
        arrangeCards: function (_0xbac11e) {
          for (
            var _0x19998a = 0x64, _0x4b9e24 = 0x0;
            _0x4b9e24 < this["cards"]["length"];
            _0x4b9e24++
          ) {
            switch (this["num"]) {
              case 0x1:
                this["cards"][_0x4b9e24]["pos"]["x"] =
                  this["cards"][_0x4b9e24]["sequence"] > _0xbac11e
                    ? this["cards"][_0x4b9e24]["pos"]["x"] - 17.5
                    : this["cards"][_0x4b9e24]["pos"]["x"] + 17.5;
                break;
              case 0x2:
                this["cards"][_0x4b9e24]["pos"]["y"] =
                  this["cards"][_0x4b9e24]["sequence"] > _0xbac11e
                    ? this["cards"][_0x4b9e24]["pos"]["y"] - 0xa
                    : this["cards"][_0x4b9e24]["pos"]["y"] + 0xa;
                break;
              case 0x3:
                this["cards"][_0x4b9e24]["pos"]["x"] =
                  this["cards"][_0x4b9e24]["sequence"] > _0xbac11e
                    ? this["cards"][_0x4b9e24]["pos"]["x"] + 0xa
                    : this["cards"][_0x4b9e24]["pos"]["x"] - 0xa;
                break;
              case 0x4:
                this["cards"][_0x4b9e24]["pos"]["y"] =
                  this["cards"][_0x4b9e24]["sequence"] > _0xbac11e
                    ? this["cards"][_0x4b9e24]["pos"]["y"] + 0xa
                    : this["cards"][_0x4b9e24]["pos"]["y"] - 0xa;
            }
            this["cards"][_0x4b9e24]["sequence"] < _0x19998a &&
              (_0x19998a = this["cards"][_0x4b9e24]["sequence"]);
          }
        },
        nextHead: function () {
          (ig["game"]["p1Head"] = (ig["game"]["p1Head"] + 0x1) % 0x8),
            (this["currentAnim"] = this["heads"][ig["game"]["p1Head"]]),
            ig["game"]["storage"]["set"]("p1Head", ig["game"]["p1Head"]);
        },
        checkFinishedTween: function () {
          for (
            var _0x2342ab = 0x0;
            _0x2342ab < this["cards"]["length"];
            _0x2342ab++
          )
            if (0x181 != this["cards"][_0x2342ab]["pos"]["y"]) return !0x1;
          return !0x0;
        },
        botPlayCard: function () {
          for (
            var _0x4c4e73 = ig["game"]["currentTurn"],
              _0x37e434 = ig["game"]["leadSuit"],
              _0x2fca10 = [],
              _0x3973e9 = [],
              _0x426f36 = [],
              _0x244032 = [],
              _0x434512 = [],
              _0x5a9811,
              _0x3917f5 = 0x0,
              _0x185d59 = 0x0;
            _0x185d59 < ig["game"]["players"]["length"];
            _0x185d59++
          )
            0xd <= ig["game"]["players"][_0x185d59]["scoreTaken"] &&
              (_0x3917f5 += 0x2),
              0x0 === ig["game"]["players"][_0x185d59]["scoreTaken"] &&
                _0x3917f5++;
          for (
            _0x185d59 = 0x0;
            _0x185d59 < this["cards"]["length"];
            _0x185d59++
          ) {
            var _0x2a673a = this["cards"][_0x185d59];
            if (this["checkPlayable"](_0x2a673a)) {
              switch (_0x2a673a["suit"]) {
                case 0x0:
                  _0x244032["push"](_0x2a673a);
                  break;
                case 0x1:
                  _0x426f36["push"](_0x2a673a);
                  break;
                case 0x2:
                  _0x3973e9["push"](_0x2a673a);
                  break;
                case 0x3:
                  0xc != _0x2a673a["rank"] && _0x2fca10["push"](_0x2a673a);
              }
              0x3 == _0x2a673a["suit"] &&
                0xc == _0x2a673a["rank"] &&
                (_0x5a9811 = _0x2a673a);
            }
          }
          _0x3973e9["sort"](function (_0x5d87bc, _0x4d42a5) {
            return _0x4d42a5["rank"] - _0x5d87bc["rank"];
          }),
            _0x426f36["sort"](function (_0xa1c9f1, _0x45386f) {
              return _0x45386f["rank"] - _0xa1c9f1["rank"];
            }),
            _0x244032["sort"](function (_0x422a44, _0x531220) {
              return _0x531220["rank"] - _0x422a44["rank"];
            }),
            _0x2fca10["sort"](function (_0x50c378, _0x29623b) {
              return _0x29623b["rank"] - _0x50c378["rank"];
            });
          if (0x1 == _0x4c4e73) {
            if (_0x2fca10[0x0] && 0xc > _0x2fca10[0x0]["rank"])
              _0x434512["push"](_0x2fca10[_0x2fca10["length"] - 0x1]);
            else {
              if (
                (_0x3973e9[0x0] && ig["game"]["breakedHeart"]) ||
                this["countSuitOnHand"](0x2) == this["countCardsOnHand"]()
              ) {
                _0x37e434 = _0x3973e9[_0x3973e9["length"] - 0x1]["rank"];
                for (
                  _0x2fca10 = 0x0;
                  _0x2fca10 < ig["game"]["playedCards"]["length"];
                  _0x2fca10++
                )
                  0x2 == ig["game"]["playedCards"][_0x2fca10]["suit"] &&
                    ig["game"]["playedCards"][_0x2fca10]["rank"] <
                      _0x3973e9[_0x3973e9["length"] - 0x1]["rank"] &&
                    _0x37e434--;
                0x3 >= _0x37e434 &&
                  _0x434512["push"](_0x3973e9[_0x3973e9["length"] - 0x1]);
              }
            }
            if (this["countSuitOnHand"](0x0) > this["countSuitOnHand"](0x1))
              0x3 >= ig["game"]["currentRound"] &&
              -0x1 == ig["game"]["trumpedSuit"]["indexOf"](0x0)
                ? _0x434512["push"](_0x244032[0x0])
                : _0x434512["push"](_0x244032[_0x244032["length"] - 0x1]);
            else {
              if (this["countSuitOnHand"](0x1) > this["countSuitOnHand"](0x0))
                0x3 >= ig["game"]["currentRound"] &&
                -0x1 == ig["game"]["trumpedSuit"]["indexOf"](0x1)
                  ? _0x434512["push"](_0x426f36[0x0])
                  : _0x434512["push"](_0x426f36[_0x426f36["length"] - 0x1]);
              else {
                for (
                  _0x185d59 = 0x0;
                  _0x185d59 < this["cards"]["length"];
                  _0x185d59++
                )
                  (_0x2a673a = this["cards"][_0x185d59]),
                    this["checkPlayable"](_0x2a673a) &&
                      (0x3 != _0x2a673a["suit"] || 0xc != _0x2a673a["rank"]) &&
                      _0x434512["push"](_0x2a673a);
              }
            }
          } else {
            for (
              _0x185d59 = 0x0;
              _0x185d59 < ig["game"]["playingCards"]["length"];
              _0x185d59++
            )
              0x3 == ig["game"]["playingCards"][_0x185d59]["suit"] &&
                0xc < ig["game"]["playingCards"][_0x185d59]["rank"] &&
                _0x5a9811 &&
                _0x434512["push"](_0x5a9811);
            if (0x0 < this["countSuitOnHand"](_0x37e434)) {
              if (
                0x3 >= ig["game"]["currentRound"] &&
                -0x1 == ig["game"]["trumpedSuit"]["indexOf"](_0x37e434) &&
                0x3 != _0x37e434
              )
                _0x434512["push"](this["suitGreatest"](_0x37e434));
              else {
                if (0x4 == _0x4c4e73) {
                  for (
                    _0x185d59 = _0x426f36 = 0x0;
                    _0x185d59 < ig["game"]["playingCards"]["length"];
                    _0x185d59++
                  )
                    if (
                      0x2 == ig["game"]["playingCards"][_0x185d59]["suit"] ||
                      (0x3 == ig["game"]["playingCards"][_0x185d59]["suit"] &&
                        0xc == ig["game"]["playingCards"][_0x185d59]["rank"])
                    )
                      _0x426f36 = 0x1;
                  0x5 != _0x3917f5
                    ? 0x1 == _0x426f36 && this["greatestSmaller"]()
                      ? _0x434512["push"](this["greatestSmaller"]())
                      : 0x3 != _0x37e434
                      ? _0x434512["push"](this["suitGreatest"](_0x37e434))
                      : _0x2fca10[0x0]
                      ? _0x434512["push"](_0x2fca10[0x0])
                      : _0x3973e9[0x0] && _0x434512["push"](_0x3973e9[0x0])
                    : 0x1 == _0x426f36 && this["leastGreater"]()
                    ? _0x434512["push"](this["leastGreater"]())
                    : _0x434512["push"](this["suitSmallest"](_0x37e434));
                } else
                  0x5 != _0x3917f5
                    ? this["greatestSmaller"]()
                      ? _0x434512["push"](this["greatestSmaller"]())
                      : 0x3 != _0x37e434
                      ? _0x434512["push"](this["suitSmallest"](_0x37e434))
                      : _0x2fca10[_0x2fca10["length"] - 0x1] &&
                        _0x434512["push"](_0x2fca10[_0x2fca10["length"] - 0x1])
                    : this["leastGreater"]()
                    ? _0x434512["push"](this["suitGreatest"](_0x37e434))
                    : _0x434512["push"](this["suitSmallest"](_0x37e434));
              }
            } else
              0x5 != _0x3917f5 ||
              0x16 > ig["game"]["leadingPlayer"]["scoreTaken"]
                ? (_0x5a9811 && _0x434512["push"](_0x5a9811),
                  this["suitGreatest"](0x3) &&
                    0xc < this["suitGreatest"](0x3)["rank"] &&
                    _0x434512["push"](this["suitGreatest"](0x3)),
                  this["suitGreatest"](0x2) &&
                    _0x434512["push"](this["suitGreatest"](0x2)),
                  _0x426f36[0x0] &&
                    (!_0x244032[0x0] ||
                      _0x426f36[0x0]["rank"] > _0x244032[0x0]["rank"]) &&
                    _0x434512["push"](this["suitGreatest"](0x1)),
                  this["suitGreatest"](0x0) &&
                    _0x434512["push"](this["suitGreatest"](0x0)))
                : (_0x244032[0x0] && _0x434512["push"](_0x244032[0x0]),
                  _0x426f36[0x0] && _0x434512["push"](_0x426f36[0x0]),
                  _0x2fca10[0x0] && _0x434512["push"](_0x2fca10[0x0]));
          }
          for (_0x185d59 = 0x0; _0x185d59 < _0x434512["length"]; _0x185d59++)
            if (
              _0x434512[_0x185d59] &&
              this["checkPlayable"](_0x434512[_0x185d59])
            ) {
              this["playCard"](_0x434512[_0x185d59]);
              return;
            }
          for (
            _0x185d59 = 0x0;
            _0x185d59 < this["cards"]["length"];
            _0x185d59++
          )
            if (this["checkPlayable"](this["cards"][_0x185d59])) {
              this["playCard"](this["cards"][_0x185d59]);
              break;
            }
        },
        checkPlayable: function (_0x531176) {
          if (0x1 == ig["game"]["currentRound"]) {
            if (0x1 == ig["game"]["currentTurn"]) {
              if (0x1 == _0x531176["suit"] && 0x2 == _0x531176["rank"])
                return !0x0;
              return (
                0x1 == this["num"] &&
                  (ig["game"]["msgBoard"]["msg"] =
                    _STRINGS["Game"]["InvalidCard4"]),
                !0x1
              );
            }
            if (0x2 == _0x531176["suit"])
              return (
                0x1 == this["num"] &&
                  (ig["game"]["msgBoard"]["msg"] =
                    _STRINGS["Game"]["InvalidCard5"]),
                !0x1
              );
            if (0x3 == _0x531176["suit"] && 0xc == _0x531176["rank"])
              return (
                0x1 == this["num"] &&
                  (ig["game"]["msgBoard"]["msg"] =
                    _STRINGS["Game"]["InvalidCard6"]),
                !0x1
              );
            if (
              0x1 == _0x531176["suit"] ||
              0x0 === this["countSuitOnHand"](0x1)
            )
              return !0x0;
            return (
              0x1 == this["num"] &&
                (ig["game"]["msgBoard"]["msg"] =
                  _STRINGS["Game"]["InvalidCard1"]),
              !0x1
            );
          }
          if (0x1 == ig["game"]["currentTurn"]) {
            if (0x2 == _0x531176["suit"]) {
              if (
                ig["game"]["breakedHeart"] ||
                this["countSuitOnHand"](0x2) == this["countCardsOnHand"]()
              )
                return !0x0;
              return (
                0x1 == this["num"] &&
                  (ig["game"]["msgBoard"]["msg"] =
                    _STRINGS["Game"]["InvalidCard2"]),
                !0x1
              );
            }
            return !0x0;
          }
          if (
            _0x531176["suit"] == ig["game"]["leadSuit"] ||
            0x0 === this["countSuitOnHand"](ig["game"]["leadSuit"])
          )
            return !0x0;
          return (
            0x1 == this["num"] &&
              (ig["game"]["msgBoard"]["msg"] =
                _STRINGS["Game"]["InvalidCard1"]),
            !0x1
          );
        },
        checkPlayableNoMsg: function (_0x19ec47) {
          return 0x1 == ig["game"]["currentRound"]
            ? 0x1 == ig["game"]["currentTurn"]
              ? 0x1 == _0x19ec47["suit"] && 0x2 == _0x19ec47["rank"]
                ? !0x0
                : !0x1
              : 0x2 == _0x19ec47["suit"] ||
                (0x3 == _0x19ec47["suit"] && 0xc == _0x19ec47["rank"])
              ? !0x1
              : 0x1 == _0x19ec47["suit"] || 0x0 === this["countSuitOnHand"](0x1)
              ? !0x0
              : !0x1
            : 0x1 == ig["game"]["currentTurn"]
            ? 0x2 == _0x19ec47["suit"]
              ? ig["game"]["breakedHeart"] ||
                this["countSuitOnHand"](0x2) == this["countCardsOnHand"]()
                ? !0x0
                : !0x1
              : !0x0
            : _0x19ec47["suit"] == ig["game"]["leadSuit"]
            ? !0x0
            : 0x0 === this["countSuitOnHand"](ig["game"]["leadSuit"])
            ? !0x0
            : !0x1;
        },
        countSuitOnHand: function (_0x508524) {
          for (
            var _0x37cce6 = 0x0, _0x43aa5e = 0x0;
            _0x43aa5e < this["cards"]["length"];
            _0x43aa5e++
          )
            this["cards"][_0x43aa5e]["suit"] == _0x508524 && _0x37cce6++;
          return _0x37cce6;
        },
        countCardsOnHand: function () {
          return this["cards"]["length"];
        },
        leastSuitOnHand: function () {
          for (
            var _0x5a22a0 = 0x0, _0x454041 = null, _0xcc4c39 = 0x0;
            0x3 > _0xcc4c39;
            _0xcc4c39++
          )
            this["countSuitOnHand"](_0xcc4c39) > _0x5a22a0 &&
              ((_0x454041 = _0xcc4c39),
              (_0x5a22a0 = this["countSuitOnHand"](_0xcc4c39)));
          return null === _0x454041 && (_0x454041 = 0x3), _0x454041;
        },
        suitGreatest: function (_0x40a71b) {
          var _0x36038d = 0x0,
            _0x47f635;
          if (0x0 <= this["countSuitOnHand"](_0x40a71b)) {
            for (
              var _0x3a2387 = 0x0;
              _0x3a2387 < this["cards"]["length"];
              _0x3a2387++
            )
              this["cards"][_0x3a2387]["suit"] == _0x40a71b &&
                this["cards"][_0x3a2387]["rank"] > _0x36038d &&
                ((_0x36038d = this["cards"][_0x3a2387]["rank"]),
                (_0x47f635 = this["cards"][_0x3a2387]));
            return _0x47f635;
          }
          return !0x1;
        },
        suitSmallest: function (_0xef978) {
          var _0x3086b1 = 0x64,
            _0x21f8fb;
          if (0x0 <= this["countSuitOnHand"](_0xef978)) {
            for (
              var _0x484990 = 0x0;
              _0x484990 < this["cards"]["length"];
              _0x484990++
            )
              this["cards"][_0x484990]["suit"] == _0xef978 &&
                this["cards"][_0x484990]["rank"] < _0x3086b1 &&
                ((_0x3086b1 = this["cards"][_0x484990]["rank"]),
                (_0x21f8fb = this["cards"][_0x484990]));
            return _0x21f8fb;
          }
          return !0x1;
        },
        spadeSmallest: function () {
          var _0x1a3d45 = 0x64,
            _0x326ef9;
          if (0x0 <= this["countSuitOnHand"](0x3)) {
            for (
              var _0x42fa59 = 0x0;
              _0x42fa59 < this["cards"]["length"];
              _0x42fa59++
            )
              0x3 == this["cards"][_0x42fa59]["suit"] &&
                this["cards"][_0x42fa59]["rank"] < _0x1a3d45 &&
                ((_0x1a3d45 = this["cards"][_0x42fa59]["rank"]),
                (_0x326ef9 = this["cards"][_0x42fa59]));
            return _0x326ef9;
          }
          return !0x1;
        },
        spadeGreatest: function () {
          var _0x4162db = 0x0,
            _0x20dbad;
          if (0x0 <= this["countSuitOnHand"](0x3)) {
            for (
              var _0x43a329 = 0x0;
              _0x43a329 < this["cards"]["length"];
              _0x43a329++
            )
              0x3 == this["cards"][_0x43a329]["suit"] &&
                this["cards"][_0x43a329]["rank"] > _0x4162db &&
                ((_0x4162db = this["cards"][_0x43a329]["rank"]),
                (_0x20dbad = this["cards"][_0x43a329]));
            return _0x20dbad;
          }
          return !0x1;
        },
        spadeGreatestWOQK: function () {
          var _0x3c4d6d = 0x0,
            _0x243062;
          if (0x0 <= this["countSuitOnHand"](0x3)) {
            for (
              var _0x313855 = 0x0;
              _0x313855 < this["cards"]["length"];
              _0x313855++
            )
              0x3 == this["cards"][_0x313855]["suit"] &&
                this["cards"][_0x313855]["rank"] > _0x3c4d6d &&
                0xc != this["cards"][_0x313855]["rank"] &&
                0xd != this["cards"][_0x313855]["rank"] &&
                ((_0x3c4d6d = this["cards"][_0x313855]["rank"]),
                (_0x243062 = this["cards"][_0x313855]));
            return _0x243062;
          }
          return !0x1;
        },
        spadeGreatestWOQ: function () {
          var _0x38800a = 0x0,
            _0x315be1;
          if (0x0 <= this["countSuitOnHand"](0x3)) {
            for (
              var _0x99d0c7 = 0x0;
              _0x99d0c7 < this["cards"]["length"];
              _0x99d0c7++
            )
              0x3 == this["cards"][_0x99d0c7]["suit"] &&
                this["cards"][_0x99d0c7]["rank"] > _0x38800a &&
                0xc != this["cards"][_0x99d0c7]["rank"] &&
                ((_0x38800a = this["cards"][_0x99d0c7]["rank"]),
                (_0x315be1 = this["cards"][_0x99d0c7]));
            return _0x315be1;
          }
          return !0x1;
        },
        checkAcePlayed: function (_0x14988e) {
          for (
            var _0x11d0e2 = 0x0;
            _0x11d0e2 < ig["game"]["playedCards"]["length"];
            _0x11d0e2++
          )
            if (
              ig["game"]["playedCards"][_0x11d0e2]["suit"] == _0x14988e &&
              0xe == ig["game"]["playedCards"][_0x11d0e2]["rank"]
            )
              return !0x0;
          return !0x1;
        },
        checkKingPlayed: function (_0x22abe0) {
          for (
            var _0x4656e6 = 0x0;
            _0x4656e6 < ig["game"]["playedCards"]["length"];
            _0x4656e6++
          )
            if (
              ig["game"]["playedCards"][_0x4656e6]["suit"] == _0x22abe0 &&
              0xd == ig["game"]["playedCards"][_0x4656e6]["rank"]
            )
              return !0x0;
          return !0x1;
        },
        checkGreaterPlayed: function (_0x3c8542, _0x270c08) {
          for (
            var _0x5008db = 0x0, _0x1af650 = 0x0;
            _0x1af650 < ig["game"]["playedCards"]["length"];
            _0x1af650++
          )
            ig["game"]["playedCards"][_0x1af650]["suit"] == _0x3c8542 &&
              ig["game"]["playedCards"][_0x1af650]["rank"] > _0x270c08 &&
              _0x5008db++;
          return _0x5008db >= 0xe - _0x270c08 ? !0x0 : !0x1;
        },
        greatestSmaller: function () {
          for (
            var _0xb1a9f9 = ig["game"]["leadingRank"],
              _0x2e15c5 = 0x64,
              _0x2f34bb = null,
              _0x3546b = 0x0;
            _0x3546b < this["cards"]["length"];
            _0x3546b++
          )
            this["cards"][_0x3546b]["suit"] == ig["game"]["leadSuit"] &&
              this["cards"][_0x3546b]["rank"] < _0xb1a9f9 &&
              _0xb1a9f9 - this["cards"][_0x3546b]["rank"] < _0x2e15c5 &&
              ((_0x2f34bb = this["cards"][_0x3546b]),
              (_0x2e15c5 = _0xb1a9f9 - this["cards"][_0x3546b]["rank"]));
          return _0x2f34bb;
        },
        leastGreater: function () {
          for (
            var _0x17aead = ig["game"]["leadingRank"],
              _0x3d4e89 = 0x64,
              _0x5553cb = null,
              _0x44d547 = 0x0;
            _0x44d547 < this["cards"]["length"];
            _0x44d547++
          )
            0x3 == this["cards"][_0x44d547]["suit"] &&
              this["cards"][_0x44d547]["rank"] > _0x17aead &&
              this["cards"][_0x44d547]["rank"] - _0x17aead < _0x3d4e89 &&
              ((_0x5553cb = this["cards"][_0x44d547]),
              (_0x3d4e89 = this["cards"][_0x44d547]["rank"] - _0x17aead));
          if (_0x5553cb) return _0x5553cb;
        },
        canWin: function () {
          if (ig["game"]["currentTrumped"])
            return 0x0 === this["countSuitOnHand"](ig["game"]["leadSuit"]) &&
              0x0 < this["countSuitOnHand"](0x3)
              ? this["spadeGreatest"]()["rank"] > ig["game"]["leadingRank"]
                ? !0x0
                : !0x1
              : !0x1;
          if (0x0 < this["countSuitOnHand"](ig["game"]["leadSuit"]))
            for (
              var _0x56debf = 0x0;
              _0x56debf < this["cards"]["length"];
              _0x56debf++
            ) {
              if (
                this["cards"][_0x56debf]["suit"] == ig["game"]["leadSuit"] &&
                this["cards"][_0x56debf]["rank"] > ig["game"]["leadingRank"]
              )
                return !0x0;
            }
          else {
            if (0x0 < this["countSuitOnHand"](0x3)) return !0x0;
          }
          return !0x1;
        },
        canWinSafe: function () {
          if (ig["game"]["currentTrumped"])
            return 0x0 === this["countSuitOnHand"](ig["game"]["leadSuit"]) &&
              0x0 < this["countSuitOnHand"](0x3)
              ? this["checkAcePlayed"](0x3)
                ? (this["checkKingPlayed"](0x3),
                  this["spadeGreatest"]()["rank"] > ig["game"]["leadingRank"]
                    ? !0x0
                    : !0x1)
                : this["spadeGreatestWOQK"]()["rank"] >
                  ig["game"]["leadingRank"]
                ? !0x0
                : !0x1
              : !0x1;
          if (0x0 < this["countSuitOnHand"](ig["game"]["leadSuit"])) {
            for (
              var _0xbd798a = 0x0;
              _0xbd798a < this["cards"]["length"];
              _0xbd798a++
            )
              if (this["checkAcePlayed"](ig["game"]["leadSuit"])) {
                if (this["checkKingPlayed"](ig["game"]["leadSuit"])) {
                  if (
                    this["cards"][_0xbd798a]["suit"] ==
                      ig["game"]["leadSuit"] &&
                    this["cards"][_0xbd798a]["rank"] > ig["game"]["leadingRank"]
                  )
                    return !0x0;
                } else {
                  if (
                    this["cards"][_0xbd798a]["suit"] ==
                      ig["game"]["leadSuit"] &&
                    this["cards"][_0xbd798a]["rank"] >
                      ig["game"]["leadingRank"] &&
                    0xc != this["cards"][_0xbd798a]["rank"]
                  )
                    return !0x0;
                }
              } else {
                if (
                  this["cards"][_0xbd798a]["suit"] == ig["game"]["leadSuit"] &&
                  this["cards"][_0xbd798a]["rank"] >
                    ig["game"]["leadingRank"] &&
                  0xc != this["cards"][_0xbd798a]["rank"] &&
                  0xd != this["cards"][_0xbd798a]["rank"]
                )
                  return !0x0;
              }
          } else {
            if (0x0 < this["countSuitOnHand"](0x3)) return !0x0;
          }
          return !0x1;
        },
        canLose: function () {},
        largestSequence: function () {
          for (
            var _0x26cb24 = 0x0, _0x2600ea = 0x0;
            _0x2600ea < this["cards"]["length"];
            _0x2600ea++
          )
            this["cards"][_0x2600ea]["sequence"] > _0x26cb24 &&
              (_0x26cb24 = this["cards"][_0x2600ea]["sequence"]);
          return _0x26cb24;
        },
        passing: function () {
          0x1 != this["num"] && this["choosePassCards"]();
        },
        arrangePass: function () {
          for (
            var _0x151d28 = [],
              _0x1fd8af = [],
              _0x10fe91 = [],
              _0xa029be = [],
              _0x3a97fe = 0x0;
            _0x3a97fe < this["cards"]["length"];
            _0x3a97fe++
          ) {
            var _0x124203 = this["cards"][_0x3a97fe];
            switch (_0x124203["suit"]) {
              case 0x0:
                _0xa029be["push"](_0x124203);
                break;
              case 0x1:
                _0x10fe91["push"](_0x124203);
                break;
              case 0x2:
                _0x1fd8af["push"](_0x124203);
                break;
              case 0x3:
                _0x151d28["push"](_0x124203);
            }
          }
          _0xa029be["sort"](function (_0x1f3f72, _0xc8ac60) {
            return _0x1f3f72["rank"] - _0xc8ac60["rank"];
          }),
            _0x10fe91["sort"](function (_0xc385d8, _0xb6b5e6) {
              return _0xc385d8["rank"] - _0xb6b5e6["rank"];
            }),
            _0x1fd8af["sort"](function (_0xaca8a6, _0x1337f4) {
              return _0xaca8a6["rank"] - _0x1337f4["rank"];
            }),
            _0x151d28["sort"](function (_0x26203d, _0x5a6546) {
              return _0x26203d["rank"] - _0x5a6546["rank"];
            });
          for (
            _0x3a97fe = _0x124203 = 0x0;
            _0x3a97fe < _0x10fe91["length"];
            _0x3a97fe++
          )
            (_0x10fe91[_0x3a97fe]["sequence"] = _0x124203),
              (_0x10fe91[_0x3a97fe]["zIndex"] = 0x320 + _0x124203),
              _0x10fe91[_0x3a97fe]["tweenPass"](
                0xf0 + 0x23 * _0x124203,
                0x181 - 0xa * _0x10fe91[_0x3a97fe]["passed"]
              ),
              _0x124203++;
          for (_0x3a97fe = 0x0; _0x3a97fe < _0xa029be["length"]; _0x3a97fe++)
            (_0xa029be[_0x3a97fe]["sequence"] = _0x124203),
              (_0xa029be[_0x3a97fe]["zIndex"] = 0x320 + _0x124203),
              _0xa029be[_0x3a97fe]["tweenPass"](
                0xf0 + 0x23 * _0x124203,
                0x181 - 0xa * _0xa029be[_0x3a97fe]["passed"]
              ),
              _0x124203++;
          for (_0x3a97fe = 0x0; _0x3a97fe < _0x151d28["length"]; _0x3a97fe++)
            (_0x151d28[_0x3a97fe]["sequence"] = _0x124203),
              (_0x151d28[_0x3a97fe]["zIndex"] = 0x320 + _0x124203),
              _0x151d28[_0x3a97fe]["tweenPass"](
                0xf0 + 0x23 * _0x124203,
                0x181 - 0xa * _0x151d28[_0x3a97fe]["passed"]
              ),
              _0x124203++;
          for (_0x3a97fe = 0x0; _0x3a97fe < _0x1fd8af["length"]; _0x3a97fe++)
            (_0x1fd8af[_0x3a97fe]["sequence"] = _0x124203),
              (_0x1fd8af[_0x3a97fe]["zIndex"] = 0x320 + _0x124203),
              _0x1fd8af[_0x3a97fe]["tweenPass"](
                0xf0 + 0x23 * _0x124203,
                0x181 - 0xa * _0x1fd8af[_0x3a97fe]["passed"]
              ),
              _0x124203++;
          ig["game"]["sortEntitiesDeferred"]();
        },
        arrangePass2: function () {
          for (
            var _0x500d37 = 0x0;
            _0x500d37 < this["cards"]["length"];
            _0x500d37++
          )
            0x1 == this["cards"][_0x500d37]["passed"] &&
              this["cards"][_0x500d37]["tweenPass"](
                this["cards"][_0x500d37]["pos"]["x"],
                this["cards"][_0x500d37]["pos"]["y"] + 0xa
              );
        },
        pass: function (_0x35884f) {
          _0x35884f = ig["game"]["players"][_0x35884f];
          for (
            var _0x362e0c = 0x0;
            _0x362e0c < this["passCards"]["length"];
            _0x362e0c++
          ) {
            0x1 != _0x35884f["num"]
              ? (this["passCards"][_0x362e0c]["tweenPass"](
                  _0x35884f["passCards"][_0x362e0c]["oriPos"][0x0],
                  _0x35884f["passCards"][_0x362e0c]["oriPos"][0x1]
                ),
                (this["passCards"][_0x362e0c]["zIndex"] =
                  _0x35884f["passCards"][_0x362e0c]["zIndex"]),
                (this["passCards"][_0x362e0c]["sequence"] =
                  _0x35884f["passCards"][_0x362e0c]["sequence"]),
                0x1 == this["num"] &&
                  this["passCards"][_0x362e0c]["notDisplayCard"]())
              : ((this["passCards"][_0x362e0c]["zIndex"] =
                  _0x35884f["passCards"][_0x362e0c]["zIndex"]),
                (this["passCards"][_0x362e0c]["passed"] = 0x1),
                this["passCards"][_0x362e0c]["displayCard"]());
            if (0x1 != _0x35884f["num"]) {
              switch (ig["game"]["passType"]) {
                case 0x1:
                  this["passCards"][_0x362e0c]["angled"] = 0.5 * Math["PI"];
                  break;
                case 0x2:
                  this["passCards"][_0x362e0c]["angled"] = -0.5 * Math["PI"];
                  break;
                case 0x3:
                  this["passCards"][_0x362e0c]["angled"] = Math["PI"];
              }
              this["passCards"][_0x362e0c]["rotateTimer"] = new ig["Timer"](
                0.25
              );
            }
            (this["passCards"][_0x362e0c]["owner"] = _0x35884f["num"]),
              this["cards"]["splice"](
                this["cards"]["indexOf"](this["passCards"][_0x362e0c]),
                0x1
              ),
              _0x35884f["cards"]["push"](this["passCards"][_0x362e0c]);
          }
          0x1 == this["num"]
            ? ((this["arrangePassTimer"] = new ig["Timer"](0.05)),
              (this["arrangePassTimer2"] = new ig["Timer"](0x1)))
            : (this["arrangeTimer"] = new ig["Timer"](0.35)),
            ig["game"]["sortEntitiesDeferred"]();
        },
        passSelect: function (_0xa863b8) {
          0x3 <= this["passCards"]["length"]
            ? ((_0xa863b8["selected"] = !0x1),
              0x1 == this["num"] &&
                (ig["game"]["msgBoard"]["msg"] =
                  _STRINGS["Game"]["InvalidCard3"]))
            : (0x1 == this["num"] &&
                (0x2 == this["passCards"]["length"]
                  ? (ig["game"]["msgBoard"]["msg"] =
                      _STRINGS["Game"]["PassGuide"])
                  : ig["game"]["msgBoard"]["passMsg"]()),
              (_0xa863b8["pos"]["x"] = _0xa863b8["sePos"][0x0]),
              (_0xa863b8["pos"]["y"] = _0xa863b8["sePos"][0x1]),
              this["passCards"]["push"](_0xa863b8));
        },
        passDeselect: function (_0xde5ec) {
          0x1 == this["num"] && ig["game"]["msgBoard"]["passMsg"](),
            (_0xde5ec["pos"]["x"] = _0xde5ec["oriPos"][0x0]),
            (_0xde5ec["pos"]["y"] = _0xde5ec["oriPos"][0x1]),
            this["passCards"]["splice"](
              this["passCards"]["indexOf"](_0xde5ec),
              0x1
            );
        },
        choosePassCards: function () {
          for (
            var _0x516dfe = [],
              _0x5baea8 = [],
              _0xcdd329 = [],
              _0xe5d87b = [],
              _0x3037e9 = [],
              _0x197b3c = 0x0;
            _0x197b3c < this["cards"]["length"];
            _0x197b3c++
          ) {
            var _0x465ad7 = this["cards"][_0x197b3c];
            switch (_0x465ad7["suit"]) {
              case 0x0:
                _0x3037e9["push"](_0x465ad7);
                break;
              case 0x1:
                _0xe5d87b["push"](_0x465ad7);
                break;
              case 0x2:
                _0xcdd329["push"](_0x465ad7);
                break;
              case 0x3:
                _0x5baea8["push"](_0x465ad7);
            }
          }
          for (
            var _0x2dd0ca = [], _0x4c12dc = [], _0x197b3c = 0x0;
            _0x197b3c < _0x5baea8["length"];
            _0x197b3c++
          )
            (_0x465ad7 = _0x5baea8[_0x197b3c]),
              0xc > _0x465ad7["rank"] && _0x2dd0ca["push"](_0x465ad7),
              0xc <= _0x465ad7["rank"] && _0x4c12dc["push"](_0x465ad7);
          if (0x3 >= _0x2dd0ca["length"]) {
            for (_0x197b3c = 0x0; _0x197b3c < _0x4c12dc["length"]; _0x197b3c++)
              _0x516dfe["push"](_0x4c12dc[_0x197b3c]);
          } else {
            for (_0x197b3c = 0x0; _0x197b3c < _0x4c12dc["length"]; _0x197b3c++)
              0xc < _0x4c12dc[_0x197b3c]["rank"] &&
                _0x516dfe["push"](_0x4c12dc[_0x197b3c]);
          }
          _0xcdd329["sort"](function (_0xcdbef, _0x3ed36c) {
            return _0x3ed36c["rank"] - _0xcdbef["rank"];
          }),
            _0xe5d87b["sort"](function (_0x13500d, _0x3723f3) {
              return _0x3723f3["rank"] - _0x13500d["rank"];
            }),
            _0x3037e9["sort"](function (_0x54da6f, _0x3e72fc) {
              return _0x3e72fc["rank"] - _0x54da6f["rank"];
            }),
            _0xe5d87b["length"] &&
              0x2 == _0xe5d87b[_0xe5d87b["length"] - 0x1]["rank"] &&
              ((_0x5baea8 = _0xe5d87b["splice"](
                _0xe5d87b["length"] - 0x1,
                0x1
              )[0x0]),
              _0x516dfe["push"](_0x5baea8));
          if (_0xe5d87b["length"] <= 0x3 - _0x516dfe["length"]) {
            for (_0x197b3c = 0x0; _0x197b3c < _0xe5d87b["length"]; _0x197b3c++)
              _0x516dfe["push"](_0xe5d87b[_0x197b3c]);
          }
          if (_0x3037e9["length"] <= 0x3 - _0x516dfe["length"]) {
            for (_0x197b3c = 0x0; _0x197b3c < _0x3037e9["length"]; _0x197b3c++)
              _0x516dfe["push"](_0x3037e9[_0x197b3c]);
          }
          if (0x3 > _0x516dfe["length"]) {
            for (_0x197b3c = 0x0; _0x197b3c < _0xcdd329["length"]; _0x197b3c++)
              _0x516dfe["push"](_0xcdd329[_0x197b3c]);
            for (_0x197b3c = 0x0; _0x197b3c < _0x3037e9["length"]; _0x197b3c++)
              _0x516dfe["push"](_0x3037e9[_0x197b3c]);
          }
          for (_0x197b3c = 0x0; 0x3 > _0x197b3c; _0x197b3c++)
            this["passSelect"](_0x516dfe[_0x197b3c]),
              this["passPosX"]["push"](_0x516dfe[_0x197b3c]["pos"]["x"]),
              this["passPosY"]["push"](_0x516dfe[_0x197b3c]["pos"]["y"]);
          return _0x516dfe;
        },
        arrangeZIndex: function () {
          var _0xea7d24 = this["cards"];
          switch (this["num"]) {
            case 0x2:
              _0xea7d24["sort"](function (_0x4a5e7c, _0x231a1b) {
                return _0x4a5e7c["pos"]["y"] - _0x231a1b["pos"]["y"];
              });
              break;
            case 0x3:
              _0xea7d24["sort"](function (_0x1a1399, _0x13e7ab) {
                return _0x13e7ab["pos"]["x"] - _0x1a1399["pos"]["x"];
              });
              break;
            case 0x4:
              _0xea7d24["sort"](function (_0x2053e2, _0x151d22) {
                return _0x151d22["pos"]["y"] - _0x2053e2["pos"]["y"];
              });
          }
          for (
            var _0x14d51a = 0x0;
            _0x14d51a < _0xea7d24["length"];
            _0x14d51a++
          )
            (_0xea7d24[_0x14d51a]["zIndex"] = 0x320 + _0x14d51a),
              (_0xea7d24[_0x14d51a]["sequence"] = _0x14d51a);
          ig["game"]["sortEntitiesDeferred"]();
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.entities.score-manager")
    ["requires"]("impact.entity")
    ["defines"](function () {
      EntityScoreManager = ig["Entity"]["extend"]({
        roundScore: { a: 0x0, b: 0x0, c: 0x0, d: 0x0 },
        totalScore: { a: 0x0, b: 0x0, c: 0x0, d: 0x0 },
        ranking: [],
        scores: [],
        init: function (_0x58dc9d, _0x708933, _0x14980a) {
          this["parent"](_0x58dc9d, _0x708933, _0x14980a);
        },
        update: function () {
          this["parent"]();
        },
        arrangeRank: function () {
          var _0x4a4cf2 = [
              this["totalScore"]["a"],
              this["totalScore"]["b"],
              this["totalScore"]["c"],
              this["totalScore"]["d"],
            ],
            _0x34a505 = [0x0, 0x1, 0x2, 0x3];
          _0x34a505["sort"](function (_0x6f5353, _0x4474f7) {
            return _0x4a4cf2[_0x4474f7] - _0x4a4cf2[_0x6f5353];
          }),
            (this["ranking"] = _0x34a505),
            ig["log"](this["ranking"]),
            (this["scores"] = _0x4a4cf2["sort"](function (
              _0x54d5ba,
              _0x5054ba
            ) {
              return _0x5054ba - _0x54d5ba;
            }));
        },
        clearScore: function () {
          (this["roundScore"]["a"] = 0x0),
            (this["roundScore"]["b"] = 0x0),
            (this["roundScore"]["c"] = 0x0),
            (this["roundScore"]["d"] = 0x0);
        },
        resetScore: function () {
          this["clearScore"](),
            (this["totalScore"]["a"] = 0x0),
            (this["totalScore"]["b"] = 0x0),
            (this["totalScore"]["c"] = 0x0),
            (this["totalScore"]["d"] = 0x0);
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.entities.board-score")
    ["requires"]("impact.entity", "game.entities.score-manager")
    ["defines"](function () {
      EntityBoardScore = ig["Entity"]["extend"]({
        animSheet: new ig["AnimationSheet"](
          "media/graphics/sprites/board-score.png",
          0x1a1,
          0x162
        ),
        init: function (_0x69157d, _0x1d29a4, _0x47fc33) {
          this["parent"](_0x69157d, _0x1d29a4, _0x47fc33),
            this["addAnim"]("idle", 0x1, [0x0]);
        },
        update: function () {
          this["parent"]();
        },
        draw: function () {
          this["parent"]();
          var _0x4a85f6 = ig["system"]["context"],
            _0x4a4f0a =
              ig["game"]["getEntitiesByType"](EntityScoreManager)[0x0],
            _0x2043f = [
              "You",
              ig["game"]["p2Name"],
              ig["game"]["p3Name"],
              ig["game"]["p4Name"],
            ],
            _0x451470 = this["pos"]["x"],
            _0x59b4ec = this["pos"]["y"];
          (_0x4a85f6["font"] = "24px\x20bpreplay"),
            (_0x4a85f6["textAlign"] = "center"),
            (_0x4a85f6["textBaseline"] = "middle"),
            (_0x4a85f6["fillStyle"] = "gold"),
            _0x4a85f6["fillText"](
              _STRINGS["Game"]["Score"],
              _0x451470 + 0xd1,
              _0x59b4ec + 0x23
            ),
            _0x4a85f6["fillText"](
              _STRINGS["Game"]["TotalScore"],
              _0x451470 + 0x14f,
              _0x59b4ec + 0x23
            ),
            _0x4a85f6["fillText"](
              _STRINGS["Game"]["You"],
              _0x451470 + 0x4b,
              _0x59b4ec +
                0x55 +
                0x25 * (0x3 - _0x4a4f0a["ranking"]["indexOf"](0x0))
            ),
            _0x4a85f6["fillText"](
              ig["game"]["p2Name"],
              _0x451470 + 0x4b,
              _0x59b4ec +
                0x55 +
                0x25 * (0x3 - _0x4a4f0a["ranking"]["indexOf"](0x1))
            ),
            _0x4a85f6["fillText"](
              ig["game"]["p3Name"],
              _0x451470 + 0x4b,
              _0x59b4ec +
                0x55 +
                0x25 * (0x3 - _0x4a4f0a["ranking"]["indexOf"](0x2))
            ),
            _0x4a85f6["fillText"](
              ig["game"]["p4Name"],
              _0x451470 + 0x4b,
              _0x59b4ec +
                0x55 +
                0x25 * (0x3 - _0x4a4f0a["ranking"]["indexOf"](0x3))
            ),
            (_0x4a85f6["fillStyle"] = "white"),
            _0x4a85f6["fillText"](
              _0x4a4f0a["roundScore"]["a"],
              _0x451470 + 0xd1,
              _0x59b4ec +
                0x55 +
                0x25 * (0x3 - _0x4a4f0a["ranking"]["indexOf"](0x0))
            ),
            _0x4a85f6["fillText"](
              _0x4a4f0a["roundScore"]["b"],
              _0x451470 + 0xd1,
              _0x59b4ec +
                0x55 +
                0x25 * (0x3 - _0x4a4f0a["ranking"]["indexOf"](0x1))
            ),
            _0x4a85f6["fillText"](
              _0x4a4f0a["roundScore"]["c"],
              _0x451470 + 0xd1,
              _0x59b4ec +
                0x55 +
                0x25 * (0x3 - _0x4a4f0a["ranking"]["indexOf"](0x2))
            ),
            _0x4a85f6["fillText"](
              _0x4a4f0a["roundScore"]["d"],
              _0x451470 + 0xd1,
              _0x59b4ec +
                0x55 +
                0x25 * (0x3 - _0x4a4f0a["ranking"]["indexOf"](0x3))
            ),
            _0x4a85f6["fillText"](
              _0x4a4f0a["totalScore"]["a"],
              _0x451470 + 0x14f,
              _0x59b4ec +
                0x55 +
                0x25 * (0x3 - _0x4a4f0a["ranking"]["indexOf"](0x0))
            ),
            _0x4a85f6["fillText"](
              _0x4a4f0a["totalScore"]["b"],
              _0x451470 + 0x14f,
              _0x59b4ec +
                0x55 +
                0x25 * (0x3 - _0x4a4f0a["ranking"]["indexOf"](0x1))
            ),
            _0x4a85f6["fillText"](
              _0x4a4f0a["totalScore"]["c"],
              _0x451470 + 0x14f,
              _0x59b4ec +
                0x55 +
                0x25 * (0x3 - _0x4a4f0a["ranking"]["indexOf"](0x2))
            ),
            _0x4a85f6["fillText"](
              _0x4a4f0a["totalScore"]["d"],
              _0x451470 + 0x14f,
              _0x59b4ec +
                0x55 +
                0x25 * (0x3 - _0x4a4f0a["ranking"]["indexOf"](0x3))
            ),
            0x1 == ig["game"]["win"]
              ? ((_0x4a85f6["font"] = "25px\x20bpreplay"),
                _0x4a85f6["fillText"](
                  _STRINGS["Game"]["Win"],
                  this["pos"]["x"] + 0xd1,
                  this["pos"]["y"] + 0x10e
                ))
              : 0x2 <= ig["game"]["win"] &&
                ((_0x4a85f6["font"] = "25px\x20bpreplay"),
                _0x4a85f6["fillText"](
                  _0x2043f[ig["game"]["win"] - 0x1] +
                    "\x20" +
                    _STRINGS["Game"]["win"] +
                    "\x20!",
                  this["pos"]["x"] + 0xd1,
                  this["pos"]["y"] + 0x10e
                ));
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.entities.board-rules")
    ["requires"]("impact.entity")
    ["defines"](function () {
      EntityBoardRules = ig["Entity"]["extend"]({
        animSheet: new ig["AnimationSheet"](
          "media/graphics/sprites/board-rules.png",
          0x304,
          0x1a5
        ),
        init: function (_0x32c000, _0x186246, _0x598ef3) {
          this["parent"](_0x32c000, _0x186246, _0x598ef3),
            this["addAnim"]("idle", 0x1, [0x0]);
        },
        update: function () {
          this["parent"]();
        },
        movePos: function (_0x4c4303, _0x1847e6) {
          (this["pos"]["x"] = _0x4c4303), (this["pos"]["y"] = _0x1847e6);
        },
        draw: function () {
          this["parent"]();
          if (!ig["global"]["wm"]) {
            var _0x31ede5 = this["pos"]["x"],
              _0x587478 = this["pos"]["y"],
              _0x10c9ec = ig["system"]["context"];
            (_0x10c9ec["font"] = "35px\x20bpreplay"),
              (_0x10c9ec["textAlign"] = "center"),
              (_0x10c9ec["textBaseline"] = "middle"),
              (_0x10c9ec["fillStyle"] = "gold"),
              _0x10c9ec["fillText"](
                _STRINGS["Game"]["Rules"],
                _0x31ede5 + 0x182,
                _0x587478 + 0x28
              ),
              (_0x10c9ec["font"] = "14px\x20bpreplay"),
              (_0x10c9ec["textAlign"] = "left"),
              _0x10c9ec["fillText"](
                _STRINGS["Game"]["RulesDetail1"],
                _0x31ede5 + 0x37,
                _0x587478 + 0x58
              ),
              _0x10c9ec["fillText"](
                _STRINGS["Game"]["RulesDetail2"],
                _0x31ede5 + 0x37,
                _0x587478 + 0x58 + 0x24
              ),
              _0x10c9ec["fillText"](
                _STRINGS["Game"]["RulesDetail3"],
                _0x31ede5 + 0x37,
                _0x587478 + 0x58 + 0x48
              ),
              _0x10c9ec["fillText"](
                _STRINGS["Game"]["RulesDetail4"],
                _0x31ede5 + 0x37,
                _0x587478 + 0x58 + 0x6c
              ),
              _0x10c9ec["fillText"](
                _STRINGS["Game"]["RulesDetail5"],
                _0x31ede5 + 0x37,
                _0x587478 + 0x58 + 0x90
              ),
              _0x10c9ec["fillText"](
                _STRINGS["Game"]["RulesDetail6"],
                _0x31ede5 + 0x37,
                _0x587478 + 0x58 + 0xb4
              ),
              _0x10c9ec["fillText"](
                _STRINGS["Game"]["RulesDetail7"],
                _0x31ede5 + 0x37,
                _0x587478 + 0x58 + 0xd8
              ),
              _0x10c9ec["fillText"](
                _STRINGS["Game"]["RulesDetail8"],
                _0x31ede5 + 0x37,
                _0x587478 + 0x58 + 0xd8 + 0x14
              );
          }
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.entities.board-current-score")
    ["requires"]("impact.entity", "game.entities.score-manager")
    ["defines"](function () {
      EntityBoardCurrentScore = ig["Entity"]["extend"]({
        animSheet: new ig["AnimationSheet"](
          "media/graphics/sprites/board-current-score.png",
          0xdd,
          0x5b
        ),
        init: function (_0xbac64c, _0x4f3714, _0x1e2ffd) {
          this["parent"](_0xbac64c, _0x4f3714, _0x1e2ffd),
            this["addAnim"]("idle", 0x1, [0x0]);
        },
        update: function () {
          this["parent"]();
        },
        draw: function () {
          this["parent"]();
          var _0x3ec425 = ig["system"]["context"];
          ig["game"]["getEntitiesByType"](EntityScoreManager),
            (_0x3ec425["font"] = "15px\x20bpreplay"),
            (_0x3ec425["textAlign"] = "center"),
            (_0x3ec425["textBaseline"] = "middle"),
            (_0x3ec425["fillStyle"] = "gold");
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.entities.board-message")
    ["requires"]("impact.entity")
    ["defines"](function () {
      EntityBoardMessage = ig["Entity"]["extend"]({
        size: { x: 0x14f, y: 0x22 },
        animSheet: new ig["AnimationSheet"](
          "media/graphics/sprites/board-message.png",
          0x14f,
          0x22
        ),
        msg: "",
        init: function (_0x2cfbb7, _0x71ebad, _0x32abbd) {
          this["parent"](_0x2cfbb7, _0x71ebad, _0x32abbd),
            this["addAnim"]("idle", 0x1, [0x0]);
        },
        update: function () {
          this["parent"](),
            (this["currentAnim"]["alpha"] = "" === this["msg"] ? 0x0 : 0x1);
        },
        draw: function () {
          this["parent"]();
          var _0x38d770 = ig["system"]["context"],
            _0x1cf6f8 = this["pos"]["x"],
            _0x4adf4b = this["pos"]["y"];
          (_0x38d770["font"] = "13px\x20bpreplay"),
            (_0x38d770["textAlign"] = "center"),
            (_0x38d770["textBaseline"] = "middle"),
            (_0x38d770["fillStyle"] = "white"),
            _0x38d770["fillText"](
              this["msg"],
              _0x1cf6f8 + 0xa7,
              _0x4adf4b + 0x12
            );
        },
        passMsg: function () {
          this["msg"] =
            _STRINGS["Game"]["Pass"] +
            [ig["game"]["p2Name"], ig["game"]["p4Name"], ig["game"]["p3Name"]][
              ig["game"]["passType"] - 0x1
            ];
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.entities.black-layer")
    ["requires"]("impact.entity", "impact.timer")
    ["defines"](function () {
      EntityBlackLayer = ig["Entity"]["extend"]({
        animSheet: new ig["AnimationSheet"](
          "media/graphics/sprites/black-layer.png",
          0x3c0,
          0x21c
        ),
        gravityFactor: 0x0,
        zIndex: 0x1388,
        animAlpha: 0.5,
        init: function (_0x2cad21, _0x18d049, _0xee0612) {
          this["parent"](_0x2cad21, _0x18d049, _0xee0612),
            this["addAnim"]("idle", 0x1, [0x0]),
            (this["currentAnim"]["alpha"] = this["animAlpha"]);
        },
        update: function () {
          this["parent"](), (this["currentAnim"]["alpha"] = this["animAlpha"]);
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.levels.opening")
    ["requires"]("impact.image", "game.entities.opening-kitty")
    ["defines"](function () {
      LevelOpening = {
        entities: [{ type: "EntityOpeningKitty", x: 0x208, y: 0xd4 }],
        layer: [],
      };
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.entities.buttons.button-sound")
    ["requires"]("game.entities.buttons.button")
    ["defines"](function () {
      EntityButtonSound = EntityButton["extend"]({
        type: ig["Entity"]["TYPE"]["A"],
        gravityFactor: 0x0,
        animSheet: new ig["AnimationSheet"](
          "media/graphics/sprites/buttons/button-sound.png",
          0x27,
          0x2c
        ),
        zIndex: 0x2711,
        size: { x: 0x27, y: 0x2c },
        name: "soundtest",
        init: function (_0x26bb79, _0x925f18, _0x16a78a) {
          this["parent"](_0x26bb79, _0x925f18, _0x16a78a),
            this["addAnim"]("on", 0x1, [0x0]),
            this["addAnim"]("off", 0x1, [0x1]),
            this["addAnim"]("onHover", 0x1, [0x2]),
            this["addAnim"]("offHover", 0x1, [0x3]),
            null === ig["game"]["storage"]["get"]("sound") &&
              ig["game"]["storage"]["set"]("sound", 0x1),
            0x0 === ig["game"]["storage"]["get"]("sound")
              ? ((ig["game"]["mutetest"] = !0x0),
                (this["currentAnim"] = this["anims"]["off"]),
                ig["soundHandler"]["muteAll"](!0x0))
              : (ig["game"]["mutetest"] = !0x1);
        },
        draw: function () {
          this["parent"]();
        },
        clicked: function () {
          this["parent"]();
        },
        over: function () {
          this["currentAnim"] = ig["game"]["mutetest"]
            ? this["anims"]["offHover"]
            : this["anims"]["onHover"];
        },
        leave: function () {
          this["parent"](),
            (this["currentAnim"] = ig["game"]["mutetest"]
              ? this["anims"]["off"]
              : this["anims"]["on"]);
        },
        released: function () {
          this["parent"]();
        },
        redirect: function () {
          "" !== ig["game"]["gameState"] &&
            (ig["game"]["mutetest"]
              ? (ig["soundHandler"]["unmuteAll"](!0x0),
                (ig["game"]["mutetest"] = !0x1),
                (this["currentAnim"] = this["anims"]["onHover"]),
                ig["game"]["storage"]["set"]("sound", 0x1))
              : (ig["soundHandler"]["muteAll"](!0x0),
                (ig["game"]["mutetest"] = !0x0),
                (this["currentAnim"] = this["anims"]["offHover"]),
                ig["game"]["storage"]["set"]("sound", 0x0)));
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.levels.test-desktop")
    ["requires"](
      "impact.image",
      "game.entities.branding-logo-placeholder",
      "game.entities.buttons.button-more-games",
      "game.entities.pointer",
      "game.entities.buttons.button-sound"
    )
    ["defines"](function () {
      (LevelTestDesktop = {
        entities: [
          {
            type: "EntityBrandingLogoPlaceholder",
            x: 0x128,
            y: 0x18c,
            settings: { div_layer_name: "layer_mainmenu", centralize: "true" },
          },
          {
            type: "EntityButtonMoreGames",
            x: 0x1b0,
            y: 0x11c,
            settings: { div_layer_name: "layer_moregames_mainmenu" },
          },
          { type: "EntityPointer", x: 0x260, y: 0x78 },
          { type: "EntityButtonSound", x: 0xc0, y: 0x11c },
        ],
        layer: [
          {
            name: "background",
            width: 0x28,
            height: 0x1e,
            linkWithCollision: !0x1,
            visible: 0x1,
            tilesetName: "media/graphics/backgrounds/desktop/background.jpg",
            repeat: !0x1,
            preRender: !0x0,
            distance: "1",
            tilesize: 0x10,
            foreground: !0x1,
            data: [
              [
                0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd,
                0xe, 0xf, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18,
                0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x1e, 0x1f, 0x20, 0x21, 0x22,
                0x23, 0x24, 0x25, 0x26, 0x27, 0x28,
              ],
              [
                0x29, 0x2a, 0x2b, 0x2c, 0x2d, 0x2e, 0x2f, 0x30, 0x31, 0x32,
                0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3a, 0x3b, 0x3c,
                0x3d, 0x3e, 0x3f, 0x40, 0x41, 0x42, 0x43, 0x44, 0x45, 0x46,
                0x47, 0x48, 0x49, 0x4a, 0x4b, 0x4c, 0x4d, 0x4e, 0x4f, 0x50,
              ],
              [
                0x51, 0x52, 0x53, 0x54, 0x55, 0x56, 0x57, 0x58, 0x59, 0x5a,
                0x5b, 0x5c, 0x5d, 0x5e, 0x5f, 0x60, 0x61, 0x62, 0x63, 0x64,
                0x65, 0x66, 0x67, 0x68, 0x69, 0x6a, 0x6b, 0x6c, 0x6d, 0x6e,
                0x6f, 0x70, 0x71, 0x72, 0x73, 0x74, 0x75, 0x76, 0x77, 0x78,
              ],
              [
                0x79, 0x7a, 0x7b, 0x7c, 0x7d, 0x7e, 0x7f, 0x80, 0x81, 0x82,
                0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x8a, 0x8b, 0x8c,
                0x8d, 0x8e, 0x8f, 0x90, 0x91, 0x92, 0x93, 0x94, 0x95, 0x96,
                0x97, 0x98, 0x99, 0x9a, 0x9b, 0x9c, 0x9d, 0x9e, 0x9f, 0xa0,
              ],
              [
                0xa1, 0xa2, 0xa3, 0xa4, 0xa5, 0xa6, 0xa7, 0xa8, 0xa9, 0xaa,
                0xab, 0xac, 0xad, 0xae, 0xaf, 0xb0, 0xb1, 0xb2, 0xb3, 0xb4,
                0xb5, 0xb6, 0xb7, 0xb8, 0xb9, 0xba, 0xbb, 0xbc, 0xbd, 0xbe,
                0xbf, 0xc0, 0xc1, 0xc2, 0xc3, 0xc4, 0xc5, 0xc6, 0xc7, 0xc8,
              ],
              [
                0xc9, 0xca, 0xcb, 0xcc, 0xcd, 0xce, 0xcf, 0xd0, 0xd1, 0xd2,
                0xd3, 0xd4, 0xd5, 0xd6, 0xd7, 0xd8, 0xd9, 0xda, 0xdb, 0xdc,
                0xdd, 0xde, 0xdf, 0xe0, 0xe1, 0xe2, 0xe3, 0xe4, 0xe5, 0xe6,
                0xe7, 0xe8, 0xe9, 0xea, 0xeb, 0xec, 0xed, 0xee, 0xef, 0xf0,
              ],
              [
                0xf1, 0xf2, 0xf3, 0xf4, 0xf5, 0xf6, 0xf7, 0xf8, 0xf9, 0xfa,
                0xfb, 0xfc, 0xfd, 0xfe, 0xff, 0x100, 0x101, 0x102, 0x103, 0x104,
                0x105, 0x106, 0x107, 0x108, 0x109, 0x10a, 0x10b, 0x10c, 0x10d,
                0x10e, 0x10f, 0x110, 0x111, 0x112, 0x113, 0x114, 0x115, 0x116,
                0x117, 0x118,
              ],
              [
                0x119, 0x11a, 0x11b, 0x11c, 0x11d, 0x11e, 0x11f, 0x120, 0x121,
                0x122, 0x123, 0x124, 0x125, 0x126, 0x127, 0x128, 0x129, 0x12a,
                0x12b, 0x12c, 0x12d, 0x12e, 0x12f, 0x130, 0x131, 0x132, 0x133,
                0x134, 0x135, 0x136, 0x137, 0x138, 0x139, 0x13a, 0x13b, 0x13c,
                0x13d, 0x13e, 0x13f, 0x140,
              ],
              [
                0x141, 0x142, 0x143, 0x144, 0x145, 0x146, 0x147, 0x148, 0x149,
                0x14a, 0x14b, 0x14c, 0x14d, 0x14e, 0x14f, 0x150, 0x151, 0x152,
                0x153, 0x154, 0x155, 0x156, 0x157, 0x158, 0x159, 0x15a, 0x15b,
                0x15c, 0x15d, 0x15e, 0x15f, 0x160, 0x161, 0x162, 0x163, 0x164,
                0x165, 0x166, 0x167, 0x168,
              ],
              [
                0x169, 0x16a, 0x16b, 0x16c, 0x16d, 0x16e, 0x16f, 0x170, 0x171,
                0x172, 0x173, 0x174, 0x175, 0x176, 0x177, 0x178, 0x179, 0x17a,
                0x17b, 0x17c, 0x17d, 0x17e, 0x17f, 0x180, 0x181, 0x182, 0x183,
                0x184, 0x185, 0x186, 0x187, 0x188, 0x189, 0x18a, 0x18b, 0x18c,
                0x18d, 0x18e, 0x18f, 0x190,
              ],
              [
                0x191, 0x192, 0x193, 0x194, 0x195, 0x196, 0x197, 0x198, 0x199,
                0x19a, 0x19b, 0x19c, 0x19d, 0x19e, 0x19f, 0x1a0, 0x1a1, 0x1a2,
                0x1a3, 0x1a4, 0x1a5, 0x1a6, 0x1a7, 0x1a8, 0x1a9, 0x1aa, 0x1ab,
                0x1ac, 0x1ad, 0x1ae, 0x1af, 0x1b0, 0x1b1, 0x1b2, 0x1b3, 0x1b4,
                0x1b5, 0x1b6, 0x1b7, 0x1b8,
              ],
              [
                0x1b9, 0x1ba, 0x1bb, 0x1bc, 0x1bd, 0x1be, 0x1bf, 0x1c0, 0x1c1,
                0x1c2, 0x1c3, 0x1c4, 0x1c5, 0x1c6, 0x1c7, 0x1c8, 0x1c9, 0x1ca,
                0x1cb, 0x1cc, 0x1cd, 0x1ce, 0x1cf, 0x1d0, 0x1d1, 0x1d2, 0x1d3,
                0x1d4, 0x1d5, 0x1d6, 0x1d7, 0x1d8, 0x1d9, 0x1da, 0x1db, 0x1dc,
                0x1dd, 0x1de, 0x1df, 0x1e0,
              ],
              [
                0x1e1, 0x1e2, 0x1e3, 0x1e4, 0x1e5, 0x1e6, 0x1e7, 0x1e8, 0x1e9,
                0x1ea, 0x1eb, 0x1ec, 0x1ed, 0x1ee, 0x1ef, 0x1f0, 0x1f1, 0x1f2,
                0x1f3, 0x1f4, 0x1f5, 0x1f6, 0x1f7, 0x1f8, 0x1f9, 0x1fa, 0x1fb,
                0x1fc, 0x1fd, 0x1fe, 0x1ff, 0x200, 0x201, 0x202, 0x203, 0x204,
                0x205, 0x206, 0x207, 0x208,
              ],
              [
                0x209, 0x20a, 0x20b, 0x20c, 0x20d, 0x20e, 0x20f, 0x210, 0x211,
                0x212, 0x213, 0x214, 0x215, 0x216, 0x217, 0x218, 0x219, 0x21a,
                0x21b, 0x21c, 0x21d, 0x21e, 0x21f, 0x220, 0x221, 0x222, 0x223,
                0x224, 0x225, 0x226, 0x227, 0x228, 0x229, 0x22a, 0x22b, 0x22c,
                0x22d, 0x22e, 0x22f, 0x230,
              ],
              [
                0x231, 0x232, 0x233, 0x234, 0x235, 0x236, 0x237, 0x238, 0x239,
                0x23a, 0x23b, 0x23c, 0x23d, 0x23e, 0x23f, 0x240, 0x241, 0x242,
                0x243, 0x244, 0x245, 0x246, 0x247, 0x248, 0x249, 0x24a, 0x24b,
                0x24c, 0x24d, 0x24e, 0x24f, 0x250, 0x251, 0x252, 0x253, 0x254,
                0x255, 0x256, 0x257, 0x258,
              ],
              [
                0x259, 0x25a, 0x25b, 0x25c, 0x25d, 0x25e, 0x25f, 0x260, 0x261,
                0x262, 0x263, 0x264, 0x265, 0x266, 0x267, 0x268, 0x269, 0x26a,
                0x26b, 0x26c, 0x26d, 0x26e, 0x26f, 0x270, 0x271, 0x272, 0x273,
                0x274, 0x275, 0x276, 0x277, 0x278, 0x279, 0x27a, 0x27b, 0x27c,
                0x27d, 0x27e, 0x27f, 0x280,
              ],
              [
                0x281, 0x282, 0x283, 0x284, 0x285, 0x286, 0x287, 0x288, 0x289,
                0x28a, 0x28b, 0x28c, 0x28d, 0x28e, 0x28f, 0x290, 0x291, 0x292,
                0x293, 0x294, 0x295, 0x296, 0x297, 0x298, 0x299, 0x29a, 0x29b,
                0x29c, 0x29d, 0x29e, 0x29f, 0x2a0, 0x2a1, 0x2a2, 0x2a3, 0x2a4,
                0x2a5, 0x2a6, 0x2a7, 0x2a8,
              ],
              [
                0x2a9, 0x2aa, 0x2ab, 0x2ac, 0x2ad, 0x2ae, 0x2af, 0x2b0, 0x2b1,
                0x2b2, 0x2b3, 0x2b4, 0x2b5, 0x2b6, 0x2b7, 0x2b8, 0x2b9, 0x2ba,
                0x2bb, 0x2bc, 0x2bd, 0x2be, 0x2bf, 0x2c0, 0x2c1, 0x2c2, 0x2c3,
                0x2c4, 0x2c5, 0x2c6, 0x2c7, 0x2c8, 0x2c9, 0x2ca, 0x2cb, 0x2cc,
                0x2cd, 0x2ce, 0x2cf, 0x2d0,
              ],
              [
                0x2d1, 0x2d2, 0x2d3, 0x2d4, 0x2d5, 0x2d6, 0x2d7, 0x2d8, 0x2d9,
                0x2da, 0x2db, 0x2dc, 0x2dd, 0x2de, 0x2df, 0x2e0, 0x2e1, 0x2e2,
                0x2e3, 0x2e4, 0x2e5, 0x2e6, 0x2e7, 0x2e8, 0x2e9, 0x2ea, 0x2eb,
                0x2ec, 0x2ed, 0x2ee, 0x2ef, 0x2f0, 0x2f1, 0x2f2, 0x2f3, 0x2f4,
                0x2f5, 0x2f6, 0x2f7, 0x2f8,
              ],
              [
                0x2f9, 0x2fa, 0x2fb, 0x2fc, 0x2fd, 0x2fe, 0x2ff, 0x300, 0x301,
                0x302, 0x303, 0x304, 0x305, 0x306, 0x307, 0x308, 0x309, 0x30a,
                0x30b, 0x30c, 0x30d, 0x30e, 0x30f, 0x310, 0x311, 0x312, 0x313,
                0x314, 0x315, 0x316, 0x317, 0x318, 0x319, 0x31a, 0x31b, 0x31c,
                0x31d, 0x31e, 0x31f, 0x320,
              ],
              [
                0x321, 0x322, 0x323, 0x324, 0x325, 0x326, 0x327, 0x328, 0x329,
                0x32a, 0x32b, 0x32c, 0x32d, 0x32e, 0x32f, 0x330, 0x331, 0x332,
                0x333, 0x334, 0x335, 0x336, 0x337, 0x338, 0x339, 0x33a, 0x33b,
                0x33c, 0x33d, 0x33e, 0x33f, 0x340, 0x341, 0x342, 0x343, 0x344,
                0x345, 0x346, 0x347, 0x348,
              ],
              [
                0x349, 0x34a, 0x34b, 0x34c, 0x34d, 0x34e, 0x34f, 0x350, 0x351,
                0x352, 0x353, 0x354, 0x355, 0x356, 0x357, 0x358, 0x359, 0x35a,
                0x35b, 0x35c, 0x35d, 0x35e, 0x35f, 0x360, 0x361, 0x362, 0x363,
                0x364, 0x365, 0x366, 0x367, 0x368, 0x369, 0x36a, 0x36b, 0x36c,
                0x36d, 0x36e, 0x36f, 0x370,
              ],
              [
                0x371, 0x372, 0x373, 0x374, 0x375, 0x376, 0x377, 0x378, 0x379,
                0x37a, 0x37b, 0x37c, 0x37d, 0x37e, 0x37f, 0x380, 0x381, 0x382,
                0x383, 0x384, 0x385, 0x386, 0x387, 0x388, 0x389, 0x38a, 0x38b,
                0x38c, 0x38d, 0x38e, 0x38f, 0x390, 0x391, 0x392, 0x393, 0x394,
                0x395, 0x396, 0x397, 0x398,
              ],
              [
                0x399, 0x39a, 0x39b, 0x39c, 0x39d, 0x39e, 0x39f, 0x3a0, 0x3a1,
                0x3a2, 0x3a3, 0x3a4, 0x3a5, 0x3a6, 0x3a7, 0x3a8, 0x3a9, 0x3aa,
                0x3ab, 0x3ac, 0x3ad, 0x3ae, 0x3af, 0x3b0, 0x3b1, 0x3b2, 0x3b3,
                0x3b4, 0x3b5, 0x3b6, 0x3b7, 0x3b8, 0x3b9, 0x3ba, 0x3bb, 0x3bc,
                0x3bd, 0x3be, 0x3bf, 0x3c0,
              ],
              [
                0x3c1, 0x3c2, 0x3c3, 0x3c4, 0x3c5, 0x3c6, 0x3c7, 0x3c8, 0x3c9,
                0x3ca, 0x3cb, 0x3cc, 0x3cd, 0x3ce, 0x3cf, 0x3d0, 0x3d1, 0x3d2,
                0x3d3, 0x3d4, 0x3d5, 0x3d6, 0x3d7, 0x3d8, 0x3d9, 0x3da, 0x3db,
                0x3dc, 0x3dd, 0x3de, 0x3df, 0x3e0, 0x3e1, 0x3e2, 0x3e3, 0x3e4,
                0x3e5, 0x3e6, 0x3e7, 0x3e8,
              ],
              [
                0x3e9, 0x3ea, 0x3eb, 0x3ec, 0x3ed, 0x3ee, 0x3ef, 0x3f0, 0x3f1,
                0x3f2, 0x3f3, 0x3f4, 0x3f5, 0x3f6, 0x3f7, 0x3f8, 0x3f9, 0x3fa,
                0x3fb, 0x3fc, 0x3fd, 0x3fe, 0x3ff, 0x400, 0x401, 0x402, 0x403,
                0x404, 0x405, 0x406, 0x407, 0x408, 0x409, 0x40a, 0x40b, 0x40c,
                0x40d, 0x40e, 0x40f, 0x410,
              ],
              [
                0x411, 0x412, 0x413, 0x414, 0x415, 0x416, 0x417, 0x418, 0x419,
                0x41a, 0x41b, 0x41c, 0x41d, 0x41e, 0x41f, 0x420, 0x421, 0x422,
                0x423, 0x424, 0x425, 0x426, 0x427, 0x428, 0x429, 0x42a, 0x42b,
                0x42c, 0x42d, 0x42e, 0x42f, 0x430, 0x431, 0x432, 0x433, 0x434,
                0x435, 0x436, 0x437, 0x438,
              ],
              [
                0x439, 0x43a, 0x43b, 0x43c, 0x43d, 0x43e, 0x43f, 0x440, 0x441,
                0x442, 0x443, 0x444, 0x445, 0x446, 0x447, 0x448, 0x449, 0x44a,
                0x44b, 0x44c, 0x44d, 0x44e, 0x44f, 0x450, 0x451, 0x452, 0x453,
                0x454, 0x455, 0x456, 0x457, 0x458, 0x459, 0x45a, 0x45b, 0x45c,
                0x45d, 0x45e, 0x45f, 0x460,
              ],
              [
                0x461, 0x462, 0x463, 0x464, 0x465, 0x466, 0x467, 0x468, 0x469,
                0x46a, 0x46b, 0x46c, 0x46d, 0x46e, 0x46f, 0x470, 0x471, 0x472,
                0x473, 0x474, 0x475, 0x476, 0x477, 0x478, 0x479, 0x47a, 0x47b,
                0x47c, 0x47d, 0x47e, 0x47f, 0x480, 0x481, 0x482, 0x483, 0x484,
                0x485, 0x486, 0x487, 0x488,
              ],
              [
                0x489, 0x48a, 0x48b, 0x48c, 0x48d, 0x48e, 0x48f, 0x490, 0x491,
                0x492, 0x493, 0x494, 0x495, 0x496, 0x497, 0x498, 0x499, 0x49a,
                0x49b, 0x49c, 0x49d, 0x49e, 0x49f, 0x4a0, 0x4a1, 0x4a2, 0x4a3,
                0x4a4, 0x4a5, 0x4a6, 0x4a7, 0x4a8, 0x4a9, 0x4aa, 0x4ab, 0x4ac,
                0x4ad, 0x4ae, 0x4af, 0x4b0,
              ],
            ],
          },
        ],
      }),
        (LevelTestDesktopResources = [
          new ig["Image"]("media/graphics/backgrounds/desktop/background.jpg"),
        ]);
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.levels.test-mobile")
    ["requires"](
      "impact.image",
      "game.entities.branding-logo-placeholder",
      "game.entities.buttons.button-more-games",
      "game.entities.pointer"
    )
    ["defines"](function () {
      (LevelTestMobile = {
        entities: [
          {
            type: "EntityBrandingLogoPlaceholder",
            x: 0xd8,
            y: 0x224,
            settings: { div_layer_name: "layer_mainmenu", centralize: "true" },
          },
          {
            type: "EntityButtonMoreGames",
            x: 0xcc,
            y: 0x174,
            settings: { div_layer_name: "layer_moregames_mainmenu" },
          },
          { type: "EntityPointer", x: 0x1bc, y: 0xc0 },
        ],
        layer: [
          {
            name: "background",
            width: 0x1e,
            height: 0x28,
            linkWithCollision: !0x1,
            visible: 0x1,
            tilesetName: "media/graphics/backgrounds/mobile/background.jpg",
            repeat: !0x1,
            preRender: !0x0,
            distance: "1",
            tilesize: 0x10,
            foreground: !0x1,
            data: [
              [
                0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd,
                0xe, 0xf, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18,
                0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x1e,
              ],
              [
                0x1f, 0x20, 0x21, 0x22, 0x23, 0x24, 0x25, 0x26, 0x27, 0x28,
                0x29, 0x2a, 0x2b, 0x2c, 0x2d, 0x2e, 0x2f, 0x30, 0x31, 0x32,
                0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3a, 0x3b, 0x3c,
              ],
              [
                0x3d, 0x3e, 0x3f, 0x40, 0x41, 0x42, 0x43, 0x44, 0x45, 0x46,
                0x47, 0x48, 0x49, 0x4a, 0x4b, 0x4c, 0x4d, 0x4e, 0x4f, 0x50,
                0x51, 0x52, 0x53, 0x54, 0x55, 0x56, 0x57, 0x58, 0x59, 0x5a,
              ],
              [
                0x5b, 0x5c, 0x5d, 0x5e, 0x5f, 0x60, 0x61, 0x62, 0x63, 0x64,
                0x65, 0x66, 0x67, 0x68, 0x69, 0x6a, 0x6b, 0x6c, 0x6d, 0x6e,
                0x6f, 0x70, 0x71, 0x72, 0x73, 0x74, 0x75, 0x76, 0x77, 0x78,
              ],
              [
                0x79, 0x7a, 0x7b, 0x7c, 0x7d, 0x7e, 0x7f, 0x80, 0x81, 0x82,
                0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x8a, 0x8b, 0x8c,
                0x8d, 0x8e, 0x8f, 0x90, 0x91, 0x92, 0x93, 0x94, 0x95, 0x96,
              ],
              [
                0x97, 0x98, 0x99, 0x9a, 0x9b, 0x9c, 0x9d, 0x9e, 0x9f, 0xa0,
                0xa1, 0xa2, 0xa3, 0xa4, 0xa5, 0xa6, 0xa7, 0xa8, 0xa9, 0xaa,
                0xab, 0xac, 0xad, 0xae, 0xaf, 0xb0, 0xb1, 0xb2, 0xb3, 0xb4,
              ],
              [
                0xb5, 0xb6, 0xb7, 0xb8, 0xb9, 0xba, 0xbb, 0xbc, 0xbd, 0xbe,
                0xbf, 0xc0, 0xc1, 0xc2, 0xc3, 0xc4, 0xc5, 0xc6, 0xc7, 0xc8,
                0xc9, 0xca, 0xcb, 0xcc, 0xcd, 0xce, 0xcf, 0xd0, 0xd1, 0xd2,
              ],
              [
                0xd3, 0xd4, 0xd5, 0xd6, 0xd7, 0xd8, 0xd9, 0xda, 0xdb, 0xdc,
                0xdd, 0xde, 0xdf, 0xe0, 0xe1, 0xe2, 0xe3, 0xe4, 0xe5, 0xe6,
                0xe7, 0xe8, 0xe9, 0xea, 0xeb, 0xec, 0xed, 0xee, 0xef, 0xf0,
              ],
              [
                0xf1, 0xf2, 0xf3, 0xf4, 0xf5, 0xf6, 0xf7, 0xf8, 0xf9, 0xfa,
                0xfb, 0xfc, 0xfd, 0xfe, 0xff, 0x100, 0x101, 0x102, 0x103, 0x104,
                0x105, 0x106, 0x107, 0x108, 0x109, 0x10a, 0x10b, 0x10c, 0x10d,
                0x10e,
              ],
              [
                0x10f, 0x110, 0x111, 0x112, 0x113, 0x114, 0x115, 0x116, 0x117,
                0x118, 0x119, 0x11a, 0x11b, 0x11c, 0x11d, 0x11e, 0x11f, 0x120,
                0x121, 0x122, 0x123, 0x124, 0x125, 0x126, 0x127, 0x128, 0x129,
                0x12a, 0x12b, 0x12c,
              ],
              [
                0x12d, 0x12e, 0x12f, 0x130, 0x131, 0x132, 0x133, 0x134, 0x135,
                0x136, 0x137, 0x138, 0x139, 0x13a, 0x13b, 0x13c, 0x13d, 0x13e,
                0x13f, 0x140, 0x141, 0x142, 0x143, 0x144, 0x145, 0x146, 0x147,
                0x148, 0x149, 0x14a,
              ],
              [
                0x14b, 0x14c, 0x14d, 0x14e, 0x14f, 0x150, 0x151, 0x152, 0x153,
                0x154, 0x155, 0x156, 0x157, 0x158, 0x159, 0x15a, 0x15b, 0x15c,
                0x15d, 0x15e, 0x15f, 0x160, 0x161, 0x162, 0x163, 0x164, 0x165,
                0x166, 0x167, 0x168,
              ],
              [
                0x169, 0x16a, 0x16b, 0x16c, 0x16d, 0x16e, 0x16f, 0x170, 0x171,
                0x172, 0x173, 0x174, 0x175, 0x176, 0x177, 0x178, 0x179, 0x17a,
                0x17b, 0x17c, 0x17d, 0x17e, 0x17f, 0x180, 0x181, 0x182, 0x183,
                0x184, 0x185, 0x186,
              ],
              [
                0x187, 0x188, 0x189, 0x18a, 0x18b, 0x18c, 0x18d, 0x18e, 0x18f,
                0x190, 0x191, 0x192, 0x193, 0x194, 0x195, 0x196, 0x197, 0x198,
                0x199, 0x19a, 0x19b, 0x19c, 0x19d, 0x19e, 0x19f, 0x1a0, 0x1a1,
                0x1a2, 0x1a3, 0x1a4,
              ],
              [
                0x1a5, 0x1a6, 0x1a7, 0x1a8, 0x1a9, 0x1aa, 0x1ab, 0x1ac, 0x1ad,
                0x1ae, 0x1af, 0x1b0, 0x1b1, 0x1b2, 0x1b3, 0x1b4, 0x1b5, 0x1b6,
                0x1b7, 0x1b8, 0x1b9, 0x1ba, 0x1bb, 0x1bc, 0x1bd, 0x1be, 0x1bf,
                0x1c0, 0x1c1, 0x1c2,
              ],
              [
                0x1c3, 0x1c4, 0x1c5, 0x1c6, 0x1c7, 0x1c8, 0x1c9, 0x1ca, 0x1cb,
                0x1cc, 0x1cd, 0x1ce, 0x1cf, 0x1d0, 0x1d1, 0x1d2, 0x1d3, 0x1d4,
                0x1d5, 0x1d6, 0x1d7, 0x1d8, 0x1d9, 0x1da, 0x1db, 0x1dc, 0x1dd,
                0x1de, 0x1df, 0x1e0,
              ],
              [
                0x1e1, 0x1e2, 0x1e3, 0x1e4, 0x1e5, 0x1e6, 0x1e7, 0x1e8, 0x1e9,
                0x1ea, 0x1eb, 0x1ec, 0x1ed, 0x1ee, 0x1ef, 0x1f0, 0x1f1, 0x1f2,
                0x1f3, 0x1f4, 0x1f5, 0x1f6, 0x1f7, 0x1f8, 0x1f9, 0x1fa, 0x1fb,
                0x1fc, 0x1fd, 0x1fe,
              ],
              [
                0x1ff, 0x200, 0x201, 0x202, 0x203, 0x204, 0x205, 0x206, 0x207,
                0x208, 0x209, 0x20a, 0x20b, 0x20c, 0x20d, 0x20e, 0x20f, 0x210,
                0x211, 0x212, 0x213, 0x214, 0x215, 0x216, 0x217, 0x218, 0x219,
                0x21a, 0x21b, 0x21c,
              ],
              [
                0x21d, 0x21e, 0x21f, 0x220, 0x221, 0x222, 0x223, 0x224, 0x225,
                0x226, 0x227, 0x228, 0x229, 0x22a, 0x22b, 0x22c, 0x22d, 0x22e,
                0x22f, 0x230, 0x231, 0x232, 0x233, 0x234, 0x235, 0x236, 0x237,
                0x238, 0x239, 0x23a,
              ],
              [
                0x23b, 0x23c, 0x23d, 0x23e, 0x23f, 0x240, 0x241, 0x242, 0x243,
                0x244, 0x245, 0x246, 0x247, 0x248, 0x249, 0x24a, 0x24b, 0x24c,
                0x24d, 0x24e, 0x24f, 0x250, 0x251, 0x252, 0x253, 0x254, 0x255,
                0x256, 0x257, 0x258,
              ],
              [
                0x259, 0x25a, 0x25b, 0x25c, 0x25d, 0x25e, 0x25f, 0x260, 0x261,
                0x262, 0x263, 0x264, 0x265, 0x266, 0x267, 0x268, 0x269, 0x26a,
                0x26b, 0x26c, 0x26d, 0x26e, 0x26f, 0x270, 0x271, 0x272, 0x273,
                0x274, 0x275, 0x276,
              ],
              [
                0x277, 0x278, 0x279, 0x27a, 0x27b, 0x27c, 0x27d, 0x27e, 0x27f,
                0x280, 0x281, 0x282, 0x283, 0x284, 0x285, 0x286, 0x287, 0x288,
                0x289, 0x28a, 0x28b, 0x28c, 0x28d, 0x28e, 0x28f, 0x290, 0x291,
                0x292, 0x293, 0x294,
              ],
              [
                0x295, 0x296, 0x297, 0x298, 0x299, 0x29a, 0x29b, 0x29c, 0x29d,
                0x29e, 0x29f, 0x2a0, 0x2a1, 0x2a2, 0x2a3, 0x2a4, 0x2a5, 0x2a6,
                0x2a7, 0x2a8, 0x2a9, 0x2aa, 0x2ab, 0x2ac, 0x2ad, 0x2ae, 0x2af,
                0x2b0, 0x2b1, 0x2b2,
              ],
              [
                0x2b3, 0x2b4, 0x2b5, 0x2b6, 0x2b7, 0x2b8, 0x2b9, 0x2ba, 0x2bb,
                0x2bc, 0x2bd, 0x2be, 0x2bf, 0x2c0, 0x2c1, 0x2c2, 0x2c3, 0x2c4,
                0x2c5, 0x2c6, 0x2c7, 0x2c8, 0x2c9, 0x2ca, 0x2cb, 0x2cc, 0x2cd,
                0x2ce, 0x2cf, 0x2d0,
              ],
              [
                0x2d1, 0x2d2, 0x2d3, 0x2d4, 0x2d5, 0x2d6, 0x2d7, 0x2d8, 0x2d9,
                0x2da, 0x2db, 0x2dc, 0x2dd, 0x2de, 0x2df, 0x2e0, 0x2e1, 0x2e2,
                0x2e3, 0x2e4, 0x2e5, 0x2e6, 0x2e7, 0x2e8, 0x2e9, 0x2ea, 0x2eb,
                0x2ec, 0x2ed, 0x2ee,
              ],
              [
                0x2ef, 0x2f0, 0x2f1, 0x2f2, 0x2f3, 0x2f4, 0x2f5, 0x2f6, 0x2f7,
                0x2f8, 0x2f9, 0x2fa, 0x2fb, 0x2fc, 0x2fd, 0x2fe, 0x2ff, 0x300,
                0x301, 0x302, 0x303, 0x304, 0x305, 0x306, 0x307, 0x308, 0x309,
                0x30a, 0x30b, 0x30c,
              ],
              [
                0x30d, 0x30e, 0x30f, 0x310, 0x311, 0x312, 0x313, 0x314, 0x315,
                0x316, 0x317, 0x318, 0x319, 0x31a, 0x31b, 0x31c, 0x31d, 0x31e,
                0x31f, 0x320, 0x321, 0x322, 0x323, 0x324, 0x325, 0x326, 0x327,
                0x328, 0x329, 0x32a,
              ],
              [
                0x32b, 0x32c, 0x32d, 0x32e, 0x32f, 0x330, 0x331, 0x332, 0x333,
                0x334, 0x335, 0x336, 0x337, 0x338, 0x339, 0x33a, 0x33b, 0x33c,
                0x33d, 0x33e, 0x33f, 0x340, 0x341, 0x342, 0x343, 0x344, 0x345,
                0x346, 0x347, 0x348,
              ],
              [
                0x349, 0x34a, 0x34b, 0x34c, 0x34d, 0x34e, 0x34f, 0x350, 0x351,
                0x352, 0x353, 0x354, 0x355, 0x356, 0x357, 0x358, 0x359, 0x35a,
                0x35b, 0x35c, 0x35d, 0x35e, 0x35f, 0x360, 0x361, 0x362, 0x363,
                0x364, 0x365, 0x366,
              ],
              [
                0x367, 0x368, 0x369, 0x36a, 0x36b, 0x36c, 0x36d, 0x36e, 0x36f,
                0x370, 0x371, 0x372, 0x373, 0x374, 0x375, 0x376, 0x377, 0x378,
                0x379, 0x37a, 0x37b, 0x37c, 0x37d, 0x37e, 0x37f, 0x380, 0x381,
                0x382, 0x383, 0x384,
              ],
              [
                0x385, 0x386, 0x387, 0x388, 0x389, 0x38a, 0x38b, 0x38c, 0x38d,
                0x38e, 0x38f, 0x390, 0x391, 0x392, 0x393, 0x394, 0x395, 0x396,
                0x397, 0x398, 0x399, 0x39a, 0x39b, 0x39c, 0x39d, 0x39e, 0x39f,
                0x3a0, 0x3a1, 0x3a2,
              ],
              [
                0x3a3, 0x3a4, 0x3a5, 0x3a6, 0x3a7, 0x3a8, 0x3a9, 0x3aa, 0x3ab,
                0x3ac, 0x3ad, 0x3ae, 0x3af, 0x3b0, 0x3b1, 0x3b2, 0x3b3, 0x3b4,
                0x3b5, 0x3b6, 0x3b7, 0x3b8, 0x3b9, 0x3ba, 0x3bb, 0x3bc, 0x3bd,
                0x3be, 0x3bf, 0x3c0,
              ],
              [
                0x3c1, 0x3c2, 0x3c3, 0x3c4, 0x3c5, 0x3c6, 0x3c7, 0x3c8, 0x3c9,
                0x3ca, 0x3cb, 0x3cc, 0x3cd, 0x3ce, 0x3cf, 0x3d0, 0x3d1, 0x3d2,
                0x3d3, 0x3d4, 0x3d5, 0x3d6, 0x3d7, 0x3d8, 0x3d9, 0x3da, 0x3db,
                0x3dc, 0x3dd, 0x3de,
              ],
              [
                0x3df, 0x3e0, 0x3e1, 0x3e2, 0x3e3, 0x3e4, 0x3e5, 0x3e6, 0x3e7,
                0x3e8, 0x3e9, 0x3ea, 0x3eb, 0x3ec, 0x3ed, 0x3ee, 0x3ef, 0x3f0,
                0x3f1, 0x3f2, 0x3f3, 0x3f4, 0x3f5, 0x3f6, 0x3f7, 0x3f8, 0x3f9,
                0x3fa, 0x3fb, 0x3fc,
              ],
              [
                0x3fd, 0x3fe, 0x3ff, 0x400, 0x401, 0x402, 0x403, 0x404, 0x405,
                0x406, 0x407, 0x408, 0x409, 0x40a, 0x40b, 0x40c, 0x40d, 0x40e,
                0x40f, 0x410, 0x411, 0x412, 0x413, 0x414, 0x415, 0x416, 0x417,
                0x418, 0x419, 0x41a,
              ],
              [
                0x41b, 0x41c, 0x41d, 0x41e, 0x41f, 0x420, 0x421, 0x422, 0x423,
                0x424, 0x425, 0x426, 0x427, 0x428, 0x429, 0x42a, 0x42b, 0x42c,
                0x42d, 0x42e, 0x42f, 0x430, 0x431, 0x432, 0x433, 0x434, 0x435,
                0x436, 0x437, 0x438,
              ],
              [
                0x439, 0x43a, 0x43b, 0x43c, 0x43d, 0x43e, 0x43f, 0x440, 0x441,
                0x442, 0x443, 0x444, 0x445, 0x446, 0x447, 0x448, 0x449, 0x44a,
                0x44b, 0x44c, 0x44d, 0x44e, 0x44f, 0x450, 0x451, 0x452, 0x453,
                0x454, 0x455, 0x456,
              ],
              [
                0x457, 0x458, 0x459, 0x45a, 0x45b, 0x45c, 0x45d, 0x45e, 0x45f,
                0x460, 0x461, 0x462, 0x463, 0x464, 0x465, 0x466, 0x467, 0x468,
                0x469, 0x46a, 0x46b, 0x46c, 0x46d, 0x46e, 0x46f, 0x470, 0x471,
                0x472, 0x473, 0x474,
              ],
              [
                0x475, 0x476, 0x477, 0x478, 0x479, 0x47a, 0x47b, 0x47c, 0x47d,
                0x47e, 0x47f, 0x480, 0x481, 0x482, 0x483, 0x484, 0x485, 0x486,
                0x487, 0x488, 0x489, 0x48a, 0x48b, 0x48c, 0x48d, 0x48e, 0x48f,
                0x490, 0x491, 0x492,
              ],
              [
                0x493, 0x494, 0x495, 0x496, 0x497, 0x498, 0x499, 0x49a, 0x49b,
                0x49c, 0x49d, 0x49e, 0x49f, 0x4a0, 0x4a1, 0x4a2, 0x4a3, 0x4a4,
                0x4a5, 0x4a6, 0x4a7, 0x4a8, 0x4a9, 0x4aa, 0x4ab, 0x4ac, 0x4ad,
                0x4ae, 0x4af, 0x4b0,
              ],
            ],
          },
        ],
      }),
        (LevelTestMobileResources = [
          new ig["Image"]("media/graphics/backgrounds/mobile/background.jpg"),
        ]);
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.entities.buttons.button-play")
    ["requires"]("game.entities.buttons.button")
    ["defines"](function () {
      EntityButtonPlay = EntityButton["extend"]({
        size: { x: 0xa4, y: 0x39 },
        animSheet: new ig["AnimationSheet"](
          "media/graphics/sprites/buttons/button-empty.png",
          0xa4,
          0x39
        ),
        init: function (_0x708bbd, _0x1ba7c3, _0x120408) {
          this["parent"](_0x708bbd, _0x1ba7c3, _0x120408),
            this["addAnim"]("idle", 0x1, [0x0]),
            this["addAnim"]("hover", 0x1, [0x1]);
        },
        update: function () {
          this["parent"]();
        },
        redirect: function () {
          this["parent"](), ig["soundHandler"]["sfxPlayer"]["play"]("click");
          try {
            ig["crazygames"]["gameplayStart"]();
          } catch (_0x7b0bd6) {}
          ig["game"]["startGame"](), this["kill"]();
        },
        draw: function () {
          this["parent"]();
          if (!ig["global"]["wm"]) {
            var _0x2b5631 = ig["system"]["context"];
            (_0x2b5631["textAlign"] = "center"),
              (_0x2b5631["textBaseline"] = "middle"),
              (_0x2b5631["fillStyle"] = "brown"),
              (_0x2b5631["font"] =
                this["currentAnim"] == this["anims"]["idle"]
                  ? "20px\x20bpreplay"
                  : "23px\x20bpreplay"),
              _0x2b5631["fillText"](
                _STRINGS["Game"]["Play"],
                this["pos"]["x"] + 0x52,
                this["pos"]["y"] + 0x18
              );
          }
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.levels.menu")
    ["requires"](
      "impact.image",
      "game.entities.buttons.button-more-games",
      "game.entities.buttons.button-sound",
      "game.entities.buttons.button-play"
    )
    ["defines"](function () {
      (LevelMenu = {
        entities: [
          { type: "EntityButtonMoreGames", x: 0x198, y: 0x1cc },
          { type: "EntityButtonSound", x: 0x350, y: 0x3c },
          { type: "EntityButtonPlay", x: 0x198, y: 0x188 },
        ],
        layer: [
          {
            name: "background",
            width: 0x20,
            height: 0x12,
            linkWithCollision: !0x1,
            visible: 0x1,
            tilesetName: "media/graphics/sprites/background/cover.png",
            repeat: !0x1,
            preRender: !0x1,
            distance: "1",
            tilesize: 0x1e,
            foreground: !0x1,
            data: [
              [
                0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd,
                0xe, 0xf, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18,
                0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x1e, 0x1f, 0x20,
              ],
              [
                0x21, 0x22, 0x23, 0x24, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2a,
                0x2b, 0x2c, 0x2d, 0x2e, 0x2f, 0x30, 0x31, 0x32, 0x33, 0x34,
                0x35, 0x36, 0x37, 0x38, 0x39, 0x3a, 0x3b, 0x3c, 0x3d, 0x3e,
                0x3f, 0x40,
              ],
              [
                0x41, 0x42, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49, 0x4a,
                0x4b, 0x4c, 0x4d, 0x4e, 0x4f, 0x50, 0x51, 0x52, 0x53, 0x54,
                0x55, 0x56, 0x57, 0x58, 0x59, 0x5a, 0x5b, 0x5c, 0x5d, 0x5e,
                0x5f, 0x60,
              ],
              [
                0x61, 0x62, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6a,
                0x6b, 0x6c, 0x6d, 0x6e, 0x6f, 0x70, 0x71, 0x72, 0x73, 0x74,
                0x75, 0x76, 0x77, 0x78, 0x79, 0x7a, 0x7b, 0x7c, 0x7d, 0x7e,
                0x7f, 0x80,
              ],
              [
                0x81, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x8a,
                0x8b, 0x8c, 0x8d, 0x8e, 0x8f, 0x90, 0x91, 0x92, 0x93, 0x94,
                0x95, 0x96, 0x97, 0x98, 0x99, 0x9a, 0x9b, 0x9c, 0x9d, 0x9e,
                0x9f, 0xa0,
              ],
              [
                0xa1, 0xa2, 0xa3, 0xa4, 0xa5, 0xa6, 0xa7, 0xa8, 0xa9, 0xaa,
                0xab, 0xac, 0xad, 0xae, 0xaf, 0xb0, 0xb1, 0xb2, 0xb3, 0xb4,
                0xb5, 0xb6, 0xb7, 0xb8, 0xb9, 0xba, 0xbb, 0xbc, 0xbd, 0xbe,
                0xbf, 0xc0,
              ],
              [
                0xc1, 0xc2, 0xc3, 0xc4, 0xc5, 0xc6, 0xc7, 0xc8, 0xc9, 0xca,
                0xcb, 0xcc, 0xcd, 0xce, 0xcf, 0xd0, 0xd1, 0xd2, 0xd3, 0xd4,
                0xd5, 0xd6, 0xd7, 0xd8, 0xd9, 0xda, 0xdb, 0xdc, 0xdd, 0xde,
                0xdf, 0xe0,
              ],
              [
                0xe1, 0xe2, 0xe3, 0xe4, 0xe5, 0xe6, 0xe7, 0xe8, 0xe9, 0xea,
                0xeb, 0xec, 0xed, 0xee, 0xef, 0xf0, 0xf1, 0xf2, 0xf3, 0xf4,
                0xf5, 0xf6, 0xf7, 0xf8, 0xf9, 0xfa, 0xfb, 0xfc, 0xfd, 0xfe,
                0xff, 0x100,
              ],
              [
                0x101, 0x102, 0x103, 0x104, 0x105, 0x106, 0x107, 0x108, 0x109,
                0x10a, 0x10b, 0x10c, 0x10d, 0x10e, 0x10f, 0x110, 0x111, 0x112,
                0x113, 0x114, 0x115, 0x116, 0x117, 0x118, 0x119, 0x11a, 0x11b,
                0x11c, 0x11d, 0x11e, 0x11f, 0x120,
              ],
              [
                0x121, 0x122, 0x123, 0x124, 0x125, 0x126, 0x127, 0x128, 0x129,
                0x12a, 0x12b, 0x12c, 0x12d, 0x12e, 0x12f, 0x130, 0x131, 0x132,
                0x133, 0x134, 0x135, 0x136, 0x137, 0x138, 0x139, 0x13a, 0x13b,
                0x13c, 0x13d, 0x13e, 0x13f, 0x140,
              ],
              [
                0x141, 0x142, 0x143, 0x144, 0x145, 0x146, 0x147, 0x148, 0x149,
                0x14a, 0x14b, 0x14c, 0x14d, 0x14e, 0x14f, 0x150, 0x151, 0x152,
                0x153, 0x154, 0x155, 0x156, 0x157, 0x158, 0x159, 0x15a, 0x15b,
                0x15c, 0x15d, 0x15e, 0x15f, 0x160,
              ],
              [
                0x161, 0x162, 0x163, 0x164, 0x165, 0x166, 0x167, 0x168, 0x169,
                0x16a, 0x16b, 0x16c, 0x16d, 0x16e, 0x16f, 0x170, 0x171, 0x172,
                0x173, 0x174, 0x175, 0x176, 0x177, 0x178, 0x179, 0x17a, 0x17b,
                0x17c, 0x17d, 0x17e, 0x17f, 0x180,
              ],
              [
                0x181, 0x182, 0x183, 0x184, 0x185, 0x186, 0x187, 0x188, 0x189,
                0x18a, 0x18b, 0x18c, 0x18d, 0x18e, 0x18f, 0x190, 0x191, 0x192,
                0x193, 0x194, 0x195, 0x196, 0x197, 0x198, 0x199, 0x19a, 0x19b,
                0x19c, 0x19d, 0x19e, 0x19f, 0x1a0,
              ],
              [
                0x1a1, 0x1a2, 0x1a3, 0x1a4, 0x1a5, 0x1a6, 0x1a7, 0x1a8, 0x1a9,
                0x1aa, 0x1ab, 0x1ac, 0x1ad, 0x1ae, 0x1af, 0x1b0, 0x1b1, 0x1b2,
                0x1b3, 0x1b4, 0x1b5, 0x1b6, 0x1b7, 0x1b8, 0x1b9, 0x1ba, 0x1bb,
                0x1bc, 0x1bd, 0x1be, 0x1bf, 0x1c0,
              ],
              [
                0x1c1, 0x1c2, 0x1c3, 0x1c4, 0x1c5, 0x1c6, 0x1c7, 0x1c8, 0x1c9,
                0x1ca, 0x1cb, 0x1cc, 0x1cd, 0x1ce, 0x1cf, 0x1d0, 0x1d1, 0x1d2,
                0x1d3, 0x1d4, 0x1d5, 0x1d6, 0x1d7, 0x1d8, 0x1d9, 0x1da, 0x1db,
                0x1dc, 0x1dd, 0x1de, 0x1df, 0x1e0,
              ],
              [
                0x1e1, 0x1e2, 0x1e3, 0x1e4, 0x1e5, 0x1e6, 0x1e7, 0x1e8, 0x1e9,
                0x1ea, 0x1eb, 0x1ec, 0x1ed, 0x1ee, 0x1ef, 0x1f0, 0x1f1, 0x1f2,
                0x1f3, 0x1f4, 0x1f5, 0x1f6, 0x1f7, 0x1f8, 0x1f9, 0x1fa, 0x1fb,
                0x1fc, 0x1fd, 0x1fe, 0x1ff, 0x200,
              ],
              [
                0x201, 0x202, 0x203, 0x204, 0x205, 0x206, 0x207, 0x208, 0x209,
                0x20a, 0x20b, 0x20c, 0x20d, 0x20e, 0x20f, 0x210, 0x211, 0x212,
                0x213, 0x214, 0x215, 0x216, 0x217, 0x218, 0x219, 0x21a, 0x21b,
                0x21c, 0x21d, 0x21e, 0x21f, 0x220,
              ],
              [
                0x221, 0x222, 0x223, 0x224, 0x225, 0x226, 0x227, 0x228, 0x229,
                0x22a, 0x22b, 0x22c, 0x22d, 0x22e, 0x22f, 0x230, 0x231, 0x232,
                0x233, 0x234, 0x235, 0x236, 0x237, 0x238, 0x239, 0x23a, 0x23b,
                0x23c, 0x23d, 0x23e, 0x23f, 0x240,
              ],
            ],
          },
        ],
      }),
        (LevelMenuResources = [
          new ig["Image"]("media/graphics/sprites/background/cover.png"),
        ]);
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.entities.buttons.button-head-left")
    ["requires"]("game.entities.buttons.button")
    ["defines"](function () {
      EntityButtonHeadLeft = EntityButton["extend"]({
        size: { x: 0x1d, y: 0x1d },
        animSheet: new ig["AnimationSheet"](
          "media/graphics/sprites/buttons/button-left.png",
          0x1d,
          0x1d
        ),
        init: function (_0x4831cc, _0x1f320b, _0x50c77d) {
          this["parent"](_0x4831cc, _0x1f320b, _0x50c77d),
            this["addAnim"]("idle", 0x1, [0x0]),
            this["addAnim"]("hover", 0x1, [0x1]);
        },
        update: function () {
          this["parent"](),
            this["killTimer"] &&
              0x0 < this["killTimer"]["delta"]() &&
              (this["currentAnim"]["alpha"] -= 0.01),
            0x0 >= this["currentAnim"]["alpha"] && this["kill"]();
        },
        redirect: function () {
          this["parent"](),
            ig["soundHandler"]["sfxPlayer"]["play"]("click"),
            this["killTimer"] &&
              (this["killTimer"]["reset"](),
              (this["currentAnim"]["alpha"] = 0x1)),
            ig["game"]["players"][0x0]["nextHead"]();
        },
      });
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.levels.game-level")
    ["requires"](
      "impact.image",
      "game.entities.player",
      "game.entities.score-manager",
      "game.entities.board-message",
      "game.entities.buttons.button-sound",
      "game.entities.buttons.button-pause",
      "game.entities.buttons.button-head-left"
    )
    ["defines"](function () {
      (LevelGameLevel = {
        entities: [
          { type: "EntityPlayer", x: 0x374, y: 0xe8, settings: { num: 0x4 } },
          { type: "EntityPlayer", x: 0x14, y: 0xe8, settings: { num: 0x2 } },
          { type: "EntityPlayer", x: 0x1a4, y: 0x1e0, settings: { num: 0x1 } },
          { type: "EntityPlayer", x: 0x1a4, y: 0x10, settings: { num: 0x3 } },
          { type: "EntityScoreManager", x: 0x38c, y: 0x10 },
          { type: "EntityBoardMessage", x: 0x13c, y: 0x158 },
          { type: "EntityButtonSound", x: 0x34c, y: 0x18 },
          { type: "EntityButtonPause", x: 0x384, y: 0x18 },
          { type: "EntityButtonHeadLeft", x: 0x178, y: 0x1f0 },
        ],
        layer: [
          {
            name: "background",
            width: 0x20,
            height: 0x12,
            linkWithCollision: !0x1,
            visible: 0x1,
            tilesetName: "media/graphics/sprites/background/background.png",
            repeat: !0x1,
            preRender: !0x1,
            distance: "1",
            tilesize: 0x1e,
            foreground: !0x1,
            data: [
              [
                0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd,
                0xe, 0xf, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18,
                0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x1e, 0x1f, 0x20,
              ],
              [
                0x21, 0x22, 0x23, 0x24, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2a,
                0x2b, 0x2c, 0x2d, 0x2e, 0x2f, 0x30, 0x31, 0x32, 0x33, 0x34,
                0x35, 0x36, 0x37, 0x38, 0x39, 0x3a, 0x3b, 0x3c, 0x3d, 0x3e,
                0x3f, 0x40,
              ],
              [
                0x41, 0x42, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49, 0x4a,
                0x4b, 0x4c, 0x4d, 0x4e, 0x4f, 0x50, 0x51, 0x52, 0x53, 0x54,
                0x55, 0x56, 0x57, 0x58, 0x59, 0x5a, 0x5b, 0x5c, 0x5d, 0x5e,
                0x5f, 0x60,
              ],
              [
                0x61, 0x62, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6a,
                0x6b, 0x6c, 0x6d, 0x6e, 0x6f, 0x70, 0x71, 0x72, 0x73, 0x74,
                0x75, 0x76, 0x77, 0x78, 0x79, 0x7a, 0x7b, 0x7c, 0x7d, 0x7e,
                0x7f, 0x80,
              ],
              [
                0x81, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x8a,
                0x8b, 0x8c, 0x8d, 0x8e, 0x8f, 0x90, 0x91, 0x92, 0x93, 0x94,
                0x95, 0x96, 0x97, 0x98, 0x99, 0x9a, 0x9b, 0x9c, 0x9d, 0x9e,
                0x9f, 0xa0,
              ],
              [
                0xa1, 0xa2, 0xa3, 0xa4, 0xa5, 0xa6, 0xa7, 0xa8, 0xa9, 0xaa,
                0xab, 0xac, 0xad, 0xae, 0xaf, 0xb0, 0xb1, 0xb2, 0xb3, 0xb4,
                0xb5, 0xb6, 0xb7, 0xb8, 0xb9, 0xba, 0xbb, 0xbc, 0xbd, 0xbe,
                0xbf, 0xc0,
              ],
              [
                0xc1, 0xc2, 0xc3, 0xc4, 0xc5, 0xc6, 0xc7, 0xc8, 0xc9, 0xca,
                0xcb, 0xcc, 0xcd, 0xce, 0xcf, 0xd0, 0xd1, 0xd2, 0xd3, 0xd4,
                0xd5, 0xd6, 0xd7, 0xd8, 0xd9, 0xda, 0xdb, 0xdc, 0xdd, 0xde,
                0xdf, 0xe0,
              ],
              [
                0xe1, 0xe2, 0xe3, 0xe4, 0xe5, 0xe6, 0xe7, 0xe8, 0xe9, 0xea,
                0xeb, 0xec, 0xed, 0xee, 0xef, 0xf0, 0xf1, 0xf2, 0xf3, 0xf4,
                0xf5, 0xf6, 0xf7, 0xf8, 0xf9, 0xfa, 0xfb, 0xfc, 0xfd, 0xfe,
                0xff, 0x100,
              ],
              [
                0x101, 0x102, 0x103, 0x104, 0x105, 0x106, 0x107, 0x108, 0x109,
                0x10a, 0x10b, 0x10c, 0x10d, 0x10e, 0x10f, 0x110, 0x111, 0x112,
                0x113, 0x114, 0x115, 0x116, 0x117, 0x118, 0x119, 0x11a, 0x11b,
                0x11c, 0x11d, 0x11e, 0x11f, 0x120,
              ],
              [
                0x121, 0x122, 0x123, 0x124, 0x125, 0x126, 0x127, 0x128, 0x129,
                0x12a, 0x12b, 0x12c, 0x12d, 0x12e, 0x12f, 0x130, 0x131, 0x132,
                0x133, 0x134, 0x135, 0x136, 0x137, 0x138, 0x139, 0x13a, 0x13b,
                0x13c, 0x13d, 0x13e, 0x13f, 0x140,
              ],
              [
                0x141, 0x142, 0x143, 0x144, 0x145, 0x146, 0x147, 0x148, 0x149,
                0x14a, 0x14b, 0x14c, 0x14d, 0x14e, 0x14f, 0x150, 0x151, 0x152,
                0x153, 0x154, 0x155, 0x156, 0x157, 0x158, 0x159, 0x15a, 0x15b,
                0x15c, 0x15d, 0x15e, 0x15f, 0x160,
              ],
              [
                0x161, 0x162, 0x163, 0x164, 0x165, 0x166, 0x167, 0x168, 0x169,
                0x16a, 0x16b, 0x16c, 0x16d, 0x16e, 0x16f, 0x170, 0x171, 0x172,
                0x173, 0x174, 0x175, 0x176, 0x177, 0x178, 0x179, 0x17a, 0x17b,
                0x17c, 0x17d, 0x17e, 0x17f, 0x180,
              ],
              [
                0x181, 0x182, 0x183, 0x184, 0x185, 0x186, 0x187, 0x188, 0x189,
                0x18a, 0x18b, 0x18c, 0x18d, 0x18e, 0x18f, 0x190, 0x191, 0x192,
                0x193, 0x194, 0x195, 0x196, 0x197, 0x198, 0x199, 0x19a, 0x19b,
                0x19c, 0x19d, 0x19e, 0x19f, 0x1a0,
              ],
              [
                0x1a1, 0x1a2, 0x1a3, 0x1a4, 0x1a5, 0x1a6, 0x1a7, 0x1a8, 0x1a9,
                0x1aa, 0x1ab, 0x1ac, 0x1ad, 0x1ae, 0x1af, 0x1b0, 0x1b1, 0x1b2,
                0x1b3, 0x1b4, 0x1b5, 0x1b6, 0x1b7, 0x1b8, 0x1b9, 0x1ba, 0x1bb,
                0x1bc, 0x1bd, 0x1be, 0x1bf, 0x1c0,
              ],
              [
                0x1c1, 0x1c2, 0x1c3, 0x1c4, 0x1c5, 0x1c6, 0x1c7, 0x1c8, 0x1c9,
                0x1ca, 0x1cb, 0x1cc, 0x1cd, 0x1ce, 0x1cf, 0x1d0, 0x1d1, 0x1d2,
                0x1d3, 0x1d4, 0x1d5, 0x1d6, 0x1d7, 0x1d8, 0x1d9, 0x1da, 0x1db,
                0x1dc, 0x1dd, 0x1de, 0x1df, 0x1e0,
              ],
              [
                0x1e1, 0x1e2, 0x1e3, 0x1e4, 0x1e5, 0x1e6, 0x1e7, 0x1e8, 0x1e9,
                0x1ea, 0x1eb, 0x1ec, 0x1ed, 0x1ee, 0x1ef, 0x1f0, 0x1f1, 0x1f2,
                0x1f3, 0x1f4, 0x1f5, 0x1f6, 0x1f7, 0x1f8, 0x1f9, 0x1fa, 0x1fb,
                0x1fc, 0x1fd, 0x1fe, 0x1ff, 0x200,
              ],
              [
                0x201, 0x202, 0x203, 0x204, 0x205, 0x206, 0x207, 0x208, 0x209,
                0x20a, 0x20b, 0x20c, 0x20d, 0x20e, 0x20f, 0x210, 0x211, 0x212,
                0x213, 0x214, 0x215, 0x216, 0x217, 0x218, 0x219, 0x21a, 0x21b,
                0x21c, 0x21d, 0x21e, 0x21f, 0x220,
              ],
              [
                0x221, 0x222, 0x223, 0x224, 0x225, 0x226, 0x227, 0x228, 0x229,
                0x22a, 0x22b, 0x22c, 0x22d, 0x22e, 0x22f, 0x230, 0x231, 0x232,
                0x233, 0x234, 0x235, 0x236, 0x237, 0x238, 0x239, 0x23a, 0x23b,
                0x23c, 0x23d, 0x23e, 0x23f, 0x240,
              ],
            ],
          },
        ],
      }),
        (LevelGameLevelResources = [
          new ig["Image"]("media/graphics/sprites/background/background.png"),
        ]);
    }),
  (ig["baked"] = !0x0),
  ig["module"]("game.main")
    ["requires"](
      "impact.game",
      "plugins.patches.webkit-image-smoothing-patch",
      "plugins.patches.windowfocus-onMouseDown-patch",
      "plugins.handlers.dom-handler",
      "plugins.handlers.size-handler",
      "plugins.handlers.api-handler",
      "plugins.handlers.visibility-handler",
      "plugins.audio.sound-handler",
      "plugins.io.io-manager",
      "plugins.splash-loader",
      "plugins.tween",
      "plugins.url-parameters",
      "plugins.director",
      "plugins.impact-storage",
      "plugins.fake-storage",
      "plugins.crazygames",
      "plugins.branding.splash",
      "game.entities.branding-logo-placeholder",
      "game.entities.buttons.button-more-games",
      "game.entities.opening-shield",
      "game.entities.opening-kitty",
      "game.entities.pointer",
      "game.entities.pointer-selector",
      "game.entities.select",
      "game.entities.card",
      "game.entities.spade",
      "game.entities.heart",
      "game.entities.club",
      "game.entities.diamond",
      "game.entities.buttons.button",
      "game.entities.buttons.button-bid",
      "game.entities.buttons.button-bid-number",
      "game.entities.buttons.button-blind-nil",
      "game.entities.buttons.button-play-next",
      "game.entities.buttons.button-reset-score",
      "game.entities.buttons.button-home",
      "game.entities.buttons.button-pause",
      "game.entities.buttons.button-resume",
      "game.entities.buttons.button-rules",
      "game.entities.buttons.button-confirm",
      "game.entities.buttons.button-arrow",
      "game.entities.player",
      "game.entities.board-score",
      "game.entities.board-rules",
      "game.entities.score-manager",
      "game.entities.board-current-score",
      "game.entities.board-message",
      "game.entities.black-layer",
      "game.entities.spade-break",
      "game.entities.card-black",
      "game.levels.opening",
      "game.levels.test-desktop",
      "game.levels.test-mobile",
      "game.levels.menu",
      "game.levels.game-level"
    )
    ["defines"](function () {
      this["FRAMEBREAKER"],
        (MyGame = ig["Game"]["extend"]({
          io: null,
          paused: ![],
          deck: [0x0],
          leadSuit: null,
          leadingRank: 0x0,
          breakedHeart: ![],
          playedCards: [],
          playingCards: [],
          trumpedSuit: [],
          currentTurn: 0x0,
          players: [],
          gameState: "none",
          currentLeader: 0x0,
          leadingPlayer: 0x0,
          mutetest: ![],
          win: 0x0,
          p1Head: 0x0,
          maleNames: ["Terry", "Alan", "John", "Frank"],
          femaleNames: ["Alice", "Lisa", "Emily", "Carol"],
          names: [
            "Alan",
            "Frank",
            "John",
            "Terry",
            "Alice",
            "Lisa",
            "Emily",
            "Carol",
          ],
          p2Name: null,
          p3Name: null,
          p4Name: null,
          headUsed: [],
          playerTurn: ![],
          botDelay: 0.65,
          winDelay: 1.1,
          currentRound: 0x0,
          roundNumber: 0x0,
          passTarget: [
            [0x1, 0x2, 0x3, 0x0],
            [0x3, 0x0, 0x1, 0x2],
            [0x2, 0x3, 0x0, 0x1],
          ],
          pausing: ![],
          storage: new ig["Storage"](),
          init: function () {
            this["setupMarketJsGameCenter"](),
              (this["io"] = new IoManager()),
              (this["setupUrlParams"] = new ig["UrlParameters"]()),
              this["removeLoadingWheel"](),
              this["finalize"](),
              this["setupLocalStorage"](),
              ig["input"]["bind"](ig["KEY"]["MOUSE1"], "click");
          },
          setupLocalStorage: function () {
            try {
              localStorage["setItem"]("test", "test"),
                localStorage["removeItem"]("test"),
                (this["storage"] = new ig["Storage"]());
            } catch (_0x256c1b) {
              console["log"]("using\x20fake\x20storage"),
                (this["storage"] = new ig["FakeStorage"]());
            }
          },
          setupMarketJsGameCenter: function () {
            if (_SETTINGS) {
              if (_SETTINGS["MarketJSGameCenter"]) {
                var _0x639fe = ig["domHandler"]["getElementByClass"](
                  "gamecenter-activator"
                );
                _SETTINGS["MarketJSGameCenter"]["Activator"]["Enabled"] &&
                  _SETTINGS["MarketJSGameCenter"]["Activator"]["Position"] &&
                  (console["log"](
                    "MarketJSGameCenter\x20activator\x20settings\x20present\x20...."
                  ),
                  ig["domHandler"]["css"](_0x639fe, {
                    position: "absolute",
                    left: _SETTINGS["MarketJSGameCenter"]["Activator"][
                      "Position"
                    ]["Left"],
                    top: _SETTINGS["MarketJSGameCenter"]["Activator"][
                      "Position"
                    ]["Top"],
                    "z-index": 0x3,
                  })),
                  ig["domHandler"]["show"](_0x639fe);
              } else
                console["log"](
                  "MarketJSGameCenter\x20settings\x20not\x20defined\x20in\x20game\x20settings"
                );
            }
          },
          finalize: function () {
            this["start"](), ig["sizeHandler"]["reorient"]();
          },
          removeLoadingWheel: function () {
            try {
              $("#ajaxbar")["css"]("background", "none");
            } catch (_0x1e0871) {
              console["log"](_0x1e0871);
            }
          },
          showDebugMenu: function () {
            console["log"]("showing\x20debug\x20menu\x20..."),
              (ig["Entity"]["_debugShowBoxes"] = !![]),
              $(".ig_debug")["show"]();
          },
          start: function () {
            this["resetPlayerStats"]();
            ig["ua"]["mobile"]
              ? (this["director"] = new ig["Director"](this, [
                  LevelOpening,
                  LevelMenu,
                  LevelGameLevel,
                ]))
              : (this["director"] = new ig["Director"](this, [
                  LevelOpening,
                  LevelMenu,
                  LevelGameLevel,
                ]));
            if (_SETTINGS["Branding"]["Splash"]["Enabled"])
              try {
                this["branding"] = new ig["BrandingSplash"]();
              } catch (_0x3f4e9d) {
                console["log"](_0x3f4e9d),
                  console["log"]("Loading\x20original\x20levels\x20..."),
                  this["director"]["loadLevel"](
                    this["director"]["currentLevel"]
                  );
              }
            else
              this["director"]["loadLevel"](this["director"]["currentLevel"]);
            this["spawnEntity"](EntityPointerSelector, 0x32, 0x32);
          },
          fpsCount: function () {
            !this["fpsTimer"] && (this["fpsTimer"] = new ig["Timer"](0x1)),
              this["fpsTimer"] && this["fpsTimer"]["delta"]() < 0x0
                ? this["fpsCounter"] != null
                  ? this["fpsCounter"]++
                  : (this["fpsCounter"] = 0x0)
                : ((ig["game"]["fps"] = this["fpsCounter"]),
                  (this["fpsCounter"] = 0x0),
                  this["fpsTimer"]["reset"]());
          },
          endGame: function () {
            console["log"]("End\x20game"), ig["apiHandler"]["run"]("MJSEnd");
          },
          resetPlayerStats: function () {
            ig["log"]("resetting\x20player\x20stats\x20..."),
              (this["playerStats"] = {
                id: this["playerStats"] ? this["playerStats"]["id"] : null,
              });
          },
          splashClick: function () {
            var _0x55b875 = ig["domHandler"]["getElementById"]("#play");
            ig["domHandler"]["hide"](_0x55b875),
              ig["apiHandler"]["run"]("MJSFooter"),
              ig["apiHandler"]["run"]("MJSHeader"),
              ig["game"]["start"]();
          },
          pauseGame: function () {
            ig["system"]["stopRunLoop"]["call"](ig["system"]),
              console["log"]("Game\x20Paused");
          },
          resumeGame: function () {
            ig["system"]["startRunLoop"]["call"](ig["system"]),
              console["log"]("Game\x20Resumed");
          },
          showOverlay: function (_0x3b271d) {
            for (i = 0x0; i < _0x3b271d["length"]; i++) {
              if ($("#" + _0x3b271d[i])) $("#" + _0x3b271d[i])["show"]();
              if (document["getElementById"](_0x3b271d[i]))
                document["getElementById"](_0x3b271d[i])["style"][
                  "visibility"
                ] = "visible";
            }
          },
          hideOverlay: function (_0x531064) {
            for (i = 0x0; i < _0x531064["length"]; i++) {
              if ($("#" + _0x531064[i])) $("#" + _0x531064[i])["hide"]();
              if (document["getElementById"](_0x531064[i]))
                document["getElementById"](_0x531064[i])["style"][
                  "visibility"
                ] = "hidden";
            }
          },
          currentBGMVolume: 0x1,
          addition: 0.1,
          startGame: function () {
            this["director"]["loadLevel"](0x2),
              (this["win"] = 0x0),
              this["spawnEntity"](EntityPointerSelector, 0x32, 0x32);
            var _0x241048 = this["getEntitiesByType"](EntityPlayer);
            for (
              var _0x574fb1 = 0x0;
              _0x574fb1 < _0x241048["length"];
              _0x574fb1++
            ) {
              this["players"][_0x241048[_0x574fb1]["num"] - 0x1] =
                _0x241048[_0x574fb1];
            }
            (this["msgBoard"] =
              this["getEntitiesByType"](EntityBoardMessage)[0x0]),
              this["refillDeck"](),
              this["spawnMyCards"](),
              this["spawnOthersCards"](),
              (this["current"] = 0x3e7),
              (this["currentTurn"] = 0x1),
              (this["currentLeader"] =
                Math["floor"](Math["random"]() * 0x4) + 0x1),
              this["roundNumber"]++,
              (this["passType"] = this["roundNumber"] % 0x4),
              this["passType"] !== 0x0
                ? (this["passTimer"] = new ig["Timer"](0x1))
                : (this["playStateTimer"] = new ig["Timer"](0x1));
          },
          newRound: function (_0x52217a) {
            this["getEntitiesByType"](EntityBoardScore)[0x0] &&
              this["getEntitiesByType"](EntityBoardScore)[0x0]["kill"]();
            var _0x3a69b7 = this["getEntitiesByType"](EntityScoreManager)[0x0],
              _0x523520,
              _0x40e784,
              _0x50afcb,
              _0x31fb8f;
            _0x52217a == 0x1
              ? ((_0x523520 = _0x3a69b7["totalScore"]["a"]),
                (_0x40e784 = _0x3a69b7["totalScore"]["b"]),
                (_0x50afcb = _0x3a69b7["totalScore"]["c"]),
                (_0x31fb8f = _0x3a69b7["totalScore"]["d"]))
              : ((this["roundNumber"] = 0x0),
                this["resetNames"](),
                (_0x523520 = 0x0),
                (_0x40e784 = 0x0),
                (_0x50afcb = 0x0),
                (_0x31fb8f = 0x0)),
              this["resetStatus"](),
              this["startGame"](),
              (_0x3a69b7 = this["getEntitiesByType"](EntityScoreManager)[0x0]),
              (_0x3a69b7["totalScore"]["a"] = _0x523520),
              (_0x3a69b7["totalScore"]["b"] = _0x40e784),
              (_0x3a69b7["totalScore"]["c"] = _0x50afcb),
              (_0x3a69b7["totalScore"]["d"] = _0x31fb8f);
          },
          resetNames: function () {
            (this["headUsed"] = []),
              (this["p2Name"] = null),
              (this["p3Name"] = null),
              (this["p4Name"] = null);
          },
          resetStatus: function () {
            (this["win"] = 0x0),
              (this["gameState"] = "none"),
              (this["breakedHeart"] = ![]),
              (this["nextPlayer"] = null),
              (this["current"] = null),
              (this["leadingPlayer"] = 0x0),
              (this["currentLeader"] = 0x0),
              (this["trumpedSuit"] = []),
              (this["playingCards"] = []),
              (this["playedCards"] = []),
              (this["leadingRank"] = 0x0),
              (this["currentRound"] = 0x0),
              (this["playerTurn"] = ![]),
              (this["waitTimer"] = undefined),
              (this["passTimer"] = undefined),
              (this["endTimer"] = undefined);
          },
          backToHome: function () {
            this["director"]["loadLevel"](0x1),
              (this["roundNumber"] = 0x0),
              this["resetNames"](),
              this["resetStatus"](),
              this["spawnEntity"](EntityPointerSelector, 0x32, 0x32);
          },
          pauseClick: function () {
            this["passTimer"] &&
              (this["passTimer"]["delta"] >= 0x0 &&
                this["passTimer"]["set"](0.02),
              this["passTimer"]["pause"]());
            this["waitTimer"] && this["waitTimer"]["pause"]();
            for (
              var _0x29b991 = 0x0;
              _0x29b991 < this["getEntitiesByType"](EntityCard)["length"];
              _0x29b991++
            ) {
              if (this["getEntitiesByType"](EntityCard)[_0x29b991]["played"])
                this["getEntitiesByType"](EntityCard)[_0x29b991][
                  "pauseTweens"
                ]();
              this["getEntitiesByType"](EntityCard)[_0x29b991][
                "displayTimer"
              ] &&
                this["getEntitiesByType"](EntityCard)[_0x29b991][
                  "displayTimer"
                ]["pause"]();
            }
            this["playStateTimer"] && this["playStateTimer"]["pause"](),
              (this["paused"] = !![]),
              this["spawnEntity"](EntityBlackLayer, 0x0, 0x0),
              this["spawnEntity"](EntityButtonResume, 0x190, 0xbe),
              this["spawnEntity"](EntityButtonResetScore, 0x190, 0xfe),
              this["spawnEntity"](EntityButtonRules, 0x190, 0x13e),
              this["spawnEntity"](EntityButtonHome, 0x190, 0x17e),
              this["spawnEntity"](EntityBoardRules, -0x3e7, -0x3e7),
              this["spawnEntity"](EntityButtonConfirm, -0x3e7, -0x3e7),
              (this["pausing"] = ![]);
          },
          resumeClick: function () {
            this["getEntitiesByType"](EntityBlackLayer)[0x0]["kill"](),
              this["getEntitiesByType"](EntityButtonResume)[0x0]["kill"](),
              this["getEntitiesByType"](EntityButtonResetScore)[0x0]["kill"](),
              this["getEntitiesByType"](EntityButtonRules)[0x0]["kill"](),
              this["getEntitiesByType"](EntityButtonHome)[0x0]["kill"]();
            this["getEntitiesByType"](EntityButtonConfirm)[0x0] &&
              this["getEntitiesByType"](EntityButtonConfirm)[0x0]["kill"]();
            this["getEntitiesByType"](EntityBoardRules)[0x0] &&
              this["getEntitiesByType"](EntityBoardRules)[0x0]["kill"]();
            for (
              var _0x2cfd20 = 0x0;
              _0x2cfd20 < this["getEntitiesByType"](EntityCard)["length"];
              _0x2cfd20++
            ) {
              if (this["getEntitiesByType"](EntityCard)[_0x2cfd20]["played"])
                this["getEntitiesByType"](EntityCard)[_0x2cfd20][
                  "resumeTweens"
                ]();
              this["getEntitiesByType"](EntityCard)[_0x2cfd20][
                "displayTimer"
              ] &&
                this["getEntitiesByType"](EntityCard)[_0x2cfd20][
                  "displayTimer"
                ]["unpause"]();
            }
            this["waitTimer"] && this["waitTimer"]["unpause"](),
              this["passTimer"] && this["passTimer"]["unpause"](),
              this["playStateTimer"] && this["playStateTimer"]["unpause"](),
              (this["paused"] = ![]);
          },
          rulesClick: function () {
            this["getEntitiesByType"](EntityButtonResume)[0x0]["movePos"](
              -0x3e7,
              -0x3e7
            ),
              this["getEntitiesByType"](EntityButtonResetScore)[0x0]["movePos"](
                -0x3e7,
                -0x3e7
              ),
              this["getEntitiesByType"](EntityButtonRules)[0x0]["movePos"](
                -0x3e7,
                -0x3e7
              ),
              this["getEntitiesByType"](EntityButtonHome)[0x0]["movePos"](
                -0x3e7,
                -0x3e7
              ),
              this["getEntitiesByType"](EntityBoardRules)[0x0]["movePos"](
                0x5f,
                0x46
              ),
              this["getEntitiesByType"](EntityButtonConfirm)[0x0]["movePos"](
                0x190,
                0x1a4
              );
          },
          closeRules: function () {
            this["getEntitiesByType"](EntityBoardRules)[0x0]["movePos"](
              -0x3e7,
              -0x3e7
            ),
              this["getEntitiesByType"](EntityButtonConfirm)[0x0]["movePos"](
                -0x3e7,
                -0x3e7
              ),
              this["getEntitiesByType"](EntityButtonResume)[0x0]["movePos"](
                0x190,
                0xbe
              ),
              this["getEntitiesByType"](EntityButtonResetScore)[0x0]["movePos"](
                0x190,
                0xfe
              ),
              this["getEntitiesByType"](EntityButtonRules)[0x0]["movePos"](
                0x190,
                0x13e
              ),
              this["getEntitiesByType"](EntityButtonHome)[0x0]["movePos"](
                0x190,
                0x17e
              );
          },
          passClick: function () {
            if (this["players"][0x0]["passCards"]["length"] < 0x3) {
              this["msgBoard"]["msg"] = _STRINGS["Game"]["InvalidPass"];
              return;
            }
            (this["gameState"] = "none"),
              this["getEntitiesByType"](EntityButtonArrow)[0x0]["kill"]();
            for (var _0x37b0ea = 0x0; _0x37b0ea < 0x3; _0x37b0ea++) {
              (this["players"][0x0]["passPosX"][_0x37b0ea] =
                this["players"][0x0]["passCards"][_0x37b0ea]["pos"]["x"]),
                (this["players"][0x0]["passPosY"][_0x37b0ea] =
                  this["players"][0x0]["passCards"][_0x37b0ea]["pos"]["y"]);
            }
            for (var _0x37b0ea = 0x0; _0x37b0ea < 0x4; _0x37b0ea++) {
              this["players"][_0x37b0ea]["pass"](
                this["passTarget"][this["passType"] - 0x1][_0x37b0ea]
              );
            }
            this["playStateTimer"] = new ig["Timer"](0x1);
          },
          arrangeBotsCard: function () {
            this["players"][0x1]["arrangeZIndex"](),
              this["players"][0x2]["arrangeZIndex"](),
              this["players"][0x3]["arrangeZIndex"]();
          },
          refillDeck: function () {
            for (var _0x16e711 = 0x0; _0x16e711 < 0x34; _0x16e711++) {
              this["deck"][_0x16e711] = _0x16e711 + 0x1;
            }
          },
          spawnSpecificCard: function (
            _0x1cd848,
            _0x33c035,
            _0x472ed6,
            _0x5bffee
          ) {
            if (!this["deck"] || ig["global"]["wm"]) return;
            var _0x391e0a = parseInt((_0x33c035 - 0x1) / 0xd),
              _0x1c63fb = _0x33c035 % 0xd;
            _0x1c63fb === 0x0 && (_0x1c63fb = 0xd);
            var _0x261ade;
            switch (_0x391e0a) {
              case 0x0: {
                _0x261ade = this["spawnEntity"](
                  EntityDiamond,
                  _0x472ed6,
                  _0x5bffee
                );
                break;
              }
              case 0x1: {
                _0x261ade = this["spawnEntity"](
                  EntityClub,
                  _0x472ed6,
                  _0x5bffee
                );
                break;
              }
              case 0x2: {
                _0x261ade = this["spawnEntity"](
                  EntityHeart,
                  _0x472ed6,
                  _0x5bffee
                );
                break;
              }
              case 0x3: {
                _0x261ade = this["spawnEntity"](
                  EntitySpade,
                  _0x472ed6,
                  _0x5bffee
                );
                break;
              }
            }
            return (
              (_0x261ade["suit"] = _0x391e0a),
              (_0x261ade["number"] = _0x1c63fb),
              (_0x261ade["rank"] =
                ((((_0x1c63fb - 0x2) % 0xd) + 0xd) % 0xd) + 0x2),
              (_0x261ade["id"] = _0x33c035),
              (_0x261ade["owner"] = _0x1cd848),
              _0x261ade
            );
          },
          spawnMyCards: function () {
            var _0x445639 = [];
            for (var _0x3e9ad6 = 0x0; _0x3e9ad6 < 0xd; _0x3e9ad6++) {
              var _0x44780d = this["deck"]["splice"](
                [Math["floor"](Math["random"]() * this["deck"]["length"])],
                0x1
              );
              (_0x44780d = _0x44780d[0x0]), _0x445639["push"](_0x44780d);
            }
            for (
              var _0x3e9ad6 = 0x0;
              _0x3e9ad6 < _0x445639["length"];
              _0x3e9ad6++
            ) {
              var _0x4fcba5 = parseInt((_0x445639[_0x3e9ad6] - 0x1) / 0xd);
              if (_0x4fcba5 == 0x1) _0x445639[_0x3e9ad6] -= 0x82;
              else _0x4fcba5 == 0x2 && (_0x445639[_0x3e9ad6] += 0x82);
              _0x445639[_0x3e9ad6] += 0x514;
            }
            _0x445639["sort"](function (_0x599722, _0x243460) {
              return (
                (_0x599722 % 0xd == 0x1 ? _0x599722 + 13.5 : _0x599722) -
                (_0x243460 % 0xd == 0x1 ? _0x243460 + 13.5 : _0x243460)
              );
            });
            for (
              var _0x3e9ad6 = 0x0;
              _0x3e9ad6 < _0x445639["length"];
              _0x3e9ad6++
            ) {
              if (_0x445639[_0x3e9ad6] < 0x0 + 0x514)
                _0x445639[_0x3e9ad6] += 0x82;
              else
                _0x445639[_0x3e9ad6] > 0x64 + 0x514 &&
                  (_0x445639[_0x3e9ad6] -= 0x82);
              _0x445639[_0x3e9ad6] -= 0x514;
            }
            for (
              var _0x3e9ad6 = 0x0;
              _0x3e9ad6 < _0x445639["length"];
              _0x3e9ad6++
            ) {
              var _0x5bcd44 = this["spawnSpecificCard"](
                0x1,
                _0x445639[_0x3e9ad6],
                0xf0 + _0x3e9ad6 * 0x23,
                0x258
              );
              (_0x5bcd44["sequence"] = _0x3e9ad6),
                (_0x5bcd44["zIndex"] = 0x320 + _0x5bcd44["sequence"]),
                _0x5bcd44["tweenIn"](_0x5bcd44["pos"]["x"], 0x181),
                (_0x5bcd44["oriPos"] = [_0x5bcd44["pos"]["x"], 0x181]),
                (_0x5bcd44["sePos"] = [_0x5bcd44["pos"]["x"], 0x181 - 0xa]),
                _0x5bcd44["displayCard"](),
                this["players"][0x0]["cards"]["push"](_0x5bcd44);
            }
            _0x445639 = this["players"][0x0]["cardIds"];
          },
          spawnOthersCards: function () {
            for (var _0x198330 = 0x0; _0x198330 < 0xd; _0x198330++) {
              var _0x1b13e2 = this["deck"]["splice"](
                [Math["floor"](Math["random"]() * this["deck"]["length"])],
                0x1
              );
              _0x1b13e2 = _0x1b13e2[0x0];
              var _0x4ef7b4 = this["spawnSpecificCard"](
                0x2,
                _0x1b13e2,
                -0x3c,
                0x64 + _0x198330 * 0x14
              );
              (_0x4ef7b4["sequence"] = _0x198330),
                (_0x4ef7b4["zIndex"] = 0x320 + _0x4ef7b4["sequence"]),
                (_0x4ef7b4["currentAnim"]["angle"] = Math["PI"] / 0x2),
                _0x4ef7b4["tweenIn"](0x64, _0x4ef7b4["pos"]["y"]),
                (_0x4ef7b4["oriPos"] = [0x64, _0x4ef7b4["pos"]["y"]]),
                (_0x4ef7b4["sePos"] = [0x64 + 0xa, _0x4ef7b4["pos"]["y"]]),
                this["players"][0x1]["cardIds"]["push"](_0x1b13e2),
                this["players"][0x1]["cards"]["push"](_0x4ef7b4);
            }
            for (var _0x198330 = 0x0; _0x198330 < 0xd; _0x198330++) {
              var _0x1b13e2 = this["deck"]["splice"](
                [Math["floor"](Math["random"]() * this["deck"]["length"])],
                0x1
              );
              _0x1b13e2 = _0x1b13e2[0x0];
              var _0x4ef7b4 = this["spawnSpecificCard"](
                0x3,
                _0x1b13e2,
                0x23f - _0x198330 * 0x14,
                -0xc8
              );
              (_0x4ef7b4["sequence"] = _0x198330),
                (_0x4ef7b4["currentAnim"]["angle"] = Math["PI"]),
                (_0x4ef7b4["zIndex"] = 0x320 + _0x4ef7b4["sequence"]),
                _0x4ef7b4["tweenIn"](_0x4ef7b4["pos"]["x"], 0x4b),
                (_0x4ef7b4["oriPos"] = [_0x4ef7b4["pos"]["x"], 0x4b]),
                (_0x4ef7b4["sePos"] = [_0x4ef7b4["pos"]["x"], 0x4b + 0xa]),
                this["players"][0x2]["cardIds"]["push"](_0x1b13e2),
                this["players"][0x2]["cards"]["push"](_0x4ef7b4);
            }
            for (var _0x198330 = 0x0; _0x198330 < 0xd; _0x198330++) {
              var _0x1b13e2 = this["deck"]["splice"](
                [Math["floor"](Math["random"]() * this["deck"]["length"])],
                0x1
              );
              _0x1b13e2 = _0x1b13e2[0x0];
              var _0x4ef7b4 = this["spawnSpecificCard"](
                0x4,
                _0x1b13e2,
                0x424,
                0x154 - _0x198330 * 0x14
              );
              (_0x4ef7b4["sequence"] = _0x198330),
                (_0x4ef7b4["currentAnim"]["angle"] = Math["PI"] / -0x2),
                (_0x4ef7b4["zIndex"] = 0x320 + _0x4ef7b4["sequence"]),
                _0x4ef7b4["tweenIn"](0x316, _0x4ef7b4["pos"]["y"]),
                (_0x4ef7b4["oriPos"] = [0x316, _0x4ef7b4["pos"]["y"]]),
                (_0x4ef7b4["sePos"] = [0x316 - 0xa, _0x4ef7b4["pos"]["y"]]),
                this["players"][0x3]["cardIds"]["push"](_0x1b13e2),
                this["players"][0x3]["cards"]["push"](_0x4ef7b4);
            }
          },
          displayPlayerCards: function (_0x21cac0) {
            var _0x1dc9c1 = this["getEntitiesByType"](EntityCard);
            for (
              var _0x4592e1 = 0x0;
              _0x4592e1 < _0x1dc9c1["length"];
              _0x4592e1++
            ) {
              if (_0x1dc9c1[_0x4592e1]["owner"] == _0x21cac0) {
                var _0x4391ff = _0x1dc9c1[_0x4592e1]["currentAnim"]["angle"];
                _0x1dc9c1[_0x4592e1]["displayCard"](),
                  (_0x1dc9c1[_0x4592e1]["currentAnim"]["angle"] = _0x4391ff);
              }
            }
          },
          calScore: function () {
            try {
              ig["crazygames"]["gameplayStop"]();
            } catch (_0x555150) {}
            try {
              ig["crazygames"]["showAd"]();
            } catch (_0x14dfb8) {}
            var _0x2b4f61 = this["players"][0x0],
              _0xd53b1e = this["players"][0x1],
              _0x325c79 = this["players"][0x2],
              _0x1d478b = this["players"][0x3],
              _0x45982e = this["getEntitiesByType"](EntityScoreManager)[0x0];
            if (
              Math["max"](
                this["players"][0x0]["scoreTaken"],
                this["players"][0x1]["scoreTaken"],
                this["players"][0x2]["scoreTaken"],
                this["players"][0x3]["scoreTaken"]
              ) == 0x1a
            )
              for (var _0x282768 = 0x0; _0x282768 < 0x4; _0x282768++) {
                this["players"][_0x282768]["scoreTaken"] == 0x1a
                  ? (this["players"][_0x282768]["scoreTaken"] = 0x0)
                  : (this["players"][_0x282768]["scoreTaken"] = 0x1a);
              }
            (_0x45982e["roundScore"]["a"] = this["players"][0x0]["scoreTaken"]),
              (_0x45982e["roundScore"]["b"] =
                this["players"][0x1]["scoreTaken"]),
              (_0x45982e["roundScore"]["c"] =
                this["players"][0x2]["scoreTaken"]),
              (_0x45982e["roundScore"]["d"] =
                this["players"][0x3]["scoreTaken"]),
              (_0x45982e["totalScore"]["a"] += _0x45982e["roundScore"]["a"]),
              (_0x45982e["totalScore"]["b"] += _0x45982e["roundScore"]["b"]),
              (_0x45982e["totalScore"]["c"] += _0x45982e["roundScore"]["c"]),
              (_0x45982e["totalScore"]["d"] += _0x45982e["roundScore"]["d"]),
              _0x45982e["arrangeRank"](),
              this["spawnEntity"](EntityBlackLayer, 0x0, 0x0),
              this["spawnEntity"](EntityBoardScore, 0x109, 0x64);
            if (
              _0x45982e["scores"][0x0] >= 0x64 &&
              _0x45982e["scores"][0x2] != _0x45982e["scores"][0x3]
            ) {
              if (_0x45982e["ranking"][0x3] === 0x0) {
                (this["win"] = 0x1),
                  ig["soundHandler"]["sfxPlayer"]["play"]("win"),
                  this["spawnEntity"](EntityButtonResetScore, 0x12c, 0x186),
                  this["spawnEntity"](EntityButtonHome, 0x1e7, 0x186);
                return;
              } else {
                (this["win"] = _0x45982e["ranking"][0x3] + 0x1),
                  ig["soundHandler"]["sfxPlayer"]["play"]("lose"),
                  this["spawnEntity"](EntityButtonResetScore, 0x12c, 0x186),
                  this["spawnEntity"](EntityButtonHome, 0x1e7, 0x186);
                return;
              }
            } else
              this["spawnEntity"](EntityButtonPlayNext, 0x12c, 0x186),
                this["spawnEntity"](EntityButtonResetScore, 0x1e7, 0x186),
                (this["paused"] = !![]);
          },
          greatestCard: function (_0x5c6c07) {
            var _0x58ee85 = [],
              _0x273854 = 0x0,
              _0x35bab7 = null;
            for (
              var _0x441791 = 0x0;
              _0x441791 < _0x5c6c07["length"];
              _0x441791++
            ) {
              _0x5c6c07[_0x441791]["suit"] == this["leadSuit"] &&
                _0x58ee85["push"](_0x5c6c07[_0x441791]);
            }
            for (
              var _0x441791 = 0x0;
              _0x441791 < _0x58ee85["length"];
              _0x441791++
            ) {
              _0x58ee85[_0x441791]["rank"] > _0x273854 &&
                ((_0x273854 = _0x58ee85[_0x441791]["rank"]),
                (_0x35bab7 = _0x58ee85[_0x441791]));
            }
            return _0x35bab7;
          },
          update: function () {
            if (this["paused"]) this["updateWhilePaused"]();
            else {
              this["parent"]();
              if (ig["ua"]["mobile"] && ig["soundHandler"]) {
              }
              !this["getEntitiesByType"](EntityPointerSelector)[0x0] &&
                this["spawnEntity"](EntityPointerSelector, 0x32, 0x32);
              if (
                this["passTimer"] &&
                this["passTimer"]["delta"]() > 0x0 &&
                !this["pausing"]
              ) {
                this["spawnEntity"](EntityButtonArrow, 0x19a, 0xdc),
                  (this["passTimer"] = undefined),
                  (this["gameState"] = "passing");
                for (var _0x47dad0 = 0x0; _0x47dad0 < 0x3; _0x47dad0++) {
                  this["players"][_0x47dad0 + 0x1]["choosePassCards"]();
                }
                this["msgBoard"]["passMsg"]();
              }
              if (
                this["playStateTimer"] &&
                this["playStateTimer"]["delta"]() > 0x0
              ) {
                this["players"][0x1]["arrangeZIndex"](),
                  this["players"][0x2]["arrangeZIndex"](),
                  this["players"][0x3]["arrangeZIndex"](),
                  (this["playStateTimer"] = undefined),
                  (this["gameState"] = "playing"),
                  (this["currentTurn"] = 0x1),
                  (this["currentRound"] = 0x1);
                var _0x10d8bd = this["getEntitiesByType"](EntityCard);
                for (
                  var _0x47dad0 = 0x0;
                  _0x47dad0 < _0x10d8bd["length"];
                  _0x47dad0++
                ) {
                  _0x10d8bd[_0x47dad0]["suit"] == 0x1 &&
                    _0x10d8bd[_0x47dad0]["rank"] == 0x2 &&
                    (this["currentLeader"] = _0x10d8bd[_0x47dad0]["owner"]);
                }
                for (var _0x47dad0 = 0x0; _0x47dad0 < 0x4; _0x47dad0++) {
                  this["players"][_0x47dad0]["passCards"] = [];
                }
                this["nextPlayer"] = !![];
              }
              if (this["waitTimer"] && this["waitTimer"]["delta"]() > 0x0) {
                var _0x2fc07c = this["greatestCard"](this["playingCards"]);
                (this["currentLeader"] = _0x2fc07c["owner"]),
                  (this["currentTurn"] = 0x1),
                  this["currentRound"]++,
                  (this["leadingRank"] = 0x0),
                  (this["waitTimer"] = undefined),
                  this["players"][_0x2fc07c["owner"] - 0x1]["winTrick"]();
              }
              this["endTimer"] &&
                this["endTimer"]["delta"]() > 0x0 &&
                (this["calScore"](),
                (this["gameState"] = ""),
                (this["endTimer"] = undefined));
              if (this["gameState"] == "passing") {
              }
              if (this["gameState"] == "playing") {
                if (this["currentTurn"] > 0x4)
                  !this["waitTimer"] &&
                    (this["waitTimer"] = new ig["Timer"](this["winDelay"]));
                else {
                  if (this["nextPlayer"]) {
                    this["nextPlayer"] = ![];
                    if (this["currentTurn"] != 0x1) {
                      var _0xa04a82 = this["greatestCard"](
                        this["playingCards"]
                      );
                      (this["leadingPlayer"] =
                        this["players"][_0xa04a82["owner"] - 0x1]),
                        (this["leadingRank"] = _0xa04a82["rank"]);
                    }
                    this["current"] =
                      (this["currentLeader"] + this["currentTurn"] - 0x1) % 0x4;
                    if (this["current"] != 0x1)
                      this["players"][
                        (this["current"] === 0x0 ? 0x4 : this["current"]) - 0x1
                      ]["playTimer"] = new ig["Timer"](this["botDelay"]);
                    else {
                      (this["msgBoard"]["msg"] = _STRINGS["Game"]["YourTurn"]),
                        (this["playerTurn"] = !![]);
                      for (
                        var _0x47dad0 = 0x0;
                        _0x47dad0 < this["players"][0x0]["cards"]["length"];
                        _0x47dad0++
                      ) {
                        if (
                          !this["players"][0x0]["checkPlayableNoMsg"](
                            this["players"][0x0]["cards"][_0x47dad0]
                          )
                        ) {
                          if (
                            this["players"][0x0]["cards"][_0x47dad0][
                              "sequence"
                            ] == this["players"][0x0]["largestSequence"]()
                          ) {
                            var _0x5b648c = this["spawnEntity"](
                              EntityCardBlack,
                              this["players"][0x0]["cards"][_0x47dad0]["pos"][
                                "x"
                              ],
                              0x181
                            );
                            (_0x5b648c["currentAnim"] =
                              _0x5b648c["anims"]["big"]),
                              (_0x5b648c["currentAnim"]["alpha"] = 0.3),
                              !this["players"][0x0]["checkFinishedTween"]() &&
                                (_0x5b648c["currentAnim"]["alpha"] = 0x0);
                          } else {
                            var _0x5b648c = this["spawnEntity"](
                              EntityCardBlack,
                              this["players"][0x0]["cards"][_0x47dad0]["pos"][
                                "x"
                              ],
                              0x181
                            );
                            !this["players"][0x0]["checkFinishedTween"]() &&
                              (_0x5b648c["currentAnim"]["alpha"] = 0x0);
                          }
                        }
                      }
                    }
                  }
                }
              }
              this["gameState"] == "ending" &&
                !this["endTimer"] &&
                (this["endTimer"] = new ig["Timer"](0.5));
            }
          },
          updateWhilePaused: function () {
            for (
              var _0x421ed5 = 0x0;
              _0x421ed5 < this["entities"]["length"];
              _0x421ed5++
            ) {
              this["entities"][_0x421ed5]["ignorePause"] &&
                this["entities"][_0x421ed5]["update"]();
            }
            this["getEntitiesByType"](EntityButtonArrow)[0x0] &&
              (this["getEntitiesByType"](EntityButtonArrow)[0x0]["currentAnim"][
                "alpha"
              ] = 0x0);
          },
          draw: function () {
            this["parent"]();
          },
          clearCanvas: function (_0x3c8de6, _0xffe1af, _0x20c9f9) {
            var _0x49771c = _0x3c8de6["canvas"];
            _0x3c8de6["clearRect"](0x0, 0x0, _0xffe1af, _0x20c9f9),
              (_0x49771c["style"]["display"] = "none"),
              _0x49771c["offsetHeight"],
              (_0x49771c["style"]["display"] = "inherit");
          },
          drawDebug: function () {
            if (!ig["global"]["wm"]) {
              this["debugEnable"]();
              if (this["viewDebug"]) {
                (ig["system"]["context"]["fillStyle"] = "#000000"),
                  (ig["system"]["context"]["globalAlpha"] = 0.35),
                  ig["system"]["context"]["fillRect"](
                    0x0,
                    0x0,
                    ig["system"]["width"] / 0x4,
                    ig["system"]["height"]
                  ),
                  (ig["system"]["context"]["globalAlpha"] = 0x1);
                if (this["debug"] && this["debug"]["length"] > 0x0)
                  for (i = 0x0; i < this["debug"]["length"]; i++) {
                    (ig["system"]["context"]["font"] = "10px\x20Arial"),
                      (ig["system"]["context"]["fillStyle"] = "#ffffff"),
                      ig["system"]["context"]["fillText"](
                        this["debugLine"] -
                          this["debug"]["length"] +
                          i +
                          ":\x20" +
                          this["debug"][i],
                        0xa,
                        0x32 + 0xa * i
                      );
                  }
              }
            }
          },
          debugCL: function (_0x2034bf) {
            !this["debug"]
              ? ((this["debug"] = []),
                (this["debugLine"] = 0x1),
                this["debug"]["push"](_0x2034bf))
              : (this["debug"]["length"] < 0x32
                  ? this["debug"]["push"](_0x2034bf)
                  : (this["debug"]["splice"](0x0, 0x1),
                    this["debug"]["push"](_0x2034bf)),
                this["debugLine"]++),
              console["log"](_0x2034bf);
          },
          debugEnable: function () {
            ig["input"]["pressed"]("click") &&
              (this["debugEnableTimer"] = new ig["Timer"](0x2));
            if (
              this["debugEnableTimer"] &&
              this["debugEnableTimer"]["delta"]() < 0x0
            )
              ig["input"]["released"]("click") &&
                (this["debugEnableTimer"] = null);
            else
              this["debugEnableTimer"] &&
                this["debugEnableTimer"]["delta"]() > 0x0 &&
                ((this["debugEnableTimer"] = null),
                this["viewDebug"]
                  ? (this["viewDebug"] = ![])
                  : (this["viewDebug"] = !![]));
          },
        })),
        (ig["domHandler"] = null),
        (ig["domHandler"] = new ig["DomHandler"]()),
        ig["domHandler"]["forcedDeviceDetection"](),
        ig["domHandler"]["forcedDeviceRotation"](),
        (ig["apiHandler"] = new ig["ApiHandler"]()),
        (ig["sizeHandler"] = new ig["SizeHandler"](ig["domHandler"]));
      var _0xa01ab7 = 0x3c;
      ig["ua"]["mobile"]
        ? ((ig["Sound"]["enabled"] = ![]),
          ig["main"](
            "#canvas",
            MyGame,
            _0xa01ab7,
            ig["sizeHandler"]["mobile"]["actualResolution"]["x"],
            ig["sizeHandler"]["mobile"]["actualResolution"]["y"],
            ig["sizeHandler"]["scale"],
            ig["SplashLoader"]
          ),
          ig["sizeHandler"]["resize"]())
        : ig["main"](
            "#canvas",
            MyGame,
            _0xa01ab7,
            ig["sizeHandler"]["desktop"]["actualResolution"]["x"],
            ig["sizeHandler"]["desktop"]["actualResolution"]["y"],
            ig["sizeHandler"]["scale"],
            ig["SplashLoader"]
          ),
        (ig["visibilityHandler"] = new ig["VisibilityHandler"]()),
        (ig["soundHandler"] = null),
        (ig["soundHandler"] = new ig["SoundHandler"]()),
        ig["sizeHandler"]["reorient"]();
    });
