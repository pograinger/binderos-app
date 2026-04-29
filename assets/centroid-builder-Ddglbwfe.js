import { M as y, d as a } from "./index-DwiQ5yRy.js";
const p = "type-centroids", m = "section-centroids";
function w(t, s) {
  const e = new Array(t.length);
  for (let n = 0; n < t.length; n++) e[n] = (t[n] ?? 0) + (s[n] ?? 0);
  return e;
}
function h(t, s) {
  const e = new Array(t.length);
  for (let n = 0; n < t.length; n++) e[n] = (t[n] ?? 0) * s;
  return e;
}
function C(t) {
  let s = 0;
  for (let e = 0; e < t.length; e++) {
    const n = t[e] ?? 0;
    s += n * n;
  }
  return s = Math.sqrt(s), s === 0 ? t : h(t, 1 / s);
}
function E(t) {
  const s = t.filter((r) => r.embedding && r.embedding.length > 0);
  if (s.length === 0) return null;
  const e = /* @__PURE__ */ new Map();
  for (const r of s) {
    const o = e.get(r.chosenType) ?? [];
    o.push(r.embedding), e.set(r.chosenType, o);
  }
  const n = {}, l = {};
  let u = false;
  for (const [r, o] of e) {
    if (o.length < y) continue;
    const c = o[0].length;
    let i = new Array(c).fill(0);
    for (const g of o) i = w(i, g);
    const d = h(i, 1 / o.length);
    n[r] = C(d), l[r] = o.length, u = true;
  }
  return u ? { centroids: n, counts: l, builtAt: Date.now() } : null;
}
function T(t, s) {
  const e = /* @__PURE__ */ new Map();
  for (const [r, o] of t) {
    const f = s.get(r);
    if (!f) continue;
    const c = e.get(f) ?? [];
    c.push(o), e.set(f, c);
  }
  const n = {}, l = {};
  let u = false;
  for (const [r, o] of e) {
    if (o.length < y) continue;
    const c = o[0].length;
    let i = new Array(c).fill(0);
    for (const g of o) i = w(i, g);
    const d = h(i, 1 / o.length);
    n[r] = C(d), l[r] = o.length, u = true;
  }
  return u ? { centroids: n, counts: l, builtAt: Date.now() } : null;
}
async function v(t) {
  await a.config.put({ key: p, value: t });
}
async function A() {
  const t = await a.config.get(p);
  return t ? t.value : null;
}
async function I(t) {
  await a.config.put({ key: m, value: t });
}
async function S() {
  const t = await a.config.get(m);
  return t ? t.value : null;
}
export {
  T as buildSectionCentroids,
  E as buildTypeCentroids,
  S as loadSectionCentroids,
  A as loadTypeCentroids,
  I as saveSectionCentroids,
  v as saveTypeCentroids
};
