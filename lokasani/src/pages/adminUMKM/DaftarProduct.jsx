import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import axios from 'axios';
import Swal from 'sweetalert2'
import Sidebar from "../../component/adminUMKM/globalComponent/Sidebar";
import Header from "../../component/adminUMKM/globalComponent/Header";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const DaftarProduct = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://657bab26394ca9e4af1498ba.mockapi.io/product')
            setProducts(response.data);
            console.log(response.data)
        } catch (error) {
            console.error('Terjadi kesalahan:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [currentPage]);

    const handleDeleteProduct = async (productId) => {
        const confirmation = await Swal.fire({
            title: 'Are you sure?',
            text: 'Konfirmasi menghapus data product',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        });
    
        if (confirmation.isConfirmed) {
            try {
                await axios.delete(`https://657bab26394ca9e4af1498ba.mockapi.io/product/${productId}`);
                fetchProducts();
                await Swal.fire('Deleted!', 'data berhasil dihapus', 'success');
            } catch (error) {
                console.error('Gagal menghapus data:', error.ressponse.data);
                await Swal.fire('Error!', 'gagal menghapus data', 'error');
            }
        }
    };
    

    const offset = currentPage * itemsPerPage;
    const currentItems = products.slice(offset, offset + itemsPerPage);

    const totalPages = Math.ceil(products.length / itemsPerPage);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <div className="bg-[#F2F2F2]">
            <div className="flex">
                <div>
                    <Sidebar/>
                </div>
                <div className="w-full ml-[255px]">
                    <div>
                        <Header headerTitle="Daftar Product" />
                    </div>
                    <div className="bg-white m-6 p-6">
                        <div className="mb-8">
                            <h1 className="text-xl font-bold">Filter</h1>
                        </div>
                        <div className="mb-4">
                            <div className="flex justify-between gap-6 mb-5">
                                <select 
                                    className="w-full py-2 px-3 border-2 border-gray-400 rounded-lg focus:outline-none"
                                    name="status" 
                                    id="status"
                                >
                                    <option value="all">Semua</option>
                                    <option value="diunggah">Diunggah</option>
                                    <option value="dijadwalkan">Dijadwalkan</option>
                                    <option value="tidak aktif">Tidak Aktif</option>
                                </select>
                                <select 
                                    className="w-full py-2 px-3 border-2 border-gray-400 rounded-lg focus:outline-none"
                                    name="kategori" 
                                    id="kategori"
                                >
                                    <option value="all">Semua</option>
                                    <option value="handmade">Handmade</option>
                                    <option value="fashion">Fashion</option>
                                    <option value="buku">Buku</option>
                                    <option value="3D">3D</option>
                                </select>
                                <select 
                                    className="w-full py-2 px-3 border-2 border-gray-400 rounded-lg focus:outline-none"
                                    name="stok" 
                                    id="stok"
                                >
                                    <option value="all">Semua</option>
                                    <option value="tersedia">Tersedia</option>
                                    <option value="tidak tersedia">Tidak Tersedia</option>
                                </select>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <input 
                                        type="text"
                                        placeholder="Cari Produk"
                                        className="w-64 py-2 px-3 border-2 border-gray-400 rounded-lg focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <a href="/adminumkm/tambahproduct" className="bg-[#253E8D] text-white rounded-md py-2 px-3">Tambah Product</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th className="text-left border-t-2 border-b-2 px-4 py-2 w-[25%]">Produk</th>
                                        <th className="text-left border-t-2 border-b-2 px-4 py-2">Kategori</th>
                                        <th className="text-left border-t-2 border-b-2 px-4 py-2">Stok</th>
                                        <th className="text-left border-t-2 border-b-2 px-4 py-2">Harga</th>
                                        <th className="text-left border-t-2 border-b-2 px-4 py-2">Jumlah</th>
                                        <th className="text-left border-t-2 border-b-2 px-4 py-2">Status</th>
                                        <th className="text-left border-t-2 border-b-2 px-4 py-2">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentItems.map((item) => (
                                        <tr key={item.id}>
                                            <td className="border-t-2 border-b-2 px-4 py-2">
                                                <div className="flex items-center gap-3">
                                                    <img src={item.image} className="w-10 h-10 object-cover rounded-lg"></img>
                                                    <div>
                                                        <p className="font-semibold">{item.name}</p>
                                                        <p className="font-light text-sm">{item.description}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="border-t-2 border-b-2 px-4 py-2">{item.category}</td>
                                            <td className="border-t-2 border-b-2 px-4 py-2">
                                                {item.stock ? (
                                                    <label
                                                        htmlFor="buttonStock"
                                                        className="bg-[#253E8D] transition duration-300 w-9 h-6 rounded-full cursor-pointer flex items-center"
                                                    >
                                                        <div
                                                            className="w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out translate-x-4"
                                                        ></div>
                                                    </label>
                                                ) : (
                                                    <label
                                                        htmlFor="buttonStock"
                                                        className="bg-gray-300 transition duration-300 w-9 h-6 rounded-full cursor-pointer flex items-center"
                                                    >
                                                        <div
                                                            className="w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out translate-x-1"
                                                        ></div>
                                                    </label>
                                                )}
                                            </td>
                                            <td className="border-t-2 border-b-2 px-4 py-2">{item.price}</td>
                                            <td className="border-t-2 border-b-2 px-4 py-2">{item.total_product}</td>
                                            <td className="border-t-2 border-b-2 px-4 py-2">
                                                <p
                                                    className={`block w-fit text-white px-3 py-1 rounded-lg ${
                                                    item.status === "tidak aktif"
                                                        ? "bg-[#b3c7f9]"
                                                        : item.status === "dijadwalkan"
                                                        ? "bg-yellow-500"
                                                        : item.status === "diunggah"
                                                        ? "bg-[#267360]"
                                                        : "text-black"
                                                    }`}
                                                >
                                                    {item.status}
                                                </p>
                                            </td>
                                            <td className="border-t-2 border-b-2 px-4 py-2 cursor-pointer">
                                                <button onClick={() => handleDeleteProduct(item.id)}>
                                                    <DeleteOutlineIcon/>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <div className="pagination mt-4">
                            <ReactPaginate
                                pageCount={totalPages}
                                pageRangeDisplayed={5}
                                marginPagesDisplayed={2}
                                onPageChange={handlePageChange}
                                previousLabel={<ArrowBackIosIcon fontSize="medium" />}
                                nextLabel={<ArrowForwardIosIcon fontSize="medium"/>}
                                containerClassName={"pagination flex justify-end gap-2 mt-6 px-6"}
                                activeClassName={"bg-gray-800 text-white text-sm px-4 py-2 rounded-lg"}
                                pageClassName={"page-item bg-[#CCCCCC] text-white text-sm px-4 py-2 rounded-lg"}
                                previousClassName={"flex items-center font-bold text-gray-500"}
                                nextClassName={"flex items-center font-bold text-gray-500"}
                                breakClassName={"break-item"}
                                disabledClassName={"disabled-item"}
                                pageLinkClassName={"page-link"}
                            />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DaftarProduct;
