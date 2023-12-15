import React, { useState, useEffect } from 'react';
import Sidebar from '../../component/adminEvent/Sidebar';
import TextsmsIcon from '@mui/icons-material/Textsms';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import user from '../../assets/img/user.svg';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DraftEvent() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [activeButton, setActiveButton] = useState('All');
  const [events, setEvents] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  useEffect(() => {
    // Fetch data from the mock API
    fetch('https://657c05c8394ca9e4af153c42.mockapi.io/draftevent')
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Empty dependency array to run the effect only once

  const filteredEvents = events.filter((event) => {
    if (activeButton === 'All') {
      return true; // Tampilkan semua data jika tombol All diklik
    } else {
      return event.status.toLowerCase() === activeButton.toLowerCase();
    }
  });

  const handleDelete = (id) => {
    // Kirim permintaan delete ke API
    fetch(`https://657c05c8394ca9e4af153c42.mockapi.io/draftevent/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Filter events untuk menghilangkan event dengan ID yang dihapus
        const updatedEvents = events.filter((event) => event.id !== id);
        setEvents(updatedEvents);
      })
      .catch((error) => console.error('Error deleting data:', error));
  };

  return (
    <section>
      <Sidebar />

      <main className="sm:ml-64 bg-[#F2F2F2] h-screen">
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

        <div className='bg-white flex items-center justify-between rounded-sm p-2'>
          <div className="flex items-center ">
            {['All', 'Approved', 'Pending', 'Canceled'].map((button) => (
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
                {button}
              </button>
            ))}
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

              {filteredEvents.map((event) => (
                <li key={event.id} className="flex justify-between items-center border-b border-gray-200 py-2">
                  <span className='text-[#3653B0] w-1/6'>{event.id}</span>
                  <span className='text-[#3653B0] w-1/6'>{event.tanggal_diajukan}</span>
                  <span className='text-[#3653B0] w-1/6'>{event.name}</span>
                  <span
                  className='text-sm text-center  w-1/6 rounded-md'
                  style={{
                    backgroundColor:
                      event.status.toLowerCase() === 'approved'
                        ? '#00FF00' // Warna hijau untuk Approved
                        : event.status.toLowerCase() === 'pending'
                        ? '#FFA500' // Warna oren untuk Pending
                        : event.status.toLowerCase() === 'canceled'
                        ? '#FFC0CB' // Warna pink untuk Canceled
                        : '#ccc', // Warna default untuk status lainnya
                  }}
                >
                  {event.status}
                </span>
                  <span className='text-[#3653B0] w-1/6'>
                    <span className='text-[#3653B0] w-1/6 cursor-pointer'>
                    <EditIcon/>
                    </span>
                    <span className='text-[#3653B0] w-1/6 cursor-pointer' onClick={() => handleDelete(event.id)}>
                    <DeleteOutlineIcon/>
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </section>
  );
}

export default DraftEvent;
