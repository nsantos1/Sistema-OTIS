import React, { useState } from "react";
import "./menuPrincipalLateral.css";

export default function Sidebar() {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <nav className="sidebar">
      <div className="sidebar-menu">
        <h1 className="logo">OTIS</h1>
        <hr />
        <ul className="menu">
          <li>Dashboard</li>
          <li>Vendas</li>
          <li>Instalações</li>
          <li>Pós-Venda</li>
          <li className="submenu" onClick={() => setSubmenuOpen(!submenuOpen)}>
            <span className="submenu-title">
              <span className={`arrow ${submenuOpen ? "up" : "down"}`}></span>
              Canal Interno
            </span>
            <ul className={`submenu-list ${submenuOpen ? "open" : ""}`}>
              <li>Mural de feedback</li>
              <li>Chats</li>
            </ul>
          </li>

          <li>Colaboradores</li>
        </ul>
      </div>
    </nav>
  );
}
