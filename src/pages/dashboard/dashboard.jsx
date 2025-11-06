// src/pages/dashboard/dashboard.jsx

import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Sidebar from "../../components/menuPrincipalLateral/menuPrincipalLateral";
import KpiCard from "../../components/kpiCard/kpiCard";
import PeriodFilter from "../../components/filtrodeperiodo/Periodfilter";
import "./dashboard.css";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// =================================================================
// MOCK DATA
// =================================================================
const productionData = [
  {
    date: "2025-07-05",
    products_produced: 100,
    total_cost: 5000,
    rework_percentage: 5.0,
  },
  {
    date: "2025-07-20",
    products_produced: 120,
    total_cost: 6500,
    rework_percentage: 6.2,
  },
  {
    date: "2025-08-10",
    products_produced: 90,
    total_cost: 4800,
    rework_percentage: 4.5,
  },
  {
    date: "2025-08-25",
    products_produced: 150,
    total_cost: 7000,
    rework_percentage: 7.8,
  },
  {
    date: "2025-09-03",
    products_produced: 130,
    total_cost: 6200,
    rework_percentage: 6.0,
  },
  {
    date: "2025-09-18",
    products_produced: 110,
    total_cost: 5500,
    rework_percentage: 3.1,
  },
];

const prazoPorAreaData = [
  { name: "Vendas", dias: 17 },
  { name: "Fábrica", dias: 14 },
  { name: "Campo", dias: 23 },
  { name: "Qualidade", dias: 5 },
  { name: "Engenharia", dias: 5 },
];

const evolucaoPrazoData = [
  { name: "Jan", value: 80 },
  { name: "Fev", value: 85 },
  { name: "Mar", value: 82 },
  { name: "Abr", value: 88 },
  { name: "Mai", value: 84 },
  { name: "Jun", value: 81 },
  { name: "Jul", value: 86 },
  { name: "Ago", value: 83 },
  { name: "Set", value: 87 },
  { name: "Out", value: 90 },
  { name: "Nov", value: 92 },
  { name: "Dez", value: 95 },
];

const distribuicaoCustosData = [
  { name: "Vendas", value: 27 },
  { name: "Fábrica", value: 42 },
  { name: "Campo", value: 20 },
  { name: "Qualidade", value: 8 },
  { name: "Engenharia", value: 3 },
];

const desempenhoPorAreaData = [
  { subject: "Qualidade", A: 90, fullMark: 100 },
  { subject: "Prazo", A: 70, fullMark: 100 },
  { subject: "Custo", A: 85, fullMark: 100 },
  { subject: "Fábrica", A: 80, fullMark: 100 },
  { subject: "Vendas", A: 65, fullMark: 100 },
];

const atividadesRecentesData = [
  {
    id: "#CT-0923",
    tipo: "Pós-Venda",
    responsavel: "Eduardo V.",
    status: "Resolvido",
    data: "Hoje",
  },
  {
    id: "#028",
    tipo: "Instalação",
    responsavel: "Pedro A.",
    status: "Fora do prazo",
    data: "Ontem",
  },
  {
    id: "#CT-0928",
    tipo: "Pós-Venda",
    responsavel: "Caio R.",
    status: "Em atendimento",
    data: "Ontem",
  },
  {
    id: "#015",
    tipo: "Instalação",
    responsavel: "Fernanda L.",
    status: "Dentro do prazo",
    data: "2 dias atrás",
  },
  {
    id: "#CT-0933",
    tipo: "Pós-Venda",
    responsavel: "Eduardo B.",
    status: "Em atendimento",
    data: "2 dias atrás",
  },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A259FF"];

// =================================================================
// FUNÇÕES AUXILIARES
// =================================================================
const formatCurrency = (value) => {
  if (value == null || Number.isNaN(Number(value))) return "—";
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(Number(value));
};

const formatPercentage = (value) => {
  if (value == null || Number.isNaN(Number(value))) return "—";
  return `${Number(value).toFixed(2)}%`;
};

const getMonthsFromData = (data) => {
  const months = Array.from(
    new Set(
      data.map((d) => {
        const dt = new Date(d.date);
        const y = dt.getFullYear();
        const m = (dt.getMonth() + 1).toString().padStart(2, "0");
        return `${y}-${m}`;
      })
    )
  );

  months.sort((a, b) => (a > b ? -1 : 1));

  return months.map((ym) => {
    const [y, mm] = ym.split("-");
    const date = new Date(Number(y), Number(mm) - 1, 1);
    const mesLabel = date.toLocaleString("pt-BR", {
      year: "numeric",
      month: "short",
    });
    return { mes: ym, mesLabel };
  });
};

const monthRangeToDates = (ym) => {
  if (!ym) return [null, null];
  const [year, month] = ym.split("-").map(Number);
  const start = new Date(year, month - 1, 1, 0, 0, 0, 0);
  const end = new Date(year, month, 1, 0, 0, 0, 0);
  return [start, end];
};

const getStatusBadgeClass = (status) => {
  if (!status) return "";
  return status.toLowerCase().replace(/ /g, '-');
};

// =================================================================
// COMPONENTE PRINCIPAL
// =================================================================
function Dashboard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const monthsList = useMemo(() => getMonthsFromData(productionData), []);

  const initialMonthParam =
    searchParams.get("month") || (monthsList[0]?.mes ?? "");
  const [selectedMonth, setSelectedMonth] = useState(initialMonthParam);

  useEffect(() => {
    setSearchParams(
      (prev) => {
        if (selectedMonth) prev.set("month", selectedMonth);
        else prev.delete("month");
        return prev;
      },
      { replace: true }
    );
  }, [selectedMonth, setSearchParams]);

  useEffect(() => {
    if (!selectedMonth && monthsList.length > 0) {
      setSelectedMonth(monthsList[0].mes);
    }
  }, [monthsList, selectedMonth]);

  const filteredMetrics = useMemo(() => {
    if (!selectedMonth)
      return { averageCost: 0, averageRework: 0, totalProducts: 0 };

    const [start, end] = monthRangeToDates(selectedMonth);
    if (!start || !end)
      return { averageCost: 0, averageRework: 0, totalProducts: 0 };

    const data = productionData.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= start && itemDate < end;
    });

    if (data.length === 0)
      return { averageCost: 0, averageRework: 0, totalProducts: 0 };

    const totalCost = data.reduce(
      (sum, item) => sum + Number(item.total_cost || 0),
      0
    );
    const totalProducts = data.reduce(
      (sum, item) => sum + Number(item.products_produced || 0),
      0
    );
    if (totalProducts === 0)
      return { averageCost: 0, averageRework: 0, totalProducts: 0 };

    const averageCost = totalCost / totalProducts;
    const weightedReworkSum = data.reduce(
      (sum, item) =>
        sum +
        Number(item.products_produced || 0) *
          Number(item.rework_percentage || 0),
      0
    );
    const averageRework = weightedReworkSum / totalProducts;

    return { averageCost, averageRework, totalProducts };
  }, [selectedMonth]);

  return (
    <main
      className="d-flex vh-100 overflow-hidden"
      style={{
        backgroundColor: "var(--cor-background)",
      }}
    >
      <Sidebar />
      <div
        className="flex-grow-1 overflow-y-auto"
        style={{
          padding: "30px 30px 30px 50px",
        }}
      >
        <header
          className="dashboard-header d-flex justify-content-between align-items-center"
          style={{
            marginBottom: "30px",
            paddingBottom: "15px",
            borderBottom: "1px solid var(--cinza-claro",
          }}
        >
          <h1
            className="fs-2 fw-bolder"
            style={{
              color: "var(--cor-principal)",
            }}
          >
            Dashboard de KPIs
          </h1>
          <div
            className="d-flex align-items-center"
            style={{
              gap: "20px",
            }}
          >
            <PeriodFilter
              months={monthsList}
              selectedMonth={selectedMonth}
              onChangeMonth={setSelectedMonth}
            />
            <select
              name="setor"
              className="fs-6 fw-normal bg-white"
              style={{
                padding: "8px 12px",
                border: "1px solid var(--cinza-claro)",
                borderRadius: "6px",
                color: "var(--cor-principal)",
                transition: "all 0.2s ease-in-out",
                minWidth: "150px",
              }}
            >
              <option value="">SETOR</option>
            </select>
            <select
              name="unidade"
              className="fs-6 fw-normal bg-white"
              style={{
                padding: "8px 12px",
                border: "1px solid var(--cinza-claro)",
                borderRadius: "6px",
                color: "var(--cor-principal)",
                transition: "all 0.2s ease-in-out",
                minWidth: "150px",
              }}
            >
              <option value="">UNIDADE</option>
            </select>
          </div>
        </header>

        <section
          className="d-grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <KpiCard
            title="Prazo médio de entrega"
            value="91"
            unit="Dias"
            percentage={-3}
          />
          <KpiCard
            title="Custo médio de produção"
            value={formatCurrency(filteredMetrics.averageCost)}
            unit="/ Prod."
          />
          <KpiCard
            title="Média de qualidade"
            subtitle="% de retrabalho"
            value={formatPercentage(filteredMetrics.averageRework)}
            unit=""
            percentage={-1}
          />
          <KpiCard
            title="Média de satisfação do cliente"
            value="82"
            unit="/100"
            percentage={4}
          />
        </section>

        <section
          className="d-grid"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "30px",
            marginBottom: "30px",
          }}
        >
          <div
            className="bg-white"
            style={{
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px var(--preto-transparente)",
              minHeight: "300px",
            }}
          >
            <h3
              className="fw-semibold"
              style={{
                textAlign: "center",
                color: "var(--cor-secundaria",
                marginBottom: "15px",
              }}
            >
              Prazo por área
            </h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart
                data={prazoPorAreaData}
                layout="vertical"
                margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
              >
                <XAxis type="number" hide />
                <YAxis
                  type="category"
                  dataKey="name"
                  width={80}
                  stroke="#485D78"
                  fontSize={12}
                />
                <Tooltip cursor={{ fill: "#f0f0f0" }} />
                <Bar
                  dataKey="dias"
                  fill="#485D78"
                  barSize={15}
                  radius={[0, 10, 10, 0]}
                >
                  {prazoPorAreaData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div
            className="bg-white"
            style={{
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px var(--preto-transparente)",
              minHeight: "300px",
            }}
          >
            <h3
              className="fw-semibold"
              style={{
                textAlign: "center",
                color: "var(--cor-secundaria",
                marginBottom: "15px",
              }}
            >
              Distribuição de custos
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={distribuicaoCustosData}
                  cx="50%"
                  cy="50%"
                  labelLine
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={65}
                  innerRadius={45}
                  fill="#8884d8"
                  dataKey="value"
                  paddingAngle={5}
                >
                  {distribuicaoCustosData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend
                  iconSize={10}
                  wrapperStyle={{ fontSize: "12px", paddingTop: "15px" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div
            className="bg-white"
            style={{
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px var(--preto-transparente)",
              minHeight: "300px",
            }}
          >
            <h3
              className="fw-semibold"
              style={{
                textAlign: "center",
                color: "var(--cor-secundaria",
                marginBottom: "15px",
              }}
            >
              Desempenho por área
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <RadarChart
                cx="50%"
                cy="50%"
                outerRadius={80}
                data={desempenhoPorAreaData}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" fontSize={12} />
                <Radar
                  name="Desempenho"
                  dataKey="A"
                  stroke="#FFBB28"
                  fill="#FFBB28"
                  fillOpacity={0.6}
                />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div
            className="bg-white"
            style={{
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px var(--preto-transparente)",
              minHeight: "300px",
              gridColumn: "1 / -1",
            }}
          >
            <h3
              className="fw-semibold"
              style={{
                textAlign: "center",
                color: "var(--cor-secundaria",
                marginBottom: "15px",
              }}
            >
              Evolução do prazo de entrega
            </h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart
                data={evolucaoPrazoData}
                margin={{ top: 5, right: 30, left: -10, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" fontSize={12} />
                <YAxis domain={[75, 95]} fontSize={12} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#0088FE"
                  strokeWidth={3}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section
          className="bg-white"
          style={{
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px var(--preto-transparente)",
          }}
        >
          <h3>Atividades Recentes</h3>
          <table
            className="w-100"
            style={{
              borderCollapse: "collapse",
              marginTop: "15px",
            }}
          >
            <thead>
              <tr>
                <th
                  className="text-start fw-semibold text-uppercase"
                  style={{
                    padding: "12px 15px",
                    borderBottom: "1px solid var(--cinza-claro)",
                    fontSize: "0.9rem",
                    color: "var(--cor-principal)",
                    backgroundColor: "var(--cinza-branco)",
                  }}
                >
                  ID
                </th>
                <th
                  className="text-start fw-semibold text-uppercase"
                  style={{
                    padding: "12px 15px",
                    borderBottom: "1px solid var(--cinza-claro)",
                    fontSize: "0.9rem",
                    color: "var(--cor-principal)",
                    backgroundColor: "var(--cinza-branco)",
                  }}
                >
                  Tipo
                </th>
                <th
                  className="text-start fw-semibold text-uppercase"
                  style={{
                    padding: "12px 15px",
                    borderBottom: "1px solid var(--cinza-claro)",
                    fontSize: "0.9rem",
                    color: "var(--cor-principal)",
                    backgroundColor: "var(--cinza-branco)",
                  }}
                >
                  Responsável
                </th>
                <th
                  className="text-start fw-semibold text-uppercase"
                  style={{
                    padding: "12px 15px",
                    borderBottom: "1px solid var(--cinza-claro)",
                    fontSize: "0.9rem",
                    color: "var(--cor-principal)",
                    backgroundColor: "var(--cinza-branco)",
                  }}
                >
                  Status
                </th>
                <th
                  className="text-start fw-semibold text-uppercase"
                  style={{
                    padding: "12px 15px",
                    borderBottom: "1px solid var(--cinza-claro)",
                    fontSize: "0.9rem",
                    color: "var(--cor-principal)",
                    backgroundColor: "var(--cinza-branco)",
                  }}
                >
                  Data
                </th>
              </tr>
            </thead>
            <tbody>
              {atividadesRecentesData.map((item) => (
                <tr key={item.id}>
                  <td
                    className="text-start"
                    style={{
                      padding: "12px 15px",
                      borderBottom: "1px solid var(--cinza-claro)",
                      fontSize: "0.9rem",
                      color: "var(--cinza)",
                    }}
                  >
                    {item.id}
                  </td>
                  <td
                    className="text-start"
                    style={{
                      padding: "12px 15px",
                      borderBottom: "1px solid var(--cinza-claro)",
                      fontSize: "0.9rem",
                      color: "var(--cinza)",
                    }}
                  >
                    {item.tipo}
                  </td>
                  <td
                    className="text-start"
                    style={{
                      padding: "12px 15px",
                      borderBottom: "1px solid var(--cinza-claro)",
                      fontSize: "0.9rem",
                      color: "var(--cinza)",
                    }}
                  >
                    {item.responsavel}
                  </td>
                  <td
                    className="text-start"
                    style={{
                      padding: "12px 15px",
                      borderBottom: "1px solid var(--cinza-claro)",
                      fontSize: "0.9rem",
                      color: "var(--cinza)",
                    }}
                  >
                    <span
                      className={`status-badge status-${item.status
                        .toLowerCase()
                        .replace(/ /g, "-")}`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td
                    className="text-start"
                    style={{
                      padding: "12px 15px",
                      borderBottom: "1px solid var(--cinza-claro)",
                      fontSize: "0.9rem",
                      color: "var(--cinza)",
                    }}
                  >
                    {item.data}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}

export default Dashboard;
