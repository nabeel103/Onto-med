import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { Link, Outlet } from 'react-router-dom'
import {AiFillPlusCircle} from 'react-icons/ai'

const Patient_navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
      setNav(!nav)
    }

  return (
    <>
      <div className='flex justify-between items-center h-24 max-w-6xl mx-auto px-4 text-gray-300'>


        {/* FULL BAR  */}
        <h1 className='w-full text-3xl font-bold text-green-500 hover:text-green-400'><Link to = "/patient">OntoMed</Link></h1>
          <ul className='hidden md:flex  '>
            <li className='p-4 dark:hover:text-white hover:text-black whitespace-nowrap'>
              <Link to = "/patient/adddiagnosis">
                <button type='button' class="flex justify-center rounded-lg bg-gray-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white  dark:text-black shadow-sm hover:bg-black dark:hover:bg-white">
                    <AiFillPlusCircle className='mt-1 mr-1 w-4 h-4 my-auto'/>
                    Diagnosis
                </button>
              </Link>
            </li>
            <li className='p-4 dark:hover:text-white hover:text-black mt-1'><Link to = "/patient/history">History</Link></li>
            <li className='p-4 dark:hover:text-white hover:text-black mt-1'><Link to = "/patient/viewreport">Reports</Link></li>
            <li className='p-4 dark:hover:text-white hover:text-black mt-1'><Link to = "/patient/viewprofile">Profile</Link></li>
          </ul>

          
          {/* RESPONSIVE LOGIC  */}
          <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20} /> :  <AiOutlineMenu size={20} />}
          </div>
  
          {/* COLLAPSED BAR  */}
          <div className={nav ? 'fixed  left-0 top-0 w-[60%] h-screen border-r border-r-gray-100 dark:border-r-gray-900 bg-white dark:bg-black  transition-[left]   ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='w-full pt-4 text-3xl font-bold text-green-500 hover:text-green-400 m-4'><Link to = "/patient">OntoMed</Link></h1>
  
            <ul className='pt-12 uppercase p-4 text-gray-300'>
              <li className='p-4 border-b dark:border-gray-600 border-gray-300 text-black dark:hover:text-white hover:text-black whitespace-nowrap'><Link to = "/patient/adddiagnosis" onClick={handleNav}><AiFillPlusCircle className='mt-1 mr-1 w-4 h-4 my-auto'/> Diagnosis</Link></li>
              <li className='p-4 border-b dark:border-gray-600 border-gray-300 text-black dark:hover:text-white hover:text-black'><Link to = "/patient/history" onClick={handleNav}>History</Link></li>
              <li className='p-4 border-b dark:border-gray-600 border-gray-300 text-black dark:hover:text-white hover:text-black'><Link to = "/patient/viewreport">Reports</Link></li>
              <li className='p-4 border-b dark:border-gray-600 border-gray-300 text-black dark:hover:text-white hover:text-black'><Link to = "/patient/viewprofile">Profile</Link></li>
            </ul>
          </div>
          
      </div>
  
      <Outlet />
      </>
  )
}

export default Patient_navbar