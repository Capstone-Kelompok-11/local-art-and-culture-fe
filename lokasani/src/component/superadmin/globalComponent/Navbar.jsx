import React from "react";
import iconNotif from "../../../assets/icon/notifications_active.svg";
import iconSms from "../../../assets/icon/textsms.svg";

const Navbar = ({ title }) => {
  return (
    <nav className="fixed inset-x-0 sm:ml-[300px] bg-white border-gray-200 dark:bg-gray-900 shadow-md">
      <div className="flex flex-wrap items-center justify-between mx-auto py-6 px-6">
        <p className="text-4xl font-bold text-gray-900 ">{title}</p>

        <div className="flex md:order-2 gap-8">
          <button type="button">
            <img src={iconSms} alt="" />
          </button>
          <button type="button">
            <img src={iconNotif} alt="" />
          </button>
          <button
            type="button"
            className="flex text-sm  rounded-full focus:ring-4 focus:ring-gray-300 "
            aria-expanded="false"
            data-dropdown-toggle="dropdown-user"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-10 h-10 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="user photo"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
