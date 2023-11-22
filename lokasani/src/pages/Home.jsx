import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import Penjualan from "../component/Penjualan";
import ChartPenghasilan from "../component/ChartPenghasilan";
import GrafikBulanan from "../component/GrafikBulanan";
import Prospek from "../component/Prospek";
import Statistik from "../component/Statistik";

const Home = () => {
    return (
        <div className="bg-[#F2F2F2]">
            <div className="flex">
                <div>
                    <Sidebar />
                </div>
                <div className="w-full pl-[255px]">
                    <div>
                        <Header />
                    </div>
					<div className="flex gap-6 pt-20 px-5">
						<div className="w-2/5">
							<Penjualan />
						</div>
						<div className="w-3/5">
							<Statistik/>
						</div>
					</div>
                    <div className="flex gap-6 w-full px-5 mt-6">
                        <div className="w-2/5">
                            <div>
                                <GrafikBulanan />
                            </div>
                            <div>
                                <Prospek />
                            </div>
                        </div>
						<div className="w-3/5">
							<ChartPenghasilan />
						</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
