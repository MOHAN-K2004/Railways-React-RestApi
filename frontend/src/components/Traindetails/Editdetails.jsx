import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import TextField from "@mui/material/TextField";
import "./Editdetails.css";
import Button from "@mui/material/Button";

import SaveIcon from "@mui/icons-material/Save";
import { useStates } from "../../States";

function Editdetails() {
  const [trainno, setTrainno] = useState("");
  const [trainname, setTrainname] = useState("");
  const [trainStartPoint, setTrainStartPoint] = useState("");
  const [trainStartTime, setTrainStartTime] = useState("");
  const [trainEndPoint, setTrainEndPoint] = useState("");
  const [trainEndTime, setTrainEndTime] = useState("");
  const [distanceinKM, setDistanceinKM] = useState("");
  const [classes, setClasses] = useState("");
  const [serviceDays, setServiceDays] = useState("");
  const [stops, setStops] = useState("");
  const [duration, setDuration] = useState("");
  const [days, setDays] = useState("");
  const { editTrain } = useStates();
  useEffect(() => {
    setTrainno(editTrain?.trainno);
    setTrainname(editTrain?.trainname);
    setTrainStartPoint(editTrain?.trainStartPoint);
    setTrainStartTime(editTrain?.trainStartTime);
    setTrainEndPoint(editTrain?.trainEndPoint);
    setTrainEndTime(editTrain?.trainEndTime);
    setDistanceinKM(editTrain?.distance_in_KM);
    setClasses(editTrain?.classes);
    setServiceDays(editTrain?.serviceDays);
    setStops(editTrain?.stops);
    setDuration(editTrain?.duration);
    setDays(editTrain?.days);
  }, [editTrain]);
  const Traindetails = (id) => {
    axios
      .put(`/traindetails/update/${id}`, {
        trainno: trainno,
        trainname: trainname,
        trainStartPoint: trainStartPoint,
        trainStartTime: trainStartTime,
        trainEndPoint: trainEndPoint,
        trainEndTime: trainEndTime,
        distance_in_KM: distanceinKM,
        classes: classes,
        serviceDays: serviceDays,
        stops: stops,
        duration: duration,
        days: days,
      })
      .then((res) => {
        console.log(res);
      });
    navigate("/viewtraindetails");
  };
  const navigate = useNavigate();
  const gotoViewTrainDetails = () => {
    navigate("/viewtraindetails");
  };
  return (
    <>
      <style>
        @importurl('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Nabla&display=swap');
      </style>
      <div className="backimg">
        {/* <img src='https://ertms.railtalent.org/wp-content/uploads/2018/02/Picture1-e1592400372202.png' alt=''/> */}
      </div>
      <div className="TrainBody">
        <div className="TrainBox">
          <div className="TrainContent">
            <div className="TrainTitle">
              <h2>UPDATE TRAIN DETAILS</h2>
            </div>
            <div className="Trainno">
              <TextField
                onChange={(e) => setTrainno(e.target.value)}
                className="Trainno"
                value={trainno}
                id="outlined-basic"
                label="Trainno"
                variant="outlined"
              />
            </div>
            <div className="Trainname">
              <TextField
                onChange={(e) => setTrainname(e.target.value)}
                className="Trainnname"
                value={trainname}
                id="outlined-basic"
                label="Trainnname"
                variant="outlined"
              />
            </div>
            <div className="TrainStartPoint">
              <TextField
                onChange={(e) => setTrainStartPoint(e.target.value)}
                className="TrainStartPoint"
                value={trainStartPoint}
                id="outlined-basic"
                label="TrainStartPoint"
                variant="outlined"
              />
            </div>
            <div className="TrainStartTime">
              <TextField
                onChange={(e) => setTrainStartTime(e.target.value)}
                className="TrainStartTime"
                value={trainStartTime}
                id="outlined-basic"
                label="TrainStartTime"
                variant="outlined"
              />
            </div>
            <div className="TrainEndPoint">
              <TextField
                onChange={(e) => setTrainEndPoint(e.target.value)}
                className="TrainEndPoint"
                value={trainEndPoint}
                id="outlined-basic"
                label="TrainEndPoint"
                variant="outlined"
              />
            </div>
            <div className="TrainEndTime">
              <TextField
                onChange={(e) => setTrainEndTime(e.target.value)}
                className="TrainEndTime"
                value={trainEndTime}
                id="outlined-basic"
                label="TrainEndTime"
                variant="outlined"
              />
            </div>
            <div className="DistanceinKM">
              <TextField
                onChange={(e) => setDistanceinKM(e.target.value)}
                className="TrainEndPoint"
                value={distanceinKM}
                id="outlined-basic"
                label="DistanceinKM"
                variant="outlined"
              />
            </div>
            <div className="Classes">
              <TextField
                onChange={(e) => setClasses(e.target.value)}
                className="Classes"
                value={classes}
                id="outlined-basic"
                label="Classes "
                variant="outlined"
              />
            </div>
            <div className="ServiceDays">
              <TextField
                onChange={(e) => setServiceDays(e.target.value)}
                className="ServiceDays"
                value={serviceDays}
                id="outlined-basic"
                label="ServiceDays"
                variant="outlined"
              />
            </div>
            <div className="Stops">
              <TextField
                onChange={(e) => setStops(e.target.value)}
                className="Stops"
                value={stops}
                id="outlined-basic"
                label="Stops"
                variant="outlined"
              />
            </div>
            <div className="Duration">
              <TextField
                onChange={(e) => setDuration(e.target.value)}
                className="Duration"
                value={duration}
                id="outlined-basic"
                label="Duration"
                variant="outlined"
              />
            </div>
            <div className="Days">
              <TextField
                onChange={(e) => setDays(e.target.value)}
                className="Days"
                value={days}
                id="outlined-basic"
                label="Days"
                variant="outlined"
              />
            </div>
            <div className="GET">
              <Button
                className="getbutton"
                variant="outlined"
                color="primary"
                onClick={gotoViewTrainDetails}
              >
                CANCEL
              </Button>
            </div>
            <div className="POST">
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick={()=>Traindetails(editTrain.no)}
              >
                UPDATE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Editdetails;
