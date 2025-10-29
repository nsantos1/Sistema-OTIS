import React from "react";

export default function Observacao() {
  return (
    <div
      className="shadow-sm rounded-3"
      style={{ flex: 1, border: "1px solid #e1e6ef" }}
    >
      <h3
        className="m-0 rounded-top-3 px-3 fw-bolder fs-5 text-uppercase"
        style={{
          padding: "12px 0",
          background: "#f3f6fb",
          color: "#0A2344",
        }}
      >
        OBSERVAÇÕES
      </h3>
      <div className="table-responsive rounded-bottom-3">
        <table className="table mb-0">
          <thead>
            <tr
              style={{
                background: "#f9fafc",
                borderBottom: "1px solid #e1e6ef",
              }}
            >
              <th
                className="fw-bold"
                style={{
                  padding: "10px 14px",
                  fontSize: "18px",
                  color: "#0a2344",
                }}
              >
                Título
              </th>
              <th
                className="fw-bold"
                style={{
                  padding: "10px 14px",
                  fontSize: "18px",
                  color: "#0a2344",
                }}
              >
                Autor
              </th>
              <th
                className="fw-bold"
                style={{
                  padding: "10px 14px",
                  fontSize: "18px",
                  color: "#0a2344",
                }}
              >
                Data
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid #f0f2f6" }}>
              <td className="fs-6" style={{ padding: "10px 14px" }}>
                Responsabilidades
              </td>
              <td className="fs-6" style={{ padding: "10px 14px" }}>
                João Ricardo S. O. Coto
              </td>
              <td className="fs-6" style={{ padding: "10px 14px" }}>
                28/08/2025
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #f0f2f6" }}>
              <td className="fs-6" style={{ padding: "10px 14px" }}>
                Condições de pagamento
              </td>
              <td className="fs-6" style={{ padding: "10px 14px" }}>
                João Ricardo S. O. Coto
              </td>
              <td className="fs-6" style={{ padding: "10px 14px" }}>
                28/08/2025
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #f0f2f6" }}>
              <td className="fs-6" style={{ padding: "10px 14px" }}>
                Prazos de entrega
              </td>
              <td className="fs-6" style={{ padding: "10px 14px" }}>
                João Ricardo S. O. Coto
              </td>
              <td className="fs-6" style={{ padding: "10px 14px" }}>
                28/08/2025
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
