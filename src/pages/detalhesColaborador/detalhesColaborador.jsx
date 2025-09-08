import "./detalhesColaborador.css";
import ColaboradorHeader from "../../components/detalhesColaborador/colaboradorHeader/colaboradorHeader.jsx";
import Informacoes from "../../components/detalhesColaborador/informacoes/informacoes.jsx";
import Performance from "../../components/detalhesColaborador/perfomace/graficoProdutividade.jsx";
import Feedbacks from "../../components/detalhesColaborador/feedback/feedback.jsx";
import AcoesRapidas from "../../components/detalhesColaborador/acoesRapidas/acoesRapidas.jsx";
import Historico from "../../components/detalhesColaborador/historico/historico.jsx";
import Treinamentos from "../../components/detalhesColaborador/treinamentoRegistro/treinamentoRegistro.jsx";
import Sidebar from "../../components/menuPrincipalLateral/menuPrincipalLateral.jsx";

export default function DetalhesColaboradores() {
  return (
    <main className="main-detalhes-colaborador">
      <Sidebar />
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
    </main>
  );
}
