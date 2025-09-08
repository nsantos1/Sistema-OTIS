import "./App.css";
import Rotas from "./rotas";
import Colaboradores from "./pages/colaboradores/colaboradores";
import ChatPage from "./pages/chat/chatPage.jsx";
import Instalacoes from "./pages/instalacoes/instalacoes.jsx";
import PosVenda from "./pages/posvenda/posVenda";
import PosVendaDetalhes from "./pages/posVendaDetalhes/posVendaDetalhes";
import Login from "./pages/login/login.jsx";
import Vendas from "./pages/vendas/vendas.jsx";
import Sidebar from "./components/menuPrincipalLateral/menuPrincipalLateral";

function App() {
  return (
      <Vendas />
  );
}

export default App;
