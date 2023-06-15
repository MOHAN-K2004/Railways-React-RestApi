import React, { useState, useEffect } from "react";
import "./ViewTrainDetails.css";
import axios from "../../axios";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DirectionsTransitIcon from "@mui/icons-material/DirectionsTransit";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
// import Editdetails from "./Editdetails";
import { useStates } from "../../States";
import { toast } from "react-hot-toast";
const ViewTrainDetails = () => {
  const [trainDetails, setTrainDetails] = useState([]);
  const { setEditTrain, editTrain} = useStates();
  const navigate = useNavigate();
  const getTraindetails = () => {
    fetch("http://localhost:2424/traindetails/view")
      .then((res) => res.json())
      .then((result) => {
        setTrainDetails(result);
        console.log(result);
      });
  };
  useEffect(() => {
    getTraindetails();
  }, []);
  const DeleteTrainDetails = (trainno) => {
    console.log(trainno);
    axios.delete(`/traindetails/delete/${trainno}`).then((res) => {
      getTraindetails();
      // alert("Delete Success for Train details");
      toast.success("Deleted Successfully")
    });
  };
  const gotoAddTrainDetails = () => {
    navigate("/addtraindetails");
  };
  const gotoBookTicket = (id) => {
    navigate(`/ticketbookingform/${id}`);
  };

  const gotoEditPage = () => {
    navigate("/edittraindetails");
    console.log(editTrain);
  };
  return (
    <div className="Alltraindetails">
      <div className="topInViewTrain">
        <h3 className="viewtraindetails-header">
          <DirectionsTransitIcon />
          Train Details
          <DirectionsTransitIcon />
        </h3>
        <div className="addtraindetailbutton">
          <Button
            onClick={gotoAddTrainDetails}
            variant="contained"
            color="success"
          >
            <AddCircleIcon />
          </Button>
        </div>
      </div>
      <div className="traindetailstable">
  
        <div className="train-whole-container">
          {trainDetails.map((traindetails, index) => (
            <div className="train-container">
              <div className="train-container-box">
                <div className="train-left-section">
                  <span className="train-trainno">#{traindetails.trainno}</span>
                  <img
                    width="50"
                    src={"https://clipground.com/images/train-logo-png-7.png"}
                    alt=""
                  />
                  <p className="train-name">{traindetails.trainname}</p>
                </div>

                <div className="train-middle-section">
                  <div className="train-section-1">
                    <p className="train-departurecity">
                      {traindetails.trainInfo.trainStartPoint}
                    </p>
                    <p className="train-departuretime">
                      {traindetails.trainInfo.trainStartTime}
                    </p>
                  </div>
                  <div className="train-section-2">
                    <div className="train-box-1">
                      <span>
                        <img
                          width="120"
                          src="https://res.cloudinary.com/doz5njr9h/image/upload/v1686235225/origen-linea_toabfl.svg"
                          alt=""
                        />
                      </span>

                      <p>
                        Direct <span>-</span> {traindetails.duration}{" "}
                      </p>
                      <span>
                        <img
                          width="120"
                          src="https://res.cloudinary.com/doz5njr9h/image/upload/v1686235143/destino-linea2_hts2mq.svg"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="train-box-2">
                      <p className="train-servicedays">
                        {traindetails.serviceDays}
                      </p>
                    </div>
                  </div>
                  <div className="train-section-3">
                    <p className="train-arrivalcity">
                      {traindetails.trainInfo.trainEndPoint}
                    </p>
                    <p className="train-arrivaltime">
                      {traindetails.trainInfo.trainEndTime}
                    </p>
                  </div>
                </div>
                <div className="train-right-section">
                  <div
                    className="deleteicon"
                    onClick={() => DeleteTrainDetails(traindetails.no)}
                  >
                    <DeleteIcon />
                  </div>
                  <div
                    onClick={() => {
                      gotoEditPage();
                      setEditTrain(traindetails);
                    }}
                    className="editicon"
                  >
                    <EditIcon />
                  </div>
                  <div>
                    <p></p>
                    <p></p>
                    <button
                      onClick={() => {
                        gotoBookTicket(traindetails.no);
                        // setEditPass(traindetails);
                      }}
                      className="continue-button"
                    >
                      Continue
                    </button>
                  </div >
                 
                </div>
              </div>
              <div className="train-container-2">
                <p>
                  <span>No of Stops:</span>
                  {traindetails.stops}
                </p>
                <div className="train_classs">
                  {traindetails.classes.split(",").map((clas) => {
                    return <p className="train_class">{clas}</p>;
                  })}
                </div>
                <p>
                  <span>Total Distance :</span>
                  {traindetails.trainInfo.distance_in_KM}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ViewTrainDetails;
