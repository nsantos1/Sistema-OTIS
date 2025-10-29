import FotoPerfil from "../../../assets/img/colaborador.svg";

export default function ColaboradorHeader() {
  return (
    <div
      className="d-flex justify-content-between align-items-center p-3 mb-3"
      style={{
        backgroundColor: "#f5f7fa",
        borderRadius: "10px",
      }}
    >
      {/* Parte esquerda: foto + infos */}
      <div className="d-flex align-items-center gap-3 object-fit-cover">
        <img
          src={FotoPerfil}
          alt="Foto do colaborador"
          className="rounded"
          style={{
            width: "90px",
            height: "90px",
          }}
        />
        <div className="d-flex flex-column fs-5 fw-bold">
          <span
            className="mb-1"
            style={{
              color: "#0A2344",
            }}
          >
            Colaborador #FO-303030
          </span>
          <h2
            className="mb-1 fs-4 fw-bolder"
            style={{
              color: "#0A2344",
            }}
          >
            João Ricardo S. O. Coto
          </h2>
          <p
            className="mb-1 fs-6 fw-semibold m-0"
            style={{
              color: "#2d3e50",
            }}
          >
            Operário
          </p>
          <p
            className="m-0 fs-6 fw-semibold"
            style={{
              color: "#6b7b91",
            }}
          >
            Fábrica
          </p>
        </div>
      </div>

      {/* Parte direita: ações */}
      <div className="d-flex gap-2">
        <button
          className="btn text-white fw-semibold rounded-3"
          style={{
            backgroundColor: "#0a2344",
            padding: "8px 16px",
          }}
        >
          EDITAR COLABORADOR
        </button>
        <button
          className="btn text-white fw-semibold rounded-3"
          style={{
            backgroundColor: "#d9534f",
            padding: "8px 16px",
          }}
        >
          EXCLUIR COLABORADOR
        </button>
      </div>
    </div>
  );
}
