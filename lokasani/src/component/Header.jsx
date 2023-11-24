import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SmsIcon from "@mui/icons-material/Sms";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  return (
    <div className="bg-white p-4 fixed z-10 top-0 w-full">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Home</h1>
        </div>
        <div className="flex items-center gap-5 mr-[255px]">
          <SmsIcon className="text-[#253E8D]" fontSize="large" />
          <NotificationsActiveIcon
            className="text-[#253E8D]"
            fontSize="large"
          />
          <AccountCircleIcon className="text-[#253E8D]" fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Header;
