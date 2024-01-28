import React from 'react'
import { AiFillClockCircle, AiFillCalendar } from 'react-icons/ai'

const Admin_view_activity = () => {
  return (
    <div className='text-white  flex-col mx-auto'>
        <div className='max-w-[800px] mt-[46px] mb-[76px] w-full mx-auto my-auto text-left flex flex-col'>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Activities</h1>
            <h1 className='text-green-500 '>View all Activities</h1>
        </div>


        <div class="relative overflow-x-auto max-w-[850px] mx-auto mt-[96px]">
        <table class="w-full text-sm text-left rtl:text-right text-white ">
                <thead class=" text-xs text-gray-500 uppercase bg-black border-b  border-gray-800 ">
                    <tr>
                        <th class="px-6 py-3">
                            <AiFillCalendar/>
                        </th>
                        <th class="px-6 py-3">
                            <AiFillClockCircle/>
                        </th>
                        <th class="px-6 py-3">
                            Actor
                        </th>
                        <th class="px-6 py-3">
                            Activity
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr class="bg-black border-b  border-gray-800 hover:bg-gray-900">
                        <td class="px-6 py-4">
                            11/02/2023
                        </td>
                        <th class="px-6 py-4 font-light">
                            2:03
                        </th>
                        <td class="px-6 py-4 font-medium">
                            Practitioner
                        </td>
                        <td class="px-6 py-4 font-light">
                            Muhammad Asim's case concluded by Hakeem Ali Hajvery
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr class="bg-black border-b  border-gray-800 hover:bg-gray-900">
                        <td class="px-6 py-4">
                            11/02/2023
                        </td>
                        <th class="px-6 py-4 font-light">
                            2:07
                        </th>
                        <td class="px-6 py-4 font-medium">
                            Knowledge Engr
                        </td>
                        <td class="px-6 py-4 font-light">
                            Rule added by Hakeem Muhammad Johar
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr class="bg-black border-b  border-gray-800 hover:bg-gray-900">
                        <td class="px-6 py-4">
                            11/02/2023
                        </td>
                        <th class="px-6 py-4 font-light">
                            2:10
                        </th>
                        <td class="px-6 py-4 font-medium">
                            Patient
                        </td>
                        <td class="px-6 py-4 font-light">
                            Shafqat Ullah created account as patient
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr class="bg-black border-b  border-gray-800 hover:bg-gray-900">
                        <td class="px-6 py-4">
                            11/02/2023
                        </td>
                        <th class="px-6 py-4 font-light">
                            2:17
                        </th>
                        <td class="px-6 py-4 font-medium">
                            Patient
                        </td>
                        <td class="px-6 py-4 font-light">
                            Mohsin Ghani requested diagnosis
                        </td>
                    </tr>
                </tbody>

                
                
            </table>
        </div>


    </div>
  )
}

export default Admin_view_activity