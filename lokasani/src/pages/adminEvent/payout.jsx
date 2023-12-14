import React, { useState } from 'react';
import Sidebar from '../../component/adminEvent/Sidebar'
import TextsmsIcon from '@mui/icons-material/Textsms';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import user from '../../assets/img/user.svg'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import TransactionDetailsPopup from '../../component/adminEvent/transaksidetail';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function Payout() {
  const [isDetailsPopupOpen, setIsDetailsPopupOpen] = useState(false);

  const handleInfoIconClick = () => {
    setIsDetailsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsDetailsPopupOpen(false);
  };

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
                <h1 className='text-3xl font-bold'>Payout</h1>
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
                 <div className='flex items-center justify-between rounded-sm'>
                 <div className="flex items-center ">
            {['semua', 'belum diajukan', 'tertunda', 'selesai', 'gagal'].map((button) => (
              <button
                key={button}
                style={{
                  backgroundColor: activeButton === button ? '#3653B0' : '#ccc',
                  color: 'white',
                  padding: '6px 12px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease',
                  borderRadius: '4px',
                  margin: '2px',
                }}
                onClick={() => handleButtonClick(button)}
              >
                {button.charAt(0).toUpperCase() + button.slice(1)}
              </button>
            ))}
          </div>

                <div className="flex items-center">
                  <div className="flex justify-end items-center mr-2 border-2 border-black">
                    <h1 className="font-semibold">Tampilkan</h1>
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Tanggal/bulan"
                      className="bg-white text-[#3653B0] p-2 py-2 rounded-md outline outline-black outline-1 ml-2"
                    />
                  </div>
                  <button
                    className="bg-[#243775] text-white py-[6px] px-4 rounded-md m-2 flex items-center"
                    onClick={handleExportButtonClick}
                  >
                    Export
                  </button>
                </div>
                </div>

                <div className='grid grid-cols-1 gap-1 p-4'>
                <div className="col-span-1 bg-white p-3 rounded-md shadow-md relative">
                <ul className="list-none p-0 m-0">
                    <li className="flex justify-between items-center border-b border-gray-200 py-1">
                    <span className='text-3xl font-bold text-sm text-[#243775] w-1/6'>#ID</span>
                    <span className='text-3xl font-bold text-sm text-[#243775] w-1/6'>Tanggal</span>
                    <span className='text-3xl font-bold text-sm text-[#243775] w-1/6'>Nama Event</span>
                    <span className='text-3xl font-bold text-sm text-[#243775] w-1/6'>Total Pendapatan</span>
                    <span className='text-3xl font-bold text-sm text-[#243775] w-1/6'>Status Payout</span>
                    <span className='text-3xl font-bold text-sm text-[#243775] w-1/6'>Aksi</span>
                    </li>
                    {/* Tambahkan item-item payout di sini */}
                    <li className="flex justify-between items-center border-b border-gray-200 py-2">
                    <span className='text-[#3653B0] w-1/6'>1</span>
                    <span className='text-[#3653B0] w-1/6'>2023-11-29</span>
                    <span className='text-[#3653B0] w-1/6'>John Doe</span>
                    <span className='text-[#3653B0] w-1/6'>$100.00</span>
                    <span className='text-[#7EB4A7] w-1/6'>Paid</span>
                    <span className='text-[#3653B0] w-1/6'>
                      {isDetailsPopupOpen && <TransactionDetailsPopup onClose={handleClosePopup} />}
                    <span className='text-[#3653B0] w-1/6 cursor-pointer' onClick={handleInfoIconClick}>
                    <InfoOutlinedIcon style={{ color: 'black' }}/>
                    </span>
                    <DeleteOutlineIcon style={{ color: 'black' }}/>
                    </span>
                    </li>

                    <li className="flex justify-between items-center border-b border-gray-200 py-2">
                    <span className='text-[#3653B0] w-1/6'>2</span>
                    <span className='text-[#3653B0] w-1/6'>2023-11-29</span>
                    <span className='text-[#3653B0] w-1/6'>John Doe</span>
                    <span className='text-[#3653B0] w-1/6'>$100.00</span>
                    <span className='text-[#F3B1A5] w-1/6'>Canceled</span>
                    <span className='text-[#3653B0] w-1/6'>
                    <InfoOutlinedIcon style={{ color: 'black' }}/>
                    <DeleteOutlineIcon style={{ color: 'black' }}/>
                    </span>
                    </li>

                    <li className="flex justify-between items-center border-b border-gray-200 py-2">
                    <span className='text-[#3653B0] w-1/6'>3</span>
                    <span className='text-[#3653B0] w-1/6'>2023-11-29</span>
                    <span className='text-[#3653B0] w-1/6'>John Doe</span>
                    <span className='text-[#3653B0] w-1/6'>$100.00</span>
                    <span className='text-[#F8D46D] w-1/6'>Pending</span>
                    <span className='text-[#3653B0] w-1/6'>
                    <InfoOutlinedIcon style={{ color: 'black' }}/>
                    <DeleteOutlineIcon style={{ color: 'black' }}/>
                    </span>
                    </li>

                    <li className="flex justify-between items-center border-b border-gray-200 py-2">
                    <span className='text-[#3653B0] w-1/6'>4</span>
                    <span className='text-[#3653B0] w-1/6'>2023-11-29</span>
                    <span className='text-[#3653B0] w-1/6'>John Doe</span>
                    <span className='text-[#3653B0] w-1/6'>$100.00</span>
                    <span className='text-[#F8D46D] w-1/6'>Pending</span>
                    <span className='text-[#3653B0] w-1/6'>
                    <InfoOutlinedIcon style={{ color: 'black' }}/>
                    <DeleteOutlineIcon style={{ color: 'black' }}/>
                    </span>
                    </li>

                    <li className="flex justify-between items-center border-b border-gray-200 py-2">
                    <span className='text-[#3653B0] w-1/6'>5</span>
                    <span className='text-[#3653B0] w-1/6'>2023-11-29</span>
                    <span className='text-[#3653B0] w-1/6'>John Doe</span>
                    <span className='text-[#3653B0] w-1/6'>$100.00</span>
                    <span className='text-[#F8D46D] w-1/6'>Pending</span>
                    <span className='text-[#3653B0] w-1/6'>
                    <InfoOutlinedIcon style={{ color: 'black' }}/>
                    <DeleteOutlineIcon style={{ color: 'black' }}/>
                    </span>
                    </li>

                    <li className="flex justify-between items-center border-b border-gray-200 py-2">
                    <span className='text-[#3653B0] w-1/6'>6</span>
                    <span className='text-[#3653B0] w-1/6'>2023-11-29</span>
                    <span className='text-[#3653B0] w-1/6'>John Doe</span>
                    <span className='text-[#3653B0] w-1/6'>$100.00</span>
                    <span className='text-[#3653B0] w-1/6'>Paid</span>
                    <span className='text-[#3653B0] w-1/6'>
                    <InfoOutlinedIcon style={{ color: 'black' }}/>
                    <DeleteOutlineIcon style={{ color: 'black' }}/>
                    </span>
                    </li>

                    <li className="flex justify-between items-center border-b border-gray-200 py-2">
                    <span className='text-[#3653B0] w-1/6'>7</span>
                    <span className='text-[#3653B0] w-1/6'>2023-11-29</span>
                    <span className='text-[#3653B0] w-1/6'>John Doe</span>
                    <span className='text-[#3653B0] w-1/6'>$100.00</span>
                    <span className='text-[#3653B0] w-1/6'>Paid</span>
                    <span className='text-[#3653B0] w-1/6'>
                    <InfoOutlinedIcon style={{ color: 'black' }}/>
                    <DeleteOutlineIcon style={{ color: 'black' }}/>
                    </span>
                    </li>

                    <li className="flex justify-between items-center border-b border-gray-200 py-2">
                    <span className='text-[#3653B0] w-1/6'>8</span>
                    <span className='text-[#3653B0] w-1/6'>2023-11-29</span>
                    <span className='text-[#3653B0] w-1/6'>John Doe</span>
                    <span className='text-[#3653B0] w-1/6'>$100.00</span>
                    <span className='text-[#F3B1A5] w-1/6'>Canceled</span>
                    <span className='text-[#3653B0] w-1/6'>
                    <InfoOutlinedIcon style={{ color: 'black' }}/>
                    <DeleteOutlineIcon style={{ color: 'black' }}/>
                    </span>
                    </li>

                    <li className="flex justify-between items-center border-b border-gray-200 py-2">
                    <span className='text-[#3653B0] w-1/6'>9</span>
                    <span className='text-[#3653B0] w-1/6'>2023-11-29</span>
                    <span className='text-[#3653B0] w-1/6'>John Doe</span>
                    <span className='text-[#3653B0] w-1/6'>$100.00</span>
                    <span className='text-[#3653B0] w-1/6'>Paid</span>
                    <span className='text-[#3653B0] w-1/6'>
                    <InfoOutlinedIcon style={{ color: 'black' }}/>
                    <DeleteOutlineIcon style={{ color: 'black' }}/>
                    </span>
                    </li>

                    <li className="flex justify-between items-center border-b border-gray-200 py-2">
                    <span className='text-[#3653B0] w-1/6'>10</span>
                    <span className='text-[#3653B0] w-1/6'>2023-11-29</span>
                    <span className='text-[#3653B0] w-1/6'>John Doe</span>
                    <span className='text-[#3653B0] w-1/6'>$100.00</span>
                    <span className='text-[#F8D46D] w-1/6'>Pending</span>
                    <span className='text-[#3653B0] w-1/6'>
                    <InfoOutlinedIcon style={{ color: 'black' }}/>
                    <DeleteOutlineIcon style={{ color: 'black' }}/>
                    </span>
                    </li>
                </ul>
              </div>
             </div>
         </main>
    </section>
  )
}

export default Payout