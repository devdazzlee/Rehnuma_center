import React, { useState } from 'react';
import axios from 'axios';

const Doctor_Expense = () => {
  // State variables to store input values
  const [doctorName, setDoctorName] = useState('');
  const [doctorSalary, setDoctorSalary] = useState('');
  const [doctorNumber, setDoctorNumber] = useState('');
  const [doctorAddress, setDoctorAddress] = useState('');

  // Function to handle button click
    const handleAddDoctorDetail = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/add-doctor-detail', {
        name: doctorName,
        salary: doctorSalary,
        number: doctorNumber,
        address: doctorAddress,
      });
      alert("Doctor Data Added")
      setDoctorName('');
      setDoctorSalary('');
      setDoctorNumber('');
      setDoctorAddress('');
    } catch (error) {
      console.error('Error adding doctor detail:', error.message);
    }
  };


  return (
    <>
      <h1 className="text-4xl text-center">Add Doctor Detail </h1>

      <div className="mb-4">
        <label className="block text-gray-700 text-md  mb-2" htmlFor="PatientName">
          Doctor Name
        </label>
        <input
          className="bg-gray-50 shadow appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="PatientName"
          type="text"
          placeholder="Enter Doctor Name"
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-md  mb-2" htmlFor="amountRequired">
          Doctor Salary
        </label>
        <input
          className="bg-gray-50 shadow appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="amountRequired"
          type="text"
          placeholder="Enter Doctor Salary"
          value={doctorSalary}
          onChange={(e) => setDoctorSalary(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-md  mb-2" htmlFor="doctorNumber">
          Doctor Number
        </label>
        <input
          className="bg-gray-50 shadow appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="doctorNumber"
          type="text"
          placeholder="Doctor Number"
          value={doctorNumber}
          onChange={(e) => setDoctorNumber(e.target.value)}
        />
      </div>

      <label htmlFor="message" className="mt-6  block mb-2 text-md  text-gray-900">
      Doctor Monthly Salary
      </label>
      <textarea
        id="message"
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Doctor Monthly Salary"
        value={doctorAddress}
        onChange={(e) => setDoctorAddress(e.target.value)}
      ></textarea>
      <button
        className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddDoctorDetail}
      >
        Add Doctor Detail
      </button>
    </>
  );
};

export default Doctor_Expense;
