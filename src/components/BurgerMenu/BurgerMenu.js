import React from "react";
import { Link, Route } from "react-router-dom";

function BurgerMenu({ isBurgerMenuOpened, setIsBurgerMenuOpened }) {
  function onCloseMenu() {
    setIsBurgerMenuOpened(false);
  }

  function onLinkClick() {
    setIsBurgerMenuOpened(false);
  }

  return (
    <div
      className={`burgerMenu${isBurgerMenuOpened ? " burgerMenu_active" : ""}`}
    >
      <div className="burgerMenu__menu">
        <button className="burgerMenu__close-button" onClick={onCloseMenu} />

        <Route path="/movies">
          <div className="burgerMenu__link-block">
            <Link to="/" className="burgerMenu__link" onClick={onLinkClick}>
              Главная
            </Link>
            <Link
              to="movies"
              className="burgerMenu__link burgerMenu__active-link"
              onClick={onLinkClick}
            >
              Фильмы
            </Link>
            <Link
              to="saved-movies"
              className="burgerMenu__link"
              onClick={onLinkClick}
            >
              Сохраненные фильмы
            </Link>
            <Link
              to="profile"
              className="burgerMenu__profile-link-block"
              onClick={onLinkClick}
            >
              <p className="burgerMenu__profile-link">Аккаунт</p>
            </Link>
          </div>
        </Route>

        <Route path="/saved-movies">
          <div className="burgerMenu__link-block">
            <Link to="/" className="burgerMenu__link" onClick={onLinkClick}>
              Главная
            </Link>
            <Link
              to="movies"
              className="burgerMenu__link"
              onClick={onLinkClick}
            >
              Фильмы
            </Link>
            <Link
              to="saved-movies"
              className="burgerMenu__link burgerMenu__active-link"
              onClick={onLinkClick}
            >
              Сохраненные фильмы
            </Link>
            <Link
              to="profile"
              className="burgerMenu__profile-link-block"
              onClick={onLinkClick}
            >
              <p className="burgerMenu__profile-link">Аккаунт</p>
            </Link>
          </div>
        </Route>

        <Route path="/profile">
          <div className="burgerMenu__link-block">
            <Link to="/" className="burgerMenu__link" onClick={onLinkClick}>
              Главная
            </Link>
            <Link
              to="movies"
              className="burgerMenu__link"
              onClick={onLinkClick}
            >
              Фильмы
            </Link>
            <Link
              to="saved-movies"
              className="burgerMenu__link"
              onClick={onLinkClick}
            >
              Сохраненные фильмы
            </Link>
            <Link
              to="profile"
              className="burgerMenu__profile-link-block"
              onClick={onLinkClick}
            >
              <p className="burgerMenu__profile-link burgerMenu__active-link">
                Аккаунт
              </p>
            </Link>
          </div>
        </Route>

        <Route exact path="/">
          <div className="burgerMenu__link-block">
            <Link
              to="/"
              className="burgerMenu__link burgerMenu__active-link"
              onClick={onLinkClick}
            >
              Главная
            </Link>
            <Link
              to="movies"
              className="burgerMenu__link"
              onClick={onLinkClick}
            >
              Фильмы
            </Link>
            <Link
              to="saved-movies"
              className="burgerMenu__link"
              onClick={onLinkClick}
            >
              Сохраненные фильмы
            </Link>
            <Link
              to="profile"
              className="burgerMenu__profile-link-block"
              onClick={onLinkClick}
            >
              <p className="burgerMenu__profile-link">Аккаунт</p>
            </Link>
          </div>
        </Route>
      </div>
    </div>
  );
}

export default BurgerMenu;
