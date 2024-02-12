import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
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
export default function StaffSalary_View({ staffName, staffSalary, staffNumber,staffAddress  }) {
  const [selectedCity, setSelectedCity] = useState('');
  const [imageSrcList, setImageSrcList] = useState([]);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


    


  return (
    <div>
      <Button
        style={{ position: "relative", right: "45px" }}
        onClick={handleOpen}
      >
        View
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1   className="text-4xl text-center font-bold" >Office Detail</h1>

<h1   className="text-lg p-2">Staff Name : {staffName}</h1>
<h1 className="text-lg p-2" >Staff Salary :  {staffSalary}</h1>
<h1 className="text-lg p-2" > Staff Number   :  {staffNumber}</h1>
<h1 className="text-lg p-2" >Staff Salary Info:   :  {staffAddress}</h1>
          <div className="flex justify-between">

          </div>
        </Box>
      </Modal>
    </div>
  );
}
