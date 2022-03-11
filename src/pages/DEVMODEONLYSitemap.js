import CAOLogo from "../assets/logo.png";
import connectWallet from "../assets/connectWallet.png";
import styled from "styled-components";
import CAOLogoD from "./../assets/logoD.png";
import { Link } from "react-router-dom";

const SiteMapPage = () => {
  return (
    <>
      <CAOLogoWrap>
        <CAOLogoStyledImgMobile src={CAOLogo} alt={"Crypto WAO"} />
        <CAOLogoStyledImgDesktop src={CAOLogoD} alt={"Crypto WAO"} />
      </CAOLogoWrap>
      Con agrado les presentamos un vistazo a las pantallas, la proxima semana
      va a estar completamente funcional.
      <ul>
        <li>
          <Link to={"/home"}>Index del sitio</Link>
          <li>
            <Link to={"/inventory"}>inventario</Link>
          </li>
          <li>
            <Link to={"/housing"}>casetas de recuperacion</Link>
          </li>
          <li>
            <Link to={"/options"}> eleccion de modo</Link>
          </li>
          <li>
            <Link to={"/capsulaembrio"}>capsulas</Link>
          </li>
          <li>
            <Link to={"/recompensas"}>recompensas</Link>
          </li>
          <li>
            <Link to={"/personajes"}>perros</Link>
          </li>
          <li>
            <Link to={"/game"}>juego!</Link>
          </li>
          <li>
            <Link to={"/presale"}>presale</Link>
          </li>
          <li>
            <Link to={"/presale-ido"}>presaleido</Link>
          </li>
        </li>
      </ul>
      <p>Un saludo, Pablo de N&T-</p>
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

export default SiteMapPage;
