import { useParams, Link } from "react-router-dom";
import Sidebar from "../../components/menuPrincipalLateral/menuPrincipalLateral";
import { vendasData } from "../../assets/data/vendasData";
import "./detalhesPedido.css";
import { useState } from "react";

export default function DetalhesPedido() {
  const [hoverBtnVoltar, setHoverBtnVoltar] = useState(false);
  const { id } = useParams();
  const pedido = vendasData.pedidos.find((p) => p.id === `#PD-${id}`);

  if (!pedido) {
    return (
      <main className="d-flex">
        <Sidebar />
        <div
          className="flex-grow-1 overflow-y-auto"
          style={{
            padding: "40px",
            backgroundColor: "#f7fafc",
          }}
        >
          <h1>Pedido não encontrado</h1>
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

  const statusClass = `status-tag-detalhes status-${pedido.statusType}`;

  return (
    <main className="d-flex">
      <Sidebar />
      <div
        className="flex-grow-1 overflow-y-auto"
        style={{
          padding: "40px",
          backgroundColor: "#f7fafc",
        }}
      >
        <div
          className="d-flex justify-content-between align-items-center"
          style={{
            marginBottom: "30px",
          }}
        >
          <h1
            className="fs-4 fw-bold"
            style={{
              color: "var(--cor-principal)",
            }}
          >
            Detalhes do Pedido: {pedido.id}
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
          className="bg-white"
          style={{
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
            border: "1px solid #e2e8f0",
          }}
        >
          <div
            className="d-flex"
            style={{
              gridTemplateColumns: "1fr 1fr",
              gap: "25px",
            }}
          >
            <div className="d-flex flex-column">
              <span
                className="mb-2 fw-normal"
                style={{
                  fontSize: "14px",
                  color: "var(--cor-terciaria)",
                }}
              >
                Cliente
              </span>
              <span
                className="fs-6 fw-semibold"
                style={{
                  color: "var(--cor-principal)",
                }}
              >
                {pedido.cliente}
              </span>
            </div>
            <div className="d-flex flex-column">
              <span
                className="mb-2 fw-normal"
                style={{
                  fontSize: "14px",
                  color: "var(--cor-terciaria)",
                }}
              >
                Status
              </span>
              <span className={statusClass}>{pedido.status}</span>
            </div>
            <div className="d-flex flex-column">
              <span
                className="mb-2 fw-normal"
                style={{
                  fontSize: "14px",
                  color: "var(--cor-terciaria)",
                }}
              >
                Data do Pedido
              </span>
              <span
                className="fs-6 fw-semibold"
                style={{
                  color: "var(--cor-principal)",
                }}
              >
                {pedido.data}
              </span>
            </div>
            <div className="d-flex flex-column">
              <span
                className="mb-2 fw-normal"
                style={{
                  fontSize: "14px",
                  color: "var(--cor-terciaria)",
                }}
              >
                Local
              </span>
              <span
                className="fs-6 fw-semibold"
                style={{
                  color: "var(--cor-principal)",
                }}
              >
                {pedido.local}
              </span>
            </div>
            <div className="d-flex flex-column">
              <span
                className="mb-2 fw-normal"
                style={{
                  fontSize: "14px",
                  color: "var(--cor-terciaria)",
                }}
              >
                Responsável Comercial
              </span>
              <span
                className="fs-6 fw-semibold"
                style={{
                  color: "var(--cor-principal)",
                }}
              >
                {pedido.responsavel.nome}
              </span>
            </div>
            <div className="d-flex flex-column">
              <span
                className="mb-2 fw-normal"
                style={{
                  fontSize: "14px",
                  color: "var(--cor-terciaria)",
                }}
              >
                Última Atualização
              </span>
              <span
                className="fs-6 fw-semibold"
                style={{
                  color: "var(--cor-principal)",
                }}
              >
                {pedido.ultimaAtualizacao}
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
