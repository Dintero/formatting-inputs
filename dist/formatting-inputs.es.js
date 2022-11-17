import xe, { useMemo as U, useRef as Se } from "react";
const De = (n, s, o) => (a) => {
  const u = n.current;
  u && s(u, "change"), o && (console.log({
    targetValue: a.target.value,
    currentValue: u == null ? void 0 : u.value
  }), o(a));
}, Ae = (n, s, o) => (a) => {
  const u = n.current;
  u && s(u, "blur"), o && o(a);
}, $ = " ", dr = (n) => {
  const { blocks: s = [], separators: o = [], overflow: a = !1 } = n, u = a ? 0 : 1;
  return s.length - u > o.length ? [...o, $] : o;
}, vr = (n, s, o) => (o && (n = n.filter((a) => o.test(a))), n.filter(
  (a) => !(s || [$]).includes(a)
)), gr = (n, s, o, a, u) => {
  if (!s || s.length === 0)
    return n.join("");
  const i = s.map((f, c) => {
    var w;
    const d = n.splice(0, f), p = d.length === f, v = c === s.length - 1, m = n.length;
    if (!v && m || p && u && !v) {
      const S = (w = (o || [])[c]) != null ? w : $;
      d.push(S);
    }
    return d.join("");
  });
  return a && n.length && (i.push((o || [])[s.length] || $), i.push(n.join(""))), i.join("");
}, ke = (n, s, o) => {
  var d;
  const a = (n || "").split(""), u = s.blocks || [], i = dr(s), f = vr(
    a,
    i,
    s.range
  );
  return gr(
    f,
    u,
    i,
    (d = s.overflow) != null ? d : !1,
    o != null ? o : !1
  );
}, hr = (n, s) => {
  var i, f;
  const o = ((i = s.blocks) != null ? i : []).reduce(
    (c, d) => c + d,
    0
  ), a = new Array(
    (Math.max(((f = s.blocks) != null ? f : []).length - 1), 0)
  ).fill("").reduce((c, d, p) => {
    var m, R;
    const v = (R = ((m = s.separators) != null ? m : [])[p]) != null ? R : $;
    return c + v.length;
  }, 0), u = o + a;
  return n.length >= u;
}, pr = (n, s, o, a, u) => {
  var i;
  if (o === "change")
    return a && u;
  if (o === "blur") {
    const f = ((i = s.separators) != null ? i : [$]).includes(n[n.length - 1]);
    return !hr(n, s) && f;
  }
  return !1;
};
var Ie = { exports: {} }, I = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Q, we;
function $e() {
  if (we)
    return Q;
  we = 1;
  var n = Object.getOwnPropertySymbols, s = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
  function a(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function u() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var f = {}, c = 0; c < 10; c++)
        f["_" + String.fromCharCode(c)] = c;
      var d = Object.getOwnPropertyNames(f).map(function(v) {
        return f[v];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(v) {
        p[v] = v;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Q = u() ? Object.assign : function(i, f) {
    for (var c, d = a(i), p, v = 1; v < arguments.length; v++) {
      c = Object(arguments[v]);
      for (var m in c)
        s.call(c, m) && (d[m] = c[m]);
      if (n) {
        p = n(c);
        for (var R = 0; R < p.length; R++)
          o.call(c, p[R]) && (d[p[R]] = c[p[R]]);
      }
    }
    return d;
  }, Q;
}
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function mr() {
  if (Ce)
    return I;
  Ce = 1, $e();
  var n = xe, s = 60103;
  if (I.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var o = Symbol.for;
    s = o("react.element"), I.Fragment = o("react.fragment");
  }
  var a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = Object.prototype.hasOwnProperty, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(c, d, p) {
    var v, m = {}, R = null, w = null;
    p !== void 0 && (R = "" + p), d.key !== void 0 && (R = "" + d.key), d.ref !== void 0 && (w = d.ref);
    for (v in d)
      u.call(d, v) && !i.hasOwnProperty(v) && (m[v] = d[v]);
    if (c && c.defaultProps)
      for (v in d = c.defaultProps, d)
        m[v] === void 0 && (m[v] = d[v]);
    return { $$typeof: s, type: c, key: R, ref: w, props: m, _owner: a.current };
  }
  return I.jsx = f, I.jsxs = f, I;
}
var ee = {};
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function Er() {
  return Te || (Te = 1, function(n) {
    process.env.NODE_ENV !== "production" && function() {
      var s = xe, o = $e(), a = 60103, u = 60106;
      n.Fragment = 60107;
      var i = 60108, f = 60114, c = 60109, d = 60110, p = 60112, v = 60113, m = 60120, R = 60115, w = 60116, S = 60121, V = 60122, W = 60117, re = 60129, te = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var O = Symbol.for;
        a = O("react.element"), u = O("react.portal"), n.Fragment = O("react.fragment"), i = O("react.strict_mode"), f = O("react.profiler"), c = O("react.provider"), d = O("react.context"), p = O("react.forward_ref"), v = O("react.suspense"), m = O("react.suspense_list"), R = O("react.memo"), w = O("react.lazy"), S = O("react.block"), V = O("react.server.block"), W = O("react.fundamental"), O("react.scope"), O("react.opaque.id"), re = O("react.debug_trace_mode"), O("react.offscreen"), te = O("react.legacy_hidden");
      }
      var ne = typeof Symbol == "function" && Symbol.iterator, Ne = "@@iterator";
      function Fe(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = ne && e[ne] || e[Ne];
        return typeof r == "function" ? r : null;
      }
      var D = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function j(e) {
        {
          for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
            t[l - 1] = arguments[l];
          Me("error", e, t);
        }
      }
      function Me(e, r, t) {
        {
          var l = D.ReactDebugCurrentFrame, E = l.getStackAddendum();
          E !== "" && (r += "%s", t = t.concat([E]));
          var _ = t.map(function(h) {
            return "" + h;
          });
          _.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, _);
        }
      }
      var Be = !1;
      function Ue(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === n.Fragment || e === f || e === re || e === i || e === v || e === m || e === te || Be || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === R || e.$$typeof === c || e.$$typeof === d || e.$$typeof === p || e.$$typeof === W || e.$$typeof === S || e[0] === V));
      }
      function Ve(e, r, t) {
        var l = r.displayName || r.name || "";
        return e.displayName || (l !== "" ? t + "(" + l + ")" : t);
      }
      function ae(e) {
        return e.displayName || "Context";
      }
      function C(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && j("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case n.Fragment:
            return "Fragment";
          case u:
            return "Portal";
          case f:
            return "Profiler";
          case i:
            return "StrictMode";
          case v:
            return "Suspense";
          case m:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case d:
              var r = e;
              return ae(r) + ".Consumer";
            case c:
              var t = e;
              return ae(t._context) + ".Provider";
            case p:
              return Ve(e, e.render, "ForwardRef");
            case R:
              return C(e.type);
            case S:
              return C(e._render);
            case w: {
              var l = e, E = l._payload, _ = l._init;
              try {
                return C(_(E));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var L = 0, oe, ie, se, ce, ue, le, fe;
      function de() {
      }
      de.__reactDisabledLog = !0;
      function qe() {
        {
          if (L === 0) {
            oe = console.log, ie = console.info, se = console.warn, ce = console.error, ue = console.group, le = console.groupCollapsed, fe = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: de,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          L++;
        }
      }
      function Ge() {
        {
          if (L--, L === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: o({}, e, {
                value: oe
              }),
              info: o({}, e, {
                value: ie
              }),
              warn: o({}, e, {
                value: se
              }),
              error: o({}, e, {
                value: ce
              }),
              group: o({}, e, {
                value: ue
              }),
              groupCollapsed: o({}, e, {
                value: le
              }),
              groupEnd: o({}, e, {
                value: fe
              })
            });
          }
          L < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var q = D.ReactCurrentDispatcher, G;
      function N(e, r, t) {
        {
          if (G === void 0)
            try {
              throw Error();
            } catch (E) {
              var l = E.stack.trim().match(/\n( *(at )?)/);
              G = l && l[1] || "";
            }
          return `
` + G + e;
        }
      }
      var J = !1, F;
      {
        var Je = typeof WeakMap == "function" ? WeakMap : Map;
        F = new Je();
      }
      function ve(e, r) {
        if (!e || J)
          return "";
        {
          var t = F.get(e);
          if (t !== void 0)
            return t;
        }
        var l;
        J = !0;
        var E = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var _;
        _ = q.current, q.current = null, qe();
        try {
          if (r) {
            var h = function() {
              throw Error();
            };
            if (Object.defineProperty(h.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(h, []);
              } catch (x) {
                l = x;
              }
              Reflect.construct(e, [], h);
            } else {
              try {
                h.call();
              } catch (x) {
                l = x;
              }
              e.call(h.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x) {
              l = x;
            }
            e();
          }
        } catch (x) {
          if (x && l && typeof x.stack == "string") {
            for (var g = x.stack.split(`
`), P = l.stack.split(`
`), b = g.length - 1, y = P.length - 1; b >= 1 && y >= 0 && g[b] !== P[y]; )
              y--;
            for (; b >= 1 && y >= 0; b--, y--)
              if (g[b] !== P[y]) {
                if (b !== 1 || y !== 1)
                  do
                    if (b--, y--, y < 0 || g[b] !== P[y]) {
                      var T = `
` + g[b].replace(" at new ", " at ");
                      return typeof e == "function" && F.set(e, T), T;
                    }
                  while (b >= 1 && y >= 0);
                break;
              }
          }
        } finally {
          J = !1, q.current = _, Ge(), Error.prepareStackTrace = E;
        }
        var k = e ? e.displayName || e.name : "", je = k ? N(k) : "";
        return typeof e == "function" && F.set(e, je), je;
      }
      function ge(e, r, t) {
        return ve(e, !1);
      }
      function Ke(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function M(e, r, t) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return ve(e, Ke(e));
        if (typeof e == "string")
          return N(e);
        switch (e) {
          case v:
            return N("Suspense");
          case m:
            return N("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case p:
              return ge(e.render);
            case R:
              return M(e.type, r, t);
            case S:
              return ge(e._render);
            case w: {
              var l = e, E = l._payload, _ = l._init;
              try {
                return M(_(E), r, t);
              } catch {
              }
            }
          }
        return "";
      }
      var he = {}, pe = D.ReactDebugCurrentFrame;
      function B(e) {
        if (e) {
          var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
          pe.setExtraStackFrame(t);
        } else
          pe.setExtraStackFrame(null);
      }
      function ze(e, r, t, l, E) {
        {
          var _ = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var h in e)
            if (_(e, h)) {
              var g = void 0;
              try {
                if (typeof e[h] != "function") {
                  var P = Error((l || "React class") + ": " + t + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw P.name = "Invariant Violation", P;
                }
                g = e[h](r, h, l, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (b) {
                g = b;
              }
              g && !(g instanceof Error) && (B(E), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", t, h, typeof g), B(null)), g instanceof Error && !(g.message in he) && (he[g.message] = !0, B(E), j("Failed %s type: %s", t, g.message), B(null));
            }
        }
      }
      var Y = D.ReactCurrentOwner, K = Object.prototype.hasOwnProperty, Ze = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, me, Ee, z;
      z = {};
      function He(e) {
        if (K.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Xe(e) {
        if (K.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function Qe(e, r) {
        if (typeof e.ref == "string" && Y.current && r && Y.current.stateNode !== r) {
          var t = C(Y.current.type);
          z[t] || (j('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(Y.current.type), e.ref), z[t] = !0);
        }
      }
      function er(e, r) {
        {
          var t = function() {
            me || (me = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
          };
          t.isReactWarning = !0, Object.defineProperty(e, "key", {
            get: t,
            configurable: !0
          });
        }
      }
      function rr(e, r) {
        {
          var t = function() {
            Ee || (Ee = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
          };
          t.isReactWarning = !0, Object.defineProperty(e, "ref", {
            get: t,
            configurable: !0
          });
        }
      }
      var tr = function(e, r, t, l, E, _, h) {
        var g = {
          $$typeof: a,
          type: e,
          key: r,
          ref: t,
          props: h,
          _owner: _
        };
        return g._store = {}, Object.defineProperty(g._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(g, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: l
        }), Object.defineProperty(g, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: E
        }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
      };
      function nr(e, r, t, l, E) {
        {
          var _, h = {}, g = null, P = null;
          t !== void 0 && (g = "" + t), Xe(r) && (g = "" + r.key), He(r) && (P = r.ref, Qe(r, E));
          for (_ in r)
            K.call(r, _) && !Ze.hasOwnProperty(_) && (h[_] = r[_]);
          if (e && e.defaultProps) {
            var b = e.defaultProps;
            for (_ in b)
              h[_] === void 0 && (h[_] = b[_]);
          }
          if (g || P) {
            var y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
            g && er(h, y), P && rr(h, y);
          }
          return tr(e, g, P, E, l, Y.current, h);
        }
      }
      var Z = D.ReactCurrentOwner, _e = D.ReactDebugCurrentFrame;
      function A(e) {
        if (e) {
          var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
          _e.setExtraStackFrame(t);
        } else
          _e.setExtraStackFrame(null);
      }
      var H;
      H = !1;
      function X(e) {
        return typeof e == "object" && e !== null && e.$$typeof === a;
      }
      function Re() {
        {
          if (Z.current) {
            var e = C(Z.current.type);
            if (e)
              return `

Check the render method of \`` + e + "`.";
          }
          return "";
        }
      }
      function ar(e) {
        {
          if (e !== void 0) {
            var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
            return `

Check your code at ` + r + ":" + t + ".";
          }
          return "";
        }
      }
      var be = {};
      function or(e) {
        {
          var r = Re();
          if (!r) {
            var t = typeof e == "string" ? e : e.displayName || e.name;
            t && (r = `

Check the top-level render call using <` + t + ">.");
          }
          return r;
        }
      }
      function Oe(e, r) {
        {
          if (!e._store || e._store.validated || e.key != null)
            return;
          e._store.validated = !0;
          var t = or(r);
          if (be[t])
            return;
          be[t] = !0;
          var l = "";
          e && e._owner && e._owner !== Z.current && (l = " It was passed a child from " + C(e._owner.type) + "."), A(e), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, l), A(null);
        }
      }
      function ye(e, r) {
        {
          if (typeof e != "object")
            return;
          if (Array.isArray(e))
            for (var t = 0; t < e.length; t++) {
              var l = e[t];
              X(l) && Oe(l, r);
            }
          else if (X(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var E = Fe(e);
            if (typeof E == "function" && E !== e.entries)
              for (var _ = E.call(e), h; !(h = _.next()).done; )
                X(h.value) && Oe(h.value, r);
          }
        }
      }
      function ir(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var t;
          if (typeof r == "function")
            t = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === p || r.$$typeof === R))
            t = r.propTypes;
          else
            return;
          if (t) {
            var l = C(r);
            ze(t, e.props, "prop", l, e);
          } else if (r.PropTypes !== void 0 && !H) {
            H = !0;
            var E = C(r);
            j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", E || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function sr(e) {
        {
          for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
            var l = r[t];
            if (l !== "children" && l !== "key") {
              A(e), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), A(null);
              break;
            }
          }
          e.ref !== null && (A(e), j("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
        }
      }
      function Pe(e, r, t, l, E, _) {
        {
          var h = Ue(e);
          if (!h) {
            var g = "";
            (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var P = ar(E);
            P ? g += P : g += Re();
            var b;
            e === null ? b = "null" : Array.isArray(e) ? b = "array" : e !== void 0 && e.$$typeof === a ? (b = "<" + (C(e.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : b = typeof e, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", b, g);
          }
          var y = nr(e, r, t, E, _);
          if (y == null)
            return y;
          if (h) {
            var T = r.children;
            if (T !== void 0)
              if (l)
                if (Array.isArray(T)) {
                  for (var k = 0; k < T.length; k++)
                    ye(T[k], e);
                  Object.freeze && Object.freeze(T);
                } else
                  j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                ye(T, e);
          }
          return e === n.Fragment ? sr(y) : ir(y), y;
        }
      }
      function cr(e, r, t) {
        return Pe(e, r, t, !0);
      }
      function ur(e, r, t) {
        return Pe(e, r, t, !1);
      }
      var lr = ur, fr = cr;
      n.jsx = lr, n.jsxs = fr;
    }();
  }(ee)), ee;
}
(function(n) {
  process.env.NODE_ENV === "production" ? n.exports = mr() : n.exports = Er();
})(Ie);
const Le = Ie.exports.jsx, _r = (n, s) => {
  let o = n;
  return (a, u) => {
    const {
      value: i,
      selectionStart: f,
      selectionEnd: c
    } = a, d = o.length < i.length, p = i.length === f && i.length === c, v = pr(i, s, u, d, p), m = ke(i, s, v);
    a.value = m, u === "change" && (p ? (a.selectionStart = m.length, a.selectionEnd = m.length) : (a.selectionStart = f, a.selectionEnd = c)), o = a.value;
  };
}, jr = ({
  options: n,
  defaultValue: s,
  onChange: o,
  onBlur: a,
  ...u
}) => {
  const i = U(() => ke(s ? s + "" : "", n, !1), [s, n]), f = U(() => _r(i, n), [i, n]), c = Se(null);
  return /* @__PURE__ */ Le("input", {
    ref: c,
    defaultValue: i != null ? i : "",
    onChange: De(c, f, o),
    onBlur: Ae(c, f, a),
    ...u
  });
}, Ye = (n, s) => {
  const o = s.delimiter || ".", a = n.split("").reverse();
  for (let u = 0; u < a.length; u++)
    if (u <= (s.decimals || 0)) {
      const i = a[u];
      if ([",", "."].includes(i))
        return i;
    }
  return o;
}, Rr = (n, s, o, a) => (a ? n.replace(/^0+/, "") || "0" : n).split("").reverse().reduce((f, c, d) => {
  const p = d % 3 === 0 && d > 0;
  return `${c}${p ? s : ""}${f}`;
}, "") || (o ? "0" : ""), br = (n, s, o) => {
  const a = n.substring(0, s);
  return o ? a.padEnd(s, "0") : a;
}, We = (n, s, o) => {
  if (n === "")
    return "";
  const { separator: a = " ", decimals: u = 0, delimiter: i = "." } = s, f = Ye(n, s), c = n.includes(f), [d = "", p = ""] = n.split(f).map((W) => W.replace(/\D/g, ""));
  if (!c && d === "" && p === "")
    return "";
  const v = o === "blur" && u > 0, m = br(
    p,
    u,
    v
  ), R = u > 0 && (c || v);
  return `${Rr(
    d,
    a,
    o === "blur" && R,
    o === "blur"
  )}${R ? i : ""}${m}`;
}, Or = (n, s, o) => {
  const a = Ye(n, o), u = n.replace(a, "");
  return n.includes(a) && u === s;
}, yr = (n, s) => {
  let o = n;
  return (a, u) => {
    const {
      value: i,
      selectionStart: f,
      selectionEnd: c
    } = a, d = o.length < i.length, p = i.length === f && i.length === c, v = Or(o, i, s), m = We(i, s, u);
    a.value = m, u === "change" && (p ? (a.selectionStart = m.length, a.selectionEnd = m.length) : d ? (a.selectionStart = (f || 0) + (m.length - i.length), a.selectionEnd = (c || 0) + (m.length - i.length)) : v ? (a.selectionStart = (f || 0) + 1, a.selectionEnd = (c || 0) + 1) : (a.selectionStart = f, a.selectionEnd = c)), o = a.value;
  };
}, wr = ({
  options: n,
  defaultValue: s,
  onChange: o,
  onBlur: a,
  ...u
}) => {
  const i = U(() => We(s ? s + "" : "", n, "blur"), [s, n]), f = U(() => yr(i, n), [i, n]), c = Se(null);
  return /* @__PURE__ */ Le("input", {
    ref: c,
    defaultValue: i != null ? i : "",
    onChange: De(c, f, o),
    onBlur: Ae(c, f, a),
    inputMode: "decimal",
    style: {
      textAlign: "right"
    },
    ...u
  });
};
export {
  jr as BlocksRangeInput,
  wr as NumberInput
};
