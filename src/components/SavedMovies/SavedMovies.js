import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";

function SavedMovies({
  loggedIn,
  isBurgerMenuOpened,
  setIsBurgerMenuOpened,
  setMovieIsFound,
  movieList,
  savedMovies,
  baseUrl,
  onLike,
  onDislike,
  onSearch,
  setSearchStringIsMissed,
}) {

  const [shortSavedFilmsOnlyStatus, setShortSavedFilmsOnlyStatus] = React.useState(false);

  return (
    <section className="movies">
      <Header
        loggedIn={loggedIn}
        isBurgerMenuOpened={isBurgerMenuOpened}
        setIsBurgerMenuOpened={setIsBurgerMenuOpened}
      />
      <SearchForm
        setMovieIsFound={setMovieIsFound}
        onSearch={onSearch}
        isSavedMoviesPage="true"
        shortFilmsOnlyStatus={shortSavedFilmsOnlyStatus}
        setShortFilmsOnlyStatus={setShortSavedFilmsOnlyStatus}
        setSearchStringIsMissed={setSearchStringIsMissed}
      />
      <MoviesCardList
        movieList={movieList}
        savedMovies={savedMovies}
        baseUrl={baseUrl}
        onLike={onLike}
        onDislike={onDislike}
      />
      <Footer />
    </section>
  );
}

export default SavedMovies;
