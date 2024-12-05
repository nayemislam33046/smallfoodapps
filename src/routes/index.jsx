import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home/Home.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import Cart from "../Cart/Cart.jsx";
const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
