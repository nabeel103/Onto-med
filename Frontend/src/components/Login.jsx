import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { email, password } = formData;

    // Check if both email and password are "admin"
    if (email === 'admin.ontomed@gmail.com' && password === 'admin') {
        setLoading(false);
        navigate('/admin');
        return;
    }

    try {
        const response = await axios.post(process.env.REACT_APP_API_URL + 'login/', formData);
        if (response.status === 200) {
            const { token, user } = response.data;
            login({ ...user, token }); // Pass user data and token to login function
            setLoading(false);
            console.log(user);

            if (user.type === 1) {
                navigate('/patient');
            } else if (user.type === 2) {
                navigate('/practitioner');
            }
        }
    } catch (err) {
        setLoading(false);
        setError('Invalid email or password. Please try again.');
    }
};


  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-24 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-20 w-auto" src={require("./images/login.png")} alt="Login" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100">Sign in to your account</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
              Email address
            </label>
            <div className="mt-2">
              <input id="email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">Password</label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-green-500 hover:text-green-400">Forgot password?</a>
              </div>
            </div>
            <div className="mt-2">
              <input id="password" name="password" type="password" autoComplete="current-password" required value={formData.password} onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500">
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <a href="/signup" className="font-semibold leading-6 text-green-500 hover:text-green-400"> Create a new account</a>
        </p>

        <div className='flex-col mt-20 max-w-[1230px] mx-auto'>
          <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Quick Login:</h2>
          <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
            <li>
              <a href="/admin">
                Admin
              </a>
            </li>
            {/* <li>
              <a href="/patient">
                Patients
              </a>
            </li>
            <li>
              <a href="/practitioner">
                Practitioner
              </a>
            </li> */}
            {/* <li>
              <a href="/researcher">
                Researcher
              </a>
            </li>
            <li>
              <a href="/knowledgeengr">
                Knowledge Engineer
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;
