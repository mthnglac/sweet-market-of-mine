import styled, { keyframes } from "styled-components";
import { theme } from "../../../Theme";

const mainColor = theme.colors.whiteSoft;
const secondColor = theme.colors.white;
const littleCursor = theme.colors.blue;

const rotation = keyframes`
  from {
    -webkit-transform: rotate(270deg);
  }
  to {
    -webkit-transform: rotate(630deg);
  }
`;

const Container = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: rgba(249, 249, 249, 0.5);
`;
const Outer = styled.div`
  margin: auto;
  margin-top: 15%;
  background: ${mainColor};
  height: 100px;
  width: 100px;
  border-radius: 15px;
`;
const Middle = styled.div`
  height: 60px;
  width: 60px;
  margin: auto;
  position: relative;
  top: 20px;
  border-radius: 50%;
  background-image: linear-gradient(150deg, transparent 50%, ${secondColor} 50%),
    linear-gradient(90deg, ${secondColor} 50%, ${littleCursor} 50%);
  -webkit-animation: ${rotation} 1200ms infinite linear;
  transform-origin: 50% 50%;
  animation-timing-function: ease;
`;
const Inner = styled.div`
  background: ${mainColor};
  height: 48px;
  width: 48px;
  margin: auto;
  position: relative;
  top: 6px;
  border-radius: 50%;
`;

export { Container, Outer, Middle, Inner };
