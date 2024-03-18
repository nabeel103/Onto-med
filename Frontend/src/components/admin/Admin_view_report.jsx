import React from 'react'
import {AiFillSave} from 'react-icons/ai'


const Admin_view_report = () => {
  return (
    <div className='dark:text-white text-black  flex-col mx-auto'>
        <div className='max-w-[800px] mt-[46px] mb-[76px] w-full mx-auto my-auto text-left flex flex-col'>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ml-3'>Reports</h1>
            <h1 className='text-green-500 ml-3'>View all Reports</h1>
            
        </div>


        <div class="relative overflow-x-auto max-w-[850px] mx-auto mt-[96px]">
        <table class="w-full text-sm text-left rtl:text-right text-black dark:text-white ">

        <thead class=" text-xs text-gray-500 uppercase dark:bg-black bg-white border-b  dark:border-gray-900 border-gray-200 ">
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
                <tr class="dark:bg-black bg-white border-b  dark:border-gray-900 border-gray-200 hover:dark:bg-gray-900 ">
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
                <tbody>
                <tr class="dark:bg-black bg-white border-b  dark:border-gray-900 border-gray-200 hover:dark:bg-gray-900 ">
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
                <tbody>
                <tr class="dark:bg-black bg-white border-b  dark:border-gray-900 border-gray-200 hover:dark:bg-gray-900 ">
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
                <tbody>
                <tr class="dark:bg-black bg-white border-b  dark:border-gray-900 border-gray-200 hover:dark:bg-gray-900 ">
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

export default Admin_view_report