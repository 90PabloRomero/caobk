import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import InventoryPage from "../pages/InventoryPage";
import CasetaRecuPage from "../pages/CasetaRecuPage";
import ModosPage from "../pages/ModosPage";
import CapsulaEmbrioPage from "../pages/CapsulaEmbrio";
import RecompensasPage from "../pages/RecompensasPage";
import CharactersPage from "../pages/CharactersPage";
import { Nfts } from "../mockups/nfts";

function Routers() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/housing" element={<CasetaRecuPage />} />
        <Route path="/options" element={<ModosPage />} />
        <Route path="/capsulaembrio" element={<CapsulaEmbrioPage />} />
        <Route path="/recompensas" element={<RecompensasPage />} />
        <Route path="/personajes" element={<CharactersPage Nfts={Nfts} />} />
      </Routes>
    </Router>
  );
}

export default Routers;
