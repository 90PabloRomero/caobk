import styled from "styled-components";
import closeButton from "./../assets/closebutton.png";

export const MainWrapperCloseButtonMobile = styled.div`
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
  @media (min-width: 910px) {
    display: none;
  }
`;
export const MainWrapperCloseButtonDesktop = styled.div`
  position: absolute;
  top: 7px;
  left: -13px;
  text-align: center;
  cursor: pointer;
  background: url(${closeButton}) no-repeat center;
  height: 33px;
  width: 33px;
  display: none;
  @media (min-width: 910px) {
    display: block;
  }
`;
