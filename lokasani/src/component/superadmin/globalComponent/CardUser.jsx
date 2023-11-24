import React from "react";

const CardUser = ({ name, quantity, showCardButton }) => {
  return (
    <div className="flex flex-col max-w-sm p-6 bg-white border border-gray-200 rounded-lg  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 gap-9">
      <div>
      <p className="font-normal text-gray-700 dark:text-gray-400">{name}</p>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {quantity}
      </h5></div>
      <div className="flex justify-end">
      {showCardButton && (<button className="bg-[#3653B0] text-white pb-0 w-1/3 h-10 rounded-full">Kelola</button>)}</div>
    </div>
  );
};

export default CardUser;
