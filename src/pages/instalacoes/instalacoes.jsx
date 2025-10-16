import { useState, useMemo } from "react";
import SecaoDeContratos from "../../components/instalacoes/secaoDeContratos/secaoDeContratos.jsx";
import BarraDeFiltros from "../../components/barraDeFiltros/barraDeFiltros.jsx";
import { mockData } from "../../assets/data/mockData.js";
import "./instalacoes.css";
import Sidebar from "../../components/menuPrincipalLateral/menuPrincipalLateral.jsx";
import InsightCard from "../../components/instalacoes/insightCard/insightCard.jsx";
import { FaHardHat, FaCheckCircle, FaExclamationTriangle, FaHourglassHalf, FaShippingFast, FaTools, FaClipboardList } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';


function Instalacoes() {
  const [filters, setFilters] = useState({
    etapas: [],
    status: [],
    id: "",
    company: "",
    location: "",
    elevatorModel: "",
    salesRep: "",
  });

  const [selectedEtapa, setSelectedEtapa] = useState(null);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleViewAll = (etapaKey) => {
    setSelectedEtapa(etapaKey);
  };

  const allContracts = useMemo(() => Object.values(mockData).flat(), []);

  const filteredData = useMemo(() => {
    return Object.entries(mockData).reduce(
      (acc, [etapa, contracts]) => {
        if (filters.etapas.length === 0 || filters.etapas.includes(etapa)) {
          const filteredContracts = contracts.filter((contract) => {
            return (
              (filters.id ? contract.id.includes(filters.id) : true) &&
              (filters.company
                ? contract.company
                    .toLowerCase()
                    .includes(filters.company.toLowerCase())
                : true) &&
              (filters.location
                ? contract.location
                    .toLowerCase()
                    .includes(filters.location.toLowerCase())
                : true) &&
              (filters.elevatorModel
                ? contract.elevatorModel
                    .toLowerCase()
                    .includes(filters.elevatorModel.toLowerCase())
                : true) &&
              (filters.salesRep
                ? contract.salesRep
                    .toLowerCase()
                    .includes(filters.salesRep.toLowerCase())
                : true) &&
              (filters.status && filters.status.length > 0
                ? filters.status.includes(contract.statusType)
                : true)
            );
          });
          if (filteredContracts.length > 0) {
            acc[etapa] = filteredContracts;
          }
        }
        return acc;
      },
      {}
    );
  }, [filters]);

  const titles = {
    aprovacao: "Aguardando aprovação do contrato",
    obraCivil: "Aguardando conclusão da obra civil",
    fabricacao: "Em fabricação",
    aCaminho: "A caminho",
    emInstalacao: "Em instalação",
    testesFinais: "Em testes finais",
    concluidos: "Concluídos",
  };
  
  const stats = useMemo(() => {
    const contracts = Object.values(filteredData).flat();
    return {
      total: contracts.length,
      ontime: contracts.filter(c => c.statusType === 'ontime').length,
      alert: contracts.filter(c => c.statusType === 'alert').length,
      late: contracts.filter(c => c.statusType === 'late').length,
      concluidos: filteredData.concluidos?.length || 0,
    };
  }, [filteredData]);

  const chartData = useMemo(() => {
    return Object.keys(titles).map(key => ({
      name: titles[key],
      value: (filteredData[key] || []).length
    }));
  }, [filteredData, titles]);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A259FF', '#FF69B4', '#8A2BE2'];


  const noResults = Object.keys(filteredData).length === 0;

  const content = selectedEtapa ? (
    <SecaoDeContratos
      key={selectedEtapa}
      title={titles[selectedEtapa]}
      contracts={filteredData[selectedEtapa] || []}
      isFullView={true}
      onViewAllClick={() => handleViewAll(null)}
    />
  ) : noResults ? (
    <div className="no-results-message-instalacoes">
      <h2>Nenhum contrato encontrado!</h2>
      <p>Tente ajustar seus filtros.</p>
    </div>
  ) : (
    <>
      <div className="insights-grid">
        <InsightCard value={stats.total} label="Total de Instalações" icon={FaHardHat} />
        <InsightCard value={stats.concluidos} label="Concluídas" icon={FaCheckCircle} />
        <InsightCard value={stats.ontime} label="Dentro do Prazo" icon={FaHourglassHalf} />
        <InsightCard value={stats.alert} label="Alerta de Prazo" icon={FaExclamationTriangle} />
        <InsightCard value={stats.late} label="Fora do Prazo" icon={FaExclamationTriangle} />
      </div>
       <div className="chart-container-instalacoes">
        <h3>Distribuição de Instalações por Etapa</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 30, left: 30, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" width={240} tick={{ fontSize: 12 }} interval={0} />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" name="Contratos nesta etapa">
                {
                  chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))
                }
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      {Object.keys(filteredData).map((etapa) => (
        <SecaoDeContratos
          key={etapa}
          title={titles[etapa]}
          contracts={filteredData[etapa]}
          isFullView={false}
          onViewAllClick={() => handleViewAll(etapa)}
        />
      ))}
    </>
  );

  return (
    <div className="main-dashboard">
      <Sidebar />
      <div
        className={`dashboard-container ${selectedEtapa ? "full-width" : ""}`}
      >
        <BarraDeFiltros filters={filters} onFilterChange={handleFilterChange} />
        <main className="dashboard-page">{content}</main>
      </div>
    </div>
  );
}

export default Instalacoes;

