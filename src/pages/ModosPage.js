import { MainWrapperBelowArea } from "../styles/MainWrapperBelowArea";
import { MainWrapperTopRightCornerArea } from "../styles/MainWrapperTopRightCornerArea";
import { HomeButton } from "../styles/HomeButton";
import { MarketplaceButton } from "../styles/MarketplaceButton";
import { MainWrapper } from "../styles/MainWrapper";
//
import { MainWrapperCloseButton } from "../styles/MainWrapperCloseButton";
import { CoinIcon } from "../styles/CoinIcon";
import { FoodIcon } from "../styles/FoodIcon";
import inventarioIcon from "./../assets/inventarioIcon.png";
import shopIcon from "./../assets/shopIcon.png";
import houseIcon from "./../assets/houseIcon.png";
import dogIcon from "./../assets/dogIcon.png";
import modoAventura from "./../assets/modoAventuraLock.png";
import modoSupervivencia from "./../assets/modoSupervivencia.png";
import modoApuesta from "./../assets/modoApuestaLock.png";
import styled from "styled-components";
import Carousel from "framer-motion-carousel";

const GridOptionsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-size: 18px;
  gap: 20px;
`;

const ModosPage = () => {
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
          <div>
            <Carousel
              interval={0}
              loop={true}
              autoPlay={false}
              renderDots={() => <div />}
              renderArrowRight={({ handleNext }) => <div />}
              renderArrowLeft={({ handlePrev }) => <div />}
            >
              <div style={{ maxWidth: "136px" }}>
                <img
                  draggable={false}
                  src={modoAventura}
                  alt={"supervivencia"}
                />
              </div>
              <div style={{ maxWidth: "161px" }}>
                <img
                  draggable={false}
                  src={modoSupervivencia}
                  alt={"supervivencia"}
                />
              </div>
              <div style={{ maxWidth: "136px" }}>
                <img
                  draggable={false}
                  src={modoApuesta}
                  alt={"supervivencia"}
                />
              </div>
            </Carousel>
          </div>
          <GridOptionsDiv>
            <div style={{ textAlign: "center" }}>
              <img
                src={inventarioIcon}
                alt={"inventario"}
                style={{ width: "51px", height: "51px" }}
              />
              <div>INVENTARIO</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <img
                src={shopIcon}
                alt={"shop"}
                style={{ width: "76px", height: "55px" }}
              />
              <div>SHOP</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <img
                src={houseIcon}
                alt={"HOUSE"}
                style={{ width: "84px", height: "56px" }}
              />
              <div>HOUSE</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <img
                src={dogIcon}
                alt={"PERROS"}
                style={{ width: "54px", height: "53px" }}
              />
              <div>PERROS</div>
            </div>
          </GridOptionsDiv>
        </div>

        <MainWrapperBelowArea>
          <HomeButton>{` `}</HomeButton>
          <MarketplaceButton>{` `}</MarketplaceButton>
        </MainWrapperBelowArea>
      </MainWrapper>
    </>
  );
};

export default ModosPage;
