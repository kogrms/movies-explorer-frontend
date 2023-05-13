import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import DarkSearchIcon from "../../images/search-dark.svg"
import SearchIcon from "../../images/search.svg"

function SearchForm () {

  return (
    <section className="search">
      <form
        className="search__form"
      >
        <fieldset className="search__fieldset">
          <img
            className="search__fieldset-icon"
            src={DarkSearchIcon}
            alt="Иконка поиска"
          />
          <input
            type="text"
            id="input-movie"
            className="search__input search__input-movie"
            name="input-movie"
            placeholder="Фильм"
          />
          <button className="search__button">
            <img
              className="search__fieldset-icon"
              src={SearchIcon}
              alt="Иконка поиска"
            />
          </button>
          <Checkbox
          />
        </fieldset>
      </form>
    </section>
  );
}

export default SearchForm;
