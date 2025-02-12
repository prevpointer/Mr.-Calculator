import { ButtonProps } from "../utils/types.ts";
import { operation } from "./Calculation.ts";
import { valueOfOperation } from "../utils/stote.ts";

export const Button = (props: ButtonProps) => {
  const { value, label } = props;


  const handleClick = (e: Event) => {
    const target = e.currentTarget as HTMLButtonElement;
    // storing the value of the button for performing operation
    valueOfOperation.value = target.value;
    operation(e); // Call second function
  };

  return (
    <button
      class="btn"
      value={value}
      style={{ width: "90px" }}
      onClick={handleClick}
    >
      {props.label}
    </button>
  );
};
