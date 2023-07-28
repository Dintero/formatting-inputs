import { ManipulatorEventType } from "../types";
import { NumberInputOptions } from "./types";

const DEFAULT_DELIMITER = ".";
const DEFAULT_SEPARATOR = " ";
const DEFAULT_DECIMALS = 0;
const DEFAULT_PAD_DECIMALS = false;

const formatDiscreteNumberPart = (
    value: string,
    separator: string,
    addZeroIfEmpty: boolean,
    shouldStripLeadingZeros: boolean,
) => {
    const stripped = shouldStripLeadingZeros
        ? value.replace(/^0+/, "") || "0"
        : value;
    const formatted = stripped
        .split("")
        .reverse()
        .reduce<string>((acc, char, idx) => {
            const addSeparator = idx % 3 === 0 && idx > 0;
            return `${char}${addSeparator ? separator : ""}${acc}`;
        }, "");
    return formatted || (addZeroIfEmpty ? "0" : "");
};

const formatDecimalNumberPart = (
    value: string,
    decimals: number,
    padDecimals: boolean,
) => {
    const cut = value.substring(0, decimals);
    if (padDecimals) {
        return cut.padEnd(decimals, "0");
    }
    return cut;
};

export const formatNumber = (
    value: string,
    options: NumberInputOptions,
    event: ManipulatorEventType,
) => {
    if (value === "") {
        return "";
    }
    const {
        delimiter = DEFAULT_DELIMITER,
        separator = DEFAULT_SEPARATOR,
        decimals = DEFAULT_DECIMALS,
        padDecimals = DEFAULT_PAD_DECIMALS,
    } = options;
    const hasDelimiter = value.includes(delimiter);
    const [discrete = "", decimal = ""] = value
        .split(delimiter)
        .map((v) => v.replace(/\D/g, ""));
    if (!hasDelimiter && discrete === "" && decimal === "") {
        return "";
    }
    const shouldPadDecimals = event === "blur" && decimals > 0 && padDecimals;
    const decimalFormatted = formatDecimalNumberPart(
        decimal,
        decimals,
        shouldPadDecimals,
    );
    const shouldAddDecimals =
        decimals > 0 && (hasDelimiter || shouldPadDecimals);
    const shouldDiscreteAddZeroIfEmpty = event === "blur" && shouldAddDecimals;
    const shouldStripLeadingZeros = event === "blur";
    const formattedDiscrete = formatDiscreteNumberPart(
        discrete,
        separator,
        shouldDiscreteAddZeroIfEmpty,
        shouldStripLeadingZeros,
    );
    const shouldStripTralingDelimiters =
        event === "blur" && decimalFormatted === "";
    const formattedDelimiter =
        shouldAddDecimals && !shouldStripTralingDelimiters ? delimiter : "";
    return `${formattedDiscrete}${formattedDelimiter}${decimalFormatted}`;
};

export const checkDidRemoveDecimalDelimiter = (
    oldValue: string,
    value: string,
    options: NumberInputOptions,
) => {
    const { delimiter = DEFAULT_DELIMITER } = options;
    const oldWithoutDelimiter = oldValue.replace(delimiter, "");
    return oldValue.includes(delimiter) && oldWithoutDelimiter === value;
};
