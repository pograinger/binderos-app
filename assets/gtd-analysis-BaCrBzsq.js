import { j as u } from "./index-DwiQ5yRy.js";
const h = { type: "object", properties: { question: { type: "string" }, options: { type: "array", items: { type: "object", properties: { id: { type: "string" }, label: { type: "string" }, description: { type: "string" } }, required: ["id", "label"] }, minItems: 2, maxItems: 4 } }, required: ["question", "options"] }, l = { actionable: { stepId: "actionable", question: "Is this item actionable? Can you do something about it?", options: [{ id: "yes", label: "Yes, it's actionable", description: "There's a concrete action I can take" }, { id: "no", label: "No, it's not actionable", description: "It's reference material, someday/maybe, or trash" }], aiGenerated: false }, "reference-or-trash": { stepId: "reference-or-trash", question: "Should this be kept as reference or discarded?", options: [{ id: "reference", label: "Keep as reference", description: "Archive it for future lookup" }, { id: "trash", label: "Discard it", description: "It's no longer relevant" }], aiGenerated: false }, "single-or-multi": { stepId: "single-or-multi", question: "Is this a single action or a multi-step project?", options: [{ id: "single", label: "Single action", description: "One clear next step" }, { id: "multi", label: "Multi-step project", description: "Requires multiple actions to complete" }], aiGenerated: false }, "two-min-rule": { stepId: "two-min-rule", question: "Can this be done in under 2 minutes?", options: [{ id: "yes", label: "Yes, under 2 minutes", description: "Quick enough to do right now" }, { id: "no", label: "No, it takes longer", description: "Needs to be scheduled or delegated" }], aiGenerated: false }, delegate: { stepId: "delegate", question: "Should this be delegated to someone else?", options: [{ id: "yes", label: "Yes, delegate it", description: "Someone else should handle this" }, { id: "no", label: "No, I'll do it", description: "I'm the right person for this" }], aiGenerated: false }, defer: { stepId: "defer", question: "When should this be done?", options: [{ id: "today", label: "Today", description: "Add to today's next actions" }, { id: "this-week", label: "This week", description: "Schedule for this week" }, { id: "someday", label: "Someday/maybe", description: "No urgency \u2014 review later" }], aiGenerated: false }, "next-action": { stepId: "next-action", question: "What is the very next physical action?", options: [{ id: "keep", label: "Keep current title", description: "The title already describes the next action" }, { id: "refine", label: "Refine the action", description: "Let AI suggest a clearer next action" }], aiGenerated: false }, done: { stepId: "done", question: "", options: [], aiGenerated: false } };
function b(e, o) {
  var _a;
  const t = o.length > 0 ? `
RELATED ITEMS:
${o.map((i) => `- ${i.title} (${i.type}, ${i.status})`).join(`
`)}` : "";
  return `ITEM TO ANALYZE:
Title: ${e.title}
Content: ${e.content}
Type: ${e.type}
Status: ${e.status}
Energy: ${e.energy ?? "unset"}
Context: ${e.context ?? "none"}
Tags: ${((_a = e.tags) == null ? void 0 : _a.join(", ")) || "none"}${t}`;
}
function m(e, o, t) {
  const i = t.length > 0 ? `
PREVIOUS ANSWERS:
${t.map((s) => `- ${s.stepId}: ${s.selectedLabel}`).join(`
`)}` : "";
  return `You are a personal productivity coach analyzing a user's item.

${o}
${i}

CURRENT STEP: ${e}
INSTRUCTION: ${{ actionable: "Ask whether this item is actionable \u2014 can the user take a concrete physical action on it? Consider the item's content and context.", "reference-or-trash": "The item is not actionable. Ask whether it should be kept as reference material or discarded entirely.", "single-or-multi": "The item is actionable. Ask whether it requires a single action or is a multi-step project that needs breaking down.", "two-min-rule": "This is a single action. Ask whether it can be completed in under 2 minutes (the GTD 2-minute rule).", delegate: "This action takes more than 2 minutes. Ask whether it should be delegated to someone else or if the user should do it themselves.", defer: "The user will do this themselves. Ask when it should be done \u2014 today, this week, or someday/maybe.", "next-action": "Ask the user to define the very next physical action. Suggest a concrete, verb-first action based on the item content.", done: "" }[e]}

Generate a contextual question with 2-4 multiple-choice options tailored to this specific item.
Make the question and options reference the item's actual content \u2014 don't be generic.
Each option needs an "id" (short identifier), "label" (button text), and optionally "description" (brief explanation).

Respond with ONLY valid JSON:
{"question":"<your contextual question>","options":[{"id":"<id>","label":"<label>","description":"<desc>"},...]}`;
}
let a = null;
async function g(e, o, t, i, n) {
  if (e === "done") return l.done;
  const s = l[e];
  try {
    const d = b(o, t), c = m(e, d, i), p = await u({ requestId: crypto.randomUUID(), prompt: c, maxTokens: 300, jsonSchema: h, signal: n }), r = f(p.text);
    if (r) return { stepId: e, question: r.question, options: r.options, aiGenerated: true };
  } catch {
  }
  return s;
}
function f(e) {
  try {
    const o = e.match(/\{[\s\S]*\}/);
    if (!o) return null;
    const t = JSON.parse(o[0]);
    if (typeof t.question != "string" || !Array.isArray(t.options) || t.options.length < 2) return null;
    const i = t.options.filter((n) => typeof n.id == "string" && typeof n.label == "string").map((n) => ({ id: n.id, label: n.label, description: typeof n.description == "string" ? n.description : void 0 }));
    return i.length < 2 ? null : { question: t.question, options: i };
  } catch {
    return null;
  }
}
function S() {
  return a == null ? void 0 : a.abort(), a = new AbortController(), a;
}
export {
  S as createGTDAbortController,
  g as executeGTDStep
};
