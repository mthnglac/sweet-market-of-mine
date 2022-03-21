import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  height: 76px;
`;

const CartButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 5%;
  height: 76px;
  width: 150px;
`;

const CartButton = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  font-size: ${(props) => props.theme.fontSizes.responsive};
  color: ${(props) => props.theme.fontSizes.white};

  span {
    text-align: center;
    margin-left: 10px;
  }
`;

export {
  Container,
  CartButtonContainer,
  CartButton,
}
