const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DFJJ7DME.js","assets/_commonjsHelpers-Cpj98o6Y.js","assets/index-DwiQ5yRy.js","assets/index-brdPi_7R.css"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { o as m, s as a, n as s, $ as A, a0 as Ce, p as y, a1 as L, a2 as O, m as I, a3 as Te, l as ae, a4 as ce, a5 as Ee, _ as C, a6 as Me, a7 as Re, d as b, a8 as de, a9 as Oe, __tla as __tla_0 } from "./index-DwiQ5yRy.js";
import { pruneStaleAssertions as De } from "./memory-consolidation-worker-CbxExS2V.js";
import { getCurrentThreshold as le, recomputeAdaptiveThreshold as Le } from "./adaptive-chunking-threshold-cg5dGTR_.js";
let Vt, jt;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const Q = 0.1, xe = 4, Z = 3, ee = 5e3;
  async function Pe(e) {
    const t = e.actionHistory, n = await t.count();
    if (n <= ee) return 0;
    const i = n - ee, c = (await t.orderBy("createdAt").limit(i).toArray()).map((r) => r.actionHistoryId);
    return c.length === 0 ? 0 : (await t.bulkDelete(c), c.length);
  }
  const ue = [
    "vs1_coverageGap",
    "vs2_freshnessDecay",
    "vs3_resolutionLoss",
    "vs4_responsivenessLag",
    "vs5_integrityDrift",
    "vs6_predictionError",
    "vs7_blindspotInventory"
  ];
  function Ve(e) {
    const t = e.sufficientData;
    let n = 0;
    for (const i of ue) t[i] === false && n++;
    return n;
  }
  function He(e) {
    const t = e.violations;
    for (const n of ue) if (t[n] === true) return true;
    return false;
  }
  class Ne {
    constructor(t) {
      __publicField(this, "state", {
        pendingActionId: null,
        consecutiveDegradations: 0,
        circuitBreakerTripped: false,
        lastTickAt: null
      });
      __publicField(this, "unsubscribe", null);
      __publicField(this, "timeoutHandle", null);
      __publicField(this, "preSnapshotForPending", null);
      this.deps = t;
    }
    async tick() {
      const t = this.deps.now();
      if (this.state.lastTickAt = t, this.state.pendingActionId !== null) return {
        kind: "skip_in_flight"
      };
      if (this.state.circuitBreakerTripped) return {
        kind: "skip_circuit_breaker"
      };
      const n = await this.deps.readLatestSnapshot();
      if (n === null) return {
        kind: "skip_no_snapshot"
      };
      const i = Ve(n);
      if (i >= xe) return await this.deps.appendActionHistory({
        createdAt: t,
        triggerSnapshotId: n.snapshotId,
        action: "skip_insufficient_data",
        status: "completed",
        startedAt: t,
        completedAt: t,
        costMs: 0,
        outcomeSnapshotId: null,
        deltaAggregateSeverity: null,
        errorMessage: null,
        policyReason: `insufficient data: ${i}/7 vital signs in bootstrap state`,
        schemaVersion: 1
      }), {
        kind: "skip_insufficient_data"
      };
      if (n.aggregateSeverity < Q && !He(n)) return await this.deps.appendActionHistory({
        createdAt: t,
        triggerSnapshotId: n.snapshotId,
        action: "skip_healthy",
        status: "completed",
        startedAt: t,
        completedAt: t,
        costMs: 0,
        outcomeSnapshotId: null,
        deltaAggregateSeverity: null,
        errorMessage: null,
        policyReason: `aggregateSeverity=${n.aggregateSeverity.toFixed(3)} < ${Q}`,
        schemaVersion: 1
      }), {
        kind: "skip_healthy"
      };
      const o = this.deps.selectAction({
        snapshot: n,
        catalog: this.deps.actionCatalog,
        weights: this.deps.getWeights(),
        maxCostTier: this.deps.getCurrentMaxCostTier(),
        hasRebuildConsent: this.deps.userOptInForScheduledRebuild()
      });
      return o === null ? (await this.deps.appendActionHistory({
        createdAt: t,
        triggerSnapshotId: n.snapshotId,
        action: "skip_healthy",
        status: "completed",
        startedAt: t,
        completedAt: t,
        costMs: 0,
        outcomeSnapshotId: null,
        deltaAggregateSeverity: null,
        errorMessage: null,
        policyReason: "no eligible action (violations present but no arm targets them)",
        schemaVersion: 1
      }), {
        kind: "skip_no_eligible_action"
      }) : o.descriptor.requiresConsent && !this.deps.userOptInForScheduledRebuild() ? (await this.deps.appendActionHistory({
        createdAt: t,
        triggerSnapshotId: n.snapshotId,
        action: "skip_consent_required",
        status: "completed",
        startedAt: t,
        completedAt: t,
        costMs: 0,
        outcomeSnapshotId: null,
        deltaAggregateSeverity: null,
        errorMessage: null,
        policyReason: `${o.descriptor.kind} requires consent; scheduledRebuildConsent=false`,
        schemaVersion: 1
      }), {
        kind: "skip_consent_required"
      }) : await this.dispatchAction(o.descriptor, n, o.reason);
    }
    getState() {
      return {
        pendingActionId: this.state.pendingActionId,
        consecutiveDegradations: this.state.consecutiveDegradations,
        circuitBreakerTripped: this.state.circuitBreakerTripped,
        lastTickAt: this.state.lastTickAt
      };
    }
    resetCircuitBreaker() {
      this.state.circuitBreakerTripped = false, this.state.consecutiveDegradations = 0;
    }
    async dispatchAction(t, n, i) {
      const o = this.deps.now(), c = {
        createdAt: o,
        triggerSnapshotId: n.snapshotId,
        action: t.kind,
        status: "pending",
        startedAt: o,
        completedAt: null,
        costMs: null,
        outcomeSnapshotId: null,
        deltaAggregateSeverity: null,
        errorMessage: null,
        policyReason: i,
        schemaVersion: 1
      }, r = await this.deps.appendActionHistory(c);
      this.state.pendingActionId = r;
      const p = {
        now: this.deps.now,
        userOptInForScheduledRebuild: this.deps.userOptInForScheduledRebuild,
        rebuildScope: null
      };
      let h;
      try {
        const l = this.deps.actionCatalog[t.kind].run;
        h = await l(p);
      } catch (l) {
        const d = this.deps.now();
        h = {
          kind: "failed",
          startedAt: o,
          completedAt: d,
          costMs: Math.max(0, d - o),
          errorMessage: l instanceof Error ? l.message : String(l)
        };
      }
      return h.kind === "failed" || h.kind === "skipped" ? (await this.deps.updateActionHistory(r, {
        status: h.kind === "failed" ? "failed" : "completed",
        startedAt: h.startedAt,
        completedAt: h.completedAt,
        costMs: h.costMs,
        errorMessage: h.kind === "failed" ? h.errorMessage : null
      }), this.state.pendingActionId = null, {
        kind: "action_dispatched",
        actionHistoryId: r,
        action: t.kind
      }) : (await this.deps.updateActionHistory(r, {
        startedAt: h.startedAt,
        completedAt: h.completedAt,
        costMs: h.costMs
      }), this.preSnapshotForPending = n, this.subscribeAndWaitForOutcome(n), {
        kind: "action_dispatched",
        actionHistoryId: r,
        action: t.kind
      });
    }
    subscribeAndWaitForOutcome(t) {
      const n = this.deps.nextSnapshotTimeoutMs ?? 3e4;
      this.timeoutHandle = setTimeout(() => {
        if (this.unsubscribe) {
          try {
            this.unsubscribe();
          } catch {
          }
          this.unsubscribe = null;
        }
        this.timeoutHandle = null, this.recordTimeout();
      }, n), this.unsubscribe = this.deps.subscribeToNextSnapshot((i) => {
        if (this.timeoutHandle && (clearTimeout(this.timeoutHandle), this.timeoutHandle = null), this.unsubscribe) {
          try {
            this.unsubscribe();
          } catch {
          }
          this.unsubscribe = null;
        }
        this.recordOutcome(t, i);
      });
    }
    async recordOutcome(t, n) {
      const i = this.state.pendingActionId;
      if (i === null) return;
      const o = n.aggregateSeverity - t.aggregateSeverity;
      if (await this.deps.updateActionHistory(i, {
        status: "completed",
        outcomeSnapshotId: n.snapshotId,
        deltaAggregateSeverity: o
      }), o > 0) {
        if (this.state.consecutiveDegradations++, this.state.consecutiveDegradations >= Z) {
          this.state.circuitBreakerTripped = true;
          const c = this.deps.now();
          await this.deps.appendActionHistory({
            createdAt: c,
            triggerSnapshotId: n.snapshotId,
            action: "circuit_breaker_tripped",
            status: "completed",
            startedAt: c,
            completedAt: c,
            costMs: 0,
            outcomeSnapshotId: null,
            deltaAggregateSeverity: null,
            errorMessage: null,
            policyReason: `circuit breaker tripped after ${Z} consecutive degradations`,
            schemaVersion: 1
          });
        }
      } else this.state.consecutiveDegradations = 0;
      this.state.pendingActionId = null, this.preSnapshotForPending = null;
    }
    async recordTimeout() {
      const t = this.state.pendingActionId;
      t !== null && (await this.deps.updateActionHistory(t, {
        status: "timeout",
        deltaAggregateSeverity: null
      }), this.state.pendingActionId = null, this.preSnapshotForPending = null);
    }
  }
  const F = Object.freeze({
    LOW: 0,
    MEDIUM: 1,
    HIGH: 2
  }), Fe = Object.freeze({
    vs1: "vs1_coverageGap",
    vs2: "vs2_freshnessDecay",
    vs3: "vs3_resolutionLoss",
    vs4: "vs4_responsivenessLag",
    vs5: "vs5_integrityDrift",
    vs6: "vs6_predictionError",
    vs7: "vs7_blindspotInventory"
  });
  function te(e) {
    return e.toFixed(3);
  }
  function $e(e) {
    const { snapshot: t, catalog: n, weights: i, maxCostTier: o, hasRebuildConsent: c } = e, r = F[o], p = Object.values(n).map((u) => u.descriptor).slice().sort((u, g) => u.kind.localeCompare(g.kind)), h = [];
    for (const u of p) {
      if (F[u.costTier] > r || u.requiresConsent && !c) continue;
      let g = 0, _ = null, S = 0, f = 0;
      for (const k of u.targetVitalSigns) {
        const v = Fe[k];
        if (!t.violations[v]) continue;
        const D = t.readings[v], w = i[k] ?? 1, E = w * D;
        E > g && (g = E, _ = k, S = D, f = w);
      }
      g > 0 && _ !== null && h.push({
        descriptor: u,
        score: g,
        triggeringVs: _,
        triggeringReading: S,
        triggeringWeight: f
      });
    }
    if (h.length === 0) return null;
    h.sort(Be);
    const l = h[0], d = `VS ${l.triggeringVs} violation: reading=${te(l.triggeringReading)} weight=${l.triggeringWeight} score=${te(l.score)} -> ${l.descriptor.kind} (${l.descriptor.costTier})`;
    return {
      descriptor: l.descriptor,
      reason: d
    };
  }
  function Be(e, t) {
    if (e.score !== t.score) return t.score - e.score;
    if (e.triggeringReading !== t.triggeringReading) return t.triggeringReading - e.triggeringReading;
    const n = F[e.descriptor.costTier], i = F[t.descriptor.costTier];
    return n !== i ? n - i : e.descriptor.kind.localeCompare(t.descriptor.kind);
  }
  const je = m({
    category: a(),
    question: a(),
    answer: a(),
    depth: s(),
    timestamp: s(),
    tier: a()
  }), Ue = m({
    entityText: a(),
    entityType: A([
      "PER",
      "LOC",
      "ORG",
      "MISC",
      "DATE"
    ]),
    spanStart: s(),
    spanEnd: s(),
    confidence: s(),
    entityId: a().optional()
  }), qe = m({
    modelId: a(),
    label: a(),
    confidence: s(),
    timestamp: s()
  }), ze = m({
    type: a(),
    data: Ce(),
    timestamp: s()
  }), We = m({
    t: s(),
    s: s(),
    d: y(s())
  }), Ge = m({
    entries: y(We),
    freq: L(a(), s()),
    schemaVersion: s()
  });
  m({
    atomId: a(),
    enrichment: y(je),
    entityMentions: y(Ue),
    cognitiveSignals: y(qe),
    records: y(ze),
    version: s(),
    deviceId: a(),
    lastUpdated: s(),
    schemaVersion: s(),
    predictionMomentum: m({
      signalFrequency: L(a(), s()),
      signalStrength: L(a(), s()),
      categoryOrdering: y(m({
        category: a(),
        score: s(),
        explanation: a()
      })),
      coldStart: O(),
      computedAt: s()
    }).optional(),
    entityMomentum: m({
      scores: L(a(), s()),
      computedAt: s()
    }).optional(),
    canonicalVector: m({
      vectorType: A([
        "task",
        "person",
        "calendar"
      ]),
      data: y(s()),
      lastComputed: s(),
      schemaVersion: s()
    }).optional(),
    searchSemanticVector: m({
      modelId: a(),
      data: y(s()),
      lastComputed: s(),
      schemaVersion: s()
    }).optional(),
    consensusRisk: m({
      weightedProbability: s(),
      majorityVote: O(),
      agreementScore: s(),
      specialistContributions: y(m({
        name: a(),
        probability: s(),
        weight: s()
      })),
      computedAt: s()
    }).optional(),
    contentVersion: s().optional(),
    syncedAt: s().optional(),
    signalTrace: Ge.optional()
  });
  m({
    id: a(),
    canonicalName: a(),
    type: A([
      "PER",
      "LOC",
      "ORG"
    ]),
    aliases: y(a()),
    mentionCount: s(),
    firstSeen: s(),
    lastSeen: s(),
    version: s(),
    deviceId: a(),
    updatedAt: s(),
    fingerprint: a().optional(),
    userGuid: a().optional(),
    salience: s().min(0).max(1).optional(),
    signalEmbedding: y(s()).optional(),
    embeddingUpdateCount: s().optional(),
    driftBoosted: O().optional(),
    driftBoostedAt: s().optional(),
    temporalScope: m({
      start: s(),
      end: s()
    }).optional(),
    status: A([
      "upcoming",
      "active",
      "past",
      "recurring"
    ]).optional(),
    mentionVelocity: s().optional()
  });
  const Ke = m({
    atomId: a(),
    snippet: a(),
    timestamp: s()
  });
  m({
    id: a(),
    sourceEntityId: a(),
    targetEntityId: a(),
    relationshipType: a(),
    confidence: s().min(0).max(1),
    sourceAttribution: A([
      "keyword",
      "co-occurrence",
      "user-correction",
      "identity-graph"
    ]),
    evidence: y(Ke),
    version: s(),
    deviceId: a(),
    updatedAt: s(),
    reinforcementCount: s().optional(),
    lastReinforced: s().optional()
  });
  const Ye = m({
    id: a().uuid(),
    type: A([
      "url",
      "ms-graph",
      "photo-share",
      "app-deep-link"
    ]),
    uri: a(),
    label: a().optional(),
    note: a().optional(),
    addedAt: s()
  });
  m({
    id: a(),
    entityId: a(),
    timestamp: s(),
    dayBucket: a(),
    avgWordCount: s(),
    avgSentenceLength: s(),
    specificityScore: s().min(0).max(1),
    vocabularyComplexity: s().min(0).max(1)
  });
  m({
    id: a(),
    startTime: s(),
    endTime: s().optional(),
    captureCount: s(),
    entityIds: y(a())
  });
  const Je = A([
    "open",
    "in-progress",
    "waiting",
    "done",
    "cancelled",
    "archived"
  ]), Xe = A([
    "task",
    "fact",
    "event",
    "decision",
    "insight",
    "analysis",
    "dialogue",
    "audio-centroid",
    "chunk"
  ]), Qe = m({
    targetId: a().uuid(),
    relationshipType: a(),
    direction: A([
      "forward",
      "backward"
    ])
  }), T = {
    id: a().uuid(),
    content: a(),
    title: a(),
    status: Je,
    links: y(Qe),
    sectionId: a().uuid().optional(),
    sectionItemId: a().uuid().optional(),
    created_at: s(),
    updated_at: s(),
    pinned_tier: A([
      "Critical",
      "High",
      "Medium",
      "Low",
      "Someday"
    ]).optional(),
    pinned_staleness: O().optional(),
    importance: s().min(0).max(1).optional(),
    energy: A([
      "Quick",
      "Medium",
      "Deep"
    ]).optional(),
    tags: y(a()).default([]),
    context: a().nullable().optional(),
    aiSourced: O().optional(),
    provenance: s().default(0),
    smartLinks: y(Ye).default([])
  }, pe = m({
    ...T,
    type: I("task"),
    dueDate: s().optional(),
    scheduledDate: s().optional()
  }), he = m({
    ...T,
    type: I("fact")
  }), ge = m({
    ...T,
    type: I("event"),
    eventDate: s().optional()
  }), me = m({
    ...T,
    type: I("decision")
  }), fe = m({
    ...T,
    type: I("insight")
  }), ye = m({
    ...T,
    type: I("analysis"),
    analysisKind: A([
      "review-briefing",
      "trend-insight",
      "relationship-map"
    ]),
    isReadOnly: I(true),
    briefingData: m({
      summaryText: a(),
      staleItems: y(m({
        atomId: a(),
        title: a(),
        staleDays: s().optional(),
        linkCount: s().optional(),
        entropyScore: s().optional()
      })),
      projectsMissingNextAction: y(m({
        atomId: a(),
        title: a()
      })),
      compressionCandidates: y(m({
        atomId: a(),
        title: a(),
        staleDays: s().optional()
      })),
      generatedAt: s()
    }).optional()
  }), J = m({
    ...T,
    type: I("dialogue"),
    threadRole: A([
      "user",
      "ei"
    ]),
    promotedAtomId: a().uuid().optional(),
    sourceDialogueId: a().uuid().optional(),
    enrichmentState: A([
      "basic",
      "enriched",
      "synthesized"
    ]).default("basic"),
    chunkIds: y(a()).optional()
  }), Ze = m({
    ...T,
    type: I("audio-centroid"),
    centroid: y(s()).length(512),
    chunkIndex: s().int().min(0),
    capturedAt: s(),
    deltaBytes: s().int().min(0),
    isCommercial: O(),
    sessionId: a().uuid(),
    runningCentroid: y(s()).length(512)
  }), Se = m({
    ...T,
    id: a(),
    type: I("chunk"),
    parentMessageId: a(),
    chunkPosition: s().int().min(0),
    siblingChunkIds: y(a()).default([]),
    chunkLevel: Te([
      I(0),
      I(1),
      I(2),
      I(3)
    ]).default(0),
    childIds: y(a()).optional(),
    compoundStateSignature: y(s()).length(14),
    fullCentroid: y(s()).length(218).optional(),
    sourceType: A([
      "prose",
      "code",
      "html",
      "log"
    ]),
    textRetention: A([
      "full",
      "first_sentence",
      "pruned"
    ])
  });
  function $(e) {
    return Se.parse({
      id: e.id,
      type: "chunk",
      content: e.text,
      title: "",
      status: "open",
      links: [],
      created_at: e.now,
      updated_at: e.now,
      parentMessageId: e.parentMessageId,
      chunkPosition: e.chunkPosition,
      siblingChunkIds: e.siblingChunkIds ?? [],
      chunkLevel: e.chunkLevel,
      childIds: e.childIds,
      compoundStateSignature: e.compoundStateSignature,
      ...e.fullCentroid !== void 0 ? {
        fullCentroid: e.fullCentroid
      } : {},
      sourceType: e.sourceType,
      textRetention: "full"
    });
  }
  ae("type", [
    pe,
    he,
    ge,
    me,
    fe,
    ye,
    J,
    Ze,
    Se
  ]);
  m({
    ...T,
    type: Xe.optional(),
    isInbox: I(true),
    maturityScore: s().min(0).max(1).default(0),
    maturityFilled: y(a()).default([]),
    enrichmentDepth: L(a(), s()).default({})
  });
  ae("type", [
    pe.omit({
      id: true,
      created_at: true,
      updated_at: true
    }),
    he.omit({
      id: true,
      created_at: true,
      updated_at: true
    }),
    ge.omit({
      id: true,
      created_at: true,
      updated_at: true
    }),
    me.omit({
      id: true,
      created_at: true,
      updated_at: true
    }),
    fe.omit({
      id: true,
      created_at: true,
      updated_at: true
    }),
    ye.omit({
      id: true,
      created_at: true,
      updated_at: true
    })
  ]);
  var ne = {};
  let P = null, V = null;
  async function et() {
    return P || V || (V = (async () => {
      await C(() => import("./index-DFJJ7DME.js").then((i) => i.i), __vite__mapDeps([0,1]));
      const e = await C(() => import("./transformers.web-CbTNhKFP.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }), []), t = ne.USE_LOCAL_MODELS === "1" || ne.USE_MOCK_SIGNALS === "true";
      if (e.env.allowRemoteModels = true, e.env.allowLocalModels = t, t) {
        const { resolve: i } = await C(async () => {
          const { resolve: o } = await import("./__vite-browser-external-BIHI7g3E.js");
          return {
            resolve: o
          };
        }, []);
        e.env.localModelPath = i(process.cwd(), "public/models") + "/";
      }
      return P = await e.pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2", {
        dtype: "q8"
      }), P;
    })(), V);
  }
  const U = /* @__PURE__ */ new Map();
  async function tt(e) {
    if (U.has(e)) return U.get(e);
    const i = (await (await et())([
      e
    ], {
      pooling: "mean",
      normalize: true
    })).tolist()[0] ?? [];
    return U.set(e, i), i;
  }
  const q = /* @__PURE__ */ new Map();
  async function nt(e) {
    if (q.has(e)) return q.get(e);
    const t = await C(() => import("./index-DFJJ7DME.js").then((d) => d.i), __vite__mapDeps([0,1])), { readFile: n } = await C(async () => {
      const { readFile: d } = await import("./__vite-browser-external-BIHI7g3E.js");
      return {
        readFile: d
      };
    }, []), { resolve: i } = await C(async () => {
      const { resolve: d } = await import("./__vite-browser-external-BIHI7g3E.js");
      return {
        resolve: d
      };
    }, []), o = i(process.cwd(), "public/models/classifiers"), c = i(o, `${e}.onnx`), r = i(o, `${e}-classes.json`), p = await t.InferenceSession.create(c), h = JSON.parse(await n(r, "utf-8")), l = {
      session: p,
      classMap: h
    };
    return q.set(e, l), l;
  }
  async function it(e, t) {
    const { session: n, classMap: i } = await nt(e), o = await C(() => import("./index-DFJJ7DME.js").then((g) => g.i), __vite__mapDeps([0,1])), c = new o.Tensor("float32", Float32Array.from(t), [
      1,
      t.length
    ]), r = n.inputNames[0], p = await n.run({
      [r]: c
    }), h = n.outputNames, l = h.find((g) => g.toLowerCase().includes("prob")) ?? h.at(-1), d = Array.from(p[l].data), u = {};
    for (let g = 0; g < d.length; g++) {
      const _ = i[String(g)];
      _ !== void 0 && (u[_] = d[g] ?? 0);
    }
    return u;
  }
  async function ot(e) {
    const t = await tt(e), n = [], { recordFleetFire: i } = await C(async () => {
      const { recordFleetFire: o } = await import("./index-DwiQ5yRy.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }).then((c) => c.aE);
      return {
        recordFleetFire: o
      };
    }, __vite__mapDeps([2,3]));
    for (const o of ce) try {
      const c = await it(o, t), r = Object.entries(c).sort(([, p], [, h]) => h - p)[0];
      n.push({
        modelId: o,
        label: (r == null ? void 0 : r[0]) ?? "",
        confidence: (r == null ? void 0 : r[1]) ?? 0,
        scores: c
      }), Object.keys(c).length > 0 && i(`classifiers/${o}`);
    } catch {
      n.push({
        modelId: o,
        label: "",
        confidence: 0,
        scores: {}
      });
    }
    return n;
  }
  const ie = ce.flatMap((e) => Ee[e]);
  if (ie.length !== 43) throw new Error(`NodeWorkerAdapter: expected 43 prediction labels, got ${ie.length}`);
  const z = 0.4, st = 2, rt = [
    "Mr",
    "Mrs",
    "Ms",
    "Dr",
    "Prof",
    "Jr",
    "Sr",
    "vs",
    "etc",
    "e\\.g",
    "i\\.e",
    "approx",
    "est",
    "fig",
    "vol",
    "no"
  ], at = new RegExp(`\\b(${rt.join("|")})\\.`, "gi"), ct = new RegExp(`(?<=[.!?][)"'\\]]?)\\s+(?=[A-Z"'\\[])`);
  function dt(e) {
    if (!e || !e.trim()) return [];
    let t = e;
    t = t.replace(at, (o) => o.replace(".", "")), t = t.replace(/(\d+)\.(\d+)/g, (o, c, r) => `${c}${r}`), t = t.replace(/\.{3,}/g, "");
    const n = t.split(/\n\s*\n+/), i = [];
    for (const o of n) {
      const c = o.split(ct);
      for (const r of c) {
        const p = r.replace(/\u0001/g, ".").replace(/\u0002/g, "...").trim();
        p.length > 0 && i.push(p);
      }
    }
    return i;
  }
  function G(e) {
    return !e.spread || Object.keys(e.spread).length === 0 ? [
      e.confidence
    ] : Object.keys(e.spread).sort().map((n) => e.spread[n] ?? 0);
  }
  function lt(e, t) {
    const n = Math.min(e.length, t.length);
    let i = 0;
    for (let o = 0; o < n; o++) {
      const c = (e[o] ?? 0) - (t[o] ?? 0);
      i += c * c;
    }
    return Math.sqrt(i);
  }
  function ke(e) {
    let t = 2166136261;
    for (let n = 0; n < e.length; n++) t ^= e.charCodeAt(n), t = Math.imul(t, 16777619) >>> 0;
    return t.toString(16).padStart(8, "0");
  }
  function ut(e) {
    return ke(e);
  }
  function pt(e, t) {
    return `chunk_${ke(`${e}|${t}`)}`;
  }
  const ht = dt, gt = async (e) => {
    const t = await ot(e), n = Me(t, 0);
    return Re(n);
  }, mt = (e, t, n) => {
    const i = G(e), o = G(t);
    return lt(i, o) > n;
  };
  function oe(e) {
    return {
      id: pt(e.messageId, e.position),
      messageId: e.messageId,
      position: e.position,
      text: e.sentences.join(" "),
      sentences: e.sentences.slice(),
      compoundStateSignature: e.emaSignature.slice(),
      sourceType: e.sourceType,
      domain: e.domain
    };
  }
  async function ve(e, t) {
    const n = (t == null ? void 0 : t.domain) ?? "conversation";
    if (n !== "conversation") throw new Error(`NotImplementedError: adaptiveChunkText domain '${n}' is not implemented in Phase 150. Only 'conversation' is supported; '${n}' ships in Phase 150.1.`);
    const i = (t == null ? void 0 : t.sentenceSplitter) ?? ht, o = (t == null ? void 0 : t.signalExtractor) ?? gt, c = (t == null ? void 0 : t.boundaryDetector) ?? mt, r = (t == null ? void 0 : t.sourceType) ?? "prose", p = le(), h = i(e);
    if (h.length === 0) return [];
    const l = `msg_${ut(e)}`, d = [];
    let u = [], g = [], _ = null;
    for (let S = 0; S < h.length; S++) {
      const f = h[S], k = await o(f), v = G(k);
      g.length !== v.length && (g = new Array(v.length).fill(0));
      const D = v.map((w, E) => z * w + (1 - z) * (g[E] ?? 0));
      if (S > 0 && _ && u.length >= st && c(_, k, p)) {
        d.push(oe({
          sentences: u,
          emaSignature: g,
          messageId: l,
          position: d.length,
          sourceType: r,
          domain: n
        })), u = [], g = new Array(v.length).fill(0), g = v.map((we) => z * we), u.push(f), _ = k;
        continue;
      }
      g = D, u.push(f), _ = k;
    }
    return u.length > 0 && d.push(oe({
      sentences: u,
      emaSignature: g,
      messageId: l,
      position: d.length,
      sourceType: r,
      domain: n
    })), d;
  }
  const ft = 3, yt = 0.3, St = {
    1: 1.5,
    2: 2.25,
    3: 3
  };
  function kt(e, t) {
    let n = 0;
    const i = e.compoundStateSignature, o = t.compoundStateSignature, c = Math.max(i.length, o.length);
    for (let r = 0; r < c; r++) {
      const p = (i[r] ?? 0) - (o[r] ?? 0);
      n += p * p;
    }
    return Math.sqrt(n);
  }
  function be(e, t, n, i) {
    const o = e[0].compoundStateSignature.length, c = new Array(o).fill(0);
    for (const l of e) for (let d = 0; d < o; d++) c[d] += l.compoundStateSignature[d] ?? 0;
    for (let l = 0; l < o; l++) c[l] /= e.length;
    let r;
    const p = e[0].fullCentroid;
    if (p && e.every((l) => l.fullCentroid && l.fullCentroid.length === p.length)) {
      const l = p.length;
      r = new Array(l).fill(0);
      for (const d of e) for (let u = 0; u < l; u++) r[u] += d.fullCentroid[u] ?? 0;
      for (let d = 0; d < l; d++) r[d] /= e.length;
    }
    return {
      id: `${n}::L${t}::P${i}`,
      text: e.map((l) => l.text).join(" "),
      parentMessageId: n,
      chunkPosition: i,
      siblingChunkIds: [],
      chunkLevel: t,
      compoundStateSignature: c,
      ...r !== void 0 ? {
        fullCentroid: r
      } : {},
      children: e
    };
  }
  function vt(e, t, n, i) {
    if (e.length <= 1) return e;
    const o = i * St[t], c = [];
    let r = [
      e[0]
    ];
    for (let l = 1; l < e.length; l++) {
      const d = e[l - 1], u = e[l];
      kt(d, u) <= o ? r.push(u) : (c.push(r), r = [
        u
      ]);
    }
    c.push(r);
    const p = c.map((l, d) => l.length === 1 ? l[0] : be(l, t, n, d)), h = p.map((l) => l.id);
    for (const l of p) l.siblingChunkIds = h.filter((d) => d !== l.id);
    return p;
  }
  function bt(e, t, n) {
    return be([
      e
    ], t, n, 0);
  }
  function Ae(e, t = yt) {
    if (e.length === 0) return [];
    const n = e[0].parentMessageId;
    let i = e.map((o) => ({
      ...o,
      children: []
    }));
    for (let o = 1; o <= ft; o++) {
      if (i.length === 1) {
        if (i[0].chunkLevel === 0) break;
        i = [
          bt(i[0], o, n)
        ];
        continue;
      }
      i = vt(i, o, n, t);
    }
    return i;
  }
  const At = "derived/pre-adaptive-chunking-backup.json", se = "binderos:pre-adaptive-chunking-backup";
  async function It() {
    const e = await b.atoms.toArray(), t = await b.atomIntelligence.toArray(), n = {
      phase: 150,
      reason: "pre-adaptive-chunking-rebuild",
      capturedAt: (/* @__PURE__ */ new Date()).toISOString(),
      atoms: e,
      atomIntelligence: t
    }, i = JSON.stringify(n, null, 2);
    if (typeof process < "u" && process.versions && process.versions.node) {
      const o = await C(() => import("./__vite-browser-external-BIHI7g3E.js"), []), c = await C(() => import("./__vite-browser-external-BIHI7g3E.js"), []), r = c.resolve(process.cwd(), At);
      return o.mkdirSync(c.dirname(r), {
        recursive: true
      }), o.writeFileSync(r, i, "utf-8"), r;
    }
    if (typeof window < "u") {
      try {
        localStorage.setItem(se, i);
      } catch (p) {
        console.warn("[rebuildAdaptiveChunks] localStorage quota exceeded, relying on download only", p);
      }
      const o = new Blob([
        i
      ], {
        type: "application/json"
      }), c = URL.createObjectURL(o), r = document.createElement("a");
      return r.href = c, r.download = `pre-adaptive-chunking-backup-${Date.now()}.json`, document.body.appendChild(r), r.click(), document.body.removeChild(r), URL.revokeObjectURL(c), se;
    }
    throw new Error("[rebuildAdaptiveChunks] no backup target available \u2014 neither Node fs nor browser window found");
  }
  async function _t() {
    console.log("[rebuildAdaptiveChunks] starting \u2014 writing backup first (D-22)");
    const e = await It();
    console.log(`[rebuildAdaptiveChunks] backup written to ${e}`);
    const t = {
      scanned: 0,
      rebuilt: 0,
      skipped: 0,
      chunksCreated: 0,
      orphanSidecarsDeleted: 0,
      backupPath: e
    }, i = (await b.atoms.where("type").equals("dialogue").toArray()).filter((c) => c.threadRole === "user");
    t.scanned = i.length, console.log(`[rebuildAdaptiveChunks] scanning ${i.length} user dialogue atoms`);
    const o = Date.now();
    for (let c = 0; c < i.length; c++) {
      const r = i[c];
      if (c % 10 === 0 && console.log(`[rebuildAdaptiveChunks] progress: ${c}/${i.length}`), Array.isArray(r.chunkIds) && r.chunkIds.length > 0) {
        t.skipped++;
        continue;
      }
      const p = await ve(r.content, {
        sourceType: "prose"
      });
      if (p.length === 0) {
        t.skipped++;
        continue;
      }
      const h = await b.atomIntelligence.get(r.id) !== void 0;
      await de(r.id), h && t.orphanSidecarsDeleted++;
      const l = p.map((S) => ({
        id: S.id,
        text: S.text,
        parentMessageId: r.id,
        chunkPosition: S.position,
        siblingChunkIds: p.filter((f) => f.id !== S.id).map((f) => f.id),
        chunkLevel: 0,
        compoundStateSignature: S.compoundStateSignature
      })), d = Ae(l), u = [], g = (S) => {
        for (const f of S) f.children && f.children.length > 0 ? (g(f.children), u.push($({
          id: f.id,
          parentMessageId: r.id,
          chunkPosition: f.chunkPosition,
          text: f.text,
          chunkLevel: f.chunkLevel,
          compoundStateSignature: f.compoundStateSignature,
          fullCentroid: f.fullCentroid,
          sourceType: "prose",
          siblingChunkIds: f.siblingChunkIds,
          childIds: f.children.map((k) => k.id),
          now: o
        }))) : u.push($({
          id: f.id,
          parentMessageId: r.id,
          chunkPosition: f.chunkPosition,
          text: f.text,
          chunkLevel: f.chunkLevel,
          compoundStateSignature: f.compoundStateSignature,
          fullCentroid: f.fullCentroid,
          sourceType: "prose",
          siblingChunkIds: f.siblingChunkIds,
          now: o
        }));
      };
      g(d);
      const _ = J.parse({
        ...r,
        updated_at: o,
        chunkIds: p.map((S) => S.id)
      });
      await b.atoms.bulkPut([
        _,
        ...u
      ]), t.rebuilt++, t.chunksCreated += p.length;
    }
    return console.log("[rebuildAdaptiveChunks] complete:", t), t;
  }
  typeof window < "u" && (window.__rebuildAdaptiveChunks = _t);
  async function wt(e) {
    const t = await b.atoms.get(e);
    if (!t) return {
      kind: "not_found",
      rebuiltChunkCount: 0,
      parentMessageId: e
    };
    if (t.type !== "dialogue" || !("content" in t) || !t.content) return {
      kind: "empty",
      rebuiltChunkCount: 0,
      parentMessageId: e
    };
    const n = await ve(t.content, {
      sourceType: "prose"
    });
    if (n.length === 0) return {
      kind: "empty",
      rebuiltChunkCount: 0,
      parentMessageId: e
    };
    await de(t.id);
    const i = Array.isArray(t.chunkIds) ? t.chunkIds : [];
    i.length > 0 && await b.atoms.bulkDelete(i);
    const o = Date.now(), c = n.map((d) => ({
      id: d.id,
      text: d.text,
      parentMessageId: t.id,
      chunkPosition: d.position,
      siblingChunkIds: n.filter((u) => u.id !== d.id).map((u) => u.id),
      chunkLevel: 0,
      compoundStateSignature: d.compoundStateSignature
    })), r = Ae(c), p = [], h = (d) => {
      for (const u of d) u.children && u.children.length > 0 ? (h(u.children), p.push($({
        id: u.id,
        parentMessageId: t.id,
        chunkPosition: u.chunkPosition,
        text: u.text,
        chunkLevel: u.chunkLevel,
        compoundStateSignature: u.compoundStateSignature,
        fullCentroid: u.fullCentroid,
        sourceType: "prose",
        siblingChunkIds: u.siblingChunkIds,
        childIds: u.children.map((g) => g.id),
        now: o
      }))) : p.push($({
        id: u.id,
        parentMessageId: t.id,
        chunkPosition: u.chunkPosition,
        text: u.text,
        chunkLevel: u.chunkLevel,
        compoundStateSignature: u.compoundStateSignature,
        fullCentroid: u.fullCentroid,
        sourceType: "prose",
        siblingChunkIds: u.siblingChunkIds,
        now: o
      }));
    };
    h(r);
    const l = J.parse({
      ...t,
      updated_at: o,
      chunkIds: n.map((d) => d.id)
    });
    return await b.atoms.bulkPut([
      l,
      ...p
    ]), {
      kind: "success",
      rebuiltChunkCount: n.length,
      parentMessageId: e
    };
  }
  async function X(e, t) {
    const n = e.now();
    try {
      const i = await t(), o = e.now();
      return {
        kind: "completed",
        startedAt: n,
        completedAt: o,
        costMs: Math.max(0, o - n),
        detail: i
      };
    } catch (i) {
      const o = e.now(), c = i instanceof Error ? i.message : String(i);
      return {
        kind: "failed",
        startedAt: n,
        completedAt: o,
        costMs: Math.max(0, o - n),
        errorMessage: c
      };
    }
  }
  async function Ct(e) {
    return X(e, async () => ({
      prunedCount: await (e.prune ?? (() => De(null)))()
    }));
  }
  async function Tt() {
    const t = [
      ...await b.entities.toArray()
    ].sort((r, p) => r.id.localeCompare(p.id)), n = /* @__PURE__ */ new Map();
    for (const r of t) {
      const p = r.type;
      if (p !== "PER" && p !== "LOC" && p !== "ORG") continue;
      const h = n.get(p) ?? [];
      h.push(r), n.set(p, h);
    }
    const i = /* @__PURE__ */ new Set();
    let o = 0, c = 0;
    for (const [r, p] of n.entries()) {
      const h = Oe(r);
      for (let l = 0; l < p.length; l++) {
        const d = p[l];
        if (!i.has(d.id)) for (let u = l + 1; u < p.length; u++) {
          const g = p[u];
          if (i.has(g.id)) continue;
          if (c++, h.matchScore(g.canonicalName, {
            canonicalName: d.canonicalName,
            aliases: d.aliases ?? []
          }) >= 1) {
            const S = d.mentionCount ?? 0, f = g.mentionCount ?? 0;
            let k = d, v = g;
            if (f > S) k = g, v = d;
            else if (S === f) {
              const w = d.firstSeen ?? 0, E = g.firstSeen ?? 0;
              (E < w || w === E && g.id < d.id) && (k = g, v = d);
            }
            if (!await b.entityRelations.where("[sourceEntityId+targetEntityId]").equals([
              v.id,
              k.id
            ]).first()) {
              const w = `alias-of_${v.id}_${k.id}`;
              await b.entityRelations.get(w) || (await b.entityRelations.put({
                id: w,
                sourceEntityId: v.id,
                targetEntityId: k.id,
                relationshipType: "alias-of",
                confidence: 1,
                sourceAttribution: "system",
                evidence: [],
                version: 1,
                deviceId: "phase-154-sweep",
                updatedAt: Date.now()
              }), o++);
            }
            if (i.add(v.id), v.id === d.id) break;
          }
        }
      }
    }
    return {
      mergedCount: o,
      scannedPairs: c
    };
  }
  async function Et(e) {
    return X(e, async () => {
      const t = e.sweep ?? Tt, { mergedCount: n, scannedPairs: i } = await t();
      return {
        mergedCount: n,
        scannedPairs: i
      };
    });
  }
  async function Mt(e) {
    return X(e, async () => {
      const t = e.previousThreshold ?? le, n = e.recomputeThreshold ?? Le, i = t(), o = await n();
      return {
        threshold: o,
        previousThreshold: i,
        delta: o - i
      };
    });
  }
  async function Rt(e) {
    const t = e.now();
    if (!e.userOptInForScheduledRebuild()) {
      const n = e.now();
      return {
        kind: "skipped",
        startedAt: t,
        completedAt: n,
        costMs: Math.max(0, n - t),
        detail: {
          reason: "consent_required"
        }
      };
    }
    if (!e.rebuildScope || !e.rebuildScope.parentMessageId) {
      const n = e.now();
      return {
        kind: "skipped",
        startedAt: t,
        completedAt: n,
        costMs: Math.max(0, n - t),
        detail: {
          reason: "no_scope"
        }
      };
    }
    try {
      const i = await (e.rebuildScoped ?? wt)(e.rebuildScope.parentMessageId), o = e.now();
      return {
        kind: "completed",
        startedAt: t,
        completedAt: o,
        costMs: Math.max(0, o - t),
        detail: {
          rebuiltChunkCount: i.rebuiltChunkCount,
          resultKind: i.kind
        }
      };
    } catch (n) {
      const i = e.now();
      return {
        kind: "failed",
        startedAt: t,
        completedAt: i,
        costMs: Math.max(0, i - t),
        errorMessage: n instanceof Error ? n.message : String(n)
      };
    }
  }
  function H(e) {
    return Object.freeze({
      ...e,
      targetVitalSigns: Object.freeze([
        ...e.targetVitalSigns
      ])
    });
  }
  const Ot = Object.freeze({
    pruneStaleAssertions: Object.freeze({
      descriptor: H({
        kind: "pruneStaleAssertions",
        costTier: "MEDIUM",
        targetVitalSigns: [
          "vs5"
        ],
        label: "Prune stale assertions (VS5 integrity)",
        requiresConsent: false
      }),
      run: Ct
    }),
    consolidateEntitiesSweep: Object.freeze({
      descriptor: H({
        kind: "consolidateEntitiesSweep",
        costTier: "MEDIUM",
        targetVitalSigns: [
          "vs5",
          "vs3"
        ],
        label: "Consolidate entities sweep (VS5 + VS3)",
        requiresConsent: false
      }),
      run: Et
    }),
    recomputeThreshold: Object.freeze({
      descriptor: H({
        kind: "recomputeThreshold",
        costTier: "LOW",
        targetVitalSigns: [
          "vs3"
        ],
        label: "Recompute adaptive chunking threshold (VS3)",
        requiresConsent: false
      }),
      run: Mt
    }),
    rebuildChunksScoped: Object.freeze({
      descriptor: H({
        kind: "rebuildChunksScoped",
        costTier: "HIGH",
        targetVitalSigns: [
          "vs2"
        ],
        label: "Rebuild binder chunks scoped (VS2 freshness, consent-gated)",
        requiresConsent: true
      }),
      run: Rt
    })
  }), Dt = 3e4, re = 250, Lt = 3e4;
  typeof globalThis.requestIdleCallback > "u" && (globalThis.requestIdleCallback = (e, t) => {
    const n = Date.now();
    return window.setTimeout(() => {
      e({
        didTimeout: false,
        timeRemaining: () => Math.max(0, 50 - (Date.now() - n))
      });
    }, (t == null ? void 0 : t.timeout) ?? 1);
  }, globalThis.cancelIdleCallback = (e) => clearTimeout(e));
  let B = false, K = false, M = false, x = null, Y = Date.now(), j = false, Ie = "LOW";
  const R = [];
  let W = null;
  function xt(e) {
    if (R.length === 0) return;
    const t = [
      ...R
    ];
    R.length = 0;
    for (const n of t) try {
      n(e);
    } catch (i) {
      console.warn("[optimization-scheduler-worker] listener error", i);
    }
  }
  async function Pt() {
    const e = await b.vitalSignsSnapshots.orderBy("computedAt").reverse().first();
    return e ? (W !== null && e.snapshotId !== W && xt(e), W = e.snapshotId, e) : null;
  }
  Vt = function(e, t) {
    const i = t - Y >= Lt, o = (e == null ? void 0 : e.timeRemaining()) ?? 50;
    return i && j && o >= re ? "HIGH" : o >= re ? "MEDIUM" : "LOW";
  };
  function Ht() {
    return `ah-${Date.now()}-${Math.floor(Math.random() * 1e9).toString(36)}`;
  }
  function Nt() {
    return {
      readLatestSnapshot: async () => Pt(),
      subscribeToNextSnapshot: (e) => (R.push(e), () => {
        const t = R.indexOf(e);
        t >= 0 && R.splice(t, 1);
      }),
      appendActionHistory: async (e) => {
        const t = Ht(), n = {
          ...e,
          actionHistoryId: t
        };
        return await b.actionHistory.put(n), await Pe(b), t;
      },
      updateActionHistory: async (e, t) => {
        await b.actionHistory.update(e, t);
      },
      actionCatalog: Ot,
      selectAction: $e,
      userOptInForScheduledRebuild: () => j,
      getWeights: () => ({
        vs1: 1,
        vs2: 1,
        vs3: 1,
        vs4: 1,
        vs5: 2,
        vs6: 1,
        vs7: 1
      }),
      getCurrentMaxCostTier: () => Ie,
      now: () => Date.now(),
      nextSnapshotTimeoutMs: 3e4
    };
  }
  async function _e(e) {
    if (K = false, !(!B || M) && x !== null && !(typeof document < "u" && document.visibilityState === "hidden")) {
      Ie = Vt(e, Date.now());
      try {
        await x.tick();
      } catch (t) {
        console.warn("[optimization-scheduler-worker] tick error", t);
      } finally {
        N();
      }
    }
  }
  function N() {
    !B || K || M || (K = true, requestIdleCallback((e) => {
      _e(e);
    }, {
      timeout: Dt
    }));
  }
  jt = function() {
    if (!B) {
      if (B = true, x = new Ne(Nt()), typeof document < "u") {
        document.addEventListener("visibilitychange", () => {
          document.visibilityState === "hidden" ? M = true : (M = false, Y = Date.now(), N());
        });
        const e = [
          "pointermove",
          "keydown",
          "click",
          "scroll",
          "touchstart"
        ];
        for (const t of e) document.addEventListener(t, () => {
          Y = Date.now();
        }, {
          passive: true
        });
      }
      if (typeof globalThis < "u") {
        const e = globalThis;
        e.__binderOs = e.__binderOs ?? {}, e.__binderOs.optimizationScheduler = {
          getState: () => (x == null ? void 0 : x.getState()) ?? null,
          resetCircuitBreaker: () => x == null ? void 0 : x.resetCircuitBreaker(),
          setConsent: (t) => {
            j = t;
          },
          getConsent: () => j,
          pause: () => {
            M = true;
          },
          resume: () => {
            M = false, N();
          },
          triggerTick: () => _e(null)
        };
      }
      N();
    }
  };
});
export {
  __tla,
  Vt as computeMaxCostTier,
  jt as registerOptimizationSchedulerWorker
};
