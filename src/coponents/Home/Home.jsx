import React from "react";
import "./Home.css";
import GetQuote from "../GetQuote/GetQuote";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import useIsMobile from "../../util/useIsMobile";
import HomeMobile from "./HomeMobile";
import BadgeSection from "../BadgeSection/BadgeSection";
const Home = () => {
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

                <span>
                  Experiance unmatched quality & timely delivery with ****
                </span>
              </div>
              <div className="right">
                <GetQuote />
              </div>
              <div className="wappBar">
                <WhatsAppIcon style={{ width: "55px", height: "48px" }} />
              </div>
            </div>
            <BadgeSection />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
