import { v as s } from "./index-DwiQ5yRy.js";
const E = s.vectorSchema.task, S = s.vectorSchema.person, _ = s.vectorSchema.calendar, N = s.vectorSchema.cognitive, I = s.vectorSchema.composite, O = s.vectorSchema.enrichment, M = s.vectorSchema.temporal, m = s.vectorSchema.social, i = s.vectorSchema.portfolio, T = s.vectorSchema.content, A = E.length, r = S.length, C = _.length, h = N.length, R = I.length, l = O.length, D = M.length, d = m.length, g = i.length, u = T.length, H = A + r + C + h + R + l + D + d + g + u, F = 0, v = A, L = v + r, P = L + C, V = P + h, p = V + R, f = p + l, b = f + D, B = b + d, k = B + g, y = [{ name: "task", dims: E, base: F }, { name: "person", dims: S, base: v }, { name: "calendar", dims: _, base: L }, { name: "cognitive", dims: N, base: P }, { name: "composite", dims: I, base: V }, { name: "enrichment", dims: O, base: p }, { name: "temporal", dims: M, base: f }, { name: "social", dims: m, base: b }, { name: "portfolio", dims: i, base: B }, { name: "content", dims: T, base: k }];
y.flatMap((e) => [...e.dims]);
function K(e, a) {
  if (e.length === 0 || a.length === 0) return;
  const c = new Set(e), n = a.filter((t) => c.has(t.sourceEntityId) || c.has(t.targetEntityId));
  if (n.length !== 0) return n.reduce((t, o) => o.confidence > t.confidence ? o : t, n[0]);
}
export {
  C,
  l as E,
  H as F,
  r as P,
  d as S,
  A as T,
  E as a,
  _ as b,
  S as c,
  v as d,
  L as e,
  h as f,
  P as g,
  R as h,
  V as i,
  p as j,
  D as k,
  f as l,
  b as m,
  g as n,
  B as o,
  K as p,
  u as q,
  k as r,
  F as s,
  I as t,
  T as u,
  N as v,
  i as w,
  m as x
};
