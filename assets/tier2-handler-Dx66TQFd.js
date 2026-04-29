import { X as P, Z as N } from "./index-DwiQ5yRy.js";
import { cosine as A } from "./self-distillation-CXGQ3wPu.js";
const F = { administrative: { category: "administrative", applicableTo: ["task"], steps: [{ template: "Gather all required documents for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Fill out forms or paperwork for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Submit completed paperwork for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Confirm receipt and follow up on {topic}", defaultType: "task", slots: ["topic"] }] }, "career-move": { category: "career-move", applicableTo: ["task"], steps: [{ template: "Update resume and portfolio for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Research companies and roles related to {topic}", defaultType: "task", slots: ["topic"] }, { template: "Reach out to contacts in your network about {topic}", defaultType: "task", slots: ["topic"] }, { template: "Apply or schedule interviews for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Prepare for interviews about {topic}", defaultType: "task", slots: ["topic"] }] }, "childcare-parenting": { category: "childcare-parenting", applicableTo: ["task"], steps: [{ template: "Research options and recommendations for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Schedule appointment or session for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Prepare supplies or materials needed for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Follow through on {topic} plan", defaultType: "task", slots: ["topic"] }] }, "communication-task": { category: "communication-task", applicableTo: ["task"], steps: [{ template: "Draft message or talking points for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Send message to {person} about {topic}", defaultType: "task", slots: ["person", "topic"] }, { template: "Follow up if no response within 48 hours on {topic}", defaultType: "task", slots: ["topic"] }] }, "complete-application": { category: "complete-application", applicableTo: ["task"], steps: [{ template: "Collect required documents for {topic} application", defaultType: "task", slots: ["topic"] }, { template: "Fill out {topic} application form", defaultType: "task", slots: ["topic"] }, { template: "Write personal statement or cover letter for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Submit {topic} application before deadline", defaultType: "task", slots: ["topic"] }, { template: "Confirm submission and note follow-up date for {topic}", defaultType: "task", slots: ["topic"] }] }, "create-content": { category: "create-content", applicableTo: ["task"], steps: [{ template: "Outline the structure and key points for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Draft the first version of {topic}", defaultType: "task", slots: ["topic"] }, { template: "Review and edit {topic} draft", defaultType: "task", slots: ["topic"] }, { template: "Publish or share {topic}", defaultType: "task", slots: ["topic"] }] }, "digital-cleanup": { category: "digital-cleanup", applicableTo: ["task"], steps: [{ template: "Identify files and accounts to clean up for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Back up important data before {topic} cleanup", defaultType: "task", slots: ["topic"] }, { template: "Delete or archive unnecessary items for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Organize remaining files and update {topic} structure", defaultType: "task", slots: ["topic"] }] }, "errand-run": { category: "errand-run", applicableTo: ["task"], steps: [{ template: "Make a list of items needed for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Plan the route to {location} for {topic}", defaultType: "task", slots: ["location", "topic"] }, { template: "Go to {location} and complete {topic}", defaultType: "task", slots: ["location", "topic"] }, { template: "Put away purchases and update {topic} list", defaultType: "task", slots: ["topic"] }] }, "financial-task": { category: "financial-task", applicableTo: ["task"], steps: [{ template: "Gather account statements and records for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Review numbers and identify issues with {topic}", defaultType: "task", slots: ["topic"] }, { template: "Take action: pay, transfer, or adjust {topic}", defaultType: "task", slots: ["topic"] }, { template: "File records and set reminder for next {topic} review", defaultType: "task", slots: ["topic"] }] }, "fitness-goal": { category: "fitness-goal", applicableTo: ["task"], steps: [{ template: "Define specific target and timeline for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Create a weekly schedule for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Prepare gear and supplies needed for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Complete the first {topic} session", defaultType: "task", slots: ["topic"] }] }, "gift-giving": { category: "gift-giving", applicableTo: ["task"], steps: [{ template: "Brainstorm gift ideas for {person} related to {topic}", defaultType: "task", slots: ["person", "topic"] }, { template: "Set a budget for {topic} gift", defaultType: "decision", slots: ["topic"] }, { template: "Purchase or order {topic} gift", defaultType: "task", slots: ["topic"] }, { template: "Wrap and deliver {topic} gift to {person}", defaultType: "task", slots: ["person", "topic"] }] }, "home-improvement": { category: "home-improvement", applicableTo: ["task"], steps: [{ template: "Research materials and methods for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Buy supplies needed for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Clear and prep the area for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Complete {topic} work", defaultType: "task", slots: ["topic"] }, { template: "Clean up and inspect {topic} result", defaultType: "task", slots: ["topic"] }] }, "learn-skill": { category: "learn-skill", applicableTo: ["task"], steps: [{ template: "Find a course, book, or tutorial for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Schedule regular practice time for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Complete the first lesson or chapter on {topic}", defaultType: "task", slots: ["topic"] }, { template: "Practice {topic} with a small real project", defaultType: "task", slots: ["topic"] }] }, "maintenance-routine": { category: "maintenance-routine", applicableTo: ["task"], steps: [{ template: "Check current condition of {topic}", defaultType: "task", slots: ["topic"] }, { template: "Gather cleaning supplies or parts for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Perform {topic} maintenance", defaultType: "task", slots: ["topic"] }, { template: "Set next maintenance reminder for {topic}", defaultType: "task", slots: ["topic"] }] }, "meal-prep": { category: "meal-prep", applicableTo: ["task"], steps: [{ template: "Choose recipes for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Write shopping list for {topic} ingredients", defaultType: "task", slots: ["topic"] }, { template: "Buy ingredients for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Prep and cook {topic}", defaultType: "task", slots: ["topic"] }, { template: "Store and label {topic} portions", defaultType: "task", slots: ["topic"] }] }, "medical-health": { category: "medical-health", applicableTo: ["task"], steps: [{ template: "Call to schedule appointment for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Gather insurance info and medical records for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Attend {topic} appointment", defaultType: "task", slots: ["topic"] }, { template: "Follow up on {topic} results or prescriptions", defaultType: "task", slots: ["topic"] }] }, "moving-relocate": { category: "moving-relocate", applicableTo: ["task"], steps: [{ template: "Sort and declutter belongings before {topic}", defaultType: "task", slots: ["topic"] }, { template: "Get quotes from movers or rent a truck for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Pack boxes and label them for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Update address for utilities, subscriptions, and mail for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Complete the move and unpack essentials for {topic}", defaultType: "task", slots: ["topic"] }] }, "organize-space": { category: "organize-space", applicableTo: ["task"], steps: [{ template: "Empty and sort everything in {location} for {topic}", defaultType: "task", slots: ["location", "topic"] }, { template: "Discard or donate items you no longer need for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Get storage containers or organizers for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Put everything back in {location} organized for {topic}", defaultType: "task", slots: ["location", "topic"] }] }, "pet-care": { category: "pet-care", applicableTo: ["task"], steps: [{ template: "Schedule vet appointment for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Buy supplies needed for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Complete {topic} care routine", defaultType: "task", slots: ["topic"] }, { template: "Set reminder for next {topic} check", defaultType: "task", slots: ["topic"] }] }, "plan-event": { category: "plan-event", applicableTo: ["task"], steps: [{ template: "Set date, time, and location for {topic}", defaultType: "decision", slots: ["topic"] }, { template: "Create guest list and send invitations for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Arrange food, drinks, and supplies for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Confirm RSVPs and finalize details for {topic}", defaultType: "task", slots: ["topic"] }] }, "plan-trip": { category: "plan-trip", applicableTo: ["task"], steps: [{ template: "Choose dates and destination for {topic}", defaultType: "decision", slots: ["topic"] }, { template: "Book transportation for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Reserve accommodation for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Plan activities and create itinerary for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Pack bags and prepare travel documents for {topic}", defaultType: "task", slots: ["topic"] }] }, "repair-fix": { category: "repair-fix", applicableTo: ["task"], steps: [{ template: "Diagnose the exact problem with {topic}", defaultType: "task", slots: ["topic"] }, { template: "Look up repair instructions or find a professional for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Get parts or tools needed to fix {topic}", defaultType: "task", slots: ["topic"] }, { template: "Complete the repair on {topic}", defaultType: "task", slots: ["topic"] }] }, "research-purchase": { category: "research-purchase", applicableTo: ["task"], steps: [{ template: "Define requirements and budget for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Research top options and read reviews for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Compare top 3 options for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Purchase {topic}", defaultType: "task", slots: ["topic"] }] }, "social-plan": { category: "social-plan", applicableTo: ["task"], steps: [{ template: "Reach out to {person} to suggest {topic}", defaultType: "task", slots: ["person", "topic"] }, { template: "Agree on date and location for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Make reservations or arrangements for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Confirm plans the day before {topic}", defaultType: "task", slots: ["topic"] }] }, "volunteer-community": { category: "volunteer-community", applicableTo: ["task"], steps: [{ template: "Research organizations and opportunities for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Contact coordinator and sign up for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Complete any required training for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Attend first {topic} volunteer session", defaultType: "task", slots: ["topic"] }] }, "decide-career": { category: "decide-career", applicableTo: ["decision"], steps: [{ template: "List pros and cons of each career option for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Talk to people currently in roles related to {topic}", defaultType: "task", slots: ["topic"] }, { template: "Evaluate financial impact of {topic} decision", defaultType: "task", slots: ["topic"] }, { template: "Make and record decision on {topic}", defaultType: "decision", slots: ["topic"] }] }, "decide-education": { category: "decide-education", applicableTo: ["decision"], steps: [{ template: "Research program options for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Compare curriculum, cost, and schedule for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Talk to alumni or students about {topic} programs", defaultType: "task", slots: ["topic"] }, { template: "Make and record decision on {topic}", defaultType: "decision", slots: ["topic"] }] }, "decide-financial": { category: "decide-financial", applicableTo: ["decision"], steps: [{ template: "Gather current financial data relevant to {topic}", defaultType: "task", slots: ["topic"] }, { template: "Research options and rates for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Calculate projected outcomes for each {topic} option", defaultType: "task", slots: ["topic"] }, { template: "Make and record decision on {topic}", defaultType: "decision", slots: ["topic"] }] }, "decide-health": { category: "decide-health", applicableTo: ["decision"], steps: [{ template: "Research medical options and evidence for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Consult with healthcare provider about {topic}", defaultType: "task", slots: ["topic"] }, { template: "Weigh risks and benefits of each {topic} option", defaultType: "task", slots: ["topic"] }, { template: "Make and record decision on {topic}", defaultType: "decision", slots: ["topic"] }] }, "decide-living": { category: "decide-living", applicableTo: ["decision"], steps: [{ template: "Define must-haves and deal-breakers for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Research neighborhoods and options for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Visit top candidates and compare for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Calculate total cost for each {topic} option", defaultType: "task", slots: ["topic"] }, { template: "Make and record decision on {topic}", defaultType: "decision", slots: ["topic"] }] }, "decide-priority": { category: "decide-priority", applicableTo: ["decision"], steps: [{ template: "List all competing priorities related to {topic}", defaultType: "task", slots: ["topic"] }, { template: "Define criteria for ranking {topic} priorities", defaultType: "task", slots: ["topic"] }, { template: "Rank options against criteria for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Make and record decision on {topic}", defaultType: "decision", slots: ["topic"] }] }, "decide-purchase": { category: "decide-purchase", applicableTo: ["decision"], steps: [{ template: "Define budget and requirements for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Research and shortlist options for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Compare price, quality, and reviews for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Make and record purchase decision on {topic}", defaultType: "decision", slots: ["topic"] }] }, "decide-relationship": { category: "decide-relationship", applicableTo: ["decision"], steps: [{ template: "Clarify what you want from {topic} situation", defaultType: "task", slots: ["topic"] }, { template: "Consider the other perspective on {topic}", defaultType: "task", slots: ["topic"] }, { template: "Identify possible actions and their consequences for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Make and record decision on {topic}", defaultType: "decision", slots: ["topic"] }] }, "decide-service": { category: "decide-service", applicableTo: ["decision"], steps: [{ template: "Define requirements for {topic} service", defaultType: "task", slots: ["topic"] }, { template: "Get quotes or proposals from providers for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Check reviews and references for {topic} providers", defaultType: "task", slots: ["topic"] }, { template: "Make and record decision on {topic} provider", defaultType: "decision", slots: ["topic"] }] }, "decide-technology": { category: "decide-technology", applicableTo: ["decision"], steps: [{ template: "Define technical requirements for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Research and compare solutions for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Test or trial top candidates for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Make and record decision on {topic}", defaultType: "decision", slots: ["topic"] }] } }, $ = ["decide on", "set up", "sign up for", "plan", "buy", "organize", "research", "decide", "choose", "find", "get", "make", "create", "fix", "schedule", "arrange", "prepare", "complete", "start", "learn", "update", "write", "send", "clean", "review", "cancel", "renew", "book", "order", "apply for", "sign up", "look into", "figure out", "work on", "take care of", "deal with", "follow up on"], U = ["about", "for", "with", "on", "to", "at", "in", "the", "a", "an", "my", "our"], j = [/\bnew\s+(\w[\w\s]{0,30}?)(?:\s+(?:for|from|at|in|on)\b|$)/i, /\ba\s+(\w[\w\s]{0,30}?)(?:\s+(?:for|from|at|in|on)\b|$)/i, /\bthe\s+(\w[\w\s]{0,30}?)(?:\s+(?:for|from|at|in|on)\b|$)/i];
function G(s) {
  const c = { topic: s }, a = P(s);
  for (const e of a) e.category === "PERSON" && !c.person && (c.person = e.text), e.category === "LOCATION" && !c.location && (c.location = e.text);
  let o = s.trim();
  for (const e of $) {
    const i = new RegExp(`^${e}\\b\\s*`, "i");
    if (i.test(o)) {
      o = o.replace(i, "");
      break;
    }
  }
  let p = true;
  for (; p; ) {
    p = false;
    for (const e of U) {
      const i = new RegExp(`^${e}\\b\\s*`, "i");
      if (i.test(o)) {
        o = o.replace(i, ""), p = true;
        break;
      }
    }
  }
  o = o.trim(), o.length > 0 && (c.topic = o);
  for (const e of j) {
    const i = s.match(e);
    if (i == null ? void 0 : i[1]) {
      c.item = i[1].trim();
      break;
    }
  }
  return c;
}
const H = 0.92, z = 500;
function V(s, c) {
  if (c.entries.length === 0) return null;
  let a = null, o = -1 / 0;
  for (const p of c.entries) {
    const e = A(s, p.inputCentroid);
    e > o && (o = e, a = p);
  }
  return a === null || o <= H ? null : (a.lastHitAt = Date.now(), { entry: a, similarity: o });
}
function q(s, c, a) {
  const o = Date.now(), p = { id: crypto.randomUUID(), inputCentroid: s, result: c, createdAt: o, lastHitAt: o }, e = [...a.entries, p];
  if (e.length > a.maxSize) {
    let i = 0, t = e[0].lastHitAt;
    for (let n = 1; n < e.length; n++) e[n].lastHitAt < t && (t = e[n].lastHitAt, i = n);
    e.splice(i, 1);
  }
  return { entries: e, maxSize: a.maxSize };
}
const B = 0.6;
let D = { entries: [], maxSize: z };
const W = [{ template: "Clarify what done looks like for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Identify the very next physical action for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Do the next action or schedule it", defaultType: "task", slots: [] }], Y = [{ template: "Research options for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Define criteria for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Compare top options for {topic}", defaultType: "task", slots: ["topic"] }, { template: "Make and record decision on {topic}", defaultType: "decision", slots: ["topic"] }];
function X(s, c) {
  let a = s;
  const o = { topic: c.topic, person: c.person, location: c.location, item: c.item, event: c.event };
  for (const [p, e] of Object.entries(o)) {
    const i = `{${p}}`;
    a.includes(i) && (e !== void 0 ? a = a.replace(i, e) : (a = a.replace(new RegExp(`\\s*\\b(?:to|for|with|from)\\s+\\{${p}\\}`, "g"), ""), a = a.replace(new RegExp(`\\{${p}\\}\\s*`, "g"), ""), a = a.replace(new RegExp(`\\s+\\{${p}\\}`, "g"), "")));
  }
  return a = a.replace(/\s{2,}/g, " ").trim(), a;
}
async function K(s, c, a, o) {
  if (o && o.length > 0) {
    const f = V(o, D);
    if (f) return console.debug(`[decomposition-cache] Cache hit (cosine=${f.similarity.toFixed(4)}), reusing cached decomposition`), f.entry.result;
  }
  const { category: p, confidence: e } = await a(s);
  let i, t = p;
  const n = F[p];
  n && e >= B && n.applicableTo.includes(c) ? i = n.steps : (t = `fallback-${c}`, i = c === "decision" ? Y : W);
  const d = G(s), r = i.map((f, u) => ({ text: X(f.template, d), suggestedType: f.defaultType, stepIndex: u })), l = { category: t, confidence: e, steps: r, originalText: s };
  return o && o.length > 0 && (D = q(o, l, D)), l;
}
function Z(s, c, a) {
  return new Promise((o, p) => {
    const e = crypto.randomUUID(), i = (a ?? "") + " " + c, t = (n) => {
      const d = n.data;
      d.id === e && (s.removeEventListener("message", t), d.type === "COMPLETENESS_RESULT" ? o({ isIncomplete: d.isIncomplete, confidence: d.confidence }) : d.type === "COMPLETENESS_ERROR" && p(new Error(d.error)));
    };
    s.addEventListener("message", t), s.postMessage({ type: "CHECK_COMPLETENESS", id: e, text: i });
  });
}
function J(s, c) {
  return new Promise((a, o) => {
    const p = crypto.randomUUID(), e = (i) => {
      const t = i.data;
      t.id === p && (s.removeEventListener("message", e), t.type === "MISSING_INFO_RESULT" ? a(t.results.map((n) => ({ category: n.category, isMissing: n.isMissing, confidence: n.confidence }))) : t.type === "MISSING_INFO_ERROR" && o(new Error(t.error)));
    };
    s.addEventListener("message", e), s.postMessage({ type: "CLASSIFY_MISSING_INFO", id: p, text: c });
  });
}
function Q(s, c) {
  return new Promise((a, o) => {
    const p = crypto.randomUUID(), e = (i) => {
      const t = i.data;
      t.id === p && (s.removeEventListener("message", e), t.type === "GTD_RESULT" ? a(t) : t.type === "GTD_ERROR" && o(new Error(t.error)));
    };
    s.addEventListener("message", e), s.postMessage({ type: "CLASSIFY_GTD", id: p, text: c });
  });
}
function M(s, c, a, o) {
  return new Promise((p, e) => {
    const i = crypto.randomUUID(), t = (n) => {
      const d = n.data;
      d.id === i && (s.removeEventListener("message", t), d.type === "CLASSIFY_RESULT" ? p({ scores: d.scores, vector: d.vector }) : d.type === "CLASSIFY_ERROR" && e(new Error(d.error)));
    };
    s.addEventListener("message", t), s.postMessage({ type: c, id: i, text: a, centroids: o });
  });
}
function ee(s, c, a) {
  return new Promise((o, p) => {
    const e = crypto.randomUUID(), i = (t) => {
      const n = t.data;
      n.id === e && (s.removeEventListener("message", i), n.type === "ONNX_RESULT" ? o({ scores: n.scores, vector: n.vector }) : n.type === "ONNX_ERROR" && p(new Error(n.error)));
    };
    s.addEventListener("message", i), s.postMessage({ type: "CLASSIFY_ONNX", id: e, text: c, ...a ? { binderId: a } : {} });
  });
}
function te(s, c) {
  return new Promise((a, o) => {
    const p = crypto.randomUUID(), e = (i) => {
      const t = i.data;
      t.id === p && (s.removeEventListener("message", e), t.type === "DECOMPOSE_RESULT" ? a({ scores: t.scores, vector: t.vector }) : t.type === "DECOMPOSE_ERROR" && o(new Error(t.error)));
    };
    s.addEventListener("message", e), s.postMessage({ type: "CLASSIFY_DECOMPOSE", id: p, text: c });
  });
}
function ae(s, c, a, o) {
  let p = null;
  return { tier: 2, name: "Compact Neural Models", canHandle(e) {
    if (e !== "classify-type" && e !== "route-section" && e !== "classify-gtd" && e !== "decompose" && e !== "check-completeness" && e !== "classify-missing-info" || !s()) return false;
    if (e === "classify-gtd" || e === "decompose" || e === "check-completeness" || e === "classify-missing-info") return true;
    if (e === "classify-type") {
      if (o()) return true;
      const t = c();
      return t !== null && Object.keys(t.centroids).length > 0;
    }
    if (e === "route-section") {
      const t = a();
      return t !== null && Object.keys(t.centroids).length > 0;
    }
    return false;
  }, async handle(e) {
    var _a, _b, _c, _d, _e, _f;
    const { task: i, features: t } = e, n = s();
    if (!n) return { tier: 2, confidence: 0, reasoning: "Embedding worker not available" };
    const d = (t.title ?? "") + " " + t.content;
    if (i === "classify-type") {
      const r = (_a = e.context.customFields) == null ? void 0 : _a.binderId;
      if (o()) {
        const { scores: b, vector: v } = await ee(n, d, r);
        p = v;
        const I = ["task", "fact", "event", "decision", "insight"];
        let E = "fact", S = 0, R = "fact", w = 0;
        for (const [x, C] of Object.entries(b)) I.includes(x) && (C > S ? (R = E, w = S, S = C, E = x) : C > w && (w = C, R = x));
        const O = S - w, _ = O < 0.15, L = { tier: 2, confidence: S, type: E, confidenceSpread: O, reasoning: `ONNX classifier: ${E} (p=${S.toFixed(3)}, spread=${O.toFixed(3)})` };
        return _ && (L.alternativeType = R), L;
      }
      const l = c();
      if (!l || Object.keys(l.centroids).length === 0) return { tier: 2, confidence: 0, reasoning: "No type centroids available" };
      const { scores: f, vector: u } = await M(n, "CLASSIFY_TYPE", d, l.centroids);
      p = u;
      let y = "fact", m = 0;
      const h = ["task", "fact", "event", "decision", "insight"];
      for (const [b, v] of Object.entries(f)) v > m && h.includes(b) && (m = v, y = b);
      const g = Object.values(f).sort((b, v) => v - b), T = g.length >= 2 ? (g[0] ?? 0) - (g[1] ?? 0) : 0;
      return { tier: 2, confidence: Math.min(0.95, m * 0.7 + T * 0.3), type: y, reasoning: `Embedding centroid: ${y} (similarity ${m.toFixed(3)}, separation ${T.toFixed(3)})` };
    }
    if (i === "route-section") {
      const r = a();
      if (!r || Object.keys(r.centroids).length === 0) return { tier: 2, confidence: 0, sectionItemId: null, reasoning: "No section centroids available" };
      const { scores: l, vector: f } = await M(n, "ROUTE_SECTION", d, r.centroids);
      p = f;
      let u = null, y = 0;
      for (const [T, k] of Object.entries(l)) k > y && (y = k, u = T);
      const m = Object.values(l).sort((T, k) => k - T), h = m.length >= 2 ? (m[0] ?? 0) - (m[1] ?? 0) : 0;
      return { tier: 2, confidence: Math.min(0.9, y * 0.6 + h * 0.4), sectionItemId: u, reasoning: `Section centroid: similarity ${y.toFixed(3)}, separation ${h.toFixed(3)}` };
    }
    if (i === "classify-gtd") {
      const r = await Q(n, d);
      p = r.vector;
      const l = {}, f = (m, h) => {
        if (!m) return;
        const g = Object.entries(m).sort((v, I) => I[1] - v[1]), [T, k] = g[0] ?? ["unknown", 0], b = N[h];
        return { label: T, confidence: k, isLowConfidence: k < b };
      };
      l.routing = f(r.routing, "gtd-routing"), l.actionability = f(r.actionability, "actionability"), l.project = f(r.project, "project-detection"), l.context = f(r.context, "context-tagging");
      const u = [l.routing, l.actionability, l.project, l.context].filter(Boolean).map((m) => m.confidence);
      return { tier: 2, confidence: u.length > 0 ? Math.min(...u) : 0, gtd: l, reasoning: `GTD classifiers: routing=${(_b = l.routing) == null ? void 0 : _b.label}(${(_c = l.routing) == null ? void 0 : _c.confidence.toFixed(2)}), actionability=${(_d = l.actionability) == null ? void 0 : _d.label}, project=${(_e = l.project) == null ? void 0 : _e.label}, context=${(_f = l.context) == null ? void 0 : _f.label}` };
    }
    if (i === "decompose") {
      const { scores: r, vector: l } = await te(n, d);
      p = l;
      let f = "", u = 0;
      for (const [T, k] of Object.entries(r)) k > u && (u = k, f = T);
      const y = t.atomType ?? "task", m = async (T) => ({ category: f, confidence: u }), h = l && l.length > 0 ? Array.from(l) : void 0, g = await K(d, y, m, h);
      return { tier: 2, confidence: u, decomposition: g.steps, reasoning: `Decomposition: ${g.category} (p=${u.toFixed(3)}, ${g.steps.length} steps)` };
    }
    if (i === "check-completeness") {
      const r = await Z(n, t.content, t.title);
      return { tier: 2, confidence: r.confidence, completeness: r, reasoning: `Completeness gate: ${r.isIncomplete ? "incomplete" : "complete"} (p=${r.confidence.toFixed(3)})` };
    }
    if (i === "classify-missing-info") {
      const r = await J(n, t.content), l = r.length > 0 ? r.reduce((u, y) => u + y.confidence, 0) / r.length : 0, f = r.filter((u) => u.isMissing).map((u) => u.category);
      return { tier: 2, confidence: l, missingInfo: r, reasoning: `Missing info: ${f.length > 0 ? f.join(", ") : "none detected"}` };
    }
    return { tier: 2, confidence: 0, reasoning: `Task ${i} not supported by Tier 2` };
  }, lastVector() {
    return p;
  } };
}
export {
  ae as createTier2Handler
};
