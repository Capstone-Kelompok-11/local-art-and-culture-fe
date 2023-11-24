import React, { useState } from "react";

const InformasiProduct = () => {
  const [productName, setName] = useState("");
  const [sku, setSku] = useState("");
  const [barcode, setBarcode] = useState("");
  const [description, setDescription] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleName = (e) => {
    const value = e.target.value;
    setName(value);

    if (value.trim() === "") {
      setNameError("Please enter a valid Product name");
    } else if (value.length > 10) {
      setNameError("Name must not exceed 10 characters");
    } else if (/[!@#{}]/.test(value)) {
      setNameError("Name must not contain symbols");
    } else {
      setNameError("");
    }
  };

  const handleSku = (e) => {
    const value = e.target.value;
    setSku(value);

    if (value.trim() === "") {
      setSkuError("Please enter a SKU");
    } else {
      setSkucError("");
    }
  };

  const handleBarcode = (e) => {
    const value = e.target.value;
    setBarcode(value);

    if (value.trim() === "") {
      setBarcodeError("Please enter a SKU");
    } else {
      setBarcodecError("");
    }
  };

  const handleDescription = (e) => {
    const value = e.target.value;
    setDescription(value);

    if (value.trim() === "") {
      setDescriptionError("Please enter a SKU");
    } else {
      setDescriptioncError("");
    }
  };

  const handleButtonClick = () => {
    history.push("/");
  };

  return (
    <div className="w-[650px] p-6 bg-white rounded-lg flex-col justify-start items-start  ml-10 mt-5">
      <div className="justify-start items-center gap-[210px] inline-flex">
        <div className="text-black text-lg font-semibold font-['Plus Jakarta Sans'] leading-9">
          Informasi Produk
        </div>
        <button
          className="text-blue-800 text-lg font-semibold font-PlusJakartaSans"
          onClick={() => {
            setShowModal(true);
            setTitle("");
            setGenre("");
            setYear("");
            setDescription("");
            setImage("");
            setId(null);
          }}
        >
          Tambahkan Produk dari CSV
        </button>
      </div>
      <div>
        <div className=" text-zinc-900 text-lg font-semibold font-['Plus Jakarta Sans'] mt-10">
          Nama
        </div>
        <div className="w-[600px]  rounded-lg border border-black justify-center items-center  ">
          <input
            type="text"
            name="productName"
            value={productName}
            placeholder="Nama Product"
            onChange={handleName}
            className="w-full shadow border rounded py-2 px-3 text-gray-700  "
          />
        </div>
      </div>
      <div className="justify-start items-center gap-[100px] inline-flex">
        <div>
          <div className=" text-zinc-900 text-lg font-semibold font-['Plus Jakarta Sans'] mt-10">
            SKU
          </div>
          <div className="w-[250px] rounded-lg border border-black justify-center items-center  ">
            <input
              type="text"
              name="productName"
              value={sku}
              placeholder="SKU"
              onChange={handleSku}
              className="w-full shadow border rounded py-2 px-3 text-gray-700  "
            />
          </div>
        </div>
        <div>
          <div className=" text-zinc-900 text-lg font-semibold font-['Plus Jakarta Sans'] mt-10">
            Kode Batang
          </div>
          <div className="w-[250px] rounded-lg border border-black justify-center items-center  ">
            <input
              type="text"
              name="productName"
              value={barcode}
              placeholder="01234-5678"
              onChange={handleBarcode}
              className="w-full shadow border rounded py-2 px-3 text-gray-700  "
            />
          </div>
        </div>
      </div>
      <div>
        <div className="text-zinc-900 text-lg font-semibold font-['Plus Jakarta Sans'] mt-10">
          Deskripsi (Opsional)
        </div>
        <div className="w-[600px] rounded-lg border border-black ">
          <input
            type="text"
            name="productName"
            value={description}
            placeholder="Deskripsi Produk"
            onChange={handleDescription}
            className="w-full shadow border rounded py-24 px-4 text-lg text-gray-700"
          />
        </div>
      </div>
    </div>
  );
};

export default InformasiProduct;
