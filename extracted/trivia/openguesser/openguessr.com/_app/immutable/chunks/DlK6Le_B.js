import {
  At as e,
  G as t,
  J as n,
  M as r,
  N as i,
  Nt as a,
  Pt as o,
  Q as s,
  St as c,
  Vt as l,
  W as u,
  X as d,
  g as f,
  l as ee,
  m as p,
  mt as m,
  o as h,
  p as g,
  s as _,
  st as v,
  u as te,
  xt as y,
  yt as b,
} from "./hxBKRHPW.js";
import "./NtBOrSfa.js";
import "./xihTtKlq.js";
import { Lt as x, ii as ne } from "./aEOu6wZT.js";
import { F as S, _ as C, p as w, z as T } from "./DbFYFRnT.js";
import { n as E } from "./D59G5ZZe.js";
import { t as D } from "./CgsPAJIO.js";
var O = {
  name: `medal`,
  size: 24,
  node: [
    [
      `path`,
      {
        d: `M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15`,
      },
    ],
    [`path`, { d: `M11 12 5.12 2.2` }],
    [`path`, { d: `m13 12 5.88-9.8` }],
    [`path`, { d: `M8 7h8` }],
    [`circle`, { cx: `12`, cy: `17`, r: `5` }],
    [`path`, { d: `M12 18v-2h-.5` }],
  ],
};
O.node;
var k = new Set([`$$slots`, `$$events`, `$$legacy`]);
function A(e, t) {
  let n = h(t, k);
  S(
    e,
    _(() => n, {
      get icon() {
        return O;
      },
    })
  );
}
var j = {
  name: `rotate-ccw-clock`,
  size: 24,
  node: [
    [`path`, { d: `M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8` }],
    [`path`, { d: `M3 3v5h5` }],
    [`path`, { d: `M12 7v5l4 2` }],
  ],
  aliases: [`history`],
};
j.node;
var M = new Set([`$$slots`, `$$events`, `$$legacy`]);
function re(e, t) {
  let n = h(t, M);
  S(
    e,
    _(() => n, {
      get icon() {
        return j;
      },
    })
  );
}
var N = {
  name: `triangle-exclamation-point`,
  size: 24,
  node: [
    [
      `path`,
      {
        d: `m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,
      },
    ],
    [`path`, { d: `M12 9v4` }],
    [`path`, { d: `M12 17h.01` }],
  ],
  aliases: [`alert-triangle`, `triangle-alert`],
};
N.node;
var ie = new Set([`$$slots`, `$$events`, `$$legacy`]);
function ae(e, t) {
  let n = h(t, ie);
  S(
    e,
    _(() => n, {
      get icon() {
        return N;
      },
    })
  );
}
function P(e) {
  switch (e.kind) {
    case `message`:
      return `message:${e.conversationId}`;
    case `indicators`:
      return `indicators:${e.conversationId}`;
    case `conversation`:
      return `conversation`;
    case `invite`:
      return `invite`;
    case `participantActivity`:
      return `participantActivity`;
  }
}
var F = class {
    dispatch;
    participantId;
    getAuthData;
    nextRequestId = 1;
    pending = new Map();
    scopeHandlers = new Map();
    handlerScope = new Map();
    constructor(e, t, n) {
      (this.dispatch = e), (this.participantId = t), (this.getAuthData = n);
    }
    dispose() {
      for (let { reject: e } of this.pending.values())
        e(Error(`Client disposed`));
      this.pending.clear();
      let e = [...this.scopeHandlers.keys()];
      e.length > 0 &&
        this.sendEnvelope({ type: `unsubscribe`, scope: e }).catch(() => {}),
        this.scopeHandlers.clear(),
        this.handlerScope.clear();
    }
    receive(e) {
      if (!e || typeof e != `object`) return;
      let t = e;
      if (t.type === `response`) {
        let e = this.pending.get(t.requestId);
        if (!e) return;
        this.pending.delete(t.requestId),
          t.ok
            ? e.resolve(t.data)
            : e.reject(Error(t.error ?? `Request failed`));
      } else if (t.type === `events`)
        for (let e of t.events) {
          let t = this.scopeHandlers.get(e.scope);
          if (t)
            for (let n of t)
              try {
                n(e.data);
              } catch {}
        }
    }
    async sendEnvelope(e) {
      let t = await this.getAuthData();
      await this.dispatch({
        ...e,
        participantId: this.participantId,
        authData: t,
      });
    }
    async request(e, t) {
      let n = String(this.nextRequestId++),
        r = new Promise((e, t) => {
          this.pending.set(n, { resolve: e, reject: t });
        });
      try {
        await this.sendEnvelope({
          type: `request`,
          requestId: n,
          method: e,
          args: t,
        });
      } catch (e) {
        throw (this.pending.delete(n), e);
      }
      return r;
    }
    async subscribe(e, t) {
      if (this.attachHandler(e, t))
        try {
          await this.sendEnvelope({ type: `subscribe`, scope: e });
        } catch (e) {
          throw (this.detachHandler(t), e);
        }
    }
    async unsubscribe(e) {
      let t = this.detachHandler(e);
      if (t !== null)
        try {
          await this.sendEnvelope({ type: `unsubscribe`, scope: t });
        } catch (n) {
          throw (this.attachHandler(t, e), n);
        }
    }
    attachHandler(e, t) {
      let n = this.scopeHandlers.get(e),
        r = !n;
      return (
        n || ((n = new Set()), this.scopeHandlers.set(e, n)),
        !n.has(t) && (n.add(t), this.handlerScope.set(t, e), r)
      );
    }
    detachHandler(e) {
      let t = this.handlerScope.get(e);
      if (!t) return null;
      this.handlerScope.delete(e);
      let n = this.scopeHandlers.get(t);
      return !n || (n.delete(e), n.size > 0)
        ? null
        : (this.scopeHandlers.delete(t), t);
    }
    createConversation(e) {
      return this.request(`createConversation`, e === void 0 ? [] : [e]);
    }
    createInvite(e, t) {
      return this.request(`createInvite`, [e, t]);
    }
    revokeInvite(e, t) {
      return this.request(`revokeInvite`, [e, t]);
    }
    acceptInvite(e) {
      return this.request(`acceptInvite`, [e]);
    }
    declineInvite(e) {
      return this.request(`declineInvite`, [e]);
    }
    leaveConversation(e) {
      return this.request(`leaveConversation`, [e]);
    }
    setIndicator(e) {
      return this.request(`setIndicator`, [e]);
    }
    removeIndicator(e) {
      return this.request(`removeIndicator`, [e]);
    }
    sendMessage(e, t, n) {
      return this.request(`sendMessage`, [e, t, n]);
    }
    editMessage(e, t) {
      return this.request(`editMessage`, [e, t]);
    }
    deleteMessage(e) {
      return this.request(`deleteMessage`, [e]);
    }
    addReaction(e, t) {
      return this.request(`addReaction`, [e, t]);
    }
    removeReaction(e) {
      return this.request(`removeReaction`, [e]);
    }
    getConversations() {
      return this.request(`getConversations`, []);
    }
    getMessages(e, t, n, r) {
      return this.request(`getMessages`, [e, t, n, r]);
    }
    getMessagesByIds(e) {
      return this.request(`getMessagesByIds`, [e]);
    }
    getInvites() {
      return this.request(`getInvites`, []);
    }
    getAliases(e) {
      return this.request(`getAliases`, [e]);
    }
    getParticipantActivities() {
      return this.request(`getParticipantActivities`, []);
    }
    getHasNew() {
      return this.request(`getHasNew`, []);
    }
    onMessage(e, t) {
      return this.subscribe(P({ kind: `message`, conversationId: e }), t);
    }
    offMessage(e) {
      return this.unsubscribe(e);
    }
    onIndicators(e, t) {
      return this.subscribe(P({ kind: `indicators`, conversationId: e }), t);
    }
    offIndicators(e) {
      return this.unsubscribe(e);
    }
    onConversation(e) {
      return this.subscribe(P({ kind: `conversation` }), e);
    }
    offConversation(e) {
      return this.unsubscribe(e);
    }
    onInvite(e) {
      return this.subscribe(P({ kind: `invite` }), e);
    }
    offInvite(e) {
      return this.unsubscribe(e);
    }
    onParticipantActivity(e) {
      return this.subscribe(P({ kind: `participantActivity` }), e);
    }
    offParticipantActivity(e) {
      return this.unsubscribe(e);
    }
    async onMany(e) {
      let t = [],
        n = [];
      for (let r of e) {
        let e =
          r.kind === `message` || r.kind === `indicators`
            ? P({ kind: r.kind, conversationId: r.conversationId })
            : P({ kind: r.kind });
        for (let i of r.handlers) {
          let r = this.scopeHandlers.get(e)?.has(i) ?? !1;
          this.attachHandler(e, i) && !t.includes(e) && t.push(e),
            r || n.push(i);
        }
      }
      if (t.length !== 0)
        try {
          await this.sendEnvelope({ type: `subscribe`, scope: t });
        } catch (e) {
          for (let e of n) this.detachHandler(e);
          throw e;
        }
    }
    async offMany(e) {
      let t = [],
        n = [];
      for (let r of e) {
        let e = this.handlerScope.get(r),
          i = this.detachHandler(r);
        e !== void 0 && n.push({ scope: e, handler: r }),
          i !== null && t.push(i);
      }
      if (t.length !== 0)
        try {
          await this.sendEnvelope({ type: `unsubscribe`, scope: t });
        } catch (e) {
          for (let { scope: e, handler: t } of n) this.attachHandler(e, t);
          throw e;
        }
    }
  },
  I = f(),
  L = f([]),
  R = f([]),
  z = f([]),
  B = f(!1),
  V = f(null),
  oe = g([L, z, R, B, V], ([e, t, n, r, i]) => {
    if (!r) return i;
    let a = localStorage.getItem(`id`),
      o = n.some((e) => e.toParticipantId === a && !e.seen);
    return (
      e.some((e) => {
        let n = e.lastMessage;
        if (!n) return !1;
        let r = t.find((t) => t.conversationId === e.conversationId);
        return (
          !r || new Date(n.createdAt) > new Date(r.lastReadMessageCreatedAt)
        );
      }) || o
    );
  }),
  H = f(null),
  U = new T();
async function W(e) {
  await fetch(p(E) + `/headless-chat/receive`, {
    method: `POST`,
    headers: { "Content-Type": `application/json` },
    body: JSON.stringify(e),
  });
}
var G = () => localStorage.getItem(`bearer`);
async function K() {
  let e = localStorage.getItem(`id`);
  if (!e)
    return console.warn(
      `Tried to init headless chat client with invalid user ID!`
    );
  try {
    let t = p(I);
    t || ((t = new F(W, e, G)), I.set(t)),
      await t.onMany([
        { kind: `conversation`, handlers: [ue] },
        { kind: `invite`, handlers: [de] },
        { kind: `participantActivity`, handlers: [fe] },
      ]);
  } catch (e) {
    C(
      `Headless-chat init failed`,
      `Failed to initialize headless-chat and subscribe to events.`,
      e.message
    );
  }
}
function se() {
  p(I)?.dispose(),
    I.set(null),
    L.set([]),
    R.set([]),
    z.set([]),
    H.set(null),
    U.clear(),
    J.clear(),
    B.set(!1),
    V.set(null);
}
async function ce() {
  let e = p(I);
  if (e && !p(B) && p(V) === null)
    try {
      V.set(!1);
      let t = await e.getHasNew();
      V.set(t.hasNewMessages || t.hasNewInvites);
    } catch (e) {
      V.set(null),
        console.error(`Failed to get hasNew state from headless-chat:`, e);
    }
}
var q = null;
async function le() {
  if (p(B)) return;
  if (q) return q;
  let e = p(I);
  return e
    ? ((q = (async () => {
        try {
          let [t, n, r] = await Promise.all([
            e.getConversations(),
            e.getParticipantActivities(),
            e.getInvites(),
          ]);
          L.set(t), z.set(n), R.set(r), B.set(!0);
        } catch (e) {
          C(
            `Failed to load messages`,
            `An error occurred trying to load conversations, participant activities and invites.`,
            e.message
          );
        } finally {
          q = null;
        }
      })()),
      q)
    : C(
        `Failed to laod conversations`,
        `Headless-chat client instance is not defined.`
      );
}
var J = new Map();
async function ue({ conversationId: e, data: t }) {
  if (t == null) {
    L.update((t) => t.filter((t) => t.conversationId !== e)),
      p(H) === e && H.set(null);
    return;
  }
  L.update((n) => {
    let r = [t, ...n.filter((t) => t.conversationId !== e)];
    return (
      r.sort((e, t) => new Date(t.lastActivityAt) - new Date(e.lastActivityAt)),
      r
    );
  });
  let n = t.lastMessage;
  if (
    !n ||
    n.deleted ||
    n.systemEvent ||
    n.participantId === localStorage.getItem(`id`) ||
    p(x) ||
    J.has(n.messageId)
  )
    return;
  J.set(n.messageId, !0), J.size > 200 && J.delete(J.keys().next().value);
  let r = await Z(n.participantId),
    i = n.message.length > 10 ? n.message.slice(0, 10) + `…` : n.message;
  w(
    `Message "${i}" from %s.`,
    () => {
      H.set(e), x.set(!0);
    },
    null,
    !0,
    r,
    () => D(n.participantId)
  );
}
async function de({ conversationId: e, toParticipantId: t, data: n }) {
  if (n == null) {
    R.update((n) =>
      n.filter(
        (n) => n.conversation.conversationId !== e || n.toParticipantId !== t
      )
    );
    return;
  }
  R.update((e) => [n, ...e]);
  let r = localStorage.getItem(`id`);
  if (n.fromParticipantId === r) return;
  let i = await Z(n.fromParticipantId);
  w(
    `Conversation invite from %s.`,
    async () => {
      try {
        await p(I).acceptInvite(n.conversation.conversationId),
          H.set(n.conversation.conversationId),
          x.set(!0);
      } catch (e) {
        C(
          `Failed to accept invite`,
          `An error occurred trying to accept an invite.`,
          `From headless-chat: ` + e.message
        );
      }
    },
    async () => {
      try {
        await p(I).declineInvite(n.conversation.conversationId);
      } catch (e) {
        C(
          `Failed to decline invite`,
          `An error occurred trying to decline a conversation invite.`,
          `From headless-chat: ` + e.message
        );
      }
    },
    !1,
    i,
    () => D(n.fromParticipantId)
  );
}
function fe({ conversationId: e, data: t }) {
  t == null
    ? z.update((t) => t.filter((t) => t.conversationId !== e))
    : z.update((e) => {
        let n = e.findIndex(
          (e) =>
            e.conversationId === t.conversationId &&
            e.participantId === t.participantId
        );
        return n === -1 ? [...e, t] : e.with(n, t);
      });
}
var Y = new Map();
async function X(e) {
  let t = e.filter((e) => !U.has(e) && !Y.has(e));
  if (!t.length) return;
  let n = (async () => {
    try {
      let e = await p(I).getAliases(t);
      for (let n of t) {
        let t = e?.find((e) => e.participantId === n);
        U.set(n, t?.alias || `Unknown`);
      }
    } catch (e) {
      console.error(`Error fetching aliases:`, e);
      for (let e of t) U.set(e, `Unknown`);
    } finally {
      for (let e of t) Y.delete(e);
    }
  })();
  for (let e of t) Y.set(e, n);
  await n;
}
async function Z(e) {
  return e === `server`
    ? `System`
    : U.has(e)
    ? U.get(e)
    : (await (Y.get(e) ?? X([e])), U.get(e) ?? `Unknown`);
}
async function pe(e) {
  try {
    let t = await fetch(p(E) + `/headless-chat/conversation-with-user`, {
      method: `POST`,
      headers: {
        "Content-Type": `application/json`,
        Authorization: `Bearer ` + localStorage.getItem(`bearer`),
      },
      body: JSON.stringify({
        id: localStorage.getItem(`id`),
        targetParticipantId: e,
      }),
    });
    if (!t.ok) {
      let e = await t.json().catch(() => ({}));
      throw Error(e.error || t.status);
    }
    let { conversationId: n } = await t.json();
    H.set(n), x.set(!0);
  } catch (e) {
    C(
      `Failed to start conversation`,
      `An error occurred trying to open a conversation with this user.`,
      e.message
    );
  }
}
var me = f(),
  he = f(null),
  ge = s(
    `<div class="division-marker svelte-18ryhmt"><div><span class="division-text svelte-18ryhmt"> </span></div></div>`
  ),
  _e = s(
    `<div class="progress-container svelte-18ryhmt"><div class="progress-bar-wrapper svelte-18ryhmt"><div class="progress-bar bright-soft svelte-18ryhmt"><div class="progress-bar-fill svelte-18ryhmt"></div></div> <!> <div class="elo-indicator svelte-18ryhmt"><div class="elo-line svelte-18ryhmt"></div> <div class="elo-value svelte-18ryhmt"> </div></div></div></div>`
  );
function ve(s, f) {
  o(f, !0);
  let p = () => te(ne, `$elo`, h),
    [h, g] = ee(),
    _ = e(() => {
      let e = p();
      return e <= 1e3
        ? 0
        : e <= 1200
        ? (e - 1e3) * (25 / 200)
        : e <= 1400
        ? 25 + (e - 1200) * (25 / 200)
        : e <= 1600
        ? 50 + (e - 1400) * (25 / 200)
        : e <= 2e3
        ? 75 + (e - 1600) * (25 / 400)
        : 100;
    });
  function x(e) {
    return e < 1200 ? 4 : e < 1400 ? 3 : e < 1600 ? 2 : +(e < 2e3);
  }
  let S = e(() => x(p())),
    C = [`I`, `II`, `III`, `IV`, `V`].reverse(),
    w = [0, 25, 50, 75, 100];
  var T = _e(),
    E = b(T),
    D = b(E),
    O = y(D),
    k = c(D, 2);
  u(
    k,
    17,
    () => C,
    t,
    (e, t, a) => {
      var o = ge(),
        s = b(o);
      let c;
      var u = b(s),
        f = y(u, !0);
      l(s),
        l(o),
        m(() => {
          r(o, `left: ${w[a] ?? ``}%`),
            (c = i(
              s,
              1,
              `division-circle content-shadow svelte-18ryhmt`,
              null,
              c,
              { "active-division": 4 - a === v(S) }
            )),
            n(f, v(t));
        }),
        d(e, o);
    }
  );
  var A = c(k, 2),
    j = c(b(A), 2),
    M = y(j);
  l(A),
    l(E),
    l(T),
    m(
      (e) => {
        r(O, `width: ${v(_) ?? ``}%`),
          r(A, `left: ${v(_) ?? ``}%`),
          n(M, `${e ?? ``} Elo`);
      },
      [() => Math.round(p())?.toLocaleString()]
    ),
    d(s, T),
    a(),
    g();
}
var Q = f(),
  $ = f({}),
  ye = g([$, Q], ([e, t], n) => {
    let r = t?.filter((t) => t.id === e);
    n(r?.[0]);
  }),
  be = f(0);
async function xe() {
  try {
    let e = await fetch(
      `${p(E)}/tournaments/all-tournaments${
        localStorage.getItem(`id`)
          ? `?user-id=` + localStorage.getItem(`id`)
          : ``
      }`
    );
    if (e.ok) {
      let t = await e.json();
      Q.set(t);
    } else throw Error(e.status);
  } catch (e) {
    return console.error(`Error fetching tournaments:`, e), e.message;
  }
}
export {
  ae as C,
  z as S,
  A as T,
  U as _,
  be as a,
  I as b,
  me as c,
  le as d,
  K as f,
  H as g,
  pe as h,
  Q as i,
  se as l,
  ce as m,
  ye as n,
  ve as o,
  X as p,
  $ as r,
  he as s,
  xe as t,
  Z as u,
  L as v,
  re as w,
  R as x,
  oe as y,
};
