import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import TextField from "@mui/material/TextField";
import "./Traindetails.css";
import Button from "@mui/material/Button";

import SaveIcon from "@mui/icons-material/Save";
import { toast } from "react-hot-toast";

function Traindetails() {
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

  const Traindetails = () => {

    axios
      .post("/traindetails/save", {
        trainno: trainno,
        trainname: trainname,

        classes: classes,
        serviceDays: serviceDays,
        stops: stops,
        duration: duration,
        trainInfo: {
          trainStartPoint: trainStartPoint,
          trainStartTime: trainStartTime,
          trainEndPoint: trainEndPoint,
          trainEndTime: trainEndTime,
          distance_in_KM: distanceinKM,
          days: days,
        },
      })
      .then((res) => {
        console.log(res);
        toast.success("Train Details is Added Successfully!")
        navigate("/viewtraindetails");
      });
  };
  const navigate = useNavigate();
  const gotoViewTrainDetails = () => {
    navigate("/viewtraindetails");
  };
  const buttonStyle = {
    fontFamily: "Arial",
    fontSize: "16px",
  };
  const labelStyle = {
    fontFamily: "Popins",
    fontSize: "16px",
  };
  return (
    <>
      <div className="trainde">
        <div className="TrainBodys">
          <div className="TrainBox">
            <div className="TrainContent">
              <div className="TrainTitle">
                <h3>ADD TRAIN DETAILS</h3>
              </div>
              <div className="Trainnot">
                <TextField
                  onChange={(e) => setTrainno(e.target.value)}
                  className="Trainnot"
                  id="outlined-basic"
                  label="Trainno"
                  variant="outlined"
                  required={true}
                  InputLabelProps={{ style: labelStyle }}
                />
              </div>
              <div className="Trainname">
                <TextField
                  onChange={(e) => setTrainname(e.target.value)}
                  className="Trainnname"
                  id="outlined-basic"
                  label="Trainnname"
                  variant="outlined"
                  InputLabelProps={{ style: labelStyle }}
                />
              </div>
              <div className="TrainStartPoint">
                <TextField
                  onChange={(e) => setTrainStartPoint(e.target.value)}
                  className="TrainStartPoint"
                  id="outlined-basic"
                  label="TrainStartPoint"
                  variant="outlined"
                  InputLabelProps={{ style: labelStyle }}
                />
              </div>
              <div className="TrainStartTime">
                <TextField
                  onChange={(e) => setTrainStartTime(e.target.value)}
                  className="TrainStartTime"
                  id="outlined-basic"
                  label="TrainStartTime"
                  variant="outlined"
                  InputLabelProps={{ style: labelStyle }}
                />
              </div>
              <div className="TrainEndPoint">
                <TextField
                  onChange={(e) => setTrainEndPoint(e.target.value)}
                  className="TrainEndPoint"
                  id="outlined-basic"
                  label="TrainEndPoint"
                  variant="outlined"
                  InputLabelProps={{ style: labelStyle }}
                />
              </div>
              <div className="TrainEndTime">
                <TextField
                  onChange={(e) => setTrainEndTime(e.target.value)}
                  className="TrainEndTime"
                  id="outlined-basic"
                  label="TrainEndTime"
                  variant="outlined"
                  InputLabelProps={{ style: labelStyle }}
                />
              </div>
              <div className="DistanceinKM">
                <TextField
                  onChange={(e) => setDistanceinKM(e.target.value)}
                  className="TrainEndPoint"
                  id="outlined-basic"
                  label="DistanceinKM"
                  variant="outlined"
                  type="number"
                  InputLabelProps={{ style: labelStyle }}
                />
              </div>
              <div className="Classes">
                <TextField
                  onChange={(e) => setClasses(e.target.value)}
                  className="Classes"
                  id="outlined-basic"
                  label="Classes "
                  variant="outlined"
                  InputLabelProps={{ style: labelStyle }}
                />
              </div>
              <div className="ServiceDays">
                <TextField
                  onChange={(e) => setServiceDays(e.target.value)}
                  className="ServiceDays"
                  id="outlined-basic"
                  label="ServiceDays"
                  variant="outlined"
                  InputLabelProps={{ style: labelStyle }}
                />
              </div>
              <div className="Stops">
                <TextField
                  onChange={(e) => setStops(e.target.value)}
                  className="Stops"
                  id="outlined-basic"
                  label="Stops"
                  variant="outlined"
                  InputLabelProps={{ style: labelStyle }}
                />
              </div>
              <div className="Duration">
                <TextField
                  onChange={(e) => setDuration(e.target.value)}
                  className="Duration"
                  id="outlined-basic"
                  label="Duration"
                  variant="outlined"
                  InputLabelProps={{ style: labelStyle }}
                />
              </div>
              <div className="Days">
                <TextField
                  onChange={(e) => setDays(e.target.value)}
                  className="Days"
                  id="outlined-basic"
                  label="Days"
                  variant="outlined"
                  InputLabelProps={{ style: labelStyle }}
                />
              </div>
              <div className="GET">
                <Button
                  className="getbutton"
                  variant="outlined"
                  color="primary"
                  style={buttonStyle}
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
                  style={buttonStyle}
                  className={classes.button}
                  startIcon={<SaveIcon />}
                  onClick={Traindetails}
                >
                  SAVE
                  
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Traindetails;
