import React, { useState, useEffect } from "react";
import Sidebar from "../../components/menuPrincipalLateral/menuPrincipalLateral";
import TabelaHistorico from "../../components/relatoriosAvancados/tabelaHistorico";
import "./relatoriosAvancados.css";
import { FaPaperPlane, FaSpinner } from "react-icons/fa";
import { vendasData } from "../../assets/data/vendasData";
import { colaboradoresData } from "../../assets/data/colaboradoresData";
import { mockData as instalacoesData } from "../../assets/data/mockData";

// Função para converter Markdown em HTML de forma mais robusta
const renderMarkdown = (text) => {
  if (!text) return null;

  const lines = text.split("\n");
  let html = "";
  let inList = false;

  lines.forEach((line) => {
    line = line.trim();
    if (line.startsWith("## ")) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      html += `<h2>${line.substring(3)}</h2>`;
    } else if (line.startsWith("* ")) {
      if (!inList) {
        html += "<ul>";
        inList = true;
      }
      const listItem = line
        .substring(2)
        .replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>");
      html += `<li>${listItem}</li>`;
    } else {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      const paragraph = line.replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>");
      if (paragraph) {
        html += `<p>${paragraph}</p>`;
      }
    }
  });

  if (inList) {
    html += "</ul>";
  }

  return (
    <div
      className="report-content-inner"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default function RelatoriosAvancados() {
  const [prompt, setPrompt] = useState("");
  const [report, setReport] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);

  // Carregar histórico do localStorage ao iniciar
  useEffect(() => {
    try {
      const storedHistory = localStorage.getItem("reportHistory");
      if (storedHistory) {
        setHistory(JSON.parse(storedHistory));
      }
    } catch (e) {
      console.error("Failed to parse history from localStorage", e);
      localStorage.removeItem("reportHistory");
    }
  }, []);

  // Salvar histórico no localStorage sempre que ele mudar
  useEffect(() => {
    localStorage.setItem("reportHistory", JSON.stringify(history));
  }, [history]);

  const handleGenerateReport = async () => {
    if (!prompt) {
      setError("Por favor, descreva o relatório que você deseja gerar.");
      return;
    }

    setIsLoading(true);
    setError("");
    setReport("");

    const dadosExemplo = `
        - Pedidos (vendasData.pedidos): Contém id, status ('Pendente', 'Aprovado', 'Em Análise'), cliente, data, local e responsável.
        - Contratos (vendasData.contratos): Contém id, status ('Dentro do prazo', 'Alerta de prazo', 'Fora do prazo'), cliente, local, modelo do elevador e responsável.
        - Clientes (vendasData.clientes): Contém id, nome, desde quando é cliente, local e estatísticas de pedidos, instalações e contratos.
        - Colaboradores (colaboradoresData): Contém id, nome, status ('ativo', 'inativo', 'em treinamento'), cargo, setor e supervisor.
        - Instalações (instalacoesData): Contém dados de contratos em diversas fases como 'aprovacao', 'obraCivil', 'fabricacao', 'aCaminho', 'emInstalacao', 'testesFinais', 'concluidos'.
        `;

    const systemPrompt = `
        Você é um analista de dados e negócios sênior na OTIS, especialista em extrair insights de dados operacionais. Sua tarefa é gerar relatórios claros, concisos e acionáveis em português brasileiro.

        **Contexto dos Dados Disponíveis:**
        Você tem acesso aos seguintes conjuntos de dados:
        ${dadosExemplo}

        **Sua Tarefa:**
        Analise a solicitação do usuário e gere um relatório detalhado sobre: "${prompt}".

        **Formato Obrigatório do Relatório:**
        1.  **Título Principal:** Comece com um título claro para o relatório (ex: \`## Análise de Colaboradores Ativos por Setor\`).
        2.  **Sumário Executivo:** Forneça 2-3 frases resumindo as principais descobertas.
        3.  **Detalhes e Insights:** Use listas (\`*\`) e negrito (\`**\`) para apresentar os dados e suas análises. Agrupe informações de forma lógica.
        4.  **Recomendações (se aplicável):** Se os dados permitirem, finalize com 1 ou 2 recomendações ou próximos passos.

        **Regras Importantes:**
        - **Baseie-se APENAS nos dados fornecidos.** Se a solicitação não puder ser respondida com os dados disponíveis, informe educadamente que a informação não está disponível. Não invente dados.
        - **Seja objetivo e profissional.** Evite linguagem casual.
        - **Use a formatação markdown especificada.**`;

    const apiKey = "AIzaSyBq-apNtlWWLOnqZoyxD3fDcx30B94HLtM";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

    const payload = {
      contents: [{ parts: [{ text: systemPrompt }] }],
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorBody = await response.json();
        console.error("Erro da API:", errorBody);
        throw new Error(
          `Erro na API: ${response.statusText}. Verifique se sua chave de API é válida.`
        );
      }

      const result = await response.json();
      const generatedText = result.candidates?.[0]?.content?.parts?.[0]?.text;

      if (generatedText) {
        setReport(generatedText);
        const newHistoryItem = {
          id: Date.now(),
          prompt,
          report: generatedText,
        };
        setHistory((prev) => [newHistoryItem, ...prev.slice(0, 19)]);
      } else {
        throw new Error(
          "Não foi possível gerar o relatório. A resposta da IA estava vazia."
        );
      }
    } catch (err) {
      setError(
        err.message ||
          "Ocorreu um erro ao gerar o relatório. Por favor, tente novamente mais tarde."
      );
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectReport = (item) => {
    setPrompt(item.prompt);
    setReport(item.report);
    setError("");
    // Rola a página para a área do relatório
    document
      .getElementById("report-display-area")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDeleteReport = (idToDelete) => {
    setHistory((prev) => prev.filter((item) => item.id !== idToDelete));
  };

  return (
    <main
      className="d-flex vh-100 overflow-hidden"
      style={{
        backgroundColor: "var(--cor-background)",
      }}
    >
      <Sidebar />
      <div
        className="flex-grow-1 overflow-y-auto d-flex flex-column"
        style={{
          padding: "40px",
        }}
      >
        <header
          style={{
            marginBottom: "30px",
            color: "var(--cor-principal)",
          }}
        >
          <h1 className="fs-4 fw-semibold mb-1">Relatórios Avançados</h1>
          <p
            className="fs-6 fw-normal m-0"
            style={{
              color: "var(--cor-terciaria)",
            }}
          >
            Gere relatórios customizados utilizando o poder da Inteligência
            Artificial.
          </p>
        </header>

        <TabelaHistorico
          history={history}
          onSelectReport={handleSelectReport}
          onDeleteReport={handleDeleteReport}
        />

        <div
          style={{
            marginBottom: "30px",
          }}
        >
          <h2
            className="fw-semibold"
            style={{
              fontSize: "18px",
              color: "var(--cor-principal)",
              marginBottom: "20px",
            }}
          >
            Gerar Novo Relatório
          </h2>
          <div className="d-flex flex-column">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ex: Qual o supervisor com mais colaboradores ativos?"
              className="prompt-input w-100 rounded-3 fs-6"
              style={{
                minHeight: "80px",
                padding: "15px",
                border: "1px solid #cbd5e0",
                resize: "vertical",
                boxSizing: "border-box",
                marginBottom: "15px",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
              disabled={isLoading}
            />
            <button
              onClick={handleGenerateReport}
              className="generate-button align-self-end text-white border-0 rounded-3 fw-bolder d-flex align-items-center"
              style={{
                backgroundColor: "var(--cor-principal)",
                padding: "12px 24px",
                fontSize: "14px",
                cursor: "pointer",
                transition: "background-color 0.3s, transform 0.2s",
                gap: "10px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
              disabled={isLoading}
            >
              {isLoading ? (
                <FaSpinner
                  style={{
                    animation: "spin 1s linear infinite",
                  }}
                />
              ) : (
                <FaPaperPlane />
              )}
              Gerar Relatório
            </button>
          </div>
        </div>

        {error && (
          <div
            className="rounded-3 text-center fw-normal"
            style={{
              backgroundColor: "#FFF5F5",
              color: "#C53030",
              padding: "15px",
              marginBottom: "20px",
            }}
          >
            {error}
          </div>
        )}

        <div
          id="report-display-area"
          className="flex-grow-1 bg-white rounded-3 d-flex flex-column"
          style={{
            border: "1px solid #e2e8f0",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
            padding: "30px",
          }}
        >
          {isLoading && (
            <div
              className="d-flex flex-column align-items-center justify-content-center h-100"
              style={{
                color: "var(--cor-terciaria)",
                minHeight: "200px",
              }}
            >
              <FaSpinner
                style={{
                  fontSize: "48px",
                  color: "var(--cor-principal)",
                  animation: "spin 1.5s linear infinite",
                  marginBottom: "20px",
                }}
              />
              <p
                className="fw-normal"
                style={{
                  fontSize: "18px",
                }}
              >
                Gerando seu relatório, por favor aguarde...
              </p>
            </div>
          )}
          {report && !isLoading && (
            <div
              style={{
                lineHeight: "1.7",
                color: "#2d3748",
              }}
            >
              {renderMarkdown(report)}
            </div>
          )}
          {!isLoading && !report && (
            <div
              className="d-flex align-items-center justify-content-center h-100 fw-normal"
              style={{
                color: "#a0aec0",
                fontSize: "18px",
                minHeight: "200px",
              }}
            >
              <p>Selecione um relatório do histórico ou gere um novo.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
