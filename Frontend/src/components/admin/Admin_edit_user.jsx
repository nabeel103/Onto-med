import React, { useEffect, useState, useContext } from "react";
import {  useLocation,useParams,useNavigate } from "react-router-dom";
import { AiFillUpCircle, AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../UserContext";

const Admin_edit_user = () => {
  const { id } = useParams(); // Get the user ID from the URL
  const [user, setUser] = useState(null); // State to store user data
  const location = useLocation();
  const path = location.pathname;
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
    gender: "",
    date_of_birth: "",
    cnic: "",
    type: "2",
    certification: "", 
    experience: "", 
    specialization: "", 
    issenior: false,
  });

  useEffect(() => {
    // Fetch the user data when the component mounts
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}practitioner/${path.split('/')[3]}/`);
        console.log("Fetched user:", response.data); // Log the fetched user
        // const response_ = await axios.get(`${process.env.REACT_APP_API_URL}practitioner/${path.split('/')[3]}/`)
        // console.log("Fetched user:", response_.data); // Log the fetched user
        
        setUser(response.data);
        // Populate the formData object with user data
        setFormData({
          firstname: response.data.firstname,
          lastname: response.data.lastname,
          email: response.data.email,
          password: response.data.password, // Assuming password is also stored in the user object
          confirmPassword: response.data.password, // Assuming confirmPassword matches password
          phone: response.data.phone,
          address: response.data.address,
          gender: response.data.gender,
          date_of_birth: response.data.date_of_birth,
          cnic: response.data.cnic,
          type: response.data.type,
          certification: response.data.certification, 
          experience: response.data.experience, 
          specialization: response.data.specialization, 
          issenior: response.data.issenior,
          // imageFile: response.data.image,
          
        });
        // imageFile && setFormData({ ...formData, image: response.data.image});
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
  
    fetchUser();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadProgress(100); // Simulate upload completion
      };

      reader.onprogress = (event) => {
        if (event.lengthComputable) {
          const percent = Math.round((event.loaded / event.total) * 100);
          setUploadProgress(percent);
        }
      };

      reader.readAsDataURL(file);
    }
  };
  const handleRemoveImage = () => {
    setImageFile(null);
    setUploadProgress(0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // user = user.\
      await axios.put(`${process.env.REACT_APP_API_URL}persons/${path.split('/')[3]}/`, user);
      navigate('/admin/viewusers'); // Redirect to the view users page after saving
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  if (!user) {
    console.log(user);
    return <div>Loading...</div>;
  }

  return (
    <div className="text-black dark:text-white flex-col mx-auto">
      <ToastContainer />
      <div className="max-w-[800px] mt-[46px] mb-[76px] w-full mx-auto my-auto text-left flex flex-col">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ml-3">
          Practitioner
        </h1>
        <h1 className="text-green-500 ml-3">Update Account</h1>
      </div>

      

      <form className="max-w-[800px] mx-auto" onSubmit={handleSubmit}>
        {error && <p className="text-red-500 ml-3">{error}</p>}
      {success && <p className="text-green-500 ml-3">{success}</p>}
        <div className="grid gap-6 mb-6 md:grid-cols-2 px-3">
          <div>
            <label
              htmlFor="firstname"
              className="block mb-2 text-sm font-medium dark:text-white text-black"
            >
              Firstname
            </label>
            <input
              type="text"
              id="firstname"
              value={formData.firstname}
              onChange={handleChange}
              className="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500"
              placeholder="Muhammad"
              required
            />
          </div>
          <div>
            <label
              htmlFor="lastname"
              className="block mb-2 text-sm font-medium dark:text-white text-black"
            >
              Lastname
            </label>
            <input
              type="text"
              id="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500"
              placeholder="Ali"
              required
            />
          </div>
          <div>
            <label
              htmlFor="gender"
              className="block mb-2 text-sm font-medium dark:text-white text-black"
            >
              Gender
            </label>
            <select
              id="gender"
              value={formData.gender}
              onChange={handleChange}
              className="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500"
            >
              <option>Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium dark:text-white text-black"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500"
              placeholder="03001234567"
              required
            />
          </div>
          <div>
            <label
              htmlFor="date_of_birth"
              className="block mb-2 text-sm font-medium dark:text-white text-black"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="date_of_birth"
              value={formData.date_of_birth}
              onChange={handleChange}
              className="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500"
              placeholder="08-03-1998"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium dark:text-white text-black"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500"
              placeholder="abc@gmail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium dark:text-white text-black"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500"
              placeholder="********"
              required
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-medium dark:text-white text-black"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500"
              placeholder="********"
              required
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium dark:text-white text-black"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              value={formData.address}
              onChange={handleChange}
              className="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500"
              placeholder="House#13,street#1,abc town"
              required
            />
          </div>
          <div>
            <label
              htmlFor="specialization"
              className="block mb-2 text-sm font-medium dark:text-white text-black"
            >
              Specializations
            </label>
            <input
              type="text"
              id="specialization"
              value={formData.specialization}
              onChange={handleChange}
              className="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500"
              placeholder="Sromatic, Cardiologist, etc."
              required
            />
          </div>
          
          <div>
            <label
              htmlFor="certification"
              className="block mb-2 text-sm font-medium dark:text-white text-black"
            >
              Certifications
            </label>
            <input
              type="text"
              id="certification"
              value={formData.certification}
              onChange={handleChange}
              className="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500"
              placeholder="Hakeem Certified"
              required
            />
          </div>
          <div>
            <label
              htmlFor="experience"
              className="block mb-2 text-sm font-medium dark:text-white text-black"
            >
              Experience
            </label>
            <input
              type="text"
              id="experience"
              value={formData.experience}
              onChange={handleChange}
              className="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500"
              placeholder="13 Years"
              required
            />
          </div>
          
          <div>
            <label
              htmlFor="cnic"
              className="block mb-2 text-sm font-medium dark:text-white text-black"
            >
              CNIC
            </label>
            <input
              type="text"
              id="cnic"
              value={formData.cnic}
              onChange={handleChange}
              className="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500"
              placeholder="35202-3456789-1"
              required
            />
          </div>
          <div>
            <label
              htmlFor="image"
              className="block mb-2 text-sm font-medium dark:text-white text-black"
            >
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              // onChange={handleImageChange}
              className="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500"
            />
            {uploadProgress > 0 && (
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                      {uploadProgress}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                  <div
                    style={{ width: `${uploadProgress}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                  ></div>
                </div>
              </div>
            )}
          </div>
          <div>
          <label htmlFor="issenior" className="block mb-2 text-sm font-medium dark:text-white text-black">Senior Practitioner</label>
                <input type="checkbox" id="issenior" name="issenior" checked={formData.issenior} onChange={() => setFormData({ ...formData, issenior: !formData.issenior })} className="text-sm rounded-lg block p-2.5 dark:bg-gray-900 dark:border-gray-800 bg-gray-100 border-gray-200 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500" />
          </div>
          {/* {formData.image && (
            <div className="flex flex-col items-center">
              <img
                src={`data:image/jpeg;base64,${formData.image}`}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-lg"
              />
              <button
                type="button"
                // onClick={handleRemoveImage}
                className="mt-5 text-sm text-red-500"
              >
                Remove
              </button>
            </div>
          )} */}
        </div>
        <div className="max-w-[800px] mx-auto">
          <button
            type="submit"
            className="max-w-[200px] ml-3 my-2 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center text-white dark:text-black bg-green-500 hover:bg-green-400 focus:ring-green-800"
          >
            Save Changes
          </button>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="max-w-[100px] mx-3 my-2 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border border-red-600 hover:bg-red-500 hover:border-red-600 focus:ring-green-800"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
}

export default Admin_edit_user;
