import logo from "../assets/logo.png";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import SearchBar from "./SearchBar";
import Dropdown from "../components/Dropdown";
import NavIcons from "../components/NavIcons";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const Nav = () => {
  const [visible, setVisble] = useState(true);

  return (
    <div
      className="  font-headline sticky top-0 w-full z-50
                    flex flex-col h-auto justify-center
                   bg-header-background shadow-md  "
    >
      <div
        className="   flex justify-between  items-center p-1  px-1 sm:px-2 md:p-4
    "
      >
        <Link to={"/"} className="flex flex-center items-end h-[100%]">
          <img className="h-10 p-1 sm:h-12" src={logo} alt="" />
          <h1 className="text-xl font-bold  sm:text-3xl lg:mt-4">
            Electro<span className="text-main-green ">Hub</span>
          </h1>
        </Link>

        {/* SearchBar */}
        <div className=" flex m-auto border rounded-md">
          <div className="hidden md:block">
            <Dropdown />
          </div>
          <div className="hidden md:block">
            <SearchBar />
          </div>
        </div>

        {/* icons */}
        <div className="hidden md:block">
          <NavIcons />
        </div>
        {/* small nav */}
        <FaBars
          onClick={() => setVisble(true)}
          className="  text-gray-500 text-4xl block md:hidden"
        />

        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden transition-all bg-slate-200 ${
            visible ? "w-[60%] h-[100vh]  fixed " : "w-0"
          }`}
        >
          <div className="flex flex-col text-black ">
            <div
              onClick={() => {
                setVisble(false);
              }}
              className="flex items-center gap-2 p-3 mt-6 "
            >
              <FaTimes className="ml-4 mr-2 font-bold text-gray-500 text-3xl " />
              <NavIcons />
            </div>
            <div className="flex flex-col ml-9 gap-2 ">
              <NavLink
                className="border   active:bg-gray-400  hover:bg-gray-400"
                onClick={() => setVisble(false)}
                to="/Smartphones"
              >
                Smartphones
              </NavLink>
              <NavLink
                className="border   active:bg-gray-400  hover:bg-gray-400"
                onClick={() => setVisble(false)}
                to="/Laptops"
              >
                Laptops
              </NavLink>
              <NavLink
                className="border   active:bg-gray-400  hover:bg-gray-400"
                onClick={() => setVisble(false)}
                to="/Gaming Center"
              >
                Gaming Center
              </NavLink>
              <NavLink
                className="border   active:bg-gray-400  hover:bg-gray-400"
                onClick={() => setVisble(false)}
                to="/Accessories"
              >
                Accessories
              </NavLink>
              <NavLink
                className="border   active:bg-gray-400  hover:bg-gray-400"
                onClick={() => setVisble(false)}
                to="/Camera"
              >
                Camera
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* SearchBar for samll screan  */}
      <div className="block md:hidden">
        <SearchBar />
      </div>
    </div>
  );
};

export default Nav;
