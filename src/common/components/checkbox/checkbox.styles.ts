import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  span {
    font-weight: ${props => props.theme.fontWeights.regular};
    font-size: ${props => props.theme.fontSizes.medium};
    color: ${props => props.theme.colors.black600};

    .helper-label {
      margin-left: 5px;
      font-weight: ${props => props.theme.fontWeights.regular};
      font-size: ${props => props.theme.fontSizes.medium};
      color: ${props => props.theme.colors.black300};
    }
  }

`;

export {
  Container,
};
