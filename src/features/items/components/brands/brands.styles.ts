import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;

  {${({ brandsLoading }: { brandsLoading: boolean }) => brandsLoading && `
      height: 300px;
  `}}
`;
const Title = styled.h2`
  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.greyscale500};
`

export {
  Container,
  Title,
};
