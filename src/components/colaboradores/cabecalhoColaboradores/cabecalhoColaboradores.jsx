import "./cabecalhoColaboradores.css";

export default function CabecalhoColaboradores({
  btFunc,
  totalColaboradores,
  colaboradoresAtivos,
  colaboradoresTreinamento,
  colaboradoresInativos,
}) {
  return (
    <div className="cabecalho-colaboradores">
      <div className="cabecalho-colaboradores-linha-1">
        <h1>Gestão de colaboradores</h1>
        <hr />
        <button onClick={btFunc}>NOVO COLABORADOR</button>
      </div>
      <div className="cabecalho-colaboradores-linha-2">
        <ul className="status-colaboradores">
          <li>Total: {totalColaboradores}</li>
          <hr />
          <li>Ativos: {colaboradoresAtivos}</li>
          <hr />
          <li>Em treinamento: {colaboradoresTreinamento}</li>
          <hr />
          <li>Inativos: {colaboradoresInativos}</li>
        </ul>
      </div>
    </div>
  );
}
