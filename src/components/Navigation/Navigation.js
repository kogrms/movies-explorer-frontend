import React from "react";
// import profilePath from "../../images/profile.svg";
import { Link, Route } from "react-router-dom";

function Navigation({ loggedIn, isMobileMenuOpened, setIsMobileMenuOpened }) {
  function onOpenMenu() {
    console.log(isMobileMenuOpened)
    setIsMobileMenuOpened(true);
  }

  return (
    <section className="navigation">
      <Route path="/movies">
        <div className="navigation__link-block">
          <Link
            to="movies"
            className="navigation__link navigation__active-link"
          >
            Фильмы
          </Link>
          <Link to="saved-movies" className="navigation__link">
            Сохраненные фильмы
          </Link>
          <Link to="profile" className="navigation__profile-link-block">
            <p className="navigation__profile-link">Аккаунт</p>
          </Link>
        </div>
        <div className="navigation__burger-menu">
          <button
            className="navigation__burger-menu-button"
            onClick={onOpenMenu}
          ></button>
        </div>
      </Route>

      <Route path="/saved-movies">
        <div className="navigation__link-block">
          <Link to="movies" className="navigation__link">
            Фильмы
          </Link>
          <Link
            to="saved-movies"
            className="navigation__link navigation__active-link"
          >
            Сохраненные фильмы
          </Link>
          <Link to="profile" className="navigation__profile-link-block">
            <p className="navigation__profile-link">Аккаунт</p>
          </Link>
        </div>
        <div className="navigation__burger-menu">
          <button
            className="navigation__burger-menu-button"
            onClick={onOpenMenu}
          ></button>
        </div>
      </Route>

      <Route path="/profile">
        <div className="navigation__link-block">
          <Link to="movies" className="navigation__link">
            Фильмы
          </Link>
          <Link to="saved-movies" className="navigation__link">
            Сохраненные фильмы
          </Link>
        </div>
        <Link to="profile" className="navigation__profile-link-block">
          <p className="navigation__profile-link navigation__active-link">
            Аккаунт
          </p>
        </Link>
        <div className="navigation__burger-menu">
          <button
            className="navigation__burger-menu-button"
            onClick={onOpenMenu}
          ></button>
        </div>
      </Route>

      <Route exact path="/">
        { loggedIn ? (
          <>
          <div className="navigation__link-block">
            <Link to="movies" className="navigation__link">
              Фильмы
            </Link>
            <Link
              to="saved-movies"
              className="navigation__link"
            >
              Сохраненные фильмы
            </Link>
            <Link to="profile" className="navigation__profile-link-block">
              <p className="navigation__profile-link">Аккаунт</p>
            </Link>
          </div>
          <div className="navigation__burger-menu">
            <button
              className="navigation__burger-menu-button"
              onClick={onOpenMenu}
            ></button>
          </div>
        </>
        ) : (
          <>
                <div className="navigation__link-block">
                  <Link
                    to="/signup"
                    className="navigation__link navigation__link_start-page"
                  >
                    Регистрация
                  </Link>
                  <Link to="/signin" className="navigation__button-link">
                    <button className="navigation__button">Войти</button>
                  </Link>
                </div>
                <div className="navigation__burger-menu">
                  <button
                    className="navigation__burger-menu-button"
                    onClick={onOpenMenu}
                  ></button>
                </div>
              </>
        )}
      </Route>
    </section>
  );
}

export default Navigation;
