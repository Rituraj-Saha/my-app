import React from "react";
import { Element } from "react-scroll";
import "./Contact";
const Contact = () => {
  return (
    <Element name="contact" className="contact" id="contact">
      {" "}
      <div>
        <div className="left">
          <div className="addresss-tag">address</div>
          <div className="phone-tag">+91 9674345373</div>
          <div className="email">Homecrafter@gmail.com</div>
        </div>
        <div className="right"></div>
      </div>
    </Element>
  );
};

export default Contact;
