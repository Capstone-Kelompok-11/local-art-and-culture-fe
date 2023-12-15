import React, { useState } from "react";
import Swal from "sweetalert2";
import SearchTiket from "../../../component/superadmin/pusatbantuan/SearchTiket";
import Sidebar from "../../../component/superadmin/globalComponent/Sidebar";
import Navbar from "../../../component/superadmin/globalComponent/Navbar";
import warningImage from "../../../assets/img/warningImage.svg";
import Pagination from "../../../component/superadmin/globalComponent/Pagination";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function PusatBantuan() {
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedRows, setExpandedRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [userData, setUserData] = useState([
    {
      id: 1001,
      subject: "Cara menambahkan produk merchandise",
      changeDate: "12 November 2023",
      fromMessage: " Admin UMKM",
      status: "Tertunda",
      detail: {
        ask: "Sudah, tapi sepertinya tidak berhasil. Ketika saya mencoba menyimpan perubahan, tidak ada yang terjadi.",
        answer:
          "Apakah Anda sudah mencoba mengganti nomor handphone melalui pengaturan akun?",
      },
    },
    {
      id: 1002,
      subject: "Cara menambahkan produk merchandise",
      changeDate: "12 November 2023",
      fromMessage: " Admin UMKM",
      status: "Proses",
      detail: {
        ask: "Sudah, tapi sepertinya tidak berhasil. Ketika saya mencoba menyimpan perubahan, tidak ada yang terjadi.",
        answer:
          "Apakah Anda sudah mencoba mengganti nomor handphone melalui pengaturan akun?",
      },
    },
    {
      id: 1003,
      subject: "Cara menambahkan produk merchandise",
      changeDate: "12 November 2023",
      fromMessage: " Admin UMKM",
      status: "Selesai",
      detail: {
        ask: "Sudah, tapi sepertinya tidak berhasil. Ketika saya mencoba menyimpan perubahan, tidak ada yang terjadi.",
        answer:
          "Apakah Anda sudah mencoba mengganti nomor handphone melalui pengaturan akun?",
      },
    },
    {
      id: 1004,
      subject: "Cara menambahkan produk merchandise",
      changeDate: "12 November 2023",
      fromMessage: " Admin UMKM",
      status: "Tertunda",
      detail: {
        ask: "Sudah, tapi sepertinya tidak berhasil. Ketika saya mencoba menyimpan perubahan, tidak ada yang terjadi.",
        answer:
          "Apakah Anda sudah mencoba mengganti nomor handphone melalui pengaturan akun?",
      },
    },
    {
      id: 1005,
      subject: "Cara menambahkan produk merchandise",
      changeDate: "12 November 2023",
      fromMessage: " Admin UMKM",
      status: "Tertunda",
      detail: {
        ask: "Sudah, tapi sepertinya tidak berhasil. Ketika saya mencoba menyimpan perubahan, tidak ada yang terjadi.",
        answer:
          "Apakah Anda sudah mencoba mengganti nomor handphone melalui pengaturan akun?",
      },
    },
    {
      id: 1006,
      subject: "Cara menambahkan produk merchandise",
      changeDate: "12 November 2023",
      fromMessage: " Admin UMKM",
      status: "Tertunda",
      detail: {
        ask: "Sudah, tapi sepertinya tidak berhasil. Ketika saya mencoba menyimpan perubahan, tidak ada yang terjadi.",
        answer:
          "Apakah Anda sudah mencoba mengganti nomor handphone melalui pengaturan akun?",
      },
    },
    {
      id: 1007,
      subject: "Cara menambahkan produk merchandise",
      changeDate: "12 November 2023",
      fromMessage: " Admin UMKM",
      status: "Tertunda",
      detail: {
        ask: "Sudah, tapi sepertinya tidak berhasil. Ketika saya mencoba menyimpan perubahan, tidak ada yang terjadi.",
        answer:
          "Apakah Anda sudah mencoba mengganti nomor handphone melalui pengaturan akun?",
      },
    },
    {
      id: 1008,
      subject: "Cara menambahkan produk merchandise",
      changeDate: "12 November 2023",
      fromMessage: " Admin UMKM",
      status: "Tertunda",
      detail: {
        ask: "Sudah, tapi sepertinya tidak berhasil. Ketika saya mencoba menyimpan perubahan, tidak ada yang terjadi.",
        answer:
          "Apakah Anda sudah mencoba mengganti nomor handphone melalui pengaturan akun?",
      },
    },
    {
      id: 1009,
      subject: "Cara menambahkan produk merchandise",
      changeDate: "12 November 2023",
      fromMessage: " Admin UMKM",
      status: "Tertunda",
      detail: {
        ask: "Sudah, tapi sepertinya tidak berhasil. Ketika saya mencoba menyimpan perubahan, tidak ada yang terjadi.",
        answer:
          "Apakah Anda sudah mencoba mengganti nomor handphone melalui pengaturan akun?",
      },
    },
    {
      id: 1010,
      subject: "Cara menambahkan produk merchandise",
      changeDate: "12 November 2023",
      fromMessage: " Admin UMKM",
      status: "Proses",
      detail: {
        ask: "Sudah, tapi sepertinya tidak berhasil. Ketika saya mencoba menyimpan perubahan, tidak ada yang terjadi.",
        answer:
          "Apakah Anda sudah mencoba mengganti nomor handphone melalui pengaturan akun?",
      },
    },
    {
      id: 1011,
      subject: "Cara menambahkan produk merchandise",
      changeDate: "12 November 2023",
      fromMessage: " Admin UMKM",
      status: "Selesai",
      detail: {
        ask: "Sudah, tapi sepertinya tidak berhasil. Ketika saya mencoba menyimpan perubahan, tidak ada yang terjadi.",
        answer:
          "Apakah Anda sudah mencoba mengganti nomor handphone melalui pengaturan akun?",
      },
    },
  ]);
  const itemsPerPage = 10;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const toggleRow = (rowId) => {
    const isExpanded = expandedRows.includes(rowId);
    setExpandedRows((prevState) => {
      if (isExpanded) {
        return prevState.filter((id) => id !== rowId);
      } else {
        return [...prevState, rowId];
      }
    });
  };

  const searchFilter = (data) => {
    return data.filter((item) =>
      item.id.toString().includes(searchTerm.toLowerCase())
    );
  };

  const filteredData = searchFilter(userData);

  const totalPages = Math.ceil(userData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="bg-[#F2F2F2]">
      <Sidebar />
      <Navbar title="Pusat Bantuan" />

      <div className="px-4 py-28 sm:ml-[266px] flex flex-col gap-5 relative">
        <SearchTiket
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchFilter={searchFilter}
        />
        <div className="w-[600px] h-10 justify-start items-center flex-row inline-flex gap-4 ">
          <button className="w-24 h-11 px-4 py-3 bg-white rounded-xl justify-center items-center inline-flex hover:bg-blue-800 text-black hover:text-white">
            <div className="justify-center items-center gap-2 flex">
              <div className="  text-sm font-semiboldleading-tight">Semua</div>
            </div>
          </button>
          <button className="w-24 h-11 px-4 py-3 bg-white rounded-xl justify-center items-center inline-flex hover:bg-blue-800 text-black hover:text-white">
            <div className="justify-center items-center gap-2 flex">
              <div className="  text-sm font-semiboldleading-tight">
                Tertunda
              </div>
            </div>
          </button>
          <button className="w-24 h-11 px-4 py-3 bg-white rounded-xl justify-center items-center inline-flex hover:bg-blue-800 text-black hover:text-white">
            <div className="justify-center items-center gap-2 flex">
              <div className="  text-sm font-semiboldleading-tight">
                Diproses
              </div>
            </div>
          </button>
          <button className="w-24 h-11 px-4 py-3 bg-white rounded-xl justify-center items-center inline-flex hover:bg-blue-800 text-black hover:text-white">
            <div className="justify-center items-center gap-2 flex">
              <div className="  text-sm font-semiboldleading-tight">
                Selesai
              </div>
            </div>
          </button>
        </div>
        <div className="overflow-x-auto shadow-md sm:rounded-lg relative">
          {/* table */}
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 z-10">
            <thead className="text-xs font-semibold text-[#243775] uppercase #987201">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No Tiket
                </th>
                <th scope="col" className="px-1 py-3">
                  Subjek
                </th>
                <th scope="col" className="px-1 py-3">
                  Status
                </th>
                <th scope="col" className="px-1 py-3">
                  Tanggal Buat Akun
                </th>
                <th scope="col" className="px-1 py-3">
                  Tiket diajukan oleh
                </th>
              </tr>
            </thead>
            {/* isi tabel */}
            <tbody>
              {currentItems.map((item) => (
                <React.Fragment key={item.id}>
                  <tr
                    key={item.id}
                    className={`bg-white border-b hover:bg-gray-50 ${
                      expandedRows.includes(item.id)
                        ? "transition-max-h-hh max-h-60"
                        : ""
                    }`}
                  >
                    <td className="px-6 py-4  text-[#3653B0]">{item.id}</td>
                    <td className="px-1 py-4 text-[#3653B0]">{item.subject}</td>
                    <td className="font-semibold ">
                      <p
                        className={`${
                          item.status === "Selesai"
                            ? "bg-[#9EC7BD] py-1 w-24 text-[#1F5C4D] items-center flex justify-center rounded-full"
                            : item.status === "Proses"
                            ? "bg-[#768DD5] py-1 w-24 text-white items-center flex justify-center rounded-full"
                            : item.status === "Tertunda"
                            ? "bg-[#F8D46D] py-1 w-24 text-[#987201] items-center flex justify-center rounded-full"
                            : "bg-[#F3B1A5] py-1 w-28 items-center flex justify-center rounded-full text-[#9B4332]"
                        }`}
                      >
                        {item.status}
                      </p>
                    </td>
                    <td className="px-1 py-4 text-[#3653B0]">
                      {item.changeDate}
                    </td>
                    <td className="px-1 py-4 text-[#3653B0]">
                      {item.fromMessage}
                    </td>
                    <td className="px-8 py-4 relative">
                      <button className="w-9 h-9 rounded-full bg-blue-800 flex items-center justify-center">
                        <ExpandMoreIcon
                          color="white"
                          onClick={() => toggleRow(item.id)}
                        />
                      </button>
                    </td>
                  </tr>
                  {expandedRows.includes(item.id) && (
                    <tr>
                      <td className=" mb-40" colSpan="6">
                        <div
                          className={`bg-white w-full px-4 py-2 transition-max-h-hh ${
                            expandedRows.includes(item.id)
                              ? "max-h-60"
                              : "max-h-0"
                          } overflow-hidden`}
                        >
                          {item.detail && (
                            <div className="">
                              <p>Ask: {item.detail.ask}</p>
                              <p>Answer: {item.detail.answer}</p>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
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
}

export default PusatBantuan;
