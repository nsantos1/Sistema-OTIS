import './barraDeFiltros.css';
import { IoSearch } from "react-icons/io5";

function BarraDeFiltrosPosVenda({ filters, onFilterChange }) {

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
            {renderSearchInput("ID do chamado", "id", "Digite o ID do chamado...")}
            {renderSearchInput("Nome do cliente", "company", "Digite o nome do cliente...")}
            {renderSearchInput("Localização", "local", "Digite a cidade, estado ou país...")}
            {renderSearchInput("Título do Chamado", "titulo", "Digite o título do chamado...")}
            {renderSearchInput("Responsável comercial", "salesRep", "Digite o nome do responsável...")}

            <div className="filter-group">
                <label>Data de inclusão</label>
                <div className="date-inputs">
                    <input type="text" name="startDate" placeholder="Ex: Março" value={filters.startDate || ''} onChange={handleInputChange} />
                    <span className="date-divider"></span>
                    <input type="text" name="endDate" placeholder="Ex: Julho" value={filters.endDate || ''} onChange={handleInputChange} />
                </div>
            </div>

            <div className="filter-group">
                <label>Tipo de Chamado</label>
                <div className="checkbox-item">
                    <input type="checkbox" id="manutencao" name="manutencao" onChange={handleTipoDeChamadoCheckboxChange} checked={(filters.tipoDeChamado || []).includes('manutencao')} />
                    <label htmlFor="manutencao">Manutenção</label>
                </div>
                <div className="checkbox-item">
                    <input type="checkbox" id="suporte" name="suporte" onChange={handleTipoDeChamadoCheckboxChange} checked={(filters.tipoDeChamado || []).includes('suporte')} />
                    <label htmlFor="suporte">Suporte</label>
                </div>
                <div className="checkbox-item">
                    <input type="checkbox" id="avaliacao" name="avaliacao" onChange={handleTipoDeChamadoCheckboxChange} checked={(filters.tipoDeChamado || []).includes('avaliacao')} />
                    <label htmlFor="avaliacao">Avaliação</label>
                </div>
            </div>

            <div className="filter-group">
                <label>Status do chamado</label>
                <div className="checkbox-item">
                    <input type="checkbox" name="em-aberto" id="em-aberto" onChange={handleCheckboxChange} checked={(filters.estado || []).includes('em-aberto')} />
                    <label htmlFor="em-aberto">Em aberto a menos de 1 dia</label>
                </div>
                <div className="checkbox-item">
                    <input type="checkbox" name="em-aberto-mais" id="em-aberto-mais" onChange={handleCheckboxChange} checked={(filters.estado || []).includes('em-aberto-mais')} />
                    <label htmlFor="em-aberto-mais">Em aberto a mais de 1 dia</label>
                </div>
                <div className="checkbox-item">
                    <input type="checkbox" name="em-atendimento" id="em-atendimento" onChange={handleCheckboxChange} checked={(filters.estado || []).includes('em-atendimento')} />
                    <label htmlFor="em-atendimento">Em Atendimento</label>
                </div>
                <div className="checkbox-item">
                    <input type="checkbox" name="resolvido" id="resolvido" onChange={handleCheckboxChange} checked={(filters.estado || []).includes('resolvido')} />
                    <label htmlFor="resolvido">Resolvido</label>
                </div>
            </div>

        </aside>
    );
}

export default BarraDeFiltrosPosVenda;