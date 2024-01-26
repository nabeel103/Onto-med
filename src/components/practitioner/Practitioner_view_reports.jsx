import React from 'react'
import { AiFillSave } from 'react-icons/ai'

const Practitioner_view_reports = () => {
  return (
    <div className='text-white  flex-col mx-auto'>
        <div className='max-w-[800px] mt-[46px] mb-[76px] w-full mx-auto my-auto text-left flex flex-col'>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Reports</h1>
            <h1 className='text-green-500 '>View all Reports</h1>
            
        </div>


        <div class="relative overflow-x-auto max-w-[850px] mx-auto mt-[96px]">
            <table class="w-full text-sm text-left rtl:text-right text-white ">

                <thead class=" text-xs text-gray-500 uppercase bg-black border-b  border-gray-800 ">
                    <tr>
                        <th class="px-6 py-3">
                            #
                        </th>
                        <th class="px-6 py-3">
                            Type
                        </th>
                        <th class="px-6 py-3">
                            Description
                        </th>
                    </tr>
                </thead>


                <tbody>
                    <tr class="bg-black border-b  border-gray-800 hover:bg-gray-900">
                        <td class="px-6 py-4">
                            1
                        </td>
                        <th class="px-6 py-4 font-light">
                            Diagnostic
                        </th>
                        <td class="px-6 py-4 font-bold">
                            Diagnoses that took place in the last 30 days
                        </td>
                        <td class="px-6 py-4 text-right  text-gray-600 hover:text-green-600 ">
                            <AiFillSave/>
                        </td>
                        
                    </tr>
                    

                </tbody>
            </table>
        </div>


    </div>
  )
}

export default Practitioner_view_reports