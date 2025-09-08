import "./cardColaborador.css";

export default function CardColaborador({
  id,
  nome,
  status,
  cargo,
  setor,
  supervisor,
  avatarUrl,
}) {
  const statusClass = status ? status.toLowerCase().replace(' ', '-') : '';

  return (
    <article className="card-colaborador">
      <div className="card-header-colaborador">
        <span className="colaborador-id">{id}</span>
        <div className="card-perfil">
          <img
            src={avatarUrl}
            alt={`Foto de perfil de ${nome}`}
          />
        </div>
      </div>

      <div className="card-conteudo">
        <h2 className="nome-colaborador">{nome}</h2>
        <span className={`status ${statusClass}`}>{status}</span>
        <ul className="info-colaborador">
          <li>
            <strong>Cargo:</strong> {cargo}
          </li>
          <li>
            <strong>Setor:</strong> {setor}
          </li>
          <li>
            <strong>Supervisor:</strong> {supervisor}
          </li>
        </ul>
        <a href="#" className="btn-detalhes">
          VER DETALHES
        </a>
      </div>
    </article>
  );
}