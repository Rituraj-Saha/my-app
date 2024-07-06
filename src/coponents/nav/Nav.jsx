import React, { useEffect, useState } from "react";
import "./Nav.css";
import Home from "../Home/Home";
import Offering from "../offerings/Offering";

import ScrollToTop from "../../util/ScrollToTop";
import LogoDecor from "../../res/Dreamweaver.png";
import {
  Link as ScrollLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

// import { scroller } from "react-scroll";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import DesignIdea from "../DesignIdeas/DesignIdea";
const Nav = () => {
  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />{" "}
      <div className="nav-parent">
        <nav className="animation-div">
          <img
            src={LogoDecor}
            // style={{ width: "80px", objectFit: "cover", borderRadius: "100%" }}
          />
          <ul>
            <li>
              {" "}
              <Link to="/my-app/" scroll={true}>
                Interior
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/offerings" scroll={true}>
                Offerings
              </Link>
            </li>
            <li>
              <Link to="/howItWorks" scroll={"#how-it-works-parent"}>
                {" "}
                How It Works
              </Link>
            </li>
            <li>
              <Link
                to="/price-calculator-home"
                scroll={"#price-calculator-home"}
              >
                {" "}
                Price Calculator
              </Link>
            </li>
            <li>
              <Link to="/contact" scroll={true}>
                {" "}
                Contact
              </Link>
            </li>
            <li>
              <Link to="/design-ideas" scroll={true}>
                {" "}
                Design Ideas
              </Link>
            </li>
          </ul>
          <div className="get-quote">
            <div className="btn-shine"> Get Quote</div>
          </div>
        </nav>
        <div className="backParallel">
          <div className="backdrop"></div>
          <div className="container">
            <Routes>
              <Route exact path="/my-app/" element={<Home />}></Route>
              <Route
                exact
                path="/offerings"
                element={<Home scrollToElement="offerings" />}
              ></Route>
              <Route
                exact
                path="/howItWorks"
                element={<Home scrollToElement="howItWorks" />}
              ></Route>
              <Route
                exact
                path="/contact"
                element={<Home scrollToElement="contact" />}
              ></Route>
              <Route
                exact
                path="/price-calculator-home"
                element={<Home scrollToElement="price-calculator-home" />}
              ></Route>
              <Route
                exact
                path="/design-ideas"
                element={<Home scrollToElement="design-ideas" />}
              ></Route>
            </Routes>
            {/* <Home />
      <BadgeSection /> */}
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Nav;
