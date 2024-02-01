import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlinePlus, AiFillDelete } from 'react-icons/ai';

const Practitioner_edit_case_detail = () => {
    const navigate = useNavigate();

  return (
    <div className='text-black dark:text-white flex-col mx-auto'>
      <div className='max-w-[800px] mt-[46px] mb-[76px] w-full mx-auto my-auto text-left flex flex-col'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Cases</h1>
        <h1 className='text-green-500'>Make Changes to Case</h1>
      </div>

      <div class="relative overflow-x-auto w-[90%] max-w-[850px] mt-9 mx-auto">
                <div class="max-w-xs ml-6 mb-6">
                  <label for="type" class="block mb-2 text-sm font-medium dark:text-white text-black">Case Status</label>
                <div class="relative ">
                  <select class="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500" id="grid-state">
                    <option>Assigned</option>
                    <option>Ongoing</option>
                    <option>Closed</option>
                    <option>Unassigned</option>
                  </select>
                </div>
              </div>

            <table class="w-full text-sm text-left rtl:text-right dark:text-white text-black ">

                <thead class=" text-xs text-gray-500 uppercase bg-white dark:bg-black border-b  border-gray-200 dark:border-gray-800 ">
                    <tr>
                        <th class="px-6 py-3">
                            Patient Name
                        </th>
                        <th class="px-6 py-3">
                            Patient Age
                        </th>
                        <th class="px-6 py-3">
                            Diagnosis
                        </th>
                        <th class="px-6 py-3">
                            Performed by
                        </th>
                    </tr>
                </thead>


                <tbody>
                    <tr class="dark:bg-black bg-white border-b  dark:border-gray-900 border-gray-200 hover:dark:bg-gray-900 ">
                        <th class="px-6 py-4 font-medium">
                            Muhammad Ali
                        </th>
                        <td class="px-6 py-4 font-light">
                            37 years
                        </td>
                        <td class="px-6 py-4 font-light">
                            Typhoid
                        </td>
                        <td class="px-6 py-4 font-light">
                            AI [Automated]
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="relative overflow-x-auto w-[90%] max-w-[850px] mt-9 mx-auto">
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


      <form className='max-w-[800px] mx-auto mt-12'>
          <div class="mb-6 flex-col">

              

              <div class="max-w-xs  mt-6">
                  <label for="type" class="block mb-2 text-sm font-medium dark:text-white text-black">Disease</label>
                <div class="relative ">
                    <input type="text" id="large-input" class="block w-[320px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-green-500 focus:border-green-500 dark:bg-gray-900 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder='Typhoid'/>
                </div>
              </div>
              

              <div>
            <label for="large-input" class="block mt-8 mb-2 text-sm font-medium text-gray-900 dark:text-white">Prescriptions</label>
            <div class="flex flex-row">
            
                <input type="text" id="large-input" class="block w-[350px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-green-500 focus:border-green-500 dark:bg-gray-900 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"/>
                <div class="relative ml-2 ">
                <select class="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500" id="grid-state">
                <option>Diet</option>
                <option>Medicine</option>
                <option>Exercise</option>
                </select>
                </div>

            


            <input type="text" id="large-input" class="ml-2 block w-[120px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-green-500 focus:border-green-500 dark:bg-gray-900 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 " placeholder='Quantity/Detail'/>
            <input type="text" id="large-input" class="ml-2 block w-[120px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-green-500 focus:border-green-500 dark:bg-gray-900 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder='method'/>

            
            <button class="ml-3 max-w-[100px] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border border-green-500 hover:bg-green-400 focus:ring-green-800">
              <AiOutlinePlus/>
            </button>
          </div>

          
          <table class="min-w-[800px] mt-5 text-sm text-left rtl:text-right dark:text-white text-black ">
              <thead class=" text-xs text-gray-500 uppercase bg-white dark:bg-black border-b  border-gray-200 dark:border-gray-800 ">
                  <tr>
                  </tr>
              </thead>
              <tbody>
                  <tr class="dark:bg-black bg-white border-b  dark:border-gray-900 border-gray-200 hover:dark:bg-gray-900 ">
                  <td class="px-3 py-3">
                      <button class="text-gray-700 hover:text-red-500"><AiFillDelete/></button>
                      </td>
                      <td class="px-3 py-3">
                          Rope skipping
                      </td>
                      <td class="px-3 py-3">
                          Exercise
                      </td>
                      <td class="px-3 py-3">
                          20 per day
                      </td>
                      <td class="px-3 py-3">
                        Quick
                      </td>
                  </tr>
                  <tr class="dark:bg-black bg-white border-b  dark:border-gray-900 border-gray-200 hover:dark:bg-gray-900 ">
                  <td class="px-3 py-3">
                      <button class="text-gray-700 hover:text-red-500"><AiFillDelete/></button>
                      </td>
                      <td class="px-3 py-3">
                          Rope skipping
                      </td>
                      <td class="px-3 py-3">
                          Exercise
                      </td>
                      <td class="px-3 py-3">
                          20 per day
                      </td>
                      <td class="px-3 py-3">
                      Quick
                      </td>
                  </tr>
                  <tr class="dark:bg-black bg-white border-b  dark:border-gray-900 border-gray-200 hover:dark:bg-gray-900 ">
                  <td class="px-3 py-3">
                      <button class="text-gray-700 hover:text-red-500"><AiFillDelete/></button>
                      </td>
                      <td class="px-3 py-3">
                          Rope skipping
                      </td>
                      <td class="px-3 py-3">
                          Exercise
                      </td>
                      <td class="px-3 py-3">
                          20 per day
                      </td>
                      <td class="px-3 py-3">
                      Quick
                      </td>
                  </tr>
                  
                 
              </tbody>
          </table>
            
          </div>
          

          <div class="mt-20 flex flex-row">
            <button type="submit" class=" font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center text-white dark:text-black bg-green-500 hover:bg-green-400 focus:ring-green-800">Save Changes</button>
            <button type="button" onClick={() => navigate(-1)} class=" mx-5 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border border-red-600 hover:bg-red-500 hover:border-red-600 focus:ring-green-800">Back</button>
          </div>
          
          </div>
      </form>






    </div>
  )
}

export default Practitioner_edit_case_detail