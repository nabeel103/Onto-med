import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillUpCircle } from 'react-icons/ai';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
    gender: '',
    date_of_birth: '',
    cnic: '',
    type: '1',
    blood_group: '',
    occupation: '',
    marital_status: '',
    image: ''
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('http://127.0.0.1:8000/persons/', formData);
      if (response.status === 201) {
        console.log(response.data);
        navigate('/patient'); // Redirect to a success page or wherever you want
      }
    } catch (err) {
      setError('Error occurred while signing up. Please try again.');
    }
  };

  return (
    <div className='text-black dark:text-white flex-col mx-auto'>
      <div className='max-w-[800px] mt-[46px] mb-[76px] w-full mx-auto my-auto text-left flex flex-col'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ml-3'>Sign up</h1>
        <h1 className='text-green-500 ml-3'>Create a new account</h1>
      </div>

      {error && <p className='text-red-500 ml-3'>{error}</p>}

      <form className='max-w-[800px] mx-auto' onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6 md:grid-cols-2 px-3">
          <div>
            <label htmlFor="firstname" className="block mb-2 text-sm font-medium dark:text-white text-black">Firstname</label>
            <input type="text" id="firstname" value={formData.firstname} onChange={handleChange} className="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500" placeholder="Muhammad" required />
          </div>
          <div>
            <label htmlFor="lastname" className="block mb-2 text-sm font-medium dark:text-white text-black">Lastname</label>
            <input type="text" id="lastname" value={formData.lastname} onChange={handleChange} className="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500" placeholder="Ali" required />
          </div>
          <div>
            <label htmlFor="gender" className="block mb-2 text-sm font-medium dark:text-white text-black">Gender</label>
            <select id="gender" value={formData.gender} onChange={handleChange} className="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500">
              <option>Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium dark:text-white text-black">Phone number</label>
            <input type="tel" id="phone" value={formData.phone} onChange={handleChange} className="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500" placeholder="03001234567" required />
          </div>
          <div>
            <label htmlFor="date_of_birth" className="block mb-2 text-sm font-medium dark:text-white text-black">Date of Birth</label>
            <input type="date" id="date_of_birth" value={formData.date_of_birth} onChange={handleChange} className="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500" required />
          </div>
          <div>
            <label htmlFor="cnic" className="block mb-2 text-sm font-medium dark:text-white text-black">CNIC</label>
            <input type="text" id="cnic" value={formData.cnic} onChange={handleChange} className="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500" placeholder="352027493759" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium dark:text-white text-black">Email address</label>
            <input type="email" id="email" value={formData.email} onChange={handleChange} className="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500" placeholder="muhammadali@gmail.com" required />
          </div>
          <div>
            <label htmlFor="address" className="block mb-2 text-sm font-medium dark:text-white text-black">Address</label>
            <input type="text" id="address" value={formData.address} onChange={handleChange} className="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500" placeholder="House # 1, st. # 5 ..." required />
          </div>
          <div>
            <label htmlFor="blood_group" className="block mb-2 text-sm font-medium dark:text-white text-black">Blood Group</label>
            <select id="blood_group" value={formData.blood_group} onChange={handleChange} className="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500">
              <option>Select</option>
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
          <div>
            <label htmlFor="occupation" className="block mb-2 text-sm font-medium dark:text-white text-black">Occupation</label>
            <input type="text" id="occupation" value={formData.occupation} onChange={handleChange} className="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500" placeholder="Private Employee" required />
          </div>
          <div>
            <label htmlFor="marital_status" className="block mb-2 text-sm font-medium dark:text-white text-black">Marital Status</label>
            <select id="marital_status" value={formData.marital_status} onChange={handleChange} className="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500">
              <option>Select</option>
              <option>Married</option>
              <option>Unmarried</option>
              <option>Divorced</option>
            </select>
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium dark:text-white text-black">Password</label>
            <input type="password" id="password" value={formData.password} onChange={handleChange} className="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500" placeholder="12345678" required />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium dark:text-white text-black">Confirm Password</label>
            <input type="password" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500" placeholder="12345678" required />
          </div>
          <div className="block mb-2 text-sm font-medium text-gray-400">
            <label className="w-40 flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-900 text-blue rounded-lg border border-green-500 cursor-pointer hover:border-green-500 hover:bg-blue hover:text-green-500">
              <AiFillUpCircle className="h-8"/>
              <span className="ml-2">Add Picture</span>
              <input type="file" className="hidden" onChange={handleImageChange} />
            </label>
          </div>
        </div>
        
        <div>
          <button type="submit" className="max-w-[200px] ml-3 my-2 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center text-white dark:text-black bg-green-500 hover:bg-green-400 focus:ring-green-800">Save Changes</button>
          <button type="button" onClick={() => navigate(-1)} className="max-w-[100px] mx-3 my-2 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border border-red-600 hover:bg-red-500 hover:border-red-600 focus:ring-green-800">Back</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
