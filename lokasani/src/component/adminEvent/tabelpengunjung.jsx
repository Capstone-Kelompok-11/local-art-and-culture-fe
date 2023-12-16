import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function PengunjungTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [activeButton, setActiveButton] = useState('All');
 
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Logika untuk submit pencarian
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
    const filteredTransactions =
      button === 'All'
        ? transactions
        : transactions.filter((transaction) => transaction.paymentStatus === button);
    setTransactions(filteredTransactions);
  };

  return (
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
            <span className="text-3xl font-bold text-sm w-1/6">Tanggal Beli Tiket</span>
            <span className="text-3xl font-bold text-sm w-1/6">Nama Pengunjung</span>
            <span className="text-3xl font-bold text-sm w-1/6">No Hp</span>
            <span className="text-3xl font-bold text-sm w-1/6">Nik</span>
            <span className="text-3xl font-bold text-sm w-1/6">Status</span>
            <span className="text-3xl font-bold text-sm w-1/6">Aksi</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PengunjungTable;
