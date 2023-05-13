import React from 'react';
import promoLogoPath from '../../images/promo-logo.svg';

function Promo (props)  {
  return (
    <div className="promo">
      <div className="promo__text-block">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      </div>
      <img className="promo__logo" src={promoLogoPath} alt="Логотип спираль" />
    </div>
  );
}

export default Promo;
