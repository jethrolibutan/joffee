import React from "react";
import { Home, About } from "../pages";

import { Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    <div style={{ height: window.innerHeight, width: window.innerWidth }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
};
