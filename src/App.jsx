import React, { useState, useEffect } from "react";
import "./App.css";

import BarraDeFiltros from "./components/barraDeFiltros/barraDeFiltros";
import DashboardPage from "./components/dashboardPage/dashboardPage";
import MenuPrincipalLateral from "./components/menuPrincipalLateral/menuPrincipalLateral";
import imagemElevador from "./assets/img/image 3.png";

const mockData = {
  aprovacao: [
    {
      id: "#CT-0921",
      company: "Construtora Maston",
      location: "São Paulo/SP - BR",
      lastUpdate: "27/08/2025",
      status: "Dentro do prazo",
      statusType: "ontime",
      elevatorModel: "Gen2® Comfort Panorâmico",
      salesRep: "João Ricardo",
      imageUrl: imagemElevador,
    },
    {
      id: "#CT-0922",
      company: "Edifício Central",
      location: "Rio de Janeiro/RJ - BR",
      lastUpdate: "26/08/2025",
      status: "Alerta de prazo",
      statusType: "alert",
      elevatorModel: "Skyrise® High-Speed",
      salesRep: "Maria Clara",
      imageUrl: imagemElevador,
    },
    {
      id: "#CT-0923",
      company: "Shopping Plaza",
      location: "Belo Horizonte/MG - BR",
      lastUpdate: "25/08/2025",
      status: "Fora do prazo",
      statusType: "late",
      elevatorModel: "Gen2® Comfort Panorâmico",
      salesRep: "Pedro Almeida",
      imageUrl: imagemElevador,
    },
    {
      id: "#CT-0924",
      company: "Residencial Alfa",
      location: "São Paulo/SP - BR",
      lastUpdate: "24/08/2025",
      status: "Dentro do prazo",
      statusType: "ontime",
      elevatorModel: "Otis ONE® Intelligent",
      salesRep: "Ana Beatriz",
      imageUrl: imagemElevador,
    },
  ],
  obraCivil: [
    {
      id: "#CT-0855",
      company: "Hospital da Cidade",
      location: "Curitiba/PR - BR",
      lastUpdate: "27/08/2025",
      status: "Dentro do prazo",
      statusType: "ontime",
      elevatorModel: "Gen2® Comfort Panorâmico",
      salesRep: "Carlos Eduardo",
      imageUrl: imagemElevador,
    },
    {
      id: "#CT-0856",
      company: "Centro Comercial Beta",
      location: "Salvador/BA - BR",
      lastUpdate: "22/08/2025",
      status: "Alerta de prazo",
      statusType: "alert",
      elevatorModel: "Skyrise® High-Speed",
      salesRep: "Fernanda Lima",
      imageUrl: imagemElevador,
    },
    {
      id: "#CT-0857",
      company: "Torre Corporativa Sul",
      location: "Porto Alegre/RS - BR",
      lastUpdate: "21/08/2025",
      status: "Dentro do prazo",
      statusType: "ontime",
      elevatorModel: "Otis ONE® Intelligent",
      salesRep: "Ricardo Gomes",
      imageUrl: imagemElevador,
    },
    {
      id: "#CT-0858",
      company: "Complexo Industrial Norte",
      location: "Joinville/SC - BR",
      lastUpdate: "20/08/2025",
      status: "Dentro do prazo",
      statusType: "ontime",
      elevatorModel: "Gen2® Comfort Panorâmico",
      salesRep: "Juliana Paes",
      imageUrl: imagemElevador,
    },
  ],
  fabricacao: [
    {
      id: "#CT-0731",
      company: "Torre Empresarial",
      location: "Porto Alegre/RS - BR",
      lastUpdate: "24/08/2025",
      status: "Dentro do prazo",
      statusType: "ontime",
      elevatorModel: "Gen2® Comfort Panorâmico",
      salesRep: "João Ricardo",
      imageUrl: imagemElevador,
    },
    {
      id: "#CT-0732",
      company: "Fábrica de Inovação",
      location: "Campinas/SP - BR",
      lastUpdate: "23/08/2025",
      status: "Dentro do prazo",
      statusType: "ontime",
      elevatorModel: "Skyrise® High-Speed",
      salesRep: "Maria Clara",
      imageUrl: imagemElevador,
    },
    {
      id: "#CT-0733",
      company: "Logística Express",
      location: "Guarulhos/SP - BR",
      lastUpdate: "22/08/2025",
      status: "Fora do prazo",
      statusType: "late",
      elevatorModel: "Otis ONE® Intelligent",
      salesRep: "Pedro Almeida",
      imageUrl: imagemElevador,
    },
    {
      id: "#CT-0734",
      company: "Centro de Distribuição Leste",
      location: "São José dos Pinhais/PR",
      lastUpdate: "21/08/2025",
      status: "Dentro do prazo",
      statusType: "ontime",
      elevatorModel: "Gen2® Comfort Panorâmico",
      salesRep: "Ana Beatriz",
      imageUrl: imagemElevador,
    },
  ],
  aCaminho: [
    {
      id: "#CT-0715",
      company: "Condomínio Sol Nascente",
      location: "Recife/PE - BR",
      lastUpdate: "20/08/2025",
      status: "Dentro do prazo",
      statusType: "ontime",
      elevatorModel: "Skyrise® High-Speed",
      salesRep: "Carlos Eduardo",
      imageUrl: imagemElevador,
    },
    {
      id: "#CT-0716",
      company: "Indústria Metalúrgica",
      location: "Manaus/AM - BR",
      lastUpdate: "19/08/2025",
      status: "Dentro do prazo",
      statusType: "ontime",
      elevatorModel: "Gen2® Comfort Panorâmico",
      salesRep: "Fernanda Lima",
      imageUrl: imagemElevador,
    },
    {
      id: "#CT-0717",
      company: "Resort Costa Verde",
      location: "Maceió/AL - BR",
      lastUpdate: "18/08/2025",
      status: "Alerta de prazo",
      statusType: "alert",
      elevatorModel: "Otis ONE® Intelligent",
      salesRep: "Ricardo Gomes",
      imageUrl: imagemElevador,
    },
    {
      id: "#CT-0718",
      company: "Terminal Portuário",
      location: "Santos/SP - BR",
      lastUpdate: "17/08/2025",
      status: "Dentro do prazo",
      statusType: "ontime",
      elevatorModel: "Skyrise® High-Speed",
      salesRep: "Juliana Paes",
      imageUrl: imagemElevador,
    },
  ],
  emInstalacao: [
    {
      id: "#CT-0690",
      company: "Edifício Gama",
      location: "Fortaleza/CE - BR",
      lastUpdate: "18/08/2025",
      status: "Fora do prazo",
      statusType: "late",
      elevatorModel: "Gen2® Comfort Panorâmico",
      salesRep: "João Ricardo",
      imageUrl: imagemElevador,
    },
    {
      id: "#CT-0691",
      company: "Universidade Central",
      location: "Brasília/DF - BR",
      lastUpdate: "17/08/2025",
      status: "Dentro do prazo",
      statusType: "ontime",
      elevatorModel: "Skyrise® High-Speed",
      salesRep: "Maria Clara",
      imageUrl: imagemElevador,
    },
    {
      id: "#CT-0692",
      company: "Clínica Saúde Plena",
      location: "Goiânia/GO - BR",
      lastUpdate: "16/08/2025",
      status: "Alerta de prazo",
      statusType: "alert",
      elevatorModel: "Otis ONE® Intelligent",
      salesRep: "Pedro Almeida",
      imageUrl: imagemElevador,
    },
    {
      id: "#CT-0693",
      company: "Sede Administrativa Delta",
      location: "Campo Grande/MS - BR",
      lastUpdate: "15/08/2025",
      status: "Dentro do prazo",
      statusType: "ontime",
      elevatorModel: "Gen2® Comfort Panorâmico",
      salesRep: "Ana Beatriz",
      imageUrl: imagemElevador,
    },
  ],
  testesFinais: [
    {
      id: "#CT-0511",
      company: "Prédio Administrativo",
      location: "Belém/PA - BR",
      lastUpdate: "15/08/2025",
      status: "Dentro do prazo",
      statusType: "ontime",
      elevatorModel: "Skyrise® High-Speed",
      salesRep: "Carlos Eduardo",
      imageUrl: imagemElevador,
    },
    {
      id: "#CT-0512",
      company: "Centro de Pesquisa Avançada",
      location: "São Carlos/SP - BR",
      lastUpdate: "14/08/2025",
      status: "Dentro do prazo",
      statusType: "ontime",
      elevatorModel: "Gen2® Comfort Panorâmico",
      salesRep: "Fernanda Lima",
      imageUrl: imagemElevador,
    },
    {
      id: "#CT-0513",
      company: "Laboratório de Tecnologia",
      location: "Florianópolis/SC - BR",
      lastUpdate: "13/08/2025",
      status: "Dentro do prazo",
      statusType: "ontime",
      elevatorModel: "Otis ONE® Intelligent",
      salesRep: "Ricardo Gomes",
      imageUrl: imagemElevador,
    },
    {
      id: "#CT-0514",
      company: "Observatório Astronômico",
      location: "Itajubá/MG - BR",
      lastUpdate: "12/08/2025",
      status: "Alerta de prazo",
      statusType: "alert",
      elevatorModel: "Skyrise® High-Speed",
      salesRep: "Juliana Paes",
      imageUrl: imagemElevador,
    },
  ],
  concluidos: [
    {
      id: "#CT-0401",
      company: "Residencial Jardins",
      location: "Florianópolis/SC - BR",
      lastUpdate: "10/08/2025",
      status: "Concluído",
      statusType: "ontime",
      elevatorModel: "Gen2® Comfort Panorâmico",
      salesRep: "João Ricardo",
      imageUrl: imagemElevador,
    },
    {
      id: "#CT-0402",
      company: "Hotel Boa Viagem",
      location: "Vitória/ES - BR",
      lastUpdate: "09/08/2025",
      status: "Concluído",
      statusType: "ontime",
      elevatorModel: "Skyrise® High-Speed",
      salesRep: "Maria Clara",
      imageUrl: imagemElevador,
    },
    {
      id: "#CT-0403",
      company: "Museu de Arte Moderna",
      location: "Niterói/RJ - BR",
      lastUpdate: "08/08/2025",
      status: "Concluído",
      statusType: "ontime",
      elevatorModel: "Otis ONE® Intelligent",
      salesRep: "Pedro Almeida",
      imageUrl: imagemElevador,
    },
    {
      id: "#CT-0404",
      company: "Biblioteca Nacional",
      location: "Rio de Janeiro/RJ - BR",
      lastUpdate: "07/08/2025",
      status: "Concluído",
      statusType: "ontime",
      elevatorModel: "Gen2® Comfort Panorâmico",
      salesRep: "Ana Beatriz",
      imageUrl: imagemElevador,
    },
  ],
};

function App() {
  const [filters, setFilters] = useState({
    id: "",
    company: "",
    location: "",
    elevatorModel: "",
    salesRep: "",
    startDate: "",
    endDate: "",
    status: [],
    etapas: ["aprovacao"],
  });

  const [filteredData, setFilteredData] = useState(mockData);

  useEffect(() => {
    let data = { ...mockData };

    if (filters.etapas.length > 0) {
      data = filters.etapas.reduce((obj, key) => {
        if (mockData[key]) obj[key] = mockData[key];
        return obj;
      }, {});
    }

    Object.keys(data).forEach((etapa) => {
      let etapaData = data[etapa];

      if (filters.id) {
        etapaData = etapaData.filter((item) =>
          item.id.toLowerCase().includes(filters.id.toLowerCase())
        );
      }
      if (filters.company) {
        etapaData = etapaData.filter((item) =>
          item.company.toLowerCase().includes(filters.company.toLowerCase())
        );
      }
      if (filters.location) {
        etapaData = etapaData.filter((item) =>
          item.location.toLowerCase().includes(filters.location.toLowerCase())
        );
      }
      if (filters.elevatorModel) {
        etapaData = etapaData.filter((item) =>
          item.elevatorModel
            .toLowerCase()
            .includes(filters.elevatorModel.toLowerCase())
        );
      }
      if (filters.salesRep) {
        etapaData = etapaData.filter((item) =>
          item.salesRep.toLowerCase().includes(filters.salesRep.toLowerCase())
        );
      }
      if (filters.status.length > 0) {
        etapaData = etapaData.filter((item) =>
          filters.status.includes(item.statusType)
        );
      }

      data[etapa] = etapaData;
    });

    setFilteredData(data);
  }, [filters]);

  return (
    <div className="app-container">
      <MenuPrincipalLateral />
      <BarraDeFiltros filters={filters} onFilterChange={setFilters} />
      <div className="main-content">
        <DashboardPage filteredData={filteredData} />
      </div>
    </div>
  );
}

export default App;
