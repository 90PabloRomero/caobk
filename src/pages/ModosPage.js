import { MainWrapperBelowArea } from "../styles/MainWrapperBelowArea";
import {
  MainWrapperTopRightCornerAreaDesktop,
  MainWrapperTopRightCornerAreaMobile,
} from "../styles/MainWrapperTopRightCornerArea";
import { HomeButton } from "../styles/HomeButton";
import { MarketplaceButton } from "../styles/MarketplaceButton";
import { MainWrapper } from "../styles/MainWrapper";
//
import { MainWrapperCloseButtonMobile } from "../styles/MainWrapperCloseButtonMobile";
import { CoinIcon } from "../styles/CoinIcon";
import { FoodIcon } from "../styles/FoodIcon";
import inventarioIcon from "./../assets/inventarioIcon.png";
import shopIcon from "./../assets/shopIcon.png";
import houseIcon from "./../assets/houseIcon.png";
import dogIcon from "./../assets/dogIcon.png";
import modoAventura from "./../assets/modoAventuraLock.png";
import modoSupervivencia from "./../assets/modoSupervivencia.png";
import modoApuesta from "./../assets/modoApuestaLock.png";
import apuestaD from "./../assets/apuestaD.png";
import aventuraD from "./../assets/aventuraD.png";
import supervivenciaD from "./../assets/supervivenciaD.png";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const GridOptionsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-size: 18px;
  gap: 20px;
  @media (min-width: 910px) {
    grid-template-columns: repeat(4, 1fr);
    position: absolute;
    right: 30px;
    bottom: 30px;
  }
`;

const ModosPageWrapper = styled.div`
  position: relative;
  width: 260px;

  margin: 35px auto 0 auto;
  @media (min-width: 910px) {
    > div:nth-child(1) {
      display: none;
    }

    max-width: 826px;
    width: 100%;
    min-height: 526px;
    min-width: 885px;
    margin-top: 43px;
  }
`;

const ModosDesktop = styled.div`
  display: none;
  @media (min-width: 910px) {
    display: flex;
  }
`;
const ModosMobile = styled.div`
  display: flex;
  @media (min-width: 910px) {
    display: none;
  }
`;
const ModosPage = () => {
  return (
    <MainWrapper>
      <Helmet>
        <title>Modos de juego</title>
      </Helmet>
      <MainWrapperTopRightCornerAreaMobile>
        <div style={{ display: "flex" }}>
          <div>174</div>
          <CoinIcon />
        </div>
        <FoodIcon />
      </MainWrapperTopRightCornerAreaMobile>
      <MainWrapperCloseButtonMobile />
      <ModosPageWrapper>
        <ModosMobile>
          {/*<Carousel
            interval={0}
            loop={true}
            autoPlay={false}
            renderDots={() => <div />}
            renderArrowRight={({ handleNext }) => <div />}
            renderArrowLeft={({ handlePrev }) => <div />}
          >*/}
          <div style={{ maxWidth: "136px" }}>
            <img draggable={false} src={modoAventura} alt={"supervivencia"} />
          </div>
          <div
            style={{ maxWidth: "181px", width: "181px", marginTop: "-30px" }}
          >
            <Link to={"/game"}>
              <img
                draggable={false}
                src={modoSupervivencia}
                alt={"supervivencia"}
              />
            </Link>
          </div>
          <div style={{ maxWidth: "136px" }}>
            <img draggable={false} src={modoApuesta} alt={"supervivencia"} />
          </div>
          {/* </Carousel>*/}
        </ModosMobile>

        <ModosDesktop
          style={{
            justifyContent: "center",
            marginTop: "70px",
            gap: "50px",
          }}
        >
          <img
            src={apuestaD}
            alt={"modo apuesta"}
            style={{ width: "240px", height: "288px" }}
          />
          <Link to={"/game"}>
            <img
              src={supervivenciaD}
              alt={"modo supervivencia"}
              style={{ width: "240px", height: "288px" }}
            />
          </Link>
          <img
            src={aventuraD}
            alt={"modo aventura"}
            style={{ width: "240px", height: "288px" }}
          />
        </ModosDesktop>
        <GridOptionsDiv>
          <Link to={"/inventory"}>
            <div style={{ textAlign: "center" }}>
              <img
                src={inventarioIcon}
                alt={"inventario"}
                style={{ width: "51px", height: "51px" }}
              />
              <div>INVENTARIO</div>
            </div>
          </Link>
          <Link to={"/presale"}>
            <div style={{ textAlign: "center" }}>
              <img
                src={shopIcon}
                alt={"shop"}
                style={{ width: "76px", height: "55px" }}
              />
              <div>SHOP</div>
            </div>
          </Link>
          <Link to={"/housing"}>
            <div style={{ textAlign: "center" }}>
              <img
                src={houseIcon}
                alt={"HOUSE"}
                style={{ width: "84px", height: "56px" }}
              />
              <div>HOUSE</div>
            </div>
          </Link>
          <Link to={"/personajes"}>
            <div style={{ textAlign: "center" }}>
              <img
                src={dogIcon}
                alt={"PERROS"}
                style={{ width: "54px", height: "53px" }}
              />
              <div>PERROS</div>
            </div>
          </Link>
        </GridOptionsDiv>
        <MainWrapperTopRightCornerAreaDesktop>
          <div style={{ display: "flex" }}>
            <div>174</div>
            <CoinIcon />
          </div>
          <FoodIcon />
        </MainWrapperTopRightCornerAreaDesktop>
      </ModosPageWrapper>

      <MainWrapperBelowArea>
        <Link to={"/"}>
          <HomeButton />
        </Link>
        <Link to={"/presale"}>
          <MarketplaceButton />
        </Link>
      </MainWrapperBelowArea>
    </MainWrapper>
  );
};

export default ModosPage;
