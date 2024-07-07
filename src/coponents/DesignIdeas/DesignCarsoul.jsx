import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const DesignCarsoul = (props) => {
  const data = props.data;
  const carsolItemStyle = {
    height: "80vh",
    border: "1px solid black",
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
        width: "100%",
        height: "80vh",
        border: "1px solid black",
      }}
    >
      <Carousel
        responsive={responsive}
        showDots={true}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={100}
      >
        {data.imageUrls.map((item) => {
          return (
            <div style={carsolItemStyle}>
              <img
                src={"https://drive.google.com/thumbnail?id=" + item.urlId}
                alt=""
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default DesignCarsoul;
