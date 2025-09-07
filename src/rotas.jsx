import { Route, BrowserRouter, Routes } from "react-router-dom";

import PosVenda from "./pages/posvenda/posVenda";
import PosVendaDetalhes from "./pages/posVendaDetalhes/posVendaDetalhes";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/pos-venda" element={<PosVenda />} />
                <Route path="/pos-venda/detalhes/:id" element={<PosVendaDetalhes />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;