import { MainWrapper } from "../styles/MainWrapper";
import { MainWrapperBelowArea } from "../styles/MainWrapperBelowArea";
import leftCornerDog from "./../assets/cornerLeftDog.png";
import rightCornerDog from "./../assets/cornerRightDog.png";
import styled from "styled-components";
import connectWallet from "./../assets/connectWallet.png";
import caologom from "./../assets/logocaom.png";

const PresaleIDOPage = () => {
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
        <div
          style={{
            textAlign: "center",
            marginTop: "-80px",
            fontSize: "50px",
            boxShadow: "0 4 4 #000 25%",
          }}
        >
          TOKEN PRICE
          <div
            style={{
              border: "3px solid #d4962b",
              borderRadius: "22px",
              fontSize: "20px",
              maxWidth: "fit-content",
              margin: "20px auto 0 auto",
              padding: "1px 20px",
              background: "linear-gradient(0deg, #cf942f -6.09%, #96543D 100%)",
            }}
          >
            0.01 $
          </div>
        </div>
        <ConnectWalletButton style={{ marginTop: 70 }} />
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
export default PresaleIDOPage;
