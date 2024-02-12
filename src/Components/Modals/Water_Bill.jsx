import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import axios from "axios";
import "./Modal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Water_Edit = ({
  id,
  billMonth,
  payableAmout,
  billingDate,
  dueDate,
  dueAmount,
}) => {
  const [doctorName, setDoctorName] = useState(billMonth);
  const [doctorSalary, setDoctorSalary] = useState(payableAmout);
  const [doctorNumber, setDoctorNumber] = useState(billingDate);
  const [doctorAddress, setDoctorAddress] = useState(dueDate);
  const [doctorAddress5, setDoctorAddress5] = useState(dueAmount);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const sendData = () => {
    axios
      .post(`http://localhost:8000/api/v1/Water-Billed/${id}`, {
        billMonth: doctorName,
        payableAmout: doctorSalary,
        dueAmount: doctorAddress5,
        billingDate: doctorNumber,
        dueDate : doctorAddress, 
      })
      .then((response) => {
        alert("Doctor Data Added");
        setDoctorName("");
        setDoctorSalary("");
        setDoctorNumber("");
        setDoctorAddress("");
      })
      .catch((err) => console.log(err));
    handleClose();
  };

  return (
    <div>
      <Button
        style={{ position: "relative", right: "40px" }}
        onClick={handleOpen}
      >
        Edit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className="text-4xl text-center font-bold">
            Edit Water  Detail{" "}
          </h1>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-md mb-2"
              htmlFor="PatientName"
            >
              BILLING MONTH
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
            <label
              className="block text-gray-700 text-md mb-2"
              htmlFor="amountRequired"
            >
              PAYABLE AMOUNT
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
            <label
              className="block text-gray-700 text-md mb-2"
              htmlFor="doctorNumber"
            >
              BILLING DATE
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

          <div className="mb-4">
            <label
              className="block text-gray-700 text-md mb-2"
              htmlFor="doctorNumber"
            >
              DUE DATE
            </label>
            <input
              className="bg-gray-50 shadow appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="doctorNumber"
              type="text"
              placeholder="Doctor Number"
              value={doctorAddress}
              onChange={(e) => setDoctorAddress(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-md mb-2"
              htmlFor="doctorNumber"
            >
              DUE AMOUNT
            </label>
            <input
              className="bg-gray-50 shadow appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="doctorNumber"
              type="text"
              placeholder="Doctor Number"
              value={doctorAddress5}
              onChange={(e) => setDoctorAddress5(e.target.value)}
            />
          </div>
          <div className="flex justify-between">
            <button className="asdasdasdasdasdalojubb1" onClick={handleClose}>
              {" "}
              Close
            </button>
            <button
              className="asdasdasdasdasdalojubb"
              onClick={() => {
                sendData(id);
              }}
            >
              {" "}
              Save <i className="icon-ok"></i>
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Water_Edit;
