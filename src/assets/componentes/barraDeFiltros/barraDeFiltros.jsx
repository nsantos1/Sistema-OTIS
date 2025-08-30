
import './barraDeFiltros.css';
import { IoSearch } from "react-icons/io5";

function BarraDeFiltros() {
  
  const renderSearchInput = (label, placeholder) => (
    <div className="filter-group">
      <label>{label}</label>
      <div className="input-with-icon">
        <input type="text" placeholder={placeholder} />
        <IoSearch className="input-icon" />
      </div>
    </div>
  );

  return (
    <aside className="barra-de-filtros">
      {renderSearchInput("ID do contrato", "Digite o ID do contrato...")}
      {renderSearchInput("Nome do cliente", "Digite o nome do cliente...")}
      {renderSearchInput("Localização", "Digite a cidade, estado ou país...")}
      {renderSearchInput("Modelo de elevador", "Digite o modelo do elevador... ")}
      {renderSearchInput("Responsável comercial", "Digite o nome do responsável...")}

      <div className="filter-group">
        <label>Última atualização</label>
        <div className="date-inputs">
          <input type="text" placeholder="Ex: Março" />
          <span className="date-divider"></span>
          <input type="text" placeholder="Ex: Julho" />
        </div>
      </div>

     
      <div className="filter-group">
        <label>Status do contrato</label>
        <div className="checkbox-item">
          <input type="checkbox" id="dentro-prazo" />
          <label htmlFor="dentro-prazo">Dentro do prazo</label>
        </div>
        <div className="checkbox-item">
          <input type="checkbox" id="alerta-prazo" />
          <label htmlFor="alerta-prazo">Alerta de prazo</label>
        </div>
        <div className="checkbox-item">
          <input type="checkbox" id="fora-prazo" />
          <label htmlFor="fora-prazo">Fora do prazo</label>
        </div>
      </div>

      
      <div className="filter-group">
        <label>Etapa de instalação</label>
        <div className="checkbox-item">
          <input type="checkbox" id="aprovacao" defaultChecked />
          <label htmlFor="aprovacao">Aguardando aprovação do contrato</label>
        </div>
        <div className="checkbox-item">
          <input type="checkbox" id="obra-civil" />
          <label htmlFor="obra-civil">Aguardando conclusão da obra civil</label>
        </div>
        <div className="checkbox-item">
          <input type="checkbox" id="fabricacao" />
          <label htmlFor="fabricacao">Em fabricação</label>
        </div>
        <div className="checkbox-item">
          <input type="checkbox" id="a-caminho" />
          <label htmlFor="a-caminho">A caminho</label>
        </div>
        <div className="checkbox-item">
          <input type="checkbox" id="em-instalacao" />
          <label htmlFor="em-instalacao">Em instalação</label>
        </div>
        <div className="checkbox-item">
          <input type="checkbox" id="testes-finais" />
          <label htmlFor="testes-finais">Em testes finais</label>
        </div>
        <div className="checkbox-item">
          <input type="checkbox" id="concluidos" />
          <label htmlFor="concluidos">Concluídos</label>
        </div>
      </div>
    </aside>
  );
}

export default BarraDeFiltros;