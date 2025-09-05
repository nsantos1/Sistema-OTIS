import { useState } from "react";
import { Link } from "react-router-dom";

import './slider.css'

export default function Slider({ tituloTipoDeChamado, slides }) {
    const [index, setIndex] = useState(0)

    // arredonda para multiplos de 3 já que exibe 3 slides por vez
    const lengthArredondada = Math.ceil(slides.length / 3) * 3;

    const prev = () => {
        setIndex((prev) => (prev - 1  + lengthArredondada) % (lengthArredondada / 3))
    }

    const next = () => {
        setIndex((prev) => (prev + 1) % (lengthArredondada / 3))
    }

    const tituloEstado = {
        "em-aberto": "Em aberto",
        "em-aberto-mais": "Em aberto",
        "em-atendimento": "Em atendimento", 
        "resolvido": "Resolvido",
    }

    return (
        <>
            <div className="superior">
                <div className='tipo-de-chamado'>{tituloTipoDeChamado}</div>
                <div className='linha'></div>
                <button className="ver-todos">Ver Todos</button>
            </div>

            <div className="principal">
                <button className="prev" onClick={ prev }>
                    <svg width="17" height="26" viewBox="0 0 17 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.5 13L16.0833 22.5833L13.1667 25.5L0.666672 13L13.1667 0.500001L16.0833 3.41667L6.5 13Z" fill="#0A2344"/>
                    </svg>
                </button>

                <div className="slider-wrapper">
                    <div className="slider" style={{ transform: `translateX(-${index * 999}px)` }}>
                        <ul className="card-list">
                            {slides.map((slide, i) => (
                                <li key={i} className="card-item">
                                    <div className="badges">
                                        <div className="codigo">
                                            #{slide.id}
                                        </div>
                                        <div className="tipo-badge">
                                            {tituloTipoDeChamado}
                                        </div>
                                        <div className={`estado-badge ${slide.estado}`}>
                                            {tituloEstado[slide.estado]}
                                        </div>
                                    </div>

                                    <span className="titulo">
                                        {slide.titulo}
                                    </span>
                                    <span className="descricao">
                                        {slide.relato}
                                    </span>

                                    <div className="linha-divisao"></div>

                                    <div className="informacoes">
                                        <div className="autor">
                                            <div className="inicial">
                                                {slide.salesRep.charAt(0)}
                                            </div>
                                            <div className="dados-cliente">
                                                <div className="nome">
                                                    {slide.salesRep}
                                                </div>
                                                <div className="empresa">
                                                    {slide.company}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="dados">
                                            <div className="data">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6 11.0002C5.53333 11.0002 5.13889 10.8391 4.81667 10.5168C4.49444 10.1946 4.33333 9.80016 4.33333 9.3335C4.33333 8.86683 4.49444 8.47239 4.81667 8.15016C5.13889 7.82794 5.53333 7.66683 6 7.66683C6.46667 7.66683 6.86111 7.82794 7.18333 8.15016C7.50556 8.47239 7.66667 8.86683 7.66667 9.3335C7.66667 9.80016 7.50556 10.1946 7.18333 10.5168C6.86111 10.8391 6.46667 11.0002 6 11.0002ZM3.33333 14.6668C2.96667 14.6668 2.65278 14.5363 2.39167 14.2752C2.13056 14.0141 2 13.7002 2 13.3335V4.00016C2 3.6335 2.13056 3.31961 2.39167 3.0585C2.65278 2.79739 2.96667 2.66683 3.33333 2.66683H4V1.3335H5.33333V2.66683H10.6667V1.3335H12V2.66683H12.6667C13.0333 2.66683 13.3472 2.79739 13.6083 3.0585C13.8694 3.31961 14 3.6335 14 4.00016V13.3335C14 13.7002 13.8694 14.0141 13.6083 14.2752C13.3472 14.5363 13.0333 14.6668 12.6667 14.6668H3.33333ZM3.33333 13.3335H12.6667V6.66683H3.33333V13.3335Z" fill="#0A2344"/>
                                                </svg>

                                                <span>{slide.data}</span>
                                            </div>
                                            <div className="local">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 14.6668C7.84445 14.6668 7.71111 14.6224 7.6 14.5335C7.48889 14.4446 7.40556 14.3279 7.35 14.1835C7.13889 13.5613 6.87222 12.9779 6.55 12.4335C6.23889 11.8891 5.8 11.2502 5.23334 10.5168C4.66667 9.78349 4.20556 9.0835 3.85 8.41683C3.50556 7.75016 3.33334 6.94461 3.33334 6.00016C3.33334 4.70016 3.78334 3.60016 4.68334 2.70016C5.59445 1.78905 6.7 1.3335 8 1.3335C9.3 1.3335 10.4 1.78905 11.3 2.70016C12.2111 3.60016 12.6667 4.70016 12.6667 6.00016C12.6667 7.01127 12.4722 7.85572 12.0833 8.53349C11.7056 9.20016 11.2667 9.86127 10.7667 10.5168C10.1667 11.3168 9.71111 11.9835 9.4 12.5168C9.1 13.0391 8.85 13.5946 8.65 14.1835C8.59445 14.3391 8.50556 14.4613 8.38334 14.5502C8.27223 14.6279 8.14445 14.6668 8 14.6668ZM8 7.66683C8.46667 7.66683 8.86111 7.50572 9.18334 7.1835C9.50556 6.86127 9.66667 6.46683 9.66667 6.00016C9.66667 5.5335 9.50556 5.13905 9.18334 4.81683C8.86111 4.49461 8.46667 4.3335 8 4.3335C7.53334 4.3335 7.13889 4.49461 6.81667 4.81683C6.49445 5.13905 6.33334 5.5335 6.33334 6.00016C6.33334 6.46683 6.49445 6.86127 6.81667 7.1835C7.13889 7.50572 7.53334 7.66683 8 7.66683Z" fill="#0A2344"/>
                                                </svg>

                                                <span>{slide.local}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <Link to={`/pos-venda/detalhes/${slide.id}`}>
                                        <button className="ver-detalhes">VER DETALHES DO CHAMADO</button>
                                    </Link>
                                </li>
                            ))}                                           
                        </ul>
                    </div>
                </div>

                <button className="next" onClick={ next }>
                    <svg width="17" height="26" viewBox="0 0 17 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 13L0.916647 3.41667L3.83331 0.5L16.3333 13L3.83331 25.5L0.916647 22.5833L10.5 13Z" fill="#0A2344"/>
                    </svg>
                </button>
            </div>
        </>
    )
}