import Oe, { useMemo as V, useRef as we } from "react";
const je = (a, o, i) => (n) => {
  const l = a.current;
  l && o(l, "change"), i && (console.log({
    targetValue: n.target.value,
    currentValue: l == null ? void 0 : l.value
  }), i(n));
}, De = (a, o, i) => (n) => {
  const l = a.current;
  l && o(l, "blur"), i && i(n);
}, xe = (a, o) => {
  const i = o.delimiter || ".", n = a.split("").reverse();
  for (let l = 0; l < n.length; l++)
    if (l <= (o.decimals || 0)) {
      const s = n[l];
      if ([",", "."].includes(s))
        return s;
    }
  return i;
}, pr = (a, o, i, n) => (n ? a.replace(/^0+/, "") || "0" : a).split("").reverse().reduce((v, c, d) => {
  const R = d % 3 === 0 && d > 0;
  return `${c}${R ? o : ""}${v}`;
}, "") || (i ? "0" : ""), gr = (a, o, i) => {
  const n = a.substring(0, o);
  return i ? n.padEnd(o, "0") : n;
}, ke = (a, o, i) => {
  if (a === "")
    return "";
  const { separator: n = " ", decimals: l = 0, delimiter: s = "." } = o, v = xe(a, o), c = a.includes(v), [d = "", R = ""] = a.split(v).map((q) => q.replace(/\D/g, ""));
  if (!c && d === "" && R === "")
    return "";
  const b = i === "blur" && l > 0, m = gr(
    R,
    l,
    b
  ), T = l > 0 && (c || b);
  return `${pr(
    d,
    n,
    i === "blur" && T,
    i === "blur"
  )}${T ? s : ""}${m}`;
}, mr = (a, o, i) => {
  const n = xe(a, i), l = a.replace(n, "");
  return a.includes(n) && l === o;
};
var Ae = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function br() {
  if (Pe)
    return L;
  Pe = 1;
  var a = Oe, o = Symbol.for("react.element"), i = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, l = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(c, d, R) {
    var b, m = {}, T = null, w = null;
    R !== void 0 && (T = "" + R), d.key !== void 0 && (T = "" + d.key), d.ref !== void 0 && (w = d.ref);
    for (b in d)
      n.call(d, b) && !s.hasOwnProperty(b) && (m[b] = d[b]);
    if (c && c.defaultProps)
      for (b in d = c.defaultProps, d)
        m[b] === void 0 && (m[b] = d[b]);
    return { $$typeof: o, type: c, key: T, ref: w, props: m, _owner: l.current };
  }
  return L.Fragment = i, L.jsx = v, L.jsxs = v, L;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function Er() {
  return Ce || (Ce = 1, process.env.NODE_ENV !== "production" && function() {
    var a = Oe, o = Symbol.for("react.element"), i = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), c = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), F = Symbol.iterator, ee = "@@iterator";
    function q(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = F && e[F] || e[ee];
      return typeof r == "function" ? r : null;
    }
    var D = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
          t[u - 1] = arguments[u];
        $e("error", e, t);
      }
    }
    function $e(e, r, t) {
      {
        var u = D.ReactDebugCurrentFrame, p = u.getStackAddendum();
        p !== "" && (r += "%s", t = t.concat([p]));
        var g = t.map(function(h) {
          return String(h);
        });
        g.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, g);
      }
    }
    var Le = !1, We = !1, Me = !1, Ne = !1, Ye = !1, re;
    re = Symbol.for("react.module.reference");
    function Be(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === n || e === s || Ye || e === l || e === R || e === b || Ne || e === w || Le || We || Me || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === m || e.$$typeof === v || e.$$typeof === c || e.$$typeof === d || e.$$typeof === re || e.getModuleId !== void 0));
    }
    function Ue(e, r, t) {
      var u = e.displayName;
      if (u)
        return u;
      var p = r.displayName || r.name || "";
      return p !== "" ? t + "(" + p + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case n:
          return "Fragment";
        case i:
          return "Portal";
        case s:
          return "Profiler";
        case l:
          return "StrictMode";
        case R:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            var r = e;
            return te(r) + ".Consumer";
          case v:
            var t = e;
            return te(t._context) + ".Provider";
          case d:
            return Ue(e, e.render, "ForwardRef");
          case m:
            var u = e.displayName || null;
            return u !== null ? u : C(e.type) || "Memo";
          case T: {
            var p = e, g = p._payload, h = p._init;
            try {
              return C(h(g));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, I = 0, ne, ae, oe, ie, se, ue, le;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function Ve() {
      {
        if (I === 0) {
          ne = console.log, ae = console.info, oe = console.warn, ie = console.error, se = console.group, ue = console.groupCollapsed, le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ce,
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
        I++;
      }
    }
    function qe() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, e, {
              value: ne
            }),
            info: j({}, e, {
              value: ae
            }),
            warn: j({}, e, {
              value: oe
            }),
            error: j({}, e, {
              value: ie
            }),
            group: j({}, e, {
              value: se
            }),
            groupCollapsed: j({}, e, {
              value: ue
            }),
            groupEnd: j({}, e, {
              value: le
            })
          });
        }
        I < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = D.ReactCurrentDispatcher, G;
    function M(e, r, t) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (p) {
            var u = p.stack.trim().match(/\n( *(at )?)/);
            G = u && u[1] || "";
          }
        return `
` + G + e;
      }
    }
    var z = !1, N;
    {
      var Je = typeof WeakMap == "function" ? WeakMap : Map;
      N = new Je();
    }
    function fe(e, r) {
      if (!e || z)
        return "";
      {
        var t = N.get(e);
        if (t !== void 0)
          return t;
      }
      var u;
      z = !0;
      var p = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var g;
      g = J.current, J.current = null, Ve();
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
            } catch (O) {
              u = O;
            }
            Reflect.construct(e, [], h);
          } else {
            try {
              h.call();
            } catch (O) {
              u = O;
            }
            e.call(h.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            u = O;
          }
          e();
        }
      } catch (O) {
        if (O && u && typeof O.stack == "string") {
          for (var f = O.stack.split(`
`), S = u.stack.split(`
`), E = f.length - 1, y = S.length - 1; E >= 1 && y >= 0 && f[E] !== S[y]; )
            y--;
          for (; E >= 1 && y >= 0; E--, y--)
            if (f[E] !== S[y]) {
              if (E !== 1 || y !== 1)
                do
                  if (E--, y--, y < 0 || f[E] !== S[y]) {
                    var P = `
` + f[E].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && N.set(e, P), P;
                  }
                while (E >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        z = !1, J.current = g, qe(), Error.prepareStackTrace = p;
      }
      var k = e ? e.displayName || e.name : "", Te = k ? M(k) : "";
      return typeof e == "function" && N.set(e, Te), Te;
    }
    function Ge(e, r, t) {
      return fe(e, !1);
    }
    function ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function Y(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, ze(e));
      if (typeof e == "string")
        return M(e);
      switch (e) {
        case R:
          return M("Suspense");
        case b:
          return M("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Ge(e.render);
          case m:
            return Y(e.type, r, t);
          case T: {
            var u = e, p = u._payload, g = u._init;
            try {
              return Y(g(p), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var B = Object.prototype.hasOwnProperty, de = {}, ve = D.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function Ze(e, r, t, u, p) {
      {
        var g = Function.call.bind(B);
        for (var h in e)
          if (g(e, h)) {
            var f = void 0;
            try {
              if (typeof e[h] != "function") {
                var S = Error((u || "React class") + ": " + t + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw S.name = "Invariant Violation", S;
              }
              f = e[h](r, h, u, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              f = E;
            }
            f && !(f instanceof Error) && (U(p), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", t, h, typeof f), U(null)), f instanceof Error && !(f.message in de) && (de[f.message] = !0, U(p), _("Failed %s type: %s", t, f.message), U(null));
          }
      }
    }
    var Ke = Array.isArray;
    function Z(e) {
      return Ke(e);
    }
    function He(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Xe(e) {
      try {
        return he(e), !1;
      } catch {
        return !0;
      }
    }
    function he(e) {
      return "" + e;
    }
    function pe(e) {
      if (Xe(e))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", He(e)), he(e);
    }
    var $ = D.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ge, me, K;
    K = {};
    function er(e) {
      if (B.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function rr(e) {
      if (B.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function tr(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var t = C($.current.type);
        K[t] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C($.current.type), e.ref), K[t] = !0);
      }
    }
    function nr(e, r) {
      {
        var t = function() {
          ge || (ge = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ar(e, r) {
      {
        var t = function() {
          me || (me = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var or = function(e, r, t, u, p, g, h) {
      var f = {
        $$typeof: o,
        type: e,
        key: r,
        ref: t,
        props: h,
        _owner: g
      };
      return f._store = {}, Object.defineProperty(f._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(f, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.defineProperty(f, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    };
    function ir(e, r, t, u, p) {
      {
        var g, h = {}, f = null, S = null;
        t !== void 0 && (pe(t), f = "" + t), rr(r) && (pe(r.key), f = "" + r.key), er(r) && (S = r.ref, tr(r, p));
        for (g in r)
          B.call(r, g) && !Qe.hasOwnProperty(g) && (h[g] = r[g]);
        if (e && e.defaultProps) {
          var E = e.defaultProps;
          for (g in E)
            h[g] === void 0 && (h[g] = E[g]);
        }
        if (f || S) {
          var y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          f && nr(h, y), S && ar(h, y);
        }
        return or(e, f, S, p, u, $.current, h);
      }
    }
    var H = D.ReactCurrentOwner, be = D.ReactDebugCurrentFrame;
    function x(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function Ee() {
      {
        if (H.current) {
          var e = C(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function sr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Re = {};
    function ur(e) {
      {
        var r = Ee();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ye(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ur(r);
        if (Re[t])
          return;
        Re[t] = !0;
        var u = "";
        e && e._owner && e._owner !== H.current && (u = " It was passed a child from " + C(e._owner.type) + "."), x(e), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, u), x(null);
      }
    }
    function _e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var t = 0; t < e.length; t++) {
            var u = e[t];
            Q(u) && ye(u, r);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var p = q(e);
          if (typeof p == "function" && p !== e.entries)
            for (var g = p.call(e), h; !(h = g.next()).done; )
              Q(h.value) && ye(h.value, r);
        }
      }
    }
    function lr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || r.$$typeof === m))
          t = r.propTypes;
        else
          return;
        if (t) {
          var u = C(r);
          Ze(t, e.props, "prop", u, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var p = C(r);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function cr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var u = r[t];
          if (u !== "children" && u !== "key") {
            x(e), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), x(null);
            break;
          }
        }
        e.ref !== null && (x(e), _("Invalid attribute `ref` supplied to `React.Fragment`."), x(null));
      }
    }
    function Se(e, r, t, u, p, g) {
      {
        var h = Be(e);
        if (!h) {
          var f = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (f += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var S = sr(p);
          S ? f += S : f += Ee();
          var E;
          e === null ? E = "null" : Z(e) ? E = "array" : e !== void 0 && e.$$typeof === o ? (E = "<" + (C(e.type) || "Unknown") + " />", f = " Did you accidentally export a JSX literal instead of a component?") : E = typeof e, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, f);
        }
        var y = ir(e, r, t, p, g);
        if (y == null)
          return y;
        if (h) {
          var P = r.children;
          if (P !== void 0)
            if (u)
              if (Z(P)) {
                for (var k = 0; k < P.length; k++)
                  _e(P[k], e);
                Object.freeze && Object.freeze(P);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(P, e);
        }
        return e === n ? cr(y) : lr(y), y;
      }
    }
    function fr(e, r, t) {
      return Se(e, r, t, !0);
    }
    function dr(e, r, t) {
      return Se(e, r, t, !1);
    }
    var vr = dr, hr = fr;
    W.Fragment = n, W.jsx = vr, W.jsxs = hr;
  }()), W;
}
(function(a) {
  process.env.NODE_ENV === "production" ? a.exports = br() : a.exports = Er();
})(Ae);
const Fe = Ae.exports.jsx, Rr = (a, o) => {
  let i = a;
  return (n, l) => {
    const {
      value: s,
      selectionStart: v,
      selectionEnd: c
    } = n, d = i.length < s.length, R = s.length === v && s.length === c, b = mr(i, s, o), m = ke(s, o, l);
    n.value = m, l === "change" && (R ? (n.selectionStart = m.length, n.selectionEnd = m.length) : d ? (n.selectionStart = (v || 0) + (m.length - s.length), n.selectionEnd = (c || 0) + (m.length - s.length)) : b ? (n.selectionStart = (v || 0) + 1, n.selectionEnd = (c || 0) + 1) : (n.selectionStart = v, n.selectionEnd = c)), i = n.value;
  };
}, wr = ({
  options: a,
  defaultValue: o,
  onChange: i,
  onBlur: n,
  ...l
}) => {
  const s = V(() => ke(o ? o + "" : "", a, "blur"), [o, a]), v = V(() => Rr(s, a), [s, a]), c = we(null);
  return /* @__PURE__ */ Fe("input", {
    ref: c,
    defaultValue: s != null ? s : "",
    onChange: je(c, v, i),
    onBlur: De(c, v, n),
    inputMode: "decimal",
    style: {
      textAlign: "right"
    },
    ...l
  });
}, A = " ", yr = (a) => {
  const { blocks: o = [], separators: i = [], overflow: n = !1 } = a, l = n ? 0 : 1;
  return o.length - l > i.length ? [...i, A] : i;
}, _r = (a, o, i) => (i && (a = a.filter((n) => i.test(n))), a.filter(
  (n) => !(o || [A]).includes(n)
)), Sr = (a, o, i, n, l) => {
  if (!o || o.length === 0)
    return a.join("");
  const s = o.map((v, c) => {
    var w;
    const d = a.splice(0, v), R = d.length === v, b = c === o.length - 1, m = a.length;
    if (!b && m || R && l && !b) {
      const F = (w = (i || [])[c]) != null ? w : A;
      d.push(F);
    }
    return d.join("");
  });
  return n && a.length && (s.push((i || [])[o.length] || A), s.push(a.join(""))), s.join("");
}, Ie = (a, o, i) => {
  var d;
  const n = (a || "").split(""), l = o.blocks || [], s = yr(o), v = _r(
    n,
    s,
    o.range
  );
  return Sr(
    v,
    l,
    s,
    (d = o.overflow) != null ? d : !1,
    i != null ? i : !1
  );
}, Tr = (a, o) => {
  var s, v;
  const i = ((s = o.blocks) != null ? s : []).reduce(
    (c, d) => c + d,
    0
  ), n = new Array(
    (Math.max(((v = o.blocks) != null ? v : []).length - 1), 0)
  ).fill("").reduce((c, d, R) => {
    var m, T;
    const b = (T = ((m = o.separators) != null ? m : [])[R]) != null ? T : A;
    return c + b.length;
  }, 0), l = i + n;
  return a.length >= l;
}, Pr = (a, o, i, n, l) => {
  var s;
  if (i === "change")
    return n && l;
  if (i === "blur") {
    const v = ((s = o.separators) != null ? s : [A]).includes(a[a.length - 1]);
    return !Tr(a, o) && v;
  }
  return !1;
}, Cr = (a, o) => {
  let i = a;
  return (n, l) => {
    const {
      value: s,
      selectionStart: v,
      selectionEnd: c
    } = n, d = i.length < s.length, R = s.length === v && s.length === c, b = Pr(s, o, l, d, R), m = Ie(s, o, b);
    n.value = m, l === "change" && (R ? (n.selectionStart = m.length, n.selectionEnd = m.length) : (n.selectionStart = v, n.selectionEnd = c)), i = n.value;
  };
}, jr = ({
  options: a,
  defaultValue: o,
  onChange: i,
  onBlur: n,
  ...l
}) => {
  const s = V(() => Ie(o ? o + "" : "", a, !1), [o, a]), v = V(() => Cr(s, a), [s, a]), c = we(null);
  return /* @__PURE__ */ Fe("input", {
    ref: c,
    defaultValue: s != null ? s : "",
    onChange: je(c, v, i),
    onBlur: De(c, v, n),
    ...l
  });
};
export {
  jr as BlocksRangeInput,
  wr as NumberInput
};
