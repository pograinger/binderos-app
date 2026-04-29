import { d as u, c as D } from "./index-DwiQ5yRy.js";
typeof globalThis.requestIdleCallback > "u" && (globalThis.requestIdleCallback = (t, o) => {
  const n = Date.now();
  return window.setTimeout(() => {
    t({ didTimeout: false, timeRemaining: () => Math.max(0, 50 - (Date.now() - n)) });
  }, (o == null ? void 0 : o.timeout) ?? 1);
}, globalThis.cancelIdleCallback = (t) => clearTimeout(t));
let w = false, A = false;
const O = 336 * 60 * 60 * 1e3, T = 0.3, E = 3e4, g = 1800 * 1e3, _ = 3, C = 3, R = 0.6, N = 0.5, b = "behavioral", I = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function a(t) {
  return t !== null && t.timeRemaining() < 5;
}
async function M(t) {
  const o = await S(t);
  o > 0 && console.log(`[consolidation] Pruned ${o} stale assertions`);
}
async function S(t) {
  if (a(t)) return 0;
  const o = Date.now() - O, i = (await u.assertions.where("confidence").below(T).toArray()).filter((e) => e.learnedAt < o && e.lastCorroboratedAt === e.learnedAt && e.active === true);
  let s = 0;
  for (const e of i) {
    if (a(t)) break;
    await u.assertions.update(e.id, { active: false }), s++;
  }
  return s;
}
async function $(t) {
  return S(t);
}
function j(t) {
  const o = [...t].sort((i, s) => i - s), n = [];
  for (const i of o) (n.length === 0 || i - n[n.length - 1] > g) && n.push(i);
  return n;
}
function k(t) {
  if (t.length < C) return null;
  const o = [0, 0, 0, 0, 0, 0, 0];
  for (const s of t) {
    const e = new Date(s).getDay();
    o[e]++;
  }
  const n = Math.max(...o), i = n / t.length;
  if (i >= R) {
    const s = o.indexOf(n);
    return { dayName: I[s], ratio: i };
  }
  return null;
}
async function v(t) {
  if (a(t)) return;
  const o = await u.assertions.filter((e) => e.active === true).toArray();
  if (a(t)) return;
  const n = /* @__PURE__ */ new Map();
  for (const e of o) {
    const r = n.get(e.subject) ?? [];
    r.push(e), n.set(e.subject, r);
  }
  const i = /* @__PURE__ */ new Map();
  for (const [e, r] of n) {
    const f = r.map((l) => l.learnedAt);
    i.set(e, j(f));
  }
  if (a(t)) return;
  const s = [...n.keys()];
  for (let e = 0; e < s.length - 1 && !a(t); e++) {
    const r = s[e], f = i.get(r) ?? [];
    for (let l = e + 1; l < s.length && !a(t); l++) {
      const c = s[l], y = i.get(c) ?? [];
      let h = 0;
      for (const p of f) for (const d of y) if (Math.abs(p - d) <= g) {
        h++;
        break;
      }
      if (h >= _ && !await u.assertions.filter((d) => d.predicate === "co-occurs-with" && d.subject === r && d.object === c && d.category === b).first()) {
        const d = Date.now();
        await u.assertions.put({ id: crypto.randomUUID(), subject: r, predicate: "co-occurs-with", object: c, category: b, confidence: N, source: { type: "inferred", rule: "co-occurrence-detection", evidence: [] }, learnedAt: d, lastCorroboratedAt: d, active: true }), console.log(`[consolidation] Detected co-occurrence pattern: ${r} \u2194 ${c} (${h} sessions)`);
      }
    }
  }
  if (!a(t)) for (const [e, r] of i) {
    if (a(t)) break;
    if (r.length < C) continue;
    const f = k(r);
    if (!f) continue;
    if (!await u.assertions.filter((c) => c.predicate === "recurring-rhythm" && c.subject === e && c.category === b).first()) {
      const c = Date.now();
      await u.assertions.put({ id: crypto.randomUUID(), subject: e, predicate: "recurring-rhythm", object: f.dayName, category: b, confidence: Math.min(1, f.ratio), source: { type: "inferred", rule: "rhythm-detection", evidence: [] }, learnedAt: c, lastCorroboratedAt: c, active: true }), console.log(`[consolidation] Detected rhythm: ${e} recurs on ${f.dayName} (${Math.round(f.ratio * 100)}%)`);
    }
  }
}
const L = 3600 * 1e3, P = 0.3;
async function B(t) {
  if (a(t)) return;
  const [o, n] = await Promise.all([u.entityDriftSnapshot.toArray(), u.entities.toArray()]);
  if (o.length === 0) return;
  const i = D(o, n);
  if (a(t)) return;
  const s = Date.now();
  for (const e of i) {
    if (a(t)) break;
    let r = 1;
    if (e.specificityTrend === "increasing" ? r = 1.1 : e.specificityTrend === "decreasing" && (r = 0.95), e.specificityTrend === "increasing" && e.trendStrength > P && await u.entities.update(e.entityId, { driftBoosted: true, driftBoostedAt: s }), r === 1) continue;
    const f = await u.assertions.where("subject").equals(e.canonicalName).filter((l) => l.active === true).toArray();
    for (const l of f) {
      if (a(t)) break;
      if ((l.driftFeedbackAppliedAt ?? 0) > s - L) continue;
      const y = Math.min(1, l.confidence * r);
      await u.assertions.update(l.id, { confidence: y, driftFeedbackAppliedAt: s });
    }
  }
}
const x = 1440 * 60 * 1e3, F = 0.05;
async function H(t) {
  if (a(t)) return;
  const o = Date.now(), n = o - x, [i, s] = await Promise.all([u.atoms.filter((e) => !e.deleted && e.createdAt >= n).toArray(), u.assertions.filter((e) => e.active === true).toArray()]);
  if (!(i.length === 0 || s.length === 0) && !a(t)) for (const e of s) {
    if (a(t)) break;
    const r = e.subject.toLowerCase(), f = e.object.toLowerCase();
    if (i.find((c) => {
      const y = c.body.toLowerCase();
      return y.includes(r) && y.includes(f) && c.createdAt > e.lastCorroboratedAt;
    })) {
      const c = Math.min(1, e.confidence + F);
      await u.assertions.update(e.id, { lastCorroboratedAt: o, confidence: c });
    }
  }
}
async function m(t) {
  if (!A) {
    A = true;
    try {
      await M(t), await v(t), await B(t), await H(t);
    } finally {
      A = false;
    }
  }
}
function Y() {
  function t() {
    w || (w = true, requestIdleCallback(async (o) => {
      w = false, await m(o);
    }, { timeout: E }));
  }
  t(), document.addEventListener("visibilitychange", () => {
    document.visibilityState === "hidden" ? m(null) : t();
  }), window.addEventListener("pagehide", () => {
    m(null);
  }), window.addEventListener("pageshow", (o) => {
    (o.persisted || !document.hidden) && t();
  });
}
export {
  $ as pruneStaleAssertions,
  Y as registerMemoryConsolidationWorker
};
