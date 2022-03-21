import styled from "styled-components";

const RadioButtonLabel = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  cursor: pointer;
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.black600};

  &:last-child {
    margin-bottom: 0;
  }

  span {
    margin-left: 12px;
  }

  input {
    margin: 0;
  }
`;

export {
  RadioButtonLabel,
};
