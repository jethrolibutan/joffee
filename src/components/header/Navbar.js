import React, { useState } from "react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/Toolbar";

import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="App">
      <AppBar
        style={{
          backgroundColor: "transparent",
          boxShadow: "0px 0px 0px 0px",
          padding: "16px 32px",
        }}
      >
        <ToolBar sx={{ marginLeft: "right" }}>
          <Link to="/">
            <Button sx={{ typography: "h6" }}> Joffee </Button>
          </Link>

          <Button sx={{ typography: "h6" }}> Shop </Button>
          <Button sx={{ typography: "h6", marginLeft: "auto" }}> FAQ </Button>

          <Button sx={{ typography: "h6" }}>
            <Link to="about"> About </Link>
          </Button>
        </ToolBar>
      </AppBar>
    </div>
  );
};
