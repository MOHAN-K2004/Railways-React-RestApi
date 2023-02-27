import React, { useState, useEffect } from "react";

import "./PassengerDetails.css";
import axios from "../../axios";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DirectionsTransitIcon from "@mui/icons-material/DirectionsTransit";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
// import Editdetails from "./Editdetails";
// import { useStates } from "../../States";
const PassengerDetails = () => {
  const [PassengerDetails, setPassengerDetails] = useState([]);
//   const {setEditPassenger,editPassenger} = useStates();
  const navigate = useNavigate();
  const getPassengerdetails = () => {
    fetch("http://localhost:8080/ticketbookingdetails/view")
      .then((res) => res.json())
      .then((result) => {
        setPassengerDetails(result);
        console.log(result);
      });
  };
  useEffect(() => {
    getPassengerdetails();
  }, []);
  const DeletePassengerDetails = (trainno) => {
    console.log(trainno);
    axios.delete(`/ticketbookingdetails/delete/${trainno}`).then((res) => {
      getPassengerdetails();
    });
  };
  const gotoAddPassengerDetails = ()=>{
    navigate("/ticketbookingform")
  } 
//   const gotoBookTicket = ()=>{
//     navigate("/ticketbookingform")
//   } 
//   const gotoEditPage = () =>{
//     navigate("/editpassengerdetails")
//     console.log(editPassenger);
//   }
  return (
    <div className="All1">
      <div className="topInViewPassenger">
        <h3>
          <DirectionsTransitIcon />
          Passenger Details
          <DirectionsTransitIcon />
        </h3>
        <div className="bur">

        <Button onClick={gotoAddPassengerDetails} variant="contained" color="success">
          Add Passenger Details
        </Button>
        </div>
      </div>
      <div className="passengertable">

 
      <table className="passengertablehead">
        <tr>
          <th>S.No</th>
          <th>Train No</th>
          <th>Passenger Name's</th>
          <th>Travelling Date</th>
          <th>Adults</th>
          <th>Childs</th>
          <th>Passenger's Age</th>
          <th>Gender's</th>
          <th>Coach</th>
          <th>Class</th>
          <th>seats</th>
          <th>Depature</th>
          <th>Arrival</th>
          <th>Edit</th>
          <th>Delete</th>
          <th>Payment</th>
        </tr>
        <br />
        {PassengerDetails.map((train, index) => {
          return (
            <tr>
              <td>{train.no}</td>
              <td>{train.trainno}</td>
              <td>{train.passenger_name}</td>
              <td>{train.travelling_date}</td>
              <td>{train.no_of_adults}</td>
              <td>{train.no_of_childs}</td>
              <td>{train.passenger_age}</td>
              <td>{train.passenger_gender}</td>
              <td>{train.prefered_coach}</td>
              <td>{train.prefered_class}</td>
              <td>{train.prefered_seat}</td>
              <td>{train.depature}</td>
              <td>{train.arrival}</td>
              <td>
                <div  className="editicon">
                {/* onClick={()=>{gotoEditPage();setEditPassenger(train)}} */}
                  <EditIcon />
                </div>
              </td>
              <td>
                <div
                  className="deleteicon"
                  onClick={() => DeletePassengerDetails(train.no)}
                >
                  <DeleteIcon />
                </div>
              </td>
              <td>
              {/* onClick={()=>{gotoPayment()}} */}
                <div  className="Paymenticon">
                   <u>Payment</u>
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
export default PassengerDetails;
