const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/relay-manager-CX_6FBZQ.js","assets/index-DwiQ5yRy.js","assets/index-brdPi_7R.css"])))=>i.map(i=>d[i]);
import { J as l, K as R, O as S, L as T, f as v, E as p, b as B, g as C, _ as U, __tla as __tla_0 } from "./index-DwiQ5yRy.js";
import { getStoredSyncFolder as E, ensurePermission as A, startSync as K, getBinderProvider as x, getCognitiveProvider as L, __tla as __tla_1 } from "./sync-folder-manager-D3PsPwFB.js";
let tt, W, X, Q, et;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  const i = (t) => l((e, s) => {
    t.onerror = (r) => s(new Error(r.target.error)), t.onsuccess = (r) => e(r.target.result);
  }), O = (t, e) => l((s, r) => {
    const n = indexedDB.open(t);
    n.onupgradeneeded = (o) => e(o.target.result), n.onerror = (o) => r(R(o.target.error)), n.onsuccess = (o) => {
      const a = o.target.result;
      a.onversionchange = () => {
        a.close();
      }, s(a);
    };
  }), k = (t) => i(indexedDB.deleteDatabase(t)), z = (t, e) => e.forEach((s) => t.createObjectStore.apply(t, s)), c = (t, e, s = "readwrite") => {
    const r = t.transaction(e, s);
    return e.map((n) => M(r, n));
  }, _ = (t, e) => i(t.count(e)), F = (t, e) => i(t.get(e)), m = (t, e) => i(t.delete(e)), P = (t, e, s) => i(t.put(e, s)), y = (t, e) => i(t.add(e)), j = (t, e, s) => i(t.getAll(e, s)), N = (t, e, s) => {
    let r = null;
    return J(t, e, (n) => (r = n, false), s).then(() => r);
  }, $ = (t, e = null) => N(t, e, "prev"), q = (t, e) => l((s, r) => {
    t.onerror = r, t.onsuccess = async (n) => {
      const o = n.target.result;
      if (o === null || await e(o) === false) return s();
      o.continue();
    };
  }), J = (t, e, s, r = "next") => q(t.openKeyCursor(e, r), (n) => s(n.key)), M = (t, e) => t.objectStore(e), V = (t, e) => IDBKeyRange.upperBound(t, e), Y = (t, e) => IDBKeyRange.lowerBound(t, e), h = "custom", g = "updates", b = 500, D = (t, e = () => {
  }, s = () => {
  }) => {
    const [r] = c(t.db, [
      g
    ]);
    return j(r, Y(t._dbref, false)).then((n) => {
      t._destroyed || (e(r), T(t.doc, () => {
        n.forEach((o) => v(t.doc, o));
      }, t, false), s(r));
    }).then(() => $(r).then((n) => {
      t._dbref = n + 1;
    })).then(() => _(r).then((n) => {
      t._dbsize = n;
    })).then(() => r);
  }, Z = (t, e = true) => D(t).then((s) => {
    (e || t._dbsize >= b) && y(s, p(t.doc)).then(() => m(s, V(t._dbref, true))).then(() => _(s).then((r) => {
      t._dbsize = r;
    }));
  });
  class f extends S {
    constructor(e, s) {
      super(), this.doc = s, this.name = e, this._dbref = 0, this._dbsize = 0, this._destroyed = false, this.db = null, this.synced = false, this._db = O(e, (r) => z(r, [
        [
          "updates",
          {
            autoIncrement: true
          }
        ],
        [
          "custom"
        ]
      ])), this.whenSynced = l((r) => this.on("synced", () => r(this))), this._db.then((r) => {
        this.db = r, D(this, (a) => y(a, p(s)), () => {
          if (this._destroyed) return this;
          this.synced = true, this.emit("synced", [
            this
          ]);
        });
      }), this._storeTimeout = 1e3, this._storeTimeoutId = null, this._storeUpdate = (r, n) => {
        if (this.db && n !== this) {
          const [o] = c(this.db, [
            g
          ]);
          y(o, r), ++this._dbsize >= b && (this._storeTimeoutId !== null && clearTimeout(this._storeTimeoutId), this._storeTimeoutId = setTimeout(() => {
            Z(this, false), this._storeTimeoutId = null;
          }, this._storeTimeout));
        }
      }, s.on("update", this._storeUpdate), this.destroy = this.destroy.bind(this), s.on("destroy", this.destroy);
    }
    destroy() {
      return this._storeTimeoutId && clearTimeout(this._storeTimeoutId), this.doc.off("update", this._storeUpdate), this.doc.off("destroy", this.destroy), this._destroyed = true, this._db.then((e) => {
        e.close();
      });
    }
    clearData() {
      return this.destroy().then(() => {
        k(this.name);
      });
    }
    get(e) {
      return this._db.then((s) => {
        const [r] = c(s, [
          h
        ], "readonly");
        return F(r, e);
      });
    }
    set(e, s) {
      return this._db.then((r) => {
        const [n] = c(r, [
          h
        ]);
        return P(n, s, e);
      });
    }
    del(e) {
      return this._db.then((s) => {
        const [r] = c(s, [
          h
        ]);
        return m(r, e);
      });
    }
  }
  let d = null, u = null;
  Q = function() {
    return d = new f("binderos-crdt-binder", B), u = new f("binderos-crdt-cognitive", C), Promise.all([
      new Promise((t) => {
        d.once("synced", t);
      }),
      new Promise((t) => {
        u.once("synced", t);
      })
    ]).then(() => {
      console.log("[CRDT] Both Y.Docs restored from IndexedDB (binder + cognitive)");
    });
  };
  W = function() {
    d == null ? void 0 : d.destroy(), u == null ? void 0 : u.destroy(), d = null, u = null;
  };
  X = async function(t) {
    const e = await E();
    if (!e) return "idle";
    const s = await A(e);
    return s === "granted" ? (await K(e, t), "started") : s === "needs-user-gesture" ? "permission-needed" : "idle";
  };
  tt = async function() {
    const t = x(), e = L();
    t && await t.compact(), e && await e.compact();
  };
  et = async function(t, e) {
    try {
      const { setRelayUrl: s, setDeviceClass: r, initRelaySyncIfConfigured: n } = await U(async () => {
        const { setRelayUrl: a, setDeviceClass: w, initRelaySyncIfConfigured: I } = await import("./relay-manager-CX_6FBZQ.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        });
        return {
          setRelayUrl: a,
          setDeviceClass: w,
          initRelaySyncIfConfigured: I
        };
      }, __vite__mapDeps([0,1,2]));
      return await s(t), await r(e), await n() === "started" ? "started" : "error";
    } catch (s) {
      return console.error("[SyncProvider] startRelaySync failed:", s), "error";
    }
  };
});
export {
  __tla,
  tt as compactOnClose,
  W as destroyLocalCRDTPersistence,
  X as initFileSyncIfConfigured,
  Q as initLocalCRDTPersistence,
  et as startRelaySync
};
