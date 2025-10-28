import { FaRegCalendarAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function CardContratos({
  id,
  // status,
  // statusType,
  cliente,
  local,
  modelo,
  ultimaAtualizacao,
  responsavel,
}) {
  const [hover, setHover] = useState(false);
  // const statusClassName = `status-tag ${statusType || ""}`;
  const contractId = id.replace("#CT-", "");

  return (
    <div
      className="bg-white d-flex flex-column"
      style={{
        borderRadius: "12px",
        border: "1px solid #e2e8f0",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        padding: "20px",
        overflow: "hidden",
      }}
    >
      <div className="flex-grow-1 d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span
            className="fw-semibold"
            style={{
              fontSize: "12px",
              color: "#718096",
            }}
          >
            {id}
          </span>
          {/* <span className={statusClassName}>{status}</span> */}
        </div>

        <div
          style={{
            marginBottom: "12px",
          }}
        >
          <h4
            className="fs-6 fw-bold mb-1"
            style={{
              color: "var(--cor-principal)",
            }}
          >
            {cliente}
          </h4>
          <p
            className="mb-1"
            style={{
              fontSize: "13px",
              fontWeight: "400",
              color: "#718096",
            }}
          >
            {local}
          </p>
          <p
            className="mb-1"
            style={{
              fontSize: "13px",
              fontWeight: "400",
              color: "#718096",
            }}
          >
            {modelo}
          </p>
        </div>

        <div
          className="mt-auto d-flex justify-content-between align-items-start"
          style={{
            borderTop: "1px solid #e2e8f0",
            paddingTop: "12px",
            gap: "10px",
          }}
        >
          <div className="d-flex align-items-center gap-2">
            <FaRegCalendarAlt
              className="fs-6"
              style={{
                color: "var(--cor-principal)",
              }}
            />
            <div className="d-flex flex-column">
              <span
                className="text-uppercase"
                style={{
                  fontSize: "10px",
                  color: "var(--cor-principal)",
                }}
              >
                Última atualização
              </span>
              <span
                className="fw-semibold"
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#4a5568",
                }}
              >
                {ultimaAtualizacao}
              </span>
            </div>
          </div>
          <div
            className="d-flex align-items-center gap-2"
            style={{
              marginBottom: "10px",
            }}
          >
            <FaUser
              className="fs-6"
              style={{
                color: "var(--cor-principal)",
              }}
            />
            <div className="d-flex flex-column">
              <span
                className="text-uppercase"
                style={{
                  fontSize: "10px",
                  color: "var(--cor-principal)",
                }}
              >
                Resp. Comercial
              </span>
              <span
                className="fw-semibold"
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#4a5568",
                }}
              >
                {responsavel.nome}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Link
        to={`/instalacoes/detalhes/${contractId}`}
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
        VER DETALHES DO CONTRATO
      </Link>
    </div>
  );
}
