import React from 'react'
import {AiFillEdit, AiFillDelete, AiFillPlusCircle} from 'react-icons/ai'
import {Link}  from 'react-router-dom';
import images from '../..';


const Admin_view_user = () => {
  return (
    <div className='text-white  flex-col mx-auto'>
        <div className='max-w-[800px] mt-[46px] mb-[76px] w-full mx-auto my-auto text-left flex flex-col'>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Users</h1>
            <h1 className='text-green-500 '>View all Users</h1>
            
        </div>


        <div class="relative overflow-x-auto max-w-[1230px] mx-auto mt-[96px]">
            <div class="content-end">
                <Link to="/admin/adduser">
                    <button type="button" class=" my-5 flex font-light rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border border-gray-300 hover:bg-green-400 hover:border-green-400 focus:ring-green-800">
                        <AiFillPlusCircle className='mr-2 w-4 h-4 my-auto'/> Add User

                    </button>
                </Link>
            </div>
            <table class="w-full text-sm text-left rtl:text-right text-white ">

                <thead class=" text-xs text-gray-500 uppercase bg-black border-b  border-gray-800 ">
                    <tr>
                        <th class="px-6 py-3">
                            #
                        </th>
                        <th class="px-6 py-3">
                            Name
                        </th>
                        <th class="px-6 py-3">
                            Type
                        </th>
                        <th class="px-6 py-3">
                            Phone
                        </th>
                        <th class="px-6 py-3">
                            CNIC
                        </th>
                        <th class="px-6 py-3">
                            Date of Birth
                        </th>
                        <th >
                            <span class="sr-only"><AiFillEdit/></span>
                        </th>
                    </tr>
                </thead>


                <tbody>
                    <tr class="bg-black border-b  border-gray-800 hover:bg-gray-900">
                        <td class="px-6 py-4">
                            1
                        </td>
                        
                        <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                            <img class="w-10 h-10 rounded-full"  src={images.img1} alt="user"/>


                            <div class="ps-3">
                                <div class="text-base font-semibold">Muhammad Ali</div>
                                <div class="font-normal text-gray-500">muhammadali@gmail.com</div>
                            </div>  
                        </th>
                        <th class="px-6 py-4 font-light">
                            Practitioner
                        </th>
                        
                        <td class="px-6 py-4">
                            352027493759
                        </td>
                        <td class="px-6 py-4">
                            8/22/02
                        </td>
                        <td class="px-6 py-4">
                            muhammadali@gmail.com
                        </td>
                        <td class="px-6 py-4 text-right  text-gray-600 hover:text-green-600 ">
                            <Link to = "/Admin/edituser"><AiFillEdit/></Link>
                        </td>
                        <td class="px-6 py-4 text-right text-gray-600 hover:text-red-600">
                            <AiFillDelete/>
                        </td>
                        
                    </tr>
                    

                </tbody>
            </table>
        </div>


    </div>
  )
}

export default Admin_view_user