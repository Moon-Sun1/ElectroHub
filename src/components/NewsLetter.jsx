import React from 'react'

const NewsLetterjsx = () => {
  return (
    
    <div className='flex  flex-col items-center justify-evenly h-[25vh] bg-white font-body md:px-10 md:flex-row md:justify-between lg:px-60'>
      <div className=' p-2 md:p-5'>
        <h1 className='font-bold  text-2xl md:text-4xl '>Sign Up For NewsLetters</h1>
         <p className='text-sm mt-2'>Get E-mail updates about our lastes shop and <span className='text-main-green'>special offers</span></p>
      </div>

      <div className='p-2'>
        <input type="text" 
        className='p-4 w-[280px] md:w-[350px] outline-none border m-1 lg:w-[550px] rounded-lg '
        placeholder='Yout E-mail Adderss...'/>
        <button  className='text-white rounded-lg  bg-main-green p-4  '>Sign Up</button>
      </div>

    </div>
  )
}

export default NewsLetterjsx
