var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { b as i, y as d, a as u, Y as m, e as h, f, g as b } from "./index-DwiQ5yRy.js";
class D {
  constructor() {
    __publicField(this, "inboundFromCRDT", false);
    __publicField(this, "dispatchFn", null);
  }
  setDispatch(t) {
    this.dispatchFn = t, i.on("update", (n, e) => {
      if (e && typeof e == "object" && "wsconnected" in e && "roomname" in e) {
        this.inboundFromCRDT = true;
        const s = {};
        d.forEach((r, a) => {
          s[a] = r.toJSON();
        });
        const c = {};
        u.forEach((r, a) => {
          c[a] = r.toJSON();
        }), t({ type: "CRDT_APPLY_REMOTE_UPDATE", payload: { atoms: s, inboxItems: c, source: "crdt" } }), queueMicrotask(() => {
          this.inboundFromCRDT = false;
        });
      }
    });
  }
  onLocalAtomMutation(t) {
    this.inboundFromCRDT || i.transact(() => {
      const n = new m();
      for (const [e, o] of Object.entries(t)) o !== void 0 && n.set(e, o);
      d.set(t.id, n);
    });
  }
  onLocalInboxMutation(t) {
    this.inboundFromCRDT || i.transact(() => {
      const n = new m();
      for (const [e, o] of Object.entries(t)) o !== void 0 && n.set(e, o);
      u.set(t.id, n);
    });
  }
  onLocalInboxDeletion(t) {
    this.inboundFromCRDT || u.delete(t);
  }
  onLocalEntityMutation(t) {
    this.inboundFromCRDT || i.transact(() => {
      const n = new m();
      for (const [e, o] of Object.entries(t)) o !== void 0 && n.set(e, o);
      h.set(t.id, n);
    });
  }
  onRemoteCRDTUpdate(t) {
    this.inboundFromCRDT = true;
    try {
      if (f(i, t), this.dispatchFn) {
        const n = {};
        d.forEach((o, s) => {
          n[s] = o.toJSON();
        });
        const e = {};
        u.forEach((o, s) => {
          e[s] = o.toJSON();
        }), this.dispatchFn({ type: "CRDT_APPLY_REMOTE_UPDATE", payload: { atoms: n, inboxItems: e, source: "crdt" } });
      }
    } finally {
      this.inboundFromCRDT = false;
    }
  }
  onRemoteCognitiveUpdate(t) {
    this.inboundFromCRDT = true;
    try {
      f(b, t);
    } finally {
      this.inboundFromCRDT = false;
    }
  }
  onYDocUpdate(t) {
    const n = (e, o) => {
      if (o && typeof o == "object" && "wsconnected" in o && "roomname" in o) {
        if (this.inboundFromCRDT = true, this.dispatchFn) {
          const s = {};
          d.forEach((r, a) => {
            s[a] = r.toJSON();
          });
          const c = {};
          u.forEach((r, a) => {
            c[a] = r.toJSON();
          }), this.dispatchFn({ type: "CRDT_APPLY_REMOTE_UPDATE", payload: { atoms: s, inboxItems: c, source: "crdt" } });
        }
        queueMicrotask(() => {
          this.inboundFromCRDT = false;
        });
        return;
      }
      this.inboundFromCRDT || t(e);
    };
    return i.on("update", n), () => i.off("update", n);
  }
  onLocalAtomDeletion(t) {
    this.inboundFromCRDT || i.transact(() => {
      d.delete(t);
    });
  }
  get isInboundFromCRDT() {
    return this.inboundFromCRDT;
  }
}
const l = new D();
export {
  D as DexieCRDTAdapter,
  l as crdtAdapter
};
