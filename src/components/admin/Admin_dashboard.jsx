import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillClockCircle, AiFillCalendar } from 'react-icons/ai'

const Admin_dashboard = () => {
  return (
    <div className='text-black dark:text-white  flex-col mx-auto'>
        <div className='max-w-[800px] mt-[46px] mb-[76px] w-full mx-auto px-3 my-auto text-left flex flex-col'>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>3,607</h1>
            <h1 className='text-green-500 '>Diagnoses took place in the last 30 days</h1>
        </div>


        <div class="relative overflow-x-auto max-w-[800px] mx-auto mt-[23px]">
            <table class="w-full text-sm text-left rtl:text-right text-black dark:text-white ">
                <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 dark:text-gray-100 dark:bg-gray-900 bg-gray-100">
                    Statistics

                    <p class="mt-1 text-sm font-normal text-gray-400">Overall system statistics.</p>
                </caption>

                <tbody>
                    <tr class="dark:bg-black bg-white border-b  dark:border-gray-900 border-gray-200 hover:dark:bg-gray-900 ">
                        <td class="px-6 py-4">
                            2000
                        </td>
                        <td class="px-6 py-4 font-medium">
                            Total Patients
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr class="dark:bg-black bg-white border-b  dark:border-gray-900 border-gray-200 hover:dark:bg-gray-900 ">
                        <td class="px-6 py-4">
                            44
                        </td>
                        <td class="px-6 py-4 font-medium">
                            Total Practitioners
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr class="dark:bg-black bg-white border-b  dark:border-gray-900 border-gray-200 hover:dark:bg-gray-900 ">
                        <td class="px-6 py-4">
                            37
                        </td>
                        <td class="px-6 py-4 font-medium">
                            Knowledge Engineers
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr class="dark:bg-black bg-white border-b  dark:border-gray-900 border-gray-200 hover:dark:bg-gray-900 ">
                        <td class="px-6 py-4">
                            1657
                        </td>
                        <td class="px-6 py-4 font-medium">
                            Rules
                        </td>
                    </tr>
                </tbody>
            </table>

            
        </div>





        <div class="relative overflow-x-auto max-w-[800px] mx-auto mt-[40px]">
            <table class="w-full text-sm text-left rtl:text-right text-black dark:text-white ">
                <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 dark:text-gray-100 dark:bg-gray-900 bg-gray-100">
                    Activities
                    <p class="mt-1 text-sm font-normal text-gray-400">The most recent activities at a glance.</p>
                </caption>

                <thead class=" text-xs text-gray-500 uppercase dark:bg-black bg-white border-b  dark:border-gray-900 border-gray-200 ">
                    <tr>
                        <th class="px-6 py-3">
                            <AiFillCalendar/>
                        </th>
                        <th class="px-6 py-3">
                            <AiFillClockCircle/>
                        </th>
                        <th class="px-6 py-3">
                            Activity
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr class="dark:bg-black bg-white border-b  dark:border-gray-900 border-gray-200 hover:dark:bg-gray-900 ">
                        <td class="px-6 py-4">
                            11/02/2023
                        </td>
                        <th class="px-6 py-4 font-light">
                            2:03
                        </th>
                        <td class="px-6 py-4 font-medium">
                            Muhammad Asim's case concluded by Hakeem Ali Hajvery
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr class="dark:bg-black bg-white border-b  dark:border-gray-900 border-gray-200 hover:dark:bg-gray-900 ">
                        <td class="px-6 py-4">
                            11/02/2023
                        </td>
                        <th class="px-6 py-4 font-light">
                            2:07
                        </th>
                        <td class="px-6 py-4 font-medium">
                            Rule added by Hakeem Muhammad Johar
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr class="dark:bg-black bg-white border-b  dark:border-gray-900 border-gray-200 hover:dark:bg-gray-900 ">
                        <td class="px-6 py-4">
                            11/02/2023
                        </td>
                        <th class="px-6 py-4 font-light">
                            2:10
                        </th>
                        <td class="px-6 py-4 font-medium">
                            Shafqat Ullah created account as patient
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr class="dark:bg-black bg-white border-b  dark:border-gray-900 border-gray-200 hover:dark:bg-gray-900 ">
                        <td class="px-6 py-4">
                            11/02/2023
                        </td>
                        <th class="px-6 py-4 font-light">
                            2:17
                        </th>
                        <td class="px-6 py-4 font-medium">
                            Mohsin Ghani requested diagnosis
                        </td>
                    </tr>
                </tbody>

                
                
            </table>
        </div>



    </div>
  )
}

export default Admin_dashboard