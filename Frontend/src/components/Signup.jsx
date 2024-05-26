import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillUpCircle, AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../UserContext";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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
    type: "1",
    blood_group: "",
    occupation: "",
    marital_status: "",
    image: null,
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const { login } = useContext(UserContext);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const binaryString = reader.result.split(",")[1];
        setFormData({ ...formData, image: binaryString });
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
    setFormData({ ...formData, image: null });
    setUploadProgress(0);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
    return re.test(password);
  };

  const validateForm = () => {
    const requiredFields = [
      "firstname",
      "lastname",
      "email",
      "password",
      "confirmPassword",
      "phone",
      "address",
      "gender",
      "date_of_birth",
      "cnic",
      "blood_group",
      "occupation",
      "marital_status",
    ];
    for (let field of requiredFields) {
      if (!formData[field]) {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      toast.error("Passwords do not match");
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address");
      toast.error("Please enter a valid email address");
      return;
    }

    if (!validatePassword(formData.password)) {
      setError(
        "Password must be at least 8 characters long and contain at least one letter and one number"
      );
      toast.error(
        "Password must be at least 8 characters long and contain at least one letter and one number"
      );
      return;
    }

    if (!validateForm()) {
      setError("Please fill in all required fields");
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "persons/",
        formData
      );

      if (response.status === 201) {
        setSuccess("Signup successful. Redirecting...");
        toast.success("Signup successful. Redirecting...");

        const loginResponse = await axios.post(
          process.env.REACT_APP_API_URL + "login/",
          formData
        );

        if (loginResponse.status === 200) {
          const { token, user } = loginResponse.data;
          login({ ...user, token });
          setLoading(false);
          setTimeout(() => {
            navigate("/patient");
          }, 2000);
        }
      }
    } catch (err) {
      if (err.response && err.response.status === 500) {
        setError("Person already exists");
        toast.error("Person already exists");
      } else {
        setError("Error occurred while signing up. Please try again.");
        toast.error("Error occurred while signing up. Please try again.");
      }
    }
  };

  return (
    <div className="text-black dark:text-white flex-col mx-auto">
      <ToastContainer />
      <div className="max-w-[800px] mt-[46px] mb-[76px] w-full mx-auto my-auto text-left flex flex-col">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ml-3">
          Sign up
        </h1>
        <h1 className="text-green-500 ml-3">Create a new account</h1>
      </div>

      {error && <p className="text-red-500 ml-3">{error}</p>}
      {success && <p className="text-green-500 ml-3">{success}</p>}

      <form className="max-w-[800px] mx-auto" onSubmit={handleSubmit}>
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
              htmlFor="blood_group"
              className="block mb-2 text-sm font-medium dark:text-white text-black"
            >
              Blood Group
            </label>
            <select
              id="blood_group"
              value={formData.blood_group}
              onChange={handleChange}
              className="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500"
            >
              <option>Select</option>
              <option>A+</option>
              <option>B+</option>
              <option>AB+</option>
              <option>O+</option>
              <option>A-</option>
              <option>B-</option>
              <option>AB-</option>
              <option>O-</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="occupation"
              className="block mb-2 text-sm font-medium dark:text-white text-black"
            >
              Occupation
            </label>
            <input
              type="text"
              id="occupation"
              value={formData.occupation}
              onChange={handleChange}
              className="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500"
              placeholder="Doctor"
              required
            />
          </div>
          <div>
            <label
              htmlFor="marital_status"
              className="block mb-2 text-sm font-medium dark:text-white text-black"
            >
              Marital Status
            </label>
            <select
              id="marital_status"
              value={formData.marital_status}
              onChange={handleChange}
              className="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500"
            >
              <option>Select</option>
              <option>Single</option>
              <option>Married</option>
              <option>Divorced</option>
              <option>Widowed</option>
            </select>
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
              onChange={handleImageChange}
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
          {formData.image && (
            <div className="flex flex-col items-center">
              <img
                src={`data:image/jpeg;base64,${formData.image}`}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={handleRemoveImage}
                className="mt-5 text-sm text-red-500"
              >
                Remove
              </button>
            </div>
          )}
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
};

export default Signup;
