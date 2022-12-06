import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Footer from "./Footer";
import Home from "./Home/Home";
import LoginForm from "./Log/LoginForm";
import RegisterForm from "./Log/RegisterForm";
import NavBar from "./NavBar";
import Page404 from "./Page404";

export default function RoutesNavigate() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="account/login" element={<LoginForm />} />
        <Route path="account/register" element={<RegisterForm />} />
        <Route path="660/cart" element={<Cart />} />
        <Route path="*" element={<Page404 />} />
        {/* <Route path="boutique" element={<Boutique />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoPage />} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
