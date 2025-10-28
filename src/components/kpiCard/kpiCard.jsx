import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import "./kpiCard.css";

function KpiCard({ title, subtitle, value, unit, percentage }) {
  const isPositive = percentage && percentage > 0;
  const percentageClass = isPositive ? "positive" : "negative";

  return (
    <div
      className="bg-white rounded-3"
      style={{
        padding: "20px",
        border: "1px solid #e2e8f0",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className=""
        style={{
          marginBottom: "10px",
        }}
      >
        <h2
          className="fs-6 fw-semibold m-0"
          style={{
            color: "var(--cor-terciaria)",
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <span
            className="kpi-subtitle"
            style={{
              fontSize: "12px",
              color: "var(--cinza)",
            }}
          >
            {subtitle}
          </span>
        )}
      </div>
      <div className="d-flex align-items-baseline gap-2">
        <span
          className="fw-bolder"
          style={{
            fontSize: "36px",
            color: "var(--cor-principal)",
          }}
        >
          {value}
        </span>
        {unit && (
          <span
            className="fs-4 fw-semibold"
            style={{
              color: "var(--cor-terciaria)",
            }}
          >
            {unit}
          </span>
        )}
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
