import React from 'react'


const Knowledgeengr_add_rule = () => {
  return (
    <div className='text-white  flex-col mx-auto'>
        <div className='max-w-[800px] mt-[46px] mb-[76px] w-full mx-auto my-auto text-left flex flex-col'>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Rules</h1>
            <h1 className='text-green-500 '>Add a new rule to knowledge-base</h1>
            
        </div>

            
        <form class="max-w-[800px] mt-[46px] mb-[76px] w-full mx-auto my-auto text-left flex flex-col">
          <div>
            <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name of Illness</label>
            <input type="text" id="name" class="text-sm rounded-lg block max-w-sm p-2.5 bg-gray-900 border-gray-800 placeholder-gray-400 text-white focus:ring-green-500 focus:border-green-500"  required />
          </div>
          

          <div>
            <label for="large-input" class="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-white">Symptoms</label>
            <input type="text" id="large-input" class="block w-full p-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-green-500 focus:border-green-500 dark:bg-gray-900 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" required/>
          </div>
          
          <div>
            <label for="large-input" class="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-white">Prescriptions</label>
            <input type="text" id="large-input" class="block w-full p-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-green-500 focus:border-green-500 dark:bg-gray-900 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" required/>
          </div>
          
          <div class="mt-20">
            <button type="submit" class="max-w-[100px] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border border-green-400 hover:bg-green-400 focus:ring-green-800">Confirm</button>
            <button type="button" class="ml-5 max-w-[100px] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border border-red-600 hover:border-red-500 hover:bg-red-500 focus:ring-green-800">Cancel</button>
          </div>
          
        </form>




    </div>
  )
}

export default Knowledgeengr_add_rule