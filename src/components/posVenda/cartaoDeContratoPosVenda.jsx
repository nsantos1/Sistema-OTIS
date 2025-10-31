import { Link } from "react-router-dom";
import "../slider/slider.css"

export default function CartaoDeContratoPosVenda(props) {
    const {
        id,
        salesRep,
        company,
        local,
        data,
        estado,
        titulo,
        relato,
    } = props;

    const tituloEstado = {
        "em-aberto": "Em aberto",
        "em-aberto-mais": "Em aberto",
        "em-atendimento": "Em atendimento",
        resolvido: "Resolvido",
    };

    return (
        <div className="card-item">
            <div className="badges">
                <div className="codigo">#{id}</div>
                <div className="badges-tipo">
                    {/* arrumar a badge pra puxar a categoria tipo "Manutenção" */}
                    <div className="tipo-badge">{titulo}</div>
                    <div className={`estado-badge ${estado}`}>
                        {tituloEstado[estado]}
                    </div>
                </div>
            </div>

            <span className="titulo">{titulo}</span>
            <span className="descricao">{relato}</span>

            <div className="linha-divisao"></div>

            <div className="informacoes">
                <div className="autor">
                    <div className="inicial">{salesRep.charAt(0)}</div>
                    <div className="dados-cliente">
                        <div className="nome">{salesRep}</div>
                        <div className="empresa">{company}</div>
                    </div>
                </div>
                <div className="dados">
                    <div className="data">
                        <span>{data}</span>
                    </div>
                    <div className="local">
                        <span>{local}</span>
                    </div>
                </div>
            </div>

            <Link to={`/pos-venda/detalhes/${id}`}>
                <button className="ver-detalhes">
                    VER DETALHES DO CHAMADO
                </button>
            </Link>
        </div>
    )
}