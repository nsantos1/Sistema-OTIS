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
          return item[key].toLowerCase().includes(filterValue);
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

  return (
    <main className="main-vendas">
      <Sidebar />
      <BarraDeFiltrosVendas filters={filters} onFilterChange={setFilters} />

      <div className="vendas-conteudo-principal">
        <div className="secao-vendas">
          <CabecalhoSecoes 
            titulo={"Pedidos"}
          />
          <div className="cards-wrapper">
            {filteredPedidos.map((pedido) => (
              <CardPedidos key={pedido.id} {...pedido} />
            ))}
          </div>
        </div>

        <div className="secao-vendas">
          <CabecalhoSecoes 
            titulo={"Contratos"}
          />
          <div className="cards-wrapper">
            {filteredContratos.map((contrato) => (
              <CardContratos key={contrato.id} {...contrato} />
            ))}
          </div>
        </div>

        <div className="secao-vendas">
          <CabecalhoSecoes 
            titulo={"Clientes"}
          />
          <div className="cards-wrapper">
            {filteredClientes.map((cliente) => (
              <CardClientes key={cliente.id} {...cliente} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
