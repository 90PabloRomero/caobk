import { MainWrapper } from "../styles/MainWrapper";
import { MainWrapperBelowArea } from "../styles/MainWrapperBelowArea";
import leftCornerDog from "./../assets/cornerLeftDog.png";
import rightCornerDog from "./../assets/cornerRightDog.png";
import leftCornerDogD from "./../assets/cornerLeftDogD.png";
import rightCornerDogD from "./../assets/cornerRightDogD.png";
import styled from "styled-components";
import connectWallet from "./../assets/connectWallet.png";
import openButton from "./../assets/openButton.png";
import embryo from "./../assets/embryo.svg";
import embryoD from "./../assets/embryoD.svg";
import binance from "./../assets/binance.png";
import caologom from "./../assets/logocaom.png";
import logoD from "./../assets/logoD.png";
import presaleDesktopSubBG from "./../assets/presaleDesktopSubBG.png";

const LogoContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  text-align: center;

  > img {
    width: 159px;
    height: auto;
  }

  > img:nth-child(2) {
    display: none;
  }

  @media (min-width: 910px) {
    right: auto;
    > img {
      width: 333px;
    }

    > img:nth-child(1) {
      display: none;
    }

    > img:nth-child(2) {
      display: block;
      width: 333px;
      height: 161px;
      margin-left: 3%;
    }
  }
`;

const PresalePageWrapper = styled.div`
  width: 298px;
  margin: -85px auto 0 auto;
  @media (min-width: 910px) {
    width: 968px;
    background: url(${presaleDesktopSubBG}) no-repeat center;
    margin-left: -5px;
    height: 575px;
    margin-top: 50px;
  }
`;
const PresalePage = () => {
  return (
    <>
      <MainWrapper>
        <LogoContainer>
          <img src={caologom} alt={"Crypto WAO"} />
          <img src={logoD} alt={"Crypto WAO"} />
        </LogoContainer>
        <MainWrapper>
          <PresalePageWrapper>
            <div
              style={{
                padding: "0 1rem",
                display: "grid",
                placeItems: "center",
                position: "relative",
                zIndex: 2,
              }}
            >
              <EmbryoContainer />
              <div>
                <span style={{ fontSize: "24px" }}>NFT</span>{" "}
                <span style={{ fontSize: "16px" }}>Price:</span>{" "}
                <span style={{ fontSize: "23px" }}>15</span>
                <span style={{ fontSize: "16px" }}>BUSD</span>
                <img
                  src={binance}
                  alt={""}
                  style={{ width: "24px", height: "23px" }}
                />
              </div>
              <div style={{ fontSize: "23px" }}>
                <form>
                  OPEN:
                  <input
                    type={"number"}
                    style={{
                      background: "none",
                      border: 0,
                      maxWidth: "45px",
                      marginLeft: "5px",
                    }}
                  />
                </form>
              </div>
              <img
                src={openButton}
                alt={"open"}
                style={{
                  maxWidth: "131px",
                  maxHeight: "32px",
                  margin: ".31rem 0",
                }}
              />
            </div>
            <ConnectWalletButton />
          </PresalePageWrapper>
        </MainWrapper>
        <MainWrapperBelowArea>
          <DogLeftCorner>
            <img src={leftCornerDog} alt={""} />
            <img src={leftCornerDogD} alt={""} />
          </DogLeftCorner>
          <DogRightCorner>
            <img src={rightCornerDog} alt={""} />
            <img src={rightCornerDogD} alt={""} />
          </DogRightCorner>
          <div style={{ fontSize: "16px", position: "relative", zIndex: 1 }}>
            2022 CRYPTO WAO · ALL RIGHTS RESERVED
          </div>
        </MainWrapperBelowArea>
      </MainWrapper>
    </>
  );
};

const DogLeftCorner = styled.div`
  position: absolute;
  left: 0;
  bottom: -67px;
  z-index: 0;

  > img:nth-child(1) {
    display: block;
  }

  > img:nth-child(2) {
    display: none;
  }

  @media (min-width: 910px) {
    left: -11vw;
    bottom: -80px;
    > img:nth-child(1) {
      display: none;
    }

    > img:nth-child(2) {
      display: block;
    }
  }
  @media (min-width: 1368px) {
    left: 0;
  }
`;
const DogRightCorner = styled.div`
  position: absolute;
  right: 0;
  bottom: -67px;
  z-index: 0;

  > img:nth-child(1) {
    display: block;
  }

  > img:nth-child(2) {
    display: none;
  }

  @media (min-width: 910px) {
    right: -11vw;
    bottom: -80px;
    > img:nth-child(1) {
      display: none;
    }

    > img:nth-child(2) {
      display: block;
    }
  }
  @media (min-width: 1368px) {
    right: 0;
  }
`;
const EmbryoContainer = styled.div`
  width: 98px;
  height: 118px;
  margin: 0 auto;
  background: url(${embryo}) no-repeat;
  @media (min-width: 910px) {
    margin-top: 30px;
    background: url(${embryoD}) no-repeat;
    width: 264px;
    height: 318px;
  }
`;
const ConnectWalletButton = styled.button`
  background: url(${connectWallet}) no-repeat;
  border: 0;
  width: 299px;
  height: 41px;
  transition: filter 0.252s;
  cursor: pointer;
  z-index: 1;
  position: relative;

  &:hover {
    filter: brightness(125%);
  }

  @media (min-width: 910px) {
    position: absolute;
    top: 35px;
    right: 0;
  }
`;
export default PresalePage;
