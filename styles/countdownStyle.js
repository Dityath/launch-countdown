import styled from "styled-components";
import { color, font } from "./styleVariable";

export const CountContainer = styled.div`
  margin-top: 2em;
  margin-bottom: 20vh;
  display: flex;
  gap: 1em;
`;

export const CountFlexItem = styled.div`
  background-color: ${color.neutral.darkDesaturatedBlue};
  height: 65px;
  box-shadow: 0.2em 0.2em 0.5em black;
  border-radius: 0.3em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CountBox = styled.div`
  width: 65px;
`;

export const TimerNumb = styled.h2`
  color: ${color.primary.softRed};
  font-family: ${font.family.redHat};
  font-size: 2.5em;
  text-align: center;
  padding: 0;
  margin: 0;
`;

export const UnderNumb = styled.p`
  text-transform: uppercase;
  font-family: ${font.family.redHat};
  font-weight: ${font.weight.regular};
  font-size: 0.5em;
  text-align: center;
  color: ${color.neutral.white};
  padding: 0;
  margin: 1.2em 0 0;
`;
