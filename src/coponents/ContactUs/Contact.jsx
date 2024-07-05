import React from "react";
import { Element } from "react-scroll";
import "../ContactUs/Contact.css";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Textarea from "@mui/joy/Textarea";
import Button from "@mui/material/Button";
import useIsMobile from "../../util/useIsMobile";
import ContactForm from "./ContactForm";

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
          <div className="email">Dream Weaver@gmail.com</div>
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
        <div
          className="right"
          style={{ backgroundColor: "rgba(10, 8, 8, 0.6)" }}
        >
          <ContactForm />
        </div>
      </div>
    </Element>
  );
};

export default Contact;
