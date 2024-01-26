import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { Link, Outlet } from 'react-router-dom'



const Practitioner_navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
      setNav(!nav)
    }

  return (
    <>
      <div className='flex justify-between items-center h-24 max-w-6xl mx-auto px-4 text-gray-300'>
          <h1 className='w-full text-3xl font-bold text-green-500 hover:text-green-400'><Link to = "/practitioner">OntoMed</Link></h1>
  
          <ul className='hidden md:flex'>
            <li className='p-4 hover:text-white mt-1'><Link to = "/practitioner/viewrequests">Requests</Link></li>
            <li className='p-4 hover:text-white mt-1'><Link to = "/practitioner/viewcases">Cases</Link></li>
            <li className='p-4 hover:text-white mt-1'><Link to = "/practitioner/viewreports">Reports</Link></li>
            <li className='p-4 hover:text-white mt-1'><Link to = "/practitioner/viewprofile">Profile</Link></li>
          </ul>
  
          <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20} /> :  <AiOutlineMenu size={20} />}
          </div>
  
          <div className={nav ? 'fixed  left-0 top-0 w-[60%] h-screen border-r border-r-gray-900 bg-black transition-[left]   ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='w-full pt-4 text-3xl font-bold text-green-500 hover:text-green-400 m-4'><Link to = "/practitioner">OntoMed</Link></h1>
  
            <ul className='pt-12 uppercase p-4 text-gray-300'>
              <li className='p-4 border-b border-gray-600 hover:text-white whitespace-nowrap'><Link to = "/practitioner/viewrequests" onClick={handleNav}> Requests </Link></li>
              <li className='p-4 border-b border-gray-600 hover:text-white'><Link to = "/practitioner/viewcases" onClick={handleNav}>Cases</Link></li>
              <li className='p-4 border-b border-gray-600 hover:text-white'><Link to = "/practitioner/viewreports">Reports</Link></li>
              <li className='p-4 hover:text-white'><Link to = "/practitioner/viewprofile">Profile</Link></li>
            </ul>
          </div>
          
      </div>
  
      <Outlet />
      </>
  )
}

export default Practitioner_navbar