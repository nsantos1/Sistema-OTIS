import "./cartaoDeContrato.css";
import { FaRegCalendarAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

function CartaoDeContrato(props) {
    const [hover, setHover] = useState(false);
    const {
        id,
        company,
        location,
        lastUpdate,
        status,
        statusType,
        elevatorModel = [] /*O .join só funciona em arryas (listas), por isso foi adicionado um lista a constante elevatorModel*/,
        salesRep,
        imageUrl,
    } = props;

    const statusClassName = `status-tag ${statusType || ""}`;

    return (
        <div
            className="bg-white d-flex flex-column"
            style={{
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                minWidth: "290px",
                overflow: "hidden",
            }}
        >
            <img
                src={imageUrl}
                alt={`Elevador para ${company}`}
                className="w-100 object-fit-cover"
                style={{
                    height: "145px",
                }}
            />
            <div
                className="flex-grow-1 d-flex flex-column"
                style={{
                    padding: "12px",
                }}
            >
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <span
                        className="fw-semibold"
                        style={{
                            fontSize: "12px",
                            color: "#718096",
                        }}
                    >
                        #{id}
                    </span>
                    <span className={statusClassName}>{status}</span>
                </div>

                <div
                    style={{
                        marginBottom: "12px",
                    }}
                >
                    <h4
                        className="fs-6 fw-bold"
                        style={{
                            color: "var(--cor-principal)",
                            marginBottom: "4px",
                        }}
                    >
                        {company}
                    </h4>
                    <p
                        className="fw-semibold"
                        style={{
                            fontSize: "13px",
                            color: "#718096",
                            marginBottom: "4px",
                        }}
                    >
                        {location}
                    </p>
                    {/* <p
                        className="fw-semibold"
                        style={{
                            fontSize: "13px",
                            color: "#718096",
                            marginBottom: "4px",
                        }}
                    >
                        {elevatorModel.join(", ")}
                    </p> */}
                </div>

                <div
                    className="mt-1 d-flex justify-content-between"
                    style={{
                        borderTop: "1px solid #e2e8f0",
                        paddingTop: "12px",
                        gap: "10px",
                    }}
                >
                    <div className="d-flex align-items-center gap-2">
                        <FaRegCalendarAlt
                            className="fs-6"
                            style={{
                                color: "var(--cor-principal)",
                            }}
                        />
                        <div className="d-flex flex-column">
                            <span
                                className="text-uppercase"
                                style={{
                                    fontSize: "10px",
                                    color: "var(--cor-principal)",
                                }}
                            >
                                Última atualização
                            </span>
                            <span
                                className="fw-semibold"
                                style={{
                                    fontSize: "12px",
                                    color: "#4a5568",
                                }}
                            >
                                {lastUpdate}
                            </span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <FaUser className="fs-6" />
                        <div className="d-flex flex-column">
                            <span
                                className="text-uppercase"
                                style={{
                                    fontSize: "10px",
                                    color: "var(--cor-principal)",
                                }}
                            >
                                Resp. Comercial
                            </span>
                            <span
                                className="fw-semibold"
                                style={{
                                    fontSize: "12px",
                                    color: "#4a5568",
                                }}
                            >
                                {salesRep}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Link
                to={`/instalacoes/detalhes/${id}`}
                className="text-decoration-none text-center text-white border-0 w-100 fw-bold cursor-pointer"
                style={{
                    backgroundColor: hover ? "#2d3748" : "var(--cor-principal)",
                    padding: "14px 0",
                    fontSize: "12px",
                    transition: "background-color 0.2s",
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                VER DETALHES DO CONTRATO
            </Link>
        </div>
    );
}

export default CartaoDeContrato;
