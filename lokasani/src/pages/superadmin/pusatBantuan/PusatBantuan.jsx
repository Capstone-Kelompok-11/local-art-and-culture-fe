import React from "react";
import Sidebar from "../../../component/superadmin/globalComponent/Sidebar";
import Navbar from "../../../component/superadmin/globalComponent/Navbar";

function PusatBantuan() {
  return (
    <>
      <div className="bg-white">
        <Sidebar />
        <Navbar title="Pusat Bantuan" />
        <div className="h-screen justify-center items-center flex bg-slate-500">
          <h1 className=" text-5xl text-center text-yellow-500">Hello World</h1>
        </div>
      </div>
    </>
  );
}

export default PusatBantuan;
