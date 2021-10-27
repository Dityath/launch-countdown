import styled from "styled-components";
import { color, font } from "./styleVariable";

export const CountContainer = styled.div`
  margin-top: 2em;
  margin-bottom: 20vh;
  display: flex;
  gap: 1em;

  @media (min-width: 1024px) {
    gap: 2em;
  }

  @media (min-width: 1536px) {
    gap: 2.8em;
  }
`;

export const CountFlexItem = styled.div`
  background-color: ${color.neutral.darkDesaturatedBlue};
  height: 65px;
  box-shadow: 0.2em 0.2em 0.5em black;
  border-radius: 0.3em;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 640px) {
    height: 80px;
  }

  @media (min-width: 768px) {
    height: 100px;
  }

  @media (min-width: 1024px) {
    height: 150px;
  }

  @media (min-width: 1536px) {
    height: 200px;
  }
`;

export const CountBox = styled.div`
  width: 65px;

  @media (min-width: 640px) {
    width: 80px;
  }

  @media (min-width: 768px) {
    width: 100px;
  }

  @media (min-width: 1024px) {
    width: 150px;
  }

  @media (min-width: 1536px) {
    width: 200px;
  }
`;

export const TimerNumb = styled.h2`
  color: ${color.primary.softRed};
  font-family: ${font.family.redHat};
  font-size: 2.5em;
  text-align: center;
  padding: 0;
  margin: 0;

  @media (min-width: 640px) {
    font-size: 2.8em;
  }

  @media (min-width: 768px) {
    font-size: 3.5em;
  }

  @media (min-width: 1024px) {
    font-size: 5em;
  }

  @media (min-width: 1536px) {
    font-size: 7em;
  }
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

  @media (min-width: 640px) {
    font-size: 0.6em;
    margin: 1.4em 0 0;
  }

  @media (min-width: 768px) {
    font-size: 0.8em;
    margin: 1.4em 0 0;
  }

  @media (min-width: 1024px) {
    font-size: 1em;
    margin: 1.5em 0 0;
  }

  @media (min-width: 1536px) {
    font-size: 1.4em;
    margin: 1.8em 0 0;
  }
`;
