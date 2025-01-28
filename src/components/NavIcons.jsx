import React, { useState } from 'react'
import { FaUser, FaHeart, FaShoppingCart, FaSlack } from "react-icons/fa";
import { Link } from "react-router-dom";


const NavIcons = () => {
  const [userName,setUserName]=useState("krarr")
  const [email,setEmail]=useState("krar@gmail.co")
  const  [isOpen ,setIsOpen]=useState(false)
  const  [isLogin ,setIsLongin]=useState(false)
  return (
    <div className=" flex md:flex gap-2 sm:gap-3 md:gap-4 bottom-0">
      <Link 
      onMouseEnter={()=>setIsOpen(true)}
       to={"/UserInfo"}
       ><FaUser className=" hover:text-main-green relative  size-5  md:size-6 lg:size-5 cursor-pointer" />
      {/* pop-menu user ingo */}
      {isOpen && (<div 
                 onMouseEnter={() => setIsOpen(true)}
                 onMouseLeave={() => setIsOpen(false)}
                         className=' font-headline font-bold right-10 top-20 rounded-2xl shadow-xl absolute z-10 w-72 h-52 ring-1 ring-gray-500 bg-white  p-7 '>
                          
                          <div className='flex m-auto '> 
                          {isLogin ?
                           <div>
                             <h1>{userName}</h1> 
                             <h1>{email}</h1> 
                             <button onClick={()=>setIsLongin(false)} className='p-3 mt-5 text-white bg-red-500 hover:bg-red-600 rounded-xl'> logout </button>

                             </div> 
                          : <div>
                            <button onClick={()=>setIsLongin(true)} className='p-4 bg-main-green hover:bg-green-600 text-white rounded-xl'> login </button>
                            </div>}
                            </div>
                         </div>)}
      </Link>
      <Link to={"/ShoppingCart"}><FaShoppingCart className="  hover:text-main-green   size-5  md:size-6 lg:size-5 cursor-pointer" /></Link>
      <Link to={"/Heart"}><FaHeart className="  hover:text-main-green   size-5  md:size-6 lg:size-5 cursor-pointer" /></Link>
    </div>
  )
}

export default NavIcons
