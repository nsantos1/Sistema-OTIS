import "./barraDeFiltros.css";
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

  return (
    <aside className="barra-de-filtros">
      <div className="filter-group">
        <label>Nome do colaborador</label>
        <div className="input-with-icon">
          <input
            type="text"
            name="nome"
            placeholder="Digite o nome..."
            value={filters.nome || ""}
            onChange={handleInputChange}
          />
          <IoSearch className="input-icon" />
        </div>
      </div>

      <div className="filter-group">
        <label>Cargo</label>
        {["Operário", "Engenheiro", "Supervisor", "Gerente"].map((cargo) => (
          <div className="checkbox-item" key={cargo}>
            <input
              type="checkbox"
              id={cargo.toLowerCase()}
              name={cargo}
              data-filterkey="cargo"
              onChange={handleCheckboxChange}
              checked={(filters.cargo || []).includes(cargo)}
            />
            <label htmlFor={cargo.toLowerCase()}>{cargo}</label>
          </div>
        ))}
      </div>

      <div className="filter-group">
        <label>Setor</label>
        {["Fábrica", "Vendas", "RH", "Engenharia"].map((setor) => (
          <div className="checkbox-item" key={setor}>
            <input
              type="checkbox"
              id={setor.toLowerCase()}
              name={setor}
              data-filterkey="setor"
              onChange={handleCheckboxChange}
              checked={(filters.setor || []).includes(setor)}
            />
            <label htmlFor={setor.toLowerCase()}>{setor}</label>
          </div>
        ))}
      </div>

      <div className="filter-group">
        <label>Status</label>
        <div className="radio-item">
          <input
            type="radio"
            id="status-todos"
            name="status"
            value="todos"
            onChange={handleRadioChange}
            checked={filters.status === "todos"}
          />
          <label htmlFor="status-todos">Todos</label>
        </div>
        {["ativo", "inativo", "em-treinamento"].map((status) => (
          <div className="radio-item" key={status}>
            <input
              type="radio"
              id={status}
              name="status"
              value={status}
              onChange={handleRadioChange}
              checked={filters.status === status}
            />
            <label htmlFor={status}>
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