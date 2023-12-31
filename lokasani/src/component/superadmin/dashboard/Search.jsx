import React from 'react'

const Search = () => {
  return (
    <div className='flex items-center justify-between'>
        <div className=" bg-white dark:bg-gray-900 rounded-lg">
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            
              {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <img src={iconSearch} alt="" width={20} />
              </div> */}
              <input
                type="text"
                id="table-search"
                className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for items"
              />
          </div>
        <div className=' bg-white rounded-lg  dark:bg-gray-700 '>
        <select name="" id="">
            <option value="">Urut Berdasarkan</option>
            <option value="">Blalala</option>
            <option value="">Blalala</option>
        </select>
        </div>

    </div>
  )
}

export default Search