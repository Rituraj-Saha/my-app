import React from "react";
import TextField from "@mui/material/TextField";
import Textarea from "@mui/joy/Textarea";
import Button from "@mui/material/Button";
import useIsMobile from "../../util/useIsMobile";
import useSendMail from "../../util/useSendMail";
import { useRef, useState, useEffect } from "react";
import swal from "sweetalert";
import { ThreeCircles } from "react-loader-spinner";
const ContactForm = (props) => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");
  const messageRef = useRef(null);

  const usedFor = props.usedFor;
  var messageVisibility = "";
  if (usedFor == "priceCalculator") {
    messageVisibility = "none";
  }
  console.log("msgv:" + messageVisibility);
  const [handleLoading, setHandleLoading] = useState(false);
  function validate() {
    console.log("called validate");
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (nameRef.current.value == "") {
      // window.alert("Name can not be Empty");
      swal("", "Name can not be Empty", "warning");
      return false;
    }
    if (
      emailRef.current.value == "" ||
      !emailRef.current.value.match(isValidEmail)
    ) {
      swal(
        "",
        "email can not be Empty Or Please enter a valid Email",
        "warning"
      );
      return false;
    }
    if (
      phoneRef.current.value == "" ||
      !phoneRef.current.value.match("[0-9]{10}")
    ) {
      // window.alert("phone can not be Empty or please provide a valid number");
      swal(
        "",
        "phone can not be Empty or please provide a valid number",
        "warning"
      );
      return false;
    }
    if (props.usedFor != "priceCalculator" && messageRef.current.value == "") {
      swal("", "Please put some message", "warning");
      return false;
    }
    // setAllDataValidated(true);

    return true;
  }
  function funhandleLoading() {
    setHandleLoading(false);
  }
  function SendMail(msg, usedFor) {
    setHandleLoading(true);

    useSendMail(
      nameRef.current.value,
      funhandleLoading,
      "Name: " +
        nameRef.current.value +
        " Email: " +
        emailRef.current.value +
        "  Phone Number: " +
        phoneRef.current.value +
        "  Message: " +
        msg,
      usedFor
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        backgroundColor: "#3019191B",
        padding: "20px",
        border: "1px solid white",
        borderRadius: "10px",
        color: "white",
      }}
    >
      <ThreeCircles
        visible={handleLoading}
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="three-circles-loading"
        wrapperStyle={{ position: "absolute", top: "50%", left: "65%" }}
        wrapperClass=""
      />

      <span style={{ fontSize: "25px" }}>Send Us a Message</span>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        sx={{
          border: "1px solid rgba(255,255,255,.6)",
          borderRadius: 1,
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "rgba(255,255,255,.2)",
            },
          },
        }}
        InputLabelProps={{
          style: { color: "#fff" },
        }}
        InputProps={{ style: { color: "#fff" } }}
        inputRef={nameRef}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        sx={{
          border: "1px solid rgba(255,255,255,.6)",
          borderRadius: 1,
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "rgba(255,255,255,.2)",
            },
          },
        }}
        InputLabelProps={{
          style: { color: "#fff" },
        }}
        InputProps={{ style: { color: "#fff" } }}
        inputRef={emailRef}
      />
      <TextField
        id="outlined-basic"
        label="Phone"
        variant="outlined"
        sx={{
          border: "1px solid rgba(255,255,255,.6)",
          borderRadius: 1,
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "rgba(255,255,255,.2)",
            },
          },
        }}
        InputLabelProps={{
          style: { color: "#fff" },
        }}
        InputProps={{ style: { color: "#fff" } }}
        inputRef={phoneRef}
      />
      <Textarea
        placeholder="Type your message"
        minRows={2}
        sx={{
          border: "1px solid rgba(255,255,255,.6)",
          borderRadius: 1,
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "rgba(255,255,255,.2)",
            },
          },
          display: messageVisibility,
        }}
        InputLabelProps={{
          style: { color: "#fff" },
        }}
        InputProps={{ style: { color: "#fff" } }}
        slotProps={{ textarea: { ref: messageRef } }}
        // ref={messageRef}
        // inputRef={messageRef}
      />
      <Button
        variant="contained"
        sx={{
          ":hover": {
            bgcolor: "var(--buttonBack)", // theme.palette.primary.main
          },
          backgroundColor: "var(--buttonBack)",
        }}
        onClick={
          usedFor == "priceCalculator"
            ? () => {
                if (validate()) {
                  if (props.calcutedAmount()) {
                    SendMail("custom msg", usedFor);
                  }
                }
              }
            : () => {
                let customMsg = messageRef.current.value;

                return validate() ? SendMail(customMsg) : null;
              }
        }
      >
        Send
      </Button>
    </div>
  );
};

export default ContactForm;
