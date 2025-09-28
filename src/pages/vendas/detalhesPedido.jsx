import { useParams, Link } from "react-router-dom";
import Sidebar from "../../components/menuPrincipalLateral/menuPrincipalLateral";
import { vendasData } from "../../assets/data/vendasData";
import "./detalhesPedido.css";

export default function DetalhesPedido() {
  const { id } = useParams();
  const pedido = vendasData.pedidos.find((p) => p.id === `#PD-${id}`);

  if (!pedido) {
    return (
      <main className="main-vendas">
        <Sidebar />
        <div className="detalhes-container">
          <h1>Pedido não encontrado</h1>
          <Link to="/vendas" className="btn-voltar">Voltar para Vendas</Link>
        </div>
      </main>
    );
  }

  const statusClass = `status-tag-detalhes status-${pedido.statusType}`;

  return (
    <main className="main-vendas">
      <Sidebar />
      <div className="detalhes-container">
        <div className="detalhes-header">
          <h1>Detalhes do Pedido: {pedido.id}</h1>
          <Link to="/vendas" className="btn-voltar">
            Voltar
          </Link>
        </div>
        <div className="detalhes-card-pedido">
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">Cliente</span>
              <span className="info-value">{pedido.cliente}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Status</span>
              <span className={statusClass}>{pedido.status}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Data do Pedido</span>
              <span className="info-value">{pedido.data}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Local</span>
              <span className="info-value">{pedido.local}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Responsável Comercial</span>
              <span className="info-value">{pedido.responsavel.nome}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Última Atualização</span>
              <span className="info-value">{pedido.ultimaAtualizacao}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}