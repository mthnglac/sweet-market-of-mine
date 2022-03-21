import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  alignitems: center;
`;
const Title = styled.h2`
  margin-top: 10px;
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${(props) => props.theme.colors.black500};
`;

export { Container, Title };
