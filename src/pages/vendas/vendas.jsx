import Sidebar from "../../components/menuPrincipalLateral/menuPrincipalLateral";
import { Link } from "react-router-dom";
import "./vendas.css";
import CardPedidos from "../../components/vendas/cardPedidos";
import CardContratos from "../../components/vendas/cardContratos";
import CardClientes from "../../components/vendas/cardClientes";

export default function Vendas() {
  return (
    <main className="main-vendas">
      <Sidebar />
      <div className="vendas-conteudo-principal">
        <div className="vendas-secao-pedidos-container">
          <div className="cabecalho-vendas">
            <div className="cabecalho-colaboradores-linha-1">
              <h1>Pedidos</h1>
              <hr />
              <button>Ver todos</button>
            </div>
          </div>
          <div className="vendas-secao-pedidos">
            <CardPedidos />
            <CardPedidos />
            <CardPedidos />
            <CardPedidos />
          </div>
        </div>

        <div className="vendas-secao-contratos-container">
          <div className="cabecalho-vendas">
            <div className="cabecalho-colaboradores-linha-1">
              <h1>Contratos</h1>
              <hr />
              <button>Ver todos</button>
            </div>
          </div>
          <div className="vendas-secao-contratos">
            <CardContratos />
            <CardContratos />
            <CardContratos />
            <CardContratos />
          </div>
        </div>

        <div className="vendas-secao-clientes-container">
          <div className="cabecalho-vendas">
            <div className="cabecalho-colaboradores-linha-1">
              <h1>Clientes</h1>
              <hr />
              <button>Ver todos</button>
            </div>
          </div>
          <div className="vendas-secao-clientes">
            <CardClientes />
            <CardClientes />
            <CardClientes />
            <CardClientes />
          </div>
        </div>
      </div>
    </main>
  );
}
