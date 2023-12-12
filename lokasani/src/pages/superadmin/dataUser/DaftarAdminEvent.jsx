import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import warningImage from "../../../assets/img/warningImage.svg";
import Search from "../../../component/superadmin/dataUser/Search";
import Sidebar from "../../../component/superadmin/globalComponent/Sidebar";
import Navbar from "../../../component/superadmin/globalComponent/Navbar";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import Pagination from "../../../component/superadmin/globalComponent/Pagination";

const DaftarAdminEvent = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 10;

  const fetchData = async () => {
    try {
      setIsLoading(true);

      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdG9yX2lkIjowLCJleHAiOjE3MDIzOTY1NzMsImlkIjo0NSwicm9sZV9pZCI6MH0.CpHzaDp-LUnjYwDlyckuWMFK0BSIXHaPzSpFQb1Yb7U";
      const response = await axios.get("https://lokasani.my.id/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response.data;

      const dataArray = data?.data?.data;

      if (Array.isArray(dataArray)) {
        const filteredData = dataArray.filter(
          (item) => item.role?.role === "EVENT CREATOR"
        );
        setUserData(filteredData);
      } else {
        console.error("Struktur data tidak sesuai yang diharapkan");
      }
    } catch (error) {
      console.error("Error mengambil data:", error);
    } finally {
      setIsLoading(false); 
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (itemId) => {
    Swal.fire({
      title: "Yakin Hapus Akun?",
      text: "Sekalinya kamu menghapus, Akun tidak akan kembali, loh",
      imageUrl: warningImage, 
      imageWidth: 180,
      imageHeight: 180,
      showCancelButton: true,
      cancelButtonText: "Urungkan",
      confirmButtonText: "Hapus Akun",
      buttonsStyling: false,
      customClass: {
        title: "text-lg font-bold mb-1",
        text: "text-base font-normal",
        cancelButton:
          "w-full max-w-md mt-1 py-1 bg-[#3653B0] hover:bg-blue-500 text-white rounded-full",
        confirmButton:
          "w-full max-w-md  px-44 py-1 bg-[#FF3B3B] hover:bg-red-400 text-white rounded-full",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItem(itemId);
      }
    });
  };

  const deleteItem = async (itemId) => {
    try {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdG9yX2lkIjowLCJleHAiOjE3MDIzOTY1NzMsImlkIjo0NSwicm9sZV9pZCI6MH0.CpHzaDp-LUnjYwDlyckuWMFK0BSIXHaPzSpFQb1Yb7U";
      const response = await axios.delete(`https://lokasani.my.id/users/4/${itemId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        const updatedUserData = userData.filter((item) => item.id !== itemId);
        setUserData(updatedUserData);

        Swal.fire("Berhasil Menghapus!", "", "success");
      } else {
        console.error("Gagal menghapus data");
        Swal.fire("Gagal Menghapus!", "", "error");
      }
    } catch (error) {
      console.error("Error menghapus data:", error);
      Swal.fire("Gagal Menghapus!", "", "error");
    }
  };

  const totalPages = Math.ceil(userData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = userData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const toggleDropdown = (itemId) => {
    setActiveDropdown(activeDropdown === itemId ? null : itemId);
  };


  return (
    <div className="bg-[#F2F2F2]">
      <Sidebar />
      <Navbar title="Daftar Admin Event" showButtonBack={true} />

      <div className="px-4 py-28 sm:ml-[266px] flex flex-col gap-6 relative">
        <div>
          <Search showSearch={true} />
        </div>
        <div className="overflow-x-auto shadow-md sm:rounded-lg relative">
          {isLoading ? ( 
            <div className="flex justify-center items-center p-4">
              <CircularProgress />
            </div>
          ) : ( userData.length > 0 ? (
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
                <th scope="col" className="px-10 py-3">
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
                  <td className="px-1 py-4 text-[#3653B0]">{item.first_name} {item.last_name}</td>
                  <td className="px-1 py-4 text-[#3653B0]">
                    {item.date}
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
                  <td className="px-10 py-4 relative">
                    <MoreVertOutlinedIcon
                      onClick={() => toggleDropdown(item.id)}
                    />
                    {activeDropdown === item.id && (
                      <div className="absolute left-16 top-[20px] z-20 w-32 py-4 rounded-md shadow-md shadow-gray-400 bg-white">
                        <div className="flex flex-col items-center">
                          <p className="cursor-pointer mb-4 text-[#1A1A1A] ">
                            Lihat Detail
                          </p>
                          <p
                            className="cursor-pointer text-[#FF3B3B]"
                            onClick={() => handleDelete(item.id)}
                          >
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
            ) : (
              <div className="flex justify-center items-center p-4">
                <p>No Data</p>
              </div>
            )
          )}
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

export default DaftarAdminEvent;
