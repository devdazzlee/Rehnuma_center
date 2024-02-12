import axios from 'axios';
import React, { useState } from 'react';

const Staff_Salaries = () => {
  // State to store input values
  const [staffData, setStaffData] = useState({
    staffName: '',
    staffSalary: '',
    staffNumber: '',
    staffAddress: '',
  });

  // Event handler for input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setStaffData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Event handler for button click
  const handleAddStaffDetail = async() => {
    try {
      const response = await axios.post('http://localhost:8000/api/staff-salaries', staffData);
      alert("Office Data Added!!")
      setStaffData({
        staffName: '',
        staffSalary: '',
        staffNumber: '',
        staffAddress: '',
      });
    } catch (error) {
      console.error('Error adding doctor detail:', error.message);
    }


    // Clear all input values
  
  };

  return (
    <>
      <h1 className="text-4xl text-center">Add Staff Detail</h1>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-md mb-2"
          htmlFor="staffName"
        >
          Staff Name
        </label>
        <input
          className="bg-gray-50 shadow appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="staffName"
          type="text"
          placeholder="Enter Staff Name"
          value={staffData.staffName}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-md mb-2"
          htmlFor="staffSalary"
        >
          Staff Salary
        </label>
        <input
          className="bg-gray-50 shadow appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="staffSalary"
          type="text"
          placeholder="Enter Staff Salary"
          value={staffData.staffSalary}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-md mb-2"
          htmlFor="staffNumber"
        >
          Staff Number
        </label>
        <input
          className="bg-gray-50 shadow appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="staffNumber"
          type="text"
          placeholder="Enter Staff Number"
          value={staffData.staffNumber}
          onChange={handleInputChange}
        />
      </div>

      <label
        htmlFor="staffAddress"
        className="mt-6 block mb-2 text-md font-medium text-gray-900 dark:text-white"
      >
        Staff Salary Infomation
      </label>
      <textarea
        id="staffAddress"
        rows="4"
        className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter Staff Salary Infomation..."
        value={staffData.staffAddress}
        onChange={handleInputChange}
      ></textarea>

      <button
        onClick={handleAddStaffDetail}
        className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Staff Detail
      </button>
    </>
  );
};

export default Staff_Salaries;
