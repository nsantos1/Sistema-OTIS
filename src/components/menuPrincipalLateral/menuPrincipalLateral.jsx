import { useState } from "react";
import { Link } from "react-router-dom";

import "./menuPrincipalLateral.css";

export default function Sidebar() {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <nav className="sidebar">
      <div className="sidebar-menu">
        <h1 className="logo">OTIS</h1>
        <hr />
        <ul className="menu">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>Vendas</li>
          <li>
            <Link to="/instalacoes">Instalações</Link>
          </li>
          <li>
            <Link to="/pos-venda">Pós-Venda</Link>
          </li>
          <li className="submenu" onClick={() => setSubmenuOpen(!submenuOpen)}>
            <span className="submenu-title">
              <span className={`arrow ${submenuOpen ? "up" : "down"}`}></span>
              Canal Interno
            </span>
            <ul className={`submenu-list ${submenuOpen ? "open" : ""}`}>
              <li>Mural de feedback</li>
              <li>
                <Link to="/canal-interno">Chats</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/colaboradores">Colaboradores</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
