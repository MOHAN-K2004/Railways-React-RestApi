import React from "react";
import { useNavigate } from "react-router-dom";
import TrainIcon from "@mui/icons-material/Train";
import Button from "@mui/material/Button";
import { useStates } from "../States";
import './Navbar.css'

const Navbar = () => {
  const { setUser } = useStates();
  const navigate = useNavigate();

  // const gotoLogin = () => {
  //   navigate("/login");
  //   gotoLogin();
  // };
const gotolandingpage =() =>{
  navigate("/")
}
  const gotosignup = () => {
    navigate("/login");
  };
  return (
    <div>
      <div className="homenavbar6">
        <img
          className="image36"
          onClick={() => navigate("/")}
          src="https://bucketeer-ebc56ea4-a249-4208-b1ff-70fa04c59238.s3.amazonaws.com/uploads/employer/logo/1902/Skjermbilde_2016-10-21_kl._13.39.52.png"
          alt=""
        ></img>
        <h3  onClick={gotolandingpage}>Rail</h3>
        <div className="homeline6">
          <h4 onClick={() => navigate("/")}>_________</h4>
        </div>
        <h7 onClick={() => navigate("/")}>Tickets</h7>
        <h4>_____</h4>
        <h2 onClick={() => navigate("/")}>Vandi</h2>
        <div className="homerigister6">
          {/* <h6 onClick={gotoLogin}>Register</h6> */}
          <h5 className="navbar-heading2">Contact Us</h5>
        </div>

        <div className="navbar-heading1" onClick={() => navigate(`/viewtraindetails`)}> Home </div>
        {/* <input className="search-box" type="search" placeholder="Search" aria-label="Search"/> */}
        <div className="signinbutton6">
          {localStorage.getItem("user") ? (
            <span
              onClick={() => {
                navigate("/login");
                localStorage.removeItem("user");
                setUser(null);
              }}
              className="navbar-username"
            >
              {JSON.parse(localStorage.getItem("user"))?.firstName}
            </span>
          ) : (
            <Button onClick={gotosignup} variant="contained" color="primary">
              Sign in
            </Button>
          )}
        </div>
        <div className="trainicon6">
          <TrainIcon fontSize="large" color="success" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
