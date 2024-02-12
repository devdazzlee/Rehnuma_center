    import * as React from "react";
    import Box from "@mui/material/Box";
    import Button from "@mui/material/Button";
    import Typography from "@mui/material/Typography";
    import Modal from "@mui/material/Modal";
    import { useState , useRef } from "react";
    import { Navigate, Link, useNavigate } from "react-router-dom";
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

    export default function Modal1({id, name, age, admissionDate, monthlyFee , admissionFee, requiredAmount , patientDec }) {
    const [selectedCity, setSelectedCity] = useState('');
    const [imageSrcList, setImageSrcList] = useState([]);
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [projectName, setprojectName] = useState();
    const [Description, setDescription] = useState();
    const [imageSrc, setImageSrc] = useState(null);
    const [selectedFiles, setSelectedFiles] = useState(null);
    const [requiredAmout, setRequiredAmout] = useState();
    const pictureImageTxt = "Choose an image";

    const initialPatientData = {
        patientName: '',
        patientAge: '',
        AdmissionDate: '',
        AdmissionFee: '',
        MonthlyFee: '',
        RequiredAmount: '',
        PatientDescription: '',
      };
    
      const [patientData, setPatientData] = useState(initialPatientData);
    
      const patientNameRef = useRef(null);
      const patientAgeRef = useRef(null);
      const admissionDateRef = useRef(null);
      const admissionFeeRef = useRef(null);
      const monthlyFeeRef = useRef(null);
      const requiredAmountRef = useRef(null);
      const patientDescriptionRef = useRef(null);
    
      const handleChange = (e) => {
        const { id, value } = e.target;
        setPatientData((prevData) => ({
          ...prevData,
          [id]: value,
        }));
      };
    
      const resetForm = () => {
        setPatientData(initialPatientData);
    
        // Clear input values using refs
        patientNameRef.current.value = '';
        patientAgeRef.current.value = '';
        admissionDateRef.current.value = '';
        admissionFeeRef.current.value = '';
        monthlyFeeRef.current.value = '';
        requiredAmountRef.current.value = '';
        patientDescriptionRef.current.value = '';
      };
    
      const handleAddPatient = async () => {
      
        try {
          await axios.post('http://localhost:8000/api/v1/addPatient', );
          alert('Patient Data Added');
          resetForm();
          // Additional actions upon successful addition
        } catch (error) {
          console.error('Error adding patient:', error);
          // Handle error, e.g., display an error message to the user
        }
      };
    const sendData = (e) => {
    let id = e
    axios
    .post(`http://localhost:8000/api/v1/updates/${id}`, patientData)
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
    handleClose()
    

    };
    return (
        <div>
        <Button
            style={{ position: "relative", right: "160px" }}
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
            <div className="mb-4">
        <label className="block text-gray-700 text-md mb-2" htmlFor="patientName">
          Patient Name
        </label>
        <input
       ref={patientNameRef}
          className="bg-gray-50 shadow appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="patientName"
          type="text"
        //   value={}
          placeholder={`${name}`}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-md mb-2" htmlFor="patientAge">
          Patient Age
        </label>
        <input
        placeholder={`${age}`}
                  ref={patientAgeRef}

          className="bg-gray-50 shadow appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="patientAge"
          type="number"  // Change type to "number"
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-md mb-2" htmlFor="AdmissionDate">
          Admission Date
        </label>
        <input
                  ref={admissionDateRef}

          className="bg-gray-50 shadow appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="AdmissionDate"
          type="date"
          placeholder={`${admissionDate}`}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-md mb-2" htmlFor="AdmissionFee">
          Admission Fee
        </label>
        <input
        ref={admissionFeeRef}
          className="bg-gray-50 shadow appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="AdmissionFee"
          type="text"
          placeholder={`${admissionFee}`}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-md mb-2" htmlFor="MonthlyFee">
          Monthly Fee
        </label>
        <input
        ref={monthlyFeeRef}
          className="bg-gray-50 shadow appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="MonthlyFee"
          type="text"
          placeholder={`${monthlyFee}`}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-md mb-2">
          Required Amount
        </label>
        <input
        ref={requiredAmountRef}
          className="bg-gray-50 shadow appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="RequiredAmount"
          type="text"
          placeholder={`${requiredAmount}`}
          onChange={handleChange}
        />
      </div>

      <label
        htmlFor="PatientDescription"
        className="mt-6 block mb-2 text-md font-medium text-gray-900 dark:text-white"
      >
        Patient Description
      </label>
      <textarea
      ref={patientDescriptionRef}
        onChange={handleChange}
        id="PatientDescription"
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={`${patientDec}`}
      ></textarea>
    
      <div className="flex justify-between">
                <button className="asdasdasdasdasdalojubb1" onClick={handleClose}>
                {" "}
                Close
                </button>
                {/* <Link    to={''} > */}

                <button
                className="asdasdasdasdasdalojubb"
                onClick={() => {
                    sendData(id);
                }}
                >
                {" "}
                Save <i class="icon-ok"></i>
                </button>
                {/* </Link> */}
            </div>
            </Box>
        </Modal>
        </div>
    );
    }
