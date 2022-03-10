import { MainWrapper } from "../styles/MainWrapper";
import CAOEmbryo from "../assets/180º_FuegoTransparente.mp4";
import styled from "styled-components";
import { MainWrapperBelowArea } from "../styles/MainWrapperBelowArea";
import { HomeButton } from "../styles/HomeButton";
import { MarketplaceButton } from "../styles/MarketplaceButton";
import coinButton from "./../assets/CoinButton.png";
import multiplierButton from "./../assets/MultiplierButton.png";
import { MainWrapperCloseButton } from "../styles/MainWrapperCloseButton";
import { MainWrapperTopRightCornerArea } from "../styles/MainWrapperTopRightCornerArea";
import { CoinIcon } from "../styles/CoinIcon";
import { FoodIcon } from "../styles/FoodIcon";

const CapsulaEmbrioPage = () => {
  return (
    <>
      <MainWrapper>
        <MainWrapperTopRightCornerArea>
          <div style={{ display: "flex" }}>
            <div>174</div>
            <CoinIcon />
          </div>
          <FoodIcon />
        </MainWrapperTopRightCornerArea>
        <MainWrapperCloseButton />
        <div>
          <div style={{ textAlign: "Center", marginTop: "40%" }}>
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
        </div>
        <MainWrapperBelowArea>
          <HomeButton>{` `}</HomeButton>
          <MarketplaceButton>{` `}</MarketplaceButton>
        </MainWrapperBelowArea>
      </MainWrapper>
    </>
  );
};
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
