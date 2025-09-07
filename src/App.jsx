import "./App.css";
import Rotas from "./rotas";
import Colaboradores from "./pages/colaboradores/colaboradores";
import Instalacoes from "./pages/instalacoes/instalacoes.jsx";
import PosVenda from "./pages/posvenda/posVenda";
import PosVendaDetalhes from "./pages/posVendaDetalhes/posVendaDetalhes";
import Sidebar from "./components/menuPrincipalLateral/menuPrincipalLateral";

function App() {
  return (
      <Rotas />
  );
}

export default App;
