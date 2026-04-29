const p = { "assertion-gap-detector": 0.5, "implied-intent": 0.4, "situation-dynamics": 0.5 };
function f(o, e) {
  return new Promise((t, c) => {
    const s = crypto.randomUUID(), n = (i) => {
      const l = i.data;
      l.id === s && (o.removeEventListener("message", n), l.type === "INPUT_RESULT" ? t(l) : l.type === "INPUT_ERROR" && c(new Error(l.error)));
    };
    o.addEventListener("message", n), o.postMessage({ type: "CLASSIFY_INPUT", id: s, userText: e.userText, priorTurn: e.priorTurn, assertionSummary: e.assertionSummary });
  });
}
function d(o) {
  if (o.length === 0) return {};
  let e = {}, t = -1;
  for (const { scores: c } of o) {
    const s = Object.values(c);
    if (s.length === 0) continue;
    const n = Math.max(...s);
    n > t && (t = n, e = c);
  }
  return e;
}
function m(o) {
  const e = { gapType: null, gapConfidence: 0, impliedIntent: null, intentConfidence: 0, dynamics: null, dynamicsConfidence: 0, complexityLevel: null, complexityConfidence: 0, temporalUrgency: null, temporalUrgencyConfidence: 0, relationshipContext: null, relationshipContextConfidence: 0, informationCompleteness: null, completenessConfidence: 0, decompositionPattern: null, decompositionConfidence: 0, binderTypeAlignment: null, alignmentConfidence: 0 };
  for (const { name: t, scores: c } of o) {
    const s = Object.entries(c);
    if (s.length === 0) continue;
    let n = "", i = 0;
    for (const [a, r] of s) r > i && (i = r, n = a);
    if (n === "") continue;
    const l = p[t];
    l !== void 0 && i < l || (t === "assertion-gap-detector" ? (e.gapType = n, e.gapConfidence = i) : t === "implied-intent" ? (e.impliedIntent = n, e.intentConfidence = i) : t === "situation-dynamics" ? (e.dynamics = n, e.dynamicsConfidence = i) : t === "complexity-level" ? (e.complexityLevel = n, e.complexityConfidence = i) : t === "temporal-urgency" ? (e.temporalUrgency = n, e.temporalUrgencyConfidence = i) : t === "relationship-context" ? (e.relationshipContext = n, e.relationshipContextConfidence = i) : t === "information-completeness" ? (e.informationCompleteness = n, e.completenessConfidence = i) : t === "decomposition-pattern" ? (e.decompositionPattern = n, e.decompositionConfidence = i) : t === "binder-type-alignment" && (e.binderTypeAlignment = n, e.alignmentConfidence = i));
  }
  return e;
}
export {
  p as INPUT_AGENT_THRESHOLDS,
  m as applyInputAgentThresholds,
  f as classifyInputViaWorker,
  d as selectMaxConfidenceHead
};
