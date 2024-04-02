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
const NavMobile = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Interior", "Offerings", "How it Works", "Price Calculator"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>

                <Link to="/">
                  {" "}
                  <ListItemText primary={text} />
                </Link>
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
          <span className="logo">LOGO</span>
        </div>

        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
        <div className="mobContainer">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default NavMobile;
