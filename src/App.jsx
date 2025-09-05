import './App.css'
import Sidebar from './componentes/menuPrincipalLateral/menuPrincipalLateral'
import Rotas from './rotas'

function App() {
  return (
    <>
    <div className='app-container'>
      <Sidebar />
      <div className='main-container'>
        <Rotas />
      </div>
    </div>
    </>
  )
}

export default App
