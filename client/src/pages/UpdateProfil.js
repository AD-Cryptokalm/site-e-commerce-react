import axios from "axios";
import React, { useContext, useState } from "react";
import { UidContext } from "../components/context/authContext";
// import Home from "./Home";

export default function UpdateProfil() {
  const token = useContext(UidContext);
  const userId = localStorage.getItem("uid");
//   const [isUpdated, setIsUpdated] = useState(false);
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    axios({
      method: "PUT",
      url: `http://localhost:3000/660/users/${userId}`,
      withCredentials: true,
      data: {
        firstname,
        lastname,
        email,
        password,
      },
      headers: {
        content_type: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
        <div className="loginForm">
          <h2>Modifiez votre profil</h2>
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
              placeholder="password"
            />
            <input className="btn-form" type="submit" value="Valider" />
          </form>
        </div>
      
  )
  
}
