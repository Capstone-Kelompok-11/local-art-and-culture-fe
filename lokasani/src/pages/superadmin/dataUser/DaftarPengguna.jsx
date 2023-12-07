import React, { useState } from "react";
import Search from "../../../component/superadmin/dataUser/Search";
import Sidebar from "../../../component/superadmin/globalComponent/Sidebar";
import Navbar from "../../../component/superadmin/globalComponent/Navbar";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

const DaftarPengguna = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const userData = [
    {
      id: 1,
      imageSrc: "/docs/images/products/apple-watch.png",
      name: "Kelvin Bramnan",
      createDate: "12 November 2023",
    },
    {
      id: 2,
      imageSrc: "/docs/images/products/apple-watch.png",
      name: "Kelvin Bramnan",
      createDate: "12 November 2023",
    },
    {
      id: 3,
      imageSrc: "/docs/images/products/apple-watch.png",
      name: "Kelvin Bramnan",
      createDate: "12 November 2023",
    },
    {
      id: 4,
      imageSrc: "/docs/images/products/apple-watch.png",
      name: "Kelvin Bramnan",
      createDate: "12 November 2023",
    },
    {
      id: 5,
      imageSrc: "/docs/images/products/apple-watch.png",
      name: "Kelvin Bramnan",
      createDate: "12 November 2023",
    },
    {
      id: 6,
      imageSrc: "/docs/images/products/apple-watch.png",
      name: "Kelvin Bramnan",
      createDate: "12 November 2023",
    },
    {
      id: 7,
      imageSrc: "/docs/images/products/apple-watch.png",
      name: "Kelvin Bramnan",
      createDate: "12 November 2023",
    },
    {
      id: 8,
      imageSrc: "/docs/images/products/apple-watch.png",
      name: "Kelvin Bramnan",
      createDate: "12 November 2023",
    },
  ];

  return (
    <div className="bg-[#F2F2F2]">
      <Sidebar />
      <Navbar title="Daftar Pengguna" showButtonBack={true} />

      <div className="px-4 py-28 sm:ml-[266px] flex flex-col gap-6 relative">
        <div>
          <Search showSearch={true} />
        </div>
        <div className="overflow-x-auto shadow-md sm:rounded-lg relative">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 z-10">
            <thead>
              <tr>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-1 py-3">
                  Nama
                </th>
                <th scope="col" className="px-1 py-3">
                  Tanggal Buat Akun
                </th>
                <th scope="col" className="px-8 py-3">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {userData.map((item) => (
                <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
                  <td className="p-4">
                    <img
                      src={item.imageSrc}
                      className="w-10 md:w-32 max-w-full max-h-full"
                      alt="Image"
                    />
                  </td>
                  <td className="px-1 py-4 font-semibold text-gray-900">
                    {item.name}
                  </td>
                  <td className="px-1 py-4 font-semibold text-gray-900">
                    {item.createDate}
                  </td>
                  <td className="px-8 py-4 relative">
                    <MoreVertOutlinedIcon onClick={() => toggleDropdown(item.id)} />
                    {activeDropdown === item.id && (
                      <div
                        className="absolute left-16 top-[20px] z-20 px-3 py-4 rounded-md shadow-md shadow-gray-400 bg-white"
                      >
                        <div className="flex flex-col items-center">
                          <p className="cursor-pointer mb-4 text-[#1A1A1A]">Lihat Detail</p>
                          <p className="cursor-pointer text-[#FF3B3B]">Hapus Pengguna</p>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DaftarPengguna;
