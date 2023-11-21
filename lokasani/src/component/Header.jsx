import React from "react";

const Header = () => {
  return (
    <div className="bg-gray-200 p-4 fixed z-10 top-0 w-full flex items-center justify-between">
      {/* Home Link */}
      <div>
        <h1 className="text-black text-lg font-bold text-[48px]">HOME</h1>
      </div>

      {/* Avatar Icons */}
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
