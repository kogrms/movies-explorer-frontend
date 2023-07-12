import React from "react";
import logoPath from "../../images/header-logo.svg";
import Navigation from "../Navigation/Navigation";
import { Link, useLocation } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Header({ loggedIn, isBurgerMenuOpened, setIsBurgerMenuOpened }) {
  const userLocationPath = useLocation().pathname;

  return (
    <header
      className={`header ${
        userLocationPath === "/" ? "header_main-background header_spaced" : ""
      } ${
        userLocationPath === "/profile" ? "header_spaced" : ""
      }`}
    >
      <Link to="/" className="header__logo-link">
        <img
          className="header__logo"
          src={logoPath}
          alt="Логотип проекта Movies Explorer"
        />
      </Link>

      <Navigation
        loggedIn={loggedIn}
        isBurgerMenuOpened={isBurgerMenuOpened}
        setIsBurgerMenuOpened={setIsBurgerMenuOpened}
      />
      <BurgerMenu
        isBurgerMenuOpened={isBurgerMenuOpened}
        setIsBurgerMenuOpened={setIsBurgerMenuOpened}
      />
    </header>
  );
}

export default Header;
