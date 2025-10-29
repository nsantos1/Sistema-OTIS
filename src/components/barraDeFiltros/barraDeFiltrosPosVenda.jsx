import { forwardRef, useImperativeHandle, useRef } from "react";
import { IoSearch } from "react-icons/io5";

function BarraDeFiltrosPosVenda({ filters, onFilterChange }, ref) {
  const manutencaoCheckboxRef = useRef(null);
  const suporteCheckboxRef = useRef(null);
  const avaliacaoCheckboxRef = useRef(null);

  const atualizarTipoDeChamado = (name, checked) => {
    onFilterChange((prevFilters) => {
      const currentTipoDeChamado = prevFilters.tipoDeChamado || [];
      const newTipoDeChamado = checked
        ? [...currentTipoDeChamado, name]
        : currentTipoDeChamado.filter((tipo) => tipo !== name);
      return { ...prevFilters, tipoDeChamado: newTipoDeChamado };
    });
  };

  useImperativeHandle(ref, () => ({
    marcar: (id) => atualizarTipoDeChamado(id, true),
    desmarcar: (id) => atualizarTipoDeChamado(id, false),
  }));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ ...filters, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const currentEstado = filters.estado || [];
    const newEstado = checked
      ? [...currentEstado, name]
      : currentEstado.filter((estado) => estado !== name);
    onFilterChange({ ...filters, estado: newEstado });
  };

  const handleTipoDeChamadoCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const currentTipoDeChamado = filters.tipoDeChamado || [];
    const newTipodeChamado = checked
      ? [...currentTipoDeChamado, name]
      : currentTipoDeChamado.filter((tipo) => tipo !== name);
    onFilterChange({ ...filters, tipoDeChamado: newTipodeChamado });
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
      {renderSearchInput("ID do chamado", "id", "Digite o ID do chamado...")}
      {renderSearchInput(
        "Nome do cliente",
        "company",
        "Digite o nome do cliente..."
      )}
      {renderSearchInput(
        "Localização",
        "local",
        "Digite a cidade, estado ou país..."
      )}
      {renderSearchInput(
        "Título do Chamado",
        "titulo",
        "Digite o título do chamado..."
      )}
      {renderSearchInput(
        "Responsável comercial",
        "salesRep",
        "Digite o nome do responsável..."
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

      {/* Tipo de Chamado */}
      <div className="mb-4">
        <label className="form-label fw-semibold text-dark mb-2">
          Tipo de Chamado
        </label>
        {[
          {
            id: "manutencao",
            name: "manutencao",
            ref: manutencaoCheckboxRef,
            label: "Manutenção",
          },
          {
            id: "suporte",
            name: "suporte",
            ref: suporteCheckboxRef,
            label: "Suporte",
          },
          {
            id: "avaliacao",
            name: "avaliacao",
            ref: avaliacaoCheckboxRef,
            label: "Avaliação",
          },
        ].map(({ id, name, ref, label }) => (
          <div className="form-check mb-2" key={id}>
            <input
              ref={ref}
              type="checkbox"
              className="form-check-input"
              id={id}
              name={name}
              onChange={handleTipoDeChamadoCheckboxChange}
              checked={(filters.tipoDeChamado || []).includes(name)}
            />
            <label className="form-check-label" htmlFor={id}>
              {label}
            </label>
          </div>
        ))}
      </div>

      {/* Status do Chamado */}
      <div className="mb-4">
        <label className="form-label fw-semibold text-dark mb-2">
          Status do chamado
        </label>
        {[
          { id: "em-aberto", label: "Em aberto a menos de 1 dia" },
          { id: "em-aberto-mais", label: "Em aberto a mais de 1 dia" },
          { id: "em-atendimento", label: "Em Atendimento" },
          { id: "resolvido", label: "Resolvido" },
        ].map(({ id, label }) => (
          <div className="form-check mb-2" key={id}>
            <input
              type="checkbox"
              className="form-check-input"
              id={id}
              name={id}
              onChange={handleCheckboxChange}
              checked={(filters.estado || []).includes(id)}
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

export default forwardRef(BarraDeFiltrosPosVenda);
