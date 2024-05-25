import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiFillUpCircle } from 'react-icons/ai'

const Admin_add_user = () => {
  const navigate = useNavigate();

  return (
    <div className='dark:text-white text-black  flex-col mx-auto'>
    <div className='max-w-[800px] mt-[46px] mb-[76px] w-full mx-auto my-auto text-left flex flex-col'>
      <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ml-3'>Users</h1>
      <h1 className='text-green-500 ml-3'>Add User</h1>
    </div>


    <form className='max-w-[800px] mx-auto'>
    <div class="grid gap-6 mb-6 md:grid-cols-2 px-3">
              <div>
                  <label for="Name" class="block mb-2 text-sm font-medium dark:text-white text-black">Name</label>
                  <input type="text" id="name" class="text-sm rounded-lg block w-full p-2.5 dark:bg-gray-900 dark:border-gray-800 bg-gray-100 border-gray-200 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500" placeholder="Muhammad Ali" required />
              </div>

              <div class="w-full ">
                  <label for="type" class="block mb-2 text-sm font-medium dark:text-white text-black">Type</label>
                <div class="relative ">
                  <select class="text-sm rounded-lg block w-full p-2.5 dark:bg-gray-900 dark:border-gray-800 bg-gray-100 border-gray-200 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500" id="grid-state">
                  <option>Practitioner</option>
                  <option>Senior Practitioner</option>
                  <option>Knowledge Engineer</option>
                  <option>Patient</option>
                  </select>
                </div>
              </div>


              <div>
                  <label for="phone" class="block mb-2 text-sm font-medium dark:text-white text-black">Phone number</label>
                  <input type="tel" id="phone" class="text-sm rounded-lg block w-full p-2.5 dark:bg-gray-900 dark:border-gray-800 bg-gray-100 border-gray-200 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500" placeholder="03001234567" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
              </div>
              <div class="">
                <label for="dob" class="block mb-2 text-sm font-medium dark:text-white text-black">Date of Birth</label>
                <input type="date" id="dob" class="text-sm rounded-lg block w-full p-2.5 dark:bg-gray-900 dark:border-gray-800 bg-gray-100 border-gray-200 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500" placeholder="muhammadali@gmail.com" required/>
              </div>
              <div>
                  <label for="cnic" class="block mb-2 text-sm font-medium dark:text-white text-black">CNIC</label>
                  <input type="text" id="cnic" class="text-sm rounded-lg block w-full p-2.5 dark:bg-gray-900 dark:border-gray-800 bg-gray-100 border-gray-200 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500" placeholder="352027493759" required/>
              </div>
              <div class="">
                <label for="height" class="block mb-2 text-sm font-medium dark:text-white text-black">Height (in cm)</label>
                <input type="number" id="height" class="text-sm w-full rounded-lg block p-2.5 dark:bg-gray-900 dark:border-gray-800 bg-gray-100 border-gray-200 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500" placeholder="137" required/>
              </div>
              <div class="">
                <label for="email" class="block mb-2 text-sm font-medium dark:text-white text-black">Email address</label>
                <input type="email" id="email" class="text-sm rounded-lg block w-full p-2.5 dark:bg-gray-900 dark:border-gray-800 bg-gray-100 border-gray-200 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500" placeholder="muhammadali@gmail.com" required/>
              </div>
              <div class="">
                <label for="weight" class="block mb-2 text-sm font-medium dark:text-white text-black">Weight (in kg)</label>
                <input type="number" id="weight" class="text-sm rounded-lg block w-full p-2.5 dark:bg-gray-900 dark:border-gray-800 bg-gray-100 border-gray-200 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500" placeholder="78" required/>
              </div>
              
              <div class="">
                <label for="weight" class="block mb-2 text-sm font-medium dark:text-white text-black">Address</label>
                <input type="text" id="weight" class="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500" placeholder="UET, Lahore" required/>
              </div>
              <div class="w-full ">
                  <label for="type" class="block mb-2 text-sm font-medium dark:text-white text-black">Marital Status</label>
                <div class="relative ">
                  <select class="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500" id="grid-state" >
                  <option>Married</option>
                  <option>Unmarried</option>
                  <option>Engaged</option>
                  </select>
                </div>
              </div>
              <div class="">
                <label for="weight" class="block mb-2 text-sm font-medium dark:text-white text-black">Occupation</label>
                <input type="text" id="weight" class="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500" placeholder="Engineer" required/>
              </div>
              <div class="w-full ">
                  <label for="type" class="block mb-2 text-sm font-medium dark:text-white text-black">Blood Group</label>
                <div class="relative ">
                  <select class="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500" id="grid-state" >
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                  <option>O+</option>
                  <option>O-</option>
                  </select>
                </div>
              </div>


              <div class="">
                <label for="weight" class="block mb-2 text-sm font-medium dark:text-white text-black">Certification</label>
                <input type="text" id="weight" class="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500" placeholder="ENT" required/>
              </div>
              <div class="">
                <label for="weight" class="block mb-2 text-sm font-medium dark:text-white text-black">Experience (Years)</label>
                <input type="number" id="weight" class="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500" placeholder="Engineer" required/>
              </div>
              <div class="">
                <label for="weight" class="block mb-2 text-sm font-medium dark:text-white text-black">Specialization</label>
                <input type="text" id="weight" class="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500" placeholder="ENT" required/>
              </div>

              <div></div>

              <div class=" block min-h-[1.5rem] ps-[1.5rem]">
                <input
                  class="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary focus:ring-green-500 focus:border-green-500"
                  type="checkbox"
                  value=""
                  id="checkboxDefault" />
                <label
                  class="inline-block ps-[0.15rem] hover:cursor-pointer"
                  for="checkboxDefault">
                  Is Senior
                </label>
              </div>

              <div></div>





              <div class="">
                <label for="password" class="block mb-2 text-sm font-medium dark:text-white text-black">Password</label>
                <input type="password" id="password" class="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500" placeholder="12345678" required/>
              </div>
              <div class="">
                <label for="confirm_password" class="block mb-2 text-sm font-medium dark:text-white text-black">Confirm Password</label>
                <input type="password" id="confirm_password" class="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500" placeholder="12345678" required/>
              </div>
              
              <div class="block mb-2 text-sm font-medium text-gray-400">
                <label class="w-40 flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-900 text-blue rounded-lg border border-green-500 cursor-pointer hover:border-green-500 hover:bg-blue hover:text-green-500">
                    <AiFillUpCircle class="h-8"/>
                    <span class="ml-2 ">Add Picture</span>
                    <input type='file' class="hidden" />
                </label>
              </div>
              
          </div>
        
          <div>
          <button type="submit" class="max-w-[200px] ml-3 my-2 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center text-white dark:text-black bg-green-500 hover:bg-green-400 focus:ring-green-800">Add User</button>
          

          <button type="button" onClick={() => navigate(-1)} class="max-w-[100px] mx-3 my-2 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border border-red-600 hover:bg-red-500 hover:border-red-600 focus:ring-green-800">Back</button>

          </div>
        
    </form>






  </div>
  )
}

export default Admin_add_user