import Sidebar from "../../component/adminUMKM/globalComponent/Sidebar";
import Header from "../../component/adminUMKM/globalComponent/Header";
import InformasiProduct from "../../component/adminUMKM/product/InformasiProduct";
import Harga from "../../component/adminUMKM/product/Harga";

const Product = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div className="w-full ml-[255px]">
          <div>
            <Header headerTitle="Tambah Produk" />
          </div>
          <div className="w-full flex justify-between items-center">
            <div>
              <h1 className="text-xl ml-10 mt-10 font-bold">
                Tambahkan Product
              </h1>
              <p className="text-sm ml-10">
                Pesanan ditempatkan diseluruh toko anda
              </p>
            </div>
            <div className="flex justify-end items-center w-full">
              <button className=" border border-slate-200 bg-blue-800 text-white rounded-md  p-3 ">
                Simpan
              </button>
              <button className=" border border-slate-200 bg-blue-800 text-white rounded-md  p-3 ml-4 ">
                Batalkan
              </button>
              <button className=" border border-slate-200 bg-blue-800 text-white rounded-md  p-3 ml-4 ">
                Unggah Produk
              </button>
            </div>
          </div>

          <div className="inline-flex">
            <InformasiProduct />
            <Harga />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
