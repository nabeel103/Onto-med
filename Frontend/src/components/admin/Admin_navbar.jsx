import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { Link, Outlet } from 'react-router-dom'

const Admin_navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
      setNav(!nav)
    }
  
    return (
      <>
      <div className='flex justify-between items-center h-24 max-w-[1230px] mx-auto px-4 text-black dark:text-white'>
          <h1 className='w-full text-3xl font-bold text-green-500 hover:text-green-400'><Link to = "/admin">OntoMed</Link></h1>
  
          <ul className='hidden md:flex'>
            <li className='p-4 dark:hover:text-white hover:text-black'><Link to = "/admin/viewuser">Users</Link></li>
            <li className='p-4 dark:hover:text-white hover:text-black'><Link to = "/admin/viewactivity">Activites</Link></li>
            <li className='p-4 dark:hover:text-white hover:text-black'><Link to = "/admin/viewreport">Reports</Link></li>
            <li className='p-4 dark:hover:text-white hover:text-black whitespace-nowrap'><Link to = "/">Sign out</Link></li>
          </ul>
  
          <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20} /> :  <AiOutlineMenu size={20} />}
          </div>
  
          <div className={nav ? 'fixed left-0 top-0 w-[60%] h-screen border-r border-r-gray-100 dark:border-r-gray-900 bg-white dark:bg-black transition-[left] ease-in-out duration-500 z-50' : 'fixed left-[-100%]'}>
            <h1 className='w-full pt-4 text-3xl font-bold text-green-500 hover:text-green-400 m-4'><Link to = "/admin">OntoMed</Link></h1>
  
            <ul className='pt-12 uppercase p-4 text-gray-300 '>
              <li className='p-4 border-b dark:border-gray-600 border-gray-300 text-black dark:text-white dark:hover:text-white hover:text-black'><Link to = "/admin/viewuser" onClick={handleNav}>Users</Link></li>
              <li className='p-4 border-b dark:border-gray-600 border-gray-300 text-black dark:text-white dark:hover:text-white hover:text-black'><Link to = "/admin/viewactivity" onClick={handleNav}>Activites</Link></li>
              <li className='p-4 border-b dark:border-gray-600 border-gray-300 text-black dark:text-white dark:hover:text-white hover:text-black'><Link to = "/admin/viewreport" onClick={handleNav}>Reports</Link></li>
              <li className='p-4 dark:hover:text-white hover:text-black'><Link to = "/" onClick={handleNav}>Sign out</Link></li>
            </ul>
          </div>
          
      </div>
  
      <Outlet />
      </>
    )
}

export default Admin_navbar