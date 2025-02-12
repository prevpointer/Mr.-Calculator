import { storeValue } from "./AllMethods.ts";


interface Prop {
  width?: string
  readOnly: boolean
  value: string
  type: string
  placeholder: string
  height?: string
  onFocus?: (e:FocusEvent)=>void
  // onChange?: ()=>void
}



export const Form = (props: Prop) => {
  const { width, readOnly, value, type, placeholder, height, onFocus } = props;
  const formStyle = {
    width: width,
    height: height
  }
  

  const typeStoring = (e: Event) => {
    const target = e.currentTarget as HTMLTextAreaElement;
    storeValue(type, target.value)
  }

  function validateNumber(event: FocusEvent): void {
    // Regex to match integers, floating-point numbers, and scientific notation
    const regex = /^-?\d+(\.\d+)?([eE][-+]?\d+)?$/;
    if ((event.target as HTMLTextAreaElement).value.length !== 0 && !regex.test((event.target as HTMLTextAreaElement).value)) {
      alert("uhh huh! numbers only!")
      return
    }
  }

  return (
    <textarea type="text" class="form-style" style={formStyle} readOnly={readOnly} value={value} placeholder={placeholder} onInput={typeStoring} onBlur={validateNumber} onFocus={onFocus} />
  );
}