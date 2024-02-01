import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlinePlus, AiFillDelete } from 'react-icons/ai'

const Knowledgeengr_edit_rule = () => {
  const navigate = useNavigate();

  return (
    <div className='text-black dark:text-white flex-col mx-auto'>
        <div className='max-w-[800px] mt-[46px] mb-[76px] w-full mx-auto my-auto text-left flex flex-col'>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ml-3'>Rules</h1>
            <h1 className='text-green-500 ml-3'>Edit a Rule</h1>
            
        </div>

            
        <form class="max-w-[800px] mt-[46px] mb-[76px] w-full mx-auto my-auto text-left flex flex-col px-3">
          <div>
            <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name of Disease</label>
            <input type="text" id="name" class="text-sm block max-w-sm p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-green-500 focus:border-green-500 dark:bg-gray-900 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"  required />
          </div>
          

          <label for="large-input" class="block mb-2 mt-8 text-sm font-medium text-gray-900 dark:text-white">Add Symptoms</label>

          <div class="flex flex-row">
            <input type="text" id="large-input" class="block w-[350px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-green-500 focus:border-green-500 dark:bg-gray-900 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"/>
            <button type="button" class="ml-3 max-w-[100px] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border border-green-500 hover:bg-green-400 focus:ring-green-800">
              <AiOutlinePlus/>
            </button>
          </div>

          
          <table class="w-full mt-5 text-sm text-left rtl:text-right  ">
              <thead class=" text-xs text-gray-500 uppercase bg-white dark:bg-black border-b  border-gray-200 dark:border-gray-800 ">
                  <tr>
                  </tr>
              </thead>
              <tbody>
              
                  <tr class="dark:bg-black bg-white border-b  dark:border-gray-900 border-gray-200 hover:dark:bg-gray-900 ">
                      <td class="px-3 py-3">
                        <button type='button' class="text-gray-700 hover:text-red-500"><AiFillDelete/></button>
                      </td>
                      <td class="px-3 py-3">
                          Pain in the chest
                      </td>
                  </tr>
                  <tr class="dark:bg-black bg-white border-b  dark:border-gray-900 border-gray-200 hover:dark:bg-gray-900 ">
                      <td class="px-3 py-3">
                      <button type='button' class="text-gray-700 hover:text-red-500"><AiFillDelete/></button>
                      </td>
                      <td class="px-3 py-3">
                          Fever
                      </td>
                  </tr>
                  <tr class="dark:bg-black bg-white border-b  dark:border-gray-900 border-gray-200 hover:dark:bg-gray-900 ">
                      <td class="px-3 py-3">
                      <button type='button' class="text-gray-700 hover:text-red-500"><AiFillDelete/></button>
                      </td>
                      <td class="px-3 py-3">
                          Weakness
                      </td>
                  </tr>
              </tbody>
          </table>


          <label for="large-input" class="block mb-2 mt-8 text-sm font-medium text-gray-900 dark:text-white">Add Questions</label>

          <div class="flex flex-row">
            <input type="text" id="large-input" class="block w-[350px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-green-500 focus:border-green-500 dark:bg-gray-900 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"/>
            <button type="button" class="ml-3 max-w-[100px] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border border-green-500 hover:bg-green-400 focus:ring-green-800">
              <AiOutlinePlus/>
            </button>
          </div>

          
          <table class="w-full mt-5 text-sm text-left rtl:text-right  ">
              <thead class=" text-xs text-gray-500 uppercase bg-white dark:bg-black border-b  border-gray-200 dark:border-gray-800 ">
                  <tr>
                  </tr>
              </thead>
              <tbody>
                  <tr class="dark:bg-black bg-white border-b  dark:border-gray-900 border-gray-200 hover:dark:bg-gray-900 ">
                  <td class="px-3 py-3">
                      <button type='button' class="text-gray-700 hover:text-red-500"><AiFillDelete/></button>
                      </td>
                      <td class="px-3 py-3">
                          What are your daily stress levels?
                      </td>
                  </tr>
                  <tr class="dark:bg-black bg-white border-b  dark:border-gray-900 border-gray-200 hover:dark:bg-gray-900 ">
                  <td class="px-3 py-3">
                      <button type='button' class="text-gray-700 hover:text-red-500"><AiFillDelete/></button>
                      </td>
                      <td class="px-3 py-3">
                          How many siblings do you have?
                      </td>
                  </tr>
              </tbody>
          </table>

          
          <div>
            <label for="large-input" class="block mt-8 mb-2 text-sm font-medium text-gray-900 dark:text-white">Prescriptions</label>
            <div class="flex flex-row">
            
            <input type="text" id="large-input" class="block w-[350px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-green-500 focus:border-green-500 dark:bg-gray-900 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"/>
            <div class="relative ml-2 ">
              <select class="text-sm rounded-lg block w-[100px] p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500" id="grid-state">
              <option>Diet</option>
              <option>Medicine</option>
              <option>Exercise</option>
              </select>
            </div>
            <input type="text" id="large-input" class="ml-2 block w-[135px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-green-500 focus:border-green-500 dark:bg-gray-900 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 " placeholder='Quantity/Detail'/>
            <input type="text" id="large-input" class="ml-2 block w-[120px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-green-500 focus:border-green-500 dark:bg-gray-900 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder='method'/>

            
            <button type="button" class="ml-3 max-w-[100px] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border border-green-500 hover:bg-green-400 focus:ring-green-800">
              <AiOutlinePlus/>
            </button>
          </div>

          
          <table class="w-full mt-5 text-sm text-left rtl:text-right dark:text-white text-black ">
              <thead class=" text-xs text-gray-500 uppercase bg-white dark:bg-black border-b  border-gray-200 dark:border-gray-800 ">
                  <tr>
                  </tr>
              </thead>
              <tbody>
                  <tr class="dark:bg-black bg-white border-b  dark:border-gray-900 border-gray-200 hover:dark:bg-gray-900 ">
                  <td class="px-3 py-3">
                      <button type='button' class="text-gray-700 hover:text-red-500"><AiFillDelete/></button>
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
                      <button type='button' class="text-gray-700 hover:text-red-500"><AiFillDelete/></button>
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
                      <button type='button' class="text-gray-700 hover:text-red-500"><AiFillDelete/></button>
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
          
          <div class="mt-20">
            <button type="submit" class="max-w-[100px] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border border-green-400 hover:bg-green-400 focus:ring-green-800">Confirm</button>
            <button type="button" class="ml-5 max-w-[100px] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border border-red-600 hover:border-red-500 hover:bg-red-500 focus:ring-green-800">Cancel</button>
          </div>
          
        </form>




    </div>
  )
}

export default Knowledgeengr_edit_rule