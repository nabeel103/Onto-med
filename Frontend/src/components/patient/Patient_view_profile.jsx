import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillEdit } from 'react-icons/ai';
import images from '../..';
import { UserContext } from '../../UserContext';

const Patient_view_profile = () => {
  const { logout } = useContext(UserContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setUser(userData);
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className='text-black dark:text-white flex-col mx-auto'>
      <div className="grid grid-cols-2 max-w-[800px] mx-auto">
        <div className='max-w-[800px] mt-[46px] mb-[76px] w-full mx-auto my-auto text-left flex flex-col'>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ml-3'>Users</h1>
          <h1 className='text-green-500 ml-3'>View User Profile</h1>
        </div>
        <img className="h-20 my-auto rounded-full" src={images.person} alt="user" />
      </div>

      <div className="grid gap-6 mb-6 md:grid-cols-2 max-w-[800px] mx-auto pl-3">
        <div>
          <label className="block mb-2 text-sm font-medium dark:text-white text-black">Name</label>
          <label className="font-extrabold">{user.name}</label>
        </div>
        <div className="w-full">
          <label className="block mb-2 text-sm font-medium dark:text-white text-black">Account Type</label>
          <label className="font-extrabold">{user.accountType}</label>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium dark:text-white text-black">Phone number</label>
          <label className="font-extrabold">{user.phone}</label>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium dark:text-white text-black">CNIC</label>
          <label className="font-extrabold">{user.cnic}</label>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium dark:text-white text-black">Email address</label>
          <label className="font-extrabold">{user.email}</label>
        </div>
        <Link to="/patient/editprofile">
          <button type="button" className="my-5 flex font-light rounded-lg text-m w-full sm:w-auto py-2.5 hover:text-green-400 focus:ring-green-800">
            <AiFillEdit className='mr-4 w-4 h-4 my-auto' /> Edit Profile
          </button>
        </Link>
      </div>

      <div className="max-w-[800px] mx-auto flex-col mt-20">
        <button
          type="button"
          className="font-medium max-w-[150px] mx-3 mb-5 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border border-red-600 hover:bg-red-500 hover:border-red-600 focus:ring-green-800"
          onClick={() => {
            logout();
            localStorage.removeItem('user');
          }}
        >
          Signout
        </button>
      </div>
    </div>
  );
};

export default Patient_view_profile;
