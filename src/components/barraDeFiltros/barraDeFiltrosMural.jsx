import { IoSearch } from "react-icons/io5";

function BarraDeFiltrosMural({ filters, onFilterChange }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ ...filters, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const currentSetores = filters.setor || [];
    const newSetores = checked
      ? [...currentSetores, name]
      : currentSetores.filter((setor) => setor !== name);
    onFilterChange({ ...filters, setor: newSetores });
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
      {renderSearchInput(
        "Nome do colaborador",
        "authorName",
        "Digite o nome do colaborador..."
      )}
      {renderSearchInput(
        "Mensagem do comunicado",
        "message",
        "Digite a mensagem do comunicado..."
      )}

      <div className="mb-4">
        <label className="form-label fw-semibold text-dark mb-2">
          Data de inclusão
        </label>
        <div className="d-flex align-items-center gap-2">
          <input
            type="text"
            name="startDate"
            placeholder="Ex: Março"
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
            placeholder="Ex: Julho"
            value={filters.endDate || ""}
            onChange={handleInputChange}
            className="form-control rounded-pill"
          />
        </div>
      </div>

      {/* Setores */}
      <div className="mb-4">
        <label className="form-label fw-semibold text-dark mb-2">Setor</label>
        {["Fábrica", "Vendas", "RH", "Engenharia"].map((setor) => (
          <div className="form-check mb-2" key={setor}>
            <input
              type="checkbox"
              className="form-check-input"
              id={setor.toLowerCase()}
              name={setor}
              onChange={handleCheckboxChange}
              checked={(filters.setor || []).includes(setor)}
            />
            <label className="form-check-label" htmlFor={setor.toLowerCase()}>
              {setor}
            </label>
          </div>
        ))}
      </div>

      {/* Urgente */}
      <div className="mb-4">
        <label className="form-label fw-semibold text-dark mb-2">Urgente</label>
        {[
          { id: "urgente-todos", value: "todos", label: "Todos" },
          { id: "urgente-sim", value: "sim", label: "Sim" },
          { id: "urgente-nao", value: "nao", label: "Não" },
        ].map(({ id, value, label }) => (
          <div className="form-check mb-2" key={id}>
            <input
              type="radio"
              className="form-check-input"
              id={id}
              name="isUrgent"
              value={value}
              onChange={handleInputChange}
              checked={filters.isUrgent === value}
            />
            <label className="form-check-label" htmlFor={id}>
              {label}
            </label>
          </div>
        ))}
      </div>

      {/* Lido */}
      <div className="mb-4">
        <label className="form-label fw-semibold text-dark mb-2">Lido</label>
        {[
          { id: "lido-todos", value: "todos", label: "Todos" },
          { id: "lido-sim", value: "sim", label: "Sim" },
          { id: "lido-nao", value: "nao", label: "Não" },
        ].map(({ id, value, label }) => (
          <div className="form-check mb-2" key={id}>
            <input
              type="radio"
              className="form-check-input"
              id={id}
              name="isRead"
              value={value}
              onChange={handleInputChange}
              checked={filters.isRead === value}
            />
            <label className="form-check-label" htmlFor={id}>
              {label}
            </label>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default BarraDeFiltrosMural;
