import React from "react";
import "./detalhesDoContrato.css";
import InformacaoDoContrato from "../../components/detalhesContrato/informacaoDoContrato/informacaoDoContrato.jsx";
import Documentos from "../../components/detalhesContrato/documentos/documentos.jsx";
import Observacao from "../../components/detalhesContrato/observacao/observacao.jsx";
import Sidebar from "../../components/menuPrincipalLateral/menuPrincipalLateral.jsx";

export default function DetalhesDoContrato() {
  return (
    <main className="main-detalhes-do-contrato">
    <Sidebar />
    <div className="detalhes-contrato">
      <div className="detalhes-header">
        <h2>Contrato #CT-0921</h2>
        <div className="acoes">
          <button>Exportar PDF</button>
          <button>Editar Contrato</button>
          <button>Voltar</button>
        </div>
      </div>
      <InformacaoDoContrato />
      <div className="detalhes-bottom">
        <Documentos />
        <Observacao />
      </div>
    </div>
    </main>
  );
}
