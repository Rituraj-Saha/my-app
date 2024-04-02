import React from "react";
import "./Nav.css";
import Home from "../Home/Home";
import Offering from "../offerings/Offering";
import HowItWorks from "../how_it_works/HowItWorks";
import PriceCal from "../price_calculator/PriceCal";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Nav = () => {
  return (
    <Router>
      {" "}
      <div className="nav-parent">
        <nav>
          <span>LOGO</span>
          <ul>
            <li>
              {" "}
              <Link to="/">Interior</Link>
            </li>
            <li>
              {" "}
              <Link to="/offerings">Offerings</Link>
            </li>
            <li>
              <Link to="/how_it_works">How It Works</Link>
            </li>
            <li>
              <Link to="/price_calculator">Price Calculator</Link>
            </li>
          </ul>
          <span className="get-quote">Get Quote</span>
        </nav>

        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/offerings" element={<Offering />}></Route>
            <Route exact path="/how_it_works" element={<HowItWorks />}></Route>
            <Route
              exact
              path="/price_calculator"
              element={<PriceCal />}
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
