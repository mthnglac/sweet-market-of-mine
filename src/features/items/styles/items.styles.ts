import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  align-items: stretch;
  margin: 1% 5%;
`;
const LeftSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1%;
  flex: 1;
`;
const MiddleContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 1%;
  flex: 3;
`;
const RightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1%;
  flex: 1;
`;
const BottomContainer = styled.div`
  display: flex;
  align-items: center;
`;

export {
  MainContainer,
  LeftSideContainer,
  RightSideContainer,
  MiddleContainer,
  BottomContainer,
};
