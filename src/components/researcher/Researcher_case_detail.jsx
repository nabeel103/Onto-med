import React from 'react';
import { AiFillFileImage, AiFillEdit } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const Researcher_case_detail = () => {
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
                            Age
                        </th>
                        <th class="px-6 py-3">
                            Weight
                        </th>
                        <th class="px-6 py-3">
                            Height
                        </th>
                        <th class="px-6 py-3">
                            BMI
                        </th>
                    </tr>
                </thead>


                <tbody>
                    <tr class="bg-black border-b  border-gray-800 hover:bg-gray-900">
                        <th class="px-6 py-4 font-medium">
                            Muhammad Ali
                        </th>
                        <td class="px-6 py-4 font-light">
                            37
                        </td>
                        <td class="px-6 py-4 font-light">
                            78kg
                        </td>
                        <td class="px-6 py-4 font-light">
                            170cm
                        </td>
                        <td class="px-6 py-4 font-light">
                            26
                        </td>
                    </tr>

 
                </tbody>
            </table>
        </div>

        <div class="relative overflow-x-auto w-[90%] max-w-[850px] mt-9 mx-auto">
        <table class="w-full text-sm text-left rtl:text-right text-white">
                <thead class="text-xs text-gray-500 uppercase bg-black border-b  border-gray-800">
                    <tr>
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
                    <tr class="bg-black border-b  border-gray-800 hover:bg-gray-900">
                       
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
                    <tr class="bg-black border-b  border-gray-800 hover:bg-gray-900">
                        
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
                    <tr class="bg-black border-b  border-gray-800 hover:bg-gray-900">
                     
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

        <div class="relative overflow-x-auto w-[90%] max-w-[850px] mt-9 mx-auto">
            <table class="w-full text-sm text-left rtl:text-right text-white ">

                <thead class=" text-xs text-gray-500 uppercase bg-black border-b  border-gray-800 ">
                    <tr>
                        <th class="px-6 py-3">
                            Questions
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr class="bg-black border-b  border-gray-800 hover:bg-gray-900">
                        <th class="px-6 py-4 font-light">
                        What are your daily stress levels?
                        </th>
                    </tr>
                    <tr class="bg-black border-b  border-gray-800 hover:bg-gray-900">
                        <th class="px-6 py-4 font-light">
                        How many siblings do you have?
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
                        <th class="px-6 py-3">
                            Type
                        </th>
                        <th class="px-6 py-3">
                            Amount
                        </th>
                        <th class="px-6 py-3">
                            Method
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr class="bg-black border-b  border-gray-800 hover:bg-gray-900">
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

        <div class="relative overflow-x-auto w-[90%] max-w-[850px] mt-9 mx-auto">
            <label class="px-6 flex w-full text-xs text-left rtl:text-right font-bold text-gray-500 uppercase ">
                Your Rating
            </label>
            <div>
                <h1 class="ml-5 md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
                    10
                </h1>
            </div>
            
        </div>

        <div class="relative overflow-x-auto w-[90%] max-w-[850px] mt-9 mx-auto">
            <button class="px-6 flex w-full text-xs text-left rtl:text-right font-bold text-gray-500 uppercase underline decoration-dotted hover:text-green-500">
                <AiFillFileImage className='mr-2 w-4 h-4 my-auto'/> Download Images
            </button>
        </div>

        <div class="relative overflow-x-auto w-[90%] max-w-[850px] mt-9 mx-auto">
            <Link to ="/researcher/editcasedetail">
            <button class="px-6 flex w-full text-xs text-left rtl:text-right font-bold text-gray-500 uppercase underline decoration-dotted hover:text-green-500">
                <AiFillEdit className='mr-2 w-4 h-4 my-auto'/> Edit Rating
            </button>
            </Link>
        </div>



        <div class="max-w-[800px] mx-auto flex-col mt-20">
                <button type="button" onClick={() => navigate(-1)} class="font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border border-green-600 hover:bg-green-500  focus:ring-green-800">
                    Go Back
                </button>
        </div>


    </div>
  )
}

export default Researcher_case_detail