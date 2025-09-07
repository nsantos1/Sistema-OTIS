import React from "react";
import "./historico.css";

export default function Historico() {
  return (
    <div className="historico-card">
      <h3>HISTÓRICO DE ATIVIDADES</h3>
      <ul>
        <li><b>03 de setembro de 2025</b> - Bateu o ponto (17:59)</li>
        <li>Alterou o status do chamado #CT-0921 (14:21)</li>
        <li>Bateu o ponto (08:03)</li>
        <li><b>02 de setembro de 2025</b> - Finalizou o chamado #CT-0921 (11:32)</li>
      </ul>
    </div>
  );
}
