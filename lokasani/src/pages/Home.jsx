import React from "react";
import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import ChartPenjualan from "../component/ChartPenjualan";
import GrafikBulanan from "../component/GrafikBulanan";
import Prospek from "../component/Prospek";

const Home = () => {
  return (
    <div className="">
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div className="ml-[353px]">
          <div>
            <Header />
          </div>
          <div className="h-[2000px] pt-20 ml-10 ">
            <div>
              <ChartPenjualan />
            </div>
            <div>
              <GrafikBulanan />
            </div>
            <div>
              <Prospek />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
