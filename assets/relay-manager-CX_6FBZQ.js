const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DwiQ5yRy.js","assets/index-brdPi_7R.css"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { aa as fe, ab as ge, ac as pe, ad as we, ae as _e, af as me, ag as be, ah as Se, ai as l, F as Ce, aj as _, E as Ie, ak as I, f as ve, al as W, am as X, O as Pe, an as Ue, ao as S, ap as Z, aq as Ee, ar as f, as as g, at as ee, au as ke, av as Ae, aw as te, ax as F, ay as De, az as Le, g as Re, b as Me, d as p, _ as G, aA as Te, __tla as __tla_0 } from "./index-DwiQ5yRy.js";
let it, gt, ot, ue, ft, ye, rt, yt, pt, ht, ut, dt, wt;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const Be = "personal", se = /* @__PURE__ */ new Map();
  class Oe {
    constructor(e) {
      this.room = e, this.onmessage = null, this._onChange = (s) => s.key === e && this.onmessage !== null && this.onmessage({
        data: pe(s.newValue || "")
      }), we(this._onChange);
    }
    postMessage(e) {
      _e.setItem(this.room, me(Se(e)));
    }
    close() {
      be(this._onChange);
    }
  }
  const We = typeof BroadcastChannel > "u" ? Oe : BroadcastChannel, V = (t) => fe(se, t, () => {
    const e = ge(), s = new We(t);
    return s.onmessage = (n) => e.forEach((a) => a(n.data, "broadcastchannel")), {
      bc: s,
      subs: e
    };
  }), Ve = (t, e) => (V(t).subs.add(e), e), Ne = (t, e) => {
    const s = V(t), n = s.subs.delete(e);
    return n && s.subs.size === 0 && (s.bc.close(), se.delete(t)), n;
  }, C = (t, e, s = null) => {
    const n = V(t);
    n.bc.postMessage(e), n.subs.forEach((a) => a(e, s));
  }, ne = 0, N = 1, ae = 2, T = (t, e) => {
    l(t, ne);
    const s = Ce(e);
    _(t, s);
  }, ce = (t, e, s) => {
    l(t, N), _(t, Ie(e, s));
  }, xe = (t, e, s) => ce(e, s, W(t)), ie = (t, e, s, n) => {
    try {
      ve(e, W(t), s);
    } catch (a) {
      n == null ? void 0 : n(a), console.error("Caught error while handling a Yjs update", a);
    }
  }, Ye = (t, e) => {
    l(t, ae), _(t, e);
  }, Fe = ie, Ge = (t, e, s, n, a) => {
    const c = I(t);
    switch (c) {
      case ne:
        xe(t, e, s);
        break;
      case N:
        ie(t, s, n, a);
        break;
      case ae:
        Fe(t, s, n, a);
        break;
      default:
        throw new Error("Unknown message type");
    }
    return c;
  }, He = 0, Ke = (t, e, s) => {
    I(t) === He && s(e, X(t));
  }, R = 3e4;
  class $e extends Pe {
    constructor(e) {
      super(), this.doc = e, this.clientID = e.clientID, this.states = /* @__PURE__ */ new Map(), this.meta = /* @__PURE__ */ new Map(), this._checkInterval = setInterval(() => {
        const s = S();
        this.getLocalState() !== null && R / 2 <= s - this.meta.get(this.clientID).lastUpdated && this.setLocalState(this.getLocalState());
        const n = [];
        this.meta.forEach((a, c) => {
          c !== this.clientID && R <= s - a.lastUpdated && this.states.has(c) && n.push(c);
        }), n.length > 0 && x(this, n, "timeout");
      }, Ue(R / 10)), e.on("destroy", () => {
        this.destroy();
      }), this.setLocalState({});
    }
    destroy() {
      this.emit("destroy", [
        this
      ]), this.setLocalState(null), super.destroy(), clearInterval(this._checkInterval);
    }
    getLocalState() {
      return this.states.get(this.clientID) || null;
    }
    setLocalState(e) {
      const s = this.clientID, n = this.meta.get(s), a = n === void 0 ? 0 : n.clock + 1, c = this.states.get(s);
      e === null ? this.states.delete(s) : this.states.set(s, e), this.meta.set(s, {
        clock: a,
        lastUpdated: S()
      });
      const i = [], r = [], o = [], w = [];
      e === null ? w.push(s) : c == null ? e != null && i.push(s) : (r.push(s), Z(c, e) || o.push(s)), (i.length > 0 || o.length > 0 || w.length > 0) && this.emit("change", [
        {
          added: i,
          updated: o,
          removed: w
        },
        "local"
      ]), this.emit("update", [
        {
          added: i,
          updated: r,
          removed: w
        },
        "local"
      ]);
    }
    setLocalStateField(e, s) {
      const n = this.getLocalState();
      n !== null && this.setLocalState({
        ...n,
        [e]: s
      });
    }
    getStates() {
      return this.states;
    }
  }
  const x = (t, e, s) => {
    const n = [];
    for (let a = 0; a < e.length; a++) {
      const c = e[a];
      if (t.states.has(c)) {
        if (t.states.delete(c), c === t.clientID) {
          const i = t.meta.get(c);
          t.meta.set(c, {
            clock: i.clock + 1,
            lastUpdated: S()
          });
        }
        n.push(c);
      }
    }
    n.length > 0 && (t.emit("change", [
      {
        added: [],
        updated: [],
        removed: n
      },
      s
    ]), t.emit("update", [
      {
        added: [],
        updated: [],
        removed: n
      },
      s
    ]));
  }, P = (t, e, s = t.states) => {
    const n = e.length, a = g();
    l(a, n);
    for (let c = 0; c < n; c++) {
      const i = e[c], r = s.get(i) || null, o = t.meta.get(i).clock;
      l(a, i), l(a, o), Ee(a, JSON.stringify(r));
    }
    return f(a);
  }, je = (t, e, s) => {
    const n = ee(e), a = S(), c = [], i = [], r = [], o = [], w = I(n);
    for (let A = 0; A < w; A++) {
      const h = I(n);
      let d = I(n);
      const u = JSON.parse(X(n)), y = t.meta.get(h), Y = t.states.get(h), D = y === void 0 ? 0 : y.clock;
      (D < d || D === d && u === null && t.states.has(h)) && (u === null ? h === t.clientID && t.getLocalState() != null ? d++ : t.states.delete(h) : t.states.set(h, u), t.meta.set(h, {
        clock: d,
        lastUpdated: a
      }), y === void 0 && u !== null ? c.push(h) : y !== void 0 && u === null ? o.push(h) : u !== null && (Z(u, Y) || r.push(h), i.push(h)));
    }
    (c.length > 0 || r.length > 0 || o.length > 0) && t.emit("change", [
      {
        added: c,
        updated: r,
        removed: o
      },
      s
    ]), (c.length > 0 || i.length > 0 || o.length > 0) && t.emit("update", [
      {
        added: c,
        updated: i,
        removed: o
      },
      s
    ]);
  }, Je = (t) => ke(t, (e, s) => `${encodeURIComponent(s)}=${encodeURIComponent(e)}`).join("&"), m = 0, oe = 3, v = 1, ze = 2, k = [];
  k[m] = (t, e, s, n, a) => {
    l(t, m);
    const c = Ge(e, t, s.doc, s);
    n && c === N && !s.synced && (s.synced = true);
  };
  k[oe] = (t, e, s, n, a) => {
    l(t, v), _(t, P(s.awareness, Array.from(s.awareness.getStates().keys())));
  };
  k[v] = (t, e, s, n, a) => {
    je(s.awareness, W(e), s);
  };
  k[ze] = (t, e, s, n, a) => {
    Ke(e, s.doc, (c, i) => Qe(s, i));
  };
  const H = 3e4, Qe = (t, e) => console.warn(`Permission denied to access ${t.url}.
${e}`), re = (t, e, s) => {
    const n = ee(e), a = g(), c = I(n), i = t.messageHandlers[c];
    return i ? i(a, n, t, s, c) : console.error("Unable to compute message"), a;
  }, B = (t, e, s) => {
    e === t.ws && (t.emit("connection-close", [
      s,
      t
    ]), t.ws = null, e.close(), t.wsconnecting = false, t.wsconnected ? (t.wsconnected = false, t.synced = false, x(t.awareness, Array.from(t.awareness.getStates().keys()).filter((n) => n !== t.doc.clientID), t), t.emit("status", [
      {
        status: "disconnected"
      }
    ])) : t.wsUnsuccessfulReconnects++, setTimeout(le, De(Le(2, t.wsUnsuccessfulReconnects) * 100, t.maxBackoffTime), t));
  }, le = (t) => {
    if (t.shouldConnect && t.ws === null) {
      const e = new t._WS(t.url, t.protocols);
      e.binaryType = "arraybuffer", t.ws = e, t.wsconnecting = true, t.wsconnected = false, t.synced = false, e.onmessage = (s) => {
        t.wsLastMessageReceived = S();
        const n = re(t, new Uint8Array(s.data), true);
        te(n) > 1 && e.send(f(n));
      }, e.onerror = (s) => {
        t.emit("connection-error", [
          s,
          t
        ]);
      }, e.onclose = (s) => {
        B(t, e, s);
      }, e.onopen = () => {
        t.wsLastMessageReceived = S(), t.wsconnecting = false, t.wsconnected = true, t.wsUnsuccessfulReconnects = 0, t.emit("status", [
          {
            status: "connected"
          }
        ]);
        const s = g();
        if (l(s, m), T(s, t.doc), e.send(f(s)), t.awareness.getLocalState() !== null) {
          const n = g();
          l(n, v), _(n, P(t.awareness, [
            t.doc.clientID
          ])), e.send(f(n));
        }
      }, t.emit("status", [
        {
          status: "connecting"
        }
      ]);
    }
  }, M = (t, e) => {
    const s = t.ws;
    t.wsconnected && s && s.readyState === s.OPEN && s.send(e), t.bcconnected && C(t.bcChannel, e, t);
  };
  class K extends Ae {
    constructor(e, s, n, { connect: a = true, awareness: c = new $e(n), params: i = {}, protocols: r = [], WebSocketPolyfill: o = WebSocket, resyncInterval: w = -1, maxBackoffTime: A = 2500, disableBc: h = false } = {}) {
      for (super(); e[e.length - 1] === "/"; ) e = e.slice(0, e.length - 1);
      this.serverUrl = e, this.bcChannel = e + "/" + s, this.maxBackoffTime = A, this.params = i, this.protocols = r, this.roomname = s, this.doc = n, this._WS = o, this.awareness = c, this.wsconnected = false, this.wsconnecting = false, this.bcconnected = false, this.disableBc = h, this.wsUnsuccessfulReconnects = 0, this.messageHandlers = k.slice(), this._synced = false, this.ws = null, this.wsLastMessageReceived = 0, this.shouldConnect = a, this._resyncInterval = 0, w > 0 && (this._resyncInterval = setInterval(() => {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
          const d = g();
          l(d, m), T(d, n), this.ws.send(f(d));
        }
      }, w)), this._bcSubscriber = (d, u) => {
        if (u !== this) {
          const y = re(this, new Uint8Array(d), false);
          te(y) > 1 && C(this.bcChannel, f(y), this);
        }
      }, this._updateHandler = (d, u) => {
        if (u !== this) {
          const y = g();
          l(y, m), Ye(y, d), M(this, f(y));
        }
      }, this.doc.on("update", this._updateHandler), this._awarenessUpdateHandler = ({ added: d, updated: u, removed: y }, Y) => {
        const D = d.concat(u).concat(y), L = g();
        l(L, v), _(L, P(c, D)), M(this, f(L));
      }, this._exitHandler = () => {
        x(this.awareness, [
          n.clientID
        ], "app closed");
      }, F && typeof process < "u" && process.on("exit", this._exitHandler), c.on("update", this._awarenessUpdateHandler), this._checkInterval = setInterval(() => {
        this.wsconnected && H < S() - this.wsLastMessageReceived && B(this, this.ws, null);
      }, H / 10), a && this.connect();
    }
    get url() {
      const e = Je(this.params);
      return this.serverUrl + "/" + this.roomname + (e.length === 0 ? "" : "?" + e);
    }
    get synced() {
      return this._synced;
    }
    set synced(e) {
      this._synced !== e && (this._synced = e, this.emit("synced", [
        e
      ]), this.emit("sync", [
        e
      ]));
    }
    destroy() {
      this._resyncInterval !== 0 && clearInterval(this._resyncInterval), clearInterval(this._checkInterval), this.disconnect(), F && typeof process < "u" && process.off("exit", this._exitHandler), this.awareness.off("update", this._awarenessUpdateHandler), this.doc.off("update", this._updateHandler), super.destroy();
    }
    connectBc() {
      if (this.disableBc) return;
      this.bcconnected || (Ve(this.bcChannel, this._bcSubscriber), this.bcconnected = true);
      const e = g();
      l(e, m), T(e, this.doc), C(this.bcChannel, f(e), this);
      const s = g();
      l(s, m), ce(s, this.doc), C(this.bcChannel, f(s), this);
      const n = g();
      l(n, oe), C(this.bcChannel, f(n), this);
      const a = g();
      l(a, v), _(a, P(this.awareness, [
        this.doc.clientID
      ])), C(this.bcChannel, f(a), this);
    }
    disconnectBc() {
      const e = g();
      l(e, v), _(e, P(this.awareness, [
        this.doc.clientID
      ], /* @__PURE__ */ new Map())), M(this, f(e)), this.bcconnected && (Ne(this.bcChannel, this._bcSubscriber), this.bcconnected = false);
    }
    disconnect() {
      this.shouldConnect = false, this.disconnectBc(), this.ws !== null && B(this, this.ws, null);
    }
    connect() {
      this.shouldConnect = true, !this.wsconnected && this.ws === null && (le(this), this.connectBc());
    }
  }
  class qe {
    constructor(e) {
      __publicField(this, "binderProvider", null);
      __publicField(this, "cognitiveProvider");
      __publicField(this, "config");
      __publicField(this, "statusListeners", []);
      __publicField(this, "_status", {
        state: "relay-connecting"
      });
      __publicField(this, "_lastConnectedAt", null);
      this.config = e, this.cognitiveProvider = new K(e.relayUrl, `${e.userId}:cognitive`, Re, {
        connect: false
      }), e.deviceClass === "personal" && (this.binderProvider = new K(e.relayUrl, `${e.userId}:personal`, Me, {
        connect: false
      }));
    }
    start() {
      this.wireStatusListeners(this.cognitiveProvider), this.cognitiveProvider.connect(), this.binderProvider && (this.wireStatusListeners(this.binderProvider), this.binderProvider.connect());
    }
    stop() {
      var _a;
      this.cognitiveProvider.disconnect(), (_a = this.binderProvider) == null ? void 0 : _a.disconnect();
    }
    reconnect() {
      this.cognitiveProvider.disconnect(), this.cognitiveProvider.connect(), this.binderProvider && (this.binderProvider.disconnect(), this.binderProvider.connect());
    }
    destroy() {
      var _a;
      this.cognitiveProvider.destroy(), (_a = this.binderProvider) == null ? void 0 : _a.destroy(), this.statusListeners = [];
    }
    get status() {
      return this._status;
    }
    onStatusChange(e) {
      return this.statusListeners.push(e), () => {
        this.statusListeners = this.statusListeners.filter((s) => s !== e);
      };
    }
    get hasBinderProvider() {
      return this.binderProvider !== null;
    }
    get deviceClass() {
      return this.config.deviceClass;
    }
    wireStatusListeners(e) {
      e.on("status", (s) => {
        this.recomputeAndEmitStatus();
      }), e.on("sync", (s) => {
        this.recomputeAndEmitStatus();
      });
    }
    recomputeAndEmitStatus() {
      const e = this.cognitiveProvider.wsconnected, s = this.binderProvider ? this.binderProvider.wsconnected : true;
      let n;
      !e && (this.binderProvider && !s) ? n = {
        state: "relay-disconnected",
        lastConnectedAt: this._lastConnectedAt
      } : e && s ? (this._lastConnectedAt = Date.now(), n = {
        state: "relay-connected",
        syncedAt: Date.now(),
        deviceClass: this.config.deviceClass
      }) : n = {
        state: "relay-connecting"
      }, this._status = n;
      for (const a of this.statusListeners) a(n);
    }
  }
  const Xe = "vapidPublicKey";
  function Ze(t) {
    const e = "=".repeat((4 - t.length % 4) % 4), s = (t + e).replace(/-/g, "+").replace(/_/g, "/"), n = atob(s);
    return Uint8Array.from([
      ...n
    ].map((a) => a.charCodeAt(0)));
  }
  async function et(t, e, s) {
    var _a;
    if (!("PushManager" in window) || !("serviceWorker" in navigator)) return null;
    const a = (_a = await p.config.get(Xe)) == null ? void 0 : _a.value;
    if (!a) return console.warn("[PushSubscription] No VAPID public key configured \u2014 skip push registration"), null;
    const c = await navigator.serviceWorker.ready;
    let i = await c.pushManager.getSubscription();
    if (!i) {
      const r = Ze(a);
      try {
        i = await c.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: r
        });
      } catch (o) {
        return console.error("[PushSubscription] subscribe() failed:", o), null;
      }
    }
    return await tt(t, e, s, i), i;
  }
  async function tt(t, e, s, n) {
    const a = t.replace("wss://", "https://").replace("ws://", "http://");
    try {
      const c = await fetch(`${a}/push-subscriptions/${e}/${s}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(n.toJSON())
      });
      c.ok || console.warn("[PushSubscription] Relay returned", c.status);
    } catch (c) {
      console.warn("[PushSubscription] Failed to sync with relay:", c);
    }
  }
  let $ = false, j = null;
  function st(t) {
    $ || ($ = true, j = t, "serviceWorker" in navigator && navigator.serviceWorker.addEventListener("message", (e) => {
      var _a, _b, _c;
      if (((_a = e.data) == null ? void 0 : _a.type) === "BGW_SYNC_COMPLETE") {
        const s = ((_b = e.data.payload) == null ? void 0 : _b.source) ?? "push";
        console.log("[BGW] Enrichment triggered from SW, source:", s), j == null ? void 0 : j(s);
      }
      ((_c = e.data) == null ? void 0 : _c.type) === "BGW_STATUS_REPLY" && console.log("[BGW] SW reports ready:", e.data.ready);
    }));
  }
  const U = 12;
  async function J(t, e) {
    const s = crypto.getRandomValues(new Uint8Array(U)), n = await crypto.subtle.encrypt({
      name: "AES-GCM",
      iv: s
    }, e, t), a = new Uint8Array(U + n.byteLength);
    return a.set(s, 0), a.set(new Uint8Array(n), U), a;
  }
  async function nt(t, e) {
    const s = t.slice(0, U), n = t.slice(U), a = await crypto.subtle.decrypt({
      name: "AES-GCM",
      iv: s
    }, e, n);
    return new Uint8Array(a);
  }
  const at = 0, z = 224;
  class ct {
    constructor(e, s, n) {
      __publicField(this, "_inner");
      __publicField(this, "_key");
      __publicField(this, "_messageCallbacks", []);
      __publicField(this, "_errorCallbacks", []);
      this._inner = e, this._key = n === "personal" ? s.personalKey : s.cognitiveKey;
    }
    _shouldEncrypt(e) {
      return e.byteLength === 0 ? false : e[0] === at;
    }
    async sendEncrypted(e) {
      if (this._shouldEncrypt(e)) {
        const s = await J(e, this._key), n = new Uint8Array(1 + s.byteLength);
        n[0] = z, n.set(s, 1), this._inner.ws.send(n);
      } else this._inner.ws.send(e);
    }
    async encryptPayload(e) {
      return J(e, this._key);
    }
    async handleInbound(e) {
      if (e.byteLength !== 0) if (e[0] === z) {
        const s = e.slice(1);
        try {
          const n = await nt(s, this._key);
          this._deliverDecrypted(n);
        } catch (n) {
          console.warn("[EncryptedRelayProvider] Decryption failed:", n), this._emitError(n);
        }
      } else this._deliverDecrypted(e);
    }
    onDecryptedMessage(e) {
      return this._messageCallbacks.push(e), () => {
        this._messageCallbacks = this._messageCallbacks.filter((s) => s !== e);
      };
    }
    onDecryptionError(e) {
      return this._errorCallbacks.push(e), () => {
        this._errorCallbacks = this._errorCallbacks.filter((s) => s !== e);
      };
    }
    start() {
      this._inner.start();
    }
    stop() {
      this._inner.stop();
    }
    destroy() {
      this._inner.destroy();
    }
    onStatusChange(e) {
      return this._inner.onStatusChange(e);
    }
    get status() {
      return this._inner.status;
    }
    get hasBinderProvider() {
      return this._inner.hasBinderProvider;
    }
    get deviceClass() {
      return this._inner.deviceClass;
    }
    _deliverDecrypted(e) {
      for (const s of this._messageCallbacks) s(e);
    }
    _emitError(e) {
      for (const s of this._errorCallbacks) s(e);
    }
  }
  const de = "userId", he = "deviceClass", O = "relayUrl", Q = "deviceId";
  let b = null, E = null;
  const q = "bc21dc75-0ccf-4c3e-b8dc-f53406e9c2f1";
  ue = async function() {
    return await p.config.put({
      key: de,
      value: q
    }), q;
  };
  dt = async function(t) {
    await p.config.put({
      key: de,
      value: t
    });
  };
  it = async function() {
    var _a;
    return ((_a = await p.config.get(he)) == null ? void 0 : _a.value) ?? Be;
  };
  ht = async function(t) {
    await p.config.put({
      key: he,
      value: t
    });
  };
  ye = async function() {
    const t = await p.config.get(O);
    if (t) return t.value;
    const e = typeof localStorage < "u" ? localStorage.getItem("_binderos_relay_url") : null;
    return e ? (await p.config.put({
      key: O,
      value: e
    }), localStorage.removeItem("_binderos_relay_url"), e) : null;
  };
  ut = async function(t) {
    await p.config.put({
      key: O,
      value: t
    });
  };
  ot = async function() {
    const t = await p.config.get(Q);
    if (t == null ? void 0 : t.value) return t.value;
    const e = crypto.randomUUID();
    return await p.config.put({
      key: Q,
      value: e
    }), e;
  };
  rt = async function() {
    try {
      const t = await ye();
      if (!t) return;
      const e = await ue(), s = await ot();
      await et(t, e, s), st(async (n) => {
        console.log("[BGW] Running enrichment pipeline, source:", n);
        try {
          const a = await p.atoms.toArray(), { getIntelligence: c } = await G(async () => {
            const { getIntelligence: r } = await import("./index-DwiQ5yRy.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            }).then((o) => o.aC);
            return {
              getIntelligence: r
            };
          }, __vite__mapDeps([0,1])), { detectEntitiesForAtom: i } = await G(async () => {
            const { detectEntitiesForAtom: r } = await import("./index-DwiQ5yRy.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            }).then((o) => o.aD);
            return {
              detectEntitiesForAtom: r
            };
          }, __vite__mapDeps([0,1]));
          for (const r of a) {
            if (!r.content) continue;
            const o = await c(r.id).catch(() => null);
            (o == null ? void 0 : o.entityMentions) && o.entityMentions.length > 0 || await i(r.id, r.content).catch(() => {
            });
          }
        } catch (a) {
          console.warn("[BGW] Enrichment pipeline error:", a);
        }
      });
    } catch (t) {
      console.warn("[RelayManager] initPushSubscriptionIfConfigured failed (non-fatal):", t);
    }
  };
  yt = async function() {
    const t = await ye();
    if (!t) return "no-relay-configured";
    try {
      const e = await ue(), s = await it(), n = {
        relayUrl: t,
        userId: e,
        deviceClass: s
      };
      b = new qe(n);
      const a = Te();
      return a ? (E = new ct(b, a, "personal"), console.info("[RelayManager] Encryption active \u2014 relay sees ciphertext only.")) : (E = null, console.warn("[RelayManager] No room keys available \u2014 relay running WITHOUT encryption. Set encryptionEnabled: false.")), b.start(), rt(), "started";
    } catch (e) {
      return console.error("[RelayManager] Failed to start relay sync:", e), "error";
    }
  };
  ft = function() {
    return b;
  };
  gt = function() {
    return E;
  };
  pt = function() {
    return E !== null;
  };
  wt = function() {
    E = null, b && (b.destroy(), b = null);
  };
});
export {
  __tla,
  it as getDeviceClass,
  gt as getEncryptedRelayProvider,
  ot as getOrCreateDeviceId,
  ue as getOrCreateUserId,
  ft as getRelayProvider,
  ye as getStoredRelayUrl,
  rt as initPushSubscriptionIfConfigured,
  yt as initRelaySyncIfConfigured,
  pt as isEncryptionActive,
  ht as setDeviceClass,
  ut as setRelayUrl,
  dt as setUserId,
  wt as stopRelaySync
};
