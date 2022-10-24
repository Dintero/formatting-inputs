import { BlocksRangeInputOptions } from "./types";

import { ManipulatorEventType } from "../types";

const defaultSeparator = " ";

const getSignificantSeparators = (options: BlocksRangeInputOptions) => {
    const { blocks = [], separators = [], overflow = false } = options;
    const offset = overflow ? 0 : 1;
    const shouldAddDefaultSeparator =
        blocks.length - offset > separators.length;
    return shouldAddDefaultSeparator
        ? [...separators, defaultSeparator]
        : separators;
};

const removeBlocksRangeFormat = (
    chars: string[],
    separators: string[] | undefined,
    range: RegExp | undefined,
) => {
    if (range) {
        chars = chars.filter((c) => range.test(c));
    }
    return chars.filter(
        (char) => !(separators || [defaultSeparator]).includes(char),
    );
};

const addBlocksRangeFormat = (
    chars: string[],
    blocks: number[] | undefined,
    separators: string[] | undefined,
    overflow: boolean | undefined,
    addTrailingSeparator: boolean,
) => {
    if (!blocks || blocks.length === 0) {
        return chars.join("");
    }
    const chunked = blocks.map((block, i) => {
        const part = chars.splice(0, block);
        const isFullBlock = part.length === block;
        const isLastBlock = i === blocks.length - 1;
        const hasNextPart = chars.length;
        // console.log({hasNextPart, isFullBlock, isLastBlock, addTrailingSeparator});
        const shouldAddSeparator =
            (!isLastBlock && hasNextPart) ||
            (isFullBlock && addTrailingSeparator && !isLastBlock);
        if (shouldAddSeparator) {
            const separator = (separators || [])[i] ?? defaultSeparator;
            part.push(separator);
        }
        return part.join("");
    });
    if (overflow && chars.length) {
        chunked.push((separators || [])[blocks.length] || defaultSeparator);
        chunked.push(chars.join(""));
    }
    return chunked.join("");
};

export const formatBlocksRange = (
    value: string,
    options: BlocksRangeInputOptions,
    addTrailingSeparator?: boolean,
) => {
    const chars = (value || "").split("");
    const blocks = options.blocks || [];
    const separators = getSignificantSeparators(options);
    const unformatted = removeBlocksRangeFormat(
        chars,
        separators,
        options.range,
    );
    const formatted = addBlocksRangeFormat(
        unformatted,
        blocks,
        separators,
        options.overflow ?? false,
        addTrailingSeparator ?? false,
    );
    return formatted;
};

const hasFullLengthOrMore = (
    value: string,
    options: BlocksRangeInputOptions,
) => {
    const blocksLength = (options.blocks ?? []).reduce(
        (acc, block) => acc + block,
        0,
    );
    const separatorsLength = new Array(
        (Math.max((options.blocks ?? []).length - 1), 0),
    )
        .fill("")
        .reduce((acc, _, i) => {
            const separator = (options.separators ?? [])[i] ?? defaultSeparator;
            return acc + separator.length;
        }, 0);
    const fullLength = blocksLength + separatorsLength;
    return value.length >= fullLength;
};

export const checkShouldAddTrailingSeparator = (
    value: string,
    options: BlocksRangeInputOptions,
    eventType: ManipulatorEventType,
    didAdd: boolean,
    isAtLastPosition: boolean,
) => {
    if (eventType === "change") {
        return didAdd && isAtLastPosition;
    }
    if (eventType === "blur") {
        const isLastSeparator = (
            options.separators ?? [defaultSeparator]
        ).includes(value[value.length - 1]);
        return !hasFullLengthOrMore(value, options) && isLastSeparator;
    }
    return false;
};
