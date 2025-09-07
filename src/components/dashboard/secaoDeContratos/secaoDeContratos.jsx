import React, { useRef } from 'react';
import CartaoDeContrato from '../cartaoDeContrato/cartaoDeContrato.jsx';
import './secaoDeContratos.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function SecaoDeContratos({ title, contracts = [] }) {
  const containerRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (containerRef.current) {
      
      containerRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  return (
    <section className="secao-de-contratos">
      <header className="section-header">
        <h2>{title}</h2>
        <hr />
        <div className="section-actions">
          <a href="#">Ver todos</a>
          <div className="scroll-buttons">
            <button onClick={() => scroll(-310)}><FaChevronLeft /></button>
            <button onClick={() => scroll(310)}><FaChevronRight /></button>
          </div>
        </div>
      </header>
      <div className="cards-container" ref={containerRef}>
        {contracts.map(contract => (
          <CartaoDeContrato key={contract.id} {...contract} />
        ))}
      </div>
    </section>
  );
}

export default SecaoDeContratos;