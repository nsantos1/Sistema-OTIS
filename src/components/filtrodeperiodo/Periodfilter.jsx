// src/components/filtrodeperiodo/Periodfilter.jsx

import React from "react";
import "../../pages/dashboard/dashboard.css"; // ✅ Caminho correto

// Props esperadas: months (lista de opções), selectedMonth (valor atual),
// e onChangeMonth (função para atualizar o estado no componente pai).
const PeriodFilter = ({
  months = [],
  selectedMonth = "",
  onChangeMonth = () => {},
}) => {
  const handleSelectChange = (e) => {
    // Chama a função de atualização de estado passada pelo Dashboard
    onChangeMonth(e.target.value);
  };

  return (
    <div
      className="d-flex align-items-center"
      style={{
        gap: "15px",
      }}
    >
      <div className="d-flex flex-column align-items-start">

        <select
          id="selectMonth"
          name="selectMonth"
          value={selectedMonth}
          onChange={handleSelectChange}
          className="fs-6 fw-normal"
          style={{
            padding: "8px 12px",
            border: "1px solid var(--cinza-claro)",
            borderRadius: "6px",
            backgroundColor: "var(--cor-branca)",
            color: "var(--cor-principal)",
            transition: "all 0.2s ease-in-out",
            minWidth: "150px",
          }}
        >
          {/* Opção padrão/placeholder */}
          <option value="" disabled>
            Selecione um mês
          </option>

          {/* Mapeia a lista de meses */}
          {months.map((month) => (
            <option key={month.mes} value={month.mes}>
              {month.mesLabel}
            </option>
          ))}
        </select>
      </div>
      {/* O campo de erro foi removido, pois a seleção é restrita a opções válidas */}
    </div>
  );
};

export default PeriodFilter;
