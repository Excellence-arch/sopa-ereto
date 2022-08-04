import React from "react";
import "./style.css";
import NavBar from "./Layouts/NavBar";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route to="/" element={<Home />} />
      </Routes>
    </div>
  );
}
