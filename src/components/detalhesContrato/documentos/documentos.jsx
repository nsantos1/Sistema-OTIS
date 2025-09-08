import React from "react";
import "./documentos.css";

export default function Documentos() {
  return (
    <div className="documentos">
      <h3>DOCUMENTOS</h3>
      <table>
        <thead>
          <tr>
            <th>Nome do arquivo</th>
            <th>Autor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Contrato.pdf</td>
            <td>João Ricardo S. O. Coto</td>
          </tr>
          <tr>
            <td>Planta_obras.pdf</td>
            <td>João Ricardo S. O. Coto</td>
          </tr>
          <tr>
            <td>Relatório_fabricação.pdf</td>
            <td>João Ricardo S. O. Coto</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
