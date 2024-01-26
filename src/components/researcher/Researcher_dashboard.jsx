import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillInfoCircle } from 'react-icons/ai';

const Researcher_dashboard = () => {
  return (
    <div className='text-white  flex-col mx-auto'>
        <div className='max-w-[800px] mt-[46px] mb-[76px] w-full mx-auto my-auto text-left flex flex-col'>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>3,435</h1>
            <h1 className='text-green-500 '>Cases reviewed in past 30 days</h1>
        </div>


        <div class="relative overflow-x-auto max-w-[800px] mx-auto mt-[23px]">
            <table class="w-full text-sm text-left rtl:text-right text-white ">
                <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-100 bg-gray-900">
                    Cases

                    <p class="mt-1 text-sm font-normal text-gray-400">A log of your most recently reviewed cases.</p>
                </caption>

                <thead class=" text-xs text-gray-500 uppercase bg-black border-b  border-gray-800 ">
                    <tr>
                        <th class="px-6 py-3">
                            #
                        </th>
                        <th class="px-6 py-3">
                            Diagnosis
                        </th>
                        <th class="px-6 py-3">
                            Symptoms
                        </th>
                        <th class="px-6 py-3">
                            Rating
                        </th>
                        <th class="px-6 py-3">
                            Status
                        </th>
                        <th class="px-6 py-3">
                            Detail
                        </th>
                    </tr>
                </thead>


                <tbody>
                    <tr class="bg-black border-b  border-gray-800 hover:bg-gray-900">
                        
                        <td class="px-6 py-4">
                            1
                        </td>
                        <td class="px-6 py-4 font-medium">
                            Typhoid
                        </td>
                        <th class="px-6 py-4 font-light">
                            High fever, sore body, abdominal pain
                        </th>
                        <td class="px-6 py-4 font-light">
                        <div class="flex items-center">
                                <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> 
                                9.7
                            </div>
                        </td>
                        <td class="px-6 py-4 font-light">
                            <div class="flex items-center">
                                <div class="h-2.5 w-2.5 rounded-full bg-orange-500 me-2"></div> 
                                In Progress
                            </div>
                        </td>
                        <td class="px-6 py-4 text-right  text-gray-600 hover:text-green-600 ">
                            <Link to = "/researcher/casedetail"><AiFillInfoCircle/></Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>




    </div>
  )
}

export default Researcher_dashboard