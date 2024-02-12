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

const Office_Edit = ({ id, name, salary, Number, Salary_Information ,  rentAmount, officeAddress, officeArea }) => {
  const [doctorName, setDoctorName] = useState(rentAmount);
  const [doctorSalary, setDoctorSalary] = useState(officeAddress);
  const [doctorNumber, setDoctorNumber] = useState(officeArea);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Fetch data from the API using the provided id
    axios
      .get(`http://localhost:8000/api/v1/doctor-details/${id}`)
      .then((response) => {
        const data = response.data;
        setDoctorName(data.name);
        setDoctorSalary(data.salary);
        setDoctorNumber(data.number);
      })
      .catch((error) => {
        console.error("Error fetching doctor details:", error.message);
      });
  }, [id]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddDoctorDetail = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/add-doctor-detail", {
        name: doctorName,
        salary: doctorSalary,
        number: doctorNumber,
      });
      alert("Doctor Data Added");
      setDoctorName("");
      setDoctorSalary("");
      setDoctorNumber("");
    } catch (error) {
      console.error("Error adding doctor detail:", error.message);
    }
  };

  const sendData = () => {
    axios
    .post(`http://localhost:8000/api/v1/updatesOffice/${id}`, {
      name: doctorName,
        salary: doctorSalary,
        number: doctorNumber,
    })
    .then((response) => {
      alert("Doctor Data Added");
      setDoctorName("");
      setDoctorSalary("");
      setDoctorNumber("");
    })
    .catch((err) => console.log(err));
    handleClose()



  };

  return (
    <div>
      <Button style={{ position: "relative", right: "80px" }} onClick={handleOpen}>
        Edit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className="text-4xl text-center font-bold">Edit Office Detail </h1>

          <div className="mb-4">
            <label className="block text-gray-700 text-md mb-2" htmlFor="PatientName">
            OFFICE RENT	

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
            OFFICE ADDRESS

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
            OFFICE AREA

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

export default Office_Edit;
