var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { Anthropic as C } from "./index-C6965luQ.js";
import { S as x, C as h, q as k, r as E, t as g, u as I, w as y, x as w, z as A, A as b, B as P, D as _ } from "./index-DwiQ5yRy.js";
function z(o) {
  let t = 2166136261;
  const e = new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
  for (let r = 0; r < e.length; r++) t ^= e[r] ?? 0, t = Math.imul(t, 16777619) >>> 0;
  return t;
}
function M(o) {
  if (!o || !Array.isArray(o.slots)) return null;
  const t = o.slots;
  if (t.length === 0 || t.length > x) return null;
  const e = [];
  for (let i = 0; i < t.length; i++) {
    const a = t[i];
    if (!a || typeof a != "object") return null;
    const c = a;
    if (!Array.isArray(c.centroid)) return null;
    const d = c.centroid;
    if (d.length !== h) return null;
    const p = new Float32Array(h);
    for (let l = 0; l < h; l++) p[l] = typeof d[l] == "number" ? d[l] : 0;
    const v = Array.isArray(c.entities) ? c.entities : [], f = [];
    for (const l of v) {
      const m = Math.round(typeof l == "number" ? l : -1);
      m >= 0 && f.push(m);
    }
    const S = typeof c.weight == "number" ? c.weight : 0;
    e.push({ responseCentroid: p, entityIndices: f, weight: S });
  }
  if (e.length === 0) return null;
  const r = e[0];
  if (!r) return null;
  const n = { slots: e, inputHash: z(r.responseCentroid), createdAt: Date.now(), source: "cloud" }, s = k(n), { valid: u } = E(s);
  return u ? s : null;
}
function T(o) {
  if (!o) return null;
  try {
    const t = JSON.parse(o);
    if (t && typeof t == "object") {
      if (typeof t.text == "string") return t.text;
      if (typeof t.bridgeText == "string") return t.bridgeText;
      if (typeof t.response == "string") return t.response;
    }
    return null;
  } catch {
    return !o.includes('"slots"') && !o.includes("skeleton") ? o : null;
  }
}
const O = ["delete", "archive", "overwrite"];
function B(o) {
  return O.includes(o);
}
class N {
  constructor() {
    __publicField(this, "id", "anthropic");
    __publicField(this, "displayName", "Anthropic");
    __publicField(this, "_status", "disabled");
    __publicField(this, "client", null);
    __publicField(this, "onPreSendApproval", null);
  }
  get status() {
    return this._status;
  }
  setPreSendApprovalHandler(t) {
    this.onPreSendApproval = t;
  }
  initialize() {
    const t = I("anthropic");
    if (!t) {
      this._status = "unavailable";
      return;
    }
    this.client = new C({ apiKey: t, dangerouslyAllowBrowser: true }), this._status = "available";
  }
  async execute(t) {
    var _a;
    if (!this.client) throw new Error("Cloud adapter not initialized \u2014 no API key");
    if (this._status !== "available") throw new Error(`Cloud adapter status: ${this._status}`);
    if (!g()) throw new Error("Cloud AI unavailable \u2014 you are currently offline. Local AI features still work.");
    if (!y()) throw new Error("Cloud AI requires session consent. Open AI Settings to continue.");
    let e;
    if (t.skipSanitization) e = { prompt: t.prompt, entities: [], entityMap: /* @__PURE__ */ new Map() };
    else try {
      e = await w(t.prompt, "full");
    } catch {
      e = await w(t.prompt, "structured");
    }
    console.group("%c[Cloud Adapter] Sanitization Gate", "color: #f59e0b; font-weight: bold"), console.log("Entities detected:", e.entities.length), e.entities.length > 0 && (console.table(e.entities.map((n) => ({ text: n.text, category: n.category, source: n.source, confidence: n.confidence }))), console.log("Entity map:", Object.fromEntries(e.entityMap))), console.log("Sanitized prompt preview:", String(e.prompt).slice(0, 300)), console.groupEnd();
    const r = { id: t.requestId, timestamp: Date.now(), sanitizedPrompt: e.prompt, provider: "Anthropic", model: "claude-haiku-4-5-20251001", status: "pending" };
    if (A(r), this.onPreSendApproval && !await this.onPreSendApproval(r, e.entities, e.entityMap)) throw r.status = "cancelled", new Error("Cloud request cancelled by user");
    r.status = "approved";
    try {
      const n = this.client.messages.stream({ model: "claude-haiku-4-5-20251001", max_tokens: t.maxTokens ?? 512, messages: [{ role: "user", content: e.prompt }] });
      n.on("text", (a) => {
        var _a2;
        return (_a2 = t.onChunk) == null ? void 0 : _a2.call(t, a);
      }), t.signal && t.signal.addEventListener("abort", () => n.abort());
      const s = await n.finalMessage(), u = ((_a = s.content[0]) == null ? void 0 : _a.type) === "text" ? s.content[0].text : "", i = b(u, e.entityMap);
      return r.status = "completed", r.responseSummary = i.slice(0, 100) + (i.length > 100 ? "..." : ""), { requestId: t.requestId, text: i, provider: "Anthropic", model: "claude-haiku-4-5-20251001" };
    } catch (n) {
      throw r.status = "error", n;
    }
  }
  async inferSkeleton(t) {
    var _a;
    if (!this.client) throw new Error("Cloud adapter not initialized \u2014 no API key");
    if (this._status !== "available") throw new Error(`Cloud adapter status: ${this._status}`);
    if (!g()) throw new Error("Cloud AI unavailable \u2014 you are currently offline. Local AI features still work.");
    if (!y()) throw new Error("Cloud AI requires session consent. Open AI Settings to continue.");
    const e = t.prompt, r = P(t.centroidVector, t.entityCount, e), n = { id: t.requestId, timestamp: Date.now(), sanitizedPrompt: _(`[geometric-skeleton] centroid[${t.centroidVector.length}] entities=${t.entityCount}`), provider: "Anthropic", model: "claude-haiku-4-5-20251001", status: "pending" };
    if (A(n), this.onPreSendApproval && !await this.onPreSendApproval(n, [], /* @__PURE__ */ new Map())) throw n.status = "cancelled", new Error("Cloud skeleton request cancelled by user");
    n.status = "approved";
    try {
      const s = this.client.messages.stream({ model: "claude-haiku-4-5-20251001", max_tokens: t.maxTokens ?? 2048, messages: [{ role: "user", content: r }] });
      s.on("text", (p) => {
        var _a2;
        return (_a2 = t.onChunk) == null ? void 0 : _a2.call(t, p);
      }), t.signal && t.signal.addEventListener("abort", () => s.abort());
      const u = await s.finalMessage(), i = ((_a = u.content[0]) == null ? void 0 : _a.type) === "text" ? u.content[0].text : "";
      n.status = "completed", n.responseSummary = i.slice(0, 100) + (i.length > 100 ? "..." : "");
      const a = M(i), d = T(i) ?? (a === null ? b(i, /* @__PURE__ */ new Map()) : null);
      return { skeleton: a, bridgeText: d };
    } catch (s) {
      throw n.status = "error", s;
    }
  }
  reinitialize() {
    this.client = null, this._status = "disabled", this.initialize();
  }
  dispose() {
    this.client = null, this._status = "disabled";
  }
}
export {
  N as AnthropicCloudAdapter,
  N as CloudAdapter,
  O as DESTRUCTIVE_ACTIONS,
  B as isDestructiveAction
};
