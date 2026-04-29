import { k as d } from "./index-DwiQ5yRy.js";
import { a as C, r as D, b as g } from "./templates-B5TFKYkH.js";
function x(o, i, m) {
  const l = Date.now(), s = i.filter((n) => n.type === "decision");
  return o.map((n) => {
    const t = i.find((e) => e.id === n.id);
    if (!t) return null;
    const c = Math.floor((l - t.updated_at) / 864e5), f = t.links.length, a = (t.title || "") + " " + t.content, p = i.filter((e) => e.id !== t.id && e.type !== "analysis").map((e) => ({ id: e.id, title: e.title, content: e.content })), u = d(a, p, 5).map((e) => {
      var _a;
      return ((_a = i.find((r) => r.id === e)) == null ? void 0 : _a.title) ?? "";
    }).filter(Boolean), h = s.map((e) => ({ id: e.id, title: e.title, content: e.content })), A = d(a, h, 3).map((e) => {
      var _a;
      return ((_a = s.find((r) => r.id === e)) == null ? void 0 : _a.title) ?? "";
    }).filter(Boolean);
    return { atomId: t.id, atom: t, staleDays: c, linkCount: f, similarAtomTitles: u, relatedDecisionTitles: A };
  }).filter((n) => n !== null);
}
async function b(o, i, m, l, s) {
  if (o.length === 0) return [];
  s == null ? void 0 : s(0, o.length);
  const n = x(o, i);
  if (n.length === 0) return [];
  if (l == null ? void 0 : l.aborted) throw new DOMException("Aborted", "AbortError");
  return s == null ? void 0 : s(n.length, n.length), n.map((t) => ({ atomId: t.atomId, title: t.atom.title || t.atom.content.slice(0, 60), explanation: g(t), staleDays: t.staleDays, linkCount: t.linkCount, similarAtomCount: t.similarAtomTitles.length, similarAtomTitles: t.similarAtomTitles, decisionContext: t.relatedDecisionTitles[0], recommendedAction: D(t), confidence: C(t) }));
}
export {
  b as generateCompressionExplanations
};
