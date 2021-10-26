import styled from "styled-components";
import { BackgroundGradient, color, font } from "./styleVariable";

export const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${BackgroundGradient};
`;

export const AbsoluteDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${"images/pattern-hills.svg"});
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 100em;
  z-index: 20;
`;

export const Title = styled.h1`
  max-width: 80%;
  font-size: 1em;
  text-align: center;
  color: ${color.neutral.white};
  font-family: ${font.family.redHat};
  text-transform: uppercase;
  font-weight: ${font.weight.bold};
  letter-spacing: 0.5em;
`;

export const Box = styled.div`
  background-color: ${color.neutral.mostlyBlackBlue};
`;
