import React, { useState } from "react";
import "../colaboradores/colaboradores.css";
import ColaboradorHeader from "../../componentes/colocaboradorHeader/colaboradorHeader";
import Informacoes from "../../componentes/informacoes/informacoes.jsx";
import Performance from "../../componentes/perfomace/graficoProdutividade.jsx";
import Feedbacks from "../../componentes/feedback/feedback.jsx";
import AcoesRapidas from "../../componentes/acoesRapidas/acoesRapidas.jsx";
import Historico from "../../componentes/historico/historico.jsx";
import Treinamentos from "../../componentes/treinamentoRegistro/treinamentoRegistro.jsx";

export default function Colaboradores() {
  return (
    <div className="detalhes-colaborador">
      <div className="colab-header">
        <ColaboradorHeader />
      </div>

      <div className="info-section">
        <Informacoes />
      </div>

      <div className="performance-section">
        <Performance />
      </div>

      <div className="feedbacks-section">
        <Feedbacks />
      </div>

      <div className="acoes-section">
        <AcoesRapidas />
      </div>

      <div className="historico-section">
        <Historico />
      </div>

      <div className="treinamentos-section">
        <Treinamentos />
      </div>
    </div>
  );
}
