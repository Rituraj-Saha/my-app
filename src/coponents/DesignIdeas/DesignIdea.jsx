import { React, useRef, useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./DesignIdea.css";
import { Element } from "react-scroll";

import sampleImg from "../../res/Indian_bedroom.jpg";
import DesignCarsoul from "./DesignCarsoul";
import { Divider } from "@mui/material";
import { motion, useScroll } from "framer-motion";
import useIsMobile from "../../util/useIsMobile";
import swal from "@sweetalert/with-react";
import ContactForm from "../ContactUs/ContactForm";
const DesignIdea = () => {
  const swiperElRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const LivingRoomDesignOptionData = [
    {
      type: "LivingRoom",
      title: "Living Room",
      imageUrls: [
        {
          packgeShow: true,
          package: "Basic",
          urlId: "1fqP0hkk6VIOrk1WpvkBb6fuuO763BxQy",
        },
        {
          packgeShow: true,
          package: "Basic",
          urlId: "1dKccDovaO3Ln6BArBq0F4fPnk29AXPnC",
        },
        {
          packgeShow: true,
          package: "Basic",
          urlId: "1h7w48Jnpy6ypGw2ytF8oX-RyTvZwELFZ",
        },
        {
          packgeShow: true,
          package: "Basic",
          urlId: "1hmI3Ab3HWAx9Q_IxbQsSm_uZKk1XLQHC",
        },
        {
          packgeShow: true,
          package: "Basic",
          urlId: "1VLlsSQ2ZSpdcpz65rn613YLSe9juOujH",
        },
        {
          packgeShow: true,
          package: "Basic",
          urlId: "1IBy0sp9v7Bd3CmgWNoLPixBtM0WzWoAh",
        },
        {
          packgeShow: true,
          package: "Basic",
          urlId: "1PEtAbRWMFOk7iCMvIQGPVD-tnTYhbZ7m",
        },
        {
          packgeShow: true,
          package: "Basic",
          urlId: "1rG4MZvn_QPQDN7KB3V9OWnyYqHc1f4bD",
        },
        {
          packgeShow: true,
          package: "Basic",
          urlId: "1Sy9rLCwg8ETlv5fITYM60ObWDRCt7vLk",
        },
        {
          packgeShow: true,
          package: "Basic",
          urlId: "116NmbeMQ3QhMR3z_dZSC4ihG53sMR5Ok",
        },
        {
          packgeShow: true,
          package: "Basic",
          urlId: "1cTnHVrAR6cUHjv1aE75IuI5hIyh66NpG",
        },
        {
          packgeShow: true,
          package: "Basic",
          urlId: "1B3FEZAUolKbeozHQ2l5-KTsnPer3rDny",
        },
        {
          packgeShow: true,
          package: "Basic",
          urlId: "1srPGbmwM6G_5ybeErTx01sXgzNaI6KzE",
        },
        {
          packgeShow: true,
          package: "Basic",
          urlId: "1qIyOkpjrXbZcJF3kPvOTTMCFILCHGGkN",
        },
        {
          packgeShow: true,
          package: "Basic",
          urlId: "1iXY6KbE5BTflFJrb8YSyDXrR53tscK-3",
        },
        {
          packgeShow: true,
          package: "Basic",
          urlId: "1ShmkzsVamLyyuaxrFJT2HTGAZ8BWAmJg",
        },
        {
          packgeShow: true,
          package: "Basic",
          urlId: "1OPabCsIRSW48xD1RkC_G_vVH26PqUgrm",
        },
      ],
    },
  ];

  const KitchenDesignOptionData = {
    type: "Kitchen",
    title: "Modular Kitchen",
    imageUrls: [
      {
        packgeShow: true,
        package: "Basic",
        urlId: "1rSyKW_KH5eIMUfFi8ruOU3HfnNLauDHe",
      },
      {
        packgeShow: true,
        package: "Basic",
        urlId: "1dq1gJdDf4G8YWyvX0ANQ2KR-oR0zXqVv",
      },
      {
        packgeShow: true,
        package: "Basic",
        urlId: "1bBDinxS9lG7Uy4IlriM06YNlbuVrYxZT",
      },
      {
        packgeShow: true,
        package: "Basic",
        urlId: "1ZuOdK44K-myDyfewZg2Hn3RXao98Ojei",
      },
      {
        packgeShow: true,
        package: "Basic",
        urlId: "1QMLjG7spXkfLBUCMNsSzOxsruw3dH-wU",
      },
      {
        packgeShow: true,
        package: "Basic",
        urlId: "1A0YBp9yQhXrXwNCY0JD-H29S4d6E8CSR",
      },
      {
        packgeShow: true,
        package: "Basic",
        urlId: "16PFRNOQxmkGEhai_k8TUCyrrYYByhHqJ",
      },
      {
        packgeShow: true,
        package: "Basic",
        urlId: "15y5lPl78FcABOHjyHOxlfO_WdaOoW2V8",
      },
      {
        packgeShow: true,
        package: "Basic",
        urlId: "1x1qVndmKTz1BseuN05U0cUbhGijdbkPk",
      },
      {
        packgeShow: true,
        package: "Basic",
        urlId: "1mJf5iN-k_42AfzlZ7p2ZSGBpCWHGvdaF",
      },
      {
        packgeShow: true,
        package: "Basic",
        urlId: "1lsZXItOnQtZJWnC0FCZ0xzw2X0yEm6ue",
      },
      {
        packgeShow: true,
        package: "Basic",
        urlId: "1iVVN5A97GyCx3jViR3BuZ_qZHnjxQpL9",
      },
      {
        packgeShow: true,
        package: "Basic",
        urlId: "1Vb0Fnx_v_jag8-AWwY_xY3XnEV6uuCI-",
      },
      {
        packgeShow: true,
        package: "Basic",
        urlId: "1I1c2mpwwVJGUxuFoc18rKpbwuVpUpA_O",
      },
      {
        packgeShow: true,
        package: "Basic",
        urlId: "1GybTwmoXKdDUMJ8kZ3u3NPahFOuKpO_m",
      },
    ],
  };

  const BedroomDesignOptionsData = {
    type: "Bedroom",
    title: "Bedroom Designs",
    imageUrls: [
      {
        packgeShow: true,
        package: "Basic",
        urlId: "1z22aZuSFxzE7G8CznysfJ6AP1_krfIJO",
      },
      {
        packgeShow: true,
        package: "Basic",
        urlId: "1wwM9Re_H4CpLlm9kMC6aD4uoP5QWg0N6",
      },
      {
        packgeShow: true,
        package: "Basic",
        urlId: "1wtlQwK7FiZoEY353DTVLacWZ1RgR4cQq",
      },
      {
        packgeShow: true,
        package: "Basic",
        urlId: "1r_XbZFfkTxZoDVhM7qk2gTwhF0r2U1QT",
      },
      {
        packgeShow: true,
        package: "Basic",
        urlId: "1ktV5GcOIvCoZJt9z-Wuj6owPsnwD_pAu",
      },
      {
        packgeShow: true,
        package: "Basic",
        urlId: "1bPEGeGECF_AloDT-30v09JBF_pNawdDe",
      },
      {
        packgeShow: true,
        package: "Basic",
        urlId: "1I2BwDFG6IBsjccLgClQRpHDELcCCoJqg",
      },
      {
        packgeShow: true,
        package: "Basic",
        urlId: "1HB4tNu2fyJxez_sT8fLZ1g20934H9m5_",
      },
      {
        packgeShow: true,
        package: "Basic",
        urlId: "1DNBmhRByGauF-9iOhaP25SHDbKg6VaVy",
      },
      {
        packgeShow: true,
        package: "Basic",
        urlId: "1BgogO7MsYcxHvzh79CCzSorZeIMiVMfn",
      },
    ],
  };
  const checkMobile = useIsMobile() ? "100%" : "30%";

  const alerWhenClickImage = () => {
    return swal({
      // content: alerWhenClickImage(
      //   "https://drive.google.com/thumbnail?id=" +
      //     mapImages.urlId
      // ),
      content: (
        <div
          style={{
            background: "rgba(37, 36, 36, 0.9)",
            padding: "10px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
          }}
        >
          <ContactForm />
        </div>
      ),
      buttons: false,
    });
  };
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
        {LivingRoomDesignOptionData.map((item) => {
          return (
            <div className="designIdeaPanel">
              <span
                style={{ fontSize: "35px", fontWeight: "600", color: "white" }}
              >
                {item.title}
              </span>
              <div
                style={{
                  width: "25%",
                  height: "1px",
                  background: "white",
                  marginBottom: "15px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  width: "95%",
                  // border: "1px solid black",
                  flexWrap: "wrap",
                  gap: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.imageUrls.map((mapImages) => {
                  return (
                    <motion.div
                      initial={{ opacity: 0, x: -200 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      style={{
                        display: "flex",
                        width: checkMobile,
                        flexWrap: "wrap",
                        boxShadow: "5px 5px 5px 10px rgb(89,82,82,.5)",
                        gap: "15vh",
                      }}
                    >
                      {/* for future integration as badge of package */}
                      {/* <div
                        style={{
                          position: "absolute",
                          height: "50px",
                          width: "50px",
                          zIndex: "5",
                        }}
                      >
                        {mapImages.packgeShow ? (
                          <div style={{ border: "1px solid black" }}>
                            <span>{mapImages.package}</span>
                          </div>
                        ) : (
                          <></>
                        )}
                      </div> */}
                      <img
                        src={
                          "https://drive.google.com/thumbnail?id=" +
                          mapImages.urlId
                        }
                        alt="image"
                        style={{
                          objectFit: "fill",
                          borderRadius: "5px",
                          maxHeight: "250px",
                          width: "100%",
                          cursor: "pointer",
                        }}
                        onClick={alerWhenClickImage}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <span
          style={{
            fontSize: "35px",
            fontWeight: "600",
            color: "white",
            marginBottom: "10px",
            marginTop: "25px",
          }}
        >
          {KitchenDesignOptionData.title}
        </span>
        <div
          style={{
            width: "25%",
            height: "1px",
            background: "white",
            marginBottom: "15px",
          }}
        />
        <DesignCarsoul
          data={KitchenDesignOptionData}
          handleClick={alerWhenClickImage}
        />
        {/* Bedroom */}
        <div className="designIdeaPanel">
          <span style={{ fontSize: "35px", fontWeight: "600", color: "white" }}>
            {BedroomDesignOptionsData.title}
          </span>
          <div
            style={{
              width: "25%",
              height: "1px",
              background: "white",
              marginBottom: "15px",
            }}
          />
          <div
            style={{
              display: "flex",
              width: "95%",
              // border: "1px solid black",
              flexWrap: "wrap",
              gap: "10px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {BedroomDesignOptionsData.imageUrls.map((mapImages) => {
              return (
                <motion.div
                  initial={{ opacity: 0, x: -200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  style={{
                    display: "flex",
                    width: checkMobile,
                    flexWrap: "wrap",
                    boxShadow: "5px 5px 5px 10px rgb(89,82,82,.5)",
                    gap: "15vh",
                  }}
                >
                  {/* for future integration as badge of package */}
                  {/* <div
                        style={{
                          position: "absolute",
                          height: "50px",
                          width: "50px",
                          zIndex: "5",
                        }}
                      >
                        {mapImages.packgeShow ? (
                          <div style={{ border: "1px solid black" }}>
                            <span>{mapImages.package}</span>
                          </div>
                        ) : (
                          <></>
                        )}
                      </div> */}
                  <img
                    src={
                      "https://drive.google.com/thumbnail?id=" + mapImages.urlId
                    }
                    alt="image"
                    style={{
                      objectFit: "fill",
                      borderRadius: "5px",
                      maxHeight: "250px",
                      width: "100%",
                      cursor: "pointer",
                    }}
                    onClick={alerWhenClickImage}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default DesignIdea;
