import Sidebar from "../../component/adminUMKM/globalComponent/Sidebar";
import Header from "../../component/adminUMKM/globalComponent/Header";


const Transaction = () => {
    return (
        <div className="bg-[#F2F2F2]">
            <div className="flex">
                <div>
                    <Sidebar/>
                </div>
                <div className="w-full ml-[255px]">
                    <div>
						<Header headerTitle={"Daftar Transaksi"} />
					</div>
                    <div className="p-6 m-6 bg-white">
                        <p>test</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transaction;
