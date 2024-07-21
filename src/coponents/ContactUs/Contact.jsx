import React from "react";
import { Element } from "react-scroll";
import "../ContactUs/Contact.css";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Textarea from "@mui/joy/Textarea";
import Button from "@mui/material/Button";
import useIsMobile from "../../util/useIsMobile";
import ContactForm from "./ContactForm";
import EmailIcon from "@mui/icons-material/Email";
import Constants from "../../Constants/Constant";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const Contact = () => {
  return (
    <Element name="contact" className="contact" id="contact">
      {" "}
      <div className="contactHeading">
        <span style={{ color: "white" }}>Contact Us</span>
      </div>
      <div
        className={useIsMobile() ? "contact-parent-mobile" : "contact-parent"}
      >
        <div className="left">
          <span>Contact Us: </span>
          <Divider
            orientation="Horizontal"
            flexItem
            sx={{
              fontWeight: "bold",
              borderWidth: "1px",
              backgroundColor: "#FFFFFF",
            }}
          />
          <div className="addresss-tag">
            <EmailIcon />
            {Constants.ContactInfo.email}
          </div>
          <div className="addresss-tag">
            <LocalPhoneIcon />
            <WhatsAppIcon />
            {Constants.ContactInfo.phone}
          </div>
          <div className="addresss-tag">
            <LocationOnIcon />
            {Constants.ContactInfo.address}
          </div>
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
          style={{ backgroundColor: "rgba(10, 8, 8, 0.6)", padding: "50px" }}
        >
          <ContactForm />
        </div>
      </div>
    </Element>
  );
};

export default Contact;
