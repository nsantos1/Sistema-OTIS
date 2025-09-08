import "./cardPedidos.css";

export default function CardPedidos() {
  return (
    <div className="card-pedido-vendas">
      <div className="id-card-pedido-vendas">
        <span className="id-pedido">#CT-0921</span>
        <span className="status-pedido">Pendente</span>
      </div>

      <div className="titulo-pedido-vendas">
        <h2>Construtora Maston</h2>
        <span>
          Última atualização: <br />
          03/04/2025
        </span>
      </div>

      <hr />

      <div className="info-card-pedido-vendas">
        <div className="info-cliente-pedido-vendas">
          <h3>J</h3>
          <div>
            <h4>João Ricardo</h4>
            <p>Construtora Maston</p>
          </div>
        </div>
        <div>
          <div className="data-card-pedido-vendas">
            <img src="src/assets/img/today.svg" alt="" />
            <span>27/08/2025</span>
          </div>
          <div className="local-card-pedido-vendas">
            <img src="src/assets/img/location_on.svg" alt="" />
            <span>São Paulo/SP</span>
          </div>
        </div>
      </div>
      <a href="#">VER DETALHES DO PEDIDO</a>
    </div>
  );
}
