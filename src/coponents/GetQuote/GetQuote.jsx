import React from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useRef } from "react";
import "./GetQuote.css";

const GetQuote = () => {
  const name = useRef();
  const email = useRef();
  const phoneNumber = useRef();
  function validator() {
    console.log("nameRef " + name.current.value);
    console.log("phnRef " + phoneNumber.current.value);
    if (email.current.validity.valid) {
      console.log("emailRef " + email.current.value);
    } else console.log("emailRef " + "invalid");

    if (phoneNumber.current.value.match("[0-9]{10}")) {
      console.log("phnRef " + phoneNumber.current.value);
    } else console.log("phnRef " + "invalid");
  }
  return (
    <div className="getQuote">
      <span className="texthead">Designs for Every Budget</span>
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        style={{ width: "70%" }}
        inputRef={name}
      />
      <TextField
        id="email"
        label="Email ID"
        variant="outlined"
        style={{ width: "70%" }}
        inputRef={email}
        type="email"
      />
      <TextField
        id="phone"
        label="Phone Number"
        helperText="Without country code(Service limited to India)"
        variant="outlined"
        style={{ width: "70%" }}
        inputRef={phoneNumber}
      />
      {/* <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Send me updates on WhatsApp"
        style={{ width: "70%" }}
        sx={{
          color: "#F17070",
          "&.Mui-checked": {
            color: "#F17070",
          },
        }}
      /> */}
      {/* <TextField
        id="phone"
        label="Property Name"
        variant="outlined"
        style={{ width: "70%" }}
      /> */}
      <span className="policySpan">
        By submitting this form, you agree to the privacy policy & terms and
        conditions
      </span>
      <div className="get-coute-button" onClick={validator}>
        Get Free Quote
      </div>
    </div>
  );
};

export default GetQuote;
