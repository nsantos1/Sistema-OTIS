import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function CabecalhoSecoes({
  titulo,
  onViewAll,
  isViewingAll,
  scroll,
}) {
  return (
    <header className="d-flex align-items-center mb-4">
      {/* Título e linha */}
      <h2
        className="fw-semibold me-3 fs-4"
        style={{ color: "var(--cor-principal)", whiteSpace: "nowrap" }}
      >
        {titulo}
      </h2>
      <hr
        className="flex-grow-1 m-0 border-0"
        style={{ height: "1px", backgroundColor: "#cbd5e0", margin: "0 20px" }}
      />

      {/* Ações */}
      <div className="d-flex align-items-center ms-3 gap-2">
        <button
          className="border-0 text-white rounded-4 fw-semibold fs-6 text-decoration-none"
          onClick={onViewAll}
          style={{
            backgroundColor: "var(--cor-principal)",
            padding: "1px 10px",
            cursor: "pointer",
            transition: "background-color 0.2s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--cor-secundaria)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--cor-principal)")
          }
        >
          {isViewingAll ? "Ver menos" : "Ver todos"}
        </button>

        <div className="d-flex gap-1">
          <button className="btn btn-light" onClick={() => scroll(-335)}>
            <FaChevronLeft />
          </button>
          <button className="btn btn-light" onClick={() => scroll(335)}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </header>
  );
}
