import axios from 'axios';
import React, { useState } from 'react';

const Electricity_Bill = () => {
  // State to store input values
  const [electricityBillData, setElectricityBillData] = useState({
    billingMonth: '',
    payableAmount: '',
    dueAmount: '',
    billingDate: '',
    dueDate: '',
  });

  // Event handler for input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setElectricityBillData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Event handler for button click
  const handleAddElectricityBillDetail = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/add-Electricity-bill', electricityBillData);
      alert("Office Data Added!!")
      setElectricityBillData({
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
      <h1 className="text-4xl text-center">Add Electricity Bill Detail</h1>

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
          value={electricityBillData.billingMonth}
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
          value={electricityBillData.payableAmount}
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
          value={electricityBillData.dueAmount}
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
          value={electricityBillData.billingDate}
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
          value={electricityBillData.dueDate}
          onChange={handleInputChange}
        />
      </div>

      <button
        onClick={handleAddElectricityBillDetail}
        className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Electricity Bill Detail
      </button>
    </>
  );
};

export default Electricity_Bill;
