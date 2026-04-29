const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/dexie-crdt-adapter-DD6qzzmZ.js","assets/index-DwiQ5yRy.js","assets/index-brdPi_7R.css"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { E as S, F as f, G as v, f as p, d as c, b as D, g as b, _ as H, __tla as __tla_0 } from "./index-DwiQ5yRy.js";
let W, C, T, O, U, N, k, A, P, M, R, L;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  class h {
    constructor(e, n, t, i) {
      __publicField(this, "dirHandle");
      __publicField(this, "ydoc");
      __publicField(this, "layer");
      __publicField(this, "config");
      __publicField(this, "seenFiles", /* @__PURE__ */ new Set());
      __publicField(this, "updatesSinceCompaction", 0);
      __publicField(this, "pollIntervalId", null);
      __publicField(this, "_status", {
        state: "idle",
        lastSyncedAt: null
      });
      __publicField(this, "statusListeners", []);
      __publicField(this, "remoteAppliedFn", null);
      __publicField(this, "handleLocalUpdate", (e, n) => {
        n !== "file-sync" && this.writeUpdateFile(e).catch((t) => {
          console.warn("[FileSyncProvider] Failed to write update file:", t);
        });
      });
      this.dirHandle = e, this.ydoc = n, this.layer = t, this.config = i;
    }
    get status() {
      return this._status;
    }
    setOnRemoteApplied(e) {
      this.remoteAppliedFn = e;
    }
    onStatusChange(e) {
      return this.statusListeners.push(e), () => {
        this.statusListeners = this.statusListeners.filter((n) => n !== e);
      };
    }
    async start() {
      await this.applySnapshotWithConflicts(), await this.applyPendingUpdates(), this.pollIntervalId = setInterval(() => {
        this.poll().catch((e) => {
          console.warn("[FileSyncProvider] Poll error:", e);
        });
      }, this.config.pollIntervalMs), this.ydoc.on("update", this.handleLocalUpdate), this.setStatus({
        state: "synced",
        lastSyncedAt: Date.now()
      });
    }
    stop() {
      this.pollIntervalId !== null && (clearInterval(this.pollIntervalId), this.pollIntervalId = null), this.ydoc.off("update", this.handleLocalUpdate), this.setStatus({
        state: "idle",
        lastSyncedAt: null
      });
    }
    async compact() {
      const e = S(this.ydoc), n = f(this.ydoc), t = await this.getSubDir([
        "binderos-sync",
        this.layer
      ]);
      await this.writeFileToDir(t, "snapshot.bin", e), await this.writeFileToDir(t, "sv.bin", n);
      try {
        const i = await t.getDirectoryHandle("updates"), r = [];
        for await (const a of i.values()) a.kind === "file" && r.push(a.name);
        for (const a of r) await i.removeEntry(a);
      } catch (i) {
        if (i.name !== "NotFoundError") throw i;
      }
      this.seenFiles.clear(), this.updatesSinceCompaction = 0;
    }
    async poll() {
      this.setStatus({
        state: "checking"
      });
      const e = await this.applyPendingUpdates();
      e > 0 ? this.setStatus({
        state: "applied",
        lastSyncedAt: Date.now(),
        filesApplied: e
      }) : this.setStatus({
        state: "synced",
        lastSyncedAt: Date.now()
      });
    }
    async writeUpdateFile(e) {
      const n = `${Date.now()}-${this.config.deviceId}.bin`;
      await this.writeFile([
        "binderos-sync",
        this.layer,
        "updates",
        n
      ], e), this.updatesSinceCompaction++, this.updatesSinceCompaction >= this.config.compactAfterUpdates && Promise.resolve().then(() => this.compact()).catch((t) => {
        console.warn("[FileSyncProvider] Auto-compact failed:", t);
      });
    }
    async applyPendingUpdates() {
      var _a;
      let e = 0;
      try {
        let n;
        try {
          n = await this.dirHandle.getDirectoryHandle("binderos-sync");
        } catch (a) {
          if (a.name === "NotFoundError") return 0;
          throw a;
        }
        let t;
        try {
          t = await n.getDirectoryHandle(this.layer);
        } catch (a) {
          if (a.name === "NotFoundError") return 0;
          throw a;
        }
        let i;
        try {
          i = await t.getDirectoryHandle("updates");
        } catch (a) {
          if (a.name === "NotFoundError") return 0;
          throw a;
        }
        const r = f(this.ydoc);
        for await (const a of i.values()) {
          if (a.kind !== "file" || this.seenFiles.has(a.name)) continue;
          const y = await a.getFile(), m = new Uint8Array(await y.arrayBuffer()), u = v(m, r);
          u.byteLength > 2 && (p(this.ydoc, u, "file-sync"), (_a = this.remoteAppliedFn) == null ? void 0 : _a.call(this, u), e++), this.seenFiles.add(a.name);
        }
      } catch (n) {
        if (n.name === "NotFoundError") return 0;
        throw n;
      }
      return e;
    }
    async applySnapshotWithConflicts() {
      var _a;
      let e;
      try {
        e = await (await this.dirHandle.getDirectoryHandle("binderos-sync")).getDirectoryHandle(this.layer);
      } catch (t) {
        if (t.name === "NotFoundError") return;
        throw t;
      }
      const n = [];
      for await (const t of e.values()) {
        if (t.kind !== "file") continue;
        const i = t.name;
        (i === "snapshot.bin" || i.startsWith("snapshot") && i.endsWith(".bin")) && n.push(i);
      }
      for (const t of n) try {
        const r = await (await e.getFileHandle(t)).getFile(), a = new Uint8Array(await r.arrayBuffer());
        p(this.ydoc, a, "file-sync"), (_a = this.remoteAppliedFn) == null ? void 0 : _a.call(this, a);
      } catch (i) {
        console.warn(`[FileSyncProvider] Failed to apply snapshot ${t}:`, i);
      }
    }
    async getSubDir(e) {
      let n = this.dirHandle;
      for (const t of e) n = await n.getDirectoryHandle(t, {
        create: true
      });
      return n;
    }
    async writeFile(e, n) {
      const t = await this.getSubDir(e.slice(0, -1)), i = e[e.length - 1];
      await this.writeFileToDir(t, i, n);
    }
    async writeFileToDir(e, n, t) {
      const r = await (await e.getFileHandle(n, {
        create: true
      })).createWritable();
      await r.write(t), await r.close();
    }
    setStatus(e) {
      this._status = e;
      for (const n of this.statusListeners) n(e);
    }
  }
  const g = "syncFolderHandle", w = "crdtMigrationSeed", F = "migration-seed.txt";
  let d = null, s = null, l = null;
  A = function() {
    return typeof window < "u" && "showDirectoryPicker" in window;
  };
  P = async function() {
    if (!A()) return null;
    try {
      const o = await window.showDirectoryPicker({
        mode: "readwrite"
      });
      return d = o, await c.config.put({
        key: g,
        value: o
      }), o;
    } catch (o) {
      if (o.name === "AbortError") return null;
      throw o;
    }
  };
  U = async function() {
    const o = await c.config.get(g);
    return o ? o.value : null;
  };
  C = async function(o) {
    const e = await o.queryPermission({
      mode: "readwrite"
    });
    return e === "granted" ? "granted" : e === "denied" ? "denied" : "needs-user-gesture";
  };
  M = async function(o) {
    return await o.requestPermission({
      mode: "readwrite"
    }) === "granted";
  };
  async function E(o) {
    let e, n;
    try {
      e = await o.getDirectoryHandle("binderos-sync", {
        create: true
      }), n = await e.getDirectoryHandle("binder", {
        create: true
      });
    } catch (a) {
      console.warn("[SyncFolderManager] Could not navigate binder dir for seed sync:", a);
      return;
    }
    let t = null;
    try {
      t = await (await (await n.getFileHandle(F)).getFile()).text(), t && (t = t.trim());
    } catch (a) {
      a.name !== "NotFoundError" && console.warn("[SyncFolderManager] Could not read remote migration seed:", a);
    }
    const i = await c.config.get(w), r = i ? i.value : null;
    if (t && !r) {
      await c.config.put({
        key: w,
        value: t
      }), console.log("[SyncFolderManager] Adopted migration seed from sync folder.");
      return;
    }
    if (r && !t) {
      await I(n, r), console.log("[SyncFolderManager] Wrote migration seed to sync folder.");
      return;
    }
    !r && !t || r !== t && console.warn("[SyncFolderManager] Migration seed mismatch! Local:", r == null ? void 0 : r.slice(0, 8), "Remote:", t == null ? void 0 : t.slice(0, 8), "\u2014 Using local seed. Y.Doc histories may diverge.");
  }
  async function I(o, e) {
    const t = new TextEncoder().encode(e), r = await (await o.getFileHandle(F, {
      create: true
    })).createWritable();
    await r.write(t), await r.close();
  }
  R = async function(o, e, n = {}) {
    await E(o);
    const t = {
      pollIntervalMs: 5e3,
      compactAfterUpdates: 20,
      deviceId: e,
      ...n
    };
    s = new h(o, D, "binder", t), l = new h(o, b, "cognitive", t);
    try {
      const { crdtAdapter: i } = await H(async () => {
        const { crdtAdapter: r } = await import("./dexie-crdt-adapter-DD6qzzmZ.js");
        return {
          crdtAdapter: r
        };
      }, __vite__mapDeps([0,1,2]));
      s.setOnRemoteApplied((r) => i.onRemoteCRDTUpdate(r)), l.setOnRemoteApplied((r) => i.onRemoteCognitiveUpdate(r));
    } catch (i) {
      console.warn("[SyncFolderManager] Could not wire CRDT adapter \u2014 remote updates will not persist to Dexie:", i);
    }
    await s.start(), await l.start(), d = o, console.log("[SyncFolderManager] Sync started for both binder + cognitive layers.");
  };
  L = async function() {
    s && (s.stop(), s = null), l && (l.stop(), l = null), console.log("[SyncFolderManager] Sync stopped.");
  };
  N = function() {
    return d;
  };
  T = function() {
    return s;
  };
  O = function() {
    return l;
  };
  k = function() {
    return s !== null && l !== null;
  };
  W = function() {
    d = null, s = null, l = null;
  };
});
export {
  __tla,
  W as _resetForTesting,
  C as ensurePermission,
  T as getBinderProvider,
  O as getCognitiveProvider,
  U as getStoredSyncFolder,
  N as getSyncFolderHandle,
  k as isSyncActive,
  A as isSyncSupported,
  P as pickSyncFolder,
  M as requestPermission,
  R as startSync,
  L as stopSync
};
