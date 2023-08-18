import D, { useMemo as m, useRef as p } from "react";
const S = (e, r, n) => (t) => {
  const o = e.current;
  o && r(o, "change"), n && n(t);
}, E = (e, r, n) => (t) => {
  const o = e.current;
  o && r(o, "blur"), n && n(t);
}, f = " ", M = (e) => {
  const { blocks: r = [], separators: n = [], overflow: t = !1 } = e, o = t ? 0 : 1;
  return r.length - o > n.length ? [...n, f] : n;
}, k = (e, r, n) => (n && (e = e.filter((t) => n.test(t))), e.filter(
  (t) => !(r || [f]).includes(t)
)), F = (e, r, n, t, o) => {
  if (!r || r.length === 0)
    return e.join("");
  const s = r.map((c, l) => {
    const a = e.splice(0, c), d = a.length === c, u = l === r.length - 1, i = e.length;
    if (!u && i || d && o && !u) {
      const g = (n || [])[l] ?? f;
      a.push(g);
    }
    return a.join("");
  });
  return t && e.length && (s.push((n || [])[r.length] || f), s.push(e.join(""))), s.join("");
}, A = (e, r, n) => {
  const t = (e || "").split(""), o = r.blocks || [], s = M(r), c = k(
    t,
    s,
    r.range
  );
  return F(
    c,
    o,
    s,
    r.overflow ?? !1,
    n ?? !1
  );
}, I = (e, r) => {
  const n = (r.blocks ?? []).reduce(
    (s, c) => s + c,
    0
  ), t = new Array(
    (Math.max((r.blocks ?? []).length - 1), 0)
  ).fill("").reduce((s, c, l) => {
    const a = (r.separators ?? [])[l] ?? f;
    return s + a.length;
  }, 0), o = n + t;
  return e.length >= o;
}, T = (e, r, n, t, o) => {
  if (n === "change")
    return t && o;
  if (n === "blur") {
    const s = (r.separators ?? [f]).includes(e[e.length - 1]);
    return !I(e, r) && s;
  }
  return !1;
}, B = (e, r) => {
  let n = e;
  return (t, o) => {
    const { value: s, selectionStart: c, selectionEnd: l } = t, a = n.length < s.length, d = s.length === c && s.length === l, u = T(
      s,
      r,
      o,
      a,
      d
    ), i = A(
      s,
      r,
      u
    );
    t.value = i, o === "change" && (d ? (t.selectionStart = i.length, t.selectionEnd = i.length) : (t.selectionStart = c, t.selectionEnd = l)), n = t.value;
  };
}, O = ({
  options: e,
  defaultValue: r,
  onChange: n,
  onBlur: t,
  ...o
}) => {
  const s = m(
    () => A(
      r ? r + "" : "",
      e,
      !1
    ),
    [r, e]
  ), c = m(
    () => B(s, e),
    [s, e]
  ), l = p(null);
  return /* @__PURE__ */ D.createElement(
    "input",
    {
      ref: l,
      defaultValue: s ?? "",
      onChange: S(
        l,
        c,
        n
      ),
      onBlur: E(l, c, t),
      ...o
    }
  );
}, L = ".", P = " ", C = 0, N = !1, _ = (e, r, n, t) => (t ? e.replace(/^0+/, "") || "0" : e).split("").reverse().reduce((c, l, a) => {
  const d = a % 3 === 0 && a > 0;
  return `${l}${d ? r : ""}${c}`;
}, "") || (n ? "0" : ""), $ = (e, r, n) => {
  const t = e.substring(0, r);
  return n ? t.padEnd(r, "0") : t;
}, b = (e, r, n) => {
  if (e === "")
    return "";
  const {
    delimiter: t = L,
    separator: o = P,
    decimals: s = C,
    padDecimals: c = N
  } = r, l = e.includes(t), [a = "", d = ""] = e.split(t).map((R) => R.replace(/\D/g, ""));
  if (!l && a === "" && d === "")
    return "";
  const u = n === "blur" && s > 0 && c, i = $(
    d,
    s,
    u
  ), h = s > 0 && (l || u);
  return `${_(
    a,
    o,
    n === "blur" && h,
    n === "blur"
  )}${h && !(n === "blur" && i === "") ? t : ""}${i}`;
}, v = (e, r, n) => {
  const { delimiter: t = L } = n, o = e.replace(t, "");
  return e.includes(t) && o === r;
}, j = (e, r) => {
  let n = e;
  return (t, o) => {
    const { value: s, selectionStart: c, selectionEnd: l } = t, a = n.length < s.length, d = s.length === c && s.length === l, u = v(
      n,
      s,
      r
    ), i = b(s, r, o);
    t.value = i, o === "change" && (d ? (t.selectionStart = i.length, t.selectionEnd = i.length) : a ? (t.selectionStart = (c || 0) + (i.length - s.length), t.selectionEnd = (l || 0) + (i.length - s.length)) : u ? (t.selectionStart = (c || 0) + 1, t.selectionEnd = (l || 0) + 1) : (t.selectionStart = c, t.selectionEnd = l)), n = t.value;
  };
}, V = ({
  options: e,
  defaultValue: r,
  onChange: n,
  onBlur: t,
  ...o
}) => {
  const s = m(
    () => b(
      r ? r + "" : "",
      e,
      "blur"
    ),
    [r, e]
  ), c = m(
    () => j(s, e),
    [s, e]
  ), l = p(null);
  return /* @__PURE__ */ D.createElement(
    "input",
    {
      ref: l,
      defaultValue: s ?? "",
      onChange: S(
        l,
        c,
        n
      ),
      onBlur: E(l, c, t),
      inputMode: "decimal",
      style: { textAlign: "right" },
      ...o
    }
  );
};
export {
  O as BlocksRangeInput,
  V as NumberInput
};
