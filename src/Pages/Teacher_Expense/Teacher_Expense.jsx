import axios from 'axios';
import React, { useState } from 'react';

const Teacher_Expense = () => {
  // State to store input values
  const [teacherData, setTeacherData] = useState({
    TeacherName: '',
    TeacherSalary: '',
    TeacherNumber: '',
    TeacherAddress: '',
  });

  // Event handler for input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setTeacherData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Event handler for button click
  const handleAddTeacherDetail = async() => {
    try {
      const response = await axios.post('http://localhost:8000/api/add-Teacher-detail', teacherData);
      alert("Teacher Data Added")
      console.log(response)
      setTeacherData({
        TeacherName: '',
        TeacherSalary: '',
        TeacherNumber: '',
        TeacherAddress: '',
      });
    } catch (error) {
      console.error('Error adding doctor detail:', error.message);
    }


  };

  return (
    <>
      <h1 className="text-4xl text-center">Add Teacher Detail</h1>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-md mb-2"
          htmlFor="TeacherName"
        >
          Teacher Name
        </label>
        <input
          className="bg-gray-50 shadow appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="TeacherName"
          type="text"
          placeholder="Enter Teacher Name"
          value={teacherData.TeacherName}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-md mb-2"
          htmlFor="TeacherSalary"
        >
          Teacher Salary
        </label>
        <input
          className="bg-gray-50 shadow appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="TeacherSalary"
          type="text"
          placeholder="Enter Teacher Salary"
          value={teacherData.TeacherSalary}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-md mb-2"
          htmlFor="TeacherNumber"
        >
          Teacher Number
        </label>
        <input
          className="bg-gray-50 shadow appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="TeacherNumber"
          type="text"
          placeholder="Enter Teacher Number"
          value={teacherData.TeacherNumber}
          onChange={handleInputChange}
        />
      </div>

      <label
        htmlFor="TeacherAddress"
        className="mt-6 block mb-2 text-md text-gray-900 dark:text-white"
      >
        Teacher Salaray Information 
      </label>
      <textarea
        id="TeacherAddress"
        rows="4"
        className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write Teacher Salaray Information..."
        value={teacherData.TeacherAddress}
        onChange={handleInputChange}
      ></textarea>
      <button
        onClick={handleAddTeacherDetail}
        className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Teacher Detail
      </button>
    </>
  );
};

export default Teacher_Expense;
