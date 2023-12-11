import {useState} from "react";
import ReactPaginate from "react-paginate";
import Sidebar from "../../component/adminUMKM/globalComponent/Sidebar";
import Header from "../../component/adminUMKM/globalComponent/Header";
import data from "../../data/data";
import DownloadIcon from '@mui/icons-material/Download';
import InfoIcon from '@mui/icons-material/Info';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const DaftarPesanan = () => {
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
					<Sidebar/>
				</div>
				<div className="w-full pl-[255px]">
					<div>
						<Header headerTitle={"Daftar Pesanan"} />
					</div>
					<div className="bg-white mx-6 mt-6 mb-2 px-6 py-2 flex justify-between">
						<div>
							<input 
								type="text"
								placeholder="Cari Infoice"
								className="w-64 py-2 px-3 border-2 border-gray-400 rounded-lg focus:outline-none"
							/>
						</div>
						<div>
							<button className="bg-[#253E8D] text-white rounded-md py-2 px-3">
								<DownloadIcon fontSize="small mr-2"/>
								Ekspor
							</button>
						</div>
					</div>
					<div className="bg-white mx-6 px-6 py-2">
						<table className="table w-full">
							<thead>
								<th className="text-left border-t-2 border-b-2 px-4 py-2">ID</th>
								<th className="text-left border-t-2 border-b-2 px-4 py-2">Tanggal</th>
								<th className="text-left border-t-2 border-b-2 px-4 py-2">Nama Pelanggan</th>
								<th className="text-left border-t-2 border-b-2 px-4 py-2">Pembayaran</th>
								<th className="text-left border-t-2 border-b-2 px-4 py-2">Status</th>
								<th className="text-left border-t-2 border-b-2 px-4 py-2">Aksi</th>
							</thead>
							<tbody>
								{currentItems.map((item) => (
									<tr key={item.id}>
										<td className="border-t-2 border-b-2 px-4 py-3">{item.id}</td>
										<td className="border-t-2 border-b-2 px-4 py-3">{item.tanggal}</td>
										<td className="border-t-2 border-b-2 px-4 py-3">{item.nama_pelanggan}</td>
										<td className={`border-t-2 border-b-2 px-4 py-3 font-semibold ${
											item.pembayaran === "gagal" ? "text-red-500" :
											item.pembayaran === "dibayar" ? "text-green-500" :
											item.pembayaran === "dibatalkan" ? "text-orange-500" :
											item.pembayaran === "tertunda" ? "text-blue-400" : ""
										}`}>
											{item.pembayaran}
										</td>
										<td className="text-white border-t-2 border-b-2 px-4 py-3 font-semibold">
											<p className={`block w-fit text-white px-1 py-0 rounded-lg ${
												item.status === "tidak dikirim" ? "bg-red-500" :
												item.status === "dikirim" ? "bg-green-500" :
												item.status === "dikemas" ? "bg-orange-500" :
												item.status === "siap diambil" ? "bg-blue-400" : ""
											}`}
											>
												{item.status}
											</p>
										</td>
										{/* <td className="border-t-2 border-b-2 px-4 py-3 font-semibold">{item.status}</td> */}
										<td className="border-t-2 border-b-2 px-4 py-3 font-semibold flex items-center gap-2 text-gray-500">
											<InfoIcon/>
											<DeleteOutlineIcon/>
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
    );
};

export default DaftarPesanan;
