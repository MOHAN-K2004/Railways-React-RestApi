import React, { useState } from "react";
import "./Login.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import GoogleIcon from "@mui/icons-material/Google";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import { useStates } from "../../States";
import { toast } from "react-hot-toast";
export const Login = () => {
  const {setUser} = useStates();
  const [login, setLogin] = useState({
    mail: "",
    pass: "",
  });
  const navigate = useNavigate();
  const gotoviewTriandetails = async () => {
    if (login.mail.trim() === "" || login.pass.trim() === "") {
      // alert("Enter All Fields");
      toast.error("Enter All the Fields")
      return;
    }
    await axios
      .get(`/Signup/login`, { params: { mail: login.mail, pass: login.pass } })
      .then((response) => {
        if (response.data) {
          localStorage.setItem('user',JSON.stringify(response.data))
          setUser(response.data)
          navigate("/ViewTrainDetails");
          toast.success("Login Successfully")
        } else toast.error("Invalid Credentials")
      })
      .catch((error) => console.log(error));
  };
  const gotosignup = () => {
    navigate("/Signup");
  };
  const gotoforgetpassword = () => {
    navigate("/forgetpassword");
  };
  return (
    <div className="loginAll7">
      <div className="contentborder7">
        <input
          className="emailbutton7"
          type="text"
          placeholder="Email Address"
          name="mail"
          value={login.mail}
          onChange={(e) => setLogin({ ...login, mail: e.target.value })}
        />
        <input
          className="passwordbutton7"
          type="text"
          name="pass"
          value={login.pass}
          onChange={(e) => setLogin({ ...login, pass: e.target.value })}
          placeholder="Password"
        />
        <h1>Welcome Back :)</h1>

        <h2>To keep Connected with us please longin with </h2>
        <h3>your personal information by email and </h3>
        <h4>password</h4>
        <div className="emailicon7">
          <MailOutlineIcon fontSize="medium" />
        </div>
        <div className="passwordicon7">
          <LockOpenIcon fontSize="medium" />
        </div>
        <input className="rememberme7" type="checkbox" />
        <h5>Remember me</h5>
        <h8>EMAIL ID :</h8>
        <h7>-*-*- Continue with -*-*-</h7>
        <h9>PASSWORD :</h9>
        <h6>
          <u onClick={gotoforgetpassword}>Forget Password</u>?
        </h6>
        <Button
          onClick={gotoviewTriandetails}
          className="loginbutton7"
          variant="contained"
        >
          Login
        </Button>

        <Button
          onClick={gotosignup}
          className="Signinbutton7"
          variant="contained"
          color="success"
          endIcon={<SendIcon />}
        >
          SignUp
        </Button>
        <GoogleIcon className="googleicon7" />
        <FacebookIcon className="facebookicon7" />
        <InstagramIcon className="instagramicon7" />
      </div>
    </div>
  );
};

export default Login;
