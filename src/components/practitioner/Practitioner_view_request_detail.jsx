import React from 'react';
import { useNavigate } from 'react-router-dom';

const Practitioner_view_request_detail = () => {
    const navigate = useNavigate();

  return (
    <div className='text-white  flex-col mx-auto'>
      <div className='max-w-[800px] mt-[46px] mb-[76px] w-full mx-auto my-auto text-left flex flex-col'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Requests</h1>
        <h1 className='text-green-500 '>Detail of a particular request</h1>
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



        <div class="max-w-[800px] mx-auto flex-col-6 mt-20">  
            <button type="button" class="font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border border-green-600 hover:bg-green-500  focus:ring-green-800">
                Accept Case
            </button>

            
            <button type="button" onClick={() => navigate(-1)} class="ml-6 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border border-gray-600 hover:bg-gray-500  focus:ring-green-800">
                Go Back
            </button>
        </div>


    </div>
  )
}

export default Practitioner_view_request_detail