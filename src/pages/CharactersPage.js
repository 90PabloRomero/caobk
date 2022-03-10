import styled from "styled-components";
//
import { MainWrapperBelowArea } from "../styles/MainWrapperBelowArea";
import { MainWrapperTopRightCornerArea } from "../styles/MainWrapperTopRightCornerArea";
import { HomeButton } from "../styles/HomeButton";
import { MarketplaceButton } from "../styles/MarketplaceButton";
import { MainWrapper } from "../styles/MainWrapper";
import { MainWrapperCloseButton } from "../styles/MainWrapperCloseButton";
import { FoodIcon } from "../styles/FoodIcon";
import { CoinIcon } from "../styles/CoinIcon";
//
import s1bar from "./../assets/s1.png";
import s2bar from "./../assets/s2.png";
import s3bar from "./../assets/s3.png";
import s4bar from "./../assets/s4.png";
import s5bar from "./../assets/s5.png";
import barForList from "./../assets/barList.png";
import { useState } from "react";

const BarFillerTop = styled.div`
  position: absolute;
  background: linear-gradient(0deg, #006ead 0%, #08a4ff 100%);
  left: 10px;
  height: 16px;
  top: 11px;
`;
const BarFillerOnList = styled.div`
  position: absolute;
  background: linear-gradient(0deg, #006ead 0%, #08a4ff 100%);
  left: 10px;
  height: 7px;
  top: 11px;
`;
const CharactersPage = ({ Nfts }) => {
  const [topAreaFlexCurrentNft, setTopAreaFlexCurrentNft] = useState(0);

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
        <div
          style={{
            width: "260px",
            margin: "35px auto 0 16px",
          }}
        >
          {/*view dog picture and stats inside flex*/}
          {Nfts.map((nft, i) => (
            <div
              key={i}
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
                  draggable={false}
                  src={nft.imageUrl}
                  alt={nft.id}
                  style={{
                    minWidth: "111px",
                    height: "143px",
                    borderRadius: "1rem",
                  }}
                />
                <div
                  style={{
                    textAlign: "start",
                    fontSize: "24px",
                    marginLeft: "6px",
                    marginTop: "10px",
                  }}
                >
                  <div>LV1</div>
                  <div>S29384782</div>
                  <div style={{ whiteSpace: "nowrap" }}>{nft.rarity}</div>
                </div>
              </div>
              <div
                style={{
                  transform: "scale(0.6)",
                  maxWidth: "130px",
                  maxHeight: "60px",
                  marginLeft: "8px",
                }}
              >
                <div className={"grid-stats-1-1"} style={{ marginTop: "-8px" }}>
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
                <div className={"grid-stats-1-1"} style={{ marginTop: "5px" }}>
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
                <div className={"grid-stats-1-1"} style={{ marginTop: "5px" }}>
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
                <div className={"grid-stats-1-1"} style={{ marginTop: "5px" }}>
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
                <div className={"grid-stats-1-1"} style={{ marginTop: "5px" }}>
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
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "-90px",
            overflowY: "scroll",
            maxHeight: "178px",
            marginLeft: "20px",
          }}
        >
          {Nfts.map((nft, i) => (
            <div
              key={i}
              onClick={() => setTopAreaFlexCurrentNft(i)}
              style={{
                background: "#83B0EE",
                width: "225px",
                height: "35px",
                display: i === topAreaFlexCurrentNft ? "none" : "flex",
                padding: "3px",
                borderRadius: "9px",
                marginBottom: "5px",
                alignItems: "center",

                cursor: "pointer",
              }}
            >
              <div
                style={{
                  display: "block",
                  width: "21px",
                  height: "29px",
                  background: "url(" + nft.imageUrl + ") no-repeat center",
                  border: "1px solid #D7F1FF",
                  borderRadius: "7px",
                  backgroundSize: "21px 29px",
                }}
              >
                {` `}
              </div>
              <div
                style={{
                  fontSize: "10px",
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "6px",
                }}
              >
                <div>LV1</div>
                <div>S29384782</div>
                <div style={{ minWidth: "50px" }}>{nft.rarity}</div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "9px",
                    textAlign: "center",
                    lineHeight: "9px",
                  }}
                >
                  ({nft.energyleft}/500)
                </div>
                <img src={barForList} alt={""} style={{ maxHeight: "13px" }} />
              </div>
            </div>
          ))}
        </div>
        <MainWrapperBelowArea>
          <HomeButton>{` `}</HomeButton>
          <MarketplaceButton>{` `}</MarketplaceButton>
        </MainWrapperBelowArea>
      </MainWrapper>
    </>
  );
};

export default CharactersPage;
