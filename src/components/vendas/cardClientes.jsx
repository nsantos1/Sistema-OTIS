import "./cardClientes.css";

export default function CardClientes() {
  return (
    <div className="card-cliente-vendas">
      <div className="titulo-cliente-vendas">
        <h2>Construtora Maston</h2>
      </div>

      <hr />

      <div className="info-card-pedido-vendas">
        <div className="info-cliente-vendas">
          <span>Cliente desde:</span>
          <span>Localização:</span>
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
      <a href="#">VER DETALHES DO CLIENTE</a>
    </div>
  );
}
