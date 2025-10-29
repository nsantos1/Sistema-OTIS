import React from "react";

function InsightCard({ value, label, icon: Icon }) {
  return (
    <div
      className="bg-white d-flex align-items-center gap-3"
      style={{
        borderRadius: "12px",
        border: "1px solid #e2e8f0",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        padding: "20px",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
    >
      <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{
        backgroundColor: "var(--cor-principal-transparente)",
        color: "var(--cor-principal)",
        width: "50px",
        height: "50px"
      }}>
        <Icon size={24} />
      </div>
      <div className="d-flex flex-column">
        <div className="fw-bolder fs-3" style={{
          color: "var(--cor-principal)"
        }}>{value}</div>
        <div className="fw-semibold" style={{
          fontSize: "14px",
          color: "var(--cor-terciaria)"
        }}>{label}</div>
      </div>
    </div>
  );
}

export default InsightCard;
