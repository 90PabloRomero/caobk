import { MainWrapper } from "../styles/MainWrapper";
import CAOLogo from "../assets/logo.png";
import connectWallet from "../assets/connectWallet.png";
import styled from "styled-components";
import { MainWrapperBelowArea } from "../styles/MainWrapperBelowArea";
import { HomeButton } from "../styles/HomeButton";
import { MarketplaceButton } from "../styles/MarketplaceButton";

const HomePage = () => {
  return (
    <>
      <MainWrapper>
        <div style={{ textAlign: "Center", marginTop: "40%" }}>
          <img src={CAOLogo} style={{ maxWidth: "235px" }} />
        </div>
        <ConnectWalletButton>{` `}</ConnectWalletButton>
        <MainWrapperBelowArea>
          <HomeButton>{` `}</HomeButton>
          <MarketplaceButton>{` `}</MarketplaceButton>
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

  &:hover {
    filter: brightness(125%);
  }
`;

export default HomePage;
