import React from 'react'
import Typed from 'react-typed';
import {Link}  from 'react-router-dom';
import images from '..';

const Hero = () => {
  return (
    <div className='text-black bg-white dark:bg-black dark:text-white max-w-[1130px] mx-auto my-20 px-5'>



      <section class="">
    <div class="grid max-w-screen-xl py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl text-black dark:text-white">OntoMed</h1>
            <p className='text-green-500 font-bold  uppercase'>unani medicine diagnostics</p>
            <div className='flex py-2 mt-9'>
          <p className='md:text-3xl sm:text-4xl text-xl font-bold'>A tool for</p>
          <Typed 
          className='md:text-3xl sm:text-4xl text-xl font-bold pl-2'
          strings={['Disease diagnosis', 'Knowledge Management', 'Unani Medicine Research']} typeSpeed={90} backSpeed={60} loop
          />
        </div>
        <p className='md:text-xl text-xl font-medium text-gray-500 max-w-3xl'>
          Connecting patients to practitioners, using semantic web technology to aid in diagnosis and a knowledge-base for researchers
        </p>
        

        <Link to = "/login">
          <button className='bg-green-500 hover:bg-green-400 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white '>
            Get Started
          </button>
        </Link>

        </div>
        <div class="hidden lg:mt-0 max-h-65 w-65 justify-center lg:col-span-5 lg:flex">
          <img class="rotate rounded-full"  src={images.arabesque2} alt="user"/>
        </div>                
    </div>
</section>

    </div>
  )
}

export default Hero