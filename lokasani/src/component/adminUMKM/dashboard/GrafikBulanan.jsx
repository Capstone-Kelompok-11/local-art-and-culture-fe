import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
  datasets: [
    {
      label: "Penjualan Bulanan",
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [20, 30, 60, 81, 56, 55, 90, 20],
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      }
    },
  },
};

const GrafikBulanan = () => {
  return (
    <div className="bg-white text-black p-6 rounded-lg">
      <div className="mb-1">
        <h1 className="text-xl font-bold">Keuntungan</h1>
        <p className="text-lg">Bulan Lalu</p>
        <Line height={140} data={data} options={options} />
        <h1 className="text-lg font-semibold"> 600k </h1>
      </div>
    </div>
  );
};

export default GrafikBulanan;
