import styled, { createGlobalStyle } from "styled-components";
import { useLocation } from "react-router-dom";
import mainBGFrame from "./../assets/bgm.png";
import bgpresale from "./../assets/bgpresale.png";
import presaleido from "./../assets/presale-ido.png";
import PassionOneFont from "../assets/PassionOne-Regular.ttf";
import blueFrame from "../assets/Frame.png";
import blueHomeDesktop from "./../assets/blueFrameDesktop.png";
import brownFrame from "../assets/brownBox.png";
import brownFrameD from "./../assets/brownBoxDesktop.png";
import presaleDesktop from "./../assets/presaleDesktop.png";
import presaleD from "./../assets/presaleD.png";
import presaleidoD from "./../assets/presaleidoD.png";
import bgD from "./../assets/bgD.png";
import blueFrameDesktop2 from "./../assets/blueFrameDesktop2.png";
import backButton from "./../assets/backButton.png";

export const MainWrapper = ({ children }) => {
  const location = useLocation();

  const MainWrapperStyles = styled.main`
    min-height: 100vh;
    display: grid;
    place-content: center;
    grid-gap: 15%;
    color: white;
    background: url(${location.pathname === "/presale-ido"
        ? brownFrame
        : blueFrame})
      no-repeat center ${location.pathname === "/presale-ido" ? "30%" : ""};
    position: relative;
    @media (min-width: 913px) {
      background: url(${location.pathname === "/presale"
          ? presaleDesktop
          : location.pathname === "/presale-ido"
          ? brownFrameD
          : location.pathname === "/"
          ? blueHomeDesktop
          : blueFrameDesktop2})
        no-repeat center;
    }
  `;
  const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: "Passion One";
      src: url(${PassionOneFont});
      font-weight: 400;
      font-style: normal;

    }

    html,
    body {
      padding: 0;
      margin: 0;
      min-height: 100%;
      font-size: 30px;
    }

    html {
      background: url(${
        location.pathname === "/presale"
          ? bgpresale
          : location.pathname === "/presale-ido"
          ? presaleido
          : mainBGFrame
      }) no-repeat center;
      font-family: "Passion One", serif;
      background-size: cover;
      max-height: 100vh;
      overflow: hidden;
      @media (min-width: 510px) {
        background: url(${
          location.pathname === "/presale"
            ? presaleD
            : location.pathname === "/presale-ido"
            ? presaleidoD
            : bgD
        }) no-repeat center;
      }
    }

    img {
      width: 100%;
      height: auto;
    }


    //  custom selectors for cryptowao
    .grid-stats-1-1 {
      display: grid;
      grid-template-columns: 156px 40px;
      place-content: center;
      position: relative;
    }

    .slider-frame {
      max-width: 300px;
      margin: 100px auto 0 auto;

    }

    .slider-control-centerright {
      right: 25px !important;

      button {
        color: transparent !important;
        background: url(${backButton}) no-repeat center !important;
        transform: rotate(-180deg);
      }
    }

    .slider-control-centerleft {
      left: 25px !important;

      button {
        color: transparent !important;
        background: url(${backButton}) no-repeat center !important;
      }
    }

    .slider-control-bottomcenter {
      display: none !important;
    }

    .flex-column-desktop {
      @media (min-width: 910px) {
        flex-direction: column;
        padding-left: 50px;
      }
    }
  `;
  return (
    <MainWrapperStyles>
      <GlobalStyle />
      {children}
    </MainWrapperStyles>
  );
};
