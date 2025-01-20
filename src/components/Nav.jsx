import React from 'react'
import logo from'../assets/logo.png';
import { FaUser,
         FaHeart,
         FaShoppingCart , } from 'react-icons/fa';
import { Link,NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import Dropdown from '../components/Dropdown'

const Nav = () => {


 
  return (
    
   
             
            <div className=' flex justify-between  items-center mb-1 px-1 py-2 sm:px[1vh] md:px-[3vh] lg:px[13vh] bg-footer-background'>
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
                <div className='flex gap-2 sm:gap-3 md:gap-4 '> 
                    <FaUser          className='  text-gray-300 hover:text-main-green   size-5  md:size-6 lg:size-7 '/>
                    <FaShoppingCart  className=' text-gray-300 hover:text-main-green  size-5  md:size-6 lg:size-7 '/>
                    <FaHeart         className=' text-red-500 hover:text-main-green  size-5  md:size-6 lg:size-7 '/>
                </div>
           </div>

  )
}

export default Nav
{/* <li>Smartphones</li>
            <li>Laptops</li>
            <li>Gaming</li>
            <li>Accessories</li>
            <li>Camera</li> */}