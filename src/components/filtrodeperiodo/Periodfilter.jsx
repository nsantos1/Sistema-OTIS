// src/components/filtrodeperiodo/Periodfilter.jsx

import React from 'react';
import '../../pages/dashboard/dashboard.css'; // ✅ Caminho correto

// Props esperadas: months (lista de opções), selectedMonth (valor atual), 
// e onChangeMonth (função para atualizar o estado no componente pai).
const PeriodFilter = ({ 
  months = [], 
  selectedMonth = '', 
  onChangeMonth = () => {} 
}) => {
  
  const handleSelectChange = (e) => {
    // Chama a função de atualização de estado passada pelo Dashboard
    onChangeMonth(e.target.value);
  };

  return (
    <div className="period-filter-container">
      <div className="filter-group">
        <label htmlFor="selectMonth">Período:</label>
        <select
          id="selectMonth"
          name="selectMonth"
          value={selectedMonth}
          onChange={handleSelectChange}
          className="filter-select"
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