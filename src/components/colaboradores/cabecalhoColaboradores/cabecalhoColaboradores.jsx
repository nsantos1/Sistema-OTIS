export default function CabecalhoColaboradores({
  btFunc,
  totalColaboradores,
  colaboradoresAtivos,
  colaboradoresTreinamento,
  colaboradoresInativos,
}) {
  return (
    <div className="d-flex flex-column gap-1 my-4">
      {/* Linha 1: Título + hr + botão */}
      <div className="d-flex align-items-center gap-3">
        <h1
          className="mb-0 fs-4 fw-semibold"
          style={{ color: "var(--cor-principal)" }}
        >
          Gestão de colaboradores
        </h1>
        <hr
          className="flex-grow-1 m-0 border-0"
          style={{ height: "1px", backgroundColor: "#cbd5e0" }}
        />
        <button
          className="btn fw-bold"
          style={{
            backgroundColor: "var(--cor-principal)",
            color: "var(--cor-branca)",
          }}
          onClick={btFunc}
        >
          NOVO COLABORADOR
        </button>
      </div>

      {/* Linha 2: status */}
      <div className="mt-2">
        <ul className="d-flex list-unstyled gap-2 m-0 align-items-center fw-semibold">
          <li style={{ color: "var(--cor-secundaria)" }}>
            Total: {totalColaboradores}
          </li>
          <hr
            className="mx-1 my-0 border-0"
            style={{ width: "1px", backgroundColor: "var(--cinza)" }}
          />
          <li style={{ color: "var(--cor-secundaria)" }}>
            Ativos: {colaboradoresAtivos}
          </li>
          <hr
            className="mx-1 my-0 border-0"
            style={{ width: "1px", backgroundColor: "var(--cinza)" }}
          />
          <li style={{ color: "var(--cor-secundaria)" }}>
            Em treinamento: {colaboradoresTreinamento}
          </li>
          <hr
            className="mx-1 my-0 border-0"
            style={{ width: "1px", backgroundColor: "var(--cinza)" }}
          />
          <li style={{ color: "var(--cor-secundaria)" }}>
            Inativos: {colaboradoresInativos}
          </li>
        </ul>
      </div>
    </div>
  );
}
