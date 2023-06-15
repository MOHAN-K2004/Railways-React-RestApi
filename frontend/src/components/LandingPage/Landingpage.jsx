import React from "react";
import "./Landingpage.css";
import SwapHorizontalCircleIcon from "@mui/icons-material/SwapHorizontalCircle";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";

import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 4;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};
const names = [
  "GENERAL",
  "LADIES",
  "LOWER BERTH/SR.CITIZEN",
  "PERSON WITH DISABILITY",
  "TATKAL",
  "PREMIUM TATKAL",
];
const names1 = [
  "All Classes",
  "Anubhuti Class (EA)",
  "AC First Class (1A)",
  "Vistadome AC (EV)",
  "Exec. Chair Car (EC)",
  "AC 2 Tier (2A)",
  "First Class (FC)",
  "AC 3 Tier (3A)",
  "AC 3 Economy (3E)",
  "AC 3 Economy (3E)",
  "AC Chair car (CC)",
  "Sleeper (SL)",
  "Vistadome Non AC (VS)",
  "Second Sitting (2S)",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Landingpage = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const navigate = useNavigate();
  const gotoTraindetails = () => {
    if(localStorage.getItem('user')){
      navigate('/viewtraindetails')
      return;
    }
    navigate("/login");

  };

  return (
    <div className="homebackground6">
      <div className="homebox16">
        <img
          src="https://images.designtrends.com/wp-content/uploads/2016/02/23104856/White-Train-Wallpaper.jpg"
          alt=""
        ></img>
        <h2>Explore NSM trains</h2>
        <h3> effortlessly by train </h3>
        <h4 className="homebox16-h4">*Save 61% on average when you book in advance*</h4>
      </div>
      <div className="homebox26">
        <input className="homefrom6" type="text" placeholder="From" />
        <div className="homeswap6">
          <SwapHorizontalCircleIcon />
        </div>
        <input className="hometo6" type="text" placeholder="To" />
        <h1>Depature :</h1>
        <h4>Destination :</h4>
        <h2>From Date :</h2>
        <h3>To Date :</h3>
        <h5>Reservation Type :</h5>
        <h6>All Classes :</h6>
        <h7>Tickets</h7>
        <input className="homedate6" type="date" />
        <input className="homedate16" type="date" />

        <Select
          className="homereservationtype6"
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              <p className="names16">{name}</p>
            </MenuItem>
          ))}
        </Select>

        <Select
          placeholder=" Reservation type"
          className="homeclasses6"
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names1.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              <p className="names26">{name}</p>
            </MenuItem>
          ))}
        </Select>
        <Button
          onClick={gotoTraindetails}
          className="homesubmitbutton6"
          variant="contained"
          color="success"
          href="#contained-buttons"
        >
          Submit
        </Button>
        <img
          className="image16"
          src="https://assets.sentinelassam.com/h-upload/2022/08/10/373549-azadi.webp"
          alt=""
        ></img>
        <img
          className="image26"
          src="https://cdn.mos.cms.futurecdn.net/LSNfJe7vmuHnXeSqSefycK-1200-80.jpg"
          alt=""
        ></img>
        <img
          className="image36"
          src="https://bucketeer-ebc56ea4-a249-4208-b1ff-70fa04c59238.s3.amazonaws.com/uploads/employer/logo/1902/Skjermbilde_2016-10-21_kl._13.39.52.png"
          alt=""
        ></img>
      </div>
    </div>
  );
};
export default Landingpage;
