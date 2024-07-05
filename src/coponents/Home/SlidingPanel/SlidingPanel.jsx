import { React, useRef, useEffect, useState } from "react";
import "./Slidingpanel.css";
import { register } from "swiper/element/bundle";
import SampleImg_basic from "../../../res/interior_home.jpg";
import SampleImg_wooden_br from "../../../res/bedroom_wooden.jpg";
import SampleImg_indian_br from "../../../res/Indian_bedroom.jpg";
import SampleImg_cane_lvr from "../../../res/cane_furniture_living.jpg";
import SampleImg_modular_ktc from "../../../res/kitchen.jpg";
import SlideCard from "./SlideCard";
import { Swiper, SwiperSlide } from "swiper/react";
import GetQuote from "../../GetQuote/GetQuote";
import CancelIcon from "@mui/icons-material/Cancel";
import useIsMobile from "../../../util/useIsMobile";
import PriceCal from "../../price_calculator/PriceCal";
import { Element } from "react-scroll";
import { useDispatch } from "react-redux";
import { resetStore } from "../../../app/action";
import ContactForm from "../../ContactUs/ContactForm";

register();

const SlidingPanel = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const resetDispatch = useDispatch();
  const handleClick = () => {
    setOpenDialog(true);
  };

  const swiperElRef = useRef(null);

  const mySlides2 = [
    <swiper-slide>
      <SlideCard
        image={SampleImg_basic}
        title={"Monochromatic grey 2 BHK"}
        subtitle={"add cloudy hues to your space"}
        handleClick={handleClick}
      />
    </swiper-slide>,
    <swiper-slide>
      <SlideCard
        image={SampleImg_wooden_br}
        title={"Magistic Wooden "}
        subtitle={"add classy touch to your space"}
        handleClick={handleClick}
      />
    </swiper-slide>,
    <swiper-slide>
      <SlideCard
        image={SampleImg_indian_br}
        title={"Desi delight"}
        subtitle={"back to root"}
        handleClick={handleClick}
      />
    </swiper-slide>,
    <swiper-slide>
      <SlideCard
        image={SampleImg_cane_lvr}
        title={"Carishmatic Cane"}
        subtitle={"when your living is organically twinned"}
        handleClick={handleClick}
      />
    </swiper-slide>,
    <swiper-slide>
      <SlideCard
        image={SampleImg_modular_ktc}
        title={"Modular kitchen"}
        subtitle={"Your Smarter Arena"}
        handleClick={handleClick}
      />
    </swiper-slide>,
  ];
  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
    });

    swiperElRef.current.addEventListener("swiperslidechange", (e) => {});
    const swiperContainer = swiperElRef.current;
    const params = {
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            background-color: white;
            padding: 8px 16px;
            border-radius: 100%;
            color: red;
            height: 20px;
            width: 10px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          }
          .swiper-pagination-bullet{
            width: 10px;
            height: 10px;
            background-color: red;
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);
  function returnNoOfSlide() {}
  return (
    <Element name="offerings" className="offerings" id="offerings">
      <div className="sliding_panel_parent">
        <div
          className={
            useIsMobile()
              ? "sliding_panel_heading_mobile"
              : "sliding_panel_heading"
          }
        >
          <span>Homes for every style</span>
          <span>
            Superior finshes, trendy designs and quality modules at affordable
            prices
          </span>
        </div>

        {useIsMobile() ? (
          <>
            {openDialog ? (
              <div className="alertdialog-mobile">
                <div className="alertdialog_container-mobile">
                  {/* <PriceCal /> */}
                  <ContactForm />
                  <button
                    onClick={() => {
                      resetDispatch(resetStore());
                      setOpenDialog(false);
                    }}
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
                  <ContactForm />
                  <button
                    onClick={() => {
                      resetDispatch(resetStore());
                      setOpenDialog(false);
                    }}
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
        <swiper-container
          ref={swiperElRef}
          init="false"
          slides-per-view={useIsMobile() ? "1" : "3"}
          // navigation="true"
          pagination="true"
          class="my_swiper"
          spaceBetween="40"
        >
          {mySlides2}
        </swiper-container>
      </div>
    </Element>
  );
};

export default SlidingPanel;
