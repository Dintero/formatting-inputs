import D, { useMemo as m, useRef as S } from "react";
const E = (e, r, n) => (t) => {
  const c = e.current;
  c && r(c, "change"), n && n(t);
}, A = (e, r, n) => (t) => {
  const c = e.current;
  c && r(c, "blur"), n && n(t);
}, f = " ", B = (e) => {
  const { blocks: r = [], separators: n = [], overflow: t = !1 } = e, c = t ? 0 : 1;
  return r.length - c > n.length ? [...n, f] : n;
}, M = (e, r, n) => (n && (e = e.filter((t) => n.test(t))), e.filter(
  (t) => !(r || [f]).includes(t)
)), v = (e, r, n, t, c) => {
  if (!r || r.length === 0)
    return e.join("");
  const s = r.map((o, l) => {
    var g;
    const a = e.splice(0, o), u = a.length === o, d = l === r.length - 1, i = e.length;
    if (!d && i || u && c && !d) {
      const p = (g = (n || [])[l]) != null ? g : f;
      a.push(p);
    }
    return a.join("");
  });
  return t && e.length && (s.push((n || [])[r.length] || f), s.push(e.join(""))), s.join("");
}, b = (e, r, n) => {
  var a;
  const t = (e || "").split(""), c = r.blocks || [], s = B(r), o = M(
    t,
    s,
    r.range
  );
  return v(
    o,
    c,
    s,
    (a = r.overflow) != null ? a : !1,
    n != null ? n : !1
  );
}, N = (e, r) => {
  var s, o;
  const n = ((s = r.blocks) != null ? s : []).reduce(
    (l, a) => l + a,
    0
  ), t = new Array(
    (Math.max(((o = r.blocks) != null ? o : []).length - 1), 0)
  ).fill("").reduce((l, a, u) => {
    var i, h;
    const d = (h = ((i = r.separators) != null ? i : [])[u]) != null ? h : f;
    return l + d.length;
  }, 0), c = n + t;
  return e.length >= c;
}, P = (e, r, n, t, c) => {
  var s;
  if (n === "change")
    return t && c;
  if (n === "blur") {
    const o = ((s = r.separators) != null ? s : [f]).includes(e[e.length - 1]);
    return !N(e, r) && o;
  }
  return !1;
}, $ = (e, r) => {
  let n = e;
  return (t, c) => {
    const { value: s, selectionStart: o, selectionEnd: l } = t, a = n.length < s.length, u = s.length === o && s.length === l, d = P(
      s,
      r,
      c,
      a,
      u
    ), i = b(
      s,
      r,
      d
    );
    t.value = i, c === "change" && (u ? (t.selectionStart = i.length, t.selectionEnd = i.length) : (t.selectionStart = o, t.selectionEnd = l)), n = t.value;
  };
}, x = ({
  options: e,
  defaultValue: r,
  onChange: n,
  onBlur: t,
  ...c
}) => {
  const s = m(
    () => b(
      r ? r + "" : "",
      e,
      !1
    ),
    [r, e]
  ), o = m(
    () => $(s, e),
    [s, e]
  ), l = S(null);
  return /* @__PURE__ */ D.createElement("input", {
    ref: l,
    defaultValue: s != null ? s : "",
    onChange: E(
      l,
      o,
      n
    ),
    onBlur: A(l, o, t),
    ...c
  });
}, k = (e, r) => {
  const n = r.delimiter || ".", t = e.split("").reverse();
  for (let c = 0; c < t.length; c++)
    if (c <= (r.decimals || 0)) {
      const s = t[c];
      if ([",", "."].includes(s))
        return s;
    }
  return n;
}, F = (e, r, n, t) => (t ? e.replace(/^0+/, "") || "0" : e).split("").reverse().reduce((o, l, a) => {
  const u = a % 3 === 0 && a > 0;
  return `${l}${u ? r : ""}${o}`;
}, "") || (n ? "0" : ""), I = (e, r, n) => {
  const t = e.substring(0, r);
  return n ? t.padEnd(r, "0") : t;
}, L = (e, r, n) => {
  if (e === "")
    return "";
  const { separator: t = " ", decimals: c = 0, delimiter: s = "." } = r, o = k(e, r), l = e.includes(o), [a = "", u = ""] = e.split(o).map((R) => R.replace(/\D/g, ""));
  if (!l && a === "" && u === "")
    return "";
  const d = n === "blur" && c > 0, i = I(
    u,
    c,
    d
  ), h = c > 0 && (l || d);
  return `${F(
    a,
    t,
    n === "blur" && h,
    n === "blur"
  )}${h ? s : ""}${i}`;
}, j = (e, r, n) => {
  const t = k(e, n), c = e.replace(t, "");
  return e.includes(t) && c === r;
}, C = (e, r) => {
  let n = e;
  return (t, c) => {
    const { value: s, selectionStart: o, selectionEnd: l } = t, a = n.length < s.length, u = s.length === o && s.length === l, d = j(
      n,
      s,
      r
    ), i = L(s, r, c);
    t.value = i, c === "change" && (u ? (t.selectionStart = i.length, t.selectionEnd = i.length) : a ? (t.selectionStart = (o || 0) + (i.length - s.length), t.selectionEnd = (l || 0) + (i.length - s.length)) : d ? (t.selectionStart = (o || 0) + 1, t.selectionEnd = (l || 0) + 1) : (t.selectionStart = o, t.selectionEnd = l)), n = t.value;
  };
}, y = ({
  options: e,
  defaultValue: r,
  onChange: n,
  onBlur: t,
  ...c
}) => {
  const s = m(
    () => L(
      r ? r + "" : "",
      e,
      "blur"
    ),
    [r, e]
  ), o = m(
    () => C(s, e),
    [s, e]
  ), l = S(null);
  return /* @__PURE__ */ D.createElement("input", {
    ref: l,
    defaultValue: s != null ? s : "",
    onChange: E(
      l,
      o,
      n
    ),
    onBlur: A(l, o, t),
    inputMode: "decimal",
    style: { textAlign: "right" },
    ...c
  });
};
export {
  x as BlocksRangeInput,
  y as NumberInput
};
