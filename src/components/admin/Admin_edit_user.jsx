import React from 'react'
import {Link}  from 'react-router-dom';
import { AiFillUpCircle } from 'react-icons/ai';


const Admin_edit_user = () => {
  return (
    <div className='text-white  flex-col mx-auto'>
      <div className='max-w-[800px] mt-[46px] mb-[76px] w-full mx-auto my-auto text-left flex flex-col'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Users</h1>
        <h1 className='text-green-500'>Edit User</h1>
      </div>


      <form className='max-w-[800px] mx-auto'>
          <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                  <label for="Name" class="block mb-2 text-sm font-medium text-white">Name</label>
                  <input type="text" id="name" class="text-sm rounded-lg block w-full p-2.5 bg-gray-900 border-gray-800 placeholder-gray-400 text-white focus:ring-green-500 focus:border-green-500" placeholder="Muhammad Ali" required />
              </div>

              <div class="w-full ">
                  <label for="type" class="block mb-2 text-sm font-medium text-white">Type</label>
                <div class="relative ">
                  <select class="text-sm rounded-lg block w-full p-2.5 bg-gray-900 border-gray-800 placeholder-gray-400 text-white focus:ring-green-500 focus:border-green-500" id="grid-state">
                  <option>Patient</option>
                  <option>Practitioner</option>
                  <option>Senior Practitioner</option>
                  <option>Knowledge Engineer</option>
                  </select>
                </div>
              </div>


              <div>
                  <label for="phone" class="block mb-2 text-sm font-medium text-white">Phone number</label>
                  <input type="tel" id="phone" class="text-sm rounded-lg block w-full p-2.5 bg-gray-900 border-gray-800 placeholder-gray-400 text-white focus:ring-green-500 focus:border-green-500" placeholder="03001234567" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
              </div>
              <div class="">
                <label for="dob" class="block mb-2 text-sm font-medium text-white">Date of Birth</label>
                <input type="date" id="dob" class="text-sm rounded-lg block w-full p-2.5 bg-gray-900 border-gray-800 placeholder-gray-400 text-white focus:ring-green-500 focus:border-green-500" placeholder="muhammadali@gmail.com" required/>
              </div>
              <div>
                  <label for="cnic" class="block mb-2 text-sm font-medium text-white">CNIC</label>
                  <input type="text" id="cnic" class="text-sm rounded-lg block w-full p-2.5 bg-gray-900 border-gray-800 placeholder-gray-400 text-white focus:ring-green-500 focus:border-green-500" placeholder="352027493759" required/>
              </div>
              <div class="">
                <label for="height" class="block mb-2 text-sm font-medium text-white">Height (in cm)</label>
                <input type="number" id="height" class="text-sm w-full rounded-lg block p-2.5 bg-gray-900 border-gray-800 placeholder-gray-400 text-white focus:ring-green-500 focus:border-green-500" placeholder="137" required/>
              </div>
              <div class="">
                <label for="email" class="block mb-2 text-sm font-medium text-white">Email address</label>
                <input type="email" id="email" class="text-sm rounded-lg block w-full p-2.5 bg-gray-900 border-gray-800 placeholder-gray-400 text-white focus:ring-green-500 focus:border-green-500" placeholder="muhammadali@gmail.com" required/>
              </div>
              <div class="">
                <label for="weight" class="block mb-2 text-sm font-medium text-white">Weight (in kg)</label>
                <input type="number" id="weight" class="text-sm rounded-lg block w-full p-2.5 bg-gray-900 border-gray-800 placeholder-gray-400 text-white focus:ring-green-500 focus:border-green-500" placeholder="78" required/>
              </div>
              
              <div class="">
                <label for="password" class="block mb-2 text-sm font-medium text-white">Password</label>
                <input type="password" id="password" class="text-sm rounded-lg block w-full p-2.5 bg-gray-900 border-gray-800 placeholder-gray-400 text-white focus:ring-green-500 focus:border-green-500" placeholder="muhammadali@gmail.com" required/>
              </div>
              <div class="">
                <label for="confirm_password" class="block mb-2 text-sm font-medium text-white">Confirm Password</label>
                <input type="password" id="confirm_password" class="text-sm rounded-lg block w-full p-2.5 bg-gray-900 border-gray-800 placeholder-gray-400 text-white focus:ring-green-500 focus:border-green-500" placeholder="muhammadali@gmail.com" required/>
              </div>
              
              <div class="block mb-2 text-sm font-medium text-gray-400">
                <label class="w-40 flex items-center px-4 py-2 bg-gray-900 text-blue rounded-lg border border-green-500 cursor-pointer hover:border-green-500 hover:bg-blue hover:text-green-500">
                    <AiFillUpCircle class="h-8"/>
                    <span class="ml-2 ">Add Picture</span>
                    <input type='file' class="hidden" />
                </label>
              </div>
              
          </div>
          

          
          <button type="submit" class=" font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-green-500 hover:bg-green-400 focus:ring-green-800">Save Changes</button>
          
          <Link to="/admin/viewuser">
            <button type="button" class=" mx-5 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border border-red-600 hover:bg-red-500 hover:border-red-600 focus:ring-green-800">Back</button>
          </Link>
          
      </form>






    </div>
  )
}

export default Admin_edit_user