import React, { useState, useEffect } from "react";
import axios from "axios";
import './Patient_Expenses.css'

const Patient_Expenses = () => {
  const [numPayments, setNumPayments] = useState(1);
  const [selectedCity, setSelectedCity] = useState("");
  const [cityData, setCityData] = useState([]);
  const [paymentDetails, setPaymentDetails] = useState([]);
  const [products, setProducts] = useState([]);
  const [productsBoolean, setProductsBoolean] = useState(false);

  const formatProjectId = (projectId) => {
    // You can implement your own logic to format or truncate the ID
    return projectId.slice(0, 8); // Example: Display the first 8 characters
  };

  const handleCityChange = (event) => {
    const selectedIndex = event.target.selectedIndex;
    console.log(selectedIndex)
    const selectedCityId =
      event.target.options[selectedIndex].getAttribute("data-id");
    setSelectedCity({ id: selectedCityId, name: event.target.value });
     console.log(selectedCity)
  };

  const handleNumPaymentsChange = (event) => {
    setNumPayments(parseInt(event.target.value, 10) || 1);
  };

  const handlePaymentNameChange = (index, value) => {
    const updatedPaymentDetails = [...paymentDetails];
    updatedPaymentDetails[index] = {
      ...updatedPaymentDetails[index],
      paymentName: value,
    };
    setPaymentDetails(updatedPaymentDetails);
  };

  const handlePaymentDetailChange = (index, value) => {
    const updatedPaymentDetails = [...paymentDetails];
    updatedPaymentDetails[index] = {
      ...updatedPaymentDetails[index],
      paymentDetail: Number(value),
    };
    setPaymentDetails(updatedPaymentDetails);
  };

  const generatePaymentInputs = () => {
    const paymentInputs = [];
    for (let i = 0; i < numPayments; i++) {
      paymentInputs.push(
        <div key={i} className="mb-4">
          <label
            className="text-gray-700 text-md  mb-2  mr-2"
            htmlFor={`paymentName${i}`}
          >
            Expense  Name 
          </label>
          <input
            type="text"
            style={{"border" :"1px solid black"}}
            id={`paymentName${i}`}
            className="mr-2 p-2"
            placeholder={`Expense Name ${i + 1}`}
            onChange={(e) => handlePaymentNameChange(i, e.target.value)}
          />

          <label
            className="text-gray-700 text-md  mb-2 ml-2  mr-2"
            htmlFor={`paymentDetail${i}`}
          >
            Payment
          </label>
          <input
            type="text"
            style={{"border" :"1px solid black"}}
            className="mr-2 p-2"
            id={`paymentDetail${i}`}
            placeholder={`Payment  ${i + 1}`}
            onChange={(e) => handlePaymentDetailChange(i, e.target.value)}
          />
        </div>
      );
    }
    return paymentInputs;
  };

  const handleAddPaymentDetail = async () => {
    if (!selectedCity) {
      alert("Please select a city before adding payment details");
      // console.error("");
      return;
    }

    console.log("Selected City:", selectedCity);
    console.log("Payment Details:", paymentDetails);
    try {
      const response = await axios.put(
        `http://localhost:8000/api/v1/paymentDetail/${selectedCity.id}`,
        {
          paymentDetail: paymentDetails,
        }
      );

      console.log("API Response:", response.data);
      alert("Payment Added");
      window.location.reload(true);
    } catch (error) {
      alert("Payment Detail not Added");
      console.error("Error adding payment details:", error);
    }
  };

  const getAllProducts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/v1/products`
      );
      setProducts(response.data.data);
      setCityData(response.data.data);
      setProductsBoolean(true);
    } catch (error) {
      console.log("error in getting all products", error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, [productsBoolean]);

  return (
    <>
      <h1 className="text-4xl text-center">Add Payment Patient Details</h1>



      <div  className="flex pt-4 items-center	  my-4" >
      <div className="mb-4 mr-4">
        <label
          className="text-gray-700 text-lg  mb-2"
          htmlFor="citySelect"
        >
          Patient Name    &nbsp;  
        </label>
        <select
            style={{"border" :"1px solid black"}}
          id="citySelect"
          className="p-2"
          value={selectedCity.patientName}
          onChange={handleCityChange}
        >
          <option value={"Please Select a Value"} data-id={Math.random()}>
            Please Select a Value
          </option>
          {cityData.map((city) => (
            <option key={city._id} value={city.projectName} data-id={city._id}>
             {city.patientName}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label
          className="text-gray-700 text-lg  mb-2"
          htmlFor="numPayments"
        >
           Expense &nbsp;  
        </label>
        <input
          style={{"border" :"1px solid black"}}
          type="number"
          id="numPayments"
          value={numPayments}
          className="p-2"
          onChange={handleNumPaymentsChange}
          min="1"
        />
      </div>
      </div>

      

      {generatePaymentInputs()}

      <button
        className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddPaymentDetail}
      >
        Add Payment Detail
      </button>
    </>
  );
};

export default Patient_Expenses;
