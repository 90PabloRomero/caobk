import { MainWrapperBelowArea } from "../styles/MainWrapperBelowArea";
import {
  MainWrapperTopRightCornerAreaDesktop,
  MainWrapperTopRightCornerAreaMobile,
} from "../styles/MainWrapperTopRightCornerArea";
import { HomeButton } from "../styles/HomeButton";
import { MarketplaceButton } from "../styles/MarketplaceButton";
import { MainWrapper } from "../styles/MainWrapper";
//
import {
  MainWrapperCloseButtonDesktop,
  MainWrapperCloseButtonMobile,
} from "../styles/MainWrapperCloseButtonMobile";
import { CoinIcon } from "../styles/CoinIcon";
import { FoodIcon } from "../styles/FoodIcon";
import WCoin from "./../assets/WCoin.png";
import recogerButton from "./../assets/recogerButton.png";
import subframeD from "./../assets/subFrameD.png";

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
const RecompensasPageWrapper = styled.div`
  position: relative;
  width: 260px;
  margin: 65px auto 0 auto;
  @media (min-width: 910px) {
    background: url(${subframeD}) no-repeat center;
    max-width: 826px;
    width: 100%;
    min-width: 885px;
    min-height: 526px;
    margin-top: 50px;

    > h1 {
      margin-top: 50px;
    }
  }
`;
const RecompensasPage = () => {
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
        <RecompensasPageWrapper>
          <h1
            style={{
              fontSize: "30px",
              textAlign: "center",
              fontWeight: 400,
            }}
          >
            RECOMPENSAS
          </h1>
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
          <MainWrapperTopRightCornerAreaDesktop style={{ marginTop: -10 }}>
            <div style={{ display: "flex" }}>
              <div>174</div>
              <CoinIcon />
            </div>
            <FoodIcon />
          </MainWrapperTopRightCornerAreaDesktop>
          <MainWrapperCloseButtonDesktop
            style={{ left: "117px", top: "55px", marginTop: 0 }}
          />
        </RecompensasPageWrapper>
        <MainWrapperBelowArea>
          <HomeButton />
          <MarketplaceButton />
        </MainWrapperBelowArea>
      </MainWrapper>
    </>
  );
};

export default RecompensasPage;
