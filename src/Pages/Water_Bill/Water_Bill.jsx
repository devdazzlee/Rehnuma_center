import axios from 'axios';
import React, { useState } from 'react';

const Water_Bill = () => {
  // State to store input values
  const [waterBillData, setWaterBillData] = useState({
    billingMonth: '',
    payableAmount: '',
    dueAmount: '',
    billingDate: '',
    dueDate: '',
  });

  // Event handler for input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setWaterBillData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Event handler for button click
  const handleAddWaterBillDetail = async() => {
    try {
      const response = await axios.post('http://localhost:8000/api/add-Water-bill', waterBillData);
      alert("Office Data Added!!")
      setWaterBillData({
        billingMonth: '',
        payableAmount: '',
        dueAmount: '',
        billingDate: '',
        dueDate: '',
      });
    } catch (error) {
      console.error('Error adding doctor detail:', error.message);
    }

    // Clear all input values
   
  };

  return (
    <>
      <h1 className="text-4xl text-center">Add Water Bill Detail</h1>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-md mb-2"
          htmlFor="billingMonth"
        >
          Billing Month
        </label>
        <input
          className="bg-gray-50 shadow appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="billingMonth"
          type="date"
          placeholder="Bill Month"
          value={waterBillData.billingMonth}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-md mb-2"
          htmlFor="payableAmount"
        >
          Payable Amount
        </label>
        <input
          className="bg-gray-50 shadow appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="payableAmount"
          type="text"
          placeholder="Payable Amount"
          value={waterBillData.payableAmount}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-md mb-2"
          htmlFor="dueAmount"
        >
          Due Amount
        </label>
        <input
          className="bg-gray-50 shadow appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="dueAmount"
          type="text"
          placeholder="Due Amount"
          value={waterBillData.dueAmount}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-md mb-2"
          htmlFor="billingDate"
        >
          Billing Date
        </label>
        <input
          className="bg-gray-50 shadow appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="billingDate"
          type="text"
          placeholder="Billing Date"
          value={waterBillData.billingDate}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-md mb-2"
          htmlFor="dueDate"
        >
          Due Date
        </label>
        <input
          className="bg-gray-50 shadow appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="dueDate"
          type="text"
          placeholder="Due Date"
          value={waterBillData.dueDate}
          onChange={handleInputChange}
        />
      </div>

      <button
        onClick={handleAddWaterBillDetail}
        className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Water Bill Detail
      </button>
    </>
  );
};

export default Water_Bill;
