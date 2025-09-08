import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./graficoProdutividade.css";

// Registrando os módulos necessários do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Performance() {
  // Dados do gráfico
  const data = {
    labels: [
      "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
      "Jul", "Ago", "Set", "Out", "Nov", "Dez"
    ],
    datasets: [
      {
        label: "Produtividade",
        data: [10, 12, 8, 14, 18, 20, 17, 22, 24, 28, 30, 32],
        borderColor: "#1e90ff",
        backgroundColor: "rgba(30, 144, 255, 0.2)",
        tension: 0.3,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: "#0c2340",
      },
    ],
  };

  // Configurações do gráfico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // remove legenda pra ficar igual ao mockup
      },
      tooltip: {
        backgroundColor: "#0c2340",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "#e0e6ed",
        },
        ticks: {
          stepSize: 5,
        },
      },
    },
  };

  return (
    <div className="performance">
      <h3>PERFORMANCE</h3>
      <div className="indicadores">
        <p>Presenças <span className="valor azul">220</span></p>
        <p>Faltas <span className="valor vermelho">5</span></p>
      </div>
      <Line data={data} options={options} />
    </div>
  );
}
