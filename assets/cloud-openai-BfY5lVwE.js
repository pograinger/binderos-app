var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { t as Sr, w as xr, x as hs, z as Ar, A as vr } from "./index-DwiQ5yRy.js";
function S(n, e, t, s, r) {
  if (typeof e == "function" ? n !== e || true : !e.has(n)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return e.set(n, t), t;
}
function o(n, e, t, s) {
  if (t === "a" && !s) throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? n !== e || !s : !e.has(n)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? s : t === "a" ? s.call(n) : s ? s.value : e.get(n);
}
let Ds = function() {
  const { crypto: n } = globalThis;
  if (n == null ? void 0 : n.randomUUID) return Ds = n.randomUUID.bind(n), n.randomUUID();
  const e = new Uint8Array(1), t = n ? () => n.getRandomValues(e)[0] : () => Math.random() * 255 & 255;
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (s) => (+s ^ t() & 15 >> +s / 4).toString(16));
};
function Ct(n) {
  return typeof n == "object" && n !== null && ("name" in n && n.name === "AbortError" || "message" in n && String(n.message).includes("FetchRequestCanceledException"));
}
const Rt = (n) => {
  if (n instanceof Error) return n;
  if (typeof n == "object" && n !== null) {
    try {
      if (Object.prototype.toString.call(n) === "[object Error]") {
        const e = new Error(n.message, n.cause ? { cause: n.cause } : {});
        return n.stack && (e.stack = n.stack), n.cause && !e.cause && (e.cause = n.cause), n.name && (e.name = n.name), e;
      }
    } catch {
    }
    try {
      return new Error(JSON.stringify(n));
    } catch {
    }
  }
  return new Error(n);
};
class y extends Error {
}
class D extends y {
  constructor(e, t, s, r) {
    super(`${D.makeMessage(e, t, s)}`), this.status = e, this.headers = r, this.requestID = r == null ? void 0 : r.get("x-request-id"), this.error = t;
    const i = t;
    this.code = i == null ? void 0 : i.code, this.param = i == null ? void 0 : i.param, this.type = i == null ? void 0 : i.type;
  }
  static makeMessage(e, t, s) {
    const r = (t == null ? void 0 : t.message) ? typeof t.message == "string" ? t.message : JSON.stringify(t.message) : t ? JSON.stringify(t) : s;
    return e && r ? `${e} ${r}` : e ? `${e} status code (no body)` : r || "(no status code or body)";
  }
  static generate(e, t, s, r) {
    if (!e || !r) return new it({ message: s, cause: Rt(t) });
    const i = t == null ? void 0 : t.error;
    return e === 400 ? new Us(e, i, s, r) : e === 401 ? new Ws(e, i, s, r) : e === 403 ? new js(e, i, s, r) : e === 404 ? new qs(e, i, s, r) : e === 409 ? new Hs(e, i, s, r) : e === 422 ? new Js(e, i, s, r) : e === 429 ? new Xs(e, i, s, r) : e >= 500 ? new Ks(e, i, s, r) : new D(e, i, s, r);
  }
}
class K extends D {
  constructor({ message: e } = {}) {
    super(void 0, void 0, e || "Request was aborted.", void 0);
  }
}
class it extends D {
  constructor({ message: e, cause: t }) {
    super(void 0, void 0, e || "Connection error.", void 0), t && (this.cause = t);
  }
}
class Dt extends it {
  constructor({ message: e } = {}) {
    super({ message: e ?? "Request timed out." });
  }
}
class Us extends D {
}
class Ws extends D {
}
class js extends D {
}
class qs extends D {
}
class Hs extends D {
}
class Js extends D {
}
class Xs extends D {
}
class Ks extends D {
}
class Vs extends y {
  constructor() {
    super("Could not parse response content as the length limit was reached");
  }
}
class zs extends y {
  constructor() {
    super("Could not parse response content as the request was rejected by the content filter");
  }
}
class ge extends Error {
  constructor(e) {
    super(e);
  }
}
const Cr = /^[a-z][a-z0-9+.-]*:/i, Rr = (n) => Cr.test(n);
let j = (n) => (j = Array.isArray, j(n)), ds = j;
function Qs(n) {
  return typeof n != "object" ? {} : n ?? {};
}
function $r(n) {
  if (!n) return true;
  for (const e in n) return false;
  return true;
}
function Ir(n, e) {
  return Object.prototype.hasOwnProperty.call(n, e);
}
function gt(n) {
  return n != null && typeof n == "object" && !Array.isArray(n);
}
const kr = (n, e) => {
  if (typeof e != "number" || !Number.isInteger(e)) throw new y(`${n} must be an integer`);
  if (e < 0) throw new y(`${n} must be a positive integer`);
  return e;
}, Er = (n) => {
  try {
    return JSON.parse(n);
  } catch {
    return;
  }
}, Pe = (n) => new Promise((e) => setTimeout(e, n)), ce = "6.27.0", Or = () => typeof window < "u" && typeof window.document < "u" && typeof navigator < "u";
function Pr() {
  return typeof Deno < "u" && Deno.build != null ? "deno" : typeof EdgeRuntime < "u" ? "edge" : Object.prototype.toString.call(typeof globalThis.process < "u" ? globalThis.process : 0) === "[object process]" ? "node" : "unknown";
}
const Tr = () => {
  var _a;
  const n = Pr();
  if (n === "deno") return { "X-Stainless-Lang": "js", "X-Stainless-Package-Version": ce, "X-Stainless-OS": ps(Deno.build.os), "X-Stainless-Arch": fs(Deno.build.arch), "X-Stainless-Runtime": "deno", "X-Stainless-Runtime-Version": typeof Deno.version == "string" ? Deno.version : ((_a = Deno.version) == null ? void 0 : _a.deno) ?? "unknown" };
  if (typeof EdgeRuntime < "u") return { "X-Stainless-Lang": "js", "X-Stainless-Package-Version": ce, "X-Stainless-OS": "Unknown", "X-Stainless-Arch": `other:${EdgeRuntime}`, "X-Stainless-Runtime": "edge", "X-Stainless-Runtime-Version": globalThis.process.version };
  if (n === "node") return { "X-Stainless-Lang": "js", "X-Stainless-Package-Version": ce, "X-Stainless-OS": ps(globalThis.process.platform ?? "unknown"), "X-Stainless-Arch": fs(globalThis.process.arch ?? "unknown"), "X-Stainless-Runtime": "node", "X-Stainless-Runtime-Version": globalThis.process.version ?? "unknown" };
  const e = Nr();
  return e ? { "X-Stainless-Lang": "js", "X-Stainless-Package-Version": ce, "X-Stainless-OS": "Unknown", "X-Stainless-Arch": "unknown", "X-Stainless-Runtime": `browser:${e.browser}`, "X-Stainless-Runtime-Version": e.version } : { "X-Stainless-Lang": "js", "X-Stainless-Package-Version": ce, "X-Stainless-OS": "Unknown", "X-Stainless-Arch": "unknown", "X-Stainless-Runtime": "unknown", "X-Stainless-Runtime-Version": "unknown" };
};
function Nr() {
  if (typeof navigator > "u" || !navigator) return null;
  const n = [{ key: "edge", pattern: /Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ }, { key: "ie", pattern: /MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ }, { key: "ie", pattern: /Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/ }, { key: "chrome", pattern: /Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ }, { key: "firefox", pattern: /Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ }, { key: "safari", pattern: /(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/ }];
  for (const { key: e, pattern: t } of n) {
    const s = t.exec(navigator.userAgent);
    if (s) {
      const r = s[1] || 0, i = s[2] || 0, a = s[3] || 0;
      return { browser: e, version: `${r}.${i}.${a}` };
    }
  }
  return null;
}
const fs = (n) => n === "x32" ? "x32" : n === "x86_64" || n === "x64" ? "x64" : n === "arm" ? "arm" : n === "aarch64" || n === "arm64" ? "arm64" : n ? `other:${n}` : "unknown", ps = (n) => (n = n.toLowerCase(), n.includes("ios") ? "iOS" : n === "android" ? "Android" : n === "darwin" ? "MacOS" : n === "win32" ? "Windows" : n === "freebsd" ? "FreeBSD" : n === "openbsd" ? "OpenBSD" : n === "linux" ? "Linux" : n ? `Other:${n}` : "Unknown");
let ms;
const Mr = () => ms ?? (ms = Tr());
function Lr() {
  if (typeof fetch < "u") return fetch;
  throw new Error("`fetch` is not defined as a global; Either pass `fetch` to the client, `new OpenAI({ fetch })` or polyfill the global, `globalThis.fetch = fetch`");
}
function Gs(...n) {
  const e = globalThis.ReadableStream;
  if (typeof e > "u") throw new Error("`ReadableStream` is not defined as a global; You will need to polyfill it, `globalThis.ReadableStream = ReadableStream`");
  return new e(...n);
}
function Ys(n) {
  let e = Symbol.asyncIterator in n ? n[Symbol.asyncIterator]() : n[Symbol.iterator]();
  return Gs({ start() {
  }, async pull(t) {
    const { done: s, value: r } = await e.next();
    s ? t.close() : t.enqueue(r);
  }, async cancel() {
    var _a;
    await ((_a = e.return) == null ? void 0 : _a.call(e));
  } });
}
function Zs(n) {
  if (n[Symbol.asyncIterator]) return n;
  const e = n.getReader();
  return { async next() {
    try {
      const t = await e.read();
      return (t == null ? void 0 : t.done) && e.releaseLock(), t;
    } catch (t) {
      throw e.releaseLock(), t;
    }
  }, async return() {
    const t = e.cancel();
    return e.releaseLock(), await t, { done: true, value: void 0 };
  }, [Symbol.asyncIterator]() {
    return this;
  } };
}
async function Fr(n) {
  var _a, _b;
  if (n === null || typeof n != "object") return;
  if (n[Symbol.asyncIterator]) {
    await ((_b = (_a = n[Symbol.asyncIterator]()).return) == null ? void 0 : _b.call(_a));
    return;
  }
  const e = n.getReader(), t = e.cancel();
  e.releaseLock(), await t;
}
const Br = ({ headers: n, body: e }) => ({ bodyHeaders: { "content-type": "application/json" }, body: JSON.stringify(e) }), en = "RFC3986", tn = (n) => String(n), _s = { RFC1738: (n) => String(n).replace(/%20/g, "+"), RFC3986: tn }, Dr = "RFC1738";
let $t = (n, e) => ($t = Object.hasOwn ?? Function.prototype.call.bind(Object.prototype.hasOwnProperty), $t(n, e));
const z = (() => {
  const n = [];
  for (let e = 0; e < 256; ++e) n.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return n;
})(), wt = 1024, Ur = (n, e, t, s, r) => {
  if (n.length === 0) return n;
  let i = n;
  if (typeof n == "symbol" ? i = Symbol.prototype.toString.call(n) : typeof n != "string" && (i = String(n)), t === "iso-8859-1") return escape(i).replace(/%u[0-9a-f]{4}/gi, function(l) {
    return "%26%23" + parseInt(l.slice(2), 16) + "%3B";
  });
  let a = "";
  for (let l = 0; l < i.length; l += wt) {
    const h = i.length >= wt ? i.slice(l, l + wt) : i, f = [];
    for (let m = 0; m < h.length; ++m) {
      let d = h.charCodeAt(m);
      if (d === 45 || d === 46 || d === 95 || d === 126 || d >= 48 && d <= 57 || d >= 65 && d <= 90 || d >= 97 && d <= 122 || r === Dr && (d === 40 || d === 41)) {
        f[f.length] = h.charAt(m);
        continue;
      }
      if (d < 128) {
        f[f.length] = z[d];
        continue;
      }
      if (d < 2048) {
        f[f.length] = z[192 | d >> 6] + z[128 | d & 63];
        continue;
      }
      if (d < 55296 || d >= 57344) {
        f[f.length] = z[224 | d >> 12] + z[128 | d >> 6 & 63] + z[128 | d & 63];
        continue;
      }
      m += 1, d = 65536 + ((d & 1023) << 10 | h.charCodeAt(m) & 1023), f[f.length] = z[240 | d >> 18] + z[128 | d >> 12 & 63] + z[128 | d >> 6 & 63] + z[128 | d & 63];
    }
    a += f.join("");
  }
  return a;
};
function Wr(n) {
  return !n || typeof n != "object" ? false : !!(n.constructor && n.constructor.isBuffer && n.constructor.isBuffer(n));
}
function gs(n, e) {
  if (j(n)) {
    const t = [];
    for (let s = 0; s < n.length; s += 1) t.push(e(n[s]));
    return t;
  }
  return e(n);
}
const sn = { brackets(n) {
  return String(n) + "[]";
}, comma: "comma", indices(n, e) {
  return String(n) + "[" + e + "]";
}, repeat(n) {
  return String(n);
} }, nn = function(n, e) {
  Array.prototype.push.apply(n, j(e) ? e : [e]);
};
let ws;
const P = { addQueryPrefix: false, allowDots: false, allowEmptyArrays: false, arrayFormat: "indices", charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encodeDotInKeys: false, encoder: Ur, encodeValuesOnly: false, format: en, formatter: tn, indices: false, serializeDate(n) {
  return (ws ?? (ws = Function.prototype.call.bind(Date.prototype.toISOString)))(n);
}, skipNulls: false, strictNullHandling: false };
function jr(n) {
  return typeof n == "string" || typeof n == "number" || typeof n == "boolean" || typeof n == "symbol" || typeof n == "bigint";
}
const yt = {};
function rn(n, e, t, s, r, i, a, l, h, f, m, d, g, u, A, b, I, v) {
  let w = n, T = v, C = 0, X = false;
  for (; (T = T.get(yt)) !== void 0 && !X; ) {
    const k = T.get(n);
    if (C += 1, typeof k < "u") {
      if (k === C) throw new RangeError("Cyclic object value");
      X = true;
    }
    typeof T.get(yt) > "u" && (C = 0);
  }
  if (typeof f == "function" ? w = f(e, w) : w instanceof Date ? w = g == null ? void 0 : g(w) : t === "comma" && j(w) && (w = gs(w, function(k) {
    return k instanceof Date ? g == null ? void 0 : g(k) : k;
  })), w === null) {
    if (i) return h && !b ? h(e, P.encoder, I, "key", u) : e;
    w = "";
  }
  if (jr(w) || Wr(w)) {
    if (h) {
      const k = b ? e : h(e, P.encoder, I, "key", u);
      return [(A == null ? void 0 : A(k)) + "=" + (A == null ? void 0 : A(h(w, P.encoder, I, "value", u)))];
    }
    return [(A == null ? void 0 : A(e)) + "=" + (A == null ? void 0 : A(String(w)))];
  }
  const U = [];
  if (typeof w > "u") return U;
  let $;
  if (t === "comma" && j(w)) b && h && (w = gs(w, h)), $ = [{ value: w.length > 0 ? w.join(",") || null : void 0 }];
  else if (j(f)) $ = f;
  else {
    const k = Object.keys(w);
    $ = m ? k.sort(m) : k;
  }
  const L = l ? String(e).replace(/\./g, "%2E") : String(e), N = s && j(w) && w.length === 1 ? L + "[]" : L;
  if (r && j(w) && w.length === 0) return N + "[]";
  for (let k = 0; k < $.length; ++k) {
    const E = $[k], cs = typeof E == "object" && typeof E.value < "u" ? E.value : w[E];
    if (a && cs === null) continue;
    const _t = d && l ? E.replace(/\./g, "%2E") : E, br = j(w) ? typeof t == "function" ? t(N, _t) : N : N + (d ? "." + _t : "[" + _t + "]");
    v.set(n, C);
    const us = /* @__PURE__ */ new WeakMap();
    us.set(yt, v), nn(U, rn(cs, br, t, s, r, i, a, l, t === "comma" && b && j(w) ? null : h, f, m, d, g, u, A, b, I, us));
  }
  return U;
}
function qr(n = P) {
  if (typeof n.allowEmptyArrays < "u" && typeof n.allowEmptyArrays != "boolean") throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof n.encodeDotInKeys < "u" && typeof n.encodeDotInKeys != "boolean") throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
  if (n.encoder !== null && typeof n.encoder < "u" && typeof n.encoder != "function") throw new TypeError("Encoder has to be a function.");
  const e = n.charset || P.charset;
  if (typeof n.charset < "u" && n.charset !== "utf-8" && n.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  let t = en;
  if (typeof n.format < "u") {
    if (!$t(_s, n.format)) throw new TypeError("Unknown format option provided.");
    t = n.format;
  }
  const s = _s[t];
  let r = P.filter;
  (typeof n.filter == "function" || j(n.filter)) && (r = n.filter);
  let i;
  if (n.arrayFormat && n.arrayFormat in sn ? i = n.arrayFormat : "indices" in n ? i = n.indices ? "indices" : "repeat" : i = P.arrayFormat, "commaRoundTrip" in n && typeof n.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  const a = typeof n.allowDots > "u" ? n.encodeDotInKeys ? true : P.allowDots : !!n.allowDots;
  return { addQueryPrefix: typeof n.addQueryPrefix == "boolean" ? n.addQueryPrefix : P.addQueryPrefix, allowDots: a, allowEmptyArrays: typeof n.allowEmptyArrays == "boolean" ? !!n.allowEmptyArrays : P.allowEmptyArrays, arrayFormat: i, charset: e, charsetSentinel: typeof n.charsetSentinel == "boolean" ? n.charsetSentinel : P.charsetSentinel, commaRoundTrip: !!n.commaRoundTrip, delimiter: typeof n.delimiter > "u" ? P.delimiter : n.delimiter, encode: typeof n.encode == "boolean" ? n.encode : P.encode, encodeDotInKeys: typeof n.encodeDotInKeys == "boolean" ? n.encodeDotInKeys : P.encodeDotInKeys, encoder: typeof n.encoder == "function" ? n.encoder : P.encoder, encodeValuesOnly: typeof n.encodeValuesOnly == "boolean" ? n.encodeValuesOnly : P.encodeValuesOnly, filter: r, format: t, formatter: s, serializeDate: typeof n.serializeDate == "function" ? n.serializeDate : P.serializeDate, skipNulls: typeof n.skipNulls == "boolean" ? n.skipNulls : P.skipNulls, sort: typeof n.sort == "function" ? n.sort : null, strictNullHandling: typeof n.strictNullHandling == "boolean" ? n.strictNullHandling : P.strictNullHandling };
}
function Hr(n, e = {}) {
  let t = n;
  const s = qr(e);
  let r, i;
  typeof s.filter == "function" ? (i = s.filter, t = i("", t)) : j(s.filter) && (i = s.filter, r = i);
  const a = [];
  if (typeof t != "object" || t === null) return "";
  const l = sn[s.arrayFormat], h = l === "comma" && s.commaRoundTrip;
  r || (r = Object.keys(t)), s.sort && r.sort(s.sort);
  const f = /* @__PURE__ */ new WeakMap();
  for (let g = 0; g < r.length; ++g) {
    const u = r[g];
    s.skipNulls && t[u] === null || nn(a, rn(t[u], u, l, h, s.allowEmptyArrays, s.strictNullHandling, s.skipNulls, s.encodeDotInKeys, s.encode ? s.encoder : null, s.filter, s.sort, s.allowDots, s.serializeDate, s.format, s.formatter, s.encodeValuesOnly, s.charset, f));
  }
  const m = a.join(s.delimiter);
  let d = s.addQueryPrefix === true ? "?" : "";
  return s.charsetSentinel && (s.charset === "iso-8859-1" ? d += "utf8=%26%2310003%3B&" : d += "utf8=%E2%9C%93&"), m.length > 0 ? d + m : "";
}
function Jr(n) {
  return Hr(n, { arrayFormat: "brackets" });
}
function Xr(n) {
  let e = 0;
  for (const r of n) e += r.length;
  const t = new Uint8Array(e);
  let s = 0;
  for (const r of n) t.set(r, s), s += r.length;
  return t;
}
let ys;
function Ut(n) {
  let e;
  return (ys ?? (e = new globalThis.TextEncoder(), ys = e.encode.bind(e)))(n);
}
let bs;
function Ss(n) {
  let e;
  return (bs ?? (e = new globalThis.TextDecoder(), bs = e.decode.bind(e)))(n);
}
var q, H;
class at {
  constructor() {
    q.set(this, void 0), H.set(this, void 0), S(this, q, new Uint8Array()), S(this, H, null);
  }
  decode(e) {
    if (e == null) return [];
    const t = e instanceof ArrayBuffer ? new Uint8Array(e) : typeof e == "string" ? Ut(e) : e;
    S(this, q, Xr([o(this, q, "f"), t]));
    const s = [];
    let r;
    for (; (r = Kr(o(this, q, "f"), o(this, H, "f"))) != null; ) {
      if (r.carriage && o(this, H, "f") == null) {
        S(this, H, r.index);
        continue;
      }
      if (o(this, H, "f") != null && (r.index !== o(this, H, "f") + 1 || r.carriage)) {
        s.push(Ss(o(this, q, "f").subarray(0, o(this, H, "f") - 1))), S(this, q, o(this, q, "f").subarray(o(this, H, "f"))), S(this, H, null);
        continue;
      }
      const i = o(this, H, "f") !== null ? r.preceding - 1 : r.preceding, a = Ss(o(this, q, "f").subarray(0, i));
      s.push(a), S(this, q, o(this, q, "f").subarray(r.index)), S(this, H, null);
    }
    return s;
  }
  flush() {
    return o(this, q, "f").length ? this.decode(`
`) : [];
  }
}
q = /* @__PURE__ */ new WeakMap(), H = /* @__PURE__ */ new WeakMap();
at.NEWLINE_CHARS = /* @__PURE__ */ new Set([`
`, "\r"]);
at.NEWLINE_REGEXP = /\r\n|[\n\r]/g;
function Kr(n, e) {
  for (let r = e ?? 0; r < n.length; r++) {
    if (n[r] === 10) return { preceding: r, index: r + 1, carriage: false };
    if (n[r] === 13) return { preceding: r, index: r + 1, carriage: true };
  }
  return null;
}
function Vr(n) {
  for (let s = 0; s < n.length - 1; s++) {
    if (n[s] === 10 && n[s + 1] === 10 || n[s] === 13 && n[s + 1] === 13) return s + 2;
    if (n[s] === 13 && n[s + 1] === 10 && s + 3 < n.length && n[s + 2] === 13 && n[s + 3] === 10) return s + 4;
  }
  return -1;
}
const Ge = { off: 0, error: 200, warn: 300, info: 400, debug: 500 }, xs = (n, e, t) => {
  if (n) {
    if (Ir(Ge, n)) return n;
    F(t).warn(`${e} was set to ${JSON.stringify(n)}, expected one of ${JSON.stringify(Object.keys(Ge))}`);
  }
};
function we() {
}
function Me(n, e, t) {
  return !e || Ge[n] > Ge[t] ? we : e[n].bind(e);
}
const zr = { error: we, warn: we, info: we, debug: we };
let As = /* @__PURE__ */ new WeakMap();
function F(n) {
  const e = n.logger, t = n.logLevel ?? "off";
  if (!e) return zr;
  const s = As.get(e);
  if (s && s[0] === t) return s[1];
  const r = { error: Me("error", e, t), warn: Me("warn", e, t), info: Me("info", e, t), debug: Me("debug", e, t) };
  return As.set(e, [t, r]), r;
}
const se = (n) => (n.options && (n.options = { ...n.options }, delete n.options.headers), n.headers && (n.headers = Object.fromEntries((n.headers instanceof Headers ? [...n.headers] : Object.entries(n.headers)).map(([e, t]) => [e, e.toLowerCase() === "authorization" || e.toLowerCase() === "cookie" || e.toLowerCase() === "set-cookie" ? "***" : t]))), "retryOfRequestLogID" in n && (n.retryOfRequestLogID && (n.retryOf = n.retryOfRequestLogID), delete n.retryOfRequestLogID), n);
var _e;
class G {
  constructor(e, t, s) {
    this.iterator = e, _e.set(this, void 0), this.controller = t, S(this, _e, s);
  }
  static fromSSEResponse(e, t, s, r) {
    let i = false;
    const a = s ? F(s) : console;
    async function* l() {
      if (i) throw new y("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
      i = true;
      let h = false;
      try {
        for await (const f of Qr(e, t)) if (!h) {
          if (f.data.startsWith("[DONE]")) {
            h = true;
            continue;
          }
          if (f.event === null || !f.event.startsWith("thread.")) {
            let m;
            try {
              m = JSON.parse(f.data);
            } catch (d) {
              throw a.error("Could not parse message into JSON:", f.data), a.error("From chunk:", f.raw), d;
            }
            if (m && m.error) throw new D(void 0, m.error, void 0, e.headers);
            yield r ? { event: f.event, data: m } : m;
          } else {
            let m;
            try {
              m = JSON.parse(f.data);
            } catch (d) {
              throw console.error("Could not parse message into JSON:", f.data), console.error("From chunk:", f.raw), d;
            }
            if (f.event == "error") throw new D(void 0, m.error, m.message, void 0);
            yield { event: f.event, data: m };
          }
        }
        h = true;
      } catch (f) {
        if (Ct(f)) return;
        throw f;
      } finally {
        h || t.abort();
      }
    }
    return new G(l, t, s);
  }
  static fromReadableStream(e, t, s) {
    let r = false;
    async function* i() {
      const l = new at(), h = Zs(e);
      for await (const f of h) for (const m of l.decode(f)) yield m;
      for (const f of l.flush()) yield f;
    }
    async function* a() {
      if (r) throw new y("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
      r = true;
      let l = false;
      try {
        for await (const h of i()) l || h && (yield JSON.parse(h));
        l = true;
      } catch (h) {
        if (Ct(h)) return;
        throw h;
      } finally {
        l || t.abort();
      }
    }
    return new G(a, t, s);
  }
  [(_e = /* @__PURE__ */ new WeakMap(), Symbol.asyncIterator)]() {
    return this.iterator();
  }
  tee() {
    const e = [], t = [], s = this.iterator(), r = (i) => ({ next: () => {
      if (i.length === 0) {
        const a = s.next();
        e.push(a), t.push(a);
      }
      return i.shift();
    } });
    return [new G(() => r(e), this.controller, o(this, _e, "f")), new G(() => r(t), this.controller, o(this, _e, "f"))];
  }
  toReadableStream() {
    const e = this;
    let t;
    return Gs({ async start() {
      t = e[Symbol.asyncIterator]();
    }, async pull(s) {
      try {
        const { value: r, done: i } = await t.next();
        if (i) return s.close();
        const a = Ut(JSON.stringify(r) + `
`);
        s.enqueue(a);
      } catch (r) {
        s.error(r);
      }
    }, async cancel() {
      var _a;
      await ((_a = t.return) == null ? void 0 : _a.call(t));
    } });
  }
}
async function* Qr(n, e) {
  if (!n.body) throw e.abort(), typeof globalThis.navigator < "u" && globalThis.navigator.product === "ReactNative" ? new y("The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api") : new y("Attempted to iterate over a response with no body");
  const t = new Yr(), s = new at(), r = Zs(n.body);
  for await (const i of Gr(r)) for (const a of s.decode(i)) {
    const l = t.decode(a);
    l && (yield l);
  }
  for (const i of s.flush()) {
    const a = t.decode(i);
    a && (yield a);
  }
}
async function* Gr(n) {
  let e = new Uint8Array();
  for await (const t of n) {
    if (t == null) continue;
    const s = t instanceof ArrayBuffer ? new Uint8Array(t) : typeof t == "string" ? Ut(t) : t;
    let r = new Uint8Array(e.length + s.length);
    r.set(e), r.set(s, e.length), e = r;
    let i;
    for (; (i = Vr(e)) !== -1; ) yield e.slice(0, i), e = e.slice(i);
  }
  e.length > 0 && (yield e);
}
class Yr {
  constructor() {
    this.event = null, this.data = [], this.chunks = [];
  }
  decode(e) {
    if (e.endsWith("\r") && (e = e.substring(0, e.length - 1)), !e) {
      if (!this.event && !this.data.length) return null;
      const i = { event: this.event, data: this.data.join(`
`), raw: this.chunks };
      return this.event = null, this.data = [], this.chunks = [], i;
    }
    if (this.chunks.push(e), e.startsWith(":")) return null;
    let [t, s, r] = Zr(e, ":");
    return r.startsWith(" ") && (r = r.substring(1)), t === "event" ? this.event = r : t === "data" && this.data.push(r), null;
  }
}
function Zr(n, e) {
  const t = n.indexOf(e);
  return t !== -1 ? [n.substring(0, t), e, n.substring(t + e.length)] : [n, "", ""];
}
async function an(n, e) {
  const { response: t, requestLogID: s, retryOfRequestLogID: r, startTime: i } = e, a = await (async () => {
    var _a, _b;
    if (e.options.stream) return F(n).debug("response", t.status, t.url, t.headers, t.body), e.options.__streamClass ? e.options.__streamClass.fromSSEResponse(t, e.controller, n, e.options.__synthesizeEventData) : G.fromSSEResponse(t, e.controller, n, e.options.__synthesizeEventData);
    if (t.status === 204) return null;
    if (e.options.__binaryResponse) return t;
    const h = (_b = (_a = t.headers.get("content-type")) == null ? void 0 : _a.split(";")[0]) == null ? void 0 : _b.trim();
    if ((h == null ? void 0 : h.includes("application/json")) || (h == null ? void 0 : h.endsWith("+json"))) {
      if (t.headers.get("content-length") === "0") return;
      const g = await t.json();
      return on(g, t);
    }
    return await t.text();
  })();
  return F(n).debug(`[${s}] response parsed`, se({ retryOfRequestLogID: r, url: t.url, status: t.status, body: a, durationMs: Date.now() - i })), a;
}
function on(n, e) {
  return !n || typeof n != "object" || Array.isArray(n) ? n : Object.defineProperty(n, "_request_id", { value: e.headers.get("x-request-id"), enumerable: false });
}
var ye;
class ot extends Promise {
  constructor(e, t, s = an) {
    super((r) => {
      r(null);
    }), this.responsePromise = t, this.parseResponse = s, ye.set(this, void 0), S(this, ye, e);
  }
  _thenUnwrap(e) {
    return new ot(o(this, ye, "f"), this.responsePromise, async (t, s) => on(e(await this.parseResponse(t, s), s), s.response));
  }
  asResponse() {
    return this.responsePromise.then((e) => e.response);
  }
  async withResponse() {
    const [e, t] = await Promise.all([this.parse(), this.asResponse()]);
    return { data: e, response: t, request_id: t.headers.get("x-request-id") };
  }
  parse() {
    return this.parsedPromise || (this.parsedPromise = this.responsePromise.then((e) => this.parseResponse(o(this, ye, "f"), e))), this.parsedPromise;
  }
  then(e, t) {
    return this.parse().then(e, t);
  }
  catch(e) {
    return this.parse().catch(e);
  }
  finally(e) {
    return this.parse().finally(e);
  }
}
ye = /* @__PURE__ */ new WeakMap();
var Le;
class Wt {
  constructor(e, t, s, r) {
    Le.set(this, void 0), S(this, Le, e), this.options = r, this.response = t, this.body = s;
  }
  hasNextPage() {
    return this.getPaginatedItems().length ? this.nextPageRequestOptions() != null : false;
  }
  async getNextPage() {
    const e = this.nextPageRequestOptions();
    if (!e) throw new y("No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.");
    return await o(this, Le, "f").requestAPIList(this.constructor, e);
  }
  async *iterPages() {
    let e = this;
    for (yield e; e.hasNextPage(); ) e = await e.getNextPage(), yield e;
  }
  async *[(Le = /* @__PURE__ */ new WeakMap(), Symbol.asyncIterator)]() {
    for await (const e of this.iterPages()) for (const t of e.getPaginatedItems()) yield t;
  }
}
class ei extends ot {
  constructor(e, t, s) {
    super(e, t, async (r, i) => new s(r, i.response, await an(r, i), i.options));
  }
  async *[Symbol.asyncIterator]() {
    const e = await this;
    for await (const t of e) yield t;
  }
}
class lt extends Wt {
  constructor(e, t, s, r) {
    super(e, t, s, r), this.data = s.data || [], this.object = s.object;
  }
  getPaginatedItems() {
    return this.data ?? [];
  }
  nextPageRequestOptions() {
    return null;
  }
}
class R extends Wt {
  constructor(e, t, s, r) {
    super(e, t, s, r), this.data = s.data || [], this.has_more = s.has_more || false;
  }
  getPaginatedItems() {
    return this.data ?? [];
  }
  hasNextPage() {
    return this.has_more === false ? false : super.hasNextPage();
  }
  nextPageRequestOptions() {
    var _a;
    const e = this.getPaginatedItems(), t = (_a = e[e.length - 1]) == null ? void 0 : _a.id;
    return t ? { ...this.options, query: { ...Qs(this.options.query), after: t } } : null;
  }
}
class ke extends Wt {
  constructor(e, t, s, r) {
    super(e, t, s, r), this.data = s.data || [], this.has_more = s.has_more || false, this.last_id = s.last_id || "";
  }
  getPaginatedItems() {
    return this.data ?? [];
  }
  hasNextPage() {
    return this.has_more === false ? false : super.hasNextPage();
  }
  nextPageRequestOptions() {
    const e = this.last_id;
    return e ? { ...this.options, query: { ...Qs(this.options.query), after: e } } : null;
  }
}
const ln = () => {
  var _a;
  if (typeof File > "u") {
    const { process: n } = globalThis, e = typeof ((_a = n == null ? void 0 : n.versions) == null ? void 0 : _a.node) == "string" && parseInt(n.versions.node.split(".")) < 20;
    throw new Error("`File` is not defined as a global, which is required for file uploads." + (e ? " Update to Node 20 LTS or newer, or set `globalThis.File` to `import('node:buffer').File`." : ""));
  }
};
function Re(n, e, t) {
  return ln(), new File(n, e ?? "unknown_file", t);
}
function je(n) {
  return (typeof n == "object" && n !== null && ("name" in n && n.name && String(n.name) || "url" in n && n.url && String(n.url) || "filename" in n && n.filename && String(n.filename) || "path" in n && n.path && String(n.path)) || "").split(/[\\/]/).pop() || void 0;
}
const jt = (n) => n != null && typeof n == "object" && typeof n[Symbol.asyncIterator] == "function", Ee = async (n, e) => It(n.body) ? { ...n, body: await cn(n.body, e) } : n, fe = async (n, e) => ({ ...n, body: await cn(n.body, e) }), vs = /* @__PURE__ */ new WeakMap();
function ti(n) {
  const e = typeof n == "function" ? n : n.fetch, t = vs.get(e);
  if (t) return t;
  const s = (async () => {
    try {
      const r = "Response" in e ? e.Response : (await e("data:,")).constructor, i = new FormData();
      return i.toString() !== await new r(i).text();
    } catch {
      return true;
    }
  })();
  return vs.set(e, s), s;
}
const cn = async (n, e) => {
  if (!await ti(e)) throw new TypeError("The provided fetch function does not support file uploads with the current global FormData class.");
  const t = new FormData();
  return await Promise.all(Object.entries(n || {}).map(([s, r]) => kt(t, s, r))), t;
}, un = (n) => n instanceof Blob && "name" in n, si = (n) => typeof n == "object" && n !== null && (n instanceof Response || jt(n) || un(n)), It = (n) => {
  if (si(n)) return true;
  if (Array.isArray(n)) return n.some(It);
  if (n && typeof n == "object") {
    for (const e in n) if (It(n[e])) return true;
  }
  return false;
}, kt = async (n, e, t) => {
  if (t !== void 0) {
    if (t == null) throw new TypeError(`Received null for "${e}"; to pass null in FormData, you must use the string 'null'`);
    if (typeof t == "string" || typeof t == "number" || typeof t == "boolean") n.append(e, String(t));
    else if (t instanceof Response) n.append(e, Re([await t.blob()], je(t)));
    else if (jt(t)) n.append(e, Re([await new Response(Ys(t)).blob()], je(t)));
    else if (un(t)) n.append(e, t, je(t));
    else if (Array.isArray(t)) await Promise.all(t.map((s) => kt(n, e + "[]", s)));
    else if (typeof t == "object") await Promise.all(Object.entries(t).map(([s, r]) => kt(n, `${e}[${s}]`, r)));
    else throw new TypeError(`Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${t} instead`);
  }
}, hn = (n) => n != null && typeof n == "object" && typeof n.size == "number" && typeof n.type == "string" && typeof n.text == "function" && typeof n.slice == "function" && typeof n.arrayBuffer == "function", ni = (n) => n != null && typeof n == "object" && typeof n.name == "string" && typeof n.lastModified == "number" && hn(n), ri = (n) => n != null && typeof n == "object" && typeof n.url == "string" && typeof n.blob == "function";
async function ii(n, e, t) {
  if (ln(), n = await n, ni(n)) return n instanceof File ? n : Re([await n.arrayBuffer()], n.name);
  if (ri(n)) {
    const r = await n.blob();
    return e || (e = new URL(n.url).pathname.split(/[\\/]/).pop()), Re(await Et(r), e, t);
  }
  const s = await Et(n);
  if (e || (e = je(n)), !(t == null ? void 0 : t.type)) {
    const r = s.find((i) => typeof i == "object" && "type" in i && i.type);
    typeof r == "string" && (t = { ...t, type: r });
  }
  return Re(s, e, t);
}
async function Et(n) {
  var _a;
  let e = [];
  if (typeof n == "string" || ArrayBuffer.isView(n) || n instanceof ArrayBuffer) e.push(n);
  else if (hn(n)) e.push(n instanceof Blob ? n : await n.arrayBuffer());
  else if (jt(n)) for await (const t of n) e.push(...await Et(t));
  else {
    const t = (_a = n == null ? void 0 : n.constructor) == null ? void 0 : _a.name;
    throw new Error(`Unexpected data type: ${typeof n}${t ? `; constructor: ${t}` : ""}${ai(n)}`);
  }
  return e;
}
function ai(n) {
  return typeof n != "object" || n === null ? "" : `; props: [${Object.getOwnPropertyNames(n).map((t) => `"${t}"`).join(", ")}]`;
}
class _ {
  constructor(e) {
    this._client = e;
  }
}
function dn(n) {
  return n.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g, encodeURIComponent);
}
const Cs = Object.freeze(/* @__PURE__ */ Object.create(null)), oi = (n = dn) => function(t, ...s) {
  if (t.length === 1) return t[0];
  let r = false;
  const i = [], a = t.reduce((m, d, g) => {
    var _a;
    /[?#]/.test(d) && (r = true);
    const u = s[g];
    let A = (r ? encodeURIComponent : n)("" + u);
    return g !== s.length && (u == null || typeof u == "object" && u.toString === ((_a = Object.getPrototypeOf(Object.getPrototypeOf(u.hasOwnProperty ?? Cs) ?? Cs)) == null ? void 0 : _a.toString)) && (A = u + "", i.push({ start: m.length + d.length, length: A.length, error: `Value of type ${Object.prototype.toString.call(u).slice(8, -1)} is not a valid path parameter` })), m + d + (g === s.length ? "" : A);
  }, ""), l = a.split(/[?#]/, 1)[0], h = new RegExp("(?<=^|\\/)(?:\\.|%2e){1,2}(?=\\/|$)", "gi");
  let f;
  for (; (f = h.exec(l)) !== null; ) i.push({ start: f.index, length: f[0].length, error: `Value "${f[0]}" can't be safely passed as a path parameter` });
  if (i.sort((m, d) => m.start - d.start), i.length > 0) {
    let m = 0;
    const d = i.reduce((g, u) => {
      const A = " ".repeat(u.start - m), b = "^".repeat(u.length);
      return m = u.start + u.length, g + A + b;
    }, "");
    throw new y(`Path parameters result in path with invalid segments:
${i.map((g) => g.error).join(`
`)}
${a}
${d}`);
  }
  return a;
}, c = oi(dn);
let fn = class extends _ {
  list(e, t = {}, s) {
    return this._client.getAPIList(c`/chat/completions/${e}/messages`, R, { query: t, ...s });
  }
};
function Ye(n) {
  return n !== void 0 && "function" in n && n.function !== void 0;
}
function qt(n) {
  return (n == null ? void 0 : n.$brand) === "auto-parseable-response-format";
}
function Te(n) {
  return (n == null ? void 0 : n.$brand) === "auto-parseable-tool";
}
function li(n, e) {
  return !e || !pn(e) ? { ...n, choices: n.choices.map((t) => (mn(t.message.tool_calls), { ...t, message: { ...t.message, parsed: null, ...t.message.tool_calls ? { tool_calls: t.message.tool_calls } : void 0 } })) } : Ht(n, e);
}
function Ht(n, e) {
  const t = n.choices.map((s) => {
    var _a;
    if (s.finish_reason === "length") throw new Vs();
    if (s.finish_reason === "content_filter") throw new zs();
    return mn(s.message.tool_calls), { ...s, message: { ...s.message, ...s.message.tool_calls ? { tool_calls: ((_a = s.message.tool_calls) == null ? void 0 : _a.map((r) => ui(e, r))) ?? void 0 } : void 0, parsed: s.message.content && !s.message.refusal ? ci(e, s.message.content) : null } };
  });
  return { ...n, choices: t };
}
function ci(n, e) {
  var _a, _b;
  return ((_a = n.response_format) == null ? void 0 : _a.type) !== "json_schema" ? null : ((_b = n.response_format) == null ? void 0 : _b.type) === "json_schema" ? "$parseRaw" in n.response_format ? n.response_format.$parseRaw(e) : JSON.parse(e) : null;
}
function ui(n, e) {
  var _a;
  const t = (_a = n.tools) == null ? void 0 : _a.find((s) => {
    var _a2;
    return Ye(s) && ((_a2 = s.function) == null ? void 0 : _a2.name) === e.function.name;
  });
  return { ...e, function: { ...e.function, parsed_arguments: Te(t) ? t.$parseRaw(e.function.arguments) : (t == null ? void 0 : t.function.strict) ? JSON.parse(e.function.arguments) : null } };
}
function hi(n, e) {
  var _a;
  if (!n || !("tools" in n) || !n.tools) return false;
  const t = (_a = n.tools) == null ? void 0 : _a.find((s) => {
    var _a2;
    return Ye(s) && ((_a2 = s.function) == null ? void 0 : _a2.name) === e.function.name;
  });
  return Ye(t) && (Te(t) || (t == null ? void 0 : t.function.strict) || false);
}
function pn(n) {
  var _a;
  return qt(n.response_format) ? true : ((_a = n.tools) == null ? void 0 : _a.some((e) => Te(e) || e.type === "function" && e.function.strict === true)) ?? false;
}
function mn(n) {
  for (const e of n || []) if (e.type !== "function") throw new y(`Currently only \`function\` tool calls are supported; Received \`${e.type}\``);
}
function di(n) {
  for (const e of n ?? []) {
    if (e.type !== "function") throw new y(`Currently only \`function\` tool types support auto-parsing; Received \`${e.type}\``);
    if (e.function.strict !== true) throw new y(`The \`${e.function.name}\` tool is not marked with \`strict: true\`. Only strict function tools can be auto-parsed`);
  }
}
const Ze = (n) => (n == null ? void 0 : n.role) === "assistant", _n = (n) => (n == null ? void 0 : n.role) === "tool";
var Ot, qe, He, be, Se, Je, xe, Z, Ae, et, tt, ue, gn;
class Jt {
  constructor() {
    Ot.add(this), this.controller = new AbortController(), qe.set(this, void 0), He.set(this, () => {
    }), be.set(this, () => {
    }), Se.set(this, void 0), Je.set(this, () => {
    }), xe.set(this, () => {
    }), Z.set(this, {}), Ae.set(this, false), et.set(this, false), tt.set(this, false), ue.set(this, false), S(this, qe, new Promise((e, t) => {
      S(this, He, e, "f"), S(this, be, t, "f");
    })), S(this, Se, new Promise((e, t) => {
      S(this, Je, e, "f"), S(this, xe, t, "f");
    })), o(this, qe, "f").catch(() => {
    }), o(this, Se, "f").catch(() => {
    });
  }
  _run(e) {
    setTimeout(() => {
      e().then(() => {
        this._emitFinal(), this._emit("end");
      }, o(this, Ot, "m", gn).bind(this));
    }, 0);
  }
  _connected() {
    this.ended || (o(this, He, "f").call(this), this._emit("connect"));
  }
  get ended() {
    return o(this, Ae, "f");
  }
  get errored() {
    return o(this, et, "f");
  }
  get aborted() {
    return o(this, tt, "f");
  }
  abort() {
    this.controller.abort();
  }
  on(e, t) {
    return (o(this, Z, "f")[e] || (o(this, Z, "f")[e] = [])).push({ listener: t }), this;
  }
  off(e, t) {
    const s = o(this, Z, "f")[e];
    if (!s) return this;
    const r = s.findIndex((i) => i.listener === t);
    return r >= 0 && s.splice(r, 1), this;
  }
  once(e, t) {
    return (o(this, Z, "f")[e] || (o(this, Z, "f")[e] = [])).push({ listener: t, once: true }), this;
  }
  emitted(e) {
    return new Promise((t, s) => {
      S(this, ue, true), e !== "error" && this.once("error", s), this.once(e, t);
    });
  }
  async done() {
    S(this, ue, true), await o(this, Se, "f");
  }
  _emit(e, ...t) {
    if (o(this, Ae, "f")) return;
    e === "end" && (S(this, Ae, true), o(this, Je, "f").call(this));
    const s = o(this, Z, "f")[e];
    if (s && (o(this, Z, "f")[e] = s.filter((r) => !r.once), s.forEach(({ listener: r }) => r(...t))), e === "abort") {
      const r = t[0];
      !o(this, ue, "f") && !(s == null ? void 0 : s.length) && Promise.reject(r), o(this, be, "f").call(this, r), o(this, xe, "f").call(this, r), this._emit("end");
      return;
    }
    if (e === "error") {
      const r = t[0];
      !o(this, ue, "f") && !(s == null ? void 0 : s.length) && Promise.reject(r), o(this, be, "f").call(this, r), o(this, xe, "f").call(this, r), this._emit("end");
    }
  }
  _emitFinal() {
  }
}
qe = /* @__PURE__ */ new WeakMap(), He = /* @__PURE__ */ new WeakMap(), be = /* @__PURE__ */ new WeakMap(), Se = /* @__PURE__ */ new WeakMap(), Je = /* @__PURE__ */ new WeakMap(), xe = /* @__PURE__ */ new WeakMap(), Z = /* @__PURE__ */ new WeakMap(), Ae = /* @__PURE__ */ new WeakMap(), et = /* @__PURE__ */ new WeakMap(), tt = /* @__PURE__ */ new WeakMap(), ue = /* @__PURE__ */ new WeakMap(), Ot = /* @__PURE__ */ new WeakSet(), gn = function(e) {
  if (S(this, et, true), e instanceof Error && e.name === "AbortError" && (e = new K()), e instanceof K) return S(this, tt, true), this._emit("abort", e);
  if (e instanceof y) return this._emit("error", e);
  if (e instanceof Error) {
    const t = new y(e.message);
    return t.cause = e, this._emit("error", t);
  }
  return this._emit("error", new y(String(e)));
};
function fi(n) {
  return typeof n.parse == "function";
}
var W, Pt, st, Tt, Nt, Mt, wn, yn;
const pi = 10;
class bn extends Jt {
  constructor() {
    super(...arguments), W.add(this), this._chatCompletions = [], this.messages = [];
  }
  _addChatCompletion(e) {
    var _a;
    this._chatCompletions.push(e), this._emit("chatCompletion", e);
    const t = (_a = e.choices[0]) == null ? void 0 : _a.message;
    return t && this._addMessage(t), e;
  }
  _addMessage(e, t = true) {
    if ("content" in e || (e.content = null), this.messages.push(e), t) {
      if (this._emit("message", e), _n(e) && e.content) this._emit("functionToolCallResult", e.content);
      else if (Ze(e) && e.tool_calls) for (const s of e.tool_calls) s.type === "function" && this._emit("functionToolCall", s.function);
    }
  }
  async finalChatCompletion() {
    await this.done();
    const e = this._chatCompletions[this._chatCompletions.length - 1];
    if (!e) throw new y("stream ended without producing a ChatCompletion");
    return e;
  }
  async finalContent() {
    return await this.done(), o(this, W, "m", Pt).call(this);
  }
  async finalMessage() {
    return await this.done(), o(this, W, "m", st).call(this);
  }
  async finalFunctionToolCall() {
    return await this.done(), o(this, W, "m", Tt).call(this);
  }
  async finalFunctionToolCallResult() {
    return await this.done(), o(this, W, "m", Nt).call(this);
  }
  async totalUsage() {
    return await this.done(), o(this, W, "m", Mt).call(this);
  }
  allChatCompletions() {
    return [...this._chatCompletions];
  }
  _emitFinal() {
    const e = this._chatCompletions[this._chatCompletions.length - 1];
    e && this._emit("finalChatCompletion", e);
    const t = o(this, W, "m", st).call(this);
    t && this._emit("finalMessage", t);
    const s = o(this, W, "m", Pt).call(this);
    s && this._emit("finalContent", s);
    const r = o(this, W, "m", Tt).call(this);
    r && this._emit("finalFunctionToolCall", r);
    const i = o(this, W, "m", Nt).call(this);
    i != null && this._emit("finalFunctionToolCallResult", i), this._chatCompletions.some((a) => a.usage) && this._emit("totalUsage", o(this, W, "m", Mt).call(this));
  }
  async _createChatCompletion(e, t, s) {
    const r = s == null ? void 0 : s.signal;
    r && (r.aborted && this.controller.abort(), r.addEventListener("abort", () => this.controller.abort())), o(this, W, "m", wn).call(this, t);
    const i = await e.chat.completions.create({ ...t, stream: false }, { ...s, signal: this.controller.signal });
    return this._connected(), this._addChatCompletion(Ht(i, t));
  }
  async _runChatCompletion(e, t, s) {
    for (const r of t.messages) this._addMessage(r, false);
    return await this._createChatCompletion(e, t, s);
  }
  async _runTools(e, t, s) {
    var _a, _b, _c;
    const r = "tool", { tool_choice: i = "auto", stream: a, ...l } = t, h = typeof i != "string" && i.type === "function" && ((_a = i == null ? void 0 : i.function) == null ? void 0 : _a.name), { maxChatCompletions: f = pi } = s || {}, m = t.tools.map((u) => {
      if (Te(u)) {
        if (!u.$callback) throw new y("Tool given to `.runTools()` that does not have an associated function");
        return { type: "function", function: { function: u.$callback, name: u.function.name, description: u.function.description || "", parameters: u.function.parameters, parse: u.$parseRaw, strict: true } };
      }
      return u;
    }), d = {};
    for (const u of m) u.type === "function" && (d[u.function.name || u.function.function.name] = u.function);
    const g = "tools" in t ? m.map((u) => u.type === "function" ? { type: "function", function: { name: u.function.name || u.function.function.name, parameters: u.function.parameters, description: u.function.description, strict: u.function.strict } } : u) : void 0;
    for (const u of t.messages) this._addMessage(u, false);
    for (let u = 0; u < f; ++u) {
      const b = (_b = (await this._createChatCompletion(e, { ...l, tool_choice: i, tools: g, messages: [...this.messages] }, s)).choices[0]) == null ? void 0 : _b.message;
      if (!b) throw new y("missing message in ChatCompletion response");
      if (!((_c = b.tool_calls) == null ? void 0 : _c.length)) return;
      for (const I of b.tool_calls) {
        if (I.type !== "function") continue;
        const v = I.id, { name: w, arguments: T } = I.function, C = d[w];
        if (C) {
          if (h && h !== w) {
            const L = `Invalid tool_call: ${JSON.stringify(w)}. ${JSON.stringify(h)} requested. Please try again`;
            this._addMessage({ role: r, tool_call_id: v, content: L });
            continue;
          }
        } else {
          const L = `Invalid tool_call: ${JSON.stringify(w)}. Available options are: ${Object.keys(d).map((N) => JSON.stringify(N)).join(", ")}. Please try again`;
          this._addMessage({ role: r, tool_call_id: v, content: L });
          continue;
        }
        let X;
        try {
          X = fi(C) ? await C.parse(T) : T;
        } catch (L) {
          const N = L instanceof Error ? L.message : String(L);
          this._addMessage({ role: r, tool_call_id: v, content: N });
          continue;
        }
        const U = await C.function(X, this), $ = o(this, W, "m", yn).call(this, U);
        if (this._addMessage({ role: r, tool_call_id: v, content: $ }), h) return;
      }
    }
  }
}
W = /* @__PURE__ */ new WeakSet(), Pt = function() {
  return o(this, W, "m", st).call(this).content ?? null;
}, st = function() {
  let e = this.messages.length;
  for (; e-- > 0; ) {
    const t = this.messages[e];
    if (Ze(t)) return { ...t, content: t.content ?? null, refusal: t.refusal ?? null };
  }
  throw new y("stream ended without producing a ChatCompletionMessage with role=assistant");
}, Tt = function() {
  var _a, _b;
  for (let e = this.messages.length - 1; e >= 0; e--) {
    const t = this.messages[e];
    if (Ze(t) && ((_a = t == null ? void 0 : t.tool_calls) == null ? void 0 : _a.length)) return (_b = t.tool_calls.filter((s) => s.type === "function").at(-1)) == null ? void 0 : _b.function;
  }
}, Nt = function() {
  for (let e = this.messages.length - 1; e >= 0; e--) {
    const t = this.messages[e];
    if (_n(t) && t.content != null && typeof t.content == "string" && this.messages.some((s) => {
      var _a;
      return s.role === "assistant" && ((_a = s.tool_calls) == null ? void 0 : _a.some((r) => r.type === "function" && r.id === t.tool_call_id));
    })) return t.content;
  }
}, Mt = function() {
  const e = { completion_tokens: 0, prompt_tokens: 0, total_tokens: 0 };
  for (const { usage: t } of this._chatCompletions) t && (e.completion_tokens += t.completion_tokens, e.prompt_tokens += t.prompt_tokens, e.total_tokens += t.total_tokens);
  return e;
}, wn = function(e) {
  if (e.n != null && e.n > 1) throw new y("ChatCompletion convenience helpers only support n=1 at this time. To use n>1, please use chat.completions.create() directly.");
}, yn = function(e) {
  return typeof e == "string" ? e : e === void 0 ? "undefined" : JSON.stringify(e);
};
class Xt extends bn {
  static runTools(e, t, s) {
    const r = new Xt(), i = { ...s, headers: { ...s == null ? void 0 : s.headers, "X-Stainless-Helper-Method": "runTools" } };
    return r._run(() => r._runTools(e, t, i)), r;
  }
  _addMessage(e, t = true) {
    super._addMessage(e, t), Ze(e) && e.content && this._emit("content", e.content);
  }
}
const Sn = 1, xn = 2, An = 4, vn = 8, Cn = 16, Rn = 32, $n = 64, In = 128, kn = 256, En = In | kn, On = Cn | Rn | En | $n, Pn = Sn | xn | On, Tn = An | vn, mi = Pn | Tn, M = { STR: Sn, NUM: xn, ARR: An, OBJ: vn, NULL: Cn, BOOL: Rn, NAN: $n, INFINITY: In, MINUS_INFINITY: kn, INF: En, SPECIAL: On, ATOM: Pn, COLLECTION: Tn, ALL: mi };
class _i extends Error {
}
class gi extends Error {
}
function wi(n, e = M.ALL) {
  if (typeof n != "string") throw new TypeError(`expecting str, got ${typeof n}`);
  if (!n.trim()) throw new Error(`${n} is empty`);
  return yi(n.trim(), e);
}
const yi = (n, e) => {
  const t = n.length;
  let s = 0;
  const r = (g) => {
    throw new _i(`${g} at position ${s}`);
  }, i = (g) => {
    throw new gi(`${g} at position ${s}`);
  }, a = () => (d(), s >= t && r("Unexpected end of input"), n[s] === '"' ? l() : n[s] === "{" ? h() : n[s] === "[" ? f() : n.substring(s, s + 4) === "null" || M.NULL & e && t - s < 4 && "null".startsWith(n.substring(s)) ? (s += 4, null) : n.substring(s, s + 4) === "true" || M.BOOL & e && t - s < 4 && "true".startsWith(n.substring(s)) ? (s += 4, true) : n.substring(s, s + 5) === "false" || M.BOOL & e && t - s < 5 && "false".startsWith(n.substring(s)) ? (s += 5, false) : n.substring(s, s + 8) === "Infinity" || M.INFINITY & e && t - s < 8 && "Infinity".startsWith(n.substring(s)) ? (s += 8, 1 / 0) : n.substring(s, s + 9) === "-Infinity" || M.MINUS_INFINITY & e && 1 < t - s && t - s < 9 && "-Infinity".startsWith(n.substring(s)) ? (s += 9, -1 / 0) : n.substring(s, s + 3) === "NaN" || M.NAN & e && t - s < 3 && "NaN".startsWith(n.substring(s)) ? (s += 3, NaN) : m()), l = () => {
    const g = s;
    let u = false;
    for (s++; s < t && (n[s] !== '"' || u && n[s - 1] === "\\"); ) u = n[s] === "\\" ? !u : false, s++;
    if (n.charAt(s) == '"') try {
      return JSON.parse(n.substring(g, ++s - Number(u)));
    } catch (A) {
      i(String(A));
    }
    else if (M.STR & e) try {
      return JSON.parse(n.substring(g, s - Number(u)) + '"');
    } catch {
      return JSON.parse(n.substring(g, n.lastIndexOf("\\")) + '"');
    }
    r("Unterminated string literal");
  }, h = () => {
    s++, d();
    const g = {};
    try {
      for (; n[s] !== "}"; ) {
        if (d(), s >= t && M.OBJ & e) return g;
        const u = l();
        d(), s++;
        try {
          const A = a();
          Object.defineProperty(g, u, { value: A, writable: true, enumerable: true, configurable: true });
        } catch (A) {
          if (M.OBJ & e) return g;
          throw A;
        }
        d(), n[s] === "," && s++;
      }
    } catch {
      if (M.OBJ & e) return g;
      r("Expected '}' at end of object");
    }
    return s++, g;
  }, f = () => {
    s++;
    const g = [];
    try {
      for (; n[s] !== "]"; ) g.push(a()), d(), n[s] === "," && s++;
    } catch {
      if (M.ARR & e) return g;
      r("Expected ']' at end of array");
    }
    return s++, g;
  }, m = () => {
    if (s === 0) {
      n === "-" && M.NUM & e && r("Not sure what '-' is");
      try {
        return JSON.parse(n);
      } catch (u) {
        if (M.NUM & e) try {
          return n[n.length - 1] === "." ? JSON.parse(n.substring(0, n.lastIndexOf("."))) : JSON.parse(n.substring(0, n.lastIndexOf("e")));
        } catch {
        }
        i(String(u));
      }
    }
    const g = s;
    for (n[s] === "-" && s++; n[s] && !",]}".includes(n[s]); ) s++;
    s == t && !(M.NUM & e) && r("Unterminated number literal");
    try {
      return JSON.parse(n.substring(g, s));
    } catch {
      n.substring(g, s) === "-" && M.NUM & e && r("Not sure what '-' is");
      try {
        return JSON.parse(n.substring(g, n.lastIndexOf("e")));
      } catch (A) {
        i(String(A));
      }
    }
  }, d = () => {
    for (; s < t && ` 
\r	`.includes(n[s]); ) s++;
  };
  return a();
}, Rs = (n) => wi(n, M.ALL ^ M.NUM);
var O, Y, ae, ee, bt, Fe, St, xt, At, Be, vt, $s;
class Oe extends bn {
  constructor(e) {
    super(), O.add(this), Y.set(this, void 0), ae.set(this, void 0), ee.set(this, void 0), S(this, Y, e), S(this, ae, []);
  }
  get currentChatCompletionSnapshot() {
    return o(this, ee, "f");
  }
  static fromReadableStream(e) {
    const t = new Oe(null);
    return t._run(() => t._fromReadableStream(e)), t;
  }
  static createChatCompletion(e, t, s) {
    const r = new Oe(t);
    return r._run(() => r._runChatCompletion(e, { ...t, stream: true }, { ...s, headers: { ...s == null ? void 0 : s.headers, "X-Stainless-Helper-Method": "stream" } })), r;
  }
  async _createChatCompletion(e, t, s) {
    var _a;
    super._createChatCompletion;
    const r = s == null ? void 0 : s.signal;
    r && (r.aborted && this.controller.abort(), r.addEventListener("abort", () => this.controller.abort())), o(this, O, "m", bt).call(this);
    const i = await e.chat.completions.create({ ...t, stream: true }, { ...s, signal: this.controller.signal });
    this._connected();
    for await (const a of i) o(this, O, "m", St).call(this, a);
    if ((_a = i.controller.signal) == null ? void 0 : _a.aborted) throw new K();
    return this._addChatCompletion(o(this, O, "m", Be).call(this));
  }
  async _fromReadableStream(e, t) {
    var _a;
    const s = t == null ? void 0 : t.signal;
    s && (s.aborted && this.controller.abort(), s.addEventListener("abort", () => this.controller.abort())), o(this, O, "m", bt).call(this), this._connected();
    const r = G.fromReadableStream(e, this.controller);
    let i;
    for await (const a of r) i && i !== a.id && this._addChatCompletion(o(this, O, "m", Be).call(this)), o(this, O, "m", St).call(this, a), i = a.id;
    if ((_a = r.controller.signal) == null ? void 0 : _a.aborted) throw new K();
    return this._addChatCompletion(o(this, O, "m", Be).call(this));
  }
  [(Y = /* @__PURE__ */ new WeakMap(), ae = /* @__PURE__ */ new WeakMap(), ee = /* @__PURE__ */ new WeakMap(), O = /* @__PURE__ */ new WeakSet(), bt = function() {
    this.ended || S(this, ee, void 0);
  }, Fe = function(t) {
    let s = o(this, ae, "f")[t.index];
    return s || (s = { content_done: false, refusal_done: false, logprobs_content_done: false, logprobs_refusal_done: false, done_tool_calls: /* @__PURE__ */ new Set(), current_tool_call_index: null }, o(this, ae, "f")[t.index] = s, s);
  }, St = function(t) {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i2, _j, _k, _l, _m, _n2, _o;
    if (this.ended) return;
    const s = o(this, O, "m", $s).call(this, t);
    this._emit("chunk", t, s);
    for (const r of t.choices) {
      const i = s.choices[r.index];
      r.delta.content != null && ((_a = i.message) == null ? void 0 : _a.role) === "assistant" && ((_b = i.message) == null ? void 0 : _b.content) && (this._emit("content", r.delta.content, i.message.content), this._emit("content.delta", { delta: r.delta.content, snapshot: i.message.content, parsed: i.message.parsed })), r.delta.refusal != null && ((_c = i.message) == null ? void 0 : _c.role) === "assistant" && ((_d = i.message) == null ? void 0 : _d.refusal) && this._emit("refusal.delta", { delta: r.delta.refusal, snapshot: i.message.refusal }), ((_e2 = r.logprobs) == null ? void 0 : _e2.content) != null && ((_f = i.message) == null ? void 0 : _f.role) === "assistant" && this._emit("logprobs.content.delta", { content: (_g = r.logprobs) == null ? void 0 : _g.content, snapshot: ((_h = i.logprobs) == null ? void 0 : _h.content) ?? [] }), ((_i2 = r.logprobs) == null ? void 0 : _i2.refusal) != null && ((_j = i.message) == null ? void 0 : _j.role) === "assistant" && this._emit("logprobs.refusal.delta", { refusal: (_k = r.logprobs) == null ? void 0 : _k.refusal, snapshot: ((_l = i.logprobs) == null ? void 0 : _l.refusal) ?? [] });
      const a = o(this, O, "m", Fe).call(this, i);
      i.finish_reason && (o(this, O, "m", At).call(this, i), a.current_tool_call_index != null && o(this, O, "m", xt).call(this, i, a.current_tool_call_index));
      for (const l of r.delta.tool_calls ?? []) a.current_tool_call_index !== l.index && (o(this, O, "m", At).call(this, i), a.current_tool_call_index != null && o(this, O, "m", xt).call(this, i, a.current_tool_call_index)), a.current_tool_call_index = l.index;
      for (const l of r.delta.tool_calls ?? []) {
        const h = (_m = i.message.tool_calls) == null ? void 0 : _m[l.index];
        (h == null ? void 0 : h.type) && ((h == null ? void 0 : h.type) === "function" ? this._emit("tool_calls.function.arguments.delta", { name: (_n2 = h.function) == null ? void 0 : _n2.name, index: l.index, arguments: h.function.arguments, parsed_arguments: h.function.parsed_arguments, arguments_delta: ((_o = l.function) == null ? void 0 : _o.arguments) ?? "" }) : (h == null ? void 0 : h.type, void 0));
      }
    }
  }, xt = function(t, s) {
    var _a, _b, _c;
    if (o(this, O, "m", Fe).call(this, t).done_tool_calls.has(s)) return;
    const i = (_a = t.message.tool_calls) == null ? void 0 : _a[s];
    if (!i) throw new Error("no tool call snapshot");
    if (!i.type) throw new Error("tool call snapshot missing `type`");
    if (i.type === "function") {
      const a = (_c = (_b = o(this, Y, "f")) == null ? void 0 : _b.tools) == null ? void 0 : _c.find((l) => Ye(l) && l.function.name === i.function.name);
      this._emit("tool_calls.function.arguments.done", { name: i.function.name, index: s, arguments: i.function.arguments, parsed_arguments: Te(a) ? a.$parseRaw(i.function.arguments) : (a == null ? void 0 : a.function.strict) ? JSON.parse(i.function.arguments) : null });
    } else i.type;
  }, At = function(t) {
    var _a, _b;
    const s = o(this, O, "m", Fe).call(this, t);
    if (t.message.content && !s.content_done) {
      s.content_done = true;
      const r = o(this, O, "m", vt).call(this);
      this._emit("content.done", { content: t.message.content, parsed: r ? r.$parseRaw(t.message.content) : null });
    }
    t.message.refusal && !s.refusal_done && (s.refusal_done = true, this._emit("refusal.done", { refusal: t.message.refusal })), ((_a = t.logprobs) == null ? void 0 : _a.content) && !s.logprobs_content_done && (s.logprobs_content_done = true, this._emit("logprobs.content.done", { content: t.logprobs.content })), ((_b = t.logprobs) == null ? void 0 : _b.refusal) && !s.logprobs_refusal_done && (s.logprobs_refusal_done = true, this._emit("logprobs.refusal.done", { refusal: t.logprobs.refusal }));
  }, Be = function() {
    if (this.ended) throw new y("stream has ended, this shouldn't happen");
    const t = o(this, ee, "f");
    if (!t) throw new y("request ended without sending any chunks");
    return S(this, ee, void 0), S(this, ae, []), bi(t, o(this, Y, "f"));
  }, vt = function() {
    var _a;
    const t = (_a = o(this, Y, "f")) == null ? void 0 : _a.response_format;
    return qt(t) ? t : null;
  }, $s = function(t) {
    var s, r, i, a;
    let l = o(this, ee, "f");
    const { choices: h, ...f } = t;
    l ? Object.assign(l, f) : l = S(this, ee, { ...f, choices: [] });
    for (const { delta: m, finish_reason: d, index: g, logprobs: u = null, ...A } of t.choices) {
      let b = l.choices[g];
      if (b || (b = l.choices[g] = { finish_reason: d, index: g, message: {}, logprobs: u, ...A }), u) if (!b.logprobs) b.logprobs = Object.assign({}, u);
      else {
        const { content: U, refusal: $, ...L } = u;
        Object.assign(b.logprobs, L), U && ((s = b.logprobs).content ?? (s.content = []), b.logprobs.content.push(...U)), $ && ((r = b.logprobs).refusal ?? (r.refusal = []), b.logprobs.refusal.push(...$));
      }
      if (d && (b.finish_reason = d, o(this, Y, "f") && pn(o(this, Y, "f")))) {
        if (d === "length") throw new Vs();
        if (d === "content_filter") throw new zs();
      }
      if (Object.assign(b, A), !m) continue;
      const { content: I, refusal: v, function_call: w, role: T, tool_calls: C, ...X } = m;
      if (Object.assign(b.message, X), v && (b.message.refusal = (b.message.refusal || "") + v), T && (b.message.role = T), w && (b.message.function_call ? (w.name && (b.message.function_call.name = w.name), w.arguments && ((i = b.message.function_call).arguments ?? (i.arguments = ""), b.message.function_call.arguments += w.arguments)) : b.message.function_call = w), I && (b.message.content = (b.message.content || "") + I, !b.message.refusal && o(this, O, "m", vt).call(this) && (b.message.parsed = Rs(b.message.content))), C) {
        b.message.tool_calls || (b.message.tool_calls = []);
        for (const { index: U, id: $, type: L, function: N, ...k } of C) {
          const E = (a = b.message.tool_calls)[U] ?? (a[U] = {});
          Object.assign(E, k), $ && (E.id = $), L && (E.type = L), N && (E.function ?? (E.function = { name: N.name ?? "", arguments: "" })), (N == null ? void 0 : N.name) && (E.function.name = N.name), (N == null ? void 0 : N.arguments) && (E.function.arguments += N.arguments, hi(o(this, Y, "f"), E) && (E.function.parsed_arguments = Rs(E.function.arguments)));
        }
      }
    }
    return l;
  }, Symbol.asyncIterator)]() {
    const e = [], t = [];
    let s = false;
    return this.on("chunk", (r) => {
      const i = t.shift();
      i ? i.resolve(r) : e.push(r);
    }), this.on("end", () => {
      s = true;
      for (const r of t) r.resolve(void 0);
      t.length = 0;
    }), this.on("abort", (r) => {
      s = true;
      for (const i of t) i.reject(r);
      t.length = 0;
    }), this.on("error", (r) => {
      s = true;
      for (const i of t) i.reject(r);
      t.length = 0;
    }), { next: async () => e.length ? { value: e.shift(), done: false } : s ? { value: void 0, done: true } : new Promise((i, a) => t.push({ resolve: i, reject: a })).then((i) => i ? { value: i, done: false } : { value: void 0, done: true }), return: async () => (this.abort(), { value: void 0, done: true }) };
  }
  toReadableStream() {
    return new G(this[Symbol.asyncIterator].bind(this), this.controller).toReadableStream();
  }
}
function bi(n, e) {
  const { id: t, choices: s, created: r, model: i, system_fingerprint: a, ...l } = n, h = { ...l, id: t, choices: s.map(({ message: f, finish_reason: m, index: d, logprobs: g, ...u }) => {
    if (!m) throw new y(`missing finish_reason for choice ${d}`);
    const { content: A = null, function_call: b, tool_calls: I, ...v } = f, w = f.role;
    if (!w) throw new y(`missing role for choice ${d}`);
    if (b) {
      const { arguments: T, name: C } = b;
      if (T == null) throw new y(`missing function_call.arguments for choice ${d}`);
      if (!C) throw new y(`missing function_call.name for choice ${d}`);
      return { ...u, message: { content: A, function_call: { arguments: T, name: C }, role: w, refusal: f.refusal ?? null }, finish_reason: m, index: d, logprobs: g };
    }
    return I ? { ...u, index: d, finish_reason: m, logprobs: g, message: { ...v, role: w, content: A, refusal: f.refusal ?? null, tool_calls: I.map((T, C) => {
      const { function: X, type: U, id: $, ...L } = T, { arguments: N, name: k, ...E } = X || {};
      if ($ == null) throw new y(`missing choices[${d}].tool_calls[${C}].id
${De(n)}`);
      if (U == null) throw new y(`missing choices[${d}].tool_calls[${C}].type
${De(n)}`);
      if (k == null) throw new y(`missing choices[${d}].tool_calls[${C}].function.name
${De(n)}`);
      if (N == null) throw new y(`missing choices[${d}].tool_calls[${C}].function.arguments
${De(n)}`);
      return { ...L, id: $, type: U, function: { ...E, name: k, arguments: N } };
    }) } } : { ...u, message: { ...v, content: A, role: w, refusal: f.refusal ?? null }, finish_reason: m, index: d, logprobs: g };
  }), created: r, model: i, object: "chat.completion", ...a ? { system_fingerprint: a } : {} };
  return li(h, e);
}
function De(n) {
  return JSON.stringify(n);
}
class nt extends Oe {
  static fromReadableStream(e) {
    const t = new nt(null);
    return t._run(() => t._fromReadableStream(e)), t;
  }
  static runTools(e, t, s) {
    const r = new nt(t), i = { ...s, headers: { ...s == null ? void 0 : s.headers, "X-Stainless-Helper-Method": "runTools" } };
    return r._run(() => r._runTools(e, t, i)), r;
  }
}
let Kt = class extends _ {
  constructor() {
    super(...arguments), this.messages = new fn(this._client);
  }
  create(e, t) {
    return this._client.post("/chat/completions", { body: e, ...t, stream: e.stream ?? false });
  }
  retrieve(e, t) {
    return this._client.get(c`/chat/completions/${e}`, t);
  }
  update(e, t, s) {
    return this._client.post(c`/chat/completions/${e}`, { body: t, ...s });
  }
  list(e = {}, t) {
    return this._client.getAPIList("/chat/completions", R, { query: e, ...t });
  }
  delete(e, t) {
    return this._client.delete(c`/chat/completions/${e}`, t);
  }
  parse(e, t) {
    return di(e.tools), this._client.chat.completions.create(e, { ...t, headers: { ...t == null ? void 0 : t.headers, "X-Stainless-Helper-Method": "chat.completions.parse" } })._thenUnwrap((s) => Ht(s, e));
  }
  runTools(e, t) {
    return e.stream ? nt.runTools(this._client, e, t) : Xt.runTools(this._client, e, t);
  }
  stream(e, t) {
    return Oe.createChatCompletion(this._client, e, t);
  }
};
Kt.Messages = fn;
class Vt extends _ {
  constructor() {
    super(...arguments), this.completions = new Kt(this._client);
  }
}
Vt.Completions = Kt;
const Nn = /* @__PURE__ */ Symbol("brand.privateNullableHeaders");
function* Si(n) {
  if (!n) return;
  if (Nn in n) {
    const { values: s, nulls: r } = n;
    yield* s.entries();
    for (const i of r) yield [i, null];
    return;
  }
  let e = false, t;
  n instanceof Headers ? t = n.entries() : ds(n) ? t = n : (e = true, t = Object.entries(n ?? {}));
  for (let s of t) {
    const r = s[0];
    if (typeof r != "string") throw new TypeError("expected header name to be a string");
    const i = ds(s[1]) ? s[1] : [s[1]];
    let a = false;
    for (const l of i) l !== void 0 && (e && !a && (a = true, yield [r, null]), yield [r, l]);
  }
}
const p = (n) => {
  const e = new Headers(), t = /* @__PURE__ */ new Set();
  for (const s of n) {
    const r = /* @__PURE__ */ new Set();
    for (const [i, a] of Si(s)) {
      const l = i.toLowerCase();
      r.has(l) || (e.delete(i), r.add(l)), a === null ? (e.delete(i), t.add(l)) : (e.append(i, a), t.delete(l));
    }
  }
  return { [Nn]: true, values: e, nulls: t };
};
class Mn extends _ {
  create(e, t) {
    return this._client.post("/audio/speech", { body: e, ...t, headers: p([{ Accept: "application/octet-stream" }, t == null ? void 0 : t.headers]), __binaryResponse: true });
  }
}
class Ln extends _ {
  create(e, t) {
    return this._client.post("/audio/transcriptions", fe({ body: e, ...t, stream: e.stream ?? false, __metadata: { model: e.model } }, this._client));
  }
}
class Fn extends _ {
  create(e, t) {
    return this._client.post("/audio/translations", fe({ body: e, ...t, __metadata: { model: e.model } }, this._client));
  }
}
class Ne extends _ {
  constructor() {
    super(...arguments), this.transcriptions = new Ln(this._client), this.translations = new Fn(this._client), this.speech = new Mn(this._client);
  }
}
Ne.Transcriptions = Ln;
Ne.Translations = Fn;
Ne.Speech = Mn;
class Bn extends _ {
  create(e, t) {
    return this._client.post("/batches", { body: e, ...t });
  }
  retrieve(e, t) {
    return this._client.get(c`/batches/${e}`, t);
  }
  list(e = {}, t) {
    return this._client.getAPIList("/batches", R, { query: e, ...t });
  }
  cancel(e, t) {
    return this._client.post(c`/batches/${e}/cancel`, t);
  }
}
class Dn extends _ {
  create(e, t) {
    return this._client.post("/assistants", { body: e, ...t, headers: p([{ "OpenAI-Beta": "assistants=v2" }, t == null ? void 0 : t.headers]) });
  }
  retrieve(e, t) {
    return this._client.get(c`/assistants/${e}`, { ...t, headers: p([{ "OpenAI-Beta": "assistants=v2" }, t == null ? void 0 : t.headers]) });
  }
  update(e, t, s) {
    return this._client.post(c`/assistants/${e}`, { body: t, ...s, headers: p([{ "OpenAI-Beta": "assistants=v2" }, s == null ? void 0 : s.headers]) });
  }
  list(e = {}, t) {
    return this._client.getAPIList("/assistants", R, { query: e, ...t, headers: p([{ "OpenAI-Beta": "assistants=v2" }, t == null ? void 0 : t.headers]) });
  }
  delete(e, t) {
    return this._client.delete(c`/assistants/${e}`, { ...t, headers: p([{ "OpenAI-Beta": "assistants=v2" }, t == null ? void 0 : t.headers]) });
  }
}
let Un = class extends _ {
  create(e, t) {
    return this._client.post("/realtime/sessions", { body: e, ...t, headers: p([{ "OpenAI-Beta": "assistants=v2" }, t == null ? void 0 : t.headers]) });
  }
};
class Wn extends _ {
  create(e, t) {
    return this._client.post("/realtime/transcription_sessions", { body: e, ...t, headers: p([{ "OpenAI-Beta": "assistants=v2" }, t == null ? void 0 : t.headers]) });
  }
}
let ct = class extends _ {
  constructor() {
    super(...arguments), this.sessions = new Un(this._client), this.transcriptionSessions = new Wn(this._client);
  }
};
ct.Sessions = Un;
ct.TranscriptionSessions = Wn;
class jn extends _ {
  create(e, t) {
    return this._client.post("/chatkit/sessions", { body: e, ...t, headers: p([{ "OpenAI-Beta": "chatkit_beta=v1" }, t == null ? void 0 : t.headers]) });
  }
  cancel(e, t) {
    return this._client.post(c`/chatkit/sessions/${e}/cancel`, { ...t, headers: p([{ "OpenAI-Beta": "chatkit_beta=v1" }, t == null ? void 0 : t.headers]) });
  }
}
let qn = class extends _ {
  retrieve(e, t) {
    return this._client.get(c`/chatkit/threads/${e}`, { ...t, headers: p([{ "OpenAI-Beta": "chatkit_beta=v1" }, t == null ? void 0 : t.headers]) });
  }
  list(e = {}, t) {
    return this._client.getAPIList("/chatkit/threads", ke, { query: e, ...t, headers: p([{ "OpenAI-Beta": "chatkit_beta=v1" }, t == null ? void 0 : t.headers]) });
  }
  delete(e, t) {
    return this._client.delete(c`/chatkit/threads/${e}`, { ...t, headers: p([{ "OpenAI-Beta": "chatkit_beta=v1" }, t == null ? void 0 : t.headers]) });
  }
  listItems(e, t = {}, s) {
    return this._client.getAPIList(c`/chatkit/threads/${e}/items`, ke, { query: t, ...s, headers: p([{ "OpenAI-Beta": "chatkit_beta=v1" }, s == null ? void 0 : s.headers]) });
  }
};
class ut extends _ {
  constructor() {
    super(...arguments), this.sessions = new jn(this._client), this.threads = new qn(this._client);
  }
}
ut.Sessions = jn;
ut.Threads = qn;
class Hn extends _ {
  create(e, t, s) {
    return this._client.post(c`/threads/${e}/messages`, { body: t, ...s, headers: p([{ "OpenAI-Beta": "assistants=v2" }, s == null ? void 0 : s.headers]) });
  }
  retrieve(e, t, s) {
    const { thread_id: r } = t;
    return this._client.get(c`/threads/${r}/messages/${e}`, { ...s, headers: p([{ "OpenAI-Beta": "assistants=v2" }, s == null ? void 0 : s.headers]) });
  }
  update(e, t, s) {
    const { thread_id: r, ...i } = t;
    return this._client.post(c`/threads/${r}/messages/${e}`, { body: i, ...s, headers: p([{ "OpenAI-Beta": "assistants=v2" }, s == null ? void 0 : s.headers]) });
  }
  list(e, t = {}, s) {
    return this._client.getAPIList(c`/threads/${e}/messages`, R, { query: t, ...s, headers: p([{ "OpenAI-Beta": "assistants=v2" }, s == null ? void 0 : s.headers]) });
  }
  delete(e, t, s) {
    const { thread_id: r } = t;
    return this._client.delete(c`/threads/${r}/messages/${e}`, { ...s, headers: p([{ "OpenAI-Beta": "assistants=v2" }, s == null ? void 0 : s.headers]) });
  }
}
class Jn extends _ {
  retrieve(e, t, s) {
    const { thread_id: r, run_id: i, ...a } = t;
    return this._client.get(c`/threads/${r}/runs/${i}/steps/${e}`, { query: a, ...s, headers: p([{ "OpenAI-Beta": "assistants=v2" }, s == null ? void 0 : s.headers]) });
  }
  list(e, t, s) {
    const { thread_id: r, ...i } = t;
    return this._client.getAPIList(c`/threads/${r}/runs/${e}/steps`, R, { query: i, ...s, headers: p([{ "OpenAI-Beta": "assistants=v2" }, s == null ? void 0 : s.headers]) });
  }
}
const xi = (n) => {
  if (typeof Buffer < "u") {
    const e = Buffer.from(n, "base64");
    return Array.from(new Float32Array(e.buffer, e.byteOffset, e.length / Float32Array.BYTES_PER_ELEMENT));
  } else {
    const e = atob(n), t = e.length, s = new Uint8Array(t);
    for (let r = 0; r < t; r++) s[r] = e.charCodeAt(r);
    return Array.from(new Float32Array(s.buffer));
  }
};
var Ai = {};
const oe = (n) => {
  var _a, _b, _c, _d;
  if (typeof globalThis.process < "u") return ((_a = Ai == null ? void 0 : Ai[n]) == null ? void 0 : _a.trim()) ?? void 0;
  if (typeof globalThis.Deno < "u") return (_d = (_c = (_b = globalThis.Deno.env) == null ? void 0 : _b.get) == null ? void 0 : _c.call(_b, n)) == null ? void 0 : _d.trim();
};
var B, re, Lt, Q, Xe, V, ie, de, ne, rt, J, Ke, Ve, $e, ve, Ce, Is, ks, Es, Os, Ps, Ts, Ns;
class Ie extends Jt {
  constructor() {
    super(...arguments), B.add(this), Lt.set(this, []), Q.set(this, {}), Xe.set(this, {}), V.set(this, void 0), ie.set(this, void 0), de.set(this, void 0), ne.set(this, void 0), rt.set(this, void 0), J.set(this, void 0), Ke.set(this, void 0), Ve.set(this, void 0), $e.set(this, void 0);
  }
  [(Lt = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ new WeakMap(), Xe = /* @__PURE__ */ new WeakMap(), V = /* @__PURE__ */ new WeakMap(), ie = /* @__PURE__ */ new WeakMap(), de = /* @__PURE__ */ new WeakMap(), ne = /* @__PURE__ */ new WeakMap(), rt = /* @__PURE__ */ new WeakMap(), J = /* @__PURE__ */ new WeakMap(), Ke = /* @__PURE__ */ new WeakMap(), Ve = /* @__PURE__ */ new WeakMap(), $e = /* @__PURE__ */ new WeakMap(), B = /* @__PURE__ */ new WeakSet(), Symbol.asyncIterator)]() {
    const e = [], t = [];
    let s = false;
    return this.on("event", (r) => {
      const i = t.shift();
      i ? i.resolve(r) : e.push(r);
    }), this.on("end", () => {
      s = true;
      for (const r of t) r.resolve(void 0);
      t.length = 0;
    }), this.on("abort", (r) => {
      s = true;
      for (const i of t) i.reject(r);
      t.length = 0;
    }), this.on("error", (r) => {
      s = true;
      for (const i of t) i.reject(r);
      t.length = 0;
    }), { next: async () => e.length ? { value: e.shift(), done: false } : s ? { value: void 0, done: true } : new Promise((i, a) => t.push({ resolve: i, reject: a })).then((i) => i ? { value: i, done: false } : { value: void 0, done: true }), return: async () => (this.abort(), { value: void 0, done: true }) };
  }
  static fromReadableStream(e) {
    const t = new re();
    return t._run(() => t._fromReadableStream(e)), t;
  }
  async _fromReadableStream(e, t) {
    var _a;
    const s = t == null ? void 0 : t.signal;
    s && (s.aborted && this.controller.abort(), s.addEventListener("abort", () => this.controller.abort())), this._connected();
    const r = G.fromReadableStream(e, this.controller);
    for await (const i of r) o(this, B, "m", ve).call(this, i);
    if ((_a = r.controller.signal) == null ? void 0 : _a.aborted) throw new K();
    return this._addRun(o(this, B, "m", Ce).call(this));
  }
  toReadableStream() {
    return new G(this[Symbol.asyncIterator].bind(this), this.controller).toReadableStream();
  }
  static createToolAssistantStream(e, t, s, r) {
    const i = new re();
    return i._run(() => i._runToolAssistantStream(e, t, s, { ...r, headers: { ...r == null ? void 0 : r.headers, "X-Stainless-Helper-Method": "stream" } })), i;
  }
  async _createToolAssistantStream(e, t, s, r) {
    var _a;
    const i = r == null ? void 0 : r.signal;
    i && (i.aborted && this.controller.abort(), i.addEventListener("abort", () => this.controller.abort()));
    const a = { ...s, stream: true }, l = await e.submitToolOutputs(t, a, { ...r, signal: this.controller.signal });
    this._connected();
    for await (const h of l) o(this, B, "m", ve).call(this, h);
    if ((_a = l.controller.signal) == null ? void 0 : _a.aborted) throw new K();
    return this._addRun(o(this, B, "m", Ce).call(this));
  }
  static createThreadAssistantStream(e, t, s) {
    const r = new re();
    return r._run(() => r._threadAssistantStream(e, t, { ...s, headers: { ...s == null ? void 0 : s.headers, "X-Stainless-Helper-Method": "stream" } })), r;
  }
  static createAssistantStream(e, t, s, r) {
    const i = new re();
    return i._run(() => i._runAssistantStream(e, t, s, { ...r, headers: { ...r == null ? void 0 : r.headers, "X-Stainless-Helper-Method": "stream" } })), i;
  }
  currentEvent() {
    return o(this, Ke, "f");
  }
  currentRun() {
    return o(this, Ve, "f");
  }
  currentMessageSnapshot() {
    return o(this, V, "f");
  }
  currentRunStepSnapshot() {
    return o(this, $e, "f");
  }
  async finalRunSteps() {
    return await this.done(), Object.values(o(this, Q, "f"));
  }
  async finalMessages() {
    return await this.done(), Object.values(o(this, Xe, "f"));
  }
  async finalRun() {
    if (await this.done(), !o(this, ie, "f")) throw Error("Final run was not received.");
    return o(this, ie, "f");
  }
  async _createThreadAssistantStream(e, t, s) {
    var _a;
    const r = s == null ? void 0 : s.signal;
    r && (r.aborted && this.controller.abort(), r.addEventListener("abort", () => this.controller.abort()));
    const i = { ...t, stream: true }, a = await e.createAndRun(i, { ...s, signal: this.controller.signal });
    this._connected();
    for await (const l of a) o(this, B, "m", ve).call(this, l);
    if ((_a = a.controller.signal) == null ? void 0 : _a.aborted) throw new K();
    return this._addRun(o(this, B, "m", Ce).call(this));
  }
  async _createAssistantStream(e, t, s, r) {
    var _a;
    const i = r == null ? void 0 : r.signal;
    i && (i.aborted && this.controller.abort(), i.addEventListener("abort", () => this.controller.abort()));
    const a = { ...s, stream: true }, l = await e.create(t, a, { ...r, signal: this.controller.signal });
    this._connected();
    for await (const h of l) o(this, B, "m", ve).call(this, h);
    if ((_a = l.controller.signal) == null ? void 0 : _a.aborted) throw new K();
    return this._addRun(o(this, B, "m", Ce).call(this));
  }
  static accumulateDelta(e, t) {
    for (const [s, r] of Object.entries(t)) {
      if (!e.hasOwnProperty(s)) {
        e[s] = r;
        continue;
      }
      let i = e[s];
      if (i == null) {
        e[s] = r;
        continue;
      }
      if (s === "index" || s === "type") {
        e[s] = r;
        continue;
      }
      if (typeof i == "string" && typeof r == "string") i += r;
      else if (typeof i == "number" && typeof r == "number") i += r;
      else if (gt(i) && gt(r)) i = this.accumulateDelta(i, r);
      else if (Array.isArray(i) && Array.isArray(r)) {
        if (i.every((a) => typeof a == "string" || typeof a == "number")) {
          i.push(...r);
          continue;
        }
        for (const a of r) {
          if (!gt(a)) throw new Error(`Expected array delta entry to be an object but got: ${a}`);
          const l = a.index;
          if (l == null) throw console.error(a), new Error("Expected array delta entry to have an `index` property");
          if (typeof l != "number") throw new Error(`Expected array delta entry \`index\` property to be a number but got ${l}`);
          const h = i[l];
          h == null ? i.push(a) : i[l] = this.accumulateDelta(h, a);
        }
        continue;
      } else throw Error(`Unhandled record type: ${s}, deltaValue: ${r}, accValue: ${i}`);
      e[s] = i;
    }
    return e;
  }
  _addRun(e) {
    return e;
  }
  async _threadAssistantStream(e, t, s) {
    return await this._createThreadAssistantStream(t, e, s);
  }
  async _runAssistantStream(e, t, s, r) {
    return await this._createAssistantStream(t, e, s, r);
  }
  async _runToolAssistantStream(e, t, s, r) {
    return await this._createToolAssistantStream(t, e, s, r);
  }
}
re = Ie, ve = function(e) {
  if (!this.ended) switch (S(this, Ke, e), o(this, B, "m", Es).call(this, e), e.event) {
    case "thread.created":
      break;
    case "thread.run.created":
    case "thread.run.queued":
    case "thread.run.in_progress":
    case "thread.run.requires_action":
    case "thread.run.completed":
    case "thread.run.incomplete":
    case "thread.run.failed":
    case "thread.run.cancelling":
    case "thread.run.cancelled":
    case "thread.run.expired":
      o(this, B, "m", Ns).call(this, e);
      break;
    case "thread.run.step.created":
    case "thread.run.step.in_progress":
    case "thread.run.step.delta":
    case "thread.run.step.completed":
    case "thread.run.step.failed":
    case "thread.run.step.cancelled":
    case "thread.run.step.expired":
      o(this, B, "m", ks).call(this, e);
      break;
    case "thread.message.created":
    case "thread.message.in_progress":
    case "thread.message.delta":
    case "thread.message.completed":
    case "thread.message.incomplete":
      o(this, B, "m", Is).call(this, e);
      break;
    case "error":
      throw new Error("Encountered an error event in event processing - errors should be processed earlier");
  }
}, Ce = function() {
  if (this.ended) throw new y("stream has ended, this shouldn't happen");
  if (!o(this, ie, "f")) throw Error("Final run has not been received");
  return o(this, ie, "f");
}, Is = function(e) {
  const [t, s] = o(this, B, "m", Ps).call(this, e, o(this, V, "f"));
  S(this, V, t), o(this, Xe, "f")[t.id] = t;
  for (const r of s) {
    const i = t.content[r.index];
    (i == null ? void 0 : i.type) == "text" && this._emit("textCreated", i.text);
  }
  switch (e.event) {
    case "thread.message.created":
      this._emit("messageCreated", e.data);
      break;
    case "thread.message.in_progress":
      break;
    case "thread.message.delta":
      if (this._emit("messageDelta", e.data.delta, t), e.data.delta.content) for (const r of e.data.delta.content) {
        if (r.type == "text" && r.text) {
          let i = r.text, a = t.content[r.index];
          if (a && a.type == "text") this._emit("textDelta", i, a.text);
          else throw Error("The snapshot associated with this text delta is not text or missing");
        }
        if (r.index != o(this, de, "f")) {
          if (o(this, ne, "f")) switch (o(this, ne, "f").type) {
            case "text":
              this._emit("textDone", o(this, ne, "f").text, o(this, V, "f"));
              break;
            case "image_file":
              this._emit("imageFileDone", o(this, ne, "f").image_file, o(this, V, "f"));
              break;
          }
          S(this, de, r.index);
        }
        S(this, ne, t.content[r.index]);
      }
      break;
    case "thread.message.completed":
    case "thread.message.incomplete":
      if (o(this, de, "f") !== void 0) {
        const r = e.data.content[o(this, de, "f")];
        if (r) switch (r.type) {
          case "image_file":
            this._emit("imageFileDone", r.image_file, o(this, V, "f"));
            break;
          case "text":
            this._emit("textDone", r.text, o(this, V, "f"));
            break;
        }
      }
      o(this, V, "f") && this._emit("messageDone", e.data), S(this, V, void 0);
  }
}, ks = function(e) {
  const t = o(this, B, "m", Os).call(this, e);
  switch (S(this, $e, t), e.event) {
    case "thread.run.step.created":
      this._emit("runStepCreated", e.data);
      break;
    case "thread.run.step.delta":
      const s = e.data.delta;
      if (s.step_details && s.step_details.type == "tool_calls" && s.step_details.tool_calls && t.step_details.type == "tool_calls") for (const i of s.step_details.tool_calls) i.index == o(this, rt, "f") ? this._emit("toolCallDelta", i, t.step_details.tool_calls[i.index]) : (o(this, J, "f") && this._emit("toolCallDone", o(this, J, "f")), S(this, rt, i.index), S(this, J, t.step_details.tool_calls[i.index]), o(this, J, "f") && this._emit("toolCallCreated", o(this, J, "f")));
      this._emit("runStepDelta", e.data.delta, t);
      break;
    case "thread.run.step.completed":
    case "thread.run.step.failed":
    case "thread.run.step.cancelled":
    case "thread.run.step.expired":
      S(this, $e, void 0), e.data.step_details.type == "tool_calls" && o(this, J, "f") && (this._emit("toolCallDone", o(this, J, "f")), S(this, J, void 0)), this._emit("runStepDone", e.data, t);
      break;
  }
}, Es = function(e) {
  o(this, Lt, "f").push(e), this._emit("event", e);
}, Os = function(e) {
  switch (e.event) {
    case "thread.run.step.created":
      return o(this, Q, "f")[e.data.id] = e.data, e.data;
    case "thread.run.step.delta":
      let t = o(this, Q, "f")[e.data.id];
      if (!t) throw Error("Received a RunStepDelta before creation of a snapshot");
      let s = e.data;
      if (s.delta) {
        const r = re.accumulateDelta(t, s.delta);
        o(this, Q, "f")[e.data.id] = r;
      }
      return o(this, Q, "f")[e.data.id];
    case "thread.run.step.completed":
    case "thread.run.step.failed":
    case "thread.run.step.cancelled":
    case "thread.run.step.expired":
    case "thread.run.step.in_progress":
      o(this, Q, "f")[e.data.id] = e.data;
      break;
  }
  if (o(this, Q, "f")[e.data.id]) return o(this, Q, "f")[e.data.id];
  throw new Error("No snapshot available");
}, Ps = function(e, t) {
  let s = [];
  switch (e.event) {
    case "thread.message.created":
      return [e.data, s];
    case "thread.message.delta":
      if (!t) throw Error("Received a delta with no existing snapshot (there should be one from message creation)");
      let r = e.data;
      if (r.delta.content) for (const i of r.delta.content) if (i.index in t.content) {
        let a = t.content[i.index];
        t.content[i.index] = o(this, B, "m", Ts).call(this, i, a);
      } else t.content[i.index] = i, s.push(i);
      return [t, s];
    case "thread.message.in_progress":
    case "thread.message.completed":
    case "thread.message.incomplete":
      if (t) return [t, s];
      throw Error("Received thread message event with no existing snapshot");
  }
  throw Error("Tried to accumulate a non-message event");
}, Ts = function(e, t) {
  return re.accumulateDelta(t, e);
}, Ns = function(e) {
  switch (S(this, Ve, e.data), e.event) {
    case "thread.run.created":
      break;
    case "thread.run.queued":
      break;
    case "thread.run.in_progress":
      break;
    case "thread.run.requires_action":
    case "thread.run.cancelled":
    case "thread.run.failed":
    case "thread.run.completed":
    case "thread.run.expired":
    case "thread.run.incomplete":
      S(this, ie, e.data), o(this, J, "f") && (this._emit("toolCallDone", o(this, J, "f")), S(this, J, void 0));
      break;
  }
};
let zt = class extends _ {
  constructor() {
    super(...arguments), this.steps = new Jn(this._client);
  }
  create(e, t, s) {
    const { include: r, ...i } = t;
    return this._client.post(c`/threads/${e}/runs`, { query: { include: r }, body: i, ...s, headers: p([{ "OpenAI-Beta": "assistants=v2" }, s == null ? void 0 : s.headers]), stream: t.stream ?? false, __synthesizeEventData: true });
  }
  retrieve(e, t, s) {
    const { thread_id: r } = t;
    return this._client.get(c`/threads/${r}/runs/${e}`, { ...s, headers: p([{ "OpenAI-Beta": "assistants=v2" }, s == null ? void 0 : s.headers]) });
  }
  update(e, t, s) {
    const { thread_id: r, ...i } = t;
    return this._client.post(c`/threads/${r}/runs/${e}`, { body: i, ...s, headers: p([{ "OpenAI-Beta": "assistants=v2" }, s == null ? void 0 : s.headers]) });
  }
  list(e, t = {}, s) {
    return this._client.getAPIList(c`/threads/${e}/runs`, R, { query: t, ...s, headers: p([{ "OpenAI-Beta": "assistants=v2" }, s == null ? void 0 : s.headers]) });
  }
  cancel(e, t, s) {
    const { thread_id: r } = t;
    return this._client.post(c`/threads/${r}/runs/${e}/cancel`, { ...s, headers: p([{ "OpenAI-Beta": "assistants=v2" }, s == null ? void 0 : s.headers]) });
  }
  async createAndPoll(e, t, s) {
    const r = await this.create(e, t, s);
    return await this.poll(r.id, { thread_id: e }, s);
  }
  createAndStream(e, t, s) {
    return Ie.createAssistantStream(e, this._client.beta.threads.runs, t, s);
  }
  async poll(e, t, s) {
    var _a;
    const r = p([s == null ? void 0 : s.headers, { "X-Stainless-Poll-Helper": "true", "X-Stainless-Custom-Poll-Interval": ((_a = s == null ? void 0 : s.pollIntervalMs) == null ? void 0 : _a.toString()) ?? void 0 }]);
    for (; ; ) {
      const { data: i, response: a } = await this.retrieve(e, t, { ...s, headers: { ...s == null ? void 0 : s.headers, ...r } }).withResponse();
      switch (i.status) {
        case "queued":
        case "in_progress":
        case "cancelling":
          let l = 5e3;
          if (s == null ? void 0 : s.pollIntervalMs) l = s.pollIntervalMs;
          else {
            const h = a.headers.get("openai-poll-after-ms");
            if (h) {
              const f = parseInt(h);
              isNaN(f) || (l = f);
            }
          }
          await Pe(l);
          break;
        case "requires_action":
        case "incomplete":
        case "cancelled":
        case "completed":
        case "failed":
        case "expired":
          return i;
      }
    }
  }
  stream(e, t, s) {
    return Ie.createAssistantStream(e, this._client.beta.threads.runs, t, s);
  }
  submitToolOutputs(e, t, s) {
    const { thread_id: r, ...i } = t;
    return this._client.post(c`/threads/${r}/runs/${e}/submit_tool_outputs`, { body: i, ...s, headers: p([{ "OpenAI-Beta": "assistants=v2" }, s == null ? void 0 : s.headers]), stream: t.stream ?? false, __synthesizeEventData: true });
  }
  async submitToolOutputsAndPoll(e, t, s) {
    const r = await this.submitToolOutputs(e, t, s);
    return await this.poll(r.id, t, s);
  }
  submitToolOutputsStream(e, t, s) {
    return Ie.createToolAssistantStream(e, this._client.beta.threads.runs, t, s);
  }
};
zt.Steps = Jn;
class ht extends _ {
  constructor() {
    super(...arguments), this.runs = new zt(this._client), this.messages = new Hn(this._client);
  }
  create(e = {}, t) {
    return this._client.post("/threads", { body: e, ...t, headers: p([{ "OpenAI-Beta": "assistants=v2" }, t == null ? void 0 : t.headers]) });
  }
  retrieve(e, t) {
    return this._client.get(c`/threads/${e}`, { ...t, headers: p([{ "OpenAI-Beta": "assistants=v2" }, t == null ? void 0 : t.headers]) });
  }
  update(e, t, s) {
    return this._client.post(c`/threads/${e}`, { body: t, ...s, headers: p([{ "OpenAI-Beta": "assistants=v2" }, s == null ? void 0 : s.headers]) });
  }
  delete(e, t) {
    return this._client.delete(c`/threads/${e}`, { ...t, headers: p([{ "OpenAI-Beta": "assistants=v2" }, t == null ? void 0 : t.headers]) });
  }
  createAndRun(e, t) {
    return this._client.post("/threads/runs", { body: e, ...t, headers: p([{ "OpenAI-Beta": "assistants=v2" }, t == null ? void 0 : t.headers]), stream: e.stream ?? false, __synthesizeEventData: true });
  }
  async createAndRunPoll(e, t) {
    const s = await this.createAndRun(e, t);
    return await this.runs.poll(s.id, { thread_id: s.thread_id }, t);
  }
  createAndRunStream(e, t) {
    return Ie.createThreadAssistantStream(e, this._client.beta.threads, t);
  }
}
ht.Runs = zt;
ht.Messages = Hn;
class pe extends _ {
  constructor() {
    super(...arguments), this.realtime = new ct(this._client), this.chatkit = new ut(this._client), this.assistants = new Dn(this._client), this.threads = new ht(this._client);
  }
}
pe.Realtime = ct;
pe.ChatKit = ut;
pe.Assistants = Dn;
pe.Threads = ht;
class Xn extends _ {
  create(e, t) {
    return this._client.post("/completions", { body: e, ...t, stream: e.stream ?? false });
  }
}
let Kn = class extends _ {
  retrieve(e, t, s) {
    const { container_id: r } = t;
    return this._client.get(c`/containers/${r}/files/${e}/content`, { ...s, headers: p([{ Accept: "application/binary" }, s == null ? void 0 : s.headers]), __binaryResponse: true });
  }
}, Qt = class extends _ {
  constructor() {
    super(...arguments), this.content = new Kn(this._client);
  }
  create(e, t, s) {
    return this._client.post(c`/containers/${e}/files`, Ee({ body: t, ...s }, this._client));
  }
  retrieve(e, t, s) {
    const { container_id: r } = t;
    return this._client.get(c`/containers/${r}/files/${e}`, s);
  }
  list(e, t = {}, s) {
    return this._client.getAPIList(c`/containers/${e}/files`, R, { query: t, ...s });
  }
  delete(e, t, s) {
    const { container_id: r } = t;
    return this._client.delete(c`/containers/${r}/files/${e}`, { ...s, headers: p([{ Accept: "*/*" }, s == null ? void 0 : s.headers]) });
  }
};
Qt.Content = Kn;
class Gt extends _ {
  constructor() {
    super(...arguments), this.files = new Qt(this._client);
  }
  create(e, t) {
    return this._client.post("/containers", { body: e, ...t });
  }
  retrieve(e, t) {
    return this._client.get(c`/containers/${e}`, t);
  }
  list(e = {}, t) {
    return this._client.getAPIList("/containers", R, { query: e, ...t });
  }
  delete(e, t) {
    return this._client.delete(c`/containers/${e}`, { ...t, headers: p([{ Accept: "*/*" }, t == null ? void 0 : t.headers]) });
  }
}
Gt.Files = Qt;
class Vn extends _ {
  create(e, t, s) {
    const { include: r, ...i } = t;
    return this._client.post(c`/conversations/${e}/items`, { query: { include: r }, body: i, ...s });
  }
  retrieve(e, t, s) {
    const { conversation_id: r, ...i } = t;
    return this._client.get(c`/conversations/${r}/items/${e}`, { query: i, ...s });
  }
  list(e, t = {}, s) {
    return this._client.getAPIList(c`/conversations/${e}/items`, ke, { query: t, ...s });
  }
  delete(e, t, s) {
    const { conversation_id: r } = t;
    return this._client.delete(c`/conversations/${r}/items/${e}`, s);
  }
}
class Yt extends _ {
  constructor() {
    super(...arguments), this.items = new Vn(this._client);
  }
  create(e = {}, t) {
    return this._client.post("/conversations", { body: e, ...t });
  }
  retrieve(e, t) {
    return this._client.get(c`/conversations/${e}`, t);
  }
  update(e, t, s) {
    return this._client.post(c`/conversations/${e}`, { body: t, ...s });
  }
  delete(e, t) {
    return this._client.delete(c`/conversations/${e}`, t);
  }
}
Yt.Items = Vn;
class zn extends _ {
  create(e, t) {
    const s = !!e.encoding_format;
    let r = s ? e.encoding_format : "base64";
    s && F(this._client).debug("embeddings/user defined encoding_format:", e.encoding_format);
    const i = this._client.post("/embeddings", { body: { ...e, encoding_format: r }, ...t });
    return s ? i : (F(this._client).debug("embeddings/decoding base64 embeddings from base64"), i._thenUnwrap((a) => (a && a.data && a.data.forEach((l) => {
      const h = l.embedding;
      l.embedding = xi(h);
    }), a)));
  }
}
class Qn extends _ {
  retrieve(e, t, s) {
    const { eval_id: r, run_id: i } = t;
    return this._client.get(c`/evals/${r}/runs/${i}/output_items/${e}`, s);
  }
  list(e, t, s) {
    const { eval_id: r, ...i } = t;
    return this._client.getAPIList(c`/evals/${r}/runs/${e}/output_items`, R, { query: i, ...s });
  }
}
class Zt extends _ {
  constructor() {
    super(...arguments), this.outputItems = new Qn(this._client);
  }
  create(e, t, s) {
    return this._client.post(c`/evals/${e}/runs`, { body: t, ...s });
  }
  retrieve(e, t, s) {
    const { eval_id: r } = t;
    return this._client.get(c`/evals/${r}/runs/${e}`, s);
  }
  list(e, t = {}, s) {
    return this._client.getAPIList(c`/evals/${e}/runs`, R, { query: t, ...s });
  }
  delete(e, t, s) {
    const { eval_id: r } = t;
    return this._client.delete(c`/evals/${r}/runs/${e}`, s);
  }
  cancel(e, t, s) {
    const { eval_id: r } = t;
    return this._client.post(c`/evals/${r}/runs/${e}`, s);
  }
}
Zt.OutputItems = Qn;
class es extends _ {
  constructor() {
    super(...arguments), this.runs = new Zt(this._client);
  }
  create(e, t) {
    return this._client.post("/evals", { body: e, ...t });
  }
  retrieve(e, t) {
    return this._client.get(c`/evals/${e}`, t);
  }
  update(e, t, s) {
    return this._client.post(c`/evals/${e}`, { body: t, ...s });
  }
  list(e = {}, t) {
    return this._client.getAPIList("/evals", R, { query: e, ...t });
  }
  delete(e, t) {
    return this._client.delete(c`/evals/${e}`, t);
  }
}
es.Runs = Zt;
let Gn = class extends _ {
  create(e, t) {
    return this._client.post("/files", fe({ body: e, ...t }, this._client));
  }
  retrieve(e, t) {
    return this._client.get(c`/files/${e}`, t);
  }
  list(e = {}, t) {
    return this._client.getAPIList("/files", R, { query: e, ...t });
  }
  delete(e, t) {
    return this._client.delete(c`/files/${e}`, t);
  }
  content(e, t) {
    return this._client.get(c`/files/${e}/content`, { ...t, headers: p([{ Accept: "application/binary" }, t == null ? void 0 : t.headers]), __binaryResponse: true });
  }
  async waitForProcessing(e, { pollInterval: t = 5e3, maxWait: s = 1800 * 1e3 } = {}) {
    const r = /* @__PURE__ */ new Set(["processed", "error", "deleted"]), i = Date.now();
    let a = await this.retrieve(e);
    for (; !a.status || !r.has(a.status); ) if (await Pe(t), a = await this.retrieve(e), Date.now() - i > s) throw new Dt({ message: `Giving up on waiting for file ${e} to finish processing after ${s} milliseconds.` });
    return a;
  }
};
class Yn extends _ {
}
let Zn = class extends _ {
  run(e, t) {
    return this._client.post("/fine_tuning/alpha/graders/run", { body: e, ...t });
  }
  validate(e, t) {
    return this._client.post("/fine_tuning/alpha/graders/validate", { body: e, ...t });
  }
};
class ts extends _ {
  constructor() {
    super(...arguments), this.graders = new Zn(this._client);
  }
}
ts.Graders = Zn;
class er extends _ {
  create(e, t, s) {
    return this._client.getAPIList(c`/fine_tuning/checkpoints/${e}/permissions`, lt, { body: t, method: "post", ...s });
  }
  retrieve(e, t = {}, s) {
    return this._client.get(c`/fine_tuning/checkpoints/${e}/permissions`, { query: t, ...s });
  }
  list(e, t = {}, s) {
    return this._client.getAPIList(c`/fine_tuning/checkpoints/${e}/permissions`, ke, { query: t, ...s });
  }
  delete(e, t, s) {
    const { fine_tuned_model_checkpoint: r } = t;
    return this._client.delete(c`/fine_tuning/checkpoints/${r}/permissions/${e}`, s);
  }
}
let ss = class extends _ {
  constructor() {
    super(...arguments), this.permissions = new er(this._client);
  }
};
ss.Permissions = er;
class tr extends _ {
  list(e, t = {}, s) {
    return this._client.getAPIList(c`/fine_tuning/jobs/${e}/checkpoints`, R, { query: t, ...s });
  }
}
class ns extends _ {
  constructor() {
    super(...arguments), this.checkpoints = new tr(this._client);
  }
  create(e, t) {
    return this._client.post("/fine_tuning/jobs", { body: e, ...t });
  }
  retrieve(e, t) {
    return this._client.get(c`/fine_tuning/jobs/${e}`, t);
  }
  list(e = {}, t) {
    return this._client.getAPIList("/fine_tuning/jobs", R, { query: e, ...t });
  }
  cancel(e, t) {
    return this._client.post(c`/fine_tuning/jobs/${e}/cancel`, t);
  }
  listEvents(e, t = {}, s) {
    return this._client.getAPIList(c`/fine_tuning/jobs/${e}/events`, R, { query: t, ...s });
  }
  pause(e, t) {
    return this._client.post(c`/fine_tuning/jobs/${e}/pause`, t);
  }
  resume(e, t) {
    return this._client.post(c`/fine_tuning/jobs/${e}/resume`, t);
  }
}
ns.Checkpoints = tr;
class me extends _ {
  constructor() {
    super(...arguments), this.methods = new Yn(this._client), this.jobs = new ns(this._client), this.checkpoints = new ss(this._client), this.alpha = new ts(this._client);
  }
}
me.Methods = Yn;
me.Jobs = ns;
me.Checkpoints = ss;
me.Alpha = ts;
class sr extends _ {
}
class rs extends _ {
  constructor() {
    super(...arguments), this.graderModels = new sr(this._client);
  }
}
rs.GraderModels = sr;
class nr extends _ {
  createVariation(e, t) {
    return this._client.post("/images/variations", fe({ body: e, ...t }, this._client));
  }
  edit(e, t) {
    return this._client.post("/images/edits", fe({ body: e, ...t, stream: e.stream ?? false }, this._client));
  }
  generate(e, t) {
    return this._client.post("/images/generations", { body: e, ...t, stream: e.stream ?? false });
  }
}
class rr extends _ {
  retrieve(e, t) {
    return this._client.get(c`/models/${e}`, t);
  }
  list(e) {
    return this._client.getAPIList("/models", lt, e);
  }
  delete(e, t) {
    return this._client.delete(c`/models/${e}`, t);
  }
}
class ir extends _ {
  create(e, t) {
    return this._client.post("/moderations", { body: e, ...t });
  }
}
class ar extends _ {
  accept(e, t, s) {
    return this._client.post(c`/realtime/calls/${e}/accept`, { body: t, ...s, headers: p([{ Accept: "*/*" }, s == null ? void 0 : s.headers]) });
  }
  hangup(e, t) {
    return this._client.post(c`/realtime/calls/${e}/hangup`, { ...t, headers: p([{ Accept: "*/*" }, t == null ? void 0 : t.headers]) });
  }
  refer(e, t, s) {
    return this._client.post(c`/realtime/calls/${e}/refer`, { body: t, ...s, headers: p([{ Accept: "*/*" }, s == null ? void 0 : s.headers]) });
  }
  reject(e, t = {}, s) {
    return this._client.post(c`/realtime/calls/${e}/reject`, { body: t, ...s, headers: p([{ Accept: "*/*" }, s == null ? void 0 : s.headers]) });
  }
}
class or extends _ {
  create(e, t) {
    return this._client.post("/realtime/client_secrets", { body: e, ...t });
  }
}
class dt extends _ {
  constructor() {
    super(...arguments), this.clientSecrets = new or(this._client), this.calls = new ar(this._client);
  }
}
dt.ClientSecrets = or;
dt.Calls = ar;
function vi(n, e) {
  return !e || !Ri(e) ? { ...n, output_parsed: null, output: n.output.map((t) => t.type === "function_call" ? { ...t, parsed_arguments: null } : t.type === "message" ? { ...t, content: t.content.map((s) => ({ ...s, parsed: null })) } : t) } : lr(n, e);
}
function lr(n, e) {
  const t = n.output.map((r) => {
    if (r.type === "function_call") return { ...r, parsed_arguments: ki(e, r) };
    if (r.type === "message") {
      const i = r.content.map((a) => a.type === "output_text" ? { ...a, parsed: Ci(e, a.text) } : a);
      return { ...r, content: i };
    }
    return r;
  }), s = Object.assign({}, n, { output: t });
  return Object.getOwnPropertyDescriptor(n, "output_text") || Ft(s), Object.defineProperty(s, "output_parsed", { enumerable: true, get() {
    for (const r of s.output) if (r.type === "message") {
      for (const i of r.content) if (i.type === "output_text" && i.parsed !== null) return i.parsed;
    }
    return null;
  } }), s;
}
function Ci(n, e) {
  var _a, _b, _c, _d;
  return ((_b = (_a = n.text) == null ? void 0 : _a.format) == null ? void 0 : _b.type) !== "json_schema" ? null : "$parseRaw" in ((_c = n.text) == null ? void 0 : _c.format) ? ((_d = n.text) == null ? void 0 : _d.format).$parseRaw(e) : JSON.parse(e);
}
function Ri(n) {
  var _a;
  return !!qt((_a = n.text) == null ? void 0 : _a.format);
}
function $i(n) {
  return (n == null ? void 0 : n.$brand) === "auto-parseable-tool";
}
function Ii(n, e) {
  return n.find((t) => t.type === "function" && t.name === e);
}
function ki(n, e) {
  const t = Ii(n.tools ?? [], e.name);
  return { ...e, ...e, parsed_arguments: $i(t) ? t.$parseRaw(e.arguments) : (t == null ? void 0 : t.strict) ? JSON.parse(e.arguments) : null };
}
function Ft(n) {
  const e = [];
  for (const t of n.output) if (t.type === "message") for (const s of t.content) s.type === "output_text" && e.push(s.text);
  n.output_text = e.join("");
}
var le, Ue, te, We, Ms, Ls, Fs, Bs;
class is extends Jt {
  constructor(e) {
    super(), le.add(this), Ue.set(this, void 0), te.set(this, void 0), We.set(this, void 0), S(this, Ue, e);
  }
  static createResponse(e, t, s) {
    const r = new is(t);
    return r._run(() => r._createOrRetrieveResponse(e, t, { ...s, headers: { ...s == null ? void 0 : s.headers, "X-Stainless-Helper-Method": "stream" } })), r;
  }
  async _createOrRetrieveResponse(e, t, s) {
    var _a;
    const r = s == null ? void 0 : s.signal;
    r && (r.aborted && this.controller.abort(), r.addEventListener("abort", () => this.controller.abort())), o(this, le, "m", Ms).call(this);
    let i, a = null;
    "response_id" in t ? (i = await e.responses.retrieve(t.response_id, { stream: true }, { ...s, signal: this.controller.signal, stream: true }), a = t.starting_after ?? null) : i = await e.responses.create({ ...t, stream: true }, { ...s, signal: this.controller.signal }), this._connected();
    for await (const l of i) o(this, le, "m", Ls).call(this, l, a);
    if ((_a = i.controller.signal) == null ? void 0 : _a.aborted) throw new K();
    return o(this, le, "m", Fs).call(this);
  }
  [(Ue = /* @__PURE__ */ new WeakMap(), te = /* @__PURE__ */ new WeakMap(), We = /* @__PURE__ */ new WeakMap(), le = /* @__PURE__ */ new WeakSet(), Ms = function() {
    this.ended || S(this, te, void 0);
  }, Ls = function(t, s) {
    if (this.ended) return;
    const r = (a, l) => {
      (s == null || l.sequence_number > s) && this._emit(a, l);
    }, i = o(this, le, "m", Bs).call(this, t);
    switch (r("event", t), t.type) {
      case "response.output_text.delta": {
        const a = i.output[t.output_index];
        if (!a) throw new y(`missing output at index ${t.output_index}`);
        if (a.type === "message") {
          const l = a.content[t.content_index];
          if (!l) throw new y(`missing content at index ${t.content_index}`);
          if (l.type !== "output_text") throw new y(`expected content to be 'output_text', got ${l.type}`);
          r("response.output_text.delta", { ...t, snapshot: l.text });
        }
        break;
      }
      case "response.function_call_arguments.delta": {
        const a = i.output[t.output_index];
        if (!a) throw new y(`missing output at index ${t.output_index}`);
        a.type === "function_call" && r("response.function_call_arguments.delta", { ...t, snapshot: a.arguments });
        break;
      }
      default:
        r(t.type, t);
        break;
    }
  }, Fs = function() {
    if (this.ended) throw new y("stream has ended, this shouldn't happen");
    const t = o(this, te, "f");
    if (!t) throw new y("request ended without sending any events");
    S(this, te, void 0);
    const s = Ei(t, o(this, Ue, "f"));
    return S(this, We, s), s;
  }, Bs = function(t) {
    var _a;
    let s = o(this, te, "f");
    if (!s) {
      if (t.type !== "response.created") throw new y(`When snapshot hasn't been set yet, expected 'response.created' event, got ${t.type}`);
      return s = S(this, te, t.response), s;
    }
    switch (t.type) {
      case "response.output_item.added": {
        s.output.push(t.item);
        break;
      }
      case "response.content_part.added": {
        const r = s.output[t.output_index];
        if (!r) throw new y(`missing output at index ${t.output_index}`);
        const i = r.type, a = t.part;
        i === "message" && a.type !== "reasoning_text" ? r.content.push(a) : i === "reasoning" && a.type === "reasoning_text" && (r.content || (r.content = []), r.content.push(a));
        break;
      }
      case "response.output_text.delta": {
        const r = s.output[t.output_index];
        if (!r) throw new y(`missing output at index ${t.output_index}`);
        if (r.type === "message") {
          const i = r.content[t.content_index];
          if (!i) throw new y(`missing content at index ${t.content_index}`);
          if (i.type !== "output_text") throw new y(`expected content to be 'output_text', got ${i.type}`);
          i.text += t.delta;
        }
        break;
      }
      case "response.function_call_arguments.delta": {
        const r = s.output[t.output_index];
        if (!r) throw new y(`missing output at index ${t.output_index}`);
        r.type === "function_call" && (r.arguments += t.delta);
        break;
      }
      case "response.reasoning_text.delta": {
        const r = s.output[t.output_index];
        if (!r) throw new y(`missing output at index ${t.output_index}`);
        if (r.type === "reasoning") {
          const i = (_a = r.content) == null ? void 0 : _a[t.content_index];
          if (!i) throw new y(`missing content at index ${t.content_index}`);
          if (i.type !== "reasoning_text") throw new y(`expected content to be 'reasoning_text', got ${i.type}`);
          i.text += t.delta;
        }
        break;
      }
      case "response.completed": {
        S(this, te, t.response);
        break;
      }
    }
    return s;
  }, Symbol.asyncIterator)]() {
    const e = [], t = [];
    let s = false;
    return this.on("event", (r) => {
      const i = t.shift();
      i ? i.resolve(r) : e.push(r);
    }), this.on("end", () => {
      s = true;
      for (const r of t) r.resolve(void 0);
      t.length = 0;
    }), this.on("abort", (r) => {
      s = true;
      for (const i of t) i.reject(r);
      t.length = 0;
    }), this.on("error", (r) => {
      s = true;
      for (const i of t) i.reject(r);
      t.length = 0;
    }), { next: async () => e.length ? { value: e.shift(), done: false } : s ? { value: void 0, done: true } : new Promise((i, a) => t.push({ resolve: i, reject: a })).then((i) => i ? { value: i, done: false } : { value: void 0, done: true }), return: async () => (this.abort(), { value: void 0, done: true }) };
  }
  async finalResponse() {
    await this.done();
    const e = o(this, We, "f");
    if (!e) throw new y("stream ended without producing a ChatCompletion");
    return e;
  }
}
function Ei(n, e) {
  return vi(n, e);
}
class cr extends _ {
  list(e, t = {}, s) {
    return this._client.getAPIList(c`/responses/${e}/input_items`, R, { query: t, ...s });
  }
}
class ur extends _ {
  count(e = {}, t) {
    return this._client.post("/responses/input_tokens", { body: e, ...t });
  }
}
class ft extends _ {
  constructor() {
    super(...arguments), this.inputItems = new cr(this._client), this.inputTokens = new ur(this._client);
  }
  create(e, t) {
    return this._client.post("/responses", { body: e, ...t, stream: e.stream ?? false })._thenUnwrap((s) => ("object" in s && s.object === "response" && Ft(s), s));
  }
  retrieve(e, t = {}, s) {
    return this._client.get(c`/responses/${e}`, { query: t, ...s, stream: (t == null ? void 0 : t.stream) ?? false })._thenUnwrap((r) => ("object" in r && r.object === "response" && Ft(r), r));
  }
  delete(e, t) {
    return this._client.delete(c`/responses/${e}`, { ...t, headers: p([{ Accept: "*/*" }, t == null ? void 0 : t.headers]) });
  }
  parse(e, t) {
    return this._client.responses.create(e, t)._thenUnwrap((s) => lr(s, e));
  }
  stream(e, t) {
    return is.createResponse(this._client, e, t);
  }
  cancel(e, t) {
    return this._client.post(c`/responses/${e}/cancel`, t);
  }
  compact(e, t) {
    return this._client.post("/responses/compact", { body: e, ...t });
  }
}
ft.InputItems = cr;
ft.InputTokens = ur;
let hr = class extends _ {
  retrieve(e, t) {
    return this._client.get(c`/skills/${e}/content`, { ...t, headers: p([{ Accept: "application/binary" }, t == null ? void 0 : t.headers]), __binaryResponse: true });
  }
};
class dr extends _ {
  retrieve(e, t, s) {
    const { skill_id: r } = t;
    return this._client.get(c`/skills/${r}/versions/${e}/content`, { ...s, headers: p([{ Accept: "application/binary" }, s == null ? void 0 : s.headers]), __binaryResponse: true });
  }
}
class as extends _ {
  constructor() {
    super(...arguments), this.content = new dr(this._client);
  }
  create(e, t = {}, s) {
    return this._client.post(c`/skills/${e}/versions`, Ee({ body: t, ...s }, this._client));
  }
  retrieve(e, t, s) {
    const { skill_id: r } = t;
    return this._client.get(c`/skills/${r}/versions/${e}`, s);
  }
  list(e, t = {}, s) {
    return this._client.getAPIList(c`/skills/${e}/versions`, R, { query: t, ...s });
  }
  delete(e, t, s) {
    const { skill_id: r } = t;
    return this._client.delete(c`/skills/${r}/versions/${e}`, s);
  }
}
as.Content = dr;
class pt extends _ {
  constructor() {
    super(...arguments), this.content = new hr(this._client), this.versions = new as(this._client);
  }
  create(e = {}, t) {
    return this._client.post("/skills", Ee({ body: e, ...t }, this._client));
  }
  retrieve(e, t) {
    return this._client.get(c`/skills/${e}`, t);
  }
  update(e, t, s) {
    return this._client.post(c`/skills/${e}`, { body: t, ...s });
  }
  list(e = {}, t) {
    return this._client.getAPIList("/skills", R, { query: e, ...t });
  }
  delete(e, t) {
    return this._client.delete(c`/skills/${e}`, t);
  }
}
pt.Content = hr;
pt.Versions = as;
class fr extends _ {
  create(e, t, s) {
    return this._client.post(c`/uploads/${e}/parts`, fe({ body: t, ...s }, this._client));
  }
}
class os extends _ {
  constructor() {
    super(...arguments), this.parts = new fr(this._client);
  }
  create(e, t) {
    return this._client.post("/uploads", { body: e, ...t });
  }
  cancel(e, t) {
    return this._client.post(c`/uploads/${e}/cancel`, t);
  }
  complete(e, t, s) {
    return this._client.post(c`/uploads/${e}/complete`, { body: t, ...s });
  }
}
os.Parts = fr;
const Oi = async (n) => {
  const e = await Promise.allSettled(n), t = e.filter((r) => r.status === "rejected");
  if (t.length) {
    for (const r of t) console.error(r.reason);
    throw new Error(`${t.length} promise(s) failed - see the above errors`);
  }
  const s = [];
  for (const r of e) r.status === "fulfilled" && s.push(r.value);
  return s;
};
class pr extends _ {
  create(e, t, s) {
    return this._client.post(c`/vector_stores/${e}/file_batches`, { body: t, ...s, headers: p([{ "OpenAI-Beta": "assistants=v2" }, s == null ? void 0 : s.headers]) });
  }
  retrieve(e, t, s) {
    const { vector_store_id: r } = t;
    return this._client.get(c`/vector_stores/${r}/file_batches/${e}`, { ...s, headers: p([{ "OpenAI-Beta": "assistants=v2" }, s == null ? void 0 : s.headers]) });
  }
  cancel(e, t, s) {
    const { vector_store_id: r } = t;
    return this._client.post(c`/vector_stores/${r}/file_batches/${e}/cancel`, { ...s, headers: p([{ "OpenAI-Beta": "assistants=v2" }, s == null ? void 0 : s.headers]) });
  }
  async createAndPoll(e, t, s) {
    const r = await this.create(e, t);
    return await this.poll(e, r.id, s);
  }
  listFiles(e, t, s) {
    const { vector_store_id: r, ...i } = t;
    return this._client.getAPIList(c`/vector_stores/${r}/file_batches/${e}/files`, R, { query: i, ...s, headers: p([{ "OpenAI-Beta": "assistants=v2" }, s == null ? void 0 : s.headers]) });
  }
  async poll(e, t, s) {
    var _a;
    const r = p([s == null ? void 0 : s.headers, { "X-Stainless-Poll-Helper": "true", "X-Stainless-Custom-Poll-Interval": ((_a = s == null ? void 0 : s.pollIntervalMs) == null ? void 0 : _a.toString()) ?? void 0 }]);
    for (; ; ) {
      const { data: i, response: a } = await this.retrieve(t, { vector_store_id: e }, { ...s, headers: r }).withResponse();
      switch (i.status) {
        case "in_progress":
          let l = 5e3;
          if (s == null ? void 0 : s.pollIntervalMs) l = s.pollIntervalMs;
          else {
            const h = a.headers.get("openai-poll-after-ms");
            if (h) {
              const f = parseInt(h);
              isNaN(f) || (l = f);
            }
          }
          await Pe(l);
          break;
        case "failed":
        case "cancelled":
        case "completed":
          return i;
      }
    }
  }
  async uploadAndPoll(e, { files: t, fileIds: s = [] }, r) {
    if (t == null || t.length == 0) throw new Error("No `files` provided to process. If you've already uploaded files you should use `.createAndPoll()` instead");
    const i = (r == null ? void 0 : r.maxConcurrency) ?? 5, a = Math.min(i, t.length), l = this._client, h = t.values(), f = [...s];
    async function m(g) {
      for (let u of g) {
        const A = await l.files.create({ file: u, purpose: "assistants" }, r);
        f.push(A.id);
      }
    }
    const d = Array(a).fill(h).map(m);
    return await Oi(d), await this.createAndPoll(e, { file_ids: f });
  }
}
class mr extends _ {
  create(e, t, s) {
    return this._client.post(c`/vector_stores/${e}/files`, { body: t, ...s, headers: p([{ "OpenAI-Beta": "assistants=v2" }, s == null ? void 0 : s.headers]) });
  }
  retrieve(e, t, s) {
    const { vector_store_id: r } = t;
    return this._client.get(c`/vector_stores/${r}/files/${e}`, { ...s, headers: p([{ "OpenAI-Beta": "assistants=v2" }, s == null ? void 0 : s.headers]) });
  }
  update(e, t, s) {
    const { vector_store_id: r, ...i } = t;
    return this._client.post(c`/vector_stores/${r}/files/${e}`, { body: i, ...s, headers: p([{ "OpenAI-Beta": "assistants=v2" }, s == null ? void 0 : s.headers]) });
  }
  list(e, t = {}, s) {
    return this._client.getAPIList(c`/vector_stores/${e}/files`, R, { query: t, ...s, headers: p([{ "OpenAI-Beta": "assistants=v2" }, s == null ? void 0 : s.headers]) });
  }
  delete(e, t, s) {
    const { vector_store_id: r } = t;
    return this._client.delete(c`/vector_stores/${r}/files/${e}`, { ...s, headers: p([{ "OpenAI-Beta": "assistants=v2" }, s == null ? void 0 : s.headers]) });
  }
  async createAndPoll(e, t, s) {
    const r = await this.create(e, t, s);
    return await this.poll(e, r.id, s);
  }
  async poll(e, t, s) {
    var _a;
    const r = p([s == null ? void 0 : s.headers, { "X-Stainless-Poll-Helper": "true", "X-Stainless-Custom-Poll-Interval": ((_a = s == null ? void 0 : s.pollIntervalMs) == null ? void 0 : _a.toString()) ?? void 0 }]);
    for (; ; ) {
      const i = await this.retrieve(t, { vector_store_id: e }, { ...s, headers: r }).withResponse(), a = i.data;
      switch (a.status) {
        case "in_progress":
          let l = 5e3;
          if (s == null ? void 0 : s.pollIntervalMs) l = s.pollIntervalMs;
          else {
            const h = i.response.headers.get("openai-poll-after-ms");
            if (h) {
              const f = parseInt(h);
              isNaN(f) || (l = f);
            }
          }
          await Pe(l);
          break;
        case "failed":
        case "completed":
          return a;
      }
    }
  }
  async upload(e, t, s) {
    const r = await this._client.files.create({ file: t, purpose: "assistants" }, s);
    return this.create(e, { file_id: r.id }, s);
  }
  async uploadAndPoll(e, t, s) {
    const r = await this.upload(e, t, s);
    return await this.poll(e, r.id, s);
  }
  content(e, t, s) {
    const { vector_store_id: r } = t;
    return this._client.getAPIList(c`/vector_stores/${r}/files/${e}/content`, lt, { ...s, headers: p([{ "OpenAI-Beta": "assistants=v2" }, s == null ? void 0 : s.headers]) });
  }
}
class mt extends _ {
  constructor() {
    super(...arguments), this.files = new mr(this._client), this.fileBatches = new pr(this._client);
  }
  create(e, t) {
    return this._client.post("/vector_stores", { body: e, ...t, headers: p([{ "OpenAI-Beta": "assistants=v2" }, t == null ? void 0 : t.headers]) });
  }
  retrieve(e, t) {
    return this._client.get(c`/vector_stores/${e}`, { ...t, headers: p([{ "OpenAI-Beta": "assistants=v2" }, t == null ? void 0 : t.headers]) });
  }
  update(e, t, s) {
    return this._client.post(c`/vector_stores/${e}`, { body: t, ...s, headers: p([{ "OpenAI-Beta": "assistants=v2" }, s == null ? void 0 : s.headers]) });
  }
  list(e = {}, t) {
    return this._client.getAPIList("/vector_stores", R, { query: e, ...t, headers: p([{ "OpenAI-Beta": "assistants=v2" }, t == null ? void 0 : t.headers]) });
  }
  delete(e, t) {
    return this._client.delete(c`/vector_stores/${e}`, { ...t, headers: p([{ "OpenAI-Beta": "assistants=v2" }, t == null ? void 0 : t.headers]) });
  }
  search(e, t, s) {
    return this._client.getAPIList(c`/vector_stores/${e}/search`, lt, { body: t, method: "post", ...s, headers: p([{ "OpenAI-Beta": "assistants=v2" }, s == null ? void 0 : s.headers]) });
  }
}
mt.Files = mr;
mt.FileBatches = pr;
class _r extends _ {
  create(e, t) {
    return this._client.post("/videos", Ee({ body: e, ...t }, this._client));
  }
  retrieve(e, t) {
    return this._client.get(c`/videos/${e}`, t);
  }
  list(e = {}, t) {
    return this._client.getAPIList("/videos", ke, { query: e, ...t });
  }
  delete(e, t) {
    return this._client.delete(c`/videos/${e}`, t);
  }
  downloadContent(e, t = {}, s) {
    return this._client.get(c`/videos/${e}/content`, { query: t, ...s, headers: p([{ Accept: "application/binary" }, s == null ? void 0 : s.headers]), __binaryResponse: true });
  }
  remix(e, t, s) {
    return this._client.post(c`/videos/${e}/remix`, Ee({ body: t, ...s }, this._client));
  }
}
var he, gr, ze;
class wr extends _ {
  constructor() {
    super(...arguments), he.add(this);
  }
  async unwrap(e, t, s = this._client.webhookSecret, r = 300) {
    return await this.verifySignature(e, t, s, r), JSON.parse(e);
  }
  async verifySignature(e, t, s = this._client.webhookSecret, r = 300) {
    if (typeof crypto > "u" || typeof crypto.subtle.importKey != "function" || typeof crypto.subtle.verify != "function") throw new Error("Webhook signature verification is only supported when the `crypto` global is defined");
    o(this, he, "m", gr).call(this, s);
    const i = p([t]).values, a = o(this, he, "m", ze).call(this, i, "webhook-signature"), l = o(this, he, "m", ze).call(this, i, "webhook-timestamp"), h = o(this, he, "m", ze).call(this, i, "webhook-id"), f = parseInt(l, 10);
    if (isNaN(f)) throw new ge("Invalid webhook timestamp format");
    const m = Math.floor(Date.now() / 1e3);
    if (m - f > r) throw new ge("Webhook timestamp is too old");
    if (f > m + r) throw new ge("Webhook timestamp is too new");
    const d = a.split(" ").map((b) => b.startsWith("v1,") ? b.substring(3) : b), g = s.startsWith("whsec_") ? Buffer.from(s.replace("whsec_", ""), "base64") : Buffer.from(s, "utf-8"), u = h ? `${h}.${l}.${e}` : `${l}.${e}`, A = await crypto.subtle.importKey("raw", g, { name: "HMAC", hash: "SHA-256" }, false, ["verify"]);
    for (const b of d) try {
      const I = Buffer.from(b, "base64");
      if (await crypto.subtle.verify("HMAC", A, I, new TextEncoder().encode(u))) return;
    } catch {
      continue;
    }
    throw new ge("The given webhook signature does not match the expected signature");
  }
}
he = /* @__PURE__ */ new WeakSet(), gr = function(e) {
  if (typeof e != "string" || e.length === 0) throw new Error("The webhook secret must either be set using the env var, OPENAI_WEBHOOK_SECRET, on the client class, OpenAI({ webhookSecret: '123' }), or passed to this function");
}, ze = function(e, t) {
  if (!e) throw new Error("Headers are required");
  const s = e.get(t);
  if (s == null) throw new Error(`Missing required header: ${t}`);
  return s;
};
var Bt, ls, Qe, yr;
class x {
  constructor({ baseURL: e = oe("OPENAI_BASE_URL"), apiKey: t = oe("OPENAI_API_KEY"), organization: s = oe("OPENAI_ORG_ID") ?? null, project: r = oe("OPENAI_PROJECT_ID") ?? null, webhookSecret: i = oe("OPENAI_WEBHOOK_SECRET") ?? null, ...a } = {}) {
    if (Bt.add(this), Qe.set(this, void 0), this.completions = new Xn(this), this.chat = new Vt(this), this.embeddings = new zn(this), this.files = new Gn(this), this.images = new nr(this), this.audio = new Ne(this), this.moderations = new ir(this), this.models = new rr(this), this.fineTuning = new me(this), this.graders = new rs(this), this.vectorStores = new mt(this), this.webhooks = new wr(this), this.beta = new pe(this), this.batches = new Bn(this), this.uploads = new os(this), this.responses = new ft(this), this.realtime = new dt(this), this.conversations = new Yt(this), this.evals = new es(this), this.containers = new Gt(this), this.skills = new pt(this), this.videos = new _r(this), t === void 0) throw new y("Missing credentials. Please pass an `apiKey`, or set the `OPENAI_API_KEY` environment variable.");
    const l = { apiKey: t, organization: s, project: r, webhookSecret: i, ...a, baseURL: e || "https://api.openai.com/v1" };
    if (!l.dangerouslyAllowBrowser && Or()) throw new y(`It looks like you're running in a browser-like environment.

This is disabled by default, as it risks exposing your secret API credentials to attackers.
If you understand the risks and have appropriate mitigations in place,
you can set the \`dangerouslyAllowBrowser\` option to \`true\`, e.g.,

new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety
`);
    this.baseURL = l.baseURL, this.timeout = l.timeout ?? ls.DEFAULT_TIMEOUT, this.logger = l.logger ?? console;
    const h = "warn";
    this.logLevel = h, this.logLevel = xs(l.logLevel, "ClientOptions.logLevel", this) ?? xs(oe("OPENAI_LOG"), "process.env['OPENAI_LOG']", this) ?? h, this.fetchOptions = l.fetchOptions, this.maxRetries = l.maxRetries ?? 2, this.fetch = l.fetch ?? Lr(), S(this, Qe, Br), this._options = l, this.apiKey = typeof t == "string" ? t : "Missing Key", this.organization = s, this.project = r, this.webhookSecret = i;
  }
  withOptions(e) {
    return new this.constructor({ ...this._options, baseURL: this.baseURL, maxRetries: this.maxRetries, timeout: this.timeout, logger: this.logger, logLevel: this.logLevel, fetch: this.fetch, fetchOptions: this.fetchOptions, apiKey: this.apiKey, organization: this.organization, project: this.project, webhookSecret: this.webhookSecret, ...e });
  }
  defaultQuery() {
    return this._options.defaultQuery;
  }
  validateHeaders({ values: e, nulls: t }) {
  }
  async authHeaders(e) {
    return p([{ Authorization: `Bearer ${this.apiKey}` }]);
  }
  stringifyQuery(e) {
    return Jr(e);
  }
  getUserAgent() {
    return `${this.constructor.name}/JS ${ce}`;
  }
  defaultIdempotencyKey() {
    return `stainless-node-retry-${Ds()}`;
  }
  makeStatusError(e, t, s, r) {
    return D.generate(e, t, s, r);
  }
  async _callApiKey() {
    const e = this._options.apiKey;
    if (typeof e != "function") return false;
    let t;
    try {
      t = await e();
    } catch (s) {
      throw s instanceof y ? s : new y(`Failed to get token from 'apiKey' function: ${s.message}`, { cause: s });
    }
    if (typeof t != "string" || !t) throw new y(`Expected 'apiKey' function argument to return a string but it returned ${t}`);
    return this.apiKey = t, true;
  }
  buildURL(e, t, s) {
    const r = !o(this, Bt, "m", yr).call(this) && s || this.baseURL, i = Rr(e) ? new URL(e) : new URL(r + (r.endsWith("/") && e.startsWith("/") ? e.slice(1) : e)), a = this.defaultQuery();
    return $r(a) || (t = { ...a, ...t }), typeof t == "object" && t && !Array.isArray(t) && (i.search = this.stringifyQuery(t)), i.toString();
  }
  async prepareOptions(e) {
    await this._callApiKey();
  }
  async prepareRequest(e, { url: t, options: s }) {
  }
  get(e, t) {
    return this.methodRequest("get", e, t);
  }
  post(e, t) {
    return this.methodRequest("post", e, t);
  }
  patch(e, t) {
    return this.methodRequest("patch", e, t);
  }
  put(e, t) {
    return this.methodRequest("put", e, t);
  }
  delete(e, t) {
    return this.methodRequest("delete", e, t);
  }
  methodRequest(e, t, s) {
    return this.request(Promise.resolve(s).then((r) => ({ method: e, path: t, ...r })));
  }
  request(e, t = null) {
    return new ot(this, this.makeRequest(e, t, void 0));
  }
  async makeRequest(e, t, s) {
    var _a, _b;
    const r = await e, i = r.maxRetries ?? this.maxRetries;
    t == null && (t = i), await this.prepareOptions(r);
    const { req: a, url: l, timeout: h } = await this.buildRequest(r, { retryCount: i - t });
    await this.prepareRequest(a, { url: l, options: r });
    const f = "log_" + (Math.random() * (1 << 24) | 0).toString(16).padStart(6, "0"), m = s === void 0 ? "" : `, retryOf: ${s}`, d = Date.now();
    if (F(this).debug(`[${f}] sending request`, se({ retryOfRequestLogID: s, method: r.method, url: l, options: r, headers: a.headers })), (_a = r.signal) == null ? void 0 : _a.aborted) throw new K();
    const g = new AbortController(), u = await this.fetchWithTimeout(l, a, h, g).catch(Rt), A = Date.now();
    if (u instanceof globalThis.Error) {
      const v = `retrying, ${t} attempts remaining`;
      if ((_b = r.signal) == null ? void 0 : _b.aborted) throw new K();
      const w = Ct(u) || /timed? ?out/i.test(String(u) + ("cause" in u ? String(u.cause) : ""));
      if (t) return F(this).info(`[${f}] connection ${w ? "timed out" : "failed"} - ${v}`), F(this).debug(`[${f}] connection ${w ? "timed out" : "failed"} (${v})`, se({ retryOfRequestLogID: s, url: l, durationMs: A - d, message: u.message })), this.retryRequest(r, t, s ?? f);
      throw F(this).info(`[${f}] connection ${w ? "timed out" : "failed"} - error; no more retries left`), F(this).debug(`[${f}] connection ${w ? "timed out" : "failed"} (error; no more retries left)`, se({ retryOfRequestLogID: s, url: l, durationMs: A - d, message: u.message })), w ? new Dt() : new it({ cause: u });
    }
    const b = [...u.headers.entries()].filter(([v]) => v === "x-request-id").map(([v, w]) => ", " + v + ": " + JSON.stringify(w)).join(""), I = `[${f}${m}${b}] ${a.method} ${l} ${u.ok ? "succeeded" : "failed"} with status ${u.status} in ${A - d}ms`;
    if (!u.ok) {
      const v = await this.shouldRetry(u);
      if (t && v) {
        const $ = `retrying, ${t} attempts remaining`;
        return await Fr(u.body), F(this).info(`${I} - ${$}`), F(this).debug(`[${f}] response error (${$})`, se({ retryOfRequestLogID: s, url: u.url, status: u.status, headers: u.headers, durationMs: A - d })), this.retryRequest(r, t, s ?? f, u.headers);
      }
      const w = v ? "error; no more retries left" : "error; not retryable";
      F(this).info(`${I} - ${w}`);
      const T = await u.text().catch(($) => Rt($).message), C = Er(T), X = C ? void 0 : T;
      throw F(this).debug(`[${f}] response error (${w})`, se({ retryOfRequestLogID: s, url: u.url, status: u.status, headers: u.headers, message: X, durationMs: Date.now() - d })), this.makeStatusError(u.status, C, X, u.headers);
    }
    return F(this).info(I), F(this).debug(`[${f}] response start`, se({ retryOfRequestLogID: s, url: u.url, status: u.status, headers: u.headers, durationMs: A - d })), { response: u, options: r, controller: g, requestLogID: f, retryOfRequestLogID: s, startTime: d };
  }
  getAPIList(e, t, s) {
    return this.requestAPIList(t, s && "then" in s ? s.then((r) => ({ method: "get", path: e, ...r })) : { method: "get", path: e, ...s });
  }
  requestAPIList(e, t) {
    const s = this.makeRequest(t, null, void 0);
    return new ei(this, s, e);
  }
  async fetchWithTimeout(e, t, s, r) {
    const { signal: i, method: a, ...l } = t || {}, h = this._makeAbort(r);
    i && i.addEventListener("abort", h, { once: true });
    const f = setTimeout(h, s), m = globalThis.ReadableStream && l.body instanceof globalThis.ReadableStream || typeof l.body == "object" && l.body !== null && Symbol.asyncIterator in l.body, d = { signal: r.signal, ...m ? { duplex: "half" } : {}, method: "GET", ...l };
    a && (d.method = a.toUpperCase());
    try {
      return await this.fetch.call(void 0, e, d);
    } finally {
      clearTimeout(f);
    }
  }
  async shouldRetry(e) {
    const t = e.headers.get("x-should-retry");
    return t === "true" ? true : t === "false" ? false : e.status === 408 || e.status === 409 || e.status === 429 || e.status >= 500;
  }
  async retryRequest(e, t, s, r) {
    let i;
    const a = r == null ? void 0 : r.get("retry-after-ms");
    if (a) {
      const h = parseFloat(a);
      Number.isNaN(h) || (i = h);
    }
    const l = r == null ? void 0 : r.get("retry-after");
    if (l && !i) {
      const h = parseFloat(l);
      Number.isNaN(h) ? i = Date.parse(l) - Date.now() : i = h * 1e3;
    }
    if (i === void 0) {
      const h = e.maxRetries ?? this.maxRetries;
      i = this.calculateDefaultRetryTimeoutMillis(t, h);
    }
    return await Pe(i), this.makeRequest(e, t - 1, s);
  }
  calculateDefaultRetryTimeoutMillis(e, t) {
    const i = t - e, a = Math.min(0.5 * Math.pow(2, i), 8), l = 1 - Math.random() * 0.25;
    return a * l * 1e3;
  }
  async buildRequest(e, { retryCount: t = 0 } = {}) {
    const s = { ...e }, { method: r, path: i, query: a, defaultBaseURL: l } = s, h = this.buildURL(i, a, l);
    "timeout" in s && kr("timeout", s.timeout), s.timeout = s.timeout ?? this.timeout;
    const { bodyHeaders: f, body: m } = this.buildBody({ options: s }), d = await this.buildHeaders({ options: e, method: r, bodyHeaders: f, retryCount: t });
    return { req: { method: r, headers: d, ...s.signal && { signal: s.signal }, ...globalThis.ReadableStream && m instanceof globalThis.ReadableStream && { duplex: "half" }, ...m && { body: m }, ...this.fetchOptions ?? {}, ...s.fetchOptions ?? {} }, url: h, timeout: s.timeout };
  }
  async buildHeaders({ options: e, method: t, bodyHeaders: s, retryCount: r }) {
    let i = {};
    this.idempotencyHeader && t !== "get" && (e.idempotencyKey || (e.idempotencyKey = this.defaultIdempotencyKey()), i[this.idempotencyHeader] = e.idempotencyKey);
    const a = p([i, { Accept: "application/json", "User-Agent": this.getUserAgent(), "X-Stainless-Retry-Count": String(r), ...e.timeout ? { "X-Stainless-Timeout": String(Math.trunc(e.timeout / 1e3)) } : {}, ...Mr(), "OpenAI-Organization": this.organization, "OpenAI-Project": this.project }, await this.authHeaders(e), this._options.defaultHeaders, s, e.headers]);
    return this.validateHeaders(a), a.values;
  }
  _makeAbort(e) {
    return () => e.abort();
  }
  buildBody({ options: { body: e, headers: t } }) {
    if (!e) return { bodyHeaders: void 0, body: void 0 };
    const s = p([t]);
    return ArrayBuffer.isView(e) || e instanceof ArrayBuffer || e instanceof DataView || typeof e == "string" && s.values.has("content-type") || globalThis.Blob && e instanceof globalThis.Blob || e instanceof FormData || e instanceof URLSearchParams || globalThis.ReadableStream && e instanceof globalThis.ReadableStream ? { bodyHeaders: void 0, body: e } : typeof e == "object" && (Symbol.asyncIterator in e || Symbol.iterator in e && "next" in e && typeof e.next == "function") ? { bodyHeaders: void 0, body: Ys(e) } : typeof e == "object" && s.values.get("content-type") === "application/x-www-form-urlencoded" ? { bodyHeaders: { "content-type": "application/x-www-form-urlencoded" }, body: this.stringifyQuery(e) } : o(this, Qe, "f").call(this, { body: e, headers: s });
  }
}
ls = x, Qe = /* @__PURE__ */ new WeakMap(), Bt = /* @__PURE__ */ new WeakSet(), yr = function() {
  return this.baseURL !== "https://api.openai.com/v1";
};
x.OpenAI = ls;
x.DEFAULT_TIMEOUT = 6e5;
x.OpenAIError = y;
x.APIError = D;
x.APIConnectionError = it;
x.APIConnectionTimeoutError = Dt;
x.APIUserAbortError = K;
x.NotFoundError = qs;
x.ConflictError = Hs;
x.RateLimitError = Xs;
x.BadRequestError = Us;
x.AuthenticationError = Ws;
x.InternalServerError = Ks;
x.PermissionDeniedError = js;
x.UnprocessableEntityError = Js;
x.InvalidWebhookSignatureError = ge;
x.toFile = ii;
x.Completions = Xn;
x.Chat = Vt;
x.Embeddings = zn;
x.Files = Gn;
x.Images = nr;
x.Audio = Ne;
x.Moderations = ir;
x.Models = rr;
x.FineTuning = me;
x.Graders = rs;
x.VectorStores = mt;
x.Webhooks = wr;
x.Beta = pe;
x.Batches = Bn;
x.Uploads = os;
x.Responses = ft;
x.Realtime = dt;
x.Conversations = Yt;
x.Evals = es;
x.Containers = Gt;
x.Skills = pt;
x.Videos = _r;
class Ji {
  constructor(e) {
    __publicField(this, "id");
    __publicField(this, "displayName");
    __publicField(this, "model");
    __publicField(this, "baseURL");
    __publicField(this, "_status", "available");
    __publicField(this, "client");
    __publicField(this, "onPreSendApproval", null);
    this.id = e.id, this.displayName = e.displayName, this.model = e.model, this.baseURL = e.baseURL, this.client = new x({ apiKey: e.apiKey, baseURL: e.baseURL, dangerouslyAllowBrowser: true }), this._status = "available";
  }
  get status() {
    return this._status;
  }
  setPreSendApprovalHandler(e) {
    this.onPreSendApproval = e;
  }
  async execute(e) {
    var _a, _b, _c;
    if (!this.client) throw new Error(`${this.displayName} adapter not initialized \u2014 no API key`);
    if (this._status !== "available") throw new Error(`${this.displayName} adapter status: ${this._status}`);
    if (!Sr()) throw new Error("Cloud AI unavailable \u2014 you are currently offline. Local AI features still work.");
    if (!xr()) throw new Error("Cloud AI requires session consent. Open AI Settings to continue.");
    let t;
    try {
      t = await hs(e.prompt, "full");
    } catch {
      t = await hs(e.prompt, "structured");
    }
    const s = { id: e.requestId, timestamp: Date.now(), sanitizedPrompt: t.prompt, provider: this.displayName, model: this.model, status: "pending", ...this.baseURL ? { baseURL: this.baseURL } : {} };
    if (Ar(s), this.onPreSendApproval && !await this.onPreSendApproval(s, t.entities, t.entityMap)) throw s.status = "cancelled", new Error("Cloud request cancelled by user");
    s.status = "approved";
    try {
      const r = await this.client.chat.completions.create({ model: this.model, max_tokens: e.maxTokens ?? 512, messages: [{ role: "user", content: t.prompt }], stream: true });
      let i = "";
      e.signal && e.signal.addEventListener("abort", () => r.controller.abort());
      for await (const l of r) {
        const h = ((_b = (_a = l.choices[0]) == null ? void 0 : _a.delta) == null ? void 0 : _b.content) ?? "";
        h && (i += h, (_c = e.onChunk) == null ? void 0 : _c.call(e, h));
      }
      const a = vr(i, t.entityMap);
      return s.status = "completed", s.responseSummary = a.slice(0, 100) + (a.length > 100 ? "..." : ""), { requestId: e.requestId, text: a, provider: this.displayName, model: this.model };
    } catch (r) {
      throw s.status = "error", r;
    }
  }
  dispose() {
    this.client = null, this._status = "disabled";
  }
}
export {
  Ji as OpenAICompatibleAdapter
};
