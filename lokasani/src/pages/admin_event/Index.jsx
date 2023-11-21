/* eslint-disable no-unused-vars */
import React from 'react'
import Sidebar from '../../components/Sidebar'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import TextsmsIcon from '@mui/icons-material/Textsms';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import user from '../../assets/img/user.svg'

function Index() {
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

            <div className="bg-gray-100 flex items-center justify-between rounded-sm  ">
            <div className='pl-5'>
            <img
               className="w-full h-auto rounded-md p-1"
               src="Today.png" 
               alt="Deskripsi gambar"
              />
            </div>
              <div className="flex items-center">
                <div className="flex justify-end mr-2">
                  <select className="bg-blue-500 text-white border p-1 py-[7px] rounded-md" >
                    <option>Filter by</option>
                    <option>Filter 2</option>
                  </select>
                </div>
                <button className="bg-blue-500 text-white py-1 px-4 rounded-md m-2">Export</button>
              </div>
            </div>

               <div className="grid grid-cols-5 gap-5 p-2">
                <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white py-2 rounded-md">
                  <img
                    className="w-full h-auto rounded-md"
                    src="income.png" 
                    alt="Deskripsi gambar"
                  />
               </div>

                <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-2 rounded-md">
                <img
                    className="w-full h-auto rounded-md "
                    src="profit.png" 
                    alt="Deskripsi gambar"
                  />
                </div>

                <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-4 rounded-md">
                 <div className="grid grid-cols-1 gap-5 "> 
               <div className="bg-gray-200 p-2 rounded-md">
               <img
                    className="w-full h-auto rounded-md "
                    src="ticket_sold.png" 
                    alt="Deskripsi gambar"
                  />
               </div>
                <div className="bg-gray-200 p-2 rounded-md">
                <img
                    className="w-full h-auto rounded-md "
                    src="merch_sold.png" 
                    alt="Deskripsi gambar"
                  />
                 </div>
                </div>
              </div>

                <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-4 rounded-md">
                <img
                    className="w-full h-auto rounded-md "
                    src="pengunjung.png" 
                    alt="Deskripsi gambar"
                  />
                </div>

                <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-4 rounded-md">
                <img
                    className="w-full h-auto rounded-md "
                    src="invoice.png" 
                    alt="Deskripsi gambar"
                  />
                </div>
              
              </div>
               
                    <div className="grid grid-cols-2 gap-2 p-2 ">
                      <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white rounded-md p-2">
                    <img
                        className="w-full h-auto rounded-md "
                        src="Revenue list.png" 
                        alt="Deskripsi gambar"
                        />
                    </div>

                   <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white rounded-md p-2">
                    <img
                        className="w-[100]  h-auto rounded-md p-1 "
                        src="FAQ.png" 
                        alt="Deskripsi gambar"
                      />
                    </div>
                    </div>

                  <div className="grid grid-cols-1 gap-1 p-2 ">
                    <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-1 rounded-md">
                    <img
                        className="w-full h-auto rounded-md"
                        src="active event.png" 
                        alt="Deskripsi gambar"
                      />
               </div>
             </div>
            
        </main>
    </section>
  )
}

export default Index