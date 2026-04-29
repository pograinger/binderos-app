const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DwiQ5yRy.js","assets/index-brdPi_7R.css"])))=>i.map(i=>d[i]);
import { _ as i, __tla as __tla_0 } from "./index-DwiQ5yRy.js";
let m, g, f, l, u, _, d;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  l = async function(t, a) {
    if (!t || t.length < 3) return;
    a.sendCommand({
      type: "CREATE_INBOX_ITEM",
      payload: {
        content: t
      }
    });
    const e = a.getEmbeddingWorker();
    e && a.runCognitiveSignalsForAtom(e, crypto.randomUUID(), t);
    const n = crypto.randomUUID();
    try {
      await a.detectEntitiesForAtom(n, t);
    } catch {
    }
  };
  u = async function() {
    const { db: t } = await i(async () => {
      const { db: a } = await import("./index-DwiQ5yRy.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }).then((e) => e.aB);
      return {
        db: a
      };
    }, __vite__mapDeps([0,1]));
    await t.table("config").put({
      key: "cold-start-complete",
      value: {
        completedAt: Date.now()
      }
    });
  };
  m = async function() {
    var _a, _b;
    try {
      const { db: t } = await i(async () => {
        const { db: e } = await import("./index-DwiQ5yRy.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }).then((n) => n.aB);
        return {
          db: e
        };
      }, __vite__mapDeps([0,1]));
      return !!((_b = (_a = await t.table("config").get("cold-start-complete")) == null ? void 0 : _a.value) == null ? void 0 : _b.completedAt);
    } catch {
      return false;
    }
  };
  d = async function() {
    try {
      const { db: t } = await i(async () => {
        const { db: a } = await import("./index-DwiQ5yRy.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }).then((e) => e.aB);
        return {
          db: a
        };
      }, __vite__mapDeps([0,1]));
      await t.table("config").put({
        key: "magic-moment-eligible",
        value: {
          setAt: Date.now()
        }
      });
    } catch {
    }
  };
  g = async function() {
    var _a, _b;
    try {
      const { db: t } = await i(async () => {
        const { db: n } = await import("./index-DwiQ5yRy.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }).then((o) => o.aB);
        return {
          db: n
        };
      }, __vite__mapDeps([0,1])), a = await t.table("config").get("magic-moment-eligible"), e = await t.table("config").get("magic-moment-fired");
      return !!((_a = a == null ? void 0 : a.value) == null ? void 0 : _a.setAt) && !((_b = e == null ? void 0 : e.value) == null ? void 0 : _b.firedAt);
    } catch {
      return false;
    }
  };
  _ = async function() {
    var _a, _b;
    try {
      const { db: t } = await i(async () => {
        const { db: e } = await import("./index-DwiQ5yRy.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }).then((n) => n.aB);
        return {
          db: e
        };
      }, __vite__mapDeps([0,1]));
      if ((_b = (_a = await t.table("config").get("first-launch-at")) == null ? void 0 : _a.value) == null ? void 0 : _b.at) return;
      await t.table("config").put({
        key: "first-launch-at",
        value: {
          at: Date.now()
        }
      });
    } catch {
    }
  };
  f = async function() {
    var _a, _b;
    try {
      const { db: t } = await i(async () => {
        const { db: c } = await import("./index-DwiQ5yRy.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }).then((r) => r.aB);
        return {
          db: c
        };
      }, __vite__mapDeps([0,1])), a = Date.now(), n = ((_b = (_a = await t.table("config").get("first-launch-at")) == null ? void 0 : _a.value) == null ? void 0 : _b.at) ?? a, o = a - n;
      console.info(`[MagicMoment] Time-to-magic: ${Math.round(o / 1e3)}s (target: <300s)`), await t.table("config").put({
        key: "magic-moment-fired",
        value: {
          firedAt: a,
          timeToMagicMs: o
        }
      });
    } catch {
    }
  };
});
export {
  __tla,
  m as isColdStartComplete,
  g as isMagicMomentEligible,
  f as logTimeToMagic,
  l as processColdStartAnswer,
  u as writeColdStartComplete,
  _ as writeFirstLaunchAt,
  d as writeMagicMomentEligible
};
