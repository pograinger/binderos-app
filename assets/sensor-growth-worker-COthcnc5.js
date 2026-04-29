function D(t) {
  return { attemptId: t.attemptId, blindspotId: t.blindspotId, source: t.source, category: t.category, status: "detected", spec: t.spec, createdAt: t.now, updatedAt: t.now, history: [{ at: t.now, from: "detected", to: "detected", reason: "initial-classification" }], result: null };
}
const v = ["weekly", "monthly", "rhythm", "cadence", "daily rhythm", "long-term", "multi-day"], T = ["distinguish", "resolution", "collapse", "same centroid", "indistinguishable"], E = [/entity type ([A-Z_][A-Za-z_]*)/, /unknown entity kind: ([A-Za-z_][A-Za-z_]*)/i], R = /no classifier for ([a-z][a-z-]*)/i;
function I(t, e) {
  var _a;
  if (e.messageCount < e.coldStartMinConversations) return { ok: false, skipReason: "cold-start", detail: `${e.messageCount}/${e.coldStartMinConversations} messages` };
  if (t.closedAt !== null && t.closedAt !== 0) return { ok: false, skipReason: "already-closed", detail: "blindspot already resolved" };
  const o = ((_a = t.triggerEvent) == null ? void 0 : _a.kind) ?? "", a = t.dimensionHint ?? "", n = a.toLowerCase();
  let l = null, c = "";
  if (o === "entity-type-unknown") l = "entity-type-gap", c = "triggerEvent.kind === 'entity-type-unknown'";
  else for (const d of E) {
    const r = a.match(d);
    if (r && r[1] && !e.knownEntityTypes.has(r[1])) {
      l = "entity-type-gap", c = `dimensionHint matched ENTITY_TYPE_PATTERN, type '${r[1]}' not in knownEntityTypes`;
      break;
    }
  }
  if (l === null) {
    if (o === "temporal-horizon-exceeded") l = "temporal-gap", c = "triggerEvent.kind === 'temporal-horizon-exceeded'";
    else for (const d of v) if (n.includes(d)) {
      l = "temporal-gap", c = `dimensionHint matched TEMPORAL_KEYWORD '${d}'`;
      break;
    }
  }
  if (l === null) if (o === "no-classifier-for-dimension") l = "perception-gap", c = "triggerEvent.kind === 'no-classifier-for-dimension'";
  else {
    const d = a.match(R);
    d && d[1] && !e.loadedClassifierIds.has(d[1]) && (l = "perception-gap", c = `dimensionHint matched 'no classifier for ${d[1]}' and classifier not in fleet`);
  }
  if (l === null) {
    if (o === "compound-state-collapse") l = "resolution-gap", c = "triggerEvent.kind === 'compound-state-collapse'";
    else for (const d of T) if (n.includes(d)) {
      l = "resolution-gap", c = `dimensionHint matched RESOLUTION_KEYWORD '${d}'`;
      break;
    }
  }
  l === null && (l = "coverage-gap", c = "default fallback \u2014 no specific rule matched");
  const g = e.backoffs.get(l);
  return g != null && g.cooldownUntil !== null && g.cooldownUntil > e.now ? { ok: false, skipReason: "backoff-suspended", detail: `category ${l} in backoff until ${g.cooldownUntil}` } : { ok: true, category: l, rationale: c };
}
function M() {
  return { scannedBlindspots: 0, classifiedCounts: { "perception-gap": 0, "resolution-gap": 0, "coverage-gap": 0, "entity-type-gap": 0, "temporal-gap": 0, skipped: 0 }, thresholdPassed: 0, backoffSuppressed: 0, dailyLimitSuppressed: 0, dedupeSuppressed: 0, attemptsWritten: 0, writtenAttemptIds: [] };
}
function B(t) {
  const e = t.target.growth;
  if (!e) return { pass: false, reason: "no-growth-config" };
  const o = t.categoryBlindspots.length;
  if (o < e.stressorCountThreshold) return { pass: false, reason: `count ${o} < threshold ${e.stressorCountThreshold}` };
  const a = 864e5;
  let n = 0;
  for (const c of t.categoryBlindspots) {
    const g = (t.now - c.openedAt) / a;
    g > n && (n = g);
  }
  if (n < e.stressorPersistenceDays) return { pass: false, reason: `maxAge ${n.toFixed(2)}d < persistence ${e.stressorPersistenceDays}d` };
  if (t.category === "resolution-gap" || t.category === "coverage-gap") {
    if (t.meanConfidence === null) return { pass: false, reason: `${t.category} requires meanConfidence but none provided` };
    if (t.meanConfidence >= e.lowConfidenceThreshold) return { pass: false, reason: `meanConfidence ${t.meanConfidence.toFixed(2)} >= threshold ${e.lowConfidenceThreshold}` };
  }
  return { pass: true, reason: "all-thresholds-passed" };
}
function O(t, e = 48) {
  const o = t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  return o.length > e ? o.slice(0, e).replace(/-+$/g, "") : o;
}
function P(t) {
  const e = O(t.blindspot.dimensionHint) || "unknown", o = `${t.category}-${e}`, a = t.blindspot.dimensionHint.slice(0, 120), n = ["positive", "neutral", "negative"];
  return { attemptId: t.attemptId, classifierName: o, category: t.category, targetDimension: a, classes: n, seedPrompt: { taskDescription: `Classify the ${a} dimension`, examplesPerClass: 400, model: "haiku", temperature: 0.9 }, embeddingDim: 384, authoredAt: t.now, sourceBlindspotId: t.blindspot.blindspotId };
}
async function _(t) {
  const e = M(), o = t.target.growth;
  if (!o) throw new Error("Phase 155 growth config missing \u2014 target-morphology.json schemaVersion >= 2 required");
  if (t.messageCount < o.coldStartMinConversations) return e;
  const a = await t.readAttemptsInLastDay(t.now);
  if (a >= o.maxGrowthAttemptsPerDay) {
    const r = await t.readOpenBlindspots();
    return e.scannedBlindspots = r.length, e.dailyLimitSuppressed = r.length, e;
  }
  const n = await t.readOpenBlindspots();
  e.scannedBlindspots = n.length;
  const l = await t.readBackoffs(), c = /* @__PURE__ */ new Map();
  let g = 0;
  for (const r of n) {
    const s = I(r, { messageCount: t.messageCount, coldStartMinConversations: o.coldStartMinConversations, loadedClassifierIds: t.loadedClassifierIds, knownEntityTypes: t.knownEntityTypes, backoffs: l, now: t.now });
    if (!s.ok) {
      e.classifiedCounts.skipped += 1, s.skipReason === "backoff-suspended" && (g += 1);
      continue;
    }
    e.classifiedCounts[s.category] += 1;
    const u = c.get(s.category) ?? [];
    u.push({ blindspot: r, category: s.category }), c.set(s.category, u);
  }
  e.backoffSuppressed = g;
  let d = o.maxGrowthAttemptsPerDay - a;
  for (const [r, s] of c.entries()) {
    if (d <= 0) break;
    const u = t.getMeanConfidence ? t.getMeanConfidence(r) : null;
    if (B({ category: r, categoryBlindspots: s.map((i) => i.blindspot), target: t.target, now: t.now, meanConfidence: u }).pass) {
      e.thresholdPassed += 1;
      for (const i of s) {
        if (d <= 0) break;
        if ((await t.readAttemptsForBlindspot(i.blindspot.blindspotId)).length > 0) {
          e.dedupeSuppressed += 1;
          continue;
        }
        const m = t.newAttemptId(), w = P({ attemptId: m, blindspot: i.blindspot, category: r, now: t.now }), y = D({ attemptId: m, blindspotId: i.blindspot.blindspotId, source: "vs7-ledger", category: r, spec: w, now: t.now }), p = { ...y, status: "pending-human-review", updatedAt: t.now, history: [...y.history, { at: t.now, from: "detected", to: "pending-human-review", reason: "threshold-gate-passed" }] };
        await t.writeGrowthAttempt(p), e.attemptsWritten += 1, e.writtenAttemptIds.push(m), d -= 1;
        break;
      }
    }
  }
  return e;
}
const C = "I-understand-v1-locks-this-off", x = 0.85, $ = 0.05, G = 0.3, j = 5;
function F(t) {
  var _a, _b;
  const { attempt: e, staged: o, target: a, currentStagedCount: n, adminOverride: l } = t, c = e.status === "eligible-for-promotion", g = o.orthogonalityScore !== null && o.orthogonalityScore <= x && o.rankContribution !== null && o.rankContribution >= $, d = o.identityAttractorPass === true, r = o.shadowMetrics !== null && o.shadowMetrics.reductionRatio !== null && o.shadowMetrics.reductionRatio >= G, s = ((_a = a.growth) == null ? void 0 : _a.maxStagedClassifiers) ?? j, u = n < s, f = l === C, i = ((_b = a.growth) == null ? void 0 : _b.autonomousShipEnabled) === true, h = f || i, m = { statusOk: c, orthogonalityOk: g, identityAttractorOk: d, shadowOk: r, stagedCapOk: u, autonomousShipOk: h }, w = c && g && d && r && u, y = w && h;
  let p;
  return c ? g ? d ? r ? u ? h ? p = "manual-promotion" : p = "admin-override-missing" : p = "max-staged-classifiers-exceeded" : p = "shadow-integration-failed" : p = "identity-attractor-gate-failed" : p = "orthogonality-gate-failed" : p = "attempt-not-eligible-for-promotion", { eligible: w, promoted: y, reason: p, gatesPassed: m };
}
function N(t) {
  return `public/models/classifiers/${t}.onnx`;
}
function L(t) {
  return `public/models/classifiers/${t}-classes.json`;
}
function S(t, e, o, a, n) {
  return { ...t, status: o, updatedAt: n, history: [...t.history, { at: n, from: e, to: o, reason: a }] };
}
function H(t) {
  return { async listGrowthAttempts() {
    return t.readAllAttempts();
  }, async listStagedClassifiers() {
    return t.readAllStaged();
  }, async inspectGrowthAttempt(e) {
    const o = await t.readAttempt(e);
    if (!o) return null;
    const a = await t.readStaged(e);
    return { attempt: o, staged: a };
  }, async promoteStagedClassifier(e) {
    const o = await t.readAttempt(e);
    if (!o) return { ok: false, error: "attempt-not-found", result: null };
    const a = await t.readStaged(e);
    if (!a) return { ok: false, error: "staged-not-found", result: null };
    const n = await t.getTarget(), l = await t.countStaged(), c = F({ attempt: o, staged: a, target: n, currentStagedCount: l, adminOverride: C });
    if (!c.promoted) return { ok: false, error: c.reason, result: c };
    const g = t.now, d = o.spec.classifierName;
    await t.copyClassifierArtifact(a.artifactPath, N(d)), await t.copyClassifierArtifact(a.classesPath, L(d));
    const r = { ...S(o, "eligible-for-promotion", "promoted", "manual-promotion", g), result: { promoted: true, failureGate: null, rejectionReason: null } };
    await t.writeAttempt(r), await t.writeStaged({ ...a, status: "promoted", updatedAt: g });
    const s = await t.readBlindspot(o.blindspotId);
    return s && await t.writeBlindspot({ ...s, closedAt: g, resolution: "grow-sensor" }), { ok: true, attemptId: e, classifierName: d, promotedAt: g };
  }, async rejectStagedClassifier(e, o) {
    const a = await t.readAttempt(e);
    if (!a) return { ok: false, error: "attempt-not-found" };
    const n = await t.readStaged(e);
    if (!n) return { ok: false, error: "staged-not-found" };
    const l = t.now, c = { ...S(a, a.status, "rejected", o, l), result: { promoted: false, failureGate: null, rejectionReason: o } };
    return await t.writeAttempt(c), await t.writeStaged({ ...n, status: "rejected", updatedAt: l }), { ok: true };
  } };
}
function U(t) {
  let e = false;
  const o = { readAttempt: t.readAttempt, readStaged: t.readStaged, readAllAttempts: t.readAllAttempts, readAllStaged: t.readAllStaged, readBlindspot: t.readBlindspot, writeAttempt: t.writeAttempt, writeStaged: t.writeStaged, writeBlindspot: t.writeBlindspot, copyClassifierArtifact: t.copyClassifierArtifact, getTarget: t.getTarget, countStaged: async () => (await t.readAllStaged()).length, now: t.now() }, a = H(o);
  function n(r, s, u, f) {
    const i = t.now();
    return { ...r, status: u, updatedAt: i, history: [...r.history, { at: i, from: s, to: u, reason: f }] };
  }
  async function l() {
    if (e) return null;
    try {
      const r = t.growthDecisionDeps();
      return await _(r);
    } catch (r) {
      return console.warn("[sensor-growth-worker] detection cycle error", r), null;
    }
  }
  async function c(r, s, u) {
    const i = (await t.getTarget()).growth, h = (i == null ? void 0 : i.backoffCooldownDays) ?? 14, m = (i == null ? void 0 : i.backoffFailureCountBeforeCooldown) ?? 3, w = t.now(), y = await t.readBackoff(r.category) ?? { category: r.category, failureCount: 0, cooldownUntil: null, failures: [] }, p = [...y.failures, { at: w, attemptId: r.attemptId, gate: s }], A = y.failureCount + 1, k = A >= m ? w + h * 864e5 : y.cooldownUntil;
    await t.writeBackoff({ category: r.category, failureCount: A, lastFailureAt: w, cooldownUntil: k, failures: p });
    const b = { ...n(r, r.status, "rejected", `${s}-fail: ${u}`), result: { promoted: false, failureGate: s, rejectionReason: u } };
    await t.writeAttempt(b);
  }
  async function g() {
    if (e) return;
    const r = await t.readAllStaged();
    for (const s of r) {
      if (e) return;
      if (s.status === "rejected" || s.status === "promoted") continue;
      const u = await t.readAttempt(s.attemptId);
      if (u && !(u.status === "rejected" || u.status === "promoted")) {
        if (s.orthogonalityScore === null) {
          let f;
          try {
            f = await t.runOrthogonalityForStaged(s);
          } catch (h) {
            console.warn("[sensor-growth-worker] orthogonality error", h);
            continue;
          }
          const i = { ...s, orthogonalityScore: f.maxCosineSimilarity, rankContribution: f.rankContribution, updatedAt: t.now() };
          if (await t.writeStaged(i), !f.pass) {
            await c(u, "orthogonality", f.failReason ?? "orthogonality-fail"), await t.writeStaged({ ...i, status: "rejected" });
            continue;
          }
          Object.assign(s, i);
        }
        if (s.identityAttractorPass === null) {
          let f;
          try {
            f = await t.runIdentityAttractorForStaged(s);
          } catch (h) {
            console.warn("[sensor-growth-worker] identity-attractor error", h);
            continue;
          }
          const i = { ...s, identityAttractorDelta: f.delta, identityAttractorPass: f.pass, updatedAt: t.now() };
          if (await t.writeStaged(i), !f.pass) {
            await c(u, "identity-attractor", f.failReason ?? "id-attractor-fail"), await t.writeStaged({ ...i, status: "rejected" });
            continue;
          }
          Object.assign(s, i);
        }
        if (s.orthogonalityScore !== null && s.identityAttractorPass === true && s.shadowMetrics === null) {
          const f = t.now(), i = { ...s, status: "shadow-integrating", shadowMetrics: { startedAt: f, endedAt: null, preShadowStressorCount: 0, duringShadowStressorCount: 0, reductionRatio: null, observerInferenceCount: 0, meanObserverConfidence: null }, updatedAt: f };
          await t.writeStaged(i);
          const h = n(u, u.status, "shadow-integrating", "gates-passed");
          await t.writeAttempt(h);
        }
      }
    }
  }
  async function d() {
    var _a;
    if (e) return;
    const s = ((_a = (await t.getTarget()).growth) == null ? void 0 : _a.shadowIntegrationDays) ?? 7, u = await t.readAllStaged(), f = t.now();
    for (const i of u) {
      if (e) return;
      if (i.status !== "shadow-integrating" || i.shadowMetrics === null || f - i.shadowMetrics.startedAt < s * 864e5) continue;
      const m = await t.readAttempt(i.attemptId);
      if (!m) continue;
      let w;
      try {
        w = await t.runShadowEvalForStaged(i, m);
      } catch (y) {
        console.warn("[sensor-growth-worker] shadow eval error", y);
        continue;
      }
      if (w.pass) {
        const y = { ...i, status: "eligible-for-promotion", shadowMetrics: w.metrics, updatedAt: f };
        await t.writeStaged(y);
        const p = n(m, m.status, "eligible-for-promotion", "shadow-passed");
        await t.writeAttempt(p);
      } else await c(m, "shadow", w.failReason ?? "shadow-fail"), await t.writeStaged({ ...i, status: "rejected", shadowMetrics: w.metrics, updatedAt: f });
    }
  }
  return { dispose() {
    e = true;
  }, forceRunDetection: l, forceRunStagingPoll: g, forceRunShadowEvaluation: d, getDevToolsSurface: () => a };
}
function z(t) {
  const e = U(W(t));
  if (typeof globalThis < "u") {
    const o = globalThis, a = e.getDevToolsSurface();
    o.__growthTools = a, o.__listGrowthAttempts = () => a.listGrowthAttempts(), o.__listStagedClassifiers = () => a.listStagedClassifiers(), o.__inspectGrowthAttempt = (n) => a.inspectGrowthAttempt(n), o.__rejectStagedClassifier = (n, l) => a.rejectStagedClassifier(n, l);
  }
  return e;
}
function W(t) {
  const e = t, o = () => Date.now(), a = { schemaVersion: 2, capturedAt: (/* @__PURE__ */ new Date()).toISOString(), integrity: { identityAttractor: { dReference: 2.279, dMinFraction: 0.97, dReferenceSource: "phase-149" }, fleetExpectedClassifiers: [], centroidDimensionality: 218, crdtSyncMaxLagMs: 5e3, consolidationMaxBacklogPct: 0.1 }, coverage: { maxDeadDimFraction: 0.1, minClassifierUtilizationPct: 0.2, blindspotBudget: 100 }, freshness: { entityStalenessHalfLifeDays: 30, maxStaleEntityFraction: 0.3 }, resolution: { minPairwiseSeparationMean: 0.3, minCompoundStateEntropyBits: 2 }, responsiveness: { maxLagRatio: 1.5, windowDays: 7 }, prediction: { maxMeanSurprise: 0.5, rollingWindowEvents: 100 }, blindspot: { maxOpenBlindspots: 50, maxMeanAgeDays: 14 }, weights: { vs1: 1, vs2: 1, vs3: 1, vs4: 1, vs5: 2, vs6: 1, vs7: 1 }, growth: { stressorCountThreshold: 5, stressorPersistenceDays: 7, lowConfidenceThreshold: 0.6, lowConfidenceWindowEvents: 50, coldStartMinConversations: 30, backoffFailureCountBeforeCooldown: 3, backoffCooldownDays: 14, shadowIntegrationDays: 7, maxStagedClassifiers: 5, maxGrowthAttemptsPerDay: 1, autonomousShipEnabled: false } };
  return { async readAllAttempts() {
    return e.growthAttempts.toArray();
  }, async readAllStaged() {
    return e.stagedClassifiers.toArray();
  }, async readAttempt(n) {
    return await e.growthAttempts.get(n) ?? null;
  }, async readStaged(n) {
    return await e.stagedClassifiers.get(n) ?? null;
  }, async readBlindspot(n) {
    return await e.blindspots.get(n) ?? null;
  }, async readAllBlindspots() {
    return e.blindspots.toArray();
  }, async writeAttempt(n) {
    await e.growthAttempts.put(n);
  }, async writeStaged(n) {
    await e.stagedClassifiers.put(n);
  }, async writeBlindspot(n) {
    await e.blindspots.put(n);
  }, async writeBackoff(n) {
    await e.growthBackoffs.put(n);
  }, async readBackoff(n) {
    return await e.growthBackoffs.get(n) ?? null;
  }, growthDecisionDeps() {
    return { readOpenBlindspots: async () => [], readBackoffs: async () => /* @__PURE__ */ new Map(), readAttemptsInLastDay: async () => 0, readAttemptsForBlindspot: async () => [], writeGrowthAttempt: async () => {
    }, messageCount: 0, loadedClassifierIds: /* @__PURE__ */ new Set(), knownEntityTypes: /* @__PURE__ */ new Set(), target: a, now: o(), newAttemptId: () => `stub_${o()}` };
  }, async getTarget() {
    return a;
  }, async copyClassifierArtifact() {
  }, async runOrthogonalityForStaged() {
    return { maxCosineSimilarity: 0, mostSimilarClassifier: "", rankContribution: 1, pass: true, failReason: null, thresholds: { maxCosineSimilarity: 0.85, minRankContribution: 0.05, minBatchSize: 200 } };
  }, async runIdentityAttractorForStaged() {
    return { dBefore: 2.279, dAfter: 2.279, delta: 0, floor: 2.279 * 0.97, pass: true, rawBefore: { cohensD: 2.279, withinClusterMean: 0, withinClusterStd: 0, acrossClusterMean: 0, acrossClusterStd: 0, separation: 0, multiMemberClusters: 0, withinClusterPairs: 0, acrossClusterPairs: 0, sufficientData: true }, rawAfter: { cohensD: 2.279, withinClusterMean: 0, withinClusterStd: 0, acrossClusterMean: 0, acrossClusterStd: 0, separation: 0, multiMemberClusters: 0, withinClusterPairs: 0, acrossClusterPairs: 0, sufficientData: true }, failReason: null };
  }, async runShadowEvalForStaged() {
    return { pass: false, failReason: "insufficient-data", metrics: { startedAt: o(), endedAt: o(), preShadowStressorCount: 0, duringShadowStressorCount: 0, reductionRatio: null, observerInferenceCount: 0, meanObserverConfidence: null } };
  }, now: o, loadedClassifierIds: /* @__PURE__ */ new Set(), knownEntityTypes: /* @__PURE__ */ new Set(), messageCount: 0 };
}
export {
  U as createSensorGrowthWorker,
  z as registerSensorGrowthWorker
};
