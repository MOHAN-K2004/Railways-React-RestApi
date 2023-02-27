import React, { useState, useEffect } from "react";

import "./ViewTrainDetails.css";
import axios from "../../axios";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DirectionsTransitIcon from "@mui/icons-material/DirectionsTransit";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
// import Editdetails from "./Editdetails";
import { useStates } from "../../States";
const ViewTrainDetails = () => {
  const [trainDetails, setTrainDetails] = useState([]);
  const {setEditTrain,editTrain} = useStates();
  const navigate = useNavigate();
  const getTraindetails = () => {
    fetch("http://localhost:8080/traindetails/view")
      .then((res) => res.json())
      .then((result) => {
        setTrainDetails(result);
        console.log(result);
      });
  };
  useEffect(() => {
    getTraindetails();
  }, []);
  const DeleteTrainDetails = (trainno) => {
    console.log(trainno);
    axios.delete(`/traindetails/delete/${trainno}`).then((res) => {
      getTraindetails();
    });
  };
  const gotoAddTrainDetails = ()=>{
    navigate("/addtraindetails")
  } 
  const gotoBookTicket = ()=>{
    navigate("/ticketbookingform")
  } 
  const gotoEditPage = () =>{
    navigate("/edittraindetails")
    console.log(editTrain);
  }
  return (
    <div className="All">
      <div className="topInViewTrain">
        <h3>
          <DirectionsTransitIcon />
          Train Details
          <DirectionsTransitIcon />
        </h3>
        <Button onClick={gotoAddTrainDetails} variant="contained" color="success">
          Add Train Detail
        </Button>
      </div>
      <div className="traindetailstable">

    
      <table className="">
        <tr>
          <th>S.No</th>
          <th>Train No</th>
          <th>Train Name</th>
          <th>Train Start Point</th>
          <th>Train Start Time</th>
          <th>Train End Point</th>
          <th>Train End Time</th>
          <th>Distance in KM</th>
          <th>Classes</th>
          <th>Service Days</th>
          <th>Stops</th>
          <th>Duration</th>
          <th>Days</th>
          <th>Edit</th>
          <th>Delete</th>
          <th>Booking</th>
        </tr>
        <br />
        {trainDetails.map((train, index) => {
          return (
            <tr>
              <td>{train.no}</td>
              <td>{train.trainno}</td>
              <td>{train.trainname}</td>
              <td>{train.trainStartPoint}</td>
              <td>{train.trainStartTime}</td>
              <td>{train.trainEndPoint}</td>
              <td>{train.trainEndTime}</td>
              <td>{train.distance_in_KM}</td>
              <td>{train.classes}</td>
              <td>{train.serviceDays}</td>
              <td>{train.stops}</td>
              <td>{train.duration}</td>
              <td>{train.days}</td>
              <td>
                <div onClick={()=>{gotoEditPage();setEditTrain(train)}} className="editicon">
                  <EditIcon />
                </div>
              </td>
              <td>
                <div
                  className="deleteicon"
                  onClick={() => DeleteTrainDetails(train.no)}
                >
                  <DeleteIcon />
                </div>
              </td>
              <td>
                <div onClick={()=>{gotoBookTicket()}} className="bookticketicon">
                   <u>Book</u>
                </div>
              </td>

            </tr>
          );
        })}
      </table>
      </div>
    </div>
  );
};
export default ViewTrainDetails;
