import { MainWrapper } from "../styles/MainWrapper";
import { MainWrapperBelowArea } from "../styles/MainWrapperBelowArea";
import leftCornerDog from "./../assets/cornerLeftDog.png";
import rightCornerDog from "./../assets/cornerRightDog.png";
import styled from "styled-components";
import connectWallet from "./../assets/connectWallet.png";
import openButton from "./../assets/openButton.png";
import embryo from "./../assets/embryo.svg";
import binance from "./../assets/binance.png";
import caologom from "./../assets/logocaom.png";

const PresalePage = () => {
  return (
    <>
      <MainWrapper>
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: 0,
            right: 0,
            textAlign: "center",
          }}
        >
          <img
            src={caologom}
            alt={"Crypto WAO"}
            style={{ width: "159px", height: "auto" }}
          />
        </div>
        <MainWrapper>
          <div style={{ width: "298px", margin: "-85px auto 0 auto" }}>
            <div
              style={{
                padding: "0 1rem",
                display: "grid",
                placeItems: "center",
                position: "relative",
                zIndex: 2,
              }}
            >
              <img
                src={embryo}
                alt={""}
                style={{ width: "98px", height: "118px", margin: "0 auto" }}
              />
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
          </div>
        </MainWrapper>
        <MainWrapperBelowArea>
          <div
            style={{ position: "absolute", left: 0, bottom: -67, zIndex: 0 }}
          >
            <img src={leftCornerDog} alt={""} />
          </div>
          <div
            style={{ position: "absolute", right: 0, bottom: -67, zIndex: 0 }}
          >
            <img src={rightCornerDog} alt={""} />
          </div>
          <div style={{ fontSize: "16px", position: "relative", zIndex: 1 }}>
            2022 CRYPTO WAO - ALL RIGHTS RESERVED
          </div>
        </MainWrapperBelowArea>
      </MainWrapper>
    </>
  );
};

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
`;
export default PresalePage;
