import React from 'react';
import './App.css';
import Sidebar from './assets/componentes/menuPrincipalLateral/menuPrincipalLateral.jsx';

import ChatPage from './assets/pages/chat/ChatPage.jsx';

function App() {
  
  return (
    <div className="app-container">
      <Sidebar />
      
      <ChatPage />
    </div>
  );
}

export default App;