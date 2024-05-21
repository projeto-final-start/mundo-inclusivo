import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contato from "./Pages/Contato";
import Tratamento from "./Pages/Tratamento";
import Login from "./Pages/Login";
import CadastroEspecialista from "./Pages/CadastroEspecialista";
import Cliente from "./Pages/Cliente";
import Termos from "./Pages/Termos";
import PoliticaPrivacidade from "./Pages/PoliticaPrivacidade";
import QuemSomos from "./Pages/QuemSomos";
import AgendaEspecialista from "./Pages/AgendaEspecialista";
import PerfilCliente from "./Pages/PerfilCliente";
import Page404 from "./Pages/Page404";
import PageBase from "./Pages/PageBase";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <PageBase /> }>
        <Route index element={<Home />} />
        <Route path="contato" element={<Contato />} />
        <Route path="tratamento" element={<Tratamento />} />
        <Route path="login" element={<Login />} />
        <Route path="cadastroespecialista" element={<CadastroEspecialista />} />
        <Route path="cliente" element={<Cliente />} />
        <Route path="termos" element={<Termos />} />
        <Route path="politicaprivacidade" element={<PoliticaPrivacidade />} />
        <Route path="quemSomos" element={<QuemSomos />} />
        <Route path="agendaespecialista" element={<AgendaEspecialista />} />
        <Route path="perfilcliente" element={<PerfilCliente />} />
        <Route path="*" element={<Page404 />} /> {}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
