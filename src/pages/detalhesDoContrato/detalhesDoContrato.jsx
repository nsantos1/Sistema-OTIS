import React from "react";
import "../detalhesDoContrato/detalhesDoContrato.css";
import InformacaoDoContrato from '../../componentes/informacaoDoContrato/informacaoDoContrato.jsx';
import Documentos from '../../componentes/documentos/documentos.jsx';
import Observacao from '../../componentes/observacao/observacao.jsx';

export default function DetalhesDoContrato() {
  return (
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
  );
}
