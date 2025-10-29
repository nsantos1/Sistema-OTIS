import React from "react";

export default function AcoesRapidas() {
  const acoes = [
    "💬 Abrir uma conversa",
    "➕ Adicionar treinamento",
    "⏱ Registrar horas extras",
    "⚠ Abrir advertência",
  ];

  return (
    <div
      className="p-3 bg-white rounded-3"
      style={{
        border: "1px solid #d3d9e3",
        boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
      }}
    >
      <h3 className="fw-bold mb-3 fs-6" style={{ color: "#0a2344" }}>
        AÇÕES RÁPIDAS
      </h3>
      <ul className="list-unstyled d-flex flex-column gap-2 m-0 p-0">
        {acoes.map((acao, index) => (
          <li
            key={index}
            className="fw-semibold rounded px-2 py-1"
            style={{ cursor: "pointer" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#f3f5f9")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            {acao}
          </li>
        ))}
      </ul>
    </div>
  );
}
