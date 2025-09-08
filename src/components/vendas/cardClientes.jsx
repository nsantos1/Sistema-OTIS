import { FaRegCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./cardClientes.css";

export default function CardClientes({ id, nome, desde, local, stats }) {
  return (
    <div className="card-cliente-vendas">
      <div className="cliente-header">
        <h2 className="cliente-nome-vendas">{nome}</h2>
        <span className="cliente-id">{id}</span>
      </div>
      
      <div className="cliente-info">
        <div className="info-line">
          <FaRegCalendarAlt />
          <span>Cliente desde: <strong>{desde}</strong></span>
        </div>
        <div className="info-line">
          <FaMapMarkerAlt />
          <span>{local}</span>
        </div>
      </div>

      <div className="cliente-stats">
        {stats.map((stat, index) => (
          <div className="stat-item" key={index}>
            <stat.icon className="stat-icon"/>
            <span className="stat-value">{stat.valor}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      <a href="#" className="details-button-cliente">VER DETALHES DO CLIENTE</a>
    </div>
  );
}