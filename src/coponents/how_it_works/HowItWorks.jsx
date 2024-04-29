import React from "react";
import "./HowItWorks.css";
import { Element } from "react-scroll";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Sample from "../../res/warrenty.avif";
import useIsMobile from "../../util/useIsMobile";
const HowItWorks = () => {
  return (
    <Element name="howItWorks" className="howItWorks" id="howItWorks">
      <div className={useIsMobile()?"how-it-works-working-parent-mobile":"how-it-works-working-parent"}>
        <span>Home Make Over In 4 Easy Steps</span>
        <div className={useIsMobile()?"badjes-mobile":"badjes"}>
        {/* <Stack direction="row" spacing={8}> */}
          <div className={useIsMobile()?"avtar-card-mobile":"avtar-card"}>
            <Avatar
              alt="Remy Sharp"
              src={Sample}
              className="how-it-works-badges"
            />
            <div className="avtar-title-sub-wrap">
            <span>Meet our designer</span>
            <span>
              Our Homecrafter team will reachout to you to understand your
              design vision both asthetically & functionally.
            </span>
            </div>
          </div>
          <div className={useIsMobile()?"avtar-card-mobile":"avtar-card"}>
            <Avatar
              alt="Travis Howard"
              src={Sample}
              className="how-it-works-badges"
            />
            <div className="avtar-title-sub-wrap">
              <span>Meet our designer</span>
              <span>
                Our Homecrafter team will reachout to you to understand your
                design vision both asthetically & functionally.
              </span>
            </div>
              
          </div>
          <div className={useIsMobile()?"avtar-card-mobile":"avtar-card"}>
            <Avatar
              alt="Cindy Baker"
              src={Sample}
              className="how-it-works-badges"
            />
              <div className="avtar-title-sub-wrap"> 
              <span>Meet our designer</span>
              <span>
                Our Homecrafter team will reachout to you to understand your
                design vision both asthetically & functionally.
              </span>
            </div>
           
          </div>
          <div className={useIsMobile()?"avtar-card-mobile":"avtar-card"}>
            {" "}
            <Avatar
              alt="Cindy Baker"
              src={Sample}
              className="how-it-works-badges"
            />
            <div className="avtar-title-sub-wrap"> 
            <span>Meet our designer</span>
            <span>
              Our Homecrafter team will reachout to you to understand your
              design vision both asthetically & functionally.
            </span>
            </div>
          </div>
        {/* </Stack> */}
        </div>
        
      </div>
    </Element>
  );
};

export default HowItWorks;
