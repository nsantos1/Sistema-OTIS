import { FaRegCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function CardClientes({ id, nome, desde, local, stats }) {
  const [hover, setHover] = useState(false);

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
      <div className="text-center mb-3">
        <h2
          className="fw-bold mb-1"
          style={{
            color: "var(--cor-principal)",
            fontSize: "22px",
          }}
        >
          {nome}
        </h2>
        <span
          className="fw-semibold"
          style={{
            fontSize: "12px",
            color: "#718096",
          }}
        >
          {id}
        </span>
      </div>

      <div
        className="d-flex flex-column"
        style={{
          borderTop: "1px solid #e2e8f0",
          borderBottom: "1px solid #e2e8f0",
          padding: "15px 0",
          marginBottom: "15px",
          gap: "10px",
        }}
      >
        <div
          className="d-flex align-items-center gap-2 fw-semibold"
          style={{
            fontSize: "14px",
            color: "var(--cor-terciaria)",
          }}
        >
          <FaRegCalendarAlt />
          <span>
            Cliente desde:{" "}
            <strong
              className="fw-semibold"
              style={{
                color: "var(--cor-principal)",
              }}
            >
              {desde}
            </strong>
          </span>
        </div>
        <div
          className="d-flex align-items-center gap-2 fw-semibold"
          style={{
            fontSize: "14px",
            color: "var(--cor-terciaria)",
          }}
        >
          <FaMapMarkerAlt />
          <span
            className="fw-semibold"
            style={{
              color: "var(--cor-principal)",
            }}
          >
            {local}
          </span>
        </div>
      </div>

      <div
        className="d-flex justify-content-around text-center"
        style={{
          marginBottom: "20px",
        }}
      >
        {stats.map((stat, index) => (
          <div className="d-flex flex-column align-items-center" key={index}>
            <stat.icon
              className="fs-4 mb-2"
              style={{
                color: "var(--cor-principal)",
              }}
            />
            <span
              className="fw-bold"
              style={{
                fontSize: "20px",
                color: "var(--cor-principal)",
              }}
            >
              {stat.valor}
            </span>
            <span
              className="fw-semibold"
              style={{
                fontSize: "12px",
                color: "var(--cor-terciaria)",
              }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      <Link
        to={`/vendas/cliente/${id.replace("#", "")}`}
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
        VER DETALHES DO CLIENTE
      </Link>
    </div>
  );
}
