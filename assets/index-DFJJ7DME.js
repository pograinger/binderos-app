import { g as Ce } from "./_commonjsHelpers-Cpj98o6Y.js";
function Oe(n, l) {
  for (var u = 0; u < l.length; u++) {
    const c = l[u];
    if (typeof c != "string" && !Array.isArray(c)) {
      for (const m in c) if (m !== "default" && !(m in n)) {
        const d = Object.getOwnPropertyDescriptor(c, m);
        d && Object.defineProperty(n, m, d.get ? d : { enumerable: true, get: () => c[m] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var R = {}, P = {}, G = {}, I = {}, ee;
function Ae() {
  if (ee) return I;
  ee = 1, Object.defineProperty(I, "__esModule", { value: true }), I.resolveBackendAndExecutionProviders = I.registerBackend = void 0;
  const n = /* @__PURE__ */ new Map(), l = [], u = (d, t, o) => {
    if (t && typeof t.init == "function" && typeof t.createInferenceSessionHandler == "function") {
      const r = n.get(d);
      if (r === void 0) n.set(d, { backend: t, priority: o });
      else {
        if (r.priority > o) return;
        if (r.priority === o && r.backend !== t) throw new Error(`cannot register backend "${d}" using priority ${o}`);
      }
      if (o >= 0) {
        const e = l.indexOf(d);
        e !== -1 && l.splice(e, 1);
        for (let i = 0; i < l.length; i++) if (n.get(l[i]).priority <= o) {
          l.splice(i, 0, d);
          return;
        }
        l.push(d);
      }
      return;
    }
    throw new TypeError("not a valid backend");
  };
  I.registerBackend = u;
  const c = async (d) => {
    const t = n.get(d);
    if (!t) return "backend not found.";
    if (t.initialized) return t.backend;
    if (t.aborted) return t.error;
    {
      const o = !!t.initPromise;
      try {
        return o || (t.initPromise = t.backend.init(d)), await t.initPromise, t.initialized = true, t.backend;
      } catch (r) {
        return o || (t.error = `${r}`, t.aborted = true), t.error;
      } finally {
        delete t.initPromise;
      }
    }
  }, m = async (d) => {
    const t = d.executionProviders || [], o = t.map((s) => typeof s == "string" ? s : s.name), r = o.length === 0 ? l : o;
    let e;
    const i = [], h = /* @__PURE__ */ new Set();
    for (const s of r) {
      const f = await c(s);
      typeof f == "string" ? i.push({ name: s, err: f }) : (e || (e = f), e === f && h.add(s));
    }
    if (!e) throw new Error(`no available backend found. ERR: ${i.map((s) => `[${s.name}] ${s.err}`).join(", ")}`);
    for (const { name: s, err: f } of i) o.includes(s) && console.warn(`removing requested execution provider "${s}" from session options because it is not available: ${f}`);
    const a = t.filter((s) => h.has(typeof s == "string" ? s : s.name));
    return [e, new Proxy(d, { get: (s, f) => f === "executionProviders" ? a : Reflect.get(s, f) })];
  };
  return I.resolveBackendAndExecutionProviders = m, I;
}
var te;
function Ne() {
  return te || (te = 1, (function(n) {
    Object.defineProperty(n, "__esModule", { value: true }), n.registerBackend = void 0;
    var l = Ae();
    Object.defineProperty(n, "registerBackend", { enumerable: true, get: function() {
      return l.registerBackend;
    } });
  })(G)), G;
}
var O = {}, Y = {}, N = {}, ne;
function Me() {
  return ne || (ne = 1, Object.defineProperty(N, "__esModule", { value: true }), N.version = void 0, N.version = "1.24.3"), N;
}
var re;
function Re() {
  return re || (re = 1, (function(n) {
    Object.defineProperty(n, "__esModule", { value: true }), n.env = void 0;
    const l = Me();
    let u = "warning";
    n.env = { wasm: {}, webgl: {}, webgpu: {}, versions: { common: l.version }, set logLevel(c) {
      if (c !== void 0) {
        if (typeof c != "string" || ["verbose", "info", "warning", "error", "fatal"].indexOf(c) === -1) throw new Error(`Unsupported logging level: ${c}`);
        u = c;
      }
    }, get logLevel() {
      return u;
    } }, Object.defineProperty(n.env, "logLevel", { enumerable: true });
  })(Y)), Y;
}
var ie;
function De() {
  if (ie) return O;
  ie = 1, Object.defineProperty(O, "__esModule", { value: true }), O.env = void 0;
  const n = Re();
  return O.env = n.env, O;
}
var M = {}, D = {}, j = {}, U = {}, B = {}, oe;
function je() {
  if (oe) return B;
  oe = 1, Object.defineProperty(B, "__esModule", { value: true }), B.tensorToImageData = B.tensorToDataURL = void 0;
  const n = (u, c) => {
    const m = typeof document < "u" ? document.createElement("canvas") : new OffscreenCanvas(1, 1);
    m.width = u.dims[3], m.height = u.dims[2];
    const d = m.getContext("2d");
    if (d != null) {
      let t, o;
      (c == null ? void 0 : c.tensorLayout) !== void 0 && c.tensorLayout === "NHWC" ? (t = u.dims[2], o = u.dims[3]) : (t = u.dims[3], o = u.dims[2]);
      const r = (c == null ? void 0 : c.format) !== void 0 ? c.format : "RGB", e = c == null ? void 0 : c.norm;
      let i, h;
      e === void 0 || e.mean === void 0 ? i = [255, 255, 255, 255] : typeof e.mean == "number" ? i = [e.mean, e.mean, e.mean, e.mean] : (i = [e.mean[0], e.mean[1], e.mean[2], 0], e.mean[3] !== void 0 && (i[3] = e.mean[3])), e === void 0 || e.bias === void 0 ? h = [0, 0, 0, 0] : typeof e.bias == "number" ? h = [e.bias, e.bias, e.bias, e.bias] : (h = [e.bias[0], e.bias[1], e.bias[2], 0], e.bias[3] !== void 0 && (h[3] = e.bias[3]));
      const a = o * t;
      let s = 0, f = a, p = a * 2, T = -1;
      r === "RGBA" ? (s = 0, f = a, p = a * 2, T = a * 3) : r === "RGB" ? (s = 0, f = a, p = a * 2) : r === "RBG" && (s = 0, p = a, f = a * 2);
      for (let _ = 0; _ < o; _++) for (let y = 0; y < t; y++) {
        const b = (u.data[s++] - h[0]) * i[0], w = (u.data[f++] - h[1]) * i[1], E = (u.data[p++] - h[2]) * i[2], v = T === -1 ? 255 : (u.data[T++] - h[3]) * i[3];
        d.fillStyle = "rgba(" + b + "," + w + "," + E + "," + v + ")", d.fillRect(y, _, 1, 1);
      }
      if ("toDataURL" in m) return m.toDataURL();
      throw new Error("toDataURL is not supported");
    } else throw new Error("Can not access image data");
  };
  B.tensorToDataURL = n;
  const l = (u, c) => {
    const m = typeof document < "u" ? document.createElement("canvas").getContext("2d") : new OffscreenCanvas(1, 1).getContext("2d");
    let d;
    if (m != null) {
      let t, o, r;
      (c == null ? void 0 : c.tensorLayout) !== void 0 && c.tensorLayout === "NHWC" ? (t = u.dims[2], o = u.dims[1], r = u.dims[3]) : (t = u.dims[3], o = u.dims[2], r = u.dims[1]);
      const e = c !== void 0 && c.format !== void 0 ? c.format : "RGB", i = c == null ? void 0 : c.norm;
      let h, a;
      i === void 0 || i.mean === void 0 ? h = [255, 255, 255, 255] : typeof i.mean == "number" ? h = [i.mean, i.mean, i.mean, i.mean] : (h = [i.mean[0], i.mean[1], i.mean[2], 255], i.mean[3] !== void 0 && (h[3] = i.mean[3])), i === void 0 || i.bias === void 0 ? a = [0, 0, 0, 0] : typeof i.bias == "number" ? a = [i.bias, i.bias, i.bias, i.bias] : (a = [i.bias[0], i.bias[1], i.bias[2], 0], i.bias[3] !== void 0 && (a[3] = i.bias[3]));
      const s = o * t;
      if (c !== void 0 && (c.format !== void 0 && r === 4 && c.format !== "RGBA" || r === 3 && c.format !== "RGB" && c.format !== "BGR")) throw new Error("Tensor format doesn't match input tensor dims");
      const f = 4;
      let p = 0, T = 1, _ = 2, y = 3, b = 0, w = s, E = s * 2, v = -1;
      e === "RGBA" ? (b = 0, w = s, E = s * 2, v = s * 3) : e === "RGB" ? (b = 0, w = s, E = s * 2) : e === "RBG" && (b = 0, E = s, w = s * 2), d = m.createImageData(t, o);
      for (let A = 0; A < o * t; p += f, T += f, _ += f, y += f, A++) d.data[p] = (u.data[b++] - a[0]) * h[0], d.data[T] = (u.data[w++] - a[1]) * h[1], d.data[_] = (u.data[E++] - a[2]) * h[2], d.data[y] = v === -1 ? 255 : (u.data[v++] - a[3]) * h[3];
    } else throw new Error("Can not access image data");
    return d;
  };
  return B.tensorToImageData = l, B;
}
var V = {}, ae;
function Ue() {
  return ae || (ae = 1, (function(n) {
    Object.defineProperty(n, "__esModule", { value: true }), n.tensorFromPinnedBuffer = n.tensorFromMLTensor = n.tensorFromGpuBuffer = n.tensorFromTexture = n.tensorFromImage = n.bufferToTensor = void 0;
    const l = Z(), u = (r, e) => {
      if (r === void 0) throw new Error("Image buffer must be defined");
      if (e.height === void 0 || e.width === void 0) throw new Error("Image height and width must be defined");
      if (e.tensorLayout === "NHWC") throw new Error("NHWC Tensor layout is not supported yet");
      const { height: i, width: h } = e, a = e.norm ?? { mean: 255, bias: 0 };
      let s, f;
      typeof a.mean == "number" ? s = [a.mean, a.mean, a.mean, a.mean] : s = [a.mean[0], a.mean[1], a.mean[2], a.mean[3] ?? 255], typeof a.bias == "number" ? f = [a.bias, a.bias, a.bias, a.bias] : f = [a.bias[0], a.bias[1], a.bias[2], a.bias[3] ?? 0];
      const p = e.format !== void 0 ? e.format : "RGBA", T = e.tensorFormat !== void 0 && e.tensorFormat !== void 0 ? e.tensorFormat : "RGB", _ = i * h, y = T === "RGBA" ? new Float32Array(_ * 4) : new Float32Array(_ * 3);
      let b = 4, w = 0, E = 1, v = 2, A = 3, F = 0, L = _, k = _ * 2, q = -1;
      p === "RGB" && (b = 3, w = 0, E = 1, v = 2, A = -1), T === "RGBA" ? q = _ * 3 : T === "RBG" ? (F = 0, k = _, L = _ * 2) : T === "BGR" && (k = 0, L = _, F = _ * 2);
      for (let $ = 0; $ < _; $++, w += b, v += b, E += b, A += b) y[F++] = (r[w] + f[0]) / s[0], y[L++] = (r[E] + f[1]) / s[1], y[k++] = (r[v] + f[2]) / s[2], q !== -1 && A !== -1 && (y[q++] = (r[A] + f[3]) / s[3]);
      return T === "RGBA" ? new l.Tensor("float32", y, [1, 4, i, h]) : new l.Tensor("float32", y, [1, 3, i, h]);
    };
    n.bufferToTensor = u;
    const c = async (r, e) => {
      const i = typeof HTMLImageElement < "u" && r instanceof HTMLImageElement, h = typeof ImageData < "u" && r instanceof ImageData, a = typeof ImageBitmap < "u" && r instanceof ImageBitmap, s = typeof r == "string";
      let f, p = e ?? {};
      const T = () => {
        if (typeof document < "u") return document.createElement("canvas");
        if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(1, 1);
        throw new Error("Canvas is not supported");
      }, _ = (y) => typeof HTMLCanvasElement < "u" && y instanceof HTMLCanvasElement || y instanceof OffscreenCanvas ? y.getContext("2d") : null;
      if (i) {
        const y = T();
        y.width = r.width, y.height = r.height;
        const b = _(y);
        if (b != null) {
          let w = r.height, E = r.width;
          if (e !== void 0 && e.resizedHeight !== void 0 && e.resizedWidth !== void 0 && (w = e.resizedHeight, E = e.resizedWidth), e !== void 0) {
            if (p = e, e.tensorFormat !== void 0) throw new Error("Image input config format must be RGBA for HTMLImageElement");
            p.tensorFormat = "RGBA", p.height = w, p.width = E;
          } else p.tensorFormat = "RGBA", p.height = w, p.width = E;
          b.drawImage(r, 0, 0), f = b.getImageData(0, 0, E, w).data;
        } else throw new Error("Can not access image data");
      } else if (h) {
        let y, b;
        if (e !== void 0 && e.resizedWidth !== void 0 && e.resizedHeight !== void 0 ? (y = e.resizedHeight, b = e.resizedWidth) : (y = r.height, b = r.width), e !== void 0 && (p = e), p.format = "RGBA", p.height = y, p.width = b, e !== void 0) {
          const w = T();
          w.width = b, w.height = y;
          const E = _(w);
          if (E != null) E.putImageData(r, 0, 0), f = E.getImageData(0, 0, b, y).data;
          else throw new Error("Can not access image data");
        } else f = r.data;
      } else if (a) {
        if (e === void 0) throw new Error("Please provide image config with format for Imagebitmap");
        const y = T();
        y.width = r.width, y.height = r.height;
        const b = _(y);
        if (b != null) {
          const w = r.height, E = r.width;
          return b.drawImage(r, 0, 0, E, w), f = b.getImageData(0, 0, E, w).data, p.height = w, p.width = E, (0, n.bufferToTensor)(f, p);
        } else throw new Error("Can not access image data");
      } else {
        if (s) return new Promise((y, b) => {
          const w = T(), E = _(w);
          if (!r || !E) return b();
          const v = new Image();
          v.crossOrigin = "Anonymous", v.src = r, v.onload = () => {
            w.width = v.width, w.height = v.height, E.drawImage(v, 0, 0, w.width, w.height);
            const A = E.getImageData(0, 0, w.width, w.height);
            p.height = w.height, p.width = w.width, y((0, n.bufferToTensor)(A.data, p));
          };
        });
        throw new Error("Input data provided is not supported - aborted tensor creation");
      }
      if (f !== void 0) return (0, n.bufferToTensor)(f, p);
      throw new Error("Input data provided is not supported - aborted tensor creation");
    };
    n.tensorFromImage = c;
    const m = (r, e) => {
      const { width: i, height: h, download: a, dispose: s } = e, f = [1, h, i, 4];
      return new l.Tensor({ location: "texture", type: "float32", texture: r, dims: f, download: a, dispose: s });
    };
    n.tensorFromTexture = m;
    const d = (r, e) => {
      const { dataType: i, dims: h, download: a, dispose: s } = e;
      return new l.Tensor({ location: "gpu-buffer", type: i ?? "float32", gpuBuffer: r, dims: h, download: a, dispose: s });
    };
    n.tensorFromGpuBuffer = d;
    const t = (r, e) => {
      const { dataType: i, dims: h, download: a, dispose: s } = e;
      return new l.Tensor({ location: "ml-tensor", type: i ?? "float32", mlTensor: r, dims: h, download: a, dispose: s });
    };
    n.tensorFromMLTensor = t;
    const o = (r, e, i) => new l.Tensor({ location: "cpu-pinned", type: r, data: e, dims: i ?? [e.length] });
    n.tensorFromPinnedBuffer = o;
  })(V)), V;
}
var z = {}, se;
function Se() {
  return se || (se = 1, (function(n) {
    Object.defineProperty(n, "__esModule", { value: true }), n.checkTypedArray = n.NUMERIC_TENSOR_TYPEDARRAY_TO_TYPE_MAP = n.NUMERIC_TENSOR_TYPE_TO_TYPEDARRAY_MAP = void 0, n.NUMERIC_TENSOR_TYPE_TO_TYPEDARRAY_MAP = /* @__PURE__ */ new Map([["float32", Float32Array], ["uint8", Uint8Array], ["int8", Int8Array], ["uint16", Uint16Array], ["int16", Int16Array], ["int32", Int32Array], ["bool", Uint8Array], ["float64", Float64Array], ["uint32", Uint32Array], ["int4", Uint8Array], ["uint4", Uint8Array]]), n.NUMERIC_TENSOR_TYPEDARRAY_TO_TYPE_MAP = /* @__PURE__ */ new Map([[Float32Array, "float32"], [Uint8Array, "uint8"], [Int8Array, "int8"], [Uint16Array, "uint16"], [Int16Array, "int16"], [Int32Array, "int32"], [Float64Array, "float64"], [Uint32Array, "uint32"]]);
    let l = false;
    const u = () => {
      if (!l) {
        l = true;
        const c = typeof BigInt64Array < "u" && BigInt64Array.from, m = typeof BigUint64Array < "u" && BigUint64Array.from, d = globalThis.Float16Array, t = typeof d < "u" && d.from;
        c && (n.NUMERIC_TENSOR_TYPE_TO_TYPEDARRAY_MAP.set("int64", BigInt64Array), n.NUMERIC_TENSOR_TYPEDARRAY_TO_TYPE_MAP.set(BigInt64Array, "int64")), m && (n.NUMERIC_TENSOR_TYPE_TO_TYPEDARRAY_MAP.set("uint64", BigUint64Array), n.NUMERIC_TENSOR_TYPEDARRAY_TO_TYPE_MAP.set(BigUint64Array, "uint64")), t ? (n.NUMERIC_TENSOR_TYPE_TO_TYPEDARRAY_MAP.set("float16", d), n.NUMERIC_TENSOR_TYPEDARRAY_TO_TYPE_MAP.set(d, "float16")) : n.NUMERIC_TENSOR_TYPE_TO_TYPEDARRAY_MAP.set("float16", Uint16Array);
      }
    };
    n.checkTypedArray = u;
  })(z)), z;
}
var C = {}, ue;
function Fe() {
  if (ue) return C;
  ue = 1, Object.defineProperty(C, "__esModule", { value: true }), C.tensorReshape = C.calculateSize = void 0;
  const n = Z(), l = (c) => {
    let m = 1;
    for (let d = 0; d < c.length; d++) {
      const t = c[d];
      if (typeof t != "number" || !Number.isSafeInteger(t)) throw new TypeError(`dims[${d}] must be an integer, got: ${t}`);
      if (t < 0) throw new RangeError(`dims[${d}] must be a non-negative integer, got: ${t}`);
      m *= t;
    }
    return m;
  };
  C.calculateSize = l;
  const u = (c, m) => {
    switch (c.location) {
      case "cpu":
        return new n.Tensor(c.type, c.data, m);
      case "cpu-pinned":
        return new n.Tensor({ location: "cpu-pinned", data: c.data, type: c.type, dims: m });
      case "texture":
        return new n.Tensor({ location: "texture", texture: c.texture, type: c.type, dims: m });
      case "gpu-buffer":
        return new n.Tensor({ location: "gpu-buffer", gpuBuffer: c.gpuBuffer, type: c.type, dims: m });
      case "ml-tensor":
        return new n.Tensor({ location: "ml-tensor", mlTensor: c.mlTensor, type: c.type, dims: m });
      default:
        throw new Error(`tensorReshape: tensor location ${c.location} is not supported`);
    }
  };
  return C.tensorReshape = u, C;
}
var de;
function Z() {
  if (de) return U;
  de = 1, Object.defineProperty(U, "__esModule", { value: true }), U.Tensor = void 0;
  const n = je(), l = Ue(), u = Se(), c = Fe();
  class m {
    constructor(t, o, r) {
      (0, u.checkTypedArray)();
      let e, i;
      if (typeof t == "object" && "location" in t) switch (this.dataLocation = t.location, e = t.type, i = t.dims, t.location) {
        case "cpu-pinned": {
          const a = u.NUMERIC_TENSOR_TYPE_TO_TYPEDARRAY_MAP.get(e);
          if (!a) throw new TypeError(`unsupported type "${e}" to create tensor from pinned buffer`);
          if (!(t.data instanceof a)) throw new TypeError(`buffer should be of type ${a.name}`);
          this.cpuData = t.data;
          break;
        }
        case "texture": {
          if (e !== "float32") throw new TypeError(`unsupported type "${e}" to create tensor from texture`);
          this.gpuTextureData = t.texture, this.downloader = t.download, this.disposer = t.dispose;
          break;
        }
        case "gpu-buffer": {
          if (e !== "float32" && e !== "float16" && e !== "int32" && e !== "int64" && e !== "uint32" && e !== "uint8" && e !== "bool" && e !== "uint4" && e !== "int4") throw new TypeError(`unsupported type "${e}" to create tensor from gpu buffer`);
          this.gpuBufferData = t.gpuBuffer, this.downloader = t.download, this.disposer = t.dispose;
          break;
        }
        case "ml-tensor": {
          if (e !== "float32" && e !== "float16" && e !== "int32" && e !== "int64" && e !== "uint32" && e !== "uint64" && e !== "int8" && e !== "uint8" && e !== "bool" && e !== "uint4" && e !== "int4") throw new TypeError(`unsupported type "${e}" to create tensor from MLTensor`);
          this.mlTensorData = t.mlTensor, this.downloader = t.download, this.disposer = t.dispose;
          break;
        }
        default:
          throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`);
      }
      else {
        let a, s;
        if (typeof t == "string") if (e = t, s = r, t === "string") {
          if (!Array.isArray(o)) throw new TypeError("A string tensor's data must be a string array.");
          a = o;
        } else {
          const f = u.NUMERIC_TENSOR_TYPE_TO_TYPEDARRAY_MAP.get(t);
          if (f === void 0) throw new TypeError(`Unsupported tensor type: ${t}.`);
          if (Array.isArray(o)) {
            if (t === "float16" && f === Uint16Array || t === "uint4" || t === "int4") throw new TypeError(`Creating a ${t} tensor from number array is not supported. Please use ${f.name} as data.`);
            t === "uint64" || t === "int64" ? a = f.from(o, BigInt) : a = f.from(o);
          } else if (o instanceof f) a = o;
          else if (o instanceof Uint8ClampedArray) if (t === "uint8") a = Uint8Array.from(o);
          else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");
          else if (t === "float16" && o instanceof Uint16Array && f !== Uint16Array) a = new globalThis.Float16Array(o.buffer, o.byteOffset, o.length);
          else throw new TypeError(`A ${e} tensor's data must be type of ${f}`);
        }
        else if (s = o, Array.isArray(t)) {
          if (t.length === 0) throw new TypeError("Tensor type cannot be inferred from an empty array.");
          const f = typeof t[0];
          if (f === "string") e = "string", a = t;
          else if (f === "boolean") e = "bool", a = Uint8Array.from(t);
          else throw new TypeError(`Invalid element type of data array: ${f}.`);
        } else if (t instanceof Uint8ClampedArray) e = "uint8", a = Uint8Array.from(t);
        else {
          const f = u.NUMERIC_TENSOR_TYPEDARRAY_TO_TYPE_MAP.get(t.constructor);
          if (f === void 0) throw new TypeError(`Unsupported type for tensor data: ${t.constructor}.`);
          e = f, a = t;
        }
        if (s === void 0) s = [a.length];
        else if (!Array.isArray(s)) throw new TypeError("A tensor's dims must be a number array");
        i = s, this.cpuData = a, this.dataLocation = "cpu";
      }
      const h = (0, c.calculateSize)(i);
      if (this.cpuData && h !== this.cpuData.length && !((e === "uint4" || e === "int4") && Math.ceil(h / 2) === this.cpuData.length)) throw new Error(`Tensor's size(${h}) does not match data length(${this.cpuData.length}).`);
      this.type = e, this.dims = i, this.size = h;
    }
    static async fromImage(t, o) {
      return (0, l.tensorFromImage)(t, o);
    }
    static fromTexture(t, o) {
      return (0, l.tensorFromTexture)(t, o);
    }
    static fromGpuBuffer(t, o) {
      return (0, l.tensorFromGpuBuffer)(t, o);
    }
    static fromMLTensor(t, o) {
      return (0, l.tensorFromMLTensor)(t, o);
    }
    static fromPinnedBuffer(t, o, r) {
      return (0, l.tensorFromPinnedBuffer)(t, o, r);
    }
    toDataURL(t) {
      return (0, n.tensorToDataURL)(this, t);
    }
    toImageData(t) {
      return (0, n.tensorToImageData)(this, t);
    }
    get data() {
      if (this.ensureValid(), !this.cpuData) throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");
      return this.cpuData;
    }
    get location() {
      return this.dataLocation;
    }
    get texture() {
      if (this.ensureValid(), !this.gpuTextureData) throw new Error("The data is not stored as a WebGL texture.");
      return this.gpuTextureData;
    }
    get gpuBuffer() {
      if (this.ensureValid(), !this.gpuBufferData) throw new Error("The data is not stored as a WebGPU buffer.");
      return this.gpuBufferData;
    }
    get mlTensor() {
      if (this.ensureValid(), !this.mlTensorData) throw new Error("The data is not stored as a WebNN MLTensor.");
      return this.mlTensorData;
    }
    async getData(t) {
      switch (this.ensureValid(), this.dataLocation) {
        case "cpu":
        case "cpu-pinned":
          return this.data;
        case "texture":
        case "gpu-buffer":
        case "ml-tensor": {
          if (!this.downloader) throw new Error("The current tensor is not created with a specified data downloader.");
          if (this.isDownloading) throw new Error("The current tensor is being downloaded.");
          try {
            this.isDownloading = true;
            const o = await this.downloader();
            return this.downloader = void 0, this.dataLocation = "cpu", this.cpuData = o, t && this.disposer && (this.disposer(), this.disposer = void 0), o;
          } finally {
            this.isDownloading = false;
          }
        }
        default:
          throw new Error(`cannot get data from location: ${this.dataLocation}`);
      }
    }
    dispose() {
      if (this.isDownloading) throw new Error("The current tensor is being downloaded.");
      this.disposer && (this.disposer(), this.disposer = void 0), this.cpuData = void 0, this.gpuTextureData = void 0, this.gpuBufferData = void 0, this.mlTensorData = void 0, this.downloader = void 0, this.isDownloading = void 0, this.dataLocation = "none";
    }
    ensureValid() {
      if (this.dataLocation === "none") throw new Error("The tensor is disposed.");
    }
    reshape(t) {
      if (this.ensureValid(), this.downloader || this.disposer) throw new Error("Cannot reshape a tensor that owns GPU resource.");
      return (0, c.tensorReshape)(this, t);
    }
  }
  return U.Tensor = m, U;
}
var fe;
function Pe() {
  if (fe) return j;
  fe = 1, Object.defineProperty(j, "__esModule", { value: true }), j.Tensor = void 0;
  const n = Z();
  return j.Tensor = n.Tensor, j;
}
var H = {}, ce;
function Ie() {
  return ce || (ce = 1, (function(n) {
    Object.defineProperty(n, "__esModule", { value: true }), n.TRACE_EVENT_END = n.TRACE_EVENT_BEGIN = n.TRACE_FUNC_END = n.TRACE_FUNC_BEGIN = n.TRACE = void 0;
    const l = Re(), u = (r, e) => {
      (typeof l.env.trace > "u" ? !l.env.wasm.trace : !l.env.trace) || console.timeStamp(`${r}::ORT::${e}`);
    };
    n.TRACE = u;
    const c = (r, e) => {
      var _a;
      const i = ((_a = new Error().stack) == null ? void 0 : _a.split(/\r\n|\r|\n/g)) || [];
      let h = false;
      for (let a = 0; a < i.length; a++) {
        if (h && !i[a].includes("TRACE_FUNC")) {
          let s = `FUNC_${r}::${i[a].trim().split(" ")[1]}`;
          e && (s += `::${e}`), (0, n.TRACE)("CPU", s);
          return;
        }
        i[a].includes("TRACE_FUNC") && (h = true);
      }
    }, m = (r) => {
      (typeof l.env.trace > "u" ? !l.env.wasm.trace : !l.env.trace) || c("BEGIN", r);
    };
    n.TRACE_FUNC_BEGIN = m;
    const d = (r) => {
      (typeof l.env.trace > "u" ? !l.env.wasm.trace : !l.env.trace) || c("END", r);
    };
    n.TRACE_FUNC_END = d;
    const t = (r) => {
      (typeof l.env.trace > "u" ? !l.env.wasm.trace : !l.env.trace) || console.time(`ORT::${r}`);
    };
    n.TRACE_EVENT_BEGIN = t;
    const o = (r) => {
      (typeof l.env.trace > "u" ? !l.env.wasm.trace : !l.env.trace) || console.timeEnd(`ORT::${r}`);
    };
    n.TRACE_EVENT_END = o;
  })(H)), H;
}
var le;
function Le() {
  if (le) return D;
  le = 1, Object.defineProperty(D, "__esModule", { value: true }), D.InferenceSession = void 0;
  const n = Ae(), l = Pe(), u = Ie();
  class c {
    constructor(d) {
      this.handler = d;
    }
    async run(d, t, o) {
      (0, u.TRACE_FUNC_BEGIN)(), (0, u.TRACE_EVENT_BEGIN)("InferenceSession.run");
      const r = {};
      let e = {};
      if (typeof d != "object" || d === null || d instanceof l.Tensor || Array.isArray(d)) throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");
      let i = true;
      if (typeof t == "object") {
        if (t === null) throw new TypeError("Unexpected argument[1]: cannot be null.");
        if (t instanceof l.Tensor) throw new TypeError("'fetches' cannot be a Tensor");
        if (Array.isArray(t)) {
          if (t.length === 0) throw new TypeError("'fetches' cannot be an empty array.");
          i = false;
          for (const s of t) {
            if (typeof s != "string") throw new TypeError("'fetches' must be a string array or an object.");
            if (this.outputNames.indexOf(s) === -1) throw new RangeError(`'fetches' contains invalid output name: ${s}.`);
            r[s] = null;
          }
          if (typeof o == "object" && o !== null) e = o;
          else if (typeof o < "u") throw new TypeError("'options' must be an object.");
        } else {
          let s = false;
          const f = Object.getOwnPropertyNames(t);
          for (const p of this.outputNames) if (f.indexOf(p) !== -1) {
            const T = t[p];
            (T === null || T instanceof l.Tensor) && (s = true, i = false, r[p] = T);
          }
          if (s) {
            if (typeof o == "object" && o !== null) e = o;
            else if (typeof o < "u") throw new TypeError("'options' must be an object.");
          } else e = t;
        }
      } else if (typeof t < "u") throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");
      for (const s of this.inputNames) if (typeof d[s] > "u") throw new Error(`input '${s}' is missing in 'feeds'.`);
      if (i) for (const s of this.outputNames) r[s] = null;
      const h = await this.handler.run(d, r, e), a = {};
      for (const s in h) if (Object.hasOwnProperty.call(h, s)) {
        const f = h[s];
        f instanceof l.Tensor ? a[s] = f : a[s] = new l.Tensor(f.type, f.data, f.dims);
      }
      return (0, u.TRACE_EVENT_END)("InferenceSession.run"), (0, u.TRACE_FUNC_END)(), a;
    }
    async release() {
      return this.handler.dispose();
    }
    static async create(d, t, o, r) {
      (0, u.TRACE_FUNC_BEGIN)(), (0, u.TRACE_EVENT_BEGIN)("InferenceSession.create");
      let e, i = {};
      if (typeof d == "string") {
        if (e = d, typeof t == "object" && t !== null) i = t;
        else if (typeof t < "u") throw new TypeError("'options' must be an object.");
      } else if (d instanceof Uint8Array) {
        if (e = d, typeof t == "object" && t !== null) i = t;
        else if (typeof t < "u") throw new TypeError("'options' must be an object.");
      } else if (d instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && d instanceof SharedArrayBuffer) {
        const f = d;
        let p = 0, T = d.byteLength;
        if (typeof t == "object" && t !== null) i = t;
        else if (typeof t == "number") {
          if (p = t, !Number.isSafeInteger(p)) throw new RangeError("'byteOffset' must be an integer.");
          if (p < 0 || p >= f.byteLength) throw new RangeError(`'byteOffset' is out of range [0, ${f.byteLength}).`);
          if (T = d.byteLength - p, typeof o == "number") {
            if (T = o, !Number.isSafeInteger(T)) throw new RangeError("'byteLength' must be an integer.");
            if (T <= 0 || p + T > f.byteLength) throw new RangeError(`'byteLength' is out of range (0, ${f.byteLength - p}].`);
            if (typeof r == "object" && r !== null) i = r;
            else if (typeof r < "u") throw new TypeError("'options' must be an object.");
          } else if (typeof o < "u") throw new TypeError("'byteLength' must be a number.");
        } else if (typeof t < "u") throw new TypeError("'options' must be an object.");
        e = new Uint8Array(f, p, T);
      } else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");
      const [h, a] = await (0, n.resolveBackendAndExecutionProviders)(i), s = await h.createInferenceSessionHandler(e, a);
      return (0, u.TRACE_EVENT_END)("InferenceSession.create"), (0, u.TRACE_FUNC_END)(), new c(s);
    }
    startProfiling() {
      this.handler.startProfiling();
    }
    endProfiling() {
      this.handler.endProfiling();
    }
    get inputNames() {
      return this.handler.inputNames;
    }
    get outputNames() {
      return this.handler.outputNames;
    }
    get inputMetadata() {
      return this.handler.inputMetadata;
    }
    get outputMetadata() {
      return this.handler.outputMetadata;
    }
  }
  return D.InferenceSession = c, D;
}
var he;
function ke() {
  if (he) return M;
  he = 1, Object.defineProperty(M, "__esModule", { value: true }), M.InferenceSession = void 0;
  const n = Le();
  return M.InferenceSession = n.InferenceSession, M;
}
var x = {}, me;
function qe() {
  return me || (me = 1, Object.defineProperty(x, "__esModule", { value: true })), x;
}
var W = {}, pe;
function Ge() {
  return pe || (pe = 1, Object.defineProperty(W, "__esModule", { value: true })), W;
}
var K = {}, ye;
function Ye() {
  return ye || (ye = 1, Object.defineProperty(K, "__esModule", { value: true })), K;
}
var J = {}, we;
function Ve() {
  return we || (we = 1, Object.defineProperty(J, "__esModule", { value: true })), J;
}
var Te;
function X() {
  return Te || (Te = 1, (function(n) {
    var l = P && P.__createBinding || (Object.create ? (function(c, m, d, t) {
      t === void 0 && (t = d);
      var o = Object.getOwnPropertyDescriptor(m, d);
      (!o || ("get" in o ? !m.__esModule : o.writable || o.configurable)) && (o = { enumerable: true, get: function() {
        return m[d];
      } }), Object.defineProperty(c, t, o);
    }) : (function(c, m, d, t) {
      t === void 0 && (t = d), c[t] = m[d];
    })), u = P && P.__exportStar || function(c, m) {
      for (var d in c) d !== "default" && !Object.prototype.hasOwnProperty.call(m, d) && l(m, c, d);
    };
    Object.defineProperty(n, "__esModule", { value: true }), u(Ne(), n), u(De(), n), u(ke(), n), u(Pe(), n), u(qe(), n), u(Ge(), n), u(Ie(), n), u(Ye(), n), u(Ve(), n);
  })(P)), P;
}
var g = {};
function ze(n) {
  throw new Error('Could not dynamically require "' + n + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Q = {}, be;
function He() {
  return be || (be = 1, (function(n) {
    Object.defineProperty(n, "__esModule", { value: true }), n.initOrt = n.binding = void 0;
    const l = X();
    n.binding = ze(`../bin/napi-v6/${process.platform}/${process.arch}/onnxruntime_binding.node`);
    let u = false;
    const c = () => {
      if (!u) {
        u = true;
        let m = 2;
        if (l.env.logLevel) switch (l.env.logLevel) {
          case "verbose":
            m = 0;
            break;
          case "info":
            m = 1;
            break;
          case "warning":
            m = 2;
            break;
          case "error":
            m = 3;
            break;
          case "fatal":
            m = 4;
            break;
          default:
            throw new Error(`Unsupported log level: ${l.env.logLevel}`);
        }
        n.binding.initOrtOnce(m, l.Tensor);
      }
    };
    n.initOrt = c;
  })(Q)), Q;
}
var _e;
function Ee() {
  if (_e) return g;
  _e = 1;
  var n = g && g.__classPrivateFieldSet || function(o, r, e, i, h) {
    if (i === "m") throw new TypeError("Private method is not writable");
    if (i === "a" && !h) throw new TypeError("Private accessor was defined without a setter");
    if (typeof r == "function" ? o !== r || !h : !r.has(o)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return i === "a" ? h.call(o, e) : h ? h.value = e : r.set(o, e), e;
  }, l = g && g.__classPrivateFieldGet || function(o, r, e, i) {
    if (e === "a" && !i) throw new TypeError("Private accessor was defined without a getter");
    if (typeof r == "function" ? o !== r || !i : !r.has(o)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return e === "m" ? i : e === "a" ? i.call(o) : i ? i.value : r.get(o);
  }, u;
  Object.defineProperty(g, "__esModule", { value: true }), g.listSupportedBackends = g.onnxruntimeBackend = void 0;
  const c = He(), m = [void 0, "float32", "uint8", "int8", "uint16", "int16", "int32", "int64", "string", "bool", "float16", "float64", "uint32", "uint64", void 0, void 0, void 0, void 0, void 0, void 0, void 0, "uint4", "int4"];
  class d {
    constructor(r, e) {
      u.set(this, void 0), (0, c.initOrt)(), n(this, u, new c.binding.InferenceSession(), "f"), typeof r == "string" ? l(this, u, "f").loadModel(r, e) : l(this, u, "f").loadModel(r.buffer, r.byteOffset, r.byteLength, e), this.inputNames = [], this.outputNames = [], this.inputMetadata = [], this.outputMetadata = [];
      const i = (h) => {
        const a = [], s = [];
        for (const f of h) if (a.push(f.name), !f.isTensor) s.push({ name: f.name, isTensor: false });
        else {
          const p = m[f.type];
          if (p === void 0) throw new Error(`Unsupported data type: ${f.type}`);
          const T = [];
          for (let _ = 0; _ < f.shape.length; ++_) {
            const y = f.shape[_];
            if (y === -1) T.push(f.symbolicDimensions[_]);
            else if (y >= 0) T.push(y);
            else throw new Error(`Invalid dimension: ${y}`);
          }
          s.push({ name: f.name, isTensor: f.isTensor, type: p, shape: T });
        }
        return [a, s];
      };
      [this.inputNames, this.inputMetadata] = i(l(this, u, "f").inputMetadata), [this.outputNames, this.outputMetadata] = i(l(this, u, "f").outputMetadata);
    }
    async dispose() {
      l(this, u, "f").dispose();
    }
    startProfiling() {
    }
    endProfiling() {
      l(this, u, "f").endProfiling();
    }
    async run(r, e, i) {
      return new Promise((h, a) => {
        setImmediate(() => {
          try {
            h(l(this, u, "f").run(r, e, i));
          } catch (s) {
            a(s);
          }
        });
      });
    }
  }
  u = /* @__PURE__ */ new WeakMap();
  class t {
    async init() {
      return Promise.resolve();
    }
    async createInferenceSessionHandler(r, e) {
      return new Promise((i, h) => {
        setImmediate(() => {
          try {
            i(new d(r, e || {}));
          } catch (a) {
            h(a);
          }
        });
      });
    }
  }
  return g.onnxruntimeBackend = new t(), g.listSupportedBackends = c.binding.listSupportedBackends, g;
}
var S = {}, ve;
function xe() {
  return ve || (ve = 1, Object.defineProperty(S, "__esModule", { value: true }), S.version = void 0, S.version = "1.24.3"), S;
}
var ge;
function We() {
  return ge || (ge = 1, (function(n) {
    var l = R && R.__createBinding || (Object.create ? (function(r, e, i, h) {
      h === void 0 && (h = i);
      var a = Object.getOwnPropertyDescriptor(e, i);
      (!a || ("get" in a ? !e.__esModule : a.writable || a.configurable)) && (a = { enumerable: true, get: function() {
        return e[i];
      } }), Object.defineProperty(r, h, a);
    }) : (function(r, e, i, h) {
      h === void 0 && (h = i), r[h] = e[i];
    })), u = R && R.__exportStar || function(r, e) {
      for (var i in r) i !== "default" && !Object.prototype.hasOwnProperty.call(e, i) && l(e, r, i);
    };
    Object.defineProperty(n, "__esModule", { value: true }), n.listSupportedBackends = void 0, u(X(), n);
    var c = Ee();
    Object.defineProperty(n, "listSupportedBackends", { enumerable: true, get: function() {
      return c.listSupportedBackends;
    } });
    const m = X(), d = xe(), t = Ee(), o = (0, t.listSupportedBackends)();
    for (const r of o) (0, m.registerBackend)(r.name, t.onnxruntimeBackend, 100);
    Object.defineProperty(m.env.versions, "node", { value: d.version, enumerable: true });
  })(R)), R;
}
var Be = We();
const Ke = Ce(Be), Xe = Oe({ __proto__: null, default: Ke }, [Be]);
export {
  Xe as i
};
