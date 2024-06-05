import React, { useState, useEffect } from 'react';
import { AiFillEdit, AiFillDelete, AiFillPlusCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import images from '../..'; // Adjust the import path if necessary
import axios from 'axios'; // Import axios for API calls

const AdminViewUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the API when the component mounts
    const fetchUsers = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_API_URL + 'persons/');
        console.log("Fetched users:", response.data); // Log the fetched users
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    try {
      console.log("Attempting to delete user with id:", userId); // Log the userId
      await axios.delete(`${process.env.REACT_APP_API_URL}persons/${userId}/`);
      setUsers(users.filter(user => user.id !== userId));
      window.location.reload();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className='dark:text-white text-black flex-col mx-auto'>
      <div className='max-w-[800px] mt-[46px] mb-[76px] w-full mx-auto my-auto text-left flex flex-col'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ml-3'>Users</h1>
        <h1 className='text-green-500 ml-3'>View all Users</h1>
      </div>

      <div className="relative overflow-x-auto max-w-[1230px] mx-auto mt-[96px]">
        <div className="content-end">
          <Link to="/admin/adduser">
            <button type="button" className="my-5 flex font-light rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border border-gray-300 hover:bg-green-400 hover:border-green-400 focus:ring-green-800">
              <AiFillPlusCircle className='mr-2 w-4 h-4 my-auto' /> Add User
            </button>
          </Link>
        </div>

        <table className="w-full text-sm text-left rtl:text-right text-black dark:text-white">
          <thead className="text-xs text-gray-500 uppercase dark:bg-black bg-white border-b dark:border-gray-900 border-gray-200">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Type</th>
              <th className="px-6 py-3">Phone</th>
              <th className="px-6 py-3">CNIC</th>
              <th className="px-6 py-3">Date of Birth</th>
              <th className="px-6 py-3">
                <span className="sr-only"><AiFillEdit /></span>
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => {
              console.log(user);
              return (
                <tr key={user.id} className="dark:bg-black bg-white border-b dark:border-gray-900 border-gray-200 hover:dark:bg-gray-900">
                  <td className="px-6 py-4">{index + 1}</td>
                  <th scope="row" className="flex items-center px-6 py-4 dark:text-white text-black whitespace-nowrap">
                    <img className="w-10 h-10 rounded-full" src={user.image ? user.image : images.person} alt="user" />
                    <div className="ps-3">
                      <div className="text-base font-semibold">{user.firstname} {user.lastname}</div>
                      <div className="font-normal text-gray-500">{user.email}</div>
                    </div>
                  </th>
                  <th className="px-6 py-4 font-light">{user.type === 1 ? 'Patient' : 'Practitioner'}</th>
                  <td className="px-6 py-4">{user.phone}</td>
                  <td className="px-6 py-4">{user.cnic}</td>
                  <td className="px-6 py-4">{user.date_of_birth}</td>
                  <td className="px-6 py-4 text-right text-gray-600 hover:text-green-600">
                    <Link to={`/admin/edituser/${user.personid}`}><AiFillEdit /></Link>
                  </td>
                  <td className="px-6 py-4 text-right text-gray-600 hover:text-red-600">
                    <button onClick={() => handleDelete(user.personid)}><AiFillDelete /></button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminViewUser;
