import type { InputManipulator } from "./types";

export const createChangeEventManipulator = (
    ref: React.RefObject<HTMLInputElement>,
    manipulator: InputManipulator,
    onChange?: React.InputHTMLAttributes<HTMLInputElement>["onChange"],
) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
        const current = ref.current;
        if (current) {
            manipulator(current, "change");
        }
        if (onChange) {
            onChange(e);
        }
    };
};

export const createBlurEventManipulator = (
    ref: React.RefObject<HTMLInputElement>,
    manipulator: InputManipulator,
    onBlur?: React.InputHTMLAttributes<HTMLInputElement>["onBlur"],
) => {
    return (e: React.FocusEvent<HTMLInputElement>) => {
        const current = ref.current;
        if (current) {
            manipulator(current, "blur");
        }
        if (onBlur) {
            onBlur(e);
        }
    };
};
