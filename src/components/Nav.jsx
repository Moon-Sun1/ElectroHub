<<<<<<< HEAD
import React from 'react'
import logo from'../assets/logo.png';
import { useState  } from 'react';
import { FaUser,
         FaHeart,
         FaShoppingCart , } from 'react-icons/fa';
import { Link,NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import Dropdown from '../components/Dropdown'

const Nav = () => {
const [showHamburgerNav,setShowHamburgerNav]=useState(false)

 
  return (
    
   
             
            <div className=' fixed top-0 w-full z-40 flex justify-between  items-center mb-1 px-1 py-2 sm:px[1vh] md:px-[3vh] lg:px[13vh] bg-footer-background'>
                {/* logo */}
                <Link to={"/"} className='flex'>
                <img className='h-12 p-1 sm:h-16' src={logo} alt="" />   
                <h1 className='text-white text-xl font-bold mt-3 sm:text-3xl lg:mt-4 '>Electro<span className='text-main-green  '>Hub</span></h1>
                </Link>

                  {/* SearchBar */}
                <div className=' flex m-auto border rounded-md'>
            
                    <Dropdown />
                    <SearchBar/> 
                </div>
                
                   {/* icons */}
                 {!showHamburgerNav?  <div className='flex gap-2sm:gap-3 md:gap-4 '> 
                    <FaUser          className=' text-gray-300 hover:text-main-green   size-5  md:size-6 lg:size-7 '/>
                    <FaShoppingCart  className=' text-gray-300 hover:text-main-green  size-5  md:size-6 lg:size-7 '/>
                    <FaHeart         className=' text-red-500  hover:text-main-green  size-5  md:size-6 lg:size-7 '/>
                                      </div>
                 ://showHamburgerNav
                 <></>}
          
           </div>
=======
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
>>>>>>> 4399eb5800469442c28a8fd4efeb3d4c26fff57e

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
