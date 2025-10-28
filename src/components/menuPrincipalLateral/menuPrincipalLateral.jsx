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
    <nav
      className="menu d-flex flex-column align-items-center min-vh-100 text-white flex-shrink-0"
      style={{
        maxWidth: "280px !important",
        width: "280px",
        backgroundColor: "#0c2340",
        padding: "0 20px 20px 20px",
      }}
    >
      <div
        style={{
          marginTop: "20px",
        }}
      >
        <h1
          className="fw-bolder text-center"
          style={{
            fontSize: "96px",
            marginBottom: "30px",
          }}
        >
          <NavLink to="/dashboard" className="text-white text-decoration-none">
            OTIS
          </NavLink>
        </h1>
        <hr />
        <ul className="d-flex flex-column list-unstyled p-0 fw-semibold align-items-center w-100">
          <li
            className="fs-4 my-2 w-100 cursor-pointer"
            style={{
              transition: "color 0.2s, transform 0.2s",
            }}
          >
            <NavLink
              to="/dashboard"
              className="text-reset text-decoration-none d-block text-center rounded-3"
              style={{
                padding: "10px 20px",
                transition: "background-color 0.2s, color 0.2s",
              }}
            >
              Dashboard
            </NavLink>
          </li>
          <li
            className="fs-4 my-2 w-100 cursor-pointer"
            style={{
              transition: "color 0.2s, transform 0.2s",
            }}
          >
            <NavLink
              to="/vendas"
              className="text-reset text-decoration-none d-block text-center rounded-3"
              style={{
                padding: "10px 20px",
                transition: "background-color 0.2s, color 0.2s",
              }}
            >
              Vendas
            </NavLink>
          </li>
          <li
            className="fs-4 my-2 w-100 cursor-pointer"
            style={{
              transition: "color 0.2s, transform 0.2s",
            }}
          >
            <NavLink
              to="/instalacoes"
              className="text-reset text-decoration-none d-block text-center rounded-3"
              style={{
                padding: "10px 20px",
                transition: "background-color 0.2s, color 0.2s",
              }}
            >
              Instalações
            </NavLink>
          </li>
          <li
            className="fs-4 my-2 w-100 cursor-pointer"
            style={{
              transition: "color 0.2s, transform 0.2s",
            }}
          >
            <NavLink
              to="/pos-venda"
              className="text-reset text-decoration-none d-block text-center rounded-3"
              style={{
                padding: "10px 20px",
                transition: "background-color 0.2s, color 0.2s",
              }}
            >
              Pós-Venda
            </NavLink>
          </li>
          <li
            className="submenu fs-4 my-2 w-100 cursor-pointer"
            style={{
              transition: "color 0.2s, transform 0.2s",
            }}
          >
            <span
              className={`submenu-title ${
                isCanalInternoActive ? "active" : ""
              }`}
              onClick={() => setSubmenuOpen(!submenuOpen)}
            >
              <span className={`arrow ${submenuOpen ? "up" : "down"}`}></span>
              Canal Interno
            </span>
            <ul className={`submenu-list ${submenuOpen ? "open" : ""}`}>
              <li
                className="fs-6 fw-semibold"
                style={{
                  color: "#ccc",
                  margin: "5px 0",
                }}
              >
                <NavLink
                  to="/canal-interno/mural-de-feedback"
                  className="text-reset text-decoration-none d-block text-center rounded-3"
                  style={{
                    padding: "10px 20px",
                    transition: "background-color 0.2s, color 0.2s",
                  }}
                >
                  Mural de Feedback
                </NavLink>
              </li>
              <li
                className="fs-6 fw-semibold"
                style={{
                  color: "#ccc",
                  margin: "5px 0",
                }}
              >
                <NavLink
                  to="/canal-interno/chats"
                  className="text-reset text-decoration-none d-block text-center rounded-3"
                  style={{
                    padding: "10px 20px",
                    transition: "background-color 0.2s, color 0.2s",
                  }}
                >
                  Chats
                </NavLink>
              </li>
            </ul>
          </li>
          <li
            className="fs-4 my-2 w-100 cursor-pointer"
            style={{
              transition: "color 0.2s, transform 0.2s",
            }}
          >
            <NavLink
              to="/colaboradores"
              className="text-reset text-decoration-none d-block text-center rounded-3"
              style={{
                padding: "10px 20px",
                transition: "background-color 0.2s, color 0.2s",
              }}
            >
              Colaboradores
            </NavLink>
          </li>
          <li
            className="fs-4 my-2 w-100 cursor-pointer"
            style={{
              transition: "color 0.2s, transform 0.2s",
            }}
          >
            <NavLink
              to="/relatorios-avancados"
              className="text-reset text-decoration-none d-block text-center rounded-3"
              style={{
                padding: "10px 20px",
                transition: "background-color 0.2s, color 0.2s",
              }}
            >
              Relatórios Avançados
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
