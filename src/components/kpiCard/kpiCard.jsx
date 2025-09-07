import React from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import './kpiCard.css';

function KpiCard({ title, subtitle, value, unit, percentage }) {
  const isPositive = percentage && percentage > 0;
  const percentageClass = isPositive ? 'positive' : 'negative';

  return (
    <div className="kpi-card">
      <div className="kpi-card-header">
        <h2 className="kpi-title">{title}</h2>
        {subtitle && <span className="kpi-subtitle">{subtitle}</span>}
      </div>
      <div className="kpi-body">
        <span className="kpi-value">{value}</span>
        {unit && <span className="kpi-unit">{unit}</span>}
        {percentage && (
          <div className={`kpi-percentage ${percentageClass}`}>
            {isPositive ? <FaArrowUp /> : <FaArrowDown />}
            <span>{Math.abs(percentage)}%</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default KpiCard;