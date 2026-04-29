import { d as te } from "./index-DwiQ5yRy.js";
var ve, $e;
function B() {
  return $e || ($e = 1, ve = function(f) {
    return f !== null && typeof f == "object" && typeof f.addUndirectedEdgeWithKey == "function" && typeof f.dropNode == "function" && typeof f.multi == "boolean";
  }), ve;
}
var oe = {}, Qe;
function Rt() {
  if (Qe) return oe;
  Qe = 1;
  function g(t) {
    return typeof t != "number" || isNaN(t) ? 1 : t;
  }
  function f(t, n) {
    var i = {}, o = function(r) {
      return typeof r > "u" ? n : r;
    };
    typeof n == "function" && (o = n);
    var e = function(r) {
      return o(r[t]);
    }, s = function() {
      return o(void 0);
    };
    return typeof t == "string" ? (i.fromAttributes = e, i.fromGraph = function(r, u) {
      return e(r.getNodeAttributes(u));
    }, i.fromEntry = function(r, u) {
      return e(u);
    }) : typeof t == "function" ? (i.fromAttributes = function() {
      throw new Error("graphology-utils/getters/createNodeValueGetter: irrelevant usage.");
    }, i.fromGraph = function(r, u) {
      return o(t(u, r.getNodeAttributes(u)));
    }, i.fromEntry = function(r, u) {
      return o(t(r, u));
    }) : (i.fromAttributes = s, i.fromGraph = s, i.fromEntry = s), i;
  }
  function a(t, n) {
    var i = {}, o = function(r) {
      return typeof r > "u" ? n : r;
    };
    typeof n == "function" && (o = n);
    var e = function(r) {
      return o(r[t]);
    }, s = function() {
      return o(void 0);
    };
    return typeof t == "string" ? (i.fromAttributes = e, i.fromGraph = function(r, u) {
      return e(r.getEdgeAttributes(u));
    }, i.fromEntry = function(r, u) {
      return e(u);
    }, i.fromPartialEntry = i.fromEntry, i.fromMinimalEntry = i.fromEntry) : typeof t == "function" ? (i.fromAttributes = function() {
      throw new Error("graphology-utils/getters/createEdgeValueGetter: irrelevant usage.");
    }, i.fromGraph = function(r, u) {
      var h = r.extremities(u);
      return o(t(u, r.getEdgeAttributes(u), h[0], h[1], r.getNodeAttributes(h[0]), r.getNodeAttributes(h[1]), r.isUndirected(u)));
    }, i.fromEntry = function(r, u, h, p, E, w, m) {
      return o(t(r, u, h, p, E, w, m));
    }, i.fromPartialEntry = function(r, u, h, p) {
      return o(t(r, u, h, p));
    }, i.fromMinimalEntry = function(r, u) {
      return o(t(r, u));
    }) : (i.fromAttributes = s, i.fromGraph = s, i.fromEntry = s, i.fromMinimalEntry = s), i;
  }
  return oe.createNodeValueGetter = f, oe.createEdgeValueGetter = a, oe.createEdgeWeightGetter = function(t) {
    return a(t, g);
  }, oe;
}
var k = {}, me = {}, Ye;
function Nt() {
  return Ye || (Ye = 1, me.copyNode = function(g, f, a) {
    return a = Object.assign({}, a), g.addNode(f, a);
  }), me;
}
var X = {}, Ve;
function re() {
  return Ve || (Ve = 1, X.addEdge = function(f, a, t, n, i, o) {
    return a ? t == null ? f.addUndirectedEdge(n, i, o) : f.addUndirectedEdgeWithKey(t, n, i, o) : t == null ? f.addDirectedEdge(n, i, o) : f.addDirectedEdgeWithKey(t, n, i, o);
  }, X.copyEdge = function(f, a, t, n, i, o) {
    return o = Object.assign({}, o), a ? t == null ? f.addUndirectedEdge(n, i, o) : f.addUndirectedEdgeWithKey(t, n, i, o) : t == null ? f.addDirectedEdge(n, i, o) : f.addDirectedEdgeWithKey(t, n, i, o);
  }, X.mergeEdge = function(f, a, t, n, i, o) {
    return a ? t == null ? f.mergeUndirectedEdge(n, i, o) : f.mergeUndirectedEdgeWithKey(t, n, i, o) : t == null ? f.mergeDirectedEdge(n, i, o) : f.mergeDirectedEdgeWithKey(t, n, i, o);
  }, X.updateEdge = function(f, a, t, n, i, o) {
    return a ? t == null ? f.updateUndirectedEdge(n, i, o) : f.updateUndirectedEdgeWithKey(t, n, i, o) : t == null ? f.updateDirectedEdge(n, i, o) : f.updateDirectedEdgeWithKey(t, n, i, o);
  }), X;
}
var we, Ke;
function Ot() {
  if (Ke) return we;
  Ke = 1;
  var g = B(), f = Nt().copyNode, a = re().copyEdge;
  return we = function(n, i) {
    if (!g(n) || !g(i)) throw new Error("graphology-operators/disjoint-union: invalid graph.");
    if (n.multi !== i.multi) throw new Error("graphology-operators/disjoint-union: both graph should be simple or multi.");
    var o = n.nullCopy();
    o.mergeAttributes(n.getAttributes());
    var e = {}, s = {}, r = 0;
    return n.forEachNode(function(u, h) {
      e[u] = r, f(o, r, h), r++;
    }), i.forEachNode(function(u, h) {
      s[u] = r, f(o, r, h), r++;
    }), r = 0, n.forEachEdge(function(u, h, p, E, w, m, A) {
      a(o, A, r++, e[p], e[E], E, h);
    }), i.forEachEdge(function(u, h, p, E, w, m, A) {
      a(o, A, r++, s[p], s[E], E, h);
    }), o;
  }, we;
}
var Ee, He;
function Bt() {
  if (He) return Ee;
  He = 1;
  var g = B(), f = re().copyEdge;
  return Ee = function(t) {
    if (!g(t)) throw new Error("graphology-operators/reverse: invalid graph.");
    var n = t.emptyCopy();
    return t.forEachEdge(function(i, o, e, s, r, u, h) {
      h ? f(n, true, i, e, s, o) : f(n, false, i, s, e, o);
    }), n;
  }, Ee;
}
var Ae, Xe;
function Gt() {
  if (Xe) return Ae;
  Xe = 1;
  var g = B(), f = Nt().copyNode, a = re().copyEdge;
  return Ae = function(n, i) {
    if (!g(n)) throw new Error("graphology-operators/subgraph: invalid graph instance.");
    var o = n.nullCopy(), e = i;
    if (Array.isArray(i)) {
      if (i.length === 0) return o;
      i = new Set(i);
    }
    if (i instanceof Set) {
      if (i.size === 0) return o;
      e = function(r) {
        return i.has(r);
      };
      var s = i;
      i = /* @__PURE__ */ new Set(), s.forEach(function(r) {
        i.add("" + r);
      });
    }
    if (typeof e != "function") throw new Error("graphology-operators/subgraph: invalid nodes. Expecting an array or a set or a filtering function.");
    if (typeof i == "function") {
      if (n.forEachNode(function(r, u) {
        e(r, u) && f(o, r, u);
      }), o.order === 0) return o;
    } else i.forEach(function(r) {
      if (!n.hasNode(r)) throw new Error('graphology-operators/subgraph: the "' + r + '" node was not found in the graph.');
      f(o, r, n.getNodeAttributes(r));
    });
    return n.forEachEdge(function(r, u, h, p, E, w, m) {
      e(h, E) && (p !== h && !e(p, w) || a(o, m, r, h, p, u));
    }), o;
  }, Ae;
}
var be, Je;
function _t() {
  if (Je) return be;
  Je = 1;
  var g = B(), f = re().copyEdge;
  return be = function(t, n) {
    if (!g(t)) throw new Error("graphology-operators/to-directed: expecting a valid graphology instance.");
    typeof n == "function" && (n = { mergeEdge: n }), n = n || {};
    var i = typeof n.mergeEdge == "function" ? n.mergeEdge : null;
    if (t.type === "directed") return t.copy();
    var o = t.emptyCopy({ type: "directed" });
    return t.forEachDirectedEdge(function(e, s, r, u) {
      f(o, false, e, r, u, s);
    }), t.forEachUndirectedEdge(function(e, s, r, u) {
      var h = !t.multi && t.type === "mixed" && o.edge(r, u), p = !t.multi && t.type === "mixed" && o.edge(u, r);
      h ? o.replaceEdgeAttributes(h, i(o.getEdgeAttributes(h), s)) : f(o, false, null, r, u, s), r !== u && (p ? o.replaceEdgeAttributes(p, i(o.getEdgeAttributes(p), s)) : f(o, false, null, u, r, s));
    }), o;
  }, be;
}
var ze, Ze;
function Ft() {
  if (Ze) return ze;
  Ze = 1;
  var g = B();
  return ze = function(a) {
    if (!g(a)) throw new Error("graphology-operators/to-mixed: expecting a valid graphology instance.");
    return a.copy({ type: "mixed" });
  }, ze;
}
var Ie, et;
function kt() {
  if (et) return Ie;
  et = 1;
  var g = B();
  return Ie = function(a) {
    if (!g(a)) throw new Error("graphology-operators/to-multi: expecting a valid graphology instance.");
    return a.copy({ multi: true });
  }, Ie;
}
var Ce, tt;
function $t() {
  if (tt) return Ce;
  tt = 1;
  var g = B(), f = re().copyEdge;
  return Ce = function(t, n) {
    if (!g(t)) throw new Error("graphology-operators/to-simple: expecting a valid graphology instance.");
    typeof n == "function" && (n = { mergeEdge: n }), n = n || {};
    var i = typeof n.mergeEdge == "function" ? n.mergeEdge : null;
    if (!t.multi) return t.copy();
    var o = t.emptyCopy({ multi: false });
    return t.forEachEdge(function(e, s, r, u, h, p, E) {
      var w = E ? o.undirectedEdge(r, u) : o.directedEdge(r, u);
      if (w) {
        i && o.replaceEdgeAttributes(w, i(o.getEdgeAttributes(w), s));
        return;
      }
      f(o, E, e, r, u, s);
    }), o;
  }, Ce;
}
var We, rt;
function Qt() {
  if (rt) return We;
  rt = 1;
  var g = B(), f = re().copyEdge;
  return We = function(t, n) {
    if (!g(t)) throw new Error("graphology-operators/to-undirected: expecting a valid graphology instance.");
    typeof n == "function" && (n = { mergeEdge: n }), n = n || {};
    var i = typeof n.mergeEdge == "function" ? n.mergeEdge : null;
    if (t.type === "undirected") return t.copy();
    var o = t.emptyCopy({ type: "undirected" });
    return t.forEachUndirectedEdge(function(e, s, r, u) {
      f(o, true, e, r, u, s);
    }), t.forEachDirectedEdge(function(e, s, r, u) {
      if (!t.multi) {
        var h = o.edge(r, u);
        if (h) {
          i && o.replaceEdgeAttributes(h, i(o.getEdgeAttributes(h), s));
          return;
        }
      }
      f(o, true, null, r, u, s);
    }), o;
  }, We;
}
var xe, it;
function Yt() {
  if (it) return xe;
  it = 1;
  var g = B();
  return xe = function(a, t) {
    if (!g(a) || !g(t)) throw new Error("graphology-operators/union: invalid graph.");
    if (a.multi !== t.multi) throw new Error("graphology-operators/union: both graph should be simple or multi.");
    var n = a.copy();
    return n.import(t, true), n;
  }, xe;
}
var nt;
function Vt() {
  return nt || (nt = 1, k.disjointUnion = Ot(), k.reverse = Bt(), k.subgraph = Gt(), k.toDirected = _t(), k.toMixed = Ft(), k.toMulti = kt(), k.toSimple = $t(), k.toUndirected = Qt(), k.union = Yt()), k;
}
Vt();
var J = {}, ue = {}, Z = {}, fe = {}, ot;
function Kt() {
  return ot || (ot = 1, fe.ARRAY_BUFFER_SUPPORT = typeof ArrayBuffer < "u", fe.SYMBOL_SUPPORT = typeof Symbol < "u"), fe;
}
var Me, st;
function Tt() {
  if (st) return Me;
  st = 1;
  var g = Kt(), f = g.ARRAY_BUFFER_SUPPORT, a = g.SYMBOL_SUPPORT;
  return Me = function(n, i) {
    var o, e, s, r, u;
    if (!n) throw new Error("obliterator/forEach: invalid iterable.");
    if (typeof i != "function") throw new Error("obliterator/forEach: expecting a callback.");
    if (Array.isArray(n) || f && ArrayBuffer.isView(n) || typeof n == "string" || n.toString() === "[object Arguments]") {
      for (s = 0, r = n.length; s < r; s++) i(n[s], s);
      return;
    }
    if (typeof n.forEach == "function") {
      n.forEach(i);
      return;
    }
    if (a && Symbol.iterator in n && typeof n.next != "function" && (n = n[Symbol.iterator]()), typeof n.next == "function") {
      for (o = n, s = 0; u = o.next(), u.done !== true; ) i(u.value, s), s++;
      return;
    }
    for (e in n) n.hasOwnProperty(e) && i(n[e], e);
  }, Me;
}
var Se = {}, at;
function ie() {
  return at || (at = 1, (function(g) {
    var f = Math.pow(2, 8) - 1, a = Math.pow(2, 16) - 1, t = Math.pow(2, 32) - 1, n = Math.pow(2, 7) - 1, i = Math.pow(2, 15) - 1, o = Math.pow(2, 31) - 1;
    g.getPointerArray = function(s) {
      var r = s - 1;
      if (r <= f) return Uint8Array;
      if (r <= a) return Uint16Array;
      if (r <= t) return Uint32Array;
      throw new Error("mnemonist: Pointer Array of size > 4294967295 is not supported.");
    }, g.getSignedPointerArray = function(s) {
      var r = s - 1;
      return r <= n ? Int8Array : r <= i ? Int16Array : r <= o ? Int32Array : Float64Array;
    }, g.getNumberType = function(s) {
      return s === (s | 0) ? Math.sign(s) === -1 ? s <= 127 && s >= -128 ? Int8Array : s <= 32767 && s >= -32768 ? Int16Array : Int32Array : s <= 255 ? Uint8Array : s <= 65535 ? Uint16Array : Uint32Array : Float64Array;
    };
    var e = { Uint8Array: 1, Int8Array: 2, Uint16Array: 3, Int16Array: 4, Uint32Array: 5, Int32Array: 6, Float32Array: 7, Float64Array: 8 };
    g.getMinimalRepresentation = function(s, r) {
      var u = null, h = 0, p, E, w, m, A;
      for (m = 0, A = s.length; m < A; m++) w = r ? r(s[m]) : s[m], E = g.getNumberType(w), p = e[E.name], p > h && (h = p, u = E);
      return u;
    }, g.isTypedArray = function(s) {
      return typeof ArrayBuffer < "u" && ArrayBuffer.isView(s);
    }, g.concat = function() {
      var s = 0, r, u, h;
      for (r = 0, h = arguments.length; r < h; r++) s += arguments[r].length;
      var p = new arguments[0].constructor(s);
      for (r = 0, u = 0; r < h; r++) p.set(arguments[r], u), u += arguments[r].length;
      return p;
    }, g.indices = function(s) {
      for (var r = g.getPointerArray(s), u = new r(s), h = 0; h < s; h++) u[h] = h;
      return u;
    };
  })(Se)), Se;
}
var ut;
function Fe() {
  if (ut) return Z;
  ut = 1;
  var g = Tt(), f = ie();
  function a(o) {
    return Array.isArray(o) || f.isTypedArray(o);
  }
  function t(o) {
    if (typeof o.length == "number") return o.length;
    if (typeof o.size == "number") return o.size;
  }
  function n(o) {
    var e = t(o), s = typeof e == "number" ? new Array(e) : [], r = 0;
    return g(o, function(u) {
      s[r++] = u;
    }), s;
  }
  function i(o) {
    var e = t(o), s = typeof e == "number" ? f.getPointerArray(e) : Array, r = typeof e == "number" ? new Array(e) : [], u = typeof e == "number" ? new s(e) : [], h = 0;
    return g(o, function(p) {
      r[h] = p, u[h] = h++;
    }), [r, u];
  }
  return Z.isArrayLike = a, Z.guessLength = t, Z.toArray = n, Z.toArrayWithIndices = i, Z;
}
var De, ft;
function ge() {
  if (ft) return De;
  ft = 1;
  function g(f) {
    if (typeof f != "function") throw new Error("obliterator/iterator: expecting a function!");
    this.next = f;
  }
  return typeof Symbol < "u" && (g.prototype[Symbol.iterator] = function() {
    return this;
  }), g.of = function() {
    var f = arguments, a = f.length, t = 0;
    return new g(function() {
      return t >= a ? { done: true } : { done: false, value: f[t++] };
    });
  }, g.empty = function() {
    var f = new g(function() {
      return { done: true };
    });
    return f;
  }, g.fromSequence = function(f) {
    var a = 0, t = f.length;
    return new g(function() {
      return a >= t ? { done: true } : { done: false, value: f[a++] };
    });
  }, g.is = function(f) {
    return f instanceof g ? true : typeof f == "object" && f !== null && typeof f.next == "function";
  }, De = g, De;
}
var qe, ht;
function jt() {
  if (ht) return qe;
  ht = 1;
  var g = Fe(), f = ge();
  function a(t, n) {
    if (arguments.length < 2) throw new Error("mnemonist/fixed-deque: expecting an Array class and a capacity.");
    if (typeof n != "number" || n <= 0) throw new Error("mnemonist/fixed-deque: `capacity` should be a positive number.");
    this.ArrayClass = t, this.capacity = n, this.items = new t(this.capacity), this.clear();
  }
  return a.prototype.clear = function() {
    this.start = 0, this.size = 0;
  }, a.prototype.push = function(t) {
    if (this.size === this.capacity) throw new Error("mnemonist/fixed-deque.push: deque capacity (" + this.capacity + ") exceeded!");
    var n = this.start + this.size;
    return n >= this.capacity && (n -= this.capacity), this.items[n] = t, ++this.size;
  }, a.prototype.unshift = function(t) {
    if (this.size === this.capacity) throw new Error("mnemonist/fixed-deque.unshift: deque capacity (" + this.capacity + ") exceeded!");
    var n = this.start - 1;
    return this.start === 0 && (n = this.capacity - 1), this.items[n] = t, this.start = n, ++this.size;
  }, a.prototype.pop = function() {
    if (this.size !== 0) {
      this.size--;
      var t = this.start + this.size;
      return t >= this.capacity && (t -= this.capacity), this.items[t];
    }
  }, a.prototype.shift = function() {
    if (this.size !== 0) {
      var t = this.start;
      return this.size--, this.start++, this.start === this.capacity && (this.start = 0), this.items[t];
    }
  }, a.prototype.peekFirst = function() {
    if (this.size !== 0) return this.items[this.start];
  }, a.prototype.peekLast = function() {
    if (this.size !== 0) {
      var t = this.start + this.size - 1;
      return t >= this.capacity && (t -= this.capacity), this.items[t];
    }
  }, a.prototype.get = function(t) {
    if (!(this.size === 0 || t >= this.capacity)) return t = this.start + t, t >= this.capacity && (t -= this.capacity), this.items[t];
  }, a.prototype.forEach = function(t, n) {
    n = arguments.length > 1 ? n : this;
    for (var i = this.capacity, o = this.size, e = this.start, s = 0; s < o; ) t.call(n, this.items[e], s, this), e++, s++, e === i && (e = 0);
  }, a.prototype.toArray = function() {
    var t = this.start + this.size;
    if (t < this.capacity) return this.items.slice(this.start, t);
    for (var n = new this.ArrayClass(this.size), i = this.capacity, o = this.size, e = this.start, s = 0; s < o; ) n[s] = this.items[e], e++, s++, e === i && (e = 0);
    return n;
  }, a.prototype.values = function() {
    var t = this.items, n = this.capacity, i = this.size, o = this.start, e = 0;
    return new f(function() {
      if (e >= i) return { done: true };
      var s = t[o];
      return o++, e++, o === n && (o = 0), { value: s, done: false };
    });
  }, a.prototype.entries = function() {
    var t = this.items, n = this.capacity, i = this.size, o = this.start, e = 0;
    return new f(function() {
      if (e >= i) return { done: true };
      var s = t[o];
      return o++, o === n && (o = 0), { value: [e++, s], done: false };
    });
  }, typeof Symbol < "u" && (a.prototype[Symbol.iterator] = a.prototype.values), a.prototype.inspect = function() {
    var t = this.toArray();
    return t.type = this.ArrayClass.name, t.capacity = this.capacity, Object.defineProperty(t, "constructor", { value: a, enumerable: false }), t;
  }, typeof Symbol < "u" && (a.prototype[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = a.prototype.inspect), a.from = function(t, n, i) {
    if (arguments.length < 3 && (i = g.guessLength(t), typeof i != "number")) throw new Error("mnemonist/fixed-deque.from: could not guess iterable length. Please provide desired capacity as last argument.");
    var o = new a(n, i);
    if (g.isArrayLike(t)) {
      var e, s;
      for (e = 0, s = t.length; e < s; e++) o.items[e] = t[e];
      return o.size = s, o;
    }
    return g.forEach(t, function(r) {
      o.push(r);
    }), o;
  }, qe = a, qe;
}
var Re, dt;
function Ht() {
  if (dt) return Re;
  dt = 1;
  var g = jt();
  function f(a) {
    this.graph = a, this.queue = new g(Array, a.order), this.seen = /* @__PURE__ */ new Set(), this.size = 0;
  }
  return f.prototype.hasAlreadySeenEverything = function() {
    return this.seen.size === this.graph.order;
  }, f.prototype.countUnseenNodes = function() {
    return this.graph.order - this.seen.size;
  }, f.prototype.forEachNodeYetUnseen = function(a) {
    var t = this.seen, n = this.graph;
    n.someNode(function(i, o) {
      if (t.size === n.order) return true;
      if (t.has(i)) return false;
      var e = a(i, o);
      return !!e;
    });
  }, f.prototype.has = function(a) {
    return this.seen.has(a);
  }, f.prototype.push = function(a) {
    var t = this.seen.size;
    return this.seen.add(a), t === this.seen.size ? false : (this.queue.push(a), this.size++, true);
  }, f.prototype.pushWith = function(a, t) {
    var n = this.seen.size;
    return this.seen.add(a), n === this.seen.size ? false : (this.queue.push(t), this.size++, true);
  }, f.prototype.shift = function() {
    var a = this.queue.shift();
    return this.size = this.queue.size, a;
  }, Re = f, Re;
}
var he = {}, ct;
function Ut() {
  if (ct) return he;
  ct = 1;
  function g(a, t, n) {
    this.node = a, this.attributes = t, this.depth = n;
  }
  function f(a) {
    return a[0].toUpperCase() + a.slice(1);
  }
  return he.TraversalRecord = g, he.capitalize = f, he;
}
var lt;
function Xt() {
  if (lt) return ue;
  lt = 1;
  var g = B(), f = Ht(), a = Ut(), t = a.TraversalRecord, n = a.capitalize;
  function i(o, e, s, r) {
    if (r = r || {}, !g(o)) throw new Error("graphology-traversal/bfs: expecting a graphology instance.");
    if (typeof s != "function") throw new Error("graphology-traversal/bfs: given callback is not a function.");
    if (o.order === 0) return;
    var u = new f(o), h = o["forEach" + n(r.mode || "outbound") + "Neighbor"].bind(o), p;
    e === null ? p = u.forEachNodeYetUnseen.bind(u) : p = function(A) {
      e = "" + e, A(e, o.getNodeAttributes(e));
    };
    var E, w;
    function m(A, d) {
      u.pushWith(A, new t(A, d, E.depth + 1));
    }
    p(function(A, d) {
      for (u.pushWith(A, new t(A, d, 0)); u.size !== 0; ) E = u.shift(), w = s(E.node, E.attributes, E.depth), w !== true && h(E.node, m);
    });
  }
  return ue.bfs = function(o, e, s) {
    return i(o, null, e, s);
  }, ue.bfsFromNode = i, ue;
}
var de = {}, Ne, pt;
function Jt() {
  if (pt) return Ne;
  pt = 1;
  function g(f) {
    this.graph = f, this.stack = new Array(f.order), this.seen = /* @__PURE__ */ new Set(), this.size = 0;
  }
  return g.prototype.hasAlreadySeenEverything = function() {
    return this.seen.size === this.graph.order;
  }, g.prototype.countUnseenNodes = function() {
    return this.graph.order - this.seen.size;
  }, g.prototype.forEachNodeYetUnseen = function(f) {
    var a = this.seen, t = this.graph;
    t.someNode(function(n, i) {
      if (a.size === t.order) return true;
      if (a.has(n)) return false;
      var o = f(n, i);
      return !!o;
    });
  }, g.prototype.has = function(f) {
    return this.seen.has(f);
  }, g.prototype.push = function(f) {
    var a = this.seen.size;
    return this.seen.add(f), a === this.seen.size ? false : (this.stack[this.size++] = f, true);
  }, g.prototype.pushWith = function(f, a) {
    var t = this.seen.size;
    return this.seen.add(f), t === this.seen.size ? false : (this.stack[this.size++] = a, true);
  }, g.prototype.pop = function() {
    if (this.size !== 0) return this.stack[--this.size];
  }, Ne = g, Ne;
}
var gt;
function Zt() {
  if (gt) return de;
  gt = 1;
  var g = B(), f = Jt(), a = Ut(), t = a.TraversalRecord, n = a.capitalize;
  function i(o, e, s, r) {
    if (r = r || {}, !g(o)) throw new Error("graphology-traversal/dfs: expecting a graphology instance.");
    if (typeof s != "function") throw new Error("graphology-traversal/dfs: given callback is not a function.");
    if (o.order === 0) return;
    var u = new f(o), h = o["forEach" + n(r.mode || "outbound") + "Neighbor"].bind(o), p;
    e === null ? p = u.forEachNodeYetUnseen.bind(u) : p = function(A) {
      e = "" + e, A(e, o.getNodeAttributes(e));
    };
    var E, w;
    function m(A, d) {
      u.pushWith(A, new t(A, d, E.depth + 1));
    }
    p(function(A, d) {
      for (u.pushWith(A, new t(A, d, 0)); u.size !== 0; ) E = u.pop(), w = s(E.node, E.attributes, E.depth), w !== true && h(E.node, m);
    });
  }
  return de.dfs = function(o, e, s) {
    return i(o, null, e, s);
  }, de.dfsFromNode = i, de;
}
var yt;
function er() {
  if (yt) return J;
  yt = 1;
  var g = Xt(), f = Zt();
  return J.bfs = g.bfs, J.bfsFromNode = g.bfsFromNode, J.dfs = f.dfs, J.dfsFromNode = f.dfsFromNode, J;
}
er();
var ce = {}, Te, vt;
function tr() {
  if (vt) return Te;
  vt = 1;
  var g = ge(), f = Fe();
  function a(t, n) {
    if (arguments.length < 2) throw new Error("mnemonist/fixed-stack: expecting an Array class and a capacity.");
    if (typeof n != "number" || n <= 0) throw new Error("mnemonist/fixed-stack: `capacity` should be a positive number.");
    this.capacity = n, this.ArrayClass = t, this.items = new this.ArrayClass(this.capacity), this.clear();
  }
  return a.prototype.clear = function() {
    this.size = 0;
  }, a.prototype.push = function(t) {
    if (this.size === this.capacity) throw new Error("mnemonist/fixed-stack.push: stack capacity (" + this.capacity + ") exceeded!");
    return this.items[this.size++] = t, this.size;
  }, a.prototype.pop = function() {
    if (this.size !== 0) return this.items[--this.size];
  }, a.prototype.peek = function() {
    return this.items[this.size - 1];
  }, a.prototype.forEach = function(t, n) {
    n = arguments.length > 1 ? n : this;
    for (var i = 0, o = this.items.length; i < o; i++) t.call(n, this.items[o - i - 1], i, this);
  }, a.prototype.toArray = function() {
    for (var t = new this.ArrayClass(this.size), n = this.size - 1, i = this.size; i--; ) t[i] = this.items[n - i];
    return t;
  }, a.prototype.values = function() {
    var t = this.items, n = this.size, i = 0;
    return new g(function() {
      if (i >= n) return { done: true };
      var o = t[n - i - 1];
      return i++, { value: o, done: false };
    });
  }, a.prototype.entries = function() {
    var t = this.items, n = this.size, i = 0;
    return new g(function() {
      if (i >= n) return { done: true };
      var o = t[n - i - 1];
      return { value: [i++, o], done: false };
    });
  }, typeof Symbol < "u" && (a.prototype[Symbol.iterator] = a.prototype.values), a.prototype.toString = function() {
    return this.toArray().join(",");
  }, a.prototype.toJSON = function() {
    return this.toArray();
  }, a.prototype.inspect = function() {
    var t = this.toArray();
    return t.type = this.ArrayClass.name, t.capacity = this.capacity, Object.defineProperty(t, "constructor", { value: a, enumerable: false }), t;
  }, typeof Symbol < "u" && (a.prototype[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = a.prototype.inspect), a.from = function(t, n, i) {
    if (arguments.length < 3 && (i = f.guessLength(t), typeof i != "number")) throw new Error("mnemonist/fixed-stack.from: could not guess iterable length. Please provide desired capacity as last argument.");
    var o = new a(n, i);
    if (f.isArrayLike(t)) {
      var e, s;
      for (e = 0, s = t.length; e < s; e++) o.items[e] = t[e];
      return o.size = s, o;
    }
    return f.forEach(t, function(r) {
      o.push(r);
    }), o;
  }, Te = a, Te;
}
var ee = {}, mt;
function rr() {
  if (mt) return ee;
  mt = 1;
  var g = function(n, i) {
    return n < i ? -1 : n > i ? 1 : 0;
  }, f = function(n, i) {
    return n < i ? 1 : n > i ? -1 : 0;
  };
  function a(n) {
    return function(i, o) {
      return n(o, i);
    };
  }
  function t(n) {
    return n === 2 ? function(i, o) {
      return i[0] < o[0] ? -1 : i[0] > o[0] ? 1 : i[1] < o[1] ? -1 : i[1] > o[1] ? 1 : 0;
    } : function(i, o) {
      for (var e = 0; e < n; ) {
        if (i[e] < o[e]) return -1;
        if (i[e] > o[e]) return 1;
        e++;
      }
      return 0;
    };
  }
  return ee.DEFAULT_COMPARATOR = g, ee.DEFAULT_REVERSE_COMPARATOR = f, ee.reverseComparator = a, ee.createTupleComparator = t, ee;
}
var je, wt;
function ir() {
  if (wt) return je;
  wt = 1;
  var g = Tt(), f = rr(), a = Fe(), t = f.DEFAULT_COMPARATOR, n = f.reverseComparator;
  function i(d, y, l, c) {
    for (var v = y[c], z, C; c > l; ) {
      if (z = c - 1 >> 1, C = y[z], d(v, C) < 0) {
        y[c] = C, c = z;
        continue;
      }
      break;
    }
    y[c] = v;
  }
  function o(d, y, l) {
    for (var c = y.length, v = l, z = y[l], C = 2 * l + 1, I; C < c; ) I = C + 1, I < c && d(y[C], y[I]) >= 0 && (C = I), y[l] = y[C], l = C, C = 2 * l + 1;
    y[l] = z, i(d, y, v, l);
  }
  function e(d, y, l) {
    y.push(l), i(d, y, 0, y.length - 1);
  }
  function s(d, y) {
    var l = y.pop();
    if (y.length !== 0) {
      var c = y[0];
      return y[0] = l, o(d, y, 0), c;
    }
    return l;
  }
  function r(d, y, l) {
    if (y.length === 0) throw new Error("mnemonist/heap.replace: cannot pop an empty heap.");
    var c = y[0];
    return y[0] = l, o(d, y, 0), c;
  }
  function u(d, y, l) {
    var c;
    return y.length !== 0 && d(y[0], l) < 0 && (c = y[0], y[0] = l, l = c, o(d, y, 0)), l;
  }
  function h(d, y) {
    for (var l = y.length, c = l >> 1, v = c; --v >= 0; ) o(d, y, v);
  }
  function p(d, y) {
    for (var l = y.length, c = 0, v = new Array(l); c < l; ) v[c++] = s(d, y);
    return v;
  }
  function E(d, y, l) {
    arguments.length === 2 && (l = y, y = d, d = t);
    var c = n(d), v, z, C, I = 1 / 0, b;
    if (y === 1) {
      if (a.isArrayLike(l)) {
        for (v = 0, z = l.length; v < z; v++) C = l[v], (I === 1 / 0 || d(C, I) < 0) && (I = C);
        return b = new l.constructor(1), b[0] = I, b;
      }
      return g(l, function(x) {
        (I === 1 / 0 || d(x, I) < 0) && (I = x);
      }), [I];
    }
    if (a.isArrayLike(l)) {
      if (y >= l.length) return l.slice().sort(d);
      for (b = l.slice(0, y), h(c, b), v = y, z = l.length; v < z; v++) c(l[v], b[0]) > 0 && r(c, b, l[v]);
      return b.sort(d);
    }
    var W = a.guessLength(l);
    return W !== null && W < y && (y = W), b = new Array(y), v = 0, g(l, function(x) {
      v < y ? b[v] = x : (v === y && h(c, b), c(x, b[0]) > 0 && r(c, b, x)), v++;
    }), b.length > v && (b.length = v), b.sort(d);
  }
  function w(d, y, l) {
    arguments.length === 2 && (l = y, y = d, d = t);
    var c = n(d), v, z, C, I = -1 / 0, b;
    if (y === 1) {
      if (a.isArrayLike(l)) {
        for (v = 0, z = l.length; v < z; v++) C = l[v], (I === -1 / 0 || d(C, I) > 0) && (I = C);
        return b = new l.constructor(1), b[0] = I, b;
      }
      return g(l, function(x) {
        (I === -1 / 0 || d(x, I) > 0) && (I = x);
      }), [I];
    }
    if (a.isArrayLike(l)) {
      if (y >= l.length) return l.slice().sort(c);
      for (b = l.slice(0, y), h(d, b), v = y, z = l.length; v < z; v++) d(l[v], b[0]) > 0 && r(d, b, l[v]);
      return b.sort(c);
    }
    var W = a.guessLength(l);
    return W !== null && W < y && (y = W), b = new Array(y), v = 0, g(l, function(x) {
      v < y ? b[v] = x : (v === y && h(d, b), d(x, b[0]) > 0 && r(d, b, x)), v++;
    }), b.length > v && (b.length = v), b.sort(c);
  }
  function m(d) {
    if (this.clear(), this.comparator = d || t, typeof this.comparator != "function") throw new Error("mnemonist/Heap.constructor: given comparator should be a function.");
  }
  m.prototype.clear = function() {
    this.items = [], this.size = 0;
  }, m.prototype.push = function(d) {
    return e(this.comparator, this.items, d), ++this.size;
  }, m.prototype.peek = function() {
    return this.items[0];
  }, m.prototype.pop = function() {
    return this.size !== 0 && this.size--, s(this.comparator, this.items);
  }, m.prototype.replace = function(d) {
    return r(this.comparator, this.items, d);
  }, m.prototype.pushpop = function(d) {
    return u(this.comparator, this.items, d);
  }, m.prototype.consume = function() {
    return this.size = 0, p(this.comparator, this.items);
  }, m.prototype.toArray = function() {
    return p(this.comparator, this.items.slice());
  }, m.prototype.inspect = function() {
    var d = this.toArray();
    return Object.defineProperty(d, "constructor", { value: m, enumerable: false }), d;
  }, typeof Symbol < "u" && (m.prototype[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = m.prototype.inspect);
  function A(d) {
    if (this.clear(), this.comparator = d || t, typeof this.comparator != "function") throw new Error("mnemonist/MaxHeap.constructor: given comparator should be a function.");
    this.comparator = n(this.comparator);
  }
  return A.prototype = m.prototype, m.from = function(d, y) {
    var l = new m(y), c;
    return a.isArrayLike(d) ? c = d.slice() : c = a.toArray(d), h(l.comparator, c), l.items = c, l.size = c.length, l;
  }, A.from = function(d, y) {
    var l = new A(y), c;
    return a.isArrayLike(d) ? c = d.slice() : c = a.toArray(d), h(l.comparator, c), l.items = c, l.size = c.length, l;
  }, m.siftUp = o, m.siftDown = i, m.push = e, m.pop = s, m.replace = r, m.pushpop = u, m.heapify = h, m.consume = p, m.nsmallest = E, m.nlargest = w, m.MinHeap = m, m.MaxHeap = A, je = m, je;
}
var le = {}, Et;
function nr() {
  if (Et) return le;
  Et = 1;
  var g = ie(), f = Rt().createEdgeWeightGetter;
  function a(i, o) {
    return i === "outbound" || i === "inbound" ? o.directedSize + o.undirectedSize * 2 : i === "in" || i === "out" || i === "directed" ? o.directedSize : o.undirectedSize * 2;
  }
  function t(i, o) {
    o = o || "outbound";
    var e = i[o + "Neighbors"].bind(i), s = a(o, i), r = g.getPointerArray(s), u = g.getPointerArray(i.order);
    this.graph = i, this.neighborhood = new u(s), this.starts = new r(i.order + 1), this.nodes = i.nodes();
    var h = {}, p, E, w, m, A, d, y = 0;
    for (p = 0, E = i.order; p < E; p++) h[this.nodes[p]] = p;
    for (p = 0, E = i.order; p < E; p++) for (A = this.nodes[p], d = e(A), this.starts[p] = y, w = 0, m = d.length; w < m; w++) this.neighborhood[y++] = h[d[w]];
    this.starts[p] = s;
  }
  t.prototype.bounds = function(i) {
    return [this.starts[i], this.starts[i + 1]];
  }, t.prototype.project = function() {
    var i = this, o = {};
    return i.nodes.forEach(function(e, s) {
      o[e] = Array.from(i.neighborhood.slice(i.starts[s], i.starts[s + 1])).map(function(r) {
        return i.nodes[r];
      });
    }), o;
  }, t.prototype.collect = function(i) {
    var o, e, s = {};
    for (o = 0, e = i.length; o < e; o++) s[this.nodes[o]] = i[o];
    return s;
  }, t.prototype.assign = function(i, o) {
    var e = 0;
    this.graph.updateEachNodeAttributes(function(s, r) {
      return r[i] = o[e++], r;
    }, { attributes: [i] });
  }, le.NeighborhoodIndex = t;
  function n(i, o, e) {
    e = e || "outbound";
    var s = i[e + "Edges"].bind(i), r = a(e, i), u = g.getPointerArray(r), h = g.getPointerArray(i.order), p = f(o).fromMinimalEntry;
    this.graph = i, this.neighborhood = new h(r), this.weights = new Float64Array(r), this.outDegrees = new Float64Array(i.order), this.starts = new u(i.order + 1), this.nodes = i.nodes();
    var E = {}, w, m, A, d, y, l, c, v, z, C = 0;
    for (w = 0, m = i.order; w < m; w++) E[this.nodes[w]] = w;
    for (w = 0, m = i.order; w < m; w++) for (y = this.nodes[w], c = s(y), this.starts[w] = C, A = 0, d = c.length; A < d; A++) v = c[A], l = i.opposite(y, v), z = p(v, i.getEdgeAttributes(v)), this.neighborhood[C] = E[l], this.weights[C++] = z, this.outDegrees[w] += z;
    this.starts[w] = r;
  }
  return n.prototype.bounds = t.prototype.bounds, n.prototype.project = t.prototype.project, n.prototype.collect = t.prototype.collect, n.prototype.assign = t.prototype.assign, le.WeightedNeighborhoodIndex = n, le;
}
var At;
function or() {
  if (At) return ce;
  At = 1;
  var g = jt(), f = tr(), a = ir(), t = ie(), n = nr(), i = n.NeighborhoodIndex, o = n.WeightedNeighborhoodIndex;
  ce.createUnweightedIndexedBrandes = function(r) {
    var u = new i(r), h = u.neighborhood, p = u.starts, E = r.order, w = new f(t.getPointerArray(E), E), m = new Uint32Array(E), A = new Array(E), d = new Int32Array(E), y = new g(Uint32Array, E), l = function(c) {
      var v, z, C, I, b, W, x;
      for (W = 0; W < E; W++) A[W] = [], m[W] = 0, d[W] = -1;
      for (m[c] = 1, d[c] = 0, y.push(c); y.size !== 0; ) for (W = y.shift(), w.push(W), v = d[W], z = m[W], C = p[W], I = p[W + 1], b = C; b < I; b++) x = h[b], d[x] === -1 && (y.push(x), d[x] = v + 1), d[x] === v + 1 && (m[x] += z, A[x].push(W));
      return [w, A, m];
    };
    return l.index = u, l;
  };
  function e(s, r) {
    return s[0] > r[0] ? 1 : s[0] < r[0] ? -1 : s[1] > r[1] ? 1 : s[1] < r[1] ? -1 : s[2] > r[2] ? 1 : s[2] < r[2] ? -1 : s[3] > r[3] ? 1 : s[3] < r[3] ? -1 : 0;
  }
  return ce.createDijkstraIndexedBrandes = function(r, u) {
    var h = new o(r, u || "weight"), p = h.neighborhood, E = h.weights, w = h.starts, m = r.order, A = new f(t.getPointerArray(m), m), d = new Uint32Array(m), y = new Array(m), l = new Float64Array(m), c = new Float64Array(m), v = new a(e), z = function(C) {
      var I, b, W, x, M, L, O, S, R, U = 0;
      for (S = 0; S < m; S++) y[S] = [], d[S] = 0, l[S] = -1, c[S] = -1;
      for (d[C] = 1, c[C] = 0, v.push([0, U++, C, C]); v.size !== 0; ) if (W = v.pop(), x = W[0], M = W[2], S = W[3], l[S] === -1) for (A.push(S), l[S] = x, d[S] += d[M], I = w[S], b = w[S + 1], O = I; O < b; O++) R = p[O], L = x + E[O], l[R] === -1 && (c[R] === -1 || L < c[R]) ? (c[R] = L, v.push([L, U++, S, R]), d[R] = 0, y[R] = [S]) : L === c[R] && (d[R] += d[S], y[R].push(S));
      return [A, y, d];
    };
    return z.index = h, z;
  }, ce;
}
var Ue, bt;
function ke() {
  if (bt) return Ue;
  bt = 1;
  function g(a) {
    return !a || typeof a != "object" || typeof a == "function" || Array.isArray(a) || a instanceof Set || a instanceof Map || a instanceof RegExp || a instanceof Date;
  }
  function f(a, t) {
    a = a || {};
    var n = {};
    for (var i in t) {
      var o = a[i], e = t[i];
      if (!g(e)) {
        n[i] = f(o, e);
        continue;
      }
      o === void 0 ? n[i] = e : n[i] = o;
    }
    return n;
  }
  return Ue = f, Ue;
}
var Pe, zt;
function sr() {
  if (zt) return Pe;
  zt = 1;
  var g = B(), f = or(), a = ke(), t = f.createUnweightedIndexedBrandes, n = f.createDijkstraIndexedBrandes, i = { nodeCentralityAttribute: "betweennessCentrality", getEdgeWeight: "weight", normalized: true };
  function o(s, r, u) {
    if (!g(r)) throw new Error("graphology-centrality/beetweenness-centrality: the given graph is not a valid graphology instance.");
    u = a(u, i);
    var h = u.nodeCentralityAttribute, p = u.normalized, E = u.getEdgeWeight ? n(r, u.getEdgeWeight) : t(r), w = r.order, m, A, d, y, l, c, v, z, C, I, b = new Float64Array(w), W = new Float64Array(w);
    for (c = 0; c < w; c++) {
      for (m = E(c), A = m[0], d = m[1], y = m[2], v = A.size; v--; ) b[A.items[A.size - v]] = 0;
      for (; A.size !== 0; ) {
        for (I = A.pop(), l = (1 + b[I]) / y[I], v = 0, z = d[I].length; v < z; v++) C = d[I][v], b[C] += y[C] * l;
        I !== c && (W[I] += b[I]);
      }
    }
    var x = null;
    if (p ? x = w <= 2 ? null : 1 / ((w - 1) * (w - 2)) : x = r.type === "undirected" ? 0.5 : null, x !== null) for (c = 0; c < w; c++) W[c] *= x;
    return s ? E.index.assign(h, W) : E.index.collect(W);
  }
  var e = o.bind(null, false);
  return e.assign = o.bind(null, true), Pe = e, Pe;
}
sr();
var se = {}, It;
function ar() {
  if (It) return se;
  It = 1;
  var g = B();
  function f(i, o, e, s) {
    var r = o + "Centrality";
    if (!g(e)) throw new Error("graphology-centrality/" + r + ": the given graph is not a valid graphology instance.");
    if (o !== "degree" && e.type === "undirected") throw new Error("graphology-centrality/" + r + ": cannot compute " + o + " centrality on an undirected graph.");
    s = s || {};
    var u = s.nodeCentralityAttribute || r, h = e.order - 1, p = e[o].bind(e);
    if (i) {
      e.updateEachNodeAttributes(function(w, m) {
        return m[u] = p(w) / h, m;
      }, { attributes: [u] });
      return;
    }
    var E = {};
    return e.forEachNode(function(w) {
      E[w] = p(w) / h;
    }), E;
  }
  var a = f.bind(null, false, "degree"), t = f.bind(null, false, "inDegree"), n = f.bind(null, false, "outDegree");
  return a.assign = f.bind(null, true, "degree"), t.assign = f.bind(null, true, "inDegree"), n.assign = f.bind(null, true, "outDegree"), se.degreeCentrality = a, se.inDegreeCentrality = t, se.outDegreeCentrality = n, se;
}
ar();
var Le, Ct;
function ur() {
  if (Ct) return Le;
  Ct = 1;
  var g = B();
  return Le = function(a) {
    if (!g(a)) throw new Error("graphology-utils/infer-type: expecting a valid graphology instance.");
    var t = a.type;
    return t !== "mixed" ? t : a.directedSize === 0 && a.undirectedSize === 0 || a.directedSize > 0 && a.undirectedSize > 0 ? "mixed" : a.directedSize > 0 ? "directed" : "undirected";
  }, Le;
}
var Oe, Wt;
function fr() {
  if (Wt) return Oe;
  Wt = 1;
  var g = ge(), f = ie().getPointerArray;
  function a(t, n) {
    arguments.length < 2 && (n = t, t = Array);
    var i = f(n);
    this.size = 0, this.length = n, this.dense = new i(n), this.sparse = new i(n), this.vals = new t(n);
  }
  return a.prototype.clear = function() {
    this.size = 0;
  }, a.prototype.has = function(t) {
    var n = this.sparse[t];
    return n < this.size && this.dense[n] === t;
  }, a.prototype.get = function(t) {
    var n = this.sparse[t];
    if (n < this.size && this.dense[n] === t) return this.vals[n];
  }, a.prototype.set = function(t, n) {
    var i = this.sparse[t];
    return i < this.size && this.dense[i] === t ? (this.vals[i] = n, this) : (this.dense[this.size] = t, this.sparse[t] = this.size, this.vals[this.size] = n, this.size++, this);
  }, a.prototype.delete = function(t) {
    var n = this.sparse[t];
    return n >= this.size || this.dense[n] !== t ? false : (n = this.dense[this.size - 1], this.dense[this.sparse[t]] = n, this.sparse[n] = this.sparse[t], this.size--, true);
  }, a.prototype.forEach = function(t, n) {
    n = arguments.length > 1 ? n : this;
    for (var i = 0; i < this.size; i++) t.call(n, this.vals[i], this.dense[i]);
  }, a.prototype.keys = function() {
    var t = this.size, n = this.dense, i = 0;
    return new g(function() {
      if (i < t) {
        var o = n[i];
        return i++, { value: o };
      }
      return { done: true };
    });
  }, a.prototype.values = function() {
    var t = this.size, n = this.vals, i = 0;
    return new g(function() {
      if (i < t) {
        var o = n[i];
        return i++, { value: o };
      }
      return { done: true };
    });
  }, a.prototype.entries = function() {
    var t = this.size, n = this.dense, i = this.vals, o = 0;
    return new g(function() {
      if (o < t) {
        var e = [n[o], i[o]];
        return o++, { value: e };
      }
      return { done: true };
    });
  }, typeof Symbol < "u" && (a.prototype[Symbol.iterator] = a.prototype.entries), a.prototype.inspect = function() {
    for (var t = /* @__PURE__ */ new Map(), n = 0; n < this.size; n++) t.set(this.dense[n], this.vals[n]);
    return Object.defineProperty(t, "constructor", { value: a, enumerable: false }), t.length = this.length, this.vals.constructor !== Array && (t.type = this.vals.constructor.name), t;
  }, typeof Symbol < "u" && (a.prototype[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = a.prototype.inspect), Oe = a, Oe;
}
var Be, xt;
function hr() {
  if (xt) return Be;
  xt = 1;
  var g = ge(), f = ie().getPointerArray;
  function a(t) {
    var n = f(t);
    this.start = 0, this.size = 0, this.capacity = t, this.dense = new n(t), this.sparse = new n(t);
  }
  return a.prototype.clear = function() {
    this.start = 0, this.size = 0;
  }, a.prototype.has = function(t) {
    if (this.size === 0) return false;
    var n = this.sparse[t], i = n < this.capacity && n >= this.start && n < this.start + this.size || n < (this.start + this.size) % this.capacity;
    return i && this.dense[n] === t;
  }, a.prototype.enqueue = function(t) {
    var n = this.sparse[t];
    if (this.size !== 0) {
      var i = n < this.capacity && n >= this.start && n < this.start + this.size || n < (this.start + this.size) % this.capacity;
      if (i && this.dense[n] === t) return this;
    }
    return n = (this.start + this.size) % this.capacity, this.dense[n] = t, this.sparse[t] = n, this.size++, this;
  }, a.prototype.dequeue = function() {
    if (this.size !== 0) {
      var t = this.start;
      this.size--, this.start++, this.start === this.capacity && (this.start = 0);
      var n = this.dense[t];
      return this.sparse[n] = this.capacity, n;
    }
  }, a.prototype.forEach = function(t, n) {
    n = arguments.length > 1 ? n : this;
    for (var i = this.capacity, o = this.size, e = this.start, s = 0; s < o; ) t.call(n, this.dense[e], s, this), e++, s++, e === i && (e = 0);
  }, a.prototype.values = function() {
    var t = this.dense, n = this.capacity, i = this.size, o = this.start, e = 0;
    return new g(function() {
      if (e >= i) return { done: true };
      var s = t[o];
      return o++, e++, o === n && (o = 0), { value: s, done: false };
    });
  }, typeof Symbol < "u" && (a.prototype[Symbol.iterator] = a.prototype.values), a.prototype.inspect = function() {
    var t = [];
    return this.forEach(function(n) {
      t.push(n);
    }), Object.defineProperty(t, "constructor", { value: a, enumerable: false }), t.capacity = this.capacity, t;
  }, typeof Symbol < "u" && (a.prototype[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = a.prototype.inspect), Be = a, Be;
}
var Ge, Mt;
function dr() {
  if (Mt) return Ge;
  Mt = 1;
  function g(a) {
    return function(t) {
      return typeof t != "number" && (t = t.length), Math.floor(a() * t);
    };
  }
  var f = g(Math.random);
  return f.createRandomIndex = g, Ge = f, Ge;
}
var pe = {}, St;
function cr() {
  if (St) return pe;
  St = 1;
  var g = ie(), f = ke(), a = Rt().createEdgeWeightGetter, t = /* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom"), n = { getEdgeWeight: "weight", keepDendrogram: false, resolution: 1 };
  function i(e, s) {
    s = f(s, n);
    var r = s.resolution, u = a(s.getEdgeWeight).fromEntry, h = (e.size - e.selfLoopCount) * 2, p = g.getPointerArray(h), E = g.getPointerArray(e.order + 1), w = s.getEdgeWeight ? Float64Array : g.getPointerArray(e.size * 2);
    this.C = e.order, this.M = 0, this.E = h, this.U = 0, this.resolution = r, this.level = 0, this.graph = e, this.nodes = new Array(e.order), this.keepDendrogram = s.keepDendrogram, this.neighborhood = new E(h), this.weights = new w(h), this.loops = new w(e.order), this.starts = new p(e.order + 1), this.belongings = new E(e.order), this.dendrogram = [], this.mapping = null, this.counts = new E(e.order), this.unused = new E(e.order), this.totalWeights = new w(e.order);
    var m = {}, A, d = 0, y = 0, l = this;
    e.forEachNode(function(c) {
      l.nodes[d] = c, m[c] = d, y += e.undirectedDegreeWithoutSelfLoops(c), l.starts[d] = y, l.belongings[d] = d, l.counts[d] = 1, d++;
    }), e.forEachEdge(function(c, v, z, C, I, b, W) {
      if (A = u(c, v, z, C, I, b, W), z = m[z], C = m[C], l.M += A, z === C) l.totalWeights[z] += A * 2, l.loops[z] = A * 2;
      else {
        l.totalWeights[z] += A, l.totalWeights[C] += A;
        var x = --l.starts[z], M = --l.starts[C];
        l.neighborhood[x] = C, l.neighborhood[M] = z, l.weights[x] = A, l.weights[M] = A;
      }
    }), this.starts[d] = this.E, this.keepDendrogram ? this.dendrogram.push(this.belongings.slice()) : this.mapping = this.belongings.slice();
  }
  i.prototype.isolate = function(e, s) {
    var r = this.belongings[e];
    if (this.counts[r] === 1) return r;
    var u = this.unused[--this.U], h = this.loops[e];
    return this.totalWeights[r] -= s + h, this.totalWeights[u] += s + h, this.belongings[e] = u, this.counts[r]--, this.counts[u]++, u;
  }, i.prototype.move = function(e, s, r) {
    var u = this.belongings[e], h = this.loops[e];
    this.totalWeights[u] -= s + h, this.totalWeights[r] += s + h, this.belongings[e] = r;
    var p = this.counts[u]-- === 1;
    this.counts[r]++, p && (this.unused[this.U++] = u);
  }, i.prototype.computeNodeDegree = function(e) {
    var s, r, u, h = 0;
    for (s = this.starts[e], r = this.starts[e + 1]; s < r; s++) u = this.weights[s], h += u;
    return h;
  }, i.prototype.expensiveIsolate = function(e) {
    var s = this.computeNodeDegree(e);
    return this.isolate(e, s);
  }, i.prototype.expensiveMove = function(e, s) {
    var r = this.computeNodeDegree(e);
    this.move(e, r, s);
  }, i.prototype.zoomOut = function() {
    var e = new Array(this.C - this.U), s = {}, r = this.nodes.length, u = 0, h = 0, p, E, w, m, A, d, y, l, c;
    for (p = 0, w = this.C; p < w; p++) d = this.belongings[p], d in s || (s[d] = u, e[u] = { adj: {}, totalWeights: this.totalWeights[d], internalWeights: 0 }, u++), this.belongings[p] = s[d];
    var v, z;
    if (this.keepDendrogram) {
      for (v = this.dendrogram[this.level], z = new (g.getPointerArray(u))(r), p = 0; p < r; p++) z[p] = this.belongings[v[p]];
      this.dendrogram.push(z);
    } else for (p = 0; p < r; p++) this.mapping[p] = this.belongings[this.mapping[p]];
    for (p = 0, w = this.C; p < w; p++) for (d = this.belongings[p], l = e[d], c = l.adj, l.internalWeights += this.loops[p], E = this.starts[p], m = this.starts[p + 1]; E < m; E++) {
      if (A = this.neighborhood[E], y = this.belongings[A], d === y) {
        l.internalWeights += this.weights[E];
        continue;
      }
      y in c || (c[y] = 0), c[y] += this.weights[E];
    }
    for (this.C = u, A = 0, d = 0; d < u; d++) {
      l = e[d], c = l.adj, d = +d, this.totalWeights[d] = l.totalWeights, this.loops[d] = l.internalWeights, this.counts[d] = 1, this.starts[d] = A, this.belongings[d] = d;
      for (y in c) this.neighborhood[A] = +y, this.weights[A] = c[y], h++, A++;
    }
    return this.starts[u] = h, this.E = h, this.U = 0, this.level++, s;
  }, i.prototype.modularity = function() {
    var e, s, r, u, h, p = 0, E = this.M * 2, w = new Float64Array(this.C);
    for (r = 0; r < this.C; r++) for (e = this.belongings[r], w[e] += this.loops[r], u = this.starts[r], h = this.starts[r + 1]; u < h; u++) s = this.belongings[this.neighborhood[u]], e === s && (w[e] += this.weights[u]);
    for (r = 0; r < this.C; r++) p += w[r] / E - Math.pow(this.totalWeights[r] / E, 2) * this.resolution;
    return p;
  }, i.prototype.delta = function(e, s, r, u) {
    var h = this.M, p = this.totalWeights[u];
    return s += this.loops[e], r / h - p * s * this.resolution / (2 * h * h);
  }, i.prototype.deltaWithOwnCommunity = function(e, s, r, u) {
    var h = this.M, p = this.totalWeights[u];
    return s += this.loops[e], r / h - (p - s) * s * this.resolution / (2 * h * h);
  }, i.prototype.fastDelta = function(e, s, r, u) {
    var h = this.M, p = this.totalWeights[u];
    return s += this.loops[e], r - s * p * this.resolution / (2 * h);
  }, i.prototype.fastDeltaWithOwnCommunity = function(e, s, r, u) {
    var h = this.M, p = this.totalWeights[u];
    return s += this.loops[e], r - s * (p - s) * this.resolution / (2 * h);
  }, i.prototype.bounds = function(e) {
    return [this.starts[e], this.starts[e + 1]];
  }, i.prototype.project = function() {
    var e = this, s = {};
    return e.nodes.slice(0, this.C).forEach(function(r, u) {
      s[r] = Array.from(e.neighborhood.slice(e.starts[u], e.starts[u + 1])).map(function(h) {
        return e.nodes[h];
      });
    }), s;
  }, i.prototype.collect = function(e) {
    arguments.length < 1 && (e = this.level);
    var s = {}, r = this.keepDendrogram ? this.dendrogram[e] : this.mapping, u, h;
    for (u = 0, h = r.length; u < h; u++) s[this.nodes[u]] = r[u];
    return s;
  }, i.prototype.assign = function(e, s) {
    arguments.length < 2 && (s = this.level);
    var r = this.keepDendrogram ? this.dendrogram[s] : this.mapping, u, h;
    for (u = 0, h = r.length; u < h; u++) this.graph.setNodeAttribute(this.nodes[u], e, r[u]);
  }, i.prototype[t] = function() {
    var e = {};
    Object.defineProperty(e, "constructor", { value: i, enumerable: false }), e.C = this.C, e.M = this.M, e.E = this.E, e.U = this.U, e.resolution = this.resolution, e.level = this.level, e.nodes = this.nodes, e.starts = this.starts.slice(0, e.C + 1);
    var s = ["neighborhood", "weights"], r = ["counts", "loops", "belongings", "totalWeights"], u = this;
    return s.forEach(function(h) {
      e[h] = u[h].slice(0, e.E);
    }), r.forEach(function(h) {
      e[h] = u[h].slice(0, e.C);
    }), e.unused = this.unused.slice(0, this.U), this.keepDendrogram ? e.dendrogram = this.dendrogram : e.mapping = this.mapping, e;
  };
  function o(e, s) {
    s = f(s, n);
    var r = s.resolution, u = a(s.getEdgeWeight).fromEntry, h = (e.size - e.selfLoopCount) * 2, p = g.getPointerArray(h), E = g.getPointerArray(e.order + 1), w = s.getEdgeWeight ? Float64Array : g.getPointerArray(e.size * 2);
    this.C = e.order, this.M = 0, this.E = h, this.U = 0, this.resolution = r, this.level = 0, this.graph = e, this.nodes = new Array(e.order), this.keepDendrogram = s.keepDendrogram, this.neighborhood = new E(h), this.weights = new w(h), this.loops = new w(e.order), this.starts = new p(e.order + 1), this.offsets = new p(e.order), this.belongings = new E(e.order), this.dendrogram = [], this.counts = new E(e.order), this.unused = new E(e.order), this.totalInWeights = new w(e.order), this.totalOutWeights = new w(e.order);
    var m = {}, A, d = 0, y = 0, l = this;
    e.forEachNode(function(c) {
      l.nodes[d] = c, m[c] = d, y += e.outDegreeWithoutSelfLoops(c), l.starts[d] = y, y += e.inDegreeWithoutSelfLoops(c), l.offsets[d] = y, l.belongings[d] = d, l.counts[d] = 1, d++;
    }), e.forEachEdge(function(c, v, z, C, I, b, W) {
      if (A = u(c, v, z, C, I, b, W), z = m[z], C = m[C], l.M += A, z === C) l.loops[z] += A, l.totalInWeights[z] += A, l.totalOutWeights[z] += A;
      else {
        l.totalOutWeights[z] += A, l.totalInWeights[C] += A;
        var x = --l.starts[z], M = --l.offsets[C];
        l.neighborhood[x] = C, l.neighborhood[M] = z, l.weights[x] = A, l.weights[M] = A;
      }
    }), this.starts[d] = this.E, this.keepDendrogram ? this.dendrogram.push(this.belongings.slice()) : this.mapping = this.belongings.slice();
  }
  return o.prototype.bounds = i.prototype.bounds, o.prototype.inBounds = function(e) {
    return [this.offsets[e], this.starts[e + 1]];
  }, o.prototype.outBounds = function(e) {
    return [this.starts[e], this.offsets[e]];
  }, o.prototype.project = i.prototype.project, o.prototype.projectIn = function() {
    var e = this, s = {};
    return e.nodes.slice(0, this.C).forEach(function(r, u) {
      s[r] = Array.from(e.neighborhood.slice(e.offsets[u], e.starts[u + 1])).map(function(h) {
        return e.nodes[h];
      });
    }), s;
  }, o.prototype.projectOut = function() {
    var e = this, s = {};
    return e.nodes.slice(0, this.C).forEach(function(r, u) {
      s[r] = Array.from(e.neighborhood.slice(e.starts[u], e.offsets[u])).map(function(h) {
        return e.nodes[h];
      });
    }), s;
  }, o.prototype.isolate = function(e, s, r) {
    var u = this.belongings[e];
    if (this.counts[u] === 1) return u;
    var h = this.unused[--this.U], p = this.loops[e];
    return this.totalInWeights[u] -= s + p, this.totalInWeights[h] += s + p, this.totalOutWeights[u] -= r + p, this.totalOutWeights[h] += r + p, this.belongings[e] = h, this.counts[u]--, this.counts[h]++, h;
  }, o.prototype.move = function(e, s, r, u) {
    var h = this.belongings[e], p = this.loops[e];
    this.totalInWeights[h] -= s + p, this.totalInWeights[u] += s + p, this.totalOutWeights[h] -= r + p, this.totalOutWeights[u] += r + p, this.belongings[e] = u;
    var E = this.counts[h]-- === 1;
    this.counts[u]++, E && (this.unused[this.U++] = h);
  }, o.prototype.computeNodeInDegree = function(e) {
    var s, r, u, h = 0;
    for (s = this.offsets[e], r = this.starts[e + 1]; s < r; s++) u = this.weights[s], h += u;
    return h;
  }, o.prototype.computeNodeOutDegree = function(e) {
    var s, r, u, h = 0;
    for (s = this.starts[e], r = this.offsets[e]; s < r; s++) u = this.weights[s], h += u;
    return h;
  }, o.prototype.expensiveMove = function(e, s) {
    var r = this.computeNodeInDegree(e), u = this.computeNodeOutDegree(e);
    this.move(e, r, u, s);
  }, o.prototype.zoomOut = function() {
    var e = new Array(this.C - this.U), s = {}, r = this.nodes.length, u = 0, h = 0, p, E, w, m, A, d, y, l, c, v, z, C, I;
    for (p = 0, w = this.C; p < w; p++) d = this.belongings[p], d in s || (s[d] = u, e[u] = { inAdj: {}, outAdj: {}, totalInWeights: this.totalInWeights[d], totalOutWeights: this.totalOutWeights[d], internalWeights: 0 }, u++), this.belongings[p] = s[d];
    var b, W;
    if (this.keepDendrogram) {
      for (b = this.dendrogram[this.level], W = new (g.getPointerArray(u))(r), p = 0; p < r; p++) W[p] = this.belongings[b[p]];
      this.dendrogram.push(W);
    } else for (p = 0; p < r; p++) this.mapping[p] = this.belongings[this.mapping[p]];
    for (p = 0, w = this.C; p < w; p++) for (d = this.belongings[p], c = this.offsets[p], l = e[d], C = l.inAdj, I = l.outAdj, l.internalWeights += this.loops[p], E = this.starts[p], m = this.starts[p + 1]; E < m; E++) {
      if (A = this.neighborhood[E], y = this.belongings[A], v = E < c, z = v ? I : C, d === y) {
        v && (l.internalWeights += this.weights[E]);
        continue;
      }
      y in z || (z[y] = 0), z[y] += this.weights[E];
    }
    for (this.C = u, A = 0, d = 0; d < u; d++) {
      l = e[d], C = l.inAdj, I = l.outAdj, d = +d, this.totalInWeights[d] = l.totalInWeights, this.totalOutWeights[d] = l.totalOutWeights, this.loops[d] = l.internalWeights, this.counts[d] = 1, this.starts[d] = A, this.belongings[d] = d;
      for (y in I) this.neighborhood[A] = +y, this.weights[A] = I[y], h++, A++;
      this.offsets[d] = A;
      for (y in C) this.neighborhood[A] = +y, this.weights[A] = C[y], h++, A++;
    }
    return this.starts[u] = h, this.E = h, this.U = 0, this.level++, s;
  }, o.prototype.modularity = function() {
    var e, s, r, u, h, p = 0, E = this.M, w = new Float64Array(this.C);
    for (r = 0; r < this.C; r++) for (e = this.belongings[r], w[e] += this.loops[r], u = this.starts[r], h = this.offsets[r]; u < h; u++) s = this.belongings[this.neighborhood[u]], e === s && (w[e] += this.weights[u]);
    for (r = 0; r < this.C; r++) p += w[r] / E - this.totalInWeights[r] * this.totalOutWeights[r] / Math.pow(E, 2) * this.resolution;
    return p;
  }, o.prototype.delta = function(e, s, r, u, h) {
    var p = this.M, E = this.totalInWeights[h], w = this.totalOutWeights[h], m = this.loops[e];
    return s += m, r += m, u / p - (r * E + s * w) * this.resolution / (p * p);
  }, o.prototype.deltaWithOwnCommunity = function(e, s, r, u, h) {
    var p = this.M, E = this.totalInWeights[h], w = this.totalOutWeights[h], m = this.loops[e];
    return s += m, r += m, u / p - (r * (E - s) + s * (w - r)) * this.resolution / (p * p);
  }, o.prototype.collect = i.prototype.collect, o.prototype.assign = i.prototype.assign, o.prototype[t] = function() {
    var e = {};
    Object.defineProperty(e, "constructor", { value: o, enumerable: false }), e.C = this.C, e.M = this.M, e.E = this.E, e.U = this.U, e.resolution = this.resolution, e.level = this.level, e.nodes = this.nodes, e.starts = this.starts.slice(0, e.C + 1);
    var s = ["neighborhood", "weights"], r = ["counts", "offsets", "loops", "belongings", "totalInWeights", "totalOutWeights"], u = this;
    return s.forEach(function(h) {
      e[h] = u[h].slice(0, e.E);
    }), r.forEach(function(h) {
      e[h] = u[h].slice(0, e.C);
    }), e.unused = this.unused.slice(0, this.U), this.keepDendrogram ? e.dendrogram = this.dendrogram : e.mapping = this.mapping, e;
  }, pe.UndirectedLouvainIndex = i, pe.DirectedLouvainIndex = o, pe;
}
var _e, Dt;
function lr() {
  if (Dt) return _e;
  Dt = 1;
  var g = ke(), f = B(), a = ur(), t = fr(), n = hr(), i = dr().createRandomIndex, o = cr(), e = o.UndirectedLouvainIndex, s = o.DirectedLouvainIndex, r = { nodeCommunityAttribute: "community", getEdgeWeight: "weight", fastLocalMoves: true, randomWalk: true, resolution: 1, rng: Math.random };
  function u(d, y, l) {
    var c = d.get(y);
    typeof c > "u" && (c = 0), c += l, d.set(y, c);
  }
  var h = 1e-10;
  function p(d, y, l, c, v) {
    return Math.abs(c - v) < h ? d === y ? false : l > d : c > v;
  }
  function E(d, y, l) {
    var c = new e(y, { getEdgeWeight: l.getEdgeWeight, keepDendrogram: d, resolution: l.resolution }), v = i(l.rng), z = true, C = true, I, b, W = new t(Float64Array, c.C), x, M, L, O, S, R, U, N, G, D, P, _, q, j, Y, T, F = 0, V = 0, $ = [], K, Q;
    for (l.fastLocalMoves && (x = new n(c.C)); z; ) {
      if (D = c.C, z = false, C = true, l.fastLocalMoves) {
        for (Q = 0, R = l.randomWalk ? v(D) : 0, U = 0; U < D; U++, R++) N = R % D, x.enqueue(N);
        for (; x.size !== 0; ) {
          for (N = x.dequeue(), V++, P = 0, W.clear(), I = c.belongings[N], M = c.starts[N], L = c.starts[N + 1]; M < L; M++) G = c.neighborhood[M], O = c.weights[M], b = c.belongings[G], P += O, u(W, b, O);
          for (j = c.fastDeltaWithOwnCommunity(N, P, W.get(I) || 0, I), q = I, S = 0; S < W.size; S++) b = W.dense[S], b !== I && (_ = W.vals[S], F++, T = c.fastDelta(N, P, _, b), Y = p(q, I, b, T, j), Y && (j = T, q = b));
          if (j < 0) {
            if (q = c.isolate(N, P), q === I) continue;
          } else {
            if (q === I) continue;
            c.move(N, P, q);
          }
          for (z = true, Q++, M = c.starts[N], L = c.starts[N + 1]; M < L; M++) G = c.neighborhood[M], b = c.belongings[G], b !== q && x.enqueue(G);
        }
        $.push(Q);
      } else for (K = [], $.push(K); C; ) {
        for (C = false, Q = 0, R = l.randomWalk ? v(D) : 0, U = 0; U < D; U++, R++) {
          for (N = R % D, V++, P = 0, W.clear(), I = c.belongings[N], M = c.starts[N], L = c.starts[N + 1]; M < L; M++) G = c.neighborhood[M], O = c.weights[M], b = c.belongings[G], P += O, u(W, b, O);
          for (j = c.fastDeltaWithOwnCommunity(N, P, W.get(I) || 0, I), q = I, S = 0; S < W.size; S++) b = W.dense[S], b !== I && (_ = W.vals[S], F++, T = c.fastDelta(N, P, _, b), Y = p(q, I, b, T, j), Y && (j = T, q = b));
          if (j < 0) {
            if (q = c.isolate(N, P), q === I) continue;
          } else {
            if (q === I) continue;
            c.move(N, P, q);
          }
          C = true, Q++;
        }
        K.push(Q), z = C || z;
      }
      z && c.zoomOut();
    }
    var ne = { index: c, deltaComputations: F, nodesVisited: V, moves: $ };
    return ne;
  }
  function w(d, y, l) {
    var c = new s(y, { getEdgeWeight: l.getEdgeWeight, keepDendrogram: d, resolution: l.resolution }), v = i(l.rng), z = true, C = true, I, b, W = new t(Float64Array, c.C), x, M, L, O, S, R, U, N, G, D, P, _, q, j, Y, T, F, V, $, K = 0, Q = 0, ne = [], ye, H;
    for (l.fastLocalMoves && (x = new n(c.C)); z; ) {
      if (_ = c.C, z = false, C = true, l.fastLocalMoves) {
        for (H = 0, N = l.randomWalk ? v(_) : 0, G = 0; G < _; G++, N++) D = N % _, x.enqueue(D);
        for (; x.size !== 0; ) {
          for (D = x.dequeue(), Q++, q = 0, j = 0, W.clear(), I = c.belongings[D], M = c.starts[D], L = c.starts[D + 1], O = c.offsets[D]; M < L; M++) S = M < O, P = c.neighborhood[M], R = c.weights[M], b = c.belongings[P], S ? j += R : q += R, u(W, b, R);
          for (F = c.deltaWithOwnCommunity(D, q, j, W.get(I) || 0, I), T = I, U = 0; U < W.size; U++) b = W.dense[U], b !== I && (Y = W.vals[U], K++, $ = c.delta(D, q, j, Y, b), V = p(T, I, b, $, F), V && (F = $, T = b));
          if (F < 0) {
            if (T = c.isolate(D, q, j), T === I) continue;
          } else {
            if (T === I) continue;
            c.move(D, q, j, T);
          }
          for (z = true, H++, M = c.starts[D], L = c.starts[D + 1]; M < L; M++) P = c.neighborhood[M], b = c.belongings[P], b !== T && x.enqueue(P);
        }
        ne.push(H);
      } else for (ye = [], ne.push(ye); C; ) {
        for (C = false, H = 0, N = l.randomWalk ? v(_) : 0, G = 0; G < _; G++, N++) {
          for (D = N % _, Q++, q = 0, j = 0, W.clear(), I = c.belongings[D], M = c.starts[D], L = c.starts[D + 1], O = c.offsets[D]; M < L; M++) S = M < O, P = c.neighborhood[M], R = c.weights[M], b = c.belongings[P], S ? j += R : q += R, u(W, b, R);
          for (F = c.deltaWithOwnCommunity(D, q, j, W.get(I) || 0, I), T = I, U = 0; U < W.size; U++) b = W.dense[U], b !== I && (Y = W.vals[U], K++, $ = c.delta(D, q, j, Y, b), V = p(T, I, b, $, F), V && (F = $, T = b));
          if (F < 0) {
            if (T = c.isolate(D, q, j), T === I) continue;
          } else {
            if (T === I) continue;
            c.move(D, q, j, T);
          }
          C = true, H++;
        }
        ye.push(H), z = C || z;
      }
      z && c.zoomOut();
    }
    var Lt = { index: c, deltaComputations: K, nodesVisited: Q, moves: ne };
    return Lt;
  }
  function m(d, y, l, c) {
    if (!f(l)) throw new Error("graphology-communities-louvain: the given graph is not a valid graphology instance.");
    var v = a(l);
    if (v === "mixed") throw new Error("graphology-communities-louvain: cannot run the algorithm on a true mixed graph.");
    c = g(c, r);
    var z = 0;
    if (l.size === 0) {
      if (d) {
        l.forEachNode(function(M) {
          l.setNodeAttribute(M, c.nodeCommunityAttribute, z++);
        });
        return;
      }
      var C = {};
      return l.forEachNode(function(M) {
        C[M] = z++;
      }), y ? { communities: C, count: l.order, deltaComputations: 0, dendrogram: null, level: 0, modularity: NaN, moves: null, nodesVisited: 0, resolution: c.resolution } : C;
    }
    var I = v === "undirected" ? E : w, b = I(y, l, c), W = b.index;
    if (!y) {
      if (d) {
        W.assign(c.nodeCommunityAttribute);
        return;
      }
      return W.collect();
    }
    var x = { count: W.C, deltaComputations: b.deltaComputations, dendrogram: W.dendrogram, level: W.level, modularity: W.modularity(), moves: b.moves, nodesVisited: b.nodesVisited, resolution: c.resolution };
    return d ? (W.assign(c.nodeCommunityAttribute), x) : (x.communities = W.collect(), x);
  }
  var A = m.bind(null, false, false);
  return A.assign = m.bind(null, true, false), A.detailed = m.bind(null, false, true), A.defaults = r, _e = A, _e;
}
lr();
let ae = null;
async function pr(g) {
  if (ae === null) {
    ae = /* @__PURE__ */ new Map();
    const f = await te.atomIntelligence.toArray();
    for (const a of f) for (const t of a.entityMentions) {
      const n = t.entityId;
      if (!n) continue;
      const i = ae.get(n);
      i ? i.push(a.atomId) : ae.set(n, [a.atomId]);
    }
  }
  return ae.get(g) ?? [];
}
async function mr(g) {
  const f = g.toLowerCase().trim(), a = await te.entities.toArray(), t = a.find((v) => v.canonicalName.toLowerCase() === f) ?? a.find((v) => v.canonicalName.toLowerCase().includes(f));
  if (!t) return null;
  const n = await te.entityRelations.toArray(), i = await gr(t, a, n), o = Pt(i), e = new Set(i.map((v) => v.canonicalName)), s = new Set([...e].map((v) => v.toLowerCase())), r = await te.assertions.filter((v) => v.active === true).toArray(), u = r.filter((v) => e.has(v.subject)), h = r.filter((v) => !e.has(v.subject) && [...s].some((z) => v.object.toLowerCase().includes(z))), p = /* @__PURE__ */ new Map();
  for (const v of [...u, ...h]) p.set(v.id, v);
  const w = [...p.values()].sort((v, z) => z.confidence - v.confidence).slice(0, 12).map((v) => ({ content: `${v.subject} ${v.predicate.replace(/-/g, " ")} ${v.object}`, confidence: v.confidence, category: v.category })), m = new Set(i.map((v) => v.id)), d = n.filter((v) => v.relationshipType !== "alias-of" && (m.has(v.sourceEntityId) || m.has(v.targetEntityId))).slice(0, 8).map((v) => {
    var _a;
    const z = m.has(v.sourceEntityId) ? v.targetEntityId : v.sourceEntityId;
    return { name: ((_a = a.find((I) => I.id === z)) == null ? void 0 : _a.canonicalName) ?? z, relationship: v.relationshipType };
  }), y = i.reduce((v, z) => v + (z.mentionCount ?? 0), 0), l = i.reduce((v, z) => Math.max(v, z.lastSeen ?? 0), 0), c = await pr(o.id).catch(() => []);
  return { entity: { name: o.canonicalName, type: o.type, mentionCount: y, lastMentionedAt: l }, assertions: w, relatedEntities: d, recentMentions: c.length };
}
async function gr(g, f, a) {
  const t = a.filter((e) => e.relationshipType === "alias-of"), n = /* @__PURE__ */ new Map();
  for (const e of t) n.has(e.sourceEntityId) || n.set(e.sourceEntityId, /* @__PURE__ */ new Set()), n.has(e.targetEntityId) || n.set(e.targetEntityId, /* @__PURE__ */ new Set()), n.get(e.sourceEntityId).add(e.targetEntityId), n.get(e.targetEntityId).add(e.sourceEntityId);
  const i = /* @__PURE__ */ new Set([g.id]), o = [g.id];
  for (; o.length; ) {
    const e = o.shift(), s = n.get(e);
    if (s) for (const r of s) i.has(r) || (i.add(r), o.push(r));
  }
  return f.filter((e) => i.has(e.id));
}
function Pt(g) {
  return g.length === 1 ? g[0] : g.reduce((f, a) => {
    const t = qt(f);
    return qt(a) > t ? a : f;
  });
}
function qt(g) {
  const f = g.canonicalName ?? "";
  let a = g.mentionCount ?? 0;
  return f.includes("@") || (a += 1e4), f && f[0] === f[0].toUpperCase() && f.includes(" ") && f !== f.toUpperCase() && (a += 5e3), a;
}
function wr(g) {
  const f = [], { entity: a, assertions: t, relatedEntities: n, recentMentions: i } = g;
  if (f.push(`Here's what I know about ${a.name} (${a.type}):`), f.push(""), t.length > 0) {
    f.push(`Facts (${t.length} assertion${t.length !== 1 ? "s" : ""}):`);
    for (const s of t) {
      const r = Math.round(s.confidence * 100);
      f.push(`  - ${s.content} (${r}% confidence)`);
    }
    f.push("");
  }
  if (n.length > 0) {
    const s = n.map((r) => `${r.name} (${r.relationship.replace(/-/g, " ")})`).join(", ");
    f.push(`Connected to: ${s}`), f.push("");
  }
  const o = a.mentionCount === 1 ? "mentioned once" : `mentioned ${a.mentionCount} times`, e = a.lastMentionedAt > 0 ? yr(a.lastMentionedAt) : "unknown";
  return f.push(`${o}, last seen ${e}.`), i > 0 && f.push(`Appears in ${i} captured atom${i !== 1 ? "s" : ""}.`), f.join(`
`);
}
function yr(g) {
  const a = Date.now() - g, t = Math.floor(a / 6e4), n = Math.floor(a / 36e5), i = Math.floor(a / 864e5);
  if (t < 2) return "just now";
  if (t < 60) return `${t} minutes ago`;
  if (n < 24) return `${n} hour${n !== 1 ? "s" : ""} ago`;
  if (i < 7) return `${i} day${i !== 1 ? "s" : ""} ago`;
  const o = Math.floor(i / 7);
  return `${o} week${o !== 1 ? "s" : ""} ago`;
}
async function Er(g) {
  const f = g.toLowerCase().trim(), a = await te.entities.toArray(), n = (await te.entityRelations.toArray()).filter((r) => r.relationshipType === "alias-of"), i = /* @__PURE__ */ new Map();
  for (const r of n) i.has(r.sourceEntityId) || i.set(r.sourceEntityId, /* @__PURE__ */ new Set()), i.has(r.targetEntityId) || i.set(r.targetEntityId, /* @__PURE__ */ new Set()), i.get(r.sourceEntityId).add(r.targetEntityId), i.get(r.targetEntityId).add(r.sourceEntityId);
  const o = /* @__PURE__ */ new Map();
  for (const r of a) {
    if (o.has(r.id)) continue;
    const u = /* @__PURE__ */ new Set([r.id]), h = [r.id];
    for (; h.length; ) {
      const E = h.shift(), w = i.get(E);
      if (w) for (const m of w) u.has(m) || (u.add(m), h.push(m));
    }
    const p = r.id;
    for (const E of u) o.set(E, p);
  }
  const e = /* @__PURE__ */ new Map();
  for (const r of a) {
    const u = o.get(r.id) ?? r.id;
    e.has(u) || e.set(u, []), e.get(u).push(r);
  }
  const s = [];
  for (const [, r] of e) {
    if (!r.some((w) => w.canonicalName.toLowerCase().includes(f))) continue;
    const h = Pt(r), p = r.reduce((w, m) => w + (m.mentionCount ?? 0), 0), E = r.filter((w) => w.id !== h.id).map((w) => w.canonicalName).filter((w, m, A) => A.indexOf(w) === m);
    s.push({ name: h.canonicalName, type: h.type, mentionCount: p, organization: h.organization ?? null, emails: E });
  }
  return s.sort((r, u) => u.mentionCount - r.mentionCount);
}
function Ar(g, f) {
  if (f.length === 0) return `I don't know anyone matching "${g}".`;
  if (f.length === 1) {
    const t = f[0], n = t.emails && t.emails.length > 0 ? ` (also known as: ${t.emails.slice(0, 3).join(", ")})` : "";
    return `I only know one ${g}: ${t.name}${n} \u2014 mentioned ${t.mentionCount} time${t.mentionCount !== 1 ? "s" : ""}.`;
  }
  const a = [];
  a.push(`I know ${f.length} distinct people matching "${g}":`), a.push("");
  for (const t of f) {
    const n = t.organization ? ` \u2014 ${t.organization}` : "", i = t.mentionCount > 0 ? ` (${t.mentionCount} mention${t.mentionCount !== 1 ? "s" : ""})` : "";
    if (a.push(`  ${t.name}${n}${i}`), t.emails && t.emails.length > 0) {
      const o = t.emails.slice(0, 3).join(", "), e = t.emails.length > 3 ? ` +${t.emails.length - 3} more` : "";
      a.push(`     aka: ${o}${e}`);
    }
  }
  return a.join(`
`);
}
export {
  Ar as formatDisambiguationAsText,
  wr as formatRecallAsText,
  Er as recallEntitiesByName,
  mr as recallEntity
};
