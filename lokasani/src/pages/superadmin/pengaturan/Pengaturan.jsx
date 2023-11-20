import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "../../../component/superadmin/globalComponent/Sidebar";
import Navbar from "../../../component/superadmin/globalComponent/Navbar";
import Akun from "../../../component/superadmin/pengaturan/Akun";
import Keamanan from "../../../component/superadmin/pengaturan/Keamanan";
import Notifikasi from "../../../component/superadmin/pengaturan/Notifikasi";

const Pengaturan = () => {
  const [activeTab, setActiveTab] = useState("akun");
  const location = useLocation();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-white">
      <Sidebar />
      <Navbar title="Pengaturan" />
      <div className="px-4 py-28 sm:ml-[266px]">
        <div className="text-sm px-10 font-medium text-center text-gray-500 border-b-black border-gray-900 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex justify-between flex-wrap -mb-px">
            <li>
              <Link
                to=""  // Adjust the path accordingly
                className={`w-full p-4 text-base border-b-black border-transparent rounded-t-lg hover:text-black hover:border-black duration-300 ${
                  activeTab === "akun" ? "text-black border-black" : ""
                }`}
                onClick={() => handleTabClick("akun")}
              >
                Akun
              </Link>
            </li>
            <li>
              <Link
                to=""  // Adjust the path accordingly
                className={`w-full p-4 text-base border-b-black border-transparent rounded-t-lg hover:text-black hover:border-black duration-300 ${
                  activeTab === "keamanan" ? "text-black border-black" : ""
                }`}
                onClick={() => handleTabClick("keamanan")}
              >
                Keamanan
              </Link>
            </li>
            <li>
              <Link
                to=""  // Adjust the path accordingly
                className={`w-full p-4 text-base border-b-black border-transparent rounded-t-lg hover:text-black hover:border-black duration-300 ${
                  activeTab === "notifikasi" ? "text-black border-black" : ""
                }`}
                onClick={() => handleTabClick("notifikasi")}
              >
                Notifikasi
              </Link>
            </li>
          </ul>
          <div className="my-4">
            {activeTab === "akun" && <Akun />}
            {activeTab === "keamanan" && <Keamanan />}
            {activeTab === "notifikasi" && <Notifikasi />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pengaturan;