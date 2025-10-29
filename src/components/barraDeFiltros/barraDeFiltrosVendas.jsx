import { IoSearch } from "react-icons/io5";

function BarraDeFiltrosVendas({ filters, onFilterChange }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ ...filters, [name]: value });
  };

  const renderSearchInput = (label, name, placeholder) => (
    <div className="mb-4">
      <label className="form-label fw-semibold text-dark mb-2">{label}</label>
      <div className="position-relative">
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          value={filters[name] || ""}
          onChange={handleInputChange}
          className="form-control rounded-pill ps-3 pe-5"
        />
        <IoSearch
          className="text-secondary position-absolute"
          style={{ top: "50%", right: "15px", transform: "translateY(-50%)" }}
        />
      </div>
    </div>
  );

  return (
    <aside
      className="bg-white border-end p-4 overflow-auto flex-shrink-0"
      style={{ width: "320px", fontFamily: "var(--fonte-principal)" }}
    >
      {renderSearchInput("ID do Pedido/Contrato", "id", "Digite o ID...")}
      {renderSearchInput(
        "Nome do Cliente",
        "cliente",
        "Digite o nome do cliente..."
      )}
      {renderSearchInput(
        "Responsável Comercial",
        "responsavel",
        "Digite o nome do responsável..."
      )}

      <div className="mb-4">
        <label className="form-label fw-semibold text-dark mb-2">Data</label>
        <div className="d-flex align-items-center gap-2">
          <input
            type="text"
            name="startDate"
            placeholder="Início"
            value={filters.startDate || ""}
            onChange={handleInputChange}
            className="form-control rounded-pill"
          />
          <span
            style={{ width: "12px", height: "1px", backgroundColor: "#cbd5e0" }}
          ></span>
          <input
            type="text"
            name="endDate"
            placeholder="Fim"
            value={filters.endDate || ""}
            onChange={handleInputChange}
            className="form-control rounded-pill"
          />
        </div>
      </div>
    </aside>
  );
}

export default BarraDeFiltrosVendas;
