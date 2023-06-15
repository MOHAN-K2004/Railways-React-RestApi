import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import TextField from "@mui/material/TextField";
import "./Editdetails.css";
import Button from "@mui/material/Button";

import SaveIcon from "@mui/icons-material/Save";
import { useStates } from "../../States";
import { toast } from "react-hot-toast";

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
    setTrainStartPoint(editTrain?.trainInfo?.trainStartPoint);
    setTrainStartTime(editTrain?.trainInfo?.trainStartTime);
    setTrainEndPoint(editTrain?.trainInfo?.trainEndPoint);
    setTrainEndTime(editTrain?.trainInfo?.trainEndTime);
    setDistanceinKM(editTrain?.trainInfo?.distance_in_KM);
    setClasses(editTrain?.classes);
    setServiceDays(editTrain?.serviceDays);
    setStops(editTrain?.stops);
    setDuration(editTrain?.duration);
    setDays(editTrain?.trainInfo?.days);
    console.log(editTrain);
  }, [editTrain]);
  const Traindetails = (id) => {
    axios
      .put(`/traindetails/update/${id}`, {
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
        toast.success("Updated Sucessfully")
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
      <div className="edittrainbox">
        <div className="TrainBody1">
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
                  InputLabelProps={{ style: labelStyle }}
                  variant="outlined"
                />
              </div>
              <div className="Trainname">
                <TextField
                  onChange={(e) => setTrainname(e.target.value)}
                  className="Trainnname"
                  value={trainname}
                  id="outlined-basic"
                  InputLabelProps={{ style: labelStyle }}
                  label="Trainnname"
                  variant="outlined"
                />
              </div>
              <div className="TrainStartPoint">
                <TextField
                  onChange={(e) => setTrainStartPoint(e.target.value)}
                  className="TrainStartPoint"
                  value={trainStartPoint}
                  InputLabelProps={{ style: labelStyle }}
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
                  InputLabelProps={{ style: labelStyle }}
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
                  InputLabelProps={{ style: labelStyle }}
                  variant="outlined"
                />
              </div>
              <div className="DistanceinKM">
                <TextField
                  onChange={(e) => setDistanceinKM(e.target.value)}
                  className="TrainEndPoint"
                  value={distanceinKM}
                  id="outlined-basic"
                  InputLabelProps={{ style: labelStyle }}
                  label="DistanceinKM"
                  variant="outlined"
                  type="number"
                />
              </div>
              <div className="Classes">
                <TextField
                  onChange={(e) => setClasses(e.target.value)}
                  className="Classes"
                  value={classes}
                  InputLabelProps={{ style: labelStyle }}
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
                  InputLabelProps={{ style: labelStyle }}
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
                  InputLabelProps={{ style: labelStyle }}
                  label="Stops"
                  variant="outlined"
                  type="number"
                />
              </div>
              <div className="Duration">
                <TextField
                  onChange={(e) => setDuration(e.target.value)}
                  className="Duration"
                  value={duration}
                  id="outlined-basic"
                  label="Duration"
                  InputLabelProps={{ style: labelStyle }}
                  variant="outlined"
                />
              </div>
              <div className="Days">
                <TextField
                  onChange={(e) => setDays(e.target.value)}
                  className="Days"
                  value={days}
                  InputLabelProps={{ style: labelStyle }}
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
                  style={buttonStyle}
                  size="small"
                  className={classes.button}
                  startIcon={<SaveIcon />}
                  onClick={() => Traindetails(editTrain.no)}
                >
                  UPDATE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Editdetails
