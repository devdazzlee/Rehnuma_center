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

const Teacher_Edit = ({ id, name, salary, Number, Salary_Information }) => {
  const [doctorName, setDoctorName] = useState(name);
  const [doctorSalary, setDoctorSalary] = useState(salary);
  const [doctorNumber, setDoctorNumber] = useState(Number);
  const [doctorAddress, setDoctorAddress] = useState(Salary_Information);
  const [open, setOpen] = useState(false);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const sendData = () => {
    axios
    .post(`http://localhost:8000/api/v1/updatesTeacher/${id}`, {
      name: doctorName,
        salary: doctorSalary,
        number: doctorNumber,
        address: doctorAddress,
    })
    .then((response) => {
      alert("Doctor Data Added");
      setDoctorName("");
      setDoctorSalary("");
      setDoctorNumber("");
      setDoctorAddress("");
    })
    .catch((err) => console.log(err));
    handleClose()



  };

  return (
    <div>
      <Button style={{ position: "relative", right: "150px" }} onClick={handleOpen}>
        Edit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className="text-4xl text-center font-bold">Edit Teacher Detail </h1>

          <div className="mb-4">
            <label className="block text-gray-700 text-md mb-2" htmlFor="PatientName">
            Teacher Name
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
            <label className="block text-gray-700 text-md mb-2" htmlFor="amountRequired">
            Teacher Salary
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
            <label className="block text-gray-700 text-md mb-2" htmlFor="doctorNumber">
            Teacher Number
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

          <label htmlFor="message" className="mt-6 block mb-2 text-md text-gray-900">
          Teacher Monthly Salary Information
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Doctor Monthly Salary Information"
            value={doctorAddress}
            onChange={(e) => setDoctorAddress(e.target.value)}
          ></textarea>

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

export default Teacher_Edit;
