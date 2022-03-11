import { MainWrapperBelowArea } from "../styles/MainWrapperBelowArea";
import { HomeButton } from "../styles/HomeButton";
import { MarketplaceButton } from "../styles/MarketplaceButton";
import { MainWrapper } from "../styles/MainWrapper";
import { Nfts } from "../mockups/nfts";
import frame from "./../assets/Frame.png";
//
import s1bar from "./../assets/s1.png";
import s2bar from "./../assets/s2.png";
import s3bar from "./../assets/s3.png";
import s4bar from "./../assets/s4.png";
import s5bar from "./../assets/s5.png";
import carouselRight from "./../assets/carouselRight.png";
import inventoryFrameD from "./../assets/inventoryFrameD.png";
import inventoryStatsD from "./../assets/InventoryStatsD.png";
import Carousel from "framer-motion-carousel";
import Carousel2 from "nuka-carousel";
import styled from "styled-components";
import {
  MainWrapperCloseButtonDesktop,
  MainWrapperCloseButtonMobile,
} from "../styles/MainWrapperCloseButtonMobile";
import { FoodIcon } from "../styles/FoodIcon";
import { CoinIcon } from "../styles/CoinIcon";
import {
  MainWrapperTopRightCornerAreaDesktop,
  MainWrapperTopRightCornerAreaMobile,
} from "../styles/MainWrapperTopRightCornerArea";
import { useState } from "react";
import { Helmet } from "react-helmet";
//
const CarouselRightButton = styled.div`
  background: url(${carouselRight}) no-repeat center;
  width: 27px;
  height: 28px;
  position: absolute;
  top: 20%;
  right: 15px;
  cursor: pointer;
`;
const CarouselLeftButton = styled.div`
  background: url(${carouselRight}) no-repeat center;
  width: 27px;
  height: 28px;
  position: absolute;
  top: 20%;
  left: 15px;
  transform: rotate(180deg);
`;

const BarFiller = styled.div`
  position: absolute;
  background: linear-gradient(0deg, #006ead 0%, #08a4ff 100%);
  left: 76px;
  height: 16px;
  top: 11px;
  @media (min-width: 910px) {
    left: 90px;
  }
`;
const InventoryPageWrapperMobile = styled.div`
  width: 260px;
  margin: 35px auto 0 auto;
  @media (min-width: 910px) {
    display: none; // definitivamente no va a funcionar este carousel sin un refactor, mejor busco otro
  }
`;

const InventoryPageWrapperDesktop = styled.div`
  display: none;
  @media (min-width: 910px) {
    max-width: 826px;
    width: 100%;
    min-height: 526px;
    min-width: 885px;
    margin-top: 43px;
    display: flex;
    position: relative;
  }
`;
const TwoBoxFlexContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 62px 50px 55px 25px;
  position: relative;

  > div:nth-child(1) {
    width: 65.5%;
    background: url(${inventoryFrameD}) no-repeat center;
  }

  > div:nth-child(2) {
    width: 37.5%;
    background: url(${inventoryStatsD}) no-repeat center 83%;
    margin-left: 10px;
  }
`;
const InventoryPage = () => {
  const [isSelectedNft, setSelectedNft] = useState(0);
  return (
    <>
      <Helmet>
        <title>Inventario</title>
      </Helmet>
      <MainWrapper>
        <MainWrapperTopRightCornerAreaMobile>
          <div style={{ display: "flex" }}>
            <div>174</div>
            <CoinIcon />
          </div>
          <FoodIcon />
        </MainWrapperTopRightCornerAreaMobile>
        <MainWrapperCloseButtonMobile />
        <InventoryPageWrapperDesktop>
          <div style={{ marginLeft: "auto" }}>
            <MainWrapperTopRightCornerAreaDesktop>
              <div style={{ display: "flex" }}>
                <div>174</div>
                <CoinIcon />
              </div>
              <FoodIcon />
            </MainWrapperTopRightCornerAreaDesktop>
          </div>
          {/*  */}
          <TwoBoxFlexContainer>
            <div>
              <MainWrapperCloseButtonDesktop />
              <Carousel2
                slidesToShow={2}
                wrapAround={true}
                speed={150}
                slideIndex={isSelectedNft}
              >
                {Nfts.map((nft, i) => (
                  <div
                    onClick={() => setSelectedNft(i)}
                    key={i}
                    style={{
                      maxWidth: "141px",
                      cursor: "pointer",
                      background: "url(" + frame + ") no-repeat center",
                      backgroundSize: "144px 231px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        fontSize: "10px",
                        top: "10px",
                        left: 0,
                        right: 0,
                        textAlign: "center",
                      }}
                    >
                      {nft.name}
                    </div>
                    <img
                      src={nft.imageUrl}
                      alt={nft.id}
                      style={{
                        width: "141px",
                        height: "223px",
                        marginTop: "30px",
                        maxHeight: "203px",
                        filter:
                          i === isSelectedNft
                            ? "brightness(140%)"
                            : "brightness(100%)",
                      }}
                    />
                  </div>
                ))}
              </Carousel2>
            </div>
            <div>
              {Nfts.map((nft, i) => (
                <div
                  key={i}
                  style={{
                    display: i === isSelectedNft ? "block" : "none",
                    margin: "60px auto auto auto",
                  }}
                >
                  <h1
                    style={{
                      fontSize: "32px",
                      textAlign: "center",
                      fontWeight: "400",
                    }}
                  >
                    {nft.name}
                  </h1>
                  <div
                    className={"grid-stats-1-1"}
                    style={{ marginTop: "-8px" }}
                  >
                    <BarFiller style={{ width: nft.s1 + 8 }} />
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
                    <BarFiller style={{ width: nft.s2 + 8 }} />

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
                    <BarFiller style={{ width: nft.s3 + 8 }} />

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
                    <BarFiller style={{ width: nft.s4 + 8 }} />

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
                    <BarFiller style={{ width: nft.s5 + 8 }} />

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
              ))}
            </div>
          </TwoBoxFlexContainer>
        </InventoryPageWrapperDesktop>
        <InventoryPageWrapperMobile>
          <Carousel
            interval={0}
            loop={true}
            autoPlay={false}
            renderDots={() => <div />}
            renderArrowRight={({ handleNext }) => (
              <CarouselRightButton onClick={handleNext} />
            )}
            renderArrowLeft={({ handlePrev }) => (
              <CarouselLeftButton onClick={handlePrev} />
            )}
          >
            {Nfts.map((nft, i) => (
              <div key={i}>
                <div style={{ textAlign: "center" }}>
                  <img
                    draggable={false}
                    src={nft.imageUrl}
                    alt={nft.id}
                    style={{ width: "141px", height: "223px" }}
                  />
                </div>
                <div className={"grid-stats-1-1"} style={{ marginTop: "-8px" }}>
                  <BarFiller style={{ width: nft.s1 + 8 }} />
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
                  <BarFiller style={{ width: nft.s2 + 8 }} />

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
                  <BarFiller style={{ width: nft.s3 + 8 }} />

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
                  <BarFiller style={{ width: nft.s4 + 8 }} />

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
                  <BarFiller style={{ width: nft.s5 + 8 }} />

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
            ))}
            {/*  */}
          </Carousel>
        </InventoryPageWrapperMobile>

        <MainWrapperBelowArea>
          <HomeButton />
          <MarketplaceButton />
        </MainWrapperBelowArea>
      </MainWrapper>
    </>
  );
};

export default InventoryPage;
