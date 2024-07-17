import logo from "./logo.svg";
import * as React from "react";
import "./App.css";
// import Nav from "./coponents/nav/Nav";
import useIsMobile from "./util/useIsMobile";
import LogoSvg from "./res/logoSvg.svg";
import { MutatingDots } from "react-loader-spinner";
import { whatsAppMsgAction } from "./Constants/Constant";
import Constant from "./Constants/Constant";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
const Nav = React.lazy(() => import("./coponents/nav/Nav"));
const NavMobile = React.lazy(() => import("./coponents/nav/NavMobile"));
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmQiRbKEWuESb4tQQJhLncEISU2dIBbOI",
  authDomain: "dreamweaverstudio-ac852.firebaseapp.com",
  projectId: "dreamweaverstudio-ac852",
  storageBucket: "dreamweaverstudio-ac852.appspot.com",
  messagingSenderId: "422033175783",
  appId: "1:422033175783:web:c1f2f0a8aedbc291e09e42",
  measurementId: "G-M8WBV52SD4",
};

function App() {
  return (
    <div className="App">
      {useIsMobile() ? (
        <React.Suspense
          fallback={
            <div
              style={{
                height: "100vh",
                width: "100vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                background: "rgb(222,68,68)",
                background:
                  "linear-gradient(283deg, rgba(232,106,106,1) 0%, rgba(213,19,234,0.9417016806722689) 18%, rgba(3,85,106,0.9557072829131653) 48%, rgba(218,71,45,0.9136904761904762) 75%, rgba(114,26,82,1) 99%)",
              }}
            >
              <img
                src={LogoSvg}
                style={{ height: "200px", width: "200px" }}
              ></img>
              <span>{Constant.waitScreenMsg.title}</span>
              <span>{Constant.waitScreenMsg.msg}</span>
              <MutatingDots
                visible={true}
                height="100"
                width="100"
                color="#4fa94d"
                secondaryColor="#4fa94d"
                radius="12.5"
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div>
          }
        >
          <NavMobile />
        </React.Suspense>
      ) : (
        <React.Suspense
          fallback={
            <div
              style={{
                height: "100vh",
                width: "100vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                background: "rgb(222,68,68)",
                background:
                  "linear-gradient(283deg, rgba(232,106,106,1) 0%, rgba(213,19,234,0.9417016806722689) 18%, rgba(3,85,106,0.9557072829131653) 48%, rgba(218,71,45,0.9136904761904762) 75%, rgba(114,26,82,1) 99%)",
              }}
            >
              <img
                src={LogoSvg}
                style={{ height: "200px", width: "200px" }}
              ></img>
              <span>{Constant.waitScreenMsg.title}</span>
              <span>{Constant.waitScreenMsg.msg}</span>
              <MutatingDots
                visible={true}
                height="100"
                width="100"
                color="#4fa94d"
                secondaryColor="#4fa94d"
                radius="12.5"
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div>
          }
        >
          <div
            className="wappBar"
            onClick={() => {
              whatsAppMsgAction("hi");
            }}
          >
            <WhatsAppIcon style={{ width: "55px", height: "48px" }} />
          </div>
          <Nav />
        </React.Suspense>
      )}
    </div>
  );
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, "notification_received");
// analytics().setCurrentScreen(window.location.pathname); // sets `screen_name` parameter
// analytics().logEvent("screen_view");

export default App;
