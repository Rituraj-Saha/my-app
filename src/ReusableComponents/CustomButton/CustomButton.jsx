import React from "react";
import "./CustomButton.css";

const CustomButton = (props) => {
  const { handleClick, title } = props;
  return (
    // <div
    //   style={{
    //     backgroundColor: "#f17070",
    //     borderRadius: "15px",
    //     paddingLeft: "15px",
    //     paddingRight: "15px",
    //   }}
    // >
    //   <Button
    //     variant="contained"
    //     onClick={handleClick()}
    //     sx={{
    //       borderRadius: "15px",
    //       zIndex: "9",
    //     }}
    //     className="btn-shine"
    //   >
    //     {title}
    //   </Button>
    // </div>
    <div className="get-quote" onClick={handleClick}>
      <div className="btn-shine"> {title}</div>
    </div>
  );
};

export default CustomButton;
