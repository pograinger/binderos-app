import { d as h } from "./index-DwiQ5yRy.js";
import { powerIteration as q } from "./graph-health-CqVUZEAn.js";
const A = 3, _ = 10, k = 14;
function D(o) {
  if (o.length === 0) throw new Error("buildCovariance requires at least one signature");
  const e = o[0].length;
  for (let t = 1; t < o.length; t++) if (o[t].length !== e) throw new Error("buildCovariance requires signatures of equal length");
  const n = o.filter((t) => !t.some((l) => Number.isNaN(l))), a = new Array(e * e).fill(0);
  if (n.length === 0 || n.length === 1) return a;
  const r = n.length, s = n[0];
  if (n.every((t) => t.every((l, m) => Math.abs(l - s[m]) < 1e-12))) return a;
  const c = new Array(e * e).fill(0);
  for (const t of n) for (let l = 0; l < e; l++) for (let m = l; m < e; m++) c[l * e + m] += t[l] * t[m];
  const d = r - 1;
  for (let t = 0; t < e; t++) for (let l = t; l < e; l++) {
    const m = c[t * e + l] / d;
    c[t * e + l] = m, c[l * e + t] = m;
  }
  return c;
}
function R(o, e) {
  if (e === 0) return { eigenvalues: [], eigenvectors: [] };
  const n = Math.round(Math.sqrt(o.length)), a = o.slice(), r = [], s = [];
  for (let i = 0; i < e; i++) {
    const { value: c, vector: d } = q(a, n);
    if (Math.abs(c) < 1e-12) {
      r.push(0), s.push(new Array(n).fill(0));
      break;
    }
    let t = d.slice();
    for (const u of s) {
      const f = t.reduce((g, b, E) => g + b * u[E], 0);
      t = t.map((g, b) => g - f * u[b]);
    }
    const l = Math.sqrt(t.reduce((u, f) => u + f * f, 0));
    l > 1e-12 && (t = t.map((u) => u / l));
    const m = new Array(n).fill(0);
    for (let u = 0; u < n; u++) {
      let f = 0;
      for (let g = 0; g < n; g++) f += a[u * n + g] * t[g];
      m[u] = f;
    }
    const C = t.reduce((u, f, g) => u + f * m[g], 0);
    r.push(C), s.push(t);
    for (let u = 0; u < n; u++) for (let f = 0; f < n; f++) a[u * n + f] -= C * t[u] * t[f];
  }
  for (let i = 0; i < r.length; i++) {
    Number.isNaN(r[i]) && (r[i] = 0);
    const c = s[i];
    for (let d = 0; d < c.length; d++) Number.isNaN(c[d]) && (c[d] = 0);
  }
  return { eigenvalues: r, eigenvectors: s };
}
async function P(o) {
  const e = await h.atoms.get(o);
  if (!e || e.type !== "chunk") return [];
  const n = e.parentMessageId;
  return n ? (await h.atoms.where("parentMessageId").equals(n).toArray()).map((r) => r.compoundStateSignature).filter((r) => Array.isArray(r) && r.length === k && !r.some((s) => Number.isNaN(s))) : [];
}
async function K(o) {
  const n = (await h.atomIntelligence.toArray()).filter((r) => r.entityMentions.some((s) => s.entityId === o)), a = [];
  for (const r of n) {
    const s = await h.atoms.get(r.atomId);
    if (s) if (s.type === "chunk") {
      const i = s.compoundStateSignature;
      Array.isArray(i) && i.length === k && !i.some((c) => Number.isNaN(c)) && a.push(i);
    } else {
      const i = await h.atoms.where("parentMessageId").equals(r.atomId).toArray();
      for (const c of i) {
        if (c.type !== "chunk") continue;
        const d = c.compoundStateSignature;
        Array.isArray(d) && d.length === k && !d.some((t) => Number.isNaN(t)) && a.push(d);
      }
    }
  }
  return a;
}
async function S(o, e = A) {
  const n = [];
  for (const a of o) try {
    const r = await h.atoms.get(a);
    let s, i;
    if (r && r.type === "chunk") s = "chunk", i = await P(a);
    else {
      if (!await h.entities.get(a)) continue;
      s = "entity", i = await K(a);
    }
    if (i.length < _) continue;
    let c;
    try {
      c = D(i);
    } catch {
      continue;
    }
    const { eigenvalues: d, eigenvectors: t } = R(c, e);
    n.push({ sourceId: a, sourceType: s, eigenvectors: t, eigenvalues: d, computedAt: Date.now(), k: e });
  } catch {
    continue;
  }
  return n;
}
const p = 50, L = 3e4;
let M = false, v = false, T = false, I = 0, y = null, N = 0;
typeof globalThis.requestIdleCallback > "u" && (globalThis.requestIdleCallback = (o, e) => {
  const n = Date.now();
  return window.setTimeout(() => {
    o({ didTimeout: false, timeRemaining: () => Math.max(0, 50 - (Date.now() - n)) });
  }, (e == null ? void 0 : e.timeout) ?? 1);
}, globalThis.cancelIdleCallback = (o) => clearTimeout(o));
async function j() {
  if (y === null) {
    const n = await h.atoms.where("type").equals("chunk").primaryKeys(), a = (await h.entities.toArray()).map((r) => r.id);
    y = [...n, ...a], console.log(`[centroid-covariance-worker] bootstrap started: ${y.length} candidates (${n.length} chunks, ${a.length} entities)`);
  }
  const o = y.slice(I, I + p);
  if (o.length === 0) {
    T = true, console.log(`[centroid-covariance-worker] bootstrap complete: ${y.length} candidates processed`);
    return;
  }
  const e = await S(o, A);
  e.length > 0 && await h.centroidCovariance.bulkPut(e), I += p;
}
async function x() {
  const o = await h.atoms.where("updated_at").above(N).and((a) => a.type === "chunk").limit(p).primaryKeys(), e = await h.entities.where("updatedAt").above(N).limit(p).primaryKeys(), n = [...o, ...e];
  if (n.length > 0) {
    const a = await S(n, A);
    a.length > 0 && await h.centroidCovariance.bulkPut(a);
  }
  N = Date.now();
}
async function O() {
  T ? await x() : await j();
}
function w() {
  v || (v = true, requestIdleCallback(async (o) => {
    if (v = false, !(typeof document < "u" && document.visibilityState === "hidden")) {
      if (o.timeRemaining() < 5 && !o.didTimeout) {
        w();
        return;
      }
      try {
        await O();
      } catch (e) {
        console.warn("[centroid-covariance-worker] pass failed", e);
      }
      w();
    }
  }, { timeout: L }));
}
function U() {
  M || (M = true, w(), typeof document < "u" && document.addEventListener("visibilitychange", () => {
    document.visibilityState === "visible" && w();
  }));
}
export {
  U as registerCentroidCovarianceWorker
};
