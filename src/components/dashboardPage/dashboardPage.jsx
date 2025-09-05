import SecaoDeContratos from '../secaoDeContratos/secaoDeContratos.jsx';
import './dashboardPage.css';

function DashboardPage({ filteredData }) {
  const titles = {
    aprovacao: "Aguardando aprovação do contrato",
    obraCivil: "Aguardando conclusão da obra civil",
    fabricacao: "Em fabricação",
    aCaminho: "A caminho",
    emInstalacao: "Em instalação",
    testesFinais: "Em testes finais",
    concluidos: "Concluídos"
  };

  return (
    <main className="dashboard-page">
        {Object.keys(filteredData).map(etapa =>
            filteredData[etapa].length > 0 && (
                <SecaoDeContratos
                    key={etapa}
                    title={titles[etapa]}
                    contracts={filteredData[etapa]}
                />
            )
        )}
    </main>
  );
}

export default DashboardPage;