import { color } from "framer-motion";
import React from "react";
import { motion, useScroll } from "framer-motion";
import { duration } from "@mui/material";
export function whatsAppMsgAction(msg) {
  // Appending the phone number to the URL
  console.log("clicked on wappp");
  // let url = `https://web.whatsapp.com/send?phone=+918296109996`;
  let url = `https://wa.me/918296109996`;
  // Appending the message to the URL by encoding it
  url += `?text=${msg}`;

  // Open our newly created URL in a new tab to send the message
  window.open(url);
}
export function homeMsg() {
  return (
    <>
      {/* <motion.div
                      initial={{ opacity: 0, x: -200 }}
                      whileInView={{ opacity: 1, x: -50 }} */}
      <motion.span
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        style={{ fontSize: "28px", fontWeight: "600", marginTop: "60px" }}
      >
        Elevate Your Home with
      </motion.span>
      <motion.span
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        style={{ color: "yellow", fontSize: "30px", fontWeight: "600" }}
      >
        Dream Weaver Studio
      </motion.span>
      <motion.span
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.3 }}
        style={{ fontSize: "28px", fontWeight: "600" }}
      >
        We deliver Innovative Designs with Exceptional Quality
      </motion.span>
    </>
  );
}
const Constants = {
  waitScreenMsg: {
    title: "Welcome To Dream Weaver Studio",
    msg: "Enhancing Your Lifestyle",
  },

  TaglineMsg: {
    title: "Personalized Designs for Every Lifestyle",
    msg: "At Dream Weaver Studio, we understand that your home is an extension of who you are. That's why we offer tailored design solutions that reflect your unique personality and lifestyle. Our approach to interior design is all about creating spaces that are not only beautiful but also deeply personal and functional for your everyday life.",
  },
  offeringsHeading: {
    title: "Tailored Design Solutions",
    msg: "With DecorStudio, your home will be more than just a place to live",
  },
  ContactInfo: {
    email: "support@dreamweaverstudio.in",
    phone: "+918296109996",
    address:
      "Flat Number: B2F,Manindra Appartment,NSD Ghat Road,Sukchar,Kolkata-700115",
  },
};
export default Constants;
