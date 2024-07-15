import React, { useState } from "react";
import "./Tagline.css";
import GetQuote from "../../GetQuote/GetQuote";
import CancelIcon from "@mui/icons-material/Cancel";
import useIsMobile from "../../../util/useIsMobile";
import PriceCalculator from "../../price_calculator/PriceCal";
import ContactForm from "../../ContactUs/ContactForm";
import { Element, scroller } from "react-scroll";
import CustomButton from "../../../ReusableComponents/CustomButton/CustomButton";
import Constants from "../../../Constants/Constant";
const TaglineSectionOne = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleClick = () => {
    // scroller.scrollTo("offerings", {
    //   to: "offerings",
    //   spy: true,
    //   smooth: true,
    //   duration: 500,
    //   offset: 0,
    // });
    setOpenDialog(true);
  };

  return (
    <div className="tagline">
      <span className="taglinespan1">{Constants.TaglineMsg.title}</span>
      <span className="taglinespan2">{Constants.TaglineMsg.msg}</span>
      {/* <span onClick={handleClick} className="taglinespan3">
        BOOK FREE CONSULTATION
      </span> */}
      <CustomButton
        title={"Book Free Consultation"}
        handleClick={handleClick}
      />
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
