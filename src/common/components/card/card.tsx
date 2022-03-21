import { Container } from './card.styles'
import type { CardProps } from './card.types'

export function Card({ children }: CardProps) {
  return (
    <Container>
      {children}
    </Container>
  );
}
