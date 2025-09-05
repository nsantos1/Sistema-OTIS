import { useState } from 'react';
import './App.css';
 import Login from './assets/pages/Login/Login.jsx';
import Componente from './assets/pages/Componente/componente.jsx';

function App() {
  const [count, setCount] = useState(0);
  return <Login/>;
}

export default App;
