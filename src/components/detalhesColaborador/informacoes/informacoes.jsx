import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaCalendarAlt,
} from "react-icons/fa";

export default function Informacoes() {
  const labelStyle = { fontWeight: 600, marginBottom: "2px", color: "#2d3e50" };

  return (
    <div
      className="bg-white rounded-3"
      style={{
        padding: "18px",
        border: "1px solid #d3d9e3",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.05)",
      }}
    >
      <h3
        className="fs-6 fw-bold"
        style={{
          color: "#0a2344",
          marginBottom: "14px",
        }}
      >
        INFORMAÇÕES
      </h3>
      <ul className="list-unstyled d-flex flex-column gap-3 m-0">
        <li className="d-flex align-items-start gap-2">
          <FaMapMarkerAlt
            className="fs-5"
            style={{
              color: "#0a2344",
            }}
          />
          <div>
            <p style={labelStyle}>Local de trabalho</p>
            <span>São Bernardo do Campo - SP/BR</span>
          </div>
        </li>
        <li className="d-flex align-items-start gap-2">
          <FaPhoneAlt
            className="fs-5"
            style={{
              color: "#0a2344",
            }}
          />
          <div>
            <p style={labelStyle}>Contato</p>
            <span>Tel: (69) 98112-3101</span>
            <br />
            <span>Email: exemplo@otis.com</span>
          </div>
        </li>
        <li className="d-flex align-items-start gap-2">
          <FaClock
            className="fs-5"
            style={{
              color: "#0a2344",
            }}
          />
          <div>
            <p style={labelStyle}>Horário de trabalho</p>
            <span>08:00 - 18:00</span>
          </div>
        </li>
        <li className="d-flex align-items-start gap-2">
          <FaCalendarAlt
            className="fs-5"
            style={{
              color: "#0a2344",
            }}
          />
          <div>
            <p style={labelStyle}>Data de admissão</p>
            <span>02 de Setembro de 2025</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
