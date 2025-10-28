import { IoSearch } from "react-icons/io5";

function BarraDeFiltros({ filters, onFilterChange }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ ...filters, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const currentStatus = filters.status || [];
    const newStatus = checked
      ? [...currentStatus, name]
      : currentStatus.filter((status) => status !== name);
    onFilterChange({ ...filters, status: newStatus });
  };

  const handleEtapaCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const currentEtapas = filters.etapas || [];
    const newEtapas = checked
      ? [...currentEtapas, name]
      : currentEtapas.filter((etapa) => etapa !== name);
    onFilterChange({ ...filters, etapas: newEtapas });
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
        "ID do contrato",
        "id",
        "Digite o ID do contrato desejado"
      )}
      {renderSearchInput(
        "Nome do cliente",
        "company",
        "Digite o nome do cliente desejado"
      )}
      {renderSearchInput(
        "Localização",
        "location",
        "Digite a cidade, estado ou país desejado"
      )}
      {renderSearchInput(
        "Modelo de elevador",
        "elevatorModel",
        "Digite o modelo do elevador desejado"
      )}
      {renderSearchInput(
        "Responsável comercial",
        "salesRep",
        "Digite o nome do responsável comercial desejado"
      )}

      <div className="mb-4">
        <label className="form-label fw-semibold text-dark mb-2">
          Última atualização
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

      {/* Status do contrato */}
      <div className="mb-4">
        <label className="form-label fw-semibold text-dark mb-2">
          Status do contrato
        </label>
        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="checkbox"
            name="ontime"
            id="dentro-prazo"
            onChange={handleCheckboxChange}
            checked={filters.status.includes("ontime")}
          />
          <label className="form-check-label" htmlFor="dentro-prazo">
            Dentro do prazo
          </label>
        </div>
        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="checkbox"
            name="alert"
            id="alerta-prazo"
            onChange={handleCheckboxChange}
            checked={filters.status.includes("alert")}
          />
          <label className="form-check-label" htmlFor="alerta-prazo">
            Alerta de prazo
          </label>
        </div>
        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="checkbox"
            name="late"
            id="fora-prazo"
            onChange={handleCheckboxChange}
            checked={filters.status.includes("late")}
          />
          <label className="form-check-label" htmlFor="fora-prazo">
            Fora do prazo
          </label>
        </div>
      </div>

      {/* Etapas de instalação */}
      <div className="mb-4">
        <label className="form-label fw-semibold text-dark mb-2">
          Etapa de instalação
        </label>
        {[
          {
            id: "aprovacao",
            name: "aprovacao",
            label: "Aguardando aprovação do contrato",
          },
          {
            id: "obra-civil",
            name: "obraCivil",
            label: "Aguardando conclusão da obra civil",
          },
          { id: "fabricacao", name: "fabricacao", label: "Em fabricação" },
          { id: "a-caminho", name: "aCaminho", label: "A caminho" },
          { id: "em-instalacao", name: "emInstalacao", label: "Em instalação" },
          {
            id: "testes-finais",
            name: "testesFinais",
            label: "Em testes finais",
          },
          { id: "concluidos", name: "concluidos", label: "Concluídos" },
        ].map(({ id, name, label }) => (
          <div key={id} className="form-check mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              id={id}
              name={name}
              onChange={handleEtapaCheckboxChange}
              checked={filters.etapas.includes(name)}
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

export default BarraDeFiltros;
