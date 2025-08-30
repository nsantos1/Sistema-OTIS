
import MenuPrincipalLateral from './assets/componentes/menuPrincipalLateral/menuPrincipalLateral.jsx';
import BarraDeFiltros from './assets/componentes/barraDeFiltros/barraDeFiltros.jsx';
import DashboardPage from './assets/componentes/dashboardPage/dashboardPage.jsx';


import './App.css'; 

function App() {
  return (
    <div className="app-container">
      
      
      <MenuPrincipalLateral />

      
      <BarraDeFiltros />

     
      <DashboardPage />

    </div>
  );
}

export default App;