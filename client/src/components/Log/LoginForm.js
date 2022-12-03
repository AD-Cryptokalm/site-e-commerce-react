import "../../styles/loginForm.scss";
import React, { useState } from "react";
import axios from "axios";
// import Home from "../Home/Home";

export default function LoginForm() {
  // const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    // setEmail(e.target.value);
    // setPassword(e.target.value);
    // console.log(e.target.value);
    axios({
      method: "POST",
      url: `http://localhost:3000/login`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        setEmail("");
        setPassword("");
      });
  };

  return (
    <div className="loginForm">
      <h2>Connectez-vous !</h2>
      <form action="" onSubmit={handleChange} id="form">
        <input
          type="text"
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
        <h3>Mot de passe oublié ?</h3>

        <input className="btn-form" type="submit" value="Se Connecter"/>
      </form>
    </div>
  );
}
