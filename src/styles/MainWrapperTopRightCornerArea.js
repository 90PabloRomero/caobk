import styled from "styled-components";

export const MainWrapperTopRightCornerAreaMobile = styled.div`
  position: absolute;
  top: 2%;
  right: 2%;
  text-align: center;
  display: flex;
  @media (min-width: 910px) {
    display: none;
  }
`;

export const MainWrapperTopRightCornerAreaDesktop = styled.div`
  position: absolute;
  top: 2%;
  right: 2%;
  text-align: center;
  display: none;
  @media (min-width: 910px) {
    display: flex;
  }
`;
