import { l as h, o as e, s, m as r, n, p as y } from "./index-DwiQ5yRy.js";
const i = 1, c = e({ maxDepth: n().int().min(1).max(10), maxMs: n().int().min(1).max(3e4) }), f = e({ direction: y(n()).length(14), radius: n().min(0).max(10), depth: n().int().min(1).max(10) }), w = e({}).passthrough(), C = e({}).passthrough(), v = e({}).passthrough(), l = h("op", [e({ protocolVersion: r(i), op: r("Retrieve"), params: f, budget: c, correlationId: s().min(1) }), e({ protocolVersion: r(i), op: r("Compare"), params: w, budget: c, correlationId: s().min(1) }), e({ protocolVersion: r(i), op: r("Integrate"), params: C, budget: c, correlationId: s().min(1) }), e({ protocolVersion: r(i), op: r("Bridge"), params: v, budget: c, correlationId: s().min(1) })]);
function b(o) {
  const a = JSON.parse(o);
  return l.parse(a);
}
function x(o) {
  return l.parse(o), JSON.stringify(o);
}
const p = "binderos-query-protocol-v1";
async function N() {
  if (typeof BroadcastChannel > "u") throw new Error("[query-protocol-demo] BroadcastChannel is not available in this environment");
  const o = new BroadcastChannel(p);
  let a = 0;
  o.onmessage = (t) => {
    try {
      const d = typeof t.data == "string" ? t.data : JSON.stringify(t.data), g = b(d);
      a++, console.log("[query-protocol-demo RECV]", g);
    } catch (d) {
      console.warn("[query-protocol-demo RECV] invalid message", d);
    }
  };
  const m = { protocolVersion: 1, op: "Retrieve", params: { direction: Array.from({ length: 14 }, () => 1 / Math.sqrt(14)), radius: 0.3, depth: 2 }, budget: { maxDepth: 2, maxMs: 100 }, correlationId: `demo-${Date.now()}` }, u = x(m);
  return console.log("[query-protocol-demo SEND]", m), o.postMessage(u), await new Promise((t) => setTimeout(t, 1e3)), o.close(), { channelName: p, sent: m, receivedCount: a };
}
typeof window < "u" && (window.__adaptiveChunkingDemo = N);
export {
  N as runAdaptiveChunkingDemo
};
