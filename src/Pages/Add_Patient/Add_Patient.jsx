import React, { useState, useRef } from 'react';

import axios from 'axios';


const Add_Patient = () => {
  const initialPatientData = {
    patientName: '',
    patientAge: '',
    AdmissionDate: '',
    AdmissionFee: '',
    MonthlyFee: '',
    RequiredAmount: '',
    PatientDescription: '',
  };

  const [patientData, setPatientData] = useState(initialPatientData);

  const patientNameRef = useRef(null);
  const patientAgeRef = useRef(null);
  const admissionDateRef = useRef(null);
  const admissionFeeRef = useRef(null);
  const monthlyFeeRef = useRef(null);
  const requiredAmountRef = useRef(null);
  const patientDescriptionRef = useRef(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPatientData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const resetForm = () => {
    setPatientData(initialPatientData);

    // Clear input values using refs
    patientNameRef.current.value = '';
    patientAgeRef.current.value = '';
    admissionDateRef.current.value = '';
    admissionFeeRef.current.value = '';
    monthlyFeeRef.current.value = '';
    requiredAmountRef.current.value = '';
    patientDescriptionRef.current.value = '';
  };

  const handleAddPatient = async () => {
    console.log(patientData);
    try {
      await axios.post('http://localhost:8000/api/v1/addPatient', patientData);
      alert('Patient Data Added');
      resetForm();
      // Additional actions upon successful addition
    } catch (error) {
      console.error('Error adding patient:', error);
      // Handle error, e.g., display an error message to the user
    }
  };

  return (
    <div>
      <h1 className="text-4xl text-center">Add Current Patient</h1>

      <div className="mb-4">
        <label className="block text-gray-700 text-md mb-2" htmlFor="patientName">
          Patient Name
        </label>
        <input
       ref={patientNameRef}
          className="bg-gray-50 shadow appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="patientName"
          type="text"
          placeholder="Write Patient Name here.."
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-md mb-2" htmlFor="patientAge">
          Patient Age
        </label>
        <input
                  ref={patientAgeRef}

          className="bg-gray-50 shadow appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="patientAge"
          type="number"  // Change type to "number"

          placeholder="Write Patient Age here.."
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-md mb-2" htmlFor="AdmissionDate">
          Admission Date
        </label>
        <input
                  ref={admissionDateRef}

          className="bg-gray-50 shadow appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="AdmissionDate"
          type="date"
          placeholder="Select Admission Date"
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-md mb-2" htmlFor="AdmissionFee">
          Admission Fee
        </label>
        <input
        ref={admissionFeeRef}
          className="bg-gray-50 shadow appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="AdmissionFee"
          type="text"
          placeholder="Write Admission Fee here.."
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-md mb-2" htmlFor="MonthlyFee">
          Monthly Fee
        </label>
        <input
        ref={monthlyFeeRef}
          className="bg-gray-50 shadow appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="MonthlyFee"
          type="text"
          placeholder="Write Monthly Fee  here.."
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-md mb-2">
          Required Amount
        </label>
        <input
        ref={requiredAmountRef}
          className="bg-gray-50 shadow appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="RequiredAmount"
          type="text"
          placeholder="Write Required Amount  here.."
          onChange={handleChange}
        />
      </div>

      <label
        htmlFor="PatientDescription"
        className="mt-6 block mb-2 text-md font-medium text-gray-900 dark:text-white"
      >
        Patient Description
      </label>
      <textarea
      ref={patientDescriptionRef}
        onChange={handleChange}
        id="PatientDescription"
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write  Patient Description here.."
      ></textarea>

      <button
        onClick={handleAddPatient}
        className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Patient Detail
      </button>
    </div>
  );
};

export default Add_Patient;
