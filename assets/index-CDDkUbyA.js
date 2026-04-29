import { j as l, N as f } from "./index-DwiQ5yRy.js";
import { P as C, Q as P, M as N, R as _, T as A, U as z } from "./index-DwiQ5yRy.js";
const h = { task: [/\b(buy|get|do|make|send|call|email|write|fix|update|finish|complete|submit|schedule|book|order|pick\s*up|drop\s*off|check|review|prepare|create|set\s*up|clean|organize)\b/i, /\b(todo|to-do|to do|need to|must|should|have to|got to|gotta|reminder)\b/i, /\b(asap|urgent|deadline|due|by\s+\w+day)\b/i], event: [/\b(meeting|appointment|call|interview|conference|party|birthday|anniversary|dinner|lunch|breakfast|ceremony|wedding|funeral)\b/i, /\b(at\s+\d{1,2}(?::\d{2})?\s*(?:am|pm)?|on\s+(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday))\b/i, /\b(\d{1,2}\/\d{1,2}|\d{4}-\d{2}-\d{2}|january|february|march|april|may|june|july|august|september|october|november|december)\b/i], decision: [/\b(decided|decision|chose|chosen|picked|selected|agreed|committed|resolved|determined)\b/i, /\b(going with|opted for|will use|settled on|narrowed down)\b/i, /\b(pro|con|tradeoff|trade-off|versus|vs\.?)\b/i], insight: [/\b(realized|noticed|learned|discovered|found out|turns out|interesting|pattern|observation|aha|eureka)\b/i, /\b(insight|idea|thought|hypothesis|theory|connection|correlation)\b/i], fact: [/\b(is|are|was|were|has|have|had|contains|consists|equals|means|refers to|defined as)\b/i], analysis: [] };
function y(n) {
  const s = ["task", "fact", "event", "decision", "insight"];
  let e = "fact", t = 0;
  for (const i of s) {
    const c = h[i];
    let o = 0;
    for (const d of c) d.test(n) && o++;
    const a = c.length > 0 ? o / c.length : 0;
    a > t && (t = a, e = i);
  }
  const r = t === 0 ? 0.1 : Math.min(0.6, 0.2 + t * 0.4);
  return { type: e, confidence: r };
}
const b = /* @__PURE__ */ new Set(["the", "a", "an", "is", "are", "was", "were", "be", "been", "being", "have", "has", "had", "do", "does", "did", "will", "would", "could", "should", "may", "might", "shall", "can", "to", "of", "in", "for", "on", "with", "at", "by", "from", "as", "into", "through", "during", "before", "after", "above", "below", "between", "and", "but", "or", "not", "no", "nor", "so", "yet", "this", "that", "these", "those", "it", "its"]);
function p(n) {
  return new Set(n.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter((s) => s.length > 2 && !b.has(s)));
}
function w(n, s) {
  if (n.size === 0 || s.size === 0) return 0;
  let e = 0;
  for (const t of n) s.has(t) && e++;
  return e / (n.size + s.size - e);
}
function I(n, s) {
  if (s.length < 3) return null;
  const e = p(n), t = s.filter((a) => w(e, p(a.content)) > 0.3);
  if (t.length < 3) return null;
  const r = /* @__PURE__ */ new Map();
  for (const a of t) r.set(a.chosenType, (r.get(a.chosenType) ?? 0) + 1);
  let i = null, c = 0;
  for (const [a, d] of r) d > c && (c = d, i = a);
  if (!i) return null;
  const o = c / t.length;
  return o > 0.5 ? { type: i, confidence: Math.min(0.7, 0.3 + o * 0.4) } : null;
}
const T = [{ kind: "context", pattern: /@(\w+)/g }, { kind: "energy", pattern: /\b(quick|medium|deep)\s*(?:energy|focus|effort)?\b/gi }, { kind: "date", pattern: /\b(\d{4}-\d{2}-\d{2}|\d{1,2}\/\d{1,2}(?:\/\d{2,4})?)\b/g }, { kind: "tag", pattern: /#(\w[\w-]*)/g }];
function v(n) {
  const s = [];
  for (const { kind: e, pattern: t } of T) {
    const r = new RegExp(t.source, t.flags);
    let i;
    for (; (i = r.exec(n)) !== null; ) s.push({ kind: e, value: i[1] ?? i[0] });
  }
  return s;
}
function k(n) {
  const s = n.match(/staleness[=:]?\s*([\d.]+)/i), e = (s == null ? void 0 : s[1]) ? parseFloat(s[1]) : 0;
  return e > 0.8 ? { assessment: "High staleness \u2014 likely needs archiving or refresh", confidence: 0.75 } : e > 0.5 ? { assessment: "Moderate staleness \u2014 review for relevance", confidence: 0.65 } : e > 0.2 ? { assessment: "Low staleness \u2014 still relatively fresh", confidence: 0.7 } : { assessment: "Fresh content \u2014 no staleness concern", confidence: 0.8 };
}
function x(n = []) {
  let s = n;
  const e = ["classify-type", "route-section", "extract-entities", "assess-staleness"];
  return { tier: 1, name: "Deterministic Engine", canHandle(t) {
    return e.includes(t);
  }, async handle(t) {
    const { task: r, features: i } = t, c = (i.title ?? "") + " " + i.content;
    switch (r) {
      case "classify-type": {
        const o = I(c, s);
        if (o) return { tier: 1, confidence: o.confidence, type: o.type, reasoning: "Matched classification pattern from history" };
        const a = y(c);
        return { tier: 1, confidence: a.confidence, type: a.type, reasoning: "Keyword heuristic classification" };
      }
      case "route-section":
        return { tier: 1, confidence: 0.1, sectionItemId: null, reasoning: "No deterministic section routing available" };
      case "extract-entities": {
        const o = v(i.content);
        return { tier: 1, confidence: o.length > 0 ? 0.8 : 0.5, entities: o, reasoning: `Extracted ${o.length} entities via regex` };
      }
      case "assess-staleness": {
        const o = k(c);
        return { tier: 1, confidence: o.confidence, assessment: o.assessment, reasoning: "WASM score interpretation" };
      }
      default:
        return { tier: 1, confidence: 0, reasoning: `Task ${r} not supported by Tier 1` };
    }
  }, updateHistory(t) {
    s = t;
  } };
}
const E = ["task", "fact", "event", "decision", "insight"];
function m(n, s) {
  return `You are a Clarity triage assistant. Classify the following item.

Title: ${s ?? "(none)"}
Content: ${n}

ATOM TYPES:
- task: actionable item with a clear next physical action
- fact: reference information you want to remember or store
- event: time-bound occurrence (meeting, appointment, deadline)
- decision: choice that was made or needs to be made
- insight: realization, idea, or pattern noticed

Respond with ONLY valid JSON:
{"type":"<atom_type>","sectionItemId":null,"reasoning":"<one sentence why>","confidence":"high|low"}`;
}
function g(n) {
  try {
    const s = n.match(/\{[\s\S]*\}/);
    if (!s) return null;
    const e = JSON.parse(s[0]);
    return typeof e.type != "string" || !E.includes(e.type) ? null : { type: e.type, confidence: e.confidence === "high" ? 0.9 : 0.7, reasoning: typeof e.reasoning == "string" ? e.reasoning : "", sectionItemId: typeof e.sectionItemId == "string" && e.sectionItemId !== "null" ? e.sectionItemId : null };
  } catch {
    return null;
  }
}
function S() {
  return { tier: 3, name: "Generative Intelligence", canHandle(n) {
    return true;
  }, async handle(n) {
    const { task: s, features: e } = n;
    try {
      switch (s) {
        case "classify-type": {
          const t = e.promptOverride ?? m(e.content, e.title), r = await l({ requestId: n.requestId, prompt: t, maxTokens: 200, signal: e.signal }), i = g(r.text);
          return i ? { tier: 3, confidence: i.confidence, type: i.type, sectionItemId: i.sectionItemId, reasoning: i.reasoning } : { tier: 3, confidence: 0.3, reasoning: "Could not parse LLM classification response" };
        }
        case "route-section": {
          const t = e.promptOverride ?? m(e.content, e.title), r = await l({ requestId: n.requestId, prompt: t, maxTokens: 200, signal: e.signal }), i = g(r.text);
          return i ? { tier: 3, confidence: i.sectionItemId ? 0.8 : 0.5, sectionItemId: i.sectionItemId, reasoning: i.reasoning } : { tier: 3, confidence: 0.3, sectionItemId: null, reasoning: "Could not parse LLM routing response" };
        }
        case "assess-staleness": {
          const t = e.promptOverride ?? `Assess the staleness of this item in 1-2 sentences: "${e.content}"`;
          return { tier: 3, confidence: 0.85, assessment: (await l({ requestId: n.requestId, prompt: t, maxTokens: 200, signal: e.signal })).text, reasoning: "LLM staleness assessment" };
        }
        case "summarize":
        case "analyze-gtd": {
          const t = e.promptOverride ?? e.content;
          return { tier: 3, confidence: 0.9, text: (await l({ requestId: n.requestId, prompt: t, maxTokens: 1e3, signal: e.signal })).text, reasoning: `LLM ${s}` };
        }
        default:
          return { tier: 3, confidence: 0, reasoning: `Unknown task type: ${s}` };
      }
    } catch (t) {
      if (t instanceof DOMException && t.name === "AbortError") throw t;
      return { tier: 3, confidence: 0, reasoning: `Tier 3 error: ${t instanceof Error ? t.message : String(t)}` };
    }
  } };
}
let u = null;
function L(n = []) {
  u = x(n), f(u), f(S());
}
function M(n) {
  u == null ? void 0 : u.updateHistory(n);
}
export {
  C as CENTROID_REBUILD_INTERVAL,
  P as CONFIDENCE_THRESHOLDS,
  N as MIN_SAMPLES_PER_TYPE,
  _ as dispatchTiered,
  A as getRegisteredHandlers,
  L as initTieredPipeline,
  f as registerHandler,
  z as unregisterHandler,
  M as updateTier1History
};
