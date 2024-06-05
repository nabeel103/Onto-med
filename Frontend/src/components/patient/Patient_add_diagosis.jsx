import React, { useState, useEffect } from "react";
import { AiOutlinePlus, AiFillDelete } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PatientAddDiagnosis = () => {
  const [practitioners, setPractitioners] = useState([]);
  const [prac, setPrac] = useState([]);
  const [patients, setPatients] = useState([]);
  const [selectedPractitioner, setSelectedPractitioner] = useState(null);
  const [allSymptomsList, setAllSymptomsList] = useState([]);
  const [symptoms, setSymptoms] = useState("");
  const [intensity, setIntensity] = useState(0);
  const [isInFamily, setIsInFamily] = useState(false);
  const [images, setImages] = useState({
    face: null,
    nails: null,
    hands: null,
    other: null,
  });

  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching data for practitioners");
      try {
        const response = await fetch(
          process.env.REACT_APP_API_URL + "practitioner/"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log("This is response", response);
        const data = await response.json();
        setPractitioners(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     console.log("Fetching data for  specific practitioners");
  //     console.log(practitioners);
  //     const practitionerData = await Promise.all(
  //       practitioners.map(async (practitioner) => {
  //         try {
  //           const response = await fetch(
  //             `${process.env.REACT_APP_API_URL}practitioner/${practitioner.practitionerid}`
  //           );
  //           if (!response.ok) {
  //             throw new Error(`Error fetching data for practitioner ${practitioner.practitionerid}`);
  //           }
  //           const data = await response.json();
  //           return data;
  //         } catch (error) {
  //           console.error("Error fetching data:", error);
  //           return null; // Return null for failed fetches
  //         }
  //       })
  //     );
  //     setPrac(practitionerData.filter(data => data !== null)); // Filter out null values
  //   };

  //   fetchData();
  // }, [practitioners]);
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      
    
    const testingSymptoms = allSymptomsList
      .map((symptom) => {
        return symptom?.symptom;
      })
      .toString();

    const formBody = {
      text: testingSymptoms,
    };
    console.log(formBody);
    fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      body: JSON.stringify({
        text: testingSymptoms,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle success (e.g., show a success message or reset the form)
        console.log(data);

        let symptomsCombined = "";

        for (let index = 0; index < allSymptomsList.length; index++) {
          symptomsCombined +=
            allSymptomsList[index].symptom +
            "-" +
            allSymptomsList[index].intensity +
            "-" +
            (allSymptomsList[index].isInFamily
              ? "In Family"
              : "Not in Family") +
            ",";
        }

        let automatedDiagnosisCombined = "";
        for (let index = 0; index < data.predictions.length; index++) {
          automatedDiagnosisCombined +=
            data.predictions[index].disease +
            "-" +
            data.predictions[index].probability +
            ",";
        }
        console.log(symptomsCombined);

        const formData = new FormData();
        const date = new Date();
        const formattedDate = date
          .toISOString()
          .split("T")[0]
          .replace(/-/g, "-");

        const patientId = JSON.parse(localStorage.getItem("user")).personid;

        formData.append("symptoms", symptomsCombined);
        // formData.append('intensity', intensity);
        // formData.append('isInFamily', isInFamily);
        formData.append("practitioner", selectedPractitioner);
        formData.append("face_image", images.face);
        formData.append("nail_image", images.nails);
        formData.append("hands_image", images.hands);
        formData.append("other_image", images.other);
        formData.append("height", height);
        formData.append("weight", weight);
        formData.append("diagnosisdate", formattedDate);
        formData.append("automateddiagnosis", automatedDiagnosisCombined);
        formData.append("patient", patientId);

        console.log(formData);

        fetch(process.env.REACT_APP_API_URL + "diagnoses/", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle success (e.g., show a success message or reset the form)
            console.log(data);
            toast.success("Diagnose request is successfully added. Redirecting...");
            // reload now
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          })
          .catch((error) => {
            console.log(error);
            toast.error("Error occurred while requesting diagnose. Please try again.");
          });
      }).catch((error) => {
        console.log(error);
        toast.error("Error occurred while requesting diagnose. Please try again.");
      });
    } catch (error) {
      console.log(error);
      toast.error("Error occurred while requesting diagnose. Please try again.");
    }
  };

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    setImages({ ...images, [name]: files[0] });
  };
  // console.log(practitioners);
  console.log(prac);

  const addSymptomsHandler = () => {
    console.log(symptoms);
    console.log(intensity);
    console.log(isInFamily);

    setAllSymptomsList([
      ...allSymptomsList,
      {
        symptom: symptoms,
        intensity,
        isInFamily,
      },
    ]);
  };

  console.log(allSymptomsList);

  return (
    <div className="dark:text-white text-black flex-col mx-auto">
      {/* HEADLINE */}
      <ToastContainer />
      <div className="max-w-[800px] mt-[46px] mb-[76px] w-full mx-auto my-auto text-left flex flex-col">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ml-3">
          Diagnosis
        </h1>
        <h1 className="text-green-500 ml-3">Request new diagnosis</h1>
      </div>

      {/* OVERALL FORM */}
      <form
        onSubmit={handleSubmit}
        className="max-w-[800px] mt-[46px] mb-[76px] w-full mx-auto my-auto text-left flex flex-col px-3"
      >
        {/* ADD SYMPTOMS */}
        <label
          htmlFor="symptoms-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Add Symptoms
        </label>
        <div className="flex flex-row">
          <input
            type="text"
            id="symptoms-input"
            className="block w-[350px] text-gray-900 border border-gray-200 rounded-lg bg-gray-50 sm:text-md focus:ring-green-500 focus:border-green-500 dark:bg-gray-900 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            required
          />
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg mx-2 pr-4">
            <label
              htmlFor="intensity-range"
              className="mx-2 mt-1 text-sm inline-block text-neutral-700 dark:text-neutral-200"
            >
              Intensity
            </label>
            <span>{intensity}</span>
            <input
              type="range"
              className="mx-2 mb-4 transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-800"
              min="0"
              max="5"
              id="intensity-range"
              value={intensity}
              onChange={(e) => setIntensity(e.target.value)}
            />
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 border dark:border-gray-800 rounded-lg mr-2 pr-4 flex flex-row">
            <input
              id="family-checkbox"
              type="checkbox"
              className="ml-2 w-4 h-4 my-auto text-green-600 bg-gray-100 border-gray-300 rounded    focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              checked={isInFamily}
              onChange={(e) => setIsInFamily(e.target.checked)}
            />
            <label
              htmlFor="family-checkbox"
              className="ml-1 text-sm my-auto font-medium text-gray-900 dark:text-gray-300"
            >
              Is in family
            </label>
          </div>
          <button
            type="button"
            className="ml-2 max-w-[100px] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border border-green-500 hover:bg-green-400 focus:ring-green-800"
            onClick={() => {
              addSymptomsHandler();
              /* Add functionality to handle symptom addition */
            }}
          >
            <AiOutlinePlus />
          </button>
        </div>

        {/* SYMPTOM LIST */}
        <table className="w-full text-sm text-left rtl:text-right text-black dark:text-white">
          <thead className="text-xs text-gray-500 uppercase dark:bg-black bg-white border-b dark:border-gray-900 border-gray-200">
            <tr>
              <th scope="col" className="p-4">
                <AiFillDelete />
              </th>
              <th scope="col" className="px-6 py-3">
                Symptom
              </th>
              <th scope="col" className="px-6 py-3">
                Intensity
              </th>
              <th scope="col" className="px-6 py-3">
                Is in family
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Replace this with dynamic symptom list */}
            {allSymptomsList?.map((symptom) => (
              <tr className="dark:bg-black bg-white border-b dark:border-gray-900 border-gray-200 hover:dark:bg-gray-900">
                <td className="w-4 p-4">
                  <button className="text-gray-500 hover:text-red-600">
                    <AiFillDelete />
                  </button>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {symptom?.symptom}
                </th>
                <td className="px-6 py-4 ">{symptom?.intensity}</td>
                <td className="px-6 py-4">
                  {symptom?.isInFamily ? "In Family" : "Not in Family"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="grid gap-6 mb-6 md:grid-cols-2 px-3 mt-5">
          <div>
            <label
              htmlFor="height"
              className="block mb-2 text-sm font-medium dark:text-white text-black"
            >
              Height
            </label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500"
              placeholder="120cm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="weight"
              className="block mb-2 text-sm font-medium dark:text-white text-black"
            >
              Weight
            </label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="text-sm rounded-lg block w-full p-2.5 bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:text-white text-black focus:ring-green-500 focus:border-green-500"
              placeholder="98kg"
              required
            />
          </div>
        </div>

        {/* ADD IMAGES */}
        <label
          className="mt-10 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="multiple_files"
        >
          Add Images
        </label>
        <div className="px-3 max-w-[425px] grid grid-cols-2 gap-1">
          <label className="font-bold">Face:</label>
          <input
            className="block w-full py-1 pl-1 text-sm border-gray-300 rounded-lg cursor-pointer text-gray-400 focus:outline-none bg-gray-100 dark:bg-gray-900 dark:border-gray-800 dark:placeholder-gray-400"
            id="face_image"
            name="face"
            type="file"
            onChange={handleImageChange}
            required
          />
          <label className="font-bold">Nails:</label>
          <input
            className="block w-full py-1 pl-1 text-sm border-gray-300 rounded-lg cursor-pointer text-gray-400 focus:outline-none bg-gray-100 dark:bg-gray-900 dark:border-gray-800 dark:placeholder-gray-400"
            id="nail_image"
            name="nails"
            type="file"
            onChange={handleImageChange}
            required
          />
          <label className="font-bold">Hands:</label>
          <input
            className="block w-full py-1 pl-1 text-sm border-gray-300 rounded-lg cursor-pointer text-gray-400 focus:outline-none bg-gray-100 dark:bg-gray-900 dark:border-gray-800 dark:placeholder-gray-400"
            id="hands_image"
            name="hands"
            type="file"
            onChange={handleImageChange}
            required
          />
          <label className="font-bold">Other:</label>
          <input
            className="block w-full py-1 pl-1 text-sm border-gray-300 rounded-lg cursor-pointer text-gray-400 focus:outline-none bg-gray-100 dark:bg-gray-900 dark:border-gray-800 dark:placeholder-gray-400"
            id="other_image"
            name="other"
            type="file"
            onChange={handleImageChange}
          />
        </div>

        {/* SELECT PRACTITIONERS */}
        <label
          className="mt-10 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="practitioners"
        >
          Select Practitioners
        </label>
        <div className="relative overflow-x-auto sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-black dark:text-white">
            <thead className="text-xs text-gray-500 uppercase dark:bg-black bg-white border-b dark:border-gray-900 border-gray-200">
              <tr>
                <th scope="col" className="p-4">
                  <AiOutlinePlus />
                </th>
                <th scope="col" className="px-6 py-3">
                  Practitioner Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Specialization
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
              </tr>
            </thead>
            <tbody>
              {practitioners.map(
                (practitioner) => (
                  console.log(practitioner),
                  practitioner && practitioner.practitionerid ? ( // Add a check for practitioner and practitionerid
                    <tr
                      key={practitioner.personid}
                      className="dark:bg-black bg-white border-b dark:border-gray-900 border-gray-200 hover:dark:bg-gray-900"
                    >
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id={`checkbox-${practitioner.personid}`}
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            checked={
                              selectedPractitioner === practitioner.personid
                            }
                            onChange={() =>
                              setSelectedPractitioner(practitioner.personid)
                            }
                          />
                          <label
                            htmlFor={`checkbox-${practitioner.personid}`}
                            className="sr-only"
                          >
                            Checkbox
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >{`${practitioner.firstname} ${practitioner.lastname}`}</th>
                      <td className="px-6 py-4">
                        {practitioner.specialization}
                      </td>
                      <td className="px-6 py-4">
                        {practitioner.issenior ? "Senior" : "Junior"}
                      </td>
                      <td className="px-6 py-4">{practitioner.address}</td>
                    </tr>
                  ) : null
                )
              )}
            </tbody>
          </table>
        </div>
        {/* 
        <label
          className="mt-10 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="patients"
        >
          List of Patients
        </label>
        <div className="relative overflow-x-auto sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-black dark:text-white">
            <thead className="text-xs text-gray-500 uppercase dark:bg-black bg-white border-b dark:border-gray-900 border-gray-200">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Patient Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Age
                </th>
                <th scope="col" className="px-6 py-3">
                  Gender
                </th>
                <th scope="col" className="px-6 py-3">
                  Contact
                </th>
              </tr>
            </thead>
            <tbody>
              {/* {patients.map(
                (patient) => (
                  console.log(patient),
                  (
                    <tr
                      key={patient.id}
                      className="dark:bg-black bg-white border-b dark:border-gray-900 border-gray-200 hover:dark:bg-gray-900"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >{`${patient.firstname} ${patient.lastname}`}</th>
                      <td className="px-6 py-4">{patient.age}</td>
                      <td className="px-6 py-4">{patient.gender}</td>
                      <td className="px-6 py-4">{patient.contact}</td>
                    </tr>
                  )
                )
              )} 
            </tbody>
          </table>
        </div> */}

        <button
          type="submit"
          className="mt-10 max-w-[100px] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-green-500 hover:bg-green-400 focus:ring-green-800"
        >
          Request
        </button>
      </form>
    </div>
  );
};

export default PatientAddDiagnosis;
