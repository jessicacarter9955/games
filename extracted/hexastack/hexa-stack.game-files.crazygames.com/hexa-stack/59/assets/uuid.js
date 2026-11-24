const d = [];
for (let n = 0; n < 256; ++n) d.push((n + 256).toString(16).slice(1));
function I(n, i = 0) {
  return (
    d[n[i + 0]] +
    d[n[i + 1]] +
    d[n[i + 2]] +
    d[n[i + 3]] +
    "-" +
    d[n[i + 4]] +
    d[n[i + 5]] +
    "-" +
    d[n[i + 6]] +
    d[n[i + 7]] +
    "-" +
    d[n[i + 8]] +
    d[n[i + 9]] +
    "-" +
    d[n[i + 10]] +
    d[n[i + 11]] +
    d[n[i + 12]] +
    d[n[i + 13]] +
    d[n[i + 14]] +
    d[n[i + 15]]
  ).toLowerCase();
}
let p;
const E = new Uint8Array(16);
function S() {
  if (!p) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
      );
    p = crypto.getRandomValues.bind(crypto);
  }
  return p(E);
}
const r = {};
function z(n, i, y) {
  let c;
  {
    const e = Date.now(),
      x = S();
    A(r, e, x), (c = q(x, r.msecs, r.nsecs, r.clockseq, r.node, i, y));
  }
  return i ?? I(c);
}
function A(n, i, y) {
  return (
    (n.msecs ??= -1 / 0),
    (n.nsecs ??= 0),
    i === n.msecs
      ? (n.nsecs++, n.nsecs >= 1e4 && ((n.node = void 0), (n.nsecs = 0)))
      : i > n.msecs
      ? (n.nsecs = 0)
      : i < n.msecs && (n.node = void 0),
    n.node ||
      ((n.node = y.slice(10, 16)),
      (n.node[0] |= 1),
      (n.clockseq = ((y[8] << 8) | y[9]) & 16383)),
    (n.msecs = i),
    n
  );
}
function q(n, i, y, c, e, x, l = 0) {
  if (n.length < 16) throw new Error("Random bytes length must be >= 16");
  if (!x) (x = new Uint8Array(16)), (l = 0);
  else if (l < 0 || l + 16 > x.length)
    throw new RangeError(
      `UUID byte range ${l}:${l + 15} is out of buffer bounds`
    );
  (i ??= Date.now()),
    (y ??= 0),
    (c ??= ((n[8] << 8) | n[9]) & 16383),
    (e ??= n.slice(10, 16)),
    (i += 122192928e5);
  const h = ((i & 268435455) * 1e4 + y) % 4294967296;
  (x[l++] = (h >>> 24) & 255),
    (x[l++] = (h >>> 16) & 255),
    (x[l++] = (h >>> 8) & 255),
    (x[l++] = h & 255);
  const m = ((i / 4294967296) * 1e4) & 268435455;
  (x[l++] = (m >>> 8) & 255),
    (x[l++] = m & 255),
    (x[l++] = ((m >>> 24) & 15) | 16),
    (x[l++] = (m >>> 16) & 255),
    (x[l++] = (c >>> 8) | 128),
    (x[l++] = c & 255);
  for (let w = 0; w < 6; ++w) x[l++] = e[w];
  return x;
}
const t =
    typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  D = { randomUUID: t };
function F(n, i, y) {
  if (D.randomUUID && !n) return D.randomUUID();
  n = n || {};
  const c = n.random ?? n.rng?.() ?? S();
  if (c.length < 16) throw new Error("Random bytes length must be >= 16");
  return (c[6] = (c[6] & 15) | 64), (c[8] = (c[8] & 63) | 128), I(c);
}
const g = [];
for (let n = 0; n < 256; ++n) g.push((n + 256).toString(16).slice(1));
function B(n, i = 0) {
  return (
    g[n[i + 0]] +
    g[n[i + 1]] +
    g[n[i + 2]] +
    g[n[i + 3]] +
    "-" +
    g[n[i + 4]] +
    g[n[i + 5]] +
    "-" +
    g[n[i + 6]] +
    g[n[i + 7]] +
    "-" +
    g[n[i + 8]] +
    g[n[i + 9]] +
    "-" +
    g[n[i + 10]] +
    g[n[i + 11]] +
    g[n[i + 12]] +
    g[n[i + 13]] +
    g[n[i + 14]] +
    g[n[i + 15]]
  ).toLowerCase();
}
const C = new Uint8Array(16);
function R() {
  return crypto.getRandomValues(C);
}
const $ = {};
function G(n, i, y) {
  let c;
  if (n) c = v(n.random ?? n.rng?.() ?? R(), n.msecs, n.seq, i, y);
  else {
    const e = Date.now(),
      x = R();
    H($, e, x), (c = v(x, $.msecs, $.seq, i, y));
  }
  return B(c);
}
function H(n, i, y) {
  return (
    (n.msecs ??= -1 / 0),
    (n.seq ??= 0),
    i > n.msecs
      ? ((n.seq = V(y)), (n.msecs = i))
      : ((n.seq = (n.seq + 1) | 0), n.seq === 0 && n.msecs++),
    n
  );
}
function v(n, i, y, c, e = 0) {
  if (n.length < 16) throw new Error("Random bytes length must be >= 16");
  if (!c) (c = new Uint8Array(16)), (e = 0);
  else if (e < 0 || e + 16 > c.length)
    throw new RangeError(
      `UUID byte range ${e}:${e + 15} is out of buffer bounds`
    );
  return (
    (i ??= Date.now()),
    (y ??= V(n)),
    (c[e++] = (i / 1099511627776) & 255),
    (c[e++] = (i / 4294967296) & 255),
    (c[e++] = (i / 16777216) & 255),
    (c[e++] = (i / 65536) & 255),
    (c[e++] = (i / 256) & 255),
    (c[e++] = i & 255),
    (c[e++] = 112 | ((y >>> 28) & 15)),
    (c[e++] = (y >>> 20) & 255),
    (c[e++] = 128 | ((y >>> 14) & 63)),
    (c[e++] = (y >>> 6) & 255),
    (c[e++] = ((y << 2) & 255) | (n[10] & 3)),
    (c[e++] = n[11]),
    (c[e++] = n[12]),
    (c[e++] = n[13]),
    (c[e++] = n[14]),
    (c[e++] = n[15]),
    c
  );
}
function V(n) {
  return ((n[6] & 127) << 24) | (n[7] << 16) | (n[8] << 8) | n[9];
}
const u = [];
for (let n = 0; n < 256; ++n) u.push((n + 256).toString(16).slice(1));
function L(n, i = 0) {
  return (
    u[n[i + 0]] +
    u[n[i + 1]] +
    u[n[i + 2]] +
    u[n[i + 3]] +
    "-" +
    u[n[i + 4]] +
    u[n[i + 5]] +
    "-" +
    u[n[i + 6]] +
    u[n[i + 7]] +
    "-" +
    u[n[i + 8]] +
    u[n[i + 9]] +
    "-" +
    u[n[i + 10]] +
    u[n[i + 11]] +
    u[n[i + 12]] +
    u[n[i + 13]] +
    u[n[i + 14]] +
    u[n[i + 15]]
  ).toLowerCase();
}
const T = new Uint8Array(16);
function _() {
  return crypto.getRandomValues(T);
}
const o = {};
function J(n, i, y) {
  let c;
  {
    const e = Date.now(),
      x = _();
    j(o, e, x), (c = k(x, o.msecs, o.nsecs, o.clockseq, o.node, i, y));
  }
  return L(c);
}
function j(n, i, y) {
  return (
    (n.msecs ??= -1 / 0),
    (n.nsecs ??= 0),
    i === n.msecs
      ? (n.nsecs++, n.nsecs >= 1e4 && ((n.node = void 0), (n.nsecs = 0)))
      : i > n.msecs
      ? (n.nsecs = 0)
      : i < n.msecs && (n.node = void 0),
    n.node ||
      ((n.node = y.slice(10, 16)),
      (n.node[0] |= 1),
      (n.clockseq = ((y[8] << 8) | y[9]) & 16383)),
    (n.msecs = i),
    n
  );
}
function k(n, i, y, c, e, x, l = 0) {
  if (n.length < 16) throw new Error("Random bytes length must be >= 16");
  if (!x) (x = new Uint8Array(16)), (l = 0);
  else if (l < 0 || l + 16 > x.length)
    throw new RangeError(
      `UUID byte range ${l}:${l + 15} is out of buffer bounds`
    );
  (i ??= Date.now()),
    (y ??= 0),
    (c ??= ((n[8] << 8) | n[9]) & 16383),
    e == null && ((e = n.slice(10, 16)), (e[0] |= 1)),
    (i += 122192928e5);
  const h = (i & 268435455) * 1e4 + y,
    m = h >>> 0;
  (x[l++] = (m >>> 24) & 255),
    (x[l++] = (m >>> 16) & 255),
    (x[l++] = (m >>> 8) & 255),
    (x[l++] = m & 255);
  const w = (((i / 268435456) | 0) * 625 + ((h / 4294967296) | 0)) & 268435455;
  (x[l++] = (w >>> 8) & 255),
    (x[l++] = w & 255),
    (x[l++] = ((w >>> 24) & 15) | 16),
    (x[l++] = (w >>> 16) & 255),
    (x[l++] = (c >>> 8) | 128),
    (x[l++] = c & 255);
  for (let U = 0; U < 6; ++U) x[l++] = e[U];
  return x;
}
export { J as a, F as b, z as c, G as v };
