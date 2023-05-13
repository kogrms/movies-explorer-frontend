import React from 'react';
import { useLocation } from "react-router-dom";
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList ({ movieList, savedMovies, onLike, onDislike }) {
  const userLocationPath = useLocation().pathname;
  // let slicedMoviesArray = movieList.slice(0, 12);
  // const [moviesArrayForRender, setMoviesArrayForRender] = React.useState([]);
  // React.useEffect(() => {
  //   setMoviesArrayForRender(slicedMoviesArray);
  // }, []);

  return (
    <section className="movies-card-list">
      {userLocationPath === "/saved-movies" ? (
        <>
          <MoviesCard
            card={{
              duration: "1ч 42м",
              url: "../../images/promo-logo.svg",
              nameRU: "33 слова о дизайне",
              isLiked: false
            }}
            onLike={onLike}
            onDislike={onDislike}
          />
          <MoviesCard
            card={{
              duration: "1ч 42м",
              url: "../../images/promo-logo.svg",
              nameRU: "33 слова о дизайне",
              isLiked: false
            }}
            onLike={onLike}
            onDislike={onDislike}
          />
          <MoviesCard
            card={{
              duration: "1ч 42м",
              url: "../../images/promo-logo.svg",
              nameRU: "33 слова о дизайне",
              isLiked: false
            }}
            onLike={onLike}
            onDislike={onDislike}
          />
        </>
      ) : (
        <>
          <MoviesCard
            card={{
              duration: "1ч 42м",
              url: "../../images/promo-logo.svg",
              nameRU: "33 слова о дизайне",
              isLiked: true
            }}
            onLike={onLike}
            onDislike={onDislike}
          />
          <MoviesCard
            card={{
              duration: "1ч 42м",
              url: "../../images/promo-logo.svg",
              nameRU: "33 слова о дизайне",
              isLiked: true
            }}
            onLike={onLike}
            onDislike={onDislike}
          />
          <MoviesCard
            card={{
              duration: "1ч 42м",
              url: "../../images/promo-logo.svg",
              nameRU: "33 слова о дизайне",
              isLiked: false
            }}
            onLike={onLike}
            onDislike={onDislike}
          />
          <MoviesCard
            card={{
              duration: "1ч 42м",
              url: "../../images/promo-logo.svg",
              nameRU: "33 слова о дизайне",
              isLiked: false
            }}
            onLike={onLike}
            onDislike={onDislike}
          />
          <MoviesCard
            card={{
              duration: "1ч 42м",
              url: "../../images/promo-logo.svg",
              nameRU: "33 слова о дизайне",
              isLiked: true
            }}
            onLike={onLike}
            onDislike={onDislike}
          />
          <MoviesCard
            card={{
              duration: "1ч 42м",
              url: "../../images/promo-logo.svg",
              nameRU: "33 слова о дизайне",
              isLiked: false
            }}
            onLike={onLike}
            onDislike={onDislike}
          />
          <MoviesCard
            card={{
              duration: "1ч 42м",
              url: "../../images/promo-logo.svg",
              nameRU: "33 слова о дизайне",
              isLiked: false
            }}
            onLike={onLike}
            onDislike={onDislike}
          />
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
