import { j as m } from "./index-DwiQ5yRy.js";
import { e as f, d as y } from "./templates-B5TFKYkH.js";
const b = [{ id: "health", label: "Health & Wellness", description: "Physical health, medical, fitness, mental health" }, { id: "career", label: "Career & Professional", description: "Work projects, skills, job, career goals" }, { id: "family", label: "Family & Relationships", description: "Family, friends, commitments, communication" }, { id: "home", label: "Home & Errands", description: "Household, repairs, purchases, logistics" }, { id: "learning", label: "Learning & Growth", description: "Books, courses, skills to develop" }, { id: "finance", label: "Finance & Admin", description: "Bills, taxes, banking, planning" }, { id: "creative", label: "Creative & Side Projects", description: "Personal projects, hobbies, ideas" }];
function A(n) {
  return n.length === 0 ? [{ stepId: "get-clear-empty", phase: "get-clear", question: "Your inbox is clear! No items to process.", options: [{ id: "continue", label: "Continue to next phase" }], allowFreeform: false }] : n.map((o) => ({ stepId: `get-clear-${o.id}`, phase: "get-clear", question: `What should we do with "${o.title || o.content.slice(0, 60)}"?`, options: [{ id: "classify-task", label: "It's a task", description: "Actionable \u2014 needs to be done", stagingAction: { type: "none" } }, { id: "classify-reference", label: "It's reference", description: "Keep for future lookup", stagingAction: { type: "none" } }, { id: "trash", label: "Trash it", description: "Not needed anymore", stagingAction: { type: "delete", atomId: o.id } }, { id: "skip", label: "Skip for now", stagingAction: { type: "skip" } }], allowFreeform: false, context: o.content.slice(0, 200), atomId: o.id }));
}
function I(n, o, i) {
  if (n.length === 0 && o.length === 0 && i.length === 0) return [{ stepId: "get-current-empty", phase: "get-current", question: "Your system is healthy \u2014 no stale items, all projects have next actions.", options: [{ id: "continue", label: "Continue to Get Creative" }], allowFreeform: false }];
  const s = [], r = n.slice(0, 10);
  for (const e of r) {
    const t = Math.floor((Date.now() - e.updated_at) / 864e5);
    s.push({ stepId: `get-current-stale-${e.id}`, phase: "get-current", question: `"${e.title}" hasn't been updated in ${t} days. What should we do?`, options: [{ id: "keep", label: "Still relevant", description: "Touch to reset staleness", stagingAction: { type: "defer", atomId: e.id } }, { id: "archive", label: "Archive it", description: "No longer active", stagingAction: { type: "archive", atomId: e.id } }, { id: "skip", label: "Skip", stagingAction: { type: "skip" } }], allowFreeform: false, atomId: e.id });
  }
  const l = o.slice(0, 10);
  for (const e of l) s.push({ stepId: `get-current-project-${e.id}`, phase: "get-current", question: `Project "${e.name}" has no next action. What's the next step?`, options: [{ id: "add-action", label: "Add next action", description: "Capture what needs to happen next", stagingAction: { type: "add-next-action", projectName: e.name } }, { id: "skip", label: "Skip for now", stagingAction: { type: "skip" } }], allowFreeform: true });
  return i.length > 0 && s.push({ stepId: "get-current-compression", phase: "get-current", question: `${i.length} compression candidate${i.length === 1 ? "" : "s"} detected. AI explanations have been generated \u2014 you'll review them in the staging area at the end.`, options: [{ id: "continue", label: "Got it, continue" }], allowFreeform: false }), s;
}
function v(n, o) {
  const i = o.filter((t) => t.sectionId === n.id), s = i.filter((t) => t.type === "task" && (t.status === "open" || t.status === "in-progress")), r = i.filter((t) => t.type === "task" && t.status === "open"), l = i.reduce((t, c) => Math.max(t, c.updated_at), 0), e = l > 0 ? Math.floor((Date.now() - l) / 864e5) : 999;
  return { section: n, activeTaskCount: s.length, activeProjectCount: r.length, daysSinceLastActivity: e };
}
async function S(n, o, i, s, r, l, e) {
  const t = [];
  t.push({ stepId: "get-creative-someday", phase: "get-creative", question: "Let's scan your Someday/Maybe items. Anything you'd like to activate or discard?", options: [{ id: "activate", label: "Activate something", description: "Move a someday item to active" }, { id: "all-good", label: "All good", description: "Nothing to change" }], allowFreeform: true });
  const c = n.filter((a) => a.type !== "projects");
  for (const a of c) t.push({ stepId: `get-creative-area-${a.id}`, phase: "get-creative", question: `Area: "${a.name}" \u2014 any new projects or tasks needed here?`, options: [{ id: "new-project", label: "New project needed", stagingAction: { type: "capture", content: "" } }, { id: "new-task", label: "Quick task to add", stagingAction: { type: "capture", content: "" } }, { id: "all-good", label: "All good here" }], allowFreeform: true });
  for (const a of b) {
    const d = n.find((p) => p.name.toLowerCase().includes(a.id) || a.id.includes(p.name.toLowerCase())), h = d ? v(d, r) : null, g = f(a.label, a.description, h);
    t.push({ stepId: `get-creative-trigger-${a.id}`, phase: "get-creative", question: g, options: [{ id: "capture", label: "Yes, add to inbox", stagingAction: { type: "capture", content: "" } }, { id: "skip", label: "Nothing here" }], allowFreeform: true });
  }
  const u = y(n, r, l.length);
  return t.push(...u), t.push({ stepId: "get-creative-final", phase: "get-creative", question: "Anything else on your mind? One last chance to capture before we wrap up.", options: [{ id: "capture", label: "Yes, one more thing", stagingAction: { type: "capture", content: "" } }, { id: "done", label: "I'm done!" }], allowFreeform: true }), t;
}
async function $(n, o, i) {
  const s = n === "get-clear" ? "Get Clear" : n === "get-current" ? "Get Current" : "Get Creative", r = o.map((e) => `- ${e.phase}: "${e.selectedLabel}"${e.freeformText ? ` (note: ${e.freeformText})` : ""}`).join(`
`), l = `Summarize this GTD review phase in ~50 words. Phase: ${s}. Actions taken:
${r || "(no actions taken)"}

Focus on what was decided, not the process.`;
  try {
    return (await m({ requestId: crypto.randomUUID(), prompt: l, maxTokens: 150, signal: i })).text.trim();
  } catch {
    return `${s} phase complete. ${o.length} items reviewed.`;
  }
}
export {
  A as buildGetClearSteps,
  S as buildGetCreativeSteps,
  I as buildGetCurrentSteps,
  $ as generatePhaseSummary
};
