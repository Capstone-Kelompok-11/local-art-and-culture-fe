import React, { useState } from "react";

const Harga = () => {
  const [pajak, setPajak] = useState(false);
  const [terdapatStok, setTerdapatStok] = useState(false);
  const [harga, setHarga] = useState("");
  const [hargaDiskon, setHargaDiskon] = useState("");

  const handleHarga = (e) => {
    const value = e.target.value;
    setHarga(value);

    if (value.trim() === "") {
      setHargaError("Please enter a valid Price");
    } else {
      setHargaError("");
    }
  };

  const handleHargaDiskon = (e) => {
    const value = e.target.value;
    setHargaDiskon(value);

    if (value.trim() === "") {
      setHargaError("Please enter a valid Price");
    } else {
      setHargaError("");
    }
  };

  const handlePajakChange = () => {
    setPajak(!pajak);
  };

  const handleStokChange = () => {
    setTerdapatStok(!terdapatStok);
  };

  return (
    <div className="w-[450px] h-[400px] p-6 bg-white rounded-lg flex-col justify-start items-start ml-10 mt-5">
      <div className="justify-start items-center">
        <div className="text-black text-lg font-semibold font-['Plus Jakarta Sans'] leading-9">
          Harga
        </div>
      </div>
      <div>
        <div className="text-zinc-900 text-lg font-semibold font-['Plus Jakarta Sans'] mt-10">
          Harga
        </div>
        <div className="w-[400px] rounded-lg border border-black justify-center items-center">
          <input
            type="text"
            name="harga"
            value={harga}
            placeholder="Harga Awal"
            onChange={handleHarga}
            className="w-full shadow border rounded py-2 px-3 text-gray-700"
          />
        </div>
      </div>
      <div className="justify-start items-center gap-[100px] inline-flex">
        <div>
          <div className="text-zinc-900 text-lg font-semibold font-['Plus Jakarta Sans'] mt-10">
            Harga Setelah Diskon
          </div>
          <div className="w-[400px] rounded-lg border border-black justify-center items-center">
            <input
              type="text"
              name="diskon"
              value={hargaDiskon}
              placeholder="Harga Setelah Diskon"
              onChange={handleHargaDiskon}
              className="w-full shadow border rounded py-2 px-3 text-gray-700"
            />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-500"
            checked={pajak}
            onChange={handlePajakChange}
          />
          <span className="ml-2 text-gray-700">
            Kenakan pajak pada produk ini
          </span>
        </label>
      </div>
      <div>
        <div className="inline-flex items-center mt-7">
          <span className="mr-2 text-black font-semibold">Terapkan stok</span>
          <div className="relative w-14 h-8 bg-gray-300 rounded-full">
            <div
              className={`absolute h-6 w-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                terdapatStok ? "translate-x-8" : "translate-x-0"
              }`}
            ></div>
            <input
              type="range"
              min="0"
              max="1"
              step="1"
              value={terdapatStok ? "1" : "0"}
              onChange={handleStokChange}
              className="w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Harga;
