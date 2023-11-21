import React from "react";

const ChartPenjualan = () => {
  return (
    <div className="bg-gray-200 text-black p-8 rounded-lg shadow-lg">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Selamat datang John</h1>
        <p className="text-lg">Penjualan terbaik bulan ini</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <span className="font-bold text-blue-800">Rp.100.000,00</span>
        </div>
        <div>
          <button className="bg-blue-800 text-white px-4 py-2 rounded-md">
            Lihat Penjualan
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChartPenjualan;
