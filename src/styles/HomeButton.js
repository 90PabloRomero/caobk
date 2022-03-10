import styled from "styled-components";
import homeButton from "../assets/homeButton.png";

export const HomeButton = styled.button`
  background: url(${homeButton}) no-repeat;
  border: 0;
  width: 134px;
  height: 48px;
  transition: filter 0.252s;
  cursor: pointer;

  &:hover {
    filter: brightness(125%);
  }
`;
