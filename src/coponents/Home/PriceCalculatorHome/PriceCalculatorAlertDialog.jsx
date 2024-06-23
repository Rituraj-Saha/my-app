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

const PriceCalculatorAlertDialog = (props) => {
  const areaRef = useRef("");
  const ksideARef = useRef("");
  const ksideBRef = useRef("");
  const ksideCRef = useRef("");

  const stage = {
    display: "flex",
    border: "1px solid black",
    flex: ".3",
    height: "100%",
    flexWrap: "wrap",
    overflow: "auto",
  };
  const selectordivStyle = {
    display: "flex",
    minWidth: "80%",
    border: "1px solid black",
    paddingTop: "10px",
    paddingLeft: "10px",
    paddingBottom: "10px",
    alignItems: "center",
    gap: "10px",
    flexWrap: "wrap",
  };
  const outerCircle = {
    display: "flex",
    width: "30px",
    height: "30px",
    border: "1px solid black",
    borderRadius: "100%",
    alignItems: "center",
    justifyContent: "center",
  };
  const innerCircle = {
    width: "20px",
    height: "20px",
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

  function selctorIndividualItem(itemList, title, usedFor) {
    let itemListObjs = [];
    for (let i of itemList) {
      itemListObjs.push({
        title: i,
        selcted: false,
      });
    }

    const handleClick = (index, usedFor) => {
      if (usedFor == "FOR BHK") setSelectedItemsForBHK(index);
      if (usedFor == "FOR PACKAGE") setSelectedItemsForPackage(index);
      if (usedFor == "FOR Kitchen") {
        // console.log("used for kitchen entered");
        setSelectedKitchenType(index);
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
          console.log("Before: " + (usedFor == "FOR Kitchen") + " " + usedFor);
          return usedFor != "FOR Kitchen" ? (
            <div
              key={index}
              style={selectordivStyle}
              onClick={() => handleClick(item.title, usedFor)}
            >
              {console.log("after: " + usedFor)}
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
            <div>
              <div
                key={index}
                style={selectordivStyle}
                onClick={() => handleClick(item.title, usedFor)}
              >
                {console.log("executed")}
                <div className="leftOuterSelector">
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
        return <span>Wardrobe</span>;
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
    }

    return false;
  };

  return (
    <div
      className="priceCalculatorAlertDialog"
      style={{
        position: "absolute",
        width: "90vw",
        height: "70vh",
        background: "rgba(162, 162, 162)",
        left: "5%",
        display: "flex",
        flex: "1",
        zIndex: "9",
      }}
    >
      <div
        className="buttonClose"
        style={{
          display: "flex",
          position: "absolute",
          left: "-1%",
          top: "-2%",
          zIndex: "99",
          background: "var(--buttonBack)",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
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
          gap: "10px",
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
