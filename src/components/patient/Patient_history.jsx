import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillInfoCircle } from 'react-icons/ai';

const Patient_history = () => {
  return (
    <div className='text-black dark:text-white  flex-col mx-auto'>
      <div className='max-w-[800px] mt-[46px] mb-[76px] w-full mx-auto my-auto text-left flex flex-col'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>History</h1>
        <h1 className='text-green-500 '>A list of all cases</h1>
      </div>


      <div class="relative overflow-x-auto w-[90%] max-w-[1230px] mx-auto">
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
                            Date
                        </th>
                        <th class="px-6 py-3">
                            Diagnosis
                        </th>
                        <th class="px-6 py-3">
                            Practitioner
                        </th>
                        <th class="px-6 py-3">
                            Status
                        </th>
                    </tr>
                </thead>


                <tbody>
                    <tr class="dark:bg-black bg-white border-b  dark:border-gray-900 border-gray-200 hover:dark:bg-gray-900 ">
                    <td class="px-6 py-4 text-right  text-gray-600 hover:text-green-600 ">
                            <Link to = "/patient/historydetail"><AiFillInfoCircle/></Link>
                        </td>
                        <td class="px-6 py-4">
                            1
                        </td>
                        
                        <th class="px-6 py-4 font-medium">
                            8/22/20
                        </th>
                        <td class="px-6 py-4 font-light">
                            Typhoid
                        </td>
                        <td class="px-6 py-4 font-light">
                            Hakeem Allah Ditta
                        </td>
                        <td class="px-6 py-4 font-light">
                            <div class="flex items-center">
                                <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> 
                                Concluded
                            </div>
                        </td>
                    </tr>

 
                </tbody>
            </table>
        </div>



    </div>
  )
}

export default Patient_history