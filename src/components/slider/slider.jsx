import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./slider.css";
import CabecalhoSecoes from "../cabecalhoSecoes/cabecalhoSecoes";

export default function Slider({
    tituloTipoDeChamado,
    slides,
    isViewingAll,
    onViewAll,
}) {
    const [index, setIndex] = useState(0);
    
    const containerRef = useRef(null);

    // Função de scroll horizontal
    const scroll = (scrollOffset) => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
        }
    };

    useEffect(() => {
        setIndex(0);
        if (containerRef.current) {
            containerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
    }, [slides]);

    const tituloEstado = {
        "em-aberto": "Em aberto",
        "em-aberto-mais": "Em aberto",
        "em-atendimento": "Em atendimento",
        resolvido: "Resolvido",
    };

    return (
        <>
            <CabecalhoSecoes
                titulo={tituloTipoDeChamado}
                onViewAll={onViewAll}
                isViewingAll={isViewingAll}
                scroll={scroll}
            />

            <div className={`principal ${isViewingAll ? "grid-view" : ""}`}>
                <div className="slider-wrapper" ref={containerRef}>
                    <ul className="card-list">
                        {slides.map((slide, i) => (
                            <li key={i} className="card-item">
                                <div className="badges">
                                    <div className="codigo">#{slide.id}</div>
                                    <div className="badges-tipo">
                                        <div className="tipo-badge">{tituloTipoDeChamado}</div>
                                        <div className={`estado-badge ${slide.estado}`}>
                                            {tituloEstado[slide.estado]}
                                        </div>
                                    </div>
                                </div>

                                <span className="titulo">{slide.titulo}</span>
                                <span className="descricao">{slide.relato}</span>

                                <div className="linha-divisao"></div>

                                <div className="informacoes">
                                    <div className="autor">
                                        <div className="inicial">{slide.salesRep.charAt(0)}</div>
                                        <div className="dados-cliente">
                                            <div className="nome">{slide.salesRep}</div>
                                            <div className="empresa">{slide.company}</div>
                                        </div>
                                    </div>
                                    <div className="dados">
                                        <div className="data">
                                            <span>{slide.data}</span>
                                        </div>
                                        <div className="local">
                                            <span>{slide.local}</span>
                                        </div>
                                    </div>
                                </div>

                                <Link to={`/pos-venda/detalhes/${slide.id}`}>
                                    <button className="ver-detalhes">
                                        VER DETALHES DO CHAMADO
                                    </button>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
