import { InputManipulator } from './types';

export declare const createChangeEventManipulator: (ref: React.RefObject<HTMLInputElement>, manipulator: InputManipulator, onChange?: React.InputHTMLAttributes<HTMLInputElement>["onChange"]) => (e: React.ChangeEvent<HTMLInputElement>) => void;
export declare const createBlurEventManipulator: (ref: React.RefObject<HTMLInputElement>, manipulator: InputManipulator, onBlur?: React.InputHTMLAttributes<HTMLInputElement>["onBlur"]) => (e: React.FocusEvent<HTMLInputElement>) => void;
