import React from "react";
import "./feedback.css";

export default function Feedbacks() {
  return (
    <div className="feedback-card">
      <h3>FEEDBACKS</h3>
      <div className="feedback-item">
        <span className="autor">João Ricardo</span>
        <span className="data">29/08/2025 - 13:21h</span>
        <p className="texto">
          Atendimento rápido e eficiente, excelente desempenho
        </p>
      </div>
    </div>
  );
}
