
const Mengatur = () => {
    return (
        <div className="w-full p-6 bg-white rounded-lg mt-5">
            <div className="mb-8">
                <div className="text-black text-xl font-semibold leading-9">
                    Informasi Produk
                </div>
            </div>
            <div className="mb-4">
                <div className="mb-2">
                    <label className="font-semibold text-base" htmlFor="kategori">Kategori</label>
                </div>
                <div className="w-full">
                    <select 
                        name="kategori" 
                        id="kategori"
                        className="w-full py-2 px-3 border-2 border-gray-400 rounded-lg focus:outline-none"
                    >
                        <option value="">Kategori</option>
                        <option value="">Kategori</option>
                        <option value="">Kategori</option>
                    </select>
                </div>
            </div>
            <div className="mb-4">
                <div className="mb-2">
                    <label className="font-semibold text-base" htmlFor="koleksi">Koleksi</label>
                </div>
                <div className="w-full">
                    <select 
                        name="koleksi" 
                        id="koleksi"
                        className="w-full py-2 px-3 border-2 border-gray-400 rounded-lg focus:outline-none"
                    >
                        <option value="">Koleksi</option>
                        <option value="">Koleksi</option>
                        <option value="">Koleksi</option>
                    </select>
                </div>
            </div>
            <div className="mb-4">
                <div className="mb-2">
                    <label className="font-semibold text-base" htmlFor="status">Status</label>
                </div>
                <div className="w-full">
                    <select 
                        name="status" 
                        id="status"
                        className="w-full py-2 px-3 border-2 border-gray-400 rounded-lg focus:outline-none"
                    >
                        <option value="diterbitkan">Diterbitkan</option>
                        <option value="pending">Pending</option>
                        <option value="tidak tersedia">Tidak Tersedia</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Mengatur;
