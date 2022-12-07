import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../pages/Cart";
import Footer from "./Utils/Footer";
import Home from "../pages/Home";
import LoginForm from "./Log/LoginForm";
import RegisterForm from "./Log/RegisterForm";
import NavBar from "./Utils/NavBar";
import Page404 from "./Utils/Page404";
import Products from "../pages/Products"

export default function RoutesNavigate() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
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
