// src/components/filtrodeperiodo/Periodfilter.jsx

import React, { useState, useEffect } from 'react';
import '../../pages/dashboard/dashboard.css'; // ✅ Caminho correto

const PeriodFilter = ({ period = {}, setPeriod = () => {} }) => {
  const today = new Date().toISOString().split('T')[0];
  const [error, setError] = useState('');

  // Valores padrão seguros
  const startDate = period.startDate || '';
  const endDate = period.endDate || '';

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setPeriod((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (startDate && endDate && startDate > endDate) {
      setError('A data inicial não pode ser posterior à data final.');
    } else {
      setError('');
    }
  }, [startDate, endDate]);

  return (
    <div className="period-filter-container">
      <div className="filter-group">
        <label htmlFor="startDate">Data Inicial:</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={startDate}
          onChange={handleInputChange}
          className={`filter-input ${error ? 'input-error' : ''}`}
          max={endDate && endDate > today ? today : endDate || today}
        />
      </div>

      <div className="filter-group">
        <label htmlFor="endDate">Data Final:</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={endDate}
          onChange={handleInputChange}
          className={`filter-input ${error ? 'input-error' : ''}`}
          min={startDate || ''}
          max={today}
        />
      </div>

      {error && <p className="filter-error-message">{error}</p>}
    </div>
  );
};

export default PeriodFilter;
