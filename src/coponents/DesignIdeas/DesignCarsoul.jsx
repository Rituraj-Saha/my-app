import { Padding } from "@mui/icons-material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const DesignCarsoul = (props) => {
  const data = props.data;
  const carsolItemStyle = {
    display: "flex",
    height: "80vh",
    // border: "1px solid black",
    marginLeft: "10px",
    flexDirection: "column",
    flexWrap: "wrap",
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  console.log("kitchen data " + JSON.stringify(data));

  return (
    <div
      style={{
        width: "95%",
        height: "80vh",
        // border: "1px solid black",
      }}
    >
      <Carousel
        responsive={responsive}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
      >
        {data.imageUrls.map((item) => {
          return (
            <div style={carsolItemStyle}>
              <img
                src={"https://drive.google.com/thumbnail?id=" + item.urlId}
                alt=""
                style={{
                  width: "100%",
                  flex: ".7",
                  objectFit: "fill",
                  maxHeight: "100%",
                  minHeight: "0",
                  draggable: "false",
                  pointerEvents: "none",
                  padding: "5px",
                }}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default DesignCarsoul;
