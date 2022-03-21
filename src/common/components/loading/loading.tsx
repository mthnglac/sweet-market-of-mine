import { Container, Outer, Middle, Inner } from './loading.styles'
import { LoadingProps } from './loading.types'

export function Loading({ size = "medium" }: LoadingProps) {
  return (
    <Container>
      <Outer indicatorSize={size}>
        <Middle indicatorSize={size}>
          <Inner indicatorSize={size}></Inner>
        </Middle>
      </Outer>
    </Container>
  )
}
