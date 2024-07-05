import React, { useState } from "react";
import "./Tagline.css";
import GetQuote from "../../GetQuote/GetQuote";
import CancelIcon from "@mui/icons-material/Cancel";
import useIsMobile from "../../../util/useIsMobile";
import PriceCalculator from "../../price_calculator/PriceCal";
import ContactForm from "../../ContactUs/ContactForm";
const TaglineSectionOne = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleClick = () => {
    setOpenDialog(true);
  };

  return (
    <div className="tagline">
      <span className="taglinespan1">The home design you crave</span>
      <span className="taglinespan2">
        When you give your home the Home Crafter touch, you get both beauty and
        functionality. We <br /> employ state-of-art technology to ensure your
        home features a flawless look that lasts a very long time
      </span>
      <span onClick={handleClick} className="taglinespan3">
        BOOK FREE CONSULTATION
      </span>
      {useIsMobile() ? (
        <>
          {openDialog ? (
            <div className="alertdialog-mobile">
              <div className="alertdialog_container-mobile">
                {/* <GetQuote /> */}
                <ContactForm />
                <button
                  onClick={() => setOpenDialog(false)}
                  className="taglinespan3_alertdialog_cls_button-mobile"
                >
                  <CancelIcon
                    sx={{ color: "rgb(241, 112, 112)", fontSize: 30 }}
                  />
                </button>
              </div>
            </div>
          ) : (
            <></>
          )}
        </>
      ) : (
        <>
          {openDialog ? (
            <div className="alertdialog">
              <div className="alertdialog_container">
                {/* <GetQuote /> */}
                <ContactForm />
                <button
                  onClick={() => setOpenDialog(false)}
                  className="taglinespan3_alertdialog_cls_button"
                >
                  <CancelIcon
                    sx={{ color: "rgb(241, 112, 112)", fontSize: 30 }}
                  />
                </button>
              </div>
            </div>
          ) : (
            <></>
          )}
        </>
      )}
      {}
    </div>
  );
};

export default TaglineSectionOne;
