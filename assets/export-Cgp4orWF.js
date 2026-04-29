const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DwiQ5yRy.js","assets/index-brdPi_7R.css"])))=>i.map(i=>d[i]);
import { _ as Ei, __tla as __tla_0 } from "./index-DwiQ5yRy.js";
import { c as Ai, g as Ti } from "./_commonjsHelpers-Cpj98o6Y.js";
let io;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var Ln = {
    exports: {}
  }, xi = Ln.exports, zr;
  function ki() {
    return zr || (zr = 1, (function($, L) {
      ((k, P) => {
        $.exports = P();
      })(xi, function() {
        var k = function(e, t) {
          return (k = Object.setPrototypeOf || ({
            __proto__: []
          } instanceof Array ? function(n, r) {
            n.__proto__ = r;
          } : function(n, r) {
            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
          }))(e, t);
        }, P = function() {
          return (P = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
        };
        function V(e, t, n) {
          for (var r, i = 0, a = t.length; i < a; i++) !r && i in t || ((r = r || Array.prototype.slice.call(t, 0, i))[i] = t[i]);
          return e.concat(r || Array.prototype.slice.call(t));
        }
        var N = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Ai, w = Object.keys, G = Array.isArray;
        function ce(e, t) {
          return typeof t == "object" && w(t).forEach(function(n) {
            e[n] = t[n];
          }), e;
        }
        typeof Promise > "u" || N.Promise || (N.Promise = Promise);
        var x = Object.getPrototypeOf, ie = {}.hasOwnProperty;
        function le(e, t) {
          return ie.call(e, t);
        }
        function qe(e, t) {
          typeof t == "function" && (t = t(x(e))), (typeof Reflect > "u" ? w : Reflect.ownKeys)(t).forEach(function(n) {
            be(e, n, t[n]);
          });
        }
        var Qe = Object.defineProperty;
        function be(e, t, n, r) {
          Qe(e, t, ce(n && le(n, "get") && typeof n.get == "function" ? {
            get: n.get,
            set: n.set,
            configurable: true
          } : {
            value: n,
            configurable: true,
            writable: true
          }, r));
        }
        function ge(e) {
          return {
            from: function(t) {
              return e.prototype = Object.create(t.prototype), be(e.prototype, "constructor", e), {
                extend: qe.bind(null, e.prototype)
              };
            }
          };
        }
        var Me = Object.getOwnPropertyDescriptor, wt = [].slice;
        function Xe(e, t, n) {
          return wt.call(e, t, n);
        }
        function ue(e, t) {
          return t(e);
        }
        function pt(e) {
          if (!e) throw new Error("Assertion Failed");
        }
        function me(e) {
          N.setImmediate ? setImmediate(e) : setTimeout(e, 0);
        }
        function Te(e, t) {
          if (typeof t == "string" && le(e, t)) return e[t];
          if (!t) return e;
          if (typeof t != "string") {
            for (var n = [], r = 0, i = t.length; r < i; ++r) {
              var a = Te(e, t[r]);
              n.push(a);
            }
            return n;
          }
          var u, l = t.indexOf(".");
          return l === -1 || (u = e[t.substr(0, l)]) == null ? void 0 : Te(u, t.substr(l + 1));
        }
        function we(e, t, n) {
          if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
            pt(typeof n != "string" && "length" in n);
            for (var r = 0, i = t.length; r < i; ++r) we(e, t[r], n[r]);
          } else {
            var a, u, l = t.indexOf(".");
            l !== -1 ? (a = t.substr(0, l), (l = t.substr(l + 1)) === "" ? n === void 0 ? G(e) && !isNaN(parseInt(a)) ? e.splice(a, 1) : delete e[a] : e[a] = n : we(u = (u = e[a]) && le(e, a) ? u : e[a] = {}, l, n)) : n === void 0 ? G(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = n;
          }
        }
        function _t(e) {
          var t, n = {};
          for (t in e) le(e, t) && (n[t] = e[t]);
          return n;
        }
        var j = [].concat;
        function f(e) {
          return j.apply([], e);
        }
        var it = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(f([
          8,
          16,
          32,
          64
        ].map(function(e) {
          return [
            "Int",
            "Uint",
            "Float"
          ].map(function(t) {
            return t + e + "Array";
          });
        }))).filter(function(e) {
          return N[e];
        }), M = new Set(it.map(function(e) {
          return N[e];
        })), B = null;
        function xe(e) {
          return B = /* @__PURE__ */ new WeakMap(), e = (function t(n) {
            if (!n || typeof n != "object") return n;
            var r = B.get(n);
            if (r) return r;
            if (G(n)) {
              r = [], B.set(n, r);
              for (var i = 0, a = n.length; i < a; ++i) r.push(t(n[i]));
            } else if (M.has(n.constructor)) r = n;
            else {
              var u, l = x(n);
              for (u in r = l === Object.prototype ? {} : Object.create(l), B.set(n, r), n) le(n, u) && (r[u] = t(n[u]));
            }
            return r;
          })(e), B = null, e;
        }
        var Se = {}.toString;
        function Ue(e) {
          return Se.call(e).slice(8, -1);
        }
        var Ge = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", ct = typeof Ge == "symbol" ? function(e) {
          var t;
          return e != null && (t = e[Ge]) && t.apply(e);
        } : function() {
          return null;
        };
        function lt(e, t) {
          t = e.indexOf(t), 0 <= t && e.splice(t, 1);
        }
        var ut = {};
        function Ne(e) {
          var t, n, r, i;
          if (arguments.length === 1) {
            if (G(e)) return e.slice();
            if (this === ut && typeof e == "string") return [
              e
            ];
            if (i = ct(e)) for (n = []; !(r = i.next()).done; ) n.push(r.value);
            else {
              if (e == null) return [
                e
              ];
              if (typeof (t = e.length) != "number") return [
                e
              ];
              for (n = new Array(t); t--; ) n[t] = e[t];
            }
          } else for (t = arguments.length, n = new Array(t); t--; ) n[t] = arguments[t];
          return n;
        }
        var He = typeof Symbol < "u" ? function(e) {
          return e[Symbol.toStringTag] === "AsyncFunction";
        } : function() {
          return false;
        }, it = [
          "Unknown",
          "Constraint",
          "Data",
          "TransactionInactive",
          "ReadOnly",
          "Version",
          "NotFound",
          "InvalidState",
          "InvalidAccess",
          "Abort",
          "Timeout",
          "QuotaExceeded",
          "Syntax",
          "DataClone"
        ], _e = [
          "Modify",
          "Bulk",
          "OpenFailed",
          "VersionChange",
          "Schema",
          "Upgrade",
          "InvalidTable",
          "MissingAPI",
          "NoSuchDatabase",
          "InvalidArgument",
          "SubTransaction",
          "Unsupported",
          "Internal",
          "DatabaseClosed",
          "PrematureCommit",
          "ForeignAwait"
        ].concat(it), Dt = {
          VersionChanged: "Database version changed by other database connection",
          DatabaseClosed: "Database has been closed",
          Abort: "Transaction aborted",
          TransactionInactive: "Transaction has already completed or failed",
          MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
        };
        function ve(e, t) {
          this.name = e, this.message = t;
        }
        function ze(e, t) {
          return e + ". Errors: " + Object.keys(t).map(function(n) {
            return t[n].toString();
          }).filter(function(n, r, i) {
            return i.indexOf(n) === r;
          }).join(`
`);
        }
        function vt(e, t, n, r) {
          this.failures = t, this.failedKeys = r, this.successCount = n, this.message = ze(e, t);
        }
        function I(e, t) {
          this.name = "BulkError", this.failures = Object.keys(t).map(function(n) {
            return t[n];
          }), this.failuresByPos = t, this.message = ze(e, this.failures);
        }
        ge(ve).from(Error).extend({
          toString: function() {
            return this.name + ": " + this.message;
          }
        }), ge(vt).from(ve), ge(I).from(ve);
        var R = _e.reduce(function(e, t) {
          return e[t] = t + "Error", e;
        }, {}), F = ve, E = _e.reduce(function(e, t) {
          var n = t + "Error";
          function r(i, a) {
            this.name = n, i ? typeof i == "string" ? (this.message = "".concat(i).concat(a ? `
 ` + a : ""), this.inner = a || null) : typeof i == "object" && (this.message = "".concat(i.name, " ").concat(i.message), this.inner = i) : (this.message = Dt[t] || n, this.inner = null);
          }
          return ge(r).from(F), e[t] = r, e;
        }, {}), Q = (E.Syntax = SyntaxError, E.Type = TypeError, E.Range = RangeError, it.reduce(function(e, t) {
          return e[t + "Error"] = E[t], e;
        }, {}));
        it = _e.reduce(function(e, t) {
          return [
            "Syntax",
            "Type",
            "Range"
          ].indexOf(t) === -1 && (e[t + "Error"] = E[t]), e;
        }, {});
        function oe() {
        }
        function Ee(e) {
          return e;
        }
        function Ce(e, t) {
          return e == null || e === Ee ? t : function(n) {
            return t(e(n));
          };
        }
        function fe(e, t) {
          return function() {
            e.apply(this, arguments), t.apply(this, arguments);
          };
        }
        function mt(e, t) {
          return e === oe ? t : function() {
            var n = e.apply(this, arguments), r = (n !== void 0 && (arguments[0] = n), this.onsuccess), i = this.onerror, a = (this.onsuccess = null, this.onerror = null, t.apply(this, arguments));
            return r && (this.onsuccess = this.onsuccess ? fe(r, this.onsuccess) : r), i && (this.onerror = this.onerror ? fe(i, this.onerror) : i), a !== void 0 ? a : n;
          };
        }
        function kt(e, t) {
          return e === oe ? t : function() {
            e.apply(this, arguments);
            var n = this.onsuccess, r = this.onerror;
            this.onsuccess = this.onerror = null, t.apply(this, arguments), n && (this.onsuccess = this.onsuccess ? fe(n, this.onsuccess) : n), r && (this.onerror = this.onerror ? fe(r, this.onerror) : r);
          };
        }
        function Ct(e, t) {
          return e === oe ? t : function(i) {
            var r = e.apply(this, arguments), i = (ce(i, r), this.onsuccess), a = this.onerror, u = (this.onsuccess = null, this.onerror = null, t.apply(this, arguments));
            return i && (this.onsuccess = this.onsuccess ? fe(i, this.onsuccess) : i), a && (this.onerror = this.onerror ? fe(a, this.onerror) : a), r === void 0 ? u === void 0 ? void 0 : u : ce(r, u);
          };
        }
        function Ft(e, t) {
          return e === oe ? t : function() {
            return t.apply(this, arguments) !== false && e.apply(this, arguments);
          };
        }
        function It(e, t) {
          return e === oe ? t : function() {
            var n = e.apply(this, arguments);
            if (n && typeof n.then == "function") {
              for (var r = this, i = arguments.length, a = new Array(i); i--; ) a[i] = arguments[i];
              return n.then(function() {
                return t.apply(r, a);
              });
            }
            return t.apply(this, arguments);
          };
        }
        it.ModifyError = vt, it.DexieError = ve, it.BulkError = I;
        var yt = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
        function Pt(e) {
          yt = e;
        }
        var At = {}, ot = 100, De = typeof Promise > "u" ? [] : (_e = Promise.resolve(), typeof crypto < "u" && crypto.subtle ? [
          De = crypto.subtle.digest("SHA-512", new Uint8Array([
            0
          ])),
          x(De),
          _e
        ] : [
          _e,
          x(_e),
          _e
        ]), _e = De[0], cn = De[1], cn = cn && cn.then, Ie = _e && _e.constructor, tt = !!De[2], se = function(e, t) {
          pe.push([
            e,
            t
          ]), o && (queueMicrotask(Oe), o = false);
        }, c = true, o = true, s = [], p = [], _ = Ee, Y = {
          id: "global",
          global: true,
          ref: 0,
          unhandleds: [],
          onunhandled: oe,
          pgp: false,
          env: {},
          finalize: oe
        }, C = Y, pe = [], Z = 0, ye = [];
        function D(e) {
          if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
          this._listeners = [], this._lib = false;
          var t = this._PSD = C;
          if (typeof e != "function") {
            if (e !== At) throw new TypeError("Not a function");
            this._state = arguments[1], this._value = arguments[2], this._state === false && Be(this, this._value);
          } else this._state = null, this._value = null, ++t.ref, (function n(r, i) {
            try {
              i(function(a) {
                if (r._state === null) {
                  if (a === r) throw new TypeError("A promise cannot be resolved with itself.");
                  var u = r._lib && at();
                  a && typeof a.then == "function" ? n(r, function(l, d) {
                    a instanceof D ? a._then(l, d) : a.then(l, d);
                  }) : (r._state = true, r._value = a, Ke(r)), u && ne();
                }
              }, Be.bind(null, r));
            } catch (a) {
              Be(r, a);
            }
          })(this, e);
        }
        var Ae = {
          get: function() {
            var e = C, t = bt;
            function n(r, i) {
              var a = this, u = !e.global && (e !== C || t !== bt), l = u && !Fe(), d = new D(function(S, v) {
                Je(a, new $e(en(r, e, u, l), en(i, e, u, l), S, v, e));
              });
              return this._consoleTask && (d._consoleTask = this._consoleTask), d;
            }
            return n.prototype = At, n;
          },
          set: function(e) {
            be(this, "then", e && e.prototype === At ? Ae : {
              get: function() {
                return e;
              },
              set: Ae.set
            });
          }
        };
        function $e(e, t, n, r, i) {
          this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = n, this.reject = r, this.psd = i;
        }
        function Be(e, t) {
          var n, r;
          p.push(t), e._state === null && (n = e._lib && at(), t = _(t), e._state = false, e._value = t, r = e, s.some(function(i) {
            return i._value === r._value;
          }) || s.push(r), Ke(e), n) && ne();
        }
        function Ke(e) {
          var t = e._listeners;
          e._listeners = [];
          for (var n = 0, r = t.length; n < r; ++n) Je(e, t[n]);
          var i = e._PSD;
          --i.ref || i.finalize(), Z === 0 && (++Z, se(function() {
            --Z == 0 && z();
          }, []));
        }
        function Je(e, t) {
          if (e._state === null) e._listeners.push(t);
          else {
            var n = e._state ? t.onFulfilled : t.onRejected;
            if (n === null) return (e._state ? t.resolve : t.reject)(e._value);
            ++t.psd.ref, ++Z, se(We, [
              n,
              e,
              t
            ]);
          }
        }
        function We(e, t, n) {
          try {
            var r, i = t._value;
            !t._state && p.length && (p = []), r = yt && t._consoleTask ? t._consoleTask.run(function() {
              return e(i);
            }) : e(i), t._state || p.indexOf(i) !== -1 || ((a) => {
              for (var u = s.length; u; ) if (s[--u]._value === a._value) return s.splice(u, 1);
            })(t), n.resolve(r);
          } catch (a) {
            n.reject(a);
          } finally {
            --Z == 0 && z(), --n.psd.ref || n.psd.finalize();
          }
        }
        function Oe() {
          $t(Y, function() {
            at() && ne();
          });
        }
        function at() {
          var e = c;
          return o = c = false, e;
        }
        function ne() {
          var e, t, n;
          do
            for (; 0 < pe.length; ) for (e = pe, pe = [], n = e.length, t = 0; t < n; ++t) {
              var r = e[t];
              r[0].apply(null, r[1]);
            }
          while (0 < pe.length);
          o = c = true;
        }
        function z() {
          for (var e = s, t = (s = [], e.forEach(function(r) {
            r._PSD.onunhandled.call(null, r._value, r);
          }), ye.slice(0)), n = t.length; n; ) t[--n]();
        }
        function he(e) {
          return new D(At, false, e);
        }
        function X(e, t) {
          var n = C;
          return function() {
            var r = at(), i = C;
            try {
              return dt(n, true), e.apply(this, arguments);
            } catch (a) {
              t && t(a);
            } finally {
              dt(i, false), r && ne();
            }
          };
        }
        qe(D.prototype, {
          then: Ae,
          _then: function(e, t) {
            Je(this, new $e(null, null, e, t, C));
          },
          catch: function(e) {
            var t, n;
            return arguments.length === 1 ? this.then(null, e) : (t = e, n = arguments[1], typeof t == "function" ? this.then(null, function(r) {
              return (r instanceof t ? n : he)(r);
            }) : this.then(null, function(r) {
              return (r && r.name === t ? n : he)(r);
            }));
          },
          finally: function(e) {
            return this.then(function(t) {
              return D.resolve(e()).then(function() {
                return t;
              });
            }, function(t) {
              return D.resolve(e()).then(function() {
                return he(t);
              });
            });
          },
          timeout: function(e, t) {
            var n = this;
            return e < 1 / 0 ? new D(function(r, i) {
              var a = setTimeout(function() {
                return i(new E.Timeout(t));
              }, e);
              n.then(r, i).finally(clearTimeout.bind(null, a));
            }) : this;
          }
        }), typeof Symbol < "u" && Symbol.toStringTag && be(D.prototype, Symbol.toStringTag, "Dexie.Promise"), Y.env = Kt(), qe(D, {
          all: function() {
            var e = Ne.apply(null, arguments).map(St);
            return new D(function(t, n) {
              e.length === 0 && t([]);
              var r = e.length;
              e.forEach(function(i, a) {
                return D.resolve(i).then(function(u) {
                  e[a] = u, --r || t(e);
                }, n);
              });
            });
          },
          resolve: function(e) {
            return e instanceof D ? e : e && typeof e.then == "function" ? new D(function(t, n) {
              e.then(t, n);
            }) : new D(At, true, e);
          },
          reject: he,
          race: function() {
            var e = Ne.apply(null, arguments).map(St);
            return new D(function(t, n) {
              e.map(function(r) {
                return D.resolve(r).then(t, n);
              });
            });
          },
          PSD: {
            get: function() {
              return C;
            },
            set: function(e) {
              return C = e;
            }
          },
          totalEchoes: {
            get: function() {
              return bt;
            }
          },
          newPSD: je,
          usePSD: $t,
          scheduler: {
            get: function() {
              return se;
            },
            set: function(e) {
              se = e;
            }
          },
          rejectionMapper: {
            get: function() {
              return _;
            },
            set: function(e) {
              _ = e;
            }
          },
          follow: function(e, t) {
            return new D(function(n, r) {
              return je(function(i, a) {
                var u = C;
                u.unhandleds = [], u.onunhandled = a, u.finalize = fe(function() {
                  var l, d = this;
                  l = function() {
                    d.unhandleds.length === 0 ? i() : a(d.unhandleds[0]);
                  }, ye.push(function S() {
                    l(), ye.splice(ye.indexOf(S), 1);
                  }), ++Z, se(function() {
                    --Z == 0 && z();
                  }, []);
                }, u.finalize), e();
              }, t, n, r);
            });
          }
        }), Ie && (Ie.allSettled && be(D, "allSettled", function() {
          var e = Ne.apply(null, arguments).map(St);
          return new D(function(t) {
            e.length === 0 && t([]);
            var n = e.length, r = new Array(n);
            e.forEach(function(i, a) {
              return D.resolve(i).then(function(u) {
                return r[a] = {
                  status: "fulfilled",
                  value: u
                };
              }, function(u) {
                return r[a] = {
                  status: "rejected",
                  reason: u
                };
              }).then(function() {
                return --n || t(r);
              });
            });
          });
        }), Ie.any && typeof AggregateError < "u" && be(D, "any", function() {
          var e = Ne.apply(null, arguments).map(St);
          return new D(function(t, n) {
            e.length === 0 && n(new AggregateError([]));
            var r = e.length, i = new Array(r);
            e.forEach(function(a, u) {
              return D.resolve(a).then(function(l) {
                return t(l);
              }, function(l) {
                i[u] = l, --r || n(new AggregateError(i));
              });
            });
          });
        }), Ie.withResolvers) && (D.withResolvers = Ie.withResolvers);
        var re = {
          awaits: 0,
          echoes: 0,
          id: 0
        }, Pe = 0, Ot = [], Ze = 0, bt = 0, Bt = 0;
        function je(e, u, n, r) {
          var i = C, a = Object.create(i), u = (a.parent = i, a.ref = 0, a.global = false, a.id = ++Bt, Y.env, a.env = tt ? {
            Promise: D,
            PromiseProp: {
              value: D,
              configurable: true,
              writable: true
            },
            all: D.all,
            race: D.race,
            allSettled: D.allSettled,
            any: D.any,
            resolve: D.resolve,
            reject: D.reject
          } : {}, u && ce(a, u), ++i.ref, a.finalize = function() {
            --this.parent.ref || this.parent.finalize();
          }, $t(a, e, n, r));
          return a.ref === 0 && a.finalize(), u;
        }
        function gt() {
          return re.id || (re.id = ++Pe), ++re.awaits, re.echoes += ot, re.id;
        }
        function Fe() {
          return !!re.awaits && (--re.awaits == 0 && (re.id = 0), re.echoes = re.awaits * ot, true);
        }
        function St(e) {
          return re.echoes && e && e.constructor === Ie ? (gt(), e.then(function(t) {
            return Fe(), t;
          }, function(t) {
            return Fe(), nt(t);
          })) : e;
        }
        function Tt() {
          var e = Ot[Ot.length - 1];
          Ot.pop(), dt(e, false);
        }
        function dt(e, t) {
          var n, r, i = C;
          (t ? !re.echoes || Ze++ && e === C : !Ze || --Ze && e === C) || queueMicrotask(t ? (function(a) {
            ++bt, re.echoes && --re.echoes != 0 || (re.echoes = re.awaits = re.id = 0), Ot.push(C), dt(a, true);
          }).bind(null, e) : Tt), e !== C && (C = e, i === Y && (Y.env = Kt()), tt) && (n = Y.env.Promise, r = e.env, i.global || e.global) && (Object.defineProperty(N, "Promise", r.PromiseProp), n.all = r.all, n.race = r.race, n.resolve = r.resolve, n.reject = r.reject, r.allSettled && (n.allSettled = r.allSettled), r.any) && (n.any = r.any);
        }
        function Kt() {
          var e = N.Promise;
          return tt ? {
            Promise: e,
            PromiseProp: Object.getOwnPropertyDescriptor(N, "Promise"),
            all: e.all,
            race: e.race,
            allSettled: e.allSettled,
            any: e.any,
            resolve: e.resolve,
            reject: e.reject
          } : {};
        }
        function $t(e, t, n, r, i) {
          var a = C;
          try {
            return dt(e, true), t(n, r, i);
          } finally {
            dt(a, false);
          }
        }
        function en(e, t, n, r) {
          return typeof e != "function" ? e : function() {
            var i = C;
            n && gt(), dt(t, true);
            try {
              return e.apply(this, arguments);
            } finally {
              dt(i, false), r && queueMicrotask(Fe);
            }
          };
        }
        function Yt(e) {
          Promise === Ie && re.echoes === 0 ? Ze === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
        }
        ("" + cn).indexOf("[native code]") === -1 && (gt = Fe = oe);
        var nt = D.reject, Nt = "\uFFFF", rt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Ut = "String expected.", Rt = [], zt = "__dbnames", Vn = "readonly", Yn = "readwrite";
        function tn(e, t) {
          return e ? t ? function() {
            return e.apply(this, arguments) && t.apply(this, arguments);
          } : e : t;
        }
        var wr = {
          type: 3,
          lower: -1 / 0,
          lowerOpen: false,
          upper: [
            []
          ],
          upperOpen: false
        };
        function On(e) {
          return typeof e != "string" || /\./.test(e) ? function(t) {
            return t;
          } : function(t) {
            return t[e] === void 0 && e in t && delete (t = xe(t))[e], t;
          };
        }
        function _r() {
          throw E.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
        }
        function Re(e, t) {
          try {
            var n = Or(e), r = Or(t);
            if (n !== r) return n === "Array" ? 1 : r === "Array" ? -1 : n === "binary" ? 1 : r === "binary" ? -1 : n === "string" ? 1 : r === "string" ? -1 : n === "Date" ? 1 : r !== "Date" ? NaN : -1;
            switch (n) {
              case "number":
              case "Date":
              case "string":
                return t < e ? 1 : e < t ? -1 : 0;
              case "binary":
                for (var i = Sr(e), a = Sr(t), u = i.length, l = a.length, d = u < l ? u : l, S = 0; S < d; ++S) if (i[S] !== a[S]) return i[S] < a[S] ? -1 : 1;
                return u === l ? 0 : u < l ? -1 : 1;
              case "Array":
                for (var v = e, h = t, b = v.length, g = h.length, m = b < g ? b : g, y = 0; y < m; ++y) {
                  var A = Re(v[y], h[y]);
                  if (A !== 0) return A;
                }
                return b === g ? 0 : b < g ? -1 : 1;
            }
          } catch {
          }
          return NaN;
        }
        function Or(e) {
          var t = typeof e;
          return t == "object" && (ArrayBuffer.isView(e) || (t = Ue(e)) === "ArrayBuffer") ? "binary" : t;
        }
        function Sr(e) {
          return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
        }
        function Sn(e, t, n) {
          var r = e.schema.yProps;
          return r ? (t && 0 < n.numFailures && (t = t.filter(function(i, a) {
            return !n.failures[a];
          })), Promise.all(r.map(function(i) {
            return i = i.updatesTable, t ? e.db.table(i).where("k").anyOf(t).delete() : e.db.table(i).clear();
          })).then(function() {
            return n;
          })) : n;
        }
        Er.prototype.execute = function(e) {
          var t = this["@@propmod"];
          if (t.add !== void 0) {
            var n = t.add;
            if (G(n)) return V(V([], G(e) ? e : [], true), n).sort();
            if (typeof n == "number") return (Number(e) || 0) + n;
            if (typeof n == "bigint") try {
              return BigInt(e) + n;
            } catch {
              return BigInt(0) + n;
            }
            throw new TypeError("Invalid term ".concat(n));
          }
          if (t.remove !== void 0) {
            var r = t.remove;
            if (G(r)) return G(e) ? e.filter(function(i) {
              return !r.includes(i);
            }).sort() : [];
            if (typeof r == "number") return Number(e) - r;
            if (typeof r == "bigint") try {
              return BigInt(e) - r;
            } catch {
              return BigInt(0) - r;
            }
            throw new TypeError("Invalid subtrahend ".concat(r));
          }
          return n = (n = t.replacePrefix) == null ? void 0 : n[0], n && typeof e == "string" && e.startsWith(n) ? t.replacePrefix[1] + e.substring(n.length) : e;
        };
        var pn = Er;
        function Er(e) {
          this["@@propmod"] = e;
        }
        function Ar(e, t) {
          for (var n = w(t), r = n.length, i = false, a = 0; a < r; ++a) {
            var u = n[a], l = t[u], d = Te(e, u);
            l instanceof pn ? (we(e, u, l.execute(d)), i = true) : d !== l && (we(e, u, l), i = true);
          }
          return i;
        }
        et.prototype._trans = function(e, t, n) {
          var r = this._tx || C.trans, i = this.name, a = yt && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
          function u(S, v, h) {
            if (h.schema[i]) return t(h.idbtrans, h);
            throw new E.NotFound("Table " + i + " not part of transaction");
          }
          var l = at();
          try {
            var d = r && r.db._novip === this.db._novip ? r === C.trans ? r._promise(e, u, n) : je(function() {
              return r._promise(e, u, n);
            }, {
              trans: r,
              transless: C.transless || C
            }) : (function S(v, h, b, g) {
              if (v.idbdb && (v._state.openComplete || C.letThrough || v._vip)) {
                var m = v._createTransaction(h, b, v._dbSchema);
                try {
                  m.create(), v._state.PR1398_maxLoop = 3;
                } catch (y) {
                  return y.name === R.InvalidState && v.isOpen() && 0 < --v._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), v.close({
                    disableAutoOpen: false
                  }), v.open().then(function() {
                    return S(v, h, b, g);
                  })) : nt(y);
                }
                return m._promise(h, function(y, A) {
                  return je(function() {
                    return C.trans = m, g(y, A, m);
                  });
                }).then(function(y) {
                  if (h === "readwrite") try {
                    m.idbtrans.commit();
                  } catch {
                  }
                  return h === "readonly" ? y : m._completion.then(function() {
                    return y;
                  });
                });
              }
              if (v._state.openComplete) return nt(new E.DatabaseClosed(v._state.dbOpenError));
              if (!v._state.isBeingOpened) {
                if (!v._state.autoOpen) return nt(new E.DatabaseClosed());
                v.open().catch(oe);
              }
              return v._state.dbReadyPromise.then(function() {
                return S(v, h, b, g);
              });
            })(this.db, e, [
              this.name
            ], u);
            return a && (d._consoleTask = a, d = d.catch(function(S) {
              return console.trace(S), nt(S);
            })), d;
          } finally {
            l && ne();
          }
        }, et.prototype.get = function(e, t) {
          var n = this;
          return e && e.constructor === Object ? this.where(e).first(t) : e == null ? nt(new E.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(r) {
            return n.core.get({
              trans: r,
              key: e
            }).then(function(i) {
              return n.hook.reading.fire(i);
            });
          }).then(t);
        }, et.prototype.where = function(e) {
          if (typeof e == "string") return new this.db.WhereClause(this, e);
          if (G(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
          var t = w(e);
          if (t.length === 1) return this.where(t[0]).equals(e[t[0]]);
          var n = this.schema.indexes.concat(this.schema.primKey).filter(function(l) {
            if (l.compound && t.every(function(S) {
              return 0 <= l.keyPath.indexOf(S);
            })) {
              for (var d = 0; d < t.length; ++d) if (t.indexOf(l.keyPath[d]) === -1) return false;
              return true;
            }
            return false;
          }).sort(function(l, d) {
            return l.keyPath.length - d.keyPath.length;
          })[0];
          if (n && this.db._maxKey !== Nt) return u = n.keyPath.slice(0, t.length), this.where(u).equals(u.map(function(l) {
            return e[l];
          }));
          !n && yt && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(t.join("+"), "]"));
          var r = this.schema.idxByName;
          function i(l, d) {
            return Re(l, d) === 0;
          }
          var u = t.reduce(function(v, d) {
            var S = v[0], v = v[1], h = r[d], b = e[d];
            return [
              S || h,
              S || !h ? tn(v, h && h.multi ? function(g) {
                return g = Te(g, d), G(g) && g.some(function(m) {
                  return i(b, m);
                });
              } : function(g) {
                return i(b, Te(g, d));
              }) : v
            ];
          }, [
            null,
            null
          ]), a = u[0], u = u[1];
          return a ? this.where(a.name).equals(e[a.keyPath]).filter(u) : n ? this.filter(u) : this.where(t).equals("");
        }, et.prototype.filter = function(e) {
          return this.toCollection().and(e);
        }, et.prototype.count = function(e) {
          return this.toCollection().count(e);
        }, et.prototype.offset = function(e) {
          return this.toCollection().offset(e);
        }, et.prototype.limit = function(e) {
          return this.toCollection().limit(e);
        }, et.prototype.each = function(e) {
          return this.toCollection().each(e);
        }, et.prototype.toArray = function(e) {
          return this.toCollection().toArray(e);
        }, et.prototype.toCollection = function() {
          return new this.db.Collection(new this.db.WhereClause(this));
        }, et.prototype.orderBy = function(e) {
          return new this.db.Collection(new this.db.WhereClause(this, G(e) ? "[".concat(e.join("+"), "]") : e));
        }, et.prototype.reverse = function() {
          return this.toCollection().reverse();
        }, et.prototype.mapToClass = function(e) {
          for (var t = this.db, n = this.name, r = ((this.schema.mappedClass = e).prototype instanceof _r && (e = ((u) => {
            var l = v, d = u;
            if (typeof d != "function" && d !== null) throw new TypeError("Class extends value " + String(d) + " is not a constructor or null");
            function S() {
              this.constructor = l;
            }
            function v() {
              return u !== null && u.apply(this, arguments) || this;
            }
            return k(l, d), l.prototype = d === null ? Object.create(d) : (S.prototype = d.prototype, new S()), Object.defineProperty(v.prototype, "db", {
              get: function() {
                return t;
              },
              enumerable: false,
              configurable: true
            }), v.prototype.table = function() {
              return n;
            }, v;
          })(e)), /* @__PURE__ */ new Set()), i = e.prototype; i; i = x(i)) Object.getOwnPropertyNames(i).forEach(function(u) {
            return r.add(u);
          });
          function a(u) {
            if (!u) return u;
            var l, d = Object.create(e.prototype);
            for (l in u) if (!r.has(l)) try {
              d[l] = u[l];
            } catch {
            }
            return d;
          }
          return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = a, this.hook("reading", a), e;
        }, et.prototype.defineClass = function() {
          return this.mapToClass(function(e) {
            ce(this, e);
          });
        }, et.prototype.add = function(e, t) {
          var n = this, r = this.schema.primKey, i = r.auto, a = r.keyPath, u = e;
          return a && i && (u = On(a)(e)), this._trans("readwrite", function(l) {
            return n.core.mutate({
              trans: l,
              type: "add",
              keys: t != null ? [
                t
              ] : null,
              values: [
                u
              ]
            });
          }).then(function(l) {
            return l.numFailures ? D.reject(l.failures[0]) : l.lastResult;
          }).then(function(l) {
            if (a) try {
              we(e, a, l);
            } catch {
            }
            return l;
          });
        }, et.prototype.upsert = function(e, t) {
          var n = this, r = this.schema.primKey.keyPath;
          return this._trans("readwrite", function(i) {
            return n.core.get({
              trans: i,
              key: e
            }).then(function(a) {
              var u = a ?? {};
              return Ar(u, t), r && we(u, r, e), n.core.mutate({
                trans: i,
                type: "put",
                values: [
                  u
                ],
                keys: [
                  e
                ],
                upsert: true,
                updates: {
                  keys: [
                    e
                  ],
                  changeSpecs: [
                    t
                  ]
                }
              }).then(function(l) {
                return l.numFailures ? D.reject(l.failures[0]) : !!a;
              });
            });
          });
        }, et.prototype.update = function(e, t) {
          return typeof e != "object" || G(e) ? this.where(":id").equals(e).modify(t) : (e = Te(e, this.schema.primKey.keyPath)) === void 0 ? nt(new E.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t);
        }, et.prototype.put = function(e, t) {
          var n = this, r = this.schema.primKey, i = r.auto, a = r.keyPath, u = e;
          return a && i && (u = On(a)(e)), this._trans("readwrite", function(l) {
            return n.core.mutate({
              trans: l,
              type: "put",
              values: [
                u
              ],
              keys: t != null ? [
                t
              ] : null
            });
          }).then(function(l) {
            return l.numFailures ? D.reject(l.failures[0]) : l.lastResult;
          }).then(function(l) {
            if (a) try {
              we(e, a, l);
            } catch {
            }
            return l;
          });
        }, et.prototype.delete = function(e) {
          var t = this;
          return this._trans("readwrite", function(n) {
            return t.core.mutate({
              trans: n,
              type: "delete",
              keys: [
                e
              ]
            }).then(function(r) {
              return Sn(t, [
                e
              ], r);
            }).then(function(r) {
              return r.numFailures ? D.reject(r.failures[0]) : void 0;
            });
          });
        }, et.prototype.clear = function() {
          var e = this;
          return this._trans("readwrite", function(t) {
            return e.core.mutate({
              trans: t,
              type: "deleteRange",
              range: wr
            }).then(function(n) {
              return Sn(e, null, n);
            });
          }).then(function(t) {
            return t.numFailures ? D.reject(t.failures[0]) : void 0;
          });
        }, et.prototype.bulkGet = function(e) {
          var t = this;
          return this._trans("readonly", function(n) {
            return t.core.getMany({
              keys: e,
              trans: n
            }).then(function(r) {
              return r.map(function(i) {
                return t.hook.reading.fire(i);
              });
            });
          });
        }, et.prototype.bulkAdd = function(e, t, n) {
          var r = this, i = Array.isArray(t) ? t : void 0, a = (n = n || (i ? void 0 : t)) ? n.allKeys : void 0;
          return this._trans("readwrite", function(u) {
            var l = r.schema.primKey, S = l.auto, l = l.keyPath;
            if (l && i) throw new E.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
            if (i && i.length !== e.length) throw new E.InvalidArgument("Arguments objects and keys must have the same length");
            var d = e.length, S = l && S ? e.map(On(l)) : e;
            return r.core.mutate({
              trans: u,
              type: "add",
              keys: i,
              values: S,
              wantResults: a
            }).then(function(v) {
              var h = v.numFailures, b = v.failures;
              if (h === 0) return a ? v.results : v.lastResult;
              throw new I("".concat(r.name, ".bulkAdd(): ").concat(h, " of ").concat(d, " operations failed"), b);
            });
          });
        }, et.prototype.bulkPut = function(e, t, n) {
          var r = this, i = Array.isArray(t) ? t : void 0, a = (n = n || (i ? void 0 : t)) ? n.allKeys : void 0;
          return this._trans("readwrite", function(u) {
            var l = r.schema.primKey, S = l.auto, l = l.keyPath;
            if (l && i) throw new E.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
            if (i && i.length !== e.length) throw new E.InvalidArgument("Arguments objects and keys must have the same length");
            var d = e.length, S = l && S ? e.map(On(l)) : e;
            return r.core.mutate({
              trans: u,
              type: "put",
              keys: i,
              values: S,
              wantResults: a
            }).then(function(v) {
              var h = v.numFailures, b = v.failures;
              if (h === 0) return a ? v.results : v.lastResult;
              throw new I("".concat(r.name, ".bulkPut(): ").concat(h, " of ").concat(d, " operations failed"), b);
            });
          });
        }, et.prototype.bulkUpdate = function(e) {
          var t = this, n = this.core, r = e.map(function(u) {
            return u.key;
          }), i = e.map(function(u) {
            return u.changes;
          }), a = [];
          return this._trans("readwrite", function(u) {
            return n.getMany({
              trans: u,
              keys: r,
              cache: "clone"
            }).then(function(l) {
              var d = [], S = [], v = (e.forEach(function(h, b) {
                var g = h.key, m = h.changes, y = l[b];
                if (y) {
                  for (var A = 0, T = Object.keys(m); A < T.length; A++) {
                    var O = T[A], K = m[O];
                    if (O === t.schema.primKey.keyPath) {
                      if (Re(K, g) !== 0) throw new E.Constraint("Cannot update primary key in bulkUpdate()");
                    } else we(y, O, K);
                  }
                  a.push(b), d.push(g), S.push(y);
                }
              }), d.length);
              return n.mutate({
                trans: u,
                type: "put",
                keys: d,
                values: S,
                updates: {
                  keys: r,
                  changeSpecs: i
                }
              }).then(function(h) {
                var b = h.numFailures, g = h.failures;
                if (b === 0) return v;
                for (var m = 0, y = Object.keys(g); m < y.length; m++) {
                  var A, T = y[m], O = a[Number(T)];
                  O != null && (A = g[T], delete g[T], g[O] = A);
                }
                throw new I("".concat(t.name, ".bulkUpdate(): ").concat(b, " of ").concat(v, " operations failed"), g);
              });
            });
          });
        }, et.prototype.bulkDelete = function(e) {
          var t = this, n = e.length;
          return this._trans("readwrite", function(r) {
            return t.core.mutate({
              trans: r,
              type: "delete",
              keys: e
            }).then(function(i) {
              return Sn(t, e, i);
            });
          }).then(function(r) {
            var i = r.numFailures, a = r.failures;
            if (i === 0) return r.lastResult;
            throw new I("".concat(t.name, ".bulkDelete(): ").concat(i, " of ").concat(n, " operations failed"), a);
          });
        };
        var Tr = et;
        function et() {
        }
        function hn(e) {
          function t(u, l) {
            if (l) {
              for (var d = arguments.length, S = new Array(d - 1); --d; ) S[d - 1] = arguments[d];
              return n[u].subscribe.apply(null, S), e;
            }
            if (typeof u == "string") return n[u];
          }
          var n = {};
          t.addEventType = a;
          for (var r = 1, i = arguments.length; r < i; ++r) a(arguments[r]);
          return t;
          function a(u, l, d) {
            var S, v;
            if (typeof u != "object") return l = l || Ft, v = {
              subscribers: [],
              fire: d = d || oe,
              subscribe: function(h) {
                v.subscribers.indexOf(h) === -1 && (v.subscribers.push(h), v.fire = l(v.fire, h));
              },
              unsubscribe: function(h) {
                v.subscribers = v.subscribers.filter(function(b) {
                  return b !== h;
                }), v.fire = v.subscribers.reduce(l, d);
              }
            }, n[u] = t[u] = v;
            w(S = u).forEach(function(h) {
              var b = S[h];
              if (G(b)) a(h, S[h][0], S[h][1]);
              else {
                if (b !== "asap") throw new E.InvalidArgument("Invalid event config");
                var g = a(h, Ee, function() {
                  for (var m = arguments.length, y = new Array(m); m--; ) y[m] = arguments[m];
                  g.subscribers.forEach(function(A) {
                    me(function() {
                      A.apply(null, y);
                    });
                  });
                });
              }
            });
          }
        }
        function yn(e, t) {
          return ge(t).from({
            prototype: e
          }), t;
        }
        function an(e, t) {
          return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
        }
        function Jn(e, t) {
          e.filter = tn(e.filter, t);
        }
        function Gn(e, t, n) {
          var r = e.replayFilter;
          e.replayFilter = r ? function() {
            return tn(r(), t());
          } : t, e.justLimit = n && !r;
        }
        function En(e, t) {
          if (e.isPrimKey) return t.primaryKey;
          var n = t.getIndexByKeyPath(e.index);
          if (n) return n;
          throw new E.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
        }
        function xr(e, t, n) {
          var r = En(e, t.schema);
          return t.openCursor({
            trans: n,
            values: !e.keysOnly,
            reverse: e.dir === "prev",
            unique: !!e.unique,
            query: {
              index: r,
              range: e.range
            }
          });
        }
        function An(e, t, n, r) {
          var i, a, u = e.replayFilter ? tn(e.filter, e.replayFilter()) : e.filter;
          return e.or ? (i = {}, a = function(l, d, S) {
            var v, h;
            u && !u(d, S, function(b) {
              return d.stop(b);
            }, function(b) {
              return d.fail(b);
            }) || ((h = "" + (v = d.primaryKey)) == "[object ArrayBuffer]" && (h = "" + new Uint8Array(v)), le(i, h)) || (i[h] = true, t(l, d, S));
          }, Promise.all([
            e.or._iterate(a, n),
            kr(xr(e, r, n), e.algorithm, a, !e.keysOnly && e.valueMapper)
          ])) : kr(xr(e, r, n), tn(e.algorithm, u), t, !e.keysOnly && e.valueMapper);
        }
        function kr(e, t, n, r) {
          var i = X(r ? function(a, u, l) {
            return n(r(a), u, l);
          } : n);
          return e.then(function(a) {
            if (a) return a.start(function() {
              var u = function() {
                return a.continue();
              };
              t && !t(a, function(l) {
                return u = l;
              }, function(l) {
                a.stop(l), u = oe;
              }, function(l) {
                a.fail(l), u = oe;
              }) || i(a.value, a, function(l) {
                return u = l;
              }), u();
            });
          });
        }
        Ve.prototype._read = function(e, t) {
          var n = this._ctx;
          return n.error ? n.table._trans(null, nt.bind(null, n.error)) : n.table._trans("readonly", e).then(t);
        }, Ve.prototype._write = function(e) {
          var t = this._ctx;
          return t.error ? t.table._trans(null, nt.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
        }, Ve.prototype._addAlgorithm = function(e) {
          var t = this._ctx;
          t.algorithm = tn(t.algorithm, e);
        }, Ve.prototype._iterate = function(e, t) {
          return An(this._ctx, e, t, this._ctx.table.core);
        }, Ve.prototype.clone = function(e) {
          var t = Object.create(this.constructor.prototype), n = Object.create(this._ctx);
          return e && ce(n, e), t._ctx = n, t;
        }, Ve.prototype.raw = function() {
          return this._ctx.valueMapper = null, this;
        }, Ve.prototype.each = function(e) {
          var t = this._ctx;
          return this._read(function(n) {
            return An(t, e, n, t.table.core);
          });
        }, Ve.prototype.count = function(e) {
          var t = this;
          return this._read(function(n) {
            var r, i = t._ctx, a = i.table.core;
            return an(i, true) ? a.count({
              trans: n,
              query: {
                index: En(i, a.schema),
                range: i.range
              }
            }).then(function(u) {
              return Math.min(u, i.limit);
            }) : (r = 0, An(i, function() {
              return ++r, false;
            }, n, a).then(function() {
              return r;
            }));
          }).then(e);
        }, Ve.prototype.sortBy = function(e, t) {
          var n = e.split(".").reverse(), r = n[0], i = n.length - 1;
          function a(d, S) {
            return S ? a(d[n[S]], S - 1) : d[r];
          }
          var u = this._ctx.dir === "next" ? 1 : -1;
          function l(d, S) {
            return Re(a(d, i), a(S, i)) * u;
          }
          return this.toArray(function(d) {
            return d.sort(l);
          }).then(t);
        }, Ve.prototype.toArray = function(e) {
          var t = this;
          return this._read(function(n) {
            var r, i, a, u = t._ctx;
            return u.dir === "next" && an(u, true) && 0 < u.limit ? (r = u.valueMapper, i = En(u, u.table.core.schema), u.table.core.query({
              trans: n,
              limit: u.limit,
              values: true,
              query: {
                index: i,
                range: u.range
              }
            }).then(function(l) {
              return l = l.result, r ? l.map(r) : l;
            })) : (a = [], An(u, function(l) {
              return a.push(l);
            }, n, u.table.core).then(function() {
              return a;
            }));
          }, e);
        }, Ve.prototype.offset = function(e) {
          var t = this._ctx;
          return e <= 0 || (t.offset += e, an(t) ? Gn(t, function() {
            var n = e;
            return function(r, i) {
              return n === 0 || (n === 1 ? --n : i(function() {
                r.advance(n), n = 0;
              }), false);
            };
          }) : Gn(t, function() {
            var n = e;
            return function() {
              return --n < 0;
            };
          })), this;
        }, Ve.prototype.limit = function(e) {
          return this._ctx.limit = Math.min(this._ctx.limit, e), Gn(this._ctx, function() {
            var t = e;
            return function(n, r, i) {
              return --t <= 0 && r(i), 0 <= t;
            };
          }, true), this;
        }, Ve.prototype.until = function(e, t) {
          return Jn(this._ctx, function(n, r, i) {
            return !e(n.value) || (r(i), t);
          }), this;
        }, Ve.prototype.first = function(e) {
          return this.limit(1).toArray(function(t) {
            return t[0];
          }).then(e);
        }, Ve.prototype.last = function(e) {
          return this.reverse().first(e);
        }, Ve.prototype.filter = function(e) {
          var t;
          return Jn(this._ctx, function(n) {
            return e(n.value);
          }), (t = this._ctx).isMatch = tn(t.isMatch, e), this;
        }, Ve.prototype.and = function(e) {
          return this.filter(e);
        }, Ve.prototype.or = function(e) {
          return new this.db.WhereClause(this._ctx.table, e, this);
        }, Ve.prototype.reverse = function() {
          return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
        }, Ve.prototype.desc = function() {
          return this.reverse();
        }, Ve.prototype.eachKey = function(e) {
          var t = this._ctx;
          return t.keysOnly = !t.isMatch, this.each(function(n, r) {
            e(r.key, r);
          });
        }, Ve.prototype.eachUniqueKey = function(e) {
          return this._ctx.unique = "unique", this.eachKey(e);
        }, Ve.prototype.eachPrimaryKey = function(e) {
          var t = this._ctx;
          return t.keysOnly = !t.isMatch, this.each(function(n, r) {
            e(r.primaryKey, r);
          });
        }, Ve.prototype.keys = function(e) {
          var t = this._ctx, n = (t.keysOnly = !t.isMatch, []);
          return this.each(function(r, i) {
            n.push(i.key);
          }).then(function() {
            return n;
          }).then(e);
        }, Ve.prototype.primaryKeys = function(e) {
          var t = this._ctx;
          if (t.dir === "next" && an(t, true) && 0 < t.limit) return this._read(function(r) {
            var i = En(t, t.table.core.schema);
            return t.table.core.query({
              trans: r,
              values: false,
              limit: t.limit,
              query: {
                index: i,
                range: t.range
              }
            });
          }).then(function(r) {
            return r.result;
          }).then(e);
          t.keysOnly = !t.isMatch;
          var n = [];
          return this.each(function(r, i) {
            n.push(i.primaryKey);
          }).then(function() {
            return n;
          }).then(e);
        }, Ve.prototype.uniqueKeys = function(e) {
          return this._ctx.unique = "unique", this.keys(e);
        }, Ve.prototype.firstKey = function(e) {
          return this.limit(1).keys(function(t) {
            return t[0];
          }).then(e);
        }, Ve.prototype.lastKey = function(e) {
          return this.reverse().firstKey(e);
        }, Ve.prototype.distinct = function() {
          var e, t = this._ctx, t = t.index && t.table.schema.idxByName[t.index];
          return t && t.multi && (e = {}, Jn(this._ctx, function(r) {
            var r = r.primaryKey.toString(), i = le(e, r);
            return e[r] = true, !i;
          })), this;
        }, Ve.prototype.modify = function(e) {
          var t = this, n = this._ctx;
          return this._write(function(r) {
            function i(y, A) {
              var T = A.failures;
              b += y - A.numFailures;
              for (var O = 0, K = w(T); O < K.length; O++) {
                var U = K[O];
                h.push(T[U]);
              }
            }
            var a = typeof e == "function" ? e : function(y) {
              return Ar(y, e);
            }, u = n.table.core, v = u.schema.primaryKey, l = v.outbound, d = v.extractKey, S = 200, v = t.db._options.modifyChunkSize, h = (v && (S = typeof v == "object" ? v[u.name] || v["*"] || 200 : v), []), b = 0, g = [], m = e === Pr;
            return t.clone().primaryKeys().then(function(y) {
              function A(O) {
                var K = Math.min(S, y.length - O), U = y.slice(O, O + K);
                return (m ? Promise.resolve([]) : u.getMany({
                  trans: r,
                  keys: U,
                  cache: "immutable"
                })).then(function(W) {
                  var H = [], q = [], te = l ? [] : null, ee = m ? U : [];
                  if (!m) for (var J = 0; J < K; ++J) {
                    var ae = W[J], Le = {
                      value: xe(ae),
                      primKey: y[O + J]
                    };
                    a.call(Le, Le.value, Le) !== false && (Le.value == null ? ee.push(y[O + J]) : l || Re(d(ae), d(Le.value)) === 0 ? (q.push(Le.value), l && te.push(y[O + J])) : (ee.push(y[O + J]), H.push(Le.value)));
                  }
                  return Promise.resolve(0 < H.length && u.mutate({
                    trans: r,
                    type: "add",
                    values: H
                  }).then(function(Ye) {
                    for (var de in Ye.failures) ee.splice(parseInt(de), 1);
                    i(H.length, Ye);
                  })).then(function() {
                    return (0 < q.length || T && typeof e == "object") && u.mutate({
                      trans: r,
                      type: "put",
                      keys: te,
                      values: q,
                      criteria: T,
                      changeSpec: typeof e != "function" && e,
                      isAdditionalChunk: 0 < O
                    }).then(function(Ye) {
                      return i(q.length, Ye);
                    });
                  }).then(function() {
                    return (0 < ee.length || T && m) && u.mutate({
                      trans: r,
                      type: "delete",
                      keys: ee,
                      criteria: T,
                      isAdditionalChunk: 0 < O
                    }).then(function(Ye) {
                      return Sn(n.table, ee, Ye);
                    }).then(function(Ye) {
                      return i(ee.length, Ye);
                    });
                  }).then(function() {
                    return y.length > O + K && A(O + S);
                  });
                });
              }
              var T = an(n) && n.limit === 1 / 0 && (typeof e != "function" || m) && {
                index: n.index,
                range: n.range
              };
              return A(0).then(function() {
                if (0 < h.length) throw new vt("Error modifying one or more objects", h, b, g);
                return y.length;
              });
            });
          });
        }, Ve.prototype.delete = function() {
          var e = this._ctx, t = e.range;
          return !an(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify(Pr) : this._write(function(n) {
            var r = e.table.core.schema.primaryKey, i = t;
            return e.table.core.count({
              trans: n,
              query: {
                index: r,
                range: i
              }
            }).then(function(a) {
              return e.table.core.mutate({
                trans: n,
                type: "deleteRange",
                range: i
              }).then(function(d) {
                var l = d.failures, d = d.numFailures;
                if (d) throw new vt("Could not delete some values", Object.keys(l).map(function(S) {
                  return l[S];
                }), a - d);
                return a - d;
              });
            });
          });
        };
        var ii = Ve;
        function Ve() {
        }
        var Pr = function(e, t) {
          return t.value = null;
        };
        function oi(e, t) {
          return e < t ? -1 : e === t ? 0 : 1;
        }
        function ai(e, t) {
          return t < e ? -1 : e === t ? 0 : 1;
        }
        function Lt(e, t, n) {
          return e = e instanceof jr ? new e.Collection(e) : e, e._ctx.error = new (n || TypeError)(t), e;
        }
        function un(e) {
          return new e.Collection(e, function() {
            return Nr("");
          }).limit(0);
        }
        function Tn(g, t, n, r) {
          var i, a, u, l, d, S, v, h = n.length;
          if (!n.every(function(y) {
            return typeof y == "string";
          })) return Lt(g, Ut);
          function b(y) {
            i = y === "next" ? function(T) {
              return T.toUpperCase();
            } : function(T) {
              return T.toLowerCase();
            }, a = y === "next" ? function(T) {
              return T.toLowerCase();
            } : function(T) {
              return T.toUpperCase();
            }, u = y === "next" ? oi : ai;
            var A = n.map(function(T) {
              return {
                lower: a(T),
                upper: i(T)
              };
            }).sort(function(T, O) {
              return u(T.lower, O.lower);
            });
            l = A.map(function(T) {
              return T.upper;
            }), d = A.map(function(T) {
              return T.lower;
            }), v = (S = y) === "next" ? "" : r;
          }
          b("next");
          var g = new g.Collection(g, function() {
            return Ht(l[0], d[h - 1] + r);
          }), m = (g._ondirectionchange = function(y) {
            b(y);
          }, 0);
          return g._addAlgorithm(function(y, A, T) {
            var O = y.key;
            if (typeof O == "string") {
              var K = a(O);
              if (t(K, d, m)) return true;
              for (var U = null, W = m; W < h; ++W) {
                var H = ((q, te, ee, J, ae, Le) => {
                  for (var Ye = Math.min(q.length, J.length), de = -1, ke = 0; ke < Ye; ++ke) {
                    var st = te[ke];
                    if (st !== J[ke]) return ae(q[ke], ee[ke]) < 0 ? q.substr(0, ke) + ee[ke] + ee.substr(ke + 1) : ae(q[ke], J[ke]) < 0 ? q.substr(0, ke) + J[ke] + ee.substr(ke + 1) : 0 <= de ? q.substr(0, de) + te[de] + ee.substr(de + 1) : null;
                    ae(q[ke], st) < 0 && (de = ke);
                  }
                  return Ye < J.length && Le === "next" ? q + ee.substr(q.length) : Ye < q.length && Le === "prev" ? q.substr(0, ee.length) : de < 0 ? null : q.substr(0, de) + J[de] + ee.substr(de + 1);
                })(O, K, l[W], d[W], u, S);
                H === null && U === null ? m = W + 1 : (U === null || 0 < u(U, H)) && (U = H);
              }
              A(U !== null ? function() {
                y.continue(U + v);
              } : T);
            }
            return false;
          }), g;
        }
        function Ht(e, t, n, r) {
          return {
            type: 2,
            lower: e,
            upper: t,
            lowerOpen: n,
            upperOpen: r
          };
        }
        function Nr(e) {
          return {
            type: 1,
            lower: e,
            upper: e
          };
        }
        Object.defineProperty(Et.prototype, "Collection", {
          get: function() {
            return this._ctx.table.db.Collection;
          },
          enumerable: false,
          configurable: true
        }), Et.prototype.between = function(e, t, n, r) {
          n = n !== false, r = r === true;
          try {
            return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (n || r) && (!n || !r) ? un(this) : new this.Collection(this, function() {
              return Ht(e, t, !n, !r);
            });
          } catch {
            return Lt(this, rt);
          }
        }, Et.prototype.equals = function(e) {
          return e == null ? Lt(this, rt) : new this.Collection(this, function() {
            return Nr(e);
          });
        }, Et.prototype.above = function(e) {
          return e == null ? Lt(this, rt) : new this.Collection(this, function() {
            return Ht(e, void 0, true);
          });
        }, Et.prototype.aboveOrEqual = function(e) {
          return e == null ? Lt(this, rt) : new this.Collection(this, function() {
            return Ht(e, void 0, false);
          });
        }, Et.prototype.below = function(e) {
          return e == null ? Lt(this, rt) : new this.Collection(this, function() {
            return Ht(void 0, e, false, true);
          });
        }, Et.prototype.belowOrEqual = function(e) {
          return e == null ? Lt(this, rt) : new this.Collection(this, function() {
            return Ht(void 0, e);
          });
        }, Et.prototype.startsWith = function(e) {
          return typeof e != "string" ? Lt(this, Ut) : this.between(e, e + Nt, true, true);
        }, Et.prototype.startsWithIgnoreCase = function(e) {
          return e === "" ? this.startsWith(e) : Tn(this, function(t, n) {
            return t.indexOf(n[0]) === 0;
          }, [
            e
          ], Nt);
        }, Et.prototype.equalsIgnoreCase = function(e) {
          return Tn(this, function(t, n) {
            return t === n[0];
          }, [
            e
          ], "");
        }, Et.prototype.anyOfIgnoreCase = function() {
          var e = Ne.apply(ut, arguments);
          return e.length === 0 ? un(this) : Tn(this, function(t, n) {
            return n.indexOf(t) !== -1;
          }, e, "");
        }, Et.prototype.startsWithAnyOfIgnoreCase = function() {
          var e = Ne.apply(ut, arguments);
          return e.length === 0 ? un(this) : Tn(this, function(t, n) {
            return n.some(function(r) {
              return t.indexOf(r) === 0;
            });
          }, e, Nt);
        }, Et.prototype.anyOf = function() {
          var e, t, n = this, r = Ne.apply(ut, arguments), i = this._cmp;
          try {
            r.sort(i);
          } catch {
            return Lt(this, rt);
          }
          return r.length === 0 ? un(this) : ((e = new this.Collection(this, function() {
            return Ht(r[0], r[r.length - 1]);
          }))._ondirectionchange = function(a) {
            i = a === "next" ? n._ascending : n._descending, r.sort(i);
          }, t = 0, e._addAlgorithm(function(a, u, l) {
            for (var d = a.key; 0 < i(d, r[t]); ) if (++t === r.length) return u(l), false;
            return i(d, r[t]) === 0 || (u(function() {
              a.continue(r[t]);
            }), false);
          }), e);
        }, Et.prototype.notEqual = function(e) {
          return this.inAnyRange([
            [
              -1 / 0,
              e
            ],
            [
              e,
              this.db._maxKey
            ]
          ], {
            includeLowers: false,
            includeUppers: false
          });
        }, Et.prototype.noneOf = function() {
          var e = Ne.apply(ut, arguments);
          if (e.length === 0) return new this.Collection(this);
          try {
            e.sort(this._ascending);
          } catch {
            return Lt(this, rt);
          }
          var t = e.reduce(function(n, r) {
            return n ? n.concat([
              [
                n[n.length - 1][1],
                r
              ]
            ]) : [
              [
                -1 / 0,
                r
              ]
            ];
          }, null);
          return t.push([
            e[e.length - 1],
            this.db._maxKey
          ]), this.inAnyRange(t, {
            includeLowers: false,
            includeUppers: false
          });
        }, Et.prototype.inAnyRange = function(e, T) {
          var n = this, r = this._cmp, i = this._ascending, a = this._descending, u = this._min, l = this._max;
          if (e.length === 0) return un(this);
          if (!e.every(function(O) {
            return O[0] !== void 0 && O[1] !== void 0 && i(O[0], O[1]) <= 0;
          })) return Lt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", E.InvalidArgument);
          var d = !T || T.includeLowers !== false, S = T && T.includeUppers === true, v, h = i;
          function b(O, K) {
            return h(O[0], K[0]);
          }
          try {
            (v = e.reduce(function(O, K) {
              for (var U = 0, W = O.length; U < W; ++U) {
                var H = O[U];
                if (r(K[0], H[1]) < 0 && 0 < r(K[1], H[0])) {
                  H[0] = u(H[0], K[0]), H[1] = l(H[1], K[1]);
                  break;
                }
              }
              return U === W && O.push(K), O;
            }, [])).sort(b);
          } catch {
            return Lt(this, rt);
          }
          var g = 0, m = S ? function(O) {
            return 0 < i(O, v[g][1]);
          } : function(O) {
            return 0 <= i(O, v[g][1]);
          }, y = d ? function(O) {
            return 0 < a(O, v[g][0]);
          } : function(O) {
            return 0 <= a(O, v[g][0]);
          }, A = m, T = new this.Collection(this, function() {
            return Ht(v[0][0], v[v.length - 1][1], !d, !S);
          });
          return T._ondirectionchange = function(O) {
            h = O === "next" ? (A = m, i) : (A = y, a), v.sort(b);
          }, T._addAlgorithm(function(O, K, U) {
            for (var W, H = O.key; A(H); ) if (++g === v.length) return K(U), false;
            return !m(W = H) && !y(W) || (n._cmp(H, v[g][1]) === 0 || n._cmp(H, v[g][0]) === 0 || K(function() {
              h === i ? O.continue(v[g][0]) : O.continue(v[g][1]);
            }), false);
          }), T;
        }, Et.prototype.startsWithAnyOf = function() {
          var e = Ne.apply(ut, arguments);
          return e.every(function(t) {
            return typeof t == "string";
          }) ? e.length === 0 ? un(this) : this.inAnyRange(e.map(function(t) {
            return [
              t,
              t + Nt
            ];
          })) : Lt(this, "startsWithAnyOf() only works with strings");
        };
        var jr = Et;
        function Et() {
        }
        function Jt(e) {
          return X(function(t) {
            return dn(t), e(t.target.error), false;
          });
        }
        function dn(e) {
          e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
        }
        var vn = "storagemutated", zn = "x-storagemutated-1", Qt = hn(null, vn), ui = (Gt.prototype._lock = function() {
          return pt(!C.global), ++this._reculock, this._reculock !== 1 || C.global || (C.lockOwnerFor = this), this;
        }, Gt.prototype._unlock = function() {
          if (pt(!C.global), --this._reculock == 0) for (C.global || (C.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
            var e = this._blockedFuncs.shift();
            try {
              $t(e[1], e[0]);
            } catch {
            }
          }
          return this;
        }, Gt.prototype._locked = function() {
          return this._reculock && C.lockOwnerFor !== this;
        }, Gt.prototype.create = function(e) {
          var t = this;
          if (this.mode) {
            var n = this.db.idbdb, r = this.db._state.dbOpenError;
            if (pt(!this.idbtrans), !e && !n) switch (r && r.name) {
              case "DatabaseClosedError":
                throw new E.DatabaseClosed(r);
              case "MissingAPIError":
                throw new E.MissingAPI(r.message, r);
              default:
                throw new E.OpenFailed(r);
            }
            if (!this.active) throw new E.TransactionInactive();
            pt(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || n).transaction(this.storeNames, this.mode, {
              durability: this.chromeTransactionDurability
            })).onerror = X(function(i) {
              dn(i), t._reject(e.error);
            }), e.onabort = X(function(i) {
              dn(i), t.active && t._reject(new E.Abort(e.error)), t.active = false, t.on("abort").fire(i);
            }), e.oncomplete = X(function() {
              t.active = false, t._resolve(), "mutatedParts" in e && Qt.storagemutated.fire(e.mutatedParts);
            });
          }
          return this;
        }, Gt.prototype._promise = function(e, t, n) {
          var r, i = this;
          return e === "readwrite" && this.mode !== "readwrite" ? nt(new E.ReadOnly("Transaction is readonly")) : this.active ? this._locked() ? new D(function(a, u) {
            i._blockedFuncs.push([
              function() {
                i._promise(e, t, n).then(a, u);
              },
              C
            ]);
          }) : n ? je(function() {
            var a = new D(function(u, l) {
              i._lock();
              var d = t(u, l, i);
              d && d.then && d.then(u, l);
            });
            return a.finally(function() {
              return i._unlock();
            }), a._lib = true, a;
          }) : ((r = new D(function(a, u) {
            var l = t(a, u, i);
            l && l.then && l.then(a, u);
          }))._lib = true, r) : nt(new E.TransactionInactive());
        }, Gt.prototype._root = function() {
          return this.parent ? this.parent._root() : this;
        }, Gt.prototype.waitFor = function(e) {
          var t, n = this._root(), r = D.resolve(e), i = (n._waitingFor ? n._waitingFor = n._waitingFor.then(function() {
            return r;
          }) : (n._waitingFor = r, n._waitingQueue = [], t = n.idbtrans.objectStore(n.storeNames[0]), (function a() {
            for (++n._spinCount; n._waitingQueue.length; ) n._waitingQueue.shift()();
            n._waitingFor && (t.get(-1 / 0).onsuccess = a);
          })()), n._waitingFor);
          return new D(function(a, u) {
            r.then(function(l) {
              return n._waitingQueue.push(X(a.bind(null, l)));
            }, function(l) {
              return n._waitingQueue.push(X(u.bind(null, l)));
            }).finally(function() {
              n._waitingFor === i && (n._waitingFor = null);
            });
          });
        }, Gt.prototype.abort = function() {
          this.active && (this.active = false, this.idbtrans && this.idbtrans.abort(), this._reject(new E.Abort()));
        }, Gt.prototype.table = function(e) {
          var t = this._memoizedTables || (this._memoizedTables = {});
          if (le(t, e)) return t[e];
          var n = this.schema[e];
          if (n) return (n = new this.db.Table(e, n, this)).core = this.db.core.table(e), t[e] = n;
          throw new E.NotFound("Table " + e + " not part of transaction");
        }, Gt);
        function Gt() {
        }
        function Wn(e, t, n, r, i, a, u, l) {
          return {
            name: e,
            keyPath: t,
            unique: n,
            multi: r,
            auto: i,
            compound: a,
            src: (n && !u ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + Cr(t),
            type: l
          };
        }
        function Cr(e) {
          return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
        }
        function Hn(e, t, n) {
          return {
            name: e,
            primKey: t,
            indexes: n,
            mappedClass: null,
            idxByName: (r = function(i) {
              return [
                i.name,
                i
              ];
            }, n.reduce(function(i, a, u) {
              return a = r(a, u), a && (i[a[0]] = a[1]), i;
            }, {}))
          };
          var r;
        }
        var mn = function(e) {
          try {
            return e.only([
              []
            ]), mn = function() {
              return [
                []
              ];
            }, [
              []
            ];
          } catch {
            return mn = function() {
              return Nt;
            }, Nt;
          }
        };
        function Qn(e) {
          return e == null ? function() {
          } : typeof e == "string" ? (t = e).split(".").length === 1 ? function(n) {
            return n[t];
          } : function(n) {
            return Te(n, t);
          } : function(n) {
            return Te(n, e);
          };
          var t;
        }
        function Ir(e) {
          return [].slice.call(e);
        }
        var si = 0;
        function bn(e) {
          return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
        }
        function ci(e, t, d) {
          function r(m) {
            if (m.type === 3) return null;
            if (m.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
            var h = m.lower, b = m.upper, g = m.lowerOpen, m = m.upperOpen;
            return h === void 0 ? b === void 0 ? null : t.upperBound(b, !!m) : b === void 0 ? t.lowerBound(h, !!g) : t.bound(h, b, !!g, !!m);
          }
          function i(v) {
            var h, b = v.name;
            return {
              name: b,
              schema: v,
              mutate: function(g) {
                var m = g.trans, y = g.type, A = g.keys, T = g.values, O = g.range;
                return new Promise(function(K, U) {
                  K = X(K);
                  var W = m.objectStore(b), H = W.keyPath == null, q = y === "put" || y === "add";
                  if (!q && y !== "delete" && y !== "deleteRange") throw new Error("Invalid operation type: " + y);
                  var te, ee = (A || T || {
                    length: 1
                  }).length;
                  if (A && T && A.length !== T.length) throw new Error("Given keys array must have same length as given values array.");
                  if (ee === 0) return K({
                    numFailures: 0,
                    failures: {},
                    results: [],
                    lastResult: void 0
                  });
                  function J(ft) {
                    ++Ye, dn(ft);
                  }
                  var ae = [], Le = [], Ye = 0;
                  if (y === "deleteRange") {
                    if (O.type === 4) return K({
                      numFailures: Ye,
                      failures: Le,
                      results: [],
                      lastResult: void 0
                    });
                    O.type === 3 ? ae.push(te = W.clear()) : ae.push(te = W.delete(r(O)));
                  } else {
                    var H = q ? H ? [
                      T,
                      A
                    ] : [
                      T,
                      null
                    ] : [
                      A,
                      null
                    ], de = H[0], ke = H[1];
                    if (q) for (var st = 0; st < ee; ++st) ae.push(te = ke && ke[st] !== void 0 ? W[y](de[st], ke[st]) : W[y](de[st])), te.onerror = J;
                    else for (st = 0; st < ee; ++st) ae.push(te = W[y](de[st])), te.onerror = J;
                  }
                  function qt(ft) {
                    ft = ft.target.result, ae.forEach(function(on, dr) {
                      return on.error != null && (Le[dr] = on.error);
                    }), K({
                      numFailures: Ye,
                      failures: Le,
                      results: y === "delete" ? A : ae.map(function(on) {
                        return on.result;
                      }),
                      lastResult: ft
                    });
                  }
                  te.onerror = function(ft) {
                    J(ft), qt(ft);
                  }, te.onsuccess = qt;
                });
              },
              getMany: function(g) {
                var m = g.trans, y = g.keys;
                return new Promise(function(A, T) {
                  A = X(A);
                  for (var O, K = m.objectStore(b), U = y.length, W = new Array(U), H = 0, q = 0, te = function(ae) {
                    ae = ae.target, W[ae._pos] = ae.result, ++q === H && A(W);
                  }, ee = Jt(T), J = 0; J < U; ++J) y[J] != null && ((O = K.get(y[J]))._pos = J, O.onsuccess = te, O.onerror = ee, ++H);
                  H === 0 && A(W);
                });
              },
              get: function(g) {
                var m = g.trans, y = g.key;
                return new Promise(function(A, T) {
                  A = X(A);
                  var O = m.objectStore(b).get(y);
                  O.onsuccess = function(K) {
                    return A(K.target.result);
                  }, O.onerror = Jt(T);
                });
              },
              query: (h = l, function(g) {
                return new Promise(function(m, y) {
                  m = X(m);
                  var A, T, O, q = g.trans, K = g.values, U = g.limit, H = g.query, W = U === 1 / 0 ? void 0 : U, te = H.index, H = H.range, q = q.objectStore(b), q = te.isPrimaryKey ? q : q.index(te.name), te = r(H);
                  if (U === 0) return m({
                    result: []
                  });
                  h ? ((H = K ? q.getAll(te, W) : q.getAllKeys(te, W)).onsuccess = function(ee) {
                    return m({
                      result: ee.target.result
                    });
                  }, H.onerror = Jt(y)) : (A = 0, T = !K && "openKeyCursor" in q ? q.openKeyCursor(te) : q.openCursor(te), O = [], T.onsuccess = function(ee) {
                    var J = T.result;
                    return !J || (O.push(K ? J.value : J.primaryKey), ++A === U) ? m({
                      result: O
                    }) : void J.continue();
                  }, T.onerror = Jt(y));
                });
              }),
              openCursor: function(g) {
                var m = g.trans, y = g.values, A = g.query, T = g.reverse, O = g.unique;
                return new Promise(function(K, U) {
                  K = X(K);
                  var q = A.index, W = A.range, H = m.objectStore(b), H = q.isPrimaryKey ? H : H.index(q.name), q = T ? O ? "prevunique" : "prev" : O ? "nextunique" : "next", te = !y && "openKeyCursor" in H ? H.openKeyCursor(r(W), q) : H.openCursor(r(W), q);
                  te.onerror = Jt(U), te.onsuccess = X(function(ee) {
                    var J, ae, Le, Ye, de = te.result;
                    de ? (de.___id = ++si, de.done = false, J = de.continue.bind(de), ae = (ae = de.continuePrimaryKey) && ae.bind(de), Le = de.advance.bind(de), Ye = function() {
                      throw new Error("Cursor not stopped");
                    }, de.trans = m, de.stop = de.continue = de.continuePrimaryKey = de.advance = function() {
                      throw new Error("Cursor not started");
                    }, de.fail = X(U), de.next = function() {
                      var ke = this, st = 1;
                      return this.start(function() {
                        return st-- ? ke.continue() : ke.stop();
                      }).then(function() {
                        return ke;
                      });
                    }, de.start = function(ke) {
                      function st() {
                        if (te.result) try {
                          ke();
                        } catch (ft) {
                          de.fail(ft);
                        }
                        else de.done = true, de.start = function() {
                          throw new Error("Cursor behind last entry");
                        }, de.stop();
                      }
                      var qt = new Promise(function(ft, on) {
                        ft = X(ft), te.onerror = Jt(on), de.fail = on, de.stop = function(dr) {
                          de.stop = de.continue = de.continuePrimaryKey = de.advance = Ye, ft(dr);
                        };
                      });
                      return te.onsuccess = X(function(ft) {
                        te.onsuccess = st, st();
                      }), de.continue = J, de.continuePrimaryKey = ae, de.advance = Le, st(), qt;
                    }, K(de)) : K(null);
                  }, U);
                });
              },
              count: function(g) {
                var m = g.query, y = g.trans, A = m.index, T = m.range;
                return new Promise(function(O, K) {
                  var U = y.objectStore(b), U = A.isPrimaryKey ? U : U.index(A.name), W = r(T), W = W ? U.count(W) : U.count();
                  W.onsuccess = X(function(H) {
                    return O(H.target.result);
                  }), W.onerror = Jt(K);
                });
              }
            };
          }
          a = d, u = Ir((d = e).objectStoreNames);
          var a, d = {
            schema: {
              name: d.name,
              tables: u.map(function(v) {
                return a.objectStore(v);
              }).map(function(v) {
                var h = v.keyPath, b = v.autoIncrement, m = G(h), g = {}, m = {
                  name: v.name,
                  primaryKey: {
                    name: null,
                    isPrimaryKey: true,
                    outbound: h == null,
                    compound: m,
                    keyPath: h,
                    autoIncrement: b,
                    unique: true,
                    extractKey: Qn(h)
                  },
                  indexes: Ir(v.indexNames).map(function(y) {
                    return v.index(y);
                  }).map(function(O) {
                    var K = O.name, A = O.unique, T = O.multiEntry, O = O.keyPath, K = {
                      name: K,
                      compound: G(O),
                      keyPath: O,
                      unique: A,
                      multiEntry: T,
                      extractKey: Qn(O)
                    };
                    return g[bn(O)] = K;
                  }),
                  getIndexByKeyPath: function(y) {
                    return g[bn(y)];
                  }
                };
                return g[":id"] = m.primaryKey, h != null && (g[bn(h)] = m.primaryKey), m;
              })
            },
            hasGetAll: 0 < u.length && "getAll" in a.objectStore(u[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
          }, u = d.schema, l = d.hasGetAll, d = u.tables.map(i), S = {};
          return d.forEach(function(v) {
            return S[v.name] = v;
          }), {
            stack: "dbcore",
            transaction: e.transaction.bind(e),
            table: function(v) {
              if (S[v]) return S[v];
              throw new Error("Table '".concat(v, "' not found"));
            },
            MIN_KEY: -1 / 0,
            MAX_KEY: mn(t),
            schema: u
          };
        }
        function li(e, t, n, r) {
          return n = n.IDBKeyRange, t = ci(t, n, r), {
            dbcore: e.dbcore.reduce(function(i, a) {
              return a = a.create, P(P({}, i), a(i));
            }, t)
          };
        }
        function xn(e, t) {
          var n = t.db, n = li(e._middlewares, n, e._deps, t);
          e.core = n.dbcore, e.tables.forEach(function(r) {
            var i = r.name;
            e.core.schema.tables.some(function(a) {
              return a.name === i;
            }) && (r.core = e.core.table(i), e[i] instanceof e.Table) && (e[i].core = r.core);
          });
        }
        function kn(e, t, n, r) {
          n.forEach(function(i) {
            var a = r[i];
            t.forEach(function(u) {
              var l = (function d(S, v) {
                return Me(S, v) || (S = x(S)) && d(S, v);
              })(u, i);
              (!l || "value" in l && l.value === void 0) && (u === e.Transaction.prototype || u instanceof e.Transaction ? be(u, i, {
                get: function() {
                  return this.table(i);
                },
                set: function(d) {
                  Qe(this, i, {
                    value: d,
                    writable: true,
                    configurable: true,
                    enumerable: true
                  });
                }
              }) : u[i] = new e.Table(i, a));
            });
          });
        }
        function Xn(e, t) {
          t.forEach(function(n) {
            for (var r in n) n[r] instanceof e.Table && delete n[r];
          });
        }
        function fi(e, t) {
          return e._cfg.version - t._cfg.version;
        }
        function pi(e, t, n, r) {
          var i = e._dbSchema, a = (n.objectStoreNames.contains("$meta") && !i.$meta && (i.$meta = Hn("$meta", Kr("")[0], []), e._storeNames.push("$meta")), e._createTransaction("readwrite", e._storeNames, i)), u = (a.create(n), a._completion.catch(r), a._reject.bind(a)), l = C.transless || C;
          je(function() {
            if (C.trans = a, C.transless = l, t !== 0) return xn(e, n), S = t, ((d = a).storeNames.includes("$meta") ? d.table("$meta").get("version").then(function(v) {
              return v ?? S;
            }) : D.resolve(S)).then(function(A) {
              var h = e, b = A, g = a, m = n, y = [], A = h._versions, T = h._dbSchema = Nn(0, h.idbdb, m);
              return (A = A.filter(function(O) {
                return O._cfg.version >= b;
              })).length === 0 ? D.resolve() : (A.forEach(function(O) {
                y.push(function() {
                  var K, U, W, H = T, q = O._cfg.dbschema, te = (jn(h, H, m), jn(h, q, m), T = h._dbSchema = q, Zn(H, q)), ee = (te.add.forEach(function(J) {
                    er(m, J[0], J[1].primKey, J[1].indexes);
                  }), te.change.forEach(function(J) {
                    if (J.recreate) throw new E.Upgrade("Not yet support for changing primary key");
                    var ae = m.objectStore(J.name);
                    J.add.forEach(function(Le) {
                      return Pn(ae, Le);
                    }), J.change.forEach(function(Le) {
                      ae.deleteIndex(Le.name), Pn(ae, Le);
                    }), J.del.forEach(function(Le) {
                      return ae.deleteIndex(Le);
                    });
                  }), O._cfg.contentUpgrade);
                  if (ee && O._cfg.version > b) return xn(h, m), g._memoizedTables = {}, K = _t(q), te.del.forEach(function(J) {
                    K[J] = H[J];
                  }), Xn(h, [
                    h.Transaction.prototype
                  ]), kn(h, [
                    h.Transaction.prototype
                  ], w(K), K), g.schema = K, (U = He(ee)) && gt(), q = D.follow(function() {
                    var J;
                    (W = ee(g)) && U && (J = Fe.bind(null, null), W.then(J, J));
                  }), W && typeof W.then == "function" ? D.resolve(W) : q.then(function() {
                    return W;
                  });
                }), y.push(function(K) {
                  var U, W, H = O._cfg.dbschema;
                  U = H, W = K, [].slice.call(W.db.objectStoreNames).forEach(function(q) {
                    return U[q] == null && W.db.deleteObjectStore(q);
                  }), Xn(h, [
                    h.Transaction.prototype
                  ]), kn(h, [
                    h.Transaction.prototype
                  ], h._storeNames, h._dbSchema), g.schema = h._dbSchema;
                }), y.push(function(K) {
                  h.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(h.idbdb.version / 10) === O._cfg.version ? (h.idbdb.deleteObjectStore("$meta"), delete h._dbSchema.$meta, h._storeNames = h._storeNames.filter(function(U) {
                    return U !== "$meta";
                  })) : K.objectStore("$meta").put(O._cfg.version, "version"));
                });
              }), (function O() {
                return y.length ? D.resolve(y.shift()(g.idbtrans)).then(O) : D.resolve();
              })().then(function() {
                Br(T, m);
              }));
            }).catch(u);
            var d, S;
            w(i).forEach(function(v) {
              er(n, v, i[v].primKey, i[v].indexes);
            }), xn(e, n), D.follow(function() {
              return e.on.populate.fire(a);
            }).catch(u);
          });
        }
        function hi(e, t) {
          Br(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
          var n = Nn(0, e.idbdb, t);
          jn(e, e._dbSchema, t);
          for (var r = 0, i = Zn(n, e._dbSchema).change; r < i.length; r++) {
            var a = ((u) => {
              if (u.change.length || u.recreate) return console.warn("Unable to patch indexes of table ".concat(u.name, " because it has changes on the type of index or primary key.")), {
                value: void 0
              };
              var l = t.objectStore(u.name);
              u.add.forEach(function(d) {
                yt && console.debug("Dexie upgrade patch: Creating missing index ".concat(u.name, ".").concat(d.src)), Pn(l, d);
              });
            })(i[r]);
            if (typeof a == "object") return a.value;
          }
        }
        function Zn(e, t) {
          var n, r = {
            del: [],
            add: [],
            change: []
          };
          for (n in e) t[n] || r.del.push(n);
          for (n in t) {
            var i = e[n], a = t[n];
            if (i) {
              var u = {
                name: n,
                def: a,
                recreate: false,
                del: [],
                add: [],
                change: []
              };
              if ("" + (i.primKey.keyPath || "") != "" + (a.primKey.keyPath || "") || i.primKey.auto !== a.primKey.auto) u.recreate = true, r.change.push(u);
              else {
                var l = i.idxByName, d = a.idxByName, S = void 0;
                for (S in l) d[S] || u.del.push(S);
                for (S in d) {
                  var v = l[S], h = d[S];
                  v ? v.src !== h.src && u.change.push(h) : u.add.push(h);
                }
                (0 < u.del.length || 0 < u.add.length || 0 < u.change.length) && r.change.push(u);
              }
            } else r.add.push([
              n,
              a
            ]);
          }
          return r;
        }
        function er(e, t, n, r) {
          var i = e.db.createObjectStore(t, n.keyPath ? {
            keyPath: n.keyPath,
            autoIncrement: n.auto
          } : {
            autoIncrement: n.auto
          });
          r.forEach(function(a) {
            return Pn(i, a);
          });
        }
        function Br(e, t) {
          w(e).forEach(function(n) {
            t.db.objectStoreNames.contains(n) || (yt && console.debug("Dexie: Creating missing table", n), er(t, n, e[n].primKey, e[n].indexes));
          });
        }
        function Pn(e, t) {
          e.createIndex(t.name, t.keyPath, {
            unique: t.unique,
            multiEntry: t.multi
          });
        }
        function Nn(e, t, n) {
          var r = {};
          return Xe(t.objectStoreNames, 0).forEach(function(i) {
            for (var a = n.objectStore(i), u = Wn(Cr(S = a.keyPath), S || "", true, false, !!a.autoIncrement, S && typeof S != "string", true), l = [], d = 0; d < a.indexNames.length; ++d) {
              var v = a.index(a.indexNames[d]), S = v.keyPath, v = Wn(v.name, S, !!v.unique, !!v.multiEntry, false, S && typeof S != "string", false);
              l.push(v);
            }
            r[i] = Hn(i, u, l);
          }), r;
        }
        function jn(e, t, n) {
          for (var r = n.db.objectStoreNames, i = 0; i < r.length; ++i) {
            var a = r[i], u = n.objectStore(a);
            e._hasGetAll = "getAll" in u;
            for (var l = 0; l < u.indexNames.length; ++l) {
              var d, S = u.indexNames[l], v = u.index(S).keyPath, v = typeof v == "string" ? v : "[" + Xe(v).join("+") + "]";
              t[a] && (d = t[a].idxByName[v]) && (d.name = S, delete t[a].idxByName[v], t[a].idxByName[S] = d);
            }
          }
          typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && N.WorkerGlobalScope && N instanceof N.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = false);
        }
        function Kr(e) {
          return e.split(",").map(function(t, n) {
            var i = t.split(":"), r = (r = i[1]) == null ? void 0 : r.trim(), i = (t = i[0].trim()).replace(/([&*]|\+\+)/g, ""), a = /^\[/.test(i) ? i.match(/^\[(.*)\]$/)[1].split("+") : i;
            return Wn(i, a || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), G(a), n === 0, r);
          });
        }
        sn.prototype._createTableSchema = Hn, sn.prototype._parseIndexSyntax = Kr, sn.prototype._parseStoresSpec = function(e, t) {
          var n = this;
          w(e).forEach(function(r) {
            if (e[r] !== null) {
              var i = n._parseIndexSyntax(e[r]), a = i.shift();
              if (!a) throw new E.Schema("Invalid schema for table " + r + ": " + e[r]);
              if (a.unique = true, a.multi) throw new E.Schema("Primary key cannot be multiEntry*");
              i.forEach(function(u) {
                if (u.auto) throw new E.Schema("Only primary key can be marked as autoIncrement (++)");
                if (!u.keyPath) throw new E.Schema("Index must have a name and cannot be an empty string");
              }), a = n._createTableSchema(r, a, i), t[r] = a;
            }
          });
        }, sn.prototype.stores = function(n) {
          var t = this.db, n = (this._cfg.storesSource = this._cfg.storesSource ? ce(this._cfg.storesSource, n) : n, t._versions), r = {}, i = {};
          return n.forEach(function(a) {
            ce(r, a._cfg.storesSource), i = a._cfg.dbschema = {}, a._parseStoresSpec(r, i);
          }), t._dbSchema = i, Xn(t, [
            t._allTables,
            t,
            t.Transaction.prototype
          ]), kn(t, [
            t._allTables,
            t,
            t.Transaction.prototype,
            this._cfg.tables
          ], w(i), i), t._storeNames = w(i), this;
        }, sn.prototype.upgrade = function(e) {
          return this._cfg.contentUpgrade = It(this._cfg.contentUpgrade || oe, e), this;
        };
        var yi = sn;
        function sn() {
        }
        function tr(e, t) {
          var n = e._dbNamesDB;
          return n || (n = e._dbNamesDB = new Wt(zt, {
            addons: [],
            indexedDB: e,
            IDBKeyRange: t
          })).version(1).stores({
            dbnames: "name"
          }), n.table("dbnames");
        }
        function nr(e) {
          return e && typeof e.databases == "function";
        }
        function rr(e) {
          return je(function() {
            return C.letThrough = true, e();
          });
        }
        function ir(e) {
          return !("from" in e);
        }
        var jt = function(e, t) {
          var n;
          if (!this) return n = new jt(), e && "d" in e && ce(n, e), n;
          ce(this, arguments.length ? {
            d: 1,
            from: e,
            to: 1 < arguments.length ? t : e
          } : {
            d: 0
          });
        };
        function gn(e, t, n) {
          var r = Re(t, n);
          if (!isNaN(r)) {
            if (0 < r) throw RangeError();
            if (ir(e)) return ce(e, {
              from: t,
              to: n,
              d: 1
            });
            var r = e.l, i = e.r;
            if (Re(n, e.from) < 0) return r ? gn(r, t, n) : e.l = {
              from: t,
              to: n,
              d: 1,
              l: null,
              r: null
            }, Dr(e);
            if (0 < Re(t, e.to)) return i ? gn(i, t, n) : e.r = {
              from: t,
              to: n,
              d: 1,
              l: null,
              r: null
            }, Dr(e);
            Re(t, e.from) < 0 && (e.from = t, e.l = null, e.d = i ? i.d + 1 : 1), 0 < Re(n, e.to) && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1), t = !e.r, r && !e.l && wn(e, r), i && t && wn(e, i);
          }
        }
        function wn(e, t) {
          ir(t) || (function n(r, i) {
            var a = i.from, u = i.l, l = i.r;
            gn(r, a, i.to), u && n(r, u), l && n(r, l);
          })(e, t);
        }
        function Rr(e, t) {
          var n = Cn(t), r = n.next();
          if (!r.done) for (var i = r.value, a = Cn(e), u = a.next(i.from), l = u.value; !r.done && !u.done; ) {
            if (Re(l.from, i.to) <= 0 && 0 <= Re(l.to, i.from)) return true;
            Re(i.from, l.from) < 0 ? i = (r = n.next(l.from)).value : l = (u = a.next(i.from)).value;
          }
          return false;
        }
        function Cn(e) {
          var t = ir(e) ? null : {
            s: 0,
            n: e
          };
          return {
            next: function(n) {
              for (var r = 0 < arguments.length; t; ) switch (t.s) {
                case 0:
                  if (t.s = 1, r) for (; t.n.l && Re(n, t.n.from) < 0; ) t = {
                    up: t,
                    n: t.n.l,
                    s: 1
                  };
                  else for (; t.n.l; ) t = {
                    up: t,
                    n: t.n.l,
                    s: 1
                  };
                case 1:
                  if (t.s = 2, !r || Re(n, t.n.to) <= 0) return {
                    value: t.n,
                    done: false
                  };
                case 2:
                  if (t.n.r) {
                    t.s = 3, t = {
                      up: t,
                      n: t.n.r,
                      s: 0
                    };
                    continue;
                  }
                case 3:
                  t = t.up;
              }
              return {
                done: true
              };
            }
          };
        }
        function Dr(e) {
          var t, n, r, i = (((i = e.r) == null ? void 0 : i.d) || 0) - (((i = e.l) == null ? void 0 : i.d) || 0), i = 1 < i ? "r" : i < -1 ? "l" : "";
          i && (t = i == "r" ? "l" : "r", n = P({}, e), r = e[i], e.from = r.from, e.to = r.to, e[i] = r[i], n[i] = r[t], (e[t] = n).d = Fr(n)), e.d = Fr(e);
        }
        function Fr(n) {
          var t = n.r, n = n.l;
          return (t ? n ? Math.max(t.d, n.d) : t.d : n ? n.d : 0) + 1;
        }
        function In(e, t) {
          return w(t).forEach(function(n) {
            e[n] ? wn(e[n], t[n]) : e[n] = (function r(i) {
              var a, u, l = {};
              for (a in i) le(i, a) && (u = i[a], l[a] = !u || typeof u != "object" || M.has(u.constructor) ? u : r(u));
              return l;
            })(t[n]);
          }), e;
        }
        function or(e, t) {
          return e.all || t.all || Object.keys(e).some(function(n) {
            return t[n] && Rr(t[n], e[n]);
          });
        }
        qe(jt.prototype, ((_e = {
          add: function(e) {
            return wn(this, e), this;
          },
          addKey: function(e) {
            return gn(this, e, e), this;
          },
          addKeys: function(e) {
            var t = this;
            return e.forEach(function(n) {
              return gn(t, n, n);
            }), this;
          },
          hasKey: function(e) {
            var t = Cn(this).next(e).value;
            return t && Re(t.from, e) <= 0 && 0 <= Re(t.to, e);
          }
        })[Ge] = function() {
          return Cn(this);
        }, _e));
        var nn = {}, ar = {}, ur = false;
        function Bn(e) {
          In(ar, e), ur || (ur = true, setTimeout(function() {
            ur = false, sr(ar, !(ar = {}));
          }, 0));
        }
        function sr(e, t) {
          t === void 0 && (t = false);
          var n = /* @__PURE__ */ new Set();
          if (e.all) for (var r = 0, i = Object.values(nn); r < i.length; r++) Lr(l = i[r], e, n, t);
          else for (var a in e) {
            var u, l, a = /^idb\:\/\/(.*)\/(.*)\//.exec(a);
            a && (u = a[1], a = a[2], l = nn["idb://".concat(u, "/").concat(a)]) && Lr(l, e, n, t);
          }
          n.forEach(function(d) {
            return d();
          });
        }
        function Lr(e, t, n, r) {
          for (var i = [], a = 0, u = Object.entries(e.queries.query); a < u.length; a++) {
            for (var l = u[a], d = l[0], S = [], v = 0, h = l[1]; v < h.length; v++) {
              var b = h[v];
              or(t, b.obsSet) ? b.subscribers.forEach(function(A) {
                return n.add(A);
              }) : r && S.push(b);
            }
            r && i.push([
              d,
              S
            ]);
          }
          if (r) for (var g = 0, m = i; g < m.length; g++) {
            var y = m[g], d = y[0], S = y[1];
            e.queries.query[d] = S;
          }
        }
        function di(e) {
          var t = e._state, n = e._deps.indexedDB;
          if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
            return t.dbOpenError ? nt(t.dbOpenError) : e;
          });
          t.isBeingOpened = true, t.dbOpenError = null, t.openComplete = false;
          var r = t.openCanceller, i = Math.round(10 * e.verno), a = false;
          function u() {
            if (t.openCanceller !== r) throw new E.DatabaseClosed("db.open() was cancelled");
          }
          function l() {
            return new D(function(b, g) {
              if (u(), !n) throw new E.MissingAPI();
              var m = e.name, y = t.autoSchema || !i ? n.open(m) : n.open(m, i);
              if (!y) throw new E.MissingAPI();
              y.onerror = Jt(g), y.onblocked = X(e._fireOnBlocked), y.onupgradeneeded = X(function(A) {
                var T;
                v = y.transaction, t.autoSchema && !e._options.allowEmptyDB ? (y.onerror = dn, v.abort(), y.result.close(), (T = n.deleteDatabase(m)).onsuccess = T.onerror = X(function() {
                  g(new E.NoSuchDatabase("Database ".concat(m, " doesnt exist")));
                })) : (v.onerror = Jt(g), T = A.oldVersion > Math.pow(2, 62) ? 0 : A.oldVersion, h = T < 1, e.idbdb = y.result, a && hi(e, v), pi(e, T / 10, v, g));
              }, g), y.onsuccess = X(function() {
                v = null;
                var A, T, O, K, U, W, H = e.idbdb = y.result, q = Xe(H.objectStoreNames);
                if (0 < q.length) try {
                  var te = H.transaction((U = q).length === 1 ? U[0] : U, "readonly");
                  if (t.autoSchema) W = H, K = te, (O = e).verno = W.version / 10, K = O._dbSchema = Nn(0, W, K), O._storeNames = Xe(W.objectStoreNames, 0), kn(O, [
                    O._allTables
                  ], w(K), K);
                  else if (jn(e, e._dbSchema, te), T = te, ((T = Zn(Nn(0, (A = e).idbdb, T), A._dbSchema)).add.length || T.change.some(function(ee) {
                    return ee.add.length || ee.change.length;
                  })) && !a) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), H.close(), i = H.version + 1, a = true, b(l());
                  xn(e, te);
                } catch {
                }
                Rt.push(e), H.onversionchange = X(function(ee) {
                  t.vcFired = true, e.on("versionchange").fire(ee);
                }), H.onclose = X(function() {
                  e.close({
                    disableAutoOpen: false
                  });
                }), h && (q = e._deps, U = m, nr(W = q.indexedDB) || U === zt || tr(W, q.IDBKeyRange).put({
                  name: U
                }).catch(oe)), b();
              }, g);
            }).catch(function(b) {
              switch (b == null ? void 0 : b.name) {
                case "UnknownError":
                  if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), l();
                  break;
                case "VersionError":
                  if (0 < i) return i = 0, l();
              }
              return D.reject(b);
            });
          }
          var d, S = t.dbReadyResolve, v = null, h = false;
          return D.race([
            r,
            (typeof navigator > "u" ? D.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(b) {
              function g() {
                return indexedDB.databases().finally(b);
              }
              d = setInterval(g, 100), g();
            }).finally(function() {
              return clearInterval(d);
            }) : Promise.resolve()).then(l)
          ]).then(function() {
            return u(), t.onReadyBeingFired = [], D.resolve(rr(function() {
              return e.on.ready.fire(e.vip);
            })).then(function b() {
              var g;
              if (0 < t.onReadyBeingFired.length) return g = t.onReadyBeingFired.reduce(It, oe), t.onReadyBeingFired = [], D.resolve(rr(function() {
                return g(e.vip);
              })).then(b);
            });
          }).finally(function() {
            t.openCanceller === r && (t.onReadyBeingFired = null, t.isBeingOpened = false);
          }).catch(function(b) {
            t.dbOpenError = b;
            try {
              v && v.abort();
            } catch {
            }
            return r === t.openCanceller && e._close(), nt(b);
          }).finally(function() {
            t.openComplete = true, S();
          }).then(function() {
            var b;
            return h && (b = {}, e.tables.forEach(function(g) {
              g.schema.indexes.forEach(function(m) {
                m.name && (b["idb://".concat(e.name, "/").concat(g.name, "/").concat(m.name)] = new jt(-1 / 0, [
                  [
                    []
                  ]
                ]));
              }), b["idb://".concat(e.name, "/").concat(g.name, "/")] = b["idb://".concat(e.name, "/").concat(g.name, "/:dels")] = new jt(-1 / 0, [
                [
                  []
                ]
              ]);
            }), Qt(vn).fire(b), sr(b, true)), e;
          });
        }
        function cr(e) {
          function t(a) {
            return e.next(a);
          }
          var n = i(t), r = i(function(a) {
            return e.throw(a);
          });
          function i(a) {
            return function(l) {
              var l = a(l), d = l.value;
              return l.done ? d : d && typeof d.then == "function" ? d.then(n, r) : G(d) ? Promise.all(d).then(n, r) : n(d);
            };
          }
          return i(t)();
        }
        function Kn(e, t, n) {
          for (var r = G(e) ? e.slice() : [
            e
          ], i = 0; i < n; ++i) r.push(t);
          return r;
        }
        var vi = {
          stack: "dbcore",
          name: "VirtualIndexMiddleware",
          level: 1,
          create: function(e) {
            return P(P({}, e), {
              table: function(r) {
                var n = e.table(r), r = n.schema, i = {}, a = [];
                function u(b, g, m) {
                  var O = bn(b), y = i[O] = i[O] || [], A = b == null ? 0 : typeof b == "string" ? 1 : b.length, T = 0 < g, O = P(P({}, m), {
                    name: T ? "".concat(O, "(virtual-from:").concat(m.name, ")") : m.name,
                    lowLevelIndex: m,
                    isVirtual: T,
                    keyTail: g,
                    keyLength: A,
                    extractKey: Qn(b),
                    unique: !T && m.unique
                  });
                  return y.push(O), O.isPrimaryKey || a.push(O), 1 < A && u(A === 2 ? b[0] : b.slice(0, A - 1), g + 1, m), y.sort(function(K, U) {
                    return K.keyTail - U.keyTail;
                  }), O;
                }
                var l = u(r.primaryKey.keyPath, 0, r.primaryKey);
                i[":id"] = [
                  l
                ];
                for (var d = 0, S = r.indexes; d < S.length; d++) {
                  var v = S[d];
                  u(v.keyPath, 0, v);
                }
                function h(b) {
                  var g, m = b.query.index;
                  return m.isVirtual ? P(P({}, b), {
                    query: {
                      index: m.lowLevelIndex,
                      range: (g = b.query.range, m = m.keyTail, {
                        type: g.type === 1 ? 2 : g.type,
                        lower: Kn(g.lower, g.lowerOpen ? e.MAX_KEY : e.MIN_KEY, m),
                        lowerOpen: true,
                        upper: Kn(g.upper, g.upperOpen ? e.MIN_KEY : e.MAX_KEY, m),
                        upperOpen: true
                      })
                    }
                  }) : b;
                }
                return P(P({}, n), {
                  schema: P(P({}, r), {
                    primaryKey: l,
                    indexes: a,
                    getIndexByKeyPath: function(b) {
                      return (b = i[bn(b)]) && b[0];
                    }
                  }),
                  count: function(b) {
                    return n.count(h(b));
                  },
                  query: function(b) {
                    return n.query(h(b));
                  },
                  openCursor: function(b) {
                    var g = b.query.index, m = g.keyTail, y = g.keyLength;
                    return g.isVirtual ? n.openCursor(h(b)).then(function(T) {
                      return T && A(T);
                    }) : n.openCursor(b);
                    function A(T) {
                      return Object.create(T, {
                        continue: {
                          value: function(O) {
                            O != null ? T.continue(Kn(O, b.reverse ? e.MAX_KEY : e.MIN_KEY, m)) : b.unique ? T.continue(T.key.slice(0, y).concat(b.reverse ? e.MIN_KEY : e.MAX_KEY, m)) : T.continue();
                          }
                        },
                        continuePrimaryKey: {
                          value: function(O, K) {
                            T.continuePrimaryKey(Kn(O, e.MAX_KEY, m), K);
                          }
                        },
                        primaryKey: {
                          get: function() {
                            return T.primaryKey;
                          }
                        },
                        key: {
                          get: function() {
                            var O = T.key;
                            return y === 1 ? O[0] : O.slice(0, y);
                          }
                        },
                        value: {
                          get: function() {
                            return T.value;
                          }
                        }
                      });
                    }
                  }
                });
              }
            });
          }
        };
        function lr(e, t, n, r) {
          return n = n || {}, r = r || "", w(e).forEach(function(i) {
            var a, u, l;
            le(t, i) ? (a = e[i], u = t[i], typeof a == "object" && typeof u == "object" && a && u ? (l = Ue(a)) !== Ue(u) ? n[r + i] = t[i] : l === "Object" ? lr(a, u, n, r + i + ".") : a !== u && (n[r + i] = t[i]) : a !== u && (n[r + i] = t[i])) : n[r + i] = void 0;
          }), w(t).forEach(function(i) {
            le(e, i) || (n[r + i] = t[i]);
          }), n;
        }
        function fr(e, t) {
          return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
        }
        var mi = {
          stack: "dbcore",
          name: "HooksMiddleware",
          level: 2,
          create: function(e) {
            return P(P({}, e), {
              table: function(t) {
                var n = e.table(t), r = n.schema.primaryKey;
                return P(P({}, n), {
                  mutate: function(i) {
                    var a = C.trans, u = a.table(t).hook, l = u.deleting, d = u.creating, S = u.updating;
                    switch (i.type) {
                      case "add":
                        if (d.fire === oe) break;
                        return a._promise("readwrite", function() {
                          return v(i);
                        }, true);
                      case "put":
                        if (d.fire === oe && S.fire === oe) break;
                        return a._promise("readwrite", function() {
                          return v(i);
                        }, true);
                      case "delete":
                        if (l.fire === oe) break;
                        return a._promise("readwrite", function() {
                          return v(i);
                        }, true);
                      case "deleteRange":
                        if (l.fire === oe) break;
                        return a._promise("readwrite", function() {
                          return (function h(b, g, m) {
                            return n.query({
                              trans: b,
                              values: false,
                              query: {
                                index: r,
                                range: g
                              },
                              limit: m
                            }).then(function(y) {
                              var A = y.result;
                              return v({
                                type: "delete",
                                keys: A,
                                trans: b
                              }).then(function(T) {
                                return 0 < T.numFailures ? Promise.reject(T.failures[0]) : A.length < m ? {
                                  failures: [],
                                  numFailures: 0,
                                  lastResult: void 0
                                } : h(b, P(P({}, g), {
                                  lower: A[A.length - 1],
                                  lowerOpen: true
                                }), m);
                              });
                            });
                          })(i.trans, i.range, 1e4);
                        }, true);
                    }
                    return n.mutate(i);
                    function v(h) {
                      var b, g, m, y = C.trans, A = h.keys || fr(r, h);
                      if (A) return (h = h.type === "add" || h.type === "put" ? P(P({}, h), {
                        keys: A
                      }) : P({}, h)).type !== "delete" && (h.values = V([], h.values)), h.keys && (h.keys = V([], h.keys)), b = n, m = A, ((g = h).type === "add" ? Promise.resolve([]) : b.getMany({
                        trans: g.trans,
                        keys: m,
                        cache: "immutable"
                      })).then(function(T) {
                        var O = A.map(function(K, U) {
                          var W, H, q, te = T[U], ee = {
                            onerror: null,
                            onsuccess: null
                          };
                          return h.type === "delete" ? l.fire.call(ee, K, te, y) : h.type === "add" || te === void 0 ? (W = d.fire.call(ee, K, h.values[U], y), K == null && W != null && (h.keys[U] = K = W, r.outbound || we(h.values[U], r.keyPath, K))) : (W = lr(te, h.values[U]), (H = S.fire.call(ee, W, K, te, y)) && (q = h.values[U], Object.keys(H).forEach(function(J) {
                            le(q, J) ? q[J] = H[J] : we(q, J, H[J]);
                          }))), ee;
                        });
                        return n.mutate(h).then(function(K) {
                          for (var U = K.failures, W = K.results, H = K.numFailures, K = K.lastResult, q = 0; q < A.length; ++q) {
                            var te = (W || A)[q], ee = O[q];
                            te == null ? ee.onerror && ee.onerror(U[q]) : ee.onsuccess && ee.onsuccess(h.type === "put" && T[q] ? h.values[q] : te);
                          }
                          return {
                            failures: U,
                            results: W,
                            numFailures: H,
                            lastResult: K
                          };
                        }).catch(function(K) {
                          return O.forEach(function(U) {
                            return U.onerror && U.onerror(K);
                          }), Promise.reject(K);
                        });
                      });
                      throw new Error("Keys missing");
                    }
                  }
                });
              }
            });
          }
        };
        function Ur(e, t, n) {
          try {
            if (!t || t.keys.length < e.length) return null;
            for (var r = [], i = 0, a = 0; i < t.keys.length && a < e.length; ++i) Re(t.keys[i], e[a]) === 0 && (r.push(n ? xe(t.values[i]) : t.values[i]), ++a);
            return r.length === e.length ? r : null;
          } catch {
            return null;
          }
        }
        var bi = {
          stack: "dbcore",
          level: -1,
          create: function(e) {
            return {
              table: function(t) {
                var n = e.table(t);
                return P(P({}, n), {
                  getMany: function(r) {
                    var i;
                    return r.cache ? (i = Ur(r.keys, r.trans._cache, r.cache === "clone")) ? D.resolve(i) : n.getMany(r).then(function(a) {
                      return r.trans._cache = {
                        keys: r.keys,
                        values: r.cache === "clone" ? xe(a) : a
                      }, a;
                    }) : n.getMany(r);
                  },
                  mutate: function(r) {
                    return r.type !== "add" && (r.trans._cache = null), n.mutate(r);
                  }
                });
              }
            };
          }
        };
        function qr(e, t) {
          return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
        }
        function Mr(e, t) {
          switch (e) {
            case "query":
              return t.values && !t.unique;
            case "get":
            case "getMany":
            case "count":
            case "openCursor":
              return false;
          }
        }
        var gi = {
          stack: "dbcore",
          level: 0,
          name: "Observability",
          create: function(e) {
            var t = e.schema.name, n = new jt(e.MIN_KEY, e.MAX_KEY);
            return P(P({}, e), {
              transaction: function(r, i, a) {
                if (C.subscr && i !== "readonly") throw new E.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(C.querier));
                return e.transaction(r, i, a);
              },
              table: function(r) {
                function i(A) {
                  var y, A = A.query;
                  return [
                    y = A.index,
                    new jt((y = (A = A.range).lower) != null ? y : e.MIN_KEY, (y = A.upper) != null ? y : e.MAX_KEY)
                  ];
                }
                var a = e.table(r), u = a.schema, l = u.primaryKey, d = u.indexes, S = l.extractKey, v = l.outbound, h = l.autoIncrement && d.filter(function(m) {
                  return m.compound && m.keyPath.includes(l.keyPath);
                }), b = P(P({}, a), {
                  mutate: function(m) {
                    function y(ae) {
                      return ae = "idb://".concat(t, "/").concat(r, "/").concat(ae), U[ae] || (U[ae] = new jt());
                    }
                    var A, T, O, K = m.trans, U = m.mutatedParts || (m.mutatedParts = {}), W = y(""), H = y(":dels"), q = m.type, ee = m.type === "deleteRange" ? [
                      m.range
                    ] : m.type === "delete" ? [
                      m.keys
                    ] : m.values.length < 50 ? [
                      fr(l, m).filter(function(ae) {
                        return ae;
                      }),
                      m.values
                    ] : [], te = ee[0], ee = ee[1], J = m.trans._cache;
                    return G(te) ? (W.addKeys(te), (q = q === "delete" || te.length === ee.length ? Ur(te, J) : null) || H.addKeys(te), (q || ee) && (A = y, T = q, O = ee, u.indexes.forEach(function(ae) {
                      var Le = A(ae.name || "");
                      function Ye(ke) {
                        return ke != null ? ae.extractKey(ke) : null;
                      }
                      function de(ke) {
                        ae.multiEntry && G(ke) ? ke.forEach(function(st) {
                          return Le.addKey(st);
                        }) : Le.addKey(ke);
                      }
                      (T || O).forEach(function(ke, ft) {
                        var qt = T && Ye(T[ft]), ft = O && Ye(O[ft]);
                        Re(qt, ft) !== 0 && (qt != null && de(qt), ft != null) && de(ft);
                      });
                    }))) : te ? (ee = {
                      from: (J = te.lower) != null ? J : e.MIN_KEY,
                      to: (q = te.upper) != null ? q : e.MAX_KEY
                    }, H.add(ee), W.add(ee)) : (W.add(n), H.add(n), u.indexes.forEach(function(ae) {
                      return y(ae.name).add(n);
                    })), a.mutate(m).then(function(ae) {
                      return !te || m.type !== "add" && m.type !== "put" || (W.addKeys(ae.results), h && h.forEach(function(Le) {
                        for (var Ye = m.values.map(function(qt) {
                          return Le.extractKey(qt);
                        }), de = Le.keyPath.findIndex(function(qt) {
                          return qt === l.keyPath;
                        }), ke = 0, st = ae.results.length; ke < st; ++ke) Ye[ke][de] = ae.results[ke];
                        y(Le.name).addKeys(Ye);
                      })), K.mutatedParts = In(K.mutatedParts || {}, U), ae;
                    });
                  }
                }), g = {
                  get: function(m) {
                    return [
                      l,
                      new jt(m.key)
                    ];
                  },
                  getMany: function(m) {
                    return [
                      l,
                      new jt().addKeys(m.keys)
                    ];
                  },
                  count: i,
                  query: i,
                  openCursor: i
                };
                return w(g).forEach(function(m) {
                  b[m] = function(y) {
                    var A = C.subscr, T = !!A, O = qr(C, a) && Mr(m, y) ? y.obsSet = {} : A;
                    if (T) {
                      var K, A = function(ee) {
                        return ee = "idb://".concat(t, "/").concat(r, "/").concat(ee), O[ee] || (O[ee] = new jt());
                      }, U = A(""), W = A(":dels"), T = g[m](y), H = T[0], T = T[1];
                      if ((m === "query" && H.isPrimaryKey && !y.values ? W : A(H.name || "")).add(T), !H.isPrimaryKey) {
                        if (m !== "count") return K = m === "query" && v && y.values && a.query(P(P({}, y), {
                          values: false
                        })), a[m].apply(this, arguments).then(function(ee) {
                          if (m === "query") {
                            if (v && y.values) return K.then(function(Ye) {
                              return Ye = Ye.result, U.addKeys(Ye), ee;
                            });
                            var J = y.values ? ee.result.map(S) : ee.result;
                            (y.values ? U : W).addKeys(J);
                          } else {
                            var ae, Le;
                            if (m === "openCursor") return Le = y.values, (ae = ee) && Object.create(ae, {
                              key: {
                                get: function() {
                                  return W.addKey(ae.primaryKey), ae.key;
                                }
                              },
                              primaryKey: {
                                get: function() {
                                  var Ye = ae.primaryKey;
                                  return W.addKey(Ye), Ye;
                                }
                              },
                              value: {
                                get: function() {
                                  return Le && U.addKey(ae.primaryKey), ae.value;
                                }
                              }
                            });
                          }
                          return ee;
                        });
                        W.add(n);
                      }
                    }
                    return a[m].apply(this, arguments);
                  };
                }), b;
              }
            });
          }
        };
        function $r(e, t, n) {
          var r;
          return n.numFailures === 0 ? t : t.type === "deleteRange" || (r = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1, n.numFailures === r) ? null : (r = P({}, t), G(r.keys) && (r.keys = r.keys.filter(function(i, a) {
            return !(a in n.failures);
          })), "values" in r && G(r.values) && (r.values = r.values.filter(function(i, a) {
            return !(a in n.failures);
          })), r);
        }
        function pr(e, t) {
          return n = e, ((r = t).lower === void 0 || (r.lowerOpen ? 0 < Re(n, r.lower) : 0 <= Re(n, r.lower))) && (n = e, (r = t).upper === void 0 || (r.upperOpen ? Re(n, r.upper) < 0 : Re(n, r.upper) <= 0));
          var n, r;
        }
        function Vr(e, t, n, r, i, a) {
          var u, l, d, S, v, h;
          return !n || n.length === 0 || (u = t.query.index, l = u.multiEntry, d = t.query.range, S = r.schema.primaryKey.extractKey, v = u.extractKey, h = (u.lowLevelIndex || u).extractKey, (r = n.reduce(function(b, g) {
            var m = b, y = [];
            if (g.type === "add" || g.type === "put") for (var A = new jt(), T = g.values.length - 1; 0 <= T; --T) {
              var O, K = g.values[T], U = S(K);
              !A.hasKey(U) && (O = v(K), l && G(O) ? O.some(function(ee) {
                return pr(ee, d);
              }) : pr(O, d)) && (A.addKey(U), y.push(K));
            }
            switch (g.type) {
              case "add":
                var W = new jt().addKeys(t.values ? b.map(function(J) {
                  return S(J);
                }) : b), m = b.concat(t.values ? y.filter(function(J) {
                  return J = S(J), !W.hasKey(J) && (W.addKey(J), true);
                }) : y.map(function(J) {
                  return S(J);
                }).filter(function(J) {
                  return !W.hasKey(J) && (W.addKey(J), true);
                }));
                break;
              case "put":
                var H = new jt().addKeys(g.values.map(function(J) {
                  return S(J);
                }));
                m = b.filter(function(J) {
                  return !H.hasKey(t.values ? S(J) : J);
                }).concat(t.values ? y : y.map(function(J) {
                  return S(J);
                }));
                break;
              case "delete":
                var q = new jt().addKeys(g.keys);
                m = b.filter(function(J) {
                  return !q.hasKey(t.values ? S(J) : J);
                });
                break;
              case "deleteRange":
                var te = g.range;
                m = b.filter(function(J) {
                  return !pr(S(J), te);
                });
            }
            return m;
          }, e)) === e) ? e : (r.sort(function(b, g) {
            return Re(h(b), h(g)) || Re(S(b), S(g));
          }), t.limit && t.limit < 1 / 0 && (r.length > t.limit ? r.length = t.limit : e.length === t.limit && r.length < t.limit && (i.dirty = true)), a ? Object.freeze(r) : r);
        }
        function Yr(e, t) {
          return Re(e.lower, t.lower) === 0 && Re(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
        }
        function wi(e, t) {
          return ((n, r, i, a) => {
            if (n === void 0) return r !== void 0 ? -1 : 0;
            if (r === void 0) return 1;
            if ((n = Re(n, r)) === 0) {
              if (i && a) return 0;
              if (i) return 1;
              if (a) return -1;
            }
            return n;
          })(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= ((n, r, i, a) => {
            if (n === void 0) return r !== void 0 ? 1 : 0;
            if (r === void 0) return -1;
            if ((n = Re(n, r)) === 0) {
              if (i && a) return 0;
              if (i) return -1;
              if (a) return 1;
            }
            return n;
          })(e.upper, t.upper, e.upperOpen, t.upperOpen);
        }
        function _i(e, t, n, r) {
          e.subscribers.add(n), r.addEventListener("abort", function() {
            var i, a;
            e.subscribers.delete(n), e.subscribers.size === 0 && (i = e, a = t, setTimeout(function() {
              i.subscribers.size === 0 && lt(a, i);
            }, 3e3));
          });
        }
        var Oi = {
          stack: "dbcore",
          level: 0,
          name: "Cache",
          create: function(e) {
            var t = e.schema.name;
            return P(P({}, e), {
              transaction: function(n, r, i) {
                var a, u, l = e.transaction(n, r, i);
                return r === "readwrite" && (i = (a = new AbortController()).signal, l.addEventListener("abort", (u = function(d) {
                  return function() {
                    if (a.abort(), r === "readwrite") {
                      for (var S = /* @__PURE__ */ new Set(), v = 0, h = n; v < h.length; v++) {
                        var b = h[v], g = nn["idb://".concat(t, "/").concat(b)];
                        if (g) {
                          var m = e.table(b), y = g.optimisticOps.filter(function(ae) {
                            return ae.trans === l;
                          });
                          if (l._explicit && d && l.mutatedParts) for (var A = 0, T = Object.values(g.queries.query); A < T.length; A++) for (var O = 0, K = (H = T[A]).slice(); O < K.length; O++) or((q = K[O]).obsSet, l.mutatedParts) && (lt(H, q), q.subscribers.forEach(function(ae) {
                            return S.add(ae);
                          }));
                          else if (0 < y.length) {
                            g.optimisticOps = g.optimisticOps.filter(function(ae) {
                              return ae.trans !== l;
                            });
                            for (var U = 0, W = Object.values(g.queries.query); U < W.length; U++) for (var H, q, te, ee = 0, J = (H = W[U]).slice(); ee < J.length; ee++) (q = J[ee]).res != null && l.mutatedParts && (d && !q.dirty ? (te = Object.isFrozen(q.res), te = Vr(q.res, q.req, y, m, q, te), q.dirty ? (lt(H, q), q.subscribers.forEach(function(ae) {
                              return S.add(ae);
                            })) : te !== q.res && (q.res = te, q.promise = D.resolve({
                              result: te
                            }))) : (q.dirty && lt(H, q), q.subscribers.forEach(function(ae) {
                              return S.add(ae);
                            })));
                          }
                        }
                      }
                      S.forEach(function(ae) {
                        return ae();
                      });
                    }
                  };
                })(false), {
                  signal: i
                }), l.addEventListener("error", u(false), {
                  signal: i
                }), l.addEventListener("complete", u(true), {
                  signal: i
                })), l;
              },
              table: function(n) {
                var r = e.table(n), i = r.schema.primaryKey;
                return P(P({}, r), {
                  mutate: function(a) {
                    var u, l = C.trans;
                    return !i.outbound && l.db._options.cache !== "disabled" && !l.explicit && l.idbtrans.mode === "readwrite" && (u = nn["idb://".concat(t, "/").concat(n)]) ? (l = r.mutate(a), a.type !== "add" && a.type !== "put" || !(50 <= a.values.length || fr(i, a).some(function(d) {
                      return d == null;
                    })) ? (u.optimisticOps.push(a), a.mutatedParts && Bn(a.mutatedParts), l.then(function(d) {
                      0 < d.numFailures && (lt(u.optimisticOps, a), (d = $r(0, a, d)) && u.optimisticOps.push(d), a.mutatedParts) && Bn(a.mutatedParts);
                    }), l.catch(function() {
                      lt(u.optimisticOps, a), a.mutatedParts && Bn(a.mutatedParts);
                    })) : l.then(function(d) {
                      var S = $r(0, P(P({}, a), {
                        values: a.values.map(function(v, h) {
                          var b;
                          return d.failures[h] ? v : (we(b = (b = i.keyPath) != null && b.includes(".") ? xe(v) : P({}, v), i.keyPath, d.results[h]), b);
                        })
                      }), d);
                      u.optimisticOps.push(S), queueMicrotask(function() {
                        return a.mutatedParts && Bn(a.mutatedParts);
                      });
                    }), l) : r.mutate(a);
                  },
                  query: function(a) {
                    var u, l, d, S, v, h, b;
                    return qr(C, r) && Mr("query", a) ? (u = ((d = C.trans) == null ? void 0 : d.db._options.cache) === "immutable", l = (d = C).requery, d = d.signal, h = ((g, m, y, A) => {
                      var T = nn["idb://".concat(g, "/").concat(m)];
                      if (!T) return [];
                      if (!(g = T.queries[y])) return [
                        null,
                        false,
                        T,
                        null
                      ];
                      var O = g[(A.query ? A.query.index.name : null) || ""];
                      if (!O) return [
                        null,
                        false,
                        T,
                        null
                      ];
                      switch (y) {
                        case "query":
                          var K = O.find(function(U) {
                            return U.req.limit === A.limit && U.req.values === A.values && Yr(U.req.query.range, A.query.range);
                          });
                          return K ? [
                            K,
                            true,
                            T,
                            O
                          ] : [
                            O.find(function(U) {
                              return ("limit" in U.req ? U.req.limit : 1 / 0) >= A.limit && (!A.values || U.req.values) && wi(U.req.query.range, A.query.range);
                            }),
                            false,
                            T,
                            O
                          ];
                        case "count":
                          return K = O.find(function(U) {
                            return Yr(U.req.query.range, A.query.range);
                          }), [
                            K,
                            !!K,
                            T,
                            O
                          ];
                      }
                    })(t, n, "query", a), b = h[0], S = h[2], v = h[3], b && h[1] ? b.obsSet = a.obsSet : (h = r.query(a).then(function(g) {
                      var m = g.result;
                      if (b && (b.res = m), u) {
                        for (var y = 0, A = m.length; y < A; ++y) Object.freeze(m[y]);
                        Object.freeze(m);
                      } else g.result = xe(m);
                      return g;
                    }).catch(function(g) {
                      return v && b && lt(v, b), Promise.reject(g);
                    }), b = {
                      obsSet: a.obsSet,
                      promise: h,
                      subscribers: /* @__PURE__ */ new Set(),
                      type: "query",
                      req: a,
                      dirty: false
                    }, v ? v.push(b) : (v = [
                      b
                    ], (S = S || (nn["idb://".concat(t, "/").concat(n)] = {
                      queries: {
                        query: {},
                        count: {}
                      },
                      objs: /* @__PURE__ */ new Map(),
                      optimisticOps: [],
                      unsignaledParts: {}
                    })).queries.query[a.query.index.name || ""] = v)), _i(b, v, l, d), b.promise.then(function(g) {
                      return {
                        result: Vr(g.result, a, S == null ? void 0 : S.optimisticOps, r, b, u)
                      };
                    })) : r.query(a);
                  }
                });
              }
            });
          }
        };
        function Rn(e, t) {
          return new Proxy(e, {
            get: function(n, r, i) {
              return r === "db" ? t : Reflect.get(n, r, i);
            }
          });
        }
        ht.prototype.version = function(e) {
          if (isNaN(e) || e < 0.1) throw new E.Type("Given version is not a positive number");
          if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new E.Schema("Cannot add version when database is open");
          this.verno = Math.max(this.verno, e);
          var t = this._versions, n = t.filter(function(r) {
            return r._cfg.version === e;
          })[0];
          return n || (n = new this.Version(e), t.push(n), t.sort(fi), n.stores({}), this._state.autoSchema = false), n;
        }, ht.prototype._whenReady = function(e) {
          var t = this;
          return this.idbdb && (this._state.openComplete || C.letThrough || this._vip) ? e() : new D(function(n, r) {
            if (t._state.openComplete) return r(new E.DatabaseClosed(t._state.dbOpenError));
            if (!t._state.isBeingOpened) {
              if (!t._state.autoOpen) return void r(new E.DatabaseClosed());
              t.open().catch(oe);
            }
            t._state.dbReadyPromise.then(n, r);
          }).then(e);
        }, ht.prototype.use = function(i) {
          var t = i.stack, n = i.create, r = i.level, i = i.name, a = (i && this.unuse({
            stack: t,
            name: i
          }), this._middlewares[t] || (this._middlewares[t] = []));
          return a.push({
            stack: t,
            create: n,
            level: r ?? 10,
            name: i
          }), a.sort(function(u, l) {
            return u.level - l.level;
          }), this;
        }, ht.prototype.unuse = function(e) {
          var t = e.stack, n = e.name, r = e.create;
          return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(i) {
            return r ? i.create !== r : !!n && i.name !== n;
          })), this;
        }, ht.prototype.open = function() {
          var e = this;
          return $t(Y, function() {
            return di(e);
          });
        }, ht.prototype._close = function() {
          this.on.close.fire(new CustomEvent("close"));
          var e = this._state, t = Rt.indexOf(this);
          if (0 <= t && Rt.splice(t, 1), this.idbdb) {
            try {
              this.idbdb.close();
            } catch {
            }
            this.idbdb = null;
          }
          e.isBeingOpened || (e.dbReadyPromise = new D(function(n) {
            e.dbReadyResolve = n;
          }), e.openCanceller = new D(function(n, r) {
            e.cancelOpen = r;
          }));
        }, ht.prototype.close = function(t) {
          var t = (t === void 0 ? {
            disableAutoOpen: true
          } : t).disableAutoOpen, n = this._state;
          t ? (n.isBeingOpened && n.cancelOpen(new E.DatabaseClosed()), this._close(), n.autoOpen = false, n.dbOpenError = new E.DatabaseClosed()) : (this._close(), n.autoOpen = this._options.autoOpen || n.isBeingOpened, n.openComplete = false, n.dbOpenError = null);
        }, ht.prototype.delete = function(e) {
          var t = this, n = (e === void 0 && (e = {
            disableAutoOpen: true
          }), 0 < arguments.length && typeof arguments[0] != "object"), r = this._state;
          return new D(function(i, a) {
            function u() {
              t.close(e);
              var l = t._deps.indexedDB.deleteDatabase(t.name);
              l.onsuccess = X(function() {
                var d, S, v;
                d = t._deps, S = t.name, nr(v = d.indexedDB) || S === zt || tr(v, d.IDBKeyRange).delete(S).catch(oe), i();
              }), l.onerror = Jt(a), l.onblocked = t._fireOnBlocked;
            }
            if (n) throw new E.InvalidArgument("Invalid closeOptions argument to db.delete()");
            r.isBeingOpened ? r.dbReadyPromise.then(u) : u();
          });
        }, ht.prototype.backendDB = function() {
          return this.idbdb;
        }, ht.prototype.isOpen = function() {
          return this.idbdb !== null;
        }, ht.prototype.hasBeenClosed = function() {
          var e = this._state.dbOpenError;
          return e && e.name === "DatabaseClosed";
        }, ht.prototype.hasFailed = function() {
          return this._state.dbOpenError !== null;
        }, ht.prototype.dynamicallyOpened = function() {
          return this._state.autoSchema;
        }, Object.defineProperty(ht.prototype, "tables", {
          get: function() {
            var e = this;
            return w(this._allTables).map(function(t) {
              return e._allTables[t];
            });
          },
          enumerable: false,
          configurable: true
        }), ht.prototype.transaction = function() {
          var e = (function(t, n, r) {
            var i = arguments.length;
            if (i < 2) throw new E.InvalidArgument("Too few arguments");
            for (var a = new Array(i - 1); --i; ) a[i - 1] = arguments[i];
            return r = a.pop(), [
              t,
              f(a),
              r
            ];
          }).apply(this, arguments);
          return this._transaction.apply(this, e);
        }, ht.prototype._transaction = function(e, t, n) {
          var r, i, a = this, u = C.trans, l = (u && u.db === this && e.indexOf("!") === -1 || (u = null), e.indexOf("?") !== -1);
          e = e.replace("!", "").replace("?", "");
          try {
            if (i = t.map(function(S) {
              if (S = S instanceof a.Table ? S.name : S, typeof S != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
              return S;
            }), e == "r" || e === Vn) r = Vn;
            else {
              if (e != "rw" && e != Yn) throw new E.InvalidArgument("Invalid transaction mode: " + e);
              r = Yn;
            }
            if (u) {
              if (u.mode === Vn && r === Yn) {
                if (!l) throw new E.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
                u = null;
              }
              u && i.forEach(function(S) {
                if (u && u.storeNames.indexOf(S) === -1) {
                  if (!l) throw new E.SubTransaction("Table " + S + " not included in parent transaction.");
                  u = null;
                }
              }), l && u && !u.active && (u = null);
            }
          } catch (S) {
            return u ? u._promise(null, function(v, h) {
              h(S);
            }) : nt(S);
          }
          var d = (function S(v, h, b, g, m) {
            return D.resolve().then(function() {
              var O = C.transless || C, y = v._createTransaction(h, b, v._dbSchema, g), O = (y.explicit = true, {
                trans: y,
                transless: O
              });
              if (g) y.idbtrans = g.idbtrans;
              else try {
                y.create(), y.idbtrans._explicit = true, v._state.PR1398_maxLoop = 3;
              } catch (K) {
                return K.name === R.InvalidState && v.isOpen() && 0 < --v._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), v.close({
                  disableAutoOpen: false
                }), v.open().then(function() {
                  return S(v, h, b, null, m);
                })) : nt(K);
              }
              var A, T = He(m), O = (T && gt(), D.follow(function() {
                var K;
                (A = m.call(y, y)) && (T ? (K = Fe.bind(null, null), A.then(K, K)) : typeof A.next == "function" && typeof A.throw == "function" && (A = cr(A)));
              }, O));
              return (A && typeof A.then == "function" ? D.resolve(A).then(function(K) {
                return y.active ? K : nt(new E.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
              }) : O.then(function() {
                return A;
              })).then(function(K) {
                return g && y._resolve(), y._completion.then(function() {
                  return K;
                });
              }).catch(function(K) {
                return y._reject(K), nt(K);
              });
            });
          }).bind(null, this, r, i, u, n);
          return u ? u._promise(r, d, "lock") : C.trans ? $t(C.transless, function() {
            return a._whenReady(d);
          }) : this._whenReady(d);
        }, ht.prototype.table = function(e) {
          if (le(this._allTables, e)) return this._allTables[e];
          throw new E.InvalidTable("Table ".concat(e, " does not exist"));
        };
        var Wt = ht;
        function ht(e, t) {
          var n, r, i, a, u, l = this, d = (this._middlewares = {}, this.verno = 0, ht.dependencies), d = (this._options = t = P({
            addons: ht.addons,
            autoOpen: true,
            indexedDB: d.indexedDB,
            IDBKeyRange: d.IDBKeyRange,
            cache: "cloned"
          }, t), this._deps = {
            indexedDB: t.indexedDB,
            IDBKeyRange: t.IDBKeyRange
          }, t.addons), S = (this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this, {
            dbOpenError: null,
            isBeingOpened: false,
            onReadyBeingFired: null,
            openComplete: false,
            dbReadyResolve: oe,
            dbReadyPromise: null,
            cancelOpen: oe,
            openCanceller: null,
            autoSchema: true,
            PR1398_maxLoop: 3,
            autoOpen: t.autoOpen
          }), v = (S.dbReadyPromise = new D(function(h) {
            S.dbReadyResolve = h;
          }), S.openCanceller = new D(function(h, b) {
            S.cancelOpen = b;
          }), this._state = S, this.name = e, this.on = hn(this, "populate", "blocked", "versionchange", "close", {
            ready: [
              It,
              oe
            ]
          }), this.once = function(h, b) {
            var g = function() {
              for (var m = [], y = 0; y < arguments.length; y++) m[y] = arguments[y];
              l.on(h).unsubscribe(g), b.apply(l, m);
            };
            return l.on(h, g);
          }, this.on.ready.subscribe = ue(this.on.ready.subscribe, function(h) {
            return function(b, g) {
              ht.vip(function() {
                var m, y = l._state;
                y.openComplete ? (y.dbOpenError || D.resolve().then(b), g && h(b)) : y.onReadyBeingFired ? (y.onReadyBeingFired.push(b), g && h(b)) : (h(b), m = l, g || h(function A() {
                  m.on.ready.unsubscribe(b), m.on.ready.unsubscribe(A);
                }));
              });
            };
          }), this.Collection = (n = this, yn(ii.prototype, function(A, y) {
            this.db = n;
            var g = wr, m = null;
            if (y) try {
              g = y();
            } catch (O) {
              m = O;
            }
            var y = A._ctx, A = y.table, T = A.hook.reading.fire;
            this._ctx = {
              table: A,
              index: y.index,
              isPrimKey: !y.index || A.schema.primKey.keyPath && y.index === A.schema.primKey.name,
              range: g,
              keysOnly: false,
              dir: "next",
              unique: "",
              algorithm: null,
              filter: null,
              replayFilter: null,
              justLimit: true,
              isMatch: null,
              offset: 0,
              limit: 1 / 0,
              error: m,
              or: y.or,
              valueMapper: T !== Ee ? T : null
            };
          })), this.Table = (r = this, yn(Tr.prototype, function(h, b, g) {
            this.db = r, this._tx = g, this.name = h, this.schema = b, this.hook = r._allTables[h] ? r._allTables[h].hook : hn(null, {
              creating: [
                mt,
                oe
              ],
              reading: [
                Ce,
                Ee
              ],
              updating: [
                Ct,
                oe
              ],
              deleting: [
                kt,
                oe
              ]
            });
          })), this.Transaction = (i = this, yn(ui.prototype, function(h, b, g, m, y) {
            var A = this;
            h !== "readonly" && b.forEach(function(T) {
              T = (T = g[T]) == null ? void 0 : T.yProps, T && (b = b.concat(T.map(function(O) {
                return O.updatesTable;
              })));
            }), this.db = i, this.mode = h, this.storeNames = b, this.schema = g, this.chromeTransactionDurability = m, this.idbtrans = null, this.on = hn(this, "complete", "error", "abort"), this.parent = y || null, this.active = true, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new D(function(T, O) {
              A._resolve = T, A._reject = O;
            }), this._completion.then(function() {
              A.active = false, A.on.complete.fire();
            }, function(T) {
              var O = A.active;
              return A.active = false, A.on.error.fire(T), A.parent ? A.parent._reject(T) : O && A.idbtrans && A.idbtrans.abort(), nt(T);
            });
          })), this.Version = (a = this, yn(yi.prototype, function(h) {
            this.db = a, this._cfg = {
              version: h,
              storesSource: null,
              dbschema: {},
              tables: {},
              contentUpgrade: null
            };
          })), this.WhereClause = (u = this, yn(jr.prototype, function(h, b, g) {
            if (this.db = u, this._ctx = {
              table: h,
              index: b === ":id" ? null : b,
              or: g
            }, this._cmp = this._ascending = Re, this._descending = function(m, y) {
              return Re(y, m);
            }, this._max = function(m, y) {
              return 0 < Re(m, y) ? m : y;
            }, this._min = function(m, y) {
              return Re(m, y) < 0 ? m : y;
            }, this._IDBKeyRange = u._deps.IDBKeyRange, !this._IDBKeyRange) throw new E.MissingAPI();
          })), this.on("versionchange", function(h) {
            0 < h.newVersion ? console.warn("Another connection wants to upgrade database '".concat(l.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(l.name, "'. Closing db now to resume the delete request.")), l.close({
              disableAutoOpen: false
            });
          }), this.on("blocked", function(h) {
            !h.newVersion || h.newVersion < h.oldVersion ? console.warn("Dexie.delete('".concat(l.name, "') was blocked")) : console.warn("Upgrade '".concat(l.name, "' blocked by other connection holding version ").concat(h.oldVersion / 10));
          }), this._maxKey = mn(t.IDBKeyRange), this._createTransaction = function(h, b, g, m) {
            return new l.Transaction(h, b, g, l._options.chromeTransactionDurability, m);
          }, this._fireOnBlocked = function(h) {
            l.on("blocked").fire(h), Rt.filter(function(b) {
              return b.name === l.name && b !== l && !b._state.vcFired;
            }).map(function(b) {
              return b.on("versionchange").fire(h);
            });
          }, this.use(bi), this.use(Oi), this.use(gi), this.use(vi), this.use(mi), new Proxy(this, {
            get: function(h, b, g) {
              var m;
              return b === "_vip" || (b === "table" ? function(y) {
                return Rn(l.table(y), v);
              } : (m = Reflect.get(h, b, g)) instanceof Tr ? Rn(m, v) : b === "tables" ? m.map(function(y) {
                return Rn(y, v);
              }) : b === "_createTransaction" ? function() {
                return Rn(m.apply(this, arguments), v);
              } : m);
            }
          }));
          this.vip = v, d.forEach(function(h) {
            return h(l);
          });
        }
        var Dn, cn = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Si = (hr.prototype.subscribe = function(e, t, n) {
          return this._subscribe(e && typeof e != "function" ? e : {
            next: e,
            error: t,
            complete: n
          });
        }, hr.prototype[cn] = function() {
          return this;
        }, hr);
        function hr(e) {
          this._subscribe = e;
        }
        try {
          Dn = {
            indexedDB: N.indexedDB || N.mozIndexedDB || N.webkitIndexedDB || N.msIndexedDB,
            IDBKeyRange: N.IDBKeyRange || N.webkitIDBKeyRange
          };
        } catch {
          Dn = {
            indexedDB: null,
            IDBKeyRange: null
          };
        }
        function Jr(e) {
          var t, n = false, r = new Si(function(i) {
            var a = He(e), u, l = false, d = {}, S = {}, v = {
              get closed() {
                return l;
              },
              unsubscribe: function() {
                l || (l = true, u && u.abort(), h && Qt.storagemutated.unsubscribe(g));
              }
            }, h = (i.start && i.start(v), false), b = function() {
              return Yt(m);
            }, g = function(y) {
              In(d, y), or(S, d) && b();
            }, m = function() {
              var y, A, T;
              !l && Dn.indexedDB && (d = {}, y = {}, u && u.abort(), u = new AbortController(), T = ((O) => {
                var K = at();
                try {
                  a && gt();
                  var U = je(e, O);
                  return U = a ? U.finally(Fe) : U;
                } finally {
                  K && ne();
                }
              })(A = {
                subscr: y,
                signal: u.signal,
                requery: b,
                querier: e,
                trans: null
              }), Promise.resolve(T).then(function(O) {
                n = true, t = O, l || A.signal.aborted || (d = {}, ((K) => {
                  for (var U in K) if (le(K, U)) return;
                  return 1;
                })(S = y) || h || (Qt(vn, g), h = true), Yt(function() {
                  return !l && i.next && i.next(O);
                }));
              }, function(O) {
                n = false, [
                  "DatabaseClosedError",
                  "AbortError"
                ].includes(O == null ? void 0 : O.name) || l || Yt(function() {
                  l || i.error && i.error(O);
                });
              }));
            };
            return setTimeout(b, 0), v;
          });
          return r.hasValue = function() {
            return n;
          }, r.getValue = function() {
            return t;
          }, r;
        }
        var rn = Wt;
        function yr(e) {
          var t = Xt;
          try {
            Xt = true, Qt.storagemutated.fire(e), sr(e, true);
          } finally {
            Xt = t;
          }
        }
        qe(rn, P(P({}, it), {
          delete: function(e) {
            return new rn(e, {
              addons: []
            }).delete();
          },
          exists: function(e) {
            return new rn(e, {
              addons: []
            }).open().then(function(t) {
              return t.close(), true;
            }).catch("NoSuchDatabaseError", function() {
              return false;
            });
          },
          getDatabaseNames: function(e) {
            try {
              return t = rn.dependencies, n = t.indexedDB, t = t.IDBKeyRange, (nr(n) ? Promise.resolve(n.databases()).then(function(r) {
                return r.map(function(i) {
                  return i.name;
                }).filter(function(i) {
                  return i !== zt;
                });
              }) : tr(n, t).toCollection().primaryKeys()).then(e);
            } catch {
              return nt(new E.MissingAPI());
            }
            var t, n;
          },
          defineClass: function() {
            return function(e) {
              ce(this, e);
            };
          },
          ignoreTransaction: function(e) {
            return C.trans ? $t(C.transless, e) : e();
          },
          vip: rr,
          async: function(e) {
            return function() {
              try {
                var t = cr(e.apply(this, arguments));
                return t && typeof t.then == "function" ? t : D.resolve(t);
              } catch (n) {
                return nt(n);
              }
            };
          },
          spawn: function(e, t, n) {
            try {
              var r = cr(e.apply(n, t || []));
              return r && typeof r.then == "function" ? r : D.resolve(r);
            } catch (i) {
              return nt(i);
            }
          },
          currentTransaction: {
            get: function() {
              return C.trans || null;
            }
          },
          waitFor: function(e, t) {
            return e = D.resolve(typeof e == "function" ? rn.ignoreTransaction(e) : e).timeout(t || 6e4), C.trans ? C.trans.waitFor(e) : e;
          },
          Promise: D,
          debug: {
            get: function() {
              return yt;
            },
            set: function(e) {
              Pt(e);
            }
          },
          derive: ge,
          extend: ce,
          props: qe,
          override: ue,
          Events: hn,
          on: Qt,
          liveQuery: Jr,
          extendObservabilitySet: In,
          getByKeyPath: Te,
          setByKeyPath: we,
          delByKeyPath: function(e, t) {
            typeof t == "string" ? we(e, t, void 0) : "length" in t && [].map.call(t, function(n) {
              we(e, n, void 0);
            });
          },
          shallowClone: _t,
          deepClone: xe,
          getObjectDiff: lr,
          cmp: Re,
          asap: me,
          minKey: -1 / 0,
          addons: [],
          connections: Rt,
          errnames: R,
          dependencies: Dn,
          cache: nn,
          semVer: "4.3.0",
          version: "4.3.0".split(".").map(function(e) {
            return parseInt(e);
          }).reduce(function(e, t, n) {
            return e + t / Math.pow(10, 2 * n);
          })
        })), rn.maxKey = mn(rn.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Qt(vn, function(e) {
          Xt || (e = new CustomEvent(zn, {
            detail: e
          }), Xt = true, dispatchEvent(e), Xt = false);
        }), addEventListener(zn, function(e) {
          e = e.detail, Xt || yr(e);
        }));
        var ln, Xt = false, Gr = function() {
        };
        return typeof BroadcastChannel < "u" && ((Gr = function() {
          (ln = new BroadcastChannel(zn)).onmessage = function(e) {
            return e.data && yr(e.data);
          };
        })(), typeof ln.unref == "function" && ln.unref(), Qt(vn, function(e) {
          Xt || ln.postMessage(e);
        })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
          if (!Wt.disableBfCache && e.persisted) {
            yt && console.debug("Dexie: handling persisted pagehide"), ln == null ? void 0 : ln.close();
            for (var t = 0, n = Rt; t < n.length; t++) n[t].close({
              disableAutoOpen: false
            });
          }
        }), addEventListener("pageshow", function(e) {
          !Wt.disableBfCache && e.persisted && (yt && console.debug("Dexie: handling persisted pageshow"), Gr(), yr({
            all: new jt(-1 / 0, [
              []
            ])
          }));
        })), D.rejectionMapper = function(e, t) {
          return !e || e instanceof ve || e instanceof TypeError || e instanceof SyntaxError || !e.name || !Q[e.name] ? e : (t = new Q[e.name](t || e.message, e), "stack" in e && be(t, "stack", {
            get: function() {
              return this.inner.stack;
            }
          }), t);
        }, Pt(yt), P(Wt, Object.freeze({
          __proto__: null,
          Dexie: Wt,
          Entity: _r,
          PropModification: pn,
          RangeSet: jt,
          add: function(e) {
            return new pn({
              add: e
            });
          },
          cmp: Re,
          default: Wt,
          liveQuery: Jr,
          mergeRanges: wn,
          rangesOverlap: Rr,
          remove: function(e) {
            return new pn({
              remove: e
            });
          },
          replacePrefix: function(e, t) {
            return new pn({
              replacePrefix: [
                e,
                t
              ]
            });
          }
        }), {
          default: Wt
        }), Wt;
      });
    })(Ln)), Ln.exports;
  }
  var Pi = ki();
  const vr = Ti(Pi), Wr = /* @__PURE__ */ Symbol.for("Dexie"), xt = globalThis[Wr] || (globalThis[Wr] = vr);
  if (vr.semVer !== xt.semVer) throw new Error(`Two different versions of Dexie loaded in the same app: ${vr.semVer} and ${xt.semVer}`);
  const { liveQuery: Gi, mergeRanges: zi, rangesOverlap: Wi, RangeSet: Hi, cmp: Qi, Entity: Xi, PropModification: Zi, replacePrefix: eo, add: to, remove: no, DexieYProvider: ro } = xt;
  var Hr = {};
  var qn = function() {
    return qn = Object.assign || function(L) {
      for (var k, P = 1, V = arguments.length; P < V; P++) {
        k = arguments[P];
        for (var N in k) Object.prototype.hasOwnProperty.call(k, N) && (L[N] = k[N]);
      }
      return L;
    }, qn.apply(this, arguments);
  };
  function Zt($, L, k, P) {
    function V(N) {
      return N instanceof k ? N : new k(function(w) {
        w(N);
      });
    }
    return new (k || (k = Promise))(function(N, w) {
      function G(ie) {
        try {
          x(P.next(ie));
        } catch (le) {
          w(le);
        }
      }
      function ce(ie) {
        try {
          x(P.throw(ie));
        } catch (le) {
          w(le);
        }
      }
      function x(ie) {
        ie.done ? N(ie.value) : V(ie.value).then(G, ce);
      }
      x((P = P.apply($, [])).next());
    });
  }
  function Vt($, L) {
    var k = {
      label: 0,
      sent: function() {
        if (N[0] & 1) throw N[1];
        return N[1];
      },
      trys: [],
      ops: []
    }, P, V, N, w;
    return w = {
      next: G(0),
      throw: G(1),
      return: G(2)
    }, typeof Symbol == "function" && (w[Symbol.iterator] = function() {
      return this;
    }), w;
    function G(x) {
      return function(ie) {
        return ce([
          x,
          ie
        ]);
      };
    }
    function ce(x) {
      if (P) throw new TypeError("Generator is already executing.");
      for (; k; ) try {
        if (P = 1, V && (N = x[0] & 2 ? V.return : x[0] ? V.throw || ((N = V.return) && N.call(V), 0) : V.next) && !(N = N.call(V, x[1])).done) return N;
        switch (V = 0, N && (x = [
          x[0] & 2,
          N.value
        ]), x[0]) {
          case 0:
          case 1:
            N = x;
            break;
          case 4:
            return k.label++, {
              value: x[1],
              done: false
            };
          case 5:
            k.label++, V = x[1], x = [
              0
            ];
            continue;
          case 7:
            x = k.ops.pop(), k.trys.pop();
            continue;
          default:
            if (N = k.trys, !(N = N.length > 0 && N[N.length - 1]) && (x[0] === 6 || x[0] === 2)) {
              k = 0;
              continue;
            }
            if (x[0] === 3 && (!N || x[1] > N[0] && x[1] < N[3])) {
              k.label = x[1];
              break;
            }
            if (x[0] === 6 && k.label < N[1]) {
              k.label = N[1], N = x;
              break;
            }
            if (N && k.label < N[2]) {
              k.label = N[2], k.ops.push(x);
              break;
            }
            N[2] && k.ops.pop(), k.trys.pop();
            continue;
        }
        x = L.call($, k);
      } catch (ie) {
        x = [
          6,
          ie
        ], V = 0;
      } finally {
        P = N = 0;
      }
      if (x[0] & 5) throw x[1];
      return {
        value: x[0] ? x[1] : void 0,
        done: true
      };
    }
  }
  function Ni($) {
    var L = [
      $.schema.primKey
    ].concat($.schema.indexes);
    return L.map(function(k) {
      return k.src;
    }).join(",");
  }
  function ji($) {
    for (var L = {}, k = 0, P = $.tables; k < P.length; k++) {
      var V = P[k];
      L[V.name] = V.schema;
    }
    return L;
  }
  function Qr($, L) {
    return new Promise(function(k, P) {
      var V = new FileReader();
      V.onabort = function(N) {
        return P(new Error("file read aborted"));
      }, V.onerror = function(N) {
        return P(N.target.error);
      }, V.onload = function(N) {
        return k(N.target.result);
      }, L === "binary" ? V.readAsArrayBuffer($) : V.readAsText($);
    });
  }
  function Xr($, L) {
    if (typeof FileReaderSync > "u") throw new Error("FileReaderSync missing. Reading blobs synchronously requires code to run from within a web worker. Use TSON.encapsulateAsync() to do it from the main thread.");
    var k = new FileReaderSync(), P = L === "binary" ? k.readAsArrayBuffer($) : k.readAsText($);
    return P;
  }
  var mr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  function gr($, L) {
    return L = {
      exports: {}
    }, $(L, L.exports), L.exports;
  }
  var $n = gr(function($, L) {
    (function(k, P) {
      $.exports = P();
    })(mr, (function() {
      function k(I) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? k = function(R) {
          return typeof R;
        } : k = function(R) {
          return R && typeof Symbol == "function" && R.constructor === Symbol && R !== Symbol.prototype ? "symbol" : typeof R;
        }, k(I);
      }
      function P(I, R, F, E, Q, oe, Ee) {
        try {
          var Ce = I[oe](Ee), fe = Ce.value;
        } catch (mt) {
          F(mt);
          return;
        }
        Ce.done ? R(fe) : Promise.resolve(fe).then(E, Q);
      }
      function V(I) {
        return function() {
          var R = this, F = arguments;
          return new Promise(function(E, Q) {
            var oe = I.apply(R, F);
            function Ee(fe) {
              P(oe, E, Q, Ee, Ce, "next", fe);
            }
            function Ce(fe) {
              P(oe, E, Q, Ee, Ce, "throw", fe);
            }
            Ee(void 0);
          });
        };
      }
      function N(I, R) {
        if (!(I instanceof R)) throw new TypeError("Cannot call a class as a function");
      }
      function w(I, R) {
        for (var F = 0; F < R.length; F++) {
          var E = R[F];
          E.enumerable = E.enumerable || false, E.configurable = true, "value" in E && (E.writable = true), Object.defineProperty(I, E.key, E);
        }
      }
      function G(I, R, F) {
        return R && w(I.prototype, R), I;
      }
      function ce(I, R, F) {
        return R in I ? Object.defineProperty(I, R, {
          value: F,
          enumerable: true,
          configurable: true,
          writable: true
        }) : I[R] = F, I;
      }
      function x(I, R) {
        var F = Object.keys(I);
        if (Object.getOwnPropertySymbols) {
          var E = Object.getOwnPropertySymbols(I);
          R && (E = E.filter(function(Q) {
            return Object.getOwnPropertyDescriptor(I, Q).enumerable;
          })), F.push.apply(F, E);
        }
        return F;
      }
      function ie(I) {
        for (var R = 1; R < arguments.length; R++) {
          var F = arguments[R] != null ? arguments[R] : {};
          R % 2 ? x(Object(F), true).forEach(function(E) {
            ce(I, E, F[E]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(I, Object.getOwnPropertyDescriptors(F)) : x(Object(F)).forEach(function(E) {
            Object.defineProperty(I, E, Object.getOwnPropertyDescriptor(F, E));
          });
        }
        return I;
      }
      function le(I, R) {
        return be(I) || Me(I, R) || Xe();
      }
      function qe(I) {
        return Qe(I) || ge(I) || wt();
      }
      function Qe(I) {
        if (Array.isArray(I)) {
          for (var R = 0, F = new Array(I.length); R < I.length; R++) F[R] = I[R];
          return F;
        }
      }
      function be(I) {
        if (Array.isArray(I)) return I;
      }
      function ge(I) {
        if (Symbol.iterator in Object(I) || Object.prototype.toString.call(I) === "[object Arguments]") return Array.from(I);
      }
      function Me(I, R) {
        if (Symbol.iterator in Object(I) || Object.prototype.toString.call(I) === "[object Arguments]") {
          var F = [], E = true, Q = false, oe = void 0;
          try {
            for (var Ee = I[Symbol.iterator](), Ce; !(E = (Ce = Ee.next()).done) && (F.push(Ce.value), !(R && F.length === R)); E = true) ;
          } catch (fe) {
            Q = true, oe = fe;
          } finally {
            try {
              !E && Ee.return != null && Ee.return();
            } finally {
              if (Q) throw oe;
            }
          }
          return F;
        }
      }
      function wt() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }
      function Xe() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
      var ue = function I(R) {
        N(this, I), this.p = new Promise(R);
      };
      ue.__typeson__type__ = "TypesonPromise", typeof Symbol < "u" && (ue.prototype[Symbol.toStringTag] = "TypesonPromise"), ue.prototype.then = function(I, R) {
        var F = this;
        return new ue(function(E, Q) {
          F.p.then(function(oe) {
            E(I ? I(oe) : oe);
          }).catch(function(oe) {
            return R ? R(oe) : Promise.reject(oe);
          }).then(E, Q);
        });
      }, ue.prototype.catch = function(I) {
        return this.then(null, I);
      }, ue.resolve = function(I) {
        return new ue(function(R) {
          R(I);
        });
      }, ue.reject = function(I) {
        return new ue(function(R, F) {
          F(I);
        });
      }, [
        "all",
        "race"
      ].forEach(function(I) {
        ue[I] = function(R) {
          return new ue(function(F, E) {
            Promise[I](R.map(function(Q) {
              return Q && Q.constructor && Q.constructor.__typeson__type__ === "TypesonPromise" ? Q.p : Q;
            })).then(F, E);
          });
        };
      });
      var pt = {}, me = pt.toString, Te = {}.hasOwnProperty, we = Object.getPrototypeOf, _t = Te.toString;
      function j(I, R) {
        return Se(I) && typeof I.then == "function" && (!R || typeof I.catch == "function");
      }
      function f(I) {
        return me.call(I).slice(8, -1);
      }
      function M(I, R) {
        if (!I || k(I) !== "object") return false;
        var F = we(I);
        if (!F) return R === null;
        var E = Te.call(F, "constructor") && F.constructor;
        return typeof E != "function" ? R === null : R === E || R !== null && _t.call(E) === _t.call(R) || typeof R == "function" && typeof E.__typeson__type__ == "string" && E.__typeson__type__ === R.__typeson__type__;
      }
      function B(I) {
        if (!I || f(I) !== "Object") return false;
        var R = we(I);
        return R ? M(I, Object) : true;
      }
      function xe(I) {
        if (!I || f(I) !== "Object") return false;
        var R = we(I);
        return R ? M(I, Object) || xe(R) : true;
      }
      function Se(I) {
        return I && k(I) === "object";
      }
      function Ue(I) {
        return I.replace(/~/g, "~0").replace(/\./g, "~1");
      }
      function Ge(I) {
        return I.replace(/~1/g, ".").replace(/~0/g, "~");
      }
      function ct(I, R) {
        if (R === "") return I;
        var F = R.indexOf(".");
        if (F > -1) {
          var E = I[Ge(R.slice(0, F))];
          return E === void 0 ? void 0 : ct(E, R.slice(F + 1));
        }
        return I[Ge(R)];
      }
      function lt(I, R, F) {
        if (R === "") return F;
        var E = R.indexOf(".");
        if (E > -1) {
          var Q = I[Ge(R.slice(0, E))];
          return lt(Q, R.slice(E + 1), F);
        }
        return I[Ge(R)] = F, I;
      }
      function ut(I) {
        return I === null ? "null" : Array.isArray(I) ? "array" : k(I);
      }
      var Ne = Object.keys, He = Array.isArray, it = {}.hasOwnProperty, Dt = [
        "type",
        "replaced",
        "iterateIn",
        "iterateUnsetNumeric"
      ];
      function ve(I, R) {
        if (I.keypath === "") return -1;
        var F = I.keypath.match(/\./g) || 0, E = R.keypath.match(/\./g) || 0;
        return F && (F = F.length), E && (E = E.length), F > E ? -1 : F < E ? 1 : I.keypath < R.keypath ? -1 : I.keypath > R.keypath;
      }
      var ze = (function() {
        function I(R) {
          N(this, I), this.options = R, this.plainObjectReplacers = [], this.nonplainObjectReplacers = [], this.revivers = {}, this.types = {};
        }
        return G(I, [
          {
            key: "stringify",
            value: function(F, E, Q, oe) {
              oe = ie({}, this.options, {}, oe, {
                stringification: true
              });
              var Ee = this.encapsulate(F, null, oe);
              return He(Ee) ? JSON.stringify(Ee[0], E, Q) : Ee.then(function(Ce) {
                return JSON.stringify(Ce, E, Q);
              });
            }
          },
          {
            key: "stringifySync",
            value: function(F, E, Q, oe) {
              return this.stringify(F, E, Q, ie({
                throwOnBadSyncType: true
              }, oe, {
                sync: true
              }));
            }
          },
          {
            key: "stringifyAsync",
            value: function(F, E, Q, oe) {
              return this.stringify(F, E, Q, ie({
                throwOnBadSyncType: true
              }, oe, {
                sync: false
              }));
            }
          },
          {
            key: "parse",
            value: function(F, E, Q) {
              return Q = ie({}, this.options, {}, Q, {
                parse: true
              }), this.revive(JSON.parse(F, E), Q);
            }
          },
          {
            key: "parseSync",
            value: function(F, E, Q) {
              return this.parse(F, E, ie({
                throwOnBadSyncType: true
              }, Q, {
                sync: true
              }));
            }
          },
          {
            key: "parseAsync",
            value: function(F, E, Q) {
              return this.parse(F, E, ie({
                throwOnBadSyncType: true
              }, Q, {
                sync: false
              }));
            }
          },
          {
            key: "specialTypeNames",
            value: function(F, E) {
              var Q = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
              return Q.returnTypeNames = true, this.encapsulate(F, E, Q);
            }
          },
          {
            key: "rootTypeName",
            value: function(F, E) {
              var Q = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
              return Q.iterateNone = true, this.encapsulate(F, E, Q);
            }
          },
          {
            key: "encapsulate",
            value: function(F, E, Q) {
              Q = ie({
                sync: true
              }, this.options, {}, Q);
              var oe = Q, Ee = oe.sync, Ce = this, fe = {}, mt = [], kt = [], Ct = [], Ft = "cyclic" in Q ? Q.cyclic : true, It = Q, yt = It.encapsulateObserver, Pt = Ie("", F, Ft, E || {}, Ct);
              function At(se) {
                var c = Object.values(fe);
                if (Q.iterateNone) return c.length ? c[0] : I.getJSONType(se);
                if (c.length) {
                  if (Q.returnTypeNames) return qe(new Set(c));
                  !se || !B(se) || it.call(se, "$types") ? se = {
                    $: se,
                    $types: {
                      $: fe
                    }
                  } : se.$types = fe;
                } else Se(se) && it.call(se, "$types") && (se = {
                  $: se,
                  $types: true
                });
                return Q.returnTypeNames ? false : se;
              }
              function ot(se, c) {
                return De.apply(this, arguments);
              }
              function De() {
                return De = V(regeneratorRuntime.mark(function se(c, o) {
                  var s;
                  return regeneratorRuntime.wrap(function(_) {
                    for (; ; ) switch (_.prev = _.next) {
                      case 0:
                        return _.next = 2, Promise.all(o.map(function(Y) {
                          return Y[1].p;
                        }));
                      case 2:
                        return s = _.sent, _.next = 5, Promise.all(s.map((function() {
                          var Y = V(regeneratorRuntime.mark(function C(pe) {
                            var Z, ye, D, Ae, $e, Be, Ke, Je, We, Oe, at, ne, z, he;
                            return regeneratorRuntime.wrap(function(re) {
                              for (; ; ) switch (re.prev = re.next) {
                                case 0:
                                  if (Z = [], ye = o.splice(0, 1), D = le(ye, 1), Ae = D[0], $e = le(Ae, 7), Be = $e[0], Ke = $e[2], Je = $e[3], We = $e[4], Oe = $e[5], at = $e[6], ne = Ie(Be, pe, Ke, Je, Z, true, at), z = M(ne, ue), !(Be && z)) {
                                    re.next = 11;
                                    break;
                                  }
                                  return re.next = 8, ne.p;
                                case 8:
                                  return he = re.sent, We[Oe] = he, re.abrupt("return", ot(c, Z));
                                case 11:
                                  return Be ? We[Oe] = ne : z ? c = ne.p : c = ne, re.abrupt("return", ot(c, Z));
                                case 13:
                                case "end":
                                  return re.stop();
                              }
                            }, C);
                          }));
                          return function(C) {
                            return Y.apply(this, arguments);
                          };
                        })()));
                      case 5:
                        return _.abrupt("return", c);
                      case 6:
                      case "end":
                        return _.stop();
                    }
                  }, se);
                })), De.apply(this, arguments);
              }
              function _e(se, c, o) {
                Object.assign(se, c);
                var s = Dt.map(function(p) {
                  var _ = se[p];
                  return delete se[p], _;
                });
                o(), Dt.forEach(function(p, _) {
                  se[p] = s[_];
                });
              }
              function Ie(se, c, o, s, p, _, Y) {
                var C, pe = {}, Z = k(c), ye = yt ? function(z) {
                  var he = Y || s.type || I.getJSONType(c);
                  yt(Object.assign(z || pe, {
                    keypath: se,
                    value: c,
                    cyclic: o,
                    stateObj: s,
                    promisesData: p,
                    resolvingTypesonPromise: _,
                    awaitingTypesonPromise: M(c, ue)
                  }, {
                    type: he
                  }));
                } : null;
                if ([
                  "string",
                  "boolean",
                  "number",
                  "undefined"
                ].includes(Z)) return c === void 0 || Z === "number" && (isNaN(c) || c === -1 / 0 || c === 1 / 0) ? (s.replaced ? C = c : C = tt(se, c, s, p, false, _, ye), C !== c && (pe = {
                  replaced: C
                })) : C = c, ye && ye(), C;
                if (c === null) return ye && ye(), c;
                if (o && !s.iterateIn && !s.iterateUnsetNumeric && c && k(c) === "object") {
                  var D = mt.indexOf(c);
                  if (D < 0) o === true && (mt.push(c), kt.push(se));
                  else return fe[se] = "#", ye && ye({
                    cyclicKeypath: kt[D]
                  }), "#" + kt[D];
                }
                var Ae = B(c), $e = He(c), Be = (Ae || $e) && (!Ce.plainObjectReplacers.length || s.replaced) || s.iterateIn ? c : tt(se, c, s, p, Ae || $e, null, ye), Ke;
                if (Be !== c ? (C = Be, pe = {
                  replaced: Be
                }) : se === "" && M(c, ue) ? (p.push([
                  se,
                  c,
                  o,
                  s,
                  void 0,
                  void 0,
                  s.type
                ]), C = c) : $e && s.iterateIn !== "object" || s.iterateIn === "array" ? (Ke = new Array(c.length), pe = {
                  clone: Ke
                }) : ![
                  "function",
                  "symbol"
                ].includes(k(c)) && !("toJSON" in c) && !M(c, ue) && !M(c, Promise) && !M(c, ArrayBuffer) || Ae || s.iterateIn === "object" ? (Ke = {}, s.addLength && (Ke.length = c.length), pe = {
                  clone: Ke
                }) : C = c, ye && ye(), Q.iterateNone) return Ke || C;
                if (!Ke) return C;
                if (s.iterateIn) {
                  var Je = function(he) {
                    var X = {
                      ownKeys: it.call(c, he)
                    };
                    _e(s, X, function() {
                      var re = se + (se ? "." : "") + Ue(he), Pe = Ie(re, c[he], !!o, s, p, _);
                      M(Pe, ue) ? p.push([
                        re,
                        Pe,
                        !!o,
                        s,
                        Ke,
                        he,
                        s.type
                      ]) : Pe !== void 0 && (Ke[he] = Pe);
                    });
                  };
                  for (var We in c) Je(We);
                  ye && ye({
                    endIterateIn: true,
                    end: true
                  });
                } else Ne(c).forEach(function(z) {
                  var he = se + (se ? "." : "") + Ue(z), X = {
                    ownKeys: true
                  };
                  _e(s, X, function() {
                    var re = Ie(he, c[z], !!o, s, p, _);
                    M(re, ue) ? p.push([
                      he,
                      re,
                      !!o,
                      s,
                      Ke,
                      z,
                      s.type
                    ]) : re !== void 0 && (Ke[z] = re);
                  });
                }), ye && ye({
                  endIterateOwn: true,
                  end: true
                });
                if (s.iterateUnsetNumeric) {
                  for (var Oe = c.length, at = function(he) {
                    if (!(he in c)) {
                      var X = se + (se ? "." : "") + he, re = {
                        ownKeys: false
                      };
                      _e(s, re, function() {
                        var Pe = Ie(X, void 0, !!o, s, p, _);
                        M(Pe, ue) ? p.push([
                          X,
                          Pe,
                          !!o,
                          s,
                          Ke,
                          he,
                          s.type
                        ]) : Pe !== void 0 && (Ke[he] = Pe);
                      });
                    }
                  }, ne = 0; ne < Oe; ne++) at(ne);
                  ye && ye({
                    endIterateUnsetNumeric: true,
                    end: true
                  });
                }
                return Ke;
              }
              function tt(se, c, o, s, p, _, Y) {
                for (var C = p ? Ce.plainObjectReplacers : Ce.nonplainObjectReplacers, pe = C.length; pe--; ) {
                  var Z = C[pe];
                  if (Z.test(c, o)) {
                    var ye = Z.type;
                    if (Ce.revivers[ye]) {
                      var D = fe[se];
                      fe[se] = D ? [
                        ye
                      ].concat(D) : ye;
                    }
                    if (Object.assign(o, {
                      type: ye,
                      replaced: true
                    }), (Ee || !Z.replaceAsync) && !Z.replace) return Y && Y({
                      typeDetected: true
                    }), Ie(se, c, Ft && "readonly", o, s, _, ye);
                    Y && Y({
                      replacing: true
                    });
                    var Ae = Ee || !Z.replaceAsync ? "replace" : "replaceAsync";
                    return Ie(se, Z[Ae](c, o), Ft && "readonly", o, s, _, ye);
                  }
                }
                return c;
              }
              return Ct.length ? Ee && Q.throwOnBadSyncType ? (function() {
                throw new TypeError("Sync method requested but async result obtained");
              })() : Promise.resolve(ot(Pt, Ct)).then(At) : !Ee && Q.throwOnBadSyncType ? (function() {
                throw new TypeError("Async method requested but sync result obtained");
              })() : Q.stringification && Ee ? [
                At(Pt)
              ] : Ee ? At(Pt) : Promise.resolve(At(Pt));
            }
          },
          {
            key: "encapsulateSync",
            value: function(F, E, Q) {
              return this.encapsulate(F, E, ie({
                throwOnBadSyncType: true
              }, Q, {
                sync: true
              }));
            }
          },
          {
            key: "encapsulateAsync",
            value: function(F, E, Q) {
              return this.encapsulate(F, E, ie({
                throwOnBadSyncType: true
              }, Q, {
                sync: false
              }));
            }
          },
          {
            key: "revive",
            value: function(F, E) {
              var Q = F && F.$types;
              if (!Q) return F;
              if (Q === true) return F.$;
              E = ie({
                sync: true
              }, this.options, {}, E);
              var oe = E, Ee = oe.sync, Ce = [], fe = {}, mt = true;
              Q.$ && B(Q.$) && (F = F.$, Q = Q.$, mt = false);
              var kt = this;
              function Ct(De, _e) {
                var Ie = kt.revivers[De] || [], tt = le(Ie, 1), se = tt[0];
                if (!se) throw new Error("Unregistered type: " + De);
                return Ee && !("revive" in se) ? _e : se[Ee && se.revive ? "revive" : !Ee && se.reviveAsync ? "reviveAsync" : "revive"](_e, fe);
              }
              function Ft() {
                var De = [];
                if (Object.entries(Q).forEach(function(_e) {
                  var Ie = le(_e, 2), tt = Ie[0], se = Ie[1];
                  se !== "#" && [].concat(se).forEach(function(c) {
                    var o = kt.revivers[c] || [
                      null,
                      {}
                    ], s = le(o, 2), p = s[1].plain;
                    p && (De.push({
                      keypath: tt,
                      type: c
                    }), delete Q[tt]);
                  });
                }), !!De.length) return De.sort(ve).reduce(function _e(Ie, tt) {
                  var se = tt.keypath, c = tt.type;
                  if (j(Ie)) return Ie.then(function(p) {
                    return _e(p, {
                      keypath: se,
                      type: c
                    });
                  });
                  var o = ct(F, se);
                  if (o = Ct(c, o), M(o, ue)) return o.then(function(p) {
                    var _ = lt(F, se, p);
                    _ === p && (F = _);
                  });
                  var s = lt(F, se, o);
                  s === o && (F = s);
                }, void 0);
              }
              var It = [];
              function yt(De, _e, Ie, tt, se) {
                if (!(mt && De === "$types")) {
                  var c = Q[De], o = He(_e);
                  if (o || B(_e)) {
                    var s = o ? new Array(_e.length) : {};
                    for (Ne(_e).forEach(function(D) {
                      var Ae = yt(De + (De ? "." : "") + Ue(D), _e[D], Ie || s, s, D), $e = function(Ke) {
                        return M(Ke, vt) ? s[D] = void 0 : Ke !== void 0 && (s[D] = Ke), Ke;
                      };
                      M(Ae, ue) ? It.push(Ae.then(function(Be) {
                        return $e(Be);
                      })) : $e(Ae);
                    }), _e = s; Ce.length; ) {
                      var p = le(Ce[0], 4), _ = p[0], Y = p[1], C = p[2], pe = p[3], Z = ct(_, Y);
                      if (Z !== void 0) C[pe] = Z;
                      else break;
                      Ce.splice(0, 1);
                    }
                  }
                  if (!c) return _e;
                  if (c === "#") {
                    var ye = ct(Ie, _e.slice(1));
                    return ye === void 0 && Ce.push([
                      Ie,
                      _e.slice(1),
                      tt,
                      se
                    ]), ye;
                  }
                  return [].concat(c).reduce(function D(Ae, $e) {
                    return M(Ae, ue) ? Ae.then(function(Be) {
                      return D(Be, $e);
                    }) : Ct($e, Ae);
                  }, _e);
                }
              }
              function Pt(De) {
                return M(De, vt) ? void 0 : De;
              }
              var At = Ft(), ot;
              return M(At, ue) ? ot = At.then(function() {
                return F;
              }) : (ot = yt("", F, null), It.length && (ot = ue.resolve(ot).then(function(De) {
                return ue.all([
                  De
                ].concat(It));
              }).then(function(De) {
                var _e = le(De, 1), Ie = _e[0];
                return Ie;
              }))), j(ot) ? Ee && E.throwOnBadSyncType ? (function() {
                throw new TypeError("Sync method requested but async result obtained");
              })() : M(ot, ue) ? ot.p.then(Pt) : ot : !Ee && E.throwOnBadSyncType ? (function() {
                throw new TypeError("Async method requested but sync result obtained");
              })() : Ee ? Pt(ot) : Promise.resolve(Pt(ot));
            }
          },
          {
            key: "reviveSync",
            value: function(F, E) {
              return this.revive(F, ie({
                throwOnBadSyncType: true
              }, E, {
                sync: true
              }));
            }
          },
          {
            key: "reviveAsync",
            value: function(F, E) {
              return this.revive(F, ie({
                throwOnBadSyncType: true
              }, E, {
                sync: false
              }));
            }
          },
          {
            key: "register",
            value: function(F, E) {
              return E = E || {}, [].concat(F).forEach(function Q(oe) {
                var Ee = this;
                if (He(oe)) return oe.map(function(Ce) {
                  return Q.call(Ee, Ce);
                });
                oe && Ne(oe).forEach(function(Ce) {
                  if (Ce === "#") throw new TypeError("# cannot be used as a type name as it is reserved for cyclic objects");
                  if (I.JSON_TYPES.includes(Ce)) throw new TypeError("Plain JSON object types are reserved as type names");
                  var fe = oe[Ce], mt = fe && fe.testPlainObjects ? this.plainObjectReplacers : this.nonplainObjectReplacers, kt = mt.filter(function(Ie) {
                    return Ie.type === Ce;
                  });
                  if (kt.length && (mt.splice(mt.indexOf(kt[0]), 1), delete this.revivers[Ce], delete this.types[Ce]), typeof fe == "function") {
                    var Ct = fe;
                    fe = {
                      test: function(tt) {
                        return tt && tt.constructor === Ct;
                      },
                      replace: function(tt) {
                        return ie({}, tt);
                      },
                      revive: function(tt) {
                        return Object.assign(Object.create(Ct.prototype), tt);
                      }
                    };
                  } else if (He(fe)) {
                    var Ft = fe, It = le(Ft, 3), yt = It[0], Pt = It[1], At = It[2];
                    fe = {
                      test: yt,
                      replace: Pt,
                      revive: At
                    };
                  }
                  if (!(!fe || !fe.test)) {
                    var ot = {
                      type: Ce,
                      test: fe.test.bind(fe)
                    };
                    fe.replace && (ot.replace = fe.replace.bind(fe)), fe.replaceAsync && (ot.replaceAsync = fe.replaceAsync.bind(fe));
                    var De = typeof E.fallback == "number" ? E.fallback : E.fallback ? 0 : 1 / 0;
                    if (fe.testPlainObjects ? this.plainObjectReplacers.splice(De, 0, ot) : this.nonplainObjectReplacers.splice(De, 0, ot), fe.revive || fe.reviveAsync) {
                      var _e = {};
                      fe.revive && (_e.revive = fe.revive.bind(fe)), fe.reviveAsync && (_e.reviveAsync = fe.reviveAsync.bind(fe)), this.revivers[Ce] = [
                        _e,
                        {
                          plain: fe.testPlainObjects
                        }
                      ];
                    }
                    this.types[Ce] = fe;
                  }
                }, this);
              }, this), this;
            }
          }
        ]), I;
      })(), vt = function I() {
        N(this, I);
      };
      return vt.__typeson__type__ = "TypesonUndefined", ze.Undefined = vt, ze.Promise = ue, ze.isThenable = j, ze.toStringTag = f, ze.hasConstructorOf = M, ze.isObject = Se, ze.isPlainObject = B, ze.isUserObject = xe, ze.escapeKeyPathComponent = Ue, ze.unescapeKeyPathComponent = Ge, ze.getByKeyPath = ct, ze.getJSONType = ut, ze.JSON_TYPES = [
        "null",
        "boolean",
        "number",
        "string",
        "array",
        "object"
      ], ze;
    }));
  }), Ci = gr(function($, L) {
    (function(k, P) {
      $.exports = P();
    })(mr, (function() {
      function k(c) {
        return (k = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
          return typeof o;
        } : function(o) {
          return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        })(c);
      }
      function P(c, o) {
        if (!(c instanceof o)) throw new TypeError("Cannot call a class as a function");
      }
      function V(c, o) {
        for (var s = 0; s < o.length; s++) {
          var p = o[s];
          p.enumerable = p.enumerable || false, p.configurable = true, "value" in p && (p.writable = true), Object.defineProperty(c, p.key, p);
        }
      }
      function N(c, o, s) {
        return o in c ? Object.defineProperty(c, o, {
          value: s,
          enumerable: true,
          configurable: true,
          writable: true
        }) : c[o] = s, c;
      }
      function w(c, o) {
        var s = Object.keys(c);
        if (Object.getOwnPropertySymbols) {
          var p = Object.getOwnPropertySymbols(c);
          o && (p = p.filter((function(_) {
            return Object.getOwnPropertyDescriptor(c, _).enumerable;
          }))), s.push.apply(s, p);
        }
        return s;
      }
      function G(c) {
        return (function(s) {
          if (Array.isArray(s)) return ce(s);
        })(c) || (function(s) {
          if (typeof Symbol < "u" && Symbol.iterator in Object(s)) return Array.from(s);
        })(c) || (function(s, p) {
          if (s) {
            if (typeof s == "string") return ce(s, p);
            var _ = Object.prototype.toString.call(s).slice(8, -1);
            if (_ === "Object" && s.constructor && (_ = s.constructor.name), _ === "Map" || _ === "Set") return Array.from(s);
            if (_ === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_)) return ce(s, p);
          }
        })(c) || (function() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        })();
      }
      function ce(c, o) {
        (o == null || o > c.length) && (o = c.length);
        for (var s = 0, p = new Array(o); s < o; s++) p[s] = c[s];
        return p;
      }
      function x(c) {
        return (x = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
          return typeof s;
        } : function(s) {
          return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
        })(c);
      }
      function ie(c, o) {
        if (!(c instanceof o)) throw new TypeError("Cannot call a class as a function");
      }
      function le(c, o) {
        for (var s = 0; s < o.length; s++) {
          var p = o[s];
          p.enumerable = p.enumerable || false, p.configurable = true, "value" in p && (p.writable = true), Object.defineProperty(c, p.key, p);
        }
      }
      function qe(c, o, s) {
        return o in c ? Object.defineProperty(c, o, {
          value: s,
          enumerable: true,
          configurable: true,
          writable: true
        }) : c[o] = s, c;
      }
      function Qe(c, o) {
        var s = Object.keys(c);
        if (Object.getOwnPropertySymbols) {
          var p = Object.getOwnPropertySymbols(c);
          o && (p = p.filter((function(_) {
            return Object.getOwnPropertyDescriptor(c, _).enumerable;
          }))), s.push.apply(s, p);
        }
        return s;
      }
      function be(c) {
        for (var o = 1; o < arguments.length; o++) {
          var s = arguments[o] != null ? arguments[o] : {};
          o % 2 ? Qe(Object(s), true).forEach((function(p) {
            qe(c, p, s[p]);
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(s)) : Qe(Object(s)).forEach((function(p) {
            Object.defineProperty(c, p, Object.getOwnPropertyDescriptor(s, p));
          }));
        }
        return c;
      }
      function ge(c, o) {
        return (function(p) {
          if (Array.isArray(p)) return p;
        })(c) || (function(p, _) {
          if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(p)))) {
            var Y = [], C = true, pe = false, Z = void 0;
            try {
              for (var ye, D = p[Symbol.iterator](); !(C = (ye = D.next()).done) && (Y.push(ye.value), !_ || Y.length !== _); C = true) ;
            } catch (Ae) {
              pe = true, Z = Ae;
            } finally {
              try {
                C || D.return == null || D.return();
              } finally {
                if (pe) throw Z;
              }
            }
            return Y;
          }
        })(c, o) || wt(c, o) || (function() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        })();
      }
      function Me(c) {
        return (function(s) {
          if (Array.isArray(s)) return Xe(s);
        })(c) || (function(s) {
          if (typeof Symbol < "u" && Symbol.iterator in Object(s)) return Array.from(s);
        })(c) || wt(c) || (function() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        })();
      }
      function wt(c, o) {
        if (c) {
          if (typeof c == "string") return Xe(c, o);
          var s = Object.prototype.toString.call(c).slice(8, -1);
          return s === "Object" && c.constructor && (s = c.constructor.name), s === "Map" || s === "Set" ? Array.from(c) : s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? Xe(c, o) : void 0;
        }
      }
      function Xe(c, o) {
        (o == null || o > c.length) && (o = c.length);
        for (var s = 0, p = new Array(o); s < o; s++) p[s] = c[s];
        return p;
      }
      var ue = function c(o) {
        ie(this, c), this.p = new Promise(o);
      };
      ue.__typeson__type__ = "TypesonPromise", typeof Symbol < "u" && (ue.prototype[Symbol.toStringTag] = "TypesonPromise"), ue.prototype.then = function(c, o) {
        var s = this;
        return new ue((function(p, _) {
          s.p.then((function(Y) {
            p(c ? c(Y) : Y);
          })).catch((function(Y) {
            return o ? o(Y) : Promise.reject(Y);
          })).then(p, _);
        }));
      }, ue.prototype.catch = function(c) {
        return this.then(null, c);
      }, ue.resolve = function(c) {
        return new ue((function(o) {
          o(c);
        }));
      }, ue.reject = function(c) {
        return new ue((function(o, s) {
          s(c);
        }));
      }, [
        "all",
        "race"
      ].forEach((function(c) {
        ue[c] = function(o) {
          return new ue((function(s, p) {
            Promise[c](o.map((function(_) {
              return _ && _.constructor && _.constructor.__typeson__type__ === "TypesonPromise" ? _.p : _;
            }))).then(s, p);
          }));
        };
      }));
      var pt = {}.toString, me = {}.hasOwnProperty, Te = Object.getPrototypeOf, we = me.toString;
      function _t(c, o) {
        return B(c) && typeof c.then == "function" && (!o || typeof c.catch == "function");
      }
      function j(c) {
        return pt.call(c).slice(8, -1);
      }
      function f(c, o) {
        if (!c || x(c) !== "object") return false;
        var s = Te(c);
        if (!s) return o === null;
        var p = me.call(s, "constructor") && s.constructor;
        return typeof p != "function" ? o === null : o === p || o !== null && we.call(p) === we.call(o) || typeof o == "function" && typeof p.__typeson__type__ == "string" && p.__typeson__type__ === o.__typeson__type__;
      }
      function M(c) {
        return !(!c || j(c) !== "Object") && (!Te(c) || f(c, Object));
      }
      function B(c) {
        return c && x(c) === "object";
      }
      function xe(c) {
        return c.replace(/~/g, "~0").replace(/\./g, "~1");
      }
      function Se(c) {
        return c.replace(/~1/g, ".").replace(/~0/g, "~");
      }
      function Ue(c, o) {
        if (o === "") return c;
        var s = o.indexOf(".");
        if (s > -1) {
          var p = c[Se(o.slice(0, s))];
          return p === void 0 ? void 0 : Ue(p, o.slice(s + 1));
        }
        return c[Se(o)];
      }
      function Ge(c, o, s) {
        if (o === "") return s;
        var p = o.indexOf(".");
        return p > -1 ? Ge(c[Se(o.slice(0, p))], o.slice(p + 1), s) : (c[Se(o)] = s, c);
      }
      function ct(c, o, s) {
        return s ? o ? o(c) : c : (c && c.then || (c = Promise.resolve(c)), o ? c.then(o) : c);
      }
      var lt = Object.keys, ut = Array.isArray, Ne = {}.hasOwnProperty, He = [
        "type",
        "replaced",
        "iterateIn",
        "iterateUnsetNumeric"
      ];
      function it(c) {
        return function() {
          for (var o = [], s = 0; s < arguments.length; s++) o[s] = arguments[s];
          try {
            return Promise.resolve(c.apply(this, o));
          } catch (p) {
            return Promise.reject(p);
          }
        };
      }
      function Dt(c, o) {
        if (c.keypath === "") return -1;
        var s = c.keypath.match(/\./g) || 0, p = o.keypath.match(/\./g) || 0;
        return s && (s = s.length), p && (p = p.length), s > p ? -1 : s < p ? 1 : c.keypath < o.keypath ? -1 : c.keypath > o.keypath;
      }
      var ve = (function() {
        function c(o) {
          ie(this, c), this.options = o, this.plainObjectReplacers = [], this.nonplainObjectReplacers = [], this.revivers = {}, this.types = {};
        }
        return (function(s, p, _) {
          return p && le(s.prototype, p), s;
        })(c, [
          {
            key: "stringify",
            value: function(s, p, _, Y) {
              Y = be(be(be({}, this.options), Y), {}, {
                stringification: true
              });
              var C = this.encapsulate(s, null, Y);
              return ut(C) ? JSON.stringify(C[0], p, _) : C.then((function(pe) {
                return JSON.stringify(pe, p, _);
              }));
            }
          },
          {
            key: "stringifySync",
            value: function(s, p, _, Y) {
              return this.stringify(s, p, _, be(be({
                throwOnBadSyncType: true
              }, Y), {}, {
                sync: true
              }));
            }
          },
          {
            key: "stringifyAsync",
            value: function(s, p, _, Y) {
              return this.stringify(s, p, _, be(be({
                throwOnBadSyncType: true
              }, Y), {}, {
                sync: false
              }));
            }
          },
          {
            key: "parse",
            value: function(s, p, _) {
              return _ = be(be(be({}, this.options), _), {}, {
                parse: true
              }), this.revive(JSON.parse(s, p), _);
            }
          },
          {
            key: "parseSync",
            value: function(s, p, _) {
              return this.parse(s, p, be(be({
                throwOnBadSyncType: true
              }, _), {}, {
                sync: true
              }));
            }
          },
          {
            key: "parseAsync",
            value: function(s, p, _) {
              return this.parse(s, p, be(be({
                throwOnBadSyncType: true
              }, _), {}, {
                sync: false
              }));
            }
          },
          {
            key: "specialTypeNames",
            value: function(s, p) {
              var _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
              return _.returnTypeNames = true, this.encapsulate(s, p, _);
            }
          },
          {
            key: "rootTypeName",
            value: function(s, p) {
              var _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
              return _.iterateNone = true, this.encapsulate(s, p, _);
            }
          },
          {
            key: "encapsulate",
            value: function(s, p, _) {
              var Y = it((function(ne, z) {
                return ct(Promise.all(z.map((function(he) {
                  return he[1].p;
                }))), (function(he) {
                  return ct(Promise.all(he.map(it((function(X) {
                    var re = false, Pe = [], Ot = ge(z.splice(0, 1), 1), Ze = ge(Ot[0], 7), bt = Ze[0], Bt = Ze[2], je = Ze[3], gt = Ze[4], Fe = Ze[5], St = Ze[6], Tt = Oe(bt, X, Bt, je, Pe, true, St), dt = f(Tt, ue);
                    return (function($t, en) {
                      var Yt = $t();
                      return Yt && Yt.then ? Yt.then(en) : en(Yt);
                    })((function() {
                      if (bt && dt) return ct(Tt.p, (function(Kt) {
                        return gt[Fe] = Kt, re = true, Y(ne, Pe);
                      }));
                    }), (function(Kt) {
                      return re ? Kt : (bt ? gt[Fe] = Tt : ne = dt ? Tt.p : Tt, Y(ne, Pe));
                    }));
                  })))), (function() {
                    return ne;
                  }));
                }));
              })), C = (_ = be(be({
                sync: true
              }, this.options), _)).sync, pe = this, Z = {}, ye = [], D = [], Ae = [], $e = !("cyclic" in _) || _.cyclic, Be = _.encapsulateObserver, Ke = Oe("", s, $e, p || {}, Ae);
              function Je(ne) {
                var z = Object.values(Z);
                if (_.iterateNone) return z.length ? z[0] : c.getJSONType(ne);
                if (z.length) {
                  if (_.returnTypeNames) return Me(new Set(z));
                  ne && M(ne) && !Ne.call(ne, "$types") ? ne.$types = Z : ne = {
                    $: ne,
                    $types: {
                      $: Z
                    }
                  };
                } else B(ne) && Ne.call(ne, "$types") && (ne = {
                  $: ne,
                  $types: true
                });
                return !_.returnTypeNames && ne;
              }
              function We(ne, z, he) {
                Object.assign(ne, z);
                var X = He.map((function(re) {
                  var Pe = ne[re];
                  return delete ne[re], Pe;
                }));
                he(), He.forEach((function(re, Pe) {
                  ne[re] = X[Pe];
                }));
              }
              function Oe(ne, z, he, X, re, Pe, Ot) {
                var Ze, bt = {}, Bt = x(z), je = Be ? function(Nt) {
                  var rt = Ot || X.type || c.getJSONType(z);
                  Be(Object.assign(Nt || bt, {
                    keypath: ne,
                    value: z,
                    cyclic: he,
                    stateObj: X,
                    promisesData: re,
                    resolvingTypesonPromise: Pe,
                    awaitingTypesonPromise: f(z, ue)
                  }, {
                    type: rt
                  }));
                } : null;
                if ([
                  "string",
                  "boolean",
                  "number",
                  "undefined"
                ].includes(Bt)) return z === void 0 || Number.isNaN(z) || z === Number.NEGATIVE_INFINITY || z === Number.POSITIVE_INFINITY ? (Ze = X.replaced ? z : at(ne, z, X, re, false, Pe, je)) !== z && (bt = {
                  replaced: Ze
                }) : Ze = z, je && je(), Ze;
                if (z === null) return je && je(), z;
                if (he && !X.iterateIn && !X.iterateUnsetNumeric && z && x(z) === "object") {
                  var gt = ye.indexOf(z);
                  if (!(gt < 0)) return Z[ne] = "#", je && je({
                    cyclicKeypath: D[gt]
                  }), "#" + D[gt];
                  he === true && (ye.push(z), D.push(ne));
                }
                var Fe, St = M(z), Tt = ut(z), dt = (St || Tt) && (!pe.plainObjectReplacers.length || X.replaced) || X.iterateIn ? z : at(ne, z, X, re, St || Tt, null, je);
                if (dt !== z ? (Ze = dt, bt = {
                  replaced: dt
                }) : ne === "" && f(z, ue) ? (re.push([
                  ne,
                  z,
                  he,
                  X,
                  void 0,
                  void 0,
                  X.type
                ]), Ze = z) : Tt && X.iterateIn !== "object" || X.iterateIn === "array" ? (Fe = new Array(z.length), bt = {
                  clone: Fe
                }) : ([
                  "function",
                  "symbol"
                ].includes(x(z)) || "toJSON" in z || f(z, ue) || f(z, Promise) || f(z, ArrayBuffer)) && !St && X.iterateIn !== "object" ? Ze = z : (Fe = {}, X.addLength && (Fe.length = z.length), bt = {
                  clone: Fe
                }), je && je(), _.iterateNone) return Fe || Ze;
                if (!Fe) return Ze;
                if (X.iterateIn) {
                  var Kt = function(rt) {
                    var Ut = {
                      ownKeys: Ne.call(z, rt)
                    };
                    We(X, Ut, (function() {
                      var Rt = ne + (ne ? "." : "") + xe(rt), zt = Oe(Rt, z[rt], !!he, X, re, Pe);
                      f(zt, ue) ? re.push([
                        Rt,
                        zt,
                        !!he,
                        X,
                        Fe,
                        rt,
                        X.type
                      ]) : zt !== void 0 && (Fe[rt] = zt);
                    }));
                  };
                  for (var $t in z) Kt($t);
                  je && je({
                    endIterateIn: true,
                    end: true
                  });
                } else lt(z).forEach((function(Nt) {
                  var rt = ne + (ne ? "." : "") + xe(Nt);
                  We(X, {
                    ownKeys: true
                  }, (function() {
                    var Ut = Oe(rt, z[Nt], !!he, X, re, Pe);
                    f(Ut, ue) ? re.push([
                      rt,
                      Ut,
                      !!he,
                      X,
                      Fe,
                      Nt,
                      X.type
                    ]) : Ut !== void 0 && (Fe[Nt] = Ut);
                  }));
                })), je && je({
                  endIterateOwn: true,
                  end: true
                });
                if (X.iterateUnsetNumeric) {
                  for (var en = z.length, Yt = function(rt) {
                    if (!(rt in z)) {
                      var Ut = ne + (ne ? "." : "") + rt;
                      We(X, {
                        ownKeys: false
                      }, (function() {
                        var Rt = Oe(Ut, void 0, !!he, X, re, Pe);
                        f(Rt, ue) ? re.push([
                          Ut,
                          Rt,
                          !!he,
                          X,
                          Fe,
                          rt,
                          X.type
                        ]) : Rt !== void 0 && (Fe[rt] = Rt);
                      }));
                    }
                  }, nt = 0; nt < en; nt++) Yt(nt);
                  je && je({
                    endIterateUnsetNumeric: true,
                    end: true
                  });
                }
                return Fe;
              }
              function at(ne, z, he, X, re, Pe, Ot) {
                for (var Ze = re ? pe.plainObjectReplacers : pe.nonplainObjectReplacers, bt = Ze.length; bt--; ) {
                  var Bt = Ze[bt];
                  if (Bt.test(z, he)) {
                    var je = Bt.type;
                    if (pe.revivers[je]) {
                      var gt = Z[ne];
                      Z[ne] = gt ? [
                        je
                      ].concat(gt) : je;
                    }
                    return Object.assign(he, {
                      type: je,
                      replaced: true
                    }), !C && Bt.replaceAsync || Bt.replace ? (Ot && Ot({
                      replacing: true
                    }), Oe(ne, Bt[C || !Bt.replaceAsync ? "replace" : "replaceAsync"](z, he), $e && "readonly", he, X, Pe, je)) : (Ot && Ot({
                      typeDetected: true
                    }), Oe(ne, z, $e && "readonly", he, X, Pe, je));
                  }
                }
                return z;
              }
              return Ae.length ? C && _.throwOnBadSyncType ? (function() {
                throw new TypeError("Sync method requested but async result obtained");
              })() : Promise.resolve(Y(Ke, Ae)).then(Je) : !C && _.throwOnBadSyncType ? (function() {
                throw new TypeError("Async method requested but sync result obtained");
              })() : _.stringification && C ? [
                Je(Ke)
              ] : C ? Je(Ke) : Promise.resolve(Je(Ke));
            }
          },
          {
            key: "encapsulateSync",
            value: function(s, p, _) {
              return this.encapsulate(s, p, be(be({
                throwOnBadSyncType: true
              }, _), {}, {
                sync: true
              }));
            }
          },
          {
            key: "encapsulateAsync",
            value: function(s, p, _) {
              return this.encapsulate(s, p, be(be({
                throwOnBadSyncType: true
              }, _), {}, {
                sync: false
              }));
            }
          },
          {
            key: "revive",
            value: function(s, p) {
              var _ = s && s.$types;
              if (!_) return s;
              if (_ === true) return s.$;
              var Y = (p = be(be({
                sync: true
              }, this.options), p)).sync, C = [], pe = {}, Z = true;
              _.$ && M(_.$) && (s = s.$, _ = _.$, Z = false);
              var ye = this;
              function D(Je, We) {
                var Oe = ge(ye.revivers[Je] || [], 1)[0];
                if (!Oe) throw new Error("Unregistered type: " + Je);
                return Y && !("revive" in Oe) ? We : Oe[Y && Oe.revive ? "revive" : !Y && Oe.reviveAsync ? "reviveAsync" : "revive"](We, pe);
              }
              var Ae = [];
              function $e(Je) {
                return f(Je, ze) ? void 0 : Je;
              }
              var Be, Ke = (function() {
                var We = [];
                if (Object.entries(_).forEach((function(Oe) {
                  var at = ge(Oe, 2), ne = at[0], z = at[1];
                  z !== "#" && [].concat(z).forEach((function(he) {
                    ge(ye.revivers[he] || [
                      null,
                      {}
                    ], 2)[1].plain && (We.push({
                      keypath: ne,
                      type: he
                    }), delete _[ne]);
                  }));
                })), We.length) return We.sort(Dt).reduce((function Oe(at, ne) {
                  var z = ne.keypath, he = ne.type;
                  if (_t(at)) return at.then((function(Pe) {
                    return Oe(Pe, {
                      keypath: z,
                      type: he
                    });
                  }));
                  var X = Ue(s, z);
                  if (f(X = D(he, X), ue)) return X.then((function(Pe) {
                    var Ot = Ge(s, z, Pe);
                    Ot === Pe && (s = Ot);
                  }));
                  var re = Ge(s, z, X);
                  re === X && (s = re);
                }), void 0);
              })();
              return f(Ke, ue) ? Be = Ke.then((function() {
                return s;
              })) : (Be = (function Je(We, Oe, at, ne, z) {
                if (!Z || We !== "$types") {
                  var he = _[We], X = ut(Oe);
                  if (X || M(Oe)) {
                    var re = X ? new Array(Oe.length) : {};
                    for (lt(Oe).forEach((function(Fe) {
                      var St = Je(We + (We ? "." : "") + xe(Fe), Oe[Fe], at || re, re, Fe), Tt = function(Kt) {
                        return f(Kt, ze) ? re[Fe] = void 0 : Kt !== void 0 && (re[Fe] = Kt), Kt;
                      };
                      f(St, ue) ? Ae.push(St.then((function(dt) {
                        return Tt(dt);
                      }))) : Tt(St);
                    })), Oe = re; C.length; ) {
                      var Pe = ge(C[0], 4), Ot = Pe[0], Ze = Pe[1], bt = Pe[2], Bt = Pe[3], je = Ue(Ot, Ze);
                      if (je === void 0) break;
                      bt[Bt] = je, C.splice(0, 1);
                    }
                  }
                  if (!he) return Oe;
                  if (he === "#") {
                    var gt = Ue(at, Oe.slice(1));
                    return gt === void 0 && C.push([
                      at,
                      Oe.slice(1),
                      ne,
                      z
                    ]), gt;
                  }
                  return [].concat(he).reduce((function Fe(St, Tt) {
                    return f(St, ue) ? St.then((function(dt) {
                      return Fe(dt, Tt);
                    })) : D(Tt, St);
                  }), Oe);
                }
              })("", s, null), Ae.length && (Be = ue.resolve(Be).then((function(Je) {
                return ue.all([
                  Je
                ].concat(Ae));
              })).then((function(Je) {
                return ge(Je, 1)[0];
              })))), _t(Be) ? Y && p.throwOnBadSyncType ? (function() {
                throw new TypeError("Sync method requested but async result obtained");
              })() : f(Be, ue) ? Be.p.then($e) : Be : !Y && p.throwOnBadSyncType ? (function() {
                throw new TypeError("Async method requested but sync result obtained");
              })() : Y ? $e(Be) : Promise.resolve($e(Be));
            }
          },
          {
            key: "reviveSync",
            value: function(s, p) {
              return this.revive(s, be(be({
                throwOnBadSyncType: true
              }, p), {}, {
                sync: true
              }));
            }
          },
          {
            key: "reviveAsync",
            value: function(s, p) {
              return this.revive(s, be(be({
                throwOnBadSyncType: true
              }, p), {}, {
                sync: false
              }));
            }
          },
          {
            key: "register",
            value: function(s, p) {
              return p = p || {}, [].concat(s).forEach((function _(Y) {
                var C = this;
                if (ut(Y)) return Y.map((function(pe) {
                  return _.call(C, pe);
                }));
                Y && lt(Y).forEach((function(pe) {
                  if (pe === "#") throw new TypeError("# cannot be used as a type name as it is reserved for cyclic objects");
                  if (c.JSON_TYPES.includes(pe)) throw new TypeError("Plain JSON object types are reserved as type names");
                  var Z = Y[pe], ye = Z && Z.testPlainObjects ? this.plainObjectReplacers : this.nonplainObjectReplacers, D = ye.filter((function(We) {
                    return We.type === pe;
                  }));
                  if (D.length && (ye.splice(ye.indexOf(D[0]), 1), delete this.revivers[pe], delete this.types[pe]), typeof Z == "function") {
                    var Ae = Z;
                    Z = {
                      test: function(Oe) {
                        return Oe && Oe.constructor === Ae;
                      },
                      replace: function(Oe) {
                        return be({}, Oe);
                      },
                      revive: function(Oe) {
                        return Object.assign(Object.create(Ae.prototype), Oe);
                      }
                    };
                  } else if (ut(Z)) {
                    var $e = ge(Z, 3);
                    Z = {
                      test: $e[0],
                      replace: $e[1],
                      revive: $e[2]
                    };
                  }
                  if (Z && Z.test) {
                    var Be = {
                      type: pe,
                      test: Z.test.bind(Z)
                    };
                    Z.replace && (Be.replace = Z.replace.bind(Z)), Z.replaceAsync && (Be.replaceAsync = Z.replaceAsync.bind(Z));
                    var Ke = typeof p.fallback == "number" ? p.fallback : p.fallback ? 0 : Number.POSITIVE_INFINITY;
                    if (Z.testPlainObjects ? this.plainObjectReplacers.splice(Ke, 0, Be) : this.nonplainObjectReplacers.splice(Ke, 0, Be), Z.revive || Z.reviveAsync) {
                      var Je = {};
                      Z.revive && (Je.revive = Z.revive.bind(Z)), Z.reviveAsync && (Je.reviveAsync = Z.reviveAsync.bind(Z)), this.revivers[pe] = [
                        Je,
                        {
                          plain: Z.testPlainObjects
                        }
                      ];
                    }
                    this.types[pe] = Z;
                  }
                }), this);
              }), this), this;
            }
          }
        ]), c;
      })(), ze = function c() {
        ie(this, c);
      };
      ze.__typeson__type__ = "TypesonUndefined", ve.Undefined = ze, ve.Promise = ue, ve.isThenable = _t, ve.toStringTag = j, ve.hasConstructorOf = f, ve.isObject = B, ve.isPlainObject = M, ve.isUserObject = function c(o) {
        if (!o || j(o) !== "Object") return false;
        var s = Te(o);
        return !s || f(o, Object) || c(s);
      }, ve.escapeKeyPathComponent = xe, ve.unescapeKeyPathComponent = Se, ve.getByKeyPath = Ue, ve.getJSONType = function(o) {
        return o === null ? "null" : Array.isArray(o) ? "array" : x(o);
      }, ve.JSON_TYPES = [
        "null",
        "boolean",
        "number",
        "string",
        "array",
        "object"
      ];
      for (var vt = {
        userObject: {
          test: function(o, s) {
            return ve.isUserObject(o);
          },
          replace: function(o) {
            return (function(p) {
              for (var _ = 1; _ < arguments.length; _++) {
                var Y = arguments[_] != null ? arguments[_] : {};
                _ % 2 ? w(Object(Y), true).forEach((function(C) {
                  N(p, C, Y[C]);
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(Y)) : w(Object(Y)).forEach((function(C) {
                  Object.defineProperty(p, C, Object.getOwnPropertyDescriptor(Y, C));
                }));
              }
              return p;
            })({}, o);
          },
          revive: function(o) {
            return o;
          }
        }
      }, I = [
        {
          arrayNonindexKeys: {
            testPlainObjects: true,
            test: function(o, s) {
              return !!Array.isArray(o) && (Object.keys(o).some((function(p) {
                return String(Number.parseInt(p)) !== p;
              })) && (s.iterateIn = "object", s.addLength = true), true);
            },
            replace: function(o, s) {
              return s.iterateUnsetNumeric = true, o;
            },
            revive: function(o) {
              if (Array.isArray(o)) return o;
              var s = [];
              return Object.keys(o).forEach((function(p) {
                var _ = o[p];
                s[p] = _;
              })), s;
            }
          }
        },
        {
          sparseUndefined: {
            test: function(o, s) {
              return o === void 0 && s.ownKeys === false;
            },
            replace: function(o) {
              return 0;
            },
            revive: function(o) {
            }
          }
        }
      ], R = {
        undef: {
          test: function(o, s) {
            return o === void 0 && (s.ownKeys || !("ownKeys" in s));
          },
          replace: function(o) {
            return 0;
          },
          revive: function(o) {
            return new ve.Undefined();
          }
        }
      }, F = {
        StringObject: {
          test: function(o) {
            return ve.toStringTag(o) === "String" && k(o) === "object";
          },
          replace: function(o) {
            return String(o);
          },
          revive: function(o) {
            return new String(o);
          }
        },
        BooleanObject: {
          test: function(o) {
            return ve.toStringTag(o) === "Boolean" && k(o) === "object";
          },
          replace: function(o) {
            return !!o;
          },
          revive: function(o) {
            return new Boolean(o);
          }
        },
        NumberObject: {
          test: function(o) {
            return ve.toStringTag(o) === "Number" && k(o) === "object";
          },
          replace: function(o) {
            return Number(o);
          },
          revive: function(o) {
            return new Number(o);
          }
        }
      }, E = [
        {
          nan: {
            test: function(o) {
              return Number.isNaN(o);
            },
            replace: function(o) {
              return "NaN";
            },
            revive: function(o) {
              return Number.NaN;
            }
          }
        },
        {
          infinity: {
            test: function(o) {
              return o === Number.POSITIVE_INFINITY;
            },
            replace: function(o) {
              return "Infinity";
            },
            revive: function(o) {
              return Number.POSITIVE_INFINITY;
            }
          }
        },
        {
          negativeInfinity: {
            test: function(o) {
              return o === Number.NEGATIVE_INFINITY;
            },
            replace: function(o) {
              return "-Infinity";
            },
            revive: function(o) {
              return Number.NEGATIVE_INFINITY;
            }
          }
        }
      ], Q = {
        date: {
          test: function(o) {
            return ve.toStringTag(o) === "Date";
          },
          replace: function(o) {
            var s = o.getTime();
            return Number.isNaN(s) ? "NaN" : s;
          },
          revive: function(o) {
            return o === "NaN" ? new Date(Number.NaN) : new Date(o);
          }
        }
      }, oe = {
        regexp: {
          test: function(o) {
            return ve.toStringTag(o) === "RegExp";
          },
          replace: function(o) {
            return {
              source: o.source,
              flags: (o.global ? "g" : "") + (o.ignoreCase ? "i" : "") + (o.multiline ? "m" : "") + (o.sticky ? "y" : "") + (o.unicode ? "u" : "")
            };
          },
          revive: function(o) {
            var s = o.source, p = o.flags;
            return new RegExp(s, p);
          }
        }
      }, Ee = {
        map: {
          test: function(o) {
            return ve.toStringTag(o) === "Map";
          },
          replace: function(o) {
            return G(o.entries());
          },
          revive: function(o) {
            return new Map(o);
          }
        }
      }, Ce = {
        set: {
          test: function(o) {
            return ve.toStringTag(o) === "Set";
          },
          replace: function(o) {
            return G(o.values());
          },
          revive: function(o) {
            return new Set(o);
          }
        }
      }, fe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", mt = new Uint8Array(256), kt = 0; kt < fe.length; kt++) mt[fe.charCodeAt(kt)] = kt;
      var Ct = function(o, s, p) {
        p == null && (p = o.byteLength);
        for (var _ = new Uint8Array(o, 0, p), Y = _.length, C = "", pe = 0; pe < Y; pe += 3) C += fe[_[pe] >> 2], C += fe[(3 & _[pe]) << 4 | _[pe + 1] >> 4], C += fe[(15 & _[pe + 1]) << 2 | _[pe + 2] >> 6], C += fe[63 & _[pe + 2]];
        return Y % 3 == 2 ? C = C.slice(0, -1) + "=" : Y % 3 == 1 && (C = C.slice(0, -2) + "=="), C;
      }, Ft = function(o) {
        var s, p, _, Y, C = o.length, pe = 0.75 * o.length, Z = 0;
        o[o.length - 1] === "=" && (pe--, o[o.length - 2] === "=" && pe--);
        for (var ye = new ArrayBuffer(pe), D = new Uint8Array(ye), Ae = 0; Ae < C; Ae += 4) s = mt[o.charCodeAt(Ae)], p = mt[o.charCodeAt(Ae + 1)], _ = mt[o.charCodeAt(Ae + 2)], Y = mt[o.charCodeAt(Ae + 3)], D[Z++] = s << 2 | p >> 4, D[Z++] = (15 & p) << 4 | _ >> 2, D[Z++] = (3 & _) << 6 | 63 & Y;
        return ye;
      }, It = {
        arraybuffer: {
          test: function(o) {
            return ve.toStringTag(o) === "ArrayBuffer";
          },
          replace: function(o, s) {
            s.buffers || (s.buffers = []);
            var p = s.buffers.indexOf(o);
            return p > -1 ? {
              index: p
            } : (s.buffers.push(o), Ct(o));
          },
          revive: function(o, s) {
            if (s.buffers || (s.buffers = []), k(o) === "object") return s.buffers[o.index];
            var p = Ft(o);
            return s.buffers.push(p), p;
          }
        }
      }, yt = typeof self > "u" ? mr : self, Pt = {};
      [
        "Int8Array",
        "Uint8Array",
        "Uint8ClampedArray",
        "Int16Array",
        "Uint16Array",
        "Int32Array",
        "Uint32Array",
        "Float32Array",
        "Float64Array"
      ].forEach((function(c) {
        var o = c, s = yt[o];
        s && (Pt[c.toLowerCase()] = {
          test: function(_) {
            return ve.toStringTag(_) === o;
          },
          replace: function(_, Y) {
            var C = _.buffer, pe = _.byteOffset, Z = _.length;
            Y.buffers || (Y.buffers = []);
            var ye = Y.buffers.indexOf(C);
            return ye > -1 ? {
              index: ye,
              byteOffset: pe,
              length: Z
            } : (Y.buffers.push(C), {
              encoded: Ct(C),
              byteOffset: pe,
              length: Z
            });
          },
          revive: function(_, Y) {
            Y.buffers || (Y.buffers = []);
            var C, pe = _.byteOffset, Z = _.length, ye = _.encoded, D = _.index;
            return "index" in _ ? C = Y.buffers[D] : (C = Ft(ye), Y.buffers.push(C)), new s(C, pe, Z);
          }
        });
      }));
      var At = {
        dataview: {
          test: function(o) {
            return ve.toStringTag(o) === "DataView";
          },
          replace: function(o, s) {
            var p = o.buffer, _ = o.byteOffset, Y = o.byteLength;
            s.buffers || (s.buffers = []);
            var C = s.buffers.indexOf(p);
            return C > -1 ? {
              index: C,
              byteOffset: _,
              byteLength: Y
            } : (s.buffers.push(p), {
              encoded: Ct(p),
              byteOffset: _,
              byteLength: Y
            });
          },
          revive: function(o, s) {
            s.buffers || (s.buffers = []);
            var p, _ = o.byteOffset, Y = o.byteLength, C = o.encoded, pe = o.index;
            return "index" in o ? p = s.buffers[pe] : (p = Ft(C), s.buffers.push(p)), new DataView(p, _, Y);
          }
        }
      }, ot = {
        IntlCollator: {
          test: function(o) {
            return ve.hasConstructorOf(o, Intl.Collator);
          },
          replace: function(o) {
            return o.resolvedOptions();
          },
          revive: function(o) {
            return new Intl.Collator(o.locale, o);
          }
        },
        IntlDateTimeFormat: {
          test: function(o) {
            return ve.hasConstructorOf(o, Intl.DateTimeFormat);
          },
          replace: function(o) {
            return o.resolvedOptions();
          },
          revive: function(o) {
            return new Intl.DateTimeFormat(o.locale, o);
          }
        },
        IntlNumberFormat: {
          test: function(o) {
            return ve.hasConstructorOf(o, Intl.NumberFormat);
          },
          replace: function(o) {
            return o.resolvedOptions();
          },
          revive: function(o) {
            return new Intl.NumberFormat(o.locale, o);
          }
        }
      };
      function De(c) {
        for (var o = new Uint8Array(c.length), s = 0; s < c.length; s++) o[s] = c.charCodeAt(s);
        return o.buffer;
      }
      var _e = {
        file: {
          test: function(o) {
            return ve.toStringTag(o) === "File";
          },
          replace: function(o) {
            var s = new XMLHttpRequest();
            if (s.overrideMimeType("text/plain; charset=x-user-defined"), s.open("GET", URL.createObjectURL(o), false), s.send(), s.status !== 200 && s.status !== 0) throw new Error("Bad File access: " + s.status);
            return {
              type: o.type,
              stringContents: s.responseText,
              name: o.name,
              lastModified: o.lastModified
            };
          },
          revive: function(o) {
            var s = o.name, p = o.type, _ = o.stringContents, Y = o.lastModified;
            return new File([
              De(_)
            ], s, {
              type: p,
              lastModified: Y
            });
          },
          replaceAsync: function(o) {
            return new ve.Promise((function(s, p) {
              var _ = new FileReader();
              _.addEventListener("load", (function() {
                s({
                  type: o.type,
                  stringContents: _.result,
                  name: o.name,
                  lastModified: o.lastModified
                });
              })), _.addEventListener("error", (function() {
                p(_.error);
              })), _.readAsBinaryString(o);
            }));
          }
        }
      }, Ie = {
        bigint: {
          test: function(o) {
            return typeof o == "bigint";
          },
          replace: function(o) {
            return String(o);
          },
          revive: function(o) {
            return BigInt(o);
          }
        }
      }, tt = {
        bigintObject: {
          test: function(o) {
            return k(o) === "object" && ve.hasConstructorOf(o, BigInt);
          },
          replace: function(o) {
            return String(o);
          },
          revive: function(o) {
            return new Object(BigInt(o));
          }
        }
      }, se = {
        cryptokey: {
          test: function(o) {
            return ve.toStringTag(o) === "CryptoKey" && o.extractable;
          },
          replaceAsync: function(o) {
            return new ve.Promise((function(s, p) {
              crypto.subtle.exportKey("jwk", o).catch((function(_) {
                p(_);
              })).then((function(_) {
                s({
                  jwk: _,
                  algorithm: o.algorithm,
                  usages: o.usages
                });
              }));
            }));
          },
          revive: function(o) {
            var s = o.jwk, p = o.algorithm, _ = o.usages;
            return crypto.subtle.importKey("jwk", s, p, true, _);
          }
        }
      };
      return [
        vt,
        R,
        I,
        F,
        E,
        Q,
        oe,
        {
          imagedata: {
            test: function(o) {
              return ve.toStringTag(o) === "ImageData";
            },
            replace: function(o) {
              return {
                array: G(o.data),
                width: o.width,
                height: o.height
              };
            },
            revive: function(o) {
              return new ImageData(new Uint8ClampedArray(o.array), o.width, o.height);
            }
          }
        },
        {
          imagebitmap: {
            test: function(o) {
              return ve.toStringTag(o) === "ImageBitmap" || o && o.dataset && o.dataset.toStringTag === "ImageBitmap";
            },
            replace: function(o) {
              var s = document.createElement("canvas");
              return s.getContext("2d").drawImage(o, 0, 0), s.toDataURL();
            },
            revive: function(o) {
              var s = document.createElement("canvas"), p = s.getContext("2d"), _ = document.createElement("img");
              return _.addEventListener("load", (function() {
                p.drawImage(_, 0, 0);
              })), _.src = o, s;
            },
            reviveAsync: function(o) {
              var s = document.createElement("canvas"), p = s.getContext("2d"), _ = document.createElement("img");
              return _.addEventListener("load", (function() {
                p.drawImage(_, 0, 0);
              })), _.src = o, createImageBitmap(s);
            }
          }
        },
        _e,
        {
          file: _e.file,
          filelist: {
            test: function(o) {
              return ve.toStringTag(o) === "FileList";
            },
            replace: function(o) {
              for (var s = [], p = 0; p < o.length; p++) s[p] = o.item(p);
              return s;
            },
            revive: function(o) {
              return new ((function() {
                function s() {
                  P(this, s), this._files = arguments[0], this.length = this._files.length;
                }
                return (function(_, Y, C) {
                  return Y && V(_.prototype, Y), _;
                })(s, [
                  {
                    key: "item",
                    value: function(_) {
                      return this._files[_];
                    }
                  },
                  {
                    key: Symbol.toStringTag,
                    get: function() {
                      return "FileList";
                    }
                  }
                ]), s;
              })())(o);
            }
          }
        },
        {
          blob: {
            test: function(o) {
              return ve.toStringTag(o) === "Blob";
            },
            replace: function(o) {
              var s = new XMLHttpRequest();
              if (s.overrideMimeType("text/plain; charset=x-user-defined"), s.open("GET", URL.createObjectURL(o), false), s.send(), s.status !== 200 && s.status !== 0) throw new Error("Bad Blob access: " + s.status);
              return {
                type: o.type,
                stringContents: s.responseText
              };
            },
            revive: function(o) {
              var s = o.type, p = o.stringContents;
              return new Blob([
                De(p)
              ], {
                type: s
              });
            },
            replaceAsync: function(o) {
              return new ve.Promise((function(s, p) {
                var _ = new FileReader();
                _.addEventListener("load", (function() {
                  s({
                    type: o.type,
                    stringContents: _.result
                  });
                })), _.addEventListener("error", (function() {
                  p(_.error);
                })), _.readAsBinaryString(o);
              }));
            }
          }
        }
      ].concat(typeof Map == "function" ? Ee : [], typeof Set == "function" ? Ce : [], typeof ArrayBuffer == "function" ? It : [], typeof Uint8Array == "function" ? Pt : [], typeof DataView == "function" ? At : [], typeof Intl < "u" ? ot : [], typeof crypto < "u" ? se : [], typeof BigInt < "u" ? [
        Ie,
        tt
      ] : []);
    }));
  }), fn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", _n = new Uint8Array(256);
  for (var Fn = 0; Fn < fn.length; Fn++) _n[fn.codePointAt(Fn)] = Fn;
  var br = function(L, k, P) {
    P == null && (P = L.byteLength);
    for (var V = new Uint8Array(L, 0, P), N = V.length, w = "", G = 0; G < N; G += 3) w += fn[V[G] >> 2], w += fn[(V[G] & 3) << 4 | V[G + 1] >> 4], w += fn[(V[G + 1] & 15) << 2 | V[G + 2] >> 6], w += fn[V[G + 2] & 63];
    return N % 3 === 2 ? w = w.slice(0, -1) + "=" : N % 3 === 1 && (w = w.slice(0, -2) + "=="), w;
  }, Zr = function(L) {
    var k = L.length, P = L.length * 0.75, V = 0, N, w, G, ce;
    L[L.length - 1] === "=" && (P--, L[L.length - 2] === "=" && P--);
    for (var x = new ArrayBuffer(P), ie = new Uint8Array(x), le = 0; le < k; le += 4) N = _n[L.codePointAt(le)], w = _n[L.codePointAt(le + 1)], G = _n[L.codePointAt(le + 2)], ce = _n[L.codePointAt(le + 3)], ie[V++] = N << 2 | w >> 4, ie[V++] = (w & 15) << 4 | G >> 2, ie[V++] = (G & 3) << 6 | ce & 63;
    return x;
  }, Ii = typeof self > "u" ? global : self, ei = {};
  [
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Uint16Array",
    "Int32Array",
    "Uint32Array",
    "Float32Array",
    "Float64Array"
  ].forEach(function($) {
    var L = $, k = Ii[L];
    k && (ei[$.toLowerCase() + "2"] = {
      test: function(P) {
        return $n.toStringTag(P) === L;
      },
      replace: function(P) {
        var V = P.buffer, N = P.byteOffset, w = P.length;
        return {
          buffer: V,
          byteOffset: N,
          length: w
        };
      },
      revive: function(P) {
        var V = P.buffer, N = P.byteOffset, w = P.length;
        return new k(V, N, w);
      }
    });
  });
  var Bi = {
    arraybuffer: {
      test: function($) {
        return $n.toStringTag($) === "ArrayBuffer";
      },
      replace: function($) {
        return br($, 0, $.byteLength);
      },
      revive: function($) {
        var L = Zr($);
        return L;
      }
    }
  }, Mt = new $n().register(Ci), Ki = "FileReaderSync" in self, Mn = [], Un = 0;
  Mt.register([
    Bi,
    ei,
    {
      blob2: {
        test: function($) {
          return $n.toStringTag($) === "Blob";
        },
        replace: function($) {
          if ($.isClosed) throw new Error("The Blob is closed");
          if (Ki) {
            var L = Xr($, "binary"), k = br(L, 0, L.byteLength);
            return {
              type: $.type,
              data: k
            };
          } else {
            Mn.push($);
            var P = {
              type: $.type,
              data: {
                start: Un,
                end: Un + $.size
              }
            };
            return Un += $.size, P;
          }
        },
        finalize: function($, L) {
          $.data = br(L, 0, L.byteLength);
        },
        revive: function($) {
          var L = $.type, k = $.data;
          return new Blob([
            Zr(k)
          ], {
            type: L
          });
        }
      }
    }
  ]);
  Mt.mustFinalize = function() {
    return Mn.length > 0;
  };
  Mt.finalize = function($) {
    return Zt(void 0, void 0, void 0, function() {
      var L, k, P, V, N, w, G, ce, x, ie, le, qe;
      return Vt(this, function(Qe) {
        switch (Qe.label) {
          case 0:
            return [
              4,
              Qr(new Blob(Mn), "binary")
            ];
          case 1:
            if (L = Qe.sent(), $) {
              for (k = 0, P = $; k < P.length; k++) if (V = P[k], V.$types) {
                N = V.$types, w = N.$, w && (N = N.$);
                for (G in N) ce = N[G], x = Mt.types[ce], x && x.finalize && (ie = xt.getByKeyPath(V, w ? "$." + G : G), x.finalize(ie, L.slice((le = ie.data) === null || le === void 0 ? void 0 : le.start, (qe = ie.data) === null || qe === void 0 ? void 0 : qe.end)));
              }
            }
            return Mn = [], Un = 0, [
              2
            ];
        }
      });
    });
  };
  var Ri = 2e3;
  function Di($, L) {
    return Zt(this, void 0, void 0, function() {
      function k() {
        return Zt(this, void 0, void 0, function() {
          var le, qe, Qe, be, ge, Me, wt, Xe, ue, pt;
          return Vt(this, function(me) {
            switch (me.label) {
              case 0:
                return [
                  4,
                  Promise.all(V.map(function(Te) {
                    return Te.count();
                  }))
                ];
              case 1:
                le = me.sent(), le.forEach(function(Te, we) {
                  return w[we].rowCount = Te;
                }), ie.totalRows = le.reduce(function(Te, we) {
                  return Te + we;
                }), qe = JSON.stringify(ce, void 0, G ? 2 : void 0), Qe = qe.lastIndexOf("]"), be = qe.substring(0, Qe), N.push(be), ge = L.filter, Me = L.transform, wt = function(Te) {
                  var we, _t, j, f, M, B, xe, Se, Ue, Ge, ct, lt;
                  return Vt(this, function(ut) {
                    switch (ut.label) {
                      case 0:
                        we = $.table(Te), _t = we.schema.primKey, j = !!_t.keyPath, f = L.numRowsPerChunk || Ri, M = j ? {
                          tableName: we.name,
                          inbound: true,
                          rows: []
                        } : {
                          tableName: we.name,
                          inbound: false,
                          rows: []
                        }, B = JSON.stringify(M, void 0, G ? 2 : void 0), G && (B = B.split(`
`).join(`
    `)), xe = B.lastIndexOf("]"), N.push(B.substring(0, xe)), Se = null, Ue = 0, Ge = true, ct = function() {
                          var Ne, He, it, Dt, ve, R, ze, vt, I, R;
                          return Vt(this, function(F) {
                            switch (F.label) {
                              case 0:
                                return x && xt.ignoreTransaction(function() {
                                  return x(ie);
                                }), Ne = Se == null ? we.limit(f) : we.where(":id").above(Se).limit(f), [
                                  4,
                                  Ne.toArray()
                                ];
                              case 1:
                                return He = F.sent(), He.length === 0 ? [
                                  2,
                                  "break"
                                ] : (Se != null && Ue > 0 && (N.push(","), G && N.push(`
      `)), Ge = He.length === f, j ? (it = ge ? He.filter(function(E) {
                                  return ge(Te, E);
                                }) : He, Dt = Me ? it.map(function(E) {
                                  return Me(Te, E).value;
                                }) : it, ve = Dt.map(function(E) {
                                  return Mt.encapsulate(E);
                                }), Mt.mustFinalize() ? [
                                  4,
                                  xt.waitFor(Mt.finalize(ve))
                                ] : [
                                  3,
                                  3
                                ]) : [
                                  3,
                                  4
                                ]);
                              case 2:
                                F.sent(), F.label = 3;
                              case 3:
                                return R = JSON.stringify(ve, void 0, G ? 2 : void 0), G && (R = R.split(`
`).join(`
      `)), N.push(new Blob([
                                  R.substring(1, R.length - 1)
                                ])), Ue = Dt.length, Se = He.length > 0 ? xt.getByKeyPath(He[He.length - 1], _t.keyPath) : null, [
                                  3,
                                  8
                                ];
                              case 4:
                                return [
                                  4,
                                  Ne.primaryKeys()
                                ];
                              case 5:
                                return ze = F.sent(), vt = ze.map(function(E, Q) {
                                  return [
                                    E,
                                    He[Q]
                                  ];
                                }), ge && (vt = vt.filter(function(E) {
                                  var Q = E[0], oe = E[1];
                                  return ge(Te, oe, Q);
                                })), Me && (vt = vt.map(function(E) {
                                  var Q = E[0], oe = E[1], Ee = Me(Te, oe, Q);
                                  return [
                                    Ee.key,
                                    Ee.value
                                  ];
                                })), I = vt.map(function(E) {
                                  return Mt.encapsulate(E);
                                }), Mt.mustFinalize() ? [
                                  4,
                                  xt.waitFor(Mt.finalize(I))
                                ] : [
                                  3,
                                  7
                                ];
                              case 6:
                                F.sent(), F.label = 7;
                              case 7:
                                R = JSON.stringify(I, void 0, G ? 2 : void 0), G && (R = R.split(`
`).join(`
      `)), N.push(new Blob([
                                  R.substring(1, R.length - 1)
                                ])), Ue = vt.length, Se = ze.length > 0 ? ze[ze.length - 1] : null, F.label = 8;
                              case 8:
                                return ie.completedRows += He.length, [
                                  2
                                ];
                            }
                          });
                        }, ut.label = 1;
                      case 1:
                        return Ge ? [
                          5,
                          ct()
                        ] : [
                          3,
                          3
                        ];
                      case 2:
                        return lt = ut.sent(), lt === "break" ? [
                          3,
                          3
                        ] : [
                          3,
                          1
                        ];
                      case 3:
                        return N.push(B.substr(xe)), ie.completedTables += 1, ie.completedTables < ie.totalTables && N.push(","), [
                          2
                        ];
                    }
                  });
                }, Xe = 0, ue = w, me.label = 2;
              case 2:
                return Xe < ue.length ? (pt = ue[Xe].name, [
                  5,
                  wt(pt)
                ]) : [
                  3,
                  5
                ];
              case 3:
                me.sent(), me.label = 4;
              case 4:
                return Xe++, [
                  3,
                  2
                ];
              case 5:
                return N.push(qe.substr(Qe)), ie.done = true, x && xt.ignoreTransaction(function() {
                  return x(ie);
                }), [
                  2
                ];
            }
          });
        });
      }
      var P, V, N, w, G, ce, x, ie;
      return Vt(this, function(le) {
        switch (le.label) {
          case 0:
            L = L || {}, P = L.skipTables ? L.skipTables : [], V = $.tables.filter(function(qe) {
              return !P.includes(qe.name);
            }), N = [], w = V.map(function(qe) {
              return {
                name: qe.name,
                schema: Ni(qe),
                rowCount: 0
              };
            }), G = L.prettyJson, ce = {
              formatName: "dexie",
              formatVersion: 1,
              data: {
                databaseName: $.name,
                databaseVersion: $.verno,
                tables: w,
                data: []
              }
            }, x = L.progressCallback, ie = {
              done: false,
              completedRows: 0,
              completedTables: 0,
              totalRows: NaN,
              totalTables: w.length
            }, le.label = 1;
          case 1:
            return le.trys.push([
              1,
              ,
              6,
              7
            ]), L.noTransaction ? [
              4,
              k()
            ] : [
              3,
              3
            ];
          case 2:
            return le.sent(), [
              3,
              5
            ];
          case 3:
            return [
              4,
              $.transaction("r", $.tables, k)
            ];
          case 4:
            le.sent(), le.label = 5;
          case 5:
            return [
              3,
              7
            ];
          case 6:
            return Mt.finalize(), [
              7
            ];
          case 7:
            return [
              2,
              new Blob(N, {
                type: "text/json"
              })
            ];
        }
      });
    });
  }
  var Fi = 1, Li = {
    Stream: function() {
    }
  }, Ui = gr(function($, L) {
    (function(k) {
      var P = typeof process == "object" && Hr ? Hr : self;
      k.parser = function(j) {
        return new Qe(j);
      }, k.CParser = Qe, k.CStream = ge, k.createStream = be, k.MAX_BUFFER_LENGTH = 10 * 1024 * 1024, k.DEBUG = P.CDEBUG === "debug", k.INFO = P.CDEBUG === "debug" || P.CDEBUG === "info", k.EVENTS = [
        "value",
        "string",
        "key",
        "openobject",
        "closeobject",
        "openarray",
        "closearray",
        "error",
        "end",
        "ready"
      ];
      var V = {
        textNode: void 0,
        numberNode: ""
      }, N = k.EVENTS.filter(function(j) {
        return j !== "error" && j !== "end";
      }), w = 0, G;
      k.STATE = {
        BEGIN: w++,
        VALUE: w++,
        OPEN_OBJECT: w++,
        CLOSE_OBJECT: w++,
        OPEN_ARRAY: w++,
        CLOSE_ARRAY: w++,
        TEXT_ESCAPE: w++,
        STRING: w++,
        BACKSLASH: w++,
        END: w++,
        OPEN_KEY: w++,
        CLOSE_KEY: w++,
        TRUE: w++,
        TRUE2: w++,
        TRUE3: w++,
        FALSE: w++,
        FALSE2: w++,
        FALSE3: w++,
        FALSE4: w++,
        NULL: w++,
        NULL2: w++,
        NULL3: w++,
        NUMBER_DECIMAL_POINT: w++,
        NUMBER_DIGIT: w++
      };
      for (var ce in k.STATE) k.STATE[k.STATE[ce]] = ce;
      w = k.STATE;
      const x = {
        tab: 9,
        lineFeed: 10,
        carriageReturn: 13,
        space: 32,
        doubleQuote: 34,
        plus: 43,
        comma: 44,
        minus: 45,
        period: 46,
        _0: 48,
        _9: 57,
        colon: 58,
        E: 69,
        openBracket: 91,
        backslash: 92,
        closeBracket: 93,
        a: 97,
        b: 98,
        e: 101,
        f: 102,
        l: 108,
        n: 110,
        r: 114,
        s: 115,
        t: 116,
        u: 117,
        openBrace: 123,
        closeBrace: 125
      };
      Object.create || (Object.create = function(j) {
        function f() {
          this.__proto__ = j;
        }
        return f.prototype = j, new f();
      }), Object.getPrototypeOf || (Object.getPrototypeOf = function(j) {
        return j.__proto__;
      }), Object.keys || (Object.keys = function(j) {
        var f = [];
        for (var M in j) j.hasOwnProperty(M) && f.push(M);
        return f;
      });
      function ie(j) {
        var f = Math.max(k.MAX_BUFFER_LENGTH, 10), M = 0;
        for (var B in V) {
          var xe = j[B] === void 0 ? 0 : j[B].length;
          xe > f && (B === "text" ? closeText(j) : me(j, "Max buffer length exceeded: " + B)), M = Math.max(M, xe);
        }
        j.bufferCheckPosition = k.MAX_BUFFER_LENGTH - M + j.position;
      }
      function le(j) {
        for (var f in V) j[f] = V[f];
      }
      var qe = /[\\"\n]/g;
      function Qe(j) {
        if (!(this instanceof Qe)) return new Qe(j);
        var f = this;
        le(f), f.bufferCheckPosition = k.MAX_BUFFER_LENGTH, f.q = f.c = f.p = "", f.opt = j || {}, f.closed = f.closedRoot = f.sawRoot = false, f.tag = f.error = null, f.state = w.BEGIN, f.stack = new Array(), f.position = f.column = 0, f.line = 1, f.slashed = false, f.unicodeI = 0, f.unicodeS = null, f.depth = 0, Me(f, "onready");
      }
      Qe.prototype = {
        end: function() {
          Te(this);
        },
        write: _t,
        resume: function() {
          return this.error = null, this;
        },
        close: function() {
          return this.write(null);
        }
      };
      try {
        G = Li.Stream;
      } catch {
        G = function() {
        };
      }
      function be(j) {
        return new ge(j);
      }
      function ge(j) {
        if (!(this instanceof ge)) return new ge(j);
        this._parser = new Qe(j), this.writable = true, this.readable = true, this.bytes_remaining = 0, this.bytes_in_sequence = 0, this.temp_buffs = {
          2: new Buffer(2),
          3: new Buffer(3),
          4: new Buffer(4)
        }, this.string = "";
        var f = this;
        G.apply(f), this._parser.onend = function() {
          f.emit("end");
        }, this._parser.onerror = function(M) {
          f.emit("error", M), f._parser.error = null;
        }, N.forEach(function(M) {
          Object.defineProperty(f, "on" + M, {
            get: function() {
              return f._parser["on" + M];
            },
            set: function(B) {
              if (!B) return f.removeAllListeners(M), f._parser["on" + M] = B, B;
              f.on(M, B);
            },
            enumerable: true,
            configurable: false
          });
        });
      }
      ge.prototype = Object.create(G.prototype, {
        constructor: {
          value: ge
        }
      }), ge.prototype.write = function(j) {
        j = new Buffer(j);
        for (var f = 0; f < j.length; f++) {
          var M = j[f];
          if (this.bytes_remaining > 0) {
            for (var B = 0; B < this.bytes_remaining; B++) this.temp_buffs[this.bytes_in_sequence][this.bytes_in_sequence - this.bytes_remaining + B] = j[B];
            this.string = this.temp_buffs[this.bytes_in_sequence].toString(), this.bytes_in_sequence = this.bytes_remaining = 0, f = f + B - 1, this._parser.write(this.string), this.emit("data", this.string);
            continue;
          }
          if (this.bytes_remaining === 0 && M >= 128) if (M >= 194 && M <= 223 && (this.bytes_in_sequence = 2), M >= 224 && M <= 239 && (this.bytes_in_sequence = 3), M >= 240 && M <= 244 && (this.bytes_in_sequence = 4), this.bytes_in_sequence + f > j.length) {
            for (var xe = 0; xe <= j.length - 1 - f; xe++) this.temp_buffs[this.bytes_in_sequence][xe] = j[f + xe];
            return this.bytes_remaining = f + this.bytes_in_sequence - j.length, true;
          } else {
            this.string = j.slice(f, f + this.bytes_in_sequence).toString(), f = f + this.bytes_in_sequence - 1, this._parser.write(this.string), this.emit("data", this.string);
            continue;
          }
          for (var Se = f; Se < j.length && !(j[Se] >= 128); Se++) ;
          this.string = j.slice(f, Se).toString(), this._parser.write(this.string), this.emit("data", this.string), f = Se - 1;
        }
      }, ge.prototype.end = function(j) {
        return j && j.length && this._parser.write(j.toString()), this._parser.end(), true;
      }, ge.prototype.on = function(j, f) {
        var M = this;
        return !M._parser["on" + j] && N.indexOf(j) !== -1 && (M._parser["on" + j] = function() {
          var B = arguments.length === 1 ? [
            arguments[0]
          ] : Array.apply(null, arguments);
          B.splice(0, 0, j), M.emit.apply(M, B);
        }), G.prototype.on.call(M, j, f);
      }, ge.prototype.destroy = function() {
        le(this._parser), this.emit("close");
      };
      function Me(j, f, M) {
        k.INFO && console.log("-- emit", f, M), j[f] && j[f](M);
      }
      function wt(j, f, M) {
        Xe(j), Me(j, f, M);
      }
      function Xe(j, f) {
        j.textNode = pt(j.opt, j.textNode), j.textNode !== void 0 && Me(j, f || "onvalue", j.textNode), j.textNode = void 0;
      }
      function ue(j) {
        j.numberNode && Me(j, "onvalue", parseFloat(j.numberNode)), j.numberNode = "";
      }
      function pt(j, f) {
        return f === void 0 || (j.trim && (f = f.trim()), j.normalize && (f = f.replace(/\s+/g, " "))), f;
      }
      function me(j, f) {
        return Xe(j), f += `
Line: ` + j.line + `
Column: ` + j.column + `
Char: ` + j.c, f = new Error(f), j.error = f, Me(j, "onerror", f), j;
      }
      function Te(j) {
        return (j.state !== w.VALUE || j.depth !== 0) && me(j, "Unexpected end"), Xe(j), j.c = "", j.closed = true, Me(j, "onend"), Qe.call(j, j.opt), j;
      }
      function we(j) {
        return j === x.carriageReturn || j === x.lineFeed || j === x.space || j === x.tab;
      }
      function _t(j) {
        var f = this;
        if (this.error) throw this.error;
        if (f.closed) return me(f, "Cannot write after close. Assign an onready handler.");
        if (j === null) return Te(f);
        var M = 0, B = j.charCodeAt(0), xe = f.p;
        for (k.DEBUG && console.log("write -> [" + j + "]"); B && (xe = B, f.c = B = j.charCodeAt(M++), xe !== B ? f.p = xe : xe = f.p, !!B); ) switch (k.DEBUG && console.log(M, B, k.STATE[f.state]), f.position++, B === x.lineFeed ? (f.line++, f.column = 0) : f.column++, f.state) {
          case w.BEGIN:
            B === x.openBrace ? f.state = w.OPEN_OBJECT : B === x.openBracket ? f.state = w.OPEN_ARRAY : we(B) || me(f, "Non-whitespace before {[.");
            continue;
          case w.OPEN_KEY:
          case w.OPEN_OBJECT:
            if (we(B)) continue;
            if (f.state === w.OPEN_KEY) f.stack.push(w.CLOSE_KEY);
            else if (B === x.closeBrace) {
              Me(f, "onopenobject"), this.depth++, Me(f, "oncloseobject"), this.depth--, f.state = f.stack.pop() || w.VALUE;
              continue;
            } else f.stack.push(w.CLOSE_OBJECT);
            B === x.doubleQuote ? f.state = w.STRING : me(f, 'Malformed object key should start with "');
            continue;
          case w.CLOSE_KEY:
          case w.CLOSE_OBJECT:
            if (we(B)) continue;
            f.state, w.CLOSE_KEY, B === x.colon ? (f.state === w.CLOSE_OBJECT ? (f.stack.push(w.CLOSE_OBJECT), Xe(f, "onopenobject"), this.depth++) : Xe(f, "onkey"), f.state = w.VALUE) : B === x.closeBrace ? (wt(f, "oncloseobject"), this.depth--, f.state = f.stack.pop() || w.VALUE) : B === x.comma ? (f.state === w.CLOSE_OBJECT && f.stack.push(w.CLOSE_OBJECT), Xe(f), f.state = w.OPEN_KEY) : me(f, "Bad object");
            continue;
          case w.OPEN_ARRAY:
          case w.VALUE:
            if (we(B)) continue;
            if (f.state === w.OPEN_ARRAY) if (Me(f, "onopenarray"), this.depth++, f.state = w.VALUE, B === x.closeBracket) {
              Me(f, "onclosearray"), this.depth--, f.state = f.stack.pop() || w.VALUE;
              continue;
            } else f.stack.push(w.CLOSE_ARRAY);
            B === x.doubleQuote ? f.state = w.STRING : B === x.openBrace ? f.state = w.OPEN_OBJECT : B === x.openBracket ? f.state = w.OPEN_ARRAY : B === x.t ? f.state = w.TRUE : B === x.f ? f.state = w.FALSE : B === x.n ? f.state = w.NULL : B === x.minus ? f.numberNode += "-" : x._0 <= B && B <= x._9 ? (f.numberNode += String.fromCharCode(B), f.state = w.NUMBER_DIGIT) : me(f, "Bad value");
            continue;
          case w.CLOSE_ARRAY:
            if (B === x.comma) f.stack.push(w.CLOSE_ARRAY), Xe(f, "onvalue"), f.state = w.VALUE;
            else if (B === x.closeBracket) wt(f, "onclosearray"), this.depth--, f.state = f.stack.pop() || w.VALUE;
            else {
              if (we(B)) continue;
              me(f, "Bad array");
            }
            continue;
          case w.STRING:
            f.textNode === void 0 && (f.textNode = "");
            var Se = M - 1, Ue = f.slashed, Ge = f.unicodeI;
            e: for (; ; ) {
              for (k.DEBUG && console.log(M, B, k.STATE[f.state], Ue); Ge > 0; ) if (f.unicodeS += String.fromCharCode(B), B = j.charCodeAt(M++), f.position++, Ge === 4 ? (f.textNode += String.fromCharCode(parseInt(f.unicodeS, 16)), Ge = 0, Se = M - 1) : Ge++, !B) break e;
              if (B === x.doubleQuote && !Ue) {
                f.state = f.stack.pop() || w.VALUE, f.textNode += j.substring(Se, M - 1), f.position += M - 1 - Se;
                break;
              }
              if (B === x.backslash && !Ue && (Ue = true, f.textNode += j.substring(Se, M - 1), f.position += M - 1 - Se, B = j.charCodeAt(M++), f.position++, !B)) break;
              if (Ue) {
                if (Ue = false, B === x.n ? f.textNode += `
` : B === x.r ? f.textNode += "\r" : B === x.t ? f.textNode += "	" : B === x.f ? f.textNode += "\f" : B === x.b ? f.textNode += "\b" : B === x.u ? (Ge = 1, f.unicodeS = "") : f.textNode += String.fromCharCode(B), B = j.charCodeAt(M++), f.position++, Se = M - 1, B) continue;
                break;
              }
              qe.lastIndex = M;
              var ct = qe.exec(j);
              if (ct === null) {
                M = j.length + 1, f.textNode += j.substring(Se, M - 1), f.position += M - 1 - Se;
                break;
              }
              if (M = ct.index + 1, B = j.charCodeAt(ct.index), !B) {
                f.textNode += j.substring(Se, M - 1), f.position += M - 1 - Se;
                break;
              }
            }
            f.slashed = Ue, f.unicodeI = Ge;
            continue;
          case w.TRUE:
            B === x.r ? f.state = w.TRUE2 : me(f, "Invalid true started with t" + B);
            continue;
          case w.TRUE2:
            B === x.u ? f.state = w.TRUE3 : me(f, "Invalid true started with tr" + B);
            continue;
          case w.TRUE3:
            B === x.e ? (Me(f, "onvalue", true), f.state = f.stack.pop() || w.VALUE) : me(f, "Invalid true started with tru" + B);
            continue;
          case w.FALSE:
            B === x.a ? f.state = w.FALSE2 : me(f, "Invalid false started with f" + B);
            continue;
          case w.FALSE2:
            B === x.l ? f.state = w.FALSE3 : me(f, "Invalid false started with fa" + B);
            continue;
          case w.FALSE3:
            B === x.s ? f.state = w.FALSE4 : me(f, "Invalid false started with fal" + B);
            continue;
          case w.FALSE4:
            B === x.e ? (Me(f, "onvalue", false), f.state = f.stack.pop() || w.VALUE) : me(f, "Invalid false started with fals" + B);
            continue;
          case w.NULL:
            B === x.u ? f.state = w.NULL2 : me(f, "Invalid null started with n" + B);
            continue;
          case w.NULL2:
            B === x.l ? f.state = w.NULL3 : me(f, "Invalid null started with nu" + B);
            continue;
          case w.NULL3:
            B === x.l ? (Me(f, "onvalue", null), f.state = f.stack.pop() || w.VALUE) : me(f, "Invalid null started with nul" + B);
            continue;
          case w.NUMBER_DECIMAL_POINT:
            B === x.period ? (f.numberNode += ".", f.state = w.NUMBER_DIGIT) : me(f, "Leading zero not followed by .");
            continue;
          case w.NUMBER_DIGIT:
            x._0 <= B && B <= x._9 ? f.numberNode += String.fromCharCode(B) : B === x.period ? (f.numberNode.indexOf(".") !== -1 && me(f, "Invalid number has two dots"), f.numberNode += ".") : B === x.e || B === x.E ? ((f.numberNode.indexOf("e") !== -1 || f.numberNode.indexOf("E") !== -1) && me(f, "Invalid number has two exponential"), f.numberNode += "e") : B === x.plus || B === x.minus ? (xe === x.e || xe === x.E || me(f, "Invalid symbol in number"), f.numberNode += String.fromCharCode(B)) : (ue(f), M--, f.state = f.stack.pop() || w.VALUE);
            continue;
          default:
            me(f, "Unknown state: " + f.state);
        }
        return f.position >= f.bufferCheckPosition && ie(f), f;
      }
    })(L);
  });
  function qi($) {
    var L = 0, k = Mi(), P = {
      pullAsync: function(V) {
        return Zt(this, void 0, void 0, function() {
          var N, w, G;
          return Vt(this, function(ce) {
            switch (ce.label) {
              case 0:
                return N = $.slice(L, L + V), L += V, [
                  4,
                  Qr(N, "text")
                ];
              case 1:
                return w = ce.sent(), G = k.write(w), P.result = G || {}, [
                  2,
                  G
                ];
            }
          });
        });
      },
      pullSync: function(V) {
        var N = $.slice(L, L + V);
        L += V;
        var w = Xr(N, "text"), G = k.write(w);
        return P.result = G || {}, G;
      },
      done: function() {
        return k.done();
      },
      eof: function() {
        return L >= $.size;
      },
      result: {}
    };
    return P;
  }
  function Mi($) {
    var L = Ui.parser(), k = 0, P, V = [], N, w, G = false, ce = false;
    return L.onopenobject = function(x) {
      var ie = {};
      ie.incomplete = true, P || (P = ie), N && (V.push([
        w,
        N,
        ce
      ]), ce ? N.push(ie) : N[w] = ie), N = ie, w = x, ce = false, ++k;
    }, L.onkey = function(x) {
      return w = x;
    }, L.onvalue = function(x) {
      return ce ? N.push(x) : N[w] = x;
    }, L.oncloseobject = function() {
      var x;
      delete N.incomplete, w = null, --k === 0 ? G = true : (x = V.pop(), w = x[0], N = x[1], ce = x[2]);
    }, L.onopenarray = function() {
      var x = [];
      x.incomplete = true, P || (P = x), N && (V.push([
        w,
        N,
        ce
      ]), ce ? N.push(x) : N[w] = x), N = x, ce = true, w = null, ++k;
    }, L.onclosearray = function() {
      var x;
      delete N.incomplete, w = null, --k === 0 ? G = true : (x = V.pop(), w = x[0], N = x[1], ce = x[2]);
    }, {
      write: function(x) {
        return L.write(x), P;
      },
      done: function() {
        return G;
      }
    };
  }
  var ti = 1024;
  function $i($, L) {
    return Zt(this, void 0, void 0, function() {
      var k, P, V, N;
      return Vt(this, function(w) {
        switch (w.label) {
          case 0:
            return L = L || {}, k = L.chunkSizeBytes || ti * 1024, [
              4,
              ri($, k)
            ];
          case 1:
            return P = w.sent(), V = P.result.data, N = new xt(L.name !== void 0 ? L.name : V.databaseName), N.version(V.databaseVersion).stores(ji(V)), [
              4,
              ni(N, P, L.name !== void 0 ? qn(qn({}, L), {
                acceptNameDiff: true
              }) : L)
            ];
          case 2:
            return w.sent(), [
              2,
              N
            ];
        }
      });
    });
  }
  function ni($, L, k) {
    return Zt(this, void 0, void 0, function() {
      function P() {
        return Zt(this, void 0, void 0, function() {
          var ge, Me, wt, Xe, ue;
          return Vt(this, function(pt) {
            switch (pt.label) {
              case 0:
                ge = function(me) {
                  var Te, we, _t, j, f, M, B, xe, Se, Ue, Ge, ct, lt;
                  return Vt(this, function(ut) {
                    switch (ut.label) {
                      case 0:
                        if (x.includes(me.tableName)) return [
                          2,
                          "continue"
                        ];
                        if (!me.rows) return [
                          2,
                          "break"
                        ];
                        if (!me.rows.incomplete && me.rows.length === 0) return [
                          2,
                          "continue"
                        ];
                        if (ie && xt.ignoreTransaction(function() {
                          return ie(le);
                        }), Te = me.tableName, we = $.table(Te), _t = ce.tables.filter(function(Ne) {
                          return Ne.name === Te;
                        })[0].schema, !we) {
                          if (k.acceptMissingTables) return [
                            2,
                            "continue"
                          ];
                          throw new Error("Exported table ".concat(me.tableName, " is missing in installed database"));
                        }
                        if (!k.acceptChangedPrimaryKey && _t.split(",")[0] != we.schema.primKey.src) throw new Error("Primary key differs for table ".concat(me.tableName, ". "));
                        for (j = me.rows, f = [], M = 0; M < j.length && (B = j[M], !B.incomplete); M++) f.push(Mt.revive(B));
                        return xe = k.filter, Se = k.transform, Ue = xe ? me.inbound ? f.filter(function(Ne) {
                          return xe(Te, Ne);
                        }) : f.filter(function(Ne) {
                          var He = Ne[0], it = Ne[1];
                          return xe(Te, it, He);
                        }) : f, Se && (Ue = Ue.map(me.inbound ? function(Ne) {
                          return Se(Te, Ne).value;
                        } : function(Ne) {
                          var He = Ne[0], it = Ne[1], Dt = Se(Te, it, He);
                          return [
                            Dt.key,
                            Dt.value
                          ];
                        })), Ge = me.inbound ? [
                          void 0,
                          Ue
                        ] : [
                          Ue.map(function(Ne) {
                            return Ne[0];
                          }),
                          f.map(function(Ne) {
                            return Ne[1];
                          })
                        ], ct = Ge[0], lt = Ge[1], k.overwriteValues ? [
                          4,
                          we.bulkPut(lt, ct)
                        ] : [
                          3,
                          2
                        ];
                      case 1:
                        return ut.sent(), [
                          3,
                          4
                        ];
                      case 2:
                        return [
                          4,
                          we.bulkAdd(lt, ct)
                        ];
                      case 3:
                        ut.sent(), ut.label = 4;
                      case 4:
                        return le.completedRows += f.length, f.incomplete || (le.completedTables += 1), j.splice(0, f.length), [
                          2
                        ];
                    }
                  });
                }, Me = 0, wt = ce.data, pt.label = 1;
              case 1:
                return Me < wt.length ? (Xe = wt[Me], [
                  5,
                  ge(Xe)
                ]) : [
                  3,
                  4
                ];
              case 2:
                if (ue = pt.sent(), ue === "break") return [
                  3,
                  4
                ];
                pt.label = 3;
              case 3:
                return Me++, [
                  3,
                  1
                ];
              case 4:
                for (; ce.data.length > 0 && ce.data[0].rows && !ce.data[0].rows.incomplete; ) ce.data.splice(0, 1);
                return !N.done() && !N.eof() ? G ? (N.pullSync(V), [
                  3,
                  7
                ]) : [
                  3,
                  5
                ] : [
                  3,
                  8
                ];
              case 5:
                return [
                  4,
                  xt.waitFor(N.pullAsync(V))
                ];
              case 6:
                pt.sent(), pt.label = 7;
              case 7:
                return [
                  3,
                  9
                ];
              case 8:
                return [
                  3,
                  10
                ];
              case 9:
                return [
                  3,
                  0
                ];
              case 10:
                return [
                  2
                ];
            }
          });
        });
      }
      var V, N, w, G, ce, x, ie, le, qe, Qe, be;
      return Vt(this, function(ge) {
        switch (ge.label) {
          case 0:
            return k = k || {}, V = k.chunkSizeBytes || ti * 1024, [
              4,
              ri(L, V)
            ];
          case 1:
            if (N = ge.sent(), w = N.result, G = "FileReaderSync" in self, ce = w.data, x = k.skipTables ? k.skipTables : [], !k.acceptNameDiff && $.name !== ce.databaseName) throw new Error("Name differs. Current database name is ".concat($.name, " but export is ").concat(ce.databaseName));
            if (!k.acceptVersionDiff && $.verno !== ce.databaseVersion) throw new Error("Database version differs. Current database is in version ".concat($.verno, " but export is ").concat(ce.databaseVersion));
            if (ie = k.progressCallback, le = {
              done: false,
              completedRows: 0,
              completedTables: 0,
              totalRows: ce.tables.reduce(function(Me, wt) {
                return Me + wt.rowCount;
              }, 0),
              totalTables: ce.tables.length
            }, ie && xt.ignoreTransaction(function() {
              return ie(le);
            }), !k.clearTablesBeforeImport) return [
              3,
              5
            ];
            qe = 0, Qe = $.tables, ge.label = 2;
          case 2:
            return qe < Qe.length ? (be = Qe[qe], x.includes(be.name) ? [
              3,
              4
            ] : [
              4,
              be.clear()
            ]) : [
              3,
              5
            ];
          case 3:
            ge.sent(), ge.label = 4;
          case 4:
            return qe++, [
              3,
              2
            ];
          case 5:
            return k.noTransaction ? [
              4,
              P()
            ] : [
              3,
              7
            ];
          case 6:
            return ge.sent(), [
              3,
              9
            ];
          case 7:
            return [
              4,
              $.transaction("rw", $.tables, P)
            ];
          case 8:
            ge.sent(), ge.label = 9;
          case 9:
            return le.done = true, ie && xt.ignoreTransaction(function() {
              return ie(le);
            }), [
              2
            ];
        }
      });
    });
  }
  function ri($, L) {
    return Zt(this, void 0, void 0, function() {
      var k, P;
      return Vt(this, function(V) {
        switch (V.label) {
          case 0:
            k = "slice" in $ ? qi($) : $, V.label = 1;
          case 1:
            return k.eof() ? [
              3,
              3
            ] : [
              4,
              k.pullAsync(L)
            ];
          case 2:
            return V.sent(), k.result.data && k.result.data.data ? [
              3,
              3
            ] : [
              3,
              1
            ];
          case 3:
            if (P = k.result, !P || P.formatName != "dexie") throw new Error("Given file is not a dexie export");
            if (P.formatVersion > Fi) throw new Error("Format version ".concat(P.formatVersion, " not supported"));
            if (!P.data) throw new Error("No data in export file");
            if (!P.data.databaseName) throw new Error("Missing databaseName in export file");
            if (!P.data.databaseVersion) throw new Error("Missing databaseVersion in export file");
            if (!P.data.tables) throw new Error("Missing tables in export file");
            return [
              2,
              k
            ];
        }
      });
    });
  }
  xt.prototype.export = function($) {
    return Di(this, $);
  };
  xt.prototype.import = function($, L) {
    return ni(this, $, L);
  };
  xt.import = function($, L) {
    return $i($, L);
  };
  io = async function() {
    const { getClassificationHistory: $ } = await Ei(async () => {
      const { getClassificationHistory: w } = await import("./index-DwiQ5yRy.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((G) => G.aG);
      return {
        getClassificationHistory: w
      };
    }, __vite__mapDeps([0,1])), k = (await $()).filter((w) => w.suggestedType !== void 0 && w.suggestedType !== w.chosenType);
    if (k.length === 0) return 0;
    const P = k.map((w) => JSON.stringify({
      content: w.content,
      suggestedType: w.suggestedType,
      chosenType: w.chosenType,
      tier: w.tier ?? null,
      confidence: w.confidence ?? null,
      timestamp: w.timestamp
    })), V = (/* @__PURE__ */ new Date()).toISOString().split("T")[0], N = new Blob([
      P.join(`
`) + `
`
    ], {
      type: "application/x-ndjson"
    });
    return Vi(N, `binderos-corrections-${V}.jsonl`), k.length;
  };
  function Vi($, L) {
    const k = URL.createObjectURL($), P = document.createElement("a");
    P.href = k, P.download = L, P.click(), URL.revokeObjectURL(k);
  }
});
export {
  __tla,
  io as exportCorrectionLog
};
