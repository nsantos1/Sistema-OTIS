import './barraDeFiltros.css';
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
    <div className="filter-group">
      <label>{label}</label>
      <div className="input-with-icon">
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          value={filters[name] || ''}
          onChange={handleInputChange}
        />
        <IoSearch className="input-icon" />
      </div>
    </div>
  );

  return (
    <aside className="barra-de-filtros">
      {renderSearchInput("ID do contrato", "id", "Digite o ID do contrato...")}
      {renderSearchInput("Nome do cliente", "company", "Digite o nome do cliente...")}
      {renderSearchInput("Localização", "location", "Digite a cidade, estado ou país...")}
      {renderSearchInput("Modelo de elevador", "elevatorModel", "Digite o modelo do elevador...")}
      {renderSearchInput("Responsável comercial", "salesRep", "Digite o nome do responsável...")}

      <div className="filter-group">
        <label>Última atualização</label>
        <div className="date-inputs">
          <input type="text" name="startDate" placeholder="Ex: Março" value={filters.startDate || ''} onChange={handleInputChange} />
          <span className="date-divider"></span>
          <input type="text" name="endDate" placeholder="Ex: Julho" value={filters.endDate || ''} onChange={handleInputChange}/>
        </div>
      </div>


      <div className="filter-group">
        <label>Status do contrato</label>
        <div className="checkbox-item">
          <input type="checkbox" name="ontime" id="dentro-prazo" onChange={handleCheckboxChange} checked={(filters.status || []).includes('ontime')}/>
          <label htmlFor="dentro-prazo">Dentro do prazo</label>
        </div>
        <div className="checkbox-item">
          <input type="checkbox" name="alert" id="alerta-prazo" onChange={handleCheckboxChange} checked={(filters.status || []).includes('alert')}/>
          <label htmlFor="alerta-prazo">Alerta de prazo</label>
        </div>
        <div className="checkbox-item">
          <input type="checkbox" name="late" id="fora-prazo" onChange={handleCheckboxChange} checked={(filters.status || []).includes('late')}/>
          <label htmlFor="fora-prazo">Fora do prazo</label>
        </div>
      </div>


      <div className="filter-group">
        <label>Etapa de instalação</label>
        <div className="checkbox-item">
          <input type="checkbox" id="aprovacao" name="aprovacao" defaultChecked onChange={handleEtapaCheckboxChange} checked={(filters.etapas || ['aprovacao']).includes('aprovacao')}/>
          <label htmlFor="aprovacao">Aguardando aprovação do contrato</label>
        </div>
        <div className="checkbox-item">
          <input type="checkbox" id="obra-civil" name="obraCivil" onChange={handleEtapaCheckboxChange} checked={(filters.etapas || []).includes('obraCivil')}/>
          <label htmlFor="obra-civil">Aguardando conclusão da obra civil</label>
        </div>
        <div className="checkbox-item">
          <input type="checkbox" id="fabricacao" name="fabricacao" onChange={handleEtapaCheckboxChange} checked={(filters.etapas || []).includes('fabricacao')}/>
          <label htmlFor="fabricacao">Em fabricação</label>
        </div>
        <div className="checkbox-item">
          <input type="checkbox" id="a-caminho" name="aCaminho" onChange={handleEtapaCheckboxChange} checked={(filters.etapas || []).includes('aCaminho')}/>
          <label htmlFor="a-caminho">A caminho</label>
        </div>
        <div className="checkbox-item">
          <input type="checkbox" id="em-instalacao" name="emInstalacao" onChange={handleEtapaCheckboxChange} checked={(filters.etapas || []).includes('emInstalacao')}/>
          <label htmlFor="em-instalacao">Em instalação</label>
        </div>
        <div className="checkbox-item">
          <input type="checkbox" id="testes-finais" name="testesFinais" onChange={handleEtapaCheckboxChange} checked={(filters.etapas || []).includes('testesFinais')}/>
          <label htmlFor="testes-finais">Em testes finais</label>
        </div>
        <div className="checkbox-item">
          <input type="checkbox" id="concluidos" name="concluidos" onChange={handleEtapaCheckboxChange} checked={(filters.etapas || []).includes('concluidos')}/>
          <label htmlFor="concluidos">Concluídos</label>
        </div>
      </div>
    </aside>
  );
}

export default BarraDeFiltros;