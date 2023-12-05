import React from "react";
import { Link } from "react-router-dom";
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
      className="fixed top-0 left-0 z-40 w-[250px] bg-[#253E8D] h-screen transition-transform  sm:translate-x-0"

    >
      <div className="h-full px-4 overflow-y-auto  pt-16 flex flex-col justify-between">
        <div>
        <div className="flex items-center mb-8">
          <img
            src={Logotype}
            className="w-12 me-3"
          />
          <span className="self-center text-xl font-medium whitespace-nowrap text-[#E6E6E6]">
            SUPER ADMIN
          </span>
        </div>
        <ul className="space-y-2 font-medium">
          <li>
            <Link to={"/superAdmin/homeSuperAdmin"}
              className="flex items-center py-2 px-4  text-gray-900 rounded-lg hover:bg-[#768DD5] group "
            >
              <img
              src={logoHome}
                className="w-[25px] h-8 "
              />
              <span className="ms-3 text-[#E6E6E6]">Home</span>
            </Link>
          </li>
          <li>
            <Link to={"/superAdmin/artikel"}
              className="flex items-center py-2 px-4 text-gray-900 rounded-lg hover:bg-[#768DD5] "
            >
              <img
              src={logoArtickel}
                className="w-[25px] h-8 "
              />
              <span className="flex-1 ms-3 whitespace-nowrap text-[#E6E6E6]">Artikel</span>
              
            </Link>
          </li>
          <li>
            <Link to={""}
              className="flex items-center py-2 px-4 text-gray-900 rounded-lg  hover:bg-[#768DD5] "
            >
              <img
              src={logoTransaksi}
                className="w-[25px] h-8"
              />
              <span className="flex-1 ms-3 whitespace-nowrap text-[#E6E6E6]">Transaksi</span>
              
            </Link>
          </li>
          <li>
            <Link to={"/superAdmin/dataUser"}
              className="flex items-center py-2 px-4 text-gray-900 rounded-lg hover:bg-[#768DD5] "
            >
              <img
              src={logoAgent}
                className="w-[25px] h-8"
              />
              <span className="flex-1 ms-3 whitespace-nowrap text-[#E6E6E6]">Data user</span>
            </Link>
          </li>
          <li>
            <Link to={""}
              className="flex items-center py-2 px-4 text-gray-900 rounded-lg hover:bg-[#768DD5] "
            >
              <img
              src={logoEmail}
                className="w-[25px] h-8"
              />
              <span className="flex-1 ms-3 whitespace-nowrap text-[#E6E6E6] hover:bg-[#768DD5]">Pemasaran</span>
            </Link>
          </li>
          <li>
            <Link to={""}
              className="flex items-center py-2 px-4 text-gray-900 rounded-lg hover:bg-[#768DD5] "
            >
              <img
              src={logoAgent}
                className="w-[25px] h-8 "
              />
              <span className="flex-1 ms-3 whitespace-nowrap text-[#E6E6E6] ">Pusat Bantuan</span>
            </Link>
          </li>
        </ul>
        </div>
        
        <div className="pb-16">
      <ul className="space-y-2 font-medium">
        <li>
            <Link to={"/superAdmin/pengaturan"}
              className="flex items-center py-2 px-4 text-gray-900 rounded-lg  hover:bg-[#768DD5] "
            >
              <img
              src={logoAgent}
                className="w-[25px] h-8"
              />
              <span className="flex-1 ms-3 whitespace-nowrap text-[#E6E6E6]">Pengaturan</span>
            </Link>
          </li>
          <li>
            <Link to={""}
              className="flex items-center py-2 px-4 text-gray-900 rounded-lg hover:bg-[#768DD5] "
            >
              <img
              src={logoLogOut}
                className="w-[25px] h-8"
              />
              <span className="flex-1 ms-3 whitespace-nowrap text-[#E6E6E6]">Keluar</span>
            </Link>
          </li>
        </ul>
      </div>
      </div>

     
    </div>
  );
};

export default Sidebar;