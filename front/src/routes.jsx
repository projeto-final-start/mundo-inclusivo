import { BrowserRouter, Route, Routes } from "react-router-dom";
import createStore from 'react-auth-kit/createStore';
import AuthProvider from 'react-auth-kit';
import AuthOutlet from '@auth-kit/react-router/AuthOutlet';

import Home from "./Pages/Home";
import Contato from "./Pages/Contato";
import Tratamento from "./Pages/Tratamento";
import Login from "./Pages/Login";
import CadastroEspecialista from "./Pages/CadastroEspecialista";
import Cliente from "./Pages/Cliente";
import Termos from "./Pages/Termos";
import PoliticaPrivacidade from "./Pages/PoliticaPrivacidade";
import QuemSomos from "./Pages/QuemSomos";
import FAQ from "./Pages/FAQ";
import AgendaEspecialista from "./Pages/AgendaEspecialista";
import PerfilCliente from "./Pages/PerfilCliente";
import EncontrarEspecialista from "./Pages/EncontrarEspecialista";
import RecuperacaoSenha from "./Pages/RecuperacaoSenha";
import DashboardBase from "./Dashboard/components/DashboardBase";
import DisponibilidadeEspecialista from "./Pages/DisponibilidadeEspecialista";
import FormaPagamento from "./Pages/FormaPagamento";
import PerfilCompleto from "./Pages/PerfilCompleto";
import ClienteEspecialista from "./Pages/ClienteEspecialista";
import EditarPerfilEspecialista from "./Pages/EditarPerfilEspecialista";
import Page404 from "./Pages/Page404";
import PageBase from "./Pages/PageBase";

const authStore = createStore({
  authName: '_auth',
  authType: 'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'https:',
});

function AppRoutes() {
  return (
    <AuthProvider store={authStore} >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PageBase />}>
            <Route index element={<Home />} />
            <Route path="contato" element={<Contato />} />
            <Route path="tratamento" element={<Tratamento />} />
            <Route path="login" element={<Login />} />
            <Route path="cadastroespecialista" element={<CadastroEspecialista />} />
            <Route path="cliente" element={<Cliente />} />
            <Route path="encontrarespecialista" element={<EncontrarEspecialista />} />
            <Route path="termos" element={<Termos />} />
            <Route path="politicaprivacidade" element={<PoliticaPrivacidade />} />
            <Route path="quemSomos" element={<QuemSomos />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="formapagamento" element={<FormaPagamento />} />
            <Route path="perfilcliente" element={<PerfilCliente />} />
            <Route path="recuperacaosenha" element={<RecuperacaoSenha />} />

          

            <Route path="*" element={<Page404 />} />
          </Route>

          <Route element={<AuthOutlet fallbackPath='login' />}>
            {/* Rotas autenticadas */}
            <Route path="/dashboard" element={<DashboardBase />}>
            <Route path="disponibilidadeespecialista" element={<DisponibilidadeEspecialista />} />
              <Route path="agendaespecialista" element={<AgendaEspecialista />} />
              <Route path="clienteespecialista" element={<ClienteEspecialista/>} />
              <Route path="editarperfilespecialista" element={<EditarPerfilEspecialista/>} />
              
            </Route>
          </Route>
          
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default AppRoutes;
