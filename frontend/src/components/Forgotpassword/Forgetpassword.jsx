import React from "react";
import "./Forgetpassword.css";
import { useNavigate } from "react-router-dom";
const Forgetpassword = () => {
  const navigate = useNavigate();
  const Back = () => {
    navigate("/ ");
  };
  return (
    <div className="Forgetpassword">
      <div className="Forgetcontainer">
        <div className="forgetpassword">
          <form>
            <h1>ForgetPassword</h1>
            <hr />
            <label for="email">Email</label>
            <input type="email" placeholder="example@gmail.com" />
            <label for="password">Password</label>
            <input type="password" placeholder="NewPassword" />

            <button  className="reset">
              Resetpassword
            </button>
          <button className="back" onClick={Back}>
            Back
          </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Forgetpassword;
