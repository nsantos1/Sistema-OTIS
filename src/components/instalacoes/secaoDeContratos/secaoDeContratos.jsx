import React, { useRef, useState } from "react";
import CartaoDeContrato from "../cartaoDeContrato/cartaoDeContrato.jsx";
import "./secaoDeContratos.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";

function SecaoDeContratos({
  title,
  contracts = [],
  onViewAllClick,
  isFullView = false,
}) {
  const containerRef = useRef(null);

  const [hover, setHover] = useState(false);

  const scroll = (scrollOffset) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
    }
  };

  return (
    <section className={`secao-de-contratos ${isFullView ? "full-view" : ""}`}>
      <header
        className="section-header d-flex justify-content-between align-items-center"
        style={{
          marginBottom: "20px",
        }}
      >
        {isFullView && (
          <button
            className="d-flex align-items-center gap-2 border-0 fw-semibold cursor-pointer p-0"
            style={{
              color: "var(--cor-principal)",
              fontSize: "18px",
              marginRight: "20px",
              transition: "opacity 0.2s",
              opacity: hover ? "0.8" : "1",
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={onViewAllClick}
          >
            <IoArrowBackOutline size={20} />
            Voltar
          </button>
        )}

        <h2
          className="fs-4 fw-semibold m-0"
          style={{
            color: "var(--cor-principal)",
          }}
        >
          {title}
        </h2>
        <hr
          className="flex-grow-1 border-0"
          style={{
            height: "1px",
            backgroundColor: "#cbd5e0",
            margin: "0 22px",
          }}
        />

        {!isFullView && (
          <div className="section-actions d-flex align-items-center gap-3">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onViewAllClick();
              }}
              className="text-decoration-none fw-semibold text-white rounded-4"
              style={{
                backgroundColor: "var(--cor-principal)",
                padding: "3px 10px",
              }}
            >
              Ver todos
            </a>

            <div className="scroll-buttons d-flex gap-2">
              <button
                className="bg-white rounded-circle cursor-pointer d-flex align-items-center justify-content-center"
                style={{
                  border: "1px solid #e2e8f0",
                  color: "#4a5568",
                  width: "32px",
                  height: "32px",
                  fontSize: "14px",
                  transition: "background-color 0.2s",
                }}
                onClick={() => scroll(-310)}
              >
                <FaChevronLeft />
              </button>
              <button
                className="bg-white rounded-circle cursor-pointer d-flex align-items-center justify-content-center"
                style={{
                  border: "1px solid #e2e8f0",
                  color: "#4a5568",
                  width: "32px",
                  height: "32px",
                  fontSize: "14px",
                  transition: "background-color 0.2s",
                }}
                onClick={() => scroll(310)}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        )}
      </header>

      <div
        className="cards-container d-flex overflow-x-auto"
        style={{
          gap: "15px",
          paddingBottom: "15px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        ref={containerRef}
      >
        {contracts.map((contract) => (
          <CartaoDeContrato key={contract.id} {...contract} />
        ))}
      </div>
    </section>
  );
}

export default SecaoDeContratos;
