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
          padding: "16px 10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ToolBar sx={{ marginLeft: "right" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                typography: "h5",
                paddingRight: "45px",
                paddingLeft: "45px",
                color: "black",
              }}
            >
              Dulce Cafe
            </Button>
          </Link>

          <Button
            sx={{
              typography: "h5",
              paddingRight: "45px",
              paddingLeft: "45px",
              color: "black",
            }}
          >
            {" "}
            Shop{" "}
          </Button>
          <Button
            sx={{
              typography: "h5",
              paddingRight: "45px",
              paddingLeft: "45px",
              color: "black",
            }}
          >
            {" "}
            FAQ{" "}
          </Button>

          <Button
            sx={{
              typography: "h5",
              paddingRight: "45px",
              paddingLeft: "45px",
              color: "black",
              backgroundColor: "transparent",
              underline: "none",
            }}
          >
            <Link
              to="about"
              underline="none"
              style={{ textDecoration: "none" }}
            >
              {" "}
              About{" "}
            </Link>
          </Button>
        </ToolBar>
      </AppBar>
    </div>
  );
};
