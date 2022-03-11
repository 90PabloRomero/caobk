import styled from "styled-components";
import settingsButton from "./../assets/settingsButton.png";

export const MainWrapperSettingsButton = styled.div`
  position: absolute;
  top: 13%;
  right: 13%;
  text-align: center;
  cursor: pointer;
  background: url(${settingsButton}) no-repeat center;
  height: 35px;
  width: 33px;
  @media (min-height: 850px) {
    top: 25%;
    right: 20%;
  }
`;
