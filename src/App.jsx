import { useState } from 'react'
import React from "react";
import Sidebar from "../src/componentes/menuPrincipalLateral/menuPrincipalLateral.jsx";
import DetalhesDoContrato from "../src/pages/detalhesDoContrato/detalhesDoContrato.jsx";
import DetalhesDoColaborador from "../src/pages/colaboradores/colaboradores.jsx";
import './App.css';

function App() {
  return (
    <div className='app-container'>
      <Sidebar />
      <div className='main-container'>
        <DetalhesDoContrato />
        <DetalhesDoColaborador />
      </div>
    </div>
  );
}

export default App;

