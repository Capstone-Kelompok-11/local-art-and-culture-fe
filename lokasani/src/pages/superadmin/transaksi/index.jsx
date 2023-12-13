import React from "react";
import Sidebar from "../../../component/superadmin/globalComponent/Sidebar";
import Navbar from "../../../component/superadmin/globalComponent/Navbar";
import CardTranksasi from "../../../component/superadmin/globalComponent/CardTransaksi";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
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
      status: "gagal",
    },
    {
      id: 2,
      tanggal: "25 November 2023",
      nama: "Icha",
      detail: "Tiket",
      total: "Rp.10000",
      status: "berhasil",
    },
    {
      id: 3,
      tanggal: "25 November 2023",
      nama: "Icha",
      detail: "Tiket",
      total: "Rp.10000",
      status: "berhasil",
    },
    {
      id: 4,
      tanggal: "25 November 2023",
      nama: "Icha",
      detail: "Tiket",
      total: "Rp.10000",
      status: "diproses",
    },
    {
      id: 5,
      tanggal: "25 November 2023",
      nama: "Icha",
      detail: "Tiket",
      total: "Rp.10000",
      status: "gagal",
    },
    {
      id: 6,
      tanggal: "25 November 2023",
      nama: "Icha",
      detail: "Tiket",
      total: "Rp.10000",
      status: "gagal",
    },
    {
      id: 7,
      tanggal: "25 November 2023",
      nama: "Icha",
      detail: "Tiket",
      total: "Rp.10000",
      status: "berhasil",
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

        <div className="bg-gray-100">
          <div className="bg-gray-100 flex items center justify-between rounded-sm">
            <div className="pl-1 flex items-center">
              <button className="py-2 px-8 bg-white outline outline-blue-500 outline-1 hover:bg-[#3653B0] text-blue-800 hover:text-white rounded-xl">
                Semua
              </button>
              <button className="py-2 px-8 bg-white outline outline-blue-500 outline-1 hover:bg-[#3653B0] text-blue-800 hover:text-white rounded-xl ml-3">
                Berhasil
              </button>
              <button className="py-2 px-8 bg-white outline outline-blue-500 outline-1 hover:bg-[#3653B0] text-blue-800 hover:text-white rounded-xl ml-3">
                Diproses
              </button>
              <button className="py-2 px-8 bg-white outline outline-blue-500 outline-1 hover:bg-[#3653B0] text-blue-800 hover:text-white rounded-xl ml-3">
                Gagal
              </button>
            </div>

            <div className="flex items-center">
              <div className="flex justify-end items-center mr-2 border-2 border-black">
                <h1 className="font-semibold">Tampilkan</h1>
                <select className="bg-white text-[#999999] p-1 px-2 py-2 rounded-md outline outline-black outline-1 ml-2">
                  <option>Data Terbaru</option>
                  <option>Filter 2</option>
                </select>
              </div>
              <button className="bg-[#243775] text-white py-[6px] px-4 rounded-md m-2 flex items-center">
                <KeyboardArrowDownIcon fontSize="small" className="mr-1" />
                Import
              </button>
              <button className="bg-[#243775] text-white py-[6px] px-4 rounded-md m-2 flex items-center">
                <FileDownloadIcon fontSize="small" className="mr-1" />
                Export
              </button>
            </div>
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
                {transaction.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
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
