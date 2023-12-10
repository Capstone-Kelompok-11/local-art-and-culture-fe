import React, { useState } from "react";
import Search from "../../../component/superadmin/dataUser/Search";
import Sidebar from "../../../component/superadmin/globalComponent/Sidebar";
import Navbar from "../../../component/superadmin/globalComponent/Navbar";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import Pagination from "../../../component/superadmin/globalComponent/Pagination";

const DaftarPengguna = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const userData = [
    {
      id: 1,
      imageSrc: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
      name: "Kelvin Bramnan",
      createDate: "12 November 2023",
      status: "Aktif",
    },
    {
      id: 2,
      imageSrc: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
      name: "Kelvin Bramnan",
      createDate: "13 November 2023",
      status: "Tidak Aktif",
    },
    {
      id: 3,
      imageSrc: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
      name: "Kelvin Bramnan",
      createDate: "12 November 2023",
      status: "Aktif",
    },
    {
      id: 4,
      imageSrc: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
      name: "Kelvin Bramnan",
      createDate: "13 November 2023",
      status: "Tidak Aktif",
    },
    {
      id: 5,
      imageSrc: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
      name: "Kelvin Bramnan",
      createDate: "12 November 2023",
      status: "Aktif",
    },
    {
      id: 6,
      imageSrc: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
      name: "Kelvin Bramnan",
      createDate: "13 November 2023",
      status: "Tidak Aktif",
    },
    {
      id: 7,
      imageSrc: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
      name: "Kelvin Bramnan",
      createDate: "12 November 2023",
      status: "Aktif",
    },
    {
      id: 8,
      imageSrc: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
      name: "Kelvin Bramnan",
      createDate: "13 November 2023",
      status: "Tidak Aktif",
    },
  ];
  const totalPages = Math.ceil(userData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = userData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
            <thead className="text-xs font-semibold text-[#243775] uppercase #987201">
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
                <th scope="col" className="px-1 py-3">
                  Status
                </th>
                <th scope="col" className="px-8 py-3">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item) => (
                <tr
                  key={item.id}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <td className="p-4">
                    <img
                      src={item.imageSrc}
                      className="w-[50px] h-[50px] rounded-full"
                      alt="Image"
                    />
                  </td>
                  <td className="px-1 py-4 text-[#3653B0]">{item.name}</td>
                  <td className="px-1 py-4 text-[#3653B0]">
                    {item.createDate}
                  </td>
                  <td className="font-semibold ">
                    <p
                      className={`${
                        item.status === "Aktif"
                          ? "bg-[#9EC7BD] py-1 w-20 text-[#1F5C4D] items-center flex justify-center rounded-full"
                          : "bg-[#F3B1A5] py-1 w-28 items-center flex justify-center rounded-full text-[#9B4332]"
                      }`}
                    >
                      {item.status}
                    </p>
                  </td>
                  <td className="px-8 py-4 relative">
                    <MoreVertOutlinedIcon
                      onClick={() => toggleDropdown(item.id)}
                    />
                    {activeDropdown === item.id && (
                      <div className="absolute left-16 top-[20px] z-20 px-3 py-4 rounded-md shadow-md shadow-gray-400 bg-white">
                        <div className="flex flex-col items-center">
                          <p className="cursor-pointer mb-4 text-[#1A1A1A]">
                            Lihat Detail
                          </p>
                          <p className="cursor-pointer text-[#FF3B3B]">
                            Hapus Pengguna
                          </p>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4 mx-4">
          <div className="text-[#828282]">
            Menampilkan {(currentPage - 1) * itemsPerPage + 1} sampai{" "}
            {Math.min(currentPage * itemsPerPage, userData.length)} dari{" "}
            {userData.length} item
          </div>
          <div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaftarPengguna;
