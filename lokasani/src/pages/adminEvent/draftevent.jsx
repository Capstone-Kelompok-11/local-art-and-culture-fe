import React, { useState } from 'react';
import Sidebar from '../../component/adminEvent/Sidebar'
import TextsmsIcon from '@mui/icons-material/Textsms';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import user from '../../assets/img/user.svg'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import InfoIcon from '@mui/icons-material/Info';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function DraftEvent() {
  // kalender
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleExportButtonClick = () => {
    // Lakukan ekspor dengan selectedDate jika diperlukan
    console.log('Mengekspor:', selectedDate);
  };

  // fungsi utk button aktif nya
  const [activeButton, setActiveButton] = useState('all');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  
  return (
    <section>
        <Sidebar/>

        <main className="sm:ml-64 bg-[#F2F2F2] h-screen">

            {/* header start */}
            <div className="bg-white flex items-center justify-between py-7 rounded-sm">
              <div className='pl-5'>
                <h1 className='text-3xl font-bold'>Event Tersimpan</h1>
              </div>
              <div>
                <div className="flex items-center">
                  <div className='flex mr-16 gap-x-6'>
                      <a className='cursor-pointer'>
                        <TextsmsIcon className='text-[#253E8D]'/>
                      </a>
                      <a className='cursor-pointer'>
                        <NotificationsActiveIcon className='text-[#253E8D]'/>
                      </a>
                      <a href="">
                        <img className="w-6 h-6 rounded-full" src={user} alt="Rounded avatar"/>
                      </a>
                  </div>
                </div>
              </div>
            </div>
            {/* header end */}
            {/* content start */}
                 <div className='bg-white flex items-center justify-between rounded-sm'>
                    <div className="flex items-center ">
                  <button
                    className={`bg-${activeButton === 'all' ? 'blue-500' : 'gray-200'} text-white py-[6px] px-3 rounded-md m-2`}
                    onClick={() => handleButtonClick('all')}
                  >
                    All
                  </button>
                  <button
                    className={`bg-${activeButton === 'paid' ? 'blue-500' : 'gray-200'} text-white  py-[6px] px-3 rounded-md m-2`}
                    onClick={() => handleButtonClick('paid')}
                  >
                    Approved
                  </button>
                  <button
                    className={`bg-${activeButton === 'pending' ? 'blue-500' : 'gray-200'} text-white py-[6px] px-3 rounded-md m-2`}
                    onClick={() => handleButtonClick('pending')}
                  >
                    Pending
                  </button>
                  <button
                    className={`bg-${activeButton === 'canceled' ? 'blue-500' : 'gray-200'} text-white py-[6px] px-3 rounded-md m-2`}
                    onClick={() => handleButtonClick('canceled')}
                  >
                    Canceled
                  </button>
                </div>

                <div className="flex items-center">
                  <div className="flex justify-end items-center mr-2 ">
                    <h1 className="font-semibold">Tampilkan</h1>
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Tanggal/bulan"
                      className="bg-white text-[#3653B0] p-2 py-2 rounded-md outline outline-black outline-1 ml-2"
                    />
                  </div>
                </div>
                </div>

                <div className='grid grid-cols-1 gap-1 p-4'>
                <div className="col-span-1 bg-white p-3 rounded-md shadow-md relative">
                <ul className="list-none p-0 m-0">
                    <li className="flex justify-between items-center border-b border-gray-200 py-1">
                    <span className='text-3xl font-bold text-sm text-[#243775] w-1/6'>#ID</span>
                    <span className='text-3xl font-bold text-sm text-[#243775] w-1/6'>Tanggal Diajukan</span>
                    <span className='text-3xl font-bold text-sm text-[#243775] w-1/6'>Nama Event</span>
                    <span className='text-3xl font-bold text-sm text-[#243775] w-1/6'>Status</span>
                    <span className='text-3xl font-bold text-sm text-[#243775] w-1/6'>Aksi</span>
                    </li>
                    {/* Tambahkan item-item transaksi di sini */}
                    <li className="flex justify-between items-center border-b border-gray-200 py-2">
                    <span className='text-[#3653B0] w-1/6'>001</span>
                    <span className='text-[#3653B0] w-1/6'>2023-11-29</span>
                    <span className='text-[#3653B0] w-1/6'>Jelajahi Nusantara: Festival Budaya Indonesia</span>
                    <span className='text-[#7EB4A7] w-1/6'>Paid</span>
                    <span className='text-[#3653B0] w-1/6'>
                    <span className='text-[#3653B0] w-1/6 cursor-pointer'>
                    <InfoIcon />
                    </span>
                    <DeleteOutlineIcon/>
                    </span>
                    </li>

                    <li className="flex justify-between items-center border-b border-gray-200 py-2">
                    <span className='text-[#3653B0] w-1/6'>001</span>
                    <span className='text-[#3653B0] w-1/6'>2023-11-29</span>
                    <span className='text-[#3653B0] w-1/6'>Jelajahi Nusantara: Festival Budaya Indonesia</span>
                    <span className='text-[#7EB4A7] w-1/6'>Paid</span>
                    <span className='text-[#3653B0] w-1/6'>
                    <span className='text-[#3653B0] w-1/6 cursor-pointer'>
                    <InfoIcon />
                    </span>
                    <DeleteOutlineIcon/>
                    </span>
                    </li>

                    <li className="flex justify-between items-center border-b border-gray-200 py-2">
                    <span className='text-[#3653B0] w-1/6'>001</span>
                    <span className='text-[#3653B0] w-1/6'>2023-11-29</span>
                    <span className='text-[#3653B0] w-1/6'>Jelajahi Nusantara: Festival Budaya Indonesia</span>
                    <span className='text-[#7EB4A7] w-1/6'>Paid</span>
                    <span className='text-[#3653B0] w-1/6'>
                    <span className='text-[#3653B0] w-1/6 cursor-pointer'>
                    <InfoIcon />
                    </span>
                    <DeleteOutlineIcon/>
                    </span>
                    </li>

                    <li className="flex justify-between items-center border-b border-gray-200 py-2">
                    <span className='text-[#3653B0] w-1/6'>001</span>
                    <span className='text-[#3653B0] w-1/6'>2023-11-29</span>
                    <span className='text-[#3653B0] w-1/6'>Jelajahi Nusantara: Festival Budaya Indonesia</span>
                    <span className='text-[#7EB4A7] w-1/6'>Paid</span>
                    <span className='text-[#3653B0] w-1/6'>
                    <span className='text-[#3653B0] w-1/6 cursor-pointer'>
                    <InfoIcon />
                    </span>
                    <DeleteOutlineIcon/>
                    </span>
                    </li>

                      <li className="flex justify-between items-center border-b border-gray-200 py-2">
                    <span className='text-[#3653B0] w-1/6'>001</span>
                    <span className='text-[#3653B0] w-1/6'>2023-11-29</span>
                    <span className='text-[#3653B0] w-1/6'>Jelajahi Nusantara: Festival Budaya Indonesia</span>
                    <span className='text-[#7EB4A7] w-1/6 '>Paid</span>
                    <span className='text-[#3653B0] w-1/6'>
                    <span className='text-[#3653B0] w-1/6 cursor-pointer'>
                    <InfoIcon />
                    </span>
                    <DeleteOutlineIcon/>
                    </span>
                    </li>
                </ul>
              </div>
             </div>
         </main>
    </section>
  )
}

export default DraftEvent