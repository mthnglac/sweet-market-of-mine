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
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: rgba(249, 249, 249, 0.5);
`;
const Outer = styled.div`
  margin: auto;
  margin-top: ${({ indicatorSize = "medium" }: { indicatorSize: string }) => {
    return indicatorSize === "medium" ? "30%" : "20%";
  }};
  background: ${mainColor};
  height: ${({ indicatorSize = "medium" }: { indicatorSize: string }) => {
    return indicatorSize === "medium" ? "100px" : "50px";
  }};
  width: ${({ indicatorSize = "medium" }: { indicatorSize: string }) => {
    return indicatorSize === "medium" ? "100px" : "50px";
  }};
  border-radius: 15px;
`;
const Middle = styled.div`
  height: ${({ indicatorSize = "medium" }: { indicatorSize: string }) => {
    return indicatorSize === "medium" ? "60px" : "30px";
  }};
  width: ${({ indicatorSize = "medium" }: { indicatorSize: string }) => {
    return indicatorSize === "medium" ? "60px" : "30px";
  }};
  margin: auto;
  position: relative;
  top: ${({ indicatorSize = "medium" }: { indicatorSize: string }) => {
    return indicatorSize === "medium" ? "20px" : "10px";
  }};
  border-radius: 50%;
  background-image: linear-gradient(150deg, transparent 50%, ${secondColor} 50%),
    linear-gradient(90deg, ${secondColor} 50%, ${littleCursor} 50%);
  -webkit-animation: ${rotation} 1200ms infinite linear;
  transform-origin: 50% 50%;
  animation-timing-function: ease;
`;
const Inner = styled.div`
  background: ${mainColor};
  height: ${({ indicatorSize = "medium" }: { indicatorSize: string }) => {
    return indicatorSize === "medium" ? "48px" : "24px";
  }};
  width: ${({ indicatorSize = "medium" }: { indicatorSize: string }) => {
    return indicatorSize === "medium" ? "48px" : "24px";
  }};
  margin: auto;
  position: relative;
  top: ${({ indicatorSize = "medium" }: { indicatorSize: string }) => {
    return indicatorSize === "medium" ? "6px" : "3px";
  }};
  border-radius: 50%;
`;

export { Container, Outer, Middle, Inner };
