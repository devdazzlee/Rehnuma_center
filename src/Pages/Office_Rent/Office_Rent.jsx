import axios from 'axios';
import React, { useState } from 'react';

const Office_Rent = () => {
  // State to store input values
  const [officeData, setOfficeData] = useState({
    rentAmount: '',
    officeAddress: '',
    officeArea: '',
  });

  // Event handler for input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setOfficeData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Event handler for button click
  const handleAddOfficeDetail =  async() => {
    console.log('Office Data:', officeData);
if(officeData.rentAmount && officeData.officeAddress && officeData.officeArea){
  
  try {
    const response = await axios.post('http://localhost:8000/api/add-Office-rent', officeData);
    alert("Office Data Added!!")
    setOfficeData({
      rentAmount: '',
      officeAddress: '',
      officeArea: '',
    });
  } catch (error) {
    console.error('Error adding doctor detail:', error.message);
  }
}
else{
  alert("Please Add Data")
}
   
  };

  return (
    <>
      <h1 className="text-4xl text-center">Add Office Detail</h1>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-md mb-2"
          htmlFor="rentAmount"
        >
          Office Rent
        </label>
        <input
          className="bg-gray-50 shadow appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="rentAmount"
          type="text"
          placeholder="Rent price here.."
          value={officeData.rentAmount}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-md mb-2"
          htmlFor="officeAddress"
        >
          Office Address
        </label>
        <input
          className="bg-gray-50 shadow appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="officeAddress"
          type="text"
          placeholder="Address here.."
          value={officeData.officeAddress}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-md mb-2"
          htmlFor="officeArea"
        >
          Office Area
        </label>
        <input
          className="bg-gray-50 shadow appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="officeArea"
          type="text"
          placeholder="Area here..."
          value={officeData.officeArea}
          onChange={handleInputChange}
        />
      </div>

      <button
        onClick={handleAddOfficeDetail}
        className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Office Detail
      </button>
    </>
  );
};

export default Office_Rent;
