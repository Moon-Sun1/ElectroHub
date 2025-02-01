import logo from "../assets/logo.png";
import {
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import SearchBar from "./SearchBar";
import Dropdown from "../components/Dropdown";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import profileImg from "../assets/gohgst.webp";
const Nav = () => {
  const [visible, setVisble] = useState(false); //if true return Hubrger  icon else return colse{X icon} icone
  const [isOpenMenuHover, setIsOpenMenuHover] = useState(false); //menu hover for User Info
  const [userName, setUserName] = useState("Goghst");
  const [email, setEmail] = useState("Goghst@gmail.co");
  const [isLogin, setIsLongin] = useState(true);

  return (
    <div
      className="  font-headline sticky top-0 w-full z-40
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

        {/* icons lg*/}
        <div className="hidden md:block">
          <div className=" flex md:flex gap-2 sm:gap-3 md:gap-4 bottom-0">
            <div onMouseEnter={() => setIsOpenMenuHover(true)} to={"#"}>
              {" "}
              <FaUser className=" hover:text-main-green relative  size-5  md:size-6 lg:size-5 cursor-pointer" />
              {/*  user info for lg:screans pop-menu*/}
              {isOpenMenuHover && (
                <div
                  onMouseEnter={() => setIsOpenMenuHover(true)}
                  onMouseLeave={() => setIsOpenMenuHover(false)}
                  className=" font-headline font-bold right-10 top-20 rounded-2xl shadow-xl shadow-black absolute z-10 w-80 h-60  bg-white  p-7 hidden md:block"
                >
                  <div className="flex  ">
                    <Link to={"/"} className=" flex items-center mr-5 ">
                      <img className="h-7" src={logo} alt="" />
                      <h1 className="font-bold ">
                        Electro<span className="text-main-green ">Hub</span>
                      </h1>
                    </Link>
                    {isLogin ? (
                      <button
                        onClick={() => setIsLongin(false)}
                        className=" text-blue-500 hover:text-red-600 rounded-xl"
                      >
                        Sign out <faSignOutAlt className="text-xl" />
                      </button>
                    ) : (
                      <button
                        onClick={() => setIsLongin(true)}
                        className=" text-blue-500 hover:text-main-green rounded-xl"
                      >
                        Sign in <faSignInAlt />
                      </button>
                    )}
                  </div>
                  <div className="flex  m-auto ">
                    {isLogin ? (
                      <div className="flex m-auto mt-16">
                        <img
                          className="w-16 rounded-full mr-6"
                          src={profileImg}
                          alt=""
                        />

                        <div>
                          <h1>{userName}</h1>
                          <p className="text-gray-500">{email}</p>
                          <p className="text-blue-600 hover:text-main-green">
                            MangeAcont
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className=" mt-16 m-auto">
                        <h1 className="font-bold    ">Gust</h1>
                        <p className="text-gray-500">You dont have Account </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <Link to={"/ShoppingCart"}>
              <FaShoppingCart className="  hover:text-main-green   size-5  md:size-6 lg:size-5 cursor-pointer" />
            </Link>
            <Link to={"/Heart"}>
              <FaHeart className="  hover:text-main-green   size-5  md:size-6 lg:size-5 cursor-pointer" />
            </Link>
          </div>
        </div>

        {/* small nav */}
        <FaBars
          onClick={() => setVisble(true)}
          className="  text-gray-500 text-4xl block md:hidden"
        />

        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden transition-all bg-slate-200 md:hidden ${
            visible ? "w-[60%] h-[100vh]  fixed " : "w-0"
          }`}
        >
          {/* user info for small screans */}

          {/* ------------------------------------------------------------- */}
          <div className="flex flex-col gap-3 m-10">
            <FaTimes
              onClick={() => {
                setVisble(false);
              }}
              className="font-bold mb-4 text-gray-500 text-4xl block "
            />
            {/* ---------sm:logo -------- */}
            <div className=" block md:hidden">
              <div className="w-[60vh] h-[100vh] z-40 bg-slate-200 ">
                <div className="flex   ">
                  {/* isLogin */}
                  {isLogin ? (
                    <div className="flex  mt-5 flex-col  ">
                      <img
                        className="w-20  h-20 rounded-full mr-4"
                        src={profileImg}
                        alt=""
                      />

                      <div className=" flex flex-col gap-2 mt-5 text-left  text-xl ">
                        <h1>{userName}</h1>
                        <p className="text-gray-500">{email}</p>
                        <Link className="text-blue-600 hover:text-main-green">
                          Mange Account
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className=" mt-16">
                      <h1 className="font-bold    ">Gust</h1>
                      <p className="text-gray-500">You dont have Account </p>
                    </div>
                  )}
                </div>

                {isLogin ? (
                  <button
                    onClick={() => setIsLongin(false)}
                    className=" text-blue-500 text-xl hover:text-red-600 rounded-xl block my-4"
                  >
                    Sign out
                  </button>
                ) : (
                  <button
                    onClick={() => setIsLongin(true)}
                    className=" text-blue-500 text-xl hover:text-main-green rounded-xl block m-5"
                  >
                    Sign in
                  </button>
                )}
                <hr className="h-1 w-full bg-gray-400 " />
                {isLogin && (
                  <div className="flex flex-col  gap-3 text-xl my-3">
                    <NavLink
                      className="border   active:bg-gray-400  hover:bg-gray-400"
                      onClick={() => setVisble(false)}
                      to="/card"
                    >
                      Cart
                      <FaShoppingCart className=" cursor-pointer inline text-center ml-2" />
                    </NavLink>

                    <NavLink
                      className="border   active:bg-gray-400  hover:bg-gray-400"
                      onClick={() => setVisble(false)}
                      to="/Favorites"
                    >
                      Favorites
                      <FaHeart className=" cursor-pointer inline text-center ml-2" />
                    </NavLink>

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
                )}
              </div>
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
