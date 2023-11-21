import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar"],
  datasets: [
    {
      backgroundColor: [
        "rgba(135, 206, 250, 1)",
        "rgba(0, 0, 128, 1)",
        "rgba(70, 130, 180, 1)",
      ],
      borderColor: "rgba(0,0,0,0)",
      borderWidth: 2,
      data: [20, 30, 60],
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,
  responsive: true,
  aspectRatio: 0.8,
};

const Prospek = () => {
  return (
    <div className="bg-gray-200 text-black p-2 rounded-lg shadow-lg mt-6">
      <div className="flex flex-row-reverse items-center justify-center">
        <div className="w-[80px]  ">
          <Doughnut data={data} options={options} />
        </div>
        <div className="w-1/3">
          <h1 className="text-lg font-bold">4,350</h1>
          <p className="text-lg">15,8%</p>
        </div>
        <div className="w-1/2">
          <h1 className="text-2xl font-bold">Prospek</h1>
          <p className="text-xs">Laporan Bulanan</p>
        </div>
      </div>
    </div>
  );
};

export default Prospek;
