import { MainWrapperBelowArea } from "../styles/MainWrapperBelowArea";
import { MainWrapperTopRightCornerArea } from "../styles/MainWrapperTopRightCornerArea";
import { HomeButton } from "../styles/HomeButton";
import { MarketplaceButton } from "../styles/MarketplaceButton";
import { MainWrapper } from "../styles/MainWrapper";
import { Nfts } from "../mockups/nfts";
//
import s1bar from "./../assets/s1.png";
import s2bar from "./../assets/s2.png";
import s3bar from "./../assets/s3.png";
import s4bar from "./../assets/s4.png";
import s5bar from "./../assets/s5.png";
import carouselRight from "./../assets/carouselRight.png";
import Carousel from "framer-motion-carousel";
import styled from "styled-components";
import { MainWrapperCloseButton } from "../styles/MainWrapperCloseButton";
import { FoodIcon } from "../styles/FoodIcon";
import { CoinIcon } from "../styles/CoinIcon";
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
`;
const InventoryPage = () => {
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
              <>
                <div key={i} style={{ textAlign: "center" }}>
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
              </>
            ))}
            {/*  */}
          </Carousel>
        </div>

        <MainWrapperBelowArea>
          <HomeButton>{` `}</HomeButton>
          <MarketplaceButton>{` `}</MarketplaceButton>
        </MainWrapperBelowArea>
      </MainWrapper>
    </>
  );
};

export default InventoryPage;
