import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillInfoCircle } from 'react-icons/ai';
import axios from 'axios';
import images from '../..';

const Practitioner_view_requests = () => {
  const [diagnoses, setDiagnoses] = useState([]);

  useEffect(() => {
    const fetchDiagnoses = async () => {
      try {
        // const response = await fetch('http://127.0.0.1:8000/mydiagnoses/91');
        const pracId = JSON.parse(localStorage.getItem("user")).personid;

        const response = await axios.get(process.env.REACT_APP_API_URL + 'mydiagnoses/'+pracId+'/');
         
        // if (!response.ok) {
        //   throw new Error('Network response was not ok');
        // }

        console.log("This is response",response.data);
        // const data = await response.json();
        // console.log("This is data", data);
        setDiagnoses(response.data);
      } catch (error) {
        console.error('Error fetching diagnoses:', error);
      }
    };

    fetchDiagnoses();
  }, []);
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    // console.log(birthDate);
    const today = new Date();
    // console.log(today);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div className='text-black dark:text-white flex-col mx-auto'>
      <div className='max-w-[800px] mt-[46px] mb-[76px] w-full mx-auto my-auto text-left flex flex-col'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ml-3'>Requests</h1>
        <h1 className='text-green-500 ml-3'>A list of diagnosis requests</h1>
      </div>

      <div className="relative overflow-x-auto max-w-[1230px] mx-auto">
        <table className="w-full text-sm text-left rtl:text-right dark:text-white text-black">
          <thead className="text-xs text-gray-500 uppercase bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
            <tr>
              <th className="px-6 py-3">Info</th>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Patient</th>
              <th className="px-6 py-3">Age</th>
              <th className="px-6 py-3">AI Diagnosis</th>
              <th className="px-6 py-3">Symptoms</th>
              <th className="px-6 py-3">Is Concluded</th>
              
            </tr>
          </thead>
          <tbody>
            {diagnoses.map((diagnosis, index) => (
              console.log(diagnosis),
              <tr key={diagnosis.diagnosisid} className="dark:bg-black bg-white border-b dark:border-gray-900 border-gray-200 hover:dark:bg-gray-900">
                <td className="px-6 py-4 text-right text-gray-600 hover:text-green-600">
                  <Link to={"/practitioner/viewrequestdetail/" + diagnosis.diagnosisid }><AiFillInfoCircle/></Link>
                </td>
                <td className="px-6 py-4">{index + 1}</td>
                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  <img className="w-10 h-10 rounded-full" src={images.person} alt="user" />
                  <div className="ps-3">
                    <div className="text-base font-semibold">{diagnosis.firstname} {diagnosis.lastname}</div>
                    <div className="font-normal text-gray-500">{diagnosis.email}</div>
                  </div>
                </th>
                <td className="px-6 py-4 font-medium">{calculateAge(diagnosis.date_of_birth)}</td>
                <td className="px-6 py-4 font-medium">{diagnosis.automateddiagnosis.replaceAll(',', ' , ')}</td>
                <td className="px-6 py-4 font-light">{diagnosis.symptoms.replaceAll(',', ' , ')}</td>
                <td className="px-6 py-4 font-light">{diagnosis.isconcluded ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Practitioner_view_requests;
