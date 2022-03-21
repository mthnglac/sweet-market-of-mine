import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  align-items: stretch;
  margin: 3%;
`;
const LeftSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  flex: 1;
`;
const MiddleContainer = styled.div`
  display: flex;
  margin: 10px;
  flex: 1;
`;
const RightSideContainer = styled.div`
  display: flex;
  margin: 10px;
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
