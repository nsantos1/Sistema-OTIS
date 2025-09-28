import { useState } from "react";
import Sidebar from "../../components/menuPrincipalLateral/menuPrincipalLateral";
import "./vendas.css";
import CardPedidos from "../../components/vendas/cardPedidos";
import CardContratos from "../../components/vendas/cardContratos";
import CardClientes from "../../components/vendas/cardClientes";
import BarraDeFiltrosVendas from "../../components/barraDeFiltros/barraDeFiltrosVendas";
import { vendasData } from "../../assets/data/vendasData";
import CabecalhoSecoes from "../../components/cabecalhoSecoes/cabecalhoSecoes";

export default function Vendas() {
  const [filters, setFilters] = useState({
    id: "",
    cliente: "",
    responsavel: "",
  });

  const [viewAll, setViewAll] = useState({
    pedidos: false,
    contratos: false,
    clientes: false,
  });

  const toggleViewAll = (section) => {
    setViewAll((prev) => ({ ...prev, [section]: !prev[section] }));
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

  const displayedPedidos = viewAll.pedidos
    ? filteredPedidos
    : filteredPedidos.slice(0, 4);
  const displayedContratos = viewAll.contratos
    ? filteredContratos
    : filteredContratos.slice(0, 4);
  const displayedClientes = viewAll.clientes
    ? filteredClientes
    : filteredClientes.slice(0, 4);
    
  const noResultsFound =
    filteredPedidos.length === 0 &&
    filteredContratos.length === 0 &&
    filteredClientes.length === 0;

  return (
    <main className="main-vendas">
      <Sidebar />
      <BarraDeFiltrosVendas filters={filters} onFilterChange={setFilters} />

      <div className="vendas-conteudo-principal">
        {noResultsFound ? (
          <div className="no-results-geral">
            <h2>Nenhum item encontrado</h2>
            <p>Tente ajustar os filtros da sua busca.</p>
          </div>
        ) : (
          <>
            {filteredPedidos.length > 0 && (
              <div className="secao-vendas">
                <CabecalhoSecoes
                  titulo={"Pedidos"}
                  onViewAll={() => toggleViewAll("pedidos")}
                  isViewingAll={viewAll.pedidos}
                />
                <div className="cards-wrapper">
                  {displayedPedidos.map((pedido) => (
                    <CardPedidos key={pedido.id} {...pedido} />
                  ))}
                </div>
              </div>
            )}

            {filteredContratos.length > 0 && (
              <div className="secao-vendas">
                <CabecalhoSecoes
                  titulo={"Contratos"}
                  onViewAll={() => toggleViewAll("contratos")}
                  isViewingAll={viewAll.contratos}
                />
                <div className="cards-wrapper">
                  {displayedContratos.map((contrato) => (
                    <CardContratos key={contrato.id} {...contrato} />
                  ))}
                </div>
              </div>
            )}

            {filteredClientes.length > 0 && (
              <div className="secao-vendas">
                <CabecalhoSecoes
                  titulo={"Clientes"}
                  onViewAll={() => toggleViewAll("clientes")}
                  isViewingAll={viewAll.clientes}
                />
                <div className="cards-wrapper">
                  {displayedClientes.map((cliente) => (
                    <CardClientes key={cliente.id} {...cliente} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}