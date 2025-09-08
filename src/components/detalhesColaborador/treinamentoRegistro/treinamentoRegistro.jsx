import React from "react";
import "./treinamentoRegistro.css";

export default function Treinamentos() {
  return (
    <div className="treino-card">
      <h3>TREINAMENTO E CERTIFICAÇÕES</h3>
      <table>
        <thead>
          <tr>
            <th>Nome do certificado</th>
            <th>Status</th>
            <th>Data de início</th>
            <th>Data de conclusão</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Soldagem Básica e Avançada</td>
            <td><span className="status fazer">A FAZER</span></td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Manutenção preventiva</td>
            <td><span className="status andamento">EM ANDAMENTO</span></td>
            <td>03/09/2025</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Mecânica industrial</td>
            <td><span className="status concluido">CONCLUÍDO</span></td>
            <td>03/09/2025</td>
            <td>03/09/2025</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
