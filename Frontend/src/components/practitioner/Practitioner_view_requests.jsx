import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillInfoCircle } from 'react-icons/ai';
import images from '../..';

const Practitioner_view_requests = () => {
  return (
    <div className='text-black dark:text-white flex-col mx-auto'>
      <div className='max-w-[800px] mt-[46px] mb-[76px] w-full mx-auto my-auto text-left flex flex-col'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ml-3'>Requests</h1>
        <h1 className='text-green-500 ml-3'>A list of diagnosis requests</h1>
      </div>


      <div class="relative overflow-x-auto  max-w-[1230px] mx-auto">
            <table class="w-full text-sm text-left rtl:text-right dark:text-white text-black ">

                <thead class=" text-xs text-gray-500 uppercase bg-white dark:bg-black border-b  border-gray-200 dark:border-gray-800 ">
                    <tr>
                        <th class="px-6 py-3">
                            Info
                        </th>
                        <th class="px-6 py-3">
                            #
                        </th>
                        <th class="px-6 py-3">
                            Patient
                        </th>
                        <th class="px-6 py-3">
                            Age
                        </th>
                        <th class="px-6 py-3">
                            AI Diagnosis
                        </th>
                        <th class="px-6 py-3">
                            Symptoms
                        </th>
                    </tr>
                </thead>


                <tbody>
                    <tr class="dark:bg-black bg-white border-b  dark:border-gray-900 border-gray-200 hover:dark:bg-gray-900 ">
                    <td class="px-6 py-4 text-right  text-gray-600 hover:text-green-600 ">
                            <Link to = "/practitioner/viewrequestdetail"><AiFillInfoCircle/></Link>
                        </td>
                        <td class="px-6 py-4">
                            1
                        </td>
                        <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                            <img class="w-10 h-10 rounded-full"  src={images.person} alt="user"/>
                            <div class="ps-3">
                                <div class="text-base font-semibold">Muhammad Ali</div>
                                <div class="font-normal text-gray-500">muhammadali@gmail.com</div>
                            </div>  
                        </th>
                        <td class="px-6 py-4 font-medium">
                            37
                        </td>
                        <td class="px-6 py-4 font-medium">
                            Typhoid
                        </td>
                        <td class="px-6 py-4 font-light">
                          High fever, sore body, abdominal pain
                        </td>
                    </tr>

 
                </tbody>
            </table>
        </div>



    </div>
  )
}

export default Practitioner_view_requests