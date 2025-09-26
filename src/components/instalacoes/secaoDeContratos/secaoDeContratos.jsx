import React, { useRef } from 'react';
import CartaoDeContrato from '../cartaoDeContrato/cartaoDeContrato.jsx';
import './secaoDeContratos.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";

function SecaoDeContratos({ title, contracts = [], onViewAllClick, isFullView = false }) {
  const containerRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  return (
    <section className={`secao-de-contratos ${isFullView ? 'full-view' : ''}`}>
      <header className="section-header">
        {isFullView && (
          <button className="back-button" onClick={onViewAllClick}>
            <IoArrowBackOutline size={20} />
            Voltar
          </button>
        )}
        
        <h2>{title}</h2>
        <hr />
        
        {!isFullView && (
          <div className="section-actions">
            <a href="#" onClick={(e) => { e.preventDefault(); onViewAllClick(); }}>Ver todos</a>
            
            <div className="scroll-buttons">
              <button onClick={() => scroll(-310)}><FaChevronLeft /></button>
              <button onClick={() => scroll(310)}><FaChevronRight /></button>
            </div>
          </div>
        )}
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