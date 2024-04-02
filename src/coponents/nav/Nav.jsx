import React from "react";
import "./Nav.css";
import Home from "../Home/Home";
import BadgeSection from "../BadgeSection/BadgeSection";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="nav-parent">
      <div></div>
      <nav>
        <span>LOGO</span>
        <ul>
          <li>Offerings</li>
          <li>How It Works</li>
          <li>Price Calculator</li>
        </ul>
        <span className="get-quote">Get Quote</span>
      </nav>

      <div className="container">
        {/* <Home />
        <BadgeSection /> */}
      </div>
    </div>
  );
};

export default Nav;
