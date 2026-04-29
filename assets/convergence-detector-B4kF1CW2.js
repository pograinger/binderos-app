const g = ["fiedler", "entropy", "inferenceDepth", "clusteringCoeff", "spectralGap", "centroidCoverage"];
function C(e, r = 5e-3, t = 10) {
  if (e.length < t) return false;
  const n = e.slice(-t);
  for (let i = 1; i < n.length; i++) if (Math.abs(n[i] - n[i - 1]) >= r) return false;
  return true;
}
function E(e) {
  const r = {};
  let t = 0;
  for (const i of g) {
    const o = e.map((l) => l[i]), c = C(o);
    r[i] = c, c && t++;
  }
  const n = g.length > 0 ? t / g.length : 0;
  return { perMetric: r, ratio: n, allConverged: t === g.length };
}
function D(e, r) {
  const t = [], n = [], i = [];
  for (const o of g) {
    const c = (e == null ? void 0 : e.perMetric[o]) ?? false, l = r.perMetric[o];
    !c && l ? t.push(o) : c && !l ? n.push(o) : i.push(o);
  }
  return { newlyConverged: t, newlyDiverged: n, stable: i };
}
const x = ["percolation", "self-feeding-crossover", "cascade-depth-emergence", "clustering-nucleation", "entropy-regime-change", "bridging-event"];
function m(e) {
  const r = [];
  for (let t = 1; t < e.length; t++) r.push(Math.abs(e[t] - e[t - 1]));
  return r;
}
function p(e) {
  if (e.length === 0) return 0;
  let r = 0;
  for (const t of e) r += t;
  return r / e.length;
}
function v(e, r) {
  if (e.length < 2) return 0;
  let t = 0;
  for (const n of e) {
    const i = n - r;
    t += i * i;
  }
  return Math.sqrt(t / e.length);
}
function y(e, r) {
  if (r || e.length === 0) return null;
  const t = e[e.length - 1];
  return t.fiedler <= 0 || !e.slice(0, -1).some((i) => i.fiedler === 0) ? null : { type: "percolation", timestamp: Date.now(), metricValue: t.fiedler, threshold: 0, evidence: `Fiedler eigenvalue crossed 0\u2192${t.fiedler.toFixed(4)}: graph became connected` };
}
function N(e, r) {
  if (r || e.length === 0) return null;
  const t = e[e.length - 1];
  if (t.inferredAssertionCount === void 0 || t.directAssertionCount === void 0 || t.directAssertionCount === 0) return null;
  const n = t.inferredAssertionCount / t.directAssertionCount;
  return n <= 1 ? null : { type: "self-feeding-crossover", timestamp: Date.now(), metricValue: n, threshold: 1, evidence: `Inferred/direct ratio=${n.toFixed(3)} exceeded 1.0 (inferred=${t.inferredAssertionCount}, direct=${t.directAssertionCount})` };
}
function S(e, r) {
  if (r || e.length === 0) return null;
  const t = e[e.length - 1];
  return t.maxInferenceDepth === void 0 || t.maxInferenceDepth < 3 ? null : { type: "cascade-depth-emergence", timestamp: Date.now(), metricValue: t.maxInferenceDepth, threshold: 3, evidence: `Max inference chain depth=${t.maxInferenceDepth} reached critical threshold of 3` };
}
function $(e, r) {
  if (r || e.length < 5) return null;
  const t = e.map((d) => d.clusteringCoeff), n = m(t), i = p(n), o = v(n, i);
  if (o < 1e-9) return null;
  const c = n[n.length - 1], l = i + 3 * o;
  return c <= l ? null : { type: "clustering-nucleation", timestamp: Date.now(), metricValue: c, threshold: l, evidence: `Clustering coefficient derivative=${c.toFixed(4)} exceeded spike threshold=${l.toFixed(4)} (mu=${i.toFixed(4)}, sigma=${o.toFixed(4)})` };
}
function b(e, r) {
  if (r || e.length < 8) return null;
  const t = e.map((u) => u.entropy), n = m(t), i = p(n);
  if (i <= 0) return null;
  const o = 2 * i, c = 0.5 * i, l = 3;
  let d = -1;
  for (let u = 0; u <= n.length - l; u++) {
    let a = 0;
    for (let f = u; f < n.length && n[f] > o; f++) a++;
    if (a >= l) {
      d = u + a;
      break;
    }
  }
  if (d === -1) return null;
  let s = -1;
  for (let u = d; u <= n.length - l; u++) {
    let a = 0;
    for (let f = u; f < n.length && n[f] < c; f++) a++;
    if (a >= l) {
      s = u;
      break;
    }
  }
  if (s === -1) return null;
  const h = e[e.length - 1].entropy;
  return { type: "entropy-regime-change", timestamp: Date.now(), metricValue: h, threshold: o, evidence: `Entropy regime shift detected: elevated phase (dH/dt>2*\u03BC) at index ${d - l} followed by reduced phase (dH/dt<0.5*\u03BC) at index ${s}` };
}
function F(e, r) {
  if (r || e.length < 5) return null;
  const t = e.map((h) => h.fiedler), n = m(t), i = p(n), o = v(n, i);
  if (o < 1e-9) return null;
  const c = n[n.length - 1], l = i + 3 * o;
  if (c <= l) return null;
  const d = e.length, s = e[d - 1].fiedler - e[d - 2].fiedler;
  return s <= 0.1 ? null : { type: "bridging-event", timestamp: Date.now(), metricValue: c, threshold: l, evidence: `Fiedler derivative=${c.toFixed(4)} exceeded spike threshold=${l.toFixed(4)}, absolute increase=${s.toFixed(4)}>0.1` };
}
export {
  x as ALL_TRANSITION_TYPES,
  E as computeConvergenceState,
  F as detectBridgingEvent,
  S as detectCascadeDepthEmergence,
  $ as detectClusteringNucleation,
  C as detectConvergence,
  D as detectConvergenceTransitions,
  b as detectEntropyRegimeChange,
  y as detectPercolationTransition,
  N as detectSelfFeedingCrossover,
  m as finiteDifferences,
  p as seriesMean,
  v as seriesStddev
};
