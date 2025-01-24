import React from 'react'
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";

const NavIcons = () => {
  return (
    <div className=" hidden md:flex gap-2 sm:gap-3 md:gap-4 bottom-0">
    <FaUser className="  hover:text-main-green   size-5  md:size-6 lg:size-5 cursor-pointer" />
    <FaShoppingCart className="  hover:text-main-green  size-5  md:size-6 lg:size-5 cursor-pointer" />
    <FaHeart className="   hover:text-red-500  size-5  md:size-6 lg:size-5 cursor-pointer" />
    </div>
  )
}

export default NavIcons
