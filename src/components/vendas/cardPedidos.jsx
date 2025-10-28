import { FaRegCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./cardPedidos.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function CardPedidos({
  id,
  status,
  statusType,
  cliente,
  ultimaAtualizacao,
  responsavel,
  data,
  local,
}) {
  const [hover, setHover] = useState(false);
  const statusClass = `status-tag-pedido ${statusType || "default"}`;
  const pedidoId = id.replace("#PD-", ""); // Corrige o ID para a URL

  return (
    <div
      className="bg-white p-3 d-flex flex-column"
      style={{
        borderRadius: "12px",
        border: "1px solid #e2e8f0",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05",
      }}
    >
      <div
        className="d-flex justify-content-between align-items-center"
        style={{
          marginBottom: "12px",
        }}
      >
        <span
          className="fw-semibold"
          style={{
            fontSize: "12px",
            color: "#718096",
          }}
        >
          {id}
        </span>
        <span className={statusClass}>{status}</span>
      </div>

      <div className="text-center mb-3">
        <h2
          className="fw-bold mb-1"
          style={{
            fontSize: "20px",
            color: "var(--cor-principal)",
          }}
        >
          {cliente}
        </h2>
        <span
          style={{
            fontSize: "12px",
            color: "var(--cor-terciaria)",
          }}
        >
          Última atualização: {ultimaAtualizacao}
        </span>
      </div>

      <hr
        className="border-0 mb-3"
        style={{
          height: "1px",
          backgroundColor: "#e2e8f0",
        }}
      />

      <div className="d-flex justify-content-between align-items-center mb-3">
        <div
          className="d-flex align-items-center"
          style={{
            gap: "10px",
          }}
        >
          <div
            className="rounded-circle text-white d-flex align-items-center justify-content-center fw-bolder"
            style={{
              width: "42px",
              height: "42px",
              backgroundColor: "var(--cor-principal)",
              fontSize: "20px",
            }}
          >
            {responsavel.inicial}
          </div>
          <div>
            <span
              className="fw-bold d-block"
              style={{
                fontSize: "14px",
                color: "var(--cor-principal)",
              }}
            >
              {responsavel.nome}
            </span>
            <span
              style={{
                fontSize: "12px",
                color: "var(--cor-terciaria)",
              }}
            >
              {cliente}
            </span>
          </div>
        </div>
        <div
          className="text-end d-flex flex-column"
          style={{
            fontSize: "12px",
            color: "var(--cor-terciaria)",
            gap: "4px",
          }}
        >
          <div
            className="d-flex align-items-center justify-content-end"
            style={{
              gap: "5px",
            }}
          >
            <FaRegCalendarAlt />
            <span>{data}</span>
          </div>
          <div
            className="d-flex align-items-center justify-content-end"
            style={{
              gap: "5px",
            }}
          >
            <FaMapMarkerAlt />
            <span>{local}</span>
          </div>
        </div>
      </div>
      <Link
        to={`/vendas/pedido/${pedidoId}`}
        className="mt-auto text-white text-decoration-none text-center fw-bold"
        style={{
          backgroundColor: hover
            ? "var(--cor-secundaria)"
            : "var(--cor-principal)",
          padding: "12px",
          borderRadius: "6px",
          fontSize: "12px",
          transition: "background-color 0.2s",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        VER DETALHES DO PEDIDO
      </Link>
    </div>
  );
}
