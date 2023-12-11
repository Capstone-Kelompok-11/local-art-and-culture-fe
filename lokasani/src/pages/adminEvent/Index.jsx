/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import Sidebar from '../../component/adminEvent/Sidebar'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import TextsmsIcon from '@mui/icons-material/Textsms';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import user from '../../assets/img/user.svg'

function Index() {
  const chartContainer = useRef(null);

  useEffect(() => {
    let myChart;

    const generateRandomData = () => {
      return Math.floor(Math.random() * (85 - 15 + 1) + 15);
    };

    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];

    const dataValues = Array.from({ length: 12 }, () => generateRandomData());
    
    // Modifikasi dataValues untuk memastikan nilai berada dalam rentang 15-85
    const adjustedDataValues = dataValues.map(value => Math.floor(Math.min(Math.max(value, 15), 85)));

    const ctx = chartContainer.current.getContext('2d');

    myChart = new Chart(ctx, {
      type: 'line', // Mengubah tipe grafik menjadi 'line'
      data: {
        labels: months,
        datasets: [
          {
            label: 'Revenue',
            data: adjustedDataValues,
            borderColor: '#3653B0', // Warna garis
            borderWidth: 2, // Lebar garis
            fill: false, // Tidak mengisi area di bawah garis
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, []);
  
  return (
    <section>
        <Sidebar/>

        <main className="sm:ml-64 bg-[#F2F2F2] h-screen">

            {/* header start */}
            <div className="bg-white flex items-center justify-between py-7 rounded-sm">
              <div className='pl-5'>
                <h1 className='text-3xl font-bold'>Home</h1>
              </div>
              <div>
                <div className="flex items-center">
                  <div className="flex items-center relative mr-5">
                    <SearchIcon className='ml-3 cursor-pointer absolute'/>
                    <CloseIcon className='ml-[315px] cursor-pointer absolute'/>
                    <input type="text" name="name" placeholder="Cari apa"
                        className="w-[350px] py-1 pl-12 bg-[#F2F2F2] rounded-full">
                    </input>
                  </div>
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
            <div className='bg-gray-100'>
              <div className="bg-gray-100 flex items-center justify-between rounded-sm  ">
              <div className='pl-1 flex items-center'>
                <button className="bg-white text-black py-1 px-4 rounded-md m-2 flex items-center gap-x-1">
                <CalendarTodayIcon fontSize='small'/>
                  Today
                </button>
                <h1 className='text-slate-500 font-semibold'>Hari ini</h1>
              </div>

              <div className="flex items-center">
                <div className="flex justify-end items-center mr-2 border-2 border-black">
                  <h1 className='font-semibold'>Tampilkan</h1>
                  <select className="bg-white text-[#999999] p-1 px-2 py-2 rounded-md outline outline-black outline-1 ml-2">
                    <option>Data Terbaru</option>
                    <option>Filter 2</option>
                  </select>
                </div>
                <button className="bg-[#243775] text-white py-[6px] px-4 rounded-md m-2 flex items-center">
                  <FileDownloadIcon fontSize='small' className='mr-1'/>
                  Export
                </button>
              </div>
              </div>

              {/* grid */}
              <div className="grid grid-cols-5 gap-3 p-2">
                <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-1 rounded-md relative">
                  <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-4 rounded-md relative">
                    <button className="bg-[#C1533E] text-white py-1 px-1 rounded-full absolute top-2 left-2 m-2 flex items-center">
                      <ArrowForwardIosIcon/>
                    </button>
                  <div className="flex flex-col justify-between">
                    <div className="absolute left-2 top-1/2 bg-[#C1533E] mt-4 w-1 h-12 transform -translate-y-1/2"></div>
                    <div className='mt-14'>
                      <span className="text-[#999999] text-sm mt-10">Total Pemasukan (Rp)</span><br />
                      <span className="text-lg font-bold text-sm font-plus-jakarta-sans">35.440.000</span><br />
                      <div className="text-sm flex items-center">
                        <ArrowUpwardIcon className='text-green-500'/>
                      <span className="text-[#5CB85C]">+2%</span>
                      <span className='text-[#999999] ml-1'>dari bulan lalu</span>
                    </div> 
                    </div>
                  </div>
                  </div>
                </div>

                <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-1 rounded-md relative">        
                  <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-4 rounded-md relative">
                    <button className="bg-[#EE8A77] text-white py-1 px-1 rounded-full absolute top-2 left-2 m-2 flex items-center">
                      <ArrowForwardIosIcon/>
                    </button>
                    <div className="flex flex-col  justify-between">
                    <div className="absolute left-2 top-1/2 bg-[#EE8A77] mt-4 w-1 h-12 transform -translate-y-1/2"></div>
                    <div className='mt-14'>
                      <span className="text-[#999999] text-sm mt-10">Profit (%)</span><br />
                      <span className="text-lg font-bold text-sm font-plus-jakarta-sans">35.440.000</span>
                      <div className="text-sm flex items-center">
                        <ArrowUpwardIcon className='text-[#FFCC00]'/>
                        <span className="text-[#FFCC00]">+2%</span>
                        <span className='text-[#999999] ml-1'>dari bulan lalu</span>
                      </div> 
                      </div>
                  </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-1">
                  <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-4 rounded-md relative">
                    <div className="flex flex-col justify-between">
                      <div className="absolute left-2 top-1/2 bg-[#243775] w-1 h-12 transform -translate-y-1/2"></div>
                      <span className="text-[#999999] text-sm">Tiket Terjual (pcs)</span>
                      <span className="text-lg font-bold text-sm font-plus-jakarta-sans">5.264</span>
                      <div className="text-sm flex items-center">
                        <ArrowUpwardIcon fontSize='small' className='text-[#5CB85C]'/>
                        <span className="text-[#5CB85C]">+2%</span>
                        <span className='text-[#999999] ml-1'>dari bulan lalu</span>
                      </div>
                    </div>
                  </div>
                
                  <div className="col-span-4 sm:col-span-4 md:col-span-1 bg-white p-4 rounded-md relative">
                    <div className="flex flex-col justify-between">
                      <div className="absolute left-2 top-1/2 bg-[#8D93A5] w-1 h-12 transform -translate-y-1/2"></div>
                      <span className="text-[#999999] text-sm">Merch Terjual (pcs)</span>
                      <span className="text-lg font-bold text-sm font-plus-jakarta-sans">352</span>
                      <div className="text-sm flex items-center">
                        <ArrowUpwardIcon fontSize='small' className='text-[#FF3B3B]'/>
                        <span className="text-[#FF3B3B]">+2%</span>
                        <span className='text-[#999999] ml-1'>dari bulan lalu</span>
                      </div>
                    </div>
                  </div>
                </div>
                 
                <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-1 rounded-md relative">
                  <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-4 rounded-md relative">
                    <button className="bg-[#026C52] text-white py-1 px-1 rounded-full absolute top-2 left-2 m-2 flex items-center">
                      <ArrowForwardIosIcon/>
                    </button>
                    <div className="flex flex-col  justify-between mt-8">
                      <div className="absolute left-2 top-1/2 bg-[#026C52] mt-5 w-1 h-12 transform -translate-y-1/2"></div>
                      <div className='mt-8'>
                        <span className="text-[#999999] text-sm">Pengunjung</span><br />
                        <span className="text-lg font-bold text-sm font-plus-jakarta-sans">15.600</span>
                        <div className="text-sm flex items-center">
                          <ArrowUpwardIcon className='text-green-500'/>
                            <span className="text-[#5CB85C]">+2%</span>
                            <span className='text-[#999999] ml-1'>dari bulan lalu</span>
                        </div> 
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-1 rounded-md relative">
                  <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-4 rounded-md relative">
                    <button className="bg-[#768DD5] text-white py-1 px-1 rounded-full absolute top-2 left-2 m-2 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                      </svg>
                    </button>
                    <div className="flex flex-col  justify-between mt-8">
                    <div className="absolute left-2 top-1/2 bg-[#768DD5] mt-5 w-1 h-12 transform -translate-y-1/2"></div>
                    <div className='mt-8'>
                    <span className="text-[#999999] text-sm ">Struk pembayaran</span><br />
                    <span className="text-lg font-bold text-sm font-plus-jakarta-sans">8.500</span>
                      <div className="text-sm flex items-center">
                        <ArrowUpwardIcon className='text-green-500'/>
                        <span className="text-[#5CB85C]">+2%</span>
                        <span className='text-[#999999] ml-1'>dari bulan lalu</span>
                      </div> 
                    </div>
                    </div>
                  </div>
                 </div>
              </div>
               
              <div className="flex flex-row gap-5 p-2">
                <div className="w-4/6 bg-white rounded-md p-2">
                  <div>
                    <h1 className='text-3xl font-bold'>Revenue</h1>
                    <div className="flex flex-col items-end text-sm">
                      <select className="bg-[#F2F2F2] text-[#333333] p-1 rounded-md border-black mb-2">
                        <option>Perbulan</option>
                        <option>January</option>
                        <option>February</option>
                        <option>Maret</option>
                        <option>April</option>
                        <option>Mei</option>
                        <option>Juni</option>
                        <option>Juli</option>
                        <option>Agustus</option>
                        <option>September</option>
                        <option>Oktober</option>
                        <option>November</option>
                        <option>Desember</option>
                      </select>
                    <canvas ref={chartContainer} id="revenueChart" width="100" height="50"></canvas>
                    </div>
                  </div>
                </div>
                <div className="bg-white w-2/6 p-5 flex flex-col space-y-2 items-center items-center rounded-md ">  
                    <h1 className='text-3xl font-bold text-start'>Help Center</h1>
                      <span className='text-[#999999] ml-1 text-sm'>Cari tahu jawaban di sini!</span>
                    <div className="bg-white p-1  flex flex-col space-y-2 pt-20 items-center justify-center rounded-md p-2 items-center">
                      <style>
                          {`
                              .custom-button {
                                  background-color: #3653B0;
                                  color: white;
                                  padding: 10px;
                                  margin: 10px;
                                  border-radius: 25px; 
                                  width: 150px;
                                  heght: 70px
                              }
                          `}
                      </style>
                      <div className="flex flex-row space-x-1 ">
                          <button className="custom-button">
                              FAQ
                          </button>
                          <button className="custom-button">
                              Baca Artikel
                          </button>
                      </div>
                      <div className="flex flex-row space-x-1">
                          <button className="custom-button">
                              Chat Minibot
                          </button>
                          <button className="custom-button">
                              Hubungi Lokasani
                          </button>
                      </div>
                    </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-1 p-2">
                <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-4 rounded-md shadow-md">
                    <div className="rounded-md bg-white p-2">
                      <h1 className='text-3xl font-bold'>Event Aktif</h1>
                    </div>
                    <span className='text-[#999999] ml-1 text-sm'>Pantau acara Anda yang sedang berlangsung di sini!</span>
                    <div className="rounded-md p-2 mt-4 flex flex-col p-4 bg-light-yellow rounded-lg shadow-md hover:bg-tan ring-[#768DD5] ring-1">
                    <h1 className='text-3xl font-bold text-sm pr-4 mb-2'>Workshop Keramik Jawa Timur </h1>
                    <h1 className='text-3xl font-bold text-sm pr-4 mb-2'>bersama Kak Seto </h1>
                    <span className='text-[#999999] text-sm mb-2'>18 Nov 2023 | Grand Plaza, Jakarta</span>

                    <div className="flex items-center">
                      <div className="rounded-full bg-green-500 w-4 h-4"></div>
                      <span className="text-3xl font-bold text-sm ml-2">Status Event Aktif</span>
                    </div>

                    <div className="flex flex-row items-center">
                      <div className="flex flex-col items-center justify-between bg-white rounded-md shadow-md relative text-center flex-1 ml-auto">
                        <div className="absolute left-0 top-1/2 bg-[#026C52] w-1 h-12 transform -translate-y-1/2 ml-1"></div>
                        <span className="text-[#999999] text-sm">Pengunjung</span>
                        <span className="text-[#999999] text-sm">On-Site (org)</span>
                        <span className="text-lg font-bold text-sm font-plus-jakarta-sans">87/350</span>
                      </div>

                      <div className="flex flex-col py-3 items-center justify-between bg-white rounded-md shadow-md relative text-center flex-1 ml-2">
                        <div className="absolute left-0 top-1/2 bg-[#243775] w-1 h-12 transform -translate-y-1/2 ml-1"></div>
                        <span className="text-[#999999] text-sm ">Tiket Terjual (pcs)</span>
                        <span className="text-lg font-bold text-sm font-plus-jakarta-sans">87/350</span>
                      </div>

                      <div className="flex flex-col py-3 items-center justify-between bg-white rounded-md shadow-md relative text-center flex-1 ml-2">
                        <div className="absolute left-0 top-1/2 bg-[#8D93A5] w-1 h-12 transform -translate-y-1/2 ml-1"></div>
                        <span className="text-[#999999] text-sm ">Merch Terjual (pcs)</span>
                        <span className="text-lg font-bold text-sm font-plus-jakarta-sans">87/350</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          {/* content end */}
        </main>
    </section>
  )
}

export default Index