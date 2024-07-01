import { default as React } from 'react';
import { NumberInputOptions } from './types';

export interface NumberInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    options: NumberInputOptions;
}
declare const NumberInput: ({ options, defaultValue, onChange, onBlur, ...props }: NumberInputProps) => import("react/jsx-runtime").JSX.Element;
export default NumberInput;
