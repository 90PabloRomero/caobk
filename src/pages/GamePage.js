import { MainWrapper } from "../styles/MainWrapper";
import { MainWrapperBelowArea } from "../styles/MainWrapperBelowArea";
import { HomeButton } from "../styles/HomeButton";
import { MarketplaceButton } from "../styles/MarketplaceButton";
import { CoinIcon } from "../styles/CoinIcon";
import { FoodIcon } from "../styles/FoodIcon";
import {
  MainWrapperTopRightCornerAreaDesktop,
  MainWrapperTopRightCornerAreaMobile,
} from "../styles/MainWrapperTopRightCornerArea";
import { MainWrapperBackButton } from "../styles/MainWrapperBackButton";
import { MainWrapperSettingsButton } from "../styles/MainWrapperSettingsButton";
import slideingameframe from "./../assets/slideingameframe.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const GamePage = () => {
  return (
    <>
      <MainWrapper>
        <MainWrapperTopRightCornerAreaMobile>
          <div style={{ display: "flex" }}>
            <div>174</div>
            <CoinIcon />
          </div>
          <FoodIcon />
        </MainWrapperTopRightCornerAreaMobile>
        <GameFrame>
          <Link to={"/options"}>
            <MainWrapperBackButton />
          </Link>
          <Link to={"/options"}>
            <MainWrapperSettingsButton />{" "}
          </Link>

          <iframe
            title={"WAOGame"}
            src={"http://52.15.191.202:4200/waogame/"}
            style={{ width: "100%", height: "100%" }}
          />
          <SlideInGameFrame>
            <img
              src={slideingameframe}
              alt={"slide menu"}
              style={{ maxWidth: "82px", maxHeight: "26px" }}
            />
          </SlideInGameFrame>
          <MainWrapperTopRightCornerAreaDesktop style={{ marginTop: -50 }}>
            <div style={{ display: "flex" }}>
              <div>174</div>
              <CoinIcon />
            </div>
            <FoodIcon />
          </MainWrapperTopRightCornerAreaDesktop>
        </GameFrame>
        <MainWrapperBelowArea>
          <Link to={"/"}>
            <HomeButton />
          </Link>
          <Link to={"/presale"}>
            <MarketplaceButton />
          </Link>
        </MainWrapperBelowArea>
      </MainWrapper>
    </>
  );
};

const GameFrame = styled.div`
  min-width: 284px;
  min-height: 444px;
  max-width: 284px;
  max-height: 444px;
  margin-top: 40px;
  position: relative;
  @media (min-width: 910px) {
    min-width: 880px;
    max-width: 880px;
    max-height: none;
    height: 477px;
    margin-left: -6px;
    margin-top: 85px;
  }
`;
const SlideInGameFrame = styled.div`
  position: absolute;
  left: 0;
  bottom: -13px;
  right: 0;
  text-align: center;
  z-index: 2;
  cursor: pointer;
`;

export default GamePage;
