import React from "react";
import "./HowItWorks.css";
import { Element } from "react-scroll";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Sample from "../../res/warrenty.avif";
import useIsMobile from "../../util/useIsMobile";
import ContactForm from "../../res/how_it_works_svg/contact-form-svg.svg";
import Meeting from "../../res/how_it_works_svg/engineer-worker-svgrepo-com.svg";
import Visit from "../../res/how_it_works_svg/stalker-watch-observe-person-svgrepo-com.svg";
import Ok from "../../res/how_it_works_svg/ok-svgrepo-com.svg";
const HowItWorks = () => {
  return (
    <Element name="howItWorks" className="howItWorks" id="howItWorks">
      <div
        className={
          useIsMobile()
            ? "how-it-works-working-parent-mobile"
            : "how-it-works-working-parent"
        }
      >
        <span>Home Make Over In 4 Easy Steps</span>
        <div className={useIsMobile() ? "badjes-mobile" : "badjes"}>
          {/* <Stack direction="row" spacing={8}> */}
          <div className={useIsMobile() ? "avtar-card-mobile" : "avtar-card"}>
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                width: "100%",
                position: "relative",
                top: "80",
              }}
            >
              <span
                style={{
                  backgroundColor: "var(--buttonBack",
                  width: "25px",
                  height: "25px",
                  borderRadius: "25px",
                  color: "white",
                }}
              >
                1
              </span>
            </div>
            <Avatar
              alt="Remy Sharp"
              src={ContactForm}
              className="how-it-works-badges"
            />
            <div className="avtar-title-sub-wrap">
              <span>Get A Quote & Fill the Contact Form</span>

              {/* <span>
                Our Dream Weaver team will reachout to you to understand your
                design vision both asthetically & functionally.
              </span> */}
            </div>
          </div>
          <div className={useIsMobile() ? "avtar-card-mobile" : "avtar-card"}>
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                width: "100%",
                position: "relative",
                top: "80",
              }}
            >
              <span
                style={{
                  backgroundColor: "var(--buttonBack)",
                  width: "25px",
                  height: "25px",
                  borderRadius: "25px",
                  color: "white",
                }}
              >
                2
              </span>
            </div>
            <Avatar
              alt="Travis Howard"
              src={Meeting}
              className="how-it-works-badges"
            />

            <div className="avtar-title-sub-wrap">
              <span>Scedule A meeting with our designeres</span>

              {/* <span>
                Our Dream Weaver team will reachout to you to understand your
                design vision both asthetically & functionally.
              </span> */}
            </div>
          </div>
          <div className={useIsMobile() ? "avtar-card-mobile" : "avtar-card"}>
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                width: "100%",
                position: "relative",
                top: "80",
              }}
            >
              <span
                style={{
                  backgroundColor: "var(--buttonBack",
                  width: "25px",
                  height: "25px",
                  borderRadius: "25px",
                  color: "white",
                }}
              >
                3
              </span>
            </div>
            <Avatar
              alt="Cindy Baker"
              src={Visit}
              className="how-it-works-badges"
            />
            <div className="avtar-title-sub-wrap">
              {" "}
              <span>Site visit & Finilize the contract</span>
              {/* <span>
                Our Dream Weaver team will reachout to you to understand your
                design vision both asthetically & functionally.
              </span> */}
            </div>
          </div>
          <div className={useIsMobile() ? "avtar-card-mobile" : "avtar-card"}>
            {" "}
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                width: "100%",
                position: "relative",
                top: "80",
              }}
            >
              <span
                style={{
                  backgroundColor: "var(--buttonBack",
                  width: "25px",
                  height: "25px",
                  borderRadius: "25px",
                  color: "white",
                }}
              >
                4
              </span>
            </div>
            <Avatar
              alt="Cindy Baker"
              src={Ok}
              className="how-it-works-badges"
            />
            <div className="avtar-title-sub-wrap">
              <span>Your dream home is Ready To Deliver</span>
              {/* <span>
                Our Dream Weaver team will reachout to you to understand your
                design vision both asthetically & functionally.
              </span> */}
            </div>
          </div>
          {/* </Stack> */}
        </div>
      </div>
    </Element>
  );
};

export default HowItWorks;
