const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/specialist-runner-CCkoesUF.js","assets/index-DwiQ5yRy.js","assets/index-brdPi_7R.css","assets/types-B4_dTEw3.js","assets/task-vector-CqxRTUSZ.js","assets/calendar-vector-BiypB7tQ.js","assets/person-vector-BxwAemBA.js"])))=>i.map(i=>d[i]);
import { _ as a, h as l, d as f, __tla as __tla_0 } from "./index-DwiQ5yRy.js";
let p, m, V, h, u;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  h = function(t, n) {
    return n === void 0 ? true : t.updated_at > n.lastComputed;
  };
  p = function(t, n) {
    var _a, _b;
    if (t.dueDate !== n.dueDate || t.status !== n.status || t.energy !== n.energy || t.context !== n.context) return true;
    const r = ((_a = t.links) == null ? void 0 : _a.length) ?? 0, c = ((_b = n.links) == null ? void 0 : _b.length) ?? 0;
    return r !== c;
  };
  u = function(t, n, r, c) {
    (async () => {
      try {
        const e = await l(t), o = {
          vectorType: n,
          data: Array.from(r),
          lastComputed: Date.now(),
          schemaVersion: 1
        };
        e.canonicalVector = o, e.version++, e.lastUpdated = Date.now(), await f.atomIntelligence.put(e), n === "task" && a(async () => {
          const { runConsensusForAtom: i, incrementVectorCount: s } = await import("./specialist-runner-CCkoesUF.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          });
          return {
            runConsensusForAtom: i,
            incrementVectorCount: s
          };
        }, __vite__mapDeps([0,1,2,3])).then(({ runConsensusForAtom: i, incrementVectorCount: s }) => {
          const d = c ?? "default";
          s(d), i(t, d);
        }).catch(() => {
        });
      } catch (e) {
        console.warn("[vector-cache] writeCanonicalVector failed (non-fatal):", e);
      }
    })();
  };
  m = function(t, n, r, c) {
    t.type === "task" ? a(async () => {
      const { computeTaskVector: e } = await import("./task-vector-CqxRTUSZ.js");
      return {
        computeTaskVector: e
      };
    }, __vite__mapDeps([4,3,1,2])).then(({ computeTaskVector: e }) => {
      const o = e(t, n, r, c);
      u(t.id, "task", o, t.binderId);
    }).catch((e) => {
      console.warn("[vector-cache] recomputeAndCacheVector (task) import failed:", e);
    }) : t.type === "event" && a(async () => {
      const { computeCalendarVector: e } = await import("./calendar-vector-BiypB7tQ.js");
      return {
        computeCalendarVector: e
      };
    }, __vite__mapDeps([5,3,1,2])).then(({ computeCalendarVector: e }) => {
      const o = e(t, n, r, c);
      u(t.id, "calendar", o);
    }).catch((e) => {
      console.warn("[vector-cache] recomputeAndCacheVector (event) import failed:", e);
    });
  };
  V = function(t, n) {
    a(async () => {
      const { computePersonVector: r } = await import("./person-vector-BxwAemBA.js");
      return {
        computePersonVector: r
      };
    }, __vite__mapDeps([6,3,1,2])).then(({ computePersonVector: r }) => {
      const c = r(t, n), e = `entity:${t.id}`;
      u(e, "person", c);
    }).catch((r) => {
      console.warn("[vector-cache] recomputePersonVector import failed:", r);
    });
  };
});
export {
  __tla,
  p as dirtyCheckTaskFields,
  m as recomputeAndCacheVector,
  V as recomputePersonVector,
  h as shouldRecomputeVector,
  u as writeCanonicalVector
};
