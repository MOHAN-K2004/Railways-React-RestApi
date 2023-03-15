import { useState } from "react";
import axios from "../../axios";
import { useNavigate } from 'react-router-dom';
import "./Signup.css";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TableViewIcon from '@mui/icons-material/TableView';
function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [mail, setMail] = useState("");
  const [mobile, setMobile] = useState("");
  const [nationality, setNationality] = useState("");
  const [street, setStreet] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pass, setPass] = useState("");

  const SignUp = () => {
    axios
      .post("/Signup/save", {
        firstName: firstname,
        lastName: lastName,
        dob: dob,
        gender: gender,
        mail: mail,
        mobile: mobile,
        nationality: nationality,
        street: street,
        area: area,
        city: city,
        state: state,
        pass: pass,
      })
      .then((res) => {
        console.log(res);
      });
      // setFirstname("");
      // setLastname("");
      // setDob("");
      // setGender("");
      // setMail("");
      // setMobile("");
      // setNationality("");
      // setStreet("");
      // setArea("");
      // setCity("");
      // setState("");
      // setPass("");
      navigate("/userdetails");
    }
    const navigate = useNavigate();
  const gotoLogin = ()=>{
      navigate("/")
      gotoUserdetils()
  };
  const gotoViewTrainDetails = () =>{
    navigate("/viewtraindetails")
  }
  const gotoUserdetils= ()=>{
    navigate("/userdetails")
  }
  return (
    <>
      
      <div className="signupbackimg">
        <img src='https://farm4.staticflickr.com/3695/8810395837_0b14dfd13c.jpg' alt=''/>
      </div>
      <div className="SignupBody">
        <div className="SignupBox">
          <div className="SignupContent">
            <div className="SignupTitle">
              <h2>RAILWAYS</h2>
              <p>
                Sign Up to create an account and
                <br />
                contribute your facts
              </p>
            </div>
            <div className="SignupInputs">
              <TextField
                label="First Name"
                variant="filled"
                size="small"
                onChange={(e) => setFirstname(e.target.value)}
                className="SignupFirstname"
              
                sx={{position:'absolute',top:'150px',left:'120px'}}
              />
            </div>
            <div className="SignupInputs">
            <TextField
                label="Last Name"
                variant="filled"
                size="small"
                onChange={(e) => setLastname(e.target.value)}
                className="SignupLastname"
                sx={{position:'absolute',top:'150px',right:'170px'}}
              />
            </div>
            <div className="SignupInputs">
            <TextField
                label="Date of Birth"
                variant="filled"
                size="small"
                onChange={(e) => setDob(e.target.value)}
                className="SignupDob"
                sx={{position:'absolute',top:'220px',left:'120px'}}
              />
             
            </div>
            <div className="SignupInputs">
            <TextField
                label="Gender(M/F)"
                variant="filled"
                size="small"
                onChange={(e) => setGender(e.target.value)}
                className="SignupGender"
                sx={{position:'absolute',top:'220px',right:'170px'}}
              />
              
            </div>
            <div className="SignupInputs">
            <TextField
                label="MailId"
                variant="filled"
                size="small"
                onChange={(e) => setMail(e.target.value)}
                className="SignupMail"
                sx={{position:'absolute',top:'290px',left:'120px'}}
              />
              
              <div className="SignupInputs"> 
              <TextField
                label="Password*"
                variant="filled"
                size="small"
                onChange={(e) => setPass(e.target.value)}
                className="SignupPass"
                sx={{position:'absolute',top:'290px',right:'170px'}}
              />
              </div>
            </div>
            <div className="SignupInputs">
            <TextField
                label="Mobile No"
                variant="filled"
                size="small"
                onChange={(e) => setMobile(e.target.value)}
            className="SignupMobile"
            sx={{position:'absolute',top:'360px',left:'120px'}}   
              />
            </div>
            <div className="SignupInputs">
            <TextField
                label="Nationlity"
                variant="filled"
                size="small"
                onChange={(e) => setNationality(e.target.value)}
                className="SignupNationality"
                sx={{position:'absolute',top:'360px',right:'170px'}}
              />
            </div>
            <div className="SignupInputs">
            <TextField
                label="Street"
                variant="filled"
                size="small"
                onChange={(e) => setStreet(e.target.value)}
                className="SignupStreet"
                sx={{position:'absolute',top:'430px',left:'120px'}}  
              />
            </div>
            <div className="SignupInputs">
            <TextField
                label="Area"
                variant="filled"
                size="small"
                onChange={(e) => setArea(e.target.value)}
                className="SignupArea"
                sx={{position:'absolute',top:'430px',right:'170px'}}
              />
            </div>
            <div className="SignupInputs">
            <TextField
                label="City"
                variant="filled"
                size="small"
                onChange={(e) => setCity(e.target.value)}
                className="SignupCity"
                sx={{position:'absolute',top:'500px',left:'120px'}}  
              />
            </div>
            <div className="SignupInputs">
            <TextField
                label="State"
                variant="filled"
                size="small"
                onChange={(e) => setState(e.target.value)}
                className="SignupState"
                sx={{position:'absolute',top:'500px',right:'170px'}}
              />
            </div>
        
            <div className='already'>
                        <p className='alreadyAccount' onClick={gotoLogin}><h5><u>Already have an Account?</u></h5></p>
                    </div>
            <div className="SignupButton">
              <Button variant="contained" onClick={()=>{SignUp();gotoViewTrainDetails()}} endIcon={<SendIcon />}>
              SignUp
            </Button>
            </div>
          </div>
          <div className="userdetailsbutton">
           
                   <Button onClick={gotoUserdetils} className="passenger" variant="outlined" color="primary">
                     <TableViewIcon/> 
                </Button>
           
              
              </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
