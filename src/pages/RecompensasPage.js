import { MainWrapperBelowArea } from "../styles/MainWrapperBelowArea";
import { MainWrapperTopRightCornerArea } from "../styles/MainWrapperTopRightCornerArea";
import { HomeButton } from "../styles/HomeButton";
import { MarketplaceButton } from "../styles/MarketplaceButton";
import { MainWrapper } from "../styles/MainWrapper";
//
import { MainWrapperCloseButton } from "../styles/MainWrapperCloseButton";
import { CoinIcon } from "../styles/CoinIcon";
import { FoodIcon } from "../styles/FoodIcon";
import WCoin from "./../assets/WCoin.png";
import recogerButton from "./../assets/recogerButton.png";

//
import subFrame from "./../assets/subFrame2.png";
import styled from "styled-components";

const SubFrame = styled.div`
  background: url(${subFrame}) no-repeat center;
  width: 220px;
  height: 297px;
  margin: 0 auto;
  display: grid;
  place-content: center;
  text-align: center;
`;

const ComprarButton = styled.div`
  background: url(${recogerButton}) no-repeat center;
  width: 119px;
  height: 38px;
  transition: filter 0.252s;
  cursor: pointer;

  &:hover {
    filter: brightness(125%);
  }
`;

const RecompensasPage = () => {
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
        <div style={{ width: "260px", margin: "65px auto 0 auto" }}>
          <SubFrame>
            <div>
              <div>WCoin</div>
              <img src={WCoin} alt={"caseta"} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              3.800{" "}
            </div>
          </SubFrame>
          {/**/}
          <div>
            <ComprarButton style={{ margin: "15px auto" }} />
          </div>
          {/**/}
        </div>

        <MainWrapperBelowArea>
          <HomeButton>{` `}</HomeButton>
          <MarketplaceButton>{` `}</MarketplaceButton>
        </MainWrapperBelowArea>
      </MainWrapper>
    </>
  );
};

export default RecompensasPage;
