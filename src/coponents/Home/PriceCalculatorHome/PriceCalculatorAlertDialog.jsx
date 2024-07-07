import { React, useState, useRef } from "react";
import ContactForm from "../../ContactUs/ContactForm";
import CalcuteSvgPc from "../../../res/price_calculator_svgs/calculator-svg-pc.svg";
import { Close } from "@mui/icons-material";
import { TextField } from "@mui/material";
import swal from "sweetalert";
import { useSelector, useDispatch } from "react-redux";
import { selectedBHK } from "../../../features/priceCalState/stage2Store/bhkTypeSlice";
import Lshaped from "../../../res/Lshaped.png";
import Parallel from "../../../res/parallel.png";
import Straight from "../../../res/streight.png";
import Ushaped from "../../../res/ushaped.png";
import LshapedMes from "../../../res/Lshapedmes.png";
import ParallelMes from "../../../res/parelledMes.png";
import StraightMes from "../../../res/streightMes.png";
import UshapedMes from "../../../res/ushapedmes.png";
import { current } from "@reduxjs/toolkit";
import useIsMobile from "../../../util/useIsMobile";

const PriceCalculatorAlertDialog = (props) => {
  const areaRef = useRef("");
  const ksideARef = useRef("");
  const ksideBRef = useRef("");
  const ksideCRef = useRef("");
  const wHeight = useRef("");
  const wWidth = useRef("");
  const isMobile = useIsMobile();
  console.log("mobile check alert: " + isMobile);

  const stage = {
    display: "flex",
    flex: ".4",
    height: "100%",
    flexWrap: "wrap",
    overflow: "auto",
    background: "rgba(43, 42, 42, 0.2)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    fontSize: "10px",
  };
  const selectordivStyle = {
    display: "flex",
    minWidth: "80%",
    border: "1px solid black",
    paddingTop: "5px",
    paddingLeft: "5px",
    paddingBottom: "5px",
    alignItems: "center",
    gap: "5px",
    flexWrap: "wrap",
    fontSize: "10px",
  };
  const outerCircle = {
    display: "flex",
    width: "20px",
    height: "20px",
    border: "1px solid black",
    borderRadius: "100%",
    alignItems: "center",
    justifyContent: "center",
  };
  const innerCircle = {
    width: "10px",
    height: "10px",
    borderRadius: "100%",
    backgroundColor: "var(--buttonBack)",
  };

  const dispatch = useDispatch();

  const typeOfSpaceSlected = useSelector(
    (state) => state.typeOfSpaceReduce.typeOfSpace
  );
  const [selectedItemsForBHK, setSelectedItemsForBHK] = useState("1 BHK");
  const [selectedItemsForPackage, setSelectedItemsForPackage] =
    useState("Standard");
  const [selectedKitchenType, setSelectedKitchenType] = useState("L Shaped");
  const [selecteWardrobe, setSelectedWardrobe] = useState("Sliding");

  function selctorIndividualItem(itemList, title, usedFor) {
    let itemListObjs = [];
    for (let i of itemList) {
      itemListObjs.push({
        title: i,
        selcted: false,
      });
    }

    const handleClick = (index, usedFor) => {
      console.log("used fr: " + usedFor);
      if (usedFor == "FOR BHK") setSelectedItemsForBHK(index);
      if (usedFor == "FOR PACKAGE") setSelectedItemsForPackage(index);
      if (usedFor == "FOR Kitchen") setSelectedKitchenType(index);

      if (usedFor == "FOR Wardrobe") {
        setSelectedWardrobe(index);
      }
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: "20px",
          padding: "5px",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <span>{title}</span>
        {itemListObjs.map((item, index) => {
          return usedFor != "FOR Kitchen" ? (
            usedFor == "FOR BHK" ? (
              <div
                key={index}
                style={selectordivStyle}
                onClick={() => handleClick(item.title, usedFor)}
              >
                <div style={outerCircle}>
                  {usedFor == "FOR BHK" && selectedItemsForBHK == item.title ? (
                    <div style={innerCircle}></div>
                  ) : <></> &&
                    usedFor == "FOR PACKAGE" &&
                    selectedItemsForPackage == item.title ? (
                    <div style={innerCircle}></div>
                  ) : (
                    <></>
                  )}
                </div>
                <span>{item.title}</span>
              </div>
            ) : (
              <div
                key={index}
                style={selectordivStyle}
                onClick={() => handleClick(item.title, usedFor)}
              >
                <div style={outerCircle}>
                  {usedFor == "FOR Wardrobe" &&
                  selecteWardrobe == item.title ? (
                    <div style={innerCircle}></div>
                  ) : <></> &&
                    usedFor == "FOR PACKAGE" &&
                    selectedItemsForPackage == item.title ? (
                    <div style={innerCircle}></div>
                  ) : (
                    <></>
                  )}
                </div>
                <span>{item.title}</span>
              </div>
            )
          ) : (
            <div>
              <div
                key={index}
                style={selectordivStyle}
                onClick={() => handleClick(item.title, usedFor)}
              >
                {console.log("executed")}
                <div
                  className="leftOuterSelector"
                  style={{ position: "absolute" }}
                >
                  <div style={outerCircle}>
                    {usedFor == "FOR Kitchen" &&
                    selectedKitchenType == item.title ? (
                      <div style={innerCircle}></div>
                    ) : <></> &&
                      usedFor == "FOR PACKAGE" &&
                      selectedItemsForPackage == item.title ? (
                      <div style={innerCircle}></div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div
                  className="rightContent"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <img
                    src={
                      item.title == "Parallel"
                        ? Parallel
                        : true && item.title == "L Shaped"
                        ? Lshaped
                        : true && item.title == "Straight"
                        ? Straight
                        : true && item.title == "U Shaped"
                        ? Ushaped
                        : true
                    }
                    alt=""
                    style={{ width: "95%", height: "50%" }}
                  />
                  <span>{item.title}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  function stageContainer(type) {
    if (type == 1) {
      if (typeOfSpaceSlected == "Full Home") {
        return (
          <>
            {selctorIndividualItem(
              ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "More than 4 BHK"],
              "Select Your BHK Type",
              "FOR BHK"
            )}
          </>
        );
      }
      if (typeOfSpaceSlected == "Modular Kitchen") {
        return (
          <>
            {selctorIndividualItem(
              ["L Shaped", "Straight", "U Shaped", "Parallel"],
              "Select Your Shape Of Kitchen",
              "FOR Kitchen"
            )}
          </>
        );
      }
      if (typeOfSpaceSlected == "Wardrobe") {
        return (
          <>
            {selctorIndividualItem(
              ["Sliding", "Swing", "Mixed"],
              "Select Your Wardrobe type",
              "FOR Wardrobe"
            )}
          </>
        );
      }
    }
    if (type == 2) {
      if (typeOfSpaceSlected == "Full Home") {
        return (
          <div
            className="carpetAreaInput"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <span>Please Enter Your Carpet Area</span>
            <TextField
              id="outlined-basic"
              label="Carpet Area"
              variant="outlined"
              sx={{
                width: "80%",
                borderRadius: 1,
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "rgba(255,255,255,.2)",
                  },
                },
              }}
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              InputProps={{ style: { color: "#fff" } }}
              inputRef={areaRef}
            />
          </div>
        );
      }
      if (typeOfSpaceSlected == "Modular Kitchen") {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <span>Please Enter Your Space Length</span>
            <img
              src={
                selectedKitchenType == "Parallel"
                  ? ParallelMes
                  : true && selectedKitchenType == "L Shaped"
                  ? LshapedMes
                  : true && selectedKitchenType == "Straight"
                  ? StraightMes
                  : true && selectedKitchenType == "U Shaped"
                  ? UshapedMes
                  : true
              }
              alt=""
              style={{ width: "98%", height: "40%" }}
            />

            <TextField
              id="outlined-basic"
              label="Side A"
              variant="outlined"
              sx={{
                width: "80%",
                borderRadius: 1,
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "rgba(255,255,255,.2)",
                  },
                },
              }}
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              InputProps={{ style: { color: "#fff" } }}
              inputRef={ksideARef}
            />
            {selectedKitchenType != "Straight" ? (
              <TextField
                id="outlined-basic"
                label="Side B"
                variant="outlined"
                sx={{
                  width: "80%",
                  borderRadius: 1,
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "rgba(255,255,255,.2)",
                    },
                  },
                }}
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
                InputProps={{ style: { color: "#fff" } }}
                inputRef={ksideBRef}
              />
            ) : (
              <></>
            )}

            {selectedKitchenType == "U Shaped" ? (
              <TextField
                id="outlined-basic"
                label="Side C"
                variant="outlined"
                sx={{
                  width: "80%",
                  borderRadius: 1,
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "rgba(255,255,255,.2)",
                    },
                  },
                }}
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
                InputProps={{ style: { color: "#fff" } }}
                inputRef={ksideCRef}
              />
            ) : (
              <></>
            )}
          </div>
        );
      }
      if (typeOfSpaceSlected == "Wardrobe") {
        return (
          <div
            className="carpetAreaInput"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <span style={{ textAlign: "left", paddingLeft: "20px" }}>
              Please Enter Your Wardrobe height
            </span>
            <TextField
              id="outlined-basic"
              label="Wardrobe Height"
              variant="outlined"
              sx={{
                width: "80%",
                borderRadius: 1,
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "rgba(255,255,255,.2)",
                  },
                },
              }}
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              InputProps={{ style: { color: "#fff" } }}
              inputRef={wHeight}
            />
            <span style={{ textAlign: "left", paddingLeft: "20px" }}>
              Please Enter Your Wardrobe width
            </span>
            <TextField
              id="outlined-basic"
              label="Wardrobe Width"
              variant="outlined"
              sx={{
                width: "80%",
                borderRadius: 1,
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "rgba(255,255,255,.2)",
                  },
                },
              }}
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              InputProps={{ style: { color: "#fff" } }}
              inputRef={wWidth}
            />
          </div>
        );
      }
    }
    if (type == 3) {
      return (
        <>
          {selctorIndividualItem(
            ["Standard", "Premium", "Luxury"],
            "Select Your Package",
            "FOR PACKAGE"
          )}
        </>
      );
    }
  }

  const calcuteAmount = () => {
    if (typeOfSpaceSlected == "Full Home") {
      let pricePerSqFt = 0;
      if (selectedItemsForPackage == "Standard") {
        pricePerSqFt = 1500;
      } else if (selectedItemsForPackage == "Premium") {
        pricePerSqFt = 2000;
      } else if (selectedItemsForPackage == "Luxury") {
        pricePerSqFt = 3000;
      }
      console.log("area is:" + areaRef.current.value);
      if (areaRef.current.value == "") {
        swal("Invalid input", "Please Enter Carpet Area", "warning");
        return false;
      } else {
        const price = parseInt(areaRef.current.value) * pricePerSqFt;

        swal(
          "Approximate quote for your " +
            selectedItemsForBHK +
            " is RS: " +
            price +
            " only",
          "",
          "success"
        );
        return true;
      }
    } else if (typeOfSpaceSlected == "Modular Kitchen") {
      let pricePerSqFt = 0;
      if (selectedItemsForPackage == "Standard") {
        pricePerSqFt = 1900;
      } else if (selectedItemsForPackage == "Premium") {
        pricePerSqFt = 2400;
      } else if (selectedItemsForPackage == "Luxury") {
        pricePerSqFt = 3000;
      }
      if (ksideARef.current.value == "") {
        swal("Invalid input", "Please Enter Side A Length", "warning");
        return false;
      } else if (
        selectedKitchenType != "Straight" &&
        ksideBRef.current.value == ""
      ) {
        swal("Invalid input", "Please Enter Side B Length", "warning");
        return false;
      } else if (
        selectedKitchenType == "U Shaped" &&
        ksideCRef.current.value == ""
      ) {
        swal("Invalid input", "Please Enter Side C Length", "warning");
        return false;
      } else {
        // const price = parseInt(areaRef.current.value) * pricePerSqFt;
        // console.log(
        //   "length: " +
        //     parseInt(ksideARef?.current.value) +
        //     "" +
        //     parseInt(ksideBRef?.current.value) +
        //     "" +
        //     parseInt(ksideCRef?.current.value)
        // );
        const aSide =
          ksideARef?.current != null ? parseInt(ksideARef?.current.value) : 0;
        const bSide =
          ksideBRef?.current != null ? parseInt(ksideBRef?.current.value) : 0;
        const cSide =
          ksideCRef?.current != null ? parseInt(ksideCRef?.current.value) : 0;
        const lowerCab = (aSide + bSide + cSide) * 3;
        const upperCab = (aSide + bSide + cSide) * 4;
        const price = parseInt(lowerCab + upperCab) * pricePerSqFt;
        swal(
          "Approximate quote for your " +
            selectedKitchenType +
            " Kitchen with" +
            selectedItemsForPackage +
            "package is RS: " +
            price +
            " only",
          "",
          "success"
        );
        return true;
      }
    } else {
      let pricePerSqFt = 0;
      if (selectedItemsForPackage == "Standard") {
        pricePerSqFt = 1650;
      } else if (selectedItemsForPackage == "Premium") {
        pricePerSqFt = 1900;
      } else if (selectedItemsForPackage == "Luxury") {
        pricePerSqFt = 2700;
      }
      // console.log("area is:" + areaRef.current.value);
      if (wHeight.current.value == "") {
        swal("Invalid input", "Please Enter correct height", "warning");
        return false;
      } else if (wWidth.current.value == "") {
        swal("Invalid input", "Please Enter correct width", "warning");
        return false;
      } else {
        const area =
          parseInt(wHeight.current.value) * parseInt(wWidth.current.value);
        const price = area * pricePerSqFt;

        swal(
          "Approximate quote for your " +
            selecteWardrobe +
            " is RS: " +
            price +
            " only",
          "",
          "success"
        );
        return true;
      }
    }
    return false;
  };

  return (
    <div
      className="priceCalculatorAlertDialog"
      style={
        useIsMobile()
          ? {
              position: "absolute",
              width: "94vw",
              height: "70vh",
              background: "#E7E7E7",
              display: "flex",
              flex: "1",
              zIndex: "9",
              flexDirection: isMobile ? "column" : "row",
              overflow: "auto",
              marginLeft: "3%",
            }
          : {
              position: "absolute",
              width: "80vw",
              height: "70vh",
              background: "#E7E7E7",
              display: "flex",
              flex: "1",
              zIndex: "9",
              flexDirection: isMobile ? "column" : "row",
              overflow: "auto",
            }
      }
    >
      <div
        className="buttonClose"
        style={{
          display: "flex",
          position: "absolute",
          left: "95%",
          top: "1%",
          zIndex: "1",
          background: "var(--buttonBack)",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onClick={props.handleCloseClick}
      >
        <Close sx={{ color: "white" }} />
      </div>
      <div
        className="priceCalQuestionArea"
        style={{
          display: "flex",
          flex: ".7",
          alignItems: "start",
          padding: "5px",
          justifyContent: "center",
          gap: "2px",
          width: "100%",
        }}
      >
        <div style={stage}>{stageContainer(1)}</div>
        <div style={stage}>{stageContainer(2)}</div>
        <div style={stage}>{stageContainer(3)}</div>
      </div>
      <div
        className="contactFormPrice"
        style={{
          display: "flex",
          flex: ".3",
          background: "rgb(1,32,40)",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "10px",
          paddingTop: "10px",
          background:
            "linear-gradient(283deg, rgba(1,32,40,1) 0%, rgba(49,47,51,1) 18%, rgba(38,3,41,1) 48%, rgba(27,20,31,0.9136904761904762) 75%, rgba(34,35,40,1) 99%)",
        }}
      >
        <ContactForm usedFor="priceCalculator" calcutedAmount={calcuteAmount} />
      </div>
    </div>
  );
};

export default PriceCalculatorAlertDialog;
