export type ManipulatorEventType = "change" | "blur";
export type InputManipulator = (
    input: HTMLInputElement,
    event: ManipulatorEventType,
) => void;
