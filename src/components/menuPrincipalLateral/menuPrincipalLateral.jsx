import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./menuPrincipalLateral.css";

export default function Sidebar() {
  const location = useLocation();
  const isCanalInternoActive = location.pathname.startsWith("/canal-interno");
  const [submenuOpen, setSubmenuOpen] = useState(isCanalInternoActive);

  useEffect(() => {
    setSubmenuOpen(isCanalInternoActive);
  }, [isCanalInternoActive]);

  return (
    <nav className="sidebar">
      <div className="sidebar-menu">
        <h1 className="logo">
          <NavLink to="/dashboard">OTIS</NavLink>
        </h1>
        <hr />
        <ul className="menu">
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/vendas">Vendas</NavLink>
          </li>
          <li>
            <NavLink to="/instalacoes">Instalações</NavLink>
          </li>
          <li>
            <NavLink to="/pos-venda">Pós-Venda</NavLink>
          </li>
          <li className="submenu">
            <span
              className={`submenu-title ${isCanalInternoActive ? "active" : ""}`}
              onClick={() => setSubmenuOpen(!submenuOpen)}
            >
              <span className={`arrow ${submenuOpen ? "up" : "down"}`}></span>
              Canal Interno
            </span>
            <ul className={`submenu-list ${submenuOpen ? "open" : ""}`}>
              <li>
                <NavLink to="/canal-interno/mural-de-feedback">
                  Mural de Feedback
                </NavLink>
              </li>
              <li>
                <NavLink to="/canal-interno/chats">Chats</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/colaboradores">Colaboradores</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}