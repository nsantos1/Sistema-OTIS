import { useParams, Link } from "react-router-dom";
import Sidebar from "../../components/menuPrincipalLateral/menuPrincipalLateral";
import { vendasData } from "../../assets/data/vendasData";
import "./detalhesCliente.css";
import { FaShoppingCart, FaHardHat, FaUsers } from "react-icons/fa";

export default function DetalhesCliente() {
  const { id } = useParams();
  const cliente = vendasData.clientes.find(
    (c) => c.id === `#${id}`
  );

  if (!cliente) {
    return (
      <main className="main-vendas">
        <Sidebar />
        <div className="detalhes-container">
          <h1>Cliente não encontrado</h1>
          <Link to="/vendas">Voltar para Vendas</Link>
        </div>
      </main>
    );
  }

  const ICONS = {
    Pedidos: FaShoppingCart,
    Instalações: FaHardHat,
    Contratos: FaUsers,
  };

  return (
    <main className="main-vendas">
      <Sidebar />
      <div className="detalhes-container">
        <div className="detalhes-header">
          <h1>Detalhes do Cliente: {cliente.nome}</h1>
          <Link to="/vendas" className="btn-voltar">
            Voltar
          </Link>
        </div>
        <div className="detalhes-card">
          <p>
            <strong>ID:</strong> {cliente.id}
          </p>
          <p>
            <strong>Cliente desde:</strong> {cliente.desde}
          </p>
          <p>
            <strong>Localização:</strong> {cliente.local}
          </p>
          <div className="cliente-stats-detalhes">
            <h3>Estatísticas</h3>
            <div className="stats-grid">
              {cliente.stats.map((stat, index) => {
                const Icon = ICONS[stat.label];
                return (
                  <div className="stat-item-detalhes" key={index}>
                    <Icon className="stat-icon-detalhes" />
                    <span className="stat-value-detalhes">{stat.valor}</span>
                    <span className="stat-label-detalhes">{stat.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}