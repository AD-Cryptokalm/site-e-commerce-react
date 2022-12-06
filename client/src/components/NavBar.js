import { NavLink } from "react-router-dom";
import "../styles/navBar.scss";
import Home from "./Home/Home";

export default function NavBar() {
  return (
    <div className="navBar">
      <div className="navBar-top flex">
        <div className="navBar-topText">
          Livraison gratuite à partir de 50 euros
          <br /> en France Métropolitaine
        </div>
        <div className="navBar-topMenu flex">
          <NavLink to="/account/login">
            <div className="navBar-topMenuLink">Se connecter </div>
          </NavLink>
          <div> ou </div>
          <NavLink to="/account/register">
            <div className="navBar-topMenuLink"> Créer un compte</div>
          </NavLink>
          <NavLink to="/cart">
          <div className="navBar-topMenuLink">
            <i className="fa-solid fa-cart-shopping navBar-iconCart"></i>
            Panier
          </div>
          </NavLink>
          <div className="navBar-formSearch">
            <form action="/search" method="get" className="" role="search">
              <button type="submit" className="">
                <i className="fa-solid fa-magnifying-glass "></i>
              </button>
              <input
                type="search"
                name="q"
                defaultValue=""
                aria-label="Rechercher"
                className=""
                placeholder="Rechercher"
              />
            </form>
            {/* <label for="search"><i className="fa-solid fa-magnifying-glass"></i></label>
            <input type="search" id="search" name="search" placeholder="Rechercher"></input> */}
          </div>
        </div>
      </div>
      <div className="navBar-bottom flex">
        <div className="navBar-bottomRight">
          <NavLink to="/">
            <div className="navBar-bottomLogo">
              <img src="../images/logo.png" alt="logo entreprise" />
            </div>
          </NavLink>
          <div className="navBar-bottomTitle">
            <h1>Mon Univers Enchanté</h1>
          </div>
        </div>
        <div className="navBar-bottomLeft">
          <div className="navBar-bottomMenu flex">
            <NavLink to="/" className={Home ? "active-link" : null}>
              <div className="navBar-bottomMenuLink">ACCUEIL</div>
            </NavLink>
            <NavLink to="/" className={"" ? "active-link" : null}>
              <div className="navBar-bottomMenuLink">BOUTIQUE</div>
            </NavLink>
            <NavLink to="/" className={"" ? "active-link" : null}>
              <div className="navBar-bottomMenuLink">NOTRE HISTOIRE</div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
