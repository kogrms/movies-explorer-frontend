import React from "react";
import { Link, Route } from "react-router-dom";

function MobileMenu({ isMobileMenuOpened, setIsMobileMenuOpened }) {
  function onCloseMenu() {
    setIsMobileMenuOpened(false);
  }

  function onLinkClick() {
    setIsMobileMenuOpened(false);
  }

  return (
    <div
      className={`mobileMenu${isMobileMenuOpened ? " mobileMenu_active" : ""}`}
    >
      <div className="mobileMenu__menu">
        <button className="mobileMenu__close-button" onClick={onCloseMenu} />

        <Route path="/movies">
          <div className="mobileMenu__link-block">
            <Link to="/" className="mobileMenu__link" onClick={onLinkClick}>
              Главная
            </Link>
            <Link
              to="movies"
              className="mobileMenu__link mobileMenu__active-link"
              onClick={onLinkClick}
            >
              Фильмы
            </Link>
            <Link
              to="saved-movies"
              className="mobileMenu__link"
              onClick={onLinkClick}
            >
              Сохраненные фильмы
            </Link>
            <Link
              to="profile"
              className="mobileMenu__profile-link-block"
              onClick={onLinkClick}
            >
              <p className="mobileMenu__profile-link">Аккаунт</p>
            </Link>
          </div>
        </Route>

        <Route path="/saved-movies">
          <div className="mobileMenu__link-block">
            <Link to="/" className="mobileMenu__link" onClick={onLinkClick}>
              Главная
            </Link>
            <Link
              to="movies"
              className="mobileMenu__link"
              onClick={onLinkClick}
            >
              Фильмы
            </Link>
            <Link
              to="saved-movies"
              className="mobileMenu__link mobileMenu__active-link"
              onClick={onLinkClick}
            >
              Сохраненные фильмы
            </Link>
            <Link
              to="profile"
              className="mobileMenu__profile-link-block"
              onClick={onLinkClick}
            >
              <p className="mobileMenu__profile-link">Аккаунт</p>
            </Link>
          </div>
        </Route>

        <Route path="/profile">
          <div className="mobileMenu__link-block">
            <Link to="/" className="mobileMenu__link" onClick={onLinkClick}>
              Главная
            </Link>
            <Link
              to="movies"
              className="mobileMenu__link"
              onClick={onLinkClick}
            >
              Фильмы
            </Link>
            <Link
              to="saved-movies"
              className="mobileMenu__link"
              onClick={onLinkClick}
            >
              Сохраненные фильмы
            </Link>
            <Link
              to="profile"
              className="mobileMenu__profile-link-block"
              onClick={onLinkClick}
            >
              <p className="mobileMenu__profile-link mobileMenu__active-link">
                Аккаунт
              </p>
            </Link>
          </div>
        </Route>

        <Route exact path="/">
          <div className="mobileMenu__link-block">
            <Link
              to="/"
              className="mobileMenu__link mobileMenu__active-link"
              onClick={onLinkClick}
            >
              Главная
            </Link>
            <Link
              to="movies"
              className="mobileMenu__link"
              onClick={onLinkClick}
            >
              Фильмы
            </Link>
            <Link
              to="saved-movies"
              className="mobileMenu__link"
              onClick={onLinkClick}
            >
              Сохраненные фильмы
            </Link>
            <Link
              to="profile"
              className="mobileMenu__profile-link-block"
              onClick={onLinkClick}
            >
              <p className="mobileMenu__profile-link">Аккаунт</p>
            </Link>
          </div>
        </Route>
      </div>
    </div>
  );
}

export default MobileMenu;
