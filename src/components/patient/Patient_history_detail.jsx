import React from 'react';
import { AiFillFileImage, AiFillDelete } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const Patient_history_detail = () => {
    const navigate = useNavigate();
  return (
    <div className='text-black dark:text-white flex-col mx-auto'>
      <div className='max-w-[800px] mt-[46px] mb-[76px] w-full mx-auto my-auto text-left flex flex-col'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ml-3'>History</h1>
        <h1 className='text-green-500 ml-3'>Diagnosis detail</h1>
      </div>


      <div class="relative overflow-x-auto  max-w-[850px] mx-auto">
            <table class="w-full text-sm text-left rtl:text-right dark:text-white text-black ">

                <thead class=" text-xs text-gray-500 uppercase bg-white dark:bg-black border-b  border-gray-200 dark:border-gray-800 ">
                    <tr>
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
                        <th class="px-6 py-4 font-medium">
                            8/22/20
                        </th>
                        <td class="px-6 py-4 font-light">
                            Typhoid
                        </td>
                        <td class="px-6 py-4 font-light">
                            AI [Automated]
                        </td>
                        <td class="px-6 py-4 font-light">
                            <div class="flex items-center">
                                <div class="h-2.5 w-2.5 rounded-full bg-orange-500 me-2"></div> 
                                In Progress
                            </div>
                        </td>
                    </tr>

 
                </tbody>
            </table>
        </div>

        <div class="relative overflow-x-auto  max-w-[850px] mt-9 mx-auto">
        <table class="w-full text-sm text-left rtl:text-right text-black dark:text-white ">
                <thead class=" text-xs text-gray-500 uppercase dark:bg-black bg-white border-b  dark:border-gray-900 border-gray-200 ">
                    <tr>
                        <th scope="col" class="p-4">
                        <AiFillDelete/>
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Symptom
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Intensity
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Is in family
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="dark:bg-black bg-white border-b  dark:border-gray-900 border-gray-200 hover:dark:bg-gray-900 ">
                        <td class="w-4 p-4">
                        <button class="text-gray-500 hover:text-red-600">
                            <AiFillDelete/>
                        </button>
                        </td>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Pain in abdomen
                        </th>
                        <td class="px-6 py-4">
                            5
                        </td>
                        <td class="px-6 py-4">
                            Yes
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr class="dark:bg-black bg-white border-b  dark:border-gray-900 border-gray-200 hover:dark:bg-gray-900 ">
                        <td class="w-4 p-4">
                        <button class="text-gray-500 hover:text-red-600">
                            <AiFillDelete/>
                        </button>
                        </td>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Headache
                        </th>
                        <td class="px-6 py-4">
                            2
                        </td>
                        <td class="px-6 py-4">
                            No
                        </td>
                    </tr>
                </tbody><tbody>
                    <tr class="dark:bg-black bg-white border-b  dark:border-gray-900 border-gray-200 hover:dark:bg-gray-900 ">
                        <td class="w-4 p-4">
                        <button class="text-gray-500 hover:text-red-600">
                            <AiFillDelete/>
                        </button>
                        </td>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Fever
                        </th>
                        <td class="px-6 py-4">
                            5
                        </td>
                        <td class="px-6 py-4">
                            Yes
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="relative overflow-x-auto  max-w-[850px] mt-9 mx-auto">
            <table class="w-full text-sm text-left rtl:text-right dark:text-white text-black ">

                <thead class=" text-xs text-gray-500 uppercase bg-white dark:bg-black border-b  border-gray-200 dark:border-gray-800 ">
                    <tr>
                        <th class="px-6 py-3">
                            Prescription
                        </th>
                        <th class="px-6 py-3">
                            Type
                        </th>
                        <th class="px-6 py-3">
                            Quantity/Detail
                        </th>
                        <th class="px-6 py-3">
                            Method
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr class="dark:bg-black bg-white border-b  dark:border-gray-900 border-gray-200 hover:dark:bg-gray-900 ">
                        <th class="px-6 py-4 font-light">
                        Rope skipping	
                        </th>
                        <th class="px-6 py-4 font-light">
                        Exercise
                        </th>
                        <th class="px-6 py-4 font-light">
                        20 per day
                        </th>
                        <th class="px-6 py-4 font-light">
                        Quick

                        </th>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="relative overflow-x-auto  max-w-[850px] mt-9 mx-auto">
            <button class="px-6 flex w-full text-xs text-left rtl:text-right font-bold text-gray-500 uppercase underline decoration-dotted">
                <AiFillFileImage className='mr-2 w-4 h-4 my-auto'/> Download Images
            </button>
        </div>

        <div class="max-w-[800px] mx-auto flex-col mt-20">
                <button type="button" onClick={() => navigate(-1)}  class="font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border border-green-600 hover:bg-green-500  focus:ring-green-800">
                    Go Back
                </button>
        </div>


    </div>
  )
}

export default Patient_history_detail