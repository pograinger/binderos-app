import { g as u } from "./templates-B5TFKYkH.js";
async function I(n, d, p, f, g, a, h) {
  const r = Date.now(), i = n.filter((t) => t.type !== "analysis" && (t.status === "open" || t.status === "in-progress")).map((t) => ({ atom: t, staleDays: Math.floor((r - t.updated_at) / 864e5) })).filter(({ staleDays: t }) => t > 14).sort((t, e) => e.staleDays - t.staleDays).map(({ atom: t, staleDays: e }) => {
    var _a;
    return { atomId: t.id, title: t.title || t.content.split(`
`)[0] || t.id, staleDays: e, linkCount: t.links.length, entropyScore: (_a = d[t.id]) == null ? void 0 : _a.staleness };
  });
  a(`${i.length} stale item${i.length === 1 ? "" : "s"} found`);
  const c = g.find((t) => t.type === "projects"), s = [];
  if (c) {
    const t = f.filter((e) => !e.archived);
    for (const e of t) {
      if (e.sectionId !== c.id) continue;
      n.some((l) => l.sectionItemId === e.id && l.type === "task" && (l.status === "open" || l.status === "in-progress")) || s.push({ atomId: e.id, title: e.name });
    }
  }
  a(`${s.length} project${s.length === 1 ? "" : "s"} missing next actions`);
  const o = n.filter((t) => t.type !== "analysis" && t.status !== "archived" && t.status !== "cancelled").map((t) => ({ atom: t, staleDays: Math.floor((r - t.updated_at) / 864e5) })).filter(({ atom: t, staleDays: e }) => e > 30 && t.links.length === 0).map(({ atom: t, staleDays: e }) => ({ atomId: t.id, title: t.title || t.content.split(`
`)[0] || t.id, staleDays: e }));
  if (a(`${o.length} compression candidate${o.length === 1 ? "" : "s"} identified`), h == null ? void 0 : h.aborted) throw new DOMException("Aborted", "AbortError");
  return { summaryText: u(p, i.length, s.length, o.length, n.filter((t) => t.type !== "analysis").length), staleItems: i, projectsMissingNextAction: s, compressionCandidates: o, generatedAt: r };
}
export {
  I as generateBriefing
};
