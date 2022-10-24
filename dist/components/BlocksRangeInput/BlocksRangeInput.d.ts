import React from "react";
import { BlocksRangeInputOptions } from "./types";
interface BlocksRangeInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    options: BlocksRangeInputOptions;
}
declare const BlocksRangeInput: ({ options, defaultValue, onChange, onBlur, ...props }: BlocksRangeInputProps) => JSX.Element;
export default BlocksRangeInput;
