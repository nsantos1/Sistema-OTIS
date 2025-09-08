import './cartaoDeContrato.css';
import { FaRegCalendarAlt, FaUser } from "react-icons/fa"; 
import { Link } from "react-router-dom";

function CartaoDeContrato(props) {
  const { id, company, location, lastUpdate, status, statusType, elevatorModel, salesRep, imageUrl } = props;

  const statusClassName = `status-tag ${statusType || ''}`;

  return (
    <div className="card-contrato-final">
      <img src={imageUrl} alt={`Elevador para ${company}`} className="card-img" />
      <div className="card-content">
        <div className="card-header">
          <span className="contract-id">{id}</span>
          <span className={statusClassName}>{status}</span>
        </div>
        
        <div className="card-body">
          <h4 className="company-name">{company}</h4>
          <p className="location">{location}</p>
          <p className="elevator-model">{elevatorModel}</p>
        </div>

        <div className="card-info-footer">
          <div className="info-item">
            <FaRegCalendarAlt className="info-icon" />
            <div>
              <span className="info-label">Última atualização</span>
              <span className="info-value">{lastUpdate}</span>
            </div>
          </div>
          <div className="info-item">
            <FaUser className="info-icon" />
            <div>
              <span className="info-label">Resp. Comercial</span>
              <span className="info-value">{salesRep}</span>
            </div>
          </div>
        </div>
      </div>
      <Link to="/instalacoes/detalhes" className="details-button-dark">VER DETALHES DO CONTRATO</Link>
    </div>
  );
}

export default CartaoDeContrato;