import React from "react";

const ActivityStep = ({ title, description }) => (
  <div className="flex flex-col items-start text-blue-800">
    <span className="font-semibold text-base leading-normal">{title}</span>
    <span className="font-normal text-base leading-normal">{description}</span>
  </div>
);

const TimelineDate = ({ date, time }) => (
  <div className="w-10 h-[40.33px] text-right text-indigo-400 text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">
    {date} <br /> {time}
  </div>
);

const AktivitasPesanan = () => (
  <div className="bg-[#F2F2F2] w-[662px] mt-8  ">
    <div className="bg-white mx-5 px-6 py-2 rounded-xl">
      <div className="w-[714px] text-black text-2xl font-semibold font-['Plus Jakarta Sans'] leading-9 ml-10 ">
        Aktivitas Pengiriman
      </div>
      <div className="flex gap-4 w-full ml-8">
        <div className="w-[372px] h-[392px] flex-col justify-start items-start gap-4 inline-flex mt-8">
          <ActivityStep title="Pesanan Dibuat" description="Pesanan Dibuat" />
          <ActivityStep
            title="Sedang Kemas"
            description="Penjual telah mengatur pengiriman. Menunggu pesanan diserahkan ke pihak jasa kirim"
          />
          <ActivityStep
            title="Dikirim"
            description="Paket sudah diserahkan ke kurir"
          />
          <ActivityStep
            title="Paket Telah Tiba"
            description="Paket sudah sampai di Jember"
          />
          <ActivityStep
            title="Pesanan dalam Pengiriman"
            description="Pesanan sedang diantar ke alamat tujuan"
          />
          <ActivityStep
            title="Pengiriman"
            description="Paket akan dikirim besok"
          />
        </div>
        <div className=" ml-24 mt-8">
          <TimelineDate date="11 Nov" time="18:12" />
          <br /> <br />
          <TimelineDate date="11 Nov" time="18:12" />
          <br />
          <TimelineDate date="11 Nov" time="18:12" />
          <br />
          <TimelineDate date="11 Nov" time="18:12" />
          <br />
          <TimelineDate date="11 Nov" time="18:12" />
          <br />
          <TimelineDate date="11 Nov" time="18:12" />
        </div>
      </div>
    </div>
  </div>
);

export default AktivitasPesanan;
