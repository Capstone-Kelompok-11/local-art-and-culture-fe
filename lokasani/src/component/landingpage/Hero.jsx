import React from "react";
import Background from "../../assets/img/Hero.png";

const Hero = () => {
  const hero = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="hero-section" style={hero}>
      <div className="container mx-auto">
        <div className="h-[1000px] flex items-center text-center justify-center ">
          {/* Hero content */}
          <div className="pt-32 pb-10 md:pt-40 md:pb-16">
            <div className="text-[90px] font-bold text-center uppercase text-white">
              Eksplorasi Seni Lokal <br />
              Secara Lebih Mendalam!
            </div>
            <div className="text-3xl pt-6 text-white">
              Kelola event dan promosikan produk seni lokalmu dengan mudah <br />
              dan efektif di Lokasani.
            </div>
            <div className="pt-40">
              <a
                className="hidden lg:inline-block py-7 px-20 bg-yellow-400 hover:bg-blue-600 text-2xl text-white font-medium rounded-3xl transition duration-200"
                href="#"
              >
                Product creator
              </a>
              <a
                className="ml-3 hidden lg:inline-block py-7 px-20 bg-yellow-400 hover:bg-blue-600 text-2xl text-white font-medium rounded-3xl transition duration-200"
                href="#"
              >
                Event creator
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;