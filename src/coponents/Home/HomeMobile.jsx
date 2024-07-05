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
    <>
      <div className="home-mobile">
        <div className="content-mobile">
          <div className="left">
            <span>Bring home beautiful</span>

            <span>
              interiors <span> that fit your budget</span>
            </span>

            <span>Experiance unmatched quality & timely delivery with</span>
            <span>Dream Weaver</span>
          </div>
          <div className="right">{/* <GetQuote /> */}</div>
          <div className="wappBar">
            <WhatsAppIcon style={{ width: "55px", height: "48px" }} />
          </div>
        </div>
        <BadgeSectionMobile />
        <TaglineSectionOne />
        <SlidingPanel />

        <HowItWorks id="how_it_works" />
        {/* <PriceCal id="price_calculator" /> */}
        <PriceCalculatorHome id="price-calculator-home" />
        <Contact id="contact" />
      </div>
    </>
  );
};

export default HomeMobile;
