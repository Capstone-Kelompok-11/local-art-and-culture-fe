import React from 'react';
import Sidebar from '../../../component/superadmin/globalComponent/Sidebar';
import Navbar from '../../../component/superadmin/globalComponent/Navbar';
import CardTranksasi from '../../../component/superadmin/globalComponent/CardTransaksi';
import Table from '../../../component/superadmin/transaksi/Table'
const HomeSuperAdmin = () => {
  const usersData = [
    { judul: 'Pemasukan Keseluruhan (Rp)', quantity: 35440000 },
    { judul: 'Pemasukan Event (Rp)', quantity: 35440000 },
    { judul: 'Pemasukan UMKM (Rp)', quantity: 35440000 },
    { judul: 'Permintaan Payout', quantity: 32 },
  ];


  return (
    <div className='bg-[#F2F2F2]'>
      <Sidebar />
      <Navbar title="Transaksi" />
      <div className="px-4 py-28 sm:ml-[266px]">
        <div className='grid w-full gap-6 px-10 md:grid-cols-3 pb-9'>
          {usersData.map((pengguna, index) => (
            <CardTranksasi key={index} judul={pengguna.judul} quantity={pengguna.quantity} />
          ))}
        </div>
        <div className='mx-10 p-10 rounded-lg bg-blue-300'>
            <Table/>
        </div>
      </div>
    </div>
  );
};

export default HomeSuperAdmin;
