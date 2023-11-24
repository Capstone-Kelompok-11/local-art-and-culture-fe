import React from "react";
import Search from "../../../component/superadmin/dataUser/Search";
import Sidebar from "../../../component/superadmin/globalComponent/Sidebar";
import Navbar from "../../../component/superadmin/globalComponent/Navbar";

const VerifikasiAkun = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <Sidebar />
      <Navbar title="Verifikasi Akun" />

      <div className="sm:px-4 sm:py-28 sm:ml-[266px] flex flex-col gap-6">
        <div>
          <Search showButtonVerif={true} />
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
              <tr>
                <th scope="col" className="px-3 py-3">
                  
                </th>
                <th scope="col" className="px-6 py-3">
                  Nama
                </th>
                <th scope="col" className="px-6 py-3">
                  Tanggal Buat Akun
                </th>
                <th scope="col" className="px-6 py-3">
                  Detail
                </th>
                <th scope="col" className="px-6 py-3">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b  hover:bg-gray-50 ">
                <td className="p-4">
                  <input type="checkbox" />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 ">
                  Kelvin Bramnan
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 ">
                  12 November 2023
                </td>
                <td className="px-6 py-4">
                  <button className="bg-[#F3B502] w-[80px] h-[20px] rounded-full text-white">
                    Detail
                  </button>
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-red-600 hover:underline"
                  >
                    Remove
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50 ">
                <td className="p-4">
                <input type="checkbox" />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 ">
                  Kelvin Bramnan
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 ">
                  12 november 2023
                </td>
                <td className="px-6 py-4">
                  <button className="bg-[#F3B502] w-[80px] h-[20px] rounded-full text-white">
                    Detail
                  </button>
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-red-600 hover:underline"
                  >
                    Remove
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50 ">
                <td className="p-4">
                <input type="checkbox" />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 ">
                  Kelvin Bramnan
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 ">
                  12 november 2023
                </td>
                <td className="px-6 py-4">
                  <button className="bg-[#F3B502] w-[80px] h-[20px] rounded-full text-white">
                    Detail
                  </button>
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-red-600 hover:underline"
                  >
                    Remove
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VerifikasiAkun;
