import { React, useRef, useEffect, useState } from "react";
import { register } from "swiper/element/bundle";
import PriceEstematorCard from "./PriceEstematorCard";
import "./pricecalspacetype.css";
import SampleImage from "../../res/interior_home.jpg";
register();
const PriceCalSpaceType = () => {
  const swiperElRef = useRef(null);
  const mySlides2 = [
    <swiper-slide>
      <PriceEstematorCard
        image={SampleImage}
        spaceType="Full Home"
        spaceDesc="Get an approximate Costing for your full home design"
        usedFor="priceEsetematorType"
      />
    </swiper-slide>,
    <swiper-slide>
      <PriceEstematorCard
        image={SampleImage}
        spaceType="Moduler Kitchen"
        spaceDesc="Get an approximate Costing for your moduler kitchen"
        usedFor="priceEsetematorType"
      />
    </swiper-slide>,
    <swiper-slide>
      <PriceEstematorCard
        image={SampleImage}
        spaceType="Wardrobe"
        spaceDesc="Get an approximate Costing for your custom wardrobe"
        usedFor="priceEsetematorType"
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
  return (
    <div className="priceCalSpaceType-parent">
      <swiper-container
        ref={swiperElRef}
        init="false"
        slides-per-view="2"
        navigation="true"
        pagination="true"
        class="my_swiper my-price-cal-swiper"
        spaceBetween="50"
      >
        {mySlides2}
      </swiper-container>
    </div>
  );
};

export default PriceCalSpaceType;
