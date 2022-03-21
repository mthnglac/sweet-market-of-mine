import styled from 'styled-components'

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  height: 76px;
`

const DivTitle = styled.div`
  margin-right: auto;
  padding: 12px 16px;
  cursor: pointer;
  vertical-align: middle;
`

const DivItem = styled.div`
  padding: 16px 16px;
  cursor: pointer;
  vertical-align: middle;
`

export {
  Header,
  DivTitle,
  DivItem,
}
