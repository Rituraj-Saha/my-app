import logo from "./logo.svg";
import * as React from "react";
import "./App.css";
// import Nav from "./coponents/nav/Nav";
import useIsMobile from "./util/useIsMobile";
import LogoSvg from "./res/logoSvg.svg";
import { MutatingDots } from "react-loader-spinner";
import Constant from "./Constants/Constant";
const Nav = React.lazy(() => import("./coponents/nav/Nav"));
const NavMobile = React.lazy(() => import("./coponents/nav/NavMobile"));

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
          <Nav />
        </React.Suspense>
      )}
    </div>
  );
}

export default App;
