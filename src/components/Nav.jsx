import logo from "../assets/logo.png";
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import SearchBar from "./SearchBar";
import Dropdown from "../components/Dropdown";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="font-headline sticky top-0 w-full z-50 flex justify-between  items-center mb-8 px-10 py-3 sm:px[1vh] md:px-[3vh] lg:px-10 bg-header-background shadow-md">
      <Link to={"/"} className="flex flex-center items-end h-[100%]">
        <img className="h-12 p-1 sm:h-12" src={logo} alt="" />
        <h1 className="text-xl font-bold mt-3 sm:text-3xl lg:mt-4">
          Electro<span className="text-main-green  ">Hub</span>
        </h1>
      </Link>

      {/* SearchBar */}
      <div className=" flex m-auto border rounded-md">
        <Dropdown />
        <SearchBar />
      </div>

      {/* icons */}
      <div className="flex gap-2 sm:gap-3 md:gap-4 ">
        <FaUser className="  hover:text-main-green   size-5  md:size-6 lg:size-5 cursor-pointer" />
        <FaShoppingCart className="  hover:text-main-green  size-5  md:size-6 lg:size-5 cursor-pointer" />
        <FaHeart className="   hover:text-main-green  size-5  md:size-6 lg:size-5 cursor-pointer" />
      </div>
    </div>
  );
};

export default Nav;
