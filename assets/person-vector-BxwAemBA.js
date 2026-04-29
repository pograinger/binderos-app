import { P as s, c as e } from "./types-B4_dTEw3.js";
import "./index-DwiQ5yRy.js";
const l = e.indexOf("rel_spouse"), d = e.indexOf("rel_parent"), f = e.indexOf("rel_child"), R = e.indexOf("rel_colleague"), a = e.indexOf("rel_reports_to"), m = e.indexOf("rel_healthcare"), N = e.indexOf("rel_friend"), x = e.indexOf("rel_org_member"), E = e.indexOf("rel_unknown"), L = e.indexOf("mention_count_norm"), S = e.indexOf("recency_norm"), h = e.indexOf("days_since_seen_norm"), u = e.indexOf("has_user_correction"), p = e.indexOf("confidence_norm"), C = e.indexOf("collab_low"), M = e.indexOf("collab_medium"), A = e.indexOf("collab_high"), I = e.indexOf("reliability_score"), T = e.indexOf("alias_count_norm"), g = e.indexOf("resp_fast"), P = e.indexOf("resp_normal"), D = e.indexOf("resp_slow"), U = e.indexOf("resp_unknown"), b = { spouse: l, parent: d, child: f, colleague: R, "reports-to": a, "healthcare-provider": m, friend: N, "org-member": x };
function B(t, o) {
  const i = Date.now(), n = new Float32Array(s);
  if (o.length === 0) n[E] = 1;
  else {
    const c = o.reduce((r, O) => O.confidence > r.confidence ? O : r), _ = b[c.relationshipType];
    _ !== void 0 ? n[_] = 1 : n[E] = 1;
  }
  return n[L] = Math.min(t.mentionCount / 50, 1), n[S] = Math.max(0, 1 - (i - t.lastSeen) / (30 * 864e5)), n[h] = Math.min((i - t.lastSeen) / (90 * 864e5), 1), n[u] = o.some((c) => c.sourceAttribution === "user-correction") ? 1 : 0, n[p] = o.length > 0 ? Math.max(...o.map((c) => c.confidence)) : 0, t.mentionCount < 5 ? n[C] = 1 : t.mentionCount <= 20 ? n[M] = 1 : n[A] = 1, o.length > 0 && (n[I] = o.reduce((c, _) => c + _.confidence, 0) / o.length), n[T] = Math.min(t.aliases.length / 5, 1), n[g] = 0, n[P] = 0, n[D] = 0, n[U] = 1, n.length !== s && console.error(`[person-vector] Dimension mismatch: got ${n.length}, expected ${s}`), n;
}
export {
  B as computePersonVector
};
