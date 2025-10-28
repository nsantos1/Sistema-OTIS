import React from "react";

export default function Treinamentos() {
  return (
    <div className="card p-3 mb-3" style={{ backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.05)", overflowX: "auto" }}>
      <h3 className="mb-3" style={{ fontSize: "16px", fontWeight: 800, color: "#0a2344" }}>
        TREINAMENTO E CERTIFICAÇÕES
      </h3>
      <table className="table mb-0">
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
            <td>
              <span 
                className="badge" 
                style={{ backgroundColor: "#d9534f", fontWeight: 700, fontSize: "12px", borderRadius: "6px" }}
              >
                A FAZER
              </span>
            </td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Manutenção preventiva</td>
            <td>
              <span 
                className="badge" 
                style={{ backgroundColor: "#f0ad4e", fontWeight: 700, fontSize: "12px", borderRadius: "6px" }}
              >
                EM ANDAMENTO
              </span>
            </td>
            <td>03/09/2025</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Mecânica industrial</td>
            <td>
              <span 
                className="badge" 
                style={{ backgroundColor: "#5cb85c", fontWeight: 700, fontSize: "12px", borderRadius: "6px" }}
              >
                CONCLUÍDO
              </span>
            </td>
            <td>03/09/2025</td>
            <td>03/09/2025</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
