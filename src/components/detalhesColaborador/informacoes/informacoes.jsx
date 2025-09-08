import React from "react";
import "./informacoes.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaCalendarAlt } from "react-icons/fa";

export default function Informacoes() {
  return (
    <div className="info-card">
      <h3 className="info-titulo">INFORMAÇÕES</h3>
      <ul>
        <li>
          <FaMapMarkerAlt className="icon" />
          <div>
            <p className="label">Local de trabalho</p>
            <span>São Bernardo do Campo - SP/BR</span>
          </div>
        </li>
        <li>
          <FaPhoneAlt className="icon" />
          <div>
            <p className="label">Contato</p>
            <span>Tel: (69) 98112-3101</span>
            <br />
            <span>Email: joaoricardosoc@gmail.com</span>
          </div>
        </li>
        <li>
          <FaClock className="icon" />
          <div>
            <p className="label">Horário de trabalho</p>
            <span>08:00 - 18:00</span>
          </div>
        </li>
        <li>
          <FaCalendarAlt className="icon" />
          <div>
            <p className="label">Data de admissão</p>
            <span>02 de Setembro de 2025</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
