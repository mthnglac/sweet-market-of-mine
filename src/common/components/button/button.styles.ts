import styled from "styled-components";

const Container = styled.button`
  display: inline-block;
  text-align: center;
  border: none;
  text-decoration: none;
  cursor: pointer;
  border-radius: 2px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  font-size: ${(props) => props.theme.fontSizes.responsive};
  margin-right: 10px;
`;

export { Container };
