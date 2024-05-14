import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Contato from "./Pages/Contato";
import Tratamento from "./Pages/Tratamento";
import Login from "./Pages/Login";


function AppRoutes () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/contato" element={<Contato/>}></Route>
                <Route path="/tratamento" element={<Tratamento/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
