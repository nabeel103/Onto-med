import React from 'react'
import { useNavigate } from 'react-router-dom'

const Practitioner_edit_case_detail = () => {
    const navigate = useNavigate();

  return (
    <div className='text-white  flex-col mx-auto'>
      <div className='max-w-[800px] mt-[46px] mb-[76px] w-full mx-auto my-auto text-left flex flex-col'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Cases</h1>
        <h1 className='text-green-500'>Make Changes to Case</h1>
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
                            Diagnosis
                        </th>
                        <th class="px-6 py-3">
                            Performed by
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
                            Typhoid
                        </td>
                        <td class="px-6 py-4 font-light">
                            AI [Automated]
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="relative overflow-x-auto w-[90%] max-w-[850px] mt-3 mx-auto">
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


      <form className='max-w-[800px] mx-auto mt-12'>
          <div class="mb-6 flex-col">

              <div class="max-w-xs  ">
                  <label for="type" class="block mb-2 text-sm font-medium text-white">Status</label>
                <div class="relative ">
                  <select class="text-sm rounded-lg block w-full p-2.5 bg-gray-900 border-gray-800 placeholder-gray-400 text-white focus:ring-green-500 focus:border-green-500" id="grid-state">
                    <option>Assigned</option>
                    <option>Ongong</option>
                    <option>Closed</option>
                    <option>Unassigned</option>
                  </select>
                </div>
              </div>
              

            <div class="mt-6">
                <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prescription</label>
                <input type="text" id="large-input" class="block w-full p-20 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-green-500 focus:border-green-500 dark:bg-gray-900 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" required/>
            </div>
            
          </div>
          
          <button type="submit" class=" font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-green-500 hover:bg-green-400 focus:ring-green-800">Save Changes</button>
          
         <button type="button" onClick={() => navigate(-1)} class=" mx-5 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border border-red-600 hover:bg-red-500 hover:border-red-600 focus:ring-green-800">Back</button>

          
      </form>






    </div>
  )
}

export default Practitioner_edit_case_detail