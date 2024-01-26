import React from 'react';
import { AiFillFileImage, AiFillEdit } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const Practitioner_case_detail = () => {
    const navigate = useNavigate();

  return (
    <div className='text-white  flex-col mx-auto'>
      <div className='max-w-[800px] mt-[46px] mb-[76px] w-full mx-auto my-auto text-left flex flex-col'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Cases</h1>
        <h1 className='text-green-500 '>Detail of a particular case</h1>
      </div>


      <div class="relative overflow-x-auto w-[90%] max-w-[850px] mx-auto">
            <table class="w-full text-sm text-left rtl:text-right text-white ">

                <thead class=" text-xs text-gray-500 uppercase bg-black border-b  border-gray-800 ">
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
                    <tr class="bg-black border-b  border-gray-800 hover:bg-gray-900">
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

        <div class="relative overflow-x-auto w-[90%] max-w-[850px] mt-9 mx-auto">
            <table class="w-full text-sm text-left rtl:text-right text-white ">

                <thead class=" text-xs text-gray-500 uppercase bg-black border-b  border-gray-800 ">
                    <tr>
                        <th class="px-6 py-3">
                            Patient Name
                        </th>
                        <th class="px-6 py-3">
                            Patient Age
                        </th>
                        <th class="px-6 py-3">
                            Phone Number
                        </th>
                        <th class="px-6 py-3">
                            Email
                        </th>
                    </tr>
                </thead>


                <tbody>
                    <tr class="bg-black border-b  border-gray-800 hover:bg-gray-900">
                        <th class="px-6 py-4 font-medium">
                            Muhammad Ali
                        </th>
                        <td class="px-6 py-4 font-light">
                            37 years
                        </td>
                        <td class="px-6 py-4 font-light">
                            03001234567
                        </td>
                        <td class="px-6 py-4 font-light">
                            muhammadali@gmail.com
                        </td>
                    </tr>

 
                </tbody>
            </table>
        </div>

        <div class="relative overflow-x-auto w-[90%] max-w-[850px] mt-9 mx-auto">
            <table class="w-full text-sm text-left rtl:text-right text-white ">

                <thead class=" text-xs text-gray-500 uppercase bg-black border-b  border-gray-800 ">
                    <tr>
                        <th class="px-6 py-3">
                            Symptoms
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr class="bg-black border-b  border-gray-800 hover:bg-gray-900">
                        <th class="px-6 py-4 font-light">
                        High fever, sore body, abdominal pain
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="relative overflow-x-auto w-[90%] max-w-[850px] mt-9 mx-auto">
            <table class="w-full text-sm text-left rtl:text-right text-white ">

                <thead class=" text-xs text-gray-500 uppercase bg-black border-b  border-gray-800 ">
                    <tr>
                        <th class="px-6 py-3">
                            Prescription
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr class="bg-black border-b  border-gray-800 hover:bg-gray-900">
                        <th class="px-6 py-4 font-light">
                        Ciprofloxacin 500 mg, take one tablet orally every 12 hours for a duration of 14 days. Additionally, maintain adequate hydration with oral rehydration solutions and consume easily digestible foods.

                        </th>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="relative overflow-x-auto w-[90%] max-w-[850px] mt-9 mx-auto">
            <button class="px-6 flex w-full text-xs text-left rtl:text-right font-bold text-gray-500 uppercase underline decoration-dotted">
                <AiFillFileImage className='mr-2 w-4 h-4 my-auto'/> Download Images
            </button>
        </div>

        <div class="relative overflow-x-auto w-[90%] max-w-[850px] mt-9 mx-auto">
            <Link to ="/practitioner/editcasedetail">
            <button class="px-6 flex w-full text-xs text-left rtl:text-right font-bold text-gray-500 uppercase underline decoration-dotted">
                <AiFillEdit className='mr-2 w-4 h-4 my-auto'/> Make Changes
            </button>
            </Link>
        </div>



        <div class="max-w-[800px] mx-auto flex-col mt-20">
            
            <Link to="/practitioner/viewcases">
                <button type="button" onClick={() => navigate(-1)} class="font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border border-green-600 hover:bg-green-500  focus:ring-green-800">
                    Go Back
                </button>
            </Link>
        </div>


    </div>
  )
}

export default Practitioner_case_detail