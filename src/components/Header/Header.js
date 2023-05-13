import React from "react";
import logoPath from "../../images/header-logo.svg";
import Navigation from "../Navigation/Navigation";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";

function Header({ loggedIn, isMobileMenuOpened, setIsMobileMenuOpened }) {
  // function onOpenMenu() {
  //   console.log(isMobileMenuOpened)
  //   // setIsMobileMenuOpened(true);
  // }

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
            // onClick={onOpenMenu}
          />
        </Link>

        <Navigation
          loggedIn={loggedIn}
          isMobileMenuOpened={isMobileMenuOpened}
          setIsMobileMenuOpened={setIsMobileMenuOpened}
        />
        <MobileMenu
          isMobileMenuOpened={isMobileMenuOpened}
          setIsMobileMenuOpened={setIsMobileMenuOpened}
        />
      </header>
    );

}

export default Header;
