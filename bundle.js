function tE(e, i) {
  for (var a = 0; a < i.length; a++) {
    const r = i[a];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const u = Object.getOwnPropertyDescriptor(r, l);
          u &&
            Object.defineProperty(
              e,
              l,
              u.get ? u : { enumerable: !0, get: () => r[l] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const u of l)
      if (u.type === "childList")
        for (const f of u.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && r(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(l) {
    const u = {};
    return (
      l.integrity && (u.integrity = l.integrity),
      l.referrerPolicy && (u.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (u.credentials = "omit")
          : (u.credentials = "same-origin"),
      u
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const u = a(l);
    fetch(l.href, u);
  }
})();
function eE(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var lf = { exports: {} },
  $a = {};
var xg;
function nE() {
  if (xg) return $a;
  xg = 1;
  var e = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.fragment");
  function a(r, l, u) {
    var f = null;
    if (
      (u !== void 0 && (f = "" + u),
      l.key !== void 0 && (f = "" + l.key),
      "key" in l)
    ) {
      u = {};
      for (var h in l) h !== "key" && (u[h] = l[h]);
    } else u = l;
    return (
      (l = u.ref),
      { $$typeof: e, type: r, key: f, ref: l !== void 0 ? l : null, props: u }
    );
  }
  return (($a.Fragment = i), ($a.jsx = a), ($a.jsxs = a), $a);
}
var wg;
function iE() {
  return (wg || ((wg = 1), (lf.exports = nE())), lf.exports);
}
var b = iE(),
  cf = { exports: {} },
  Ja = {},
  uf = { exports: {} },
  ff = {};
var Sg;
function sE() {
  return (
    Sg ||
      ((Sg = 1),
      (function (e) {
        function i(z, Q) {
          var F = z.length;
          z.push(Q);
          t: for (; 0 < F;) {
            var nt = (F - 1) >>> 1,
              A = z[nt];
            if (0 < l(A, Q)) ((z[nt] = Q), (z[F] = A), (F = nt));
            else break t;
          }
        }
        function a(z) {
          return z.length === 0 ? null : z[0];
        }
        function r(z) {
          if (z.length === 0) return null;
          var Q = z[0],
            F = z.pop();
          if (F !== Q) {
            z[0] = F;
            t: for (var nt = 0, A = z.length, Y = A >>> 1; nt < Y;) {
              var et = 2 * (nt + 1) - 1,
                J = z[et],
                ct = et + 1,
                mt = z[ct];
              if (0 > l(J, F))
                ct < A && 0 > l(mt, J)
                  ? ((z[nt] = mt), (z[ct] = F), (nt = ct))
                  : ((z[nt] = J), (z[et] = F), (nt = et));
              else if (ct < A && 0 > l(mt, F))
                ((z[nt] = mt), (z[ct] = F), (nt = ct));
              else break t;
            }
          }
          return Q;
        }
        function l(z, Q) {
          var F = z.sortIndex - Q.sortIndex;
          return F !== 0 ? F : z.id - Q.id;
        }
        if (
          ((e.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var u = performance;
          e.unstable_now = function () {
            return u.now();
          };
        } else {
          var f = Date,
            h = f.now();
          e.unstable_now = function () {
            return f.now() - h;
          };
        }
        var p = [],
          m = [],
          y = 1,
          g = null,
          x = 3,
          T = !1,
          E = !1,
          C = !1,
          R = !1,
          D = typeof setTimeout == "function" ? setTimeout : null,
          N = typeof clearTimeout == "function" ? clearTimeout : null,
          j = typeof setImmediate < "u" ? setImmediate : null;
        function V(z) {
          for (var Q = a(m); Q !== null;) {
            if (Q.callback === null) r(m);
            else if (Q.startTime <= z)
              (r(m), (Q.sortIndex = Q.expirationTime), i(p, Q));
            else break;
            Q = a(m);
          }
        }
        function U(z) {
          if (((C = !1), V(z), !E))
            if (a(p) !== null) ((E = !0), X || ((X = !0), st()));
            else {
              var Q = a(m);
              Q !== null && ut(U, Q.startTime - z);
            }
        }
        var X = !1,
          Z = -1,
          P = 5,
          I = -1;
        function W() {
          return R ? !0 : !(e.unstable_now() - I < P);
        }
        function $() {
          if (((R = !1), X)) {
            var z = e.unstable_now();
            I = z;
            var Q = !0;
            try {
              t: {
                ((E = !1), C && ((C = !1), N(Z), (Z = -1)), (T = !0));
                var F = x;
                try {
                  e: {
                    for (
                      V(z), g = a(p);
                      g !== null && !(g.expirationTime > z && W());
                    ) {
                      var nt = g.callback;
                      if (typeof nt == "function") {
                        ((g.callback = null), (x = g.priorityLevel));
                        var A = nt(g.expirationTime <= z);
                        if (((z = e.unstable_now()), typeof A == "function")) {
                          ((g.callback = A), V(z), (Q = !0));
                          break e;
                        }
                        (g === a(p) && r(p), V(z));
                      } else r(p);
                      g = a(p);
                    }
                    if (g !== null) Q = !0;
                    else {
                      var Y = a(m);
                      (Y !== null && ut(U, Y.startTime - z), (Q = !1));
                    }
                  }
                  break t;
                } finally {
                  ((g = null), (x = F), (T = !1));
                }
                Q = void 0;
              }
            } finally {
              Q ? st() : (X = !1);
            }
          }
        }
        var st;
        if (typeof j == "function")
          st = function () {
            j($);
          };
        else if (typeof MessageChannel < "u") {
          var gt = new MessageChannel(),
            tt = gt.port2;
          ((gt.port1.onmessage = $),
            (st = function () {
              tt.postMessage(null);
            }));
        } else
          st = function () {
            D($, 0);
          };
        function ut(z, Q) {
          Z = D(function () {
            z(e.unstable_now());
          }, Q);
        }
        ((e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (z) {
            z.callback = null;
          }),
          (e.unstable_forceFrameRate = function (z) {
            0 > z || 125 < z
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (P = 0 < z ? Math.floor(1e3 / z) : 5);
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return x;
          }),
          (e.unstable_next = function (z) {
            switch (x) {
              case 1:
              case 2:
              case 3:
                var Q = 3;
                break;
              default:
                Q = x;
            }
            var F = x;
            x = Q;
            try {
              return z();
            } finally {
              x = F;
            }
          }),
          (e.unstable_requestPaint = function () {
            R = !0;
          }),
          (e.unstable_runWithPriority = function (z, Q) {
            switch (z) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                z = 3;
            }
            var F = x;
            x = z;
            try {
              return Q();
            } finally {
              x = F;
            }
          }),
          (e.unstable_scheduleCallback = function (z, Q, F) {
            var nt = e.unstable_now();
            switch (
              (typeof F == "object" && F !== null
                ? ((F = F.delay),
                  (F = typeof F == "number" && 0 < F ? nt + F : nt))
                : (F = nt),
              z)
            ) {
              case 1:
                var A = -1;
                break;
              case 2:
                A = 250;
                break;
              case 5:
                A = 1073741823;
                break;
              case 4:
                A = 1e4;
                break;
              default:
                A = 5e3;
            }
            return (
              (A = F + A),
              (z = {
                id: y++,
                callback: Q,
                priorityLevel: z,
                startTime: F,
                expirationTime: A,
                sortIndex: -1,
              }),
              F > nt
                ? ((z.sortIndex = F),
                  i(m, z),
                  a(p) === null &&
                    z === a(m) &&
                    (C ? (N(Z), (Z = -1)) : (C = !0), ut(U, F - nt)))
                : ((z.sortIndex = A),
                  i(p, z),
                  E || T || ((E = !0), X || ((X = !0), st()))),
              z
            );
          }),
          (e.unstable_shouldYield = W),
          (e.unstable_wrapCallback = function (z) {
            var Q = x;
            return function () {
              var F = x;
              x = Q;
              try {
                return z.apply(this, arguments);
              } finally {
                x = F;
              }
            };
          }));
      })(ff)),
    ff
  );
}
var Tg;
function aE() {
  return (Tg || ((Tg = 1), (uf.exports = sE())), uf.exports);
}
var df = { exports: {} },
  vt = {};
var Eg;
function rE() {
  if (Eg) return vt;
  Eg = 1;
  var e = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    l = Symbol.for("react.profiler"),
    u = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    y = Symbol.for("react.lazy"),
    g = Symbol.iterator;
  function x(A) {
    return A === null || typeof A != "object"
      ? null
      : ((A = (g && A[g]) || A["@@iterator"]),
        typeof A == "function" ? A : null);
  }
  var T = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    E = Object.assign,
    C = {};
  function R(A, Y, et) {
    ((this.props = A),
      (this.context = Y),
      (this.refs = C),
      (this.updater = et || T));
  }
  ((R.prototype.isReactComponent = {}),
    (R.prototype.setState = function (A, Y) {
      if (typeof A != "object" && typeof A != "function" && A != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, A, Y, "setState");
    }),
    (R.prototype.forceUpdate = function (A) {
      this.updater.enqueueForceUpdate(this, A, "forceUpdate");
    }));
  function D() {}
  D.prototype = R.prototype;
  function N(A, Y, et) {
    ((this.props = A),
      (this.context = Y),
      (this.refs = C),
      (this.updater = et || T));
  }
  var j = (N.prototype = new D());
  ((j.constructor = N), E(j, R.prototype), (j.isPureReactComponent = !0));
  var V = Array.isArray,
    U = { H: null, A: null, T: null, S: null, V: null },
    X = Object.prototype.hasOwnProperty;
  function Z(A, Y, et, J, ct, mt) {
    return (
      (et = mt.ref),
      {
        $$typeof: e,
        type: A,
        key: Y,
        ref: et !== void 0 ? et : null,
        props: mt,
      }
    );
  }
  function P(A, Y) {
    return Z(A.type, Y, void 0, void 0, void 0, A.props);
  }
  function I(A) {
    return typeof A == "object" && A !== null && A.$$typeof === e;
  }
  function W(A) {
    var Y = { "=": "=0", ":": "=2" };
    return (
      "$" +
      A.replace(/[=:]/g, function (et) {
        return Y[et];
      })
    );
  }
  var $ = /\/+/g;
  function st(A, Y) {
    return typeof A == "object" && A !== null && A.key != null
      ? W("" + A.key)
      : Y.toString(36);
  }
  function gt() {}
  function tt(A) {
    switch (A.status) {
      case "fulfilled":
        return A.value;
      case "rejected":
        throw A.reason;
      default:
        switch (
          (typeof A.status == "string"
            ? A.then(gt, gt)
            : ((A.status = "pending"),
              A.then(
                function (Y) {
                  A.status === "pending" &&
                    ((A.status = "fulfilled"), (A.value = Y));
                },
                function (Y) {
                  A.status === "pending" &&
                    ((A.status = "rejected"), (A.reason = Y));
                },
              )),
          A.status)
        ) {
          case "fulfilled":
            return A.value;
          case "rejected":
            throw A.reason;
        }
    }
    throw A;
  }
  function ut(A, Y, et, J, ct) {
    var mt = typeof A;
    (mt === "undefined" || mt === "boolean") && (A = null);
    var lt = !1;
    if (A === null) lt = !0;
    else
      switch (mt) {
        case "bigint":
        case "string":
        case "number":
          lt = !0;
          break;
        case "object":
          switch (A.$$typeof) {
            case e:
            case i:
              lt = !0;
              break;
            case y:
              return ((lt = A._init), ut(lt(A._payload), Y, et, J, ct));
          }
      }
    if (lt)
      return (
        (ct = ct(A)),
        (lt = J === "" ? "." + st(A, 0) : J),
        V(ct)
          ? ((et = ""),
            lt != null && (et = lt.replace($, "$&/") + "/"),
            ut(ct, Y, et, "", function (Ot) {
              return Ot;
            }))
          : ct != null &&
            (I(ct) &&
              (ct = P(
                ct,
                et +
                  (ct.key == null || (A && A.key === ct.key)
                    ? ""
                    : ("" + ct.key).replace($, "$&/") + "/") +
                  lt,
              )),
            Y.push(ct)),
        1
      );
    lt = 0;
    var Ft = J === "" ? "." : J + ":";
    if (V(A))
      for (var Rt = 0; Rt < A.length; Rt++)
        ((J = A[Rt]), (mt = Ft + st(J, Rt)), (lt += ut(J, Y, et, mt, ct)));
    else if (((Rt = x(A)), typeof Rt == "function"))
      for (A = Rt.call(A), Rt = 0; !(J = A.next()).done;)
        ((J = J.value), (mt = Ft + st(J, Rt++)), (lt += ut(J, Y, et, mt, ct)));
    else if (mt === "object") {
      if (typeof A.then == "function") return ut(tt(A), Y, et, J, ct);
      throw (
        (Y = String(A)),
        Error(
          "Objects are not valid as a React child (found: " +
            (Y === "[object Object]"
              ? "object with keys {" + Object.keys(A).join(", ") + "}"
              : Y) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return lt;
  }
  function z(A, Y, et) {
    if (A == null) return A;
    var J = [],
      ct = 0;
    return (
      ut(A, J, "", "", function (mt) {
        return Y.call(et, mt, ct++);
      }),
      J
    );
  }
  function Q(A) {
    if (A._status === -1) {
      var Y = A._result;
      ((Y = Y()),
        Y.then(
          function (et) {
            (A._status === 0 || A._status === -1) &&
              ((A._status = 1), (A._result = et));
          },
          function (et) {
            (A._status === 0 || A._status === -1) &&
              ((A._status = 2), (A._result = et));
          },
        ),
        A._status === -1 && ((A._status = 0), (A._result = Y)));
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var F =
    typeof reportError == "function"
      ? reportError
      : function (A) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var Y = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof A == "object" &&
                A !== null &&
                typeof A.message == "string"
                  ? String(A.message)
                  : String(A),
              error: A,
            });
            if (!window.dispatchEvent(Y)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", A);
            return;
          }
          console.error(A);
        };
  function nt() {}
  return (
    (vt.Children = {
      map: z,
      forEach: function (A, Y, et) {
        z(
          A,
          function () {
            Y.apply(this, arguments);
          },
          et,
        );
      },
      count: function (A) {
        var Y = 0;
        return (
          z(A, function () {
            Y++;
          }),
          Y
        );
      },
      toArray: function (A) {
        return (
          z(A, function (Y) {
            return Y;
          }) || []
        );
      },
      only: function (A) {
        if (!I(A))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return A;
      },
    }),
    (vt.Component = R),
    (vt.Fragment = a),
    (vt.Profiler = l),
    (vt.PureComponent = N),
    (vt.StrictMode = r),
    (vt.Suspense = p),
    (vt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = U),
    (vt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (A) {
        return U.H.useMemoCache(A);
      },
    }),
    (vt.cache = function (A) {
      return function () {
        return A.apply(null, arguments);
      };
    }),
    (vt.cloneElement = function (A, Y, et) {
      if (A == null)
        throw Error(
          "The argument must be a React element, but you passed " + A + ".",
        );
      var J = E({}, A.props),
        ct = A.key,
        mt = void 0;
      if (Y != null)
        for (lt in (Y.ref !== void 0 && (mt = void 0),
        Y.key !== void 0 && (ct = "" + Y.key),
        Y))
          !X.call(Y, lt) ||
            lt === "key" ||
            lt === "__self" ||
            lt === "__source" ||
            (lt === "ref" && Y.ref === void 0) ||
            (J[lt] = Y[lt]);
      var lt = arguments.length - 2;
      if (lt === 1) J.children = et;
      else if (1 < lt) {
        for (var Ft = Array(lt), Rt = 0; Rt < lt; Rt++)
          Ft[Rt] = arguments[Rt + 2];
        J.children = Ft;
      }
      return Z(A.type, ct, void 0, void 0, mt, J);
    }),
    (vt.createContext = function (A) {
      return (
        (A = {
          $$typeof: f,
          _currentValue: A,
          _currentValue2: A,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (A.Provider = A),
        (A.Consumer = { $$typeof: u, _context: A }),
        A
      );
    }),
    (vt.createElement = function (A, Y, et) {
      var J,
        ct = {},
        mt = null;
      if (Y != null)
        for (J in (Y.key !== void 0 && (mt = "" + Y.key), Y))
          X.call(Y, J) &&
            J !== "key" &&
            J !== "__self" &&
            J !== "__source" &&
            (ct[J] = Y[J]);
      var lt = arguments.length - 2;
      if (lt === 1) ct.children = et;
      else if (1 < lt) {
        for (var Ft = Array(lt), Rt = 0; Rt < lt; Rt++)
          Ft[Rt] = arguments[Rt + 2];
        ct.children = Ft;
      }
      if (A && A.defaultProps)
        for (J in ((lt = A.defaultProps), lt))
          ct[J] === void 0 && (ct[J] = lt[J]);
      return Z(A, mt, void 0, void 0, null, ct);
    }),
    (vt.createRef = function () {
      return { current: null };
    }),
    (vt.forwardRef = function (A) {
      return { $$typeof: h, render: A };
    }),
    (vt.isValidElement = I),
    (vt.lazy = function (A) {
      return { $$typeof: y, _payload: { _status: -1, _result: A }, _init: Q };
    }),
    (vt.memo = function (A, Y) {
      return { $$typeof: m, type: A, compare: Y === void 0 ? null : Y };
    }),
    (vt.startTransition = function (A) {
      var Y = U.T,
        et = {};
      U.T = et;
      try {
        var J = A(),
          ct = U.S;
        (ct !== null && ct(et, J),
          typeof J == "object" &&
            J !== null &&
            typeof J.then == "function" &&
            J.then(nt, F));
      } catch (mt) {
        F(mt);
      } finally {
        U.T = Y;
      }
    }),
    (vt.unstable_useCacheRefresh = function () {
      return U.H.useCacheRefresh();
    }),
    (vt.use = function (A) {
      return U.H.use(A);
    }),
    (vt.useActionState = function (A, Y, et) {
      return U.H.useActionState(A, Y, et);
    }),
    (vt.useCallback = function (A, Y) {
      return U.H.useCallback(A, Y);
    }),
    (vt.useContext = function (A) {
      return U.H.useContext(A);
    }),
    (vt.useDebugValue = function () {}),
    (vt.useDeferredValue = function (A, Y) {
      return U.H.useDeferredValue(A, Y);
    }),
    (vt.useEffect = function (A, Y, et) {
      var J = U.H;
      if (typeof et == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React.",
        );
      return J.useEffect(A, Y);
    }),
    (vt.useId = function () {
      return U.H.useId();
    }),
    (vt.useImperativeHandle = function (A, Y, et) {
      return U.H.useImperativeHandle(A, Y, et);
    }),
    (vt.useInsertionEffect = function (A, Y) {
      return U.H.useInsertionEffect(A, Y);
    }),
    (vt.useLayoutEffect = function (A, Y) {
      return U.H.useLayoutEffect(A, Y);
    }),
    (vt.useMemo = function (A, Y) {
      return U.H.useMemo(A, Y);
    }),
    (vt.useOptimistic = function (A, Y) {
      return U.H.useOptimistic(A, Y);
    }),
    (vt.useReducer = function (A, Y, et) {
      return U.H.useReducer(A, Y, et);
    }),
    (vt.useRef = function (A) {
      return U.H.useRef(A);
    }),
    (vt.useState = function (A) {
      return U.H.useState(A);
    }),
    (vt.useSyncExternalStore = function (A, Y, et) {
      return U.H.useSyncExternalStore(A, Y, et);
    }),
    (vt.useTransition = function () {
      return U.H.useTransition();
    }),
    (vt.version = "19.1.0"),
    vt
  );
}
var Ag;
function Nl() {
  return (Ag || ((Ag = 1), (df.exports = rE())), df.exports);
}
var hf = { exports: {} },
  de = {};
var Cg;
function oE() {
  if (Cg) return de;
  Cg = 1;
  var e = Nl();
  function i(p) {
    var m = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++)
        m += "&args[]=" + encodeURIComponent(arguments[y]);
    }
    return (
      "Minified React error #" +
      p +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function a() {}
  var r = {
      d: {
        f: a,
        r: function () {
          throw Error(i(522));
        },
        D: a,
        C: a,
        L: a,
        m: a,
        X: a,
        S: a,
        M: a,
      },
      p: 0,
      findDOMNode: null,
    },
    l = Symbol.for("react.portal");
  function u(p, m, y) {
    var g =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: l,
      key: g == null ? null : "" + g,
      children: p,
      containerInfo: m,
      implementation: y,
    };
  }
  var f = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(p, m) {
    if (p === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (de.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (de.createPortal = function (p, m) {
      var y =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(i(299));
      return u(p, m, null, y);
    }),
    (de.flushSync = function (p) {
      var m = f.T,
        y = r.p;
      try {
        if (((f.T = null), (r.p = 2), p)) return p();
      } finally {
        ((f.T = m), (r.p = y), r.d.f());
      }
    }),
    (de.preconnect = function (p, m) {
      typeof p == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        r.d.C(p, m));
    }),
    (de.prefetchDNS = function (p) {
      typeof p == "string" && r.d.D(p);
    }),
    (de.preinit = function (p, m) {
      if (typeof p == "string" && m && typeof m.as == "string") {
        var y = m.as,
          g = h(y, m.crossOrigin),
          x = typeof m.integrity == "string" ? m.integrity : void 0,
          T = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        y === "style"
          ? r.d.S(p, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: g,
              integrity: x,
              fetchPriority: T,
            })
          : y === "script" &&
            r.d.X(p, {
              crossOrigin: g,
              integrity: x,
              fetchPriority: T,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (de.preinitModule = function (p, m) {
      if (typeof p == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var y = h(m.as, m.crossOrigin);
            r.d.M(p, {
              crossOrigin: y,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && r.d.M(p);
    }),
    (de.preload = function (p, m) {
      if (
        typeof p == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var y = m.as,
          g = h(y, m.crossOrigin);
        r.d.L(p, y, {
          crossOrigin: g,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (de.preloadModule = function (p, m) {
      if (typeof p == "string")
        if (m) {
          var y = h(m.as, m.crossOrigin);
          r.d.m(p, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: y,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else r.d.m(p);
    }),
    (de.requestFormReset = function (p) {
      r.d.r(p);
    }),
    (de.unstable_batchedUpdates = function (p, m) {
      return p(m);
    }),
    (de.useFormState = function (p, m, y) {
      return f.H.useFormState(p, m, y);
    }),
    (de.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (de.version = "19.1.0"),
    de
  );
}
var Rg;
function eb() {
  if (Rg) return hf.exports;
  Rg = 1;
  function e() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (i) {
        console.error(i);
      }
  }
  return (e(), (hf.exports = oE()), hf.exports);
}
var Mg;
function lE() {
  if (Mg) return Ja;
  Mg = 1;
  var e = aE(),
    i = Nl(),
    a = eb();
  function r(t) {
    var n = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var s = 2; s < arguments.length; s++)
        n += "&args[]=" + encodeURIComponent(arguments[s]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      n +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function l(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function u(t) {
    var n = t,
      s = t;
    if (t.alternate) for (; n.return;) n = n.return;
    else {
      t = n;
      do ((n = t), (n.flags & 4098) !== 0 && (s = n.return), (t = n.return));
      while (t);
    }
    return n.tag === 3 ? s : null;
  }
  function f(t) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        (n === null && ((t = t.alternate), t !== null && (n = t.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function h(t) {
    if (u(t) !== t) throw Error(r(188));
  }
  function p(t) {
    var n = t.alternate;
    if (!n) {
      if (((n = u(t)), n === null)) throw Error(r(188));
      return n !== t ? null : t;
    }
    for (var s = t, o = n; ;) {
      var c = s.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (((o = c.return), o !== null)) {
          s = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d;) {
          if (d === s) return (h(c), t);
          if (d === o) return (h(c), n);
          d = d.sibling;
        }
        throw Error(r(188));
      }
      if (s.return !== o.return) ((s = c), (o = d));
      else {
        for (var v = !1, w = c.child; w;) {
          if (w === s) {
            ((v = !0), (s = c), (o = d));
            break;
          }
          if (w === o) {
            ((v = !0), (o = c), (s = d));
            break;
          }
          w = w.sibling;
        }
        if (!v) {
          for (w = d.child; w;) {
            if (w === s) {
              ((v = !0), (s = d), (o = c));
              break;
            }
            if (w === o) {
              ((v = !0), (o = d), (s = c));
              break;
            }
            w = w.sibling;
          }
          if (!v) throw Error(r(189));
        }
      }
      if (s.alternate !== o) throw Error(r(190));
    }
    if (s.tag !== 3) throw Error(r(188));
    return s.stateNode.current === s ? t : n;
  }
  function m(t) {
    var n = t.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return t;
    for (t = t.child; t !== null;) {
      if (((n = m(t)), n !== null)) return n;
      t = t.sibling;
    }
    return null;
  }
  var y = Object.assign,
    g = Symbol.for("react.element"),
    x = Symbol.for("react.transitional.element"),
    T = Symbol.for("react.portal"),
    E = Symbol.for("react.fragment"),
    C = Symbol.for("react.strict_mode"),
    R = Symbol.for("react.profiler"),
    D = Symbol.for("react.provider"),
    N = Symbol.for("react.consumer"),
    j = Symbol.for("react.context"),
    V = Symbol.for("react.forward_ref"),
    U = Symbol.for("react.suspense"),
    X = Symbol.for("react.suspense_list"),
    Z = Symbol.for("react.memo"),
    P = Symbol.for("react.lazy"),
    I = Symbol.for("react.activity"),
    W = Symbol.for("react.memo_cache_sentinel"),
    $ = Symbol.iterator;
  function st(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = ($ && t[$]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var gt = Symbol.for("react.client.reference");
  function tt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === gt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case E:
        return "Fragment";
      case R:
        return "Profiler";
      case C:
        return "StrictMode";
      case U:
        return "Suspense";
      case X:
        return "SuspenseList";
      case I:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case T:
          return "Portal";
        case j:
          return (t.displayName || "Context") + ".Provider";
        case N:
          return (t._context.displayName || "Context") + ".Consumer";
        case V:
          var n = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = n.displayName || n.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case Z:
          return (
            (n = t.displayName || null),
            n !== null ? n : tt(t.type) || "Memo"
          );
        case P:
          ((n = t._payload), (t = t._init));
          try {
            return tt(t(n));
          } catch {}
      }
    return null;
  }
  var ut = Array.isArray,
    z = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Q = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    F = { pending: !1, data: null, method: null, action: null },
    nt = [],
    A = -1;
  function Y(t) {
    return { current: t };
  }
  function et(t) {
    0 > A || ((t.current = nt[A]), (nt[A] = null), A--);
  }
  function J(t, n) {
    (A++, (nt[A] = t.current), (t.current = n));
  }
  var ct = Y(null),
    mt = Y(null),
    lt = Y(null),
    Ft = Y(null);
  function Rt(t, n) {
    switch ((J(lt, n), J(mt, t), J(ct, null), n.nodeType)) {
      case 9:
      case 11:
        t = (t = n.documentElement) && (t = t.namespaceURI) ? Qy(t) : 0;
        break;
      default:
        if (((t = n.tagName), (n = n.namespaceURI)))
          ((n = Qy(n)), (t = Zy(n, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (et(ct), J(ct, t));
  }
  function Ot() {
    (et(ct), et(mt), et(lt));
  }
  function Xn(t) {
    t.memoizedState !== null && J(Ft, t);
    var n = ct.current,
      s = Zy(n, t.type);
    n !== s && (J(mt, t), J(ct, s));
  }
  function Ze(t) {
    (mt.current === t && (et(ct), et(mt)),
      Ft.current === t && (et(Ft), (Ka._currentValue = F)));
  }
  var cn = Object.prototype.hasOwnProperty,
    En = e.unstable_scheduleCallback,
    Ee = e.unstable_cancelCallback,
    jw = e.unstable_shouldYield,
    _w = e.unstable_requestPaint,
    un = e.unstable_now,
    zw = e.unstable_getCurrentPriorityLevel,
    Mh = e.unstable_ImmediatePriority,
    Oh = e.unstable_UserBlockingPriority,
    Mr = e.unstable_NormalPriority,
    Vw = e.unstable_LowPriority,
    Dh = e.unstable_IdlePriority,
    Lw = e.log,
    kw = e.unstable_setDisableYieldValue,
    ea = null,
    Ae = null;
  function Fn(t) {
    if (
      (typeof Lw == "function" && kw(t),
      Ae && typeof Ae.setStrictMode == "function")
    )
      try {
        Ae.setStrictMode(ea, t);
      } catch {}
  }
  var Ce = Math.clz32 ? Math.clz32 : Uw,
    Pw = Math.log,
    Bw = Math.LN2;
  function Uw(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((Pw(t) / Bw) | 0)) | 0);
  }
  var Or = 256,
    Dr = 4194304;
  function Ei(t) {
    var n = t & 42;
    if (n !== 0) return n;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Nr(t, n, s) {
    var o = t.pendingLanes;
    if (o === 0) return 0;
    var c = 0,
      d = t.suspendedLanes,
      v = t.pingedLanes;
    t = t.warmLanes;
    var w = o & 134217727;
    return (
      w !== 0
        ? ((o = w & ~d),
          o !== 0
            ? (c = Ei(o))
            : ((v &= w),
              v !== 0
                ? (c = Ei(v))
                : s || ((s = w & ~t), s !== 0 && (c = Ei(s)))))
        : ((w = o & ~d),
          w !== 0
            ? (c = Ei(w))
            : v !== 0
              ? (c = Ei(v))
              : s || ((s = o & ~t), s !== 0 && (c = Ei(s)))),
      c === 0
        ? 0
        : n !== 0 &&
            n !== c &&
            (n & d) === 0 &&
            ((d = c & -c),
            (s = n & -n),
            d >= s || (d === 32 && (s & 4194048) !== 0))
          ? n
          : c
    );
  }
  function na(t, n) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & n) === 0;
  }
  function Hw(t, n) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Nh() {
    var t = Or;
    return ((Or <<= 1), (Or & 4194048) === 0 && (Or = 256), t);
  }
  function jh() {
    var t = Dr;
    return ((Dr <<= 1), (Dr & 62914560) === 0 && (Dr = 4194304), t);
  }
  function Wl(t) {
    for (var n = [], s = 0; 31 > s; s++) n.push(t);
    return n;
  }
  function ia(t, n) {
    ((t.pendingLanes |= n),
      n !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function qw(t, n, s, o, c, d) {
    var v = t.pendingLanes;
    ((t.pendingLanes = s),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= s),
      (t.entangledLanes &= s),
      (t.errorRecoveryDisabledLanes &= s),
      (t.shellSuspendCounter = 0));
    var w = t.entanglements,
      M = t.expirationTimes,
      k = t.hiddenUpdates;
    for (s = v & ~s; 0 < s;) {
      var q = 31 - Ce(s),
        K = 1 << q;
      ((w[q] = 0), (M[q] = -1));
      var B = k[q];
      if (B !== null)
        for (k[q] = null, q = 0; q < B.length; q++) {
          var H = B[q];
          H !== null && (H.lane &= -536870913);
        }
      s &= ~K;
    }
    (o !== 0 && _h(t, o, 0),
      d !== 0 && c === 0 && t.tag !== 0 && (t.suspendedLanes |= d & ~(v & ~n)));
  }
  function _h(t, n, s) {
    ((t.pendingLanes |= n), (t.suspendedLanes &= ~n));
    var o = 31 - Ce(n);
    ((t.entangledLanes |= n),
      (t.entanglements[o] = t.entanglements[o] | 1073741824 | (s & 4194090)));
  }
  function zh(t, n) {
    var s = (t.entangledLanes |= n);
    for (t = t.entanglements; s;) {
      var o = 31 - Ce(s),
        c = 1 << o;
      ((c & n) | (t[o] & n) && (t[o] |= n), (s &= ~c));
    }
  }
  function Il(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function $l(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Vh() {
    var t = Q.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : mg(t.type));
  }
  function Yw(t, n) {
    var s = Q.p;
    try {
      return ((Q.p = t), n());
    } finally {
      Q.p = s;
    }
  }
  var Kn = Math.random().toString(36).slice(2),
    ue = "__reactFiber$" + Kn,
    ge = "__reactProps$" + Kn,
    Ji = "__reactContainer$" + Kn,
    Jl = "__reactEvents$" + Kn,
    Gw = "__reactListeners$" + Kn,
    Xw = "__reactHandles$" + Kn,
    Lh = "__reactResources$" + Kn,
    sa = "__reactMarker$" + Kn;
  function tc(t) {
    (delete t[ue], delete t[ge], delete t[Jl], delete t[Gw], delete t[Xw]);
  }
  function ts(t) {
    var n = t[ue];
    if (n) return n;
    for (var s = t.parentNode; s;) {
      if ((n = s[Ji] || s[ue])) {
        if (
          ((s = n.alternate),
          n.child !== null || (s !== null && s.child !== null))
        )
          for (t = Jy(t); t !== null;) {
            if ((s = t[ue])) return s;
            t = Jy(t);
          }
        return n;
      }
      ((t = s), (s = t.parentNode));
    }
    return null;
  }
  function es(t) {
    if ((t = t[ue] || t[Ji])) {
      var n = t.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return t;
    }
    return null;
  }
  function aa(t) {
    var n = t.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return t.stateNode;
    throw Error(r(33));
  }
  function ns(t) {
    var n = t[Lh];
    return (
      n ||
        (n = t[Lh] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      n
    );
  }
  function ne(t) {
    t[sa] = !0;
  }
  var kh = new Set(),
    Ph = {};
  function Ai(t, n) {
    (is(t, n), is(t + "Capture", n));
  }
  function is(t, n) {
    for (Ph[t] = n, t = 0; t < n.length; t++) kh.add(n[t]);
  }
  var Fw = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Bh = {},
    Uh = {};
  function Kw(t) {
    return cn.call(Uh, t)
      ? !0
      : cn.call(Bh, t)
        ? !1
        : Fw.test(t)
          ? (Uh[t] = !0)
          : ((Bh[t] = !0), !1);
  }
  function jr(t, n, s) {
    if (Kw(n))
      if (s === null) t.removeAttribute(n);
      else {
        switch (typeof s) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(n);
            return;
          case "boolean":
            var o = n.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              t.removeAttribute(n);
              return;
            }
        }
        t.setAttribute(n, "" + s);
      }
  }
  function _r(t, n, s) {
    if (s === null) t.removeAttribute(n);
    else {
      switch (typeof s) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttribute(n, "" + s);
    }
  }
  function An(t, n, s, o) {
    if (o === null) t.removeAttribute(s);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(s);
          return;
      }
      t.setAttributeNS(n, s, "" + o);
    }
  }
  var ec, Hh;
  function ss(t) {
    if (ec === void 0)
      try {
        throw Error();
      } catch (s) {
        var n = s.stack.trim().match(/\n( *(at )?)/);
        ((ec = (n && n[1]) || ""),
          (Hh =
            -1 <
            s.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < s.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      ec +
      t +
      Hh
    );
  }
  var nc = !1;
  function ic(t, n) {
    if (!t || nc) return "";
    nc = !0;
    var s = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function () {
          try {
            if (n) {
              var K = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(K.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(K, []);
                } catch (H) {
                  var B = H;
                }
                Reflect.construct(t, [], K);
              } else {
                try {
                  K.call();
                } catch (H) {
                  B = H;
                }
                t.call(K.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (H) {
                B = H;
              }
              (K = t()) &&
                typeof K.catch == "function" &&
                K.catch(function () {});
            }
          } catch (H) {
            if (H && B && typeof H.stack == "string") return [H.stack, B.stack];
          }
          return [null, null];
        },
      };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var c = Object.getOwnPropertyDescriptor(
        o.DetermineComponentFrameRoot,
        "name",
      );
      c &&
        c.configurable &&
        Object.defineProperty(o.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var d = o.DetermineComponentFrameRoot(),
        v = d[0],
        w = d[1];
      if (v && w) {
        var M = v.split(`
`),
          k = w.split(`
`);
        for (
          c = o = 0;
          o < M.length && !M[o].includes("DetermineComponentFrameRoot");
        )
          o++;
        for (; c < k.length && !k[c].includes("DetermineComponentFrameRoot");)
          c++;
        if (o === M.length || c === k.length)
          for (
            o = M.length - 1, c = k.length - 1;
            1 <= o && 0 <= c && M[o] !== k[c];
          )
            c--;
        for (; 1 <= o && 0 <= c; o--, c--)
          if (M[o] !== k[c]) {
            if (o !== 1 || c !== 1)
              do
                if ((o--, c--, 0 > c || M[o] !== k[c])) {
                  var q =
                    `
` + M[o].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      q.includes("<anonymous>") &&
                      (q = q.replace("<anonymous>", t.displayName)),
                    q
                  );
                }
              while (1 <= o && 0 <= c);
            break;
          }
      }
    } finally {
      ((nc = !1), (Error.prepareStackTrace = s));
    }
    return (s = t ? t.displayName || t.name : "") ? ss(s) : "";
  }
  function Qw(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return ss(t.type);
      case 16:
        return ss("Lazy");
      case 13:
        return ss("Suspense");
      case 19:
        return ss("SuspenseList");
      case 0:
      case 15:
        return ic(t.type, !1);
      case 11:
        return ic(t.type.render, !1);
      case 1:
        return ic(t.type, !0);
      case 31:
        return ss("Activity");
      default:
        return "";
    }
  }
  function qh(t) {
    try {
      var n = "";
      do ((n += Qw(t)), (t = t.return));
      while (t);
      return n;
    } catch (s) {
      return (
        `
Error generating stack: ` +
        s.message +
        `
` +
        s.stack
      );
    }
  }
  function Pe(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Yh(t) {
    var n = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (n === "checkbox" || n === "radio")
    );
  }
  function Zw(t) {
    var n = Yh(t) ? "checked" : "value",
      s = Object.getOwnPropertyDescriptor(t.constructor.prototype, n),
      o = "" + t[n];
    if (
      !t.hasOwnProperty(n) &&
      typeof s < "u" &&
      typeof s.get == "function" &&
      typeof s.set == "function"
    ) {
      var c = s.get,
        d = s.set;
      return (
        Object.defineProperty(t, n, {
          configurable: !0,
          get: function () {
            return c.call(this);
          },
          set: function (v) {
            ((o = "" + v), d.call(this, v));
          },
        }),
        Object.defineProperty(t, n, { enumerable: s.enumerable }),
        {
          getValue: function () {
            return o;
          },
          setValue: function (v) {
            o = "" + v;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[n]);
          },
        }
      );
    }
  }
  function zr(t) {
    t._valueTracker || (t._valueTracker = Zw(t));
  }
  function Gh(t) {
    if (!t) return !1;
    var n = t._valueTracker;
    if (!n) return !0;
    var s = n.getValue(),
      o = "";
    return (
      t && (o = Yh(t) ? (t.checked ? "true" : "false") : t.value),
      (t = o),
      t !== s ? (n.setValue(t), !0) : !1
    );
  }
  function Vr(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Ww = /[\n"\\]/g;
  function Be(t) {
    return t.replace(Ww, function (n) {
      return "\\" + n.charCodeAt(0).toString(16) + " ";
    });
  }
  function sc(t, n, s, o, c, d, v, w) {
    ((t.name = ""),
      v != null &&
      typeof v != "function" &&
      typeof v != "symbol" &&
      typeof v != "boolean"
        ? (t.type = v)
        : t.removeAttribute("type"),
      n != null
        ? v === "number"
          ? ((n === 0 && t.value === "") || t.value != n) &&
            (t.value = "" + Pe(n))
          : t.value !== "" + Pe(n) && (t.value = "" + Pe(n))
        : (v !== "submit" && v !== "reset") || t.removeAttribute("value"),
      n != null
        ? ac(t, v, Pe(n))
        : s != null
          ? ac(t, v, Pe(s))
          : o != null && t.removeAttribute("value"),
      c == null && d != null && (t.defaultChecked = !!d),
      c != null &&
        (t.checked = c && typeof c != "function" && typeof c != "symbol"),
      w != null &&
      typeof w != "function" &&
      typeof w != "symbol" &&
      typeof w != "boolean"
        ? (t.name = "" + Pe(w))
        : t.removeAttribute("name"));
  }
  function Xh(t, n, s, o, c, d, v, w) {
    if (
      (d != null &&
        typeof d != "function" &&
        typeof d != "symbol" &&
        typeof d != "boolean" &&
        (t.type = d),
      n != null || s != null)
    ) {
      if (!((d !== "submit" && d !== "reset") || n != null)) return;
      ((s = s != null ? "" + Pe(s) : ""),
        (n = n != null ? "" + Pe(n) : s),
        w || n === t.value || (t.value = n),
        (t.defaultValue = n));
    }
    ((o = o ?? c),
      (o = typeof o != "function" && typeof o != "symbol" && !!o),
      (t.checked = w ? t.checked : !!o),
      (t.defaultChecked = !!o),
      v != null &&
        typeof v != "function" &&
        typeof v != "symbol" &&
        typeof v != "boolean" &&
        (t.name = v));
  }
  function ac(t, n, s) {
    (n === "number" && Vr(t.ownerDocument) === t) ||
      t.defaultValue === "" + s ||
      (t.defaultValue = "" + s);
  }
  function as(t, n, s, o) {
    if (((t = t.options), n)) {
      n = {};
      for (var c = 0; c < s.length; c++) n["$" + s[c]] = !0;
      for (s = 0; s < t.length; s++)
        ((c = n.hasOwnProperty("$" + t[s].value)),
          t[s].selected !== c && (t[s].selected = c),
          c && o && (t[s].defaultSelected = !0));
    } else {
      for (s = "" + Pe(s), n = null, c = 0; c < t.length; c++) {
        if (t[c].value === s) {
          ((t[c].selected = !0), o && (t[c].defaultSelected = !0));
          return;
        }
        n !== null || t[c].disabled || (n = t[c]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Fh(t, n, s) {
    if (
      n != null &&
      ((n = "" + Pe(n)), n !== t.value && (t.value = n), s == null)
    ) {
      t.defaultValue !== n && (t.defaultValue = n);
      return;
    }
    t.defaultValue = s != null ? "" + Pe(s) : "";
  }
  function Kh(t, n, s, o) {
    if (n == null) {
      if (o != null) {
        if (s != null) throw Error(r(92));
        if (ut(o)) {
          if (1 < o.length) throw Error(r(93));
          o = o[0];
        }
        s = o;
      }
      (s == null && (s = ""), (n = s));
    }
    ((s = Pe(n)),
      (t.defaultValue = s),
      (o = t.textContent),
      o === s && o !== "" && o !== null && (t.value = o));
  }
  function rs(t, n) {
    if (n) {
      var s = t.firstChild;
      if (s && s === t.lastChild && s.nodeType === 3) {
        s.nodeValue = n;
        return;
      }
    }
    t.textContent = n;
  }
  var Iw = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Qh(t, n, s) {
    var o = n.indexOf("--") === 0;
    s == null || typeof s == "boolean" || s === ""
      ? o
        ? t.setProperty(n, "")
        : n === "float"
          ? (t.cssFloat = "")
          : (t[n] = "")
      : o
        ? t.setProperty(n, s)
        : typeof s != "number" || s === 0 || Iw.has(n)
          ? n === "float"
            ? (t.cssFloat = s)
            : (t[n] = ("" + s).trim())
          : (t[n] = s + "px");
  }
  function Zh(t, n, s) {
    if (n != null && typeof n != "object") throw Error(r(62));
    if (((t = t.style), s != null)) {
      for (var o in s)
        !s.hasOwnProperty(o) ||
          (n != null && n.hasOwnProperty(o)) ||
          (o.indexOf("--") === 0
            ? t.setProperty(o, "")
            : o === "float"
              ? (t.cssFloat = "")
              : (t[o] = ""));
      for (var c in n)
        ((o = n[c]), n.hasOwnProperty(c) && s[c] !== o && Qh(t, c, o));
    } else for (var d in n) n.hasOwnProperty(d) && Qh(t, d, n[d]);
  }
  function rc(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var $w = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Jw =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Lr(t) {
    return Jw.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var oc = null;
  function lc(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var os = null,
    ls = null;
  function Wh(t) {
    var n = es(t);
    if (n && (t = n.stateNode)) {
      var s = t[ge] || null;
      t: switch (((t = n.stateNode), n.type)) {
        case "input":
          if (
            (sc(
              t,
              s.value,
              s.defaultValue,
              s.defaultValue,
              s.checked,
              s.defaultChecked,
              s.type,
              s.name,
            ),
            (n = s.name),
            s.type === "radio" && n != null)
          ) {
            for (s = t; s.parentNode;) s = s.parentNode;
            for (
              s = s.querySelectorAll(
                'input[name="' + Be("" + n) + '"][type="radio"]',
              ),
                n = 0;
              n < s.length;
              n++
            ) {
              var o = s[n];
              if (o !== t && o.form === t.form) {
                var c = o[ge] || null;
                if (!c) throw Error(r(90));
                sc(
                  o,
                  c.value,
                  c.defaultValue,
                  c.defaultValue,
                  c.checked,
                  c.defaultChecked,
                  c.type,
                  c.name,
                );
              }
            }
            for (n = 0; n < s.length; n++)
              ((o = s[n]), o.form === t.form && Gh(o));
          }
          break t;
        case "textarea":
          Fh(t, s.value, s.defaultValue);
          break t;
        case "select":
          ((n = s.value), n != null && as(t, !!s.multiple, n, !1));
      }
    }
  }
  var cc = !1;
  function Ih(t, n, s) {
    if (cc) return t(n, s);
    cc = !0;
    try {
      var o = t(n);
      return o;
    } finally {
      if (
        ((cc = !1),
        (os !== null || ls !== null) &&
          (So(), os && ((n = os), (t = ls), (ls = os = null), Wh(n), t)))
      )
        for (n = 0; n < t.length; n++) Wh(t[n]);
    }
  }
  function ra(t, n) {
    var s = t.stateNode;
    if (s === null) return null;
    var o = s[ge] || null;
    if (o === null) return null;
    s = o[n];
    t: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((o = !o.disabled) ||
          ((t = t.type),
          (o = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !o));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (s && typeof s != "function") throw Error(r(231, n, typeof s));
    return s;
  }
  var Cn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    uc = !1;
  if (Cn)
    try {
      var oa = {};
      (Object.defineProperty(oa, "passive", {
        get: function () {
          uc = !0;
        },
      }),
        window.addEventListener("test", oa, oa),
        window.removeEventListener("test", oa, oa));
    } catch {
      uc = !1;
    }
  var Qn = null,
    fc = null,
    kr = null;
  function $h() {
    if (kr) return kr;
    var t,
      n = fc,
      s = n.length,
      o,
      c = "value" in Qn ? Qn.value : Qn.textContent,
      d = c.length;
    for (t = 0; t < s && n[t] === c[t]; t++);
    var v = s - t;
    for (o = 1; o <= v && n[s - o] === c[d - o]; o++);
    return (kr = c.slice(t, 1 < o ? 1 - o : void 0));
  }
  function Pr(t) {
    var n = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && n === 13 && (t = 13))
        : (t = n),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Br() {
    return !0;
  }
  function Jh() {
    return !1;
  }
  function ve(t) {
    function n(s, o, c, d, v) {
      ((this._reactName = s),
        (this._targetInst = c),
        (this.type = o),
        (this.nativeEvent = d),
        (this.target = v),
        (this.currentTarget = null));
      for (var w in t)
        t.hasOwnProperty(w) && ((s = t[w]), (this[w] = s ? s(d) : d[w]));
      return (
        (this.isDefaultPrevented = (
          d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1
        )
          ? Br
          : Jh),
        (this.isPropagationStopped = Jh),
        this
      );
    }
    return (
      y(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var s = this.nativeEvent;
          s &&
            (s.preventDefault
              ? s.preventDefault()
              : typeof s.returnValue != "unknown" && (s.returnValue = !1),
            (this.isDefaultPrevented = Br));
        },
        stopPropagation: function () {
          var s = this.nativeEvent;
          s &&
            (s.stopPropagation
              ? s.stopPropagation()
              : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0),
            (this.isPropagationStopped = Br));
        },
        persist: function () {},
        isPersistent: Br,
      }),
      n
    );
  }
  var Ci = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ur = ve(Ci),
    la = y({}, Ci, { view: 0, detail: 0 }),
    tS = ve(la),
    dc,
    hc,
    ca,
    Hr = y({}, la, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: pc,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== ca &&
              (ca && t.type === "mousemove"
                ? ((dc = t.screenX - ca.screenX), (hc = t.screenY - ca.screenY))
                : (hc = dc = 0),
              (ca = t)),
            dc);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : hc;
      },
    }),
    tm = ve(Hr),
    eS = y({}, Hr, { dataTransfer: 0 }),
    nS = ve(eS),
    iS = y({}, la, { relatedTarget: 0 }),
    mc = ve(iS),
    sS = y({}, Ci, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    aS = ve(sS),
    rS = y({}, Ci, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    oS = ve(rS),
    lS = y({}, Ci, { data: 0 }),
    em = ve(lS),
    cS = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    uS = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    fS = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function dS(t) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(t)
      : (t = fS[t])
        ? !!n[t]
        : !1;
  }
  function pc() {
    return dS;
  }
  var hS = y({}, la, {
      key: function (t) {
        if (t.key) {
          var n = cS[t.key] || t.key;
          if (n !== "Unidentified") return n;
        }
        return t.type === "keypress"
          ? ((t = Pr(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? uS[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: pc,
      charCode: function (t) {
        return t.type === "keypress" ? Pr(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Pr(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    mS = ve(hS),
    pS = y({}, Hr, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    nm = ve(pS),
    yS = y({}, la, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: pc,
    }),
    gS = ve(yS),
    vS = y({}, Ci, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    bS = ve(vS),
    xS = y({}, Hr, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    wS = ve(xS),
    SS = y({}, Ci, { newState: 0, oldState: 0 }),
    TS = ve(SS),
    ES = [9, 13, 27, 32],
    yc = Cn && "CompositionEvent" in window,
    ua = null;
  Cn && "documentMode" in document && (ua = document.documentMode);
  var AS = Cn && "TextEvent" in window && !ua,
    im = Cn && (!yc || (ua && 8 < ua && 11 >= ua)),
    sm = " ",
    am = !1;
  function rm(t, n) {
    switch (t) {
      case "keyup":
        return ES.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function om(t) {
    return (
      (t = t.detail),
      typeof t == "object" && "data" in t ? t.data : null
    );
  }
  var cs = !1;
  function CS(t, n) {
    switch (t) {
      case "compositionend":
        return om(n);
      case "keypress":
        return n.which !== 32 ? null : ((am = !0), sm);
      case "textInput":
        return ((t = n.data), t === sm && am ? null : t);
      default:
        return null;
    }
  }
  function RS(t, n) {
    if (cs)
      return t === "compositionend" || (!yc && rm(t, n))
        ? ((t = $h()), (kr = fc = Qn = null), (cs = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return im && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var MS = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function lm(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return n === "input" ? !!MS[t.type] : n === "textarea";
  }
  function cm(t, n, s, o) {
    (os ? (ls ? ls.push(o) : (ls = [o])) : (os = o),
      (n = Mo(n, "onChange")),
      0 < n.length &&
        ((s = new Ur("onChange", "change", null, s, o)),
        t.push({ event: s, listeners: n })));
  }
  var fa = null,
    da = null;
  function OS(t) {
    Yy(t, 0);
  }
  function qr(t) {
    var n = aa(t);
    if (Gh(n)) return t;
  }
  function um(t, n) {
    if (t === "change") return n;
  }
  var fm = !1;
  if (Cn) {
    var gc;
    if (Cn) {
      var vc = "oninput" in document;
      if (!vc) {
        var dm = document.createElement("div");
        (dm.setAttribute("oninput", "return;"),
          (vc = typeof dm.oninput == "function"));
      }
      gc = vc;
    } else gc = !1;
    fm = gc && (!document.documentMode || 9 < document.documentMode);
  }
  function hm() {
    fa && (fa.detachEvent("onpropertychange", mm), (da = fa = null));
  }
  function mm(t) {
    if (t.propertyName === "value" && qr(da)) {
      var n = [];
      (cm(n, da, t, lc(t)), Ih(OS, n));
    }
  }
  function DS(t, n, s) {
    t === "focusin"
      ? (hm(), (fa = n), (da = s), fa.attachEvent("onpropertychange", mm))
      : t === "focusout" && hm();
  }
  function NS(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return qr(da);
  }
  function jS(t, n) {
    if (t === "click") return qr(n);
  }
  function _S(t, n) {
    if (t === "input" || t === "change") return qr(n);
  }
  function zS(t, n) {
    return (t === n && (t !== 0 || 1 / t === 1 / n)) || (t !== t && n !== n);
  }
  var Re = typeof Object.is == "function" ? Object.is : zS;
  function ha(t, n) {
    if (Re(t, n)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof n != "object" ||
      n === null
    )
      return !1;
    var s = Object.keys(t),
      o = Object.keys(n);
    if (s.length !== o.length) return !1;
    for (o = 0; o < s.length; o++) {
      var c = s[o];
      if (!cn.call(n, c) || !Re(t[c], n[c])) return !1;
    }
    return !0;
  }
  function pm(t) {
    for (; t && t.firstChild;) t = t.firstChild;
    return t;
  }
  function ym(t, n) {
    var s = pm(t);
    t = 0;
    for (var o; s;) {
      if (s.nodeType === 3) {
        if (((o = t + s.textContent.length), t <= n && o >= n))
          return { node: s, offset: n - t };
        t = o;
      }
      t: {
        for (; s;) {
          if (s.nextSibling) {
            s = s.nextSibling;
            break t;
          }
          s = s.parentNode;
        }
        s = void 0;
      }
      s = pm(s);
    }
  }
  function gm(t, n) {
    return t && n
      ? t === n
        ? !0
        : t && t.nodeType === 3
          ? !1
          : n && n.nodeType === 3
            ? gm(t, n.parentNode)
            : "contains" in t
              ? t.contains(n)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(n) & 16)
                : !1
      : !1;
  }
  function vm(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var n = Vr(t.document); n instanceof t.HTMLIFrameElement;) {
      try {
        var s = typeof n.contentWindow.location.href == "string";
      } catch {
        s = !1;
      }
      if (s) t = n.contentWindow;
      else break;
      n = Vr(t.document);
    }
    return n;
  }
  function bc(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      n &&
      ((n === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        n === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var VS = Cn && "documentMode" in document && 11 >= document.documentMode,
    us = null,
    xc = null,
    ma = null,
    wc = !1;
  function bm(t, n, s) {
    var o =
      s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    wc ||
      us == null ||
      us !== Vr(o) ||
      ((o = us),
      "selectionStart" in o && bc(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = (
            (o.ownerDocument && o.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (ma && ha(ma, o)) ||
        ((ma = o),
        (o = Mo(xc, "onSelect")),
        0 < o.length &&
          ((n = new Ur("onSelect", "select", null, n, s)),
          t.push({ event: n, listeners: o }),
          (n.target = us))));
  }
  function Ri(t, n) {
    var s = {};
    return (
      (s[t.toLowerCase()] = n.toLowerCase()),
      (s["Webkit" + t] = "webkit" + n),
      (s["Moz" + t] = "moz" + n),
      s
    );
  }
  var fs = {
      animationend: Ri("Animation", "AnimationEnd"),
      animationiteration: Ri("Animation", "AnimationIteration"),
      animationstart: Ri("Animation", "AnimationStart"),
      transitionrun: Ri("Transition", "TransitionRun"),
      transitionstart: Ri("Transition", "TransitionStart"),
      transitioncancel: Ri("Transition", "TransitionCancel"),
      transitionend: Ri("Transition", "TransitionEnd"),
    },
    Sc = {},
    xm = {};
  Cn &&
    ((xm = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete fs.animationend.animation,
      delete fs.animationiteration.animation,
      delete fs.animationstart.animation),
    "TransitionEvent" in window || delete fs.transitionend.transition);
  function Mi(t) {
    if (Sc[t]) return Sc[t];
    if (!fs[t]) return t;
    var n = fs[t],
      s;
    for (s in n) if (n.hasOwnProperty(s) && s in xm) return (Sc[t] = n[s]);
    return t;
  }
  var wm = Mi("animationend"),
    Sm = Mi("animationiteration"),
    Tm = Mi("animationstart"),
    LS = Mi("transitionrun"),
    kS = Mi("transitionstart"),
    PS = Mi("transitioncancel"),
    Em = Mi("transitionend"),
    Am = new Map(),
    Tc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Tc.push("scrollEnd");
  function We(t, n) {
    (Am.set(t, n), Ai(n, [t]));
  }
  var Cm = new WeakMap();
  function Ue(t, n) {
    if (typeof t == "object" && t !== null) {
      var s = Cm.get(t);
      return s !== void 0
        ? s
        : ((n = { value: t, source: n, stack: qh(n) }), Cm.set(t, n), n);
    }
    return { value: t, source: n, stack: qh(n) };
  }
  var He = [],
    ds = 0,
    Ec = 0;
  function Yr() {
    for (var t = ds, n = (Ec = ds = 0); n < t;) {
      var s = He[n];
      He[n++] = null;
      var o = He[n];
      He[n++] = null;
      var c = He[n];
      He[n++] = null;
      var d = He[n];
      if (((He[n++] = null), o !== null && c !== null)) {
        var v = o.pending;
        (v === null ? (c.next = c) : ((c.next = v.next), (v.next = c)),
          (o.pending = c));
      }
      d !== 0 && Rm(s, c, d);
    }
  }
  function Gr(t, n, s, o) {
    ((He[ds++] = t),
      (He[ds++] = n),
      (He[ds++] = s),
      (He[ds++] = o),
      (Ec |= o),
      (t.lanes |= o),
      (t = t.alternate),
      t !== null && (t.lanes |= o));
  }
  function Ac(t, n, s, o) {
    return (Gr(t, n, s, o), Xr(t));
  }
  function hs(t, n) {
    return (Gr(t, null, null, n), Xr(t));
  }
  function Rm(t, n, s) {
    t.lanes |= s;
    var o = t.alternate;
    o !== null && (o.lanes |= s);
    for (var c = !1, d = t.return; d !== null;)
      ((d.childLanes |= s),
        (o = d.alternate),
        o !== null && (o.childLanes |= s),
        d.tag === 22 &&
          ((t = d.stateNode), t === null || t._visibility & 1 || (c = !0)),
        (t = d),
        (d = d.return));
    return t.tag === 3
      ? ((d = t.stateNode),
        c &&
          n !== null &&
          ((c = 31 - Ce(s)),
          (t = d.hiddenUpdates),
          (o = t[c]),
          o === null ? (t[c] = [n]) : o.push(n),
          (n.lane = s | 536870912)),
        d)
      : null;
  }
  function Xr(t) {
    if (50 < Ba) throw ((Ba = 0), (Nu = null), Error(r(185)));
    for (var n = t.return; n !== null;) ((t = n), (n = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var ms = {};
  function BS(t, n, s, o) {
    ((this.tag = t),
      (this.key = s),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = n),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = o),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Me(t, n, s, o) {
    return new BS(t, n, s, o);
  }
  function Cc(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function Rn(t, n) {
    var s = t.alternate;
    return (
      s === null
        ? ((s = Me(t.tag, n, t.key, t.mode)),
          (s.elementType = t.elementType),
          (s.type = t.type),
          (s.stateNode = t.stateNode),
          (s.alternate = t),
          (t.alternate = s))
        : ((s.pendingProps = n),
          (s.type = t.type),
          (s.flags = 0),
          (s.subtreeFlags = 0),
          (s.deletions = null)),
      (s.flags = t.flags & 65011712),
      (s.childLanes = t.childLanes),
      (s.lanes = t.lanes),
      (s.child = t.child),
      (s.memoizedProps = t.memoizedProps),
      (s.memoizedState = t.memoizedState),
      (s.updateQueue = t.updateQueue),
      (n = t.dependencies),
      (s.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (s.sibling = t.sibling),
      (s.index = t.index),
      (s.ref = t.ref),
      (s.refCleanup = t.refCleanup),
      s
    );
  }
  function Mm(t, n) {
    t.flags &= 65011714;
    var s = t.alternate;
    return (
      s === null
        ? ((t.childLanes = 0),
          (t.lanes = n),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = s.childLanes),
          (t.lanes = s.lanes),
          (t.child = s.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = s.memoizedProps),
          (t.memoizedState = s.memoizedState),
          (t.updateQueue = s.updateQueue),
          (t.type = s.type),
          (n = s.dependencies),
          (t.dependencies =
            n === null
              ? null
              : { lanes: n.lanes, firstContext: n.firstContext })),
      t
    );
  }
  function Fr(t, n, s, o, c, d) {
    var v = 0;
    if (((o = t), typeof t == "function")) Cc(t) && (v = 1);
    else if (typeof t == "string")
      v = HT(t, s, ct.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case I:
          return ((t = Me(31, s, n, c)), (t.elementType = I), (t.lanes = d), t);
        case E:
          return Oi(s.children, c, d, n);
        case C:
          ((v = 8), (c |= 24));
          break;
        case R:
          return (
            (t = Me(12, s, n, c | 2)),
            (t.elementType = R),
            (t.lanes = d),
            t
          );
        case U:
          return ((t = Me(13, s, n, c)), (t.elementType = U), (t.lanes = d), t);
        case X:
          return ((t = Me(19, s, n, c)), (t.elementType = X), (t.lanes = d), t);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case D:
              case j:
                v = 10;
                break t;
              case N:
                v = 9;
                break t;
              case V:
                v = 11;
                break t;
              case Z:
                v = 14;
                break t;
              case P:
                ((v = 16), (o = null));
                break t;
            }
          ((v = 29),
            (s = Error(r(130, t === null ? "null" : typeof t, ""))),
            (o = null));
      }
    return (
      (n = Me(v, s, n, c)),
      (n.elementType = t),
      (n.type = o),
      (n.lanes = d),
      n
    );
  }
  function Oi(t, n, s, o) {
    return ((t = Me(7, t, o, n)), (t.lanes = s), t);
  }
  function Rc(t, n, s) {
    return ((t = Me(6, t, null, n)), (t.lanes = s), t);
  }
  function Mc(t, n, s) {
    return (
      (n = Me(4, t.children !== null ? t.children : [], t.key, n)),
      (n.lanes = s),
      (n.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      n
    );
  }
  var ps = [],
    ys = 0,
    Kr = null,
    Qr = 0,
    qe = [],
    Ye = 0,
    Di = null,
    Mn = 1,
    On = "";
  function Ni(t, n) {
    ((ps[ys++] = Qr), (ps[ys++] = Kr), (Kr = t), (Qr = n));
  }
  function Om(t, n, s) {
    ((qe[Ye++] = Mn), (qe[Ye++] = On), (qe[Ye++] = Di), (Di = t));
    var o = Mn;
    t = On;
    var c = 32 - Ce(o) - 1;
    ((o &= ~(1 << c)), (s += 1));
    var d = 32 - Ce(n) + c;
    if (30 < d) {
      var v = c - (c % 5);
      ((d = (o & ((1 << v) - 1)).toString(32)),
        (o >>= v),
        (c -= v),
        (Mn = (1 << (32 - Ce(n) + c)) | (s << c) | o),
        (On = d + t));
    } else ((Mn = (1 << d) | (s << c) | o), (On = t));
  }
  function Oc(t) {
    t.return !== null && (Ni(t, 1), Om(t, 1, 0));
  }
  function Dc(t) {
    for (; t === Kr;)
      ((Kr = ps[--ys]), (ps[ys] = null), (Qr = ps[--ys]), (ps[ys] = null));
    for (; t === Di;)
      ((Di = qe[--Ye]),
        (qe[Ye] = null),
        (On = qe[--Ye]),
        (qe[Ye] = null),
        (Mn = qe[--Ye]),
        (qe[Ye] = null));
  }
  var he = null,
    Ht = null,
    Mt = !1,
    ji = null,
    fn = !1,
    Nc = Error(r(519));
  function _i(t) {
    var n = Error(r(418, ""));
    throw (ga(Ue(n, t)), Nc);
  }
  function Dm(t) {
    var n = t.stateNode,
      s = t.type,
      o = t.memoizedProps;
    switch (((n[ue] = t), (n[ge] = o), s)) {
      case "dialog":
        (Tt("cancel", n), Tt("close", n));
        break;
      case "iframe":
      case "object":
      case "embed":
        Tt("load", n);
        break;
      case "video":
      case "audio":
        for (s = 0; s < Ha.length; s++) Tt(Ha[s], n);
        break;
      case "source":
        Tt("error", n);
        break;
      case "img":
      case "image":
      case "link":
        (Tt("error", n), Tt("load", n));
        break;
      case "details":
        Tt("toggle", n);
        break;
      case "input":
        (Tt("invalid", n),
          Xh(
            n,
            o.value,
            o.defaultValue,
            o.checked,
            o.defaultChecked,
            o.type,
            o.name,
            !0,
          ),
          zr(n));
        break;
      case "select":
        Tt("invalid", n);
        break;
      case "textarea":
        (Tt("invalid", n), Kh(n, o.value, o.defaultValue, o.children), zr(n));
    }
    ((s = o.children),
      (typeof s != "string" && typeof s != "number" && typeof s != "bigint") ||
      n.textContent === "" + s ||
      o.suppressHydrationWarning === !0 ||
      Ky(n.textContent, s)
        ? (o.popover != null && (Tt("beforetoggle", n), Tt("toggle", n)),
          o.onScroll != null && Tt("scroll", n),
          o.onScrollEnd != null && Tt("scrollend", n),
          o.onClick != null && (n.onclick = Oo),
          (n = !0))
        : (n = !1),
      n || _i(t));
  }
  function Nm(t) {
    for (he = t.return; he;)
      switch (he.tag) {
        case 5:
        case 13:
          fn = !1;
          return;
        case 27:
        case 3:
          fn = !0;
          return;
        default:
          he = he.return;
      }
  }
  function pa(t) {
    if (t !== he) return !1;
    if (!Mt) return (Nm(t), (Mt = !0), !1);
    var n = t.tag,
      s;
    if (
      ((s = n !== 3 && n !== 27) &&
        ((s = n === 5) &&
          ((s = t.type),
          (s =
            !(s !== "form" && s !== "button") || Ku(t.type, t.memoizedProps))),
        (s = !s)),
      s && Ht && _i(t),
      Nm(t),
      n === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(r(317));
      t: {
        for (t = t.nextSibling, n = 0; t;) {
          if (t.nodeType === 8)
            if (((s = t.data), s === "/$")) {
              if (n === 0) {
                Ht = $e(t.nextSibling);
                break t;
              }
              n--;
            } else (s !== "$" && s !== "$!" && s !== "$?") || n++;
          t = t.nextSibling;
        }
        Ht = null;
      }
    } else
      n === 27
        ? ((n = Ht), ui(t.type) ? ((t = Iu), (Iu = null), (Ht = t)) : (Ht = n))
        : (Ht = he ? $e(t.stateNode.nextSibling) : null);
    return !0;
  }
  function ya() {
    ((Ht = he = null), (Mt = !1));
  }
  function jm() {
    var t = ji;
    return (
      t !== null &&
        (we === null ? (we = t) : we.push.apply(we, t), (ji = null)),
      t
    );
  }
  function ga(t) {
    ji === null ? (ji = [t]) : ji.push(t);
  }
  var jc = Y(null),
    zi = null,
    Dn = null;
  function Zn(t, n, s) {
    (J(jc, n._currentValue), (n._currentValue = s));
  }
  function Nn(t) {
    ((t._currentValue = jc.current), et(jc));
  }
  function _c(t, n, s) {
    for (; t !== null;) {
      var o = t.alternate;
      if (
        ((t.childLanes & n) !== n
          ? ((t.childLanes |= n), o !== null && (o.childLanes |= n))
          : o !== null && (o.childLanes & n) !== n && (o.childLanes |= n),
        t === s)
      )
        break;
      t = t.return;
    }
  }
  function zc(t, n, s, o) {
    var c = t.child;
    for (c !== null && (c.return = t); c !== null;) {
      var d = c.dependencies;
      if (d !== null) {
        var v = c.child;
        d = d.firstContext;
        t: for (; d !== null;) {
          var w = d;
          d = c;
          for (var M = 0; M < n.length; M++)
            if (w.context === n[M]) {
              ((d.lanes |= s),
                (w = d.alternate),
                w !== null && (w.lanes |= s),
                _c(d.return, s, t),
                o || (v = null));
              break t;
            }
          d = w.next;
        }
      } else if (c.tag === 18) {
        if (((v = c.return), v === null)) throw Error(r(341));
        ((v.lanes |= s),
          (d = v.alternate),
          d !== null && (d.lanes |= s),
          _c(v, s, t),
          (v = null));
      } else v = c.child;
      if (v !== null) v.return = c;
      else
        for (v = c; v !== null;) {
          if (v === t) {
            v = null;
            break;
          }
          if (((c = v.sibling), c !== null)) {
            ((c.return = v.return), (v = c));
            break;
          }
          v = v.return;
        }
      c = v;
    }
  }
  function va(t, n, s, o) {
    t = null;
    for (var c = n, d = !1; c !== null;) {
      if (!d) {
        if ((c.flags & 524288) !== 0) d = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var v = c.alternate;
        if (v === null) throw Error(r(387));
        if (((v = v.memoizedProps), v !== null)) {
          var w = c.type;
          Re(c.pendingProps.value, v.value) ||
            (t !== null ? t.push(w) : (t = [w]));
        }
      } else if (c === Ft.current) {
        if (((v = c.alternate), v === null)) throw Error(r(387));
        v.memoizedState.memoizedState !== c.memoizedState.memoizedState &&
          (t !== null ? t.push(Ka) : (t = [Ka]));
      }
      c = c.return;
    }
    (t !== null && zc(n, t, s, o), (n.flags |= 262144));
  }
  function Zr(t) {
    for (t = t.firstContext; t !== null;) {
      if (!Re(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Vi(t) {
    ((zi = t),
      (Dn = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function fe(t) {
    return _m(zi, t);
  }
  function Wr(t, n) {
    return (zi === null && Vi(t), _m(t, n));
  }
  function _m(t, n) {
    var s = n._currentValue;
    if (((n = { context: n, memoizedValue: s, next: null }), Dn === null)) {
      if (t === null) throw Error(r(308));
      ((Dn = n),
        (t.dependencies = { lanes: 0, firstContext: n }),
        (t.flags |= 524288));
    } else Dn = Dn.next = n;
    return s;
  }
  var US =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              n = (this.signal = {
                aborted: !1,
                addEventListener: function (s, o) {
                  t.push(o);
                },
              });
            this.abort = function () {
              ((n.aborted = !0),
                t.forEach(function (s) {
                  return s();
                }));
            };
          },
    HS = e.unstable_scheduleCallback,
    qS = e.unstable_NormalPriority,
    Wt = {
      $$typeof: j,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Vc() {
    return { controller: new US(), data: new Map(), refCount: 0 };
  }
  function ba(t) {
    (t.refCount--,
      t.refCount === 0 &&
        HS(qS, function () {
          t.controller.abort();
        }));
  }
  var xa = null,
    Lc = 0,
    gs = 0,
    vs = null;
  function YS(t, n) {
    if (xa === null) {
      var s = (xa = []);
      ((Lc = 0),
        (gs = Pu()),
        (vs = {
          status: "pending",
          value: void 0,
          then: function (o) {
            s.push(o);
          },
        }));
    }
    return (Lc++, n.then(zm, zm), n);
  }
  function zm() {
    if (--Lc === 0 && xa !== null) {
      vs !== null && (vs.status = "fulfilled");
      var t = xa;
      ((xa = null), (gs = 0), (vs = null));
      for (var n = 0; n < t.length; n++) (0, t[n])();
    }
  }
  function GS(t, n) {
    var s = [],
      o = {
        status: "pending",
        value: null,
        reason: null,
        then: function (c) {
          s.push(c);
        },
      };
    return (
      t.then(
        function () {
          ((o.status = "fulfilled"), (o.value = n));
          for (var c = 0; c < s.length; c++) (0, s[c])(n);
        },
        function (c) {
          for (o.status = "rejected", o.reason = c, c = 0; c < s.length; c++)
            (0, s[c])(void 0);
        },
      ),
      o
    );
  }
  var Vm = z.S;
  z.S = function (t, n) {
    (typeof n == "object" &&
      n !== null &&
      typeof n.then == "function" &&
      YS(t, n),
      Vm !== null && Vm(t, n));
  };
  var Li = Y(null);
  function kc() {
    var t = Li.current;
    return t !== null ? t : kt.pooledCache;
  }
  function Ir(t, n) {
    n === null ? J(Li, Li.current) : J(Li, n.pool);
  }
  function Lm() {
    var t = kc();
    return t === null ? null : { parent: Wt._currentValue, pool: t };
  }
  var wa = Error(r(460)),
    km = Error(r(474)),
    $r = Error(r(542)),
    Pc = { then: function () {} };
  function Pm(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function Jr() {}
  function Bm(t, n, s) {
    switch (
      ((s = t[s]),
      s === void 0 ? t.push(n) : s !== n && (n.then(Jr, Jr), (n = s)),
      n.status)
    ) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw ((t = n.reason), Hm(t), t);
      default:
        if (typeof n.status == "string") n.then(Jr, Jr);
        else {
          if (((t = kt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(r(482));
          ((t = n),
            (t.status = "pending"),
            t.then(
              function (o) {
                if (n.status === "pending") {
                  var c = n;
                  ((c.status = "fulfilled"), (c.value = o));
                }
              },
              function (o) {
                if (n.status === "pending") {
                  var c = n;
                  ((c.status = "rejected"), (c.reason = o));
                }
              },
            ));
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw ((t = n.reason), Hm(t), t);
        }
        throw ((Sa = n), wa);
    }
  }
  var Sa = null;
  function Um() {
    if (Sa === null) throw Error(r(459));
    var t = Sa;
    return ((Sa = null), t);
  }
  function Hm(t) {
    if (t === wa || t === $r) throw Error(r(483));
  }
  var Wn = !1;
  function Bc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Uc(t, n) {
    ((t = t.updateQueue),
      n.updateQueue === t &&
        (n.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function In(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function $n(t, n, s) {
    var o = t.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (Dt & 2) !== 0)) {
      var c = o.pending;
      return (
        c === null ? (n.next = n) : ((n.next = c.next), (c.next = n)),
        (o.pending = n),
        (n = Xr(t)),
        Rm(t, null, s),
        n
      );
    }
    return (Gr(t, o, n, s), Xr(t));
  }
  function Ta(t, n, s) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (s & 4194048) !== 0))
    ) {
      var o = n.lanes;
      ((o &= t.pendingLanes), (s |= o), (n.lanes = s), zh(t, s));
    }
  }
  function Hc(t, n) {
    var s = t.updateQueue,
      o = t.alternate;
    if (o !== null && ((o = o.updateQueue), s === o)) {
      var c = null,
        d = null;
      if (((s = s.firstBaseUpdate), s !== null)) {
        do {
          var v = {
            lane: s.lane,
            tag: s.tag,
            payload: s.payload,
            callback: null,
            next: null,
          };
          (d === null ? (c = d = v) : (d = d.next = v), (s = s.next));
        } while (s !== null);
        d === null ? (c = d = n) : (d = d.next = n);
      } else c = d = n;
      ((s = {
        baseState: o.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: d,
        shared: o.shared,
        callbacks: o.callbacks,
      }),
        (t.updateQueue = s));
      return;
    }
    ((t = s.lastBaseUpdate),
      t === null ? (s.firstBaseUpdate = n) : (t.next = n),
      (s.lastBaseUpdate = n));
  }
  var qc = !1;
  function Ea() {
    if (qc) {
      var t = vs;
      if (t !== null) throw t;
    }
  }
  function Aa(t, n, s, o) {
    qc = !1;
    var c = t.updateQueue;
    Wn = !1;
    var d = c.firstBaseUpdate,
      v = c.lastBaseUpdate,
      w = c.shared.pending;
    if (w !== null) {
      c.shared.pending = null;
      var M = w,
        k = M.next;
      ((M.next = null), v === null ? (d = k) : (v.next = k), (v = M));
      var q = t.alternate;
      q !== null &&
        ((q = q.updateQueue),
        (w = q.lastBaseUpdate),
        w !== v &&
          (w === null ? (q.firstBaseUpdate = k) : (w.next = k),
          (q.lastBaseUpdate = M)));
    }
    if (d !== null) {
      var K = c.baseState;
      ((v = 0), (q = k = M = null), (w = d));
      do {
        var B = w.lane & -536870913,
          H = B !== w.lane;
        if (H ? (Et & B) === B : (o & B) === B) {
          (B !== 0 && B === gs && (qc = !0),
            q !== null &&
              (q = q.next =
                {
                  lane: 0,
                  tag: w.tag,
                  payload: w.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var yt = t,
              ht = w;
            B = n;
            var zt = s;
            switch (ht.tag) {
              case 1:
                if (((yt = ht.payload), typeof yt == "function")) {
                  K = yt.call(zt, K, B);
                  break t;
                }
                K = yt;
                break t;
              case 3:
                yt.flags = (yt.flags & -65537) | 128;
              case 0:
                if (
                  ((yt = ht.payload),
                  (B = typeof yt == "function" ? yt.call(zt, K, B) : yt),
                  B == null)
                )
                  break t;
                K = y({}, K, B);
                break t;
              case 2:
                Wn = !0;
            }
          }
          ((B = w.callback),
            B !== null &&
              ((t.flags |= 64),
              H && (t.flags |= 8192),
              (H = c.callbacks),
              H === null ? (c.callbacks = [B]) : H.push(B)));
        } else
          ((H = {
            lane: B,
            tag: w.tag,
            payload: w.payload,
            callback: w.callback,
            next: null,
          }),
            q === null ? ((k = q = H), (M = K)) : (q = q.next = H),
            (v |= B));
        if (((w = w.next), w === null)) {
          if (((w = c.shared.pending), w === null)) break;
          ((H = w),
            (w = H.next),
            (H.next = null),
            (c.lastBaseUpdate = H),
            (c.shared.pending = null));
        }
      } while (!0);
      (q === null && (M = K),
        (c.baseState = M),
        (c.firstBaseUpdate = k),
        (c.lastBaseUpdate = q),
        d === null && (c.shared.lanes = 0),
        (ri |= v),
        (t.lanes = v),
        (t.memoizedState = K));
    }
  }
  function qm(t, n) {
    if (typeof t != "function") throw Error(r(191, t));
    t.call(n);
  }
  function Ym(t, n) {
    var s = t.callbacks;
    if (s !== null)
      for (t.callbacks = null, t = 0; t < s.length; t++) qm(s[t], n);
  }
  var bs = Y(null),
    to = Y(0);
  function Gm(t, n) {
    ((t = Pn), J(to, t), J(bs, n), (Pn = t | n.baseLanes));
  }
  function Yc() {
    (J(to, Pn), J(bs, bs.current));
  }
  function Gc() {
    ((Pn = to.current), et(bs), et(to));
  }
  var Jn = 0,
    bt = null,
    jt = null,
    Kt = null,
    eo = !1,
    xs = !1,
    ki = !1,
    no = 0,
    Ca = 0,
    ws = null,
    XS = 0;
  function Gt() {
    throw Error(r(321));
  }
  function Xc(t, n) {
    if (n === null) return !1;
    for (var s = 0; s < n.length && s < t.length; s++)
      if (!Re(t[s], n[s])) return !1;
    return !0;
  }
  function Fc(t, n, s, o, c, d) {
    return (
      (Jn = d),
      (bt = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (z.H = t === null || t.memoizedState === null ? Rp : Mp),
      (ki = !1),
      (d = s(o, c)),
      (ki = !1),
      xs && (d = Fm(n, s, o, c)),
      Xm(t),
      d
    );
  }
  function Xm(t) {
    z.H = lo;
    var n = jt !== null && jt.next !== null;
    if (((Jn = 0), (Kt = jt = bt = null), (eo = !1), (Ca = 0), (ws = null), n))
      throw Error(r(300));
    t === null ||
      ie ||
      ((t = t.dependencies), t !== null && Zr(t) && (ie = !0));
  }
  function Fm(t, n, s, o) {
    bt = t;
    var c = 0;
    do {
      if ((xs && (ws = null), (Ca = 0), (xs = !1), 25 <= c))
        throw Error(r(301));
      if (((c += 1), (Kt = jt = null), t.updateQueue != null)) {
        var d = t.updateQueue;
        ((d.lastEffect = null),
          (d.events = null),
          (d.stores = null),
          d.memoCache != null && (d.memoCache.index = 0));
      }
      ((z.H = $S), (d = n(s, o)));
    } while (xs);
    return d;
  }
  function FS() {
    var t = z.H,
      n = t.useState()[0];
    return (
      (n = typeof n.then == "function" ? Ra(n) : n),
      (t = t.useState()[0]),
      (jt !== null ? jt.memoizedState : null) !== t && (bt.flags |= 1024),
      n
    );
  }
  function Kc() {
    var t = no !== 0;
    return ((no = 0), t);
  }
  function Qc(t, n, s) {
    ((n.updateQueue = t.updateQueue), (n.flags &= -2053), (t.lanes &= ~s));
  }
  function Zc(t) {
    if (eo) {
      for (t = t.memoizedState; t !== null;) {
        var n = t.queue;
        (n !== null && (n.pending = null), (t = t.next));
      }
      eo = !1;
    }
    ((Jn = 0), (Kt = jt = bt = null), (xs = !1), (Ca = no = 0), (ws = null));
  }
  function be() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Kt === null ? (bt.memoizedState = Kt = t) : (Kt = Kt.next = t), Kt);
  }
  function Qt() {
    if (jt === null) {
      var t = bt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = jt.next;
    var n = Kt === null ? bt.memoizedState : Kt.next;
    if (n !== null) ((Kt = n), (jt = t));
    else {
      if (t === null)
        throw bt.alternate === null ? Error(r(467)) : Error(r(310));
      ((jt = t),
        (t = {
          memoizedState: jt.memoizedState,
          baseState: jt.baseState,
          baseQueue: jt.baseQueue,
          queue: jt.queue,
          next: null,
        }),
        Kt === null ? (bt.memoizedState = Kt = t) : (Kt = Kt.next = t));
    }
    return Kt;
  }
  function Wc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ra(t) {
    var n = Ca;
    return (
      (Ca += 1),
      ws === null && (ws = []),
      (t = Bm(ws, t, n)),
      (n = bt),
      (Kt === null ? n.memoizedState : Kt.next) === null &&
        ((n = n.alternate),
        (z.H = n === null || n.memoizedState === null ? Rp : Mp)),
      t
    );
  }
  function io(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Ra(t);
      if (t.$$typeof === j) return fe(t);
    }
    throw Error(r(438, String(t)));
  }
  function Ic(t) {
    var n = null,
      s = bt.updateQueue;
    if ((s !== null && (n = s.memoCache), n == null)) {
      var o = bt.alternate;
      o !== null &&
        ((o = o.updateQueue),
        o !== null &&
          ((o = o.memoCache),
          o != null &&
            (n = {
              data: o.data.map(function (c) {
                return c.slice();
              }),
              index: 0,
            })));
    }
    if (
      (n == null && (n = { data: [], index: 0 }),
      s === null && ((s = Wc()), (bt.updateQueue = s)),
      (s.memoCache = n),
      (s = n.data[n.index]),
      s === void 0)
    )
      for (s = n.data[n.index] = Array(t), o = 0; o < t; o++) s[o] = W;
    return (n.index++, s);
  }
  function jn(t, n) {
    return typeof n == "function" ? n(t) : n;
  }
  function so(t) {
    var n = Qt();
    return $c(n, jt, t);
  }
  function $c(t, n, s) {
    var o = t.queue;
    if (o === null) throw Error(r(311));
    o.lastRenderedReducer = s;
    var c = t.baseQueue,
      d = o.pending;
    if (d !== null) {
      if (c !== null) {
        var v = c.next;
        ((c.next = d.next), (d.next = v));
      }
      ((n.baseQueue = c = d), (o.pending = null));
    }
    if (((d = t.baseState), c === null)) t.memoizedState = d;
    else {
      n = c.next;
      var w = (v = null),
        M = null,
        k = n,
        q = !1;
      do {
        var K = k.lane & -536870913;
        if (K !== k.lane ? (Et & K) === K : (Jn & K) === K) {
          var B = k.revertLane;
          if (B === 0)
            (M !== null &&
              (M = M.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: k.action,
                  hasEagerState: k.hasEagerState,
                  eagerState: k.eagerState,
                  next: null,
                }),
              K === gs && (q = !0));
          else if ((Jn & B) === B) {
            ((k = k.next), B === gs && (q = !0));
            continue;
          } else
            ((K = {
              lane: 0,
              revertLane: k.revertLane,
              action: k.action,
              hasEagerState: k.hasEagerState,
              eagerState: k.eagerState,
              next: null,
            }),
              M === null ? ((w = M = K), (v = d)) : (M = M.next = K),
              (bt.lanes |= B),
              (ri |= B));
          ((K = k.action),
            ki && s(d, K),
            (d = k.hasEagerState ? k.eagerState : s(d, K)));
        } else
          ((B = {
            lane: K,
            revertLane: k.revertLane,
            action: k.action,
            hasEagerState: k.hasEagerState,
            eagerState: k.eagerState,
            next: null,
          }),
            M === null ? ((w = M = B), (v = d)) : (M = M.next = B),
            (bt.lanes |= K),
            (ri |= K));
        k = k.next;
      } while (k !== null && k !== n);
      if (
        (M === null ? (v = d) : (M.next = w),
        !Re(d, t.memoizedState) && ((ie = !0), q && ((s = vs), s !== null)))
      )
        throw s;
      ((t.memoizedState = d),
        (t.baseState = v),
        (t.baseQueue = M),
        (o.lastRenderedState = d));
    }
    return (c === null && (o.lanes = 0), [t.memoizedState, o.dispatch]);
  }
  function Jc(t) {
    var n = Qt(),
      s = n.queue;
    if (s === null) throw Error(r(311));
    s.lastRenderedReducer = t;
    var o = s.dispatch,
      c = s.pending,
      d = n.memoizedState;
    if (c !== null) {
      s.pending = null;
      var v = (c = c.next);
      do ((d = t(d, v.action)), (v = v.next));
      while (v !== c);
      (Re(d, n.memoizedState) || (ie = !0),
        (n.memoizedState = d),
        n.baseQueue === null && (n.baseState = d),
        (s.lastRenderedState = d));
    }
    return [d, o];
  }
  function Km(t, n, s) {
    var o = bt,
      c = Qt(),
      d = Mt;
    if (d) {
      if (s === void 0) throw Error(r(407));
      s = s();
    } else s = n();
    var v = !Re((jt || c).memoizedState, s);
    (v && ((c.memoizedState = s), (ie = !0)), (c = c.queue));
    var w = Wm.bind(null, o, c, t);
    if (
      (Ma(2048, 8, w, [t]),
      c.getSnapshot !== n || v || (Kt !== null && Kt.memoizedState.tag & 1))
    ) {
      if (
        ((o.flags |= 2048),
        Ss(9, ao(), Zm.bind(null, o, c, s, n), null),
        kt === null)
      )
        throw Error(r(349));
      d || (Jn & 124) !== 0 || Qm(o, n, s);
    }
    return s;
  }
  function Qm(t, n, s) {
    ((t.flags |= 16384),
      (t = { getSnapshot: n, value: s }),
      (n = bt.updateQueue),
      n === null
        ? ((n = Wc()), (bt.updateQueue = n), (n.stores = [t]))
        : ((s = n.stores), s === null ? (n.stores = [t]) : s.push(t)));
  }
  function Zm(t, n, s, o) {
    ((n.value = s), (n.getSnapshot = o), Im(n) && $m(t));
  }
  function Wm(t, n, s) {
    return s(function () {
      Im(n) && $m(t);
    });
  }
  function Im(t) {
    var n = t.getSnapshot;
    t = t.value;
    try {
      var s = n();
      return !Re(t, s);
    } catch {
      return !0;
    }
  }
  function $m(t) {
    var n = hs(t, 2);
    n !== null && _e(n, t, 2);
  }
  function tu(t) {
    var n = be();
    if (typeof t == "function") {
      var s = t;
      if (((t = s()), ki)) {
        Fn(!0);
        try {
          s();
        } finally {
          Fn(!1);
        }
      }
    }
    return (
      (n.memoizedState = n.baseState = t),
      (n.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jn,
        lastRenderedState: t,
      }),
      n
    );
  }
  function Jm(t, n, s, o) {
    return ((t.baseState = s), $c(t, jt, typeof o == "function" ? o : jn));
  }
  function KS(t, n, s, o, c) {
    if (oo(t)) throw Error(r(485));
    if (((t = n.action), t !== null)) {
      var d = {
        payload: c,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (v) {
          d.listeners.push(v);
        },
      };
      (z.T !== null ? s(!0) : (d.isTransition = !1),
        o(d),
        (s = n.pending),
        s === null
          ? ((d.next = n.pending = d), tp(n, d))
          : ((d.next = s.next), (n.pending = s.next = d)));
    }
  }
  function tp(t, n) {
    var s = n.action,
      o = n.payload,
      c = t.state;
    if (n.isTransition) {
      var d = z.T,
        v = {};
      z.T = v;
      try {
        var w = s(c, o),
          M = z.S;
        (M !== null && M(v, w), ep(t, n, w));
      } catch (k) {
        eu(t, n, k);
      } finally {
        z.T = d;
      }
    } else
      try {
        ((d = s(c, o)), ep(t, n, d));
      } catch (k) {
        eu(t, n, k);
      }
  }
  function ep(t, n, s) {
    s !== null && typeof s == "object" && typeof s.then == "function"
      ? s.then(
          function (o) {
            np(t, n, o);
          },
          function (o) {
            return eu(t, n, o);
          },
        )
      : np(t, n, s);
  }
  function np(t, n, s) {
    ((n.status = "fulfilled"),
      (n.value = s),
      ip(n),
      (t.state = s),
      (n = t.pending),
      n !== null &&
        ((s = n.next),
        s === n ? (t.pending = null) : ((s = s.next), (n.next = s), tp(t, s))));
  }
  function eu(t, n, s) {
    var o = t.pending;
    if (((t.pending = null), o !== null)) {
      o = o.next;
      do ((n.status = "rejected"), (n.reason = s), ip(n), (n = n.next));
      while (n !== o);
    }
    t.action = null;
  }
  function ip(t) {
    t = t.listeners;
    for (var n = 0; n < t.length; n++) (0, t[n])();
  }
  function sp(t, n) {
    return n;
  }
  function ap(t, n) {
    if (Mt) {
      var s = kt.formState;
      if (s !== null) {
        t: {
          var o = bt;
          if (Mt) {
            if (Ht) {
              e: {
                for (var c = Ht, d = fn; c.nodeType !== 8;) {
                  if (!d) {
                    c = null;
                    break e;
                  }
                  if (((c = $e(c.nextSibling)), c === null)) {
                    c = null;
                    break e;
                  }
                }
                ((d = c.data), (c = d === "F!" || d === "F" ? c : null));
              }
              if (c) {
                ((Ht = $e(c.nextSibling)), (o = c.data === "F!"));
                break t;
              }
            }
            _i(o);
          }
          o = !1;
        }
        o && (n = s[0]);
      }
    }
    return (
      (s = be()),
      (s.memoizedState = s.baseState = n),
      (o = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: sp,
        lastRenderedState: n,
      }),
      (s.queue = o),
      (s = Ep.bind(null, bt, o)),
      (o.dispatch = s),
      (o = tu(!1)),
      (d = ru.bind(null, bt, !1, o.queue)),
      (o = be()),
      (c = { state: n, dispatch: null, action: t, pending: null }),
      (o.queue = c),
      (s = KS.bind(null, bt, c, d, s)),
      (c.dispatch = s),
      (o.memoizedState = t),
      [n, s, !1]
    );
  }
  function rp(t) {
    var n = Qt();
    return op(n, jt, t);
  }
  function op(t, n, s) {
    if (
      ((n = $c(t, n, sp)[0]),
      (t = so(jn)[0]),
      typeof n == "object" && n !== null && typeof n.then == "function")
    )
      try {
        var o = Ra(n);
      } catch (v) {
        throw v === wa ? $r : v;
      }
    else o = n;
    n = Qt();
    var c = n.queue,
      d = c.dispatch;
    return (
      s !== n.memoizedState &&
        ((bt.flags |= 2048), Ss(9, ao(), QS.bind(null, c, s), null)),
      [o, d, t]
    );
  }
  function QS(t, n) {
    t.action = n;
  }
  function lp(t) {
    var n = Qt(),
      s = jt;
    if (s !== null) return op(n, s, t);
    (Qt(), (n = n.memoizedState), (s = Qt()));
    var o = s.queue.dispatch;
    return ((s.memoizedState = t), [n, o, !1]);
  }
  function Ss(t, n, s, o) {
    return (
      (t = { tag: t, create: s, deps: o, inst: n, next: null }),
      (n = bt.updateQueue),
      n === null && ((n = Wc()), (bt.updateQueue = n)),
      (s = n.lastEffect),
      s === null
        ? (n.lastEffect = t.next = t)
        : ((o = s.next), (s.next = t), (t.next = o), (n.lastEffect = t)),
      t
    );
  }
  function ao() {
    return { destroy: void 0, resource: void 0 };
  }
  function cp() {
    return Qt().memoizedState;
  }
  function ro(t, n, s, o) {
    var c = be();
    ((o = o === void 0 ? null : o),
      (bt.flags |= t),
      (c.memoizedState = Ss(1 | n, ao(), s, o)));
  }
  function Ma(t, n, s, o) {
    var c = Qt();
    o = o === void 0 ? null : o;
    var d = c.memoizedState.inst;
    jt !== null && o !== null && Xc(o, jt.memoizedState.deps)
      ? (c.memoizedState = Ss(n, d, s, o))
      : ((bt.flags |= t), (c.memoizedState = Ss(1 | n, d, s, o)));
  }
  function up(t, n) {
    ro(8390656, 8, t, n);
  }
  function fp(t, n) {
    Ma(2048, 8, t, n);
  }
  function dp(t, n) {
    return Ma(4, 2, t, n);
  }
  function hp(t, n) {
    return Ma(4, 4, t, n);
  }
  function mp(t, n) {
    if (typeof n == "function") {
      t = t();
      var s = n(t);
      return function () {
        typeof s == "function" ? s() : n(null);
      };
    }
    if (n != null)
      return (
        (t = t()),
        (n.current = t),
        function () {
          n.current = null;
        }
      );
  }
  function pp(t, n, s) {
    ((s = s != null ? s.concat([t]) : null), Ma(4, 4, mp.bind(null, n, t), s));
  }
  function nu() {}
  function yp(t, n) {
    var s = Qt();
    n = n === void 0 ? null : n;
    var o = s.memoizedState;
    return n !== null && Xc(n, o[1]) ? o[0] : ((s.memoizedState = [t, n]), t);
  }
  function gp(t, n) {
    var s = Qt();
    n = n === void 0 ? null : n;
    var o = s.memoizedState;
    if (n !== null && Xc(n, o[1])) return o[0];
    if (((o = t()), ki)) {
      Fn(!0);
      try {
        t();
      } finally {
        Fn(!1);
      }
    }
    return ((s.memoizedState = [o, n]), o);
  }
  function iu(t, n, s) {
    return s === void 0 || (Jn & 1073741824) !== 0
      ? (t.memoizedState = n)
      : ((t.memoizedState = s), (t = xy()), (bt.lanes |= t), (ri |= t), s);
  }
  function vp(t, n, s, o) {
    return Re(s, n)
      ? s
      : bs.current !== null
        ? ((t = iu(t, s, o)), Re(t, n) || (ie = !0), t)
        : (Jn & 42) === 0
          ? ((ie = !0), (t.memoizedState = s))
          : ((t = xy()), (bt.lanes |= t), (ri |= t), n);
  }
  function bp(t, n, s, o, c) {
    var d = Q.p;
    Q.p = d !== 0 && 8 > d ? d : 8;
    var v = z.T,
      w = {};
    ((z.T = w), ru(t, !1, n, s));
    try {
      var M = c(),
        k = z.S;
      if (
        (k !== null && k(w, M),
        M !== null && typeof M == "object" && typeof M.then == "function")
      ) {
        var q = GS(M, o);
        Oa(t, n, q, je(t));
      } else Oa(t, n, o, je(t));
    } catch (K) {
      Oa(t, n, { then: function () {}, status: "rejected", reason: K }, je());
    } finally {
      ((Q.p = d), (z.T = v));
    }
  }
  function ZS() {}
  function su(t, n, s, o) {
    if (t.tag !== 5) throw Error(r(476));
    var c = xp(t).queue;
    bp(
      t,
      c,
      n,
      F,
      s === null
        ? ZS
        : function () {
            return (wp(t), s(o));
          },
    );
  }
  function xp(t) {
    var n = t.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: F,
      baseState: F,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jn,
        lastRenderedState: F,
      },
      next: null,
    };
    var s = {};
    return (
      (n.next = {
        memoizedState: s,
        baseState: s,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: jn,
          lastRenderedState: s,
        },
        next: null,
      }),
      (t.memoizedState = n),
      (t = t.alternate),
      t !== null && (t.memoizedState = n),
      n
    );
  }
  function wp(t) {
    var n = xp(t).next.queue;
    Oa(t, n, {}, je());
  }
  function au() {
    return fe(Ka);
  }
  function Sp() {
    return Qt().memoizedState;
  }
  function Tp() {
    return Qt().memoizedState;
  }
  function WS(t) {
    for (var n = t.return; n !== null;) {
      switch (n.tag) {
        case 24:
        case 3:
          var s = je();
          t = In(s);
          var o = $n(n, t, s);
          (o !== null && (_e(o, n, s), Ta(o, n, s)),
            (n = { cache: Vc() }),
            (t.payload = n));
          return;
      }
      n = n.return;
    }
  }
  function IS(t, n, s) {
    var o = je();
    ((s = {
      lane: o,
      revertLane: 0,
      action: s,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      oo(t)
        ? Ap(n, s)
        : ((s = Ac(t, n, s, o)), s !== null && (_e(s, t, o), Cp(s, n, o))));
  }
  function Ep(t, n, s) {
    var o = je();
    Oa(t, n, s, o);
  }
  function Oa(t, n, s, o) {
    var c = {
      lane: o,
      revertLane: 0,
      action: s,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (oo(t)) Ap(n, c);
    else {
      var d = t.alternate;
      if (
        t.lanes === 0 &&
        (d === null || d.lanes === 0) &&
        ((d = n.lastRenderedReducer), d !== null)
      )
        try {
          var v = n.lastRenderedState,
            w = d(v, s);
          if (((c.hasEagerState = !0), (c.eagerState = w), Re(w, v)))
            return (Gr(t, n, c, 0), kt === null && Yr(), !1);
        } catch {}
      if (((s = Ac(t, n, c, o)), s !== null))
        return (_e(s, t, o), Cp(s, n, o), !0);
    }
    return !1;
  }
  function ru(t, n, s, o) {
    if (
      ((o = {
        lane: 2,
        revertLane: Pu(),
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      oo(t))
    ) {
      if (n) throw Error(r(479));
    } else ((n = Ac(t, s, o, 2)), n !== null && _e(n, t, 2));
  }
  function oo(t) {
    var n = t.alternate;
    return t === bt || (n !== null && n === bt);
  }
  function Ap(t, n) {
    xs = eo = !0;
    var s = t.pending;
    (s === null ? (n.next = n) : ((n.next = s.next), (s.next = n)),
      (t.pending = n));
  }
  function Cp(t, n, s) {
    if ((s & 4194048) !== 0) {
      var o = n.lanes;
      ((o &= t.pendingLanes), (s |= o), (n.lanes = s), zh(t, s));
    }
  }
  var lo = {
      readContext: fe,
      use: io,
      useCallback: Gt,
      useContext: Gt,
      useEffect: Gt,
      useImperativeHandle: Gt,
      useLayoutEffect: Gt,
      useInsertionEffect: Gt,
      useMemo: Gt,
      useReducer: Gt,
      useRef: Gt,
      useState: Gt,
      useDebugValue: Gt,
      useDeferredValue: Gt,
      useTransition: Gt,
      useSyncExternalStore: Gt,
      useId: Gt,
      useHostTransitionStatus: Gt,
      useFormState: Gt,
      useActionState: Gt,
      useOptimistic: Gt,
      useMemoCache: Gt,
      useCacheRefresh: Gt,
    },
    Rp = {
      readContext: fe,
      use: io,
      useCallback: function (t, n) {
        return ((be().memoizedState = [t, n === void 0 ? null : n]), t);
      },
      useContext: fe,
      useEffect: up,
      useImperativeHandle: function (t, n, s) {
        ((s = s != null ? s.concat([t]) : null),
          ro(4194308, 4, mp.bind(null, n, t), s));
      },
      useLayoutEffect: function (t, n) {
        return ro(4194308, 4, t, n);
      },
      useInsertionEffect: function (t, n) {
        ro(4, 2, t, n);
      },
      useMemo: function (t, n) {
        var s = be();
        n = n === void 0 ? null : n;
        var o = t();
        if (ki) {
          Fn(!0);
          try {
            t();
          } finally {
            Fn(!1);
          }
        }
        return ((s.memoizedState = [o, n]), o);
      },
      useReducer: function (t, n, s) {
        var o = be();
        if (s !== void 0) {
          var c = s(n);
          if (ki) {
            Fn(!0);
            try {
              s(n);
            } finally {
              Fn(!1);
            }
          }
        } else c = n;
        return (
          (o.memoizedState = o.baseState = c),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: c,
          }),
          (o.queue = t),
          (t = t.dispatch = IS.bind(null, bt, t)),
          [o.memoizedState, t]
        );
      },
      useRef: function (t) {
        var n = be();
        return ((t = { current: t }), (n.memoizedState = t));
      },
      useState: function (t) {
        t = tu(t);
        var n = t.queue,
          s = Ep.bind(null, bt, n);
        return ((n.dispatch = s), [t.memoizedState, s]);
      },
      useDebugValue: nu,
      useDeferredValue: function (t, n) {
        var s = be();
        return iu(s, t, n);
      },
      useTransition: function () {
        var t = tu(!1);
        return (
          (t = bp.bind(null, bt, t.queue, !0, !1)),
          (be().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, n, s) {
        var o = bt,
          c = be();
        if (Mt) {
          if (s === void 0) throw Error(r(407));
          s = s();
        } else {
          if (((s = n()), kt === null)) throw Error(r(349));
          (Et & 124) !== 0 || Qm(o, n, s);
        }
        c.memoizedState = s;
        var d = { value: s, getSnapshot: n };
        return (
          (c.queue = d),
          up(Wm.bind(null, o, d, t), [t]),
          (o.flags |= 2048),
          Ss(9, ao(), Zm.bind(null, o, d, s, n), null),
          s
        );
      },
      useId: function () {
        var t = be(),
          n = kt.identifierPrefix;
        if (Mt) {
          var s = On,
            o = Mn;
          ((s = (o & ~(1 << (32 - Ce(o) - 1))).toString(32) + s),
            (n = "«" + n + "R" + s),
            (s = no++),
            0 < s && (n += "H" + s.toString(32)),
            (n += "»"));
        } else ((s = XS++), (n = "«" + n + "r" + s.toString(32) + "»"));
        return (t.memoizedState = n);
      },
      useHostTransitionStatus: au,
      useFormState: ap,
      useActionState: ap,
      useOptimistic: function (t) {
        var n = be();
        n.memoizedState = n.baseState = t;
        var s = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (n.queue = s),
          (n = ru.bind(null, bt, !0, s)),
          (s.dispatch = n),
          [t, n]
        );
      },
      useMemoCache: Ic,
      useCacheRefresh: function () {
        return (be().memoizedState = WS.bind(null, bt));
      },
    },
    Mp = {
      readContext: fe,
      use: io,
      useCallback: yp,
      useContext: fe,
      useEffect: fp,
      useImperativeHandle: pp,
      useInsertionEffect: dp,
      useLayoutEffect: hp,
      useMemo: gp,
      useReducer: so,
      useRef: cp,
      useState: function () {
        return so(jn);
      },
      useDebugValue: nu,
      useDeferredValue: function (t, n) {
        var s = Qt();
        return vp(s, jt.memoizedState, t, n);
      },
      useTransition: function () {
        var t = so(jn)[0],
          n = Qt().memoizedState;
        return [typeof t == "boolean" ? t : Ra(t), n];
      },
      useSyncExternalStore: Km,
      useId: Sp,
      useHostTransitionStatus: au,
      useFormState: rp,
      useActionState: rp,
      useOptimistic: function (t, n) {
        var s = Qt();
        return Jm(s, jt, t, n);
      },
      useMemoCache: Ic,
      useCacheRefresh: Tp,
    },
    $S = {
      readContext: fe,
      use: io,
      useCallback: yp,
      useContext: fe,
      useEffect: fp,
      useImperativeHandle: pp,
      useInsertionEffect: dp,
      useLayoutEffect: hp,
      useMemo: gp,
      useReducer: Jc,
      useRef: cp,
      useState: function () {
        return Jc(jn);
      },
      useDebugValue: nu,
      useDeferredValue: function (t, n) {
        var s = Qt();
        return jt === null ? iu(s, t, n) : vp(s, jt.memoizedState, t, n);
      },
      useTransition: function () {
        var t = Jc(jn)[0],
          n = Qt().memoizedState;
        return [typeof t == "boolean" ? t : Ra(t), n];
      },
      useSyncExternalStore: Km,
      useId: Sp,
      useHostTransitionStatus: au,
      useFormState: lp,
      useActionState: lp,
      useOptimistic: function (t, n) {
        var s = Qt();
        return jt !== null
          ? Jm(s, jt, t, n)
          : ((s.baseState = t), [t, s.queue.dispatch]);
      },
      useMemoCache: Ic,
      useCacheRefresh: Tp,
    },
    Ts = null,
    Da = 0;
  function co(t) {
    var n = Da;
    return ((Da += 1), Ts === null && (Ts = []), Bm(Ts, t, n));
  }
  function Na(t, n) {
    ((n = n.props.ref), (t.ref = n !== void 0 ? n : null));
  }
  function uo(t, n) {
    throw n.$$typeof === g
      ? Error(r(525))
      : ((t = Object.prototype.toString.call(n)),
        Error(
          r(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(n).join(", ") + "}"
              : t,
          ),
        ));
  }
  function Op(t) {
    var n = t._init;
    return n(t._payload);
  }
  function Dp(t) {
    function n(_, O) {
      if (t) {
        var L = _.deletions;
        L === null ? ((_.deletions = [O]), (_.flags |= 16)) : L.push(O);
      }
    }
    function s(_, O) {
      if (!t) return null;
      for (; O !== null;) (n(_, O), (O = O.sibling));
      return null;
    }
    function o(_) {
      for (var O = new Map(); _ !== null;)
        (_.key !== null ? O.set(_.key, _) : O.set(_.index, _), (_ = _.sibling));
      return O;
    }
    function c(_, O) {
      return ((_ = Rn(_, O)), (_.index = 0), (_.sibling = null), _);
    }
    function d(_, O, L) {
      return (
        (_.index = L),
        t
          ? ((L = _.alternate),
            L !== null
              ? ((L = L.index), L < O ? ((_.flags |= 67108866), O) : L)
              : ((_.flags |= 67108866), O))
          : ((_.flags |= 1048576), O)
      );
    }
    function v(_) {
      return (t && _.alternate === null && (_.flags |= 67108866), _);
    }
    function w(_, O, L, G) {
      return O === null || O.tag !== 6
        ? ((O = Rc(L, _.mode, G)), (O.return = _), O)
        : ((O = c(O, L)), (O.return = _), O);
    }
    function M(_, O, L, G) {
      var rt = L.type;
      return rt === E
        ? q(_, O, L.props.children, G, L.key)
        : O !== null &&
            (O.elementType === rt ||
              (typeof rt == "object" &&
                rt !== null &&
                rt.$$typeof === P &&
                Op(rt) === O.type))
          ? ((O = c(O, L.props)), Na(O, L), (O.return = _), O)
          : ((O = Fr(L.type, L.key, L.props, null, _.mode, G)),
            Na(O, L),
            (O.return = _),
            O);
    }
    function k(_, O, L, G) {
      return O === null ||
        O.tag !== 4 ||
        O.stateNode.containerInfo !== L.containerInfo ||
        O.stateNode.implementation !== L.implementation
        ? ((O = Mc(L, _.mode, G)), (O.return = _), O)
        : ((O = c(O, L.children || [])), (O.return = _), O);
    }
    function q(_, O, L, G, rt) {
      return O === null || O.tag !== 7
        ? ((O = Oi(L, _.mode, G, rt)), (O.return = _), O)
        : ((O = c(O, L)), (O.return = _), O);
    }
    function K(_, O, L) {
      if (
        (typeof O == "string" && O !== "") ||
        typeof O == "number" ||
        typeof O == "bigint"
      )
        return ((O = Rc("" + O, _.mode, L)), (O.return = _), O);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case x:
            return (
              (L = Fr(O.type, O.key, O.props, null, _.mode, L)),
              Na(L, O),
              (L.return = _),
              L
            );
          case T:
            return ((O = Mc(O, _.mode, L)), (O.return = _), O);
          case P:
            var G = O._init;
            return ((O = G(O._payload)), K(_, O, L));
        }
        if (ut(O) || st(O))
          return ((O = Oi(O, _.mode, L, null)), (O.return = _), O);
        if (typeof O.then == "function") return K(_, co(O), L);
        if (O.$$typeof === j) return K(_, Wr(_, O), L);
        uo(_, O);
      }
      return null;
    }
    function B(_, O, L, G) {
      var rt = O !== null ? O.key : null;
      if (
        (typeof L == "string" && L !== "") ||
        typeof L == "number" ||
        typeof L == "bigint"
      )
        return rt !== null ? null : w(_, O, "" + L, G);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case x:
            return L.key === rt ? M(_, O, L, G) : null;
          case T:
            return L.key === rt ? k(_, O, L, G) : null;
          case P:
            return ((rt = L._init), (L = rt(L._payload)), B(_, O, L, G));
        }
        if (ut(L) || st(L)) return rt !== null ? null : q(_, O, L, G, null);
        if (typeof L.then == "function") return B(_, O, co(L), G);
        if (L.$$typeof === j) return B(_, O, Wr(_, L), G);
        uo(_, L);
      }
      return null;
    }
    function H(_, O, L, G, rt) {
      if (
        (typeof G == "string" && G !== "") ||
        typeof G == "number" ||
        typeof G == "bigint"
      )
        return ((_ = _.get(L) || null), w(O, _, "" + G, rt));
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case x:
            return (
              (_ = _.get(G.key === null ? L : G.key) || null),
              M(O, _, G, rt)
            );
          case T:
            return (
              (_ = _.get(G.key === null ? L : G.key) || null),
              k(O, _, G, rt)
            );
          case P:
            var wt = G._init;
            return ((G = wt(G._payload)), H(_, O, L, G, rt));
        }
        if (ut(G) || st(G))
          return ((_ = _.get(L) || null), q(O, _, G, rt, null));
        if (typeof G.then == "function") return H(_, O, L, co(G), rt);
        if (G.$$typeof === j) return H(_, O, L, Wr(O, G), rt);
        uo(O, G);
      }
      return null;
    }
    function yt(_, O, L, G) {
      for (
        var rt = null, wt = null, ft = O, pt = (O = 0), ae = null;
        ft !== null && pt < L.length;
        pt++
      ) {
        ft.index > pt ? ((ae = ft), (ft = null)) : (ae = ft.sibling);
        var Ct = B(_, ft, L[pt], G);
        if (Ct === null) {
          ft === null && (ft = ae);
          break;
        }
        (t && ft && Ct.alternate === null && n(_, ft),
          (O = d(Ct, O, pt)),
          wt === null ? (rt = Ct) : (wt.sibling = Ct),
          (wt = Ct),
          (ft = ae));
      }
      if (pt === L.length) return (s(_, ft), Mt && Ni(_, pt), rt);
      if (ft === null) {
        for (; pt < L.length; pt++)
          ((ft = K(_, L[pt], G)),
            ft !== null &&
              ((O = d(ft, O, pt)),
              wt === null ? (rt = ft) : (wt.sibling = ft),
              (wt = ft)));
        return (Mt && Ni(_, pt), rt);
      }
      for (ft = o(ft); pt < L.length; pt++)
        ((ae = H(ft, _, pt, L[pt], G)),
          ae !== null &&
            (t &&
              ae.alternate !== null &&
              ft.delete(ae.key === null ? pt : ae.key),
            (O = d(ae, O, pt)),
            wt === null ? (rt = ae) : (wt.sibling = ae),
            (wt = ae)));
      return (
        t &&
          ft.forEach(function (pi) {
            return n(_, pi);
          }),
        Mt && Ni(_, pt),
        rt
      );
    }
    function ht(_, O, L, G) {
      if (L == null) throw Error(r(151));
      for (
        var rt = null,
          wt = null,
          ft = O,
          pt = (O = 0),
          ae = null,
          Ct = L.next();
        ft !== null && !Ct.done;
        pt++, Ct = L.next()
      ) {
        ft.index > pt ? ((ae = ft), (ft = null)) : (ae = ft.sibling);
        var pi = B(_, ft, Ct.value, G);
        if (pi === null) {
          ft === null && (ft = ae);
          break;
        }
        (t && ft && pi.alternate === null && n(_, ft),
          (O = d(pi, O, pt)),
          wt === null ? (rt = pi) : (wt.sibling = pi),
          (wt = pi),
          (ft = ae));
      }
      if (Ct.done) return (s(_, ft), Mt && Ni(_, pt), rt);
      if (ft === null) {
        for (; !Ct.done; pt++, Ct = L.next())
          ((Ct = K(_, Ct.value, G)),
            Ct !== null &&
              ((O = d(Ct, O, pt)),
              wt === null ? (rt = Ct) : (wt.sibling = Ct),
              (wt = Ct)));
        return (Mt && Ni(_, pt), rt);
      }
      for (ft = o(ft); !Ct.done; pt++, Ct = L.next())
        ((Ct = H(ft, _, pt, Ct.value, G)),
          Ct !== null &&
            (t &&
              Ct.alternate !== null &&
              ft.delete(Ct.key === null ? pt : Ct.key),
            (O = d(Ct, O, pt)),
            wt === null ? (rt = Ct) : (wt.sibling = Ct),
            (wt = Ct)));
      return (
        t &&
          ft.forEach(function (JT) {
            return n(_, JT);
          }),
        Mt && Ni(_, pt),
        rt
      );
    }
    function zt(_, O, L, G) {
      if (
        (typeof L == "object" &&
          L !== null &&
          L.type === E &&
          L.key === null &&
          (L = L.props.children),
        typeof L == "object" && L !== null)
      ) {
        switch (L.$$typeof) {
          case x:
            t: {
              for (var rt = L.key; O !== null;) {
                if (O.key === rt) {
                  if (((rt = L.type), rt === E)) {
                    if (O.tag === 7) {
                      (s(_, O.sibling),
                        (G = c(O, L.props.children)),
                        (G.return = _),
                        (_ = G));
                      break t;
                    }
                  } else if (
                    O.elementType === rt ||
                    (typeof rt == "object" &&
                      rt !== null &&
                      rt.$$typeof === P &&
                      Op(rt) === O.type)
                  ) {
                    (s(_, O.sibling),
                      (G = c(O, L.props)),
                      Na(G, L),
                      (G.return = _),
                      (_ = G));
                    break t;
                  }
                  s(_, O);
                  break;
                } else n(_, O);
                O = O.sibling;
              }
              L.type === E
                ? ((G = Oi(L.props.children, _.mode, G, L.key)),
                  (G.return = _),
                  (_ = G))
                : ((G = Fr(L.type, L.key, L.props, null, _.mode, G)),
                  Na(G, L),
                  (G.return = _),
                  (_ = G));
            }
            return v(_);
          case T:
            t: {
              for (rt = L.key; O !== null;) {
                if (O.key === rt)
                  if (
                    O.tag === 4 &&
                    O.stateNode.containerInfo === L.containerInfo &&
                    O.stateNode.implementation === L.implementation
                  ) {
                    (s(_, O.sibling),
                      (G = c(O, L.children || [])),
                      (G.return = _),
                      (_ = G));
                    break t;
                  } else {
                    s(_, O);
                    break;
                  }
                else n(_, O);
                O = O.sibling;
              }
              ((G = Mc(L, _.mode, G)), (G.return = _), (_ = G));
            }
            return v(_);
          case P:
            return ((rt = L._init), (L = rt(L._payload)), zt(_, O, L, G));
        }
        if (ut(L)) return yt(_, O, L, G);
        if (st(L)) {
          if (((rt = st(L)), typeof rt != "function")) throw Error(r(150));
          return ((L = rt.call(L)), ht(_, O, L, G));
        }
        if (typeof L.then == "function") return zt(_, O, co(L), G);
        if (L.$$typeof === j) return zt(_, O, Wr(_, L), G);
        uo(_, L);
      }
      return (typeof L == "string" && L !== "") ||
        typeof L == "number" ||
        typeof L == "bigint"
        ? ((L = "" + L),
          O !== null && O.tag === 6
            ? (s(_, O.sibling), (G = c(O, L)), (G.return = _), (_ = G))
            : (s(_, O), (G = Rc(L, _.mode, G)), (G.return = _), (_ = G)),
          v(_))
        : s(_, O);
    }
    return function (_, O, L, G) {
      try {
        Da = 0;
        var rt = zt(_, O, L, G);
        return ((Ts = null), rt);
      } catch (ft) {
        if (ft === wa || ft === $r) throw ft;
        var wt = Me(29, ft, null, _.mode);
        return ((wt.lanes = G), (wt.return = _), wt);
      }
    };
  }
  var Es = Dp(!0),
    Np = Dp(!1),
    Ge = Y(null),
    dn = null;
  function ti(t) {
    var n = t.alternate;
    (J(It, It.current & 1),
      J(Ge, t),
      dn === null &&
        (n === null || bs.current !== null || n.memoizedState !== null) &&
        (dn = t));
  }
  function jp(t) {
    if (t.tag === 22) {
      if ((J(It, It.current), J(Ge, t), dn === null)) {
        var n = t.alternate;
        n !== null && n.memoizedState !== null && (dn = t);
      }
    } else ei();
  }
  function ei() {
    (J(It, It.current), J(Ge, Ge.current));
  }
  function _n(t) {
    (et(Ge), dn === t && (dn = null), et(It));
  }
  var It = Y(0);
  function fo(t) {
    for (var n = t; n !== null;) {
      if (n.tag === 13) {
        var s = n.memoizedState;
        if (
          s !== null &&
          ((s = s.dehydrated), s === null || s.data === "$?" || Wu(s))
        )
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null;) {
        if (n.return === null || n.return === t) return null;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
    return null;
  }
  function ou(t, n, s, o) {
    ((n = t.memoizedState),
      (s = s(o, n)),
      (s = s == null ? n : y({}, n, s)),
      (t.memoizedState = s),
      t.lanes === 0 && (t.updateQueue.baseState = s));
  }
  var lu = {
    enqueueSetState: function (t, n, s) {
      t = t._reactInternals;
      var o = je(),
        c = In(o);
      ((c.payload = n),
        s != null && (c.callback = s),
        (n = $n(t, c, o)),
        n !== null && (_e(n, t, o), Ta(n, t, o)));
    },
    enqueueReplaceState: function (t, n, s) {
      t = t._reactInternals;
      var o = je(),
        c = In(o);
      ((c.tag = 1),
        (c.payload = n),
        s != null && (c.callback = s),
        (n = $n(t, c, o)),
        n !== null && (_e(n, t, o), Ta(n, t, o)));
    },
    enqueueForceUpdate: function (t, n) {
      t = t._reactInternals;
      var s = je(),
        o = In(s);
      ((o.tag = 2),
        n != null && (o.callback = n),
        (n = $n(t, o, s)),
        n !== null && (_e(n, t, s), Ta(n, t, s)));
    },
  };
  function _p(t, n, s, o, c, d, v) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(o, d, v)
        : n.prototype && n.prototype.isPureReactComponent
          ? !ha(s, o) || !ha(c, d)
          : !0
    );
  }
  function zp(t, n, s, o) {
    ((t = n.state),
      typeof n.componentWillReceiveProps == "function" &&
        n.componentWillReceiveProps(s, o),
      typeof n.UNSAFE_componentWillReceiveProps == "function" &&
        n.UNSAFE_componentWillReceiveProps(s, o),
      n.state !== t && lu.enqueueReplaceState(n, n.state, null));
  }
  function Pi(t, n) {
    var s = n;
    if ("ref" in n) {
      s = {};
      for (var o in n) o !== "ref" && (s[o] = n[o]);
    }
    if ((t = t.defaultProps)) {
      s === n && (s = y({}, s));
      for (var c in t) s[c] === void 0 && (s[c] = t[c]);
    }
    return s;
  }
  var ho =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var n = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(n)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function Vp(t) {
    ho(t);
  }
  function Lp(t) {
    console.error(t);
  }
  function kp(t) {
    ho(t);
  }
  function mo(t, n) {
    try {
      var s = t.onUncaughtError;
      s(n.value, { componentStack: n.stack });
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  function Pp(t, n, s) {
    try {
      var o = t.onCaughtError;
      o(s.value, {
        componentStack: s.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null,
      });
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }
  function cu(t, n, s) {
    return (
      (s = In(s)),
      (s.tag = 3),
      (s.payload = { element: null }),
      (s.callback = function () {
        mo(t, n);
      }),
      s
    );
  }
  function Bp(t) {
    return ((t = In(t)), (t.tag = 3), t);
  }
  function Up(t, n, s, o) {
    var c = s.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var d = o.value;
      ((t.payload = function () {
        return c(d);
      }),
        (t.callback = function () {
          Pp(n, s, o);
        }));
    }
    var v = s.stateNode;
    v !== null &&
      typeof v.componentDidCatch == "function" &&
      (t.callback = function () {
        (Pp(n, s, o),
          typeof c != "function" &&
            (oi === null ? (oi = new Set([this])) : oi.add(this)));
        var w = o.stack;
        this.componentDidCatch(o.value, {
          componentStack: w !== null ? w : "",
        });
      });
  }
  function JS(t, n, s, o, c) {
    if (
      ((s.flags |= 32768),
      o !== null && typeof o == "object" && typeof o.then == "function")
    ) {
      if (
        ((n = s.alternate),
        n !== null && va(n, s, c, !0),
        (s = Ge.current),
        s !== null)
      ) {
        switch (s.tag) {
          case 13:
            return (
              dn === null ? _u() : s.alternate === null && qt === 0 && (qt = 3),
              (s.flags &= -257),
              (s.flags |= 65536),
              (s.lanes = c),
              o === Pc
                ? (s.flags |= 16384)
                : ((n = s.updateQueue),
                  n === null ? (s.updateQueue = new Set([o])) : n.add(o),
                  Vu(t, o, c)),
              !1
            );
          case 22:
            return (
              (s.flags |= 65536),
              o === Pc
                ? (s.flags |= 16384)
                : ((n = s.updateQueue),
                  n === null
                    ? ((n = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([o]),
                      }),
                      (s.updateQueue = n))
                    : ((s = n.retryQueue),
                      s === null ? (n.retryQueue = new Set([o])) : s.add(o)),
                  Vu(t, o, c)),
              !1
            );
        }
        throw Error(r(435, s.tag));
      }
      return (Vu(t, o, c), _u(), !1);
    }
    if (Mt)
      return (
        (n = Ge.current),
        n !== null
          ? ((n.flags & 65536) === 0 && (n.flags |= 256),
            (n.flags |= 65536),
            (n.lanes = c),
            o !== Nc && ((t = Error(r(422), { cause: o })), ga(Ue(t, s))))
          : (o !== Nc && ((n = Error(r(423), { cause: o })), ga(Ue(n, s))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (c &= -c),
            (t.lanes |= c),
            (o = Ue(o, s)),
            (c = cu(t.stateNode, o, c)),
            Hc(t, c),
            qt !== 4 && (qt = 2)),
        !1
      );
    var d = Error(r(520), { cause: o });
    if (
      ((d = Ue(d, s)),
      Pa === null ? (Pa = [d]) : Pa.push(d),
      qt !== 4 && (qt = 2),
      n === null)
    )
      return !0;
    ((o = Ue(o, s)), (s = n));
    do {
      switch (s.tag) {
        case 3:
          return (
            (s.flags |= 65536),
            (t = c & -c),
            (s.lanes |= t),
            (t = cu(s.stateNode, o, t)),
            Hc(s, t),
            !1
          );
        case 1:
          if (
            ((n = s.type),
            (d = s.stateNode),
            (s.flags & 128) === 0 &&
              (typeof n.getDerivedStateFromError == "function" ||
                (d !== null &&
                  typeof d.componentDidCatch == "function" &&
                  (oi === null || !oi.has(d)))))
          )
            return (
              (s.flags |= 65536),
              (c &= -c),
              (s.lanes |= c),
              (c = Bp(c)),
              Up(c, t, s, o),
              Hc(s, c),
              !1
            );
      }
      s = s.return;
    } while (s !== null);
    return !1;
  }
  var Hp = Error(r(461)),
    ie = !1;
  function oe(t, n, s, o) {
    n.child = t === null ? Np(n, null, s, o) : Es(n, t.child, s, o);
  }
  function qp(t, n, s, o, c) {
    s = s.render;
    var d = n.ref;
    if ("ref" in o) {
      var v = {};
      for (var w in o) w !== "ref" && (v[w] = o[w]);
    } else v = o;
    return (
      Vi(n),
      (o = Fc(t, n, s, v, d, c)),
      (w = Kc()),
      t !== null && !ie
        ? (Qc(t, n, c), zn(t, n, c))
        : (Mt && w && Oc(n), (n.flags |= 1), oe(t, n, o, c), n.child)
    );
  }
  function Yp(t, n, s, o, c) {
    if (t === null) {
      var d = s.type;
      return typeof d == "function" &&
        !Cc(d) &&
        d.defaultProps === void 0 &&
        s.compare === null
        ? ((n.tag = 15), (n.type = d), Gp(t, n, d, o, c))
        : ((t = Fr(s.type, null, o, n, n.mode, c)),
          (t.ref = n.ref),
          (t.return = n),
          (n.child = t));
    }
    if (((d = t.child), !gu(t, c))) {
      var v = d.memoizedProps;
      if (
        ((s = s.compare), (s = s !== null ? s : ha), s(v, o) && t.ref === n.ref)
      )
        return zn(t, n, c);
    }
    return (
      (n.flags |= 1),
      (t = Rn(d, o)),
      (t.ref = n.ref),
      (t.return = n),
      (n.child = t)
    );
  }
  function Gp(t, n, s, o, c) {
    if (t !== null) {
      var d = t.memoizedProps;
      if (ha(d, o) && t.ref === n.ref)
        if (((ie = !1), (n.pendingProps = o = d), gu(t, c)))
          (t.flags & 131072) !== 0 && (ie = !0);
        else return ((n.lanes = t.lanes), zn(t, n, c));
    }
    return uu(t, n, s, o, c);
  }
  function Xp(t, n, s) {
    var o = n.pendingProps,
      c = o.children,
      d = t !== null ? t.memoizedState : null;
    if (o.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (((o = d !== null ? d.baseLanes | s : s), t !== null)) {
          for (c = n.child = t.child, d = 0; c !== null;)
            ((d = d | c.lanes | c.childLanes), (c = c.sibling));
          n.childLanes = d & ~o;
        } else ((n.childLanes = 0), (n.child = null));
        return Fp(t, n, o, s);
      }
      if ((s & 536870912) !== 0)
        ((n.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Ir(n, d !== null ? d.cachePool : null),
          d !== null ? Gm(n, d) : Yc(),
          jp(n));
      else
        return (
          (n.lanes = n.childLanes = 536870912),
          Fp(t, n, d !== null ? d.baseLanes | s : s, s)
        );
    } else
      d !== null
        ? (Ir(n, d.cachePool), Gm(n, d), ei(), (n.memoizedState = null))
        : (t !== null && Ir(n, null), Yc(), ei());
    return (oe(t, n, c, s), n.child);
  }
  function Fp(t, n, s, o) {
    var c = kc();
    return (
      (c = c === null ? null : { parent: Wt._currentValue, pool: c }),
      (n.memoizedState = { baseLanes: s, cachePool: c }),
      t !== null && Ir(n, null),
      Yc(),
      jp(n),
      t !== null && va(t, n, o, !0),
      null
    );
  }
  function po(t, n) {
    var s = n.ref;
    if (s === null) t !== null && t.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof s != "function" && typeof s != "object") throw Error(r(284));
      (t === null || t.ref !== s) && (n.flags |= 4194816);
    }
  }
  function uu(t, n, s, o, c) {
    return (
      Vi(n),
      (s = Fc(t, n, s, o, void 0, c)),
      (o = Kc()),
      t !== null && !ie
        ? (Qc(t, n, c), zn(t, n, c))
        : (Mt && o && Oc(n), (n.flags |= 1), oe(t, n, s, c), n.child)
    );
  }
  function Kp(t, n, s, o, c, d) {
    return (
      Vi(n),
      (n.updateQueue = null),
      (s = Fm(n, o, s, c)),
      Xm(t),
      (o = Kc()),
      t !== null && !ie
        ? (Qc(t, n, d), zn(t, n, d))
        : (Mt && o && Oc(n), (n.flags |= 1), oe(t, n, s, d), n.child)
    );
  }
  function Qp(t, n, s, o, c) {
    if ((Vi(n), n.stateNode === null)) {
      var d = ms,
        v = s.contextType;
      (typeof v == "object" && v !== null && (d = fe(v)),
        (d = new s(o, d)),
        (n.memoizedState =
          d.state !== null && d.state !== void 0 ? d.state : null),
        (d.updater = lu),
        (n.stateNode = d),
        (d._reactInternals = n),
        (d = n.stateNode),
        (d.props = o),
        (d.state = n.memoizedState),
        (d.refs = {}),
        Bc(n),
        (v = s.contextType),
        (d.context = typeof v == "object" && v !== null ? fe(v) : ms),
        (d.state = n.memoizedState),
        (v = s.getDerivedStateFromProps),
        typeof v == "function" && (ou(n, s, v, o), (d.state = n.memoizedState)),
        typeof s.getDerivedStateFromProps == "function" ||
          typeof d.getSnapshotBeforeUpdate == "function" ||
          (typeof d.UNSAFE_componentWillMount != "function" &&
            typeof d.componentWillMount != "function") ||
          ((v = d.state),
          typeof d.componentWillMount == "function" && d.componentWillMount(),
          typeof d.UNSAFE_componentWillMount == "function" &&
            d.UNSAFE_componentWillMount(),
          v !== d.state && lu.enqueueReplaceState(d, d.state, null),
          Aa(n, o, d, c),
          Ea(),
          (d.state = n.memoizedState)),
        typeof d.componentDidMount == "function" && (n.flags |= 4194308),
        (o = !0));
    } else if (t === null) {
      d = n.stateNode;
      var w = n.memoizedProps,
        M = Pi(s, w);
      d.props = M;
      var k = d.context,
        q = s.contextType;
      ((v = ms), typeof q == "object" && q !== null && (v = fe(q)));
      var K = s.getDerivedStateFromProps;
      ((q =
        typeof K == "function" ||
        typeof d.getSnapshotBeforeUpdate == "function"),
        (w = n.pendingProps !== w),
        q ||
          (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
            typeof d.componentWillReceiveProps != "function") ||
          ((w || k !== v) && zp(n, d, o, v)),
        (Wn = !1));
      var B = n.memoizedState;
      ((d.state = B),
        Aa(n, o, d, c),
        Ea(),
        (k = n.memoizedState),
        w || B !== k || Wn
          ? (typeof K == "function" && (ou(n, s, K, o), (k = n.memoizedState)),
            (M = Wn || _p(n, s, M, o, B, k, v))
              ? (q ||
                  (typeof d.UNSAFE_componentWillMount != "function" &&
                    typeof d.componentWillMount != "function") ||
                  (typeof d.componentWillMount == "function" &&
                    d.componentWillMount(),
                  typeof d.UNSAFE_componentWillMount == "function" &&
                    d.UNSAFE_componentWillMount()),
                typeof d.componentDidMount == "function" &&
                  (n.flags |= 4194308))
              : (typeof d.componentDidMount == "function" &&
                  (n.flags |= 4194308),
                (n.memoizedProps = o),
                (n.memoizedState = k)),
            (d.props = o),
            (d.state = k),
            (d.context = v),
            (o = M))
          : (typeof d.componentDidMount == "function" && (n.flags |= 4194308),
            (o = !1)));
    } else {
      ((d = n.stateNode),
        Uc(t, n),
        (v = n.memoizedProps),
        (q = Pi(s, v)),
        (d.props = q),
        (K = n.pendingProps),
        (B = d.context),
        (k = s.contextType),
        (M = ms),
        typeof k == "object" && k !== null && (M = fe(k)),
        (w = s.getDerivedStateFromProps),
        (k =
          typeof w == "function" ||
          typeof d.getSnapshotBeforeUpdate == "function") ||
          (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
            typeof d.componentWillReceiveProps != "function") ||
          ((v !== K || B !== M) && zp(n, d, o, M)),
        (Wn = !1),
        (B = n.memoizedState),
        (d.state = B),
        Aa(n, o, d, c),
        Ea());
      var H = n.memoizedState;
      v !== K ||
      B !== H ||
      Wn ||
      (t !== null && t.dependencies !== null && Zr(t.dependencies))
        ? (typeof w == "function" && (ou(n, s, w, o), (H = n.memoizedState)),
          (q =
            Wn ||
            _p(n, s, q, o, B, H, M) ||
            (t !== null && t.dependencies !== null && Zr(t.dependencies)))
            ? (k ||
                (typeof d.UNSAFE_componentWillUpdate != "function" &&
                  typeof d.componentWillUpdate != "function") ||
                (typeof d.componentWillUpdate == "function" &&
                  d.componentWillUpdate(o, H, M),
                typeof d.UNSAFE_componentWillUpdate == "function" &&
                  d.UNSAFE_componentWillUpdate(o, H, M)),
              typeof d.componentDidUpdate == "function" && (n.flags |= 4),
              typeof d.getSnapshotBeforeUpdate == "function" &&
                (n.flags |= 1024))
            : (typeof d.componentDidUpdate != "function" ||
                (v === t.memoizedProps && B === t.memoizedState) ||
                (n.flags |= 4),
              typeof d.getSnapshotBeforeUpdate != "function" ||
                (v === t.memoizedProps && B === t.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = o),
              (n.memoizedState = H)),
          (d.props = o),
          (d.state = H),
          (d.context = M),
          (o = q))
        : (typeof d.componentDidUpdate != "function" ||
            (v === t.memoizedProps && B === t.memoizedState) ||
            (n.flags |= 4),
          typeof d.getSnapshotBeforeUpdate != "function" ||
            (v === t.memoizedProps && B === t.memoizedState) ||
            (n.flags |= 1024),
          (o = !1));
    }
    return (
      (d = o),
      po(t, n),
      (o = (n.flags & 128) !== 0),
      d || o
        ? ((d = n.stateNode),
          (s =
            o && typeof s.getDerivedStateFromError != "function"
              ? null
              : d.render()),
          (n.flags |= 1),
          t !== null && o
            ? ((n.child = Es(n, t.child, null, c)),
              (n.child = Es(n, null, s, c)))
            : oe(t, n, s, c),
          (n.memoizedState = d.state),
          (t = n.child))
        : (t = zn(t, n, c)),
      t
    );
  }
  function Zp(t, n, s, o) {
    return (ya(), (n.flags |= 256), oe(t, n, s, o), n.child);
  }
  var fu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function du(t) {
    return { baseLanes: t, cachePool: Lm() };
  }
  function hu(t, n, s) {
    return ((t = t !== null ? t.childLanes & ~s : 0), n && (t |= Xe), t);
  }
  function Wp(t, n, s) {
    var o = n.pendingProps,
      c = !1,
      d = (n.flags & 128) !== 0,
      v;
    if (
      ((v = d) ||
        (v =
          t !== null && t.memoizedState === null ? !1 : (It.current & 2) !== 0),
      v && ((c = !0), (n.flags &= -129)),
      (v = (n.flags & 32) !== 0),
      (n.flags &= -33),
      t === null)
    ) {
      if (Mt) {
        if ((c ? ti(n) : ei(), Mt)) {
          var w = Ht,
            M;
          if ((M = w)) {
            t: {
              for (M = w, w = fn; M.nodeType !== 8;) {
                if (!w) {
                  w = null;
                  break t;
                }
                if (((M = $e(M.nextSibling)), M === null)) {
                  w = null;
                  break t;
                }
              }
              w = M;
            }
            w !== null
              ? ((n.memoizedState = {
                  dehydrated: w,
                  treeContext: Di !== null ? { id: Mn, overflow: On } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (M = Me(18, null, null, 0)),
                (M.stateNode = w),
                (M.return = n),
                (n.child = M),
                (he = n),
                (Ht = null),
                (M = !0))
              : (M = !1);
          }
          M || _i(n);
        }
        if (
          ((w = n.memoizedState),
          w !== null && ((w = w.dehydrated), w !== null))
        )
          return (Wu(w) ? (n.lanes = 32) : (n.lanes = 536870912), null);
        _n(n);
      }
      return (
        (w = o.children),
        (o = o.fallback),
        c
          ? (ei(),
            (c = n.mode),
            (w = yo({ mode: "hidden", children: w }, c)),
            (o = Oi(o, c, s, null)),
            (w.return = n),
            (o.return = n),
            (w.sibling = o),
            (n.child = w),
            (c = n.child),
            (c.memoizedState = du(s)),
            (c.childLanes = hu(t, v, s)),
            (n.memoizedState = fu),
            o)
          : (ti(n), mu(n, w))
      );
    }
    if (
      ((M = t.memoizedState), M !== null && ((w = M.dehydrated), w !== null))
    ) {
      if (d)
        n.flags & 256
          ? (ti(n), (n.flags &= -257), (n = pu(t, n, s)))
          : n.memoizedState !== null
            ? (ei(), (n.child = t.child), (n.flags |= 128), (n = null))
            : (ei(),
              (c = o.fallback),
              (w = n.mode),
              (o = yo({ mode: "visible", children: o.children }, w)),
              (c = Oi(c, w, s, null)),
              (c.flags |= 2),
              (o.return = n),
              (c.return = n),
              (o.sibling = c),
              (n.child = o),
              Es(n, t.child, null, s),
              (o = n.child),
              (o.memoizedState = du(s)),
              (o.childLanes = hu(t, v, s)),
              (n.memoizedState = fu),
              (n = c));
      else if ((ti(n), Wu(w))) {
        if (((v = w.nextSibling && w.nextSibling.dataset), v)) var k = v.dgst;
        ((v = k),
          (o = Error(r(419))),
          (o.stack = ""),
          (o.digest = v),
          ga({ value: o, source: null, stack: null }),
          (n = pu(t, n, s)));
      } else if (
        (ie || va(t, n, s, !1), (v = (s & t.childLanes) !== 0), ie || v)
      ) {
        if (
          ((v = kt),
          v !== null &&
            ((o = s & -s),
            (o = (o & 42) !== 0 ? 1 : Il(o)),
            (o = (o & (v.suspendedLanes | s)) !== 0 ? 0 : o),
            o !== 0 && o !== M.retryLane))
        )
          throw ((M.retryLane = o), hs(t, o), _e(v, t, o), Hp);
        (w.data === "$?" || _u(), (n = pu(t, n, s)));
      } else
        w.data === "$?"
          ? ((n.flags |= 192), (n.child = t.child), (n = null))
          : ((t = M.treeContext),
            (Ht = $e(w.nextSibling)),
            (he = n),
            (Mt = !0),
            (ji = null),
            (fn = !1),
            t !== null &&
              ((qe[Ye++] = Mn),
              (qe[Ye++] = On),
              (qe[Ye++] = Di),
              (Mn = t.id),
              (On = t.overflow),
              (Di = n)),
            (n = mu(n, o.children)),
            (n.flags |= 4096));
      return n;
    }
    return c
      ? (ei(),
        (c = o.fallback),
        (w = n.mode),
        (M = t.child),
        (k = M.sibling),
        (o = Rn(M, { mode: "hidden", children: o.children })),
        (o.subtreeFlags = M.subtreeFlags & 65011712),
        k !== null ? (c = Rn(k, c)) : ((c = Oi(c, w, s, null)), (c.flags |= 2)),
        (c.return = n),
        (o.return = n),
        (o.sibling = c),
        (n.child = o),
        (o = c),
        (c = n.child),
        (w = t.child.memoizedState),
        w === null
          ? (w = du(s))
          : ((M = w.cachePool),
            M !== null
              ? ((k = Wt._currentValue),
                (M = M.parent !== k ? { parent: k, pool: k } : M))
              : (M = Lm()),
            (w = { baseLanes: w.baseLanes | s, cachePool: M })),
        (c.memoizedState = w),
        (c.childLanes = hu(t, v, s)),
        (n.memoizedState = fu),
        o)
      : (ti(n),
        (s = t.child),
        (t = s.sibling),
        (s = Rn(s, { mode: "visible", children: o.children })),
        (s.return = n),
        (s.sibling = null),
        t !== null &&
          ((v = n.deletions),
          v === null ? ((n.deletions = [t]), (n.flags |= 16)) : v.push(t)),
        (n.child = s),
        (n.memoizedState = null),
        s);
  }
  function mu(t, n) {
    return (
      (n = yo({ mode: "visible", children: n }, t.mode)),
      (n.return = t),
      (t.child = n)
    );
  }
  function yo(t, n) {
    return (
      (t = Me(22, t, null, n)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function pu(t, n, s) {
    return (
      Es(n, t.child, null, s),
      (t = mu(n, n.pendingProps.children)),
      (t.flags |= 2),
      (n.memoizedState = null),
      t
    );
  }
  function Ip(t, n, s) {
    t.lanes |= n;
    var o = t.alternate;
    (o !== null && (o.lanes |= n), _c(t.return, n, s));
  }
  function yu(t, n, s, o, c) {
    var d = t.memoizedState;
    d === null
      ? (t.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: s,
          tailMode: c,
        })
      : ((d.isBackwards = n),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = o),
        (d.tail = s),
        (d.tailMode = c));
  }
  function $p(t, n, s) {
    var o = n.pendingProps,
      c = o.revealOrder,
      d = o.tail;
    if ((oe(t, n, o.children, s), (o = It.current), (o & 2) !== 0))
      ((o = (o & 1) | 2), (n.flags |= 128));
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = n.child; t !== null;) {
          if (t.tag === 13) t.memoizedState !== null && Ip(t, s, n);
          else if (t.tag === 19) Ip(t, s, n);
          else if (t.child !== null) {
            ((t.child.return = t), (t = t.child));
            continue;
          }
          if (t === n) break t;
          for (; t.sibling === null;) {
            if (t.return === null || t.return === n) break t;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      o &= 1;
    }
    switch ((J(It, o), c)) {
      case "forwards":
        for (s = n.child, c = null; s !== null;)
          ((t = s.alternate),
            t !== null && fo(t) === null && (c = s),
            (s = s.sibling));
        ((s = c),
          s === null
            ? ((c = n.child), (n.child = null))
            : ((c = s.sibling), (s.sibling = null)),
          yu(n, !1, c, s, d));
        break;
      case "backwards":
        for (s = null, c = n.child, n.child = null; c !== null;) {
          if (((t = c.alternate), t !== null && fo(t) === null)) {
            n.child = c;
            break;
          }
          ((t = c.sibling), (c.sibling = s), (s = c), (c = t));
        }
        yu(n, !0, s, null, d);
        break;
      case "together":
        yu(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function zn(t, n, s) {
    if (
      (t !== null && (n.dependencies = t.dependencies),
      (ri |= n.lanes),
      (s & n.childLanes) === 0)
    )
      if (t !== null) {
        if ((va(t, n, s, !1), (s & n.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && n.child !== t.child) throw Error(r(153));
    if (n.child !== null) {
      for (
        t = n.child, s = Rn(t, t.pendingProps), n.child = s, s.return = n;
        t.sibling !== null;
      )
        ((t = t.sibling),
          (s = s.sibling = Rn(t, t.pendingProps)),
          (s.return = n));
      s.sibling = null;
    }
    return n.child;
  }
  function gu(t, n) {
    return (t.lanes & n) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Zr(t)));
  }
  function tT(t, n, s) {
    switch (n.tag) {
      case 3:
        (Rt(n, n.stateNode.containerInfo),
          Zn(n, Wt, t.memoizedState.cache),
          ya());
        break;
      case 27:
      case 5:
        Xn(n);
        break;
      case 4:
        Rt(n, n.stateNode.containerInfo);
        break;
      case 10:
        Zn(n, n.type, n.memoizedProps.value);
        break;
      case 13:
        var o = n.memoizedState;
        if (o !== null)
          return o.dehydrated !== null
            ? (ti(n), (n.flags |= 128), null)
            : (s & n.child.childLanes) !== 0
              ? Wp(t, n, s)
              : (ti(n), (t = zn(t, n, s)), t !== null ? t.sibling : null);
        ti(n);
        break;
      case 19:
        var c = (t.flags & 128) !== 0;
        if (
          ((o = (s & n.childLanes) !== 0),
          o || (va(t, n, s, !1), (o = (s & n.childLanes) !== 0)),
          c)
        ) {
          if (o) return $p(t, n, s);
          n.flags |= 128;
        }
        if (
          ((c = n.memoizedState),
          c !== null &&
            ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
          J(It, It.current),
          o)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((n.lanes = 0), Xp(t, n, s));
      case 24:
        Zn(n, Wt, t.memoizedState.cache);
    }
    return zn(t, n, s);
  }
  function Jp(t, n, s) {
    if (t !== null)
      if (t.memoizedProps !== n.pendingProps) ie = !0;
      else {
        if (!gu(t, s) && (n.flags & 128) === 0) return ((ie = !1), tT(t, n, s));
        ie = (t.flags & 131072) !== 0;
      }
    else ((ie = !1), Mt && (n.flags & 1048576) !== 0 && Om(n, Qr, n.index));
    switch (((n.lanes = 0), n.tag)) {
      case 16:
        t: {
          t = n.pendingProps;
          var o = n.elementType,
            c = o._init;
          if (((o = c(o._payload)), (n.type = o), typeof o == "function"))
            Cc(o)
              ? ((t = Pi(o, t)), (n.tag = 1), (n = Qp(null, n, o, t, s)))
              : ((n.tag = 0), (n = uu(null, n, o, t, s)));
          else {
            if (o != null) {
              if (((c = o.$$typeof), c === V)) {
                ((n.tag = 11), (n = qp(null, n, o, t, s)));
                break t;
              } else if (c === Z) {
                ((n.tag = 14), (n = Yp(null, n, o, t, s)));
                break t;
              }
            }
            throw ((n = tt(o) || o), Error(r(306, n, "")));
          }
        }
        return n;
      case 0:
        return uu(t, n, n.type, n.pendingProps, s);
      case 1:
        return ((o = n.type), (c = Pi(o, n.pendingProps)), Qp(t, n, o, c, s));
      case 3:
        t: {
          if ((Rt(n, n.stateNode.containerInfo), t === null))
            throw Error(r(387));
          o = n.pendingProps;
          var d = n.memoizedState;
          ((c = d.element), Uc(t, n), Aa(n, o, null, s));
          var v = n.memoizedState;
          if (
            ((o = v.cache),
            Zn(n, Wt, o),
            o !== d.cache && zc(n, [Wt], s, !0),
            Ea(),
            (o = v.element),
            d.isDehydrated)
          )
            if (
              ((d = { element: o, isDehydrated: !1, cache: v.cache }),
              (n.updateQueue.baseState = d),
              (n.memoizedState = d),
              n.flags & 256)
            ) {
              n = Zp(t, n, o, s);
              break t;
            } else if (o !== c) {
              ((c = Ue(Error(r(424)), n)), ga(c), (n = Zp(t, n, o, s)));
              break t;
            } else
              for (
                t = n.stateNode.containerInfo,
                  t.nodeType === 9
                    ? (t = t.body)
                    : (t = t.nodeName === "HTML" ? t.ownerDocument.body : t),
                  Ht = $e(t.firstChild),
                  he = n,
                  Mt = !0,
                  ji = null,
                  fn = !0,
                  s = Np(n, null, o, s),
                  n.child = s;
                s;
              )
                ((s.flags = (s.flags & -3) | 4096), (s = s.sibling));
          else {
            if ((ya(), o === c)) {
              n = zn(t, n, s);
              break t;
            }
            oe(t, n, o, s);
          }
          n = n.child;
        }
        return n;
      case 26:
        return (
          po(t, n),
          t === null
            ? (s = ig(n.type, null, n.pendingProps, null))
              ? (n.memoizedState = s)
              : Mt ||
                ((s = n.type),
                (t = n.pendingProps),
                (o = Do(lt.current).createElement(s)),
                (o[ue] = n),
                (o[ge] = t),
                ce(o, s, t),
                ne(o),
                (n.stateNode = o))
            : (n.memoizedState = ig(
                n.type,
                t.memoizedProps,
                n.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Xn(n),
          t === null &&
            Mt &&
            ((o = n.stateNode = tg(n.type, n.pendingProps, lt.current)),
            (he = n),
            (fn = !0),
            (c = Ht),
            ui(n.type) ? ((Iu = c), (Ht = $e(o.firstChild))) : (Ht = c)),
          oe(t, n, n.pendingProps.children, s),
          po(t, n),
          t === null && (n.flags |= 4194304),
          n.child
        );
      case 5:
        return (
          t === null &&
            Mt &&
            ((c = o = Ht) &&
              ((o = MT(o, n.type, n.pendingProps, fn)),
              o !== null
                ? ((n.stateNode = o),
                  (he = n),
                  (Ht = $e(o.firstChild)),
                  (fn = !1),
                  (c = !0))
                : (c = !1)),
            c || _i(n)),
          Xn(n),
          (c = n.type),
          (d = n.pendingProps),
          (v = t !== null ? t.memoizedProps : null),
          (o = d.children),
          Ku(c, d) ? (o = null) : v !== null && Ku(c, v) && (n.flags |= 32),
          n.memoizedState !== null &&
            ((c = Fc(t, n, FS, null, null, s)), (Ka._currentValue = c)),
          po(t, n),
          oe(t, n, o, s),
          n.child
        );
      case 6:
        return (
          t === null &&
            Mt &&
            ((t = s = Ht) &&
              ((s = OT(s, n.pendingProps, fn)),
              s !== null
                ? ((n.stateNode = s), (he = n), (Ht = null), (t = !0))
                : (t = !1)),
            t || _i(n)),
          null
        );
      case 13:
        return Wp(t, n, s);
      case 4:
        return (
          Rt(n, n.stateNode.containerInfo),
          (o = n.pendingProps),
          t === null ? (n.child = Es(n, null, o, s)) : oe(t, n, o, s),
          n.child
        );
      case 11:
        return qp(t, n, n.type, n.pendingProps, s);
      case 7:
        return (oe(t, n, n.pendingProps, s), n.child);
      case 8:
        return (oe(t, n, n.pendingProps.children, s), n.child);
      case 12:
        return (oe(t, n, n.pendingProps.children, s), n.child);
      case 10:
        return (
          (o = n.pendingProps),
          Zn(n, n.type, o.value),
          oe(t, n, o.children, s),
          n.child
        );
      case 9:
        return (
          (c = n.type._context),
          (o = n.pendingProps.children),
          Vi(n),
          (c = fe(c)),
          (o = o(c)),
          (n.flags |= 1),
          oe(t, n, o, s),
          n.child
        );
      case 14:
        return Yp(t, n, n.type, n.pendingProps, s);
      case 15:
        return Gp(t, n, n.type, n.pendingProps, s);
      case 19:
        return $p(t, n, s);
      case 31:
        return (
          (o = n.pendingProps),
          (s = n.mode),
          (o = { mode: o.mode, children: o.children }),
          t === null
            ? ((s = yo(o, s)),
              (s.ref = n.ref),
              (n.child = s),
              (s.return = n),
              (n = s))
            : ((s = Rn(t.child, o)),
              (s.ref = n.ref),
              (n.child = s),
              (s.return = n),
              (n = s)),
          n
        );
      case 22:
        return Xp(t, n, s);
      case 24:
        return (
          Vi(n),
          (o = fe(Wt)),
          t === null
            ? ((c = kc()),
              c === null &&
                ((c = kt),
                (d = Vc()),
                (c.pooledCache = d),
                d.refCount++,
                d !== null && (c.pooledCacheLanes |= s),
                (c = d)),
              (n.memoizedState = { parent: o, cache: c }),
              Bc(n),
              Zn(n, Wt, c))
            : ((t.lanes & s) !== 0 && (Uc(t, n), Aa(n, null, null, s), Ea()),
              (c = t.memoizedState),
              (d = n.memoizedState),
              c.parent !== o
                ? ((c = { parent: o, cache: o }),
                  (n.memoizedState = c),
                  n.lanes === 0 &&
                    (n.memoizedState = n.updateQueue.baseState = c),
                  Zn(n, Wt, o))
                : ((o = d.cache),
                  Zn(n, Wt, o),
                  o !== c.cache && zc(n, [Wt], s, !0))),
          oe(t, n, n.pendingProps.children, s),
          n.child
        );
      case 29:
        throw n.pendingProps;
    }
    throw Error(r(156, n.tag));
  }
  function Vn(t) {
    t.flags |= 4;
  }
  function ty(t, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !lg(n))) {
      if (
        ((n = Ge.current),
        n !== null &&
          ((Et & 4194048) === Et
            ? dn !== null
            : ((Et & 62914560) !== Et && (Et & 536870912) === 0) || n !== dn))
      )
        throw ((Sa = Pc), km);
      t.flags |= 8192;
    }
  }
  function go(t, n) {
    (n !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((n = t.tag !== 22 ? jh() : 536870912), (t.lanes |= n), (Ms |= n)));
  }
  function ja(t, n) {
    if (!Mt)
      switch (t.tailMode) {
        case "hidden":
          n = t.tail;
          for (var s = null; n !== null;)
            (n.alternate !== null && (s = n), (n = n.sibling));
          s === null ? (t.tail = null) : (s.sibling = null);
          break;
        case "collapsed":
          s = t.tail;
          for (var o = null; s !== null;)
            (s.alternate !== null && (o = s), (s = s.sibling));
          o === null
            ? n || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (o.sibling = null);
      }
  }
  function Ut(t) {
    var n = t.alternate !== null && t.alternate.child === t.child,
      s = 0,
      o = 0;
    if (n)
      for (var c = t.child; c !== null;)
        ((s |= c.lanes | c.childLanes),
          (o |= c.subtreeFlags & 65011712),
          (o |= c.flags & 65011712),
          (c.return = t),
          (c = c.sibling));
    else
      for (c = t.child; c !== null;)
        ((s |= c.lanes | c.childLanes),
          (o |= c.subtreeFlags),
          (o |= c.flags),
          (c.return = t),
          (c = c.sibling));
    return ((t.subtreeFlags |= o), (t.childLanes = s), n);
  }
  function eT(t, n, s) {
    var o = n.pendingProps;
    switch ((Dc(n), n.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Ut(n), null);
      case 1:
        return (Ut(n), null);
      case 3:
        return (
          (s = n.stateNode),
          (o = null),
          t !== null && (o = t.memoizedState.cache),
          n.memoizedState.cache !== o && (n.flags |= 2048),
          Nn(Wt),
          Ot(),
          s.pendingContext &&
            ((s.context = s.pendingContext), (s.pendingContext = null)),
          (t === null || t.child === null) &&
            (pa(n)
              ? Vn(n)
              : t === null ||
                (t.memoizedState.isDehydrated && (n.flags & 256) === 0) ||
                ((n.flags |= 1024), jm())),
          Ut(n),
          null
        );
      case 26:
        return (
          (s = n.memoizedState),
          t === null
            ? (Vn(n),
              s !== null ? (Ut(n), ty(n, s)) : (Ut(n), (n.flags &= -16777217)))
            : s
              ? s !== t.memoizedState
                ? (Vn(n), Ut(n), ty(n, s))
                : (Ut(n), (n.flags &= -16777217))
              : (t.memoizedProps !== o && Vn(n), Ut(n), (n.flags &= -16777217)),
          null
        );
      case 27:
        (Ze(n), (s = lt.current));
        var c = n.type;
        if (t !== null && n.stateNode != null) t.memoizedProps !== o && Vn(n);
        else {
          if (!o) {
            if (n.stateNode === null) throw Error(r(166));
            return (Ut(n), null);
          }
          ((t = ct.current),
            pa(n) ? Dm(n) : ((t = tg(c, o, s)), (n.stateNode = t), Vn(n)));
        }
        return (Ut(n), null);
      case 5:
        if ((Ze(n), (s = n.type), t !== null && n.stateNode != null))
          t.memoizedProps !== o && Vn(n);
        else {
          if (!o) {
            if (n.stateNode === null) throw Error(r(166));
            return (Ut(n), null);
          }
          if (((t = ct.current), pa(n))) Dm(n);
          else {
            switch (((c = Do(lt.current)), t)) {
              case 1:
                t = c.createElementNS("http://www.w3.org/2000/svg", s);
                break;
              case 2:
                t = c.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                break;
              default:
                switch (s) {
                  case "svg":
                    t = c.createElementNS("http://www.w3.org/2000/svg", s);
                    break;
                  case "math":
                    t = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s,
                    );
                    break;
                  case "script":
                    ((t = c.createElement("div")),
                      (t.innerHTML = "<script><\/script>"),
                      (t = t.removeChild(t.firstChild)));
                    break;
                  case "select":
                    ((t =
                      typeof o.is == "string"
                        ? c.createElement("select", { is: o.is })
                        : c.createElement("select")),
                      o.multiple
                        ? (t.multiple = !0)
                        : o.size && (t.size = o.size));
                    break;
                  default:
                    t =
                      typeof o.is == "string"
                        ? c.createElement(s, { is: o.is })
                        : c.createElement(s);
                }
            }
            ((t[ue] = n), (t[ge] = o));
            t: for (c = n.child; c !== null;) {
              if (c.tag === 5 || c.tag === 6) t.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                ((c.child.return = c), (c = c.child));
                continue;
              }
              if (c === n) break t;
              for (; c.sibling === null;) {
                if (c.return === null || c.return === n) break t;
                c = c.return;
              }
              ((c.sibling.return = c.return), (c = c.sibling));
            }
            n.stateNode = t;
            t: switch ((ce(t, s, o), s)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!o.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && Vn(n);
          }
        }
        return (Ut(n), (n.flags &= -16777217), null);
      case 6:
        if (t && n.stateNode != null) t.memoizedProps !== o && Vn(n);
        else {
          if (typeof o != "string" && n.stateNode === null) throw Error(r(166));
          if (((t = lt.current), pa(n))) {
            if (
              ((t = n.stateNode),
              (s = n.memoizedProps),
              (o = null),
              (c = he),
              c !== null)
            )
              switch (c.tag) {
                case 27:
                case 5:
                  o = c.memoizedProps;
              }
            ((t[ue] = n),
              (t = !!(
                t.nodeValue === s ||
                (o !== null && o.suppressHydrationWarning === !0) ||
                Ky(t.nodeValue, s)
              )),
              t || _i(n));
          } else
            ((t = Do(t).createTextNode(o)), (t[ue] = n), (n.stateNode = t));
        }
        return (Ut(n), null);
      case 13:
        if (
          ((o = n.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((c = pa(n)), o !== null && o.dehydrated !== null)) {
            if (t === null) {
              if (!c) throw Error(r(318));
              if (
                ((c = n.memoizedState),
                (c = c !== null ? c.dehydrated : null),
                !c)
              )
                throw Error(r(317));
              c[ue] = n;
            } else
              (ya(),
                (n.flags & 128) === 0 && (n.memoizedState = null),
                (n.flags |= 4));
            (Ut(n), (c = !1));
          } else
            ((c = jm()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = c),
              (c = !0));
          if (!c) return n.flags & 256 ? (_n(n), n) : (_n(n), null);
        }
        if ((_n(n), (n.flags & 128) !== 0)) return ((n.lanes = s), n);
        if (
          ((s = o !== null), (t = t !== null && t.memoizedState !== null), s)
        ) {
          ((o = n.child),
            (c = null),
            o.alternate !== null &&
              o.alternate.memoizedState !== null &&
              o.alternate.memoizedState.cachePool !== null &&
              (c = o.alternate.memoizedState.cachePool.pool));
          var d = null;
          (o.memoizedState !== null &&
            o.memoizedState.cachePool !== null &&
            (d = o.memoizedState.cachePool.pool),
            d !== c && (o.flags |= 2048));
        }
        return (
          s !== t && s && (n.child.flags |= 8192),
          go(n, n.updateQueue),
          Ut(n),
          null
        );
      case 4:
        return (Ot(), t === null && qu(n.stateNode.containerInfo), Ut(n), null);
      case 10:
        return (Nn(n.type), Ut(n), null);
      case 19:
        if ((et(It), (c = n.memoizedState), c === null)) return (Ut(n), null);
        if (((o = (n.flags & 128) !== 0), (d = c.rendering), d === null))
          if (o) ja(c, !1);
          else {
            if (qt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = n.child; t !== null;) {
                if (((d = fo(t)), d !== null)) {
                  for (
                    n.flags |= 128,
                      ja(c, !1),
                      t = d.updateQueue,
                      n.updateQueue = t,
                      go(n, t),
                      n.subtreeFlags = 0,
                      t = s,
                      s = n.child;
                    s !== null;
                  )
                    (Mm(s, t), (s = s.sibling));
                  return (J(It, (It.current & 1) | 2), n.child);
                }
                t = t.sibling;
              }
            c.tail !== null &&
              un() > xo &&
              ((n.flags |= 128), (o = !0), ja(c, !1), (n.lanes = 4194304));
          }
        else {
          if (!o)
            if (((t = fo(d)), t !== null)) {
              if (
                ((n.flags |= 128),
                (o = !0),
                (t = t.updateQueue),
                (n.updateQueue = t),
                go(n, t),
                ja(c, !0),
                c.tail === null &&
                  c.tailMode === "hidden" &&
                  !d.alternate &&
                  !Mt)
              )
                return (Ut(n), null);
            } else
              2 * un() - c.renderingStartTime > xo &&
                s !== 536870912 &&
                ((n.flags |= 128), (o = !0), ja(c, !1), (n.lanes = 4194304));
          c.isBackwards
            ? ((d.sibling = n.child), (n.child = d))
            : ((t = c.last),
              t !== null ? (t.sibling = d) : (n.child = d),
              (c.last = d));
        }
        return c.tail !== null
          ? ((n = c.tail),
            (c.rendering = n),
            (c.tail = n.sibling),
            (c.renderingStartTime = un()),
            (n.sibling = null),
            (t = It.current),
            J(It, o ? (t & 1) | 2 : t & 1),
            n)
          : (Ut(n), null);
      case 22:
      case 23:
        return (
          _n(n),
          Gc(),
          (o = n.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== o && (n.flags |= 8192)
            : o && (n.flags |= 8192),
          o
            ? (s & 536870912) !== 0 &&
              (n.flags & 128) === 0 &&
              (Ut(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : Ut(n),
          (s = n.updateQueue),
          s !== null && go(n, s.retryQueue),
          (s = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (s = t.memoizedState.cachePool.pool),
          (o = null),
          n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (o = n.memoizedState.cachePool.pool),
          o !== s && (n.flags |= 2048),
          t !== null && et(Li),
          null
        );
      case 24:
        return (
          (s = null),
          t !== null && (s = t.memoizedState.cache),
          n.memoizedState.cache !== s && (n.flags |= 2048),
          Nn(Wt),
          Ut(n),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, n.tag));
  }
  function nT(t, n) {
    switch ((Dc(n), n.tag)) {
      case 1:
        return (
          (t = n.flags),
          t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 3:
        return (
          Nn(Wt),
          Ot(),
          (t = n.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((n.flags = (t & -65537) | 128), n)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Ze(n), null);
      case 13:
        if (
          (_n(n), (t = n.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(r(340));
          ya();
        }
        return (
          (t = n.flags),
          t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 19:
        return (et(It), null);
      case 4:
        return (Ot(), null);
      case 10:
        return (Nn(n.type), null);
      case 22:
      case 23:
        return (
          _n(n),
          Gc(),
          t !== null && et(Li),
          (t = n.flags),
          t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 24:
        return (Nn(Wt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ey(t, n) {
    switch ((Dc(n), n.tag)) {
      case 3:
        (Nn(Wt), Ot());
        break;
      case 26:
      case 27:
      case 5:
        Ze(n);
        break;
      case 4:
        Ot();
        break;
      case 13:
        _n(n);
        break;
      case 19:
        et(It);
        break;
      case 10:
        Nn(n.type);
        break;
      case 22:
      case 23:
        (_n(n), Gc(), t !== null && et(Li));
        break;
      case 24:
        Nn(Wt);
    }
  }
  function _a(t, n) {
    try {
      var s = n.updateQueue,
        o = s !== null ? s.lastEffect : null;
      if (o !== null) {
        var c = o.next;
        s = c;
        do {
          if ((s.tag & t) === t) {
            o = void 0;
            var d = s.create,
              v = s.inst;
            ((o = d()), (v.destroy = o));
          }
          s = s.next;
        } while (s !== c);
      }
    } catch (w) {
      Vt(n, n.return, w);
    }
  }
  function ni(t, n, s) {
    try {
      var o = n.updateQueue,
        c = o !== null ? o.lastEffect : null;
      if (c !== null) {
        var d = c.next;
        o = d;
        do {
          if ((o.tag & t) === t) {
            var v = o.inst,
              w = v.destroy;
            if (w !== void 0) {
              ((v.destroy = void 0), (c = n));
              var M = s,
                k = w;
              try {
                k();
              } catch (q) {
                Vt(c, M, q);
              }
            }
          }
          o = o.next;
        } while (o !== d);
      }
    } catch (q) {
      Vt(n, n.return, q);
    }
  }
  function ny(t) {
    var n = t.updateQueue;
    if (n !== null) {
      var s = t.stateNode;
      try {
        Ym(n, s);
      } catch (o) {
        Vt(t, t.return, o);
      }
    }
  }
  function iy(t, n, s) {
    ((s.props = Pi(t.type, t.memoizedProps)), (s.state = t.memoizedState));
    try {
      s.componentWillUnmount();
    } catch (o) {
      Vt(t, n, o);
    }
  }
  function za(t, n) {
    try {
      var s = t.ref;
      if (s !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var o = t.stateNode;
            break;
          case 30:
            o = t.stateNode;
            break;
          default:
            o = t.stateNode;
        }
        typeof s == "function" ? (t.refCleanup = s(o)) : (s.current = o);
      }
    } catch (c) {
      Vt(t, n, c);
    }
  }
  function hn(t, n) {
    var s = t.ref,
      o = t.refCleanup;
    if (s !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (c) {
          Vt(t, n, c);
        } finally {
          ((t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null));
        }
      else if (typeof s == "function")
        try {
          s(null);
        } catch (c) {
          Vt(t, n, c);
        }
      else s.current = null;
  }
  function sy(t) {
    var n = t.type,
      s = t.memoizedProps,
      o = t.stateNode;
    try {
      t: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          s.autoFocus && o.focus();
          break t;
        case "img":
          s.src ? (o.src = s.src) : s.srcSet && (o.srcset = s.srcSet);
      }
    } catch (c) {
      Vt(t, t.return, c);
    }
  }
  function vu(t, n, s) {
    try {
      var o = t.stateNode;
      (TT(o, t.type, s, n), (o[ge] = n));
    } catch (c) {
      Vt(t, t.return, c);
    }
  }
  function ay(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && ui(t.type)) ||
      t.tag === 4
    );
  }
  function bu(t) {
    t: for (;;) {
      for (; t.sibling === null;) {
        if (t.return === null || ay(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if (
          (t.tag === 27 && ui(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function xu(t, n, s) {
    var o = t.tag;
    if (o === 5 || o === 6)
      ((t = t.stateNode),
        n
          ? (s.nodeType === 9
              ? s.body
              : s.nodeName === "HTML"
                ? s.ownerDocument.body
                : s
            ).insertBefore(t, n)
          : ((n =
              s.nodeType === 9
                ? s.body
                : s.nodeName === "HTML"
                  ? s.ownerDocument.body
                  : s),
            n.appendChild(t),
            (s = s._reactRootContainer),
            s != null || n.onclick !== null || (n.onclick = Oo)));
    else if (
      o !== 4 &&
      (o === 27 && ui(t.type) && ((s = t.stateNode), (n = null)),
      (t = t.child),
      t !== null)
    )
      for (xu(t, n, s), t = t.sibling; t !== null;)
        (xu(t, n, s), (t = t.sibling));
  }
  function vo(t, n, s) {
    var o = t.tag;
    if (o === 5 || o === 6)
      ((t = t.stateNode), n ? s.insertBefore(t, n) : s.appendChild(t));
    else if (
      o !== 4 &&
      (o === 27 && ui(t.type) && (s = t.stateNode), (t = t.child), t !== null)
    )
      for (vo(t, n, s), t = t.sibling; t !== null;)
        (vo(t, n, s), (t = t.sibling));
  }
  function ry(t) {
    var n = t.stateNode,
      s = t.memoizedProps;
    try {
      for (var o = t.type, c = n.attributes; c.length;)
        n.removeAttributeNode(c[0]);
      (ce(n, o, s), (n[ue] = t), (n[ge] = s));
    } catch (d) {
      Vt(t, t.return, d);
    }
  }
  var Ln = !1,
    Xt = !1,
    wu = !1,
    oy = typeof WeakSet == "function" ? WeakSet : Set,
    se = null;
  function iT(t, n) {
    if (((t = t.containerInfo), (Xu = Lo), (t = vm(t)), bc(t))) {
      if ("selectionStart" in t)
        var s = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          s = ((s = t.ownerDocument) && s.defaultView) || window;
          var o = s.getSelection && s.getSelection();
          if (o && o.rangeCount !== 0) {
            s = o.anchorNode;
            var c = o.anchorOffset,
              d = o.focusNode;
            o = o.focusOffset;
            try {
              (s.nodeType, d.nodeType);
            } catch {
              s = null;
              break t;
            }
            var v = 0,
              w = -1,
              M = -1,
              k = 0,
              q = 0,
              K = t,
              B = null;
            e: for (;;) {
              for (
                var H;
                K !== s || (c !== 0 && K.nodeType !== 3) || (w = v + c),
                  K !== d || (o !== 0 && K.nodeType !== 3) || (M = v + o),
                  K.nodeType === 3 && (v += K.nodeValue.length),
                  (H = K.firstChild) !== null;
              )
                ((B = K), (K = H));
              for (;;) {
                if (K === t) break e;
                if (
                  (B === s && ++k === c && (w = v),
                  B === d && ++q === o && (M = v),
                  (H = K.nextSibling) !== null)
                )
                  break;
                ((K = B), (B = K.parentNode));
              }
              K = H;
            }
            s = w === -1 || M === -1 ? null : { start: w, end: M };
          } else s = null;
        }
      s = s || { start: 0, end: 0 };
    } else s = null;
    for (
      Fu = { focusedElem: t, selectionRange: s }, Lo = !1, se = n;
      se !== null;
    )
      if (
        ((n = se), (t = n.child), (n.subtreeFlags & 1024) !== 0 && t !== null)
      )
        ((t.return = n), (se = t));
      else
        for (; se !== null;) {
          switch (((n = se), (d = n.alternate), (t = n.flags), n.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && d !== null) {
                ((t = void 0),
                  (s = n),
                  (c = d.memoizedProps),
                  (d = d.memoizedState),
                  (o = s.stateNode));
                try {
                  var yt = Pi(s.type, c, s.elementType === s.type);
                  ((t = o.getSnapshotBeforeUpdate(yt, d)),
                    (o.__reactInternalSnapshotBeforeUpdate = t));
                } catch (ht) {
                  Vt(s, s.return, ht);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = n.stateNode.containerInfo), (s = t.nodeType), s === 9)
                )
                  Zu(t);
                else if (s === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Zu(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (((t = n.sibling), t !== null)) {
            ((t.return = n.return), (se = t));
            break;
          }
          se = n.return;
        }
  }
  function ly(t, n, s) {
    var o = s.flags;
    switch (s.tag) {
      case 0:
      case 11:
      case 15:
        (ii(t, s), o & 4 && _a(5, s));
        break;
      case 1:
        if ((ii(t, s), o & 4))
          if (((t = s.stateNode), n === null))
            try {
              t.componentDidMount();
            } catch (v) {
              Vt(s, s.return, v);
            }
          else {
            var c = Pi(s.type, n.memoizedProps);
            n = n.memoizedState;
            try {
              t.componentDidUpdate(c, n, t.__reactInternalSnapshotBeforeUpdate);
            } catch (v) {
              Vt(s, s.return, v);
            }
          }
        (o & 64 && ny(s), o & 512 && za(s, s.return));
        break;
      case 3:
        if ((ii(t, s), o & 64 && ((t = s.updateQueue), t !== null))) {
          if (((n = null), s.child !== null))
            switch (s.child.tag) {
              case 27:
              case 5:
                n = s.child.stateNode;
                break;
              case 1:
                n = s.child.stateNode;
            }
          try {
            Ym(t, n);
          } catch (v) {
            Vt(s, s.return, v);
          }
        }
        break;
      case 27:
        n === null && o & 4 && ry(s);
      case 26:
      case 5:
        (ii(t, s), n === null && o & 4 && sy(s), o & 512 && za(s, s.return));
        break;
      case 12:
        ii(t, s);
        break;
      case 13:
        (ii(t, s),
          o & 4 && fy(t, s),
          o & 64 &&
            ((t = s.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((s = dT.bind(null, s)), DT(t, s)))));
        break;
      case 22:
        if (((o = s.memoizedState !== null || Ln), !o)) {
          ((n = (n !== null && n.memoizedState !== null) || Xt), (c = Ln));
          var d = Xt;
          ((Ln = o),
            (Xt = n) && !d ? si(t, s, (s.subtreeFlags & 8772) !== 0) : ii(t, s),
            (Ln = c),
            (Xt = d));
        }
        break;
      case 30:
        break;
      default:
        ii(t, s);
    }
  }
  function cy(t) {
    var n = t.alternate;
    (n !== null && ((t.alternate = null), cy(n)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((n = t.stateNode), n !== null && tc(n)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var Bt = null,
    xe = !1;
  function kn(t, n, s) {
    for (s = s.child; s !== null;) (uy(t, n, s), (s = s.sibling));
  }
  function uy(t, n, s) {
    if (Ae && typeof Ae.onCommitFiberUnmount == "function")
      try {
        Ae.onCommitFiberUnmount(ea, s);
      } catch {}
    switch (s.tag) {
      case 26:
        (Xt || hn(s, n),
          kn(t, n, s),
          s.memoizedState
            ? s.memoizedState.count--
            : s.stateNode && ((s = s.stateNode), s.parentNode.removeChild(s)));
        break;
      case 27:
        Xt || hn(s, n);
        var o = Bt,
          c = xe;
        (ui(s.type) && ((Bt = s.stateNode), (xe = !1)),
          kn(t, n, s),
          Ya(s.stateNode),
          (Bt = o),
          (xe = c));
        break;
      case 5:
        Xt || hn(s, n);
      case 6:
        if (
          ((o = Bt),
          (c = xe),
          (Bt = null),
          kn(t, n, s),
          (Bt = o),
          (xe = c),
          Bt !== null)
        )
          if (xe)
            try {
              (Bt.nodeType === 9
                ? Bt.body
                : Bt.nodeName === "HTML"
                  ? Bt.ownerDocument.body
                  : Bt
              ).removeChild(s.stateNode);
            } catch (d) {
              Vt(s, n, d);
            }
          else
            try {
              Bt.removeChild(s.stateNode);
            } catch (d) {
              Vt(s, n, d);
            }
        break;
      case 18:
        Bt !== null &&
          (xe
            ? ((t = Bt),
              $y(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                s.stateNode,
              ),
              Ia(t))
            : $y(Bt, s.stateNode));
        break;
      case 4:
        ((o = Bt),
          (c = xe),
          (Bt = s.stateNode.containerInfo),
          (xe = !0),
          kn(t, n, s),
          (Bt = o),
          (xe = c));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Xt || ni(2, s, n), Xt || ni(4, s, n), kn(t, n, s));
        break;
      case 1:
        (Xt ||
          (hn(s, n),
          (o = s.stateNode),
          typeof o.componentWillUnmount == "function" && iy(s, n, o)),
          kn(t, n, s));
        break;
      case 21:
        kn(t, n, s);
        break;
      case 22:
        ((Xt = (o = Xt) || s.memoizedState !== null), kn(t, n, s), (Xt = o));
        break;
      default:
        kn(t, n, s);
    }
  }
  function fy(t, n) {
    if (
      n.memoizedState === null &&
      ((t = n.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Ia(t);
      } catch (s) {
        Vt(n, n.return, s);
      }
  }
  function sT(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var n = t.stateNode;
        return (n === null && (n = t.stateNode = new oy()), n);
      case 22:
        return (
          (t = t.stateNode),
          (n = t._retryCache),
          n === null && (n = t._retryCache = new oy()),
          n
        );
      default:
        throw Error(r(435, t.tag));
    }
  }
  function Su(t, n) {
    var s = sT(t);
    n.forEach(function (o) {
      var c = hT.bind(null, t, o);
      s.has(o) || (s.add(o), o.then(c, c));
    });
  }
  function Oe(t, n) {
    var s = n.deletions;
    if (s !== null)
      for (var o = 0; o < s.length; o++) {
        var c = s[o],
          d = t,
          v = n,
          w = v;
        t: for (; w !== null;) {
          switch (w.tag) {
            case 27:
              if (ui(w.type)) {
                ((Bt = w.stateNode), (xe = !1));
                break t;
              }
              break;
            case 5:
              ((Bt = w.stateNode), (xe = !1));
              break t;
            case 3:
            case 4:
              ((Bt = w.stateNode.containerInfo), (xe = !0));
              break t;
          }
          w = w.return;
        }
        if (Bt === null) throw Error(r(160));
        (uy(d, v, c),
          (Bt = null),
          (xe = !1),
          (d = c.alternate),
          d !== null && (d.return = null),
          (c.return = null));
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null;) (dy(n, t), (n = n.sibling));
  }
  var Ie = null;
  function dy(t, n) {
    var s = t.alternate,
      o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Oe(n, t),
          De(t),
          o & 4 && (ni(3, t, t.return), _a(3, t), ni(5, t, t.return)));
        break;
      case 1:
        (Oe(n, t),
          De(t),
          o & 512 && (Xt || s === null || hn(s, s.return)),
          o & 64 &&
            Ln &&
            ((t = t.updateQueue),
            t !== null &&
              ((o = t.callbacks),
              o !== null &&
                ((s = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = s === null ? o : s.concat(o))))));
        break;
      case 26:
        var c = Ie;
        if (
          (Oe(n, t),
          De(t),
          o & 512 && (Xt || s === null || hn(s, s.return)),
          o & 4)
        ) {
          var d = s !== null ? s.memoizedState : null;
          if (((o = t.memoizedState), s === null))
            if (o === null)
              if (t.stateNode === null) {
                t: {
                  ((o = t.type),
                    (s = t.memoizedProps),
                    (c = c.ownerDocument || c));
                  e: switch (o) {
                    case "title":
                      ((d = c.getElementsByTagName("title")[0]),
                        (!d ||
                          d[sa] ||
                          d[ue] ||
                          d.namespaceURI === "http://www.w3.org/2000/svg" ||
                          d.hasAttribute("itemprop")) &&
                          ((d = c.createElement(o)),
                          c.head.insertBefore(
                            d,
                            c.querySelector("head > title"),
                          )),
                        ce(d, o, s),
                        (d[ue] = t),
                        ne(d),
                        (o = d));
                      break t;
                    case "link":
                      var v = rg("link", "href", c).get(o + (s.href || ""));
                      if (v) {
                        for (var w = 0; w < v.length; w++)
                          if (
                            ((d = v[w]),
                            d.getAttribute("href") ===
                              (s.href == null || s.href === ""
                                ? null
                                : s.href) &&
                              d.getAttribute("rel") ===
                                (s.rel == null ? null : s.rel) &&
                              d.getAttribute("title") ===
                                (s.title == null ? null : s.title) &&
                              d.getAttribute("crossorigin") ===
                                (s.crossOrigin == null ? null : s.crossOrigin))
                          ) {
                            v.splice(w, 1);
                            break e;
                          }
                      }
                      ((d = c.createElement(o)),
                        ce(d, o, s),
                        c.head.appendChild(d));
                      break;
                    case "meta":
                      if (
                        (v = rg("meta", "content", c).get(
                          o + (s.content || ""),
                        ))
                      ) {
                        for (w = 0; w < v.length; w++)
                          if (
                            ((d = v[w]),
                            d.getAttribute("content") ===
                              (s.content == null ? null : "" + s.content) &&
                              d.getAttribute("name") ===
                                (s.name == null ? null : s.name) &&
                              d.getAttribute("property") ===
                                (s.property == null ? null : s.property) &&
                              d.getAttribute("http-equiv") ===
                                (s.httpEquiv == null ? null : s.httpEquiv) &&
                              d.getAttribute("charset") ===
                                (s.charSet == null ? null : s.charSet))
                          ) {
                            v.splice(w, 1);
                            break e;
                          }
                      }
                      ((d = c.createElement(o)),
                        ce(d, o, s),
                        c.head.appendChild(d));
                      break;
                    default:
                      throw Error(r(468, o));
                  }
                  ((d[ue] = t), ne(d), (o = d));
                }
                t.stateNode = o;
              } else og(c, t.type, t.stateNode);
            else t.stateNode = ag(c, o, t.memoizedProps);
          else
            d !== o
              ? (d === null
                  ? s.stateNode !== null &&
                    ((s = s.stateNode), s.parentNode.removeChild(s))
                  : d.count--,
                o === null
                  ? og(c, t.type, t.stateNode)
                  : ag(c, o, t.memoizedProps))
              : o === null &&
                t.stateNode !== null &&
                vu(t, t.memoizedProps, s.memoizedProps);
        }
        break;
      case 27:
        (Oe(n, t),
          De(t),
          o & 512 && (Xt || s === null || hn(s, s.return)),
          s !== null && o & 4 && vu(t, t.memoizedProps, s.memoizedProps));
        break;
      case 5:
        if (
          (Oe(n, t),
          De(t),
          o & 512 && (Xt || s === null || hn(s, s.return)),
          t.flags & 32)
        ) {
          c = t.stateNode;
          try {
            rs(c, "");
          } catch (H) {
            Vt(t, t.return, H);
          }
        }
        (o & 4 &&
          t.stateNode != null &&
          ((c = t.memoizedProps), vu(t, c, s !== null ? s.memoizedProps : c)),
          o & 1024 && (wu = !0));
        break;
      case 6:
        if ((Oe(n, t), De(t), o & 4)) {
          if (t.stateNode === null) throw Error(r(162));
          ((o = t.memoizedProps), (s = t.stateNode));
          try {
            s.nodeValue = o;
          } catch (H) {
            Vt(t, t.return, H);
          }
        }
        break;
      case 3:
        if (
          ((_o = null),
          (c = Ie),
          (Ie = No(n.containerInfo)),
          Oe(n, t),
          (Ie = c),
          De(t),
          o & 4 && s !== null && s.memoizedState.isDehydrated)
        )
          try {
            Ia(n.containerInfo);
          } catch (H) {
            Vt(t, t.return, H);
          }
        wu && ((wu = !1), hy(t));
        break;
      case 4:
        ((o = Ie),
          (Ie = No(t.stateNode.containerInfo)),
          Oe(n, t),
          De(t),
          (Ie = o));
        break;
      case 12:
        (Oe(n, t), De(t));
        break;
      case 13:
        (Oe(n, t),
          De(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (s !== null && s.memoizedState !== null) &&
            (Mu = un()),
          o & 4 &&
            ((o = t.updateQueue),
            o !== null && ((t.updateQueue = null), Su(t, o))));
        break;
      case 22:
        c = t.memoizedState !== null;
        var M = s !== null && s.memoizedState !== null,
          k = Ln,
          q = Xt;
        if (
          ((Ln = k || c),
          (Xt = q || M),
          Oe(n, t),
          (Xt = q),
          (Ln = k),
          De(t),
          o & 8192)
        )
          t: for (
            n = t.stateNode,
              n._visibility = c ? n._visibility & -2 : n._visibility | 1,
              c && (s === null || M || Ln || Xt || Bi(t)),
              s = null,
              n = t;
            ;
          ) {
            if (n.tag === 5 || n.tag === 26) {
              if (s === null) {
                M = s = n;
                try {
                  if (((d = M.stateNode), c))
                    ((v = d.style),
                      typeof v.setProperty == "function"
                        ? v.setProperty("display", "none", "important")
                        : (v.display = "none"));
                  else {
                    w = M.stateNode;
                    var K = M.memoizedProps.style,
                      B =
                        K != null && K.hasOwnProperty("display")
                          ? K.display
                          : null;
                    w.style.display =
                      B == null || typeof B == "boolean" ? "" : ("" + B).trim();
                  }
                } catch (H) {
                  Vt(M, M.return, H);
                }
              }
            } else if (n.tag === 6) {
              if (s === null) {
                M = n;
                try {
                  M.stateNode.nodeValue = c ? "" : M.memoizedProps;
                } catch (H) {
                  Vt(M, M.return, H);
                }
              }
            } else if (
              ((n.tag !== 22 && n.tag !== 23) ||
                n.memoizedState === null ||
                n === t) &&
              n.child !== null
            ) {
              ((n.child.return = n), (n = n.child));
              continue;
            }
            if (n === t) break t;
            for (; n.sibling === null;) {
              if (n.return === null || n.return === t) break t;
              (s === n && (s = null), (n = n.return));
            }
            (s === n && (s = null),
              (n.sibling.return = n.return),
              (n = n.sibling));
          }
        o & 4 &&
          ((o = t.updateQueue),
          o !== null &&
            ((s = o.retryQueue),
            s !== null && ((o.retryQueue = null), Su(t, s))));
        break;
      case 19:
        (Oe(n, t),
          De(t),
          o & 4 &&
            ((o = t.updateQueue),
            o !== null && ((t.updateQueue = null), Su(t, o))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Oe(n, t), De(t));
    }
  }
  function De(t) {
    var n = t.flags;
    if (n & 2) {
      try {
        for (var s, o = t.return; o !== null;) {
          if (ay(o)) {
            s = o;
            break;
          }
          o = o.return;
        }
        if (s == null) throw Error(r(160));
        switch (s.tag) {
          case 27:
            var c = s.stateNode,
              d = bu(t);
            vo(t, d, c);
            break;
          case 5:
            var v = s.stateNode;
            s.flags & 32 && (rs(v, ""), (s.flags &= -33));
            var w = bu(t);
            vo(t, w, v);
            break;
          case 3:
          case 4:
            var M = s.stateNode.containerInfo,
              k = bu(t);
            xu(t, k, M);
            break;
          default:
            throw Error(r(161));
        }
      } catch (q) {
        Vt(t, t.return, q);
      }
      t.flags &= -3;
    }
    n & 4096 && (t.flags &= -4097);
  }
  function hy(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null;) {
        var n = t;
        (hy(n),
          n.tag === 5 && n.flags & 1024 && n.stateNode.reset(),
          (t = t.sibling));
      }
  }
  function ii(t, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null;) (ly(t, n.alternate, n), (n = n.sibling));
  }
  function Bi(t) {
    for (t = t.child; t !== null;) {
      var n = t;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (ni(4, n, n.return), Bi(n));
          break;
        case 1:
          hn(n, n.return);
          var s = n.stateNode;
          (typeof s.componentWillUnmount == "function" && iy(n, n.return, s),
            Bi(n));
          break;
        case 27:
          Ya(n.stateNode);
        case 26:
        case 5:
          (hn(n, n.return), Bi(n));
          break;
        case 22:
          n.memoizedState === null && Bi(n);
          break;
        case 30:
          Bi(n);
          break;
        default:
          Bi(n);
      }
      t = t.sibling;
    }
  }
  function si(t, n, s) {
    for (s = s && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null;) {
      var o = n.alternate,
        c = t,
        d = n,
        v = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          (si(c, d, s), _a(4, d));
          break;
        case 1:
          if (
            (si(c, d, s),
            (o = d),
            (c = o.stateNode),
            typeof c.componentDidMount == "function")
          )
            try {
              c.componentDidMount();
            } catch (k) {
              Vt(o, o.return, k);
            }
          if (((o = d), (c = o.updateQueue), c !== null)) {
            var w = o.stateNode;
            try {
              var M = c.shared.hiddenCallbacks;
              if (M !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < M.length; c++)
                  qm(M[c], w);
            } catch (k) {
              Vt(o, o.return, k);
            }
          }
          (s && v & 64 && ny(d), za(d, d.return));
          break;
        case 27:
          ry(d);
        case 26:
        case 5:
          (si(c, d, s), s && o === null && v & 4 && sy(d), za(d, d.return));
          break;
        case 12:
          si(c, d, s);
          break;
        case 13:
          (si(c, d, s), s && v & 4 && fy(c, d));
          break;
        case 22:
          (d.memoizedState === null && si(c, d, s), za(d, d.return));
          break;
        case 30:
          break;
        default:
          si(c, d, s);
      }
      n = n.sibling;
    }
  }
  function Tu(t, n) {
    var s = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (s = t.memoizedState.cachePool.pool),
      (t = null),
      n.memoizedState !== null &&
        n.memoizedState.cachePool !== null &&
        (t = n.memoizedState.cachePool.pool),
      t !== s && (t != null && t.refCount++, s != null && ba(s)));
  }
  function Eu(t, n) {
    ((t = null),
      n.alternate !== null && (t = n.alternate.memoizedState.cache),
      (n = n.memoizedState.cache),
      n !== t && (n.refCount++, t != null && ba(t)));
  }
  function mn(t, n, s, o) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null;) (my(t, n, s, o), (n = n.sibling));
  }
  function my(t, n, s, o) {
    var c = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (mn(t, n, s, o), c & 2048 && _a(9, n));
        break;
      case 1:
        mn(t, n, s, o);
        break;
      case 3:
        (mn(t, n, s, o),
          c & 2048 &&
            ((t = null),
            n.alternate !== null && (t = n.alternate.memoizedState.cache),
            (n = n.memoizedState.cache),
            n !== t && (n.refCount++, t != null && ba(t))));
        break;
      case 12:
        if (c & 2048) {
          (mn(t, n, s, o), (t = n.stateNode));
          try {
            var d = n.memoizedProps,
              v = d.id,
              w = d.onPostCommit;
            typeof w == "function" &&
              w(
                v,
                n.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (M) {
            Vt(n, n.return, M);
          }
        } else mn(t, n, s, o);
        break;
      case 13:
        mn(t, n, s, o);
        break;
      case 23:
        break;
      case 22:
        ((d = n.stateNode),
          (v = n.alternate),
          n.memoizedState !== null
            ? d._visibility & 2
              ? mn(t, n, s, o)
              : Va(t, n)
            : d._visibility & 2
              ? mn(t, n, s, o)
              : ((d._visibility |= 2),
                As(t, n, s, o, (n.subtreeFlags & 10256) !== 0)),
          c & 2048 && Tu(v, n));
        break;
      case 24:
        (mn(t, n, s, o), c & 2048 && Eu(n.alternate, n));
        break;
      default:
        mn(t, n, s, o);
    }
  }
  function As(t, n, s, o, c) {
    for (c = c && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null;) {
      var d = t,
        v = n,
        w = s,
        M = o,
        k = v.flags;
      switch (v.tag) {
        case 0:
        case 11:
        case 15:
          (As(d, v, w, M, c), _a(8, v));
          break;
        case 23:
          break;
        case 22:
          var q = v.stateNode;
          (v.memoizedState !== null
            ? q._visibility & 2
              ? As(d, v, w, M, c)
              : Va(d, v)
            : ((q._visibility |= 2), As(d, v, w, M, c)),
            c && k & 2048 && Tu(v.alternate, v));
          break;
        case 24:
          (As(d, v, w, M, c), c && k & 2048 && Eu(v.alternate, v));
          break;
        default:
          As(d, v, w, M, c);
      }
      n = n.sibling;
    }
  }
  function Va(t, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null;) {
        var s = t,
          o = n,
          c = o.flags;
        switch (o.tag) {
          case 22:
            (Va(s, o), c & 2048 && Tu(o.alternate, o));
            break;
          case 24:
            (Va(s, o), c & 2048 && Eu(o.alternate, o));
            break;
          default:
            Va(s, o);
        }
        n = n.sibling;
      }
  }
  var La = 8192;
  function Cs(t) {
    if (t.subtreeFlags & La)
      for (t = t.child; t !== null;) (py(t), (t = t.sibling));
  }
  function py(t) {
    switch (t.tag) {
      case 26:
        (Cs(t),
          t.flags & La &&
            t.memoizedState !== null &&
            YT(Ie, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        Cs(t);
        break;
      case 3:
      case 4:
        var n = Ie;
        ((Ie = No(t.stateNode.containerInfo)), Cs(t), (Ie = n));
        break;
      case 22:
        t.memoizedState === null &&
          ((n = t.alternate),
          n !== null && n.memoizedState !== null
            ? ((n = La), (La = 16777216), Cs(t), (La = n))
            : Cs(t));
        break;
      default:
        Cs(t);
    }
  }
  function yy(t) {
    var n = t.alternate;
    if (n !== null && ((t = n.child), t !== null)) {
      n.child = null;
      do ((n = t.sibling), (t.sibling = null), (t = n));
      while (t !== null);
    }
  }
  function ka(t) {
    var n = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (n !== null)
        for (var s = 0; s < n.length; s++) {
          var o = n[s];
          ((se = o), vy(o, t));
        }
      yy(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) (gy(t), (t = t.sibling));
  }
  function gy(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (ka(t), t.flags & 2048 && ni(9, t, t.return));
        break;
      case 3:
        ka(t);
        break;
      case 12:
        ka(t);
        break;
      case 22:
        var n = t.stateNode;
        t.memoizedState !== null &&
        n._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((n._visibility &= -3), bo(t))
          : ka(t);
        break;
      default:
        ka(t);
    }
  }
  function bo(t) {
    var n = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (n !== null)
        for (var s = 0; s < n.length; s++) {
          var o = n[s];
          ((se = o), vy(o, t));
        }
      yy(t);
    }
    for (t = t.child; t !== null;) {
      switch (((n = t), n.tag)) {
        case 0:
        case 11:
        case 15:
          (ni(8, n, n.return), bo(n));
          break;
        case 22:
          ((s = n.stateNode),
            s._visibility & 2 && ((s._visibility &= -3), bo(n)));
          break;
        default:
          bo(n);
      }
      t = t.sibling;
    }
  }
  function vy(t, n) {
    for (; se !== null;) {
      var s = se;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          ni(8, s, n);
          break;
        case 23:
        case 22:
          if (s.memoizedState !== null && s.memoizedState.cachePool !== null) {
            var o = s.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          ba(s.memoizedState.cache);
      }
      if (((o = s.child), o !== null)) ((o.return = s), (se = o));
      else
        t: for (s = t; se !== null;) {
          o = se;
          var c = o.sibling,
            d = o.return;
          if ((cy(o), o === s)) {
            se = null;
            break t;
          }
          if (c !== null) {
            ((c.return = d), (se = c));
            break t;
          }
          se = d;
        }
    }
  }
  var aT = {
      getCacheForType: function (t) {
        var n = fe(Wt),
          s = n.data.get(t);
        return (s === void 0 && ((s = t()), n.data.set(t, s)), s);
      },
    },
    rT = typeof WeakMap == "function" ? WeakMap : Map,
    Dt = 0,
    kt = null,
    St = null,
    Et = 0,
    Nt = 0,
    Ne = null,
    ai = !1,
    Rs = !1,
    Au = !1,
    Pn = 0,
    qt = 0,
    ri = 0,
    Ui = 0,
    Cu = 0,
    Xe = 0,
    Ms = 0,
    Pa = null,
    we = null,
    Ru = !1,
    Mu = 0,
    xo = 1 / 0,
    wo = null,
    oi = null,
    le = 0,
    li = null,
    Os = null,
    Ds = 0,
    Ou = 0,
    Du = null,
    by = null,
    Ba = 0,
    Nu = null;
  function je() {
    if ((Dt & 2) !== 0 && Et !== 0) return Et & -Et;
    if (z.T !== null) {
      var t = gs;
      return t !== 0 ? t : Pu();
    }
    return Vh();
  }
  function xy() {
    Xe === 0 && (Xe = (Et & 536870912) === 0 || Mt ? Nh() : 536870912);
    var t = Ge.current;
    return (t !== null && (t.flags |= 32), Xe);
  }
  function _e(t, n, s) {
    (((t === kt && (Nt === 2 || Nt === 9)) || t.cancelPendingCommit !== null) &&
      (Ns(t, 0), ci(t, Et, Xe, !1)),
      ia(t, s),
      ((Dt & 2) === 0 || t !== kt) &&
        (t === kt &&
          ((Dt & 2) === 0 && (Ui |= s), qt === 4 && ci(t, Et, Xe, !1)),
        pn(t)));
  }
  function wy(t, n, s) {
    if ((Dt & 6) !== 0) throw Error(r(327));
    var o = (!s && (n & 124) === 0 && (n & t.expiredLanes) === 0) || na(t, n),
      c = o ? cT(t, n) : zu(t, n, !0),
      d = o;
    do {
      if (c === 0) {
        Rs && !o && ci(t, n, 0, !1);
        break;
      } else {
        if (((s = t.current.alternate), d && !oT(s))) {
          ((c = zu(t, n, !1)), (d = !1));
          continue;
        }
        if (c === 2) {
          if (((d = n), t.errorRecoveryDisabledLanes & d)) var v = 0;
          else
            ((v = t.pendingLanes & -536870913),
              (v = v !== 0 ? v : v & 536870912 ? 536870912 : 0));
          if (v !== 0) {
            n = v;
            t: {
              var w = t;
              c = Pa;
              var M = w.current.memoizedState.isDehydrated;
              if ((M && (Ns(w, v).flags |= 256), (v = zu(w, v, !1)), v !== 2)) {
                if (Au && !M) {
                  ((w.errorRecoveryDisabledLanes |= d), (Ui |= d), (c = 4));
                  break t;
                }
                ((d = we),
                  (we = c),
                  d !== null &&
                    (we === null ? (we = d) : we.push.apply(we, d)));
              }
              c = v;
            }
            if (((d = !1), c !== 2)) continue;
          }
        }
        if (c === 1) {
          (Ns(t, 0), ci(t, n, 0, !0));
          break;
        }
        t: {
          switch (((o = t), (d = c), d)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              ci(o, n, Xe, !ai);
              break t;
            case 2:
              we = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((n & 62914560) === n && ((c = Mu + 300 - un()), 10 < c)) {
            if ((ci(o, n, Xe, !ai), Nr(o, 0, !0) !== 0)) break t;
            o.timeoutHandle = Wy(
              Sy.bind(null, o, s, we, wo, Ru, n, Xe, Ui, Ms, ai, d, 2, -0, 0),
              c,
            );
            break t;
          }
          Sy(o, s, we, wo, Ru, n, Xe, Ui, Ms, ai, d, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    pn(t);
  }
  function Sy(t, n, s, o, c, d, v, w, M, k, q, K, B, H) {
    if (
      ((t.timeoutHandle = -1),
      (K = n.subtreeFlags),
      (K & 8192 || (K & 16785408) === 16785408) &&
        ((Fa = { stylesheets: null, count: 0, unsuspend: qT }),
        py(n),
        (K = GT()),
        K !== null))
    ) {
      ((t.cancelPendingCommit = K(
        Oy.bind(null, t, n, d, s, o, c, v, w, M, q, 1, B, H),
      )),
        ci(t, d, v, !k));
      return;
    }
    Oy(t, n, d, s, o, c, v, w, M);
  }
  function oT(t) {
    for (var n = t; ;) {
      var s = n.tag;
      if (
        (s === 0 || s === 11 || s === 15) &&
        n.flags & 16384 &&
        ((s = n.updateQueue), s !== null && ((s = s.stores), s !== null))
      )
        for (var o = 0; o < s.length; o++) {
          var c = s[o],
            d = c.getSnapshot;
          c = c.value;
          try {
            if (!Re(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      if (((s = n.child), n.subtreeFlags & 16384 && s !== null))
        ((s.return = n), (n = s));
      else {
        if (n === t) break;
        for (; n.sibling === null;) {
          if (n.return === null || n.return === t) return !0;
          n = n.return;
        }
        ((n.sibling.return = n.return), (n = n.sibling));
      }
    }
    return !0;
  }
  function ci(t, n, s, o) {
    ((n &= ~Cu),
      (n &= ~Ui),
      (t.suspendedLanes |= n),
      (t.pingedLanes &= ~n),
      o && (t.warmLanes |= n),
      (o = t.expirationTimes));
    for (var c = n; 0 < c;) {
      var d = 31 - Ce(c),
        v = 1 << d;
      ((o[d] = -1), (c &= ~v));
    }
    s !== 0 && _h(t, s, n);
  }
  function So() {
    return (Dt & 6) === 0 ? (Ua(0), !1) : !0;
  }
  function ju() {
    if (St !== null) {
      if (Nt === 0) var t = St.return;
      else ((t = St), (Dn = zi = null), Zc(t), (Ts = null), (Da = 0), (t = St));
      for (; t !== null;) (ey(t.alternate, t), (t = t.return));
      St = null;
    }
  }
  function Ns(t, n) {
    var s = t.timeoutHandle;
    (s !== -1 && ((t.timeoutHandle = -1), AT(s)),
      (s = t.cancelPendingCommit),
      s !== null && ((t.cancelPendingCommit = null), s()),
      ju(),
      (kt = t),
      (St = s = Rn(t.current, null)),
      (Et = n),
      (Nt = 0),
      (Ne = null),
      (ai = !1),
      (Rs = na(t, n)),
      (Au = !1),
      (Ms = Xe = Cu = Ui = ri = qt = 0),
      (we = Pa = null),
      (Ru = !1),
      (n & 8) !== 0 && (n |= n & 32));
    var o = t.entangledLanes;
    if (o !== 0)
      for (t = t.entanglements, o &= n; 0 < o;) {
        var c = 31 - Ce(o),
          d = 1 << c;
        ((n |= t[c]), (o &= ~d));
      }
    return ((Pn = n), Yr(), s);
  }
  function Ty(t, n) {
    ((bt = null),
      (z.H = lo),
      n === wa || n === $r
        ? ((n = Um()), (Nt = 3))
        : n === km
          ? ((n = Um()), (Nt = 4))
          : (Nt =
              n === Hp
                ? 8
                : n !== null &&
                    typeof n == "object" &&
                    typeof n.then == "function"
                  ? 6
                  : 1),
      (Ne = n),
      St === null && ((qt = 1), mo(t, Ue(n, t.current))));
  }
  function Ey() {
    var t = z.H;
    return ((z.H = lo), t === null ? lo : t);
  }
  function Ay() {
    var t = z.A;
    return ((z.A = aT), t);
  }
  function _u() {
    ((qt = 4),
      ai || ((Et & 4194048) !== Et && Ge.current !== null) || (Rs = !0),
      ((ri & 134217727) === 0 && (Ui & 134217727) === 0) ||
        kt === null ||
        ci(kt, Et, Xe, !1));
  }
  function zu(t, n, s) {
    var o = Dt;
    Dt |= 2;
    var c = Ey(),
      d = Ay();
    ((kt !== t || Et !== n) && ((wo = null), Ns(t, n)), (n = !1));
    var v = qt;
    t: do
      try {
        if (Nt !== 0 && St !== null) {
          var w = St,
            M = Ne;
          switch (Nt) {
            case 8:
              (ju(), (v = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Ge.current === null && (n = !0);
              var k = Nt;
              if (((Nt = 0), (Ne = null), js(t, w, M, k), s && Rs)) {
                v = 0;
                break t;
              }
              break;
            default:
              ((k = Nt), (Nt = 0), (Ne = null), js(t, w, M, k));
          }
        }
        (lT(), (v = qt));
        break;
      } catch (q) {
        Ty(t, q);
      }
    while (!0);
    return (
      n && t.shellSuspendCounter++,
      (Dn = zi = null),
      (Dt = o),
      (z.H = c),
      (z.A = d),
      St === null && ((kt = null), (Et = 0), Yr()),
      v
    );
  }
  function lT() {
    for (; St !== null;) Cy(St);
  }
  function cT(t, n) {
    var s = Dt;
    Dt |= 2;
    var o = Ey(),
      c = Ay();
    kt !== t || Et !== n
      ? ((wo = null), (xo = un() + 500), Ns(t, n))
      : (Rs = na(t, n));
    t: do
      try {
        if (Nt !== 0 && St !== null) {
          n = St;
          var d = Ne;
          e: switch (Nt) {
            case 1:
              ((Nt = 0), (Ne = null), js(t, n, d, 1));
              break;
            case 2:
            case 9:
              if (Pm(d)) {
                ((Nt = 0), (Ne = null), Ry(n));
                break;
              }
              ((n = function () {
                ((Nt !== 2 && Nt !== 9) || kt !== t || (Nt = 7), pn(t));
              }),
                d.then(n, n));
              break t;
            case 3:
              Nt = 7;
              break t;
            case 4:
              Nt = 5;
              break t;
            case 7:
              Pm(d)
                ? ((Nt = 0), (Ne = null), Ry(n))
                : ((Nt = 0), (Ne = null), js(t, n, d, 7));
              break;
            case 5:
              var v = null;
              switch (St.tag) {
                case 26:
                  v = St.memoizedState;
                case 5:
                case 27:
                  var w = St;
                  if (!v || lg(v)) {
                    ((Nt = 0), (Ne = null));
                    var M = w.sibling;
                    if (M !== null) St = M;
                    else {
                      var k = w.return;
                      k !== null ? ((St = k), To(k)) : (St = null);
                    }
                    break e;
                  }
              }
              ((Nt = 0), (Ne = null), js(t, n, d, 5));
              break;
            case 6:
              ((Nt = 0), (Ne = null), js(t, n, d, 6));
              break;
            case 8:
              (ju(), (qt = 6));
              break t;
            default:
              throw Error(r(462));
          }
        }
        uT();
        break;
      } catch (q) {
        Ty(t, q);
      }
    while (!0);
    return (
      (Dn = zi = null),
      (z.H = o),
      (z.A = c),
      (Dt = s),
      St !== null ? 0 : ((kt = null), (Et = 0), Yr(), qt)
    );
  }
  function uT() {
    for (; St !== null && !jw();) Cy(St);
  }
  function Cy(t) {
    var n = Jp(t.alternate, t, Pn);
    ((t.memoizedProps = t.pendingProps), n === null ? To(t) : (St = n));
  }
  function Ry(t) {
    var n = t,
      s = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Kp(s, n, n.pendingProps, n.type, void 0, Et);
        break;
      case 11:
        n = Kp(s, n, n.pendingProps, n.type.render, n.ref, Et);
        break;
      case 5:
        Zc(n);
      default:
        (ey(s, n), (n = St = Mm(n, Pn)), (n = Jp(s, n, Pn)));
    }
    ((t.memoizedProps = t.pendingProps), n === null ? To(t) : (St = n));
  }
  function js(t, n, s, o) {
    ((Dn = zi = null), Zc(n), (Ts = null), (Da = 0));
    var c = n.return;
    try {
      if (JS(t, c, n, s, Et)) {
        ((qt = 1), mo(t, Ue(s, t.current)), (St = null));
        return;
      }
    } catch (d) {
      if (c !== null) throw ((St = c), d);
      ((qt = 1), mo(t, Ue(s, t.current)), (St = null));
      return;
    }
    n.flags & 32768
      ? (Mt || o === 1
          ? (t = !0)
          : Rs || (Et & 536870912) !== 0
            ? (t = !1)
            : ((ai = t = !0),
              (o === 2 || o === 9 || o === 3 || o === 6) &&
                ((o = Ge.current),
                o !== null && o.tag === 13 && (o.flags |= 16384))),
        My(n, t))
      : To(n);
  }
  function To(t) {
    var n = t;
    do {
      if ((n.flags & 32768) !== 0) {
        My(n, ai);
        return;
      }
      t = n.return;
      var s = eT(n.alternate, n, Pn);
      if (s !== null) {
        St = s;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        St = n;
        return;
      }
      St = n = t;
    } while (n !== null);
    qt === 0 && (qt = 5);
  }
  function My(t, n) {
    do {
      var s = nT(t.alternate, t);
      if (s !== null) {
        ((s.flags &= 32767), (St = s));
        return;
      }
      if (
        ((s = t.return),
        s !== null &&
          ((s.flags |= 32768), (s.subtreeFlags = 0), (s.deletions = null)),
        !n && ((t = t.sibling), t !== null))
      ) {
        St = t;
        return;
      }
      St = t = s;
    } while (t !== null);
    ((qt = 6), (St = null));
  }
  function Oy(t, n, s, o, c, d, v, w, M) {
    t.cancelPendingCommit = null;
    do Eo();
    while (le !== 0);
    if ((Dt & 6) !== 0) throw Error(r(327));
    if (n !== null) {
      if (n === t.current) throw Error(r(177));
      if (
        ((d = n.lanes | n.childLanes),
        (d |= Ec),
        qw(t, s, d, v, w, M),
        t === kt && ((St = kt = null), (Et = 0)),
        (Os = n),
        (li = t),
        (Ds = s),
        (Ou = d),
        (Du = c),
        (by = o),
        (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            mT(Mr, function () {
              return (zy(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (o = (n.flags & 13878) !== 0),
        (n.subtreeFlags & 13878) !== 0 || o)
      ) {
        ((o = z.T), (z.T = null), (c = Q.p), (Q.p = 2), (v = Dt), (Dt |= 4));
        try {
          iT(t, n, s);
        } finally {
          ((Dt = v), (Q.p = c), (z.T = o));
        }
      }
      ((le = 1), Dy(), Ny(), jy());
    }
  }
  function Dy() {
    if (le === 1) {
      le = 0;
      var t = li,
        n = Os,
        s = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || s) {
        ((s = z.T), (z.T = null));
        var o = Q.p;
        Q.p = 2;
        var c = Dt;
        Dt |= 4;
        try {
          dy(n, t);
          var d = Fu,
            v = vm(t.containerInfo),
            w = d.focusedElem,
            M = d.selectionRange;
          if (
            v !== w &&
            w &&
            w.ownerDocument &&
            gm(w.ownerDocument.documentElement, w)
          ) {
            if (M !== null && bc(w)) {
              var k = M.start,
                q = M.end;
              if ((q === void 0 && (q = k), "selectionStart" in w))
                ((w.selectionStart = k),
                  (w.selectionEnd = Math.min(q, w.value.length)));
              else {
                var K = w.ownerDocument || document,
                  B = (K && K.defaultView) || window;
                if (B.getSelection) {
                  var H = B.getSelection(),
                    yt = w.textContent.length,
                    ht = Math.min(M.start, yt),
                    zt = M.end === void 0 ? ht : Math.min(M.end, yt);
                  !H.extend && ht > zt && ((v = zt), (zt = ht), (ht = v));
                  var _ = ym(w, ht),
                    O = ym(w, zt);
                  if (
                    _ &&
                    O &&
                    (H.rangeCount !== 1 ||
                      H.anchorNode !== _.node ||
                      H.anchorOffset !== _.offset ||
                      H.focusNode !== O.node ||
                      H.focusOffset !== O.offset)
                  ) {
                    var L = K.createRange();
                    (L.setStart(_.node, _.offset),
                      H.removeAllRanges(),
                      ht > zt
                        ? (H.addRange(L), H.extend(O.node, O.offset))
                        : (L.setEnd(O.node, O.offset), H.addRange(L)));
                  }
                }
              }
            }
            for (K = [], H = w; (H = H.parentNode);)
              H.nodeType === 1 &&
                K.push({ element: H, left: H.scrollLeft, top: H.scrollTop });
            for (
              typeof w.focus == "function" && w.focus(), w = 0;
              w < K.length;
              w++
            ) {
              var G = K[w];
              ((G.element.scrollLeft = G.left), (G.element.scrollTop = G.top));
            }
          }
          ((Lo = !!Xu), (Fu = Xu = null));
        } finally {
          ((Dt = c), (Q.p = o), (z.T = s));
        }
      }
      ((t.current = n), (le = 2));
    }
  }
  function Ny() {
    if (le === 2) {
      le = 0;
      var t = li,
        n = Os,
        s = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || s) {
        ((s = z.T), (z.T = null));
        var o = Q.p;
        Q.p = 2;
        var c = Dt;
        Dt |= 4;
        try {
          ly(t, n.alternate, n);
        } finally {
          ((Dt = c), (Q.p = o), (z.T = s));
        }
      }
      le = 3;
    }
  }
  function jy() {
    if (le === 4 || le === 3) {
      ((le = 0), _w());
      var t = li,
        n = Os,
        s = Ds,
        o = by;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
        ? (le = 5)
        : ((le = 0), (Os = li = null), _y(t, t.pendingLanes));
      var c = t.pendingLanes;
      if (
        (c === 0 && (oi = null),
        $l(s),
        (n = n.stateNode),
        Ae && typeof Ae.onCommitFiberRoot == "function")
      )
        try {
          Ae.onCommitFiberRoot(ea, n, void 0, (n.current.flags & 128) === 128);
        } catch {}
      if (o !== null) {
        ((n = z.T), (c = Q.p), (Q.p = 2), (z.T = null));
        try {
          for (var d = t.onRecoverableError, v = 0; v < o.length; v++) {
            var w = o[v];
            d(w.value, { componentStack: w.stack });
          }
        } finally {
          ((z.T = n), (Q.p = c));
        }
      }
      ((Ds & 3) !== 0 && Eo(),
        pn(t),
        (c = t.pendingLanes),
        (s & 4194090) !== 0 && (c & 42) !== 0
          ? t === Nu
            ? Ba++
            : ((Ba = 0), (Nu = t))
          : (Ba = 0),
        Ua(0));
    }
  }
  function _y(t, n) {
    (t.pooledCacheLanes &= n) === 0 &&
      ((n = t.pooledCache), n != null && ((t.pooledCache = null), ba(n)));
  }
  function Eo(t) {
    return (Dy(), Ny(), jy(), zy());
  }
  function zy() {
    if (le !== 5) return !1;
    var t = li,
      n = Ou;
    Ou = 0;
    var s = $l(Ds),
      o = z.T,
      c = Q.p;
    try {
      ((Q.p = 32 > s ? 32 : s), (z.T = null), (s = Du), (Du = null));
      var d = li,
        v = Ds;
      if (((le = 0), (Os = li = null), (Ds = 0), (Dt & 6) !== 0))
        throw Error(r(331));
      var w = Dt;
      if (
        ((Dt |= 4),
        gy(d.current),
        my(d, d.current, v, s),
        (Dt = w),
        Ua(0, !1),
        Ae && typeof Ae.onPostCommitFiberRoot == "function")
      )
        try {
          Ae.onPostCommitFiberRoot(ea, d);
        } catch {}
      return !0;
    } finally {
      ((Q.p = c), (z.T = o), _y(t, n));
    }
  }
  function Vy(t, n, s) {
    ((n = Ue(s, n)),
      (n = cu(t.stateNode, n, 2)),
      (t = $n(t, n, 2)),
      t !== null && (ia(t, 2), pn(t)));
  }
  function Vt(t, n, s) {
    if (t.tag === 3) Vy(t, t, s);
    else
      for (; n !== null;) {
        if (n.tag === 3) {
          Vy(n, t, s);
          break;
        } else if (n.tag === 1) {
          var o = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" &&
              (oi === null || !oi.has(o)))
          ) {
            ((t = Ue(s, t)),
              (s = Bp(2)),
              (o = $n(n, s, 2)),
              o !== null && (Up(s, o, n, t), ia(o, 2), pn(o)));
            break;
          }
        }
        n = n.return;
      }
  }
  function Vu(t, n, s) {
    var o = t.pingCache;
    if (o === null) {
      o = t.pingCache = new rT();
      var c = new Set();
      o.set(n, c);
    } else ((c = o.get(n)), c === void 0 && ((c = new Set()), o.set(n, c)));
    c.has(s) ||
      ((Au = !0), c.add(s), (t = fT.bind(null, t, n, s)), n.then(t, t));
  }
  function fT(t, n, s) {
    var o = t.pingCache;
    (o !== null && o.delete(n),
      (t.pingedLanes |= t.suspendedLanes & s),
      (t.warmLanes &= ~s),
      kt === t &&
        (Et & s) === s &&
        (qt === 4 || (qt === 3 && (Et & 62914560) === Et && 300 > un() - Mu)
          ? (Dt & 2) === 0 && Ns(t, 0)
          : (Cu |= s),
        Ms === Et && (Ms = 0)),
      pn(t));
  }
  function Ly(t, n) {
    (n === 0 && (n = jh()), (t = hs(t, n)), t !== null && (ia(t, n), pn(t)));
  }
  function dT(t) {
    var n = t.memoizedState,
      s = 0;
    (n !== null && (s = n.retryLane), Ly(t, s));
  }
  function hT(t, n) {
    var s = 0;
    switch (t.tag) {
      case 13:
        var o = t.stateNode,
          c = t.memoizedState;
        c !== null && (s = c.retryLane);
        break;
      case 19:
        o = t.stateNode;
        break;
      case 22:
        o = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    (o !== null && o.delete(n), Ly(t, s));
  }
  function mT(t, n) {
    return En(t, n);
  }
  var Ao = null,
    _s = null,
    Lu = !1,
    Co = !1,
    ku = !1,
    Hi = 0;
  function pn(t) {
    (t !== _s &&
      t.next === null &&
      (_s === null ? (Ao = _s = t) : (_s = _s.next = t)),
      (Co = !0),
      Lu || ((Lu = !0), yT()));
  }
  function Ua(t, n) {
    if (!ku && Co) {
      ku = !0;
      do
        for (var s = !1, o = Ao; o !== null;) {
          if (t !== 0) {
            var c = o.pendingLanes;
            if (c === 0) var d = 0;
            else {
              var v = o.suspendedLanes,
                w = o.pingedLanes;
              ((d = (1 << (31 - Ce(42 | t) + 1)) - 1),
                (d &= c & ~(v & ~w)),
                (d = d & 201326741 ? (d & 201326741) | 1 : d ? d | 2 : 0));
            }
            d !== 0 && ((s = !0), Uy(o, d));
          } else
            ((d = Et),
              (d = Nr(
                o,
                o === kt ? d : 0,
                o.cancelPendingCommit !== null || o.timeoutHandle !== -1,
              )),
              (d & 3) === 0 || na(o, d) || ((s = !0), Uy(o, d)));
          o = o.next;
        }
      while (s);
      ku = !1;
    }
  }
  function pT() {
    ky();
  }
  function ky() {
    Co = Lu = !1;
    var t = 0;
    Hi !== 0 && (ET() && (t = Hi), (Hi = 0));
    for (var n = un(), s = null, o = Ao; o !== null;) {
      var c = o.next,
        d = Py(o, n);
      (d === 0
        ? ((o.next = null),
          s === null ? (Ao = c) : (s.next = c),
          c === null && (_s = s))
        : ((s = o), (t !== 0 || (d & 3) !== 0) && (Co = !0)),
        (o = c));
    }
    Ua(t);
  }
  function Py(t, n) {
    for (
      var s = t.suspendedLanes,
        o = t.pingedLanes,
        c = t.expirationTimes,
        d = t.pendingLanes & -62914561;
      0 < d;
    ) {
      var v = 31 - Ce(d),
        w = 1 << v,
        M = c[v];
      (M === -1
        ? ((w & s) === 0 || (w & o) !== 0) && (c[v] = Hw(w, n))
        : M <= n && (t.expiredLanes |= w),
        (d &= ~w));
    }
    if (
      ((n = kt),
      (s = Et),
      (s = Nr(
        t,
        t === n ? s : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (o = t.callbackNode),
      s === 0 ||
        (t === n && (Nt === 2 || Nt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        o !== null && o !== null && Ee(o),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((s & 3) === 0 || na(t, s)) {
      if (((n = s & -s), n === t.callbackPriority)) return n;
      switch ((o !== null && Ee(o), $l(s))) {
        case 2:
        case 8:
          s = Oh;
          break;
        case 32:
          s = Mr;
          break;
        case 268435456:
          s = Dh;
          break;
        default:
          s = Mr;
      }
      return (
        (o = By.bind(null, t)),
        (s = En(s, o)),
        (t.callbackPriority = n),
        (t.callbackNode = s),
        n
      );
    }
    return (
      o !== null && o !== null && Ee(o),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function By(t, n) {
    if (le !== 0 && le !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var s = t.callbackNode;
    if (Eo() && t.callbackNode !== s) return null;
    var o = Et;
    return (
      (o = Nr(
        t,
        t === kt ? o : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      o === 0
        ? null
        : (wy(t, o, n),
          Py(t, un()),
          t.callbackNode != null && t.callbackNode === s
            ? By.bind(null, t)
            : null)
    );
  }
  function Uy(t, n) {
    if (Eo()) return null;
    wy(t, n, !0);
  }
  function yT() {
    CT(function () {
      (Dt & 6) !== 0 ? En(Mh, pT) : ky();
    });
  }
  function Pu() {
    return (Hi === 0 && (Hi = Nh()), Hi);
  }
  function Hy(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : Lr("" + t);
  }
  function qy(t, n) {
    var s = n.ownerDocument.createElement("input");
    return (
      (s.name = n.name),
      (s.value = n.value),
      t.id && s.setAttribute("form", t.id),
      n.parentNode.insertBefore(s, n),
      (t = new FormData(t)),
      s.parentNode.removeChild(s),
      t
    );
  }
  function gT(t, n, s, o, c) {
    if (n === "submit" && s && s.stateNode === c) {
      var d = Hy((c[ge] || null).action),
        v = o.submitter;
      v &&
        ((n = (n = v[ge] || null)
          ? Hy(n.formAction)
          : v.getAttribute("formAction")),
        n !== null && ((d = n), (v = null)));
      var w = new Ur("action", "action", null, o, c);
      t.push({
        event: w,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (o.defaultPrevented) {
                if (Hi !== 0) {
                  var M = v ? qy(c, v) : new FormData(c);
                  su(
                    s,
                    { pending: !0, data: M, method: c.method, action: d },
                    null,
                    M,
                  );
                }
              } else
                typeof d == "function" &&
                  (w.preventDefault(),
                  (M = v ? qy(c, v) : new FormData(c)),
                  su(
                    s,
                    { pending: !0, data: M, method: c.method, action: d },
                    d,
                    M,
                  ));
            },
            currentTarget: c,
          },
        ],
      });
    }
  }
  for (var Bu = 0; Bu < Tc.length; Bu++) {
    var Uu = Tc[Bu],
      vT = Uu.toLowerCase(),
      bT = Uu[0].toUpperCase() + Uu.slice(1);
    We(vT, "on" + bT);
  }
  (We(wm, "onAnimationEnd"),
    We(Sm, "onAnimationIteration"),
    We(Tm, "onAnimationStart"),
    We("dblclick", "onDoubleClick"),
    We("focusin", "onFocus"),
    We("focusout", "onBlur"),
    We(LS, "onTransitionRun"),
    We(kS, "onTransitionStart"),
    We(PS, "onTransitionCancel"),
    We(Em, "onTransitionEnd"),
    is("onMouseEnter", ["mouseout", "mouseover"]),
    is("onMouseLeave", ["mouseout", "mouseover"]),
    is("onPointerEnter", ["pointerout", "pointerover"]),
    is("onPointerLeave", ["pointerout", "pointerover"]),
    Ai(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Ai(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Ai("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ai(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ai(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ai(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Ha =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    xT = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Ha),
    );
  function Yy(t, n) {
    n = (n & 4) !== 0;
    for (var s = 0; s < t.length; s++) {
      var o = t[s],
        c = o.event;
      o = o.listeners;
      t: {
        var d = void 0;
        if (n)
          for (var v = o.length - 1; 0 <= v; v--) {
            var w = o[v],
              M = w.instance,
              k = w.currentTarget;
            if (((w = w.listener), M !== d && c.isPropagationStopped()))
              break t;
            ((d = w), (c.currentTarget = k));
            try {
              d(c);
            } catch (q) {
              ho(q);
            }
            ((c.currentTarget = null), (d = M));
          }
        else
          for (v = 0; v < o.length; v++) {
            if (
              ((w = o[v]),
              (M = w.instance),
              (k = w.currentTarget),
              (w = w.listener),
              M !== d && c.isPropagationStopped())
            )
              break t;
            ((d = w), (c.currentTarget = k));
            try {
              d(c);
            } catch (q) {
              ho(q);
            }
            ((c.currentTarget = null), (d = M));
          }
      }
    }
  }
  function Tt(t, n) {
    var s = n[Jl];
    s === void 0 && (s = n[Jl] = new Set());
    var o = t + "__bubble";
    s.has(o) || (Gy(n, t, 2, !1), s.add(o));
  }
  function Hu(t, n, s) {
    var o = 0;
    (n && (o |= 4), Gy(s, t, o, n));
  }
  var Ro = "_reactListening" + Math.random().toString(36).slice(2);
  function qu(t) {
    if (!t[Ro]) {
      ((t[Ro] = !0),
        kh.forEach(function (s) {
          s !== "selectionchange" && (xT.has(s) || Hu(s, !1, t), Hu(s, !0, t));
        }));
      var n = t.nodeType === 9 ? t : t.ownerDocument;
      n === null || n[Ro] || ((n[Ro] = !0), Hu("selectionchange", !1, n));
    }
  }
  function Gy(t, n, s, o) {
    switch (mg(n)) {
      case 2:
        var c = KT;
        break;
      case 8:
        c = QT;
        break;
      default:
        c = nf;
    }
    ((s = c.bind(null, n, s, t)),
      (c = void 0),
      !uc ||
        (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
        (c = !0),
      o
        ? c !== void 0
          ? t.addEventListener(n, s, { capture: !0, passive: c })
          : t.addEventListener(n, s, !0)
        : c !== void 0
          ? t.addEventListener(n, s, { passive: c })
          : t.addEventListener(n, s, !1));
  }
  function Yu(t, n, s, o, c) {
    var d = o;
    if ((n & 1) === 0 && (n & 2) === 0 && o !== null)
      t: for (;;) {
        if (o === null) return;
        var v = o.tag;
        if (v === 3 || v === 4) {
          var w = o.stateNode.containerInfo;
          if (w === c) break;
          if (v === 4)
            for (v = o.return; v !== null;) {
              var M = v.tag;
              if ((M === 3 || M === 4) && v.stateNode.containerInfo === c)
                return;
              v = v.return;
            }
          for (; w !== null;) {
            if (((v = ts(w)), v === null)) return;
            if (((M = v.tag), M === 5 || M === 6 || M === 26 || M === 27)) {
              o = d = v;
              continue t;
            }
            w = w.parentNode;
          }
        }
        o = o.return;
      }
    Ih(function () {
      var k = d,
        q = lc(s),
        K = [];
      t: {
        var B = Am.get(t);
        if (B !== void 0) {
          var H = Ur,
            yt = t;
          switch (t) {
            case "keypress":
              if (Pr(s) === 0) break t;
            case "keydown":
            case "keyup":
              H = mS;
              break;
            case "focusin":
              ((yt = "focus"), (H = mc));
              break;
            case "focusout":
              ((yt = "blur"), (H = mc));
              break;
            case "beforeblur":
            case "afterblur":
              H = mc;
              break;
            case "click":
              if (s.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              H = tm;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = nS;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = gS;
              break;
            case wm:
            case Sm:
            case Tm:
              H = aS;
              break;
            case Em:
              H = bS;
              break;
            case "scroll":
            case "scrollend":
              H = tS;
              break;
            case "wheel":
              H = wS;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = oS;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = nm;
              break;
            case "toggle":
            case "beforetoggle":
              H = TS;
          }
          var ht = (n & 4) !== 0,
            zt = !ht && (t === "scroll" || t === "scrollend"),
            _ = ht ? (B !== null ? B + "Capture" : null) : B;
          ht = [];
          for (var O = k, L; O !== null;) {
            var G = O;
            if (
              ((L = G.stateNode),
              (G = G.tag),
              (G !== 5 && G !== 26 && G !== 27) ||
                L === null ||
                _ === null ||
                ((G = ra(O, _)), G != null && ht.push(qa(O, G, L))),
              zt)
            )
              break;
            O = O.return;
          }
          0 < ht.length &&
            ((B = new H(B, yt, null, s, q)),
            K.push({ event: B, listeners: ht }));
        }
      }
      if ((n & 7) === 0) {
        t: {
          if (
            ((B = t === "mouseover" || t === "pointerover"),
            (H = t === "mouseout" || t === "pointerout"),
            B &&
              s !== oc &&
              (yt = s.relatedTarget || s.fromElement) &&
              (ts(yt) || yt[Ji]))
          )
            break t;
          if (
            (H || B) &&
            ((B =
              q.window === q
                ? q
                : (B = q.ownerDocument)
                  ? B.defaultView || B.parentWindow
                  : window),
            H
              ? ((yt = s.relatedTarget || s.toElement),
                (H = k),
                (yt = yt ? ts(yt) : null),
                yt !== null &&
                  ((zt = u(yt)),
                  (ht = yt.tag),
                  yt !== zt || (ht !== 5 && ht !== 27 && ht !== 6)) &&
                  (yt = null))
              : ((H = null), (yt = k)),
            H !== yt)
          ) {
            if (
              ((ht = tm),
              (G = "onMouseLeave"),
              (_ = "onMouseEnter"),
              (O = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((ht = nm),
                (G = "onPointerLeave"),
                (_ = "onPointerEnter"),
                (O = "pointer")),
              (zt = H == null ? B : aa(H)),
              (L = yt == null ? B : aa(yt)),
              (B = new ht(G, O + "leave", H, s, q)),
              (B.target = zt),
              (B.relatedTarget = L),
              (G = null),
              ts(q) === k &&
                ((ht = new ht(_, O + "enter", yt, s, q)),
                (ht.target = L),
                (ht.relatedTarget = zt),
                (G = ht)),
              (zt = G),
              H && yt)
            )
              e: {
                for (ht = H, _ = yt, O = 0, L = ht; L; L = zs(L)) O++;
                for (L = 0, G = _; G; G = zs(G)) L++;
                for (; 0 < O - L;) ((ht = zs(ht)), O--);
                for (; 0 < L - O;) ((_ = zs(_)), L--);
                for (; O--;) {
                  if (ht === _ || (_ !== null && ht === _.alternate)) break e;
                  ((ht = zs(ht)), (_ = zs(_)));
                }
                ht = null;
              }
            else ht = null;
            (H !== null && Xy(K, B, H, ht, !1),
              yt !== null && zt !== null && Xy(K, zt, yt, ht, !0));
          }
        }
        t: {
          if (
            ((B = k ? aa(k) : window),
            (H = B.nodeName && B.nodeName.toLowerCase()),
            H === "select" || (H === "input" && B.type === "file"))
          )
            var rt = um;
          else if (lm(B))
            if (fm) rt = _S;
            else {
              rt = NS;
              var wt = DS;
            }
          else
            ((H = B.nodeName),
              !H ||
              H.toLowerCase() !== "input" ||
              (B.type !== "checkbox" && B.type !== "radio")
                ? k && rc(k.elementType) && (rt = um)
                : (rt = jS));
          if (rt && (rt = rt(t, k))) {
            cm(K, rt, s, q);
            break t;
          }
          (wt && wt(t, B, k),
            t === "focusout" &&
              k &&
              B.type === "number" &&
              k.memoizedProps.value != null &&
              ac(B, "number", B.value));
        }
        switch (((wt = k ? aa(k) : window), t)) {
          case "focusin":
            (lm(wt) || wt.contentEditable === "true") &&
              ((us = wt), (xc = k), (ma = null));
            break;
          case "focusout":
            ma = xc = us = null;
            break;
          case "mousedown":
            wc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((wc = !1), bm(K, s, q));
            break;
          case "selectionchange":
            if (VS) break;
          case "keydown":
          case "keyup":
            bm(K, s, q);
        }
        var ft;
        if (yc)
          t: {
            switch (t) {
              case "compositionstart":
                var pt = "onCompositionStart";
                break t;
              case "compositionend":
                pt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                pt = "onCompositionUpdate";
                break t;
            }
            pt = void 0;
          }
        else
          cs
            ? rm(t, s) && (pt = "onCompositionEnd")
            : t === "keydown" &&
              s.keyCode === 229 &&
              (pt = "onCompositionStart");
        (pt &&
          (im &&
            s.locale !== "ko" &&
            (cs || pt !== "onCompositionStart"
              ? pt === "onCompositionEnd" && cs && (ft = $h())
              : ((Qn = q),
                (fc = "value" in Qn ? Qn.value : Qn.textContent),
                (cs = !0))),
          (wt = Mo(k, pt)),
          0 < wt.length &&
            ((pt = new em(pt, t, null, s, q)),
            K.push({ event: pt, listeners: wt }),
            ft
              ? (pt.data = ft)
              : ((ft = om(s)), ft !== null && (pt.data = ft)))),
          (ft = AS ? CS(t, s) : RS(t, s)) &&
            ((pt = Mo(k, "onBeforeInput")),
            0 < pt.length &&
              ((wt = new em("onBeforeInput", "beforeinput", null, s, q)),
              K.push({ event: wt, listeners: pt }),
              (wt.data = ft))),
          gT(K, t, k, s, q));
      }
      Yy(K, n);
    });
  }
  function qa(t, n, s) {
    return { instance: t, listener: n, currentTarget: s };
  }
  function Mo(t, n) {
    for (var s = n + "Capture", o = []; t !== null;) {
      var c = t,
        d = c.stateNode;
      if (
        ((c = c.tag),
        (c !== 5 && c !== 26 && c !== 27) ||
          d === null ||
          ((c = ra(t, s)),
          c != null && o.unshift(qa(t, c, d)),
          (c = ra(t, n)),
          c != null && o.push(qa(t, c, d))),
        t.tag === 3)
      )
        return o;
      t = t.return;
    }
    return [];
  }
  function zs(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Xy(t, n, s, o, c) {
    for (var d = n._reactName, v = []; s !== null && s !== o;) {
      var w = s,
        M = w.alternate,
        k = w.stateNode;
      if (((w = w.tag), M !== null && M === o)) break;
      ((w !== 5 && w !== 26 && w !== 27) ||
        k === null ||
        ((M = k),
        c
          ? ((k = ra(s, d)), k != null && v.unshift(qa(s, k, M)))
          : c || ((k = ra(s, d)), k != null && v.push(qa(s, k, M)))),
        (s = s.return));
    }
    v.length !== 0 && t.push({ event: n, listeners: v });
  }
  var wT = /\r\n?/g,
    ST = /\u0000|\uFFFD/g;
  function Fy(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        wT,
        `
`,
      )
      .replace(ST, "");
  }
  function Ky(t, n) {
    return ((n = Fy(n)), Fy(t) === n);
  }
  function Oo() {}
  function _t(t, n, s, o, c, d) {
    switch (s) {
      case "children":
        typeof o == "string"
          ? n === "body" || (n === "textarea" && o === "") || rs(t, o)
          : (typeof o == "number" || typeof o == "bigint") &&
            n !== "body" &&
            rs(t, "" + o);
        break;
      case "className":
        _r(t, "class", o);
        break;
      case "tabIndex":
        _r(t, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        _r(t, s, o);
        break;
      case "style":
        Zh(t, o, d);
        break;
      case "data":
        if (n !== "object") {
          _r(t, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (n !== "a" || s !== "href")) {
          t.removeAttribute(s);
          break;
        }
        if (
          o == null ||
          typeof o == "function" ||
          typeof o == "symbol" ||
          typeof o == "boolean"
        ) {
          t.removeAttribute(s);
          break;
        }
        ((o = Lr("" + o)), t.setAttribute(s, o));
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          t.setAttribute(
            s,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof d == "function" &&
            (s === "formAction"
              ? (n !== "input" && _t(t, n, "name", c.name, c, null),
                _t(t, n, "formEncType", c.formEncType, c, null),
                _t(t, n, "formMethod", c.formMethod, c, null),
                _t(t, n, "formTarget", c.formTarget, c, null))
              : (_t(t, n, "encType", c.encType, c, null),
                _t(t, n, "method", c.method, c, null),
                _t(t, n, "target", c.target, c, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          t.removeAttribute(s);
          break;
        }
        ((o = Lr("" + o)), t.setAttribute(s, o));
        break;
      case "onClick":
        o != null && (t.onclick = Oo);
        break;
      case "onScroll":
        o != null && Tt("scroll", t);
        break;
      case "onScrollEnd":
        o != null && Tt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(r(61));
          if (((s = o.__html), s != null)) {
            if (c.children != null) throw Error(r(60));
            t.innerHTML = s;
          }
        }
        break;
      case "multiple":
        t.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        t.muted = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          o == null ||
          typeof o == "function" ||
          typeof o == "boolean" ||
          typeof o == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        ((s = Lr("" + o)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", s));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        o != null && typeof o != "function" && typeof o != "symbol"
          ? t.setAttribute(s, "" + o)
          : t.removeAttribute(s);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        o && typeof o != "function" && typeof o != "symbol"
          ? t.setAttribute(s, "")
          : t.removeAttribute(s);
        break;
      case "capture":
      case "download":
        o === !0
          ? t.setAttribute(s, "")
          : o !== !1 &&
              o != null &&
              typeof o != "function" &&
              typeof o != "symbol"
            ? t.setAttribute(s, o)
            : t.removeAttribute(s);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        !isNaN(o) &&
        1 <= o
          ? t.setAttribute(s, o)
          : t.removeAttribute(s);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o)
          ? t.removeAttribute(s)
          : t.setAttribute(s, o);
        break;
      case "popover":
        (Tt("beforetoggle", t), Tt("toggle", t), jr(t, "popover", o));
        break;
      case "xlinkActuate":
        An(t, "http://www.w3.org/1999/xlink", "xlink:actuate", o);
        break;
      case "xlinkArcrole":
        An(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", o);
        break;
      case "xlinkRole":
        An(t, "http://www.w3.org/1999/xlink", "xlink:role", o);
        break;
      case "xlinkShow":
        An(t, "http://www.w3.org/1999/xlink", "xlink:show", o);
        break;
      case "xlinkTitle":
        An(t, "http://www.w3.org/1999/xlink", "xlink:title", o);
        break;
      case "xlinkType":
        An(t, "http://www.w3.org/1999/xlink", "xlink:type", o);
        break;
      case "xmlBase":
        An(t, "http://www.w3.org/XML/1998/namespace", "xml:base", o);
        break;
      case "xmlLang":
        An(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", o);
        break;
      case "xmlSpace":
        An(t, "http://www.w3.org/XML/1998/namespace", "xml:space", o);
        break;
      case "is":
        jr(t, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < s.length) ||
          (s[0] !== "o" && s[0] !== "O") ||
          (s[1] !== "n" && s[1] !== "N")) &&
          ((s = $w.get(s) || s), jr(t, s, o));
    }
  }
  function Gu(t, n, s, o, c, d) {
    switch (s) {
      case "style":
        Zh(t, o, d);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(r(61));
          if (((s = o.__html), s != null)) {
            if (c.children != null) throw Error(r(60));
            t.innerHTML = s;
          }
        }
        break;
      case "children":
        typeof o == "string"
          ? rs(t, o)
          : (typeof o == "number" || typeof o == "bigint") && rs(t, "" + o);
        break;
      case "onScroll":
        o != null && Tt("scroll", t);
        break;
      case "onScrollEnd":
        o != null && Tt("scrollend", t);
        break;
      case "onClick":
        o != null && (t.onclick = Oo);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Ph.hasOwnProperty(s))
          t: {
            if (
              s[0] === "o" &&
              s[1] === "n" &&
              ((c = s.endsWith("Capture")),
              (n = s.slice(2, c ? s.length - 7 : void 0)),
              (d = t[ge] || null),
              (d = d != null ? d[s] : null),
              typeof d == "function" && t.removeEventListener(n, d, c),
              typeof o == "function")
            ) {
              (typeof d != "function" &&
                d !== null &&
                (s in t
                  ? (t[s] = null)
                  : t.hasAttribute(s) && t.removeAttribute(s)),
                t.addEventListener(n, o, c));
              break t;
            }
            s in t
              ? (t[s] = o)
              : o === !0
                ? t.setAttribute(s, "")
                : jr(t, s, o);
          }
    }
  }
  function ce(t, n, s) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (Tt("error", t), Tt("load", t));
        var o = !1,
          c = !1,
          d;
        for (d in s)
          if (s.hasOwnProperty(d)) {
            var v = s[d];
            if (v != null)
              switch (d) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  c = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, n));
                default:
                  _t(t, n, d, v, s, null);
              }
          }
        (c && _t(t, n, "srcSet", s.srcSet, s, null),
          o && _t(t, n, "src", s.src, s, null));
        return;
      case "input":
        Tt("invalid", t);
        var w = (d = v = c = null),
          M = null,
          k = null;
        for (o in s)
          if (s.hasOwnProperty(o)) {
            var q = s[o];
            if (q != null)
              switch (o) {
                case "name":
                  c = q;
                  break;
                case "type":
                  v = q;
                  break;
                case "checked":
                  M = q;
                  break;
                case "defaultChecked":
                  k = q;
                  break;
                case "value":
                  d = q;
                  break;
                case "defaultValue":
                  w = q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (q != null) throw Error(r(137, n));
                  break;
                default:
                  _t(t, n, o, q, s, null);
              }
          }
        (Xh(t, d, w, M, k, v, c, !1), zr(t));
        return;
      case "select":
        (Tt("invalid", t), (o = v = d = null));
        for (c in s)
          if (s.hasOwnProperty(c) && ((w = s[c]), w != null))
            switch (c) {
              case "value":
                d = w;
                break;
              case "defaultValue":
                v = w;
                break;
              case "multiple":
                o = w;
              default:
                _t(t, n, c, w, s, null);
            }
        ((n = d),
          (s = v),
          (t.multiple = !!o),
          n != null ? as(t, !!o, n, !1) : s != null && as(t, !!o, s, !0));
        return;
      case "textarea":
        (Tt("invalid", t), (d = c = o = null));
        for (v in s)
          if (s.hasOwnProperty(v) && ((w = s[v]), w != null))
            switch (v) {
              case "value":
                o = w;
                break;
              case "defaultValue":
                c = w;
                break;
              case "children":
                d = w;
                break;
              case "dangerouslySetInnerHTML":
                if (w != null) throw Error(r(91));
                break;
              default:
                _t(t, n, v, w, s, null);
            }
        (Kh(t, o, c, d), zr(t));
        return;
      case "option":
        for (M in s)
          s.hasOwnProperty(M) &&
            ((o = s[M]), o != null) &&
            (M === "selected"
              ? (t.selected =
                  o && typeof o != "function" && typeof o != "symbol")
              : _t(t, n, M, o, s, null));
        return;
      case "dialog":
        (Tt("beforetoggle", t),
          Tt("toggle", t),
          Tt("cancel", t),
          Tt("close", t));
        break;
      case "iframe":
      case "object":
        Tt("load", t);
        break;
      case "video":
      case "audio":
        for (o = 0; o < Ha.length; o++) Tt(Ha[o], t);
        break;
      case "image":
        (Tt("error", t), Tt("load", t));
        break;
      case "details":
        Tt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (Tt("error", t), Tt("load", t));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (k in s)
          if (s.hasOwnProperty(k) && ((o = s[k]), o != null))
            switch (k) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, n));
              default:
                _t(t, n, k, o, s, null);
            }
        return;
      default:
        if (rc(n)) {
          for (q in s)
            s.hasOwnProperty(q) &&
              ((o = s[q]), o !== void 0 && Gu(t, n, q, o, s, void 0));
          return;
        }
    }
    for (w in s)
      s.hasOwnProperty(w) && ((o = s[w]), o != null && _t(t, n, w, o, s, null));
  }
  function TT(t, n, s, o) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var c = null,
          d = null,
          v = null,
          w = null,
          M = null,
          k = null,
          q = null;
        for (H in s) {
          var K = s[H];
          if (s.hasOwnProperty(H) && K != null)
            switch (H) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                M = K;
              default:
                o.hasOwnProperty(H) || _t(t, n, H, null, o, K);
            }
        }
        for (var B in o) {
          var H = o[B];
          if (((K = s[B]), o.hasOwnProperty(B) && (H != null || K != null)))
            switch (B) {
              case "type":
                d = H;
                break;
              case "name":
                c = H;
                break;
              case "checked":
                k = H;
                break;
              case "defaultChecked":
                q = H;
                break;
              case "value":
                v = H;
                break;
              case "defaultValue":
                w = H;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (H != null) throw Error(r(137, n));
                break;
              default:
                H !== K && _t(t, n, B, H, o, K);
            }
        }
        sc(t, v, w, M, k, q, d, c);
        return;
      case "select":
        H = v = w = B = null;
        for (d in s)
          if (((M = s[d]), s.hasOwnProperty(d) && M != null))
            switch (d) {
              case "value":
                break;
              case "multiple":
                H = M;
              default:
                o.hasOwnProperty(d) || _t(t, n, d, null, o, M);
            }
        for (c in o)
          if (
            ((d = o[c]),
            (M = s[c]),
            o.hasOwnProperty(c) && (d != null || M != null))
          )
            switch (c) {
              case "value":
                B = d;
                break;
              case "defaultValue":
                w = d;
                break;
              case "multiple":
                v = d;
              default:
                d !== M && _t(t, n, c, d, o, M);
            }
        ((n = w),
          (s = v),
          (o = H),
          B != null
            ? as(t, !!s, B, !1)
            : !!o != !!s &&
              (n != null ? as(t, !!s, n, !0) : as(t, !!s, s ? [] : "", !1)));
        return;
      case "textarea":
        H = B = null;
        for (w in s)
          if (
            ((c = s[w]),
            s.hasOwnProperty(w) && c != null && !o.hasOwnProperty(w))
          )
            switch (w) {
              case "value":
                break;
              case "children":
                break;
              default:
                _t(t, n, w, null, o, c);
            }
        for (v in o)
          if (
            ((c = o[v]),
            (d = s[v]),
            o.hasOwnProperty(v) && (c != null || d != null))
          )
            switch (v) {
              case "value":
                B = c;
                break;
              case "defaultValue":
                H = c;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(r(91));
                break;
              default:
                c !== d && _t(t, n, v, c, o, d);
            }
        Fh(t, B, H);
        return;
      case "option":
        for (var yt in s)
          ((B = s[yt]),
            s.hasOwnProperty(yt) &&
              B != null &&
              !o.hasOwnProperty(yt) &&
              (yt === "selected"
                ? (t.selected = !1)
                : _t(t, n, yt, null, o, B)));
        for (M in o)
          ((B = o[M]),
            (H = s[M]),
            o.hasOwnProperty(M) &&
              B !== H &&
              (B != null || H != null) &&
              (M === "selected"
                ? (t.selected =
                    B && typeof B != "function" && typeof B != "symbol")
                : _t(t, n, M, B, o, H)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ht in s)
          ((B = s[ht]),
            s.hasOwnProperty(ht) &&
              B != null &&
              !o.hasOwnProperty(ht) &&
              _t(t, n, ht, null, o, B));
        for (k in o)
          if (
            ((B = o[k]),
            (H = s[k]),
            o.hasOwnProperty(k) && B !== H && (B != null || H != null))
          )
            switch (k) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (B != null) throw Error(r(137, n));
                break;
              default:
                _t(t, n, k, B, o, H);
            }
        return;
      default:
        if (rc(n)) {
          for (var zt in s)
            ((B = s[zt]),
              s.hasOwnProperty(zt) &&
                B !== void 0 &&
                !o.hasOwnProperty(zt) &&
                Gu(t, n, zt, void 0, o, B));
          for (q in o)
            ((B = o[q]),
              (H = s[q]),
              !o.hasOwnProperty(q) ||
                B === H ||
                (B === void 0 && H === void 0) ||
                Gu(t, n, q, B, o, H));
          return;
        }
    }
    for (var _ in s)
      ((B = s[_]),
        s.hasOwnProperty(_) &&
          B != null &&
          !o.hasOwnProperty(_) &&
          _t(t, n, _, null, o, B));
    for (K in o)
      ((B = o[K]),
        (H = s[K]),
        !o.hasOwnProperty(K) ||
          B === H ||
          (B == null && H == null) ||
          _t(t, n, K, B, o, H));
  }
  var Xu = null,
    Fu = null;
  function Do(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Qy(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Zy(t, n) {
    if (t === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && n === "foreignObject" ? 0 : t;
  }
  function Ku(t, n) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof n.children == "string" ||
      typeof n.children == "number" ||
      typeof n.children == "bigint" ||
      (typeof n.dangerouslySetInnerHTML == "object" &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Qu = null;
  function ET() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Qu
        ? !1
        : ((Qu = t), !0)
      : ((Qu = null), !1);
  }
  var Wy = typeof setTimeout == "function" ? setTimeout : void 0,
    AT = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Iy = typeof Promise == "function" ? Promise : void 0,
    CT =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Iy < "u"
          ? function (t) {
              return Iy.resolve(null).then(t).catch(RT);
            }
          : Wy;
  function RT(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function ui(t) {
    return t === "head";
  }
  function $y(t, n) {
    var s = n,
      o = 0,
      c = 0;
    do {
      var d = s.nextSibling;
      if ((t.removeChild(s), d && d.nodeType === 8))
        if (((s = d.data), s === "/$")) {
          if (0 < o && 8 > o) {
            s = o;
            var v = t.ownerDocument;
            if ((s & 1 && Ya(v.documentElement), s & 2 && Ya(v.body), s & 4))
              for (s = v.head, Ya(s), v = s.firstChild; v;) {
                var w = v.nextSibling,
                  M = v.nodeName;
                (v[sa] ||
                  M === "SCRIPT" ||
                  M === "STYLE" ||
                  (M === "LINK" && v.rel.toLowerCase() === "stylesheet") ||
                  s.removeChild(v),
                  (v = w));
              }
          }
          if (c === 0) {
            (t.removeChild(d), Ia(n));
            return;
          }
          c--;
        } else
          s === "$" || s === "$?" || s === "$!"
            ? c++
            : (o = s.charCodeAt(0) - 48);
      else o = 0;
      s = d;
    } while (s);
    Ia(n);
  }
  function Zu(t) {
    var n = t.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n;) {
      var s = n;
      switch (((n = n.nextSibling), s.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Zu(s), tc(s));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (s.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(s);
    }
  }
  function MT(t, n, s, o) {
    for (; t.nodeType === 1;) {
      var c = s;
      if (t.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!o && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (o) {
        if (!t[sa])
          switch (n) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((d = t.getAttribute("rel")),
                d === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                d !== c.rel ||
                t.getAttribute("href") !==
                  (c.href == null || c.href === "" ? null : c.href) ||
                t.getAttribute("crossorigin") !==
                  (c.crossOrigin == null ? null : c.crossOrigin) ||
                t.getAttribute("title") !== (c.title == null ? null : c.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((d = t.getAttribute("src")),
                (d !== (c.src == null ? null : c.src) ||
                  t.getAttribute("type") !== (c.type == null ? null : c.type) ||
                  t.getAttribute("crossorigin") !==
                    (c.crossOrigin == null ? null : c.crossOrigin)) &&
                  d &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (n === "input" && t.type === "hidden") {
        var d = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && t.getAttribute("name") === d) return t;
      } else return t;
      if (((t = $e(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function OT(t, n, s) {
    if (n === "") return null;
    for (; t.nodeType !== 3;)
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !s) ||
        ((t = $e(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Wu(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function DT(t, n) {
    var s = t.ownerDocument;
    if (t.data !== "$?" || s.readyState === "complete") n();
    else {
      var o = function () {
        (n(), s.removeEventListener("DOMContentLoaded", o));
      };
      (s.addEventListener("DOMContentLoaded", o), (t._reactRetry = o));
    }
  }
  function $e(t) {
    for (; t != null; t = t.nextSibling) {
      var n = t.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (
          ((n = t.data),
          n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
        )
          break;
        if (n === "/$") return null;
      }
    }
    return t;
  }
  var Iu = null;
  function Jy(t) {
    t = t.previousSibling;
    for (var n = 0; t;) {
      if (t.nodeType === 8) {
        var s = t.data;
        if (s === "$" || s === "$!" || s === "$?") {
          if (n === 0) return t;
          n--;
        } else s === "/$" && n++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function tg(t, n, s) {
    switch (((n = Do(s)), t)) {
      case "html":
        if (((t = n.documentElement), !t)) throw Error(r(452));
        return t;
      case "head":
        if (((t = n.head), !t)) throw Error(r(453));
        return t;
      case "body":
        if (((t = n.body), !t)) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function Ya(t) {
    for (var n = t.attributes; n.length;) t.removeAttributeNode(n[0]);
    tc(t);
  }
  var Fe = new Map(),
    eg = new Set();
  function No(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var Bn = Q.d;
  Q.d = { f: NT, r: jT, D: _T, C: zT, L: VT, m: LT, X: PT, S: kT, M: BT };
  function NT() {
    var t = Bn.f(),
      n = So();
    return t || n;
  }
  function jT(t) {
    var n = es(t);
    n !== null && n.tag === 5 && n.type === "form" ? wp(n) : Bn.r(t);
  }
  var Vs = typeof document > "u" ? null : document;
  function ng(t, n, s) {
    var o = Vs;
    if (o && typeof n == "string" && n) {
      var c = Be(n);
      ((c = 'link[rel="' + t + '"][href="' + c + '"]'),
        typeof s == "string" && (c += '[crossorigin="' + s + '"]'),
        eg.has(c) ||
          (eg.add(c),
          (t = { rel: t, crossOrigin: s, href: n }),
          o.querySelector(c) === null &&
            ((n = o.createElement("link")),
            ce(n, "link", t),
            ne(n),
            o.head.appendChild(n))));
    }
  }
  function _T(t) {
    (Bn.D(t), ng("dns-prefetch", t, null));
  }
  function zT(t, n) {
    (Bn.C(t, n), ng("preconnect", t, n));
  }
  function VT(t, n, s) {
    Bn.L(t, n, s);
    var o = Vs;
    if (o && t && n) {
      var c = 'link[rel="preload"][as="' + Be(n) + '"]';
      n === "image" && s && s.imageSrcSet
        ? ((c += '[imagesrcset="' + Be(s.imageSrcSet) + '"]'),
          typeof s.imageSizes == "string" &&
            (c += '[imagesizes="' + Be(s.imageSizes) + '"]'))
        : (c += '[href="' + Be(t) + '"]');
      var d = c;
      switch (n) {
        case "style":
          d = Ls(t);
          break;
        case "script":
          d = ks(t);
      }
      Fe.has(d) ||
        ((t = y(
          {
            rel: "preload",
            href: n === "image" && s && s.imageSrcSet ? void 0 : t,
            as: n,
          },
          s,
        )),
        Fe.set(d, t),
        o.querySelector(c) !== null ||
          (n === "style" && o.querySelector(Ga(d))) ||
          (n === "script" && o.querySelector(Xa(d))) ||
          ((n = o.createElement("link")),
          ce(n, "link", t),
          ne(n),
          o.head.appendChild(n)));
    }
  }
  function LT(t, n) {
    Bn.m(t, n);
    var s = Vs;
    if (s && t) {
      var o = n && typeof n.as == "string" ? n.as : "script",
        c =
          'link[rel="modulepreload"][as="' + Be(o) + '"][href="' + Be(t) + '"]',
        d = c;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          d = ks(t);
      }
      if (
        !Fe.has(d) &&
        ((t = y({ rel: "modulepreload", href: t }, n)),
        Fe.set(d, t),
        s.querySelector(c) === null)
      ) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (s.querySelector(Xa(d))) return;
        }
        ((o = s.createElement("link")),
          ce(o, "link", t),
          ne(o),
          s.head.appendChild(o));
      }
    }
  }
  function kT(t, n, s) {
    Bn.S(t, n, s);
    var o = Vs;
    if (o && t) {
      var c = ns(o).hoistableStyles,
        d = Ls(t);
      n = n || "default";
      var v = c.get(d);
      if (!v) {
        var w = { loading: 0, preload: null };
        if ((v = o.querySelector(Ga(d)))) w.loading = 5;
        else {
          ((t = y({ rel: "stylesheet", href: t, "data-precedence": n }, s)),
            (s = Fe.get(d)) && $u(t, s));
          var M = (v = o.createElement("link"));
          (ne(M),
            ce(M, "link", t),
            (M._p = new Promise(function (k, q) {
              ((M.onload = k), (M.onerror = q));
            })),
            M.addEventListener("load", function () {
              w.loading |= 1;
            }),
            M.addEventListener("error", function () {
              w.loading |= 2;
            }),
            (w.loading |= 4),
            jo(v, n, o));
        }
        ((v = { type: "stylesheet", instance: v, count: 1, state: w }),
          c.set(d, v));
      }
    }
  }
  function PT(t, n) {
    Bn.X(t, n);
    var s = Vs;
    if (s && t) {
      var o = ns(s).hoistableScripts,
        c = ks(t),
        d = o.get(c);
      d ||
        ((d = s.querySelector(Xa(c))),
        d ||
          ((t = y({ src: t, async: !0 }, n)),
          (n = Fe.get(c)) && Ju(t, n),
          (d = s.createElement("script")),
          ne(d),
          ce(d, "link", t),
          s.head.appendChild(d)),
        (d = { type: "script", instance: d, count: 1, state: null }),
        o.set(c, d));
    }
  }
  function BT(t, n) {
    Bn.M(t, n);
    var s = Vs;
    if (s && t) {
      var o = ns(s).hoistableScripts,
        c = ks(t),
        d = o.get(c);
      d ||
        ((d = s.querySelector(Xa(c))),
        d ||
          ((t = y({ src: t, async: !0, type: "module" }, n)),
          (n = Fe.get(c)) && Ju(t, n),
          (d = s.createElement("script")),
          ne(d),
          ce(d, "link", t),
          s.head.appendChild(d)),
        (d = { type: "script", instance: d, count: 1, state: null }),
        o.set(c, d));
    }
  }
  function ig(t, n, s, o) {
    var c = (c = lt.current) ? No(c) : null;
    if (!c) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof s.precedence == "string" && typeof s.href == "string"
          ? ((n = Ls(s.href)),
            (s = ns(c).hoistableStyles),
            (o = s.get(n)),
            o ||
              ((o = { type: "style", instance: null, count: 0, state: null }),
              s.set(n, o)),
            o)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          s.rel === "stylesheet" &&
          typeof s.href == "string" &&
          typeof s.precedence == "string"
        ) {
          t = Ls(s.href);
          var d = ns(c).hoistableStyles,
            v = d.get(t);
          if (
            (v ||
              ((c = c.ownerDocument || c),
              (v = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              d.set(t, v),
              (d = c.querySelector(Ga(t))) &&
                !d._p &&
                ((v.instance = d), (v.state.loading = 5)),
              Fe.has(t) ||
                ((s = {
                  rel: "preload",
                  as: "style",
                  href: s.href,
                  crossOrigin: s.crossOrigin,
                  integrity: s.integrity,
                  media: s.media,
                  hrefLang: s.hrefLang,
                  referrerPolicy: s.referrerPolicy,
                }),
                Fe.set(t, s),
                d || UT(c, t, s, v.state))),
            n && o === null)
          )
            throw Error(r(528, ""));
          return v;
        }
        if (n && o !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (n = s.async),
          (s = s.src),
          typeof s == "string" &&
          n &&
          typeof n != "function" &&
          typeof n != "symbol"
            ? ((n = ks(s)),
              (s = ns(c).hoistableScripts),
              (o = s.get(n)),
              o ||
                ((o = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                s.set(n, o)),
              o)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, t));
    }
  }
  function Ls(t) {
    return 'href="' + Be(t) + '"';
  }
  function Ga(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function sg(t) {
    return y({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function UT(t, n, s, o) {
    t.querySelector('link[rel="preload"][as="style"][' + n + "]")
      ? (o.loading = 1)
      : ((n = t.createElement("link")),
        (o.preload = n),
        n.addEventListener("load", function () {
          return (o.loading |= 1);
        }),
        n.addEventListener("error", function () {
          return (o.loading |= 2);
        }),
        ce(n, "link", s),
        ne(n),
        t.head.appendChild(n));
  }
  function ks(t) {
    return '[src="' + Be(t) + '"]';
  }
  function Xa(t) {
    return "script[async]" + t;
  }
  function ag(t, n, s) {
    if ((n.count++, n.instance === null))
      switch (n.type) {
        case "style":
          var o = t.querySelector('style[data-href~="' + Be(s.href) + '"]');
          if (o) return ((n.instance = o), ne(o), o);
          var c = y({}, s, {
            "data-href": s.href,
            "data-precedence": s.precedence,
            href: null,
            precedence: null,
          });
          return (
            (o = (t.ownerDocument || t).createElement("style")),
            ne(o),
            ce(o, "style", c),
            jo(o, s.precedence, t),
            (n.instance = o)
          );
        case "stylesheet":
          c = Ls(s.href);
          var d = t.querySelector(Ga(c));
          if (d) return ((n.state.loading |= 4), (n.instance = d), ne(d), d);
          ((o = sg(s)),
            (c = Fe.get(c)) && $u(o, c),
            (d = (t.ownerDocument || t).createElement("link")),
            ne(d));
          var v = d;
          return (
            (v._p = new Promise(function (w, M) {
              ((v.onload = w), (v.onerror = M));
            })),
            ce(d, "link", o),
            (n.state.loading |= 4),
            jo(d, s.precedence, t),
            (n.instance = d)
          );
        case "script":
          return (
            (d = ks(s.src)),
            (c = t.querySelector(Xa(d)))
              ? ((n.instance = c), ne(c), c)
              : ((o = s),
                (c = Fe.get(d)) && ((o = y({}, s)), Ju(o, c)),
                (t = t.ownerDocument || t),
                (c = t.createElement("script")),
                ne(c),
                ce(c, "link", o),
                t.head.appendChild(c),
                (n.instance = c))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, n.type));
      }
    else
      n.type === "stylesheet" &&
        (n.state.loading & 4) === 0 &&
        ((o = n.instance), (n.state.loading |= 4), jo(o, s.precedence, t));
    return n.instance;
  }
  function jo(t, n, s) {
    for (
      var o = s.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        c = o.length ? o[o.length - 1] : null,
        d = c,
        v = 0;
      v < o.length;
      v++
    ) {
      var w = o[v];
      if (w.dataset.precedence === n) d = w;
      else if (d !== c) break;
    }
    d
      ? d.parentNode.insertBefore(t, d.nextSibling)
      : ((n = s.nodeType === 9 ? s.head : s), n.insertBefore(t, n.firstChild));
  }
  function $u(t, n) {
    (t.crossOrigin == null && (t.crossOrigin = n.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy),
      t.title == null && (t.title = n.title));
  }
  function Ju(t, n) {
    (t.crossOrigin == null && (t.crossOrigin = n.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy),
      t.integrity == null && (t.integrity = n.integrity));
  }
  var _o = null;
  function rg(t, n, s) {
    if (_o === null) {
      var o = new Map(),
        c = (_o = new Map());
      c.set(s, o);
    } else ((c = _o), (o = c.get(s)), o || ((o = new Map()), c.set(s, o)));
    if (o.has(t)) return o;
    for (
      o.set(t, null), s = s.getElementsByTagName(t), c = 0;
      c < s.length;
      c++
    ) {
      var d = s[c];
      if (
        !(
          d[sa] ||
          d[ue] ||
          (t === "link" && d.getAttribute("rel") === "stylesheet")
        ) &&
        d.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var v = d.getAttribute(n) || "";
        v = t + v;
        var w = o.get(v);
        w ? w.push(d) : o.set(v, [d]);
      }
    }
    return o;
  }
  function og(t, n, s) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        s,
        n === "title" ? t.querySelector("head > title") : null,
      ));
  }
  function HT(t, n, s) {
    if (s === 1 || n.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof n.precedence != "string" ||
          typeof n.href != "string" ||
          n.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof n.rel != "string" ||
          typeof n.href != "string" ||
          n.href === "" ||
          n.onLoad ||
          n.onError
        )
          break;
        return n.rel === "stylesheet"
          ? ((t = n.disabled), typeof n.precedence == "string" && t == null)
          : !0;
      case "script":
        if (
          n.async &&
          typeof n.async != "function" &&
          typeof n.async != "symbol" &&
          !n.onLoad &&
          !n.onError &&
          n.src &&
          typeof n.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function lg(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var Fa = null;
  function qT() {}
  function YT(t, n, s) {
    if (Fa === null) throw Error(r(475));
    var o = Fa;
    if (
      n.type === "stylesheet" &&
      (typeof s.media != "string" || matchMedia(s.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var c = Ls(s.href),
          d = t.querySelector(Ga(c));
        if (d) {
          ((t = d._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (o.count++, (o = zo.bind(o)), t.then(o, o)),
            (n.state.loading |= 4),
            (n.instance = d),
            ne(d));
          return;
        }
        ((d = t.ownerDocument || t),
          (s = sg(s)),
          (c = Fe.get(c)) && $u(s, c),
          (d = d.createElement("link")),
          ne(d));
        var v = d;
        ((v._p = new Promise(function (w, M) {
          ((v.onload = w), (v.onerror = M));
        })),
          ce(d, "link", s),
          (n.instance = d));
      }
      (o.stylesheets === null && (o.stylesheets = new Map()),
        o.stylesheets.set(n, t),
        (t = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (o.count++,
          (n = zo.bind(o)),
          t.addEventListener("load", n),
          t.addEventListener("error", n)));
    }
  }
  function GT() {
    if (Fa === null) throw Error(r(475));
    var t = Fa;
    return (
      t.stylesheets && t.count === 0 && tf(t, t.stylesheets),
      0 < t.count
        ? function (n) {
            var s = setTimeout(function () {
              if ((t.stylesheets && tf(t, t.stylesheets), t.unsuspend)) {
                var o = t.unsuspend;
                ((t.unsuspend = null), o());
              }
            }, 6e4);
            return (
              (t.unsuspend = n),
              function () {
                ((t.unsuspend = null), clearTimeout(s));
              }
            );
          }
        : null
    );
  }
  function zo() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) tf(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var Vo = null;
  function tf(t, n) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Vo = new Map()),
        n.forEach(XT, t),
        (Vo = null),
        zo.call(t)));
  }
  function XT(t, n) {
    if (!(n.state.loading & 4)) {
      var s = Vo.get(t);
      if (s) var o = s.get(null);
      else {
        ((s = new Map()), Vo.set(t, s));
        for (
          var c = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            d = 0;
          d < c.length;
          d++
        ) {
          var v = c[d];
          (v.nodeName === "LINK" || v.getAttribute("media") !== "not all") &&
            (s.set(v.dataset.precedence, v), (o = v));
        }
        o && s.set(null, o);
      }
      ((c = n.instance),
        (v = c.getAttribute("data-precedence")),
        (d = s.get(v) || o),
        d === o && s.set(null, c),
        s.set(v, c),
        this.count++,
        (o = zo.bind(this)),
        c.addEventListener("load", o),
        c.addEventListener("error", o),
        d
          ? d.parentNode.insertBefore(c, d.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(c, t.firstChild)),
        (n.state.loading |= 4));
    }
  }
  var Ka = {
    $$typeof: j,
    Provider: null,
    Consumer: null,
    _currentValue: F,
    _currentValue2: F,
    _threadCount: 0,
  };
  function FT(t, n, s, o, c, d, v, w) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Wl(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Wl(0)),
      (this.hiddenUpdates = Wl(null)),
      (this.identifierPrefix = o),
      (this.onUncaughtError = c),
      (this.onCaughtError = d),
      (this.onRecoverableError = v),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = w),
      (this.incompleteTransitions = new Map()));
  }
  function cg(t, n, s, o, c, d, v, w, M, k, q, K) {
    return (
      (t = new FT(t, n, s, v, w, M, k, K)),
      (n = 1),
      d === !0 && (n |= 24),
      (d = Me(3, null, null, n)),
      (t.current = d),
      (d.stateNode = t),
      (n = Vc()),
      n.refCount++,
      (t.pooledCache = n),
      n.refCount++,
      (d.memoizedState = { element: o, isDehydrated: s, cache: n }),
      Bc(d),
      t
    );
  }
  function ug(t) {
    return t ? ((t = ms), t) : ms;
  }
  function fg(t, n, s, o, c, d) {
    ((c = ug(c)),
      o.context === null ? (o.context = c) : (o.pendingContext = c),
      (o = In(n)),
      (o.payload = { element: s }),
      (d = d === void 0 ? null : d),
      d !== null && (o.callback = d),
      (s = $n(t, o, n)),
      s !== null && (_e(s, t, n), Ta(s, t, n)));
  }
  function dg(t, n) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var s = t.retryLane;
      t.retryLane = s !== 0 && s < n ? s : n;
    }
  }
  function ef(t, n) {
    (dg(t, n), (t = t.alternate) && dg(t, n));
  }
  function hg(t) {
    if (t.tag === 13) {
      var n = hs(t, 67108864);
      (n !== null && _e(n, t, 67108864), ef(t, 67108864));
    }
  }
  var Lo = !0;
  function KT(t, n, s, o) {
    var c = z.T;
    z.T = null;
    var d = Q.p;
    try {
      ((Q.p = 2), nf(t, n, s, o));
    } finally {
      ((Q.p = d), (z.T = c));
    }
  }
  function QT(t, n, s, o) {
    var c = z.T;
    z.T = null;
    var d = Q.p;
    try {
      ((Q.p = 8), nf(t, n, s, o));
    } finally {
      ((Q.p = d), (z.T = c));
    }
  }
  function nf(t, n, s, o) {
    if (Lo) {
      var c = sf(o);
      if (c === null) (Yu(t, n, o, ko, s), pg(t, o));
      else if (WT(c, t, n, s, o)) o.stopPropagation();
      else if ((pg(t, o), n & 4 && -1 < ZT.indexOf(t))) {
        for (; c !== null;) {
          var d = es(c);
          if (d !== null)
            switch (d.tag) {
              case 3:
                if (((d = d.stateNode), d.current.memoizedState.isDehydrated)) {
                  var v = Ei(d.pendingLanes);
                  if (v !== 0) {
                    var w = d;
                    for (w.pendingLanes |= 2, w.entangledLanes |= 2; v;) {
                      var M = 1 << (31 - Ce(v));
                      ((w.entanglements[1] |= M), (v &= ~M));
                    }
                    (pn(d), (Dt & 6) === 0 && ((xo = un() + 500), Ua(0)));
                  }
                }
                break;
              case 13:
                ((w = hs(d, 2)), w !== null && _e(w, d, 2), So(), ef(d, 2));
            }
          if (((d = sf(o)), d === null && Yu(t, n, o, ko, s), d === c)) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Yu(t, n, o, null, s);
    }
  }
  function sf(t) {
    return ((t = lc(t)), af(t));
  }
  var ko = null;
  function af(t) {
    if (((ko = null), (t = ts(t)), t !== null)) {
      var n = u(t);
      if (n === null) t = null;
      else {
        var s = n.tag;
        if (s === 13) {
          if (((t = f(n)), t !== null)) return t;
          t = null;
        } else if (s === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          t = null;
        } else n !== t && (t = null);
      }
    }
    return ((ko = t), null);
  }
  function mg(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (zw()) {
          case Mh:
            return 2;
          case Oh:
            return 8;
          case Mr:
          case Vw:
            return 32;
          case Dh:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var rf = !1,
    fi = null,
    di = null,
    hi = null,
    Qa = new Map(),
    Za = new Map(),
    mi = [],
    ZT =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function pg(t, n) {
    switch (t) {
      case "focusin":
      case "focusout":
        fi = null;
        break;
      case "dragenter":
      case "dragleave":
        di = null;
        break;
      case "mouseover":
      case "mouseout":
        hi = null;
        break;
      case "pointerover":
      case "pointerout":
        Qa.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Za.delete(n.pointerId);
    }
  }
  function Wa(t, n, s, o, c, d) {
    return t === null || t.nativeEvent !== d
      ? ((t = {
          blockedOn: n,
          domEventName: s,
          eventSystemFlags: o,
          nativeEvent: d,
          targetContainers: [c],
        }),
        n !== null && ((n = es(n)), n !== null && hg(n)),
        t)
      : ((t.eventSystemFlags |= o),
        (n = t.targetContainers),
        c !== null && n.indexOf(c) === -1 && n.push(c),
        t);
  }
  function WT(t, n, s, o, c) {
    switch (n) {
      case "focusin":
        return ((fi = Wa(fi, t, n, s, o, c)), !0);
      case "dragenter":
        return ((di = Wa(di, t, n, s, o, c)), !0);
      case "mouseover":
        return ((hi = Wa(hi, t, n, s, o, c)), !0);
      case "pointerover":
        var d = c.pointerId;
        return (Qa.set(d, Wa(Qa.get(d) || null, t, n, s, o, c)), !0);
      case "gotpointercapture":
        return (
          (d = c.pointerId),
          Za.set(d, Wa(Za.get(d) || null, t, n, s, o, c)),
          !0
        );
    }
    return !1;
  }
  function yg(t) {
    var n = ts(t.target);
    if (n !== null) {
      var s = u(n);
      if (s !== null) {
        if (((n = s.tag), n === 13)) {
          if (((n = f(s)), n !== null)) {
            ((t.blockedOn = n),
              Yw(t.priority, function () {
                if (s.tag === 13) {
                  var o = je();
                  o = Il(o);
                  var c = hs(s, o);
                  (c !== null && _e(c, s, o), ef(s, o));
                }
              }));
            return;
          }
        } else if (n === 3 && s.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Po(t) {
    if (t.blockedOn !== null) return !1;
    for (var n = t.targetContainers; 0 < n.length;) {
      var s = sf(t.nativeEvent);
      if (s === null) {
        s = t.nativeEvent;
        var o = new s.constructor(s.type, s);
        ((oc = o), s.target.dispatchEvent(o), (oc = null));
      } else return ((n = es(s)), n !== null && hg(n), (t.blockedOn = s), !1);
      n.shift();
    }
    return !0;
  }
  function gg(t, n, s) {
    Po(t) && s.delete(n);
  }
  function IT() {
    ((rf = !1),
      fi !== null && Po(fi) && (fi = null),
      di !== null && Po(di) && (di = null),
      hi !== null && Po(hi) && (hi = null),
      Qa.forEach(gg),
      Za.forEach(gg));
  }
  function Bo(t, n) {
    t.blockedOn === n &&
      ((t.blockedOn = null),
      rf ||
        ((rf = !0),
        e.unstable_scheduleCallback(e.unstable_NormalPriority, IT)));
  }
  var Uo = null;
  function vg(t) {
    Uo !== t &&
      ((Uo = t),
      e.unstable_scheduleCallback(e.unstable_NormalPriority, function () {
        Uo === t && (Uo = null);
        for (var n = 0; n < t.length; n += 3) {
          var s = t[n],
            o = t[n + 1],
            c = t[n + 2];
          if (typeof o != "function") {
            if (af(o || s) === null) continue;
            break;
          }
          var d = es(s);
          d !== null &&
            (t.splice(n, 3),
            (n -= 3),
            su(d, { pending: !0, data: c, method: s.method, action: o }, o, c));
        }
      }));
  }
  function Ia(t) {
    function n(M) {
      return Bo(M, t);
    }
    (fi !== null && Bo(fi, t),
      di !== null && Bo(di, t),
      hi !== null && Bo(hi, t),
      Qa.forEach(n),
      Za.forEach(n));
    for (var s = 0; s < mi.length; s++) {
      var o = mi[s];
      o.blockedOn === t && (o.blockedOn = null);
    }
    for (; 0 < mi.length && ((s = mi[0]), s.blockedOn === null);)
      (yg(s), s.blockedOn === null && mi.shift());
    if (((s = (t.ownerDocument || t).$$reactFormReplay), s != null))
      for (o = 0; o < s.length; o += 3) {
        var c = s[o],
          d = s[o + 1],
          v = c[ge] || null;
        if (typeof d == "function") v || vg(s);
        else if (v) {
          var w = null;
          if (d && d.hasAttribute("formAction")) {
            if (((c = d), (v = d[ge] || null))) w = v.formAction;
            else if (af(c) !== null) continue;
          } else w = v.action;
          (typeof w == "function" ? (s[o + 1] = w) : (s.splice(o, 3), (o -= 3)),
            vg(s));
        }
      }
  }
  function of(t) {
    this._internalRoot = t;
  }
  ((Ho.prototype.render = of.prototype.render =
    function (t) {
      var n = this._internalRoot;
      if (n === null) throw Error(r(409));
      var s = n.current,
        o = je();
      fg(s, o, t, n, null, null);
    }),
    (Ho.prototype.unmount = of.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var n = t.containerInfo;
          (fg(t.current, 2, null, t, null, null), So(), (n[Ji] = null));
        }
      }));
  function Ho(t) {
    this._internalRoot = t;
  }
  Ho.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var n = Vh();
      t = { blockedOn: null, target: t, priority: n };
      for (var s = 0; s < mi.length && n !== 0 && n < mi[s].priority; s++);
      (mi.splice(s, 0, t), s === 0 && yg(t));
    }
  };
  var bg = i.version;
  if (bg !== "19.1.0") throw Error(r(527, bg, "19.1.0"));
  Q.findDOMNode = function (t) {
    var n = t._reactInternals;
    if (n === void 0)
      throw typeof t.render == "function"
        ? Error(r(188))
        : ((t = Object.keys(t).join(",")), Error(r(268, t)));
    return (
      (t = p(n)),
      (t = t !== null ? m(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var $T = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: z,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var qo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!qo.isDisabled && qo.supportsFiber)
      try {
        ((ea = qo.inject($T)), (Ae = qo));
      } catch {}
  }
  return (
    (Ja.createRoot = function (t, n) {
      if (!l(t)) throw Error(r(299));
      var s = !1,
        o = "",
        c = Vp,
        d = Lp,
        v = kp,
        w = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (s = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (c = n.onUncaughtError),
          n.onCaughtError !== void 0 && (d = n.onCaughtError),
          n.onRecoverableError !== void 0 && (v = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (w = n.unstable_transitionCallbacks)),
        (n = cg(t, 1, !1, null, null, s, o, c, d, v, w, null)),
        (t[Ji] = n.current),
        qu(t),
        new of(n)
      );
    }),
    (Ja.hydrateRoot = function (t, n, s) {
      if (!l(t)) throw Error(r(299));
      var o = !1,
        c = "",
        d = Vp,
        v = Lp,
        w = kp,
        M = null,
        k = null;
      return (
        s != null &&
          (s.unstable_strictMode === !0 && (o = !0),
          s.identifierPrefix !== void 0 && (c = s.identifierPrefix),
          s.onUncaughtError !== void 0 && (d = s.onUncaughtError),
          s.onCaughtError !== void 0 && (v = s.onCaughtError),
          s.onRecoverableError !== void 0 && (w = s.onRecoverableError),
          s.unstable_transitionCallbacks !== void 0 &&
            (M = s.unstable_transitionCallbacks),
          s.formState !== void 0 && (k = s.formState)),
        (n = cg(t, 1, !0, n, s ?? null, o, c, d, v, w, M, k)),
        (n.context = ug(null)),
        (s = n.current),
        (o = je()),
        (o = Il(o)),
        (c = In(o)),
        (c.callback = null),
        $n(s, c, o),
        (s = o),
        (n.current.lanes = s),
        ia(n, s),
        pn(n),
        (t[Ji] = n.current),
        qu(t),
        new Ho(n)
      );
    }),
    (Ja.version = "19.1.0"),
    Ja
  );
}
var Og;
function cE() {
  if (Og) return cf.exports;
  Og = 1;
  function e() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (i) {
        console.error(i);
      }
  }
  return (e(), (cf.exports = lE()), cf.exports);
}
var uE = cE(),
  jl = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  fE = class extends jl {
    #t;
    #e;
    #n;
    constructor() {
      (super(),
        (this.#n = (e) => {
          if (typeof window < "u" && window.addEventListener) {
            const i = () => e();
            return (
              window.addEventListener("visibilitychange", i, !1),
              () => {
                window.removeEventListener("visibilitychange", i);
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#e || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#e?.(), (this.#e = void 0));
    }
    setEventListener(e) {
      ((this.#n = e),
        this.#e?.(),
        (this.#e = e((i) => {
          typeof i == "boolean" ? this.setFocused(i) : this.onFocus();
        })));
    }
    setFocused(e) {
      this.#t !== e && ((this.#t = e), this.onFocus());
    }
    onFocus() {
      const e = this.isFocused();
      this.listeners.forEach((i) => {
        i(e);
      });
    }
    isFocused() {
      return typeof this.#t == "boolean"
        ? this.#t
        : globalThis.document?.visibilityState !== "hidden";
    }
  },
  nb = new fE(),
  dE = {
    setTimeout: (e, i) => setTimeout(e, i),
    clearTimeout: (e) => clearTimeout(e),
    setInterval: (e, i) => setInterval(e, i),
    clearInterval: (e) => clearInterval(e),
  },
  hE = class {
    #t = dE;
    #e = !1;
    setTimeoutProvider(e) {
      this.#t = e;
    }
    setTimeout(e, i) {
      return this.#t.setTimeout(e, i);
    }
    clearTimeout(e) {
      this.#t.clearTimeout(e);
    }
    setInterval(e, i) {
      return this.#t.setInterval(e, i);
    }
    clearInterval(e) {
      this.#t.clearInterval(e);
    }
  },
  Hf = new hE();
function mE(e) {
  setTimeout(e, 0);
}
var pE = typeof window > "u" || "Deno" in globalThis;
function en() {}
function yE(e, i) {
  return typeof e == "function" ? e(i) : e;
}
function gE(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function vE(e, i) {
  return Math.max(e + (i || 0) - Date.now(), 0);
}
function qf(e, i) {
  return typeof e == "function" ? e(i) : e;
}
function bE(e, i) {
  return typeof e == "function" ? e(i) : e;
}
function Dg(e, i) {
  const {
    type: a = "all",
    exact: r,
    fetchStatus: l,
    predicate: u,
    queryKey: f,
    stale: h,
  } = e;
  if (f) {
    if (r) {
      if (i.queryHash !== Md(f, i.options)) return !1;
    } else if (!dr(i.queryKey, f)) return !1;
  }
  if (a !== "all") {
    const p = i.isActive();
    if ((a === "active" && !p) || (a === "inactive" && p)) return !1;
  }
  return !(
    (typeof h == "boolean" && i.isStale() !== h) ||
    (l && l !== i.state.fetchStatus) ||
    (u && !u(i))
  );
}
function Ng(e, i) {
  const { exact: a, status: r, predicate: l, mutationKey: u } = e;
  if (u) {
    if (!i.options.mutationKey) return !1;
    if (a) {
      if (fr(i.options.mutationKey) !== fr(u)) return !1;
    } else if (!dr(i.options.mutationKey, u)) return !1;
  }
  return !((r && i.state.status !== r) || (l && !l(i)));
}
function Md(e, i) {
  return (i?.queryKeyHashFn || fr)(e);
}
function fr(e) {
  return JSON.stringify(e, (i, a) =>
    Yf(a)
      ? Object.keys(a)
          .sort()
          .reduce((r, l) => ((r[l] = a[l]), r), {})
      : a,
  );
}
function dr(e, i) {
  return e === i
    ? !0
    : typeof e != typeof i
      ? !1
      : e && i && typeof e == "object" && typeof i == "object"
        ? Object.keys(i).every((a) => dr(e[a], i[a]))
        : !1;
}
var xE = Object.prototype.hasOwnProperty;
function ib(e, i, a = 0) {
  if (e === i) return e;
  if (a > 500) return i;
  const r = jg(e) && jg(i);
  if (!r && !(Yf(e) && Yf(i))) return i;
  const u = (r ? e : Object.keys(e)).length,
    f = r ? i : Object.keys(i),
    h = f.length,
    p = r ? new Array(h) : {};
  let m = 0;
  for (let y = 0; y < h; y++) {
    const g = r ? y : f[y],
      x = e[g],
      T = i[g];
    if (x === T) {
      ((p[g] = x), (r ? y < u : xE.call(e, g)) && m++);
      continue;
    }
    if (
      x === null ||
      T === null ||
      typeof x != "object" ||
      typeof T != "object"
    ) {
      p[g] = T;
      continue;
    }
    const E = ib(x, T, a + 1);
    ((p[g] = E), E === x && m++);
  }
  return u === h && m === u ? e : p;
}
function jg(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Yf(e) {
  if (!_g(e)) return !1;
  const i = e.constructor;
  if (i === void 0) return !0;
  const a = i.prototype;
  return !(
    !_g(a) ||
    !a.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function _g(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function wE(e) {
  return new Promise((i) => {
    Hf.setTimeout(i, e);
  });
}
function SE(e, i, a) {
  return typeof a.structuralSharing == "function"
    ? a.structuralSharing(e, i)
    : a.structuralSharing !== !1
      ? ib(e, i)
      : i;
}
function TE(e, i, a = 0) {
  const r = [...e, i];
  return a && r.length > a ? r.slice(1) : r;
}
function EE(e, i, a = 0) {
  const r = [i, ...e];
  return a && r.length > a ? r.slice(0, -1) : r;
}
var Od = Symbol();
function sb(e, i) {
  return !e.queryFn && i?.initialPromise
    ? () => i.initialPromise
    : !e.queryFn || e.queryFn === Od
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
function AE(e, i, a) {
  let r = !1,
    l;
  return (
    Object.defineProperty(e, "signal", {
      enumerable: !0,
      get: () => (
        (l ??= i()),
        r ||
          ((r = !0),
          l.aborted ? a() : l.addEventListener("abort", a, { once: !0 })),
        l
      ),
    }),
    e
  );
}
var ab = (() => {
  let e = () => pE;
  return {
    isServer() {
      return e();
    },
    setIsServer(i) {
      e = i;
    },
  };
})();
function CE() {
  let e, i;
  const a = new Promise((l, u) => {
    ((e = l), (i = u));
  });
  ((a.status = "pending"), a.catch(() => {}));
  function r(l) {
    (Object.assign(a, l), delete a.resolve, delete a.reject);
  }
  return (
    (a.resolve = (l) => {
      (r({ status: "fulfilled", value: l }), e(l));
    }),
    (a.reject = (l) => {
      (r({ status: "rejected", reason: l }), i(l));
    }),
    a
  );
}
var RE = mE;
function ME() {
  let e = [],
    i = 0,
    a = (h) => {
      h();
    },
    r = (h) => {
      h();
    },
    l = RE;
  const u = (h) => {
      i
        ? e.push(h)
        : l(() => {
            a(h);
          });
    },
    f = () => {
      const h = e;
      ((e = []),
        h.length &&
          l(() => {
            r(() => {
              h.forEach((p) => {
                a(p);
              });
            });
          }));
    };
  return {
    batch: (h) => {
      let p;
      i++;
      try {
        p = h();
      } finally {
        (i--, i || f());
      }
      return p;
    },
    batchCalls:
      (h) =>
      (...p) => {
        u(() => {
          h(...p);
        });
      },
    schedule: u,
    setNotifyFunction: (h) => {
      a = h;
    },
    setBatchNotifyFunction: (h) => {
      r = h;
    },
    setScheduler: (h) => {
      l = h;
    },
  };
}
var me = ME(),
  OE = class extends jl {
    #t = !0;
    #e;
    #n;
    constructor() {
      (super(),
        (this.#n = (e) => {
          if (typeof window < "u" && window.addEventListener) {
            const i = () => e(!0),
              a = () => e(!1);
            return (
              window.addEventListener("online", i, !1),
              window.addEventListener("offline", a, !1),
              () => {
                (window.removeEventListener("online", i),
                  window.removeEventListener("offline", a));
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#e || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#e?.(), (this.#e = void 0));
    }
    setEventListener(e) {
      ((this.#n = e), this.#e?.(), (this.#e = e(this.setOnline.bind(this))));
    }
    setOnline(e) {
      this.#t !== e &&
        ((this.#t = e),
        this.listeners.forEach((a) => {
          a(e);
        }));
    }
    isOnline() {
      return this.#t;
    }
  },
  ml = new OE();
function DE(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function rb(e) {
  return (e ?? "online") === "online" ? ml.isOnline() : !0;
}
var Gf = class extends Error {
  constructor(e) {
    (super("CancelledError"),
      (this.revert = e?.revert),
      (this.silent = e?.silent));
  }
};
function ob(e) {
  let i = !1,
    a = 0,
    r;
  const l = CE(),
    u = () => l.status !== "pending",
    f = (C) => {
      if (!u()) {
        const R = new Gf(C);
        (x(R), e.onCancel?.(R));
      }
    },
    h = () => {
      i = !0;
    },
    p = () => {
      i = !1;
    },
    m = () =>
      nb.isFocused() &&
      (e.networkMode === "always" || ml.isOnline()) &&
      e.canRun(),
    y = () => rb(e.networkMode) && e.canRun(),
    g = (C) => {
      u() || (r?.(), l.resolve(C));
    },
    x = (C) => {
      u() || (r?.(), l.reject(C));
    },
    T = () =>
      new Promise((C) => {
        ((r = (R) => {
          (u() || m()) && C(R);
        }),
          e.onPause?.());
      }).then(() => {
        ((r = void 0), u() || e.onContinue?.());
      }),
    E = () => {
      if (u()) return;
      let C;
      const R = a === 0 ? e.initialPromise : void 0;
      try {
        C = R ?? e.fn();
      } catch (D) {
        C = Promise.reject(D);
      }
      Promise.resolve(C)
        .then(g)
        .catch((D) => {
          if (u()) return;
          const N = e.retry ?? (ab.isServer() ? 0 : 3),
            j = e.retryDelay ?? DE,
            V = typeof j == "function" ? j(a, D) : j,
            U =
              N === !0 ||
              (typeof N == "number" && a < N) ||
              (typeof N == "function" && N(a, D));
          if (i || !U) {
            x(D);
            return;
          }
          (a++,
            e.onFail?.(a, D),
            wE(V)
              .then(() => (m() ? void 0 : T()))
              .then(() => {
                i ? x(D) : E();
              }));
        });
    };
  return {
    promise: l,
    status: () => l.status,
    cancel: f,
    continue: () => (r?.(), l),
    cancelRetry: h,
    continueRetry: p,
    canStart: y,
    start: () => (y() ? E() : T().then(E), l),
  };
}
var lb = class {
  #t;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    (this.clearGcTimeout(),
      gE(this.gcTime) &&
        (this.#t = Hf.setTimeout(() => {
          this.optionalRemove();
        }, this.gcTime)));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (ab.isServer() ? 1 / 0 : 300 * 1e3),
    );
  }
  clearGcTimeout() {
    this.#t !== void 0 && (Hf.clearTimeout(this.#t), (this.#t = void 0));
  }
};
function NE(e) {
  return {
    onFetch: (i, a) => {
      const r = i.options,
        l = i.fetchOptions?.meta?.fetchMore?.direction,
        u = i.state.data?.pages || [],
        f = i.state.data?.pageParams || [];
      let h = { pages: [], pageParams: [] },
        p = 0;
      const m = async () => {
        let y = !1;
        const g = (E) => {
            AE(
              E,
              () => i.signal,
              () => (y = !0),
            );
          },
          x = sb(i.options, i.fetchOptions),
          T = async (E, C, R) => {
            if (y) return Promise.reject(i.signal.reason);
            if (C == null && E.pages.length) return Promise.resolve(E);
            const N = (() => {
                const X = {
                  client: i.client,
                  queryKey: i.queryKey,
                  pageParam: C,
                  direction: R ? "backward" : "forward",
                  meta: i.options.meta,
                };
                return (g(X), X);
              })(),
              j = await x(N),
              { maxPages: V } = i.options,
              U = R ? EE : TE;
            return {
              pages: U(E.pages, j, V),
              pageParams: U(E.pageParams, C, V),
            };
          };
        if (l && u.length) {
          const E = l === "backward",
            C = E ? jE : zg,
            R = { pages: u, pageParams: f },
            D = C(r, R);
          h = await T(R, D, E);
        } else {
          const E = e ?? u.length;
          do {
            const C = p === 0 ? (f[0] ?? r.initialPageParam) : zg(r, h);
            if (p > 0 && C == null) break;
            ((h = await T(h, C)), p++);
          } while (p < E);
        }
        return h;
      };
      i.options.persister
        ? (i.fetchFn = () =>
            i.options.persister?.(
              m,
              {
                client: i.client,
                queryKey: i.queryKey,
                meta: i.options.meta,
                signal: i.signal,
              },
              a,
            ))
        : (i.fetchFn = m);
    },
  };
}
function zg(e, { pages: i, pageParams: a }) {
  const r = i.length - 1;
  return i.length > 0 ? e.getNextPageParam(i[r], i, a[r], a) : void 0;
}
function jE(e, { pages: i, pageParams: a }) {
  return i.length > 0 ? e.getPreviousPageParam?.(i[0], i, a[0], a) : void 0;
}
var _E = class extends lb {
  #t;
  #e;
  #n;
  #s;
  #a;
  #i;
  #l;
  #r;
  constructor(e) {
    (super(),
      (this.#r = !1),
      (this.#l = e.defaultOptions),
      this.setOptions(e.options),
      (this.observers = []),
      (this.#a = e.client),
      (this.#s = this.#a.getQueryCache()),
      (this.queryKey = e.queryKey),
      (this.queryHash = e.queryHash),
      (this.#e = Lg(this.options)),
      (this.state = e.state ?? this.#e),
      this.scheduleGc());
  }
  get meta() {
    return this.options.meta;
  }
  get queryType() {
    return this.#t;
  }
  get promise() {
    return this.#i?.promise;
  }
  setOptions(e) {
    if (
      ((this.options = { ...this.#l, ...e }),
      e?._type && (this.#t = e._type),
      this.updateGcTime(this.options.gcTime),
      this.state && this.state.data === void 0)
    ) {
      const i = Lg(this.options);
      i.data !== void 0 &&
        (this.setState(Vg(i.data, i.dataUpdatedAt)), (this.#e = i));
    }
  }
  optionalRemove() {
    !this.observers.length &&
      this.state.fetchStatus === "idle" &&
      this.#s.remove(this);
  }
  setData(e, i) {
    const a = SE(this.state.data, e, this.options);
    return (
      this.#o({
        data: a,
        type: "success",
        dataUpdatedAt: i?.updatedAt,
        manual: i?.manual,
      }),
      a
    );
  }
  setState(e) {
    this.#o({ type: "setState", state: e });
  }
  cancel(e) {
    const i = this.#i?.promise;
    return (this.#i?.cancel(e), i ? i.then(en).catch(en) : Promise.resolve());
  }
  destroy() {
    (super.destroy(), this.cancel({ silent: !0 }));
  }
  get resetState() {
    return this.#e;
  }
  reset() {
    (this.destroy(), this.setState(this.resetState));
  }
  isActive() {
    return this.observers.some((e) => bE(e.options.enabled, this) !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0
      ? !this.isActive()
      : this.options.queryFn === Od || !this.isFetched();
  }
  isFetched() {
    return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
  }
  isStatic() {
    return this.getObserversCount() > 0
      ? this.observers.some((e) => qf(e.options.staleTime, this) === "static")
      : !1;
  }
  isStale() {
    return this.getObserversCount() > 0
      ? this.observers.some((e) => e.getCurrentResult().isStale)
      : this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(e = 0) {
    return this.state.data === void 0
      ? !0
      : e === "static"
        ? !1
        : this.state.isInvalidated
          ? !0
          : !vE(this.state.dataUpdatedAt, e);
  }
  onFocus() {
    (this.observers
      .find((i) => i.shouldFetchOnWindowFocus())
      ?.refetch({ cancelRefetch: !1 }),
      this.#i?.continue());
  }
  onOnline() {
    (this.observers
      .find((i) => i.shouldFetchOnReconnect())
      ?.refetch({ cancelRefetch: !1 }),
      this.#i?.continue());
  }
  addObserver(e) {
    this.observers.includes(e) ||
      (this.observers.push(e),
      this.clearGcTimeout(),
      this.#s.notify({ type: "observerAdded", query: this, observer: e }));
  }
  removeObserver(e) {
    this.observers.includes(e) &&
      ((this.observers = this.observers.filter((i) => i !== e)),
      this.observers.length ||
        (this.#i &&
          (this.#r || this.#c()
            ? this.#i.cancel({ revert: !0 })
            : this.#i.cancelRetry()),
        this.scheduleGc()),
      this.#s.notify({ type: "observerRemoved", query: this, observer: e }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  #c() {
    return (
      this.state.fetchStatus === "paused" && this.state.status === "pending"
    );
  }
  invalidate() {
    this.state.isInvalidated || this.#o({ type: "invalidate" });
  }
  async fetch(e, i) {
    if (this.state.fetchStatus !== "idle" && this.#i?.status() !== "rejected") {
      if (this.state.data !== void 0 && i?.cancelRefetch)
        this.cancel({ silent: !0 });
      else if (this.#i) return (this.#i.continueRetry(), this.#i.promise);
    }
    if ((e && this.setOptions(e), !this.options.queryFn)) {
      const p = this.observers.find((m) => m.options.queryFn);
      p && this.setOptions(p.options);
    }
    const a = new AbortController(),
      r = (p) => {
        Object.defineProperty(p, "signal", {
          enumerable: !0,
          get: () => ((this.#r = !0), a.signal),
        });
      },
      l = () => {
        const p = sb(this.options, i),
          y = (() => {
            const g = {
              client: this.#a,
              queryKey: this.queryKey,
              meta: this.meta,
            };
            return (r(g), g);
          })();
        return (
          (this.#r = !1),
          this.options.persister ? this.options.persister(p, y, this) : p(y)
        );
      },
      f = (() => {
        const p = {
          fetchOptions: i,
          options: this.options,
          queryKey: this.queryKey,
          client: this.#a,
          state: this.state,
          fetchFn: l,
        };
        return (r(p), p);
      })();
    ((this.#t === "infinite"
      ? NE(this.options.pages)
      : this.options.behavior
    )?.onFetch(f, this),
      (this.#n = this.state),
      (this.state.fetchStatus === "idle" ||
        this.state.fetchMeta !== f.fetchOptions?.meta) &&
        this.#o({ type: "fetch", meta: f.fetchOptions?.meta }),
      (this.#i = ob({
        initialPromise: i?.initialPromise,
        fn: f.fetchFn,
        onCancel: (p) => {
          (p instanceof Gf &&
            p.revert &&
            this.setState({ ...this.#n, fetchStatus: "idle" }),
            a.abort());
        },
        onFail: (p, m) => {
          this.#o({ type: "failed", failureCount: p, error: m });
        },
        onPause: () => {
          this.#o({ type: "pause" });
        },
        onContinue: () => {
          this.#o({ type: "continue" });
        },
        retry: f.options.retry,
        retryDelay: f.options.retryDelay,
        networkMode: f.options.networkMode,
        canRun: () => !0,
      })));
    try {
      const p = await this.#i.start();
      if (p === void 0) throw new Error(`${this.queryHash} data is undefined`);
      return (
        this.setData(p),
        this.#s.config.onSuccess?.(p, this),
        this.#s.config.onSettled?.(p, this.state.error, this),
        p
      );
    } catch (p) {
      if (p instanceof Gf) {
        if (p.silent) return this.#i.promise;
        if (p.revert) {
          if (this.state.data === void 0) throw p;
          return this.state.data;
        }
      }
      throw (
        this.#o({ type: "error", error: p }),
        this.#s.config.onError?.(p, this),
        this.#s.config.onSettled?.(this.state.data, p, this),
        p
      );
    } finally {
      this.scheduleGc();
    }
  }
  #o(e) {
    const i = (a) => {
      switch (e.type) {
        case "failed":
          return {
            ...a,
            fetchFailureCount: e.failureCount,
            fetchFailureReason: e.error,
          };
        case "pause":
          return { ...a, fetchStatus: "paused" };
        case "continue":
          return { ...a, fetchStatus: "fetching" };
        case "fetch":
          return {
            ...a,
            ...zE(a.data, this.options),
            fetchMeta: e.meta ?? null,
          };
        case "success":
          const r = {
            ...a,
            ...Vg(e.data, e.dataUpdatedAt),
            dataUpdateCount: a.dataUpdateCount + 1,
            ...(!e.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null,
            }),
          };
          return ((this.#n = e.manual ? r : void 0), r);
        case "error":
          const l = e.error;
          return {
            ...a,
            error: l,
            errorUpdateCount: a.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: a.fetchFailureCount + 1,
            fetchFailureReason: l,
            fetchStatus: "idle",
            status: "error",
            isInvalidated: !0,
          };
        case "invalidate":
          return { ...a, isInvalidated: !0 };
        case "setState":
          return { ...a, ...e.state };
      }
    };
    ((this.state = i(this.state)),
      me.batch(() => {
        (this.observers.forEach((a) => {
          a.onQueryUpdate();
        }),
          this.#s.notify({ query: this, type: "updated", action: e }));
      }));
  }
};
function zE(e, i) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: rb(i.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function Vg(e, i) {
  return {
    data: e,
    dataUpdatedAt: i ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: "success",
  };
}
function Lg(e) {
  const i =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    a = i !== void 0,
    r = a
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: i,
    dataUpdateCount: 0,
    dataUpdatedAt: a ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: a ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var VE = class extends lb {
  #t;
  #e;
  #n;
  #s;
  constructor(e) {
    (super(),
      (this.#t = e.client),
      (this.mutationId = e.mutationId),
      (this.#n = e.mutationCache),
      (this.#e = []),
      (this.state = e.state || LE()),
      this.setOptions(e.options),
      this.scheduleGc());
  }
  setOptions(e) {
    ((this.options = e), this.updateGcTime(this.options.gcTime));
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    this.#e.includes(e) ||
      (this.#e.push(e),
      this.clearGcTimeout(),
      this.#n.notify({ type: "observerAdded", mutation: this, observer: e }));
  }
  removeObserver(e) {
    ((this.#e = this.#e.filter((i) => i !== e)),
      this.scheduleGc(),
      this.#n.notify({ type: "observerRemoved", mutation: this, observer: e }));
  }
  optionalRemove() {
    this.#e.length ||
      (this.state.status === "pending"
        ? this.scheduleGc()
        : this.#n.remove(this));
  }
  continue() {
    return this.#s?.continue() ?? this.execute(this.state.variables);
  }
  async execute(e) {
    const i = () => {
        this.#a({ type: "continue" });
      },
      a = {
        client: this.#t,
        meta: this.options.meta,
        mutationKey: this.options.mutationKey,
      };
    this.#s = ob({
      fn: () =>
        this.options.mutationFn
          ? this.options.mutationFn(e, a)
          : Promise.reject(new Error("No mutationFn found")),
      onFail: (u, f) => {
        this.#a({ type: "failed", failureCount: u, error: f });
      },
      onPause: () => {
        this.#a({ type: "pause" });
      },
      onContinue: i,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#n.canRun(this),
    });
    const r = this.state.status === "pending",
      l = !this.#s.canStart();
    try {
      if (r) i();
      else {
        (this.#a({ type: "pending", variables: e, isPaused: l }),
          this.#n.config.onMutate &&
            (await this.#n.config.onMutate(e, this, a)));
        const f = await this.options.onMutate?.(e, a);
        f !== this.state.context &&
          this.#a({ type: "pending", context: f, variables: e, isPaused: l });
      }
      const u = await this.#s.start();
      return (
        await this.#n.config.onSuccess?.(u, e, this.state.context, this, a),
        await this.options.onSuccess?.(u, e, this.state.context, a),
        await this.#n.config.onSettled?.(
          u,
          null,
          this.state.variables,
          this.state.context,
          this,
          a,
        ),
        await this.options.onSettled?.(u, null, e, this.state.context, a),
        this.#a({ type: "success", data: u }),
        u
      );
    } catch (u) {
      try {
        await this.#n.config.onError?.(u, e, this.state.context, this, a);
      } catch (f) {
        Promise.reject(f);
      }
      try {
        await this.options.onError?.(u, e, this.state.context, a);
      } catch (f) {
        Promise.reject(f);
      }
      try {
        await this.#n.config.onSettled?.(
          void 0,
          u,
          this.state.variables,
          this.state.context,
          this,
          a,
        );
      } catch (f) {
        Promise.reject(f);
      }
      try {
        await this.options.onSettled?.(void 0, u, e, this.state.context, a);
      } catch (f) {
        Promise.reject(f);
      }
      throw (this.#a({ type: "error", error: u }), u);
    } finally {
      this.#n.runNext(this);
    }
  }
  #a(e) {
    const i = (a) => {
      switch (e.type) {
        case "failed":
          return { ...a, failureCount: e.failureCount, failureReason: e.error };
        case "pause":
          return { ...a, isPaused: !0 };
        case "continue":
          return { ...a, isPaused: !1 };
        case "pending":
          return {
            ...a,
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: e.isPaused,
            status: "pending",
            variables: e.variables,
            submittedAt: Date.now(),
          };
        case "success":
          return {
            ...a,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1,
          };
        case "error":
          return {
            ...a,
            data: void 0,
            error: e.error,
            failureCount: a.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: "error",
          };
      }
    };
    ((this.state = i(this.state)),
      me.batch(() => {
        (this.#e.forEach((a) => {
          a.onMutationUpdate(e);
        }),
          this.#n.notify({ mutation: this, type: "updated", action: e }));
      }));
  }
};
function LE() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var kE = class extends jl {
  constructor(e = {}) {
    (super(),
      (this.config = e),
      (this.#t = new Set()),
      (this.#e = new Map()),
      (this.#n = 0));
  }
  #t;
  #e;
  #n;
  build(e, i, a) {
    const r = new VE({
      client: e,
      mutationCache: this,
      mutationId: ++this.#n,
      options: e.defaultMutationOptions(i),
      state: a,
    });
    return (this.add(r), r);
  }
  add(e) {
    this.#t.add(e);
    const i = Yo(e);
    if (typeof i == "string") {
      const a = this.#e.get(i);
      a ? a.push(e) : this.#e.set(i, [e]);
    }
    this.notify({ type: "added", mutation: e });
  }
  remove(e) {
    if (this.#t.delete(e)) {
      const i = Yo(e);
      if (typeof i == "string") {
        const a = this.#e.get(i);
        if (a)
          if (a.length > 1) {
            const r = a.indexOf(e);
            r !== -1 && a.splice(r, 1);
          } else a[0] === e && this.#e.delete(i);
      }
    }
    this.notify({ type: "removed", mutation: e });
  }
  canRun(e) {
    const i = Yo(e);
    if (typeof i == "string") {
      const r = this.#e.get(i)?.find((l) => l.state.status === "pending");
      return !r || r === e;
    } else return !0;
  }
  runNext(e) {
    const i = Yo(e);
    return typeof i == "string"
      ? (this.#e
          .get(i)
          ?.find((r) => r !== e && r.state.isPaused)
          ?.continue() ?? Promise.resolve())
      : Promise.resolve();
  }
  clear() {
    me.batch(() => {
      (this.#t.forEach((e) => {
        this.notify({ type: "removed", mutation: e });
      }),
        this.#t.clear(),
        this.#e.clear());
    });
  }
  getAll() {
    return Array.from(this.#t);
  }
  find(e) {
    const i = { exact: !0, ...e };
    return this.getAll().find((a) => Ng(i, a));
  }
  findAll(e = {}) {
    return this.getAll().filter((i) => Ng(e, i));
  }
  notify(e) {
    me.batch(() => {
      this.listeners.forEach((i) => {
        i(e);
      });
    });
  }
  resumePausedMutations() {
    const e = this.getAll().filter((i) => i.state.isPaused);
    return me.batch(() => Promise.all(e.map((i) => i.continue().catch(en))));
  }
};
function Yo(e) {
  return e.options.scope?.id;
}
var PE = class extends jl {
    constructor(e = {}) {
      (super(), (this.config = e), (this.#t = new Map()));
    }
    #t;
    build(e, i, a) {
      const r = i.queryKey,
        l = i.queryHash ?? Md(r, i);
      let u = this.get(l);
      return (
        u ||
          ((u = new _E({
            client: e,
            queryKey: r,
            queryHash: l,
            options: e.defaultQueryOptions(i),
            state: a,
            defaultOptions: e.getQueryDefaults(r),
          })),
          this.add(u)),
        u
      );
    }
    add(e) {
      this.#t.has(e.queryHash) ||
        (this.#t.set(e.queryHash, e), this.notify({ type: "added", query: e }));
    }
    remove(e) {
      const i = this.#t.get(e.queryHash);
      i &&
        (e.destroy(),
        i === e && this.#t.delete(e.queryHash),
        this.notify({ type: "removed", query: e }));
    }
    clear() {
      me.batch(() => {
        this.getAll().forEach((e) => {
          this.remove(e);
        });
      });
    }
    get(e) {
      return this.#t.get(e);
    }
    getAll() {
      return [...this.#t.values()];
    }
    find(e) {
      const i = { exact: !0, ...e };
      return this.getAll().find((a) => Dg(i, a));
    }
    findAll(e = {}) {
      const i = this.getAll();
      return Object.keys(e).length > 0 ? i.filter((a) => Dg(e, a)) : i;
    }
    notify(e) {
      me.batch(() => {
        this.listeners.forEach((i) => {
          i(e);
        });
      });
    }
    onFocus() {
      me.batch(() => {
        this.getAll().forEach((e) => {
          e.onFocus();
        });
      });
    }
    onOnline() {
      me.batch(() => {
        this.getAll().forEach((e) => {
          e.onOnline();
        });
      });
    }
  },
  BE = class {
    #t;
    #e;
    #n;
    #s;
    #a;
    #i;
    #l;
    #r;
    constructor(e = {}) {
      ((this.#t = e.queryCache || new PE()),
        (this.#e = e.mutationCache || new kE()),
        (this.#n = e.defaultOptions || {}),
        (this.#s = new Map()),
        (this.#a = new Map()),
        (this.#i = 0));
    }
    mount() {
      (this.#i++,
        this.#i === 1 &&
          ((this.#l = nb.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#t.onFocus());
          })),
          (this.#r = ml.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#t.onOnline());
          }))));
    }
    unmount() {
      (this.#i--,
        this.#i === 0 &&
          (this.#l?.(), (this.#l = void 0), this.#r?.(), (this.#r = void 0)));
    }
    isFetching(e) {
      return this.#t.findAll({ ...e, fetchStatus: "fetching" }).length;
    }
    isMutating(e) {
      return this.#e.findAll({ ...e, status: "pending" }).length;
    }
    getQueryData(e) {
      const i = this.defaultQueryOptions({ queryKey: e });
      return this.#t.get(i.queryHash)?.state.data;
    }
    ensureQueryData(e) {
      const i = this.defaultQueryOptions(e),
        a = this.#t.build(this, i),
        r = a.state.data;
      return r === void 0
        ? this.fetchQuery(e)
        : (e.revalidateIfStale &&
            a.isStaleByTime(qf(i.staleTime, a)) &&
            this.prefetchQuery(i),
          Promise.resolve(r));
    }
    getQueriesData(e) {
      return this.#t.findAll(e).map(({ queryKey: i, state: a }) => {
        const r = a.data;
        return [i, r];
      });
    }
    setQueryData(e, i, a) {
      const r = this.defaultQueryOptions({ queryKey: e }),
        u = this.#t.get(r.queryHash)?.state.data,
        f = yE(i, u);
      if (f !== void 0)
        return this.#t.build(this, r).setData(f, { ...a, manual: !0 });
    }
    setQueriesData(e, i, a) {
      return me.batch(() =>
        this.#t
          .findAll(e)
          .map(({ queryKey: r }) => [r, this.setQueryData(r, i, a)]),
      );
    }
    getQueryState(e) {
      const i = this.defaultQueryOptions({ queryKey: e });
      return this.#t.get(i.queryHash)?.state;
    }
    removeQueries(e) {
      const i = this.#t;
      me.batch(() => {
        i.findAll(e).forEach((a) => {
          i.remove(a);
        });
      });
    }
    resetQueries(e, i) {
      const a = this.#t;
      return me.batch(
        () => (
          a.findAll(e).forEach((r) => {
            r.reset();
          }),
          this.refetchQueries({ type: "active", ...e }, i)
        ),
      );
    }
    cancelQueries(e, i = {}) {
      const a = { revert: !0, ...i },
        r = me.batch(() => this.#t.findAll(e).map((l) => l.cancel(a)));
      return Promise.all(r).then(en).catch(en);
    }
    invalidateQueries(e, i = {}) {
      return me.batch(
        () => (
          this.#t.findAll(e).forEach((a) => {
            a.invalidate();
          }),
          e?.refetchType === "none"
            ? Promise.resolve()
            : this.refetchQueries(
                { ...e, type: e?.refetchType ?? e?.type ?? "active" },
                i,
              )
        ),
      );
    }
    refetchQueries(e, i = {}) {
      const a = { ...i, cancelRefetch: i.cancelRefetch ?? !0 },
        r = me.batch(() =>
          this.#t
            .findAll(e)
            .filter((l) => !l.isDisabled() && !l.isStatic())
            .map((l) => {
              let u = l.fetch(void 0, a);
              return (
                a.throwOnError || (u = u.catch(en)),
                l.state.fetchStatus === "paused" ? Promise.resolve() : u
              );
            }),
        );
      return Promise.all(r).then(en);
    }
    fetchQuery(e) {
      const i = this.defaultQueryOptions(e);
      i.retry === void 0 && (i.retry = !1);
      const a = this.#t.build(this, i);
      return a.isStaleByTime(qf(i.staleTime, a))
        ? a.fetch(i)
        : Promise.resolve(a.state.data);
    }
    prefetchQuery(e) {
      return this.fetchQuery(e).then(en).catch(en);
    }
    fetchInfiniteQuery(e) {
      return ((e._type = "infinite"), this.fetchQuery(e));
    }
    prefetchInfiniteQuery(e) {
      return this.fetchInfiniteQuery(e).then(en).catch(en);
    }
    ensureInfiniteQueryData(e) {
      return ((e._type = "infinite"), this.ensureQueryData(e));
    }
    resumePausedMutations() {
      return ml.isOnline()
        ? this.#e.resumePausedMutations()
        : Promise.resolve();
    }
    getQueryCache() {
      return this.#t;
    }
    getMutationCache() {
      return this.#e;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(e) {
      this.#n = e;
    }
    setQueryDefaults(e, i) {
      this.#s.set(fr(e), { queryKey: e, defaultOptions: i });
    }
    getQueryDefaults(e) {
      const i = [...this.#s.values()],
        a = {};
      return (
        i.forEach((r) => {
          dr(e, r.queryKey) && Object.assign(a, r.defaultOptions);
        }),
        a
      );
    }
    setMutationDefaults(e, i) {
      this.#a.set(fr(e), { mutationKey: e, defaultOptions: i });
    }
    getMutationDefaults(e) {
      const i = [...this.#a.values()],
        a = {};
      return (
        i.forEach((r) => {
          dr(e, r.mutationKey) && Object.assign(a, r.defaultOptions);
        }),
        a
      );
    }
    defaultQueryOptions(e) {
      if (e._defaulted) return e;
      const i = {
        ...this.#n.queries,
        ...this.getQueryDefaults(e.queryKey),
        ...e,
        _defaulted: !0,
      };
      return (
        i.queryHash || (i.queryHash = Md(i.queryKey, i)),
        i.refetchOnReconnect === void 0 &&
          (i.refetchOnReconnect = i.networkMode !== "always"),
        i.throwOnError === void 0 && (i.throwOnError = !!i.suspense),
        !i.networkMode && i.persister && (i.networkMode = "offlineFirst"),
        i.queryFn === Od && (i.enabled = !1),
        i
      );
    }
    defaultMutationOptions(e) {
      return e?._defaulted
        ? e
        : {
            ...this.#n.mutations,
            ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
            ...e,
            _defaulted: !0,
          };
    }
    clear() {
      (this.#t.clear(), this.#e.clear());
    }
  },
  S = Nl();
const UE = eE(S),
  vr = tE({ __proto__: null, default: UE }, [S]);
var HE = S.createContext(void 0),
  qE = ({ client: e, children: i }) => (
    S.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    b.jsx(HE.Provider, { value: e, children: i })
  ),
  _l = eb();
function te(e, i, { checkForDefaultPrevented: a = !0 } = {}) {
  return function (l) {
    if ((e?.(l), a === !1 || !l.defaultPrevented)) return i?.(l);
  };
}
function kg(e, i) {
  if (typeof e == "function") return e(i);
  e != null && (e.current = i);
}
function YE(...e) {
  return (i) => {
    let a = !1;
    const r = e.map((l) => {
      const u = kg(l, i);
      return (!a && typeof u == "function" && (a = !0), u);
    });
    if (a)
      return () => {
        for (let l = 0; l < r.length; l++) {
          const u = r[l];
          typeof u == "function" ? u() : kg(e[l], null);
        }
      };
  };
}
function an(...e) {
  return S.useCallback(YE(...e), e);
}
function zl(e, i = []) {
  let a = [];
  function r(u, f) {
    const h = S.createContext(f);
    h.displayName = u + "Context";
    const p = a.length;
    a = [...a, f];
    const m = (g) => {
      const { scope: x, children: T, ...E } = g,
        C = x?.[e]?.[p] || h,
        R = S.useMemo(() => E, Object.values(E));
      return b.jsx(C.Provider, { value: R, children: T });
    };
    m.displayName = u + "Provider";
    function y(g, x) {
      const T = x?.[e]?.[p] || h,
        E = S.useContext(T);
      if (E) return E;
      if (f !== void 0) return f;
      throw new Error(`\`${g}\` must be used within \`${u}\``);
    }
    return [m, y];
  }
  const l = () => {
    const u = a.map((f) => S.createContext(f));
    return function (h) {
      const p = h?.[e] || u;
      return S.useMemo(() => ({ [`__scope${e}`]: { ...h, [e]: p } }), [h, p]);
    };
  };
  return ((l.scopeName = e), [r, GE(l, ...i)]);
}
function GE(...e) {
  const i = e[0];
  if (e.length === 1) return i;
  const a = () => {
    const r = e.map((l) => ({ useScope: l(), scopeName: l.scopeName }));
    return function (u) {
      const f = r.reduce((h, { useScope: p, scopeName: m }) => {
        const g = p(u)[`__scope${m}`];
        return { ...h, ...g };
      }, {});
      return S.useMemo(() => ({ [`__scope${i.scopeName}`]: f }), [f]);
    };
  };
  return ((a.scopeName = i.scopeName), a);
}
function Xf(e) {
  const i = S.forwardRef((a, r) => {
    let { children: l, ...u } = a,
      f = null,
      h = !1;
    const p = [];
    (Pg(l) && typeof Go == "function" && (l = Go(l._payload)),
      S.Children.forEach(l, (x) => {
        if (ZE(x)) {
          h = !0;
          const T = x;
          let E = "child" in T.props ? T.props.child : T.props.children;
          (Pg(E) && typeof Go == "function" && (E = Go(E._payload)),
            (f = FE(T, E)),
            p.push(f?.props?.children));
        } else p.push(x);
      }),
      f
        ? (f = S.cloneElement(f, void 0, p))
        : !h && S.Children.count(l) === 1 && S.isValidElement(l) && (f = l));
    const m = f ? QE(f) : void 0,
      y = an(r, m);
    if (!f) {
      if (l || l === 0) throw new Error(h ? JE(e) : $E(e));
      return l;
    }
    const g = KE(u, f.props ?? {});
    return (f.type !== S.Fragment && (g.ref = r ? y : m), S.cloneElement(f, g));
  });
  return ((i.displayName = `${e}.Slot`), i);
}
var cb = Symbol.for("radix.slottable");
function XE(e) {
  const i = (a) => ("child" in a ? a.children(a.child) : a.children);
  return ((i.displayName = `${e}.Slottable`), (i.__radixId = cb), i);
}
var FE = (e, i) => {
  if ("child" in e.props) {
    const a = e.props.child;
    return S.isValidElement(a)
      ? S.cloneElement(a, void 0, e.props.children(a.props.children))
      : null;
  }
  return S.isValidElement(i) ? i : null;
};
function KE(e, i) {
  const a = { ...i };
  for (const r in i) {
    const l = e[r],
      u = i[r];
    /^on[A-Z]/.test(r)
      ? l && u
        ? (a[r] = (...h) => {
            const p = u(...h);
            return (l(...h), p);
          })
        : l && (a[r] = l)
      : r === "style"
        ? (a[r] = { ...l, ...u })
        : r === "className" && (a[r] = [l, u].filter(Boolean).join(" "));
  }
  return { ...e, ...a };
}
function QE(e) {
  let i = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    a = i && "isReactWarning" in i && i.isReactWarning;
  return a
    ? e.ref
    : ((i = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (a = i && "isReactWarning" in i && i.isReactWarning),
      a ? e.props.ref : e.props.ref || e.ref);
}
function ZE(e) {
  return (
    S.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === cb
  );
}
var WE = Symbol.for("react.lazy");
function Pg(e) {
  return (
    e != null &&
    typeof e == "object" &&
    "$$typeof" in e &&
    e.$$typeof === WE &&
    "_payload" in e &&
    IE(e._payload)
  );
}
function IE(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
var $E = (e) =>
    `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
  JE = (e) =>
    `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
  Go = vr[" use ".trim().toString()];
function tA(e) {
  const i = e + "CollectionProvider",
    [a, r] = zl(i),
    [l, u] = a(i, { collectionRef: { current: null }, itemMap: new Map() }),
    f = (C) => {
      const { scope: R, children: D } = C,
        N = S.useRef(null),
        j = S.useRef(new Map()).current;
      return b.jsx(l, { scope: R, itemMap: j, collectionRef: N, children: D });
    };
  f.displayName = i;
  const h = e + "CollectionSlot",
    p = Xf(h),
    m = S.forwardRef((C, R) => {
      const { scope: D, children: N } = C,
        j = u(h, D),
        V = an(R, j.collectionRef);
      return b.jsx(p, { ref: V, children: N });
    });
  m.displayName = h;
  const y = e + "CollectionItemSlot",
    g = "data-radix-collection-item",
    x = Xf(y),
    T = S.forwardRef((C, R) => {
      const { scope: D, children: N, ...j } = C,
        V = S.useRef(null),
        U = an(R, V),
        X = u(y, D);
      return (
        S.useEffect(
          () => (
            X.itemMap.set(V, { ref: V, ...j }),
            () => {
              X.itemMap.delete(V);
            }
          ),
        ),
        b.jsx(x, { [g]: "", ref: U, children: N })
      );
    });
  T.displayName = y;
  function E(C) {
    const R = u(e + "CollectionConsumer", C);
    return S.useCallback(() => {
      const N = R.collectionRef.current;
      if (!N) return [];
      const j = Array.from(N.querySelectorAll(`[${g}]`));
      return Array.from(R.itemMap.values()).sort(
        (X, Z) => j.indexOf(X.ref.current) - j.indexOf(Z.ref.current),
      );
    }, [R.collectionRef, R.itemMap]);
  }
  return [{ Provider: f, Slot: m, ItemSlot: T }, E, r];
}
var eA = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  Te = eA.reduce((e, i) => {
    const a = Xf(`Primitive.${i}`),
      r = S.forwardRef((l, u) => {
        const { asChild: f, ...h } = l,
          p = f ? a : i;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          b.jsx(p, { ...h, ref: u })
        );
      });
    return ((r.displayName = `Primitive.${i}`), { ...e, [i]: r });
  }, {});
function ub(e, i) {
  e && _l.flushSync(() => e.dispatchEvent(i));
}
function Wi(e) {
  const i = S.useRef(e);
  return (
    S.useEffect(() => {
      i.current = e;
    }),
    S.useMemo(
      () =>
        (...a) =>
          i.current?.(...a),
      [],
    )
  );
}
var xn = globalThis?.document ? S.useLayoutEffect : () => {},
  Bg = vr[" useEffectEvent ".trim().toString()],
  Ug = vr[" useInsertionEffect ".trim().toString()];
function nA(e) {
  if (typeof Bg == "function") return Bg(e);
  const i = S.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return (
    typeof Ug == "function"
      ? Ug(() => {
          i.current = e;
        })
      : xn(() => {
          i.current = e;
        }),
    S.useMemo(
      () =>
        (...a) =>
          i.current?.(...a),
      [],
    )
  );
}
var iA = "DismissableLayer",
  Ff = "dismissableLayer.update",
  sA = "dismissableLayer.pointerDownOutside",
  aA = "dismissableLayer.focusOutside",
  Hg,
  fb = S.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
    dismissableSurfaces: new Set(),
  }),
  Dd = S.forwardRef((e, i) => {
    const {
        disableOutsidePointerEvents: a = !1,
        deferPointerDownOutside: r = !1,
        onEscapeKeyDown: l,
        onPointerDownOutside: u,
        onFocusOutside: f,
        onInteractOutside: h,
        onDismiss: p,
        ...m
      } = e,
      y = S.useContext(fb),
      [g, x] = S.useState(null),
      T = g?.ownerDocument ?? globalThis?.document,
      [, E] = S.useState({}),
      C = an(i, x),
      R = Array.from(y.layers),
      [D] = [...y.layersWithOutsidePointerEventsDisabled].slice(-1),
      N = R.indexOf(D),
      j = g ? R.indexOf(g) : -1,
      V = y.layersWithOutsidePointerEventsDisabled.size > 0,
      U = j >= N,
      X = S.useRef(!1),
      Z = oA(
        ($) => {
          const st = $.target;
          if (!(st instanceof Node)) return;
          const gt = [...y.branches].some((tt) => tt.contains(st));
          !U || gt || (u?.($), h?.($), $.defaultPrevented || p?.());
        },
        {
          ownerDocument: T,
          deferPointerDownOutside: r,
          isDeferredPointerDownOutsideRef: X,
          dismissableSurfaces: y.dismissableSurfaces,
        },
      ),
      P = lA(($) => {
        if (r && X.current) return;
        const st = $.target;
        [...y.branches].some((tt) => tt.contains(st)) ||
          (f?.($), h?.($), $.defaultPrevented || p?.());
      }, T),
      I = g ? j === R.length - 1 : !1,
      W = nA(($) => {
        $.key === "Escape" &&
          (l?.($), !$.defaultPrevented && p && ($.preventDefault(), p()));
      });
    return (
      S.useEffect(() => {
        if (I)
          return (
            T.addEventListener("keydown", W, { capture: !0 }),
            () => T.removeEventListener("keydown", W, { capture: !0 })
          );
      }, [T, I]),
      S.useEffect(() => {
        if (g)
          return (
            a &&
              (y.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Hg = T.body.style.pointerEvents),
                (T.body.style.pointerEvents = "none")),
              y.layersWithOutsidePointerEventsDisabled.add(g)),
            y.layers.add(g),
            qg(),
            () => {
              a &&
                (y.layersWithOutsidePointerEventsDisabled.delete(g),
                y.layersWithOutsidePointerEventsDisabled.size === 0 &&
                  (T.body.style.pointerEvents = Hg));
            }
          );
      }, [g, T, a, y]),
      S.useEffect(
        () => () => {
          g &&
            (y.layers.delete(g),
            y.layersWithOutsidePointerEventsDisabled.delete(g),
            qg());
        },
        [g, y],
      ),
      S.useEffect(() => {
        const $ = () => E({});
        return (
          document.addEventListener(Ff, $),
          () => document.removeEventListener(Ff, $)
        );
      }, []),
      b.jsx(Te.div, {
        ...m,
        ref: C,
        style: {
          pointerEvents: V ? (U ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: te(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: te(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: te(
          e.onPointerDownCapture,
          Z.onPointerDownCapture,
        ),
      })
    );
  });
Dd.displayName = iA;
var rA = "DismissableLayerBranch",
  db = S.forwardRef((e, i) => {
    const a = S.useContext(fb),
      r = S.useRef(null),
      l = an(i, r);
    return (
      S.useEffect(() => {
        const u = r.current;
        if (u)
          return (
            a.branches.add(u),
            () => {
              a.branches.delete(u);
            }
          );
      }, [a.branches]),
      b.jsx(Te.div, { ...e, ref: l })
    );
  });
db.displayName = rA;
function oA(e, i) {
  const {
      ownerDocument: a = globalThis?.document,
      deferPointerDownOutside: r = !1,
      isDeferredPointerDownOutsideRef: l,
      dismissableSurfaces: u,
    } = i,
    f = Wi(e),
    h = S.useRef(!1),
    p = S.useRef(!1),
    m = S.useRef(new Map()),
    y = S.useRef(() => {});
  return (
    S.useEffect(() => {
      function g() {
        ((p.current = !1), (l.current = !1), m.current.clear());
      }
      function x() {
        return Array.from(m.current.values()).some(Boolean);
      }
      function T(N) {
        if (!p.current) return;
        const j = N.target;
        ((j instanceof Node && [...u].some((U) => U.contains(j))) ||
          m.current.set(N.type, !0),
          N.type === "click" &&
            window.setTimeout(() => {
              p.current && y.current();
            }, 0));
      }
      function E(N) {
        p.current && m.current.set(N.type, !1);
      }
      const C = (N) => {
          if (N.target && !h.current) {
            let j = function () {
              a.removeEventListener("click", y.current);
              const U = x();
              (g(), U || hb(sA, f, V, { discrete: !0 }));
            };
            const V = { originalEvent: N };
            ((p.current = !0),
              (l.current = r && N.button === 0),
              m.current.clear(),
              !r || N.button !== 0
                ? j()
                : (a.removeEventListener("click", y.current),
                  (y.current = j),
                  a.addEventListener("click", y.current, { once: !0 })));
          } else (a.removeEventListener("click", y.current), g());
          h.current = !1;
        },
        R = [
          "pointerup",
          "mousedown",
          "mouseup",
          "touchstart",
          "touchend",
          "click",
        ];
      for (const N of R)
        (a.addEventListener(N, T, !0), a.addEventListener(N, E));
      const D = window.setTimeout(() => {
        a.addEventListener("pointerdown", C);
      }, 0);
      return () => {
        (window.clearTimeout(D),
          a.removeEventListener("pointerdown", C),
          a.removeEventListener("click", y.current));
        for (const N of R)
          (a.removeEventListener(N, T, !0), a.removeEventListener(N, E));
      };
    }, [a, f, r, l, u]),
    { onPointerDownCapture: () => (h.current = !0) }
  );
}
function lA(e, i = globalThis?.document) {
  const a = Wi(e),
    r = S.useRef(!1);
  return (
    S.useEffect(() => {
      const l = (u) => {
        u.target &&
          !r.current &&
          hb(aA, a, { originalEvent: u }, { discrete: !1 });
      };
      return (
        i.addEventListener("focusin", l),
        () => i.removeEventListener("focusin", l)
      );
    }, [i, a]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function qg() {
  const e = new CustomEvent(Ff);
  document.dispatchEvent(e);
}
function hb(e, i, a, { discrete: r }) {
  const l = a.originalEvent.target,
    u = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: a });
  (i && l.addEventListener(e, i, { once: !0 }),
    r ? ub(l, u) : l.dispatchEvent(u));
}
var cA = Dd,
  uA = db,
  fA = "Portal",
  Nd = S.forwardRef((e, i) => {
    const { container: a, ...r } = e,
      [l, u] = S.useState(!1);
    xn(() => u(!0), []);
    const f = a || (l && globalThis?.document?.body);
    return f ? _l.createPortal(b.jsx(Te.div, { ...r, ref: i }), f) : null;
  });
Nd.displayName = fA;
function dA(e, i) {
  return S.useReducer((a, r) => i[a][r] ?? a, e);
}
var Vl = (e) => {
  const { present: i, children: a } = e,
    r = hA(i),
    l =
      typeof a == "function" ? a({ present: r.isPresent }) : S.Children.only(a),
    u = mA(r.ref, pA(l));
  return typeof a == "function" || r.isPresent
    ? S.cloneElement(l, { ref: u })
    : null;
};
Vl.displayName = "Presence";
function hA(e) {
  const [i, a] = S.useState(),
    r = S.useRef(null),
    l = S.useRef(e),
    u = S.useRef("none"),
    f = e ? "mounted" : "unmounted",
    [h, p] = dA(f, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    S.useEffect(() => {
      const m = Xo(r.current);
      u.current = h === "mounted" ? m : "none";
    }, [h]),
    xn(() => {
      const m = r.current,
        y = l.current;
      if (y !== e) {
        const x = u.current,
          T = Xo(m);
        (e
          ? p("MOUNT")
          : T === "none" || m?.display === "none"
            ? p("UNMOUNT")
            : p(y && x !== T ? "ANIMATION_OUT" : "UNMOUNT"),
          (l.current = e));
      }
    }, [e, p]),
    xn(() => {
      if (i) {
        let m;
        const y = i.ownerDocument.defaultView ?? window,
          g = (T) => {
            const C = Xo(r.current).includes(CSS.escape(T.animationName));
            if (T.target === i && C && (p("ANIMATION_END"), !l.current)) {
              const R = i.style.animationFillMode;
              ((i.style.animationFillMode = "forwards"),
                (m = y.setTimeout(() => {
                  i.style.animationFillMode === "forwards" &&
                    (i.style.animationFillMode = R);
                })));
            }
          },
          x = (T) => {
            T.target === i && (u.current = Xo(r.current));
          };
        return (
          i.addEventListener("animationstart", x),
          i.addEventListener("animationcancel", g),
          i.addEventListener("animationend", g),
          () => {
            (y.clearTimeout(m),
              i.removeEventListener("animationstart", x),
              i.removeEventListener("animationcancel", g),
              i.removeEventListener("animationend", g));
          }
        );
      } else p("ANIMATION_END");
    }, [i, p]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(h),
      ref: S.useCallback((m) => {
        ((r.current = m ? getComputedStyle(m) : null), a(m));
      }, []),
    }
  );
}
function Yg(e, i) {
  if (typeof e == "function") return e(i);
  e != null && (e.current = i);
}
function mA(...e) {
  const i = S.useRef(e);
  return (
    (i.current = e),
    S.useCallback((a) => {
      const r = i.current;
      let l = !1;
      const u = r.map((f) => {
        const h = Yg(f, a);
        return (!l && typeof h == "function" && (l = !0), h);
      });
      if (l)
        return () => {
          for (let f = 0; f < u.length; f++) {
            const h = u[f];
            typeof h == "function" ? h() : Yg(r[f], null);
          }
        };
    }, [])
  );
}
function Xo(e) {
  return e?.animationName || "none";
}
function pA(e) {
  let i = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    a = i && "isReactWarning" in i && i.isReactWarning;
  return a
    ? e.ref
    : ((i = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (a = i && "isReactWarning" in i && i.isReactWarning),
      a ? e.props.ref : e.props.ref || e.ref);
}
var yA = vr[" useInsertionEffect ".trim().toString()] || xn;
function gA({ prop: e, defaultProp: i, onChange: a = () => {}, caller: r }) {
  const [l, u, f] = vA({ defaultProp: i, onChange: a }),
    h = e !== void 0,
    p = h ? e : l;
  {
    const y = S.useRef(e !== void 0);
    S.useEffect(() => {
      const g = y.current;
      (g !== h &&
        console.warn(
          `${r} is changing from ${g ? "controlled" : "uncontrolled"} to ${h ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (y.current = h));
    }, [h, r]);
  }
  const m = S.useCallback(
    (y) => {
      if (h) {
        const g = bA(y) ? y(e) : y;
        g !== e && f.current?.(g);
      } else u(y);
    },
    [h, e, u, f],
  );
  return [p, m];
}
function vA({ defaultProp: e, onChange: i }) {
  const [a, r] = S.useState(e),
    l = S.useRef(a),
    u = S.useRef(i);
  return (
    yA(() => {
      u.current = i;
    }, [i]),
    S.useEffect(() => {
      l.current !== a && (u.current?.(a), (l.current = a));
    }, [a, l]),
    [a, r, u]
  );
}
function bA(e) {
  return typeof e == "function";
}
var xA = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  wA = "VisuallyHidden",
  Ll = S.forwardRef((e, i) =>
    b.jsx(Te.span, { ...e, ref: i, style: { ...xA, ...e.style } }),
  );
Ll.displayName = wA;
var SA = Ll,
  jd = "ToastProvider",
  [_d, TA, EA] = tA("Toast"),
  [mb] = zl("Toast", [EA]),
  [AA, kl] = mb(jd),
  pb = (e) => {
    const {
        __scopeToast: i,
        label: a = "Notification",
        duration: r = 5e3,
        swipeDirection: l = "right",
        swipeThreshold: u = 50,
        announcerContainer: f,
        children: h,
      } = e,
      [p, m] = S.useState(null),
      [y, g] = S.useState(0),
      x = S.useRef(!1),
      T = S.useRef(!1);
    return (
      a.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${jd}\`. Expected non-empty \`string\`.`,
        ),
      b.jsx(_d.Provider, {
        scope: i,
        children: b.jsx(AA, {
          scope: i,
          label: a,
          duration: r,
          swipeDirection: l,
          swipeThreshold: u,
          toastCount: y,
          viewport: p,
          onViewportChange: m,
          onToastAdd: S.useCallback(() => g((E) => E + 1), []),
          onToastRemove: S.useCallback(() => g((E) => E - 1), []),
          isFocusedToastEscapeKeyDownRef: x,
          isClosePausedRef: T,
          announcerContainer: f,
          children: h,
        }),
      })
    );
  };
pb.displayName = jd;
var yb = "ToastViewport",
  CA = ["F8"],
  Kf = "toast.viewportPause",
  Qf = "toast.viewportResume",
  gb = S.forwardRef((e, i) => {
    const {
        __scopeToast: a,
        hotkey: r = CA,
        label: l = "Notifications ({hotkey})",
        ...u
      } = e,
      f = kl(yb, a),
      h = TA(a),
      p = S.useRef(null),
      m = S.useRef(null),
      y = S.useRef(null),
      g = S.useRef(null),
      x = an(i, g, f.onViewportChange),
      T = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      E = f.toastCount > 0;
    (S.useEffect(() => {
      const R = (D) => {
        r.length !== 0 &&
          r.every((j) => D[j] || D.code === j) &&
          g.current?.focus();
      };
      return (
        document.addEventListener("keydown", R),
        () => document.removeEventListener("keydown", R)
      );
    }, [r]),
      S.useEffect(() => {
        const R = p.current,
          D = g.current;
        if (E && R && D) {
          const N = () => {
              if (!f.isClosePausedRef.current) {
                const X = new CustomEvent(Kf);
                (D.dispatchEvent(X), (f.isClosePausedRef.current = !0));
              }
            },
            j = () => {
              if (f.isClosePausedRef.current) {
                const X = new CustomEvent(Qf);
                (D.dispatchEvent(X), (f.isClosePausedRef.current = !1));
              }
            },
            V = (X) => {
              !R.contains(X.relatedTarget) && j();
            },
            U = () => {
              R.contains(document.activeElement) || j();
            };
          return (
            R.addEventListener("focusin", N),
            R.addEventListener("focusout", V),
            R.addEventListener("pointermove", N),
            R.addEventListener("pointerleave", U),
            window.addEventListener("blur", N),
            window.addEventListener("focus", j),
            () => {
              (R.removeEventListener("focusin", N),
                R.removeEventListener("focusout", V),
                R.removeEventListener("pointermove", N),
                R.removeEventListener("pointerleave", U),
                window.removeEventListener("blur", N),
                window.removeEventListener("focus", j));
            }
          );
        }
      }, [E, f.isClosePausedRef]));
    const C = S.useCallback(
      ({ tabbingDirection: R }) => {
        const N = h().map((j) => {
          const V = j.ref.current,
            U = [V, ...BA(V)];
          return R === "forwards" ? U : U.reverse();
        });
        return (R === "forwards" ? N.reverse() : N).flat();
      },
      [h],
    );
    return (
      S.useEffect(() => {
        const R = g.current;
        if (R) {
          const D = (N) => {
            const j = N.altKey || N.ctrlKey || N.metaKey;
            if (N.key === "Tab" && !j) {
              const U = document.activeElement,
                X = N.shiftKey;
              if (N.target === R && X) {
                m.current?.focus();
                return;
              }
              const I = C({ tabbingDirection: X ? "backwards" : "forwards" }),
                W = I.findIndex(($) => $ === U);
              mf(I.slice(W + 1))
                ? N.preventDefault()
                : X
                  ? m.current?.focus()
                  : y.current?.focus();
            }
          };
          return (
            R.addEventListener("keydown", D),
            () => R.removeEventListener("keydown", D)
          );
        }
      }, [h, C]),
      b.jsxs(uA, {
        ref: p,
        role: "region",
        "aria-label": l.replace("{hotkey}", T),
        tabIndex: -1,
        style: { pointerEvents: E ? void 0 : "none" },
        children: [
          E &&
            b.jsx(Zf, {
              ref: m,
              onFocusFromOutsideViewport: () => {
                const R = C({ tabbingDirection: "forwards" });
                mf(R);
              },
            }),
          b.jsx(_d.Slot, {
            scope: a,
            children: b.jsx(Te.ol, { tabIndex: -1, ...u, ref: x }),
          }),
          E &&
            b.jsx(Zf, {
              ref: y,
              onFocusFromOutsideViewport: () => {
                const R = C({ tabbingDirection: "backwards" });
                mf(R);
              },
            }),
        ],
      })
    );
  });
gb.displayName = yb;
var vb = "ToastFocusProxy",
  Zf = S.forwardRef((e, i) => {
    const { __scopeToast: a, onFocusFromOutsideViewport: r, ...l } = e,
      u = kl(vb, a);
    return b.jsx(Ll, {
      tabIndex: 0,
      ...l,
      ref: i,
      style: { position: "fixed" },
      onFocus: (f) => {
        const h = f.relatedTarget;
        !u.viewport?.contains(h) && r();
      },
    });
  });
Zf.displayName = vb;
var br = "Toast",
  RA = "toast.swipeStart",
  MA = "toast.swipeMove",
  OA = "toast.swipeCancel",
  DA = "toast.swipeEnd",
  bb = S.forwardRef((e, i) => {
    const { forceMount: a, open: r, defaultOpen: l, onOpenChange: u, ...f } = e,
      [h, p] = gA({ prop: r, defaultProp: l ?? !0, onChange: u, caller: br });
    return b.jsx(Vl, {
      present: a || h,
      children: b.jsx(_A, {
        open: h,
        ...f,
        ref: i,
        onClose: () => p(!1),
        onPause: Wi(e.onPause),
        onResume: Wi(e.onResume),
        onSwipeStart: te(e.onSwipeStart, (m) => {
          m.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: te(e.onSwipeMove, (m) => {
          const { x: y, y: g } = m.detail.delta;
          (m.currentTarget.setAttribute("data-swipe", "move"),
            m.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${y}px`,
            ),
            m.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${g}px`,
            ));
        }),
        onSwipeCancel: te(e.onSwipeCancel, (m) => {
          (m.currentTarget.setAttribute("data-swipe", "cancel"),
            m.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            m.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            m.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            m.currentTarget.style.removeProperty("--radix-toast-swipe-end-y"));
        }),
        onSwipeEnd: te(e.onSwipeEnd, (m) => {
          const { x: y, y: g } = m.detail.delta;
          (m.currentTarget.setAttribute("data-swipe", "end"),
            m.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            m.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            m.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${y}px`,
            ),
            m.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${g}px`,
            ),
            p(!1));
        }),
      }),
    });
  });
bb.displayName = br;
var [NA, jA] = mb(br, { onClose() {} }),
  _A = S.forwardRef((e, i) => {
    const {
        __scopeToast: a,
        type: r = "foreground",
        duration: l,
        open: u,
        onClose: f,
        onEscapeKeyDown: h,
        onPause: p,
        onResume: m,
        onSwipeStart: y,
        onSwipeMove: g,
        onSwipeCancel: x,
        onSwipeEnd: T,
        ...E
      } = e,
      C = kl(br, a),
      [R, D] = S.useState(null),
      N = an(i, D),
      j = S.useRef(null),
      V = S.useRef(null),
      U = l || C.duration,
      X = S.useRef(0),
      Z = S.useRef(U),
      P = S.useRef(0),
      { onToastAdd: I, onToastRemove: W } = C,
      $ = Wi(() => {
        (R?.contains(document.activeElement) && C.viewport?.focus(), f());
      }),
      st = S.useCallback(
        (tt) => {
          !tt ||
            tt === 1 / 0 ||
            (window.clearTimeout(P.current),
            (X.current = new Date().getTime()),
            (P.current = window.setTimeout($, tt)));
        },
        [$],
      );
    (S.useEffect(() => {
      const tt = C.viewport;
      if (tt) {
        const ut = () => {
            (st(Z.current), m?.());
          },
          z = () => {
            const Q = new Date().getTime() - X.current;
            ((Z.current = Z.current - Q),
              window.clearTimeout(P.current),
              p?.());
          };
        return (
          tt.addEventListener(Kf, z),
          tt.addEventListener(Qf, ut),
          () => {
            (tt.removeEventListener(Kf, z), tt.removeEventListener(Qf, ut));
          }
        );
      }
    }, [C.viewport, U, p, m, st]),
      S.useEffect(() => {
        u && !C.isClosePausedRef.current && st(U);
      }, [u, U, C.isClosePausedRef, st]),
      S.useEffect(
        () => () => {
          window.clearTimeout(P.current);
        },
        [],
      ),
      S.useEffect(() => (I(), () => W()), [I, W]));
    const gt = S.useMemo(() => (R ? Cb(R) : null), [R]);
    return C.viewport
      ? b.jsxs(b.Fragment, {
          children: [
            gt &&
              b.jsx(zA, {
                __scopeToast: a,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                children: gt,
              }),
            b.jsx(NA, {
              scope: a,
              onClose: $,
              children: _l.createPortal(
                b.jsx(_d.ItemSlot, {
                  scope: a,
                  children: b.jsx(cA, {
                    asChild: !0,
                    onEscapeKeyDown: te(h, () => {
                      (C.isFocusedToastEscapeKeyDownRef.current || $(),
                        (C.isFocusedToastEscapeKeyDownRef.current = !1));
                    }),
                    children: b.jsx(Te.li, {
                      tabIndex: 0,
                      "data-state": u ? "open" : "closed",
                      "data-swipe-direction": C.swipeDirection,
                      ...E,
                      ref: N,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: te(e.onKeyDown, (tt) => {
                        tt.key === "Escape" &&
                          (h?.(tt.nativeEvent),
                          tt.nativeEvent.defaultPrevented ||
                            ((C.isFocusedToastEscapeKeyDownRef.current = !0),
                            $()));
                      }),
                      onPointerDown: te(e.onPointerDown, (tt) => {
                        tt.button === 0 &&
                          (j.current = { x: tt.clientX, y: tt.clientY });
                      }),
                      onPointerMove: te(e.onPointerMove, (tt) => {
                        if (!j.current) return;
                        const ut = tt.clientX - j.current.x,
                          z = tt.clientY - j.current.y,
                          Q = !!V.current,
                          F = ["left", "right"].includes(C.swipeDirection),
                          nt = ["left", "up"].includes(C.swipeDirection)
                            ? Math.min
                            : Math.max,
                          A = F ? nt(0, ut) : 0,
                          Y = F ? 0 : nt(0, z),
                          et = tt.pointerType === "touch" ? 10 : 2,
                          J = { x: A, y: Y },
                          ct = { originalEvent: tt, delta: J };
                        Q
                          ? ((V.current = J), Fo(MA, g, ct, { discrete: !1 }))
                          : Gg(J, C.swipeDirection, et)
                            ? ((V.current = J),
                              Fo(RA, y, ct, { discrete: !1 }),
                              tt.target.setPointerCapture(tt.pointerId))
                            : (Math.abs(ut) > et || Math.abs(z) > et) &&
                              (j.current = null);
                      }),
                      onPointerUp: te(e.onPointerUp, (tt) => {
                        const ut = V.current,
                          z = tt.target;
                        if (
                          (z.hasPointerCapture(tt.pointerId) &&
                            z.releasePointerCapture(tt.pointerId),
                          (V.current = null),
                          (j.current = null),
                          ut)
                        ) {
                          const Q = tt.currentTarget,
                            F = { originalEvent: tt, delta: ut };
                          (Gg(ut, C.swipeDirection, C.swipeThreshold)
                            ? Fo(DA, T, F, { discrete: !0 })
                            : Fo(OA, x, F, { discrete: !0 }),
                            Q.addEventListener(
                              "click",
                              (nt) => nt.preventDefault(),
                              { once: !0 },
                            ));
                        }
                      }),
                    }),
                  }),
                }),
                C.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  zA = (e) => {
    const { __scopeToast: i, children: a, ...r } = e,
      l = kl(br, i),
      [u, f] = S.useState(!1),
      [h, p] = S.useState(!1);
    return (
      kA(() => f(!0)),
      S.useEffect(() => {
        const m = window.setTimeout(() => p(!0), 1e3);
        return () => window.clearTimeout(m);
      }, []),
      h
        ? null
        : b.jsx(Nd, {
            asChild: !0,
            container: l.announcerContainer || void 0,
            children: b.jsx(Ll, {
              ...r,
              children:
                u && b.jsxs(b.Fragment, { children: [l.label, " ", a] }),
            }),
          })
    );
  },
  VA = "ToastTitle",
  xb = S.forwardRef((e, i) => {
    const { __scopeToast: a, ...r } = e;
    return b.jsx(Te.div, { ...r, ref: i });
  });
xb.displayName = VA;
var LA = "ToastDescription",
  wb = S.forwardRef((e, i) => {
    const { __scopeToast: a, ...r } = e;
    return b.jsx(Te.div, { ...r, ref: i });
  });
wb.displayName = LA;
var Sb = "ToastAction",
  Tb = S.forwardRef((e, i) => {
    const { altText: a, ...r } = e;
    return a.trim()
      ? b.jsx(Ab, {
          altText: a,
          asChild: !0,
          children: b.jsx(zd, { ...r, ref: i }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${Sb}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
Tb.displayName = Sb;
var Eb = "ToastClose",
  zd = S.forwardRef((e, i) => {
    const { __scopeToast: a, ...r } = e,
      l = jA(Eb, a);
    return b.jsx(Ab, {
      asChild: !0,
      children: b.jsx(Te.button, {
        type: "button",
        ...r,
        ref: i,
        onClick: te(e.onClick, l.onClose),
      }),
    });
  });
zd.displayName = Eb;
var Ab = S.forwardRef((e, i) => {
  const { __scopeToast: a, altText: r, ...l } = e;
  return b.jsx(Te.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...l,
    ref: i,
  });
});
function Cb(e) {
  const i = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && i.push(r.textContent),
        PA(r))
      ) {
        const l = r.ariaHidden || r.hidden || r.style.display === "none",
          u = r.dataset.radixToastAnnounceExclude === "";
        if (!l)
          if (u) {
            const f = r.dataset.radixToastAnnounceAlt;
            f && i.push(f);
          } else i.push(...Cb(r));
      }
    }),
    i
  );
}
function Fo(e, i, a, { discrete: r }) {
  const l = a.originalEvent.currentTarget,
    u = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: a });
  (i && l.addEventListener(e, i, { once: !0 }),
    r ? ub(l, u) : l.dispatchEvent(u));
}
var Gg = (e, i, a = 0) => {
  const r = Math.abs(e.x),
    l = Math.abs(e.y),
    u = r > l;
  return i === "left" || i === "right" ? u && r > a : !u && l > a;
};
function kA(e = () => {}) {
  const i = Wi(e);
  xn(() => {
    let a = 0,
      r = 0;
    return (
      (a = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(i)),
      )),
      () => {
        (window.cancelAnimationFrame(a), window.cancelAnimationFrame(r));
      }
    );
  }, [i]);
}
function PA(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function BA(e) {
  const i = [],
    a = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const l = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || l
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; a.nextNode();) i.push(a.currentNode);
  return i;
}
function mf(e) {
  const i = document.activeElement;
  return e.some((a) =>
    a === i ? !0 : (a.focus(), document.activeElement !== i),
  );
}
var UA = pb,
  Rb = gb,
  Mb = bb,
  Ob = xb,
  Db = wb,
  Nb = Tb,
  jb = zd;
const HA = (e, i) => {
    const a = new Array(e.length + i.length);
    for (let r = 0; r < e.length; r++) a[r] = e[r];
    for (let r = 0; r < i.length; r++) a[e.length + r] = i[r];
    return a;
  },
  qA = (e, i) => ({ classGroupId: e, validator: i }),
  _b = (e = new Map(), i = null, a) => ({
    nextPart: e,
    validators: i,
    classGroupId: a,
  }),
  pl = "-",
  Xg = [],
  YA = "arbitrary..",
  GA = (e) => {
    const i = FA(e),
      { conflictingClassGroups: a, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (f) => {
        if (f.startsWith("[") && f.endsWith("]")) return XA(f);
        const h = f.split(pl),
          p = h[0] === "" && h.length > 1 ? 1 : 0;
        return zb(h, p, i);
      },
      getConflictingClassGroupIds: (f, h) => {
        if (h) {
          const p = r[f],
            m = a[f];
          return p ? (m ? HA(m, p) : p) : m || Xg;
        }
        return a[f] || Xg;
      },
    };
  },
  zb = (e, i, a) => {
    if (e.length - i === 0) return a.classGroupId;
    const l = e[i],
      u = a.nextPart.get(l);
    if (u) {
      const m = zb(e, i + 1, u);
      if (m) return m;
    }
    const f = a.validators;
    if (f === null) return;
    const h = i === 0 ? e.join(pl) : e.slice(i).join(pl),
      p = f.length;
    for (let m = 0; m < p; m++) {
      const y = f[m];
      if (y.validator(h)) return y.classGroupId;
    }
  },
  XA = (e) =>
    e.slice(1, -1).indexOf(":") === -1
      ? void 0
      : (() => {
          const i = e.slice(1, -1),
            a = i.indexOf(":"),
            r = i.slice(0, a);
          return r ? YA + r : void 0;
        })(),
  FA = (e) => {
    const { theme: i, classGroups: a } = e;
    return KA(a, i);
  },
  KA = (e, i) => {
    const a = _b();
    for (const r in e) {
      const l = e[r];
      Vd(l, a, r, i);
    }
    return a;
  },
  Vd = (e, i, a, r) => {
    const l = e.length;
    for (let u = 0; u < l; u++) {
      const f = e[u];
      QA(f, i, a, r);
    }
  },
  QA = (e, i, a, r) => {
    if (typeof e == "string") {
      ZA(e, i, a);
      return;
    }
    if (typeof e == "function") {
      WA(e, i, a, r);
      return;
    }
    IA(e, i, a, r);
  },
  ZA = (e, i, a) => {
    const r = e === "" ? i : Vb(i, e);
    r.classGroupId = a;
  },
  WA = (e, i, a, r) => {
    if ($A(e)) {
      Vd(e(r), i, a, r);
      return;
    }
    (i.validators === null && (i.validators = []), i.validators.push(qA(a, e)));
  },
  IA = (e, i, a, r) => {
    const l = Object.entries(e),
      u = l.length;
    for (let f = 0; f < u; f++) {
      const [h, p] = l[f];
      Vd(p, Vb(i, h), a, r);
    }
  },
  Vb = (e, i) => {
    let a = e;
    const r = i.split(pl),
      l = r.length;
    for (let u = 0; u < l; u++) {
      const f = r[u];
      let h = a.nextPart.get(f);
      (h || ((h = _b()), a.nextPart.set(f, h)), (a = h));
    }
    return a;
  },
  $A = (e) => "isThemeGetter" in e && e.isThemeGetter === !0,
  JA = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let i = 0,
      a = Object.create(null),
      r = Object.create(null);
    const l = (u, f) => {
      ((a[u] = f), i++, i > e && ((i = 0), (r = a), (a = Object.create(null))));
    };
    return {
      get(u) {
        let f = a[u];
        if (f !== void 0) return f;
        if ((f = r[u]) !== void 0) return (l(u, f), f);
      },
      set(u, f) {
        u in a ? (a[u] = f) : l(u, f);
      },
    };
  },
  Wf = "!",
  Fg = ":",
  t2 = [],
  Kg = (e, i, a, r, l) => ({
    modifiers: e,
    hasImportantModifier: i,
    baseClassName: a,
    maybePostfixModifierPosition: r,
    isExternal: l,
  }),
  e2 = (e) => {
    const { prefix: i, experimentalParseClassName: a } = e;
    let r = (l) => {
      const u = [];
      let f = 0,
        h = 0,
        p = 0,
        m;
      const y = l.length;
      for (let C = 0; C < y; C++) {
        const R = l[C];
        if (f === 0 && h === 0) {
          if (R === Fg) {
            (u.push(l.slice(p, C)), (p = C + 1));
            continue;
          }
          if (R === "/") {
            m = C;
            continue;
          }
        }
        R === "[" ? f++ : R === "]" ? f-- : R === "(" ? h++ : R === ")" && h--;
      }
      const g = u.length === 0 ? l : l.slice(p);
      let x = g,
        T = !1;
      g.endsWith(Wf)
        ? ((x = g.slice(0, -1)), (T = !0))
        : g.startsWith(Wf) && ((x = g.slice(1)), (T = !0));
      const E = m && m > p ? m - p : void 0;
      return Kg(u, T, x, E);
    };
    if (i) {
      const l = i + Fg,
        u = r;
      r = (f) =>
        f.startsWith(l) ? u(f.slice(l.length)) : Kg(t2, !1, f, void 0, !0);
    }
    if (a) {
      const l = r;
      r = (u) => a({ className: u, parseClassName: l });
    }
    return r;
  },
  n2 = (e) => {
    const i = new Map();
    return (
      e.orderSensitiveModifiers.forEach((a, r) => {
        i.set(a, 1e6 + r);
      }),
      (a) => {
        const r = [];
        let l = [];
        for (let u = 0; u < a.length; u++) {
          const f = a[u],
            h = f[0] === "[",
            p = i.has(f);
          h || p
            ? (l.length > 0 && (l.sort(), r.push(...l), (l = [])), r.push(f))
            : l.push(f);
        }
        return (l.length > 0 && (l.sort(), r.push(...l)), r);
      }
    );
  },
  i2 = (e) => ({
    cache: JA(e.cacheSize),
    parseClassName: e2(e),
    sortModifiers: n2(e),
    postfixLookupClassGroupIds: s2(e),
    ...GA(e),
  }),
  s2 = (e) => {
    const i = Object.create(null),
      a = e.postfixLookupClassGroups;
    if (a) for (let r = 0; r < a.length; r++) i[a[r]] = !0;
    return i;
  },
  a2 = /\s+/,
  r2 = (e, i) => {
    const {
        parseClassName: a,
        getClassGroupId: r,
        getConflictingClassGroupIds: l,
        sortModifiers: u,
        postfixLookupClassGroupIds: f,
      } = i,
      h = [],
      p = e.trim().split(a2);
    let m = "";
    for (let y = p.length - 1; y >= 0; y -= 1) {
      const g = p[y],
        {
          isExternal: x,
          modifiers: T,
          hasImportantModifier: E,
          baseClassName: C,
          maybePostfixModifierPosition: R,
        } = a(g);
      if (x) {
        m = g + (m.length > 0 ? " " + m : m);
        continue;
      }
      let D = !!R,
        N;
      if (D) {
        const Z = C.substring(0, R);
        N = r(Z);
        const P = N && f[N] ? r(C) : void 0;
        P && P !== N && ((N = P), (D = !1));
      } else N = r(C);
      if (!N) {
        if (!D) {
          m = g + (m.length > 0 ? " " + m : m);
          continue;
        }
        if (((N = r(C)), !N)) {
          m = g + (m.length > 0 ? " " + m : m);
          continue;
        }
        D = !1;
      }
      const j = T.length === 0 ? "" : T.length === 1 ? T[0] : u(T).join(":"),
        V = E ? j + Wf : j,
        U = V + N;
      if (h.indexOf(U) > -1) continue;
      h.push(U);
      const X = l(N, D);
      for (let Z = 0; Z < X.length; ++Z) {
        const P = X[Z];
        h.push(V + P);
      }
      m = g + (m.length > 0 ? " " + m : m);
    }
    return m;
  },
  o2 = (...e) => {
    let i = 0,
      a,
      r,
      l = "";
    for (; i < e.length;)
      (a = e[i++]) && (r = Lb(a)) && (l && (l += " "), (l += r));
    return l;
  },
  Lb = (e) => {
    if (typeof e == "string") return e;
    let i,
      a = "";
    for (let r = 0; r < e.length; r++)
      e[r] && (i = Lb(e[r])) && (a && (a += " "), (a += i));
    return a;
  },
  l2 = (e, ...i) => {
    let a, r, l, u;
    const f = (p) => {
        const m = i.reduce((y, g) => g(y), e());
        return (
          (a = i2(m)),
          (r = a.cache.get),
          (l = a.cache.set),
          (u = h),
          h(p)
        );
      },
      h = (p) => {
        const m = r(p);
        if (m) return m;
        const y = r2(p, a);
        return (l(p, y), y);
      };
    return ((u = f), (...p) => u(o2(...p)));
  },
  c2 = [],
  $t = (e) => {
    const i = (a) => a[e] || c2;
    return ((i.isThemeGetter = !0), i);
  },
  kb = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Pb = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  u2 = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  f2 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  d2 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  h2 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  m2 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  p2 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  yi = (e) => u2.test(e),
  xt = (e) => !!e && !Number.isNaN(Number(e)),
  yn = (e) => !!e && Number.isInteger(Number(e)),
  pf = (e) => e.endsWith("%") && xt(e.slice(0, -1)),
  Un = (e) => f2.test(e),
  Bb = () => !0,
  y2 = (e) => d2.test(e) && !h2.test(e),
  Ld = () => !1,
  g2 = (e) => m2.test(e),
  v2 = (e) => p2.test(e),
  b2 = (e) => !it(e) && !at(e),
  x2 = (e) =>
    e.startsWith("@container") &&
    ((e[10] === "/" && e[11] !== void 0) ||
      (e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10)) ||
      (e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10))),
  w2 = (e) => Si(e, qb, Ld),
  it = (e) => kb.test(e),
  qi = (e) => Si(e, Yb, y2),
  Qg = (e) => Si(e, O2, xt),
  S2 = (e) => Si(e, Xb, Bb),
  T2 = (e) => Si(e, Gb, Ld),
  Zg = (e) => Si(e, Ub, Ld),
  E2 = (e) => Si(e, Hb, v2),
  Ko = (e) => Si(e, Fb, g2),
  at = (e) => Pb.test(e),
  tr = (e) => $i(e, Yb),
  A2 = (e) => $i(e, Gb),
  Wg = (e) => $i(e, Ub),
  C2 = (e) => $i(e, qb),
  R2 = (e) => $i(e, Hb),
  Qo = (e) => $i(e, Fb, !0),
  M2 = (e) => $i(e, Xb, !0),
  Si = (e, i, a) => {
    const r = kb.exec(e);
    return r ? (r[1] ? i(r[1]) : a(r[2])) : !1;
  },
  $i = (e, i, a = !1) => {
    const r = Pb.exec(e);
    return r ? (r[1] ? i(r[1]) : a) : !1;
  },
  Ub = (e) => e === "position" || e === "percentage",
  Hb = (e) => e === "image" || e === "url",
  qb = (e) => e === "length" || e === "size" || e === "bg-size",
  Yb = (e) => e === "length",
  O2 = (e) => e === "number",
  Gb = (e) => e === "family-name",
  Xb = (e) => e === "number" || e === "weight",
  Fb = (e) => e === "shadow",
  D2 = () => {
    const e = $t("color"),
      i = $t("font"),
      a = $t("text"),
      r = $t("font-weight"),
      l = $t("tracking"),
      u = $t("leading"),
      f = $t("breakpoint"),
      h = $t("container"),
      p = $t("spacing"),
      m = $t("radius"),
      y = $t("shadow"),
      g = $t("inset-shadow"),
      x = $t("text-shadow"),
      T = $t("drop-shadow"),
      E = $t("blur"),
      C = $t("perspective"),
      R = $t("aspect"),
      D = $t("ease"),
      N = $t("animate"),
      j = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      V = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      U = () => [...V(), at, it],
      X = () => ["auto", "hidden", "clip", "visible", "scroll"],
      Z = () => ["auto", "contain", "none"],
      P = () => [at, it, p],
      I = () => [yi, "full", "auto", ...P()],
      W = () => [yn, "none", "subgrid", at, it],
      $ = () => ["auto", { span: ["full", yn, at, it] }, yn, at, it],
      st = () => [yn, "auto", at, it],
      gt = () => ["auto", "min", "max", "fr", at, it],
      tt = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      ut = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      z = () => ["auto", ...P()],
      Q = () => [
        yi,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...P(),
      ],
      F = () => [
        yi,
        "screen",
        "full",
        "dvw",
        "lvw",
        "svw",
        "min",
        "max",
        "fit",
        ...P(),
      ],
      nt = () => [
        yi,
        "screen",
        "full",
        "lh",
        "dvh",
        "lvh",
        "svh",
        "min",
        "max",
        "fit",
        ...P(),
      ],
      A = () => [e, at, it],
      Y = () => [...V(), Wg, Zg, { position: [at, it] }],
      et = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      J = () => ["auto", "cover", "contain", C2, w2, { size: [at, it] }],
      ct = () => [pf, tr, qi],
      mt = () => ["", "none", "full", m, at, it],
      lt = () => ["", xt, tr, qi],
      Ft = () => ["solid", "dashed", "dotted", "double"],
      Rt = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      Ot = () => [xt, pf, Wg, Zg],
      Xn = () => ["", "none", E, at, it],
      Ze = () => ["none", xt, at, it],
      cn = () => ["none", xt, at, it],
      En = () => [xt, at, it],
      Ee = () => [yi, "full", ...P()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [Un],
        breakpoint: [Un],
        color: [Bb],
        container: [Un],
        "drop-shadow": [Un],
        ease: ["in", "out", "in-out"],
        font: [b2],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [Un],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [Un],
        shadow: [Un],
        spacing: ["px", xt],
        text: [Un],
        "text-shadow": [Un],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", yi, it, at, R] }],
        container: ["container"],
        "container-type": [{ "@container": ["", "normal", "size", at, it] }],
        "container-named": [x2],
        columns: [{ columns: [xt, it, at, h] }],
        "break-after": [{ "break-after": j() }],
        "break-before": [{ "break-before": j() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: U() }],
        overflow: [{ overflow: X() }],
        "overflow-x": [{ "overflow-x": X() }],
        "overflow-y": [{ "overflow-y": X() }],
        overscroll: [{ overscroll: Z() }],
        "overscroll-x": [{ "overscroll-x": Z() }],
        "overscroll-y": [{ "overscroll-y": Z() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: I() }],
        "inset-x": [{ "inset-x": I() }],
        "inset-y": [{ "inset-y": I() }],
        start: [{ "inset-s": I(), start: I() }],
        end: [{ "inset-e": I(), end: I() }],
        "inset-bs": [{ "inset-bs": I() }],
        "inset-be": [{ "inset-be": I() }],
        top: [{ top: I() }],
        right: [{ right: I() }],
        bottom: [{ bottom: I() }],
        left: [{ left: I() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [yn, "auto", at, it] }],
        basis: [{ basis: [yi, "full", "auto", h, ...P()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [xt, yi, "auto", "initial", "none", it] }],
        grow: [{ grow: ["", xt, at, it] }],
        shrink: [{ shrink: ["", xt, at, it] }],
        order: [{ order: [yn, "first", "last", "none", at, it] }],
        "grid-cols": [{ "grid-cols": W() }],
        "col-start-end": [{ col: $() }],
        "col-start": [{ "col-start": st() }],
        "col-end": [{ "col-end": st() }],
        "grid-rows": [{ "grid-rows": W() }],
        "row-start-end": [{ row: $() }],
        "row-start": [{ "row-start": st() }],
        "row-end": [{ "row-end": st() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": gt() }],
        "auto-rows": [{ "auto-rows": gt() }],
        gap: [{ gap: P() }],
        "gap-x": [{ "gap-x": P() }],
        "gap-y": [{ "gap-y": P() }],
        "justify-content": [{ justify: [...tt(), "normal"] }],
        "justify-items": [{ "justify-items": [...ut(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...ut()] }],
        "align-content": [{ content: ["normal", ...tt()] }],
        "align-items": [{ items: [...ut(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...ut(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": tt() }],
        "place-items": [{ "place-items": [...ut(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...ut()] }],
        p: [{ p: P() }],
        px: [{ px: P() }],
        py: [{ py: P() }],
        ps: [{ ps: P() }],
        pe: [{ pe: P() }],
        pbs: [{ pbs: P() }],
        pbe: [{ pbe: P() }],
        pt: [{ pt: P() }],
        pr: [{ pr: P() }],
        pb: [{ pb: P() }],
        pl: [{ pl: P() }],
        m: [{ m: z() }],
        mx: [{ mx: z() }],
        my: [{ my: z() }],
        ms: [{ ms: z() }],
        me: [{ me: z() }],
        mbs: [{ mbs: z() }],
        mbe: [{ mbe: z() }],
        mt: [{ mt: z() }],
        mr: [{ mr: z() }],
        mb: [{ mb: z() }],
        ml: [{ ml: z() }],
        "space-x": [{ "space-x": P() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": P() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: Q() }],
        "inline-size": [{ inline: ["auto", ...F()] }],
        "min-inline-size": [{ "min-inline": ["auto", ...F()] }],
        "max-inline-size": [{ "max-inline": ["none", ...F()] }],
        "block-size": [{ block: ["auto", ...nt()] }],
        "min-block-size": [{ "min-block": ["auto", ...nt()] }],
        "max-block-size": [{ "max-block": ["none", ...nt()] }],
        w: [{ w: [h, "screen", ...Q()] }],
        "min-w": [{ "min-w": [h, "screen", "none", ...Q()] }],
        "max-w": [
          { "max-w": [h, "screen", "none", "prose", { screen: [f] }, ...Q()] },
        ],
        h: [{ h: ["screen", "lh", ...Q()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...Q()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...Q()] }],
        "font-size": [{ text: ["base", a, tr, qi] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [r, M2, S2] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              pf,
              it,
            ],
          },
        ],
        "font-family": [{ font: [A2, T2, i] }],
        "font-features": [{ "font-features": [it] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [l, at, it] }],
        "line-clamp": [{ "line-clamp": [xt, "none", at, Qg] }],
        leading: [{ leading: [u, ...P()] }],
        "list-image": [{ "list-image": ["none", at, it] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", at, it] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: A() }],
        "text-color": [{ text: A() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...Ft(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [xt, "from-font", "auto", at, qi] },
        ],
        "text-decoration-color": [{ decoration: A() }],
        "underline-offset": [{ "underline-offset": [xt, "auto", at, it] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: P() }],
        "tab-size": [{ tab: [yn, at, it] }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              at,
              it,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", at, it] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: Y() }],
        "bg-repeat": [{ bg: et() }],
        "bg-size": [{ bg: J() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  yn,
                  at,
                  it,
                ],
                radial: ["", at, it],
                conic: [yn, at, it],
              },
              R2,
              E2,
            ],
          },
        ],
        "bg-color": [{ bg: A() }],
        "gradient-from-pos": [{ from: ct() }],
        "gradient-via-pos": [{ via: ct() }],
        "gradient-to-pos": [{ to: ct() }],
        "gradient-from": [{ from: A() }],
        "gradient-via": [{ via: A() }],
        "gradient-to": [{ to: A() }],
        rounded: [{ rounded: mt() }],
        "rounded-s": [{ "rounded-s": mt() }],
        "rounded-e": [{ "rounded-e": mt() }],
        "rounded-t": [{ "rounded-t": mt() }],
        "rounded-r": [{ "rounded-r": mt() }],
        "rounded-b": [{ "rounded-b": mt() }],
        "rounded-l": [{ "rounded-l": mt() }],
        "rounded-ss": [{ "rounded-ss": mt() }],
        "rounded-se": [{ "rounded-se": mt() }],
        "rounded-ee": [{ "rounded-ee": mt() }],
        "rounded-es": [{ "rounded-es": mt() }],
        "rounded-tl": [{ "rounded-tl": mt() }],
        "rounded-tr": [{ "rounded-tr": mt() }],
        "rounded-br": [{ "rounded-br": mt() }],
        "rounded-bl": [{ "rounded-bl": mt() }],
        "border-w": [{ border: lt() }],
        "border-w-x": [{ "border-x": lt() }],
        "border-w-y": [{ "border-y": lt() }],
        "border-w-s": [{ "border-s": lt() }],
        "border-w-e": [{ "border-e": lt() }],
        "border-w-bs": [{ "border-bs": lt() }],
        "border-w-be": [{ "border-be": lt() }],
        "border-w-t": [{ "border-t": lt() }],
        "border-w-r": [{ "border-r": lt() }],
        "border-w-b": [{ "border-b": lt() }],
        "border-w-l": [{ "border-l": lt() }],
        "divide-x": [{ "divide-x": lt() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": lt() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...Ft(), "hidden", "none"] }],
        "divide-style": [{ divide: [...Ft(), "hidden", "none"] }],
        "border-color": [{ border: A() }],
        "border-color-x": [{ "border-x": A() }],
        "border-color-y": [{ "border-y": A() }],
        "border-color-s": [{ "border-s": A() }],
        "border-color-e": [{ "border-e": A() }],
        "border-color-bs": [{ "border-bs": A() }],
        "border-color-be": [{ "border-be": A() }],
        "border-color-t": [{ "border-t": A() }],
        "border-color-r": [{ "border-r": A() }],
        "border-color-b": [{ "border-b": A() }],
        "border-color-l": [{ "border-l": A() }],
        "divide-color": [{ divide: A() }],
        "outline-style": [{ outline: [...Ft(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [xt, at, it] }],
        "outline-w": [{ outline: ["", xt, tr, qi] }],
        "outline-color": [{ outline: A() }],
        shadow: [{ shadow: ["", "none", y, Qo, Ko] }],
        "shadow-color": [{ shadow: A() }],
        "inset-shadow": [{ "inset-shadow": ["none", g, Qo, Ko] }],
        "inset-shadow-color": [{ "inset-shadow": A() }],
        "ring-w": [{ ring: lt() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: A() }],
        "ring-offset-w": [{ "ring-offset": [xt, qi] }],
        "ring-offset-color": [{ "ring-offset": A() }],
        "inset-ring-w": [{ "inset-ring": lt() }],
        "inset-ring-color": [{ "inset-ring": A() }],
        "text-shadow": [{ "text-shadow": ["none", x, Qo, Ko] }],
        "text-shadow-color": [{ "text-shadow": A() }],
        opacity: [{ opacity: [xt, at, it] }],
        "mix-blend": [
          { "mix-blend": [...Rt(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": Rt() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [xt] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": Ot() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": Ot() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": A() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": A() }],
        "mask-image-t-from-pos": [{ "mask-t-from": Ot() }],
        "mask-image-t-to-pos": [{ "mask-t-to": Ot() }],
        "mask-image-t-from-color": [{ "mask-t-from": A() }],
        "mask-image-t-to-color": [{ "mask-t-to": A() }],
        "mask-image-r-from-pos": [{ "mask-r-from": Ot() }],
        "mask-image-r-to-pos": [{ "mask-r-to": Ot() }],
        "mask-image-r-from-color": [{ "mask-r-from": A() }],
        "mask-image-r-to-color": [{ "mask-r-to": A() }],
        "mask-image-b-from-pos": [{ "mask-b-from": Ot() }],
        "mask-image-b-to-pos": [{ "mask-b-to": Ot() }],
        "mask-image-b-from-color": [{ "mask-b-from": A() }],
        "mask-image-b-to-color": [{ "mask-b-to": A() }],
        "mask-image-l-from-pos": [{ "mask-l-from": Ot() }],
        "mask-image-l-to-pos": [{ "mask-l-to": Ot() }],
        "mask-image-l-from-color": [{ "mask-l-from": A() }],
        "mask-image-l-to-color": [{ "mask-l-to": A() }],
        "mask-image-x-from-pos": [{ "mask-x-from": Ot() }],
        "mask-image-x-to-pos": [{ "mask-x-to": Ot() }],
        "mask-image-x-from-color": [{ "mask-x-from": A() }],
        "mask-image-x-to-color": [{ "mask-x-to": A() }],
        "mask-image-y-from-pos": [{ "mask-y-from": Ot() }],
        "mask-image-y-to-pos": [{ "mask-y-to": Ot() }],
        "mask-image-y-from-color": [{ "mask-y-from": A() }],
        "mask-image-y-to-color": [{ "mask-y-to": A() }],
        "mask-image-radial": [{ "mask-radial": [at, it] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": Ot() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": Ot() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": A() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": A() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": V() }],
        "mask-image-conic-pos": [{ "mask-conic": [xt] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": Ot() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": Ot() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": A() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": A() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: Y() }],
        "mask-repeat": [{ mask: et() }],
        "mask-size": [{ mask: J() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", at, it] }],
        filter: [{ filter: ["", "none", at, it] }],
        blur: [{ blur: Xn() }],
        brightness: [{ brightness: [xt, at, it] }],
        contrast: [{ contrast: [xt, at, it] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", T, Qo, Ko] }],
        "drop-shadow-color": [{ "drop-shadow": A() }],
        grayscale: [{ grayscale: ["", xt, at, it] }],
        "hue-rotate": [{ "hue-rotate": [xt, at, it] }],
        invert: [{ invert: ["", xt, at, it] }],
        saturate: [{ saturate: [xt, at, it] }],
        sepia: [{ sepia: ["", xt, at, it] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", at, it] }],
        "backdrop-blur": [{ "backdrop-blur": Xn() }],
        "backdrop-brightness": [{ "backdrop-brightness": [xt, at, it] }],
        "backdrop-contrast": [{ "backdrop-contrast": [xt, at, it] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", xt, at, it] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [xt, at, it] }],
        "backdrop-invert": [{ "backdrop-invert": ["", xt, at, it] }],
        "backdrop-opacity": [{ "backdrop-opacity": [xt, at, it] }],
        "backdrop-saturate": [{ "backdrop-saturate": [xt, at, it] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", xt, at, it] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": P() }],
        "border-spacing-x": [{ "border-spacing-x": P() }],
        "border-spacing-y": [{ "border-spacing-y": P() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              at,
              it,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [xt, "initial", at, it] }],
        ease: [{ ease: ["linear", "initial", D, at, it] }],
        delay: [{ delay: [xt, at, it] }],
        animate: [{ animate: ["none", N, at, it] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [C, at, it] }],
        "perspective-origin": [{ "perspective-origin": U() }],
        rotate: [{ rotate: Ze() }],
        "rotate-x": [{ "rotate-x": Ze() }],
        "rotate-y": [{ "rotate-y": Ze() }],
        "rotate-z": [{ "rotate-z": Ze() }],
        scale: [{ scale: cn() }],
        "scale-x": [{ "scale-x": cn() }],
        "scale-y": [{ "scale-y": cn() }],
        "scale-z": [{ "scale-z": cn() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: En() }],
        "skew-x": [{ "skew-x": En() }],
        "skew-y": [{ "skew-y": En() }],
        transform: [{ transform: [at, it, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: U() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: Ee() }],
        "translate-x": [{ "translate-x": Ee() }],
        "translate-y": [{ "translate-y": Ee() }],
        "translate-z": [{ "translate-z": Ee() }],
        "translate-none": ["translate-none"],
        zoom: [{ zoom: [yn, at, it] }],
        accent: [{ accent: A() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: A() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              at,
              it,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scrollbar-thumb-color": [{ "scrollbar-thumb": A() }],
        "scrollbar-track-color": [{ "scrollbar-track": A() }],
        "scrollbar-gutter": [
          { "scrollbar-gutter": ["auto", "stable", "both"] },
        ],
        "scrollbar-w": [{ scrollbar: ["auto", "thin", "none"] }],
        "scroll-m": [{ "scroll-m": P() }],
        "scroll-mx": [{ "scroll-mx": P() }],
        "scroll-my": [{ "scroll-my": P() }],
        "scroll-ms": [{ "scroll-ms": P() }],
        "scroll-me": [{ "scroll-me": P() }],
        "scroll-mbs": [{ "scroll-mbs": P() }],
        "scroll-mbe": [{ "scroll-mbe": P() }],
        "scroll-mt": [{ "scroll-mt": P() }],
        "scroll-mr": [{ "scroll-mr": P() }],
        "scroll-mb": [{ "scroll-mb": P() }],
        "scroll-ml": [{ "scroll-ml": P() }],
        "scroll-p": [{ "scroll-p": P() }],
        "scroll-px": [{ "scroll-px": P() }],
        "scroll-py": [{ "scroll-py": P() }],
        "scroll-ps": [{ "scroll-ps": P() }],
        "scroll-pe": [{ "scroll-pe": P() }],
        "scroll-pbs": [{ "scroll-pbs": P() }],
        "scroll-pbe": [{ "scroll-pbe": P() }],
        "scroll-pt": [{ "scroll-pt": P() }],
        "scroll-pr": [{ "scroll-pr": P() }],
        "scroll-pb": [{ "scroll-pb": P() }],
        "scroll-pl": [{ "scroll-pl": P() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          {
            "will-change": ["auto", "scroll", "contents", "transform", at, it],
          },
        ],
        fill: [{ fill: ["none", ...A()] }],
        "stroke-w": [{ stroke: [xt, tr, qi, Qg] }],
        stroke: [{ stroke: ["none", ...A()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        "container-named": ["container-type"],
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "inset-bs",
          "inset-be",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-bs",
          "border-w-be",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-bs",
          "border-color-be",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mbs",
          "scroll-mbe",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pbs",
          "scroll-pbe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      postfixLookupClassGroups: ["container-type"],
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  N2 = l2(D2);
function Kb(e) {
  var i,
    a,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var l = e.length;
      for (i = 0; i < l; i++)
        e[i] && (a = Kb(e[i])) && (r && (r += " "), (r += a));
    } else for (a in e) e[a] && (r && (r += " "), (r += a));
  return r;
}
function Qb() {
  for (var e, i, a = 0, r = "", l = arguments.length; a < l; a++)
    (e = arguments[a]) && (i = Kb(e)) && (r && (r += " "), (r += i));
  return r;
}
function ke(...e) {
  return N2(Qb(e));
}
const Ig = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  $g = Qb,
  j2 = (e, i) => (a) => {
    var r;
    if (i?.variants == null) return $g(e, a?.class, a?.className);
    const { variants: l, defaultVariants: u } = i,
      f = Object.keys(l).map((m) => {
        const y = a?.[m],
          g = u?.[m];
        if (y === null) return null;
        const x = Ig(y) || Ig(g);
        return l[m][x];
      }),
      h =
        a &&
        Object.entries(a).reduce((m, y) => {
          let [g, x] = y;
          return (x === void 0 || (m[g] = x), m);
        }, {}),
      p =
        i == null || (r = i.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((m, y) => {
              let { class: g, className: x, ...T } = y;
              return Object.entries(T).every((E) => {
                let [C, R] = E;
                return Array.isArray(R)
                  ? R.includes({ ...u, ...h }[C])
                  : { ...u, ...h }[C] === R;
              })
                ? [...m, g, x]
                : m;
            }, []);
    return $g(e, f, p, a?.class, a?.className);
  };
const _2 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  z2 = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (i, a, r) =>
      r ? r.toUpperCase() : a.toLowerCase(),
    ),
  Jg = (e) => {
    const i = z2(e);
    return i.charAt(0).toUpperCase() + i.slice(1);
  },
  Zb = (...e) =>
    e
      .filter((i, a, r) => !!i && i.trim() !== "" && r.indexOf(i) === a)
      .join(" ")
      .trim(),
  V2 = (e) => {
    for (const i in e)
      if (i.startsWith("aria-") || i === "role" || i === "title") return !0;
  };
var L2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const k2 = S.forwardRef(
  (
    {
      color: e = "currentColor",
      size: i = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: r,
      className: l = "",
      children: u,
      iconNode: f,
      ...h
    },
    p,
  ) =>
    S.createElement(
      "svg",
      {
        ref: p,
        ...L2,
        width: i,
        height: i,
        stroke: e,
        strokeWidth: r ? (Number(a) * 24) / Number(i) : a,
        className: Zb("lucide", l),
        ...(!u && !V2(h) && { "aria-hidden": "true" }),
        ...h,
      },
      [
        ...f.map(([m, y]) => S.createElement(m, y)),
        ...(Array.isArray(u) ? u : [u]),
      ],
    ),
);
const Wb = (e, i) => {
  const a = S.forwardRef(({ className: r, ...l }, u) =>
    S.createElement(k2, {
      ref: u,
      iconNode: i,
      className: Zb(`lucide-${_2(Jg(e))}`, `lucide-${e}`, r),
      ...l,
    }),
  );
  return ((a.displayName = Jg(e)), a);
};
const P2 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
  ],
  B2 = Wb("circle-alert", P2);
const U2 = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  H2 = Wb("x", U2),
  q2 = UA,
  Ib = S.forwardRef(({ className: e, ...i }, a) =>
    b.jsx(Rb, {
      ref: a,
      className: ke(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e,
      ),
      ...i,
    }),
  );
Ib.displayName = Rb.displayName;
const Y2 = j2(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    },
  ),
  $b = S.forwardRef(({ className: e, variant: i, ...a }, r) =>
    b.jsx(Mb, { ref: r, className: ke(Y2({ variant: i }), e), ...a }),
  );
$b.displayName = Mb.displayName;
const G2 = S.forwardRef(({ className: e, ...i }, a) =>
  b.jsx(Nb, {
    ref: a,
    className: ke(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e,
    ),
    ...i,
  }),
);
G2.displayName = Nb.displayName;
const Jb = S.forwardRef(({ className: e, ...i }, a) =>
  b.jsx(jb, {
    ref: a,
    className: ke(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e,
    ),
    "toast-close": "",
    ...i,
    children: b.jsx(H2, { className: "h-4 w-4" }),
  }),
);
Jb.displayName = jb.displayName;
const tx = S.forwardRef(({ className: e, ...i }, a) =>
  b.jsx(Ob, { ref: a, className: ke("text-sm font-semibold", e), ...i }),
);
tx.displayName = Ob.displayName;
const ex = S.forwardRef(({ className: e, ...i }, a) =>
  b.jsx(Db, { ref: a, className: ke("text-sm opacity-90", e), ...i }),
);
ex.displayName = Db.displayName;
const X2 = 1,
  F2 = 1e6;
let yf = 0;
function K2() {
  return ((yf = (yf + 1) % Number.MAX_SAFE_INTEGER), yf.toString());
}
const gf = new Map(),
  t0 = (e) => {
    if (gf.has(e)) return;
    const i = setTimeout(() => {
      (gf.delete(e), sr({ type: "REMOVE_TOAST", toastId: e }));
    }, F2);
    gf.set(e, i);
  },
  Q2 = (e, i) => {
    switch (i.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [i.toast, ...e.toasts].slice(0, X2) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((a) =>
            a.id === i.toast.id ? { ...a, ...i.toast } : a,
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: a } = i;
        return (
          a
            ? t0(a)
            : e.toasts.forEach((r) => {
                t0(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === a || a === void 0 ? { ...r, open: !1 } : r,
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return i.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((a) => a.id !== i.toastId) };
    }
  },
  il = [];
let sl = { toasts: [] };
function sr(e) {
  ((sl = Q2(sl, e)),
    il.forEach((i) => {
      i(sl);
    }));
}
function Z2({ ...e }) {
  const i = K2(),
    a = (l) => sr({ type: "UPDATE_TOAST", toast: { ...l, id: i } }),
    r = () => sr({ type: "DISMISS_TOAST", toastId: i });
  return (
    sr({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: i,
        open: !0,
        onOpenChange: (l) => {
          l || r();
        },
      },
    }),
    { id: i, dismiss: r, update: a }
  );
}
function W2() {
  const [e, i] = S.useState(sl);
  return (
    S.useEffect(
      () => (
        il.push(i),
        () => {
          const a = il.indexOf(i);
          a > -1 && il.splice(a, 1);
        }
      ),
      [e],
    ),
    {
      ...e,
      toast: Z2,
      dismiss: (a) => sr({ type: "DISMISS_TOAST", toastId: a }),
    }
  );
}
function I2() {
  const { toasts: e } = W2();
  return b.jsxs(q2, {
    children: [
      e.map(function ({ id: i, title: a, description: r, action: l, ...u }) {
        return b.jsxs(
          $b,
          {
            ...u,
            children: [
              b.jsxs("div", {
                className: "grid gap-1",
                children: [
                  a && b.jsx(tx, { children: a }),
                  r && b.jsx(ex, { children: r }),
                ],
              }),
              l,
              b.jsx(Jb, {}),
            ],
          },
          i,
        );
      }),
      b.jsx(Ib, {}),
    ],
  });
}
const $2 = ["top", "right", "bottom", "left"],
  vi = Math.min,
  ze = Math.max,
  yl = Math.round,
  Zo = Math.floor,
  wn = (e) => ({ x: e, y: e }),
  J2 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function If(e, i, a) {
  return ze(e, vi(i, a));
}
function qn(e, i) {
  return typeof e == "function" ? e(i) : e;
}
function Yn(e) {
  return e.split("-")[0];
}
function Ws(e) {
  return e.split("-")[1];
}
function kd(e) {
  return e === "x" ? "y" : "x";
}
function Pd(e) {
  return e === "y" ? "height" : "width";
}
function bn(e) {
  const i = e[0];
  return i === "t" || i === "b" ? "y" : "x";
}
function Bd(e) {
  return kd(bn(e));
}
function tC(e, i, a) {
  a === void 0 && (a = !1);
  const r = Ws(e),
    l = Bd(e),
    u = Pd(l);
  let f =
    l === "x"
      ? r === (a ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
        ? "bottom"
        : "top";
  return (i.reference[u] > i.floating[u] && (f = gl(f)), [f, gl(f)]);
}
function eC(e) {
  const i = gl(e);
  return [$f(e), i, $f(i)];
}
function $f(e) {
  return e.includes("start")
    ? e.replace("start", "end")
    : e.replace("end", "start");
}
const e0 = ["left", "right"],
  n0 = ["right", "left"],
  nC = ["top", "bottom"],
  iC = ["bottom", "top"];
function sC(e, i, a) {
  switch (e) {
    case "top":
    case "bottom":
      return a ? (i ? n0 : e0) : i ? e0 : n0;
    case "left":
    case "right":
      return i ? nC : iC;
    default:
      return [];
  }
}
function aC(e, i, a, r) {
  const l = Ws(e);
  let u = sC(Yn(e), a === "start", r);
  return (
    l && ((u = u.map((f) => f + "-" + l)), i && (u = u.concat(u.map($f)))),
    u
  );
}
function gl(e) {
  const i = Yn(e);
  return J2[i] + e.slice(i.length);
}
function rC(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function nx(e) {
  return typeof e != "number"
    ? rC(e)
    : { top: e, right: e, bottom: e, left: e };
}
function vl(e) {
  const { x: i, y: a, width: r, height: l } = e;
  return {
    width: r,
    height: l,
    top: a,
    left: i,
    right: i + r,
    bottom: a + l,
    x: i,
    y: a,
  };
}
function i0(e, i, a) {
  let { reference: r, floating: l } = e;
  const u = bn(i),
    f = Bd(i),
    h = Pd(f),
    p = Yn(i),
    m = u === "y",
    y = r.x + r.width / 2 - l.width / 2,
    g = r.y + r.height / 2 - l.height / 2,
    x = r[h] / 2 - l[h] / 2;
  let T;
  switch (p) {
    case "top":
      T = { x: y, y: r.y - l.height };
      break;
    case "bottom":
      T = { x: y, y: r.y + r.height };
      break;
    case "right":
      T = { x: r.x + r.width, y: g };
      break;
    case "left":
      T = { x: r.x - l.width, y: g };
      break;
    default:
      T = { x: r.x, y: r.y };
  }
  switch (Ws(i)) {
    case "start":
      T[f] -= x * (a && m ? -1 : 1);
      break;
    case "end":
      T[f] += x * (a && m ? -1 : 1);
      break;
  }
  return T;
}
async function oC(e, i) {
  var a;
  i === void 0 && (i = {});
  const { x: r, y: l, platform: u, rects: f, elements: h, strategy: p } = e,
    {
      boundary: m = "clippingAncestors",
      rootBoundary: y = "viewport",
      elementContext: g = "floating",
      altBoundary: x = !1,
      padding: T = 0,
    } = qn(i, e),
    E = nx(T),
    R = h[x ? (g === "floating" ? "reference" : "floating") : g],
    D = vl(
      await u.getClippingRect({
        element:
          (a = await (u.isElement == null ? void 0 : u.isElement(R))) == null ||
          a
            ? R
            : R.contextElement ||
              (await (u.getDocumentElement == null
                ? void 0
                : u.getDocumentElement(h.floating))),
        boundary: m,
        rootBoundary: y,
        strategy: p,
      }),
    ),
    N =
      g === "floating"
        ? { x: r, y: l, width: f.floating.width, height: f.floating.height }
        : f.reference,
    j = await (u.getOffsetParent == null
      ? void 0
      : u.getOffsetParent(h.floating)),
    V = (await (u.isElement == null ? void 0 : u.isElement(j)))
      ? (await (u.getScale == null ? void 0 : u.getScale(j))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    U = vl(
      u.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: h,
            rect: N,
            offsetParent: j,
            strategy: p,
          })
        : N,
    );
  return {
    top: (D.top - U.top + E.top) / V.y,
    bottom: (U.bottom - D.bottom + E.bottom) / V.y,
    left: (D.left - U.left + E.left) / V.x,
    right: (U.right - D.right + E.right) / V.x,
  };
}
const lC = 50,
  cC = async (e, i, a) => {
    const {
        placement: r = "bottom",
        strategy: l = "absolute",
        middleware: u = [],
        platform: f,
      } = a,
      h = f.detectOverflow ? f : { ...f, detectOverflow: oC },
      p = await (f.isRTL == null ? void 0 : f.isRTL(i));
    let m = await f.getElementRects({ reference: e, floating: i, strategy: l }),
      { x: y, y: g } = i0(m, r, p),
      x = r,
      T = 0;
    const E = {};
    for (let C = 0; C < u.length; C++) {
      const R = u[C];
      if (!R) continue;
      const { name: D, fn: N } = R,
        {
          x: j,
          y: V,
          data: U,
          reset: X,
        } = await N({
          x: y,
          y: g,
          initialPlacement: r,
          placement: x,
          strategy: l,
          middlewareData: E,
          rects: m,
          platform: h,
          elements: { reference: e, floating: i },
        });
      ((y = j ?? y),
        (g = V ?? g),
        (E[D] = { ...E[D], ...U }),
        X &&
          T < lC &&
          (T++,
          typeof X == "object" &&
            (X.placement && (x = X.placement),
            X.rects &&
              (m =
                X.rects === !0
                  ? await f.getElementRects({
                      reference: e,
                      floating: i,
                      strategy: l,
                    })
                  : X.rects),
            ({ x: y, y: g } = i0(m, x, p))),
          (C = -1)));
    }
    return { x: y, y: g, placement: x, strategy: l, middlewareData: E };
  },
  uC = (e) => ({
    name: "arrow",
    options: e,
    async fn(i) {
      const {
          x: a,
          y: r,
          placement: l,
          rects: u,
          platform: f,
          elements: h,
          middlewareData: p,
        } = i,
        { element: m, padding: y = 0 } = qn(e, i) || {};
      if (m == null) return {};
      const g = nx(y),
        x = { x: a, y: r },
        T = Bd(l),
        E = Pd(T),
        C = await f.getDimensions(m),
        R = T === "y",
        D = R ? "top" : "left",
        N = R ? "bottom" : "right",
        j = R ? "clientHeight" : "clientWidth",
        V = u.reference[E] + u.reference[T] - x[T] - u.floating[E],
        U = x[T] - u.reference[T],
        X = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(m));
      let Z = X ? X[j] : 0;
      (!Z || !(await (f.isElement == null ? void 0 : f.isElement(X)))) &&
        (Z = h.floating[j] || u.floating[E]);
      const P = V / 2 - U / 2,
        I = Z / 2 - C[E] / 2 - 1,
        W = vi(g[D], I),
        $ = vi(g[N], I),
        st = W,
        gt = Z - C[E] - $,
        tt = Z / 2 - C[E] / 2 + P,
        ut = If(st, tt, gt),
        z =
          !p.arrow &&
          Ws(l) != null &&
          tt !== ut &&
          u.reference[E] / 2 - (tt < st ? W : $) - C[E] / 2 < 0,
        Q = z ? (tt < st ? tt - st : tt - gt) : 0;
      return {
        [T]: x[T] + Q,
        data: {
          [T]: ut,
          centerOffset: tt - ut - Q,
          ...(z && { alignmentOffset: Q }),
        },
        reset: z,
      };
    },
  }),
  fC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(i) {
          var a, r;
          const {
              placement: l,
              middlewareData: u,
              rects: f,
              initialPlacement: h,
              platform: p,
              elements: m,
            } = i,
            {
              mainAxis: y = !0,
              crossAxis: g = !0,
              fallbackPlacements: x,
              fallbackStrategy: T = "bestFit",
              fallbackAxisSideDirection: E = "none",
              flipAlignment: C = !0,
              ...R
            } = qn(e, i);
          if ((a = u.arrow) != null && a.alignmentOffset) return {};
          const D = Yn(l),
            N = bn(h),
            j = Yn(h) === h,
            V = await (p.isRTL == null ? void 0 : p.isRTL(m.floating)),
            U = x || (j || !C ? [gl(h)] : eC(h)),
            X = E !== "none";
          !x && X && U.push(...aC(h, C, E, V));
          const Z = [h, ...U],
            P = await p.detectOverflow(i, R),
            I = [];
          let W = ((r = u.flip) == null ? void 0 : r.overflows) || [];
          if ((y && I.push(P[D]), g)) {
            const tt = tC(l, f, V);
            I.push(P[tt[0]], P[tt[1]]);
          }
          if (
            ((W = [...W, { placement: l, overflows: I }]),
            !I.every((tt) => tt <= 0))
          ) {
            var $, st;
            const tt = ((($ = u.flip) == null ? void 0 : $.index) || 0) + 1,
              ut = Z[tt];
            if (
              ut &&
              (!(g === "alignment" ? N !== bn(ut) : !1) ||
                W.every((F) =>
                  bn(F.placement) === N ? F.overflows[0] > 0 : !0,
                ))
            )
              return {
                data: { index: tt, overflows: W },
                reset: { placement: ut },
              };
            let z =
              (st = W.filter((Q) => Q.overflows[0] <= 0).sort(
                (Q, F) => Q.overflows[1] - F.overflows[1],
              )[0]) == null
                ? void 0
                : st.placement;
            if (!z)
              switch (T) {
                case "bestFit": {
                  var gt;
                  const Q =
                    (gt = W.filter((F) => {
                      if (X) {
                        const nt = bn(F.placement);
                        return nt === N || nt === "y";
                      }
                      return !0;
                    })
                      .map((F) => [
                        F.placement,
                        F.overflows
                          .filter((nt) => nt > 0)
                          .reduce((nt, A) => nt + A, 0),
                      ])
                      .sort((F, nt) => F[1] - nt[1])[0]) == null
                      ? void 0
                      : gt[0];
                  Q && (z = Q);
                  break;
                }
                case "initialPlacement":
                  z = h;
                  break;
              }
            if (l !== z) return { reset: { placement: z } };
          }
          return {};
        },
      }
    );
  };
function s0(e, i) {
  return {
    top: e.top - i.height,
    right: e.right - i.width,
    bottom: e.bottom - i.height,
    left: e.left - i.width,
  };
}
function a0(e) {
  return $2.some((i) => e[i] >= 0);
}
const dC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(i) {
          const { rects: a, platform: r } = i,
            { strategy: l = "referenceHidden", ...u } = qn(e, i);
          switch (l) {
            case "referenceHidden": {
              const f = await r.detectOverflow(i, {
                  ...u,
                  elementContext: "reference",
                }),
                h = s0(f, a.reference);
              return {
                data: { referenceHiddenOffsets: h, referenceHidden: a0(h) },
              };
            }
            case "escaped": {
              const f = await r.detectOverflow(i, { ...u, altBoundary: !0 }),
                h = s0(f, a.floating);
              return { data: { escapedOffsets: h, escaped: a0(h) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  ix = new Set(["left", "top"]);
async function hC(e, i) {
  const { placement: a, platform: r, elements: l } = e,
    u = await (r.isRTL == null ? void 0 : r.isRTL(l.floating)),
    f = Yn(a),
    h = Ws(a),
    p = bn(a) === "y",
    m = ix.has(f) ? -1 : 1,
    y = u && p ? -1 : 1,
    g = qn(i, e);
  let {
    mainAxis: x,
    crossAxis: T,
    alignmentAxis: E,
  } = typeof g == "number"
    ? { mainAxis: g, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: g.mainAxis || 0,
        crossAxis: g.crossAxis || 0,
        alignmentAxis: g.alignmentAxis,
      };
  return (
    h && typeof E == "number" && (T = h === "end" ? E * -1 : E),
    p ? { x: T * y, y: x * m } : { x: x * m, y: T * y }
  );
}
const mC = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(i) {
          var a, r;
          const { x: l, y: u, placement: f, middlewareData: h } = i,
            p = await hC(i, e);
          return f === ((a = h.offset) == null ? void 0 : a.placement) &&
            (r = h.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: l + p.x, y: u + p.y, data: { ...p, placement: f } };
        },
      }
    );
  },
  pC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(i) {
          const { x: a, y: r, placement: l, platform: u } = i,
            {
              mainAxis: f = !0,
              crossAxis: h = !1,
              limiter: p = {
                fn: (D) => {
                  let { x: N, y: j } = D;
                  return { x: N, y: j };
                },
              },
              ...m
            } = qn(e, i),
            y = { x: a, y: r },
            g = await u.detectOverflow(i, m),
            x = bn(Yn(l)),
            T = kd(x);
          let E = y[T],
            C = y[x];
          if (f) {
            const D = T === "y" ? "top" : "left",
              N = T === "y" ? "bottom" : "right",
              j = E + g[D],
              V = E - g[N];
            E = If(j, E, V);
          }
          if (h) {
            const D = x === "y" ? "top" : "left",
              N = x === "y" ? "bottom" : "right",
              j = C + g[D],
              V = C - g[N];
            C = If(j, C, V);
          }
          const R = p.fn({ ...i, [T]: E, [x]: C });
          return {
            ...R,
            data: { x: R.x - a, y: R.y - r, enabled: { [T]: f, [x]: h } },
          };
        },
      }
    );
  },
  yC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(i) {
          const { x: a, y: r, placement: l, rects: u, middlewareData: f } = i,
            { offset: h = 0, mainAxis: p = !0, crossAxis: m = !0 } = qn(e, i),
            y = { x: a, y: r },
            g = bn(l),
            x = kd(g);
          let T = y[x],
            E = y[g];
          const C = qn(h, i),
            R =
              typeof C == "number"
                ? { mainAxis: C, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...C };
          if (p) {
            const j = x === "y" ? "height" : "width",
              V = u.reference[x] - u.floating[j] + R.mainAxis,
              U = u.reference[x] + u.reference[j] - R.mainAxis;
            T < V ? (T = V) : T > U && (T = U);
          }
          if (m) {
            var D, N;
            const j = x === "y" ? "width" : "height",
              V = ix.has(Yn(l)),
              U =
                u.reference[g] -
                u.floating[j] +
                ((V && ((D = f.offset) == null ? void 0 : D[g])) || 0) +
                (V ? 0 : R.crossAxis),
              X =
                u.reference[g] +
                u.reference[j] +
                (V ? 0 : ((N = f.offset) == null ? void 0 : N[g]) || 0) -
                (V ? R.crossAxis : 0);
            E < U ? (E = U) : E > X && (E = X);
          }
          return { [x]: T, [g]: E };
        },
      }
    );
  },
  gC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(i) {
          var a, r;
          const { placement: l, rects: u, platform: f, elements: h } = i,
            { apply: p = () => {}, ...m } = qn(e, i),
            y = await f.detectOverflow(i, m),
            g = Yn(l),
            x = Ws(l),
            T = bn(l) === "y",
            { width: E, height: C } = u.floating;
          let R, D;
          g === "top" || g === "bottom"
            ? ((R = g),
              (D =
                x ===
                ((await (f.isRTL == null ? void 0 : f.isRTL(h.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((D = g), (R = x === "end" ? "top" : "bottom"));
          const N = C - y.top - y.bottom,
            j = E - y.left - y.right,
            V = vi(C - y[R], N),
            U = vi(E - y[D], j),
            X = !i.middlewareData.shift;
          let Z = V,
            P = U;
          if (
            ((a = i.middlewareData.shift) != null && a.enabled.x && (P = j),
            (r = i.middlewareData.shift) != null && r.enabled.y && (Z = N),
            X && !x)
          ) {
            const W = ze(y.left, 0),
              $ = ze(y.right, 0),
              st = ze(y.top, 0),
              gt = ze(y.bottom, 0);
            T
              ? (P = E - 2 * (W !== 0 || $ !== 0 ? W + $ : ze(y.left, y.right)))
              : (Z =
                  C -
                  2 * (st !== 0 || gt !== 0 ? st + gt : ze(y.top, y.bottom)));
          }
          await p({ ...i, availableWidth: P, availableHeight: Z });
          const I = await f.getDimensions(h.floating);
          return E !== I.width || C !== I.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Pl() {
  return typeof window < "u";
}
function Is(e) {
  return sx(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ve(e) {
  var i;
  return (
    (e == null || (i = e.ownerDocument) == null ? void 0 : i.defaultView) ||
    window
  );
}
function Tn(e) {
  var i;
  return (i = (sx(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : i.documentElement;
}
function sx(e) {
  return Pl() ? e instanceof Node || e instanceof Ve(e).Node : !1;
}
function rn(e) {
  return Pl() ? e instanceof Element || e instanceof Ve(e).Element : !1;
}
function Gn(e) {
  return Pl() ? e instanceof HTMLElement || e instanceof Ve(e).HTMLElement : !1;
}
function r0(e) {
  return !Pl() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof Ve(e).ShadowRoot;
}
function xr(e) {
  const { overflow: i, overflowX: a, overflowY: r, display: l } = on(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(i + r + a) &&
    l !== "inline" &&
    l !== "contents"
  );
}
function vC(e) {
  return /^(table|td|th)$/.test(Is(e));
}
function Bl(e) {
  try {
    if (e.matches(":popover-open")) return !0;
  } catch {}
  try {
    return e.matches(":modal");
  } catch {
    return !1;
  }
}
const bC = /transform|translate|scale|rotate|perspective|filter/,
  xC = /paint|layout|strict|content/,
  Yi = (e) => !!e && e !== "none";
let vf;
function Ud(e) {
  const i = rn(e) ? on(e) : e;
  return (
    Yi(i.transform) ||
    Yi(i.translate) ||
    Yi(i.scale) ||
    Yi(i.rotate) ||
    Yi(i.perspective) ||
    (!Hd() && (Yi(i.backdropFilter) || Yi(i.filter))) ||
    bC.test(i.willChange || "") ||
    xC.test(i.contain || "")
  );
}
function wC(e) {
  let i = bi(e);
  for (; Gn(i) && !Xs(i);) {
    if (Ud(i)) return i;
    if (Bl(i)) return null;
    i = bi(i);
  }
  return null;
}
function Hd() {
  return (
    vf == null &&
      (vf =
        typeof CSS < "u" &&
        CSS.supports &&
        CSS.supports("-webkit-backdrop-filter", "none")),
    vf
  );
}
function Xs(e) {
  return /^(html|body|#document)$/.test(Is(e));
}
function on(e) {
  return Ve(e).getComputedStyle(e);
}
function Ul(e) {
  return rn(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function bi(e) {
  if (Is(e) === "html") return e;
  const i = e.assignedSlot || e.parentNode || (r0(e) && e.host) || Tn(e);
  return r0(i) ? i.host : i;
}
function ax(e) {
  const i = bi(e);
  return Xs(i)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Gn(i) && xr(i)
      ? i
      : ax(i);
}
function hr(e, i, a) {
  var r;
  (i === void 0 && (i = []), a === void 0 && (a = !0));
  const l = ax(e),
    u = l === ((r = e.ownerDocument) == null ? void 0 : r.body),
    f = Ve(l);
  if (u) {
    const h = Jf(f);
    return i.concat(
      f,
      f.visualViewport || [],
      xr(l) ? l : [],
      h && a ? hr(h) : [],
    );
  } else return i.concat(l, hr(l, [], a));
}
function Jf(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function rx(e) {
  const i = on(e);
  let a = parseFloat(i.width) || 0,
    r = parseFloat(i.height) || 0;
  const l = Gn(e),
    u = l ? e.offsetWidth : a,
    f = l ? e.offsetHeight : r,
    h = yl(a) !== u || yl(r) !== f;
  return (h && ((a = u), (r = f)), { width: a, height: r, $: h });
}
function qd(e) {
  return rn(e) ? e : e.contextElement;
}
function Gs(e) {
  const i = qd(e);
  if (!Gn(i)) return wn(1);
  const a = i.getBoundingClientRect(),
    { width: r, height: l, $: u } = rx(i);
  let f = (u ? yl(a.width) : a.width) / r,
    h = (u ? yl(a.height) : a.height) / l;
  return (
    (!f || !Number.isFinite(f)) && (f = 1),
    (!h || !Number.isFinite(h)) && (h = 1),
    { x: f, y: h }
  );
}
const SC = wn(0);
function ox(e) {
  const i = Ve(e);
  return !Hd() || !i.visualViewport
    ? SC
    : { x: i.visualViewport.offsetLeft, y: i.visualViewport.offsetTop };
}
function TC(e, i, a) {
  return (i === void 0 && (i = !1), !a || (i && a !== Ve(e)) ? !1 : i);
}
function Ii(e, i, a, r) {
  (i === void 0 && (i = !1), a === void 0 && (a = !1));
  const l = e.getBoundingClientRect(),
    u = qd(e);
  let f = wn(1);
  i && (r ? rn(r) && (f = Gs(r)) : (f = Gs(e)));
  const h = TC(u, a, r) ? ox(u) : wn(0);
  let p = (l.left + h.x) / f.x,
    m = (l.top + h.y) / f.y,
    y = l.width / f.x,
    g = l.height / f.y;
  if (u) {
    const x = Ve(u),
      T = r && rn(r) ? Ve(r) : r;
    let E = x,
      C = Jf(E);
    for (; C && r && T !== E;) {
      const R = Gs(C),
        D = C.getBoundingClientRect(),
        N = on(C),
        j = D.left + (C.clientLeft + parseFloat(N.paddingLeft)) * R.x,
        V = D.top + (C.clientTop + parseFloat(N.paddingTop)) * R.y;
      ((p *= R.x),
        (m *= R.y),
        (y *= R.x),
        (g *= R.y),
        (p += j),
        (m += V),
        (E = Ve(C)),
        (C = Jf(E)));
    }
  }
  return vl({ width: y, height: g, x: p, y: m });
}
function Hl(e, i) {
  const a = Ul(e).scrollLeft;
  return i ? i.left + a : Ii(Tn(e)).left + a;
}
function lx(e, i) {
  const a = e.getBoundingClientRect(),
    r = a.left + i.scrollLeft - Hl(e, a),
    l = a.top + i.scrollTop;
  return { x: r, y: l };
}
function EC(e) {
  let { elements: i, rect: a, offsetParent: r, strategy: l } = e;
  const u = l === "fixed",
    f = Tn(r),
    h = i ? Bl(i.floating) : !1;
  if (r === f || (h && u)) return a;
  let p = { scrollLeft: 0, scrollTop: 0 },
    m = wn(1);
  const y = wn(0),
    g = Gn(r);
  if ((g || (!g && !u)) && ((Is(r) !== "body" || xr(f)) && (p = Ul(r)), g)) {
    const T = Ii(r);
    ((m = Gs(r)), (y.x = T.x + r.clientLeft), (y.y = T.y + r.clientTop));
  }
  const x = f && !g && !u ? lx(f, p) : wn(0);
  return {
    width: a.width * m.x,
    height: a.height * m.y,
    x: a.x * m.x - p.scrollLeft * m.x + y.x + x.x,
    y: a.y * m.y - p.scrollTop * m.y + y.y + x.y,
  };
}
function AC(e) {
  return Array.from(e.getClientRects());
}
function CC(e) {
  const i = Tn(e),
    a = Ul(e),
    r = e.ownerDocument.body,
    l = ze(i.scrollWidth, i.clientWidth, r.scrollWidth, r.clientWidth),
    u = ze(i.scrollHeight, i.clientHeight, r.scrollHeight, r.clientHeight);
  let f = -a.scrollLeft + Hl(e);
  const h = -a.scrollTop;
  return (
    on(r).direction === "rtl" && (f += ze(i.clientWidth, r.clientWidth) - l),
    { width: l, height: u, x: f, y: h }
  );
}
const o0 = 25;
function RC(e, i) {
  const a = Ve(e),
    r = Tn(e),
    l = a.visualViewport;
  let u = r.clientWidth,
    f = r.clientHeight,
    h = 0,
    p = 0;
  if (l) {
    ((u = l.width), (f = l.height));
    const y = Hd();
    (!y || (y && i === "fixed")) && ((h = l.offsetLeft), (p = l.offsetTop));
  }
  const m = Hl(r);
  if (m <= 0) {
    const y = r.ownerDocument,
      g = y.body,
      x = getComputedStyle(g),
      T =
        (y.compatMode === "CSS1Compat" &&
          parseFloat(x.marginLeft) + parseFloat(x.marginRight)) ||
        0,
      E = Math.abs(r.clientWidth - g.clientWidth - T);
    E <= o0 && (u -= E);
  } else m <= o0 && (u += m);
  return { width: u, height: f, x: h, y: p };
}
function MC(e, i) {
  const a = Ii(e, !0, i === "fixed"),
    r = a.top + e.clientTop,
    l = a.left + e.clientLeft,
    u = Gn(e) ? Gs(e) : wn(1),
    f = e.clientWidth * u.x,
    h = e.clientHeight * u.y,
    p = l * u.x,
    m = r * u.y;
  return { width: f, height: h, x: p, y: m };
}
function l0(e, i, a) {
  let r;
  if (i === "viewport") r = RC(e, a);
  else if (i === "document") r = CC(Tn(e));
  else if (rn(i)) r = MC(i, a);
  else {
    const l = ox(e);
    r = { x: i.x - l.x, y: i.y - l.y, width: i.width, height: i.height };
  }
  return vl(r);
}
function cx(e, i) {
  const a = bi(e);
  return a === i || !rn(a) || Xs(a)
    ? !1
    : on(a).position === "fixed" || cx(a, i);
}
function OC(e, i) {
  const a = i.get(e);
  if (a) return a;
  let r = hr(e, [], !1).filter((h) => rn(h) && Is(h) !== "body"),
    l = null;
  const u = on(e).position === "fixed";
  let f = u ? bi(e) : e;
  for (; rn(f) && !Xs(f);) {
    const h = on(f),
      p = Ud(f);
    (!p && h.position === "fixed" && (l = null),
      (
        u
          ? !p && !l
          : (!p &&
              h.position === "static" &&
              !!l &&
              (l.position === "absolute" || l.position === "fixed")) ||
            (xr(f) && !p && cx(e, f))
      )
        ? (r = r.filter((y) => y !== f))
        : (l = h),
      (f = bi(f)));
  }
  return (i.set(e, r), r);
}
function DC(e) {
  let { element: i, boundary: a, rootBoundary: r, strategy: l } = e;
  const f = [
      ...(a === "clippingAncestors"
        ? Bl(i)
          ? []
          : OC(i, this._c)
        : [].concat(a)),
      r,
    ],
    h = l0(i, f[0], l);
  let p = h.top,
    m = h.right,
    y = h.bottom,
    g = h.left;
  for (let x = 1; x < f.length; x++) {
    const T = l0(i, f[x], l);
    ((p = ze(T.top, p)),
      (m = vi(T.right, m)),
      (y = vi(T.bottom, y)),
      (g = ze(T.left, g)));
  }
  return { width: m - g, height: y - p, x: g, y: p };
}
function NC(e) {
  const { width: i, height: a } = rx(e);
  return { width: i, height: a };
}
function jC(e, i, a) {
  const r = Gn(i),
    l = Tn(i),
    u = a === "fixed",
    f = Ii(e, !0, u, i);
  let h = { scrollLeft: 0, scrollTop: 0 };
  const p = wn(0);
  function m() {
    p.x = Hl(l);
  }
  if (r || (!r && !u))
    if (((Is(i) !== "body" || xr(l)) && (h = Ul(i)), r)) {
      const T = Ii(i, !0, u, i);
      ((p.x = T.x + i.clientLeft), (p.y = T.y + i.clientTop));
    } else l && m();
  u && !r && l && m();
  const y = l && !r && !u ? lx(l, h) : wn(0),
    g = f.left + h.scrollLeft - p.x - y.x,
    x = f.top + h.scrollTop - p.y - y.y;
  return { x: g, y: x, width: f.width, height: f.height };
}
function bf(e) {
  return on(e).position === "static";
}
function c0(e, i) {
  if (!Gn(e) || on(e).position === "fixed") return null;
  if (i) return i(e);
  let a = e.offsetParent;
  return (Tn(e) === a && (a = a.ownerDocument.body), a);
}
function ux(e, i) {
  const a = Ve(e);
  if (Bl(e)) return a;
  if (!Gn(e)) {
    let l = bi(e);
    for (; l && !Xs(l);) {
      if (rn(l) && !bf(l)) return l;
      l = bi(l);
    }
    return a;
  }
  let r = c0(e, i);
  for (; r && vC(r) && bf(r);) r = c0(r, i);
  return r && Xs(r) && bf(r) && !Ud(r) ? a : r || wC(e) || a;
}
const _C = async function (e) {
  const i = this.getOffsetParent || ux,
    a = this.getDimensions,
    r = await a(e.floating);
  return {
    reference: jC(e.reference, await i(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function zC(e) {
  return on(e).direction === "rtl";
}
const VC = {
  convertOffsetParentRelativeRectToViewportRelativeRect: EC,
  getDocumentElement: Tn,
  getClippingRect: DC,
  getOffsetParent: ux,
  getElementRects: _C,
  getClientRects: AC,
  getDimensions: NC,
  getScale: Gs,
  isElement: rn,
  isRTL: zC,
};
function fx(e, i) {
  return (
    e.x === i.x && e.y === i.y && e.width === i.width && e.height === i.height
  );
}
function LC(e, i) {
  let a = null,
    r;
  const l = Tn(e);
  function u() {
    var h;
    (clearTimeout(r), (h = a) == null || h.disconnect(), (a = null));
  }
  function f(h, p) {
    (h === void 0 && (h = !1), p === void 0 && (p = 1), u());
    const m = e.getBoundingClientRect(),
      { left: y, top: g, width: x, height: T } = m;
    if ((h || i(), !x || !T)) return;
    const E = Zo(g),
      C = Zo(l.clientWidth - (y + x)),
      R = Zo(l.clientHeight - (g + T)),
      D = Zo(y),
      j = {
        rootMargin: -E + "px " + -C + "px " + -R + "px " + -D + "px",
        threshold: ze(0, vi(1, p)) || 1,
      };
    let V = !0;
    function U(X) {
      const Z = X[0].intersectionRatio;
      if (Z !== p) {
        if (!V) return f();
        Z
          ? f(!1, Z)
          : (r = setTimeout(() => {
              f(!1, 1e-7);
            }, 1e3));
      }
      (Z === 1 && !fx(m, e.getBoundingClientRect()) && f(), (V = !1));
    }
    try {
      a = new IntersectionObserver(U, { ...j, root: l.ownerDocument });
    } catch {
      a = new IntersectionObserver(U, j);
    }
    a.observe(e);
  }
  return (f(!0), u);
}
function kC(e, i, a, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: l = !0,
      ancestorResize: u = !0,
      elementResize: f = typeof ResizeObserver == "function",
      layoutShift: h = typeof IntersectionObserver == "function",
      animationFrame: p = !1,
    } = r,
    m = qd(e),
    y = l || u ? [...(m ? hr(m) : []), ...(i ? hr(i) : [])] : [];
  y.forEach((D) => {
    (l && D.addEventListener("scroll", a, { passive: !0 }),
      u && D.addEventListener("resize", a));
  });
  const g = m && h ? LC(m, a) : null;
  let x = -1,
    T = null;
  f &&
    ((T = new ResizeObserver((D) => {
      let [N] = D;
      (N &&
        N.target === m &&
        T &&
        i &&
        (T.unobserve(i),
        cancelAnimationFrame(x),
        (x = requestAnimationFrame(() => {
          var j;
          (j = T) == null || j.observe(i);
        }))),
        a());
    })),
    m && !p && T.observe(m),
    i && T.observe(i));
  let E,
    C = p ? Ii(e) : null;
  p && R();
  function R() {
    const D = Ii(e);
    (C && !fx(C, D) && a(), (C = D), (E = requestAnimationFrame(R)));
  }
  return (
    a(),
    () => {
      var D;
      (y.forEach((N) => {
        (l && N.removeEventListener("scroll", a),
          u && N.removeEventListener("resize", a));
      }),
        g?.(),
        (D = T) == null || D.disconnect(),
        (T = null),
        p && cancelAnimationFrame(E));
    }
  );
}
const PC = mC,
  BC = pC,
  UC = fC,
  HC = gC,
  qC = dC,
  u0 = uC,
  YC = yC,
  GC = (e, i, a) => {
    const r = new Map(),
      l = { platform: VC, ...a },
      u = { ...l.platform, _c: r };
    return cC(e, i, { ...l, platform: u });
  };
var XC = typeof document < "u",
  FC = function () {},
  al = XC ? S.useLayoutEffect : FC;
function bl(e, i) {
  if (e === i) return !0;
  if (typeof e != typeof i) return !1;
  if (typeof e == "function" && e.toString() === i.toString()) return !0;
  let a, r, l;
  if (e && i && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((a = e.length), a !== i.length)) return !1;
      for (r = a; r-- !== 0;) if (!bl(e[r], i[r])) return !1;
      return !0;
    }
    if (((l = Object.keys(e)), (a = l.length), a !== Object.keys(i).length))
      return !1;
    for (r = a; r-- !== 0;) if (!{}.hasOwnProperty.call(i, l[r])) return !1;
    for (r = a; r-- !== 0;) {
      const u = l[r];
      if (!(u === "_owner" && e.$$typeof) && !bl(e[u], i[u])) return !1;
    }
    return !0;
  }
  return e !== e && i !== i;
}
function dx(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function f0(e, i) {
  const a = dx(e);
  return Math.round(i * a) / a;
}
function xf(e) {
  const i = S.useRef(e);
  return (
    al(() => {
      i.current = e;
    }),
    i
  );
}
function KC(e) {
  e === void 0 && (e = {});
  const {
      placement: i = "bottom",
      strategy: a = "absolute",
      middleware: r = [],
      platform: l,
      elements: { reference: u, floating: f } = {},
      transform: h = !0,
      whileElementsMounted: p,
      open: m,
    } = e,
    [y, g] = S.useState({
      x: 0,
      y: 0,
      strategy: a,
      placement: i,
      middlewareData: {},
      isPositioned: !1,
    }),
    [x, T] = S.useState(r);
  bl(x, r) || T(r);
  const [E, C] = S.useState(null),
    [R, D] = S.useState(null),
    N = S.useCallback((F) => {
      F !== X.current && ((X.current = F), C(F));
    }, []),
    j = S.useCallback((F) => {
      F !== Z.current && ((Z.current = F), D(F));
    }, []),
    V = u || E,
    U = f || R,
    X = S.useRef(null),
    Z = S.useRef(null),
    P = S.useRef(y),
    I = p != null,
    W = xf(p),
    $ = xf(l),
    st = xf(m),
    gt = S.useCallback(() => {
      if (!X.current || !Z.current) return;
      const F = { placement: i, strategy: a, middleware: x };
      ($.current && (F.platform = $.current),
        GC(X.current, Z.current, F).then((nt) => {
          const A = { ...nt, isPositioned: st.current !== !1 };
          tt.current &&
            !bl(P.current, A) &&
            ((P.current = A),
            _l.flushSync(() => {
              g(A);
            }));
        }));
    }, [x, i, a, $, st]);
  al(() => {
    m === !1 &&
      P.current.isPositioned &&
      ((P.current.isPositioned = !1), g((F) => ({ ...F, isPositioned: !1 })));
  }, [m]);
  const tt = S.useRef(!1);
  (al(
    () => (
      (tt.current = !0),
      () => {
        tt.current = !1;
      }
    ),
    [],
  ),
    al(() => {
      if ((V && (X.current = V), U && (Z.current = U), V && U)) {
        if (W.current) return W.current(V, U, gt);
        gt();
      }
    }, [V, U, gt, W, I]));
  const ut = S.useMemo(
      () => ({ reference: X, floating: Z, setReference: N, setFloating: j }),
      [N, j],
    ),
    z = S.useMemo(() => ({ reference: V, floating: U }), [V, U]),
    Q = S.useMemo(() => {
      const F = { position: a, left: 0, top: 0 };
      if (!z.floating) return F;
      const nt = f0(z.floating, y.x),
        A = f0(z.floating, y.y);
      return h
        ? {
            ...F,
            transform: "translate(" + nt + "px, " + A + "px)",
            ...(dx(z.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: a, left: nt, top: A };
    }, [a, h, z.floating, y.x, y.y]);
  return S.useMemo(
    () => ({ ...y, update: gt, refs: ut, elements: z, floatingStyles: Q }),
    [y, gt, ut, z, Q],
  );
}
const QC = (e) => {
    function i(a) {
      return {}.hasOwnProperty.call(a, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(a) {
        const { element: r, padding: l } = typeof e == "function" ? e(a) : e;
        return r && i(r)
          ? r.current != null
            ? u0({ element: r.current, padding: l }).fn(a)
            : {}
          : r
            ? u0({ element: r, padding: l }).fn(a)
            : {};
      },
    };
  },
  ZC = (e, i) => {
    const a = PC(e);
    return { name: a.name, fn: a.fn, options: [e, i] };
  },
  WC = (e, i) => {
    const a = BC(e);
    return { name: a.name, fn: a.fn, options: [e, i] };
  },
  IC = (e, i) => ({ fn: YC(e).fn, options: [e, i] }),
  $C = (e, i) => {
    const a = UC(e);
    return { name: a.name, fn: a.fn, options: [e, i] };
  },
  JC = (e, i) => {
    const a = HC(e);
    return { name: a.name, fn: a.fn, options: [e, i] };
  },
  tR = (e, i) => {
    const a = qC(e);
    return { name: a.name, fn: a.fn, options: [e, i] };
  },
  eR = (e, i) => {
    const a = QC(e);
    return { name: a.name, fn: a.fn, options: [e, i] };
  };
var nR = "Arrow",
  hx = S.forwardRef((e, i) => {
    const { children: a, width: r = 10, height: l = 5, ...u } = e;
    return b.jsx(Te.svg, {
      ...u,
      ref: i,
      width: r,
      height: l,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? a : b.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
hx.displayName = nR;
var iR = hx;
function sR(e) {
  const [i, a] = S.useState(void 0);
  return (
    xn(() => {
      if (e) {
        a({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((l) => {
          if (!Array.isArray(l) || !l.length) return;
          const u = l[0];
          let f, h;
          if ("borderBoxSize" in u) {
            const p = u.borderBoxSize,
              m = Array.isArray(p) ? p[0] : p;
            ((f = m.inlineSize), (h = m.blockSize));
          } else ((f = e.offsetWidth), (h = e.offsetHeight));
          a({ width: f, height: h });
        });
        return (r.observe(e, { box: "border-box" }), () => r.unobserve(e));
      } else a(void 0);
    }, [e]),
    i
  );
}
var mx = "Popper",
  [px, yx] = zl(mx),
  [s3, gx] = px(mx),
  vx = "PopperAnchor",
  bx = S.forwardRef((e, i) => {
    const { __scopePopper: a, virtualRef: r, ...l } = e,
      u = gx(vx, a),
      f = S.useRef(null),
      h = u.onAnchorChange,
      p = S.useCallback(
        (E) => {
          ((f.current = E), E && h(E));
        },
        [h],
      ),
      m = an(i, p),
      y = S.useRef(null);
    S.useEffect(() => {
      if (!r) return;
      const E = y.current;
      ((y.current = r.current), E !== y.current && h(y.current));
    });
    const g = u.placementState && Gd(u.placementState),
      x = g?.[0],
      T = g?.[1];
    return r
      ? null
      : b.jsx(Te.div, {
          "data-radix-popper-side": x,
          "data-radix-popper-align": T,
          ...l,
          ref: m,
        });
  });
bx.displayName = vx;
var Yd = "PopperContent",
  [aR, rR] = px(Yd),
  xx = S.forwardRef((e, i) => {
    const {
        __scopePopper: a,
        side: r = "bottom",
        sideOffset: l = 0,
        align: u = "center",
        alignOffset: f = 0,
        arrowPadding: h = 0,
        avoidCollisions: p = !0,
        collisionBoundary: m = [],
        collisionPadding: y = 0,
        sticky: g = "partial",
        hideWhenDetached: x = !1,
        updatePositionStrategy: T = "optimized",
        onPlaced: E,
        ...C
      } = e,
      R = gx(Yd, a),
      [D, N] = S.useState(null),
      j = an(i, N),
      [V, U] = S.useState(null),
      X = sR(V),
      Z = X?.width ?? 0,
      P = X?.height ?? 0,
      I = r + (u !== "center" ? "-" + u : ""),
      W =
        typeof y == "number"
          ? y
          : { top: 0, right: 0, bottom: 0, left: 0, ...y },
      $ = Array.isArray(m) ? m : [m],
      st = $.length > 0,
      gt = { padding: W, boundary: $.filter(lR), altBoundary: st },
      {
        refs: tt,
        floatingStyles: ut,
        placement: z,
        isPositioned: Q,
        middlewareData: F,
      } = KC({
        strategy: "fixed",
        placement: I,
        whileElementsMounted: (...Rt) =>
          kC(...Rt, { animationFrame: T === "always" }),
        elements: { reference: R.anchor },
        middleware: [
          ZC({ mainAxis: l + P, alignmentAxis: f }),
          p &&
            WC({
              mainAxis: !0,
              crossAxis: !1,
              limiter: g === "partial" ? IC() : void 0,
              ...gt,
            }),
          p && $C({ ...gt }),
          JC({
            ...gt,
            apply: ({
              elements: Rt,
              rects: Ot,
              availableWidth: Xn,
              availableHeight: Ze,
            }) => {
              const { width: cn, height: En } = Ot.reference,
                Ee = Rt.floating.style;
              (Ee.setProperty("--radix-popper-available-width", `${Xn}px`),
                Ee.setProperty("--radix-popper-available-height", `${Ze}px`),
                Ee.setProperty("--radix-popper-anchor-width", `${cn}px`),
                Ee.setProperty("--radix-popper-anchor-height", `${En}px`));
            },
          }),
          V && eR({ element: V, padding: h }),
          cR({ arrowWidth: Z, arrowHeight: P }),
          x &&
            tR({
              strategy: "referenceHidden",
              ...gt,
              boundary: st ? gt.boundary : void 0,
            }),
        ],
      }),
      nt = R.setPlacementState;
    xn(
      () => (
        nt(z),
        () => {
          nt(void 0);
        }
      ),
      [z, nt],
    );
    const [A, Y] = Gd(z),
      et = Wi(E);
    xn(() => {
      Q && et?.();
    }, [Q, et]);
    const J = F.arrow?.x,
      ct = F.arrow?.y,
      mt = F.arrow?.centerOffset !== 0,
      [lt, Ft] = S.useState();
    return (
      xn(() => {
        D && Ft(window.getComputedStyle(D).zIndex);
      }, [D]),
      b.jsx("div", {
        ref: tt.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...ut,
          transform: Q ? ut.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: lt,
          "--radix-popper-transform-origin": [
            F.transformOrigin?.x,
            F.transformOrigin?.y,
          ].join(" "),
          ...(F.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: b.jsx(aR, {
          scope: a,
          placedSide: A,
          placedAlign: Y,
          onArrowChange: U,
          arrowX: J,
          arrowY: ct,
          shouldHideArrow: mt,
          children: b.jsx(Te.div, {
            "data-side": A,
            "data-align": Y,
            ...C,
            ref: j,
            style: { ...C.style, animation: Q ? void 0 : "none" },
          }),
        }),
      })
    );
  });
xx.displayName = Yd;
var wx = "PopperArrow",
  oR = { top: "bottom", right: "left", bottom: "top", left: "right" },
  Sx = S.forwardRef(function (i, a) {
    const { __scopePopper: r, ...l } = i,
      u = rR(wx, r),
      f = oR[u.placedSide];
    return b.jsx("span", {
      ref: u.onArrowChange,
      style: {
        position: "absolute",
        left: u.arrowX,
        top: u.arrowY,
        [f]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[u.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[u.placedSide],
        visibility: u.shouldHideArrow ? "hidden" : void 0,
      },
      children: b.jsx(iR, {
        ...l,
        ref: a,
        style: { ...l.style, display: "block" },
      }),
    });
  });
Sx.displayName = wx;
function lR(e) {
  return e !== null;
}
var cR = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(i) {
    const { placement: a, rects: r, middlewareData: l } = i,
      f = l.arrow?.centerOffset !== 0,
      h = f ? 0 : e.arrowWidth,
      p = f ? 0 : e.arrowHeight,
      [m, y] = Gd(a),
      g = { start: "0%", center: "50%", end: "100%" }[y],
      x = (l.arrow?.x ?? 0) + h / 2,
      T = (l.arrow?.y ?? 0) + p / 2;
    let E = "",
      C = "";
    return (
      m === "bottom"
        ? ((E = f ? g : `${x}px`), (C = `${-p}px`))
        : m === "top"
          ? ((E = f ? g : `${x}px`), (C = `${r.floating.height + p}px`))
          : m === "right"
            ? ((E = `${-p}px`), (C = f ? g : `${T}px`))
            : m === "left" &&
              ((E = `${r.floating.width + p}px`), (C = f ? g : `${T}px`)),
      { data: { x: E, y: C } }
    );
  },
});
function Gd(e) {
  const [i, a = "center"] = e.split("-");
  return [i, a];
}
var uR = bx,
  fR = xx,
  dR = Sx,
  [ql] = zl("Tooltip", [yx]),
  Xd = yx(),
  Tx = "TooltipProvider",
  hR = 700,
  d0 = "tooltip.open",
  [mR, Ex] = ql(Tx),
  Ax = (e) => {
    const {
        __scopeTooltip: i,
        delayDuration: a = hR,
        skipDelayDuration: r = 300,
        disableHoverableContent: l = !1,
        children: u,
      } = e,
      f = S.useRef(!0),
      h = S.useRef(!1),
      p = S.useRef(0);
    return (
      S.useEffect(() => {
        const m = p.current;
        return () => window.clearTimeout(m);
      }, []),
      b.jsx(mR, {
        scope: i,
        isOpenDelayedRef: f,
        delayDuration: a,
        onOpen: S.useCallback(() => {
          r <= 0 || (window.clearTimeout(p.current), (f.current = !1));
        }, [r]),
        onClose: S.useCallback(() => {
          r <= 0 ||
            (window.clearTimeout(p.current),
            (p.current = window.setTimeout(() => (f.current = !0), r)));
        }, [r]),
        isPointerInTransitRef: h,
        onPointerInTransitChange: S.useCallback((m) => {
          h.current = m;
        }, []),
        disableHoverableContent: l,
        children: u,
      })
    );
  };
Ax.displayName = Tx;
var Cx = "Tooltip",
  [a3, wr] = ql(Cx),
  td = "TooltipTrigger",
  pR = S.forwardRef((e, i) => {
    const { __scopeTooltip: a, ...r } = e,
      l = wr(td, a),
      u = Ex(td, a),
      f = Xd(a),
      h = S.useRef(null),
      p = an(i, h, l.onTriggerChange),
      m = S.useRef(!1),
      y = S.useRef(!1),
      g = S.useCallback(() => (m.current = !1), []);
    return (
      S.useEffect(
        () => () => document.removeEventListener("pointerup", g),
        [g],
      ),
      b.jsx(uR, {
        asChild: !0,
        ...f,
        children: b.jsx(Te.button, {
          "aria-describedby": l.open ? l.contentId : void 0,
          "data-state": l.stateAttribute,
          ...r,
          ref: p,
          onPointerMove: te(e.onPointerMove, (x) => {
            x.pointerType !== "touch" &&
              !y.current &&
              !u.isPointerInTransitRef.current &&
              (l.onTriggerEnter(), (y.current = !0));
          }),
          onPointerLeave: te(e.onPointerLeave, () => {
            (l.onTriggerLeave(), (y.current = !1));
          }),
          onPointerDown: te(e.onPointerDown, () => {
            (l.open && l.onClose(),
              (m.current = !0),
              document.addEventListener("pointerup", g, { once: !0 }));
          }),
          onFocus: te(e.onFocus, () => {
            m.current || l.onOpen();
          }),
          onBlur: te(e.onBlur, l.onClose),
          onClick: te(e.onClick, l.onClose),
        }),
      })
    );
  });
pR.displayName = td;
var Fd = "TooltipPortal",
  [yR, gR] = ql(Fd, { forceMount: void 0 }),
  Rx = (e) => {
    const { __scopeTooltip: i, forceMount: a, children: r, container: l } = e,
      u = wr(Fd, i);
    return b.jsx(yR, {
      scope: i,
      forceMount: a,
      children: b.jsx(Vl, {
        present: a || u.open,
        children: b.jsx(Nd, { asChild: !0, container: l, children: r }),
      }),
    });
  };
Rx.displayName = Fd;
var Fs = "TooltipContent",
  Mx = S.forwardRef((e, i) => {
    const a = gR(Fs, e.__scopeTooltip),
      { forceMount: r = a.forceMount, side: l = "top", ...u } = e,
      f = wr(Fs, e.__scopeTooltip);
    return b.jsx(Vl, {
      present: r || f.open,
      children: f.disableHoverableContent
        ? b.jsx(Ox, { side: l, ...u, ref: i })
        : b.jsx(vR, { side: l, ...u, ref: i }),
    });
  }),
  vR = S.forwardRef((e, i) => {
    const a = wr(Fs, e.__scopeTooltip),
      r = Ex(Fs, e.__scopeTooltip),
      l = S.useRef(null),
      u = an(i, l),
      [f, h] = S.useState(null),
      { trigger: p, onClose: m } = a,
      y = l.current,
      { onPointerInTransitChange: g } = r,
      x = S.useCallback(() => {
        (h(null), g(!1));
      }, [g]),
      T = S.useCallback(
        (E, C) => {
          const R = E.currentTarget,
            D = { x: E.clientX, y: E.clientY },
            N = TR(D, R.getBoundingClientRect()),
            j = ER(D, N),
            V = AR(C.getBoundingClientRect()),
            U = RR([...j, ...V]);
          (h(U), g(!0));
        },
        [g],
      );
    return (
      S.useEffect(() => () => x(), [x]),
      S.useEffect(() => {
        if (p && y) {
          const E = (R) => T(R, y),
            C = (R) => T(R, p);
          return (
            p.addEventListener("pointerleave", E),
            y.addEventListener("pointerleave", C),
            () => {
              (p.removeEventListener("pointerleave", E),
                y.removeEventListener("pointerleave", C));
            }
          );
        }
      }, [p, y, T, x]),
      S.useEffect(() => {
        if (f) {
          const E = (C) => {
            const R = C.target,
              D = { x: C.clientX, y: C.clientY },
              N = p?.contains(R) || y?.contains(R),
              j = !CR(D, f);
            N ? x() : j && (x(), m());
          };
          return (
            document.addEventListener("pointermove", E),
            () => document.removeEventListener("pointermove", E)
          );
        }
      }, [p, y, f, m, x]),
      b.jsx(Ox, { ...e, ref: u })
    );
  }),
  [bR, xR] = ql(Cx, { isInside: !1 }),
  wR = XE("TooltipContent"),
  Ox = S.forwardRef((e, i) => {
    const {
        __scopeTooltip: a,
        children: r,
        "aria-label": l,
        onEscapeKeyDown: u,
        onPointerDownOutside: f,
        ...h
      } = e,
      p = wr(Fs, a),
      m = Xd(a),
      { onClose: y } = p;
    return (
      S.useEffect(
        () => (
          document.addEventListener(d0, y),
          () => document.removeEventListener(d0, y)
        ),
        [y],
      ),
      S.useEffect(() => {
        if (p.trigger) {
          const g = (x) => {
            x.target instanceof Node && x.target.contains(p.trigger) && y();
          };
          return (
            window.addEventListener("scroll", g, { capture: !0 }),
            () => window.removeEventListener("scroll", g, { capture: !0 })
          );
        }
      }, [p.trigger, y]),
      b.jsx(Dd, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: u,
        onPointerDownOutside: f,
        onFocusOutside: (g) => g.preventDefault(),
        onDismiss: y,
        children: b.jsxs(fR, {
          "data-state": p.stateAttribute,
          ...m,
          ...h,
          ref: i,
          style: {
            ...h.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            b.jsx(wR, { children: r }),
            b.jsx(bR, {
              scope: a,
              isInside: !0,
              children: b.jsx(SA, {
                id: p.contentId,
                role: "tooltip",
                children: l || r,
              }),
            }),
          ],
        }),
      })
    );
  });
Mx.displayName = Fs;
var Dx = "TooltipArrow",
  SR = S.forwardRef((e, i) => {
    const { __scopeTooltip: a, ...r } = e,
      l = Xd(a);
    return xR(Dx, a).isInside ? null : b.jsx(dR, { ...l, ...r, ref: i });
  });
SR.displayName = Dx;
function TR(e, i) {
  const a = Math.abs(i.top - e.y),
    r = Math.abs(i.bottom - e.y),
    l = Math.abs(i.right - e.x),
    u = Math.abs(i.left - e.x);
  switch (Math.min(a, r, l, u)) {
    case u:
      return "left";
    case l:
      return "right";
    case a:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function ER(e, i, a = 5) {
  const r = [];
  switch (i) {
    case "top":
      r.push({ x: e.x - a, y: e.y + a }, { x: e.x + a, y: e.y + a });
      break;
    case "bottom":
      r.push({ x: e.x - a, y: e.y - a }, { x: e.x + a, y: e.y - a });
      break;
    case "left":
      r.push({ x: e.x + a, y: e.y - a }, { x: e.x + a, y: e.y + a });
      break;
    case "right":
      r.push({ x: e.x - a, y: e.y - a }, { x: e.x - a, y: e.y + a });
      break;
  }
  return r;
}
function AR(e) {
  const { top: i, right: a, bottom: r, left: l } = e;
  return [
    { x: l, y: i },
    { x: a, y: i },
    { x: a, y: r },
    { x: l, y: r },
  ];
}
function CR(e, i) {
  const { x: a, y: r } = e;
  let l = !1;
  for (let u = 0, f = i.length - 1; u < i.length; f = u++) {
    const h = i[u],
      p = i[f],
      m = h.x,
      y = h.y,
      g = p.x,
      x = p.y;
    y > r != x > r && a < ((g - m) * (r - y)) / (x - y) + m && (l = !l);
  }
  return l;
}
function RR(e) {
  const i = e.slice();
  return (
    i.sort((a, r) =>
      a.x < r.x ? -1 : a.x > r.x ? 1 : a.y < r.y ? -1 : a.y > r.y ? 1 : 0,
    ),
    MR(i)
  );
}
function MR(e) {
  if (e.length <= 1) return e.slice();
  const i = [];
  for (let r = 0; r < e.length; r++) {
    const l = e[r];
    for (; i.length >= 2;) {
      const u = i[i.length - 1],
        f = i[i.length - 2];
      if ((u.x - f.x) * (l.y - f.y) >= (u.y - f.y) * (l.x - f.x)) i.pop();
      else break;
    }
    i.push(l);
  }
  i.pop();
  const a = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const l = e[r];
    for (; a.length >= 2;) {
      const u = a[a.length - 1],
        f = a[a.length - 2];
      if ((u.x - f.x) * (l.y - f.y) >= (u.y - f.y) * (l.x - f.x)) a.pop();
      else break;
    }
    a.push(l);
  }
  return (
    a.pop(),
    i.length === 1 && a.length === 1 && i[0].x === a[0].x && i[0].y === a[0].y
      ? i
      : i.concat(a)
  );
}
var OR = Ax,
  DR = Rx,
  Nx = Mx;
const NR = OR,
  jR = S.forwardRef(({ className: e, sideOffset: i = 4, ...a }, r) =>
    b.jsx(DR, {
      children: b.jsx(Nx, {
        ref: r,
        sideOffset: i,
        className: ke(
          "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",
          e,
        ),
        ...a,
      }),
    }),
  );
jR.displayName = Nx.displayName;
const jx = S.forwardRef(({ className: e, ...i }, a) =>
  b.jsx("div", {
    ref: a,
    className: ke("rounded-xl border bg-card text-card-foreground shadow", e),
    ...i,
  }),
);
jx.displayName = "Card";
const _R = S.forwardRef(({ className: e, ...i }, a) =>
  b.jsx("div", {
    ref: a,
    className: ke("flex flex-col space-y-1.5 p-6", e),
    ...i,
  }),
);
_R.displayName = "CardHeader";
const zR = S.forwardRef(({ className: e, ...i }, a) =>
  b.jsx("div", {
    ref: a,
    className: ke("font-semibold leading-none tracking-tight", e),
    ...i,
  }),
);
zR.displayName = "CardTitle";
const VR = S.forwardRef(({ className: e, ...i }, a) =>
  b.jsx("div", {
    ref: a,
    className: ke("text-sm text-muted-foreground", e),
    ...i,
  }),
);
VR.displayName = "CardDescription";
const _x = S.forwardRef(({ className: e, ...i }, a) =>
  b.jsx("div", { ref: a, className: ke("p-6 pt-0", e), ...i }),
);
_x.displayName = "CardContent";
const LR = S.forwardRef(({ className: e, ...i }, a) =>
  b.jsx("div", {
    ref: a,
    className: ke("flex items-center p-6 pt-0", e),
    ...i,
  }),
);
LR.displayName = "CardFooter";
function kR() {
  return b.jsx("div", {
    className:
      "min-h-screen w-full flex items-center justify-center bg-gray-50",
    children: b.jsx(jx, {
      className: "w-full max-w-md mx-4",
      children: b.jsxs(_x, {
        className: "pt-6",
        children: [
          b.jsxs("div", {
            className: "flex mb-4 gap-2",
            children: [
              b.jsx(B2, { className: "h-8 w-8 text-red-500" }),
              b.jsx("h1", {
                className: "text-2xl font-bold text-gray-900",
                children: "404 Page Not Found",
              }),
            ],
          }),
          b.jsx("p", {
            className: "mt-4 text-sm text-gray-600",
            children: "Did you forget to add the page to the router?",
          }),
        ],
      }),
    }),
  });
}
const Kd = S.createContext({});
function xi(e) {
  const i = S.useRef(null);
  return (i.current === null && (i.current = e()), i.current);
}
const PR = typeof window < "u",
  Sr = PR ? S.useLayoutEffect : S.useEffect,
  Yl = S.createContext(null);
function Qd(e, i) {
  e.indexOf(i) === -1 && e.push(i);
}
function xl(e, i) {
  const a = e.indexOf(i);
  a > -1 && e.splice(a, 1);
}
const ln = (e, i, a) => (a > i ? i : a < e ? e : a);
let Zd = () => {};
const wi = {},
  zx = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  Vx = (e) => typeof e == "object" && e !== null,
  Lx = (e) => /^0[^.\s]+$/u.test(e);
function kx(e) {
  let i;
  return () => (i === void 0 && (i = e()), i);
}
const Se = (e) => e,
  Tr = (...e) => e.reduce((i, a) => (r) => a(i(r))),
  Ks = (e, i, a) => {
    const r = i - e;
    return r ? (a - e) / r : 1;
  };
class Wd {
  constructor() {
    this.subscriptions = [];
  }
  add(i) {
    return (Qd(this.subscriptions, i), () => xl(this.subscriptions, i));
  }
  notify(i, a, r) {
    const l = this.subscriptions.length;
    if (l)
      if (l === 1) this.subscriptions[0](i, a, r);
      else
        for (let u = 0; u < l; u++) {
          const f = this.subscriptions[u];
          f && f(i, a, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Le = (e) => e * 1e3,
  Ke = (e) => e / 1e3,
  Id = (e, i) => (i ? e * (1e3 / i) : 0),
  Px = (e, i, a) =>
    (((1 - 3 * a + 3 * i) * e + (3 * a - 6 * i)) * e + 3 * i) * e,
  BR = 1e-7,
  UR = 12;
function HR(e, i, a, r, l) {
  let u,
    f,
    h = 0;
  do ((f = i + (a - i) / 2), (u = Px(f, r, l) - e), u > 0 ? (a = f) : (i = f));
  while (Math.abs(u) > BR && ++h < UR);
  return f;
}
function Er(e, i, a, r) {
  if (e === i && a === r) return Se;
  const l = (u) => HR(u, 0, 1, e, a);
  return (u) => (u === 0 || u === 1 ? u : Px(l(u), i, r));
}
const Bx = (e) => (i) => (i <= 0.5 ? e(2 * i) / 2 : (2 - e(2 * (1 - i))) / 2),
  Ux = (e) => (i) => 1 - e(1 - i),
  Hx = Er(0.33, 1.53, 0.69, 0.99),
  $d = Ux(Hx),
  qx = Bx($d),
  Yx = (e) =>
    e >= 1
      ? 1
      : (e *= 2) < 1
        ? 0.5 * $d(e)
        : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Jd = (e) => 1 - Math.sin(Math.acos(e)),
  Gx = Ux(Jd),
  Xx = Bx(Jd),
  qR = Er(0.42, 0, 1, 1),
  YR = Er(0, 0, 0.58, 1),
  Fx = Er(0.42, 0, 0.58, 1),
  GR = (e) => Array.isArray(e) && typeof e[0] != "number",
  Kx = (e) => Array.isArray(e) && typeof e[0] == "number",
  XR = {
    linear: Se,
    easeIn: qR,
    easeInOut: Fx,
    easeOut: YR,
    circIn: Jd,
    circInOut: Xx,
    circOut: Gx,
    backIn: $d,
    backInOut: qx,
    backOut: Hx,
    anticipate: Yx,
  },
  FR = (e) => typeof e == "string",
  h0 = (e) => {
    if (Kx(e)) {
      Zd(e.length === 4);
      const [i, a, r, l] = e;
      return Er(i, a, r, l);
    } else if (FR(e)) return XR[e];
    return e;
  },
  Wo = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function KR(e) {
  let i = new Set(),
    a = new Set(),
    r = !1,
    l = !1;
  const u = new WeakSet();
  let f = { delta: 0, timestamp: 0, isProcessing: !1 };
  function h(m) {
    (u.has(m) && (p.schedule(m), e()), m(f));
  }
  const p = {
    schedule: (m, y = !1, g = !1) => {
      const T = g && r ? i : a;
      return (y && u.add(m), T.add(m), m);
    },
    cancel: (m) => {
      (a.delete(m), u.delete(m));
    },
    process: (m) => {
      if (((f = m), r)) {
        l = !0;
        return;
      }
      r = !0;
      const y = i;
      ((i = a),
        (a = y),
        i.forEach(h),
        i.clear(),
        (r = !1),
        l && ((l = !1), p.process(m)));
    },
  };
  return p;
}
const QR = 40;
function Qx(e, i) {
  let a = !1,
    r = !0;
  const l = { delta: 0, timestamp: 0, isProcessing: !1 },
    u = () => (a = !0),
    f = Wo.reduce((j, V) => ((j[V] = KR(u)), j), {}),
    {
      setup: h,
      read: p,
      resolveKeyframes: m,
      preUpdate: y,
      update: g,
      preRender: x,
      render: T,
      postRender: E,
    } = f,
    C = () => {
      const j = wi.useManualTiming,
        V = j ? l.timestamp : performance.now();
      ((a = !1),
        j ||
          (l.delta = r ? 1e3 / 60 : Math.max(Math.min(V - l.timestamp, QR), 1)),
        (l.timestamp = V),
        (l.isProcessing = !0),
        h.process(l),
        p.process(l),
        m.process(l),
        y.process(l),
        g.process(l),
        x.process(l),
        T.process(l),
        E.process(l),
        (l.isProcessing = !1),
        a && i && ((r = !1), e(C)));
    },
    R = () => {
      ((a = !0), (r = !0), l.isProcessing || e(C));
    };
  return {
    schedule: Wo.reduce((j, V) => {
      const U = f[V];
      return (
        (j[V] = (X, Z = !1, P = !1) => (a || R(), U.schedule(X, Z, P))),
        j
      );
    }, {}),
    cancel: (j) => {
      for (let V = 0; V < Wo.length; V++) f[Wo[V]].cancel(j);
    },
    state: l,
    steps: f,
  };
}
const {
  schedule: At,
  cancel: Qe,
  state: re,
  steps: wf,
} = Qx(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Se, !0);
let rl;
function ZR() {
  rl = void 0;
}
const pe = {
    now: () => (
      rl === void 0 &&
        pe.set(
          re.isProcessing || wi.useManualTiming
            ? re.timestamp
            : performance.now(),
        ),
      rl
    ),
    set: (e) => {
      ((rl = e), queueMicrotask(ZR));
    },
  },
  Zx = (e) => (i) => typeof i == "string" && i.startsWith(e),
  Wx = Zx("--"),
  WR = Zx("var(--"),
  th = (e) => (WR(e) ? IR.test(e.split("/*")[0].trim()) : !1),
  IR =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function m0(e) {
  return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--");
}
const $s = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  mr = { ...$s, transform: (e) => ln(0, 1, e) },
  Io = { ...$s, default: 1 },
  ar = (e) => Math.round(e * 1e5) / 1e5,
  eh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function $R(e) {
  return e == null;
}
const JR =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  nh = (e, i) => (a) =>
    !!(
      (typeof a == "string" && JR.test(a) && a.startsWith(e)) ||
      (i && !$R(a) && Object.prototype.hasOwnProperty.call(a, i))
    ),
  Ix = (e, i, a) => (r) => {
    if (typeof r != "string") return r;
    const [l, u, f, h] = r.match(eh);
    return {
      [e]: parseFloat(l),
      [i]: parseFloat(u),
      [a]: parseFloat(f),
      alpha: h !== void 0 ? parseFloat(h) : 1,
    };
  },
  tM = (e) => ln(0, 255, e),
  Sf = { ...$s, transform: (e) => Math.round(tM(e)) },
  Fi = {
    test: nh("rgb", "red"),
    parse: Ix("red", "green", "blue"),
    transform: ({ red: e, green: i, blue: a, alpha: r = 1 }) =>
      "rgba(" +
      Sf.transform(e) +
      ", " +
      Sf.transform(i) +
      ", " +
      Sf.transform(a) +
      ", " +
      ar(mr.transform(r)) +
      ")",
  };
function eM(e) {
  let i = "",
    a = "",
    r = "",
    l = "";
  return (
    e.length > 5
      ? ((i = e.substring(1, 3)),
        (a = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (l = e.substring(7, 9)))
      : ((i = e.substring(1, 2)),
        (a = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (l = e.substring(4, 5)),
        (i += i),
        (a += a),
        (r += r),
        (l += l)),
    {
      red: parseInt(i, 16),
      green: parseInt(a, 16),
      blue: parseInt(r, 16),
      alpha: l ? parseInt(l, 16) / 255 : 1,
    }
  );
}
const ed = { test: nh("#"), parse: eM, transform: Fi.transform },
  Ar = (e) => ({
    test: (i) =>
      typeof i == "string" && i.endsWith(e) && i.split(" ").length === 1,
    parse: parseFloat,
    transform: (i) => `${i}${e}`,
  }),
  Hn = Ar("deg"),
  Sn = Ar("%"),
  ot = Ar("px"),
  nM = Ar("vh"),
  iM = Ar("vw"),
  p0 = {
    ...Sn,
    parse: (e) => Sn.parse(e) / 100,
    transform: (e) => Sn.transform(e * 100),
  },
  Us = {
    test: nh("hsl", "hue"),
    parse: Ix("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: i, lightness: a, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Sn.transform(ar(i)) +
      ", " +
      Sn.transform(ar(a)) +
      ", " +
      ar(mr.transform(r)) +
      ")",
  },
  Zt = {
    test: (e) => Fi.test(e) || ed.test(e) || Us.test(e),
    parse: (e) =>
      Fi.test(e) ? Fi.parse(e) : Us.test(e) ? Us.parse(e) : ed.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? Fi.transform(e)
          : Us.transform(e),
    getAnimatableNone: (e) => {
      const i = Zt.parse(e);
      return ((i.alpha = 0), Zt.transform(i));
    },
  },
  sM =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function aM(e) {
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (e.match(eh)?.length || 0) + (e.match(sM)?.length || 0) > 0
  );
}
const $x = "number",
  Jx = "color",
  rM = "var",
  oM = "var(",
  y0 = "${}",
  lM =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Qs(e) {
  const i = e.toString(),
    a = [],
    r = { color: [], number: [], var: [] },
    l = [];
  let u = 0;
  const h = i
    .replace(
      lM,
      (p) => (
        Zt.test(p)
          ? (r.color.push(u), l.push(Jx), a.push(Zt.parse(p)))
          : p.startsWith(oM)
            ? (r.var.push(u), l.push(rM), a.push(p))
            : (r.number.push(u), l.push($x), a.push(parseFloat(p))),
        ++u,
        y0
      ),
    )
    .split(y0);
  return { values: a, split: h, indexes: r, types: l };
}
function cM(e) {
  return Qs(e).values;
}
function t1({ split: e, types: i }) {
  const a = e.length;
  return (r) => {
    let l = "";
    for (let u = 0; u < a; u++)
      if (((l += e[u]), r[u] !== void 0)) {
        const f = i[u];
        f === $x
          ? (l += ar(r[u]))
          : f === Jx
            ? (l += Zt.transform(r[u]))
            : (l += r[u]);
      }
    return l;
  };
}
function uM(e) {
  return t1(Qs(e));
}
const fM = (e) =>
    typeof e == "number" ? 0 : Zt.test(e) ? Zt.getAnimatableNone(e) : e,
  dM = (e, i) =>
    typeof e == "number" ? (i?.trim().endsWith("/") ? e : 0) : fM(e);
function hM(e) {
  const i = Qs(e);
  return t1(i)(i.values.map((r, l) => dM(r, i.split[l])));
}
const sn = {
  test: aM,
  parse: cM,
  createTransformer: uM,
  getAnimatableNone: hM,
};
function Tf(e, i, a) {
  return (
    a < 0 && (a += 1),
    a > 1 && (a -= 1),
    a < 1 / 6
      ? e + (i - e) * 6 * a
      : a < 1 / 2
        ? i
        : a < 2 / 3
          ? e + (i - e) * (2 / 3 - a) * 6
          : e
  );
}
function mM({ hue: e, saturation: i, lightness: a, alpha: r }) {
  ((e /= 360), (i /= 100), (a /= 100));
  let l = 0,
    u = 0,
    f = 0;
  if (!i) l = u = f = a;
  else {
    const h = a < 0.5 ? a * (1 + i) : a + i - a * i,
      p = 2 * a - h;
    ((l = Tf(p, h, e + 1 / 3)), (u = Tf(p, h, e)), (f = Tf(p, h, e - 1 / 3)));
  }
  return {
    red: Math.round(l * 255),
    green: Math.round(u * 255),
    blue: Math.round(f * 255),
    alpha: r,
  };
}
function wl(e, i) {
  return (a) => (a > 0 ? i : e);
}
const Lt = (e, i, a) => e + (i - e) * a,
  Ef = (e, i, a) => {
    const r = e * e,
      l = a * (i * i - r) + r;
    return l < 0 ? 0 : Math.sqrt(l);
  },
  pM = [ed, Fi, Us],
  yM = (e) => pM.find((i) => i.test(e));
function g0(e) {
  const i = yM(e);
  if (!i) return !1;
  let a = i.parse(e);
  return (i === Us && (a = mM(a)), a);
}
const v0 = (e, i) => {
    const a = g0(e),
      r = g0(i);
    if (!a || !r) return wl(e, i);
    const l = { ...a };
    return (u) => (
      (l.red = Ef(a.red, r.red, u)),
      (l.green = Ef(a.green, r.green, u)),
      (l.blue = Ef(a.blue, r.blue, u)),
      (l.alpha = Lt(a.alpha, r.alpha, u)),
      Fi.transform(l)
    );
  },
  nd = new Set(["none", "hidden"]);
function gM(e, i) {
  return nd.has(e) ? (a) => (a <= 0 ? e : i) : (a) => (a >= 1 ? i : e);
}
function vM(e, i) {
  return (a) => Lt(e, i, a);
}
function ih(e) {
  return typeof e == "number"
    ? vM
    : typeof e == "string"
      ? th(e)
        ? wl
        : Zt.test(e)
          ? v0
          : wM
      : Array.isArray(e)
        ? e1
        : typeof e == "object"
          ? Zt.test(e)
            ? v0
            : bM
          : wl;
}
function e1(e, i) {
  const a = [...e],
    r = a.length,
    l = e.map((u, f) => ih(u)(u, i[f]));
  return (u) => {
    for (let f = 0; f < r; f++) a[f] = l[f](u);
    return a;
  };
}
function bM(e, i) {
  const a = { ...e, ...i },
    r = {};
  for (const l in a)
    e[l] !== void 0 && i[l] !== void 0 && (r[l] = ih(e[l])(e[l], i[l]));
  return (l) => {
    for (const u in r) a[u] = r[u](l);
    return a;
  };
}
function xM(e, i) {
  const a = [],
    r = { color: 0, var: 0, number: 0 };
  for (let l = 0; l < i.values.length; l++) {
    const u = i.types[l],
      f = e.indexes[u][r[u]],
      h = e.values[f] ?? 0;
    ((a[l] = h), r[u]++);
  }
  return a;
}
const wM = (e, i) => {
  const a = sn.createTransformer(i),
    r = Qs(e),
    l = Qs(i);
  return r.indexes.var.length === l.indexes.var.length &&
    r.indexes.color.length === l.indexes.color.length &&
    r.indexes.number.length >= l.indexes.number.length
    ? (nd.has(e) && !l.values.length) || (nd.has(i) && !r.values.length)
      ? gM(e, i)
      : Tr(e1(xM(r, l), l.values), a)
    : wl(e, i);
};
function n1(e, i, a) {
  return typeof e == "number" && typeof i == "number" && typeof a == "number"
    ? Lt(e, i, a)
    : ih(e)(e, i);
}
const SM = (e) => {
    const i = ({ timestamp: a }) => e(a);
    return {
      start: (a = !0) => At.update(i, a),
      stop: () => Qe(i),
      now: () => (re.isProcessing ? re.timestamp : pe.now()),
    };
  },
  i1 = (e, i, a = 10) => {
    let r = "";
    const l = Math.max(Math.round(i / a), 2);
    for (let u = 0; u < l; u++)
      r += Math.round(e(u / (l - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  Sl = 2e4;
function sh(e) {
  let i = 0;
  const a = 50;
  let r = e.next(i);
  for (; !r.done && i < Sl;) ((i += a), (r = e.next(i)));
  return i >= Sl ? 1 / 0 : i;
}
function TM(e, i = 100, a) {
  const r = a({ ...e, keyframes: [0, i] }),
    l = Math.min(sh(r), Sl);
  return {
    type: "keyframes",
    ease: (u) => r.next(l * u).value / i,
    duration: Ke(l),
  };
}
const Yt = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
};
function id(e, i) {
  return e * Math.sqrt(1 - i * i);
}
const EM = 12;
function AM(e, i, a) {
  let r = a;
  for (let l = 1; l < EM; l++) r = r - e(r) / i(r);
  return r;
}
const Af = 0.001;
function CM({
  duration: e = Yt.duration,
  bounce: i = Yt.bounce,
  velocity: a = Yt.velocity,
  mass: r = Yt.mass,
}) {
  let l,
    u,
    f = 1 - i;
  ((f = ln(Yt.minDamping, Yt.maxDamping, f)),
    (e = ln(Yt.minDuration, Yt.maxDuration, Ke(e))),
    f < 1
      ? ((l = (m) => {
          const y = m * f,
            g = y * e,
            x = y - a,
            T = id(m, f),
            E = Math.exp(-g);
          return Af - (x / T) * E;
        }),
        (u = (m) => {
          const g = m * f * e,
            x = g * a + a,
            T = Math.pow(f, 2) * Math.pow(m, 2) * e,
            E = Math.exp(-g),
            C = id(Math.pow(m, 2), f);
          return ((-l(m) + Af > 0 ? -1 : 1) * ((x - T) * E)) / C;
        }))
      : ((l = (m) => {
          const y = Math.exp(-m * e),
            g = (m - a) * e + 1;
          return -Af + y * g;
        }),
        (u = (m) => {
          const y = Math.exp(-m * e),
            g = (a - m) * (e * e);
          return y * g;
        })));
  const h = 5 / e,
    p = AM(l, u, h);
  if (((e = Le(e)), isNaN(p)))
    return { stiffness: Yt.stiffness, damping: Yt.damping, duration: e };
  {
    const m = Math.pow(p, 2) * r;
    return { stiffness: m, damping: f * 2 * Math.sqrt(r * m), duration: e };
  }
}
const RM = ["duration", "bounce"],
  MM = ["stiffness", "damping", "mass"];
function b0(e, i) {
  return i.some((a) => e[a] !== void 0);
}
function OM(e) {
  let i = {
    velocity: Yt.velocity,
    stiffness: Yt.stiffness,
    damping: Yt.damping,
    mass: Yt.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!b0(e, MM) && b0(e, RM))
    if (((i.velocity = 0), e.visualDuration)) {
      const a = e.visualDuration,
        r = (2 * Math.PI) / (a * 1.2),
        l = r * r,
        u = 2 * ln(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(l);
      i = { ...i, mass: Yt.mass, stiffness: l, damping: u };
    } else {
      const a = CM({ ...e, velocity: 0 });
      ((i = { ...i, ...a, mass: Yt.mass }), (i.isResolvedFromDuration = !0));
    }
  return i;
}
function Tl(e = Yt.visualDuration, i = Yt.bounce) {
  const a =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: i }
      : e;
  let { restSpeed: r, restDelta: l } = a;
  const u = a.keyframes[0],
    f = a.keyframes[a.keyframes.length - 1],
    h = { done: !1, value: u },
    {
      stiffness: p,
      damping: m,
      mass: y,
      duration: g,
      velocity: x,
      isResolvedFromDuration: T,
    } = OM({ ...a, velocity: -Ke(a.velocity || 0) }),
    E = x || 0,
    C = m / (2 * Math.sqrt(p * y)),
    R = f - u,
    D = Ke(Math.sqrt(p / y)),
    N = Math.abs(R) < 5;
  (r || (r = N ? Yt.restSpeed.granular : Yt.restSpeed.default),
    l || (l = N ? Yt.restDelta.granular : Yt.restDelta.default));
  let j, V, U, X, Z, P;
  if (C < 1)
    ((U = id(D, C)),
      (X = (E + C * D * R) / U),
      (j = (W) => {
        const $ = Math.exp(-C * D * W);
        return f - $ * (X * Math.sin(U * W) + R * Math.cos(U * W));
      }),
      (Z = C * D * X + R * U),
      (P = C * D * R - X * U),
      (V = (W) =>
        Math.exp(-C * D * W) * (Z * Math.sin(U * W) + P * Math.cos(U * W))));
  else if (C === 1) {
    j = ($) => f - Math.exp(-D * $) * (R + (E + D * R) * $);
    const W = E + D * R;
    V = ($) => Math.exp(-D * $) * (D * W * $ - E);
  } else {
    const W = D * Math.sqrt(C * C - 1);
    j = (tt) => {
      const ut = Math.exp(-C * D * tt),
        z = Math.min(W * tt, 300);
      return (
        f - (ut * ((E + C * D * R) * Math.sinh(z) + W * R * Math.cosh(z))) / W
      );
    };
    const $ = (E + C * D * R) / W,
      st = C * D * $ - R * W,
      gt = C * D * R - $ * W;
    V = (tt) => {
      const ut = Math.exp(-C * D * tt),
        z = Math.min(W * tt, 300);
      return ut * (st * Math.sinh(z) + gt * Math.cosh(z));
    };
  }
  const I = {
    calculatedDuration: (T && g) || null,
    velocity: (W) => Le(V(W)),
    next: (W) => {
      if (!T && C < 1) {
        const st = Math.exp(-C * D * W),
          gt = Math.sin(U * W),
          tt = Math.cos(U * W),
          ut = f - st * (X * gt + R * tt),
          z = Le(st * (Z * gt + P * tt));
        return (
          (h.done = Math.abs(z) <= r && Math.abs(f - ut) <= l),
          (h.value = h.done ? f : ut),
          h
        );
      }
      const $ = j(W);
      if (T) h.done = W >= g;
      else {
        const st = Le(V(W));
        h.done = Math.abs(st) <= r && Math.abs(f - $) <= l;
      }
      return ((h.value = h.done ? f : $), h);
    },
    toString: () => {
      const W = Math.min(sh(I), Sl),
        $ = i1((st) => I.next(W * st).value, W, 30);
      return W + "ms " + $;
    },
    toTransition: () => {},
  };
  return I;
}
Tl.applyToOptions = (e) => {
  const i = TM(e, 100, Tl);
  return (
    (e.ease = i.ease),
    (e.duration = Le(i.duration)),
    (e.type = "keyframes"),
    e
  );
};
const DM = 5;
function s1(e, i, a) {
  const r = Math.max(i - DM, 0);
  return Id(a - e(r), i - r);
}
function sd({
  keyframes: e,
  velocity: i = 0,
  power: a = 0.8,
  timeConstant: r = 325,
  bounceDamping: l = 10,
  bounceStiffness: u = 500,
  modifyTarget: f,
  min: h,
  max: p,
  restDelta: m = 0.5,
  restSpeed: y,
}) {
  const g = e[0],
    x = { done: !1, value: g },
    T = (P) => (h !== void 0 && P < h) || (p !== void 0 && P > p),
    E = (P) =>
      h === void 0
        ? p
        : p === void 0 || Math.abs(h - P) < Math.abs(p - P)
          ? h
          : p;
  let C = a * i;
  const R = g + C,
    D = f === void 0 ? R : f(R);
  D !== R && (C = D - g);
  const N = (P) => -C * Math.exp(-P / r),
    j = (P) => D + N(P),
    V = (P) => {
      const I = N(P),
        W = j(P);
      ((x.done = Math.abs(I) <= m), (x.value = x.done ? D : W));
    };
  let U, X;
  const Z = (P) => {
    T(x.value) &&
      ((U = P),
      (X = Tl({
        keyframes: [x.value, E(x.value)],
        velocity: s1(j, P, x.value),
        damping: l,
        stiffness: u,
        restDelta: m,
        restSpeed: y,
      })));
  };
  return (
    Z(0),
    {
      calculatedDuration: null,
      next: (P) => {
        let I = !1;
        return (
          !X && U === void 0 && ((I = !0), V(P), Z(P)),
          U !== void 0 && P >= U ? X.next(P - U) : (!I && V(P), x)
        );
      },
    }
  );
}
function NM(e, i, a) {
  const r = [],
    l = a || wi.mix || n1,
    u = e.length - 1;
  for (let f = 0; f < u; f++) {
    let h = l(e[f], e[f + 1]);
    if (i) {
      const p = Array.isArray(i) ? i[f] || Se : i;
      h = Tr(p, h);
    }
    r.push(h);
  }
  return r;
}
function ah(e, i, { clamp: a = !0, ease: r, mixer: l } = {}) {
  const u = e.length;
  if ((Zd(u === i.length), u === 1)) return () => i[0];
  if (u === 2 && i[0] === i[1]) return () => i[1];
  const f = e[0] === e[1];
  e[0] > e[u - 1] && ((e = [...e].reverse()), (i = [...i].reverse()));
  const h = NM(i, r, l),
    p = h.length,
    m = (y) => {
      if (f && y < e[0]) return i[0];
      let g = 0;
      if (p > 1) for (; g < e.length - 2 && !(y < e[g + 1]); g++);
      const x = Ks(e[g], e[g + 1], y);
      return h[g](x);
    };
  return a ? (y) => m(ln(e[0], e[u - 1], y)) : m;
}
function jM(e, i) {
  const a = e[e.length - 1];
  for (let r = 1; r <= i; r++) {
    const l = Ks(0, i, r);
    e.push(Lt(a, 1, l));
  }
}
function a1(e) {
  const i = [0];
  return (jM(i, e.length - 1), i);
}
function _M(e, i) {
  return e.map((a) => a * i);
}
function zM(e, i) {
  return e.map(() => i || Fx).splice(0, e.length - 1);
}
function rr({
  duration: e = 300,
  keyframes: i,
  times: a,
  ease: r = "easeInOut",
}) {
  const l = GR(r) ? r.map(h0) : h0(r),
    u = { done: !1, value: i[0] },
    f = _M(a && a.length === i.length ? a : a1(i), e),
    h = ah(f, i, { ease: Array.isArray(l) ? l : zM(i, l) });
  return {
    calculatedDuration: e,
    next: (p) => ((u.value = h(p)), (u.done = p >= e), u),
  };
}
const VM = (e) => e !== null;
function Gl(e, { repeat: i, repeatType: a = "loop" }, r, l = 1) {
  const u = e.filter(VM),
    h = l < 0 || (i && a !== "loop" && i % 2 === 1) ? 0 : u.length - 1;
  return !h || r === void 0 ? u[h] : r;
}
const LM = { decay: sd, inertia: sd, tween: rr, keyframes: rr, spring: Tl };
function r1(e) {
  typeof e.type == "string" && (e.type = LM[e.type]);
}
class rh {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((i) => {
      this.resolve = i;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(i, a) {
    return this.finished.then(i, a);
  }
}
const kM = (e) => e / 100;
class pr extends rh {
  constructor(i) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.delayState = { done: !1, value: void 0 }),
      (this.stop = () => {
        const { motionValue: a } = this.options;
        (a && a.updatedAt !== pe.now() && this.tick(pe.now()),
          (this.isStopped = !0),
          this.state !== "idle" && (this.teardown(), this.options.onStop?.()));
      }),
      (this.options = i),
      this.initAnimation(),
      this.play(),
      i.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: i } = this;
    r1(i);
    const {
      type: a = rr,
      repeat: r = 0,
      repeatDelay: l = 0,
      repeatType: u,
      velocity: f = 0,
    } = i;
    let { keyframes: h } = i;
    const p = a || rr;
    p !== rr &&
      typeof h[0] != "number" &&
      ((this.mixKeyframes = Tr(kM, n1(h[0], h[1]))), (h = [0, 100]));
    const m = p({ ...i, keyframes: h });
    (u === "mirror" &&
      (this.mirroredGenerator = p({
        ...i,
        keyframes: [...h].reverse(),
        velocity: -f,
      })),
      m.calculatedDuration === null && (m.calculatedDuration = sh(m)));
    const { calculatedDuration: y } = m;
    ((this.calculatedDuration = y),
      (this.resolvedDuration = y + l),
      (this.totalDuration = this.resolvedDuration * (r + 1) - l),
      (this.generator = m));
  }
  updateTime(i) {
    const a = Math.round(i - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = a);
  }
  tick(i, a = !1) {
    const {
      generator: r,
      totalDuration: l,
      mixKeyframes: u,
      mirroredGenerator: f,
      resolvedDuration: h,
      calculatedDuration: p,
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: m = 0,
      keyframes: y,
      repeat: g,
      repeatType: x,
      repeatDelay: T,
      type: E,
      onUpdate: C,
      finalKeyframe: R,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, i))
      : this.speed < 0 &&
        (this.startTime = Math.min(i - l / this.speed, this.startTime)),
      a ? (this.currentTime = i) : this.updateTime(i));
    const D = this.currentTime - m * (this.playbackSpeed >= 0 ? 1 : -1),
      N = this.playbackSpeed >= 0 ? D < 0 : D > l;
    ((this.currentTime = Math.max(D, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = l));
    let j = this.currentTime,
      V = r;
    if (g) {
      const P = Math.min(this.currentTime, l) / h;
      let I = Math.floor(P),
        W = P % 1;
      (!W && P >= 1 && (W = 1),
        W === 1 && I--,
        (I = Math.min(I, g + 1)),
        I % 2 &&
          (x === "reverse"
            ? ((W = 1 - W), T && (W -= T / h))
            : x === "mirror" && (V = f)),
        (j = ln(0, 1, W) * h));
    }
    let U;
    (N
      ? ((this.delayState.value = y[0]), (U = this.delayState))
      : (U = V.next(j)),
      u && !N && (U.value = u(U.value)));
    let { done: X } = U;
    !N &&
      p !== null &&
      (X =
        this.playbackSpeed >= 0
          ? this.currentTime >= l
          : this.currentTime <= 0);
    const Z =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && X));
    return (
      Z && E !== sd && (U.value = Gl(y, this.options, R, this.speed)),
      C && C(U.value),
      Z && this.finish(),
      U
    );
  }
  then(i, a) {
    return this.finished.then(i, a);
  }
  get duration() {
    return Ke(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: i = 0 } = this.options || {};
    return this.duration + Ke(i);
  }
  get time() {
    return Ke(this.currentTime);
  }
  set time(i) {
    ((i = Le(i)),
      (this.currentTime = i),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = i)
        : this.driver &&
          (this.startTime = this.driver.now() - i / this.playbackSpeed),
      this.driver
        ? this.driver.start(!1)
        : ((this.startTime = 0),
          (this.state = "paused"),
          (this.holdTime = i),
          this.tick(i)));
  }
  getGeneratorVelocity() {
    const i = this.currentTime;
    if (i <= 0) return this.options.velocity || 0;
    if (this.generator.velocity) return this.generator.velocity(i);
    const a = this.generator.next(i).value;
    return s1((r) => this.generator.next(r).value, i, a);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(i) {
    const a = this.playbackSpeed !== i;
    (a && this.driver && this.updateTime(pe.now()),
      (this.playbackSpeed = i),
      a && this.driver && (this.time = Ke(this.currentTime)));
  }
  play() {
    if (this.isStopped) return;
    const { driver: i = SM, startTime: a } = this.options;
    (this.driver || (this.driver = i((l) => this.tick(l))),
      this.options.onPlay?.());
    const r = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = r))
      : this.holdTime !== null
        ? (this.startTime = r - this.holdTime)
        : this.startTime || (this.startTime = a ?? r),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    ((this.state = "paused"),
      this.updateTime(pe.now()),
      (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      this.options.onComplete?.());
  }
  cancel() {
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      this.options.onCancel?.());
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(i) {
    return ((this.startTime = 0), this.tick(i, !0));
  }
  attachTimeline(i) {
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      this.driver?.stop(),
      i.observe(this)
    );
  }
}
function PM(e) {
  for (let i = 1; i < e.length; i++) e[i] ?? (e[i] = e[i - 1]);
}
const Ki = (e) => (e * 180) / Math.PI,
  ad = (e) => {
    const i = Ki(Math.atan2(e[1], e[0]));
    return rd(i);
  },
  BM = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: ad,
    rotateZ: ad,
    skewX: (e) => Ki(Math.atan(e[1])),
    skewY: (e) => Ki(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  rd = (e) => ((e = e % 360), e < 0 && (e += 360), e),
  x0 = ad,
  w0 = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  S0 = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  UM = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: w0,
    scaleY: S0,
    scale: (e) => (w0(e) + S0(e)) / 2,
    rotateX: (e) => rd(Ki(Math.atan2(e[6], e[5]))),
    rotateY: (e) => rd(Ki(Math.atan2(-e[2], e[0]))),
    rotateZ: x0,
    rotate: x0,
    skewX: (e) => Ki(Math.atan(e[4])),
    skewY: (e) => Ki(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function od(e) {
  return e.includes("scale") ? 1 : 0;
}
function ld(e, i) {
  if (!e || e === "none") return od(i);
  const a = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, l;
  if (a) ((r = UM), (l = a));
  else {
    const h = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((r = BM), (l = h));
  }
  if (!l) return od(i);
  const u = r[i],
    f = l[1].split(",").map(qM);
  return typeof u == "function" ? u(f) : f[u];
}
const HM = (e, i) => {
  const { transform: a = "none" } = getComputedStyle(e);
  return ld(a, i);
};
function qM(e) {
  return parseFloat(e.trim());
}
const Js = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  ta = new Set([...Js, "pathRotation"]),
  T0 = (e) => e === $s || e === ot,
  YM = new Set(["x", "y", "z"]),
  GM = Js.filter((e) => !YM.has(e));
function XM(e) {
  const i = [];
  return (
    GM.forEach((a) => {
      const r = e.getValue(a);
      r !== void 0 &&
        (i.push([a, r.get()]), r.set(a.startsWith("scale") ? 1 : 0));
    }),
    i
  );
}
const gi = {
  width: (
    { x: e },
    { paddingLeft: i = "0", paddingRight: a = "0", boxSizing: r },
  ) => {
    const l = e.max - e.min;
    return r === "border-box" ? l : l - parseFloat(i) - parseFloat(a);
  },
  height: (
    { y: e },
    { paddingTop: i = "0", paddingBottom: a = "0", boxSizing: r },
  ) => {
    const l = e.max - e.min;
    return r === "border-box" ? l : l - parseFloat(i) - parseFloat(a);
  },
  top: (e, { top: i }) => parseFloat(i),
  left: (e, { left: i }) => parseFloat(i),
  bottom: ({ y: e }, { top: i }) => parseFloat(i) + (e.max - e.min),
  right: ({ x: e }, { left: i }) => parseFloat(i) + (e.max - e.min),
  x: (e, { transform: i }) => ld(i, "x"),
  y: (e, { transform: i }) => ld(i, "y"),
};
gi.translateX = gi.x;
gi.translateY = gi.y;
const Qi = new Set();
let cd = !1,
  ud = !1,
  fd = !1;
function o1() {
  if (ud) {
    const e = Array.from(Qi).filter((r) => r.needsMeasurement),
      i = new Set(e.map((r) => r.element)),
      a = new Map();
    (i.forEach((r) => {
      const l = XM(r);
      l.length && (a.set(r, l), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      i.forEach((r) => {
        r.render();
        const l = a.get(r);
        l &&
          l.forEach(([u, f]) => {
            r.getValue(u)?.set(f);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      }));
  }
  ((ud = !1), (cd = !1), Qi.forEach((e) => e.complete(fd)), Qi.clear());
}
function l1() {
  Qi.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (ud = !0));
  });
}
function FM() {
  ((fd = !0), l1(), o1(), (fd = !1));
}
class oh {
  constructor(i, a, r, l, u, f = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...i]),
      (this.onComplete = a),
      (this.name = r),
      (this.motionValue = l),
      (this.element = u),
      (this.isAsync = f));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (Qi.add(this),
          cd || ((cd = !0), At.read(l1), At.resolveKeyframes(o1)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: i,
      name: a,
      element: r,
      motionValue: l,
    } = this;
    if (i[0] === null) {
      const u = l?.get(),
        f = i[i.length - 1];
      if (u !== void 0) i[0] = u;
      else if (r && a) {
        const h = r.readValue(a, f);
        h != null && (i[0] = h);
      }
      (i[0] === void 0 && (i[0] = f), l && u === void 0 && l.set(i[0]));
    }
    PM(i);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(i = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, i),
      Qi.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (Qi.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const KM = (e) => e.startsWith("--");
function c1(e, i, a) {
  KM(i) ? e.style.setProperty(i, a) : (e.style[i] = a);
}
const QM = {};
function lh(e, i) {
  const a = kx(e);
  return () => QM[i] ?? a();
}
const ch = lh(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  u1 = lh(() => window.ViewTimeline !== void 0, "viewTimeline"),
  f1 = lh(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  nr = ([e, i, a, r]) => `cubic-bezier(${e}, ${i}, ${a}, ${r})`,
  E0 = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: nr([0, 0.65, 0.55, 1]),
    circOut: nr([0.55, 0, 1, 0.45]),
    backIn: nr([0.31, 0.01, 0.66, -0.59]),
    backOut: nr([0.33, 1.53, 0.69, 0.99]),
  };
function d1(e, i) {
  if (e)
    return typeof e == "function"
      ? f1()
        ? i1(e, i)
        : "ease-out"
      : Kx(e)
        ? nr(e)
        : Array.isArray(e)
          ? e.map((a) => d1(a, i) || E0.easeOut)
          : E0[e];
}
function ZM(
  e,
  i,
  a,
  {
    delay: r = 0,
    duration: l = 300,
    repeat: u = 0,
    repeatType: f = "loop",
    ease: h = "easeOut",
    times: p,
  } = {},
  m = void 0,
) {
  const y = { [i]: a };
  p && (y.offset = p);
  const g = d1(h, l);
  Array.isArray(g) && (y.easing = g);
  const x = {
    delay: r,
    duration: l,
    easing: Array.isArray(g) ? "linear" : g,
    fill: "both",
    iterations: u + 1,
    direction: f === "reverse" ? "alternate" : "normal",
  };
  return (m && (x.pseudoElement = m), e.animate(y, x));
}
function h1(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function WM({ type: e, ...i }) {
  return h1(e) && f1()
    ? e.applyToOptions(i)
    : (i.duration ?? (i.duration = 300), i.ease ?? (i.ease = "easeOut"), i);
}
class m1 extends rh {
  constructor(i) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !i)
    )
      return;
    const {
      element: a,
      name: r,
      keyframes: l,
      pseudoElement: u,
      allowFlatten: f = !1,
      finalKeyframe: h,
      onComplete: p,
    } = i;
    ((this.isPseudoElement = !!u),
      (this.allowFlatten = f),
      (this.options = i),
      Zd(typeof i.type != "string"));
    const m = WM(i);
    ((this.animation = ZM(a, r, l, m, u)),
      m.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !u)) {
          const y = Gl(l, this.options, h, this.speed);
          (this.updateMotionValue && this.updateMotionValue(y),
            c1(a, r, y),
            this.animation.cancel());
        }
        (p?.(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: i } = this;
    i === "idle" ||
      i === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    const i = this.options?.element;
    !this.isPseudoElement && i?.isConnected && this.animation.commitStyles?.();
  }
  get duration() {
    const i = this.animation.effect?.getComputedTiming?.().duration || 0;
    return Ke(Number(i));
  }
  get iterationDuration() {
    const { delay: i = 0 } = this.options || {};
    return this.duration + Ke(i);
  }
  get time() {
    return Ke(Number(this.animation.currentTime) || 0);
  }
  set time(i) {
    const a = this.finishedTime !== null;
    ((this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = Le(i)),
      a && this.animation.pause());
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(i) {
    (i < 0 && (this.finishedTime = null), (this.animation.playbackRate = i));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(i) {
    this.manualStartTime = this.animation.startTime = i;
  }
  attachTimeline({ timeline: i, rangeStart: a, rangeEnd: r, observe: l }) {
    return (
      this.allowFlatten &&
        this.animation.effect?.updateTiming({ easing: "linear" }),
      (this.animation.onfinish = null),
      i && ch()
        ? ((this.animation.timeline = i),
          a && (this.animation.rangeStart = a),
          r && (this.animation.rangeEnd = r),
          Se)
        : l(this)
    );
  }
}
const p1 = { anticipate: Yx, backInOut: qx, circInOut: Xx };
function IM(e) {
  return e in p1;
}
function $M(e) {
  typeof e.ease == "string" && IM(e.ease) && (e.ease = p1[e.ease]);
}
const Cf = 10;
class JM extends m1 {
  constructor(i) {
    ($M(i),
      r1(i),
      super(i),
      i.startTime !== void 0 &&
        i.autoplay !== !1 &&
        (this.startTime = i.startTime),
      (this.options = i));
  }
  updateMotionValue(i) {
    const {
      motionValue: a,
      onUpdate: r,
      onComplete: l,
      element: u,
      ...f
    } = this.options;
    if (!a) return;
    if (i !== void 0) {
      a.set(i);
      return;
    }
    const h = new pr({ ...f, autoplay: !1 }),
      p = Math.max(Cf, pe.now() - this.startTime),
      m = ln(0, Cf, p - Cf),
      y = h.sample(p).value,
      { name: g } = this.options;
    (u && g && c1(u, g, y),
      a.setWithVelocity(h.sample(Math.max(0, p - m)).value, y, m),
      h.stop());
  }
}
const A0 = (e, i) =>
  i === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (sn.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function tO(e) {
  const i = e[0];
  if (e.length === 1) return !0;
  for (let a = 0; a < e.length; a++) if (e[a] !== i) return !0;
}
function eO(e, i, a, r) {
  const l = e[0];
  if (l === null) return !1;
  if (i === "display" || i === "visibility") return !0;
  const u = e[e.length - 1],
    f = A0(l, i),
    h = A0(u, i);
  return !f || !h ? !1 : tO(e) || ((a === "spring" || h1(a)) && r);
}
function dd(e) {
  ((e.duration = 0), (e.type = "keyframes"));
}
const y1 = new Set(["opacity", "clipPath", "filter", "transform"]),
  nO = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function iO(e) {
  for (let i = 0; i < e.length; i++)
    if (typeof e[i] == "string" && nO.test(e[i])) return !0;
  return !1;
}
const sO = new Set([
    "color",
    "backgroundColor",
    "outlineColor",
    "fill",
    "stroke",
    "borderColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor",
  ]),
  aO = kx(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function rO(e) {
  const {
    motionValue: i,
    name: a,
    repeatDelay: r,
    repeatType: l,
    damping: u,
    type: f,
    keyframes: h,
  } = e;
  if (!(i?.owner?.current instanceof HTMLElement)) return !1;
  const { onUpdate: m, transformTemplate: y } = i.owner.getProps();
  return (
    aO() &&
    a &&
    (y1.has(a) || (sO.has(a) && iO(h))) &&
    (a !== "transform" || !y) &&
    !m &&
    !r &&
    l !== "mirror" &&
    u !== 0 &&
    f !== "inertia"
  );
}
const oO = 40;
class lO extends rh {
  constructor({
    autoplay: i = !0,
    delay: a = 0,
    type: r = "keyframes",
    repeat: l = 0,
    repeatDelay: u = 0,
    repeatType: f = "loop",
    keyframes: h,
    name: p,
    motionValue: m,
    element: y,
    ...g
  }) {
    (super(),
      (this.stop = () => {
        (this._animation && (this._animation.stop(), this.stopTimeline?.()),
          this.keyframeResolver?.cancel());
      }),
      (this.createdAt = pe.now()));
    const x = {
        autoplay: i,
        delay: a,
        type: r,
        repeat: l,
        repeatDelay: u,
        repeatType: f,
        name: p,
        motionValue: m,
        element: y,
        ...g,
      },
      T = y?.KeyframeResolver || oh;
    ((this.keyframeResolver = new T(
      h,
      (E, C, R) => this.onKeyframesResolved(E, C, x, !R),
      p,
      m,
      y,
    )),
      this.keyframeResolver?.scheduleResolve());
  }
  onKeyframesResolved(i, a, r, l) {
    this.keyframeResolver = void 0;
    const {
      name: u,
      type: f,
      velocity: h,
      delay: p,
      isHandoff: m,
      onUpdate: y,
    } = r;
    this.resolvedAt = pe.now();
    let g = !0;
    eO(i, u, f, h) ||
      ((g = !1),
      (wi.instantAnimations || !p) && y?.(Gl(i, r, a)),
      (i[0] = i[i.length - 1]),
      dd(r),
      (r.repeat = 0));
    const T = {
        startTime: l
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > oO
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: a,
        ...r,
        keyframes: i,
      },
      E = g && !m && rO(T),
      C = T.motionValue?.owner?.current;
    let R;
    if (E)
      try {
        R = new JM({ ...T, element: C });
      } catch {
        R = new pr(T);
      }
    else R = new pr(T);
    (R.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(Se),
      this.pendingTimeline &&
        ((this.stopTimeline = R.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = R));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(i, a) {
    return this.finished.finally(i).then(() => {});
  }
  get animation() {
    return (
      this._animation || (this.keyframeResolver?.resume(), FM()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(i) {
    this.animation.time = i;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(i) {
    this.animation.speed = i;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(i) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(i))
        : (this.pendingTimeline = i),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    (this._animation && this.animation.cancel(),
      this.keyframeResolver?.cancel());
  }
}
function g1(e, i, a, r = 0, l = 1) {
  const u = Array.from(e)
      .sort((m, y) => m.sortNodePosition(y))
      .indexOf(i),
    f = e.size,
    h = (f - 1) * r;
  return typeof a == "function" ? a(u, f) : l === 1 ? u * r : h - u * r;
}
const C0 = 30,
  cO = (e) => !isNaN(parseFloat(e)),
  or = { current: void 0 };
class uO {
  constructor(i, a = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r) => {
        const l = pe.now();
        if (
          (this.updatedAt !== l && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            (this.events.change?.notify(this.current), this.dependents))
        )
          for (const u of this.dependents) u.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(i),
      (this.owner = a.owner));
  }
  setCurrent(i) {
    ((this.current = i),
      (this.updatedAt = pe.now()),
      this.canTrackVelocity === null &&
        i !== void 0 &&
        (this.canTrackVelocity = cO(this.current)));
  }
  setPrevFrameValue(i = this.current) {
    ((this.prevFrameValue = i), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(i) {
    return this.on("change", i);
  }
  on(i, a) {
    this.events[i] || (this.events[i] = new Wd());
    const r = this.events[i].add(a);
    return i === "change"
      ? () => {
          (r(),
            At.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : r;
  }
  clearListeners() {
    for (const i in this.events) this.events[i].clear();
  }
  attach(i, a) {
    ((this.passiveEffect = i), (this.stopPassiveEffect = a));
  }
  set(i) {
    this.passiveEffect
      ? this.passiveEffect(i, this.updateAndNotify)
      : this.updateAndNotify(i);
  }
  setWithVelocity(i, a, r) {
    (this.set(a),
      (this.prev = void 0),
      (this.prevFrameValue = i),
      (this.prevUpdatedAt = this.updatedAt - r));
  }
  jump(i, a = !0) {
    (this.updateAndNotify(i),
      (this.prev = i),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      a && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(i) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(i));
  }
  removeDependent(i) {
    this.dependents && this.dependents.delete(i);
  }
  get() {
    return (or.current && or.current.push(this), this.current);
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const i = pe.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      i - this.updatedAt > C0
    )
      return 0;
    const a = Math.min(this.updatedAt - this.prevUpdatedAt, C0);
    return Id(parseFloat(this.current) - parseFloat(this.prevFrameValue), a);
  }
  start(i) {
    return (
      this.stop(),
      new Promise((a) => {
        ((this.hasAnimated = !0),
          (this.animation = i(a)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    (this.dependents?.clear(),
      this.events.destroy?.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function nn(e, i) {
  return new uO(e, i);
}
function v1(e, i) {
  if (e?.inherit && i) {
    const { inherit: a, ...r } = e;
    return { ...i, ...r };
  }
  return e;
}
function uh(e, i) {
  const a = e?.[i] ?? e?.default ?? e;
  return a !== e ? v1(a, e) : a;
}
const fO = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  dO = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  hO = { type: "keyframes", duration: 0.8 },
  mO = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  pO = (e, { keyframes: i }) =>
    i.length > 2
      ? hO
      : ta.has(e)
        ? e.startsWith("scale")
          ? dO(i[1])
          : fO
        : mO,
  yO = new Set([
    "when",
    "delay",
    "delayChildren",
    "staggerChildren",
    "staggerDirection",
    "repeat",
    "repeatType",
    "repeatDelay",
    "from",
    "elapsed",
  ]);
function gO(e) {
  for (const i in e) if (!yO.has(i)) return !0;
  return !1;
}
const fh =
    (e, i, a, r = {}, l, u) =>
    (f) => {
      const h = uh(r, e) || {},
        p = h.delay || r.delay || 0;
      let { elapsed: m = 0 } = r;
      m = m - Le(p);
      const y = {
        keyframes: Array.isArray(a) ? a : [null, a],
        ease: "easeOut",
        velocity: i.getVelocity(),
        ...h,
        delay: -m,
        onUpdate: (x) => {
          (i.set(x), h.onUpdate && h.onUpdate(x));
        },
        onComplete: () => {
          (f(), h.onComplete && h.onComplete());
        },
        name: e,
        motionValue: i,
        element: u ? void 0 : l,
      };
      (gO(h) || Object.assign(y, pO(e, y)),
        y.duration && (y.duration = Le(y.duration)),
        y.repeatDelay && (y.repeatDelay = Le(y.repeatDelay)),
        y.from !== void 0 && (y.keyframes[0] = y.from));
      let g = !1;
      if (
        ((y.type === !1 || (y.duration === 0 && !y.repeatDelay)) &&
          (dd(y), y.delay === 0 && (g = !0)),
        (wi.instantAnimations ||
          wi.skipAnimations ||
          l?.shouldSkipAnimations ||
          h.skipAnimations) &&
          ((g = !0), dd(y), (y.delay = 0)),
        (y.allowFlatten = !h.type && !h.ease),
        g && !u && i.get() !== void 0)
      ) {
        const x = Gl(y.keyframes, h);
        if (x !== void 0) {
          At.update(() => {
            (y.onUpdate(x), y.onComplete());
          });
          return;
        }
      }
      return h.isSync ? new pr(y) : new lO(y);
    },
  vO = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function bO(e) {
  const i = vO.exec(e);
  if (!i) return [,];
  const [, a, r, l] = i;
  return [`--${a ?? r}`, l];
}
function b1(e, i, a = 1) {
  const [r, l] = bO(e);
  if (!r) return;
  const u = window.getComputedStyle(i).getPropertyValue(r);
  if (u) {
    const f = u.trim();
    return zx(f) ? parseFloat(f) : f;
  }
  return th(l) ? b1(l, i, a + 1) : l;
}
function R0(e) {
  const i = [{}, {}];
  return (
    e?.values.forEach((a, r) => {
      ((i[0][r] = a.get()), (i[1][r] = a.getVelocity()));
    }),
    i
  );
}
function dh(e, i, a, r) {
  if (typeof i == "function") {
    const [l, u] = R0(r);
    i = i(a !== void 0 ? a : e.custom, l, u);
  }
  if (
    (typeof i == "string" && (i = e.variants && e.variants[i]),
    typeof i == "function")
  ) {
    const [l, u] = R0(r);
    i = i(a !== void 0 ? a : e.custom, l, u);
  }
  return i;
}
function Zi(e, i, a) {
  const r = e.getProps();
  return dh(r, i, a !== void 0 ? a : r.custom, e);
}
const x1 = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...Js,
  ]),
  hd = (e) => Array.isArray(e);
function xO(e, i, a) {
  e.hasValue(i) ? e.getValue(i).set(a) : e.addValue(i, nn(a));
}
function wO(e) {
  return hd(e) ? e[e.length - 1] || 0 : e;
}
function SO(e, i) {
  const a = Zi(e, i);
  let { transitionEnd: r = {}, transition: l = {}, ...u } = a || {};
  u = { ...u, ...r };
  for (const f in u) {
    const h = wO(u[f]);
    xO(e, f, h);
  }
}
const ee = (e) => !!(e && e.getVelocity);
function TO(e) {
  return !!(ee(e) && e.add);
}
function md(e, i) {
  const a = e.getValue("willChange");
  if (TO(a)) return a.add(i);
  if (!a && wi.WillChange) {
    const r = new wi.WillChange("auto");
    (e.addValue("willChange", r), r.add(i));
  }
}
function hh(e) {
  return e.replace(/([A-Z])/g, (i) => `-${i.toLowerCase()}`);
}
const EO = "framerAppearId",
  w1 = "data-" + hh(EO);
function S1(e) {
  return e.props[w1];
}
function AO({ protectedKeys: e, needsAnimating: i }, a) {
  const r = e.hasOwnProperty(a) && i[a] !== !0;
  return ((i[a] = !1), r);
}
function T1(e, i, { delay: a = 0, transitionOverride: r, type: l } = {}) {
  let { transition: u, transitionEnd: f, ...h } = i;
  const p = e.getDefaultTransition();
  u = u ? v1(u, p) : p;
  const m = u?.reduceMotion,
    y = u?.skipAnimations;
  r && (u = r);
  const g = [],
    x = l && e.animationState && e.animationState.getState()[l],
    T = u?.path;
  T && T.animateVisualElement(e, h, u, a, g);
  for (const E in h) {
    const C = e.getValue(E, e.latestValues[E] ?? null),
      R = h[E];
    if (R === void 0 || (x && AO(x, E))) continue;
    const D = { delay: a, ...uh(u || {}, E) };
    y && (D.skipAnimations = !0);
    const N = C.get();
    if (
      N !== void 0 &&
      !C.isAnimating() &&
      !Array.isArray(R) &&
      R === N &&
      !D.velocity
    ) {
      At.update(() => C.set(R));
      continue;
    }
    let j = !1;
    if (window.MotionHandoffAnimation) {
      const X = S1(e);
      if (X) {
        const Z = window.MotionHandoffAnimation(X, E, At);
        Z !== null && ((D.startTime = Z), (j = !0));
      }
    }
    md(e, E);
    const V = m ?? e.shouldReduceMotion;
    C.start(fh(E, C, R, V && x1.has(E) ? { type: !1 } : D, e, j));
    const U = C.animation;
    U && g.push(U);
  }
  if (f) {
    const E = () =>
      At.update(() => {
        f && SO(e, f);
      });
    g.length ? Promise.all(g).then(E) : E();
  }
  return g;
}
function pd(e, i, a = {}) {
  const r = Zi(e, i, a.type === "exit" ? e.presenceContext?.custom : void 0);
  let { transition: l = e.getDefaultTransition() || {} } = r || {};
  a.transitionOverride && (l = a.transitionOverride);
  const u = r ? () => Promise.all(T1(e, r, a)) : () => Promise.resolve(),
    f =
      e.variantChildren && e.variantChildren.size
        ? (p = 0) => {
            const {
              delayChildren: m = 0,
              staggerChildren: y,
              staggerDirection: g,
            } = l;
            return CO(e, i, p, m, y, g, a);
          }
        : () => Promise.resolve(),
    { when: h } = l;
  if (h) {
    const [p, m] = h === "beforeChildren" ? [u, f] : [f, u];
    return p().then(() => m());
  } else return Promise.all([u(), f(a.delay)]);
}
function CO(e, i, a = 0, r = 0, l = 0, u = 1, f) {
  const h = [];
  for (const p of e.variantChildren)
    (p.notify("AnimationStart", i),
      h.push(
        pd(p, i, {
          ...f,
          delay:
            a +
            (typeof r == "function" ? 0 : r) +
            g1(e.variantChildren, p, r, l, u),
        }).then(() => p.notify("AnimationComplete", i)),
      ));
  return Promise.all(h);
}
function RO(e, i, a = {}) {
  e.notify("AnimationStart", i);
  let r;
  if (Array.isArray(i)) {
    const l = i.map((u) => pd(e, u, a));
    r = Promise.all(l);
  } else if (typeof i == "string") r = pd(e, i, a);
  else {
    const l = typeof i == "function" ? Zi(e, i, a.custom) : i;
    r = Promise.all(T1(e, l, a));
  }
  return r.then(() => {
    e.notify("AnimationComplete", i);
  });
}
const MO = { test: (e) => e === "auto", parse: (e) => e },
  E1 = (e) => (i) => i.test(e),
  A1 = [$s, ot, Sn, Hn, iM, nM, MO],
  M0 = (e) => A1.find(E1(e));
function OO(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || Lx(e)
      : !0;
}
const DO = new Set(["brightness", "contrast", "saturate", "opacity"]);
function NO(e) {
  const [i, a] = e.slice(0, -1).split("(");
  if (i === "drop-shadow") return e;
  const [r] = a.match(eh) || [];
  if (!r) return e;
  const l = a.replace(r, "");
  let u = DO.has(i) ? 1 : 0;
  return (r !== a && (u *= 100), i + "(" + u + l + ")");
}
const jO = /\b([a-z-]*)\(.*?\)/gu,
  yd = {
    ...sn,
    getAnimatableNone: (e) => {
      const i = e.match(jO);
      return i ? i.map(NO).join(" ") : e;
    },
  },
  gd = {
    ...sn,
    getAnimatableNone: (e) => {
      const i = sn.parse(e);
      return sn.createTransformer(e)(
        i.map((r) =>
          typeof r == "number"
            ? 0
            : typeof r == "object"
              ? { ...r, alpha: 1 }
              : r,
        ),
      );
    },
  },
  O0 = { ...$s, transform: Math.round },
  _O = {
    rotate: Hn,
    pathRotation: Hn,
    rotateX: Hn,
    rotateY: Hn,
    rotateZ: Hn,
    scale: Io,
    scaleX: Io,
    scaleY: Io,
    scaleZ: Io,
    skew: Hn,
    skewX: Hn,
    skewY: Hn,
    distance: ot,
    translateX: ot,
    translateY: ot,
    translateZ: ot,
    x: ot,
    y: ot,
    z: ot,
    perspective: ot,
    transformPerspective: ot,
    opacity: mr,
    originX: p0,
    originY: p0,
    originZ: ot,
  },
  El = {
    borderWidth: ot,
    borderTopWidth: ot,
    borderRightWidth: ot,
    borderBottomWidth: ot,
    borderLeftWidth: ot,
    borderRadius: ot,
    borderTopLeftRadius: ot,
    borderTopRightRadius: ot,
    borderBottomRightRadius: ot,
    borderBottomLeftRadius: ot,
    width: ot,
    maxWidth: ot,
    height: ot,
    maxHeight: ot,
    top: ot,
    right: ot,
    bottom: ot,
    left: ot,
    inset: ot,
    insetBlock: ot,
    insetBlockStart: ot,
    insetBlockEnd: ot,
    insetInline: ot,
    insetInlineStart: ot,
    insetInlineEnd: ot,
    padding: ot,
    paddingTop: ot,
    paddingRight: ot,
    paddingBottom: ot,
    paddingLeft: ot,
    paddingBlock: ot,
    paddingBlockStart: ot,
    paddingBlockEnd: ot,
    paddingInline: ot,
    paddingInlineStart: ot,
    paddingInlineEnd: ot,
    margin: ot,
    marginTop: ot,
    marginRight: ot,
    marginBottom: ot,
    marginLeft: ot,
    marginBlock: ot,
    marginBlockStart: ot,
    marginBlockEnd: ot,
    marginInline: ot,
    marginInlineStart: ot,
    marginInlineEnd: ot,
    fontSize: ot,
    backgroundPositionX: ot,
    backgroundPositionY: ot,
    ..._O,
    zIndex: O0,
    fillOpacity: mr,
    strokeOpacity: mr,
    numOctaves: O0,
  },
  zO = {
    ...El,
    color: Zt,
    backgroundColor: Zt,
    outlineColor: Zt,
    fill: Zt,
    stroke: Zt,
    borderColor: Zt,
    borderTopColor: Zt,
    borderRightColor: Zt,
    borderBottomColor: Zt,
    borderLeftColor: Zt,
    filter: yd,
    WebkitFilter: yd,
    mask: gd,
    WebkitMask: gd,
  },
  C1 = (e) => zO[e],
  VO = new Set([yd, gd]);
function R1(e, i) {
  let a = C1(e);
  return (
    VO.has(a) || (a = sn),
    a.getAnimatableNone ? a.getAnimatableNone(i) : void 0
  );
}
const LO = new Set(["auto", "none", "0"]);
function kO(e, i, a) {
  let r = 0,
    l;
  for (; r < e.length && !l;) {
    const u = e[r];
    (typeof u == "string" && !LO.has(u) && Qs(u).values.length && (l = e[r]),
      r++);
  }
  if (l && a) for (const u of i) e[u] = R1(a, l);
}
class PO extends oh {
  constructor(i, a, r, l, u) {
    super(i, a, r, l, u, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, element: a, name: r } = this;
    if (!a || !a.current) return;
    super.readKeyframes();
    for (let y = 0; y < i.length; y++) {
      let g = i[y];
      if (typeof g == "string" && ((g = g.trim()), th(g))) {
        const x = b1(g, a.current);
        (x !== void 0 && (i[y] = x),
          y === i.length - 1 && (this.finalKeyframe = g));
      }
    }
    if ((this.resolveNoneKeyframes(), !x1.has(r) || i.length !== 2)) return;
    const [l, u] = i,
      f = M0(l),
      h = M0(u),
      p = m0(l),
      m = m0(u);
    if (p !== m && gi[r]) {
      this.needsMeasurement = !0;
      return;
    }
    if (f !== h)
      if (T0(f) && T0(h))
        for (let y = 0; y < i.length; y++) {
          const g = i[y];
          typeof g == "string" && (i[y] = parseFloat(g));
        }
      else gi[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: i, name: a } = this,
      r = [];
    for (let l = 0; l < i.length; l++) (i[l] === null || OO(i[l])) && r.push(l);
    r.length && kO(i, r, a);
  }
  measureInitialState() {
    const { element: i, unresolvedKeyframes: a, name: r } = this;
    if (!i || !i.current) return;
    (r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = gi[r](
        i.measureViewportBox(),
        window.getComputedStyle(i.current),
      )),
      (a[0] = this.measuredOrigin));
    const l = a[a.length - 1];
    l !== void 0 && i.getValue(r, l).jump(l, !1);
  }
  measureEndState() {
    const { element: i, name: a, unresolvedKeyframes: r } = this;
    if (!i || !i.current) return;
    const l = i.getValue(a);
    l && l.jump(this.measuredOrigin, !1);
    const u = r.length - 1,
      f = r[u];
    ((r[u] = gi[a](i.measureViewportBox(), window.getComputedStyle(i.current))),
      f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
      this.removedTransforms?.length &&
        this.removedTransforms.forEach(([h, p]) => {
          i.getValue(h).set(p);
        }),
      this.resolveNoneKeyframes());
  }
}
const mh = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius",
];
function ph(e, i, a) {
  if (e == null) return [];
  if (e instanceof EventTarget) return [e];
  if (typeof e == "string") {
    const l = document.querySelectorAll(e);
    return l ? Array.from(l) : [];
  }
  return Array.from(e).filter((r) => r != null);
}
const vd = (e, i) => (i && typeof e == "number" ? i.transform(e) : e);
function lr(e) {
  return Vx(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
const { schedule: Zs, cancel: M1 } = Qx(queueMicrotask, !1),
  tn = { x: !1, y: !1 };
function O1() {
  return tn.x || tn.y;
}
function BO(e) {
  return e === "x" || e === "y"
    ? tn[e]
      ? null
      : ((tn[e] = !0),
        () => {
          tn[e] = !1;
        })
    : tn.x || tn.y
      ? null
      : ((tn.x = tn.y = !0),
        () => {
          tn.x = tn.y = !1;
        });
}
function D1(e, i) {
  const a = ph(e),
    r = new AbortController(),
    l = { passive: !0, ...i, signal: r.signal };
  return [a, l, () => r.abort()];
}
function UO(e) {
  return !(e.pointerType === "touch" || O1());
}
function HO(e, i, a = {}) {
  const [r, l, u] = D1(e, a);
  return (
    r.forEach((f) => {
      let h = !1,
        p = !1,
        m;
      const y = () => {
          f.removeEventListener("pointerleave", E);
        },
        g = (R) => {
          (m && (m(R), (m = void 0)), y());
        },
        x = (R) => {
          ((h = !1),
            window.removeEventListener("pointerup", x),
            window.removeEventListener("pointercancel", x),
            p && ((p = !1), g(R)));
        },
        T = () => {
          ((h = !0),
            window.addEventListener("pointerup", x, l),
            window.addEventListener("pointercancel", x, l));
        },
        E = (R) => {
          if (R.pointerType !== "touch") {
            if (h) {
              p = !0;
              return;
            }
            g(R);
          }
        },
        C = (R) => {
          if (!UO(R)) return;
          p = !1;
          const D = i(f, R);
          typeof D == "function" &&
            ((m = D), f.addEventListener("pointerleave", E, l));
        };
      (f.addEventListener("pointerenter", C, l),
        f.addEventListener("pointerdown", T, l));
    }),
    u
  );
}
const N1 = (e, i) => (i ? (e === i ? !0 : N1(e, i.parentElement)) : !1),
  yh = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  qO = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function YO(e) {
  return qO.has(e.tagName) || e.isContentEditable === !0;
}
const GO = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function XO(e) {
  return GO.has(e.tagName) || e.isContentEditable === !0;
}
const ol = new WeakSet();
function D0(e) {
  return (i) => {
    i.key === "Enter" && e(i);
  };
}
function Rf(e, i) {
  e.dispatchEvent(
    new PointerEvent("pointer" + i, { isPrimary: !0, bubbles: !0 }),
  );
}
const FO = (e, i) => {
  const a = e.currentTarget;
  if (!a) return;
  const r = D0(() => {
    if (ol.has(a)) return;
    Rf(a, "down");
    const l = D0(() => {
        Rf(a, "up");
      }),
      u = () => Rf(a, "cancel");
    (a.addEventListener("keyup", l, i), a.addEventListener("blur", u, i));
  });
  (a.addEventListener("keydown", r, i),
    a.addEventListener("blur", () => a.removeEventListener("keydown", r), i));
};
function N0(e) {
  return yh(e) && !O1();
}
const j0 = new WeakSet();
function KO(e, i, a = {}) {
  const [r, l, u] = D1(e, a),
    f = (h) => {
      const p = h.currentTarget;
      if (!N0(h) || j0.has(h)) return;
      (ol.add(p), a.stopPropagation && j0.add(h));
      const m = i(p, h),
        y = { ...l, capture: !0 },
        g = (E, C) => {
          (window.removeEventListener("pointerup", x, y),
            window.removeEventListener("pointercancel", T, y),
            ol.has(p) && ol.delete(p),
            N0(E) && typeof m == "function" && m(E, { success: C }));
        },
        x = (E) => {
          g(
            E,
            p === window ||
              p === document ||
              a.useGlobalTarget ||
              N1(p, E.target),
          );
        },
        T = (E) => {
          g(E, !1);
        };
      (window.addEventListener("pointerup", x, y),
        window.addEventListener("pointercancel", T, y));
    };
  return (
    r.forEach((h) => {
      ((a.useGlobalTarget ? window : h).addEventListener("pointerdown", f, l),
        lr(h) &&
          (h.addEventListener("focus", (m) => FO(m, l)),
          !YO(h) && !h.hasAttribute("tabindex") && (h.tabIndex = 0)));
    }),
    u
  );
}
function gh(e) {
  return Vx(e) && "ownerSVGElement" in e;
}
const ll = new WeakMap();
let cl;
const j1 = (e, i, a) => (r, l) =>
    l && l[0]
      ? l[0][e + "Size"]
      : gh(r) && "getBBox" in r
        ? r.getBBox()[i]
        : r[a],
  QO = j1("inline", "width", "offsetWidth"),
  ZO = j1("block", "height", "offsetHeight");
function WO({ target: e, borderBoxSize: i }) {
  ll.get(e)?.forEach((a) => {
    a(e, {
      get width() {
        return QO(e, i);
      },
      get height() {
        return ZO(e, i);
      },
    });
  });
}
function IO(e) {
  e.forEach(WO);
}
function $O() {
  typeof ResizeObserver > "u" || (cl = new ResizeObserver(IO));
}
function JO(e, i) {
  cl || $O();
  const a = ph(e);
  return (
    a.forEach((r) => {
      let l = ll.get(r);
      (l || ((l = new Set()), ll.set(r, l)), l.add(i), cl?.observe(r));
    }),
    () => {
      a.forEach((r) => {
        const l = ll.get(r);
        (l?.delete(i), l?.size || cl?.unobserve(r));
      });
    }
  );
}
const ul = new Set();
let Hs;
function tD() {
  ((Hs = () => {
    const e = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    ul.forEach((i) => i(e));
  }),
    window.addEventListener("resize", Hs));
}
function eD(e) {
  return (
    ul.add(e),
    Hs || tD(),
    () => {
      (ul.delete(e),
        !ul.size &&
          typeof Hs == "function" &&
          (window.removeEventListener("resize", Hs), (Hs = void 0)));
    }
  );
}
function bd(e, i) {
  return typeof e == "function" ? eD(e) : JO(e, i);
}
function _1(e, i) {
  let a;
  const r = () => {
    const { currentTime: l } = i,
      f = (l === null ? 0 : l.value) / 100;
    (a !== f && e(f), (a = f));
  };
  return (At.preUpdate(r, !0), () => Qe(r));
}
function nD(e) {
  return gh(e) && e.tagName === "svg";
}
function iD(...e) {
  const i = !Array.isArray(e[0]),
    a = i ? 0 : -1,
    r = e[0 + a],
    l = e[1 + a],
    u = e[2 + a],
    f = e[3 + a],
    h = ah(l, u, f);
  return i ? h(r) : h;
}
function sD(e, i, a = {}) {
  const r = e.get();
  let l = null,
    u = r,
    f;
  const h = typeof r == "string" ? r.replace(/[\d.-]/g, "") : void 0,
    p = () => {
      (l && (l.stop(), (l = null)), (e.animation = void 0));
    },
    m = () => {
      const g = _0(e.get()),
        x = _0(u);
      if (g === x) {
        p();
        return;
      }
      const T = l ? l.getGeneratorVelocity() : e.getVelocity();
      (p(),
        (l = new pr({
          keyframes: [g, x],
          velocity: T,
          type: "spring",
          restDelta: 0.001,
          restSpeed: 0.01,
          ...a,
          onUpdate: f,
        })));
    },
    y = () => {
      (m(),
        (e.animation = l ?? void 0),
        e.events.animationStart?.notify(),
        l?.then(() => {
          ((e.animation = void 0), e.events.animationComplete?.notify());
        }));
    };
  if (
    (e.attach((g, x) => {
      ((u = g), (f = (T) => x(Mf(T, h))), At.postRender(y));
    }, p),
    ee(i))
  ) {
    let g = a.skipInitialAnimation === !0;
    const x = i.on("change", (E) => {
        g ? ((g = !1), e.jump(Mf(E, h), !1)) : e.set(Mf(E, h));
      }),
      T = e.on("destroy", x);
    return () => {
      (x(), T());
    };
  }
  return p;
}
function Mf(e, i) {
  return i ? e + i : e;
}
function _0(e) {
  return typeof e == "number" ? e : parseFloat(e);
}
const aD = [...A1, Zt, sn],
  rD = (e) => aD.find(E1(e)),
  z0 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  qs = () => ({ x: z0(), y: z0() }),
  V0 = () => ({ min: 0, max: 0 }),
  Jt = () => ({ x: V0(), y: V0() }),
  oD = new WeakMap();
function Xl(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function yr(e) {
  return typeof e == "string" || Array.isArray(e);
}
const vh = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  bh = ["initial", ...vh];
function Fl(e) {
  return Xl(e.animate) || bh.some((i) => yr(e[i]));
}
function z1(e) {
  return !!(Fl(e) || e.variants);
}
function lD(e, i, a) {
  for (const r in i) {
    const l = i[r],
      u = a[r];
    if (ee(l)) e.addValue(r, l);
    else if (ee(u)) e.addValue(r, nn(l, { owner: e }));
    else if (u !== l)
      if (e.hasValue(r)) {
        const f = e.getValue(r);
        f.liveStyle === !0 ? f.jump(l) : f.hasAnimated || f.set(l);
      } else {
        const f = e.getStaticValue(r);
        e.addValue(r, nn(f !== void 0 ? f : l, { owner: e }));
      }
  }
  for (const r in a) i[r] === void 0 && e.removeValue(r);
  return i;
}
const xd = { current: null },
  V1 = { current: !1 },
  cD = typeof window < "u";
function uD() {
  if (((V1.current = !0), !!cD))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        i = () => (xd.current = e.matches);
      (e.addEventListener("change", i), i());
    } else xd.current = !1;
}
const L0 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let Al = {};
function L1(e) {
  Al = e;
}
function fD() {
  return Al;
}
class dD {
  scrapeMotionValuesFromProps(i, a, r) {
    return {};
  }
  constructor(
    {
      parent: i,
      props: a,
      presenceContext: r,
      reducedMotionConfig: l,
      skipAnimations: u,
      blockInitialAnimation: f,
      visualState: h,
    },
    p = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = oh),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const T = pe.now();
        this.renderScheduledAt < T &&
          ((this.renderScheduledAt = T), At.render(this.render, !1, !0));
      }));
    const { latestValues: m, renderState: y } = h;
    ((this.latestValues = m),
      (this.baseTarget = { ...m }),
      (this.initialValues = a.initial ? { ...m } : {}),
      (this.renderState = y),
      (this.parent = i),
      (this.props = a),
      (this.presenceContext = r),
      (this.depth = i ? i.depth + 1 : 0),
      (this.reducedMotionConfig = l),
      (this.skipAnimationsConfig = u),
      (this.options = p),
      (this.blockInitialAnimation = !!f),
      (this.isControllingVariants = Fl(a)),
      (this.isVariantNode = z1(a)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(i && i.current)));
    const { willChange: g, ...x } = this.scrapeMotionValuesFromProps(
      a,
      {},
      this,
    );
    for (const T in x) {
      const E = x[T];
      m[T] !== void 0 && ee(E) && E.set(m[T]);
    }
  }
  mount(i) {
    if (this.hasBeenMounted)
      for (const a in this.initialValues)
        (this.values.get(a)?.jump(this.initialValues[a]),
          (this.latestValues[a] = this.initialValues[a]));
    ((this.current = i),
      oD.set(i, this),
      this.projection && !this.projection.instance && this.projection.mount(i),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((a, r) => this.bindToMotionValue(r, a)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
          ? (this.shouldReduceMotion = !0)
          : (V1.current || uD(), (this.shouldReduceMotion = xd.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      this.parent?.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0));
  }
  unmount() {
    (this.projection && this.projection.unmount(),
      Qe(this.notifyUpdate),
      Qe(this.render),
      this.valueSubscriptions.forEach((i) => i()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent?.removeChild(this));
    for (const i in this.events) this.events[i].clear();
    for (const i in this.features) {
      const a = this.features[i];
      a && (a.unmount(), (a.isMounted = !1));
    }
    this.current = null;
  }
  addChild(i) {
    (this.children.add(i),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(i));
  }
  removeChild(i) {
    (this.children.delete(i),
      this.enteringChildren && this.enteringChildren.delete(i));
  }
  bindToMotionValue(i, a) {
    if (
      (this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)(),
      a.accelerate && y1.has(i) && this.current instanceof HTMLElement)
    ) {
      const {
          factory: f,
          keyframes: h,
          times: p,
          ease: m,
          duration: y,
        } = a.accelerate,
        g = new m1({
          element: this.current,
          name: i,
          keyframes: h,
          times: p,
          ease: m,
          duration: Le(y),
        }),
        x = f(g);
      this.valueSubscriptions.set(i, () => {
        (x(), g.cancel());
      });
      return;
    }
    const r = ta.has(i);
    r && this.onBindTransform && this.onBindTransform();
    const l = a.on("change", (f) => {
      ((this.latestValues[i] = f),
        this.props.onUpdate && At.preRender(this.notifyUpdate),
        r && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let u;
    (typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (u = window.MotionCheckAppearSync(this, i, a)),
      this.valueSubscriptions.set(i, () => {
        (l(), u && u());
      }));
  }
  sortNodePosition(i) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== i.type
      ? 0
      : this.sortInstanceNodePosition(this.current, i.current);
  }
  updateFeatures() {
    let i = "animation";
    for (i in Al) {
      const a = Al[i];
      if (!a) continue;
      const { isEnabled: r, Feature: l } = a;
      if (
        (!this.features[i] &&
          l &&
          r(this.props) &&
          (this.features[i] = new l(this)),
        this.features[i])
      ) {
        const u = this.features[i];
        u.isMounted ? u.update() : (u.mount(), (u.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Jt();
  }
  getStaticValue(i) {
    return this.latestValues[i];
  }
  setStaticValue(i, a) {
    this.latestValues[i] = a;
  }
  update(i, a) {
    ((i.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = i),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = a));
    for (let r = 0; r < L0.length; r++) {
      const l = L0[r];
      this.propEventSubscriptions[l] &&
        (this.propEventSubscriptions[l](),
        delete this.propEventSubscriptions[l]);
      const u = "on" + l,
        f = i[u];
      f && (this.propEventSubscriptions[l] = this.on(l, f));
    }
    ((this.prevMotionValues = lD(
      this,
      this.scrapeMotionValuesFromProps(i, this.prevProps || {}, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(i) {
    return this.props.variants ? this.props.variants[i] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(i) {
    const a = this.getClosestVariantNode();
    if (a)
      return (
        a.variantChildren && a.variantChildren.add(i),
        () => a.variantChildren.delete(i)
      );
  }
  addValue(i, a) {
    const r = this.values.get(i);
    a !== r &&
      (r && this.removeValue(i),
      this.bindToMotionValue(i, a),
      this.values.set(i, a),
      (this.latestValues[i] = a.get()));
  }
  removeValue(i) {
    this.values.delete(i);
    const a = this.valueSubscriptions.get(i);
    (a && (a(), this.valueSubscriptions.delete(i)),
      delete this.latestValues[i],
      this.removeValueFromRenderState(i, this.renderState));
  }
  hasValue(i) {
    return this.values.has(i);
  }
  getValue(i, a) {
    if (this.props.values && this.props.values[i]) return this.props.values[i];
    let r = this.values.get(i);
    return (
      r === void 0 &&
        a !== void 0 &&
        ((r = nn(a === null ? void 0 : a, { owner: this })),
        this.addValue(i, r)),
      r
    );
  }
  readValue(i, a) {
    let r =
      this.latestValues[i] !== void 0 || !this.current
        ? this.latestValues[i]
        : (this.getBaseTargetFromProps(this.props, i) ??
          this.readValueFromInstance(this.current, i, this.options));
    return (
      r != null &&
        (typeof r == "string" && (zx(r) || Lx(r))
          ? (r = parseFloat(r))
          : !rD(r) && sn.test(a) && (r = R1(i, a)),
        this.setBaseTarget(i, ee(r) ? r.get() : r)),
      ee(r) ? r.get() : r
    );
  }
  setBaseTarget(i, a) {
    this.baseTarget[i] = a;
  }
  getBaseTarget(i) {
    const { initial: a } = this.props;
    let r;
    if (typeof a == "string" || typeof a == "object") {
      const u = dh(this.props, a, this.presenceContext?.custom);
      u && (r = u[i]);
    }
    if (a && r !== void 0) return r;
    const l = this.getBaseTargetFromProps(this.props, i);
    return l !== void 0 && !ee(l)
      ? l
      : this.initialValues[i] !== void 0 && r === void 0
        ? void 0
        : this.baseTarget[i];
  }
  on(i, a) {
    return (
      this.events[i] || (this.events[i] = new Wd()),
      this.events[i].add(a)
    );
  }
  notify(i, ...a) {
    this.events[i] && this.events[i].notify(...a);
  }
  scheduleRenderMicrotask() {
    Zs.render(this.render);
  }
}
class k1 extends dD {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = PO));
  }
  sortInstanceNodePosition(i, a) {
    return i.compareDocumentPosition(a) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(i, a) {
    const r = i.style;
    return r ? r[a] : void 0;
  }
  removeValueFromRenderState(i, { vars: a, style: r }) {
    (delete a[i], delete r[i]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: i } = this.props;
    ee(i) &&
      (this.childSubscription = i.on("change", (a) => {
        this.current && (this.current.textContent = `${a}`);
      }));
  }
}
class Ti {
  constructor(i) {
    ((this.isMounted = !1), (this.node = i));
  }
  update() {}
}
function P1({ top: e, left: i, right: a, bottom: r }) {
  return { x: { min: i, max: a }, y: { min: e, max: r } };
}
function hD({ x: e, y: i }) {
  return { top: i.min, right: e.max, bottom: i.max, left: e.min };
}
function mD(e, i) {
  if (!i) return e;
  const a = i({ x: e.left, y: e.top }),
    r = i({ x: e.right, y: e.bottom });
  return { top: a.y, left: a.x, bottom: r.y, right: r.x };
}
function Of(e) {
  return e === void 0 || e === 1;
}
function wd({ scale: e, scaleX: i, scaleY: a }) {
  return !Of(e) || !Of(i) || !Of(a);
}
function Xi(e) {
  return (
    wd(e) ||
    B1(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function B1(e) {
  return k0(e.x) || k0(e.y);
}
function k0(e) {
  return e && e !== "0%";
}
function Cl(e, i, a) {
  const r = e - a,
    l = i * r;
  return a + l;
}
function P0(e, i, a, r, l) {
  return (l !== void 0 && (e = Cl(e, l, r)), Cl(e, a, r) + i);
}
function Sd(e, i = 0, a = 1, r, l) {
  ((e.min = P0(e.min, i, a, r, l)), (e.max = P0(e.max, i, a, r, l)));
}
function U1(e, { x: i, y: a }) {
  (Sd(e.x, i.translate, i.scale, i.originPoint),
    Sd(e.y, a.translate, a.scale, a.originPoint));
}
const B0 = 0.999999999999,
  U0 = 1.0000000000001;
function pD(e, i, a, r = !1) {
  const l = a.length;
  if (!l) return;
  i.x = i.y = 1;
  let u, f;
  for (let h = 0; h < l; h++) {
    ((u = a[h]), (f = u.projectionDelta));
    const { visualElement: p } = u.options;
    (p && p.props.style && p.props.style.display === "contents") ||
      (r &&
        u.options.layoutScroll &&
        u.scroll &&
        u !== u.root &&
        (vn(e.x, -u.scroll.offset.x), vn(e.y, -u.scroll.offset.y)),
      f && ((i.x *= f.x.scale), (i.y *= f.y.scale), U1(e, f)),
      r && Xi(u.latestValues) && fl(e, u.latestValues, u.layout?.layoutBox));
  }
  (i.x < U0 && i.x > B0 && (i.x = 1), i.y < U0 && i.y > B0 && (i.y = 1));
}
function vn(e, i) {
  ((e.min += i), (e.max += i));
}
function H0(e, i, a, r, l = 0.5) {
  const u = Lt(e.min, e.max, l);
  Sd(e, i, a, u, r);
}
function q0(e, i) {
  return typeof e == "string" ? (parseFloat(e) / 100) * (i.max - i.min) : e;
}
function fl(e, i, a) {
  const r = a ?? e;
  (H0(e.x, q0(i.x, r.x), i.scaleX, i.scale, i.originX),
    H0(e.y, q0(i.y, r.y), i.scaleY, i.scale, i.originY));
}
function H1(e, i) {
  return P1(mD(e.getBoundingClientRect(), i));
}
function yD(e, i, a) {
  const r = H1(e, a),
    { scroll: l } = i;
  return (l && (vn(r.x, l.offset.x), vn(r.y, l.offset.y)), r);
}
const gD = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  vD = Js.length;
function bD(e, i, a) {
  let r = "",
    l = !0;
  for (let f = 0; f < vD; f++) {
    const h = Js[f],
      p = e[h];
    if (p === void 0) continue;
    let m = !0;
    if (typeof p == "number") m = p === (h.startsWith("scale") ? 1 : 0);
    else {
      const y = parseFloat(p);
      m = h.startsWith("scale") ? y === 1 : y === 0;
    }
    if (!m || a) {
      const y = vd(p, El[h]);
      if (!m) {
        l = !1;
        const g = gD[h] || h;
        r += `${g}(${y}) `;
      }
      a && (i[h] = y);
    }
  }
  const u = e.pathRotation;
  return (
    u && ((l = !1), (r += `rotate(${vd(u, El.pathRotation)}) `)),
    (r = r.trim()),
    a ? (r = a(i, l ? "" : r)) : l && (r = "none"),
    r
  );
}
function xh(e, i, a) {
  const { style: r, vars: l, transformOrigin: u } = e;
  let f = !1,
    h = !1;
  for (const p in i) {
    const m = i[p];
    if (ta.has(p)) {
      f = !0;
      continue;
    } else if (Wx(p)) {
      l[p] = m;
      continue;
    } else {
      const y = vd(m, El[p]);
      p.startsWith("origin") ? ((h = !0), (u[p] = y)) : (r[p] = y);
    }
  }
  if (
    (i.transform ||
      (f || a
        ? (r.transform = bD(i, e.transform, a))
        : r.transform && (r.transform = "none")),
    h)
  ) {
    const { originX: p = "50%", originY: m = "50%", originZ: y = 0 } = u;
    r.transformOrigin = `${p} ${m} ${y}`;
  }
}
function q1(e, { style: i, vars: a }, r, l) {
  const u = e.style;
  let f;
  for (f in i) u[f] = i[f];
  l?.applyProjectionStyles(u, r);
  for (f in a) u.setProperty(f, a[f]);
}
function Y0(e, i) {
  return i.max === i.min ? 0 : (e / (i.max - i.min)) * 100;
}
const er = {
    correct: (e, i) => {
      if (!i.target) return e;
      if (typeof e == "string")
        if (ot.test(e)) e = parseFloat(e);
        else return e;
      const a = Y0(e, i.target.x),
        r = Y0(e, i.target.y);
      return `${a}% ${r}%`;
    },
  },
  xD = {
    correct: (e, { treeScale: i, projectionDelta: a }) => {
      const r = e,
        l = sn.parse(e);
      if (l.length > 5) return r;
      const u = sn.createTransformer(e),
        f = typeof l[0] != "number" ? 1 : 0,
        h = a.x.scale * i.x,
        p = a.y.scale * i.y;
      ((l[0 + f] /= h), (l[1 + f] /= p));
      const m = Lt(h, p, 0.5);
      return (
        typeof l[2 + f] == "number" && (l[2 + f] /= m),
        typeof l[3 + f] == "number" && (l[3 + f] /= m),
        u(l)
      );
    },
  },
  Td = {
    borderRadius: { ...er, applyTo: [...mh] },
    borderTopLeftRadius: er,
    borderTopRightRadius: er,
    borderBottomLeftRadius: er,
    borderBottomRightRadius: er,
    boxShadow: xD,
  };
function Y1(e, { layout: i, layoutId: a }) {
  return (
    ta.has(e) ||
    e.startsWith("origin") ||
    ((i || a !== void 0) && (!!Td[e] || e === "opacity"))
  );
}
function wh(e, i, a) {
  const r = e.style,
    l = i?.style,
    u = {};
  if (!r) return u;
  for (const f in r)
    (ee(r[f]) ||
      (l && ee(l[f])) ||
      Y1(f, e) ||
      a?.getValue(f)?.liveStyle !== void 0) &&
      (u[f] = r[f]);
  return u;
}
function wD(e) {
  return window.getComputedStyle(e);
}
class SD extends k1 {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = q1));
  }
  readValueFromInstance(i, a) {
    if (ta.has(a)) return this.projection?.isProjecting ? od(a) : HM(i, a);
    {
      const r = wD(i),
        l = (Wx(a) ? r.getPropertyValue(a) : r[a]) || 0;
      return typeof l == "string" ? l.trim() : l;
    }
  }
  measureInstanceViewportBox(i, { transformPagePoint: a }) {
    return H1(i, a);
  }
  build(i, a, r) {
    xh(i, a, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(i, a, r) {
    return wh(i, a, r);
  }
}
const TD = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  ED = { offset: "strokeDashoffset", array: "strokeDasharray" };
function AD(e, i, a = 1, r = 0, l = !0) {
  e.pathLength = 1;
  const u = l ? TD : ED;
  ((e[u.offset] = `${-r}`), (e[u.array] = `${i} ${a}`));
}
const CD = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function G1(
  e,
  {
    attrX: i,
    attrY: a,
    attrScale: r,
    pathLength: l,
    pathSpacing: u = 1,
    pathOffset: f = 0,
    ...h
  },
  p,
  m,
  y,
) {
  if ((xh(e, h, m), p)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  const { attrs: g, style: x } = e;
  (g.transform && ((x.transform = g.transform), delete g.transform),
    (x.transform || g.transformOrigin) &&
      ((x.transformOrigin = g.transformOrigin ?? "50% 50%"),
      delete g.transformOrigin),
    x.transform &&
      ((x.transformBox = y?.transformBox ?? "fill-box"),
      delete g.transformBox));
  for (const T of CD) g[T] !== void 0 && ((x[T] = g[T]), delete g[T]);
  (i !== void 0 && (g.x = i),
    a !== void 0 && (g.y = a),
    r !== void 0 && (g.scale = r),
    l !== void 0 && AD(g, l, u, f, !1));
}
const X1 = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]),
  F1 = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function RD(e, i, a, r) {
  q1(e, i, void 0, r);
  for (const l in i.attrs) e.setAttribute(X1.has(l) ? l : hh(l), i.attrs[l]);
}
function K1(e, i, a) {
  const r = wh(e, i, a);
  for (const l in e)
    if (ee(e[l]) || ee(i[l])) {
      const u =
        Js.indexOf(l) !== -1
          ? "attr" + l.charAt(0).toUpperCase() + l.substring(1)
          : l;
      r[u] = e[l];
    }
  return r;
}
class MD extends k1 {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Jt));
  }
  getBaseTargetFromProps(i, a) {
    return i[a];
  }
  readValueFromInstance(i, a) {
    if (ta.has(a)) {
      const r = C1(a);
      return (r && r.default) || 0;
    }
    return ((a = X1.has(a) ? a : hh(a)), i.getAttribute(a));
  }
  scrapeMotionValuesFromProps(i, a, r) {
    return K1(i, a, r);
  }
  build(i, a, r) {
    G1(i, a, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(i, a, r, l) {
    RD(i, a, r, l);
  }
  mount(i) {
    ((this.isSVGTag = F1(i.tagName)), super.mount(i));
  }
}
const OD = bh.length;
function Q1(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const a = e.parent ? Q1(e.parent) || {} : {};
    return (e.props.initial !== void 0 && (a.initial = e.props.initial), a);
  }
  const i = {};
  for (let a = 0; a < OD; a++) {
    const r = bh[a],
      l = e.props[r];
    (yr(l) || l === !1) && (i[r] = l);
  }
  return i;
}
function Z1(e, i) {
  if (!Array.isArray(i)) return !1;
  const a = i.length;
  if (a !== e.length) return !1;
  for (let r = 0; r < a; r++) if (i[r] !== e[r]) return !1;
  return !0;
}
const DD = [...vh].reverse(),
  ND = vh.length;
function jD(e) {
  return (i) =>
    Promise.all(i.map(({ animation: a, options: r }) => RO(e, a, r)));
}
function _D(e) {
  let i = jD(e),
    a = G0(),
    r = !0,
    l = !1;
  const u = (m) => (y, g) => {
    const x = Zi(e, g, m === "exit" ? e.presenceContext?.custom : void 0);
    if (x) {
      const { transition: T, transitionEnd: E, ...C } = x;
      y = { ...y, ...C, ...E };
    }
    return y;
  };
  function f(m) {
    i = m(e);
  }
  function h(m) {
    const { props: y } = e,
      g = Q1(e.parent) || {},
      x = [],
      T = new Set();
    let E = {},
      C = 1 / 0;
    for (let D = 0; D < ND; D++) {
      const N = DD[D],
        j = a[N],
        V = y[N] !== void 0 ? y[N] : g[N],
        U = yr(V),
        X = N === m ? j.isActive : null;
      X === !1 && (C = D);
      let Z = V === g[N] && V !== y[N] && U;
      if (
        (Z && (r || l) && e.manuallyAnimateOnMount && (Z = !1),
        (j.protectedKeys = { ...E }),
        (!j.isActive && X === null) ||
          (!V && !j.prevProp) ||
          Xl(V) ||
          typeof V == "boolean")
      )
        continue;
      if (N === "exit" && j.isActive && X !== !0) {
        j.prevResolvedValues && (E = { ...E, ...j.prevResolvedValues });
        continue;
      }
      const P = zD(j.prevProp, V);
      let I = P || (N === m && j.isActive && !Z && U) || (D > C && U),
        W = !1;
      const $ = Array.isArray(V) ? V : [V];
      let st = $.reduce(u(N), {});
      X === !1 && (st = {});
      const { prevResolvedValues: gt = {} } = j,
        tt = { ...gt, ...st },
        ut = (F) => {
          ((I = !0),
            T.has(F) && ((W = !0), T.delete(F)),
            (j.needsAnimating[F] = !0));
          const nt = e.getValue(F);
          nt && (nt.liveStyle = !1);
        };
      for (const F in tt) {
        const nt = st[F],
          A = gt[F];
        if (E.hasOwnProperty(F)) continue;
        let Y = !1;
        (hd(nt) && hd(A) ? (Y = !Z1(nt, A) || P) : (Y = nt !== A),
          Y
            ? nt != null
              ? ut(F)
              : T.add(F)
            : nt !== void 0 && T.has(F)
              ? ut(F)
              : (j.protectedKeys[F] = !0));
      }
      ((j.prevProp = V),
        (j.prevResolvedValues = st),
        j.isActive && (E = { ...E, ...st }),
        (r || l) && e.blockInitialAnimation && (I = !1));
      const z = Z && P;
      I &&
        (!z || W) &&
        x.push(
          ...$.map((F) => {
            const nt = { type: N };
            if (
              typeof F == "string" &&
              (r || l) &&
              !z &&
              e.manuallyAnimateOnMount &&
              e.parent
            ) {
              const { parent: A } = e,
                Y = Zi(A, F);
              if (A.enteringChildren && Y) {
                const { delayChildren: et } = Y.transition || {};
                nt.delay = g1(A.enteringChildren, e, et);
              }
            }
            return { animation: F, options: nt };
          }),
        );
    }
    if (T.size) {
      const D = {};
      if (typeof y.initial != "boolean") {
        const N = Zi(e, Array.isArray(y.initial) ? y.initial[0] : y.initial);
        N && N.transition && (D.transition = N.transition);
      }
      (T.forEach((N) => {
        const j = e.getBaseTarget(N),
          V = e.getValue(N);
        (V && (V.liveStyle = !0), (D[N] = j ?? null));
      }),
        x.push({ animation: D }));
    }
    let R = !!x.length;
    return (
      r &&
        (y.initial === !1 || y.initial === y.animate) &&
        !e.manuallyAnimateOnMount &&
        (R = !1),
      (r = !1),
      (l = !1),
      R ? i(x) : Promise.resolve()
    );
  }
  function p(m, y) {
    if (a[m].isActive === y) return Promise.resolve();
    (e.variantChildren?.forEach((x) => x.animationState?.setActive(m, y)),
      (a[m].isActive = y));
    const g = h(m);
    for (const x in a) a[x].protectedKeys = {};
    return g;
  }
  return {
    animateChanges: h,
    setActive: p,
    setAnimateFunction: f,
    getState: () => a,
    reset: () => {
      ((a = G0()), (l = !0));
    },
  };
}
function zD(e, i) {
  return typeof i == "string" ? i !== e : Array.isArray(i) ? !Z1(i, e) : !1;
}
function Gi(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function G0() {
  return {
    animate: Gi(!0),
    whileInView: Gi(),
    whileHover: Gi(),
    whileTap: Gi(),
    whileDrag: Gi(),
    whileFocus: Gi(),
    exit: Gi(),
  };
}
function Ed(e, i) {
  ((e.min = i.min), (e.max = i.max));
}
function Je(e, i) {
  (Ed(e.x, i.x), Ed(e.y, i.y));
}
function X0(e, i) {
  ((e.translate = i.translate),
    (e.scale = i.scale),
    (e.originPoint = i.originPoint),
    (e.origin = i.origin));
}
const W1 = 1e-4,
  VD = 1 - W1,
  LD = 1 + W1,
  I1 = 0.01,
  kD = 0 - I1,
  PD = 0 + I1;
function ye(e) {
  return e.max - e.min;
}
function BD(e, i, a) {
  return Math.abs(e - i) <= a;
}
function F0(e, i, a, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = Lt(i.min, i.max, e.origin)),
    (e.scale = ye(a) / ye(i)),
    (e.translate = Lt(a.min, a.max, e.origin) - e.originPoint),
    ((e.scale >= VD && e.scale <= LD) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= kD && e.translate <= PD) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function cr(e, i, a, r) {
  (F0(e.x, i.x, a.x, r ? r.originX : void 0),
    F0(e.y, i.y, a.y, r ? r.originY : void 0));
}
function K0(e, i, a, r = 0) {
  const l = r ? Lt(a.min, a.max, r) : a.min;
  ((e.min = l + i.min), (e.max = e.min + ye(i)));
}
function UD(e, i, a, r) {
  (K0(e.x, i.x, a.x, r?.x), K0(e.y, i.y, a.y, r?.y));
}
function Q0(e, i, a, r = 0) {
  const l = r ? Lt(a.min, a.max, r) : a.min;
  ((e.min = i.min - l), (e.max = e.min + ye(i)));
}
function Rl(e, i, a, r) {
  (Q0(e.x, i.x, a.x, r?.x), Q0(e.y, i.y, a.y, r?.y));
}
function Z0(e, i, a, r, l) {
  return (
    (e -= i),
    (e = Cl(e, 1 / a, r)),
    l !== void 0 && (e = Cl(e, 1 / l, r)),
    e
  );
}
function HD(e, i = 0, a = 1, r = 0.5, l, u = e, f = e) {
  if (
    (Sn.test(i) &&
      ((i = parseFloat(i)), (i = Lt(f.min, f.max, i / 100) - f.min)),
    typeof i != "number")
  )
    return;
  let h = Lt(u.min, u.max, r);
  (e === u && (h -= i),
    (e.min = Z0(e.min, i, a, h, l)),
    (e.max = Z0(e.max, i, a, h, l)));
}
function W0(e, i, [a, r, l], u, f) {
  HD(e, i[a], i[r], i[l], i.scale, u, f);
}
const qD = ["x", "scaleX", "originX"],
  YD = ["y", "scaleY", "originY"];
function I0(e, i, a, r) {
  (W0(e.x, i, qD, a ? a.x : void 0, r ? r.x : void 0),
    W0(e.y, i, YD, a ? a.y : void 0, r ? r.y : void 0));
}
function $0(e) {
  return e.translate === 0 && e.scale === 1;
}
function $1(e) {
  return $0(e.x) && $0(e.y);
}
function J0(e, i) {
  return e.min === i.min && e.max === i.max;
}
function GD(e, i) {
  return J0(e.x, i.x) && J0(e.y, i.y);
}
function tv(e, i) {
  return (
    Math.round(e.min) === Math.round(i.min) &&
    Math.round(e.max) === Math.round(i.max)
  );
}
function J1(e, i) {
  return tv(e.x, i.x) && tv(e.y, i.y);
}
function ev(e) {
  return ye(e.x) / ye(e.y);
}
function nv(e, i) {
  return (
    e.translate === i.translate &&
    e.scale === i.scale &&
    e.originPoint === i.originPoint
  );
}
function gn(e) {
  return [e("x"), e("y")];
}
function XD(e, i, a) {
  let r = "";
  const l = e.x.translate / i.x,
    u = e.y.translate / i.y,
    f = a?.z || 0;
  if (
    ((l || u || f) && (r = `translate3d(${l}px, ${u}px, ${f}px) `),
    (i.x !== 1 || i.y !== 1) && (r += `scale(${1 / i.x}, ${1 / i.y}) `),
    a)
  ) {
    const {
      transformPerspective: m,
      rotate: y,
      pathRotation: g,
      rotateX: x,
      rotateY: T,
      skewX: E,
      skewY: C,
    } = a;
    (m && (r = `perspective(${m}px) ${r}`),
      y && (r += `rotate(${y}deg) `),
      g && (r += `rotate(${g}deg) `),
      x && (r += `rotateX(${x}deg) `),
      T && (r += `rotateY(${T}deg) `),
      E && (r += `skewX(${E}deg) `),
      C && (r += `skewY(${C}deg) `));
  }
  const h = e.x.scale * i.x,
    p = e.y.scale * i.y;
  return ((h !== 1 || p !== 1) && (r += `scale(${h}, ${p})`), r || "none");
}
const FD = mh.length,
  iv = (e) => (typeof e == "string" ? parseFloat(e) : e),
  sv = (e) => typeof e == "number" || ot.test(e);
function KD(e, i, a, r, l, u) {
  l
    ? ((e.opacity = Lt(0, a.opacity ?? 1, QD(r))),
      (e.opacityExit = Lt(i.opacity ?? 1, 0, ZD(r))))
    : u && (e.opacity = Lt(i.opacity ?? 1, a.opacity ?? 1, r));
  for (let f = 0; f < FD; f++) {
    const h = mh[f];
    let p = av(i, h),
      m = av(a, h);
    if (p === void 0 && m === void 0) continue;
    (p || (p = 0),
      m || (m = 0),
      p === 0 || m === 0 || sv(p) === sv(m)
        ? ((e[h] = Math.max(Lt(iv(p), iv(m), r), 0)),
          (Sn.test(m) || Sn.test(p)) && (e[h] += "%"))
        : (e[h] = m));
  }
  (i.rotate || a.rotate) && (e.rotate = Lt(i.rotate || 0, a.rotate || 0, r));
}
function av(e, i) {
  return e[i] !== void 0 ? e[i] : e.borderRadius;
}
const QD = tw(0, 0.5, Gx),
  ZD = tw(0.5, 0.95, Se);
function tw(e, i, a) {
  return (r) => (r < e ? 0 : r > i ? 1 : a(Ks(e, i, r)));
}
function WD(e, i, a) {
  const r = ee(e) ? e : nn(e);
  return (r.start(fh("", r, i, a)), r.animation);
}
function gr(e, i, a, r = { passive: !0 }) {
  return (e.addEventListener(i, a, r), () => e.removeEventListener(i, a, r));
}
const ID = (e, i) => e.depth - i.depth;
class $D {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(i) {
    (Qd(this.children, i), (this.isDirty = !0));
  }
  remove(i) {
    (xl(this.children, i), (this.isDirty = !0));
  }
  forEach(i) {
    (this.isDirty && this.children.sort(ID),
      (this.isDirty = !1),
      this.children.forEach(i));
  }
}
function JD(e, i) {
  const a = pe.now(),
    r = ({ timestamp: l }) => {
      const u = l - a;
      u >= i && (Qe(r), e(u - i));
    };
  return (At.setup(r, !0), () => Qe(r));
}
function dl(e) {
  return ee(e) ? e.get() : e;
}
class tN {
  constructor() {
    this.members = [];
  }
  add(i) {
    Qd(this.members, i);
    for (let a = this.members.length - 1; a >= 0; a--) {
      const r = this.members[a];
      if (r === i || r === this.lead || r === this.prevLead) continue;
      const l = r.instance;
      (!l || l.isConnected === !1) &&
        !r.snapshot &&
        (xl(this.members, r), r.unmount());
    }
    i.scheduleRender();
  }
  remove(i) {
    if (
      (xl(this.members, i),
      i === this.prevLead && (this.prevLead = void 0),
      i === this.lead)
    ) {
      const a = this.members[this.members.length - 1];
      a && this.promote(a);
    }
  }
  relegate(i) {
    for (let a = this.members.indexOf(i) - 1; a >= 0; a--) {
      const r = this.members[a];
      if (r.isPresent !== !1 && r.instance?.isConnected !== !1)
        return (this.promote(r), !0);
    }
    return !1;
  }
  promote(i, a) {
    const r = this.lead;
    if (i !== r && ((this.prevLead = r), (this.lead = i), i.show(), r)) {
      (r.updateSnapshot(), i.scheduleRender());
      const { layoutDependency: l } = r.options,
        { layoutDependency: u } = i.options;
      ((l === void 0 || l !== u) &&
        ((i.resumeFrom = r),
        a && (r.preserveOpacity = !0),
        r.snapshot &&
          ((i.snapshot = r.snapshot),
          (i.snapshot.latestValues = r.animationValues || r.latestValues)),
        i.root?.isUpdating && (i.isLayoutDirty = !0)),
        i.options.crossfade === !1 && r.hide());
    }
  }
  exitAnimationComplete() {
    this.members.forEach((i) => {
      (i.options.onExitComplete?.(),
        i.resumingFrom?.options.onExitComplete?.());
    });
  }
  scheduleRender() {
    this.members.forEach((i) => i.instance && i.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    this.lead?.snapshot && (this.lead.snapshot = void 0);
  }
}
const hl = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  Df = ["", "X", "Y", "Z"],
  eN = 1e3;
let nN = 0;
function Nf(e, i, a, r) {
  const { latestValues: l } = i;
  l[e] && ((a[e] = l[e]), i.setStaticValue(e, 0), r && (r[e] = 0));
}
function ew(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: i } = e.options;
  if (!i) return;
  const a = S1(i);
  if (window.MotionHasOptimisedAnimation(a, "transform")) {
    const { layout: l, layoutId: u } = e.options;
    window.MotionCancelOptimisedAnimation(a, "transform", At, !(l || u));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && ew(r);
}
function nw({
  attachResizeListener: e,
  defaultParent: i,
  measureScroll: a,
  checkIsScrollRoot: r,
  resetTransform: l,
}) {
  return class {
    constructor(f = {}, h = i?.()) {
      ((this.id = nN++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(aN),
            this.nodes.forEach(fN),
            this.nodes.forEach(dN),
            this.nodes.forEach(rN));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = f),
        (this.root = h ? h.root || h : this),
        (this.path = h ? [...h.path, h] : []),
        (this.parent = h),
        (this.depth = h ? h.depth + 1 : 0));
      for (let p = 0; p < this.path.length; p++)
        this.path[p].shouldResetTransform = !0;
      this.root === this && (this.nodes = new $D());
    }
    addEventListener(f, h) {
      return (
        this.eventHandlers.has(f) || this.eventHandlers.set(f, new Wd()),
        this.eventHandlers.get(f).add(h)
      );
    }
    notifyListeners(f, ...h) {
      const p = this.eventHandlers.get(f);
      p && p.notify(...h);
    }
    hasListeners(f) {
      return this.eventHandlers.has(f);
    }
    mount(f) {
      if (this.instance) return;
      ((this.isSVG = gh(f) && !nD(f)), (this.instance = f));
      const { layoutId: h, layout: p, visualElement: m } = this.options;
      if (
        (m && !m.current && m.mount(f),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (p || h) && (this.isLayoutDirty = !0),
        e)
      ) {
        let y,
          g = 0;
        const x = () => (this.root.updateBlockedByResize = !1);
        (At.read(() => {
          g = window.innerWidth;
        }),
          e(f, () => {
            const T = window.innerWidth;
            T !== g &&
              ((g = T),
              (this.root.updateBlockedByResize = !0),
              y && y(),
              (y = JD(x, 250)),
              hl.hasAnimatedSinceResize &&
                ((hl.hasAnimatedSinceResize = !1), this.nodes.forEach(lv)));
          }));
      }
      (h && this.root.registerSharedNode(h, this),
        this.options.animate !== !1 &&
          m &&
          (h || p) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: y,
              hasLayoutChanged: g,
              hasRelativeLayoutChanged: x,
              layout: T,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const E =
                  this.options.transition || m.getDefaultTransition() || gN,
                { onLayoutAnimationStart: C, onLayoutAnimationComplete: R } =
                  m.getProps(),
                D = !this.targetLayout || !J1(this.targetLayout, T),
                N = !g && x;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                N ||
                (g && (D || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const j = { ...uh(E, "layout"), onPlay: C, onComplete: R };
                ((m.shouldReduceMotion || this.options.layoutRoot) &&
                  ((j.delay = 0), (j.type = !1)),
                  this.startAnimation(j),
                  this.setAnimationOrigin(y, N, j.path));
              } else
                (g || lv(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = T;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const f = this.getStack();
      (f && f.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        Qe(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(hN),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: f } = this.options;
      return f && f.getProps().transformTemplate;
    }
    willUpdate(f = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          ew(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let y = 0; y < this.path.length; y++) {
        const g = this.path[y];
        ((g.shouldResetTransform = !0),
          (typeof g.latestValues.x == "string" ||
            typeof g.latestValues.y == "string") &&
            (g.isLayoutDirty = !0),
          g.updateScroll("snapshot"),
          g.options.layoutRoot && g.willUpdate(!1));
      }
      const { layoutId: h, layout: p } = this.options;
      if (h === void 0 && !p) return;
      const m = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = m
        ? m(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        f && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        const p = this.updateBlockedByResize;
        (this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          p && this.nodes.forEach(lN),
          this.nodes.forEach(rv));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(ov);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(cN),
            this.nodes.forEach(uN),
            this.nodes.forEach(iN),
            this.nodes.forEach(sN))
          : this.nodes.forEach(ov),
        this.clearAllSnapshots());
      const h = pe.now();
      ((re.delta = ln(0, 1e3 / 60, h - re.timestamp)),
        (re.timestamp = h),
        (re.isProcessing = !0),
        wf.update.process(re),
        wf.preRender.process(re),
        wf.render.process(re),
        (re.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Zs.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(oN), this.sharedNodes.forEach(mN));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        At.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      At.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !ye(this.snapshot.measuredBox.x) &&
          !ye(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let p = 0; p < this.path.length; p++) this.path[p].updateScroll();
      const f = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        this.layoutCorrected || (this.layoutCorrected = Jt()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: h } = this.options;
      h &&
        h.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          f ? f.layoutBox : void 0,
        );
    }
    updateScroll(f = "measure") {
      let h = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === f &&
          (h = !1),
        h && this.instance)
      ) {
        const p = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: p,
          offset: a(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : p,
        };
      }
    }
    resetTransform() {
      if (!l) return;
      const f =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        h = this.projectionDelta && !$1(this.projectionDelta),
        p = this.getTransformTemplate(),
        m = p ? p(this.latestValues, "") : void 0,
        y = m !== this.prevTransformTemplateValue;
      f &&
        this.instance &&
        (h || Xi(this.latestValues) || y) &&
        (l(this.instance, m),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(f = !0) {
      const h = this.measurePageBox();
      let p = this.removeElementScroll(h);
      return (
        f && (p = this.removeTransform(p)),
        vN(p),
        {
          animationId: this.root.animationId,
          measuredBox: h,
          layoutBox: p,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: f } = this.options;
      if (!f) return Jt();
      const h = f.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(bN))) {
        const { scroll: m } = this.root;
        m && (vn(h.x, m.offset.x), vn(h.y, m.offset.y));
      }
      return h;
    }
    removeElementScroll(f) {
      const h = Jt();
      if ((Je(h, f), this.scroll?.wasRoot)) return h;
      for (let p = 0; p < this.path.length; p++) {
        const m = this.path[p],
          { scroll: y, options: g } = m;
        m !== this.root &&
          y &&
          g.layoutScroll &&
          (y.wasRoot && Je(h, f), vn(h.x, y.offset.x), vn(h.y, y.offset.y));
      }
      return h;
    }
    applyTransform(f, h = !1, p) {
      const m = p || Jt();
      Je(m, f);
      for (let y = 0; y < this.path.length; y++) {
        const g = this.path[y];
        (!h &&
          g.options.layoutScroll &&
          g.scroll &&
          g !== g.root &&
          (vn(m.x, -g.scroll.offset.x), vn(m.y, -g.scroll.offset.y)),
          Xi(g.latestValues) && fl(m, g.latestValues, g.layout?.layoutBox));
      }
      return (
        Xi(this.latestValues) &&
          fl(m, this.latestValues, this.layout?.layoutBox),
        m
      );
    }
    removeTransform(f) {
      const h = Jt();
      Je(h, f);
      for (let p = 0; p < this.path.length; p++) {
        const m = this.path[p];
        if (!Xi(m.latestValues)) continue;
        let y;
        (m.instance &&
          (wd(m.latestValues) && m.updateSnapshot(),
          (y = Jt()),
          Je(y, m.measurePageBox())),
          I0(h, m.latestValues, m.snapshot?.layoutBox, y));
      }
      return (Xi(this.latestValues) && I0(h, this.latestValues), h);
    }
    setTargetDelta(f) {
      ((this.targetDelta = f),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(f) {
      this.options = {
        ...this.options,
        ...f,
        crossfade: f.crossfade !== void 0 ? f.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== re.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      const h = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = h.isSharedProjectionDirty));
      const p = !!this.resumingFrom || this !== h;
      if (!(
        f ||
        (p && this.isSharedProjectionDirty) ||
        this.isProjectionDirty ||
        this.parent?.isProjectionDirty ||
        this.attemptToResolveRelativeTarget ||
        this.root.updateBlockedByResize
      ))
        return;
      const { layout: y, layoutId: g } = this.options;
      if (!this.layout || !(y || g)) return;
      this.resolvedRelativeTargetAt = re.timestamp;
      const x = this.getClosestProjectingParent();
      (x &&
        this.linkedParentVersion !== x.layoutVersion &&
        !x.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (this.options.layoutAnchor !== !1 && x && x.layout
            ? this.createRelativeTarget(
                x,
                this.layout.layoutBox,
                x.layout.layoutBox,
              )
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Jt()), (this.targetWithTransforms = Jt())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              UD(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0,
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                  : Je(this.target, this.layout.layoutBox),
                U1(this.target, this.targetDelta))
              : Je(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            x &&
            !!x.resumingFrom == !!this.resumingFrom &&
            !x.options.layoutScroll &&
            x.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(x, this.target, x.target)
              : (this.relativeParent = this.relativeTarget = void 0))));
    }
    getClosestProjectingParent() {
      if (!(
        !this.parent ||
        wd(this.parent.latestValues) ||
        B1(this.parent.latestValues)
      ))
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(f, h, p) {
      ((this.relativeParent = f),
        (this.linkedParentVersion = f.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = Jt()),
        (this.relativeTargetOrigin = Jt()),
        Rl(
          this.relativeTargetOrigin,
          h,
          p,
          this.options.layoutAnchor || void 0,
        ),
        Je(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const f = this.getLead(),
        h = !!this.resumingFrom || this !== f;
      let p = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (p = !1),
        h &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (p = !1),
        this.resolvedRelativeTargetAt === re.timestamp && (p = !1),
        p)
      )
        return;
      const { layout: m, layoutId: y } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(m || y))
      )
        return;
      Je(this.layoutCorrected, this.layout.layoutBox);
      const g = this.treeScale.x,
        x = this.treeScale.y;
      (pD(this.layoutCorrected, this.treeScale, this.path, h),
        f.layout &&
          !f.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((f.target = f.layout.layoutBox), (f.targetWithTransforms = Jt())));
      const { target: T } = f;
      if (!T) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (X0(this.prevProjectionDelta.x, this.projectionDelta.x),
          X0(this.prevProjectionDelta.y, this.projectionDelta.y)),
        cr(this.projectionDelta, this.layoutCorrected, T, this.latestValues),
        (this.treeScale.x !== g ||
          this.treeScale.y !== x ||
          !nv(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !nv(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", T)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(f = !0) {
      if ((this.options.visualElement?.scheduleRender(), f)) {
        const h = this.getStack();
        h && h.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = qs()),
        (this.projectionDelta = qs()),
        (this.projectionDeltaWithTransform = qs()));
    }
    setAnimationOrigin(f, h = !1, p) {
      const m = this.snapshot,
        y = m ? m.latestValues : {},
        g = { ...this.latestValues },
        x = qs();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !h));
      const T = Jt(),
        E = m ? m.source : void 0,
        C = this.layout ? this.layout.source : void 0,
        R = E !== C,
        D = this.getStack(),
        N = !D || D.members.length <= 1,
        j = !!(R && !N && this.options.crossfade === !0 && !this.path.some(yN));
      this.animationProgress = 0;
      let V;
      const U = p?.interpolateProjection(f);
      ((this.mixTargetDelta = (X) => {
        const Z = X / 1e3,
          P = U?.(Z);
        (P
          ? ((x.x.translate = P.x),
            (x.x.scale = Lt(f.x.scale, 1, Z)),
            (x.x.origin = f.x.origin),
            (x.x.originPoint = f.x.originPoint),
            (x.y.translate = P.y),
            (x.y.scale = Lt(f.y.scale, 1, Z)),
            (x.y.origin = f.y.origin),
            (x.y.originPoint = f.y.originPoint))
          : (cv(x.x, f.x, Z), cv(x.y, f.y, Z)),
          this.setTargetDelta(x),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Rl(
              T,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0,
            ),
            pN(this.relativeTarget, this.relativeTargetOrigin, T, Z),
            V && GD(this.relativeTarget, V) && (this.isProjectionDirty = !1),
            V || (V = Jt()),
            Je(V, this.relativeTarget)),
          R &&
            ((this.animationValues = g), KD(g, y, this.latestValues, Z, j, N)),
          P &&
            P.rotate !== void 0 &&
            (this.animationValues || (this.animationValues = g),
            (this.animationValues.pathRotation = P.rotate)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = Z));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(f) {
      (this.notifyListeners("animationStart"),
        this.currentAnimation?.stop(),
        this.resumingFrom?.currentAnimation?.stop(),
        this.pendingAnimation &&
          (Qe(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = At.update(() => {
          ((hl.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = nn(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = WD(this.motionValue, [0, 1e3], {
              ...f,
              velocity: 0,
              isSync: !0,
              onUpdate: (h) => {
                (this.mixTargetDelta(h), f.onUpdate && f.onUpdate(h));
              },
              onComplete: () => {
                (f.onComplete && f.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const f = this.getStack();
      (f && f.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(eN),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let {
        targetWithTransforms: h,
        target: p,
        layout: m,
        latestValues: y,
      } = f;
      if (!(!h || !p || !m)) {
        if (
          this !== f &&
          this.layout &&
          m &&
          iw(this.options.animationType, this.layout.layoutBox, m.layoutBox)
        ) {
          p = this.target || Jt();
          const g = ye(this.layout.layoutBox.x);
          ((p.x.min = f.target.x.min), (p.x.max = p.x.min + g));
          const x = ye(this.layout.layoutBox.y);
          ((p.y.min = f.target.y.min), (p.y.max = p.y.min + x));
        }
        (Je(h, p),
          fl(h, y),
          cr(this.projectionDeltaWithTransform, this.layoutCorrected, h, y));
      }
    }
    registerSharedNode(f, h) {
      (this.sharedNodes.has(f) || this.sharedNodes.set(f, new tN()),
        this.sharedNodes.get(f).add(h));
      const m = h.options.initialPromotionConfig;
      h.promote({
        transition: m ? m.transition : void 0,
        preserveFollowOpacity:
          m && m.shouldPreserveFollowOpacity
            ? m.shouldPreserveFollowOpacity(h)
            : void 0,
      });
    }
    isLead() {
      const f = this.getStack();
      return f ? f.lead === this : !0;
    }
    getLead() {
      const { layoutId: f } = this.options;
      return f ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: f } = this.options;
      return f ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: f } = this.options;
      if (f) return this.root.sharedNodes.get(f);
    }
    promote({ needsReset: f, transition: h, preserveFollowOpacity: p } = {}) {
      const m = this.getStack();
      (m && m.promote(this, p),
        f && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        h && this.setOptions({ transition: h }));
    }
    relegate() {
      const f = this.getStack();
      return f ? f.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: f } = this.options;
      if (!f) return;
      let h = !1;
      const { latestValues: p } = f;
      if (
        ((p.z ||
          p.rotate ||
          p.rotateX ||
          p.rotateY ||
          p.rotateZ ||
          p.skewX ||
          p.skewY) &&
          (h = !0),
        !h)
      )
        return;
      const m = {};
      p.z && Nf("z", f, m, this.animationValues);
      for (let y = 0; y < Df.length; y++)
        (Nf(`rotate${Df[y]}`, f, m, this.animationValues),
          Nf(`skew${Df[y]}`, f, m, this.animationValues));
      f.render();
      for (const y in m)
        (f.setStaticValue(y, m[y]),
          this.animationValues && (this.animationValues[y] = m[y]));
      f.scheduleRender();
    }
    applyProjectionStyles(f, h) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        f.visibility = "hidden";
        return;
      }
      const p = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (f.visibility = ""),
          (f.opacity = ""),
          (f.pointerEvents = dl(h?.pointerEvents) || ""),
          (f.transform = p ? p(this.latestValues, "") : "none"));
        return;
      }
      const m = this.getLead();
      if (!this.projectionDelta || !this.layout || !m.target) {
        (this.options.layoutId &&
          ((f.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (f.pointerEvents = dl(h?.pointerEvents) || "")),
          this.hasProjected &&
            !Xi(this.latestValues) &&
            ((f.transform = p ? p({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      f.visibility = "";
      const y = m.animationValues || m.latestValues;
      this.applyTransformsToTarget();
      let g = XD(this.projectionDeltaWithTransform, this.treeScale, y);
      (p && (g = p(y, g)), (f.transform = g));
      const { x, y: T } = this.projectionDelta;
      ((f.transformOrigin = `${x.origin * 100}% ${T.origin * 100}% 0`),
        m.animationValues
          ? (f.opacity =
              m === this
                ? (y.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : y.opacityExit)
          : (f.opacity =
              m === this
                ? y.opacity !== void 0
                  ? y.opacity
                  : ""
                : y.opacityExit !== void 0
                  ? y.opacityExit
                  : 0));
      for (const E in Td) {
        if (y[E] === void 0) continue;
        const { correct: C, applyTo: R, isCSSVariable: D } = Td[E],
          N = g === "none" ? y[E] : C(y[E], m);
        if (R) {
          const j = R.length;
          for (let V = 0; V < j; V++) f[R[V]] = N;
        } else
          D ? (this.options.visualElement.renderState.vars[E] = N) : (f[E] = N);
      }
      this.options.layoutId &&
        (f.pointerEvents = m === this ? dl(h?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((f) => f.currentAnimation?.stop()),
        this.root.nodes.forEach(rv),
        this.root.sharedNodes.clear());
    }
  };
}
function iN(e) {
  e.updateLayout();
}
function sN(e) {
  const i = e.resumeFrom?.snapshot || e.snapshot;
  if (e.isLead() && e.layout && i && e.hasListeners("didUpdate")) {
    const { layoutBox: a, measuredBox: r } = e.layout,
      { animationType: l } = e.options,
      u = i.source !== e.layout.source;
    if (l === "size")
      gn((y) => {
        const g = u ? i.measuredBox[y] : i.layoutBox[y],
          x = ye(g);
        ((g.min = a[y].min), (g.max = g.min + x));
      });
    else if (l === "x" || l === "y") {
      const y = l === "x" ? "y" : "x";
      Ed(u ? i.measuredBox[y] : i.layoutBox[y], a[y]);
    } else
      iw(l, i.layoutBox, a) &&
        gn((y) => {
          const g = u ? i.measuredBox[y] : i.layoutBox[y],
            x = ye(a[y]);
          ((g.max = g.min + x),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[y].max = e.relativeTarget[y].min + x)));
        });
    const f = qs();
    cr(f, a, i.layoutBox);
    const h = qs();
    u ? cr(h, e.applyTransform(r, !0), i.measuredBox) : cr(h, a, i.layoutBox);
    const p = !$1(f);
    let m = !1;
    if (!e.resumeFrom) {
      const y = e.getClosestProjectingParent();
      if (y && !y.resumeFrom) {
        const { snapshot: g, layout: x } = y;
        if (g && x) {
          const T = e.options.layoutAnchor || void 0,
            E = Jt();
          Rl(E, i.layoutBox, g.layoutBox, T);
          const C = Jt();
          (Rl(C, a, x.layoutBox, T),
            J1(E, C) || (m = !0),
            y.options.layoutRoot &&
              ((e.relativeTarget = C),
              (e.relativeTargetOrigin = E),
              (e.relativeParent = y)));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: a,
      snapshot: i,
      delta: h,
      layoutDelta: f,
      hasLayoutChanged: p,
      hasRelativeLayoutChanged: m,
    });
  } else if (e.isLead()) {
    const { onExitComplete: a } = e.options;
    a && a();
  }
  e.options.transition = void 0;
}
function aN(e) {
  e.parent &&
    (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty ||
      (e.isSharedProjectionDirty = !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function rN(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function oN(e) {
  e.clearSnapshot();
}
function rv(e) {
  e.clearMeasurements();
}
function lN(e) {
  ((e.isLayoutDirty = !0), e.updateLayout());
}
function ov(e) {
  e.isLayoutDirty = !1;
}
function cN(e) {
  e.isAnimationBlocked &&
    e.layout &&
    !e.isLayoutDirty &&
    ((e.snapshot = e.layout), (e.isLayoutDirty = !0));
}
function uN(e) {
  const { visualElement: i } = e.options;
  (i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"),
    e.resetTransform());
}
function lv(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function fN(e) {
  e.resolveTargetDelta();
}
function dN(e) {
  e.calcProjection();
}
function hN(e) {
  e.resetSkewAndRotation();
}
function mN(e) {
  e.removeLeadSnapshot();
}
function cv(e, i, a) {
  ((e.translate = Lt(i.translate, 0, a)),
    (e.scale = Lt(i.scale, 1, a)),
    (e.origin = i.origin),
    (e.originPoint = i.originPoint));
}
function uv(e, i, a, r) {
  ((e.min = Lt(i.min, a.min, r)), (e.max = Lt(i.max, a.max, r)));
}
function pN(e, i, a, r) {
  (uv(e.x, i.x, a.x, r), uv(e.y, i.y, a.y, r));
}
function yN(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const gN = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  fv = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  dv = fv("applewebkit/") && !fv("chrome/") ? Math.round : Se;
function hv(e) {
  ((e.min = dv(e.min)), (e.max = dv(e.max)));
}
function vN(e) {
  (hv(e.x), hv(e.y));
}
function iw(e, i, a) {
  return (
    e === "position" || (e === "preserve-aspect" && !BD(ev(i), ev(a), 0.2))
  );
}
function bN(e) {
  return e !== e.root && e.scroll?.wasRoot;
}
const xN = nw({
    attachResizeListener: (e, i) => gr(e, "resize", i),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
      y: document.documentElement.scrollTop || document.body?.scrollTop || 0,
    }),
    checkIsScrollRoot: () => !0,
  }),
  jf = { current: void 0 },
  sw = nw({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!jf.current) {
        const e = new xN({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (jf.current = e));
      }
      return jf.current;
    },
    resetTransform: (e, i) => {
      e.style.transform = i !== void 0 ? i : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  Cr = S.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
function mv(e, i) {
  if (typeof e == "function") return e(i);
  e != null && (e.current = i);
}
function wN(...e) {
  return (i) => {
    let a = !1;
    const r = e.map((l) => {
      const u = mv(l, i);
      return (!a && typeof u == "function" && (a = !0), u);
    });
    if (a)
      return () => {
        for (let l = 0; l < r.length; l++) {
          const u = r[l];
          typeof u == "function" ? u() : mv(e[l], null);
        }
      };
  };
}
function SN(...e) {
  return S.useCallback(wN(...e), e);
}
class TN extends S.Component {
  getSnapshotBeforeUpdate(i) {
    const a = this.props.childRef.current;
    if (
      lr(a) &&
      i.isPresent &&
      !this.props.isPresent &&
      this.props.pop !== !1
    ) {
      const r = a.offsetParent,
        l = (lr(r) && r.offsetWidth) || 0,
        u = (lr(r) && r.offsetHeight) || 0,
        f = getComputedStyle(a),
        h = this.props.sizeRef.current;
      ((h.height = parseFloat(f.height)),
        (h.width = parseFloat(f.width)),
        (h.top = a.offsetTop),
        (h.left = a.offsetLeft),
        (h.right = l - h.width - h.left),
        (h.bottom = u - h.height - h.top),
        (h.direction = f.direction));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function EN({
  children: e,
  isPresent: i,
  anchorX: a,
  anchorY: r,
  root: l,
  pop: u,
}) {
  const f = S.useId(),
    h = S.useRef(null),
    p = S.useRef({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      direction: "ltr",
    }),
    { nonce: m } = S.useContext(Cr),
    y = e.props?.ref ?? e?.ref,
    g = SN(h, y);
  return (
    S.useInsertionEffect(() => {
      const {
        width: x,
        height: T,
        top: E,
        left: C,
        right: R,
        bottom: D,
        direction: N,
      } = p.current;
      if (i || u === !1 || !h.current || !x || !T) return;
      const j = N === "rtl",
        V =
          a === "left"
            ? j
              ? `right: ${R}`
              : `left: ${C}`
            : j
              ? `left: ${C}`
              : `right: ${R}`,
        U = r === "bottom" ? `bottom: ${D}` : `top: ${E}`;
      h.current.dataset.motionPopId = f;
      const X = document.createElement("style");
      m && (X.nonce = m);
      const Z = l ?? document.head;
      return (
        Z.appendChild(X),
        X.sheet &&
          X.sheet.insertRule(`
          [data-motion-pop-id="${f}"] {
            position: absolute !important;
            width: ${x}px !important;
            height: ${T}px !important;
            ${V}px !important;
            ${U}px !important;
          }
        `),
        () => {
          (h.current?.removeAttribute("data-motion-pop-id"),
            Z.contains(X) && Z.removeChild(X));
        }
      );
    }, [i]),
    b.jsx(TN, {
      isPresent: i,
      childRef: h,
      sizeRef: p,
      pop: u,
      children: u === !1 ? e : S.cloneElement(e, { ref: g }),
    })
  );
}
const AN = ({
  children: e,
  initial: i,
  isPresent: a,
  onExitComplete: r,
  custom: l,
  presenceAffectsLayout: u,
  mode: f,
  anchorX: h,
  anchorY: p,
  root: m,
}) => {
  const y = xi(CN),
    g = S.useId(),
    x = S.useRef(a),
    T = S.useRef(r);
  Sr(() => {
    ((x.current = a), (T.current = r));
  });
  let E = !0,
    C = S.useMemo(
      () => (
        (E = !1),
        {
          id: g,
          initial: i,
          isPresent: a,
          custom: l,
          onExitComplete: (R) => {
            y.set(R, !0);
            for (const D of y.values()) if (!D) return;
            r && r();
          },
          register: (R) => (
            y.set(R, !1),
            () => {
              (y.delete(R), !x.current && !y.size && T.current?.());
            }
          ),
        }
      ),
      [a, y, r],
    );
  return (
    u && E && (C = { ...C }),
    S.useMemo(() => {
      y.forEach((R, D) => y.set(D, !1));
    }, [a]),
    S.useEffect(() => {
      !a && !y.size && r && r();
    }, [a]),
    (e = b.jsx(EN, {
      pop: f === "popLayout",
      isPresent: a,
      anchorX: h,
      anchorY: p,
      root: m,
      children: e,
    })),
    b.jsx(Yl.Provider, { value: C, children: e })
  );
};
function CN() {
  return new Map();
}
function aw(e = !0) {
  const i = S.useContext(Yl);
  if (i === null) return [!0, null];
  const { isPresent: a, onExitComplete: r, register: l } = i,
    u = S.useId();
  S.useEffect(() => {
    if (e) return l(u);
  }, [e]);
  const f = S.useCallback(() => e && r && r(u), [u, r, e]);
  return !a && r ? [!1, f] : [!0];
}
const $o = (e) => e.key || "";
function pv(e) {
  const i = [];
  return (
    S.Children.forEach(e, (a) => {
      S.isValidElement(a) && i.push(a);
    }),
    i
  );
}
const RN = ({
    children: e,
    custom: i,
    initial: a = !0,
    onExitComplete: r,
    presenceAffectsLayout: l = !0,
    mode: u = "sync",
    propagate: f = !1,
    anchorX: h = "left",
    anchorY: p = "top",
    root: m,
  }) => {
    const [y, g] = aw(f),
      x = S.useMemo(() => pv(e), [e]),
      T = f && !y ? [] : x.map($o),
      E = S.useRef(!0),
      C = S.useRef(x),
      R = xi(() => new Map()),
      D = S.useRef(new Set()),
      [N, j] = S.useState(x),
      [V, U] = S.useState(x);
    Sr(() => {
      ((E.current = !1), (C.current = x));
      for (let P = 0; P < V.length; P++) {
        const I = $o(V[P]);
        T.includes(I)
          ? (R.delete(I), D.current.delete(I))
          : R.get(I) !== !0 && R.set(I, !1);
      }
    }, [V, T.length, T.join("-")]);
    const X = [];
    if (x !== N) {
      let P = [...x];
      for (let I = 0; I < V.length; I++) {
        const W = V[I],
          $ = $o(W);
        T.includes($) || (P.splice(I, 0, W), X.push(W));
      }
      return (u === "wait" && X.length && (P = X), U(pv(P)), j(x), null);
    }
    const { forceRender: Z } = S.useContext(Kd);
    return b.jsx(b.Fragment, {
      children: V.map((P) => {
        const I = $o(P),
          W = f && !y ? !1 : x === V || T.includes(I),
          $ = () => {
            if (D.current.has(I)) return;
            if (R.has(I)) (D.current.add(I), R.set(I, !0));
            else return;
            let st = !0;
            (R.forEach((gt) => {
              gt || (st = !1);
            }),
              st && (Z?.(), U(C.current), f && g?.(), r && r()));
          };
        return b.jsx(
          AN,
          {
            isPresent: W,
            initial: !E.current || a ? void 0 : !1,
            custom: i,
            presenceAffectsLayout: l,
            mode: u,
            root: m,
            onExitComplete: W ? void 0 : $,
            anchorX: h,
            anchorY: p,
            children: P,
          },
          I,
        );
      }),
    });
  },
  rw = S.createContext({ strict: !1 }),
  yv = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  };
let gv = !1;
function MN() {
  if (gv) return;
  const e = {};
  for (const i in yv) e[i] = { isEnabled: (a) => yv[i].some((r) => !!a[r]) };
  (L1(e), (gv = !0));
}
function ow() {
  return (MN(), fD());
}
function ON(e) {
  const i = ow();
  for (const a in e) i[a] = { ...i[a], ...e[a] };
  L1(i);
}
const DN = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport",
]);
function Ml(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    DN.has(e)
  );
}
let lw = (e) => !Ml(e);
function NN(e) {
  typeof e == "function" && (lw = (i) => (i.startsWith("on") ? !Ml(i) : e(i)));
}
try {
  NN(require("@emotion/is-prop-valid").default);
} catch {}
function jN(e, i, a) {
  const r = {};
  for (const l in e)
    (l === "values" && typeof e.values == "object") ||
      ee(e[l]) ||
      ((lw(l) ||
        (a === !0 && Ml(l)) ||
        (!i && !Ml(l)) ||
        (e.draggable && l.startsWith("onDrag"))) &&
        (r[l] = e[l]));
  return r;
}
const Kl = S.createContext({});
function _N(e, i) {
  if (Fl(e)) {
    const { initial: a, animate: r } = e;
    return {
      initial: a === !1 || yr(a) ? a : void 0,
      animate: yr(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? i : {};
}
function zN(e) {
  const { initial: i, animate: a } = _N(e, S.useContext(Kl));
  return S.useMemo(() => ({ initial: i, animate: a }), [vv(i), vv(a)]);
}
function vv(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Sh = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function cw(e, i, a) {
  for (const r in i) !ee(i[r]) && !Y1(r, a) && (e[r] = i[r]);
}
function VN({ transformTemplate: e }, i) {
  return S.useMemo(() => {
    const a = Sh();
    return (xh(a, i, e), Object.assign({}, a.vars, a.style));
  }, [i]);
}
function LN(e, i) {
  const a = e.style || {},
    r = {};
  return (cw(r, a, e), Object.assign(r, VN(e, i)), r);
}
function kN(e, i) {
  const a = {},
    r = LN(e, i);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((a.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (a.tabIndex = 0),
    (a.style = r),
    a
  );
}
const uw = () => ({ ...Sh(), attrs: {} });
function PN(e, i, a, r) {
  const l = S.useMemo(() => {
    const u = uw();
    return (
      G1(u, i, F1(r), e.transformTemplate, e.style),
      { ...u.attrs, style: { ...u.style } }
    );
  }, [i]);
  if (e.style) {
    const u = {};
    (cw(u, e.style, e), (l.style = { ...u, ...l.style }));
  }
  return l;
}
const BN = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Th(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(BN.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function UN(e, i, a, { latestValues: r }, l, u = !1, f) {
  const p = ((f ?? Th(e)) ? PN : kN)(i, r, l, e),
    m = jN(i, typeof e == "string", u),
    y = e !== S.Fragment ? { ...m, ...p, ref: a } : {},
    { children: g } = i,
    x = S.useMemo(() => (ee(g) ? g.get() : g), [g]);
  return S.createElement(e, { ...y, children: x });
}
function HN({ scrapeMotionValuesFromProps: e, createRenderState: i }, a, r, l) {
  return { latestValues: qN(a, r, l, e), renderState: i() };
}
function qN(e, i, a, r) {
  const l = {},
    u = r(e, {});
  for (const x in u) l[x] = dl(u[x]);
  let { initial: f, animate: h } = e;
  const p = Fl(e),
    m = z1(e);
  i &&
    m &&
    !p &&
    e.inherit !== !1 &&
    (f === void 0 && (f = i.initial), h === void 0 && (h = i.animate));
  let y = a ? a.initial === !1 : !1;
  y = y || f === !1;
  const g = y ? h : f;
  if (g && typeof g != "boolean" && !Xl(g)) {
    const x = Array.isArray(g) ? g : [g];
    for (let T = 0; T < x.length; T++) {
      const E = dh(e, x[T]);
      if (E) {
        const { transitionEnd: C, transition: R, ...D } = E;
        for (const N in D) {
          let j = D[N];
          if (Array.isArray(j)) {
            const V = y ? j.length - 1 : 0;
            j = j[V];
          }
          j !== null && (l[N] = j);
        }
        for (const N in C) l[N] = C[N];
      }
    }
  }
  return l;
}
const fw = (e) => (i, a) => {
    const r = S.useContext(Kl),
      l = S.useContext(Yl),
      u = () => HN(e, i, r, l);
    return a ? u() : xi(u);
  },
  YN = fw({ scrapeMotionValuesFromProps: wh, createRenderState: Sh }),
  GN = fw({ scrapeMotionValuesFromProps: K1, createRenderState: uw }),
  XN = Symbol.for("motionComponentSymbol");
function FN(e, i, a) {
  const r = S.useRef(a);
  S.useInsertionEffect(() => {
    r.current = a;
  });
  const l = S.useRef(null);
  return S.useCallback(
    (u) => {
      (u && e.onMount?.(u), i && (u ? i.mount(u) : i.unmount()));
      const f = r.current;
      if (typeof f == "function")
        if (u) {
          const h = f(u);
          typeof h == "function" && (l.current = h);
        } else l.current ? (l.current(), (l.current = null)) : f(u);
      else f && (f.current = u);
    },
    [i],
  );
}
const dw = S.createContext({});
function Bs(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function KN(e, i, a, r, l, u) {
  const { visualElement: f } = S.useContext(Kl),
    h = S.useContext(rw),
    p = S.useContext(Yl),
    m = S.useContext(Cr),
    y = m.reducedMotion,
    g = m.skipAnimations,
    x = S.useRef(null),
    T = S.useRef(!1);
  ((r = r || h.renderer),
    !x.current &&
      r &&
      ((x.current = r(e, {
        visualState: i,
        parent: f,
        props: a,
        presenceContext: p,
        blockInitialAnimation: p ? p.initial === !1 : !1,
        reducedMotionConfig: y,
        skipAnimations: g,
        isSVG: u,
      })),
      T.current && x.current && (x.current.manuallyAnimateOnMount = !0)));
  const E = x.current,
    C = S.useContext(dw);
  E &&
    !E.projection &&
    l &&
    (E.type === "html" || E.type === "svg") &&
    QN(x.current, a, l, C);
  const R = S.useRef(!1);
  S.useInsertionEffect(() => {
    E && R.current && E.update(a, p);
  });
  const D = a[w1],
    N = S.useRef(
      !!D &&
        typeof window < "u" &&
        !window.MotionHandoffIsComplete?.(D) &&
        window.MotionHasOptimisedAnimation?.(D),
    );
  return (
    Sr(() => {
      ((T.current = !0),
        E &&
          ((R.current = !0),
          (window.MotionIsMounted = !0),
          E.updateFeatures(),
          E.scheduleRenderMicrotask(),
          N.current && E.animationState && E.animationState.animateChanges()));
    }),
    S.useEffect(() => {
      E &&
        (!N.current && E.animationState && E.animationState.animateChanges(),
        N.current &&
          (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(D);
          }),
          (N.current = !1)),
        (E.enteringChildren = void 0));
    }),
    E
  );
}
function QN(e, i, a, r) {
  const {
    layoutId: l,
    layout: u,
    drag: f,
    dragConstraints: h,
    layoutScroll: p,
    layoutRoot: m,
    layoutAnchor: y,
    layoutCrossfade: g,
  } = i;
  ((e.projection = new a(
    e.latestValues,
    i["data-framer-portal-id"] ? void 0 : hw(e.parent),
  )),
    e.projection.setOptions({
      layoutId: l,
      layout: u,
      alwaysMeasureLayout: !!f || (h && Bs(h)),
      visualElement: e,
      animationType: typeof u == "string" ? u : "both",
      initialPromotionConfig: r,
      crossfade: g,
      layoutScroll: p,
      layoutRoot: m,
      layoutAnchor: y,
    }));
}
function hw(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : hw(e.parent);
}
function _f(e, { forwardMotionProps: i = !1, type: a } = {}, r, l) {
  r && ON(r);
  const u = a ? a === "svg" : Th(e),
    f = u ? GN : YN;
  function h(m, y) {
    let g;
    const x = { ...S.useContext(Cr), ...m, layoutId: ZN(m) },
      { isStatic: T } = x,
      E = zN(m),
      C = f(m, T);
    if (!T && typeof window < "u") {
      WN();
      const R = IN(x);
      ((g = R.MeasureLayout),
        (E.visualElement = KN(e, C, x, l, R.ProjectionNode, u)));
    }
    return b.jsxs(Kl.Provider, {
      value: E,
      children: [
        g && E.visualElement
          ? b.jsx(g, { visualElement: E.visualElement, ...x })
          : null,
        UN(e, m, FN(C, E.visualElement, y), C, T, i, u),
      ],
    });
  }
  h.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
  const p = S.forwardRef(h);
  return ((p[XN] = e), p);
}
function ZN({ layoutId: e }) {
  const i = S.useContext(Kd).id;
  return i && e !== void 0 ? i + "-" + e : e;
}
function WN(e, i) {
  S.useContext(rw).strict;
}
function IN(e) {
  const i = ow(),
    { drag: a, layout: r } = i;
  if (!a && !r) return {};
  const l = { ...a, ...r };
  return {
    MeasureLayout:
      a?.isEnabled(e) || r?.isEnabled(e) ? l.MeasureLayout : void 0,
    ProjectionNode: l.ProjectionNode,
  };
}
function $N(e, i) {
  if (typeof Proxy > "u") return _f;
  const a = new Map(),
    r = (u, f) => _f(u, f, e, i),
    l = (u, f) => r(u, f);
  return new Proxy(l, {
    get: (u, f) =>
      f === "create"
        ? r
        : (a.has(f) || a.set(f, _f(f, void 0, e, i)), a.get(f)),
  });
}
const JN = (e, i) =>
  (i.isSVG ?? Th(e))
    ? new MD(i)
    : new SD(i, { allowProjection: e !== S.Fragment });
class tj extends Ti {
  constructor(i) {
    (super(i), i.animationState || (i.animationState = _D(i)));
  }
  updateAnimationControlsSubscription() {
    const { animate: i } = this.node.getProps();
    Xl(i) && (this.unmountControls = i.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: i } = this.node.getProps(),
      { animate: a } = this.node.prevProps || {};
    i !== a && this.updateAnimationControlsSubscription();
  }
  unmount() {
    (this.node.animationState.reset(), this.unmountControls?.());
  }
}
let ej = 0;
class nj extends Ti {
  constructor() {
    (super(...arguments), (this.id = ej++), (this.isExitComplete = !1));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: i, onExitComplete: a } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || i === r) return;
    if (i && r === !1) {
      if (this.isExitComplete) {
        const { initial: u, custom: f } = this.node.getProps();
        if (
          typeof u == "string" ||
          (typeof u == "object" && u !== null && !Array.isArray(u))
        ) {
          const h = Zi(this.node, u, f);
          if (h) {
            const { transition: p, transitionEnd: m, ...y } = h;
            for (const g in y) this.node.getValue(g)?.jump(y[g]);
          }
        }
        (this.node.animationState.reset(),
          this.node.animationState.animateChanges());
      } else this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const l = this.node.animationState.setActive("exit", !i);
    a &&
      !i &&
      l.then(() => {
        ((this.isExitComplete = !0), a(this.id));
      });
  }
  mount() {
    const { register: i, onExitComplete: a } = this.node.presenceContext || {};
    (a && a(this.id), i && (this.unmount = i(this.id)));
  }
  unmount() {}
}
const ij = { animation: { Feature: tj }, exit: { Feature: nj } };
function Rr(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const sj = (e) => (i) => yh(i) && e(i, Rr(i));
function ur(e, i, a, r) {
  return gr(e, i, sj(a), r);
}
const mw = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  bv = (e, i) => Math.abs(e - i);
function aj(e, i) {
  const a = bv(e.x, i.x),
    r = bv(e.y, i.y);
  return Math.sqrt(a ** 2 + r ** 2);
}
const xv = new Set(["auto", "scroll"]);
class pw {
  constructor(
    i,
    a,
    {
      transformPagePoint: r,
      contextWindow: l = window,
      dragSnapToOrigin: u = !1,
      distanceThreshold: f = 3,
      element: h,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.lastRawMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (E) => {
        this.handleScroll(E.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        this.lastRawMoveEventInfo &&
          (this.lastMoveEventInfo = Jo(
            this.lastRawMoveEventInfo,
            this.transformPagePoint,
          ));
        const E = zf(this.lastMoveEventInfo, this.history),
          C = this.startEvent !== null,
          R = aj(E.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!C && !R) return;
        const { point: D } = E,
          { timestamp: N } = re;
        this.history.push({ ...D, timestamp: N });
        const { onStart: j, onMove: V } = this.handlers;
        (C ||
          (j && j(this.lastMoveEvent, E),
          (this.startEvent = this.lastMoveEvent)),
          V && V(this.lastMoveEvent, E));
      }),
      (this.handlePointerMove = (E, C) => {
        ((this.lastMoveEvent = E),
          (this.lastRawMoveEventInfo = C),
          (this.lastMoveEventInfo = Jo(C, this.transformPagePoint)),
          At.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (E, C) => {
        this.end();
        const { onEnd: R, onSessionEnd: D, resumeAnimation: N } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && N && N(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const j = zf(
          E.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Jo(C, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && R && R(E, j), D && D(E, j));
      }),
      !yh(i))
    )
      return;
    ((this.dragSnapToOrigin = u),
      (this.handlers = a),
      (this.transformPagePoint = r),
      (this.distanceThreshold = f),
      (this.contextWindow = l || window));
    const p = Rr(i),
      m = Jo(p, this.transformPagePoint),
      { point: y } = m,
      { timestamp: g } = re;
    this.history = [{ ...y, timestamp: g }];
    const { onSessionStart: x } = a;
    x && x(i, zf(m, this.history));
    const T = { passive: !0, capture: !0 };
    ((this.removeListeners = Tr(
      ur(this.contextWindow, "pointermove", this.handlePointerMove, T),
      ur(this.contextWindow, "pointerup", this.handlePointerUp, T),
      ur(this.contextWindow, "pointercancel", this.handlePointerUp, T),
    )),
      h && this.startScrollTracking(h));
  }
  startScrollTracking(i) {
    let a = i.parentElement;
    for (; a;) {
      const r = getComputedStyle(a);
      ((xv.has(r.overflowX) || xv.has(r.overflowY)) &&
        this.scrollPositions.set(a, { x: a.scrollLeft, y: a.scrollTop }),
        (a = a.parentElement));
    }
    (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
      window.addEventListener("scroll", this.onWindowScroll),
      (this.removeScrollListeners = () => {
        (window.removeEventListener("scroll", this.onElementScroll, {
          capture: !0,
        }),
          window.removeEventListener("scroll", this.onWindowScroll));
      }));
  }
  handleScroll(i) {
    const a = this.scrollPositions.get(i);
    if (!a) return;
    const r = i === window,
      l = r
        ? { x: window.scrollX, y: window.scrollY }
        : { x: i.scrollLeft, y: i.scrollTop },
      u = { x: l.x - a.x, y: l.y - a.y };
    (u.x === 0 && u.y === 0) ||
      (r
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += u.x),
          (this.lastMoveEventInfo.point.y += u.y))
        : this.history.length > 0 &&
          ((this.history[0].x -= u.x), (this.history[0].y -= u.y)),
      this.scrollPositions.set(i, l),
      At.update(this.updatePoint, !0));
  }
  updateHandlers(i) {
    this.handlers = i;
  }
  end() {
    (this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      Qe(this.updatePoint));
  }
}
function Jo(e, i) {
  return i ? { point: i(e.point) } : e;
}
function wv(e, i) {
  return { x: e.x - i.x, y: e.y - i.y };
}
function zf({ point: e }, i) {
  return {
    point: e,
    delta: wv(e, yw(i)),
    offset: wv(e, rj(i)),
    velocity: oj(i, 0.1),
  };
}
function rj(e) {
  return e[0];
}
function yw(e) {
  return e[e.length - 1];
}
function oj(e, i) {
  if (e.length < 2) return { x: 0, y: 0 };
  let a = e.length - 1,
    r = null;
  const l = yw(e);
  for (; a >= 0 && ((r = e[a]), !(l.timestamp - r.timestamp > Le(i)));) a--;
  if (!r) return { x: 0, y: 0 };
  r === e[0] &&
    e.length > 2 &&
    l.timestamp - r.timestamp > Le(i) * 2 &&
    (r = e[1]);
  const u = Ke(l.timestamp - r.timestamp);
  if (u === 0) return { x: 0, y: 0 };
  const f = { x: (l.x - r.x) / u, y: (l.y - r.y) / u };
  return (f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f);
}
function lj(e, { min: i, max: a }, r) {
  return (
    i !== void 0 && e < i
      ? (e = r ? Lt(i, e, r.min) : Math.max(e, i))
      : a !== void 0 && e > a && (e = r ? Lt(a, e, r.max) : Math.min(e, a)),
    e
  );
}
function Sv(e, i, a) {
  return {
    min: i !== void 0 ? e.min + i : void 0,
    max: a !== void 0 ? e.max + a - (e.max - e.min) : void 0,
  };
}
function cj(e, { top: i, left: a, bottom: r, right: l }) {
  return { x: Sv(e.x, a, l), y: Sv(e.y, i, r) };
}
function Tv(e, i) {
  let a = i.min - e.min,
    r = i.max - e.max;
  return (
    i.max - i.min < e.max - e.min && ([a, r] = [r, a]),
    { min: a, max: r }
  );
}
function uj(e, i) {
  return { x: Tv(e.x, i.x), y: Tv(e.y, i.y) };
}
function fj(e, i) {
  let a = 0.5;
  const r = ye(e),
    l = ye(i);
  return (
    l > r
      ? (a = Ks(i.min, i.max - r, e.min))
      : r > l && (a = Ks(e.min, e.max - l, i.min)),
    ln(0, 1, a)
  );
}
function dj(e, i) {
  const a = {};
  return (
    i.min !== void 0 && (a.min = i.min - e.min),
    i.max !== void 0 && (a.max = i.max - e.min),
    a
  );
}
const Ad = 0.35;
function hj(e = Ad) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Ad),
    { x: Ev(e, "left", "right"), y: Ev(e, "top", "bottom") }
  );
}
function Ev(e, i, a) {
  return { min: Av(e, i), max: Av(e, a) };
}
function Av(e, i) {
  return typeof e == "number" ? e : e[i] || 0;
}
const mj = new WeakMap();
class pj {
  constructor(i) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Jt()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = i));
  }
  start(i, { snapToCursor: a = !1, distanceThreshold: r } = {}) {
    const { presenceContext: l } = this.visualElement;
    if (l && l.isPresent === !1) return;
    const u = (g) => {
        (a && this.snapToCursor(Rr(g).point), this.stopAnimation());
      },
      f = (g, x) => {
        const { drag: T, dragPropagation: E, onDragStart: C } = this.getProps();
        if (
          T &&
          !E &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = BO(T)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = g),
          (this.latestPanInfo = x),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          gn((D) => {
            let N = this.getAxisMotionValue(D).get() || 0;
            if (Sn.test(N)) {
              const { projection: j } = this.visualElement;
              if (j && j.layout) {
                const V = j.layout.layoutBox[D];
                V && (N = ye(V) * (parseFloat(N) / 100));
              }
            }
            this.originPoint[D] = N;
          }),
          C && At.update(() => C(g, x), !1, !0),
          md(this.visualElement, "transform"));
        const { animationState: R } = this.visualElement;
        R && R.setActive("whileDrag", !0);
      },
      h = (g, x) => {
        ((this.latestPointerEvent = g), (this.latestPanInfo = x));
        const {
          dragPropagation: T,
          dragDirectionLock: E,
          onDirectionLock: C,
          onDrag: R,
        } = this.getProps();
        if (!T && !this.openDragLock) return;
        const { offset: D } = x;
        if (E && this.currentDirection === null) {
          ((this.currentDirection = gj(D)),
            this.currentDirection !== null && C && C(this.currentDirection));
          return;
        }
        (this.updateAxis("x", x.point, D),
          this.updateAxis("y", x.point, D),
          this.visualElement.render(),
          R && At.update(() => R(g, x), !1, !0));
      },
      p = (g, x) => {
        ((this.latestPointerEvent = g),
          (this.latestPanInfo = x),
          this.stop(g, x),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      m = () => {
        const { dragSnapToOrigin: g } = this.getProps();
        (g || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: y } = this.getProps();
    this.panSession = new pw(
      i,
      {
        onSessionStart: u,
        onStart: f,
        onMove: h,
        onSessionEnd: p,
        resumeAnimation: m,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: y,
        distanceThreshold: r,
        contextWindow: mw(this.visualElement),
        element: this.visualElement.current,
      },
    );
  }
  stop(i, a) {
    const r = i || this.latestPointerEvent,
      l = a || this.latestPanInfo,
      u = this.isDragging;
    if ((this.cancel(), !u || !l || !r)) return;
    const { velocity: f } = l;
    this.startAnimation(f);
    const { onDragEnd: h } = this.getProps();
    h && At.postRender(() => h(r, l));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: i, animationState: a } = this.visualElement;
    (i && (i.isAnimationBlocked = !1), this.endPanSession());
    const { dragPropagation: r } = this.getProps();
    (!r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      a && a.setActive("whileDrag", !1));
  }
  endPanSession() {
    (this.panSession && this.panSession.end(), (this.panSession = void 0));
  }
  updateAxis(i, a, r) {
    const { drag: l } = this.getProps();
    if (!r || !tl(i, l, this.currentDirection)) return;
    const u = this.getAxisMotionValue(i);
    let f = this.originPoint[i] + r[i];
    (this.constraints &&
      this.constraints[i] &&
      (f = lj(f, this.constraints[i], this.elastic[i])),
      u.set(f));
  }
  resolveConstraints() {
    const { dragConstraints: i, dragElastic: a } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : this.visualElement.projection?.layout,
      l = this.constraints;
    (i && Bs(i)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : i && r
        ? (this.constraints = cj(r.layoutBox, i))
        : (this.constraints = !1),
      (this.elastic = hj(a)),
      l !== this.constraints &&
        !Bs(i) &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        gn((u) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(u) &&
            (this.constraints[u] = dj(r.layoutBox[u], this.constraints[u]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: i, onMeasureDragConstraints: a } = this.getProps();
    if (!i || !Bs(i)) return !1;
    const r = i.current,
      { projection: l } = this.visualElement;
    if (!l || !l.layout) return !1;
    l.root && ((l.root.scroll = void 0), l.root.updateScroll());
    const u = yD(r, l.root, this.visualElement.getTransformPagePoint());
    let f = uj(l.layout.layoutBox, u);
    if (a) {
      const h = a(hD(f));
      ((this.hasMutatedConstraints = !!h), h && (f = P1(h)));
    }
    return f;
  }
  startAnimation(i) {
    const {
        drag: a,
        dragMomentum: r,
        dragElastic: l,
        dragTransition: u,
        dragSnapToOrigin: f,
        onDragTransitionEnd: h,
      } = this.getProps(),
      p = this.constraints || {},
      m = gn((y) => {
        if (!tl(y, a, this.currentDirection)) return;
        let g = (p && p[y]) || {};
        (f === !0 || f === y) && (g = { min: 0, max: 0 });
        const x = l ? 200 : 1e6,
          T = l ? 40 : 1e7,
          E = {
            type: "inertia",
            velocity: r ? i[y] : 0,
            bounceStiffness: x,
            bounceDamping: T,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...u,
            ...g,
          };
        return this.startAxisValueAnimation(y, E);
      });
    return Promise.all(m).then(h);
  }
  startAxisValueAnimation(i, a) {
    const r = this.getAxisMotionValue(i);
    return (
      md(this.visualElement, i),
      r.start(fh(i, r, 0, a, this.visualElement, !1))
    );
  }
  stopAnimation() {
    gn((i) => this.getAxisMotionValue(i).stop());
  }
  getAxisMotionValue(i) {
    const a = `_drag${i.toUpperCase()}`,
      l = this.visualElement.getProps()[a];
    return (
      l ||
      this.visualElement.getValue(i, this.visualElement.latestValues[i] ?? 0)
    );
  }
  snapToCursor(i) {
    gn((a) => {
      const { drag: r } = this.getProps();
      if (!tl(a, r, this.currentDirection)) return;
      const { projection: l } = this.visualElement,
        u = this.getAxisMotionValue(a);
      if (l && l.layout) {
        const { min: f, max: h } = l.layout.layoutBox[a],
          p = u.get() || 0;
        u.set(i[a] - Lt(f, h, 0.5) + p);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: i, dragConstraints: a } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Bs(a) || !r || !this.constraints) return;
    this.stopAnimation();
    const l = { x: 0, y: 0 };
    gn((f) => {
      const h = this.getAxisMotionValue(f);
      if (h && this.constraints !== !1) {
        const p = h.get();
        l[f] = fj({ min: p, max: p }, this.constraints[f]);
      }
    });
    const { transformTemplate: u } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = u ? u({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      gn((f) => {
        if (!tl(f, i, null)) return;
        const h = this.getAxisMotionValue(f),
          { min: p, max: m } = this.constraints[f];
        h.set(Lt(p, m, l[f]));
      }),
      this.visualElement.render());
  }
  addListeners() {
    if (!this.visualElement.current) return;
    mj.set(this.visualElement, this);
    const i = this.visualElement.current,
      a = ur(i, "pointerdown", (m) => {
        const { drag: y, dragListener: g = !0 } = this.getProps(),
          x = m.target,
          T = x !== i && XO(x);
        y && g && !T && this.start(m);
      });
    let r;
    const l = () => {
        const { dragConstraints: m } = this.getProps();
        Bs(m) &&
          m.current &&
          ((this.constraints = this.resolveRefConstraints()),
          r ||
            (r = yj(i, m.current, () =>
              this.scalePositionWithinConstraints(),
            )));
      },
      { projection: u } = this.visualElement,
      f = u.addEventListener("measure", l);
    (u && !u.layout && (u.root && u.root.updateScroll(), u.updateLayout()),
      At.read(l));
    const h = gr(window, "resize", () => this.scalePositionWithinConstraints()),
      p = u.addEventListener(
        "didUpdate",
        ({ delta: m, hasLayoutChanged: y }) => {
          this.isDragging &&
            y &&
            (gn((g) => {
              const x = this.getAxisMotionValue(g);
              x &&
                ((this.originPoint[g] += m[g].translate),
                x.set(x.get() + m[g].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (h(), a(), f(), p && p(), r && r());
    };
  }
  getProps() {
    const i = this.visualElement.getProps(),
      {
        drag: a = !1,
        dragDirectionLock: r = !1,
        dragPropagation: l = !1,
        dragConstraints: u = !1,
        dragElastic: f = Ad,
        dragMomentum: h = !0,
      } = i;
    return {
      ...i,
      drag: a,
      dragDirectionLock: r,
      dragPropagation: l,
      dragConstraints: u,
      dragElastic: f,
      dragMomentum: h,
    };
  }
}
function Cv(e) {
  let i = !0;
  return () => {
    if (i) {
      i = !1;
      return;
    }
    e();
  };
}
function yj(e, i, a) {
  const r = bd(e, Cv(a)),
    l = bd(i, Cv(a));
  return () => {
    (r(), l());
  };
}
function tl(e, i, a) {
  return (i === !0 || i === e) && (a === null || a === e);
}
function gj(e, i = 10) {
  let a = null;
  return (Math.abs(e.y) > i ? (a = "y") : Math.abs(e.x) > i && (a = "x"), a);
}
class vj extends Ti {
  constructor(i) {
    (super(i),
      (this.removeGroupControls = Se),
      (this.removeListeners = Se),
      (this.controls = new pj(i)));
  }
  mount() {
    const { dragControls: i } = this.node.getProps();
    (i && (this.removeGroupControls = i.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Se));
  }
  update() {
    const { dragControls: i } = this.node.getProps(),
      { dragControls: a } = this.node.prevProps || {};
    i !== a &&
      (this.removeGroupControls(),
      i && (this.removeGroupControls = i.subscribe(this.controls)));
  }
  unmount() {
    (this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession());
  }
}
const Vf = (e) => (i, a) => {
  e && At.update(() => e(i, a), !1, !0);
};
class bj extends Ti {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = Se));
  }
  onPointerDown(i) {
    this.session = new pw(i, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: mw(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: i,
      onPanStart: a,
      onPan: r,
      onPanEnd: l,
    } = this.node.getProps();
    return {
      onSessionStart: Vf(i),
      onStart: Vf(a),
      onMove: Vf(r),
      onEnd: (u, f) => {
        (delete this.session, l && At.postRender(() => l(u, f)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = ur(this.node.current, "pointerdown", (i) =>
      this.onPointerDown(i),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
let Lf = !1;
class xj extends S.Component {
  componentDidMount() {
    const {
        visualElement: i,
        layoutGroup: a,
        switchLayoutGroup: r,
        layoutId: l,
      } = this.props,
      { projection: u } = i;
    (u &&
      (a.group && a.group.add(u),
      r && r.register && l && r.register(u),
      Lf && u.root.didUpdate(),
      u.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      u.setOptions({
        ...u.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      (hl.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(i) {
    const {
        layoutDependency: a,
        visualElement: r,
        drag: l,
        isPresent: u,
      } = this.props,
      { projection: f } = r;
    return (
      f &&
        ((f.isPresent = u),
        i.layoutDependency !== a &&
          f.setOptions({ ...f.options, layoutDependency: a }),
        (Lf = !0),
        l || i.layoutDependency !== a || a === void 0 || i.isPresent !== u
          ? f.willUpdate()
          : this.safeToRemove(),
        i.isPresent !== u &&
          (u
            ? f.promote()
            : f.relegate() ||
              At.postRender(() => {
                const h = f.getStack();
                (!h || !h.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { visualElement: i, layoutAnchor: a } = this.props,
      { projection: r } = i;
    r &&
      ((r.options.layoutAnchor = a),
      r.root.didUpdate(),
      Zs.postRender(() => {
        !r.currentAnimation && r.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: i,
        layoutGroup: a,
        switchLayoutGroup: r,
      } = this.props,
      { projection: l } = i;
    ((Lf = !0),
      l &&
        (l.scheduleCheckAfterUnmount(),
        a && a.group && a.group.remove(l),
        r && r.deregister && r.deregister(l)));
  }
  safeToRemove() {
    const { safeToRemove: i } = this.props;
    i && i();
  }
  render() {
    return null;
  }
}
function gw(e) {
  const [i, a] = aw(),
    r = S.useContext(Kd);
  return b.jsx(xj, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: S.useContext(dw),
    isPresent: i,
    safeToRemove: a,
  });
}
const wj = {
  pan: { Feature: bj },
  drag: { Feature: vj, ProjectionNode: sw, MeasureLayout: gw },
};
function Rv(e, i, a) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", a === "Start");
  const l = "onHover" + a,
    u = r[l];
  u && At.postRender(() => u(i, Rr(i)));
}
class Sj extends Ti {
  mount() {
    const { current: i } = this.node;
    i &&
      (this.unmount = HO(
        i,
        (a, r) => (Rv(this.node, r, "Start"), (l) => Rv(this.node, l, "End")),
      ));
  }
  unmount() {}
}
class Tj extends Ti {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let i = !1;
    try {
      i = this.node.current.matches(":focus-visible");
    } catch {
      i = !0;
    }
    !i ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Tr(
      gr(this.node.current, "focus", () => this.onFocus()),
      gr(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function Mv(e, i, a) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", a === "Start");
  const l = "onTap" + (a === "End" ? "" : a),
    u = r[l];
  u && At.postRender(() => u(i, Rr(i)));
}
class Ej extends Ti {
  mount() {
    const { current: i } = this.node;
    if (!i) return;
    const { globalTapTarget: a, propagate: r } = this.node.props;
    this.unmount = KO(
      i,
      (l, u) => (
        Mv(this.node, u, "Start"),
        (f, { success: h }) => Mv(this.node, f, h ? "End" : "Cancel")
      ),
      { useGlobalTarget: a, stopPropagation: r?.tap === !1 },
    );
  }
  unmount() {}
}
const Cd = new WeakMap(),
  kf = new WeakMap(),
  Aj = (e) => {
    const i = Cd.get(e.target);
    i && i(e);
  },
  Cj = (e) => {
    e.forEach(Aj);
  };
function Rj({ root: e, ...i }) {
  const a = e || document;
  kf.has(a) || kf.set(a, {});
  const r = kf.get(a),
    l = JSON.stringify(i);
  return (
    r[l] || (r[l] = new IntersectionObserver(Cj, { root: e, ...i })),
    r[l]
  );
}
function Mj(e, i, a) {
  const r = Rj(i);
  return (
    Cd.set(e, a),
    r.observe(e),
    () => {
      (Cd.delete(e), r.unobserve(e));
    }
  );
}
const Oj = { some: 0, all: 1 };
class Dj extends Ti {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.stopObserver?.();
    const { viewport: i = {} } = this.node.getProps(),
      { root: a, margin: r, amount: l = "some", once: u } = i,
      f = {
        root: a ? a.current : void 0,
        rootMargin: r,
        threshold: typeof l == "number" ? l : Oj[l],
      },
      h = (p) => {
        const { isIntersecting: m } = p;
        if (
          this.isInView === m ||
          ((this.isInView = m), u && !m && this.hasEnteredView)
        )
          return;
        (m && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", m));
        const { onViewportEnter: y, onViewportLeave: g } = this.node.getProps(),
          x = m ? y : g;
        x && x(p);
      };
    this.stopObserver = Mj(this.node.current, f, h);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: i, prevProps: a } = this.node;
    ["amount", "margin", "root"].some(Nj(i, a)) && this.startObserver();
  }
  unmount() {
    (this.stopObserver?.(), (this.hasEnteredView = !1), (this.isInView = !1));
  }
}
function Nj({ viewport: e = {} }, { viewport: i = {} } = {}) {
  return (a) => e[a] !== i[a];
}
const jj = {
    inView: { Feature: Dj },
    tap: { Feature: Ej },
    focus: { Feature: Tj },
    hover: { Feature: Sj },
  },
  _j = { layout: { ProjectionNode: sw, MeasureLayout: gw } },
  zj = { ...ij, ...jj, ...wj, ..._j },
  dt = $N(zj, JN);
function Ol(e) {
  return typeof window > "u" ? !1 : e ? u1() : ch();
}
const Vj = 50,
  Ov = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  Lj = () => ({ time: 0, x: Ov(), y: Ov() }),
  kj = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function Dv(e, i, a, r) {
  const l = a[i],
    { length: u, position: f } = kj[i],
    h = l.current,
    p = a.time;
  ((l.current = Math.abs(e[`scroll${f}`])),
    (l.scrollLength = e[`scroll${u}`] - e[`client${u}`]),
    (l.offset.length = 0),
    (l.offset[0] = 0),
    (l.offset[1] = l.scrollLength),
    (l.progress = Ks(0, l.scrollLength, l.current)));
  const m = r - p;
  l.velocity = m > Vj ? 0 : Id(l.current - h, m);
}
function Pj(e, i, a) {
  (Dv(e, "x", i, a), Dv(e, "y", i, a), (i.time = a));
}
function Bj(e, i) {
  const a = { x: 0, y: 0 };
  let r = e;
  for (; r && r !== i;)
    if (lr(r))
      ((a.x += r.offsetLeft), (a.y += r.offsetTop), (r = r.offsetParent));
    else if (r.tagName === "svg") {
      const l = r.getBoundingClientRect();
      r = r.parentElement;
      const u = r.getBoundingClientRect();
      ((a.x += l.left - u.left), (a.y += l.top - u.top));
    } else if (r instanceof SVGGraphicsElement) {
      const { x: l, y: u } = r.getBBox();
      ((a.x += l), (a.y += u));
      let f = null,
        h = r.parentNode;
      for (; !f;) (h.tagName === "svg" && (f = h), (h = r.parentNode));
      r = f;
    } else break;
  return a;
}
const Rd = { start: 0, center: 0.5, end: 1 };
function Nv(e, i, a = 0) {
  let r = 0;
  if ((e in Rd && (e = Rd[e]), typeof e == "string")) {
    const l = parseFloat(e);
    e.endsWith("px")
      ? (r = l)
      : e.endsWith("%")
        ? (e = l / 100)
        : e.endsWith("vw")
          ? (r = (l / 100) * document.documentElement.clientWidth)
          : e.endsWith("vh")
            ? (r = (l / 100) * document.documentElement.clientHeight)
            : (e = l);
  }
  return (typeof e == "number" && (r = i * e), a + r);
}
const Uj = [0, 0];
function Hj(e, i, a, r) {
  let l = Array.isArray(e) ? e : Uj,
    u = 0,
    f = 0;
  return (
    typeof e == "number"
      ? (l = [e, e])
      : typeof e == "string" &&
        ((e = e.trim()),
        e.includes(" ") ? (l = e.split(" ")) : (l = [e, Rd[e] ? e : "0"])),
    (u = Nv(l[0], a, r)),
    (f = Nv(l[1], i)),
    u - f
  );
}
const ir = {
    Enter: [
      [0, 1],
      [1, 1],
    ],
    Exit: [
      [0, 0],
      [1, 0],
    ],
    Any: [
      [1, 0],
      [0, 1],
    ],
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  qj = { x: 0, y: 0 };
function Yj(e) {
  return "getBBox" in e && e.tagName !== "svg"
    ? e.getBBox()
    : { width: e.clientWidth, height: e.clientHeight };
}
function Gj(e, i, a) {
  const { offset: r = ir.All } = a,
    { target: l = e, axis: u = "y" } = a,
    f = u === "y" ? "height" : "width",
    h = l !== e ? Bj(l, e) : qj,
    p = l === e ? { width: e.scrollWidth, height: e.scrollHeight } : Yj(l),
    m = { width: e.clientWidth, height: e.clientHeight };
  i[u].offset.length = 0;
  let y = !i[u].interpolate;
  const g = r.length;
  for (let x = 0; x < g; x++) {
    const T = Hj(r[x], m[f], p[f], h[u]);
    (!y && T !== i[u].interpolatorOffsets[x] && (y = !0), (i[u].offset[x] = T));
  }
  (y &&
    ((i[u].interpolate = ah(i[u].offset, a1(r), { clamp: !1 })),
    (i[u].interpolatorOffsets = [...i[u].offset])),
    (i[u].progress = ln(0, 1, i[u].interpolate(i[u].current))));
}
function Xj(e, i = e, a) {
  if (((a.x.targetOffset = 0), (a.y.targetOffset = 0), i !== e)) {
    let r = i;
    for (; r && r !== e;)
      ((a.x.targetOffset += r.offsetLeft),
        (a.y.targetOffset += r.offsetTop),
        (r = r.offsetParent));
  }
  ((a.x.targetLength = i === e ? i.scrollWidth : i.clientWidth),
    (a.y.targetLength = i === e ? i.scrollHeight : i.clientHeight),
    (a.x.containerLength = e.clientWidth),
    (a.y.containerLength = e.clientHeight));
}
function Fj(e, i, a, r = {}) {
  return {
    measure: (l) => {
      (Xj(e, r.target, a), Pj(e, a, l), (r.offset || r.target) && Gj(e, a, r));
    },
    notify: () => i(a),
  };
}
const Ps = new WeakMap(),
  jv = new WeakMap(),
  Pf = new WeakMap(),
  _v = new WeakMap(),
  el = new WeakMap(),
  zv = (e) => (e === document.scrollingElement ? window : e);
function vw(
  e,
  {
    container: i = document.scrollingElement,
    trackContentSize: a = !1,
    ...r
  } = {},
) {
  if (!i) return Se;
  let l = Pf.get(i);
  l || ((l = new Set()), Pf.set(i, l));
  const u = Lj(),
    f = Fj(i, e, u, r);
  if ((l.add(f), !Ps.has(i))) {
    const p = () => {
        for (const x of l) x.measure(re.timestamp);
        At.preUpdate(m);
      },
      m = () => {
        for (const x of l) x.notify();
      },
      y = () => At.read(p);
    Ps.set(i, y);
    const g = zv(i);
    (window.addEventListener("resize", y),
      i !== document.documentElement && jv.set(i, bd(i, y)),
      g.addEventListener("scroll", y),
      y());
  }
  if (a && !el.has(i)) {
    const p = Ps.get(i),
      m = { width: i.scrollWidth, height: i.scrollHeight };
    _v.set(i, m);
    const y = () => {
        const x = i.scrollWidth,
          T = i.scrollHeight;
        (m.width !== x || m.height !== T) &&
          (p(), (m.width = x), (m.height = T));
      },
      g = At.read(y, !0);
    el.set(i, g);
  }
  const h = Ps.get(i);
  return (
    At.read(h, !1, !0),
    () => {
      Qe(h);
      const p = Pf.get(i);
      if (!p || (p.delete(f), p.size)) return;
      const m = Ps.get(i);
      (Ps.delete(i),
        m &&
          (zv(i).removeEventListener("scroll", m),
          jv.get(i)?.(),
          window.removeEventListener("resize", m)));
      const y = el.get(i);
      (y && (Qe(y), el.delete(i)), _v.delete(i));
    }
  );
}
const Kj = [
    [ir.Enter, "entry"],
    [ir.Exit, "exit"],
    [ir.Any, "cover"],
    [ir.All, "contain"],
  ],
  Vv = { start: 0, end: 1 };
function Qj(e) {
  const i = e.trim().split(/\s+/);
  if (i.length !== 2) return;
  const a = Vv[i[0]],
    r = Vv[i[1]];
  if (!(a === void 0 || r === void 0)) return [a, r];
}
function Zj(e) {
  if (e.length !== 2) return;
  const i = [];
  for (const a of e)
    if (Array.isArray(a)) i.push(a);
    else if (typeof a == "string") {
      const r = Qj(a);
      if (!r) return;
      i.push(r);
    } else return;
  return i;
}
function Wj(e, i) {
  const a = Zj(e);
  if (!a) return !1;
  for (let r = 0; r < 2; r++) {
    const l = a[r],
      u = i[r];
    if (l[0] !== u[0] || l[1] !== u[1]) return !1;
  }
  return !0;
}
function Eh(e) {
  if (!e) return { rangeStart: "contain 0%", rangeEnd: "contain 100%" };
  for (const [i, a] of Kj)
    if (Wj(e, i)) return { rangeStart: `${a} 0%`, rangeEnd: `${a} 100%` };
}
const Lv = new Map();
function kv(e) {
  const i = { value: 0 },
    a = vw((r) => {
      i.value = r[e.axis].progress * 100;
    }, e);
  return { currentTime: i, cancel: a };
}
function bw({ source: e, container: i, ...a }) {
  const { axis: r } = a;
  e && (i = e);
  let l = Lv.get(i);
  l || ((l = new Map()), Lv.set(i, l));
  const u = a.target ?? "self";
  let f = l.get(u);
  f || ((f = {}), l.set(u, f));
  const h = r + (a.offset ?? []).join(",");
  return (
    f[h] ||
      (a.target && Ol(a.target)
        ? Eh(a.offset)
          ? (f[h] = new ViewTimeline({ subject: a.target, axis: r }))
          : (f[h] = kv({ container: i, ...a }))
        : Ol()
          ? (f[h] = new ScrollTimeline({ source: i, axis: r }))
          : (f[h] = kv({ container: i, ...a }))),
    f[h]
  );
}
function Ij(e, i) {
  const a = bw(i),
    r = i.target ? Eh(i.offset) : void 0,
    l = i.target ? Ol(i.target) && !!r : Ol();
  return e.attachTimeline({
    timeline: l ? a : void 0,
    ...(r && l && { rangeStart: r.rangeStart, rangeEnd: r.rangeEnd }),
    observe: (u) => (
      u.pause(),
      _1((f) => {
        u.time = u.iterationDuration * f;
      }, a)
    ),
  });
}
function $j(e) {
  return e && (e.target || e.offset);
}
function Jj(e) {
  return e.length === 2;
}
function t5(e, i) {
  return Jj(e) || $j(i)
    ? vw((a) => {
        e(a[i.axis].progress, a);
      }, i)
    : _1(e, bw(i));
}
function xw(
  e,
  { axis: i = "y", container: a = document.scrollingElement, ...r } = {},
) {
  if (!a) return Se;
  const l = { axis: i, container: a, ...r };
  return typeof e == "function" ? t5(e, l) : Ij(e, l);
}
const e5 = () => ({
    scrollX: nn(0),
    scrollY: nn(0),
    scrollXProgress: nn(0),
    scrollYProgress: nn(0),
  }),
  Ys = (e) => (e ? !e.current : !1);
function Pv(e, i, a, r) {
  return {
    factory: (l) => {
      let u;
      const f = () => {
        if (Ys(a) || Ys(r)) {
          Zs.read(f);
          return;
        }
        u = xw(l, {
          ...i,
          axis: e,
          container: a?.current || void 0,
          target: r?.current || void 0,
        });
      };
      return (
        Zs.read(f),
        () => {
          (M1(f), u?.());
        }
      );
    },
    times: [0, 1],
    keyframes: [0, 1],
    ease: (l) => l,
    duration: 1,
  };
}
function n5(e, i) {
  return typeof window > "u" ? !1 : e ? u1() && !!Eh(i) : ch();
}
function Ql({ container: e, target: i, ...a } = {}) {
  const r = xi(e5);
  n5(i, a.offset) &&
    ((r.scrollXProgress.accelerate = Pv("x", a, e, i)),
    (r.scrollYProgress.accelerate = Pv("y", a, e, i)));
  const l = S.useRef(null),
    u = S.useRef(!1),
    f = S.useCallback(
      () => (
        (l.current = xw(
          (h, { x: p, y: m }) => {
            (r.scrollX.set(p.current),
              r.scrollXProgress.set(p.progress),
              r.scrollY.set(m.current),
              r.scrollYProgress.set(m.progress));
          },
          {
            ...a,
            container: e?.current || void 0,
            target: i?.current || void 0,
          },
        )),
        () => {
          l.current?.();
        }
      ),
      [e, i, JSON.stringify(a.offset)],
    );
  return (
    Sr(() => {
      if (((u.current = !1), Ys(e) || Ys(i))) {
        u.current = !0;
        return;
      } else return f();
    }, [f]),
    S.useEffect(() => {
      if (!u.current) return;
      let h;
      const p = () => {
        const m = Ys(e),
          y = Ys(i);
        !m && !y && (h = f());
      };
      return (
        Zs.read(p),
        () => {
          (M1(p), h?.());
        }
      );
    }, [f]),
    r
  );
}
function Dl(e) {
  const i = xi(() => nn(e)),
    { isStatic: a } = S.useContext(Cr);
  if (a) {
    const [, r] = S.useState(e);
    S.useEffect(() => i.on("change", r), []);
  }
  return i;
}
function ww(e, i) {
  const a = Dl(i()),
    r = () => a.set(i());
  return (
    r(),
    Sr(() => {
      const l = () => At.preRender(r, !1, !0),
        u = e.map((f) => f.on("change", l));
      return () => {
        (u.forEach((f) => f()), Qe(r));
      };
    }),
    a
  );
}
function i5(e) {
  ((or.current = []), e());
  const i = ww(or.current, e);
  return ((or.current = void 0), i);
}
function Pt(e, i, a, r) {
  if (typeof e == "function") return i5(e);
  if (a !== void 0 && !Array.isArray(a) && typeof i != "function")
    return s5(e, i, a, r);
  const f = typeof i == "function" ? i : iD(i, a, r),
    h = Array.isArray(e) ? Bv(e, f) : Bv([e], ([m]) => f(m)),
    p = Array.isArray(e) ? void 0 : e.accelerate;
  return (
    p &&
      !p.isTransformed &&
      typeof i != "function" &&
      Array.isArray(a) &&
      r?.clamp !== !1 &&
      (h.accelerate = { ...p, times: i, keyframes: a, isTransformed: !0 }),
    h
  );
}
function Bv(e, i) {
  const a = xi(() => []);
  return ww(e, () => {
    a.length = 0;
    const r = e.length;
    for (let l = 0; l < r; l++) a[l] = e[l].get();
    return i(a);
  });
}
function s5(e, i, a, r) {
  const l = xi(() => Object.keys(a)),
    u = xi(() => ({}));
  for (const f of l) u[f] = Pt(e, i, a[f], r);
  return u;
}
function a5(e, i = {}) {
  const { isStatic: a } = S.useContext(Cr),
    r = () => (ee(e) ? e.get() : e);
  if (a) return Pt(r);
  const l = Dl(r());
  return (S.useInsertionEffect(() => sD(l, e, i), [l, JSON.stringify(i)]), l);
}
function Uv(e, i = {}) {
  return a5(e, { type: "spring", ...i });
}
const r5 = { some: 0, all: 1 };
function o5(e, i, { root: a, margin: r, amount: l = "some" } = {}) {
  const u = ph(e),
    f = new WeakMap(),
    h = (m) => {
      m.forEach((y) => {
        const g = f.get(y.target);
        if (y.isIntersecting !== !!g)
          if (y.isIntersecting) {
            const x = i(y.target, y);
            typeof x == "function" ? f.set(y.target, x) : p.unobserve(y.target);
          } else typeof g == "function" && (g(y), f.delete(y.target));
      });
    },
    p = new IntersectionObserver(h, {
      root: a,
      rootMargin: r,
      threshold: typeof l == "number" ? l : r5[l],
    });
  return (u.forEach((m) => p.observe(m)), () => p.disconnect());
}
function l5(
  e,
  { root: i, margin: a, amount: r, once: l = !1, initial: u = !1 } = {},
) {
  const [f, h] = S.useState(u);
  return (
    S.useEffect(() => {
      if (!e.current || (l && f)) return;
      const p = () => (h(!0), l ? void 0 : () => h(!1)),
        m = { root: (i && i.current) || void 0, margin: a, amount: r };
      return o5(e.current, p, m);
    }, [i, e, a, l, r]),
    f
  );
}
const Hv = "/assets/hero-car-front-34--bQlXVg3.png",
  qv = "/assets/hero-car-side-_ry5yCou.png",
  Yv = "/assets/hero-car-rear-34--MXAykXq.png",
  Gv = "/assets/hero-car-front-IVongOJG.png";
function c5() {
  const e = Dl(0),
    i = Dl(0);
  S.useEffect(() => {
    const l = (u) => {
      (e.set(u.clientX / window.innerWidth - 0.5),
        i.set(u.clientY / window.innerHeight - 0.5));
    };
    return (
      window.addEventListener("mousemove", l),
      () => window.removeEventListener("mousemove", l)
    );
  }, [e, i]);
  const a = Uv(e, { stiffness: 600, damping: 40, mass: 0.3 }),
    r = Uv(i, { stiffness: 600, damping: 40, mass: 0.3 });
  return { x: a, y: r };
}
function u5() {
  const e = S.useRef(null),
    { scrollYProgress: i } = Ql({
      target: e,
      offset: ["start start", "end end"],
    }),
    { x: a, y: r } = c5(),
    l = Pt(i, [0, 0.25, 0.75, 1], [1, 0, 0, 1]),
    u = Pt(i, [0, 0.25, 0.5], [0, 1, 0]),
    f = Pt(i, [0.25, 0.5, 0.75], [0, 1, 0]),
    h = Pt(i, [0.5, 0.75, 1], [0, 1, 0]),
    p = Pt(a, [-0.5, 0.5], ["2%", "-2%"]),
    m = Pt(r, [-0.5, 0.5], ["2%", "-2%"]),
    y = Pt(a, [-0.5, 0.5], ["4%", "-4%"]),
    g = Pt(r, [-0.5, 0.5], ["4%", "-4%"]),
    x = Pt(a, [-0.5, 0.5], ["8%", "-8%"]),
    T = Pt(r, [-0.5, 0.5], ["8%", "-8%"]),
    E = Pt(a, [-0.5, 0.5], ["3%", "-3%"]),
    C = Pt(r, [-0.5, 0.5], ["3%", "-3%"]),
    R = Pt(a, [-0.5, 0.5], ["-8%", "8%"]),
    D = Pt(r, [-0.5, 0.5], ["-8%", "8%"]),
    N = Pt(a, [-0.5, 0.5], ["-15%", "15%"]),
    j = Pt(r, [-0.5, 0.5], ["-15%", "15%"]),
    V = Pt(i, [0, 1], [0, 212]),
    U = Pt(i, [0, 1], [1e3, 8500]),
    [X, Z] = S.useState(0),
    [P, I] = S.useState(1e3);
  return (
    S.useEffect(() => V.on("change", (W) => Z(Math.round(W))), [V]),
    S.useEffect(() => U.on("change", (W) => I(Math.round(W))), [U]),
    b.jsx("div", {
      ref: e,
      className: "relative w-full bg-black h-[250vh]",
      children: b.jsxs("div", {
        className:
          "sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center perspective-1000",
        children: [
          b.jsx(dt.div, {
            className:
              "absolute left-0 w-full h-[2px] bg-primary z-50 shadow-[0_0_20px_#FF4500]",
            initial: { top: "-10%" },
            animate: { top: "110%" },
            transition: { duration: 1.5, ease: "linear", delay: 0.2 },
          }),
          b.jsx(dt.div, {
            className: "absolute inset-0 z-0 opacity-30 pointer-events-none",
            style: { x: p, y: m },
            children: b.jsx("div", {
              className: "absolute inset-0",
              style: {
                backgroundImage:
                  "linear-gradient(rgba(255, 69, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 69, 0, 0.1) 1px, transparent 1px)",
                backgroundSize: "80px 80px",
                transform:
                  "perspective(1000px) rotateX(60deg) scale(2.5) translateY(-20%)",
                transformOrigin: "top center",
              },
            }),
          }),
          b.jsx(dt.div, {
            className:
              "absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vh] rounded-full pointer-events-none mix-blend-screen z-0",
            style: {
              background:
                "radial-gradient(circle, rgba(255,69,0,0.15) 0%, transparent 70%)",
            },
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 1, delay: 0.5 },
          }),
          b.jsx(dt.div, {
            className:
              "absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none",
            style: { x: y, y: g },
            children: b.jsxs("svg", {
              viewBox: "0 0 1000 1000",
              className:
                "w-[150vw] h-[150vw] max-w-[1500px] max-h-[1500px] animate-[spin_120s_linear_infinite]",
              children: [
                b.jsx("circle", {
                  cx: "500",
                  cy: "500",
                  r: "400",
                  fill: "none",
                  stroke: "#FF4500",
                  strokeWidth: "2",
                  strokeDasharray: "10 20",
                }),
                b.jsx("circle", {
                  cx: "500",
                  cy: "500",
                  r: "350",
                  fill: "none",
                  stroke: "#FF4500",
                  strokeWidth: "1",
                  strokeDasharray: "5 5",
                }),
                b.jsx("circle", {
                  cx: "500",
                  cy: "500",
                  r: "450",
                  fill: "none",
                  stroke: "#FF4500",
                  strokeWidth: "0.5",
                }),
                b.jsx("line", {
                  x1: "100",
                  y1: "500",
                  x2: "900",
                  y2: "500",
                  stroke: "#FF4500",
                  strokeWidth: "1",
                }),
                b.jsx("line", {
                  x1: "500",
                  y1: "100",
                  x2: "500",
                  y2: "900",
                  stroke: "#FF4500",
                  strokeWidth: "1",
                }),
              ],
            }),
          }),
          b.jsxs(dt.div, {
            className: "absolute inset-0 z-0 pointer-events-none",
            style: { x, y: T },
            children: [
              b.jsxs(dt.svg, {
                className:
                  "absolute top-[20%] right-[15%] w-32 h-32 text-primary/40",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1",
                animate: { rotate: 360 },
                transition: { duration: 40, repeat: 1 / 0, ease: "linear" },
                children: [
                  b.jsx("path", {
                    d: "M12 2v4m0 12v4M2 12h4m12 0h4m-3.5-7.5l-2.8 2.8m-7.4 7.4l-2.8 2.8m13-10.2l-2.8-2.8M6.3 17.7l-2.8-2.8",
                  }),
                  b.jsx("circle", { cx: "12", cy: "12", r: "4" }),
                ],
              }),
              b.jsxs(dt.svg, {
                className:
                  "absolute bottom-[30%] left-[40%] w-48 h-48 text-primary/20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1",
                animate: { rotate: -360 },
                transition: { duration: 60, repeat: 1 / 0, ease: "linear" },
                children: [
                  b.jsx("path", {
                    d: "M12 2v4m0 12v4M2 12h4m12 0h4m-3.5-7.5l-2.8 2.8m-7.4 7.4l-2.8 2.8m13-10.2l-2.8-2.8M6.3 17.7l-2.8-2.8",
                  }),
                  b.jsx("circle", { cx: "12", cy: "12", r: "6" }),
                ],
              }),
              b.jsx(dt.svg, {
                className:
                  "absolute top-[40%] left-[10%] w-24 h-24 text-primary/30",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1",
                animate: { rotate: [0, 15, -15, 0] },
                transition: { duration: 10, repeat: 1 / 0, ease: "easeInOut" },
                children: b.jsx("path", {
                  d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
                }),
              }),
            ],
          }),
          b.jsx(dt.div, {
            className:
              "absolute inset-0 flex items-center justify-end pr-[5vw] lg:pr-[10vw] z-10 pointer-events-none",
            style: { x: E, y: C },
            children: b.jsxs(dt.div, {
              className:
                "relative w-[85vw] md:w-[75vw] lg:w-[65vw] max-w-[1200px] aspect-[16/9]",
              initial: { y: 150, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: {
                duration: 1.5,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              },
              children: [
                b.jsx(dt.img, {
                  src: Hv,
                  alt: "Car Front 3/4",
                  className:
                    "absolute inset-0 w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(255,69,0,0.15)]",
                  style: { opacity: l },
                }),
                b.jsx(dt.img, {
                  src: qv,
                  alt: "Car Side",
                  className:
                    "absolute inset-0 w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(255,69,0,0.15)]",
                  style: { opacity: u },
                }),
                b.jsx(dt.img, {
                  src: Yv,
                  alt: "Car Rear 3/4",
                  className:
                    "absolute inset-0 w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(255,69,0,0.15)]",
                  style: { opacity: f },
                }),
                b.jsx(dt.img, {
                  src: Gv,
                  alt: "Car Front",
                  className:
                    "absolute inset-0 w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(255,69,0,0.15)]",
                  style: { opacity: h },
                }),
                b.jsx("div", {
                  className:
                    "absolute -bottom-[5%] left-[20%] right-[20%] h-[15%] bg-black blur-2xl rounded-[100%]",
                }),
                b.jsx("div", {
                  className:
                    "absolute -bottom-[5%] left-[25%] right-[25%] h-[10%] bg-primary/20 blur-3xl rounded-[100%]",
                }),
                b.jsxs("div", {
                  className:
                    "absolute top-[85%] left-0 w-full h-[60%] scale-y-[-1] opacity-40 pointer-events-none",
                  style: {
                    WebkitMaskImage:
                      "linear-gradient(to bottom, rgba(0,0,0,1) 0%, transparent 60%)",
                    maskImage:
                      "linear-gradient(to bottom, rgba(0,0,0,1) 0%, transparent 60%)",
                  },
                  children: [
                    b.jsx(dt.img, {
                      src: Hv,
                      className:
                        "absolute inset-0 w-full h-full object-contain",
                      style: { opacity: l },
                    }),
                    b.jsx(dt.img, {
                      src: qv,
                      className:
                        "absolute inset-0 w-full h-full object-contain",
                      style: { opacity: u },
                    }),
                    b.jsx(dt.img, {
                      src: Yv,
                      className:
                        "absolute inset-0 w-full h-full object-contain",
                      style: { opacity: f },
                    }),
                    b.jsx(dt.img, {
                      src: Gv,
                      className:
                        "absolute inset-0 w-full h-full object-contain",
                      style: { opacity: h },
                    }),
                  ],
                }),
              ],
            }),
          }),
          b.jsxs(dt.div, {
            className:
              "absolute inset-0 z-20 pointer-events-none flex items-center justify-center",
            style: { x: R, y: D },
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 1, delay: 1.5 },
            children: [
              b.jsxs("div", {
                className:
                  "absolute top-[35%] right-[20%] w-[15vw] border-b border-primary/40 hidden lg:block",
                children: [
                  b.jsx("div", {
                    className:
                      "absolute -top-5 right-0 text-primary font-mono text-[10px] tracking-widest uppercase",
                    children: "V12 Biturbo // 720 HP",
                  }),
                  b.jsx("div", {
                    className:
                      "absolute -left-1.5 -bottom-1.5 w-3 h-3 border border-primary rounded-full bg-black flex items-center justify-center",
                    children: b.jsx("div", {
                      className: "w-1 h-1 bg-primary rounded-full",
                    }),
                  }),
                ],
              }),
              b.jsxs("div", {
                className:
                  "absolute bottom-[35%] right-[55%] w-[12vw] border-b border-primary/40 hidden lg:block origin-left -rotate-12",
                children: [
                  b.jsx("div", {
                    className:
                      "absolute -top-5 left-0 text-primary font-mono text-[10px] tracking-widest uppercase",
                    children: "Aero Force // 1200kg",
                  }),
                  b.jsx("div", {
                    className:
                      "absolute -right-1.5 -bottom-1.5 w-3 h-3 border border-primary rounded-full bg-black flex items-center justify-center",
                    children: b.jsx("div", {
                      className: "w-1 h-1 bg-primary rounded-full",
                    }),
                  }),
                ],
              }),
              b.jsxs("div", {
                className:
                  "absolute bottom-[25%] right-[10%] text-right font-mono text-primary/90",
                children: [
                  b.jsxs("div", {
                    className:
                      "text-5xl lg:text-7xl font-bold tracking-tighter drop-shadow-[0_0_15px_rgba(255,69,0,0.5)]",
                    children: [
                      X,
                      " ",
                      b.jsx("span", {
                        className: "text-xl text-primary/50 tracking-normal",
                        children: "MPH",
                      }),
                    ],
                  }),
                  b.jsxs("div", {
                    className:
                      "text-2xl lg:text-3xl mt-1 font-light opacity-80",
                    children: [
                      P,
                      " ",
                      b.jsx("span", {
                        className: "text-sm text-primary/50",
                        children: "RPM",
                      }),
                    ],
                  }),
                  b.jsx("div", {
                    className: "flex items-end justify-end gap-1 h-8 mt-4",
                    children: [...Array(12)].map((W, $) =>
                      b.jsx(
                        dt.div,
                        {
                          className: "w-1.5 bg-primary/70",
                          animate: { height: ["20%", "100%", "20%"] },
                          transition: {
                            duration: 0.5 + Math.random(),
                            repeat: 1 / 0,
                            ease: "easeInOut",
                            delay: Math.random(),
                          },
                        },
                        $,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
          b.jsx(dt.div, {
            className: "absolute inset-0 z-30 pointer-events-none",
            style: { x: N, y: j },
            children: [...Array(25)].map((W, $) =>
              b.jsx(
                dt.div,
                {
                  className:
                    "absolute w-1.5 h-1.5 bg-primary rounded-full blur-[1px]",
                  style: {
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    opacity: 0.2 + Math.random() * 0.5,
                  },
                  animate: {
                    y: [0, -30, 0],
                    x: [0, Math.random() * 15 - 7.5, 0],
                    scale: [1, 1.5, 1],
                  },
                  transition: {
                    duration: 2 + Math.random() * 3,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                  },
                },
                $,
              ),
            ),
          }),
          b.jsx("div", {
            className:
              "absolute inset-0 z-40 flex items-center pointer-events-none",
            children: b.jsx("div", {
              className: "container mx-auto px-6 lg:px-12 w-full flex",
              children: b.jsxs("div", {
                className:
                  "w-full lg:w-1/2 flex flex-col items-start text-left pt-20 pointer-events-auto",
                children: [
                  b.jsxs(dt.div, {
                    initial: { opacity: 0, x: -50 },
                    animate: { opacity: 1, x: 0 },
                    transition: { duration: 0.8, delay: 1.5, ease: "easeOut" },
                    className: "mb-8 flex items-center gap-4",
                    children: [
                      b.jsx("div", {
                        className:
                          "h-[2px] w-12 bg-primary drop-shadow-[0_0_8px_rgba(255,69,0,0.8)]",
                      }),
                      b.jsx("span", {
                        className:
                          "text-primary font-sans font-bold tracking-[0.4em] uppercase text-xs md:text-sm drop-shadow-[0_0_8px_rgba(255,69,0,0.5)]",
                        children: "Apex Motors / Elite Performance",
                      }),
                    ],
                  }),
                  b.jsxs(dt.h1, {
                    initial: { opacity: 0, x: -50 },
                    animate: { opacity: 1, x: 0 },
                    transition: { duration: 0.8, delay: 1.7, ease: "easeOut" },
                    className:
                      "text-7xl md:text-8xl lg:text-9xl font-display font-bold uppercase leading-[0.85] tracking-tight mb-8",
                    children: [
                      "Built To",
                      b.jsx("br", {}),
                      b.jsx("span", {
                        className:
                          "text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-primary text-shadow-glow block my-2",
                        children: "Dominate",
                      }),
                      "The Track",
                    ],
                  }),
                  b.jsx(dt.p, {
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.8, delay: 1.9, ease: "easeOut" },
                    className:
                      "text-white/60 font-sans text-lg md:text-xl max-w-md mb-12 leading-relaxed border-l-2 border-primary/50 pl-6",
                    children:
                      "Every bolt torqued. Every system optimized. Every car transformed into a weapon.",
                  }),
                  b.jsx(dt.div, {
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.8, delay: 2.1, ease: "easeOut" },
                    children: b.jsxs("button", {
                      className:
                        "group relative px-12 py-5 bg-transparent border border-primary/50 text-white font-display text-2xl uppercase tracking-widest clip-diagonal overflow-hidden transition-all hover:border-primary",
                      children: [
                        b.jsx("div", {
                          className:
                            "absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0",
                        }),
                        b.jsxs("span", {
                          className:
                            "relative z-10 flex items-center gap-4 group-hover:text-black transition-colors",
                          children: [
                            "Ignition",
                            b.jsxs("svg", {
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              className:
                                "group-hover:translate-x-2 transition-transform",
                              children: [
                                b.jsx("line", {
                                  x1: "5",
                                  y1: "12",
                                  x2: "19",
                                  y2: "12",
                                }),
                                b.jsx("polyline", {
                                  points: "12 5 19 12 12 19",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          }),
          b.jsx(dt.div, {
            className:
              "absolute bottom-0 left-0 w-full bg-black/80 backdrop-blur-md border-t border-primary/20 overflow-hidden z-50 h-16 flex items-center",
            initial: { y: "100%" },
            animate: { y: "0%" },
            transition: { duration: 0.8, delay: 2.3, ease: "easeOut" },
            children: b.jsx(dt.div, {
              className:
                "flex whitespace-nowrap text-xs md:text-sm font-sans font-bold tracking-[0.2em] uppercase text-white/50",
              animate: { x: ["0%", "-50%"] },
              transition: { duration: 20, ease: "linear", repeat: 1 / 0 },
              children: [...Array(4)].map((W, $) =>
                b.jsxs(
                  "span",
                  {
                    className: "flex items-center",
                    children: [
                      b.jsx("span", {
                        className:
                          "mx-8 text-primary drop-shadow-[0_0_5px_rgba(255,69,0,0.8)]",
                        children: "·",
                      }),
                      " ENGINE TUNING",
                      b.jsx("span", {
                        className:
                          "mx-8 text-primary drop-shadow-[0_0_5px_rgba(255,69,0,0.8)]",
                        children: "·",
                      }),
                      " TRACK PREP",
                      b.jsx("span", {
                        className:
                          "mx-8 text-primary drop-shadow-[0_0_5px_rgba(255,69,0,0.8)]",
                        children: "·",
                      }),
                      " SUSPENSION",
                      b.jsx("span", {
                        className:
                          "mx-8 text-primary drop-shadow-[0_0_5px_rgba(255,69,0,0.8)]",
                        children: "·",
                      }),
                      " DIAGNOSTICS",
                      b.jsx("span", {
                        className:
                          "mx-8 text-primary drop-shadow-[0_0_5px_rgba(255,69,0,0.8)]",
                        children: "·",
                      }),
                      " DETAILING",
                    ],
                  },
                  $,
                ),
              ),
            }),
          }),
        ],
      }),
    })
  );
}
const f5 = [
  {
    title: "Engine Tuning",
    desc: "Unlocking hidden horsepower. Precision remaps, forced induction upgrades, and dyno-proven calibration for hypercars.",
    icon: "01",
    stats: "+15% Output",
  },
  {
    title: "Track Prep",
    desc: "Surgical suspension tuning, corner balancing, and aero adjustments. Turn your weekend car into a circuit weapon.",
    icon: "02",
    stats: "1.2g Lateral",
  },
  {
    title: "Bespoke Bodywork",
    desc: "Carbon fiber integration, widebody fabrication, and flawless paint correction. Aggressive, seamless, engineered.",
    icon: "03",
    stats: "Zero Tolerance",
  },
  {
    title: "Diagnostics",
    desc: "Telemetry analysis and deep ECU interrogation. We don't guess, we measure. Total system awareness.",
    icon: "04",
    stats: "100% Precision",
  },
];
function d5({ service: e, index: i }) {
  const a = S.useRef(null),
    [r, l] = S.useState(0),
    [u, f] = S.useState(0),
    h = (m) => {
      if (!a.current) return;
      const y = a.current.getBoundingClientRect(),
        g = m.clientX - y.left,
        x = m.clientY - y.top,
        T = y.width / 2,
        E = y.height / 2,
        C = ((x - E) / E) * -15,
        R = ((g - T) / T) * 15;
      (l(C), f(R));
    },
    p = () => {
      (l(0), f(0));
    };
  return b.jsx(dt.div, {
    ref: a,
    onMouseMove: h,
    onMouseLeave: p,
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: !0, margin: "-100px" },
    transition: { duration: 0.6, delay: i * 0.1 },
    style: { transformStyle: "preserve-3d", rotateX: r, rotateY: u },
    className:
      "relative w-full aspect-[4/5] perspective-1000 group cursor-none",
    children: b.jsxs("div", {
      className:
        "absolute inset-0 bg-neutral-900 border border-neutral-800 clip-diagonal-reverse overflow-hidden transition-colors duration-500 group-hover:border-primary/50",
      children: [
        b.jsx("div", {
          className:
            "absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500",
        }),
        b.jsx("div", {
          className:
            "absolute -bottom-10 -right-10 text-[200px] font-display font-bold text-neutral-800/30 leading-none group-hover:text-primary/10 transition-colors duration-500 pointer-events-none",
          children: e.icon,
        }),
        b.jsxs("div", {
          className: "relative h-full p-8 flex flex-col z-10",
          style: { transform: "translateZ(50px)" },
          children: [
            b.jsx("div", {
              className: "flex justify-between items-start mb-auto",
              children: b.jsxs("span", {
                className:
                  "text-primary font-mono text-sm border border-primary/30 px-2 py-1 bg-primary/5 clip-diagonal",
                children: ["SYS.", e.icon],
              }),
            }),
            b.jsxs("div", {
              children: [
                b.jsx("h3", {
                  className:
                    "text-3xl font-display uppercase mb-4 text-white group-hover:text-primary transition-colors",
                  children: e.title,
                }),
                b.jsx("p", {
                  className:
                    "text-neutral-400 font-sans text-sm leading-relaxed mb-6",
                  children: e.desc,
                }),
                b.jsxs("div", {
                  className:
                    "flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-neutral-500",
                  children: [
                    b.jsx("span", {
                      className:
                        "w-8 h-[1px] bg-neutral-700 group-hover:bg-primary transition-colors",
                    }),
                    e.stats,
                  ],
                }),
              ],
            }),
          ],
        }),
        b.jsx("div", {
          className:
            "absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none mix-blend-overlay",
          style: {
            background:
              "linear-gradient(105deg, transparent 20%, white 25%, transparent 30%)",
            backgroundSize: "200% 200%",
            animation: "shine 3s infinite linear",
          },
        }),
      ],
    }),
  });
}
function h5() {
  const e = S.useRef(null),
    { scrollYProgress: i } = Ql({
      target: e,
      offset: ["start end", "end start"],
    }),
    a = Pt(i, [0, 1], ["0%", "50%"]);
  return b.jsxs("section", {
    id: "services",
    ref: e,
    className: "relative py-32 bg-background overflow-hidden",
    children: [
      b.jsx("div", {
        className:
          "absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent",
      }),
      b.jsxs("div", {
        className: "max-w-7xl mx-auto px-6 relative z-10",
        children: [
          b.jsxs(dt.div, {
            style: { y: a },
            className: "mb-24 md:flex items-end justify-between",
            children: [
              b.jsxs("div", {
                children: [
                  b.jsx("h2", {
                    className:
                      "text-sm font-sans tracking-[0.3em] text-primary uppercase mb-4",
                    children: "Precision Engineering",
                  }),
                  b.jsxs("h3", {
                    className:
                      "text-6xl md:text-8xl font-display uppercase leading-[0.85]",
                    children: [
                      "System",
                      b.jsx("br", {}),
                      b.jsx("span", {
                        className:
                          "text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-600",
                        children: "Upgrades",
                      }),
                    ],
                  }),
                ],
              }),
              b.jsx("p", {
                className:
                  "max-w-sm text-neutral-400 font-sans text-sm mt-8 md:mt-0 border-l border-primary/50 pl-4",
                children:
                  "We don't do oil changes. We extract every ounce of performance your machine was designed to deliver, and then push it further.",
              }),
            ],
          }),
          b.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
            children: f5.map((r, l) => b.jsx(d5, { service: r, index: l }, l)),
          }),
        ],
      }),
    ],
  });
}
const m5 = "/assets/workshop-bg-Cp9rHD0L.jpg",
  p5 = "/assets/engine-detail-E3mW53rc.jpg";
function y5() {
  const e = S.useRef(null),
    { scrollYProgress: i } = Ql({
      target: e,
      offset: ["start end", "end start"],
    }),
    a = Pt(i, [0, 1], ["0%", "25%"]),
    r = Pt(i, [0, 1], ["5%", "-10%"]);
  return b.jsxs("section", {
    id: "workshop",
    ref: e,
    className: "relative h-[140vh] w-full bg-black overflow-hidden",
    children: [
      b.jsxs(dt.div, {
        className: "absolute inset-0 z-0",
        style: { y: a },
        children: [
          b.jsx("img", {
            src: m5,
            alt: "Workshop",
            className: "absolute inset-0 w-full h-full object-cover",
            style: { opacity: 0.38 },
          }),
          b.jsx("div", {
            className:
              "absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80",
          }),
          b.jsx("div", {
            className:
              "absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40",
          }),
        ],
      }),
      b.jsx("div", {
        className:
          "md:sticky top-0 md:h-screen w-full flex items-center z-10 py-24 md:py-0",
        children: b.jsxs("div", {
          className:
            "w-full max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
          children: [
            b.jsxs("div", {
              children: [
                b.jsx(dt.p, {
                  initial: { opacity: 0, x: -20 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: !0 },
                  transition: { duration: 0.5 },
                  className:
                    "font-mono text-[11px] text-primary uppercase tracking-[0.35em] mb-5",
                  children: "// The Workshop",
                }),
                b.jsxs(dt.h2, {
                  initial: { opacity: 0, x: -30 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: !0 },
                  transition: { duration: 0.65, delay: 0.08 },
                  className:
                    "font-display text-6xl md:text-8xl uppercase leading-none tracking-tighter text-white mb-7",
                  children: [
                    "Where Metal",
                    b.jsx("br", {}),
                    "Meets",
                    b.jsx("br", {}),
                    b.jsx("span", {
                      className: "text-primary",
                      children: "Myth.",
                    }),
                  ],
                }),
                b.jsx(dt.p, {
                  initial: { opacity: 0, x: -20 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: !0 },
                  transition: { duration: 0.55, delay: 0.18 },
                  className:
                    "text-neutral-400 font-sans text-sm leading-relaxed max-w-md",
                  children:
                    "A climate-controlled sanctuary equipped with surgical-grade diagnostics and bespoke fabrication tools. No dust. No shortcuts. We build what factories couldn't imagine.",
                }),
                b.jsx(dt.div, {
                  initial: { opacity: 0, y: 16 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  transition: { duration: 0.55, delay: 0.28 },
                  className: "flex gap-10 mt-10 pt-8 border-t border-white/10",
                  children: [
                    ["8,000", "sq/ft Facility"],
                    ["3", "Active Lifts"],
                    ["24 hr", "Climate Control"],
                  ].map(([l, u]) =>
                    b.jsxs(
                      "div",
                      {
                        children: [
                          b.jsx("div", {
                            className:
                              "font-display text-3xl text-primary leading-none",
                            children: l,
                          }),
                          b.jsx("div", {
                            className:
                              "font-mono text-[9px] text-white/35 uppercase tracking-widest mt-1",
                            children: u,
                          }),
                        ],
                      },
                      u,
                    ),
                  ),
                }),
              ],
            }),
            b.jsxs(dt.div, {
              initial: { opacity: 0, x: 30 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: !0 },
              transition: { duration: 0.7, delay: 0.12 },
              style: { y: r },
              className: "relative w-full aspect-[4/5] overflow-hidden",
              children: [
                b.jsx("div", {
                  className: "absolute inset-0 ring-1 ring-primary/25 z-20",
                }),
                b.jsx("div", {
                  className:
                    "absolute top-4 left-4 z-30 font-mono text-[10px] text-primary/70 uppercase tracking-widest",
                  children: "// ENGINE CORE",
                }),
                b.jsx("div", {
                  className:
                    "absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary z-30",
                }),
                b.jsx("div", {
                  className:
                    "absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary z-30",
                }),
                b.jsx("div", {
                  className:
                    "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10",
                }),
                b.jsx("div", {
                  className:
                    "absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/40 z-10",
                }),
                b.jsx("img", {
                  src: p5,
                  alt: "Engine detail",
                  className: "w-full h-full object-cover",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function g5({ from: e, to: i, duration: a, suffix: r = "" }) {
  const l = S.useRef(null),
    u = l5(l, { once: !0, margin: "-50px" }),
    [f, h] = S.useState(e);
  return (
    S.useEffect(() => {
      if (!u) return;
      let p, m;
      const y = (g) => {
        p || (p = g);
        const x = (g - p) / (a * 1e3);
        if (x < 1) {
          const T = x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
          (h(Math.floor(e + (i - e) * T)), (m = requestAnimationFrame(y)));
        } else h(i);
      };
      return ((m = requestAnimationFrame(y)), () => cancelAnimationFrame(m));
    }, [u, e, i, a]),
    b.jsxs("span", {
      ref: l,
      className: "font-display font-bold",
      children: [f, r],
    })
  );
}
const v5 = [
  {
    value: 1200,
    suffix: "+",
    label: "Engines Built",
    desc: "Precision assembled",
  },
  {
    value: 15e3,
    suffix: "HP",
    label: "Total Output Added",
    desc: "Dyno verified",
  },
  { value: 0, suffix: ".01mm", label: "Tolerance", desc: "Surgical accuracy" },
  { value: 24, suffix: "/7", label: "Track Support", desc: "Always ready" },
];
function b5() {
  return b.jsxs("section", {
    className:
      "py-24 bg-neutral-950 border-y border-neutral-900 relative overflow-hidden",
    children: [
      b.jsx("div", {
        className: "absolute inset-0 opacity-10",
        style: {
          backgroundImage: `
            linear-gradient(to right, #333 1px, transparent 1px),
            linear-gradient(to bottom, #333 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        },
      }),
      b.jsx("div", {
        className: "max-w-7xl mx-auto px-6 relative z-10",
        children: b.jsx("div", {
          className: "grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8",
          children: v5.map((e, i) =>
            b.jsxs(
              dt.div,
              {
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0 },
                transition: { duration: 0.5, delay: i * 0.1 },
                className: "flex flex-col relative group",
                children: [
                  b.jsx("div", {
                    className:
                      "absolute -left-4 top-0 w-[2px] h-0 bg-primary group-hover:h-full transition-all duration-500 ease-out",
                  }),
                  b.jsx("div", {
                    className:
                      "absolute -top-4 left-0 w-4 h-[2px] bg-primary opacity-0 group-hover:opacity-100 transition-opacity delay-300",
                  }),
                  b.jsx("div", {
                    className:
                      "text-5xl md:text-7xl text-white mb-2 tracking-tighter flex items-end gap-1",
                    children: b.jsx(g5, {
                      from: 0,
                      to: e.value,
                      duration: 2,
                      suffix: e.suffix,
                    }),
                  }),
                  b.jsx("h4", {
                    className:
                      "text-primary font-mono text-sm uppercase tracking-widest mb-1",
                    children: e.label,
                  }),
                  b.jsx("p", {
                    className:
                      "text-neutral-500 font-sans text-xs uppercase tracking-wider",
                    children: e.desc,
                  }),
                ],
              },
              i,
            ),
          ),
        }),
      }),
    ],
  });
}
const x5 = "/assets/marcus-vance-DIAXN_3b.jpg",
  w5 = [
    {
      name: 'Viktor "The Surgeon" Volkov',
      role: "Lead Engine Calibrator",
      specialty: "Twin-Turbo V10s, Custom ECU Mapping",
      image: "/mechanic.jpg",
    },
    {
      name: "Marcus Vance",
      role: "Aerodynamics & Chassis",
      specialty: "Carbon Fabrication, Suspension Geometry",
      image: x5,
    },
  ];
function S5() {
  return b.jsx("section", {
    id: "team",
    className: "py-32 bg-black relative",
    children: b.jsxs("div", {
      className: "max-w-7xl mx-auto px-6",
      children: [
        b.jsxs("div", {
          className: "text-center mb-24",
          children: [
            b.jsx(dt.h2, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              className:
                "text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4",
              children: "The Architects of Speed",
            }),
            b.jsx(dt.h3, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              transition: { delay: 0.1 },
              className:
                "text-5xl md:text-7xl font-display uppercase text-white",
              children: "Master Mechanics",
            }),
          ],
        }),
        b.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8",
          children: w5.map((e, i) =>
            b.jsxs(
              dt.div,
              {
                initial: { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: !0 },
                transition: { duration: 0.8, ease: "easeOut" },
                className: "relative group cursor-none",
                children: [
                  b.jsxs("div", {
                    className:
                      "relative aspect-[3/4] overflow-hidden clip-diagonal grayscale group-hover:grayscale-0 transition-all duration-700",
                    children: [
                      b.jsx("img", {
                        src: e.image,
                        alt: e.name,
                        className:
                          "w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700",
                      }),
                      b.jsx("div", {
                        className:
                          "absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent",
                      }),
                      b.jsxs("div", {
                        className:
                          "absolute inset-0 border-[0.5px] border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none",
                        children: [
                          b.jsx("div", {
                            className:
                              "absolute top-4 left-4 w-4 h-4 border-t border-l border-primary",
                          }),
                          b.jsx("div", {
                            className:
                              "absolute bottom-4 right-4 w-4 h-4 border-b border-r border-primary",
                          }),
                        ],
                      }),
                    ],
                  }),
                  b.jsxs("div", {
                    className:
                      "absolute -bottom-8 md:bottom-12 md:-right-8 bg-neutral-900 border border-neutral-800 p-6 md:w-80 shadow-2xl z-20 group-hover:border-primary/50 transition-colors duration-500 clip-diagonal",
                    children: [
                      b.jsxs("div", {
                        className: "font-mono text-xs text-primary mb-2",
                        children: ["ID: 00", i + 1, " // ACTIVE"],
                      }),
                      b.jsx("h4", {
                        className:
                          "font-display text-3xl uppercase text-white mb-1",
                        children: e.name,
                      }),
                      b.jsx("p", {
                        className:
                          "font-sans font-bold text-sm text-neutral-300 uppercase mb-4 tracking-wider",
                        children: e.role,
                      }),
                      b.jsxs("div", {
                        className: "pt-4 border-t border-neutral-800",
                        children: [
                          b.jsx("p", {
                            className:
                              "font-mono text-xs text-neutral-500 uppercase tracking-widest mb-1",
                            children: "Specialty",
                          }),
                          b.jsx("p", {
                            className: "font-sans text-sm text-neutral-400",
                            children: e.specialty,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              },
              i,
            ),
          ),
        }),
      ],
    }),
  });
}
const T5 = [
  {
    text: "They found 120hp that the factory software left on the table. It doesn't drive like the same car. It's violent, in the best way possible.",
    author: "James T.",
    car: "Porsche 911 Turbo S",
  },
  {
    text: "Apex isn't a mechanic shop. It's an engineering firm for people who hate losing. My lap times dropped by 2.4 seconds after they dialed in the aero.",
    author: "Sarah H.",
    car: "McLaren 720S",
  },
  {
    text: "Other shops said it couldn't be done. Apex built it, mapped it, and warrantied it. Uncompromising pursuit of perfection.",
    author: "David C.",
    car: "Audi R8 Twin Turbo",
  },
];
function E5() {
  return b.jsxs("section", {
    id: "testimonials",
    className:
      "py-32 bg-neutral-950 relative border-t border-neutral-900 overflow-hidden",
    children: [
      b.jsx("div", {
        className:
          "absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap text-[15rem] md:text-[20rem] font-display font-bold text-neutral-900/40 pointer-events-none select-none z-0 tracking-tighter",
        children: "NO COMPROMISE",
      }),
      b.jsx("div", {
        className: "max-w-7xl mx-auto px-6 relative z-10",
        children: b.jsxs("div", {
          className: "flex flex-col md:flex-row gap-12 items-center",
          children: [
            b.jsxs("div", {
              className: "md:w-1/3",
              children: [
                b.jsx("h2", {
                  className: "text-5xl font-display uppercase text-white mb-6",
                  children: "Built For The Elite",
                }),
                b.jsx("p", {
                  className: "text-neutral-400 font-sans text-sm mb-8",
                  children:
                    "We don't do marketing. Our results speak on the asphalt. Read what the owners of the world's most capable machines have to say.",
                }),
                b.jsxs("div", {
                  className: "flex gap-4",
                  children: [
                    b.jsx("button", {
                      className:
                        "w-12 h-12 flex items-center justify-center border border-neutral-700 hover:border-primary hover:text-primary text-white transition-colors group",
                      children: b.jsxs("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        className:
                          "group-hover:-translate-x-1 transition-transform",
                        children: [
                          b.jsx("line", {
                            x1: "19",
                            y1: "12",
                            x2: "5",
                            y2: "12",
                          }),
                          b.jsx("polyline", { points: "12 19 5 12 12 5" }),
                        ],
                      }),
                    }),
                    b.jsx("button", {
                      className:
                        "w-12 h-12 flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-black transition-colors group",
                      children: b.jsxs("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        className:
                          "group-hover:translate-x-1 transition-transform",
                        children: [
                          b.jsx("line", {
                            x1: "5",
                            y1: "12",
                            x2: "19",
                            y2: "12",
                          }),
                          b.jsx("polyline", { points: "12 5 19 12 12 19" }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
            b.jsx("div", {
              className: "md:w-2/3 grid gap-6",
              children: T5.map((e, i) =>
                b.jsxs(
                  dt.div,
                  {
                    initial: { opacity: 0, x: 50 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: !0 },
                    transition: { duration: 0.5, delay: i * 0.1 },
                    className:
                      "bg-neutral-900 border-l-[3px] border-l-primary border-y border-y-neutral-800 border-r border-r-neutral-800 p-8 hover:-translate-y-2 transition-transform duration-300",
                    children: [
                      b.jsx("div", {
                        className: "text-primary mb-4 text-xl",
                        children: '"',
                      }),
                      b.jsx("p", {
                        className:
                          "text-neutral-300 font-sans text-lg italic mb-6 leading-relaxed",
                        children: e.text,
                      }),
                      b.jsxs("div", {
                        className:
                          "flex justify-between items-end border-t border-neutral-800 pt-4",
                        children: [
                          b.jsx("span", {
                            className:
                              "font-display text-xl text-white uppercase",
                            children: e.author,
                          }),
                          b.jsx("span", {
                            className:
                              "font-mono text-xs text-primary uppercase tracking-widest bg-primary/10 px-2 py-1",
                            children: e.car,
                          }),
                        ],
                      }),
                    ],
                  },
                  i,
                ),
              ),
            }),
          ],
        }),
      }),
    ],
  });
}
function A5() {
  return b.jsxs("section", {
    className: "py-32 relative bg-black overflow-hidden",
    children: [
      b.jsxs("div", {
        className: "absolute inset-0 pointer-events-none opacity-30",
        children: [
          b.jsx("div", {
            className:
              "absolute top-0 right-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent shadow-[0_0_20px_rgba(255,69,0,1)]",
          }),
          b.jsx("div", {
            className:
              "absolute top-1/4 right-[25%] w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,1),_0_0_40px_rgba(255,69,0,1)] animate-pulse",
          }),
        ],
      }),
      b.jsx("div", {
        className: "max-w-5xl mx-auto px-6 relative z-10",
        children: b.jsxs("div", {
          className:
            "bg-neutral-900/50 backdrop-blur-md border border-neutral-800 p-10 md:p-16 clip-diagonal relative group",
          children: [
            b.jsx("div", {
              className:
                "absolute top-0 left-0 w-0 h-[2px] bg-primary transition-all duration-700 ease-in-out group-hover:w-full",
            }),
            b.jsxs("div", {
              className: "text-center max-w-2xl mx-auto mb-12",
              children: [
                b.jsx("h2", {
                  className:
                    "text-5xl md:text-7xl font-display uppercase text-white mb-4",
                  children: "Request An Assessment",
                }),
                b.jsx("p", {
                  className: "text-neutral-400 font-sans text-sm",
                  children:
                    "We do not accept every vehicle. Submit your details below, and our engineers will evaluate if your machine aligns with our capabilities.",
                }),
              ],
            }),
            b.jsxs("form", {
              className: "space-y-6 max-w-2xl mx-auto",
              onSubmit: (e) => e.preventDefault(),
              children: [
                b.jsxs("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                  children: [
                    b.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        b.jsx("label", {
                          className:
                            "text-primary font-mono text-xs uppercase tracking-widest",
                          children: "Pilot Name",
                        }),
                        b.jsx("input", {
                          type: "text",
                          className:
                            "w-full bg-black border border-neutral-800 focus:border-primary text-white p-4 font-sans outline-none transition-colors clip-diagonal-reverse",
                          placeholder: "John Doe",
                        }),
                      ],
                    }),
                    b.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        b.jsx("label", {
                          className:
                            "text-primary font-mono text-xs uppercase tracking-widest",
                          children: "Contact Signal",
                        }),
                        b.jsx("input", {
                          type: "email",
                          className:
                            "w-full bg-black border border-neutral-800 focus:border-primary text-white p-4 font-sans outline-none transition-colors clip-diagonal-reverse",
                          placeholder: "john@example.com",
                        }),
                      ],
                    }),
                  ],
                }),
                b.jsxs("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                  children: [
                    b.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        b.jsx("label", {
                          className:
                            "text-primary font-mono text-xs uppercase tracking-widest",
                          children: "Machine Chassis",
                        }),
                        b.jsx("input", {
                          type: "text",
                          className:
                            "w-full bg-black border border-neutral-800 focus:border-primary text-white p-4 font-sans outline-none transition-colors clip-diagonal-reverse",
                          placeholder: "Make & Model",
                        }),
                      ],
                    }),
                    b.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        b.jsx("label", {
                          className:
                            "text-primary font-mono text-xs uppercase tracking-widest",
                          children: "Current Power",
                        }),
                        b.jsx("input", {
                          type: "text",
                          className:
                            "w-full bg-black border border-neutral-800 focus:border-primary text-white p-4 font-sans outline-none transition-colors clip-diagonal-reverse",
                          placeholder: "Est. HP",
                        }),
                      ],
                    }),
                  ],
                }),
                b.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    b.jsx("label", {
                      className:
                        "text-primary font-mono text-xs uppercase tracking-widest",
                      children: "Objective",
                    }),
                    b.jsx("textarea", {
                      className:
                        "w-full bg-black border border-neutral-800 focus:border-primary text-white p-4 font-sans outline-none transition-colors min-h-[120px] resize-none",
                      placeholder: "What are we building?",
                    }),
                  ],
                }),
                b.jsxs("button", {
                  type: "submit",
                  className:
                    "w-full py-5 bg-primary text-black font-display text-2xl uppercase tracking-widest hover:bg-white hover:text-black transition-colors clip-diagonal mt-8 relative overflow-hidden group",
                  children: [
                    b.jsx("span", {
                      className: "relative z-10",
                      children: "Initiate Protocol",
                    }),
                    b.jsx("div", {
                      className:
                        "absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function C5() {
  return b.jsx("footer", {
    className: "bg-black border-t border-neutral-900 pt-20 pb-10",
    children: b.jsxs("div", {
      className: "max-w-7xl mx-auto px-6",
      children: [
        b.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-4 gap-12 mb-16",
          children: [
            b.jsxs("div", {
              className: "col-span-1 md:col-span-2",
              children: [
                b.jsxs("div", {
                  className: "flex items-center gap-2 mb-6",
                  children: [
                    b.jsx("div", {
                      className:
                        "w-6 h-6 bg-primary clip-diagonal flex items-center justify-center",
                      children: b.jsx("span", {
                        className: "font-display font-bold text-black",
                        children: "A",
                      }),
                    }),
                    b.jsxs("span", {
                      className:
                        "font-display text-xl tracking-widest uppercase mt-1",
                      children: [
                        "Apex",
                        b.jsx("span", {
                          className: "text-primary",
                          children: "Motors",
                        }),
                      ],
                    }),
                  ],
                }),
                b.jsx("p", {
                  className:
                    "text-neutral-500 font-sans text-sm max-w-sm mb-6 leading-relaxed",
                  children:
                    "Where raw physics meets surgical precision. We build machines that redefine limits.",
                }),
                b.jsx("div", {
                  className: "flex gap-4",
                  children: ["IG", "YT", "X"].map((e) =>
                    b.jsx(
                      "a",
                      {
                        href: "#",
                        className:
                          "w-10 h-10 border border-neutral-800 flex items-center justify-center text-neutral-400 font-mono text-xs hover:border-primary hover:text-primary transition-colors",
                        children: e,
                      },
                      e,
                    ),
                  ),
                }),
              ],
            }),
            b.jsxs("div", {
              children: [
                b.jsx("h4", {
                  className: "text-white font-display text-xl uppercase mb-6",
                  children: "Location",
                }),
                b.jsxs("ul", {
                  className: "space-y-4 text-neutral-500 font-sans text-sm",
                  children: [
                    b.jsx("li", { children: "Sector 7, Industrial Zone" }),
                    b.jsx("li", { children: "Los Angeles, CA 90021" }),
                    b.jsx("li", {
                      className:
                        "text-primary pt-2 border-t border-neutral-800 inline-block",
                      children: "/// STRICTLY BY APPOINTMENT",
                    }),
                  ],
                }),
              ],
            }),
            b.jsxs("div", {
              children: [
                b.jsx("h4", {
                  className: "text-white font-display text-xl uppercase mb-6",
                  children: "Comms",
                }),
                b.jsxs("ul", {
                  className: "space-y-4 text-neutral-500 font-sans text-sm",
                  children: [
                    b.jsx("li", {
                      className:
                        "hover:text-white transition-colors cursor-pointer",
                      children: "1 (800) 555-APEX",
                    }),
                    b.jsx("li", {
                      className:
                        "hover:text-white transition-colors cursor-pointer",
                      children: "operations@apexmotors.inc",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        b.jsxs("div", {
          className:
            "flex flex-col md:flex-row justify-between items-center border-t border-neutral-900 pt-8 text-neutral-600 font-mono text-xs uppercase tracking-widest",
          children: [
            b.jsxs("p", {
              children: [
                "© ",
                new Date().getFullYear(),
                " Apex Motors. All Systems Nominal.",
              ],
            }),
            b.jsxs("div", {
              className: "flex gap-4 mt-4 md:mt-0",
              children: [
                b.jsx("a", {
                  href: "#",
                  className: "hover:text-primary transition-colors",
                  children: "Privacy",
                }),
                b.jsx("a", {
                  href: "#",
                  className: "hover:text-primary transition-colors",
                  children: "Terms",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function R5() {
  const [e, i] = S.useState({ x: 0, y: 0 }),
    [a, r] = S.useState(!1),
    [l, u] = S.useState(!1);
  return (
    S.useEffect(() => {
      const f = (y) => {
          i({ x: y.clientX, y: y.clientY });
        },
        h = (y) => {
          const g = y.target;
          g.tagName.toLowerCase() === "a" ||
          g.tagName.toLowerCase() === "button" ||
          g.closest("a") ||
          g.closest("button") ||
          g.hasAttribute("data-hoverable")
            ? r(!0)
            : r(!1);
        },
        p = () => u(!0),
        m = () => u(!1);
      return (
        window.addEventListener("mousemove", f),
        window.addEventListener("mouseover", h),
        window.addEventListener("mousedown", p),
        window.addEventListener("mouseup", m),
        () => {
          (window.removeEventListener("mousemove", f),
            window.removeEventListener("mouseover", h),
            window.removeEventListener("mousedown", p),
            window.removeEventListener("mouseup", m));
        }
      );
    }, []),
    b.jsxs(b.Fragment, {
      children: [
        b.jsx(dt.div, {
          className:
            "fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-screen",
          animate: { x: e.x - 4, y: e.y - 4, scale: l ? 0.5 : a ? 0 : 1 },
          transition: {
            type: "spring",
            stiffness: 500,
            damping: 28,
            mass: 0.5,
          },
        }),
        b.jsx(dt.div, {
          className:
            "fixed top-0 left-0 w-8 h-8 border border-primary/50 rounded-full pointer-events-none z-[9998] flex items-center justify-center",
          animate: {
            x: e.x - 16,
            y: e.y - 16,
            scale: l ? 0.8 : a ? 1.5 : 1,
            borderColor: a ? "rgba(255, 69, 0, 1)" : "rgba(255, 69, 0, 0.5)",
            backgroundColor: a ? "rgba(255, 69, 0, 0.1)" : "transparent",
          },
          transition: {
            type: "spring",
            stiffness: 250,
            damping: 20,
            mass: 0.5,
          },
          children:
            a &&
            b.jsx(dt.div, {
              initial: { opacity: 0, scale: 0 },
              animate: { opacity: 1, scale: 1 },
              className: "w-1 h-1 bg-primary rounded-full",
            }),
        }),
      ],
    })
  );
}
function M5() {
  const { scrollY: e } = Ql(),
    i = Pt(e, [0, 100], ["rgba(0, 0, 0, 0)", "rgba(8, 8, 8, 0.8)"]),
    a = Pt(e, [0, 100], ["blur(0px)", "blur(12px)"]),
    r = Pt(
      e,
      [0, 100],
      ["1px solid rgba(255, 69, 0, 0)", "1px solid rgba(255, 69, 0, 0.2)"],
    );
  return b.jsxs(dt.header, {
    style: { backgroundColor: i, backdropFilter: a, borderBottom: r },
    className:
      "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 transition-all",
    children: [
      b.jsxs("div", {
        className: "flex items-center gap-2 cursor-pointer",
        "data-hoverable": !0,
        children: [
          b.jsx("div", {
            className:
              "w-8 h-8 bg-primary clip-diagonal flex items-center justify-center",
            children: b.jsx("span", {
              className: "font-display font-bold text-black text-xl",
              children: "A",
            }),
          }),
          b.jsxs("span", {
            className: "font-display text-2xl tracking-widest uppercase mt-1",
            children: [
              "Apex",
              b.jsx("span", { className: "text-primary", children: "Motors" }),
            ],
          }),
        ],
      }),
      b.jsx("nav", {
        className: "hidden md:flex items-center gap-8",
        children: ["Services", "Workshop", "Team", "Testimonials"].map((l) =>
          b.jsxs(
            "a",
            {
              href: `#${l.toLowerCase()}`,
              className:
                "text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-white transition-colors relative group",
              children: [
                l,
                b.jsx("span", {
                  className:
                    "absolute -bottom-2 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full",
                }),
              ],
            },
            l,
          ),
        ),
      }),
      b.jsxs("button", {
        className:
          "hidden md:flex items-center justify-center px-6 py-2 bg-transparent border border-primary text-primary font-display tracking-widest uppercase hover:bg-primary hover:text-black transition-all clip-diagonal group",
        children: [
          b.jsx("span", { className: "relative z-10", children: "Ignition" }),
          b.jsx("div", {
            className:
              "absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0",
          }),
        ],
      }),
      b.jsxs("button", {
        className: "md:hidden flex flex-col gap-1.5 p-2",
        children: [
          b.jsx("div", { className: "w-6 h-0.5 bg-white" }),
          b.jsx("div", { className: "w-6 h-0.5 bg-white" }),
          b.jsx("div", { className: "w-4 h-0.5 bg-primary self-end" }),
        ],
      }),
    ],
  });
}
function Xv({ letter: e, delay: i, from: a, color: r }) {
  return b.jsx("div", {
    style: { overflow: "hidden", lineHeight: 1, display: "inline-block" },
    children: b.jsx(dt.span, {
      initial: { y: a === "top" ? "-110%" : "110%" },
      animate: { y: 0 },
      transition: { duration: 0.58, delay: i, ease: [0.16, 1, 0.3, 1] },
      className: "font-display font-bold leading-none uppercase inline-block",
      style: { fontSize: "clamp(3.5rem, 13vw, 9rem)", color: r },
      children: e,
    }),
  });
}
function O5({ onComplete: e }) {
  const [i, a] = S.useState(!0);
  return (
    S.useEffect(() => {
      const r = setTimeout(() => a(!1), 2700);
      return () => clearTimeout(r);
    }, []),
    b.jsx(RN, {
      onExitComplete: e,
      children:
        i &&
        b.jsxs(dt.div, {
          className:
            "fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden",
          exit: { y: "-100%" },
          transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          children: [
            b.jsxs(dt.div, {
              className: "absolute inset-6 md:inset-14 pointer-events-none",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.25, delay: 0.08 },
              children: [
                b.jsx("div", {
                  className:
                    "absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-primary",
                }),
                b.jsx("div", {
                  className:
                    "absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-primary",
                }),
                b.jsx("div", {
                  className:
                    "absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-primary",
                }),
                b.jsx("div", {
                  className:
                    "absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-primary",
                }),
              ],
            }),
            b.jsx(dt.div, {
              className:
                "absolute left-0 w-full h-[1px] bg-primary pointer-events-none",
              style: { boxShadow: "0 0 18px rgba(255,69,0,0.9)", top: 0 },
              animate: { top: ["0%", "100%"] },
              transition: { duration: 0.55, delay: 0.05, ease: "linear" },
            }),
            b.jsxs("div", {
              className: "text-center select-none",
              children: [
                b.jsx("div", {
                  className: "flex justify-center gap-0",
                  children: ["A", "P", "E", "X"].map((r, l) =>
                    b.jsx(
                      Xv,
                      {
                        letter: r,
                        delay: 0.18 + l * 0.06,
                        from: "top",
                        color: "#ffffff",
                      },
                      r + l,
                    ),
                  ),
                }),
                b.jsx(dt.div, {
                  initial: { scaleX: 0 },
                  animate: { scaleX: 1 },
                  transition: {
                    duration: 0.42,
                    delay: 0.56,
                    ease: [0.16, 1, 0.3, 1],
                  },
                  className: "h-[2px] bg-primary origin-center my-1",
                  style: { boxShadow: "0 0 16px rgba(255,69,0,0.9)" },
                }),
                b.jsx("div", {
                  className: "flex justify-center gap-0",
                  children: ["M", "O", "T", "O", "R", "S"].map((r, l) =>
                    b.jsx(
                      Xv,
                      {
                        letter: r,
                        delay: 0.62 + l * 0.05,
                        from: "bottom",
                        color: "#FF4500",
                      },
                      r + l,
                    ),
                  ),
                }),
              ],
            }),
            b.jsx(dt.p, {
              initial: { opacity: 0, y: 6 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.4, delay: 1.08 },
              className:
                "font-mono text-[10px] md:text-[11px] tracking-[0.55em] text-primary/50 uppercase mt-6",
              children: "Elite Performance Engineering",
            }),
            b.jsxs(dt.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 1.18 },
              className: "mt-8 w-52 md:w-80",
              children: [
                b.jsx("div", {
                  className:
                    "h-[1px] bg-neutral-800 w-full overflow-hidden relative",
                  children: b.jsx(dt.div, {
                    className: "absolute inset-y-0 left-0 bg-primary",
                    initial: { width: "0%" },
                    animate: { width: "100%" },
                    transition: {
                      duration: 1.2,
                      delay: 1.18,
                      ease: "easeInOut",
                    },
                    style: { boxShadow: "0 0 10px rgba(255,69,0,1)" },
                  }),
                }),
                b.jsx(dt.p, {
                  animate: { opacity: [0.4, 1, 0.4] },
                  transition: { duration: 0.85, repeat: 1 / 0, delay: 1.18 },
                  className:
                    "font-mono text-[8px] md:text-[9px] tracking-[0.55em] text-primary/40 uppercase mt-2 text-center",
                  children: "SYSTEMS ONLINE",
                }),
              ],
            }),
          ],
        }),
    })
  );
}
function nl({ x: e, y: i, size: a, delay: r, duration: l, opacity: u }) {
  return b.jsx(dt.div, {
    className: "absolute rounded-full pointer-events-none",
    style: {
      left: e,
      top: i,
      width: a,
      height: a,
      background: `radial-gradient(circle, rgba(255,69,0,${u}) 0%, transparent 70%)`,
      filter: "blur(60px)",
      transform: "translate(-50%, -50%)",
    },
    animate: {
      x: [0, 30, -20, 15, 0],
      y: [0, -25, 20, -10, 0],
      scale: [1, 1.15, 0.9, 1.08, 1],
    },
    transition: { duration: l, delay: r, repeat: 1 / 0, ease: "easeInOut" },
  });
}
function D5() {
  return b.jsx(dt.div, {
    className: "absolute left-0 w-full pointer-events-none",
    style: {
      height: 1,
      background:
        "linear-gradient(90deg, transparent 0%, rgba(255,69,0,0.4) 20%, rgba(255,69,0,0.7) 50%, rgba(255,69,0,0.4) 80%, transparent 100%)",
      boxShadow: "0 0 12px rgba(255,69,0,0.5)",
      top: 0,
    },
    animate: { top: ["0%", "100%"], opacity: [0, 0.8, 0.8, 0] },
    transition: {
      duration: 5,
      times: [0, 0.05, 0.95, 1],
      repeat: 1 / 0,
      repeatDelay: 9,
      ease: "linear",
    },
  });
}
function N5() {
  const [e, i] = S.useState([]);
  return (
    S.useEffect(() => {
      i(
        Array.from({ length: 55 }, (a, r) => ({
          id: r,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2.5 + 0.5,
          delay: Math.random() * 8,
          duration: Math.random() * 12 + 6,
          travel: 60 + Math.random() * 80,
        })),
      );
    }, []),
    b.jsx(b.Fragment, {
      children: e.map((a) =>
        b.jsx(
          dt.div,
          {
            className: "absolute rounded-full bg-primary pointer-events-none",
            style: {
              left: `${a.x}%`,
              top: `${a.y}%`,
              width: a.size,
              height: a.size,
              boxShadow: `0 0 ${a.size * 3}px rgba(255,69,0,0.9)`,
            },
            animate: {
              y: ["0px", `-${a.travel}px`],
              opacity: [0, 0.7, 0.9, 0],
              scale: [0.8, 1.2, 0.6],
            },
            transition: {
              duration: a.duration,
              delay: a.delay,
              repeat: 1 / 0,
              ease: "easeOut",
            },
          },
          a.id,
        ),
      ),
    })
  );
}
function j5() {
  return b.jsxs("div", {
    className: "fixed inset-0 z-0 pointer-events-none overflow-hidden",
    children: [
      b.jsx("div", {
        className: "absolute inset-0",
        style: {
          backgroundImage:
            "linear-gradient(rgba(255,69,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,69,0,0.06) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        },
      }),
      b.jsx(nl, {
        x: "80%",
        y: "10%",
        size: 520,
        delay: 0,
        duration: 18,
        opacity: 0.13,
      }),
      b.jsx(nl, {
        x: "10%",
        y: "60%",
        size: 440,
        delay: 4,
        duration: 22,
        opacity: 0.1,
      }),
      b.jsx(nl, {
        x: "55%",
        y: "85%",
        size: 380,
        delay: 8,
        duration: 16,
        opacity: 0.09,
      }),
      b.jsx(nl, {
        x: "25%",
        y: "20%",
        size: 300,
        delay: 2,
        duration: 20,
        opacity: 0.07,
      }),
      b.jsx(D5, {}),
      b.jsx(N5, {}),
      b.jsx("div", {
        className: "absolute inset-0",
        style: {
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)",
        },
      }),
    ],
  });
}
function _5() {
  const [, e] = S.useState(!1);
  return b.jsxs("div", {
    className: "min-h-screen bg-black text-foreground font-sans relative",
    children: [
      b.jsx(O5, { onComplete: () => e(!0) }),
      b.jsx(j5, {}),
      b.jsx(R5, {}),
      b.jsx(M5, {}),
      b.jsxs("main", {
        children: [
          b.jsx(u5, {}),
          b.jsx(h5, {}),
          b.jsx(y5, {}),
          b.jsx(b5, {}),
          b.jsx(S5, {}),
          b.jsx(E5, {}),
          b.jsx(A5, {}),
        ],
      }),
      b.jsx(C5, {}),
    ],
  });
}
function z5(e, i) {
  if (e instanceof RegExp) return { keys: !1, pattern: e };
  var a,
    r,
    l,
    u,
    f = [],
    h = "",
    p = e.split("/");
  for (p[0] || p.shift(); (l = p.shift());)
    ((a = l[0]),
      a === "*"
        ? (f.push(a), (h += l[1] === "?" ? "(?:/(.*))?" : "/(.*)"))
        : a === ":"
          ? ((r = l.indexOf("?", 1)),
            (u = l.indexOf(".", 1)),
            f.push(l.substring(1, ~r ? r : ~u ? u : l.length)),
            (h += ~r && !~u ? "(?:/([^/]+?))?" : "/([^/]+?)"),
            ~u && (h += (~r ? "?" : "") + "\\" + l.substring(u)))
          : (h += "/" + l));
  return {
    keys: f,
    pattern: new RegExp("^" + h + (i ? "(?=$|/)" : "/?$"), "i"),
  };
}
var Bf = { exports: {} },
  Uf = {};
var Fv;
function V5() {
  if (Fv) return Uf;
  Fv = 1;
  var e = Nl();
  function i(g, x) {
    return (g === x && (g !== 0 || 1 / g === 1 / x)) || (g !== g && x !== x);
  }
  var a = typeof Object.is == "function" ? Object.is : i,
    r = e.useState,
    l = e.useEffect,
    u = e.useLayoutEffect,
    f = e.useDebugValue;
  function h(g, x) {
    var T = x(),
      E = r({ inst: { value: T, getSnapshot: x } }),
      C = E[0].inst,
      R = E[1];
    return (
      u(
        function () {
          ((C.value = T), (C.getSnapshot = x), p(C) && R({ inst: C }));
        },
        [g, T, x],
      ),
      l(
        function () {
          return (
            p(C) && R({ inst: C }),
            g(function () {
              p(C) && R({ inst: C });
            })
          );
        },
        [g],
      ),
      f(T),
      T
    );
  }
  function p(g) {
    var x = g.getSnapshot;
    g = g.value;
    try {
      var T = x();
      return !a(g, T);
    } catch {
      return !0;
    }
  }
  function m(g, x) {
    return x();
  }
  var y =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? m
      : h;
  return (
    (Uf.useSyncExternalStore =
      e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : y),
    Uf
  );
}
var Kv;
function L5() {
  return (Kv || ((Kv = 1), (Bf.exports = V5())), Bf.exports);
}
var k5 = L5();
const P5 = vr.useInsertionEffect,
  B5 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  U5 = B5 ? S.useLayoutEffect : S.useEffect,
  H5 = P5 || U5,
  Sw = (e) => {
    const i = S.useRef([e, (...a) => i[0](...a)]).current;
    return (
      H5(() => {
        i[0] = e;
      }),
      i[1]
    );
  },
  q5 = "popstate",
  Ah = "pushState",
  Ch = "replaceState",
  Y5 = "hashchange",
  Qv = [q5, Ah, Ch, Y5],
  G5 = (e) => {
    for (const i of Qv) addEventListener(i, e);
    return () => {
      for (const i of Qv) removeEventListener(i, e);
    };
  },
  Tw = (e, i) => k5.useSyncExternalStore(G5, e, i),
  Zv = () => location.search,
  X5 = ({ ssrSearch: e } = {}) => Tw(Zv, e != null ? () => e : Zv),
  Wv = () => location.pathname,
  F5 = ({ ssrPath: e } = {}) => Tw(Wv, e != null ? () => e : Wv),
  K5 = (e, { replace: i = !1, state: a = null } = {}) =>
    history[i ? Ch : Ah](a, "", e),
  Q5 = (e = {}) => [F5(e), K5],
  Iv = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[Iv] > "u") {
  for (const e of [Ah, Ch]) {
    const i = history[e];
    history[e] = function () {
      const a = i.apply(this, arguments),
        r = new Event(e);
      return ((r.arguments = arguments), dispatchEvent(r), a);
    };
  }
  Object.defineProperty(window, Iv, { value: !0 });
}
const Z5 = (e, i) =>
    i.toLowerCase().indexOf(e.toLowerCase())
      ? "~" + i
      : i.slice(e.length) || "/",
  Ew = (e = "") => (e === "/" ? "" : e),
  W5 = (e, i) => (e[0] === "~" ? e.slice(1) : Ew(i) + e),
  I5 = (e = "", i) => Z5($v(Ew(e)), $v(i)),
  $v = (e) => {
    try {
      return decodeURI(e);
    } catch {
      return e;
    }
  },
  Aw = {
    hook: Q5,
    searchHook: X5,
    parser: z5,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    ssrContext: void 0,
    hrefs: (e) => e,
    aroundNav: (e, i, a) => e(i, a),
  },
  Cw = S.createContext(Aw),
  Zl = () => S.useContext(Cw),
  Rw = {},
  Mw = S.createContext(Rw),
  $5 = () => S.useContext(Mw),
  Rh = (e) => {
    const [i, a] = e.hook(e);
    return [I5(e.base, i), Sw((r, l) => e.aroundNav(a, W5(r, e.base), l))];
  },
  Ow = (e, i, a, r) => {
    const { pattern: l, keys: u } =
        i instanceof RegExp ? { keys: !1, pattern: i } : e(i || "*", r),
      f = l.exec(a) || [],
      [h, ...p] = f;
    return h !== void 0
      ? [
          !0,
          (() => {
            const m =
              u !== !1
                ? Object.fromEntries(u.map((g, x) => [g, p[x]]))
                : f.groups;
            let y = { ...p };
            return (m && Object.assign(y, m), y);
          })(),
          ...(r ? [h] : []),
        ]
      : [!1, null];
  },
  Dw = ({ children: e, ...i }) => {
    const a = Zl(),
      r = i.hook ? Aw : a;
    let l = r;
    const [u, f = i.ssrSearch ?? ""] = i.ssrPath?.split("?") ?? [];
    (u && ((i.ssrSearch = f), (i.ssrPath = u)),
      (i.hrefs = i.hrefs ?? i.hook?.hrefs),
      (i.searchHook = i.searchHook ?? i.hook?.searchHook));
    let h = S.useRef({}),
      p = h.current,
      m = p;
    for (let y in r) {
      const g = y === "base" ? r[y] + (i[y] ?? "") : (i[y] ?? r[y]);
      (p === m && g !== m[y] && (h.current = m = { ...m }),
        (m[y] = g),
        (g !== r[y] || g !== l[y]) && (l = m));
    }
    return S.createElement(Cw.Provider, { value: l, children: e });
  },
  Jv = ({ children: e, component: i }, a) =>
    i ? S.createElement(i, { params: a }) : typeof e == "function" ? e(a) : e,
  J5 = (e) => {
    let i = S.useRef(Rw);
    const a = i.current;
    return (i.current =
      Object.keys(e).length !== Object.keys(a).length ||
      Object.entries(e).some(([r, l]) => l !== a[r])
        ? e
        : a);
  },
  tb = ({ path: e, nest: i, match: a, ...r }) => {
    const l = Zl(),
      [u] = Rh(l),
      [f, h, p] = a ?? Ow(l.parser, e, u, i),
      m = J5({ ...$5(), ...h });
    if (!f) return null;
    const y = p ? S.createElement(Dw, { base: p }, Jv(r, m)) : Jv(r, m);
    return S.createElement(Mw.Provider, { value: m, children: y });
  };
S.forwardRef((e, i) => {
  const a = Zl(),
    [r, l] = Rh(a),
    {
      to: u = "",
      href: f = u,
      onClick: h,
      asChild: p,
      children: m,
      className: y,
      replace: g,
      state: x,
      transition: T,
      ...E
    } = e,
    C = Sw((D) => {
      D.ctrlKey ||
        D.metaKey ||
        D.altKey ||
        D.shiftKey ||
        D.button !== 0 ||
        (h?.(D), D.defaultPrevented || (D.preventDefault(), l(f, e)));
    }),
    R = a.hrefs(f[0] === "~" ? f.slice(1) : a.base + f, a);
  return p && S.isValidElement(m)
    ? S.cloneElement(m, { onClick: C, href: R })
    : S.createElement("a", {
        ...E,
        onClick: C,
        href: R,
        className: y?.call ? y(r === f) : y,
        children: m,
        ref: i,
      });
});
const Nw = (e) =>
    Array.isArray(e)
      ? e.flatMap((i) => Nw(i && i.type === S.Fragment ? i.props.children : i))
      : [e],
  t3 = ({ children: e, location: i }) => {
    const a = Zl(),
      [r] = Rh(a);
    for (const l of Nw(e)) {
      let u = 0;
      if (
        S.isValidElement(l) &&
        (u = Ow(a.parser, l.props.path, i || r, l.props.nest))[0]
      )
        return S.cloneElement(l, { match: u });
    }
    return null;
  },
  e3 = new BE();
function n3() {
  return b.jsxs(t3, {
    children: [
      b.jsx(tb, { path: "/", component: _5 }),
      b.jsx(tb, { component: kR }),
    ],
  });
}
function i3() {
  return b.jsx(qE, {
    client: e3,
    children: b.jsxs(NR, {
      children: [
        b.jsx(Dw, { base: "/".replace(/\/$/, ""), children: b.jsx(n3, {}) }),
        b.jsx(I2, {}),
      ],
    }),
  });
}
uE.createRoot(document.getElementById("root")).render(b.jsx(i3, {}));
