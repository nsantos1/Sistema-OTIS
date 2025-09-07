import './barraDeFiltrosMural.css';
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

  return (
    <aside className="barra-de-filtros-mural">
      <div className="filter-group">
        <label>Nome do colaborador</label>
        <div className="input-with-icon">
          <input type="text" name="authorName" placeholder="Digite o nome do colaborador..." value={filters.authorName || ''} onChange={handleInputChange} />
          <IoSearch className="input-icon" />
        </div>
      </div>

      <div className="filter-group">
        <label>Mensagem do comunicado</label>
        <div className="input-with-icon">
          <input type="text" name="message" placeholder="Digite a mensagem do comunicado..." value={filters.message || ''} onChange={handleInputChange} />
          <IoSearch className="input-icon" />
        </div>
      </div>

      <div className="filter-group">
        <label>Data de inclusão</label>
        <div className="date-inputs">
          <input type="text" name="startDate" placeholder="Ex: Março" value={filters.startDate || ''} onChange={handleInputChange} />
          <span className="date-divider"></span>
          <input type="text" name="endDate" placeholder="Ex: Julho" value={filters.endDate || ''} onChange={handleInputChange}/>
        </div>
      </div>

      <div className="filter-group">
        <label>Setor</label>
        <div className="checkbox-item">
          <input type="checkbox" id="fabrica" name="Fábrica" onChange={handleCheckboxChange} checked={(filters.setor || []).includes('Fábrica')} />
          <label htmlFor="fabrica">Fábrica</label>
        </div>
        <div className="checkbox-item">
          <input type="checkbox" id="vendas" name="Vendas" onChange={handleCheckboxChange} checked={(filters.setor || []).includes('Vendas')} />
          <label htmlFor="vendas">Vendas</label>
        </div>
        <div className="checkbox-item">
          <input type="checkbox" id="rh" name="RH" onChange={handleCheckboxChange} checked={(filters.setor || []).includes('RH')} />
          <label htmlFor="rh">RH</label>
        </div>
        <div className="checkbox-item">
          <input type="checkbox" id="engenharia" name="Engenharia" onChange={handleCheckboxChange} checked={(filters.setor || []).includes('Engenharia')} />
          <label htmlFor="engenharia">Engenharia</label>
        </div>
      </div>

      <div className="filter-group">
        <label>Urgente</label>
        <div className="radio-item">
          <input type="radio" id="urgente-todos" name="isUrgent" value="todos" onChange={handleInputChange} checked={filters.isUrgent === 'todos'} />
          <label htmlFor="urgente-todos">Todos</label>
        </div>
        <div className="radio-item">
          <input type="radio" id="urgente-sim" name="isUrgent" value="sim" onChange={handleInputChange} checked={filters.isUrgent === 'sim'} />
          <label htmlFor="urgente-sim">Sim</label>
        </div>
        <div className="radio-item">
          <input type="radio" id="urgente-nao" name="isUrgent" value="nao" onChange={handleInputChange} checked={filters.isUrgent === 'nao'} />
          <label htmlFor="urgente-nao">Não</label>
        </div>
      </div>

      <div className="filter-group">
        <label>Lido</label>
        <div className="radio-item">
            <input type="radio" id="lido-todos" name="isRead" value="todos" onChange={handleInputChange} checked={filters.isRead === 'todos'} />
            <label htmlFor="lido-todos">Todos</label>
        </div>
        <div className="radio-item">
          <input type="radio" id="lido-sim" name="isRead" value="sim" onChange={handleInputChange} checked={filters.isRead === 'sim'} />
          <label htmlFor="lido-sim">Sim</label>
        </div>
        <div className="radio-item">
          <input type="radio" id="lido-nao" name="isRead" value="nao" onChange={handleInputChange} checked={filters.isRead === 'nao'} />
          <label htmlFor="lido-nao">Não</label>
        </div>
      </div>
    </aside>
  );
}

export default BarraDeFiltrosMural;