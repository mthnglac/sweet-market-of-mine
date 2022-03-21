import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 2px;
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
`;

export {
  Container,
};
