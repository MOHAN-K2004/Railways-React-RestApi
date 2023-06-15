import React, { useEffect, useState } from "react";
import "./Adddetails.css";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "@mui/material";
import axios from "../../axios";
import { toast } from "react-hot-toast";
const Adddetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [trainDetails, setTrainDetails] = useState({});
  // const gotopayment = () => {
  //   navigate("/payment");
  // };
  const loadData = async () => {
    await axios
      .get(`traindetails/getById`, { params: { id: id } })
      .then((response) => {
        setTrainDetails(response.data);
      });
  };
  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    setBook({
      ...book,
      depature: trainDetails?.trainInfo?.trainStartPoint,
      arrival: trainDetails?.trainInfo?.trainEndPoint,
      trainno: trainDetails?.trainno,
    });
  }, [trainDetails]);

  const currencies = [
    {
      value: "M",
      label: "Male",
    },
    {
      value: "F",
      label: "Female",
    },
  ];
  const labelStyle = {
    fontFamily: "Popins",
    fontSize: "16px",
  };
  const buttonStyle = {
    fontFamily: "Arial",
    fontSize: "16px",
  };
  const [book, setBook] = useState({
    trainno: "",
    passenger_name: "",
    travelling_date: "",
    no_of_adults: "",
    // no_of_childs: '',
    passenger_age: "",
    passenger_gender: "",
    prefered_coach: "",
    prefered_class: "",
    prefered_seat: "",
    depature: trainDetails?.trainInfo?.trainStartPoint,
    arrival: trainDetails?.trainInfo?.trainEndPoint,
    price: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };
  const handleSubmit = () => {
    axios.post("/ticketbookingdetails/save", book).then((res) => {
      toast.success("Booked Ticket")
      navigate("/PassengerDetails");
      console.log(res);
    });
  };
  const addAmount = (classs) => {
    if ("SL" === classs) {
      setBook({
        ...book,
        price:
          2 *
          trainDetails?.trainInfo?.distance_in_KM *
          parseInt(book.no_of_adults),
      });
    } else if ("CC" === classs)
      setBook({
        ...book,
        price:
          3 *
          trainDetails?.trainInfo?.distance_in_KM *
          parseInt(book.no_of_adults),
      });
    else if ("2S" === classs)
      setBook({
        ...book,
        price:
          1 *
          trainDetails?.trainInfo?.distance_in_KM *
          parseInt(book.no_of_adults),
      });
    else if ("1A" === classs)
      setBook({
        ...book,
        price:
          5 *
          trainDetails?.trainInfo?.distance_in_KM *
          parseInt(book.no_of_adults),
      });
    else if ("3A" === classs)
      setBook({
        ...book,
        price:
          4 *
          trainDetails?.trainInfo?.distance_in_KM *
          parseInt(book.no_of_adults),
      });
    // else setPrice(0);
  };
  return (
    <div className="Adddetails-All">

      <div className="Adddetails-container-top">
        <h1 className="Adddetails-container-top1">Booking Details</h1>
        <div className="whiteInTop"></div>
        <div className="traindetails_noandname">
          <p>
            # {trainDetails.trainno} - {trainDetails.trainname}
          </p>
                <p className="addbooking-longline">$---------------------------------------------------------------------$</p>
          <p className="train_from_to">
            {trainDetails?.trainInfo?.trainStartPoint}
            <span className="image_line1">
              <img
                width="120"
                src="https://res.cloudinary.com/doz5njr9h/image/upload/v1686235225/origen-linea_toabfl.svg"
                alt=""
              />
            </span>
            <span className="line_fromto">
              {trainDetails?.trainInfo?.distance_in_KM}KM
            </span>
            <span className="image_line2">
              <img
                width="120"
                src="https://res.cloudinary.com/doz5njr9h/image/upload/v1686235143/destino-linea2_hts2mq.svg"
                alt=""
              />
            </span>
            {trainDetails?.trainInfo?.trainEndPoint}
          </p>
          <p className="train_from_time">
            {trainDetails?.trainInfo?.trainStartTime}
            <span className="image_line1"></span>
            <span className="line_fromto">{trainDetails?.duration}</span>
            <span className="image_line2"></span>
            {trainDetails?.trainInfo?.trainEndTime}
          </p>
        </div>
      </div>
      <div className="Adddetails-container-bottom">
        <h1 className="Adddetails-container-bottom-h1">
          Add Passengers for this Ticket
        </h1>
        <div className="Addddetails-container-bottom2">
          <h2 className="Addddetails-container-bottom2-h2">
            *Passenger Name should be same as in Goverment ID proof. * No
            concessional tickets allowed for this Train/Quota/Class.
          </h2>
        </div>
        <div>
          <div className="TextFields1">
            <TextField 
              onChange={handleChange}
              required ={true}
              id="outlined-required"
              label="Full Name "
              InputLabelProps={{ style: labelStyle }}
              name="passenger_name"
            />
            <TextField
              onChange={handleChange}
              required
              id="outlined-required"
              label="Age "

              InputLabelProps={{ style: labelStyle }}
              name="passenger_age"
            />
            <TextField
              onChange={handleChange}
              id="outlined-select-currency"
              className="gender_box"
              select
              label="Gender *"
              defaultValue={"Male"}
              InputLabelProps={{ style: labelStyle }}
              name="passenger_gender"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              onChange={handleChange}
              required
              id="outlined-required"
              className="travellingdate"
              variant="outlined"
              type="date"
              InputLabelProps={{ style: labelStyle }}
              name="travelling_date"
            />
          </div>
          <div className="TextFields2">
            <TextField
              onChange={handleChange}
              required
              id="outlined-required"
              label="No of Passengers"
              InputLabelProps={{ style: labelStyle }}
              name="no_of_adults"
            />
            <TextField
              onChange={handleChange}
              required
              id="outlined-required"
              label="Seat Number"
              InputLabelProps={{ style: labelStyle }}
              name="prefered_seat"
            />
            <TextField
              onChange={handleChange}
              required={true}
              id="outlined-required"
              label="Coach"
              InputLabelProps={{ style: labelStyle }}
              name="prefered_coach"
            />
            <TextField
              onChange={(e) => {
                handleChange(e);
                addAmount(e.target.value);
              }}
              required
              id="outlined-required"
              label="Class"
              InputLabelProps={{ style: labelStyle }}
              name="prefered_class"
            />
          </div>
        </div>
        <div className="adddetails-bookticket-button">
          <Button
          
            style={buttonStyle}
            variant="contained"
            onClick={handleSubmit}
          >
            BookTicket
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Adddetails;
