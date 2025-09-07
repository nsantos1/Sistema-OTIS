import "./cardColaborador.css";

export default function CardColaborador({
  id,
  nome,
  status,
  cargo,
  setor,
  supervisor,
}) {
  return (
    <article class="card-colaborador">
      <span class="colaborador-id">{id}</span>
      <div class="card-capa">
        <img
          src="/src/assets/img/image 13.svg"
          alt="Foto de João Ricardo, Operário da Fábrica"
        />
      </div>
      <div class="card-perfil">
        <img
          src="/src/assets/img/image 13.svg"
          alt="Foto de perfil de João Ricardo"
        />
      </div>
      <div class="card-conteudo">
        <h2 class="nome-colaborador">{nome}</h2>
        <span class="status">{status}</span>
        <ul class="info-colaborador">
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
        <a href="#" class="btn-detalhes">
          VER DETALHES
        </a>
      </div>
    </article>
  );
}
