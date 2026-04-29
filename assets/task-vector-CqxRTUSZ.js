import { p as x, T as c, a as n } from "./types-B4_dTEw3.js";
import "./index-DwiQ5yRy.js";
const l = n.indexOf("age_norm"), d = n.indexOf("staleness_norm"), p = n.indexOf("has_deadline"), T = n.indexOf("days_to_deadline_norm"), u = n.indexOf("status_open"), S = n.indexOf("status_done"), N = n.indexOf("status_dropped"), h = n.indexOf("has_project"), y = n.indexOf("is_waiting_for"), R = n.indexOf("ctx_home"), g = n.indexOf("ctx_office"), D = n.indexOf("ctx_phone"), I = n.indexOf("ctx_computer"), M = n.indexOf("ctx_errands"), m = n.indexOf("ctx_anywhere"), A = n.indexOf("energy_low"), P = n.indexOf("energy_medium"), C = n.indexOf("energy_high"), w = n.indexOf("enrichment_depth_norm"), H = n.indexOf("has_person_dep"), Y = n.indexOf("time_pressure_score"), k = n.indexOf("prev_staleness_score"), L = n.indexOf("prev_energy_fit"), G = n.indexOf("entity_reliability");
n.indexOf("entity_resp_fast");
n.indexOf("entity_resp_slow");
const U = n.indexOf("entity_resp_unknown");
function v(t) {
  return 1 / (1 + Math.exp(0.3 * (t - 7)));
}
function V(t, _, f, a) {
  var _a, _b, _c;
  const o = Date.now(), e = new Float32Array(c);
  if (e[l] = Math.min((o - t.created_at) / (365 * 864e5), 1), e[d] = Math.min((o - t.updated_at) / (90 * 864e5), 1), e[p] = t.dueDate ? 1 : 0, t.dueDate) {
    const s = (t.dueDate - o) / 864e5;
    e[T] = Math.max(0, Math.min(s / 30, 1));
  }
  t.status === "open" || t.status === "in-progress" || t.status === "waiting" ? e[u] = 1 : t.status === "done" ? e[S] = 1 : (t.status === "cancelled" || t.status === "archived") && (e[N] = 1), e[h] = t.links.some((s) => s.relationshipType === "belongs-to") ? 1 : 0, e[y] = t.status === "waiting" ? 1 : 0;
  const i = ((_a = t.context) == null ? void 0 : _a.toLowerCase()) ?? null;
  if (i === "@home" || i === "home" ? e[R] = 1 : i === "@office" || i === "office" || i === "@work" || i === "work" ? e[g] = 1 : i === "@phone" || i === "phone" ? e[D] = 1 : i === "@computer" || i === "computer" ? e[I] = 1 : i === "@errands" || i === "errands" ? e[M] = 1 : e[m] = 1, t.energy === "Quick" ? e[A] = 1 : t.energy === "Medium" ? e[P] = 1 : t.energy === "Deep" && (e[C] = 1), e[w] = Math.min((((_b = _ == null ? void 0 : _.enrichment) == null ? void 0 : _b.length) ?? 0) / 5, 1), e[H] = f.some((s) => s.type === "PER") ? 1 : 0, t.dueDate) {
    const s = (t.dueDate - o) / 864e5;
    e[Y] = v(Math.max(0, s));
  }
  e[k] = e[d];
  const r = (_c = _ == null ? void 0 : _.cognitiveSignals) == null ? void 0 : _c.find((s) => s.modelId === "energy-level");
  e[L] = r ? r.confidence : 0.5;
  const E = ((_ == null ? void 0 : _.entityMentions) ?? []).filter((s) => s.entityId).map((s) => s.entityId), O = x(E, a);
  return e[G] = (O == null ? void 0 : O.confidence) ?? 0, e[U] = 1, e.length !== c && console.error(`[task-vector] Dimension mismatch: got ${e.length}, expected ${c}`), e;
}
export {
  V as computeTaskVector
};
