import React from 'react';
import { AiFillFileImage, AiFillEdit } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const Researcher_edit_case_detail = () => {
    const navigate = useNavigate();

  return (
    <div className='text-white  flex-col mx-auto'>
      <div className='max-w-[800px] mt-[46px] mb-[76px] w-full mx-auto my-auto text-left flex flex-col'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Cases</h1>
        <h1 className='text-green-500 '>Edit rating of a case</h1>
      </div>




    
        <form class="max-w-[800px] mx-auto flex-col">
            <label for="type" class="mt-5 mb-3 flex w-full text-xs text-left rtl:text-right font-bold text-gray-500 uppercase">Rating</label>
            <div class="relative ">
                <select class="text-sm max-w-xs rounded-lg block w-full p-2.5 bg-gray-900 border-gray-800 placeholder-gray-400 text-white focus:ring-green-500 focus:border-green-500" id="grid-state">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                </select>
            </div>

            <button type="submit" class="mt-20 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border border-green-600 hover:bg-green-500  focus:ring-green-800">
                Save Changes
            </button>

            
            <button type="button" onClick={() => navigate(-1)} class="ml-3 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border border-gray-600 hover:bg-gray-500  focus:ring-green-800">
                Go Back
            </button>
        </form>


       


    </div>
  )
}

export default Researcher_edit_case_detail