/* eslint-disable no-unused-vars */
import React from 'react'
import Sidebar from '../../../component/superadmin/globalComponent/Sidebar';
import Navbar from '../../../component/superadmin/artikel/Navbar';
import AddPhoto from '../../../assets/icon/library_add.svg'
import AddIcon from '@mui/icons-material/Add';

function Add() {
  return (
    <section>
        <Sidebar />
        <Navbar title="Tulis Artikel" />
        <main className='pt-[100px] h-full sm:ml-[249px] bg-[#D9D9D9]'>
            <div className='mx-5 bg-white rounded-md mt-2 px-6 pt-10 pb-3'>
                <h1 className='font-semibold text-2xl'>Unggah Tumbnail</h1>
                <div className='mt-3 flex gap-x-3 mb-4'>
                    <div className='h-[160px] w-[320px] rounded-md flex justify-center items-center bg-[#D9D9D9]'>
                        <img src={AddPhoto} alt="" className='w-[80px] h-[80px] bg-[#D9D9D9]'/>
                    </div>
                    <div>
                        <span>Ukuran file maks 10MB</span><br />
                        <button className='bg-[#768DD5] hover:bg-[#91A3DD] rounded-[20px] text-white py-2 px-5 text-xs mt-1'><AddIcon fontSize='small'/> &nbsp; Unggah gambar</button>
                    </div>
                </div>
                <div>
                    <hr className='h-[1px] bg-[#CCCCCC]'/>
                </div>
            </div>
        </main>
    </section>
  )
}

export default Add