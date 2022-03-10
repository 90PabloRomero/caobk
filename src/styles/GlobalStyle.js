import { createGlobalStyle } from "styled-components";
import mobileBG from "../assets/assets_game_cryptowao-01 2.png";
import PassionOneFont from "../assets/PassionOne-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
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
    background: url("${mobileBG}") no-repeat center;
    font-family: "Passion One", serif;
    background-size: cover;
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


`;
