import { useMemo as e, useRef as t } from "react";
//#region src/components/helpers.ts
var n = (e, t, n) => (r) => {
	let i = e.current;
	i && t(i, "change"), n && n(r);
}, r = (e, t, n) => (r) => {
	let i = e.current;
	i && t(i, "blur"), n && n(r);
}, i = " ", a = (e) => {
	let { blocks: t = [], separators: n = [], overflow: r = !1 } = e, a = +!r;
	return t.length - a > n.length ? [...n, i] : n;
}, o = (e, t, n) => (n && (e = e.filter((e) => n.test(e))), e.filter((e) => !(t || [i]).includes(e))), s = (e, t, n, r, a) => {
	if (!t || t.length === 0) return e.join("");
	let o = t.map((r, o) => {
		let s = e.splice(0, r), c = s.length === r, l = o === t.length - 1, u = e.length;
		if (!l && u || c && a && !l) {
			let e = (n || [])[o] ?? i;
			s.push(e);
		}
		return s.join("");
	});
	return r && e.length && (o.push((n || [])[t.length] || i), o.push(e.join(""))), o.join("");
}, c = (e, t, n) => {
	let r = (e || "").split(""), i = t.blocks || [], c = a(t);
	return s(o(r, c, t.range), i, c, t.overflow ?? !1, n ?? !1);
}, l = (e, t) => {
	let n = (t.blocks ?? []).reduce((e, t) => e + t, 0) + Array((Math.max((t.blocks ?? []).length - 1), 0)).fill("").reduce((e, n, r) => e + ((t.separators ?? [])[r] ?? i).length, 0);
	return e.length >= n;
}, u = (e, t, n, r, a) => {
	if (n === "change") return r && a;
	if (n === "blur") {
		let n = (t.separators ?? [i]).includes(e[e.length - 1]);
		return !l(e, t) && n;
	}
	return !1;
}, d = (e, t) => {
	let n = e;
	return (e, r) => {
		let { value: i, selectionStart: a, selectionEnd: o } = e, s = n.length < i.length, l = i.length === a && i.length === o, d = c(i, t, u(i, t, r, s, l));
		e.value = d, r === "change" && (l ? (e.selectionStart = d.length, e.selectionEnd = d.length) : (e.selectionStart = a, e.selectionEnd = o)), n = e.value;
	};
}, f = ({ options: i, defaultValue: a, onChange: o, onBlur: s, ...l }) => {
	let u = e(() => c(a ? `${a}` : "", i, !1), [a, i]), f = e(() => d(u, i), [u, i]), p = t(null);
	return /* @__PURE__ */ React.createElement("input", {
		ref: p,
		defaultValue: u ?? "",
		onChange: n(p, f, o),
		onBlur: r(p, f, s),
		...l
	});
}, p = ".", m = " ", h = 0, g = !1, _ = (e, t, n, r) => (r ? e.replace(/^0+/, "") || "0" : e).split("").reverse().reduce((e, n, r) => `${n}${r % 3 == 0 && r > 0 ? t : ""}${e}`, "") || (n ? "0" : ""), v = (e, t, n) => {
	let r = e.substring(0, t);
	return n ? r.padEnd(t, "0") : r;
}, y = (e, t, n) => {
	if (e === "") return "";
	let { delimiter: r = p, separator: i = m, decimals: a = h, padDecimals: o = g } = t, s = e.includes(r), [c = "", l = ""] = e.split(r).map((e) => e.replace(/\D/g, ""));
	if (!s && c === "" && l === "") return "";
	let u = n === "blur" && a > 0 && o, d = v(l, a, u), f = a > 0 && (s || u);
	return `${_(c, i, n === "blur" && f, n === "blur")}${f && !(n === "blur" && d === "") ? r : ""}${d}`;
}, b = (e, t, n) => {
	let { delimiter: r = p } = n, i = e.replace(r, "");
	return e.includes(r) && i === t;
}, x = (e, t) => {
	let n = e;
	return (e, r) => {
		let { value: i, selectionStart: a, selectionEnd: o } = e, s = n.length < i.length, c = i.length === a && i.length === o, l = b(n, i, t), u = y(i, t, r);
		e.value = u, r === "change" && (c ? (e.selectionStart = u.length, e.selectionEnd = u.length) : s ? (e.selectionStart = (a || 0) + (u.length - i.length), e.selectionEnd = (o || 0) + (u.length - i.length)) : l ? (e.selectionStart = (a || 0) + 1, e.selectionEnd = (o || 0) + 1) : (e.selectionStart = a, e.selectionEnd = o)), n = e.value;
	};
}, S = ({ options: i, defaultValue: a, onChange: o, onBlur: s, ...c }) => {
	let l = e(() => y(a ? `${a}` : "", i, "blur"), [a, i]), u = e(() => x(l, i), [l, i]), d = t(null);
	return /* @__PURE__ */ React.createElement("input", {
		ref: d,
		defaultValue: l ?? "",
		onChange: n(d, u, o),
		onBlur: r(d, u, s),
		inputMode: "decimal",
		style: { textAlign: "right" },
		...c
	});
};
//#endregion
export { f as BlocksRangeInput, S as NumberInput };
