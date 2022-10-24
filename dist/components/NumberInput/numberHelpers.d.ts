import { ManipulatorEventType } from "../types";
import { NumberInputOptions } from "./types";
export declare const formatNumber: (value: string, options: NumberInputOptions, event: ManipulatorEventType) => string;
export declare const checkDidRemoveDecimalDelimiter: (oldValue: string, value: string, options: NumberInputOptions) => boolean;
