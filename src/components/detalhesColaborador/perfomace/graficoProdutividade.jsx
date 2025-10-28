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

// Registrando os módulos do Chart.js
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
  const data = {
    labels: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
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

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#0c2340",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: "#e0e6ed" }, ticks: { stepSize: 5 } },
    },
  };

  return (
    <div
      className="p-3 d-flex flex-column gap-3 bg-white"
      style={{
        border: "1px solid #d3d9e3",
        borderRadius: "6px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
      }}
    >
      <h3
        className="mb-0"
        style={{ fontSize: "18px", fontWeight: 800, color: "#0c2340" }}
      >
        PERFORMANCE
      </h3>

      <div
        className="d-flex gap-3"
        style={{ fontSize: "15px", fontWeight: 600, color: "#1f2a37" }}
      >
        <p className="mb-0">
          Presenças{" "}
          <span style={{ fontWeight: 700, color: "#1e90ff" }}>220</span>
        </p>
        <p className="mb-0">
          Faltas <span style={{ fontWeight: 700, color: "#e53935" }}>5</span>
        </p>
      </div>

      <Line data={data} options={options} />
    </div>
  );
}
