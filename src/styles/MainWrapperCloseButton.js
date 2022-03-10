import styled from "styled-components";
import closeButton from "./../assets/closebutton.png";

export const MainWrapperCloseButton = styled.div`
  position: absolute;
  top: 13%;
  left: 13%;
  text-align: center;
  cursor: pointer;
  background: url(${closeButton}) no-repeat center;
  height: 33px;
  width: 33px;
  @media (min-height: 850px) {
    top: 24%;
  }
`;
