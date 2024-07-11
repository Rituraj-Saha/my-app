import React, { useEffect } from "react";
import "./HomeMobile.css";
import GetQuote from "../GetQuote/GetQuote";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import useIsMobile from "../../util/useIsMobile";
import BadgeSectionMobile from "./BadgeSection/BadgeSctionMobile";
import TaglineSectionOne from "./TagLineSection/TaglineSectionOne";
import SlidingPanel from "./SlidingPanel/SlidingPanel";
import HowItWorks from "../how_it_works/HowItWorks";
import { useLocation } from "react-router-dom";
import { Element, scroller } from "react-scroll";
import PriceCal from "../price_calculator/PriceCal";
import Contact from "../ContactUs/Contact";
import PriceCalculatorHome from "./PriceCalculatorHome/PriceCalculatorHome";
import DesignIdea from "../DesignIdeas/DesignIdea";
import LogoDream from "../../res/Dreamweaver.png";
const HomeMobile = (props) => {
  const { state } = useLocation();
  const { targetId } = state || {};
  useEffect(() => {
    console.log("my props:" + props.scrollToElement);
    if (props.scrollToElement == "howItWorks")
      scroller.scrollTo("howItWorks", {
        to: "howItWorks",
        spy: true,
        smooth: true,
        duration: 500,
      });
    if (props.scrollToElement == "contact")
      scroller.scrollTo("contact", {
        to: "contact",
        spy: true,
        smooth: true,
        duration: 500,
      });
    if (props.scrollToElement == "offerings")
      scroller.scrollTo("offerings", {
        to: "offerings",
        spy: true,
        smooth: true,
        duration: 500,
      });
  });
  return (
    <div className="backParallel-mobile">
      <div className="home-mobile">
        <div className="wappBar">
          <WhatsAppIcon style={{ width: "55px", height: "48px" }} />
        </div>
        <div className="content-mobile">
          <div className="left">
            <span>Bring home beautiful</span>

            <span>
              interiors <span> that fit your budget</span>
            </span>

            <span>Experience unmatched quality & timely delivery with</span>
            {/* <span>Dream Weaver</span> */}
            <img
              src={LogoDream}
              alt=""
              style={{
                borderRadius: "20%",
                backgroundColor: "rgba(255, 255, 255, 0.6)",
                objectFit: "cover",
                height: "60%",
                width: "40%",
                marginTop: "40px",
              }}
            />
          </div>
          <div className="right">{/* <GetQuote /> */}</div>
        </div>
        <BadgeSectionMobile />
        <TaglineSectionOne />
        <SlidingPanel />
        <DesignIdea id="design_idea" />
        <HowItWorks id="how_it_works" />
        {/* <PriceCal id="price_calculator" /> */}
        <PriceCalculatorHome id="price-calculator-home" />
        <Contact id="contact" />
      </div>
    </div>
  );
};

export default HomeMobile;
