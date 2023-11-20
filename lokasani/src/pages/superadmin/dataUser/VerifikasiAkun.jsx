import React, { useState } from "react";
import Search from "../../../component/superadmin/dataUser/Search";
import Sidebar from "../../../component/superadmin/globalComponent/Sidebar";
import Navbar from "../../../component/superadmin/globalComponent/Navbar";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

const VerifikasiAkun = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const toggleDetailPopup = (id) => {
    setSelectedUserId(selectedUserId === id ? null : id);
  };

  const verificationData = [
    {
      id: 1,
      name: "Kelvin Bramnan",
      createDate: "12 November 2023",
      accountType: "Admin Event",
      organization: "Sastra Lokal",
      phoneNumber: "082233445566",
      email: "kelvin@gmail.com",
    },
    {
      id: 2,
      name: "Kelvin Bramnan",
      createDate: "12 November 2023",
      accountType: "Admin Event",
      organization: "Sastra Lokal",
      phoneNumber: "082233445566",
      email: "kelvin@gmail.com",
    },
    {
      id: 3,
      name: "Kelvin Bramnan",
      createDate: "12 November 2023",
      accountType: "Admin Event",
      organization: "Sastra Lokal",
      phoneNumber: "082233445566",
      email: "kelvin@gmail.com",
    },
    {
      id: 4,
      name: "Kelvin Bramnan",
      createDate: "12 November 2023",
      accountType: "Admin Event",
      organization: "Sastra Lokal",
      phoneNumber: "082233445566",
      email: "kelvin@gmail.com",
    },
    {
      id: 5,
      name: "Kelvin Bramnan",
      createDate: "12 November 2023",
      accountType: "Admin Umkm",
      organization: "Sastra Lokal",
      phoneNumber: "082233445566",
      email: "kelvin@gmail.com",
    },
    {
      id: 6,
      name: "Kelvin Bramnan",
      createDate: "12 November 2023",
      accountType: "Admin Umkm",
      organization: "Sastra Lokal",
      phoneNumber: "082233445566",
      email: "kelvin@gmail.com",
    },
    {
      id: 7,
      name: "Kelvin Bramnan",
      createDate: "12 November 2023",
      accountType: "Admin Umkm",
      organization: "Sastra Lokal",
      phoneNumber: "082233445566",
      email: "kelvin@gmail.com",
    },
    {
      id: 8,
      name: "Kelvin Bramnan",
      createDate: "12 November 2023",
      accountType: "Admin Umkm",
      organization: "Sastra Lokal",
      phoneNumber: "082233445566",
      email: "kelvin@gmail.com",
    },
    {
      id: 9,
      name: "Kelvin Bramnan",
      createDate: "12 November 2023",
      accountType: "Admin Umkm",
      organization: "Sastra Lokal",
      phoneNumber: "082233445566",
      email: "kelvin@gmail.com",
    },
    {
      id: 10,
      name: "Kelvin Bramnan",
      createDate: "12 November 2023",
      accountType: "Admin Umkm",
      organization: "Sastra Lokal",
      phoneNumber: "082233445566",
      email: "kelvin@gmail.com",
    },
  ];

  return (
    <div className="bg-[#F2F2F2]">
      <Sidebar />
      <Navbar title="Verifikasi Akun" showButtonBack={true}/>

      <div className="sm:px-4 sm:py-28 sm:ml-[266px] flex flex-col gap-6 ">
        <div>
          <Search showButtonVerif={true}  />
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-3 py-3"></th>
                <th scope="col" className="px-1 py-3">
                  Nama
                </th>
                <th scope="col" className="px-1 py-3">
                  Tanggal Buat Akun
                </th>
                <th scope="col" className="px-1 py-3">
                  Detail
                </th>
                <th scope="col" className="px-8 py-3">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {verificationData.map((item) => (
                <tr
                  key={item.id}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <td className="p-4">
                    <input type="checkbox" />
                  </td>
                  <td className="px-1 py-4 font-semibold text-gray-900">
                    {item.name}
                  </td>
                  <td className="px-1 py-4 font-semibold text-gray-900">
                    {item.createDate}
                  </td>
                  <td className="px-1 py-4">
                    <button
                      className="bg-[#F3B502] w-[80px] h-[30px] rounded-full text-white"
                      onClick={() => toggleDetailPopup(item.id)}
                    >
                      Detail
                    </button>
                  </td>
                  <td className="px-8 py-4 relative">
                    <MoreVertOutlinedIcon
                      onClick={() => toggleDropdown(item.id)}
                    />
                    {activeDropdown === item.id && (
                      <div className="absolute left-16 top-[20px] z-20 w-32 py-4 rounded-md shadow-md shadow-gray-400 bg-white">
                        <div className="flex flex-col items-center ">
                          <p className="cursor-pointer mb-4 text-[#1A1A1A] ">
                            Verifikasi
                          </p>
                          <p className="cursor-pointer text-[#FF3B3B] ">
                            Batalkan Verifikasi
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
      </div>

      {selectedUserId && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 rounded-md">
        <div className="flex flex-col gap-3 bg-[#F2F2F2] rounded-2xl">
            <div className="flex items-center justify-between px-5 py-4 bg-white rounded-t-2xl ">
              <p>Details</p>
              <button onClick={() => toggleDetailPopup(null)}>Tutup</button>
            </div>
            <div className="text-sm flex gap-20 px-8 py-5 bg-white rounded-b-2xl ">
              <div className="flex flex-col gap-3">
                <div>
                  <p className="font-semibold">Nama </p>
                  <p className="text-gray-600">
                    {
                      verificationData.find(
                        (user) => user.id === selectedUserId
                      )?.name
                    }
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Jenis Akun</p>
                  <p className="text-gray-600">
                    {
                      verificationData.find(
                        (user) => user.id === selectedUserId
                      )?.accountType
                    }
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Organisasi:</p>
                  <p className="text-gray-600">
                    {" "}
                    {
                      verificationData.find(
                        (user) => user.id === selectedUserId
                      )?.organization
                    }
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <p className="font-semibold">Nomor Telepon</p>
                  <p className="text-gray-600">
                    {" "}
                    {
                      verificationData.find(
                        (user) => user.id === selectedUserId
                      )?.phoneNumber
                    }
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">
                    {" "}
                    {
                      verificationData.find(
                        (user) => user.id === selectedUserId
                      )?.email
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifikasiAkun;