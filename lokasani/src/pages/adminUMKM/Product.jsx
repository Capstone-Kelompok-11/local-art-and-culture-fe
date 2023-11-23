import Sidebar from "../../component/adminUMKM/globalComponent/Sidebar";
import Header from "../../component/adminUMKM/globalComponent/Header";

const Product = () => {
    return (
        <div className="bg-[#F2F2F2]">
            <div className="flex">
                <div>
                    <Sidebar />
                </div>
                <div className="w-full ml-[255px]">
                    <div>
                        <Header
                            headerTitle="Tambah Produk"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;