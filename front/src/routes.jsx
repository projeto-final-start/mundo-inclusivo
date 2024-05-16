import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Contato from "./Pages/Contato"
import Tratamento from "./Pages/Tratamento"
import Login from "./Pages/Login"
import CadastroEspecialista from "./Pages/Cadastro-especialista"
import Page404 from "./Pages/Page404"



function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="contato" element={<Contato />} />
                <Route path="tratamento" element={<Tratamento />} />
                <Route path="login" element={<Login />} />
                <Route path="cadastro-especialista" element={<CadastroEspecialista />} />
                <Route path="*" element={<Page404 />} /> { }
            </Routes>
        </BrowserRouter>
        
    )
}

export default AppRoutes
