import { Link } from "react-router-dom";
import { FaRegCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./slider.css"

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
        <div className="d-flex flex-column bg-white rounded-3 p-2 overflow-hidden" style={{ boxSizing: "border-box", width: "318px", minWidth: "318px", height: "auto", color: "#0a2344", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
            <div>
            <div className="d-flex justify-content-between mb-2" style={{ whiteSpace: "nowrap" }}>
                <div className="fw-semibold" style={{ fontSize: "12px", color: "#718096" }}>#{id}</div>
                <div className="d-flex gap-2">
                    {/* arrumar a badge pra puxar a categoria tipo "Manutenção" */}
                    <div className="fw-semibold rounded-5 d-flex align-items-center justify-content-center px-2 text-white" style={{ fontSize: "12px", backgroundColor: "#0a2344"}}>
                        {contrato.categoria}
                    </div>
                    <div className={`estado-badge rounded-5 d-flex align-items-center justify-content-center px-2 fw-semibold text-white ${estado}`} style={{ fontSize: "12px"}}>
                        {tituloEstado[estado]}
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column">
                <span className="fw-bold fs-6 mb-1" style={{ whiteSpace: "normal" }}>{titulo}</span>
                <span className="fw-normal" style={{ fontSize: "13px", whiteSpace: "normal" }}>{relato}</span>
            </div>
            </div>

            <hr className="border-0 my-2" style={{ height: "1px", backgroundColor: "#e2e8f0", }}
            />

            <div className="d-flex flex-column gap-2 mt-auto">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center" style={{ gap: "10px", }}>
                    <div className="rounded-circle text-white d-flex align-items-center justify-content-center fw-bolder" style={{ width: "42px", height: "42px", backgroundColor: "var(--cor-principal)", fontSize: "20px", }}>{salesRep.charAt(0)}</div>
                    <div>
                        <span className="fw-bold d-block" style={{ fontSize: "14px", color: "var(--cor-principal)", }}>{salesRep}</span>
                        <span style={{ fontSize: "12px", color: "var(--cor-terciaria)", }}>{company}</span>
                    </div>
                </div>
                <div className="text-end d-flex flex-column" style={{ fontSize: "12px", color: "var(--cor-terciaria)", gap: "4px", }}>
                    <div className="d-flex align-items-center justify-content-end" style={{ gap: "5px", }}>
                        <FaRegCalendarAlt />
                        <span>{data}</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-end" style={{ gap: "5px", }}>
                        <FaMapMarkerAlt />
                        <span>{local}</span>
                    </div>
                </div>
            </div>

            <Link to={`/pos-venda/detalhes/${id}`}>
                <button className="ver-detalhes w-100 rounded-2 text-center text-white fw-bolder border-0" style={{ backgroundColor: "#0a2344", height: "30px", fontSize: "11px", outline: "none", }}>
                    VER DETALHES DO CHAMADO
                </button>
            </Link>
            </div>
        </div>
    )
}