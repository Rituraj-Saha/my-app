import { React, useRef, useEffect, useState } from "react";
import "./Slidingpanel.css";
import { register } from "swiper/element/bundle";
import SampleImg from "../../../res/interior_home.jpg";
import SlideCard from "./SlideCard";
import { Swiper, SwiperSlide } from "swiper/react";
import GetQuote from "../../GetQuote/GetQuote";
import CancelIcon from "@mui/icons-material/Cancel";
import useIsMobile from "../../../util/useIsMobile";
register();

const SlidingPanel = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleClick = () => {
    setOpenDialog(true);
  };

  const swiperElRef = useRef(null);

  const mySlides2 = [
    <swiper-slide>
      <SlideCard
        image={SampleImg}
        title={"Monochromatic grey 2 BHK"}
        subtitle={"add cloudy hues to your space"}
        handleClick={handleClick}
      />
    </swiper-slide>,
    <swiper-slide>
      <SlideCard
        image={SampleImg}
        title={"xyz"}
        subtitle={"abc"}
        handleClick={handleClick}
      />
    </swiper-slide>,
    <swiper-slide>
      <SlideCard
        image={SampleImg}
        title={"xyz"}
        subtitle={"abc"}
        handleClick={handleClick}
      />
    </swiper-slide>,
    <swiper-slide>
      <SlideCard
        image={SampleImg}
        title={"xyz"}
        subtitle={"abc"}
        handleClick={handleClick}
      />
    </swiper-slide>,
    <swiper-slide>
      <SlideCard
        image={SampleImg}
        title={"xyz"}
        subtitle={"abc"}
        handleClick={handleClick}
      />
    </swiper-slide>,
  ];
  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("swiperslidechange", (e) => {
      console.log("slide changed");
    });
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
    <div className="sliding_panel_parent">
      <div className="sliding_panel_heading">
        <span>Homes for every style</span>
        <span>
          Superior finshes, trendy designs and quality modules at affordable
          prices
        </span>
      </div>

      {openDialog ? (
        <div className="alertdialog">
          <div className="alertdialog_container">
            <GetQuote />
            <button
              onClick={() => setOpenDialog(false)}
              className="taglinespan3_alertdialog_cls_button"
            >
              <CancelIcon sx={{ color: "rgb(241, 112, 112)", fontSize: 30 }} />
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
      <swiper-container
        ref={swiperElRef}
        init="false"
        slides-per-view={useIsMobile() ? "1" : "3"}
        navigation="true"
        pagination="true"
        class="my_swiper"
        spaceBetween="40"
      >
        {/* {mySlides.map((slide) => {
          console.log("slide title: " + slide.title);
          <swiper-slide>
            <SlideCard
              image={slide.img}
              title={slide.title}
              subtitle={slide.subtitle}
            />
          </swiper-slide>;
        })} */}
        {mySlides2}

        {/* <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide> */}
      </swiper-container>
    </div>
  );
};

export default SlidingPanel;
