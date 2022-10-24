import { ManipulatorEventType } from "../types";
import { NumberInputOptions } from "./types";

const getActualDelimiter = (value: string, options: NumberInputOptions) => {
    const optionDelimiter = options.delimiter || ".";

    // Scan input from right to left and find the first delimiter
    const chars = value.split("").reverse();
    for (let i = 0; i < chars.length; i++) {
        if (i <= (options.decimals || 0)) {
            const char = chars[i];
            if ([",", "."].includes(char)) {
                return char;
            }
        }
    }

    return optionDelimiter;
};

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
    const { separator = " ", decimals = 0, delimiter = "." } = options;
    const actualDelimiter = getActualDelimiter(value, options);
    const hasDelimiter = value.includes(actualDelimiter);
    const [discrete = "", decimal = ""] = value
        .split(actualDelimiter)
        .map((v) => v.replace(/\D/g, ""));
    if (!hasDelimiter && discrete === "" && decimal === "") {
        return "";
    }
    const shouldPadDecimals = event === "blur" && decimals > 0;
    const decimalFormatted = formatDecimalNumberPart(
        decimal,
        decimals,
        shouldPadDecimals,
    );
    const addDecimals = decimals > 0 && (hasDelimiter || shouldPadDecimals);
    const shouldDiscreteAddZeroIfEmpty = event === "blur" && addDecimals;
    const shouldStripLeadingZeros = event === "blur";
    const formattedDiscrete = formatDiscreteNumberPart(
        discrete,
        separator,
        shouldDiscreteAddZeroIfEmpty,
        shouldStripLeadingZeros,
    );
    return `${formattedDiscrete}${
        addDecimals ? delimiter : ""
    }${decimalFormatted}`;
};

export const checkDidRemoveDecimalDelimiter = (
    oldValue: string,
    value: string,
    options: NumberInputOptions,
) => {
    const actualDelimiter = getActualDelimiter(oldValue, options);
    const oldWithoutDelimiter = oldValue.replace(actualDelimiter, "");
    return oldValue.includes(actualDelimiter) && oldWithoutDelimiter === value;
};
