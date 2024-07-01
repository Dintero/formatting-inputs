import { ManipulatorEventType } from '../types';
import { BlocksRangeInputOptions } from './types';

export declare const formatBlocksRange: (value: string, options: BlocksRangeInputOptions, addTrailingSeparator?: boolean) => string;
export declare const checkShouldAddTrailingSeparator: (value: string, options: BlocksRangeInputOptions, eventType: ManipulatorEventType, didAdd: boolean, isAtLastPosition: boolean) => boolean;
