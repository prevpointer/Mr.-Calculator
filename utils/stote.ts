import { signal } from "@preact/signals";

export const valueOfInput1 = signal<string>("");
export const valueOfInput2 = signal<string>("");
export const valueOfPrecision = signal<string>(""); // Default precision to 2 decimal places
export const valueOfResult = signal<string>("");
export const valueOfOperation = signal("");