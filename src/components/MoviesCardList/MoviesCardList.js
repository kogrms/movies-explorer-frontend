import React from 'react';
import { useLocation } from "react-router-dom";
import MovieCard from '../MovieCard/MovieCard';
import { CurrentUserContext } from "../../contexts/currentUserContext";

function MoviesCardList ({ movieList, savedMovies, baseUrl, onLike, onDislike }) {

  const currentUser = React.useContext(CurrentUserContext);
  const userLocationPath = useLocation().pathname;

  let slicedMoviesArray = movieList.slice(0, 12);
  const [moviesArrayForRender, setMoviesArrayForRender] = React.useState([]);

  React.useEffect(() => {
    setMoviesArrayForRender(slicedMoviesArray);
  }, []);

  return (
    <section className="movies-card-list">

      {movieList.map((movieItem, i) => {
        if (userLocationPath === "/saved-movies") {
          if (movieItem.owner === currentUser._id) {
            return (
              <MovieCard
                key={movieItem._id}
                card={movieItem}
                baseUrl={baseUrl}
                onLike={onLike}
                onDislike={onDislike}
                savedMovies={savedMovies}
              />
            )
          }
        } else {
          return (
            <MovieCard
              key={movieItem.id}
              card={movieItem}
              baseUrl={baseUrl}
              onLike={onLike}
              onDislike={onDislike}
              savedMovies={savedMovies}
            />
          )
        }
      })}

    </section>
  );
}

export default MoviesCardList;
