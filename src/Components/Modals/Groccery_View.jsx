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
export default function Groccery_View({ totalAmount, date, items }) {
  const [selectedCity, setSelectedCity] = useState("");
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

  return (
    <div>
      <Button
        style={{ position: "relative", right: "70px" }}
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
          <h1 className="text-4xl text-center font-bold">Grocery Detail</h1>
          <h1 className="text-lg p-2">Total Amount : {totalAmount}</h1>
          <h1 className="text-lg p-2">Date : {date}</h1>
          <h1 className="text-lg p-2"> Items : {items}</h1>
          <div className="flex justify-between"></div>
        </Box>
      </Modal>
    </div>
  );
}
