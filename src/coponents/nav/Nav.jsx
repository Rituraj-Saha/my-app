import React, { useEffect, useState } from "react";
import "./Nav.css";
import Home from "../Home/Home";
import Offering from "../offerings/Offering";

import ScrollToTop from "../../util/ScrollToTop";

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
        <nav>
          <span>LOGO</span>
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
              {/* <ScrollLink
                activeClass="active"
                to="priceCal"
                spy={true}
                smooth={true}
                duration={500}
              > */}
              <Link to="/contact" scroll={true}>
                {" "}
               Contact
              </Link>
              {/* Price Calculator */}
              {/* </ScrollLink> */}
              {/* <Link to="/price_calculator"> */}
            </li>
          </ul>
          <span className="get-quote">Get Quote</span>
        </nav>

        <div className="container">
          <Routes>
            <Route exact path="/my-app/" element={<Home />}></Route>
            <Route exact path="/offerings" element={<Offering />}></Route>
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
          </Routes>
          {/* <Home />
      <BadgeSection /> */}
        </div>
      </div>
    </Router>
  );
};

export default Nav;
