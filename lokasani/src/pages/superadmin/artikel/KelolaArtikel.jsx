/* eslint-disable no-unused-vars */
import React from 'react'
import Sidebar from '../../../component/superadmin/globalComponent/Sidebar';
import Navbar from '../../../component/superadmin/artikel/Navbar';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TextsmsIcon from '@mui/icons-material/Textsms';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PlaceImage from '../../../assets/img/placeimage-artikel.png'

function KelolaArtikel() {
  return (
    <section>
        <Sidebar />
        <Navbar title="Kelola Artikel" />

        <main className='pt-[100px] h-full sm:ml-[246px] bg-[#D9D9D9]'>
            <div className='flex justify-between mx-8'>
                <div className="flex items-center relative">
                    <SearchIcon className='ml-3 cursor-pointer absolute'/>
                    <input type="text" name="name" placeholder="Cari artikel"
                        className="w-[250px] py-1 h-10 pl-12 bg-[#fff] rounded-[9px]">
                    </input>
                </div>
                <div className="flex justify-end items-center border-2 border-black">
                    <select className="bg-white text-[#999999] p-1 px-2 py-2 rounded-md ml-2">
                        <option>Urut Berdasarkan</option>
                        <option>Filter 2</option>
                    </select>
                </div>
            </div>

            {/* Tabel start */}
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-8 mt-4">
                <table className="w-full relative text-left rtl:text-right bg-white">
                    <thead className="text-base text-[#B3B3B3]">
                        <tr className='border-b-10'>
                            <th scope="col" className="px-6 py-3 font-normal">
                                Judul Artikel
                            </th>
                            <th scope="col" className="px-6 py-3 font-normal">
                                Tanggal Unggah
                            </th>
                            <th scope="col" className="px-6 py-3 font-normal">
                                Statistik
                            </th>
                            <th scope="col" className="px-6  py-3 font-normal text-right pr-6">
                                Aksi
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white cursor-pointer">
                            <th scope="row" className="px-6 py-4 w-5/12">
                                <div className='flex gap-x-2 items-center'>
                                    <img src={PlaceImage} width={180} alt="" className='object-fill h-5/12'/>
                                    <h1 className='flex flex-wrap'>
                                    Memaknai Wayang sebagai Khazanah Budaya Nusantara Masa Kini
                                    </h1>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                12 November 2023
                            </td>
                            <td className="px-6 py-4">
                                <div className='flex items-center'>
                                    <VisibilityIcon fontSize='medium' />&nbsp;<span>20</span>
                                    <TextsmsIcon fontSize='small' className='ml-3'/>&nbsp;<span>20</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <MoreVertIcon className='hover:text-slate-500'/>
                            </td>
                        </tr>
                        <tr className="bg-white cursor-pointer">
                            <th scope="row" className="px-6 py-4 w-5/12">
                                <div className='flex gap-x-2 items-center'>
                                    <img src={PlaceImage} width={180} alt="" className='object-fill h-5/12'/>
                                    <h1 className='flex flex-wrap'>
                                    Memaknai Wayang sebagai Khazanah Budaya Nusantara Masa Kini
                                    </h1>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                12 November 2023
                            </td>
                            <td className="px-6 py-4">
                                <div className='flex items-center'>
                                    <VisibilityIcon fontSize='medium' />&nbsp;<span>20</span>
                                    <TextsmsIcon fontSize='small' className='ml-3'/>&nbsp;<span>20</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <MoreVertIcon className='hover:text-slate-500'/>
                            </td>
                        </tr>
                        <tr className="bg-white cursor-pointer">
                            <th scope="row" className="px-6 py-4 w-5/12">
                                <div className='flex gap-x-2 items-center'>
                                    <img src={PlaceImage} width={180} alt="" className='object-fill h-5/12'/>
                                    <h1 className='flex flex-wrap'>
                                    Memaknai Wayang sebagai Khazanah Budaya Nusantara Masa Kini
                                    </h1>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                12 November 2023
                            </td>
                            <td className="px-6 py-4">
                                <div className='flex items-center'>
                                    <VisibilityIcon fontSize='medium' />&nbsp;<span>20</span>
                                    <TextsmsIcon fontSize='small' className='ml-3'/>&nbsp;<span>20</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <MoreVertIcon className='hover:text-slate-500'/>
                            </td>
                        </tr>
                        <tr className="bg-white cursor-pointer">
                            <th scope="row" className="px-6 py-4 w-5/12">
                                <div className='flex gap-x-2 items-center'>
                                    <img src={PlaceImage} width={180} alt="" className='object-fill h-5/12'/>
                                    <h1 className='flex flex-wrap'>
                                    Memaknai Wayang sebagai Khazanah Budaya Nusantara Masa Kini
                                    </h1>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                12 November 2023
                            </td>
                            <td className="px-6 py-4">
                                <div className='flex items-center'>
                                    <VisibilityIcon fontSize='medium' />&nbsp;<span>20</span>
                                    <TextsmsIcon fontSize='small' className='ml-3'/>&nbsp;<span>20</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <MoreVertIcon className='hover:text-slate-500'/>
                            </td>
                        </tr>
                        <tr className="bg-white cursor-pointer">
                            <th scope="row" className="px-6 py-4 w-5/12">
                                <div className='flex gap-x-2 items-center'>
                                    <img src={PlaceImage} width={180} alt="" className='object-fill h-5/12'/>
                                    <h1 className='flex flex-wrap'>
                                    Memaknai Wayang sebagai Khazanah Budaya Nusantara Masa Kini
                                    </h1>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                12 November 2023
                            </td>
                            <td className="px-6 py-4">
                                <div className='flex items-center'>
                                    <VisibilityIcon fontSize='medium' />&nbsp;<span>20</span>
                                    <TextsmsIcon fontSize='small' className='ml-3'/>&nbsp;<span>20</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <MoreVertIcon className='hover:text-slate-500'/>
                            </td>
                        </tr>
                        <tr className="bg-white cursor-pointer">
                            <th scope="row" className="px-6 py-4 w-5/12">
                                <div className='flex gap-x-2 items-center'>
                                    <img src={PlaceImage} width={180} alt="" className='object-fill h-5/12'/>
                                    <h1 className='flex flex-wrap'>
                                    Memaknai Wayang sebagai Khazanah Budaya Nusantara Masa Kini
                                    </h1>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                12 November 2023
                            </td>
                            <td className="px-6 py-4">
                                <div className='flex items-center'>
                                    <VisibilityIcon fontSize='medium' />&nbsp;<span>20</span>
                                    <TextsmsIcon fontSize='small' className='ml-3'/>&nbsp;<span>20</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <MoreVertIcon className='hover:text-slate-500'/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* Tabel end */}
        </main>
    </section>
  )
}

export default KelolaArtikel