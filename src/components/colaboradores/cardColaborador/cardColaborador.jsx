import "./cardColaborador.css";
import { Link } from "react-router-dom";

export default function CardColaborador({
  id,
  nome,
  status,
  cargo,
  setor,
  supervisor,
  avatarUrl,
}) {
  const statusClass = status ? status.toLowerCase().replace(" ", "-") : "";

  return (
    <article
      className="d-flex flex-column bg-white rounded-3 position-relative"
      style={{
        border: "1px solid #e2e8f0",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        padding: "20px",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
    >
      <div
        className="d-flex flex-column align-items-center position-relative"
        style={{
          marginBottom: "15px",
        }}
      >
        <span
          className="position-absolute fw-bold py-1 px-2 rounded"
          style={{
            top: "-10px",
            right: "-10px",
            color: "var(--cor-terciaria)",
            fontSize: "0.7rem",
          }}
        >
          {id}
        </span>
        <div
          className="overflow-hidden mb-2"
          style={{
            width: "90px",
            height: "90px",
            border: "4px solid #e2e8f0",
            borderRadius: "50%",
            backgroundColor: "var(--cinza-claro)",
          }}
        >
          <img
            src={avatarUrl}
            alt={`Foto de perfil de ${nome}`}
            className="w-100 h-100 object-fit-cover"
          />
        </div>
      </div>

      <div className="d-flex flex-column flex-grow-1 text-center">
        <h2
          className="fs-6 fw-bold mb-2"
          style={{
            color: "var(--cor-principal)",
          }}
        >
          {nome}
        </h2>
        <span className={`status ${statusClass}`}>{status}</span>
        <ul className="list-unstyled p-0 text-start">
          <li
            className="mb-1 fw-semibold"
            style={{
              fontSize: "13px",
              color: "var(--cor-terciaria)",
            }}
          >
            <strong>Cargo:</strong> {cargo}
          </li>
          <li
            className="mb-1 fw-semibold"
            style={{
              fontSize: "13px",
              color: "var(--cor-terciaria)",
            }}
          >
            <strong>Setor:</strong> {setor}
          </li>
          <li
            className="mb-1 fw-semibold"
            style={{
              fontSize: "13px",
              color: "var(--cor-terciaria)",
            }}
          >
            <strong>Supervisor:</strong> {supervisor}
          </li>
        </ul>
        <Link
          to="/colaboradores/detalhes"
          className="mt-auto d-inline-block w-100 text-center text-white fw-bold text-decoration-none rounded-1"
          style={{
            backgroundColor: "var(--cor-principal)",
            fontSize: "12px",
            padding: "8px 0",
            transition: "background-color 0.2s"
          }}
        >
          VER DETALHES
        </Link>
      </div>
    </article>
  );
}
