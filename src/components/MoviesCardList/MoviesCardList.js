import React from 'react';
import { useLocation } from "react-router-dom";
import MoviesCard from '../MoviesCard/MoviesCard';
import Movie1 from "../../images/movie-1.png";
import Movie2 from "../../images/movie-2.png";
import Movie3 from "../../images/movie-3.png";
import Movie4 from "../../images/movie-4.png";
import Movie5 from "../../images/movie-5.png";
import Movie6 from "../../images/movie-6.png";
import Movie7 from "../../images/movie-7.png";


function MoviesCardList () {
  const userLocationPath = useLocation().pathname;

  return (
    <section className="movies-card-list">
      {userLocationPath === "/saved-movies" ? (
        <>
          <MoviesCard
            card={{
              duration: "1ч 42м",
              url: Movie1,
              nameRU: "33 слова о дизайне",
              isLiked: false
            }}
          />
          <MoviesCard
            card={{
              duration: "1ч 42м",
              url: Movie2,
              nameRU: "Киноальманах «100 лет дизайна»",
              isLiked: false
            }}
          />
          <MoviesCard
            card={{
              duration: "1ч 42м",
              url: Movie3,
              nameRU: "В погоне за Бенкси",
              isLiked: false
            }}
          />
        </>
      ) : (
        <>
          <MoviesCard
            card={{
              duration: "1ч 42м",
              url: Movie1,
              nameRU: "33 слова о дизайне",
              isLiked: true
            }}
          />
          <MoviesCard
            card={{
              duration: "1ч 42м",
              url: Movie2,
              nameRU: "Киноальманах «100 лет дизайна»",
              isLiked: true
            }}
          />
          <MoviesCard
            card={{
              duration: "1ч 42м",
              url: Movie3,
              nameRU: "В погоне за Бенкси",
              isLiked: false
            }}
          />
          <MoviesCard
            card={{
              duration: "1ч 42м",
              url: Movie4,
              nameRU: "Баския: Взрыв реальности",
              isLiked: false
            }}
          />
          <MoviesCard
            card={{
              duration: "1ч 42м",
              url: Movie5,
              nameRU: "Бег это свобода",
              isLiked: true
            }}
          />
          <MoviesCard
            card={{
              duration: "1ч 42м",
              url: Movie6,
              nameRU: "Книготорговцы",
              isLiked: false
            }}
          />
          <MoviesCard
            card={{
              duration: "1ч 42м",
              url: Movie7,
              nameRU: "Когда я думаю о Германии ночью",
              isLiked: false
            }}
          />
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
