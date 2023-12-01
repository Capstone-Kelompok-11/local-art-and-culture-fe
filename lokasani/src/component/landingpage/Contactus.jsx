import React from "react";
import Object from "../../assets/img/pattern.png";
import Email from "../../assets/img/email.png";
import Call from "../../assets/img/call.png";
import Location from "../../assets/img/location.png";

const Contactus = () => {
  return (
    <div className="container mx-auto  ">
      <div className="flex gap-x-10 h-screen relative bg-white">
        <div className="w-1/2">
          <h1 className="text-6xl font-bold uppercase text-black ">
            Hubungi kami
          </h1>
          <h2 className="pt-7 text-3xl font-semibold text-[#3653B0]">
            Tertarik dengan kami?
          </h2>
          <p className="text-[20px] mr-9 text-justify w-[600px] pt-3">
            Kami siap membantumu dengan pertanyaan, umpan balik, atau bantuan
            apa pun yang kamu butuhkan. Jangan ragu untuk menghubungi kami ya!
          </p>
          <img src={Object} alt="" />
        </div>

        <div className="w-1/2">
          <div className=" h-[600px] w-[580px] bg-[#3653B0] rounded-[20px]">
            <div className="py-6 mx-auto max-w-screen-md mx-auto">
              <div></div>
              <form action="#" className=" space-y-8  px-10 py-1">
                <div className="">
                  <label
                    for="nama"
                    className="block mb-2 text-[18px] font-medium text-white dark:text-gray-300 "
                  >
                    Nama
                  </label>
                  <input
                    type="text"
                    id="nama"
                    className="shadow-sm  px-5 border border-gray-300 text-black text-[15px] rounded-[10px] focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Masukkan nama anda"
                    required
                  />
                </div>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-[18px] font-medium text-white dark:text-gray-300 "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm  px-5 border border-gray-300 text-black text-[15px] rounded-[10px] focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Masukkann email anda"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    for="message"
                    className="block mb-2 text-[18px] font-medium text-white dark:text-gray-300"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className="block p-2.5 px-5 w-full text-[15px] text-white bg-gray-50 rounded-[10px] shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="py-3 px-12 justify-end text-sm font-medium text-center text-white rounded-[10px] bg-[#F3B502] sm:w-fit hover:bg-white hover:text-black focus:ring-4 focus:outline-none "
                  >
                    Kirim
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 h-[100px] mb-9">
        <div className="bg-blue-800 rounded-[10px] ">
        <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
            <div class="flex items-start">
              <div class="shrink-0">
                <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                  </svg>
                </div>
              </div>
              <div class="ml-6 grow">
                <p class="mb-2 font-bold dark:text-white">
                  Technical support
                </p>
                <p class="text-neutral-500 dark:text-neutral-200">
                  support@example.com
                </p>
                <p class="text-neutral-500 dark:text-neutral-200">
                  +1 234-567-89
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-800 rounded-[10px]">
          <img src={Call} className="h-[50px] place-items-center" alt="" />
        </div>
        <div className="bg-blue-800 rounded-[10px]">
          <img src={Location} className="h-[50px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contactus;
