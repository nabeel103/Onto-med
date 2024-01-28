import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'


const Patient_add_diagosis = () => {
  return (
    <div className='text-white  flex-col mx-auto'>
        <div className='max-w-[800px] mt-[46px] mb-[76px] w-full mx-auto my-auto text-left flex flex-col'>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Diagnosis</h1>
            <h1 className='text-green-500 '>Request new diagnosis</h1>
            
        </div>

            
        <form class="max-w-[800px] mt-[46px] mb-[76px] w-full mx-auto my-auto text-left flex flex-col">
            <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Symptoms</label>

            <div class="flex flex-row">
              <input type="text" id="large-input" class="block w-[350px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-green-500 focus:border-green-500 dark:bg-gray-900 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"/>
              <button class="ml-3 max-w-[100px] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border border-green-500 hover:bg-green-400 focus:ring-green-800">
                <AiOutlinePlus/>
              </button>
            </div>

           
            <table class="min-w-[800px] mt-5 text-sm text-left rtl:text-right text-white ">
                <thead class=" text-xs text-gray-500 uppercase bg-black border-b  border-gray-800 ">
                    <tr>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-black border-b  border-gray-800 hover:bg-gray-900">
                        <td class="px-3 py-3">
                            Pain in the chest
                        </td>
                    </tr>
                    <tr class="bg-black border-b  border-gray-800 hover:bg-gray-900">
                        <td class="px-3 py-3">
                            Fever
                        </td>
                    </tr>
                    <tr class="bg-black border-b  border-gray-800 hover:bg-gray-900">
                        <td class="px-3 py-3">
                            Weakness
                        </td>
                    </tr>
                </tbody>
            </table>

            <label class="mt-10 block mb-2 text-sm font-medium text-gray-900 dark:text-white " for="multiple_files">Add Images</label>
            <div class="px-3 max-w-[425px] grid grid-cols-2 gap-1">
                <label class="font-bold">Face:</label>
                <input class="block w-full py-1 text-sm border-gray-300 rounded-lg cursor-pointer  text-gray-400 focus:outline-none bg-gray-900 dark:border-gray-800 dark:placeholder-gray-400" id="multiple_files" type="file" multiple required/>
                <label class="font-bold">Nails:</label>
                <input class="block w-full py-1 text-sm border-gray-300 rounded-lg cursor-pointer  text-gray-400 focus:outline-none bg-gray-900 dark:border-gray-800 dark:placeholder-gray-400" id="multiple_files" type="file" multiple required/>
                <label class="font-bold">Hands:</label>
                <input class="block w-full py-1 text-sm border-gray-300 rounded-lg cursor-pointer  text-gray-400 focus:outline-none bg-gray-900 dark:border-gray-800 dark:placeholder-gray-400" id="multiple_files" type="file" multiple required/>
                <label class="font-bold">Other:</label>
                <input class="block w-full py-1 text-sm border-gray-300 rounded-lg cursor-pointer  text-gray-400 focus:outline-none bg-gray-900 dark:border-gray-800 dark:placeholder-gray-400" id="multiple_files" type="file" multiple/>
            </div>


            <label class="mt-10 block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="multiple_files">Select Practitioners</label>



            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-white">
        <thead class="text-xs text-gray-500 uppercase bg-black border-b  border-gray-800">
            <tr>
                <th scope="col" class="p-4">
                  <AiOutlinePlus/>
                </th>
                <th scope="col" class="px-6 py-3">
                    Practitioner name
                </th>
                <th scope="col" class="px-6 py-3">
                    Specialization
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Address
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr class="bg-black border-b  border-gray-800 hover:bg-gray-900">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Hakeem Muhammad Ali Hajvery
                </th>
                <td class="px-6 py-4">
                    Child Specialist
                </td>
                <td class="px-6 py-4">
                    Senior
                </td>
                <td class="px-6 py-4">
                    UET, GT Road, Lahore
                </td>
            </tr>
            
        </tbody>
        <tbody>
            <tr class="bg-black border-b  border-gray-800 hover:bg-gray-900">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Hakeem Muhammad Ali Hajvery
                </th>
                <td class="px-6 py-4">
                    Child Specialist
                </td>
                <td class="px-6 py-4">
                    Senior
                </td>
                <td class="px-6 py-4">
                    UET, GT Road, Lahore
                </td>
            </tr>
            
        </tbody>
        <tbody>
            <tr class="bg-black border-b  border-gray-800 hover:bg-gray-900">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Hakeem Muhammad Ali Hajvery
                </th>
                <td class="px-6 py-4">
                    Child Specialist
                </td>
                <td class="px-6 py-4">
                    Senior
                </td>
                <td class="px-6 py-4">
                    UET, GT Road, Lahore
                </td>
            </tr>
            
        </tbody>
    </table>
</div>


            <button type="submit" class="mt-10 max-w-[100px] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-green-500 hover:bg-green-400 focus:ring-green-800">Request</button>


            
        </form>




    </div>
  )
}

export default Patient_add_diagosis