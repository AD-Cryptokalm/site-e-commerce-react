import "../styles/navBar.scss";

export default function NavBar() {
  return (
    <div className="navBar">
      <div className="navBar-top flex">
        <div className="navBar-topText">
          Livraison gratuite à partir de 50 euros<br/> en France Métropolitaine
        </div>
        <div className="navBar-topMenu flex">
          <div className="navBar-topMenuLink">Se connecter </div>
          <div> ou </div>
          <div className="navBar-topMenuLink"> Créer un compte</div>
          <div className="navBar-topMenuLink">
            <i className="fa-solid fa-cart-shopping navBar-iconCart"></i>
            Panier
          </div>
          <div className="navBar-formSearch">
            <form
              action="/search"
              method="get"
              className=""
              role="search"
            >
              <button
                type="submit"
                className=""
              >
                <i className="fa-solid fa-magnifying-glass "></i>
                {/* <span class="fallback-text">Recherche</span> */}
              </button>
              <input
                type="search"
                name="q"
                value=""
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
          <div className="navBar-bottomLogo">
            <img src="../images/logo.png" alt="logo entreprise" />
          </div>
          <div className="navBar-bottomTitle">
            <h1>Mon Univers Enchanté</h1>
          </div>
        </div>
        <div className="navBar-bottomLeft">
          <div className="navBar-bottomMenu flex">
            <div className="navBar-bottomMenuLink">ACCUEIL</div>
            <div className="navBar-bottomMenuLink">BOUTIQUE</div>
            <div className="navBar-bottomMenuLink">NOTRE HISTOIRE</div>
          </div>
        </div>
      </div>
    </div>
  );
}
