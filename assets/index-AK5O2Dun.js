const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DwiQ5yRy.js","assets/index-brdPi_7R.css"])))=>i.map(i=>d[i]);
import { _ as y, __tla as __tla_0 } from "./index-DwiQ5yRy.js";
let I, _;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  I = function(c, e = 0, l) {
    var _a;
    if (c.length === 0) return {
      coherence: 0,
      stability: 0,
      impact: 0,
      trend: 0,
      eii: 0
    };
    const s = c.map((r) => r.specialistContributions.map((o) => o.probability)), u = s.length, n = ((_a = s[0]) == null ? void 0 : _a.length) ?? 0;
    let a = 0;
    if (u >= 2 && n > 0) {
      let r = 0;
      for (let o = 0; o < n; o++) {
        let h = 1 / 0, f = -1 / 0;
        for (let g = 0; g < u; g++) {
          const d = s[g][o];
          d < h && (h = d), d > f && (f = d);
        }
        r += f - h;
      }
      a = r / n;
    }
    const m = a, t = c.reduce((r, o) => r + o.agreementScore, 0) / c.length, i = l !== void 0 ? Math.min(1, Math.max(0, (a - l) * 5)) : 0, p = [
      a,
      t
    ];
    e > 0 && p.push(e);
    const b = p.reduce((r, o) => r + o, 0) / p.length;
    return {
      coherence: m,
      stability: t,
      impact: e,
      trend: i,
      eii: b
    };
  };
  _ = async function(c) {
    try {
      const { db: e } = await y(async () => {
        const { db: t } = await import("./index-DwiQ5yRy.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }).then((i) => i.aB);
        return {
          db: t
        };
      }, __vite__mapDeps([0,1])), l = await e.atomIntelligence.filter((t) => t.consensusRisk !== void 0 && t.consensusRisk !== null).toArray();
      if (l.length === 0) return;
      const s = l.map((t) => {
        const i = t.consensusRisk;
        return {
          weightedProbability: i.weightedProbability,
          majorityVote: i.majorityVote,
          agreementScore: i.agreementScore,
          specialistContributions: i.specialistContributions,
          computedAt: i.computedAt
        };
      });
      let u;
      try {
        const t = await e.binderIntelligence.get(c);
        t && (u = t.coherence);
      } catch {
      }
      const n = I(s, 0, u), a = Date.now(), m = {
        binderId: c,
        coherence: n.coherence,
        stability: n.stability,
        impact: n.impact,
        trend: n.trend,
        eii: n.eii,
        atomCount: s.length,
        computedAt: a,
        updatedAt: a
      };
      await e.binderIntelligence.put(m);
    } catch (e) {
      console.warn("[updateBinderEII] Non-fatal error:", e);
    }
  };
});
export {
  __tla,
  I as computeEII,
  _ as updateBinderEII
};
