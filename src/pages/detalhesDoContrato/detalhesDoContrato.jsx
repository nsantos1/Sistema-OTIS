import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import InformacaoDoContrato from "../../components/detalhesContrato/informacaoDoContrato/informacaoDoContrato.jsx";
import Documentos from "../../components/detalhesContrato/documentos/documentos.jsx";
import Observacao from "../../components/detalhesContrato/observacao/observacao.jsx";
import Sidebar from "../../components/menuPrincipalLateral/menuPrincipalLateral.jsx";
import { mockData } from "../../assets/data/mockData.js";
import { vendasData } from "../../assets/data/vendasData.js";
import { useState } from "react";

export default function DetalhesDoContrato() {
  const [hoverExportPDF, setHoverExportPDF] = useState(false);
  const [hoverEditContract, setHoverEditContract] = useState(false);
  const [hoverVoltar, setHoverVoltar] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const allMockContracts = Object.values(mockData).flat();
  const allVendasContracts = vendasData.contratos;

  let contractData = allMockContracts.find((c) => c.id === id);

  if (!contractData) {
    const vendasContract = allVendasContracts.find((c) => c.id === `#CT-${id}`);
    if (vendasContract) {
      contractData = {
        id: vendasContract.id.replace("#CT-", ""),
        company: vendasContract.cliente,
        location: vendasContract.local,
        lastUpdate: vendasContract.ultimaAtualizacao,
        status: vendasContract.status,
        statusType: vendasContract.statusType,
        elevatorModel: vendasContract.modelo,
        salesRep: vendasContract.responsavel.nome,
        imageUrl: vendasContract.imagemUrl,
      };
    }
  }

  if (!contractData) {
    return (
      <main className="d-flex vh-100 w-100">
        <Sidebar />
        <div
          className="flex-grow-1 overflow-y-hidden"
          style={{
            background: "#f0f0f0",
          }}
        >
          <h2>Contrato não encontrado</h2>
          <button onClick={() => navigate(-1)} className="btn-voltar-simples">
            Voltar
          </button>
        </div>
      </main>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="d-flex vh-100 w-100">
      <Sidebar />
      <div
        className="flex-grow-1 overflow-y-auto"
        style={{
          background: "#f0f0f0",
        }}
      >
        <div
          className="d-flex justify-content-between align-items-center py-3 px-4"
          style={{
            background: "#e9edf3",
            borderBottom: "2px solid #d3d9e3",
          }}
        >
          <h2
            className="fw-bolder m-0"
            style={{
              color: "#0c2340",
              fontSize: "20px",
            }}
          >
            Contrato #{contractData.id}
          </h2>
          <div
            className="d-flex"
            style={{
              gap: "12px",
            }}
          >
            <button
              className="text-white fw-bold text-uppercase border-0"
              style={{
                padding: "8px 18px",
                borderRadius: "6px",
                backgroundColor: hoverExportPDF ? "#1e90ff" : "#0c2340",
                cursor: "pointer",
                fontSize: "14px",
                letterSpacing: "0.5px",
              }}
              onClick={handlePrint}
              onMouseEnter={() => setHoverExportPDF(true)}
              onMouseLeave={() => setHoverExportPDF(false)}
            >
              Exportar PDF
            </button>
            <button
              className="text-white fw-bold text-uppercase border-0"
              style={{
                padding: "8px 18px",
                borderRadius: "6px",
                backgroundColor: hoverEditContract ? "#1e90ff" : "#0c2340",
                cursor: "pointer",
                fontSize: "14px",
                letterSpacing: "0.5px",
              }}
              onClick={() => alert("Função de edição em desenvolvimento.")}
              onMouseEnter={() => setHoverEditContract(true)}
              onMouseLeave={() => setHoverEditContract(false)}
            >
              Editar Contrato
            </button>
            <button
              className="text-white fw-bold text-uppercase border-0"
              style={{
                padding: "8px 18px",
                borderRadius: "6px",
                backgroundColor: hoverVoltar ? "#1e90ff" : "#0c2340",
                cursor: "pointer",
                fontSize: "14px",
                letterSpacing: "0.5px",
              }}
              onClick={() => navigate(-1)}
              onMouseEnter={() => setHoverVoltar(true)}
              onMouseLeave={() => setHoverVoltar(false)}
            >
              Voltar
            </button>
          </div>
        </div>
        <InformacaoDoContrato contract={contractData} />
        <div
          className="d-flex"
          style={{
            gap: "20px",
            padding: "20px 24px",
          }}
        >
          <Documentos />
          <Observacao />
        </div>
      </div>
    </main>
  );
}
