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
    <main className="d-flex">
      <Sidebar />
      <div className="detalhes-colaborador">
        <div
          style={{
            gridArea: "header",
          }}
        >
          <ColaboradorHeader />
        </div>

        <div
          style={{
            gridArea: "info",
          }}
        >
          <Informacoes />
        </div>

        <div
          style={{
            gridArea: "performance",
          }}
        >
          <Performance />
        </div>

        <div
          style={{
            gridArea: "feedbacks",
          }}
        >
          <Feedbacks />
        </div>

        <div
          style={{
            gridArea: "acoes",
          }}
        >
          <AcoesRapidas />
        </div>

        <div
          style={{
            gridArea: "historico",
          }}
        >
          <Historico />
        </div>

        <div
          style={{
            gridArea: "treinamentos",
          }}
        >
          <Treinamentos />
        </div>
      </div>
    </main>
  );
}
