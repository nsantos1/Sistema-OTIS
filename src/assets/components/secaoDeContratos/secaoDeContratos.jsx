import CartaoDeContrato from '../cartaoDeContrato/cartaoDeContrato.jsx';
import './secaoDeContratos.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; 

function SecaoDeContratos(props) {
  const { title, contracts = [] } = props; 

  return (
    <section className="secao-de-contratos">
      <header className="section-header">
        <h2>{title}</h2>
        <div className="section-actions">
          <a href="#">Ver todos</a>
          <div className="scroll-buttons">
            <button><FaChevronLeft /></button>
            <button><FaChevronRight /></button>
          </div>
        </div>
      </header>
      <div className="cards-container">
        {contracts.map(contract => (
          <CartaoDeContrato key={contract.id} {...contract} />
        ))}
      </div>
    </section>
  );
}

export default SecaoDeContratos;
