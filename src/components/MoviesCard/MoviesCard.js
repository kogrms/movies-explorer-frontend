import React from "react";
import { Route } from "react-router-dom";

function MoviesCard({ card, isLiked, onLike, onDislike }) {
  // const isLiked = savedMovies.some(item => (item.movieId === card.id));
  const filmDurationHours = Math.round(card.duration / 60);
  const filmDurationMinutes = card.duration % 60;

  function handleLikeClick() {
    onLike(

    );
  }

  function handleDislikeClick() {
    onDislike(card);
  }

  return (
    <section className="card">
      <a href="/" target="_blanc" className="card__link">
        <img className="card__image" src={card.image} alt="Кадр из фильма" />
      </a>
      <div className="card__title-block">
      <a href={card.trailerLink} target="_blanc" className="card__link">
        <p className="card__title">{card.nameRU}</p>
      </a>

        <Route path="/movies">
          <button
            className={`card__heart${isLiked ? " card__heart_active" : ""}`}
            type="button"
            onClick={isLiked ? handleDislikeClick : handleLikeClick}
            aria-label="Нравится"
          ></button>
        </Route>

        <Route path="/saved-movies">
          <button
            className="card__delete-button"
            type="button"
            onClick={handleDislikeClick}
            aria-label="Удалить из избранного"
          ></button>
        </Route>

      </div>
      <p className="card__length">{`${filmDurationHours}ч ${filmDurationMinutes}м`}</p>
    </section>
  );
}

export default MoviesCard;
