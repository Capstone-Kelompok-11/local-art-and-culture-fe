import Sidebar from "../../component/adminUMKM/globalComponent/Sidebar";
import Header from "../../component/adminUMKM/globalComponent/Header";
import InformasiProduct from "../../component/adminUMKM/product/InformasiProduct";
import Harga from "../../component/adminUMKM/product/Harga";
// import Varian from "../../component/adminUMKM/product/Varian";
import Media from "../../component/adminUMKM/product/Media";

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
          <div className="w-full flex justify-between items-center px-6 mt-8">
            <div className="w-full">
              <h1 className="text-xl font-bold">
                Tambahkan Product
              </h1>
              <p className="text-sm">
                Pesanan ditempatkan diseluruh toko anda
              </p>
            </div>
            <div className="flex justify-end items-center gap-3 w-full">
              <button className=" border border-slate-200 bg-[#253E8D] text-white rounded-md py-2 px-3 ">
                Simpan
              </button>
              <button className=" border border-slate-200 bg-[#253E8D] text-white rounded-md py-2 px-3">
                Batalkan
              </button>
              <button className=" border border-slate-200 bg-[#253E8D] text-white rounded-md py-2 px-3">
                Unggah Produk
              </button>
            </div>
          </div>
          <div className="px-6 w-full flex gap-6">
            <div className="w-3/5">
              <div className="w-full">
                <InformasiProduct />
              </div>
              <div className="w-full">
                <Media/>
              </div>
              {/* <div className="w-full">
                <Varian/>
              </div> */}
            </div>
            <div className="w-2/5">
              <div className="w-full">
                <Harga />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
