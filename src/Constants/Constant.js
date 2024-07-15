import { color } from "framer-motion";
import React from "react";
import { motion, useScroll } from "framer-motion";
import { duration } from "@mui/material";
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
    title: "Welcome To DecorStudio",
    msg: "Enhancing Your Lifestyle",
  },

  TaglineMsg: {
    title: "Personalized Designs for Every Lifestyle",
    msg: "At DecorStudio, we understand that your home is an extension of who you are. That's why we offer tailored design solutions that reflect your unique personality and lifestyle. Our approach to interior design is all about creating spaces that are not only beautiful but also deeply personal and functional for your everyday life.",
  },
  offeringsHeading: {
    title: "Tailored Design Solutions",
    msg: "With DecorStudio, your home will be more than just a place to live",
  },
};
export default Constants;
