import React from 'react'


const Patient_add_diagosis = () => {
  return (
    <div className='text-white  flex-col mx-auto'>
        <div className='max-w-[800px] mt-[46px] mb-[76px] w-full mx-auto my-auto text-left flex flex-col'>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Diagnosis</h1>
            <h1 className='text-green-500 '>Request new diagnosis</h1>
            
        </div>

            
        <form class="max-w-[800px] mt-[46px] mb-[76px] w-full mx-auto my-auto text-left flex flex-col">

            <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Describe Symptoms</label>
            <input type="text" id="large-input" class="block w-full p-20 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-green-500 focus:border-green-500 dark:bg-gray-900 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" required/>
            
            <div class="mt-3">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="multiple_files">Upload multiple files</label>
                <input class="block w-full text-sm border-gray-300 rounded-lg cursor-pointer  text-gray-400 focus:outline-none bg-gray-900 dark:border-gray-800 dark:placeholder-gray-400" id="multiple_files" type="file" multiple required/>
            </div>

            <button type="submit" class="mt-5 max-w-[100px] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-green-500 hover:bg-green-400 focus:ring-green-800">Request</button>
        </form>




    </div>
  )
}

export default Patient_add_diagosis