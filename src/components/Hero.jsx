import React from 'react'
import Typed from 'react-typed';
import {Link}  from 'react-router-dom';

const Hero = () => {
  return (
    <div className='text-white max-w-[1130px] mx-auto my-20'>
      <div className='mt-[145px] text-left flex flex-col'>

        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-3'>Unani Medicine Diagnostics.</h1>
        <p className='text-green-500 font-bold  uppercase'>Based on semantic web</p>

        <div className='flex py-2 mt-9'>
          <p className='md:text-3xl sm:text-4xl text-xl font-bold'>A tool for</p>
          <Typed 
          className='md:text-3xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
          strings={['Disease diagnosis', 'Knowledge Management', 'Unani Medicine Research']}
          typeSpeed={90}
          backSpeed={60}
          loop
          />
        </div>

        <p className='md:text-xl text-xl font-bold text-gray-500 max-w-3xl'>
          Connecting patients to practitioners, using semantic web technology to aid in diagnosis and a knowledge-base for researchers
        </p>
        

        <Link to = "/login">
        <button className='bg-green-500 hover:bg-green-400 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>
          Get Started
        </button>
        </Link>

        
      </div>
    </div>
  )
}

export default Hero