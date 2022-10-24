import * as blocksRangeHelpers from "./blocksRangeHelpers";

test("formatBlocksRange() full value formatted", () => {
    const result = blocksRangeHelpers.formatBlocksRange("ab-cd-efg", {
        blocks: [2, 2, 3],
        separators: ["-", "-"],
    });
    expect(result).toEqual("ab-cd-efg");
});

test("formatBlocksRange() full value unformatted", () => {
    const result = blocksRangeHelpers.formatBlocksRange("abcdefg", {
        blocks: [2, 2, 3],
        separators: ["-", "-"],
    });
    expect(result).toEqual("ab-cd-efg");
});

test("formatBlocksRange() full value partially wrongly formatted", () => {
    const result = blocksRangeHelpers.formatBlocksRange("ab-c-defg", {
        blocks: [2, 2, 3],
        separators: ["-", "-"],
    });
    expect(result).toEqual("ab-cd-efg");
});

test("formatBlocksRange() partial value partially wrongly formatted", () => {
    const result = blocksRangeHelpers.formatBlocksRange("a-bc-de", {
        blocks: [2, 2, 3],
        separators: ["-", "-"],
    });
    expect(result).toEqual("ab-cd-e");
});
