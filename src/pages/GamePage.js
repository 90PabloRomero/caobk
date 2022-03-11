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
        <MainWrapperBackButton />
        <MainWrapperSettingsButton />
        <GameFrame>
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
          <MainWrapperTopRightCornerAreaDesktop style={{ marginTop: -60 }}>
            <div style={{ display: "flex" }}>
              <div>174</div>
              <CoinIcon />
            </div>
            <FoodIcon />
          </MainWrapperTopRightCornerAreaDesktop>
        </GameFrame>
        <MainWrapperBelowArea>
          <HomeButton />
          <MarketplaceButton />
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
    min-width: 888px;
    max-width: 888px;
    max-height: none;
    height: 457px;
    margin-top: 85px;
  }
`;
const SlideInGameFrame = styled.div`
  position: absolute;
  left: 0;
  bottom: -10px;
  right: 0;
  text-align: center;
`;

export default GamePage;
