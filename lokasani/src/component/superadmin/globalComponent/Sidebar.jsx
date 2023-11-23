import React from "react";
import Logotype from '../../../assets/icon/Logotype.svg';
import logoHome from '../../../assets/icon/home.svg'
import logoArtickel from '../../../assets/icon/receipt.svg'
import logoTransaksi from '../../../assets/icon/money.svg'
import logoAgent from '../../../assets/icon/support_agent.svg'
import logoLogOut from '../../../assets/icon/Logout.svg'
import logoEmail from '../../../assets/icon/email.svg'


const Sidebar = () => {
  return (
    <div
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-[300px] bg-[#253E8D] h-screen transition-transform -translate-x-full sm:translate-x-0"

    >
      <div className="h-full px-6 overflow-y-auto dark:bg-gray-800 pt-16 flex flex-col justify-between">
        <div>
        <div className="flex items-center mb-8">
          <img
            src={Logotype}
            className="w-15 me-3"
          />
          <span className="self-center text-2xl font-medium whitespace-nowrap text-[#E6E6E6]">
            SUPER ADMIN
          </span>
        </div>
        <ul className="space-y-2 font-medium">
          <li>
            <a
              href="#"
              className="flex items-center py-2 px-4  text-gray-900 rounded-lg hover:bg-[#768DD5] group "
            >
              <img
              src={logoHome}
                className="w-[20] h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span className="ms-3 text-[#E6E6E6]">Home</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center py-2 px-4 text-gray-900 rounded-lg dark:text-white hover:bg-[#768DD5] dark:hover:bg-gray-700 group"
            >
              <img
              src={logoArtickel}
                className="w-[20] h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span className="flex-1 ms-3 whitespace-nowrap text-[#E6E6E6]">Artikel</span>
              
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center py-2 px-4 text-gray-900 rounded-lg dark:text-white hover:bg-[#768DD5] dark:hover:bg-gray-700 group"
            >
              <img
              src={logoTransaksi}
                className="w-[20] h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span className="flex-1 ms-3 whitespace-nowrap text-[#E6E6E6]">Transaksi</span>
              
            </a>
          </li>
          {/* <li>
            <a
              href="#"
              className="flex items-center py-2 px-4 text-gray-900 rounded-lg dark:text-white hover:bg-[#768DD5] dark:hover:bg-gray-700 group"
            >
              <img
              src={logo}
                className="w-5 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span className="flex-1 ms-3 whitespace-nowrap text-[#E6E6E6]">Verifikasi</span>
            </a>
          </li> */}
          <li>
            <a
              href="#"
              className="flex items-center py-2 px-4 text-gray-900 rounded-lg dark:text-white hover:bg-[#768DD5] dark:hover:bg-gray-700 group"
            >
              <img
              src={logoAgent}
                className="w-[20] h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span className="flex-1 ms-3 whitespace-nowrap text-[#E6E6E6]">Data user</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center py-2 px-4 text-gray-900 rounded-lg dark:text-white hover:bg-[#768DD5] dark:hover:bg-gray-700 group"
            >
              <img
              src={logoEmail}
                className="w-[20] h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span className="flex-1 ms-3 whitespace-nowrap text-[#E6E6E6]">Pemasaran</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center py-2 px-4 text-gray-900 rounded-lg dark:text-white hover:bg-[#768DD5] dark:hover:bg-gray-700 group"
            >
              <img
              src={logoAgent}
                className="w-[20] h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span className="flex-1 ms-3 whitespace-nowrap text-[#E6E6E6]">Pusat Bantuan</span>
            </a>
          </li>
        </ul>
        </div>
        
        <div className="pb-16">
      <ul className="space-y-2 font-medium">
        <li>
            <a
              href="#"
              className="flex items-center py-2 px-4 text-gray-900 rounded-lg dark:text-white hover:bg-[#768DD5] dark:hover:bg-gray-700 group"
            >
              <img
              src={logoAgent}
                className="w-[20] h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span className="flex-1 ms-3 whitespace-nowrap text-[#E6E6E6]">Pengaturan</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center py-2 px-4 text-gray-900 rounded-lg dark:text-white hover:bg-[#768DD5] dark:hover:bg-gray-700 group"
            >
              <img
              src={logoLogOut}
                className="w-[20] h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span className="flex-1 ms-3 whitespace-nowrap text-[#E6E6E6]">Keluar</span>
            </a>
          </li>
        </ul>
      </div>
      </div>

     
    </div>
  );
};

export default Sidebar;
