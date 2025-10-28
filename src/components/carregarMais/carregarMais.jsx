export default function CarregarMais({ item, btFunc }) {
  return (
    <div
      className="d-flex align-items-center justify-content-center my-4"
      style={{ cursor: "pointer" }}
      onClick={btFunc}
    >
      <button
        className="btn px-4 py-2 rounded text-light"
        style={{
          backgroundColor: "var(--cor-principal)",
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor = "var(--cor-secundaria)")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor = "var(--cor-principal)")
        }
      >
        <span className="fw-bold text-uppercase me-2">{`Carregar mais ${item}`}</span>
        <img
          src="src/assets/img/arrow_drop_down.svg"
          alt=""
          style={{ filter: "invert(100%)", width: "20px", height: "20px" }}
        />
      </button>
    </div>
  );
}
