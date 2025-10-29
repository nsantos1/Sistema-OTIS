import React from "react";

export default function Feedbacks() {
  return (
    <div
      className="p-3 rounded shadow-sm bg-white"
      style={{ border: "1px solid #d3d9e3" }}
    >
      <h3
        className="fw-bold mb-3 fs-6"
        style={{ color: "#0a2344" }}
      >
        FEEDBACKS
      </h3>

      <div className="p-3 rounded" style={{ backgroundColor: "#f5f7fa" }}>
        <div className="d-flex align-items-center mb-2">
          <span className="fw-bold" style={{ color: "#0a2344" }}>
            João Ricardo
          </span>
          <span className="ms-2" style={{ fontSize: "12px", color: "#6b7b91" }}>
            29/08/2025 - 13:21h
          </span>
        </div>
        <p className="mb-0" style={{ fontSize: "14px", color: "#333" }}>
          Atendimento rápido e eficiente, excelente desempenho
        </p>
      </div>
    </div>
  );
}
