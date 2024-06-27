import { useMemo as m, useRef as D } from "react";
const p = (e, r, n) => (t) => {
  const o = e.current;
  o && r(o, "change"), n && n(t);
}, S = (e, r, n) => (t) => {
  const o = e.current;
  o && r(o, "blur"), n && n(t);
}, f = " ", R = (e) => {
  const { blocks: r = [], separators: n = [], overflow: t = !1 } = e, o = t ? 0 : 1;
  return r.length - o > n.length ? [...n, f] : n;
}, M = (e, r, n) => (n && (e = e.filter((t) => n.test(t))), e.filter(
  (t) => !(r || [f]).includes(t)
)), k = (e, r, n, t, o) => {
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
}, E = (e, r, n) => {
  const t = (e || "").split(""), o = r.blocks || [], s = R(r), c = M(
    t,
    s,
    r.range
  );
  return k(
    c,
    o,
    s,
    r.overflow ?? !1,
    n ?? !1
  );
}, F = (e, r) => {
  const n = (r.blocks ?? []).reduce(
    (s, c) => s + c,
    0
  ), t = new Array(
    // biome-ignore lint: The comma operator is disallowed.
    (Math.max((r.blocks ?? []).length - 1), 0)
  ).fill("").reduce((s, c, l) => {
    const a = (r.separators ?? [])[l] ?? f;
    return s + a.length;
  }, 0), o = n + t;
  return e.length >= o;
}, I = (e, r, n, t, o) => {
  if (n === "change")
    return t && o;
  if (n === "blur") {
    const s = (r.separators ?? [f]).includes(e[e.length - 1]);
    return !F(e, r) && s;
  }
  return !1;
}, T = (e, r) => {
  let n = e;
  return (t, o) => {
    const { value: s, selectionStart: c, selectionEnd: l } = t, a = n.length < s.length, d = s.length === c && s.length === l, u = I(
      s,
      r,
      o,
      a,
      d
    ), i = E(
      s,
      r,
      u
    );
    t.value = i, o === "change" && (d ? (t.selectionStart = i.length, t.selectionEnd = i.length) : (t.selectionStart = c, t.selectionEnd = l)), n = t.value;
  };
}, y = ({
  options: e,
  defaultValue: r,
  onChange: n,
  onBlur: t,
  ...o
}) => {
  const s = m(
    () => E(
      r ? `${r}` : "",
      e,
      !1
    ),
    [r, e]
  ), c = m(
    () => T(s, e),
    [s, e]
  ), l = D(null);
  return /* @__PURE__ */ React.createElement(
    "input",
    {
      ref: l,
      defaultValue: s ?? "",
      onChange: p(
        l,
        c,
        n
      ),
      onBlur: S(l, c, t),
      ...o
    }
  );
}, A = ".", B = " ", P = 0, $ = !1, C = (e, r, n, t) => (t ? e.replace(/^0+/, "") || "0" : e).split("").reverse().reduce((c, l, a) => {
  const d = a % 3 === 0 && a > 0;
  return `${l}${d ? r : ""}${c}`;
}, "") || (n ? "0" : ""), N = (e, r, n) => {
  const t = e.substring(0, r);
  return n ? t.padEnd(r, "0") : t;
}, L = (e, r, n) => {
  if (e === "")
    return "";
  const {
    delimiter: t = A,
    separator: o = B,
    decimals: s = P,
    padDecimals: c = $
  } = r, l = e.includes(t), [a = "", d = ""] = e.split(t).map((b) => b.replace(/\D/g, ""));
  if (!l && a === "" && d === "")
    return "";
  const u = n === "blur" && s > 0 && c, i = N(
    d,
    s,
    u
  ), h = s > 0 && (l || u);
  return `${C(
    a,
    o,
    n === "blur" && h,
    n === "blur"
  )}${h && !(n === "blur" && i === "") ? t : ""}${i}`;
}, _ = (e, r, n) => {
  const { delimiter: t = A } = n, o = e.replace(t, "");
  return e.includes(t) && o === r;
}, v = (e, r) => {
  let n = e;
  return (t, o) => {
    const { value: s, selectionStart: c, selectionEnd: l } = t, a = n.length < s.length, d = s.length === c && s.length === l, u = _(
      n,
      s,
      r
    ), i = L(s, r, o);
    t.value = i, o === "change" && (d ? (t.selectionStart = i.length, t.selectionEnd = i.length) : a ? (t.selectionStart = (c || 0) + (i.length - s.length), t.selectionEnd = (l || 0) + (i.length - s.length)) : u ? (t.selectionStart = (c || 0) + 1, t.selectionEnd = (l || 0) + 1) : (t.selectionStart = c, t.selectionEnd = l)), n = t.value;
  };
}, O = ({
  options: e,
  defaultValue: r,
  onChange: n,
  onBlur: t,
  ...o
}) => {
  const s = m(
    () => L(
      r ? `${r}` : "",
      e,
      "blur"
    ),
    [r, e]
  ), c = m(
    () => v(s, e),
    [s, e]
  ), l = D(null);
  return /* @__PURE__ */ React.createElement(
    "input",
    {
      ref: l,
      defaultValue: s ?? "",
      onChange: p(
        l,
        c,
        n
      ),
      onBlur: S(l, c, t),
      inputMode: "decimal",
      style: { textAlign: "right" },
      ...o
    }
  );
};
export {
  y as BlocksRangeInput,
  O as NumberInput
};
