import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillEdit } from 'react-icons/ai'

const Researcher_view_profile = () => {
  return (
    <div className='text-white  flex-col mx-auto'>
        <div className='max-w-[800px] mt-[46px] mb-[76px] w-full mx-auto my-auto text-left flex flex-col'>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Profile</h1>
            <h1 className='text-green-500'>User profile</h1>
        </div>


        <div class="grid gap-6 mb-6 md:grid-cols-2 max-w-[800px] mx-auto">
            <div>
                <label for="Name" class="block mb-2 text-sm font-medium text-white">Name</label>
                <label class="font-extrabold font">Muhammad Ali</label>
            </div>


            <div class="w-full ">
                <label for="type" class="block mb-2 text-sm font-medium text-white">Account Type</label>
                <label class="font-extrabold font">Researcher</label>
            <div class="relative ">
                
            </div>
            </div>


            <div>
                <label for="phone" class="block mb-2 text-sm font-medium text-white">Phone number</label>
                <label class="font-extrabold font">03001234567</label>
            </div>
            <div>
                <label for="cnic" class="block mb-2 text-sm font-medium text-white">CNIC</label>
                <label class="font-extrabold font">352083055737</label>
            </div>
            <div class="mb-6">
                <label for="email" class="block mb-2 text-sm font-medium text-white">Email address</label>
                <label class="font-extrabold font">muhammadali@gmail.com</label>
            </div>
            <Link to ="/researcher/editprofile">
                <button type="button" class=" my-5 flex font-light rounded-lg text-m w-full sm:w-auto py-2.5   hover:text-green-400  focus:ring-green-800">
                    <AiFillEdit className='mr-4 w-4 h-4 my-auto'/> Edit Profile
                </button>
            </Link>
        </div>

        <div class="max-w-[800px] mx-auto flex-col mt-20">
            
            <Link to="/">
                <button type="button" class="font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border border-red-600 hover:bg-red-500 hover:border-red-600 focus:ring-green-800">Signout</button>
            </Link>
        </div>



    </div>
  )
}

export default Researcher_view_profile