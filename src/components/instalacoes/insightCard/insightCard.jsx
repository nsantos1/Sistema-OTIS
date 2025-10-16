import React from 'react';
import './insightCard.css';

function InsightCard({ value, label, icon: Icon }) {
  return (
    <div className="insight-card">
      <div className="insight-card-icon">
        <Icon size={24} />
      </div>
      <div className="insight-card-content">
        <div className="insight-card-value">{value}</div>
        <div className="insight-card-label">{label}</div>
      </div>
    </div>
  );
}

export default InsightCard;
