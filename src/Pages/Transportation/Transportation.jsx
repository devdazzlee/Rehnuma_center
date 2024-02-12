import axios from 'axios';
import React, { useState } from 'react';

const Transportation = () => {
  // State to store input values
  const [transportationData, setTransportationData] = useState({
    staffName: '',
    transportationType: '',
    transportationFuel: '',
  });

  // Event handler for input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setTransportationData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Event handler for button click
  const handleAddTransportationDetail = async() => {
    try {
      const response = await axios.post('http://localhost:8000/api/add-Transportation-rent', transportationData);
      alert("Office Data Added!!")
      setTransportationData({
        staffName: '',
        transportationType: '',
        transportationFuel: '',
      });
    } catch (error) {
      console.error('Error adding doctor detail:', error.message);
    }

    // Clear all input values
   
  };

  return (
    <>
      <h1 className="text-4xl text-center">Add Transportation Detail</h1>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-md mb-2"
          htmlFor="staffName"
        >
          Transportation Staff Name
        </label>
        <input
          className="bg-gray-50 shadow appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="staffName"
          type="text"
          placeholder="Name here..."
          value={transportationData.staffName}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-md mb-2"
          htmlFor="transportationType"
        >
          Transportation Type
        </label>
        <input
          className="bg-gray-50 shadow appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="transportationType"
          type="text"
          placeholder="Type here..."
          value={transportationData.transportationType}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-md mb-2"
          htmlFor="transportationFuel"
        >
          Transportation Fuel
        </label>
        <input
          className="bg-gray-50 shadow appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="transportationFuel"
          type="text"
          placeholder="Fuel here..."
          value={transportationData.transportationFuel}
          onChange={handleInputChange}
        />
      </div>

      <button
        onClick={handleAddTransportationDetail}
        className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Transportation Detail
      </button>
    </>
  );
};

export default Transportation;
