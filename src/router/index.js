import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import InventoryPage from "../pages/InventoryPage";
import CasetaRecuPage from "../pages/CasetaRecuPage";
import ModosPage from "../pages/ModosPage";
import CapsulaEmbrioPage from "../pages/CapsulaEmbrio";
import RecompensasPage from "../pages/RecompensasPage";
import CharactersPage from "../pages/CharactersPage";
import { Nfts } from "../mockups/nfts";
import GamePage from "../pages/GamePage";
import PresalePage from "../pages/PresalePage";
import PresaleIDOPage from "../pages/PresaleIDOPage";
import DEVMODEONLYSitemap from "../pages/DEVMODEONLYSitemap";

function Routers() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<DEVMODEONLYSitemap />} />

        <Route path="/home" element={<HomePage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/housing" element={<CasetaRecuPage />} />
        <Route path="/options" element={<ModosPage />} />
        <Route path="/capsulaembrio" element={<CapsulaEmbrioPage />} />
        <Route path="/recompensas" element={<RecompensasPage />} />
        <Route path="/personajes" element={<CharactersPage Nfts={Nfts} />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/presale" element={<PresalePage />} />
        <Route path="/presale-ido" element={<PresaleIDOPage />} />
      </Routes>
    </Router>
  );
}

export default Routers;
