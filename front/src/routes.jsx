import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contato from "./Pages/Contato";
import Tratamento from "./Pages/Tratamento";
import Login from "./Pages/Login";
import CadastroEspecialista from "./Pages/Cadastro-especialista";
import Cliente from "./Pages/Cliente";
import Termos from "./Pages/Termos";
import PoliticaPrivacidade from "./Pages/PoliticaPrivacidade";
import QuemSomos from "./Pages/QuemSomos";
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
        <Route path="cadastro-especialista" element={<CadastroEspecialista />} />
        <Route path="cliente" element={<Cliente />} />
        <Route path="Termos" element={<Termos />} />
        <Route path="PoliticaPrivacidade" element={<PoliticaPrivacidade />} />
        <Route path="QuemSomos" element={<QuemSomos />} />
        <Route path="*" element={<Page404 />} /> {}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
