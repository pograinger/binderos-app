const V = 10, $ = 5e-3, D = 50;
const I = [[0, 7], [8, 13], [14, 21], [22, 27], [28, 35], [36, 39], [40, 43], [44, 47]];
function G(o, e, r, n, a) {
  const i = o.filter((h) => h.active), { L: f, n: c, degrees: s, totalEdges: l } = S(i);
  let t = 0, u = 0, d = 0;
  if (c >= 2 && l > 0) {
    const h = b(f, c);
    t = h.lambdaMax, u = h.fiedler, d = O(u, t);
  }
  const g = C(s, l), { avg: m, max: v } = N(i), w = j(r), A = R(n);
  return { fiedler: u, entropy: g, inferenceDepth: m, maxInferenceDepth: v, clusteringCoeff: w, spectralGap: d, centroidCoverage: A };
}
function S(o) {
  const e = /* @__PURE__ */ new Set();
  for (const t of o) t.subject !== t.object && (e.add(t.subject), e.add(t.object));
  const r = Array.from(e), n = r.length, a = /* @__PURE__ */ new Map();
  if (r.forEach((t, u) => a.set(t, u)), n === 0) return { L: [], n: 0, degrees: [], totalEdges: 0, nodes: [] };
  const i = new Array(n * n).fill(0), f = /* @__PURE__ */ new Set();
  for (const t of o) {
    if (t.subject === t.object) continue;
    const u = a.get(t.subject), d = a.get(t.object), g = u < d ? `${u}:${d}` : `${d}:${u}`;
    f.has(g) || (f.add(g), i[u * n + d] = 1, i[d * n + u] = 1);
  }
  const c = f.size, s = new Array(n).fill(0);
  for (let t = 0; t < n; t++) {
    let u = 0;
    for (let d = 0; d < n; d++) u += i[t * n + d];
    s[t] = u;
  }
  const l = new Array(n * n).fill(0);
  for (let t = 0; t < n; t++) {
    l[t * n + t] = s[t];
    for (let u = 0; u < n; u++) t !== u && (l[t * n + u] = -i[t * n + u]);
  }
  return { L: l, n, degrees: s, totalEdges: c, nodes: r };
}
function E(o, e) {
  let r = new Array(e).fill(0);
  for (let c = 0; c < e; c++) r[c] = c % 3 === 0 ? 1 : c % 3 === 1 ? 0.7 : 0.3;
  r = _(r);
  let n = 0, a = 0;
  for (let c = 0; c < 50; c++) {
    const s = y(o, r, e), l = p(r, s), t = M(s);
    if (t < 1e-12) break;
    if (r = s.map((u) => u / t), Math.abs(l - n) < 5e-3) {
      if (a++, a >= 10) break;
    } else a = 0;
    n = l;
  }
  const i = y(o, r, e);
  return { value: p(r, i), vector: r };
}
function b(o, e) {
  if (!x(o, e)) return { fiedler: 0, lambdaMax: 0 };
  const { value: r, vector: n } = E(o, e);
  if (r < 1e-12) return { fiedler: 0, lambdaMax: 0 };
  const a = new Array(e * e).fill(0);
  for (let l = 0; l < e; l++) for (let t = 0; t < e; t++) a[l * e + t] = (l === t ? r : 0) - o[l * e + t];
  const { value: i } = E(a, e), f = a.slice();
  for (let l = 0; l < e; l++) for (let t = 0; t < e; t++) f[l * e + t] -= i * n[l] * n[t];
  const { value: c } = E(f, e);
  return { fiedler: Math.max(0, r - c), lambdaMax: r };
}
function x(o, e) {
  if (e <= 1) return false;
  const r = new Array(e).fill(false), n = [0];
  r[0] = true;
  let a = 1;
  for (; n.length > 0; ) {
    const i = n.shift();
    for (let f = 0; f < e; f++) !r[f] && o[i * e + f] < 0 && (r[f] = true, a++, n.push(f));
  }
  return a === e;
}
function C(o, e) {
  if (e === 0) return 0;
  const r = 2 * e;
  let n = 0;
  for (const a of o) {
    if (a === 0) continue;
    const i = a / r;
    n -= i * Math.log2(i);
  }
  return Math.max(0, n);
}
function N(o) {
  if (o.length === 0) return { avg: 0, max: 0 };
  const e = /* @__PURE__ */ new Map();
  for (const i of o) e.set(i.id, i);
  function r(i, f) {
    if (f.has(i)) return 0;
    const c = e.get(i);
    if (!c) return 0;
    f.add(i);
    const s = c.source;
    if (s.type === "direct" || s.type === "ner" || s.type === "corrected" || s.type === "webllm") return 0;
    if (s.type === "inferred") return 1;
    if (s.type === "chain-inferred") {
      if (!s.evidence || s.evidence.length === 0) return 1;
      const l = s.evidence.map((t) => r(t, new Set(f)));
      return 1 + Math.max(...l);
    }
    return 0;
  }
  let n = 0, a = 0;
  for (const i of o) {
    const f = r(i.id, /* @__PURE__ */ new Set());
    n += f, a = Math.max(a, f);
  }
  return { avg: n / o.length, max: a };
}
function j(o) {
  if (o.length === 0) return 0;
  const e = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set();
  for (const c of o) {
    e.add(c.sourceEntityId), e.add(c.targetEntityId);
    const s = c.sourceEntityId < c.targetEntityId ? `${c.sourceEntityId}:${c.targetEntityId}` : `${c.targetEntityId}:${c.sourceEntityId}`;
    r.add(s);
  }
  const n = Array.from(e), a = /* @__PURE__ */ new Map();
  for (const c of n) a.set(c, /* @__PURE__ */ new Set());
  for (const c of r) {
    const [s, l] = c.split(":");
    a.get(s).add(l), a.get(l).add(s);
  }
  let i = 0, f = 0;
  for (const c of n) {
    const s = Array.from(a.get(c)), l = s.length;
    if (!(l < 2)) {
      f += l * (l - 1) / 2;
      for (let t = 0; t < s.length; t++) for (let u = t + 1; u < s.length; u++) {
        const d = s[t], g = s[u], m = d < g ? `${d}:${g}` : `${g}:${d}`;
        r.has(m) && i++;
      }
    }
  }
  return f === 0 ? 0 : i / f;
}
function O(o, e) {
  return e < 1e-12 ? 0 : Math.min(1, Math.max(0, o / e));
}
function R(o) {
  if (o.length < 2) return 0;
  const e = [];
  for (const [n, a] of I) {
    const i = a - n + 1;
    let f = 0;
    for (let c = n; c <= a; c++) {
      let s = 0;
      for (const d of o) s += d[c] ?? 0;
      const l = s / o.length;
      let t = 0;
      for (const d of o) {
        const g = (d[c] ?? 0) - l;
        t += g * g;
      }
      const u = t / o.length;
      f += u;
    }
    f /= i, e.push(Math.min(1, f / 0.25));
  }
  const r = e.reduce((n, a) => n + a, 0) / e.length;
  return Math.min(1, Math.max(0, r));
}
function y(o, e, r) {
  const n = new Array(r).fill(0);
  for (let a = 0; a < r; a++) {
    let i = 0;
    for (let f = 0; f < r; f++) i += o[a * r + f] * e[f];
    n[a] = i;
  }
  return n;
}
function p(o, e) {
  let r = 0;
  for (let n = 0; n < o.length; n++) r += o[n] * e[n];
  return r;
}
function M(o) {
  return Math.sqrt(p(o, o));
}
function _(o) {
  const e = M(o);
  return e < 1e-12 ? o : o.map((r) => r / e);
}
export {
  $ as CONVERGENCE_THRESHOLD,
  V as CONVERGENCE_WINDOW,
  D as MAX_POWER_ITERATIONS,
  G as computeGraphHealth,
  p as dot,
  y as matVec,
  _ as normalizeVec,
  E as powerIteration,
  M as vecNorm
};
