import React from 'react'
import laptop from '../assets/Categories/laptop.png'
import mobile from '../assets/Categories/mobile.png'
import other from '../assets/Categories/other.png'
import camera from '../assets/Categories/camera.png'
import controller from '../assets/Categories/controller.png'

const Cataegories = () => {
  return (
     <div className=' bg-white flex  px-5 h-[300px] justify-evenly items-center '> 
   
      <div className='  rounded-full p-2 hover:text-main-green hover:opacity-80'>
      <img className ="w-32 h-20 sm:h-32"src={controller} alt="" />
      <p className='text-center mt-4'>controller</p>
      </div>

      <div className='  rounded-full p-2 hover:text-main-green hover:opacity-80'>
      <img className ="w-32 h-20 sm:h-32"src={laptop} alt="" />
      <p className='text-center mt-4 '>Laptop</p>
      </div>

      <div className='  rounded-full p-2 hover:text-main-green hover:opacity-80'>
      <img className ="w-32 h-20 sm:h-32"src={mobile} alt="" />
      <p className='text-center mt-4'>mobile</p>
      </div>

      <div className='  rounded-full p-2 hover:text-main-green hover:opacity-80'>
      <img className ="w-32 h-20 sm:h-32"src={camera} alt="" />
      <p className='text-center mt-4'>camera</p>
      </div>
   
      <div className='  rounded-full p-2 hover:text-main-green hover:opacity-80'>
      <img className ="w-32 h-20 sm:h-32" src={other} alt="" />
      <p className='text-center mt-4'>other</p>
      </div>
      
     </div>
  )
}

export default Cataegories
