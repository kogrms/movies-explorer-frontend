import React from "react";
import { Route } from "react-router-dom";

function MovieCard({ card, baseUrl, onLike, onDislike, savedMovies }) {
  const isLiked = savedMovies.some(item => (item.movieId === card.id));
  const filmDurationHours = Math.round(card.duration / 60);
  const filmDurationMinutes = card.duration % 60;

  function handleLikeClick() {
    onLike(
      {
        "country": card.country,
        "director": card.director,
        "duration": card.duration,
        "year": card.year,
        "description": card.description,
        "image": card.image.url,
        "trailerLink": card.trailerLink,
        "nameRU": card.nameRU,
        "nameEN": card.nameEN,
        "thumbnail": card.image.previewUrl,
        "movieId": card.id
      }
    );
  }

  function handleDislikeClick() {
    onDislike(card);
  }

  return (
    <section className="card">
      <div className="card__title-block">
        <a href={card.trailerLink} target="_blanc" className="card__link">
          <p className="card__title">{card.nameRU}</p>
        </a>
        <p className="card__length">{`${filmDurationHours}ч ${filmDurationMinutes}м`}</p>

        <Route path="/movies">
          <button
            className={`card__heart${isLiked ? " card__heart_active" : ""}`}
            type="button"
            onClick={isLiked ? handleDislikeClick : handleLikeClick}
            aria-label="В избранное"
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
      <a href={card.trailerLink} target="_blanc" className="card__link">
        <img className="card__image" src={`${baseUrl}${card.image.url || card.image}`} alt={card.nameRU} />
      </a>
    </section>
  );
}

export default MovieCard;
