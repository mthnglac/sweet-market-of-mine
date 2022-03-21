import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  background-color: ${props => props.theme.colors.blue};
  padding: 10px;
`

export {
  Container
}
