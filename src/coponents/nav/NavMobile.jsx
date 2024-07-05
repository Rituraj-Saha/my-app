import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import "./NavMobile.css";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import HomeMobile from "../Home/HomeMobile";
import CloseIcon from "@mui/icons-material/Close";
import LogoDecor from "../../res/logoDecor.jpeg";
const NavMobile = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  function setLinkElement(text) {
    if (text == "Interior") {
      return (
        <Link to="/my-app/">
          {" "}
          <ListItemText primary={text} />
        </Link>
      );
    }
    if (text == "Offerings") {
      return (
        <Link to="/offerings">
          {" "}
          <ListItemText primary={text} />
        </Link>
      );
    }
    if (text == "How it Works") {
      return (
        <Link to="/howItWorks">
          {" "}
          <ListItemText primary={text} />
        </Link>
      );
    }
    if (text == "Contact") {
      return (
        <Link to="/contact">
          {" "}
          <ListItemText primary={text} />
        </Link>
      );
    }
  }
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Interior", "Offerings", "How it Works", "Contact"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}

                {setLinkElement(text)}
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      {/* <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List> */}
    </Box>
  );
  return (
    <Router>
      <div className="navmobileparent">
        <div className="topBar">
          {" "}
          <Button onClick={toggleDrawer(true)} className="hamburger">
            {" "}
            <MenuIcon />
          </Button>
          <div className="logo">
            <img
              src={LogoDecor}
              style={{
                width: "50px",
                objectFit: "cover",
                borderRadius: "100%",
              }}
            />
          </div>
        </div>

        <Drawer open={open} onClose={toggleDrawer(false)}>
          <div onClick={toggleDrawer(false)} className="closeDraweBtn">
            <CloseIcon />
          </div>
          {DrawerList}
        </Drawer>
        <div className="mobContainer">
          <Routes>
            <Route exact path="/my-app/" element={<HomeMobile />}></Route>
            <Route exact path="/my-app/" element={<HomeMobile />}></Route>
            <Route
              exact
              path="/offerings"
              element={<HomeMobile scrollToElement="offerings" />}
            ></Route>
            <Route
              exact
              path="/howItWorks"
              element={<HomeMobile scrollToElement="howItWorks" />}
            ></Route>
            <Route
              exact
              path="/contact"
              element={<HomeMobile scrollToElement="contact" />}
            ></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default NavMobile;
