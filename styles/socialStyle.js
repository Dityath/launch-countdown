import styled from "styled-components";
import { color } from "./styleVariable";

export const SocialContainer = styled.div`
  display: flex;
  bottom: 4em;
  gap: 20px;
  position: fixed;

  @media (min-width: 640px) {
    bottom: 4em;
    gap: 25px;
  }
`;

export const SocialLogo = styled.svg`
  fill: ${color.primary.grayishBlue};
  width: 24px;
  height: 24px;
  transition: 0.2s;

  &:hover {
    fill: ${color.primary.softRed};
    cursor: pointer;
  }
`;
