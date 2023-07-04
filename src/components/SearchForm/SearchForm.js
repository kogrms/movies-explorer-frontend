import { useState, useEffect } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import DarkSearchIcon from "../../images/search-dark.svg"
import SearchIcon from "../../images/search.svg"

function SearchForm({
  setMovieIsFound,
  onSearch,
  lastSearchingString,
  shortFilmsOnlyStatus,
  setShortFilmsOnlyStatus,
  setSearchStringIsMissed,
  isSavedMoviesPage,
  setIsLoading,
}) {
  const [searchingMovieTitle, setSearchingMovieTitle] = useState(lastSearchingString || "");

  function handleChangeMovieTitle(e) {
    e.preventDefault();
    setSearchingMovieTitle(e.target.value);
  }

  function handleChangeShortFilmsOnlyStatus() {
    setShortFilmsOnlyStatus(!shortFilmsOnlyStatus);
    updateMovieIsFoundState();
  }

  function handleSearchMovies(e) {
    e.preventDefault();
    if (isSavedMoviesPage || searchingMovieTitle.length > 0) {
      setSearchStringIsMissed(false);
      onSearch(searchingMovieTitle, shortFilmsOnlyStatus);
    } else {
      setSearchStringIsMissed(true);
      setIsLoading(false);
      setMovieIsFound(false);
    }
  }

  function updateMovieIsFoundState() {
    if (searchingMovieTitle.length === 0 && !isSavedMoviesPage) {
      setSearchStringIsMissed(true);
      setMovieIsFound(false);
    } else {
      setMovieIsFound(true);
    }
  }

  useEffect(() => {
    updateMovieIsFoundState();
  }, [searchingMovieTitle, isSavedMoviesPage]);

  return (
    <section className="search">
      <form
        className="search__form"
        onSubmit={handleSearchMovies}
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
            value={searchingMovieTitle}
            onChange={handleChangeMovieTitle}
          />
          <button className="search__button" type="submit">
            <img
              className="search__fieldset-icon"
              src={SearchIcon}
              alt="Иконка поиска"
            />
          </button>
          <Checkbox
            isChecked={shortFilmsOnlyStatus}
            onCheckboxClick={handleChangeShortFilmsOnlyStatus}
          />
        </fieldset>
      </form>
    </section>
  );
}

export default SearchForm;
