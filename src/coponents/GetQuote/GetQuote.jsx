import React from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./GetQuote.css";
const GetQuote = () => {
  return (
    <div className="getQuote">
      <span className="texthead">Designs for Every Budget</span>
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        style={{ width: "70%" }}
      />
      <TextField
        id="email"
        label="Email ID"
        variant="outlined"
        style={{ width: "70%" }}
      />
      <TextField
        id="phone"
        label="Phone Number"
        variant="outlined"
        style={{ width: "70%" }}
      />
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Send me updates on WhatsApp"
        style={{ width: "70%" }}
        sx={{
          color: "#F17070",
          "&.Mui-checked": {
            color: "#F17070",
          },
        }}
      />
      <TextField
        id="phone"
        label="Property Name"
        variant="outlined"
        style={{ width: "70%" }}
      />
      <span className="policySpan">
        By submitting this form, you agree to the privacy policy & terms and
        conditions
      </span>
      <div className="get-coute-button">Get Free Quote</div>
    </div>
  );
};

export default GetQuote;
