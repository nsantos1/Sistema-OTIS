import './App.css'
import Sidebar from './componentes/menuPrincipalLateral/menuPrincipalLateral'
import PosVenda from './pages/posvenda/posvenda'

function App() {
  return (
    <>
    <div className='app-container'>
      <Sidebar />
      <div className='main-container'>
        <PosVenda />
      </div>
    </div>
    </>
  )
}

export default App
