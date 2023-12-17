import React, { useState, useEffect } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function TiketTerjualTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [activeButton, setActiveButton] = useState('All');
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isPageChanging, setIsPageChanging] = useState(false);
  const itemsPerPage = 10;

  const fetchData = async () => {
    try {
      const response = await fetch('https://657e8ef63e3f5b189463d39c.mockapi.io/terjual');
      const data = await response.json();

      const sortedData = data.sort((a, b) => parseInt(a.id) - parseInt(b.id));

      setTransactions(sortedData);
      setFilteredTransactions(sortedData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
      setIsPageChanging(false); // Set isPageChanging to false after updating data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, isPageChanging]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
    setCurrentPage(1);
    setIsPageChanging(true); // Set isPageChanging to true when changing pages

    const filteredData =
      button === 'All'
        ? transactions
        : transactions.filter((transaction) => transaction.status.toLowerCase() === button.toLowerCase());

    setFilteredTransactions(filteredData.slice(0, itemsPerPage));
  };

  const handleDelete = async (idToDelete) => {
    try {
      const endpoint = `https://657e8ef63e3f5b189463d39c.mockapi.io/terjual/${idToDelete}`;
      const response = await fetch(endpoint, {
        method: 'DELETE',
      });

      if (response.ok) {
        setIsPageChanging(true); // Set isPageChanging to true when deleting data
      } else {
        console.error('Gagal menghapus data');
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    }
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
        <ul className="list-none p-0 m-0 ml-4">
            <li className="flex justify-between bg-gray- items-center border-b border-gray-200 py-2 px-4">
            <span className="text-3xl font-bold text-sm w-1/6">#ID</span>
            <span className="text-3xl font-bold text-sm w-1/6">Nama Pengunjung</span>
            <span className="text-3xl font-bold text-sm w-1/6">Tanggal Beli Tiket</span>
            <span className="text-3xl font-bold text-sm w-1/6">Detail Tiket</span>
            <span className="text-3xl font-bold text-sm w-1/6">Status Pembayaran</span>
            <span className="text-3xl font-bold text-sm w-1/6">Aksi</span>
          </li>
          {filteredTransactions.map((transaction, index) => (
            <li
                key={transaction.id}
                className={`flex justify-between items-center border-b border-gray-200 py-2 px-4 ${
                index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                } hover:bg-gray-200`}
            >
                <span className="text-sm w-1/6">{transaction.id}</span>
                <span className="text-sm w-1/6">{transaction.nama_pengunjung}</span>
                <span className="text-sm w-1/6">{transaction.tanggal_beli_tiket}</span>
                <span className="text-sm w-1/6">
                <div
                  className={`${
                    transaction.detail_tiket === 'Vvip' ? 'text-green-500' : 'text-blue-500'
                  } `}>
                  {transaction.detail_tiket}
                </div>
              </span>
                <span className="text-sm w-1/6">
                <div
                  className={`${
                    transaction.status === 'paid' ? 'bg-green-500' : 'bg-red-500'
                  } text-white py-1 px-2 rounded-md text-center`}
                  style={{ fontSize: '12px' }}
                >
                  {transaction.status}
                </div>
              </span>
              <span className="text-sm w-1/6">
                <IconButton color="primary" onClick={() => handleDelete(transaction.id)}>
                  <DeleteOutlineIcon />
                </IconButton>
              </span>
            </li>
            ))}
        </ul>
       {/* Tombol pagination */}
       <div className="flex justify-center mt-4">
          <button
            className={`${
              currentPage === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'
            } text-white py-[6px] px-3 rounded-md m-2`}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-lg font-semibold mx-4">
            Page {currentPage} of {Math.ceil(transactions.length / itemsPerPage)}
          </span>
          <button
            className={`${
              currentPage === Math.ceil(transactions.length / itemsPerPage)
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-gray-200 hover:bg-blue-500'
            } text-white py-[6px] px-3 rounded-md m-2`}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(transactions.length / itemsPerPage)))}
            disabled={currentPage === Math.ceil(transactions.length / itemsPerPage)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default TiketTerjualTable;