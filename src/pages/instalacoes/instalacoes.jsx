import { useState } from 'react';
import SecaoDeContratos from '../../components/instalacoes/secaoDeContratos/secaoDeContratos.jsx';
import BarraDeFiltros from '../../components/barraDeFiltros/barraDeFiltros.jsx';
import { mockData } from '../../assets/data/mockData.js'; 
import './instalacoes.css';
import Sidebar from '../../components/menuPrincipalLateral/menuPrincipalLateral.jsx';

function Instalacoes() {
  
  const [filters, setFilters] = useState({
    etapas: [],
    status: [],
    id: '',
    company: '',
    location: '',
    elevatorModel: '',
    salesRep: '',
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  
  const filteredData = Object.entries(mockData).reduce((acc, [etapa, contracts]) => {
    if (filters.etapas.length === 0 || filters.etapas.includes(etapa)) {
      const filteredContracts = contracts.filter(contract => {
        return (
          (filters.id ? contract.id.includes(filters.id) : true) &&
          (filters.company ? contract.company.toLowerCase().includes(filters.company.toLowerCase()) : true) &&
          (filters.location ? contract.location.toLowerCase().includes(filters.location.toLowerCase()) : true) &&
          (filters.elevatorModel ? contract.elevatorModel.toLowerCase().includes(filters.elevatorModel.toLowerCase()) : true) &&
          (filters.salesRep ? contract.salesRep.toLowerCase().includes(filters.salesRep.toLowerCase()) : true) &&
          (filters.status && filters.status.length > 0 ? filters.status.includes(contract.statusType) : true)
        );
      });
      if (filteredContracts.length > 0) {
        acc[etapa] = filteredContracts;
      }
    }
    return acc;
  }, {});

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
    <div className='main-dashboard'>
    <Sidebar />
    <div className="dashboard-container">
      <BarraDeFiltros filters={filters} onFilterChange={handleFilterChange} />
      <main className="dashboard-page">
          {Object.keys(filteredData).map(etapa =>
              <SecaoDeContratos
                  key={etapa}
                  title={titles[etapa]}
                  contracts={filteredData[etapa]}
              />
          )}
      </main>
    </div>
    </div>
  );
}

export default Instalacoes;