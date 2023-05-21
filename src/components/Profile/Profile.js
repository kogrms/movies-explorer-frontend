import React from "react";
import Header from "../Header/Header.js";

function Profile({ isMobileMenuOpened, setIsMobileMenuOpened }) {

  return (
    <section className="profile">
      <Header
        isMobileMenuOpened={isMobileMenuOpened}
        setIsMobileMenuOpened={setIsMobileMenuOpened}
      />
      <form className="profile__form">
        <h1 className="profile__title">
          {`Привет, Виталий!`}
        </h1>
        <fieldset className="profile__fieldset">
          <div className="profile__input-line">
            <label className="profile__label" htmlFor="name">
              Имя
            </label>
            <input
              required
              className="profile__input profile__input-name"
              id="name"
              type="text"
              defaultValue={'Виталий'}
              disabled
            />
          </div>
          <span
            className='profile__error-info'
          >
          </span>
          <div className="profile__input-line">
            <label className="profile__label" htmlFor="email">
              E-mail
            </label>
            <input
              required
              className="profile__input profile__input-email"
              id="email"
              type="email"
              disabled
              defaultValue={'pochta@yandex.ru'}
            />
          </div>
          <span
            className='profile__error-info'
          >
          </span>
          <section className="profile__button-area">
            <div className="profile__default-buttons">
              <button
                className="profile__text-button"
              >
                Редактировать
              </button>
              <button
                className="profile__exit-button"
              >
                Выйти из аккаунта
              </button>
            </div>
          </section>
        </fieldset>
      </form>
    </section>
  );
}

export default Profile;
