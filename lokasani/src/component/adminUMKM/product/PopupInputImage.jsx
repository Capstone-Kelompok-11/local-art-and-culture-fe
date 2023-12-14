import { useState } from "react";
import imageSearching from "../../../assets/img/image-searching.png";

// eslint-disable-next-line react/prop-types
const PopupInputImage = ({ onClose }) => {
    const [imagePreview, setImagePreview] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center z-40">
                <div className="absolute inset-0 bg-gray-800 opacity-50" onClick={onClose}></div>
                <div
                    className="w-2/6 bg-white p-4 rounded-lg z-50"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                >
                    <h1 className="text-xl font-semibold mb-3 pb-2 border-b-2">Pilih Gambar untuk diunggah</h1>
                    <div className="rounded-lg text-center">
                        {imagePreview ? (
                            <img
                                src={imagePreview}
                                alt="Preview"
                                className="w-60 h-52 mx-auto"
                            />
                        ) : (
                            <img
                                src={imageSearching}
                                alt="Searching"
                                className="w-60 h-52 mx-auto"
                            />
                        )}
                    </div>
                    <div className="flex justify-center items-center my-3">
                        <label
                            htmlFor="uploadImage"
                            className="font-bold cursor-pointer"
                        >
                            Unggah file
                        </label>
                        <input
                            type="file"
                            id="uploadImage"
                            className="hidden"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </div>
                    <div>
                        <h3 className="font-semibold">Atau tambahkan dari URL</h3>
                        <div className="mt-2 flex gap-3">
                            <input className="w-7/12 px-4 py-2 rounded-lg border-2 focus:outline-none" type="text" placeholder="https://lokasani..."/>
                            <button className="w-5/12 px-4 py-2 rounded-lg focus:outline-none text-white bg-[#253E8D]">Tambahkan</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupInputImage;