import React from 'react';
import { useNavigate } from 'react-router-dom';
import images from '../..';

const Practitioner_view_request_detail = () => {
    const navigate = useNavigate();

  return (
    <div className='text-black dark:text-white flex-col mx-auto '>
      <div className='max-w-[800px] mt-[46px] mb-[76px] w-full mx-auto my-auto text-left flex flex-col'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ml-3'>Requests</h1>
        <h1 className='text-green-500 ml-3'>Detail of a particular request</h1>
      </div>


      <div class="relative overflow-x-auto  max-w-[850px] mx-auto">
            <h5 className='text-green-500 ml-3 md:text-3xl font-bold'>Previous Record</h5>
            <table class="w-full text-sm text-left rtl:text-right dark:text-white text-black ">

                <thead class=" text-xs text-gray-500 uppercase bg-white dark:bg-black border-b  border-gray-200 dark:border-gray-800 ">
                    <tr>
                        <th class="px-6 py-3">
                            Date
                        </th>
                        <th class="px-6 py-3">
                            Practitioner
                        </th>
                        <th class="px-6 py-3">
                            Diagnosis
                        </th>
                       
                        <th class="px-6 py-3">
                            AI Diagnoses
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
                            AI [Automated]
                        </td>
                        <td class="px-6 py-4 font-light">
                            Typhoid
                        </td>
                        <td class="px-6 py-4 font-light">
                            Maleria
                        </td>
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
            <table class="w-full text-sm text-left rtl:text-right dark:text-white text-black ">
                <tbody>
                    <tr class="dark:bg-black bg-white border-b  dark:border-gray-900 border-gray-200 hover:dark:bg-gray-900 ">
                    <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                            <img class="w-10 h-10 rounded-full"  src={images.person} alt="user"/>
                            <div class="ps-3">
                                <div class="text-base font-semibold">Muhammad Ali</div>
                                <div class="font-normal text-gray-500">muhammadali@gmail.com</div>
                            </div>  
                        </th>
                        
                    </tr>

 
                </tbody>
            </table>
        </div>

        <div class="relative overflow-x-auto  max-w-[850px] mt-9 mx-auto">
        <table class="w-full text-sm text-left rtl:text-right text-black dark:text-white ">
                <thead class=" text-xs text-gray-500 uppercase dark:bg-black bg-white border-b  dark:border-gray-900 border-gray-200 ">
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
                    <tr class="dark:bg-black bg-white border-b  dark:border-gray-900 border-gray-200 hover:dark:bg-gray-900 ">
                       
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