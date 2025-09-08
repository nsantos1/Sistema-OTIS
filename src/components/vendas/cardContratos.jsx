import { FaRegCalendarAlt, FaUser } from "react-icons/fa";
import "./cardContratos.css";

export default function CardContratos() {
  return (
    <div className="card-contrato-final">
      <img
        src="/src/assets/img/image 3.png"
        alt={`Elevador para Construtora Maston`}
        className="card-img"
      />
      <div className="card-content">
        <div className="card-header">
          <span className="contract-id">#CT-0921</span>
          <span className="status-tag ontime">Dentro do prazo</span>
        </div>

        <div className="card-body">
          <h4 className="company-name">Construtora Maston</h4>
          <p className="location">São Paulo/SP - BR</p>
          <p className="elevator-model">Gen2® Comfort Panorâmico</p>
        </div>

        <div className="card-info-footer">
          <div className="info-item">
            <FaRegCalendarAlt className="info-icon" />
            <div>
              <span className="info-label">Última atualização</span>
              <span className="info-value">27/08/2025</span>
            </div>
          </div>
          <div className="info-item">
            <FaUser className="info-icon" />
            <div>
              <span className="info-label">Resp. Comercial</span>
              <span className="info-value">João Ric...</span>
            </div>
          </div>
        </div>
      </div>
      <button className="details-button-dark">VER DETALHES DO CONTRATO</button>
    </div>
  );
}
