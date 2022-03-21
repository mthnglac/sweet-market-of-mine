import { Container } from "./checkbox.styles";
import { CheckBoxProps } from "./checkbox.types";

export function CheckBox({
  label,
  helperLabel,
  checked,
  onChange,
}: CheckBoxProps) {
  return (
    <Container>
      <input type="checkbox" checked={checked} onChange={onChange}></input>
      <span>
        {label}
        {helperLabel && <span className="helper-label">({helperLabel})</span>}
      </span>
    </Container>
  );
}
