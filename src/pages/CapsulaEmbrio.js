import { MainWrapper } from "../styles/MainWrapper";
import CAOEmbryo from "../assets/180º_FuegoTransparente.mp4";
import styled from "styled-components";
import { MainWrapperBelowArea } from "../styles/MainWrapperBelowArea";
import { HomeButton } from "../styles/HomeButton";
import { MarketplaceButton } from "../styles/MarketplaceButton";
import coinButton from "./../assets/CoinButton.png";
import multiplierButton from "./../assets/MultiplierButton.png";
import {
  MainWrapperCloseButtonDesktop,
  MainWrapperCloseButtonMobile,
} from "../styles/MainWrapperCloseButtonMobile";
import { CoinIcon } from "../styles/CoinIcon";
import { FoodIcon } from "../styles/FoodIcon";
import {
  MainWrapperTopRightCornerAreaDesktop,
  MainWrapperTopRightCornerAreaMobile,
} from "../styles/MainWrapperTopRightCornerArea";
import capsulaembrioD from "./../assets/capsulaembrioD.png";
import { Link } from "react-router-dom";

const CapsulaEmbrioPage = () => {
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
        <MainWrapperCloseButtonMobile />
        <CapsulaEmbrioPageWrapper>
          <div style={{ textAlign: "center" }}>
            <video
              src={CAOEmbryo}
              style={{ maxWidth: "235px" }}
              autoPlay
              muted
              loop={true}
            />
          </div>
          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <CoinsButton />
            <MultiplierButton />
          </div>

          <MainWrapperTopRightCornerAreaDesktop style={{ marginTop: 0 }}>
            <div style={{ display: "flex" }}>
              <div>174</div>
              <CoinIcon />
            </div>
            <FoodIcon />
          </MainWrapperTopRightCornerAreaDesktop>
          <MainWrapperCloseButtonDesktop
            style={{ left: "10px", top: "55px", marginTop: 0 }}
          />
        </CapsulaEmbrioPageWrapper>
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
const CapsulaEmbrioPageWrapper = styled.div`
  position: relative;
  width: 260px;
  margin-top: 40%;
  @media (min-width: 910px) {
    background: url(${capsulaembrioD}) no-repeat center;
    max-width: 826px;
    width: 100%;
    min-width: 885px;
    min-height: 526px;
    margin-top: 20px;
    > div {
      margin-top: 140px;
    }
  }
`;
const CoinsButton = styled.button`
  background: url(${coinButton}) no-repeat;
  border: 0;
  width: 93px;
  height: 30px;
  transition: filter 0.252s;
  cursor: pointer;

  &:hover {
    filter: brightness(125%);
  }
`;
const MultiplierButton = styled.button`
  background: url(${multiplierButton}) no-repeat;
  border: 0;
  width: 93px;
  height: 30px;
  transition: filter 0.252s;
  cursor: pointer;
  margin-left: 15px;

  &:hover {
    filter: brightness(125%);
  }
`;

export default CapsulaEmbrioPage;
