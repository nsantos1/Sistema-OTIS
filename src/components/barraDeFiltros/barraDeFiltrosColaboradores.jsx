import { IoSearch } from "react-icons/io5";

function BarraDeFiltrosColaboradores({ filters, onFilterChange }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ ...filters, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked, dataset } = e.target;
    const filterKey = dataset.filterkey;

    const currentValues = filters[filterKey] || [];
    const newValues = checked
      ? [...currentValues, name]
      : currentValues.filter((val) => val !== name);

    onFilterChange({ ...filters, [filterKey]: newValues });
  };

  const handleRadioChange = (e) => {
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
      {renderSearchInput("Nome do colaborador", "nome", "Digite o nome...")}

      {/* Cargo */}
      <div className="mb-4">
        <label className="form-label fw-semibold text-dark mb-2">Cargo</label>
        {["Operário", "Engenheiro", "Supervisor", "Gerente"].map((cargo) => (
          <div className="form-check mb-2" key={cargo}>
            <input
              type="checkbox"
              className="form-check-input"
              id={cargo.toLowerCase()}
              name={cargo}
              data-filterkey="cargo"
              onChange={handleCheckboxChange}
              checked={(filters.cargo || []).includes(cargo)}
            />
            <label className="form-check-label" htmlFor={cargo.toLowerCase()}>
              {cargo}
            </label>
          </div>
        ))}
      </div>

      {/* Setor */}
      <div className="mb-4">
        <label className="form-label fw-semibold text-dark mb-2">Setor</label>
        {["Fábrica", "Vendas", "RH", "Engenharia"].map((setor) => (
          <div className="form-check mb-2" key={setor}>
            <input
              type="checkbox"
              className="form-check-input"
              id={setor.toLowerCase()}
              name={setor}
              data-filterkey="setor"
              onChange={handleCheckboxChange}
              checked={(filters.setor || []).includes(setor)}
            />
            <label className="form-check-label" htmlFor={setor.toLowerCase()}>
              {setor}
            </label>
          </div>
        ))}
      </div>

      {/* Status */}
      <div className="mb-4">
        <label className="form-label fw-semibold text-dark mb-2">Status</label>

        <div className="form-check mb-2">
          <input
            type="radio"
            className="form-check-input"
            id="status-todos"
            name="status"
            value="todos"
            onChange={handleRadioChange}
            checked={filters.status === "todos"}
          />
          <label className="form-check-label" htmlFor="status-todos">
            Todos
          </label>
        </div>

        {["ativo", "inativo", "em-treinamento"].map((status) => (
          <div className="form-check mb-2" key={status}>
            <input
              type="radio"
              className="form-check-input"
              id={status}
              name="status"
              value={status}
              onChange={handleRadioChange}
              checked={filters.status === status}
            />
            <label className="form-check-label" htmlFor={status}>
              {status.replace("-", " ").charAt(0).toUpperCase() +
                status.replace("-", " ").slice(1)}
            </label>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default BarraDeFiltrosColaboradores;
