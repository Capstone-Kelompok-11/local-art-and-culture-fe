import React from 'react';
import Sidebar from '../../component/adminEvent/Sidebar'
import TextsmsIcon from '@mui/icons-material/Textsms';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import user from '../../assets/img/user.svg'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import InfoIcon from '@mui/icons-material/Info';

function MyEvent() {
  
  
  return (
    <section>
        <Sidebar/>

        <main className="sm:ml-64 bg-[#F2F2F2] h-screen">

            {/* header start */}
            <div className="bg-white flex items-center justify-between py-7 rounded-sm">
              <div className='pl-5'>
                <h1 className='text-3xl font-bold'>My Event</h1>
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
            </main>
    </section>
  )
}

export default MyEvent