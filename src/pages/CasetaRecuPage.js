import { MainWrapperBelowArea } from "../styles/MainWrapperBelowArea";
import { MainWrapperTopRightCornerArea } from "../styles/MainWrapperTopRightCornerArea";
import { HomeButton } from "../styles/HomeButton";
import { MarketplaceButton } from "../styles/MarketplaceButton";
import { MainWrapper } from "../styles/MainWrapper";
//
import { MainWrapperCloseButton } from "../styles/MainWrapperCloseButton";
import { CoinIcon } from "../styles/CoinIcon";
import { FoodIcon } from "../styles/FoodIcon";
import caseta from "./../assets/caseta.png";
import comprarButton from "./../assets/comprarbutton.png";

//
import subFrame from "./../assets/subFrame.png";
import styled from "styled-components";

const SubFrame = styled.div`
  background: url(${subFrame}) no-repeat center;
  width: 161px;
  height: 251px;
  margin: 0 auto;
  display: grid;
  place-content: center;
  text-align: center;
`;

const ComprarButton = styled.div`
  background: url(${comprarButton}) no-repeat center;
  width: 73px;
  height: 28px;
  transition: filter 0.252s;
  cursor: pointer;

  &:hover {
    filter: brightness(125%);
  }
`;

const GridChartSection = styled.div`
  font-size: 11px;
  white-space: nowrap;

  > div {
    display: grid;
    grid-template-columns: 72px 42px 42px 38px 44px;
    margin-top: 4px;
    padding: 0 1px 0 5px;
  }

  > div:nth-child(n + 2) {
    background: linear-gradient(90deg, #000000 0%, #1068ff 100%);
    background-blend-mode: screen;
    mix-blend-mode: screen;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  > div.active {
    background: linear-gradient(90deg, #0071bc 0%, #3fa9f5 100%);
    background-blend-mode: screen;
    mix-blend-mode: screen;
    border-radius: 10px;
  }
`;
const CasetaRecuPage = () => {
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
        <div style={{ width: "260px", margin: "35px auto 0 auto" }}>
          <SubFrame>
            <div>
              <img src={caseta} alt={"caseta"} />
            </div>
            <div style={{ fontSize: "20px" }}>MAXI CASETA</div>
            <div style={{ fontSize: "18px" }}>Supply 0/200</div>
            <div
              style={{
                fontSize: "18px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              174 WCoin{" "}
              <CoinIcon
                style={{
                  transform: "scale(0.7)",
                  marginTop: "-5px",
                  maxWidth: "30px",
                }}
              />
            </div>
          </SubFrame>
          {/**/}
          <div>
            <ComprarButton style={{ margin: "15px auto" }} />
          </div>
          {/**/}
          <GridChartSection>
            <div>
              <div>TIPO</div>
              <div>TAMAÑO</div>
              <div>CARGA</div>
              <div>ESPACIO</div>
              <div>PRECIO</div>
            </div>
            <div>
              <div>Caseta toy</div>
              <div>6x6</div>
              <div>2/m</div>
              <div>4</div>
              <div>720 WCoin</div>
            </div>
            <div>
              <div>Caseta mini</div>
              <div>6x18</div>
              <div>5/m</div>
              <div>6</div>
              <div>2.400 WCoin</div>
            </div>
            <div>
              <div>Caseta estándar</div>
              <div>6x15</div>
              <div>8/m</div>
              <div>8</div>
              <div>5.400 WCoin</div>
            </div>
            <div>
              <div>Caseta grande</div>
              <div>6x20</div>
              <div>11/m</div>
              <div>10</div>
              <div>9.600 WCoin</div>
            </div>
            <div className={"active"}>
              <div>Maxi Caseta</div>
              <div>6x25</div>
              <div>14/m</div>
              <div>12</div>
              <div>15.000 WCoin</div>
            </div>
            <div>
              <div>Caseta perruna</div>
              <div>6x30</div>
              <div>17/m</div>
              <div>14</div>
              <div>21.600 WCoin</div>
            </div>
          </GridChartSection>
        </div>

        <MainWrapperBelowArea>
          <HomeButton>{` `}</HomeButton>
          <MarketplaceButton>{` `}</MarketplaceButton>
        </MainWrapperBelowArea>
      </MainWrapper>
    </>
  );
};

export default CasetaRecuPage;