import React from "react";
import Sidebar from "../../../component/superadmin/globalComponent/Sidebar";
import Navbar from "../../../component/superadmin/globalComponent/Navbar";
import CardTranksasi from "../../../component/superadmin/globalComponent/CardTransaksi";

const HomeSuperAdmin = () => {
  const usersData = [
    { judul: "Pemasukan Keseluruhan (Rp)", quantity: 35440000 },
    { judul: "Pemasukan Event (Rp)", quantity: 35440000 },
    { judul: "Pemasukan UMKM (Rp)", quantity: 35440000 },
    { judul: "Permintaan Payout", quantity: 32 },
  ];

  const transaction = [
    {
      id: 1,
      tanggal: "25 November 2023",
      nama: "Icha",
      detail: "Tiket",
      total: "Rp.10000",
      status: " ",
    },
    {
      id: 2,
      tanggal: "25 November 2023",
      nama: "Icha",
      detail: "Tiket",
      total: "Rp.10000",
      status: " ",
    },
    {
      id: 3,
      tanggal: "25 November 2023",
      nama: "Icha",
      detail: "Tiket",
      total: "Rp.10000",
      status: " ",
    },
    {
      id: 3,
      tanggal: "25 November 2023",
      nama: "Icha",
      detail: "Tiket",
      total: "Rp.10000",
      status: " ",
    },
    {
      id: 3,
      tanggal: "25 November 2023",
      nama: "Icha",
      detail: "Tiket",
      total: "Rp.10000",
      status: " ",
    },
    {
      id: 3,
      tanggal: "25 November 2023",
      nama: "Icha",
      detail: "Tiket",
      total: "Rp.10000",
      status: " ",
    },
    {
      id: 3,
      tanggal: "25 November 2023",
      nama: "Icha",
      detail: "Tiket",
      total: "Rp.10000",
      status: " ",
    },
    
  ];

  return (
    <div className="bg-[#F2F2F2]">
      <Sidebar />
      <Navbar title="Transaksi" />
      <div className="px-4 py-28 sm:ml-[266px]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap- 2xl:gap-7.5 pb-6">
          {usersData.map((pengguna, index) => (
            <CardTranksasi
              key={index}
              judul={pengguna.judul}
              quantity={pengguna.quantity}
            />
          ))}
        </div>
        <div className="sm:flex items-center justify-between">
          <div className="flex items-center mb-8">
            <a
              className="rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800"
              href=" javascript:void(0)"
            >
              <div className="py-2 px-8 bg-[#3653B0] text-white rounded-xl">
                <p>Semua</p>
              </div>
            </a>
            <a
              className="rounded-xl focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8 bg-white"
              href="javascript:void(0)"
            >
              <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-xl bg-white">
                <p>Berhasil</p>
              </div>
            </a>
            <a
              className="rounded-xl focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
              href="javascript:void(0)"
            >
              <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-xl bg-white">
                <p>Diproses</p>
              </div>
            </a>
            <a
              className="rounded-xl focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
              href="javascript:void(0)"
            >
              <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full bg-white">
                <p>Gagal</p>
              </div>
            </a>
            <p className="py-2 px-8 justify-end"> Tampilan</p>
            <input
              id="datepicker"
              className="border-2 border-gray-300 rounded px-3 py-2 w-56"
              type="text"
              placeholder="Select a date"
            />
          </div>
        </div>

        <div className="overflow-x-auto relative">
          <div>
            <table className="w-full text-sm text-[#6D82C5] text-left z-10">
              <thead className="bg-white">
                <tr className="text-md font-semibold tracking-wide text-left text-blue-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th scope="col" className="px-6 py-3">
                    Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nama
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tanggal
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Detail
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {transaction.map((item,index) => (
                  <tr 
                  key={index}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
                  >
                    <td className="px-5 py-4 font-reguler text-[#3653B0]">
                      {item.id}
                    </td>
                    <td className="px-6 py-4 font-reguler text-[#3653B0]">
                      {item.nama}
                    </td>
                    <td className="px-1 py-4 font-reguler text-[#3653B0]">
                      {item.tanggal}
                    </td>
                    <td className="px-6 py-4 font-reguler text-[#3653B0]">
                      {item.detail}
                    </td>
                    <td className="px-3 py-4 font-reguler text-[#3653B0]">
                      {item.total}
                    </td>
                    <td className="px-1 py-4 font-reguler text-[#3653B0]">
                      {item.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSuperAdmin;
