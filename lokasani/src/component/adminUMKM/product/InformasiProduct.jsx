

const InformasiProduct = () => {

  return (
    <div className="w-full p-6 bg-white rounded-lg mt-5">
      <div className="flex justify-between items-center mb-8">
        <div className="text-black text-xl font-semibold leading-9">
          Informasi Produk
        </div>
        <div>
          <p
            className="text-blue-800 text-base font-semibold cursor-pointer"
          >
            Tambahkan Produk dari CSV
          </p>
        </div>
      </div>
      <div className="mb-4">
        <div className="mb-2">
          <label className="font-semibold text-base" htmlFor="productName">Nama</label>
        </div>
        <input
          type="text"
          id="productName"
          name="productName"
          className="w-full py-2 px-3 border-2 border-gray-400 rounded-lg focus:outline-none"
        />
      </div>
      <div className="flex justify-between items-center gap-6 mb-4">
        <div className="w-full">
          <div className="mb-2">
            <label className="font-semibold text-base" htmlFor="sku">Kategori</label>
          </div>
          <select className="w-full py-2 px-3 border-2 border-gray-400 rounded-lg focus:outline-none" name="kategori" id="kategori">
            <option value="handmade">HandMade</option>
            <option value="fashion">Fashion</option>
            <option value="buku">Buku</option>
            <option value="3D">3D</option>
          </select>
        </div>
        <div className="w-full">
          <div className="mb-2">
            <label className="font-semibold text-base" htmlFor="kodeBatang">Kode Batang</label>
          </div>
          <input
            type="text"
            name="kodeBatang"
            placeholder="01234-5678"
            className="w-full py-2 px-3 border-2 border-gray-400 rounded-lg focus:outline-none"
          />
        </div>
      </div>
      <div className="mb-4">
        <div className="mb-2">
            <label className="font-semibold text-base" htmlFor="deskripsi">Kode Batang</label>
          </div>
          <textarea
            name="deskripsi" 
            id="deskrisi"
            rows="7"
            className="w-full py-2 px-3 border-2 border-gray-400 rounded-lg focus:outline-none overflow-auto"
          >
          </textarea>
      </div>
    </div>
  );
};

export default InformasiProduct;
