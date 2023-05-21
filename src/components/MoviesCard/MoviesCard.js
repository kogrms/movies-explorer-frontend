import React from "react";
import { Route } from "react-router-dom";

function MoviesCard({ card }) {

  function handleLikeClick(card) {
    card.isLiked = !card.isLiked;
  }

  function handleDislikeClick(card) {
    card.isLiked = !card.isLiked;
  }

  return (
    <section className="card">
      <div className="card__title-block">
        <p className="card__title">{card.nameRU}</p>
        <p className="card__length">{card.duration}</p>

        <Route path="/movies">
          <button
            className={`card__heart${card.isLiked ? " card__heart_active" : ""}`}
            type="button"
            onClick={card.isLiked ? handleDislikeClick(card) : handleLikeClick(card)}
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
      <img className="card__image" src={card.url} alt="Кадр из фильма" />
    </section>
  );
}

export default MoviesCard;
