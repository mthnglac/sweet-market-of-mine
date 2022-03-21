import { RadioButtonProps } from "./radio-button.types";
import { RadioButtonLabel } from "./radio-button.styles";

export function RadioButton({ label, value, onChange }: RadioButtonProps) {
  return (
    <RadioButtonLabel>
      <input
        style={{ margin: 0 }}
        type="radio"
        name="radio"
        checked={value}
        onChange={onChange}
      />
      <span className="checkmark">{label}</span>
    </RadioButtonLabel>
  );
}
