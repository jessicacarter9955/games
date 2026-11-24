import {
  $ as e,
  At as t,
  Bt as n,
  Ct as r,
  D as i,
  Dt as a,
  J as o,
  N as s,
  Nt as c,
  Ot as l,
  Pt as u,
  Q as d,
  St as f,
  Tt as p,
  Vt as m,
  W as h,
  X as g,
  a as _,
  b as v,
  bt as y,
  ht as b,
  it as x,
  mt as S,
  nt as C,
  o as w,
  q as T,
  r as E,
  rt as D,
  s as O,
  st as k,
  xt as A,
  yt as j,
} from "./hxBKRHPW.js";
import "./xihTtKlq.js";
import { f as ee } from "./aEOu6wZT.js";
import { F as te } from "./DbFYFRnT.js";
import { n as ne } from "./DniC0Gkz.js";
var re = {
  name: `pencil`,
  size: 24,
  node: [
    [
      `path`,
      {
        d: `M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z`,
      },
    ],
    [`path`, { d: `m15 5 4 4` }],
  ],
};
re.node;
var ie = new Set([`$$slots`, `$$events`, `$$legacy`]);
function M(e, t) {
  let n = w(t, ie);
  te(
    e,
    O(() => n, {
      get icon() {
        return re;
      },
    })
  );
}
var ae = {
  name: `trash`,
  size: 24,
  node: [
    [`path`, { d: `M10 11v6` }],
    [`path`, { d: `M14 11v6` }],
    [`path`, { d: `M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6` }],
    [`path`, { d: `M3 6h18` }],
    [`path`, { d: `M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2` }],
  ],
  aliases: [`trash-2`],
};
ae.node;
var oe = new Set([`$$slots`, `$$events`, `$$legacy`]);
function N(e, t) {
  let n = w(t, oe);
  te(
    e,
    O(() => n, {
      get icon() {
        return ae;
      },
    })
  );
}
function se(e, t) {
  return e == null || t == null
    ? NaN
    : e < t
    ? -1
    : e > t
    ? 1
    : e >= t
    ? 0
    : NaN;
}
function ce(e, t) {
  return e == null || t == null
    ? NaN
    : t < e
    ? -1
    : t > e
    ? 1
    : t >= e
    ? 0
    : NaN;
}
function le(e) {
  let t, n, r;
  e.length === 2
    ? ((t = e === se || e === ce ? e : ue), (n = e), (r = e))
    : ((t = se), (n = (t, n) => se(e(t), n)), (r = (t, n) => e(t) - n));
  function i(e, r, i = 0, a = e.length) {
    if (i < a) {
      if (t(r, r) !== 0) return a;
      do {
        let t = (i + a) >>> 1;
        n(e[t], r) < 0 ? (i = t + 1) : (a = t);
      } while (i < a);
    }
    return i;
  }
  function a(e, r, i = 0, a = e.length) {
    if (i < a) {
      if (t(r, r) !== 0) return a;
      do {
        let t = (i + a) >>> 1;
        n(e[t], r) <= 0 ? (i = t + 1) : (a = t);
      } while (i < a);
    }
    return i;
  }
  function o(e, t, n = 0, a = e.length) {
    let o = i(e, t, n, a - 1);
    return o > n && r(e[o - 1], t) > -r(e[o], t) ? o - 1 : o;
  }
  return { left: i, center: o, right: a };
}
function ue() {
  return 0;
}
function P(e) {
  return e === null ? NaN : +e;
}
var F = le(se);
F.right, F.left, le(P).center;
var I = class {
  constructor() {
    (this._partials = new Float64Array(32)), (this._n = 0);
  }
  add(e) {
    let t = this._partials,
      n = 0;
    for (let r = 0; r < this._n && r < 32; r++) {
      let i = t[r],
        a = e + i,
        o = Math.abs(e) < Math.abs(i) ? e - (a - i) : i - (a - e);
      o && (t[n++] = o), (e = a);
    }
    return (t[n] = e), (this._n = n + 1), this;
  }
  valueOf() {
    let e = this._partials,
      t = this._n,
      n,
      r,
      i,
      a = 0;
    if (t > 0) {
      for (
        a = e[--t];
        t > 0 && ((n = a), (r = e[--t]), (a = n + r), (i = r - (a - n)), !i);

      );
      t > 0 &&
        ((i < 0 && e[t - 1] < 0) || (i > 0 && e[t - 1] > 0)) &&
        ((r = i * 2), (n = a + r), r == n - a && (a = n));
    }
    return a;
  }
};
Array.prototype.slice;
function* de(e) {
  for (let t of e) yield* t;
}
function fe(e) {
  return Array.from(de(e));
}
var L = 1e-6,
  pe = 1e-12,
  R = Math.PI,
  z = R / 2,
  me = R / 4,
  B = R * 2,
  V = 180 / R,
  H = R / 180,
  U = Math.abs,
  he = Math.atan,
  ge = Math.atan2,
  W = Math.cos,
  _e = Math.exp,
  ve = Math.log,
  G = Math.sin,
  ye =
    Math.sign ||
    function (e) {
      return e > 0 ? 1 : e < 0 ? -1 : 0;
    },
  K = Math.sqrt,
  be = Math.tan;
function xe(e) {
  return e > 1 ? 0 : e < -1 ? R : Math.acos(e);
}
function q(e) {
  return e > 1 ? z : e < -1 ? -z : Math.asin(e);
}
function J() {}
function Y(e, t) {
  e && Ce.hasOwnProperty(e.type) && Ce[e.type](e, t);
}
var Se = {
    Feature: function (e, t) {
      Y(e.geometry, t);
    },
    FeatureCollection: function (e, t) {
      for (var n = e.features, r = -1, i = n.length; ++r < i; )
        Y(n[r].geometry, t);
    },
  },
  Ce = {
    Sphere: function (e, t) {
      t.sphere();
    },
    Point: function (e, t) {
      (e = e.coordinates), t.point(e[0], e[1], e[2]);
    },
    MultiPoint: function (e, t) {
      for (var n = e.coordinates, r = -1, i = n.length; ++r < i; )
        (e = n[r]), t.point(e[0], e[1], e[2]);
    },
    LineString: function (e, t) {
      we(e.coordinates, t, 0);
    },
    MultiLineString: function (e, t) {
      for (var n = e.coordinates, r = -1, i = n.length; ++r < i; )
        we(n[r], t, 0);
    },
    Polygon: function (e, t) {
      Te(e.coordinates, t);
    },
    MultiPolygon: function (e, t) {
      for (var n = e.coordinates, r = -1, i = n.length; ++r < i; ) Te(n[r], t);
    },
    GeometryCollection: function (e, t) {
      for (var n = e.geometries, r = -1, i = n.length; ++r < i; ) Y(n[r], t);
    },
  };
function we(e, t, n) {
  var r = -1,
    i = e.length - n,
    a;
  for (t.lineStart(); ++r < i; ) (a = e[r]), t.point(a[0], a[1], a[2]);
  t.lineEnd();
}
function Te(e, t) {
  var n = -1,
    r = e.length;
  for (t.polygonStart(); ++n < r; ) we(e[n], t, 1);
  t.polygonEnd();
}
function Ee(e, t) {
  e && Se.hasOwnProperty(e.type) ? Se[e.type](e, t) : Y(e, t);
}
new I(), new I();
function De(e) {
  return [ge(e[1], e[0]), q(e[2])];
}
function Oe(e) {
  var t = e[0],
    n = e[1],
    r = W(n);
  return [r * W(t), r * G(t), G(n)];
}
function ke(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function Ae(e, t) {
  return [
    e[1] * t[2] - e[2] * t[1],
    e[2] * t[0] - e[0] * t[2],
    e[0] * t[1] - e[1] * t[0],
  ];
}
function je(e, t) {
  (e[0] += t[0]), (e[1] += t[1]), (e[2] += t[2]);
}
function Me(e, t) {
  return [e[0] * t, e[1] * t, e[2] * t];
}
function Ne(e) {
  var t = K(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
  (e[0] /= t), (e[1] /= t), (e[2] /= t);
}
function Pe(e, t) {
  function n(n, r) {
    return (n = e(n, r)), t(n[0], n[1]);
  }
  return (
    e.invert &&
      t.invert &&
      (n.invert = function (n, r) {
        return (n = t.invert(n, r)), n && e.invert(n[0], n[1]);
      }),
    n
  );
}
function Fe(e, t) {
  return U(e) > R && (e -= Math.round(e / B) * B), [e, t];
}
Fe.invert = Fe;
function Ie(e, t, n) {
  return (e %= B)
    ? t || n
      ? Pe(Re(e), ze(t, n))
      : Re(e)
    : t || n
    ? ze(t, n)
    : Fe;
}
function Le(e) {
  return function (t, n) {
    return (t += e), U(t) > R && (t -= Math.round(t / B) * B), [t, n];
  };
}
function Re(e) {
  var t = Le(e);
  return (t.invert = Le(-e)), t;
}
function ze(e, t) {
  var n = W(e),
    r = G(e),
    i = W(t),
    a = G(t);
  function o(e, t) {
    var o = W(t),
      s = W(e) * o,
      c = G(e) * o,
      l = G(t),
      u = l * n + s * r;
    return [ge(c * i - u * a, s * n - l * r), q(u * i + c * a)];
  }
  return (
    (o.invert = function (e, t) {
      var o = W(t),
        s = W(e) * o,
        c = G(e) * o,
        l = G(t),
        u = l * i - c * a;
      return [ge(c * i + l * a, s * n + u * r), q(u * n - s * r)];
    }),
    o
  );
}
function Be(e) {
  e = Ie(e[0] * H, e[1] * H, e.length > 2 ? e[2] * H : 0);
  function t(t) {
    return (t = e(t[0] * H, t[1] * H)), (t[0] *= V), (t[1] *= V), t;
  }
  return (
    (t.invert = function (t) {
      return (t = e.invert(t[0] * H, t[1] * H)), (t[0] *= V), (t[1] *= V), t;
    }),
    t
  );
}
function Ve(e, t, n, r, i, a) {
  if (n) {
    var o = W(t),
      s = G(t),
      c = r * n;
    i == null
      ? ((i = t + r * B), (a = t - c / 2))
      : ((i = He(o, i)),
        (a = He(o, a)),
        (r > 0 ? i < a : i > a) && (i += r * B));
    for (var l, u = i; r > 0 ? u > a : u < a; u -= c)
      (l = De([o, -s * W(u), -s * G(u)])), e.point(l[0], l[1]);
  }
}
function He(e, t) {
  (t = Oe(t)), (t[0] -= e), Ne(t);
  var n = xe(-t[1]);
  return ((-t[2] < 0 ? -n : n) + B - L) % B;
}
function Ue() {
  var e = [],
    t;
  return {
    point: function (e, n, r) {
      t.push([e, n, r]);
    },
    lineStart: function () {
      e.push((t = []));
    },
    lineEnd: J,
    rejoin: function () {
      e.length > 1 && e.push(e.pop().concat(e.shift()));
    },
    result: function () {
      var n = e;
      return (e = []), (t = null), n;
    },
  };
}
function We(e, t) {
  return U(e[0] - t[0]) < L && U(e[1] - t[1]) < L;
}
function Ge(e, t, n, r) {
  (this.x = e),
    (this.z = t),
    (this.o = n),
    (this.e = r),
    (this.v = !1),
    (this.n = this.p = null);
}
function Ke(e, t, n, r, i) {
  var a = [],
    o = [],
    s,
    c;
  if (
    (e.forEach(function (e) {
      if (!((t = e.length - 1) <= 0)) {
        var t,
          n = e[0],
          r = e[t],
          c;
        if (We(n, r)) {
          if (!n[2] && !r[2]) {
            for (i.lineStart(), s = 0; s < t; ++s) i.point((n = e[s])[0], n[1]);
            i.lineEnd();
            return;
          }
          r[0] += 2 * L;
        }
        a.push((c = new Ge(n, e, null, !0))),
          o.push((c.o = new Ge(n, null, c, !1))),
          a.push((c = new Ge(r, e, null, !1))),
          o.push((c.o = new Ge(r, null, c, !0)));
      }
    }),
    a.length)
  ) {
    for (o.sort(t), qe(a), qe(o), s = 0, c = o.length; s < c; ++s)
      o[s].e = n = !n;
    for (var l = a[0], u, d; ; ) {
      for (var f = l, p = !0; f.v; ) if ((f = f.n) === l) return;
      (u = f.z), i.lineStart();
      do {
        if (((f.v = f.o.v = !0), f.e)) {
          if (p)
            for (s = 0, c = u.length; s < c; ++s) i.point((d = u[s])[0], d[1]);
          else r(f.x, f.n.x, 1, i);
          f = f.n;
        } else {
          if (p)
            for (u = f.p.z, s = u.length - 1; s >= 0; --s)
              i.point((d = u[s])[0], d[1]);
          else r(f.x, f.p.x, -1, i);
          f = f.p;
        }
        (f = f.o), (u = f.z), (p = !p);
      } while (!f.v);
      i.lineEnd();
    }
  }
}
function qe(e) {
  if ((t = e.length)) {
    for (var t, n = 0, r = e[0], i; ++n < t; )
      (r.n = i = e[n]), (i.p = r), (r = i);
    (r.n = i = e[0]), (i.p = r);
  }
}
function Je(e) {
  return U(e[0]) <= R ? e[0] : ye(e[0]) * (((U(e[0]) + R) % B) - R);
}
function Ye(e, t) {
  var n = Je(t),
    r = t[1],
    i = G(r),
    a = [G(n), -W(n), 0],
    o = 0,
    s = 0,
    c = new I();
  i === 1 ? (r = z + L) : i === -1 && (r = -z - L);
  for (var l = 0, u = e.length; l < u; ++l)
    if ((f = (d = e[l]).length))
      for (
        var d,
          f,
          p = d[f - 1],
          m = Je(p),
          h = p[1] / 2 + me,
          g = G(h),
          _ = W(h),
          v = 0;
        v < f;
        ++v, m = b, g = S, _ = C, p = y
      ) {
        var y = d[v],
          b = Je(y),
          x = y[1] / 2 + me,
          S = G(x),
          C = W(x),
          w = b - m,
          T = w >= 0 ? 1 : -1,
          E = T * w,
          D = E > R,
          O = g * S;
        if (
          (c.add(ge(O * T * G(E), _ * C + O * W(E))),
          (o += D ? w + T * B : w),
          D ^ (m >= n) ^ (b >= n))
        ) {
          var k = Ae(Oe(p), Oe(y));
          Ne(k);
          var A = Ae(a, k);
          Ne(A);
          var j = (D ^ (w >= 0) ? -1 : 1) * q(A[2]);
          (r > j || (r === j && (k[0] || k[1]))) &&
            (s += D ^ (w >= 0) ? 1 : -1);
        }
      }
  return (o < -L || (o < L && c < -pe)) ^ (s & 1);
}
function Xe(e, t, n, r) {
  return function (i) {
    var a = t(i),
      o = Ue(),
      s = t(o),
      c = !1,
      l,
      u,
      d,
      f = {
        point: p,
        lineStart: h,
        lineEnd: g,
        polygonStart: function () {
          (f.point = _), (f.lineStart = v), (f.lineEnd = y), (u = []), (l = []);
        },
        polygonEnd: function () {
          (f.point = p), (f.lineStart = h), (f.lineEnd = g), (u = fe(u));
          var e = Ye(l, r);
          u.length
            ? ((c ||= (i.polygonStart(), !0)), Ke(u, Qe, e, n, i))
            : e &&
              ((c ||= (i.polygonStart(), !0)),
              i.lineStart(),
              n(null, null, 1, i),
              i.lineEnd()),
            (c &&= (i.polygonEnd(), !1)),
            (u = l = null);
        },
        sphere: function () {
          i.polygonStart(),
            i.lineStart(),
            n(null, null, 1, i),
            i.lineEnd(),
            i.polygonEnd();
        },
      };
    function p(t, n) {
      e(t, n) && i.point(t, n);
    }
    function m(e, t) {
      a.point(e, t);
    }
    function h() {
      (f.point = m), a.lineStart();
    }
    function g() {
      (f.point = p), a.lineEnd();
    }
    function _(e, t) {
      d.push([e, t]), s.point(e, t);
    }
    function v() {
      s.lineStart(), (d = []);
    }
    function y() {
      _(d[0][0], d[0][1]), s.lineEnd();
      var e = s.clean(),
        t = o.result(),
        n,
        r = t.length,
        a,
        f,
        p;
      if ((d.pop(), l.push(d), (d = null), r)) {
        if (e & 1) {
          if (((f = t[0]), (a = f.length - 1) > 0)) {
            for (c ||= (i.polygonStart(), !0), i.lineStart(), n = 0; n < a; ++n)
              i.point((p = f[n])[0], p[1]);
            i.lineEnd();
          }
        } else
          r > 1 && e & 2 && t.push(t.pop().concat(t.shift())),
            u.push(t.filter(Ze));
      }
    }
    return f;
  };
}
function Ze(e) {
  return e.length > 1;
}
function Qe(e, t) {
  return (
    ((e = e.x)[0] < 0 ? e[1] - z - L : z - e[1]) -
    ((t = t.x)[0] < 0 ? t[1] - z - L : z - t[1])
  );
}
var $e = Xe(
  function () {
    return !0;
  },
  et,
  nt,
  [-R, -z]
);
function et(e) {
  var t = NaN,
    n = NaN,
    r = NaN,
    i;
  return {
    lineStart: function () {
      e.lineStart(), (i = 1);
    },
    point: function (a, o) {
      var s = a > 0 ? R : -R,
        c = U(a - t);
      U(c - R) < L
        ? (e.point(t, (n = (n + o) / 2 > 0 ? z : -z)),
          e.point(r, n),
          e.lineEnd(),
          e.lineStart(),
          e.point(s, n),
          e.point(a, n),
          (i = 0))
        : r !== s &&
          c >= R &&
          (U(t - r) < L && (t -= r * L),
          U(a - s) < L && (a -= s * L),
          (n = tt(t, n, a, o)),
          e.point(r, n),
          e.lineEnd(),
          e.lineStart(),
          e.point(s, n),
          (i = 0)),
        e.point((t = a), (n = o)),
        (r = s);
    },
    lineEnd: function () {
      e.lineEnd(), (t = n = NaN);
    },
    clean: function () {
      return 2 - i;
    },
  };
}
function tt(e, t, n, r) {
  var i,
    a,
    o = G(e - n);
  return U(o) > L
    ? he((G(t) * (a = W(r)) * G(n) - G(r) * (i = W(t)) * G(e)) / (i * a * o))
    : (t + r) / 2;
}
function nt(e, t, n, r) {
  var i;
  if (e == null)
    (i = n * z),
      r.point(-R, i),
      r.point(0, i),
      r.point(R, i),
      r.point(R, 0),
      r.point(R, -i),
      r.point(0, -i),
      r.point(-R, -i),
      r.point(-R, 0),
      r.point(-R, i);
  else if (U(e[0] - t[0]) > L) {
    var a = e[0] < t[0] ? R : -R;
    (i = (n * a) / 2), r.point(-a, i), r.point(0, i), r.point(a, i);
  } else r.point(t[0], t[1]);
}
function rt(e) {
  var t = W(e),
    n = 2 * H,
    r = t > 0,
    i = U(t) > L;
  function a(t, r, i, a) {
    Ve(a, e, n, i, t, r);
  }
  function o(e, n) {
    return W(e) * W(n) > t;
  }
  function s(e) {
    var t, n, a, s, u;
    return {
      lineStart: function () {
        (s = a = !1), (u = 1);
      },
      point: function (d, f) {
        var p = [d, f],
          m,
          h = o(d, f),
          g = r ? (h ? 0 : l(d, f)) : h ? l(d + (d < 0 ? R : -R), f) : 0;
        if (
          (!t && (s = a = h) && e.lineStart(),
          h !== a &&
            ((m = c(t, p)), (!m || We(t, m) || We(p, m)) && (p[2] = 1)),
          h !== a)
        )
          (u = 0),
            h
              ? (e.lineStart(), (m = c(p, t)), e.point(m[0], m[1]))
              : ((m = c(t, p)), e.point(m[0], m[1], 2), e.lineEnd()),
            (t = m);
        else if (i && t && r ^ h) {
          var _;
          !(g & n) &&
            (_ = c(p, t, !0)) &&
            ((u = 0),
            r
              ? (e.lineStart(),
                e.point(_[0][0], _[0][1]),
                e.point(_[1][0], _[1][1]),
                e.lineEnd())
              : (e.point(_[1][0], _[1][1]),
                e.lineEnd(),
                e.lineStart(),
                e.point(_[0][0], _[0][1], 3)));
        }
        !h || (t && We(t, p)) || e.point(p[0], p[1]), (t = p), (a = h), (n = g);
      },
      lineEnd: function () {
        a && e.lineEnd(), (t = null);
      },
      clean: function () {
        return u | ((s && a) << 1);
      },
    };
  }
  function c(e, n, r) {
    var i = Oe(e),
      a = Oe(n),
      o = [1, 0, 0],
      s = Ae(i, a),
      c = ke(s, s),
      l = s[0],
      u = c - l * l;
    if (!u) return !r && e;
    var d = (t * c) / u,
      f = (-t * l) / u,
      p = Ae(o, s),
      m = Me(o, d);
    je(m, Me(s, f));
    var h = p,
      g = ke(m, h),
      _ = ke(h, h),
      v = g * g - _ * (ke(m, m) - 1);
    if (!(v < 0)) {
      var y = K(v),
        b = Me(h, (-g - y) / _);
      if ((je(b, m), (b = De(b)), !r)) return b;
      var x = e[0],
        S = n[0],
        C = e[1],
        w = n[1],
        T;
      S < x && ((T = x), (x = S), (S = T));
      var E = S - x,
        D = U(E - R) < L,
        O = D || E < L;
      if (
        (!D && w < C && ((T = C), (C = w), (w = T)),
        O
          ? D
            ? (C + w > 0) ^ (b[1] < (U(b[0] - x) < L ? C : w))
            : C <= b[1] && b[1] <= w
          : (E > R) ^ (x <= b[0] && b[0] <= S))
      ) {
        var k = Me(h, (-g + y) / _);
        return je(k, m), [b, De(k)];
      }
    }
  }
  function l(t, n) {
    var i = r ? e : R - e,
      a = 0;
    return (
      t < -i ? (a |= 1) : t > i && (a |= 2),
      n < -i ? (a |= 4) : n > i && (a |= 8),
      a
    );
  }
  return Xe(o, s, a, r ? [0, -e] : [-R, e - R]);
}
function it(e, t, n, r, i, a) {
  var o = e[0],
    s = e[1],
    c = t[0],
    l = t[1],
    u = 0,
    d = 1,
    f = c - o,
    p = l - s,
    m = n - o;
  if (!(!f && m > 0)) {
    if (((m /= f), f < 0)) {
      if (m < u) return;
      m < d && (d = m);
    } else if (f > 0) {
      if (m > d) return;
      m > u && (u = m);
    }
    if (((m = i - o), !(!f && m < 0))) {
      if (((m /= f), f < 0)) {
        if (m > d) return;
        m > u && (u = m);
      } else if (f > 0) {
        if (m < u) return;
        m < d && (d = m);
      }
      if (((m = r - s), !(!p && m > 0))) {
        if (((m /= p), p < 0)) {
          if (m < u) return;
          m < d && (d = m);
        } else if (p > 0) {
          if (m > d) return;
          m > u && (u = m);
        }
        if (((m = a - s), !(!p && m < 0))) {
          if (((m /= p), p < 0)) {
            if (m > d) return;
            m > u && (u = m);
          } else if (p > 0) {
            if (m < u) return;
            m < d && (d = m);
          }
          return (
            u > 0 && ((e[0] = o + u * f), (e[1] = s + u * p)),
            d < 1 && ((t[0] = o + d * f), (t[1] = s + d * p)),
            !0
          );
        }
      }
    }
  }
}
var at = 1e9,
  ot = -at;
function st(e, t, n, r) {
  function i(i, a) {
    return e <= i && i <= n && t <= a && a <= r;
  }
  function a(i, a, s, l) {
    var u = 0,
      d = 0;
    if (i == null || (u = o(i, s)) !== (d = o(a, s)) || (c(i, a) < 0) ^ (s > 0))
      do l.point(u === 0 || u === 3 ? e : n, u > 1 ? r : t);
      while ((u = (u + s + 4) % 4) !== d);
    else l.point(a[0], a[1]);
  }
  function o(r, i) {
    return U(r[0] - e) < L
      ? i > 0
        ? 0
        : 3
      : U(r[0] - n) < L
      ? i > 0
        ? 2
        : 1
      : U(r[1] - t) < L
      ? +(i > 0)
      : i > 0
      ? 3
      : 2;
  }
  function s(e, t) {
    return c(e.x, t.x);
  }
  function c(e, t) {
    var n = o(e, 1),
      r = o(t, 1);
    return n === r
      ? n === 0
        ? t[1] - e[1]
        : n === 1
        ? e[0] - t[0]
        : n === 2
        ? e[1] - t[1]
        : t[0] - e[0]
      : n - r;
  }
  return function (o) {
    var c = o,
      l = Ue(),
      u,
      d,
      f,
      p,
      m,
      h,
      g,
      _,
      v,
      y,
      b,
      x = {
        point: S,
        lineStart: E,
        lineEnd: D,
        polygonStart: w,
        polygonEnd: T,
      };
    function S(e, t) {
      i(e, t) && c.point(e, t);
    }
    function C() {
      for (var t = 0, n = 0, i = d.length; n < i; ++n)
        for (
          var a = d[n], o = 1, s = a.length, c = a[0], l, u, f = c[0], p = c[1];
          o < s;
          ++o
        )
          (l = f),
            (u = p),
            (c = a[o]),
            (f = c[0]),
            (p = c[1]),
            u <= r
              ? p > r && (f - l) * (r - u) > (p - u) * (e - l) && ++t
              : p <= r && (f - l) * (r - u) < (p - u) * (e - l) && --t;
      return t;
    }
    function w() {
      (c = l), (u = []), (d = []), (b = !0);
    }
    function T() {
      var e = C(),
        t = b && e,
        n = (u = fe(u)).length;
      (t || n) &&
        (o.polygonStart(),
        t && (o.lineStart(), a(null, null, 1, o), o.lineEnd()),
        n && Ke(u, s, e, a, o),
        o.polygonEnd()),
        (c = o),
        (u = d = f = null);
    }
    function E() {
      (x.point = O), d && d.push((f = [])), (y = !0), (v = !1), (g = _ = NaN);
    }
    function D() {
      u && (O(p, m), h && v && l.rejoin(), u.push(l.result())),
        (x.point = S),
        v && c.lineEnd();
    }
    function O(a, o) {
      var s = i(a, o);
      if ((d && f.push([a, o]), y))
        (p = a),
          (m = o),
          (h = s),
          (y = !1),
          s && (c.lineStart(), c.point(a, o));
      else if (s && v) c.point(a, o);
      else {
        var l = [
            (g = Math.max(ot, Math.min(at, g))),
            (_ = Math.max(ot, Math.min(at, _))),
          ],
          u = [
            (a = Math.max(ot, Math.min(at, a))),
            (o = Math.max(ot, Math.min(at, o))),
          ];
        it(l, u, e, t, n, r)
          ? (v || (c.lineStart(), c.point(l[0], l[1])),
            c.point(u[0], u[1]),
            s || c.lineEnd(),
            (b = !1))
          : s && (c.lineStart(), c.point(a, o), (b = !1));
      }
      (g = a), (_ = o), (v = s);
    }
    return x;
  };
}
var ct = (e) => e,
  lt = new I(),
  ut = new I(),
  dt,
  ft,
  pt,
  mt,
  X = {
    point: J,
    lineStart: J,
    lineEnd: J,
    polygonStart: function () {
      (X.lineStart = ht), (X.lineEnd = vt);
    },
    polygonEnd: function () {
      (X.lineStart = X.lineEnd = X.point = J), lt.add(U(ut)), (ut = new I());
    },
    result: function () {
      var e = lt / 2;
      return (lt = new I()), e;
    },
  };
function ht() {
  X.point = gt;
}
function gt(e, t) {
  (X.point = _t), (dt = pt = e), (ft = mt = t);
}
function _t(e, t) {
  ut.add(mt * e - pt * t), (pt = e), (mt = t);
}
function vt() {
  _t(dt, ft);
}
var yt = 1 / 0,
  bt = yt,
  xt = -yt,
  St = xt,
  Ct = {
    point: wt,
    lineStart: J,
    lineEnd: J,
    polygonStart: J,
    polygonEnd: J,
    result: function () {
      var e = [
        [yt, bt],
        [xt, St],
      ];
      return (xt = St = -(bt = yt = 1 / 0)), e;
    },
  };
function wt(e, t) {
  e < yt && (yt = e),
    e > xt && (xt = e),
    t < bt && (bt = t),
    t > St && (St = t);
}
var Tt = 0,
  Et = 0,
  Dt = 0,
  Ot = 0,
  kt = 0,
  At = 0,
  jt = 0,
  Mt = 0,
  Nt = 0,
  Pt,
  Ft,
  Z,
  Q,
  $ = {
    point: It,
    lineStart: Lt,
    lineEnd: Bt,
    polygonStart: function () {
      ($.lineStart = Vt), ($.lineEnd = Ht);
    },
    polygonEnd: function () {
      ($.point = It), ($.lineStart = Lt), ($.lineEnd = Bt);
    },
    result: function () {
      var e = Nt
        ? [jt / Nt, Mt / Nt]
        : At
        ? [Ot / At, kt / At]
        : Dt
        ? [Tt / Dt, Et / Dt]
        : [NaN, NaN];
      return (Tt = Et = Dt = Ot = kt = At = jt = Mt = Nt = 0), e;
    },
  };
function It(e, t) {
  (Tt += e), (Et += t), ++Dt;
}
function Lt() {
  $.point = Rt;
}
function Rt(e, t) {
  ($.point = zt), It((Z = e), (Q = t));
}
function zt(e, t) {
  var n = e - Z,
    r = t - Q,
    i = K(n * n + r * r);
  (Ot += (i * (Z + e)) / 2),
    (kt += (i * (Q + t)) / 2),
    (At += i),
    It((Z = e), (Q = t));
}
function Bt() {
  $.point = It;
}
function Vt() {
  $.point = Ut;
}
function Ht() {
  Wt(Pt, Ft);
}
function Ut(e, t) {
  ($.point = Wt), It((Pt = Z = e), (Ft = Q = t));
}
function Wt(e, t) {
  var n = e - Z,
    r = t - Q,
    i = K(n * n + r * r);
  (Ot += (i * (Z + e)) / 2),
    (kt += (i * (Q + t)) / 2),
    (At += i),
    (i = Q * e - Z * t),
    (jt += i * (Z + e)),
    (Mt += i * (Q + t)),
    (Nt += i * 3),
    It((Z = e), (Q = t));
}
function Gt(e) {
  this._context = e;
}
Gt.prototype = {
  _radius: 4.5,
  pointRadius: function (e) {
    return (this._radius = e), this;
  },
  polygonStart: function () {
    this._line = 0;
  },
  polygonEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    this._line === 0 && this._context.closePath(), (this._point = NaN);
  },
  point: function (e, t) {
    switch (this._point) {
      case 0:
        this._context.moveTo(e, t), (this._point = 1);
        break;
      case 1:
        this._context.lineTo(e, t);
        break;
      default:
        this._context.moveTo(e + this._radius, t),
          this._context.arc(e, t, this._radius, 0, B);
    }
  },
  result: J,
};
var Kt = new I(),
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt = {
    point: J,
    lineStart: function () {
      Qt.point = $t;
    },
    lineEnd: function () {
      qt && en(Jt, Yt), (Qt.point = J);
    },
    polygonStart: function () {
      qt = !0;
    },
    polygonEnd: function () {
      qt = null;
    },
    result: function () {
      var e = +Kt;
      return (Kt = new I()), e;
    },
  };
function $t(e, t) {
  (Qt.point = en), (Jt = Xt = e), (Yt = Zt = t);
}
function en(e, t) {
  (Xt -= e), (Zt -= t), Kt.add(K(Xt * Xt + Zt * Zt)), (Xt = e), (Zt = t);
}
var tn,
  nn,
  rn,
  an,
  on = class {
    constructor(e) {
      (this._append = e == null ? sn : cn(e)),
        (this._radius = 4.5),
        (this._ = ``);
    }
    pointRadius(e) {
      return (this._radius = +e), this;
    }
    polygonStart() {
      this._line = 0;
    }
    polygonEnd() {
      this._line = NaN;
    }
    lineStart() {
      this._point = 0;
    }
    lineEnd() {
      this._line === 0 && (this._ += `Z`), (this._point = NaN);
    }
    point(e, t) {
      switch (this._point) {
        case 0:
          this._append`M${e},${t}`, (this._point = 1);
          break;
        case 1:
          this._append`L${e},${t}`;
          break;
        default:
          if (
            (this._append`M${e},${t}`,
            this._radius !== rn || this._append !== nn)
          ) {
            let e = this._radius,
              t = this._;
            (this._ = ``),
              this._append`m0,${e}a${e},${e} 0 1,1 0,${
                -2 * e
              }a${e},${e} 0 1,1 0,${2 * e}z`,
              (rn = e),
              (nn = this._append),
              (an = this._),
              (this._ = t);
          }
          this._ += an;
      }
    }
    result() {
      let e = this._;
      return (this._ = ``), e.length ? e : null;
    }
  };
function sn(e) {
  let t = 1;
  this._ += e[0];
  for (let n = e.length; t < n; ++t) this._ += arguments[t] + e[t];
}
function cn(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw RangeError(`invalid digits: ${e}`);
  if (t > 15) return sn;
  if (t !== tn) {
    let e = 10 ** t;
    (tn = t),
      (nn = function (t) {
        let n = 1;
        this._ += t[0];
        for (let r = t.length; n < r; ++n)
          this._ += Math.round(arguments[n] * e) / e + t[n];
      });
  }
  return nn;
}
function ln(e, t) {
  let n = 3,
    r = 4.5,
    i,
    a;
  function o(e) {
    return (
      e &&
        (typeof r == `function` && a.pointRadius(+r.apply(this, arguments)),
        Ee(e, i(a))),
      a.result()
    );
  }
  return (
    (o.area = function (e) {
      return Ee(e, i(X)), X.result();
    }),
    (o.measure = function (e) {
      return Ee(e, i(Qt)), Qt.result();
    }),
    (o.bounds = function (e) {
      return Ee(e, i(Ct)), Ct.result();
    }),
    (o.centroid = function (e) {
      return Ee(e, i($)), $.result();
    }),
    (o.projection = function (t) {
      return arguments.length
        ? ((i = t == null ? ((e = null), ct) : (e = t).stream), o)
        : e;
    }),
    (o.context = function (e) {
      return arguments.length
        ? ((a = e == null ? ((t = null), new on(n)) : new Gt((t = e))),
          typeof r != `function` && a.pointRadius(r),
          o)
        : t;
    }),
    (o.pointRadius = function (e) {
      return arguments.length
        ? ((r = typeof e == `function` ? e : (a.pointRadius(+e), +e)), o)
        : r;
    }),
    (o.digits = function (e) {
      if (!arguments.length) return n;
      if (e == null) n = null;
      else {
        let t = Math.floor(e);
        if (!(t >= 0)) throw RangeError(`invalid digits: ${e}`);
        n = t;
      }
      return t === null && (a = new on(n)), o;
    }),
    o.projection(e).digits(n).context(t)
  );
}
function un(e) {
  return function (t) {
    var n = new dn();
    for (var r in e) n[r] = e[r];
    return (n.stream = t), n;
  };
}
function dn() {}
dn.prototype = {
  constructor: dn,
  point: function (e, t) {
    this.stream.point(e, t);
  },
  sphere: function () {
    this.stream.sphere();
  },
  lineStart: function () {
    this.stream.lineStart();
  },
  lineEnd: function () {
    this.stream.lineEnd();
  },
  polygonStart: function () {
    this.stream.polygonStart();
  },
  polygonEnd: function () {
    this.stream.polygonEnd();
  },
};
function fn(e, t, n) {
  var r = e.clipExtent && e.clipExtent();
  return (
    e.scale(150).translate([0, 0]),
    r != null && e.clipExtent(null),
    Ee(n, e.stream(Ct)),
    t(Ct.result()),
    r != null && e.clipExtent(r),
    e
  );
}
function pn(e, t, n) {
  return fn(
    e,
    function (n) {
      var r = t[1][0] - t[0][0],
        i = t[1][1] - t[0][1],
        a = Math.min(r / (n[1][0] - n[0][0]), i / (n[1][1] - n[0][1])),
        o = +t[0][0] + (r - a * (n[1][0] + n[0][0])) / 2,
        s = +t[0][1] + (i - a * (n[1][1] + n[0][1])) / 2;
      e.scale(150 * a).translate([o, s]);
    },
    n
  );
}
function mn(e, t, n) {
  return pn(e, [[0, 0], t], n);
}
function hn(e, t, n) {
  return fn(
    e,
    function (n) {
      var r = +t,
        i = r / (n[1][0] - n[0][0]),
        a = (r - i * (n[1][0] + n[0][0])) / 2,
        o = -i * n[0][1];
      e.scale(150 * i).translate([a, o]);
    },
    n
  );
}
function gn(e, t, n) {
  return fn(
    e,
    function (n) {
      var r = +t,
        i = r / (n[1][1] - n[0][1]),
        a = -i * n[0][0],
        o = (r - i * (n[1][1] + n[0][1])) / 2;
      e.scale(150 * i).translate([a, o]);
    },
    n
  );
}
var _n = 16,
  vn = W(30 * H);
function yn(e, t) {
  return +t ? xn(e, t) : bn(e);
}
function bn(e) {
  return un({
    point: function (t, n) {
      (t = e(t, n)), this.stream.point(t[0], t[1]);
    },
  });
}
function xn(e, t) {
  function n(r, i, a, o, s, c, l, u, d, f, p, m, h, g) {
    var _ = l - r,
      v = u - i,
      y = _ * _ + v * v;
    if (y > 4 * t && h--) {
      var b = o + f,
        x = s + p,
        S = c + m,
        C = K(b * b + x * x + S * S),
        w = q((S /= C)),
        T = U(U(S) - 1) < L || U(a - d) < L ? (a + d) / 2 : ge(x, b),
        E = e(T, w),
        D = E[0],
        O = E[1],
        k = D - r,
        A = O - i,
        j = v * k - _ * A;
      ((j * j) / y > t ||
        U((_ * k + v * A) / y - 0.5) > 0.3 ||
        o * f + s * p + c * m < vn) &&
        (n(r, i, a, o, s, c, D, O, T, (b /= C), (x /= C), S, h, g),
        g.point(D, O),
        n(D, O, T, b, x, S, l, u, d, f, p, m, h, g));
    }
  }
  return function (t) {
    var r,
      i,
      a,
      o,
      s,
      c,
      l,
      u,
      d,
      f,
      p,
      m,
      h = {
        point: g,
        lineStart: _,
        lineEnd: y,
        polygonStart: function () {
          t.polygonStart(), (h.lineStart = b);
        },
        polygonEnd: function () {
          t.polygonEnd(), (h.lineStart = _);
        },
      };
    function g(n, r) {
      (n = e(n, r)), t.point(n[0], n[1]);
    }
    function _() {
      (u = NaN), (h.point = v), t.lineStart();
    }
    function v(r, i) {
      var a = Oe([r, i]),
        o = e(r, i);
      n(
        u,
        d,
        l,
        f,
        p,
        m,
        (u = o[0]),
        (d = o[1]),
        (l = r),
        (f = a[0]),
        (p = a[1]),
        (m = a[2]),
        _n,
        t
      ),
        t.point(u, d);
    }
    function y() {
      (h.point = g), t.lineEnd();
    }
    function b() {
      _(), (h.point = x), (h.lineEnd = S);
    }
    function x(e, t) {
      v((r = e), t), (i = u), (a = d), (o = f), (s = p), (c = m), (h.point = v);
    }
    function S() {
      n(u, d, l, f, p, m, i, a, r, o, s, c, _n, t), (h.lineEnd = y), y();
    }
    return h;
  };
}
var Sn = un({
  point: function (e, t) {
    this.stream.point(e * H, t * H);
  },
});
function Cn(e) {
  return un({
    point: function (t, n) {
      var r = e(t, n);
      return this.stream.point(r[0], r[1]);
    },
  });
}
function wn(e, t, n, r, i) {
  function a(a, o) {
    return (a *= r), (o *= i), [t + e * a, n - e * o];
  }
  return (
    (a.invert = function (a, o) {
      return [((a - t) / e) * r, ((n - o) / e) * i];
    }),
    a
  );
}
function Tn(e, t, n, r, i, a) {
  if (!a) return wn(e, t, n, r, i);
  var o = W(a),
    s = G(a),
    c = o * e,
    l = s * e,
    u = o / e,
    d = s / e,
    f = (s * n - o * t) / e,
    p = (s * t + o * n) / e;
  function m(e, a) {
    return (e *= r), (a *= i), [c * e - l * a + t, n - l * e - c * a];
  }
  return (
    (m.invert = function (e, t) {
      return [r * (u * e - d * t + f), i * (p - d * e - u * t)];
    }),
    m
  );
}
function En(e) {
  return Dn(function () {
    return e;
  })();
}
function Dn(e) {
  var t,
    n = 150,
    r = 480,
    i = 250,
    a = 0,
    o = 0,
    s = 0,
    c = 0,
    l = 0,
    u,
    d = 0,
    f = 1,
    p = 1,
    m = null,
    h = $e,
    g = null,
    _,
    v,
    y,
    b = ct,
    x = 0.5,
    S,
    C,
    w,
    T,
    E;
  function D(e) {
    return w(e[0] * H, e[1] * H);
  }
  function O(e) {
    return (e = w.invert(e[0], e[1])), e && [e[0] * V, e[1] * V];
  }
  (D.stream = function (e) {
    return T && E === e ? T : (T = Sn(Cn(u)(h(S(b((E = e)))))));
  }),
    (D.preclip = function (e) {
      return arguments.length ? ((h = e), (m = void 0), A()) : h;
    }),
    (D.postclip = function (e) {
      return arguments.length ? ((b = e), (g = _ = v = y = null), A()) : b;
    }),
    (D.clipAngle = function (e) {
      return arguments.length
        ? ((h = +e ? rt((m = e * H)) : ((m = null), $e)), A())
        : m * V;
    }),
    (D.clipExtent = function (e) {
      return arguments.length
        ? ((b =
            e == null
              ? ((g = _ = v = y = null), ct)
              : st(
                  (g = +e[0][0]),
                  (_ = +e[0][1]),
                  (v = +e[1][0]),
                  (y = +e[1][1])
                )),
          A())
        : g == null
        ? null
        : [
            [g, _],
            [v, y],
          ];
    }),
    (D.scale = function (e) {
      return arguments.length ? ((n = +e), k()) : n;
    }),
    (D.translate = function (e) {
      return arguments.length ? ((r = +e[0]), (i = +e[1]), k()) : [r, i];
    }),
    (D.center = function (e) {
      return arguments.length
        ? ((a = (e[0] % 360) * H), (o = (e[1] % 360) * H), k())
        : [a * V, o * V];
    }),
    (D.rotate = function (e) {
      return arguments.length
        ? ((s = (e[0] % 360) * H),
          (c = (e[1] % 360) * H),
          (l = e.length > 2 ? (e[2] % 360) * H : 0),
          k())
        : [s * V, c * V, l * V];
    }),
    (D.angle = function (e) {
      return arguments.length ? ((d = (e % 360) * H), k()) : d * V;
    }),
    (D.reflectX = function (e) {
      return arguments.length ? ((f = e ? -1 : 1), k()) : f < 0;
    }),
    (D.reflectY = function (e) {
      return arguments.length ? ((p = e ? -1 : 1), k()) : p < 0;
    }),
    (D.precision = function (e) {
      return arguments.length ? ((S = yn(C, (x = e * e))), A()) : K(x);
    }),
    (D.fitExtent = function (e, t) {
      return pn(D, e, t);
    }),
    (D.fitSize = function (e, t) {
      return mn(D, e, t);
    }),
    (D.fitWidth = function (e, t) {
      return hn(D, e, t);
    }),
    (D.fitHeight = function (e, t) {
      return gn(D, e, t);
    });
  function k() {
    var e = Tn(n, 0, 0, f, p, d).apply(null, t(a, o)),
      m = Tn(n, r - e[0], i - e[1], f, p, d);
    return (
      (u = Ie(s, c, l)), (C = Pe(t, m)), (w = Pe(u, C)), (S = yn(C, x)), A()
    );
  }
  function A() {
    return (T = E = null), D;
  }
  return function () {
    return (t = e.apply(this, arguments)), (D.invert = t.invert && O), k();
  };
}
function On(e) {
  return function (t, n) {
    var r = W(t),
      i = W(n),
      a = e(r * i);
    return a === 1 / 0 ? [2, 0] : [a * i * G(t), a * G(n)];
  };
}
function kn(e) {
  return function (t, n) {
    var r = K(t * t + n * n),
      i = e(r),
      a = G(i),
      o = W(i);
    return [ge(t * a, r * o), q(r && (n * a) / r)];
  };
}
var An = On(function (e) {
  return K(2 / (1 + e));
});
An.invert = kn(function (e) {
  return 2 * q(e / 2);
});
var jn = On(function (e) {
  return (e = xe(e)) && e / G(e);
});
jn.invert = kn(function (e) {
  return e;
});
function Mn(e, t) {
  return [e, ve(be((z + t) / 2))];
}
Mn.invert = function (e, t) {
  return [e, 2 * he(_e(t)) - z];
};
function Nn() {
  return Pn(Mn).scale(961 / B);
}
function Pn(e) {
  var t = En(e),
    n = t.center,
    r = t.scale,
    i = t.translate,
    a = t.clipExtent,
    o = null,
    s,
    c,
    l;
  (t.scale = function (e) {
    return arguments.length ? (r(e), u()) : r();
  }),
    (t.translate = function (e) {
      return arguments.length ? (i(e), u()) : i();
    }),
    (t.center = function (e) {
      return arguments.length ? (n(e), u()) : n();
    }),
    (t.clipExtent = function (e) {
      return arguments.length
        ? (e == null
            ? (o = s = c = l = null)
            : ((o = +e[0][0]), (s = +e[0][1]), (c = +e[1][0]), (l = +e[1][1])),
          u())
        : o == null
        ? null
        : [
            [o, s],
            [c, l],
          ];
    });
  function u() {
    var n = R * r(),
      i = t(Be(t.rotate()).invert([0, 0]));
    return a(
      o == null
        ? [
            [i[0] - n, i[1] - n],
            [i[0] + n, i[1] + n],
          ]
        : e === Mn
        ? [
            [Math.max(i[0] - n, o), s],
            [Math.min(i[0] + n, c), l],
          ]
        : [
            [o, Math.max(i[1] - n, s)],
            [c, Math.min(i[1] + n, l)],
          ]
    );
  }
  return u();
}
function Fn(e, t) {
  return [e, t];
}
(Fn.invert = Fn), K(3) / 2;
var In = d(
    `<div class="custom-loading-size svelte-sllj8k"><p>Loading...</p></div>`
  ),
  Ln = e(
    `<path fill="var(--box-color)" stroke="rgba(255, 255, 255, 0.2)" stroke-width="0.5" vector-effect="non-scaling-stroke" class="feature-path svelte-sllj8k"></path>`
  ),
  Rn = e(
    `<line stroke="var(--brand-color)" vector-effect="non-scaling-stroke"></line>`
  ),
  zn = e(
    `<g class="point-feature svelte-sllj8k"><circle fill="var(--overlay-color)"></circle><circle fill="var(--brand-color)" class="point-circle svelte-sllj8k"></circle></g>`
  ),
  Bn = e(
    `<g stroke-linecap="round" stroke-linejoin="round"><path fill="var(--overlay-color)" stroke="var(--overlay-color)" stroke-width="6" class="svelte-sllj8k"></path><line x1="4" x2="4" y1="22" y2="15" stroke="var(--overlay-color)" stroke-width="6"></line><path fill="var(--brand-color)" stroke="var(--brand-color)" stroke-width="2" class="svelte-sllj8k"></path><line x1="4" x2="4" y1="22" y2="15" stroke="var(--brand-color)" stroke-width="2"></line></g>`
  ),
  Vn = e(
    `<circle fill="var(--overlay-color)"></circle><circle fill="var(--brand-color)"></circle>`,
    1
  ),
  Hn = e(
    `<text class="marker-label svelte-sllj8k" x="0" text-anchor="middle" fill="white"> </text>`
  ),
  Un = e(`<g class="marker-feature"><!><!></g>`),
  Wn = e(
    `<svg width="100%" height="100%" fill="white" class="position-relative pointer-events-auto svelte-sllj8k"><g><g></g><g></g><g></g><g></g></g></svg>`
  ),
  Gn = d(`<div><!></div>`);
function Kn(e, d) {
  u(d, !0);
  let C = _(d, `zoom`, 15, 1),
    w = _(d, `width`, 3, 800),
    O = _(d, `height`, 3, 250),
    te = _(d, `framePaddingOffset`, 19, () => ({})),
    re = _(d, `class`, 3, ``),
    ie = `M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z`,
    M = a(void 0),
    ae = a(r([])),
    oe = a(0),
    N = Nn(),
    se = a(r(ln().projection(N))),
    ce = t(
      () => (
        k(oe),
        (d.locationList || []).map(([e, t], n) => {
          let [r, i] = N([t, e]);
          return { lat: e, lon: t, x: r, y: i, uniqueKey: `point-${n}` };
        })
      )
    ),
    le = t(
      () => (
        k(oe),
        (d.markerList || [])
          .map((e, t) => {
            let [n, r] = N([e.lon, e.lat]);
            return {
              ...e,
              x: n,
              y: r,
              uniqueKey: e.uniqueKey ?? `marker-${t}`,
            };
          })
          .sort((e, t) => (e.shape === `flag`) - (t.shape === `flag`))
      )
    ),
    ue = t(
      () => (
        k(oe),
        (d.lineList || []).map((e, t) => {
          let [n, r] = N([e.from.lon, e.from.lat]),
            [i, a] = N([e.to.lon, e.to.lat]);
          return {
            x1: n,
            y1: r,
            x2: i,
            y2: a,
            uniqueKey: e.uniqueKey ?? `line-${t}`,
          };
        })
      )
    ),
    P = 0,
    F = 0,
    I = 0.5,
    de = a(!1);
  async function fe() {
    try {
      let e = await (await fetch(`/json/topojson/world-110m.json`)).json(),
        t,
        n = e?.objects?.countries;
      return e && e.objects && n && (t = ee(e, n)), t;
    } catch (e) {
      console.error(`Error fetching topo json:`, e);
    }
  }
  let L = a(35),
    pe = a(0);
  function R() {
    let e = (Math.min(w(), O()) / 2) * C();
    N.scale(e)
      .center([k(pe), k(L)])
      .translate([P, F]),
      p(se, ln().projection(N), !0),
      l(oe);
  }
  function z() {
    let e = [];
    for (let [t, n] of d.locationList || []) e.push([t, n]);
    for (let t of d.markerList || []) e.push([t.lat, t.lon]);
    for (let t of d.lineList || [])
      e.push([t.from.lat, t.from.lon]), e.push([t.to.lat, t.to.lon]);
    return e;
  }
  function me() {
    let e = 70 + (te().top || 0),
      t = 70 + (te().right || 0),
      n = 70 + (te().bottom || 0),
      r = 70 + (te().left || 0),
      i = z();
    if (i.length === 0) {
      C(1),
        p(L, 35),
        p(pe, 0),
        (P = (r + (w() - t)) / 2),
        (F = (e + (O() - n)) / 2);
      return;
    }
    let a = i.map(([e]) => e),
      o = i.map(([, e]) => e);
    p(L, (Math.min(...a) + Math.max(...a)) / 2),
      p(pe, (Math.min(...o) + Math.max(...o)) / 2),
      C(1),
      (P = (r + (w() - t)) / 2),
      (F = (e + (O() - n)) / 2);
    let s = Math.min(w(), O());
    N.scale(s / 2)
      .center([k(pe), k(L)])
      .translate([P, F]);
    let c = i.map(([e, t]) => N([t, e])),
      l = c.map(([e]) => e),
      u = c.map(([, e]) => e),
      d = Math.max(...l) - Math.min(...l),
      f = Math.max(...u) - Math.min(...u),
      m = Math.max(1, w() - r - t),
      h = Math.max(1, O() - e - n),
      g = Math.min(m / Math.max(d, 1), h / Math.max(f, 1));
    C(Math.max(I, Math.min(20, g)));
  }
  function B() {
    p(
      ae,
      k(ae)
        .map((e, t) => {
          let n = k(se)(e);
          return n ? { ...e, d: n, uniqueKey: `feature-${t}` } : null;
        })
        .filter(Boolean),
      !0
    );
  }
  let V = !1,
    H,
    U;
  function he(e) {
    e.preventDefault();
    let t = k(M).getBoundingClientRect(),
      n = (e.clientX - t.left) * (w() / t.width),
      r = (e.clientY - t.top) * (O() / t.height),
      i = e.deltaY > 0 ? -1 : 1,
      a = Math.abs(e.deltaY) < 50,
      o;
    o = a ? 1 + i * 0.05 : Math.exp(i * 0.1);
    let s = C();
    C(Math.max(I, Math.min(20, C() * o)));
    let c = C() / s;
    (P -= (n - P) * (c - 1)), (F -= (r - F) * (c - 1)), R(), B();
  }
  function ge(e) {
    (V = !0), (H = e.clientX), (U = e.clientY);
  }
  function W(e) {
    if (!V) return;
    let t = k(M).getBoundingClientRect();
    (P += (e.clientX - H) * (w() / t.width)),
      (F += (e.clientY - U) * (O() / t.height)),
      (H = e.clientX),
      (U = e.clientY),
      R(),
      B();
  }
  function _e() {
    V = !1;
  }
  let ve = !1,
    G = null;
  function ye(e) {
    if ((e.stopPropagation(), e.touches.length === 1)) {
      ve = !0;
      let t = e.touches[0];
      (H = t.clientX), (U = t.clientY), (G = null);
    } else e.touches.length === 2 && ((ve = !1), (G = xe(e.touches)));
  }
  function K(e) {
    if ((e.stopPropagation(), ve && e.touches.length === 1)) {
      e.preventDefault();
      let t = k(M).getBoundingClientRect(),
        n = e.touches[0],
        r = n.clientX - H,
        i = n.clientY - U;
      (P += r * (w() / t.width)),
        (F += i * (O() / t.height)),
        (H = n.clientX),
        (U = n.clientY),
        R(),
        B();
    } else if (e.touches.length === 2) {
      let t = xe(e.touches);
      if (G) {
        let n = 1 + (t - G) / G,
          r = (e.touches[0].clientX + e.touches[1].clientX) / 2,
          i = (e.touches[0].clientY + e.touches[1].clientY) / 2,
          a = k(M).getBoundingClientRect(),
          o = (r - a.left) * (w() / a.width),
          s = (i - a.top) * (O() / a.height),
          c = Math.min(20, Math.max(I, C() * n)),
          l = c / C();
        (P -= (o - P) * (l - 1)), (F -= (s - F) * (l - 1)), C(c), R(), B();
      }
      G = t;
    }
  }
  function be() {
    (ve = !1), (G = null);
  }
  function xe(e) {
    let t = e[0].clientX - e[1].clientX,
      n = e[0].clientY - e[1].clientY;
    return Math.sqrt(t * t + n * n);
  }
  E(
    () => (
      k(M).addEventListener(`touchstart`, ye),
      k(M).addEventListener(`touchmove`, K),
      k(M).addEventListener(`touchend`, be),
      k(M).addEventListener(`gesturestart`, (e) => e.preventDefault()),
      k(M).addEventListener(`gesturechange`, (e) => e.preventDefault()),
      k(M).addEventListener(`gestureend`, (e) => e.preventDefault()),
      () => {
        k(M).removeEventListener(`touchstart`, ye),
          k(M).removeEventListener(`touchmove`, K),
          k(M).removeEventListener(`touchend`, be);
      }
    )
  );
  function q() {
    me(), R(), B();
  }
  E(async () => {
    let e = await fe();
    e && (p(ae, e.features, !0), (J = JSON.stringify(z())), q(), p(de, !0));
  });
  let J = ``;
  b(() => {
    let e = JSON.stringify(z());
    k(ae).length && e !== J && ((J = e), q(), p(de, !0));
  });
  let Y = t(() => (ne.current && ne.current < 500 ? 2.5 : 1));
  var Se = Gn(),
    Ce = j(Se),
    we = (e) => {
      var t = In();
      g(e, t);
    },
    Te = (e) => {
      var t = Wn(),
        r = j(t),
        a = j(r);
      h(
        a,
        21,
        () => k(ae),
        (e) => e.uniqueKey,
        (e, t, n, r) => {
          var a = Ln();
          S(() => i(a, `d`, k(t).d)), g(e, a);
        }
      ),
        m(a);
      var s = f(a);
      h(
        s,
        21,
        () => k(ue),
        (e) => e.uniqueKey,
        (e, t) => {
          var n = Rn();
          S(() => {
            i(n, `x1`, k(t).x1),
              i(n, `y1`, k(t).y1),
              i(n, `x2`, k(t).x2),
              i(n, `y2`, k(t).y2),
              i(n, `stroke-width`, 1.5 * k(Y)),
              i(n, `stroke-dasharray`, 4 * k(Y) + ` ` + 3 * k(Y));
          }),
            g(e, n);
        }
      ),
        m(s);
      var c = f(s);
      h(
        c,
        21,
        () => k(ce),
        (e) => e.uniqueKey,
        (e, t) => {
          var n = zn(),
            r = j(n),
            a = f(r);
          m(n),
            S(() => {
              i(n, `transform`, `translate(${k(t).x},${k(t).y})`),
                i(r, `r`, 7 * k(Y)),
                i(a, `r`, 5 * k(Y));
            }),
            D(`click`, n, () => d.onclick?.({ lat: k(t).lat, lon: k(t).lon })),
            g(e, n);
        }
      ),
        m(c);
      var l = f(c);
      h(
        l,
        21,
        () => k(le),
        (e) => e.uniqueKey,
        (e, t) => {
          var r = Un(),
            a = j(r),
            s = (e) => {
              var t = Bn(),
                r = j(t);
              i(r, `d`, ie);
              var a = f(r, 2);
              i(a, `d`, ie),
                n(),
                m(t),
                S(() =>
                  i(
                    t,
                    `transform`,
                    `translate(${-3.2 * k(Y) + ` ,` + -17.6 * k(Y)}) scale(${
                      0.8 * k(Y)
                    })`
                  )
                ),
                g(e, t);
            },
            c = (e) => {
              var t = Vn(),
                n = y(t),
                r = f(n);
              S(() => {
                i(n, `r`, 7 * k(Y)), i(r, `r`, 5 * k(Y));
              }),
                g(e, t);
            };
          T(a, (e) => {
            k(t).shape === `flag` ? e(s) : e(c, -1);
          });
          var l = f(a),
            u = (e) => {
              var n = Hn(),
                r = A(n, !0);
              S(
                (e) => {
                  i(n, `font-size`, 18 * k(Y) + `px`),
                    i(n, `y`, k(t).shape === `flag` ? -22 * k(Y) : -14 * k(Y)),
                    o(r, e);
                },
                [
                  () =>
                    k(t).label.length > 12
                      ? k(t).label.slice(0, 12) + `…`
                      : k(t).label,
                ]
              ),
                g(e, n);
            };
          T(l, (e) => {
            k(t).label && e(u);
          }),
            m(r),
            S(() => i(r, `transform`, `translate(${k(t).x},${k(t).y})`)),
            g(e, r);
        }
      ),
        m(l),
        m(r),
        m(t),
        S(() => i(t, `viewBox`, `0 0 ${w()} ${O()}`)),
        x(`wheel`, t, he),
        D(`mousedown`, t, ge),
        D(`mousemove`, t, W),
        D(`mouseup`, t, _e),
        x(`mouseleave`, t, _e),
        g(e, t);
    };
  T(Ce, (e) => {
    k(de) ? e(Te, -1) : e(we);
  }),
    m(Se),
    v(
      Se,
      (e) => p(M, e),
      () => k(M)
    ),
    S(() => s(Se, 1, `map-container ${re() ?? ``}`, `svelte-sllj8k`)),
    g(e, Se),
    c();
}
C([`mousedown`, `mousemove`, `mouseup`, `click`]);
export { N as n, M as r, Kn as t };
