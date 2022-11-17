import { useMemo as g, useRef as D } from "react";
import { jsx as S } from "react/jsx-runtime";
const A = (e, r, n) => (t) => {
  const o = e.current;
  o && r(o, "change"), n && (console.log({
    targetValue: t.target.value,
    currentValue: o == null ? void 0 : o.value
  }), n(t));
}, b = (e, r, n) => (t) => {
  const o = e.current;
  o && r(o, "blur"), n && n(t);
}, f = " ", v = (e) => {
  const { blocks: r = [], separators: n = [], overflow: t = !1 } = e, o = t ? 0 : 1;
  return r.length - o > n.length ? [...n, f] : n;
}, B = (e, r, n) => (n && (e = e.filter((t) => n.test(t))), e.filter(
  (t) => !(r || [f]).includes(t)
)), M = (e, r, n, t, o) => {
  if (!r || r.length === 0)
    return e.join("");
  const s = r.map((c, l) => {
    var m;
    const a = e.splice(0, c), u = a.length === c, d = l === r.length - 1, i = e.length;
    if (!d && i || u && o && !d) {
      const p = (m = (n || [])[l]) != null ? m : f;
      a.push(p);
    }
    return a.join("");
  });
  return t && e.length && (s.push((n || [])[r.length] || f), s.push(e.join(""))), s.join("");
}, E = (e, r, n) => {
  var a;
  const t = (e || "").split(""), o = r.blocks || [], s = v(r), c = B(
    t,
    s,
    r.range
  );
  return M(
    c,
    o,
    s,
    (a = r.overflow) != null ? a : !1,
    n != null ? n : !1
  );
}, N = (e, r) => {
  var s, c;
  const n = ((s = r.blocks) != null ? s : []).reduce(
    (l, a) => l + a,
    0
  ), t = new Array(
    (Math.max(((c = r.blocks) != null ? c : []).length - 1), 0)
  ).fill("").reduce((l, a, u) => {
    var i, h;
    const d = (h = ((i = r.separators) != null ? i : [])[u]) != null ? h : f;
    return l + d.length;
  }, 0), o = n + t;
  return e.length >= o;
}, P = (e, r, n, t, o) => {
  var s;
  if (n === "change")
    return t && o;
  if (n === "blur") {
    const c = ((s = r.separators) != null ? s : [f]).includes(e[e.length - 1]);
    return !N(e, r) && c;
  }
  return !1;
}, $ = (e, r) => {
  let n = e;
  return (t, o) => {
    const {
      value: s,
      selectionStart: c,
      selectionEnd: l
    } = t, a = n.length < s.length, u = s.length === c && s.length === l, d = P(s, r, o, a, u), i = E(s, r, d);
    t.value = i, o === "change" && (u ? (t.selectionStart = i.length, t.selectionEnd = i.length) : (t.selectionStart = c, t.selectionEnd = l)), n = t.value;
  };
}, y = ({
  options: e,
  defaultValue: r,
  onChange: n,
  onBlur: t,
  ...o
}) => {
  const s = g(() => E(r ? r + "" : "", e, !1), [r, e]), c = g(() => $(s, e), [s, e]), l = D(null);
  return /* @__PURE__ */ S("input", {
    ref: l,
    defaultValue: s != null ? s : "",
    onChange: A(l, c, n),
    onBlur: b(l, c, t),
    ...o
  });
}, k = (e, r) => {
  const n = r.delimiter || ".", t = e.split("").reverse();
  for (let o = 0; o < t.length; o++)
    if (o <= (r.decimals || 0)) {
      const s = t[o];
      if ([",", "."].includes(s))
        return s;
    }
  return n;
}, j = (e, r, n, t) => (t ? e.replace(/^0+/, "") || "0" : e).split("").reverse().reduce((c, l, a) => {
  const u = a % 3 === 0 && a > 0;
  return `${l}${u ? r : ""}${c}`;
}, "") || (n ? "0" : ""), F = (e, r, n) => {
  const t = e.substring(0, r);
  return n ? t.padEnd(r, "0") : t;
}, L = (e, r, n) => {
  if (e === "")
    return "";
  const { separator: t = " ", decimals: o = 0, delimiter: s = "." } = r, c = k(e, r), l = e.includes(c), [a = "", u = ""] = e.split(c).map((R) => R.replace(/\D/g, ""));
  if (!l && a === "" && u === "")
    return "";
  const d = n === "blur" && o > 0, i = F(
    u,
    o,
    d
  ), h = o > 0 && (l || d);
  return `${j(
    a,
    t,
    n === "blur" && h,
    n === "blur"
  )}${h ? s : ""}${i}`;
}, I = (e, r, n) => {
  const t = k(e, n), o = e.replace(t, "");
  return e.includes(t) && o === r;
}, x = (e, r) => {
  let n = e;
  return (t, o) => {
    const {
      value: s,
      selectionStart: c,
      selectionEnd: l
    } = t, a = n.length < s.length, u = s.length === c && s.length === l, d = I(n, s, r), i = L(s, r, o);
    t.value = i, o === "change" && (u ? (t.selectionStart = i.length, t.selectionEnd = i.length) : a ? (t.selectionStart = (c || 0) + (i.length - s.length), t.selectionEnd = (l || 0) + (i.length - s.length)) : d ? (t.selectionStart = (c || 0) + 1, t.selectionEnd = (l || 0) + 1) : (t.selectionStart = c, t.selectionEnd = l)), n = t.value;
  };
}, O = ({
  options: e,
  defaultValue: r,
  onChange: n,
  onBlur: t,
  ...o
}) => {
  const s = g(() => L(r ? r + "" : "", e, "blur"), [r, e]), c = g(() => x(s, e), [s, e]), l = D(null);
  return /* @__PURE__ */ S("input", {
    ref: l,
    defaultValue: s != null ? s : "",
    onChange: A(l, c, n),
    onBlur: b(l, c, t),
    inputMode: "decimal",
    style: {
      textAlign: "right"
    },
    ...o
  });
};
export {
  y as BlocksRangeInput,
  O as NumberInput
};
