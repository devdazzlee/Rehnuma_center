import axios from 'axios';
import React, { useState } from 'react';

const Groccery_Expenses = () => {
  // State to store input values
  const [grocceryData, setGrocceryData] = useState({
    amountRequired: '',
    grocceryDate: '',
    grocceryItems: '',
  });

  // Event handler for input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setGrocceryData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Event handler for button click
  const handleAddGrocceryDetail =  async() => {
    try {
      const response = await axios.post('http://localhost:8000/api/add-Groccery-detail', grocceryData);
      alert("Expense Data Added")
      console.log(response)
      setGrocceryData({
        amountRequired: '',
        grocceryDate: '',
        grocceryItems: '',
      });
    } catch (error) {
      console.error('Error adding doctor detail:', error.message);
    }
  };

  return (
    <>
      <h1 className="text-4xl text-center">Add Groccery Detail</h1>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-md mb-2"
          htmlFor="amountRequired"
        >
          Total Groccery Amount
        </label>
        <input
          className="bg-gray-50 shadow appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="amountRequired"
          type="text"
          placeholder="Amount here.."
          value={grocceryData.amountRequired}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-md mb-2"
          htmlFor="grocceryDate"
        >
          Groccery Date
        </label>
        <input
          className="bg-gray-50 shadow appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="grocceryDate"
          type="date"
          value={grocceryData.grocceryDate}
          onChange={handleInputChange}
        />
      </div>

      <label
        htmlFor="grocceryItems"
        className="mt-6 block mb-2 text-md text-gray-900 dark:text-white"
      >
        Groccery Items
      </label>
      <textarea
        id="grocceryItems"
        rows="4"
        className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write Groccery Items here..."
        value={grocceryData.grocceryItems}
        onChange={handleInputChange}
      ></textarea>

      <button
        onClick={handleAddGrocceryDetail}
        className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Groccery Detail
      </button>
    </>
  );
};

export default Groccery_Expenses;
