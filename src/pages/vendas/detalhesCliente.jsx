import { useParams, Link } from "react-router-dom";
import Sidebar from "../../components/menuPrincipalLateral/menuPrincipalLateral";
import { vendasData } from "../../assets/data/vendasData";
import { FaShoppingCart, FaHardHat, FaUsers } from "react-icons/fa";
import { useState } from "react";

export default function DetalhesCliente() {
  const [hoverBtnVoltar, setHoverBtnVoltar] = useState(false);
  const { id } = useParams();
  const cliente = vendasData.clientes.find((c) => c.id === `#${id}`);

  if (!cliente) {
    return (
      <main className="d-flex">
        <Sidebar />
        <div
          className="flex-grow-1 overflow-y-auto"
          style={{
            padding: "40px",
          }}
        >
          <h1
            style={{
              color: "var(--cor-principal)",
            }}
          >
            Cliente não encontrado
          </h1>
          <Link
            to="/vendas"
            className="text-white rounded-3 text-decoration-none fw-bold"
            style={{
              backgroundColor: hoverBtnVoltar
                ? "var(--cor-secundaria"
                : "var(--cor-principal)",
              padding: "10px 20px",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={() => setHoverBtnVoltar(true)}
            onMouseLeave={() => setHoverBtnVoltar(false)}
          >
            Voltar para vendas
          </Link>
        </div>
      </main>
    );
  }

  const ICONS = {
    Pedidos: FaShoppingCart,
    Instalações: FaHardHat,
    Contratos: FaUsers,
  };

  return (
    <main className="d-flex">
      <Sidebar />
      <div
        className="flex-grow-1 overflow-y-auto"
        style={{
          padding: "40px",
          backgroundColor: "var(--cor-background)"
        }}
      >
        <div
          className="d-flex justify-content-between align-items-center"
          style={{
            marginBottom: "20px",
          }}
        >
          <h1
            style={{
              color: "var(--cor-principal)",
            }}
          >
            Detalhes do Cliente: {cliente.nome}
          </h1>
          <Link
            to="/vendas"
            className="text-white rounded-3 text-decoration-none fw-bold"
            style={{
              backgroundColor: hoverBtnVoltar
                ? "var(--cor-secundaria"
                : "var(--cor-principal)",
              padding: "10px 20px",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={() => setHoverBtnVoltar(true)}
            onMouseLeave={() => setHoverBtnVoltar(false)}
          >
            Voltar
          </Link>
        </div>
        <div
          className="bg-white rounded-3"
          style={{
            padding: "20px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <p
            className="fs-6"
            style={{
              marginBottom: "10px",
              color: "var(--cor-terciaria)",
            }}
          >
            <strong
              style={{
                color: "var(--cor-principal)",
              }}
            >
              ID:
            </strong>{" "}
            {cliente.id}
          </p>
          <p
            className="fs-6"
            style={{
              marginBottom: "10px",
              color: "var(--cor-terciaria)",
            }}
          >
            <strong
              style={{
                color: "var(--cor-principal)",
              }}
            >
              Cliente desde:
            </strong>{" "}
            {cliente.desde}
          </p>
          <p
            className="fs-6"
            style={{
              marginBottom: "10px",
              color: "var(--cor-terciaria)",
            }}
          >
            <strong
              style={{
                color: "var(--cor-principal)",
              }}
            >
              Localização:
            </strong>{" "}
            {cliente.local}
          </p>
          <div className="cliente-stats-detalhes">
            <h3
              style={{
                color: "var(--cor-principal)",
                marginTop: "20px",
                marginBottom: "15px",
                borderTop: "1px solid #eee",
                paddingTop: "20px",
              }}
            >
              Estatísticas
            </h3>
            <div className="d-flex justify-content-around text-center">
              {cliente.stats.map((stat, index) => {
                const Icon = ICONS[stat.label];
                return (
                  <div
                    className="d-flex flex-column align-items-center"
                    key={index}
                  >
                    <Icon
                      className="fs-2"
                      style={{
                        color: "var(--cor-principal)",
                        marginBottom: "10px",
                      }}
                    />
                    <span
                      className="fs-4 fw-bold"
                      style={{
                        color: "var(--cor-principal)",
                      }}
                    >
                      {stat.valor}
                    </span>
                    <span
                      style={{
                        fontSize: "14px",
                        color: "var(--cor-terciaria)",
                      }}
                    >
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
