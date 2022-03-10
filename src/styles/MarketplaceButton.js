import styled from "styled-components";
import marketplaceButton from "../assets/marketplaceButton.png";

export const MarketplaceButton = styled.button`
  background: url(${marketplaceButton}) no-repeat;
  border: 0;
  width: 134px;
  height: 48px;
  margin-left: 20px;
  transition: filter 0.252s;
  cursor: pointer;

  &:hover {
    filter: brightness(125%);
  }
`;
