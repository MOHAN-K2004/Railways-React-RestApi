import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const gotoSignup = () => {
    navigate("/signup");
  };
  const gotoForgetpassword = () => {
    navigate("/forgetpassword");
  };
  const gotoViewTrainDetails = () => {
    navigate("/viewtraindetails");
  };
  return (
    <div className="loginback">
      <div className="container">
        <div className="login">
          <form>
            <h1>Login</h1>
            <hr />
            <p>Login to get more new things</p>
            <label for="email">Email</label>
            <input type="email" placeholder="example@gmail.com" />
            <label for="password">Password</label>
            <input type="password" placeholder="Password" />
            <button className="loginbutton" onClick={gotoViewTrainDetails}>Login</button>
            <label className="newuser"for="Newuser">New User?</label>
            <button className="signupbutton" onClick={gotoSignup}>
              Signup
            </button>

            <p className="forget" onClick={gotoForgetpassword}>
              <u>Forgot Password</u>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
