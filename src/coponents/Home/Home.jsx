import React, { useEffect } from "react";
import "./Home.css";
import GetQuote from "../GetQuote/GetQuote";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import useIsMobile from "../../util/useIsMobile";
import HomeMobile from "./HomeMobile";
import BadgeSection from "./BadgeSection/BadgeSection";
import TaglineSectionOne from "./TagLineSection/TaglineSectionOne";
import SlidingPanel from "./SlidingPanel/SlidingPanel";
import HowItWorks from "../how_it_works/HowItWorks";
import { useLocation } from "react-router-dom";
const Home = () => {
  const { state } = useLocation();
  const { targetId } = state || {};

  // useEffect(() => {
  //   console.log(window.location.pathname.)
  // }, []);
  return (
    <>
      {useIsMobile() ? (
        <HomeMobile />
      ) : (
        <>
          <div className="home">
            <div className="content">
              <div className="left">
                <span>Bring home beautiful</span>

                <span>
                  interiors <span> that fit your budget</span>
                </span>

                <span>Experiance unmatched quality & timely delivery with</span>
                <span>HomeCrafter</span>
              </div>
              <div className="right">
                <GetQuote />
              </div>
              <div className="wappBar">
                <WhatsAppIcon style={{ width: "55px", height: "48px" }} />
              </div>
            </div>
            <BadgeSection />
            <TaglineSectionOne />
            <SlidingPanel />

            <HowItWorks id="how_it_works" />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
