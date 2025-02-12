import { FormPropType } from "../utils/types.ts";
import { storeValuebyType } from "./Calculation.ts";

export const TextAreaInput = (props: FormPropType) => {
  const { width, readOnly, value, typeOfInput, placeholder } = props;
  const formStyle = {
    width: width,
  };

  // handle the input value and store the value on that type
  const handleInputwithStore = (e: Event) => {
    const target = e.currentTarget as HTMLTextAreaElement;
    storeValuebyType(typeOfInput, target.value);
  };

  function validateNumber(event: FocusEvent): void {
    // Regex to match integers, floating-point numbers, and scientific notation
    const regex = /^-?\d+(\.\d+)?([eE][-+]?\d+)?$/;
    if (
      (event.target as HTMLTextAreaElement).value.length !== 0 &&
      !regex.test((event.target as HTMLTextAreaElement).value)
    ) {
      alert("uhh huh! numbers only!");
      return;
    }
  }

  return (
    <textarea
      type="text"
      class="form-style"
      style={formStyle}
      readOnly={readOnly}
      value={value}
      placeholder={placeholder}
      onInput={handleInputwithStore}
      onBlur={validateNumber}
    />
  );
};
