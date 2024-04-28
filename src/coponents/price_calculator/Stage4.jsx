import React from "react";
import "./Stage4.css";
import { setPkg } from "../../features/priceCalState/stage4store/PackageSlice";
import { useSelector, useDispatch } from "react-redux";
const Stage4 = () => {
  const cuurentSelectedPkg = useSelector(
    (state) => state.pkgSlectorReduce.pkgSelector
  );
  const dispactchPkgSelect = useDispatch();
  function handlePkgSelect(pkg) {
    dispactchPkgSelect(setPkg(pkg));
  }
  return (
    <div className="package-selector-parent">
      <span>Select your desired Package</span>
      <div
        className="package-chip"
        onClick={() => {
          handlePkgSelect("Standard");
        }}
      >
        <div className="pkg-selector">
          <div
            className={
              cuurentSelectedPkg == "Standard" ? "pkg-inner-circle" : ""
            }
          ></div>
        </div>
        <span className="pkg-title">Standard</span>
        <span className="pkg-desc">Best fit for daily usage</span>
      </div>
      <div
        className="package-chip"
        onClick={() => {
          handlePkgSelect("Premium");
        }}
      >
        <div className="pkg-selector">
          <div
            className={
              cuurentSelectedPkg == "Premium" ? "pkg-inner-circle" : ""
            }
          ></div>
        </div>
        <span className="pkg-title">Premium</span>
        <span className="pkg-desc">Give your interior a premium look</span>
      </div>
      <div
        className="package-chip"
        onClick={() => {
          handlePkgSelect("Lauxary");
        }}
      >
        <div className="pkg-selector">
          <div
            className={
              cuurentSelectedPkg == "Lauxary" ? "pkg-inner-circle" : ""
            }
          ></div>
        </div>
        <span className="pkg-title">Lauxary</span>
        <span className="pkg-desc">Add a touch of Lauxary</span>
      </div>
    </div>
  );
};

export default Stage4;
