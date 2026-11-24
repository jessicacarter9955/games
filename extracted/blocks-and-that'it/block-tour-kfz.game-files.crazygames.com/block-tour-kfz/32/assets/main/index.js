System.register("chunks:///_virtual/ClassicProfile.ts", [], function (e, i) {
  "use strict";
  return (
    i && i.id,
    {
      setters: [],
      execute: function () {
        e("CLASSIC_BALANCE", {
          version: 4,
          introDeals: 3,
          helpCredits: 2,
          helpGapDeals: 4,
          challengeGapDeals: 3,
          fastTrayMs: 4200,
          skillReadyMs: 12e4,
          skillRepeatMs: 9e4,
          skillRetryMs: 15e3,
        }),
          e("CLASSIC_LANES", {
            getWayInfo: [
              [
                [200, "100_4"],
                [280, "100_4"],
                [310, "100_4"],
                [330, "100_4"],
                [350, "100_4"],
                [380, "100_4"],
                [430, "100_4"],
                ["大于430", "100_4"],
              ],
              [
                [200, "100_4"],
                [280, "70_1", "100_0"],
                [310, "50_0", "100_4"],
                [330, "50_0", "100_4"],
                [350, "50_0", "100_4"],
                [380, "50_0", "100_4"],
                [430, "100_4"],
                ["大于430", "100_4"],
              ],
              [
                [200, "70_2", "100_0"],
                [280, "70_2", "100_0"],
                [310, "70_2", "100_0"],
                [330, "100_6"],
                [350, "100_6"],
                [380, "100_6"],
                [430, "100_6"],
                ["大于430", "70_0", "100_4"],
              ],
              [
                [200, "100_4"],
                [280, "70_2", "100_0"],
                [310, "70_2", "100_0"],
                [330, "100_6"],
                [350, "100_6"],
                [380, "100_6"],
                [430, "100_6"],
                ["大于430", "30_0", "100_4"],
              ],
              [
                [200, "100_4"],
                [280, "70_2", "100_0"],
                [310, "100_0"],
                [330, "100_0"],
                [350, "100_0"],
                [380, "100_0"],
                [430, "100_0"],
                ["大于430", "30_0", "100_4"],
              ],
              [
                [200, "100_4"],
                [280, "70_2", "100_0"],
                [310, "70_2", "100_0"],
                [330, "50_0", "100_6"],
                [350, "50_0", "100_6"],
                [380, "50_0", "100_6"],
                [430, "50_0", "100_6"],
                ["大于430", "30_0", "100_4"],
              ],
            ],
            weightRatioArr: [
              [
                [7, 1, !1],
                [9, 1, !1],
                [16, 1, !1],
                [17, 1, !1],
                [20, 3, !1],
              ],
            ],
          }),
          e("CLASSIC_RHYTHM", {
            scoreRanges: [
              {
                id: "range_0_3000",
                minScore: 0,
                maxScore: 3e3,
                timeLimit: null,
                strategy: {
                  weightLt300: "EMPTYDONGFILL",
                  weightGte300: "DUO_XIAO",
                  beforeProgress: "EMPTYDONGFILL",
                  afterProgress: "INTUITION_DIFFICULTY_THEN_BOARD",
                },
                unselectedStrategy: { type: "BOARD" },
                intervals: [
                  { min: 0, max: 1, highestProb: 55, highest80Prob: 60 },
                  { min: 1, max: 2, highestProb: 60, highest80Prob: 70 },
                  { min: 2, max: 3, highestProb: 70, highest80Prob: 80 },
                  { min: 3, max: 4, highestProb: 80, highest80Prob: 90 },
                  { min: 4, max: null, highestProb: 100, highest80Prob: 100 },
                ],
              },
              {
                id: "range_3000_5000",
                minScore: 3e3,
                maxScore: 5e3,
                timeLimit: 300,
                strategy: {
                  weightLt300: "EMPTYDONGFILL",
                  weightGte300: "DUO_XIAO",
                  beforeProgress: "EMPTYDONGFILL",
                  afterProgress: "INTUITION_DIFFICULTY_THEN_BOARD",
                },
                unselectedStrategy: { type: "BOARD" },
                intervals: [
                  { min: 0, max: 1, highestProb: 40, highest80Prob: 50 },
                  { min: 1, max: 2, highestProb: 50, highest80Prob: 60 },
                  { min: 2, max: 3, highestProb: 70, highest80Prob: 70 },
                  { min: 3, max: 4, highestProb: 80, highest80Prob: 80 },
                  { min: 4, max: 5, highestProb: 90, highest80Prob: 90 },
                  { min: 5, max: null, highestProb: 100, highest80Prob: 100 },
                ],
              },
              {
                id: "range_5000_8000",
                minScore: 5e3,
                maxScore: 8e3,
                timeLimit: 300,
                strategy: {
                  weightLt300: "EMPTYDONGFILL",
                  weightGte300: "DUO_XIAO",
                  beforeProgress: "EMPTYDONGFILL",
                  afterProgress: "INTUITION_DIFFICULTY_ONCE_THEN_BOARD",
                },
                unselectedStrategy: {
                  type: "BOARD_WITH_CONDITION",
                  condition: { minTime: 150, scoreRatio: 0.7 },
                },
                intervals: [
                  { min: 0, max: 1, highestProb: 30, highest80Prob: 40 },
                  { min: 1, max: 2, highestProb: 40, highest80Prob: 50 },
                  { min: 2, max: 3, highestProb: 50, highest80Prob: 60 },
                  { min: 3, max: 4, highestProb: 60, highest80Prob: 70 },
                  { min: 4, max: 5, highestProb: 70, highest80Prob: 80 },
                  { min: 5, max: null, highestProb: 100, highest80Prob: 100 },
                ],
              },
              {
                id: "range_8000_10000",
                minScore: 8e3,
                maxScore: 1e4,
                timeLimit: 300,
                strategy: {
                  weightLt300: null,
                  weightGte300: null,
                  beforeProgress: "EMPTYDONGFILL_NO_DIFFICULTY",
                  afterProgress: "INTUITION_DIFFICULTY_ONCE_THEN_BOARD",
                },
                unselectedStrategy: {
                  type: "BOARD_WITH_CONDITION",
                  condition: { minTime: 150, scoreRatio: 0.7 },
                },
                intervals: [
                  { min: 0, max: 1, highestProb: 30, highest80Prob: 40 },
                  { min: 1, max: 2, highestProb: 40, highest80Prob: 50 },
                  { min: 2, max: 3, highestProb: 50, highest80Prob: 60 },
                  { min: 3, max: 4, highestProb: 60, highest80Prob: 70 },
                  { min: 4, max: 5, highestProb: 70, highest80Prob: 80 },
                  { min: 5, max: 10, highestProb: 80, highest80Prob: 90 },
                  { min: 10, max: null, highestProb: 100, highest80Prob: 100 },
                ],
              },
              {
                id: "range_10000_15000",
                minScore: 1e4,
                maxScore: 15e3,
                timeLimit: null,
                strategy: {
                  weightLt300: null,
                  weightGte300: null,
                  beforeProgress: "BOARD",
                  afterProgress: "INTUITION_DIFFICULTY_ONCE_THEN_BOARD",
                },
                unselectedStrategy: {
                  type: "BOARD_WITH_CONDITION",
                  condition: { minTime: 150, scoreRatio: 0.7 },
                },
                intervals: [
                  { min: 0, max: 1, highestProb: 20, highest80Prob: 40 },
                  { min: 1, max: 2, highestProb: 30, highest80Prob: 50 },
                  { min: 2, max: 3, highestProb: 40, highest80Prob: 60 },
                  { min: 3, max: 4, highestProb: 50, highest80Prob: 70 },
                  { min: 4, max: 5, highestProb: 60, highest80Prob: 80 },
                  { min: 5, max: 15, highestProb: 70, highest80Prob: 90 },
                  { min: 15, max: null, highestProb: 80, highest80Prob: 100 },
                ],
              },
              {
                id: "range_15000_20000",
                minScore: 15e3,
                maxScore: 2e4,
                timeLimit: null,
                strategy: {
                  weightLt300: null,
                  weightGte300: null,
                  beforeProgress: "BOARD",
                  afterProgress: "INTUITION_DIFFICULTY_ONCE_THEN_BOARD",
                },
                unselectedStrategy: {
                  type: "BOARD_WITH_CONDITION",
                  condition: { minTime: 150, scoreRatio: 0.7 },
                },
                intervals: [
                  { min: 0, max: 1, highestProb: 10, highest80Prob: 30 },
                  { min: 1, max: 2, highestProb: 20, highest80Prob: 40 },
                  { min: 2, max: 3, highestProb: 30, highest80Prob: 50 },
                  { min: 3, max: 4, highestProb: 40, highest80Prob: 60 },
                  { min: 4, max: 5, highestProb: 50, highest80Prob: 70 },
                  { min: 5, max: 15, highestProb: 60, highest80Prob: 80 },
                  { min: 15, max: null, highestProb: 80, highest80Prob: 90 },
                ],
              },
              {
                id: "range_20000_30000",
                minScore: 2e4,
                maxScore: 3e4,
                timeLimit: null,
                strategy: {
                  weightLt300: null,
                  weightGte300: null,
                  beforeProgress: "BOARD",
                  afterProgress: "INTUITION_DIFFICULTY_ONCE_THEN_BOARD",
                },
                unselectedStrategy: {
                  type: "BOARD_WITH_CONDITION",
                  condition: { minTime: 150, scoreRatio: 0.7 },
                },
                intervals: [
                  { min: 0, max: 1, highestProb: 5, highest80Prob: 10 },
                  { min: 1, max: 2, highestProb: 10, highest80Prob: 20 },
                  { min: 2, max: 3, highestProb: 15, highest80Prob: 30 },
                  { min: 3, max: 4, highestProb: 20, highest80Prob: 40 },
                  { min: 4, max: 5, highestProb: 25, highest80Prob: 50 },
                  { min: 5, max: 10, highestProb: 40, highest80Prob: 60 },
                  { min: 10, max: 15, highestProb: 60, highest80Prob: 70 },
                  { min: 15, max: 20, highestProb: 70, highest80Prob: 80 },
                  { min: 20, max: 30, highestProb: 80, highest80Prob: 90 },
                  { min: 30, max: null, highestProb: 90, highest80Prob: 100 },
                ],
              },
              {
                id: "range_30000_max",
                minScore: 3e4,
                maxScore: null,
                timeLimit: null,
                strategy: { type: "BOARD" },
                unselectedStrategy: { type: "BOARD" },
                intervals: [],
              },
            ],
          });
      },
    }
  );
});
System.register(
  "chunks:///_virtual/ClassicDealer.ts",
  ["./ClassicProfile.ts"],
  function (e, t) {
    "use strict";
    var s, r, a, i, n, l, o, c;
    function classicRows(e) {
      const t = new Array(8).fill(0);
      for (let s = 0; s < 8; s++)
        for (let r = 0; r < 8; r++) e[8 * s + r] >= 0 && (t[s] |= 1 << r);
      return t;
    }
    function classicBoardWeight(e) {
      const occupied = (t, s) => !!(e[s] & (1 << t)),
        fits = (t, s, r, a) => {
          if (t + r > 8 || s + a > 8) return !1;
          for (let i = 0; i < a; i++)
            if (e[s + i] & (((1 << r) - 1) << t)) return !1;
          return !0;
        };
      let t = 64,
        s = 0,
        r = 0,
        a = 0,
        i = 0,
        n = 0;
      const l = new Array(8).fill(0),
        o = new Array(8).fill(0);
      for (let e = 0; e < 8; e++) {
        let r = 0,
          c = 0;
        for (let s = 0; s < 8; s++)
          occupied(s, e)
            ? (t--, r++, l[s]++)
            : (fits(s, e, 3, 3) && a++,
              fits(s, e, 5, 1) && i++,
              fits(s, e, 1, 5) && n++,
              s > 0 && occupied(s - 1, e) && c++,
              s < 7 && occupied(s + 1, e) && c++,
              e > 0 && occupied(s, e - 1) && o[s]++,
              e < 7 && occupied(s, e + 1) && o[s]++);
        s += r * c;
      }
      for (let e = 0; e < 8; e++) r += l[e] * o[e];
      const c = a >= 3 ? a + 20 : 2 * a + 16 + (i + n) / 3,
        h = Math.pow(t - 32, 2);
      return 246 + s + r - c + (t >= 32 ? -h / 5 : a > 0 ? h / 5 : h / 2);
    }
    function classicPlace(e, t, s, r) {
      if (s < 0 || r < 0 || s + t.width > 8 || r + t.height > 8) return null;
      const a = t,
        i =
          a.masks ||
          Array.from({ length: t.height }, (e, s) =>
            t.cells.reduce((e, t) => e | (t.y === s ? 1 << t.x : 0), 0)
          );
      for (let a = 0; a < t.height; a++)
        if (e[r + a] & (i[a] << s)) return null;
      const l = e.slice();
      for (let e = 0; e < t.height; e++) l[r + e] |= i[e] << s;
      let o = 0,
        c = 0;
      for (let e = 0; e < 8; e++)
        255 === l[e] && (o |= 1 << e),
          l.every((t) => !!(t & (1 << e))) && (c |= 1 << e);
      for (let e = 0; e < 8; e++) l[e] = o & (1 << e) ? 0 : l[e] & ~c;
      return {
        shape: a,
        x: s,
        y: r,
        rows: l,
        lines: n[o] + n[c],
        cross: !!o && !!c,
      };
    }
    function features(e) {
      let t = 0,
        s = 0;
      for (let r = 0; r < 8; r++) {
        const a = e[r],
          i = 7 === r ? 255 : e[r + 1],
          l = 0 === r ? 255 : e[r - 1],
          o = ((a << 1) & 255) | 1,
          c = (a >> 1) | 128,
          h = 255 & ~a;
        (t += n[h & i & l & (o | c)] + n[h & o & c & (i | l) & ~(i & l)]),
          (s += n[a & (a << 1)] + (r > 0 ? n[a & e[r - 1]] : 0));
      }
      return {
        occupied: e.reduce((e, t) => e + n[t], 0),
        holes: t,
        contacts: s,
      };
    }
    return (
      t && t.id,
      e("classicRows", classicRows),
      e("classicBoardWeight", classicBoardWeight),
      e("classicPlace", classicPlace),
      {
        setters: [
          function (e) {
            s = e;
          },
        ],
        execute: function () {
          (r = [
            [1, 2, 0],
            [2, 1, 0],
            [1, 0, 2],
            [0, 1, 2],
            [2, 0, 1],
            [0, 2, 1],
          ]),
            (a = [
              [2, 0, 1],
              [2, 1, 0],
              [0, 2, 1],
              [0, 1, 2],
              [1, 2, 0],
              [1, 0, 2],
            ]),
            (i = [0.331, 0.293, 0.133, 0.074, 0.097, 0.063]),
            (n = Array.from({ length: 256 }, (e, t) => {
              let s = 0;
              for (; t; t &= t - 1) s++;
              return s;
            })),
            (l = (e) => JSON.parse(JSON.stringify(e))),
            (o = (e) => e.reduce((e, t) => e + t, 0)),
            (c = (e) => e.slice().sort().join("|")),
            e(
              "ClassicDealer",
              class ClassicDealer {
                constructor() {
                  (this.report = null),
                    (this.bestScore = 0),
                    (this.pauses = new Set()),
                    (this.pausedAt = 0),
                    (this.pauseWasAd = !1),
                    (this.pauseWasReturn = !1),
                    (this.timedPuzzle = !1),
                    (this.helpUsed = !1),
                    (this.strategySource = ""),
                    (this.selectedLane = 0),
                    this.reset(0);
                }
                reset(e, t = Date.now()) {
                  var s;
                  const r = this.state,
                    a = r && r.placed > 0,
                    i = r ? r.games + Number(a) : 0;
                  (this.state = {
                    version: 1,
                    seed: 0,
                    deals: 0,
                    placed: 0,
                    activeMs: 0,
                    lastActionAt: t,
                    trayMs: 0,
                    thinkTimes: [],
                    trayTimes: [],
                    orderCounts: r ? r.orderCounts.slice() : [0, 0, 0, 0, 0, 0],
                    orderHistory:
                      (null == r ? void 0 : r.orderHistory.slice()) || [],
                    currentOrder: [],
                    recent: [],
                    pauseHelp: 0,
                    thinkUntil: 0,
                    rescueHelp: 0,
                    noClearMoves: 0,
                    cooldown: 0,
                    comboCooldown: 0,
                    rhythmTarget: -1,
                    rhythmTriggered: !1,
                    nextTimedPuzzleAt: 12e4,
                    games: i,
                    lastBreakGame:
                      a && this.bestScore > 0 && e >= this.bestScore
                        ? i - 1
                        : null !== (s = null == r ? void 0 : r.lastBreakGame) &&
                          void 0 !== s
                        ? s
                        : -1,
                    pastScores: a
                      ? [...r.pastScores, e].slice(-9)
                      : (null == r ? void 0 : r.pastScores.slice()) || [],
                    pacing: this.newPacing(),
                  }),
                    this.pauses.clear(),
                    (this.report = null);
                }
                setRecord(e) {
                  this.bestScore = Math.max(0, e);
                }
                snapshot(e = Date.now()) {
                  const t = l(this.state);
                  if (this.pauses.size) {
                    const s = Math.max(0, Math.floor(e - this.pausedAt));
                    (t.lastActionAt += s),
                      this.pauseWasReturn &&
                        !this.pauseWasAd &&
                        s > 6e4 &&
                        (t.pauseHelp = 1);
                  }
                  return t;
                }
                restore(e) {
                  var t;
                  if (!e || "object" != typeof e) return !1;
                  const s = Object.assign(Object.assign({}, e), {
                    nextTimedPuzzleAt:
                      null !== (t = e.nextTimedPuzzleAt) && void 0 !== t
                        ? t
                        : 12e4,
                  });
                  if (
                    1 !== s.version ||
                    [
                      "seed",
                      "deals",
                      "placed",
                      "activeMs",
                      "lastActionAt",
                      "trayMs",
                      "pauseHelp",
                      "thinkUntil",
                      "rescueHelp",
                      "noClearMoves",
                      "cooldown",
                      "comboCooldown",
                      "games",
                      "nextTimedPuzzleAt",
                    ].some((e) => !Number.isSafeInteger(s[e]) || s[e] < 0) ||
                    s.seed >= 2147483647 ||
                    !Number.isInteger(s.lastBreakGame) ||
                    s.lastBreakGame < -1 ||
                    ![-1, 0, 0.8, 1].includes(s.rhythmTarget) ||
                    "boolean" != typeof s.rhythmTriggered
                  )
                    return !1;
                  for (const [e, t] of [
                    ["thinkTimes", 9],
                    ["trayTimes", 6],
                    ["pastScores", 9],
                    ["currentOrder", 3],
                    ["orderCounts", 6],
                    ["orderHistory", 120],
                  ])
                    if (
                      !Array.isArray(s[e]) ||
                      s[e].length > t ||
                      s[e].some((e) => !Number.isSafeInteger(e) || e < 0)
                    )
                      return !1;
                  return !(
                    6 !== s.orderCounts.length ||
                    s.orderHistory.some((e) => e > 5) ||
                    s.orderCounts.some(
                      (e, t) =>
                        e !== s.orderHistory.filter((e) => e === t).length
                    ) ||
                    s.currentOrder.some((e) => e > 2) ||
                    new Set(s.currentOrder).size !== s.currentOrder.length ||
                    !Array.isArray(s.recent) ||
                    s.recent.length > 10 ||
                    s.recent.some(
                      (e) =>
                        !Array.isArray(e) ||
                        3 !== e.length ||
                        e.some((e) => "string" != typeof e || e.length > 12)
                    ) ||
                    ((s.pacing = this.readPacing(s.pacing)),
                    (s.pauseHelp = Math.min(1, s.pauseHelp)),
                    (s.rescueHelp = Math.min(1, s.rescueHelp)),
                    (this.state = l(s)),
                    this.pauses.clear(),
                    (this.report = null),
                    0)
                  );
                }
                pause(e, t, s = Date.now(), r = !1) {
                  t
                    ? (this.pauses.size ||
                        ((this.pausedAt = s),
                        (this.pauseWasAd = !1),
                        (this.pauseWasReturn = !1)),
                      this.pauses.add(e),
                      this.pauseWasAd || (this.pauseWasAd = "ad" === e),
                      this.pauseWasReturn || (this.pauseWasReturn = r))
                    : this.pauses.delete(e) &&
                      !this.pauses.size &&
                      this.skipInactive(
                        Math.max(0, s - this.pausedAt),
                        this.pauseWasReturn && !this.pauseWasAd
                      );
                }
                skipInactive(e, t) {
                  !Number.isFinite(e) ||
                    e < 0 ||
                    ((this.state.lastActionAt += Math.floor(e)),
                    t && e > 6e4 && (this.state.pauseHelp = 1));
                }
                tick(e) {
                  const t = Math.max(
                    0,
                    Math.min(864e5, Math.floor(e - this.state.lastActionAt))
                  );
                  return (
                    (this.state.lastActionAt = e),
                    this.pauses.size
                      ? 0
                      : t > 6e4
                      ? (this.skipInactive(t, !0),
                        (this.state.lastActionAt = e),
                        0)
                      : ((this.state.activeMs += t),
                        (this.state.trayMs += t),
                        t)
                  );
                }
                placed(e, t, s = Date.now()) {
                  const a = this.tick(s),
                    i = this.state;
                  if (
                    (9 === i.thinkTimes.length &&
                      a > 8e3 &&
                      a > (2 * o(i.thinkTimes)) / 9 &&
                      (i.thinkUntil = i.placed + 4),
                    a > 0 && (i.thinkTimes = [...i.thinkTimes, a].slice(-9)),
                    i.placed++,
                    (i.noClearMoves = t ? 0 : i.noClearMoves + 1),
                    (i.pacing.clears = [...i.pacing.clears, t].slice(-12)),
                    void 0 !== e &&
                      e >= 0 &&
                      e < 3 &&
                      !i.currentOrder.includes(e) &&
                      i.currentOrder.push(e),
                    3 === i.currentOrder.length)
                  ) {
                    const e = r.findIndex((e) =>
                      e.every((e, t) => e === i.currentOrder[t])
                    );
                    e >= 0 &&
                      (i.orderCounts[e]++,
                      i.orderHistory.push(e),
                      i.orderHistory.length > 120 &&
                        i.orderCounts[i.orderHistory.shift()]--),
                      (i.trayTimes = [...i.trayTimes, i.trayMs].slice(-6));
                  }
                }
                rescue() {
                  (this.state.rescueHelp = 1),
                    (this.state.currentOrder = []),
                    (this.state.pacing.grace = Math.max(
                      1,
                      this.state.pacing.grace
                    ));
                }
                random() {
                  return (
                    (this.state.seed = (16807 * this.state.seed) % 2147483647),
                    Math.floor(((this.state.seed - 1) / 2147483646) * 1e6) / 1e6
                  );
                }
                newPacing(e = 0) {
                  return {
                    version: 4,
                    helpCredits: s.CLASSIC_BALANCE.helpCredits,
                    lastHelpDeal: -1,
                    grace: e,
                    clears: [],
                  };
                }
                readPacing(e) {
                  const t = e;
                  if (
                    t &&
                    [2, 3, 4].includes(t.version) &&
                    Number.isSafeInteger(t.helpCredits) &&
                    t.helpCredits >= 0 &&
                    t.helpCredits <= 2 &&
                    Number.isSafeInteger(t.lastHelpDeal) &&
                    t.lastHelpDeal >= -1 &&
                    Number.isSafeInteger(t.grace) &&
                    t.grace >= 0 &&
                    t.grace <= 2
                  ) {
                    const e =
                      4 === t.version &&
                      Array.isArray(t.clears) &&
                      t.clears.length <= 12 &&
                      t.clears.every(
                        (e) => Number.isSafeInteger(e) && e >= 0 && e <= 16
                      )
                        ? t.clears.slice()
                        : [];
                    return {
                      version: 4,
                      helpCredits: t.helpCredits,
                      lastHelpDeal: t.lastHelpDeal,
                      grace: 4 === t.version ? t.grace : Math.min(1, t.grace),
                      clears: e,
                    };
                  }
                  const s = this.newPacing(1);
                  return null != e && (s.helpCredits = 0), s;
                }
                rhythm() {
                  const e = this.state;
                  if (-1 !== e.rhythmTarget) return;
                  const t = s.CLASSIC_RHYTHM.scoreRanges.find(
                      (e) =>
                        this.bestScore >= e.minScore &&
                        (null === e.maxScore || this.bestScore < e.maxScore)
                    ),
                    r =
                      e.lastBreakGame >= 0
                        ? e.games - e.lastBreakGame - 1
                        : e.games,
                    a =
                      null == t
                        ? void 0
                        : t.intervals.find(
                            (e) => r >= e.min && (null === e.max || r < e.max)
                          );
                  e.rhythmTarget = a
                    ? Math.floor(100 * this.random()) + 1 <= a.highestProb
                      ? 1
                      : Math.floor(100 * this.random()) + 1 <= a.highest80Prob
                      ? 0.8
                      : 0
                    : 0;
                }
                goal(e, t, r) {
                  const a = this.state,
                    i = a.pacing,
                    n = features(e);
                  (this.timedPuzzle = !1),
                    (this.helpUsed = !1),
                    (this.selectedLane = 0),
                    (this.strategySource = "board");
                  const select = (e, t) => ((this.strategySource = t), e),
                    l = a.pauseHelp > 0,
                    c = a.thinkUntil > a.placed;
                  if (
                    ((a.pauseHelp = 0), (a.thinkUntil = a.placed), a.rescueHelp)
                  )
                    return select("rescue", "second-chance");
                  if (i.grace) return i.grace--, select("build", "transition");
                  if (a.deals < s.CLASSIC_BALANCE.introDeals)
                    return select("intro", "onboarding");
                  const h = l
                    ? "return"
                    : c
                    ? "think"
                    : a.noClearMoves >= 6 && n.occupied >= 52
                    ? "cascade"
                    : null;
                  if (
                    h &&
                    i.helpCredits > 0 &&
                    (i.lastHelpDeal < 0 ||
                      a.deals - i.lastHelpDeal >=
                        s.CLASSIC_BALANCE.helpGapDeals)
                  )
                    return (
                      i.helpCredits--,
                      (i.lastHelpDeal = a.deals),
                      (this.helpUsed = !0),
                      select(h, "limited-assistance")
                    );
                  const u = a.pastScores.length
                    ? o(a.pastScores) / a.pastScores.length
                    : Math.max(this.bestScore, 1500);
                  let d = 3;
                  const p = s.CLASSIC_LANES.weightRatioArr;
                  for (let e = 0; e < p.length; e++)
                    if (
                      this.bestScore <= Math.pow(2, e) * u ||
                      e === p.length - 1
                    ) {
                      const s = p[e].find(
                        (e) => t <= (Number(e[0]) / 18) * this.bestScore
                      );
                      s && (d = Number(s[1]));
                      break;
                    }
                  this.selectedLane = d;
                  const m = 10 * Math.floor(10 * this.random()),
                    g = s.CLASSIC_LANES.getWayInfo[d - 1];
                  let f = 0;
                  for (let e = 0; e < g.length; e++)
                    if (
                      e === g.length - 1 ||
                      parseInt(String(g[e][0]), 10) >= r
                    ) {
                      for (const t of g[e].slice(1)) {
                        const [e, s] = String(t).split("_").map(Number);
                        if (m < e) {
                          f = s;
                          break;
                        }
                      }
                      break;
                    }
                  let y =
                    4 === f
                      ? "fill"
                      : 6 === f || 8 === f
                      ? "puzzle"
                      : 2 === f
                      ? "pressure"
                      : "build";
                  this.strategySource = "lane";
                  const S = s.CLASSIC_RHYTHM.scoreRanges.find(
                      (e) =>
                        this.bestScore >= e.minScore &&
                        (null === e.maxScore || this.bestScore < e.maxScore)
                    ),
                    A =
                      S &&
                      (null === S.timeLimit ||
                        a.activeMs < 1e3 * S.timeLimit) &&
                      a.rhythmTarget > 0 &&
                      this.bestScore > 0 &&
                      t >= this.bestScore * a.rhythmTarget,
                    v =
                      0 === a.rhythmTarget &&
                      "BOARD_WITH_CONDITION" ===
                        (null == S ? void 0 : S.unselectedStrategy.type) &&
                      a.activeMs > 15e4 &&
                      this.bestScore > 0 &&
                      t > 0.7 * this.bestScore,
                    C =
                      a.pastScores.length >= 3 &&
                      this.bestScore > 2 * u &&
                      t >= Math.max(300, 1.25 * u) &&
                      n.occupied >= 24 &&
                      a.noClearMoves < 3,
                    b =
                      a.activeMs >=
                        Math.max(
                          s.CLASSIC_BALANCE.skillReadyMs,
                          a.nextTimedPuzzleAt
                        ) &&
                      a.placed >= 18 &&
                      i.clears.filter((e) => e > 0).length >= 3 &&
                      n.occupied >= 16 &&
                      a.noClearMoves < 3;
                  !a.rhythmTriggered && n.occupied >= 16 && (A || v)
                    ? ((y = "puzzle"),
                      (this.strategySource = A
                        ? "record-target"
                        : "record-progress"),
                      (this.timedPuzzle = !!v))
                    : !a.rhythmTriggered && C
                    ? ((y = "puzzle"),
                      (this.strategySource = "recent-performance"))
                    : b &&
                      ((y = "puzzle"),
                      (this.strategySource = "current-performance"),
                      (this.timedPuzzle = !0));
                  const M =
                    6 === a.trayTimes.length &&
                    o(a.trayTimes) / 6 < s.CLASSIC_BALANCE.fastTrayMs;
                  return (
                    "puzzle" !== y &&
                      M &&
                      this.bestScore > 0 &&
                      t >= 0.93 * this.bestScore &&
                      n.occupied >= 16 &&
                      ((y = "puzzle"),
                      (this.strategySource = "tempo-and-progress")),
                    n.occupied < 14 && ("puzzle" === y || "pressure" === y)
                      ? ((this.timedPuzzle = !1), select("build", "open-board"))
                      : !a.cooldown || ("puzzle" !== y && "pressure" !== y)
                      ? y
                      : ((this.timedPuzzle = !1),
                        select("build", "challenge-spacing"))
                  );
                }
                generate(e, t, n, l, h, u = Date.now()) {
                  const d = this.state;
                  d.deals || d.placed || (d.lastActionAt = u),
                    this.tick(u),
                    d.seed ||
                      (d.seed =
                        1 +
                        Math.floor(
                          2147483645 * Math.max(0, Math.min(0.999999999, h()))
                        )),
                    this.rhythm();
                  const p = classicRows(e),
                    m = classicBoardWeight(p),
                    g = this.goal(p, n, m),
                    f = t.map((e) =>
                      Object.assign(Object.assign({}, e), {
                        masks: Array.from({ length: e.height }, (t, s) =>
                          e.cells.reduce(
                            (e, t) => e | (t.y === s ? 1 << t.x : 0),
                            0
                          )
                        ),
                      })
                    ),
                    y = f.find((e) => 1 === e.cells.length);
                  let S = 0;
                  const A = new Map(),
                    enumerate = (e) => {
                      const t = e.join(","),
                        s = A.get(t);
                      if (s) return s;
                      const r = [];
                      for (const t of f)
                        if (t.cells.length > 1)
                          for (let s = 0; s <= 8 - t.height; s++)
                            for (let a = 0; a <= 8 - t.width; a++) {
                              S++;
                              const i = classicPlace(e, t, a, s);
                              i && r.push(i);
                            }
                      if (!r.length)
                        for (let t = 0; t < 8; t++)
                          for (let s = 0; s < 8; s++) {
                            S++;
                            const a = classicPlace(e, y, s, t);
                            a && r.push(a);
                          }
                      return A.set(t, r), r;
                    },
                    v = enumerate(p);
                  if (!v.length) return (this.report = null), [];
                  const C = new Map(),
                    b = new Map();
                  for (const e of v)
                    C.set(e.shape.id, (C.get(e.shape.id) || 0) + 1),
                      e.lines &&
                        b.set(e.shape.id, (b.get(e.shape.id) || 0) + 1);
                  const evaluate = (e, t, s) => {
                      const r = features(e.rows),
                        a = e.shape.cells.length;
                      let i = ["return", "think", "rescue", "cascade"].includes(
                        s
                      )
                        ? 45 * e.lines +
                          20 * Number(e.cross) -
                          0.4 * r.occupied -
                          4 * r.holes
                        : "puzzle" === s
                        ? 14 * e.lines -
                          2 * r.holes +
                          32 * Number(t.moves.length > 0 && !C.has(e.shape.id))
                        : "pressure" === s
                        ? 1.5 * a -
                          4 * e.lines -
                          6 * (b.get(e.shape.id) || 0) -
                          r.holes
                        : "intro" === s
                        ? 12 * e.lines -
                          4 * r.holes +
                          1.5 * Math.min(a, 6) -
                          3 * Math.max(0, a - 6)
                        : "fill" === s
                        ? 12 * e.lines -
                          3 * r.holes -
                          0.2 * r.occupied +
                          0.8 * a
                        : 1.5 * a + 5 * e.lines - 2 * r.holes;
                      return (
                        (i += 0.15 * r.contacts),
                        (i -=
                          10 *
                          t.moves.filter((t) => t.shape.id === e.shape.id)
                            .length),
                        1 === a && (i -= 90),
                        2 === a && (i -= "intro" === s ? 2 : 4),
                        i
                      );
                    },
                    construct = (e) => {
                      let t = [{ rows: p, moves: [], value: 0 }];
                      for (let s = 0; s < 3; s++) {
                        const s = [];
                        for (const r of t) {
                          const t = new Map();
                          for (const s of enumerate(r.rows)) {
                            const a = evaluate(s, r, e) + 12 * this.random(),
                              i = t.get(s.shape.id) || [];
                            i.push({ move: s, rank: a }),
                              i.sort((e, t) => t.rank - e.rank),
                              i.length > 2 && i.pop(),
                              t.set(s.shape.id, i);
                          }
                          const a = Array.from(t.values())
                            .flat()
                            .sort((e, t) => t.rank - e.rank)
                            .slice(0, 10);
                          for (const { move: e, rank: t } of a)
                            s.push({
                              rows: e.rows,
                              moves: [...r.moves, e],
                              value: r.value + t,
                            });
                        }
                        s.sort((e, t) => t.value - e.value);
                        const r = new Set();
                        t = [];
                        for (const e of s) {
                          const s =
                            c(e.moves.map((e) => e.shape.id)) +
                            ":" +
                            e.rows.join(",");
                          if (
                            !r.has(s) &&
                            (r.add(s), t.push(e), 4 === t.length)
                          )
                            break;
                        }
                      }
                      return t.filter((e) => 3 === e.moves.length);
                    },
                    orderAnalysis = (e, t) => {
                      let s = 0,
                        a = 0,
                        i = 0;
                      for (const n of r) {
                        let r = !1;
                        const walk = (a, i) => {
                          if (3 === i) return !0;
                          const l = e.moves[n[i]].shape;
                          for (let e = 0; e <= 8 - l.height; e++)
                            for (let n = 0; n <= 8 - l.width; n++) {
                              if (++s > t) return (r = !0), !1;
                              const o = classicPlace(a, l, n, e);
                              if (o && walk(o.rows, i + 1)) return !0;
                            }
                          return !1;
                        };
                        walk(p, 0) ? i++ : r && a++;
                      }
                      return (S += s), { viable: i, unknown: a };
                    };
                  let M = construct(g),
                    z = g;
                  if (
                    (M.length || ((M = construct("fill")), (z = "fill")),
                    !M.length)
                  )
                    throw new Error("Classic construction failed");
                  const w = M.map((e) => {
                      const t = e.moves.map((e) => e.shape.id),
                        s = c(t);
                      let r = e.value;
                      const a = o(e.moves.map((e) => e.shape.cells.length)),
                        i =
                          "pressure" === z
                            ? 17
                            : "build" === z || "puzzle" === z
                            ? 14
                            : 12;
                      (r -= 2 * Math.abs(a - i)),
                        (r -=
                          12 *
                          Math.max(
                            0,
                            e.moves.filter((e) => e.shape.cells.length >= 7)
                              .length - 1
                          )),
                        1 === new Set(t).size && (r -= 180),
                        d.recent.forEach((e, t) => {
                          c(e) === s &&
                            (r -= t === d.recent.length - 1 ? 400 : 45);
                        });
                      const n = [...d.recent, t].slice(-10);
                      for (let e = 2; e <= 5; e++)
                        n.length >= 2 * e &&
                          n
                            .slice(-e)
                            .every(
                              (t, s) => c(t) === c(n[n.length - 2 * e + s])
                            ) &&
                          (r -= 300);
                      const l = orderAnalysis(e, 1600);
                      return (
                        "puzzle" === z &&
                          (r += 8 * Math.max(0, 6 - l.viable - l.unknown)),
                        ["return", "think", "rescue", "intro"].includes(z) &&
                          (r += 5 * l.viable),
                        { path: e, rank: r, analysis: l }
                      );
                    }).sort((e, t) => t.rank - e.rank),
                    k = w.filter(
                      (e) =>
                        e.path.moves.filter((e) => !C.has(e.shape.id)).length <=
                          1 &&
                        (e.analysis.unknown > 0 || e.analysis.viable >= 2)
                    ),
                    x = k.length ? k : w,
                    H = x.filter((e) => e.rank >= x[0].rank - 18),
                    T = H.map((e) => 1 / (1 + (H[0].rank - e.rank) / 6));
                  let P = this.random() * o(T),
                    L = 0;
                  for (; L < T.length - 1 && (P -= T[L]) > 0; ) L++;
                  let I = H[L],
                    N = !1;
                  if (
                    l >= 30 &&
                    !d.comboCooldown &&
                    ["fill", "build"].includes(z)
                  ) {
                    const e = construct("pressure");
                    for (const t of e) {
                      let e = 0,
                        s = !1,
                        r = !1;
                      const visit = (a, i) => {
                        if (i.length && !s && !r)
                          for (const n of i) {
                            const l = t.moves[n].shape;
                            for (let t = 0; t <= 8 - l.height; t++)
                              for (let o = 0; o <= 8 - l.width; o++) {
                                if (++e > 2400) return void (s = !0);
                                const c = classicPlace(a, l, o, t);
                                if (c) {
                                  if (c.lines) return void (r = !0);
                                  if (
                                    (visit(
                                      c.rows,
                                      i.filter((e) => e !== n)
                                    ),
                                    s || r)
                                  )
                                    return;
                                }
                              }
                          }
                      };
                      if ((visit(p, [0, 1, 2]), (S += e), !s && !r)) {
                        (I = {
                          path: t,
                          rank: 0,
                          analysis: orderAnalysis(t, 1600),
                        }),
                          (N = !0),
                          (d.comboCooldown = 8);
                        break;
                      }
                    }
                  }
                  const O = o(d.orderCounts),
                    B =
                      d.deals < 5
                        ? 0
                        : d.deals < 15
                        ? 0.3
                        : d.deals < 30
                        ? 0.6
                        : 0.9,
                    D = d.orderCounts.map((e) =>
                      O ? Math.max(e / O, 0.01) : 1 / 6
                    ),
                    R = o(D),
                    W = D.map((e, t) => (e / R) * B + i[t] * (1 - B)),
                    _ = W.indexOf(Math.max(...W)),
                    E = a[_].slice(),
                    U = I.path;
                  if (d.deals < 3)
                    for (let e = 2; e > 0; e--) {
                      const t = Math.floor(this.random() * (e + 1));
                      [E[e], E[t]] = [E[t], E[e]];
                    }
                  this.report = {
                    requested: g,
                    applied: z,
                    weight: m,
                    checks: S,
                    initiallyBlocked: U.moves.filter((e) => !C.has(e.shape.id))
                      .length,
                    initialClearChoices: U.moves.reduce(
                      (e, t) => e + (b.get(t.shape.id) || 0),
                      0
                    ),
                    witnessLines: U.moves.reduce((e, t) => e + t.lines, 0),
                    viableOrders: I.analysis.viable,
                    unknownOrders: I.analysis.unknown,
                    comboReplacement: N,
                    timedPuzzle: this.timedPuzzle,
                    strategySource: this.strategySource,
                    lane: this.selectedLane,
                    assisted: this.helpUsed,
                    witness: U.moves.map((e, t) => ({
                      slot: E.indexOf(t),
                      x: e.x,
                      y: e.y,
                    })),
                  };
                  const j =
                    "puzzle" === z &&
                    (this.report.initiallyBlocked > 0 ||
                      (!I.analysis.unknown && I.analysis.viable < 6));
                  return (
                    (d.cooldown =
                      j || "pressure" === z
                        ? s.CLASSIC_BALANCE.challengeGapDeals
                        : Math.max(0, d.cooldown - 1)),
                    j &&
                      [
                        "record-target",
                        "record-progress",
                        "recent-performance",
                      ].includes(this.strategySource) &&
                      (d.rhythmTriggered = !0),
                    j
                      ? (d.nextTimedPuzzleAt = Math.max(
                          d.nextTimedPuzzleAt,
                          d.activeMs + s.CLASSIC_BALANCE.skillRepeatMs
                        ))
                      : "current-performance" === this.strategySource &&
                        (d.nextTimedPuzzleAt =
                          d.activeMs + s.CLASSIC_BALANCE.skillRetryMs),
                    (d.comboCooldown = Math.max(0, d.comboCooldown - 1)),
                    d.pauseHelp && d.pauseHelp--,
                    d.rescueHelp && d.rescueHelp--,
                    d.deals++,
                    (d.trayMs = 0),
                    (d.currentOrder = []),
                    (d.lastActionAt = u),
                    (d.recent = [
                      ...d.recent,
                      U.moves.map((e) => e.shape.id),
                    ].slice(-10)),
                    E.map((e) => U.moves[e].shape)
                  );
                }
              }
            );
        },
      }
    );
  }
);
System.register(
  "chunks:///_virtual/YouTubePortalAdapter.ts",
  ["./BestScoreMigration.ts"],
  function (e, t) {
    "use strict";
    var s,
      i,
      r,
      a,
      o,
      n =
        (this && this.__awaiter) ||
        function (e, t, s, i) {
          return new (s || (s = Promise))(function (r, a) {
            function fulfilled(e) {
              try {
                step(i.next(e));
              } catch (e) {
                a(e);
              }
            }
            function rejected(e) {
              try {
                step(i.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function step(e) {
              e.done
                ? r(e.value)
                : (function adopt(e) {
                    return e instanceof s
                      ? e
                      : new s(function (t) {
                          t(e);
                        });
                  })(e.value).then(fulfilled, rejected);
            }
            step((i = i.apply(e, t || [])).next());
          });
        };
    function object(e) {
      return null !== e && "object" == typeof e && !Array.isArray(e);
    }
    return (
      t && t.id,
      {
        setters: [
          function (e) {
            s = e;
          },
        ],
        execute: function () {
          (r = [
            (i = "blocks-web-best-score"),
            "blocks-web-game-state-v1",
            "blocks-web-sound-enabled",
            "blocks-web-sound-volume",
          ]),
            (a = "blocksWebClassic"),
            (o = 18e4),
            e(
              "YouTubePortalAdapter",
              class YouTubePortalAdapter {
                constructor() {
                  (this.id = "youtube"),
                    (this.sdk = null),
                    (this.language = null),
                    (this.ready = !1),
                    (this.audioMuted = !1),
                    (this.paused = !1),
                    (this.resumeWaiters = []),
                    (this.pauseListener = null),
                    (this.audioListener = null),
                    (this.rootData = {}),
                    (this.values = Object.create(null)),
                    (this.sentBestScore = null),
                    (this.revision = 0),
                    (this.savedRevision = 0),
                    (this.writeQueue = Promise.resolve()),
                    (this.nextInterstitialAt = Number.POSITIVE_INFINITY);
                }
                initialize() {
                  return n(this, void 0, void 0, function* () {
                    const e = globalThis.ytgame;
                    if (!(null == e ? void 0 : e.IN_PLAYABLES_ENV))
                      throw new Error("YouTube Playables SDK is unavailable");
                    (this.sdk = e),
                      yield this.afterFrame(),
                      e.game.firstFrameReady(),
                      (this.audioMuted = !e.system.isAudioEnabled()),
                      e.system.onAudioEnabledChange((e) => {
                        var t;
                        (this.audioMuted = !e),
                          null === (t = this.audioListener) ||
                            void 0 === t ||
                            t.call(this, this.audioMuted);
                      }),
                      e.system.onPause(() => {
                        var e;
                        (this.paused = !0),
                          null === (e = this.pauseListener) ||
                            void 0 === e ||
                            e.call(this, !0);
                      }),
                      e.system.onResume(() => {
                        var e;
                        (this.paused = !1),
                          null === (e = this.pauseListener) ||
                            void 0 === e ||
                            e.call(this, !1);
                        const t = this.resumeWaiters;
                        (this.resumeWaiters = []), t.forEach((e) => e());
                      }),
                      yield this.waitForResume(),
                      (this.language = yield e.system.getLanguage()),
                      yield this.waitForResume();
                    const t = yield e.game.loadData();
                    yield this.waitForResume(),
                      this.readCloudData(t),
                      (this.ready = !0),
                      (this.nextInterstitialAt = Date.now() + o);
                  });
                }
                getLanguage() {
                  return this.language;
                }
                isAudioMuted() {
                  return this.audioMuted;
                }
                setAudioMuteListener(e) {
                  (this.audioListener = e), e(this.audioMuted);
                }
                setPauseListener(e) {
                  (this.pauseListener = e), this.paused && e(!0);
                }
                isStorageReady() {
                  return this.ready;
                }
                loadingReady() {
                  return n(this, void 0, void 0, function* () {
                    this.requireReady(),
                      yield this.afterFrame(),
                      yield this.afterFrame(),
                      yield this.afterFrame(),
                      yield this.waitForResume(),
                      this.sdk.game.gameReady();
                  });
                }
                gameplayStart() {}
                gameplayStop() {}
                loadStorage(e) {
                  return (
                    this.requireReady(),
                    e.map((e) => {
                      var t;
                      return r.includes(e) &&
                        null !== (t = this.values[e]) &&
                        void 0 !== t
                        ? t
                        : null;
                    })
                  );
                }
                saveStorage(e, t) {
                  var a;
                  if ((this.requireReady(), e.length !== t.length))
                    throw new Error("Mismatched storage values");
                  for (let o = 0; o < e.length; o += 1) {
                    const n = e[o],
                      u = t[o];
                    if (r.includes(n))
                      if (n === i) {
                        const e = s.normalizeBestScore(u);
                        if (null === e) continue;
                        const t = Math.max(
                          e,
                          null !== (a = s.normalizeBestScore(this.values[n])) &&
                            void 0 !== a
                            ? a
                            : 0
                        );
                        this.values[n] = String(t);
                      } else this.values[n] = u;
                  }
                  return (this.revision += 1), this.flush();
                }
                deleteStorage(e) {
                  this.requireReady();
                  for (const t of e)
                    r.includes(t) && t !== i && delete this.values[t];
                  return (this.revision += 1), this.flush();
                }
                loadBestScore() {
                  return (
                    this.requireReady(), s.normalizeBestScore(this.values[i])
                  );
                }
                saveBestScore(e, t = !1) {
                  const r = s.normalizeBestScore(e);
                  return null === r
                    ? Promise.resolve()
                    : this.saveStorage([i], [String(r)]);
                }
                submitScore(e) {
                  return n(this, void 0, void 0, function* () {
                    var t, i;
                    this.requireReady();
                    const r = Math.max(
                      null !== (t = s.normalizeBestScore(e)) && void 0 !== t
                        ? t
                        : 0,
                      null !== (i = this.loadBestScore()) && void 0 !== i
                        ? i
                        : 0
                    );
                    Number.isSafeInteger(r) &&
                      (yield this.saveBestScore(r, !0));
                  });
                }
                canShowInterstitial() {
                  var e;
                  return (
                    this.ready &&
                    !this.paused &&
                    Boolean(
                      null === (e = this.sdk) || void 0 === e ? void 0 : e.ads
                    ) &&
                    Date.now() >= this.nextInterstitialAt
                  );
                }
                showInterstitial() {
                  return n(this, void 0, void 0, function* () {
                    if (!this.canShowInterstitial()) return "unavailable";
                    try {
                      return (
                        yield this.sdk.ads.requestInterstitialAd(),
                        (this.nextInterstitialAt = Date.now() + o),
                        "completed"
                      );
                    } catch (e) {
                      return "failed";
                    }
                  });
                }
                isRewardedAvailable() {
                  var e;
                  return (
                    this.ready &&
                    !this.paused &&
                    Boolean(
                      null === (e = this.sdk) || void 0 === e ? void 0 : e.ads
                    )
                  );
                }
                showRewarded() {
                  return n(this, void 0, void 0, function* () {
                    if (!this.isRewardedAvailable()) return "unavailable";
                    try {
                      const e = yield this.sdk.ads.requestRewardedAd(
                        "blocks-web-second-chance"
                      );
                      return (
                        (this.nextInterstitialAt = Date.now() + o),
                        e ? "completed" : "skipped"
                      );
                    } catch (e) {
                      return "failed";
                    }
                  });
                }
                readCloudData(e) {
                  var t;
                  const o = "" === e ? {} : JSON.parse(e);
                  if (!object(o))
                    throw new Error(
                      "Unsupported saved progress; cloud data left untouched"
                    );
                  const n = o[a],
                    u = s.extractLegacyCrazyGamesUnityBestScore(o),
                    l = r.some((e) => "string" == typeof o[e]);
                  if (void 0 !== n) {
                    if (
                      !object(n) ||
                      1 !== n.version ||
                      !object(n.values) ||
                      Object.values(n.values).some((e) => "string" != typeof e)
                    )
                      throw new Error(
                        "Unknown save version; cloud data left untouched"
                      );
                    for (const [e, t] of Object.entries(n.values))
                      this.values[e] = t;
                  } else if (Object.keys(o).length > 0 && null === u && !l)
                    throw new Error(
                      "Unknown legacy progress; cloud data left untouched"
                    );
                  for (const e of r)
                    void 0 === this.values[e] &&
                      "string" == typeof o[e] &&
                      (this.values[e] = o[e]);
                  const d = Math.max(
                    null != u ? u : 0,
                    null !== (t = s.normalizeBestScore(this.values[i])) &&
                      void 0 !== t
                      ? t
                      : 0
                  );
                  d > 0 && (this.values[i] = String(d)), (this.rootData = o);
                }
                requireReady() {
                  if (!this.ready || !this.sdk)
                    throw new Error(
                      "Saved progress has not been safely loaded"
                    );
                }
                flush() {
                  const e = this.writeQueue
                    .catch(() => {})
                    .then(() =>
                      n(this, void 0, void 0, function* () {
                        var e, t;
                        if (
                          (yield this.waitForResume(),
                          this.savedRevision >= this.revision)
                        )
                          return;
                        const r = this.revision,
                          o = Object.assign({}, this.values),
                          n = this.rootData[a],
                          u = Object.assign(Object.assign({}, this.rootData), {
                            [a]: Object.assign(
                              Object.assign({}, object(n) ? n : {}),
                              { version: 1, values: o }
                            ),
                          }),
                          l = JSON.stringify(u);
                        if (2 * l.length > 3145728)
                          throw new Error(
                            "Cloud save exceeds the Playables size limit"
                          );
                        yield this.sdk.game.saveData(l),
                          (this.savedRevision = r);
                        const d = s.normalizeBestScore(o[i]);
                        if (
                          null !== d &&
                          Number.isSafeInteger(d) &&
                          d >
                            (null !== (e = this.sentBestScore) && void 0 !== e
                              ? e
                              : -1)
                        ) {
                          yield this.waitForResume();
                          try {
                            yield null === (t = this.sdk.engagement) ||
                            void 0 === t
                              ? void 0
                              : t.sendScore({ value: d }),
                              (this.sentBestScore = d);
                          } catch (e) {
                            console.warn(
                              "[blocks-web] YouTube score sync failed",
                              e
                            );
                          }
                        }
                      })
                    );
                  return (this.writeQueue = e), e;
                }
                afterFrame() {
                  return "function" == typeof requestAnimationFrame
                    ? new Promise((e) => requestAnimationFrame(() => e()))
                    : Promise.resolve();
                }
                waitForResume() {
                  return this.paused
                    ? new Promise((e) => this.resumeWaiters.push(e))
                    : Promise.resolve();
                }
              }
            );
        },
      }
    );
  }
);
System.register(
  "chunks:///_virtual/BestScoreMigration.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (r) {
    var e, n, t, a;
    return {
      setters: [
        function (r) {
          (e = r.asyncToGenerator),
            (n = r.regeneratorRuntime),
            (t = r.createForOfIteratorHelperLoose);
        },
        function (r) {
          a = r.cclegacy;
        },
      ],
      execute: function () {
        r({
          extractLegacyCrazyGamesUnityBestScore: f,
          extractLegacyUnityBestScore: o,
          extractLegacyUnityBestScoreFromBytes: l,
          extractLegacyUnityNoAdsEndTime: function (r) {
            if ("string" != typeof r || !r.trim()) return null;
            try {
              return s(y(r));
            } catch (r) {
              return null;
            }
          },
          extractLegacyUnityNoAdsEndTimeFromBytes: s,
          loadLegacyUnityIndexedDbBestScore: function () {
            return d.apply(this, arguments);
          },
          loadLegacyUnityIndexedDbProgress: v,
          normalizeBestScore: u,
        }),
          a._RF.push(
            {},
            "b17c9rReCdKipbvybOrVSdB",
            "BestScoreMigration",
            void 0
          );
        var i = 621355968e9;
        function u(r) {
          var e =
            "number" == typeof r
              ? r
              : "string" == typeof r && r.trim()
              ? Number(r)
              : Number.NaN;
          return !Number.isFinite(e) || e < 0 ? null : Math.floor(e);
        }
        function o(r) {
          if ("string" != typeof r || !r.trim()) return null;
          try {
            return l(y(r));
          } catch (r) {
            return null;
          }
        }
        function s(r) {
          try {
            var e = c(r);
            return e
              ? (function (r) {
                  if (null === r || r <= i) return null;
                  var e = Math.floor((r - i) / 1e4);
                  return Number.isFinite(e) ? e : null;
                })(x(e, '"NoAdsEndTime"'))
              : null;
          } catch (r) {
            return null;
          }
        }
        function l(r) {
          try {
            var e = c(r);
            return e ? A(e) : null;
          } catch (r) {}
          return A(r);
        }
        function f(r) {
          var e = r;
          if ("string" == typeof e) {
            var n = e.trim();
            if (!n) return null;
            try {
              e = JSON.parse(n);
            } catch (r) {
              return o(n);
            }
          }
          for (
            var t,
              a = [{ value: e, depth: 0 }],
              i = new WeakSet(),
              s = 0,
              l = null;
            a.length > 0 && s < 1e3;

          ) {
            var f = a.pop();
            if (f && !(f.depth > 8) && m(f.value) && !i.has(f.value)) {
              i.add(f.value), (s += 1);
              for (var c = 0, d = Object.keys(f.value); c < d.length; c++) {
                var v = d[c],
                  h = f.value[v];
                if (b(v)) {
                  var y,
                    A = u(h);
                  if (null !== A) l = Math.max(null != (y = l) ? y : 0, A);
                }
                if ("save_data" === v || v.endsWith("/save_data")) {
                  var x,
                    S = g(m(h) && "contents" in h ? h.contents : h);
                  if (null !== S) l = Math.max(null != (x = l) ? x : 0, S);
                }
                if ("data" === v || "Player_Data" === v || "store" === v) {
                  var w,
                    B = g(h);
                  if (null !== B) l = Math.max(null != (w = l) ? w : 0, B);
                }
                m(h) && a.push({ value: h, depth: f.depth + 1 });
              }
              var U = p(f.value);
              if (U && ("save_data" === (t = U) || t.endsWith("/save_data"))) {
                var E,
                  L,
                  N,
                  k = g(
                    null !=
                      (E = null != (L = f.value.contents) ? L : f.value.value)
                      ? E
                      : f.value.data
                  );
                if (null !== k) l = Math.max(null != (N = l) ? N : 0, k);
              }
            }
          }
          return l;
        }
        function c(r) {
          var e = new U(r);
          if (e.readArrayLength() < 1) return null;
          for (var n = e.readMapLength(), t = 0; t < n; t += 1) {
            var a = e.readString(),
              i = e.readBinary();
            if ("Player_Data" === a) return i;
          }
          return null;
        }
        function d() {
          return (d = e(
            n().mark(function r() {
              return n().wrap(function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (r.next = 2), v();
                    case 2:
                      return r.abrupt("return", r.sent.bestScore);
                    case 3:
                    case "end":
                      return r.stop();
                  }
              }, r);
            })
          )).apply(this, arguments);
        }
        function v() {
          return h.apply(this, arguments);
        }
        function h() {
          return (h = e(
            n().mark(function r() {
              var e, t, a, i, u, o, s, l, f, c, d;
              return n().wrap(
                function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        if ("undefined" != typeof indexedDB) {
                          r.next = 2;
                          break;
                        }
                        return r.abrupt("return", {
                          bestScore: null,
                          noAdsEndTime: null,
                        });
                      case 2:
                        if (((e = indexedDB), (t = []), !e.databases)) {
                          r.next = 13;
                          break;
                        }
                        return (r.prev = 5), (r.next = 8), e.databases();
                      case 8:
                        (t = r.sent), (r.next = 13);
                        break;
                      case 11:
                        (r.prev = 11), (r.t0 = r.catch(5));
                      case 13:
                        (a = Array.from(
                          new Set(
                            ["/idbfs"].concat(
                              t
                                .map(function (r) {
                                  var e;
                                  return null != (e = r.name) ? e : "";
                                })
                                .filter(function (r) {
                                  return r.startsWith("/idbfs/");
                                })
                            )
                          )
                        )),
                          (i = null),
                          (u = null),
                          (o = 0),
                          (s = a);
                      case 17:
                        if (!(o < s.length)) {
                          r.next = 27;
                          break;
                        }
                        return (l = s[o]), (r.next = 21), w(e, l);
                      case 21:
                        null !== (f = r.sent).bestScore &&
                          (i = Math.max(null != (c = i) ? c : 0, f.bestScore)),
                          null !== f.noAdsEndTime &&
                            (u = Math.max(
                              null != (d = u) ? d : 0,
                              f.noAdsEndTime
                            ));
                      case 24:
                        o++, (r.next = 17);
                        break;
                      case 27:
                        return r.abrupt("return", {
                          bestScore: i,
                          noAdsEndTime: u,
                        });
                      case 28:
                      case "end":
                        return r.stop();
                    }
                },
                r,
                null,
                [[5, 11]]
              );
            })
          )).apply(this, arguments);
        }
        function y(r) {
          for (
            var e = globalThis.atob(r.replace(/\s/g, "")),
              n = new Uint8Array(e.length),
              t = 0;
            t < e.length;
            t += 1
          )
            n[t] = e.charCodeAt(t);
          return n;
        }
        function g(r) {
          if ("string" == typeof r) {
            var e = r.trim();
            if (!e) return null;
            try {
              var n = JSON.parse(e);
              if (n !== r) {
                var t = f(n);
                if (null !== t) return t;
              }
            } catch (r) {}
            return o(e);
          }
          var a = B(r);
          return a ? l(a) : null;
        }
        function b(r) {
          var e = r.toLowerCase().replace(/[^a-z0-9]/g, "");
          return (
            "maxscore" === e || "bestscore" === e || "blockswebbestscore" === e
          );
        }
        function p(r) {
          var e,
            n,
            t = null != (e = null != (n = r.key) ? n : r.path) ? e : r.name;
          return "string" == typeof t ? t : null;
        }
        function m(r) {
          return "object" == typeof r && null !== r;
        }
        function A(r) {
          var e = x(r, '"MaxScore"');
          return null !== e && Number.isSafeInteger(e) ? u(e) : null;
        }
        function x(r, e) {
          for (
            var n = Array.from(e, function (r) {
                return r.charCodeAt(0);
              }),
              t = 0;
            t <= r.length - n.length;
            t += 1
          ) {
            for (var a = !0, i = 0; i < n.length; i += 1)
              if (r[t + i] !== n[i]) {
                a = !1;
                break;
              }
            if (a) {
              for (var u = t + n.length; S(r[u]); ) u += 1;
              if (58 === r[u]) {
                for (u += 1; S(r[u]); ) u += 1;
                for (var o = u; r[u] >= 48 && r[u] <= 57; ) u += 1;
                if (u === o) return null;
                for (var s = 0, l = o; l < u; l += 1)
                  if (((s = 10 * s + r[l] - 48), !Number.isFinite(s)))
                    return null;
                return s;
              }
            }
          }
          return null;
        }
        function S(r) {
          return 32 === r || 9 === r || 10 === r || 13 === r;
        }
        function w(r, e) {
          return new Promise(function (n) {
            var t = !1,
              a = function (r) {
                t || ((t = !0), n(r));
              },
              i = r.open(e),
              u = { bestScore: null, noAdsEndTime: null };
            (i.onblocked = function () {
              return a(u);
            }),
              (i.onupgradeneeded = function () {
                var r;
                null == (r = i.transaction) || r.abort();
              }),
              (i.onerror = function () {
                return a(u);
              }),
              (i.onsuccess = function () {
                var r = i.result;
                if (!r.objectStoreNames.contains("FILE_DATA"))
                  return r.close(), void a(u);
                var e = null,
                  n = null,
                  t = r.transaction("FILE_DATA", "readonly");
                (t.onerror = function () {
                  r.close(), a(u);
                }),
                  (t.oncomplete = function () {
                    r.close(), a({ bestScore: e, noAdsEndTime: n });
                  });
                var o = t.objectStore("FILE_DATA").openCursor();
                (o.onerror = function () {
                  return a(u);
                }),
                  (o.onsuccess = function () {
                    var r = o.result;
                    if (r) {
                      var t = String(r.key);
                      if ("save_data" === t || t.endsWith("/save_data")) {
                        var a,
                          i = B(null == (a = r.value) ? void 0 : a.contents);
                        if (i) {
                          var u,
                            f = l(i);
                          if (null !== f)
                            e = Math.max(null != (u = e) ? u : 0, f);
                          var c,
                            d = s(i);
                          if (null !== d)
                            n = Math.max(null != (c = n) ? c : 0, d);
                        }
                      }
                      r.continue();
                    }
                  });
              });
          });
        }
        function B(r) {
          if (r instanceof Uint8Array) return r;
          if (r instanceof ArrayBuffer) return new Uint8Array(r);
          if (ArrayBuffer.isView(r))
            return new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
          if (
            Array.isArray(r) &&
            r.every(function (r) {
              return Number.isInteger(r);
            })
          )
            return Uint8Array.from(r);
          if (m(r)) {
            if (Array.isArray(r.data)) return B(r.data);
            var e = Object.keys(r)
              .filter(function (r) {
                return /^\d+$/.test(r);
              })
              .sort(function (r, e) {
                return Number(r) - Number(e);
              });
            if (
              e.length > 0 &&
              e.every(function (e) {
                return Number.isInteger(r[e]);
              })
            )
              return Uint8Array.from(
                e.map(function (e) {
                  return r[e];
                })
              );
          }
          return null;
        }
        var U = (function () {
          function r(r) {
            (this.offset = 0), (this.bytes = r);
          }
          var e = r.prototype;
          return (
            (e.readArrayLength = function () {
              var r = this.readByte();
              if (144 == (240 & r)) return 15 & r;
              if (220 === r) return this.readUnsigned(2);
              if (221 === r) return this.readUnsigned(4);
              throw new Error("Invalid legacy save array");
            }),
            (e.readMapLength = function () {
              var r = this.readByte();
              if (128 == (240 & r)) return 15 & r;
              if (222 === r) return this.readUnsigned(2);
              if (223 === r) return this.readUnsigned(4);
              throw new Error("Invalid legacy save map");
            }),
            (e.readString = function () {
              var r,
                e = this.readByte();
              if (160 == (224 & e)) r = 31 & e;
              else if (217 === e) r = this.readUnsigned(1);
              else if (218 === e) r = this.readUnsigned(2);
              else {
                if (219 !== e) throw new Error("Invalid legacy save string");
                r = this.readUnsigned(4);
              }
              for (
                var n, a = this.readBytes(r), i = "", u = t(a);
                !(n = u()).done;

              ) {
                var o = n.value;
                i += String.fromCharCode(o);
              }
              return i;
            }),
            (e.readBinary = function () {
              var r = this.readByte();
              if (196 === r) return this.readBytes(this.readUnsigned(1));
              if (197 === r) return this.readBytes(this.readUnsigned(2));
              if (198 === r) return this.readBytes(this.readUnsigned(4));
              throw new Error("Invalid legacy save binary data");
            }),
            (e.readUnsigned = function (r) {
              for (var e = 0, n = 0; n < r; n += 1)
                e = 256 * e + this.readByte();
              if (!Number.isSafeInteger(e))
                throw new Error("Legacy save length is too large");
              return e;
            }),
            (e.readByte = function () {
              if (this.offset >= this.bytes.length)
                throw new Error("Unexpected end of legacy save");
              var r = this.bytes[this.offset];
              return (this.offset += 1), r;
            }),
            (e.readBytes = function (r) {
              if (r < 0 || this.offset + r > this.bytes.length)
                throw new Error("Unexpected end of legacy save");
              var e = this.bytes.subarray(this.offset, this.offset + r);
              return (this.offset += r), e;
            }),
            r
          );
        })();
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BoardAppearance.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    var t, r, i, a, s, o, n, h, c;
    return {
      setters: [
        function (e) {
          t = e.createForOfIteratorHelperLoose;
        },
        function (e) {
          (r = e.cclegacy),
            (i = e.Material),
            (a = e.Vec4),
            (s = e.Texture2D),
            (o = e.ImageAsset),
            (n = e.SpriteFrame),
            (h = e.Rect),
            (c = e.Size);
        },
      ],
      execute: function () {
        r._RF.push({}, "a89e4GyX51GyqcXcLz3psch", "BoardAppearance", void 0);
        var u = [
            [3.1467, 2.3803, 2.6142],
            [3.2031, 3.384, 3.6507],
            [5.0027, 2.6046, 1.4582],
            [0.4031, 4.1472, 1.8319],
            [5.1416, 3.978, 2.9916],
            [0.609, 4.9349, 1.5314],
            [3.2216, 3.6513, 1.0237],
          ],
          d = [1, 3, 4];
        e(
          "BoardAppearance",
          (function () {
            function e(e) {
              (this.background = void 0),
                (this.texture = new s()),
                (this.image = void 0),
                (this.materials = new Map()),
                (this.smoothingEffect = e);
              for (var t = 64, r = new Uint8Array(1024), i = 0; i < t; i += 1)
                for (var a = i / 63, u = 0; u < 4; u += 1) {
                  var d = 4 * (4 * i + u);
                  (r[d] = Math.round(46 + 7 * a)),
                    (r[d + 1] = Math.round(79 + 28 * a)),
                    (r[d + 2] = Math.round(141 + 36 * a)),
                    (r[d + 3] = 255);
                }
              (this.image = new o({
                _data: r,
                width: 4,
                height: t,
                format: s.PixelFormat.RGBA8888,
                _compressed: !1,
              })),
                (this.texture.image = this.image),
                this.texture.setFilters(s.Filter.LINEAR, s.Filter.LINEAR),
                (this.background = new n()),
                (this.background.texture = this.texture),
                (this.background.rect = new h(0.5, 0.5, 3, 63)),
                (this.background.originalSize = new c(3, 63)),
                (this.background.packable = !1);
            }
            var r = e.prototype;
            return (
              (r.materialFor = function (e, t, r) {
                var s = e.texture,
                  o = e.rect,
                  n = t < 0,
                  h = n ? d : u[t],
                  c = [
                    s.width,
                    s.height,
                    o.x,
                    o.y,
                    o.width,
                    o.height,
                    t,
                    r,
                  ].join(":"),
                  l = this.materials.get(c);
                return (
                  l ||
                    ((l = new i()).initialize({
                      effectAsset: this.smoothingEffect,
                      defines: {
                        USE_TEXTURE: !0,
                        CC_USE_EMBEDDED_ALPHA: !1,
                        IS_GRAY: r,
                      },
                    }),
                    l.setProperty(
                      "sourceSize",
                      new a(s.width, s.height, o.x, o.y)
                    ),
                    l.setProperty(
                      "tileData",
                      new a(o.width, o.height, n ? 8 : 4, n ? 2 : 14)
                    ),
                    l.setProperty(
                      "patternColor",
                      new a(h[0] / 255, h[1] / 255, h[2] / 255, 0)
                    ),
                    l.setProperty(
                      "surfaceTint",
                      n ? new a(0.76, 0.64, 0.73, 1) : new a(1, 1, 1, 1)
                    ),
                    l.setProperty(
                      "colorGrade",
                      n ? new a(1, 1, 1, 0) : new a(1.12, 1.04, 1.1, 0)
                    ),
                    this.materials.set(c, l)),
                  l
                );
              }),
              (r.destroy = function () {
                for (var e, r = t(this.materials.values()); !(e = r()).done; ) {
                  e.value.destroy();
                }
                this.materials.clear(),
                  this.background.destroy(),
                  this.texture.destroy(),
                  this.image.destroy();
              }),
              e
            );
          })()
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BoardModel.ts",
  ["./ClassicDealer.ts"],
  function (e, t) {
    "use strict";
    var s, r, n, o, i, l, a, c;
    function defineShape(e, t, s) {
      const r = s.map(([e, t]) => ({ x: e, y: t })),
        n = Math.max(...r.map((e) => e.x)) + 1,
        o = Math.max(...r.map((e) => e.y)) + 1,
        i = new Array(o).fill(0),
        l = new Array(n).fill(0);
      for (const e of r) (i[e.y] += 1), (l[e.x] += 1);
      return {
        id: e,
        group: t,
        cells: r,
        width: n,
        height: o,
        rowFillCounts: i,
        columnFillCounts: l,
      };
    }
    return (
      t && t.id,
      {
        setters: [
          function (e) {
            s = e;
          },
        ],
        execute: function () {
          (r = [
            defineShape("Iv3", "line", [
              [0, 0],
              [0, 1],
              [0, 2],
            ]),
            defineShape("Ig3", "line", [
              [0, 0],
              [1, 0],
              [2, 0],
            ]),
            defineShape("Iv4", "line", [
              [0, 0],
              [0, 1],
              [0, 2],
              [0, 3],
            ]),
            defineShape("Ig4", "line", [
              [0, 0],
              [1, 0],
              [2, 0],
              [3, 0],
            ]),
            defineShape("Iv5", "line", [
              [0, 0],
              [0, 1],
              [0, 2],
              [0, 3],
              [0, 4],
            ]),
            defineShape("Ig5", "line", [
              [0, 0],
              [1, 0],
              [2, 0],
              [3, 0],
              [4, 0],
            ]),
            defineShape("J12", "corner4", [
              [0, 0],
              [1, 0],
              [2, 0],
              [0, 1],
            ]),
            defineShape("L6", "corner4", [
              [0, 0],
              [0, 1],
              [1, 1],
              [2, 1],
            ]),
            defineShape("J3", "corner4", [
              [0, 0],
              [0, 1],
              [0, 2],
              [1, 2],
            ]),
            defineShape("L9", "corner4", [
              [1, 0],
              [1, 1],
              [1, 2],
              [0, 2],
            ]),
            defineShape("L12", "corner4", [
              [0, 0],
              [1, 0],
              [2, 0],
              [2, 1],
            ]),
            defineShape("J6", "corner4", [
              [2, 0],
              [0, 1],
              [1, 1],
              [2, 1],
            ]),
            defineShape("L3", "corner4", [
              [0, 0],
              [1, 0],
              [0, 1],
              [0, 2],
            ]),
            defineShape("J9", "corner4", [
              [0, 0],
              [1, 0],
              [1, 1],
              [1, 2],
            ]),
            defineShape("LL9", "corner4", [
              [2, 0],
              [2, 1],
              [0, 2],
              [1, 2],
              [2, 2],
            ]),
            defineShape("LL6", "corner4", [
              [0, 0],
              [0, 1],
              [0, 2],
              [1, 2],
              [2, 2],
            ]),
            defineShape("LL12", "corner4", [
              [0, 0],
              [1, 0],
              [2, 0],
              [2, 1],
              [2, 2],
            ]),
            defineShape("LL3", "corner4", [
              [0, 0],
              [1, 0],
              [2, 0],
              [0, 1],
              [0, 2],
            ]),
            defineShape("Ov", "rectangle", [
              [0, 0],
              [1, 0],
              [0, 1],
              [1, 1],
              [0, 2],
              [1, 2],
            ]),
            defineShape("Og", "rectangle", [
              [0, 0],
              [1, 0],
              [2, 0],
              [0, 1],
              [1, 1],
              [2, 1],
            ]),
            defineShape("O4", "rectangle", [
              [0, 0],
              [1, 0],
              [0, 1],
              [1, 1],
            ]),
            defineShape("O9", "rectangle", [
              [0, 0],
              [1, 0],
              [2, 0],
              [0, 1],
              [1, 1],
              [2, 1],
              [0, 2],
              [1, 2],
              [2, 2],
            ]),
            defineShape("T12", "tee", [
              [0, 0],
              [1, 0],
              [2, 0],
              [1, 1],
            ]),
            defineShape("T6", "tee", [
              [1, 0],
              [0, 1],
              [1, 1],
              [2, 1],
            ]),
            defineShape("T3", "tee", [
              [0, 0],
              [0, 1],
              [1, 1],
              [0, 2],
            ]),
            defineShape("T9", "tee", [
              [1, 0],
              [0, 1],
              [1, 1],
              [1, 2],
            ]),
            defineShape("/2", "diagonal", [
              [0, 0],
              [1, 1],
            ]),
            defineShape("\\2", "diagonal", [
              [1, 0],
              [0, 1],
            ]),
            defineShape("/3", "diagonal", [
              [0, 0],
              [1, 1],
              [2, 2],
            ]),
            defineShape("\\3", "diagonal", [
              [2, 0],
              [1, 1],
              [0, 2],
            ]),
            defineShape("r9", "corner3", [
              [1, 0],
              [0, 1],
              [1, 1],
            ]),
            defineShape("r3", "corner3", [
              [0, 0],
              [1, 0],
              [0, 1],
            ]),
            defineShape("r12", "corner3", [
              [0, 0],
              [1, 0],
              [1, 1],
            ]),
            defineShape("r6", "corner3", [
              [0, 0],
              [0, 1],
              [1, 1],
            ]),
            defineShape("Sv", "zigzag", [
              [0, 0],
              [1, 0],
              [1, 1],
              [2, 1],
            ]),
            defineShape("Zv", "zigzag", [
              [1, 0],
              [2, 0],
              [0, 1],
              [1, 1],
            ]),
            defineShape("Sg", "zigzag", [
              [1, 0],
              [0, 1],
              [1, 1],
              [0, 2],
            ]),
            defineShape("Zg", "zigzag", [
              [0, 0],
              [0, 1],
              [1, 1],
              [1, 2],
            ]),
          ]),
            (n = defineShape("Iv1", "single", [[0, 0]])),
            (o = [
              ...r,
              defineShape("Iv2", "line", [
                [0, 0],
                [0, 1],
              ]),
              defineShape("Ig2", "line", [
                [0, 0],
                [1, 0],
              ]),
              n,
            ]),
            (i = [
              "Iv5:10,Ig5:10,Ov:60,Og:60,O4:15,Iv4:30,Ig4:30,O9:30",
              "Iv5:10,Ig5:10,Ov:60,Og:60,O4:15,Iv4:30,Ig4:30,O9:30",
              "Iv5:10,Ig5:10,Ov:60,Og:60,O4:15,Iv4:30,Ig4:30,O9:30",
              "Iv5:10,Ig5:10,Ov:60,Og:60,O4:15,Iv4:30,Ig4:30,O9:30",
              "Iv5:10,Ig5:10,Ov:60,Og:60,O4:15,Iv4:30,Ig4:30,O9:30",
              "Iv5:10,Ig5:10,Ov:60,Og:60,O4:15,Iv4:30,Ig4:30,O9:30",
              "Iv5:20,J12:25,J6:25,L6:25,L12:25,LL9:60,LL12:60,Ov:60,Og:60,T3:30,T9:30,Iv4:30,Ig4:30,O9:30",
              "Ig5:20,J3:25,J9:25,L9:25,L3:25,LL6:60,LL3:60,Ov:60,Og:60,T3:30,T9:30,Iv4:30,Ig4:30,O9:30",
              "Iv5:20,J12:25,J6:25,L6:25,L12:25,LL9:60,LL12:60,Ov:60,Og:60,T3:30,T9:30,Iv4:30,Ig4:30,O9:30",
              "Ig5:20,J3:25,J9:25,L9:25,L3:25,LL6:60,LL3:60,Ov:60,Og:60,T3:30,T9:30,Iv4:30,Ig4:30,O9:30",
              "Iv5:20,J12:25,J6:25,L6:25,L12:25,LL9:60,LL12:60,Ov:60,Og:60,T3:30,T9:30,r9:20,Iv4:30,Ig4:30",
              "Ig5:20,J3:25,J9:25,L9:25,L3:25,LL6:60,LL3:60,Ov:60,Og:60,T12:30,T6:30,r3:20,Iv4:30,Ig4:30",
              "Iv5:20,J12:25,J6:25,L6:25,L12:25,LL9:60,LL12:60,Ov:60,Og:60,T12:30,T6:30,r12:20,Iv4:30,Ig4:30",
              "Ig5:20,J3:25,J9:25,L9:25,L3:25,LL6:60,LL3:60,Ov:60,Og:60,T12:30,T6:30,r6:20,Iv4:30,Ig4:30",
              "Iv5:20,J12:25,J6:25,L6:25,L12:25,LL9:60,LL12:60,Iv3:5,Ig3:5,Ov:60,Og:60,T12:30,T6:30",
              "Ig5:20,J3:25,J9:25,L9:25,L3:25,LL6:60,LL3:60,Iv3:5,Ig3:5,Ov:60,Og:60,T12:30,T6:30",
              "J12:25,J6:25,L6:25,L12:25,LL9:60,LL12:60,Iv3:5,Ig3:5,Ov:60,Og:60,T12:30,T6:30,r9:20",
              "Iv5:60,J3:25,J9:25,L9:25,L3:25,/2:10,r3:20,Iv4:30,Ig4:30,O9:30,Sv:30,Zv:30,Sg:30,Zg:30",
              "Ig5:60,J12:25,J6:25,L6:25,L12:25,\\2:10,r12:20,Iv4:30,Ig4:30,O9:30,Sv:30,Zv:30,Sg:30,Zg:30",
              "Iv5:60,J3:25,J9:25,L9:25,L3:25,/2:10,r6:20,Iv4:30,Ig4:30,O9:30,Sv:30,Zv:30,Sg:30,Zg:30",
              "Ig5:20,LL9:60,LL6:60,LL12:60,LL3:60,Iv3:5,Ig3:5,T6:30,T9:30,O9:30,Sv:30,Zv:30,Sg:30,Zg:30",
              "Iv5:20,LL9:60,LL6:60,LL12:60,LL3:60,Iv3:5,Ig3:5,T12:30,T3:30,O9:30,Sv:30,Zv:30,Sg:30,Zg:30",
              "Ig5:20,LL9:60,LL6:60,LL12:60,LL3:60,Og:60,T6:30,T9:30,/2:10,O9:30,Sv:30,Zv:30,Sg:30,Zg:30",
              "Iv5:20,LL9:60,LL6:60,LL12:60,LL3:60,Ov:60,T12:30,T3:30,\\2:10,O9:30,Sv:30,Zv:30,Sg:30,Zg:30",
              "Ig5:20,LL9:60,LL6:60,LL12:60,LL3:60,Og:60,T6:30,T9:30,/2:10,O9:30,Sv:30,Zv:30,Sg:30,Zg:30",
              "Iv5:20,LL9:60,LL6:60,LL12:60,LL3:60,Ov:60,O4:60,T12:30,T3:30,O9:30,Sv:30,Zv:30,Sg:30,Zg:30",
              "Ig5:20,LL9:60,LL6:60,LL12:60,LL3:60,Og:60,O4:60,T6:30,T9:30,O9:30,Sv:30,Zv:30,Sg:30,Zg:30",
              "Iv5:20,Ov:60,T12:30,T3:30,\\2:10,r9:20,r3:20,r12:20,r6:20,O9:30,Sv:30,Zv:30,Sg:30,Zg:30",
              "Ig5:20,J12:25,J3:25,J6:25,J9:25,L6:25,L9:25,L12:25,L3:25,Og:60,T6:30,T9:30,/2:10,O9:30",
              "Iv5:20,J12:25,J3:25,J6:25,J9:25,L6:25,L9:25,L12:25,L3:25,Ov:60,T12:30,T3:30,\\2:10,O9:30",
              "Ig5:20,J12:25,J3:25,J6:25,J9:25,L6:25,L9:25,L12:25,L3:25,T6:30,T9:30,Iv4:30,Ig4:30,O9:30",
              "Iv5:20,J12:25,J3:25,J6:25,J9:25,L6:25,L9:25,L12:25,L3:25,T12:30,T3:30,Iv4:30,Ig4:30,O9:30",
              "Ig5:20,Ig3:15,Ov:15,O4:60,/2:10,r3:20,Iv4:30,Ig4:30,O9:30,Sv:30,Zv:30,Sg:30,Zg:30,/3:5",
              "Iv5:20,Iv3:15,Og:15,O4:60,\\2:10,r12:20,Iv4:30,Ig4:30,O9:30,Sv:30,Zv:30,Sg:30,Zg:30,\\3:5",
              "Ig5:20,Ig3:15,Ov:15,O4:60,/2:10,r6:20,Iv4:30,Ig4:30,O9:30,Sv:30,Zv:30,Sg:30,Zg:30,/3:5",
              "Iv5:20,Og:15,T6:30,T9:30,\\2:10,r9:20,Iv4:30,Ig4:30,O9:30,Sv:30,Zv:30,Sg:30,Zg:30,/3:5",
              "Iv5:20,Ig5:20,LL9:60,LL6:60,LL12:60,LL3:60,Iv3:5,Ig3:5,T12:30,T3:30,Sv:30,Zv:30,Sg:30,Zg:30,\\3:5",
              "Iv5:20,Ig5:20,LL9:60,LL6:60,LL12:60,LL3:60,Iv3:5,Ig3:5,T6:30,T9:30,Sv:30,Zv:30,Sg:30,Zg:30,/3:5",
              "Iv5:20,Ig5:20,LL9:60,LL6:60,LL12:60,LL3:60,Iv3:5,Ig3:5,T12:30,T3:30,Sv:30,Zv:30,Sg:30,Zg:30,\\3:5",
              "Iv5:20,Ig5:20,LL9:60,LL6:60,LL12:60,LL3:60,Iv3:5,Ig3:5,T6:30,T9:30,Sv:30,Zv:30,Sg:30,Zg:30,/3:5",
            ].map((e, t) =>
              e.split(",").map((e) => {
                const s = e.lastIndexOf(":"),
                  n = e.slice(0, s),
                  o = Number(e.slice(s + 1)),
                  i = r.find((e) => e.id === n);
                if (!i || !Number.isFinite(o) || o <= 0)
                  throw new Error(`Invalid Yandex figure pool ${t + 1}: ${e}`);
                return { shape: i, weight: o };
              })
            )),
            (l = [
              "F",
              "F",
              "S",
              "S",
              "S",
              "X",
              "X",
              "X",
              "S",
              "S",
              "S",
              "S",
              "S",
              "S",
              "S",
              "S",
              "X",
              "X",
              "S",
              "F",
              "X",
              "X",
              "X",
              "S",
              "S",
              "X",
              "S",
              "S",
              "S",
              "X",
              "X",
              "X",
              "S",
              "S",
              "S",
              "S",
              "S",
              "X",
              "X",
              "X",
            ]),
            (a = ["X", "F", "F", "S", "S", "X"]),
            e(
              "BoardModel",
              (c = class BoardModel {
                configureClassicGeneration(e, t) {
                  (this.classicEnabled = e), this.classicDealer.setRecord(t);
                }
                get classicGenerationReport() {
                  return this.classicEnabled ? this.classicDealer.report : null;
                }
                get hasMeaningfulClassicProgress() {
                  return (
                    this.classicEnabled && this.classicDealer.state.placed >= 12
                  );
                }
                pauseClassicGeneration(e, t, s = Date.now(), r = !1) {
                  this.classicEnabled && this.classicDealer.pause(e, t, s, r);
                }
                restoreClassicClock(e, t = Date.now()) {
                  this.classicEnabled &&
                    this.classicRestored &&
                    Number.isFinite(e) &&
                    this.classicDealer.skipInactive(Math.max(0, t - e), !0);
                }
                constructor() {
                  (this.cells = new Int8Array(
                    BoardModel.SIZE * BoardModel.SIZE
                  )),
                    (this.score = 0),
                    (this.comboCount = 0),
                    (this.movesWithoutClear = 0),
                    (this.generatedSetCount = 0),
                    (this.forcedScenarios = []),
                    (this.classicEnabled = !1),
                    (this.classicRestored = !1),
                    (this.classicDealer = new s.ClassicDealer()),
                    this.reset();
                }
                reset() {
                  this.classicDealer.reset(this.score),
                    (this.classicRestored = !1),
                    this.cells.fill(-1),
                    (this.score = 0),
                    (this.comboCount = 0),
                    (this.movesWithoutClear = 0),
                    (this.generatedSetCount = 0),
                    (this.forcedScenarios = []);
                }
                createSnapshot() {
                  return Object.assign(
                    Object.assign(
                      {
                        cells: Array.from(this.cells),
                        score: this.score,
                        comboCount: this.comboCount,
                        movesWithoutClear: this.movesWithoutClear,
                        generatedSetCount: this.generatedSetCount,
                      },
                      this.classicEnabled
                        ? { classicGeneration: this.classicDealer.snapshot() }
                        : {}
                    ),
                    this.forcedScenarios.length > 0
                      ? { forcedScenarios: this.forcedScenarios.slice() }
                      : {}
                  );
                }
                get currentLevel() {
                  return this.generatedSetCount;
                }
                restoreSnapshot(e) {
                  var t, s, r;
                  if (!e || "object" != typeof e) return !1;
                  const n = e,
                    o = null !== (t = n.comboCount) && void 0 !== t ? t : 0,
                    i =
                      null !== (s = n.movesWithoutClear) && void 0 !== s
                        ? s
                        : 0,
                    l =
                      null !== (r = n.generatedSetCount) && void 0 !== r
                        ? r
                        : 0;
                  return !(
                    !Array.isArray(n.cells) ||
                    n.cells.length !== this.cells.length ||
                    !Number.isInteger(n.score) ||
                    n.score < 0 ||
                    !Number.isInteger(o) ||
                    o < 0 ||
                    !Number.isInteger(i) ||
                    i < 0 ||
                    i > 1 ||
                    !Number.isInteger(l) ||
                    l < 0 ||
                    !n.cells.every(
                      (e) =>
                        Number.isInteger(e) &&
                        e >= -1 &&
                        e < BoardModel.NORMAL_COLOR_COUNT
                    ) ||
                    (this.cells.set(n.cells),
                    (this.score = n.score),
                    (this.comboCount = o),
                    (this.movesWithoutClear = this.comboCount > 0 ? i : 0),
                    (this.generatedSetCount = l),
                    this.classicEnabled &&
                      ((this.classicRestored = this.classicDealer.restore(
                        n.classicGeneration
                      )),
                      this.classicRestored ||
                        (this.classicDealer.reset(0),
                        (this.classicDealer.state.deals =
                          this.generatedSetCount))),
                    (this.forcedScenarios =
                      Array.isArray(n.forcedScenarios) &&
                      n.forcedScenarios.length <= a.length &&
                      n.forcedScenarios.every(
                        (e) => "F" === e || "S" === e || "X" === e
                      )
                        ? n.forcedScenarios.slice()
                        : []),
                    0)
                  );
                }
                get(e, t) {
                  return this.cells[this.index(e, t)];
                }
                canPlace(e, t, s) {
                  for (const r of e.cells) {
                    const e = t + r.x,
                      n = s + r.y;
                    if (!this.isInside(e, n) || -1 !== this.get(e, n))
                      return !1;
                  }
                  return !0;
                }
                completedLinesForPlacement(e, t, s) {
                  if (!this.canPlace(e, t, s)) return { rows: [], columns: [] };
                  const r = new Set(),
                    n = new Set(),
                    o = new Set();
                  for (const i of e.cells) {
                    const e = t + i.x,
                      l = s + i.y;
                    r.add(this.index(e, l)), n.add(l), o.add(e);
                  }
                  return {
                    rows: Array.from(n)
                      .filter((e) => {
                        for (let t = 0; t < BoardModel.SIZE; t += 1)
                          if (-1 === this.get(t, e) && !r.has(this.index(t, e)))
                            return !1;
                        return !0;
                      })
                      .sort((e, t) => e - t),
                    columns: Array.from(o)
                      .filter((e) => {
                        for (let t = 0; t < BoardModel.SIZE; t += 1)
                          if (-1 === this.get(e, t) && !r.has(this.index(e, t)))
                            return !1;
                        return !0;
                      })
                      .sort((e, t) => e - t),
                  };
                }
                place(e, t, s, r, n = Date.now()) {
                  if (!this.canPlace(e, t, s))
                    return {
                      placed: !1,
                      clearedRows: [],
                      clearedColumns: [],
                      pieceScore: 0,
                      lineScore: 0,
                      scoreDelta: 0,
                      comboCount: this.comboCount,
                      achievement: null,
                    };
                  for (const r of e.cells)
                    this.cells[this.index(t + r.x, s + r.y)] = e.color;
                  const o = [],
                    i = [];
                  for (let e = 0; e < BoardModel.SIZE; e += 1)
                    this.isRowFull(e) && o.push(e);
                  for (let e = 0; e < BoardModel.SIZE; e += 1)
                    this.isColumnFull(e) && i.push(e);
                  for (const e of o)
                    for (let t = 0; t < BoardModel.SIZE; t += 1)
                      this.cells[this.index(t, e)] = -1;
                  for (const e of i)
                    for (let t = 0; t < BoardModel.SIZE; t += 1)
                      this.cells[this.index(e, t)] = -1;
                  const l = o.length + i.length,
                    a = e.cells.length;
                  let c = 0,
                    h = null;
                  l > 0
                    ? ((this.comboCount += l),
                      (this.movesWithoutClear = 0),
                      (c = this.lineReward(l) * this.comboCount),
                      (h = this.lineAchievement(l)))
                    : this.comboCount > 0 &&
                      ((this.movesWithoutClear += 1),
                      this.movesWithoutClear >= 2 &&
                        ((this.comboCount = 0), (this.movesWithoutClear = 0)));
                  const d = a + c;
                  return (
                    (this.score += d),
                    this.classicEnabled && this.classicDealer.placed(r, l, n),
                    {
                      placed: !0,
                      clearedRows: o,
                      clearedColumns: i,
                      pieceScore: a,
                      lineScore: c,
                      scoreDelta: d,
                      comboCount: this.comboCount,
                      achievement: h,
                    }
                  );
                }
                hasAnyMove(e) {
                  for (const t of e)
                    for (let e = 0; e < BoardModel.SIZE; e += 1)
                      for (let s = 0; s < BoardModel.SIZE; s += 1)
                        if (this.canPlace(t, s, e)) return !0;
                  return !1;
                }
                isUniqueBestMove(e, t, s, r) {
                  if (r.length < 3) return !1;
                  const n = this.pieceShapeKey(e),
                    o = new Map();
                  for (const e of r) {
                    const t = this.pieceShapeKey(e);
                    if (o.has(t)) continue;
                    const s = Math.max(...e.cells.map((e) => e.x)) + 1,
                      r = Math.max(...e.cells.map((e) => e.y)) + 1,
                      n = new Array(r).fill(0),
                      i = new Array(s).fill(0);
                    for (const t of e.cells) (n[t.y] += 1), (i[t.x] += 1);
                    o.set(t, {
                      id: t,
                      group: "active",
                      cells: e.cells,
                      width: s,
                      height: r,
                      rowFillCounts: n,
                      columnFillCounts: i,
                    });
                  }
                  const i = this.evaluateMoves(
                    new Int8Array(this.cells),
                    Array.from(o.values())
                  );
                  if (i.length < 2) return !1;
                  const l = i[i.length - 1],
                    a = i[i.length - 2];
                  return (
                    l.potential !== a.potential &&
                    l.shape.id === n &&
                    l.originX === t &&
                    l.originY === s
                  );
                }
                createRandomPiece(e = Math.random) {
                  const t = this.currentYandexPool(),
                    s = t.map((e) => e.shape),
                    r = this.pickWeightedShape(s, t, e);
                  return {
                    cells: r.cells,
                    color: Math.floor(e() * BoardModel.NORMAL_COLOR_COUNT),
                    shapeId: r.id,
                  };
                }
                createPieceSet(e = 3, t = Math.random, s = Date.now()) {
                  if (e <= 0) return [];
                  if (this.classicEnabled && 3 === e) {
                    const e = this.classicDealer.generate(
                      this.cells,
                      o,
                      this.score,
                      this.comboCount,
                      t,
                      s
                    );
                    return (
                      e.length && (this.generatedSetCount += 1),
                      e.map((e) => ({
                        cells: e.cells,
                        shapeId: e.id,
                        color: Math.floor(t() * BoardModel.NORMAL_COLOR_COUNT),
                      }))
                    );
                  }
                  const r = this.currentYandexPool(),
                    n = this.currentYandexScenario(),
                    i = l[this.generatedSetCount % l.length];
                  let a;
                  switch (
                    (this.forcedScenarios.length > 0 &&
                      (this.forcedScenarios.shift(),
                      n === i && (this.forcedScenarios = [])),
                    n)
                  ) {
                    case "F":
                      a = this.generateFriendly(e, r, t);
                      break;
                    case "S":
                      a = this.generateSkillful(e, r, t);
                      break;
                    case "X":
                      a = this.generateObstructive(e, r, t);
                  }
                  return (
                    this.fillWithPlayableShapes(a, e, r, t),
                    "F" === n && this.shuffle(a, t),
                    (this.generatedSetCount += 1),
                    a.map((e) => ({
                      cells: e.cells,
                      color: Math.floor(t() * BoardModel.NORMAL_COLOR_COUNT),
                      shapeId: e.id,
                    }))
                  );
                }
                createRescuePieceSet(e = Math.random) {
                  const t = this.currentYandexPool(),
                    s = this.selectBestMove(
                      new Int8Array(this.cells),
                      t,
                      [],
                      e
                    ),
                    r = n.cells,
                    createSingle = () => ({
                      cells: r,
                      color: Math.floor(e() * BoardModel.NORMAL_COLOR_COUNT),
                      shapeId: "Iv1",
                    }),
                    o = s
                      ? {
                          cells: s.move.shape.cells,
                          color: Math.floor(
                            e() * BoardModel.NORMAL_COLOR_COUNT
                          ),
                          shapeId: s.move.shape.id,
                        }
                      : createSingle();
                  return (
                    (this.generatedSetCount += 1),
                    (this.forcedScenarios = a.slice()),
                    this.classicEnabled && this.classicDealer.rescue(),
                    [createSingle(), o, createSingle()]
                  );
                }
                index(e, t) {
                  return t * BoardModel.SIZE + e;
                }
                isInside(e, t) {
                  return (
                    e >= 0 &&
                    t >= 0 &&
                    e < BoardModel.SIZE &&
                    t < BoardModel.SIZE
                  );
                }
                currentYandexPool() {
                  return i[Math.min(this.generatedSetCount, i.length - 1)];
                }
                currentYandexScenario() {
                  var e;
                  return null !== (e = this.forcedScenarios[0]) && void 0 !== e
                    ? e
                    : l[this.generatedSetCount % l.length];
                }
                generateFriendly(e, t, s) {
                  const r = new Int8Array(this.cells),
                    n = [];
                  let o;
                  for (; n.length < e; ) {
                    const e = this.selectBestMove(r, t, n, s, o);
                    if (!e) break;
                    (o = e.useBest),
                      n.push(e.move.shape),
                      this.applyEvaluatedMove(r, e.move);
                  }
                  return n;
                }
                generateSkillful(e, t, s) {
                  const r = new Int8Array(this.cells),
                    n = t.map((e) => e.shape),
                    o = this.evaluateMoves(r, n),
                    i = new Set(o.map((e) => e.shape.id)),
                    l = new Set(n.filter((e) => !i.has(e.id)).map((e) => e.id)),
                    a = [],
                    c = this.selectBestMove(r, t, a, s);
                  if (!c) return a;
                  if (
                    (a.push(c.move.shape),
                    this.applyEvaluatedMove(r, c.move),
                    a.length >= e)
                  )
                    return a;
                  if (0 === l.size) {
                    for (; a.length < e; ) {
                      const e = this.selectBestMove(r, t, a, s, c.useBest);
                      if (!e) break;
                      a.push(e.move.shape), this.applyEvaluatedMove(r, e.move);
                    }
                    return a;
                  }
                  const h = this.selectBestMove(r, t, a, s, !1, 10);
                  if (
                    (h &&
                      (a.push(h.move.shape),
                      this.applyEvaluatedMove(r, h.move)),
                    a.length >= e)
                  )
                    return a;
                  const d = this.evaluateMoves(r, n),
                    g = new Set(d.map((e) => e.shape.id)),
                    u = n.filter(
                      (e) =>
                        l.has(e.id) &&
                        g.has(e.id) &&
                        this.isSameGroupAvailable(e, a, s)
                    );
                  if (u.length > 0) {
                    const e = u[this.randomIndex(u.length, s)];
                    a.push(e);
                    const t = d.filter((t) => t.shape === e);
                    this.applyEvaluatedMove(r, t[t.length - 1]);
                  }
                  for (; a.length < e; ) {
                    const e = this.selectBestMove(r, t, a, s, !1);
                    if (!e) break;
                    a.push(e.move.shape), this.applyEvaluatedMove(r, e.move);
                  }
                  return a;
                }
                generateObstructive(e, t, s) {
                  const r = new Int8Array(this.cells),
                    n = t.map((e) => e.shape),
                    o = [];
                  for (; o.length < e; ) {
                    const e = this.evaluateMoves(r, n),
                      i = new Set(
                        e.filter((e) => e.potential > 10).map((e) => e.shape.id)
                      ),
                      l = e.filter(
                        (e) => e.potential <= 10 && !i.has(e.shape.id)
                      );
                    let a = null;
                    for (; l.length > 0; ) {
                      const e = l.pop();
                      if (this.isSameGroupAvailable(e.shape, o, s)) {
                        a = e;
                        break;
                      }
                    }
                    if (!a) {
                      const e = this.selectBestMove(r, t, o, s);
                      if (!e) break;
                      a = e.move;
                    }
                    o.push(a.shape), this.applyEvaluatedMove(r, a);
                  }
                  return o;
                }
                selectBestMove(e, t, s, r, n, o = Number.POSITIVE_INFINITY) {
                  const i = t.map((e) => e.shape),
                    l = this.evaluateMoves(e, i),
                    a = new Set(l.map((e) => e.shape.id)),
                    c = i.some((e) => !a.has(e.id)),
                    h = l.filter((e) => e.potential <= o),
                    d =
                      null != n
                        ? n
                        : h.length > 0 && h[h.length - 1].potential > 10;
                  for (; h.length > 0; ) {
                    let e;
                    if (d) e = h.pop();
                    else {
                      const s = i.filter((e) => h.some((t) => t.shape === e)),
                        n = c
                          ? s[this.randomIndex(s.length, r)]
                          : this.pickWeightedShape(s, t, r),
                        o = h.filter((e) => e.shape === n);
                      (e = o[this.randomIndex(o.length, r)]),
                        h.splice(h.indexOf(e), 1);
                    }
                    if (this.isSameGroupAvailable(e.shape, s, r))
                      return { move: e, useBest: d };
                  }
                  return null;
                }
                evaluateMoves(e, t) {
                  const s = [],
                    r = new Uint8Array(BoardModel.SIZE),
                    n = new Uint8Array(BoardModel.SIZE);
                  for (let t = 0; t < BoardModel.SIZE; t += 1)
                    for (let s = 0; s < BoardModel.SIZE; s += 1)
                      -1 !== e[this.index(s, t)] && ((r[t] += 1), (n[s] += 1));
                  for (const o of t) {
                    const t = BoardModel.SIZE - o.height,
                      i = BoardModel.SIZE - o.width;
                    for (let l = 0; l <= t; l += 1)
                      for (let t = 0; t <= i; t += 1) {
                        if (!this.canPlaceOnBoard(e, o.cells, t, l)) continue;
                        const { rows: i, columns: a } =
                            this.completedLinesOnBoard(r, n, o, t, l),
                          c = i.length + a.length,
                          h =
                            c > 0 &&
                            o.cells.every((e) => {
                              const s = t + e.x,
                                r = l + e.y;
                              return i.indexOf(r) >= 0 || a.indexOf(s) >= 0;
                            }),
                          d = o.cells.length + 10 * c + (h ? 10 * c : 0);
                        s.push({
                          shape: o,
                          originX: t,
                          originY: l,
                          clearedRows: i,
                          clearedColumns: a,
                          potential: d,
                        });
                      }
                  }
                  return s.sort((e, t) => e.potential - t.potential), s;
                }
                canPlaceOnBoard(e, t, s, r) {
                  for (const n of t) {
                    const t = s + n.x,
                      o = r + n.y;
                    if (-1 !== e[this.index(t, o)]) return !1;
                  }
                  return !0;
                }
                pieceShapeKey(e) {
                  var t;
                  return null !== (t = e.shapeId) && void 0 !== t
                    ? t
                    : e.cells.map((e) => `${e.x},${e.y}`).join(";");
                }
                completedLinesOnBoard(e, t, s, r, n) {
                  const o = [],
                    i = [];
                  for (let t = 0; t < s.height; t += 1) {
                    const r = n + t;
                    e[r] + s.rowFillCounts[t] === BoardModel.SIZE && o.push(r);
                  }
                  for (let e = 0; e < s.width; e += 1) {
                    const n = r + e;
                    t[n] + s.columnFillCounts[e] === BoardModel.SIZE &&
                      i.push(n);
                  }
                  return { rows: o, columns: i };
                }
                applyEvaluatedMove(e, t) {
                  for (const s of t.shape.cells)
                    e[this.index(t.originX + s.x, t.originY + s.y)] = 0;
                  for (const s of t.clearedRows)
                    for (let t = 0; t < BoardModel.SIZE; t += 1)
                      e[this.index(t, s)] = -1;
                  for (const s of t.clearedColumns)
                    for (let t = 0; t < BoardModel.SIZE; t += 1)
                      e[this.index(s, t)] = -1;
                }
                isSameGroupAvailable(e, t, s) {
                  const r = t.filter((t) => t.group === e.group).length;
                  return !(r > 1) && (0 === r || s() > 0.85);
                }
                fillWithPlayableShapes(e, t, s, r) {
                  var o;
                  let i = this.boardAfterPlacing(e);
                  for (; !i && e.length > 0; )
                    e.pop(), (i = this.boardAfterPlacing(e));
                  for (
                    i = null != i ? i : new Int8Array(this.cells);
                    e.length < t;

                  ) {
                    const t = this.selectBestMove(i, s, e, r),
                      l = t ? [] : this.evaluateMoves(i, [n]),
                      a =
                        null !== (o = null == t ? void 0 : t.move) &&
                        void 0 !== o
                          ? o
                          : l[l.length - 1];
                    if (!a) break;
                    e.push(a.shape), this.applyEvaluatedMove(i, a);
                  }
                }
                boardAfterPlacing(e) {
                  let t = 128;
                  const placeRemaining = (e, s) => {
                    if (0 === s.length) return e;
                    if (t <= 0) return null;
                    t -= 1;
                    const r = new Set();
                    for (let n = 0; n < s.length; n += 1) {
                      const o = s[n];
                      if (r.has(o.id)) continue;
                      r.add(o.id);
                      const i = this.evaluateMoves(e, [o]);
                      for (let r = i.length - 1; r >= 0 && t > 0; r -= 1) {
                        const t = new Int8Array(e);
                        this.applyEvaluatedMove(t, i[r]);
                        const o = placeRemaining(
                          t,
                          s.filter((e, t) => t !== n)
                        );
                        if (o) return o;
                      }
                    }
                    return null;
                  };
                  return placeRemaining(new Int8Array(this.cells), e);
                }
                shuffle(e, t) {
                  for (let s = e.length - 1; s > 0; s -= 1) {
                    const r = this.randomIndex(s + 1, t);
                    [e[s], e[r]] = [e[r], e[s]];
                  }
                }
                randomIndex(e, t) {
                  return Math.min(e - 1, Math.floor(t() * e));
                }
                pickWeightedShape(e, t, s) {
                  const r = e.map((e) => {
                    var s, r;
                    return null !==
                      (r =
                        null === (s = t.find((t) => t.shape === e)) ||
                        void 0 === s
                          ? void 0
                          : s.weight) && void 0 !== r
                      ? r
                      : 0;
                  });
                  let n = r.reduce((e, t) => e + t, 0);
                  n <= 0 && ((n = e.length), r.fill(1));
                  let o = s() * n;
                  for (let t = 0; t < e.length; t += 1)
                    if (((o -= r[t]), o < 0)) return e[t];
                  return e[e.length - 1];
                }
                lineReward(e) {
                  var t;
                  return e >= 6
                    ? 210
                    : null !== (t = [0, 10, 30, 60, 100, 150][e]) &&
                      void 0 !== t
                    ? t
                    : 0;
                }
                lineAchievement(e) {
                  switch (e) {
                    case 2:
                      return "good";
                    case 3:
                      return "excellent";
                    case 4:
                      return "great";
                    case 5:
                      return "super";
                    default:
                      return e >= 6 ? "perfect" : null;
                  }
                }
                isRowFull(e) {
                  for (let t = 0; t < BoardModel.SIZE; t += 1)
                    if (-1 === this.get(t, e)) return !1;
                  return !0;
                }
                isColumnFull(e) {
                  for (let t = 0; t < BoardModel.SIZE; t += 1)
                    if (-1 === this.get(e, t)) return !1;
                  return !0;
                }
              })
            ),
            (c.SIZE = 8),
            (c.NORMAL_COLOR_COUNT = 7),
            (c.SHAPE_COUNT = r.length),
            (c.FIGURE_CONFIG_VERSION = 3),
            (c.FIGURE_POOL_COUNT = i.length),
            (c.FIGURE_SCENARIO_COUNT = l.length);
        },
      }
    );
  }
);

System.register("chunks:///_virtual/BuildVariant.ts", [], function (a, i) {
  "use strict";
  var t;
  function parseBuildVariant(a) {
    return "standard" === a ||
      "international" === a ||
      "vk" === a ||
      "ok" === a ||
      "tiktok" === a ||
      "crazygames" === a ||
      "youtube" === a ||
      "poki" === a ||
      "gamedistribution" === a ||
      "gamepix" === a ||
      "playgama" === a
      ? a
      : null;
  }
  return (
    i && i.id,
    {
      setters: [],
      execute: function () {
        (t = (function resolveBuildVariant() {
          var a;
          const i = globalThis;
          return (
            parseBuildVariant(i.BLOCKS_WEB_BUILD_VARIANT) ||
            (i.TTMinis || i.tt
              ? "tiktok"
              : "undefined" != typeof window &&
                null !==
                  (a = parseBuildVariant(
                    new URLSearchParams(window.location.search).get("build")
                  )) &&
                void 0 !== a
              ? a
              : "standard")
          );
        })()),
          a("buildVariant", {
            id: t,
            classicGenerationEnabled:
              "standard" === t ||
              "vk" === t ||
              "ok" === t ||
              "crazygames" === t ||
              "youtube" === t,
            forcedLanguage:
              "international" === t ||
              "tiktok" === t ||
              "crazygames" === t ||
              "poki" === t ||
              "gamedistribution" === t ||
              "gamepix" === t ||
              "playgama" === t
                ? "en"
                : "vk" === t || "ok" === t
                ? "ru"
                : null,
            languageSelectionEnabled: !1,
          });
      },
    }
  );
});

System.register(
  "chunks:///_virtual/CrazyGamesPortalAdapter.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./BestScoreMigration.ts"],
  function (e) {
    var t, n, a, r, i, o;
    return {
      setters: [
        function (e) {
          (t = e.asyncToGenerator), (n = e.regeneratorRuntime);
        },
        function (e) {
          a = e.cclegacy;
        },
        function (e) {
          (r = e.normalizeBestScore),
            (i = e.extractLegacyCrazyGamesUnityBestScore),
            (o = e.loadLegacyUnityIndexedDbBestScore);
        },
      ],
      execute: function () {
        a._RF.push(
          {},
          "7a2c36PayFMmY2ODDu8rWQB",
          "CrazyGamesPortalAdapter",
          void 0
        );
        var s = "https://sdk.crazygames.com/crazygames-sdk-v3.js",
          u = 18e4,
          d = "blocksWebBestScore",
          l = "blocks-web-best-score",
          c = ["store", "data", "save_data", "Player_Data"],
          h = ["MaxScore", "bestScore", l];
        e(
          "CrazyGamesPortalAdapter",
          (function () {
            function e() {
              (this.id = "crazygames"),
                (this.sdk = null),
                (this.enabled = !1),
                (this.audioMuted = !1),
                (this.audioMuteListener = null),
                (this.nextMidgameAdTime = Number.POSITIVE_INFINITY),
                (this.bestScoreDataReady = !1),
                (this.storedBestScore = null),
                (this.legacyBrowserBestScore = null);
            }
            var a = e.prototype;
            return (
              (a.initialize = (function () {
                var e = t(
                  n().mark(function e() {
                    var t,
                      a,
                      r,
                      i,
                      s,
                      d,
                      l = this;
                    return n().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (a = o()),
                                (r = this.loadLegacyLocalStorageBestScore()),
                                (e.next = 4),
                                this.loadSdkScript()
                              );
                            case 4:
                              return (i = e.sent), (e.next = 7), i.init();
                            case 7:
                              return (e.next = 9), a;
                            case 9:
                              if (
                                ((s = e.sent),
                                (d = [r, s].filter(function (e) {
                                  return null !== e;
                                })),
                                (this.legacyBrowserBestScore =
                                  d.length > 0
                                    ? Math.max.apply(Math, d)
                                    : null),
                                (this.sdk = i),
                                (this.enabled = "disabled" !== i.environment),
                                this.enabled)
                              ) {
                                e.next = 16;
                                break;
                              }
                              return e.abrupt("return");
                            case 16:
                              (this.nextMidgameAdTime = Date.now() + u),
                                this.updateAudioMuted(
                                  !0 ===
                                    (null == (t = i.game.settings)
                                      ? void 0
                                      : t.muteAudio)
                                ),
                                null == i.game.addSettingsChangeListener ||
                                  i.game.addSettingsChangeListener(function (
                                    e
                                  ) {
                                    l.updateAudioMuted(!0 === e.muteAudio);
                                  }),
                                i.game.loadingStart();
                            case 20:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              (a.getLanguage = function () {
                var e, t;
                return this.enabled &&
                  null !=
                    (e =
                      null == (t = this.sdk) ||
                      null == (t = t.user) ||
                      null == (t = t.systemInfo)
                        ? void 0
                        : t.locale)
                  ? e
                  : null;
              }),
              (a.getSafeAreaTopRatio = function () {
                if (
                  "undefined" == typeof document ||
                  "undefined" == typeof window
                )
                  return 0;
                var e = document.createElement("div");
                (e.style.position = "fixed"),
                  (e.style.visibility = "hidden"),
                  (e.style.pointerEvents = "none"),
                  (e.style.paddingTop = "env(safe-area-inset-top, 0px)"),
                  document.body.appendChild(e);
                var t = Number.parseFloat(
                  window.getComputedStyle(e).paddingTop
                );
                return (
                  e.remove(),
                  Number.isFinite(t) && window.innerHeight > 0
                    ? t / window.innerHeight
                    : 0
                );
              }),
              (a.isAudioMuted = function () {
                return this.audioMuted;
              }),
              (a.setAudioMuteListener = function (e) {
                (this.audioMuteListener = e), e(this.audioMuted);
              }),
              (a.loadingReady = function () {
                var e;
                this.enabled &&
                  (null == (e = this.sdk) || e.game.loadingStop());
              }),
              (a.gameplayStart = function () {
                var e;
                this.enabled &&
                  (null == (e = this.sdk) || e.game.gameplayStart());
              }),
              (a.gameplayStop = function () {
                var e;
                this.enabled &&
                  (null == (e = this.sdk) || e.game.gameplayStop());
              }),
              (a.loadBestScore = (function () {
                var e = t(
                  n().mark(function e() {
                    var t, a, o, s, u, l;
                    return n().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((a = this.legacyBrowserBestScore),
                                (o = null == (t = this.sdk) ? void 0 : t.data),
                                (this.bestScoreDataReady = !1),
                                this.enabled && o)
                              ) {
                                e.next = 5;
                                break;
                              }
                              return e.abrupt("return", a);
                            case 5:
                              return (
                                (e.prev = 5),
                                (this.storedBestScore = r(o.getItem(d))),
                                (s = c
                                  .map(function (e) {
                                    return i(o.getItem(e));
                                  })
                                  .concat(
                                    h.map(function (e) {
                                      return r(o.getItem(e));
                                    })
                                  )
                                  .filter(function (e) {
                                    return null !== e;
                                  })),
                                (u =
                                  s.length > 0
                                    ? Math.max.apply(Math, s)
                                    : null),
                                (this.bestScoreDataReady = !0),
                                (l = [this.storedBestScore, u, a].filter(
                                  function (e) {
                                    return null !== e;
                                  }
                                )),
                                e.abrupt(
                                  "return",
                                  l.length > 0 ? Math.max.apply(Math, l) : null
                                )
                              );
                            case 14:
                              return (
                                (e.prev = 14),
                                (e.t0 = e.catch(5)),
                                console.warn(
                                  "[blocks-web] CrazyGames player data loading failed",
                                  e.t0
                                ),
                                e.abrupt("return", a)
                              );
                            case 18:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[5, 14]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              (a.loadLegacyLocalStorageBestScore = function () {
                if ("undefined" == typeof window) return null;
                try {
                  for (
                    var e = window.localStorage,
                      t = [],
                      n = function () {
                        var n = e.key(a);
                        if (!n) return 1;
                        var o = e.getItem(n),
                          s =
                            n === l ||
                            h.some(function (e) {
                              return e === n;
                            })
                              ? r(o)
                              : i(o);
                        null !== s && t.push(s);
                      },
                      a = 0;
                    a < e.length;
                    a += 1
                  )
                    n();
                  return t.length > 0 ? Math.max.apply(Math, t) : null;
                } catch (e) {
                  return null;
                }
              }),
              (a.saveBestScore = function (e, t) {
                var n,
                  a,
                  i = r(e),
                  o = null == (n = this.sdk) ? void 0 : n.data;
                if (
                  null !== i &&
                  this.enabled &&
                  this.bestScoreDataReady &&
                  o &&
                  !(i <= (null != (a = this.storedBestScore) ? a : -1))
                )
                  try {
                    o.setItem(d, String(i)), (this.storedBestScore = i);
                  } catch (e) {
                    console.warn(
                      "[blocks-web] CrazyGames player data saving failed",
                      e
                    );
                  }
              }),
              (a.submitScore = function (e) {}),
              (a.canShowInterstitial = function () {
                var e;
                return (
                  this.enabled &&
                  Boolean(null == (e = this.sdk) ? void 0 : e.ad) &&
                  Date.now() >= this.nextMidgameAdTime
                );
              }),
              (a.showInterstitial = function () {
                return Date.now() < this.nextMidgameAdTime
                  ? Promise.resolve("unavailable")
                  : this.requestAd("midgame");
              }),
              (a.isRewardedAvailable = function () {
                var e;
                return (
                  this.enabled &&
                  Boolean(null == (e = this.sdk) ? void 0 : e.ad)
                );
              }),
              (a.showRewarded = function () {
                return this.requestAd("rewarded");
              }),
              (a.requestAd = function (e) {
                var t,
                  n = this,
                  a = null == (t = this.sdk) ? void 0 : t.ad;
                return this.enabled && a
                  ? new Promise(function (t) {
                      var r = !1,
                        i = function (e) {
                          r || ((r = !0), t(e));
                        };
                      try {
                        a.requestAd(e, {
                          adStarted: function () {},
                          adFinished: function () {
                            (n.nextMidgameAdTime = Date.now() + u),
                              i("completed");
                          },
                          adError: function (t) {
                            var n;
                            if (
                              "rewarded" !== e ||
                              "adsDisabledBasicLaunch" !==
                                (null == t ? void 0 : t.code)
                            ) {
                              var a = new Set([
                                "adsDisabledBasicLaunch",
                                "unfilled",
                                "adblock",
                                "adCooldown",
                              ]);
                              i(
                                a.has(
                                  null != (n = null == t ? void 0 : t.code)
                                    ? n
                                    : ""
                                )
                                  ? "unavailable"
                                  : "failed"
                              );
                            } else i("completed");
                          },
                        });
                      } catch (e) {
                        i("failed");
                      }
                    })
                  : Promise.resolve("unavailable");
              }),
              (a.updateAudioMuted = function (e) {
                var t;
                this.audioMuted !== e &&
                  ((this.audioMuted = e),
                  null == (t = this.audioMuteListener) || t.call(this, e));
              }),
              (a.loadSdkScript = (function () {
                var e = t(
                  n().mark(function e() {
                    var t, a, r, i, o;
                    return n().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((r = window),
                              !(i =
                                null == (t = r.CrazyGames) ? void 0 : t.SDK))
                            ) {
                              e.next = 4;
                              break;
                            }
                            return e.abrupt("return", i);
                          case 4:
                            return (
                              (e.next = 6),
                              new Promise(function (e, t) {
                                var n = document.querySelector(
                                  'script[src="' + s + '"]'
                                );
                                null == n || n.remove();
                                var a = document.createElement("script");
                                a.addEventListener(
                                  "load",
                                  function () {
                                    return e();
                                  },
                                  { once: !0 }
                                ),
                                  a.addEventListener(
                                    "error",
                                    function () {
                                      return t(
                                        new Error(
                                          "CrazyGames SDK failed to load"
                                        )
                                      );
                                    },
                                    { once: !0 }
                                  ),
                                  (a.src = s),
                                  (a.async = !0),
                                  (a.dataset.crazyGamesSdk = "true"),
                                  document.head.appendChild(a);
                              })
                            );
                          case 6:
                            if (
                              (o = null == (a = r.CrazyGames) ? void 0 : a.SDK)
                            ) {
                              e.next = 9;
                              break;
                            }
                            throw new Error(
                              "CrazyGames SDK loaded without CrazyGames.SDK"
                            );
                          case 9:
                            return e.abrupt("return", o);
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              e
            );
          })()
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/GameBootstrap.ts",
  [
    "cc",
    "./BoardModel.ts",
    "./Localization.ts",
    "./PortalBridge.ts",
    "./BuildVariant.ts",
    "./BoardAppearance.ts",
    "./BestScoreMigration.ts",
  ],
  function (e, t) {
    "use strict";
    var i,
      o,
      s,
      a,
      n,
      r,
      l,
      d,
      c,
      h,
      u =
        (this && this.__decorate) ||
        function (e, t, i, o) {
          var s,
            a = arguments.length,
            n =
              a < 3
                ? t
                : null === o
                ? (o = Object.getOwnPropertyDescriptor(t, i))
                : o;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, i, o);
          else
            for (var r = e.length - 1; r >= 0; r--)
              (s = e[r]) &&
                (n = (a < 3 ? s(n) : a > 3 ? s(t, i, n) : s(t, i)) || n);
          return a > 3 && n && Object.defineProperty(t, i, n), n;
        },
      p =
        (this && this.__awaiter) ||
        function (e, t, i, o) {
          return new (i || (i = Promise))(function (s, a) {
            function fulfilled(e) {
              try {
                step(o.next(e));
              } catch (e) {
                a(e);
              }
            }
            function rejected(e) {
              try {
                step(o.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function step(e) {
              e.done
                ? s(e.value)
                : (function adopt(e) {
                    return e instanceof i
                      ? e
                      : new i(function (t) {
                          t(e);
                        });
                  })(e.value).then(fulfilled, rejected);
            }
            step((o = o.apply(e, t || [])).next());
          });
        };
    return (
      t && t.id,
      {
        setters: [
          function (e) {
            o = e;
          },
          function (e) {
            s = e;
          },
          function (e) {
            a = e;
          },
          function (e) {
            n = e;
          },
          function (e) {
            r = e;
          },
          function (e) {
            l = e;
          },
          function (e) {
            d = e;
          },
        ],
        execute: function () {
          (c = o._decorator.ccclass),
            o.cclegacy._RF.push(
              {},
              "838ccz0sE1FcYPyz9VIYFae",
              "GameBootstrap",
              void 0
            ),
            (h = i =
              class GameBootstrap extends o.Component {
                constructor() {
                  super(...arguments),
                    (this.model = new s.BoardModel()),
                    (this.portalStorage = new Map()),
                    (this.portalStorageEnabled = !1),
                    (this.blockFrames = []),
                    (this.boardAppearance = null),
                    (this.tileSmoothingEffect = null),
                    (this.audioClips = new Map()),
                    (this.localization = new a.Localization("en")),
                    (this.uiFont = null),
                    (this.effectFont = null),
                    (this.bestScoreGradientEffect = null),
                    (this.bestScoreGradientMaterial = null),
                    (this.bestMoveEffect = null),
                    (this.bestMoveMaterial = null),
                    (this.startButtonEffect = null),
                    (this.startButtonMaterial = null),
                    (this.startButtonYellowMaterial = null),
                    (this.startButtonBlueMaterial = null),
                    (this.gameReadyPromise = null),
                    (this.audioLoadPromise = null),
                    (this.backgroundFrame = null),
                    (this.startFallingFrame = null),
                    (this.startLogoRuFrame = null),
                    (this.startLogoEnFrame = null),
                    (this.languageLogoLoads = {}),
                    (this.shadowFrame = null),
                    (this.playFrame = null),
                    (this.adsIconFrame = null),
                    (this.crownFrame = null),
                    (this.settingsFrame = null),
                    (this.settingsPanelFrame = null),
                    (this.settingsContentFrame = null),
                    (this.settingsLanguageFrame = null),
                    (this.settingsReplayFrame = null),
                    (this.settingsReplayFixedButtonFrame = null),
                    (this.boardFrame = null),
                    (this.pieceSpawnGlowFrame = null),
                    (this.lineMatchDotFrame = null),
                    (this.lineClearGlowFrame = null),
                    (this.lineClearLeftFrame = null),
                    (this.lineClearRightFrame = null),
                    (this.lineClearParticleFrame = null),
                    (this.bestMoveHandFrame = null),
                    (this.bestMoveLightFrame = null),
                    (this.comboHeartFrame = null),
                    (this.comboWordEnFrame = null),
                    (this.boardNode = null),
                    (this.effectsNode = null),
                    (this.placementLinePreviewNode = null),
                    (this.placementLinePreviewKey = ""),
                    (this.placementPreviewNode = null),
                    (this.placementPreviewBlocks = []),
                    (this.placementPreviewPiece = null),
                    (this.placementPreviewOriginX = Number.NaN),
                    (this.placementPreviewOriginY = Number.NaN),
                    (this.occupiedNode = null),
                    (this.occupiedBlockSprites = []),
                    (this.piecesNode = null),
                    (this.scoreLabel = null),
                    (this.bestLabel = null),
                    (this.comboNode = null),
                    (this.comboNumberLabel = null),
                    (this.comboOpacity = null),
                    (this.comboHeartNode = null),
                    (this.comboHeartOpacity = null),
                    (this.startScreenNode = null),
                    (this.startScreenVisible = !1),
                    (this.startScreenClosing = !1),
                    (this.settingsWindowNode = null),
                    (this.settingsPanelNode = null),
                    (this.languageWindowNode = null),
                    (this.languagePanelNode = null),
                    (this.settingsVolumeSliderNode = null),
                    (this.finalScoreLabel = null),
                    (this.finalBestLabel = null),
                    (this.gameOverTitleLabel = null),
                    (this.gameOverScoreGroup = null),
                    (this.gameOverBestGroup = null),
                    (this.gameOverScoreCaptionLabel = null),
                    (this.gameOverBestCaptionLabel = null),
                    (this.gameOverConfettiNode = null),
                    (this.gameOverRestartButton = null),
                    (this.secondChanceWindowNode = null),
                    (this.secondChancePanelNode = null),
                    (this.tiktokRewardsWindowNode = null),
                    (this.tiktokRewardsPanelNode = null),
                    (this.tiktokShortcutLabel = null),
                    (this.tiktokProfileLabel = null),
                    (this.tiktokTicketLabels = []),
                    (this.noMovesNode = null),
                    (this.gameOverNode = null),
                    (this.audioSource = null),
                    (this.draggedPiece = null),
                    (this.dragTouchId = null),
                    (this.dragPointerPosition = null),
                    (this.dragLift = 0),
                    (this.dragLiftTarget = 0),
                    (this.dragLiftVelocity = 0),
                    (this.dragScale = 1),
                    (this.dragScaleVelocity = 0),
                    (this.dragStartPointerY = 0),
                    (this.dragStartLift = 0),
                    (this.dragDefaultLift = 0),
                    (this.dragHomeY = 0),
                    (this.dragMaxMoveDelta = 1),
                    (this.dragLiftDampResult = { value: 0, velocity: 0 }),
                    (this.dragScaleDampResult = { value: 1, velocity: 0 }),
                    (this.slotFrame = null),
                    (this.pieces = []),
                    (this.bestScore = 0),
                    (this.bestScoreAtGameStart = 0),
                    (this.displayedScore = 0),
                    (this.scoreTarget = 0),
                    (this.scoreFrameAccumulator = 0),
                    (this.comboHeartActive = !1),
                    (this.comboHeartAnimationTime = 0),
                    (this.comboRevision = 0),
                    (this.achievementPositionIndex = 0),
                    (this.soundVolume = 1),
                    (this.portalAudioMuted = !1),
                    (this.portalEventsEnabled = !1),
                    (this.portalClassicLevel =
                      i.PORTAL_CLASSIC_START_LEVEL - 1),
                    (this.gameOverReported = !1),
                    (this.settingsWindowClosing = !1),
                    (this.languageWindowClosing = !1),
                    (this.languageSelectionBusy = !1),
                    (this.gameOverClosing = !1),
                    (this.gameOverState = "hidden"),
                    (this.gameOverSequenceRevision = 0),
                    (this.secondChanceUses = 0),
                    (this.secondChancePieces = null),
                    (this.secondChanceBusy = !1),
                    (this.portalAdInProgress = !1),
                    (this.portalPauseRequested = !1),
                    (this.lastPortalAdClosedAt = Number.NEGATIVE_INFINITY),
                    (this.tiktokTicketBalance = 0),
                    (this.tiktokRewardActionBusy = !1),
                    (this.tiktokRewardCheckBusy = !1),
                    (this.levelStartAnimationNode = null),
                    (this.levelStartAnimationActive = !1),
                    (this.levelStartAnimationRevision = 0),
                    (this.windowAnimationCallback = null),
                    (this.isLandscapeLayout = !1),
                    (this.designWidth = i.PORTRAIT_WIDTH),
                    (this.designHeight = i.PORTRAIT_HEIGHT),
                    (this.portraitViewportTop = i.PORTRAIT_HEIGHT / 2),
                    (this.portraitSafeAreaTop = 0),
                    (this.cellSize = 60),
                    (this.gap = 8),
                    (this.boardPadding = 14),
                    (this.canvasResizeCallback = () => {
                      this.unschedule(this.applyResizeRelayoutCallback),
                        this.scheduleOnce(
                          this.applyResizeRelayoutCallback,
                          0.2
                        );
                    }),
                    (this.applyResizeRelayoutCallback = () => {
                      var e;
                      const t = this.isLandscapeLayout,
                        i = this.designWidth,
                        o = this.designHeight,
                        s = this.portraitSafeAreaTop;
                      this.configureLayout(this.shouldUseLandscapeLayout());
                      const a = t !== this.isLandscapeLayout,
                        n =
                          Math.abs(i - this.designWidth) > 1 ||
                          Math.abs(o - this.designHeight) > 1,
                        r = Math.abs(s - this.portraitSafeAreaTop) > 1;
                      if (a || n || r) {
                        if (!this.backgroundFrame) return;
                        (
                          null === (e = this.boardNode) || void 0 === e
                            ? void 0
                            : e.isValid
                        )
                          ? this.rebuildScreenForLayout()
                          : this.rebuildStartScreenForLayout();
                      }
                    }),
                    (this.handlePortalAudioMuteChanged = (e) => {
                      var t;
                      (this.portalAudioMuted = e),
                        e &&
                          (null === (t = this.audioSource) ||
                            void 0 === t ||
                            t.stop());
                    }),
                    (this.handlePortalPauseChanged = (e) => {
                      var t, i, s;
                      if (
                        ((this.portalPauseRequested = e),
                        this.model.pauseClassicGeneration("portal", e),
                        e)
                      )
                        return (
                          "youtube" === n.portal.id &&
                            (null === (t = this.boardNode) || void 0 === t
                              ? void 0
                              : t.isValid) &&
                            this.onGameHide(),
                          null === (i = this.audioSource) ||
                            void 0 === i ||
                            i.stop(),
                          void (o.game.isPaused() || o.game.pause())
                        );
                      "youtube" === n.portal.id &&
                        (null === (s = this.boardNode) || void 0 === s
                          ? void 0
                          : s.isValid) &&
                        this.onGameShow(),
                        !this.portalAdInProgress &&
                          o.game.isPaused() &&
                          o.game.resume();
                    });
                }
                get soundEnabled() {
                  return this.soundVolume > 0;
                }
                start() {
                  return p(this, void 0, void 0, function* () {
                    var e, t;
                    o.view.on("canvas-resize", this.canvasResizeCallback, this),
                      "undefined" != typeof window &&
                        (window.addEventListener(
                          "resize",
                          this.canvasResizeCallback
                        ),
                        null === (e = window.visualViewport) ||
                          void 0 === e ||
                          e.addEventListener(
                            "resize",
                            this.canvasResizeCallback
                          )),
                      this.configureLayout(this.shouldUseLandscapeLayout());
                    try {
                      yield n.portal.initialize(),
                        yield this.preparePortalStorage(),
                        (this.bestScore =
                          null !==
                            (t = d.normalizeBestScore(
                              this.getStoredItem(i.BEST_SCORE_KEY)
                            )) && void 0 !== t
                            ? t
                            : 0),
                        (this.bestScoreAtGameStart = this.bestScore);
                      const e = this.getStoredItem(i.SOUND_VOLUME_KEY),
                        o = (null == e ? void 0 : e.trim())
                          ? Number(e)
                          : Number.NaN;
                      (this.soundVolume =
                        "false" === this.getStoredItem(i.SOUND_ENABLED_KEY)
                          ? 0
                          : Number.isFinite(o)
                          ? this.clamp01(o)
                          : 1),
                        this.loadTikTokTicketBalance(),
                        (this.portalAudioMuted = n.portal.audioMuted),
                        n.portal.setAudioMuteListener(
                          this.handlePortalAudioMuteChanged
                        ),
                        n.portal.setPauseListener(
                          this.handlePortalPauseChanged
                        ),
                        yield this.migrateBestScore(),
                        this.model.configureClassicGeneration(
                          r.buildVariant.classicGenerationEnabled,
                          this.bestScoreAtGameStart
                        );
                      const s = r.buildVariant.forcedLanguage
                          ? null
                          : this.getStoredItem(i.LANGUAGE_KEY),
                        l = n.portal.getLanguage(),
                        c = a.resolveStartupLocale(
                          r.buildVariant.forcedLanguage,
                          s,
                          l,
                          this.getStoredItem(i.YANDEX_LANGUAGE_KEY),
                          "yandex" === n.portal.id
                        );
                      if (c.portalLocaleChanged && c.portalLocale)
                        try {
                          this.setStoredItem(i.LANGUAGE_KEY, c.portalLocale),
                            this.setStoredItem(
                              i.YANDEX_LANGUAGE_KEY,
                              c.portalLocale
                            );
                        } catch (e) {}
                      if (
                        ((this.localization = new a.Localization(c.locale)),
                        (this.gameReadyPromise = this.prepareGame()),
                        yield this.gameReadyPromise,
                        !this.node.isValid)
                      )
                        return;
                      this.hideWebLoadingScreen(),
                        (this.portalEventsEnabled = !0),
                        n.portal.loadingReady(),
                        this.isGameOverSequenceActive()
                          ? n.portal.gameplayStop()
                          : this.reportPortalClassicStart(),
                        n.portal.showBanner(),
                        "tiktok" === r.buildVariant.id &&
                          this.claimTikTokRevisitRewards(),
                        this.soundEnabled && this.ensureAudioClips();
                    } catch (e) {
                      console.error(
                        "[blocks-web] Failed to initialize game",
                        e
                      ),
                        this.showLoadingError(),
                        this.hideWebLoadingScreen();
                    }
                  });
                }
                hideWebLoadingScreen() {
                  const e = globalThis.hideBlocksLoadingScreen;
                  null == e || e();
                }
                update(e) {
                  this.updateScoreAnimation(e),
                    this.updateComboHeartAnimation(e);
                  const t = this.draggedPiece,
                    o = this.dragPointerPosition;
                  t &&
                    o &&
                    !t.used &&
                    t.node.isValid &&
                    (this.smoothDamp(
                      this.dragLift,
                      this.dragLiftTarget,
                      this.dragLiftVelocity,
                      i.UNITY_DRAG_SMOOTH_TIME,
                      e,
                      this.dragLiftDampResult
                    ),
                    (this.dragLift = this.dragLiftDampResult.value),
                    (this.dragLiftVelocity = this.dragLiftDampResult.velocity),
                    this.smoothDamp(
                      this.dragScale,
                      1,
                      this.dragScaleVelocity,
                      i.UNITY_DRAG_SMOOTH_TIME,
                      e,
                      this.dragScaleDampResult
                    ),
                    (this.dragScale = this.dragScaleDampResult.value),
                    (this.dragScaleVelocity =
                      this.dragScaleDampResult.velocity),
                    t.node.setPosition(o.x, o.y + this.dragLift),
                    t.node.setScale(this.dragScale, this.dragScale),
                    this.updatePlacementPreview(t));
                }
                onDestroy() {
                  var e, t;
                  o.game.off(o.Game.EVENT_HIDE, this.onGameHide, this),
                    o.game.off(o.Game.EVENT_SHOW, this.onGameShow, this),
                    o.view.off(
                      "canvas-resize",
                      this.canvasResizeCallback,
                      this
                    ),
                    "undefined" != typeof window &&
                      (window.removeEventListener(
                        "resize",
                        this.canvasResizeCallback
                      ),
                      null === (e = window.visualViewport) ||
                        void 0 === e ||
                        e.removeEventListener(
                          "resize",
                          this.canvasResizeCallback
                        )),
                    this.unschedule(this.applyResizeRelayoutCallback),
                    this.stopLevelStartAnimation(),
                    this.stopWindowAnimation(),
                    null === (t = this.boardAppearance) ||
                      void 0 === t ||
                      t.destroy(),
                    (this.boardAppearance = null),
                    n.portal.gameplayStop();
                }
                prepareGame() {
                  return p(this, void 0, void 0, function* () {
                    var e, t;
                    if (
                      (yield Promise.all([
                        this.loadInterfaceAssets(),
                        this.loadGameAssets(),
                      ]),
                      !this.node.isValid)
                    )
                      return;
                    this.configureLayout(this.shouldUseLandscapeLayout()),
                      this.createBackground(),
                      this.buildScreen(),
                      this.restoreGame() || this.startNewGame(),
                      (null === (e = this.startScreenNode) || void 0 === e
                        ? void 0
                        : e.isValid) &&
                        this.startScreenNode.setSiblingIndex(
                          this.node.children.length - 1
                        );
                    const i =
                      null !== (t = this.languageWindowNode) && void 0 !== t
                        ? t
                        : this.settingsWindowNode;
                    (null == i ? void 0 : i.isValid) &&
                      i.setSiblingIndex(this.node.children.length - 1),
                      "youtube" !== r.buildVariant.id &&
                        (o.game.on(o.Game.EVENT_HIDE, this.onGameHide, this),
                        o.game.on(o.Game.EVENT_SHOW, this.onGameShow, this));
                  });
                }
                waitForGameReady() {
                  return p(this, void 0, void 0, function* () {
                    var e;
                    if (!this.gameReadyPromise) return !1;
                    try {
                      return (
                        yield this.gameReadyPromise,
                        Boolean(
                          null === (e = this.boardNode) || void 0 === e
                            ? void 0
                            : e.isValid
                        )
                      );
                    } catch (e) {
                      return !1;
                    }
                  });
                }
                loadInterfaceAssets() {
                  return p(this, void 0, void 0, function* () {
                    const [e, t, i, s, a, n, l, d, c] = yield Promise.all([
                      this.loadFont("fonts/roboto-bold-ui"),
                      this.loadEffectAsset("effects/start-button-purple"),
                      this.loadSpriteFrame(
                        "textures/ui/background-classic/spriteFrame"
                      ),
                      this.loadSpriteFrame("textures/ui/settings/spriteFrame"),
                      this.loadSpriteFrame(
                        "textures/ui/settings-replay-fixed-button/spriteFrame"
                      ),
                      this.loadSpriteFrame(
                        "textures/ui/settings-panel/spriteFrame"
                      ),
                      this.loadSpriteFrame(
                        "textures/ui/settings-content/spriteFrame"
                      ),
                      r.buildVariant.languageSelectionEnabled
                        ? this.loadSpriteFrame(
                            "textures/ui/settings-language/spriteFrame"
                          )
                        : Promise.resolve(null),
                      this.loadSpriteFrame(
                        "textures/ui/settings-replay/spriteFrame"
                      ),
                    ]);
                    (this.uiFont = e),
                      (this.startButtonEffect = t),
                      (this.backgroundFrame = i),
                      (this.settingsFrame = s),
                      (this.settingsReplayFixedButtonFrame = a),
                      (this.settingsPanelFrame = n),
                      (this.settingsPanelFrame.insetLeft = 42),
                      (this.settingsPanelFrame.insetRight = 43),
                      (this.settingsPanelFrame.insetTop = 128),
                      (this.settingsPanelFrame.insetBottom = 43),
                      (this.settingsContentFrame = l),
                      (this.settingsContentFrame.insetLeft = 16),
                      (this.settingsContentFrame.insetRight = 17),
                      (this.settingsContentFrame.insetTop = 15),
                      (this.settingsContentFrame.insetBottom = 15),
                      (this.settingsLanguageFrame = d),
                      (this.settingsReplayFrame = c),
                      (this.startButtonYellowMaterial = new o.Material()),
                      this.startButtonYellowMaterial.initialize({
                        effectAsset: this.startButtonEffect,
                        defines: {
                          USE_TEXTURE: !0,
                          CC_USE_EMBEDDED_ALPHA: !1,
                          BUTTON_YELLOW: !0,
                        },
                      }),
                      (this.startButtonMaterial = new o.Material()),
                      this.startButtonMaterial.initialize({
                        effectAsset: this.startButtonEffect,
                        defines: {
                          USE_TEXTURE: !0,
                          CC_USE_EMBEDDED_ALPHA: !1,
                          BUTTON_YELLOW: !1,
                        },
                      }),
                      (this.startButtonBlueMaterial = new o.Material()),
                      this.startButtonBlueMaterial.initialize({
                        effectAsset: this.startButtonEffect,
                        defines: {
                          USE_TEXTURE: !0,
                          CC_USE_EMBEDDED_ALPHA: !1,
                          BUTTON_YELLOW: !1,
                          BUTTON_BLUE: !0,
                        },
                      });
                  });
                }
                loadGameAssets() {
                  return p(this, void 0, void 0, function* () {
                    ([
                      this.effectFont,
                      this.bestScoreGradientEffect,
                      this.bestMoveEffect,
                      this.tileSmoothingEffect,
                    ] = yield Promise.all([
                      this.loadFont("fonts/roboto-bold-ui"),
                      this.loadEffectAsset("effects/best-score-gradient"),
                      this.loadEffectAsset("effects/best-move-neon"),
                      this.loadEffectAsset("effects/tile-smoothing"),
                    ])),
                      (this.bestScoreGradientMaterial = new o.Material()),
                      this.bestScoreGradientMaterial.initialize({
                        effectAsset: this.bestScoreGradientEffect,
                        defines: { USE_TEXTURE: !0, CC_USE_EMBEDDED_ALPHA: !1 },
                      }),
                      (this.bestMoveMaterial = new o.Material()),
                      this.bestMoveMaterial.initialize({
                        effectAsset: this.bestMoveEffect,
                        defines: { USE_TEXTURE: !0, CC_USE_EMBEDDED_ALPHA: !1 },
                      });
                    const [
                      e,
                      t,
                      i,
                      s,
                      a,
                      n,
                      r,
                      d,
                      c,
                      h,
                      u,
                      p,
                      m,
                      g,
                      S,
                      C,
                      ...T
                    ] = yield Promise.all([
                      this.loadSpriteFrame(
                        "textures/ui/board-slot/spriteFrame"
                      ),
                      this.loadSpriteFrame("textures/ui/icon-play/spriteFrame"),
                      this.loadSpriteFrame("textures/ui/ads-icon/spriteFrame"),
                      this.loadSpriteFrame("textures/ui/crown/spriteFrame"),
                      this.loadSpriteFrame(
                        "textures/ui/board-frame/spriteFrame"
                      ),
                      this.loadSpriteFrame(
                        "textures/blocks/shadow/spriteFrame"
                      ),
                      this.loadSpriteFrame(
                        "textures/ui/piece-spawn-glow/spriteFrame"
                      ),
                      this.loadSpriteFrame(
                        "textures/effects/line-match-dot/spriteFrame"
                      ),
                      this.loadSpriteFrame(
                        "textures/effects/line-clear-glow/spriteFrame"
                      ),
                      this.loadSpriteFrame(
                        "textures/effects/line-clear-left/spriteFrame"
                      ),
                      this.loadSpriteFrame(
                        "textures/effects/line-clear-right/spriteFrame"
                      ),
                      this.loadSpriteFrame(
                        "textures/effects/line-clear-particle/spriteFrame"
                      ),
                      this.loadSpriteFrame(
                        "textures/effects/best-move-hand/spriteFrame"
                      ),
                      this.loadSpriteFrame(
                        "textures/effects/best-move-light/spriteFrame"
                      ),
                      this.loadSpriteFrame(
                        "textures/ui/combo-heart/spriteFrame"
                      ),
                      this.loadSpriteFrame(
                        "textures/ui/combo-word-en/spriteFrame"
                      ),
                      ...[
                        "red",
                        "green",
                        "light-blue",
                        "yellow",
                        "violet",
                        "orange",
                        "blue",
                      ].map((e) =>
                        this.loadSpriteFrame(`textures/blocks/${e}/spriteFrame`)
                      ),
                    ]);
                    (this.boardAppearance = new l.BoardAppearance(
                      this.tileSmoothingEffect
                    )),
                      (this.slotFrame = e);
                    for (const t of [e, ...T]) t.packable = !1;
                    (this.shadowFrame = n),
                      (this.playFrame = t),
                      (this.adsIconFrame = i),
                      (this.crownFrame = s),
                      (this.boardFrame = a),
                      (this.pieceSpawnGlowFrame = r),
                      (this.lineMatchDotFrame = d),
                      (this.lineClearGlowFrame = c),
                      (this.lineClearLeftFrame = h),
                      (this.lineClearRightFrame = u),
                      (this.lineClearParticleFrame = p),
                      (this.bestMoveHandFrame = m),
                      (this.bestMoveLightFrame = g),
                      (this.comboHeartFrame = S),
                      (this.comboWordEnFrame = C),
                      (this.boardFrame.insetLeft = 11),
                      (this.boardFrame.insetRight = 11),
                      (this.boardFrame.insetTop = 11),
                      (this.boardFrame.insetBottom = 11),
                      this.blockFrames.push(...T);
                  });
                }
                createBackground() {
                  this.createSpriteNode(
                    "Background",
                    this.backgroundFrame,
                    this.designWidth,
                    this.designHeight,
                    this.node
                  ).setSiblingIndex(0);
                }
                showStartScreen(e) {
                  var t;
                  if (
                    null === (t = this.startScreenNode) || void 0 === t
                      ? void 0
                      : t.isValid
                  )
                    return;
                  this.stopLevelStartAnimation(),
                    (this.startScreenVisible = !0),
                    (this.startScreenClosing = !1);
                  const i = new o.Node("StartScreen");
                  this.node.addChild(i),
                    i.setSiblingIndex(this.node.children.length - 1),
                    i
                      .addComponent(o.UITransform)
                      .setContentSize(this.designWidth, this.designHeight);
                  const s = i.addComponent(o.UIOpacity);
                  let a, l;
                  if (
                    ((this.startScreenNode = i),
                    i.on(
                      o.Node.EventType.TOUCH_START,
                      this.stopTouchPropagation,
                      this
                    ),
                    i.on(
                      o.Node.EventType.TOUCH_MOVE,
                      this.stopTouchPropagation,
                      this
                    ),
                    i.on(
                      o.Node.EventType.TOUCH_END,
                      this.stopTouchPropagation,
                      this
                    ),
                    i.on(
                      o.Node.EventType.TOUCH_CANCEL,
                      this.stopTouchPropagation,
                      this
                    ),
                    this.createSpriteNode(
                      "StartBackground",
                      this.backgroundFrame,
                      this.designWidth,
                      this.designHeight,
                      i
                    ),
                    this.isLandscapeLayout)
                  )
                    (l = (256 * this.designWidth) / 1080),
                      (a = this.createSpriteNode(
                        "StartFallingBlocks",
                        this.startFallingFrame,
                        this.designWidth,
                        l,
                        i
                      ));
                  else {
                    const e = this.designWidth / 1350;
                    (l = 481 * e),
                      (a = this.createSpriteNode(
                        "StartFallingBlocks",
                        this.startFallingFrame,
                        1350,
                        481,
                        i
                      ));
                    const t = a.getComponent(o.Sprite);
                    (t.spriteFrame.insetBottom = 207),
                      (t.type = o.Sprite.Type.TILED),
                      a.setScale(new o.Vec3(e, e, 1));
                  }
                  a.setPosition(0, this.designHeight / 2 - l / 2),
                    (a.getComponent(o.Sprite).color = new o.Color(
                      0,
                      72,
                      120,
                      255
                    ));
                  const d =
                      "ru" === this.localization.locale
                        ? this.startLogoRuFrame
                        : this.startLogoEnFrame,
                    c = this.isLandscapeLayout ? 540 : 492,
                    h = (308 * c) / 734;
                  this.createSpriteNode("StartLogo", d, c, h, i).setPosition(
                    0,
                    this.isLandscapeLayout ? 390 : 443
                  ),
                    this.createClassicStartButton(i),
                    this.createStartSettingsButton(i),
                    "tiktok" === r.buildVariant.id &&
                      this.createTikTokRewardsButton(i),
                    this.sharpenWhiteLabels(i),
                    e
                      ? ((s.opacity = 0),
                        o
                          .tween(s)
                          .to(0.18, { opacity: 255 }, { easing: "quadOut" })
                          .start())
                      : (s.opacity = 255),
                    this.portalEventsEnabled && n.portal.gameplayStop();
                }
                createClassicStartButton(e) {
                  const t = this.isLandscapeLayout ? 610 : 426,
                    i = this.isLandscapeLayout ? 210 : 145,
                    s = this.isLandscapeLayout ? -182 : -134,
                    a = this.isLandscapeLayout ? 54 : 37,
                    n = this.isLandscapeLayout ? 55 : 33,
                    r = this.isLandscapeLayout ? 360 : 260,
                    l = this.isLandscapeLayout ? 100 : 72,
                    d = new o.Node("ClassicStartButton");
                  e.addChild(d),
                    d.setPosition(0, this.isLandscapeLayout ? -65 : -116),
                    d.addComponent(o.UITransform).setContentSize(t, i);
                  const c = this.createSpriteNode(
                    "ClassicButtonShadow",
                    this.settingsReplayFixedButtonFrame,
                    t + 8,
                    i + 8,
                    d
                  );
                  c.setPosition(0, -5);
                  const h = c.getComponent(o.Sprite);
                  (h.type = o.Sprite.Type.SIMPLE),
                    (h.customMaterial = this.startButtonMaterial),
                    (h.color = new o.Color(62, 40, 105, 135));
                  const u = this.createSpriteNode(
                    "ClassicButtonBackground",
                    this.settingsReplayFixedButtonFrame,
                    t,
                    i,
                    d
                  );
                  (u.getComponent(o.Sprite).type = o.Sprite.Type.SIMPLE),
                    (u.getComponent(o.Sprite).customMaterial =
                      this.startButtonMaterial),
                    this.createInfinityIcon(d, s);
                  const p = this.createText(
                    this.localization.text("classic"),
                    a,
                    new o.Vec3(n, 1),
                    o.Color.WHITE,
                    d
                  );
                  (p.font = this.uiFont),
                    (p.enableOutline = !1),
                    p.node.getComponent(o.UITransform).setContentSize(r, l),
                    d.on(o.Node.EventType.TOUCH_START, (e) => {
                      (e.propagationStopped = !0),
                        this.soundEnabled && this.ensureAudioClips(),
                        this.startScreenClosing ||
                          o
                            .tween(d)
                            .to(0.06, { scale: new o.Vec3(0.97, 0.97, 1) })
                            .start();
                    }),
                    d.on(o.Node.EventType.TOUCH_CANCEL, (e) => {
                      (e.propagationStopped = !0),
                        this.startScreenClosing ||
                          o.tween(d).to(0.08, { scale: o.Vec3.ONE }).start();
                    }),
                    d.on(o.Node.EventType.TOUCH_END, (e) => {
                      (e.propagationStopped = !0), this.openClassicGame(d);
                    });
                }
                createStartSettingsButton(e) {
                  const t = this.isLandscapeLayout ? 610 : 426,
                    i = this.isLandscapeLayout ? 210 : 145,
                    s = this.isLandscapeLayout ? -182 : -134,
                    a = this.isLandscapeLayout ? 54 : 37,
                    n = this.isLandscapeLayout ? 55 : 33,
                    r = this.isLandscapeLayout ? 360 : 260,
                    l = this.isLandscapeLayout ? 100 : 72,
                    d = new o.Node("StartSettingsButton");
                  e.addChild(d),
                    d.setPosition(0, this.isLandscapeLayout ? -295 : -260),
                    d.addComponent(o.UITransform).setContentSize(t, i);
                  const c = this.createSpriteNode(
                    "StartSettingsButtonShadow",
                    this.settingsReplayFixedButtonFrame,
                    t + 8,
                    i + 8,
                    d
                  );
                  c.setPosition(0, -5);
                  const h = c.getComponent(o.Sprite);
                  (h.type = o.Sprite.Type.SIMPLE),
                    (h.customMaterial = this.startButtonYellowMaterial),
                    (h.color = new o.Color(110, 75, 28, 135));
                  const u = this.createSpriteNode(
                    "StartSettingsButtonBackground",
                    this.settingsReplayFixedButtonFrame,
                    t,
                    i,
                    d
                  ).getComponent(o.Sprite);
                  (u.type = o.Sprite.Type.SIMPLE),
                    (u.customMaterial = this.startButtonYellowMaterial);
                  const p = this.createSpriteNode(
                    "StartSettingsIcon",
                    this.settingsFrame,
                    81,
                    84,
                    d
                  );
                  p.setPosition(s, 0),
                    (p.getComponent(o.Sprite).color = o.Color.WHITE);
                  const m = this.createSpriteNode(
                    "StartSettingsIconBright",
                    this.settingsFrame,
                    81,
                    84,
                    d
                  );
                  m.setPosition(s, 0),
                    (m.getComponent(o.Sprite).color = o.Color.WHITE);
                  const g = this.createText(
                    this.localization.text("settings"),
                    a,
                    new o.Vec3(n, 1),
                    o.Color.WHITE,
                    d
                  );
                  (g.font = this.uiFont),
                    (g.enableOutline = !1),
                    g.node.getComponent(o.UITransform).setContentSize(r, l),
                    this.bindButtonDarkenFeedback(d, () =>
                      this.openSettingsWindow()
                    );
                }
                createTikTokRewardsButton(e) {
                  const t = this.isLandscapeLayout ? 610 : 426,
                    i = this.isLandscapeLayout ? 210 : 145,
                    s = new o.Node("TikTokRewardsButton");
                  e.addChild(s),
                    s.setPosition(0, this.isLandscapeLayout ? -525 : -404),
                    s.addComponent(o.UITransform).setContentSize(t, i),
                    this.createPrimaryButtonBackground(
                      "TikTokRewardsButton",
                      t,
                      i,
                      s,
                      this.startButtonBlueMaterial,
                      new o.Color(18, 76, 132, 150)
                    ),
                    this.createGoldenTicketIcon(
                      "TikTokRewardsTicketIcon",
                      this.isLandscapeLayout ? 88 : 64,
                      this.isLandscapeLayout ? 56 : 42,
                      s
                    ).setPosition(this.isLandscapeLayout ? -182 : -134, 0);
                  const a = this.createText(
                    this.tiktokStartRewardsText(),
                    this.isLandscapeLayout ? 38 : 28,
                    new o.Vec3(this.isLandscapeLayout ? 50 : 45, 0),
                    o.Color.WHITE,
                    s
                  );
                  (a.node.name = "TikTokStartRewardsLabel"),
                    (a.enableOutline = !1),
                    a.node
                      .getComponent(o.UITransform)
                      .setContentSize(
                        this.isLandscapeLayout ? 430 : 300,
                        this.isLandscapeLayout ? 100 : 72
                      ),
                    this.tiktokTicketLabels.push(a),
                    this.bindSettingsButtonPressFeedback(s, () =>
                      this.openTikTokRewardsWindow()
                    );
                }
                openTikTokRewardsWindow() {
                  this.openTikTokRewardsWindowWhenReady();
                }
                openTikTokRewardsWindowWhenReady() {
                  return p(this, void 0, void 0, function* () {
                    var e;
                    if (
                      "tiktok" !== r.buildVariant.id ||
                      (null === (e = this.tiktokRewardsWindowNode) ||
                      void 0 === e
                        ? void 0
                        : e.isValid)
                    )
                      return;
                    const [t] = yield Promise.all([
                      this.waitForGameReady(),
                      this.soundEnabled
                        ? this.ensureAudioClips()
                        : Promise.resolve(),
                    ]);
                    t &&
                      (this.playSound("button"),
                      this.showTikTokRewardsWindow(!0));
                  });
                }
                showTikTokRewardsWindow(e) {
                  var t;
                  if (
                    "tiktok" !== r.buildVariant.id ||
                    (null === (t = this.tiktokRewardsWindowNode) || void 0 === t
                      ? void 0
                      : t.isValid)
                  )
                    return;
                  this.portalEventsEnabled && n.portal.gameplayStop();
                  const i = this.isLandscapeLayout ? 760 : 630,
                    s = this.isLandscapeLayout ? 620 : 650,
                    a = this.createModalOverlay("TikTokRewardsWindow", e);
                  a.on(
                    o.Node.EventType.TOUCH_END,
                    this.closeTikTokRewardsWindow,
                    this
                  ),
                    (this.tiktokRewardsWindowNode = a);
                  const l = this.createSpriteNode(
                    "TikTokRewardsPanel",
                    this.settingsPanelFrame,
                    i,
                    s,
                    a
                  );
                  (l.getComponent(o.Sprite).type = o.Sprite.Type.SLICED),
                    this.blockModalPanelTouches(l),
                    (this.tiktokRewardsPanelNode = l);
                  const d = this.createText(
                    this.localization.text("tiktokRewards"),
                    this.isLandscapeLayout ? 42 : 40,
                    new o.Vec3(0, s / 2 - 72),
                    o.Color.WHITE,
                    l
                  );
                  (d.enableOutline = !1),
                    d.node
                      .getComponent(o.UITransform)
                      .setContentSize(i - 150, 80),
                    this.createModalCloseButton(
                      "TikTokRewardsCloseButton",
                      l,
                      i / 2 - 58,
                      s / 2 - 70,
                      42,
                      () => this.closeTikTokRewardsWindow()
                    ),
                    this.createGoldenTicketIcon(
                      "TikTokBalanceTicketIcon",
                      this.isLandscapeLayout ? 96 : 82,
                      this.isLandscapeLayout ? 62 : 54,
                      l
                    ).setPosition(
                      this.isLandscapeLayout ? -120 : -105,
                      s / 2 - 168
                    );
                  const c = this.createText(
                    this.tiktokTicketBalanceText(),
                    this.isLandscapeLayout ? 34 : 31,
                    new o.Vec3(this.isLandscapeLayout ? 55 : 48, s / 2 - 168),
                    new o.Color(255, 238, 135),
                    l
                  );
                  (c.node.name = "TikTokTicketBalanceLabel"),
                    (c.enableOutline = !1),
                    c.node.getComponent(o.UITransform).setContentSize(320, 74),
                    this.tiktokTicketLabels.push(c),
                    (this.tiktokShortcutLabel = this.createTikTokMissionButton(
                      "TikTokShortcutMissionButton",
                      this.tiktokShortcutButtonText(),
                      new o.Vec3(0, this.isLandscapeLayout ? 42 : 35),
                      l,
                      () => {
                        this.addTikTokHomeShortcut();
                      }
                    )),
                    (this.tiktokProfileLabel = this.createTikTokMissionButton(
                      "TikTokProfileMissionButton",
                      this.tiktokProfileButtonText(),
                      new o.Vec3(0, this.isLandscapeLayout ? -112 : -118),
                      l,
                      () => {
                        this.startTikTokProfileMission();
                      }
                    ));
                  const h = this.createText(
                    this.localization.text("ticketHint"),
                    this.isLandscapeLayout ? 24 : 22,
                    new o.Vec3(0, -s / 2 + 56),
                    new o.Color(165, 222, 242),
                    l
                  );
                  (h.enableOutline = !1),
                    h.node
                      .getComponent(o.UITransform)
                      .setContentSize(i - 100, 65),
                    (h.overflow = o.Label.Overflow.SHRINK),
                    this.updateTikTokRewardLabels(),
                    this.sharpenWhiteLabels(l);
                }
                createTikTokMissionButton(e, t, i, s, a) {
                  const n = this.isLandscapeLayout ? 620 : 520,
                    r = this.isLandscapeLayout ? 124 : 118,
                    l = new o.Node(e);
                  s.addChild(l),
                    l.setPosition(i),
                    l.addComponent(o.UITransform).setContentSize(n, r),
                    this.createPrimaryButtonBackground(
                      e,
                      n,
                      r,
                      l,
                      this.startButtonMaterial,
                      new o.Color(62, 40, 105, 135)
                    ),
                    this.createGoldenTicketIcon(
                      `${e}TicketIcon`,
                      this.isLandscapeLayout ? 80 : 70,
                      this.isLandscapeLayout ? 52 : 46,
                      l
                    ).setPosition(-n / 2 + 92, 0);
                  const d = this.createText(
                    t,
                    this.isLandscapeLayout ? 31 : 27,
                    new o.Vec3(this.isLandscapeLayout ? 35 : 30, 0),
                    o.Color.WHITE,
                    l
                  );
                  return (
                    (d.enableOutline = !1),
                    (d.overflow = o.Label.Overflow.SHRINK),
                    d.node
                      .getComponent(o.UITransform)
                      .setContentSize(n - 150, r - 20),
                    this.bindSettingsButtonPressFeedback(l, a),
                    d
                  );
                }
                closeTikTokRewardsWindow() {
                  const e = this.tiktokRewardsWindowNode;
                  (null == e ? void 0 : e.isValid) &&
                    !this.tiktokRewardActionBusy &&
                    (this.playSound("button"),
                    (this.tiktokRewardsWindowNode = null),
                    (this.tiktokRewardsPanelNode = null),
                    (this.tiktokShortcutLabel = null),
                    (this.tiktokProfileLabel = null),
                    (this.tiktokTicketLabels = this.tiktokTicketLabels.filter(
                      (t) => {
                        var i;
                        return (
                          t.isValid &&
                          (null === (i = t.node) || void 0 === i
                            ? void 0
                            : i.isValid) &&
                          !this.isNodeInside(t.node, e)
                        );
                      }
                    )),
                    e.destroy(),
                    this.resumeGameplayAfterModal());
                }
                isNodeInside(e, t) {
                  let i = e;
                  for (; i; ) {
                    if (i === t) return !0;
                    i = i.parent;
                  }
                  return !1;
                }
                createGoldenTicketIcon(e, t, i, s) {
                  const a = new o.Node(e);
                  s.addChild(a),
                    a.addComponent(o.UITransform).setContentSize(t, i);
                  const n = a.addComponent(o.Graphics);
                  return (
                    (n.fillColor = new o.Color(255, 199, 56, 255)),
                    n.rect(-t / 2, -i / 2, t, i),
                    n.fill(),
                    (n.lineWidth = Math.max(2, 0.06 * i)),
                    (n.strokeColor = new o.Color(255, 238, 135, 255)),
                    n.rect(-t / 2 + 3, -i / 2 + 3, t - 6, i - 6),
                    n.stroke(),
                    (n.fillColor = new o.Color(76, 75, 142, 255)),
                    n.circle(-t / 2, 0, 0.16 * i),
                    n.circle(t / 2, 0, 0.16 * i),
                    n.fill(),
                    (n.lineWidth = Math.max(2, 0.045 * i)),
                    (n.strokeColor = new o.Color(202, 132, 24, 255)),
                    n.moveTo(0, 0.34 * -i),
                    n.lineTo(0, 0.34 * i),
                    n.stroke(),
                    a
                  );
                }
                loadTikTokTicketBalance() {
                  var e;
                  if ("tiktok" !== r.buildVariant.id) return;
                  const t = Number(
                    null !==
                      (e = this.getStoredItem(i.TIKTOK_TICKET_BALANCE_KEY)) &&
                      void 0 !== e
                      ? e
                      : 0
                  );
                  this.tiktokTicketBalance =
                    Number.isInteger(t) && t > 0 ? Math.min(t, 99) : 0;
                }
                awardTikTokTickets(e) {
                  "tiktok" !== r.buildVariant.id ||
                    e <= 0 ||
                    ((this.tiktokTicketBalance = Math.min(
                      99,
                      this.tiktokTicketBalance + e
                    )),
                    this.saveTikTokTicketBalance(),
                    this.updateTikTokRewardLabels());
                }
                consumeTikTokTicket() {
                  return !(
                    "tiktok" !== r.buildVariant.id ||
                    this.tiktokTicketBalance <= 0 ||
                    ((this.tiktokTicketBalance -= 1),
                    this.saveTikTokTicketBalance(),
                    this.updateTikTokRewardLabels(),
                    0)
                  );
                }
                saveTikTokTicketBalance() {
                  try {
                    this.setStoredItem(
                      i.TIKTOK_TICKET_BALANCE_KEY,
                      String(this.tiktokTicketBalance)
                    );
                  } catch (e) {}
                }
                hasTikTokReward(e) {
                  return "true" === this.getStoredItem(e);
                }
                markTikTokReward(e) {
                  try {
                    this.setStoredItem(e, "true");
                  } catch (e) {}
                }
                addTikTokHomeShortcut() {
                  return p(this, void 0, void 0, function* () {
                    if (
                      !this.tiktokRewardActionBusy &&
                      !this.hasTikTokReward(i.TIKTOK_SHORTCUT_ADD_REWARD_KEY)
                    ) {
                      this.tiktokRewardActionBusy = !0;
                      try {
                        (yield n.portal.canAddHomeShortcut()) &&
                          (yield n.portal.addHomeShortcut()) &&
                          (this.markTikTokReward(
                            i.TIKTOK_SHORTCUT_ADD_REWARD_KEY
                          ),
                          this.awardTikTokTickets(1));
                      } finally {
                        (this.tiktokRewardActionBusy = !1),
                          this.updateTikTokRewardLabels();
                      }
                    }
                  });
                }
                startTikTokProfileMission() {
                  return p(this, void 0, void 0, function* () {
                    if (
                      !this.tiktokRewardActionBusy &&
                      !this.hasTikTokReward(i.TIKTOK_PROFILE_REWARD_KEY)
                    ) {
                      this.tiktokRewardActionBusy = !0;
                      try {
                        (yield n.portal.canStartProfileMission()) &&
                          (yield n.portal.startProfileMission()) &&
                          (yield this.claimTikTokRevisitRewards());
                      } finally {
                        (this.tiktokRewardActionBusy = !1),
                          this.updateTikTokRewardLabels();
                      }
                    }
                  });
                }
                claimTikTokRevisitRewards() {
                  return p(this, void 0, void 0, function* () {
                    if (
                      "tiktok" === r.buildVariant.id &&
                      !this.tiktokRewardCheckBusy
                    ) {
                      this.tiktokRewardCheckBusy = !0;
                      try {
                        this.hasTikTokReward(
                          i.TIKTOK_SHORTCUT_RETURN_REWARD_KEY
                        ) ||
                          ((yield n.portal.claimHomeShortcutReward()) &&
                            (this.markTikTokReward(
                              i.TIKTOK_SHORTCUT_RETURN_REWARD_KEY
                            ),
                            this.awardTikTokTickets(1))),
                          this.hasTikTokReward(i.TIKTOK_PROFILE_REWARD_KEY) ||
                            ((yield n.portal.claimProfileMissionReward()) &&
                              (this.markTikTokReward(
                                i.TIKTOK_PROFILE_REWARD_KEY
                              ),
                              this.awardTikTokTickets(3)));
                      } finally {
                        (this.tiktokRewardCheckBusy = !1),
                          this.updateTikTokRewardLabels();
                      }
                    }
                  });
                }
                updateTikTokRewardLabels() {
                  var e, t;
                  this.tiktokTicketLabels = this.tiktokTicketLabels.filter(
                    (e) => {
                      var t;
                      return (
                        e.isValid &&
                        (null === (t = e.node) || void 0 === t
                          ? void 0
                          : t.isValid)
                      );
                    }
                  );
                  for (const e of this.tiktokTicketLabels)
                    e.string =
                      "TikTokStartRewardsLabel" === e.node.name
                        ? this.tiktokStartRewardsText()
                        : this.tiktokTicketBalanceText();
                  (null === (e = this.tiktokShortcutLabel) || void 0 === e
                    ? void 0
                    : e.node.isValid) &&
                    (this.tiktokShortcutLabel.string =
                      this.tiktokShortcutButtonText()),
                    (null === (t = this.tiktokProfileLabel) || void 0 === t
                      ? void 0
                      : t.node.isValid) &&
                      (this.tiktokProfileLabel.string =
                        this.tiktokProfileButtonText());
                }
                tiktokStartRewardsText() {
                  return `${this.localization.text("freeTickets")}  ${
                    this.tiktokTicketBalance
                  }`;
                }
                tiktokTicketBalanceText() {
                  return `${this.localization.text("ticketBalance")}: ${
                    this.tiktokTicketBalance
                  }`;
                }
                tiktokShortcutButtonText() {
                  return this.hasTikTokReward(i.TIKTOK_SHORTCUT_ADD_REWARD_KEY)
                    ? "HOME SHORTCUT  ✓"
                    : this.localization.text("homeShortcut");
                }
                tiktokProfileButtonText() {
                  return this.hasTikTokReward(i.TIKTOK_PROFILE_REWARD_KEY)
                    ? "PROFILE REWARD  ✓"
                    : this.localization.text("profileReward");
                }
                createInfinityIcon(e, t) {
                  const drawInfinity = (i, s, a, n) => {
                    const r = new o.Node(i);
                    e.addChild(r),
                      r.setPosition(t, s),
                      r.addComponent(o.UITransform).setContentSize(88, 62);
                    const l = r.addComponent(o.Graphics);
                    (l.lineWidth = a),
                      (l.lineCap = o.Graphics.LineCap.ROUND),
                      (l.lineJoin = o.Graphics.LineJoin.ROUND),
                      (l.strokeColor = n),
                      l.moveTo(-34, 0),
                      l.bezierCurveTo(-34, 23, -14, 23, 0, 0),
                      l.bezierCurveTo(14, -23, 34, -23, 34, 0),
                      l.bezierCurveTo(34, 23, 14, 23, 0, 0),
                      l.bezierCurveTo(-14, -23, -34, -23, -34, 0),
                      l.stroke();
                  };
                  drawInfinity(
                    "ClassicInfinityShadow",
                    -3,
                    16,
                    new o.Color(79, 48, 153, 180)
                  ),
                    drawInfinity("ClassicInfinity", 1, 11, o.Color.WHITE);
                }
                openClassicGame(e) {
                  this.openClassicGameWhenReady(e);
                }
                openClassicGameWhenReady(e) {
                  return p(this, void 0, void 0, function* () {
                    var t;
                    let i = this.startScreenNode;
                    if (
                      this.startScreenClosing ||
                      !this.startScreenVisible ||
                      !(null == i ? void 0 : i.isValid)
                    )
                      return;
                    this.startScreenClosing = !0;
                    const [s] = yield Promise.all([
                      this.waitForGameReady(),
                      this.soundEnabled
                        ? this.ensureAudioClips()
                        : Promise.resolve(),
                    ]);
                    i = this.startScreenNode;
                    const a =
                      e.isValid && e.parent === i
                        ? e
                        : null !==
                            (t =
                              null == i
                                ? void 0
                                : i.getChildByName("ClassicStartButton")) &&
                          void 0 !== t
                        ? t
                        : null;
                    s &&
                    (null == i ? void 0 : i.isValid) &&
                    (null == a ? void 0 : a.isValid) &&
                    this.startScreenVisible
                      ? (this.playSound("button"),
                        o
                          .tween(a)
                          .to(
                            0.08,
                            { scale: o.Vec3.ONE },
                            { easing: "quadOut" }
                          )
                          .start(),
                        o
                          .tween(i.getComponent(o.UIOpacity))
                          .to(0.16, { opacity: 0 }, { easing: "quadIn" })
                          .call(() => {
                            i.isValid && i.destroy(),
                              (this.startScreenNode = null),
                              (this.startScreenVisible = !1),
                              (this.startScreenClosing = !1),
                              this.isGameOverSequenceActive() ||
                                (this.playSound("levelStart"),
                                this.playLevelStartAnimation(),
                                this.reportPortalClassicStart());
                          })
                          .start())
                      : (this.startScreenClosing = !1);
                  });
                }
                shouldUseLandscapeLayout() {
                  const e = o.screen.windowSize;
                  return e.width / Math.max(e.height, 1) >= 1.2;
                }
                configureLayout(e) {
                  this.isLandscapeLayout = e;
                  const t = o.screen.windowSize,
                    a = t.width / Math.max(t.height, 1),
                    r = i.PORTRAIT_WIDTH / i.PORTRAIT_HEIGHT,
                    l =
                      e || a >= r
                        ? o.ResolutionPolicy.FIXED_HEIGHT
                        : o.ResolutionPolicy.FIXED_WIDTH;
                  o.view.setDesignResolutionSize(
                    e ? i.LANDSCAPE_WIDTH : i.PORTRAIT_WIDTH,
                    e ? i.LANDSCAPE_HEIGHT : i.PORTRAIT_HEIGHT,
                    l
                  );
                  const d = o.view.getVisibleSize();
                  (this.designWidth = d.width),
                    (this.designHeight = e
                      ? d.height
                      : Math.max(i.PORTRAIT_HEIGHT, d.height));
                  const c = e
                    ? Math.min(i.LANDSCAPE_BOARD_SIZE, 0.63 * this.designWidth)
                    : i.PORTRAIT_BOARD_SIZE;
                  (this.cellSize = c / i.UNITY_BOARD_SIZE_IN_CELLS),
                    (this.gap = 0),
                    (this.boardPadding =
                      (c - s.BoardModel.SIZE * this.cellSize) / 2);
                  const h = Math.max(0, i.PORTRAIT_HEIGHT - d.height),
                    u = e ? 0 : Math.min(100, h / 2);
                  (this.portraitViewportTop = u + d.height / 2),
                    (this.portraitSafeAreaTop = e
                      ? 0
                      : d.height * n.portal.getSafeAreaTopRatio());
                  const p = this.node.children.find((e) =>
                    e.getComponent(o.Camera)
                  );
                  p &&
                    (p.setPosition(0, u, p.position.z),
                    (p.getComponent(o.Camera).orthoHeight = d.height / 2));
                }
                rebuildStartScreenForLayout() {
                  var e, t;
                  if (!this.startScreenVisible) return;
                  const i =
                    Boolean(
                      null === (e = this.settingsWindowNode) || void 0 === e
                        ? void 0
                        : e.isValid
                    ) ||
                    Boolean(
                      null === (t = this.languageWindowNode) || void 0 === t
                        ? void 0
                        : t.isValid
                    );
                  this.destroySettingsWindow(), this.destroyLanguageWindow();
                  const s = this.node.children.filter(
                    (e) => !e.getComponent(o.Camera)
                  );
                  for (const e of s) e.removeFromParent(), e.destroy();
                  (this.startScreenNode = null),
                    (this.tiktokRewardsWindowNode = null),
                    (this.tiktokRewardsPanelNode = null),
                    (this.tiktokShortcutLabel = null),
                    (this.tiktokProfileLabel = null),
                    (this.tiktokTicketLabels = []),
                    (this.startScreenVisible = !1),
                    (this.startScreenClosing = !1),
                    this.createBackground(),
                    this.showStartScreen(!1),
                    i && this.showSettingsWindow(!1);
                }
                rebuildScreenForLayout() {
                  var e, t, i, s;
                  const a =
                      Boolean(
                        null === (e = this.settingsWindowNode) || void 0 === e
                          ? void 0
                          : e.isValid
                      ) ||
                      Boolean(
                        null === (t = this.languageWindowNode) || void 0 === t
                          ? void 0
                          : t.isValid
                      ),
                    n = Boolean(
                      null === (i = this.tiktokRewardsWindowNode) ||
                        void 0 === i
                        ? void 0
                        : i.isValid
                    ),
                    r = this.startScreenVisible,
                    l = this.gameOverState,
                    d = [null, null, null];
                  for (const e of this.pieces)
                    e.used ||
                      (d[e.slotIndex] = {
                        color: e.model.color,
                        cells: e.model.cells.map((e) => ({ x: e.x, y: e.y })),
                      });
                  this.saveGame(),
                    this.stopLevelStartAnimation(),
                    this.unscheduleAllCallbacks(),
                    (this.comboRevision += 1),
                    (this.draggedPiece = null),
                    (this.dragTouchId = null),
                    (this.dragPointerPosition = null),
                    null === (s = this.audioSource) || void 0 === s || s.stop(),
                    (this.settingsWindowNode = null),
                    (this.settingsPanelNode = null),
                    (this.languageWindowNode = null),
                    (this.languagePanelNode = null),
                    (this.tiktokRewardsWindowNode = null),
                    (this.tiktokRewardsPanelNode = null),
                    (this.tiktokShortcutLabel = null),
                    (this.tiktokProfileLabel = null),
                    (this.tiktokTicketLabels = []),
                    (this.startScreenNode = null),
                    (this.startScreenVisible = r),
                    (this.startScreenClosing = !1),
                    (this.secondChanceWindowNode = null),
                    (this.secondChancePanelNode = null),
                    (this.settingsVolumeSliderNode = null),
                    (this.settingsWindowClosing = !1),
                    (this.languageWindowClosing = !1),
                    (this.secondChanceBusy = !1),
                    (this.gameOverClosing = !1),
                    (this.gameOverSequenceRevision += 1),
                    (this.windowAnimationCallback = null),
                    (this.noMovesNode = null),
                    (this.gameOverNode = null),
                    (this.gameOverTitleLabel = null),
                    (this.gameOverScoreGroup = null),
                    (this.gameOverBestGroup = null),
                    (this.gameOverScoreCaptionLabel = null),
                    (this.gameOverBestCaptionLabel = null),
                    (this.gameOverConfettiNode = null),
                    (this.gameOverRestartButton = null),
                    (this.finalScoreLabel = null),
                    (this.finalBestLabel = null),
                    (this.scoreLabel = null),
                    (this.bestLabel = null),
                    (this.comboNode = null),
                    (this.comboNumberLabel = null),
                    (this.comboOpacity = null),
                    (this.comboHeartNode = null),
                    (this.comboHeartOpacity = null),
                    (this.comboHeartActive = !1),
                    (this.comboHeartAnimationTime = 0);
                  const c = this.node.children.filter(
                    (e) => !e.getComponent(o.Camera)
                  );
                  for (const e of c) e.removeFromParent(), e.destroy();
                  if (
                    (this.createBackground(),
                    this.buildScreen(),
                    this.redrawOccupiedCells(),
                    this.generatePieces(d),
                    this.updateScore(),
                    r && this.showStartScreen(!1),
                    a)
                  )
                    this.showSettingsWindow(!1);
                  else if (n) this.showTikTokRewardsWindow(!1);
                  else if ("notice" === l)
                    (this.gameOverState = "hidden"), this.showGameOver();
                  else if ("offer" === l) {
                    const e = ++this.gameOverSequenceRevision;
                    this.showSecondChanceOffer(e, !1);
                  } else if ("result" === l) {
                    const e = ++this.gameOverSequenceRevision;
                    this.prepareGameOverResult(),
                      this.showGameOverResult(e, !1);
                  }
                }
                loadSpriteFrame(e) {
                  return new Promise((t, i) => {
                    o.resources.load(e, o.SpriteFrame, (e, o) => {
                      e ? i(e) : t(o);
                    });
                  });
                }
                ensureLanguageLogo(e) {
                  const t =
                    "ru" === e ? this.startLogoRuFrame : this.startLogoEnFrame;
                  if (t) return Promise.resolve(t);
                  const i = this.languageLogoLoads[e];
                  if (i) return i;
                  const o =
                      "ru" === e
                        ? "textures/ui/logo-ru/spriteFrame"
                        : "textures/ui/logo-en/spriteFrame",
                    s = this.loadSpriteFrame(o).then(
                      (t) => (
                        "ru" === e
                          ? (this.startLogoRuFrame = t)
                          : (this.startLogoEnFrame = t),
                        delete this.languageLogoLoads[e],
                        t
                      ),
                      (t) => {
                        throw (delete this.languageLogoLoads[e], t);
                      }
                    );
                  return (this.languageLogoLoads[e] = s), s;
                }
                loadFont(e) {
                  return new Promise((t, i) => {
                    o.resources.load(e, o.Font, (e, o) => {
                      e ? i(e) : t(o);
                    });
                  });
                }
                loadEffectAsset(e) {
                  return new Promise((t, i) => {
                    o.resources.load(e, o.EffectAsset, (e, o) => {
                      e ? i(e) : t(o);
                    });
                  });
                }
                loadAudioClips() {
                  return p(this, void 0, void 0, function* () {
                    const e = [
                      ["button", "audio/button-click"],
                      ["clear", "audio/line-clear"],
                      ["gameOver", "audio/record-win-screen"],
                      ["levelStart", "audio/level-start"],
                      ["place", "audio/figure-place"],
                      ["score", "audio/score"],
                      ["windowOpen", "audio/window-open"],
                    ];
                    try {
                      const t = yield Promise.all(
                        e.map((e) =>
                          p(this, [e], void 0, function* ([e, t]) {
                            return [e, yield this.loadAudioClip(t)];
                          })
                        )
                      );
                      for (const [e, i] of t) this.audioClips.set(e, i);
                    } catch (e) {
                      console.warn(
                        "[blocks-web] Some sound effects could not be loaded",
                        e
                      );
                    }
                  });
                }
                ensureAudioClips() {
                  return (
                    this.audioLoadPromise ||
                      (this.audioLoadPromise = this.loadAudioClips()),
                    this.audioLoadPromise
                  );
                }
                loadAudioClip(e) {
                  return new Promise((t, i) => {
                    o.resources.load(e, o.AudioClip, (e, o) => {
                      e ? i(e) : t(o);
                    });
                  });
                }
                buildScreen() {
                  var e, t;
                  (null !== (e = this.node.getComponent(o.UITransform)) &&
                  void 0 !== e
                    ? e
                    : this.node.addComponent(o.UITransform)
                  ).setContentSize(this.designWidth, this.designHeight),
                    (this.audioSource =
                      null !== (t = this.node.getComponent(o.AudioSource)) &&
                      void 0 !== t
                        ? t
                        : this.node.addComponent(o.AudioSource)),
                    (this.node
                      .getChildByName("Background")
                      .getComponent(o.Sprite).spriteFrame =
                      this.boardAppearance.background),
                    this.isLandscapeLayout
                      ? this.buildLandscapeHeader()
                      : this.buildPortraitHeader(),
                    this.createSettingsButton(),
                    (this.boardNode = new o.Node("Board")),
                    this.node.addChild(this.boardNode),
                    this.boardNode.setPosition(
                      0,
                      this.isLandscapeLayout ? 0 : 60
                    ),
                    this.boardNode
                      .addComponent(o.UITransform)
                      .setContentSize(this.boardSize, this.boardSize),
                    this.createBoardFrame();
                  const a = new o.Node("Slots");
                  this.boardNode.addChild(a),
                    (this.occupiedNode = new o.Node("Occupied")),
                    this.boardNode.addChild(this.occupiedNode),
                    (this.occupiedBlockSprites = []),
                    (this.effectsNode = new o.Node("Effects")),
                    this.boardNode.addChild(this.effectsNode),
                    this.resetPlacementPreviewLayer();
                  for (let e = 0; e < s.BoardModel.SIZE; e += 1)
                    for (let t = 0; t < s.BoardModel.SIZE; t += 1)
                      this.createSpriteNode(
                        `Slot-${t}-${e}`,
                        this.slotFrame,
                        this.cellSize,
                        this.cellSize,
                        a
                      ).setPosition(this.cellPosition(t, e));
                  (this.piecesNode = new o.Node("Pieces")),
                    this.node.addChild(this.piecesNode);
                  const n = this.cellSize * i.UNITY_COMBO_CANVAS_SCALE;
                  if (
                    ((this.comboNode = new o.Node("ComboEffect")),
                    this.node.addChild(this.comboNode),
                    this.comboNode
                      .addComponent(o.UITransform)
                      .setContentSize(205 * n, 68 * n),
                    (this.comboOpacity = this.comboNode.addComponent(
                      o.UIOpacity
                    )),
                    (this.comboOpacity.opacity = 0),
                    "en" === this.localization.locale)
                  )
                    this.createSpriteNode(
                      "ComboWordEn",
                      this.comboWordEnFrame,
                      140 * n,
                      40 * n,
                      this.comboNode
                    ).setPosition(-32 * n, 0);
                  else {
                    const e = this.createText(
                      this.localization.text("combo"),
                      40 * n,
                      new o.Vec3(-32 * n, 0),
                      new o.Color(206, 246, 255),
                      this.comboNode,
                      !0
                    );
                    (e.node.name = "ComboWordRu"),
                      (e.outlineColor = new o.Color(45, 111, 232, 255)),
                      (e.outlineWidth = Math.round(3 * n)),
                      (e.enableShadow = !0),
                      (e.shadowColor = new o.Color(20, 55, 151, 220)),
                      e.shadowOffset.set(0, -3 * n),
                      (e.shadowBlur = 2 * n),
                      e.node
                        .getComponent(o.UITransform)
                        .setContentSize(150 * n, 55 * n);
                  }
                  (this.comboNumberLabel = this.createText(
                    "",
                    45 * n,
                    new o.Vec3(74 * n, 0),
                    new o.Color(255, 255, 0),
                    this.comboNode,
                    !0
                  )),
                    (this.comboNumberLabel.outlineWidth = Math.round(3 * n)),
                    this.comboNumberLabel.node
                      .getComponent(o.UITransform)
                      .setContentSize(64 * n, 68 * n),
                    (this.comboNode.active = !1),
                    this.createNoMovesNotice(),
                    this.createGameOverScreen();
                }
                createBoardFrame() {
                  const e = new o.Node("BoardFrame");
                  this.boardNode.addChild(e);
                  const t = e.addComponent(o.Graphics),
                    i = (this.boardSize - 2 * this.boardPadding) / 2,
                    s = (2 * i) / 676,
                    a = i + 14 * s,
                    n = 16 * s,
                    r = 0.5522847498 * n,
                    l = -i + s;
                  (t.fillColor = new o.Color(64, 84, 144)),
                    t.roundRect(-a, -a, 2 * a, 2 * a, n),
                    t.fill(),
                    (t.fillColor = new o.Color(41, 60, 115)),
                    t.moveTo(-a, l),
                    t.lineTo(a, l),
                    t.lineTo(a, a - n),
                    t.bezierCurveTo(a, a - n + r, a - n + r, a, a - n, a),
                    t.lineTo(-a + n, a),
                    t.bezierCurveTo(-a + n - r, a, -a, a - n + r, -a, a - n),
                    t.close(),
                    t.fill();
                  const d = n / Math.sqrt(2),
                    c = n * (4 / 3) * Math.tan(Math.PI / 16),
                    h = c / Math.sqrt(2),
                    u = a - n + d,
                    p = i + 3 * s;
                  (t.fillColor = new o.Color(24, 40, 82)),
                    t.moveTo(-u, u),
                    t.bezierCurveTo(-u + h, u + h, -a + n - c, a, -a + n, a),
                    t.lineTo(a - n, a),
                    t.bezierCurveTo(a - n + c, a, u - h, u + h, u, u),
                    t.lineTo(p, p),
                    t.lineTo(-p, p),
                    t.close(),
                    t.fill();
                  const m = [
                      new o.Color(51, 73, 125),
                      new o.Color(52, 73, 125),
                      new o.Color(57, 78, 133),
                      new o.Color(61, 81, 139),
                      new o.Color(64, 84, 144),
                    ],
                    edgeX = (e) => {
                      const t = e + a - n;
                      return a - n + Math.sqrt(Math.max(0, n * n - t * t));
                    };
                  for (let e = 0; e < m.length; e += 1) {
                    const i = l - e * s,
                      o = i - s;
                    (t.fillColor = m[e]),
                      t.moveTo(-edgeX(i), i),
                      t.lineTo(edgeX(i), i);
                    for (let e = 1; e <= 4; e += 1) {
                      const s = i + ((o - i) * e) / 4;
                      t.lineTo(edgeX(s), s);
                    }
                    t.lineTo(-edgeX(o), o);
                    for (let e = 1; e <= 4; e += 1) {
                      const s = o + ((i - o) * e) / 4;
                      t.lineTo(-edgeX(s), s);
                    }
                    t.close(), t.fill();
                  }
                  (t.fillColor = new o.Color(18, 20, 44)),
                    t.roundRect(-p, -p, 2 * p, 2 * p, 4 * s),
                    t.fill();
                  const g = i + 2 * s;
                  (t.fillColor = new o.Color(24, 28, 57)),
                    t.roundRect(-g, -g, 2 * g, 2 * g, 3 * s),
                    t.fill();
                }
                buildPortraitHeader() {
                  const e = this.designHeight / 1920,
                    t = this.portraitViewportTop - 136,
                    s = 140 * i.UNITY_COMBO_HEART_LAYOUT_SCALE * e,
                    a = i.UNITY_COMBO_HEART_OFFSET_FROM_SCORE_Y * e,
                    n =
                      this.portraitViewportTop -
                      this.portraitSafeAreaTop -
                      i.PORTRAIT_CENTER_SAFE_MARGIN -
                      s -
                      a;
                  this.createScoreDisplay(54, new o.Vec3(0, Math.min(t, n)));
                  const r = -this.designWidth / 2;
                  this.createSpriteNode(
                    "BestScoreCrown",
                    this.crownFrame,
                    70,
                    56,
                    this.node
                  ).setPosition(r + 64, this.portraitViewportTop - 66),
                    (this.bestLabel = this.createText(
                      "0",
                      34,
                      new o.Vec3(r + 109, this.portraitViewportTop - 70),
                      o.Color.WHITE,
                      this.node
                    )),
                    this.styleScoreText(this.bestLabel),
                    (this.bestLabel.customMaterial =
                      this.bestScoreGradientMaterial);
                  const l = this.bestLabel.node.getComponent(o.UITransform);
                  l.setAnchorPoint(0, 0.5),
                    l.setContentSize(156, 70),
                    (this.bestLabel.horizontalAlign =
                      o.Label.HorizontalAlign.LEFT),
                    (this.bestLabel.overflow = o.Label.Overflow.SHRINK),
                    (this.bestLabel.enableWrapText = !1);
                }
                buildLandscapeHeader() {
                  this.createScoreDisplay(
                    112,
                    new o.Vec3(-this.landscapeSideCenterX, 0)
                  );
                  const e = -this.designWidth / 2,
                    t = Math.min(1, (this.landscapeSideWidth - 24) / 360),
                    i = this.createSpriteNode(
                      "BestScoreCrown",
                      this.crownFrame,
                      70,
                      56,
                      this.node
                    );
                  i.getComponent(o.UITransform).setContentSize(112 * t, 90 * t),
                    i.setPosition(e + 94 * t, 454),
                    (this.bestLabel = this.createText(
                      "0",
                      54 * t,
                      new o.Vec3(e + 164 * t, 452),
                      o.Color.WHITE,
                      this.node
                    )),
                    this.styleScoreText(this.bestLabel),
                    (this.bestLabel.customMaterial =
                      this.bestScoreGradientMaterial);
                  const s = this.bestLabel.node.getComponent(o.UITransform);
                  s.setAnchorPoint(0, 0.5),
                    s.setContentSize(196 * t, 90 * t),
                    (this.bestLabel.horizontalAlign =
                      o.Label.HorizontalAlign.LEFT),
                    (this.bestLabel.overflow = o.Label.Overflow.SHRINK),
                    (this.bestLabel.enableWrapText = !1);
                }
                styleScoreText(e) {
                  (e.enableOutline = !1),
                    (e.enableShadow = !0),
                    (e.shadowColor = new o.Color(18, 29, 61, 180)),
                    (e.shadowOffset = new o.Vec2(0, -2)),
                    (e.shadowBlur = 0);
                }
                createScoreDisplay(e, t) {
                  const s = this.designHeight / 1920,
                    a = this.createSpriteNode(
                      "ComboHeart",
                      this.comboHeartFrame,
                      306 * i.UNITY_COMBO_HEART_LAYOUT_SCALE * s,
                      280 * i.UNITY_COMBO_HEART_LAYOUT_SCALE * s,
                      this.node
                    );
                  if (
                    (a.setPosition(
                      t.x + i.UNITY_COMBO_HEART_OFFSET_FROM_SCORE_X * s,
                      t.y + i.UNITY_COMBO_HEART_OFFSET_FROM_SCORE_Y * s
                    ),
                    this.isLandscapeLayout)
                  ) {
                    const e = Math.min(
                      300,
                      (this.landscapeSideWidth - 48) / 1.11
                    );
                    a
                      .getComponent(o.UITransform)
                      .setContentSize(e, (164 * e) / 180),
                      a.setPosition(t.x, t.y - 12);
                  }
                  (a.active = !1),
                    (this.comboHeartNode = a),
                    (this.comboHeartOpacity = a.addComponent(o.UIOpacity)),
                    (this.comboHeartOpacity.opacity = 0),
                    (this.comboHeartActive = !1),
                    (this.comboHeartAnimationTime = 0),
                    (this.scoreLabel = this.createText(
                      "0",
                      e,
                      t,
                      o.Color.WHITE,
                      this.node
                    )),
                    this.styleScoreText(this.scoreLabel),
                    this.isLandscapeLayout &&
                      (this.scoreLabel.node
                        .getComponent(o.UITransform)
                        .setContentSize(
                          Math.min(400, this.landscapeSideWidth - 48),
                          190
                        ),
                      (this.scoreLabel.overflow = o.Label.Overflow.SHRINK),
                      (this.scoreLabel.enableWrapText = !1)),
                    (this.displayedScore = 0),
                    (this.scoreTarget = 0),
                    (this.scoreFrameAccumulator = 0);
                }
                startNewGame(e = !1) {
                  var t;
                  (this.gameOverSequenceRevision += 1),
                    (this.gameOverState = "hidden"),
                    (this.gameOverReported = !1),
                    (this.secondChanceUses = 0),
                    (this.secondChancePieces = null),
                    (this.secondChanceBusy = !1),
                    (null === (t = this.secondChanceWindowNode) || void 0 === t
                      ? void 0
                      : t.isValid) && this.secondChanceWindowNode.destroy(),
                    (this.secondChanceWindowNode = null),
                    (this.secondChancePanelNode = null),
                    (this.bestScoreAtGameStart = this.bestScore),
                    this.model.reset(),
                    (this.comboRevision += 1),
                    this.comboNode &&
                      (o.Tween.stopAllByTarget(this.comboNode),
                      this.comboOpacity &&
                        o.Tween.stopAllByTarget(this.comboOpacity),
                      this.comboNumberLabel &&
                        o.Tween.stopAllByTarget(this.comboNumberLabel.node),
                      (this.comboNode.active = !1)),
                    (this.noMovesNode.active = !1),
                    (this.gameOverNode.active = !1),
                    (this.gameOverNode.getComponent(o.UIOpacity).opacity = 255),
                    (this.gameOverClosing = !1),
                    this.clearChildren(this.effectsNode),
                    this.resetPlacementPreviewLayer(),
                    this.hideOccupiedBlocks(),
                    this.generatePieces(),
                    this.startScreenVisible ||
                      (e && this.playSound("levelStart"),
                      this.playLevelStartAnimation()),
                    this.updateScore(),
                    this.saveGame(),
                    !this.portalEventsEnabled ||
                      this.startScreenVisible ||
                      this.isGameOverSequenceActive() ||
                      this.reportPortalClassicStart();
                }
                reportPortalClassicStart() {
                  this.portalEventsEnabled &&
                    ((this.portalClassicLevel += 1),
                    n.portal.updateLevel(this.portalClassicLevel),
                    n.portal.gameplayStart());
                }
                playLevelStartAnimation() {
                  if ((this.stopLevelStartAnimation(), !this.boardNode)) return;
                  const e = this.levelStartAnimationRevision,
                    t = new o.Node("LevelStartAnimation");
                  this.boardNode.addChild(t),
                    t.setSiblingIndex(this.boardNode.children.length - 1),
                    (this.levelStartAnimationNode = t),
                    (this.levelStartAnimationActive = !0);
                  const i = 0.055,
                    a = Array.from({ length: s.BoardModel.SIZE }, () => []),
                    showRow = (i) => {
                      if (e === this.levelStartAnimationRevision && t.isValid)
                        for (let e = 0; e < s.BoardModel.SIZE; e += 1) {
                          const o = Math.floor(
                              Math.random() * s.BoardModel.NORMAL_COLOR_COUNT
                            ),
                            n = this.createSpriteNode(
                              `LevelStart-${e}-${i}`,
                              this.blockFrames[o],
                              this.cellSize,
                              this.cellSize,
                              t
                            );
                          n.setPosition(this.cellPosition(e, i)), a[i].push(n);
                        }
                    },
                    hideRow = (t) => {
                      if (e === this.levelStartAnimationRevision) {
                        for (const e of a[t]) e.isValid && e.destroy();
                        a[t] = [];
                      }
                    };
                  showRow(0);
                  for (let e = 1; e < s.BoardModel.SIZE; e += 1)
                    this.scheduleOnce(() => showRow(e), e * i);
                  for (let e = s.BoardModel.SIZE - 1; e >= 0; e -= 1) {
                    const t = s.BoardModel.SIZE - 1 - e;
                    this.scheduleOnce(
                      () => hideRow(e),
                      (s.BoardModel.SIZE + t) * i
                    );
                  }
                  this.scheduleOnce(() => {
                    e === this.levelStartAnimationRevision &&
                      (t.isValid && t.destroy(),
                      (this.levelStartAnimationNode = null),
                      (this.levelStartAnimationActive = !1));
                  }, 2 * s.BoardModel.SIZE * i);
                }
                stopLevelStartAnimation() {
                  var e;
                  (this.levelStartAnimationRevision += 1),
                    (this.levelStartAnimationActive = !1),
                    (null === (e = this.levelStartAnimationNode) || void 0 === e
                      ? void 0
                      : e.isValid) && this.levelStartAnimationNode.destroy(),
                    (this.levelStartAnimationNode = null);
                }
                generatePieces(e, t = !1) {
                  this.clearChildren(this.piecesNode), (this.pieces = []);
                  const s = this.isLandscapeLayout
                    ? [
                        new o.Vec3(
                          this.landscapeSideCenterX,
                          0.3 * this.boardSize
                        ),
                        new o.Vec3(this.landscapeSideCenterX, 0),
                        new o.Vec3(
                          this.landscapeSideCenterX,
                          0.3 * -this.boardSize
                        ),
                      ]
                    : [
                        new o.Vec3(-205, i.PORTRAIT_PIECE_HOME_Y),
                        new o.Vec3(0, i.PORTRAIT_PIECE_HOME_Y),
                        new o.Vec3(205, i.PORTRAIT_PIECE_HOME_Y),
                      ];
                  this.model.configureClassicGeneration(
                    r.buildVariant.classicGenerationEnabled,
                    this.bestScoreAtGameStart
                  );
                  const a = e ? null : this.model.createPieceSet(s.length);
                  if (a && 0 === a.length) this.showGameOver();
                  else {
                    for (let n = 0; n < s.length; n += 1) {
                      const r = e ? e[n] : a[n];
                      if (!r) continue;
                      const l = this.createPieceNode(r);
                      this.piecesNode.addChild(l);
                      const d = this.pieceHomeScaleFor(r),
                        c = this.keepPortraitPieceInsideBoard(l, s[n], d);
                      l.setPosition(c);
                      const h = new o.Node("PieceTouchArea");
                      this.piecesNode.addChild(h);
                      const u =
                          (i.UNITY_PIECE_TOUCH_AREA_SIZE * this.designHeight) /
                          1920,
                        p = l.getComponent(o.UITransform).contentSize,
                        m = this.isLandscapeLayout
                          ? Math.max(u, Math.max(p.width, p.height) * d + 28)
                          : u;
                      h.addComponent(o.UITransform).setContentSize(m, m),
                        h.setPosition(c);
                      const g = !this.startScreenVisible;
                      g
                        ? (l.setScale(0.01, 0.01),
                          o
                            .tween(l)
                            .delay(0.06 * n)
                            .to(
                              0.2,
                              { scale: new o.Vec3(d, d, 1) },
                              { easing: "backOut" }
                            )
                            .start())
                        : l.setScale(d, d),
                        !g ||
                          (e && !t) ||
                          this.scheduleOnce(
                            () => this.showPieceSpawnGlow(c),
                            0.25
                          );
                      const S = {
                        model: r,
                        node: l,
                        touchNode: h,
                        home: c,
                        slotIndex: n,
                        gridWidth: Math.max(...r.cells.map((e) => e.x)) + 1,
                        gridHeight: Math.max(...r.cells.map((e) => e.y)) + 1,
                        used: !1,
                      };
                      h.on(o.Node.EventType.TOUCH_START, (e) => {
                        this.onPieceTouchStart(S, e);
                      }),
                        h.on(o.Node.EventType.TOUCH_MOVE, (e) => {
                          this.onPieceTouchMove(S, e);
                        }),
                        h.on(o.Node.EventType.TOUCH_END, (e) => {
                          this.onPieceTouchEnd(S, e);
                        }),
                        h.on(o.Node.EventType.TOUCH_CANCEL, (e) => {
                          this.onPieceTouchEnd(S, e);
                        }),
                        this.pieces.push(S);
                    }
                    this.model.hasAnyMove(this.pieces.map((e) => e.model)) ||
                      this.showGameOver();
                  }
                }
                showPieceSpawnGlow(e) {
                  var t;
                  (null === (t = this.piecesNode) || void 0 === t
                    ? void 0
                    : t.isValid) &&
                    this.createPieceSpawnGlowEffect(e, this.piecesNode, !0);
                }
                createPieceSpawnGlowEffect(e, t, i = !1) {
                  const s = new o.Node("PieceSpawnGlow");
                  t.addChild(s), s.setPosition(e), i && s.setSiblingIndex(0);
                  const a = this.isLandscapeLayout ? 160 : 132,
                    n = this.createSpriteNode(
                      "SoftGlow",
                      this.pieceSpawnGlowFrame,
                      a,
                      a,
                      s
                    );
                  n.setScale(0.45, 0.45),
                    (n.getComponent(o.Sprite).color = new o.Color(
                      88,
                      204,
                      255,
                      255
                    ));
                  const r = n.addComponent(o.UIOpacity);
                  (r.opacity = 0),
                    o
                      .tween(n)
                      .to(
                        0.1,
                        { scale: new o.Vec3(1.08, 1.08, 1) },
                        { easing: "quadOut" }
                      )
                      .to(
                        0.22,
                        { scale: new o.Vec3(1.28, 1.28, 1) },
                        { easing: "quadIn" }
                      )
                      .start(),
                    o
                      .tween(r)
                      .to(0.07, { opacity: 210 })
                      .delay(0.055)
                      .to(0.2, { opacity: 0 })
                      .start();
                  const l = this.isLandscapeLayout ? 58 : 46,
                    d = [
                      new o.Vec3(-0.82, 0.18),
                      new o.Vec3(0.74, 0.42),
                      new o.Vec3(-0.45, -0.7),
                      new o.Vec3(0.92, -0.52),
                      new o.Vec3(0.08, 0.86),
                    ];
                  for (let e = 0; e < d.length; e += 1) {
                    const t = d[e],
                      i = new o.Node(`GlowDot-${e}`);
                    s.addChild(i),
                      i.setPosition(t.x * l, t.y * l),
                      i.setScale(0.25, 0.25),
                      i.addComponent(o.UITransform).setContentSize(28, 28);
                    const a = i.addComponent(o.Graphics);
                    (a.fillColor = new o.Color(96, 205, 255, 72)),
                      a.circle(0, 0, 10),
                      a.fill(),
                      (a.fillColor = new o.Color(226, 249, 255, 245)),
                      a.circle(0, 0, 3.2),
                      a.fill();
                    const n = i.addComponent(o.UIOpacity);
                    n.opacity = 0;
                    const r = 0.025 * e;
                    o
                      .tween(i)
                      .delay(r)
                      .to(
                        0.09,
                        { scale: new o.Vec3(1, 1, 1) },
                        { easing: "quadOut" }
                      )
                      .to(
                        0.18,
                        { scale: new o.Vec3(0.35, 0.35, 1) },
                        { easing: "quadIn" }
                      )
                      .start(),
                      o
                        .tween(n)
                        .delay(r)
                        .to(0.055, { opacity: 255 })
                        .delay(0.075)
                        .to(0.14, { opacity: 0 })
                        .start();
                  }
                  this.scheduleOnce(() => {
                    s.isValid && s.destroy();
                  }, 0.42);
                }
                createPieceNode(e) {
                  const t = new o.Node("Piece"),
                    s = Math.max(...e.cells.map((e) => e.x)) + 1,
                    a = Math.max(...e.cells.map((e) => e.y)) + 1;
                  t.addComponent(o.UITransform).setContentSize(
                    s * this.pitch,
                    a * this.pitch
                  );
                  for (const o of e.cells)
                    this.createSpriteNode(
                      "BlockShadow",
                      this.shadowFrame,
                      this.cellSize * i.UNITY_BLOCK_SHADOW_SCALE,
                      this.cellSize * i.UNITY_BLOCK_SHADOW_SCALE,
                      t
                    ).setPosition(
                      (o.x - (s - 1) / 2) * this.pitch +
                        this.cellSize * i.UNITY_BLOCK_SHADOW_OFFSET,
                      (o.y - (a - 1) / 2) * this.pitch -
                        this.cellSize * i.UNITY_BLOCK_SHADOW_OFFSET
                    );
                  for (const i of e.cells)
                    this.createSpriteNode(
                      "Block",
                      this.blockFrames[e.color],
                      this.cellSize,
                      this.cellSize,
                      t
                    ).setPosition(
                      (i.x - (s - 1) / 2) * this.pitch,
                      (i.y - (a - 1) / 2) * this.pitch
                    );
                  return t;
                }
                keepPortraitPieceInsideBoard(e, t, i) {
                  var s, a;
                  if (this.isLandscapeLayout) return t.clone();
                  const n = e.getComponent(o.UITransform).contentSize.width * i,
                    r =
                      null !==
                        (a =
                          null === (s = this.boardNode) || void 0 === s
                            ? void 0
                            : s.position.x) && void 0 !== a
                        ? a
                        : 0,
                    l = r - this.boardSize / 2 + n / 2,
                    d = r + this.boardSize / 2 - n / 2,
                    c = Math.min(d, Math.max(l, t.x));
                  return new o.Vec3(c, t.y, t.z);
                }
                onPieceTouchStart(e, t) {
                  var i, o;
                  e.used ||
                    this.levelStartAnimationActive ||
                    (null === (i = this.settingsWindowNode) || void 0 === i
                      ? void 0
                      : i.isValid) ||
                    (null === (o = this.languageWindowNode) || void 0 === o
                      ? void 0
                      : o.isValid) ||
                    this.draggedPiece ||
                    (this.clearPlacementPreview(),
                    (this.draggedPiece = e),
                    (this.dragTouchId = t.getID()),
                    this.setPieceShadows(e.node, !0),
                    e.node.setSiblingIndex(this.piecesNode.children.length - 1),
                    this.beginPieceDrag(e, t),
                    this.updatePlacementPreview(e),
                    this.playSound("windowOpen"));
                }
                onPieceTouchMove(e, t) {
                  !e.used &&
                    e === this.draggedPiece &&
                    this.isActiveDragTouch(t) &&
                    (this.updatePieceDragTarget(e, t),
                    this.updatePlacementPreview(e));
                }
                onPieceTouchEnd(e, t) {
                  if (e !== this.draggedPiece || !this.isActiveDragTouch(t))
                    return;
                  if (
                    (this.updatePieceDragTarget(e, t),
                    (this.draggedPiece = null),
                    (this.dragTouchId = null),
                    (this.dragPointerPosition = null),
                    this.clearPlacementPreview(),
                    e.used)
                  )
                    return;
                  const o = this.findPlacementOrigin(e);
                  if (o && this.model.canPlace(e.model, o.x, o.y)) {
                    const t = this.pieces
                        .filter((e) => !e.used)
                        .map((e) => e.model),
                      s = this.model.isUniqueBestMove(e.model, o.x, o.y, t),
                      a = this.model.place(e.model, o.x, o.y, e.slotIndex),
                      r = t.filter((t) => t !== e.model),
                      l = s && this.model.hasAnyMove(r);
                    return (
                      (e.used = !0),
                      e.touchNode.destroy(),
                      e.node.destroy(),
                      this.redrawOccupiedCells(),
                      this.playPlacementFeedback(a, e.model, o.x, o.y, l),
                      a.clearedRows.length + a.clearedColumns.length >=
                        i.PORTAL_HAPPY_MOMENT_LINE_COUNT &&
                        n.portal.happyMoment(),
                      this.updateScore(!0),
                      this.finishTurn(),
                      void this.saveGame()
                    );
                  }
                  this.returnPieceHome(e);
                }
                isActiveDragTouch(e) {
                  const t = e.getID();
                  return (
                    null === this.dragTouchId ||
                    null === t ||
                    t === this.dragTouchId
                  );
                }
                beginPieceDrag(e, t) {
                  var i, s, a, n;
                  o.Tween.stopAllByTarget(e.node);
                  const r = this.touchPosition(t),
                    l =
                      (null !==
                        (s =
                          null === (i = this.boardNode) || void 0 === i
                            ? void 0
                            : i.position.y) && void 0 !== s
                        ? s
                        : 0) -
                      this.boardSize / 2 +
                      this.boardPadding,
                    d =
                      null !==
                        (n =
                          null === (a = this.boardNode) || void 0 === a
                            ? void 0
                            : a.position.y) && void 0 !== n
                        ? n
                        : 0;
                  (this.dragPointerPosition = r),
                    (this.dragLift = 0),
                    (this.dragLiftVelocity = 0),
                    (this.dragScale = this.pieceHomeScaleFor(e.model)),
                    (this.dragScaleVelocity = 0),
                    (this.dragStartPointerY = r.y),
                    (this.dragHomeY = e.home.y),
                    (this.dragDefaultLift = o.sys.isMobile
                      ? this.isLandscapeLayout
                        ? 105
                        : l - this.dragHomeY
                      : 0),
                    (this.dragStartLift = o.sys.isMobile
                      ? this.isLandscapeLayout
                        ? this.dragDefaultLift
                        : this.dragDefaultLift - (r.y - this.dragHomeY)
                      : 0),
                    (this.dragMaxMoveDelta = Math.max(d - this.dragHomeY, 1)),
                    this.updateDragLiftTarget(r.y),
                    e.node.setPosition(r.x, r.y),
                    e.node.setScale(this.dragScale, this.dragScale);
                }
                updatePieceDragTarget(e, t) {
                  if (e !== this.draggedPiece) return;
                  const i = this.touchPosition(t);
                  (this.dragPointerPosition = i),
                    this.updateDragLiftTarget(i.y),
                    e.node.setPosition(i.x, i.y + this.dragLift);
                }
                touchPosition(e) {
                  const t = e.getUILocation();
                  return this.node
                    .getComponent(o.UITransform)
                    .convertToNodeSpaceAR(new o.Vec3(t.x, t.y));
                }
                updateDragLiftTarget(e) {
                  if (!o.sys.isMobile) return void (this.dragLiftTarget = 0);
                  if (this.isLandscapeLayout)
                    return void (this.dragLiftTarget = this.dragDefaultLift);
                  const t = e - this.dragHomeY,
                    i = Math.min(1, Math.max(0, t / this.dragMaxMoveDelta)),
                    s =
                      this.dragStartLift +
                      (this.dragDefaultLift - this.dragStartLift) * i,
                    a =
                      this.dragStartPointerY +
                      (this.dragHomeY - this.dragStartPointerY) * i,
                    n = Math.min(this.dragMaxMoveDelta, Math.max(0, e - a));
                  this.dragLiftTarget = s + n;
                }
                smoothDamp(e, t, i, o, s, a) {
                  const n = 2 / Math.max(1e-4, o),
                    r = n * Math.max(0, s),
                    l = 1 / (1 + r + 0.48 * r * r + 0.235 * r * r * r),
                    d = e - t,
                    c = (i + n * d) * s;
                  let h = (i - n * c) * l,
                    u = t + (d + c) * l;
                  t - e > 0 == u > t && ((u = t), (h = 0)),
                    (a.value = u),
                    (a.velocity = h);
                }
                returnPieceHome(e) {
                  this.setPieceShadows(e.node, !0);
                  const t = this.pieceHomeScaleFor(e.model);
                  o.Tween.stopAllByTarget(e.node),
                    o
                      .tween(e.node)
                      .to(
                        0.18,
                        {
                          position: e.home.clone(),
                          scale: new o.Vec3(t, t, 1),
                        },
                        { easing: "quadOut" }
                      )
                      .start();
                }
                findPlacementOrigin(e) {
                  if (!this.boardNode) return null;
                  const t = e.node.position,
                    o = this.boardNode.position,
                    a = this.cellPosition(0, 0),
                    n = t.x - ((e.gridWidth - 1) / 2) * this.pitch,
                    r = t.y - ((e.gridHeight - 1) / 2) * this.pitch,
                    l = (n - o.x - a.x) / this.pitch,
                    d = (r - o.y - a.y) / this.pitch,
                    c = Math.round(l),
                    h = Math.round(d);
                  if (
                    c < 0 ||
                    h < 0 ||
                    c >= s.BoardModel.SIZE ||
                    h >= s.BoardModel.SIZE
                  )
                    return null;
                  const u =
                    i.UNITY_PLACEMENT_MAGNETIZE_THRESHOLD *
                    i.UNITY_PLACEMENT_MAGNETIZE_THRESHOLD;
                  let p = null,
                    m = Number.POSITIVE_INFINITY;
                  for (let t = -1; t <= 1; t += 1)
                    for (let i = -1; i <= 1; i += 1) {
                      const o = c + i,
                        a = h + t;
                      if (
                        o < 0 ||
                        a < 0 ||
                        o >= s.BoardModel.SIZE ||
                        a >= s.BoardModel.SIZE ||
                        !this.model.canPlace(e.model, o, a)
                      )
                        continue;
                      const n = o - l,
                        r = a - d,
                        g = n * n + r * r;
                      g < u && g < m && ((p = { x: o, y: a }), (m = g));
                    }
                  return p;
                }
                setPieceShadows(e, t) {
                  for (const i of e.children)
                    "BlockShadow" === i.name && (i.active = t);
                }
                updatePlacementPreview(e) {
                  const t = this.placementPreviewNode;
                  if (!t) return;
                  const i = this.findPlacementOrigin(e);
                  if (!i) {
                    if (
                      this.placementPreviewPiece === e &&
                      Number.isNaN(this.placementPreviewOriginX) &&
                      Number.isNaN(this.placementPreviewOriginY)
                    )
                      return;
                    return (
                      (this.placementPreviewPiece = e),
                      (this.placementPreviewOriginX = Number.NaN),
                      (this.placementPreviewOriginY = Number.NaN),
                      this.hidePlacementPreviewBlocks(),
                      void this.clearLineMatchPreview()
                    );
                  }
                  if (
                    this.placementPreviewPiece === e &&
                    this.placementPreviewOriginX === i.x &&
                    this.placementPreviewOriginY === i.y
                  )
                    return;
                  if (
                    ((this.placementPreviewPiece = e),
                    (this.placementPreviewOriginX = i.x),
                    (this.placementPreviewOriginY = i.y),
                    this.hidePlacementPreviewBlocks(),
                    !this.model.canPlace(e.model, i.x, i.y))
                  )
                    return void this.clearLineMatchPreview();
                  let a = 0;
                  for (const n of e.model.cells) {
                    const r = i.x + n.x,
                      l = i.y + n.y;
                    if (
                      r < 0 ||
                      l < 0 ||
                      r >= s.BoardModel.SIZE ||
                      l >= s.BoardModel.SIZE
                    )
                      continue;
                    const d = this.cellPosition(r, l);
                    let c = this.placementPreviewBlocks[a];
                    (null == c ? void 0 : c.isValid) ||
                      ((c = this.createSpriteNode(
                        "PlacementPreviewBlock",
                        this.blockFrames[e.model.color],
                        this.cellSize,
                        this.cellSize,
                        t
                      )),
                      (this.placementPreviewBlocks[a] = c)),
                      (c.active = !0),
                      c.setPosition(d),
                      c
                        .getComponent(o.UITransform)
                        .setContentSize(this.cellSize, this.cellSize);
                    const h = c.getComponent(o.Sprite);
                    (h.spriteFrame = this.blockFrames[e.model.color]),
                      this.applyTileMaterial(h),
                      (h.color = new o.Color(255, 255, 255, 121)),
                      (a += 1);
                  }
                  const n = this.model.completedLinesForPlacement(
                    e.model,
                    i.x,
                    i.y
                  );
                  this.updateLineMatchPreview(
                    e.model.color,
                    n.rows,
                    n.columns,
                    e.model.cells.map((e) => ({ x: i.x + e.x, y: i.y + e.y }))
                  );
                }
                resetPlacementPreviewLayer() {
                  (this.placementPreviewNode = new o.Node("PlacementPreview")),
                    this.effectsNode.addChild(this.placementPreviewNode),
                    (this.placementPreviewBlocks = []),
                    this.resetPlacementPreviewCache(),
                    (this.placementLinePreviewNode = new o.Node(
                      "PlacementLinePreview"
                    )),
                    this.effectsNode.addChild(this.placementLinePreviewNode),
                    (this.placementLinePreviewKey = "");
                }
                clearPlacementPreview() {
                  this.resetPlacementPreviewCache(),
                    this.hidePlacementPreviewBlocks(),
                    this.clearLineMatchPreview();
                }
                resetPlacementPreviewCache() {
                  (this.placementPreviewPiece = null),
                    (this.placementPreviewOriginX = Number.NaN),
                    (this.placementPreviewOriginY = Number.NaN);
                }
                hidePlacementPreviewBlocks() {
                  for (const e of this.placementPreviewBlocks)
                    e.isValid && (e.active = !1);
                }
                updateLineMatchPreview(e, t, i, a) {
                  const n = this.placementLinePreviewNode;
                  if (!(null == n ? void 0 : n.isValid)) return;
                  if (0 === t.length && 0 === i.length)
                    return void this.clearLineMatchPreview();
                  const r = a.map((e) => `${e.x}:${e.y}`).join(","),
                    l = `${e}|${t.join(",")}|${i.join(",")}|${r}`;
                  if (l === this.placementLinePreviewKey) return;
                  this.clearChildren(n), (this.placementLinePreviewKey = l);
                  const d = new Set();
                  for (const e of t)
                    for (let t = 0; t < s.BoardModel.SIZE; t += 1)
                      d.add(`${t}:${e}`);
                  for (const e of i)
                    for (let t = 0; t < s.BoardModel.SIZE; t += 1)
                      d.add(`${e}:${t}`);
                  const c = new Set(a.map((e) => `${e.x}:${e.y}`));
                  for (const t of d) {
                    if (c.has(t)) continue;
                    const [i, s] = t.split(":").map(Number),
                      a = this.createSpriteNode(
                        `Match-${i}-${s}`,
                        this.blockFrames[e],
                        this.cellSize,
                        this.cellSize,
                        n
                      );
                    a.setPosition(this.cellPosition(i, s)),
                      (a.addComponent(o.UIOpacity).opacity = 255);
                  }
                  const h = new o.Node("LineMatchOutline");
                  n.addChild(h);
                  const u = h.addComponent(o.Graphics),
                    p = Math.max(4, 0.065 * this.cellSize),
                    m = this.lineClearTint(e);
                  u.fillColor = new o.Color(
                    Math.round(0.58 * m.r),
                    Math.round(0.58 * m.g),
                    Math.round(0.58 * m.b),
                    255
                  );
                  for (const e of d) {
                    const [t, i] = e.split(":").map(Number),
                      o = this.cellPosition(t, i),
                      s = o.x - this.cellSize / 2,
                      a = o.y - this.cellSize / 2;
                    d.has(`${t - 1}:${i}`) || u.rect(s, a, p, this.cellSize),
                      d.has(`${t + 1}:${i}`) ||
                        u.rect(s + this.cellSize - p, a, p, this.cellSize),
                      d.has(`${t}:${i - 1}`) || u.rect(s, a, this.cellSize, p),
                      d.has(`${t}:${i + 1}`) ||
                        u.rect(s, a + this.cellSize - p, this.cellSize, p);
                  }
                  u.fill();
                  for (const e of t)
                    this.createRepeatingLineSpawnGlow(!0, e, n);
                  for (const e of i)
                    this.createRepeatingLineSpawnGlow(!1, e, n);
                }
                createRepeatingLineSpawnGlow(e, t, i) {
                  const a = new o.Node(
                    e ? `RowMatchPulse-${t}` : `ColumnMatchPulse-${t}`
                  );
                  i.addChild(a),
                    a.setPosition(
                      e
                        ? new o.Vec3(0, this.cellPosition(0, t).y)
                        : new o.Vec3(this.cellPosition(t, 0).x, 0)
                    ),
                    (a.angle = e ? 0 : 90);
                  const n =
                      (s.BoardModel.SIZE - 1) * this.pitch + this.cellSize,
                    r = [
                      [-0.5, 0],
                      [-0.375, 0.5],
                      [-0.25, 0.5],
                      [0, 0.5],
                      [0.25, 0.5],
                      [0.375, 0.5],
                      [0.5, 0],
                      [0.375, -0.5],
                      [0.25, -0.5],
                      [0, -0.5],
                      [-0.25, -0.5],
                      [-0.375, -0.5],
                    ],
                    l = [
                      0.02, 0.67, 0.25, 0.84, 0.42, 0.08, 0.75, 0.34, 0.92, 0.5,
                      0.17, 0.58,
                    ];
                  for (let e = 0; e < r.length; e += 1) {
                    const [t, i] = r[e],
                      s = this.createSpriteNode(
                        `LineMatchGlowDot-${e}`,
                        this.lineMatchDotFrame,
                        0.42 * this.cellSize,
                        0.42 * this.cellSize,
                        a
                      );
                    s.setPosition(t * n, i * (this.cellSize + this.gap)),
                      (s.getComponent(o.Sprite).color = new o.Color(
                        76,
                        180,
                        255,
                        255
                      )),
                      s.setScale(0.48, 0.48);
                    const d = new o.Node(`LineMatchGlowCore-${e}`);
                    s.addChild(d),
                      d.addComponent(o.UITransform).setContentSize(16, 16);
                    const c = d.addComponent(o.Graphics);
                    (c.fillColor = new o.Color(28, 104, 205, 135)),
                      c.circle(0.8, -0.8, 5.4),
                      c.fill(),
                      (c.fillColor = new o.Color(145, 226, 255, 215)),
                      c.circle(0, 0, 3.7),
                      c.fill(),
                      (c.fillColor = new o.Color(240, 253, 255, 255)),
                      c.circle(0, 0, 1.9),
                      c.fill();
                    const h = s.addComponent(o.UIOpacity);
                    h.opacity = 0;
                    const u = l[e],
                      p = 0.44 + (e % 3) * 0.05,
                      m = 0.16,
                      g = 0.08,
                      S = p - m - g,
                      C = 1.5 - u - p;
                    o
                      .tween(s)
                      .call(() => s.setScale(0.48, 0.48))
                      .delay(u)
                      .to(
                        m,
                        { scale: new o.Vec3(1.18, 1.18, 1) },
                        { easing: "quadOut" }
                      )
                      .delay(g)
                      .to(
                        S,
                        { scale: new o.Vec3(0.5, 0.5, 1) },
                        { easing: "quadIn" }
                      )
                      .delay(C)
                      .union()
                      .repeatForever()
                      .start(),
                      o
                        .tween(h)
                        .delay(u)
                        .to(m, { opacity: 245 }, { easing: "quadOut" })
                        .delay(g)
                        .to(S, { opacity: 0 }, { easing: "quadIn" })
                        .delay(C)
                        .union()
                        .repeatForever()
                        .start();
                  }
                }
                clearLineMatchPreview() {
                  var e;
                  (null === (e = this.placementLinePreviewNode) || void 0 === e
                    ? void 0
                    : e.isValid) &&
                    this.clearChildren(this.placementLinePreviewNode),
                    (this.placementLinePreviewKey = "");
                }
                finishTurn() {
                  const e = this.pieces.filter((e) => !e.used);
                  if (0 === e.length)
                    return (
                      this.generatePieces(),
                      void this.showConditionalPortalInterstitialIfAvailable()
                    );
                  this.model.hasAnyMove(e.map((e) => e.model)) ||
                    this.showGameOver();
                }
                saveGame() {
                  var e;
                  const t = [null, null, null];
                  for (const e of this.pieces)
                    e.used ||
                      (t[e.slotIndex] = {
                        color: e.model.color,
                        cells: e.model.cells.map((e) => ({ x: e.x, y: e.y })),
                      });
                  const o = {
                    version: 2,
                    figureConfigVersion: s.BoardModel.FIGURE_CONFIG_VERSION,
                    board: this.model.createSnapshot(),
                    pieces: t,
                    savedAt: Date.now(),
                    bestAtStart: this.bestScoreAtGameStart,
                    secondChanceUses: this.secondChanceUses,
                    secondChancePieces:
                      null === (e = this.secondChancePieces) || void 0 === e
                        ? void 0
                        : e.map((e) => ({
                            color: e.color,
                            cells: e.cells.map((e) => ({ x: e.x, y: e.y })),
                          })),
                  };
                  try {
                    this.setStoredItem(i.GAME_STATE_KEY, JSON.stringify(o));
                  } catch (e) {
                    console.warn(
                      "[blocks-web] Could not save the current game",
                      e
                    );
                  }
                }
                restoreGame() {
                  var e;
                  try {
                    const t = this.getStoredItem(i.GAME_STATE_KEY);
                    if (!t) return !1;
                    const o = JSON.parse(t);
                    if (
                      (1 !== o.version && 2 !== o.version) ||
                      o.figureConfigVersion !==
                        s.BoardModel.FIGURE_CONFIG_VERSION ||
                      !Array.isArray(o.pieces) ||
                      3 !== o.pieces.length
                    )
                      return this.discardInvalidSave(), !1;
                    const a = 1 === o.version,
                      n = a ? this.remapLegacyBoardSnapshot(o.board) : o.board;
                    if (!this.model.restoreSnapshot(n))
                      return this.discardInvalidSave(), !1;
                    this.model.restoreClassicClock(
                      null !== (e = o.savedAt) && void 0 !== e ? e : Date.now()
                    );
                    const r = [];
                    for (const e of o.pieces) {
                      if (null === e) {
                        r.push(null);
                        continue;
                      }
                      const t = this.restorePiece(e, a);
                      if (!t) return this.discardInvalidSave(), !1;
                      r.push(t);
                    }
                    if (!r.some((e) => null !== e))
                      return this.discardInvalidSave(), !1;
                    if (
                      ((this.bestScoreAtGameStart =
                        Number.isInteger(o.bestAtStart) && o.bestAtStart >= 0
                          ? o.bestAtStart
                          : this.bestScore),
                      (this.secondChanceUses =
                        Number.isInteger(o.secondChanceUses) &&
                        o.secondChanceUses >= 0 &&
                        o.secondChanceUses <= 3
                          ? o.secondChanceUses
                          : 0),
                      (this.secondChancePieces = null),
                      Array.isArray(o.secondChancePieces) &&
                        3 === o.secondChancePieces.length &&
                        !this.model.hasAnyMove(r.filter((e) => null !== e)))
                    ) {
                      const e = o.secondChancePieces.map((e) =>
                        this.restorePiece(e, a)
                      );
                      e.every((e) => null !== e) &&
                        ((this.secondChancePieces = e),
                        (this.secondChanceUses = Math.max(
                          1,
                          this.secondChanceUses
                        )));
                    }
                    return (
                      this.redrawOccupiedCells(),
                      this.generatePieces(r),
                      this.updateScore(),
                      a && this.saveGame(),
                      !0
                    );
                  } catch (e) {
                    return this.discardInvalidSave(), !1;
                  }
                }
                restorePiece(e, t = !1) {
                  if (!e || "object" != typeof e) return null;
                  const o = e,
                    a = o.color,
                    n = t ? i.LEGACY_COLOR_TO_UNITY[a] : a;
                  if (
                    !Number.isInteger(a) ||
                    !Number.isInteger(n) ||
                    n < 0 ||
                    n >= s.BoardModel.NORMAL_COLOR_COUNT ||
                    !Array.isArray(o.cells) ||
                    o.cells.length < 1 ||
                    o.cells.length > 9
                  )
                    return null;
                  const r = o.cells.map((e) => {
                    if (!e || "object" != typeof e) return null;
                    const t = e;
                    return !Number.isInteger(t.x) ||
                      !Number.isInteger(t.y) ||
                      t.x < 0 ||
                      t.y < 0 ||
                      t.x >= s.BoardModel.SIZE ||
                      t.y >= s.BoardModel.SIZE
                      ? null
                      : { x: t.x, y: t.y };
                  });
                  return r.some((e) => null === e)
                    ? null
                    : { color: n, cells: r };
                }
                remapLegacyBoardSnapshot(e) {
                  if (!e || "object" != typeof e) return e;
                  const t = e;
                  return Array.isArray(t.cells)
                    ? Object.assign(Object.assign({}, t), {
                        cells: t.cells.map((e) => {
                          var t;
                          return -1 !== e &&
                            Number.isInteger(e) &&
                            null !== (t = i.LEGACY_COLOR_TO_UNITY[e]) &&
                            void 0 !== t
                            ? t
                            : e;
                        }),
                      })
                    : e;
                }
                discardInvalidSave() {
                  try {
                    this.removeStoredItem(i.GAME_STATE_KEY);
                  } catch (e) {}
                }
                redrawOccupiedCells() {
                  let e = 0;
                  for (let t = 0; t < s.BoardModel.SIZE; t += 1)
                    for (let i = 0; i < s.BoardModel.SIZE; i += 1) {
                      const s = this.model.get(i, t);
                      if (s < 0) continue;
                      let a = this.occupiedBlockSprites[e];
                      (null == a ? void 0 : a.node.isValid) ||
                        ((a = this.createSpriteNode(
                          "PlacedBlock",
                          this.blockFrames[s],
                          this.cellSize,
                          this.cellSize,
                          this.occupiedNode
                        ).getComponent(o.Sprite)),
                        (this.occupiedBlockSprites[e] = a));
                      const n = a.node;
                      (n.active = !0),
                        n.setPosition(this.cellPosition(i, t)),
                        n
                          .getComponent(o.UITransform)
                          .setContentSize(this.cellSize, this.cellSize),
                        (a.spriteFrame = this.blockFrames[s]),
                        this.setSpriteGrayscale(a, !1),
                        (e += 1);
                    }
                  for (
                    let t = e;
                    t < this.occupiedBlockSprites.length;
                    t += 1
                  ) {
                    const e = this.occupiedBlockSprites[t];
                    (null == e ? void 0 : e.node.isValid) &&
                      (e.node.active = !1);
                  }
                }
                hideOccupiedBlocks() {
                  for (const e of this.occupiedBlockSprites)
                    e.node.isValid &&
                      (this.setSpriteGrayscale(e, !1), (e.node.active = !1));
                }
                playPlacementFeedback(e, t, o, s, a) {
                  const n = e.clearedRows.length + e.clearedColumns.length;
                  if (
                    (this.playSound("place", 0.75),
                    a &&
                      this.scheduleOnce(
                        () => this.showBestMoveEffect(t, o, s),
                        i.UNITY_BEST_MOVE_VISUAL_DELAY
                      ),
                    0 === n)
                  )
                    return;
                  this.scheduleOnce(() => this.playSound("clear", 0.85), 0.04);
                  const r =
                      t.cells.reduce(
                        (e, t) => e + this.cellPosition(o + t.x, s + t.y).y,
                        0
                      ) / t.cells.length,
                    l = this.boardNode.position.y + r,
                    d = this.showCombo(e.comboCount, n, l),
                    c = this.comboRevision;
                  e.achievement &&
                    this.scheduleOnce(() => {
                      c === this.comboRevision &&
                        this.showPlacementAchievement(e, l);
                    }, d),
                    this.flashClearedLines(e, t.color);
                }
                showBestMoveEffect(e, t, i) {
                  const s = this.bestMoveTint(e.color);
                  for (const a of e.cells) {
                    const e = new o.Node("BestMoveEffect");
                    this.effectsNode.addChild(e),
                      e.setPosition(this.cellPosition(t + a.x, i + a.y)),
                      e.setScale(0.65, 0.65),
                      (e.angle = 20);
                    const n = this.createSpriteNode(
                        "BestMoveLight",
                        this.bestMoveLightFrame,
                        3.26 * this.cellSize,
                        3.26 * this.cellSize,
                        e
                      ),
                      r = n.getComponent(o.Sprite);
                    (r.color = s),
                      (r.customMaterial = this.bestMoveMaterial),
                      n.setPosition(0, 0.07 * -this.cellSize),
                      n.setScale(0.1, 0.1);
                    const l = n.addComponent(o.UIOpacity);
                    l.opacity = Math.round(178.5);
                    const d = this.createSpriteNode(
                        "BestMoveHand",
                        this.bestMoveHandFrame,
                        0.5 * this.cellSize,
                        0.5 * this.cellSize,
                        e
                      ),
                      c = d.getComponent(o.Sprite);
                    (c.color = s), (c.customMaterial = this.bestMoveMaterial);
                    const h = d.addComponent(o.UIOpacity);
                    (h.opacity = 0),
                      o
                        .tween(e)
                        .to(
                          1 / 6,
                          { scale: new o.Vec3(0.9, 0.9, 1) },
                          { easing: "smooth" }
                        )
                        .to(1 / 3, { scale: o.Vec3.ONE }, { easing: "smooth" })
                        .delay(0.5)
                        .to(1 / 3, { scale: o.Vec3.ZERO }, { easing: "smooth" })
                        .start(),
                      o
                        .tween(e)
                        .to(1 / 6, { angle: 0 }, { easing: "smooth" })
                        .to(1 / 6, { angle: -10 }, { easing: "smooth" })
                        .to(1 / 6, { angle: 0 }, { easing: "smooth" })
                        .start(),
                      o
                        .tween(h)
                        .to(
                          1 / 6,
                          { opacity: Math.round(140.25) },
                          { easing: "smooth" }
                        )
                        .to(0.5, { opacity: 255 }, { easing: "smooth" })
                        .delay(1 / 3)
                        .to(1 / 3, { opacity: 0 }, { easing: "smooth" })
                        .start(),
                      o
                        .tween(n)
                        .to(
                          1 / 6,
                          { angle: -15, scale: new o.Vec3(0.2, 0.2, 1) },
                          { easing: "smooth" }
                        )
                        .to(
                          1 / 3,
                          { angle: -45, scale: new o.Vec3(0.3, 0.3, 1) },
                          { easing: "smooth" }
                        )
                        .to(
                          0.5,
                          { angle: -90, scale: new o.Vec3(0.35, 0.35, 1) },
                          { easing: "smooth" }
                        )
                        .to(1 / 3, { angle: -120 }, { easing: "smooth" })
                        .start(),
                      o
                        .tween(l)
                        .delay(1)
                        .to(1 / 3, { opacity: 0 }, { easing: "smooth" })
                        .call(() => e.destroy())
                        .start();
                  }
                }
                bestMoveTint(e) {
                  var t;
                  return null !==
                    (t = [
                      new o.Color(230, 20, 20),
                      new o.Color(0, 138, 11),
                      new o.Color(61, 119, 255),
                      new o.Color(249, 234, 5),
                      new o.Color(112, 42, 199),
                      new o.Color(255, 70, 0),
                      new o.Color(38, 60, 253),
                    ][e]) && void 0 !== t
                    ? t
                    : o.Color.WHITE;
                }
                showPlacementAchievement(e, t) {
                  const i = e.clearedRows.length + e.clearedColumns.length,
                    o = e.achievement
                      ? this.localization.text(e.achievement)
                      : "";
                  o && this.showAchievement(o, i, t);
                }
                showAchievement(e, t, s) {
                  const a = [
                      {
                        face: new o.Color(224, 250, 255),
                        outline: new o.Color(39, 139, 238),
                        shadow: new o.Color(20, 72, 174, 210),
                      },
                      {
                        face: new o.Color(247, 225, 255),
                        outline: new o.Color(152, 80, 224),
                        shadow: new o.Color(76, 39, 149, 210),
                      },
                      {
                        face: new o.Color(225, 255, 237),
                        outline: new o.Color(42, 189, 121),
                        shadow: new o.Color(16, 99, 75, 210),
                      },
                      {
                        face: new o.Color(255, 232, 214),
                        outline: new o.Color(244, 111, 63),
                        shadow: new o.Color(155, 51, 37, 210),
                      },
                      {
                        face: new o.Color(255, 250, 204),
                        outline: new o.Color(255, 187, 35),
                        shadow: new o.Color(191, 89, 10, 210),
                      },
                    ],
                    n = a[Math.min(Math.max(t - 2, 0), a.length - 1)],
                    r = this.cellSize * i.UNITY_COMBO_CANVAS_SCALE,
                    l = this.boardNode.position,
                    d = 0.3 * this.boardSize,
                    c = this.achievementPositionIndex % 2 == 0 ? -1 : 1;
                  this.achievementPositionIndex += 1;
                  const h = new o.Vec3(
                      l.x + c * this.boardSize * 0.1,
                      l.y + (s >= l.y ? -d : d)
                    ),
                    u = this.createText(e, 34 * r, h, n.face, this.node, !0);
                  (u.outlineColor = n.outline),
                    (u.outlineWidth = Math.round(3 * r)),
                    (u.enableShadow = !0),
                    (u.shadowColor = n.shadow),
                    u.shadowOffset.set(0, -4 * r),
                    (u.shadowBlur = 2 * r),
                    u.node.setScale(o.Vec3.ONE),
                    u.node.setSiblingIndex(this.node.children.length - 1);
                  const p = u.node.addComponent(o.UIOpacity);
                  (p.opacity = 0),
                    o
                      .tween(u.node)
                      .delay(1 / 6)
                      .to(
                        1 / 6,
                        { scale: new o.Vec3(1.05, 1.05, 1) },
                        { easing: "smooth" }
                      )
                      .to(1 / 6, { scale: o.Vec3.ONE }, { easing: "smooth" })
                      .delay(1 / 6)
                      .to(
                        1 / 6,
                        { scale: new o.Vec3(0.5, 0.5, 1) },
                        { easing: "smooth" }
                      )
                      .start(),
                    o
                      .tween(p)
                      .to(1 / 6, { opacity: 255 }, { easing: "smooth" })
                      .delay(0.5)
                      .to(1 / 6, { opacity: 0 }, { easing: "smooth" })
                      .call(() => u.node.destroy())
                      .start();
                }
                showCombo(e, t, s) {
                  if (e <= 1) return 0;
                  const a = ++this.comboRevision,
                    n = this.comboNode,
                    r = this.comboOpacity,
                    l = this.comboNumberLabel.node;
                  o.Tween.stopAllByTarget(n),
                    o.Tween.stopAllByTarget(r),
                    o.Tween.stopAllByTarget(l);
                  const d = Math.max(0, e - t);
                  (this.comboNumberLabel.string = d > 0 ? d.toString() : ""),
                    n.setPosition(this.boardNode.position.x, s),
                    n.setScale(o.Vec3.ONE),
                    l.setScale(o.Vec3.ONE),
                    (r.opacity = 0),
                    (n.active = !0);
                  const c = i.UNITY_COMBO_STEP_TIME,
                    h = (Math.max(1, t) + 1) * c;
                  for (let e = 1; e <= t; e += 1) {
                    const t = d + e;
                    this.scheduleOnce(() => {
                      a === this.comboRevision &&
                        n.active &&
                        ((this.comboNumberLabel.string = t.toString()),
                        o.Tween.stopAllByTarget(l),
                        l.setScale(o.Vec3.ONE),
                        o
                          .tween(l)
                          .to(
                            0.05,
                            { scale: new o.Vec3(1.2, 1.2, 1) },
                            { easing: "smooth" }
                          )
                          .to(
                            c - 0.05,
                            { scale: o.Vec3.ONE },
                            { easing: "smooth" }
                          )
                          .start());
                    }, e * c);
                  }
                  return (
                    o
                      .tween(n)
                      .delay(1 / 6)
                      .to(
                        1 / 6,
                        { scale: new o.Vec3(1.05, 1.05, 1) },
                        { easing: "smooth" }
                      )
                      .to(1 / 6, { scale: o.Vec3.ONE }, { easing: "smooth" })
                      .delay(Math.max(0, h - 0.5 - 1 / 6))
                      .to(
                        1 / 6,
                        { scale: new o.Vec3(0.5, 0.5, 1) },
                        { easing: "smooth" }
                      )
                      .start(),
                    o
                      .tween(r)
                      .to(1 / 6, { opacity: 255 }, { easing: "smooth" })
                      .delay(Math.max(0, h - 1 / 3))
                      .to(1 / 6, { opacity: 0 }, { easing: "smooth" })
                      .call(() => {
                        a === this.comboRevision && (n.active = !1);
                      })
                      .start(),
                    h
                  );
                }
                flashClearedLines(e, t) {
                  const i = new Set();
                  for (const o of e.clearedRows) {
                    this.createLineClearBurst(!0, o, t);
                    for (let e = 0; e < s.BoardModel.SIZE; e += 1)
                      i.add(`${e}:${o}`);
                  }
                  for (const o of e.clearedColumns) {
                    this.createLineClearBurst(!1, o, t);
                    for (let e = 0; e < s.BoardModel.SIZE; e += 1)
                      i.add(`${o}:${e}`);
                  }
                  for (const e of i) {
                    const [i, s] = e.split(":").map(Number),
                      a = this.createSpriteNode(
                        `Clear-${i}-${s}`,
                        this.blockFrames[t],
                        this.cellSize,
                        this.cellSize,
                        this.effectsNode
                      );
                    a.setPosition(this.cellPosition(i, s));
                    const n = a.addComponent(o.UIOpacity);
                    o.tween(n)
                      .to(0.05, { opacity: 0 })
                      .call(() => a.destroy())
                      .start();
                  }
                }
                createLineClearBurst(e, t, i) {
                  const a = e
                      ? new o.Vec3(0, this.cellPosition(0, t).y)
                      : new o.Vec3(this.cellPosition(t, 0).x, 0),
                    n = (s.BoardModel.SIZE - 1) * this.pitch + this.cellSize,
                    r = new o.Node(e ? `RowBurst-${t}` : `ColumnBurst-${t}`);
                  this.effectsNode.addChild(r),
                    r.setPosition(a),
                    (r.angle = e ? 90 : 0);
                  const l = this.lineClearTint(i),
                    d = 0.78 * this.cellSize,
                    c = this.createSpriteNode(
                      "LineGlow",
                      this.lineClearGlowFrame,
                      d,
                      d,
                      r
                    );
                  (c.getComponent(o.Sprite).color = l), c.setScale(0.78, 0.82);
                  const h = c.addComponent(o.UIOpacity);
                  h.opacity = 0;
                  const u = n / d;
                  o
                    .tween(c)
                    .to(
                      0.1,
                      { scale: new o.Vec3(0.9, u, 1) },
                      { easing: "quadOut" }
                    )
                    .to(
                      0.45,
                      { scale: new o.Vec3(1.85, 1.55 * u, 1) },
                      { easing: "quadOut" }
                    )
                    .start(),
                    o
                      .tween(h)
                      .to(0.033, { opacity: 90 })
                      .to(0.517, { opacity: 20 })
                      .to(0.117, { opacity: 0 })
                      .start(),
                    this.createLineClearStreak(
                      r,
                      this.lineClearLeftFrame,
                      -1,
                      n,
                      l
                    ),
                    this.createLineClearStreak(
                      r,
                      this.lineClearRightFrame,
                      1,
                      n,
                      l
                    ),
                    this.createLineClearCap(
                      r,
                      this.lineClearLeftFrame,
                      -1,
                      n,
                      l
                    ),
                    this.createLineClearCap(
                      r,
                      this.lineClearRightFrame,
                      1,
                      n,
                      l
                    ),
                    this.createLineClearParticles(r, n, l),
                    this.scheduleOnce(() => r.destroy(), 0.68);
                }
                createLineClearStreak(e, t, i, s, a) {
                  const n = this.createSpriteNode(
                    i < 0 ? "LineStreakLeft" : "LineStreakRight",
                    t,
                    0.46 * this.cellSize,
                    s,
                    e
                  );
                  (n.getComponent(o.Sprite).color = a),
                    n.setPosition(i * this.cellSize * 0.16, 0),
                    n.setScale(0.625, 0.058);
                  const r = n.addComponent(o.UIOpacity);
                  (r.opacity = 0),
                    o
                      .tween(n)
                      .to(
                        0.167,
                        { scale: new o.Vec3(0.625, 1, 1) },
                        { easing: "quadOut" }
                      )
                      .to(
                        0.05,
                        { scale: new o.Vec3(1, 1, 1) },
                        { easing: "quadOut" }
                      )
                      .to(
                        0.216,
                        { scale: new o.Vec3(0.104, 1, 1) },
                        { easing: "quadInOut" }
                      )
                      .to(
                        0.234,
                        { scale: new o.Vec3(0, 1, 1) },
                        { easing: "quadIn" }
                      )
                      .start(),
                    o
                      .tween(r)
                      .to(0.033, { opacity: 255 })
                      .delay(0.167)
                      .to(0.233, { opacity: i < 0 ? 46 : 27 })
                      .to(0.234, { opacity: 0 })
                      .start();
                }
                createLineClearCap(e, t, i, s, a) {
                  const n = this.createSpriteNode(
                    i < 0 ? "LineStreakBottom" : "LineStreakTop",
                    t,
                    0.42 * this.cellSize,
                    0.88 * this.cellSize,
                    e
                  );
                  (n.getComponent(o.Sprite).color = a),
                    n.setPosition(0, i * (s / 2 - 0.2 * this.cellSize)),
                    (n.angle = i < 0 ? 90 : -90),
                    n.setScale(0.62, 0.62);
                  const r = n.addComponent(o.UIOpacity);
                  (r.opacity = 0),
                    o
                      .tween(n)
                      .to(0.167, { scale: new o.Vec3(0.62, 0.62, 1) })
                      .to(0.05, { scale: o.Vec3.ONE }, { easing: "quadOut" })
                      .to(
                        0.216,
                        { scale: new o.Vec3(0.1, 0.72, 1) },
                        { easing: "quadInOut" }
                      )
                      .to(
                        0.234,
                        { scale: new o.Vec3(0, 0.72, 1) },
                        { easing: "quadIn" }
                      )
                      .start(),
                    o
                      .tween(r)
                      .to(0.033, { opacity: 255 })
                      .delay(0.167)
                      .to(0.233, { opacity: 27 })
                      .to(0.234, { opacity: 0 })
                      .start();
                }
                createLineClearParticles(e, t, i) {
                  const s = [
                    {
                      delay: 0.166,
                      x: -0.24,
                      y: -0.03,
                      travel: -0.2,
                      size: 0.34,
                    },
                    { delay: 0.183, x: 0.18, y: 0.04, travel: 0.17, size: 0.3 },
                    { delay: 0.2, x: -0.08, y: 0.08, travel: 0.3, size: 0.42 },
                    {
                      delay: 0.216,
                      x: 0.28,
                      y: -0.08,
                      travel: -0.28,
                      size: 0.28,
                    },
                    {
                      delay: 0.25,
                      x: -0.32,
                      y: 0.04,
                      travel: 0.38,
                      size: 0.25,
                    },
                    {
                      delay: 0.283,
                      x: 0.06,
                      y: -0.1,
                      travel: -0.42,
                      size: 0.36,
                    },
                    {
                      delay: 0.316,
                      x: 0.34,
                      y: 0.06,
                      travel: 0.46,
                      size: 0.24,
                    },
                    {
                      delay: 0.333,
                      x: -0.16,
                      y: -0.07,
                      travel: -0.49,
                      size: 0.31,
                    },
                    { delay: 0.366, x: 0.12, y: 0.1, travel: 0.52, size: 0.22 },
                  ];
                  for (let a = 0; a < s.length; a += 1) {
                    const n = s[a],
                      r = this.createSpriteNode(
                        `LineParticle-${a}`,
                        this.lineClearParticleFrame,
                        this.cellSize,
                        this.cellSize,
                        e
                      );
                    (r.getComponent(o.Sprite).color = i),
                      r.setPosition(n.x * this.cellSize, n.y * this.cellSize),
                      r.setScale(0.02, 0.02);
                    const l = r.addComponent(o.UIOpacity);
                    l.opacity = 0;
                    const d = new o.Vec3(
                      n.x * this.cellSize * 1.8,
                      n.travel * t
                    );
                    o
                      .tween(r)
                      .delay(n.delay)
                      .to(
                        0.083,
                        {
                          position: d,
                          scale: new o.Vec3(n.size, 1.45 * n.size, 1),
                        },
                        { easing: "quadOut" }
                      )
                      .to(
                        0.2,
                        {
                          position: new o.Vec3(1.18 * d.x, 1.08 * d.y),
                          scale: new o.Vec3(0.32 * n.size, 0.45 * n.size, 1),
                        },
                        { easing: "quadIn" }
                      )
                      .start(),
                      o
                        .tween(l)
                        .delay(n.delay)
                        .to(0.05, { opacity: 210 })
                        .delay(0.09)
                        .to(0.143, { opacity: 0 })
                        .start();
                  }
                }
                lineClearTint(e) {
                  var t;
                  const i = [
                    new o.Color(191, 41, 41),
                    new o.Color(54, 186, 64),
                    new o.Color(115, 207, 222),
                    new o.Color(247, 189, 48),
                    new o.Color(133, 74, 207),
                    new o.Color(247, 115, 41),
                    new o.Color(66, 92, 222),
                  ];
                  return null !== (t = i[e]) && void 0 !== t ? t : i[0];
                }
                updateScore(e = !1) {
                  (this.scoreTarget = this.model.score),
                    (!e || this.scoreTarget < this.displayedScore) &&
                      ((this.displayedScore = this.scoreTarget),
                      (this.scoreFrameAccumulator = 0),
                      (this.scoreLabel.string = String(this.displayedScore))),
                    this.setComboHeartActive(this.model.comboCount > 0, e),
                    this.model.score > this.bestScore &&
                      ((this.bestScore = this.model.score),
                      this.setStoredItem(
                        i.BEST_SCORE_KEY,
                        String(this.bestScore)
                      )),
                    (this.bestLabel.string = String(this.bestScore));
                }
                updateScoreAnimation(e) {
                  if (
                    this.scoreLabel &&
                    !(this.displayedScore >= this.scoreTarget)
                  )
                    for (
                      this.scoreFrameAccumulator += Math.min(
                        Math.max(e, 0),
                        4 * i.UNITY_SCORE_FRAME_TIME
                      );
                      this.scoreFrameAccumulator >= i.UNITY_SCORE_FRAME_TIME &&
                      this.displayedScore < this.scoreTarget;

                    ) {
                      this.scoreFrameAccumulator -= i.UNITY_SCORE_FRAME_TIME;
                      const e = this.scoreTarget - this.displayedScore,
                        t =
                          e > 1e3
                            ? 100
                            : e > 500
                            ? 50
                            : e > 100
                            ? 10
                            : e > 50
                            ? 5
                            : 1;
                      (this.displayedScore = Math.min(
                        this.scoreTarget,
                        this.displayedScore + t
                      )),
                        (this.scoreLabel.string = String(this.displayedScore));
                    }
                }
                setComboHeartActive(e, t) {
                  const o = this.comboHeartNode;
                  if (o && this.comboHeartOpacity)
                    return e
                      ? void (
                          (this.comboHeartActive && o.active) ||
                          ((this.comboHeartActive = !0),
                          (o.active = !0),
                          (this.comboHeartAnimationTime = t
                            ? 0
                            : i.UNITY_COMBO_SHOW_TIME),
                          this.applyComboHeartFrame())
                        )
                      : ((this.comboHeartActive = !1),
                        (this.comboHeartAnimationTime = 0),
                        void (o.active = !1));
                }
                updateComboHeartAnimation(e) {
                  var t;
                  this.comboHeartActive &&
                    (null === (t = this.comboHeartNode) || void 0 === t
                      ? void 0
                      : t.isValid) &&
                    this.comboHeartOpacity &&
                    ((this.comboHeartAnimationTime += Math.max(0, e)),
                    this.applyComboHeartFrame());
                }
                applyComboHeartFrame() {
                  const e = this.comboHeartNode,
                    t = this.comboHeartOpacity;
                  if (!e || !t) return;
                  let o, s;
                  const a = this.comboHeartAnimationTime;
                  if (a < i.UNITY_COMBO_SHOW_TIME)
                    if (a <= i.UNITY_COMBO_SHOW_PEAK_TIME) {
                      const e = this.smoothStep(
                        a / i.UNITY_COMBO_SHOW_PEAK_TIME
                      );
                      (o = 0.3 + 0.81 * e), (s = i.UNITY_COMBO_PEAK_ALPHA * e);
                    } else {
                      const e = this.smoothStep(
                        (a - i.UNITY_COMBO_SHOW_PEAK_TIME) /
                          (i.UNITY_COMBO_SHOW_TIME -
                            i.UNITY_COMBO_SHOW_PEAK_TIME)
                      );
                      (o = 1.11 + (1 - 1.11) * e),
                        (s =
                          i.UNITY_COMBO_PEAK_ALPHA +
                          (i.UNITY_COMBO_BASE_ALPHA -
                            i.UNITY_COMBO_PEAK_ALPHA) *
                            e);
                    }
                  else {
                    const e =
                        (a - i.UNITY_COMBO_SHOW_TIME) %
                        (2 * i.UNITY_COMBO_PULSE_HALF_TIME),
                      t = e <= i.UNITY_COMBO_PULSE_HALF_TIME,
                      n = this.smoothStep(
                        t
                          ? e / i.UNITY_COMBO_PULSE_HALF_TIME
                          : (e - i.UNITY_COMBO_PULSE_HALF_TIME) /
                              i.UNITY_COMBO_PULSE_HALF_TIME
                      ),
                      r = t ? n : 1 - n;
                    (o = 1 + 0.11 * r),
                      (s =
                        i.UNITY_COMBO_BASE_ALPHA +
                        (i.UNITY_COMBO_PEAK_ALPHA - i.UNITY_COMBO_BASE_ALPHA) *
                          r);
                  }
                  e.setScale(o, o), (t.opacity = Math.round(s));
                }
                smoothStep(e) {
                  const t = Math.min(1, Math.max(0, e));
                  return t * t * (3 - 2 * t);
                }
                showGameOver() {
                  if (this.isGameOverSequenceActive()) return;
                  this.stopLevelStartAnimation(),
                    (this.draggedPiece = null),
                    this.clearPlacementPreview(),
                    (this.gameOverState = "notice"),
                    (this.gameOverClosing = !1);
                  const e = ++this.gameOverSequenceRevision;
                  this.fadeGameplayBlocksToGrayscale();
                  const t = this.noMovesNode;
                  (t.active = !0),
                    t.setSiblingIndex(this.node.children.length - 1);
                  const i = t.getComponent(o.UIOpacity);
                  (i.opacity = 0),
                    o
                      .tween(i)
                      .to(0.18, { opacity: 255 }, { easing: "quadOut" })
                      .start(),
                    this.playSound("windowOpen"),
                    this.portalEventsEnabled && n.portal.gameplayStop(),
                    this.scheduleOnce(() => {
                      e === this.gameOverSequenceRevision &&
                        "notice" === this.gameOverState &&
                        o
                          .tween(i)
                          .to(0.18, { opacity: 0 }, { easing: "quadIn" })
                          .call(() => {
                            e === this.gameOverSequenceRevision &&
                              "notice" === this.gameOverState &&
                              ((t.active = !1),
                              this.continueAfterNoMovesNotice(e));
                          })
                          .start();
                    }, 2.32);
                }
                continueAfterNoMovesNotice(e) {
                  return p(this, void 0, void 0, function* () {
                    const t = this.model.score / Math.max(1, this.bestScore),
                      i =
                        null !== this.secondChancePieces ||
                        (this.model.score > 0 &&
                          (t >= 0.01 ||
                            this.model.hasMeaningfulClassicProgress) &&
                          this.secondChanceUses < 3),
                      o =
                        "tiktok" === r.buildVariant.id &&
                        this.tiktokTicketBalance > 0,
                      s = i && (o || (yield n.portal.isRewardedAvailable()));
                    e === this.gameOverSequenceRevision &&
                      "notice" === this.gameOverState &&
                      (s
                        ? (this.secondChancePieces ||
                            ((this.secondChancePieces =
                              this.model.createRescuePieceSet()),
                            (this.secondChanceUses += 1),
                            this.saveGame()),
                          this.showSecondChanceOffer(e, !0))
                        : yield this.showFinalGameOverResult(e, !0));
                  });
                }
                showSecondChanceOffer(e, t) {
                  var i, s;
                  if (
                    e !== this.gameOverSequenceRevision ||
                    !this.secondChancePieces ||
                    3 !== this.secondChancePieces.length
                  )
                    return;
                  (null === (i = this.secondChanceWindowNode) || void 0 === i
                    ? void 0
                    : i.isValid) && this.secondChanceWindowNode.destroy(),
                    (this.gameOverState = "offer"),
                    (this.secondChanceBusy = !1);
                  const a = this.createModalOverlay("SecondChanceWindow", t);
                  if (
                    ((this.secondChanceWindowNode = a),
                    a.on(
                      o.Node.EventType.TOUCH_START,
                      this.stopTouchPropagation,
                      this
                    ),
                    a.on(
                      o.Node.EventType.TOUCH_MOVE,
                      this.stopTouchPropagation,
                      this
                    ),
                    a.on(
                      o.Node.EventType.TOUCH_END,
                      this.stopTouchPropagation,
                      this
                    ),
                    a.on(
                      o.Node.EventType.TOUCH_CANCEL,
                      this.stopTouchPropagation,
                      this
                    ),
                    !t)
                  ) {
                    const e =
                      null ===
                        (s = a.getChildByName("SecondChanceWindowDimmer")) ||
                      void 0 === s
                        ? void 0
                        : s.getComponent(o.UIOpacity);
                    e && (e.opacity = 255);
                  }
                  const n = this.isLandscapeLayout ? 800 : 630,
                    l = this.isLandscapeLayout ? 886 : 700,
                    d = this.createSpriteNode(
                      "SecondChancePanel",
                      this.settingsPanelFrame,
                      n,
                      l,
                      a
                    );
                  d.setPosition(0, this.isLandscapeLayout ? 4 : 58);
                  const c = this.isLandscapeLayout ? 0.62 : 1.04;
                  d.setScale(c, c),
                    (d.getComponent(o.Sprite).type = o.Sprite.Type.SLICED);
                  const h = d.addComponent(o.UIOpacity);
                  (h.opacity = t ? 0 : 255),
                    (this.secondChancePanelNode = d),
                    this.blockModalPanelTouches(d);
                  const u = this.isLandscapeLayout ? 45 : 12,
                    p = new o.Node("SecondChanceHeader");
                  d.addChild(p),
                    p.addComponent(o.UITransform).setContentSize(n, l);
                  const m = p.addComponent(o.Graphics);
                  m.fillColor = new o.Color(30, 57, 121);
                  const g = -n / 2 + 19,
                    S = n / 2 - 19,
                    C = l / 2 - 18,
                    T = l / 2 - 128 - u,
                    v = 32,
                    y = 17.6731136;
                  m.moveTo(g, T),
                    m.lineTo(g, C - v),
                    m.bezierCurveTo(g, C - v + y, g + v - y, C, g + v, C),
                    m.lineTo(S - v, C),
                    m.bezierCurveTo(S - v + y, C, S, C - v + y, S, C - v),
                    m.lineTo(S, T),
                    m.close(),
                    m.fill();
                  const w = this.createText(
                    this.localization.text("secondChanceTitle"),
                    this.isLandscapeLayout ? 52 : 42,
                    new o.Vec3(0, this.isLandscapeLayout ? 346 : 278),
                    o.Color.WHITE,
                    d
                  );
                  (w.font = this.uiFont),
                    (w.enableOutline = !1),
                    (w.enableWrapText = !0),
                    (w.lineHeight = this.isLandscapeLayout ? 52 : 42),
                    (w.overflow = o.Label.Overflow.SHRINK),
                    w.node
                      .getComponent(o.UITransform)
                      .setContentSize(
                        this.isLandscapeLayout ? 720 : 570,
                        this.isLandscapeLayout ? 150 : 120
                      );
                  const L = this.createSpriteNode(
                    "SecondChancePieces",
                    this.settingsContentFrame,
                    this.isLandscapeLayout ? 720 : 570,
                    this.isLandscapeLayout ? 334 : 260,
                    d
                  );
                  L.setPosition(0, this.isLandscapeLayout ? 80 : 60),
                    (L.getComponent(o.Sprite).type = o.Sprite.Type.SLICED);
                  const f = this.isLandscapeLayout ? 240 : 192,
                    b = this.isLandscapeLayout ? 39 : 34;
                  this.createSecondChancePiecePreview(
                    this.secondChancePieces[0],
                    new o.Vec3(-f, 0),
                    b,
                    L
                  ),
                    this.createSecondChancePiecePreview(
                      this.secondChancePieces[1],
                      o.Vec3.ZERO,
                      b,
                      L
                    ),
                    this.createSecondChancePiecePreview(
                      this.secondChancePieces[2],
                      new o.Vec3(f, 0),
                      b,
                      L
                    );
                  const O = this.isLandscapeLayout ? 760 : 600,
                    N = this.isLandscapeLayout ? 210 : 158,
                    E = new o.Node("SecondChanceContinueButton");
                  d.addChild(E),
                    E.setPosition(0, this.isLandscapeLayout ? -202 : -163),
                    E.addComponent(o.UITransform).setContentSize(O, N),
                    this.createPrimaryButtonBackground(
                      "SecondChanceContinue",
                      O,
                      N,
                      E,
                      this.startButtonMaterial,
                      new o.Color(62, 40, 105, 135)
                    );
                  const P = new o.Node("SecondChanceContinueContent");
                  E.addChild(P),
                    P.addComponent(o.UITransform).setContentSize(O, N);
                  const I = this.createText(
                    this.localization.text("continue"),
                    this.isLandscapeLayout ? 60 : 48,
                    new o.Vec3(this.isLandscapeLayout ? -40 : -32, 0),
                    o.Color.WHITE,
                    P
                  );
                  (I.font = this.uiFont),
                    (I.enableOutline = !1),
                    (I.overflow = o.Label.Overflow.SHRINK),
                    I.node
                      .getComponent(o.UITransform)
                      .setContentSize(
                        O - (this.isLandscapeLayout ? 200 : 160),
                        N - 20
                      );
                  const k = this.isLandscapeLayout ? 72 : 58;
                  ("tiktok" === r.buildVariant.id &&
                  this.tiktokTicketBalance > 0
                    ? this.createGoldenTicketIcon(
                        "GoldenTicketContinueIcon",
                        1.12 * k,
                        0.76 * k,
                        P
                      )
                    : this.createSpriteNode(
                        "RewardedAdIcon",
                        this.adsIconFrame,
                        k,
                        k,
                        P
                      )
                  ).setPosition(
                    O / 2 - (this.isLandscapeLayout ? 125 : 100),
                    0
                  ),
                    this.playSecondChanceButtonPulse(P),
                    this.bindSettingsButtonPressFeedback(E, () => {
                      this.continueWithRewardedSecondChance();
                    });
                  const A = new o.Node("SecondChanceRejectButton");
                  d.addChild(A),
                    A.setPosition(0, this.isLandscapeLayout ? -355 : -286),
                    A.addComponent(o.UITransform).setContentSize(
                      this.isLandscapeLayout ? 500 : 420,
                      this.isLandscapeLayout ? 82 : 70
                    );
                  const _ = this.createText(
                    this.localization.text("noThanks"),
                    this.isLandscapeLayout ? 40 : 31,
                    o.Vec3.ZERO,
                    new o.Color(165, 222, 242),
                    A
                  );
                  (_.font = this.uiFont),
                    (_.enableOutline = !1),
                    _.node
                      .getComponent(o.UITransform)
                      .setContentSize(
                        this.isLandscapeLayout ? 300 : 250,
                        this.isLandscapeLayout ? 70 : 58
                      );
                  const R = new o.Node("SecondChanceRejectUnderline");
                  A.addChild(R),
                    R.setPosition(0, this.isLandscapeLayout ? -28 : -22),
                    R.addComponent(o.UITransform).setContentSize(
                      this.isLandscapeLayout ? 250 : 195,
                      3
                    );
                  const M = R.addComponent(o.Graphics);
                  (M.fillColor = new o.Color(165, 222, 242, 210)),
                    M.rect(
                      this.isLandscapeLayout ? -125 : -97.5,
                      -1.5,
                      this.isLandscapeLayout ? 250 : 195,
                      3
                    ),
                    M.fill(),
                    A.on(
                      o.Node.EventType.TOUCH_END,
                      this.rejectRewardedSecondChance,
                      this
                    ),
                    t &&
                      (o
                        .tween(h)
                        .to(0.2, { opacity: 255 }, { easing: "quadOut" })
                        .start(),
                      this.playSound("windowOpen"));
                }
                playSecondChanceButtonPulse(e) {
                  o.tween(e)
                    .to(
                      0.4,
                      { scale: new o.Vec3(1.04, 1.04, 1) },
                      { easing: "smooth" }
                    )
                    .to(0.516667, { scale: o.Vec3.ONE }, { easing: "smooth" })
                    .union()
                    .repeatForever()
                    .start();
                }
                createSecondChancePiecePreview(e, t, i, s) {
                  const a = new o.Node("SecondChancePiecePreview");
                  s.addChild(a), a.setPosition(t);
                  const n = Math.min(...e.cells.map((e) => e.x)),
                    r = Math.max(...e.cells.map((e) => e.x)),
                    l = Math.min(...e.cells.map((e) => e.y)),
                    d = Math.max(...e.cells.map((e) => e.y));
                  a.addComponent(o.UITransform).setContentSize(
                    (r - n + 1) * i,
                    (d - l + 1) * i
                  );
                  for (const t of e.cells)
                    this.createSpriteNode(
                      "SecondChancePreviewBlock",
                      this.blockFrames[e.color],
                      i,
                      i,
                      a
                    ).setPosition(
                      (t.x - (n + r) / 2) * i,
                      (t.y - (l + d) / 2) * i
                    );
                }
                continueWithRewardedSecondChance() {
                  return p(this, void 0, void 0, function* () {
                    var e, t;
                    if (
                      this.secondChanceBusy ||
                      "offer" !== this.gameOverState ||
                      !(null === (e = this.secondChanceWindowNode) ||
                      void 0 === e
                        ? void 0
                        : e.isValid)
                    )
                      return;
                    if (
                      ((this.secondChanceBusy = !0),
                      this.playSound("button"),
                      "tiktok" === r.buildVariant.id &&
                        this.consumeTikTokTicket())
                    )
                      return void this.closeSecondChanceOffer(!0);
                    const i = yield this.runPausedForPortalAd(() =>
                      n.portal.showRewarded()
                    );
                    "offer" === this.gameOverState &&
                      (null === (t = this.secondChanceWindowNode) ||
                      void 0 === t
                        ? void 0
                        : t.isValid) &&
                      ("completed" === i
                        ? this.closeSecondChanceOffer(!0)
                        : (this.secondChanceBusy = !1));
                  });
                }
                rejectRewardedSecondChance() {
                  return p(this, void 0, void 0, function* () {
                    var e;
                    !this.secondChanceBusy &&
                      "offer" === this.gameOverState &&
                      (null === (e = this.secondChanceWindowNode) ||
                      void 0 === e
                        ? void 0
                        : e.isValid) &&
                      ((this.secondChanceBusy = !0),
                      this.playSound("button"),
                      this.closeSecondChanceOffer(!1),
                      "crazygames" !== n.portal.id &&
                        "playgama" !== n.portal.id &&
                        "yandex" !== n.portal.id &&
                        "vk" !== n.portal.id &&
                        "ok" !== n.portal.id &&
                        "youtube" !== n.portal.id &&
                        (yield this.runPausedForPortalAd(() =>
                          n.portal.showInterstitial()
                        )));
                  });
                }
                runPausedForPortalAd(e) {
                  return p(this, void 0, void 0, function* () {
                    var t;
                    (this.portalAdInProgress = !0),
                      this.model.pauseClassicGeneration("ad", !0);
                    const i = n.portal.gameplayRunning,
                      s = !o.game.isPaused();
                    null === (t = this.audioSource) || void 0 === t || t.stop(),
                      s && o.game.pause(),
                      i && (yield n.portal.gameplayStop());
                    try {
                      return yield e();
                    } finally {
                      s &&
                        !this.portalPauseRequested &&
                        o.game.isPaused() &&
                        o.game.resume(),
                        i && (yield n.portal.gameplayStart()),
                        (this.lastPortalAdClosedAt = Date.now()),
                        this.model.pauseClassicGeneration("ad", !1),
                        (this.portalAdInProgress = !1);
                    }
                  });
                }
                showConditionalPortalInterstitialIfAvailable() {
                  return p(this, void 0, void 0, function* () {
                    ("poki" !== n.portal.id &&
                      "gamedistribution" !== n.portal.id &&
                      "gamepix" !== n.portal.id) ||
                      this.portalAdInProgress ||
                      Date.now() - this.lastPortalAdClosedAt < 1e3 ||
                      ((yield n.portal.canShowInterstitial()) &&
                        !this.portalAdInProgress &&
                        (yield this.runPausedForPortalAd(() =>
                          n.portal.showInterstitial()
                        )));
                  });
                }
                showFinalGameOverResult(e, t) {
                  return p(this, void 0, void 0, function* () {
                    if (
                      e === this.gameOverSequenceRevision &&
                      ("notice" === this.gameOverState ||
                        "offer" === this.gameOverState)
                    ) {
                      if (
                        ("crazygames" === n.portal.id ||
                          "playgama" === n.portal.id ||
                          "tiktok" === n.portal.id ||
                          "yandex" === n.portal.id ||
                          "vk" === n.portal.id ||
                          "ok" === n.portal.id ||
                          "youtube" === n.portal.id) &&
                        !this.portalAdInProgress
                      ) {
                        const t = yield n.portal.canShowInterstitial();
                        if (
                          e !== this.gameOverSequenceRevision ||
                          ("notice" !== this.gameOverState &&
                            "offer" !== this.gameOverState)
                        )
                          return;
                        t &&
                          !this.portalAdInProgress &&
                          (yield this.runPausedForPortalAd(() =>
                            n.portal.showInterstitial()
                          ));
                      }
                      e !== this.gameOverSequenceRevision ||
                        ("notice" !== this.gameOverState &&
                          "offer" !== this.gameOverState) ||
                        (this.prepareGameOverResult(),
                        this.showGameOverResult(e, t));
                    }
                  });
                }
                closeSecondChanceOffer(e) {
                  var t;
                  const i = this.gameOverSequenceRevision,
                    s = this.secondChanceWindowNode,
                    a = this.secondChancePanelNode;
                  if (
                    !(null == s ? void 0 : s.isValid) ||
                    !(null == a ? void 0 : a.isValid)
                  )
                    return;
                  e || ((this.secondChancePieces = null), this.saveGame());
                  const n = a.getComponent(o.UIOpacity),
                    r =
                      null ===
                        (t = s.getChildByName("SecondChanceWindowDimmer")) ||
                      void 0 === t
                        ? void 0
                        : t.getComponent(o.UIOpacity);
                  r &&
                    o
                      .tween(r)
                      .to(0.2, { opacity: 0 }, { easing: "quadIn" })
                      .start(),
                    o
                      .tween(n)
                      .to(0.2, { opacity: 0 }, { easing: "quadIn" })
                      .call(() => {
                        i === this.gameOverSequenceRevision &&
                          "offer" === this.gameOverState &&
                          (e
                            ? this.resumeAfterSecondChance()
                            : (this.destroySecondChanceOffer(),
                              (this.secondChancePieces = null),
                              this.showFinalGameOverResult(i, !0)));
                      })
                      .start();
                }
                resumeAfterSecondChance() {
                  const e = this.secondChancePieces;
                  e &&
                    ((this.gameOverSequenceRevision += 1),
                    (this.gameOverState = "hidden"),
                    this.destroySecondChanceOffer(),
                    this.restoreGameplayBlocksFromGrayscale(),
                    (this.noMovesNode.active = !1),
                    (this.gameOverNode.active = !1),
                    (this.gameOverClosing = !1),
                    (this.gameOverReported = !1),
                    (this.secondChancePieces = null),
                    (this.secondChanceBusy = !1),
                    this.generatePieces(e, !0),
                    this.saveGame(),
                    this.portalEventsEnabled && n.portal.gameplayStart());
                }
                destroySecondChanceOffer() {
                  var e;
                  (null === (e = this.secondChanceWindowNode) || void 0 === e
                    ? void 0
                    : e.isValid) && this.secondChanceWindowNode.destroy(),
                    (this.secondChanceWindowNode = null),
                    (this.secondChancePanelNode = null);
                }
                restoreGameplayBlocksFromGrayscale() {
                  var e;
                  const restoreSprites = (e) => {
                    const t = e.getComponent(o.Sprite);
                    t && this.setSpriteGrayscale(t, !1);
                    for (const t of e.children) restoreSprites(t);
                  };
                  (null === (e = this.occupiedNode) || void 0 === e
                    ? void 0
                    : e.isValid) && restoreSprites(this.occupiedNode);
                }
                fadeGameplayBlocksToGrayscale() {
                  var e;
                  const t = [];
                  (null === (e = this.occupiedNode) || void 0 === e
                    ? void 0
                    : e.isValid) &&
                    t.push(
                      ...this.occupiedNode.children.filter((e) => e.active)
                    );
                  for (const e of this.pieces)
                    if (!e.used && e.node.isValid)
                      for (const i of e.node.children)
                        "Block" === i.name && t.push(i);
                  for (const e of t) {
                    const t = e.getComponent(o.Sprite),
                      i = e.getComponent(o.UITransform),
                      s = null == t ? void 0 : t.spriteFrame,
                      a = e.parent;
                    if (!(t && i && s && a)) continue;
                    const n = this.createSpriteNode(
                      "GrayscaleBlock",
                      s,
                      i.contentSize.width,
                      i.contentSize.height,
                      a
                    );
                    n.setPosition(e.position),
                      n.setScale(e.scale),
                      (n.angle = e.angle);
                    const r = n.getComponent(o.Sprite);
                    (r.color = t.color.clone()), this.setSpriteGrayscale(r, !0);
                    const l = n.addComponent(o.UIOpacity);
                    (l.opacity = 0),
                      o
                        .tween(l)
                        .to(0.4, { opacity: 255 })
                        .call(() => {
                          e.isValid &&
                            n.isValid &&
                            (this.setSpriteGrayscale(t, !0), n.destroy());
                        })
                        .start();
                  }
                }
                prepareGameOverResult() {
                  const e =
                      this.model.score > 0 &&
                      this.model.score > this.bestScoreAtGameStart,
                    t = this.gameOverLayoutScale;
                  (this.gameOverTitleLabel.string = this.localization.text(
                    e ? "bestScore" : "gameOver"
                  )),
                    (this.gameOverTitleLabel.color = e
                      ? new o.Color(255, 181, 36)
                      : o.Color.WHITE),
                    (this.gameOverTitleLabel.customMaterial = e
                      ? null
                      : this.bestScoreGradientMaterial),
                    (this.gameOverTitleLabel.enableShadow = !e),
                    (this.gameOverConfettiNode.active = !0),
                    (this.gameOverBestGroup.active = !e),
                    this.gameOverScoreGroup.setPosition(0, 0),
                    this.gameOverBestGroup.setPosition(0, 0),
                    this.gameOverScoreCaptionLabel.node.setPosition(
                      0,
                      (e ? 15 : 200) * t
                    ),
                    this.finalScoreLabel.node.setPosition(
                      0,
                      (e ? -140 : 20) * t
                    ),
                    (this.finalScoreLabel.fontSize = Math.round(200 * t)),
                    (this.finalScoreLabel.lineHeight = Math.round(
                      1.2 * this.finalScoreLabel.fontSize
                    )),
                    this.gameOverBestCaptionLabel.node.setPosition(0, -220 * t),
                    this.finalBestLabel.node.setPosition(0, -350 * t),
                    (this.finalScoreLabel.string = "0"),
                    (this.finalBestLabel.string = String(this.bestScore)),
                    (this.gameOverRestartButton.active = !1);
                }
                showGameOverResult(e, t) {
                  if (e !== this.gameOverSequenceRevision) return;
                  (this.gameOverState = "result"), this.reportGameOver();
                  const i = this.gameOverNode;
                  (i.active = !0),
                    i.setSiblingIndex(this.node.children.length - 1);
                  const s = i.getComponent(o.UIOpacity),
                    a = this.gameOverScoreGroup.getComponent(o.UIOpacity),
                    n = this.gameOverBestGroup.getComponent(o.UIOpacity);
                  if (!t)
                    return (
                      (s.opacity = 255),
                      (a.opacity = 255),
                      (n.opacity = 255),
                      (this.finalScoreLabel.string = String(this.model.score)),
                      (this.gameOverRestartButton.active = !0),
                      this.clearChildren(this.gameOverConfettiNode),
                      void this.startGameOverFallingConfetti(e)
                    );
                  (s.opacity = 0),
                    (a.opacity = 0),
                    (n.opacity = 0),
                    o
                      .tween(s)
                      .to(0.2, { opacity: 255 }, { easing: "quadOut" })
                      .start(),
                    o
                      .tween(a)
                      .delay(0.55)
                      .to(0.45, { opacity: 255 }, { easing: "quadOut" })
                      .start(),
                    o
                      .tween(n)
                      .delay(1.15)
                      .to(0.45, { opacity: 255 }, { easing: "quadOut" })
                      .start(),
                    this.playSound("gameOver"),
                    this.startGameOverConfettiSequence(e),
                    this.scheduleOnce(() => this.animateFinalScore(e), 2.03);
                }
                startGameOverConfettiSequence(e) {
                  const t = this.gameOverConfettiNode;
                  this.clearChildren(t),
                    this.scheduleOnce(() => {
                      e === this.gameOverSequenceRevision &&
                        "result" === this.gameOverState &&
                        this.startGameOverConfettiBurst();
                    }, 0.2),
                    this.scheduleOnce(() => {
                      e === this.gameOverSequenceRevision &&
                        "result" === this.gameOverState &&
                        this.startGameOverFallingConfetti(e);
                    }, 1);
                }
                startGameOverConfettiBurst() {
                  const e = this.gameOverConfettiNode,
                    t = this.gameOverLayoutScale,
                    i = [
                      new o.Color(255, 0, 53),
                      new o.Color(0, 140, 255),
                      new o.Color(212, 192, 255),
                      new o.Color(255, 232, 0),
                      new o.Color(0, 255, 91),
                      new o.Color(255, 76, 214),
                      new o.Color(193, 225, 255),
                    ],
                    s = -this.designHeight / 2 - 20 * t,
                    a = 12 * t;
                  for (const n of [-1, 1]) {
                    const r = n * (this.designWidth / 2 - a);
                    for (let a = 0; a < 25; a += 1) {
                      const l = new o.Node(`ConfettiBurst-${n}-${a}`);
                      e.addChild(l);
                      const d = (a % 3 == 0 ? 22 : 14) * t,
                        c = (a % 3 == 0 ? 14 : 22) * t;
                      l.addComponent(o.UITransform).setContentSize(d, c);
                      const h = l.addComponent(o.Graphics);
                      (h.fillColor = i[(a + (n > 0 ? 3 : 0)) % i.length]),
                        h.rect(-d / 2, -c / 2, d, c),
                        h.fill();
                      const u = l.addComponent(o.UIOpacity);
                      l.setPosition(r, s),
                        (l.angle = (47 * a + (n > 0 ? 23 : 0)) % 180);
                      const p =
                          r -
                          n *
                            (this.designWidth * (0.16 + ((29 * a) % 35) / 100)),
                        m =
                          s +
                          this.designHeight * (0.72 + ((17 * a) % 53) / 100),
                        g = p - n * (10 * ((a % 7) - 3) * t),
                        S = m - this.designHeight * (0.25 + (a % 5) * 0.035),
                        C = 0.48 + (a % 6) * 0.045,
                        T = 0.65 + (a % 5) * 0.08,
                        v = (a % 9) * 0.022;
                      o
                        .tween(l)
                        .delay(v)
                        .to(
                          C,
                          {
                            position: new o.Vec3(p, m),
                            angle: l.angle + n * (190 + (a % 5) * 35),
                          },
                          { easing: "quadOut" }
                        )
                        .to(
                          T,
                          {
                            position: new o.Vec3(g, S),
                            angle: l.angle + n * (420 + (a % 4) * 55),
                          },
                          { easing: "quadIn" }
                        )
                        .call(() => {
                          l.isValid && l.destroy();
                        })
                        .start(),
                        o
                          .tween(u)
                          .delay(v + C + Math.max(0, T - 0.28))
                          .to(0.28, { opacity: 0 })
                          .start();
                    }
                  }
                }
                startGameOverFallingConfetti(e) {
                  const t = this.gameOverConfettiNode,
                    i = this.gameOverLayoutScale,
                    s = [
                      new o.Color(39, 239, 151),
                      new o.Color(24, 145, 239),
                      new o.Color(224, 55, 132),
                      new o.Color(255, 220, 58),
                      new o.Color(88, 74, 195),
                      new o.Color(123, 204, 206),
                    ],
                    a = Math.min(0.42 * this.designWidth, 1e3 * i),
                    n = this.designHeight / 2 + 40,
                    r = -this.designHeight / 2 - 60,
                    l = n - r;
                  for (let d = 0; d < 20; d += 1) {
                    const c = new o.Node(`Confetti-${d}`);
                    t.addChild(c);
                    const h = (d % 3 == 0 ? 22 : 14) * i,
                      u = (d % 3 == 0 ? 14 : 22) * i;
                    c.addComponent(o.UITransform).setContentSize(h, u);
                    const p = c.addComponent(o.Graphics);
                    (p.fillColor = s[d % s.length]),
                      p.rect(-h / 2, -u / 2, h, u),
                      p.fill(),
                      (c.angle = (37 * d) % 90);
                    const m = (((17 * d) % 20) / 19) * a * 2 - a,
                      g = n - ((83 * d) % Math.round(0.8 * this.designHeight)),
                      S = 14 * ((d % 7) - 3) * i,
                      C = 5.8 + (d % 5) * 0.45,
                      fall = (t) => {
                        if (
                          e !== this.gameOverSequenceRevision ||
                          "result" !== this.gameOverState ||
                          !c.isValid
                        )
                          return;
                        const s = Math.max(t - r, 1),
                          a = Math.max(0.8, (C * s) / l);
                        c.setPosition(m, t),
                          o
                            .tween(c)
                            .to(a, {
                              position: new o.Vec3(m + S, r),
                              angle: c.angle + (240 * s) / l,
                            })
                            .call(() => fall(n + (d % 4) * 35 * i))
                            .start();
                      };
                    fall(g);
                  }
                }
                animateFinalScore(e) {
                  if (
                    e !== this.gameOverSequenceRevision ||
                    "result" !== this.gameOverState
                  )
                    return;
                  let t = 0;
                  o.tween({ value: 0 })
                    .to(
                      1.5,
                      { value: this.model.score },
                      {
                        easing: "quadOut",
                        onUpdate: (i) => {
                          var o;
                          if (
                            e === this.gameOverSequenceRevision &&
                            (null === (o = this.finalScoreLabel) || void 0 === o
                              ? void 0
                              : o.node.isValid)
                          ) {
                            const e = Math.round(i.value);
                            if (e <= t) return;
                            (t = e),
                              (this.finalScoreLabel.string = String(e)),
                              this.playSound("score");
                          }
                        },
                      }
                    )
                    .call(() => {
                      if (
                        e !== this.gameOverSequenceRevision ||
                        "result" !== this.gameOverState
                      )
                        return;
                      this.finalScoreLabel.string = String(this.model.score);
                      const t = this.gameOverRestartButton;
                      t.active = !0;
                      const i = t.getComponent(o.UIOpacity);
                      (i.opacity = 0),
                        o
                          .tween(i)
                          .to(0.2, { opacity: 255 }, { easing: "quadOut" })
                          .start();
                    })
                    .start();
                }
                reportGameOver() {
                  this.portalEventsEnabled &&
                    !this.gameOverReported &&
                    ((this.gameOverReported = !0),
                    n.portal.gameplayStop(),
                    n.portal.saveBestScore(this.bestScore, !0),
                    n.portal.submitScore(this.model.score));
                }
                preparePortalStorage() {
                  return p(this, void 0, void 0, function* () {
                    if ("youtube" === n.portal.id) {
                      const e = i.PORTAL_STORAGE_KEYS,
                        t = yield n.portal.loadStorage(e);
                      if (!n.portal.storageReady)
                        throw new Error(
                          "YouTube progress is unavailable; existing data was not replaced"
                        );
                      return (
                        (this.portalStorageEnabled = !0),
                        void e.forEach((e, i) => {
                          const o = t[i];
                          null != o && this.portalStorage.set(e, o);
                        })
                      );
                    }
                    if ("playgama" !== n.portal.id) return;
                    const e = i.PORTAL_STORAGE_KEYS,
                      t = e.map((e) => {
                        try {
                          return o.sys.localStorage.getItem(
                            this.playgamaLocalBackupKey(e)
                          );
                        } catch (e) {
                          return null;
                        }
                      }),
                      s = e.map((e) => {
                        try {
                          return o.sys.localStorage.getItem(e);
                        } catch (e) {
                          return null;
                        }
                      }),
                      a = yield n.portal.loadStorage(e);
                    this.portalStorageEnabled = !0;
                    const r = [],
                      l = [];
                    e.forEach((e, i) => {
                      var n, d, c;
                      const h =
                          null !==
                            (d =
                              null !== (n = t[i]) && void 0 !== n ? n : s[i]) &&
                          void 0 !== d
                            ? d
                            : null,
                        u = null !== (c = a[i]) && void 0 !== c ? c : null,
                        p = this.selectPlaygamaStorageValue(e, h, u);
                      if (null !== p) {
                        this.portalStorage.set(e, p);
                        try {
                          o.sys.localStorage.setItem(
                            this.playgamaLocalBackupKey(e),
                            p
                          );
                        } catch (e) {}
                        p !== u && (r.push(e), l.push(p));
                      }
                    }),
                      r.length > 0 && (yield n.portal.saveStorage(r, l));
                  });
                }
                playgamaLocalBackupKey(e) {
                  return i.PLAYGAMA_LOCAL_BACKUP_PREFIX + e;
                }
                selectPlaygamaStorageValue(e, t, o) {
                  if (e === i.BEST_SCORE_KEY) {
                    const e = d.normalizeBestScore(t),
                      i = d.normalizeBestScore(o);
                    return null === e
                      ? null === i
                        ? null
                        : String(i)
                      : String(null === i ? e : Math.max(e, i));
                  }
                  if (e === i.GAME_STATE_KEY) {
                    const e = this.savedGameTimestamp(t),
                      i = this.savedGameTimestamp(o);
                    if (null !== e || null !== i)
                      return null === e ? o : null === i || e >= i ? t : o;
                  }
                  return null != o ? o : t;
                }
                savedGameTimestamp(e) {
                  if (!e) return null;
                  try {
                    const t = JSON.parse(e);
                    return Number.isInteger(t.savedAt) && t.savedAt >= 0
                      ? t.savedAt
                      : null;
                  } catch (e) {
                    return null;
                  }
                }
                getStoredItem(e) {
                  var t;
                  if (this.portalStorageEnabled)
                    return null !== (t = this.portalStorage.get(e)) &&
                      void 0 !== t
                      ? t
                      : null;
                  try {
                    return o.sys.localStorage.getItem(e);
                  } catch (e) {
                    return null;
                  }
                }
                setStoredItem(e, t) {
                  if (this.portalStorageEnabled) {
                    if (
                      (this.portalStorage.set(e, t), "youtube" !== n.portal.id)
                    )
                      try {
                        o.sys.localStorage.setItem(
                          this.playgamaLocalBackupKey(e),
                          t
                        );
                      } catch (e) {}
                    n.portal.saveStorage([e], [t]);
                  } else
                    try {
                      o.sys.localStorage.setItem(e, t);
                    } catch (t) {
                      console.warn(`[blocks-web] Could not save ${e}`, t);
                    }
                }
                removeStoredItem(e) {
                  if (this.portalStorageEnabled) {
                    if (
                      (this.portalStorage.delete(e), "youtube" !== n.portal.id)
                    )
                      try {
                        o.sys.localStorage.removeItem(
                          this.playgamaLocalBackupKey(e)
                        );
                      } catch (e) {}
                    n.portal.deleteStorage([e]);
                  } else
                    try {
                      o.sys.localStorage.removeItem(e);
                    } catch (e) {}
                }
                migrateBestScore() {
                  return p(this, void 0, void 0, function* () {
                    const e = yield n.portal.loadBestScore();
                    if (null !== e) {
                      (this.bestScore = Math.max(this.bestScore, e)),
                        (this.bestScoreAtGameStart = this.bestScore);
                      try {
                        this.setStoredItem(
                          i.BEST_SCORE_KEY,
                          String(this.bestScore)
                        );
                      } catch (e) {}
                    }
                    this.bestScore > 0 &&
                      (yield n.portal.saveBestScore(this.bestScore, !0));
                  });
                }
                onGameHide() {
                  var e;
                  this.model.pauseClassicGeneration(
                    "visibility",
                    !0,
                    Date.now(),
                    !this.portalAdInProgress
                  ),
                    this.saveSoundVolume();
                  const t = this.draggedPiece;
                  if (t && !t.used) {
                    this.setPieceShadows(t.node, !0);
                    const e = this.pieceHomeScaleFor(t.model);
                    t.node.setScale(e, e), t.node.setPosition(t.home);
                  }
                  (this.draggedPiece = null),
                    (this.dragTouchId = null),
                    (this.dragPointerPosition = null),
                    this.clearPlacementPreview(),
                    null === (e = this.audioSource) || void 0 === e || e.stop(),
                    this.saveGame(),
                    n.portal.saveBestScore(this.bestScore, !0),
                    this.portalEventsEnabled &&
                      "crazygames" !== n.portal.id &&
                      n.portal.gameplayStop();
                }
                onGameShow() {
                  var e, t, i;
                  this.model.pauseClassicGeneration("visibility", !1);
                  const o =
                    Boolean(
                      null === (e = this.settingsWindowNode) || void 0 === e
                        ? void 0
                        : e.isValid
                    ) ||
                    Boolean(
                      null === (t = this.languageWindowNode) || void 0 === t
                        ? void 0
                        : t.isValid
                    ) ||
                    Boolean(
                      null === (i = this.tiktokRewardsWindowNode) ||
                        void 0 === i
                        ? void 0
                        : i.isValid
                    );
                  "tiktok" === r.buildVariant.id &&
                    this.claimTikTokRevisitRewards();
                  const s =
                    this.portalEventsEnabled &&
                    !this.isGameOverSequenceActive() &&
                    !o &&
                    !this.startScreenVisible;
                  ("yandex" !== n.portal.id &&
                    "gamedistribution" !== n.portal.id) ||
                  this.startScreenVisible ||
                  this.portalAdInProgress
                    ? s &&
                      "crazygames" !== n.portal.id &&
                      n.portal.gameplayStart()
                    : this.handleConditionalPortalGameShow(s);
                }
                handleConditionalPortalGameShow(e) {
                  return p(this, void 0, void 0, function* () {
                    var t, i, o;
                    yield this.showConditionalPortalInterstitialIfAvailable(),
                      !e ||
                        !this.portalEventsEnabled ||
                        this.isGameOverSequenceActive() ||
                        this.startScreenVisible ||
                        (null === (t = this.settingsWindowNode) || void 0 === t
                          ? void 0
                          : t.isValid) ||
                        (null === (i = this.languageWindowNode) || void 0 === i
                          ? void 0
                          : i.isValid) ||
                        (null === (o = this.tiktokRewardsWindowNode) ||
                        void 0 === o
                          ? void 0
                          : o.isValid) ||
                        (yield n.portal.gameplayStart());
                  });
                }
                createRestartButton() {
                  const e = this.gameOverLayoutScale,
                    t = 550 * e,
                    i = 200 * e,
                    s = new o.Node("RestartButton");
                  this.gameOverNode.addChild(s),
                    s.setPosition(0, -550 * e),
                    s.addComponent(o.UITransform).setContentSize(t, i),
                    s.addComponent(o.UIOpacity),
                    this.createPrimaryButtonBackground(
                      "RestartButton",
                      t,
                      i,
                      s,
                      this.startButtonYellowMaterial,
                      new o.Color(110, 75, 28, 135)
                    ),
                    this.createSpriteNode(
                      "PlayIcon",
                      this.playFrame,
                      100 * e,
                      100 * e,
                      s
                    ).setPosition(0, 0),
                    this.bindSettingsButtonPressFeedback(s, () =>
                      this.restartFromGameOver()
                    ),
                    (this.gameOverRestartButton = s);
                }
                createPrimaryButtonBackground(e, t, i, s, a, n) {
                  const r = this.createSpriteNode(
                    `${e}Shadow`,
                    this.settingsReplayFixedButtonFrame,
                    t + 8,
                    i + 8,
                    s
                  );
                  r.setPosition(0, -5);
                  const l = r.getComponent(o.Sprite);
                  (l.type = o.Sprite.Type.SIMPLE),
                    (l.customMaterial = a),
                    (l.color = n);
                  const d = this.createSpriteNode(
                    `${e}Background`,
                    this.settingsReplayFixedButtonFrame,
                    t,
                    i,
                    s
                  ).getComponent(o.Sprite);
                  (d.type = o.Sprite.Type.SIMPLE), (d.customMaterial = a);
                }
                restartFromGameOver() {
                  if (this.gameOverClosing || "result" !== this.gameOverState)
                    return;
                  (this.gameOverClosing = !0),
                    this.playSound("button"),
                    this.showConditionalPortalInterstitialIfAvailable();
                  const e = this.gameOverNode.getComponent(o.UIOpacity);
                  o.tween(e)
                    .to(0.2, { opacity: 0 }, { easing: "quadIn" })
                    .call(() => this.startNewGame(!0))
                    .start();
                }
                createSettingsButton() {
                  const e = new o.Node("SettingsButton");
                  this.node.addChild(e),
                    e.setPosition(
                      this.designWidth / 2 - (this.isLandscapeLayout ? 90 : 62),
                      this.isLandscapeLayout
                        ? 454
                        : this.portraitViewportTop - 66
                    );
                  const t = this.isLandscapeLayout ? 112 : 76;
                  e.addComponent(o.UITransform).setContentSize(t, t),
                    (this.createSpriteNode(
                      "SettingsIcon",
                      this.settingsFrame,
                      this.isLandscapeLayout ? 86 : 54,
                      this.isLandscapeLayout ? 89 : 56,
                      e
                    ).getComponent(o.Sprite).color = o.Color.WHITE),
                    this.bindButtonDarkenFeedback(e, () =>
                      this.openSettingsWindow()
                    );
                }
                openSettingsWindow() {
                  this.soundEnabled && this.ensureAudioClips(),
                    this.showSettingsWindow(!0);
                }
                showSettingsWindow(e) {
                  var t, i, s;
                  if (
                    (null === (t = this.settingsWindowNode) || void 0 === t
                      ? void 0
                      : t.isValid) ||
                    (null === (i = this.languageWindowNode) || void 0 === i
                      ? void 0
                      : i.isValid)
                  )
                    return;
                  const a = this.startScreenVisible,
                    l = r.buildVariant.languageSelectionEnabled,
                    d = "tiktok" === r.buildVariant.id,
                    c = 1 + Number(l) + Number(d);
                  e && this.playSound("button"),
                    (null === (s = this.boardNode) || void 0 === s
                      ? void 0
                      : s.isValid) && this.saveGame(),
                    this.portalEventsEnabled && n.portal.gameplayStop();
                  const h = this.createModalOverlay("SettingsWindow", !1);
                  (this.settingsWindowNode = h),
                    h.on(
                      o.Node.EventType.TOUCH_END,
                      this.closeSettingsWindow,
                      this
                    );
                  const u = this.isLandscapeLayout ? 478 : 630,
                    p = this.isLandscapeLayout ? 88 : 120,
                    m = this.isLandscapeLayout ? 84 : 112,
                    g = c * p + (this.isLandscapeLayout ? 24 : 40),
                    S = this.isLandscapeLayout ? 122 : 164,
                    C =
                      S +
                      g +
                      (a
                        ? this.isLandscapeLayout
                          ? 28
                          : 26
                        : this.isLandscapeLayout
                        ? 162
                        : 208),
                    T = C / 2 - (this.isLandscapeLayout ? 56 : 72.5),
                    v = C / 2 - S - g / 2,
                    y = -C / 2 + (this.isLandscapeLayout ? 90 : 112),
                    w = this.isLandscapeLayout ? 145 : 180,
                    createSettingsText = (e, t, i, s) => {
                      const a = this.createText(e, t, i, o.Color.WHITE, s);
                      return (a.font = this.uiFont), (a.enableOutline = !1), a;
                    },
                    createSettingsChoiceButton = (e, t, i) => {
                      const s = this.isLandscapeLayout ? 200 : 252,
                        a = this.isLandscapeLayout ? 94 : 122,
                        n = new o.Node(e);
                      i.addChild(n),
                        n.addComponent(o.UITransform).setContentSize(s, a);
                      const r = this.isLandscapeLayout ? 184 : 252,
                        l = this.isLandscapeLayout ? 80 : 111,
                        d = this.createSpriteNode(
                          `${e}Shadow`,
                          this.settingsReplayFixedButtonFrame,
                          r + 8,
                          l + 8,
                          n
                        );
                      d.setPosition(0, -5);
                      const c = d.getComponent(o.Sprite);
                      (c.type = o.Sprite.Type.SIMPLE),
                        (c.customMaterial = this.startButtonMaterial),
                        (c.color = new o.Color(62, 40, 105, 135));
                      const h = this.createSpriteNode(
                        `${e}Background`,
                        this.settingsReplayFixedButtonFrame,
                        r,
                        l,
                        n
                      ).getComponent(o.Sprite);
                      (h.type = o.Sprite.Type.SIMPLE),
                        (h.customMaterial = this.startButtonMaterial);
                      const u = createSettingsText(
                        t,
                        this.isLandscapeLayout ? 25 : 34,
                        o.Vec3.ZERO,
                        n
                      );
                      return (
                        u.node
                          .getComponent(o.UITransform)
                          .setContentSize(
                            this.isLandscapeLayout ? 144 : 216,
                            this.isLandscapeLayout ? 63 : 82
                          ),
                        (u.overflow = o.Label.Overflow.SHRINK),
                        n
                      );
                    },
                    L = this.createSpriteNode(
                      "SettingsPanel",
                      this.settingsPanelFrame,
                      u,
                      C,
                      h
                    );
                  if (
                    (L.setPosition(0, this.isLandscapeLayout ? 16 : 26),
                    (L.getComponent(o.Sprite).type = o.Sprite.Type.SLICED),
                    (L.addComponent(o.UIOpacity).opacity = 255),
                    (this.settingsPanelNode = L),
                    this.blockModalPanelTouches(L),
                    this.isLandscapeLayout)
                  ) {
                    const e = new o.Node("SettingsHeaderGap");
                    L.addChild(e),
                      e.setPosition(0, C / 2 - 111.5),
                      e.addComponent(o.UITransform).setContentSize(u - 40, 33);
                    const t = e.addComponent(o.Graphics);
                    (t.fillColor = new o.Color(58, 91, 156, 255)),
                      t.rect(-u / 2 + 20, -16.5, u - 40, 33),
                      t.fill();
                  }
                  const f = createSettingsText(
                    this.localization.text("settings"),
                    this.isLandscapeLayout ? 36 : 44,
                    new o.Vec3(0, T),
                    L
                  );
                  f.node
                    .getComponent(o.UITransform)
                    .setContentSize(u - 170, 78),
                    (f.enableWrapText = !1),
                    (f.overflow = o.Label.Overflow.SHRINK),
                    (f.enableShadow = !0),
                    (f.shadowColor = new o.Color(20, 48, 104, 150)),
                    (f.shadowOffset = new o.Vec2(0, -2)),
                    (f.shadowBlur = 0),
                    this.createModalCloseButton(
                      "SettingsCloseButton",
                      L,
                      u / 2 - (this.isLandscapeLayout ? 54 : 58),
                      T,
                      this.isLandscapeLayout ? 32 : 42,
                      () => this.closeSettingsWindow()
                    );
                  const b = this.createSpriteNode(
                    "SettingsContent",
                    this.settingsContentFrame,
                    this.isLandscapeLayout ? 412 : u - 80,
                    g,
                    L
                  );
                  b.setPosition(0, v),
                    (b.getComponent(o.Sprite).type = o.Sprite.Type.SLICED);
                  const O = new o.Node("SoundRow");
                  b.addChild(O),
                    O.setPosition(0, ((c - 1) * p) / 2),
                    O.addComponent(o.UITransform).setContentSize(
                      this.isLandscapeLayout ? 350 : u - 90,
                      m
                    );
                  const N = createSettingsText(
                    this.localization.text("sound"),
                    this.isLandscapeLayout ? 28 : 32,
                    new o.Vec3(this.isLandscapeLayout ? -133 : -176, 0),
                    O
                  );
                  (N.horizontalAlign = o.Label.HorizontalAlign.LEFT),
                    N.node.getComponent(o.UITransform).setContentSize(140, 90);
                  const E = new o.Node("VolumeSlider");
                  if (
                    (O.addChild(E),
                    E.addComponent(o.UITransform).setContentSize(
                      this.isLandscapeLayout ? 240 : 330,
                      this.isLandscapeLayout ? 72 : 92
                    ),
                    E.addComponent(o.Graphics),
                    E.setPosition(this.isLandscapeLayout ? 60 : 85, 0),
                    (this.settingsVolumeSliderNode = E),
                    this.updateSettingsVolumeSlider(),
                    this.bindVolumeSlider(E),
                    l)
                  ) {
                    const e = new o.Node("LanguageRow");
                    b.addChild(e),
                      e.setPosition(0, ((c - 3) * p) / 2),
                      e
                        .addComponent(o.UITransform)
                        .setContentSize(
                          this.isLandscapeLayout ? 350 : u - 90,
                          m
                        ),
                      this.createSpriteNode(
                        "LanguageIcon",
                        this.settingsLanguageFrame,
                        this.isLandscapeLayout ? 48 : 62,
                        this.isLandscapeLayout ? 50 : 66,
                        e
                      ).setPosition(
                        this.isLandscapeLayout ? -162 : -u / 2 + 110,
                        0
                      );
                    const t = createSettingsText(
                      this.localization.text("language"),
                      this.isLandscapeLayout ? 28 : 32,
                      new o.Vec3(this.isLandscapeLayout ? -62 : -92, 0),
                      e
                    );
                    (t.horizontalAlign = o.Label.HorizontalAlign.LEFT),
                      t.node
                        .getComponent(o.UITransform)
                        .setContentSize(260, 90);
                    const i = createSettingsChoiceButton(
                      "LanguageValue",
                      this.localization.text("change"),
                      e
                    );
                    i.setPosition(this.isLandscapeLayout ? 110 : 135, 0),
                      this.bindSettingsButtonPressFeedback(i, () =>
                        this.openLanguageWindow()
                      );
                  }
                  if (d) {
                    const e = new o.Node("TikTokSettingsRewardsRow");
                    b.addChild(e), e.setPosition(0, (-(c - 1) * p) / 2);
                    const t = createSettingsText(
                      this.tiktokTicketBalanceText(),
                      this.isLandscapeLayout ? 25 : 30,
                      new o.Vec3(this.isLandscapeLayout ? -114 : -145, 0),
                      e
                    );
                    t.node
                      .getComponent(o.UITransform)
                      .setContentSize(this.isLandscapeLayout ? 180 : 225, m),
                      (t.overflow = o.Label.Overflow.SHRINK),
                      (t.enableWrapText = !1),
                      this.tiktokTicketLabels.push(t);
                    const i = createSettingsChoiceButton(
                      "TikTokSettingsRewardsButton",
                      "Rewards",
                      e
                    );
                    i.setPosition(this.isLandscapeLayout ? 110 : 135, 0),
                      this.bindSettingsButtonPressFeedback(i, () => {
                        this.destroySettingsWindow(),
                          this.openTikTokRewardsWindow();
                      });
                  }
                  if (!a) {
                    const e = new o.Node("SettingsReplayButton");
                    L.addChild(e), e.setPosition(0, y);
                    const t = this.isLandscapeLayout ? 388 : u - 110,
                      i = this.isLandscapeLayout ? w : 180;
                    e.addComponent(o.UITransform).setContentSize(t, i);
                    const s = this.createSpriteNode(
                      "ReplayShadow",
                      this.settingsReplayFixedButtonFrame,
                      t + 8,
                      8 + (this.isLandscapeLayout ? 123 : 165),
                      e
                    );
                    s.setPosition(0, -5);
                    const a = s.getComponent(o.Sprite);
                    (a.type = o.Sprite.Type.SIMPLE),
                      (a.customMaterial = this.startButtonYellowMaterial),
                      (a.color = new o.Color(110, 75, 28, 135));
                    const n = this.createSpriteNode(
                      "ReplayBackground",
                      this.settingsReplayFixedButtonFrame,
                      t,
                      this.isLandscapeLayout ? 123 : 165,
                      e
                    ).getComponent(o.Sprite);
                    (n.type = o.Sprite.Type.SIMPLE),
                      (n.customMaterial = this.startButtonYellowMaterial),
                      this.createSpriteNode(
                        "ReplayIcon",
                        this.settingsReplayFrame,
                        54,
                        54,
                        e
                      ).setPosition(
                        this.isLandscapeLayout ? -114 : 0.22 * -u,
                        0
                      ),
                      createSettingsText(
                        this.localization.text("replay"),
                        this.isLandscapeLayout ? 26 : 37,
                        new o.Vec3(42, 0),
                        e
                      ),
                      this.bindSettingsButtonPressFeedback(e, () =>
                        this.restartFromSettings()
                      );
                  }
                  this.sharpenWhiteLabels(L);
                  const P = this.isLandscapeLayout
                      ? new o.Vec3(1.18, 1.19, 1)
                      : o.Vec3.ONE,
                    I = h
                      .getChildByName("SettingsWindowDimmer")
                      .getComponent(o.UIOpacity);
                  L.setScale(P), (I.opacity = 255);
                }
                bindButtonDarkenFeedback(e, t, i) {
                  const s = [
                    ...e.getComponentsInChildren(o.Sprite),
                    ...e.getComponentsInChildren(o.Label),
                  ].map((e) => ({ renderer: e, color: e.color.clone() }));
                  let a = null;
                  const showPress = (e) => {
                      for (const { renderer: t, color: i } of s)
                        t.isValid &&
                          (t.color = e
                            ? new o.Color(
                                0.65 * i.r,
                                0.65 * i.g,
                                0.65 * i.b,
                                i.a
                              )
                            : i);
                      null == i || i(e);
                    },
                    contains = (t) =>
                      e.getComponent(o.UITransform).hitTest(t.getLocation());
                  e.on(o.Node.EventType.TOUCH_START, (e) => {
                    (e.propagationStopped = !0),
                      null === a && ((a = e.getID()), showPress(!0));
                  }),
                    e.on(o.Node.EventType.TOUCH_MOVE, (e) => {
                      (e.propagationStopped = !0),
                        a === e.getID() && showPress(contains(e));
                    }),
                    e.on(o.Node.EventType.TOUCH_CANCEL, (e) => {
                      (e.propagationStopped = !0),
                        a === e.getID() && ((a = null), showPress(!1));
                    }),
                    e.on(o.Node.EventType.TOUCH_END, (e) => {
                      (e.propagationStopped = !0),
                        a === e.getID() &&
                          ((a = null), showPress(!1), contains(e) && t());
                    });
                }
                createModalCloseButton(e, t, i, s, a, n) {
                  const r = new o.Node(e);
                  t.addChild(r),
                    r.setPosition(i, s),
                    r.addComponent(o.UITransform).setContentSize(86, 86);
                  const l = new o.Node(e + "Icon");
                  r.addChild(l),
                    l.addComponent(o.UITransform).setContentSize(a + 4, a + 6);
                  const d = l.addComponent(o.Graphics),
                    c = [
                      [-0.5, -0.36],
                      [-0.36, -0.5],
                      [0, -0.14],
                      [0.36, -0.5],
                      [0.5, -0.36],
                      [0.14, 0],
                      [0.5, 0.36],
                      [0.36, 0.5],
                      [0, 0.14],
                      [-0.36, 0.5],
                      [-0.5, 0.36],
                      [-0.14, 0],
                    ],
                    draw = (e) => {
                      d.clear();
                      const path = (e) => {
                        d.moveTo(c[0][0] * a, c[0][1] * a + e);
                        for (const [t, i] of c.slice(1))
                          d.lineTo(t * a, i * a + e);
                        d.close();
                      };
                      (d.fillColor = new o.Color(25, 54, 112, 140)),
                        path(-2),
                        d.fill(),
                        (d.fillColor = e
                          ? new o.Color(110, 137, 186)
                          : new o.Color(179, 206, 255)),
                        (d.strokeColor = e
                          ? new o.Color(57, 85, 139)
                          : new o.Color(100, 143, 205)),
                        (d.lineWidth = 1.2),
                        (d.lineJoin = o.Graphics.LineJoin.ROUND),
                        path(0),
                        d.fill(),
                        d.stroke();
                    };
                  return draw(!1), this.bindButtonDarkenFeedback(r, n, draw), r;
                }
                bindSettingsButtonPressFeedback(e, t) {
                  e.on(o.Node.EventType.TOUCH_START, (t) => {
                    (t.propagationStopped = !0),
                      o
                        .tween(e)
                        .to(0.06, { scale: new o.Vec3(0.97, 0.97, 1) })
                        .start();
                  }),
                    e.on(o.Node.EventType.TOUCH_CANCEL, (t) => {
                      (t.propagationStopped = !0),
                        o.tween(e).to(0.08, { scale: o.Vec3.ONE }).start();
                    }),
                    e.on(o.Node.EventType.TOUCH_END, (i) => {
                      (i.propagationStopped = !0),
                        o
                          .tween(e)
                          .to(0.08, { scale: o.Vec3.ONE })
                          .call(t)
                          .start();
                    });
                }
                closeSettingsWindow() {
                  this.beginSettingsWindowClose(() =>
                    this.resumeGameplayAfterModal()
                  ) && this.playSound("button");
                }
                beginSettingsWindowClose(e) {
                  const t = this.settingsWindowNode;
                  return !(
                    !(null == t ? void 0 : t.isValid) ||
                    this.settingsWindowClosing ||
                    ((this.settingsWindowClosing = !0),
                    this.destroySettingsWindow(),
                    e(),
                    0)
                  );
                }
                playWindowShowAnimation(e, t, i = null) {
                  var s;
                  const a =
                      null !== (s = e.getComponent(o.UIOpacity)) && void 0 !== s
                        ? s
                        : e.addComponent(o.UIOpacity),
                    n = [
                      { time: 0, value: 0.37 },
                      { time: 0.15, value: 1.045 },
                      { time: 0.3, value: 0.99 },
                      { time: 0.4, value: 1 },
                    ],
                    r = [
                      { time: 0, value: 0.43 },
                      { time: 0.15, value: 1.045 },
                      { time: 0.3, value: 0.99 },
                      { time: 0.4, value: 1 },
                    ],
                    l = [
                      { time: 0, value: 0 },
                      { time: 0.083333, value: 1 },
                    ];
                  this.playWindowAnimation(0.4, (o) => {
                    const s = this.sampleUnitySmoothCurve(o, n),
                      d = this.sampleUnitySmoothCurve(o, r),
                      c = this.sampleUnitySmoothCurve(o, l);
                    if (
                      (e.setScale(t.x * s, t.y * d, 1),
                      (a.opacity = Math.round(255 * c)),
                      i)
                    ) {
                      const e = this.clamp01((o - 0.05) / 0.16),
                        t = 1 - (1 - e) * (1 - e);
                      i.opacity = Math.round(255 * t);
                    }
                  });
                }
                playWindowHideAnimation(e, t, i, s) {
                  var a;
                  const n =
                      null !== (a = e.getComponent(o.UIOpacity)) && void 0 !== a
                        ? a
                        : e.addComponent(o.UIOpacity),
                    r = [
                      { time: 0, value: 1 },
                      { time: 0.133333, value: 1.05 },
                      { time: 0.316667, value: 0.27 },
                    ],
                    l = [
                      { time: 0, value: 1 },
                      { time: 0.133333, value: 1.09 },
                      { time: 0.316667, value: 0.32 },
                    ],
                    d = [
                      { time: 0, value: 1 },
                      { time: 0.15, value: 1 },
                      { time: 0.316667, value: 0 },
                    ];
                  e.setScale(t),
                    (n.opacity = 255),
                    this.playWindowAnimation(
                      0.316667,
                      (o) => {
                        const s = this.sampleUnitySmoothCurve(o, r),
                          a = this.sampleUnitySmoothCurve(o, l),
                          c = this.sampleUnitySmoothCurve(o, d);
                        if (
                          (e.setScale(t.x * s, t.y * a, 1),
                          (n.opacity = Math.round(255 * c)),
                          i)
                        ) {
                          const e = this.clamp01((o - 0.16) / 0.16),
                            t = 1 - (1 - e) * (1 - e);
                          i.opacity = Math.round(255 * (1 - t));
                        }
                      },
                      s
                    );
                }
                playWindowAnimation(e, t, i) {
                  this.stopWindowAnimation();
                  let o = 0,
                    s = !0;
                  t(0);
                  const callback = (a) => {
                    const n = s ? 1 / 60 : 1 / 30;
                    (s = !1),
                      (o = Math.min(e, o + Math.min(a, n))),
                      t(o),
                      o < e ||
                        (this.unschedule(callback),
                        this.windowAnimationCallback === callback &&
                          (this.windowAnimationCallback = null),
                        null == i || i());
                  };
                  (this.windowAnimationCallback = callback),
                    this.schedule(callback);
                }
                stopWindowAnimation() {
                  this.windowAnimationCallback &&
                    (this.unschedule(this.windowAnimationCallback),
                    (this.windowAnimationCallback = null));
                }
                clamp01(e) {
                  return Math.max(0, Math.min(1, e));
                }
                sampleUnitySmoothCurve(e, t) {
                  if (e <= t[0].time) return t[0].value;
                  for (let i = 1; i < t.length; i += 1) {
                    const o = t[i - 1],
                      s = t[i];
                    if (e <= s.time) {
                      const t = s.time - o.time,
                        i = t > 0 ? (e - o.time) / t : 1,
                        a = i * i * (3 - 2 * i);
                      return o.value + (s.value - o.value) * a;
                    }
                  }
                  return t[t.length - 1].value;
                }
                destroySettingsWindow() {
                  this.saveSoundVolume(), this.stopWindowAnimation();
                  const e = this.settingsWindowNode;
                  (this.settingsWindowNode = null),
                    (this.settingsPanelNode = null),
                    (this.settingsVolumeSliderNode = null),
                    (this.settingsWindowClosing = !1),
                    (null == e ? void 0 : e.isValid) &&
                      ((this.tiktokTicketLabels =
                        this.tiktokTicketLabels.filter((t) => {
                          var i;
                          return (
                            t.isValid &&
                            (null === (i = t.node) || void 0 === i
                              ? void 0
                              : i.isValid) &&
                            !this.isNodeInside(t.node, e)
                          );
                        })),
                      e.destroy());
                }
                openLanguageWindow() {
                  var e;
                  if (
                    !r.buildVariant.languageSelectionEnabled ||
                    !(null === (e = this.settingsWindowNode) || void 0 === e
                      ? void 0
                      : e.isValid) ||
                    this.settingsWindowClosing
                  )
                    return;
                  this.playSound("button"), this.destroySettingsWindow();
                  const t = this.createModalOverlay("LanguageWindow", !1);
                  (this.languageWindowNode = t),
                    (this.languageWindowClosing = !1),
                    t.on(
                      o.Node.EventType.TOUCH_END,
                      this.closeLanguageWindow,
                      this
                    );
                  const i = this.isLandscapeLayout ? 720 : 630,
                    s = this.createSpriteNode(
                      "LanguagePanel",
                      this.settingsPanelFrame,
                      i,
                      600,
                      t
                    );
                  (s.getComponent(o.Sprite).type = o.Sprite.Type.SLICED),
                    s.addComponent(o.UIOpacity),
                    (this.languagePanelNode = s),
                    this.blockModalPanelTouches(s);
                  const a = this.createText(
                    this.localization.text("language"),
                    this.isLandscapeLayout ? 36 : 44,
                    new o.Vec3(0, 238),
                    o.Color.WHITE,
                    s
                  );
                  (a.font = this.uiFont),
                    (a.enableOutline = !1),
                    this.createModalCloseButton(
                      "LanguageCloseButton",
                      s,
                      i / 2 - 58,
                      238,
                      this.isLandscapeLayout ? 32 : 42,
                      () => this.closeLanguageWindow()
                    );
                  const n = this.createSpriteNode(
                    "LanguageContent",
                    this.settingsContentFrame,
                    i - 90,
                    280,
                    s
                  );
                  n.setPosition(0, -25),
                    (n.getComponent(o.Sprite).type = o.Sprite.Type.SLICED);
                  const l = this.isLandscapeLayout ? 140 : 125;
                  this.createLanguageChoice(n, -l, "en"),
                    this.createLanguageChoice(n, l, "ru"),
                    this.sharpenWhiteLabels(s);
                  const d = "ru" === this.localization.locale ? "en" : "ru";
                  this.ensureLanguageLogo(d).catch((e) => {
                    console.warn(
                      "[blocks-web] Alternate language logo preload failed",
                      e
                    );
                  }),
                    (t
                      .getChildByName("LanguageWindowDimmer")
                      .getComponent(o.UIOpacity).opacity = 255);
                }
                createLanguageChoice(e, t, i) {
                  const s = this.isLandscapeLayout ? 240 : 220,
                    a = this.isLandscapeLayout ? 104 : 96,
                    n = new o.Node(
                      "ru" === i ? "RussianButton" : "EnglishButton"
                    );
                  e.addChild(n),
                    n.setPosition(t, 0),
                    n.addComponent(o.UITransform).setContentSize(s, a);
                  const r = this.createSpriteNode(
                    "ru" === i ? "RussianButtonShadow" : "EnglishButtonShadow",
                    this.settingsReplayFixedButtonFrame,
                    s + 8,
                    a + 8,
                    n
                  );
                  r.setPosition(0, -5);
                  const l = r.getComponent(o.Sprite);
                  (l.type = o.Sprite.Type.SIMPLE),
                    (l.customMaterial = this.startButtonMaterial),
                    (l.color = new o.Color(62, 40, 105, 135));
                  const d = this.createSpriteNode(
                    "ru" === i
                      ? "RussianButtonBackground"
                      : "EnglishButtonBackground",
                    this.settingsReplayFixedButtonFrame,
                    s,
                    a,
                    n
                  ).getComponent(o.Sprite);
                  (d.type = o.Sprite.Type.SIMPLE),
                    (d.customMaterial = this.startButtonMaterial),
                    (d.color =
                      this.localization.locale === i
                        ? o.Color.WHITE
                        : new o.Color(205, 213, 235));
                  const c = this.createText(
                    this.localization.text("ru" === i ? "russian" : "english"),
                    27,
                    o.Vec3.ZERO,
                    o.Color.WHITE,
                    n
                  );
                  (c.font = this.uiFont),
                    (c.enableOutline = !1),
                    c.node
                      .getComponent(o.UITransform)
                      .setContentSize(s - 24, a - 12),
                    (c.overflow = o.Label.Overflow.SHRINK),
                    this.bindSettingsButtonPressFeedback(n, () =>
                      this.selectLanguage(i)
                    );
                }
                closeLanguageWindow() {
                  this.beginLanguageWindowClose(() => {
                    this.destroyLanguageWindow(), this.showSettingsWindow(!1);
                  }) && this.playSound("button");
                }
                beginLanguageWindowClose(e) {
                  const t = this.languageWindowNode;
                  return !(
                    !(null == t ? void 0 : t.isValid) ||
                    this.languageWindowClosing ||
                    ((this.languageWindowClosing = !0), e(), 0)
                  );
                }
                destroyLanguageWindow() {
                  this.stopWindowAnimation();
                  const e = this.languageWindowNode;
                  (this.languageWindowNode = null),
                    (this.languagePanelNode = null),
                    (this.languageWindowClosing = !1),
                    (this.languageSelectionBusy = !1),
                    (null == e ? void 0 : e.isValid) && e.destroy();
                }
                selectLanguage(e) {
                  if (
                    !r.buildVariant.languageSelectionEnabled ||
                    this.languageSelectionBusy
                  )
                    return;
                  this.languageSelectionBusy = !0;
                  const t = this.languageWindowNode;
                  this.selectLanguageWhenReady(e, t);
                }
                selectLanguageWhenReady(e, t) {
                  return p(this, void 0, void 0, function* () {
                    try {
                      yield this.ensureLanguageLogo(e);
                    } catch (e) {
                      return (
                        console.error(
                          "[blocks-web] Failed to load language logo",
                          e
                        ),
                        void (this.languageSelectionBusy = !1)
                      );
                    }
                    (null == t ? void 0 : t.isValid) &&
                    this.languageWindowNode === t &&
                    this.beginLanguageWindowClose(() => {
                      var t;
                      try {
                        this.setStoredItem(i.LANGUAGE_KEY, e);
                      } catch (e) {}
                      (this.localization = new a.Localization(e)),
                        this.destroyLanguageWindow(),
                        (
                          null === (t = this.boardNode) || void 0 === t
                            ? void 0
                            : t.isValid
                        )
                          ? this.rebuildScreenForLayout()
                          : this.rebuildStartScreenForLayout(),
                        this.resumeGameplayAfterModal();
                    })
                      ? this.playSound("button")
                      : (this.languageSelectionBusy = !1);
                  });
                }
                restartFromSettings() {
                  this.beginSettingsWindowClose(() => this.startNewGame(!0)) &&
                    (this.playSound("button"),
                    this.showConditionalPortalInterstitialIfAvailable());
                }
                createModalOverlay(e, t = !0) {
                  const i = new o.Node(e);
                  this.node.addChild(i),
                    i.setSiblingIndex(this.node.children.length - 1),
                    i
                      .addComponent(o.UITransform)
                      .setContentSize(this.designWidth, this.designHeight);
                  const s = new o.Node(`${e}Dimmer`);
                  i.addChild(s),
                    s
                      .addComponent(o.UITransform)
                      .setContentSize(this.designWidth, this.designHeight);
                  const a = s.addComponent(o.Graphics);
                  (a.fillColor = new o.Color(0, 8, 24, 205)),
                    a.rect(
                      -this.designWidth / 2,
                      -this.designHeight / 2,
                      this.designWidth,
                      this.designHeight
                    ),
                    a.fill();
                  const n = s.addComponent(o.UIOpacity);
                  return (
                    (n.opacity = 0),
                    t &&
                      o
                        .tween(n)
                        .delay(0.05)
                        .to(0.16, { opacity: 255 }, { easing: "quadOut" })
                        .start(),
                    i
                  );
                }
                blockModalPanelTouches(e) {
                  e.on(
                    o.Node.EventType.TOUCH_START,
                    this.stopTouchPropagation,
                    this
                  ),
                    e.on(
                      o.Node.EventType.TOUCH_MOVE,
                      this.stopTouchPropagation,
                      this
                    ),
                    e.on(
                      o.Node.EventType.TOUCH_END,
                      this.stopTouchPropagation,
                      this
                    ),
                    e.on(
                      o.Node.EventType.TOUCH_CANCEL,
                      this.stopTouchPropagation,
                      this
                    );
                }
                stopTouchPropagation(e) {
                  e.propagationStopped = !0;
                }
                resumeGameplayAfterModal() {
                  !this.portalEventsEnabled ||
                    this.startScreenVisible ||
                    this.isGameOverSequenceActive() ||
                    n.portal.gameplayStart();
                }
                createNoMovesNotice() {
                  const e = this.gameOverLayoutScale,
                    t = new o.Node("NoMovesNotice");
                  this.node.addChild(t),
                    t
                      .addComponent(o.UITransform)
                      .setContentSize(this.designWidth, this.designHeight),
                    t.addComponent(o.UIOpacity),
                    t.on(
                      o.Node.EventType.TOUCH_START,
                      this.stopTouchPropagation,
                      this
                    ),
                    t.on(
                      o.Node.EventType.TOUCH_MOVE,
                      this.stopTouchPropagation,
                      this
                    ),
                    t.on(
                      o.Node.EventType.TOUCH_END,
                      this.stopTouchPropagation,
                      this
                    ),
                    t.on(
                      o.Node.EventType.TOUCH_CANCEL,
                      this.stopTouchPropagation,
                      this
                    );
                  const i = new o.Node("NoMovesBand");
                  t.addChild(i), i.setPosition(0, 0);
                  const s = 300 * e;
                  i.addComponent(o.UITransform).setContentSize(
                    this.designWidth,
                    s
                  );
                  const a = i.addComponent(o.Graphics);
                  (a.fillColor = new o.Color(0, 0, 0, 150)),
                    a.rect(-this.designWidth / 2, -s / 2, this.designWidth, s),
                    a.fill();
                  const n = this.createText(
                    this.localization.text("noSpaceLeft"),
                    Math.round(75 * e),
                    o.Vec3.ZERO,
                    o.Color.WHITE,
                    i
                  );
                  (n.enableOutline = !1),
                    n.node
                      .getComponent(o.UITransform)
                      .setContentSize(this.designWidth - 40, s),
                    (t.active = !1),
                    (this.noMovesNode = t);
                }
                createGameOverScreen() {
                  const e = this.gameOverLayoutScale,
                    t = new o.Node("GameOver");
                  this.node.addChild(t),
                    t
                      .addComponent(o.UITransform)
                      .setContentSize(this.designWidth, this.designHeight),
                    t.addComponent(o.UIOpacity),
                    t.on(
                      o.Node.EventType.TOUCH_START,
                      this.stopTouchPropagation,
                      this
                    ),
                    t.on(
                      o.Node.EventType.TOUCH_MOVE,
                      this.stopTouchPropagation,
                      this
                    ),
                    t.on(
                      o.Node.EventType.TOUCH_END,
                      this.stopTouchPropagation,
                      this
                    ),
                    t.on(
                      o.Node.EventType.TOUCH_CANCEL,
                      this.stopTouchPropagation,
                      this
                    ),
                    this.createSpriteNode(
                      "ResultBackground",
                      this.boardAppearance.background,
                      this.designWidth,
                      this.designHeight,
                      t
                    );
                  const i = new o.Node("NewRecordConfetti");
                  t.addChild(i),
                    i
                      .addComponent(o.UITransform)
                      .setContentSize(this.designWidth, this.designHeight),
                    (i.active = !1),
                    (this.gameOverConfettiNode = i);
                  const s = this.createText(
                    this.localization.text("gameOver"),
                    Math.round(110 * e),
                    new o.Vec3(0, 545 * e),
                    o.Color.WHITE,
                    t
                  );
                  (s.enableOutline = !1),
                    (s.enableWrapText = !0),
                    (s.overflow = o.Label.Overflow.SHRINK),
                    (s.lineHeight = 120 * e),
                    (s.customMaterial = this.bestScoreGradientMaterial),
                    (s.enableShadow = !0),
                    (s.shadowColor = new o.Color(18, 26, 55, 210)),
                    (s.shadowOffset = new o.Vec2(0, -5 * e)),
                    (s.shadowBlur = 0),
                    s.node
                      .getComponent(o.UITransform)
                      .setContentSize(
                        Math.min(this.designWidth - 40, 1e3 * e),
                        270 * e
                      ),
                    (this.gameOverTitleLabel = s);
                  const a = new o.Node("FinalScore");
                  t.addChild(a),
                    a
                      .addComponent(o.UITransform)
                      .setContentSize(430 * e, 310 * e),
                    a.addComponent(o.UIOpacity);
                  const n = this.createText(
                    this.localization.text("score"),
                    Math.round(52 * e),
                    new o.Vec3(0, 20 * e),
                    new o.Color(217, 230, 255),
                    a
                  );
                  (n.enableOutline = !1),
                    (this.gameOverScoreCaptionLabel = n),
                    (this.finalScoreLabel = this.createText(
                      "0",
                      Math.round(145 * e),
                      new o.Vec3(0, -145 * e),
                      o.Color.WHITE,
                      a
                    )),
                    (this.finalScoreLabel.enableOutline = !1),
                    (this.gameOverScoreGroup = a);
                  const r = new o.Node("FinalBestScore");
                  t.addChild(r),
                    r
                      .addComponent(o.UITransform)
                      .setContentSize(430 * e, 280 * e),
                    r.addComponent(o.UIOpacity);
                  const l = this.createText(
                    this.localization.text("bestScore"),
                    Math.round(52 * e),
                    new o.Vec3(0, 20 * e),
                    new o.Color(217, 230, 255),
                    r
                  );
                  (l.enableOutline = !1),
                    (this.gameOverBestCaptionLabel = l),
                    (this.finalBestLabel = this.createText(
                      "0",
                      Math.round(120 * e),
                      new o.Vec3(0, -130 * e),
                      o.Color.WHITE,
                      r
                    )),
                    (this.finalBestLabel.enableOutline = !1),
                    (this.finalBestLabel.customMaterial =
                      this.bestScoreGradientMaterial),
                    (this.gameOverBestGroup = r),
                    (this.gameOverNode = t),
                    this.createRestartButton(),
                    (t.active = !1);
                }
                isGameOverSequenceActive() {
                  return "hidden" !== this.gameOverState;
                }
                get gameOverLayoutScale() {
                  return this.designHeight / 1920;
                }
                setSoundVolume(e) {
                  Number.isFinite(e) &&
                    ((this.soundVolume =
                      Math.round(100 * this.clamp01(e)) / 100),
                    this.updateSettingsVolumeSlider(!0));
                }
                saveSoundVolume() {
                  try {
                    this.setStoredItem(
                      i.SOUND_VOLUME_KEY,
                      String(this.soundVolume)
                    ),
                      this.setStoredItem(
                        i.SOUND_ENABLED_KEY,
                        String(this.soundEnabled)
                      );
                  } catch (e) {}
                }
                bindVolumeSlider(e) {
                  const t = e.getComponent(o.UITransform),
                    i = this.node.getComponentInChildren(o.Camera),
                    s = this.isLandscapeLayout ? 13 : 16,
                    a = t.width / 2 - s - 3;
                  let n = null;
                  const updateVolume = (e) => {
                      const s = e.getLocation(),
                        n = i.screenToWorld(new o.Vec3(s.x, s.y, 0)),
                        r = t.convertToNodeSpaceAR(n);
                      this.setSoundVolume((r.x + a) / (2 * a));
                    },
                    finish = (e) => {
                      if (
                        ((n = null),
                        this.updateSettingsVolumeSlider(),
                        this.saveSoundVolume(),
                        e && this.soundEnabled)
                      ) {
                        const e = this.settingsWindowNode;
                        this.ensureAudioClips().then(() => {
                          (null == e ? void 0 : e.isValid) &&
                            this.settingsWindowNode === e &&
                            this.playSound("button");
                        });
                      }
                    };
                  e.on(o.Node.EventType.TOUCH_START, (e) => {
                    (e.propagationStopped = !0),
                      null === n &&
                        ((n = e.getID()),
                        updateVolume(e),
                        this.soundEnabled && this.ensureAudioClips());
                  }),
                    e.on(o.Node.EventType.TOUCH_MOVE, (e) => {
                      (e.propagationStopped = !0),
                        n === e.getID() && updateVolume(e);
                    }),
                    e.on(o.Node.EventType.TOUCH_END, (e) => {
                      (e.propagationStopped = !0),
                        n === e.getID() && (updateVolume(e), finish(!0));
                    }),
                    e.on(o.Node.EventType.TOUCH_CANCEL, (e) => {
                      (e.propagationStopped = !0),
                        n === e.getID() && finish(!1);
                    });
                }
                updateSettingsVolumeSlider(e = !1) {
                  const t = this.settingsVolumeSliderNode;
                  if (!(null == t ? void 0 : t.isValid)) return;
                  const { width: i } = t.getComponent(
                      o.UITransform
                    ).contentSize,
                    s = t.getComponent(o.Graphics),
                    a = this.isLandscapeLayout ? 13 : 16,
                    n = i / 2 - a - 3,
                    r = this.isLandscapeLayout ? 8 : 10,
                    l = 2 * n * this.soundVolume,
                    d = -n + l;
                  s.clear(),
                    (s.lineCap = o.Graphics.LineCap.ROUND),
                    (s.lineWidth = r),
                    (s.strokeColor = new o.Color(255, 255, 255, 64)),
                    s.moveTo(-n, 0),
                    s.lineTo(n, 0),
                    s.stroke(),
                    l > 0 &&
                      ((s.strokeColor = o.Color.WHITE),
                      s.moveTo(-n, 0),
                      s.lineTo(d, 0),
                      s.stroke()),
                    (s.fillColor = o.Color.WHITE),
                    s.circle(d, 0, a + (e ? 1 : 0)),
                    s.fill();
                }
                playSound(e, t = 1) {
                  if (
                    !this.soundEnabled ||
                    this.portalAudioMuted ||
                    !this.audioSource
                  )
                    return;
                  const i = this.audioClips.get(e);
                  i && this.audioSource.playOneShot(i, t * this.soundVolume);
                }
                get pitch() {
                  return this.cellSize + this.gap;
                }
                pieceHomeScaleFor(e) {
                  if (!this.isLandscapeLayout)
                    return i.PORTRAIT_PIECE_HOME_SCALE;
                  const t = Math.max(...e.cells.map((e) => e.x)) + 1,
                    o = Math.max(...e.cells.map((e) => e.y)) + 1,
                    s = Math.max(t, o);
                  return Math.min(
                    0.64,
                    2.15 / s,
                    (this.landscapeSideWidth - 48) / (s * this.cellSize)
                  );
                }
                get landscapeSideWidth() {
                  return (this.designWidth - this.boardSize) / 2;
                }
                get landscapeSideCenterX() {
                  return (this.designWidth + this.boardSize) / 4;
                }
                get boardSize() {
                  return (
                    s.BoardModel.SIZE * this.cellSize +
                    (s.BoardModel.SIZE - 1) * this.gap +
                    2 * this.boardPadding
                  );
                }
                cellPosition(e, t) {
                  const i =
                    -this.boardSize / 2 + this.boardPadding + this.cellSize / 2;
                  return new o.Vec3(i + e * this.pitch, i + t * this.pitch);
                }
                createSpriteNode(e, t, i, s, a) {
                  const n = new o.Node(e);
                  a.addChild(n);
                  const r = n.addComponent(o.UITransform),
                    l = n.addComponent(o.Sprite);
                  return (
                    (l.sizeMode = o.Sprite.SizeMode.CUSTOM),
                    (l.spriteFrame = t),
                    t === this.settingsPanelFrame
                      ? (l.color = new o.Color(156, 134, 170))
                      : t === this.settingsContentFrame &&
                        (l.color = new o.Color(164, 164, 167)),
                    this.applyTileMaterial(l),
                    r.setContentSize(i, s),
                    n
                  );
                }
                applyTileMaterial(e) {
                  const t = e.spriteFrame;
                  t &&
                    this.boardAppearance &&
                    (t === this.slotFrame ||
                      this.blockFrames.indexOf(t) >= 0) &&
                    (e.customMaterial = this.boardAppearance.materialFor(
                      t,
                      this.blockFrames.indexOf(t),
                      e.grayscale
                    ));
                }
                setSpriteGrayscale(e, t) {
                  (e.grayscale = t), this.applyTileMaterial(e);
                }
                createText(e, t, i, s, a, n = !1) {
                  const r = new o.Node(`Label-${e}`);
                  a.addChild(r),
                    r.setPosition(i),
                    r
                      .addComponent(o.UITransform)
                      .setContentSize(620, Math.max(70, 2.4 * t));
                  const l = r.addComponent(o.Label);
                  return (
                    (l.string = e),
                    (l.font = n ? this.effectFont : this.uiFont),
                    (l.fontSize = t),
                    (l.lineHeight = Math.round(1.2 * t)),
                    (l.color = s),
                    (l.horizontalAlign = o.Label.HorizontalAlign.CENTER),
                    (l.verticalAlign = o.Label.VerticalAlign.CENTER),
                    (l.enableOutline = !0),
                    (l.outlineColor = new o.Color(16, 52, 92, 255)),
                    (l.outlineWidth = 3),
                    l
                  );
                }
                sharpenWhiteLabels(e) {
                  for (const t of e.getComponentsInChildren(o.Label)) {
                    const e = t.color;
                    if (e.r < 250 || e.g < 250 || e.b < 250 || e.a < 250)
                      continue;
                    const i = t.node.getComponent(o.UITransform),
                      s = i.contentSize,
                      a = t.node.scale;
                    (t.fontSize *= 2),
                      (t.lineHeight *= 2),
                      i.setContentSize(2 * s.width, 2 * s.height),
                      t.node.setScale(a.x / 2, a.y / 2, a.z);
                  }
                }
                clearChildren(e) {
                  for (const t of [...e.children]) t.destroy();
                }
                showLoadingError() {
                  this.createText(
                    this.localization.text("loadingError"),
                    34,
                    o.Vec3.ZERO,
                    new o.Color(255, 120, 120),
                    this.node
                  ).node.setSiblingIndex(this.node.children.length - 1);
                }
              }),
            e("GameBootstrap", h),
            (h.PORTAL_CLASSIC_START_LEVEL = 1),
            (h.PORTAL_HAPPY_MOMENT_LINE_COUNT = 4),
            (h.PORTRAIT_WIDTH = 720),
            (h.PORTRAIT_HEIGHT = 1280),
            (h.LANDSCAPE_WIDTH = 1920),
            (h.LANDSCAPE_HEIGHT = 1080),
            (h.PORTRAIT_BOARD_SIZE = 630),
            (h.PORTRAIT_PIECE_HOME_Y = -381),
            (h.PORTRAIT_PIECE_HOME_SCALE = 0.51),
            (h.LANDSCAPE_BOARD_SIZE = 960),
            (h.UNITY_BOARD_SIZE_IN_CELLS = 8.165),
            (h.UNITY_BLOCK_SHADOW_SCALE = 1.05),
            (h.UNITY_BLOCK_SHADOW_OFFSET = 0.14),
            (h.UNITY_DRAG_SMOOTH_TIME = 0.04),
            (h.UNITY_PLACEMENT_MAGNETIZE_THRESHOLD = 0.99),
            (h.UNITY_PIECE_TOUCH_AREA_SIZE = 300),
            (h.UNITY_SCORE_FRAME_TIME = 1 / 60),
            (h.UNITY_COMBO_CANVAS_SCALE = 0.027),
            (h.UNITY_COMBO_SHOW_PEAK_TIME = 0.15),
            (h.UNITY_COMBO_SHOW_TIME = 1 / 3),
            (h.UNITY_COMBO_PULSE_HALF_TIME = 1 / 3),
            (h.UNITY_COMBO_STEP_TIME = 1 / 3),
            (h.UNITY_BEST_MOVE_VISUAL_DELAY = 0.08),
            (h.UNITY_COMBO_BASE_ALPHA = 140),
            (h.UNITY_COMBO_PEAK_ALPHA = 204),
            (h.UNITY_COMBO_HEART_LAYOUT_SCALE = 0.88),
            (h.UNITY_COMBO_HEART_OFFSET_FROM_SCORE_X = 0),
            (h.UNITY_COMBO_HEART_OFFSET_FROM_SCORE_Y = -8),
            (h.PORTRAIT_CENTER_SAFE_MARGIN = 12),
            (h.LEGACY_COLOR_TO_UNITY = [6, 1, 5, 0, 4, 3, 2, 3]),
            (h.BEST_SCORE_KEY = "blocks-web-best-score"),
            (h.GAME_STATE_KEY = "blocks-web-game-state-v1"),
            (h.LANGUAGE_KEY = "blocks-web-language"),
            (h.YANDEX_LANGUAGE_KEY = "blocks-web-yandex-language"),
            (h.SOUND_ENABLED_KEY = "blocks-web-sound-enabled"),
            (h.SOUND_VOLUME_KEY = "blocks-web-sound-volume"),
            (h.PLAYGAMA_LOCAL_BACKUP_PREFIX =
              "blocks-web-playgama-local-backup-v1:"),
            (h.TIKTOK_TICKET_BALANCE_KEY = "blocks-web-tiktok-tickets"),
            (h.TIKTOK_SHORTCUT_ADD_REWARD_KEY =
              "blocks-web-tiktok-shortcut-add-reward"),
            (h.TIKTOK_SHORTCUT_RETURN_REWARD_KEY =
              "blocks-web-tiktok-shortcut-return-reward"),
            (h.TIKTOK_PROFILE_REWARD_KEY = "blocks-web-tiktok-profile-reward"),
            (h.PORTAL_STORAGE_KEYS = [
              i.BEST_SCORE_KEY,
              i.GAME_STATE_KEY,
              i.LANGUAGE_KEY,
              i.YANDEX_LANGUAGE_KEY,
              i.SOUND_ENABLED_KEY,
              i.SOUND_VOLUME_KEY,
            ]),
            e("GameBootstrap", (h = i = u([c("GameBootstrap")], h))),
            o.cclegacy._RF.pop();
        },
      }
    );
  }
);

System.register(
  "chunks:///_virtual/GameDistributionPortalAdapter.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./BestScoreMigration.ts"],
  function (e) {
    var t, r, n, i;
    return {
      setters: [
        function (e) {
          (t = e.asyncToGenerator), (r = e.regeneratorRuntime);
        },
        function (e) {
          n = e.cclegacy;
        },
        function (e) {
          i = e.loadLegacyUnityIndexedDbProgress;
        },
      ],
      execute: function () {
        n._RF.push(
          {},
          "6ca013keoFFt7NU3SF/e5DY",
          "GameDistributionPortalAdapter",
          void 0
        );
        var a = "https://html5.api.gamedistribution.com/main.min.js",
          s = 18e4;
        e(
          "GameDistributionPortalAdapter",
          (function () {
            function e() {
              (this.id = "gamedistribution"),
                (this.sdk = null),
                (this.enabled = !1),
                (this.audioMuted = !1),
                (this.audioMuteListener = null),
                (this.nextInterstitialTime = 0),
                (this.legacyUnityProgress = {
                  bestScore: null,
                  noAdsEndTime: null,
                }),
                (this.rewardedWatched = !1),
                (this.rewardedWatchResolver = null);
            }
            var n = e.prototype;
            return (
              (n.initialize = (function () {
                var e = t(
                  r().mark(function e() {
                    var t;
                    return r().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = i()), (e.next = 3), this.loadSdkScript()
                              );
                            case 3:
                              return (this.sdk = e.sent), (e.next = 6), t;
                            case 6:
                              (this.legacyUnityProgress = e.sent),
                                (this.nextInterstitialTime = Date.now() + s),
                                (this.enabled = !0);
                            case 9:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              (n.getLanguage = function () {
                return "en";
              }),
              (n.isAudioMuted = function () {
                return this.audioMuted;
              }),
              (n.setAudioMuteListener = function (e) {
                (this.audioMuteListener = e), e(this.audioMuted);
              }),
              (n.loadingReady = function () {}),
              (n.gameplayStart = function () {}),
              (n.gameplayStop = function () {}),
              (n.submitScore = function (e) {}),
              (n.loadBestScore = function () {
                return this.legacyUnityProgress.bestScore;
              }),
              (n.canShowInterstitial = function () {
                var e;
                return (
                  this.enabled &&
                  null !== this.sdk &&
                  Date.now() >=
                    (null != (e = this.legacyUnityProgress.noAdsEndTime)
                      ? e
                      : 0) &&
                  Date.now() >= this.nextInterstitialTime
                );
              }),
              (n.showInterstitial = function () {
                return this.requestAd("interstitial");
              }),
              (n.isRewardedAvailable = function () {
                return this.enabled && null !== this.sdk;
              }),
              (n.showRewarded = function () {
                return this.requestAd("rewarded");
              }),
              (n.requestAd = (function () {
                var e = t(
                  r().mark(function e(t) {
                    var n,
                      i,
                      a = this;
                    return r().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (((n = this.sdk), this.enabled && n)) {
                                e.next = 3;
                                break;
                              }
                              return e.abrupt("return", "unavailable");
                            case 3:
                              return (
                                (this.rewardedWatched = !1),
                                (i = null),
                                "rewarded" === t &&
                                  (i = new Promise(function (e) {
                                    a.rewardedWatchResolver = e;
                                  })),
                                (e.prev = 6),
                                (e.next = 9),
                                n.showAd(
                                  "rewarded" === t
                                    ? n.AdType.Rewarded
                                    : n.AdType.Interstitial
                                )
                              );
                            case 9:
                              if ("interstitial" !== t) {
                                e.next = 12;
                                break;
                              }
                              return (
                                (this.nextInterstitialTime = Date.now() + s),
                                e.abrupt("return", "completed")
                              );
                            case 12:
                              if (this.rewardedWatched || !i) {
                                e.next = 15;
                                break;
                              }
                              return (
                                (e.next = 15),
                                Promise.race([
                                  i,
                                  new Promise(function (e) {
                                    window.setTimeout(e, 1e3);
                                  }),
                                ])
                              );
                            case 15:
                              return e.abrupt(
                                "return",
                                this.rewardedWatched ? "completed" : "skipped"
                              );
                            case 18:
                              return (
                                (e.prev = 18),
                                (e.t0 = e.catch(6)),
                                console.warn(
                                  "[blocks-web] GameDistribution ad failed",
                                  e.t0
                                ),
                                e.abrupt("return", "failed")
                              );
                            case 22:
                              return (
                                (e.prev = 22),
                                (this.rewardedWatchResolver = null),
                                this.updateAudioMuted(!1),
                                e.finish(22)
                              );
                            case 26:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[6, 18, 22, 26]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.handleSdkEvent = function (e) {
                var t;
                switch (e.name) {
                  case "SDK_GAME_PAUSE":
                    this.updateAudioMuted(!0);
                    break;
                  case "SDK_GAME_START":
                    this.updateAudioMuted(!1);
                    break;
                  case "SDK_REWARDED_WATCH_COMPLETE":
                    (this.rewardedWatched = !0),
                      null == (t = this.rewardedWatchResolver) || t.call(this);
                    break;
                  case "SDK_ERROR":
                    console.warn(
                      "[blocks-web] GameDistribution SDK reported an error"
                    );
                }
              }),
              (n.updateAudioMuted = function (e) {
                var t;
                this.audioMuted !== e &&
                  ((this.audioMuted = e),
                  null == (t = this.audioMuteListener) || t.call(this, e));
              }),
              (n.loadSdkScript = (function () {
                var e = t(
                  r().mark(function e() {
                    var t,
                      n,
                      i = this;
                    return r().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!(t = window).gdsdk) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return", t.gdsdk);
                          case 3:
                            return (
                              (t.GD_OPTIONS = {
                                gameId: "940b8ad7c3784a00be88bedaf0eae0af",
                                debug: !1,
                                onEvent: function (e) {
                                  return i.handleSdkEvent(e);
                                },
                              }),
                              (e.next = 6),
                              new Promise(function (e, t) {
                                var r = document.querySelector(
                                  'script[src="' + a + '"]'
                                );
                                null == r || r.remove();
                                var n = document.createElement("script");
                                n.addEventListener(
                                  "load",
                                  function () {
                                    return e();
                                  },
                                  { once: !0 }
                                ),
                                  n.addEventListener(
                                    "error",
                                    function () {
                                      return t(
                                        new Error(
                                          "GameDistribution SDK failed to load"
                                        )
                                      );
                                    },
                                    { once: !0 }
                                  ),
                                  (n.id = "gamedistribution-jssdk"),
                                  (n.src = a),
                                  (n.async = !0),
                                  (n.dataset.gameDistributionSdk = "true"),
                                  document.head.appendChild(n);
                              })
                            );
                          case 6:
                            n = Date.now() + 15e3;
                          case 7:
                            if (t.gdsdk || !(Date.now() < n)) {
                              e.next = 12;
                              break;
                            }
                            return (
                              (e.next = 10),
                              new Promise(function (e) {
                                return window.setTimeout(e, 50);
                              })
                            );
                          case 10:
                            e.next = 7;
                            break;
                          case 12:
                            if (t.gdsdk) {
                              e.next = 14;
                              break;
                            }
                            throw new Error(
                              "GameDistribution SDK loaded without gdsdk"
                            );
                          case 14:
                            return e.abrupt("return", t.gdsdk);
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              e
            );
          })()
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/GamePixPortalAdapter.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    var t, n, s;
    return {
      setters: [
        function (e) {
          (t = e.asyncToGenerator), (n = e.regeneratorRuntime);
        },
        function (e) {
          s = e.cclegacy;
        },
      ],
      execute: function () {
        s._RF.push(
          {},
          "6e591RjGAhD/o2LQAB81dO7",
          "GamePixPortalAdapter",
          void 0
        );
        var r = "blocksWebBestScore";
        e(
          "GamePixPortalAdapter",
          (function () {
            function e() {
              (this.id = "gamepix"),
                (this.sdk = null),
                (this.loadedPromise = null),
                (this.loaded = !1),
                (this.adInProgress = !1),
                (this.adRequestCounter = 0),
                (this.activeAdRequestId = null),
                (this.adMessageDiagnosticsRegistered = !1),
                (this.pendingLevel = null),
                (this.audioMuted = !1),
                (this.audioMuteListener = null),
                (this.pauseListener = null);
            }
            var s = e.prototype;
            return (
              (s.initialize = (function () {
                var e = t(
                  n().mark(function e() {
                    var t = this;
                    return n().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.waitForSdk();
                            case 2:
                              (this.sdk = e.sent),
                                this.registerAdMessageDiagnostics(),
                                (this.sdk.pause = function () {
                                  return t.updatePaused(!0);
                                }),
                                (this.sdk.resume = function () {
                                  return t.updatePaused(!1);
                                }),
                                (this.sdk.soundOff = function () {
                                  return t.updateAudioMuted(!0);
                                }),
                                (this.sdk.soundOn = function () {
                                  return t.updateAudioMuted(!1);
                                });
                            case 8:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              (s.getLanguage = function () {
                var e, t;
                return null != (e = null == (t = this.sdk) ? void 0 : t.lang())
                  ? e
                  : "en";
              }),
              (s.isAudioMuted = function () {
                return this.audioMuted;
              }),
              (s.setAudioMuteListener = function (e) {
                (this.audioMuteListener = e), e(this.audioMuted);
              }),
              (s.setPauseListener = function (e) {
                this.pauseListener = e;
              }),
              (s.loadingReady = (function () {
                var e = t(
                  n().mark(function e() {
                    return n().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                this.loadedPromise ||
                                  (this.loadedPromise = this.reportLoaded()),
                                (e.next = 3),
                                this.loadedPromise
                              );
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              (s.gameplayStart = function () {}),
              (s.gameplayStop = function () {}),
              (s.loadBestScore = function () {
                var e,
                  t =
                    null == (e = this.sdk) ? void 0 : e.localStorage.getItem(r);
                if (null == t) return null;
                var n = Number(t);
                return Number.isFinite(n) && n >= 0 ? Math.floor(n) : null;
              }),
              (s.saveBestScore = function (e) {
                var t,
                  n = this.sdk;
                if (n && Number.isFinite(e)) {
                  var s = Math.max(0, Math.floor(e));
                  s > (null != (t = this.loadBestScore()) ? t : 0) &&
                    n.localStorage.setItem(r, String(s));
                }
              }),
              (s.submitScore = function (e) {
                this.loaded &&
                  this.sdk &&
                  Number.isFinite(e) &&
                  this.sdk.updateScore(Math.max(0, Math.floor(e)));
              }),
              (s.updateLevel = function (e) {
                if (Number.isFinite(e)) {
                  var t = Math.max(1, Math.floor(e));
                  this.loaded && this.sdk
                    ? ((this.pendingLevel = null),
                      this.sdk.updateLevel(t),
                      console.info("[blocks-web] GamePix level updated: " + t))
                    : (this.pendingLevel = t);
                }
              }),
              (s.happyMoment = function () {
                this.loaded &&
                  this.sdk &&
                  (this.sdk.happyMoment(),
                  console.info("[blocks-web] GamePix happy moment reported"));
              }),
              (s.canShowInterstitial = function () {
                return this.loaded && null !== this.sdk && !this.adInProgress;
              }),
              (s.showInterstitial = function () {
                return this.requestAd("interstitial");
              }),
              (s.isRewardedAvailable = function () {
                return this.loaded && null !== this.sdk && !this.adInProgress;
              }),
              (s.showRewarded = function () {
                return this.requestAd("rewarded");
              }),
              (s.reportLoaded = (function () {
                var e = t(
                  n().mark(function e() {
                    var t;
                    return n().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if ((t = this.sdk)) {
                                e.next = 3;
                                break;
                              }
                              return e.abrupt("return");
                            case 3:
                              return (e.next = 5), t.loaded();
                            case 5:
                              (this.loaded = !0),
                                null !== this.pendingLevel &&
                                  this.updateLevel(this.pendingLevel);
                            case 7:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              (s.requestAd = (function () {
                var e = t(
                  n().mark(function e(t) {
                    var s,
                      r,
                      i,
                      a,
                      o,
                      u,
                      d,
                      l,
                      c,
                      h,
                      f,
                      p,
                      m,
                      g = this;
                    return n().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((s = this.sdk),
                                this.loaded && s && !this.adInProgress)
                              ) {
                                e.next = 5;
                                break;
                              }
                              return (
                                (r = s
                                  ? this.loaded
                                    ? "another ad request is already active"
                                    : "GamePix.loaded() has not completed"
                                  : "GamePix SDK is not available"),
                                console.warn(
                                  "[blocks-web][GamePix Ads][" +
                                    t +
                                    "] request blocked before SDK call: " +
                                    r,
                                  this.getAdDebugContext()
                                ),
                                e.abrupt("return", "unavailable")
                              );
                            case 5:
                              if (
                                ((i = ++this.adRequestCounter),
                                (a = Date.now()),
                                (this.adInProgress = !0),
                                (this.activeAdRequestId = i),
                                console.info(
                                  "[blocks-web][GamePix Ads][" +
                                    t +
                                    "][#" +
                                    i +
                                    "] SDK request started",
                                  this.getAdDebugContext()
                                ),
                                (o = window.setTimeout(function () {
                                  console.warn(
                                    "[blocks-web][GamePix Ads][" +
                                      t +
                                      "][#" +
                                      i +
                                      "] still waiting for the SDK after 5000 ms; the ad may be loading, showing, or waiting for the GamePix Player",
                                    g.getAdDebugContext()
                                  );
                                }, 5e3)),
                                (u = window.setTimeout(function () {
                                  console.warn(
                                    "[blocks-web][GamePix Ads][" +
                                      t +
                                      "][#" +
                                      i +
                                      "] no SDK result after 15000 ms",
                                    g.getAdDebugContext()
                                  );
                                }, 15e3)),
                                (e.prev = 12),
                                "rewarded" !== t)
                              ) {
                                e.next = 19;
                                break;
                              }
                              return (e.next = 16), s.rewardAd();
                            case 16:
                              (e.t0 = e.sent), (e.next = 22);
                              break;
                            case 19:
                              return (e.next = 21), s.interstitialAd();
                            case 21:
                              e.t0 = e.sent;
                            case 22:
                              return (
                                (h = e.t0),
                                (f = Date.now() - a),
                                (p = !0 === (null == h ? void 0 : h.success)),
                                (m = this.getAdResponseReason(h)),
                                console.info(
                                  "[blocks-web][GamePix Ads][" +
                                    t +
                                    "][#" +
                                    i +
                                    "] SDK response received",
                                  {
                                    durationMs: f,
                                    success: p,
                                    code:
                                      null != (d = null == h ? void 0 : h.code)
                                        ? d
                                        : null,
                                    message:
                                      null !=
                                      (l = null == h ? void 0 : h.message)
                                        ? l
                                        : null,
                                    reason:
                                      null !=
                                      (c = null == h ? void 0 : h.reason)
                                        ? c
                                        : null,
                                    rawResponse: h,
                                  }
                                ),
                                p ||
                                  console.warn(
                                    "[blocks-web][GamePix Ads][" +
                                      t +
                                      "][#" +
                                      i +
                                      "] ad was not shown: " +
                                      m,
                                    this.getAdDebugContext()
                                  ),
                                e.abrupt("return", p ? "completed" : "skipped")
                              );
                            case 31:
                              return (
                                (e.prev = 31),
                                (e.t1 = e.catch(12)),
                                console.error(
                                  "[blocks-web][GamePix Ads][" +
                                    t +
                                    "][#" +
                                    i +
                                    "] SDK request failed after " +
                                    (Date.now() - a) +
                                    " ms",
                                  this.describeError(e.t1)
                                ),
                                e.abrupt("return", "failed")
                              );
                            case 35:
                              return (
                                (e.prev = 35),
                                window.clearTimeout(o),
                                window.clearTimeout(u),
                                (this.adInProgress = !1),
                                (this.activeAdRequestId = null),
                                this.updateAudioMuted(!1),
                                console.info(
                                  "[blocks-web][GamePix Ads][" +
                                    t +
                                    "][#" +
                                    i +
                                    "] request finished after " +
                                    (Date.now() - a) +
                                    " ms",
                                  this.getAdDebugContext()
                                ),
                                e.finish(35)
                              );
                            case 43:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[12, 31, 35, 43]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (s.getAdResponseReason = function (e) {
                return e && "object" == typeof e
                  ? "string" == typeof e.message && e.message.trim()
                    ? e.message
                    : "string" == typeof e.reason && e.reason.trim()
                    ? e.reason
                    : void 0 !== e.code && null !== e.code
                    ? "the SDK returned code " +
                      String(e.code) +
                      " without a message"
                    : "the SDK returned success=false without a reason"
                  : "the SDK returned an invalid response";
              }),
              (s.getAdDebugContext = function () {
                var e = !1;
                try {
                  e = window.self !== window.top;
                } catch (t) {
                  e = !0;
                }
                var t = null;
                try {
                  t = document.referrer
                    ? new URL(document.referrer).origin
                    : null;
                } catch (e) {
                  t = document.referrer || null;
                }
                return {
                  timestamp: new Date().toISOString(),
                  activeRequestId: this.activeAdRequestId,
                  adapterLoaded: this.loaded,
                  sdkAvailable: null !== this.sdk,
                  adInProgress: this.adInProgress,
                  online: navigator.onLine,
                  visibility: document.visibilityState,
                  focused: document.hasFocus(),
                  inIframe: e,
                  pageOrigin: window.location.origin,
                  referrerOrigin: t,
                };
              }),
              (s.describeError = function (e) {
                var t;
                return e instanceof Error
                  ? {
                      name: e.name,
                      message: e.message,
                      stack: null != (t = e.stack) ? t : null,
                      rawError: e,
                    }
                  : { rawError: e };
              }),
              (s.registerAdMessageDiagnostics = function () {
                var e = this;
                this.adMessageDiagnosticsRegistered ||
                  ((this.adMessageDiagnosticsRegistered = !0),
                  window.addEventListener("message", function (t) {
                    var n, s, r, i, a;
                    if (t.data && "object" == typeof t.data) {
                      var o = t.data;
                      if ("string" == typeof o.type) {
                        var u = o.type.toUpperCase();
                        ("INTERSTITIAL_AD_EXECUTED" !== u &&
                          "REWARD_AD_EXECUTED" !== u) ||
                          console.info(
                            "[blocks-web][GamePix Ads][#" +
                              (null != (n = e.activeAdRequestId) ? n : "none") +
                              "] raw portal result message received",
                            {
                              origin: t.origin,
                              type: o.type,
                              success: null != (s = o.success) ? s : null,
                              code: null != (r = o.code) ? r : null,
                              message: null != (i = o.message) ? i : null,
                              reason: null != (a = o.reason) ? a : null,
                              rawData: o,
                            }
                          );
                      }
                    }
                  }));
              }),
              (s.updateAudioMuted = function (e) {
                var t;
                this.audioMuted !== e &&
                  ((this.audioMuted = e),
                  null == (t = this.audioMuteListener) || t.call(this, e));
              }),
              (s.updatePaused = function (e) {
                var t;
                console.info(
                  "[blocks-web] GamePix " +
                    (e ? "pause" : "resume") +
                    " received"
                ),
                  this.updateAudioMuted(e),
                  null == (t = this.pauseListener) || t.call(this, e);
              }),
              (s.waitForSdk = (function () {
                var e = t(
                  n().mark(function e() {
                    var t, s;
                    return n().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (t = window), (s = Date.now() + 15e3);
                          case 2:
                            if (t.GamePix || !(Date.now() < s)) {
                              e.next = 7;
                              break;
                            }
                            return (
                              (e.next = 5),
                              new Promise(function (e) {
                                return window.setTimeout(e, 50);
                              })
                            );
                          case 5:
                            e.next = 2;
                            break;
                          case 7:
                            if (t.GamePix) {
                              e.next = 9;
                              break;
                            }
                            throw new Error("GamePix SDK failed to load");
                          case 9:
                            return e.abrupt("return", t.GamePix);
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              e
            );
          })()
        );
        s._RF.pop();
      },
    };
  }
);

System.register("chunks:///_virtual/Localization.ts", ["cc"], function (e) {
  var n;
  return {
    setters: [
      function (e) {
        n = e.cclegacy;
      },
    ],
    execute: function () {
      e({
        resolveLocale: o,
        resolveStartupLocale: function (e, n, t, a, c) {
          var r = t ? o(t) : null,
            i = "en" === a || "ru" === a ? a : null,
            s = Boolean(!e && c && r && r !== i);
          return {
            locale: e ? o(e) : s && r ? r : n ? o(n) : null != r ? r : o(null),
            portalLocale: r,
            portalLocaleChanged: s,
          };
        },
      }),
        n._RF.push({}, "da2f7+9FkFIdaxB40gyN+WO", "Localization", void 0);
      var t = {
        en: {
          best: "BEST",
          bestScore: "Best Score",
          change: "Change",
          classic: "Classic",
          combo: "COMBO",
          continue: "Continue",
          english: "English",
          excellent: "EXCELLENT!",
          freeTickets: "FREE TICKETS",
          gameOver: "A new record\nawaits!",
          good: "GOOD!",
          great: "GREAT!",
          home: "Home",
          homeShortcut: "ADD TO HOME  +1",
          language: "Language",
          loadingError: "ASSET LOADING ERROR",
          newRecord: "NEW RECORD!",
          noMoves: "NO MOVES",
          noThanks: "No, thanks",
          noSpaceLeft: "No Space Left",
          playAgain: "PLAY AGAIN",
          perfect: "PERFECT!",
          profileReward: "PROFILE REWARD  +3",
          replay: "Restart",
          russian: "Русский",
          score: "Score",
          secondChanceTitle: "Continue with 3 matching blocks",
          settings: "Settings",
          sound: "Sounds",
          soundOff: "SFX OFF",
          soundOn: "SFX ON",
          super: "SUPER!",
          ticketBalance: "Tickets",
          ticketHint: "Each ticket gives one free continue",
          tiktokRewards: "TikTok Rewards",
          title: "BLOCKS",
        },
        ru: {
          best: "РЕКОРД",
          bestScore: "Лучший Счет",
          change: "Изменить",
          classic: "Классика",
          combo: "КОМБО",
          continue: "Продолжить",
          english: "English",
          excellent: "ПРЕВОСХОДНО!",
          freeTickets: "БЕСПЛАТНЫЕ БИЛЕТЫ",
          gameOver: "Новый рекорд\nвпереди!",
          good: "ХОРОШО!",
          great: "ОТЛИЧНО!",
          home: "Домой",
          homeShortcut: "ДОБАВИТЬ НА ЭКРАН  +1",
          language: "Язык",
          loadingError: "ОШИБКА ЗАГРУЗКИ",
          newRecord: "НОВЫЙ РЕКОРД!",
          noMoves: "НЕТ ХОДОВ",
          noThanks: "Нет, спасибо",
          noSpaceLeft: "Не осталось места",
          playAgain: "ЕЩЁ РАЗ",
          perfect: "ИДЕАЛЬНО!",
          profileReward: "НАГРАДА ПРОФИЛЯ  +3",
          replay: "Переиграть",
          russian: "Русский",
          score: "Счет",
          secondChanceTitle: "Продолжить с 3 подходящими блоками",
          settings: "Настройки",
          sound: "Звуки",
          soundOff: "ЗВУК ВЫКЛ",
          soundOn: "ЗВУК ВКЛ",
          super: "СУПЕР!",
          ticketBalance: "Билеты",
          ticketHint: "Каждый билет даёт одно бесплатное продолжение",
          tiktokRewards: "Награды TikTok",
          title: "БЛОКИ",
        },
      };
      function o(e) {
        return null != e && e.trim().toLowerCase().startsWith("ru")
          ? "ru"
          : "en";
      }
      e(
        "Localization",
        (function () {
          function e(e) {
            (this.locale = void 0), (this.locale = o(e));
          }
          return (
            (e.prototype.text = function (e) {
              return t[this.locale][e];
            }),
            e
          );
        })()
      );
      n._RF.pop();
    },
  };
});

System.register(
  "chunks:///_virtual/LocalPortalAdapter.ts",
  ["cc"],
  function (n) {
    var t;
    return {
      setters: [
        function (n) {
          t = n.cclegacy;
        },
      ],
      execute: function () {
        t._RF.push({}, "60225oMACtNcrz/fMjVaHv8", "LocalPortalAdapter", void 0);
        n(
          "LocalPortalAdapter",
          (function () {
            function n() {
              this.id = "local";
            }
            var t = n.prototype;
            return (
              (t.initialize = function () {}),
              (t.getLanguage = function () {
                var n, t, a;
                if ("undefined" == typeof window) return null;
                var e = new URLSearchParams(window.location.search).get("lang");
                return (
                  e ||
                  (null !=
                  (n =
                    null !=
                    (t =
                      null == (a = window.navigator.languages) ? void 0 : a[0])
                      ? t
                      : window.navigator.language)
                    ? n
                    : null)
                );
              }),
              (t.loadingReady = function () {}),
              (t.gameplayStart = function () {}),
              (t.gameplayStop = function () {}),
              (t.submitScore = function (n) {}),
              (t.showInterstitial = function () {
                return "unavailable";
              }),
              (t.isRewardedAvailable = function () {
                return !0;
              }),
              (t.showRewarded = function () {
                return "completed";
              }),
              n
            );
          })()
        );
        t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/main",
  [
    "./BuildVariant.ts",
    "./BoardAppearance.ts",
    "./BoardModel.ts",
    "./GameBootstrap.ts",
    "./Localization.ts",
    "./BestScoreMigration.ts",
    "./CrazyGamesPortalAdapter.ts",
    "./GameDistributionPortalAdapter.ts",
    "./GamePixPortalAdapter.ts",
    "./LocalPortalAdapter.ts",
    "./OkPortalAdapter.ts",
    "./PlaygamaPortalAdapter.ts",
    "./PokiPortalAdapter.ts",
    "./PortalAdapter.ts",
    "./PortalBridge.ts",
    "./TikTokConfig.ts",
    "./TikTokPortalAdapter.ts",
    "./VkPortalAdapter.ts",
    "./YandexPortalAdapter.ts",
  ],
  function () {
    return {
      setters: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ],
      execute: function () {},
    };
  }
);

System.register(
  "chunks:///_virtual/OkPortalAdapter.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./BestScoreMigration.ts"],
  function (e) {
    var t, n, r, a;
    return {
      setters: [
        function (e) {
          (t = e.asyncToGenerator), (n = e.regeneratorRuntime);
        },
        function (e) {
          r = e.cclegacy;
        },
        function (e) {
          a = e.loadLegacyUnityIndexedDbBestScore;
        },
      ],
      execute: function () {
        r._RF.push({}, "18a7eR6OfRPNq2MKe2U0MsT", "OkPortalAdapter", void 0);
        var i = 18e4;
        e(
          "OkPortalAdapter",
          (function () {
            function e() {
              (this.id = "ok"),
                (this.fapi = null),
                (this.legacyBestScore = Promise.resolve(null)),
                (this.initialized = !1),
                (this.nextInterstitialTime = Number.POSITIVE_INFINITY),
                (this.rewardedReadyAt = 0),
                (this.rewardedLoading = !1),
                (this.pendingCallbacks = new Map());
            }
            var r = e.prototype;
            return (
              (r.initialize = (function () {
                var e = t(
                  n().mark(function e() {
                    var t,
                      r,
                      o,
                      s,
                      u = this;
                    return n().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (this.legacyBestScore = a()),
                                (t = window),
                                (e.next = 4),
                                this.loadSdk()
                              );
                            case 4:
                              if (
                                ((this.fapi = e.sent),
                                this.installApiCallback(t),
                                (r = this.fapi.Util.getRequestParameters()),
                                (o = r.api_server),
                                (s = r.apiconnection),
                                o && s)
                              ) {
                                e.next = 11;
                                break;
                              }
                              throw new Error(
                                "OK launch parameters are missing"
                              );
                            case 11:
                              return (
                                (e.next = 13),
                                new Promise(function (e, t) {
                                  u.fapi.init(o, s, e, t);
                                })
                              );
                            case 13:
                              (this.initialized = !0),
                                (this.nextInterstitialTime = Date.now() + i),
                                this.prepareRewarded();
                            case 16:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              (r.getLanguage = function () {
                return "ru";
              }),
              (r.loadingReady = function () {}),
              (r.gameplayStart = function () {}),
              (r.gameplayStop = function () {}),
              (r.submitScore = function (e) {}),
              (r.loadBestScore = function () {
                return this.legacyBestScore;
              }),
              (r.showBanner = (function () {
                var e = t(
                  n().mark(function e() {
                    return n().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              (r.canShowInterstitial = function () {
                return (
                  this.initialized && Date.now() >= this.nextInterstitialTime
                );
              }),
              (r.showInterstitial = (function () {
                var e = t(
                  n().mark(function e() {
                    var t,
                      r = this;
                    return n().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (this.fapi && this.canShowInterstitial()) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return", "unavailable");
                            case 2:
                              return (
                                (e.next = 4),
                                this.waitForAdCallback(
                                  "showAd",
                                  function () {
                                    return r.fapi.UI.showAd();
                                  },
                                  function (e, t) {
                                    return "event" === e ||
                                      "ready" === t ||
                                      "ad_prepared" === t
                                      ? null
                                      : "ok" === e && "ad_shown" === t
                                      ? "completed"
                                      : "error" === e
                                      ? "unavailable"
                                      : "failed";
                                  }
                                )
                              );
                            case 4:
                              return (
                                "completed" === (t = e.sent) &&
                                  (this.nextInterstitialTime = Date.now() + i),
                                e.abrupt("return", t)
                              );
                            case 7:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              (r.isRewardedAvailable = function () {
                return (
                  !!this.initialized &&
                  (this.rewardedReadyAt ||
                    this.rewardedLoading ||
                    this.prepareRewarded(),
                  this.rewardedReadyAt > 0 &&
                    Date.now() - this.rewardedReadyAt >= 1e4)
                );
              }),
              (r.showRewarded = (function () {
                var e = t(
                  n().mark(function e() {
                    var t,
                      r = this;
                    return n().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (this.fapi && this.isRewardedAvailable()) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return", "unavailable");
                            case 2:
                              return (
                                (this.rewardedReadyAt = 0),
                                (e.next = 5),
                                this.waitForAdCallback(
                                  "showLoadedAd",
                                  function () {
                                    return r.fapi.UI.showLoadedAd();
                                  },
                                  function (e, t) {
                                    return "event" === e
                                      ? null
                                      : "ok" !== e ||
                                        ("complete" !== t && "ad_shown" !== t)
                                      ? "error" === e && "skip" === t
                                        ? "skipped"
                                        : "error" === e
                                        ? "unavailable"
                                        : "failed"
                                      : "completed";
                                  }
                                )
                              );
                            case 5:
                              return (
                                (t = e.sent),
                                window.setTimeout(function () {
                                  r.prepareRewarded();
                                }, 3e4),
                                e.abrupt("return", t)
                              );
                            case 8:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              (r.prepareRewarded = (function () {
                var e = t(
                  n().mark(function e() {
                    var t,
                      r = this;
                    return n().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                this.fapi &&
                                this.initialized &&
                                !this.rewardedLoading &&
                                !this.rewardedReadyAt
                              ) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return");
                            case 2:
                              return (
                                (this.rewardedLoading = !0),
                                (e.next = 5),
                                this.waitForBooleanCallback(
                                  "loadAd",
                                  function () {
                                    return r.fapi.UI.loadAd();
                                  },
                                  function (e, t) {
                                    return (
                                      ("ok" === e &&
                                        ("ready" === t ||
                                          "ad_prepared" === t)) ||
                                      ("error" !== e && null)
                                    );
                                  }
                                )
                              );
                            case 5:
                              if (
                                ((t = e.sent), (this.rewardedLoading = !1), !t)
                              ) {
                                e.next = 10;
                                break;
                              }
                              return (
                                (this.rewardedReadyAt = Date.now()),
                                e.abrupt("return")
                              );
                            case 10:
                              window.setTimeout(function () {
                                r.prepareRewarded();
                              }, 3e4);
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              (r.waitForAdCallback = function (e, t, n) {
                var r = this;
                return new Promise(function (a) {
                  var i = window.setTimeout(function () {
                    r.pendingCallbacks.delete(e), a("failed");
                  }, 45e3);
                  r.pendingCallbacks.set(e, {
                    handle: function (e, t) {
                      var r = n(e, t);
                      return null !== r && (window.clearTimeout(i), a(r), !0);
                    },
                  });
                  try {
                    t();
                  } catch (t) {
                    r.pendingCallbacks.delete(e),
                      window.clearTimeout(i),
                      a("failed");
                  }
                });
              }),
              (r.waitForBooleanCallback = function (e, t, n) {
                var r = this;
                return new Promise(function (a) {
                  var i = window.setTimeout(function () {
                    r.pendingCallbacks.delete(e), a(!1);
                  }, 45e3);
                  r.pendingCallbacks.set(e, {
                    handle: function (e, t) {
                      var r = n(e, t);
                      return null !== r && (window.clearTimeout(i), a(r), !0);
                    },
                  });
                  try {
                    t();
                  } catch (t) {
                    r.pendingCallbacks.delete(e), window.clearTimeout(i), a(!1);
                  }
                });
              }),
              (r.installApiCallback = function (e) {
                var t = this,
                  n = e.API_callback;
                e.API_callback = function (e, r, a) {
                  null == n || n(e, r, a);
                  var i = t.pendingCallbacks.get(e);
                  null != i && i.handle(r, a) && t.pendingCallbacks.delete(e);
                };
              }),
              (r.loadSdk = (function () {
                var e = t(
                  n().mark(function e() {
                    var t;
                    return n().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!(t = window).FAPI) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return", t.FAPI);
                          case 3:
                            return (
                              (e.next = 5),
                              new Promise(function (e, t) {
                                var n = !1,
                                  r = window.setTimeout(function () {
                                    n ||
                                      ((n = !0),
                                      t(new Error("OK SDK load timed out")));
                                  }, 15e3),
                                  a = function () {
                                    n ||
                                      ((n = !0), window.clearTimeout(r), e());
                                  },
                                  i = function () {
                                    n ||
                                      ((n = !0),
                                      window.clearTimeout(r),
                                      t(new Error("OK SDK failed to load")));
                                  },
                                  o = document.querySelector(
                                    "script[data-ok-sdk]"
                                  );
                                if (o)
                                  return (
                                    o.addEventListener("load", a, { once: !0 }),
                                    void o.addEventListener("error", i, {
                                      once: !0,
                                    })
                                  );
                                var s = document.createElement("script");
                                (s.src = "https://api.ok.ru/js/fapi5.js"),
                                  (s.async = !0),
                                  (s.dataset.okSdk = "true"),
                                  s.addEventListener("load", a, { once: !0 }),
                                  s.addEventListener("error", i, { once: !0 }),
                                  document.head.appendChild(s);
                              })
                            );
                          case 5:
                            if (t.FAPI) {
                              e.next = 7;
                              break;
                            }
                            throw new Error("OK SDK loaded without FAPI");
                          case 7:
                            return e.abrupt("return", t.FAPI);
                          case 8:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              e
            );
          })()
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/PlaygamaPortalAdapter.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    var t, n, r, i;
    return {
      setters: [
        function (e) {
          (t = e.asyncToGenerator),
            (n = e.regeneratorRuntime),
            (r = e.createForOfIteratorHelperLoose);
        },
        function (e) {
          i = e.cclegacy;
        },
      ],
      execute: function () {
        i._RF.push(
          {},
          "2c789CCA/hR3qUUalJuZvVJ",
          "PlaygamaPortalAdapter",
          void 0
        );
        var a = "https://bridge.playgama.com/v2/stable/playgama-bridge.js",
          s = 18e4;
        e(
          "PlaygamaPortalAdapter",
          (function () {
            function e() {
              (this.id = "playgama"),
                (this.sdk = null),
                (this.enabled = !1),
                (this.audioMuted = !1),
                (this.paused = !1),
                (this.audioMuteListener = null),
                (this.pauseListener = null),
                (this.nextInterstitialTime = Number.POSITIVE_INFINITY),
                (this.storageFlushPromise = null),
                (this.pendingStorageValues = new Map()),
                (this.pendingStorageDeletes = new Set()),
                (this.pendingInterstitial = null),
                (this.pendingRewarded = null);
            }
            var i = e.prototype;
            return (
              (i.initialize = (function () {
                var e = t(
                  n().mark(function e() {
                    var t,
                      r = this;
                    return n().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.loadSdkScript();
                            case 2:
                              return (
                                ((t = e.sent).engine = "cocos"),
                                (e.next = 6),
                                t.initialize({
                                  configFilePath:
                                    "./playgama-bridge-config.json",
                                })
                              );
                            case 6:
                              (this.sdk = t),
                                (this.enabled = !0),
                                (this.audioMuted =
                                  !1 === t.platform.isAudioEnabled),
                                (this.paused = !0 === t.platform.isPaused),
                                (this.nextInterstitialTime = Date.now() + s),
                                t.platform.on(
                                  t.EVENT_NAME.AUDIO_STATE_CHANGED,
                                  function (e) {
                                    r.updateAudioMuted(!1 === e);
                                  }
                                ),
                                t.platform.on(
                                  t.EVENT_NAME.PAUSE_STATE_CHANGED,
                                  function (e) {
                                    r.updatePaused(Boolean(e));
                                  }
                                ),
                                t.advertisement.on(
                                  t.EVENT_NAME.INTERSTITIAL_STATE_CHANGED,
                                  function (e) {
                                    r.handleInterstitialState(e);
                                  }
                                ),
                                t.advertisement.on(
                                  t.EVENT_NAME.REWARDED_STATE_CHANGED,
                                  function (e) {
                                    r.handleRewardedState(e);
                                  }
                                ),
                                console.info(
                                  "[blocks-web] Playgama Bridge initialized" +
                                    (t.version ? " v" + t.version : "")
                                );
                            case 16:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              (i.getLanguage = function () {
                var e, t;
                return null !=
                  (e = null == (t = this.sdk) ? void 0 : t.platform.language)
                  ? e
                  : null;
              }),
              (i.isAudioMuted = function () {
                return this.audioMuted;
              }),
              (i.setAudioMuteListener = function (e) {
                (this.audioMuteListener = e), e(this.audioMuted);
              }),
              (i.setPauseListener = function (e) {
                (this.pauseListener = e), e(this.paused);
              }),
              (i.loadingReady = function () {
                var e = this.sdk;
                this.enabled &&
                  e &&
                  e.platform.sendMessage(e.PLATFORM_MESSAGE.GAME_READY);
              }),
              (i.gameplayStart = function () {}),
              (i.gameplayStop = function () {}),
              (i.submitScore = function (e) {}),
              (i.loadStorage = (function () {
                var e = t(
                  n().mark(function e(t) {
                    var r;
                    return n().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (this.enabled && this.sdk) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt(
                                "return",
                                t.map(function () {
                                  return null;
                                })
                              );
                            case 2:
                              return (e.next = 4), this.sdk.storage.get(t, !1);
                            case 4:
                              return (
                                (r = e.sent),
                                e.abrupt(
                                  "return",
                                  t.map(function (e, t) {
                                    var n = r[t];
                                    if (null == n) return null;
                                    if ("string" == typeof n) return n;
                                    try {
                                      var i;
                                      return null != (i = JSON.stringify(n))
                                        ? i
                                        : String(n);
                                    } catch (e) {
                                      return String(n);
                                    }
                                  })
                                )
                              );
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (i.saveStorage = (function () {
                var e = t(
                  n().mark(function e(t, r) {
                    var i = this;
                    return n().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (this.enabled && this.sdk) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return");
                            case 2:
                              if (t.length === r.length) {
                                e.next = 4;
                                break;
                              }
                              throw new Error(
                                "Playgama storage keys and values must have equal length"
                              );
                            case 4:
                              return (
                                t.forEach(function (e, t) {
                                  i.pendingStorageDeletes.delete(e),
                                    i.pendingStorageValues.set(e, r[t]);
                                }),
                                (e.next = 7),
                                this.flushPendingStorage()
                              );
                            case 7:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })()),
              (i.deleteStorage = (function () {
                var e = t(
                  n().mark(function e(t) {
                    var r = this;
                    return n().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (this.enabled && this.sdk) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return");
                            case 2:
                              return (
                                t.forEach(function (e) {
                                  r.pendingStorageValues.delete(e),
                                    r.pendingStorageDeletes.add(e);
                                }),
                                (e.next = 5),
                                this.flushPendingStorage()
                              );
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (i.flushPendingStorage = (function () {
                var e = t(
                  n().mark(function e() {
                    var t,
                      r = this;
                    return n().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!this.storageFlushPromise) {
                                e.next = 12;
                                break;
                              }
                              return (
                                (e.prev = 1),
                                (e.next = 4),
                                this.storageFlushPromise
                              );
                            case 4:
                              e.next = 8;
                              break;
                            case 6:
                              (e.prev = 6), (e.t0 = e.catch(1));
                            case 8:
                              if (
                                !(
                                  this.pendingStorageValues.size > 0 ||
                                  this.pendingStorageDeletes.size > 0
                                )
                              ) {
                                e.next = 11;
                                break;
                              }
                              return (e.next = 11), this.flushPendingStorage();
                            case 11:
                              return e.abrupt("return");
                            case 12:
                              return (
                                (t = Promise.resolve().then(function () {
                                  return r.flushStorageBatch();
                                })),
                                (this.storageFlushPromise = t),
                                (e.prev = 14),
                                (e.next = 17),
                                t
                              );
                            case 17:
                              return (
                                (e.prev = 17),
                                this.storageFlushPromise === t &&
                                  (this.storageFlushPromise = null),
                                e.finish(17)
                              );
                            case 20:
                              if (
                                !(
                                  this.pendingStorageValues.size > 0 ||
                                  this.pendingStorageDeletes.size > 0
                                )
                              ) {
                                e.next = 23;
                                break;
                              }
                              return (e.next = 23), this.flushPendingStorage();
                            case 23:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [
                        [1, 6],
                        [14, , 17, 20],
                      ]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              (i.flushStorageBatch = (function () {
                var e = t(
                  n().mark(function e() {
                    var t, i, a, s, o, u, d, l, c, h, p;
                    return n().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (((t = this.sdk), this.enabled && t)) {
                                e.next = 3;
                                break;
                              }
                              return e.abrupt("return");
                            case 3:
                              if (
                                ((i = [].concat(this.pendingStorageDeletes)),
                                (a = [].concat(
                                  this.pendingStorageValues.entries()
                                )),
                                this.pendingStorageDeletes.clear(),
                                this.pendingStorageValues.clear(),
                                (e.prev = 7),
                                !(i.length > 0))
                              ) {
                                e.next = 11;
                                break;
                              }
                              return (e.next = 11), t.storage.delete(i);
                            case 11:
                              if (!(a.length > 0)) {
                                e.next = 14;
                                break;
                              }
                              return (
                                (e.next = 14),
                                t.storage.set(
                                  a.map(function (e) {
                                    return e[0];
                                  }),
                                  a.map(function (e) {
                                    return e[1];
                                  })
                                )
                              );
                            case 14:
                              e.next = 21;
                              break;
                            case 16:
                              for (
                                e.prev = 16, e.t0 = e.catch(7), s = r(i);
                                !(o = s()).done;

                              )
                                (u = o.value),
                                  this.pendingStorageValues.has(u) ||
                                    this.pendingStorageDeletes.add(u);
                              for (d = r(a); !(l = d()).done; )
                                (c = l.value),
                                  (h = c[0]),
                                  (p = c[1]),
                                  this.pendingStorageDeletes.has(h) ||
                                    this.pendingStorageValues.has(h) ||
                                    this.pendingStorageValues.set(h, p);
                              throw e.t0;
                            case 21:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[7, 16]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              (i.canShowInterstitial = function () {
                var e;
                return (
                  this.enabled &&
                  Boolean(
                    null == (e = this.sdk)
                      ? void 0
                      : e.advertisement.isInterstitialSupported
                  ) &&
                  !this.pendingInterstitial &&
                  Date.now() >= this.nextInterstitialTime
                );
              }),
              (i.showInterstitial = function () {
                var e,
                  t = this,
                  n = null == (e = this.sdk) ? void 0 : e.advertisement;
                return !this.enabled ||
                  null == n ||
                  !n.isInterstitialSupported ||
                  this.pendingInterstitial ||
                  Date.now() < this.nextInterstitialTime
                  ? Promise.resolve("unavailable")
                  : (console.info(
                      "[blocks-web] Playgama interstitial requested"
                    ),
                    new Promise(function (e) {
                      t.pendingInterstitial = t.createPendingAd(
                        e,
                        "interstitial"
                      );
                      try {
                        n.showInterstitial("natural_pause");
                      } catch (e) {
                        console.warn(
                          "[blocks-web] Playgama interstitial failed to start",
                          e
                        ),
                          t.finishAd("interstitial", "failed");
                      }
                    }));
              }),
              (i.isRewardedAvailable = function () {
                var e;
                return (
                  this.enabled &&
                  Boolean(
                    null == (e = this.sdk)
                      ? void 0
                      : e.advertisement.isRewardedSupported
                  ) &&
                  !this.pendingRewarded
                );
              }),
              (i.showRewarded = function () {
                var e,
                  t = this,
                  n = null == (e = this.sdk) ? void 0 : e.advertisement;
                return this.enabled &&
                  null != n &&
                  n.isRewardedSupported &&
                  !this.pendingRewarded
                  ? (console.info("[blocks-web] Playgama rewarded requested"),
                    new Promise(function (e) {
                      t.pendingRewarded = t.createPendingAd(e, "rewarded");
                      try {
                        n.showRewarded("second_chance");
                      } catch (e) {
                        console.warn(
                          "[blocks-web] Playgama rewarded failed to start",
                          e
                        ),
                          t.finishAd("rewarded", "failed");
                      }
                    }))
                  : Promise.resolve("unavailable");
              }),
              (i.createPendingAd = function (e, t) {
                var n = this;
                return {
                  resolve: e,
                  timeout: window.setTimeout(function () {
                    console.warn("[blocks-web] Playgama " + t + " timed out"),
                      n.finishAd(t, "failed");
                  }, 12e4),
                  rewarded: !1,
                };
              }),
              (i.handleInterstitialState = function (e) {
                var t = String(e);
                console.info("[blocks-web] Playgama interstitial state: " + t),
                  "closed" === t
                    ? ((this.nextInterstitialTime = Date.now() + s),
                      this.finishAd("interstitial", "completed"))
                    : "failed" === t && this.finishAd("interstitial", "failed");
              }),
              (i.handleRewardedState = function (e) {
                var t = String(e);
                console.info("[blocks-web] Playgama rewarded state: " + t);
                var n = this.pendingRewarded;
                "rewarded" === t && n
                  ? (n.rewarded = !0)
                  : "closed" === t
                  ? this.finishAd(
                      "rewarded",
                      null != n && n.rewarded ? "completed" : "skipped"
                    )
                  : "failed" === t && this.finishAd("rewarded", "failed");
              }),
              (i.finishAd = function (e, t) {
                var n =
                  "interstitial" === e
                    ? this.pendingInterstitial
                    : this.pendingRewarded;
                n &&
                  (window.clearTimeout(n.timeout),
                  "interstitial" === e
                    ? (this.pendingInterstitial = null)
                    : (this.pendingRewarded = null),
                  n.resolve(t));
              }),
              (i.updateAudioMuted = function (e) {
                var t;
                this.audioMuted !== e &&
                  ((this.audioMuted = e),
                  null == (t = this.audioMuteListener) || t.call(this, e));
              }),
              (i.updatePaused = function (e) {
                var t;
                this.paused !== e &&
                  ((this.paused = e),
                  null == (t = this.pauseListener) || t.call(this, e));
              }),
              (i.loadSdkScript = (function () {
                var e = t(
                  n().mark(function e() {
                    var t, r, i, s, o;
                    return n().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((i = window),
                              !(s =
                                null != (t = i.bridge) ? t : i.playgamaBridge))
                            ) {
                              e.next = 4;
                              break;
                            }
                            return e.abrupt("return", s);
                          case 4:
                            return (
                              (e.next = 6),
                              new Promise(function (e, t) {
                                var n = document.querySelector(
                                  'script[src="' + a + '"]'
                                );
                                null == n || n.remove();
                                var r = document.createElement("script");
                                r.addEventListener(
                                  "load",
                                  function () {
                                    return e();
                                  },
                                  { once: !0 }
                                ),
                                  r.addEventListener(
                                    "error",
                                    function () {
                                      return t(
                                        new Error(
                                          "Playgama Bridge failed to load"
                                        )
                                      );
                                    },
                                    { once: !0 }
                                  ),
                                  (r.src = a),
                                  (r.async = !0),
                                  (r.dataset.playgamaBridge = "true"),
                                  document.head.appendChild(r);
                              })
                            );
                          case 6:
                            if (
                              (o =
                                null != (r = i.bridge) ? r : i.playgamaBridge)
                            ) {
                              e.next = 9;
                              break;
                            }
                            throw new Error(
                              "Playgama Bridge loaded without window.bridge"
                            );
                          case 9:
                            return e.abrupt("return", o);
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              e
            );
          })()
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/PokiPortalAdapter.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    var t, r, n;
    return {
      setters: [
        function (e) {
          (t = e.asyncToGenerator), (r = e.regeneratorRuntime);
        },
        function (e) {
          n = e.cclegacy;
        },
      ],
      execute: function () {
        n._RF.push({}, "33d75r4ruFFFqF0i5sddd4K", "PokiPortalAdapter", void 0);
        var a = "https://game-cdn.poki.com/scripts/v2/poki-sdk.js";
        e(
          "PokiPortalAdapter",
          (function () {
            function e() {
              (this.id = "poki"), (this.sdk = null), (this.enabled = !1);
            }
            var n = e.prototype;
            return (
              (n.initialize = (function () {
                var e = t(
                  r().mark(function e() {
                    var t;
                    return r().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.loadSdkScript();
                            case 2:
                              return (
                                (t = e.sent),
                                (e.prev = 3),
                                (e.next = 6),
                                t.init()
                              );
                            case 6:
                              e.next = 11;
                              break;
                            case 8:
                              (e.prev = 8),
                                (e.t0 = e.catch(3)),
                                console.warn(
                                  "[blocks-web] Poki SDK initialization failed",
                                  e.t0
                                );
                            case 11:
                              (this.sdk = t), (this.enabled = !0);
                            case 13:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[3, 8]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              (n.getLanguage = function () {
                return "en";
              }),
              (n.loadingReady = function () {
                var e;
                this.enabled &&
                  (null == (e = this.sdk) || e.gameLoadingFinished());
              }),
              (n.gameplayStart = function () {
                var e;
                this.enabled && (null == (e = this.sdk) || e.gameplayStart());
              }),
              (n.gameplayStop = function () {
                var e;
                this.enabled && (null == (e = this.sdk) || e.gameplayStop());
              }),
              (n.submitScore = function (e) {}),
              (n.canShowInterstitial = function () {
                return this.enabled && null !== this.sdk;
              }),
              (n.showInterstitial = (function () {
                var e = t(
                  r().mark(function e() {
                    return r().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (this.enabled && this.sdk) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return", "unavailable");
                            case 2:
                              return (
                                (e.prev = 2),
                                (e.next = 5),
                                this.sdk.commercialBreak()
                              );
                            case 5:
                              return e.abrupt("return", "completed");
                            case 8:
                              return (
                                (e.prev = 8),
                                (e.t0 = e.catch(2)),
                                e.abrupt("return", "failed")
                              );
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[2, 8]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              (n.isRewardedAvailable = function () {
                return this.enabled && null !== this.sdk;
              }),
              (n.showRewarded = (function () {
                var e = t(
                  r().mark(function e() {
                    var t;
                    return r().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (this.enabled && this.sdk) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return", "unavailable");
                            case 2:
                              return (
                                (e.prev = 2),
                                (e.next = 5),
                                this.sdk.rewardedBreak({ size: "large" })
                              );
                            case 5:
                              return (
                                (t = e.sent),
                                e.abrupt("return", t ? "completed" : "skipped")
                              );
                            case 9:
                              return (
                                (e.prev = 9),
                                (e.t0 = e.catch(2)),
                                e.abrupt("return", "failed")
                              );
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[2, 9]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              (n.loadSdkScript = (function () {
                var e = t(
                  r().mark(function e() {
                    var t, n, i;
                    return r().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((t = window), !(n = t.PokiSDK))) {
                              e.next = 4;
                              break;
                            }
                            return e.abrupt("return", n);
                          case 4:
                            return (
                              (e.next = 6),
                              new Promise(function (e, t) {
                                var r = document.querySelector(
                                  'script[src="' + a + '"]'
                                );
                                null == r || r.remove();
                                var n = document.createElement("script");
                                n.addEventListener(
                                  "load",
                                  function () {
                                    return e();
                                  },
                                  { once: !0 }
                                ),
                                  n.addEventListener(
                                    "error",
                                    function () {
                                      return t(
                                        new Error("Poki SDK failed to load")
                                      );
                                    },
                                    { once: !0 }
                                  ),
                                  (n.src = a),
                                  (n.async = !0),
                                  (n.dataset.pokiSdk = "true"),
                                  document.head.appendChild(n);
                              })
                            );
                          case 6:
                            if ((i = t.PokiSDK)) {
                              e.next = 9;
                              break;
                            }
                            throw new Error("Poki SDK loaded without PokiSDK");
                          case 9:
                            return e.abrupt("return", i);
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              e
            );
          })()
        );
        n._RF.pop();
      },
    };
  }
);

System.register("chunks:///_virtual/PortalAdapter.ts", ["cc"], function () {
  var t;
  return {
    setters: [
      function (e) {
        t = e.cclegacy;
      },
    ],
    execute: function () {
      t._RF.push({}, "e257cGMlMNBkq2nzW3kDLow", "PortalAdapter", void 0),
        t._RF.pop();
    },
  };
});

System.register(
  "chunks:///_virtual/PortalBridge.ts",
  [
    "./LocalPortalAdapter.ts",
    "./BuildVariant.ts",
    "./TikTokPortalAdapter.ts",
    "./CrazyGamesPortalAdapter.ts",
    "./PokiPortalAdapter.ts",
    "./GameDistributionPortalAdapter.ts",
    "./GamePixPortalAdapter.ts",
    "./PlaygamaPortalAdapter.ts",
    "./VkPortalAdapter.ts",
    "./OkPortalAdapter.ts",
    "./YouTubePortalAdapter.ts",
    "./YandexPortalAdapter.ts",
  ],
  function (t, i) {
    "use strict";
    var e,
      a,
      r,
      n,
      o,
      s,
      l,
      d,
      u,
      h,
      c,
      p,
      v,
      y =
        (this && this.__awaiter) ||
        function (t, i, e, a) {
          return new (e || (e = Promise))(function (r, n) {
            function fulfilled(t) {
              try {
                step(a.next(t));
              } catch (t) {
                n(t);
              }
            }
            function rejected(t) {
              try {
                step(a.throw(t));
              } catch (t) {
                n(t);
              }
            }
            function step(t) {
              t.done
                ? r(t.value)
                : (function adopt(t) {
                    return t instanceof e
                      ? t
                      : new e(function (i) {
                          i(t);
                        });
                  })(t.value).then(fulfilled, rejected);
            }
            step((a = a.apply(t, i || [])).next());
          });
        };
    return (
      i && i.id,
      {
        setters: [
          function (t) {
            e = t;
          },
          function (t) {
            a = t;
          },
          function (t) {
            r = t;
          },
          function (t) {
            n = t;
          },
          function (t) {
            o = t;
          },
          function (t) {
            s = t;
          },
          function (t) {
            l = t;
          },
          function (t) {
            d = t;
          },
          function (t) {
            u = t;
          },
          function (t) {
            h = t;
          },
          function (t) {
            c = t;
          },
          function (t) {
            p = t;
          },
        ],
        execute: function () {
          (v = class PortalBridge {
            constructor() {
              (this.adapter = (function createPortalAdapter() {
                switch (a.buildVariant.id) {
                  case "tiktok":
                    return new r.TikTokPortalAdapter();
                  case "vk":
                    return new u.VkPortalAdapter();
                  case "ok":
                    return new h.OkPortalAdapter();
                  case "crazygames":
                    return new n.CrazyGamesPortalAdapter();
                  case "youtube":
                    return new c.YouTubePortalAdapter();
                  case "poki":
                    return new o.PokiPortalAdapter();
                  case "gamedistribution":
                    return new s.GameDistributionPortalAdapter();
                  case "gamepix":
                    return new l.GamePixPortalAdapter();
                  case "playgama":
                    return new d.PlaygamaPortalAdapter();
                  default:
                    return p.isYandexGamesEnvironment()
                      ? new p.YandexPortalAdapter()
                      : new e.LocalPortalAdapter();
                }
              })()),
                (this.initialization = null),
                (this.initialized = !1),
                (this.loadingReported = !1),
                (this.gameplayActive = !1);
            }
            installAdapter(t) {
              if (this.initialization || this.initialized)
                throw new Error(
                  "Portal adapter must be installed before initialization"
                );
              this.adapter = t;
            }
            initialize() {
              return y(this, void 0, void 0, function* () {
                this.initialization ||
                  (this.initialization = this.initializeAdapter()),
                  yield this.initialization;
              });
            }
            get id() {
              return this.adapter.id;
            }
            get gameplayRunning() {
              return this.gameplayActive;
            }
            get storageReady() {
              var t, i, e;
              try {
                return (
                  null ===
                    (e =
                      null === (i = (t = this.adapter).isStorageReady) ||
                      void 0 === i
                        ? void 0
                        : i.call(t)) ||
                  void 0 === e ||
                  e
                );
              } catch (t) {
                return !1;
              }
            }
            getLanguage() {
              try {
                return this.adapter.getLanguage();
              } catch (t) {
                return this.warn("language detection", t), null;
              }
            }
            getSafeAreaTopRatio() {
              var t, i, e;
              try {
                const a =
                  null !==
                    (e =
                      null === (i = (t = this.adapter).getSafeAreaTopRatio) ||
                      void 0 === i
                        ? void 0
                        : i.call(t)) && void 0 !== e
                    ? e
                    : 0;
                return Number.isFinite(a) ? Math.min(0.1, Math.max(0, a)) : 0;
              } catch (t) {
                return this.warn("safe area detection", t), 0;
              }
            }
            get audioMuted() {
              var t, i, e;
              try {
                return (
                  null !==
                    (e =
                      null === (i = (t = this.adapter).isAudioMuted) ||
                      void 0 === i
                        ? void 0
                        : i.call(t)) &&
                  void 0 !== e &&
                  e
                );
              } catch (t) {
                return this.warn("audio mute detection", t), !1;
              }
            }
            setAudioMuteListener(t) {
              var i, e;
              try {
                null === (e = (i = this.adapter).setAudioMuteListener) ||
                  void 0 === e ||
                  e.call(i, t);
              } catch (t) {
                this.warn("audio mute listener", t);
              }
            }
            setPauseListener(t) {
              var i, e;
              try {
                null === (e = (i = this.adapter).setPauseListener) ||
                  void 0 === e ||
                  e.call(i, t);
              } catch (t) {
                this.warn("pause listener", t);
              }
            }
            loadingReady() {
              return y(this, void 0, void 0, function* () {
                yield this.initialize(),
                  this.loadingReported ||
                    ((this.loadingReported = !0),
                    yield this.run("loading ready", () =>
                      this.adapter.loadingReady()
                    ));
              });
            }
            gameplayStart() {
              return y(this, void 0, void 0, function* () {
                yield this.initialize(),
                  this.gameplayActive ||
                    ((this.gameplayActive = !0),
                    yield this.run("gameplay start", () =>
                      this.adapter.gameplayStart()
                    ));
              });
            }
            gameplayStop() {
              return y(this, void 0, void 0, function* () {
                yield this.initialize(),
                  this.gameplayActive &&
                    ((this.gameplayActive = !1),
                    yield this.run("gameplay stop", () =>
                      this.adapter.gameplayStop()
                    ));
              });
            }
            loadStorage(t) {
              return y(this, void 0, void 0, function* () {
                yield this.initialize();
                const i = this.adapter.loadStorage;
                return i
                  ? this.runWithResult(
                      "storage loading",
                      () => i.call(this.adapter, t),
                      t.map(() => null)
                    )
                  : t.map(() => null);
              });
            }
            saveStorage(t, i) {
              return y(this, void 0, void 0, function* () {
                yield this.initialize();
                const e = this.adapter.saveStorage;
                e &&
                  (yield this.run("storage saving", () =>
                    e.call(this.adapter, t, i)
                  ));
              });
            }
            deleteStorage(t) {
              return y(this, void 0, void 0, function* () {
                yield this.initialize();
                const i = this.adapter.deleteStorage;
                i &&
                  (yield this.run("storage deletion", () =>
                    i.call(this.adapter, t)
                  ));
              });
            }
            submitScore(t) {
              return y(this, void 0, void 0, function* () {
                yield this.initialize(),
                  yield this.run("score submission", () =>
                    this.adapter.submitScore(t)
                  );
              });
            }
            updateLevel(t) {
              return y(this, void 0, void 0, function* () {
                yield this.initialize();
                const i = this.adapter.updateLevel;
                i &&
                  (yield this.run("level update", () =>
                    i.call(this.adapter, t)
                  ));
              });
            }
            happyMoment() {
              return y(this, void 0, void 0, function* () {
                yield this.initialize();
                const t = this.adapter.happyMoment;
                t &&
                  (yield this.run("happy moment", () => t.call(this.adapter)));
              });
            }
            loadBestScore() {
              return y(this, void 0, void 0, function* () {
                return (
                  yield this.initialize(),
                  this.runOptionalWithResult(
                    "best score loading",
                    "loadBestScore",
                    null
                  )
                );
              });
            }
            saveBestScore(t) {
              return y(this, arguments, void 0, function* (t, i = !1) {
                yield this.initialize();
                const e = this.adapter.saveBestScore;
                e &&
                  (yield this.run("best score saving", () =>
                    e.call(this.adapter, t, i)
                  ));
              });
            }
            showBanner() {
              return y(this, void 0, void 0, function* () {
                yield this.initialize();
                const t = this.adapter.showBanner;
                t && (yield this.run("banner ad", () => t.call(this.adapter)));
              });
            }
            canShowInterstitial() {
              return y(this, void 0, void 0, function* () {
                return (
                  yield this.initialize(),
                  this.runOptionalWithResult(
                    "interstitial ad availability",
                    "canShowInterstitial",
                    !1
                  )
                );
              });
            }
            showInterstitial() {
              return y(this, void 0, void 0, function* () {
                return (
                  yield this.initialize(),
                  this.runWithResult(
                    "interstitial ad",
                    () => this.adapter.showInterstitial(),
                    "failed"
                  )
                );
              });
            }
            showRewarded() {
              return y(this, void 0, void 0, function* () {
                return (
                  yield this.initialize(),
                  this.runWithResult(
                    "rewarded ad",
                    () => this.adapter.showRewarded(),
                    "failed"
                  )
                );
              });
            }
            isRewardedAvailable() {
              return y(this, void 0, void 0, function* () {
                return (
                  yield this.initialize(),
                  this.runWithResult(
                    "rewarded ad availability",
                    () => this.adapter.isRewardedAvailable(),
                    !1
                  )
                );
              });
            }
            canAddHomeShortcut() {
              return y(this, void 0, void 0, function* () {
                return (
                  yield this.initialize(),
                  this.runOptionalWithResult(
                    "home shortcut availability",
                    "canAddHomeShortcut",
                    !1
                  )
                );
              });
            }
            addHomeShortcut() {
              return y(this, void 0, void 0, function* () {
                return (
                  yield this.initialize(),
                  this.runOptionalWithResult(
                    "add home shortcut",
                    "addHomeShortcut",
                    !1
                  )
                );
              });
            }
            claimHomeShortcutReward() {
              return y(this, void 0, void 0, function* () {
                return (
                  yield this.initialize(),
                  this.runOptionalWithResult(
                    "home shortcut reward",
                    "claimHomeShortcutReward",
                    !1
                  )
                );
              });
            }
            canStartProfileMission() {
              return y(this, void 0, void 0, function* () {
                return (
                  yield this.initialize(),
                  this.runOptionalWithResult(
                    "profile mission availability",
                    "canStartProfileMission",
                    !1
                  )
                );
              });
            }
            startProfileMission() {
              return y(this, void 0, void 0, function* () {
                return (
                  yield this.initialize(),
                  this.runOptionalWithResult(
                    "start profile mission",
                    "startProfileMission",
                    !1
                  )
                );
              });
            }
            claimProfileMissionReward() {
              return y(this, void 0, void 0, function* () {
                return (
                  yield this.initialize(),
                  this.runOptionalWithResult(
                    "profile mission reward",
                    "claimProfileMissionReward",
                    !1
                  )
                );
              });
            }
            initializeAdapter() {
              return y(this, void 0, void 0, function* () {
                try {
                  yield this.adapter.initialize();
                } catch (t) {
                  this.warn("initialization", t);
                } finally {
                  this.initialized = !0;
                }
              });
            }
            run(t, i) {
              return y(this, void 0, void 0, function* () {
                try {
                  yield i();
                } catch (i) {
                  this.warn(t, i);
                }
              });
            }
            runWithResult(t, i, e) {
              return y(this, void 0, void 0, function* () {
                try {
                  return yield i();
                } catch (i) {
                  return this.warn(t, i), e;
                }
              });
            }
            runOptionalWithResult(t, i, e) {
              return y(this, void 0, void 0, function* () {
                const a = this.adapter[i];
                return "function" != typeof a
                  ? e
                  : this.runWithResult(t, () => a.call(this.adapter), e);
              });
            }
            warn(t, i) {
              console.warn(
                `[blocks-web] Portal ${this.adapter.id}: ${t} failed`,
                i
              );
            }
          }),
            t("portal", new v());
        },
      }
    );
  }
);

System.register("chunks:///_virtual/TikTokConfig.ts", ["cc"], function (T) {
  var t;
  return {
    setters: [
      function (T) {
        t = T.cclegacy;
      },
    ],
    execute: function () {
      t._RF.push({}, "94318dl8rpKt4AvgKKphsy6", "TikTokConfig", void 0);
      T("TIKTOK_REWARDED_AD_UNIT_ID", "ad7652697288096172039"),
        T("TIKTOK_INTERSTITIAL_AD_UNIT_ID", "ad7653493723172259858");
      t._RF.pop();
    },
  };
});

System.register(
  "chunks:///_virtual/TikTokPortalAdapter.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./TikTokConfig.ts"],
  function (e) {
    var n, t, r, o, i;
    return {
      setters: [
        function (e) {
          (n = e.asyncToGenerator), (t = e.regeneratorRuntime);
        },
        function (e) {
          r = e.cclegacy;
        },
        function (e) {
          (o = e.TIKTOK_INTERSTITIAL_AD_UNIT_ID),
            (i = e.TIKTOK_REWARDED_AD_UNIT_ID);
        },
      ],
      execute: function () {
        function a(e) {
          var n,
            t,
            r,
            o = globalThis;
          return null !=
            (r = [
              null == (n = o.TTMinis) ? void 0 : n.game,
              o.tt,
              null == (t = o.GameGlobal) ? void 0 : t.tt,
              o.TTMinis,
            ].find(function (n) {
              return n && "function" == typeof n[e];
            }))
            ? r
            : null;
        }
        function l(e) {
          var n = a("canIUse"),
            t = null == n ? void 0 : n.canIUse;
          if ("function" != typeof t) return Boolean(a(e));
          try {
            return Boolean(t.call(n, e));
          } catch (n) {
            return Boolean(a(e));
          }
        }
        function u(e, n) {
          var t = a(e),
            r = null == t ? void 0 : t[e];
          return !(!t || "function" != typeof r) && (r.call(t, n), !0);
        }
        function s(e) {
          var n = a(e),
            t = null == n ? void 0 : n[e];
          if (!n || "function" != typeof t) return null;
          try {
            var r = t.call(n);
            return r && "object" == typeof r ? r : null;
          } catch (e) {
            return null;
          }
        }
        function c(e) {
          return "number" == typeof e && Number.isFinite(e) ? e : null;
        }
        function f(e) {
          return e && "object" == typeof e ? e : null;
        }
        r._RF.push(
          {},
          "d3f31D4l+9IyrJFayL3Mcm/",
          "TikTokPortalAdapter",
          void 0
        );
        e(
          "TikTokPortalAdapter",
          (function () {
            function e() {
              (this.id = "tiktok"), (this.previewProfileRewardReady = !1);
            }
            var r = e.prototype;
            return (
              (r.initialize = function () {
                var e = this;
                a("login") &&
                  u("login", {
                    success: function () {
                      e.reportEvent("silent_login_success");
                    },
                    fail: function (e) {
                      console.warn(
                        "[blocks-web] TikTok silent login failed",
                        e
                      );
                    },
                  });
              }),
              (r.getLanguage = function () {
                var e = a("getSystemInfoSync"),
                  n = null == e ? void 0 : e.getSystemInfoSync;
                if ("function" != typeof n) return null;
                var t = n.call(e);
                return "string" == typeof (null == t ? void 0 : t.language)
                  ? t.language
                  : null;
              }),
              (r.getSafeAreaTopRatio = function () {
                var e,
                  n,
                  t,
                  r,
                  o,
                  i,
                  a = s("getWindowInfo"),
                  l = s("getSystemInfoSync"),
                  u =
                    null != (e = c(null == a ? void 0 : a.windowHeight))
                      ? e
                      : c(null == l ? void 0 : l.windowHeight);
                if (!u || u <= 0) return 0;
                var d =
                    null != (n = f(null == a ? void 0 : a.safeArea))
                      ? n
                      : f(null == l ? void 0 : l.safeArea),
                  v = s("getMenuButtonBoundingClientRect"),
                  h =
                    null !=
                    (t =
                      null !=
                      (r =
                        null !=
                        (o =
                          null != (i = c(null == d ? void 0 : d.top))
                            ? i
                            : c(null == a ? void 0 : a.statusBarHeight))
                          ? o
                          : c(null == l ? void 0 : l.statusBarHeight))
                        ? r
                        : c(null == v ? void 0 : v.top))
                      ? t
                      : 0;
                return Math.max(0, h) / u;
              }),
              (r.loadingReady = function () {
                u("setLoadingProgress", { progress: 1 }),
                  this.reportEvent("loading_ready");
              }),
              (r.gameplayStart = function () {
                this.reportEvent("gameplay_start");
              }),
              (r.gameplayStop = function () {
                this.reportEvent("gameplay_stop");
              }),
              (r.submitScore = function (e) {
                this.reportEvent("score_submit", { score: e });
                var n = a("setUserCloudStorage"),
                  t = null == n ? void 0 : n.setUserCloudStorage;
                "function" == typeof t &&
                  t.call(n, {
                    data: [{ key: "blocksBestScore", value: String(e) }],
                    fail: function (e) {
                      console.warn(
                        "[blocks-web] TikTok cloud score save failed",
                        e
                      );
                    },
                  });
              }),
              (r.showInterstitial = function () {
                return this.showAd("createInterstitialAd", o, !1);
              }),
              (r.canShowInterstitial = function () {
                return (
                  this.hasNativeRuntime() &&
                  Boolean(
                    l("createInterstitialAd") && a("createInterstitialAd")
                  )
                );
              }),
              (r.isRewardedAvailable = function () {
                return (
                  !this.hasNativeRuntime() ||
                  Boolean(
                    l("createRewardedVideoAd") && a("createRewardedVideoAd")
                  )
                );
              }),
              (r.showRewarded = function () {
                return this.showAd("createRewardedVideoAd", i, !0);
              }),
              (r.canAddHomeShortcut = function () {
                return !this.hasNativeRuntime() || l("addShortcut");
              }),
              (r.addHomeShortcut = function () {
                return this.runBooleanCallback("addShortcut", !0);
              }),
              (r.claimHomeShortcutReward = function () {
                return this.hasNativeRuntime()
                  ? this.runRewardClaim("getShortcutMissionReward")
                  : Promise.resolve(!1);
              }),
              (r.canStartProfileMission = function () {
                return !this.hasNativeRuntime() || l("startEntranceMission");
              }),
              (r.startProfileMission = (function () {
                var e = n(
                  t().mark(function e() {
                    var n;
                    return t().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.runBooleanCallback(
                                  "startEntranceMission",
                                  !0
                                )
                              );
                            case 2:
                              return (
                                (n = e.sent) &&
                                  !this.hasNativeRuntime() &&
                                  (this.previewProfileRewardReady = !0),
                                e.abrupt("return", n)
                              );
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              (r.claimProfileMissionReward = function () {
                if (!this.hasNativeRuntime()) {
                  var e = this.previewProfileRewardReady;
                  return (
                    (this.previewProfileRewardReady = !1), Promise.resolve(e)
                  );
                }
                return this.runRewardClaim("getEntranceMissionReward");
              }),
              (r.hasNativeRuntime = function () {
                return Boolean(a("canIUse") || a("getSystemInfoSync"));
              }),
              (r.reportEvent = function (e, n) {
                void 0 === n && (n = {});
                var t = a("reportEvent"),
                  r = null == t ? void 0 : t.reportEvent;
                if ("function" == typeof r)
                  try {
                    r.call(t, e, n);
                  } catch (n) {
                    console.warn(
                      "[blocks-web] TikTok event " + e + " failed",
                      n
                    );
                  }
              }),
              (r.runBooleanCallback = function (e, n) {
                return this.hasNativeRuntime()
                  ? l(e)
                    ? new Promise(function (n) {
                        u(e, {
                          success: function () {
                            return n(!0);
                          },
                          fail: function () {
                            return n(!1);
                          },
                        }) || n(!1);
                      })
                    : Promise.resolve(!1)
                  : Promise.resolve(n);
              }),
              (r.runRewardClaim = function (e) {
                return l(e)
                  ? new Promise(function (n) {
                      u(e, {
                        success: function (e) {
                          return n(!0 === e.canReceiveReward);
                        },
                        fail: function () {
                          return n(!1);
                        },
                      }) || n(!1);
                    })
                  : Promise.resolve(!1);
              }),
              (r.showAd = function (e, n, t) {
                if (!this.hasNativeRuntime())
                  return Promise.resolve(t ? "completed" : "unavailable");
                var r,
                  o = a(e),
                  i = null == o ? void 0 : o[e];
                if (!o || "function" != typeof i || !n)
                  return Promise.resolve("unavailable");
                try {
                  r = i.call(o, { adUnitId: n });
                } catch (n) {
                  return (
                    console.warn(
                      "[blocks-web] TikTok " + e + " creation failed",
                      n
                    ),
                    Promise.resolve("failed")
                  );
                }
                return new Promise(function (n) {
                  var o = !1,
                    i = function (e) {
                      o ||
                        ((o = !0),
                        null == r.offClose || r.offClose(a),
                        null == r.offError || r.offError(l),
                        n(e));
                    },
                    a = function (e) {
                      i(
                        t && !0 !== (null == e ? void 0 : e.isEnded)
                          ? "skipped"
                          : "completed"
                      );
                    },
                    l = function (n) {
                      console.warn("[blocks-web] TikTok " + e + " failed", n),
                        i("failed");
                    };
                  r.onClose(a), r.onError(l), r.show().catch(l);
                });
              }),
              e
            );
          })()
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/VkPortalAdapter.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./BestScoreMigration.ts"],
  function (e) {
    var t, r, n, i;
    return {
      setters: [
        function (e) {
          (t = e.asyncToGenerator), (r = e.regeneratorRuntime);
        },
        function (e) {
          n = e.cclegacy;
        },
        function (e) {
          i = e.loadLegacyUnityIndexedDbBestScore;
        },
      ],
      execute: function () {
        n._RF.push({}, "29cb6V6SNBHfYuhiMgCzH9e", "VkPortalAdapter", void 0);
        var a = 18e4;
        e(
          "VkPortalAdapter",
          (function () {
            function e() {
              (this.id = "vk"),
                (this.bridge = null),
                (this.legacyBestScore = Promise.resolve(null)),
                (this.nextInterstitialTime = Number.POSITIVE_INFINITY),
                (this.pauseListener = null);
            }
            var n = e.prototype;
            return (
              (n.initialize = (function () {
                var e = t(
                  r().mark(function e() {
                    var t,
                      n,
                      s = this;
                    return r().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (this.legacyBestScore = i()),
                                (e.next = 3),
                                this.loadBridge()
                              );
                            case 3:
                              return (
                                (this.bridge = e.sent),
                                (e.next = 6),
                                this.bridge.send("VKWebAppInit")
                              );
                            case 6:
                              null == (t = (n = this.bridge).subscribe) ||
                                t.call(n, function (e) {
                                  var t, r;
                                  "VKWebAppViewHide" ===
                                  (null == (t = e.detail) ? void 0 : t.type)
                                    ? null == s.pauseListener ||
                                      s.pauseListener(!0)
                                    : "VKWebAppViewRestore" ===
                                        (null == (r = e.detail)
                                          ? void 0
                                          : r.type) &&
                                      (null == s.pauseListener ||
                                        s.pauseListener(!1));
                                }),
                                (this.nextInterstitialTime = Date.now() + a);
                            case 8:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              (n.getLanguage = function () {
                return "ru";
              }),
              (n.setPauseListener = function (e) {
                this.pauseListener = e;
              }),
              (n.loadingReady = function () {}),
              (n.gameplayStart = function () {}),
              (n.gameplayStop = function () {}),
              (n.submitScore = function (e) {}),
              (n.loadBestScore = function () {
                return this.legacyBestScore;
              }),
              (n.showBanner = (function () {
                var e = t(
                  r().mark(function e() {
                    var t;
                    return r().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                null == (t = this.bridge)
                                  ? void 0
                                  : t.send("VKWebAppShowBannerAd", {
                                      banner_location: "bottom",
                                    })
                              );
                            case 3:
                              e.next = 8;
                              break;
                            case 5:
                              (e.prev = 5),
                                (e.t0 = e.catch(0)),
                                console.warn(
                                  "[blocks-web] VK banner unavailable",
                                  e.t0
                                );
                            case 8:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[0, 5]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              (n.canShowInterstitial = function () {
                return (
                  null !== this.bridge &&
                  Date.now() >= this.nextInterstitialTime
                );
              }),
              (n.showInterstitial = (function () {
                var e = t(
                  r().mark(function e() {
                    return r().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                this.bridge &&
                                !(Date.now() < this.nextInterstitialTime)
                              ) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return", "unavailable");
                            case 2:
                              return (
                                (e.prev = 2),
                                (e.next = 5),
                                this.bridge.send("VKWebAppShowNativeAds", {
                                  ad_format: "interstitial",
                                })
                              );
                            case 5:
                              if (!0 !== e.sent.result) {
                                e.next = 9;
                                break;
                              }
                              return (
                                (this.nextInterstitialTime = Date.now() + a),
                                e.abrupt("return", "completed")
                              );
                            case 9:
                              return e.abrupt("return", "unavailable");
                            case 12:
                              return (
                                (e.prev = 12),
                                (e.t0 = e.catch(2)),
                                e.abrupt("return", "failed")
                              );
                            case 15:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[2, 12]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              (n.isRewardedAvailable = (function () {
                var e = t(
                  r().mark(function e() {
                    var t;
                    return r().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (this.bridge) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return", !1);
                            case 2:
                              return (
                                (e.prev = 2),
                                (e.next = 5),
                                this.bridge.send("VKWebAppCheckNativeAds", {
                                  ad_format: "reward",
                                })
                              );
                            case 5:
                              return (
                                (t = e.sent),
                                e.abrupt("return", !0 === t.result)
                              );
                            case 9:
                              return (
                                (e.prev = 9),
                                (e.t0 = e.catch(2)),
                                e.abrupt("return", !1)
                              );
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[2, 9]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              (n.showRewarded = (function () {
                var e = t(
                  r().mark(function e() {
                    var t;
                    return r().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (this.bridge) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return", "unavailable");
                            case 2:
                              return (
                                (e.prev = 2),
                                (e.next = 5),
                                this.bridge.send("VKWebAppShowNativeAds", {
                                  ad_format: "reward",
                                })
                              );
                            case 5:
                              return (
                                (t = e.sent),
                                e.abrupt(
                                  "return",
                                  !0 === t.result ? "completed" : "skipped"
                                )
                              );
                            case 9:
                              return (
                                (e.prev = 9),
                                (e.t0 = e.catch(2)),
                                e.abrupt("return", "failed")
                              );
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[2, 9]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              (n.loadBridge = (function () {
                var e = t(
                  r().mark(function e() {
                    var t;
                    return r().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!(t = window).vkBridge) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return", t.vkBridge);
                          case 3:
                            return (
                              (e.next = 5),
                              new Promise(function (e, t) {
                                var r = !1,
                                  n = window.setTimeout(function () {
                                    r ||
                                      ((r = !0),
                                      t(new Error("VK Bridge load timed out")));
                                  }, 15e3),
                                  i = function () {
                                    r ||
                                      ((r = !0), window.clearTimeout(n), e());
                                  },
                                  a = function () {
                                    r ||
                                      ((r = !0),
                                      window.clearTimeout(n),
                                      t(new Error("VK Bridge failed to load")));
                                  },
                                  s = document.querySelector(
                                    "script[data-vk-bridge]"
                                  );
                                if (s)
                                  return (
                                    s.addEventListener("load", i, { once: !0 }),
                                    void s.addEventListener("error", a, {
                                      once: !0,
                                    })
                                  );
                                var u = document.createElement("script");
                                (u.src =
                                  "https://unpkg.com/@vkontakte/vk-bridge@2.15.0/dist/browser.min.js"),
                                  (u.async = !0),
                                  (u.dataset.vkBridge = "true"),
                                  u.addEventListener("load", i, { once: !0 }),
                                  u.addEventListener("error", a, { once: !0 }),
                                  document.head.appendChild(u);
                              })
                            );
                          case 5:
                            if (t.vkBridge) {
                              e.next = 7;
                              break;
                            }
                            throw new Error(
                              "VK Bridge loaded without vkBridge"
                            );
                          case 7:
                            return e.abrupt("return", t.vkBridge);
                          case 8:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              e
            );
          })()
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/YandexPortalAdapter.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./BestScoreMigration.ts"],
  function (e) {
    var t, n, r, a, s, i, o, u;
    return {
      setters: [
        function (e) {
          (t = e.asyncToGenerator), (n = e.regeneratorRuntime), (r = e.extends);
        },
        function (e) {
          a = e.cclegacy;
        },
        function (e) {
          (s = e.normalizeBestScore),
            (i = e.extractLegacyUnityBestScore),
            (o = e.extractLegacyUnityNoAdsEndTime),
            (u = e.loadLegacyUnityIndexedDbBestScore);
        },
      ],
      execute: function () {
        e("isYandexGamesEnvironment", function () {
          if ("undefined" == typeof window) return !1;
          var e = new URLSearchParams(window.location.search).get("portal");
          if ("local" === e) return !1;
          if ("yandex" === e) return !0;
          var t = window.location.hostname.toLowerCase();
          return (
            "yandex.ru" === t ||
            t.endsWith(".yandex.ru") ||
            "yandex.com" === t ||
            t.endsWith(".yandex.com") ||
            "yandex.net" === t ||
            t.endsWith(".yandex.net")
          );
        }),
          a._RF.push(
            {},
            "f4026VjYoBD8YY0TfIHuwfV",
            "YandexPortalAdapter",
            void 0
          );
        var c = 18e4;
        e(
          "YandexPortalAdapter",
          (function () {
            function e() {
              (this.id = "yandex"),
                (this.sdk = null),
                (this.player = null),
                (this.playerData = {}),
                (this.playerDataLoaded = !1),
                (this.storedBestScore = null),
                (this.pendingBestScore = null),
                (this.pendingBestScoreFlush = !1),
                (this.bestScoreSaveQueue = Promise.resolve()),
                (this.nextInterstitialTime = Number.POSITIVE_INFINITY),
                (this.legacyNoAdsEndTime = 0);
            }
            var a = e.prototype;
            return (
              (a.initialize = (function () {
                var e = t(
                  n().mark(function e() {
                    var t;
                    return n().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.loadSdkScript();
                            case 2:
                              return (t = e.sent), (e.next = 5), t.init();
                            case 5:
                              if (
                                ((this.sdk = e.sent),
                                (this.nextInterstitialTime = Date.now() + c),
                                !this.sdk.getPlayer)
                              ) {
                                e.next = 17;
                                break;
                              }
                              return (
                                (e.prev = 8),
                                (e.next = 11),
                                this.sdk.getPlayer()
                              );
                            case 11:
                              (this.player = e.sent), (e.next = 17);
                              break;
                            case 14:
                              (e.prev = 14),
                                (e.t0 = e.catch(8)),
                                console.warn(
                                  "[blocks-web] Yandex player initialization failed",
                                  e.t0
                                );
                            case 17:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[8, 14]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              (a.getLanguage = function () {
                var e, t;
                return null !=
                  (e =
                    null == (t = this.sdk) ||
                    null == (t = t.environment) ||
                    null == (t = t.i18n)
                      ? void 0
                      : t.lang)
                  ? e
                  : null;
              }),
              (a.loadingReady = (function () {
                var e = t(
                  n().mark(function e() {
                    var t;
                    return n().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                null == (t = this.sdk) ||
                                null == (t = t.features) ||
                                null == (t = t.LoadingAPI)
                                  ? void 0
                                  : t.ready()
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              (a.gameplayStart = (function () {
                var e = t(
                  n().mark(function e() {
                    var t;
                    return n().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                null == (t = this.sdk) ||
                                null == (t = t.features) ||
                                null == (t = t.GameplayAPI)
                                  ? void 0
                                  : t.start()
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              (a.gameplayStop = (function () {
                var e = t(
                  n().mark(function e() {
                    var t;
                    return n().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                null == (t = this.sdk) ||
                                null == (t = t.features) ||
                                null == (t = t.GameplayAPI)
                                  ? void 0
                                  : t.stop()
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              (a.loadBestScore = (function () {
                var e = t(
                  n().mark(function e() {
                    var t, a, c, l, d;
                    return n().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), u();
                            case 2:
                              if (((a = e.sent), this.player)) {
                                e.next = 5;
                                break;
                              }
                              return e.abrupt("return", a);
                            case 5:
                              return (
                                (e.prev = 5),
                                (e.next = 8),
                                this.player.getData()
                              );
                            case 8:
                              (c = e.sent), (e.next = 15);
                              break;
                            case 11:
                              return (
                                (e.prev = 11),
                                (e.t0 = e.catch(5)),
                                console.warn(
                                  "[blocks-web] Yandex player data loading failed",
                                  e.t0
                                ),
                                e.abrupt("return", a)
                              );
                            case 15:
                              return (
                                (this.playerData =
                                  "object" != typeof (n = c) ||
                                  null === n ||
                                  Array.isArray(n)
                                    ? {}
                                    : r({}, c)),
                                (this.playerDataLoaded = !0),
                                (this.storedBestScore = s(
                                  this.playerData.blocksWebBestScore
                                )),
                                (l = i(this.playerData.data)),
                                (this.legacyNoAdsEndTime =
                                  null != (t = o(this.playerData.data))
                                    ? t
                                    : 0),
                                (d = [this.storedBestScore, l, a].filter(
                                  function (e) {
                                    return null !== e;
                                  }
                                )),
                                e.abrupt(
                                  "return",
                                  d.length > 0 ? Math.max.apply(Math, d) : null
                                )
                              );
                            case 22:
                            case "end":
                              return e.stop();
                          }
                        var n;
                      },
                      e,
                      this,
                      [[5, 11]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              (a.saveBestScore = function (e, t) {
                var n,
                  r = this;
                void 0 === t && (t = !1);
                var a = s(e);
                return null !== a && this.player && this.playerDataLoaded
                  ? ((this.pendingBestScore = Math.max(
                      null != (n = this.pendingBestScore) ? n : 0,
                      a
                    )),
                    this.pendingBestScoreFlush ||
                      (this.pendingBestScoreFlush = t),
                    (this.bestScoreSaveQueue = this.bestScoreSaveQueue
                      .catch(function () {})
                      .then(function () {
                        return r.writePendingBestScore();
                      })),
                    this.bestScoreSaveQueue)
                  : Promise.resolve();
              }),
              (a.submitScore = (function () {
                var e = t(
                  n().mark(function e(t) {
                    var r;
                    return n().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                null != (r = this.sdk) &&
                                r.leaderboards &&
                                Number.isFinite(t)
                              ) {
                                e.next = 3;
                                break;
                              }
                              return e.abrupt("return");
                            case 3:
                              if (!r.isAvailableMethod) {
                                e.next = 9;
                                break;
                              }
                              return (
                                (e.next = 6),
                                r.isAvailableMethod("leaderboards.setScore")
                              );
                            case 6:
                              if (e.sent) {
                                e.next = 9;
                                break;
                              }
                              return e.abrupt("return");
                            case 9:
                              return (
                                (e.next = 11),
                                r.leaderboards.setScore(
                                  "GlobalRating",
                                  Math.max(0, Math.floor(t))
                                )
                              );
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (a.showBanner = (function () {
                var e = t(
                  n().mark(function e() {
                    var t;
                    return n().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!(Date.now() < this.legacyNoAdsEndTime)) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return");
                            case 2:
                              return (
                                (e.next = 4),
                                null == (t = this.sdk) ||
                                null == (t = t.adv) ||
                                null == t.showBannerAdv
                                  ? void 0
                                  : t.showBannerAdv()
                              );
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              (a.canShowInterstitial = function () {
                var e;
                return (
                  Boolean(null == (e = this.sdk) ? void 0 : e.adv) &&
                  Date.now() >= this.legacyNoAdsEndTime &&
                  Date.now() >= this.nextInterstitialTime
                );
              }),
              (a.showInterstitial = function () {
                var e,
                  t = this,
                  n = null == (e = this.sdk) ? void 0 : e.adv;
                return n
                  ? new Promise(function (e) {
                      var r = !1,
                        a = function (t) {
                          r || ((r = !0), e(t));
                        };
                      n.showFullscreenAdv({
                        callbacks: {
                          onClose: function (e) {
                            e && (t.nextInterstitialTime = Date.now() + c),
                              a(e ? "completed" : "unavailable");
                          },
                          onError: function () {
                            return a("failed");
                          },
                        },
                      });
                    })
                  : Promise.resolve("unavailable");
              }),
              (a.isRewardedAvailable = (function () {
                var e = t(
                  n().mark(function e() {
                    var t;
                    return n().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt(
                                "return",
                                Boolean(null == (t = this.sdk) ? void 0 : t.adv)
                              );
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              (a.showRewarded = function () {
                var e,
                  t = null == (e = this.sdk) ? void 0 : e.adv;
                return t
                  ? new Promise(function (e) {
                      var n = !1,
                        r = !1,
                        a = function (t) {
                          r || ((r = !0), e(t));
                        };
                      t.showRewardedVideo({
                        callbacks: {
                          onRewarded: function () {
                            n = !0;
                          },
                          onClose: function () {
                            return a(n ? "completed" : "skipped");
                          },
                          onError: function () {
                            return a("failed");
                          },
                        },
                      });
                    })
                  : Promise.resolve("unavailable");
              }),
              (a.writePendingBestScore = (function () {
                var e = t(
                  n().mark(function e() {
                    var t, a, s;
                    return n().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((a = this.pendingBestScore),
                                (s = this.pendingBestScoreFlush),
                                (this.pendingBestScore = null),
                                (this.pendingBestScoreFlush = !1),
                                !(
                                  null === a ||
                                  (null !== this.storedBestScore &&
                                    a <= this.storedBestScore)
                                ) && this.player)
                              ) {
                                e.next = 6;
                                break;
                              }
                              return e.abrupt("return");
                            case 6:
                              return (
                                (this.playerData = r(
                                  {},
                                  this.playerData,
                                  (((t = {}).blocksWebBestScore = a), t)
                                )),
                                (e.next = 9),
                                this.player.setData(this.playerData, s)
                              );
                            case 9:
                              this.storedBestScore = a;
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              (a.loadSdkScript = (function () {
                var e = t(
                  n().mark(function e() {
                    var t;
                    return n().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!(t = window).YaGames) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return", t.YaGames);
                          case 3:
                            return (
                              (e.next = 5),
                              new Promise(function (e, t) {
                                var n = document.querySelector(
                                  "script[data-yandex-games-sdk]"
                                );
                                if (n)
                                  return (
                                    n.addEventListener(
                                      "load",
                                      function () {
                                        return e();
                                      },
                                      { once: !0 }
                                    ),
                                    void n.addEventListener(
                                      "error",
                                      function () {
                                        return t(
                                          new Error(
                                            "Yandex Games SDK failed to load"
                                          )
                                        );
                                      },
                                      { once: !0 }
                                    )
                                  );
                                var r = document.createElement("script");
                                (r.src = "/sdk.js"),
                                  (r.async = !0),
                                  (r.dataset.yandexGamesSdk = "true"),
                                  r.addEventListener(
                                    "load",
                                    function () {
                                      return e();
                                    },
                                    { once: !0 }
                                  ),
                                  r.addEventListener(
                                    "error",
                                    function () {
                                      return t(
                                        new Error(
                                          "Yandex Games SDK failed to load"
                                        )
                                      );
                                    },
                                    { once: !0 }
                                  ),
                                  document.head.appendChild(r);
                              })
                            );
                          case 5:
                            if (t.YaGames) {
                              e.next = 7;
                              break;
                            }
                            throw new Error(
                              "Yandex Games SDK loaded without YaGames"
                            );
                          case 7:
                            return e.abrupt("return", t.YaGames);
                          case 8:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              e
            );
          })()
        );
        a._RF.pop();
      },
    };
  }
);

(function (r) {
  r("virtual:///prerequisite-imports/main", "chunks:///_virtual/main");
})(function (mid, cid) {
  System.register(mid, [cid], function (_export, _context) {
    return {
      setters: [
        function (_m) {
          var _exportObj = {};

          for (var _key in _m) {
            if (_key !== "default" && _key !== "__esModule")
              _exportObj[_key] = _m[_key];
          }

          _export(_exportObj);
        },
      ],
      execute: function () {},
    };
  });
});
