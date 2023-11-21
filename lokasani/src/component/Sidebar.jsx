import React from "react";
import {
  MdChat,
  MdHome,
  MdShoppingCart,
  MdReceipt,
  MdConveyorBelt,
  MdGroup,
  MdQuestionAnswer,
  MdLogout,
} from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="bg-blue-800 text-white h-screen w-[353px] fixed z-20 top-0 left-0 overflow-y-auto flex-col">
      <div className="p-4 flex items-center justify-center">
        <div className="p-4 flex items-center justify-center">
          <img
            src="/src/assets/Logotype.svg"
            alt="Logo LokaSani"
            role="presentation"
            className="w-8 h-8 mr-2"
          />
          <h1 className="text-2xl font-bold  flex justify-center items-center">
            ADMIN UMKM
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <button className="flex items-center justify-center bg-gray-300 text-white h-10 px-4 rounded-md mb-4 mt-10">
          <span className="font-medium">Tambahkan Produk</span>
        </button>
      </div>

      <ul className=" flex-col items-center justify-center">
        <li className="flex items-center h-10 px-4 font-medium text-sm justify-start">
          <MdHome className="text-2xl mr-2" />
          <span className="leading-none">Home</span>
        </li>
        <li className="flex items-center h-10 px-4 font-medium text-sm justify-start">
          <MdChat className="text-2xl mr-2" />
          <span className="leading-none">Chat</span>
        </li>
        <li className="flex items-center h-10 px-4 font-medium text-sm justify-start">
          <MdShoppingCart className="text-2xl mr-2" />
          <span className="leading-none">Produk</span>
        </li>
        <li className="flex items-center h-10 px-4 font-medium text-sm justify-start">
          <MdReceipt className="text-2xl mr-2" />
          <span className="leading-none">Pesanan</span>
        </li>
        <li className="flex items-center h-10 px-4 font-medium text-sm justify-start">
          <MdConveyorBelt className="text-2xl mr-2" />
          <span className="leading-none">Transaksi</span>
        </li>
        <li className="flex items-center h-10 px-4 font-medium text-sm justify-start">
          <MdQuestionAnswer className="text-2xl mr-2" />
          <span className="leading-none">Statistik</span>
        </li>
        <li className="flex items-center h-10 px-4 font-medium text-sm justify-start">
          <MdGroup className="text-2xl mr-2" />
          <span className="leading-none">Pusat Bantuan</span>
        </li>
        <li className="flex items-center h-10 px-4 font-medium text-sm justify-start">
          <MdQuestionAnswer className="text-2xl mr-2" />
          <span className="leading-none">Ulasan</span>
        </li>
        <li className="flex items-center h-10 px-4 font-medium text-sm justify-start">
          <MdGroup className="text-2xl mr-2" />
          <span className="leading-none">Setting</span>
        </li>
        <li className="flex items-center h-10 px-4 font-medium text-sm justify-start">
          <MdLogout className="text-2xl mr-2" />
          <span className="leading-none">logout</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
