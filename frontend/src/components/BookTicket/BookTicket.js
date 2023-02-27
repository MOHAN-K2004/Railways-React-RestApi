import { useState } from "react";
import axios from "../../axios";
import "./BookTicket.css";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import TableViewIcon from '@mui/icons-material/TableView';

function Bookingdetails() {
  const navigate = useNavigate();
  const [trainno, setTrainno] = useState("");
  const [passengername, setpassengername] = useState("");
  const [travellingdate, seTravellingdate] = useState("");
  const [noofadults, setNoofadults] = useState("");
  const [noofchilds, setNoofchilds] = useState("");
  const [passengerage, setPassengerage] = useState("");
  const [passengergender, setPassengergender] = useState("");
  const [preferedcoach, setPreferedcoach] = useState("");
  const [preferedclass, setPreferedclass] = useState("");
  const [preferedseat, setPreferedseat] = useState("");
  const [depature, setDepature] = useState("");
  const [arrival, setArrival] = useState("");

  const Bookingdetails = () => {
    axios
      .post("/ticketbookingdetails/save", {
        trainno: trainno,
        passenger_name: passengername,
        travelling_date: travellingdate,
        no_of_adults: noofadults,
        no_of_childs: noofchilds,
        passenger_age: passengerage,
        passenger_gender: passengergender,
        prefered_coach: preferedcoach,
        prefered_class: preferedclass,
        prefered_seat: preferedseat,
        depature: depature,
        arrival: arrival,
      })
      .then((res) => {
        console.log(res);
      });
  };
  const gotoPassengerDetails= ()=>{
    navigate("/PassengerDetails")
  }
  return (
    <>
     
      <div className="TrainBookBody">
        <div className="TrainBookBox">
          <div className="TrainCbookontent">
            <div className="TrainbookTitle">
              <h2>Ticket Booking Passenger Details</h2>
            </div>
            <div className="Trainno1">
              <TextField
                className="Trainno1"
                id="filled-number"
                onChange={(e) => setTrainno(e.target.value)}
                label="Trainno"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className="passenger_name1">
              <TextField
                required
                id="outlined-required"
                onChange={(e) => setpassengername(e.target.value)}
                className="passenger_name1"
                label="Name's"
                defaultValue=""
                variant="outlined"
              />
            </div>
            <div className="travellingdate1">
            <TextField
                required
                id="outlined-required"
                onChange={(e) => seTravellingdate(e.target.value)}
                className="travellingdate"
                label="Travel Date"
                defaultValue=""
                variant="outlined"
              />
              
            </div>
            <div className="no_of_adults1">
              <TextField
                className="no_of_adults"
                id="filled-number"
                onChange={(e) => setNoofadults(e.target.value)}
                label="Adults"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className="no_of_childs1">
              <TextField
                onChange={(e) => setNoofchilds(e.target.value)}
                className="no_of_childs"
                id="filled-number"
                label="Childs"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className="passenger_age1">
              <TextField
                required
                id="outlined-required"
                onChange={(e) => setPassengerage(e.target.value)}
                className="passenger_age"
                label="Age's"
                defaultValue=""
                variant="outlined"
              />
            </div>
            <div className="passenger_gender1">
              <TextField
                required
                id="outlined-required"
                onChange={(e) => setPassengergender(e.target.value)}
                className="passenger_gender"
                label="Gender M/F"
                defaultValue=""
                variant="outlined"
              />
            </div>

            <div className="prefered_coach1">
              <TextField
                required
                id="outlined-required"
                onChange={(e) => setPreferedcoach(e.target.value)}
                className="prefered_coach"
                label="Coach"
                defaultValue=""
                variant="outlined"
              />
            </div>
            <div className="prefered_class1">
              <TextField
                required
                id="outlined-required"
                onChange={(e) => setPreferedclass(e.target.value)}
                className="prefered_class"
                label="Class"
                defaultValue=""
                variant="outlined"
              />
            </div>
            <div className="prefered_seat1">
              <TextField
                required
                id="outlined-required"
                onChange={(e) => setPreferedseat(e.target.value)}
                className="prefered_seat"
                label="SeatNumber"
                defaultValue=""
                variant="outlined"
              />
            </div>
            <div className="depature1">
              <TextField
                required
                id="outlined-required"
                onChange={(e) => setDepature(e.target.value)}
                className="depature"
                label="From"
                defaultValue=""
                variant="outlined"
              />
            </div>
            <div className="arrival1">
              <TextField
                required
                id="outlined-required"
                onChange={(e) => setArrival(e.target.value)}
                className="arrival"
                label="To"
                defaultValue=""
                variant="outlined"
              />
            </div>

            <div className="passengerdetailsbutton">
           
                   <Button onClick={gotoPassengerDetails} className="passenger" variant="outlined" color="primary">
                     <TableViewIcon/> 
                </Button>
           
              
              </div>
            <div className="savebutton">
              
            <Button className="saving" variant="outlined" color="primary" onClick={Bookingdetails}>
               BookTicket
           </Button>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bookingdetails;
