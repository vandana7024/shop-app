/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateShop from "./pages/CreateShop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateShop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
