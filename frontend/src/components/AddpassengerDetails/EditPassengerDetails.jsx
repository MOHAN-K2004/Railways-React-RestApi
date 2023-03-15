import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import { useStates } from "../../States";

import "./EditpassengerDetails.css";


import TableViewIcon from '@mui/icons-material/TableView';

function EditPassengerdetails() {
  const navigate = useNavigate();
  const [trainno, setTrainno] = useState("");
  const [trainname, setTrainname] = useState("");
  const [passenger_name, setPassengername] = useState("");
  const [travelling_date, setTravellingdate] = useState("");
  const [no_of_adults, setNoofadults] = useState("");
  const [no_of_childs, setNoofchilds] = useState("");
  const [passenger_age, setPassengerage] = useState("");
  const [passenger_gender, setPassengergender] = useState("");
  const [prefered_coach, setPreferedcoach] = useState("");
  const [prefered_class, setPreferedclass] = useState("");
  const [prefered_seat, setPreferedseat] = useState("");
  const [depature, setDepature] = useState("");
  const [arrival, setArrival] = useState("");
  const { editPassenger } = useStates();
  useEffect(() => {
    setTrainno(editPassenger?.trainno);
    setTrainname(editPassenger?.trainname);
    setPassengername(editPassenger?.passenger_name);
    setTravellingdate(editPassenger?.travelling_date);
    setNoofadults(editPassenger?.no_of_adults);
    setNoofchilds(editPassenger?.no_of_childs);
    setPassengerage(editPassenger?.passenger_age);
    setPassengergender(editPassenger?.passenger_gender);
    setPreferedcoach(editPassenger?.prefered_coach);
    setPreferedclass(editPassenger?.prefered_class);
    setPreferedseat(editPassenger?.prefered_seat);
    setDepature(editPassenger?.depature);
    setArrival(editPassenger?.arrival);
  }, [editPassenger]);
  const Passengerdetails = (id) => {
    axios
      .put(`/ticketbookingdetails/update/${id}`, {
        trainno: trainno,
        trainname: trainname,
        passenger_name: passenger_name,
        travelling_date: travelling_date,
        no_of_adults: no_of_adults,
        no_of_childs: no_of_childs,
        passenger_age: passenger_age,
        passenger_gender: passenger_gender,
        prefered_coach: prefered_coach,
        prefered_class: prefered_class,
        prefered_seat: prefered_seat,
        depature: depature,
        arrival: arrival,
      })
      .then((res) => {
        console.log(res);
      });
      navigate("/PassengerDetails");
    };
   
    const gotoPassengerDetails = () => {
      navigate("/PassengerDetails");
    };
  return (
    <>
     
     <div className="PassengerBody">
        <div className="PassengerBox">
          <div className="PassengerContent">
            <div className="PassengerTitle">
              <h2>UPDATE PASSENGER DETAILS</h2>
            </div>
            <div className="Trainno2">
              <TextField
                className="Trainno2"
                id="filled-number"
                onChange={(e) => setTrainno(e.target.value)}
                label="Trainno"
                value={trainno}
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className="passenger_name2">
              <TextField
                required
                id="outlined-required"
                onChange={(e) => setPassengername(e.target.value)}
                className="passenger_name2"
                label="Name's"
                value={passenger_name}
                defaultValue=""
                variant="outlined"
              />
            </div>
            <div className="travellingdate2">
            <TextField
                required
                id="outlined-required"
                onChange={(e) => setTravellingdate(e.target.value)}
                className="travellingdate2"
                label="Travel Date"
                value={travelling_date}
                defaultValue=""
                variant="outlined"
              />
              
            </div>
            <div className="no_of_adults2">
              <TextField
                className="no_of_adults"
                id="filled-number"
                onChange={(e) => setNoofadults(e.target.value)}
                label="Adults"
                value={no_of_adults}
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className="no_of_childs2">
              <TextField
                onChange={(e) => setNoofchilds(e.target.value)}
                className="no_of_childs2"
                id="filled-number"
                label="Childs"
                value={no_of_childs}
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className="passenger_age2">
              <TextField
               
                id="outlined-required"
                onChange={(e) => setPassengerage(e.target.value)}
                className="passenger_age2"
                label="Age's"
                value={passenger_age}
                defaultValue=""
                variant="outlined"
              />
            </div>
            <div className="passenger_gender2">
              <TextField
                required
                id="outlined-required"
                onChange={(e) => setPassengergender(e.target.value)}
                className="passenger_gender2"
                label="Gender M/F"
                value={passenger_gender}
                defaultValue=""
                variant="outlined"
              />
            </div>

            <div className="prefered_coach2">
              <TextField
                required
                id="outlined-required"
                onChange={(e) => setPreferedcoach(e.target.value)}
                className="prefered_coach2"
                label="coach"
                value={prefered_coach}
                defaultValue=""
                variant="outlined"
              />
            </div>
            <div className="prefered_class2">
              <TextField
                required
                id="outlined-required"
                onChange={(e) => setPreferedclass(e.target.value)}
                className="prefered_class2"
                label="Class"
                value={prefered_class}
                defaultValue=""
                variant="outlined"
              />
            </div>
            <div className="prefered_seat2">
              <TextField
                required
                id="outlined-required"
                onChange={(e) => setPreferedseat(e.target.value)}
                className="prefered_seat2"
                label="SeatNumber"
                value={prefered_seat}
                defaultValue=""
                variant="outlined"
              />
            </div>
            <div className="depature2">
              <TextField
                required
                id="outlined-required"
                onChange={(e) => setDepature(e.target.value)}
                className="depature2"
                label="From"
                value={depature}
                defaultValue=""
                variant="outlined"
              />
            </div>
            <div className="arrival2">
              <TextField
                required
                id="outlined-required2"
                onChange={(e) => setArrival(e.target.value)}
                className="arrival2"
                label="To"
                value={arrival}
                defaultValue=""
                variant="outlined"
              />
            </div>

            <div className="passengerdetailsbutton1">
           
                   <Button onClick={gotoPassengerDetails} className="passenger" variant="outlined" color="primary">
                     <TableViewIcon/> 
                </Button>
           
              
              </div>
            <div className="savebutton">
              
            <Button className="saving" variant="outlined" color="primary" onClick={()=>Passengerdetails(editPassenger.no)}>
              Update
           </Button>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditPassengerdetails;
