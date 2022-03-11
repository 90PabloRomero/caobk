import { MainWrapper } from "../styles/MainWrapper";
import { MainWrapperBelowArea } from "../styles/MainWrapperBelowArea";
import leftCornerDog from "./../assets/cornerLeftDog.png";
import rightCornerDog from "./../assets/cornerRightDog.png";
import styled from "styled-components";
import connectWallet from "./../assets/connectWallet.png";
import caologom from "./../assets/logocaom.png";
import logoD from "../assets/logoD.png";

const PresaleIDOPage = () => {
  return (
    <>
      <MainWrapper>
        <LogoContainer>
          <img src={caologom} alt={"Crypto WAO"} />
          <img src={logoD} alt={"Crypto WAO"} />
        </LogoContainer>
        <div
          style={{
            textAlign: "center",
            marginTop: "-80px",
            fontSize: "50px",
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

  @media (min-width: 910px) {
    position: absolute;
    top: 0;
    right: 0;
  }

  @media (min-width: 1200px) {
    right: 0;
  }
`;
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
export default PresaleIDOPage;
