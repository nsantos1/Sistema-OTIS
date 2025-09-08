import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";

import Login from "./pages/Login/login";
import Dashboard from "./pages/dashboard/dashboard"; 
import Vendas from "./pages/vendas/vendas";
import Instalacoes from "./pages/instalacoes/instalacoes";
import DetalhesDoContrato from "./pages/detalhesDoContrato/detalhesDoContrato";
import PosVenda from "./pages/posvenda/posVenda";
import PosVendaDetalhes from "./pages/posVendaDetalhes/posVendaDetalhes";
import ChatPage from "./pages/chat/chatPage";
import Colaboradores from "./pages/colaboradores/colaboradores";
import DetalhesColaboradores from "./pages/detalhesColaborador/detalhesColaborador";
import MuralDeFeedback from "./pages/muraldefeedback/muralDeFeedback"; 

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/vendas" element={<Vendas />} /> 
                <Route path="/instalacoes" element={<Instalacoes />} />
                    <Route path="/instalacoes/detalhes" element={<DetalhesDoContrato />} />
                <Route path="/pos-venda" element={<PosVenda />} />
                    <Route path="/pos-venda/detalhes/:id" element={<PosVendaDetalhes />} />
                <Route path="/canal-interno/mural-de-feedback" element={<MuralDeFeedback />} />
                <Route path="/canal-interno/chats" element={<ChatPage />} />
                <Route path="/colaboradores" element={<Colaboradores />} />
                    <Route path="/colaboradores/detalhes" element={<DetalhesColaboradores />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;