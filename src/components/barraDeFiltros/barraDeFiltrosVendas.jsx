import './barraDeFiltros.css';
import { IoSearch } from "react-icons/io5";

function BarraDeFiltrosVendas({ filters, onFilterChange }) {

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        onFilterChange({ ...filters, [name]: value });
    };

    return (
        <aside className="barra-de-filtros">
            <div className="filter-group">
                <label>ID do Pedido/Contrato</label>
                <div className="input-with-icon">
                    <input type="text" name="id" placeholder="Digite o ID..." value={filters.id || ''} onChange={handleInputChange} />
                    <IoSearch className="input-icon" />
                </div>
            </div>

            <div className="filter-group">
                <label>Nome do Cliente</label>
                <div className="input-with-icon">
                    <input type="text" name="cliente" placeholder="Digite o nome do cliente..." value={filters.cliente || ''} onChange={handleInputChange} />
                    <IoSearch className="input-icon" />
                </div>
            </div>

            <div className="filter-group">
                <label>Responsável Comercial</label>
                <div className="input-with-icon">
                    <input type="text" name="responsavel" placeholder="Digite o nome do responsável..." value={filters.responsavel || ''} onChange={handleInputChange} />
                    <IoSearch className="input-icon" />
                </div>
            </div>

             <div className="filter-group">
                <label>Data</label>
                <div className="date-inputs">
                    <input type="text" name="startDate" placeholder="Início" value={filters.startDate || ''} onChange={handleInputChange}/>
                    <span className="date-divider"></span>
                    <input type="text" name="endDate" placeholder="Fim" value={filters.endDate || ''} onChange={handleInputChange}/>
                </div>
            </div>
        </aside>
    );
}

export default BarraDeFiltrosVendas;