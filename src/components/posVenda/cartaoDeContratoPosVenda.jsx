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

    const categoriaContrato = [
        {
            id: "CT-0921",
            categoria: "Manutenção",
        },
        {
            id: "CT-0922",
            categoria: "Manutenção",
        },
        {
            id: "CT-0923",
            categoria: "Manutenção",
        },
        {
            id: "CT-0924",
            categoria: "Manutenção",
        },
        {
            id: "CT-0925",
            categoria: "Manutenção",
        },
        {
            id: "CT-0926",
            categoria: "Suporte",
        },
        {
            id: "CT-0927",
            categoria: "Suporte",
        },
        {
            id: "CT-0928",
            categoria: "Suporte",
        },
        {
            id: "CT-0929",
            categoria: "Suporte",
        },
        {
            id: "CT-0930",
            categoria: "Suporte",
        },
        {
            id: "CT-0931",
            categoria: "Avaliação",
        },
        {
            id: "CT-0932",
            categoria: "Avaliação",
        },
        {
            id: "CT-0933",
            categoria: "Avaliação",
        },
        {
            id: "CT-0934",
            categoria: "Avaliação",
        },
        {
            id: "CT-0935",
            categoria: "Avaliação",
        },
        {
            id: "CT-0936",
            categoria: "Avaliação",
        },
    ]

    const contrato = categoriaContrato.find((item) => item.id === id);

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
                    <div className="tipo-badge">{contrato.categoria}</div>
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