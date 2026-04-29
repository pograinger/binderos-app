const S = 0.45, f = ["date", "deadline", "meeting", "event", "departs", "departure", "arrives"], g = ["emotional-state", "emotion", "stress-signal", "urgency"], p = ["departs", "departure", "arrives", "flight", "trip"];
function E(i, n, t) {
  var _a;
  const r = i.length > 0 ? i.reduce((a, l) => a + l.confidence, 0) / i.length : 0, o = n.length > 0 ? Math.min(1, n.length / 2) * 0.8 : 0.2, u = t.length > 0 ? ((_a = t[0]) == null ? void 0 : _a.confidence) ?? 0 : 0;
  return r * 0.45 + o * 0.35 + u * 0.2;
}
function y(i) {
  const n = i.assertions.filter((e) => e.active), t = n.filter((e) => f.includes(e.predicate)), r = n.filter((e) => e.category === "relationship" || e.category === "identity" && e.subject !== "user"), o = n.filter((e) => g.includes(e.predicate));
  if (t.length === 0 || E(t, r, o) < 0.45 || !t.some((e) => e.confidence >= 0.6)) return null;
  const l = t.some((e) => p.includes(e.predicate)), h = r.length > 0 ? r.sort((e, s) => s.confidence - e.confidence)[0] ?? null : null, d = (h == null ? void 0 : h.object) ?? (h == null ? void 0 : h.subject) ?? null, c = t.sort((e, s) => s.confidence - e.confidence)[0];
  if (l && o.length > 0) return "That's a tight turnaround -- sounds like a lot to manage. Anything you need lined up before you go?";
  if (d && o.length > 0) return `Big stretch coming up with ${d}. Want to make sure you're set before then?`;
  if (o.length > 0 && c) return `${c.object || c.subject} is close -- sounds like it's weighing on you. Want to think it through?`;
  if (c) {
    const e = c.subject, s = c.object;
    return `${e} on ${s} -- anything you want to get ahead of?`;
  }
  return null;
}
export {
  S as SYNTHESIS_CONFIDENCE_THRESHOLD,
  E as computeSynthesisConfidence,
  y as generateProactiveSynthesis
};
