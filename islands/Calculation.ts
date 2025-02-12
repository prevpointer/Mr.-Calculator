// @deno-types="npm:@types/big.js"
import Big from "https://unpkg.com/big.js@6.2.2/big.mjs";
// import all the states
import {
  valueOfInput1,
  valueOfInput2,
  valueOfPrecision,
  valueOfResult,
  valueOfOperation,
} from "../utils/stote.ts";

// Store the currently active button
let activeButton: HTMLButtonElement | null = null;

export const storeValuebyType = (type: string, value: string) => {
  if (type === "Input1") {
    valueOfInput1.value = value;
  } else if (type === "Input2") {
    valueOfInput2.value = value;
  } else if (type === "precisionInput") {
    // Validate precision input to prevent errors (optional)
    const parsedPrecision = parseInt(value, 10);
    if (!isNaN(parsedPrecision) && parsedPrecision >= 0) {
      valueOfPrecision.value = value;
    } else {
      // Handle invalid precision input (e.g., display error message)
      console.error(
        "Invalid precision value. Please enter a non-negative integer."
      );
    }
  }
};

// Now calculate all the operations
export const operation = (e: Event) => {
  const target = e.target as HTMLButtonElement;

  // Remove active class from the previously active button (if any)
  if (activeButton) {
    activeButton.classList.remove("active");
  }
  // convert the value of Input in Big
  const num1 = new Big(valueOfInput1.value);
  const num2 = new Big(valueOfInput2.value);
  const precisionValue = parseInt(valueOfPrecision.value, 10) || 0; // Use default 0 if empty or invalid

  switch (valueOfOperation.value) {
    case "+":
      const add = num1.plus(num2).toFixed(precisionValue);
      valueOfResult.value = add;
      break;
    case "-":
      const sub = num1.minus(num2).toFixed(precisionValue);
      valueOfResult.value = sub;
      break;
    case "*":
      const mul = num1.times(num2).toFixed(precisionValue);
      valueOfResult.value = mul;
      break;
    case "/":
      const div = num1.div(num2).toFixed(precisionValue);
      valueOfResult.value = div;
      break;
    case "%":
      const mod = num1.mod(num2).toFixed(precisionValue);
      valueOfResult.value = mod;
      break;
    case "^":
      const pow = num1.pow(+num2).toFixed(precisionValue);
      valueOfResult.value = pow;
      break;
    case "clear":
      valueOfInput1.value = "";
      valueOfInput2.value = "";
      valueOfResult.value = "";
      valueOfPrecision.value = "";
      break;
    default:
      break;
  }

  // Update the active button reference
  activeButton = target;
  target.classList.add("active");
};
