import React from "react";
import { NumberInputOptions } from "./types";
interface NumberInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    options: NumberInputOptions;
}
declare const NumberInput: ({ options, defaultValue, onChange, onBlur, ...props }: NumberInputProps) => JSX.Element;
export default NumberInput;
