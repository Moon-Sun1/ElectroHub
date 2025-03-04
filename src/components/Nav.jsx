import logo from "../assets/logo.png";
import {
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaRegUser,
} from "react-icons/fa";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import profileImg from "../assets/gohgst.webp";

// Constants
const USER_DATA = {
  name: "Goghst",
  email: "Goghst@gmail.co",
  profileImg: profileImg,
};

// Subcomponents
const Logo = () => (
  <Link to={"/"} className="flex items-end h-[100%]">
    <img className="h-10 p-1 sm:h-12" src={logo} alt="Logo" />
    <h1 className="text-xl font-bold sm:text-3xl lg:mt-4">
      Electro<span className="text-main-green">Hub</span>
    </h1>
  </Link>
);

const UserInfo = ({ isLogin, setIsLogin }) => {
  const [isOpenMenuHover, setIsOpenMenuHover] = useState(false);

  return (
    <div
      className="w-8"
      onMouseEnter={() => setIsOpenMenuHover(true)}
      onMouseLeave={() => setIsOpenMenuHover(false)}
    >
      <FaRegUser className="hover:text-main-green relative size-5 md:size-6 lg:size-5 cursor-pointer" />
      {isOpenMenuHover && (
        <div
          className="font-headline transition-opacity duration-700 ease-in-out font-bold right-24 top-10 rounded-2xl shadow-xl shadow-black absolute z-10 w-80 h-60 bg-white p-7 hidden md:block"
          onMouseEnter={() => setIsOpenMenuHover(true)}
          onMouseLeave={() => setIsOpenMenuHover(false)}
        >
          <div className="flex">
            <Link to={"/"} className="flex items-center mr-5">
              <img className="h-7" src={logo} alt="Logo" />
              <h1 className="font-bold">
                Electro<span className="text-main-green">Hub</span>
              </h1>
            </Link>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-500 hover:text-red-600 rounded-xl"
            >
              {isLogin ? "Sign out" : "Sign in"}
            </button>
          </div>
          <div className="flex m-auto">
            {isLogin ? (
              <div className="flex m-auto mt-16">
                <img
                  className="w-16 rounded-full mr-6"
                  src={USER_DATA.profileImg}
                  alt="Profile"
                />
                <div>
                  <h1>{USER_DATA.name}</h1>
                  <p className="text-gray-500">{USER_DATA.email}</p>
                  <Link
                    to="MangeAccount"
                    className="text-blue-600 hover:text-main-green cursor-pointer"
                  >
                    Manage Account
                  </Link>
                </div>
              </div>
            ) : (
              <div className="mt-16 m-auto">
                <h1 className="font-bold">Guest</h1>
                <p className="text-gray-500">You don't have an account</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const NavIcons = () => (
  <div className="flex gap-2 sm:gap-3 md:gap-4">
    <Link to={"/ShoppingCart"}>
      <FaShoppingCart className="hover:text-main-green size-5 md:size-6 lg:size-5 cursor-pointer" />
    </Link>
    <Link to={"/Heart"}>
      <FaHeart className="hover:text-main-green size-5 md:size-6 lg:size-5 cursor-pointer" />
    </Link>
  </div>
);

const MobileMenu = ({ visible, setVisible, isLogin, setIsLogin }) => (
  <div
    className={`absolute top-0 right-0 bottom-0 overflow-x-hidden transition-all bg-slate-200 lg:hidden ${
      visible ? "w-[40vh] h-[100vh] fixed" : "w-0"
    }`}
  >
    <div className="flex flex-col gap-3 pl-5 py-5 pb-10">
      <FaTimes
        onClick={() => setVisible(false)}
        className="font-bold text-gray-500 text-3xl block"
      />
      <div className="block lg:hidden">
        <div className="w-[60vh] h-[100vh] z-40 bg-slate-200">
          <div className="flex">
            {isLogin ? (
              <div className="flex mt-5 flex-col">
                <img
                  className="w-20 h-20 rounded-full mr-4"
                  src={USER_DATA.profileImg}
                  alt="Profile"
                />
                <div className="flex flex-col gap-2 mt-5 text-left text-xl">
                  <h1>{USER_DATA.name}</h1>
                  <p className="text-gray-500">{USER_DATA.email}</p>
                  <Link
                    to="MangeAccount"
                    className="text-blue-600 hover:text-main-green"
                  >
                    Manage Account
                  </Link>
                </div>
              </div>
            ) : (
              <div className="mt-16">
                <h1 className="font-bold">Guest</h1>
                <p className="text-gray-500">You don't have an account</p>
              </div>
            )}
          </div>

          {isLogin ? (
            <button
              onClick={() => setIsLogin(false)}
              className="text-blue-500 text-xl hover:text-red-600 rounded-xl block my-4"
            >
              Sign out
            </button>
          ) : (
            <button
              onClick={() => setIsLogin(true)}
              className="text-blue-500 text-xl hover:text-main-green rounded-xl block m-5"
            >
              Sign in
            </button>
          )}

          <hr className="h-1 w-full bg-gray-400" />

          {isLogin && (
            <div className="flex flex-col gap-3 text-xl my-3">
              <NavLink
                className="border active:bg-gray-400 hover:bg-gray-300 rounded-xl"
                onClick={() => setVisible(false)}
                to="/ShoppingCart"
              >
                Cart
                <FaShoppingCart className="cursor-pointer inline text-center ml-2" />
              </NavLink>

              <NavLink
                className="border active:bg-gray-400 hover:bg-gray-300 rounded-xl"
                onClick={() => setVisible(false)}
                to="/Favorites"
              >
                Favorites
                <FaHeart className="cursor-pointer inline text-center ml-2" />
              </NavLink>

              <NavLink
                className="border active:bg-gray-400 hover:bg-gray-300 rounded-xl"
                onClick={() => setVisible(false)}
                to="/Smartphones"
              >
                Smartphones
              </NavLink>

              <NavLink
                className="border active:bg-gray-400 hover:bg-gray-300 rounded-xl"
                onClick={() => setVisible(false)}
                to="/Laptops"
              >
                Laptops
              </NavLink>

              <NavLink
                className="border active:bg-gray-400 hover:bg-gray-300 rounded-xl"
                onClick={() => setVisible(false)}
                to="/Gaming Center"
              >
                Gaming Center
              </NavLink>

              <NavLink
                className="border active:bg-gray-400 hover:bg-gray-300 rounded-xl"
                onClick={() => setVisible(false)}
                to="/Accessories"
              >
                Accessories
              </NavLink>

              <NavLink
                className="border active:bg-gray-400 hover:bg-gray-300 rounded-xl"
                onClick={() => setVisible(false)}
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
);

// Main Nav Component
const Nav = () => {
  const [visible, setVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="font-headline sticky top-0 w-full z-40 flex flex-col h-auto justify-center bg-header-background shadow-md">
      <div className="flex justify-between items-center p-1 px-1 sm:px-2 md:p-4">
        <Logo />
        <div className="flex m-auto border rounded-md">
          <div className="hidden lg:block">
            <Dropdown />
          </div>
          <div className="hidden md:block">
            <SearchBar />
          </div>
        </div>
        <div className="hidden  lg:flex justify-center">
          <UserInfo isLogin={isLogin} setIsLogin={setIsLogin} />
          <NavIcons />
        </div>
        <FaBars
          onClick={() => setVisible(true)}
          className="text-gray-500 text-4xl block lg:hidden"
        />
        <MobileMenu
          visible={visible}
          setVisible={setVisible}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
        />
      </div>
      <div className="block md:hidden">
        <SearchBar />
      </div>
    </div>
  );
};

export default Nav;
