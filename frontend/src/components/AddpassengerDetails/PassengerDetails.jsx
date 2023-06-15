import React, { useState, useEffect } from "react";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import "./PassengerDetails.css";
import axios from "../../axios";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PaymentIcon from '@mui/icons-material/Payment';
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useStates } from "../../States";
import { toast } from "react-hot-toast";
const PassengerDetails = () => {
  const [PassengerDetails, setPassengerDetails] = useState([]);
    const {setEditPassenger,editPassenger,
      setPrice} = useStates();
  const navigate = useNavigate();
  const getPassengerdetails = () => {
    fetch("http://localhost:2424/ticketbookingdetails/view")
      .then((res) => res.json())
      .then((result) => {
        setPassengerDetails(result);
        console.log(result);
      });
  };
  const buttonStyle = {
    fontFamily: "Arial",
    fontSize: "16px",
  };
  const labelStyle = {
    fontFamily: "Popins",
    fontSize: "16px",
  };
  useEffect(() => {
    getPassengerdetails();
  }, []);
  const DeletePassengerDetails = (trainno) => {
    console.log(trainno);
    axios.delete(`/ticketbookingdetails/delete/${trainno}`).then((res) => {
      // alert("Deleted Successfully")
      toast.success("Deleted Sucessfully")
      getPassengerdetails();
    });
  };
  const gotoAddPassengerDetails = () => {
    navigate("/ticketbookingform");
  };
    
    const gotoEditPage = () =>{
      navigate("/viewpassengerdetails")
      console.log(editPassenger);
    }
  return (
    <div className="All1">
      <div className="topInViewPassenger">
        <h3>
          <PermContactCalendarIcon />
          Passenger Details
          <PermContactCalendarIcon />
        </h3>
        <div className="bur">
          
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
            {/* <th>Childs</th> */}
            <th>Passenger's Age</th>
            <th>Gender's</th>
            <th>Coach</th>
            <th>Class</th>
            <th>seats</th>
            <th>Depature</th>
            <th>Arrival</th>
            <th>Price</th>
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
                {/* <td>{train.no_of_childs}</td> */}
                <td>{train.passenger_age}</td>
                <td>{train.passenger_gender}</td>
                <td>{train.prefered_coach}</td>
                <td>{train.prefered_class}</td>
                <td>{train.prefered_seat}</td>
                <td>{train.depature}</td>
                <td>{train.arrival}</td>
                  <td>{train.price}</td>
                <td>
                  <div className="editicon"onClick={()=>{gotoEditPage();setEditPassenger(train)}}>
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
                  <div  onClick={()=>{setPrice(train?.price);navigate(`/payment`)}} className="Paymenticon">
                    <PaymentIcon/>
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
