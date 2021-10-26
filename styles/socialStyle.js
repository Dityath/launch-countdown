import styled from "styled-components";
import { color } from "./styleVariable";

export const SocialContainer = styled.div`
  display: flex;
  bottom: 4em;
  gap: 20px;
  position: fixed;
`;

export const SocialLogo = styled.svg`
  fill: ${color.primary.grayishBlue};
  width: 24px;
  height: 24px;

  &:hover {
    fill: ${color.primary.softRed};
    cursor: pointer;
  }
`;
