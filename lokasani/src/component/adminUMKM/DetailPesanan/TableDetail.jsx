import { useState } from "react";
import data from "../../../data/data";

const DetaiTable = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const offset = currentPage * itemsPerPage;
  const currentItems = data.slice(offset, offset + itemsPerPage);

  return (
    <div className="bg-[#F2F2F2] w-[662px]  ">
      <div className="bg-white mx-5 px-6 py-5 rounded-xl">
        <div className="text-black text-2xl font-semibold font-['Plus Jakarta Sans'] leading-9">
          Detail Pesanan
        </div>
        <table className="table w-[562px] mt-4">
          <thead>
            <th className="text-left  px-4 py-2">Produk</th>
            <th className="text-left  px-4 py-2">Harga</th>
            <th className="text-left  px-4 py-2">Jumlah</th>
            <th className="text-left  px-4 py-2">Total</th>
          </thead>
          <tbody className="text-blue-800">
            {currentItems.map((item) => (
              <tr key={item.produk}>
                <td className="border-t-2 border-b-2 px-4 py-3">
                  {item.produk}
                </td>
                <td className="border-t-2 border-b-2 px-4 py-3">
                  {item.harga}
                </td>
                <td className="border-t-2 border-b-2 px-4 py-3">
                  {item.jumlah}
                </td>
                <td className="border-t-2 border-b-2 px-4 py-3">
                  {item.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-[662px] h-14 px-6 py-4  justify-end items-center gap-[36.67px] inline-flex">
          <div className="w-16 h-6 justify-center items-center flex">
            <div className="w-16 text-blue-800 text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
              Total :
            </div>
          </div>
          <div className="justify-end items-center  flex">
            <div className="w-[200px] mr-9 text-blue-800 text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
              Rp 900.000,00
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetaiTable;
