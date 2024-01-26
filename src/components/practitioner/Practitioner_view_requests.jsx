import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillInfoCircle } from 'react-icons/ai';

const Practitioner_view_requests = () => {
  return (
    <div className='text-white  flex-col mx-auto'>
      <div className='max-w-[800px] mt-[46px] mb-[76px] w-full mx-auto my-auto text-left flex flex-col'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Requests</h1>
        <h1 className='text-green-500 '>A list of diagnosis requests</h1>
      </div>


      <div class="relative overflow-x-auto w-[90%] max-w-[1230px] mx-auto">
            <table class="w-full text-sm text-left rtl:text-right text-white ">

                <thead class=" text-xs text-gray-500 uppercase bg-black border-b  border-gray-800 ">
                    <tr>
                        <th class="px-6 py-3">
                            Info
                        </th>
                        <th class="px-6 py-3">
                            #
                        </th>
                        <th class="px-6 py-3">
                            Date
                        </th>
                        <th class="px-6 py-3">
                            AI Diagnosis
                        </th>
                        <th class="px-6 py-3">
                            Patient
                        </th>
                        <th class="px-6 py-3">
                            Symptoms
                        </th>
                    </tr>
                </thead>


                <tbody>
                    <tr class="bg-black border-b  border-gray-800 hover:bg-gray-900">
                    <td class="px-6 py-4 text-right  text-gray-600 hover:text-green-600 ">
                            <Link to = "/practitioner/viewrequestdetail"><AiFillInfoCircle/></Link>
                        </td>
                        <td class="px-6 py-4">
                            1
                        </td>
                        
                        <th class="px-6 py-4 font-light">
                            8/22/20
                        </th>
                        <td class="px-6 py-4 font-medium">
                            Typhoid
                        </td>
                        <td class="px-6 py-4 font-light">
                            Muhammad Ali
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