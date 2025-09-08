import { FaRegCalendarAlt, FaUser } from "react-icons/fa";
import "./cardContratos.css";

export default function CardContratos({ id, status, statusType, cliente, local, modelo, ultimaAtualizacao, responsavel, imagemUrl }) {
  
  const statusClassName = `status-tag ${statusType || ''}`;

  return (
    <div className="card-contrato-final">
      <img
        src={imagemUrl}
        alt={`Elevador para ${cliente}`}
        className="card-img"
      />
      <div className="card-content">
        <div className="card-header">
          <span className="contract-id">{id}</span>
          <span className={statusClassName}>{status}</span>
        </div>

        <div className="card-body">
          <h4 className="company-name">{cliente}</h4>
          <p className="location">{local}</p>
          <p className="elevator-model">{modelo}</p>
        </div>

        <div className="card-info-footer">
          <div className="info-item">
            <FaRegCalendarAlt className="info-icon" />
            <div>
              <span className="info-label">Última atualização</span>
              <span className="info-value">{ultimaAtualizacao}</span>
            </div>
          </div>
          <div className="info-item">
            <FaUser className="info-icon" />
            <div>
              <span className="info-label">Resp. Comercial</span>
              <span className="info-value">{responsavel.nome}</span>
            </div>
          </div>
        </div>
      </div>
      <button className="details-button-dark">VER DETALHES DO CONTRATO</button>
    </div>
  );
}