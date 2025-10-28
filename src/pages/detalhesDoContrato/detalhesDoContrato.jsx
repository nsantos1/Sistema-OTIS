import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./detalhesDoContrato.css";
import InformacaoDoContrato from "../../components/detalhesContrato/informacaoDoContrato/informacaoDoContrato.jsx";
import Documentos from "../../components/detalhesContrato/documentos/documentos.jsx";
import Observacao from "../../components/detalhesContrato/observacao/observacao.jsx";
import Sidebar from "../../components/menuPrincipalLateral/menuPrincipalLateral.jsx";
import { mockData } from "../../assets/data/mockData.js";
import { vendasData } from "../../assets/data/vendasData.js";

export default function DetalhesDoContrato() {
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
        <div className="detalhes-header">
          <h2>Contrato #{contractData.id}</h2>
          <div className="acoes">
            <button onClick={handlePrint}>Exportar PDF</button>
            <button
              onClick={() => alert("Função de edição em desenvolvimento.")}
            >
              Editar Contrato
            </button>
            <button onClick={() => navigate(-1)}>Voltar</button>
          </div>
        </div>
        <InformacaoDoContrato contract={contractData} />
        <div className="detalhes-bottom">
          <Documentos />
          <Observacao />
        </div>
      </div>
    </main>
  );
}
