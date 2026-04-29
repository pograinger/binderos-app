import { d as h } from "./index-DwiQ5yRy.js";
const c = 0.3, f = 20, m = 100, g = 3e4;
let r = c, u = false, d = false;
typeof globalThis.requestIdleCallback > "u" && (globalThis.requestIdleCallback = (n, e) => {
  const a = Date.now();
  return window.setTimeout(() => {
    n({ didTimeout: false, timeRemaining: () => Math.max(0, 50 - (Date.now() - a)) });
  }, (e == null ? void 0 : e.timeout) ?? 1);
}, globalThis.cancelIdleCallback = (n) => clearTimeout(n));
function b() {
  return r;
}
function T(n, e) {
  const a = Math.min(n.length, e.length);
  let l = 0;
  for (let i = 0; i < a; i++) {
    const t = (n[i] ?? 0) - (e[i] ?? 0);
    l += t * t;
  }
  return Math.sqrt(l);
}
async function p() {
  const e = (await h.atoms.where("type").equals("chunk").reverse().limit(m).toArray()).map((t) => t.compoundStateSignature).filter((t) => Array.isArray(t) && t.length === 14);
  if (e.length < f) return r = c, r;
  let a = 0, l = 0;
  for (let t = 0; t < e.length; t++) for (let s = t + 1; s < e.length; s++) a += T(e[t], e[s]), l++;
  const i = l > 0 ? a / l : NaN;
  return !Number.isFinite(i) || i <= 0 ? (r = c, r) : (r = i, r);
}
function o() {
  u || (u = true, requestIdleCallback(async (n) => {
    if (u = false, !(typeof document < "u" && document.visibilityState === "hidden")) {
      if (n.timeRemaining() < 5 && !n.didTimeout) {
        o();
        return;
      }
      try {
        await p();
      } catch (e) {
        console.warn("[adaptive-chunking-threshold] recompute failed", e);
      }
      o();
    }
  }, { timeout: g }));
}
function A() {
  d || (d = true, o(), typeof document < "u" && document.addEventListener("visibilitychange", () => {
    document.visibilityState === "visible" && o();
  }));
}
export {
  b as getCurrentThreshold,
  p as recomputeAdaptiveThreshold,
  A as registerAdaptiveChunkingThresholdWorker
};
