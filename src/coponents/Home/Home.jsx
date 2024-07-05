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
import { Element, scroller } from "react-scroll";
import ContactForm from "../ContactUs/ContactForm";
import PriceCalculatorHome from "./PriceCalculatorHome/PriceCalculatorHome";
import Contact from "../ContactUs/Contact";
import DesignIdea from "../DesignIdeas/DesignIdea";
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
                <span>Bring home beautiful</span>

                <span>
                  interiors <span> that fit your budget</span>
                </span>

                <span>Experiance unmatched quality & timely delivery with</span>
                <span>Dream Weaver</span>
              </div>
              <div className="right">
                <ContactForm msgVisibility="visible" />
              </div>
              <div className="wappBar">
                <WhatsAppIcon style={{ width: "55px", height: "48px" }} />
              </div>
            </div>
            <BadgeSection />
            <TaglineSectionOne />
            <SlidingPanel id="offerings" />

            {/* <DesignIdea id="design_idea" /> */}

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
