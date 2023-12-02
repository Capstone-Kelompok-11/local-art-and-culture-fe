/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import user from "../../assets/img/user.svg";
import Sidebar from "../../component/adminEvent/Sidebar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import imageSearching from "../../assets/img/image-searching.png";

function NewEvent() {
  // function poster
  const [poster, setPoster] = useState(null);
  const [posterPreview, setPosterPreview] = useState(null);
  const [isPopupPosterOpen, setIsPopupPosterOpen] = useState(false);

  const handlePosterUpload = (event) => {
    setIsPopupPosterOpen(false);
    console.log(poster);
  };
  const handlePopupUploadPoster = () => {
    setIsPopupPosterOpen(true);
  };
  const handleFilePosterChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPosterPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
    setPoster(file);
  };
  const handleDragOverPoster = (event) => {
    event.preventDefault();
  };
  const handleDropPoster = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPosterPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
    setPoster(file);
  };
  const handlePosterClick = () => {
    document.getElementById("uploadPoster").click();
  };

  // function gueststar
  const [guest, setGuest] = useState([]);
  const [nameGuest, setNameGuest] = useState("");
  const [jobGuest, setJobGuest] = useState("");
  const [imageGuestPreview, setImageGuestPreview] = useState(null);
  const [isPopupGuestOpen, setIsPopupGuestOpen] = useState(false);

  const handleGuestUpload = (event) => {
    event.preventDefault();
    setGuest([
      ...guest,
      { nama: nameGuest, peran: jobGuest, image: imageGuestPreview },
    ]);
    setIsPopupGuestOpen(false);
    setNameGuest("");
    setJobGuest("");
    setImageGuestPreview(null);
    console.log(guest);
  };
  const handlePopupUploadGuest = () => {
    setIsPopupGuestOpen(true);
  };
  const handleFileGuestChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageGuestPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
    setGuest((prevGuests) => {
      const lastGuest = prevGuests[prevGuests.length - 1];
      return [
        ...prevGuests.slice(0, prevGuests.length - 1),
        { ...lastGuest, image: file },
      ];
    });
  };
  const handleDragOverGuest = (event) => {
    event.preventDefault();
  };
  const handleDropGuest = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageGuestPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
    setGuest((prevGuests) => {
      const lastGuest = prevGuests[prevGuests.length - 1];
      return [
        ...prevGuests.slice(0, prevGuests.length - 1),
        { ...lastGuest, image: file },
      ];
    });
  };
  const handleGuestClick = () => {
    document.getElementById("uploadGuest").click();
  };
  const handleCloseGuestIconClick = () => {
    setGuest(null);
    setImageGuestPreview(null);
  };

  const [poster1, setPoster1] = useState(null);

  const handlePosterUpload1 = (event) => {
    const file = event.target.files[0];

    setPoster1(file);
  };

  const [eventName, setEventName] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const [eventNama, setEventNama] = useState("");
  const [eventDeskripsi, setEventDeskripsi] = useState("");
  const [Price, setPrice] = useState("");

  const [eventNama1, setEventNama1] = useState("");
  const [eventDeskripsi1, setEventDeskripsi1] = useState("");
  const [Price1, setPrice1] = useState("");

  const [namaDescription, setNamaDescription] = useState("");
  const [alamatDescription, setAlamatDescription] = useState("");

  // fungsi tanggal mulai-selesai
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  // fungsi gomaps
  const [showGoogleMaps, setShowGoogleMaps] = useState(false);

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <section>
      <Sidebar />
      <main className="sm:ml-64 bg-[#F2F2F2] h-screen">
        {/* header start */}
        <div className="bg-white flex items-center justify-between py-7 rounded-sm">
          <div className="pl-5">
            <h1 className="text-3xl font-bold">Add New Event</h1>
          </div>
          <div>
            <div className="flex items-center">
              <div className="flex items-center relative mr-5">
                <SearchIcon className="ml-3 cursor-pointer absolute" />
                <CloseIcon className="ml-[315px] cursor-pointer absolute" />
                <input
                  type="text"
                  name="name"
                  placeholder="Cari apa"
                  className="w-[350px] py-1 pl-12 bg-[#F2F2F2] rounded-full"
                />
              </div>
              <div className="flex mr-16 gap-x-6">
                <a className="cursor-pointer">
                  <TextsmsIcon className="text-[#253E8D]" />
                </a>
                <a className="cursor-pointer">
                  <NotificationsActiveIcon className="text-[#253E8D]" />
                </a>
                <a href="">
                  <img
                    className="w-6 h-6 rounded-full"
                    src={user}
                    alt="Rounded avatar"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* header end */}
        {/* content start */}
        <div className="bg-gray-200 pl-3 pr-3">
          <div className="grid grid-cols-1 gap-1 p-2">
            <div className="col-span-1 bg-white p-4 rounded-md relative">
              <h1 className="text-3xl font-bold text-sm">Tentang Eventmu</h1>
              <span className="text-[#999999] ml-1">
                Masukkan detail event-mu di sini!
              </span>

              <div className="flex items-center mt-4 space-x-8 justify-center">
                {/* Kolom Unggah */}
                <div className="border-dashed border-2 w-1/2 h-[300px] border-gray-400 p-8 rounded-md aspect-w-1 aspect-h-1">
                  <div className="flex flex-col items-center">
                    <AddAPhotoIcon className="text-[#768DD5] mt-10" />
                    <h1 className="text-3xl font-bold text-sm mt-1">
                      Unggah poster Event Anda di sini
                    </h1>
                    <h1 className="block text-sm mt-1 font-medium text-[#828282] ">
                      Upload gambar untuk poster event kamu Max ukuran 500kb
                    </h1>
                    <div className="mt-2 flex flex-col items-center">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePosterUpload}
                        id="poster"
                        className="hidden"
                      />
                      {poster && (
                        <span className="ml-2 text-gray-500 mb-2">
                          {poster.name}
                        </span>
                      )}
                      <button
                        onClick={handlePopupUploadPoster}
                        htmlFor="poster"
                        className="cursor-pointer bg-[#3653B0] hover:bg-blue-800 text-white py-2 px-4 rounded-full ml-2"
                      >
                        Unggah Poster
                      </button>

                      {/* popup poster start */}
                      {isPopupPosterOpen && (
                        <div>
                          <div className="fixed inset-0 flex items-center justify-center z-40">
                            <div
                              className="absolute inset-0 bg-gray-800 opacity-50"
                              onClick={() => setIsPopupPosterOpen(false)}
                            ></div>
                            <div
                              className="w-5/12 bg-white p-4 rounded-lg z-50"
                              onDragOver={handleDragOverPoster}
                              onDrop={handleDropPoster}
                            >
                              <h1 className="text-xl font-semibold mb-3 pb-2 border-b-2">
                                Unggah Gambar
                              </h1>
                              <div
                                className="rounded-lg text-center"
                                onClick={handlePosterClick}
                              >
                                {posterPreview ? (
                                  <img
                                    src={posterPreview}
                                    alt="Preview"
                                    className="w-60 h-52 mx-auto cursor-pointer"
                                  />
                                ) : (
                                  <img
                                    src={imageSearching}
                                    alt="Searching"
                                    className="w-60 h-52 mx-auto cursor-pointer"
                                  />
                                )}
                              </div>
                              <div className="flex justify-center flex-col items-center my-3">
                                <label
                                  htmlFor="uploadPoster"
                                  className="font-bold cursor-pointer"
                                >
                                  Tarik dan Lepaskan Poster
                                </label>
                                <p className="text-[14px] text-[#828282]">
                                  *Unggah gambar untuk poster event kamu Max
                                  ukuran 500kb
                                </p>
                                <input
                                  type="file"
                                  id="uploadPoster"
                                  className="hidden"
                                  accept="image/*"
                                  onChange={handleFilePosterChange}
                                />
                              </div>
                              <div>
                                <div className="mt-2 flex justify-center">
                                  <button
                                    className="w-5/12 px-4 py-2 rounded-[20px] focus:outline-none text-white bg-[#253E8D]"
                                    onClick={() => handlePosterUpload()}
                                  >
                                    Tambahkan
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {/* popup poster end */}
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-md flex flex-col">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="col-span-1 " style={{ width: "400px" }}>
                      <h1 className="text-3xl font-bold text-sm text-[#768DD5]">
                        Nama:
                      </h1>
                      <input
                        type="text"
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                        placeholder="Nama..."
                        className="bg-[#F2F2F2] mt-2 p-2 rounded-md border border-gray-300 w-full"
                      />
                    </div>
                    <div className="col-span-1">
                      <h1 className="text-3xl font-bold text-sm text-[#768DD5]">
                        Jenis Event:
                      </h1>
                      <select
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        className="bg-[#F2F2F2] mt-2 p-2 rounded-md border border-gray-300 w-full text-[#828282]"
                      >
                        <option value="">Pilih Jenis Event</option>
                        <option value="Conference">Conference</option>
                        <option value="Workshop">Workshop</option>
                        <option value="Seminar">Seminar</option>
                      </select>
                    </div>
                    <div className="col-span-1 " style={{ width: "400px" }}>
                      <h1 className="text-3xl font-bold text-sm text-[#768DD5]">
                        Deskripsi:
                      </h1>
                      <textarea
                        type="text"
                        value={eventDescription}
                        onChange={(e) => setEventDescription(e.target.value)}
                        placeholder="Deskirpsi..."
                        className="bg-[#F2F2F2] mt-2 resize-none py-2 pl-2 pr-2 rounded-md border border-gray-300 w-full"
                        rows={5}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* lokasi event */}
          <div className="grid grid-cols-2 gap-3 p-2">
            <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-1 rounded-md relative">
              <h1 className="text-3xl font-bold text-sm">Lokasi Event</h1>
              <span className="text-[#999999] ml-1">
                Jabarkan lokasi event Anda di sini!
              </span>
              <button className="flex items-center justify-center cursor-pointer bg-[#3653B0] hover:bg-blue-800 text-white py-2 px-4 rounded-full  w-full">
                + Unggah Link Venue (Gomaps)
              </button>
              <div className="grid grid-cols-2">
                <div className="col-span-1 p-2 " style={{ width: "200px" }}>
                  <h1 className="text-3xl font-bold text-sm text-[#768DD5]">
                    Nama Venue:
                  </h1>
                  <textarea
                    type="text"
                    value={namaDescription}
                    onChange={(e) => setNamaDescription(e.target.value)}
                    placeholder="Nama venue..."
                    className="bg-[#F2F2F2] mt-2 p-5 rounded-md border border-gray-300 w-full"
                  />
                </div>
                <div className="col-span-1 p-2" style={{ width: "200px" }}>
                  <h1 className="text-3xl font-bold text-sm text-[#768DD5]">
                    Alamat Venue:
                  </h1>
                  <textarea
                    type="text"
                    value={alamatDescription}
                    onChange={(e) => setAlamatDescription(e.target.value)}
                    placeholder="Alamat venue..."
                    className="bg-[#F2F2F2] mt-2 p-5 rounded-md border border-gray-300 w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="poster"
                    className="cursor-pointer bg-[#3653B0] hover:bg-blue-800 text-white py-2 px-4 rounded-full ml-2 text-sm"
                  >
                    + Unggah Denah Venue
                  </label>
                </div>
                <div>
                  <label
                    htmlFor="poster"
                    className="cursor-pointer bg-[#3653B0] hover:bg-blue-800 text-white py-2 px-4 rounded-full ml-2 text-sm"
                  >
                    + Unggah Denah Venue
                  </label>
                </div>
              </div>
            </div>

            {/* Waktu event */}
            <div className="grid grid-cols-1 gap-1">
              <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-4 rounded-md relative">
                <h1 className="text-3xl font-bold text-sm">Waktu Event</h1>
                <span className="text-[#999999] ml-1">
                  Kapan Event Anda dilaksanakan?
                </span>
                <div className="grid grid-cols-2">
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-[#768DD5] mb-2">
                      Tanggal Mulai:
                    </label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      dateFormat="dd/MM/yyyy"
                    />
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-[#768DD5] mb-2">
                      Tanggal Selesai:
                    </label>
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      dateFormat="dd/MM/yyyy"
                    />
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-[#768DD5] mb-2">
                      Jam Mulai:
                    </label>
                    <AccessAlarmIcon
                      fontSize="small"
                      className="absolute ml-[8px] mt-[2px] z-10 text-[#828282]"
                    />
                    <DatePicker
                      selected={startTime}
                      onChange={(time) => setStartTime(time)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption="Time"
                      dateFormat="HH:mm"
                      className="bg-[#F2F2F2] px-2 pl-8 w-11/12 rounded-[10px]"
                    />
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-[#768DD5] mb-2">
                      Jam Selesai:
                    </label>
                    <AccessAlarmIcon
                      fontSize="small"
                      className="absolute ml-[8px] mt-[2px] z-10 text-[#828282]"
                    />
                    <DatePicker
                      selected={endTime}
                      onChange={(time) => setEndTime(time)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption="Time"
                      dateFormat="HH:mm"
                      className="bg-[#F2F2F2] px-2 pl-8 w-11/12 rounded-[10px]"
                    />
                  </div>
                </div>
              </div>

              {/* Guest start */}
              <div className="col-span-4 sm:col-span-4 md:col-span-1 bg-white mt-2 p-4 rounded-md relative">
                <div className="flex flex-col justify-between ">
                  <h1 className="text-3xl font-bold text-sm">Guest Star</h1>
                  <span className="text-[#999999] ml-1">
                    Tambahkan Pemeriah Acara!
                  </span>
                  <div className="flex justify-center">
                    <div className="border-dashed border-2 mt-2 border-gray-400 flex items-center p-5 py-7 mx-2 rounded-md aspect-w-1 aspect-h-1">
                      <label
                        className="block text-sm font-medium cursor-pointer text-[#828282] mt-2"
                        onClick={handlePopupUploadGuest}
                      >
                        + Tambah Guest Star
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        id="guest"
                        onChange={handleFileGuestChange}
                        className="hidden"
                      />
                    </div>
                    {guest ? (
                      guest.map((guest, index) => (
                        <div
                          key={index}
                          className="rounded-md relative w-4/12 flex flex-col mt-2 mx-2 bg-light-yellow rounded-lg shadow-md hover:bg-tan ring-[#768DD5] ring-1"
                        >
                          <CloseIcon
                            onClick={handleCloseGuestIconClick}
                            fontSize="small"
                            className="absolute -mt-[8px] bg-[#3653B0] rounded-full text-white -mr-[10px] right-0 cursor-pointer"
                          />
                          <img
                            src={guest.image}
                            className="object-cover h-[90px]"
                            alt="Deskripsi gambar"
                          />
                        </div>
                      ))
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
                {/* popup guest start */}
                {isPopupGuestOpen && (
                  <div>
                    <div className="fixed inset-0 flex items-center justify-center z-40">
                      <div
                        className="absolute inset-0 bg-gray-800 opacity-50"
                        onClick={() => setIsPopupGuestOpen(false)}
                      ></div>
                      <div
                        className="w-5/12 bg-white p-4 rounded-lg z-50"
                        onDragOver={handleDragOverGuest}
                        onDrop={handleDropGuest}
                      >
                        <h1 className="text-xl font-semibold mb-3 pb-2 border-b-2">
                          Tambah Guest Star
                        </h1>
                        <div className="rounded-lg text-center">
                          <div className="flex w-full justify-between mb-5">
                            <div className="flex flex-col">
                              <label
                                htmlFor="namaGuest"
                                className="text-left text-[#768DD5] font-semibold"
                              >
                                Nama Guest Star
                              </label>
                              <input
                                type="text"
                                id="namaGuest"
                                value={nameGuest}
                                onChange={(e) => setNameGuest(e.target.value)}
                                placeholder="Nama guest..."
                                className="bg-[#F2F2F2] px-3 py-2 rounded-md text-sm"
                              />
                            </div>
                            <div className="flex flex-col">
                              <label
                                htmlFor="peranGuest"
                                className="text-left text-[#768DD5] font-semibold"
                              >
                                Peran Guest Star
                              </label>
                              <input
                                type="text"
                                id="peranGuest"
                                value={jobGuest}
                                onChange={(e) => setJobGuest(e.target.value)}
                                placeholder="Peran guest..."
                                className="bg-[#F2F2F2] px-3 py-2 rounded-md text-sm"
                              />
                            </div>
                            <div></div>
                          </div>
                          {imageGuestPreview ? (
                            <img
                              src={imageGuestPreview}
                              alt="Preview"
                              className="w-52 h-44 mx-auto cursor-pointer"
                              onClick={handleGuestClick}
                            />
                          ) : (
                            <img
                              src={imageSearching}
                              alt="Searching"
                              className="w-52 h-44 mx-auto cursor-pointer"
                              onClick={handleGuestClick}
                            />
                          )}
                        </div>
                        <div className="flex justify-center flex-col items-center my-3">
                          <label
                            htmlFor="uploadGuest"
                            className="font-bold cursor-pointer"
                          >
                            Tarik dan Lepaskan Foto Guest Star
                          </label>
                          <p className="text-[14px] text-[#828282]">
                            *Unggah gambar untuk poster event kamu Max ukuran
                            500kb
                          </p>
                          <input
                            type="file"
                            id="uploadGuest"
                            className="hidden"
                            accept="image/*"
                            onChange={handleFileGuestChange}
                          />
                        </div>
                        <div>
                          <div className="mt-2 flex justify-center">
                            <button
                              className="w-5/12 px-4 py-2 rounded-[20px] focus:outline-none text-white bg-[#253E8D]"
                              onClick={handleGuestUpload}
                            >
                              Tambahkan
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* popup guest end */}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 p-2">
            <div className="col-span-1 bg-white p-4 rounded-md relative">
              <h1 className="text-3xl font-bold text-sm">Detail Tiketing</h1>
              <span className="text-[#999999] ml-1">
                Jabarkan Tiket yang ingin Anda daftarkan
              </span>
              <div className="flex p-4">
                <button className="ml-auto cursor-pointer bg-[#3653B0] hover:bg-blue-800 text-white py-2 px-4 rounded-full ml-2 text-sm">
                  + Tambah Tiket
                </button>
              </div>

              {/* tiket start */}
              <div className="mb-4 rounded-md relative flex flex-col p-20 bg-light-yellow rounded-lg shadow-md hover:bg-tan ring-[#768DD5] ring-2">
                <div className="flex mb-4">
                  <button className="cursor-pointer bg-[#CA9702] hover:bg-yellow-600 text-white py-2 px-4 rounded-full text-sm">
                    Workshop
                  </button>
                  <button className="cursor-pointer bg-[#768DD5] hover:bg-blue-800 text-white py-2 px-4 rounded-full ml-2 text-sm">
                    Reguler
                  </button>
                  <div className="ml-auto">
                    <CreateIcon className="mr-2" />
                    <DeleteIcon />
                  </div>
                </div>
                <h1 className="text-3xl font-bold text-sm mb-1">
                  Workshop Keramik Jawa Timur bersama Kak Seto
                </h1>
                <span className="text-[#999999]">
                  Lorem ipsum dolor sit amet consectetur. Amet varius turpis
                  habitasse tempus. Eros eu aliquet enim rutrum etiam venenatis
                  dolor tortor.
                </span>
                <div className="text-sm flex items-center mb-1">
                  <CloseIcon color="primary" />
                  <span className="ml-2">
                    500 Tiket mulai dijual tanggal 25 Nov 2023
                  </span>
                </div>
                <div className="border-b border-dashed border-[#768DD5] mt-1"></div>
                <div className="absolute left-1 top-0 bg-[#CA9702] w-2 h-full ml-2"></div>
                <h1 className="text-3xl font-bold text-sm mt-5">Rp.85.000</h1>
              </div>
              {/* tiket end */}
              <div className="mb-4 relative">
                <div className="mb-4 rounded-md relative flex flex-col p-20 bg-light-yellow rounded-lg shadow-md hover:bg-tan ring-[#768DD5] ring-2">
                  <div className="flex ">
                    <button className="cursor-pointer bg-[#CA9702] hover:bg-yellow-600 text-white py-2 px-4 rounded-full ml-2 text-sm">
                      Workshop
                    </button>
                    <button className="cursor-pointer bg-[#768DD5] hover:bg-blue-800 text-white py-2 px-4 rounded-full ml-2 text-sm">
                      Reguler
                    </button>
                    <div className="ml-auto">
                      <CreateIcon />
                      <DeleteIcon />
                    </div>
                  </div>
                  <h1 className="text-3xl font-bold text-sm">
                    Workshop Keramik Jawa Timur bersama Kak Seto
                  </h1>
                  <span className="text-[#999999]">
                    Lorem ipsum dolor sit amet consectetur. Amet varius turpis
                    habitasse tempus. Eros eu aliquet enim rutrum etiam
                    venenatis dolor tortor.
                  </span>
                  <div className="text-sm flex items-center">
                    <CloseIcon color="primary" />
                    <span className="ml-2">
                      500 Tiket mulai dijual tanggal 25 Nov 2023
                    </span>
                  </div>
                  <div className="border-b border-dashed border-[#768DD5] mt-1"></div>
                  <div className="absolute left-1 top-0 bg-[#CA9702] w-2 h-full ml-2"></div>
                  <h1 className="text-3xl font-bold text-sm mt-5">Rp.85.000</h1>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="col-span-1 bg-white p-4 rounded-md relative">
                  <h1 className="text-3xl font-bold text-sm text-[#3653B0]">
                    Formulir Pemesanan*
                  </h1>

                  {/* Nama */}
                  <div className="flex items-center mt-4">
                    <input
                      type="radio"
                      id="nama"
                      name="option"
                      checked={selectedOption === "nama"}
                      onChange={() => handleOptionChange("nama")}
                      className="mr-2"
                    />
                    <label htmlFor="nama" className="ml-2">
                      Nama
                    </label>
                  </div>

                  {/* Email */}
                  <div className="flex items-center mt-4">
                    <input
                      type="radio"
                      id="email"
                      name="option"
                      checked={selectedOption === "email"}
                      onChange={() => handleOptionChange("email")}
                      className="mr-2"
                    />
                    <label htmlFor="email" className="ml-2">
                      Email
                    </label>
                  </div>

                  {/* Nomor Handphone */}
                  <div className="flex items-center mt-4">
                    <input
                      type="radio"
                      id="nomorHandphone"
                      name="option"
                      checked={selectedOption === "nomorHandphone"}
                      onChange={() => handleOptionChange("nomorHandphone")}
                      className="mr-2"
                    />
                    <label htmlFor="nomorHandphone" className="ml-2">
                      Nomor Handphone
                    </label>
                  </div>

                  {/* Nomor KTP */}
                  <div className="flex items-center mt-4">
                    <input
                      type="radio"
                      id="nomorKTP"
                      name="option"
                      checked={selectedOption === "nomorKTP"}
                      onChange={() => handleOptionChange("nomorKTP")}
                      className="mr-2"
                    />
                    <label htmlFor="nomorKTP" className="ml-2">
                      Nomor KTP
                    </label>
                  </div>

                  {/* Tanggal Lahir */}
                  <div className="flex items-center mt-4">
                    <input
                      type="radio"
                      id="tanggalLahir"
                      name="option"
                      checked={selectedOption === "tanggalLahir"}
                      onChange={() => handleOptionChange("tanggalLahir")}
                      className="mr-2"
                    />
                    <label htmlFor="tanggalLahir" className="ml-2">
                      Tanggal Lahir
                    </label>
                  </div>

                  {/* Jenis Kelamin */}
                  <div className="flex items-center mt-4">
                    <input
                      type="radio"
                      id="jenisKelamin"
                      name="option"
                      checked={selectedOption === "jenisKelamin"}
                      onChange={() => handleOptionChange("jenisKelamin")}
                      className="mr-2"
                    />
                    <label htmlFor="jenisKelamin" className="ml-2">
                      Jenis Kelamin
                    </label>
                  </div>
                </div>
                <div className="col-span-1 bg-white p-4 rounded-md relative">
                  <h1 className="text-3xl font-bold text-sm text-[#3653B0]">
                    Pengaturan Tambahan*
                  </h1>
                  <div className="flex items-center">
                    <h1 className="mr-2 text-3xl font-bold text-sm">
                      Jumlah maks. tiket per transaksi
                    </h1>
                    <select className="bg-white text-[#999999] px-2 py-2 rounded-md outline outline-black outline-1 ml-auto ">
                      <option>Jumlah Tiket</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>dll</option>
                    </select>
                  </div>
                  <span className="text-[#999999] ml-1">
                    Jabarkan Tiket yang ingin Anda daftarkan
                  </span>
                  <div className="col-span-1 bg-white  rounded-md relative mt-20">
                    <h1 className="text-3xl font-bold text-sm p-">
                      Pengaturan Tambahan*
                    </h1>
                    <div className="col-span-1 bg-white rounded-md relative">
                      <Brightness1Icon color="primary" sx={{ fontSize: 10 }} />
                      <span className="text-[#999999] ml-1">
                        1 akun email dapat melakukan lebih dari 1 kali transaksi
                      </span>
                    </div>
                    <Brightness1Icon color="primary" sx={{ fontSize: 10 }} />
                    <span className="text-[#999999] ml-1">
                      Data antar tiket tidak boleh sama
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* kolom Tambah Merch */}
          <div className="grid grid-cols-1 gap-1 p-2">
            <div className="col-span-1 bg-white p-4 rounded-md relative">
              <h1 className="text-3xl font-bold text-sm">Tambah Merch</h1>
              <span className="text-[#999999] ml-1">
                Masukkan Mech untuk Menambah Keseruan Event Kamu!
              </span>
              <div className="flex">
                <button className="ml-auto cursor-pointer bg-[#3653B0] hover:bg-blue-800 text-white py-2 px-4 rounded-full ml-2 text-sm">
                  + Import Data dari File
                </button>
              </div>
              <div className="col-span-1 bg-white p-4 rounded-md relative">
                <div className="grid grid-cols-2 flex items-center mt-4 space-x-8">
                  {/* Kolom Unggah */}
                  <div className="border-dashed border-2 border-gray-400 p-20 rounded-md aspect-w-1 aspect-h-1">
                    <div className="flex flex-col items-center">
                      <AddAPhotoIcon className="text-[#768DD5]" />
                      <h1 className="text-3xl font-bold text-sm">
                        Unggah poster Event Anda di sini
                      </h1>
                      <h1 className="block text-sm font-medium text-[#828282]">
                        Upload gambar untuk poster event kamu Max ukuran 500kb
                      </h1>
                      <div className="mt-1 flex items-center">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handlePosterUpload1}
                          id="poster1"
                          className="hidden"
                        />
                        <label
                          htmlFor="poster"
                          className="cursor-pointer bg-[#3653B0] hover:bg-blue-800 text-white py-2 px-4 rounded-full ml-2"
                        >
                          Unggah Poster
                        </label>
                        {poster1 && (
                          <span className="ml-2 text-gray-500">
                            {poster1.name}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* Kolom Nama sampai Deskripsi */}
                  <div className="bg-white p-4 rounded-md flex flex-col">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="col-span-1 " style={{ width: "400px" }}>
                        <h1 className="text-3xl font-bold text-sm text-[#768DD5]">
                          Nama:
                        </h1>
                        <input
                          type="text"
                          value={eventNama}
                          onChange={(e) => setEventNama(e.target.value)}
                          placeholder="nama..."
                          className="bg-[#F2F2F2] mt-2 p-2 rounded-md border border-gray-300 w-full"
                        />
                      </div>
                      <div className="col-span-1 " style={{ width: "400px" }}>
                        <h1 className="text-3xl font-bold text-sm text-[#768DD5]">
                          Deskripsi:
                        </h1>
                        <textarea
                          type="text"
                          value={eventDeskripsi}
                          onChange={(e) => setEventDeskripsi(e.target.value)}
                          placeholder="deskripsi..."
                          className="bg-[#F2F2F2] mt-2 px-3 py-3 resize-none rounded-md border border-gray-300 w-full"
                        />
                      </div>
                      <label className="text-3xl font-bold text-sm text-[#768DD5]">
                        Harga:
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">Rp</span>
                        </div>
                        <input
                          type="text"
                          className="focus:ring-indigo-500 bg-[#F2F2F2] w-[400px] py-2 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                          placeholder="0.00"
                          value={Price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 flex items-center space-x-8">
                  {/* Kolom Unggah */}
                  <div className="rounded-md  flex flex-col p-20 bg-light-yellow rounded-lg shadow-md hover:bg-tan ring-[#768DD5] ring-1">
                    tempat gambar
                  </div>
                  {/* Kolom Nama sampai Deskripsi */}
                  <div className="bg-white p-4 rounded-md flex flex-col">
                    <div className="grid grid-cols-1 gap-3">
                      <div className="col-span-1 " style={{ width: "400px" }}>
                        <h1 className="text-3xl font-bold text-sm text-[#768DD5]">
                          Nama:
                        </h1>
                        <input
                          type="text"
                          value={eventNama1}
                          onChange={(e) => setEventNama1(e.target.value)}
                          placeholder="text"
                          className="bg-[#F2F2F2] mt-2 p-2 rounded-md border border-gray-300 w-full"
                        />
                      </div>
                      <div className="col-span-1 " style={{ width: "400px" }}>
                        <h1 className="text-3xl font-bold text-sm text-[#768DD5]">
                          Deskripsi:
                        </h1>
                        <textarea
                          type="text"
                          value={eventDeskripsi1}
                          onChange={(e) => setEventDeskripsi1(e.target.value)}
                          placeholder="text"
                          className="bg-[#F2F2F2] mt-2 py-2 px-3 resize-none rounded-md border border-gray-300 w-full"
                        />
                      </div>
                      <label className="text-3xl font-bold text-sm text-[#768DD5]">
                        Harga:
                      </label>
                      <div className="relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">Rp</span>
                        </div>
                        <input
                          type="text"
                          className="focus:ring-indigo-500 bg-[#F2F2F2] py-2 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                          placeholder="0.00"
                          value={Price1}
                          onChange={(e) => setPrice1(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <button className="flex items-center justify-center cursor-pointer bg-[#3653B0] hover:bg-blue-800 text-white py-2 px-4 rounded-full ml-2 w-full">
                    + Tambah Merch
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-1 p-2">
            <button className="flex items-center justify-center cursor-pointer bg-[#768DD5] hover:bg-blue-800 text-white py-2 px-4 rounded-full ml-2 w-full">
              Simpan Draft Event
            </button>
          </div>
        </div>

        {/* content end */}
      </main>
    </section>
  );
}

export default NewEvent;
