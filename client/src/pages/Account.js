import React from "react";
import { useSelector } from "react-redux";
import '../styles/account.scss'

export default function Account() {
  const userData = useSelector((state) => state.userReducer);
  console.log(userData);

  return (
    <div className="account">
      <h2 className="account-tilte">Mon Compte</h2>
      <div className="account-block">
      <div className="account-left">
        <h3 className="account-title">Historique des commande</h3>
        <p>Vous n'avez pas encore passé de commandes</p>
      </div>
      <div className="account-right">
        <h3 className="account-title">Détails du compte</h3>
        <p className="account-name">
          {userData.firstname} {userData.lastname}
        </p>
        <div className="account-adress">{userData.adress}</div>
      </div>
      </div>
    </div>
  );
}
