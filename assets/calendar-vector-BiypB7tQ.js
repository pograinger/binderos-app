import { p as R, C as c, b as e } from "./types-B4_dTEw3.js";
import "./index-DwiQ5yRy.js";
const T = e.indexOf("start_tod_norm"), m = e.indexOf("dow_mon"), p = e.indexOf("dow_tue"), u = e.indexOf("dow_wed"), h = e.indexOf("dow_thu"), l = e.indexOf("dow_fri"), D = e.indexOf("dow_sat"), N = e.indexOf("dow_sun");
e.indexOf("dur_lt30");
e.indexOf("dur_30_60");
e.indexOf("dur_60_120");
e.indexOf("dur_gt120");
const S = e.indexOf("energy_low"), g = e.indexOf("energy_medium"), M = e.indexOf("energy_high"), A = e.indexOf("has_deadline"), w = e.indexOf("days_to_event_norm"), Y = e.indexOf("time_pressure_score"), H = e.indexOf("overrun_risk"), L = e.indexOf("slack_before_none");
e.indexOf("slack_before_short");
e.indexOf("slack_before_medium");
e.indexOf("slack_before_long");
const P = e.indexOf("entity_is_high_priority"), W = e.indexOf("entity_reliability"), C = e.indexOf("mobility_required"), v = e.indexOf("is_recurring"), G = e.indexOf("prep_none");
e.indexOf("prep_short");
e.indexOf("prep_medium");
e.indexOf("prep_long");
const k = e.indexOf("has_person_entity"), U = e.indexOf("has_org_entity"), b = e.indexOf("has_loc_entity"), V = /* @__PURE__ */ new Set(["spouse", "reports-to", "parent", "child"]);
function B(o) {
  return 1 / (1 + Math.exp(0.3 * (o - 7)));
}
const F = [N, m, p, u, h, l, D];
function q(o, _, K, d) {
  const y = Date.now(), n = new Float32Array(c);
  if (o.eventDate) {
    const t = o.eventDate, s = new Date(t), O = s.getHours(), i = s.getMinutes();
    n[T] = (O * 60 + i) / 1440;
    const I = s.getDay(), f = F[I];
    f !== void 0 && (n[f] = 1), n[A] = 1;
    const E = (t - y) / 864e5;
    n[w] = Math.max(0, Math.min(E / 30, 1)), n[Y] = B(Math.max(0, E));
  }
  if (o.energy === "Quick" ? n[S] = 1 : o.energy === "Medium" ? n[g] = 1 : o.energy === "Deep" && (n[M] = 1), n[H] = 0, n[L] = 1, _ && d.length > 0) {
    const t = (_.entityMentions ?? []).filter((i) => i.entityId).map((i) => i.entityId), s = new Set(t), O = d.some((i) => (s.has(i.sourceEntityId) || s.has(i.targetEntityId)) && V.has(i.relationshipType));
    n[P] = O ? 1 : 0;
  }
  const a = ((_ == null ? void 0 : _.entityMentions) ?? []).filter((t) => t.entityId).map((t) => t.entityId), x = R(a, d);
  n[W] = (x == null ? void 0 : x.confidence) ?? 0, n[C] = 0, n[v] = 0, n[G] = 1;
  const r = (_ == null ? void 0 : _.entityMentions) ?? [];
  return n[k] = r.some((t) => t.entityType === "PER") ? 1 : 0, n[U] = r.some((t) => t.entityType === "ORG") ? 1 : 0, n[b] = r.some((t) => t.entityType === "LOC") ? 1 : 0, n.length !== c && console.error(`[calendar-vector] Dimension mismatch: got ${n.length}, expected ${c}`), n;
}
export {
  q as computeCalendarVector
};
