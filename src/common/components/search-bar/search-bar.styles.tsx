import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;

  input {
    width: 100%;
    height: 48px;
    padding-left: 18px;
    border: 2px solid ${props => props.theme.colors.black100};
    border-radius: 2px;
    font-weight: ${props => props.theme.fontWeights.regular};
    font-size: ${props => props.theme.fontSizes.medium};
    color: ${props => props.theme.colors.black300};

    &:focus {
      outline: none !important;
      border-color: ${props => props.theme.colors.black100};
    }
  }
`;

export {
  Container,
};
