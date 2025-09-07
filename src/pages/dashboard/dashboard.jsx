import React from 'react';
import Sidebar from '../../components/menuPrincipalLateral/menuPrincipalLateral';
import KpiCard from '../../components/kpiCard/KpiCard';
import './dashboard.css';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, Radar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

// --- DADOS MOCKADOS PARA OS GRÁFICOS ---


const prazoPorAreaData = [
  { name: 'Vendas', dias: 17 },
  { name: 'Fábrica', dias: 14 },
  { name: 'Campo', dias: 23 },
  { name: 'Qualidade', dias: 5 },
  { name: 'Engenharia', dias: 5 },
];

const evolucaoPrazoData = [
  { name: 'Jan', value: 80 }, { name: 'Fev', value: 85 }, { name: 'Mar', value: 82 },
  { name: 'Abr', value: 88 }, { name: 'Mai', value: 84 }, { name: 'Jun', value: 81 },
  { name: 'Jul', value: 86 }, { name: 'Ago', value: 83 }, { name: 'Set', value: 87 },
  { name: 'Out', value: 90 }, { name: 'Nov', value: 92 }, { name: 'Dez', value: 95 },
];

const distribuicaoCustosData = [
  { name: 'Vendas', value: 27 }, { name: 'Fábrica', value: 42 },
  { name: 'Campo', value: 20 }, { name: 'Qualidade', value: 8 },
  { name: 'Engenharia', value: 3 },
];

const desempenhoPorAreaData = [
  { subject: 'Qualidade', A: 90, fullMark: 100 },
  { subject: 'Prazo', A: 70, fullMark: 100 },
  { subject: 'Custo', A: 85, fullMark: 100 },
  { subject: 'Fábrica', A: 80, fullMark: 100 },
  { subject: 'Vendas', A: 65, fullMark: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A259FF'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


function Dashboard() {
  return (
    <main className="main-dashboard-kpi">
      <Sidebar />
      <div className="dashboard-kpi-content">
        <header className="dashboard-header">
          <h1>Dashboard de KPIs</h1>
          <div className="dashboard-filters">
            <select name="periodo">
              <option value="">PERÍODO</option>
            </select>
            <select name="setor">
              <option value="">SETOR</option>
            </select>
            <select name="unidade">
              <option value="">UNIDADE</option>
            </select>
          </div>
        </header>

        <section className="kpi-grid">
          <KpiCard title="Prazo médio de entrega" value="91" unit="Dias" percentage={-3} />
          <KpiCard title="Custo médio de produção" value="R$200K" />
          <KpiCard title="Média de qualidade" subtitle="de retrabalho" value="5%" percentage={-1} />
          <KpiCard title="Média de satisfação do cliente" value="82" unit="/100" percentage={4} />
        </section>

        <section className="charts-grid">
          <div className="chart-container">
            <h3>Prazo por área</h3>
            <ResponsiveContainer width="100%" height={200}>
                <BarChart data={prazoPorAreaData} layout="vertical" margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                    <XAxis type="number" hide />
                    <YAxis type="category" dataKey="name" width={80} stroke="#485D78" fontSize={12} />
                    <Tooltip cursor={{fill: '#f0f0f0'}}/>
                    <Bar dataKey="dias" fill="#485D78" barSize={15} radius={[0, 10, 10, 0]}>
                         {prazoPorAreaData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-container">
            <h3>Distribuição de custos</h3>
             <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                    <Pie
                        data={distribuicaoCustosData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        innerRadius={50}
                        fill="#8884d8"
                        dataKey="value"
                        paddingAngle={5}
                    >
                        {distribuicaoCustosData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend iconSize={10} wrapperStyle={{fontSize: "12px"}}/>
                </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="chart-container">
            <h3>Desempenho por área</h3>
             <ResponsiveContainer width="100%" height={200}>
                <RadarChart cx="50%" cy="50%" outerRadius={80} data={desempenhoPorAreaData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" fontSize={12} />
                    <Radar name="Desempenho" dataKey="A" stroke="#FFBB28" fill="#FFBB28" fillOpacity={0.6} />
                    <Tooltip />
                </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-container full-width">
            <h3>Evolução do prazo de entrega</h3>
            <ResponsiveContainer width="100%" height={200}>
                <LineChart data={evolucaoPrazoData} margin={{ top: 5, right: 30, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" fontSize={12} />
                    <YAxis domain={[75, 95]} fontSize={12} />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#0088FE" strokeWidth={3} activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
          </div>

        </section>
      </div>
    </main>
  );
}

export default Dashboard;