import { MainWrapper } from "../styles/MainWrapper";
import CAOLogo from "../assets/logo.png";
import connectWallet from "../assets/connectWallet.png";
import styled from "styled-components";
import { MainWrapperBelowArea } from "../styles/MainWrapperBelowArea";
import { HomeButton } from "../styles/HomeButton";
import { MarketplaceButton } from "../styles/MarketplaceButton";
import CAOLogoD from "./../assets/logoD.png";

const HomePage = () => {
  return (
    <>
      <MainWrapper>
        <CAOLogoWrap>
          <CAOLogoStyledImgMobile src={CAOLogo} alt={"Crypto WAO"} />
          <CAOLogoStyledImgDesktop src={CAOLogoD} alt={"Crypto WAO"} />
        </CAOLogoWrap>
        <WalletWrap style={{ textAlign: "center" }}>
          <ConnectWalletButton />
        </WalletWrap>
        <MainWrapperBelowArea>
          <HomeButton />
          <MarketplaceButton />
        </MainWrapperBelowArea>
      </MainWrapper>
    </>
  );
};
const CAOLogoWrap = styled.div`
  text-align: center;
  margin-top: 40%;
  @media (min-width: 910px) {
    margin-top: 10%;
  }
`;
const WalletWrap = styled.div`
  text-align: center;
  @media (min-width: 910px) {
    margin-top: -10%;
  }
`;
const CAOLogoStyledImgMobile = styled.img`
  max-width: 235px;
  @media (min-width: 910px) {
    display: none;
  }
`;
const CAOLogoStyledImgDesktop = styled.img`
  display: none;
  @media (min-width: 910px) {
    display: block;
    max-width: 631px;
    max-height: 302px;
  }
`;
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
