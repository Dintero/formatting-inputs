import React, { useMemo, useRef } from "react";
import {
    createBlurEventManipulator,
    createChangeEventManipulator,
} from "../helpers";
import { formatNumber, checkDidRemoveDecimalDelimiter } from "./numberHelpers";
import { InputManipulator } from "../types";
import { NumberInputOptions } from "./types";

interface NumberInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    options: NumberInputOptions;
}

const createNumberManipulator = (
    defaultValue: string,
    options: NumberInputOptions,
): InputManipulator => {
    let prevValue = defaultValue;
    return (input: HTMLInputElement, event: "change" | "blur") => {
        const { value, selectionStart, selectionEnd } = input;
        const didAdd = prevValue.length < value.length;
        const isCursorAtLastPosition =
            value.length === selectionStart && value.length === selectionEnd;
        const didRemoveDelimiter = checkDidRemoveDecimalDelimiter(
            prevValue,
            value,
            options,
        );
        const formatted = formatNumber(value, options, event);
        input.value = formatted;
        // moving cursor to next logical position
        if (event === "change") {
            if (isCursorAtLastPosition) {
                // if cursor was at end, keep at end
                input.selectionStart = formatted.length;
                input.selectionEnd = formatted.length;
            } else if (didAdd) {
                // keep right aligned
                input.selectionStart =
                    (selectionStart || 0) + (formatted.length - value.length);
                input.selectionEnd =
                    (selectionEnd || 0) + (formatted.length - value.length);
            } else if (didRemoveDelimiter) {
                // move to where delimiter was removed
                input.selectionStart = (selectionStart || 0) + 1;
                input.selectionEnd = (selectionEnd || 0) + 1;
            } else {
                // keep same position if removed or replaced
                input.selectionStart = selectionStart;
                input.selectionEnd = selectionEnd;
            }
        }
        // Finally set previous value to current value
        prevValue = input.value;
    };
};

const NumberInput = ({
    options,
    defaultValue,
    onChange,
    onBlur,
    ...props
}: NumberInputProps) => {
    const formattedDefaultValue = useMemo(
        () =>
            formatNumber(
                defaultValue ? defaultValue + "" : "",
                options,
                "blur",
            ),
        [defaultValue, options],
    );
    const manipulator = useMemo(
        () => createNumberManipulator(formattedDefaultValue, options),
        [formattedDefaultValue, options],
    );
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <input
            ref={inputRef}
            defaultValue={formattedDefaultValue ?? ""}
            onChange={createChangeEventManipulator(
                inputRef,
                manipulator,
                onChange,
            )}
            onBlur={createBlurEventManipulator(inputRef, manipulator, onBlur)}
            inputMode="decimal"
            style={{ textAlign: "right" }}
            {...props}
        />
    );
};

export default NumberInput;
