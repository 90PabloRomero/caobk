import styled from "styled-components";
import mainBGFrame from "./../assets/Frame.png";

export const MainWrapper = styled.main`
  min-height: 100vh;
  display: grid;
  place-content: center;
  grid-gap: 15%;
  color: white;
  background: url(${mainBGFrame}) no-repeat center;
  position: relative;
`;
