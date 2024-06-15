import { React, useRef, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./DesignIdea.css";
import { Element } from "react-scroll";

import sampleImg from "../../res/Indian_bedroom.jpg";

const DesignIdea = () => {
  const swiperElRef = useRef(null);

  const allDesignOptions = [
    {
      type: "LivingRoom",
      title: "Living Room",
      imageUrls: [
        "1vIHRCcPUZ1P--9OUDEFinNny8pTxvfQq",
        "1vIHRCcPUZ1P--9OUDEFinNny8pTxvfQq",
        "14AeZJgtwUagleUXCpdhy5vfHxQ-fpEkH",
      ],
    },
    {
      type: "Wardrobe",
      title: "Wardrobe Design",
      imageUrls: [
        "1M5xRjaJfrup3breSq_-8EdH64dt9twlQ",
        "1nWy4Gn-eh9ntOWCRDHVdtgE6pfJVU-zd",
        "14AeZJgtwUagleUXCpdhy5vfHxQ-fpEkH",
      ],
    },
    {
      type: "End_to_End",
      title: "End to End Designs",
      imageUrls: [
        "1M5xRjaJfrup3breSq_-8EdH64dt9twlQ",
        "1nWy4Gn-eh9ntOWCRDHVdtgE6pfJVU-zd",
        "14AeZJgtwUagleUXCpdhy5vfHxQ-fpEkH",
      ],
    },
    {
      type: "Kitchen",
      title: "Kitchen Design",
      imageUrls: [
        "1M5xRjaJfrup3breSq_-8EdH64dt9twlQ",
        "1nWy4Gn-eh9ntOWCRDHVdtgE6pfJVU-zd",
        "14AeZJgtwUagleUXCpdhy5vfHxQ-fpEkH",
      ],
    },
  ];

  return (
    <Element name="design-ideas" className="design-ideas" id="design-ideas">
      <div
        className="deignIdeaParent"
        style={{
          flex: 1,
          flexDirection: "column",
          display: "flex",
          alignItems: "start",
          paddingLeft: "5%",
        }}
      >
        {allDesignOptions.map((item) => {
          return (
            <div className="designIdeaPanel">
              <span style={{ fontSize: "35px", fontWeight: "600" }}>
                {item.title}
              </span>

              <div
                className="spaceForSwiper"
                style={{
                  display: "flex",
                  width: "90%",
                  height: "250px",
                  border: "1px solid black",
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </Element>
  );
};

export default DesignIdea;
