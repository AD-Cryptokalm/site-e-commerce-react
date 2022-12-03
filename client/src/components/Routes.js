import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home/Home";
import LoginForm from "./Log/LoginForm";
import NavBar from "./NavBar";

export default function RoutesNavigate() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="account/login" element={<LoginForm />} />
        {/* <Route path="boutique" element={<Boutique />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoPage />} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
