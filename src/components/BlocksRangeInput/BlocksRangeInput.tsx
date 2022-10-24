import React, { useMemo, useRef } from "react";
import {
    createBlurEventManipulator,
    createChangeEventManipulator,
} from "../helpers";
import {
    formatBlocksRange,
    checkShouldAddTrailingSeparator,
} from "./blocksRangeHelpers";
import { InputManipulator } from "../types";
import { BlocksRangeInputOptions } from "./types";

interface BlocksRangeInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    options: BlocksRangeInputOptions;
}

const formattedInputManipulator = (
    defaultValue: string,
    options: BlocksRangeInputOptions,
): InputManipulator => {
    let prevValue = defaultValue;
    return (input: HTMLInputElement, event: "change" | "blur") => {
        const { value, selectionStart, selectionEnd } = input;
        const didAdd = prevValue.length < value.length;

        const isCursorAtLastPosition =
            value.length === selectionStart && value.length === selectionEnd;

        // on blur keep last separator if it was there
        const addTrailingSeparator = checkShouldAddTrailingSeparator(
            value,
            options,
            event,
            didAdd,
            isCursorAtLastPosition,
        );
        const formatted = formatBlocksRange(
            value,
            options,
            addTrailingSeparator,
        );

        input.value = formatted;

        // moving cursor to next logical position
        if (event === "change") {
            if (isCursorAtLastPosition) {
                // if cursor was at end, keep at end
                input.selectionStart = formatted.length;
                input.selectionEnd = formatted.length;
            } else {
                input.selectionStart = selectionStart;
                input.selectionEnd = selectionEnd;
            }
        }

        // Finally set previous value to current value
        prevValue = input.value;
    };
};

const BlocksRangeInput = ({
    options,
    defaultValue,
    onChange,
    onBlur,
    ...props
}: BlocksRangeInputProps) => {
    const formattedDefaultValue = useMemo(
        () =>
            formatBlocksRange(
                defaultValue ? defaultValue + "" : "",
                options,
                false,
            ),
        [defaultValue, options],
    );
    const manipulator = useMemo(
        () => formattedInputManipulator(formattedDefaultValue, options),
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
            {...props}
        />
    );
};

export default BlocksRangeInput;
