import React, { useEffect } from "react";
import "./Home.css";
import GetQuote from "../GetQuote/GetQuote";

import useIsMobile from "../../util/useIsMobile";
import HomeMobile from "./HomeMobile";
import BadgeSection from "./BadgeSection/BadgeSection";
import TaglineSectionOne from "./TagLineSection/TaglineSectionOne";
import SlidingPanel from "./SlidingPanel/SlidingPanel";
import HowItWorks from "../how_it_works/HowItWorks";
import { useLocation } from "react-router-dom";
import { Element, scroller } from "react-scroll";
import ContactForm from "../ContactUs/ContactForm";
import PriceCalculatorHome from "./PriceCalculatorHome/PriceCalculatorHome";
import Contact from "../ContactUs/Contact";
import DesignIdea from "../DesignIdeas/DesignIdea";
import LogoDream from "../../res/Dreamweaver.png";
import { homeMsg } from "../../Constants/Constant";
const Home = (props) => {
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
        offset: -300,
      });
    if (props.scrollToElement == "contact")
      scroller.scrollTo("contact", {
        to: "contact",
        spy: true,
        smooth: true,
        duration: 500,
        offset: -300,
      });
    if (props.scrollToElement == "offerings")
      scroller.scrollTo("offerings", {
        to: "offerings",
        spy: true,
        smooth: true,
        duration: 500,
        offset: -300,
      });
    if (props.scrollToElement == "price-calculator-home")
      scroller.scrollTo("price-calculator-home", {
        to: "price-calculator-home",
        spy: true,
        smooth: true,
        duration: 500,
        offset: -300,
      });
    if (props.scrollToElement == "design-ideas")
      scroller.scrollTo("design-ideas", {
        to: "design-ideas",
        spy: true,
        smooth: true,
        duration: 500,
        offset: -300,
      });
  });
  return (
    <>
      {useIsMobile() ? (
        <HomeMobile />
      ) : (
        <>
          <div className="home">
            <div className="content">
              <div className="left">
                {homeMsg()}

                {/* <span>Dream-Weaver</span> */}
                <img
                  src={LogoDream}
                  alt=""
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.6)",
                    objectFit: "cover",
                    marginTop: "50px",
                  }}
                />
              </div>
              <div className="right">
                <ContactForm msgVisibility="visible" />
              </div>
            </div>
            <BadgeSection />
            <TaglineSectionOne />
            <SlidingPanel id="offerings" />

            <DesignIdea id="design_idea" />

            <HowItWorks id="how_it_works" />
            {/* <PriceCal id="price_calculator" /> */}
            <PriceCalculatorHome id="price-calculator-home" />
            <Contact id="contact" />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
