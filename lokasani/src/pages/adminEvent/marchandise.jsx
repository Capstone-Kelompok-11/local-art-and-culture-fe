import React, { useState } from 'react';
import Sidebar from '../../component/adminEvent/Sidebar';
import TextsmsIcon from '@mui/icons-material/Textsms';
import user from '../../assets/img/user.svg';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import myeventImage from '../../assets/img/myevent.jpg';

function Marchandise() {
  // select grid
  const [selectedGrid, setSelectedGrid] = useState(null);

  const handleGridClick = (gridIndex) => {
    setSelectedGrid(gridIndex);
  };

  // kalender
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // search
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan nilai searchTerm, misalnya, kirim ke server untuk pencarian
    console.log('Searching for:', searchTerm);
  };

  // button aktif
  const [activeButton, setActiveButton] = useState('semua');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <section>
      <Sidebar />

      <main className="sm:ml-64 bg-[#F2F2F2] h-screen">
        {/* header start */}
        <div className="bg-white flex items-center justify-between py-7 rounded-sm">
          <div className="pl-5">
            <h1 className="text-3xl font-bold">My Event</h1>
          </div>
          <div>
            <div className="flex items-center">
              <div className="flex mr-16 gap-x-6">
                <a className="cursor-pointer">
                  <TextsmsIcon className="text-[#253E8D]" />
                </a>
                <a className="cursor-pointer">
                  <NotificationsActiveIcon className="text-[#253E8D]" />
                </a>
                <a href="">
                  <img className="w-6 h-6 rounded-full" src={user} alt="Rounded avatar" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* header end */}

        {/* content start */}
        <div className="bg-gray-100">
          <div className="bg-gray-100 flex items-center justify-between rounded-sm  ">
            <div className="pl-1 flex items-center">
              <button className="bg-white text-black py-1 px-4 rounded-md m-2 flex items-center gap-x-1">
                <CalendarTodayIcon fontSize="small" />
                Today
              </button>
              <h1 className="text-slate-500 font-semibold">Hari ini</h1>
            </div>

            <div className="flex items-center">
              <button className="bg-[#243775] text-white py-[6px] px-4 rounded-md m-2 flex items-center">
                <FileDownloadIcon fontSize="small" className="mr-1" />
                Unduh Laporan Event Aktif
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3">
            <div className="col-span-1 bg-white p-7 rounded-md relative ring-[#768DD5] ring-1">
              <div className="flex items-center mb-4">
                <img src={myeventImage} alt="Event Image" className="rounded-md object-cover mr-4" />
                <div>
                  <span className="text-2xl font-bold">Workshop Keramik Jawa Timur bersama Kak Seto</span>{' '}
                  <br />
                  <span className="text-[#999999] text-sm mt-2">28 Nov 2023 : Grand Plaza, Jakarta</span>
                  <div className="flex items-center mt-2">
                    <div className="rounded-full bg-green-500 w-3 h-3"></div>
                    <span className="text-3xl font-bold text-sm ml-2"> Status Event Aktif</span>
                  </div>
                </div>
              </div>
              <div className="absolute top-2 right-2 mr-16 mt-7">
                <a className="cursor-pointer">
                  <ExpandLessIcon fontSize="large" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 p-3">
            {/* First Grid */}
            <div
              className={`col-span-4 sm:col-span-2 md:col-span-1 bg-white p-1 rounded-md relative${
                selectedGrid === 0 ? 'ring-[#768DD5] ring-1' : ''
              }`}
              onClick={() => handleGridClick(0)}
            >
              <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-4 rounded-md relative">
                <button className="bg-[#1F5C4D] text-white py-1 px-1 rounded-full absolute top-2 left-2 m-2 flex items-center">
                  <ContactEmergencyIcon />
                </button>
                <div className="flex flex-col justify-between p-2">
                  <div className="absolute left-2 top-1/2 bg-[#1F5C4D] mt-4 w-2 h-12 transform -translate-y-1/2"></div>
                  <div className="mt-14">
                    <span className="text-[#999999] text-sm mt-10">Pengunjung Hadir (org)</span>
                    <br />
                    <span className="text-lg font-bold text-sm font-plus-jakarta-sans">87/350</span>
                    <br />
                  </div>
                </div>
              </div>
            </div>

            {/* Second Grid */}
            <div
              className={`col-span-4 sm:col-span-2 md:col-span-1 bg-white p-1 rounded-md relative ${
                selectedGrid === 1 ? 'ring-[#768DD5] ring-1' : ''
              }`}
              onClick={() => handleGridClick(1)}
            >
              <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-4 rounded-md relative">
                <button className="bg-[#243775] text-white py-1 px-1 rounded-full absolute top-2 left-2 m-2 flex items-center">
                  <LocalActivityIcon />
                </button>
                <div className="flex flex-col justify-between p-2">
                  <div className="absolute left-2 top-1/2 bg-[#243775] mt-4 w-2 h-12 transform -translate-y-1/2"></div>
                  <div className="mt-14">
                    <span className="text-[#999999] text-sm mt-10">Tiket Terjual(pcs)</span>
                    <br />
                    <span className="text-lg font-bold text-sm font-plus-jakarta-sans">35.440.000</span>
                    <br />
                  </div>
                </div>
              </div>
            </div>

            {/* Third Grid */}
            <div
              className={`col-span-4 sm:col-span-2 md:col-span-1 bg-white p-1 rounded-md relative ${
                selectedGrid === 2 ? 'ring-[#768DD5] ring-1' : ''
              }`}
              onClick={() => handleGridClick(2)}
            >
              <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-4 rounded-md relative">
                <button className="bg-[#8D93A5] text-white py-1 px-1 rounded-full absolute top-2 left-2 m-2 flex items-center">
                  <ShoppingBagIcon />
                </button>
                <div className="flex flex-col justify-between p-2">
                  <div className="absolute left-2 top-1/2 bg-[#8D93A5] mt-4 w-2 h-12 transform -translate-y-1/2"></div>
                  <div className="mt-14">
                    <span className="text-[#999999] text-sm mt-10">Merch Terjual (psc)</span>
                    <br />
                    <span className="text-lg font-bold text-sm font-plus-jakarta-sans">35.440.000</span>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3">
            <style>
              {`
                .tab {
                  cursor: pointer;
                  padding: 1rem;
                }

                .tab.active {
                  border-bottom: 2px solid #0053AD; /* Ganti warna sesuai keinginan Anda */
                }
              `}
            </style>
            <div className="col-span-1 bg-white p-7 rounded-md relative">
              <div className="flex justify-end items-center mr-2 border-2 border-black relative">
                <div className="container mx-auto p-1 ">
                  <form onSubmit={handleSearchSubmit} className="flex items-center">
                    <TextField
                      type="text"
                      value={searchTerm}
                      onChange={handleSearchChange}
                      placeholder="Search..."
                      variant="outlined"
                      fullWidth
                      size="small"
                      style={{ width: '400px' }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <IconButton type="submit" color="primary">
                              <SearchIcon />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </form>
                </div>
                <h1 className="font-semibold">Tampilkan</h1>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Tanggal/bulan"
                  className="bg-white text-[#3653B0] p-2 py-2 rounded-md outline outline-black outline-1 ml-2"
                />
              </div>
              <div className="flex items-center ">
                {['All', 'Paid', 'Canceled'].map((button) => (
                  <button
                    key={button}
                    className={`${
                      activeButton === button
                        ? 'bg-[#3653B0] text-white py-[6px] px-4 rounded-md m-2'
                        : 'bg-gray-200 text-white py-[6px] px-3 rounded-md m-2'
                    }`}
                    onClick={() => handleButtonClick(button)}
                  >
                    {button.charAt(0).toUpperCase() + button.slice(1)}
                  </button>
                ))}
              </div>

              <div className="col-span-1 p-3 bg-white rounded-md shadow-md relative mt-4">
                <ul className="list-none p-0 m-0">
                  <li className="flex justify-between bg-gray- items-center border-b border-gray-200 py-1">
                    <span className="text-3xl font-bold text-sm w-1/6">#ID</span>
                    <span className="text-3xl font-bold text-sm w-1/6">Tanggal</span>
                    <span className="text-3xl font-bold text-sm w-1/6">Nama Pembeli</span>
                    <span className="text-3xl font-bold text-sm w-1/6">Jenis</span>
                    <span className="text-3xl font-bold text-sm w-1/6">Pembayaran</span>
                    <span className="text-3xl font-bold text-sm w-1/6">Status</span>
                    <span className="text-3xl font-bold text-sm w-1/6">Aksi</span>
                  </li>
                  {/* Tambahkan item-item transaksi di sini */}
                  <li className="flex justify-between items-center border-b border-gray-200 py-2">
                    <span className=" w-1/6">1</span>
                    <span className=" w-1/6">2023-11-29</span>
                    <span className=" w-1/6">John Doe</span>
                    <span className=" w-1/6">tiket</span>
                    <span className=" w-1/6">Rp.100.00</span>
                    <span className=" w-1/6">Lunas</span>
                    <span className=" w-1/6">
                      <DeleteOutlineIcon />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Marchandise;
