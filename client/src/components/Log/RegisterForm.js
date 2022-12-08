import "../../styles/loginForm.scss";
import React, { useState } from "react";
import axios from "axios";
import Home from "../../pages/Home";
// import Home from "../Home/Home";

export default function RegisterForm() {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: `http://localhost:3000/register`,
      withCredentials: true,
      data: {
        firstname,
        lastname,
        email,
        password,
      },
    })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("uid", res.data.accessToken)
        setIsLogin(true);
        window.location = '/'
      })
      .catch((err) => {
        console.log(err);
        setEmail("");
        setPassword("");
      });
  };

  return (
    <>
      {isLogin ? (
        <Home />
      ) : (
        <div className="loginForm">
          <h2>Inscrivez-vous !</h2>
          <form action="" onSubmit={handleChange} id="form">
            <input
              type="text"
              name="firstname"
              id="firstname"
              onChange={(e) => setFirstname(e.target.value)}
              value={firstname}
              placeholder="Nom"
            />
            <input
              type="text"
              name="lastname"
              id="lastname"
              onChange={(e) => setLastname(e.target.value)}
              value={lastname}
              placeholder="Prénom"
            />
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
            />
            <input className="btn-form" type="submit" value="Se Connecter" />
          </form>
        </div>
      )}
    </>
  );
}
