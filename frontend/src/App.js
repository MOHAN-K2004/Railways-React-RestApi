import "./App.css";
// import Bookingdetails from "./components/BookTicket/BookTicket";
import ViewTrainDetails from "./components/Traindetails/ViewTrainDetails";
import Traindetails from "./components/Traindetails/Traindetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signuppage/Signup";
import Login from "./components/login/Login";
import Forgetpassword from "./components/Forgotpassword/Forgetpassword";
import Editdetails from "./components/Traindetails/Editdetails";
import { States } from "./States";
import PassengerDetails from "./components/AddpassengerDetails/PassengerDetails";
import EditPassengerdetails from "./components/AddpassengerDetails/EditPassengerDetails";
import Userdetails from "./components/userdetails/Userdetails";
import Landingpage from "./components/LandingPage/Landingpage";
import Navbar from "./CommonSection/Navbar";
import Adddetails from "./components/BookTicket/Adddetails";
import Payment from "./components/Payment/Payment";
import Contact_us from "./components/Contact_us/Contact_us";
import { Toaster } from 'react-hot-toast';
// import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <States>
          <Navbar />
          <Toaster/>
          <Routes>
            <Route path="/userdetails" element={<><Userdetails /><Contact_us/></>} />
            <Route
              path="/viewpassengerdetails"
              element={<EditPassengerdetails />}
            />
            
            <Route path="/" element={<Landingpage />} />
            
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/PassengerDetails" element={<><PassengerDetails /></>} />
            <Route path="/adddetails" element={<><Adddetails/><Contact_us/></>}/>
            <Route path="/forgetpassword" element={<><Forgetpassword /><Contact_us/></>} />
            <Route path="/viewtraindetails" element={<><ViewTrainDetails /><Contact_us/></>} />
            <Route path="/payment" element={<><Payment/><Contact_us/></>}/>
            <Route path="/addtraindetails" element={<><Traindetails /><Contact_us/></>} />
            {/* <Route path="/Traindetails" element={<><Login /><Contact_us/></>} /> */}
            <Route path="/ticketbookingform/:id" element={<><Adddetails /><Contact_us/></>} />
           
            <Route path="/edittraindetails" element={<><Editdetails /><Contact_us/></>} />
          </Routes>
        
        </States>
      </BrowserRouter>
    </div>
  );
}

export default App;
