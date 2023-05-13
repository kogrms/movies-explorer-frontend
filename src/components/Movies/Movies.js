import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoreMoviesButton from "../MoreMoviesButton/MoreMoviesButton";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";

function Movies({
  isMobileMenuOpened,
  setIsMobileMenuOpened
}) {

  return (
    <section className="movies">
      <Header
        isMobileMenuOpened={isMobileMenuOpened}
        setIsMobileMenuOpened={setIsMobileMenuOpened}
      />
      <SearchForm/>
      <div className="movies__results">
        <MoviesCardList/>
          <MoreMoviesButton/>
      </div>
      <Footer />
    </section>
  );
}

export default Movies;
