import "./App.css";
import Rotas from "./rotas";
import Colaboradores from "./pages/colaboradores/colaboradores";
import ChatPage from "./pages/chat/ChatPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import PosVenda from "./pages/posvenda/posVenda";
import PosVendaDetalhes from "./pages/posVendaDetalhes/posVendaDetalhes";
import Sidebar from "./components/menuPrincipalLateral/menuPrincipalLateral";

function App() {
  return (
      <DashboardPage />
  );
}

export default App;
