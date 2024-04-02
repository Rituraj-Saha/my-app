import React from "react";
import "./Home.css";
import InteriorHomePic from "../../res/interior_home.jpg";
import GetQuote from "../GetQuote/GetQuote";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Home = () => {
  return (
    <div className="home">
      <img src={InteriorHomePic} alt="" className="home-img" />
      <div className="effect"></div>
      <div className="content">
        <div className="left">
          <span>Bring home beautiful</span>
          <span>
            interiors <span> that fit your budget</span>
          </span>

          <span>Experiance unmatched quality & timely delivery with ****</span>
        </div>
        <div className="right">
          <GetQuote />
        </div>
        <div className="wappBar">
          <WhatsAppIcon style={{ width: "55px", height: "48px" }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
