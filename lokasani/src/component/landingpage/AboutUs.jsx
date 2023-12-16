import React from "react";
import Tari from "../../assets/img/AboutUs.jpg";

function AboutUs() {
  return (
    <>
      <div className="h-[900px] mx-auto py-36 px-20 flex justify-center items-center bg-white">
        <div className="w-[600px] mr-16 flex flex-col space-y-10 text-center md:text-end">
          <div className="ml-9">
            <h3 className="text-5xl font-bold text-blue-800 leading-normal">
              Pelihara <span className="text-yellow-500">Tradisi, </span>
              Rayakan <span className="text-yellow-500">Kreativitas! </span>
            </h3>
          </div>
          <div className="w-[650px] p-8 bg-blue-800 rounded-3xl">
            <p className="text-white text-justify font-base text-2xl">
              <span className="text-yellow-500">LokaSani </span>menjadi tonggak
              dalam mendukung dan mengangkat karya seni lokal serta
              produk-produk kreatif dari UKM. Dengan fokus pada penjualan produk
              lokal dan karya seni, penjualan tiket event seni, serta
              merchandise yang terinspirasi dari keindahan seni lokal, kami
              memberikan wadah yang memungkinkan seniman dan UKM untuk
              menjangkau pasar yang lebih luas.
            </p>
          </div>
        </div>
        <img
          className="w-[702px] h-[674px] rounded-3xl object-cover -mt-32 md:-mt-0 md:ml-16"
          src={Tari}
          alt="phone"
        />
      </div>
    </>
  );
}

export default AboutUs;
