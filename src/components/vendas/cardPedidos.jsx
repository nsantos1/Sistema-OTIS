import { FaRegCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./cardPedidos.css";
import { Link } from "react-router-dom";

export default function CardPedidos({
  id,
  status,
  statusType,
  cliente,
  ultimaAtualizacao,
  responsavel,
  data,
  local,
}) {
  const statusClass = `status-tag-pedido ${statusType || "default"}`;
  const pedidoId = id.replace("#PD-", ""); // Corrige o ID para a URL

  return (
    <div className="card-pedido-vendas">
      <div className="card-pedido-header">
        <span className="pedido-id">{id}</span>
        <span className={statusClass}>{status}</span>
      </div>

      <div className="card-pedido-body">
        <h2 className="cliente-nome">{cliente}</h2>
        <span className="atualizacao">
          Última atualização: {ultimaAtualizacao}
        </span>
      </div>

      <hr className="card-divider" />

      <div className="card-pedido-footer">
        <div className="responsavel-info">
          <div className="responsavel-avatar">{responsavel.inicial}</div>
          <div>
            <span className="responsavel-nome">{responsavel.nome}</span>
            <span className="responsavel-cliente">{cliente}</span>
          </div>
        </div>
        <div className="pedido-details">
          <div className="detail-item">
            <FaRegCalendarAlt />
            <span>{data}</span>
          </div>
          <div className="detail-item">
            <FaMapMarkerAlt />
            <span>{local}</span>
          </div>
        </div>
      </div>
      <Link to={`/vendas/pedido/${pedidoId}`} className="details-button">
        VER DETALHES DO PEDIDO
      </Link>
    </div>
  );
}