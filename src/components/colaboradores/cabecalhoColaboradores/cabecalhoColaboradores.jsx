import "./cabecalhoColaboradores.css";

export default function CabecalhoColaboradores({ btFunc }) {
  return (
    <div className="cabecalho-colaboradores">
      <div className="cabecalho-colaboradores-linha-1">
        <h1>Gestão de colaboradores</h1>
        <hr />
        <button onClick={btFunc}>NOVO COLABORADOR</button>
      </div>
      <div className="cabecalho-colaboradores-linha-2">
        <ul>
          <li>Total: 128</li>
          <hr />
          <li>Ativos: 98</li>
          <hr />
          <li>Em treinamento: 30</li>
          <hr />
          <li>Inativos: 20</li>
        </ul>
      </div>
    </div>
  );
}
