import React from "react";
import "./observacao.css";

export default function Observacao() {
  return (
    <div className="observacoes">
      <h3>OBSERVAÇÕES</h3>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Responsabilidades</td>
            <td>João Ricardo S. O. Coto</td>
            <td>28/08/2025</td>
          </tr>
          <tr>
            <td>Condições de Pagamento</td>
            <td>João Ricardo S. O. Coto</td>
            <td>28/08/2025</td>
          </tr>
          <tr>
            <td>Prazos de Entrega</td>
            <td>João Ricardo S. O. Coto</td>
            <td>28/08/2025</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
