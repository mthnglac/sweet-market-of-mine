import { Container } from "./button.styles";
import type { ButtonProps } from "./button.types";
import { theme } from '../../../Theme'

export function Button({ text, active, onClick, width, height }: ButtonProps) {
  return (
    <Container
      onClick={onClick}
      style={{
        backgroundColor: active ? theme.colors.blue : theme.colors.greyPurple,
        width: width ? width : "124px",
        height: height ? height : "22px",
        color: active ? theme.colors.white : theme.colors.blue
      }}
    >
      {text}
    </Container>
  );
}
