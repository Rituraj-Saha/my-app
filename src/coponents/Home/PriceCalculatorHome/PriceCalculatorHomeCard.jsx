import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Scale } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectTypeOfSpace } from "../../../features/priceCalState/typeOfSpaceSlice";
import useIsMobile from "../../../util/useIsMobile";

const PriceCalculatorHomeCard = (props) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(selectTypeOfSpace(props.title));
    return props.handleOpenDialog();
  };
  const isMobile = useIsMobile();
  return (
    <Card
      variant="outlined"
      sx={{
        width: () => {
          return isMobile ? "90%" : "25%";
        },
        height: "300px",
      }}
    >
      <div
        className="parent"
        style={{
          display: "flex",
          flex: "1",
          flexDirection: "column",
          height: "100%",
          padding: "10px",
          gap: "10px",
        }}
      >
        <div
          className="top"
          style={{
            display: "flex",
            width: "100%",
            height: "20%",
            padding: "20px",
          }}
        >
          <div
            className="top-left"
            style={{
              width: "70%",
              display: "flex",
            }}
          >
            <img src={props.image} style={{ objectFit: "contain" }}></img>
          </div>

          <div
            className="top-right"
            style={{
              width: "30%",
              display: "flex",
            }}
          >
            <img src={props.imageright} style={{ objectFit: "contain" }}></img>
          </div>
        </div>
        <span
          style={{
            textAlign: "start",
            fontSize: "25px",
            fontWeight: "bold",
            color: "#3B3B3B",
          }}
        >
          {props.title}
        </span>
        <span style={{ textAlign: "start", fontSize: "18px" }}>
          {props.subTitle}
        </span>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "var(--buttonBack)",
            ":hover": {
              bgcolor: "var(--buttonBack)", // theme.palette.primary.main
            },
          }}
          onClick={handleClick}
        >
          {" "}
          Get Price
        </Button>
      </div>
    </Card>
  );
};

export default PriceCalculatorHomeCard;
