import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 25px;
  padding-bottom: 25px;

  {${({ itemsLoading }: { itemsLoading: boolean }) => itemsLoading && `
      height: 1600px;
  `}}
`;
const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 21%;
  padding: 25px;
  background-color: ${props => props.theme.colors.white};

  .image {
    position: relative;
    width: 100%;
    overflow: hidden;

    background-color: ${props => props.theme.colors.white};
    border: 2px solid ${props => props.theme.colors.greyscale100};
    border-radius: 12px;

    &:before {
      content: "";
      display: block;
      padding-top: 100%
    }

    .square-image {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      text-align: center;
      object-fit: fill;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    margin: 5px;
    width: 100%;

    .item-price {
      margin-bottom: 0;
      font-weight: ${props => props.theme.fontWeights.bold};
      font-size: 1rem;
      color: ${props => props.theme.colors.blue};

      .currency {
        font-weight: ${props => props.theme.fontWeights.regular};
      }
    }

    .item-name {
      font-weight: ${props => props.theme.fontWeights.semiBold};
      font-size: ${props => props.theme.fontSizes.responsive};
      color: ${props => props.theme.colors.greyscale700};
    }
  }
`;

export { Container, ItemContainer };
