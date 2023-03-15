import "./App.css";
import Bookingdetails from "./components/BookTicket/BookTicket";
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <States>
          <Routes>
            <Route path="/userdetails" element={<Userdetails />}/>
            <Route path="/viewpassengerdetails" element={<EditPassengerdetails/>} />
            <Route path="/PassengerDetails"element={<PassengerDetails/>}/>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgetpassword" element={<Forgetpassword />} />
            <Route path="/viewtraindetails" element={<ViewTrainDetails />} />
            <Route path="/addtraindetails" element={<Traindetails />} />
            <Route path="/ticketbookingform" element={<Bookingdetails />} />
            <Route path="/edittraindetails" element={<Editdetails />} />
          </Routes>
        </States>
      </BrowserRouter>
    </div>
  );
}

export default App;
