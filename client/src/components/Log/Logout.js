import React from 'react'
// import { Navigate } from 'react-router-dom';

export default function Logout() {

    const handlleLogout = () => {
        localStorage.removeItem('token')
        window.location = "/";
    }

  return (

    <div className="navBar-topMenuLink" onClick={handlleLogout}> Se déconnecter</div>
  )
}
