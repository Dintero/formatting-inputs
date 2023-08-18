import React from "react";
import type { BlocksRangeInputOptions } from "./types";
export interface BlocksRangeInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    options: BlocksRangeInputOptions;
}
declare const BlocksRangeInput: ({ options, defaultValue, onChange, onBlur, ...props }: BlocksRangeInputProps) => import("react/jsx-runtime").JSX.Element;
export default BlocksRangeInput;
