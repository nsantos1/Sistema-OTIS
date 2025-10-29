import { useState } from "react";
import Sidebar from "../../components/menuPrincipalLateral/menuPrincipalLateral";
import "./vendas.css";
import CardPedidos from "../../components/vendas/cardPedidos";
import CardContratos from "../../components/vendas/cardContratos";
import CardClientes from "../../components/vendas/cardClientes";
import BarraDeFiltrosVendas from "../../components/barraDeFiltros/barraDeFiltrosVendas";
import { vendasData } from "../../assets/data/vendasData"; // Import mantido
import CabecalhoSecoes from "../../components/cabecalhoSecoes/cabecalhoSecoes"; // Componente de cabeçalho mantido

export default function Vendas() {
  const [filters, setFilters] = useState({
    id: "",
    cliente: "",
    responsavel: "",
  });

  // NOVO ESTADO DE CONTROLE (Padrão Instalacoes.jsx)
  const [selectedSection, setSelectedSection] = useState(null);

  // NOVA FUNÇÃO: Implementa a lógica de tela cheia (Padrão Instalacoes.jsx)
  const handleViewAll = (sectionKey) => {
    // Alterna entre a visualização de tela cheia (sectionKey) e o modo padrão (null)
    setSelectedSection(prev => (prev === sectionKey ? null : sectionKey));
  };

  const applyFilters = (data, keys) => {
    return data.filter((item) => {
      return keys.every((key) => {
        const filterValue = filters[key]?.toLowerCase();
        if (!filterValue) return true;

        if (key === "responsavel") {
          return item.responsavel.nome.toLowerCase().includes(filterValue);
        }
        if (key === "cliente" && item.cliente) {
          return item.cliente.toLowerCase().includes(filterValue);
        }
        if (key === "cliente" && item.nome) {
          return item.nome.toLowerCase().includes(filterValue);
        }
        if (item[key]) {
          return String(item[key]).toLowerCase().includes(filterValue);
        }
        return false;
      });
    });
  };

  const filteredPedidos = applyFilters(vendasData.pedidos, [
    "id",
    "cliente",
    "responsavel",
  ]);
  const filteredContratos = applyFilters(vendasData.contratos, [
    "id",
    "cliente",
    "responsavel",
  ]);
  const filteredClientes = applyFilters(vendasData.clientes, ["id", "cliente"]);

  const sectionMap = {
    pedidos: {
      title: "Pedidos",
      data: filteredPedidos,
      CardComponent: CardPedidos,
    },
    contratos: {
      title: "Contratos",
      data: filteredContratos,
      CardComponent: CardContratos,
    },
    clientes: {
      title: "Clientes",
      data: filteredClientes,
      CardComponent: CardClientes,
    },
  };
    
  // Renderiza uma única seção, adaptada para o modo de visualização
  const renderSection = (sectionKey) => {
    const { title, data, CardComponent } = sectionMap[sectionKey];
    
    const isFullView = selectedSection === sectionKey;
    const displayedData = isFullView ? data : data.slice(0, 4);

    if (data.length === 0) return null;

    return (
      <div 
        className={`secao-vendas ${isFullView ? "full-view-section" : ""}`}
        key={sectionKey}
      >
        <CabecalhoSecoes
          titulo={title}
          // Lógica de visualização padronizada
          onViewAll={() => handleViewAll(isFullView ? null : sectionKey)}
          isViewingAll={isFullView}
        />
        <div className="cards-wrapper">
          {displayedData.map((item) => (
            <CardComponent key={item.id} {...item} />
          ))}
        </div>
      </div>
    );
  };
    
  const noResultsFound =
    filteredPedidos.length === 0 &&
    filteredContratos.length === 0 &&
    filteredClientes.length === 0;

  // Lógica de renderização principal (Padrão Instalacoes.jsx)
  const content = noResultsFound ? (
    <div className="no-results-geral">
      <h2>Nenhum item encontrado</h2>
      <p>Tente ajustar os filtros da sua busca.</p>
    </div>
  ) : selectedSection ? (
    // MODO TELA CHEIA: Renderiza apenas a seção selecionada
    renderSection(selectedSection)
  ) : (
    // MODO PADRÃO: Renderiza todas as seções
    <>
      {renderSection("pedidos")}
      {renderSection("contratos")}
      {renderSection("clientes")}
    </>
  );

  return (
    <main className="main-vendas">
      <Sidebar />
      <BarraDeFiltrosVendas filters={filters} onFilterChange={setFilters} />

      <div className="vendas-conteudo-principal">
        {content}
      </div>
    </main>
  );
}