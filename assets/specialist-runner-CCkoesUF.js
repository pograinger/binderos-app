const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-AK5O2Dun.js","assets/index-DwiQ5yRy.js","assets/index-brdPi_7R.css"])))=>i.map(i=>d[i]);
import { d as v, V as B, _ as F, __tla as __tla_0 } from "./index-DwiQ5yRy.js";
import { P as H, d as U, C as z, e as y, f as W, g as o, h as $, i as c, E as q, j as G, k as K, l as J, S as Q, m as x, n as X, o as P, q as Y, r as k, s as t, a as n, t as l, u as b, v as r, w as Z, x as ee, b as S, F as te, T as ne } from "./types-B4_dTEw3.js";
let fe, Ie;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const oe = {
    "time-pressure": 1.5,
    dependency: 1.5,
    staleness: 1,
    "energy-context": 1,
    "date-temporal": 1.5,
    "dependency-structural": 1.5,
    "math-consistency": 1.5,
    "structural-logic": 1.5,
    ambiguity: 1,
    "cognitive-complexity": 1,
    "emotional-tone": 1,
    "temporal-drift": 1,
    "context-switch": 1,
    "social-blocking": 1,
    motivation: 1,
    "portfolio-risk": 1
  };
  function e(i, a, _) {
    const d = i.indexOf(a);
    if (d === -1) throw new Error(`[consensus/types] Dimension "${a}" not found in vector schema. Available: ${i.join(", ")}`);
    return _ + d;
  }
  function m(i, a) {
    return Array.from({
      length: a
    }, (_, d) => i + d);
  }
  const se = m(U, H), re = m(y, z);
  m(o, W);
  m(c, $);
  const ie = m(G, q), D = m(J, K), ae = m(x, Q), _e = m(P, X), ce = m(k, Y), le = {
    "time-pressure": {
      name: "time-pressure",
      featureIndices: [
        e(n, "has_deadline", t),
        e(n, "days_to_deadline_norm", t),
        e(n, "time_pressure_score", t),
        ...re
      ],
      hiddenLayers: [
        64,
        32
      ]
    },
    dependency: {
      name: "dependency",
      featureIndices: [
        e(n, "is_waiting_for", t),
        e(n, "has_person_dep", t),
        e(n, "entity_reliability", t),
        e(n, "entity_resp_fast", t),
        e(n, "entity_resp_slow", t),
        e(n, "entity_resp_unknown", t),
        ...se
      ],
      hiddenLayers: [
        64,
        32
      ]
    },
    staleness: {
      name: "staleness",
      featureIndices: [
        e(n, "age_norm", t),
        e(n, "staleness_norm", t),
        e(n, "has_deadline", t),
        e(n, "days_to_deadline_norm", t),
        e(n, "prev_staleness_score", t),
        ...D,
        e(l, "stale_risk", c),
        e(l, "consensus_prior", c)
      ],
      hiddenLayers: [
        12,
        6
      ]
    },
    "energy-context": {
      name: "energy-context",
      featureIndices: [
        e(n, "ctx_home", t),
        e(n, "ctx_office", t),
        e(n, "ctx_phone", t),
        e(n, "ctx_computer", t),
        e(n, "ctx_errands", t),
        e(n, "ctx_anywhere", t),
        e(n, "energy_low", t),
        e(n, "energy_medium", t),
        e(n, "energy_high", t),
        e(n, "time_pressure_score", t),
        e(n, "prev_energy_fit", t),
        e(S, "energy_low", y),
        e(S, "energy_medium", y),
        e(S, "energy_high", y),
        e(S, "time_pressure_score", y),
        e(S, "overrun_risk", y),
        e(l, "context_switch_cost", c),
        e(l, "consensus_prior", c)
      ],
      hiddenLayers: [
        64,
        32
      ]
    },
    "date-temporal": {
      name: "date-temporal",
      featureIndices: [
        e(n, "has_deadline", t),
        e(n, "days_to_deadline_norm", t),
        e(n, "age_norm", t),
        e(n, "staleness_norm", t),
        e(n, "prev_staleness_score", t),
        e(n, "time_pressure_score", t),
        e(n, "has_scheduled_date", t),
        e(n, "is_pinned_critical", t)
      ],
      hiddenLayers: []
    },
    "dependency-structural": {
      name: "dependency-structural",
      featureIndices: [
        e(n, "is_waiting_for", t),
        e(n, "has_person_dep", t),
        e(n, "entity_reliability", t),
        e(n, "entity_resp_fast", t),
        e(n, "entity_resp_slow", t),
        e(n, "entity_resp_unknown", t),
        e(n, "tag_count_norm", t),
        e(n, "backlink_count_norm", t)
      ],
      hiddenLayers: []
    },
    "math-consistency": {
      name: "math-consistency",
      featureIndices: [
        e(n, "content_length_norm", t),
        e(n, "tag_count_norm", t),
        e(n, "enrichment_depth_norm", t),
        e(n, "backlink_count_norm", t),
        e(n, "has_deadline", t),
        e(n, "has_project", t),
        e(n, "has_person_dep", t),
        e(n, "age_norm", t)
      ],
      hiddenLayers: []
    },
    "structural-logic": {
      name: "structural-logic",
      featureIndices: [
        e(n, "content_length_norm", t),
        e(n, "has_deadline", t),
        e(n, "has_project", t),
        e(n, "tag_count_norm", t),
        e(n, "enrichment_depth_norm", t),
        e(n, "backlink_count_norm", t),
        e(n, "age_norm", t),
        e(n, "staleness_norm", t)
      ],
      hiddenLayers: []
    },
    ambiguity: {
      name: "ambiguity",
      featureIndices: [
        ...ce,
        ...ie,
        e(n, "enrichment_depth_norm", t)
      ],
      hiddenLayers: [
        32,
        16
      ]
    },
    "cognitive-complexity": {
      name: "cognitive-complexity",
      featureIndices: [
        e(r, "cog_load_trivial", o),
        e(r, "cog_load_routine", o),
        e(r, "cog_load_complex", o),
        e(r, "cog_load_deep", o),
        e(r, "time_est_quick", o),
        e(r, "time_est_short", o),
        e(r, "time_est_medium", o),
        e(r, "time_est_long", o),
        e(n, "content_length_norm", t),
        e(n, "tag_count_norm", t),
        e(n, "backlink_count_norm", t),
        e(ee, "coordination_complexity_norm", x),
        e(l, "stress_risk", c),
        e(l, "context_switch_cost", c),
        e(l, "consensus_prior", c)
      ],
      hiddenLayers: [
        32,
        16
      ]
    },
    "emotional-tone": {
      name: "emotional-tone",
      featureIndices: [
        e(r, "emotion_positive", o),
        e(r, "emotion_neutral", o),
        e(r, "emotion_negative", o),
        e(r, "emotion_anxious", o),
        e(l, "stress_risk", c),
        e(b, "motivation_alignment", k)
      ],
      hiddenLayers: [
        32,
        16
      ]
    },
    "temporal-drift": {
      name: "temporal-drift",
      featureIndices: [
        ...D,
        e(n, "age_norm", t),
        e(n, "staleness_norm", t),
        e(n, "prev_staleness_score", t),
        e(l, "stale_risk", c),
        e(l, "consensus_prior", c)
      ],
      hiddenLayers: [
        32,
        16
      ]
    },
    "context-switch": {
      name: "context-switch",
      featureIndices: [
        e(l, "context_switch_cost", c),
        e(l, "deep_work_block", c),
        e(r, "domain_work", o),
        e(r, "domain_personal", o),
        e(r, "domain_health", o),
        e(r, "domain_finance", o),
        e(r, "domain_creative", o),
        e(r, "domain_tech", o),
        e(r, "domain_social", o),
        e(r, "domain_admin", o),
        e(r, "cog_load_complex", o),
        e(r, "cog_load_deep", o),
        e(Z, "context_saturation", P)
      ],
      hiddenLayers: [
        32,
        16
      ]
    },
    "social-blocking": {
      name: "social-blocking",
      featureIndices: [
        ...ae,
        e(r, "collab_solo", o),
        e(r, "collab_delegation", o),
        e(r, "collab_collaboration", o),
        e(l, "delegate_candidate", c),
        e(n, "is_waiting_for", t),
        e(n, "has_person_dep", t),
        e(n, "entity_reliability", t)
      ],
      hiddenLayers: [
        32,
        16
      ]
    },
    motivation: {
      name: "motivation",
      featureIndices: [
        e(b, "motivation_alignment", k),
        e(r, "gtd_horizon_runway", o),
        e(r, "gtd_horizon_10k", o),
        e(r, "gtd_horizon_20k", o),
        e(r, "gtd_horizon_30k", o),
        e(r, "gtd_horizon_40k", o),
        e(r, "priority_urgent_important", o),
        e(r, "priority_urgent_not", o),
        e(r, "priority_not_urgent_important", o),
        e(r, "priority_not_urgent_not", o),
        e(l, "promote_to_project", c),
        e(n, "is_pinned_someday", t),
        e(l, "stress_risk", c),
        e(l, "consensus_prior", c)
      ],
      hiddenLayers: [
        32,
        16
      ]
    },
    "portfolio-risk": {
      name: "portfolio-risk",
      featureIndices: [
        ..._e,
        e(n, "has_project", t),
        e(n, "has_deadline", t),
        e(n, "time_pressure_score", t),
        e(l, "stale_risk", c),
        e(l, "review_cadence_mismatch", c)
      ],
      hiddenLayers: [
        32,
        16
      ]
    }
  }, de = 0.05;
  function me(i) {
    const _ = Math.max(1e-7, Math.min(0.9999999, i)), d = -(_ * Math.log(_) + (1 - _) * Math.log(1 - _)), u = Math.log(2);
    return 1 - d / u;
  }
  function ue(i) {
    if (i.length === 0) throw new Error("No specialist outputs");
    let a = 0, _ = 0;
    for (const s of i) a += s.probability * s.weight, _ += s.weight;
    const d = a / _, u = i.filter((s) => s.probability >= 0.5).length, L = Math.ceil(i.length / 2), w = u >= L;
    let E;
    const N = {
      time: [
        "time-pressure",
        "temporal-drift",
        "staleness"
      ],
      blocking: [
        "dependency",
        "social-blocking"
      ],
      cognitive: [
        "cognitive-complexity",
        "context-switch",
        "ambiguity"
      ],
      affective: [
        "emotional-tone",
        "motivation"
      ],
      structural: [
        "date-temporal",
        "dependency-structural",
        "math-consistency",
        "structural-logic"
      ],
      portfolio: [
        "portfolio-risk",
        "energy-context"
      ]
    }, A = new Map(i.filter((s) => (s.confidence ?? me(s.probability)) >= de).map((s) => [
      s.name,
      s.probability
    ]));
    let f = 0, I = 0;
    for (const s of Object.values(N)) {
      const p = s.filter((h) => A.has(h));
      if (p.length < 2) continue;
      let R = 0, T = 0;
      for (let h = 0; h < p.length; h++) for (let M = h + 1; M < p.length; M++) {
        const V = p[h], j = p[M];
        R += Math.abs(A.get(V) - A.get(j)), T++;
      }
      T > 0 && (f += 1 - R / T, I++);
    }
    return E = I > 0 ? f / I : 0.5, {
      weightedProbability: d,
      majorityVote: w,
      agreementScore: E,
      specialistContributions: i,
      computedAt: Date.now()
    };
  }
  const O = /* @__PURE__ */ new Map(), pe = 15;
  fe = function(i) {
    const a = O.get(i) ?? 0;
    O.set(i, a + 1);
  };
  async function ge(i) {
    if (O.has(i)) return O.get(i);
    try {
      const a = await v.atomIntelligence.filter((_) => {
        var _a;
        return ((_a = _.canonicalVector) == null ? void 0 : _a.vectorType) === "task";
      }).count();
      return O.set(i, a), a;
    } catch {
      return 0;
    }
  }
  let g = null;
  const C = /* @__PURE__ */ new Map();
  function he() {
    return g || (g = new Worker(new URL("/binderos-app/assets/consensus-worker-x1cVju_w.js", import.meta.url), {
      type: "module"
    }), g.onmessage = (i) => {
      const a = i.data, _ = C.get(a.id);
      _ && (C.delete(a.id), a.type === "SPECIALIST_RESULTS" ? _.resolve(a.results) : a.type === "SPECIALIST_ERROR" && _.reject(new Error(a.error ?? "Unknown specialist error")));
    }, g.onerror = (i) => {
      for (const [a, _] of C) _.reject(new Error(`[consensus-worker] Worker error: ${i.message}`)), C.delete(a);
      g = null;
    }, g);
  }
  Ie = function(i, a) {
    (async () => {
      try {
        if (await ge(a) < pe) return;
        const d = await v.atomIntelligence.get(i);
        if (!d) return;
        const u = d.canonicalVector;
        if (!u || u.vectorType !== "task") return;
        const L = new Array(te).fill(0);
        for (let s = 0; s < u.data.length && s < ne; s++) L[s] = u.data[s];
        const w = Object.values(le).map((s) => ({
          name: s.name,
          indices: s.featureIndices
        })), E = `${i}-${Date.now()}`, N = he(), f = (await new Promise((s, p) => {
          C.set(E, {
            resolve: s,
            reject: p
          }), N.postMessage({
            type: "RUN_SPECIALISTS",
            id: E,
            fullVector: L,
            slices: w
          });
        })).map((s) => ({
          name: s.name,
          probability: s.probability,
          weight: oe[s.name] ?? 1
        })).filter((s) => s.weight > 0);
        if (f.length === 0) return;
        const I = ue(f);
        B(i, I), F(async () => {
          const { updateBinderEII: s } = await import("./index-AK5O2Dun.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          });
          return {
            updateBinderEII: s
          };
        }, __vite__mapDeps([0,1,2])).then(({ updateBinderEII: s }) => {
          s(a);
        }).catch(() => {
        });
      } catch (_) {
        console.warn("[specialist-runner] runConsensusForAtom failed (non-fatal):", _);
      }
    })();
  };
});
export {
  __tla,
  fe as incrementVectorCount,
  Ie as runConsensusForAtom
};
