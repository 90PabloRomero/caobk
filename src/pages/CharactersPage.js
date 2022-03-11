import styled from "styled-components";
//
import { MainWrapperBelowArea } from "../styles/MainWrapperBelowArea";
import {
  MainWrapperTopRightCornerAreaDesktop,
  MainWrapperTopRightCornerAreaMobile,
} from "../styles/MainWrapperTopRightCornerArea";
import { HomeButton } from "../styles/HomeButton";
import { MarketplaceButton } from "../styles/MarketplaceButton";
import { MainWrapper } from "../styles/MainWrapper";
import {
  MainWrapperCloseButtonDesktop,
  MainWrapperCloseButtonMobile,
} from "../styles/MainWrapperCloseButtonMobile";
import { FoodIcon } from "../styles/FoodIcon";
import { CoinIcon } from "../styles/CoinIcon";
//
import s1bar from "./../assets/s1.png";
import s2bar from "./../assets/s2.png";
import s3bar from "./../assets/s3.png";
import s4bar from "./../assets/s4.png";
import s5bar from "./../assets/s5.png";
import barForList from "./../assets/barList.png";
import listbutton1 from "./../assets/listbutton1.png";
import listbutton2 from "./../assets/listbutton2.png";
import listbutton3 from "./../assets/listbutton3.png";
import subFrameDFlex from "./../assets/subFrameDFlex.png";
import { useState } from "react";
import listbuttonD1 from "./../assets/listbuttonD1.png";
import listbuttonD2 from "./../assets/listbuttonD2.png";
import listbuttonD3 from "./../assets/listbuttonD3.png";
import characterStatsD from "./../assets/characterStatsD.png";

const BarFillerTop = styled.div`
  position: absolute;
  background: linear-gradient(0deg, #006ead 0%, #08a4ff 100%);
  left: 10px;
  height: 16px;
  top: 11px;
`;
const BarFillerOnListMobile = styled.div`
  position: absolute;
  background: linear-gradient(0deg, #006ead 0%, #08a4ff 100%);
  left: 3px;
  height: 9px;
  top: 16px;
  max-width: 46px;
  @media (min-width: 910px) {
    display: none;
  }
`;
const BarFillerOnListDesktop = styled.div`
  position: absolute;
  background: linear-gradient(0deg, #006ead 0%, #08a4ff 100%);
  left: 6px;
  height: 18px;
  top: 23px;
  max-width: 96px;
  display: none;
  @media (min-width: 910px) {
    display: block;
  }
`;
const ListWorkButton = styled.div`
  background: url(${listbutton1}) no-repeat center;
  width: 26px;
  height: 25px;
  font-size: 9px;
  color: #467285;
  padding-left: 5px;
  padding-top: 5px;
  cursor: pointer;
  @media (min-width: 910px) {
    background: url(${listbuttonD1}) no-repeat center;
    width: 50px;
    height: 50px;
    font-size: 18px;
    padding-left: 10px;
    padding-top: 20px;
  }
`;
const ListBreakButton = styled.div`
  background: url(${listbutton2}) no-repeat center;
  width: 26px;
  height: 25px;
  font-size: 9px;
  color: #467285;
  padding-left: 5px;
  padding-top: 5px;
  cursor: pointer;
  @media (min-width: 910px) {
    background: url(${listbuttonD2}) no-repeat center;
    width: 50px;
    height: 50px;

    font-size: 18px;
    padding-left: 10px;
    padding-top: 20px;
  }
`;
const ListHomeButton = styled.div`
  background: url(${listbutton3}) no-repeat center;
  width: 26px;
  height: 25px;
  font-size: 9px;
  color: #467285;
  padding-left: 5px;
  padding-top: 5px;
  cursor: pointer;
  @media (min-width: 910px) {
    background: url(${listbuttonD3}) no-repeat center;
    width: 50px;
    height: 50px;

    font-size: 18px;
    padding-left: 10px;
    padding-top: 20px;
  }
`;
const CharactersPageWrapper = styled.div`
  position: relative;
  width: 260px;
  margin: 35px auto 0 16px;

  > div:nth-child(2) {
    > div:nth-child(1) {
      max-height: 178px;
      margin-left: 6px;
    }
  }

  h1 {
    display: none;
  }

  @media (min-width: 910px) {
    max-width: 826px;
    width: 100%;
    min-width: 885px;
    min-height: 526px;
    margin-top: 140px;
    display: flex;
    h1 {
      display: block;
      font-weight: 400;
      text-align: center;
      font-size: 30px;
      margin-top: 25px;
    }

    > div:nth-child(1) {
      width: 37.5%;
      margin-left: 10px;
      margin-right: 20px;
      background: url(${characterStatsD}) no-repeat center 32%;
      order: 2;
      padding-top: 60px;
    }

    > div:nth-child(2) {
      width: 65.5%;
      background: url(${subFrameDFlex}) no-repeat center 20%;

      > div:nth-child(2) {
        max-width: 490px;
        max-height: 320px !important;
        margin: 35px 0 0 25px;
      }
    }
  }
`;
const ListItem = styled.div`
  background: #83b0ee;
  width: 225px;
  height: 35px;
  padding: 3px;
  border-radius: 9px;
  margin-bottom: 5px;
  align-items: center;
  cursor: pointer;
  @media (min-width: 910px) {
    width: 450px;
    height: 70px;
  }
`;
const ListItemImage = styled.div`
  display: block;
  width: 21px;
  height: 29px;
  border: 1px solid #d7f1ff;
  border-radius: 7px;
  @media (min-width: 910px) {
    width: 49px;
    height: 63px;
    background-size: 49px 63px !important;
  }
`;
const ListItemStats = styled.div`
  font-size: 10px;
  display: flex;
  flex-direction: column;
  margin-left: 6px;

  > div:nth-child(3) {
    min-width: 50px;
  }

  @media (min-width: 910px) {
    font-size: 20px;
    width: 110px;
  }
`;
const ListItemEnergyBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  img {
    max-height: 13px;
    margin-top: 5px;
    min-height: 13px;
  }

  > div:nth-child(1) {
    font-size: 9px;
    text-align: center;
    line-height: 9px;
  }

  @media (min-width: 910px) {
    margin-left: 10px;
    img {
      max-height: 26px;
      margin-top: 10px;
      min-height: 26px;
      max-width: 121px;
    }

    > div:nth-child(1) {
      font-size: 20px;
    }
  }
`;
const ShowOnlyOnMobileLevelAndRarityDiv = styled.div`
  text-align: start;
  font-size: 24px;
  margin-left: 6px;
  margin-top: 10px;
  @media (min-width: 910px) {
    position: absolute;
    right: 60px;
  }
`;

const RightSideStats = styled.div`
  transform: scale(0.6);
  max-width: 130px;
  max-height: 60px;
  margin-left: 8px;
  @media (min-width: 910px) {
    transform: scale(1);
    margin-top: 15px;
    margin-left: 45px;
  }
`;
const CharactersPage = ({ Nfts }) => {
  const [topAreaFlexCurrentNft, setTopAreaFlexCurrentNft] = useState(0);

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
        <CharactersPageWrapper>
          <div>
            {/*view dog picture and stats inside flex*/}
            {Nfts.map((nft, i) => (
              <div
                key={i}
                className={`flex-column-desktop`}
                style={{
                  display: i === topAreaFlexCurrentNft ? "flex" : "none",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "111px",
                  }}
                >
                  <img
                    src={nft.imageUrl}
                    alt={nft.id}
                    style={{
                      minWidth: "111px",
                      height: "143px",
                      borderRadius: "1rem",
                    }}
                  />
                  <ShowOnlyOnMobileLevelAndRarityDiv>
                    <div>LV1</div>
                    <div>S29384782</div>
                    <div style={{ whiteSpace: "nowrap" }}>{nft.rarity}</div>
                  </ShowOnlyOnMobileLevelAndRarityDiv>
                </div>
                <RightSideStats>
                  <div
                    className={"grid-stats-1-1"}
                    style={{ marginTop: "-8px" }}
                  >
                    <BarFillerTop style={{ width: nft.s1 + 8 }} />
                    <img
                      draggable={false}
                      src={s1bar}
                      alt={"fuerza"}
                      style={{ maxWidth: "156px", maxHeight: "39px" }}
                    />
                    <div style={{ marginTop: "4px", marginLeft: "10px" }}>
                      {nft.s1}
                    </div>
                  </div>
                  <div
                    className={"grid-stats-1-1"}
                    style={{ marginTop: "5px" }}
                  >
                    <BarFillerTop style={{ width: nft.s2 + 8 }} />

                    <img
                      draggable={false}
                      src={s2bar}
                      alt={"fuerza"}
                      style={{ maxWidth: "156px", maxHeight: "39px" }}
                    />
                    <div style={{ marginTop: "4px", marginLeft: "10px" }}>
                      {nft.s2}
                    </div>
                  </div>
                  <div
                    className={"grid-stats-1-1"}
                    style={{ marginTop: "5px" }}
                  >
                    <BarFillerTop style={{ width: nft.s3 + 8 }} />

                    <img
                      draggable={false}
                      src={s3bar}
                      alt={"fuerza"}
                      style={{ maxWidth: "156px", maxHeight: "39px" }}
                    />
                    <div style={{ marginTop: "4px", marginLeft: "10px" }}>
                      {nft.s3}
                    </div>
                  </div>
                  <div
                    className={"grid-stats-1-1"}
                    style={{ marginTop: "5px" }}
                  >
                    <BarFillerTop style={{ width: nft.s4 + 8 }} />

                    <img
                      draggable={false}
                      src={s4bar}
                      alt={"fuerza"}
                      style={{ maxWidth: "156px", maxHeight: "39px" }}
                    />
                    <div style={{ marginTop: "4px", marginLeft: "10px" }}>
                      {nft.s4}
                    </div>
                  </div>
                  <div
                    className={"grid-stats-1-1"}
                    style={{ marginTop: "5px" }}
                  >
                    <BarFillerTop style={{ width: nft.s5 + 8 }} />

                    <img
                      draggable={false}
                      src={s5bar}
                      alt={"fuerza"}
                      style={{ maxWidth: "156px", maxHeight: "39px" }}
                    />
                    <div style={{ marginTop: "4px", marginLeft: "10px" }}>
                      {nft.s5}
                    </div>
                  </div>
                </RightSideStats>
              </div>
            ))}
          </div>
          <div>
            <h1>PERSONAJES</h1>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                maxHeight: "180px",
                overflowY: "scroll",
              }}
            >
              {Nfts.map((nft, i) => (
                <ListItem
                  key={i}
                  onClick={() => setTopAreaFlexCurrentNft(i)}
                  style={{
                    display: i === topAreaFlexCurrentNft ? "none" : "flex",
                  }}
                >
                  <ListItemImage
                    style={{
                      background: "url(" + nft.imageUrl + ") no-repeat center",
                      backgroundSize: "21px 29px",
                    }}
                  >
                    {` `}
                  </ListItemImage>
                  <ListItemStats>
                    <div>LV1</div>
                    <div>S29384782</div>
                    <div>{nft.rarity}</div>
                  </ListItemStats>
                  <ListItemEnergyBar>
                    <div>({nft.energyleft}/550)</div>
                    <BarFillerOnListMobile
                      style={{ width: nft.energyleft / 10 }}
                    />
                    <BarFillerOnListDesktop
                      style={{ width: nft.energyleft / 5 }}
                    />
                    <img src={barForList} alt={""} />
                  </ListItemEnergyBar>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "top",
                      marginLeft: "6px",
                      marginTop: "10px",
                    }}
                  >
                    <ListWorkButton>WORK</ListWorkButton>
                    <ListBreakButton>BREAK</ListBreakButton>
                    <ListHomeButton>HOME</ListHomeButton>
                  </div>
                </ListItem>
              ))}
              <MainWrapperTopRightCornerAreaDesktop style={{ marginTop: -50 }}>
                <div style={{ display: "flex" }}>
                  <div>174</div>
                  <CoinIcon />
                </div>
                <FoodIcon />
              </MainWrapperTopRightCornerAreaDesktop>
              <MainWrapperCloseButtonDesktop
                style={{ left: "0", top: "20px", marginTop: 0 }}
              />
            </div>
          </div>
        </CharactersPageWrapper>
        <MainWrapperBelowArea>
          <HomeButton />
          <MarketplaceButton />
        </MainWrapperBelowArea>
      </MainWrapper>
    </>
  );
};

export default CharactersPage;
