import styled from "styled-components";
import backButton from "./../assets/backButton.png";

export const MainWrapperBackButton = styled.div`
  position: absolute;
  top: 13%;
  left: 13%;
  text-align: center;
  cursor: pointer;
  background: url(${backButton}) no-repeat center;
  height: 35px;
  width: 33px;
  @media (min-height: 850px) {
    top: 24%;
  }
  @media (min-width: 910px) {
    left: 35px;
    top: 25%;
  }
`;
