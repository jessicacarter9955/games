import { m as e } from "./hxBKRHPW.js";
import {
  Mn as t,
  Pn as n,
  Sr as r,
  jt as i,
  oi as a,
  tr as o,
} from "./aEOu6wZT.js";
import { _ as s, p as c } from "./DbFYFRnT.js";
import "./NtBOrSfa.js";
import { n as l } from "./D59G5ZZe.js";
async function u() {
  try {
    let n = {
        id: localStorage.getItem(`id`),
        recipientId: localStorage.getItem(`id`),
      },
      r = await fetch(e(l) + `/friends/requests`, {
        method: `POST`,
        headers: {
          Authorization: `Bearer ` + localStorage.getItem(`bearer`),
          "Content-Type": `application/json`,
        },
        body: JSON.stringify(n),
      });
    if (r.ok) {
      let e = await r.json();
      t.set(e?.requests);
    } else {
      let e = { error: r.status };
      try {
        e = await r.json();
      } catch {}
      console.error(`Error loading inbox: ` + r.status),
        s(
          `Error fetching inbox`,
          `An error occurred fetching the friend inbox.`,
          e.error
        );
    }
  } catch (e) {
    console.error(`Fetch/Network error occurred while loading inbox: `, e),
      s(
        `Error fetching inbox (Network)`,
        `An error occurred fetching the friend inbox.`,
        e.message
      );
  }
}
async function d() {
  try {
    let t = await fetch(e(l) + `/friends/sent-requests`, {
      method: `PUT`,
      headers: {
        Authorization: `Bearer ` + localStorage.getItem(`bearer`),
        "Content-Type": `application/json`,
      },
      body: JSON.stringify({ id: localStorage.getItem(`id`) }),
    });
    if (t.ok) {
      let e = await t.json();
      n.set(e?.sentRequests);
    } else {
      let e = { error: t.status };
      try {
        e = await t.json();
      } catch {}
      console.error(`Error loading outbox: ` + t.status),
        s(
          `Error fetching outbox`,
          `An error occurred fetching the friend outbox.`,
          e.error
        );
    }
  } catch (e) {
    console.error(`Fetch/Network error occurred while loading outbox: `, e),
      s(
        `Error fetching outbox (Network)`,
        `An error occurred fetching the friend outbox.`,
        e.message
      );
  }
}
async function f(t) {
  try {
    let r = await fetch(e(l) + `/friends/revoke-request`, {
      method: `DELETE`,
      headers: {
        Authorization: `Bearer ` + localStorage.getItem(`bearer`),
        "Content-Type": `application/json`,
      },
      body: JSON.stringify({ id: localStorage.getItem(`id`), recipientId: t }),
    });
    if (r.ok) n.set(e(n).filter((e) => e.id !== t));
    else {
      let e = { error: r.status };
      try {
        e = await r.json();
      } catch {}
      console.error(`Error revoking friend request: ` + r.status),
        s(
          `Error revoking request`,
          `An error occurred revoking a friend request.`,
          e.error
        );
    }
  } catch (e) {
    console.error(
      `Fetch/Network error occurred while revoking friend request: `,
      e
    ),
      s(
        `Error revoking request (Network)`,
        `An error occurred revoking a friend request.`,
        e.message
      );
  }
}
async function p(t) {
  try {
    let n = {
        id: localStorage.getItem(`id`),
        senderId: t,
        recipientId: localStorage.getItem(`id`),
      },
      r = await fetch(e(l) + `/friends/accept`, {
        method: `POST`,
        headers: {
          Authorization: `Bearer ` + localStorage.getItem(`bearer`),
          "Content-Type": `application/json`,
        },
        body: JSON.stringify(n),
      });
    if (r.ok) e(i) && u(), h();
    else {
      let e = { error: r.status };
      try {
        e = await r.json();
      } catch {}
      console.error(
        `Error accepting / deleting the friend request: ` + r.status
      ),
        s(
          `Error accepting / deletingfriend request`,
          `The server returned an error for your action.`,
          e.error
        );
    }
  } catch (e) {
    console.error(
      `Error occurred while sending the friend request (Network):`,
      e
    ),
      s(
        `Network error accepting / deleting friend request`,
        `The friend request couldn't be accepted or deleted.`,
        e.message
      );
  }
}
async function m(t) {
  try {
    let n = {
        id: localStorage.getItem(`id`),
        senderId: t,
        recipientId: localStorage.getItem(`id`),
      },
      r = await fetch(e(l) + `/friends/decline`, {
        method: `POST`,
        headers: {
          Authorization: `Bearer ` + localStorage.getItem(`bearer`),
          "Content-Type": `application/json`,
        },
        body: JSON.stringify(n),
      });
    if (r.ok) e(i) && u();
    else {
      let e = { error: r.status };
      try {
        e = await r.json();
      } catch {}
      console.error(
        `Error accepting / deleting the friend request: ` + r.status
      ),
        s(
          `Error accepting / deletingfriend request`,
          `The server returned an error for your action.`,
          e.error
        );
    }
  } catch (e) {
    console.error(`Error occurred while sending the friend request:`, e),
      s(
        `Error accepting / deleting friend request (Network)`,
        `The friend request couldn't be accepted or deleted.`,
        e.message
      );
  }
}
async function h() {
  if (e(a))
    try {
      let t = { id: localStorage.getItem(`id`) },
        n = await fetch(e(l) + `/friends/friends`, {
          method: `POST`,
          headers: {
            Authorization: `Bearer ` + localStorage.getItem(`bearer`),
            "Content-Type": `application/json`,
          },
          body: JSON.stringify(t),
        });
      if (n.ok) {
        let t = await n.json();
        o.set(t.friends), e(o)?.length == 0 && o.set(void 0);
      } else console.error(`Error loading friends: ` + n.status);
    } catch (e) {
      console.error(`Error occurred while loading friends (Network): `, e);
    }
}
async function g(t) {
  try {
    let n = { id: localStorage.getItem(`id`), friendId: t },
      r = await fetch(e(l) + `/friends/remove`, {
        method: `POST`,
        headers: {
          Authorization: `Bearer ` + localStorage.getItem(`bearer`),
          "Content-Type": `application/json`,
        },
        body: JSON.stringify(n),
      });
    if (r.ok) h();
    else {
      let e = { error: r.status };
      try {
        e = await r.json();
      } catch {}
      console.error(`Error removing friend: ` + r.status),
        s(
          `Error removing friend`,
          `The server returned an error for your action.`,
          e.error
        );
    }
  } catch (e) {
    console.error(`Fetch/Network error occurred while removing friend:`, e),
      s(
        `Error removing friend (Network)`,
        `The friend request couldn't be accepted or deleted.`,
        e.message
      );
  }
}
async function _(t) {
  try {
    let n = { id: localStorage.getItem(`id`), friend_id: t, roomcode: e(r) },
      i = await fetch(e(l) + `/friends/send-invite`, {
        method: `POST`,
        headers: {
          Authorization: `Bearer ` + localStorage.getItem(`bearer`),
          "Content-Type": `application/json`,
        },
        body: JSON.stringify(n),
      });
    if (i.ok) c(`Invite sent.`);
    else {
      let e = { error: i.status };
      try {
        e = await i.json();
      } catch {}
      console.error(`Error sending invite: ` + e.error),
        c(`User is not reachable.`);
    }
  } catch (e) {
    console.error(`Error occurred while sending invite (Network):`, e),
      s(
        `Error sending invite (Network)`,
        `The invite couldn't be sent due to a network problem.`,
        e.message
      );
  }
}
async function v(t) {
  try {
    let n = { id: localStorage.getItem(`id`), friend_id: t },
      r = await fetch(e(l) + `/friends/accept-invite`, {
        method: `POST`,
        headers: {
          Authorization: `Bearer ` + localStorage.getItem(`bearer`),
          "Content-Type": `application/json`,
        },
        body: JSON.stringify(n),
      });
    if (!r.ok) {
      let e = { error: r.status };
      try {
        e = await r.json();
      } catch {}
      console.error(`Error accepting invite: ` + r.status),
        s(
          `Error accepting invite`,
          `The server returned an error for your action.`,
          e.error
        );
    }
  } catch (e) {
    console.error(`Fetch/Network error occurred while accepting invite: `, e),
      s(
        `Network error accepting invite`,
        `The invite couldn't be sent / accepted / declined.`,
        e.message
      );
  }
}
async function y(t) {
  try {
    let n = { id: localStorage.getItem(`id`), friend_id: t },
      r = await fetch(e(l) + `/friends/decline-invite`, {
        method: `POST`,
        headers: {
          Authorization: `Bearer ` + localStorage.getItem(`bearer`),
          "Content-Type": `application/json`,
        },
        body: JSON.stringify(n),
      });
    if (!r.ok) {
      let e = { error: r.status };
      try {
        e = await r.json();
      } catch {}
      console.error(`Error declining invite: ` + r.status),
        s(
          `Error declining invite`,
          `The server returned an error for your action.`,
          e.error
        );
    }
  } catch (e) {
    console.error(`Fetch/Network error occurred while declining invite: `, e),
      s(
        `Network error declining invite`,
        `The invite couldn't be sent / accepted / declined.`,
        e.message
      );
  }
}
export {
  h as a,
  g as c,
  y as i,
  f as l,
  v as n,
  u as o,
  m as r,
  d as s,
  p as t,
  _ as u,
};
