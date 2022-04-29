/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import axios from "axios";
import { API } from "./constant";
import HomePage from "./pages/HomePage";
import CreateShop from "./pages/CreateShop";
import Shop from "./pages/Shop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateShop />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
