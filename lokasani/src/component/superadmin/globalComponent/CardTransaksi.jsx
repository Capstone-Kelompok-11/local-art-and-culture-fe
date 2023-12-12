import React from "react";
import { Link } from "react-router-dom";
// import Arrow from '../../../assets/icon/arrow.svg'

const CardUser = ({ judul, quantity, link, showCardButton }) => {
  return (
    <div className="grid grid-cols-1 gap-4 rounded-xl border border-stroke bg-white px-3 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1 ">
      <div className="">
        <svg
          width="45"
          height="45"
          viewBox="0 0 55 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.0390625"
            y="0.0390625"
            width="54.45"
            height="54.45"
            rx="27.225"
            fill="#E8644B"
          />
          <path
            d="M22.2077 34.5031L29.4456 27.2653L22.2077 20.0274C21.4802 19.2999 21.4802 18.1247 22.2077 17.3972C22.9353 16.6697 24.1105 16.6697 24.838 17.3972L33.4002 25.9595C34.1278 26.687 34.1278 27.8622 33.4002 28.5897L24.838 37.152C24.1105 37.8795 22.9353 37.8795 22.2077 37.152C21.4989 36.4244 21.4802 35.2306 22.2077 34.5031Z"
            fill="white"
          />
        </svg>

        <p className="text-[10px] text-gray-700   dark:text-gray-400 pt-4">
          {judul}
        </p>
        <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 ">
          {quantity}
        </h5>
        <p className="flex items-center  text-sm font-medium">
          <svg
            width="50"
            height="30"
            viewBox=""
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.7677 24.8891L15.7677 8.95334L19.2525 12.4381C19.7244 12.91 20.4867 12.91 20.9586 12.4381C21.4305 11.9662 21.4305 11.2039 20.9586 10.732L15.4047 5.17814C14.9328 4.70624 14.1705 4.70624 13.6986 5.17814L8.14467 10.732C7.67277 11.2039 7.67277 11.9662 8.14467 12.4381C8.61657 12.91 9.37887 12.91 9.85077 12.4381L13.3477 8.95334L13.3477 24.8891C13.3477 25.5545 13.8922 26.0991 14.5577 26.0991C15.2232 26.0991 15.7677 25.5545 15.7677 24.8891Z"
              fill="#5CB85C"
            />
          </svg>
          <span className=" px-1 text-[20px] text-green-600">+2%</span>
          <span className="text-gray-500">than last week</span>
        </p>
      </div>
    </div>
  );
};

export default CardUser;
