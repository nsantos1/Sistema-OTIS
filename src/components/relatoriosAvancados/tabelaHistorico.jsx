import React from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import "./tabelaHistorico.css";

// Função para formatar a data
const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export default function TabelaHistorico({
  history,
  onSelectReport,
  onDeleteReport,
}) {
  if (!history || history.length === 0) {
    return (
      <div
        className="bg-white rounded-3"
        style={{
          padding: "25px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
          border: "1px solid #e2e8f0",
          marginBottom: "30px",
        }}
      >
        <div
          className="text-center"
          style={{
            padding: "40px",
            color: "#a0aec0",
          }}
        >
          <p>
            Nenhum relatório foi gerado ainda. Comece a criar relatórios para
            vê-los aqui.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-white rounded-3"
      style={{
        padding: "25px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        border: "1px solid #e2e8f0",
        marginBottom: "30px",
      }}
    >
      <h2
        className="fw-bold"
        style={{
          fontSize: "18px",
          color: "var(--cor-principal)",
          marginBottom: "20px",
        }}
      >
        Histórico de Relatórios Gerados
      </h2>
      <div className="overflow-x-auto">
        <table
          className="history-table w-100"
          style={{
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th
                className="text-start fw-semibold"
                style={{
                  color: "var(--cor-terciaria)",
                  backgroundColor: "#f7fafc",
                  padding: "12px 15px",
                  fontSize: "14px",
                  borderBottom: "1px solid #e2e8f0",
                }}
              >
                Data de Criação
              </th>
              <th
                className="text-start fw-semibold"
                style={{
                  color: "var(--cor-terciaria)",
                  backgroundColor: "#f7fafc",
                  padding: "12px 15px",
                  fontSize: "14px",
                  borderBottom: "1px solid #e2e8f0",
                }}
              >
                Solicitação
              </th>
              <th
                className="text-start fw-semibold"
                style={{
                  color: "var(--cor-terciaria)",
                  backgroundColor: "#f7fafc",
                  padding: "12px 15px",
                  fontSize: "14px",
                  borderBottom: "1px solid #e2e8f0",
                }}
              >
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {history.map((item) => (
              <tr key={item.id}>
                <td
                  className="text-start"
                  style={{
                    color: "#2d3748",
                    padding: "12px 15px",
                    fontSize: "14px",
                    borderBottom: "1px solid #e2e8f0",
                  }}
                >
                  {formatDate(item.id)}
                </td>
                <td
                  className="text-start"
                  style={{
                    color: "#2d3748",
                    padding: "12px 15px",
                    fontSize: "14px",
                    borderBottom: "1px solid #e2e8f0",
                  }}
                >
                  {item.prompt}
                </td>
                <td
                  className="text-start"
                  style={{
                    color: "#2d3748",
                    padding: "12px 15px",
                    fontSize: "14px",
                    borderBottom: "1px solid #e2e8f0",
                  }}
                >
                  <div
                    className="d-flex"
                    style={{
                      gap: "10px",
                    }}
                  >
                    <button
                      className="action-button view d-inline-flex align-items-center border-0 fw-bold cursor-pointer"
                      style={{
                        gap: "6px",
                        padding: "6px 12px",
                        borderRadius: "6px",
                        fontSize: "12px",
                        transition: "background-color 0.2s, transform 0.1s",
                      }}
                      onClick={() => onSelectReport(item)}
                      title="Visualizar Relatório"
                    >
                      <FaEye />
                      Visualizar
                    </button>
                    <button
                      className="action-button delete d-inline-flex align-items-center border-0 fw-bold cursor-pointer"
                      style={{
                        gap: "6px",
                        padding: "6px 12px",
                        borderRadius: "6px",
                        fontSize: "12px",
                        transition: "background-color 0.2s, transform 0.1s",
                      }}
                      onClick={() => onDeleteReport(item.id)}
                      title="Excluir Relatório"
                    >
                      <FaTrash />
                      Excluir
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
