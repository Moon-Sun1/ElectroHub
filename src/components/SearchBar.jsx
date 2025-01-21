import React from 'react'
import { FaSearch } from 'react-icons/fa';


const SearchBar = () => {
  return (
    <div className='font-headline flex m-auto'>
 
      <input 
      className=' pl-2 h-12 w-26   outline-none   '
       placeholder='..Search here'
        type="text" />
      <button className='  text-sm px-1 text-center h-12   bg-body-background  '>
        <FaSearch className='inline-block '/>Search
      </button>
    </div>

  )
}

export default SearchBar
