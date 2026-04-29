function a(e, i, t) {
  return e === 1 ? i : t;
}
function u(e, i, t, s, o) {
  const n = (e == null ? void 0 : e.level) ?? "yellow", r = e != null ? ` (entropy: ${Math.round(e.score)}%)` : "";
  if (n === "green") {
    if (i === 0 && t === 0 && s === 0) return "Your system is clean -- nothing needs attention right now.";
    const l = [];
    return i > 0 && l.push(`${i} ${a(i, "item", "items")} could use a touch`), t > 0 && l.push(`${t} ${a(t, "project", "projects")} missing a next action`), `${l.length > 0 ? `${l.join(", ")}. ` : ""}You're in good shape.`;
  }
  return n === "red" ? `System load is high${r}. ${i} stale ${a(i, "item", "items")}, ${t} ${a(t, "project", "projects")} with no next action, and ${s} compression ${a(s, "candidate", "candidates")}. Your system is getting noisy.` : `You have ${i} stale ${a(i, "item", "items")} and ${t} ${a(t, "project", "projects")} missing next actions. Needs attention${r}.`;
}
function d(e) {
  const i = new Date(e.atom.updated_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }), t = e.linkCount === 0 ? ", with no links to other items" : "", s = `Last touched ${i} -- stale for ${e.staleDays} days${t}.`, o = e.similarAtomTitles.length > 0 ? ` There ${a(e.similarAtomTitles.length, "is", "are")} ${e.similarAtomTitles.length} similar ${a(e.similarAtomTitles.length, "item", "items")}.` : "", n = e.relatedDecisionTitles.length > 0 ? ` Related decision: "${e.relatedDecisionTitles[0]}".` : "";
  return `${s}${o}${n}`;
}
function p(e) {
  return e.staleDays > 60 && e.linkCount === 0 ? "archive" : e.similarAtomTitles.length >= 2 ? "tag-someday" : e.relatedDecisionTitles.length > 0 ? "archive" : "tag-someday";
}
function h(e) {
  return e.staleDays > 90 && e.linkCount === 0 ? "high" : e.staleDays > 30 && e.linkCount <= 1 ? "medium" : "low";
}
function m(e, i, t) {
  if (!t) return `${e}: ${i} -- anything to capture?`;
  const { section: s, activeTaskCount: o, daysSinceLastActivity: n } = t, r = n > 14 ? ` You haven't touched ${s.name} in ${n} days.` : "";
  return o === 0 ? `${s.name} has no active tasks.${r} Anything to add?` : `${s.name} (${o} active).${r} ${i} -- anything new to capture?`;
}
function $(e, i, t) {
  const s = [];
  if (t > 10 && s.push({ stepId: `pattern-inbox-${Math.random().toString(36).slice(2, 7)}`, phase: "get-creative", question: `Your inbox has ${t} items. Would you like to schedule a dedicated inbox session?`, options: [{ id: "capture", label: "Schedule inbox session", description: "Add a task to process the inbox backlog", stagingAction: { type: "capture", content: "Process inbox backlog" } }, { id: "skip", label: "Skip for now", stagingAction: { type: "skip" } }], allowFreeform: false }), s.length >= 3) return s.slice(0, 3);
  const o = i.filter((n) => n.status === "open" || n.status === "in-progress");
  for (const n of e) {
    if (s.length >= 3) break;
    const r = o.filter((l) => l.sectionId === n.id);
    if (n.type !== "archive" && r.length === 0) {
      s.push({ stepId: `pattern-empty-${n.id.slice(0, 5)}-${Math.random().toString(36).slice(2, 7)}`, phase: "get-creative", question: `Your ${n.name} section has no open items. Any projects to start?`, options: [{ id: "capture", label: `Add to ${n.name}`, description: `Capture a new item for ${n.name}`, stagingAction: { type: "capture", content: `New item for ${n.name}` } }, { id: "skip", label: "Skip", stagingAction: { type: "skip" } }], allowFreeform: true });
      break;
    }
  }
  return s.slice(0, 3);
}
export {
  h as a,
  d as b,
  $ as d,
  m as e,
  u as g,
  p as r
};
