import React from "react";
import Navbar from "../../../component/superadmin/globalComponent/Navbar";
import Sidebar from "../../../component/superadmin/globalComponent/Sidebar";
import CardUser from "../../../component/superadmin/globalComponent/CardUser";

const DataUser = () => {
  const usersData = [
    { name: "Pengguna", quantity: 10 },
    { name: "Admin Event", quantity: 15 },
    { name: "Admin UMKM", quantity: 8 },
  ];
  return (
    <div className="bg-[#F2F2F2]">
      <Sidebar />
      <Navbar title="DATA USER" />
      <div className="px-4 py-28 sm:ml-[266px]">
        <div className="grid w-full gap-6 px-10 md:grid-cols-3">
          {usersData.map((pengguna, index) => (
            <CardUser
              key={index}
              name={pengguna.name}
              quantity={pengguna.quantity}
              showCardButton={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataUser;
