import React from 'react'
import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <div>
      <nav className='flex  justify-center items-center gap-4 font-bold'>
       <NavLink to="/">Home</NavLink>
       <NavLink to="/about">About</NavLink>
       <NavLink to="/products">products</NavLink>
      </nav>
    </div>
  )
}

export default Nav
