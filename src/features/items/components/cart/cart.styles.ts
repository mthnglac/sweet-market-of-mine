import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  background-color: ${(props) => props.theme.colors.blue};
  padding: 10px;

  .cart-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme.colors.black50};

    .cart-item-details {
      display: flex;
      flex-direction: column;
    }

    .cart-item-price {
      margin-top: 0;
      font-weight: ${(props) => props.theme.fontWeights.semiBold};
      font-size: ${(props) => props.theme.fontSizes.responsive};
      color: ${(props) => props.theme.colors.blue};
    }

    .inc-dec-container {
      display: flex;
      align-items: center;

      .cart-item-count {
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${props => props.theme.colors.white};
        width: 32px;
        height: 32px;
        background-color: ${props => props.theme.colors.blue};
      }

      .increase-cart-item,
      .decrease-cart-item {
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${props => props.theme.colors.blue};
        font-size: ${props => props.theme.fontSizes.large};
        width: 32px;
        height: 32px;
        background-color: ${props => props.theme.colors.white};
      }
    }
  }

  .cart-total {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: center;
    align-self: flex-end;
    margin-top: 20px;
    width: 92px;
    height: 52px;
    border-radius: 2px;
    border: 2px solid ${props => props.theme.colors.blue};
    font-weight: ${(props) => props.theme.fontWeights.semiBold};
    font-size: ${(props) => props.theme.fontSizes.responsive};
    color: ${(props) => props.theme.colors.blue};
  }
`;

export { Container };
