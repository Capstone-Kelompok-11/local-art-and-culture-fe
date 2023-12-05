import { useState } from "react";
import Sidebar from "../../../component/adminUMKM/globalComponent/Sidebar";
import Header from "../../../component/adminUMKM/globalComponent/Header";
import data from "../../../data/data";
import DownloadIcon from "@mui/icons-material/Download";
import DetaiTable from "../../../component/adminUMKM/DetailPesanan/TableDetail";
import AktivitasPesanan from "../../../component/adminUMKM/DetailPesanan/AktifitasPengiriman";
import CustomerDetail from "../../../component/adminUMKM/DetailPesanan/DetailCustomer";
import Alamat from "../../../component/adminUMKM/DetailPesanan/Alamat";

const DetailPesanan = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const offset = currentPage * itemsPerPage;
  const currentItems = data.slice(offset, offset + itemsPerPage);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  return (
    <div className="bg-[#F2F2F2]">
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div className="w-full ml-[255px]">
          <div>
            <Header headerTitle={"Detail Pesanan"} />
          </div>
          <div className="mt-10 ml-5">
            <div className="w-[1133px] h-[10px] p-6 justify-between items-center inline-flex">
              <div className="justify-start items-center gap-2 flex">
                <div className="text-black text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
                  Order #005
                </div>
                <div className="w-[93px] px-5 py-2 bg-teal-600 rounded-[30px] justify-center items-center gap-5 flex">
                  <div className="text-white text-sm font-semibold font-['Plus Jakarta Sans'] leading-[15px]">
                    Dibayar
                  </div>
                </div>
                <div className="w-[116px] px-4 py-2 bg-indigo-400 rounded-[100px] justify-center items-center gap-2 flex">
                  <div className="text-indigo-50 text-sm font-semibold font-['Plus Jakarta Sans'] leading-[15px]">
                    Siap Diambil
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-red-300 rounded-xl justify-center items-center gap-1 flex">
                <div className="justify-center items-center gap-2 flex">
                  <div className="text-center text-red-500 text-sm font-semibold font-['Plus Jakarta Sans'] leading-[15px]">
                    Hapus Pesanan
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 inline-flex">
            <DetaiTable />
            <div>
              <CustomerDetail />
            </div>
          </div>
          <div className="inline-flex">
            <AktivitasPesanan />
            <div className="ml-5">
              <Alamat />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPesanan;
