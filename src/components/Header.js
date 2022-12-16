import React, { useState } from "react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/ToolBar";
import { Menu, MenuItem } from "@mui/material";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [aboutEl, setAboutEl] = useState(null);

  const openMenu = Boolean(anchorEl);
  const aboutMenuOpen = Boolean(aboutEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    console.log(e.currentTarget);
  };

  const handleAboutClick = (e) => {
    setAboutEl(e.currentTarget);
    console.log(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAboutClose = () => {
    setAboutEl(null);
  };

  return (
    <div className="App">
      <AppBar
        style={{ backgroundColor: "transparent", boxShadow: "0px 0px 0px 0px" }}
      >
        <ToolBar sx={{ marginLeft: "right" }}>
          <Button sx={{ typography: "h6" }}> Joffee </Button>
          <Button sx={{ typography: "h6" }}> Shop </Button>
          <Button sx={{ typography: "h6" }}> FAQ </Button>
          <Button
            sx={{ marginLeft: "auto", typography: "h6" }}
            aria-controls="about-us-menu"
            aria-haspopup="true"
            aria-expanded={aboutMenuOpen ? "true" : undefined}
            onClick={handleAboutClick}
          >
            {" "}
            About{" "}
          </Button>

          <Menu
            id="about-us-menu"
            anchorEl={aboutEl}
            open={aboutMenuOpen}
            onClose={handleAboutClose}
          >
            <MenuItem onClick={handleAboutClose}> Meet the Team </MenuItem>
            <MenuItem onClick={handleAboutClose}> Our History </MenuItem>
          </Menu>

          <Button
            sx={{ typography: "h6" }}
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={openMenu ? "true" : undefined}
            onClick={handleClick}
          >
            Contact Us
          </Button>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}> Email </MenuItem>
            <MenuItem onClick={handleClose}> Phone Number </MenuItem>
          </Menu>
        </ToolBar>
      </AppBar>
    </div>
  );
}

export default Header;
