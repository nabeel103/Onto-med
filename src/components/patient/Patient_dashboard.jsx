import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillInfoCircle } from 'react-icons/ai';

const Patient_dashboard = () => {
  return (
    <div className='text-white  flex-col mx-auto'>
        <div className='max-w-[800px] mt-[46px] mb-[76px] w-full mx-auto my-auto text-left flex flex-col'>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Welcome</h1>
            <h1 className='text-green-500 '>We hope you're having a nice day</h1>
        </div>


        <div class="relative overflow-x-auto max-w-[800px] mx-auto mt-[23px]">
            <table class="w-full text-sm text-left rtl:text-right text-white ">
                <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-100 bg-gray-900">
                    Diagnoses

                    <p class="mt-1 text-sm font-normal text-gray-400">An overview of the progress of your most recent diagnoses.</p>
                </caption>

                <thead class=" text-xs text-gray-500 uppercase bg-black border-b  border-gray-800 ">
                    <tr>
                        <th class="px-6 py-3">
                            Info
                        </th>
                        <th class="px-6 py-3">
                            #
                        </th>
                        <th class="px-6 py-3">
                            Diagnosis
                        </th>
                        <th class="px-6 py-3">
                            Date
                        </th>
                        <th class="px-6 py-3">
                            Performed by
                        </th>
                        <th class="px-6 py-3">
                            Status
                        </th>
                    </tr>
                </thead>


                <tbody>
                    <tr class="bg-black border-b  border-gray-800 hover:bg-gray-900">
                        <td class="px-6 py-4 text-right  text-gray-600 hover:text-green-600 ">
                            <Link to = "/patient/historydetail"><AiFillInfoCircle/></Link>
                        </td>
                        <td class="px-6 py-4">
                            1
                        </td>
                        <td class="px-6 py-4 font-medium">
                            Typhoid
                        </td>
                        <th class="px-6 py-4 font-light">
                            8/02/23
                        </th>
                        <td class="px-6 py-4 font-light">
                            Hakeem Ali Hajvery
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





        <div class="relative overflow-x-auto max-w-[800px] mx-auto mt-[40px]">
            <table class="w-full text-sm text-left rtl:text-right text-white ">
                <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-100 bg-gray-900">
                    Prescriptions
                    <p class="mt-1 text-sm font-normal text-gray-400">A list of all your active prescriptions.</p>
                </caption>

                <thead class=" text-xs text-gray-500 uppercase bg-black border-b  border-gray-800 ">
                    <tr>
                        <th class="px-6 py-3">
                            Info
                        </th>
                        <th class="px-6 py-3">
                            #
                        </th>
                        <th class="px-6 py-3">
                            Illness
                        </th>
                        <th class="px-6 py-3">
                            Prescription
                        </th>
                    </tr>
                </thead>


                <tbody>
                    <tr class="bg-black border-b  border-gray-800 hover:bg-gray-900">
                    <td class="px-6 py-4 text-right  text-gray-600 hover:text-green-600 ">
                            <Link to = "/patient/historydetail"><AiFillInfoCircle/></Link>
                        </td>
                        <td class="px-6 py-4">
                            1
                        </td>
                        
                        <th class="px-6 py-4 font-medium">
                            Typhoid
                        </th>
                        <td class="px-6 py-4 font-light">
                        Ciprofloxacin 500 mg, take one tablet orally every 12 hours for a duration of 14 days. Additionally, maintain adequate hydration with oral rehydration solutions and consume easily digestible foods. 
                        </td>
                    </tr>
                    <tr class="bg-black border-b  border-gray-800 hover:bg-gray-900">
                    <td class="px-6 py-4 text-right  text-gray-600 hover:text-green-600 ">
                            <Link to = "/patient/historydetail"><AiFillInfoCircle/></Link>
                        </td>
                        <td class="px-6 py-4">
                            1
                        </td>
                        
                        <th class="px-6 py-4 font-medium">
                            Typhoid
                        </th>
                        <td class="px-6 py-4 font-light">
                        Ciprofloxacin 500 mg, take one tablet orally every 12 hours for a duration of 14 days. Additionally, maintain adequate hydration with oral rehydration solutions and consume easily digestible foods. 
                        </td>
                    </tr>
                    <tr class="bg-black border-b  border-gray-800 hover:bg-gray-900">
                    <td class="px-6 py-4 text-right  text-gray-600 hover:text-green-600 ">
                            <Link to = "/patient/historydetail"><AiFillInfoCircle/></Link>
                        </td>
                        <td class="px-6 py-4">
                            1
                        </td>
                        
                        <th class="px-6 py-4 font-medium">
                            Typhoid
                        </th>
                        <td class="px-6 py-4 font-light">
                        Ciprofloxacin 500 mg, take one tablet orally every 12 hours for a duration of 14 days. Additionally, maintain adequate hydration with oral rehydration solutions and consume easily digestible foods. 
                        </td>
                    </tr>
                    <tr class="bg-black border-b  border-gray-800 hover:bg-gray-900">
                    <td class="px-6 py-4 text-right  text-gray-600 hover:text-green-600 ">
                            <Link to = "/patient/historydetail"><AiFillInfoCircle/></Link>
                        </td>
                        <td class="px-6 py-4">
                            1
                        </td>
                        
                        <th class="px-6 py-4 font-medium">
                            Typhoid
                        </th>
                        <td class="px-6 py-4 font-light">
                        Ciprofloxacin 500 mg, take one tablet orally every 12 hours for a duration of 14 days. Additionally, maintain adequate hydration with oral rehydration solutions and consume easily digestible foods. 
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>



    </div>

  )
}

export default Patient_dashboard