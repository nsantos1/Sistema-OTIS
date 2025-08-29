import { useState } from 'react'
import React from "react";
import Sidebar from "../src/componentes/menuPrincipalLateral/menuPrincipalLateral.jsx";
import './App.css';

function App() {
  return (
    <div className='app-container'>
      <Sidebar />
      <div className='main-container'>
        <h2>Área principal do sistema</h2>
      </div>
    </div>
  );
}

export default App;

