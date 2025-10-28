import React from "react";

export default function Historico() {
  return (
    <div
      className="bg-white p-3 rounded shadow-sm"
      style={{
        border: "1px solid #d3d9e3",
        boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
      }}
    >
      <h3 className="fw-bold mb-3 fs-6" style={{ color: "#0a2344" }}>
        HISTÓRICO DE ATIVIDADES
      </h3>
      <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
        <li style={{ color: "#333", fontSize: "14px" }}>
          <b>03 de setembro de 2025</b> - Bateu o ponto (17:59)
        </li>
        <li style={{ color: "#333", fontSize: "14px" }}>
          Alterou o status do chamado #CT-0921 (14:21)
        </li>
        <li style={{ color: "#333", fontSize: "14px" }}>
          Bateu o ponto (08:03)
        </li>
        <li style={{ color: "#333", fontSize: "14px" }}>
          <b>02 de setembro de 2025</b> - Finalizou o chamado #CT-0921 (11:32)
        </li>
      </ul>
    </div>
  );
}
