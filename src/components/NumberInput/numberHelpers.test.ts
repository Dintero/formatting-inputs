import { expect, test } from "vitest";

import * as numberHelpers from "./numberHelpers";

test("formatNumber() number empty on blur", () => {
    const result = numberHelpers.formatNumber("", { separator: " " }, "blur");
    expect(result).toEqual("");
});

test("formatNumber() number 0 on blur", () => {
    const result = numberHelpers.formatNumber("0", { separator: " " }, "blur");
    expect(result).toEqual("0");
});

test("formatNumber() number a on blur", () => {
    const result = numberHelpers.formatNumber("a", { separator: " " }, "blur");
    expect(result).toEqual("");
});

test("formatNumber() number 100 on blur", () => {
    const result = numberHelpers.formatNumber(
        "100",
        { separator: " " },
        "blur",
    );
    expect(result).toEqual("100");
});

test("formatNumber() number 12 345 678 on blur", () => {
    const result = numberHelpers.formatNumber(
        "12 345678",
        { separator: " " },
        "blur",
    );
    expect(result).toEqual("12 345 678");
});

test("formatNumber() number with decimals missing in input 12 345 on blur", () => {
    const result = numberHelpers.formatNumber(
        "12345",
        { separator: " ", decimals: 2 },
        "blur",
    );
    expect(result).toEqual("12 345");
});

test("formatNumber() number with decimals missing in input 12 345 on blur with padDecimals", () => {
    const result = numberHelpers.formatNumber(
        "12345",
        { separator: " ", decimals: 2, padDecimals: true },
        "blur",
    );
    expect(result).toEqual("12 345.00");
});

test("formatNumber() number with decimals partial in input 12 345.1 on blur", () => {
    const result = numberHelpers.formatNumber(
        "12345.1",
        { separator: " ", decimals: 2 },
        "blur",
    );
    expect(result).toEqual("12 345.1");
});

test("formatNumber() number with decimals partial in input 12 345.1 on blur with padDecimals", () => {
    const result = numberHelpers.formatNumber(
        "12345.1",
        { separator: " ", decimals: 2, padDecimals: true },
        "blur",
    );
    expect(result).toEqual("12 345.10");
});

test("formatNumber() number with decimals overflow in input 12 345.109 on blur", () => {
    const result = numberHelpers.formatNumber(
        "12345.109",
        { separator: " ", decimals: 2 },
        "blur",
    );
    expect(result).toEqual("12 345.10");
});

test("formatNumber() number with decimals overflow in input 12 345.1 on change", () => {
    const result = numberHelpers.formatNumber(
        "12345.1",
        { separator: " ", decimals: 2 },
        "change",
    );
    expect(result).toEqual("12 345.1");
});

test("formatNumber() removes wrong separator 123451,09 for decimal on change", () => {
    const result = numberHelpers.formatNumber(
        "123451,09",
        { separator: " ", decimals: 2, delimiter: "." },
        "change",
    );
    expect(result).toEqual("12 345 109");
});

test("formatNumber() does not add numbers for . on change ", () => {
    const result = numberHelpers.formatNumber(
        ".",
        { separator: ",", decimals: 2, delimiter: "." },
        "change",
    );
    expect(result).toEqual(".");
});

test("formatNumber() adds whole number for . on blur ", () => {
    const result = numberHelpers.formatNumber(
        ".",
        { separator: ",", decimals: 2, delimiter: "." },
        "blur",
    );
    expect(result).toEqual("0");
});

test("formatNumber() adds whole number for . on blur with pad decimals", () => {
    const result = numberHelpers.formatNumber(
        ".",
        { separator: ",", decimals: 2, delimiter: ".", padDecimals: true },
        "blur",
    );
    expect(result).toEqual("0.00");
});

test("formatNumber() does not add whole number for .1 on change ", () => {
    const result = numberHelpers.formatNumber(
        ".1",
        { separator: ",", decimals: 2, delimiter: "." },
        "change",
    );
    expect(result).toEqual(".1");
});

test("formatNumber() adds whole number for .1 on blur ", () => {
    const result = numberHelpers.formatNumber(
        ".1",
        { separator: ",", decimals: 2, delimiter: "." },
        "blur",
    );
    expect(result).toEqual("0.1");
});

test("formatNumber() adds whole number for .1 on blur with padDecimals", () => {
    const result = numberHelpers.formatNumber(
        ".1",
        { separator: ",", decimals: 2, delimiter: ".", padDecimals: true },
        "blur",
    );
    expect(result).toEqual("0.10");
});

test("formatNumber() with same delimiter and separator", () => {
    // This dosen't really make any sense but this test is here to ensure
    // what happens if the implementation is changed later so we at least
    // have an idea of what might happen.
    const result = numberHelpers.formatNumber(
        "12345.34545",
        { separator: ".", decimals: 2, delimiter: ".", padDecimals: true },
        "blur",
    );
    expect(result).toEqual("12.345.34");
});

test("checkDidRemoveDecimalDelimiter()", () => {
    const result = numberHelpers.checkDidRemoveDecimalDelimiter(
        "12345.109",
        "12345109",
        { separator: " ", decimals: 2 },
    );
    expect(result).toEqual(true);
});

test("checkDidRemoveDecimalDelimiter()", () => {
    const result = numberHelpers.checkDidRemoveDecimalDelimiter(
        "12345.109",
        "1234109",
        { separator: " ", decimals: 2 },
    );
    expect(result).toEqual(false);
});
