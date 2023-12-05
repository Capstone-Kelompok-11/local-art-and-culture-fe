import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CustomerDetail = () => (
  <div className="w-[469px] h-[309px] p-6 bg-white rounded-xl flex flex-col justify-start items-start gap-8 ml-5">
    <div>
      <div className="text-black text-2xl font-semibold font-['Plus Jakarta Sans'] leading-9">
        Detail Customer
      </div>
      <div className="flex-col justify-start items-start gap-6">
        <div className="flex items-center gap-6 mt-6">
          <img
            className="w-12 h-12 rounded-full"
            src="https://s3-alpha-sig.figma.com/img/8541/c87f/30438bdf0b093c59ceb0ab8f1d4f69f4?Expires=1702857600&Signature=Y~1GZwFMCvgVD0mVgH9WDJ0tlSe70uAiYNr-i4xvTAtU7rcCkPi7IjmYZR4kWTXlq5RLnf~0As6TKS3sb9jlB2J351vx20wjpIi7bK~MY~GV1KN29FadN~JB03WpnEbZNJ6D3LAhF0n5e5LcJ1p1D7k8vuj9hPX8kZ7g5kwDMRIo1VvpwDODcOnu29Zr4LOZ9kLV5-27ejDTs9tSzZ~-ZEv2WCFmUYmn0bpg4Zi3d2R8ktaGzlR7HUMKg613xCvvB~woDHsj~NovvTgcECHzP9~lhQAvUyLyxhqvau5Tf257Yv1bIG~r60koX7aWWR4JjaDrZY5PcDJIQb9aiYWXew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="User Avatar"
          />
          <div className="flex-col">
            <div className="text-blue-800 text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
              Syifa Hadju
            </div>
            <div className="text-blue-800 text-sm font-normal font-['Plus Jakarta Sans'] leading-[21px]">
              User ID: #005
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-start gap-2.5">
            <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mt-4">
              <ShoppingCartIcon className="text-white w-6 h-6" />
            </div>
          </div>
          <div className="text-blue-800 text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
            9 Pesanan
          </div>
        </div>
        <div className="flex-col gap-2 mt-7">
          <div className="text-blue-800 text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
            Info Kontak
          </div>
          <div className="flex-col gap-1">
            <div className="text-blue-800 text-sm font-normal font-['Plus Jakarta Sans'] leading-[21px]">
              Email: syifahadju11@gmail.com
            </div>
            <div className="text-blue-800 text-sm font-normal font-['Plus Jakarta Sans'] leading-[21px]">
              Phone: +62 867 5678 9876
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CustomerDetail;
