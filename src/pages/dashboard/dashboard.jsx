import Sidebar from '../../components/menuPrincipalLateral/menuPrincipalLateral';
import KpiCard from '../../components/kpiCard/KpiCard';
import './dashboard.css';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, Radar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const prazoPorAreaData = [
  { name: 'Vendas', dias: 17 }, { name: 'Fábrica', dias: 14 },
  { name: 'Campo', dias: 23 }, { name: 'Qualidade', dias: 5 }, { name: 'Engenharia', dias: 5 },
];

const evolucaoPrazoData = [
  { name: 'Jan', value: 80 }, { name: 'Fev', value: 85 }, { name: 'Mar', value: 82 },
  { name: 'Abr', value: 88 }, { name: 'Mai', value: 84 }, { name: 'Jun', value: 81 },
  { name: 'Jul', value: 86 }, { name: 'Ago', value: 83 }, { name: 'Set', value: 87 },
  { name: 'Out', value: 90 }, { name: 'Nov', value: 92 }, { name: 'Dez', value: 95 },
];

const distribuicaoCustosData = [
  { name: 'Vendas', value: 27 }, { name: 'Fábrica', value: 42 },
  { name: 'Campo', value: 20 }, { name: 'Qualidade', value: 8 }, { name: 'Engenharia', value: 3 },
];

const desempenhoPorAreaData = [
  { subject: 'Qualidade', A: 90, fullMark: 100 }, { subject: 'Prazo', A: 70, fullMark: 100 },
  { subject: 'Custo', A: 85, fullMark: 100 }, { subject: 'Fábrica', A: 80, fullMark: 100 },
  { subject: 'Vendas', A: 65, fullMark: 100 },
];

const atividadesRecentesData = [
    { id: '#CT-0923', tipo: 'Pós-Venda', responsavel: 'Eduardo V.', status: 'Resolvido', data: 'Hoje' },
    { id: '#028', tipo: 'Instalação', responsavel: 'Pedro A.', status: 'Fora do prazo', data: 'Ontem' },
    { id: '#CT-0928', tipo: 'Pós-Venda', responsavel: 'Caio R.', status: 'Em atendimento', data: 'Ontem' },
    { id: '#015', tipo: 'Instalação', responsavel: 'Fernanda L.', status: 'Dentro do prazo', data: '2 dias atrás' },
    { id: '#CT-0933', tipo: 'Pós-Venda', responsavel: 'Eduardo B.', status: 'Em atendimento', data: '2 dias atrás' },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A259FF'];

function Dashboard() {
  return (
    <main className="main-dashboard-kpi">
      <Sidebar />
      <div className="dashboard-kpi-content">
        <header className="dashboard-header">
          <h1>Dashboard de KPIs</h1>
          <div className="dashboard-filters">
            <select name="periodo">
              <option value="">Janeiro</option>
              <option value="">Fevereiro</option>
              <option value="">Março</option>
              <option value="">Abril</option>
              <option value="">Maio</option>
              <option value="">Junho</option>
              <option value="">Julho</option>
              <option value="">Agosto</option>
              <option value="">Setembro</option>
              <option value="">Outubro</option>
              <option value="">Novembro</option>
              <option value="">Dezembro</option>
              </select>
            <select name="setor"><option value="">SETOR</option></select>
            <select name="unidade"><option value="">UNIDADE</option></select>
          </div>
        </header>

        <section className="kpi-grid">
          <KpiCard title="Prazo médio de entrega" value="91" unit="Dias" percentage={-3} />
          <KpiCard title="Custo médio de produção" value="R$200K" />
          <KpiCard title="Média de qualidade" subtitle="de retrabalho" value="5%" percentage={-1} />
          <KpiCard title="Média de satisfação do cliente" value="82" unit="/100" percentage={4} />
        </section>

        <section className="charts-grid">
          <div className="chart-container"><h3 style={{ textAlign: 'center' }}>Prazo por área</h3>
            <ResponsiveContainer width="100%" height={200}>
                <BarChart data={prazoPorAreaData} layout="vertical" margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                    <XAxis type="number" hide /><YAxis type="category" dataKey="name" width={80} stroke="#485D78" fontSize={12} />
                    <Tooltip cursor={{fill: '#f0f0f0'}}/><Bar dataKey="dias" fill="#485D78" barSize={15} radius={[0, 10, 10, 0]}>
                         {prazoPorAreaData.map((entry, index) => (<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-container"><h3 style={{ textAlign: 'center' }}>Distribuição de custos</h3>
             <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                   
                    <Pie 
                        data={distribuicaoCustosData} 
                        cx="50%" 
                        cy="50%" 
                        labelLine={true} 
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={65}
                        innerRadius={45} 
                        fill="#8884d8" 
                        dataKey="value" 
                        paddingAngle={5}
                    >
                        {distribuicaoCustosData.map((entry, index) => (<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))}
                    </Pie>
                    <Tooltip/>
                    <Legend iconSize={10} wrapperStyle={{fontSize: "12px", paddingTop: '15px'}}/>
                </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="chart-container"><h3 style={{ textAlign: 'center' }}>Desempenho por área</h3>
             <ResponsiveContainer width="100%" height={250}>
                <RadarChart cx="50%" cy="50%" outerRadius={80} data={desempenhoPorAreaData}>
                    <PolarGrid /><PolarAngleAxis dataKey="subject" fontSize={12} />
                    <Radar name="Desempenho" dataKey="A" stroke="#FFBB28" fill="#FFBB28" fillOpacity={0.6} /><Tooltip />
                </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-container full-width"><h3>Evolução do prazo de entrega</h3>
            <ResponsiveContainer width="100%" height={200}>
                <LineChart data={evolucaoPrazoData} margin={{ top: 5, right: 30, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="name" fontSize={12} />
                    <YAxis domain={[75, 95]} fontSize={12} /><Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#0088FE" strokeWidth={3} activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="recent-activities-container">
            <h3>Atividades Recentes</h3>
            <table className="activities-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tipo</th>
                        <th>Responsável</th>
                        <th>Status</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {atividadesRecentesData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.tipo}</td>
                            <td>{item.responsavel}</td>
                            <td>
                               <span className={`status-badge status-${item.status.toLowerCase().replace(/ /g, '-')}`}>{item.status}</span>
                            </td>
                            <td>{item.data}</td>
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