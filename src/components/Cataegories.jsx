import React from 'react'
import {Link} from 'react-router-dom'
import laptop from '../assets/Categories/laptop.png'
import mobile from '../assets/Categories/mobile.png'
import other from '../assets/Categories/other.png'
import camera from '../assets/Categories/camera.png'
import controller from '../assets/Categories/controller.png'

const Cataegories = () => {
  return (

    <div>
  <h1 className='text-center text-3xl font-serif font-bold m-1 block  '>Cataegories</h1>

  <div className='flex h-[300px] justify-evenly items-center font-semibold md:px-10'>  {/* //div container Cataegories */}
<Link  to={"controller"} className='  rounded-lg  p-2 hover:text-main-green hover:opacity-80 '>
<div className=' bg-white rounded-full'><img className ="w-40 h-24 p-6 sm:h-32 "src={controller} alt="" /></div>
<p className='text-center mt-4  md:text-xl'>controller</p>
</Link> 

<Link  to={"controller"} className='  rounded-full p-2 hover:text-main-green hover:opacity-80'>
<div className=' bg-white rounded-full'><img className ="w-40 h-24 p-4 sm:h-32 "src={laptop} alt="" /></div>
<p className='text-center mt-4 md:text-xl'>Laptop</p>
</Link>

<Link  to={"controller"} className='  rounded-full p-2 hover:text-main-green hover:opacity-80'>
<div className=' bg-white rounded-full'><img className ="w-40 h-24 p-4 sm:h-32 "src={mobile} alt="" /></div>
<p className='text-center mt-4 md:text-xl'>mobile</p>
</Link>

<Link  to={"controller"} className='  rounded-full p-2 hover:text-main-green hover:opacity-80'>
<div className=' bg-white rounded-full'><img className ="w-40 h-24 p-4 sm:h-32 "src={camera} alt="" /></div>
<p className='text-center mt-4 md:text-xl'>camera</p>
</Link>

<Link  to={"controller"} className='  rounded-full p-2 hover:text-main-green hover:opacity-80'>
<div className=' bg-white rounded-full'><img className ="w-40 h-24 p-4 sm:h-32 "src={other} alt="" /></div>
<p className='text-center mt-4 md:text-xl'>other</p>
</Link>
</div>
    </div>
  

  )
}

export default Cataegories
