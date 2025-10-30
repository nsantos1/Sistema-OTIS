import { useState, useMemo } from "react";
import BarraDeFiltrosPosVenda from "../../components/barraDeFiltros/barraDeFiltrosPosVenda.jsx";
import SecaoDeContratos from "../../components/instalacoes/secaoDeContratos/secaoDeContratos.jsx"; // Componente padronizado
import Sidebar from "../../components/menuPrincipalLateral/menuPrincipalLateral.jsx";

// DADOS MANTIDOS DENTRO DO ARQUIVO, CONFORME SOLICITADO
const mockData = {
  manutencao: [
    {
      id: "CT-0921",
      salesRep: "João Ricardo",
      company: "Construtora Maston",
      local: "São Paulo/SP",
      data: "27/08/2025",
      estado: "em-aberto-mais",
      titulo: "Elevador Travando no 2º andar",
      relato: "Cliente relatava travamento intermitente após horário de pico.",
    },
    {
      id: "CT-0922",
      salesRep: "Nicolas Santos",
      company: "Construtora Salos",
      local: "Macaé/RJ",
      data: "29/08/2025",
      estado: "em-aberto",
      titulo: "Elevador com ruído estranho",
      relato: "Ruído metálico ao subir entre o 3º e 4º andar.",
    },
    {
      id: "CT-0923",
      salesRep: "Eduardo Vicentini",
      company: "Construtora Levy",
      local: "São Paulo/SP",
      data: "27/08/2025",
      estado: "resolvido",
      titulo: "Porta não fecha completamente",
      relato: "A porta do elevador de serviço não está fechando por completo.",
    },
    {
      id: "CT-0924",
      salesRep: "Eduardo Bielecky",
      company: "Construtora Milho",
      local: "Salvador/BA",
      data: "16/08/2025",
      estado: "em-aberto-mais",
      titulo: "Botão do 5º andar não funciona",
      relato: "O botão de chamada do 5º andar não está acendendo.",
    },
    {
      id: "CT-0925",
      salesRep: "Caio Ribeiro",
      company: "Construtora Silk",
      local: "Volta Redonda/RJ",
      data: "24/08/2025",
      estado: "em-aberto-mais",
      titulo: "Luz piscando na cabine",
      relato: "A iluminação interna da cabine está piscando.",
    },
  ],
  suporte: [
    {
      id: "CT-0926",
      salesRep: "Eduardo Bielecky",
      company: "Construtora Milho",
      local: "Salvador/BA",
      data: "16/08/2025",
      estado: "em-aberto-mais",
      titulo: "Dúvida sobre o contrato",
      relato: "Cliente com dúvida sobre a cláusula de reajuste anual.",
    },
    {
      id: "CT-0927",
      salesRep: "Eduardo Vicentini",
      company: "Construtora Levy",
      local: "São Paulo/SP",
      data: "27/08/2025",
      estado: "resolvido",
      titulo: "Solicitação de 2ª via de boleto",
      relato: "Cliente não recebeu o boleto de manutenção deste mês.",
    },
    {
      id: "CT-0928",
      salesRep: "Caio Ribeiro",
      company: "Construtora Silk",
      local: "Volta Redonda/RJ",
      data: "24/08/2025",
      estado: "em-atendimento",
      titulo: "Alteração de dados cadastrais",
      relato: "Solicitação de alteração do e-mail para envio de notas fiscais.",
    },
    {
      id: "CT-0929",
      salesRep: "João Ricardo",
      company: "Construtora Maston",
      local: "São Paulo/SP",
      data: "27/08/2025",
      estado: "em-aberto-mais",
      titulo: "Agendamento de visita técnica",
      relato: "Cliente solicita agendamento para verificação geral.",
    },
    {
      id: "CT-0930",
      salesRep: "Nicolas Santos",
      company: "Construtora Salos",
      local: "Macaé/RJ",
      data: "29/08/2025",
      estado: "em-aberto",
      titulo: "Informações sobre modernização",
      relato: "Cliente quer saber mais sobre as opções de modernização.",
    },
  ],
  avaliacao: [
    {
      id: "CT-0931",
      salesRep: "Gui Negão",
      company: "Construtora Kuro",
      local: "Curitiba/PR",
      data: "29/08/2025",
      estado: "em-aberto",
      titulo: "Avaliação de desempenho do equipamento",
      relato: "Análise técnica para otimização de performance.",
    },
    {
      id: "CT-0932",
      salesRep: "Caio Ribeiro",
      company: "Construtora Silk",
      local: "Volta Redonda/RJ",
      data: "24/08/2025",
      estado: "em-aberto-mais",
      titulo: "Verificação de normas de segurança",
      relato:
        "Inspeção para garantir conformidade com as novas regulamentações.",
    },
    {
      id: "CT-0933",
      salesRep: "Eduardo Bielecky",
      company: "Construtora Milho",
      local: "Salvador/BA",
      data: "16/08/2025",
      estado: "em-atendimento",
      titulo: "Análise de consumo de energia",
      relato:
        "Cliente solicitou uma avaliação do consumo elétrico do elevador.",
    },
    {
      id: "CT-0934",
      salesRep: "João Ricardo",
      company: "Construtora Maston",
      local: "São Paulo/SP",
      data: "27/08/2025",
      estado: "em-aberto-mais",
      titulo: "Relatório de uso do elevador",
      relato: "Solicitação de relatório com estatísticas de uso.",
    },
    {
      id: "CT-0935",
      salesRep: "Eduardo Vicentini",
      company: "Construtora Levy",
      local: "São Paulo/SP",
      data: "27/08/2025",
      estado: "resolvido",
      titulo: "Inspeção de rotina",
      relato: "Avaliação periódica de funcionamento concluída com sucesso.",
    },
    {
      id: "CT-0936",
      salesRep: "Nicolas Santos",
      company: "Construtora Salos",
      local: "Macaé/RJ",
      data: "29/08/2025",
      estado: "em-aberto",
      titulo: "Diagnóstico de vibração",
      relato: "Analisar vibração anormal reportada por usuários.",
    },
  ],
};

function PosVenda() {
  const [filters, setFilters] = useState({
    id: "",
    company: "",
    local: "",
    titulo: "",
    salesRep: "",
    startDate: "",
    endDate: "",
    tipoDeChamado: [],
    estado: [],
  });

  // NOVO ESTADO DE CONTROLE (Padrão Instalacoes.jsx)
  const [selectedEtapa, setSelectedEtapa] = useState(null);

  // Lógica de Filtro migrada para useMemo
  const filteredData = useMemo(() => {
    let data = { ...mockData };

    // Passo 1: Filtrar por 'tipoDeChamado' (seção)
    if (filters.tipoDeChamado.length > 0) {
      data = filters.tipoDeChamado.reduce((obj, key) => {
        if (mockData[key]) {
          obj[key] = mockData[key];
        }
        return obj;
      }, {});
    }

    const finalData = {};
    // Passo 2: Aplicar filtros de texto e estado em cada seção
    Object.keys(data).forEach((tipoDeChamado) => {
      let tipoDeChamadoData = data[tipoDeChamado];

      // Aplicar filtros de texto
      if (filters.id)
        tipoDeChamadoData = tipoDeChamadoData.filter((item) =>
          item.id.toLowerCase().includes(filters.id.toLowerCase())
        );
      if (filters.company)
        tipoDeChamadoData = tipoDeChamadoData.filter((item) =>
          item.company.toLowerCase().includes(filters.company.toLowerCase())
        );
      if (filters.local)
        tipoDeChamadoData = tipoDeChamadoData.filter((item) =>
          item.local.toLowerCase().includes(filters.local.toLowerCase())
        );
      if (filters.titulo)
        tipoDeChamadoData = tipoDeChamadoData.filter((item) =>
          item.titulo.toLowerCase().includes(filters.titulo.toLowerCase())
        );
      if (filters.salesRep)
        tipoDeChamadoData = tipoDeChamadoData.filter((item) =>
          item.salesRep.toLowerCase().includes(filters.salesRep.toLowerCase())
        );

      // Aplicar filtro de estado
      if (filters.estado.length > 0) {
        tipoDeChamadoData = tipoDeChamadoData.filter((item) =>
          filters.estado.includes(item.estado)
        );
      }

      if (tipoDeChamadoData.length > 0) {
        finalData[tipoDeChamado] = tipoDeChamadoData;
      }
    });

    return finalData;
  }, [filters]);

  // NOVA FUNÇÃO DE "VER TODOS" (Padrão Instalacoes.jsx)
  const handleViewAll = (etapaKey) => {
    setSelectedEtapa(etapaKey);
  };

  const titulos = {
    manutencao: "Manutenção",
    suporte: "Suporte",
    avaliacao: "Avaliação",
  };

  const noResults = Object.keys(filteredData).length === 0;

  // Lógica de renderização principal (Padrão Instalacoes.jsx)
  const content = selectedEtapa ? (
    <SecaoDeContratos // Renderiza a seção expandida
      key={selectedEtapa}
      title={titulos[selectedEtapa]}
      contracts={filteredData[selectedEtapa] || []}
      isFullView={true}
      onViewAllClick={() => handleViewAll(null)} // Botão "Ver Todos" volta
    />
  ) : noResults ? (
    <div
      className="text-center"
      style={{
        padding: "60px 20px",
        color: "var(--cor-secundaria)",
      }}
    >
      <h2
        className="fw-bold"
        style={{
          fontSize: "30px",
          marginBottom: "10px",
          color: "var(--cor-principal)",
        }}
      >
        Nenhum chamado encontrado!
      </h2>
      <p
        className="fw-normal"
        style={{
          fontSize: "18px",
        }}
      >
        Tente ajustar seus filtros de busca.
      </p>
    </div>
  ) : (
    <div className="d-flex flex-column w-100">
      {/* Renderiza todas as seções (Modo Padrão) */}
      {Object.keys(filteredData).map(
        (tipo) =>
          filteredData[tipo].length > 0 && (
            <SecaoDeContratos // Usa o componente padronizado
              key={tipo}
              title={titulos[tipo]}
              contracts={filteredData[tipo]}
              isFullView={false} // Não está em tela cheia
              onViewAllClick={() => handleViewAll(tipo)} // Botão "Ver Todos" expande
            />
          )
      )}
    </div>
  );

  return (
    <main className="d-flex vh-100 overflow-hidden">
      <Sidebar />
      <BarraDeFiltrosPosVenda filters={filters} onFilterChange={setFilters} />
      <div
        className="d-flex flex-column overflow-y-auto flex-grow-1"
        style={{
          paddingLeft: "42px",
          maxHeight: "100vh",
          paddingRight: "160px",
          backgroundColor: "var(--cor-background)",
        }}
      >
        {/* Legenda mantida */}
        <div
          className="d-flex align-items-center justify-content-between bg-white"
          style={{
            color: "#485d78",
            margin: "50px 0",
            padding: "8px 23px",
            border: "1px solid rgba(0, 0, 0, 25%)",
            borderRadius: "25px",
          }}
        >
          <div
            className="d-flex align-items-center"
            style={{
              gap: "7px",
            }}
          >
            <div
              className="rounded-circle"
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: "#e9b700",
              }}
            ></div>
            <div className="d-flex flex-column fs-6">
              <strong>Em aberto</strong>
              <span
                className="fw-semibold"
                style={{
                  fontSize: "13px",
                }}
              >
                Menos de 1 dia
              </span>
            </div>
          </div>
          <div
            className="d-flex align-items-center"
            style={{
              gap: "7px",
            }}
          >
            <div
              className="rounded-circle"
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: "#c70000",
              }}
            ></div>
            <div className="d-flex flex-column fs-6">
              <strong>Em aberto</strong>
              <span
                className="fw-semibold"
                style={{
                  fontSize: "13px",
                }}
              >
                Mais de 1 dia
              </span>
            </div>
          </div>
          <div
            className="d-flex align-items-center"
            style={{
              gap: "7px",
            }}
          >
            <div
              className="rounded-circle"
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: "#0003b5",
              }}
            ></div>
            <div className="d-flex flex-column fs-6">
              <strong>Em atendimento</strong>
            </div>
          </div>
          <div
            className="d-flex align-items-center"
            style={{
              gap: "7px",
            }}
          >
            <div
              className="rounded-circle"
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: "#00a100",
              }}
            ></div>
            <div className="d-flex flex-column fs-6">
              <strong>Resolvido</strong>
            </div>
          </div>
        </div>
        <div className="d-flex">{content}</div>
      </div>
    </main>
  );
}

export default PosVenda;
