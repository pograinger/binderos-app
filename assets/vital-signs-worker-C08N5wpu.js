import { d as C, W as ht } from "./index-DwiQ5yRy.js";
const vt = 3, mt = "2026-04-10T00:00:00Z", yt = { identityAttractor: { dReference: 2.279, dMinFraction: 0.97, dReferenceSource: ".planning/phases/149-identity-attractor-validation/149-baseline.json" }, fleetExpectedClassifiers: ["classifiers/actionability", "classifiers/action-router", "classifiers/affordance-type", "classifiers/assertion-gap-detector", "classifiers/assertion-gap-detector-structural", "classifiers/binder-type-alignment", "classifiers/cognitive-load", "classifiers/cognitive-load-pass2", "classifiers/cognitive-load-wide", "classifiers/collaboration-type", "classifiers/collaboration-type-wide", "classifiers/completeness-gate", "classifiers/complexity-level", "classifiers/context-tagging", "classifiers/decomposition", "classifiers/decomposition-pattern", "classifiers/discovered-104_ed_response_pairs-compound_state-6", "classifiers/discovered-104_synthetic_pairs-compound_state-4", "classifiers/discovered-107_project_pairs-compound_state-1", "classifiers/discovered-107_project_pairs-compound_state-8", "classifiers/discovered-111_merged_all-compound_state-2", "classifiers/discovered-113_attractor_pairs-compound_state-1", "classifiers/discovered-113_attractor_pairs-compound_state-2", "classifiers/discovered-113_attractor_pairs-compound_state-3", "classifiers/discovered-113_attractor_pairs-compound_state-4", "classifiers/discovered-113_attractor_pairs-compound_state-5", "classifiers/discovered-115_merged_all-compound_state-7", "classifiers/emotional-valence", "classifiers/emotional-valence-pass2", "classifiers/energy-level", "classifiers/energy-level-pass2", "classifiers/gtd-horizon", "classifiers/gtd-horizon-wide", "classifiers/gtd-routing", "classifiers/implied-intent", "classifiers/implied-intent-structural", "classifiers/information-completeness", "classifiers/information-lifecycle", "classifiers/information-lifecycle-wide", "classifiers/knowledge-domain", "classifiers/knowledge-domain-wide", "classifiers/missing-context", "classifiers/missing-next-action", "classifiers/missing-outcome", "classifiers/missing-reference", "classifiers/missing-timeframe", "classifiers/prediction-agent", "classifiers/prediction-agent-phase102", "classifiers/priority-matrix", "classifiers/priority-matrix-wide", "classifiers/project-detection", "classifiers/relationship-context", "classifiers/response-coherence", "classifiers/response-emotional-alignment", "classifiers/response-question-appropriateness", "classifiers/response-repetition", "classifiers/review-cadence", "classifiers/review-cadence-wide", "classifiers/situation-dynamics", "classifiers/situation-dynamics-positional", "classifiers/situation-dynamics-structural", "classifiers/situation-type", "classifiers/temporal-urgency", "classifiers/time-estimate", "classifiers/time-estimate-wide", "classifiers/tone-selector", "classifiers/triage-type"], centroidDimensionality: 218, crdtSyncMaxLagMs: 5e3, consolidationMaxBacklogPct: 0.1 }, _t = { maxDeadDimFraction: 0.05, minClassifierUtilizationPct: 0.2, blindspotBudget: 10 }, wt = { entityStalenessHalfLifeDays: 30, maxStaleEntityFraction: 0.25 }, Mt = { minPairwiseSeparationMean: 0.6, minCompoundStateEntropyBits: 6 }, St = { maxLagRatio: 1.5, windowDays: 7 }, Et = { maxMeanSurprise: 0.35, rollingWindowEvents: 200 }, Dt = { maxOpenBlindspots: 10, maxMeanAgeDays: 14 }, Ct = { vs1: 1, vs2: 1, vs3: 1, vs4: 1, vs5: 2, vs6: 1, vs7: 1 }, It = { stressorCountThreshold: 5, stressorPersistenceDays: 7, lowConfidenceThreshold: 0.6, lowConfidenceWindowEvents: 50, coldStartMinConversations: 30, backoffFailureCountBeforeCooldown: 3, backoffCooldownDays: 14, shadowIntegrationDays: 7, maxStagedClassifiers: 5, maxGrowthAttemptsPerDay: 1, autonomousShipEnabled: false }, $ = { schemaVersion: vt, capturedAt: mt, integrity: yt, coverage: _t, freshness: wt, resolution: Mt, responsiveness: St, prediction: Et, blindspot: Dt, weights: Ct, growth: It };
function bt(e, s) {
  let n = 0;
  const i = Math.min(e.length, s.length);
  for (let t = 0; t < i; t++) n += e[t] * s[t];
  return Math.max(0, Math.min(1, 1 - n));
}
function xt(e) {
  if (e.length === 0) return 0;
  let s = 0;
  for (const n of e) s += n;
  return s / e.length;
}
function Tt(e, s = 1e-6) {
  if (e.length === 0) throw new Error("computeDeadDimFraction: empty input");
  const n = e[0].length;
  for (const a of e) if (a.length !== n) throw new Error("computeDeadDimFraction: inconsistent row length");
  const i = e.length, t = new Array(n).fill(0);
  for (const a of e) for (let u = 0; u < n; u++) t[u] += a[u];
  for (let a = 0; a < n; a++) t[a] /= i;
  const r = new Array(n).fill(0);
  if (i >= 2) {
    for (const a of e) for (let u = 0; u < n; u++) {
      const l = a[u] - t[u];
      r[u] += l * l;
    }
    for (let a = 0; a < n; a++) r[a] /= i - 1;
  }
  let o = 0;
  for (let a = 0; a < n; a++) r[a] < s && o++;
  return o / n;
}
function it(e) {
  if (e.length === 0) return 0;
  const s = /* @__PURE__ */ new Map();
  for (const t of e) s.set(t, (s.get(t) ?? 0) + 1);
  const n = e.length;
  let i = 0;
  for (const t of s.values()) {
    if (t === 0) continue;
    const r = t / n;
    r > 0 && (i -= r * Math.log2(r));
  }
  return i;
}
function At(e, s = 2e3, n = Math.random) {
  if (e.length === 0) return 0;
  const i = /* @__PURE__ */ new Map();
  for (const l of e) i.has(l.clusterId) || i.set(l.clusterId, []), i.get(l.clusterId).push(l);
  if ([...i.values()].filter((l) => l.length > 1), i.size < 2) return 0;
  const t = [], r = [...i.keys()], o = s, a = Math.max(o * 10, 100);
  let u = 0;
  for (; t.length < o && u < a; ) {
    u++;
    const l = r[Math.floor(n() * r.length)], y = r[Math.floor(n() * r.length)];
    if (l === y) continue;
    const p = i.get(l), _ = i.get(y), I = p[Math.floor(n() * p.length)], f = _[Math.floor(n() * _.length)];
    if (I.type !== f.type) continue;
    const b = bt(I.vec, f.vec);
    t.push(b);
  }
  return t.length === 0 ? 0 : xt(t);
}
function ot(e, s, n) {
  const i = ["vs1", "vs2", "vs3", "vs4", "vs5", "vs6", "vs7"];
  let t = 0;
  for (const r of i) {
    if (n == null ? void 0 : n.has(r)) continue;
    const o = s[r] ?? 1;
    t += o * e[r];
  }
  return t;
}
const Lt = 5;
function Y(e, s) {
  let n = 0;
  const i = Math.min(e.length, s.length);
  for (let t = 0; t < i; t++) n += e[t] * s[t];
  return Math.max(0, Math.min(1, 1 - n));
}
function K(e) {
  if (e.length === 0) return 0;
  let s = 0;
  for (const n of e) s += n;
  return s / e.length;
}
function J(e, s) {
  if (e.length < 2) return 0;
  const n = s ?? K(e);
  let i = 0;
  for (const t of e) i += (t - n) * (t - n);
  return i /= e.length - 1, Math.sqrt(i);
}
function kt(e) {
  const s = e.prng ?? Math.random, n = e.sampleCount, i = /* @__PURE__ */ new Map();
  for (const g of e.entities) i.has(g.clusterId) || i.set(g.clusterId, []), i.get(g.clusterId).push(g);
  const t = [...i.values()].filter((g) => g.length > 1);
  if (t.length < Lt) return { cohensD: 0, withinClusterMean: 0, withinClusterStd: 0, acrossClusterMean: 0, acrossClusterStd: 0, separation: 0, multiMemberClusters: t.length, withinClusterPairs: 0, acrossClusterPairs: 0, sufficientData: false };
  const r = [];
  for (const g of t) for (let w = 0; w < g.length; w++) for (let M = w + 1; M < g.length; M++) {
    const S = Y(g[w].vec, g[M].vec);
    r.push(S);
  }
  const o = [], a = [...i.keys()], u = Math.max(r.length * 5, n);
  let l = 0;
  const y = u * 10;
  for (; o.length < u && l < y; ) {
    l++;
    const g = a[Math.floor(s() * a.length)], w = a[Math.floor(s() * a.length)];
    if (g === w) continue;
    const M = i.get(g), S = i.get(w), x = M[Math.floor(s() * M.length)], F = S[Math.floor(s() * S.length)];
    if (x.type !== F.type) continue;
    const N = Y(x.vec, F.vec);
    o.push(N);
  }
  const p = K(r), _ = J(r, p), I = K(o), f = J(o, I), b = I - p, L = Math.sqrt((_ * _ + f * f) / 2);
  return { cohensD: L > 0 ? b / L : 0, withinClusterMean: p, withinClusterStd: _, acrossClusterMean: I, acrossClusterStd: f, separation: b, multiMemberClusters: t.length, withinClusterPairs: r.length, acrossClusterPairs: o.length, sufficientData: true };
}
const G = 1440 * 60 * 1e3, X = 1e3, Ft = 10, Pt = 10, Z = 10, at = 3, Rt = 5, W = 20, Nt = 20, rt = 20;
let U = null, z = null, q = null, Q = 0, H = null;
async function Bt() {
  if (U !== null && z !== null) return { target: U, hash: z };
  U = $;
  const e = new TextEncoder().encode(JSON.stringify($)), s = await globalThis.crypto.subtle.digest("SHA-256", e);
  return z = Array.from(new Uint8Array(s)).map((n) => n.toString(16).padStart(2, "0")).join(""), { target: U, hash: z };
}
async function ct(e) {
  try {
    await C.vitalSignsSnapshots.put(e);
  } catch (s) {
    console.warn("[vital-signs-orchestrator] persistSnapshot failed", s);
    return;
  }
  if (Q++, Q % Ft === 0) try {
    const s = await C.vitalSignsSnapshots.count();
    if (s <= X) return;
    const n = s - X, i = await C.vitalSignsSnapshots.orderBy("computedAt").limit(n).primaryKeys();
    i.length > 0 && await C.vitalSignsSnapshots.bulkDelete(i);
  } catch (s) {
    console.warn("[vital-signs-orchestrator] retention prune failed", s);
  }
}
function Gt(e) {
  let s = 0;
  for (const i of e) s += i * i;
  const n = Math.sqrt(s);
  return n < 1e-15 ? e.slice() : e.map((i) => i / n);
}
async function tt() {
  const e = await C.entities.toArray(), n = (await C.entityRelations.toArray()).filter((o) => o.relationshipType === "alias-of"), i = /* @__PURE__ */ new Map();
  for (const o of n) i.has(o.sourceEntityId) || i.set(o.sourceEntityId, /* @__PURE__ */ new Set()), i.has(o.targetEntityId) || i.set(o.targetEntityId, /* @__PURE__ */ new Set()), i.get(o.sourceEntityId).add(o.targetEntityId), i.get(o.targetEntityId).add(o.sourceEntityId);
  const t = /* @__PURE__ */ new Map();
  for (const o of e) {
    if (t.has(o.id)) continue;
    const a = /* @__PURE__ */ new Set([o.id]), u = [o.id];
    for (; u.length; ) {
      const y = u.shift(), p = i.get(y);
      if (p) for (const _ of p) a.has(_) || (a.add(_), u.push(_));
    }
    const l = [...a].sort()[0];
    for (const y of a) t.set(y, l);
  }
  const r = [];
  for (const o of e) {
    if (!o.signalEmbedding || o.signalEmbedding.length === 0) continue;
    const a = Gt(o.signalEmbedding);
    r.push({ id: o.id, clusterId: t.get(o.id) ?? o.id, type: o.type, vec: a });
  }
  return r;
}
async function Ut(e, s, n) {
  const i = (n == null ? void 0 : n.mode) ?? "full", { target: t, hash: r } = await Bt();
  if (i === "fast" && q !== null && H !== null) return zt(e, s, t, r, q, H);
  const o = Date.now(), a = await C.entities.toArray(), u = o - 30 * G, l = a.filter((d) => {
    const c = d.lastSeen ?? 0;
    return c > u || c === 0;
  }), y = await C.atoms.where("type").equals("chunk").limit(1e3).toArray(), p = { vs1_coverageGap: true, vs2_freshnessDecay: true, vs3_resolutionLoss: true, vs4_responsivenessLag: true, vs5_integrityDrift: true, vs6_predictionError: true, vs7_blindspotInventory: true };
  let _ = 0, I = 0, f = 0, b = 0;
  {
    const d = [];
    for (const R of y) {
      const P = R;
      P.compoundStateSignature && P.compoundStateSignature.length === 14 && d.push(P.compoundStateSignature);
    }
    const c = d.length >= Z, m = s.fleet.size() >= at;
    let v = 0;
    c && (v = Tt(d) / t.coverage.maxDeadDimFraction), _ = v;
    let E = 0;
    m && (E = s.fleet.getBelowThreshold(t.coverage.minClassifierUtilizationPct).length / Math.max(1, s.fleet.size()));
    let h = 0;
    try {
      h = await C.blindspots.where("closedAt").equals(0).count();
    } catch {
      h = 0;
    }
    const D = Math.max(0, h - t.coverage.blindspotBudget) / t.coverage.blindspotBudget;
    I = D, !c && !m ? (p.vs1_coverageGap = false, b = 0) : b = v + E + D;
  }
  let L = 0;
  if (l.length < Pt) p.vs2_freshnessDecay = false;
  else {
    const d = t.freshness.entityStalenessHalfLifeDays * G, c = o - 2 * d;
    let m = 0;
    for (const E of l) {
      const h = E.lastSeen ?? 0;
      h > 0 && h < c && m++;
    }
    L = m / l.length / t.freshness.maxStaleEntityFraction;
  }
  let k = 0;
  {
    const d = await tt(), c = /* @__PURE__ */ new Map();
    for (const T of d) c.set(T.clusterId, (c.get(T.clusterId) ?? 0) + 1);
    const m = [...c.values()].filter((T) => T > 1).length;
    let v = 0, E = 0;
    if (m >= 2) {
      const T = d.map((A) => ({ vec: A.vec, type: A.type, clusterId: A.clusterId }));
      E = At(T), v = Math.max(0, t.resolution.minPairwiseSeparationMean - E);
    }
    f = v;
    const h = s.compoundStates.getLabels();
    let D = 0;
    if (h.length >= W) {
      const T = it(h);
      D = Math.max(0, t.resolution.minCompoundStateEntropyBits - T) / t.resolution.minCompoundStateEntropyBits;
    }
    const R = m >= Rt, P = h.length >= W;
    !R && !P ? (p.vs3_resolutionLoss = false, k = 0) : k = v + D;
  }
  let g = 0;
  {
    const d = t.responsiveness.windowDays * G, c = o - d;
    let m = 0;
    for (const h of l) (h.updatedAt ?? 0) > c && m++;
    let v = 0;
    for (const h of y) (h.updated_at ?? 0) > c && v++;
    try {
      v += await C.centroidCovariance.where("computedAt").above(c).count();
    } catch {
    }
    if (m + v < Nt) p.vs4_responsivenessLag = false;
    else {
      const h = m === 0 && v === 0 ? 1 : m / Math.max(1, v), D = t.responsiveness.maxLagRatio - 1;
      g = D > 0 ? Math.max(0, h - 1) / D : 0;
    }
  }
  let w = 0;
  {
    const d = await tt(), c = kt({ entities: d, sampleCount: 2e3 }), m = t.integrity.identityAttractor.dReference, v = t.integrity.identityAttractor.dMinFraction;
    let E = 0, h = c.sufficientData;
    if (h) {
      const A = v * m;
      E = A > 0 ? Math.max(0, (A - c.cohensD) / A) : 0;
    }
    const D = 0, R = 0;
    let P = 0, T = true;
    try {
      const A = await C.atoms.count();
      if (A < Z) T = false;
      else {
        const pt = await C.atomIntelligence.count(), gt = Math.max(0, (A - pt) / A);
        P = Math.max(0, gt - t.integrity.consolidationMaxBacklogPct) / t.integrity.consolidationMaxBacklogPct;
      }
    } catch {
      T = false;
    }
    !h && !T ? (p.vs5_integrityDrift = false, w = 0) : w = E + D + R + P;
  }
  let M = 0;
  if (s.surprise.getCount() < rt) p.vs6_predictionError = false;
  else {
    const d = s.surprise.getMean(), c = t.prediction.maxMeanSurprise;
    M = c > 0 ? Math.max(0, d - c) / c : 0;
  }
  let S = 0;
  {
    let d = [];
    try {
      d = await C.blindspots.where("closedAt").equals(0).toArray();
    } catch {
      d = [];
    }
    const c = d.length, m = c === 0 ? 0 : d.reduce((h, D) => h + (o - (D.openedAt ?? o)) / G, 0) / c, v = Math.max(0, c - t.blindspot.maxOpenBlindspots) / t.blindspot.maxOpenBlindspots, E = Math.max(0, m - t.blindspot.maxMeanAgeDays) / t.blindspot.maxMeanAgeDays;
    S = v + E;
  }
  const x = { vs1_coverageGap: b, vs2_freshnessDecay: L, vs3_resolutionLoss: k, vs4_responsivenessLag: g, vs5_integrityDrift: w, vs6_predictionError: M, vs7_blindspotInventory: S }, F = { vs1_coverageGap: b > 1, vs2_freshnessDecay: L > 1, vs3_resolutionLoss: k > 1, vs4_responsivenessLag: g > 1, vs5_integrityDrift: w > 1, vs6_predictionError: M > 1, vs7_blindspotInventory: S > 1 }, N = { vs1_coverageGap: "vs1", vs2_freshnessDecay: "vs2", vs3_resolutionLoss: "vs3", vs4_responsivenessLag: "vs4", vs5_integrityDrift: "vs5", vs6_predictionError: "vs6", vs7_blindspotInventory: "vs7" }, j = /* @__PURE__ */ new Set(), ft = { vs1: b, vs2: L, vs3: k, vs4: g, vs5: w, vs6: M, vs7: S };
  for (const d of Object.keys(N)) p[d] || j.add(N[d]);
  const dt = ot(ft, t.weights, j), ut = j.size > 0, B = { snapshotId: `vs-${o}-${Math.floor(Math.random() * 1e9).toString(36)}`, computedAt: o, trigger: e, samplingProfile: { entityCount: l.length, chunkCount: y.length, strategy: "recent-N" }, readings: x, violations: F, aggregateSeverity: dt, sufficientData: p, partial: ut, provenance: { targetMorphologyHash: r, code: [{ file: "src/graph/vital-signs-orchestrator.ts", gitSha: "runtime" }] } };
  return s.ring.push(B), await ct(B), q = B, H = { vs1Term1: _, vs1Term3: I, vs3Term1: f }, B;
}
function zt(e, s, n, i, t, r) {
  const o = Date.now();
  let a = 0;
  s.fleet.size() >= at && (a = s.fleet.getBelowThreshold(n.coverage.minClassifierUtilizationPct).length / Math.max(1, s.fleet.size()));
  const l = t.sufficientData.vs1_coverageGap ? r.vs1Term1 + a + r.vs1Term3 : 0;
  let y = 0;
  const p = s.compoundStates.getLabels();
  if (p.length >= W) {
    const x = it(p);
    y = Math.max(0, n.resolution.minCompoundStateEntropyBits - x) / n.resolution.minCompoundStateEntropyBits;
  }
  const _ = t.sufficientData.vs3_resolutionLoss ? r.vs3Term1 + y : 0;
  let I = 0;
  if (t.sufficientData.vs6_predictionError && s.surprise.getCount() >= rt) {
    const x = s.surprise.getMean(), F = n.prediction.maxMeanSurprise;
    I = F > 0 ? Math.max(0, x - F) / F : 0;
  }
  const f = { vs1_coverageGap: l, vs2_freshnessDecay: t.readings.vs2_freshnessDecay, vs3_resolutionLoss: _, vs4_responsivenessLag: t.readings.vs4_responsivenessLag, vs5_integrityDrift: t.readings.vs5_integrityDrift, vs6_predictionError: I, vs7_blindspotInventory: t.readings.vs7_blindspotInventory }, b = { vs1_coverageGap: f.vs1_coverageGap > 1, vs2_freshnessDecay: f.vs2_freshnessDecay > 1, vs3_resolutionLoss: f.vs3_resolutionLoss > 1, vs4_responsivenessLag: f.vs4_responsivenessLag > 1, vs5_integrityDrift: f.vs5_integrityDrift > 1, vs6_predictionError: f.vs6_predictionError > 1, vs7_blindspotInventory: f.vs7_blindspotInventory > 1 }, L = { vs1_coverageGap: "vs1", vs2_freshnessDecay: "vs2", vs3_resolutionLoss: "vs3", vs4_responsivenessLag: "vs4", vs5_integrityDrift: "vs5", vs6_predictionError: "vs6", vs7_blindspotInventory: "vs7" }, k = /* @__PURE__ */ new Set(), g = { vs1: f.vs1_coverageGap, vs2: f.vs2_freshnessDecay, vs3: f.vs3_resolutionLoss, vs4: f.vs4_responsivenessLag, vs5: f.vs5_integrityDrift, vs6: f.vs6_predictionError, vs7: f.vs7_blindspotInventory };
  for (const x of Object.keys(L)) t.sufficientData[x] || k.add(L[x]);
  const w = ot(g, n.weights, k), M = k.size > 0, S = { snapshotId: `vs-${o}-${Math.floor(Math.random() * 1e9).toString(36)}`, computedAt: o, trigger: e, samplingProfile: { entityCount: t.samplingProfile.entityCount, chunkCount: t.samplingProfile.chunkCount, strategy: "recent-N" }, readings: f, violations: b, aggregateSeverity: w, sufficientData: { ...t.sufficientData }, partial: M, provenance: { targetMorphologyHash: i, code: [{ file: "src/graph/vital-signs-orchestrator.ts", gitSha: "runtime:fast-path" }] } };
  return s.ring.push(S), ct(S), S;
}
const Ot = 3e4, jt = 10, qt = 300 * 1e3, lt = 5;
typeof globalThis.requestIdleCallback > "u" && (globalThis.requestIdleCallback = (e, s) => {
  const n = Date.now();
  return window.setTimeout(() => {
    e({ didTimeout: false, timeRemaining: () => Math.max(0, 50 - (Date.now() - n)) });
  }, (s == null ? void 0 : s.timeout) ?? 1);
}, globalThis.cancelIdleCallback = (e) => clearTimeout(e));
let et = false, V = false, st = 0, nt = 0;
const Ht = ht();
function Vt(e) {
  return e !== null && !e.didTimeout && e.timeRemaining() < lt;
}
function Kt() {
  st++;
  const e = Date.now() - nt;
  return st % jt === 0 || e >= qt ? (nt = Date.now(), "full") : "fast";
}
async function Wt(e) {
  if (Vt(e) || typeof document < "u" && document.visibilityState === "hidden") return;
  const s = Kt();
  try {
    await Ut("idle", Ht, { mode: s });
  } catch (n) {
    console.warn("[vital-signs-worker] pass failed", n);
  }
}
function O() {
  V || (V = true, requestIdleCallback(async (e) => {
    if (V = false, !(typeof document < "u" && document.visibilityState === "hidden")) {
      if (e.timeRemaining() < lt && !e.didTimeout) {
        O();
        return;
      }
      try {
        await Wt(e);
      } catch (s) {
        console.warn("[vital-signs-worker] scheduleNext pass failed", s);
      }
      O();
    }
  }, { timeout: Ot }));
}
function Yt() {
  et || (et = true, O(), typeof document < "u" && document.addEventListener("visibilitychange", () => {
    document.visibilityState === "visible" && O();
  }));
}
export {
  Yt as registerVitalSignsWorker
};
