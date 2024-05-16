import React from "react";
import { Element } from "react-scroll";
import "../ContactUs/Contact.css";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Textarea from "@mui/joy/Textarea";
import Button from "@mui/material/Button";
import useIsMobile from "../../util/useIsMobile";

const Contact = () => {
  return (
    <Element name="contact" className="contact" id="contact">
      {" "}
      <div className="contactHeading">
        <span>Contact Us</span>
      </div>
      <div
        className={useIsMobile() ? "contact-parent-mobile" : "contact-parent"}
      >
        <div className="left">
          <div className="addresss-tag">address</div>
          <div className="phone-tag">+91 9674345373</div>
          <div className="email">Homecrafter@gmail.com</div>
        </div>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            fontWeight: "bold",
            borderWidth: "2px",
            margin: "10px",
          }}
        />
        <div className="right">
          <div>
            <span>Send Us a Message</span>
          </div>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            className="textInputCustom"
          />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Phone" variant="outlined" />
          <Textarea placeholder="Type your message" minRows={2} />
          <Button variant="contained">Send</Button>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
