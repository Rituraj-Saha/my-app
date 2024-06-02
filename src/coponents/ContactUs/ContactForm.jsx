import React from "react";
import TextField from "@mui/material/TextField";
import Textarea from "@mui/joy/Textarea";
import Button from "@mui/material/Button";
import useIsMobile from "../../util/useIsMobile";
import useSendMail from "../../util/useSendMail";
import { useRef } from "react";
const ContactForm = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");
  const messageRef = useRef("");
  const SendMail = () => {
    useSendMail(
      "Name: " +
        nameRef.current.value +
        "Email: " +
        emailRef.current.value +
        "Phone Number: " +
        phoneRef.current.value +
        "Message: " +
        messageRef.current.value
    );
  };
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
        }}
        InputLabelProps={{
          style: { color: "#fff" },
        }}
        InputProps={{ style: { color: "#fff" } }}
        slotProps={{ input: { messageRef } }}
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
        onClick={SendMail}
      >
        Send
      </Button>
    </div>
  );
};

export default ContactForm;
