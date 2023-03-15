import React, { useState, useEffect } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import "./Userdetails.css";
const Userdetails = () => {
  const [userDetails, setUserDetails] = useState([]);
  const getUserdetails = () => {
    fetch("http://localhost:2424/Signup/view")
      .then((res) => res.json())
      .then((result) => {
        setUserDetails(result);
        console.log(result);
      });
  };
  useEffect(() => {
    getUserdetails();
  }, []);
  const navigate = useNavigate();
  const DeleteuserDetails = (mail) => {
    console.log(mail);
    axios.delete(`/Signup/delete/${mail}`).then((res) => {
      getUserdetails();
    });
  };
  const gotoSignup = () => {
    navigate("/Signup");
  };
  return (
    <div className="udetail">
    <div className="userdetailall">
      <div className="userdetailstop">
        <h3>
        <SupervisedUserCircleIcon/>
          User Details
        <SupervisedUserCircleIcon/>
       
        </h3>
        <div className="adduserdetailbutton">
          <Button onClick={gotoSignup} variant="contained" color="success">
            <AddCircleIcon />
          </Button>
        </div>
      </div>
      <div className="userdetailstable">
        <table className="">
          <tr>
            <th>S.No</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>DateOfBirth</th>
            <th>Gender</th>
            <th>MailId</th>
            <th>Mobile NO</th>
            <th>Street</th>
            <th>Areaa</th>
            <th>City</th>
            <th>State    .</th>
            <th>Nationality</th>
            <th>Password</th>
            <th>Delete</th>
          </tr>
          <br />
          {userDetails.map((user, index) => {
            return (
              <tr>
                <td>{user.no}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.dob}</td>
                <td>{user.gender}</td>
                <td>{user.mail}</td>
                <td>{user.mobile}</td>
                <td>{user.street}</td>
                <td>{user.area}</td>
                <td>{user.city}</td>
                <td>{user.state}</td>
                <td>{user.nationality}</td>
                <td>{user.pass}</td>
                <td>
                  <div
                    className="deleteicon"
                    onClick={() => DeleteuserDetails(user.no)}
                  >
                    <DeleteIcon />
                  </div>
                </td>
              </tr>

            );
          })}
        </table>
      </div>
      
    </div>
      
    </div>
  );
};
export default Userdetails;
