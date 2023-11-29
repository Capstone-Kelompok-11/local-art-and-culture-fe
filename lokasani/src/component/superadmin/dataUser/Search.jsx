import React from 'react'
import iconSearch from '../../../assets/icon/search.svg'

const Search = ({showSearch, showButtonVerif}) => {
  return (
    <div className='flex items-center justify-between'>
      {showSearch &&(
        <div className="flex items-center pl-3  bg-white  rounded-lg">
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
              <div className="">
              <img src={iconSearch} alt="" width={20} />
              </div>
              <input
                type="text"
                id="table-search"
                className="block p-2 pl-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-white "
                placeholder="Search for items"
              />
          </div>)}
          {showButtonVerif &&(<div>
            <button className='bg-[#3653B0] w-[150px] h-[30px] rounded-full text-white'>
              Verifikasi
            </button>
          </div>)}
        <div>
        <select name="" id="" className='p-2 bg-white rounded-lg  '>
            <option value="">Urut Berdasarkan</option>
            <option value="">Blalala</option>
            <option value="">Blalala</option>
        </select>
        </div>

    </div>
  )
}

export default Search