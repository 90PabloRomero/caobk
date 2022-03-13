import { MainWrapper } from "../styles/MainWrapper";
import CAOLogo from "../assets/logo.png";
import CAOLogoD from "./../assets/logoD.png";
import "./../metamask/contract";
import connectWalletButton from "./../assets/connectWallet.png";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connectWallet, getCurrentWalletConnected } from "../utils/interact.js";
import { MainWrapperBelowArea } from "../styles/MainWrapperBelowArea";
import { HomeButton } from "../styles/HomeButton";
import { MarketplaceButton } from "../styles/MarketplaceButton";
import styled from "styled-components";

const HomePage = () => {
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();

    setWallet(address);
    setStatus(status);
    // setModalOpen(true);

    addWalletListener();
  }, []);

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          // // once connected,check existing wallet in db and open modal with create account form
          // api
          //   .post("/checkifwalletexist", {
          //     params: { walletaddress: accounts[0] },
          //   })
          //   .then(function (res) {
          //     if (res.data.success === "existed") {
          //       localStorage.setItem("uuid", res.data.uuid);
          //       localStorage.setItem("token", res.data.token);
          //       setModalOpen(false);
          //       navigate("/compra-egg");
          //     } else if (res.data.success === "unexisted") {
          //       setModalOpen(true); // modified by tuktuk
          //     }
          //   });
        } else {
          setWallet("");
          // setModalOpen(false);
        }
      });
    } else {
      setStatus(
        "You must install Metamask, a virtual Ethereum wallet, in your browser."
      );
    }
  }

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };
  const navigate = useNavigate();

  return (
    <>
      <MainWrapper>
        <CAOLogoWrap>
          <CAOLogoStyledImgMobile src={CAOLogo} alt={"Crypto WAO"} />
          <CAOLogoStyledImgDesktop src={CAOLogoD} alt={"Crypto WAO"} />
        </CAOLogoWrap>
        <WalletWrap style={{ textAlign: "center" }}>
          {walletAddress === "" ? (
            <ConnectWalletButton onClick={connectWalletPressed()} />
          ) : (
            <Link to={"/presale"}>Continuar a pantalla de presale</Link>
          )}
        </WalletWrap>
        <div
          style={{
            textAlign: "center",
            maxWidth: "250px",
            margin: "-130px auto 0 auto",
          }}
        >
          <Link to={"/options"} style={{ fontSize: "23px" }}>
            Ir a Seleccion de modos de juego(demo)
          </Link>
        </div>
        <MainWrapperBelowArea>
          <Link to={"/"}>
            <HomeButton />
          </Link>
          <Link to={"/presale"}>
            <MarketplaceButton />
          </Link>
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
  background: url(${connectWalletButton}) no-repeat;
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
