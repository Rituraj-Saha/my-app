import logo from "./logo.svg";
import * as React from "react";
import "./App.css";
import Nav from "./coponents/nav/Nav";
import useIsMobile from "./util/useIsMobile";
import NavMobile from "./coponents/nav/NavMobile";

function App() {
  return (
    <div className="App">
      {useIsMobile() ? (
        <NavMobile />
      ) : (
        <>
          <Nav />
        </>
      )}
    </div>
  );
}

export default App;
