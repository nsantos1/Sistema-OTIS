import { useState } from "react";
import './slider.css'

export default function Slider() {
    return (
        <div className="slider">
            <ul className="card-list">
                <li className="card-item">
                    <div className="badges">
                        <div className="codigo">
                            #CT-0921
                        </div>
                        <div className="tipo-badge">
                            Manutenção
                        </div>
                        <div className="estado-badge">
                            Em aberto
                        </div>
                    </div>

                    <span className="titulo">
                        Elevador Travando no 2º andar
                    </span>
                    <span className="descricao">
                        Cliente relatava travamento intermitente após horário de pico.
                    </span>

                    <div className="linha-divisao"></div>

                    <div className="informacoes">
                        <div className="autor">
                            <div className="inicial">
                                J
                            </div>
                            <div className="dados-cliente">
                                <div className="nome">
                                    João Ricardo
                                </div>
                                <div className="empresa">
                                    Contrutora Maston
                                </div>
                            </div>
                        </div>
                        <div className="dados">
                            <div className="data">
                                <span>27/08/2025</span>
                            </div>
                            <div className="local">
                                <span>São Paulo/SP</span>
                            </div>
                        </div>
                    </div>

                    <button>VER DETALHES DO CHAMADO</button>
                </li>
            </ul>
        </div>
    )
}